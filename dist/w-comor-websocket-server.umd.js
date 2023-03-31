/*!
 * w-comor-websocket-server v1.0.36
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("ws")):"function"==typeof define&&define.amd?define(["ws"],r):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-comor-websocket-server"]=r(t.ws)}(this,(function(t){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n},n="object"==typeof r&&r&&r.Object===Object&&r,o=n,u="object"==typeof self&&self&&self.Object===Object&&self,i=o||u||Function("return this")(),a=i.Symbol,c=a,f=Object.prototype,l=f.hasOwnProperty,s=f.toString,v=c?c.toStringTag:void 0;var p=function(t){var r=l.call(t,v),e=t[v];try{t[v]=void 0;var n=!0}catch(t){}var o=s.call(t);return n&&(r?t[v]=e:delete t[v]),o},h=Object.prototype.toString;var y=p,b=function(t){return h.call(t)},d=a?a.toStringTag:void 0;var _=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?y(t):b(t)};var g=function(t){return null!=t&&"object"==typeof t},j=_,O=g;var w=function(t){return O(t)&&"[object Arguments]"==j(t)},m=g,S=Object.prototype,A=S.hasOwnProperty,z=S.propertyIsEnumerable,x=w(function(){return arguments}())?w:function(t){return m(t)&&A.call(t,"callee")&&!z.call(t,"callee")},k=x,E=Array.isArray,P={};var C=function(){return!1};!function(t,r){var e=i,n=C,o=r&&!r.nodeType&&r,u=o&&t&&!t.nodeType&&t,a=u&&u.exports===o?e.Buffer:void 0,c=(a?a.isBuffer:void 0)||n;t.exports=c}({get exports(){return P},set exports(t){P=t}},P);var T=/^(?:0|[1-9]\d*)$/;var F=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&T.test(t))&&t>-1&&t%1==0&&t<r};var $=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},N=_,B=$,I=g,M={};M["[object Float32Array]"]=M["[object Float64Array]"]=M["[object Int8Array]"]=M["[object Int16Array]"]=M["[object Int32Array]"]=M["[object Uint8Array]"]=M["[object Uint8ClampedArray]"]=M["[object Uint16Array]"]=M["[object Uint32Array]"]=!0,M["[object Arguments]"]=M["[object Array]"]=M["[object ArrayBuffer]"]=M["[object Boolean]"]=M["[object DataView]"]=M["[object Date]"]=M["[object Error]"]=M["[object Function]"]=M["[object Map]"]=M["[object Number]"]=M["[object Object]"]=M["[object RegExp]"]=M["[object Set]"]=M["[object String]"]=M["[object WeakMap]"]=!1;var D=function(t){return I(t)&&B(t.length)&&!!M[N(t)]};var R=function(t){return function(r){return t(r)}},L={};!function(t,r){var e=n,o=r&&!r.nodeType&&r,u=o&&t&&!t.nodeType&&t,i=u&&u.exports===o&&e.process,a=function(){try{var t=u&&u.require&&u.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=a}({get exports(){return L},set exports(t){L=t}},L);var U=D,W=R,q=L&&L.isTypedArray,V=q?W(q):U,J=e,G=k,H=E,K=P,Q=F,X=V,Y=Object.prototype.hasOwnProperty;var Z=function(t,r){var e=H(t),n=!e&&G(t),o=!e&&!n&&K(t),u=!e&&!n&&!o&&X(t),i=e||n||o||u,a=i?J(t.length,String):[],c=a.length;for(var f in t)!r&&!Y.call(t,f)||i&&("length"==f||o&&("offset"==f||"parent"==f)||u&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Q(f,c))||a.push(f);return a},tt=Object.prototype;var rt=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||tt)};var et=function(t,r){return function(e){return t(r(e))}}(Object.keys,Object),nt=rt,ot=et,ut=Object.prototype.hasOwnProperty;var it=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},at=_,ct=it;var ft=function(t){if(!ct(t))return!1;var r=at(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},lt=ft,st=$;var vt=function(t){return null!=t&&st(t.length)&&!lt(t)},pt=Z,ht=function(t){if(!nt(t))return ot(t);var r=[];for(var e in Object(t))ut.call(t,e)&&"constructor"!=e&&r.push(e);return r},yt=vt;var bt=function(t){return yt(t)?pt(t):ht(t)},dt=_,_t=g;var gt=function(t){return"symbol"==typeof t||_t(t)&&"[object Symbol]"==dt(t)},jt=E,Ot=gt,wt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,mt=/^\w*$/;var St,At=function(t,r){if(jt(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!Ot(t))||(mt.test(t)||!wt.test(t)||null!=r&&t in Object(r))},zt=i["__core-js_shared__"],xt=(St=/[^.]+$/.exec(zt&&zt.keys&&zt.keys.IE_PROTO||""))?"Symbol(src)_1."+St:"";var kt=function(t){return!!xt&&xt in t},Et=Function.prototype.toString;var Pt=function(t){if(null!=t){try{return Et.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Ct=ft,Tt=kt,Ft=it,$t=Pt,Nt=/^\[object .+?Constructor\]$/,Bt=Function.prototype,It=Object.prototype,Mt=Bt.toString,Dt=It.hasOwnProperty,Rt=RegExp("^"+Mt.call(Dt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Lt=function(t){return!(!Ft(t)||Tt(t))&&(Ct(t)?Rt:Nt).test($t(t))},Ut=function(t,r){return null==t?void 0:t[r]};var Wt=function(t,r){var e=Ut(t,r);return Lt(e)?e:void 0},qt=Wt(Object,"create"),Vt=qt;var Jt=function(){this.__data__=Vt?Vt(null):{},this.size=0};var Gt=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},Ht=qt,Kt=Object.prototype.hasOwnProperty;var Qt=function(t){var r=this.__data__;if(Ht){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return Kt.call(r,t)?r[t]:void 0},Xt=qt,Yt=Object.prototype.hasOwnProperty;var Zt=qt;var tr=Jt,rr=Gt,er=Qt,nr=function(t){var r=this.__data__;return Xt?void 0!==r[t]:Yt.call(r,t)},or=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=Zt&&void 0===r?"__lodash_hash_undefined__":r,this};function ur(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}ur.prototype.clear=tr,ur.prototype.delete=rr,ur.prototype.get=er,ur.prototype.has=nr,ur.prototype.set=or;var ir=ur;var ar=function(){this.__data__=[],this.size=0};var cr=function(t,r){return t===r||t!=t&&r!=r},fr=cr;var lr=function(t,r){for(var e=t.length;e--;)if(fr(t[e][0],r))return e;return-1},sr=lr,vr=Array.prototype.splice;var pr=lr;var hr=lr;var yr=lr;var br=ar,dr=function(t){var r=this.__data__,e=sr(r,t);return!(e<0)&&(e==r.length-1?r.pop():vr.call(r,e,1),--this.size,!0)},_r=function(t){var r=this.__data__,e=pr(r,t);return e<0?void 0:r[e][1]},gr=function(t){return hr(this.__data__,t)>-1},jr=function(t,r){var e=this.__data__,n=yr(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function Or(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Or.prototype.clear=br,Or.prototype.delete=dr,Or.prototype.get=_r,Or.prototype.has=gr,Or.prototype.set=jr;var wr=Or,mr=Wt(i,"Map"),Sr=ir,Ar=wr,zr=mr;var xr=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var kr=function(t,r){var e=t.__data__;return xr(r)?e["string"==typeof r?"string":"hash"]:e.map},Er=kr;var Pr=kr;var Cr=kr;var Tr=kr;var Fr=function(){this.size=0,this.__data__={hash:new Sr,map:new(zr||Ar),string:new Sr}},$r=function(t){var r=Er(this,t).delete(t);return this.size-=r?1:0,r},Nr=function(t){return Pr(this,t).get(t)},Br=function(t){return Cr(this,t).has(t)},Ir=function(t,r){var e=Tr(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function Mr(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Mr.prototype.clear=Fr,Mr.prototype.delete=$r,Mr.prototype.get=Nr,Mr.prototype.has=Br,Mr.prototype.set=Ir;var Dr=Mr,Rr=Dr;function Lr(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],u=e.cache;if(u.has(o))return u.get(o);var i=t.apply(this,n);return e.cache=u.set(o,i)||u,i};return e.cache=new(Lr.Cache||Rr),e}Lr.Cache=Rr;var Ur=Lr;var Wr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qr=/\\(\\)?/g,Vr=function(t){var r=Ur(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(Wr,(function(t,e,n,o){r.push(n?o.replace(qr,"$1"):e||t)})),r}));var Jr=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},Gr=Jr,Hr=E,Kr=gt,Qr=a?a.prototype:void 0,Xr=Qr?Qr.toString:void 0;var Yr=function t(r){if("string"==typeof r)return r;if(Hr(r))return Gr(r,t)+"";if(Kr(r))return Xr?Xr.call(r):"";var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e},Zr=Yr;var te=function(t){return null==t?"":Zr(t)},re=E,ee=At,ne=Vr,oe=te;var ue=function(t,r){return re(t)?t:ee(t,r)?[t]:ne(oe(t))},ie=gt;var ae=function(t){if("string"==typeof t||ie(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ce=ue,fe=ae;var le=function(t,r){for(var e=0,n=(r=ce(r,t)).length;null!=t&&e<n;)t=t[fe(r[e++])];return e&&e==n?t:void 0},se=le;var ve=function(t,r,e){var n=null==t?void 0:se(t,r);return void 0===n?e:n};function pe(t){return"[object Object]"===Object.prototype.toString.call(t)}function he(t){return"[object String]"===Object.prototype.toString.call(t)}function ye(t){return!(!he(t)||""===t)}function be(t){let r=!1;return ye(t)?r=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(r=!0),r}var de=function(t,r,e){var n=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(e=e>o?o:e)<0&&(e+=o),o=r>e?0:e-r>>>0,r>>>=0;for(var u=Array(o);++n<o;)u[n]=t[n+r];return u};var _e=function(t,r,e){var n=t.length;return e=void 0===e?n:e,!r&&e>=n?t:de(t,r,e)},ge=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var je=function(t){return ge.test(t)},Oe=cr,we=vt,me=F,Se=it;var Ae=function(t,r,e){if(!Se(e))return!1;var n=typeof r;return!!("number"==n?we(e)&&me(r,e.length):"string"==n&&r in e)&&Oe(e[r],t)},ze=_,xe=g;var ke=function(t){return xe(t)&&"[object RegExp]"==ze(t)},Ee=R,Pe=L&&L.isRegExp,Ce=Pe?Ee(Pe):ke;var Te=function(t){return t.split("")},Fe="\\ud800-\\udfff",$e="["+Fe+"]",Ne="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Be="\\ud83c[\\udffb-\\udfff]",Ie="[^"+Fe+"]",Me="(?:\\ud83c[\\udde6-\\uddff]){2}",De="[\\ud800-\\udbff][\\udc00-\\udfff]",Re="(?:"+Ne+"|"+Be+")"+"?",Le="[\\ufe0e\\ufe0f]?",Ue=Le+Re+("(?:\\u200d(?:"+[Ie,Me,De].join("|")+")"+Le+Re+")*"),We="(?:"+[Ie+Ne+"?",Ne,Me,De,$e].join("|")+")",qe=RegExp(Be+"(?="+Be+")|"+We+Ue,"g");var Ve=Te,Je=je,Ge=function(t){return t.match(qe)||[]};var He=Yr,Ke=_e,Qe=je,Xe=Ae,Ye=Ce,Ze=function(t){return Je(t)?Ge(t):Ve(t)},tn=te;var rn=function(t,r,e){return e&&"number"!=typeof e&&Xe(t,r,e)&&(r=e=void 0),(e=void 0===e?4294967295:e>>>0)?(t=tn(t))&&("string"==typeof r||null!=r&&!Ye(r))&&!(r=He(r))&&Qe(t)?Ke(Ze(t),0,e):t.split(r,e):[]},en=wr;var nn=wr,on=mr,un=Dr;var an=wr,cn=function(){this.__data__=new en,this.size=0},fn=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e},ln=function(t){return this.__data__.get(t)},sn=function(t){return this.__data__.has(t)},vn=function(t,r){var e=this.__data__;if(e instanceof nn){var n=e.__data__;if(!on||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new un(n)}return e.set(t,r),this.size=e.size,this};function pn(t){var r=this.__data__=new an(t);this.size=r.size}pn.prototype.clear=cn,pn.prototype.delete=fn,pn.prototype.get=ln,pn.prototype.has=sn,pn.prototype.set=vn;var hn=pn;var yn=Dr,bn=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},dn=function(t){return this.__data__.has(t)};function _n(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new yn;++r<e;)this.add(t[r])}_n.prototype.add=_n.prototype.push=bn,_n.prototype.has=dn;var gn=_n,jn=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1},On=function(t,r){return t.has(r)};var wn=function(t,r,e,n,o,u){var i=1&e,a=t.length,c=r.length;if(a!=c&&!(i&&c>a))return!1;var f=u.get(t),l=u.get(r);if(f&&l)return f==r&&l==t;var s=-1,v=!0,p=2&e?new gn:void 0;for(u.set(t,r),u.set(r,t);++s<a;){var h=t[s],y=r[s];if(n)var b=i?n(y,h,s,r,t,u):n(h,y,s,t,r,u);if(void 0!==b){if(b)continue;v=!1;break}if(p){if(!jn(r,(function(t,r){if(!On(p,r)&&(h===t||o(h,t,e,n,u)))return p.push(r)}))){v=!1;break}}else if(h!==y&&!o(h,y,e,n,u)){v=!1;break}}return u.delete(t),u.delete(r),v};var mn=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e};var Sn=i.Uint8Array,An=cr,zn=wn,xn=mn,kn=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e},En=a?a.prototype:void 0,Pn=En?En.valueOf:void 0;var Cn=function(t,r,e,n,o,u,i){switch(e){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!u(new Sn(t),new Sn(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return An(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var a=xn;case"[object Set]":var c=1&n;if(a||(a=kn),t.size!=r.size&&!c)return!1;var f=i.get(t);if(f)return f==r;n|=2,i.set(t,r);var l=zn(a(t),a(r),n,o,u,i);return i.delete(t),l;case"[object Symbol]":if(Pn)return Pn.call(t)==Pn.call(r)}return!1};var Tn=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t},Fn=E;var $n=function(t,r,e){var n=r(t);return Fn(t)?n:Tn(n,e(t))};var Nn=function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,u=[];++e<n;){var i=t[e];r(i,e,t)&&(u[o++]=i)}return u},Bn=function(){return[]},In=Object.prototype.propertyIsEnumerable,Mn=Object.getOwnPropertySymbols,Dn=$n,Rn=Mn?function(t){return null==t?[]:(t=Object(t),Nn(Mn(t),(function(r){return In.call(t,r)})))}:Bn,Ln=bt;var Un=function(t){return Dn(t,Ln,Rn)},Wn=Object.prototype.hasOwnProperty;var qn=function(t,r,e,n,o,u){var i=1&e,a=Un(t),c=a.length;if(c!=Un(r).length&&!i)return!1;for(var f=c;f--;){var l=a[f];if(!(i?l in r:Wn.call(r,l)))return!1}var s=u.get(t),v=u.get(r);if(s&&v)return s==r&&v==t;var p=!0;u.set(t,r),u.set(r,t);for(var h=i;++f<c;){var y=t[l=a[f]],b=r[l];if(n)var d=i?n(b,y,l,r,t,u):n(y,b,l,t,r,u);if(!(void 0===d?y===b||o(y,b,e,n,u):d)){p=!1;break}h||(h="constructor"==l)}if(p&&!h){var _=t.constructor,g=r.constructor;_==g||!("constructor"in t)||!("constructor"in r)||"function"==typeof _&&_ instanceof _&&"function"==typeof g&&g instanceof g||(p=!1)}return u.delete(t),u.delete(r),p},Vn=Wt(i,"DataView"),Jn=mr,Gn=Wt(i,"Promise"),Hn=Wt(i,"Set"),Kn=Wt(i,"WeakMap"),Qn=_,Xn=Pt,Yn="[object Map]",Zn="[object Promise]",to="[object Set]",ro="[object WeakMap]",eo="[object DataView]",no=Xn(Vn),oo=Xn(Jn),uo=Xn(Gn),io=Xn(Hn),ao=Xn(Kn),co=Qn;(Vn&&co(new Vn(new ArrayBuffer(1)))!=eo||Jn&&co(new Jn)!=Yn||Gn&&co(Gn.resolve())!=Zn||Hn&&co(new Hn)!=to||Kn&&co(new Kn)!=ro)&&(co=function(t){var r=Qn(t),e="[object Object]"==r?t.constructor:void 0,n=e?Xn(e):"";if(n)switch(n){case no:return eo;case oo:return Yn;case uo:return Zn;case io:return to;case ao:return ro}return r});var fo=hn,lo=wn,so=Cn,vo=qn,po=co,ho=E,yo=P,bo=V,_o="[object Arguments]",go="[object Array]",jo="[object Object]",Oo=Object.prototype.hasOwnProperty;var wo=function(t,r,e,n,o,u){var i=ho(t),a=ho(r),c=i?go:po(t),f=a?go:po(r),l=(c=c==_o?jo:c)==jo,s=(f=f==_o?jo:f)==jo,v=c==f;if(v&&yo(t)){if(!yo(r))return!1;i=!0,l=!1}if(v&&!l)return u||(u=new fo),i||bo(t)?lo(t,r,e,n,o,u):so(t,r,c,e,n,o,u);if(!(1&e)){var p=l&&Oo.call(t,"__wrapped__"),h=s&&Oo.call(r,"__wrapped__");if(p||h){var y=p?t.value():t,b=h?r.value():r;return u||(u=new fo),o(y,b,e,n,u)}}return!!v&&(u||(u=new fo),vo(t,r,e,n,o,u))},mo=g;var So=function t(r,e,n,o,u){return r===e||(null==r||null==e||!mo(r)&&!mo(e)?r!=r&&e!=e:wo(r,e,n,o,t,u))},Ao=hn,zo=So;var xo=it;var ko=function(t){return t==t&&!xo(t)},Eo=ko,Po=bt;var Co=function(t,r){return function(e){return null!=e&&(e[t]===r&&(void 0!==r||t in Object(e)))}},To=function(t,r,e,n){var o=e.length,u=o,i=!n;if(null==t)return!u;for(t=Object(t);o--;){var a=e[o];if(i&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<u;){var c=(a=e[o])[0],f=t[c],l=a[1];if(i&&a[2]){if(void 0===f&&!(c in t))return!1}else{var s=new Ao;if(n)var v=n(f,l,c,t,r,s);if(!(void 0===v?zo(l,f,3,n,s):v))return!1}}return!0},Fo=function(t){for(var r=Po(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,Eo(o)]}return r},$o=Co;var No=ue,Bo=k,Io=E,Mo=F,Do=$,Ro=ae;var Lo=function(t,r){return null!=t&&r in Object(t)},Uo=function(t,r,e){for(var n=-1,o=(r=No(r,t)).length,u=!1;++n<o;){var i=Ro(r[n]);if(!(u=null!=t&&e(t,i)))break;t=t[i]}return u||++n!=o?u:!!(o=null==t?0:t.length)&&Do(o)&&Mo(i,o)&&(Io(t)||Bo(t))};var Wo=So,qo=ve,Vo=function(t,r){return null!=t&&Uo(t,r,Lo)},Jo=At,Go=ko,Ho=Co,Ko=ae;var Qo=le;var Xo=function(t){return function(r){return null==r?void 0:r[t]}},Yo=function(t){return function(r){return Qo(r,t)}},Zo=At,tu=ae;var ru=function(t){var r=Fo(t);return 1==r.length&&r[0][2]?$o(r[0][0],r[0][1]):function(e){return e===t||To(e,t,r)}},eu=function(t,r){return Jo(t)&&Go(r)?Ho(Ko(t),r):function(e){var n=qo(e,t);return void 0===n&&n===r?Vo(e,t):Wo(r,n,3)}},nu=function(t){return t},ou=E,uu=function(t){return Zo(t)?Xo(tu(t)):Yo(t)};var iu=function(t){return"function"==typeof t?t:null==t?nu:"object"==typeof t?ou(t)?eu(t[0],t[1]):ru(t):uu(t)};var au=function(t){return function(r,e,n){for(var o=-1,u=Object(r),i=n(r),a=i.length;a--;){var c=i[t?a:++o];if(!1===e(u[c],c,u))break}return r}}(),cu=bt;var fu=vt;var lu=function(t,r){return function(e,n){if(null==e)return e;if(!fu(e))return t(e,n);for(var o=e.length,u=r?o:-1,i=Object(e);(r?u--:++u<o)&&!1!==n(i[u],u,i););return e}}((function(t,r){return t&&au(t,r,cu)})),su=vt;var vu=Jr,pu=iu,hu=function(t,r){var e=-1,n=su(t)?Array(t.length):[];return lu(t,(function(t,o,u){n[++e]=r(t,o,u)})),n},yu=E;var bu=function(t,r){return(yu(t)?vu:hu)(t,pu(r))};var du=function(t){for(var r=-1,e=null==t?0:t.length,n={};++r<e;){var o=t[r];n[o[0]]=o[1]}return n};function _u(t){let r=Object.prototype.toString.call(t);return"[object Function]"===r||"[object AsyncFunction]"===r}var gu=So;var ju=function(t,r){return gu(t,r)};function Ou(t){return"[object Array]"===Object.prototype.toString.call(t)}function wu(t){return!!function(t){return"[object Undefined]"===Object.prototype.toString.call(t)}(t)||(!!function(t){return"[object Null]"===Object.prototype.toString.call(t)}(t)||(!!function(t){if(pe(t)){for(let r in t)return!1;return!0}return!1}(t)||(!!function(t){return!(!he(t)||""!==t)}(t)||!!function(t){return!!Ou(t)&&0===t.length}(t))))}return function(r){r.port||(r.port=8080);let e=[];var n,o;function u(t){let e=function(){let t,r,e=new Promise((function(){t=arguments[0],r=arguments[1]}));return e.resolve=t,e.reject=r,e}();return _u(r.authenticate)?r.authenticate(t).then((function(t){e.resolve(t)})):e.resolve(!0),e}o="funcs",pe(n=r)&&(ye(o)||be(o))&&o in n&&(e=bt(r.funcs));let i={port:r.port,verifyClient:function(t,r){let e=function(t){if(!ye(t))return{};if(t=rn(t,"?"),!ye(t=ve(t,"[1]")))return{};let r=rn(t,"&");return r=bu(r,(function(t){return rn(t,"=")})),r=du(r),r}(t.req.url);u(ve(e,"token","")).then((function(t){r(t)}))},perMessageDeflate:{zlibDeflateOptions:{chunkSize:1024,memLevel:7,level:3},zlibInflateOptions:{chunkSize:10240},clientNoContextTakeover:!0,serverNoContextTakeover:!0,serverMaxWindowBits:10,concurrencyLimit:10,threshold:1024}},a=new t.WebSocketServer(i),c=[];a.on("connection",(function(n,o){async function i(o){let i=ve(o,"token","");if(await u(i)){let t=ve(o,"func",""),n=ve(o,"input");if("getFuncs"===t)_u(r.filterFuncs)&&(e=await r.filterFuncs(i,e)),o.output={sys:"sys",funcs:e};else if(function(t,r){function e(t){return Ou(t)?t:[t]}if(wu(t))return!1;if(0===(t=e(t)).length)return!1;if(wu(t))return!1;if(0===(r=e(r)).length)return!1;for(let e=0;e<t.length;e++)for(let n=0;n<r.length;n++)if(ju(t[e],r[n]))return!0;return!1}(e,t)){let e=await r.funcs[t](n);o.output=e}else o.output={err:`can not find: ${t}`}}else o.output={err:`can not authenticate token: ${i}`};delete o.input,n.readyState===t.OPEN&&n.send(JSON.stringify(o),(function(t){t&&console.log(`Server: send output error: ${t}`)}))}c.push(n),_u(r.onClientChange)&&r.onClientChange(c,r),n.on("message",(function(t,r){i(function(t){if(!ye(t))return{};let r={};try{r=JSON.parse(t)}catch(t){r={}}return r}(t=Buffer.from(t).toString("utf8")))})),n.on("close",(function(t){c=c.filter((function(t){return t!==n})),_u(r.onClientChange)&&r.onClientChange(c,r)}))})),console.log(`Server running at: ws://localhost:${r.port}`)}}));
//# sourceMappingURL=w-comor-websocket-server.umd.js.map
