//import WsClientNode from './src/WsClientNode.mjs'
import WsClientNode from './dist/ws-client-node.umd.js'

let opt = {
    url: 'ws://localhost:8080',
    token: '*',
    open: function() {
        console.log('client b: open')
    },
    close: function() {
        console.log('client b: close')
    },
    error: function(err) {
        console.log('client b: error:', err)
    },
    reconn: function() {
        console.log('client b: reconn')
    },
}

WsClientNode(opt)
    .then(function(wo) {

        function core(ps) {
            wo.add(ps)
                .then(function(r) {
                    console.log(`client b: add(${JSON.stringify(ps)})=${r}`)
                })
            wo.minu(ps)
                .then(function(r) {
                    console.log(`client b: minu(${JSON.stringify(ps)})=${r}`)
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
