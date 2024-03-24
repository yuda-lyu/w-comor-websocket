/*!
 * w-comor-websocket-server v1.0.38
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("ws")):"function"==typeof define&&define.amd?define(["ws"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-comor-websocket-server"]=e(t.ws)}(this,(function(t){"use strict";var e="object"==typeof global&&global&&global.Object===Object&&global,r="object"==typeof self&&self&&self.Object===Object&&self,n=e||r||Function("return this")(),o=n.Symbol,u=Object.prototype,i=u.hasOwnProperty,c=u.toString,a=o?o.toStringTag:void 0;var f=Object.prototype.toString;var l="[object Null]",s="[object Undefined]",p=o?o.toStringTag:void 0;function v(t){return null==t?void 0===t?s:l:p&&p in Object(t)?function(t){var e=i.call(t,a),r=t[a];try{t[a]=void 0;var n=!0}catch(t){}var o=c.call(t);return n&&(e?t[a]=r:delete t[a]),o}(t):function(t){return f.call(t)}(t)}function h(t){return null!=t&&"object"==typeof t}function b(t){return h(t)&&"[object Arguments]"==v(t)}var y=Object.prototype,d=y.hasOwnProperty,_=y.propertyIsEnumerable,g=b(function(){return arguments}())?b:function(t){return h(t)&&d.call(t,"callee")&&!_.call(t,"callee")},j=g,O=Array.isArray;var w="object"==typeof exports&&exports&&!exports.nodeType&&exports,m=w&&"object"==typeof module&&module&&!module.nodeType&&module,S=m&&m.exports===w?n.Buffer:void 0,A=(S?S.isBuffer:void 0)||function(){return!1},z=9007199254740991,x=/^(?:0|[1-9]\d*)$/;function k(t,e){var r=typeof t;return!!(e=null==e?z:e)&&("number"==r||"symbol"!=r&&x.test(t))&&t>-1&&t%1==0&&t<e}var E=9007199254740991;function P(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=E}var C={};function F(t){return function(e){return t(e)}}C["[object Float32Array]"]=C["[object Float64Array]"]=C["[object Int8Array]"]=C["[object Int16Array]"]=C["[object Int32Array]"]=C["[object Uint8Array]"]=C["[object Uint8ClampedArray]"]=C["[object Uint16Array]"]=C["[object Uint32Array]"]=!0,C["[object Arguments]"]=C["[object Array]"]=C["[object ArrayBuffer]"]=C["[object Boolean]"]=C["[object DataView]"]=C["[object Date]"]=C["[object Error]"]=C["[object Function]"]=C["[object Map]"]=C["[object Number]"]=C["[object Object]"]=C["[object RegExp]"]=C["[object Set]"]=C["[object String]"]=C["[object WeakMap]"]=!1;var $="object"==typeof exports&&exports&&!exports.nodeType&&exports,N=$&&"object"==typeof module&&module&&!module.nodeType&&module,T=N&&N.exports===$&&e.process,B=function(){try{var t=N&&N.require&&N.require("util").types;return t||T&&T.binding&&T.binding("util")}catch(t){}}(),M=B&&B.isTypedArray,D=M?F(M):function(t){return h(t)&&P(t.length)&&!!C[v(t)]},R=Object.prototype.hasOwnProperty;function I(t,e){var r=O(t),n=!r&&j(t),o=!r&&!n&&A(t),u=!r&&!n&&!o&&D(t),i=r||n||o||u,c=i?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],a=c.length;for(var f in t)!e&&!R.call(t,f)||i&&("length"==f||o&&("offset"==f||"parent"==f)||u&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||k(f,a))||c.push(f);return c}var L=Object.prototype;var U,W,q=(U=Object.keys,W=Object,function(t){return U(W(t))}),V=Object.prototype.hasOwnProperty;function J(t){if(r=(e=t)&&e.constructor,e!==("function"==typeof r&&r.prototype||L))return q(t);var e,r,n=[];for(var o in Object(t))V.call(t,o)&&"constructor"!=o&&n.push(o);return n}function G(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var H="[object AsyncFunction]",K="[object Function]",Q="[object GeneratorFunction]",X="[object Proxy]";function Y(t){if(!G(t))return!1;var e=v(t);return e==K||e==Q||e==H||e==X}function Z(t){return null!=t&&P(t.length)&&!Y(t)}function tt(t){return Z(t)?I(t):J(t)}var et="[object Symbol]";function rt(t){return"symbol"==typeof t||h(t)&&v(t)==et}var nt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ot=/^\w*$/;function ut(t,e){if(O(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!rt(t))||(ot.test(t)||!nt.test(t)||null!=e&&t in Object(e))}var it,ct=n["__core-js_shared__"],at=(it=/[^.]+$/.exec(ct&&ct.keys&&ct.keys.IE_PROTO||""))?"Symbol(src)_1."+it:"";var ft=Function.prototype.toString;function lt(t){if(null!=t){try{return ft.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var st=/^\[object .+?Constructor\]$/,pt=Function.prototype,vt=Object.prototype,ht=pt.toString,bt=vt.hasOwnProperty,yt=RegExp("^"+ht.call(bt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function dt(t){return!(!G(t)||function(t){return!!at&&at in t}(t))&&(Y(t)?yt:st).test(lt(t))}function _t(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return dt(r)?r:void 0}var gt=_t(Object,"create");var jt=Object.prototype.hasOwnProperty;var Ot=Object.prototype.hasOwnProperty;function wt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function mt(t,e){return t===e||t!=t&&e!=e}function St(t,e){for(var r=t.length;r--;)if(mt(t[r][0],e))return r;return-1}wt.prototype.clear=function(){this.__data__=gt?gt(null):{},this.size=0},wt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},wt.prototype.get=function(t){var e=this.__data__;if(gt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return jt.call(e,t)?e[t]:void 0},wt.prototype.has=function(t){var e=this.__data__;return gt?void 0!==e[t]:Ot.call(e,t)},wt.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};var At=Array.prototype.splice;function zt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}zt.prototype.clear=function(){this.__data__=[],this.size=0},zt.prototype.delete=function(t){var e=this.__data__,r=St(e,t);return!(r<0)&&(r==e.length-1?e.pop():At.call(e,r,1),--this.size,!0)},zt.prototype.get=function(t){var e=this.__data__,r=St(e,t);return r<0?void 0:e[r][1]},zt.prototype.has=function(t){return St(this.__data__,t)>-1},zt.prototype.set=function(t,e){var r=this.__data__,n=St(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var xt=_t(n,"Map");function kt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Et(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Et.prototype.clear=function(){this.size=0,this.__data__={hash:new wt,map:new(xt||zt),string:new wt}},Et.prototype.delete=function(t){var e=kt(this,t).delete(t);return this.size-=e?1:0,e},Et.prototype.get=function(t){return kt(this,t).get(t)},Et.prototype.has=function(t){return kt(this,t).has(t)},Et.prototype.set=function(t,e){var r=kt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var Pt="Expected a function";function Ct(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(Pt);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],u=r.cache;if(u.has(o))return u.get(o);var i=t.apply(this,n);return r.cache=u.set(o,i)||u,i};return r.cache=new(Ct.Cache||Et),r}Ct.Cache=Et;var Ft=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$t=/\\(\\)?/g,Nt=function(t){var e=Ct(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Ft,(function(t,r,n,o){e.push(n?o.replace($t,"$1"):r||t)})),e})),Tt=Nt;function Bt(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}var Mt=1/0,Dt=o?o.prototype:void 0,Rt=Dt?Dt.toString:void 0;function It(t){if("string"==typeof t)return t;if(O(t))return Bt(t,It)+"";if(rt(t))return Rt?Rt.call(t):"";var e=t+"";return"0"==e&&1/t==-Mt?"-0":e}function Lt(t){return null==t?"":It(t)}function Ut(t,e){return O(t)?t:ut(t,e)?[t]:Tt(Lt(t))}var Wt=1/0;function qt(t){if("string"==typeof t||rt(t))return t;var e=t+"";return"0"==e&&1/t==-Wt?"-0":e}function Vt(t,e){for(var r=0,n=(e=Ut(e,t)).length;null!=t&&r<n;)t=t[qt(e[r++])];return r&&r==n?t:void 0}function Jt(t,e,r){var n=null==t?void 0:Vt(t,e);return void 0===n?r:n}function Gt(t){return"[object Object]"===Object.prototype.toString.call(t)}function Ht(t){return"[object String]"===Object.prototype.toString.call(t)}function Kt(t){return!(!Ht(t)||""===t)}function Qt(t){return t!=t}function Xt(t){let e=!1;if(Kt(t))e=!isNaN(Number(t));else if(function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)){if(Qt(t))return!1;e=!0}return e}function Yt(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var u=Array(o);++n<o;)u[n]=t[n+e];return u}(t,e,r)}var Zt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function te(t){return Zt.test(t)}var ee=B&&B.isRegExp,re=ee?F(ee):function(t){return h(t)&&"[object RegExp]"==v(t)};var ne="\\ud800-\\udfff",oe="["+ne+"]",ue="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",ie="\\ud83c[\\udffb-\\udfff]",ce="[^"+ne+"]",ae="(?:\\ud83c[\\udde6-\\uddff]){2}",fe="[\\ud800-\\udbff][\\udc00-\\udfff]",le="(?:"+ue+"|"+ie+")"+"?",se="[\\ufe0e\\ufe0f]?",pe=se+le+("(?:\\u200d(?:"+[ce,ae,fe].join("|")+")"+se+le+")*"),ve="(?:"+[ce+ue+"?",ue,ae,fe,oe].join("|")+")",he=RegExp(ie+"(?="+ie+")|"+ve+pe,"g");function be(t){return te(t)?function(t){return t.match(he)||[]}(t):function(t){return t.split("")}(t)}var ye=4294967295;function de(t,e,r){return r&&"number"!=typeof r&&function(t,e,r){if(!G(r))return!1;var n=typeof e;return!!("number"==n?Z(r)&&k(e,r.length):"string"==n&&e in r)&&mt(r[e],t)}(t,e,r)&&(e=r=void 0),(r=void 0===r?ye:r>>>0)?(t=Lt(t))&&("string"==typeof e||null!=e&&!re(e))&&!(e=It(e))&&te(t)?Yt(be(t),0,r):t.split(e,r):[]}function _e(t){var e=this.__data__=new zt(t);this.size=e.size}_e.prototype.clear=function(){this.__data__=new zt,this.size=0},_e.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},_e.prototype.get=function(t){return this.__data__.get(t)},_e.prototype.has=function(t){return this.__data__.has(t)},_e.prototype.set=function(t,e){var r=this.__data__;if(r instanceof zt){var n=r.__data__;if(!xt||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Et(n)}return r.set(t,e),this.size=r.size,this};function ge(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new Et;++e<r;)this.add(t[e])}function je(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}ge.prototype.add=ge.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},ge.prototype.has=function(t){return this.__data__.has(t)};var Oe=1,we=2;function me(t,e,r,n,o,u){var i=r&Oe,c=t.length,a=e.length;if(c!=a&&!(i&&a>c))return!1;var f=u.get(t),l=u.get(e);if(f&&l)return f==e&&l==t;var s=-1,p=!0,v=r&we?new ge:void 0;for(u.set(t,e),u.set(e,t);++s<c;){var h=t[s],b=e[s];if(n)var y=i?n(b,h,s,e,t,u):n(h,b,s,t,e,u);if(void 0!==y){if(y)continue;p=!1;break}if(v){if(!je(e,(function(t,e){if(i=e,!v.has(i)&&(h===t||o(h,t,r,n,u)))return v.push(e);var i}))){p=!1;break}}else if(h!==b&&!o(h,b,r,n,u)){p=!1;break}}return u.delete(t),u.delete(e),p}var Se=n.Uint8Array;function Ae(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function ze(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var xe=1,ke=2,Ee="[object Boolean]",Pe="[object Date]",Ce="[object Error]",Fe="[object Map]",$e="[object Number]",Ne="[object RegExp]",Te="[object Set]",Be="[object String]",Me="[object Symbol]",De="[object ArrayBuffer]",Re="[object DataView]",Ie=o?o.prototype:void 0,Le=Ie?Ie.valueOf:void 0;var Ue=Object.prototype.propertyIsEnumerable,We=Object.getOwnPropertySymbols,qe=We?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,u=[];++r<n;){var i=t[r];e(i,r,t)&&(u[o++]=i)}return u}(We(t),(function(e){return Ue.call(t,e)})))}:function(){return[]};function Ve(t){return function(t,e,r){var n=e(t);return O(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,tt,qe)}var Je=1,Ge=Object.prototype.hasOwnProperty;var He=_t(n,"DataView"),Ke=_t(n,"Promise"),Qe=_t(n,"Set"),Xe=_t(n,"WeakMap"),Ye="[object Map]",Ze="[object Promise]",tr="[object Set]",er="[object WeakMap]",rr="[object DataView]",nr=lt(He),or=lt(xt),ur=lt(Ke),ir=lt(Qe),cr=lt(Xe),ar=v;(He&&ar(new He(new ArrayBuffer(1)))!=rr||xt&&ar(new xt)!=Ye||Ke&&ar(Ke.resolve())!=Ze||Qe&&ar(new Qe)!=tr||Xe&&ar(new Xe)!=er)&&(ar=function(t){var e=v(t),r="[object Object]"==e?t.constructor:void 0,n=r?lt(r):"";if(n)switch(n){case nr:return rr;case or:return Ye;case ur:return Ze;case ir:return tr;case cr:return er}return e});var fr=ar,lr=1,sr="[object Arguments]",pr="[object Array]",vr="[object Object]",hr=Object.prototype.hasOwnProperty;function br(t,e,r,n,o,u){var i=O(t),c=O(e),a=i?pr:fr(t),f=c?pr:fr(e),l=(a=a==sr?vr:a)==vr,s=(f=f==sr?vr:f)==vr,p=a==f;if(p&&A(t)){if(!A(e))return!1;i=!0,l=!1}if(p&&!l)return u||(u=new _e),i||D(t)?me(t,e,r,n,o,u):function(t,e,r,n,o,u,i){switch(r){case Re:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case De:return!(t.byteLength!=e.byteLength||!u(new Se(t),new Se(e)));case Ee:case Pe:case $e:return mt(+t,+e);case Ce:return t.name==e.name&&t.message==e.message;case Ne:case Be:return t==e+"";case Fe:var c=Ae;case Te:var a=n&xe;if(c||(c=ze),t.size!=e.size&&!a)return!1;var f=i.get(t);if(f)return f==e;n|=ke,i.set(t,e);var l=me(c(t),c(e),n,o,u,i);return i.delete(t),l;case Me:if(Le)return Le.call(t)==Le.call(e)}return!1}(t,e,a,r,n,o,u);if(!(r&lr)){var v=l&&hr.call(t,"__wrapped__"),h=s&&hr.call(e,"__wrapped__");if(v||h){var b=v?t.value():t,y=h?e.value():e;return u||(u=new _e),o(b,y,r,n,u)}}return!!p&&(u||(u=new _e),function(t,e,r,n,o,u){var i=r&Je,c=Ve(t),a=c.length;if(a!=Ve(e).length&&!i)return!1;for(var f=a;f--;){var l=c[f];if(!(i?l in e:Ge.call(e,l)))return!1}var s=u.get(t),p=u.get(e);if(s&&p)return s==e&&p==t;var v=!0;u.set(t,e),u.set(e,t);for(var h=i;++f<a;){var b=t[l=c[f]],y=e[l];if(n)var d=i?n(y,b,l,e,t,u):n(b,y,l,t,e,u);if(!(void 0===d?b===y||o(b,y,r,n,u):d)){v=!1;break}h||(h="constructor"==l)}if(v&&!h){var _=t.constructor,g=e.constructor;_==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof g&&g instanceof g||(v=!1)}return u.delete(t),u.delete(e),v}(t,e,r,n,o,u))}function yr(t,e,r,n,o){return t===e||(null==t||null==e||!h(t)&&!h(e)?t!=t&&e!=e:br(t,e,r,n,yr,o))}var dr=1,_r=2;function gr(t){return t==t&&!G(t)}function jr(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}}function Or(t){var e=function(t){for(var e=tt(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,gr(o)]}return e}(t);return 1==e.length&&e[0][2]?jr(e[0][0],e[0][1]):function(r){return r===t||function(t,e,r,n){var o=r.length,u=o,i=!n;if(null==t)return!u;for(t=Object(t);o--;){var c=r[o];if(i&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++o<u;){var a=(c=r[o])[0],f=t[a],l=c[1];if(i&&c[2]){if(void 0===f&&!(a in t))return!1}else{var s=new _e;if(n)var p=n(f,l,a,t,e,s);if(!(void 0===p?yr(l,f,dr|_r,n,s):p))return!1}}return!0}(r,t,e)}}function wr(t,e){return null!=t&&e in Object(t)}function mr(t,e){return null!=t&&function(t,e,r){for(var n=-1,o=(e=Ut(e,t)).length,u=!1;++n<o;){var i=qt(e[n]);if(!(u=null!=t&&r(t,i)))break;t=t[i]}return u||++n!=o?u:!!(o=null==t?0:t.length)&&P(o)&&k(i,o)&&(O(t)||j(t))}(t,e,wr)}var Sr=1,Ar=2;function zr(t){return t}function xr(t){return ut(t)?(e=qt(t),function(t){return null==t?void 0:t[e]}):function(t){return function(e){return Vt(e,t)}}(t);var e}function kr(t){return"function"==typeof t?t:null==t?zr:"object"==typeof t?O(t)?(e=t[0],r=t[1],ut(e)&&gr(r)?jr(qt(e),r):function(t){var n=Jt(t,e);return void 0===n&&n===r?mr(t,e):yr(r,n,Sr|Ar)}):Or(t):xr(t);var e,r}var Er,Pr=function(t,e,r){for(var n=-1,o=Object(t),u=r(t),i=u.length;i--;){var c=u[Er?i:++n];if(!1===e(o[c],c,o))break}return t};var Cr=function(t,e){return function(r,n){if(null==r)return r;if(!Z(r))return t(r,n);for(var o=r.length,u=e?o:-1,i=Object(r);(e?u--:++u<o)&&!1!==n(i[u],u,i););return r}}((function(t,e){return t&&Pr(t,e,tt)})),Fr=Cr;function $r(t,e){var r=-1,n=Z(t)?Array(t.length):[];return Fr(t,(function(t,o,u){n[++r]=e(t,o,u)})),n}function Nr(t){if(!Kt(t))return{};if(!Kt(t=Jt(t=de(t,"?"),"[1]")))return{};let e=de(t,"&");var r,n;return n=function(t){return de(t,"=")},e=(O(r=e)?Bt:$r)(r,kr(n)),e=function(t){for(var e=-1,r=null==t?0:t.length,n={};++e<r;){var o=t[e];n[o[0]]=o[1]}return n}(e),e}function Tr(t){let e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function Br(t){return"[object Array]"===Object.prototype.toString.call(t)}function Mr(t){return!!function(t){return"[object Undefined]"===Object.prototype.toString.call(t)}(t)||(!!function(t){return"[object Null]"===Object.prototype.toString.call(t)}(t)||(!!function(t){if(Gt(t)){for(let e in t)return!1;return!0}return!1}(t)||(!!function(t){return!(!Ht(t)||""!==t)}(t)||(!!function(t){return!!Br(t)&&0===t.length}(t)||!!Qt(t)))))}return function(e){e.port||(e.port=8080);let r=[];var n,o;function u(t){let r=function(){let t,e,r=new Promise((function(){t=arguments[0],e=arguments[1]}));return r.resolve=t,r.reject=e,r}();return Tr(e.authenticate)?e.authenticate(t).then((function(t){r.resolve(t)})):r.resolve(!0),r}o="funcs",Gt(n=e)&&(Kt(o)||Xt(o))&&o in n&&(r=tt(e.funcs));let i={port:e.port,verifyClient:function(t,e){u(Jt(Nr(t.req.url),"token","")).then((function(t){e(t)}))},perMessageDeflate:{zlibDeflateOptions:{chunkSize:1024,memLevel:7,level:3},zlibInflateOptions:{chunkSize:10240},clientNoContextTakeover:!0,serverNoContextTakeover:!0,serverMaxWindowBits:10,concurrencyLimit:10,threshold:1024}},c=new t.WebSocketServer(i),a=[];c.on("connection",(function(n,o){async function i(o){let i=Jt(o,"token","");if(await u(i)){let t=Jt(o,"func",""),n=Jt(o,"input");if("getFuncs"===t)Tr(e.filterFuncs)&&(r=await e.filterFuncs(i,r)),o.output={sys:"sys",funcs:r};else if(function(t,e){function r(t){return Br(t)?t:[t]}if(Mr(t))return!1;if(0===(t=r(t)).length)return!1;if(Mr(t))return!1;if(0===(e=r(e)).length)return!1;for(let r=0;r<t.length;r++)for(let u=0;u<e.length;u++)if(n=t[r],o=e[u],yr(n,o))return!0;var n,o;return!1}(r,t)){let r=await e.funcs[t](n);o.output=r}else o.output={err:`can not find: ${t}`}}else o.output={err:`can not authenticate token: ${i}`};delete o.input,n.readyState===t.OPEN&&n.send(JSON.stringify(o),(function(t){t&&console.log(`Server: send output error: ${t}`)}))}a.push(n),Tr(e.onClientChange)&&e.onClientChange(a,e),n.on("message",(function(t,e){i(function(t){if(!Kt(t))return{};let e={};try{e=JSON.parse(t)}catch(t){e={}}return e}(t=Buffer.from(t).toString("utf8")))})),n.on("close",(function(t){a=a.filter((function(t){return t!==n})),Tr(e.onClientChange)&&e.onClientChange(a,e)}))})),console.log(`Server running at: ws://localhost:${e.port}`)}}));
//# sourceMappingURL=w-comor-websocket-server.umd.js.map
