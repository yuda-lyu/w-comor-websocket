# w-comor-websocket
A websocket communicator in nodejs and browser.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-comor-websocket.svg?style=flat)](https://npmjs.org/package/w-comor-websocket) 
[![Build Status](https://travis-ci.org/yuda-lyu/w-comor-websocket.svg?branch=master)](https://travis-ci.org/yuda-lyu/w-comor-websocket) 
[![license](https://img.shields.io/npm/l/w-comor-websocket.svg?style=flat)](https://npmjs.org/package/w-comor-websocket) 
[![gzip file size](http://img.badgesize.io/yuda-lyu/w-comor-websocket/master/dist/ws-server.umd.js.svg?compression=gzip)](https://github.com/yuda-lyu/w-comor-websocket)
[![npm download](https://img.shields.io/npm/dt/w-comor-websocket.svg)](https://npmjs.org/package/w-comor-websocket) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-comor-websocket.svg)](https://www.jsdelivr.com/package/npm/w-comor-websocket)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-comor-websocket/global.html).

## Parts
`w-comor-websocket` includes 3 parts: 
* `ws-server`: for node server
* `ws-client-node`: for node client
* `ws-client-web`: for browser client

## Installation
### Using npm(ES6 module):
> **Note:** `ws-server` and `ws-client-node` depends on `ws`
```alias
npm i w-comor-websocket
```
#### Example for `ws-server`:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-comor-websocket/blob/master/srv.mjs)]
```alias
import WsServer from 'w-comor-websocket/dist/ws-server.umd.js'

function random(min, max) {
    return Math.floor(Math.random()max) + min
}

let opt = {
    port: 8080,
    authenticate: async function(token) { 
        //authenticate user by token
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(true)
            }, 1000)
        })
    },
    filterFuncs: async function(token, funcs) {
        //resolve funcs by authenticating user
        return new Promise(function(resolve, reject) {
            funcs = funcs.filter(function(v) {
                return v.indexOf('Hide') < 0
            })
            resolve(funcs)
        })
    },
    funcs: {
        add: function({ p1, p2 }) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve(p1 + p2)
                }, random(100, 3000))
            })
        },
        minu: function({ p1, p2 }) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve(p1 - p2)
                }, random(100, 3000))
            })
        },
    },
}

new WsServer(opt)
```
#### Example for `ws-client-node`:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-comor-websocket/blob/master/scla.mjs)]
```alias
import WsClientNode from 'w-comor-websocket/dist/ws-client-node.umd.js'

//opt
let opt = {
    url: 'ws://localhost:8080',
    token: '*',
    open: function() {
        consoloe.log('client nodejs: open')
    },
    close: function() {
        consoloe.log('client nodejs: close')
    },
    error: function(err) {
        consoloe.log('client nodejs: error:', err)
    },
    reconn: function() {
        consoloe.log('client nodejs: reconn')
    },
}

//WsClientNode
new WsClientNode(opt)
    .then(function(wo) {

        function core(ps) {
            wo.add(ps)
                .then(function(r) {
                    consoloe.log(`client nodejs: add(${JSON.stringify(ps)})=${r}`)
                })
            wo.minu(ps)
                .then(function(r) {
                    consoloe.log(`client nodejs: minu(${JSON.stringify(ps)})=${r}`)
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
```

### In a browser(UMD module):
> **Note:** `ws-client-web` does't depend on any package.

[Optional] Add script with nomodule for IE11.
```alias
<script nomodule src="https://cdn.jsdelivr.net/npm/@babel/polyfill/dist/polyfill.min.js"></script>
```
[Necessary] Add script for ws-client-web.
```alias
<script src="https://cdn.jsdelivr.net/npm/w-comor-websocket@1.0.2/dist/ws-client-web.umd.js"></script>></script>
```
#### Example for `ws-client-web`:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-comor-websocket/blob/master/web.html)]
```alias
//opt
let opt = {
    url: 'ws://localhost:8080',
    token: '*',
    open: function() {
        consoloe.log('client web: open')
    },
    close: function() {
        consoloe.log('client web: close')
    },
    error: function(err) {
        consoloe.log('client web: error:', err)
    },
    reconn: function() {
        consoloe.log('client web: reconn')
    },
}

//WsClientWeb
let WsClientWeb = window['ws-client-web']
new WsClientWeb(opt)
    .then(function(wo) {

        function core(ps) {
            wo.add(ps)
                .then(function(r) {
                    consoloe.log(`client web: add(${JSON.stringify(ps)})=${r}`)
                })
            wo.minu(ps)
                .then(function(r) {
                    consoloe.log(`client web: minu(${JSON.stringify(ps)})=${r}`)
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
```