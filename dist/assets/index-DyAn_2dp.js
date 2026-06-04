(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function f(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(d){if(d.ep)return;d.ep=!0;const h=f(d);fetch(d.href,h)}})();var qc={exports:{}},Hn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function Z0(){if(bm)return Hn;bm=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function f(o,d,h){var p=null;if(h!==void 0&&(p=""+h),d.key!==void 0&&(p=""+d.key),"key"in d){h={};for(var S in d)S!=="key"&&(h[S]=d[S])}else h=d;return d=h.ref,{$$typeof:s,type:o,key:p,ref:d!==void 0?d:null,props:h}}return Hn.Fragment=u,Hn.jsx=f,Hn.jsxs=f,Hn}var Sm;function K0(){return Sm||(Sm=1,qc.exports=Z0()),qc.exports}var i=K0(),Yc={exports:{}},P={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function J0(){if(jm)return P;jm=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),B=Symbol.iterator;function Y(b){return b===null||typeof b!="object"?null:(b=B&&b[B]||b["@@iterator"],typeof b=="function"?b:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,H={};function U(b,D,q){this.props=b,this.context=D,this.refs=H,this.updater=q||Q}U.prototype.isReactComponent={},U.prototype.setState=function(b,D){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,D,"setState")},U.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function J(){}J.prototype=U.prototype;function O(b,D,q){this.props=b,this.context=D,this.refs=H,this.updater=q||Q}var Z=O.prototype=new J;Z.constructor=O,G(Z,U.prototype),Z.isPureReactComponent=!0;var se=Array.isArray;function pe(){}var I={H:null,A:null,T:null,S:null},we=Object.prototype.hasOwnProperty;function qe(b,D,q){var V=q.ref;return{$$typeof:s,type:b,key:D,ref:V!==void 0?V:null,props:q}}function st(b,D){return qe(b.type,D,b.props)}function Fe(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function de(b){var D={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(q){return D[q]})}var Ht=/\/+/g;function St(b,D){return typeof b=="object"&&b!==null&&b.key!=null?de(""+b.key):D.toString(36)}function Ue(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(pe,pe):(b.status="pending",b.then(function(D){b.status==="pending"&&(b.status="fulfilled",b.value=D)},function(D){b.status==="pending"&&(b.status="rejected",b.reason=D)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function C(b,D,q,V,ee){var ne=typeof b;(ne==="undefined"||ne==="boolean")&&(b=null);var ge=!1;if(b===null)ge=!0;else switch(ne){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(b.$$typeof){case s:case u:ge=!0;break;case w:return ge=b._init,C(ge(b._payload),D,q,V,ee)}}if(ge)return ee=ee(b),ge=V===""?"."+St(b,0):V,se(ee)?(q="",ge!=null&&(q=ge.replace(Ht,"$&/")+"/"),C(ee,D,q,"",function(Ql){return Ql})):ee!=null&&(Fe(ee)&&(ee=st(ee,q+(ee.key==null||b&&b.key===ee.key?"":(""+ee.key).replace(Ht,"$&/")+"/")+ge)),D.push(ee)),1;ge=0;var Ie=V===""?".":V+":";if(se(b))for(var Re=0;Re<b.length;Re++)V=b[Re],ne=Ie+St(V,Re),ge+=C(V,D,q,ne,ee);else if(Re=Y(b),typeof Re=="function")for(b=Re.call(b),Re=0;!(V=b.next()).done;)V=V.value,ne=Ie+St(V,Re++),ge+=C(V,D,q,ne,ee);else if(ne==="object"){if(typeof b.then=="function")return C(Ue(b),D,q,V,ee);throw D=String(b),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return ge}function L(b,D,q){if(b==null)return b;var V=[],ee=0;return C(b,V,"","",function(ne){return D.call(q,ne,ee++)}),V}function F(b){if(b._status===-1){var D=b._result;D=D(),D.then(function(q){(b._status===0||b._status===-1)&&(b._status=1,b._result=q)},function(q){(b._status===0||b._status===-1)&&(b._status=2,b._result=q)}),b._status===-1&&(b._status=0,b._result=D)}if(b._status===1)return b._result.default;throw b._result}var be=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},Ee={map:L,forEach:function(b,D,q){L(b,function(){D.apply(this,arguments)},q)},count:function(b){var D=0;return L(b,function(){D++}),D},toArray:function(b){return L(b,function(D){return D})||[]},only:function(b){if(!Fe(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return P.Activity=A,P.Children=Ee,P.Component=U,P.Fragment=f,P.Profiler=d,P.PureComponent=O,P.StrictMode=o,P.Suspense=x,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,P.__COMPILER_RUNTIME={__proto__:null,c:function(b){return I.H.useMemoCache(b)}},P.cache=function(b){return function(){return b.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(b,D,q){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var V=G({},b.props),ee=b.key;if(D!=null)for(ne in D.key!==void 0&&(ee=""+D.key),D)!we.call(D,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&D.ref===void 0||(V[ne]=D[ne]);var ne=arguments.length-2;if(ne===1)V.children=q;else if(1<ne){for(var ge=Array(ne),Ie=0;Ie<ne;Ie++)ge[Ie]=arguments[Ie+2];V.children=ge}return qe(b.type,ee,V)},P.createContext=function(b){return b={$$typeof:p,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:h,_context:b},b},P.createElement=function(b,D,q){var V,ee={},ne=null;if(D!=null)for(V in D.key!==void 0&&(ne=""+D.key),D)we.call(D,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ee[V]=D[V]);var ge=arguments.length-2;if(ge===1)ee.children=q;else if(1<ge){for(var Ie=Array(ge),Re=0;Re<ge;Re++)Ie[Re]=arguments[Re+2];ee.children=Ie}if(b&&b.defaultProps)for(V in ge=b.defaultProps,ge)ee[V]===void 0&&(ee[V]=ge[V]);return qe(b,ne,ee)},P.createRef=function(){return{current:null}},P.forwardRef=function(b){return{$$typeof:S,render:b}},P.isValidElement=Fe,P.lazy=function(b){return{$$typeof:w,_payload:{_status:-1,_result:b},_init:F}},P.memo=function(b,D){return{$$typeof:g,type:b,compare:D===void 0?null:D}},P.startTransition=function(b){var D=I.T,q={};I.T=q;try{var V=b(),ee=I.S;ee!==null&&ee(q,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(pe,be)}catch(ne){be(ne)}finally{D!==null&&q.types!==null&&(D.types=q.types),I.T=D}},P.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},P.use=function(b){return I.H.use(b)},P.useActionState=function(b,D,q){return I.H.useActionState(b,D,q)},P.useCallback=function(b,D){return I.H.useCallback(b,D)},P.useContext=function(b){return I.H.useContext(b)},P.useDebugValue=function(){},P.useDeferredValue=function(b,D){return I.H.useDeferredValue(b,D)},P.useEffect=function(b,D){return I.H.useEffect(b,D)},P.useEffectEvent=function(b){return I.H.useEffectEvent(b)},P.useId=function(){return I.H.useId()},P.useImperativeHandle=function(b,D,q){return I.H.useImperativeHandle(b,D,q)},P.useInsertionEffect=function(b,D){return I.H.useInsertionEffect(b,D)},P.useLayoutEffect=function(b,D){return I.H.useLayoutEffect(b,D)},P.useMemo=function(b,D){return I.H.useMemo(b,D)},P.useOptimistic=function(b,D){return I.H.useOptimistic(b,D)},P.useReducer=function(b,D,q){return I.H.useReducer(b,D,q)},P.useRef=function(b){return I.H.useRef(b)},P.useState=function(b){return I.H.useState(b)},P.useSyncExternalStore=function(b,D,q){return I.H.useSyncExternalStore(b,D,q)},P.useTransition=function(){return I.H.useTransition()},P.version="19.2.6",P}var Nm;function to(){return Nm||(Nm=1,Yc.exports=J0()),Yc.exports}var z=to(),Xc={exports:{}},Gn={},Qc={exports:{}},Vc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function $0(){return Em||(Em=1,(function(s){function u(C,L){var F=C.length;C.push(L);e:for(;0<F;){var be=F-1>>>1,Ee=C[be];if(0<d(Ee,L))C[be]=L,C[F]=Ee,F=be;else break e}}function f(C){return C.length===0?null:C[0]}function o(C){if(C.length===0)return null;var L=C[0],F=C.pop();if(F!==L){C[0]=F;e:for(var be=0,Ee=C.length,b=Ee>>>1;be<b;){var D=2*(be+1)-1,q=C[D],V=D+1,ee=C[V];if(0>d(q,F))V<Ee&&0>d(ee,q)?(C[be]=ee,C[V]=F,be=V):(C[be]=q,C[D]=F,be=D);else if(V<Ee&&0>d(ee,F))C[be]=ee,C[V]=F,be=V;else break e}}return L}function d(C,L){var F=C.sortIndex-L.sortIndex;return F!==0?F:C.id-L.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var p=Date,S=p.now();s.unstable_now=function(){return p.now()-S}}var x=[],g=[],w=1,A=null,B=3,Y=!1,Q=!1,G=!1,H=!1,U=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function Z(C){for(var L=f(g);L!==null;){if(L.callback===null)o(g);else if(L.startTime<=C)o(g),L.sortIndex=L.expirationTime,u(x,L);else break;L=f(g)}}function se(C){if(G=!1,Z(C),!Q)if(f(x)!==null)Q=!0,pe||(pe=!0,de());else{var L=f(g);L!==null&&Ue(se,L.startTime-C)}}var pe=!1,I=-1,we=5,qe=-1;function st(){return H?!0:!(s.unstable_now()-qe<we)}function Fe(){if(H=!1,pe){var C=s.unstable_now();qe=C;var L=!0;try{e:{Q=!1,G&&(G=!1,J(I),I=-1),Y=!0;var F=B;try{t:{for(Z(C),A=f(x);A!==null&&!(A.expirationTime>C&&st());){var be=A.callback;if(typeof be=="function"){A.callback=null,B=A.priorityLevel;var Ee=be(A.expirationTime<=C);if(C=s.unstable_now(),typeof Ee=="function"){A.callback=Ee,Z(C),L=!0;break t}A===f(x)&&o(x),Z(C)}else o(x);A=f(x)}if(A!==null)L=!0;else{var b=f(g);b!==null&&Ue(se,b.startTime-C),L=!1}}break e}finally{A=null,B=F,Y=!1}L=void 0}}finally{L?de():pe=!1}}}var de;if(typeof O=="function")de=function(){O(Fe)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,St=Ht.port2;Ht.port1.onmessage=Fe,de=function(){St.postMessage(null)}}else de=function(){U(Fe,0)};function Ue(C,L){I=U(function(){C(s.unstable_now())},L)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(C){C.callback=null},s.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<C?Math.floor(1e3/C):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_next=function(C){switch(B){case 1:case 2:case 3:var L=3;break;default:L=B}var F=B;B=L;try{return C()}finally{B=F}},s.unstable_requestPaint=function(){H=!0},s.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var F=B;B=C;try{return L()}finally{B=F}},s.unstable_scheduleCallback=function(C,L,F){var be=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?be+F:be):F=be,C){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=F+Ee,C={id:w++,callback:L,priorityLevel:C,startTime:F,expirationTime:Ee,sortIndex:-1},F>be?(C.sortIndex=F,u(g,C),f(x)===null&&C===f(g)&&(G?(J(I),I=-1):G=!0,Ue(se,F-be))):(C.sortIndex=Ee,u(x,C),Q||Y||(Q=!0,pe||(pe=!0,de()))),C},s.unstable_shouldYield=st,s.unstable_wrapCallback=function(C){var L=B;return function(){var F=B;B=L;try{return C.apply(this,arguments)}finally{B=F}}}})(Vc)),Vc}var zm;function W0(){return zm||(zm=1,Qc.exports=$0()),Qc.exports}var Zc={exports:{}},We={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function F0(){if(Am)return We;Am=1;var s=to();function u(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)g+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var o={d:{f,r:function(){throw Error(u(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(x,g,w){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:A==null?null:""+A,children:x,containerInfo:g,implementation:w}}var p=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,We.createPortal=function(x,g){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return h(x,g,null,w)},We.flushSync=function(x){var g=p.T,w=o.p;try{if(p.T=null,o.p=2,x)return x()}finally{p.T=g,o.p=w,o.d.f()}},We.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(x,g))},We.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},We.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var w=g.as,A=S(w,g.crossOrigin),B=typeof g.integrity=="string"?g.integrity:void 0,Y=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;w==="style"?o.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:A,integrity:B,fetchPriority:Y}):w==="script"&&o.d.X(x,{crossOrigin:A,integrity:B,fetchPriority:Y,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},We.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var w=S(g.as,g.crossOrigin);o.d.M(x,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(x)},We.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var w=g.as,A=S(w,g.crossOrigin);o.d.L(x,w,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},We.preloadModule=function(x,g){if(typeof x=="string")if(g){var w=S(g.as,g.crossOrigin);o.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(x)},We.requestFormReset=function(x){o.d.r(x)},We.unstable_batchedUpdates=function(x,g){return x(g)},We.useFormState=function(x,g,w){return p.H.useFormState(x,g,w)},We.useFormStatus=function(){return p.H.useHostTransitionStatus()},We.version="19.2.6",We}var Tm;function I0(){if(Tm)return Zc.exports;Tm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Zc.exports=F0(),Zc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function P0(){if(wm)return Gn;wm=1;var s=W0(),u=to(),f=I0();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(h(e)!==e)throw Error(o(188))}function g(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return x(n),e;if(r===l)return x(n),t;r=r.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=r;else{for(var c=!1,m=n.child;m;){if(m===a){c=!0,a=n,l=r;break}if(m===l){c=!0,l=n,a=r;break}m=m.sibling}if(!c){for(m=r.child;m;){if(m===a){c=!0,a=r,l=n;break}if(m===l){c=!0,l=r,a=n;break}m=m.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,B=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),O=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),qe=Symbol.for("react.activity"),st=Symbol.for("react.memo_cache_sentinel"),Fe=Symbol.iterator;function de(e){return e===null||typeof e!="object"?null:(e=Fe&&e[Fe]||e["@@iterator"],typeof e=="function"?e:null)}var Ht=Symbol.for("react.client.reference");function St(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case U:return"Profiler";case H:return"StrictMode";case se:return"Suspense";case pe:return"SuspenseList";case qe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case O:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:St(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return St(e(t))}catch{}}return null}var Ue=Array.isArray,C=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},be=[],Ee=-1;function b(e){return{current:e}}function D(e){0>Ee||(e.current=be[Ee],be[Ee]=null,Ee--)}function q(e,t){Ee++,be[Ee]=e.current,e.current=t}var V=b(null),ee=b(null),ne=b(null),ge=b(null);function Ie(e,t){switch(q(ne,t),q(ee,e),q(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Xf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Xf(t),e=Qf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(V),q(V,e)}function Re(){D(V),D(ee),D(ne)}function Ql(e){e.memoizedState!==null&&q(ge,e);var t=V.current,a=Qf(t,e.type);t!==a&&(q(ee,e),q(V,a))}function Kn(e){ee.current===e&&(D(V),D(ee)),ge.current===e&&(D(ge),Dn._currentValue=F)}var Nr,yo;function Ha(e){if(Nr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Nr=t&&t[1]||"",yo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nr+e+yo}var Er=!1;function zr(e,t){if(!e||Er)return"";Er=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(M){var T=M}Reflect.construct(e,[],R)}else{try{R.call()}catch(M){T=M}e.call(R.prototype)}}else{try{throw Error()}catch(M){T=M}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(M){if(M&&T&&typeof M.stack=="string")return[M.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),c=r[0],m=r[1];if(c&&m){var v=c.split(`
`),E=m.split(`
`);for(n=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;n<E.length&&!E[n].includes("DetermineComponentFrameRoot");)n++;if(l===v.length||n===E.length)for(l=v.length-1,n=E.length-1;1<=l&&0<=n&&v[l]!==E[n];)n--;for(;1<=l&&0<=n;l--,n--)if(v[l]!==E[n]){if(l!==1||n!==1)do if(l--,n--,0>n||v[l]!==E[n]){var k=`
`+v[l].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=l&&0<=n);break}}}finally{Er=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ha(a):""}function Nh(e,t){switch(e.tag){case 26:case 27:case 5:return Ha(e.type);case 16:return Ha("Lazy");case 13:return e.child!==t&&t!==null?Ha("Suspense Fallback"):Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 15:return zr(e.type,!1);case 11:return zr(e.type.render,!1);case 1:return zr(e.type,!0);case 31:return Ha("Activity");default:return""}}function xo(e){try{var t="",a=null;do t+=Nh(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ar=Object.prototype.hasOwnProperty,Tr=s.unstable_scheduleCallback,wr=s.unstable_cancelCallback,Eh=s.unstable_shouldYield,zh=s.unstable_requestPaint,ct=s.unstable_now,Ah=s.unstable_getCurrentPriorityLevel,bo=s.unstable_ImmediatePriority,So=s.unstable_UserBlockingPriority,Jn=s.unstable_NormalPriority,Th=s.unstable_LowPriority,jo=s.unstable_IdlePriority,wh=s.log,Mh=s.unstable_setDisableYieldValue,Vl=null,ot=null;function ma(e){if(typeof wh=="function"&&Mh(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Vl,e)}catch{}}var ut=Math.clz32?Math.clz32:_h,kh=Math.log,Ch=Math.LN2;function _h(e){return e>>>=0,e===0?32:31-(kh(e)/Ch|0)|0}var $n=256,Wn=262144,Fn=4194304;function Ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function In(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~r,l!==0?n=Ga(l):(c&=m,c!==0?n=Ga(c):a||(a=m&~e,a!==0&&(n=Ga(a))))):(m=l&~r,m!==0?n=Ga(m):c!==0?n=Ga(c):a||(a=l&~e,a!==0&&(n=Ga(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function Zl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Rh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function No(){var e=Fn;return Fn<<=1,(Fn&62914560)===0&&(Fn=4194304),e}function Mr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Kl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Dh(e,t,a,l,n,r){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,E=e.hiddenUpdates;for(a=c&~a;0<a;){var k=31-ut(a),R=1<<k;m[k]=0,v[k]=-1;var T=E[k];if(T!==null)for(E[k]=null,k=0;k<T.length;k++){var M=T[k];M!==null&&(M.lane&=-536870913)}a&=~R}l!==0&&Eo(e,l,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~t))}function Eo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ut(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function zo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ut(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Ao(e,t){var a=t&-t;return a=(a&42)!==0?1:kr(a),(a&(e.suspendedLanes|t))!==0?0:a}function kr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function To(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:mm(e.type))}function wo(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var ha=Math.random().toString(36).slice(2),Ve="__reactFiber$"+ha,et="__reactProps$"+ha,ll="__reactContainer$"+ha,_r="__reactEvents$"+ha,Oh="__reactListeners$"+ha,Uh="__reactHandles$"+ha,Mo="__reactResources$"+ha,Jl="__reactMarker$"+ha;function Rr(e){delete e[Ve],delete e[et],delete e[_r],delete e[Oh],delete e[Uh]}function nl(e){var t=e[Ve];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ll]||a[Ve]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ff(e);e!==null;){if(a=e[Ve])return a;e=Ff(e)}return t}e=a,a=e.parentNode}return null}function il(e){if(e=e[Ve]||e[ll]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function rl(e){var t=e[Mo];return t||(t=e[Mo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Jl]=!0}var ko=new Set,Co={};function La(e,t){sl(e,t),sl(e+"Capture",t)}function sl(e,t){for(Co[e]=t,e=0;e<t.length;e++)ko.add(t[e])}var Bh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_o={},Ro={};function Hh(e){return Ar.call(Ro,e)?!0:Ar.call(_o,e)?!1:Bh.test(e)?Ro[e]=!0:(_o[e]=!0,!1)}function Pn(e,t,a){if(Hh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ei(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Kt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Do(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){if(!e._valueTracker){var t=Do(e)?"checked":"value";e._valueTracker=Gh(e,t,""+e[t])}}function Oo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Do(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Lh=/[\n"\\]/g;function Nt(e){return e.replace(Lh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Or(e,t,a,l,n,r,c,m){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Ur(e,c,jt(t)):a!=null?Ur(e,c,jt(a)):l!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+jt(m):e.removeAttribute("name")}function Uo(e,t,a,l,n,r,c,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Dr(e);return}a=a!=null?""+jt(a):"",t=t!=null?""+jt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Dr(e)}function Ur(e,t,a){t==="number"&&ti(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+jt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Bo(e,t,a){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+jt(a):""}function Ho(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Ue(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=jt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Dr(e)}function ol(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var qh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Go(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||qh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Lo(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Go(e,n,l)}else for(var r in t)t.hasOwnProperty(r)&&Go(e,r,t[r])}function Br(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ai(e){return Xh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Jt(){}var Hr=null;function Gr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ul=null,dl=null;function qo(e){var t=il(e);if(t&&(e=t.stateNode)){var a=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(Or(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[et]||null;if(!n)throw Error(o(90));Or(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Oo(l)}break e;case"textarea":Bo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&cl(e,!!a.multiple,t,!1)}}}var Lr=!1;function Yo(e,t,a){if(Lr)return e(t,a);Lr=!0;try{var l=e(t);return l}finally{if(Lr=!1,(ul!==null||dl!==null)&&(Xi(),ul&&(t=ul,e=dl,dl=ul=null,qo(t),e)))for(t=0;t<e.length;t++)qo(e[t])}}function Wl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[et]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qr=!1;if($t)try{var Fl={};Object.defineProperty(Fl,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Fl,Fl),window.removeEventListener("test",Fl,Fl)}catch{qr=!1}var pa=null,Yr=null,li=null;function Xo(){if(li)return li;var e,t=Yr,a=t.length,l,n="value"in pa?pa.value:pa.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[r-l];l++);return li=n.slice(e,1<l?1-l:void 0)}function ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function Qo(){return!1}function tt(e){function t(a,l,n,r,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ii:Qo,this.isPropagationStopped=Qo,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),t}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=tt(qa),Il=A({},qa,{view:0,detail:0}),Qh=tt(Il),Xr,Qr,Pl,si=A({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pl&&(Pl&&e.type==="mousemove"?(Xr=e.screenX-Pl.screenX,Qr=e.screenY-Pl.screenY):Qr=Xr=0,Pl=e),Xr)},movementY:function(e){return"movementY"in e?e.movementY:Qr}}),Vo=tt(si),Vh=A({},si,{dataTransfer:0}),Zh=tt(Vh),Kh=A({},Il,{relatedTarget:0}),Vr=tt(Kh),Jh=A({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),$h=tt(Jh),Wh=A({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fh=tt(Wh),Ih=A({},qa,{data:0}),Zo=tt(Ih),Ph={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ap(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tp[e])?!!t[e]:!1}function Zr(){return ap}var lp=A({},Il,{key:function(e){if(e.key){var t=Ph[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ep[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zr,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),np=tt(lp),ip=A({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=tt(ip),rp=A({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zr}),sp=tt(rp),cp=A({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),op=tt(cp),up=A({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dp=tt(up),fp=A({},qa,{newState:0,oldState:0}),mp=tt(fp),hp=[9,13,27,32],Kr=$t&&"CompositionEvent"in window,en=null;$t&&"documentMode"in document&&(en=document.documentMode);var pp=$t&&"TextEvent"in window&&!en,Jo=$t&&(!Kr||en&&8<en&&11>=en),$o=" ",Wo=!1;function Fo(e,t){switch(e){case"keyup":return hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Io(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fl=!1;function gp(e,t){switch(e){case"compositionend":return Io(t);case"keypress":return t.which!==32?null:(Wo=!0,$o);case"textInput":return e=t.data,e===$o&&Wo?null:e;default:return null}}function vp(e,t){if(fl)return e==="compositionend"||!Kr&&Fo(e,t)?(e=Xo(),li=Yr=pa=null,fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jo&&t.locale!=="ko"?null:t.data;default:return null}}var yp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yp[e.type]:t==="textarea"}function eu(e,t,a,l){ul?dl?dl.push(l):dl=[l]:ul=l,t=Wi(t,"onChange"),0<t.length&&(a=new ri("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var tn=null,an=null;function xp(e){Bf(e,0)}function ci(e){var t=$l(e);if(Oo(t))return e}function tu(e,t){if(e==="change")return t}var au=!1;if($t){var Jr;if($t){var $r="oninput"in document;if(!$r){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),$r=typeof lu.oninput=="function"}Jr=$r}else Jr=!1;au=Jr&&(!document.documentMode||9<document.documentMode)}function nu(){tn&&(tn.detachEvent("onpropertychange",iu),an=tn=null)}function iu(e){if(e.propertyName==="value"&&ci(an)){var t=[];eu(t,an,e,Gr(e)),Yo(xp,t)}}function bp(e,t,a){e==="focusin"?(nu(),tn=t,an=a,tn.attachEvent("onpropertychange",iu)):e==="focusout"&&nu()}function Sp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(an)}function jp(e,t){if(e==="click")return ci(t)}function Np(e,t){if(e==="input"||e==="change")return ci(t)}function Ep(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:Ep;function ln(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ar.call(t,n)||!dt(e[n],t[n]))return!1}return!0}function ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function su(e,t){var a=ru(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ru(a)}}function cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ou(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ti(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ti(e.document)}return t}function Wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zp=$t&&"documentMode"in document&&11>=document.documentMode,ml=null,Fr=null,nn=null,Ir=!1;function uu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ir||ml==null||ml!==ti(l)||(l=ml,"selectionStart"in l&&Wr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),nn&&ln(nn,l)||(nn=l,l=Wi(Fr,"onSelect"),0<l.length&&(t=new ri("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ml)))}function Ya(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var hl={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},Pr={},du={};$t&&(du=document.createElement("div").style,"AnimationEvent"in window||(delete hl.animationend.animation,delete hl.animationiteration.animation,delete hl.animationstart.animation),"TransitionEvent"in window||delete hl.transitionend.transition);function Xa(e){if(Pr[e])return Pr[e];if(!hl[e])return e;var t=hl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in du)return Pr[e]=t[a];return e}var fu=Xa("animationend"),mu=Xa("animationiteration"),hu=Xa("animationstart"),Ap=Xa("transitionrun"),Tp=Xa("transitionstart"),wp=Xa("transitioncancel"),pu=Xa("transitionend"),gu=new Map,es="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");es.push("scrollEnd");function Rt(e,t){gu.set(e,t),La(t,[e])}var oi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],pl=0,ts=0;function ui(){for(var e=pl,t=ts=pl=0;t<e;){var a=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var n=Et[t];Et[t++]=null;var r=Et[t];if(Et[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}r!==0&&vu(a,n,r)}}function di(e,t,a,l){Et[pl++]=e,Et[pl++]=t,Et[pl++]=a,Et[pl++]=l,ts|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function as(e,t,a,l){return di(e,t,a,l),fi(e)}function Qa(e,t){return di(e,null,null,t),fi(e)}function vu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-ut(a),e=r.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),r):null}function fi(e){if(50<Tn)throw Tn=0,dc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gl={};function Mp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,a,l){return new Mp(e,t,a,l)}function ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,t){var a=e.alternate;return a===null?(a=ft(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function yu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,a,l,n,r){var c=0;if(l=e,typeof e=="function")ls(e)&&(c=1);else if(typeof e=="string")c=D0(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case qe:return e=ft(31,a,t,n),e.elementType=qe,e.lanes=r,e;case G:return Va(a.children,n,r,t);case H:c=8,n|=24;break;case U:return e=ft(12,a,t,n|2),e.elementType=U,e.lanes=r,e;case se:return e=ft(13,a,t,n),e.elementType=se,e.lanes=r,e;case pe:return e=ft(19,a,t,n),e.elementType=pe,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:c=10;break e;case J:c=9;break e;case Z:c=11;break e;case I:c=14;break e;case we:c=16,l=null;break e}c=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=ft(c,a,t,n),t.elementType=e,t.type=l,t.lanes=r,t}function Va(e,t,a,l){return e=ft(7,e,l,t),e.lanes=a,e}function ns(e,t,a){return e=ft(6,e,null,t),e.lanes=a,e}function xu(e){var t=ft(18,null,null,0);return t.stateNode=e,t}function is(e,t,a){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bu=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var a=bu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:xo(t)},bu.set(e,t),t)}return{value:e,source:t,stack:xo(t)}}var vl=[],yl=0,hi=null,rn=0,At=[],Tt=0,ga=null,Gt=1,Lt="";function Ft(e,t){vl[yl++]=rn,vl[yl++]=hi,hi=e,rn=t}function Su(e,t,a){At[Tt++]=Gt,At[Tt++]=Lt,At[Tt++]=ga,ga=e;var l=Gt;e=Lt;var n=32-ut(l)-1;l&=~(1<<n),a+=1;var r=32-ut(t)+n;if(30<r){var c=n-n%5;r=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Gt=1<<32-ut(t)+n|a<<n|l,Lt=r+e}else Gt=1<<r|a<<n|l,Lt=e}function rs(e){e.return!==null&&(Ft(e,1),Su(e,1,0))}function ss(e){for(;e===hi;)hi=vl[--yl],vl[yl]=null,rn=vl[--yl],vl[yl]=null;for(;e===ga;)ga=At[--Tt],At[Tt]=null,Lt=At[--Tt],At[Tt]=null,Gt=At[--Tt],At[Tt]=null}function ju(e,t){At[Tt++]=Gt,At[Tt++]=Lt,At[Tt++]=ga,Gt=t.id,Lt=t.overflow,ga=e}var Ze=null,Ae=null,ue=!1,va=null,wt=!1,cs=Error(o(519));function ya(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sn(zt(t,e)),cs}function Nu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ve]=e,t[et]=l,a){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(a=0;a<Mn.length;a++)re(Mn[a],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),Uo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),Ho(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||qf(t.textContent,a)?(l.popover!=null&&(re("beforetoggle",t),re("toggle",t)),l.onScroll!=null&&re("scroll",t),l.onScrollEnd!=null&&re("scrollend",t),l.onClick!=null&&(t.onclick=Jt),t=!0):t=!1,t||ya(e,!0)}function Eu(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 31:case 13:wt=!1;return;case 27:case 3:wt=!0;return;default:Ze=Ze.return}}function xl(e){if(e!==Ze)return!1;if(!ue)return Eu(e),ue=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ac(e.type,e.memoizedProps)),a=!a),a&&Ae&&ya(e),Eu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ae=Wf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ae=Wf(e)}else t===27?(t=Ae,_a(e.type)?(e=Cc,Cc=null,Ae=e):Ae=t):Ae=Ze?kt(e.stateNode.nextSibling):null;return!0}function Za(){Ae=Ze=null,ue=!1}function os(){var e=va;return e!==null&&(it===null?it=e:it.push.apply(it,e),va=null),e}function sn(e){va===null?va=[e]:va.push(e)}var us=b(null),Ka=null,It=null;function xa(e,t,a){q(us,t._currentValue),t._currentValue=a}function Pt(e){e._currentValue=us.current,D(us)}function ds(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function fs(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var c=n.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=n;for(var v=0;v<t.length;v++)if(m.context===t[v]){r.lanes|=a,m=r.alternate,m!==null&&(m.lanes|=a),ds(r.return,a,e),l||(c=null);break e}r=m.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=a,r=c.alternate,r!==null&&(r.lanes|=a),ds(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function bl(e,t,a,l){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var m=n.type;dt(n.pendingProps.value,c.value)||(e!==null?e.push(m):e=[m])}}else if(n===ge.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Dn):e=[Dn])}n=n.return}e!==null&&fs(t,e,a,l),t.flags|=262144}function pi(e){for(e=e.firstContext;e!==null;){if(!dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Ka=e,It=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return zu(Ka,e)}function gi(e,t){return Ka===null&&Ja(e),zu(e,t)}function zu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},It===null){if(e===null)throw Error(o(308));It=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else It=It.next=t;return a}var kp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Cp=s.unstable_scheduleCallback,_p=s.unstable_NormalPriority,Be={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ms(){return{controller:new kp,data:new Map,refCount:0}}function cn(e){e.refCount--,e.refCount===0&&Cp(_p,function(){e.controller.abort()})}var on=null,hs=0,Sl=0,jl=null;function Rp(e,t){if(on===null){var a=on=[];hs=0,Sl=vc(),jl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return hs++,t.then(Au,Au),t}function Au(){if(--hs===0&&on!==null){jl!==null&&(jl.status="fulfilled");var e=on;on=null,Sl=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Dp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Tu=C.S;C.S=function(e,t){df=ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Rp(e,t),Tu!==null&&Tu(e,t)};var $a=b(null);function ps(){var e=$a.current;return e!==null?e:ze.pooledCache}function vi(e,t){t===null?q($a,$a.current):q($a,t.pool)}function wu(){var e=ps();return e===null?null:{parent:Be._currentValue,pool:e}}var Nl=Error(o(460)),gs=Error(o(474)),yi=Error(o(542)),xi={then:function(){}};function Mu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ku(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Jt,Jt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_u(e),e;default:if(typeof t.status=="string")t.then(Jt,Jt);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_u(e),e}throw Fa=t,Nl}}function Wa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fa=a,Nl):a}}var Fa=null;function Cu(){if(Fa===null)throw Error(o(459));var e=Fa;return Fa=null,e}function _u(e){if(e===Nl||e===yi)throw Error(o(483))}var El=null,un=0;function bi(e){var t=un;return un+=1,El===null&&(El=[]),ku(El,e,t)}function dn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Si(e,t){throw t.$$typeof===B?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ru(e){function t(j,y){if(e){var N=j.deletions;N===null?(j.deletions=[y],j.flags|=16):N.push(y)}}function a(j,y){if(!e)return null;for(;y!==null;)t(j,y),y=y.sibling;return null}function l(j){for(var y=new Map;j!==null;)j.key!==null?y.set(j.key,j):y.set(j.index,j),j=j.sibling;return y}function n(j,y){return j=Wt(j,y),j.index=0,j.sibling=null,j}function r(j,y,N){return j.index=N,e?(N=j.alternate,N!==null?(N=N.index,N<y?(j.flags|=67108866,y):N):(j.flags|=67108866,y)):(j.flags|=1048576,y)}function c(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function m(j,y,N,_){return y===null||y.tag!==6?(y=ns(N,j.mode,_),y.return=j,y):(y=n(y,N),y.return=j,y)}function v(j,y,N,_){var $=N.type;return $===G?k(j,y,N.props.children,_,N.key):y!==null&&(y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===we&&Wa($)===y.type)?(y=n(y,N.props),dn(y,N),y.return=j,y):(y=mi(N.type,N.key,N.props,null,j.mode,_),dn(y,N),y.return=j,y)}function E(j,y,N,_){return y===null||y.tag!==4||y.stateNode.containerInfo!==N.containerInfo||y.stateNode.implementation!==N.implementation?(y=is(N,j.mode,_),y.return=j,y):(y=n(y,N.children||[]),y.return=j,y)}function k(j,y,N,_,$){return y===null||y.tag!==7?(y=Va(N,j.mode,_,$),y.return=j,y):(y=n(y,N),y.return=j,y)}function R(j,y,N){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=ns(""+y,j.mode,N),y.return=j,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Y:return N=mi(y.type,y.key,y.props,null,j.mode,N),dn(N,y),N.return=j,N;case Q:return y=is(y,j.mode,N),y.return=j,y;case we:return y=Wa(y),R(j,y,N)}if(Ue(y)||de(y))return y=Va(y,j.mode,N,null),y.return=j,y;if(typeof y.then=="function")return R(j,bi(y),N);if(y.$$typeof===O)return R(j,gi(j,y),N);Si(j,y)}return null}function T(j,y,N,_){var $=y!==null?y.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return $!==null?null:m(j,y,""+N,_);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Y:return N.key===$?v(j,y,N,_):null;case Q:return N.key===$?E(j,y,N,_):null;case we:return N=Wa(N),T(j,y,N,_)}if(Ue(N)||de(N))return $!==null?null:k(j,y,N,_,null);if(typeof N.then=="function")return T(j,y,bi(N),_);if(N.$$typeof===O)return T(j,y,gi(j,N),_);Si(j,N)}return null}function M(j,y,N,_,$){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return j=j.get(N)||null,m(y,j,""+_,$);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Y:return j=j.get(_.key===null?N:_.key)||null,v(y,j,_,$);case Q:return j=j.get(_.key===null?N:_.key)||null,E(y,j,_,$);case we:return _=Wa(_),M(j,y,N,_,$)}if(Ue(_)||de(_))return j=j.get(N)||null,k(y,j,_,$,null);if(typeof _.then=="function")return M(j,y,N,bi(_),$);if(_.$$typeof===O)return M(j,y,N,gi(y,_),$);Si(y,_)}return null}function X(j,y,N,_){for(var $=null,fe=null,K=y,le=y=0,oe=null;K!==null&&le<N.length;le++){K.index>le?(oe=K,K=null):oe=K.sibling;var me=T(j,K,N[le],_);if(me===null){K===null&&(K=oe);break}e&&K&&me.alternate===null&&t(j,K),y=r(me,y,le),fe===null?$=me:fe.sibling=me,fe=me,K=oe}if(le===N.length)return a(j,K),ue&&Ft(j,le),$;if(K===null){for(;le<N.length;le++)K=R(j,N[le],_),K!==null&&(y=r(K,y,le),fe===null?$=K:fe.sibling=K,fe=K);return ue&&Ft(j,le),$}for(K=l(K);le<N.length;le++)oe=M(K,j,le,N[le],_),oe!==null&&(e&&oe.alternate!==null&&K.delete(oe.key===null?le:oe.key),y=r(oe,y,le),fe===null?$=oe:fe.sibling=oe,fe=oe);return e&&K.forEach(function(Ba){return t(j,Ba)}),ue&&Ft(j,le),$}function W(j,y,N,_){if(N==null)throw Error(o(151));for(var $=null,fe=null,K=y,le=y=0,oe=null,me=N.next();K!==null&&!me.done;le++,me=N.next()){K.index>le?(oe=K,K=null):oe=K.sibling;var Ba=T(j,K,me.value,_);if(Ba===null){K===null&&(K=oe);break}e&&K&&Ba.alternate===null&&t(j,K),y=r(Ba,y,le),fe===null?$=Ba:fe.sibling=Ba,fe=Ba,K=oe}if(me.done)return a(j,K),ue&&Ft(j,le),$;if(K===null){for(;!me.done;le++,me=N.next())me=R(j,me.value,_),me!==null&&(y=r(me,y,le),fe===null?$=me:fe.sibling=me,fe=me);return ue&&Ft(j,le),$}for(K=l(K);!me.done;le++,me=N.next())me=M(K,j,le,me.value,_),me!==null&&(e&&me.alternate!==null&&K.delete(me.key===null?le:me.key),y=r(me,y,le),fe===null?$=me:fe.sibling=me,fe=me);return e&&K.forEach(function(V0){return t(j,V0)}),ue&&Ft(j,le),$}function Ne(j,y,N,_){if(typeof N=="object"&&N!==null&&N.type===G&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case Y:e:{for(var $=N.key;y!==null;){if(y.key===$){if($=N.type,$===G){if(y.tag===7){a(j,y.sibling),_=n(y,N.props.children),_.return=j,j=_;break e}}else if(y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===we&&Wa($)===y.type){a(j,y.sibling),_=n(y,N.props),dn(_,N),_.return=j,j=_;break e}a(j,y);break}else t(j,y);y=y.sibling}N.type===G?(_=Va(N.props.children,j.mode,_,N.key),_.return=j,j=_):(_=mi(N.type,N.key,N.props,null,j.mode,_),dn(_,N),_.return=j,j=_)}return c(j);case Q:e:{for($=N.key;y!==null;){if(y.key===$)if(y.tag===4&&y.stateNode.containerInfo===N.containerInfo&&y.stateNode.implementation===N.implementation){a(j,y.sibling),_=n(y,N.children||[]),_.return=j,j=_;break e}else{a(j,y);break}else t(j,y);y=y.sibling}_=is(N,j.mode,_),_.return=j,j=_}return c(j);case we:return N=Wa(N),Ne(j,y,N,_)}if(Ue(N))return X(j,y,N,_);if(de(N)){if($=de(N),typeof $!="function")throw Error(o(150));return N=$.call(N),W(j,y,N,_)}if(typeof N.then=="function")return Ne(j,y,bi(N),_);if(N.$$typeof===O)return Ne(j,y,gi(j,N),_);Si(j,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,y!==null&&y.tag===6?(a(j,y.sibling),_=n(y,N),_.return=j,j=_):(a(j,y),_=ns(N,j.mode,_),_.return=j,j=_),c(j)):a(j,y)}return function(j,y,N,_){try{un=0;var $=Ne(j,y,N,_);return El=null,$}catch(K){if(K===Nl||K===yi)throw K;var fe=ft(29,K,null,j.mode);return fe.lanes=_,fe.return=j,fe}finally{}}}var Ia=Ru(!0),Du=Ru(!1),ba=!1;function vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ys(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ja(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(he&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=fi(e),vu(e,null,a),t}return di(e,l,t,a),fi(e)}function fn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,zo(e,a)}}function xs(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=c:r=r.next=c,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var bs=!1;function mn(){if(bs){var e=jl;if(e!==null)throw e}}function hn(e,t,a,l){bs=!1;var n=e.updateQueue;ba=!1;var r=n.firstBaseUpdate,c=n.lastBaseUpdate,m=n.shared.pending;if(m!==null){n.shared.pending=null;var v=m,E=v.next;v.next=null,c===null?r=E:c.next=E,c=v;var k=e.alternate;k!==null&&(k=k.updateQueue,m=k.lastBaseUpdate,m!==c&&(m===null?k.firstBaseUpdate=E:m.next=E,k.lastBaseUpdate=v))}if(r!==null){var R=n.baseState;c=0,k=E=v=null,m=r;do{var T=m.lane&-536870913,M=T!==m.lane;if(M?(ce&T)===T:(l&T)===T){T!==0&&T===Sl&&(bs=!0),k!==null&&(k=k.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var X=e,W=m;T=t;var Ne=a;switch(W.tag){case 1:if(X=W.payload,typeof X=="function"){R=X.call(Ne,R,T);break e}R=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=W.payload,T=typeof X=="function"?X.call(Ne,R,T):X,T==null)break e;R=A({},R,T);break e;case 2:ba=!0}}T=m.callback,T!==null&&(e.flags|=64,M&&(e.flags|=8192),M=n.callbacks,M===null?n.callbacks=[T]:M.push(T))}else M={lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},k===null?(E=k=M,v=R):k=k.next=M,c|=T;if(m=m.next,m===null){if(m=n.shared.pending,m===null)break;M=m,m=M.next,M.next=null,n.lastBaseUpdate=M,n.shared.pending=null}}while(!0);k===null&&(v=R),n.baseState=v,n.firstBaseUpdate=E,n.lastBaseUpdate=k,r===null&&(n.shared.lanes=0),Ta|=c,e.lanes=c,e.memoizedState=R}}function Ou(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Uu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ou(a[e],t)}var zl=b(null),ji=b(0);function Bu(e,t){e=ca,q(ji,e),q(zl,t),ca=e|t.baseLanes}function Ss(){q(ji,ca),q(zl,zl.current)}function js(){ca=ji.current,D(zl),D(ji)}var mt=b(null),Mt=null;function Na(e){var t=e.alternate;q(De,De.current&1),q(mt,e),Mt===null&&(t===null||zl.current!==null||t.memoizedState!==null)&&(Mt=e)}function Ns(e){q(De,De.current),q(mt,e),Mt===null&&(Mt=e)}function Hu(e){e.tag===22?(q(De,De.current),q(mt,e),Mt===null&&(Mt=e)):Ea()}function Ea(){q(De,De.current),q(mt,mt.current)}function ht(e){D(mt),Mt===e&&(Mt=null),D(De)}var De=b(0);function Ni(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mc(a)||kc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ea=0,te=null,Se=null,He=null,Ei=!1,Al=!1,Pa=!1,zi=0,pn=0,Tl=null,Op=0;function Ce(){throw Error(o(321))}function Es(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!dt(e[a],t[a]))return!1;return!0}function zs(e,t,a,l,n,r){return ea=r,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Sd:Ls,Pa=!1,r=a(l,n),Pa=!1,Al&&(r=Lu(t,a,l,n)),Gu(e),r}function Gu(e){C.H=yn;var t=Se!==null&&Se.next!==null;if(ea=0,He=Se=te=null,Ei=!1,pn=0,Tl=null,t)throw Error(o(300));e===null||Ge||(e=e.dependencies,e!==null&&pi(e)&&(Ge=!0))}function Lu(e,t,a,l){te=e;var n=0;do{if(Al&&(Tl=null),pn=0,Al=!1,25<=n)throw Error(o(301));if(n+=1,He=Se=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}C.H=jd,r=t(a,l)}while(Al);return r}function Up(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?gn(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(te.flags|=1024),t}function As(){var e=zi!==0;return zi=0,e}function Ts(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ws(e){if(Ei){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ei=!1}ea=0,He=Se=te=null,Al=!1,pn=zi=0,Tl=null}function Pe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?te.memoizedState=He=e:He=He.next=e,He}function Oe(){if(Se===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=He===null?te.memoizedState:He.next;if(t!==null)He=t,Se=e;else{if(e===null)throw te.alternate===null?Error(o(467)):Error(o(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},He===null?te.memoizedState=He=e:He=He.next=e}return He}function Ai(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gn(e){var t=pn;return pn+=1,Tl===null&&(Tl=[]),e=ku(Tl,e,t),t=te,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Sd:Ls),e}function Ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gn(e);if(e.$$typeof===O)return Ke(e)}throw Error(o(438,String(e)))}function Ms(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ai(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=st;return t.index++,a}function ta(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=Oe();return ks(t,Se,e)}function ks(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,r=l.pending;if(r!==null){if(n!==null){var c=n.next;n.next=r.next,r.next=c}t.baseQueue=n=r,l.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var m=c=null,v=null,E=t,k=!1;do{var R=E.lane&-536870913;if(R!==E.lane?(ce&R)===R:(ea&R)===R){var T=E.revertLane;if(T===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),R===Sl&&(k=!0);else if((ea&T)===T){E=E.next,T===Sl&&(k=!0);continue}else R={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},v===null?(m=v=R,c=r):v=v.next=R,te.lanes|=T,Ta|=T;R=E.action,Pa&&a(r,R),r=E.hasEagerState?E.eagerState:a(r,R)}else T={lane:R,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},v===null?(m=v=T,c=r):v=v.next=T,te.lanes|=R,Ta|=R;E=E.next}while(E!==null&&E!==t);if(v===null?c=r:v.next=m,!dt(r,e.memoizedState)&&(Ge=!0,k&&(a=jl,a!==null)))throw a;e.memoizedState=r,e.baseState=c,e.baseQueue=v,l.lastRenderedState=r}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Cs(e){var t=Oe(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do r=e(r,c.action),c=c.next;while(c!==n);dt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function qu(e,t,a){var l=te,n=Oe(),r=ue;if(r){if(a===void 0)throw Error(o(407));a=a()}else a=t();var c=!dt((Se||n).memoizedState,a);if(c&&(n.memoizedState=a,Ge=!0),n=n.queue,Ds(Qu.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||He!==null&&He.memoizedState.tag&1){if(l.flags|=2048,wl(9,{destroy:void 0},Xu.bind(null,l,n,a,t),null),ze===null)throw Error(o(349));r||(ea&127)!==0||Yu(l,t,a)}return a}function Yu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=Ai(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Xu(e,t,a,l){t.value=a,t.getSnapshot=l,Vu(t)&&Zu(e)}function Qu(e,t,a){return a(function(){Vu(t)&&Zu(e)})}function Vu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!dt(e,a)}catch{return!0}}function Zu(e){var t=Qa(e,2);t!==null&&rt(t,e,2)}function _s(e){var t=Pe();if(typeof e=="function"){var a=e;if(e=a(),Pa){ma(!0);try{a()}finally{ma(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},t}function Ku(e,t,a,l){return e.baseState=a,ks(e,Se,typeof l=="function"?l:ta)}function Bp(e,t,a,l,n){if(Ci(e))throw Error(o(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};C.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,Ju(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Ju(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var r=C.T,c={};C.T=c;try{var m=a(n,l),v=C.S;v!==null&&v(c,m),$u(e,t,m)}catch(E){Rs(e,t,E)}finally{r!==null&&c.types!==null&&(r.types=c.types),C.T=r}}else try{r=a(n,l),$u(e,t,r)}catch(E){Rs(e,t,E)}}function $u(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Wu(e,t,l)},function(l){return Rs(e,t,l)}):Wu(e,t,a)}function Wu(e,t,a){t.status="fulfilled",t.value=a,Fu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ju(e,a)))}function Rs(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Fu(t),t=t.next;while(t!==l)}e.action=null}function Fu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Iu(e,t){return t}function Pu(e,t){if(ue){var a=ze.formState;if(a!==null){e:{var l=te;if(ue){if(Ae){t:{for(var n=Ae,r=wt;n.nodeType!==8;){if(!r){n=null;break t}if(n=kt(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Ae=kt(n.nextSibling),l=n.data==="F!";break e}}ya(l)}l=!1}l&&(t=a[0])}}return a=Pe(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Iu,lastRenderedState:t},a.queue=l,a=yd.bind(null,te,l),l.dispatch=a,l=_s(!1),r=Gs.bind(null,te,!1,l.queue),l=Pe(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Bp.bind(null,te,n,r,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function ed(e){var t=Oe();return td(t,Se,e)}function td(e,t,a){if(t=ks(e,t,Iu)[0],e=wi(ta)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=gn(t)}catch(c){throw c===Nl?yi:c}else l=t;t=Oe();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,wl(9,{destroy:void 0},Hp.bind(null,n,a),null)),[l,r,e]}function Hp(e,t){e.action=t}function ad(e){var t=Oe(),a=Se;if(a!==null)return td(t,a,e);Oe(),t=t.memoizedState,a=Oe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function wl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=Ai(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function ld(){return Oe().memoizedState}function Mi(e,t,a,l){var n=Pe();te.flags|=e,n.memoizedState=wl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ki(e,t,a,l){var n=Oe();l=l===void 0?null:l;var r=n.memoizedState.inst;Se!==null&&l!==null&&Es(l,Se.memoizedState.deps)?n.memoizedState=wl(t,r,a,l):(te.flags|=e,n.memoizedState=wl(1|t,r,a,l))}function nd(e,t){Mi(8390656,8,e,t)}function Ds(e,t){ki(2048,8,e,t)}function Gp(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=Ai(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function id(e){var t=Oe().memoizedState;return Gp({ref:t,nextImpl:e}),function(){if((he&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function rd(e,t){return ki(4,2,e,t)}function sd(e,t){return ki(4,4,e,t)}function cd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function od(e,t,a){a=a!=null?a.concat([e]):null,ki(4,4,cd.bind(null,t,e),a)}function Os(){}function ud(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Es(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function dd(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Es(t,l[1]))return l[0];if(l=e(),Pa){ma(!0);try{e()}finally{ma(!1)}}return a.memoizedState=[l,t],l}function Us(e,t,a){return a===void 0||(ea&1073741824)!==0&&(ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=mf(),te.lanes|=e,Ta|=e,a)}function fd(e,t,a,l){return dt(a,t)?a:zl.current!==null?(e=Us(e,a,l),dt(e,t)||(Ge=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(ce&261930)===0?(Ge=!0,e.memoizedState=a):(e=mf(),te.lanes|=e,Ta|=e,t)}function md(e,t,a,l,n){var r=L.p;L.p=r!==0&&8>r?r:8;var c=C.T,m={};C.T=m,Gs(e,!1,t,a);try{var v=n(),E=C.S;if(E!==null&&E(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var k=Dp(v,l);vn(e,t,k,vt(e))}else vn(e,t,l,vt(e))}catch(R){vn(e,t,{then:function(){},status:"rejected",reason:R},vt())}finally{L.p=r,c!==null&&m.types!==null&&(c.types=m.types),C.T=c}}function Lp(){}function Bs(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=hd(e).queue;md(e,n,t,F,a===null?Lp:function(){return pd(e),a(l)})}function hd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function pd(e){var t=hd(e);t.next===null&&(t=e.alternate.memoizedState),vn(e,t.next.queue,{},vt())}function Hs(){return Ke(Dn)}function gd(){return Oe().memoizedState}function vd(){return Oe().memoizedState}function qp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=vt();e=Sa(a);var l=ja(t,e,a);l!==null&&(rt(l,t,a),fn(l,t,a)),t={cache:ms()},e.payload=t;return}t=t.return}}function Yp(e,t,a){var l=vt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ci(e)?xd(t,a):(a=as(e,t,a,l),a!==null&&(rt(a,e,l),bd(a,t,l)))}function yd(e,t,a){var l=vt();vn(e,t,a,l)}function vn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ci(e))xd(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var c=t.lastRenderedState,m=r(c,a);if(n.hasEagerState=!0,n.eagerState=m,dt(m,c))return di(e,t,n,0),ze===null&&ui(),!1}catch{}finally{}if(a=as(e,t,n,l),a!==null)return rt(a,e,l),bd(a,t,l),!0}return!1}function Gs(e,t,a,l){if(l={lane:2,revertLane:vc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ci(e)){if(t)throw Error(o(479))}else t=as(e,a,l,2),t!==null&&rt(t,e,2)}function Ci(e){var t=e.alternate;return e===te||t!==null&&t===te}function xd(e,t){Al=Ei=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function bd(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,zo(e,a)}}var yn={readContext:Ke,use:Ti,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce};yn.useEffectEvent=Ce;var Sd={readContext:Ke,use:Ti,useCallback:function(e,t){return Pe().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:nd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Mi(4194308,4,cd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Mi(4194308,4,e,t)},useInsertionEffect:function(e,t){Mi(4,2,e,t)},useMemo:function(e,t){var a=Pe();t=t===void 0?null:t;var l=e();if(Pa){ma(!0);try{e()}finally{ma(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Pe();if(a!==void 0){var n=a(t);if(Pa){ma(!0);try{a(t)}finally{ma(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Yp.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=Pe();return e={current:e},t.memoizedState=e},useState:function(e){e=_s(e);var t=e.queue,a=yd.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Os,useDeferredValue:function(e,t){var a=Pe();return Us(a,e,t)},useTransition:function(){var e=_s(!1);return e=md.bind(null,te,e.queue,!0,!1),Pe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=Pe();if(ue){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),ze===null)throw Error(o(349));(ce&127)!==0||Yu(l,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,nd(Qu.bind(null,l,r,e),[e]),l.flags|=2048,wl(9,{destroy:void 0},Xu.bind(null,l,r,a,t),null),a},useId:function(){var e=Pe(),t=ze.identifierPrefix;if(ue){var a=Lt,l=Gt;a=(l&~(1<<32-ut(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=zi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Op++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Hs,useFormState:Pu,useActionState:Pu,useOptimistic:function(e){var t=Pe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Gs.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ms,useCacheRefresh:function(){return Pe().memoizedState=qp.bind(null,te)},useEffectEvent:function(e){var t=Pe(),a={impl:e};return t.memoizedState=a,function(){if((he&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Ls={readContext:Ke,use:Ti,useCallback:ud,useContext:Ke,useEffect:Ds,useImperativeHandle:od,useInsertionEffect:rd,useLayoutEffect:sd,useMemo:dd,useReducer:wi,useRef:ld,useState:function(){return wi(ta)},useDebugValue:Os,useDeferredValue:function(e,t){var a=Oe();return fd(a,Se.memoizedState,e,t)},useTransition:function(){var e=wi(ta)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:qu,useId:gd,useHostTransitionStatus:Hs,useFormState:ed,useActionState:ed,useOptimistic:function(e,t){var a=Oe();return Ku(a,Se,e,t)},useMemoCache:Ms,useCacheRefresh:vd};Ls.useEffectEvent=id;var jd={readContext:Ke,use:Ti,useCallback:ud,useContext:Ke,useEffect:Ds,useImperativeHandle:od,useInsertionEffect:rd,useLayoutEffect:sd,useMemo:dd,useReducer:Cs,useRef:ld,useState:function(){return Cs(ta)},useDebugValue:Os,useDeferredValue:function(e,t){var a=Oe();return Se===null?Us(a,e,t):fd(a,Se.memoizedState,e,t)},useTransition:function(){var e=Cs(ta)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:qu,useId:gd,useHostTransitionStatus:Hs,useFormState:ad,useActionState:ad,useOptimistic:function(e,t){var a=Oe();return Se!==null?Ku(a,Se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ms,useCacheRefresh:vd};jd.useEffectEvent=id;function qs(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:A({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ys={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=vt(),n=Sa(l);n.payload=t,a!=null&&(n.callback=a),t=ja(e,n,l),t!==null&&(rt(t,e,l),fn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=vt(),n=Sa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ja(e,n,l),t!==null&&(rt(t,e,l),fn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=vt(),l=Sa(a);l.tag=2,t!=null&&(l.callback=t),t=ja(e,l,a),t!==null&&(rt(t,e,a),fn(t,e,a))}};function Nd(e,t,a,l,n,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,c):t.prototype&&t.prototype.isPureReactComponent?!ln(a,l)||!ln(n,r):!0}function Ed(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ys.enqueueReplaceState(t,t.state,null)}function el(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=A({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function zd(e){oi(e)}function Ad(e){console.error(e)}function Td(e){oi(e)}function _i(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function wd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Xs(e,t,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){_i(e,t)},a}function Md(e){return e=Sa(e),e.tag=3,e}function kd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=l.value;e.payload=function(){return n(r)},e.callback=function(){wd(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){wd(t,a,l),typeof n!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function Xp(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&bl(t,a,n,!0),a=mt.current,a!==null){switch(a.tag){case 31:case 13:return Mt===null?Qi():a.alternate===null&&_e===0&&(_e=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===xi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),hc(e,l,n)),!1;case 22:return a.flags|=65536,l===xi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),hc(e,l,n)),!1}throw Error(o(435,a.tag))}return hc(e,l,n),Qi(),!1}if(ue)return t=mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==cs&&(e=Error(o(422),{cause:l}),sn(zt(e,a)))):(l!==cs&&(t=Error(o(423),{cause:l}),sn(zt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=zt(l,a),n=Xs(e.stateNode,l,n),xs(e,n),_e!==4&&(_e=2)),!1;var r=Error(o(520),{cause:l});if(r=zt(r,a),An===null?An=[r]:An.push(r),_e!==4&&(_e=2),t===null)return!0;l=zt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Xs(a.stateNode,l,e),xs(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(wa===null||!wa.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Md(n),kd(n,e,a,l),xs(a,n),!1}a=a.return}while(a!==null);return!1}var Qs=Error(o(461)),Ge=!1;function Je(e,t,a,l){t.child=e===null?Du(t,null,a,l):Ia(t,e.child,a,l)}function Cd(e,t,a,l,n){a=a.render;var r=t.ref;if("ref"in l){var c={};for(var m in l)m!=="ref"&&(c[m]=l[m])}else c=l;return Ja(t),l=zs(e,t,a,c,r,n),m=As(),e!==null&&!Ge?(Ts(e,t,n),aa(e,t,n)):(ue&&m&&rs(t),t.flags|=1,Je(e,t,l,n),t.child)}function _d(e,t,a,l,n){if(e===null){var r=a.type;return typeof r=="function"&&!ls(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Rd(e,t,r,l,n)):(e=mi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Is(e,n)){var c=r.memoizedProps;if(a=a.compare,a=a!==null?a:ln,a(c,l)&&e.ref===t.ref)return aa(e,t,n)}return t.flags|=1,e=Wt(r,l),e.ref=t.ref,e.return=t,t.child=e}function Rd(e,t,a,l,n){if(e!==null){var r=e.memoizedProps;if(ln(r,l)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=l=r,Is(e,n))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,aa(e,t,n)}return Vs(e,t,a,l,n)}function Dd(e,t,a,l){var n=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~r}else l=0,t.child=null;return Od(e,t,r,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vi(t,r!==null?r.cachePool:null),r!==null?Bu(t,r):Ss(),Hu(t);else return l=t.lanes=536870912,Od(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(vi(t,r.cachePool),Bu(t,r),Ea(),t.memoizedState=null):(e!==null&&vi(t,null),Ss(),Ea());return Je(e,t,n,a),t.child}function xn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Od(e,t,a,l,n){var r=ps();return r=r===null?null:{parent:Be._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&vi(t,null),Ss(),Hu(t),e!==null&&bl(e,t,l,!0),t.childLanes=n,null}function Ri(e,t){return t=Oi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ud(e,t,a){return Ia(t,e.child,null,a),e=Ri(t,t.pendingProps),e.flags|=2,ht(t),t.memoizedState=null,e}function Qp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ue){if(l.mode==="hidden")return e=Ri(t,l),t.lanes=536870912,xn(null,e);if(Ns(t),(e=Ae)?(e=$f(e,wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Gt,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=xu(e),a.return=t,t.child=a,Ze=t,Ae=null)):e=null,e===null)throw ya(t);return t.lanes=536870912,null}return Ri(t,l)}var r=e.memoizedState;if(r!==null){var c=r.dehydrated;if(Ns(t),n)if(t.flags&256)t.flags&=-257,t=Ud(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ge||bl(e,t,a,!1),n=(a&e.childLanes)!==0,Ge||n){if(l=ze,l!==null&&(c=Ao(l,a),c!==0&&c!==r.retryLane))throw r.retryLane=c,Qa(e,c),rt(l,e,c),Qs;Qi(),t=Ud(e,t,a)}else e=r.treeContext,Ae=kt(c.nextSibling),Ze=t,ue=!0,va=null,wt=!1,e!==null&&ju(t,e),t=Ri(t,l),t.flags|=4096;return t}return e=Wt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Di(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Vs(e,t,a,l,n){return Ja(t),a=zs(e,t,a,l,void 0,n),l=As(),e!==null&&!Ge?(Ts(e,t,n),aa(e,t,n)):(ue&&l&&rs(t),t.flags|=1,Je(e,t,a,n),t.child)}function Bd(e,t,a,l,n,r){return Ja(t),t.updateQueue=null,a=Lu(t,l,a,n),Gu(e),l=As(),e!==null&&!Ge?(Ts(e,t,r),aa(e,t,r)):(ue&&l&&rs(t),t.flags|=1,Je(e,t,a,r),t.child)}function Hd(e,t,a,l,n){if(Ja(t),t.stateNode===null){var r=gl,c=a.contextType;typeof c=="object"&&c!==null&&(r=Ke(c)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ys,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},vs(t),c=a.contextType,r.context=typeof c=="object"&&c!==null?Ke(c):gl,r.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(qs(t,a,c,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&Ys.enqueueReplaceState(r,r.state,null),hn(t,l,r,n),mn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,v=el(a,m);r.props=v;var E=r.context,k=a.contextType;c=gl,typeof k=="object"&&k!==null&&(c=Ke(k));var R=a.getDerivedStateFromProps;k=typeof R=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,k||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||E!==c)&&Ed(t,r,l,c),ba=!1;var T=t.memoizedState;r.state=T,hn(t,l,r,n),mn(),E=t.memoizedState,m||T!==E||ba?(typeof R=="function"&&(qs(t,a,R,l),E=t.memoizedState),(v=ba||Nd(t,a,v,l,T,E,c))?(k||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),r.props=l,r.state=E,r.context=c,l=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,ys(e,t),c=t.memoizedProps,k=el(a,c),r.props=k,R=t.pendingProps,T=r.context,E=a.contextType,v=gl,typeof E=="object"&&E!==null&&(v=Ke(E)),m=a.getDerivedStateFromProps,(E=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==R||T!==v)&&Ed(t,r,l,v),ba=!1,T=t.memoizedState,r.state=T,hn(t,l,r,n),mn();var M=t.memoizedState;c!==R||T!==M||ba||e!==null&&e.dependencies!==null&&pi(e.dependencies)?(typeof m=="function"&&(qs(t,a,m,l),M=t.memoizedState),(k=ba||Nd(t,a,k,l,T,M,v)||e!==null&&e.dependencies!==null&&pi(e.dependencies))?(E||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,M,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,M,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=M),r.props=l,r.state=M,r.context=v,l=k):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Di(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Ia(t,e.child,null,n),t.child=Ia(t,null,a,n)):Je(e,t,a,n),t.memoizedState=r.state,e=t.child):e=aa(e,t,n),e}function Gd(e,t,a,l){return Za(),t.flags|=256,Je(e,t,a,l),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ks(e){return{baseLanes:e,cachePool:wu()}}function Js(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=gt),e}function Ld(e,t,a){var l=t.pendingProps,n=!1,r=(t.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(n?Na(t):Ea(),(e=Ae)?(e=$f(e,wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Gt,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=xu(e),a.return=t,t.child=a,Ze=t,Ae=null)):e=null,e===null)throw ya(t);return kc(e)?t.lanes=32:t.lanes=536870912,null}var m=l.children;return l=l.fallback,n?(Ea(),n=t.mode,m=Oi({mode:"hidden",children:m},n),l=Va(l,n,a,null),m.return=t,l.return=t,m.sibling=l,t.child=m,l=t.child,l.memoizedState=Ks(a),l.childLanes=Js(e,c,a),t.memoizedState=Zs,xn(null,l)):(Na(t),$s(t,m))}var v=e.memoizedState;if(v!==null&&(m=v.dehydrated,m!==null)){if(r)t.flags&256?(Na(t),t.flags&=-257,t=Ws(e,t,a)):t.memoizedState!==null?(Ea(),t.child=e.child,t.flags|=128,t=null):(Ea(),m=l.fallback,n=t.mode,l=Oi({mode:"visible",children:l.children},n),m=Va(m,n,a,null),m.flags|=2,l.return=t,m.return=t,l.sibling=m,t.child=l,Ia(t,e.child,null,a),l=t.child,l.memoizedState=Ks(a),l.childLanes=Js(e,c,a),t.memoizedState=Zs,t=xn(null,l));else if(Na(t),kc(m)){if(c=m.nextSibling&&m.nextSibling.dataset,c)var E=c.dgst;c=E,l=Error(o(419)),l.stack="",l.digest=c,sn({value:l,source:null,stack:null}),t=Ws(e,t,a)}else if(Ge||bl(e,t,a,!1),c=(a&e.childLanes)!==0,Ge||c){if(c=ze,c!==null&&(l=Ao(c,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,Qa(e,l),rt(c,e,l),Qs;Mc(m)||Qi(),t=Ws(e,t,a)}else Mc(m)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ae=kt(m.nextSibling),Ze=t,ue=!0,va=null,wt=!1,e!==null&&ju(t,e),t=$s(t,l.children),t.flags|=4096);return t}return n?(Ea(),m=l.fallback,n=t.mode,v=e.child,E=v.sibling,l=Wt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,E!==null?m=Wt(E,m):(m=Va(m,n,a,null),m.flags|=2),m.return=t,l.return=t,l.sibling=m,t.child=l,xn(null,l),l=t.child,m=e.child.memoizedState,m===null?m=Ks(a):(n=m.cachePool,n!==null?(v=Be._currentValue,n=n.parent!==v?{parent:v,pool:v}:n):n=wu(),m={baseLanes:m.baseLanes|a,cachePool:n}),l.memoizedState=m,l.childLanes=Js(e,c,a),t.memoizedState=Zs,xn(e.child,l)):(Na(t),a=e.child,e=a.sibling,a=Wt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function $s(e,t){return t=Oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oi(e,t){return e=ft(22,e,null,t),e.lanes=0,e}function Ws(e,t,a){return Ia(t,e.child,null,a),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ds(e.return,t,a)}function Fs(e,t,a,l,n,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:r}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=r)}function Yd(e,t,a){var l=t.pendingProps,n=l.revealOrder,r=l.tail;l=l.children;var c=De.current,m=(c&2)!==0;if(m?(c=c&1|2,t.flags|=128):c&=1,q(De,c),Je(e,t,l,a),l=ue?rn:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qd(e,a,t);else if(e.tag===19)qd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ni(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Fs(t,!1,n,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ni(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Fs(t,!0,a,null,r,l);break;case"together":Fs(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function aa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ta|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(bl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Wt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Wt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Is(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pi(e)))}function Vp(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),xa(t,Be,e.memoizedState.cache),Za();break;case 27:case 5:Ql(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ns(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Na(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ld(e,t,a):(Na(t),e=aa(e,t,a),e!==null?e.sibling:null);Na(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(bl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Yd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),q(De,De.current),l)break;return null;case 22:return t.lanes=0,Dd(e,t,a,t.pendingProps);case 24:xa(t,Be,e.memoizedState.cache)}return aa(e,t,a)}function Xd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!Is(e,a)&&(t.flags&128)===0)return Ge=!1,Vp(e,t,a);Ge=(e.flags&131072)!==0}else Ge=!1,ue&&(t.flags&1048576)!==0&&Su(t,rn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Wa(t.elementType),t.type=e,typeof e=="function")ls(e)?(l=el(e,l),t.tag=1,t=Hd(null,t,e,l,a)):(t.tag=0,t=Vs(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Z){t.tag=11,t=Cd(null,t,e,l,a);break e}else if(n===I){t.tag=14,t=_d(null,t,e,l,a);break e}}throw t=St(e)||e,Error(o(306,t,""))}}return t;case 0:return Vs(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=el(l,t.pendingProps),Hd(e,t,l,n,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var r=t.memoizedState;n=r.element,ys(e,t),hn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,xa(t,Be,l),l!==r.cache&&fs(t,[Be],a,!0),mn(),l=c.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Gd(e,t,l,a);break e}else if(l!==n){n=zt(Error(o(424)),t),sn(n),t=Gd(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=kt(e.firstChild),Ze=t,ue=!0,va=null,wt=!0,a=Du(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Za(),l===n){t=aa(e,t,a);break e}Je(e,t,l,a)}t=t.child}return t;case 26:return Di(e,t),e===null?(a=tm(t.type,null,t.pendingProps,null))?t.memoizedState=a:ue||(a=t.type,e=t.pendingProps,l=Fi(ne.current).createElement(a),l[Ve]=t,l[et]=e,$e(l,a,e),Xe(l),t.stateNode=l):t.memoizedState=tm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ql(t),e===null&&ue&&(l=t.stateNode=If(t.type,t.pendingProps,ne.current),Ze=t,wt=!0,n=Ae,_a(t.type)?(Cc=n,Ae=kt(l.firstChild)):Ae=n),Je(e,t,t.pendingProps.children,a),Di(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((n=l=Ae)&&(l=S0(l,t.type,t.pendingProps,wt),l!==null?(t.stateNode=l,Ze=t,Ae=kt(l.firstChild),wt=!1,n=!0):n=!1),n||ya(t)),Ql(t),n=t.type,r=t.pendingProps,c=e!==null?e.memoizedProps:null,l=r.children,Ac(n,r)?l=null:c!==null&&Ac(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=zs(e,t,Up,null,null,a),Dn._currentValue=n),Di(e,t),Je(e,t,l,a),t.child;case 6:return e===null&&ue&&((e=a=Ae)&&(a=j0(a,t.pendingProps,wt),a!==null?(t.stateNode=a,Ze=t,Ae=null,e=!0):e=!1),e||ya(t)),null;case 13:return Ld(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ia(t,null,l,a):Je(e,t,l,a),t.child;case 11:return Cd(e,t,t.type,t.pendingProps,a);case 7:return Je(e,t,t.pendingProps,a),t.child;case 8:return Je(e,t,t.pendingProps.children,a),t.child;case 12:return Je(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,xa(t,t.type,l.value),Je(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ja(t),n=Ke(n),l=l(n),t.flags|=1,Je(e,t,l,a),t.child;case 14:return _d(e,t,t.type,t.pendingProps,a);case 15:return Rd(e,t,t.type,t.pendingProps,a);case 19:return Yd(e,t,a);case 31:return Qp(e,t,a);case 22:return Dd(e,t,a,t.pendingProps);case 24:return Ja(t),l=Ke(Be),e===null?(n=ps(),n===null&&(n=ze,r=ms(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:l,cache:n},vs(t),xa(t,Be,n)):((e.lanes&a)!==0&&(ys(e,t),hn(t,null,null,a),mn()),n=e.memoizedState,r=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),xa(t,Be,l)):(l=r.cache,xa(t,Be,l),l!==n.cache&&fs(t,[Be],a,!0))),Je(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function la(e){e.flags|=4}function Ps(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(vf())e.flags|=8192;else throw Fa=xi,gs}else e.flags&=-16777217}function Qd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rm(t))if(vf())e.flags|=8192;else throw Fa=xi,gs}function Ui(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?No():536870912,e.lanes|=t,_l|=t)}function bn(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Zp(e,t,a){var l=t.pendingProps;switch(ss(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Pt(Be),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xl(t)?la(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,os())),Te(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(la(t),r!==null?(Te(t),Qd(t,r)):(Te(t),Ps(t,n,null,l,a))):r?r!==e.memoizedState?(la(t),Te(t),Qd(t,r)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&la(t),Te(t),Ps(t,n,e,l,a)),null;case 27:if(Kn(t),a=ne.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&la(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Te(t),null}e=V.current,xl(t)?Nu(t):(e=If(n,l,a),t.stateNode=e,la(t))}return Te(t),null;case 5:if(Kn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&la(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Te(t),null}if(r=V.current,xl(t))Nu(t);else{var c=Fi(ne.current);switch(r){case 1:r=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=c.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}r[Ve]=t,r[et]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=r;e:switch($e(r,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&la(t)}}return Te(t),Ps(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&la(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ne.current,xl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ze,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||qf(e.nodeValue,a)),e||ya(t,!0)}else e=Fi(e).createTextNode(l),e[Ve]=t,t.stateNode=e}return Te(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=xl(t),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Ve]=t}else Za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else a=os(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ht(t),t):(ht(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Te(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=xl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Ve]=t}else Za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),n=!1}else n=os(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ht(t),t):(ht(t),null)}return ht(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ui(t,t.updateQueue),Te(t),null);case 4:return Re(),e===null&&Sc(t.stateNode.containerInfo),Te(t),null;case 10:return Pt(t.type),Te(t),null;case 19:if(D(De),l=t.memoizedState,l===null)return Te(t),null;if(n=(t.flags&128)!==0,r=l.rendering,r===null)if(n)bn(l,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ni(e),r!==null){for(t.flags|=128,bn(l,!1),e=r.updateQueue,t.updateQueue=e,Ui(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)yu(a,e),a=a.sibling;return q(De,De.current&1|2),ue&&Ft(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ct()>qi&&(t.flags|=128,n=!0,bn(l,!1),t.lanes=4194304)}else{if(!n)if(e=Ni(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ui(t,e),bn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ue)return Te(t),null}else 2*ct()-l.renderingStartTime>qi&&a!==536870912&&(t.flags|=128,n=!0,bn(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ct(),e.sibling=null,a=De.current,q(De,n?a&1|2:a&1),ue&&Ft(t,l.treeForkCount),e):(Te(t),null);case 22:case 23:return ht(t),js(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),a=t.updateQueue,a!==null&&Ui(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&D($a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Pt(Be),Te(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Kp(e,t){switch(ss(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pt(Be),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kn(t),null;case 31:if(t.memoizedState!==null){if(ht(t),t.alternate===null)throw Error(o(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(De),null;case 4:return Re(),null;case 10:return Pt(t.type),null;case 22:case 23:return ht(t),js(),e!==null&&D($a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pt(Be),null;case 25:return null;default:return null}}function Vd(e,t){switch(ss(t),t.tag){case 3:Pt(Be),Re();break;case 26:case 27:case 5:Kn(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&ht(t);break;case 13:ht(t);break;case 19:D(De);break;case 10:Pt(t.type);break;case 22:case 23:ht(t),js(),e!==null&&D($a);break;case 24:Pt(Be)}}function Sn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var r=a.create,c=a.inst;l=r(),c.destroy=l}a=a.next}while(a!==n)}}catch(m){ye(t,t.return,m)}}function za(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var r=n.next;l=r;do{if((l.tag&e)===e){var c=l.inst,m=c.destroy;if(m!==void 0){c.destroy=void 0,n=t;var v=a,E=m;try{E()}catch(k){ye(n,v,k)}}}l=l.next}while(l!==r)}}catch(k){ye(t,t.return,k)}}function Zd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Uu(t,a)}catch(l){ye(e,e.return,l)}}}function Kd(e,t,a){a.props=el(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ye(e,t,l)}}function jn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ye(e,t,n)}}function qt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ye(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ye(e,t,n)}else a.current=null}function Jd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ye(e,e.return,n)}}function ec(e,t,a){try{var l=e.stateNode;p0(l,e.type,a,t),l[et]=t}catch(n){ye(e,e.return,n)}}function $d(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_a(e.type)||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_a(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Jt));else if(l!==4&&(l===27&&_a(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ac(e,t,a),e=e.sibling;e!==null;)ac(e,t,a),e=e.sibling}function Bi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&_a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bi(e,t,a),e=e.sibling;e!==null;)Bi(e,t,a),e=e.sibling}function Wd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$e(t,l,a),t[Ve]=e,t[et]=a}catch(r){ye(e,e.return,r)}}var na=!1,Le=!1,lc=!1,Fd=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Jp(e,t){if(e=e.containerInfo,Ec=nr,e=ou(e),Wr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var c=0,m=-1,v=-1,E=0,k=0,R=e,T=null;t:for(;;){for(var M;R!==a||n!==0&&R.nodeType!==3||(m=c+n),R!==r||l!==0&&R.nodeType!==3||(v=c+l),R.nodeType===3&&(c+=R.nodeValue.length),(M=R.firstChild)!==null;)T=R,R=M;for(;;){if(R===e)break t;if(T===a&&++E===n&&(m=c),T===r&&++k===l&&(v=c),(M=R.nextSibling)!==null)break;R=T,T=R.parentNode}R=M}a=m===-1||v===-1?null:{start:m,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(zc={focusedElem:e,selectionRange:a},nr=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var X=el(a.type,n);e=l.getSnapshotBeforeUpdate(X,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){ye(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)wc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function Id(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),l&4&&Sn(5,a);break;case 1:if(ra(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ye(a,a.return,c)}else{var n=el(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ye(a,a.return,c)}}l&64&&Zd(a),l&512&&jn(a,a.return);break;case 3:if(ra(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Uu(e,t)}catch(c){ye(a,a.return,c)}}break;case 27:t===null&&l&4&&Wd(a);case 26:case 5:ra(e,a),t===null&&l&4&&Jd(a),l&512&&jn(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),l&4&&tf(e,a);break;case 13:ra(e,a),l&4&&af(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=l0.bind(null,a),N0(e,a))));break;case 22:if(l=a.memoizedState!==null||na,!l){t=t!==null&&t.memoizedState!==null||Le,n=na;var r=Le;na=l,(Le=t)&&!r?sa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),na=n,Le=r}break;case 30:break;default:ra(e,a)}}function Pd(e){var t=e.alternate;t!==null&&(e.alternate=null,Pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Rr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,at=!1;function ia(e,t,a){for(a=a.child;a!==null;)ef(e,t,a),a=a.sibling}function ef(e,t,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Vl,a)}catch{}switch(a.tag){case 26:Le||qt(a,t),ia(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Le||qt(a,t);var l=Me,n=at;_a(a.type)&&(Me=a.stateNode,at=!1),ia(e,t,a),Cn(a.stateNode),Me=l,at=n;break;case 5:Le||qt(a,t);case 6:if(l=Me,n=at,Me=null,ia(e,t,a),Me=l,at=n,Me!==null)if(at)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(a.stateNode)}catch(r){ye(a,t,r)}else try{Me.removeChild(a.stateNode)}catch(r){ye(a,t,r)}break;case 18:Me!==null&&(at?(e=Me,Kf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ll(e)):Kf(Me,a.stateNode));break;case 4:l=Me,n=at,Me=a.stateNode.containerInfo,at=!0,ia(e,t,a),Me=l,at=n;break;case 0:case 11:case 14:case 15:za(2,a,t),Le||za(4,a,t),ia(e,t,a);break;case 1:Le||(qt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Kd(a,t,l)),ia(e,t,a);break;case 21:ia(e,t,a);break;case 22:Le=(l=Le)||a.memoizedState!==null,ia(e,t,a),Le=l;break;default:ia(e,t,a)}}function tf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ll(e)}catch(a){ye(t,t.return,a)}}}function af(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ll(e)}catch(a){ye(t,t.return,a)}}function $p(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Fd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Fd),t;default:throw Error(o(435,e.tag))}}function Hi(e,t){var a=$p(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=n0.bind(null,e,l);l.then(n,n)}})}function lt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],r=e,c=t,m=c;e:for(;m!==null;){switch(m.tag){case 27:if(_a(m.type)){Me=m.stateNode,at=!1;break e}break;case 5:Me=m.stateNode,at=!1;break e;case 3:case 4:Me=m.stateNode.containerInfo,at=!0;break e}m=m.return}if(Me===null)throw Error(o(160));ef(r,c,n),Me=null,at=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)lf(t,e),t=t.sibling}var Dt=null;function lf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(t,e),nt(e),l&4&&(za(3,e,e.return),Sn(3,e),za(5,e,e.return));break;case 1:lt(t,e),nt(e),l&512&&(Le||a===null||qt(a,a.return)),l&64&&na&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Dt;if(lt(t,e),nt(e),l&512&&(Le||a===null||qt(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":r=n.getElementsByTagName("title")[0],(!r||r[Jl]||r[Ve]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(l),n.head.insertBefore(r,n.querySelector("head > title"))),$e(r,l,a),r[Ve]=e,Xe(r),l=r;break e;case"link":var c=nm("link","href",n).get(l+(a.href||""));if(c){for(var m=0;m<c.length;m++)if(r=c[m],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(m,1);break t}}r=n.createElement(l),$e(r,l,a),n.head.appendChild(r);break;case"meta":if(c=nm("meta","content",n).get(l+(a.content||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(m,1);break t}}r=n.createElement(l),$e(r,l,a),n.head.appendChild(r);break;default:throw Error(o(468,l))}r[Ve]=e,Xe(r),l=r}e.stateNode=l}else im(n,e.type,e.stateNode);else e.stateNode=lm(n,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?im(n,e.type,e.stateNode):lm(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ec(e,e.memoizedProps,a.memoizedProps)}break;case 27:lt(t,e),nt(e),l&512&&(Le||a===null||qt(a,a.return)),a!==null&&l&4&&ec(e,e.memoizedProps,a.memoizedProps);break;case 5:if(lt(t,e),nt(e),l&512&&(Le||a===null||qt(a,a.return)),e.flags&32){n=e.stateNode;try{ol(n,"")}catch(X){ye(e,e.return,X)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,ec(e,n,a!==null?a.memoizedProps:n)),l&1024&&(lc=!0);break;case 6:if(lt(t,e),nt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(X){ye(e,e.return,X)}}break;case 3:if(er=null,n=Dt,Dt=Ii(t.containerInfo),lt(t,e),Dt=n,nt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ll(t.containerInfo)}catch(X){ye(e,e.return,X)}lc&&(lc=!1,nf(e));break;case 4:l=Dt,Dt=Ii(e.stateNode.containerInfo),lt(t,e),nt(e),Dt=l;break;case 12:lt(t,e),nt(e);break;case 31:lt(t,e),nt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hi(e,l)));break;case 13:lt(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Li=ct()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hi(e,l)));break;case 22:n=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,E=na,k=Le;if(na=E||n,Le=k||v,lt(t,e),Le=k,na=E,nt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||v||na||Le||tl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(r=v.stateNode,n)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{m=v.stateNode;var R=v.memoizedProps.style,T=R!=null&&R.hasOwnProperty("display")?R.display:null;m.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(X){ye(v,v.return,X)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=n?"":v.memoizedProps}catch(X){ye(v,v.return,X)}}}else if(t.tag===18){if(a===null){v=t;try{var M=v.stateNode;n?Jf(M,!0):Jf(v.stateNode,!1)}catch(X){ye(v,v.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Hi(e,a))));break;case 19:lt(t,e),nt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hi(e,l)));break;case 30:break;case 21:break;default:lt(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if($d(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,r=tc(e);Bi(e,r,n);break;case 5:var c=a.stateNode;a.flags&32&&(ol(c,""),a.flags&=-33);var m=tc(e);Bi(e,m,c);break;case 3:case 4:var v=a.stateNode.containerInfo,E=tc(e);ac(e,E,v);break;default:throw Error(o(161))}}catch(k){ye(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ra(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Id(e,t.alternate,t),t=t.sibling}function tl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:za(4,t,t.return),tl(t);break;case 1:qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Kd(t,t.return,a),tl(t);break;case 27:Cn(t.stateNode);case 26:case 5:qt(t,t.return),tl(t);break;case 22:t.memoizedState===null&&tl(t);break;case 30:tl(t);break;default:tl(t)}e=e.sibling}}function sa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,r=t,c=r.flags;switch(r.tag){case 0:case 11:case 15:sa(n,r,a),Sn(4,r);break;case 1:if(sa(n,r,a),l=r,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(E){ye(l,l.return,E)}if(l=r,n=l.updateQueue,n!==null){var m=l.stateNode;try{var v=n.shared.hiddenCallbacks;if(v!==null)for(n.shared.hiddenCallbacks=null,n=0;n<v.length;n++)Ou(v[n],m)}catch(E){ye(l,l.return,E)}}a&&c&64&&Zd(r),jn(r,r.return);break;case 27:Wd(r);case 26:case 5:sa(n,r,a),a&&l===null&&c&4&&Jd(r),jn(r,r.return);break;case 12:sa(n,r,a);break;case 31:sa(n,r,a),a&&c&4&&tf(n,r);break;case 13:sa(n,r,a),a&&c&4&&af(n,r);break;case 22:r.memoizedState===null&&sa(n,r,a),jn(r,r.return);break;case 30:break;default:sa(n,r,a)}t=t.sibling}}function nc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&cn(a))}function ic(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cn(e))}function Ot(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rf(e,t,a,l),t=t.sibling}function rf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ot(e,t,a,l),n&2048&&Sn(9,t);break;case 1:Ot(e,t,a,l);break;case 3:Ot(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cn(e)));break;case 12:if(n&2048){Ot(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,c=r.id,m=r.onPostCommit;typeof m=="function"&&m(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){ye(t,t.return,v)}}else Ot(e,t,a,l);break;case 31:Ot(e,t,a,l);break;case 13:Ot(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,c=t.alternate,t.memoizedState!==null?r._visibility&2?Ot(e,t,a,l):Nn(e,t):r._visibility&2?Ot(e,t,a,l):(r._visibility|=2,Ml(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&nc(c,t);break;case 24:Ot(e,t,a,l),n&2048&&ic(t.alternate,t);break;default:Ot(e,t,a,l)}}function Ml(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,c=t,m=a,v=l,E=c.flags;switch(c.tag){case 0:case 11:case 15:Ml(r,c,m,v,n),Sn(8,c);break;case 23:break;case 22:var k=c.stateNode;c.memoizedState!==null?k._visibility&2?Ml(r,c,m,v,n):Nn(r,c):(k._visibility|=2,Ml(r,c,m,v,n)),n&&E&2048&&nc(c.alternate,c);break;case 24:Ml(r,c,m,v,n),n&&E&2048&&ic(c.alternate,c);break;default:Ml(r,c,m,v,n)}t=t.sibling}}function Nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Nn(a,l),n&2048&&nc(l.alternate,l);break;case 24:Nn(a,l),n&2048&&ic(l.alternate,l);break;default:Nn(a,l)}t=t.sibling}}var En=8192;function kl(e,t,a){if(e.subtreeFlags&En)for(e=e.child;e!==null;)sf(e,t,a),e=e.sibling}function sf(e,t,a){switch(e.tag){case 26:kl(e,t,a),e.flags&En&&e.memoizedState!==null&&O0(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:kl(e,t,a);break;case 3:case 4:var l=Dt;Dt=Ii(e.stateNode.containerInfo),kl(e,t,a),Dt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=En,En=16777216,kl(e,t,a),En=l):kl(e,t,a));break;default:kl(e,t,a)}}function cf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,uf(l,e)}cf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)of(e),e=e.sibling}function of(e){switch(e.tag){case 0:case 11:case 15:zn(e),e.flags&2048&&za(9,e,e.return);break;case 3:zn(e);break;case 12:zn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gi(e)):zn(e);break;default:zn(e)}}function Gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,uf(l,e)}cf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:za(8,t,t.return),Gi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Gi(t));break;default:Gi(t)}e=e.sibling}}function uf(e,t){for(;Qe!==null;){var a=Qe;switch(a.tag){case 0:case 11:case 15:za(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:cn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qe=l;else e:for(a=e;Qe!==null;){l=Qe;var n=l.sibling,r=l.return;if(Pd(l),l===a){Qe=null;break e}if(n!==null){n.return=r,Qe=n;break e}Qe=r}}}var Wp={getCacheForType:function(e){var t=Ke(Be),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ke(Be).controller.signal}},Fp=typeof WeakMap=="function"?WeakMap:Map,he=0,ze=null,ie=null,ce=0,ve=0,pt=null,Aa=!1,Cl=!1,rc=!1,ca=0,_e=0,Ta=0,al=0,sc=0,gt=0,_l=0,An=null,it=null,cc=!1,Li=0,df=0,qi=1/0,Yi=null,wa=null,Ye=0,Ma=null,Rl=null,oa=0,oc=0,uc=null,ff=null,Tn=0,dc=null;function vt(){return(he&2)!==0&&ce!==0?ce&-ce:C.T!==null?vc():To()}function mf(){if(gt===0)if((ce&536870912)===0||ue){var e=Wn;Wn<<=1,(Wn&3932160)===0&&(Wn=262144),gt=e}else gt=536870912;return e=mt.current,e!==null&&(e.flags|=32),gt}function rt(e,t,a){(e===ze&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Dl(e,0),ka(e,ce,gt,!1)),Kl(e,a),((he&2)===0||e!==ze)&&(e===ze&&((he&2)===0&&(al|=a),_e===4&&ka(e,ce,gt,!1)),Yt(e))}function hf(e,t,a){if((he&6)!==0)throw Error(o(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Zl(e,t),n=l?e0(e,t):mc(e,t,!0),r=l;do{if(n===0){Cl&&!l&&ka(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Ip(a)){n=mc(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var m=e;n=An;var v=m.current.memoizedState.isDehydrated;if(v&&(Dl(m,c).flags|=256),c=mc(m,c,!1),c!==2){if(rc&&!v){m.errorRecoveryDisabledLanes|=r,al|=r,n=4;break e}r=it,it=n,r!==null&&(it===null?it=r:it.push.apply(it,r))}n=c}if(r=!1,n!==2)continue}}if(n===1){Dl(e,0),ka(e,t,0,!0);break}e:{switch(l=e,r=n,r){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ka(l,t,gt,!Aa);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Li+300-ct(),10<n)){if(ka(l,t,gt,!Aa),In(l,0,!0)!==0)break e;oa=t,l.timeoutHandle=Vf(pf.bind(null,l,a,it,Yi,cc,t,gt,al,_l,Aa,r,"Throttled",-0,0),n);break e}pf(l,a,it,Yi,cc,t,gt,al,_l,Aa,r,null,-0,0)}}break}while(!0);Yt(e)}function pf(e,t,a,l,n,r,c,m,v,E,k,R,T,M){if(e.timeoutHandle=-1,R=t.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jt},sf(t,r,R);var X=(r&62914560)===r?Li-ct():(r&4194048)===r?df-ct():0;if(X=U0(R,X),X!==null){oa=r,e.cancelPendingCommit=X(Nf.bind(null,e,t,r,a,l,n,c,m,v,k,R,null,T,M)),ka(e,r,c,!E);return}}Nf(e,t,r,a,l,n,c,m,v)}function Ip(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],r=n.getSnapshot;n=n.value;try{if(!dt(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t,a,l){t&=~sc,t&=~al,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var r=31-ut(n),c=1<<r;l[r]=-1,n&=~c}a!==0&&Eo(e,a,t)}function Xi(){return(he&6)===0?(wn(0),!1):!0}function fc(){if(ie!==null){if(ve===0)var e=ie.return;else e=ie,It=Ka=null,ws(e),El=null,un=0,e=ie;for(;e!==null;)Vd(e.alternate,e),e=e.return;ie=null}}function Dl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,y0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),oa=0,fc(),ze=e,ie=a=Wt(e.current,null),ce=t,ve=0,pt=null,Aa=!1,Cl=Zl(e,t),rc=!1,_l=gt=sc=al=Ta=_e=0,it=An=null,cc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ut(l),r=1<<n;t|=e[n],l&=~r}return ca=t,ui(),a}function gf(e,t){te=null,C.H=yn,t===Nl||t===yi?(t=Cu(),ve=3):t===gs?(t=Cu(),ve=4):ve=t===Qs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,ie===null&&(_e=1,_i(e,zt(t,e.current)))}function vf(){var e=mt.current;return e===null?!0:(ce&4194048)===ce?Mt===null:(ce&62914560)===ce||(ce&536870912)!==0?e===Mt:!1}function yf(){var e=C.H;return C.H=yn,e===null?yn:e}function xf(){var e=C.A;return C.A=Wp,e}function Qi(){_e=4,Aa||(ce&4194048)!==ce&&mt.current!==null||(Cl=!0),(Ta&134217727)===0&&(al&134217727)===0||ze===null||ka(ze,ce,gt,!1)}function mc(e,t,a){var l=he;he|=2;var n=yf(),r=xf();(ze!==e||ce!==t)&&(Yi=null,Dl(e,t)),t=!1;var c=_e;e:do try{if(ve!==0&&ie!==null){var m=ie,v=pt;switch(ve){case 8:fc(),c=6;break e;case 3:case 2:case 9:case 6:mt.current===null&&(t=!0);var E=ve;if(ve=0,pt=null,Ol(e,m,v,E),a&&Cl){c=0;break e}break;default:E=ve,ve=0,pt=null,Ol(e,m,v,E)}}Pp(),c=_e;break}catch(k){gf(e,k)}while(!0);return t&&e.shellSuspendCounter++,It=Ka=null,he=l,C.H=n,C.A=r,ie===null&&(ze=null,ce=0,ui()),c}function Pp(){for(;ie!==null;)bf(ie)}function e0(e,t){var a=he;he|=2;var l=yf(),n=xf();ze!==e||ce!==t?(Yi=null,qi=ct()+500,Dl(e,t)):Cl=Zl(e,t);e:do try{if(ve!==0&&ie!==null){t=ie;var r=pt;t:switch(ve){case 1:ve=0,pt=null,Ol(e,t,r,1);break;case 2:case 9:if(Mu(r)){ve=0,pt=null,Sf(t);break}t=function(){ve!==2&&ve!==9||ze!==e||(ve=7),Yt(e)},r.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Mu(r)?(ve=0,pt=null,Sf(t)):(ve=0,pt=null,Ol(e,t,r,7));break;case 5:var c=null;switch(ie.tag){case 26:c=ie.memoizedState;case 5:case 27:var m=ie;if(c?rm(c):m.stateNode.complete){ve=0,pt=null;var v=m.sibling;if(v!==null)ie=v;else{var E=m.return;E!==null?(ie=E,Vi(E)):ie=null}break t}}ve=0,pt=null,Ol(e,t,r,5);break;case 6:ve=0,pt=null,Ol(e,t,r,6);break;case 8:fc(),_e=6;break e;default:throw Error(o(462))}}t0();break}catch(k){gf(e,k)}while(!0);return It=Ka=null,C.H=l,C.A=n,he=a,ie!==null?0:(ze=null,ce=0,ui(),_e)}function t0(){for(;ie!==null&&!Eh();)bf(ie)}function bf(e){var t=Xd(e.alternate,e,ca);e.memoizedProps=e.pendingProps,t===null?Vi(e):ie=t}function Sf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Bd(a,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=Bd(a,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:ws(t);default:Vd(a,t),t=ie=yu(t,ca),t=Xd(a,t,ca)}e.memoizedProps=e.pendingProps,t===null?Vi(e):ie=t}function Ol(e,t,a,l){It=Ka=null,ws(t),El=null,un=0;var n=t.return;try{if(Xp(e,n,t,a,ce)){_e=1,_i(e,zt(a,e.current)),ie=null;return}}catch(r){if(n!==null)throw ie=n,r;_e=1,_i(e,zt(a,e.current)),ie=null;return}t.flags&32768?(ue||l===1?e=!0:Cl||(ce&536870912)!==0?e=!1:(Aa=e=!0,(l===2||l===9||l===3||l===6)&&(l=mt.current,l!==null&&l.tag===13&&(l.flags|=16384))),jf(t,e)):Vi(t)}function Vi(e){var t=e;do{if((t.flags&32768)!==0){jf(t,Aa);return}e=t.return;var a=Zp(t.alternate,t,ca);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);_e===0&&(_e=5)}function jf(e,t){do{var a=Kp(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);_e=6,ie=null}function Nf(e,t,a,l,n,r,c,m,v){e.cancelPendingCommit=null;do Zi();while(Ye!==0);if((he&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(r=t.lanes|t.childLanes,r|=ts,Dh(e,a,r,c,m,v),e===ze&&(ie=ze=null,ce=0),Rl=t,Ma=e,oa=a,oc=r,uc=n,ff=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,i0(Jn,function(){return wf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,n=L.p,L.p=2,c=he,he|=4;try{Jp(e,t,a)}finally{he=c,L.p=n,C.T=l}}Ye=1,Ef(),zf(),Af()}}function Ef(){if(Ye===1){Ye=0;var e=Ma,t=Rl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var l=L.p;L.p=2;var n=he;he|=4;try{lf(t,e);var r=zc,c=ou(e.containerInfo),m=r.focusedElem,v=r.selectionRange;if(c!==m&&m&&m.ownerDocument&&cu(m.ownerDocument.documentElement,m)){if(v!==null&&Wr(m)){var E=v.start,k=v.end;if(k===void 0&&(k=E),"selectionStart"in m)m.selectionStart=E,m.selectionEnd=Math.min(k,m.value.length);else{var R=m.ownerDocument||document,T=R&&R.defaultView||window;if(T.getSelection){var M=T.getSelection(),X=m.textContent.length,W=Math.min(v.start,X),Ne=v.end===void 0?W:Math.min(v.end,X);!M.extend&&W>Ne&&(c=Ne,Ne=W,W=c);var j=su(m,W),y=su(m,Ne);if(j&&y&&(M.rangeCount!==1||M.anchorNode!==j.node||M.anchorOffset!==j.offset||M.focusNode!==y.node||M.focusOffset!==y.offset)){var N=R.createRange();N.setStart(j.node,j.offset),M.removeAllRanges(),W>Ne?(M.addRange(N),M.extend(y.node,y.offset)):(N.setEnd(y.node,y.offset),M.addRange(N))}}}}for(R=[],M=m;M=M.parentNode;)M.nodeType===1&&R.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<R.length;m++){var _=R[m];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}nr=!!Ec,zc=Ec=null}finally{he=n,L.p=l,C.T=a}}e.current=t,Ye=2}}function zf(){if(Ye===2){Ye=0;var e=Ma,t=Rl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var l=L.p;L.p=2;var n=he;he|=4;try{Id(e,t.alternate,t)}finally{he=n,L.p=l,C.T=a}}Ye=3}}function Af(){if(Ye===4||Ye===3){Ye=0,zh();var e=Ma,t=Rl,a=oa,l=ff;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,Rl=Ma=null,Tf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(wa=null),Cr(a),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=C.T,n=L.p,L.p=2,C.T=null;try{for(var r=e.onRecoverableError,c=0;c<l.length;c++){var m=l[c];r(m.value,{componentStack:m.stack})}}finally{C.T=t,L.p=n}}(oa&3)!==0&&Zi(),Yt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===dc?Tn++:(Tn=0,dc=e):Tn=0,wn(0)}}function Tf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cn(t)))}function Zi(){return Ef(),zf(),Af(),wf()}function wf(){if(Ye!==5)return!1;var e=Ma,t=oc;oc=0;var a=Cr(oa),l=C.T,n=L.p;try{L.p=32>a?32:a,C.T=null,a=uc,uc=null;var r=Ma,c=oa;if(Ye=0,Rl=Ma=null,oa=0,(he&6)!==0)throw Error(o(331));var m=he;if(he|=4,of(r.current),rf(r,r.current,c,a),he=m,wn(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Vl,r)}catch{}return!0}finally{L.p=n,C.T=l,Tf(e,t)}}function Mf(e,t,a){t=zt(a,t),t=Xs(e.stateNode,t,2),e=ja(e,t,2),e!==null&&(Kl(e,2),Yt(e))}function ye(e,t,a){if(e.tag===3)Mf(e,e,a);else for(;t!==null;){if(t.tag===3){Mf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wa===null||!wa.has(l))){e=zt(a,e),a=Md(2),l=ja(t,a,2),l!==null&&(kd(a,l,t,e),Kl(l,2),Yt(l));break}}t=t.return}}function hc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Fp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(rc=!0,n.add(a),e=a0.bind(null,e,t,a),t.then(e,e))}function a0(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(ce&a)===a&&(_e===4||_e===3&&(ce&62914560)===ce&&300>ct()-Li?(he&2)===0&&Dl(e,0):sc|=a,_l===ce&&(_l=0)),Yt(e)}function kf(e,t){t===0&&(t=No()),e=Qa(e,t),e!==null&&(Kl(e,t),Yt(e))}function l0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),kf(e,a)}function n0(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),kf(e,a)}function i0(e,t){return Tr(e,t)}var Ki=null,Ul=null,pc=!1,Ji=!1,gc=!1,Ca=0;function Yt(e){e!==Ul&&e.next===null&&(Ul===null?Ki=Ul=e:Ul=Ul.next=e),Ji=!0,pc||(pc=!0,s0())}function wn(e,t){if(!gc&&Ji){gc=!0;do for(var a=!1,l=Ki;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var r=0;else{var c=l.suspendedLanes,m=l.pingedLanes;r=(1<<31-ut(42|e)+1)-1,r&=n&~(c&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Df(l,r))}else r=ce,r=In(l,l===ze?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Zl(l,r)||(a=!0,Df(l,r));l=l.next}while(a);gc=!1}}function r0(){Cf()}function Cf(){Ji=pc=!1;var e=0;Ca!==0&&v0()&&(e=Ca);for(var t=ct(),a=null,l=Ki;l!==null;){var n=l.next,r=_f(l,t);r===0?(l.next=null,a===null?Ki=n:a.next=n,n===null&&(Ul=a)):(a=l,(e!==0||(r&3)!==0)&&(Ji=!0)),l=n}Ye!==0&&Ye!==5||wn(e),Ca!==0&&(Ca=0)}function _f(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-ut(r),m=1<<c,v=n[c];v===-1?((m&a)===0||(m&l)!==0)&&(n[c]=Rh(m,t)):v<=t&&(e.expiredLanes|=m),r&=~m}if(t=ze,a=ce,a=In(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&wr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Zl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&wr(l),Cr(a)){case 2:case 8:a=So;break;case 32:a=Jn;break;case 268435456:a=jo;break;default:a=Jn}return l=Rf.bind(null,e),a=Tr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&wr(l),e.callbackPriority=2,e.callbackNode=null,2}function Rf(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zi()&&e.callbackNode!==a)return null;var l=ce;return l=In(e,e===ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(hf(e,l,t),_f(e,ct()),e.callbackNode!=null&&e.callbackNode===a?Rf.bind(null,e):null)}function Df(e,t){if(Zi())return null;hf(e,t,!0)}function s0(){x0(function(){(he&6)!==0?Tr(bo,r0):Cf()})}function vc(){if(Ca===0){var e=Sl;e===0&&(e=$n,$n<<=1,($n&261888)===0&&($n=256)),Ca=e}return Ca}function Of(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ai(""+e)}function Uf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function c0(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var r=Of((n[et]||null).action),c=l.submitter;c&&(t=(t=c[et]||null)?Of(t.formAction):c.getAttribute("formAction"),t!==null&&(r=t,c=null));var m=new ri("action","action",null,l,n);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var v=c?Uf(n,c):new FormData(n);Bs(a,{pending:!0,data:v,method:n.method,action:r},null,v)}}else typeof r=="function"&&(m.preventDefault(),v=c?Uf(n,c):new FormData(n),Bs(a,{pending:!0,data:v,method:n.method,action:r},r,v))},currentTarget:n}]})}}for(var yc=0;yc<es.length;yc++){var xc=es[yc],o0=xc.toLowerCase(),u0=xc[0].toUpperCase()+xc.slice(1);Rt(o0,"on"+u0)}Rt(fu,"onAnimationEnd"),Rt(mu,"onAnimationIteration"),Rt(hu,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Ap,"onTransitionRun"),Rt(Tp,"onTransitionStart"),Rt(wp,"onTransitionCancel"),Rt(pu,"onTransitionEnd"),sl("onMouseEnter",["mouseout","mouseover"]),sl("onMouseLeave",["mouseout","mouseover"]),sl("onPointerEnter",["pointerout","pointerover"]),sl("onPointerLeave",["pointerout","pointerover"]),La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),La("onBeforeInput",["compositionend","keypress","textInput","paste"]),La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mn));function Bf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var c=l.length-1;0<=c;c--){var m=l[c],v=m.instance,E=m.currentTarget;if(m=m.listener,v!==r&&n.isPropagationStopped())break e;r=m,n.currentTarget=E;try{r(n)}catch(k){oi(k)}n.currentTarget=null,r=v}else for(c=0;c<l.length;c++){if(m=l[c],v=m.instance,E=m.currentTarget,m=m.listener,v!==r&&n.isPropagationStopped())break e;r=m,n.currentTarget=E;try{r(n)}catch(k){oi(k)}n.currentTarget=null,r=v}}}}function re(e,t){var a=t[_r];a===void 0&&(a=t[_r]=new Set);var l=e+"__bubble";a.has(l)||(Hf(t,e,2,!1),a.add(l))}function bc(e,t,a){var l=0;t&&(l|=4),Hf(a,e,l,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function Sc(e){if(!e[$i]){e[$i]=!0,ko.forEach(function(a){a!=="selectionchange"&&(d0.has(a)||bc(a,!1,e),bc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$i]||(t[$i]=!0,bc("selectionchange",!1,t))}}function Hf(e,t,a,l){switch(mm(t)){case 2:var n=G0;break;case 8:n=L0;break;default:n=Uc}a=n.bind(null,t,a,e),n=void 0,!qr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function jc(e,t,a,l,n){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var m=l.stateNode.containerInfo;if(m===n)break;if(c===4)for(c=l.return;c!==null;){var v=c.tag;if((v===3||v===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;m!==null;){if(c=nl(m),c===null)return;if(v=c.tag,v===5||v===6||v===26||v===27){l=r=c;continue e}m=m.parentNode}}l=l.return}Yo(function(){var E=r,k=Gr(a),R=[];e:{var T=gu.get(e);if(T!==void 0){var M=ri,X=e;switch(e){case"keypress":if(ni(a)===0)break e;case"keydown":case"keyup":M=np;break;case"focusin":X="focus",M=Vr;break;case"focusout":X="blur",M=Vr;break;case"beforeblur":case"afterblur":M=Vr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=sp;break;case fu:case mu:case hu:M=$h;break;case pu:M=op;break;case"scroll":case"scrollend":M=Qh;break;case"wheel":M=dp;break;case"copy":case"cut":case"paste":M=Fh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Ko;break;case"toggle":case"beforetoggle":M=mp}var W=(t&4)!==0,Ne=!W&&(e==="scroll"||e==="scrollend"),j=W?T!==null?T+"Capture":null:T;W=[];for(var y=E,N;y!==null;){var _=y;if(N=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||N===null||j===null||(_=Wl(y,j),_!=null&&W.push(kn(y,_,N))),Ne)break;y=y.return}0<W.length&&(T=new M(T,X,null,a,k),R.push({event:T,listeners:W}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",T&&a!==Hr&&(X=a.relatedTarget||a.fromElement)&&(nl(X)||X[ll]))break e;if((M||T)&&(T=k.window===k?k:(T=k.ownerDocument)?T.defaultView||T.parentWindow:window,M?(X=a.relatedTarget||a.toElement,M=E,X=X?nl(X):null,X!==null&&(Ne=h(X),W=X.tag,X!==Ne||W!==5&&W!==27&&W!==6)&&(X=null)):(M=null,X=E),M!==X)){if(W=Vo,_="onMouseLeave",j="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(W=Ko,_="onPointerLeave",j="onPointerEnter",y="pointer"),Ne=M==null?T:$l(M),N=X==null?T:$l(X),T=new W(_,y+"leave",M,a,k),T.target=Ne,T.relatedTarget=N,_=null,nl(k)===E&&(W=new W(j,y+"enter",X,a,k),W.target=N,W.relatedTarget=Ne,_=W),Ne=_,M&&X)t:{for(W=f0,j=M,y=X,N=0,_=j;_;_=W(_))N++;_=0;for(var $=y;$;$=W($))_++;for(;0<N-_;)j=W(j),N--;for(;0<_-N;)y=W(y),_--;for(;N--;){if(j===y||y!==null&&j===y.alternate){W=j;break t}j=W(j),y=W(y)}W=null}else W=null;M!==null&&Gf(R,T,M,W,!1),X!==null&&Ne!==null&&Gf(R,Ne,X,W,!0)}}e:{if(T=E?$l(E):window,M=T.nodeName&&T.nodeName.toLowerCase(),M==="select"||M==="input"&&T.type==="file")var fe=tu;else if(Po(T))if(au)fe=Np;else{fe=Sp;var K=bp}else M=T.nodeName,!M||M.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&Br(E.elementType)&&(fe=tu):fe=jp;if(fe&&(fe=fe(e,E))){eu(R,fe,a,k);break e}K&&K(e,T,E),e==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&Ur(T,"number",T.value)}switch(K=E?$l(E):window,e){case"focusin":(Po(K)||K.contentEditable==="true")&&(ml=K,Fr=E,nn=null);break;case"focusout":nn=Fr=ml=null;break;case"mousedown":Ir=!0;break;case"contextmenu":case"mouseup":case"dragend":Ir=!1,uu(R,a,k);break;case"selectionchange":if(zp)break;case"keydown":case"keyup":uu(R,a,k)}var le;if(Kr)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else fl?Fo(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(Jo&&a.locale!=="ko"&&(fl||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&fl&&(le=Xo()):(pa=k,Yr="value"in pa?pa.value:pa.textContent,fl=!0)),K=Wi(E,oe),0<K.length&&(oe=new Zo(oe,e,null,a,k),R.push({event:oe,listeners:K}),le?oe.data=le:(le=Io(a),le!==null&&(oe.data=le)))),(le=pp?gp(e,a):vp(e,a))&&(oe=Wi(E,"onBeforeInput"),0<oe.length&&(K=new Zo("onBeforeInput","beforeinput",null,a,k),R.push({event:K,listeners:oe}),K.data=le)),c0(R,e,E,a,k)}Bf(R,t)})}function kn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Wi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Wl(e,a),n!=null&&l.unshift(kn(e,n,r)),n=Wl(e,t),n!=null&&l.push(kn(e,n,r))),e.tag===3)return l;e=e.return}return[]}function f0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gf(e,t,a,l,n){for(var r=t._reactName,c=[];a!==null&&a!==l;){var m=a,v=m.alternate,E=m.stateNode;if(m=m.tag,v!==null&&v===l)break;m!==5&&m!==26&&m!==27||E===null||(v=E,n?(E=Wl(a,r),E!=null&&c.unshift(kn(a,E,v))):n||(E=Wl(a,r),E!=null&&c.push(kn(a,E,v)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var m0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function Lf(e){return(typeof e=="string"?e:""+e).replace(m0,`
`).replace(h0,"")}function qf(e,t){return t=Lf(t),Lf(e)===t}function je(e,t,a,l,n,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ol(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ol(e,""+l);break;case"className":ei(e,"class",l);break;case"tabIndex":ei(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(e,a,l);break;case"style":Lo(e,l,r);break;case"data":if(t!=="object"){ei(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ai(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&je(e,t,"name",n.name,n,null),je(e,t,"formEncType",n.formEncType,n,null),je(e,t,"formMethod",n.formMethod,n,null),je(e,t,"formTarget",n.formTarget,n,null)):(je(e,t,"encType",n.encType,n,null),je(e,t,"method",n.method,n,null),je(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ai(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Jt);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ai(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":re("beforetoggle",e),re("toggle",e),Pn(e,"popover",l);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yh.get(a)||a,Pn(e,a,l))}}function Nc(e,t,a,l,n,r){switch(a){case"style":Lo(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ol(e,l):(typeof l=="number"||typeof l=="bigint")&&ol(e,""+l);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Jt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Co.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[et]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Pn(e,a,l)}}}function $e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var l=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var c=a[r];if(c!=null)switch(r){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:je(e,t,r,c,a,null)}}n&&je(e,t,"srcSet",a.srcSet,a,null),l&&je(e,t,"src",a.src,a,null);return;case"input":re("invalid",e);var m=r=c=n=null,v=null,E=null;for(l in a)if(a.hasOwnProperty(l)){var k=a[l];if(k!=null)switch(l){case"name":n=k;break;case"type":c=k;break;case"checked":v=k;break;case"defaultChecked":E=k;break;case"value":r=k;break;case"defaultValue":m=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,t));break;default:je(e,t,l,k,a,null)}}Uo(e,r,m,v,E,c,n,!1);return;case"select":re("invalid",e),l=c=r=null;for(n in a)if(a.hasOwnProperty(n)&&(m=a[n],m!=null))switch(n){case"value":r=m;break;case"defaultValue":c=m;break;case"multiple":l=m;default:je(e,t,n,m,a,null)}t=r,a=c,e.multiple=!!l,t!=null?cl(e,!!l,t,!1):a!=null&&cl(e,!!l,a,!0);return;case"textarea":re("invalid",e),r=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(m=a[c],m!=null))switch(c){case"value":l=m;break;case"defaultValue":n=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(o(91));break;default:je(e,t,c,m,a,null)}Ho(e,l,n,r);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(l=a[v],l!=null))switch(v){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:je(e,t,v,l,a,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(l=0;l<Mn.length;l++)re(Mn[l],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:je(e,t,E,l,a,null)}return;default:if(Br(t)){for(k in a)a.hasOwnProperty(k)&&(l=a[k],l!==void 0&&Nc(e,t,k,l,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null&&je(e,t,m,l,a,null))}function p0(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,c=null,m=null,v=null,E=null,k=null;for(M in a){var R=a[M];if(a.hasOwnProperty(M)&&R!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":v=R;default:l.hasOwnProperty(M)||je(e,t,M,null,l,R)}}for(var T in l){var M=l[T];if(R=a[T],l.hasOwnProperty(T)&&(M!=null||R!=null))switch(T){case"type":r=M;break;case"name":n=M;break;case"checked":E=M;break;case"defaultChecked":k=M;break;case"value":c=M;break;case"defaultValue":m=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:M!==R&&je(e,t,T,M,l,R)}}Or(e,c,m,v,E,k,r,n);return;case"select":M=c=m=T=null;for(r in a)if(v=a[r],a.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":M=v;default:l.hasOwnProperty(r)||je(e,t,r,null,l,v)}for(n in l)if(r=l[n],v=a[n],l.hasOwnProperty(n)&&(r!=null||v!=null))switch(n){case"value":T=r;break;case"defaultValue":m=r;break;case"multiple":c=r;default:r!==v&&je(e,t,n,r,l,v)}t=m,a=c,l=M,T!=null?cl(e,!!a,T,!1):!!l!=!!a&&(t!=null?cl(e,!!a,t,!0):cl(e,!!a,a?[]:"",!1));return;case"textarea":M=T=null;for(m in a)if(n=a[m],a.hasOwnProperty(m)&&n!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:je(e,t,m,null,l,n)}for(c in l)if(n=l[c],r=a[c],l.hasOwnProperty(c)&&(n!=null||r!=null))switch(c){case"value":T=n;break;case"defaultValue":M=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==r&&je(e,t,c,n,l,r)}Bo(e,T,M);return;case"option":for(var X in a)if(T=a[X],a.hasOwnProperty(X)&&T!=null&&!l.hasOwnProperty(X))switch(X){case"selected":e.selected=!1;break;default:je(e,t,X,null,l,T)}for(v in l)if(T=l[v],M=a[v],l.hasOwnProperty(v)&&T!==M&&(T!=null||M!=null))switch(v){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:je(e,t,v,T,l,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)T=a[W],a.hasOwnProperty(W)&&T!=null&&!l.hasOwnProperty(W)&&je(e,t,W,null,l,T);for(E in l)if(T=l[E],M=a[E],l.hasOwnProperty(E)&&T!==M&&(T!=null||M!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:je(e,t,E,T,l,M)}return;default:if(Br(t)){for(var Ne in a)T=a[Ne],a.hasOwnProperty(Ne)&&T!==void 0&&!l.hasOwnProperty(Ne)&&Nc(e,t,Ne,void 0,l,T);for(k in l)T=l[k],M=a[k],!l.hasOwnProperty(k)||T===M||T===void 0&&M===void 0||Nc(e,t,k,T,l,M);return}}for(var j in a)T=a[j],a.hasOwnProperty(j)&&T!=null&&!l.hasOwnProperty(j)&&je(e,t,j,null,l,T);for(R in l)T=l[R],M=a[R],!l.hasOwnProperty(R)||T===M||T==null&&M==null||je(e,t,R,T,l,M)}function Yf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function g0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],r=n.transferSize,c=n.initiatorType,m=n.duration;if(r&&m&&Yf(c)){for(c=0,m=n.responseEnd,l+=1;l<a.length;l++){var v=a[l],E=v.startTime;if(E>m)break;var k=v.transferSize,R=v.initiatorType;k&&Yf(R)&&(v=v.responseEnd,c+=k*(v<m?1:(m-E)/(v-E)))}if(--l,t+=8*(r+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ec=null,zc=null;function Fi(e){return e.nodeType===9?e:e.ownerDocument}function Xf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ac(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tc=null;function v0(){var e=window.event;return e&&e.type==="popstate"?e===Tc?!1:(Tc=e,!0):(Tc=null,!1)}var Vf=typeof setTimeout=="function"?setTimeout:void 0,y0=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,x0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(e){return Zf.resolve(null).then(e).catch(b0)}:Vf;function b0(e){setTimeout(function(){throw e})}function _a(e){return e==="head"}function Kf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ll(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Cn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Cn(a);for(var r=a.firstChild;r;){var c=r.nextSibling,m=r.nodeName;r[Jl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=c}}else a==="body"&&Cn(e.ownerDocument.body);a=n}while(a);Ll(t)}function Jf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function wc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wc(a),Rr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function S0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Jl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function j0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=kt(e.nextSibling),e===null))return null;return e}function $f(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=kt(e.nextSibling),e===null))return null;return e}function Mc(e){return e.data==="$?"||e.data==="$~"}function kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function N0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Cc=null;function Wf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return kt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function If(e,t,a){switch(t=Fi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Cn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Rr(e)}var Ct=new Map,Pf=new Set;function Ii(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=L.d;L.d={f:E0,r:z0,D:A0,C:T0,L:w0,m:M0,X:C0,S:k0,M:_0};function E0(){var e=ua.f(),t=Xi();return e||t}function z0(e){var t=il(e);t!==null&&t.tag===5&&t.type==="form"?pd(t):ua.r(e)}var Bl=typeof document>"u"?null:document;function em(e,t,a){var l=Bl;if(l&&typeof t=="string"&&t){var n=Nt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Pf.has(n)||(Pf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),$e(t,"link",e),Xe(t),l.head.appendChild(t)))}}function A0(e){ua.D(e),em("dns-prefetch",e,null)}function T0(e,t){ua.C(e,t),em("preconnect",e,t)}function w0(e,t,a){ua.L(e,t,a);var l=Bl;if(l&&e&&t){var n='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Nt(a.imageSizes)+'"]')):n+='[href="'+Nt(e)+'"]';var r=n;switch(t){case"style":r=Hl(e);break;case"script":r=Gl(e)}Ct.has(r)||(e=A({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ct.set(r,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(_n(r))||t==="script"&&l.querySelector(Rn(r))||(t=l.createElement("link"),$e(t,"link",e),Xe(t),l.head.appendChild(t)))}}function M0(e,t){ua.m(e,t);var a=Bl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Nt(l)+'"][href="'+Nt(e)+'"]',r=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Gl(e)}if(!Ct.has(r)&&(e=A({rel:"modulepreload",href:e},t),Ct.set(r,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Rn(r)))return}l=a.createElement("link"),$e(l,"link",e),Xe(l),a.head.appendChild(l)}}}function k0(e,t,a){ua.S(e,t,a);var l=Bl;if(l&&e){var n=rl(l).hoistableStyles,r=Hl(e);t=t||"default";var c=n.get(r);if(!c){var m={loading:0,preload:null};if(c=l.querySelector(_n(r)))m.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ct.get(r))&&_c(e,a);var v=c=l.createElement("link");Xe(v),$e(v,"link",e),v._p=new Promise(function(E,k){v.onload=E,v.onerror=k}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Pi(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:m},n.set(r,c)}}}function C0(e,t){ua.X(e,t);var a=Bl;if(a&&e){var l=rl(a).hoistableScripts,n=Gl(e),r=l.get(n);r||(r=a.querySelector(Rn(n)),r||(e=A({src:e,async:!0},t),(t=Ct.get(n))&&Rc(e,t),r=a.createElement("script"),Xe(r),$e(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function _0(e,t){ua.M(e,t);var a=Bl;if(a&&e){var l=rl(a).hoistableScripts,n=Gl(e),r=l.get(n);r||(r=a.querySelector(Rn(n)),r||(e=A({src:e,async:!0,type:"module"},t),(t=Ct.get(n))&&Rc(e,t),r=a.createElement("script"),Xe(r),$e(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function tm(e,t,a,l){var n=(n=ne.current)?Ii(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Hl(a.href),a=rl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Hl(a.href);var r=rl(n).hoistableStyles,c=r.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=n.querySelector(_n(e)))&&!r._p&&(c.instance=r,c.state.loading=5),Ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ct.set(e,a),r||R0(n,e,a,c.state))),t&&l===null)throw Error(o(528,""));return c}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Gl(a),a=rl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Hl(e){return'href="'+Nt(e)+'"'}function _n(e){return'link[rel="stylesheet"]['+e+"]"}function am(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function R0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),$e(t,"link",a),Xe(t),e.head.appendChild(t))}function Gl(e){return'[src="'+Nt(e)+'"]'}function Rn(e){return"script[async]"+e}function lm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(l)return t.instance=l,Xe(l),l;var n=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Xe(l),$e(l,"style",n),Pi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Hl(a.href);var r=e.querySelector(_n(n));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;l=am(a),(n=Ct.get(n))&&_c(l,n),r=(e.ownerDocument||e).createElement("link"),Xe(r);var c=r;return c._p=new Promise(function(m,v){c.onload=m,c.onerror=v}),$e(r,"link",l),t.state.loading|=4,Pi(r,a.precedence,e),t.instance=r;case"script":return r=Gl(a.src),(n=e.querySelector(Rn(r)))?(t.instance=n,Xe(n),n):(l=a,(n=Ct.get(r))&&(l=A({},a),Rc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Xe(n),$e(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Pi(l,a.precedence,e));return t.instance}function Pi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,r=n,c=0;c<l.length;c++){var m=l[c];if(m.dataset.precedence===t)r=m;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function _c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var er=null;function nm(e,t,a){if(er===null){var l=new Map,n=er=new Map;n.set(a,l)}else n=er,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[Jl]||r[Ve]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(t)||"";c=e+c;var m=l.get(c);m?m.push(r):l.set(c,[r])}}return l}function im(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function D0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function O0(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Hl(l.href),r=t.querySelector(_n(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=tr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Xe(r);return}r=t.ownerDocument||t,l=am(l),(n=Ct.get(n))&&_c(l,n),r=r.createElement("link"),Xe(r);var c=r;c._p=new Promise(function(m,v){c.onload=m,c.onerror=v}),$e(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Dc=0;function U0(e,t){return e.stylesheets&&e.count===0&&lr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&lr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Dc===0&&(Dc=62500*g0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Dc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function tr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ar=null;function lr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ar=new Map,t.forEach(B0,e),ar=null,tr.call(e))}function B0(e,t){if(!(t.state.loading&4)){var a=ar.get(e);if(a)var l=a.get(null);else{a=new Map,ar.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var c=n[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),r=a.get(c)||l,r===l&&a.set(null,n),a.set(c,n),this.count++,l=tr.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Dn={$$typeof:O,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function H0(e,t,a,l,n,r,c,m,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mr(0),this.hiddenUpdates=Mr(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function sm(e,t,a,l,n,r,c,m,v,E,k,R){return e=new H0(e,t,a,c,v,E,k,R,m),t=1,r===!0&&(t|=24),r=ft(3,null,null,t),e.current=r,r.stateNode=e,t=ms(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},vs(r),e}function cm(e){return e?(e=gl,e):gl}function om(e,t,a,l,n,r){n=cm(n),l.context===null?l.context=n:l.pendingContext=n,l=Sa(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=ja(e,l,t),a!==null&&(rt(a,e,t),fn(a,e,t))}function um(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Oc(e,t){um(e,t),(e=e.alternate)&&um(e,t)}function dm(e){if(e.tag===13||e.tag===31){var t=Qa(e,67108864);t!==null&&rt(t,e,67108864),Oc(e,67108864)}}function fm(e){if(e.tag===13||e.tag===31){var t=vt();t=kr(t);var a=Qa(e,t);a!==null&&rt(a,e,t),Oc(e,t)}}var nr=!0;function G0(e,t,a,l){var n=C.T;C.T=null;var r=L.p;try{L.p=2,Uc(e,t,a,l)}finally{L.p=r,C.T=n}}function L0(e,t,a,l){var n=C.T;C.T=null;var r=L.p;try{L.p=8,Uc(e,t,a,l)}finally{L.p=r,C.T=n}}function Uc(e,t,a,l){if(nr){var n=Bc(l);if(n===null)jc(e,t,l,ir,a),hm(e,l);else if(Y0(n,e,t,a,l))l.stopPropagation();else if(hm(e,l),t&4&&-1<q0.indexOf(e)){for(;n!==null;){var r=il(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=Ga(r.pendingLanes);if(c!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;c;){var v=1<<31-ut(c);m.entanglements[1]|=v,c&=~v}Yt(r),(he&6)===0&&(qi=ct()+500,wn(0))}}break;case 31:case 13:m=Qa(r,2),m!==null&&rt(m,r,2),Xi(),Oc(r,2)}if(r=Bc(l),r===null&&jc(e,t,l,ir,a),r===n)break;n=r}n!==null&&l.stopPropagation()}else jc(e,t,l,null,a)}}function Bc(e){return e=Gr(e),Hc(e)}var ir=null;function Hc(e){if(ir=null,e=nl(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=S(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ir=e,null}function mm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ah()){case bo:return 2;case So:return 8;case Jn:case Th:return 32;case jo:return 268435456;default:return 32}default:return 32}}var Gc=!1,Ra=null,Da=null,Oa=null,On=new Map,Un=new Map,Ua=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hm(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function Bn(e,t,a,l,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[n]},t!==null&&(t=il(t),t!==null&&dm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Y0(e,t,a,l,n){switch(t){case"focusin":return Ra=Bn(Ra,e,t,a,l,n),!0;case"dragenter":return Da=Bn(Da,e,t,a,l,n),!0;case"mouseover":return Oa=Bn(Oa,e,t,a,l,n),!0;case"pointerover":var r=n.pointerId;return On.set(r,Bn(On.get(r)||null,e,t,a,l,n)),!0;case"gotpointercapture":return r=n.pointerId,Un.set(r,Bn(Un.get(r)||null,e,t,a,l,n)),!0}return!1}function pm(e){var t=nl(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,wo(e.priority,function(){fm(a)});return}}else if(t===31){if(t=S(a),t!==null){e.blockedOn=t,wo(e.priority,function(){fm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Bc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Hr=l,a.target.dispatchEvent(l),Hr=null}else return t=il(a),t!==null&&dm(t),e.blockedOn=a,!1;t.shift()}return!0}function gm(e,t,a){rr(e)&&a.delete(t)}function X0(){Gc=!1,Ra!==null&&rr(Ra)&&(Ra=null),Da!==null&&rr(Da)&&(Da=null),Oa!==null&&rr(Oa)&&(Oa=null),On.forEach(gm),Un.forEach(gm)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gc||(Gc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,X0)))}var cr=null;function vm(e){cr!==e&&(cr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cr===e&&(cr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Hc(l||a)===null)continue;break}var r=il(a);r!==null&&(e.splice(t,3),t-=3,Bs(r,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ll(e){function t(v){return sr(v,e)}Ra!==null&&sr(Ra,e),Da!==null&&sr(Da,e),Oa!==null&&sr(Oa,e),On.forEach(t),Un.forEach(t);for(var a=0;a<Ua.length;a++){var l=Ua[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)pm(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],r=a[l+1],c=n[et]||null;if(typeof r=="function")c||vm(a);else if(c){var m=null;if(r&&r.hasAttribute("formAction")){if(n=r,c=r[et]||null)m=c.formAction;else if(Hc(n)!==null)continue}else m=c.action;typeof m=="function"?a[l+1]=m:(a.splice(l,3),l-=3),vm(a)}}}function ym(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Lc(e){this._internalRoot=e}or.prototype.render=Lc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=vt();om(a,l,e,t,null,null)},or.prototype.unmount=Lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;om(e.current,2,null,e,null,null),Xi(),t[ll]=null}};function or(e){this._internalRoot=e}or.prototype.unstable_scheduleHydration=function(e){if(e){var t=To();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ua.length&&t!==0&&t<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&pm(e)}};var xm=u.version;if(xm!=="19.2.6")throw Error(o(527,xm,"19.2.6"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Q0={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ur.isDisabled&&ur.supportsFiber)try{Vl=ur.inject(Q0),ot=ur}catch{}}return Gn.createRoot=function(e,t){if(!d(e))throw Error(o(299));var a=!1,l="",n=zd,r=Ad,c=Td;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=sm(e,1,!1,null,null,a,l,null,n,r,c,ym),e[ll]=t.current,Sc(e),new Lc(t)},Gn.hydrateRoot=function(e,t,a){if(!d(e))throw Error(o(299));var l=!1,n="",r=zd,c=Ad,m=Td,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=sm(e,1,!0,t,a??null,l,n,v,r,c,m,ym),t.context=cm(null),a=t.current,l=vt(),l=kr(l),n=Sa(l),n.callback=null,ja(a,n,l),a=l,t.current.lanes=a,Kl(t,a),Yt(t),e[ll]=t.current,Sc(e),new or(t)},Gn.version="19.2.6",Gn}var Mm;function eg(){if(Mm)return Xc.exports;Mm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Xc.exports=P0(),Xc.exports}var tg=eg();/**
 * react-router v7.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var km="popstate";function Cm(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function ag(s={}){function u(o,d){var g;let h=(g=d.state)==null?void 0:g.masked,{pathname:p,search:S,hash:x}=h||o.location;return Ic("",{pathname:p,search:S,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default",h?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function f(o,d){return typeof d=="string"?d:Yn(d)}return ng(u,f,null,s)}function ke(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function Qt(s,u){if(!s){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function lg(){return Math.random().toString(36).substring(2,10)}function _m(s,u){return{usr:s.state,key:s.key,idx:u,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Ic(s,u,f=null,o,d){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof u=="string"?Yl(u):u,state:f,key:u&&u.key||o||lg(),mask:d}}function Yn({pathname:s="/",search:u="",hash:f=""}){return u&&u!=="?"&&(s+=u.charAt(0)==="?"?u:"?"+u),f&&f!=="#"&&(s+=f.charAt(0)==="#"?f:"#"+f),s}function Yl(s){let u={};if(s){let f=s.indexOf("#");f>=0&&(u.hash=s.substring(f),s=s.substring(0,f));let o=s.indexOf("?");o>=0&&(u.search=s.substring(o),s=s.substring(0,o)),s&&(u.pathname=s)}return u}function ng(s,u,f,o={}){let{window:d=document.defaultView,v5Compat:h=!1}=o,p=d.history,S="POP",x=null,g=w();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function w(){return(p.state||{idx:null}).idx}function A(){S="POP";let H=w(),U=H==null?null:H-g;g=H,x&&x({action:S,location:G.location,delta:U})}function B(H,U){S="PUSH";let J=Cm(H)?H:Ic(G.location,H,U);g=w()+1;let O=_m(J,g),Z=G.createHref(J.mask||J);try{p.pushState(O,"",Z)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;d.location.assign(Z)}h&&x&&x({action:S,location:G.location,delta:1})}function Y(H,U){S="REPLACE";let J=Cm(H)?H:Ic(G.location,H,U);g=w();let O=_m(J,g),Z=G.createHref(J.mask||J);p.replaceState(O,"",Z),h&&x&&x({action:S,location:G.location,delta:0})}function Q(H){return ig(d,H)}let G={get action(){return S},get location(){return s(d,p)},listen(H){if(x)throw new Error("A history only accepts one active listener");return d.addEventListener(km,A),x=H,()=>{d.removeEventListener(km,A),x=null}},createHref(H){return u(d,H)},createURL:Q,encodeLocation(H){let U=Q(H);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:B,replace:Y,go(H){return p.go(H)}};return G}function ig(s,u,f=!1){let o="http://localhost";s&&(o=s.location.origin!=="null"?s.location.origin:s.location.href),ke(o,"No window.location.(origin|href) available to create URL");let d=typeof u=="string"?u:Yn(u);return d=d.replace(/ $/,"%20"),!f&&d.startsWith("//")&&(d=o+d),new URL(d,o)}function Gm(s,u,f="/"){return rg(s,u,f,!1)}function rg(s,u,f,o,d){let h=typeof u=="string"?Yl(u):u,p=fa(h.pathname||"/",f);if(p==null)return null;let S=sg(s),x=null,g=xg(p);for(let w=0;x==null&&w<S.length;++w)x=vg(S[w],g,o);return x}function sg(s){let u=Lm(s);return cg(u),u}function Lm(s,u=[],f=[],o="",d=!1){let h=(p,S,x=d,g)=>{let w={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:S,route:p};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(o)&&x)return;ke(w.relativePath.startsWith(o),`Absolute route path "${w.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(o.length)}let A=Ut([o,w.relativePath]),B=f.concat(w);p.children&&p.children.length>0&&(ke(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),Lm(p.children,u,B,A,x)),!(p.path==null&&!p.index)&&u.push({path:A,score:pg(A,p.index),routesMeta:B})};return s.forEach((p,S)=>{var x;if(p.path===""||!((x=p.path)!=null&&x.includes("?")))h(p,S);else for(let g of qm(p.path))h(p,S,!0,g)}),u}function qm(s){let u=s.split("/");if(u.length===0)return[];let[f,...o]=u,d=f.endsWith("?"),h=f.replace(/\?$/,"");if(o.length===0)return d?[h,""]:[h];let p=qm(o.join("/")),S=[];return S.push(...p.map(x=>x===""?h:[h,x].join("/"))),d&&S.push(...p),S.map(x=>s.startsWith("/")&&x===""?"/":x)}function cg(s){s.sort((u,f)=>u.score!==f.score?f.score-u.score:gg(u.routesMeta.map(o=>o.childrenIndex),f.routesMeta.map(o=>o.childrenIndex)))}var og=/^:[\w-]+$/,ug=3,dg=2,fg=1,mg=10,hg=-2,Rm=s=>s==="*";function pg(s,u){let f=s.split("/"),o=f.length;return f.some(Rm)&&(o+=hg),u&&(o+=dg),f.filter(d=>!Rm(d)).reduce((d,h)=>d+(og.test(h)?ug:h===""?fg:mg),o)}function gg(s,u){return s.length===u.length&&s.slice(0,-1).every((o,d)=>o===u[d])?s[s.length-1]-u[u.length-1]:0}function vg(s,u,f=!1){let{routesMeta:o}=s,d={},h="/",p=[];for(let S=0;S<o.length;++S){let x=o[S],g=S===o.length-1,w=h==="/"?u:u.slice(h.length)||"/",A=hr({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},w),B=x.route;if(!A&&g&&f&&!o[o.length-1].route.index&&(A=hr({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},w)),!A)return null;Object.assign(d,A.params),p.push({params:d,pathname:Ut([h,A.pathname]),pathnameBase:Ng(Ut([h,A.pathnameBase])),route:B}),A.pathnameBase!=="/"&&(h=Ut([h,A.pathnameBase]))}return p}function hr(s,u){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[f,o]=yg(s.path,s.caseSensitive,s.end),d=u.match(f);if(!d)return null;let h=d[0],p=h.replace(/(.)\/+$/,"$1"),S=d.slice(1);return{params:o.reduce((g,{paramName:w,isOptional:A},B)=>{if(w==="*"){let Q=S[B]||"";p=h.slice(0,h.length-Q.length).replace(/(.)\/+$/,"$1")}const Y=S[B];return A&&!Y?g[w]=void 0:g[w]=(Y||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:p,pattern:s}}function yg(s,u=!1,f=!0){Qt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let o=[],d="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,S,x,g,w)=>{if(o.push({paramName:S,isOptional:x!=null}),x){let A=w.charAt(g+p.length);return A&&A!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(o.push({paramName:"*"}),d+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?d+="\\/*$":s!==""&&s!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),o]}function xg(s){try{return s.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Qt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),s}}function fa(s,u){if(u==="/")return s;if(!s.toLowerCase().startsWith(u.toLowerCase()))return null;let f=u.endsWith("/")?u.length-1:u.length,o=s.charAt(f);return o&&o!=="/"?null:s.slice(f)||"/"}var bg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Sg(s,u="/"){let{pathname:f,search:o="",hash:d=""}=typeof s=="string"?Yl(s):s,h;return f?(f=Xm(f),f.startsWith("/")?h=Dm(f.substring(1),"/"):h=Dm(f,u)):h=u,{pathname:h,search:Eg(o),hash:zg(d)}}function Dm(s,u){let f=pr(u).split("/");return s.split("/").forEach(d=>{d===".."?f.length>1&&f.pop():d!=="."&&f.push(d)}),f.length>1?f.join("/"):"/"}function Kc(s,u,f,o){return`Cannot include a '${s}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jg(s){return s.filter((u,f)=>f===0||u.route.path&&u.route.path.length>0)}function Ym(s){let u=jg(s);return u.map((f,o)=>o===u.length-1?f.pathname:f.pathnameBase)}function ao(s,u,f,o=!1){let d;typeof s=="string"?d=Yl(s):(d={...s},ke(!d.pathname||!d.pathname.includes("?"),Kc("?","pathname","search",d)),ke(!d.pathname||!d.pathname.includes("#"),Kc("#","pathname","hash",d)),ke(!d.search||!d.search.includes("#"),Kc("#","search","hash",d)));let h=s===""||d.pathname==="",p=h?"/":d.pathname,S;if(p==null)S=f;else{let A=u.length-1;if(!o&&p.startsWith("..")){let B=p.split("/");for(;B[0]==="..";)B.shift(),A-=1;d.pathname=B.join("/")}S=A>=0?u[A]:"/"}let x=Sg(d,S),g=p&&p!=="/"&&p.endsWith("/"),w=(h||p===".")&&f.endsWith("/");return!x.pathname.endsWith("/")&&(g||w)&&(x.pathname+="/"),x}var Xm=s=>s.replace(/\/\/+/g,"/"),Ut=s=>Xm(s.join("/")),pr=s=>s.replace(/\/+$/,""),Ng=s=>pr(s).replace(/^\/*/,"/"),Eg=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,zg=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Ag=class{constructor(s,u,f,o=!1){this.status=s,this.statusText=u||"",this.internal=o,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Tg(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function wg(s){let u=s.map(f=>f.route.path).filter(Boolean);return Ut(u)||"/"}var Qm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Vm(s,u){let f=s;if(typeof f!="string"||!bg.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let o=f,d=!1;if(Qm)try{let h=new URL(window.location.href),p=f.startsWith("//")?new URL(h.protocol+f):new URL(f),S=fa(p.pathname,u);p.origin===h.origin&&S!=null?f=S+p.search+p.hash:d=!0}catch{Qt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:d,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Zm=["POST","PUT","PATCH","DELETE"];new Set(Zm);var Mg=["GET",...Zm];new Set(Mg);var Xl=z.createContext(null);Xl.displayName="DataRouter";var yr=z.createContext(null);yr.displayName="DataRouterState";var Km=z.createContext(!1);function kg(){return z.useContext(Km)}var Jm=z.createContext({isTransitioning:!1});Jm.displayName="ViewTransition";var Cg=z.createContext(new Map);Cg.displayName="Fetchers";var _g=z.createContext(null);_g.displayName="Await";var _t=z.createContext(null);_t.displayName="Navigation";var Xn=z.createContext(null);Xn.displayName="Location";var Vt=z.createContext({outlet:null,matches:[],isDataRoute:!1});Vt.displayName="Route";var lo=z.createContext(null);lo.displayName="RouteError";var $m="REACT_ROUTER_ERROR",Rg="REDIRECT",Dg="ROUTE_ERROR_RESPONSE";function Og(s){if(s.startsWith(`${$m}:${Rg}:{`))try{let u=JSON.parse(s.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function Ug(s){if(s.startsWith(`${$m}:${Dg}:{`))try{let u=JSON.parse(s.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new Ag(u.status,u.statusText,u.data)}catch{}}function Bg(s,{relative:u}={}){ke(Qn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:o}=z.useContext(_t),{hash:d,pathname:h,search:p}=Zn(s,{relative:u}),S=h;return f!=="/"&&(S=h==="/"?f:Ut([f,h])),o.createHref({pathname:S,search:p,hash:d})}function Qn(){return z.useContext(Xn)!=null}function Zt(){return ke(Qn(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Xn).location}var Wm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fm(s){z.useContext(_t).static||z.useLayoutEffect(s)}function Vn(){let{isDataRoute:s}=z.useContext(Vt);return s?Ig():Hg()}function Hg(){ke(Qn(),"useNavigate() may be used only in the context of a <Router> component.");let s=z.useContext(Xl),{basename:u,navigator:f}=z.useContext(_t),{matches:o}=z.useContext(Vt),{pathname:d}=Zt(),h=JSON.stringify(Ym(o)),p=z.useRef(!1);return Fm(()=>{p.current=!0}),z.useCallback((x,g={})=>{if(Qt(p.current,Wm),!p.current)return;if(typeof x=="number"){f.go(x);return}let w=ao(x,JSON.parse(h),d,g.relative==="path");s==null&&u!=="/"&&(w.pathname=w.pathname==="/"?u:Ut([u,w.pathname])),(g.replace?f.replace:f.push)(w,g.state,g)},[u,f,h,d,s])}var Gg=z.createContext(null);function Lg(s){let u=z.useContext(Vt).outlet;return z.useMemo(()=>u&&z.createElement(Gg.Provider,{value:s},u),[u,s])}function Zn(s,{relative:u}={}){let{matches:f}=z.useContext(Vt),{pathname:o}=Zt(),d=JSON.stringify(Ym(f));return z.useMemo(()=>ao(s,JSON.parse(d),o,u==="path"),[s,d,o,u])}function qg(s,u){return Im(s,u)}function Im(s,u,f){var H;ke(Qn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=z.useContext(_t),{matches:d}=z.useContext(Vt),h=d[d.length-1],p=h?h.params:{},S=h?h.pathname:"/",x=h?h.pathnameBase:"/",g=h&&h.route;{let U=g&&g.path||"";eh(S,!g||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${S}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let w=Zt(),A;if(u){let U=typeof u=="string"?Yl(u):u;ke(x==="/"||((H=U.pathname)==null?void 0:H.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${U.pathname}" was given in the \`location\` prop.`),A=U}else A=w;let B=A.pathname||"/",Y=B;if(x!=="/"){let U=x.replace(/^\//,"").split("/");Y="/"+B.replace(/^\//,"").split("/").slice(U.length).join("/")}let Q=f&&f.state.matches.length?f.state.matches.map(U=>Object.assign(U,{route:f.manifest[U.route.id]||U.route})):Gm(s,{pathname:Y});Qt(g||Q!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),Qt(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Zg(Q&&Q.map(U=>Object.assign({},U,{params:Object.assign({},p,U.params),pathname:Ut([x,o.encodeLocation?o.encodeLocation(U.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?x:Ut([x,o.encodeLocation?o.encodeLocation(U.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),d,f);return u&&G?z.createElement(Xn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...A},navigationType:"POP"}},G):G}function Yg(){let s=Fg(),u=Tg(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),f=s instanceof Error?s.stack:null,o="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:o},h={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",s),p=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:h},"ErrorBoundary")," or"," ",z.createElement("code",{style:h},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},u),f?z.createElement("pre",{style:d},f):null,p)}var Xg=z.createElement(Yg,null),Pm=class extends z.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,u){return u.location!==s.location||u.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:u.error,location:u.location,revalidation:s.revalidation||u.revalidation}}componentDidCatch(s,u){this.props.onError?this.props.onError(s,u):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const f=Ug(s.digest);f&&(s=f)}let u=s!==void 0?z.createElement(Vt.Provider,{value:this.props.routeContext},z.createElement(lo.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?z.createElement(Qg,{error:s},u):u}};Pm.contextType=Km;var Jc=new WeakMap;function Qg({children:s,error:u}){let{basename:f}=z.useContext(_t);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let o=Og(u.digest);if(o){let d=Jc.get(u);if(d)throw d;let h=Vm(o.location,f);if(Qm&&!Jc.get(u))if(h.isExternal||o.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:o.replace}));throw Jc.set(u,p),p}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return s}function Vg({routeContext:s,match:u,children:f}){let o=z.useContext(Xl);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),z.createElement(Vt.Provider,{value:s},f)}function Zg(s,u=[],f){let o=f==null?void 0:f.state;if(s==null){if(!o)return null;if(o.errors)s=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let d=s,h=o==null?void 0:o.errors;if(h!=null){let w=d.findIndex(A=>A.route.id&&(h==null?void 0:h[A.route.id])!==void 0);ke(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,w+1))}let p=!1,S=-1;if(f&&o){p=o.renderFallback;for(let w=0;w<d.length;w++){let A=d[w];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(S=w),A.route.id){let{loaderData:B,errors:Y}=o,Q=A.route.loader&&!B.hasOwnProperty(A.route.id)&&(!Y||Y[A.route.id]===void 0);if(A.route.lazy||Q){f.isStatic&&(p=!0),S>=0?d=d.slice(0,S+1):d=[d[0]];break}}}}let x=f==null?void 0:f.onError,g=o&&x?(w,A)=>{var B,Y;x(w,{location:o.location,params:((Y=(B=o.matches)==null?void 0:B[0])==null?void 0:Y.params)??{},pattern:wg(o.matches),errorInfo:A})}:void 0;return d.reduceRight((w,A,B)=>{let Y,Q=!1,G=null,H=null;o&&(Y=h&&A.route.id?h[A.route.id]:void 0,G=A.route.errorElement||Xg,p&&(S<0&&B===0?(eh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,H=null):S===B&&(Q=!0,H=A.route.hydrateFallbackElement||null)));let U=u.concat(d.slice(0,B+1)),J=()=>{let O;return Y?O=G:Q?O=H:A.route.Component?O=z.createElement(A.route.Component,null):A.route.element?O=A.route.element:O=w,z.createElement(Vg,{match:A,routeContext:{outlet:w,matches:U,isDataRoute:o!=null},children:O})};return o&&(A.route.ErrorBoundary||A.route.errorElement||B===0)?z.createElement(Pm,{location:o.location,revalidation:o.revalidation,component:G,error:Y,children:J(),routeContext:{outlet:null,matches:U,isDataRoute:!0},onError:g}):J()},null)}function no(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kg(s){let u=z.useContext(Xl);return ke(u,no(s)),u}function Jg(s){let u=z.useContext(yr);return ke(u,no(s)),u}function $g(s){let u=z.useContext(Vt);return ke(u,no(s)),u}function io(s){let u=$g(s),f=u.matches[u.matches.length-1];return ke(f.route.id,`${s} can only be used on routes that contain a unique "id"`),f.route.id}function Wg(){return io("useRouteId")}function Fg(){var o;let s=z.useContext(lo),u=Jg("useRouteError"),f=io("useRouteError");return s!==void 0?s:(o=u.errors)==null?void 0:o[f]}function Ig(){let{router:s}=Kg("useNavigate"),u=io("useNavigate"),f=z.useRef(!1);return Fm(()=>{f.current=!0}),z.useCallback(async(d,h={})=>{Qt(f.current,Wm),f.current&&(typeof d=="number"?await s.navigate(d):await s.navigate(d,{fromRouteId:u,...h}))},[s,u])}var Om={};function eh(s,u,f){!u&&!Om[s]&&(Om[s]=!0,Qt(!1,f))}z.memo(Pg);function Pg({routes:s,manifest:u,future:f,state:o,isStatic:d,onError:h}){return Im(s,void 0,{manifest:u,state:o,isStatic:d,onError:h})}function ev(s){return Lg(s.context)}function yt(s){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function tv({basename:s="/",children:u=null,location:f,navigationType:o="POP",navigator:d,static:h=!1,useTransitions:p}){ke(!Qn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=s.replace(/^\/*/,"/"),x=z.useMemo(()=>({basename:S,navigator:d,static:h,useTransitions:p,future:{}}),[S,d,h,p]);typeof f=="string"&&(f=Yl(f));let{pathname:g="/",search:w="",hash:A="",state:B=null,key:Y="default",mask:Q}=f,G=z.useMemo(()=>{let H=fa(g,S);return H==null?null:{location:{pathname:H,search:w,hash:A,state:B,key:Y,mask:Q},navigationType:o}},[S,g,w,A,B,Y,o,Q]);return Qt(G!=null,`<Router basename="${S}"> is not able to match the URL "${g}${w}${A}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:z.createElement(_t.Provider,{value:x},z.createElement(Xn.Provider,{children:u,value:G}))}function av({children:s,location:u}){return qg(Pc(s),u)}function Pc(s,u=[]){let f=[];return z.Children.forEach(s,(o,d)=>{if(!z.isValidElement(o))return;let h=[...u,d];if(o.type===z.Fragment){f.push.apply(f,Pc(o.props.children,h));return}ke(o.type===yt,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||h.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=Pc(o.props.children,h)),f.push(p)}),f}var fr="get",mr="application/x-www-form-urlencoded";function xr(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function lv(s){return xr(s)&&s.tagName.toLowerCase()==="button"}function nv(s){return xr(s)&&s.tagName.toLowerCase()==="form"}function iv(s){return xr(s)&&s.tagName.toLowerCase()==="input"}function rv(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function sv(s,u){return s.button===0&&(!u||u==="_self")&&!rv(s)}var dr=null;function cv(){if(dr===null)try{new FormData(document.createElement("form"),0),dr=!1}catch{dr=!0}return dr}var ov=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $c(s){return s!=null&&!ov.has(s)?(Qt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mr}"`),null):s}function uv(s,u){let f,o,d,h,p;if(nv(s)){let S=s.getAttribute("action");o=S?fa(S,u):null,f=s.getAttribute("method")||fr,d=$c(s.getAttribute("enctype"))||mr,h=new FormData(s)}else if(lv(s)||iv(s)&&(s.type==="submit"||s.type==="image")){let S=s.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=s.getAttribute("formaction")||S.getAttribute("action");if(o=x?fa(x,u):null,f=s.getAttribute("formmethod")||S.getAttribute("method")||fr,d=$c(s.getAttribute("formenctype"))||$c(S.getAttribute("enctype"))||mr,h=new FormData(S,s),!cv()){let{name:g,type:w,value:A}=s;if(w==="image"){let B=g?`${g}.`:"";h.append(`${B}x`,"0"),h.append(`${B}y`,"0")}else g&&h.append(g,A)}}else{if(xr(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=fr,o=null,d=mr,p=s}return h&&d==="text/plain"&&(p=h,h=void 0),{action:o,method:f.toLowerCase(),encType:d,formData:h,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ro(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function th(s,u,f,o){let d=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return f?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${o}`:d.pathname=`${d.pathname}.${o}`:d.pathname==="/"?d.pathname=`_root.${o}`:u&&fa(d.pathname,u)==="/"?d.pathname=`${pr(u)}/_root.${o}`:d.pathname=`${pr(d.pathname)}.${o}`,d}async function dv(s,u){if(s.id in u)return u[s.id];try{let f=await import(s.module);return u[s.id]=f,f}catch(f){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fv(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function mv(s,u,f){let o=await Promise.all(s.map(async d=>{let h=u.routes[d.route.id];if(h){let p=await dv(h,f);return p.links?p.links():[]}return[]}));return vv(o.flat(1).filter(fv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Um(s,u,f,o,d,h){let p=(x,g)=>f[g]?x.route.id!==f[g].route.id:!0,S=(x,g)=>{var w;return f[g].pathname!==x.pathname||((w=f[g].route.path)==null?void 0:w.endsWith("*"))&&f[g].params["*"]!==x.params["*"]};return h==="assets"?u.filter((x,g)=>p(x,g)||S(x,g)):h==="data"?u.filter((x,g)=>{var A;let w=o.routes[x.route.id];if(!w||!w.hasLoader)return!1;if(p(x,g)||S(x,g))return!0;if(x.route.shouldRevalidate){let B=x.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((A=f[0])==null?void 0:A.params)||{},nextUrl:new URL(s,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof B=="boolean")return B}return!0}):[]}function hv(s,u,{includeHydrateFallback:f}={}){return pv(s.map(o=>{let d=u.routes[o.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),f&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function pv(s){return[...new Set(s)]}function gv(s){let u={},f=Object.keys(s).sort();for(let o of f)u[o]=s[o];return u}function vv(s,u){let f=new Set;return new Set(u),s.reduce((o,d)=>{let h=JSON.stringify(gv(d));return f.has(h)||(f.add(h),o.push({key:h,link:d})),o},[])}function so(){let s=z.useContext(Xl);return ro(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function yv(){let s=z.useContext(yr);return ro(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var co=z.createContext(void 0);co.displayName="FrameworkContext";function oo(){let s=z.useContext(co);return ro(s,"You must render this element inside a <HydratedRouter> element"),s}function xv(s,u){let f=z.useContext(co),[o,d]=z.useState(!1),[h,p]=z.useState(!1),{onFocus:S,onBlur:x,onMouseEnter:g,onMouseLeave:w,onTouchStart:A}=u,B=z.useRef(null);z.useEffect(()=>{if(s==="render"&&p(!0),s==="viewport"){let G=U=>{U.forEach(J=>{p(J.isIntersecting)})},H=new IntersectionObserver(G,{threshold:.5});return B.current&&H.observe(B.current),()=>{H.disconnect()}}},[s]),z.useEffect(()=>{if(o){let G=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(G)}}},[o]);let Y=()=>{d(!0)},Q=()=>{d(!1),p(!1)};return f?s!=="intent"?[h,B,{}]:[h,B,{onFocus:Ln(S,Y),onBlur:Ln(x,Q),onMouseEnter:Ln(g,Y),onMouseLeave:Ln(w,Q),onTouchStart:Ln(A,Y)}]:[!1,B,{}]}function Ln(s,u){return f=>{s&&s(f),f.defaultPrevented||u(f)}}function bv({page:s,...u}){let f=kg(),{router:o}=so(),d=z.useMemo(()=>Gm(o.routes,s,o.basename),[o.routes,s,o.basename]);return d?f?z.createElement(jv,{page:s,matches:d,...u}):z.createElement(Nv,{page:s,matches:d,...u}):null}function Sv(s){let{manifest:u,routeModules:f}=oo(),[o,d]=z.useState([]);return z.useEffect(()=>{let h=!1;return mv(s,u,f).then(p=>{h||d(p)}),()=>{h=!0}},[s,u,f]),o}function jv({page:s,matches:u,...f}){let o=Zt(),{future:d}=oo(),{basename:h}=so(),p=z.useMemo(()=>{if(s===o.pathname+o.search+o.hash)return[];let S=th(s,h,d.v8_trailingSlashAwareDataRequests,"rsc"),x=!1,g=[];for(let w of u)typeof w.route.shouldRevalidate=="function"?x=!0:g.push(w.route.id);return x&&g.length>0&&S.searchParams.set("_routes",g.join(",")),[S.pathname+S.search]},[h,d.v8_trailingSlashAwareDataRequests,s,o,u]);return z.createElement(z.Fragment,null,p.map(S=>z.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...f})))}function Nv({page:s,matches:u,...f}){let o=Zt(),{future:d,manifest:h,routeModules:p}=oo(),{basename:S}=so(),{loaderData:x,matches:g}=yv(),w=z.useMemo(()=>Um(s,u,g,h,o,"data"),[s,u,g,h,o]),A=z.useMemo(()=>Um(s,u,g,h,o,"assets"),[s,u,g,h,o]),B=z.useMemo(()=>{if(s===o.pathname+o.search+o.hash)return[];let G=new Set,H=!1;if(u.forEach(J=>{var Z;let O=h.routes[J.route.id];!O||!O.hasLoader||(!w.some(se=>se.route.id===J.route.id)&&J.route.id in x&&((Z=p[J.route.id])!=null&&Z.shouldRevalidate)||O.hasClientLoader?H=!0:G.add(J.route.id))}),G.size===0)return[];let U=th(s,S,d.v8_trailingSlashAwareDataRequests,"data");return H&&G.size>0&&U.searchParams.set("_routes",u.filter(J=>G.has(J.route.id)).map(J=>J.route.id).join(",")),[U.pathname+U.search]},[S,d.v8_trailingSlashAwareDataRequests,x,o,h,w,u,s,p]),Y=z.useMemo(()=>hv(A,h),[A,h]),Q=Sv(A);return z.createElement(z.Fragment,null,B.map(G=>z.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...f})),Y.map(G=>z.createElement("link",{key:G,rel:"modulepreload",href:G,...f})),Q.map(({key:G,link:H})=>z.createElement("link",{key:G,nonce:f.nonce,...H,crossOrigin:H.crossOrigin??f.crossOrigin})))}function Ev(...s){return u=>{s.forEach(f=>{typeof f=="function"?f(u):f!=null&&(f.current=u)})}}var zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zv&&(window.__reactRouterVersion="7.16.0")}catch{}function Av({basename:s,children:u,useTransitions:f,window:o}){let d=z.useRef();d.current==null&&(d.current=ag({window:o,v5Compat:!0}));let h=d.current,[p,S]=z.useState({action:h.action,location:h.location}),x=z.useCallback(g=>{f===!1?S(g):z.startTransition(()=>S(g))},[f]);return z.useLayoutEffect(()=>h.listen(x),[h,x]),z.createElement(tv,{basename:s,children:u,location:p.location,navigationType:p.action,navigator:h,useTransitions:f})}var ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lh=z.forwardRef(function({onClick:u,discover:f="render",prefetch:o="none",relative:d,reloadDocument:h,replace:p,mask:S,state:x,target:g,to:w,preventScrollReset:A,viewTransition:B,defaultShouldRevalidate:Y,...Q},G){let{basename:H,navigator:U,useTransitions:J}=z.useContext(_t),O=typeof w=="string"&&ah.test(w),Z=Vm(w,H);w=Z.to;let se=Bg(w,{relative:d}),pe=Zt(),I=null;if(S){let Ue=ao(S,[],pe.mask?pe.mask.pathname:"/",!0);H!=="/"&&(Ue.pathname=Ue.pathname==="/"?H:Ut([H,Ue.pathname])),I=U.createHref(Ue)}let[we,qe,st]=xv(o,Q),Fe=Mv(w,{replace:p,mask:S,state:x,target:g,preventScrollReset:A,relative:d,viewTransition:B,defaultShouldRevalidate:Y,useTransitions:J});function de(Ue){u&&u(Ue),Ue.defaultPrevented||Fe(Ue)}let Ht=!(Z.isExternal||h),St=z.createElement("a",{...Q,...st,href:(Ht?I:void 0)||Z.absoluteURL||se,onClick:Ht?de:u,ref:Ev(G,qe),target:g,"data-discover":!O&&f==="render"?"true":void 0});return we&&!O?z.createElement(z.Fragment,null,St,z.createElement(bv,{page:se})):St});lh.displayName="Link";var da=z.forwardRef(function({"aria-current":u="page",caseSensitive:f=!1,className:o="",end:d=!1,style:h,to:p,viewTransition:S,children:x,...g},w){let A=Zn(p,{relative:g.relative}),B=Zt(),Y=z.useContext(yr),{navigator:Q,basename:G}=z.useContext(_t),H=Y!=null&&Dv(A)&&S===!0,U=Q.encodeLocation?Q.encodeLocation(A).pathname:A.pathname,J=B.pathname,O=Y&&Y.navigation&&Y.navigation.location?Y.navigation.location.pathname:null;f||(J=J.toLowerCase(),O=O?O.toLowerCase():null,U=U.toLowerCase()),O&&G&&(O=fa(O,G)||O);const Z=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let se=J===U||!d&&J.startsWith(U)&&J.charAt(Z)==="/",pe=O!=null&&(O===U||!d&&O.startsWith(U)&&O.charAt(U.length)==="/"),I={isActive:se,isPending:pe,isTransitioning:H},we=se?u:void 0,qe;typeof o=="function"?qe=o(I):qe=[o,se?"active":null,pe?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let st=typeof h=="function"?h(I):h;return z.createElement(lh,{...g,"aria-current":we,className:qe,ref:w,style:st,to:p,viewTransition:S},typeof x=="function"?x(I):x)});da.displayName="NavLink";var Tv=z.forwardRef(({discover:s="render",fetcherKey:u,navigate:f,reloadDocument:o,replace:d,state:h,method:p=fr,action:S,onSubmit:x,relative:g,preventScrollReset:w,viewTransition:A,defaultShouldRevalidate:B,...Y},Q)=>{let{useTransitions:G}=z.useContext(_t),H=_v(),U=Rv(S,{relative:g}),J=p.toLowerCase()==="get"?"get":"post",O=typeof S=="string"&&ah.test(S),Z=se=>{if(x&&x(se),se.defaultPrevented)return;se.preventDefault();let pe=se.nativeEvent.submitter,I=(pe==null?void 0:pe.getAttribute("formmethod"))||p,we=()=>H(pe||se.currentTarget,{fetcherKey:u,method:I,navigate:f,replace:d,state:h,relative:g,preventScrollReset:w,viewTransition:A,defaultShouldRevalidate:B});G&&f!==!1?z.startTransition(()=>we()):we()};return z.createElement("form",{ref:Q,method:J,action:U,onSubmit:o?x:Z,...Y,"data-discover":!O&&s==="render"?"true":void 0})});Tv.displayName="Form";function wv(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nh(s){let u=z.useContext(Xl);return ke(u,wv(s)),u}function Mv(s,{target:u,replace:f,mask:o,state:d,preventScrollReset:h,relative:p,viewTransition:S,defaultShouldRevalidate:x,useTransitions:g}={}){let w=Vn(),A=Zt(),B=Zn(s,{relative:p});return z.useCallback(Y=>{if(sv(Y,u)){Y.preventDefault();let Q=f!==void 0?f:Yn(A)===Yn(B),G=()=>w(s,{replace:Q,mask:o,state:d,preventScrollReset:h,relative:p,viewTransition:S,defaultShouldRevalidate:x});g?z.startTransition(()=>G()):G()}},[A,w,B,f,o,d,u,s,h,p,S,x,g])}var kv=0,Cv=()=>`__${String(++kv)}__`;function _v(){let{router:s}=nh("useSubmit"),{basename:u}=z.useContext(_t),f=Wg(),o=s.fetch,d=s.navigate;return z.useCallback(async(h,p={})=>{let{action:S,method:x,encType:g,formData:w,body:A}=uv(h,u);if(p.navigate===!1){let B=p.fetcherKey||Cv();await o(B,f,p.action||S,{defaultShouldRevalidate:p.defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:w,body:A,formMethod:p.method||x,formEncType:p.encType||g,flushSync:p.flushSync})}else await d(p.action||S,{defaultShouldRevalidate:p.defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:w,body:A,formMethod:p.method||x,formEncType:p.encType||g,replace:p.replace,state:p.state,fromRouteId:f,flushSync:p.flushSync,viewTransition:p.viewTransition})},[o,d,u,f])}function Rv(s,{relative:u}={}){let{basename:f}=z.useContext(_t),o=z.useContext(Vt);ke(o,"useFormAction must be used inside a RouteContext");let[d]=o.matches.slice(-1),h={...Zn(s||".",{relative:u})},p=Zt();if(s==null){h.search=p.search;let S=new URLSearchParams(h.search),x=S.getAll("index");if(x.some(w=>w==="")){S.delete("index"),x.filter(A=>A).forEach(A=>S.append("index",A));let w=S.toString();h.search=w?`?${w}`:""}}return(!s||s===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(h.pathname=h.pathname==="/"?f:Ut([f,h.pathname])),Yn(h)}function Dv(s,{relative:u}={}){let f=z.useContext(Jm);ke(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=nh("useViewTransitionState"),d=Zn(s,{relative:u});if(!f.isTransitioning)return!1;let h=fa(f.currentLocation.pathname,o)||f.currentLocation.pathname,p=fa(f.nextLocation.pathname,o)||f.nextLocation.pathname;return hr(d.pathname,p)!=null||hr(d.pathname,h)!=null}const Xt=[{id:1,src:"/IMAGES/anime.jpg",category:"Anime",title:"Anime Character (Riley from the animation Boondocks)",style:"Anime"},{id:2,src:"/IMAGES/anime (2).jpg",category:"Anime",title:"Manga Style",style:"Anime"},{id:3,src:"/IMAGES/anime (3).jpg",category:"Anime",title:"The world shall Know pain(Pain of the Akatsuki from Naruto)",style:"Anime"},{id:4,src:"/IMAGES/blackwork.jpg",category:"Blackwork",title:"Dark Mandala",style:"Blackwork"},{id:5,src:"/IMAGES/blackwork (2).jpg",category:"Blackwork",title:"Bold Lines",style:"Blackwork"},{id:6,src:"/IMAGES/blackwork (3).jpg",category:"Blackwork",title:"Shadow Work",style:"Blackwork"},{id:7,src:"/IMAGES/blackwork (4).jpg",category:"Blackwork",title:"Geometric Dark",style:"Blackwork"},{id:8,src:"/IMAGES/blackwork (5).jpg",category:"Blackwork",title:"Raven Dark",style:"Blackwork"},{id:9,src:"/IMAGES/color.jpg",category:"Color",title:"Vibrant Piece",style:"Color"},{id:10,src:"/IMAGES/color (2).jpg",category:"Color",title:"Color Splash",style:"Color"},{id:11,src:"/IMAGES/color (3).jpg",category:"Color",title:"Watercolor Style",style:"Color"},{id:12,src:"/IMAGES/color (4).jpg",category:"Color",title:"Unique Design",style:"Color"},{id:13,src:"/IMAGES/color (5).jpg",category:"Color",title:"Bold Color Art",style:"Color"},{id:14,src:"/IMAGES/color (6).jpg",category:"Color",title:"Custom Color",style:"Color"},{id:15,src:"/IMAGES/color (7).jpg",category:"Color",title:"Bright Art",style:"Color"},{id:16,src:"/IMAGES/minimalism.jpg",category:"Minimalist",title:"Fine Line Art",style:"Minimalist"},{id:17,src:"/IMAGES/minimalism (2).jpg",category:"Minimalist",title:"Minimal Design",style:"Minimalist"},{id:18,src:"/IMAGES/minimalism (3).jpg",category:"Minimalist",title:"Micro Tattoo",style:"Minimalist"},{id:19,src:"/IMAGES/minimalism (4).jpg",category:"Minimalist",title:"Palm Tree",style:"Minimalist"},{id:20,src:"/IMAGES/realism.jpg",category:"Realism",title:"Portrait Study",style:"Realism"},{id:21,src:"/IMAGES/realism (2).jpg",category:"Realism",title:"Realistic Detail",style:"Realism"},{id:22,src:"/IMAGES/realism (3).jpg",category:"Realism",title:"Hyper Real",style:"Realism"},{id:23,src:"/IMAGES/realism (4).jpg",category:"Realism",title:"Nature Realism",style:"Realism"},{id:24,src:"/IMAGES/sleeve.jpg",category:"Sleeve",title:"Full Sleeve Design",style:"Sleeve"},{id:25,src:"/IMAGES/sleeve (2).jpg",category:"Sleeve",title:"Half Sleeve",style:"Sleeve"},{id:26,src:"/IMAGES/sleeve (3).jpg",category:"Sleeve",title:"Japanese Sleeve",style:"Sleeve"},{id:27,src:"/IMAGES/sleeve (4).jpg",category:"Sleeve",title:"Full Art Sleeve",style:"Sleeve"},{id:28,src:"/IMAGES/sleeve (5).jpg",category:"Sleeve",title:"Sleeve Pattern",style:"Sleeve"},{id:29,src:"/IMAGES/sleeve (6).jpg",category:"Sleeve",title:"Detailed Sleeve",style:"Sleeve"},{id:30,src:"/IMAGES/tribal.jpg",category:"Tribal",title:"Tribal Warrior",style:"Tribal"},{id:31,src:"/IMAGES/tribal (2).jpg",category:"Tribal",title:"Neo Tribal",style:"Tribal"},{id:32,src:"/IMAGES/tribal (3).jpg",category:"Tribal",title:"Traditional Tribal",style:"Tribal"},{id:33,src:"/IMAGES/tribal (4).jpg",category:"Tribal",title:"Tribal Pattern",style:"Tribal"},{id:34,src:"/IMAGES/tribal (5).jpg",category:"Tribal",title:"Polynesian Style",style:"Tribal"},{id:35,src:"/IMAGES/tribal (6).jpg",category:"Tribal",title:"Modern Tribal",style:"Tribal"},{id:36,src:"/IMAGES/tribal (7).jpg",category:"Tribal",title:"Tiger on the chest",style:"Tribal"},{id:37,src:"/IMAGES/tribal (8).jpg",category:"Tribal",title:"Intricate Tribal",style:"Tribal"},{id:38,src:"/IMAGES/LION ___Really love doing this tattoo. Was from a flashsheet I draw last year just imported on the idea with a better reference photo. Really a pleasure to meet at get to tatt._#liontattoo #africatattoo #capetowntattoo",category:"Realism",title:"Lion Portrait",style:"Realism"},{id:39,src:"/IMAGES/#inkedbydils #dilsinktattoo #tattooartistinakure #tattoo #explorepage.jpg",category:"Blackwork",title:"Studio Story",style:"Blackwork"},{id:40,src:"/IMAGES/20+ Botanical Tattoo Ideas (With Meanings & Placements).jpg",category:"Watercolor",title:"Botanical Study",style:"Watercolor"},{id:41,src:"/IMAGES/25 Meaningful Tattoos That Tell a Powerful Story.jpg",category:"Lettering",title:"Meaningful Script",style:"Lettering"},{id:42,src:"/IMAGES/@ chubbinks.jpg",category:"Realism",title:"Portrait Study",style:"Realism"},{id:43,src:"/IMAGES/Dragon ball z and Naruto.jpg",category:"Anime",title:"Anime Fusion",style:"Anime"},{id:44,src:"/IMAGES/Faith.jpg",category:"Lettering",title:"Faith Script",style:"Lettering"},{id:45,src:"/IMAGES/Glory to God.jpg",category:"Lettering",title:"Glory Script",style:"Lettering"},{id:46,src:"/IMAGES/inksink tattoos.jpeg",category:"Blackwork",title:"Studio Flash",style:"Blackwork"},{id:47,src:"/IMAGES/More ink_@tattoo_wrld999.jpg",category:"Color",title:"Color Portrait",style:"Color"},{id:48,src:"/IMAGES/Tattoo design on dark skin tones.jpg",category:"Realism",title:"Skin Tone Study",style:"Realism"},{id:49,src:"/IMAGES/Tattoo.jpg",category:"Blackwork",title:"Bold Tattoo Study",style:"Blackwork"},{id:50,src:"/IMAGES/tatuaje manga.jpg",category:"Anime",title:"Manga Sleeve",style:"Anime"},{id:51,src:"/IMAGES/Trust God_ For Taylor✨ Books open through September!_#losangelestattooartist #blacktattooartist.jpg",category:"Lettering",title:"Trust Script",style:"Lettering"},{id:52,src:"/IMAGES/“We’re All Broken… That’s How The Light Gets In”_For Bookings_ +264817088446_#toxichustlers.jpg",category:"Lettering",title:"Healing Quote",style:"Lettering"},{id:53,src:"/IMAGES/🥀.jpg",category:"Minimalist",title:"Rose Study",style:"Minimalist"},{id:54,src:"/IMAGES/download (1).jpg",category:"Traditional",title:"Flash Study 01",style:"Traditional"},{id:55,src:"/IMAGES/download (2).jpg",category:"Traditional",title:"Flash Study 02",style:"Traditional"},{id:56,src:"/IMAGES/download (3).jpg",category:"Traditional",title:"Flash Study 03",style:"Traditional"},{id:57,src:"/IMAGES/download (4).jpg",category:"Traditional",title:"Flash Study 04",style:"Traditional"},{id:58,src:"/IMAGES/download (5).jpg",category:"Neo-Traditional",title:"Neo Study 01",style:"Neo-Traditional"},{id:59,src:"/IMAGES/download (6).jpg",category:"Neo-Traditional",title:"Neo Study 02",style:"Neo-Traditional"},{id:60,src:"/IMAGES/download (7).jpg",category:"Neo-Traditional",title:"Neo Study 03",style:"Neo-Traditional"},{id:61,src:"/IMAGES/download (8).jpg",category:"Neo-Traditional",title:"Neo Study 04",style:"Neo-Traditional"},{id:62,src:"/IMAGES/download (9).jpg",category:"Geometric",title:"Geo Study 01",style:"Geometric"},{id:63,src:"/IMAGES/download (10).jpg",category:"Geometric",title:"Geo Study 02",style:"Geometric"},{id:64,src:"/IMAGES/download (11).jpg",category:"Geometric",title:"Geo Study 03",style:"Geometric"},{id:65,src:"/IMAGES/download (12).jpg",category:"Geometric",title:"Geo Study 04",style:"Geometric"},{id:66,src:"/IMAGES/download (13).jpg",category:"Watercolor",title:"Watercolor Study 01",style:"Watercolor"},{id:67,src:"/IMAGES/download (14).jpg",category:"Watercolor",title:"Watercolor Study 02",style:"Watercolor"},{id:68,src:"/IMAGES/download (15).jpg",category:"Watercolor",title:"Watercolor Study 03",style:"Watercolor"},{id:69,src:"/IMAGES/download (16).jpg",category:"Watercolor",title:"Watercolor Study 04",style:"Watercolor"},{id:70,src:"/IMAGES/download (17).jpg",category:"Watercolor",title:"Watercolor Study 05",style:"Watercolor"},{id:71,src:"/IMAGES/download (18).jpg",category:"Watercolor",title:"Watercolor Study 06",style:"Watercolor"}],Ov=[{id:101,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.11 PM.jpeg",title:"Studio process shot 01",note:"Mid session shot"},{id:102,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.11 PM (1).jpeg",title:"Studio process shot 02",note:"Needlework in progress"},{id:103,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.12 PM.jpeg",title:"Studio process shot 03",note:"Linework close-up"},{id:104,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.12 PM (1).jpeg",title:"Studio process shot 04",note:"Detail pass"},{id:105,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.12 PM (2).jpeg",title:"Studio process shot 05",note:"Ink application"},{id:106,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.13 PM.jpeg",title:"Studio process shot 06",note:"Stencil alignment"},{id:107,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.13 PM (1).jpeg",title:"Studio process shot 07",note:"Working angle"},{id:108,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.14 PM.jpeg",title:"Studio process shot 08",note:"Session underway"},{id:109,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.14 PM (1).jpeg",title:"Studio process shot 09",note:"Final touches"},{id:110,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.15 PM.jpeg",title:"Studio process shot 10",note:"Mid-session capture"},{id:111,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.15 PM (1).jpeg",title:"Studio process shot 11",note:"Precision detail"},{id:112,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.15 PM (2).jpeg",title:"Studio process shot 12",note:"Finishing up"},{id:113,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.16 PM.jpeg",title:"Studio process shot 13",note:"Angle check"},{id:114,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.16 PM (1).jpeg",title:"Studio process shot 14",note:"Ink refill😅"},{id:115,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.16 PM (2).jpeg",title:"Studio process shot 15",note:"Clean session flow"},{id:116,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.17 PM.jpeg",title:"Studio process shot 16",note:"Final review"},{id:117,src:"/IMAGES/WhatsApp Image 2026-05-30 at 4.09.17 PM (1).jpeg",title:"Studio process shot 17",note:"Almost there"}],xe={name:"Barry Mageto",studioName:"InkSink Tattoos",location:"Ruiru Town, Kenya",phone:"0757763420",instagram:"@Inksink_tattoos",instagramUrl:"https://instagram.com/Inksink_tattoos",email:"inksink.tattoos@gmail.com",hours:"8:00 AM – 8:00 PM, Daily",experience:"5+ years",specialties:["Anime","Blackwork","Realism","Tribal","Minimalist","Color","Lettering"],bio:"Barry Mageto is the creative force behind InkSink Tattoos, bringing visions to life with precision, passion, and a deep respect for the art form. Based in Ruiru Town, Barry has built a reputation for delivering premium tattoo experiences — whether you walk into the studio or book a house call.",bioExtended:"With a keen eye for detail and a versatile style range from hyper-realistic portraits to bold anime pieces, Barry treats every tattoo as a unique masterpiece. Each session begins with a thorough consultation to understand your vision, followed by custom design work that ensures your ink is truly one of a kind."},ih=[{id:"c1",name:"James Mwangi",phone:"0712345678",email:"james.m@email.com",previousTattoos:[{style:"Tribal",placement:"Arm",date:"2025-11-15",cost:8e3},{style:"Lettering",placement:"Chest",date:"2026-02-20",cost:5e3}],preferences:"Prefers bold black lines",allergies:"None",notes:"Regular client, always on time",totalSpent:13e3,lastVisit:"2026-02-20",joinDate:"2025-11-15",reviews:[{rating:5,text:"Barry is incredible! Best tattoo experience ever.",date:"2025-12-01"}]},{id:"c2",name:"Aisha Wanjiku",phone:"0723456789",email:"aisha.w@email.com",previousTattoos:[{style:"Minimalist",placement:"Wrist",date:"2026-01-10",cost:3e3}],preferences:"Fine line work, delicate designs",allergies:"Sensitive skin — needs hypoallergenic ink",notes:"Referred by James",totalSpent:3e3,lastVisit:"2026-01-10",joinDate:"2026-01-10",reviews:[{rating:5,text:"So gentle and precise! My minimalist tattoo is perfect.",date:"2026-01-25"}]},{id:"c3",name:"Kevin Otieno",phone:"0734567890",email:"kevin.o@email.com",previousTattoos:[{style:"Anime",placement:"Back",date:"2025-09-05",cost:15e3},{style:"Anime",placement:"Arm",date:"2026-01-18",cost:12e3},{style:"Color",placement:"Leg",date:"2026-04-12",cost:1e4}],preferences:"Anime/manga style, vibrant colors",allergies:"None",notes:"Big anime fan, wants full sleeve eventually",totalSpent:37e3,lastVisit:"2026-04-12",joinDate:"2025-09-05",reviews:[{rating:5,text:"Barry nailed my Naruto piece! Planning my next one already.",date:"2025-10-01"}]},{id:"c4",name:"Grace Njeri",phone:"0745678901",email:"grace.n@email.com",previousTattoos:[{style:"Realism",placement:"Forearm",date:"2026-03-22",cost:2e4}],preferences:"Realistic portraits, grayscale",allergies:"None",notes:"Wants memorial portrait of grandmother",totalSpent:2e4,lastVisit:"2026-03-22",joinDate:"2026-03-22",reviews:[{rating:5,text:"The portrait looks EXACTLY like her. I cried. Thank you Barry.",date:"2026-04-10"}]},{id:"c5",name:"David Kamau",phone:"0756789012",email:"david.k@email.com",previousTattoos:[{style:"Blackwork",placement:"Chest",date:"2026-04-05",cost:18e3}],preferences:"Heavy blackwork, geometric patterns",allergies:"None",notes:"House call — Thika Road area",totalSpent:18e3,lastVisit:"2026-04-05",joinDate:"2026-04-05",reviews:[]},{id:"c6",name:"Faith Adhiambo",phone:"0767890123",email:"faith.a@email.com",previousTattoos:[{style:"Color",placement:"Shoulder",date:"2026-05-01",cost:7e3},{style:"Minimalist",placement:"Ankle",date:"2026-05-15",cost:3500}],preferences:"Floral designs, watercolor",allergies:"Latex allergy — use nitrile gloves",notes:"Very creative, brings great references",totalSpent:10500,lastVisit:"2026-05-15",joinDate:"2026-05-01",reviews:[{rating:4,text:"Beautiful work! The colors are amazing.",date:"2026-05-20"}]},{id:"c7",name:"Brian Omondi",phone:"0778901234",email:"brian.o@email.com",previousTattoos:[{style:"Sleeve",placement:"Full Sleeve",date:"2025-12-01",cost:45e3}],preferences:"Japanese-style sleeves",allergies:"None",notes:"Multi-session sleeve project — 3 sessions completed",totalSpent:45e3,lastVisit:"2026-03-10",joinDate:"2025-12-01",reviews:[{rating:5,text:"Worth every penny. My sleeve is a masterpiece.",date:"2026-03-20"}]},{id:"c8",name:"Mercy Wambui",phone:"0789012345",email:"mercy.w@email.com",previousTattoos:[],preferences:"First timer — small minimalist piece",allergies:"None",notes:"New client, first tattoo ever. Be extra patient.",totalSpent:0,lastVisit:null,joinDate:"2026-05-28",reviews:[]}],xt=new Date,bt=s=>s.toISOString().split("T")[0],rh=[{id:"a1",clientName:"Kevin Otieno",clientPhone:"0734567890",clientId:"c3",tattooType:"Anime sleeve continuation",style:"Anime",placement:"Arm",time:"09:00",duration:"3 hours",notes:"Session 2 of 4 — outline work on upper arm",depositPaid:!0,depositAmount:4e3,totalCost:12e3,status:"confirmed",date:bt(xt)},{id:"a2",clientName:"Mercy Wambui",clientPhone:"0789012345",clientId:"c8",tattooType:"Small infinity symbol",style:"Minimalist",placement:"Wrist",time:"13:00",duration:"1 hour",notes:"First tattoo — walk through aftercare thoroughly",depositPaid:!0,depositAmount:1e3,totalCost:3e3,status:"confirmed",date:bt(xt)},{id:"a3",clientName:"Faith Adhiambo",clientPhone:"0767890123",clientId:"c6",tattooType:"Floral back piece",style:"Color",placement:"Back",time:"15:00",duration:"4 hours",notes:"Bring reference photos she sent on WhatsApp",depositPaid:!1,depositAmount:5e3,totalCost:15e3,status:"confirmed",date:bt(xt)},{id:"a4",clientName:"James Mwangi",clientPhone:"0712345678",clientId:"c1",tattooType:"Tribal leg piece",style:"Tribal",placement:"Leg",time:"10:00",duration:"2 hours",notes:"",depositPaid:!0,depositAmount:3e3,totalCost:1e4,status:"confirmed",date:(()=>{const s=new Date(xt);return s.setDate(s.getDate()+1),bt(s)})()},{id:"a5",clientName:"David Kamau",clientPhone:"0756789012",clientId:"c5",tattooType:"Geometric chest extension",style:"Blackwork",placement:"Chest",time:"14:00",duration:"3 hours",notes:"House call — Thika Road. Confirm address before.",depositPaid:!0,depositAmount:6e3,totalCost:2e4,status:"confirmed",date:(()=>{const s=new Date(xt);return s.setDate(s.getDate()+2),bt(s)})()}],sh=[{id:"r1",clientName:"Samuel Kiprop",clientEmail:"samuel.k@email.com",clientPhone:"0790123456",tattooIdea:"I want a lion with a crown, looking fierce but regal. African-inspired with some tribal elements around it.",placement:"Back",size:"Large",style:"Realism",colorType:"Blackwork",budget:"15000-20000",referenceImages:["/IMAGES/LION ___Really love doing this tattoo. Was from a flashsheet I draw last year just imported on the idea with a better reference photo. Really a pleasure to meet at get to tatt._#liontattoo #africatattoo #capetowntattoo"],preferredDate:(()=>{const s=new Date(xt);return s.setDate(s.getDate()+5),bt(s)})(),painTolerance:7,status:"pending",createdAt:(()=>{const s=new Date(xt);return s.setDate(s.getDate()-1),bt(s)})(),notes:""},{id:"r2",clientName:"Diana Moraa",clientEmail:"diana.m@email.com",clientPhone:"0701234567",tattooIdea:"Small butterfly on my collarbone, very delicate and feminine. Maybe with some dotwork.",placement:"Neck",size:"Small",style:"Minimalist",colorType:"Blackwork",budget:"3000-5000",referenceImages:[],preferredDate:(()=>{const s=new Date(xt);return s.setDate(s.getDate()+7),bt(s)})(),painTolerance:4,status:"pending",createdAt:bt(xt),notes:""},{id:"r3",clientName:"Martin Njoroge",clientEmail:"martin.n@email.com",clientPhone:"0712345679",tattooIdea:"Full color Goku from Dragon Ball Z, powering up with energy aura. Want it to look epic.",placement:"Arm",size:"Large",style:"Anime",colorType:"Full Color",budget:"20000+",referenceImages:[],preferredDate:(()=>{const s=new Date(xt);return s.setDate(s.getDate()+10),bt(s)})(),painTolerance:8,status:"pending",createdAt:(()=>{const s=new Date(xt);return s.setDate(s.getDate()-2),bt(s)})(),notes:""},{id:"r4",clientName:"Cynthia Akinyi",clientEmail:"cynthia.a@email.com",clientPhone:"0723456780",tattooIdea:"Matching couple tattoo — sun and moon design. My partner wants the sun, I want the moon. Fine line work.",placement:"Forearm",size:"Medium",style:"Minimalist",colorType:"Blackwork",budget:"5000-10000",referenceImages:[],preferredDate:(()=>{const s=new Date(xt);return s.setDate(s.getDate()+14),bt(s)})(),painTolerance:5,status:"pending",createdAt:bt(xt),notes:"This is for two people — both want matching designs"}],uo=[{id:"rev1",clientName:"Peter Oronyi",rating:5,text:"Barry absolutely NAILED my Boondocks piece! The detail is insane, and his anime style is on another level. Already planning my next session. InkSink is the only place I trust with my ink.",style:"Anime",date:"2025-10-01"},{id:"rev2",clientName:"Edwin Omondi",rating:5,text:"I wanted a memorial portrait of my grandmother, and Barry made it look EXACTLY like her. I literally cried when I saw it. His realism work is world-class. Thank you, Barry.",style:"Realism",date:"2026-04-10"},{id:"rev3",clientName:"Brian Omondi",rating:5,text:"My Japanese sleeve is a masterpiece. Three sessions in and every time I come back, Barry exceeds my expectations. Worth every shilling. The studio atmosphere is fire too.",style:"Sleeve",date:"2026-03-20"},{id:"rev4",clientName:"Aisha Wanjiku",rating:5,text:"I was so nervous about my first tattoo but Barry made me feel completely comfortable. He was patient, gentle, and the result is gorgeous. My minimalist wrist piece is exactly what I wanted.",style:"Minimalist",date:"2026-01-25"},{id:"rev5",clientName:"Faith Adhiambo",rating:4,text:"Beautiful work! The watercolor-style colors on my shoulder piece are amazing. Barry has a real gift for color work. Only wish the session was a bit shorter but the result is 100% worth it.",style:"Color",date:"2026-05-20"},{id:"rev6",clientName:"James Mwangi",rating:5,text:"Barry is incredible! Best tattoo experience I've ever had. Clean studio, professional setup, and the tribal work is authentic and powerful. Already got my second piece done here.",style:"Tribal",date:"2025-12-01"}],ch={totalToday:0,totalThisWeek:58e3,totalThisMonth:186500,totalAllTime:656500,weeklyBreakdown:[{day:"Mon",amount:12e3},{day:"Tue",amount:8e3},{day:"Wed",amount:15e3},{day:"Thu",amount:5e3},{day:"Fri",amount:18e3},{day:"Sat",amount:0},{day:"Sun",amount:0}],monthlyBreakdown:[{month:"Jan",amount:95e3},{month:"Feb",amount:72e3},{month:"Mar",amount:118e3},{month:"Apr",amount:145e3},{month:"May",amount:186500}],popularStyles:[{style:"Anime",percentage:28,count:14},{style:"Blackwork",percentage:22,count:11},{style:"Realism",percentage:18,count:9},{style:"Minimalist",percentage:14,count:7},{style:"Color",percentage:10,count:5},{style:"Tribal",percentage:8,count:4}],peakHours:[{hour:"8-10 AM",bookings:3},{hour:"10-12 PM",bookings:8},{hour:"12-2 PM",bookings:12},{hour:"2-4 PM",bookings:15},{hour:"4-6 PM",bookings:10},{hour:"6-8 PM",bookings:6}],depositsCollected:124e3,depositsPending:18e3,clientRetentionRate:68,averageSessionValue:12400},Uv=["All","Anime","Blackwork","Realism","Tribal","Minimalist","Color","Sleeve","Lettering","Traditional","Neo-Traditional","Geometric","Watercolor"],Bv=["Arm","Forearm","Back","Chest","Leg","Thigh","Shoulder","Ribs","Neck","Hand","Finger","Ankle","Foot","Full Sleeve","Half Sleeve","Wrist","Other"],Hv=["Anime","Blackwork","Realism","Tribal","Minimalist","Color","Lettering","Geometric","Portrait","Traditional","Neo-Traditional","Watercolor","Custom"],Gv=[{label:"Small",description:"2-4 inches",estimatedTime:"1-2 hours",priceRange:"2,000 - 5,000 KES"},{label:"Medium",description:"4-6 inches",estimatedTime:"2-4 hours",priceRange:"5,000 - 12,000 KES"},{label:"Large",description:"6-10 inches",estimatedTime:"4-6 hours",priceRange:"12,000 - 25,000 KES"},{label:"Extra Large",description:"10+ inches",estimatedTime:"6+ hours",priceRange:"25,000+ KES"}],Lv=["Under 2,000 KES","2,000 - 5,000 KES","5,000 - 10,000 KES","10,000 - 20,000 KES","20,000+ KES"],eo=[{value:"08:00",label:"08:00 AM"},{value:"09:00",label:"09:00 AM"},{value:"10:00",label:"10:00 AM"},{value:"11:00",label:"11:00 AM"},{value:"12:00",label:"12:00 PM"},{value:"13:00",label:"01:00 PM"},{value:"14:00",label:"02:00 PM"},{value:"15:00",label:"03:00 PM"},{value:"16:00",label:"04:00 PM"},{value:"17:00",label:"05:00 PM"},{value:"18:00",label:"06:00 PM"},{value:"19:00",label:"07:00 PM"}];function qv(s){return!!(s!=null&&s.preferredDate&&(s!=null&&s.preferredTime)&&!["declined","cancelled"].includes(s.status))}function oh(s){const u=((s==null?void 0:s.appointments)||[]).filter(o=>(o==null?void 0:o.date)&&(o==null?void 0:o.time)&&o.status!=="cancelled").map(o=>({id:o.id,date:o.date,time:o.time,source:"appointment"})),f=[...(s==null?void 0:s.requests)||[],...(s==null?void 0:s.bookings)||[]].filter(qv).map(o=>({id:o.id,date:o.preferredDate,time:o.preferredTime,source:"request"}));return[...u,...f]}function uh(s,u){return new Set(oh(s).filter(f=>f.date===u).map(f=>f.time))}function gr(s,u,f){return!u||!f?!1:!uh(s,u).has(f)}function Bm(s,u){const f=uh(s,u);return{bookedCount:f.size,totalSlots:eo.length,fullyBooked:f.size>=eo.length,bookedTimes:f}}const dh=z.createContext(null);function Yv(){try{const s=localStorage.getItem("inksink-state");if(s)return JSON.parse(s)}catch(s){console.warn("Failed to load state from localStorage:",s)}return null}const Xv=Yv()||{clients:ih,appointments:rh,requests:sh,reviews:uo,earnings:ch,portfolio:Xt,bookings:[],isAuthenticated:!1};function Qv(s,u){switch(u.type){case"LOGIN":return{...s,isAuthenticated:!0};case"LOGOUT":return{...s,isAuthenticated:!1};case"ADD_BOOKING":return gr(s,u.payload.preferredDate,u.payload.preferredTime)?{...s,requests:[u.payload,...s.requests]}:s;case"UPDATE_REQUEST_STATUS":return{...s,requests:s.requests.map(f=>f.id===u.payload.id?{...f,status:u.payload.status,notes:u.payload.notes||f.notes}:f)};case"ADD_APPOINTMENT":return gr(s,u.payload.date,u.payload.time)?{...s,appointments:[...s.appointments,u.payload]}:s;case"UPDATE_APPOINTMENT":return{...s,appointments:s.appointments.map(f=>f.id===u.payload.id?{...f,...u.payload}:f)};case"ADD_CLIENT":return{...s,clients:[...s.clients,u.payload]};case"UPDATE_CLIENT":return{...s,clients:s.clients.map(f=>f.id===u.payload.id?{...f,...u.payload}:f)};case"ADD_REVIEW":return{...s,reviews:[u.payload,...s.reviews]};case"RESET_DATA":return localStorage.removeItem("inksink-state"),{clients:ih,appointments:rh,requests:sh,reviews:uo,earnings:ch,portfolio:Xt,bookings:[],isAuthenticated:!1};default:return s}}function Vv({children:s}){const[u,f]=z.useReducer(Qv,Xv);return z.useEffect(()=>{try{localStorage.setItem("inksink-state",JSON.stringify(u))}catch(o){console.warn("Failed to save state:",o)}},[u]),i.jsx(dh.Provider,{value:{state:u,dispatch:f},children:s})}function Bt(){const s=z.useContext(dh);if(!s)throw new Error("useApp must be used within AppProvider");return s}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kv=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(u,f,o)=>o?o.toUpperCase():f.toLowerCase()),Hm=s=>{const u=Kv(s);return u.charAt(0).toUpperCase()+u.slice(1)},fh=(...s)=>s.filter((u,f,o)=>!!u&&u.trim()!==""&&o.indexOf(u)===f).join(" ").trim(),Jv=s=>{for(const u in s)if(u.startsWith("aria-")||u==="role"||u==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=z.forwardRef(({color:s="currentColor",size:u=24,strokeWidth:f=2,absoluteStrokeWidth:o,className:d="",children:h,iconNode:p,...S},x)=>z.createElement("svg",{ref:x,...$v,width:u,height:u,stroke:s,strokeWidth:o?Number(f)*24/Number(u):f,className:fh("lucide",d),...!h&&!Jv(S)&&{"aria-hidden":"true"},...S},[...p.map(([g,w])=>z.createElement(g,w)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=(s,u)=>{const f=z.forwardRef(({className:o,...d},h)=>z.createElement(Wv,{ref:h,iconNode:u,className:fh(`lucide-${Zv(Hm(s))}`,`lucide-${s}`,o),...d}));return f.displayName=Hm(s),f};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Iv=ae("arrow-left",Fv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],mh=ae("arrow-right",Pv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ty=ae("bell",ey);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5",key:"1glfrc"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]],ly=ae("calendar-plus",ay);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],vr=ae("calendar",ny);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],hh=ae("camera",iy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],sy=ae("car-front",ry);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ph=ae("chevron-left",cy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],br=ae("chevron-right",oy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],gh=ae("circle-alert",uy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],vh=ae("circle-check-big",dy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]],my=ae("circle-play",fy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],py=ae("circle-x",hy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],vy=ae("clipboard-check",gy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]],fo=ae("clock-3",yy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Sr=ae("clock",xy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],mo=ae("dollar-sign",by);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ho=ae("eye",Sy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]],Ny=ae("heart-handshake",jy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],zy=ae("house",Ey);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]],Ty=ae("images",Ay);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],My=ae("inbox",wy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],yh=ae("instagram",ky);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],_y=ae("layout-dashboard",Cy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Dy=ae("log-out",Ry);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],jr=ae("mail",Oy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ql=ae("map-pin",Uy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],Hy=ae("menu",By);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],Ly=ae("paperclip",Gy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Yy=ae("pen",qy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],po=ae("phone",Xy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Vy=ae("save",Qy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],xh=ae("search",Zy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Jy=ae("send",Ky);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Wy=ae("settings",$y);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],go=ae("shield-check",Fy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],vo=ae("sparkles",Iy);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],bh=ae("star",Py);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Wc=ae("trending-up",ex);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ax=ae("user",tx);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],nx=ae("users",lx);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rx=ae("x",ix);function sx(){const[s,u]=z.useState(!1),f=Zt();z.useEffect(()=>{const d=()=>{u(window.scrollY>20)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]),z.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[f]);const o=[{to:"/",label:"Home",icon:zy},{to:"/portfolio",label:"Portfolio",icon:Ty},{to:"/process",label:"Process",icon:hh},{to:"/contact",label:"Contact",icon:jr},{to:"/book",label:"Book Now",icon:ly,emphasis:!0}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: var(--z-sticky);
          transition: all var(--transition-base);
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: var(--border-glass);
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        .brand {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: 1px;
        }
        .nav-links {
          display: flex;
          gap: var(--space-xl);
          align-items: center;
        }
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: color var(--transition-fast);
        }
        .nav-link:hover, .nav-link.active {
          color: var(--accent-glow);
        }
        .mobile-dock {
          display: none;
        }

        .dock-link {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 10px 8px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all var(--transition-fast);
          position: relative;
        }

        .dock-link:hover,
        .dock-link.active {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .dock-link.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          width: 26px;
          height: 3px;
          border-radius: 999px;
          background: var(--accent-primary);
          box-shadow: var(--glow-purple);
        }

        .dock-link.emphasis {
          color: white;
          background: var(--gradient-hero);
          box-shadow: var(--glow-purple);
        }

        .dock-link.emphasis:hover,
        .dock-link.emphasis.active {
          color: white;
          background: var(--gradient-hero);
        }

        .dock-label {
          font-size: 0.7rem;
          font-weight: 600;
          line-height: 1;
          text-align: center;
        }

        @keyframes floatDock {
          0% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-6px); }
          100% { transform: translateX(-50%) translateY(0px); }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-dock {
            position: fixed;
            left: 50%;
            bottom: max(24px, env(safe-area-inset-bottom) + 14px);
            transform: translateX(-50%);
            display: flex;
            align-items: stretch;
            gap: 6px;
            width: min(94vw, 560px);
            padding: 8px;
            border-radius: 22px;
            background: rgba(18, 18, 26, 0.92);
            backdrop-filter: blur(18px);
            border: var(--border-glass);
            box-shadow: var(--shadow-xl), 0 10px 30px rgba(0, 0, 0, 0.5);
            z-index: var(--z-sticky);
            animation: floatDock 4s ease-in-out infinite;
          }

          body {
            padding-bottom: 114px;
          }
        }
      `}),i.jsx("header",{className:`navbar ${s?"scrolled":""}`,children:i.jsxs("div",{className:"container navbar-container",children:[i.jsxs(da,{to:"/",className:"brand",children:[i.jsx("span",{className:"gradient-text",children:"IS"})," ",xe.studioName.split(" ")[0]]}),i.jsxs("nav",{className:"nav-links",children:[i.jsx(da,{to:"/",className:({isActive:d})=>d?"nav-link active":"nav-link",children:"Home"}),i.jsx(da,{to:"/portfolio",className:({isActive:d})=>d?"nav-link active":"nav-link",children:"Portfolio"}),i.jsx(da,{to:"/process",className:({isActive:d})=>d?"nav-link active":"nav-link",children:"Process"}),i.jsx(da,{to:"/contact",className:({isActive:d})=>d?"nav-link active":"nav-link",children:"Contact"}),i.jsx(da,{to:"/book",className:"btn btn-primary btn-sm",style:{padding:"8px 20px"},children:"Book Now"})]})]})}),i.jsx("nav",{className:"mobile-dock","aria-label":"Primary mobile navigation",children:o.map(({to:d,label:h,icon:p,emphasis:S})=>i.jsxs(da,{to:d,className:({isActive:x})=>`dock-link ${x?"active":""} ${S?"emphasis":""}`,"aria-label":h,children:[i.jsx(p,{size:20}),i.jsx("span",{className:"dock-label",children:h})]},d))})]})}function cx(){const[s,u]=z.useState(!1),{state:f,dispatch:o}=Bt(),d=Vn(),h=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),p=f.requests.filter(g=>g.status==="pending").length,S=()=>{o({type:"LOGOUT"}),d("/login")},x=[{to:"/dashboard",label:"Overview",icon:i.jsx(_y,{size:20}),exact:!0},{to:"/dashboard/requests",label:"Requests",icon:i.jsx(My,{size:20}),badge:p>0?p:null},{to:"/dashboard/calendar",label:"Calendar",icon:i.jsx(vr,{size:20})},{to:"/dashboard/clients",label:"Clients",icon:i.jsx(nx,{size:20})},{to:"/dashboard/earnings",label:"Earnings",icon:i.jsx(mo,{size:20})}];return i.jsxs("div",{className:"dashboard-container",children:[i.jsx("style",{children:`
        .dashboard-container {
          display: flex;
          height: 100vh;
          overflow: hidden;
          background: var(--bg-primary);
        }
        
        /* Sidebar */
        .sidebar {
          width: 260px;
          background: var(--bg-secondary);
          border-right: var(--border-glass);
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-base);
          z-index: var(--z-sticky);
        }
        
        .sidebar-header {
          padding: var(--space-lg);
          border-bottom: var(--border-glass);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .artist-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--gradient-hero);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
          box-shadow: var(--glow-purple);
        }
        
        .sidebar-nav {
          flex: 1;
          padding: var(--space-md);
          display: flex;
          flex-direction: column;
          gap: 8px;
          overflow-y: auto;
        }
        
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        
        .nav-item:hover {
          background: rgba(255,255,255,0.05);
          color: var(--text-primary);
        }
        
        .nav-item.active {
          background: var(--accent-primary-dim);
          color: var(--accent-glow);
          box-shadow: inset 3px 0 0 var(--accent-primary);
        }
        
        .nav-badge {
          margin-left: auto;
          background: var(--accent-hot);
          color: white;
          font-size: 0.75rem;
          font-weight: bold;
          padding: 2px 8px;
          border-radius: 10px;
        }
        
        .sidebar-footer {
          padding: var(--space-md);
          border-top: var(--border-glass);
        }
        
        /* Main Content */
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .topbar {
          height: 70px;
          background: var(--bg-glass);
          backdrop-filter: blur(10px);
          border-bottom: var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 var(--space-lg);
        }
        
        .topbar-left, .topbar-right {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        
        .search-bar {
          position: relative;
          width: 300px;
        }
        
        .search-bar input {
          width: 100%;
          padding-left: 40px;
          border-radius: var(--radius-full);
          height: 40px;
        }
        
        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        
        .action-btn {
          position: relative;
          background: var(--bg-card);
          border: var(--border-glass);
          color: var(--text-secondary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        
        .action-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
        }
        
        .action-dot {
          position: absolute;
          top: 8px;
          right: 10px;
          width: 8px;
          height: 8px;
          background: var(--accent-hot);
          border-radius: 50%;
          box-shadow: var(--glow-red);
        }
        
        .content-area {
          flex: 1;
          overflow-y: auto;
          padding: var(--space-xl);
        }
        
        @media (max-width: 992px) {
          .sidebar {
            position: absolute;
            height: 100%;
            transform: translateX(-100%);
          }
          
          .sidebar.open {
            transform: translateX(0);
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .search-bar {
            display: none;
          }
        }
      `}),s&&i.jsx("div",{className:"fixed inset-0 bg-black/50 z-[190] lg:hidden",style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:190},onClick:()=>u(!1)}),i.jsxs("aside",{className:`sidebar ${s?"open":""}`,children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsx("div",{className:"artist-avatar",children:xe.name.charAt(0)}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:600},children:xe.name}),i.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Artist Dashboard"})]})]}),i.jsx("nav",{className:"sidebar-nav",children:x.map(g=>i.jsxs(da,{to:g.to,end:g.exact,className:({isActive:w})=>`nav-item ${w?"active":""}`,onClick:()=>u(!1),children:[g.icon,g.label,g.badge&&i.jsx("span",{className:"nav-badge",children:g.badge})]},g.to))}),i.jsxs("div",{className:"sidebar-footer",children:[i.jsxs("button",{className:"nav-item",style:{width:"100%",background:"none",border:"none",cursor:"pointer"},children:[i.jsx(Wy,{size:20}),"Settings"]}),i.jsxs("button",{onClick:S,className:"nav-item",style:{width:"100%",background:"none",border:"none",cursor:"pointer",color:"var(--accent-hot)"},children:[i.jsx(Dy,{size:20}),"Sign Out"]})]})]}),i.jsxs("main",{className:"main-content",children:[i.jsxs("header",{className:"topbar",children:[i.jsxs("div",{className:"topbar-left",children:[i.jsx("button",{className:"mobile-menu-btn",onClick:()=>u(!0),children:i.jsx(Hy,{size:24})}),i.jsx("div",{className:"hide-mobile",style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:h})]}),i.jsxs("div",{className:"topbar-right",children:[i.jsxs("div",{className:"search-bar",children:[i.jsx(xh,{size:18,className:"search-icon"}),i.jsx("input",{type:"text",placeholder:"Search clients, requests..."})]}),i.jsxs("button",{className:"action-btn",children:[i.jsx(ty,{size:18}),p>0&&i.jsx("span",{className:"action-dot"})]})]})]}),i.jsx("div",{className:"content-area",children:i.jsx(ev,{})})]})]})}const Fc=Xt.filter(s=>["Realism","Blackwork","Anime","Lettering"].includes(s.category)).slice(0,4);function ox(){var s,u;return i.jsxs("section",{className:"hero-section",children:[i.jsx("style",{children:`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 var(--space-4xl);
          overflow: hidden;
          background:
            radial-gradient(circle at 15% 20%, rgba(124, 58, 237, 0.18) 0%, transparent 30%),
            radial-gradient(circle at 80% 10%, rgba(239, 68, 68, 0.12) 0%, transparent 26%),
            linear-gradient(180deg, rgba(10, 10, 15, 0.5), rgba(10, 10, 15, 0.92));
        }

        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.25'/%3E%3C/svg%3E");
          opacity: 0.05;
          pointer-events: none;
        }

        .hero-backdrop {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10, 10, 15, 0.8) 0%, rgba(10, 10, 15, 0.2) 55%, rgba(10, 10, 15, 0.75) 100%);
        }

        .hero-glow {
          content: '';
          position: absolute;
          top: 15%;
          right: -10%;
          width: 420px;
          height: 420px;
          background: var(--accent-primary);
          filter: blur(120px);
          opacity: 0.2;
          border-radius: 50%;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: var(--space-4xl);
          align-items: center;
          width: 100%;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }

          .hero-section {
            padding-top: 100px;
          }

          .hero-main-card {
            min-height: 420px;
          }

          .hero-stack-card {
            min-height: 150px;
          }
        }

        .hero-kicker {
          display: inline-block;
          padding: 10px 16px;
          border-radius: var(--radius-full);
          background: rgba(255,255,255,0.06);
          border: var(--border-glass);
          color: var(--accent-glow);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1.4px;
          margin-bottom: var(--space-lg);
          text-transform: uppercase;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: var(--space-md);
          color: var(--text-primary);
          max-width: 11ch;
        }

        .hero-desc {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          margin-bottom: var(--space-xl);
          max-width: 640px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
          margin-top: var(--space-lg);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: var(--radius-full);
          background: rgba(26, 26, 46, 0.72);
          border: var(--border-glass);
          color: var(--text-secondary);
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
        }

        .hero-proof {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
          margin-top: var(--space-2xl);
        }

        .hero-stat {
          min-width: 160px;
          flex: 1;
          padding: var(--space-md);
          border-radius: var(--radius-lg);
          background: rgba(26, 26, 46, 0.55);
          border: var(--border-glass);
        }

        .hero-stat strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .hero-stat span {
          color: var(--text-secondary);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-visual {
          position: relative;
        }

        .hero-frame {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: var(--space-md);
          align-items: stretch;
        }

        @media (max-width: 640px) {
          .hero-frame {
            grid-template-columns: 1fr;
          }

          .hero-section {
            min-height: auto;
            padding: 92px 0 var(--space-3xl);
          }

          .hero-title {
            max-width: none;
            font-size: clamp(2.5rem, 14vw, 3.5rem);
          }

          .hero-actions {
            flex-direction: column;
          }

          .hero-actions .btn {
            width: 100%;
          }

          .hero-badges {
            flex-direction: column;
          }

          .hero-badge {
            width: 100%;
          }

          .hero-proof {
            flex-direction: column;
          }

          .hero-stat {
            min-width: 0;
          }

          .hero-main-card {
            min-height: 360px;
          }
        }

        .hero-main-card,
        .hero-stack-card {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-xl);
          border: var(--border-glass);
          background: var(--bg-card);
          box-shadow: var(--shadow-xl);
        }

        .hero-main-card {
          min-height: 540px;
        }

        .hero-main-card img,
        .hero-stack-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .hero-main-card:hover img,
        .hero-stack-card:hover img {
          transform: scale(1.04);
        }

        .hero-main-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 12px;
          padding: var(--space-xl);
          background: linear-gradient(180deg, rgba(10, 10, 15, 0.1) 0%, rgba(10, 10, 15, 0.85) 100%);
        }

        .hero-main-overlay strong {
          font-size: 1.25rem;
          line-height: 1.4;
          max-width: 18ch;
        }

        .hero-side {
          display: grid;
          gap: var(--space-md);
        }

        .hero-stack-card {
          min-height: 170px;
        }

        .hero-floating-card {
          margin-top: var(--space-md);
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          border: var(--border-glass);
          background: rgba(26, 26, 46, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-md);
        }

        .hero-floating-card p {
          margin: 0;
        }

        .hero-floating-card strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 4px;
        }

        .hero-floating-card span {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        @media (max-width: 992px) {
          .hero-main-card {
            min-height: 460px;
          }
        }
      `}),i.jsx("div",{className:"hero-backdrop"}),i.jsx("div",{className:"hero-glow"}),i.jsx("div",{className:"container",children:i.jsxs("div",{className:"hero-container",children:[i.jsxs("div",{className:"hero-copy animate-fadeInUp",children:[i.jsxs("div",{className:"hero-kicker",children:[xe.location," • consultation-first studio"]}),i.jsxs("h1",{className:"hero-title",children:["Custom ink that books.",i.jsx("span",{className:"gradient-text",children:" Clean work, clear process."})]}),i.jsxs("p",{className:"hero-desc",children:[xe.bioExtended," Designed for campaigns that need visual trust, artistic authority, and a fast path to booking."]}),i.jsxs("div",{className:"hero-actions",children:[i.jsxs("a",{href:"#inquiry",className:"btn btn-primary btn-lg",children:["Book a Free Consultation ",i.jsx(br,{size:20})]}),i.jsx("a",{href:"/portfolio",className:"btn btn-secondary btn-lg",children:"Check Artist Availability"})]}),i.jsxs("div",{className:"hero-badges",children:[i.jsxs("span",{className:"hero-badge",children:[i.jsx(go,{size:16})," Sterile, licensed, and health-focused"]}),i.jsxs("span",{className:"hero-badge",children:[i.jsx(fo,{size:16})," Consultations by appointment"]}),i.jsxs("span",{className:"hero-badge",children:[i.jsx(vo,{size:16})," Custom pieces, healed-result thinking"]})]}),i.jsxs("div",{className:"hero-proof",children:[i.jsxs("div",{className:"hero-stat",children:[i.jsx("strong",{children:xe.experience}),i.jsx("span",{children:"Experience"})]}),i.jsxs("div",{className:"hero-stat",children:[i.jsxs("strong",{children:[xe.specialties.length,"+"]}),i.jsx("span",{children:"Specialty styles"})]}),i.jsxs("div",{className:"hero-stat",children:[i.jsx("strong",{children:"100%"}),i.jsx("span",{children:"Session-focused custom work"})]})]})]}),i.jsxs("div",{className:"hero-visual animate-fadeInUp",style:{animationDelay:"0.1s"},children:[i.jsxs("div",{className:"hero-frame",children:[i.jsxs("div",{className:"hero-main-card",children:[i.jsx("img",{src:(s=Fc[0])==null?void 0:s.src,alt:((u=Fc[0])==null?void 0:u.title)||"InkSink featured tattoo"}),i.jsxs("div",{className:"hero-main-overlay",children:[i.jsx("span",{className:"badge badge-purple",children:"Fresh + healed-forward"}),i.jsx("strong",{children:"Artwork made to look intentional, modern, and premium from every angle."})]})]}),i.jsx("div",{className:"hero-side",children:Fc.slice(1,4).map(f=>i.jsx("div",{className:"hero-stack-card",children:i.jsx("img",{src:f.src,alt:f.title,loading:"lazy"})},f.id))})]}),i.jsxs("div",{className:"hero-floating-card",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Fast consult turnaround"}),i.jsx("span",{children:"Short, low-friction inquiry flow with booking guidance"})]}),i.jsx(ql,{size:22,className:"text-accent"})]})]})]})})]})}function ux({onImageClick:s}){const u=Xt.slice(0,10),f=o=>{switch(o%5){case 0:return{minHeight:"420px"};case 1:return{minHeight:"320px"};case 2:return{minHeight:"280px"};case 3:return{minHeight:"380px"};default:return{minHeight:"300px"}}};return i.jsxs("section",{className:"section featured-work",children:[i.jsx("style",{children:`
        .featured-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: var(--space-2xl);
          gap: var(--space-lg);
        }
        @media (max-width: 600px) {
          .featured-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-md);
          }

          .featured-header .btn {
            width: 100%;
          }

          .featured-grid {
            columns: 1;
          }

          .featured-item {
            min-height: 260px !important;
          }
        }

        .featured-copy {
          max-width: 680px;
        }

        .featured-grid {
          columns: 3 260px;
          column-gap: var(--space-md);
        }

        @media (max-width: 1024px) {
          .featured-grid {
            columns: 2 220px;
          }
        }

        .featured-item {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: var(--space-md);
          cursor: pointer;
          background: var(--bg-card);
          break-inside: avoid;
          border: var(--border-glass);
        }

        .featured-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .featured-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0) 50%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: var(--space-md);
          opacity: 0;
          transition: opacity var(--transition-base);
        }
        .featured-item:hover img {
          transform: scale(1.05);
        }
        .featured-item:hover .featured-overlay {
          opacity: 1;
        }
        .featured-item::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          transition: border-color var(--transition-base);
          pointer-events: none;
        }
        .featured-item:hover::after {
          border-color: rgba(124, 58, 237, 0.5);
          box-shadow: inset var(--glow-purple);
        }
        .featured-category {
          color: var(--accent-glow);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
          transform: translateY(10px);
          transition: transform var(--transition-base);
        }
        .featured-title {
          color: white;
          font-size: 1.1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transform: translateY(10px);
          transition: transform var(--transition-base) 0.1s;
        }
        .featured-item:hover .featured-category,
        .featured-item:hover .featured-title {
          transform: translateY(0);
        }

        .featured-summary {
          color: var(--text-secondary);
          max-width: 58ch;
          margin-top: 8px;
        }

        .featured-header .btn {
          white-space: nowrap;
        }
      `}),i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"featured-header",children:[i.jsxs("div",{className:"featured-copy",children:[i.jsx("span",{className:"section-label",children:"Portfolio"}),i.jsx("h2",{children:"Curated proof, not a shelf of thumbnails."}),i.jsx("p",{className:"featured-summary",children:"A tighter edit of healed and fresh pieces across the studio's strongest styles, arranged to feel like an editorial wall rather than a standard grid."})]}),i.jsxs("a",{href:"/portfolio",className:"btn btn-secondary",children:["View Full Gallery ",i.jsx(mh,{size:18})]})]}),i.jsx("div",{className:"featured-grid stagger-children",children:u.map((o,d)=>i.jsxs("div",{className:"featured-item",style:f(d),onClick:()=>{s?s(o):window.location.href="/portfolio"},children:[i.jsx("img",{src:o.src,alt:o.title,loading:"lazy"}),i.jsxs("div",{className:"featured-overlay",children:[i.jsx("span",{className:"featured-category",children:o.category}),i.jsxs("div",{className:"featured-title",children:[o.title,i.jsx(ho,{size:18})]})]})]},o.id))})]})]})}function dx(){return i.jsxs("section",{className:"section artist-section",id:"artist",children:[i.jsx("style",{children:`
        .artist-container {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: var(--space-4xl);
          align-items: center;
        }
        @media (max-width: 992px) {
          .artist-container {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }

          .artist-note-grid,
          .artist-features {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .artist-spotlight {
            position: static;
            margin-top: var(--space-md);
            flex-direction: column;
            align-items: stretch;
          }

          .artist-spotlight-card {
            width: 100%;
          }

          .contact-links {
            flex-wrap: wrap;
          }
        }
        
        .artist-image-col {
          position: relative;
        }
        .artist-image-wrapper {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          aspect-ratio: 4/5;
          background: var(--bg-card);
          border: var(--border-glass);
          box-shadow: var(--shadow-xl);
        }
        .artist-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 10, 15, 0.15) 0%, rgba(10, 10, 15, 0.78) 100%);
        }
        
        /* Placeholder styling since we don't have a photo */
        .artist-placeholder {
          width: 100%;
          height: 100%;
          background: var(--gradient-card);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .artist-placeholder-inner {
          text-align: center;
          color: rgba(255,255,255,0.1);
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 800;
        }
        .placeholder-note {
          position: absolute;
          bottom: var(--space-md);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .artist-spotlight {
          position: absolute;
          left: var(--space-md);
          right: var(--space-md);
          bottom: var(--space-md);
          z-index: 1;
          display: flex;
          justify-content: space-between;
          gap: var(--space-md);
          align-items: flex-end;
        }

        .artist-spotlight-card {
          padding: 12px 14px;
          border-radius: var(--radius-md);
          background: rgba(10, 10, 15, 0.58);
          border: var(--border-glass);
          backdrop-filter: blur(12px);
        }

        .artist-spotlight-card strong {
          display: block;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .artist-spotlight-card span {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        
        .artist-glow {
          position: absolute;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 80%;
          background: var(--accent-primary);
          filter: blur(100px);
          opacity: 0.3;
          z-index: -1;
        }
        
        .artist-content h2 {
          margin-bottom: var(--space-md);
        }
        
        .artist-bio {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: var(--space-xl);
        }

        .artist-note-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--space-md);
          margin-bottom: var(--space-xl);
        }

        .artist-note {
          padding: var(--space-md);
          border-radius: var(--radius-lg);
          border: var(--border-glass);
          background: var(--bg-card);
        }

        .artist-note h4 {
          margin-bottom: 8px;
        }

        .artist-note p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        
        .artist-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
          margin-bottom: var(--space-xl);
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-primary);
          background: var(--bg-card);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          border: var(--border-glass);
        }
        .feature-icon {
          color: var(--accent-glow);
        }
        
        .specialties {
          margin-bottom: var(--space-xl);
        }
        .specialties h4 {
          margin-bottom: 12px;
          color: var(--text-primary);
        }
        .specialty-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .contact-links {
          display: flex;
          gap: var(--space-md);
        }
        .contact-link {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-card);
          border: var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }
        .contact-link:hover {
          background: var(--accent-primary-dim);
          color: var(--accent-glow);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 480px) {
          .artist-placeholder-inner {
            font-size: 3rem;
          }
        }
      `}),i.jsx("div",{className:"container",children:i.jsxs("div",{className:"artist-container",children:[i.jsxs("div",{className:"artist-image-col",children:[i.jsx("div",{className:"artist-glow"}),i.jsxs("div",{className:"artist-image-wrapper",children:[i.jsxs("div",{className:"artist-placeholder",children:[i.jsxs("div",{className:"artist-placeholder-inner",children:["INKSINK",i.jsx("br",{}),"TATTOOS"]}),i.jsx("div",{className:"placeholder-note"})]}),i.jsxs("div",{className:"artist-spotlight",children:[i.jsxs("div",{className:"artist-spotlight-card",children:[i.jsx("strong",{children:xe.name}),i.jsxs("span",{children:["Lead artist • ",xe.experience]})]}),i.jsxs("div",{className:"artist-spotlight-card",children:[i.jsx("strong",{children:xe.hours}),i.jsx("span",{children:"Walk-ins by request"})]})]})]})]}),i.jsxs("div",{className:"artist-content stagger-children",children:[i.jsxs("div",{children:[i.jsx("span",{className:"section-label",children:"Meet The Artist"}),i.jsxs("h2",{children:[xe.name," builds custom work around your idea."]})]}),i.jsxs("p",{className:"artist-bio",children:[xe.bio," ",xe.bioExtended]}),i.jsxs("div",{className:"artist-note-grid",children:[i.jsxs("div",{className:"artist-note",children:[i.jsx("h4",{children:"What clients come for"}),i.jsx("p",{children:"Anime, blackwork, realism, tribal, minimalist, color, lettering, and larger custom pieces."})]}),i.jsxs("div",{className:"artist-note",children:[i.jsx("h4",{children:"What makes it easier"}),i.jsx("p",{children:"Consult-first conversations, transparent direction, and a clean booking path from phone to chair."})]})]}),i.jsxs("div",{className:"artist-features",children:[i.jsxs("div",{className:"feature-item",children:[i.jsx(ql,{className:"feature-icon",size:20}),i.jsx("span",{children:xe.location})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx(ql,{className:"feature-icon",size:20}),i.jsx("span",{children:"House Calls Available"})]})]}),i.jsxs("div",{className:"specialties",children:[i.jsx("h4",{children:"Specialties"}),i.jsx("div",{className:"specialty-tags",children:xe.specialties.map(s=>i.jsx("span",{className:"badge badge-purple",children:s},s))})]}),i.jsxs("div",{className:"contact-links",children:[i.jsx("a",{href:xe.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"contact-link","aria-label":"Instagram",children:i.jsx(yh,{size:20})}),i.jsx("a",{href:`mailto:${xe.email}`,className:"contact-link","aria-label":"Email",children:i.jsx(jr,{size:20})}),i.jsx("a",{href:`tel:${xe.phone}`,className:"contact-link","aria-label":"Phone",children:i.jsx(po,{size:20})})]})]})]})})]})}const fx=[{icon:vy,title:"Consultation",text:"We confirm style, size, placement, and references before the appointment is set."},{icon:vo,title:"Design prep",text:"The artwork is refined so the shape, flow, and contrast suit the body part it will sit on."},{icon:go,title:"Sterile session",text:"Fresh gloves, single-use needles, barrier protection, and a clean working surface every time."},{icon:Ny,title:"Aftercare support",text:"Clear healing instructions and follow-up guidance keep the tattoo looking right after it leaves the chair."}],mx=["Medical-grade disinfectant between appointments","Single-use needles and fresh ink caps","Barrier film on touch points and equipment","Glove changes during setup, tattooing, and cleanup","Written aftercare directions before you leave"];function hx(){return i.jsxs("section",{className:"section safety-process-section",children:[i.jsx("style",{children:`
        .safety-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: var(--space-2xl);
          align-items: start;
        }

        @media (max-width: 992px) {
          .safety-layout {
            grid-template-columns: 1fr;
          }
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--space-md);
        }

        @media (max-width: 640px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }

        .process-card,
        .safety-card {
          background: rgba(26, 26, 46, 0.72);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          box-shadow: var(--shadow-md);
        }

        .process-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-primary-dim);
          color: var(--accent-glow);
          margin-bottom: var(--space-md);
        }

        .process-card h3,
        .safety-card h3 {
          margin-bottom: 8px;
        }

        .process-card p,
        .safety-card p,
        .safety-card li {
          color: var(--text-secondary);
        }

        .safety-list {
          list-style: none;
          display: grid;
          gap: 12px;
          margin-top: var(--space-md);
        }

        .safety-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .safety-list li::before {
          content: '•';
          color: var(--accent-glow);
          line-height: 1.4;
        }

        .aftercare-callout {
          margin-top: var(--space-lg);
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.16), rgba(6, 182, 212, 0.12));
          border: 1px solid rgba(124, 58, 237, 0.25);
        }

        .aftercare-callout strong {
          display: block;
          margin-bottom: 6px;
          color: var(--text-primary);
        }
      `}),i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"section-label",children:"Safety + Process"}),i.jsx("h2",{children:"Everything is designed to reduce hesitation."}),i.jsx("p",{children:"Clients should know what happens, how the studio stays clean, and how healing is supported before they book."})]}),i.jsxs("div",{className:"safety-layout",children:[i.jsx("div",{className:"process-grid",children:fx.map(s=>{const u=s.icon;return i.jsxs("article",{className:"process-card animate-fadeInUp",children:[i.jsx("div",{className:"process-icon",children:i.jsx(u,{size:22})}),i.jsx("h3",{children:s.title}),i.jsx("p",{children:s.text})]},s.title)})}),i.jsxs("aside",{className:"safety-card animate-fadeInUp",style:{animationDelay:"0.1s"},children:[i.jsx("span",{className:"section-label",children:"Hygiene Checklist"}),i.jsx("h3",{children:"Sterile setup, visible process, zero ambiguity."}),i.jsx("ul",{className:"safety-list",children:mx.map(s=>i.jsx("li",{children:s},s))}),i.jsxs("div",{className:"aftercare-callout",children:[i.jsx("strong",{children:"Aftercare sneak-peek"}),i.jsx("p",{children:"You'll leave with healing guidance that covers washing, ointment, and what to expect during the first two weeks."}),i.jsx("div",{style:{marginTop:"var(--space-md)"},children:i.jsxs("a",{href:"/process",className:"btn btn-secondary btn-sm",children:["View studio process ",i.jsx(mh,{size:16})]})})]})]})]})]})]})}const px=uo.map((s,u)=>({...s,image:Xt.find(f=>f.category===s.style)||Xt[u%Xt.length]}));function gx(){return i.jsxs("section",{className:"section reviews-section",children:[i.jsx("style",{children:`
        .reviews-section {
          background: var(--bg-secondary);
          position: relative;
        }
        .reviews-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent);
        }
        
        .review-card {
          background: rgba(26, 26, 46, 0.72);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          min-height: 240px;
          transition: all var(--transition-base);
        }
        .review-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-4px);
        }

        .review-image {
          flex: 0 0 42%;
          min-height: 240px;
        }

        .review-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .review-copy {
          flex: 1;
          padding: var(--space-xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }
        
        .stars {
          display: flex;
          gap: 4px;
          color: var(--accent-gold);
        }
        
        .review-text {
          color: var(--text-secondary);
          font-style: italic;
          line-height: 1.6;
          flex: 1;
        }
        
        .review-author {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: var(--space-md);
        }
        
        .author-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-lg);
          padding-top: var(--space-md);
        }

        .review-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-md);
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: var(--space-md);
        }

        @media (max-width: 720px) {
          .review-card {
            flex-direction: column;
          }

          .review-image {
            flex-basis: auto;
          }
        }
      `}),i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"section-label",children:"Testimonials"}),i.jsx("h2",{children:"Real stories paired with real work."}),i.jsx("p",{children:"Each review sits beside a relevant tattoo image so the proof is visual, not just verbal."})]}),i.jsx("div",{className:"reviews-grid",children:px.map((s,u)=>i.jsxs("div",{className:"review-card animate-fadeInUp",style:{animationDelay:`${u*.1}s`},children:[i.jsx("div",{className:"review-image",children:i.jsx("img",{src:s.image.src,alt:s.image.title,loading:"lazy"})}),i.jsxs("div",{className:"review-copy",children:[i.jsx("div",{className:"stars",children:[...Array(5)].map((f,o)=>i.jsx(bh,{size:18,fill:o<s.rating?"currentColor":"none"},o))}),i.jsxs("p",{className:"review-text",children:['"',s.text,'"']}),i.jsxs("div",{className:"review-footer",children:[i.jsx("div",{className:"author-name",children:s.clientName}),i.jsx("span",{className:"badge badge-purple",children:s.style})]})]})]},s.id))})]})]})}function vx(){return i.jsxs("section",{className:"section inquiry-section",id:"inquiry",children:[i.jsx("style",{children:`
        .inquiry-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: var(--space-2xl);
          align-items: start;
        }

        @media (max-width: 992px) {
          .inquiry-layout {
            grid-template-columns: 1fr;
          }

          .inquiry-card,
          .location-card {
            padding: var(--space-lg);
          }
        }

        .inquiry-card,
        .location-card {
          background: rgba(26, 26, 46, 0.72);
          border: var(--border-glass);
          border-radius: var(--radius-xl);
          padding: var(--space-xl);
          box-shadow: var(--shadow-lg);
        }

        .inquiry-form {
          display: grid;
          gap: var(--space-md);
        }

        .field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--space-md);
        }

        @media (max-width: 640px) {
          .field-grid {
            grid-template-columns: 1fr;
          }

          .helper-pill,
          .inquiry-form .btn {
            width: 100%;
          }

          .inquiry-form .btn {
            justify-content: center;
          }

          .map-frame {
            min-height: 260px;
          }
        }

        .form-note {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .map-frame {
          width: 100%;
          min-height: 320px;
          border: 0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: var(--space-lg);
          background: var(--bg-secondary);
        }

        .location-meta {
          display: grid;
          gap: 12px;
        }

        .location-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--text-secondary);
        }

        .location-row strong {
          display: block;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .helper-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          padding: 10px 14px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: var(--border-glass);
          color: var(--text-secondary);
        }
      `}),i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"section-label",children:"Book the consult"}),i.jsx("h2",{children:"Keep the form short and the next step obvious."}),i.jsx("p",{children:"Only ask for what is needed to start the conversation: concept, placement, size, and references."})]}),i.jsxs("div",{className:"inquiry-layout",children:[i.jsx("div",{className:"inquiry-card animate-fadeInUp",children:i.jsxs("form",{className:"inquiry-form",onSubmit:s=>s.preventDefault(),children:[i.jsxs("div",{className:"field-grid",children:[i.jsxs("div",{children:[i.jsx("label",{children:"Name"}),i.jsx("input",{type:"text",placeholder:"Your name"})]}),i.jsxs("div",{children:[i.jsx("label",{children:"Phone or Email"}),i.jsx("input",{type:"text",placeholder:"Best contact details"})]})]}),i.jsxs("div",{children:[i.jsx("label",{children:"Design concept"}),i.jsx("textarea",{placeholder:"Describe the tattoo idea, references, and style direction.",rows:4})]}),i.jsxs("div",{className:"field-grid",children:[i.jsxs("div",{children:[i.jsx("label",{children:"Placement"}),i.jsx("input",{type:"text",placeholder:"Arm, leg, chest, back..."})]}),i.jsxs("div",{children:[i.jsx("label",{children:"Approximate size"}),i.jsx("input",{type:"text",placeholder:"Small, medium, large"})]})]}),i.jsxs("div",{children:[i.jsx("label",{children:"Reference photos"}),i.jsx("input",{type:"file",multiple:!0})]}),i.jsxs("div",{className:"helper-pill",children:[i.jsx(Ly,{size:16}),"Upload references and we’ll reply with a clearer quote path."]}),i.jsxs("button",{type:"submit",className:"btn btn-primary btn-lg",style:{width:"fit-content"},children:["Request Consultation ",i.jsx(Jy,{size:18})]}),i.jsx("p",{className:"form-note",children:"Studio replies are typically handled within one business day."})]})}),i.jsxs("aside",{className:"location-card animate-fadeInUp",style:{animationDelay:"0.1s"},children:[i.jsx("iframe",{className:"map-frame",title:"InkSink studio map",src:`https://www.google.com/maps?q=${encodeURIComponent(xe.location)}&output=embed`,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),i.jsxs("div",{className:"location-meta",children:[i.jsxs("div",{className:"location-row",children:[i.jsx(ql,{size:20,className:"text-accent"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Studio location"}),i.jsx("div",{children:xe.location})]})]}),i.jsxs("div",{className:"location-row",children:[i.jsx(fo,{size:20,className:"text-accent"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Hours"}),i.jsx("div",{children:xe.hours})]})]}),i.jsxs("div",{className:"location-row",children:[i.jsx(sy,{size:20,className:"text-accent"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Parking and access"}),i.jsx("div",{children:"Share parking details, arrival notes, and whether you need a house call."})]})]})]})]})]})]})]})}function yx(){return i.jsxs("div",{className:"home-page",children:[i.jsx(ox,{}),i.jsx(ux,{}),i.jsx(dx,{}),i.jsx(hx,{}),i.jsx(gx,{}),i.jsx(vx,{}),i.jsx("footer",{style:{borderTop:"var(--border-glass)",padding:"var(--space-2xl) 0",textAlign:"center",color:"var(--text-secondary)"},children:i.jsxs("div",{className:"container",children:[i.jsxs("p",{children:["© ",new Date().getFullYear()," InkSink Tattoos. All rights reserved."]}),i.jsx("div",{style:{marginTop:"12px",fontSize:"0.85rem"},children:i.jsx("a",{href:"/login",style:{color:"inherit",opacity:.5},children:"Artist Login"})})]})})]})}function xx({images:s,onImageClick:u}){return!s||s.length===0?i.jsx("div",{className:"text-center",style:{padding:"var(--space-4xl) 0",color:"var(--text-secondary)"},children:"No images found for this category."}):i.jsxs("div",{className:"portfolio-grid",children:[i.jsx("style",{children:`
        .portfolio-grid {
          columns: 3 260px;
          column-gap: var(--space-md);
          margin-top: var(--space-xl);
        }

        @media (max-width: 1024px) {
          .portfolio-grid {
            columns: 2 220px;
          }
        }
        .portfolio-item {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: var(--space-md);
          cursor: pointer;
          background: var(--bg-card);
          border: var(--border-glass);
          break-inside: avoid;
          display: block;
        }
        .portfolio-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0) 50%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: var(--space-md);
          opacity: 0;
          transition: opacity var(--transition-base);
        }
        .portfolio-item:hover img {
          transform: scale(1.05);
        }
        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }
        .portfolio-item::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          transition: border-color var(--transition-base);
          pointer-events: none;
        }
        .portfolio-item:hover::after {
          border-color: rgba(124, 58, 237, 0.5);
          box-shadow: inset var(--glow-purple);
        }
        .portfolio-category {
          color: var(--accent-glow);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
          transform: translateY(10px);
          transition: transform var(--transition-base);
        }
        .portfolio-title {
          color: white;
          font-size: 1.1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transform: translateY(10px);
          transition: transform var(--transition-base) 0.1s;
        }
        .portfolio-item:hover .portfolio-category,
        .portfolio-item:hover .portfolio-title {
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .portfolio-grid {
            columns: 1;
          }

          .portfolio-item {
            min-height: 240px !important;
          }
        }
      `}),s.map((f,o)=>i.jsxs("div",{className:"portfolio-item animate-fadeInUp",style:{animationDelay:`${o%10*.08}s`,minHeight:o%4===0?"420px":o%4===1?"330px":"280px"},onClick:()=>u(o),children:[i.jsx("img",{src:f.src,alt:f.title||"Tattoo Portfolio Image",loading:"lazy"}),i.jsxs("div",{className:"portfolio-overlay",children:[i.jsx("span",{className:"portfolio-category",children:f.category}),i.jsxs("div",{className:"portfolio-title",children:[f.title||"View Detail",i.jsx(ho,{size:18})]})]})]},f.id))]})}function bx({categories:s,activeCategory:u,onCategoryChange:f,counts:o}){return i.jsxs("div",{className:"filter-wrapper",children:[i.jsx("style",{children:`
        .filter-wrapper {
          position: sticky;
          top: 80px; /* Below navbar */
          z-index: var(--z-sticky);
          background: var(--bg-glass-heavy);
          backdrop-filter: blur(10px);
          padding: var(--space-md) 0;
          margin-bottom: var(--space-xl);
          border-bottom: var(--border-glass);
        }
        .filter-container {
          display: flex;
          gap: var(--space-sm);
          overflow-x: auto;
          padding-bottom: 8px; /* space for scrollbar */
          scrollbar-width: none; /* Firefox */
        }
        .filter-container::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
        .filter-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: var(--border-glass);
          color: var(--text-secondary);
          font-size: 0.9rem;
          white-space: nowrap;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-pill:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
        }
        .filter-pill.active {
          background: var(--gradient-purple);
          color: white;
          border-color: transparent;
          box-shadow: var(--glow-purple);
        }
        .filter-count {
          background: rgba(0,0,0,0.2);
          padding: 2px 6px;
          border-radius: 10px;
          font-size: 0.75rem;
        }
      `}),i.jsx("div",{className:"container",children:i.jsx("div",{className:"filter-container",children:s.map(d=>i.jsxs("button",{className:`filter-pill ${u===d?"active":""}`,onClick:()=>f(d),children:[d,i.jsx("span",{className:"filter-count",children:o[d]||0})]},d))})})]})}function Sx({images:s,currentIndex:u,onClose:f,onNavigate:o}){if(z.useEffect(()=>{if(u===null||!s[u])return;const h=p=>{p.key==="Escape"&&f(),p.key==="ArrowRight"&&o("next"),p.key==="ArrowLeft"&&o("prev")};return window.addEventListener("keydown",h),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",h),document.body.style.overflow=""}},[f,o]),u===null||!s[u])return null;const d=s[u];return i.jsxs("div",{className:"lightbox-overlay",onClick:f,children:[i.jsx("style",{children:`
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: var(--z-modal);
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn var(--transition-fast) forwards;
        }
        .lightbox-close {
          position: absolute;
          top: var(--space-lg);
          right: var(--space-lg);
          background: rgba(255,255,255,0.1);
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          z-index: 2;
          transition: all var(--transition-fast);
        }
        .lightbox-close:hover {
          background: var(--accent-hot);
          transform: scale(1.1);
        }
        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.1);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          z-index: 2;
          transition: all var(--transition-fast);
        }
        .lightbox-nav:hover {
          background: var(--accent-primary);
          box-shadow: var(--glow-purple);
        }
        .lightbox-prev { left: var(--space-lg); }
        .lightbox-next { right: var(--space-lg); }
        
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          box-shadow: var(--shadow-xl);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-md);
        }
        .lightbox-info {
          padding: var(--space-md) 0;
          text-align: center;
        }
        .lightbox-title {
          color: white;
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .lightbox-meta {
          color: var(--text-secondary);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .lightbox-badge {
          color: var(--accent-glow);
          background: var(--accent-primary-dim);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
        }
        @media (max-width: 768px) {
          .lightbox-nav { display: none; } /* hide arrows on mobile, rely on taps/swipes ideally */
        }
      `}),i.jsx("button",{className:"lightbox-close",onClick:f,children:i.jsx(rx,{size:24})}),i.jsx("button",{className:"lightbox-nav lightbox-prev",onClick:h=>{h.stopPropagation(),o("prev")},children:i.jsx(ph,{size:32})}),i.jsxs("div",{className:"lightbox-content",onClick:h=>h.stopPropagation(),children:[i.jsx("img",{src:d.src,alt:d.title,className:"lightbox-image animate-scaleIn"}),i.jsxs("div",{className:"lightbox-info animate-fadeInUp",style:{animationDelay:"0.2s"},children:[i.jsx("div",{className:"lightbox-title",children:d.title||"Untitled"}),i.jsxs("div",{className:"lightbox-meta",children:[i.jsx("span",{className:"lightbox-badge",children:d.category}),i.jsxs("span",{children:["Image ",u+1," of ",s.length]})]})]})]}),i.jsx("button",{className:"lightbox-nav lightbox-next",onClick:h=>{h.stopPropagation(),o("next")},children:i.jsx(br,{size:32})})]})}function jx(){const[s,u]=z.useState("All"),[f,o]=z.useState(null),d=s==="All"?Xt:Xt.filter(g=>g.category===s),h=Xt.reduce((g,w)=>(g[w.category]=(g[w.category]||0)+1,g.All=(g.All||0)+1,g),{}),p=g=>{o(g)},S=()=>{o(null)},x=g=>{f!==null&&o(g==="next"?w=>(w+1)%d.length:w=>(w-1+d.length)%d.length)};return i.jsxs("div",{className:"portfolio-page",style:{paddingTop:"100px",minHeight:"100vh"},children:[i.jsx("style",{children:`
        .portfolio-page {
          overflow-x: hidden;
        }

        .portfolio-shell {
          padding-bottom: var(--space-4xl);
        }

        @media (max-width: 640px) {
          .portfolio-page {
            padding-top: 88px;
          }

          .portfolio-shell {
            padding-bottom: var(--space-3xl);
          }

          .portfolio-page .section-header {
            text-align: left;
          }

          .portfolio-page .section-header p {
            margin: 0;
          }
        }
      `}),i.jsx("div",{className:"container",children:i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"section-label",children:"Our Work"}),i.jsx("h2",{children:"The InkSink Portfolio"}),i.jsx("p",{children:"Browse our previous work across various styles. Every piece is custom-designed for the client."})]})}),i.jsx(bx,{categories:Uv,activeCategory:s,onCategoryChange:u,counts:h}),i.jsx("div",{className:"container portfolio-shell",children:i.jsx(xx,{images:d,onImageClick:p})}),i.jsx(Sx,{images:d,currentIndex:f,onClose:S,onNavigate:x})]})}function Nx(){return i.jsxs("div",{className:"process-page",style:{paddingTop:"100px",minHeight:"100vh"},children:[i.jsx("style",{children:`
        .process-page {
          overflow-x: hidden;
          background:
            radial-gradient(circle at top right, rgba(124, 58, 237, 0.16), transparent 30%),
            radial-gradient(circle at top left, rgba(6, 182, 212, 0.12), transparent 24%),
            var(--bg-primary);
        }

        .process-hero {
          padding: var(--space-2xl) 0 var(--space-xl);
        }

        .process-grid {
          columns: 3 260px;
          column-gap: var(--space-md);
          padding-bottom: var(--space-4xl);
        }

        .process-card {
          break-inside: avoid;
          position: relative;
          overflow: hidden;
          margin-bottom: var(--space-md);
          border-radius: var(--radius-lg);
          border: var(--border-glass);
          background: var(--bg-card);
          box-shadow: var(--shadow-md);
        }

        .process-card img {
          width: 100%;
          display: block;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .process-card:hover img {
          transform: scale(1.04);
        }

        .process-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: var(--space-md);
          background: linear-gradient(180deg, rgba(10, 10, 15, 0.1) 0%, rgba(10, 10, 15, 0.82) 100%);
        }

        .process-overlay strong {
          color: var(--text-primary);
          font-size: 1rem;
          display: block;
          margin-bottom: 4px;
        }

        .process-overlay span {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .process-intro {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 380px);
          gap: var(--space-2xl);
          align-items: end;
          margin-bottom: var(--space-2xl);
        }

        .process-copy p {
          max-width: 65ch;
        }

        .process-points {
          display: grid;
          gap: var(--space-md);
        }

        .process-point {
          padding: var(--space-md);
          border-radius: var(--radius-lg);
          border: var(--border-glass);
          background: rgba(26, 26, 46, 0.72);
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .process-point svg {
          color: var(--accent-glow);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .process-point strong {
          display: block;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .process-point p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        @media (max-width: 1024px) {
          .process-intro {
            grid-template-columns: 1fr;
          }

          .process-grid {
            columns: 2 220px;
          }
        }

        @media (max-width: 640px) {
          .process-page {
            padding-top: 88px;
          }

          .process-grid {
            columns: 1;
            padding-bottom: var(--space-3xl);
          }
        }
      `}),i.jsxs("div",{className:"container process-hero",children:[i.jsxs("div",{className:"process-intro",children:[i.jsxs("div",{className:"process-copy animate-fadeInUp",children:[i.jsx("span",{className:"section-label",children:"Studio Process"}),i.jsx("h1",{children:"Real tattoo work, step by step."}),i.jsx("p",{children:"These are the  shots from the studio floor: the setup, the tattoo machine in motion, and the body-position details that show the actual craft behind the finished art."})]}),i.jsxs("div",{className:"process-points animate-fadeInUp",style:{animationDelay:"0.1s"},children:[i.jsxs("div",{className:"process-point",children:[i.jsx(go,{size:20}),i.jsxs("div",{children:[i.jsx("strong",{children:"Clean workflow"}),i.jsx("p",{children:"Barrier protection, fresh setup, and a visible hygiene-first routine."})]})]}),i.jsxs("div",{className:"process-point",children:[i.jsx(hh,{size:20}),i.jsxs("div",{children:[i.jsx("strong",{children:"Behind-the-scenes proof"}),i.jsx("p",{children:"Clients can see the artist at work before they ever book a consult."})]})]}),i.jsxs("div",{className:"process-point",children:[i.jsx(fo,{size:20}),i.jsxs("div",{children:[i.jsx("strong",{children:"Session flow"}),i.jsx("p",{children:"Captured during real appointments so the pacing and handling feel authentic."})]})]}),i.jsxs("div",{className:"process-point",children:[i.jsx(vo,{size:20}),i.jsxs("div",{children:[i.jsx("strong",{children:"Modern presentation"}),i.jsx("p",{children:"Styled as a cinematic masonry wall rather than a plain photo dump."})]})]})]})]}),i.jsx("div",{className:"process-grid",children:Ov.map((s,u)=>i.jsxs("article",{className:"process-card animate-fadeInUp",style:{animationDelay:`${u%8*.08}s`,minHeight:u%5===0?"420px":u%5===1?"320px":"280px"},children:[i.jsx("img",{src:s.src,alt:s.title,loading:"lazy"}),i.jsxs("div",{className:"process-overlay",children:[i.jsx("strong",{children:s.title}),i.jsx("span",{children:s.note})]})]},s.id))})]})]})}function Ex({formData:s,onChange:u}){const f=d=>{u("style",d)},o=d=>{u("colorType",d)};return i.jsxs("div",{className:"step-tattoo",children:[i.jsx("style",{children:`
        .step-tattoo {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }
        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: var(--space-sm);
        }
        .option-chip {
          padding: var(--space-sm) var(--space-md);
          border-radius: var(--radius-full);
          border: var(--border-glass);
          background: var(--bg-card);
          color: var(--text-secondary);
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-size: 0.9rem;
        }
        .option-chip:hover {
          border-color: var(--accent-primary);
          color: var(--text-primary);
        }
        .option-chip.active {
          background: var(--accent-primary-dim);
          border-color: var(--accent-primary);
          color: var(--accent-glow);
          box-shadow: var(--glow-purple);
        }
        .size-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-md);
        }
        .size-card {
          padding: var(--space-md);
          border-radius: var(--radius-md);
          border: var(--border-glass);
          background: var(--bg-card);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: center;
        }
        .size-card:hover {
          border-color: var(--accent-primary);
          background: var(--bg-card-hover);
        }
        .size-card.active {
          border-color: var(--accent-primary);
          background: var(--accent-primary-dim);
          box-shadow: var(--glow-purple);
        }
        .size-card h4 {
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .size-card p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .color-toggle {
          display: flex;
          background: var(--bg-secondary);
          border-radius: var(--radius-full);
          padding: 4px;
        }
        .color-btn {
          flex: 1;
          padding: 8px 16px;
          text-align: center;
          border-radius: var(--radius-full);
          cursor: pointer;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
          color: var(--text-secondary);
        }
        .color-btn.active {
          background: var(--accent-primary);
          color: white;
          box-shadow: var(--shadow-sm);
        }
      `}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Describe your tattoo idea"}),i.jsx("textarea",{placeholder:"E.g. I want a realistic lion with a crown on my upper arm...",value:s.tattooIdea,onChange:d=>u("tattooIdea",d.target.value),rows:4})]}),i.jsxs("div",{className:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-xl)"},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Placement"}),i.jsxs("select",{value:s.placement,onChange:d=>u("placement",d.target.value),children:[i.jsx("option",{value:"",children:"Select placement"}),Bv.map(d=>i.jsx("option",{value:d,children:d},d))]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Color Preference"}),i.jsx("div",{className:"color-toggle",children:["Blackwork","Full Color","Both"].map(d=>i.jsx("div",{className:`color-btn ${s.colorType===d?"active":""}`,onClick:()=>o(d),children:d},d))})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Preferred Style"}),i.jsx("div",{className:"options-grid",children:Hv.map(d=>i.jsx("div",{className:`option-chip ${s.style===d?"active":""}`,onClick:()=>f(d),children:d},d))})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Estimated Size"}),i.jsx("div",{className:"size-cards",children:Gv.map(d=>i.jsxs("div",{className:`size-card ${s.size===d.label?"active":""}`,onClick:()=>u("size",d.label),children:[i.jsx("h4",{children:d.label}),i.jsx("p",{children:d.description})]},d.label))})]}),i.jsxs("div",{className:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--space-xl)"},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Budget Range (KES)"}),i.jsxs("select",{value:s.budget,onChange:d=>u("budget",d.target.value),children:[i.jsx("option",{value:"",children:"Select budget range"}),Lv.map(d=>i.jsx("option",{value:d,children:d},d))]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Pain Tolerance (1-10)"}),i.jsx("input",{type:"range",min:"1",max:"10",value:s.painTolerance,onChange:d=>u("painTolerance",d.target.value),style:{padding:0}}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",color:"var(--text-secondary)",marginTop:"8px"},children:[i.jsx("span",{children:"1 (Very low)"}),i.jsx("span",{children:s.painTolerance}),i.jsx("span",{children:"10 (Steel)"})]})]})]})]})}function zx({formData:s,onChange:u}){const f=new Date,[o,d]=z.useState(f.getMonth()),[h,p]=z.useState(f.getFullYear()),{state:S}=Bt(),x=new Date(h,o+1,0).getDate(),g=new Date(h,o,1).getDay(),w=Array.from({length:x},(U,J)=>J+1),A=Array.from({length:g},(U,J)=>J),B=["January","February","March","April","May","June","July","August","September","October","November","December"],Y=()=>{o===0?(d(11),p(U=>U-1)):d(U=>U-1)},Q=()=>{o===11?(d(0),p(U=>U+1)):d(U=>U+1)},G=U=>{const J=`${h}-${String(o+1).padStart(2,"0")}-${String(U).padStart(2,"0")}`;u("date",J),u("time","")},H=s.date?Bm(S,s.date):null;return i.jsxs("div",{className:"step-date",children:[i.jsx("style",{children:`
        .calendar-container {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          margin-bottom: var(--space-xl);
        }
        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-md);
        }
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
          text-align: center;
        }
        .calendar-day-header {
          font-weight: 600;
          color: var(--text-secondary);
          font-size: 0.85rem;
          padding-bottom: 8px;
        }
        .calendar-day {
          position: relative;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-size: 0.95rem;
        }
        .calendar-day:hover:not(.empty) {
          background: var(--bg-secondary);
          color: var(--accent-glow);
        }
        .calendar-day.selected {
          background: var(--accent-primary);
          color: white;
          box-shadow: var(--glow-purple);
        }

        .calendar-day.booked {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .calendar-day.booked::after {
          content: '';
          position: absolute;
          bottom: 6px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-hot);
          box-shadow: var(--glow-red);
        }

        .availability-note {
          margin-bottom: var(--space-md);
          padding: var(--space-md);
          border-radius: var(--radius-md);
          border: var(--border-glass);
          background: rgba(26, 26, 46, 0.7);
          color: var(--text-secondary);
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .slot-legend {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: var(--space-md);
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .legend-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .legend-dot.open { background: var(--accent-green); }
        .legend-dot.booked { background: var(--accent-hot); }

        .time-slots {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: var(--space-sm);
        }
        .time-slot {
          padding: 10px;
          border: var(--border-glass);
          border-radius: var(--radius-md);
          text-align: center;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all var(--transition-fast);
          background: var(--bg-card);
        }
        .time-slot:hover {
          border-color: var(--accent-primary);
        }
        .time-slot.selected {
          background: var(--accent-primary-dim);
          border-color: var(--accent-primary);
          color: var(--accent-glow);
          box-shadow: var(--glow-purple);
        }

        .time-slot.booked {
          background: rgba(239, 68, 68, 0.12);
          border-color: rgba(239, 68, 68, 0.35);
          color: rgba(241, 245, 249, 0.45);
          cursor: not-allowed;
          opacity: 0.8;
        }

        .time-slot.booked:hover {
          border-color: rgba(239, 68, 68, 0.35);
        }

        .time-slot .slot-subtext {
          display: block;
          margin-top: 2px;
          font-size: 0.75rem;
          color: inherit;
          opacity: 0.85;
        }
      `}),i.jsxs("div",{className:"calendar-container",children:[i.jsxs("div",{className:"calendar-header",children:[i.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",onClick:Y,children:"<"}),i.jsxs("h4",{children:[B[o]," ",h]}),i.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",onClick:Q,children:">"})]}),i.jsxs("div",{className:"calendar-grid",children:[["Su","Mo","Tu","We","Th","Fr","Sa"].map(U=>i.jsx("div",{className:"calendar-day-header",children:U},U)),A.map(U=>i.jsx("div",{className:"calendar-day empty"},`blank-${U}`)),w.map(U=>{const J=`${h}-${String(o+1).padStart(2,"0")}-${String(U).padStart(2,"0")}`,O=s.date===J,Z=Bm(S,J);return i.jsx("div",{className:`calendar-day ${O?"selected":""} ${Z.bookedCount>0?"booked":""}`,onClick:()=>G(U),children:U},U)})]}),i.jsxs("div",{className:"slot-legend",children:[i.jsxs("span",{className:"legend-item",children:[i.jsx("span",{className:"legend-dot open"})," Available day"]}),i.jsxs("span",{className:"legend-item",children:[i.jsx("span",{className:"legend-dot booked"})," Booked session(s)"]})]})]}),s.date&&i.jsxs("div",{className:"animate-fadeInUp",children:[i.jsxs("div",{className:"availability-note",children:[i.jsx(gh,{size:18,className:"text-accent"}),i.jsxs("div",{children:[i.jsx("strong",{style:{color:"var(--text-primary)"},children:"Booked times are blocked automatically."}),i.jsxs("div",{children:[(H==null?void 0:H.bookedCount)||0," of ",(H==null?void 0:H.totalSlots)||0," sessions already reserved for this day."]})]})]}),i.jsxs("h4",{style:{marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx(Sr,{size:18,className:"text-accent"})," Select Time"]}),i.jsx("div",{className:"time-slots",children:eo.map(({value:U,label:J})=>{const O=!gr(S,s.date,U);return i.jsxs("div",{className:`time-slot ${s.time===U?"selected":""} ${O?"booked":""}`,onClick:()=>{O||u("time",U)},children:[J,i.jsx("span",{className:"slot-subtext",children:O?"Booked":"Available"})]},U)})})]})]})}function Ax({formData:s,onChange:u,onSubmit:f}){const o=p=>{if(!p)return"Not selected";const[S,x]=p.split(":"),g=Number(S),w=g>=12?"PM":"AM",A=g%12||12;return`${String(A).padStart(2,"0")}:${x} ${w}`},d=()=>{switch(s.size){case"Small":return"2,000 - 5,000 KES";case"Medium":return"5,000 - 12,000 KES";case"Large":return"12,000 - 25,000 KES";case"Extra Large":return"25,000+ KES";default:return"Custom Quote"}},h=()=>{switch(s.size){case"Small":return"1,000 KES";case"Medium":return"2,500 KES";case"Large":return"5,000 KES";case"Extra Large":return"10,000 KES";default:return"To be determined"}};return i.jsxs("div",{className:"step-confirm",children:[i.jsx("style",{children:`
        .summary-card {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
          margin-bottom: var(--space-xl);
        }
        .summary-section {
          margin-bottom: var(--space-lg);
          padding-bottom: var(--space-lg);
          border-bottom: var(--border-glass);
        }
        .summary-section:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-md);
        }
        .summary-item label {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-bottom: 4px;
        }
        .summary-item p {
          color: var(--text-primary);
          font-weight: 500;
          margin: 0;
        }
        .deposit-box {
          background: var(--accent-primary-dim);
          border: 1px solid var(--accent-primary);
          border-radius: var(--radius-md);
          padding: var(--space-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: var(--space-md);
        }
        .deposit-box p {
          color: var(--accent-glow);
          font-weight: 700;
          font-size: 1.25rem;
          margin: 0;
        }
        .personal-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
          margin-top: var(--space-lg);
        }
        @media (max-width: 600px) {
          .personal-info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),i.jsxs("div",{className:"summary-card",children:[i.jsxs("div",{className:"summary-section",children:[i.jsx("h4",{style:{marginBottom:"16px"},children:"Tattoo Details"}),i.jsxs("div",{className:"summary-grid",children:[i.jsxs("div",{className:"summary-item",children:[i.jsx("label",{children:"Style"}),i.jsx("p",{children:s.style||"Not specified"})]}),i.jsxs("div",{className:"summary-item",children:[i.jsx("label",{children:"Placement"}),i.jsx("p",{children:s.placement||"Not specified"})]}),i.jsxs("div",{className:"summary-item",children:[i.jsx("label",{children:"Size"}),i.jsx("p",{children:s.size||"Not specified"})]}),i.jsxs("div",{className:"summary-item",children:[i.jsx("label",{children:"Color"}),i.jsx("p",{children:s.colorType})]})]}),s.tattooIdea&&i.jsxs("div",{className:"summary-item",style:{marginTop:"16px"},children:[i.jsx("label",{children:"Idea Description"}),i.jsx("p",{children:s.tattooIdea})]})]}),i.jsxs("div",{className:"summary-section",children:[i.jsx("h4",{style:{marginBottom:"16px"},children:"Schedule & Pricing"}),i.jsxs("div",{className:"summary-grid",children:[i.jsxs("div",{className:"summary-item",children:[i.jsx("label",{children:"Preferred Date"}),i.jsx("p",{children:s.date||"Not selected"})]}),i.jsxs("div",{className:"summary-item",children:[i.jsx("label",{children:"Time"}),i.jsx("p",{children:o(s.time)})]}),i.jsxs("div",{className:"summary-item",children:[i.jsx("label",{children:"Estimated Cost"}),i.jsx("p",{children:d()})]})]}),i.jsxs("div",{className:"deposit-box",children:[i.jsxs("div",{children:[i.jsx("label",{style:{color:"var(--text-primary)",marginBottom:"4px"},children:"Required Deposit (MVP M-Pesa coming soon)"}),i.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:"Secures your slot. Deducted from final price."})]}),i.jsx("p",{children:h()})]})]}),i.jsxs("div",{className:"summary-section",children:[i.jsx("h4",{style:{marginBottom:"16px"},children:"Your Details"}),i.jsxs("div",{className:"personal-info-grid",children:[i.jsxs("div",{children:[i.jsx("label",{children:"First Name"}),i.jsx("input",{type:"text",value:s.firstName,onChange:p=>u("firstName",p.target.value),required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{children:"Last Name"}),i.jsx("input",{type:"text",value:s.lastName,onChange:p=>u("lastName",p.target.value),required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{children:"Email"}),i.jsx("input",{type:"email",value:s.email,onChange:p=>u("email",p.target.value),required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{children:"Phone Number (M-Pesa)"}),i.jsx("input",{type:"tel",value:s.phone,onChange:p=>u("phone",p.target.value),required:!0})]})]})]}),i.jsxs("div",{style:{marginTop:"24px",display:"flex",alignItems:"center",gap:"12px"},children:[i.jsx("input",{type:"checkbox",id:"terms",style:{width:"auto"},checked:s.acceptedTerms,onChange:p=>u("acceptedTerms",p.target.checked)}),i.jsx("label",{htmlFor:"terms",style:{margin:0},children:"I agree to the studio policies and understand the deposit is non-refundable if I cancel within 48 hours."})]})]})]})}function Tx(){const[s,u]=z.useState(1),[f,o]=z.useState(""),[d,h]=z.useState({tattooIdea:"",placement:"",size:"",style:"",colorType:"Blackwork",budget:"",painTolerance:5,referenceImages:[],date:"",time:"",duration:"",firstName:"",lastName:"",email:"",phone:"",acceptedTerms:!1}),{state:p,dispatch:S}=Bt(),x=Vn(),g=()=>{if(s===2&&(!d.date||!d.time)){o("Please choose an available date and time before continuing.");return}o(""),u(Y=>Math.min(Y+1,3))},w=()=>u(Y=>Math.max(Y-1,1)),A=(Y,Q)=>{o(""),h(G=>({...G,[Y]:Q}))},B=Y=>{if(Y.preventDefault(),!gr(p,d.date,d.time)){o("That time is already booked. Please choose another available slot."),u(2);return}const Q={id:`req_${Date.now()}`,clientName:`${d.firstName} ${d.lastName}`,clientEmail:d.email,clientPhone:d.phone,tattooIdea:d.tattooIdea,placement:d.placement,size:d.size,style:d.style,colorType:d.colorType,budget:d.budget,referenceImages:d.referenceImages,preferredDate:d.date,preferredTime:d.time,painTolerance:d.painTolerance,status:"pending",createdAt:new Date().toISOString().split("T")[0],notes:""};S({type:"ADD_BOOKING",payload:Q}),setTimeout(()=>{x("/?booking=success")},1500)};return i.jsxs("div",{className:"booking-wizard card-glass",children:[i.jsx("style",{children:`
        .booking-wizard {
          max-width: 800px;
          margin: 0 auto;
        }
        .wizard-header {
          text-align: center;
          margin-bottom: var(--space-xl);
        }
        .progress-bar {
          display: flex;
          justify-content: space-between;
          position: relative;
          margin-bottom: var(--space-2xl);
        }
        .progress-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--bg-card);
          z-index: 1;
          transform: translateY(-50%);
        }
        .progress-fill {
          position: absolute;
          top: 50%;
          left: 0;
          height: 2px;
          background: var(--accent-primary);
          z-index: 1;
          transform: translateY(-50%);
          transition: width var(--transition-base);
        }
        .step-indicator {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-sm);
        }
        .step-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 2px solid var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: all var(--transition-base);
        }
        .step-indicator.active .step-circle {
          border-color: var(--accent-primary);
          background: var(--accent-primary-dim);
          color: var(--accent-glow);
          box-shadow: var(--glow-purple);
        }
        .step-indicator.completed .step-circle {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: white;
        }
        .step-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .step-indicator.active .step-label {
          color: var(--text-primary);
          font-weight: 600;
        }
        .wizard-content {
          min-height: 400px;
        }
        .wizard-actions {
          display: flex;
          justify-content: space-between;
          margin-top: var(--space-2xl);
          padding-top: var(--space-xl);
          border-top: var(--border-glass);
        }
      `}),i.jsxs("div",{className:"wizard-header",children:[i.jsx("h2",{className:"gradient-text",children:"Book Your Session"}),i.jsx("p",{children:"Tell us about your idea and find a time that works."}),f&&i.jsx("div",{style:{marginTop:"12px",color:"var(--accent-hot)"},children:f})]}),i.jsxs("div",{className:"progress-bar",children:[i.jsx("div",{className:"progress-line"}),i.jsx("div",{className:"progress-fill",style:{width:`${(s-1)/2*100}%`}}),["Tattoo Details","Pick Date","Confirm"].map((Y,Q)=>{const G=Q+1;let H="";return G===s?H="active":G<s&&(H="completed"),i.jsxs("div",{className:`step-indicator ${H}`,children:[i.jsx("div",{className:"step-circle",children:G<s?i.jsx(vh,{size:20}):G}),i.jsx("span",{className:"step-label",children:Y})]},G)})]}),i.jsxs("div",{className:"wizard-content animate-fadeIn",children:[s===1&&i.jsx(Ex,{formData:d,onChange:A}),s===2&&i.jsx(zx,{formData:d,onChange:A}),s===3&&i.jsx(Ax,{formData:d,onChange:A,onSubmit:B})]}),i.jsxs("div",{className:"wizard-actions",children:[s>1?i.jsx("button",{type:"button",className:"btn btn-secondary",onClick:w,children:"Back"}):i.jsx("div",{}),s<3?i.jsx("button",{type:"button",className:"btn btn-primary",onClick:g,children:"Continue"}):i.jsx("button",{type:"button",className:"btn btn-primary",onClick:B,children:"Confirm Booking"})]})]})}function wx(){return i.jsxs("div",{className:"booking-page",style:{paddingTop:"100px",paddingBottom:"var(--space-4xl)",minHeight:"100vh"},children:[i.jsx("style",{children:`
        .booking-bg {
          position: fixed;
          inset: 0;
          z-index: -1;
          background: var(--bg-primary);
        }
        .booking-bg::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 50%;
          height: 50%;
          background: var(--accent-primary);
          filter: blur(150px);
          opacity: 0.15;
          border-radius: 50%;
        }
        .booking-bg::after {
          content: '';
          position: absolute;
          bottom: -20%;
          left: -10%;
          width: 50%;
          height: 50%;
          background: var(--accent-cyan);
          filter: blur(150px);
          opacity: 0.1;
          border-radius: 50%;
        }
      `}),i.jsx("div",{className:"booking-bg"}),i.jsx("div",{className:"container",children:i.jsx(Tx,{})})]})}function Mx(){return i.jsxs("div",{className:"contact-page",style:{paddingTop:"100px",paddingBottom:"var(--space-4xl)",minHeight:"100vh"},children:[i.jsx("style",{children:`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4xl);
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .contact-info-card {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }
        
        .contact-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .contact-icon {
          color: var(--accent-glow);
          background: var(--accent-primary-dim);
          padding: 12px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-text h4 {
          margin-bottom: 4px;
          color: var(--text-primary);
        }
        .contact-text p, .contact-text a {
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .map-placeholder {
          background: var(--bg-secondary);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          height: 100%;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          position: relative;
          overflow: hidden;
        }
        .map-placeholder::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%);
        }
      `}),i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"section-label",children:"Get in Touch"}),i.jsx("h2",{children:"Contact The Studio"}),i.jsx("p",{children:"Have a question before booking? Reach out to us."})]}),i.jsxs("div",{className:"contact-grid",children:[i.jsxs("div",{className:"contact-info-card animate-fadeInUp",children:[i.jsxs("div",{className:"contact-item",children:[i.jsx("div",{className:"contact-icon",children:i.jsx(ql,{size:24})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("h4",{children:"Studio Location"}),i.jsx("p",{children:xe.location}),i.jsx("p",{style:{marginTop:"8px",fontSize:"0.9rem"},children:i.jsx("span",{className:"badge badge-purple",children:"House Calls Available"})})]})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("div",{className:"contact-icon",children:i.jsx(Sr,{size:24})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("h4",{children:"Working Hours"}),i.jsx("p",{children:xe.hours})]})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("div",{className:"contact-icon",children:i.jsx(po,{size:24})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("h4",{children:"Phone / M-Pesa"}),i.jsx("a",{href:`tel:${xe.phone}`,children:xe.phone})]})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("div",{className:"contact-icon",children:i.jsx(yh,{size:24})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("h4",{children:"Instagram"}),i.jsx("a",{href:xe.instagramUrl,target:"_blank",rel:"noopener noreferrer",children:xe.instagram})]})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("div",{className:"contact-icon",children:i.jsx(jr,{size:24})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("h4",{children:"Email"}),i.jsx("a",{href:`mailto:${xe.email}`,children:xe.email})]})]})]}),i.jsx("div",{className:"animate-fadeInUp",style:{animationDelay:"0.2s"},children:i.jsx("div",{className:"map-placeholder",children:i.jsxs("div",{style:{textAlign:"center",zIndex:1},children:[i.jsx(ql,{size:48,style:{opacity:.5,margin:"0 auto 16px"}}),i.jsxs("p",{children:["Google Maps Integration",i.jsx("br",{}),"(Requires API Key for MVP Phase 2)"]})]})})})]})]})]})}function kx(){const[s,u]=z.useState(""),[f,o]=z.useState(""),{dispatch:d}=Bt(),h=Vn(),p=S=>{S.preventDefault(),s==="inksink2026"?(d({type:"LOGIN"}),h("/dashboard")):o("Invalid password. Hint: inksink2026")};return i.jsxs("div",{className:"login-page",children:[i.jsx("style",{children:`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          padding: var(--space-xl);
          position: relative;
        }
        .login-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%);
        }
        .login-card {
          width: 100%;
          max-width: 400px;
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-xl);
          padding: var(--space-2xl);
          position: relative;
          z-index: 1;
          box-shadow: var(--shadow-xl);
        }
        .login-header {
          text-align: center;
          margin-bottom: var(--space-xl);
        }
        .login-logo {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
      `}),i.jsx("div",{className:"login-bg"}),i.jsxs("div",{className:"login-card animate-scaleIn",children:[i.jsxs("div",{className:"login-header",children:[i.jsxs("div",{className:"login-logo",children:[i.jsx("span",{className:"gradient-text",children:"IS"})," Admin"]}),i.jsx("p",{style:{color:"var(--text-secondary)"},children:"Artist Dashboard Access"})]}),i.jsxs("form",{onSubmit:p,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsxs("div",{children:[i.jsx("label",{children:"Master Password"}),i.jsx("input",{type:"password",value:s,onChange:S=>u(S.target.value),placeholder:"Enter password",required:!0})]}),f&&i.jsx("div",{style:{color:"var(--accent-hot)",fontSize:"0.85rem"},children:f}),i.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%",marginTop:"8px"},children:"Access Dashboard"})]}),i.jsx("div",{style:{textAlign:"center",marginTop:"24px"},children:i.jsx("a",{href:"/",style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:"← Back to public site"})})]})]})}function Cx(){const{state:s,dispatch:u}=Bt(),f=new Date().toISOString().split("T")[0],o=s.appointments.filter(S=>S.date===f).sort((S,x)=>S.time.localeCompare(x.time)),d=(S,x)=>{u({type:"UPDATE_APPOINTMENT",payload:{id:S,status:x}})},h=S=>{switch(S){case"completed":return i.jsx(vh,{size:16});case"in-progress":return i.jsx(my,{size:16});case"cancelled":return i.jsx(py,{size:16});default:return i.jsx(Sr,{size:16})}},p=S=>{switch(S){case"completed":return"badge-green";case"in-progress":return"badge-gold";case"cancelled":return"badge-red";default:return"badge-cyan"}};return i.jsxs("div",{className:"today-appointments card",children:[i.jsx("style",{children:`
        .appointments-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-xl);
        }
        .timeline {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          position: relative;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 56px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--bg-secondary);
          z-index: 0;
        }
        .timeline-item {
          display: flex;
          gap: var(--space-lg);
          position: relative;
          z-index: 1;
        }
        .time-column {
          width: 60px;
          flex-shrink: 0;
          text-align: right;
          font-weight: 600;
          color: var(--text-primary);
          padding-top: 12px;
          background: var(--bg-card); /* cover the line */
        }
        .time-column span {
          font-size: 0.8rem;
          color: var(--text-secondary);
          display: block;
          font-weight: normal;
        }
        .session-card {
          flex: 1;
          background: var(--bg-secondary);
          border: var(--border-glass);
          border-radius: var(--radius-md);
          padding: var(--space-md);
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all var(--transition-fast);
        }
        .session-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateX(4px);
        }
        .session-card.in-progress {
          border-color: var(--accent-gold);
          box-shadow: inset 0 0 20px rgba(245, 158, 11, 0.1);
        }
        .session-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .client-name {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 4px;
        }
        .tattoo-details {
          color: var(--text-secondary);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .session-notes {
          background: rgba(0,0,0,0.2);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--text-muted);
          border-left: 2px solid var(--accent-primary);
        }
        .session-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 4px;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 12px;
        }
        
        .empty-state {
          text-align: center;
          padding: var(--space-3xl) 0;
          color: var(--text-secondary);
        }
      `}),i.jsxs("div",{className:"appointments-header",children:[i.jsx("h3",{children:"Today's Sessions"}),i.jsxs("div",{className:"badge badge-purple",children:[o.length," Appointments"]})]}),o.length===0?i.jsxs("div",{className:"empty-state animate-fadeIn",children:[i.jsx(CalendarIcon,{size:48,style:{opacity:.2,margin:"0 auto 16px"}}),i.jsx("p",{children:"No appointments scheduled for today."}),i.jsx("p",{style:{fontSize:"0.85rem"},children:"Time to draw some flash or take a break!"})]}):i.jsx("div",{className:"timeline",children:o.map((S,x)=>i.jsxs("div",{className:"timeline-item animate-fadeInUp",style:{animationDelay:`${x*.1}s`},children:[i.jsxs("div",{className:"time-column",children:[S.time,i.jsx("span",{children:S.duration})]}),i.jsxs("div",{className:`session-card ${S.status==="in-progress"?"in-progress":""}`,children:[i.jsxs("div",{className:"session-header",children:[i.jsxs("div",{children:[i.jsx("div",{className:"client-name",children:S.clientName}),i.jsxs("div",{className:"tattoo-details",children:[S.tattooType," • ",S.placement]})]}),i.jsxs("div",{className:`badge ${p(S.status)}`,children:[h(S.status),S.status.replace("-"," ").toUpperCase()]})]}),i.jsxs("div",{style:{display:"flex",gap:"8px",fontSize:"0.8rem"},children:[i.jsx("span",{className:"badge badge-purple",children:S.style}),S.depositPaid?i.jsx("span",{className:"badge badge-green",children:"Deposit Paid"}):i.jsx("span",{className:"badge badge-red",children:"Deposit Pending"})]}),S.notes&&i.jsx("div",{className:"session-notes",children:S.notes}),i.jsxs("div",{className:"session-actions",children:[S.status==="confirmed"&&i.jsx("button",{className:"btn btn-sm btn-secondary",onClick:()=>d(S.id,"in-progress"),style:{borderColor:"var(--accent-gold)",color:"var(--accent-gold)"},children:"Start Session"}),S.status==="in-progress"&&i.jsx("button",{className:"btn btn-sm btn-primary",onClick:()=>d(S.id,"completed"),children:"Complete & Bill"})]})]})]},S.id))})]})}function Sh(){const{state:s,dispatch:u}=Bt(),[f,o]=z.useState(null),d=s.requests.filter(p=>p.status==="pending"),h=(p,S)=>{u({type:"UPDATE_REQUEST_STATUS",payload:{id:p,status:S}}),o(null)};return i.jsxs("div",{className:"pending-requests",children:[i.jsx("style",{children:`
        .requests-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-xl);
        }
        .requests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--space-lg);
        }
        .request-card {
          background: var(--bg-secondary);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
        }
        .request-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--accent-primary);
        }
        .request-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .request-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .client-name {
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--text-primary);
        }
        .request-date {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .request-idea {
          color: var(--text-secondary);
          font-size: 0.9rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          background: rgba(0,0,0,0.2);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
        }
        .request-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.85rem;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--text-secondary);
        }
        .request-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: auto;
          padding-top: var(--space-md);
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        
        /* Detail Modal (Simplified for inline here) */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10,10,15,0.8);
          backdrop-filter: blur(5px);
          z-index: var(--z-modal);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-lg);
          animation: fadeIn var(--transition-fast);
        }
        .modal-content {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          padding: var(--space-xl);
          animation: scaleIn var(--transition-fast);
        }
      `}),i.jsxs("div",{className:"requests-header",children:[i.jsx("h3",{children:"Pending Tattoo Requests"}),i.jsxs("div",{className:"badge badge-purple",children:[d.length," Needs Review"]})]}),d.length===0?i.jsx("div",{className:"card text-center",style:{padding:"var(--space-3xl) 0",color:"var(--text-secondary)"},children:i.jsx("p",{children:"Inbox zero! All caught up on requests."})}):i.jsx("div",{className:"requests-grid",children:d.map((p,S)=>i.jsxs("div",{className:"request-card animate-fadeInUp",style:{animationDelay:`${S*.1}s`},children:[i.jsxs("div",{className:"request-header",children:[i.jsxs("div",{children:[i.jsx("div",{className:"client-name",children:p.clientName}),i.jsxs("div",{className:"request-date",children:["Received ",p.createdAt]})]}),i.jsx("span",{className:"badge badge-cyan",children:p.style})]}),i.jsxs("div",{className:"request-idea",children:['"',p.tattooIdea,'"']}),i.jsxs("div",{className:"request-meta",children:[i.jsx("span",{className:"badge badge-purple",children:p.placement}),i.jsx("span",{className:"badge badge-purple",children:p.size}),i.jsxs("div",{className:"meta-item",children:[i.jsx(vr,{size:14})," ",p.preferredDate]}),p.preferredTime&&i.jsxs("div",{className:"meta-item",children:[i.jsx(vr,{size:14})," ",p.preferredTime]}),i.jsxs("div",{className:"meta-item",children:[i.jsx(mo,{size:14})," ",p.budget]})]}),i.jsxs("div",{className:"request-actions",children:[i.jsxs("button",{className:"btn btn-sm btn-ghost",style:{gridColumn:"1 / -1",background:"rgba(255,255,255,0.05)"},onClick:()=>o(p),children:[i.jsx(ho,{size:16})," Review Full Details"]}),i.jsx("button",{className:"btn btn-sm btn-secondary",style:{borderColor:"var(--accent-hot)",color:"var(--accent-hot)"},onClick:()=>h(p.id,"declined"),children:"Decline"}),i.jsx("button",{className:"btn btn-sm btn-primary",onClick:()=>h(p.id,"accepted"),children:"Accept"})]})]},p.id))}),f&&i.jsx("div",{className:"modal-overlay",onClick:()=>o(null),children:i.jsxs("div",{className:"modal-content",onClick:p=>p.stopPropagation(),children:[i.jsx("h3",{style:{marginBottom:"8px"},children:"Review Request"}),i.jsxs("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:["From: ",f.clientName," (",f.clientPhone,")"]}),i.jsxs("div",{className:"card",style:{marginBottom:"24px",background:"var(--bg-secondary)"},children:[i.jsx("h5",{style:{marginBottom:"8px"},children:"Idea"}),i.jsxs("p",{style:{color:"var(--text-secondary)"},children:['"',f.tattooIdea,'"']})]}),i.jsxs("div",{className:"grid",style:{gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"24px"},children:[i.jsxs("div",{children:[i.jsx("span",{style:{display:"block",fontSize:"0.8rem",color:"var(--text-muted)"},children:"Style"}),i.jsx("span",{children:f.style})]}),i.jsxs("div",{children:[i.jsx("span",{style:{display:"block",fontSize:"0.8rem",color:"var(--text-muted)"},children:"Placement"}),i.jsx("span",{children:f.placement})]}),i.jsxs("div",{children:[i.jsx("span",{style:{display:"block",fontSize:"0.8rem",color:"var(--text-muted)"},children:"Size"}),i.jsx("span",{children:f.size})]}),i.jsxs("div",{children:[i.jsx("span",{style:{display:"block",fontSize:"0.8rem",color:"var(--text-muted)"},children:"Color"}),i.jsx("span",{children:f.colorType})]})]}),f.referenceImages&&f.referenceImages.length>0&&i.jsxs("div",{style:{marginBottom:"24px"},children:[i.jsx("h5",{style:{marginBottom:"8px"},children:"References"}),i.jsx("div",{style:{display:"flex",gap:"8px",overflowX:"auto"},children:f.referenceImages.map((p,S)=>i.jsx("img",{src:p,alt:"Ref",style:{height:"100px",borderRadius:"8px",objectFit:"cover"}},S))})]}),i.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",marginTop:"32px"},children:[i.jsx("button",{className:"btn btn-ghost",onClick:()=>o(null),children:"Close"}),i.jsx("button",{className:"btn btn-secondary",onClick:()=>h(f.id,"consultation"),children:"Request Consult"}),i.jsx("button",{className:"btn btn-primary",onClick:()=>h(f.id,"accepted"),children:"Accept & Schedule"})]})]})})]})}function _x(){const{state:s}=Bt(),u=new Date,[f,o]=z.useState(u.getMonth()),[d,h]=z.useState(u.getFullYear()),[p,S]=z.useState(u.toISOString().split("T")[0]),x=new Date(d,f+1,0).getDate(),g=new Date(d,f,1).getDay(),w=Array.from({length:x},(O,Z)=>Z+1),A=Array.from({length:g},(O,Z)=>Z),B=["January","February","March","April","May","June","July","August","September","October","November","December"],Y=()=>{f===0?(o(11),h(O=>O-1)):o(O=>O-1)},Q=()=>{f===11?(o(0),h(O=>O+1)):o(O=>O+1)},G=O=>{const Z=`${d}-${String(f+1).padStart(2,"0")}-${String(O).padStart(2,"0")}`;S(Z)},H=oh(s),U=H.filter(O=>O.date===p).map(O=>{var se,pe,I,we,qe,st,Fe;if(O.source==="appointment")return{id:O.id,clientName:((se=s.appointments.find(de=>de.id===O.id))==null?void 0:se.clientName)||"Appointment",time:((pe=s.appointments.find(de=>de.id===O.id))==null?void 0:pe.time)||"",duration:((I=s.appointments.find(de=>de.id===O.id))==null?void 0:I.duration)||"",tattooType:((we=s.appointments.find(de=>de.id===O.id))==null?void 0:we.tattooType)||"Session",style:((qe=s.appointments.find(de=>de.id===O.id))==null?void 0:qe.style)||"Appointment",placement:((st=s.appointments.find(de=>de.id===O.id))==null?void 0:st.placement)||"",status:((Fe=s.appointments.find(de=>de.id===O.id))==null?void 0:Fe.status)||"confirmed",source:"appointment"};const Z=[...s.requests,...s.bookings].find(de=>de.id===O.id);return{id:O.id,clientName:(Z==null?void 0:Z.clientName)||"Pending request",time:(Z==null?void 0:Z.preferredTime)||"",duration:"Consultation",tattooType:(Z==null?void 0:Z.tattooIdea)||"Booking request",style:(Z==null?void 0:Z.style)||"Request",placement:(Z==null?void 0:Z.placement)||"",status:(Z==null?void 0:Z.status)||"pending",source:"request"}}).sort((O,Z)=>O.time.localeCompare(Z.time)),J=O=>{const Z=`${d}-${String(f+1).padStart(2,"0")}-${String(O).padStart(2,"0")}`;return H.some(se=>se.date===Z)};return i.jsxs("div",{className:"dash-calendar-view",children:[i.jsx("style",{children:`
        .calendar-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-xl);
        }
        @media (max-width: 992px) {
          .calendar-layout {
            grid-template-columns: 1fr;
          }
        }
        
        .main-calendar {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
        }
        
        .cal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-xl);
        }
        
        .cal-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 12px;
          text-align: center;
        }
        
        .cal-day-name {
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 12px;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        
        .cal-cell {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          background: var(--bg-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          position: relative;
          font-weight: 500;
          border: 1px solid transparent;
        }
        
        .cal-cell:hover:not(.empty) {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-2px);
        }
        
        .cal-cell.selected {
          background: var(--accent-primary-dim);
          border-color: var(--accent-primary);
          color: var(--text-primary);
          box-shadow: var(--glow-purple);
        }
        
        .cal-dot {
          position: absolute;
          bottom: 8px;
          width: 6px;
          height: 6px;
          background: var(--accent-cyan);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-cyan);
        }
        
        .side-panel {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }
        
        .selected-date-header {
          background: var(--gradient-card);
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          border: var(--border-glass);
        }
        
        .app-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }
        
        .app-card {
          background: var(--bg-card);
          border: var(--border-glass);
          border-left: 3px solid var(--accent-primary);
          padding: var(--space-md);
          border-radius: var(--radius-md);
        }
        
        .app-time {
          color: var(--accent-glow);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
      `}),i.jsxs("div",{className:"calendar-layout",children:[i.jsxs("div",{className:"main-calendar animate-fadeInUp",children:[i.jsxs("div",{className:"cal-header",children:[i.jsx("h3",{children:"Studio Calendar"}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[i.jsx("button",{className:"btn btn-icon btn-secondary",onClick:Y,children:i.jsx(ph,{size:20})}),i.jsxs("span",{style:{fontSize:"1.2rem",fontWeight:600,minWidth:"150px",textAlign:"center"},children:[B[f]," ",d]}),i.jsx("button",{className:"btn btn-icon btn-secondary",onClick:Q,children:i.jsx(br,{size:20})})]})]}),i.jsxs("div",{className:"cal-grid",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(O=>i.jsx("div",{className:"cal-day-name",children:O},O)),A.map(O=>i.jsx("div",{className:"cal-cell empty",style:{background:"transparent"}},`blank-${O}`)),w.map(O=>{const Z=`${d}-${String(f+1).padStart(2,"0")}-${String(O).padStart(2,"0")}`,se=p===Z,pe=J(O);return i.jsxs("div",{className:`cal-cell ${se?"selected":""}`,onClick:()=>G(O),children:[O,pe&&i.jsx("div",{className:"cal-dot"})]},O)})]})]}),i.jsxs("div",{className:"side-panel animate-fadeInUp",style:{animationDelay:"0.2s"},children:[i.jsxs("div",{className:"selected-date-header",children:[i.jsx("h4",{style:{color:"var(--text-secondary)",fontSize:"0.9rem",marginBottom:"4px"},children:"Schedule for"}),i.jsx("h2",{style:{fontSize:"1.5rem",color:"var(--text-primary)"},children:new Date(p).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),U.length===0?i.jsxs("div",{className:"card text-center",style:{padding:"var(--space-2xl) 0",color:"var(--text-secondary)"},children:[i.jsx(CalendarIcon,{size:32,style:{opacity:.5,margin:"0 auto 12px"}}),i.jsx("p",{children:"No sessions booked or held."})]}):i.jsx("div",{className:"app-list",children:U.map(O=>i.jsxs("div",{className:"app-card",children:[i.jsxs("div",{className:"app-time",children:[i.jsx(Sr,{size:14}),O.time,O.duration?` (${O.duration})`:""]}),i.jsx("div",{style:{fontWeight:600,fontSize:"1.1rem",marginBottom:"4px"},children:O.clientName}),i.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem",marginBottom:"8px"},children:O.tattooType}),i.jsxs("div",{style:{display:"flex",gap:"8px"},children:[i.jsx("span",{className:"badge badge-cyan",children:O.style}),i.jsx("span",{className:"badge badge-purple",children:O.placement}),i.jsx("span",{className:`badge ${O.source==="request"?"badge-gold":"badge-green"}`,children:O.source==="request"?"HOLD":"BOOKED"})]})]},O.id))})]})]})]})}function Rx({client:s,onBack:u}){const{dispatch:f}=Bt(),[o,d]=z.useState(!1),[h,p]=z.useState(s.notes||""),S=()=>{f({type:"UPDATE_CLIENT",payload:{id:s.id,notes:h}}),d(!1)};return i.jsxs("div",{className:"client-profile animate-fadeIn",children:[i.jsx("style",{children:`
        .profile-header {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-xl);
        }
        .back-btn {
          background: var(--bg-secondary);
          border: var(--border-glass);
          color: var(--text-secondary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .back-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
          background: var(--accent-primary-dim);
        }
        
        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: var(--space-xl);
        }
        @media (max-width: 992px) {
          .profile-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .main-col {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }
        .side-col {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }
        
        .info-card {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
          position: relative;
          overflow: hidden;
        }
        .info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-purple);
        }
        
        .client-name-lg {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        
        .contact-row {
          display: flex;
          align-items: center;
          gap: 24px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
          margin-top: var(--space-xl);
          padding-top: var(--space-xl);
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .stat-box {
          text-align: center;
        }
        .stat-val {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-glow);
          margin-bottom: 4px;
        }
        .stat-lbl {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .section-card {
          background: var(--bg-secondary);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-lg);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 12px;
        }
        
        .tattoo-history {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .history-item {
          background: var(--bg-card);
          padding: 16px;
          border-radius: var(--radius-md);
          border-left: 3px solid var(--accent-primary);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .alert-box {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 12px;
          border-radius: var(--radius-md);
          display: flex;
          gap: 12px;
          align-items: flex-start;
          color: var(--text-primary);
        }
        .alert-icon {
          color: var(--accent-hot);
          flex-shrink: 0;
        }
        
        .notes-area {
          width: 100%;
          background: var(--bg-primary);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-md);
          padding: 12px;
          color: var(--text-primary);
          font-family: inherit;
          min-height: 150px;
          resize: vertical;
        }
        .notes-area:focus {
          outline: none;
          border-color: var(--accent-primary);
        }
      `}),i.jsxs("div",{className:"profile-header",children:[i.jsx("button",{className:"back-btn",onClick:u,children:i.jsx(Iv,{size:20})}),i.jsx("h2",{children:"Client Profile"})]}),i.jsxs("div",{className:"profile-grid",children:[i.jsxs("div",{className:"main-col",children:[i.jsxs("div",{className:"info-card",children:[i.jsx("div",{className:"client-name-lg",children:s.name}),i.jsxs("div",{className:"contact-row",children:[i.jsxs("div",{className:"contact-item",children:[i.jsx(po,{size:16,className:"text-muted"})," ",s.phone]}),i.jsxs("div",{className:"contact-item",children:[i.jsx(jr,{size:16,className:"text-muted"})," ",s.email]}),i.jsxs("div",{className:"contact-item",children:[i.jsx(vr,{size:16,className:"text-muted"})," Joined ",s.joinDate]})]}),i.jsxs("div",{className:"stats-grid",children:[i.jsxs("div",{className:"stat-box",children:[i.jsx("div",{className:"stat-val",children:s.previousTattoos.length}),i.jsx("div",{className:"stat-lbl",children:"Tattoos"})]}),i.jsxs("div",{className:"stat-box",children:[i.jsx("div",{className:"stat-val",children:s.totalSpent.toLocaleString()}),i.jsx("div",{className:"stat-lbl",children:"Total Spent (KES)"})]}),i.jsxs("div",{className:"stat-box",children:[i.jsx("div",{className:"stat-val",style:{color:"var(--text-primary)"},children:s.lastVisit||"Never"}),i.jsx("div",{className:"stat-lbl",children:"Last Visit"})]})]})]}),i.jsxs("div",{className:"section-card",children:[i.jsx("div",{className:"section-header",children:i.jsx("h4",{style:{margin:0},children:"Tattoo History"})}),s.previousTattoos.length===0?i.jsx("p",{style:{color:"var(--text-secondary)",fontStyle:"italic"},children:"No completed tattoos yet."}):i.jsx("div",{className:"tattoo-history",children:s.previousTattoos.map((x,g)=>i.jsxs("div",{className:"history-item",children:[i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:600,fontSize:"1.1rem"},children:x.style}),i.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:x.placement})]}),i.jsxs("div",{style:{textAlign:"right"},children:[i.jsxs("div",{style:{color:"var(--accent-glow)"},children:[x.cost.toLocaleString()," KES"]}),i.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:x.date})]})]},g))})]}),s.reviews&&s.reviews.length>0&&i.jsxs("div",{className:"section-card",children:[i.jsx("div",{className:"section-header",children:i.jsx("h4",{style:{margin:0},children:"Reviews Left"})}),i.jsx("div",{className:"tattoo-history",children:s.reviews.map((x,g)=>i.jsxs("div",{className:"history-item",style:{borderLeftColor:"var(--accent-gold)"},children:[i.jsxs("div",{children:[i.jsx("div",{style:{display:"flex",gap:"4px",color:"var(--accent-gold)",marginBottom:"4px"},children:[...Array(5)].map((w,A)=>i.jsx(bh,{size:14,fill:A<x.rating?"currentColor":"none"},A))}),i.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"0.95rem",fontStyle:"italic"},children:['"',x.text,'"']})]}),i.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:x.date})]},g))})]})]}),i.jsxs("div",{className:"side-col",children:[s.allergies&&s.allergies.toLowerCase()!=="none"&&i.jsxs("div",{className:"alert-box",children:[i.jsx(gh,{size:20,className:"alert-icon"}),i.jsxs("div",{children:[i.jsx("strong",{style:{display:"block",marginBottom:"4px"},children:"Medical Alert"}),i.jsx("span",{style:{fontSize:"0.9rem"},children:s.allergies})]})]}),i.jsxs("div",{className:"section-card",children:[i.jsx("h4",{style:{marginBottom:"16px"},children:"Preferences"}),i.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.95rem"},children:s.preferences||"No specific preferences noted."})]}),i.jsxs("div",{className:"section-card",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h4",{style:{margin:0},children:"Artist Notes"}),o?i.jsxs("button",{className:"btn btn-sm btn-primary",onClick:S,style:{padding:"4px 12px"},children:[i.jsx(Vy,{size:14,style:{marginRight:"4px"}})," Save"]}):i.jsx("button",{className:"btn btn-icon btn-ghost",onClick:()=>d(!0),children:i.jsx(Yy,{size:16})})]}),o?i.jsx("textarea",{className:"notes-area",value:h,onChange:x=>p(x.target.value),autoFocus:!0}):i.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.95rem",whiteSpace:"pre-wrap"},children:h||"No notes added yet."})]})]})]})]})}function Dx(){const{state:s}=Bt(),[u,f]=z.useState(""),[o,d]=z.useState(null),h=s.clients.filter(p=>p.name.toLowerCase().includes(u.toLowerCase())||p.phone.includes(u)||p.email.toLowerCase().includes(u.toLowerCase()));return o?i.jsx(Rx,{client:o,onBack:()=>d(null)}):i.jsxs("div",{className:"client-list-view",children:[i.jsx("style",{children:`
        .list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-xl);
        }
        @media (max-width: 768px) {
          .list-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-md);
          }
        }
        .search-box {
          position: relative;
          width: 300px;
        }
        .search-box input {
          padding-left: 40px;
          border-radius: var(--radius-full);
          background: var(--bg-secondary);
        }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .client-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--space-lg);
        }
        .client-card {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .client-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-2px);
          background: var(--bg-card-hover);
        }
        .client-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-glow);
          font-weight: 600;
          font-size: 1.2rem;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .client-info {
          flex: 1;
        }
        .client-name {
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .client-contact {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }
        .client-stats {
          display: flex;
          gap: 12px;
          font-size: 0.8rem;
        }
        .stat-item {
          background: rgba(0,0,0,0.2);
          padding: 4px 8px;
          border-radius: 4px;
          color: var(--text-secondary);
        }
        .stat-item strong {
          color: var(--text-primary);
          margin-left: 4px;
        }
      `}),i.jsxs("div",{className:"list-header",children:[i.jsxs("div",{children:[i.jsx("h2",{children:"Client Database"}),i.jsxs("p",{children:["Manage your ",s.clients.length," clients and their history."]})]}),i.jsxs("div",{className:"search-box",children:[i.jsx(xh,{size:18,className:"search-icon"}),i.jsx("input",{type:"text",placeholder:"Search by name, phone, or email...",value:u,onChange:p=>f(p.target.value)})]})]}),h.length===0?i.jsxs("div",{className:"card text-center",style:{padding:"var(--space-4xl) 0"},children:[i.jsx(ax,{size:48,style:{opacity:.3,margin:"0 auto 16px",color:"var(--text-secondary)"}}),i.jsxs("p",{style:{color:"var(--text-secondary)"},children:['No clients found matching "',u,'"']})]}):i.jsx("div",{className:"client-grid",children:h.map((p,S)=>i.jsxs("div",{className:"client-card animate-fadeInUp",style:{animationDelay:`${S*.05}s`},onClick:()=>d(p),children:[i.jsx("div",{className:"client-avatar",children:p.name.charAt(0)}),i.jsxs("div",{className:"client-info",children:[i.jsx("div",{className:"client-name",children:p.name}),i.jsxs("div",{className:"client-contact",children:[p.phone," • ",p.email]}),i.jsxs("div",{className:"client-stats",children:[i.jsxs("div",{className:"stat-item",children:["Tattoos: ",i.jsx("strong",{children:p.previousTattoos.length})]}),i.jsxs("div",{className:"stat-item",children:["Spent: ",i.jsx("strong",{children:p.totalSpent.toLocaleString()})," KES"]})]})]}),i.jsx(br,{size:20,className:"text-muted",style:{alignSelf:"center"}})]},p.id))})]})}function jh(){const{state:s}=Bt(),u=s.earnings,f=Math.max(...u.weeklyBreakdown.map(o=>o.amount));return i.jsxs("div",{className:"earnings-overview",children:[i.jsx("style",{children:`
        .overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-lg);
          margin-bottom: var(--space-2xl);
        }
        .stat-card {
          background: var(--bg-secondary);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .stat-card::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, var(--accent-primary-dim) 0%, transparent 70%);
          transform: translate(30%, -30%);
          pointer-events: none;
        }
        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 8px;
        }
        .stat-value {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .stat-growth {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.85rem;
        }
        .growth-up { color: var(--accent-green); }
        .growth-down { color: var(--accent-hot); }
        
        .charts-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-lg);
        }
        @media (max-width: 992px) {
          .charts-grid { grid-template-columns: 1fr; }
        }
        
        .chart-card {
          background: var(--bg-card);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
        }
        .chart-header {
          margin-bottom: var(--space-xl);
        }
        
        /* CSS Bar Chart */
        .bar-chart {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 200px;
          padding-top: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex: 1;
        }
        .bar-wrapper {
          width: 32px;
          height: 100%;
          display: flex;
          align-items: flex-end;
          background: rgba(0,0,0,0.2);
          border-radius: 4px 4px 0 0;
          overflow: hidden;
          position: relative;
        }
        .bar-wrapper:hover .bar-tooltip {
          opacity: 1;
        }
        .bar-fill {
          width: 100%;
          background: var(--gradient-purple);
          border-radius: 4px 4px 0 0;
          transition: height 1s var(--transition-spring);
        }
        .bar-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .bar-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-primary);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          color: white;
          opacity: 0;
          transition: opacity 0.2s;
          pointer-events: none;
          white-space: nowrap;
          border: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 4px;
        }
        
        /* Progress list */
        .progress-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .progress-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .progress-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }
        .progress-track {
          height: 8px;
          background: rgba(0,0,0,0.3);
          border-radius: 4px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--accent-cyan);
          border-radius: 4px;
        }
      `}),i.jsxs("div",{style:{marginBottom:"var(--space-2xl)"},children:[i.jsx("h2",{children:"Earnings Overview"}),i.jsx("p",{children:"Monitor your studio's financial performance."})]}),i.jsxs("div",{className:"overview-grid",children:[i.jsxs("div",{className:"stat-card animate-fadeInUp",style:{animationDelay:"0.1s"},children:[i.jsx("span",{className:"stat-label",children:"Today's Revenue"}),i.jsxs("span",{className:"stat-value",children:[u.totalToday.toLocaleString()," KES"]}),i.jsxs("div",{className:"stat-growth growth-up",children:[i.jsx(Wc,{size:16})," ",i.jsx("span",{children:"Calculated from completed sessions"})]})]}),i.jsxs("div",{className:"stat-card animate-fadeInUp",style:{animationDelay:"0.2s"},children:[i.jsx("span",{className:"stat-label",children:"This Week"}),i.jsxs("span",{className:"stat-value",children:[u.totalThisWeek.toLocaleString()," KES"]}),i.jsxs("div",{className:"stat-growth growth-up",children:[i.jsx(Wc,{size:16})," ",i.jsx("span",{children:"+12% from last week"})]})]}),i.jsxs("div",{className:"stat-card animate-fadeInUp",style:{animationDelay:"0.3s"},children:[i.jsx("span",{className:"stat-label",children:"This Month"}),i.jsxs("span",{className:"stat-value",children:[u.totalThisMonth.toLocaleString()," KES"]}),i.jsxs("div",{className:"stat-growth growth-up",children:[i.jsx(Wc,{size:16})," ",i.jsx("span",{children:"+8% from last month"})]})]}),i.jsxs("div",{className:"stat-card animate-fadeInUp",style:{animationDelay:"0.4s"},children:[i.jsx("span",{className:"stat-label",children:"Pending Deposits"}),i.jsxs("span",{className:"stat-value",children:[u.depositsPending.toLocaleString()," KES"]}),i.jsxs("div",{className:"stat-growth",style:{color:"var(--text-secondary)"},children:[i.jsx(mo,{size:16})," ",i.jsx("span",{children:"From upcoming bookings"})]})]})]}),i.jsxs("div",{className:"charts-grid",children:[i.jsxs("div",{className:"chart-card animate-fadeInUp",style:{animationDelay:"0.5s"},children:[i.jsx("div",{className:"chart-header",children:i.jsx("h4",{children:"Weekly Revenue"})}),i.jsx("div",{className:"bar-chart",children:u.weeklyBreakdown.map(o=>{const d=f>0?o.amount/f*100:0;return i.jsxs("div",{className:"bar-group",children:[i.jsxs("div",{className:"bar-wrapper",children:[i.jsxs("div",{className:"bar-tooltip",children:[o.amount.toLocaleString()," KES"]}),i.jsx("div",{className:"bar-fill",style:{height:`${d}%`}})]}),i.jsx("span",{className:"bar-label",children:o.day})]},o.day)})})]}),i.jsxs("div",{className:"chart-card animate-fadeInUp",style:{animationDelay:"0.6s"},children:[i.jsx("div",{className:"chart-header",children:i.jsx("h4",{children:"Popular Styles"})}),i.jsx("div",{className:"progress-list",children:u.popularStyles.slice(0,5).map((o,d)=>i.jsxs("div",{className:"progress-item",children:[i.jsxs("div",{className:"progress-header",children:[i.jsx("span",{children:o.style}),i.jsxs("span",{style:{color:"var(--text-secondary)"},children:[o.percentage,"%"]})]}),i.jsx("div",{className:"progress-track",children:i.jsx("div",{className:"progress-fill",style:{width:`${o.percentage}%`,background:d===0?"var(--accent-primary)":d===1?"var(--accent-cyan)":d===2?"var(--accent-gold)":"var(--text-muted)"}})})]},o.style))})]})]})]})}function Ox(){const{state:s}=Bt(),u=Vn();return z.useEffect(()=>{s.isAuthenticated||u("/login")},[s.isAuthenticated,u]),s.isAuthenticated?i.jsx("div",{className:"dashboard-overview",children:i.jsxs("div",{className:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"var(--space-xl)"},children:[i.jsxs("div",{style:{gridColumn:"1 / -1"},children:[i.jsx("h2",{style:{marginBottom:"8px"},children:"Welcome back, Barry"}),i.jsx("p",{style:{color:"var(--text-secondary)"},children:"Here's what's happening at InkSink today."})]}),i.jsx("div",{style:{gridColumn:"1 / -1"},children:i.jsx(jh,{})}),i.jsx("div",{children:i.jsx(Cx,{})}),i.jsx("div",{children:i.jsx(Sh,{})})]})}):null}function qn({children:s}){return i.jsxs(i.Fragment,{children:[i.jsx(sx,{}),s]})}function Ux(){return i.jsx(Vv,{children:i.jsx(Av,{children:i.jsxs(av,{children:[i.jsx(yt,{path:"/",element:i.jsx(qn,{children:i.jsx(yx,{})})}),i.jsx(yt,{path:"/portfolio",element:i.jsx(qn,{children:i.jsx(jx,{})})}),i.jsx(yt,{path:"/process",element:i.jsx(qn,{children:i.jsx(Nx,{})})}),i.jsx(yt,{path:"/book",element:i.jsx(qn,{children:i.jsx(wx,{})})}),i.jsx(yt,{path:"/contact",element:i.jsx(qn,{children:i.jsx(Mx,{})})}),i.jsx(yt,{path:"/login",element:i.jsx(kx,{})}),i.jsxs(yt,{path:"/dashboard",element:i.jsx(cx,{}),children:[i.jsx(yt,{index:!0,element:i.jsx(Ox,{})}),i.jsx(yt,{path:"requests",element:i.jsx(Sh,{})}),i.jsx(yt,{path:"calendar",element:i.jsx(_x,{})}),i.jsx(yt,{path:"clients",element:i.jsx(Dx,{})}),i.jsx(yt,{path:"earnings",element:i.jsx(jh,{})})]})]})})})}tg.createRoot(document.getElementById("root")).render(i.jsx(z.StrictMode,{children:i.jsx(Ux,{})}));
