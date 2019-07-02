/*!
 * ws-client-web v1.0.2
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,e["ws-client-web"]=t())})(this,function(){'use strict';function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t,o,n,r,a,i){try{var d=e[a](i),c=d.value}catch(e){return void o(e)}d.done?t(c):Promise.resolve(c).then(n,r)}function o(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":W&&W in Object(e)?q(e):V(e)}function n(t){return null!=t&&"object"==e(t)}function r(t){return"symbol"==e(t)||Q(t)&&X(t)=="[object Symbol]"}function a(t,o){if(G(t))return!1;var n=e(t);return!!("number"==n||"symbol"==n||"boolean"==n||null==t||Z(t))||B.test(t)||!D.test(t)||null!=o&&t in Object(o)}function i(t){var o=e(t);return null!=t&&("object"==o||"function"==o)}function d(e){return!!re&&re in e}function c(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function l(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function p(t){var o=e(t);return"string"==o||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==t:null===t}function s(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function y(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var o=function o(){var n=arguments,r=t?t.apply(this,n):n[0],a=o.cache;if(a.has(r))return a.get(r);var i=e.apply(this,n);return o.cache=a.set(r,i)||a,i};return o.cache=new(y.Cache||Fe),o}function u(e){if("string"==typeof e)return e;if(G(e))return Ae(e,u)+"";if(Z(e))return $e?$e.call(e):"";var t=e+"";return"0"==t&&1/e==-Ie?"-0":t}function h(){var e,t,o=new Promise(function(){e=arguments[0],t=arguments[1]});return o.resolve=e,o.reject=t,o}function g(e){var t=Object.prototype.toString.call(e);return"[object String]"===t}function _(e){return!!(g(e)&&""!==e)}function f(e){var t=Object.prototype.toString.call(e);return"[object Number]"===t}function m(e){var t=!1;return _(e)?t=!isNaN(+e):f(e)&&(t=!0),t}function b(e){if(!m(e))return 0;var t=De(e);return t}function x(e){return!!m(e)&&(e=b(e),et(e))}function w(e){if(!m(e))return 0;e=b(e);var t=nt(e);return"0"===t+""?0:t}function S(e){if(!x(e))return!1;var t=0<w(e);return t}function v(){var e,t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:32,o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],n=[],a=o.length;if(S(t))for(e=0;e<t;e++)n[e]=o[0|Math.random()*a];else if("rfc4122"===t){n[8]=n[13]=n[18]=n[23]="-",n[14]="4";var d;for(e=0;36>e;e++)n[e]||(d=0|16*Math.random(),n[e]=o[19===e?8|3&d:d])}else return"";var c=n.join("");return c}function L(e){if(!_(e))return{};var t={};try{t=JSON.parse(e)}catch(e){t={}}return t}function j(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object AsyncFunction]"===t}function k(e){var t=Object.prototype.toString.call(e);return"[object Object]"===t}function E(e,t){return!!k(e)&&!!_(t)&&t in e}var T="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,O=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(t){var o=function(t){function o(e,t,o,n){var a=t&&t.prototype instanceof r?t:r,i=Object.create(a.prototype),d=new u(n||[]);return i._invoke=l(e,o,d),i}function n(e,t,o){try{return{type:"normal",arg:e.call(t,o)}}catch(e){return{type:"throw",arg:e}}}function r(){}function a(){}function i(){}function d(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(t){function o(r,a,i,d){var c=n(t[r],t,a);if("throw"===c.type)d(c.arg);else{var l=c.arg,p=l.value;return p&&"object"===e(p)&&m.call(p,"__await")?Promise.resolve(p.__await).then(function(e){o("next",e,i,d)},function(e){o("throw",e,i,d)}):Promise.resolve(p).then(function(e){l.value=e,i(l)},function(e){return o("throw",e,i,d)})}}function r(e,t){function n(){return new Promise(function(n,r){o(e,t,n,r)})}return a=a?a.then(n,n):n()}var a;this._invoke=r}function l(e,t,o){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return g()}for(o.method=a,o.arg=i;;){var d=o.delegate;if(d){var c=p(d,o);if(c){if(c===v)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===r)throw r="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r="executing";var l=n(e,t,o);if("normal"===l.type){if(r=o.done?"completed":"suspendedYield",l.arg===v)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(r="completed",o.method="throw",o.arg=l.arg)}}}function p(e,t){var o=e.iterator[t.method];if(o===_){if(t.delegate=null,"throw"===t.method){if(e.iterator["return"]&&(t.method="return",t.arg=_,p(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=n(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,v;var a=r.arg;if(!a)return t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v;if(a.done)t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=_);else return a;return t.delegate=null,v}function s(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function y(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function u(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(s,this),this.reset(!0)}function h(e){if(e){var t=e[x];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,n=function t(){for(;++o<e.length;)if(m.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=_,t.done=!0,t};return n.next=n}}return{next:g}}function g(){return{value:_,done:!0}}var _,f=Object.prototype,m=f.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},x=b.iterator||"@@iterator",w=b.asyncIterator||"@@asyncIterator",S=b.toStringTag||"@@toStringTag";t.wrap=o;var v={},L={};L[x]=function(){return this};var j=Object.getPrototypeOf,k=j&&j(j(h([])));k&&k!==f&&m.call(k,x)&&(L=k);var E=i.prototype=r.prototype=Object.create(L);return a.prototype=E.constructor=i,i.constructor=a,i[S]=a.displayName="GeneratorFunction",t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,!(S in e)&&(e[S]="GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},d(c.prototype),c.prototype[w]=function(){return this},t.AsyncIterator=c,t.async=function(e,n,r,a){var i=new c(o(e,n,r,a));return t.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},d(E),E[S]="Generator",E[x]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(e){var t=[];for(var o in e)t.push(o);return t.reverse(),function o(){for(;t.length;){var n=t.pop();if(n in e)return o.value=n,o.done=!1,o}return o.done=!0,o}},t.values=h,u.prototype={constructor:u,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=_,this.done=!1,this.delegate=null,this.method="next",this.arg=_,this.tryEntries.forEach(y),!e)for(var t in this)"t"===t.charAt(0)&&m.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=_)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return a.type="throw",a.arg=e,o.next=t,n&&(o.method="next",o.arg=_),!!n}if(this.done)throw e;for(var o=this,n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n],a=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var d=m.call(r,"catchLoc"),c=m.call(r,"finallyLoc");if(d&&c){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(d){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);}else if(!c)throw new Error("try statement without catch or finally");else if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}},abrupt:function(e,t){for(var o,n=this.tryEntries.length-1;0<=n;--n)if(o=this.tryEntries[n],o.tryLoc<=this.prev&&m.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=e,a.arg=t,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t,o=this.tryEntries.length-1;0<=o;--o)if(t=this.tryEntries[o],t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),y(t),v},catch:function(e){for(var t,o=this.tryEntries.length-1;0<=o;--o)if(t=this.tryEntries[o],t.tryLoc===e){var n=t.completion;if("throw"===n.type){var r=n.arg;y(t)}return r}throw new Error("illegal catch attempt")},delegateYield:function(e,t,o){return this.delegate={iterator:h(e),resultName:t,nextLoc:o},"next"===this.method&&(this.arg=_),v}},t}(t.exports);try{regeneratorRuntime=o}catch(e){Function("r","regeneratorRuntime = r")(o)}}),z=O,F=function(e){return function(){var o=this,n=arguments;return new Promise(function(r,a){function i(e){t(c,r,a,i,d,"next",e)}function d(e){t(c,r,a,i,d,"throw",e)}var c=e.apply(o,n);i(void 0)})}},P=Array.isArray,G=P,N="object"==e(T)&&T&&T.Object===Object&&T,A="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,I=N||A||Function("return this")(),C=I,$=C.Symbol,R=$,Y=Object.prototype,M=Y.hasOwnProperty,U=Y.toString,J=R?R.toStringTag:void 0,q=function(e){var t=M.call(e,J),o=e[J];try{e[J]=void 0;var n=!0}catch(t){}var r=U.call(e);return n&&(t?e[J]=o:delete e[J]),r},K=Object.prototype,H=K.toString,V=function(e){return H.call(e)},W=R?R.toStringTag:void 0,X=o,Q=n,Z=r,D=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,B=/^\w*$/,ee=i,te=function(e){if(!ee(e))return!1;var t=X(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},oe=C["__core-js_shared__"],ne=oe,re=function(){var e=/[^.]+$/.exec(ne&&ne.keys&&ne.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ae=Function.prototype,ie=ae.toString,de=function(e){if(null!=e){try{return ie.call(e)}catch(t){}try{return e+""}catch(t){}}return""},ce=/[\\^$.*+?()[\]{}|]/g,le=/^\[object .+?Constructor\]$/,pe=Function.prototype,se=Object.prototype,ye=pe.toString,ue=se.hasOwnProperty,he=RegExp("^"+ye.call(ue).replace(ce,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ge=function(e){if(!ee(e)||d(e))return!1;var t=te(e)?he:le;return t.test(de(e))},_e=function(e,t){return null==e?void 0:e[t]},fe=function(e,t){var o=_e(e,t);return ge(o)?o:void 0},me=fe(Object,"create"),be=me,xe=Object.prototype,we=xe.hasOwnProperty,Se=Object.prototype,ve=Se.hasOwnProperty;c.prototype.clear=function(){this.__data__=be?be(null):{},this.size=0},c.prototype["delete"]=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},c.prototype.get=function(e){var t=this.__data__;if(be){var o=t[e];return o==="__lodash_hash_undefined__"?void 0:o}return we.call(t,e)?t[e]:void 0},c.prototype.has=function(e){var t=this.__data__;return be?t[e]!==void 0:ve.call(t,e)},c.prototype.set=function(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=be&&void 0===t?"__lodash_hash_undefined__":t,this};var Le=c,je=function(e,t){return e===t||e!==e&&t!==t},ke=function(e,t){for(var o=e.length;o--;)if(je(e[o][0],t))return o;return-1},Ee=Array.prototype,Te=Ee.splice;l.prototype.clear=function(){this.__data__=[],this.size=0},l.prototype["delete"]=function(e){var t=this.__data__,o=ke(t,e);if(0>o)return!1;var n=t.length-1;return o==n?t.pop():Te.call(t,o,1),--this.size,!0},l.prototype.get=function(e){var t=this.__data__,o=ke(t,e);return 0>o?void 0:t[o][1]},l.prototype.has=function(e){return-1<ke(this.__data__,e)},l.prototype.set=function(e,t){var o=this.__data__,n=ke(o,e);return 0>n?(++this.size,o.push([e,t])):o[n][1]=t,this};var Oe=fe(C,"Map"),ze=function(e,t){var o=e.__data__;return p(t)?o["string"==typeof t?"string":"hash"]:o.map};s.prototype.clear=function(){this.size=0,this.__data__={hash:new Le,map:new(Oe||l),string:new Le}},s.prototype["delete"]=function(e){var t=ze(this,e)["delete"](e);return this.size-=t?1:0,t},s.prototype.get=function(e){return ze(this,e).get(e)},s.prototype.has=function(e){return ze(this,e).has(e)},s.prototype.set=function(e,t){var o=ze(this,e),n=o.size;return o.set(e,t),this.size+=o.size==n?0:1,this};var Fe=s;y.Cache=Fe;var Pe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ge=/\\(\\)?/g,Ne=function(e){var t=y(e,function(e){return 500===o.size&&o.clear(),e}),o=t.cache;return t}(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Pe,function(e,o,n,r){t.push(n?r.replace(Ge,"$1"):o||e)}),t}),Ae=function(e,t){for(var o=-1,n=null==e?0:e.length,r=Array(n);++o<n;)r[o]=t(e[o],o,e);return r},Ie=1/0,Ce=R?R.prototype:void 0,$e=Ce?Ce.toString:void 0,Re=function(e){return null==e?"":u(e)},Ye=function(e,t){return G(e)?e:a(e,t)?[e]:Ne(Re(e))},Me=function(e){if("string"==typeof e||Z(e))return e;var t=e+"";return"0"==t&&1/e==-(1/0)?"-0":t},Ue=function(e,t){t=Ye(t,e);for(var o=0,n=t.length;null!=e&&o<n;)e=e[Me(t[o++])];return o&&o==n?e:void 0},Je=function(e,t,o){var n=null==e?void 0:Ue(e,t);return n===void 0?o:n},qe=0/0,Ke=/^\s+|\s+$/g,He=/^[-+]0x[0-9a-f]+$/i,Ve=/^0b[01]+$/i,We=/^0o[0-7]+$/i,Xe=parseInt,Qe=function(e){if("number"==typeof e)return e;if(Z(e))return qe;if(ee(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ee(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ke,"");var o=Ve.test(e);return o||We.test(e)?Xe(e.slice(2),o?2:8):He.test(e)?qe:+e},Ze=1/0,De=function(e){if(!e)return 0===e?e:0;if(e=Qe(e),e===Ze||e===-Ze){var t=0>e?-1:1;return 1.7976931348623157e+308*t}return e===e?e:0},Be=function(e){var t=De(e),o=t%1;return t===t?o?t-o:t:0},et=function(e){return"number"==typeof e&&e==Be(e)},tt=Math.min,ot=function(e){var t=Math[e];return function(e,o){if(e=Qe(e),o=null==o?0:tt(Be(o),292),o){var n=(Re(e)+"e").split("e"),r=t(n[0]+"e"+(+n[1]+o));return n=(Re(r)+"e").split("e"),+(n[0]+"e"+(+n[1]-o))}return t(e)}}("round"),nt=ot;return function(e){function t(){function t(o,n){var i=h(),d=v(),c={token:e.token,_id:d,func:o,input:n};r[d]=null,a.readyState===WebSocket.OPEN&&a.send(JSON.stringify(c),function(t){t&&j(e.error)&&e.error(t)});var l=setInterval(function(){if(null!==r[d]){var e=Je(r[d],"output");delete r[d],i.resolve(e),clearInterval(l)}},1e3);return i}e.url||(e.url="ws://localhost:8080"),e.token||(e.token="*");try{a=new WebSocket(e.url+"?token="+e.token)}catch(e){return void o()}a.onopen=function(){j(e.open)&&e.open(),t("getFuncs",null)},a.onmessage=function(e){var o=e.data,a=L(o);if("sys"===Je(a,"sys")&&E(a,"funcs")){var c=a.funcs;d={};for(var l=function(e){var o=c[e];d[o]=function(){var e=F(z.mark(function e(r){return z.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n;case 2:return e.abrupt("return",t(o,r));case 3:case"end":return e.stop();}},e)}));return function(){return e.apply(this,arguments)}}()},p=0;p<c.length;p++)l(p);n.resolve(d)}Je(a,"_id")&&(r[a._id]=a)},a.onclose=function(){o()},a.onerror=function(t){j(e.error)&&e.error(t),a.close()}}function o(){setTimeout(function(){j(e.reconn)&&e.reconn(),t()},1e3)}var n=h(),r={},a=null,d={};return t(),n}});
//# sourceMappingURL=ws-client-web.umd.js.map
