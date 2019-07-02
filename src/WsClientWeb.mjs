import get from 'lodash/get'
import genPm from 'wsemi/src/genPm.mjs'
import genID from 'wsemi/src/genID.mjs'
import j2o from 'wsemi/src/j2o.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import haskey from 'wsemi/src/haskey.mjs'


/**
 * 建立WebSocket使用者(Browser)端物件
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
 * <script src="https://cdn.jsdelivr.net/npm/w-comor-websocket@latest/dist/ws-client-web.umd.js"></script>
 *
 * <script>
 *
 *     //opt
 *     let opt = {
 *         url: 'ws://localhost:8080',
 *         token: '*',
 *         open: function() {
 *             console.log('client web: open')
 *         },
 *         close: function() {
 *             console.log('client web: close')
 *         },
 *         error: function(err) {
 *             console.log('client web: error:', err)
 *         },
 *         reconn: function() {
 *             console.log('client web: reconn')
 *         },
 *     }
 *
 *     //WsClientWeb
 *     let WsClientWeb = window['ws-client-web']
 *     new WsClientWeb(opt)
 *         .then(function(wo) {
 *             console.log('client web: funcs: '+JSON.stringify(Object.keys(wo)))
 *
 *             function core(ps) {
 *                 wo.add(ps)
 *                     .then(function(r) {
 *                         console.log('client web: add('+JSON.stringify(ps)+')='+r)
 *                     })
 *                     .catch(function(err) {
 *                         console.log('client web: add: catch: ', err)
 *                     })
 *                 wo.minu(ps)
 *                     .then(function(r) {
 *                         console.log('client web: minu('+JSON.stringify(ps)+')='+r)
 *                     })
 *                     .catch(function(err) {
 *                         console.log('client web: minu: catch: ', err)
 *                     })
 *             }
 *
 *             let i = 100
 *             setInterval(function() {
 *                 i += 1
 *                 core({
 *                     p1: i,
 *                     p2: 10,
 *                 })
 *             }, 1000)
 *
 *         })
 *
 * </script>
 *
 */
function WsClientWeb(opt) {
    let pm = genPm()
    let msgs = {} //訊息佇列
    let wsc = null //WebSocket
    let wo = {} //回傳操作物件


    function core() {


        //default
        if (!opt.url) {
            opt.url = 'ws://localhost:8080'
        }
        if (!opt.token) {
            opt.token = '*'
        }


        //WebSocket, 網址傳token參數作為識別使用者
        try {
            wsc = new WebSocket(opt.url + '?' + 'token=' + opt.token)
        }
        catch (err) {
            reconn()
            return
        }

        //open, 瀏覽器端為onopen
        wsc.onopen = function () {
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
                _id: _id,
                func: func,
                input: input,
            }

            //add msgs
            msgs[_id] = null

            //send
            if (wsc.readyState === WebSocket.OPEN) {
                wsc.send(JSON.stringify(msg), function(err) {
                    if (err) {
                        if (isfun(opt.error)) {
                            opt.error(err)
                        }
                    }
                })
            }

            //等待結果回傳
            let t = setInterval(function() {
                if (msgs[_id] !== null) {
                    let output = get(msgs[_id], 'output')
                    delete msgs[_id]
                    pmm.resolve(output)
                    clearInterval(t)
                }
            }, 1000)

            return pmm
        }

        //message, 瀏覽器端為onmessage
        wsc.onmessage = function (ev) {

            //get message from ev.data
            let message = ev.data //瀏覽器端會被包至data

            //data
            let data = j2o(message)

            //get sys funcs
            if (get(data, 'sys') === 'sys' && haskey(data, 'funcs')) {

                //funcs
                let funcs = data['funcs']

                //clear wo
                wo = {}

                //bind funcs
                for (let i = 0; i < funcs.length; i++) {

                    //func
                    let func = funcs[i]

                    //add func
                    wo[func] = async function(input) {
                        return execFunction(func, input)
                    }

                }

                //resolve
                pm.resolve(wo)

            }

            //get result
            if (get(data, '_id')) {
                msgs[data._id] = data
            }

        }


        //close, 瀏覽器端為onclose
        wsc.onclose = function () {
            reconn()
        }


        //error, 瀏覽器端為onerror
        wsc.onerror = function(err) {
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


export default WsClientWeb
