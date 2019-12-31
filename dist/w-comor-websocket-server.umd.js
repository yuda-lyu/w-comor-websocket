/*!
 * w-comor-websocket-server v1.0.27
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("ws")):"function"==typeof define&&define.amd?define(["ws"],r):(t=t||self)["w-comor-websocket-server"]=r(t.ws)}(this,(function(t){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=t&&t.hasOwnProperty("default")?t.default:t;var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,r){return t(r={exports:{}},r.exports),r.exports}var o=n((function(t){var e=function(t){var e,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=S(a,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var c=s(t,r,e);if("normal"===c.type){if(n=e.done?p:v,c.arg===y)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=p,e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",v="suspendedYield",h="executing",p="completed",y={};function d(){}function b(){}function g(){}var _={};_[a]=function(){return this};var j=Object.getPrototypeOf,w=j&&j(j(L([])));w&&w!==n&&o.call(w,a)&&(_=w);var m=g.prototype=d.prototype=Object.create(_);function O(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function x(t){var e;this._invoke=function(n,i){function a(){return new Promise((function(e,a){!function e(n,i,a,u){var c=s(t[n],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"===r(l)&&o.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):Promise.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}(n,i,e,a)}))}return e=e?e.then(a,a):a()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function A(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return b.prototype=m.constructor=g,g.constructor=b,g[c]=b.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},O(x.prototype),x.prototype[u]=function(){return this},t.AsyncIterator=x,t.async=function(r,e,n,o){var i=new x(f(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),f=o.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),A(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;A(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));function i(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}var a=function(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))}};var u=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n},c="object"==r(e)&&e&&e.Object===Object&&e,f="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,s=c||f||Function("return this")(),l=s.Symbol,v=Object.prototype,h=v.hasOwnProperty,p=v.toString,y=l?l.toStringTag:void 0;var d=function(t){var r=h.call(t,y),e=t[y];try{t[y]=void 0;var n=!0}catch(t){}var o=p.call(t);return n&&(r?t[y]=e:delete t[y]),o},b=Object.prototype.toString;var g=function(t){return b.call(t)},_="[object Null]",j="[object Undefined]",w=l?l.toStringTag:void 0;var m=function(t){return null==t?void 0===t?j:_:w&&w in Object(t)?d(t):g(t)};var O=function(t){return null!=t&&"object"==r(t)},x="[object Arguments]";var S=function(t){return O(t)&&m(t)==x},E=Object.prototype,A=E.hasOwnProperty,k=E.propertyIsEnumerable,L=S(function(){return arguments}())?S:function(t){return O(t)&&A.call(t,"callee")&&!k.call(t,"callee")},P=Array.isArray;var z=function(){return!1},F=n((function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,o=n&&n.exports===e?s.Buffer:void 0,i=(o?o.isBuffer:void 0)||z;t.exports=i})),T=9007199254740991,N=/^(?:0|[1-9]\d*)$/;var C=function(t,e){var n=r(t);return!!(e=null==e?T:e)&&("number"==n||"symbol"!=n&&N.test(t))&&t>-1&&t%1==0&&t<e},R=9007199254740991;var $=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=R},G={};G["[object Float32Array]"]=G["[object Float64Array]"]=G["[object Int8Array]"]=G["[object Int16Array]"]=G["[object Int32Array]"]=G["[object Uint8Array]"]=G["[object Uint8ClampedArray]"]=G["[object Uint16Array]"]=G["[object Uint32Array]"]=!0,G["[object Arguments]"]=G["[object Array]"]=G["[object ArrayBuffer]"]=G["[object Boolean]"]=G["[object DataView]"]=G["[object Date]"]=G["[object Error]"]=G["[object Function]"]=G["[object Map]"]=G["[object Number]"]=G["[object Object]"]=G["[object RegExp]"]=G["[object Set]"]=G["[object String]"]=G["[object WeakMap]"]=!1;var I=function(t){return O(t)&&$(t.length)&&!!G[m(t)]};var M=function(t){return function(r){return t(r)}},B=n((function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,o=n&&n.exports===e&&c.process,i=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),D=B&&B.isTypedArray,U=D?M(D):I,V=Object.prototype.hasOwnProperty;var q=function(t,r){var e=P(t),n=!e&&L(t),o=!e&&!n&&F(t),i=!e&&!n&&!o&&U(t),a=e||n||o||i,c=a?u(t.length,String):[],f=c.length;for(var s in t)!r&&!V.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||C(s,f))||c.push(s);return c},W=Object.prototype;var J=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||W)};var Y=function(t,r){return function(e){return t(r(e))}}(Object.keys,Object),H=Object.prototype.hasOwnProperty;var K=function(t){if(!J(t))return Y(t);var r=[];for(var e in Object(t))H.call(t,e)&&"constructor"!=e&&r.push(e);return r};var Q=function(t){var e=r(t);return null!=t&&("object"==e||"function"==e)},X="[object AsyncFunction]",Z="[object Function]",tt="[object GeneratorFunction]",rt="[object Proxy]";var et=function(t){if(!Q(t))return!1;var r=m(t);return r==Z||r==tt||r==X||r==rt};var nt=function(t){return null!=t&&$(t.length)&&!et(t)};var ot=function(t){return nt(t)?q(t):K(t)},it="[object Symbol]";var at=function(t){return"symbol"==r(t)||O(t)&&m(t)==it},ut=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ct=/^\w*$/;var ft,st=function(t,e){if(P(t))return!1;var n=r(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!at(t))||(ct.test(t)||!ut.test(t)||null!=e&&t in Object(e))},lt=s["__core-js_shared__"],vt=(ft=/[^.]+$/.exec(lt&&lt.keys&&lt.keys.IE_PROTO||""))?"Symbol(src)_1."+ft:"";var ht=function(t){return!!vt&&vt in t},pt=Function.prototype.toString;var yt=function(t){if(null!=t){try{return pt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},dt=/^\[object .+?Constructor\]$/,bt=Function.prototype,gt=Object.prototype,_t=bt.toString,jt=gt.hasOwnProperty,wt=RegExp("^"+_t.call(jt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var mt=function(t){return!(!Q(t)||ht(t))&&(et(t)?wt:dt).test(yt(t))};var Ot=function(t,r){return null==t?void 0:t[r]};var xt=function(t,r){var e=Ot(t,r);return mt(e)?e:void 0},St=xt(Object,"create");var Et=function(){this.__data__=St?St(null):{},this.size=0};var At=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},kt="__lodash_hash_undefined__",Lt=Object.prototype.hasOwnProperty;var Pt=function(t){var r=this.__data__;if(St){var e=r[t];return e===kt?void 0:e}return Lt.call(r,t)?r[t]:void 0},zt=Object.prototype.hasOwnProperty;var Ft=function(t){var r=this.__data__;return St?void 0!==r[t]:zt.call(r,t)},Tt="__lodash_hash_undefined__";var Nt=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=St&&void 0===r?Tt:r,this};function Ct(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Ct.prototype.clear=Et,Ct.prototype.delete=At,Ct.prototype.get=Pt,Ct.prototype.has=Ft,Ct.prototype.set=Nt;var Rt=Ct;var $t=function(){this.__data__=[],this.size=0};var Gt=function(t,r){return t===r||t!=t&&r!=r};var It=function(t,r){for(var e=t.length;e--;)if(Gt(t[e][0],r))return e;return-1},Mt=Array.prototype.splice;var Bt=function(t){var r=this.__data__,e=It(r,t);return!(e<0)&&(e==r.length-1?r.pop():Mt.call(r,e,1),--this.size,!0)};var Dt=function(t){var r=this.__data__,e=It(r,t);return e<0?void 0:r[e][1]};var Ut=function(t){return It(this.__data__,t)>-1};var Vt=function(t,r){var e=this.__data__,n=It(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function qt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}qt.prototype.clear=$t,qt.prototype.delete=Bt,qt.prototype.get=Dt,qt.prototype.has=Ut,qt.prototype.set=Vt;var Wt=qt,Jt=xt(s,"Map");var Yt=function(){this.size=0,this.__data__={hash:new Rt,map:new(Jt||Wt),string:new Rt}};var Ht=function(t){var e=r(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Kt=function(t,r){var e=t.__data__;return Ht(r)?e["string"==typeof r?"string":"hash"]:e.map};var Qt=function(t){var r=Kt(this,t).delete(t);return this.size-=r?1:0,r};var Xt=function(t){return Kt(this,t).get(t)};var Zt=function(t){return Kt(this,t).has(t)};var tr=function(t,r){var e=Kt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function rr(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}rr.prototype.clear=Yt,rr.prototype.delete=Qt,rr.prototype.get=Xt,rr.prototype.has=Zt,rr.prototype.set=tr;var er=rr,nr="Expected a function";function or(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError(nr);var e=function e(){var n=arguments,o=r?r.apply(this,n):n[0],i=e.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return e.cache=i.set(o,a)||i,a};return e.cache=new(or.Cache||er),e}or.Cache=er;var ir=or,ar=500;var ur=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,cr=/\\(\\)?/g,fr=function(t){var r=ir(t,(function(t){return e.size===ar&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(ur,(function(t,e,n,o){r.push(n?o.replace(cr,"$1"):e||t)})),r}));var sr=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},lr=1/0,vr=l?l.prototype:void 0,hr=vr?vr.toString:void 0;var pr=function t(r){if("string"==typeof r)return r;if(P(r))return sr(r,t)+"";if(at(r))return hr?hr.call(r):"";var e=r+"";return"0"==e&&1/r==-lr?"-0":e};var yr=function(t){return null==t?"":pr(t)};var dr=function(t,r){return P(t)?t:st(t,r)?[t]:fr(yr(t))},br=1/0;var gr=function(t){if("string"==typeof t||at(t))return t;var r=t+"";return"0"==r&&1/t==-br?"-0":r};var _r=function(t,r){for(var e=0,n=(r=dr(r,t)).length;null!=t&&e<n;)t=t[gr(r[e++])];return e&&e==n?t:void 0};var jr=function(t,r,e){var n=null==t?void 0:_r(t,r);return void 0===n?e:n};function wr(t){return"[object Object]"===Object.prototype.toString.call(t)}function mr(t){return"[object String]"===Object.prototype.toString.call(t)}function Or(t){return!(!mr(t)||""===t)}var xr=function(t,r,e){var n=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(e=e>o?o:e)<0&&(e+=o),o=r>e?0:e-r>>>0,r>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+r];return i};var Sr=function(t,r,e){var n=t.length;return e=void 0===e?n:e,!r&&e>=n?t:xr(t,r,e)},Er=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var Ar=function(t){return Er.test(t)};var kr=function(t,e,n){if(!Q(n))return!1;var o=r(e);return!!("number"==o?nt(n)&&C(e,n.length):"string"==o&&e in n)&&Gt(n[e],t)},Lr="[object RegExp]";var Pr=function(t){return O(t)&&m(t)==Lr},zr=B&&B.isRegExp,Fr=zr?M(zr):Pr;var Tr=function(t){return t.split("")},Nr="[\\ud800-\\udfff]",Cr="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Rr="\\ud83c[\\udffb-\\udfff]",$r="[^\\ud800-\\udfff]",Gr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ir="[\\ud800-\\udbff][\\udc00-\\udfff]",Mr="(?:"+Cr+"|"+Rr+")"+"?",Br="[\\ufe0e\\ufe0f]?"+Mr+("(?:\\u200d(?:"+[$r,Gr,Ir].join("|")+")[\\ufe0e\\ufe0f]?"+Mr+")*"),Dr="(?:"+[$r+Cr+"?",Cr,Gr,Ir,Nr].join("|")+")",Ur=RegExp(Rr+"(?="+Rr+")|"+Dr+Br,"g");var Vr=function(t){return t.match(Ur)||[]};var qr=function(t){return Ar(t)?Vr(t):Tr(t)},Wr=4294967295;var Jr=function(t,r,e){return e&&"number"!=typeof e&&kr(t,r,e)&&(r=e=void 0),(e=void 0===e?Wr:e>>>0)?(t=yr(t))&&("string"==typeof r||null!=r&&!Fr(r))&&!(r=pr(r))&&Ar(t)?Sr(qr(t),0,e):t.split(r,e):[]};var Yr=function(){this.__data__=new Wt,this.size=0};var Hr=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e};var Kr=function(t){return this.__data__.get(t)};var Qr=function(t){return this.__data__.has(t)},Xr=200;var Zr=function(t,r){var e=this.__data__;if(e instanceof Wt){var n=e.__data__;if(!Jt||n.length<Xr-1)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new er(n)}return e.set(t,r),this.size=e.size,this};function te(t){var r=this.__data__=new Wt(t);this.size=r.size}te.prototype.clear=Yr,te.prototype.delete=Hr,te.prototype.get=Kr,te.prototype.has=Qr,te.prototype.set=Zr;var re=te,ee="__lodash_hash_undefined__";var ne=function(t){return this.__data__.set(t,ee),this};var oe=function(t){return this.__data__.has(t)};function ie(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new er;++r<e;)this.add(t[r])}ie.prototype.add=ie.prototype.push=ne,ie.prototype.has=oe;var ae=ie;var ue=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1};var ce=function(t,r){return t.has(r)},fe=1,se=2;var le=function(t,r,e,n,o,i){var a=e&fe,u=t.length,c=r.length;if(u!=c&&!(a&&c>u))return!1;var f=i.get(t);if(f&&i.get(r))return f==r;var s=-1,l=!0,v=e&se?new ae:void 0;for(i.set(t,r),i.set(r,t);++s<u;){var h=t[s],p=r[s];if(n)var y=a?n(p,h,s,r,t,i):n(h,p,s,t,r,i);if(void 0!==y){if(y)continue;l=!1;break}if(v){if(!ue(r,(function(t,r){if(!ce(v,r)&&(h===t||o(h,t,e,n,i)))return v.push(r)}))){l=!1;break}}else if(h!==p&&!o(h,p,e,n,i)){l=!1;break}}return i.delete(t),i.delete(r),l},ve=s.Uint8Array;var he=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e};var pe=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e},ye=1,de=2,be="[object Boolean]",ge="[object Date]",_e="[object Error]",je="[object Map]",we="[object Number]",me="[object RegExp]",Oe="[object Set]",xe="[object String]",Se="[object Symbol]",Ee="[object ArrayBuffer]",Ae="[object DataView]",ke=l?l.prototype:void 0,Le=ke?ke.valueOf:void 0;var Pe=function(t,r,e,n,o,i,a){switch(e){case Ae:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case Ee:return!(t.byteLength!=r.byteLength||!i(new ve(t),new ve(r)));case be:case ge:case we:return Gt(+t,+r);case _e:return t.name==r.name&&t.message==r.message;case me:case xe:return t==r+"";case je:var u=he;case Oe:var c=n&ye;if(u||(u=pe),t.size!=r.size&&!c)return!1;var f=a.get(t);if(f)return f==r;n|=de,a.set(t,r);var s=le(u(t),u(r),n,o,i,a);return a.delete(t),s;case Se:if(Le)return Le.call(t)==Le.call(r)}return!1};var ze=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t};var Fe=function(t,r,e){var n=r(t);return P(t)?n:ze(n,e(t))};var Te=function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,i=[];++e<n;){var a=t[e];r(a,e,t)&&(i[o++]=a)}return i};var Ne=function(){return[]},Ce=Object.prototype.propertyIsEnumerable,Re=Object.getOwnPropertySymbols,$e=Re?function(t){return null==t?[]:(t=Object(t),Te(Re(t),(function(r){return Ce.call(t,r)})))}:Ne;var Ge=function(t){return Fe(t,ot,$e)},Ie=1,Me=Object.prototype.hasOwnProperty;var Be=function(t,r,e,n,o,i){var a=e&Ie,u=Ge(t),c=u.length;if(c!=Ge(r).length&&!a)return!1;for(var f=c;f--;){var s=u[f];if(!(a?s in r:Me.call(r,s)))return!1}var l=i.get(t);if(l&&i.get(r))return l==r;var v=!0;i.set(t,r),i.set(r,t);for(var h=a;++f<c;){var p=t[s=u[f]],y=r[s];if(n)var d=a?n(y,p,s,r,t,i):n(p,y,s,t,r,i);if(!(void 0===d?p===y||o(p,y,e,n,i):d)){v=!1;break}h||(h="constructor"==s)}if(v&&!h){var b=t.constructor,g=r.constructor;b!=g&&"constructor"in t&&"constructor"in r&&!("function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g)&&(v=!1)}return i.delete(t),i.delete(r),v},De=xt(s,"DataView"),Ue=xt(s,"Promise"),Ve=xt(s,"Set"),qe=xt(s,"WeakMap"),We=yt(De),Je=yt(Jt),Ye=yt(Ue),He=yt(Ve),Ke=yt(qe),Qe=m;(De&&"[object DataView]"!=Qe(new De(new ArrayBuffer(1)))||Jt&&"[object Map]"!=Qe(new Jt)||Ue&&"[object Promise]"!=Qe(Ue.resolve())||Ve&&"[object Set]"!=Qe(new Ve)||qe&&"[object WeakMap]"!=Qe(new qe))&&(Qe=function(t){var r=m(t),e="[object Object]"==r?t.constructor:void 0,n=e?yt(e):"";if(n)switch(n){case We:return"[object DataView]";case Je:return"[object Map]";case Ye:return"[object Promise]";case He:return"[object Set]";case Ke:return"[object WeakMap]"}return r});var Xe=Qe,Ze=1,tn="[object Arguments]",rn="[object Array]",en="[object Object]",nn=Object.prototype.hasOwnProperty;var on=function(t,r,e,n,o,i){var a=P(t),u=P(r),c=a?rn:Xe(t),f=u?rn:Xe(r),s=(c=c==tn?en:c)==en,l=(f=f==tn?en:f)==en,v=c==f;if(v&&F(t)){if(!F(r))return!1;a=!0,s=!1}if(v&&!s)return i||(i=new re),a||U(t)?le(t,r,e,n,o,i):Pe(t,r,c,e,n,o,i);if(!(e&Ze)){var h=s&&nn.call(t,"__wrapped__"),p=l&&nn.call(r,"__wrapped__");if(h||p){var y=h?t.value():t,d=p?r.value():r;return i||(i=new re),o(y,d,e,n,i)}}return!!v&&(i||(i=new re),Be(t,r,e,n,o,i))};var an=function t(r,e,n,o,i){return r===e||(null==r||null==e||!O(r)&&!O(e)?r!=r&&e!=e:on(r,e,n,o,t,i))},un=1,cn=2;var fn=function(t,r,e,n){var o=e.length,i=o,a=!n;if(null==t)return!i;for(t=Object(t);o--;){var u=e[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=e[o])[0],f=t[c],s=u[1];if(a&&u[2]){if(void 0===f&&!(c in t))return!1}else{var l=new re;if(n)var v=n(f,s,c,t,r,l);if(!(void 0===v?an(s,f,un|cn,n,l):v))return!1}}return!0};var sn=function(t){return t==t&&!Q(t)};var ln=function(t){for(var r=ot(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,sn(o)]}return r};var vn=function(t,r){return function(e){return null!=e&&(e[t]===r&&(void 0!==r||t in Object(e)))}};var hn=function(t){var r=ln(t);return 1==r.length&&r[0][2]?vn(r[0][0],r[0][1]):function(e){return e===t||fn(e,t,r)}};var pn=function(t,r){return null!=t&&r in Object(t)};var yn=function(t,r,e){for(var n=-1,o=(r=dr(r,t)).length,i=!1;++n<o;){var a=gr(r[n]);if(!(i=null!=t&&e(t,a)))break;t=t[a]}return i||++n!=o?i:!!(o=null==t?0:t.length)&&$(o)&&C(a,o)&&(P(t)||L(t))};var dn=function(t,r){return null!=t&&yn(t,r,pn)},bn=1,gn=2;var _n=function(t,r){return st(t)&&sn(r)?vn(gr(t),r):function(e){var n=jr(e,t);return void 0===n&&n===r?dn(e,t):an(r,n,bn|gn)}};var jn=function(t){return t};var wn=function(t){return function(r){return null==r?void 0:r[t]}};var mn=function(t){return function(r){return _r(r,t)}};var On=function(t){return st(t)?wn(gr(t)):mn(t)};var xn=function(t){return"function"==typeof t?t:null==t?jn:"object"==r(t)?P(t)?_n(t[0],t[1]):hn(t):On(t)};var Sn=function(t){return function(r,e,n){for(var o=-1,i=Object(r),a=n(r),u=a.length;u--;){var c=a[t?u:++o];if(!1===e(i[c],c,i))break}return r}}();var En=function(t,r){return function(e,n){if(null==e)return e;if(!nt(e))return t(e,n);for(var o=e.length,i=r?o:-1,a=Object(e);(r?i--:++i<o)&&!1!==n(a[i],i,a););return e}}((function(t,r){return t&&Sn(t,r,ot)}));var An=function(t,r){var e=-1,n=nt(t)?Array(t.length):[];return En(t,(function(t,o,i){n[++e]=r(t,o,i)})),n};var kn=function(t,r){return(P(t)?sr:An)(t,xn(r))};var Ln=function(t){for(var r=-1,e=null==t?0:t.length,n={};++r<e;){var o=t[r];n[o[0]]=o[1]}return n};function Pn(t){var r=Object.prototype.toString.call(t);return"[object Function]"===r||"[object AsyncFunction]"===r}function zn(t){return"[object Array]"===Object.prototype.toString.call(t)}function Fn(t){return!!function(t){return"[object Undefined]"===Object.prototype.toString.call(t)}(t)||(!!function(t){return"[object Null]"===Object.prototype.toString.call(t)}(t)||(!!function(t){if(wr(t)){for(var r in t)return!1;return!0}return!1}(t)||(!!function(t){return!(!mr(t)||""!==t)}(t)||!!function(t){return!!zn(t)&&0===t.length}(t))))}function Tn(t){return!!zn(t)&&(0!==t.length&&(1!==t.length||!Fn(t[0])))}function Nn(t,r){if(Or(t))t=[t];else if(!Tn(t))return!1;if(Or(r))r=[r];else if(!Tn(r))return!1;for(var e=0;e<t.length;e++)for(var n=0;n<r.length;n++)if(t[e]===r[n])return!0;return!1}return function(r){r.port||(r.port=8080);var e,n,i=[];function u(t){var e,n,o,i=((o=new Promise((function(){e=arguments[0],n=arguments[1]}))).resolve=e,o.reject=n,o);return Pn(r.authenticate)?r.authenticate(t).then((function(t){i.resolve(t)})):i.resolve(!0),i}n="funcs",wr(e=r)&&Or(n)&&n in e&&(i=ot(r.funcs));var c=new(0,t.Server)({port:r.port,verifyClient:function(t,r){var e=function(t){if(!Or(t))return{};if(t=Jr(t,"?"),!Or(t=jr(t,"[1]")))return{};var r=Jr(t,"&");return r=kn(r,(function(t){return Jr(t,"=")})),r=Ln(r)}(t.req.url);u(jr(e,"token","")).then((function(t){r(t)}))}}),f=[];c.on("connection",(function(e,n){function c(){return(c=a(o.mark((function n(a){var c,f,s,l;return o.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=jr(a,"token",""),n.next=3,u(c);case 3:if(!n.sent){n.next=25;break}if(f=jr(a,"func",""),s=jr(a,"input"),"getFuncs"!==f){n.next=15;break}if(!Pn(r.filterFuncs)){n.next=12;break}return n.next=11,r.filterFuncs(c,i);case 11:i=n.sent;case 12:a.output={sys:"sys",funcs:i},n.next=23;break;case 15:if(!Nn(i,f)){n.next=22;break}return n.next=18,r.funcs[f](s);case 18:l=n.sent,a.output=l,n.next=23;break;case 22:a.output={err:"can not find: ".concat(f)};case 23:n.next=26;break;case 25:a.output={err:"can not authenticate token: ".concat(c)};case 26:delete a.input,e.readyState===t.OPEN&&e.send(JSON.stringify(a),(function(t){t&&console.log("Server: send output error: ".concat(t))}));case 28:case"end":return n.stop()}}),n)})))).apply(this,arguments)}f.push(e),Pn(r.onClientChange)&&r.onClientChange(f,r),e.on("message",(function(t){!function(t){c.apply(this,arguments)}(function(t){if(!Or(t))return{};var r={};try{r=JSON.parse(t)}catch(t){r={}}return r}(t))})),e.on("close",(function(t){f=f.filter((function(t){return t!==e})),Pn(r.onClientChange)&&r.onClientChange(f,r)}))})),console.log("Server running at: ws://localhost:".concat(r.port))}}));
//# sourceMappingURL=w-comor-websocket-server.umd.js.map
