/*!
 * w-comor-websocket-client v1.0.38
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("ws")):"function"==typeof define&&define.amd?define(["ws"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-comor-websocket-client"]=e(t.ws)}(this,(function(t){"use strict";function e(){return"undefined"!=typeof window&&void 0!==window.document}function n(t){let e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function r(r){let o=null;r.url||(r.url="ws://localhost:8080"),r.token||(r.token="*");let i,u=function(){let t=e(),n="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;return t=t||n,{isBrowser:t,isWebWorker:n,isNode:"undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node}}().isBrowser;i=u?("undefined"!=typeof self?self:e()?window:"undefined"!=typeof global?global:null).WebSocket:t;try{o=new i(r.url+"/?token="+r.token)}catch(t){o=null}if(null===o)return{error:"can not new MixWS"};function c(){n(r.open)&&r.open()}function s(){n(r.close)&&r.close()}function l(t){n(r.message)&&r.message(t)}function a(t){n(r.error)&&r.error(t),o.close()}return u?(o.onopen=c,o.onmessage=function(t){l(t.data)},o.onclose=s,o.onerror=a):(o.on("open",c),o.on("message",l),o.on("close",s),o.on("error",a)),o}var o=Array.isArray,i="object"==typeof global&&global&&global.Object===Object&&global,u="object"==typeof self&&self&&self.Object===Object&&self,c=i||u||Function("return this")(),s=c.Symbol,l=Object.prototype,a=l.hasOwnProperty,f=l.toString,p=s?s.toStringTag:void 0;var v=Object.prototype.toString;var h="[object Null]",y="[object Undefined]",_=s?s.toStringTag:void 0;function d(t){return null==t?void 0===t?y:h:_&&_ in Object(t)?function(t){var e=a.call(t,p),n=t[p];try{t[p]=void 0;var r=!0}catch(t){}var o=f.call(t);return r&&(e?t[p]=n:delete t[p]),o}(t):function(t){return v.call(t)}(t)}var b="[object Symbol]";function g(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&d(t)==b}var w=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,m=/^\w*$/;function j(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var O="[object AsyncFunction]",x="[object Function]",S="[object GeneratorFunction]",k="[object Proxy]";var P,A=c["__core-js_shared__"],z=(P=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var N=Function.prototype.toString;var $=/^\[object .+?Constructor\]$/,C=Function.prototype,F=Object.prototype,T=C.toString,E=F.hasOwnProperty,L=RegExp("^"+T.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function W(t){if(!j(t)||(e=t,z&&z in e))return!1;var e,n=function(t){if(!j(t))return!1;var e=d(t);return e==x||e==S||e==O||e==k}(t)?L:$;return n.test(function(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function M(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return W(n)?n:void 0}var B=M(Object,"create");var G=Object.prototype.hasOwnProperty;var I=Object.prototype.hasOwnProperty;function J(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function R(t,e){return t===e||t!=t&&e!=e}function q(t,e){for(var n=t.length;n--;)if(R(t[n][0],e))return n;return-1}J.prototype.clear=function(){this.__data__=B?B(null):{},this.size=0},J.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},J.prototype.get=function(t){var e=this.__data__;if(B){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return G.call(e,t)?e[t]:void 0},J.prototype.has=function(t){var e=this.__data__;return B?void 0!==e[t]:I.call(e,t)},J.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=B&&void 0===e?"__lodash_hash_undefined__":e,this};var U=Array.prototype.splice;function D(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}D.prototype.clear=function(){this.__data__=[],this.size=0},D.prototype.delete=function(t){var e=this.__data__,n=q(e,t);return!(n<0)&&(n==e.length-1?e.pop():U.call(e,n,1),--this.size,!0)},D.prototype.get=function(t){var e=this.__data__,n=q(e,t);return n<0?void 0:e[n][1]},D.prototype.has=function(t){return q(this.__data__,t)>-1},D.prototype.set=function(t,e){var n=this.__data__,r=q(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};var H=M(c,"Map");function K(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Q(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Q.prototype.clear=function(){this.size=0,this.__data__={hash:new J,map:new(H||D),string:new J}},Q.prototype.delete=function(t){var e=K(this,t).delete(t);return this.size-=e?1:0,e},Q.prototype.get=function(t){return K(this,t).get(t)},Q.prototype.has=function(t){return K(this,t).has(t)},Q.prototype.set=function(t,e){var n=K(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};var V="Expected a function";function X(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(V);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var u=t.apply(this,r);return n.cache=i.set(o,u)||i,u};return n.cache=new(X.Cache||Q),n}X.Cache=Q;var Y,Z,tt,et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,rt=(Y=function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(et,(function(t,n,r,o){e.push(r?o.replace(nt,"$1"):n||t)})),e},Z=X(Y,(function(t){return 500===tt.size&&tt.clear(),t})),tt=Z.cache,Z),ot=rt;var it=1/0,ut=s?s.prototype:void 0,ct=ut?ut.toString:void 0;function st(t){if("string"==typeof t)return t;if(o(t))return function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(t,st)+"";if(g(t))return ct?ct.call(t):"";var e=t+"";return"0"==e&&1/t==-it?"-0":e}function lt(t){return null==t?"":st(t)}function at(t,e){return o(t)?t:function(t,e){if(o(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!g(t))||m.test(t)||!w.test(t)||null!=e&&t in Object(e)}(t,e)?[t]:ot(lt(t))}var ft=1/0;function pt(t){if("string"==typeof t||g(t))return t;var e=t+"";return"0"==e&&1/t==-ft?"-0":e}function vt(t,e,n){var r=null==t?void 0:function(t,e){for(var n=0,r=(e=at(e,t)).length;null!=t&&n<r;)t=t[pt(e[n++])];return n&&n==r?t:void 0}(t,e);return void 0===r?n:r}var ht=function(){try{var t=M(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),yt=ht;var _t=Object.prototype.hasOwnProperty;function dt(t,e,n){var r=t[e];_t.call(t,e)&&R(r,n)&&(void 0!==n||e in t)||function(t,e,n){"__proto__"==e&&yt?yt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}(t,e,n)}var bt=9007199254740991,gt=/^(?:0|[1-9]\d*)$/;function wt(t,e){var n=typeof t;return!!(e=null==e?bt:e)&&("number"==n||"symbol"!=n&&gt.test(t))&&t>-1&&t%1==0&&t<e}function mt(t,e,n){return null==t?t:function(t,e,n,r){if(!j(t))return t;for(var o=-1,i=(e=at(e,t)).length,u=i-1,c=t;null!=c&&++o<i;){var s=pt(e[o]),l=n;if("__proto__"===s||"constructor"===s||"prototype"===s)return t;if(o!=u){var a=c[s];void 0===(l=r?r(a,s,c):void 0)&&(l=j(a)?a:wt(e[o+1])?[]:{})}dt(c,s,l),c=c[s]}return t}(t,e,n)}function jt(){let t,e,n=new Promise((function(){t=arguments[0],e=arguments[1]}));return n.resolve=t,n.reject=e,n}var Ot=/\s/;var xt=/^\s+/;function St(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&Ot.test(t.charAt(e)););return e}(t)+1).replace(xt,""):t}var kt=NaN,Pt=/^[-+]0x[0-9a-f]+$/i,At=/^0b[01]+$/i,zt=/^0o[0-7]+$/i,Nt=parseInt;function $t(t){if("number"==typeof t)return t;if(g(t))return kt;if(j(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=j(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=St(t);var n=At.test(t);return n||zt.test(t)?Nt(t.slice(2),n?2:8):Pt.test(t)?kt:+t}var Ct=1/0,Ft=17976931348623157e292;function Tt(t){return t?(t=$t(t))===Ct||t===-Ct?(t<0?-1:1)*Ft:t==t?t:0:0===t?t:0}function Et(t){var e=Tt(t),n=e%1;return e==e?n?e-n:e:0}function Lt(t){return!(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)||""===t)}function Wt(t){let e=!1;if(Lt(t))e=!isNaN(Number(t));else if(function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)){if(function(t){return t!=t}(t))return!1;e=!0}return e}function Mt(t){if(!Wt(t))return 0;return Tt(t)}function Bt(t){return!!Wt(t)&&(t=Mt(t),"number"==typeof(e=t)&&e==Et(e));var e}var Gt=c.isFinite,It=Math.min;var Jt=function(t){var e=Math[t];return function(t,n){if(t=$t(t),(n=null==n?0:It(Et(n),292))&&Gt(t)){var r=(lt(t)+"e").split("e");return+((r=(lt(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}("round"),Rt=Jt;function qt(t){if(!Wt(t))return 0;t=Mt(t);let e=Rt(t);return"0"===String(e)?0:e}let Ut="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),Dt=Ut.length;function Ht(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,e=[];var n;t=Bt(n=t)&&qt(n)>0?qt(t):32;for(let n=0;n<t;n++)e[n]=Ut[0|Math.random()*Dt];return e.join("")}var Kt={};!function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}function o(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function i(t,e,r,i,u){if("function"!=typeof r)throw new TypeError("The listener must be a function");var c=new o(r,i||t,u),s=n?n+e:e;return t._events[s]?t._events[s].fn?t._events[s]=[t._events[s],c]:t._events[s].push(c):(t._events[s]=c,t._eventsCount++),t}function u(t,e){0==--t._eventsCount?t._events=new r:delete t._events[e]}function c(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),c.prototype.eventNames=function(){var t,r,o=[];if(0===this._eventsCount)return o;for(r in t=this._events)e.call(t,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},c.prototype.listeners=function(t){var e=n?n+t:t,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,u=new Array(i);o<i;o++)u[o]=r[o].fn;return u},c.prototype.listenerCount=function(t){var e=n?n+t:t,r=this._events[e];return r?r.fn?1:r.length:0},c.prototype.emit=function(t,e,r,o,i,u){var c=n?n+t:t;if(!this._events[c])return!1;var s,l,a=this._events[c],f=arguments.length;if(a.fn){switch(a.once&&this.removeListener(t,a.fn,void 0,!0),f){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,e),!0;case 3:return a.fn.call(a.context,e,r),!0;case 4:return a.fn.call(a.context,e,r,o),!0;case 5:return a.fn.call(a.context,e,r,o,i),!0;case 6:return a.fn.call(a.context,e,r,o,i,u),!0}for(l=1,s=new Array(f-1);l<f;l++)s[l-1]=arguments[l];a.fn.apply(a.context,s)}else{var p,v=a.length;for(l=0;l<v;l++)switch(a[l].once&&this.removeListener(t,a[l].fn,void 0,!0),f){case 1:a[l].fn.call(a[l].context);break;case 2:a[l].fn.call(a[l].context,e);break;case 3:a[l].fn.call(a[l].context,e,r);break;case 4:a[l].fn.call(a[l].context,e,r,o);break;default:if(!s)for(p=1,s=new Array(f-1);p<f;p++)s[p-1]=arguments[p];a[l].fn.apply(a[l].context,s)}}return!0},c.prototype.on=function(t,e,n){return i(this,t,e,n,!1)},c.prototype.once=function(t,e,n){return i(this,t,e,n,!0)},c.prototype.removeListener=function(t,e,r,o){var i=n?n+t:t;if(!this._events[i])return this;if(!e)return u(this,i),this;var c=this._events[i];if(c.fn)c.fn!==e||o&&!c.once||r&&c.context!==r||u(this,i);else{for(var s=0,l=[],a=c.length;s<a;s++)(c[s].fn!==e||o&&!c[s].once||r&&c[s].context!==r)&&l.push(c[s]);l.length?this._events[i]=1===l.length?l[0]:l:u(this,i)}return this},c.prototype.removeAllListeners=function(t){var e;return t?(e=n?n+t:t,this._events[e]&&u(this,e)):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,t.exports=c}({get exports(){return Kt},set exports(t){Kt=t}});var Qt=Kt;function Vt(){return new Qt}return function(t){let o=jt(),i=null,u={},c=new Vt,s=e()?"browser":"nodejs";function l(){let e={url:null,token:null,open:function(){!function(){n(t.open)&&t.open();l("getFuncs",null)}()},close:function(){!function(){n(t.close)&&t.close();a()}()},message:function(t){!function(t){"browser"===s||(t=Buffer.from(t).toString("utf8"));let e=function(t){if(!Lt(t))return{};let e={};try{e=JSON.parse(t)}catch(t){e={}}return e}(t);if("sys"===vt(e,"output.sys")&&vt(e,"output.funcs")){let t=e.output.funcs;u={};for(let e=0;e<t.length;e++){let n=t[e];mt(u,n,(function(t){return l(n,t)}))}o.resolve(u)}if(vt(e,"_id")&&vt(e,"output")){let t=vt(e,"_id"),n=vt(e,"output");c.emit(t,n)}}(t)},error:function(e){!function(e){n(t.error)&&t.error(e);i.close()}(e)}};t.url||(e.url="ws://localhost:8080"),t.token||(e.token="*");try{i=new r(e)}catch(t){return a(),null}if(vt(i,"error"))return a(),null;function l(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=jt(),u=Ht(),s={token:t.token,_id:u,func:e,input:r};return i.readyState===i.OPEN&&i.send(JSON.stringify(s),(function(e){e&&n(t.error)&&t.error(e)})),c.on(u,(function(t){o.resolve(t),c.removeAllListeners(u)})),o}}function a(){setTimeout((function(){n(t.reconn)&&t.reconn(),l()}),1e3)}return l(),o}}));
//# sourceMappingURL=w-comor-websocket-client.umd.js.map
