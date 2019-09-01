/*!
 * ws-server v1.0.22
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("ws")):"function"==typeof define&&define.amd?define(["ws"],t):(e=e||self,e["ws-server"]=t(e.ws))})(this,function(e){'use strict';function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function o(e,t){return t={exports:{}},e(t,t.exports),t.exports}function n(e,t,o,n,r,a,c){try{var i=e[a](c),l=i.value}catch(e){return void o(e)}i.done?t(l):Promise.resolve(l).then(n,r)}function r(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function a(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Se&&Se in Object(e)?_e(e):xe(e)}function c(e){var o=t(e);return null!=e&&("object"==o||"function"==o)}function i(e){return!!Ee&&Ee in e}function l(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function d(e){var o=t(e);return"string"==o||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e}function p(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function s(e){var t=this.__data__=new ce(e);this.size=t.size}function u(e,t,o){var n=e[t];at.call(e,t)&&oe(n,o)&&(o!==void 0||t in e)||nt(e,t,o)}function y(e){return null!=e&&"object"==t(e)}function h(e,o){var n=t(e);return o=null==o?9007199254740991:o,!!o&&("number"==n||"symbol"!=n&&mt.test(e))&&-1<e&&0==e%1&&e<o}function g(e,t,o,n,r,a){var c,i=1&t,l=2&t;if(o&&(c=r?o(e,n,r,a):o(e)),void 0!==c)return c;if(!Ae(e))return e;var d=ft(e);if(!d){var p=Io(e),s="[object Function]"==p||"[object GeneratorFunction]"==p;if(jt(e))return Qt(e,i);if("[object Object]"!=p&&"[object Arguments]"!=p&&(!s||r)){if(!rn[p])return r?e:{};c=Qo(e,p,i)}else if(c=l||s?{}:Zo(e),!i)return l?so(e,Yt(c,e)):no(e,Dt(c,e))}else if(c=Mo(e),!i)return Jt(e,c);a||(a=new Ke);var u=a.get(e);if(u)return u;a.set(e,c),nn(e)?e.forEach(function(n){c.add(g(n,t,o,n,e,a))}):en(e)&&e.forEach(function(n,r){c.set(r,g(n,t,o,r,e,a))});var y=4&t?l?ho:yo:l?keysIn:Gt,h=d?void 0:y(e);return et(h||e,function(n,r){h&&(r=n,n=e[r]),ct(c,r,g(n,t,o,r,e,a))}),c}function b(){var e,t,o=new Promise(function(){e=arguments[0],t=arguments[1]});return o.resolve=e,o.reject=t,o}function f(e){var t=Object.prototype.toString.call(e);return"[object Object]"===t}function _(e){var t=Object.prototype.toString.call(e);return"[object String]"===t}function m(e){return!!(_(e)&&""!==e)}function x(e,t){return!!f(e)&&!!m(t)&&t in e}function S(e){return"symbol"==t(e)||dt(e)&&we(e)=="[object Symbol]"}function w(e,o){if(ft(e))return!1;var n=t(e);return!!("number"==n||"symbol"==n||"boolean"==n||null==e||cn(e))||dn.test(e)||!ln.test(e)||null!=o&&e in Object(o)}function A(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var o=function o(){var n=arguments,r=t?t.apply(this,n):n[0],a=o.cache;if(a.has(r))return a.get(r);var c=e.apply(this,n);return o.cache=a.set(r,c)||a,c};return o.cache=new(A.Cache||He),o}function v(e){if("string"==typeof e)return e;if(ft(e))return hn(e,v)+"";if(cn(e))return fn?fn.call(e):"";var t=e+"";return"0"==t&&1/e==-gn?"-0":t}function O(e,o,n){if(!Ae(n))return!1;var r=t(o);return!("number"==r?!(Bt(n)&&xt(o,n.length)):!("string"==r&&o in n))&&oe(n[o],e)}function k(e){var t=-1,o=null==e?0:e.length;for(this.__data__=new He;++t<o;)this.add(e[t])}function E(e,t,o,n,r,a){var c=1&o,i=yo(e),l=i.length,d=yo(t),p=d.length;if(l!=p&&!c)return!1;for(var s,u=l;u--;)if(s=i[u],c?!(s in t):!er.call(t,s))return!1;var y=a.get(e);if(y&&a.get(t))return y==t;var h=!0;a.set(e,t),a.set(t,e);for(var g=c;++u<l;){s=i[u];var b=e[s],f=t[s];if(n)var _=c?n(f,b,s,t,e,a):n(b,f,s,e,t,a);if(void 0===_?!(b===f||r(b,f,o,n,a)):!_){h=!1;break}g||(g="constructor"==s)}if(h&&!g){var j=e.constructor,m=t.constructor;j!=m&&"constructor"in e&&"constructor"in t&&!("function"==typeof j&&j instanceof j&&"function"==typeof m&&m instanceof m)&&(h=!1)}return a["delete"](e),a["delete"](t),h}function L(e,t,o,n,r){return!(e!==t)||(null!=e&&null!=t&&(dt(e)||dt(t))?nr(e,t,o,n,L,r):e!==e&&t!==t)}function P(e,t,o,n){var r=o.length,a=r,c=!n;if(null==e)return!a;for(e=Object(e);r--;){var i=o[r];if(c&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++r<a;){i=o[r];var l=i[0],d=e[l],p=i[1];if(!(c&&i[2])){var s=new Ke;if(n)var u=n(d,p,l,e,t,s);if(void 0===u?!rr(p,d,3,n,s):!u)return!1}else if(void 0===d&&!(l in e))return!1}return!0}function z(e,t){return null!=e&&t in Object(e)}function T(e){return"function"==typeof e?e:null==e?ur:"object"==t(e)?ft(e)?sr(e[0],e[1]):lr(e):gr(e)}function F(e){if(!m(e))return{};if(e=Wn(e,"?"),e=wn(e,"[1]"),!m(e))return{};var t=Wn(e,"&");return t=jr(t,function(e){return Wn(e,"=")}),t=mr(t),t}function I(e){if(f(e)){for(var t in e)return!0;return!1}return!1}function U(e,t){return I(e)?m(t)?wn(e,t,""):"":""}function C(e){var t=Object.prototype.toString.call(e);return"[object Number]"===t}function M(e){var t=!1;return m(e)?t=!isNaN(+e):C(e)&&(t=!0),t}function N(e){if(!m(e)&&!M(e))return"";return e+""}function B(e,t){var o=U(e,t);return o=N(o),o}function G(e){if(!m(e))return{};var t={};try{t=JSON.parse(e)}catch(e){t={}}return t}function D(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object AsyncFunction]"===t}function R(e){var t=Object.prototype.toString.call(e);return"[object Array]"===t}function V(e){var t=Object.prototype.toString.call(e);return"[object Undefined]"===t}function W(e){var t=Object.prototype.toString.call(e);return"[object Null]"===t}function $(e){if(f(e)){for(var t in e)return!1;return!0}return!1}function q(e){return!!(_(e)&&""===e)}function Y(e){return!!R(e)&&0===e.length}function Q(e){return!!V(e)||!!W(e)||!!$(e)||!!q(e)||!!Y(e)}function J(e){return!!R(e)&&0!==e.length&&!(1===e.length&&Q(e[0]))}function X(e,t){if(m(e))e=[e];else if(J(e));else return!1;if(m(t))t=[t];else if(J(t));else return!1;for(var o=0;o<e.length;o++)for(var n=0;n<t.length;n++)if(e[o]===t[n])return!0;return!1}function Z(t){function o(e){var o=b();return D(t.authenticate)?t.authenticate(e).then(function(e){o.resolve(e)}):o.resolve(!0),o}t=an(t),t.port||(t.port=8080);var n=[];x(t,"funcs")&&(n=Gt(t.funcs));var r=e.Server,a={port:t.port,verifyClient:function(e,t){var n=F(e.req.url),r=B(n,"token");o(r).then(function(e){t(e)})}},c=new r(a),i=[];c.on("connection",function(r){function a(){return c.apply(this,arguments)}function c(){return c=te(ee.mark(function a(c){var i,l,d,p,s;return ee.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i=B(c,"token"),a.next=3,o(i);case 3:if(l=a.sent,!l){a.next=25;break}if(d=B(c,"func"),p=U(c,"input"),"getFuncs"!==d){a.next=15;break}if(!D(t.filterFuncs)){a.next=12;break}return a.next=11,t.filterFuncs(i,n);case 11:n=a.sent;case 12:c.output={sys:"sys",funcs:n},a.next=23;break;case 15:if(!X(n,d)){a.next=22;break}return a.next=18,t.funcs[d](p);case 18:s=a.sent,c.output=s,a.next=23;break;case 22:c.output={err:"can not find: ".concat(d)};case 23:a.next=26;break;case 25:c.output={err:"can not authenticate token: ".concat(i)};case 26:delete c.input,r.readyState===e.OPEN&&r.send(JSON.stringify(c),function(e){e&&console.log("Server: send output error: ".concat(e))});case 28:case"end":return a.stop();}},a)})),c.apply(this,arguments)}i.push(r),D(t.onClientChange)&&t.onClientChange(i,t),r.on("message",function(e){var t=G(e);a(t)}),r.on("close",function(){i=i.filter(function(e){return e!==r}),D(t.onClientChange)&&t.onClientChange(i,t)})}),console.log("Server running at: ws://localhost:".concat(t.port))}e=e&&e.hasOwnProperty("default")?e["default"]:e;var H="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,K=o(function(e){var o=function(e){function o(e,t,o,n){var a=t&&t.prototype instanceof r?t:r,c=Object.create(a.prototype),i=new y(n||[]);return c._invoke=d(e,o,i),c}function n(e,t,o){try{return{type:"normal",arg:e.call(t,o)}}catch(e){return{type:"throw",arg:e}}}function r(){}function a(){}function c(){}function i(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function l(e){function o(r,a,c,i){var l=n(e[r],e,a);if("throw"===l.type)i(l.arg);else{var d=l.arg,p=d.value;return p&&"object"===t(p)&&_.call(p,"__await")?Promise.resolve(p.__await).then(function(e){o("next",e,c,i)},function(e){o("throw",e,c,i)}):Promise.resolve(p).then(function(e){d.value=e,c(d)},function(e){return o("throw",e,c,i)})}}function r(e,t){function n(){return new Promise(function(n,r){o(e,t,n,r)})}return a=a?a.then(n,n):n()}var a;this._invoke=r}function d(e,t,o){var r="suspendedStart";return function(a,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw c;return g()}for(o.method=a,o.arg=c;;){var i=o.delegate;if(i){var l=p(i,o);if(l){if(l===w)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===r)throw r="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r="executing";var d=n(e,t,o);if("normal"===d.type){if(r=o.done?"completed":"suspendedYield",d.arg===w)continue;return{value:d.arg,done:o.done}}"throw"===d.type&&(r="completed",o.method="throw",o.arg=d.arg)}}}function p(e,t){var o=e.iterator[t.method];if(o===b){if(t.delegate=null,"throw"===t.method){if(e.iterator["return"]&&(t.method="return",t.arg=b,p(e,t),"throw"===t.method))return w;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}var r=n(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,w;var a=r.arg;if(!a)return t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,w;if(a.done)t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=b);else return a;return t.delegate=null,w}function s(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function u(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function y(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(s,this),this.reset(!0)}function h(e){if(e){var t=e[m];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,n=function t(){for(;++o<e.length;)if(_.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=b,t.done=!0,t};return n.next=n}}return{next:g}}function g(){return{value:b,done:!0}}var b,f=Object.prototype,_=f.hasOwnProperty,j="function"==typeof Symbol?Symbol:{},m=j.iterator||"@@iterator",x=j.asyncIterator||"@@asyncIterator",S=j.toStringTag||"@@toStringTag";e.wrap=o;var w={},A={};A[m]=function(){return this};var v=Object.getPrototypeOf,O=v&&v(v(h([])));O&&O!==f&&_.call(O,m)&&(A=O);var k=c.prototype=r.prototype=Object.create(A);return a.prototype=k.constructor=c,c.constructor=a,c[S]=a.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,!(S in e)&&(e[S]="GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},i(l.prototype),l.prototype[x]=function(){return this},e.AsyncIterator=l,e.async=function(t,n,r,a){var c=new l(o(t,n,r,a));return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},i(k),k[S]="Generator",k[m]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var o in e)t.push(o);return t.reverse(),function o(){for(;t.length;){var n=t.pop();if(n in e)return o.value=n,o.done=!1,o}return o.done=!0,o}},e.values=h,y.prototype={constructor:y,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=b,this.done=!1,this.delegate=null,this.method="next",this.arg=b,this.tryEntries.forEach(u),!e)for(var t in this)"t"===t.charAt(0)&&_.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=b)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return a.type="throw",a.arg=e,o.next=t,n&&(o.method="next",o.arg=b),!!n}if(this.done)throw e;for(var o=this,n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n],a=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var c=_.call(r,"catchLoc"),l=_.call(r,"finallyLoc");if(c&&l){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);}else if(!l)throw new Error("try statement without catch or finally");else if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}},abrupt:function(e,t){for(var o,n=this.tryEntries.length-1;0<=n;--n)if(o=this.tryEntries[n],o.tryLoc<=this.prev&&_.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=e,a.arg=t,r?(this.method="next",this.next=r.finallyLoc,w):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),w},finish:function(e){for(var t,o=this.tryEntries.length-1;0<=o;--o)if(t=this.tryEntries[o],t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),u(t),w},catch:function(e){for(var t,o=this.tryEntries.length-1;0<=o;--o)if(t=this.tryEntries[o],t.tryLoc===e){var n=t.completion;if("throw"===n.type){var r=n.arg;u(t)}return r}throw new Error("illegal catch attempt")},delegateYield:function(e,t,o){return this.delegate={iterator:h(e),resultName:t,nextLoc:o},"next"===this.method&&(this.arg=b),w}},e}(e.exports);try{regeneratorRuntime=o}catch(e){Function("r","regeneratorRuntime = r")(o)}}),ee=K,te=function(e){return function(){var t=this,o=arguments;return new Promise(function(r,a){function c(e){n(l,r,a,c,i,"next",e)}function i(e){n(l,r,a,c,i,"throw",e)}var l=e.apply(t,o);c(void 0)})}},oe=function(e,t){return e===t||e!==e&&t!==t},ne=function(e,t){for(var o=e.length;o--;)if(oe(e[o][0],t))return o;return-1},re=Array.prototype,ae=re.splice;r.prototype.clear=function(){this.__data__=[],this.size=0},r.prototype["delete"]=function(e){var t=this.__data__,o=ne(t,e);if(0>o)return!1;var n=t.length-1;return o==n?t.pop():ae.call(t,o,1),--this.size,!0},r.prototype.get=function(e){var t=this.__data__,o=ne(t,e);return 0>o?void 0:t[o][1]},r.prototype.has=function(e){return-1<ne(this.__data__,e)},r.prototype.set=function(e,t){var o=this.__data__,n=ne(o,e);return 0>n?(++this.size,o.push([e,t])):o[n][1]=t,this};var ce=r,ie="object"==t(H)&&H&&H.Object===Object&&H,le=ie,de="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,pe=le||de||Function("return this")(),se=pe,ue=se.Symbol,ye=ue,he=Object.prototype,ge=he.hasOwnProperty,be=he.toString,fe=ye?ye.toStringTag:void 0,_e=function(e){var t=ge.call(e,fe),o=e[fe];try{e[fe]=void 0;var n=!0}catch(t){}var r=be.call(e);return n&&(t?e[fe]=o:delete e[fe]),r},je=Object.prototype,me=je.toString,xe=function(e){return me.call(e)},Se=ye?ye.toStringTag:void 0,we=a,Ae=c,ve=function(e){if(!Ae(e))return!1;var t=we(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Oe=se["__core-js_shared__"],ke=Oe,Ee=function(){var e=/[^.]+$/.exec(ke&&ke.keys&&ke.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Le=Function.prototype,Pe=Le.toString,ze=function(e){if(null!=e){try{return Pe.call(e)}catch(t){}try{return e+""}catch(t){}}return""},Te=/[\\^$.*+?()[\]{}|]/g,Fe=/^\[object .+?Constructor\]$/,Ie=Function.prototype,Ue=Object.prototype,Ce=Ie.toString,Me=Ue.hasOwnProperty,Ne=RegExp("^"+Ce.call(Me).replace(Te,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Be=function(e){if(!Ae(e)||i(e))return!1;var t=ve(e)?Ne:Fe;return t.test(ze(e))},Ge=function(e,t){return null==e?void 0:e[t]},De=function(e,t){var o=Ge(e,t);return Be(o)?o:void 0},Re=De(se,"Map"),Ve=Re,We=De(Object,"create"),$e=We,qe=Object.prototype,Ye=qe.hasOwnProperty,Qe=Object.prototype,Je=Qe.hasOwnProperty;l.prototype.clear=function(){this.__data__=$e?$e(null):{},this.size=0},l.prototype["delete"]=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},l.prototype.get=function(e){var t=this.__data__;if($e){var o=t[e];return o==="__lodash_hash_undefined__"?void 0:o}return Ye.call(t,e)?t[e]:void 0},l.prototype.has=function(e){var t=this.__data__;return $e?t[e]!==void 0:Je.call(t,e)},l.prototype.set=function(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=$e&&void 0===t?"__lodash_hash_undefined__":t,this};var Xe=l,Ze=function(e,t){var o=e.__data__;return d(t)?o["string"==typeof t?"string":"hash"]:o.map};p.prototype.clear=function(){this.size=0,this.__data__={hash:new Xe,map:new(Ve||ce),string:new Xe}},p.prototype["delete"]=function(e){var t=Ze(this,e)["delete"](e);return this.size-=t?1:0,t},p.prototype.get=function(e){return Ze(this,e).get(e)},p.prototype.has=function(e){return Ze(this,e).has(e)},p.prototype.set=function(e,t){var o=Ze(this,e),n=o.size;return o.set(e,t),this.size+=o.size==n?0:1,this};var He=p;s.prototype.clear=function(){this.__data__=new ce,this.size=0},s.prototype["delete"]=function(e){var t=this.__data__,o=t["delete"](e);return this.size=t.size,o},s.prototype.get=function(e){return this.__data__.get(e)},s.prototype.has=function(e){return this.__data__.has(e)},s.prototype.set=function(e,t){var o=this.__data__;if(o instanceof ce){var n=o.__data__;if(!Ve||199>n.length)return n.push([e,t]),this.size=++o.size,this;o=this.__data__=new He(n)}return o.set(e,t),this.size=o.size,this};var Ke=s,et=function(e,t){for(var o=-1,n=null==e?0:e.length;++o<n&&!(!1===t(e[o],o,e)););return e},tt=function(){try{var e=De(Object,"defineProperty");return e({},"",{}),e}catch(t){}}(),ot=tt,nt=function(e,t,o){"__proto__"==t&&ot?ot(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o},rt=Object.prototype,at=rt.hasOwnProperty,ct=u,it=function(e,t,o,n){var r=!o;o||(o={});for(var a=-1,c=t.length;++a<c;){var i=t[a],l=n?n(o[i],e[i],i,o,e):void 0;l===void 0&&(l=e[i]),r?nt(o,i,l):ct(o,i,l)}return o},lt=function(e,t){for(var o=-1,n=Array(e);++o<e;)n[o]=t(o);return n},dt=y,pt=function(e){return dt(e)&&we(e)=="[object Arguments]"},st=Object.prototype,ut=st.hasOwnProperty,yt=st.propertyIsEnumerable,ht=pt(function(){return arguments}())?pt:function(e){return dt(e)&&ut.call(e,"callee")&&!yt.call(e,"callee")},gt=ht,bt=Array.isArray,ft=bt,_t=function(){return!1},jt=o(function(e,t){var o=t&&!t.nodeType&&t,n=o&&!0&&e&&!e.nodeType&&e,r=n&&n.exports===o,a=r?se.Buffer:void 0,c=a?a.isBuffer:void 0;e.exports=c||_t}),mt=/^(?:0|[1-9]\d*)$/,xt=h,St=function(e){return"number"==typeof e&&-1<e&&0==e%1&&e<=9007199254740991},wt={};wt["[object Float32Array]"]=wt["[object Float64Array]"]=wt["[object Int8Array]"]=wt["[object Int16Array]"]=wt["[object Int32Array]"]=wt["[object Uint8Array]"]=wt["[object Uint8ClampedArray]"]=wt["[object Uint16Array]"]=wt["[object Uint32Array]"]=!0,wt["[object Arguments]"]=wt["[object Array]"]=wt["[object ArrayBuffer]"]=wt["[object Boolean]"]=wt["[object DataView]"]=wt["[object Date]"]=wt["[object Error]"]=wt["[object Function]"]=wt["[object Map]"]=wt["[object Number]"]=wt["[object Object]"]=wt["[object RegExp]"]=wt["[object Set]"]=wt["[object String]"]=wt["[object WeakMap]"]=!1;var At=function(e){return function(t){return e(t)}},vt=o(function(e,t){var o=t&&!t.nodeType&&t,n=o&&!0&&e&&!e.nodeType&&e,r=n&&n.exports===o,a=r&&le.process,c=function(){try{var e=n&&n.require&&n.require("util").types;return e?e:a&&a.binding&&a.binding("util")}catch(t){}}();e.exports=c}),Ot=vt&&vt.isTypedArray,kt=Ot?At(Ot):function(e){return dt(e)&&St(e.length)&&!!wt[we(e)]},Et=kt,Lt=Object.prototype,Pt=Lt.hasOwnProperty,zt=function(e,t){var o=ft(e),n=!o&&gt(e),r=!o&&!n&&jt(e),a=!o&&!n&&!r&&Et(e),c=o||n||r||a,i=c?lt(e.length,String):[],l=i.length;for(var d in e)(t||Pt.call(e,d))&&!(c&&("length"==d||r&&("offset"==d||"parent"==d)||a&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||xt(d,l)))&&i.push(d);return i},Tt=Object.prototype,Ft=function(e){var t=e&&e.constructor,o="function"==typeof t&&t.prototype||Tt;return e===o},It=function(e,t){return function(o){return e(t(o))}},Ut=It(Object.keys,Object),Ct=Object.prototype,Mt=Ct.hasOwnProperty,Nt=function(e){if(!Ft(e))return Ut(e);var t=[];for(var o in Object(e))Mt.call(e,o)&&"constructor"!=o&&t.push(o);return t},Bt=function(e){return null!=e&&St(e.length)&&!ve(e)},Gt=function(e){return Bt(e)?zt(e):Nt(e)},Dt=function(e,t){return e&&it(t,Gt(t),e)},Rt=function(e){var t=[];if(null!=e)for(var o in Object(e))t.push(o);return t},Vt=Object.prototype,Wt=Vt.hasOwnProperty,$t=function(e){if(!Ae(e))return Rt(e);var t=Ft(e),o=[];for(var n in e)("constructor"!=n||!t&&Wt.call(e,n))&&o.push(n);return o},qt=function(e){return Bt(e)?zt(e,!0):$t(e)},Yt=function(e,t){return e&&it(t,qt(t),e)},Qt=o(function(e,t){var o=t&&!t.nodeType&&t,n=o&&!0&&e&&!e.nodeType&&e,r=n&&n.exports===o,a=r?se.Buffer:void 0,c=a?a.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var o=e.length,n=c?c(o):new e.constructor(o);return e.copy(n),n}}),Jt=function(e,t){var o=-1,n=e.length;for(t||(t=Array(n));++o<n;)t[o]=e[o];return t},Xt=function(e,t){for(var o=-1,n=null==e?0:e.length,r=0,a=[];++o<n;){var c=e[o];t(c,o,e)&&(a[r++]=c)}return a},Zt=function(){return[]},Ht=Object.prototype,Kt=Ht.propertyIsEnumerable,eo=Object.getOwnPropertySymbols,to=eo?function(e){return null==e?[]:(e=Object(e),Xt(eo(e),function(t){return Kt.call(e,t)}))}:Zt,oo=to,no=function(e,t){return it(e,oo(e),t)},ro=function(e,t){for(var o=-1,n=t.length,r=e.length;++o<n;)e[r+o]=t[o];return e},ao=It(Object.getPrototypeOf,Object),co=ao,io=Object.getOwnPropertySymbols,lo=io?function(e){for(var t=[];e;)ro(t,oo(e)),e=co(e);return t}:Zt,po=lo,so=function(e,t){return it(e,po(e),t)},uo=function(e,t,o){var n=t(e);return ft(e)?n:ro(n,o(e))},yo=function(e){return uo(e,Gt,oo)},ho=function(e){return uo(e,qt,po)},go=De(se,"DataView"),bo=go,fo=De(se,"Promise"),_o=fo,jo=De(se,"Set"),mo=jo,xo=De(se,"WeakMap"),So=xo,wo="[object Map]",Ao="[object Promise]",vo="[object Set]",Oo="[object WeakMap]",ko="[object DataView]",Eo=ze(bo),Lo=ze(Ve),Po=ze(_o),zo=ze(mo),To=ze(So),Fo=we;(bo&&Fo(new bo(new ArrayBuffer(1)))!=ko||Ve&&Fo(new Ve)!=wo||_o&&Fo(_o.resolve())!=Ao||mo&&Fo(new mo)!=vo||So&&Fo(new So)!=Oo)&&(Fo=function(e){var t=we(e),o=t=="[object Object]"?e.constructor:void 0,n=o?ze(o):"";if(n)switch(n){case Eo:return ko;case Lo:return wo;case Po:return Ao;case zo:return vo;case To:return Oo;}return t});var Io=Fo,Uo=Object.prototype,Co=Uo.hasOwnProperty,Mo=function(e){var t=e.length,o=new e.constructor(t);return t&&"string"==typeof e[0]&&Co.call(e,"index")&&(o.index=e.index,o.input=e.input),o},No=se.Uint8Array,Bo=No,Go=function(e){var t=new e.constructor(e.byteLength);return new Bo(t).set(new Bo(e)),t},Do=function(e,t){var o=t?Go(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)},Ro=/\w*$/,Vo=function(e){var t=new e.constructor(e.source,Ro.exec(e));return t.lastIndex=e.lastIndex,t},Wo=ye?ye.prototype:void 0,$o=Wo?Wo.valueOf:void 0,qo=function(e){return $o?Object($o.call(e)):{}},Yo=function(e,t){var o=t?Go(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)},Qo=function(e,t,o){var n=e.constructor;return"[object ArrayBuffer]"===t?Go(e):"[object Boolean]"===t||"[object Date]"===t?new n(+e):"[object DataView]"===t?Do(e,o):"[object Float32Array]"===t||"[object Float64Array]"===t||"[object Int8Array]"===t||"[object Int16Array]"===t||"[object Int32Array]"===t||"[object Uint8Array]"===t||"[object Uint8ClampedArray]"===t||"[object Uint16Array]"===t||"[object Uint32Array]"===t?Yo(e,o):"[object Map]"===t?new n:"[object Number]"===t||"[object String]"===t?new n(e):"[object RegExp]"===t?Vo(e):"[object Set]"===t?new n:"[object Symbol]"===t?qo(e):void 0},Jo=Object.create,Xo=function(){function e(){}return function(t){if(!Ae(t))return{};if(Jo)return Jo(t);e.prototype=t;var o=new e;return e.prototype=void 0,o}}(),Zo=function(e){return"function"!=typeof e.constructor||Ft(e)?{}:Xo(co(e))},Ho=vt&&vt.isMap,Ko=Ho?At(Ho):function(e){return dt(e)&&Io(e)=="[object Map]"},en=Ko,tn=vt&&vt.isSet,on=tn?At(tn):function(e){return dt(e)&&Io(e)=="[object Set]"},nn=on,rn={};rn["[object Arguments]"]=rn["[object Array]"]=rn["[object ArrayBuffer]"]=rn["[object DataView]"]=rn["[object Boolean]"]=rn["[object Date]"]=rn["[object Float32Array]"]=rn["[object Float64Array]"]=rn["[object Int8Array]"]=rn["[object Int16Array]"]=rn["[object Int32Array]"]=rn["[object Map]"]=rn["[object Number]"]=rn["[object Object]"]=rn["[object RegExp]"]=rn["[object Set]"]=rn["[object String]"]=rn["[object Symbol]"]=rn["[object Uint8Array]"]=rn["[object Uint8ClampedArray]"]=rn["[object Uint16Array]"]=rn["[object Uint32Array]"]=!0,rn["[object Error]"]=rn["[object Function]"]=rn["[object WeakMap]"]=!1;var an=function(e){return g(e,5)},cn=S,ln=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,dn=/^\w*$/,pn=w;A.Cache=He;var sn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,un=/\\(\\)?/g,yn=function(e){var t=A(e,function(e){return 500===o.size&&o.clear(),e}),o=t.cache;return t}(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(sn,function(e,o,n,r){t.push(n?r.replace(un,"$1"):o||e)}),t}),hn=function(e,t){for(var o=-1,n=null==e?0:e.length,r=Array(n);++o<n;)r[o]=t(e[o],o,e);return r},gn=1/0,bn=ye?ye.prototype:void 0,fn=bn?bn.toString:void 0,_n=v,jn=function(e){return null==e?"":_n(e)},mn=function(e,t){return ft(e)?e:pn(e,t)?[e]:yn(jn(e))},xn=function(e){if("string"==typeof e||cn(e))return e;var t=e+"";return"0"==t&&1/e==-(1/0)?"-0":t},Sn=function(e,t){t=mn(t,e);for(var o=0,n=t.length;null!=e&&o<n;)e=e[xn(t[o++])];return o&&o==n?e:void 0},wn=function(e,t,o){var n=null==e?void 0:Sn(e,t);return n===void 0?o:n},An=function(e,t,o){var n=-1,r=e.length;0>t&&(t=-t>r?0:r+t),o=o>r?r:o,0>o&&(o+=r),r=t>o?0:o-t>>>0,t>>>=0;for(var a=Array(r);++n<r;)a[n]=e[n+t];return a},vn=function(e,t,o){var n=e.length;return o=void 0===o?n:o,!t&&o>=n?e:An(e,t,o)},On=RegExp("["+"\\u200d"+"\\ud800-\\udfff"+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"\\ufe0e\\ufe0f"+"]"),kn=function(e){return On.test(e)},En=vt&&vt.isRegExp,Ln=En?At(En):function(e){return dt(e)&&we(e)=="[object RegExp]"},Pn=function(e){return e.split("")},zn="\\ud800-\\udfff",Tn="["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]",Fn="\\ud83c[\\udffb-\\udfff]",In="[^"+zn+"]",Un="(?:\\ud83c[\\udde6-\\uddff]){2}",Cn="[\\ud800-\\udbff][\\udc00-\\udfff]",Mn="(?:"+Tn+"|"+Fn+")"+"?",Nn="["+"\\ufe0e\\ufe0f"+"]?",Bn="(?:"+"\\u200d"+"(?:"+[In,Un,Cn].join("|")+")"+Nn+Mn+")*",Gn="(?:"+[In+Tn+"?",Tn,Un,Cn,"["+zn+"]"].join("|")+")",Dn=RegExp(Fn+"(?="+Fn+")|"+Gn+(Nn+Mn+Bn),"g"),Rn=function(e){return e.match(Dn)||[]},Vn=function(e){return kn(e)?Rn(e):Pn(e)},Wn=function(e,t,o){return(o&&"number"!=typeof o&&O(e,t,o)&&(t=o=void 0),o=void 0===o?4294967295:o>>>0,!o)?[]:(e=jn(e),e&&("string"==typeof t||null!=t&&!Ln(t))&&(t=_n(t),!t&&kn(e))?vn(Vn(e),0,o):e.split(t,o))};k.prototype.add=k.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},k.prototype.has=function(e){return this.__data__.has(e)};var $n=function(e,t){for(var o=-1,n=null==e?0:e.length;++o<n;)if(t(e[o],o,e))return!0;return!1},qn=function(e,t){return e.has(t)},Yn=function(e,t,o,n,r,a){var c=1&o,i=e.length,l=t.length;if(i!=l&&!(c&&l>i))return!1;var d=a.get(e);if(d&&a.get(t))return d==t;var p=-1,s=!0,u=2&o?new k:void 0;for(a.set(e,t),a.set(t,e);++p<i;){var y=e[p],h=t[p];if(n)var g=c?n(h,y,p,t,e,a):n(y,h,p,e,t,a);if(void 0!==g){if(g)continue;s=!1;break}if(u){if(!$n(t,function(e,t){if(!qn(u,t)&&(y===e||r(y,e,o,n,a)))return u.push(t)})){s=!1;break}}else if(!(y===h||r(y,h,o,n,a))){s=!1;break}}return a["delete"](e),a["delete"](t),s},Qn=function(e){var t=-1,o=Array(e.size);return e.forEach(function(e,n){o[++t]=[n,e]}),o},Jn=function(e){var t=-1,o=Array(e.size);return e.forEach(function(e){o[++t]=e}),o},Xn=ye?ye.prototype:void 0,Zn=Xn?Xn.valueOf:void 0,Hn=function(e,t,o,n,r,a,c){switch(o){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!!(e.byteLength==t.byteLength&&a(new Bo(e),new Bo(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return oe(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var i=Qn;case"[object Set]":var l=1&n;if(i||(i=Jn),e.size!=t.size&&!l)return!1;var d=c.get(e);if(d)return d==t;n|=2,c.set(e,t);var p=Yn(i(e),i(t),n,r,a,c);return c["delete"](e),p;case"[object Symbol]":if(Zn)return Zn.call(e)==Zn.call(t);}return!1},Kn=Object.prototype,er=Kn.hasOwnProperty,tr=Object.prototype,or=tr.hasOwnProperty,nr=function(e,t,o,n,r,a){var c=ft(e),i=ft(t),l=c?"[object Array]":Io(e),d=i?"[object Array]":Io(t);l="[object Arguments]"==l?"[object Object]":l,d="[object Arguments]"==d?"[object Object]":d;var p="[object Object]"==l,s="[object Object]"==d,u=l==d;if(u&&jt(e)){if(!jt(t))return!1;c=!0,p=!1}if(u&&!p)return a||(a=new Ke),c||Et(e)?Yn(e,t,o,n,r,a):Hn(e,t,l,o,n,r,a);if(!(1&o)){var y=p&&or.call(e,"__wrapped__"),h=s&&or.call(t,"__wrapped__");if(y||h){var g=y?e.value():e,b=h?t.value():t;return a||(a=new Ke),r(g,b,o,n,a)}}return!!u&&(a||(a=new Ke),E(e,t,o,n,r,a))},rr=L,ar=function(e){return e===e&&!Ae(e)},cr=function(e){for(var t=Gt(e),o=t.length;o--;){var n=t[o],r=e[n];t[o]=[n,r,ar(r)]}return t},ir=function(e,t){return function(o){return null!=o&&o[e]===t&&(t!==void 0||e in Object(o))}},lr=function(e){var t=cr(e);return 1==t.length&&t[0][2]?ir(t[0][0],t[0][1]):function(o){return o===e||P(o,e,t)}},dr=function(e,t,o){t=mn(t,e);for(var n,r=-1,a=t.length,c=!1;++r<a&&(n=xn(t[r]),!!(c=null!=e&&o(e,n)));)e=e[n];return c||++r!=a?c:(a=null==e?0:e.length,!!a&&St(a)&&xt(n,a)&&(ft(e)||gt(e)))},pr=function(e,t){return null!=e&&dr(e,t,z)},sr=function(e,t){return pn(e)&&ar(t)?ir(xn(e),t):function(o){var n=wn(o,e);return n===void 0&&n===t?pr(o,e):rr(t,n,3)}},ur=function(e){return e},yr=function(e){return function(t){return null==t?void 0:t[e]}},hr=function(e){return function(t){return Sn(t,e)}},gr=function(e){return pn(e)?yr(xn(e)):hr(e)},br=function(e){return function(t,o,n){for(var r=-1,a=Object(t),c=n(t),i=c.length;i--;){var l=c[e?i:++r];if(!1===o(a[l],l,a))break}return t}}(),fr=function(e,t){return function(o,n){if(null==o)return o;if(!Bt(o))return e(o,n);for(var r=o.length,a=t?r:-1,c=Object(o);(t?a--:++a<r)&&!(!1===n(c[a],a,c)););return o}}(function(e,t){return e&&br(e,t,Gt)}),_r=function(e,t){var o=-1,n=Bt(e)?Array(e.length):[];return fr(e,function(e,r,a){n[++o]=t(e,r,a)}),n},jr=function(e,t){var o=ft(e)?hn:_r;return o(e,T(t))},mr=function(e){for(var t=-1,o=null==e?0:e.length,n={};++t<o;){var r=e[t];n[r[0]]=r[1]}return n};return Z});
//# sourceMappingURL=ws-server.umd.js.map
