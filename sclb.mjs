import WComorWebsocketClient from './src/WComorWebsocketClient.mjs'
//import WComorWebsocketClient from './dist/w-comor-websocket-client.umd.js'

let opt = {
    url: 'ws://localhost:8081',
    token: '*',
    open: function() {
        console.log('client nodejs[port:8081]: open')
    },
    close: function() {
        console.log('client nodejs[port:8081]: close')
    },
    error: function(err) {
        console.log('client nodejs[port:8081]: error:', err)
    },
    reconn: function() {
        console.log('client nodejs[port:8081]: reconn')
    },
}

new WComorWebsocketClient(opt)
    .then(function(wo) {
        console.log('client nodejs[port:8081]: funcs: ', wo)

        function core(ps) {
            wo.group.plus(ps)
                .then(function(r) {
                    console.log('client nodejs[port:8081]: plus(' + JSON.stringify(ps) + ')=' + r)
                })
                .catch(function(err) {
                    console.log('client nodejs[port:8081]: plus: catch: ', err)
                })
            wo.group.div(ps)
                .then(function(r) {
                    console.log('client nodejs[port:8081]: div(' + JSON.stringify(ps) + ')=' + r)
                })
                .catch(function(err) {
                    console.log('client nodejs[port:8081]: div: catch: ', err)
                })
            wo.add(ps)
                .then(function(r) {
                    console.log('client nodejs[port:8081]: add(' + JSON.stringify(ps) + ')=' + r)
                })
                .catch(function(err) {
                    console.log('client nodejs[port:8081]: add: catch: ', err)
                })
            wo.minu(ps)
                .then(function(r) {
                    console.log('client nodejs[port:8081]: minu(' + JSON.stringify(ps) + ')=' + r)
                })
                .catch(function(err) {
                    console.log('client nodejs[port:8081]: minu: catch: ', err)
                })
        }

        let i = 100
        setInterval(function() {
            i += 1
            core({
                p1: i,
                p2: 10,
            })
        }, 1000)

    })
    .catch(function(err) {
        console.log('client nodejs[port:8081]: catch: ', err)
    })

//node --experimental-modules --es-module-specifier-resolution=node sclb.mjs
