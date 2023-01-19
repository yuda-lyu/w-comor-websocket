/*!
 * w-comor-websocket-client v1.0.35
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("ws")):"function"==typeof define&&define.amd?define(["ws"],n):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-comor-websocket-client"]=n(t.ws)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=n(t);function r(){return"undefined"!=typeof window&&void 0!==window.document}function o(t){var n=Object.prototype.toString.call(t);return"[object Function]"===n||"[object AsyncFunction]"===n}function i(t){var n=null;t.url||(t.url="ws://localhost:8080"),t.token||(t.token="*");var i,u=function(){var t=r(),n="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;return{isBrowser:t=t||n,isWebWorker:n,isNode:"undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node}}().isBrowser;i=u?("undefined"!=typeof self?self:r()?window:"undefined"!=typeof global?global:null).WebSocket:e.default;try{n=new i(t.url+"/?token="+t.token)}catch(t){n=null}if(null===n)return{error:"can not new MixWS"};function c(){o(t.open)&&t.open()}function a(){o(t.close)&&t.close()}function s(n){o(t.message)&&t.message(n)}function f(e){o(t.error)&&t.error(e),n.close()}return u?(n.onopen=c,n.onmessage=function(t){s(t.data)},n.onclose=a,n.onerror=f):(n.on("open",c),n.on("message",s),n.on("close",a),n.on("error",f)),n}var u=Array.isArray;function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var s="object"==c(a)&&a&&a.Object===Object&&a,f="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,l=s||f||Function("return this")(),v=l.Symbol,p=Object.prototype,h=p.hasOwnProperty,y=p.toString,d=v?v.toStringTag:void 0;var _=function(t){var n=h.call(t,d),e=t[d];try{t[d]=void 0;var r=!0}catch(t){}var o=y.call(t);return r&&(n?t[d]=e:delete t[d]),o},b=Object.prototype.toString;var g=function(t){return b.call(t)},w=v?v.toStringTag:void 0;var m=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":w&&w in Object(t)?_(t):g(t)};var j=function(t){return null!=t&&"object"==c(t)};var O=function(t){return"symbol"==c(t)||j(t)&&"[object Symbol]"==m(t)},S=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var k=function(t,n){if(u(t))return!1;var e=c(t);return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!O(t))||(x.test(t)||!S.test(t)||null!=n&&t in Object(n))};var N=function(t){var n=c(t);return null!=t&&("object"==n||"function"==n)};var P,A=function(t){if(!N(t))return!1;var n=m(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n},z=l["__core-js_shared__"],$=(P=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var T=function(t){return!!$&&$ in t},C=Function.prototype.toString;var F=function(t){if(null!=t){try{return C.call(t)}catch(t){}try{return t+""}catch(t){}}return""},E=/^\[object .+?Constructor\]$/,L=Function.prototype,W=Object.prototype,M=L.toString,I=W.hasOwnProperty,B=RegExp("^"+M.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var G=function(t){return!(!N(t)||T(t))&&(A(t)?B:E).test(F(t))};var J=function(t,n){return null==t?void 0:t[n]};var R=function(t,n){var e=J(t,n);return G(e)?e:void 0},q=R(Object,"create");var U=function(){this.__data__=q?q(null):{},this.size=0};var D=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},H=Object.prototype.hasOwnProperty;var K=function(t){var n=this.__data__;if(q){var e=n[t];return"__lodash_hash_undefined__"===e?void 0:e}return H.call(n,t)?n[t]:void 0},Q=Object.prototype.hasOwnProperty;var V=function(t){var n=this.__data__;return q?void 0!==n[t]:Q.call(n,t)};var X=function(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=q&&void 0===n?"__lodash_hash_undefined__":n,this};function Y(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}Y.prototype.clear=U,Y.prototype.delete=D,Y.prototype.get=K,Y.prototype.has=V,Y.prototype.set=X;var Z=Y;var tt=function(){this.__data__=[],this.size=0};var nt=function(t,n){return t===n||t!=t&&n!=n};var et=function(t,n){for(var e=t.length;e--;)if(nt(t[e][0],n))return e;return-1},rt=Array.prototype.splice;var ot=function(t){var n=this.__data__,e=et(n,t);return!(e<0)&&(e==n.length-1?n.pop():rt.call(n,e,1),--this.size,!0)};var it=function(t){var n=this.__data__,e=et(n,t);return e<0?void 0:n[e][1]};var ut=function(t){return et(this.__data__,t)>-1};var ct=function(t,n){var e=this.__data__,r=et(e,t);return r<0?(++this.size,e.push([t,n])):e[r][1]=n,this};function at(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}at.prototype.clear=tt,at.prototype.delete=ot,at.prototype.get=it,at.prototype.has=ut,at.prototype.set=ct;var st=at,ft=R(l,"Map");var lt=function(){this.size=0,this.__data__={hash:new Z,map:new(ft||st),string:new Z}};var vt=function(t){var n=c(t);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t};var pt=function(t,n){var e=t.__data__;return vt(n)?e["string"==typeof n?"string":"hash"]:e.map};var ht=function(t){var n=pt(this,t).delete(t);return this.size-=n?1:0,n};var yt=function(t){return pt(this,t).get(t)};var dt=function(t){return pt(this,t).has(t)};var _t=function(t,n){var e=pt(this,t),r=e.size;return e.set(t,n),this.size+=e.size==r?0:1,this};function bt(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}bt.prototype.clear=lt,bt.prototype.delete=ht,bt.prototype.get=yt,bt.prototype.has=dt,bt.prototype.set=_t;var gt=bt;function wt(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var e=function e(){var r=arguments,o=n?n.apply(this,r):r[0],i=e.cache;if(i.has(o))return i.get(o);var u=t.apply(this,r);return e.cache=i.set(o,u)||i,u};return e.cache=new(wt.Cache||gt),e}wt.Cache=gt;var mt=wt;var jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ot=/\\(\\)?/g,St=function(t){var n=mt(t,(function(t){return 500===e.size&&e.clear(),t})),e=n.cache;return n}((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(jt,(function(t,e,r,o){n.push(r?o.replace(Ot,"$1"):e||t)})),n}));var xt=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o},kt=v?v.prototype:void 0,Nt=kt?kt.toString:void 0;var Pt=function t(n){if("string"==typeof n)return n;if(u(n))return xt(n,t)+"";if(O(n))return Nt?Nt.call(n):"";var e=n+"";return"0"==e&&1/n==-Infinity?"-0":e};var At=function(t){return null==t?"":Pt(t)};var zt=function(t,n){return u(t)?t:k(t,n)?[t]:St(At(t))};var $t=function(t){if("string"==typeof t||O(t))return t;var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n};var Tt=function(t,n){for(var e=0,r=(n=zt(n,t)).length;null!=t&&e<r;)t=t[$t(n[e++])];return e&&e==r?t:void 0};var Ct=function(t,n,e){var r=null==t?void 0:Tt(t,n);return void 0===r?e:r},Ft=function(){try{var t=R(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Et=function(t,n,e){"__proto__"==n&&Ft?Ft(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e},Lt=Object.prototype.hasOwnProperty;var Wt=function(t,n,e){var r=t[n];Lt.call(t,n)&&nt(r,e)&&(void 0!==e||n in t)||Et(t,n,e)},Mt=/^(?:0|[1-9]\d*)$/;var It=function(t,n){var e=c(t);return!!(n=null==n?9007199254740991:n)&&("number"==e||"symbol"!=e&&Mt.test(t))&&t>-1&&t%1==0&&t<n};var Bt=function(t,n,e,r){if(!N(t))return t;for(var o=-1,i=(n=zt(n,t)).length,u=i-1,c=t;null!=c&&++o<i;){var a=$t(n[o]),s=e;if("__proto__"===a||"constructor"===a||"prototype"===a)return t;if(o!=u){var f=c[a];void 0===(s=r?r(f,a,c):void 0)&&(s=N(f)?f:It(n[o+1])?[]:{})}Wt(c,a,s),c=c[a]}return t};var Gt=function(t,n,e){return null==t?t:Bt(t,n,e)};function Jt(){var t,n,e=new Promise((function(){t=arguments[0],n=arguments[1]}));return e.resolve=t,e.reject=n,e}var Rt=/\s/;var qt=function(t){for(var n=t.length;n--&&Rt.test(t.charAt(n)););return n},Ut=/^\s+/;var Dt=function(t){return t?t.slice(0,qt(t)+1).replace(Ut,""):t},Ht=/^[-+]0x[0-9a-f]+$/i,Kt=/^0b[01]+$/i,Qt=/^0o[0-7]+$/i,Vt=parseInt;var Xt=function(t){if("number"==typeof t)return t;if(O(t))return NaN;if(N(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=N(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=Dt(t);var e=Kt.test(t);return e||Qt.test(t)?Vt(t.slice(2),e?2:8):Ht.test(t)?NaN:+t},Yt=1/0;var Zt=function(t){return t?(t=Xt(t))===Yt||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var tn=function(t){var n=Zt(t),e=n%1;return n==n?e?n-e:n:0};var nn=function(t){return"number"==typeof t&&t==tn(t)};function en(t){return!(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)||""===t)}function rn(t){var n=!1;return en(t)?n=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(n=!0),n}function on(t){return rn(t)?Zt(t):0}var un=l.isFinite,cn=Math.min;var an=function(t){var n=Math[t];return function(t,e){if(t=Xt(t),(e=null==e?0:cn(tn(e),292))&&un(t)){var r=(At(t)+"e").split("e"),o=n(r[0]+"e"+(+r[1]+e));return+((r=(At(o)+"e").split("e"))[0]+"e"+(+r[1]-e))}return n(t)}}("round");function sn(t){if(!rn(t))return 0;t=on(t);var n=an(t);return"0"===String(n)?0:n}function fn(t){return!!function(t){return!!rn(t)&&(t=on(t),nn(t))}(t)&&sn(t)>0}var ln="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),vn=ln.length;function pn(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,n=[];t=fn(t)?sn(t):32;for(var e=0;e<t;e++)n[e]=ln[0|Math.random()*vn];var r=n.join("");return r}var hn=function(t){var n={exports:{}};return t(n,n.exports),n.exports}((function(t){var n=Object.prototype.hasOwnProperty,e="~";function r(){}function o(t,n,e){this.fn=t,this.context=n,this.once=e||!1}function i(t,n,r,i,u){if("function"!=typeof r)throw new TypeError("The listener must be a function");var c=new o(r,i||t,u),a=e?e+n:n;return t._events[a]?t._events[a].fn?t._events[a]=[t._events[a],c]:t._events[a].push(c):(t._events[a]=c,t._eventsCount++),t}function u(t,n){0==--t._eventsCount?t._events=new r:delete t._events[n]}function c(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(e=!1)),c.prototype.eventNames=function(){var t,r,o=[];if(0===this._eventsCount)return o;for(r in t=this._events)n.call(t,r)&&o.push(e?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},c.prototype.listeners=function(t){var n=e?e+t:t,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,u=new Array(i);o<i;o++)u[o]=r[o].fn;return u},c.prototype.listenerCount=function(t){var n=e?e+t:t,r=this._events[n];return r?r.fn?1:r.length:0},c.prototype.emit=function(t,n,r,o,i,u){var c=e?e+t:t;if(!this._events[c])return!1;var a,s,f=this._events[c],l=arguments.length;if(f.fn){switch(f.once&&this.removeListener(t,f.fn,void 0,!0),l){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,n),!0;case 3:return f.fn.call(f.context,n,r),!0;case 4:return f.fn.call(f.context,n,r,o),!0;case 5:return f.fn.call(f.context,n,r,o,i),!0;case 6:return f.fn.call(f.context,n,r,o,i,u),!0}for(s=1,a=new Array(l-1);s<l;s++)a[s-1]=arguments[s];f.fn.apply(f.context,a)}else{var v,p=f.length;for(s=0;s<p;s++)switch(f[s].once&&this.removeListener(t,f[s].fn,void 0,!0),l){case 1:f[s].fn.call(f[s].context);break;case 2:f[s].fn.call(f[s].context,n);break;case 3:f[s].fn.call(f[s].context,n,r);break;case 4:f[s].fn.call(f[s].context,n,r,o);break;default:if(!a)for(v=1,a=new Array(l-1);v<l;v++)a[v-1]=arguments[v];f[s].fn.apply(f[s].context,a)}}return!0},c.prototype.on=function(t,n,e){return i(this,t,n,e,!1)},c.prototype.once=function(t,n,e){return i(this,t,n,e,!0)},c.prototype.removeListener=function(t,n,r,o){var i=e?e+t:t;if(!this._events[i])return this;if(!n)return u(this,i),this;var c=this._events[i];if(c.fn)c.fn!==n||o&&!c.once||r&&c.context!==r||u(this,i);else{for(var a=0,s=[],f=c.length;a<f;a++)(c[a].fn!==n||o&&!c[a].once||r&&c[a].context!==r)&&s.push(c[a]);s.length?this._events[i]=1===s.length?s[0]:s:u(this,i)}return this},c.prototype.removeAllListeners=function(t){var n;return t?(n=e?e+t:t,this._events[n]&&u(this,n)):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=e,c.EventEmitter=c,t.exports=c}));function yn(){return new hn}return function(t){var n=Jt(),e=null,u={},c=new yn,a=r()?"browser":"nodejs";function s(){var r={url:null,token:null,open:function(){!function(){o(t.open)&&t.open();s("getFuncs",null)}()},close:function(){!function(){o(t.close)&&t.close();f()}()},message:function(t){!function(t){"browser"===a||(t=Buffer.from(t).toString("utf8"));var e=function(t){if(!en(t))return{};var n={};try{n=JSON.parse(t)}catch(t){n={}}return n}(t);if("sys"===Ct(e,"output.sys")&&Ct(e,"output.funcs")){var r=e.output.funcs;u={};for(var o=function(t){var n=r[t];Gt(u,n,(function(t){return s(n,t)}))},i=0;i<r.length;i++)o(i);n.resolve(u)}if(Ct(e,"_id")&&Ct(e,"output")){var f=Ct(e,"_id"),l=Ct(e,"output");c.emit(f,l)}}(t)},error:function(n){!function(n){o(t.error)&&t.error(n);e.close()}(n)}};t.url||(r.url="ws://localhost:8080"),t.token||(r.token="*");try{e=new i(r)}catch(t){return f(),null}if(Ct(e,"error"))return f(),null;function s(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=Jt(),u=pn(),a={token:t.token,_id:u,func:n,input:r};return e.readyState===e.OPEN&&e.send(JSON.stringify(a),(function(n){n&&o(t.error)&&t.error(n)})),c.on(u,(function(t){i.resolve(t),c.removeAllListeners(u)})),i}}function f(){setTimeout((function(){o(t.reconn)&&t.reconn(),s()}),1e3)}return s(),n}}));
//# sourceMappingURL=w-comor-websocket-client.umd.js.map
