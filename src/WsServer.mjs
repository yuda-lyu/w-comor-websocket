import WebSocket from 'ws'
import keys from 'lodash/keys'
import genPm from 'wsemi/src/genPm.mjs'
import haskey from 'wsemi/src/haskey.mjs'
import urlParse from 'wsemi/src/urlParse.mjs'
import getdtvstr from 'wsemi/src/getdtvstr.mjs'
import getdtv from 'wsemi/src/getdtv.mjs'
import j2o from 'wsemi/src/j2o.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import arrhas from 'wsemi/src/arrhas.mjs'


/**
 * 建立WebSocket伺服器
 *
 * @param {Object} opt 輸入設定參數物件
 * @param {Integer} [opt.port=8080] 輸入WebSocket伺服器所在port，預設8080
 * @param {Function} opt.authenticate 輸入使用者身份認證函數，供伺服器端驗證之用，函數會傳入使用者端連線之token參數，回傳為Promise，resolve(true)為驗證通過，resolve(false)為驗證不通過
 * @param {Object} opt.funcs 輸入伺服器端供使用者端呼叫之函數物件，各key為函數名稱，對應value為函數本體。各函數之輸入需為單一物件，而各函數回傳皆為Promise，可通過resolve與reject回傳結果
 * @example
 *
 * import WsServer from 'w-comor-websocket/dist/ws-server.umd.js'
 *
 * function random(min, max) {
 *     return Math.floor(Math.random() * max) + min
 * }
 *
 * let opt = {
 *     port: 8080,
 *     authenticate: async function(token) {
 *         //使用token驗證使用者身份
 *         return new Promise(function(resolve, reject) {
 *             setTimeout(function() {
 *                 resolve(true)
 *             }, 1000)
 *         })
 *     },
 *     filterFuncs: async function(token, funcs) {
 *         //使用token驗證使用者身份與過濾可用funcs
 *         return new Promise(function(resolve, reject) {
 *             funcs = funcs.filter(function(v) {
 *                 return v.indexOf('Hide') < 0
 *             })
 *             resolve(funcs)
 *         })
 *     },
 *     funcs: {
 *         add: function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 + p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *         addHide: function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 + p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *         minu: function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 - p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *     },
 * }
 *
 * new WsServer(opt)
 *
 */
function WsServer(opt) {


    //default
    if (!opt.port) {
        opt.port = 8080
    }


    //funcs
    let funcs = []
    if (haskey(opt, 'funcs')) {
        funcs = keys(opt['funcs'])
    }


    // //check notlist
    // let notlist = [
    //     'url', 'token', 'open', 'close', 'error', 'reconn', 'getFuncs', 'filterFuncs'
    // ]
    // each(notlist, function(v) {
    //     let b = arrhas(funcs, v)
    //     if (b) {
    //         console.warn(`funcs can not include: ${v}`)
    //     }
    // })


    //WebSocketServer
    let WebSocketServer = WebSocket.Server


    //authenticate
    function authenticate(token) {
        let pm = genPm()
        if (isfun(opt.authenticate)) {
            opt.authenticate(token)
                .then(function(vd) {
                    pm.resolve(vd)
                })
        }
        else {
            pm.resolve(true)
        }
        return pm
    }


    //serverSettings
    let serverSettings = {
        port: opt.port,
        verifyClient: async function(info, done) {

            //data
            let data = urlParse(info.req.url)

            //token
            let token = getdtvstr(data, 'token')

            //vd
            let vd = await authenticate(token)

            //callback
            done(vd)

        }
    }


    //wss
    let wss = new WebSocketServer(serverSettings)


    //connection
    let clients = []
    wss.on('connection', function(wsc, req) {
        //console.log('connection', wsc)
        //console.log('connection', req.connection.remoteAddress)


        //push
        clients.push(wsc)


        //message
        wsc.on('message', async function(message) {
            //console.log('message', message)

            //data
            let data = j2o(message)

            //token
            let token = getdtvstr(data, 'token')

            //vd
            let vd = await authenticate(token)

            //check
            if (vd) {

                //func
                let func = getdtvstr(data, 'func')

                //input
                let input = getdtv(data, 'input')

                //getFuncs
                if (func === 'getFuncs') {

                    if (isfun(opt.filterFuncs)) {
                        funcs = await opt.filterFuncs(token, funcs)
                    }

                    //send funcs
                    if (wsc.readyState === WebSocket.OPEN) {
                        wsc.send(JSON.stringify({ sys: 'sys', funcs: funcs }), function(err) {
                            if (err) {
                                console.log(`Server: send funcs error: ${err}`)
                            }
                        })
                    }

                }

                //call
                if (arrhas(funcs, func)) {

                    //call func in opt.funcs
                    let output = await opt['funcs'][func](input)

                    //add output
                    data['output'] = output

                    //send
                    if (wsc.readyState === WebSocket.OPEN) {
                        wsc.send(JSON.stringify(data), function(err) {
                            if (err) {
                                console.log(`Server: send output error: ${err}`)
                            }
                        })
                    }

                }

            }

        })


        //close
        wsc.on('close', function(message) {

            //刪除ws
            clients = clients.filter(function(wst) {
                return wst !== wsc
            })

        })


    })


    console.log(`Server running at: ws://localhost:${serverSettings.port}`)


    setInterval(function() {
        console.log(`Server[port:${serverSettings.port}] now clients: ${clients.length}`)
    }, 1000)


}


export default WsServer