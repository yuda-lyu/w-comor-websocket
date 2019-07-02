/*!
 * ws-client-node v1.0.3
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("ws")):"function"==typeof define&&define.amd?define(["ws"],t):(e=e||self,e["ws-client-node"]=t(e.ws))})(this,function(e){'use strict';function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function o(e,t,o,n,r,a,i){try{var d=e[a](i),c=d.value}catch(e){return void o(e)}d.done?t(c):Promise.resolve(c).then(n,r)}function n(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":X&&X in Object(e)?q(e):W(e)}function r(e){return null!=e&&"object"==t(e)}function a(e){return"symbol"==t(e)||Z(e)&&Q(e)=="[object Symbol]"}function i(e,o){if(N(e))return!1;var n=t(e);return!!("number"==n||"symbol"==n||"boolean"==n||null==e||D(e))||ee.test(e)||!B.test(e)||null!=o&&e in Object(o)}function d(e){var o=t(e);return null!=e&&("object"==o||"function"==o)}function c(e){return!!ae&&ae in e}function l(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function p(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function s(e){var o=t(e);return"string"==o||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e}function y(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function u(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var o=function o(){var n=arguments,r=t?t.apply(this,n):n[0],a=o.cache;if(a.has(r))return a.get(r);var i=e.apply(this,n);return o.cache=a.set(r,i)||a,i};return o.cache=new(u.Cache||Fe),o}function h(e){if("string"==typeof e)return e;if(N(e))return Ie(e,h)+"";if(D(e))return Re?Re.call(e):"";var t=e+"";return"0"==t&&1/e==-Ce?"-0":t}function g(){var e,t,o=new Promise(function(){e=arguments[0],t=arguments[1]});return o.resolve=e,o.reject=t,o}function _(e){var t=Object.prototype.toString.call(e);return"[object String]"===t}function f(e){return!!(_(e)&&""!==e)}function m(e){var t=Object.prototype.toString.call(e);return"[object Number]"===t}function b(e){var t=!1;return f(e)?t=!isNaN(+e):m(e)&&(t=!0),t}function x(e){if(!b(e))return 0;var t=Be(e);return t}function w(e){return!!b(e)&&(e=x(e),tt(e))}function S(e){if(!b(e))return 0;e=x(e);var t=rt(e);return"0"===t+""?0:t}function v(e){if(!w(e))return!1;var t=0<S(e);return t}function L(){var e,t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:32,o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],n=[],a=o.length;if(v(t))for(e=0;e<t;e++)n[e]=o[0|Math.random()*a];else if("rfc4122"===t){n[8]=n[13]=n[18]=n[23]="-",n[14]="4";var d;for(e=0;36>e;e++)n[e]||(d=0|16*Math.random(),n[e]=o[19===e?8|3&d:d])}else return"";var c=n.join("");return c}function j(e){if(!f(e))return{};var t={};try{t=JSON.parse(e)}catch(e){t={}}return t}function k(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object AsyncFunction]"===t}function E(e){var t=Object.prototype.toString.call(e);return"[object Object]"===t}function O(e,t){return!!E(e)&&!!f(t)&&t in e}e=e&&e.hasOwnProperty("default")?e["default"]:e;var T="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,P=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){var o=function(e){function o(e,t,o,n){var a=t&&t.prototype instanceof r?t:r,i=Object.create(a.prototype),d=new u(n||[]);return i._invoke=l(e,o,d),i}function n(e,t,o){try{return{type:"normal",arg:e.call(t,o)}}catch(e){return{type:"throw",arg:e}}}function r(){}function a(){}function i(){}function d(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(e){function o(r,a,i,d){var c=n(e[r],e,a);if("throw"===c.type)d(c.arg);else{var l=c.arg,p=l.value;return p&&"object"===t(p)&&m.call(p,"__await")?Promise.resolve(p.__await).then(function(e){o("next",e,i,d)},function(e){o("throw",e,i,d)}):Promise.resolve(p).then(function(e){l.value=e,i(l)},function(e){return o("throw",e,i,d)})}}function r(e,t){function n(){return new Promise(function(n,r){o(e,t,n,r)})}return a=a?a.then(n,n):n()}var a;this._invoke=r}function l(e,t,o){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return g()}for(o.method=a,o.arg=i;;){var d=o.delegate;if(d){var c=p(d,o);if(c){if(c===v)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===r)throw r="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r="executing";var l=n(e,t,o);if("normal"===l.type){if(r=o.done?"completed":"suspendedYield",l.arg===v)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(r="completed",o.method="throw",o.arg=l.arg)}}}function p(e,t){var o=e.iterator[t.method];if(o===_){if(t.delegate=null,"throw"===t.method){if(e.iterator["return"]&&(t.method="return",t.arg=_,p(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=n(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,v;var a=r.arg;if(!a)return t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v;if(a.done)t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=_);else return a;return t.delegate=null,v}function s(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function y(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function u(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(s,this),this.reset(!0)}function h(e){if(e){var t=e[x];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,n=function t(){for(;++o<e.length;)if(m.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=_,t.done=!0,t};return n.next=n}}return{next:g}}function g(){return{value:_,done:!0}}var _,f=Object.prototype,m=f.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},x=b.iterator||"@@iterator",w=b.asyncIterator||"@@asyncIterator",S=b.toStringTag||"@@toStringTag";e.wrap=o;var v={},L={};L[x]=function(){return this};var j=Object.getPrototypeOf,k=j&&j(j(h([])));k&&k!==f&&m.call(k,x)&&(L=k);var E=i.prototype=r.prototype=Object.create(L);return a.prototype=E.constructor=i,i.constructor=a,i[S]=a.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,!(S in e)&&(e[S]="GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},d(c.prototype),c.prototype[w]=function(){return this},e.AsyncIterator=c,e.async=function(t,n,r,a){var i=new c(o(t,n,r,a));return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},d(E),E[S]="Generator",E[x]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var o in e)t.push(o);return t.reverse(),function o(){for(;t.length;){var n=t.pop();if(n in e)return o.value=n,o.done=!1,o}return o.done=!0,o}},e.values=h,u.prototype={constructor:u,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=_,this.done=!1,this.delegate=null,this.method="next",this.arg=_,this.tryEntries.forEach(y),!e)for(var t in this)"t"===t.charAt(0)&&m.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=_)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return a.type="throw",a.arg=e,o.next=t,n&&(o.method="next",o.arg=_),!!n}if(this.done)throw e;for(var o=this,n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n],a=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var d=m.call(r,"catchLoc"),c=m.call(r,"finallyLoc");if(d&&c){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(d){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);}else if(!c)throw new Error("try statement without catch or finally");else if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}},abrupt:function(e,t){for(var o,n=this.tryEntries.length-1;0<=n;--n)if(o=this.tryEntries[n],o.tryLoc<=this.prev&&m.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=e,a.arg=t,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t,o=this.tryEntries.length-1;0<=o;--o)if(t=this.tryEntries[o],t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),y(t),v},catch:function(e){for(var t,o=this.tryEntries.length-1;0<=o;--o)if(t=this.tryEntries[o],t.tryLoc===e){var n=t.completion;if("throw"===n.type){var r=n.arg;y(t)}return r}throw new Error("illegal catch attempt")},delegateYield:function(e,t,o){return this.delegate={iterator:h(e),resultName:t,nextLoc:o},"next"===this.method&&(this.arg=_),v}},e}(e.exports);try{regeneratorRuntime=o}catch(e){Function("r","regeneratorRuntime = r")(o)}}),z=P,F=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){function i(e){o(c,r,a,i,d,"next",e)}function d(e){o(c,r,a,i,d,"throw",e)}var c=e.apply(t,n);i(void 0)})}},G=Array.isArray,N=G,A="object"==t(T)&&T&&T.Object===Object&&T,I="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,C=A||I||Function("return this")(),$=C,R=$.Symbol,Y=R,M=Object.prototype,U=M.hasOwnProperty,K=M.toString,J=Y?Y.toStringTag:void 0,q=function(e){var t=U.call(e,J),o=e[J];try{e[J]=void 0;var n=!0}catch(t){}var r=K.call(e);return n&&(t?e[J]=o:delete e[J]),r},H=Object.prototype,V=H.toString,W=function(e){return V.call(e)},X=Y?Y.toStringTag:void 0,Q=n,Z=r,D=a,B=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=d,oe=function(e){if(!te(e))return!1;var t=Q(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},ne=$["__core-js_shared__"],re=ne,ae=function(){var e=/[^.]+$/.exec(re&&re.keys&&re.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ie=Function.prototype,de=ie.toString,ce=function(e){if(null!=e){try{return de.call(e)}catch(t){}try{return e+""}catch(t){}}return""},le=/[\\^$.*+?()[\]{}|]/g,pe=/^\[object .+?Constructor\]$/,se=Function.prototype,ye=Object.prototype,ue=se.toString,he=ye.hasOwnProperty,ge=RegExp("^"+ue.call(he).replace(le,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_e=function(e){if(!te(e)||c(e))return!1;var t=oe(e)?ge:pe;return t.test(ce(e))},fe=function(e,t){return null==e?void 0:e[t]},me=function(e,t){var o=fe(e,t);return _e(o)?o:void 0},be=me(Object,"create"),xe=be,we=Object.prototype,Se=we.hasOwnProperty,ve=Object.prototype,Le=ve.hasOwnProperty;l.prototype.clear=function(){this.__data__=xe?xe(null):{},this.size=0},l.prototype["delete"]=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},l.prototype.get=function(e){var t=this.__data__;if(xe){var o=t[e];return o==="__lodash_hash_undefined__"?void 0:o}return Se.call(t,e)?t[e]:void 0},l.prototype.has=function(e){var t=this.__data__;return xe?t[e]!==void 0:Le.call(t,e)},l.prototype.set=function(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=xe&&void 0===t?"__lodash_hash_undefined__":t,this};var je=l,ke=function(e,t){return e===t||e!==e&&t!==t},Ee=function(e,t){for(var o=e.length;o--;)if(ke(e[o][0],t))return o;return-1},Oe=Array.prototype,Te=Oe.splice;p.prototype.clear=function(){this.__data__=[],this.size=0},p.prototype["delete"]=function(e){var t=this.__data__,o=Ee(t,e);if(0>o)return!1;var n=t.length-1;return o==n?t.pop():Te.call(t,o,1),--this.size,!0},p.prototype.get=function(e){var t=this.__data__,o=Ee(t,e);return 0>o?void 0:t[o][1]},p.prototype.has=function(e){return-1<Ee(this.__data__,e)},p.prototype.set=function(e,t){var o=this.__data__,n=Ee(o,e);return 0>n?(++this.size,o.push([e,t])):o[n][1]=t,this};var Pe=me($,"Map"),ze=function(e,t){var o=e.__data__;return s(t)?o["string"==typeof t?"string":"hash"]:o.map};y.prototype.clear=function(){this.size=0,this.__data__={hash:new je,map:new(Pe||p),string:new je}},y.prototype["delete"]=function(e){var t=ze(this,e)["delete"](e);return this.size-=t?1:0,t},y.prototype.get=function(e){return ze(this,e).get(e)},y.prototype.has=function(e){return ze(this,e).has(e)},y.prototype.set=function(e,t){var o=ze(this,e),n=o.size;return o.set(e,t),this.size+=o.size==n?0:1,this};var Fe=y;u.Cache=Fe;var Ge=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ne=/\\(\\)?/g,Ae=function(e){var t=u(e,function(e){return 500===o.size&&o.clear(),e}),o=t.cache;return t}(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ge,function(e,o,n,r){t.push(n?r.replace(Ne,"$1"):o||e)}),t}),Ie=function(e,t){for(var o=-1,n=null==e?0:e.length,r=Array(n);++o<n;)r[o]=t(e[o],o,e);return r},Ce=1/0,$e=Y?Y.prototype:void 0,Re=$e?$e.toString:void 0,Ye=function(e){return null==e?"":h(e)},Me=function(e,t){return N(e)?e:i(e,t)?[e]:Ae(Ye(e))},Ue=function(e){if("string"==typeof e||D(e))return e;var t=e+"";return"0"==t&&1/e==-(1/0)?"-0":t},Ke=function(e,t){t=Me(t,e);for(var o=0,n=t.length;null!=e&&o<n;)e=e[Ue(t[o++])];return o&&o==n?e:void 0},Je=function(e,t,o){var n=null==e?void 0:Ke(e,t);return n===void 0?o:n},qe=0/0,He=/^\s+|\s+$/g,Ve=/^[-+]0x[0-9a-f]+$/i,We=/^0b[01]+$/i,Xe=/^0o[0-7]+$/i,Qe=parseInt,Ze=function(e){if("number"==typeof e)return e;if(D(e))return qe;if(te(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=te(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(He,"");var o=We.test(e);return o||Xe.test(e)?Qe(e.slice(2),o?2:8):Ve.test(e)?qe:+e},De=1/0,Be=function(e){if(!e)return 0===e?e:0;if(e=Ze(e),e===De||e===-De){var t=0>e?-1:1;return 1.7976931348623157e+308*t}return e===e?e:0},et=function(e){var t=Be(e),o=t%1;return t===t?o?t-o:t:0},tt=function(e){return"number"==typeof e&&e==et(e)},ot=Math.min,nt=function(e){var t=Math[e];return function(e,o){if(e=Ze(e),o=null==o?0:ot(et(o),292),o){var n=(Ye(e)+"e").split("e"),r=t(n[0]+"e"+(+n[1]+o));return n=(Ye(r)+"e").split("e"),+(n[0]+"e"+(+n[1]-o))}return t(e)}}("round"),rt=nt;return function(o){function n(){function t(n,r){var a=g(),i=L(),l={token:o.token,_id:i,func:n,input:r};d[i]=null,c.readyState===e.OPEN&&c.send(JSON.stringify(l),function(e){e&&k(o.error)&&o.error(e)});var p=setInterval(function(){if(null!==d[i]){var e=Je(d[i],"output");delete d[i],a.resolve(e),clearInterval(p)}},1e3);return a}o.url||(o.url="ws://localhost:8080"),o.token||(o.token="*");try{c=new e(o.url+"?token="+o.token)}catch(e){return void r()}c.on("open",function(){k(o.open)&&o.open(),t("getFuncs",null)}),c.on("message",function(e){var o=j(e);if("sys"===Je(o,"sys")&&O(o,"funcs")){var n=o.funcs;l={};for(var r=function(e){var o=n[e];l[o]=function(){var e=F(z.mark(function e(n){return z.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(o,n));case 1:case"end":return e.stop();}},e)}));return function(){return e.apply(this,arguments)}}()},c=0;c<n.length;c++)r(c);a.resolve(l)}Je(o,"_id")&&(d[o._id]=o)}),c.on("close",function(){r()}),c.on("error",function(e){k(o.error)&&o.error(e),c.close()})}function r(){setTimeout(function(){k(o.reconn)&&o.reconn(),n()},1e3)}var a=g(),d={},c=null,l={};return n(),a}});
//# sourceMappingURL=ws-client-node.umd.js.map
