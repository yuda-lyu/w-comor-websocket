import WSC from 'w-websocket-client/src/WWebsocketClient.mjs'
import get from 'lodash-es/get.js'
import set from 'lodash-es/set.js'
import genPm from 'wsemi/src/genPm.mjs'
import genID from 'wsemi/src/genID.mjs'
import Evem from 'wsemi/src/evem.mjs'
import j2o from 'wsemi/src/j2o.mjs'
import isWindow from 'wsemi/src/isWindow.mjs'
import isfun from 'wsemi/src/isfun.mjs'


/**
 * 建立WebSocket使用者(Node.js與Browser)端物件
 *
 * @param {Object} opt 輸入設定參數物件
 * @param {String} [opt.url='ws://localhost:8080'] 輸入WebSocket伺服器ws網址，預設為'ws://localhost:8080'
 * @param {String} [opt.token='*'] 輸入使用者認證用token，預設為'*'
 * @param {Function} opt.open 輸入監聽open函數
 * @param {Function} opt.close 輸入監聽close函數
 * @param {Function} opt.error 輸入監聽error函數
 * @param {Function} opt.reconn 輸入監聽reconn函數
 * @returns {Promise} 回傳Promise，resolve為映射伺服器端可用函數之物件，各函數輸入皆為單一物件，各函數回傳皆為Promise，用resolve與reject處理回傳結果
 * @example
 *
 * import WComorWebsocketClient from 'w-comor-websocket/dist/w-comor-websocket-client.umd.js'
 *
 * //opt
 * let opt = {
 *     url: 'ws://localhost:8080',
 *     token: '*',
 *     open: function() {
 *         console.log('client nodejs: open')
 *     },
 *     close: function() {
 *         console.log('client nodejs: close')
 *     },
 *     error: function(err) {
 *         console.log('client nodejs: error:', err)
 *     },
 *     reconn: function() {
 *         console.log('client nodejs: reconn')
 *     },
 * }
 *
 * //WComorWebsocketClient
 * new WComorWebsocketClient(opt)
 *     .then(function(wo) {
 *         console.log('client: funcs: ', wo)
 *
 *         function core(ps) {
 *             wo.group.plus(ps)
 *                 .then(function(r) {
 *                     console.log('client: plus(' + JSON.stringify(ps) + ')=' + r)
 *                 })
 *                 .catch(function(err) {
 *                     console.log('client: plus: catch: ', err)
 *                 })
 *             wo.group.div(ps)
 *                 .then(function(r) {
 *                     console.log('client: div(' + JSON.stringify(ps) + ')=' + r)
 *                 })
 *                 .catch(function(err) {
 *                     console.log('client: div: catch: ', err)
 *                 })
 *             wo.add(ps)
 *                 .then(function(r) {
 *                     console.log(`client: add(${JSON.stringify(ps)})=${r}`)
 *                 })
 *                 .catch(function(err) {
 *                     console.log('client: add: catch: ', err)
 *                 })
 *             wo.minu(ps)
 *                 .then(function(r) {
 *                     console.log(`client: minu(${JSON.stringify(ps)})=${r}`)
 *                 })
 *                 .catch(function(err) {
 *                     console.log('client: minu: catch: ', err)
 *                 })
 *         }
 *
 *         let i = 100
 *         setInterval(function() {
 *             i += 1
 *             core({
 *                 p1: i,
 *                 p2: 10,
 *             })
 *         }, 1000)
 *
 *     })
 *     .catch(function(err) {
 *         console.log('client: catch', err)
 *     })
 *
 */
function WComorWebsocketClient(opt) {
    let pm = genPm()
    let wsc = null //WebSocket
    let wo = {} //回傳操作物件


    //ev
    let ev = new Evem()


    //env
    let env = isWindow() ? 'browser' : 'nodejs'
    // console.log('env', env)


    function core() {


        //optt
        let optt = {
            url: null,
            token: null,
            open: function() {
                fOpen()
            },
            close: function() {
                fClose()
            },
            message: function(data) {
                fMessage(data)
            },
            error: function(err) {
                fError(err)
            },
        }


        //default
        if (!opt.url) {
            optt.url = 'ws://localhost:8080'
        }
        if (!opt.token) {
            optt.token = '*'
        }


        //WebSocket, 網址傳token參數作為識別使用者
        try {
            wsc = new WSC(optt)
        }
        catch (err) {
            reconn()
            return null
        }


        //check
        if (get(wsc, 'error')) {
            reconn()
            return null
        }


        //fOpen
        function fOpen() {
            if (isfun(opt.open)) {
                opt.open()
            }
            execFunction('getFuncs', null)
        }


        //execFunction
        function execFunction(func, input = null) {
            let pmm = genPm()

            //_id
            let _id = genID()

            //msg
            let msg = {
                token: opt.token,
                _id,
                func,
                input,
            }

            //send
            if (wsc.readyState === wsc.OPEN) {
                wsc.send(JSON.stringify(msg), function(err) {
                    if (err) {
                        if (isfun(opt.error)) {
                            opt.error(err)
                        }
                    }
                })
            }

            //等待結果回傳
            ev.on(_id, function (output) {

                //resolve
                pmm.resolve(output)

                //removeAllListeners
                ev.removeAllListeners(_id)

            })

            return pmm
        }


        //fMessage
        function fMessage(message) {
            // console.log('fMessage message', message)

            if (env === 'browser') {
                //瀏覽器端會自動轉string
            }
            else { //nodejs

                //message
                message = Buffer.from(message).toString('utf8')

            }

            //data
            let data = j2o(message)

            //get sys funcs
            if (get(data, 'output.sys') === 'sys' && get(data, 'output.funcs')) {

                //funcs
                let funcs = data['output']['funcs']

                //clear wo
                wo = {}

                //bind funcs
                for (let i = 0; i < funcs.length; i++) {

                    //func
                    let func = funcs[i]

                    //add func
                    let f = function(input) {
                        return execFunction(func, input)
                    }
                    set(wo, func, f)

                }

                //resolve
                pm.resolve(wo)

            }

            //get result
            if (get(data, '_id') && get(data, 'output')) {

                //_id
                let _id = get(data, '_id')

                //output
                let output = get(data, 'output')

                //emit
                ev.emit(_id, output)

            }

        }


        //fClose
        function fClose() {
            if (isfun(opt.close)) {
                opt.close()
            }
            reconn()
        }


        //fError
        function fError(err) {
            if (isfun(opt.error)) {
                opt.error(err)
            }
            wsc.close()
        }


    }


    function reconn() {
        setTimeout(function() {
            if (isfun(opt.reconn)) {
                opt.reconn()
            }
            core()
        }, 1000)
    }


    //core
    core()


    return pm
}


export default WComorWebsocketClient
