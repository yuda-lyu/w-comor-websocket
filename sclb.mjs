//import WsClientNode from './src/WsClientNode.mjs'
import WsClientNode from './dist/ws-client-node.umd.js'

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

new WsClientNode(opt)
    .then(function(wo) {
        console.log('client nodejs[port:8081]: funcs: ', wo)

        function core(ps) {
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
