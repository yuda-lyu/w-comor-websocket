import WebSocket, { WebSocketServer } from 'ws'
import keys from 'lodash-es/keys'
import get from 'lodash-es/get'
import genPm from 'wsemi/src/genPm.mjs'
import haskey from 'wsemi/src/haskey.mjs'
import urlParse from 'wsemi/src/urlParse.mjs'
import j2o from 'wsemi/src/j2o.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import arrHas from 'wsemi/src/arrHas.mjs'


/**
 * 建立WebSocket伺服器
 *
 * @param {Object} opt 輸入設定參數物件
 * @param {Integer} [opt.port=8080] 輸入WebSocket伺服器所在port，預設8080
 * @param {Function} opt.authenticate 輸入使用者身份認證函數，供伺服器端驗證之用，函數會傳入使用者端連線之token參數，回傳為Promise，resolve(true)為驗證通過，resolve(false)為驗證不通過
 * @param {Object} [opt.funcs={}] 輸入伺服器端供使用者端呼叫之函數物件，各key為函數名稱，對應value為函數本體。各函數之輸入需為單一物件，而各函數回傳皆為Promise，可通過resolve與reject回傳結果，預設{}
 * @example
 *
 * import WComorWebsocketServer from 'w-comor-websocket/dist/w-comor-websocket-server.umd.js'
 *
 * function random(min, max) {
 *     return Math.floor(Math.random() * max) + min
 * }
 *
 * let opt = {
 *     port: 8080,
 *     authenticate: function(token) {
 *         //使用token驗證使用者身份
 *         return new Promise(function(resolve, reject) {
 *             setTimeout(function() {
 *                 resolve(true)
 *             }, 1000)
 *         })
 *     },
 *     filterFuncs: function(token, funcs) {
 *         //使用token驗證使用者身份與過濾可用funcs
 *         return new Promise(function(resolve, reject) {
 *             funcs = funcs.filter(function(v) {
 *                 return v.indexOf('Hide') < 0
 *             })
 *             resolve(funcs)
 *         })
 *     },
 *     onClientChange: function(clients, opt) {
 *         console.log(`Server[port:${opt.port}] now clients: ${clients.length}`)
 *     },
 *     funcs: {
 *         'group.plus': function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 * p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *         'group.div': function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 / p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *         'add': function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 + p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *         'addHide': function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 + p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *         'minu': function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 - p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *     },
 * }
 *
 * new WComorWebsocketServer(opt)
 *
 */
function WComorWebsocketServer(opt) {


    //default
    if (!opt.port) {
        opt.port = 8080
    }


    //funcs
    let funcs = []
    if (haskey(opt, 'funcs')) {
        funcs = keys(opt['funcs'])
    }


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
        verifyClient: function(info, done) {

            //data
            let data = urlParse(info.req.url)

            //token
            let token = get(data, 'token', '')

            //vd
            authenticate(token)
                .then(function(vd) {

                    //callback
                    done(vd)

                })

        },
        perMessageDeflate: {
            zlibDeflateOptions: {
                // See zlib defaults.
                chunkSize: 1024,
                memLevel: 7,
                level: 3
            },
            zlibInflateOptions: {
                chunkSize: 10 * 1024
            },
            // Other options settable:
            clientNoContextTakeover: true, // Defaults to negotiated value.
            serverNoContextTakeover: true, // Defaults to negotiated value.
            serverMaxWindowBits: 10, // Defaults to negotiated value.
            // Below options specified as default values.
            concurrencyLimit: 10, // Limits zlib concurrency for perf.
            threshold: 1024 // Size (in bytes) below which messages
            // should not be compressed if context takeover is disabled.
        },
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
        if (isfun(opt.onClientChange)) {
            opt.onClientChange(clients, opt)
        }


        //execFunction
        async function execFunction(data) {
            //console.log(`Server[port:${opt.port}]: `, data)

            //token
            let token = get(data, 'token', '')

            //vd
            let vd = await authenticate(token)

            //check
            if (vd) {

                //func
                let func = get(data, 'func', '')

                //input
                let input = get(data, 'input')

                //getFuncs
                if (func === 'getFuncs') {

                    if (isfun(opt.filterFuncs)) {
                        funcs = await opt.filterFuncs(token, funcs)
                    }

                    //add output
                    data['output'] = { sys: 'sys', funcs: funcs }

                }
                //call
                else if (arrHas(funcs, func)) {

                    //call func in opt.funcs
                    let output = await opt['funcs'][func](input)

                    //add output
                    data['output'] = output

                }
                else {

                    //add output
                    data['output'] = { err: `can not find: ${func}` }

                }

            }
            else {

                //add output
                data['output'] = { err: `can not authenticate token: ${token}` }

            }

            //delete input, 因input可能很大故回傳數據不包含原input
            delete data['input']

            //send
            if (wsc.readyState === WebSocket.OPEN) {
                wsc.send(JSON.stringify(data), function(err) {
                    if (err) {
                        console.log(`Server: send output error: ${err}`)
                    }
                })
            }

        }


        //message
        wsc.on('message', function(message, isBinary) {
            // console.log('received: %s', message, isBinary)

            //ws伺服器端改收到utf8的buffer, 得轉換成字串才能j2o
            message = Buffer.from(message).toString('utf8')

            //data
            let data = j2o(message)

            //execFunction
            execFunction(data)

        })


        //close
        wsc.on('close', function(message) {

            //刪除ws
            clients = clients.filter(function(wst) {
                return wst !== wsc
            })
            if (isfun(opt.onClientChange)) {
                opt.onClientChange(clients, opt)
            }

        })


    })


    console.log(`Server running at: ws://localhost:${opt.port}`)


}


export default WComorWebsocketServer
