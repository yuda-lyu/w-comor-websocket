//import WsClientNode from './src/WsClientNode.mjs'
import WsClientNode from './dist/ws-client-node.umd.js'

let opt = {
    url: 'ws://localhost:8080',
    token: '*',
    open: function() {
        console.log('client a: open')
    },
    close: function() {
        console.log('client a: close')
    },
    error: function(err) {
        console.log('client a: error:', err)
    },
    reconn: function() {
        console.log('client a: reconn')
    },
}

WsClientNode(opt)
    .then(function(wo) {

        function core(ps) {
            wo.add(ps)
                .then(function(r) {
                    console.log(`client a: add(${JSON.stringify(ps)})=${r}`)
                })
            wo.minu(ps)
                .then(function(r) {
                    console.log(`client a: minu(${JSON.stringify(ps)})=${r}`)
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
