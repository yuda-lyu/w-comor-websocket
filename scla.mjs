//import WsClientNode from './src/WsClientNode.mjs'
import WsClientNode from './dist/ws-client-node.umd.js'

let opt = {
    url: 'ws://localhost:8080',
    token: '*',
    open: function() {
        console.log('client nodejs[port:8080]: open')
    },
    close: function() {
        console.log('client nodejs[port:8080]: close')
    },
    error: function(err) {
        console.log('client nodejs[port:8080]: error:', err)
    },
    reconn: function() {
        console.log('client nodejs[port:8080]: reconn')
    },
}

new WsClientNode(opt)
    .then(function(wo) {
        console.log('client nodejs[port:8080]: funcs: ', wo)

        function core(ps) {
            wo.add(ps)
                .then(function(r) {
                    console.log(`client nodejs[port:8080]: add(${JSON.stringify(ps)})=${r}`)
                })
            wo.minu(ps)
                .then(function(r) {
                    console.log(`client nodejs[port:8080]: minu(${JSON.stringify(ps)})=${r}`)
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