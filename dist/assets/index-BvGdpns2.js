function lI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function uI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Av={exports:{}},gu={},kv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),cI=Symbol.for("react.portal"),dI=Symbol.for("react.fragment"),hI=Symbol.for("react.strict_mode"),fI=Symbol.for("react.profiler"),pI=Symbol.for("react.provider"),mI=Symbol.for("react.context"),gI=Symbol.for("react.forward_ref"),yI=Symbol.for("react.suspense"),vI=Symbol.for("react.memo"),_I=Symbol.for("react.lazy"),Fm=Symbol.iterator;function wI(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var Pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cv=Object.assign,Nv={};function hs(t,e,n){this.props=t,this.context=e,this.refs=Nv,this.updater=n||Pv}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bv(){}bv.prototype=hs.prototype;function jh(t,e,n){this.props=t,this.context=e,this.refs=Nv,this.updater=n||Pv}var Mh=jh.prototype=new bv;Mh.constructor=jh;Cv(Mh,hs.prototype);Mh.isPureReactComponent=!0;var Um=Array.isArray,Dv=Object.prototype.hasOwnProperty,Fh={current:null},Ov={key:!0,ref:!0,__self:!0,__source:!0};function Vv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dv.call(e,r)&&!Ov.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ko,type:t,key:s,ref:o,props:i,_owner:Fh.current}}function EI(t,e){return{$$typeof:Ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ko}function TI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bm=/\/+/g;function kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?TI(""+t.key):e.toString(36)}function nl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ko:case cI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+kc(o,0):r,Um(i)?(n="",t!=null&&(n=t.replace(Bm,"$&/")+"/"),nl(i,e,n,"",function(c){return c})):i!=null&&(Uh(i)&&(i=EI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Um(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+kc(s,l);o+=nl(s,e,n,u,i)}else if(u=wI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+kc(s,l++),o+=nl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ba(t,e,n){if(t==null)return t;var r=[],i=0;return nl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function II(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},rl={transition:null},xI={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:rl,ReactCurrentOwner:Fh};function Lv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ba,forEach:function(t,e,n){ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ba(t,function(){e++}),e},toArray:function(t){return ba(t,function(e){return e})||[]},only:function(t){if(!Uh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=hs;ee.Fragment=dI;ee.Profiler=fI;ee.PureComponent=jh;ee.StrictMode=hI;ee.Suspense=yI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xI;ee.act=Lv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Cv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Dv.call(e,u)&&!Ov.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ko,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:mI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pI,_context:t},t.Consumer=t};ee.createElement=Vv;ee.createFactory=function(t){var e=Vv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:gI,render:t}};ee.isValidElement=Uh;ee.lazy=function(t){return{$$typeof:_I,_payload:{_status:-1,_result:t},_init:II}};ee.memo=function(t,e){return{$$typeof:vI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=rl.transition;rl.transition={};try{t()}finally{rl.transition=e}};ee.unstable_act=Lv;ee.useCallback=function(t,e){return gt.current.useCallback(t,e)};ee.useContext=function(t){return gt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return gt.current.useEffect(t,e)};ee.useId=function(){return gt.current.useId()};ee.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return gt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};ee.useRef=function(t){return gt.current.useRef(t)};ee.useState=function(t){return gt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return gt.current.useTransition()};ee.version="18.3.1";kv.exports=ee;var O=kv.exports;const jv=uI(O),SI=lI({__proto__:null,default:jv},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RI=O,AI=Symbol.for("react.element"),kI=Symbol.for("react.fragment"),PI=Object.prototype.hasOwnProperty,CI=RI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NI={key:!0,ref:!0,__self:!0,__source:!0};function Mv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)PI.call(e,r)&&!NI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:AI,type:t,key:s,ref:o,props:i,_owner:CI.current}}gu.Fragment=kI;gu.jsx=Mv;gu.jsxs=Mv;Av.exports=gu;var p=Av.exports,pd={},Fv={exports:{}},bt={},Uv={exports:{}},Bv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,$){var Q=B.length;B.push($);e:for(;0<Q;){var we=Q-1>>>1,ue=B[we];if(0<i(ue,$))B[we]=$,B[Q]=ue,Q=we;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var $=B[0],Q=B.pop();if(Q!==$){B[0]=Q;e:for(var we=0,ue=B.length,me=ue>>>1;we<me;){var Ot=2*(we+1)-1,Bt=B[Ot],wn=Ot+1,En=B[wn];if(0>i(Bt,Q))wn<ue&&0>i(En,Bt)?(B[we]=En,B[wn]=Q,we=wn):(B[we]=Bt,B[Ot]=Q,we=Ot);else if(wn<ue&&0>i(En,Q))B[we]=En,B[wn]=Q,we=wn;else break e}}return $}function i(B,$){var Q=B.sortIndex-$.sortIndex;return Q!==0?Q:B.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,m=null,g=3,x=!1,P=!1,N=!1,k=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=B)r(c),$.sortIndex=$.expirationTime,e(u,$);else break;$=n(c)}}function D(B){if(N=!1,S(B),!P)if(n(u)!==null)P=!0,be(M);else{var $=n(c);$!==null&&pe(D,$.startTime-B)}}function M(B,$){P=!1,N&&(N=!1,I(v),v=-1),x=!0;var Q=g;try{for(S($),m=n(u);m!==null&&(!(m.expirationTime>$)||B&&!C());){var we=m.callback;if(typeof we=="function"){m.callback=null,g=m.priorityLevel;var ue=we(m.expirationTime<=$);$=t.unstable_now(),typeof ue=="function"?m.callback=ue:m===n(u)&&r(u),S($)}else r(u);m=n(u)}if(m!==null)var me=!0;else{var Ot=n(c);Ot!==null&&pe(D,Ot.startTime-$),me=!1}return me}finally{m=null,g=Q,x=!1}}var U=!1,E=null,v=-1,R=5,A=-1;function C(){return!(t.unstable_now()-A<R)}function T(){if(E!==null){var B=t.unstable_now();A=B;var $=!0;try{$=E(!0,B)}finally{$?_():(U=!1,E=null)}}else U=!1}var _;if(typeof w=="function")_=function(){w(T)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,le=G.port2;G.port1.onmessage=T,_=function(){le.postMessage(null)}}else _=function(){k(T,0)};function be(B){E=B,U||(U=!0,_())}function pe(B,$){v=k(function(){B(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||x||(P=!0,be(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var Q=g;g=$;try{return B()}finally{g=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,$){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=g;g=B;try{return $()}finally{g=Q}},t.unstable_scheduleCallback=function(B,$,Q){var we=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?we+Q:we):Q=we,B){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Q+ue,B={id:h++,callback:$,priorityLevel:B,startTime:Q,expirationTime:ue,sortIndex:-1},Q>we?(B.sortIndex=Q,e(c,B),n(u)===null&&B===n(c)&&(N?(I(v),v=-1):N=!0,pe(D,Q-we))):(B.sortIndex=ue,e(u,B),P||x||(P=!0,be(M))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var $=g;return function(){var Q=g;g=$;try{return B.apply(this,arguments)}finally{g=Q}}}})(Bv);Uv.exports=Bv;var bI=Uv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DI=O,Nt=bI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zv=new Set,yo={};function fi(t,e){Xi(t,e),Xi(t+"Capture",e)}function Xi(t,e){for(yo[t]=e,t=0;t<e.length;t++)zv.add(e[t])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),md=Object.prototype.hasOwnProperty,OI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zm={},$m={};function VI(t){return md.call($m,t)?!0:md.call(zm,t)?!1:OI.test(t)?$m[t]=!0:(zm[t]=!0,!1)}function LI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jI(t,e,n,r){if(e===null||typeof e>"u"||LI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,zh);Xe[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,zh);Xe[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,zh);Xe[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function $h(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jI(e,n,i,r)&&(n=null),r||i===null?VI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qn=DI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),Ai=Symbol.for("react.portal"),ki=Symbol.for("react.fragment"),Wh=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),$v=Symbol.for("react.provider"),Wv=Symbol.for("react.context"),qh=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),Hh=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),qv=Symbol.for("react.offscreen"),Wm=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=Wm&&t[Wm]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Pc;function qs(t){if(Pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pc=e&&e[1]||""}return`
`+Pc+t}var Cc=!1;function Nc(t,e){if(!t||Cc)return"";Cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qs(t):""}function MI(t){switch(t.tag){case 5:return qs(t.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return t=Nc(t.type,!1),t;case 11:return t=Nc(t.type.render,!1),t;case 1:return t=Nc(t.type,!0),t;default:return""}}function _d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ki:return"Fragment";case Ai:return"Portal";case gd:return"Profiler";case Wh:return"StrictMode";case yd:return"Suspense";case vd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wv:return(t.displayName||"Context")+".Consumer";case $v:return(t._context.displayName||"Context")+".Provider";case qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hh:return e=t.displayName||null,e!==null?e:_d(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return _d(t(e))}catch{}}return null}function FI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _d(e);case 8:return e===Wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UI(t){var e=Hv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oa(t){t._valueTracker||(t._valueTracker=UI(t))}function Kv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Hv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wd(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gv(t,e){e=e.checked,e!=null&&$h(t,"checked",e,!1)}function Ed(t,e){Gv(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Td(t,e.type,n):e.hasOwnProperty("defaultValue")&&Td(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Td(t,e,n){(e!=="number"||xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function Bi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Id(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Km(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Hs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function Qv(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,Xv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},BI=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){BI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function Jv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function Zv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zI=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sd(t,e){if(e){if(zI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Rd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ad=null;function Kh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kd=null,zi=null,$i=null;function Qm(t){if(t=Yo(t)){if(typeof kd!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Eu(e),kd(t.stateNode,t.type,e))}}function e_(t){zi?$i?$i.push(t):$i=[t]:zi=t}function t_(){if(zi){var t=zi,e=$i;if($i=zi=null,Qm(t),e)for(t=0;t<e.length;t++)Qm(e[t])}}function n_(t,e){return t(e)}function r_(){}var bc=!1;function i_(t,e,n){if(bc)return t(e,n);bc=!0;try{return n_(t,e,n)}finally{bc=!1,(zi!==null||$i!==null)&&(r_(),t_())}}function _o(t,e){var n=t.stateNode;if(n===null)return null;var r=Eu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Pd=!1;if(Ln)try{var js={};Object.defineProperty(js,"passive",{get:function(){Pd=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Pd=!1}function $I(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ro=!1,Sl=null,Rl=!1,Cd=null,WI={onError:function(t){ro=!0,Sl=t}};function qI(t,e,n,r,i,s,o,l,u){ro=!1,Sl=null,$I.apply(WI,arguments)}function HI(t,e,n,r,i,s,o,l,u){if(qI.apply(this,arguments),ro){if(ro){var c=Sl;ro=!1,Sl=null}else throw Error(F(198));Rl||(Rl=!0,Cd=c)}}function pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ym(t){if(pi(t)!==t)throw Error(F(188))}function KI(t){var e=t.alternate;if(!e){if(e=pi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ym(i),t;if(s===r)return Ym(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function o_(t){return t=KI(t),t!==null?a_(t):null}function a_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a_(t);if(e!==null)return e;t=t.sibling}return null}var l_=Nt.unstable_scheduleCallback,Xm=Nt.unstable_cancelCallback,GI=Nt.unstable_shouldYield,QI=Nt.unstable_requestPaint,Pe=Nt.unstable_now,YI=Nt.unstable_getCurrentPriorityLevel,Gh=Nt.unstable_ImmediatePriority,u_=Nt.unstable_UserBlockingPriority,Al=Nt.unstable_NormalPriority,XI=Nt.unstable_LowPriority,c_=Nt.unstable_IdlePriority,yu=null,un=null;function JI(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(yu,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:t1,ZI=Math.log,e1=Math.LN2;function t1(t){return t>>>=0,t===0?32:31-(ZI(t)/e1|0)|0}var La=64,ja=4194304;function Ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ks(l):(s&=o,s!==0&&(r=Ks(s)))}else o=n&~i,o!==0?r=Ks(o):s!==0&&(r=Ks(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function n1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function r1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=n1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d_(){var t=La;return La<<=1,!(La&4194240)&&(La=64),t}function Dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function i1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function h_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f_,Yh,p_,m_,g_,bd=!1,Ma=[],hr=null,fr=null,pr=null,wo=new Map,Eo=new Map,tr=[],s1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jm(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(e.pointerId)}}function Ms(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Yo(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function o1(t,e,n,r,i){switch(e){case"focusin":return hr=Ms(hr,t,e,n,r,i),!0;case"dragenter":return fr=Ms(fr,t,e,n,r,i),!0;case"mouseover":return pr=Ms(pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return wo.set(s,Ms(wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Eo.set(s,Ms(Eo.get(s)||null,t,e,n,r,i)),!0}return!1}function y_(t){var e=Kr(t.target);if(e!==null){var n=pi(e);if(n!==null){if(e=n.tag,e===13){if(e=s_(n),e!==null){t.blockedOn=e,g_(t.priority,function(){p_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ad=r,n.target.dispatchEvent(r),Ad=null}else return e=Yo(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function Zm(t,e,n){il(t)&&n.delete(e)}function a1(){bd=!1,hr!==null&&il(hr)&&(hr=null),fr!==null&&il(fr)&&(fr=null),pr!==null&&il(pr)&&(pr=null),wo.forEach(Zm),Eo.forEach(Zm)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,bd||(bd=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,a1)))}function To(t){function e(i){return Fs(i,t)}if(0<Ma.length){Fs(Ma[0],t);for(var n=1;n<Ma.length;n++){var r=Ma[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&Fs(hr,t),fr!==null&&Fs(fr,t),pr!==null&&Fs(pr,t),wo.forEach(e),Eo.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)y_(n),n.blockedOn===null&&tr.shift()}var Wi=qn.ReactCurrentBatchConfig,Pl=!0;function l1(t,e,n,r){var i=ce,s=Wi.transition;Wi.transition=null;try{ce=1,Xh(t,e,n,r)}finally{ce=i,Wi.transition=s}}function u1(t,e,n,r){var i=ce,s=Wi.transition;Wi.transition=null;try{ce=4,Xh(t,e,n,r)}finally{ce=i,Wi.transition=s}}function Xh(t,e,n,r){if(Pl){var i=Dd(t,e,n,r);if(i===null)$c(t,e,r,Cl,n),Jm(t,r);else if(o1(i,t,e,n,r))r.stopPropagation();else if(Jm(t,r),e&4&&-1<s1.indexOf(t)){for(;i!==null;){var s=Yo(i);if(s!==null&&f_(s),s=Dd(t,e,n,r),s===null&&$c(t,e,r,Cl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $c(t,e,r,null,n)}}var Cl=null;function Dd(t,e,n,r){if(Cl=null,t=Kh(r),t=Kr(t),t!==null)if(e=pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cl=t,null}function v_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(YI()){case Gh:return 1;case u_:return 4;case Al:case XI:return 16;case c_:return 536870912;default:return 16}default:return 16}}var lr=null,Jh=null,sl=null;function __(){if(sl)return sl;var t,e=Jh,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return sl=i.slice(t,1<r?1-r:void 0)}function ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function eg(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:eg,this.isPropagationStopped=eg,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=Dt(fs),Qo=xe({},fs,{view:0,detail:0}),c1=Dt(Qo),Oc,Vc,Us,vu=xe({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(Oc=t.screenX-Us.screenX,Vc=t.screenY-Us.screenY):Vc=Oc=0,Us=t),Oc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),tg=Dt(vu),d1=xe({},vu,{dataTransfer:0}),h1=Dt(d1),f1=xe({},Qo,{relatedTarget:0}),Lc=Dt(f1),p1=xe({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),m1=Dt(p1),g1=xe({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),y1=Dt(g1),v1=xe({},fs,{data:0}),ng=Dt(v1),_1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=E1[t])?!!e[t]:!1}function ef(){return T1}var I1=xe({},Qo,{key:function(t){if(t.key){var e=_1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x1=Dt(I1),S1=xe({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rg=Dt(S1),R1=xe({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),A1=Dt(R1),k1=xe({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),P1=Dt(k1),C1=xe({},vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N1=Dt(C1),b1=[9,13,27,32],tf=Ln&&"CompositionEvent"in window,io=null;Ln&&"documentMode"in document&&(io=document.documentMode);var D1=Ln&&"TextEvent"in window&&!io,w_=Ln&&(!tf||io&&8<io&&11>=io),ig=" ",sg=!1;function E_(t,e){switch(t){case"keyup":return b1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pi=!1;function O1(t,e){switch(t){case"compositionend":return T_(e);case"keypress":return e.which!==32?null:(sg=!0,ig);case"textInput":return t=e.data,t===ig&&sg?null:t;default:return null}}function V1(t,e){if(Pi)return t==="compositionend"||!tf&&E_(t,e)?(t=__(),sl=Jh=lr=null,Pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w_&&e.locale!=="ko"?null:e.data;default:return null}}var L1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!L1[t.type]:e==="textarea"}function I_(t,e,n,r){e_(r),e=Nl(e,"onChange"),0<e.length&&(n=new Zh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var so=null,Io=null;function j1(t){O_(t,0)}function _u(t){var e=bi(t);if(Kv(e))return t}function M1(t,e){if(t==="change")return e}var x_=!1;if(Ln){var jc;if(Ln){var Mc="oninput"in document;if(!Mc){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),Mc=typeof ag.oninput=="function"}jc=Mc}else jc=!1;x_=jc&&(!document.documentMode||9<document.documentMode)}function lg(){so&&(so.detachEvent("onpropertychange",S_),Io=so=null)}function S_(t){if(t.propertyName==="value"&&_u(Io)){var e=[];I_(e,Io,t,Kh(t)),i_(j1,e)}}function F1(t,e,n){t==="focusin"?(lg(),so=e,Io=n,so.attachEvent("onpropertychange",S_)):t==="focusout"&&lg()}function U1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _u(Io)}function B1(t,e){if(t==="click")return _u(e)}function z1(t,e){if(t==="input"||t==="change")return _u(e)}function $1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:$1;function xo(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!md.call(e,i)||!Jt(t[i],e[i]))return!1}return!0}function ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cg(t,e){var n=ug(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ug(n)}}function R_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function A_(){for(var t=window,e=xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xl(t.document)}return e}function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function W1(t){var e=A_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R_(n.ownerDocument.documentElement,n)){if(r!==null&&nf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cg(n,s);var o=cg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var q1=Ln&&"documentMode"in document&&11>=document.documentMode,Ci=null,Od=null,oo=null,Vd=!1;function dg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vd||Ci==null||Ci!==xl(r)||(r=Ci,"selectionStart"in r&&nf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&xo(oo,r)||(oo=r,r=Nl(Od,"onSelect"),0<r.length&&(e=new Zh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ci)))}function Ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ni={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},Fc={},k_={};Ln&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function wu(t){if(Fc[t])return Fc[t];if(!Ni[t])return t;var e=Ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k_)return Fc[t]=e[n];return t}var P_=wu("animationend"),C_=wu("animationiteration"),N_=wu("animationstart"),b_=wu("transitionend"),D_=new Map,hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){D_.set(t,e),fi(e,[t])}for(var Uc=0;Uc<hg.length;Uc++){var Bc=hg[Uc],H1=Bc.toLowerCase(),K1=Bc[0].toUpperCase()+Bc.slice(1);Nr(H1,"on"+K1)}Nr(P_,"onAnimationEnd");Nr(C_,"onAnimationIteration");Nr(N_,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(b_,"onTransitionEnd");Xi("onMouseEnter",["mouseout","mouseover"]);Xi("onMouseLeave",["mouseout","mouseover"]);Xi("onPointerEnter",["pointerout","pointerover"]);Xi("onPointerLeave",["pointerout","pointerover"]);fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function fg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HI(r,e,void 0,t),t.currentTarget=null}function O_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;fg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;fg(i,l,c),s=u}}}if(Rl)throw t=Cd,Rl=!1,Cd=null,t}function ye(t,e){var n=e[Ud];n===void 0&&(n=e[Ud]=new Set);var r=t+"__bubble";n.has(r)||(V_(e,t,2,!1),n.add(r))}function zc(t,e,n){var r=0;e&&(r|=4),V_(n,t,r,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function So(t){if(!t[Ba]){t[Ba]=!0,zv.forEach(function(n){n!=="selectionchange"&&(G1.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,zc("selectionchange",!1,e))}}function V_(t,e,n,r){switch(v_(e)){case 1:var i=l1;break;case 4:i=u1;break;default:i=Xh}n=i.bind(null,e,n,t),i=void 0,!Pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $c(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}i_(function(){var c=s,h=Kh(n),m=[];e:{var g=D_.get(t);if(g!==void 0){var x=Zh,P=t;switch(t){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":x=x1;break;case"focusin":P="focus",x=Lc;break;case"focusout":P="blur",x=Lc;break;case"beforeblur":case"afterblur":x=Lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=h1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=A1;break;case P_:case C_:case N_:x=m1;break;case b_:x=P1;break;case"scroll":x=c1;break;case"wheel":x=N1;break;case"copy":case"cut":case"paste":x=y1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=rg}var N=(e&4)!==0,k=!N&&t==="scroll",I=N?g!==null?g+"Capture":null:g;N=[];for(var w=c,S;w!==null;){S=w;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,I!==null&&(D=_o(w,I),D!=null&&N.push(Ro(w,D,S)))),k)break;w=w.return}0<N.length&&(g=new x(g,P,null,n,h),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",g&&n!==Ad&&(P=n.relatedTarget||n.fromElement)&&(Kr(P)||P[jn]))break e;if((x||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,x?(P=n.relatedTarget||n.toElement,x=c,P=P?Kr(P):null,P!==null&&(k=pi(P),P!==k||P.tag!==5&&P.tag!==6)&&(P=null)):(x=null,P=c),x!==P)){if(N=tg,D="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(N=rg,D="onPointerLeave",I="onPointerEnter",w="pointer"),k=x==null?g:bi(x),S=P==null?g:bi(P),g=new N(D,w+"leave",x,n,h),g.target=k,g.relatedTarget=S,D=null,Kr(h)===c&&(N=new N(I,w+"enter",P,n,h),N.target=S,N.relatedTarget=k,D=N),k=D,x&&P)t:{for(N=x,I=P,w=0,S=N;S;S=Ii(S))w++;for(S=0,D=I;D;D=Ii(D))S++;for(;0<w-S;)N=Ii(N),w--;for(;0<S-w;)I=Ii(I),S--;for(;w--;){if(N===I||I!==null&&N===I.alternate)break t;N=Ii(N),I=Ii(I)}N=null}else N=null;x!==null&&pg(m,g,x,N,!1),P!==null&&k!==null&&pg(m,k,P,N,!0)}}e:{if(g=c?bi(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var M=M1;else if(og(g))if(x_)M=z1;else{M=U1;var U=F1}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=B1);if(M&&(M=M(t,c))){I_(m,M,n,h);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Td(g,"number",g.value)}switch(U=c?bi(c):window,t){case"focusin":(og(U)||U.contentEditable==="true")&&(Ci=U,Od=c,oo=null);break;case"focusout":oo=Od=Ci=null;break;case"mousedown":Vd=!0;break;case"contextmenu":case"mouseup":case"dragend":Vd=!1,dg(m,n,h);break;case"selectionchange":if(q1)break;case"keydown":case"keyup":dg(m,n,h)}var E;if(tf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Pi?E_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(w_&&n.locale!=="ko"&&(Pi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Pi&&(E=__()):(lr=h,Jh="value"in lr?lr.value:lr.textContent,Pi=!0)),U=Nl(c,v),0<U.length&&(v=new ng(v,t,null,n,h),m.push({event:v,listeners:U}),E?v.data=E:(E=T_(n),E!==null&&(v.data=E)))),(E=D1?O1(t,n):V1(t,n))&&(c=Nl(c,"onBeforeInput"),0<c.length&&(h=new ng("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=E))}O_(m,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=_o(t,n),s!=null&&r.unshift(Ro(t,s,i)),s=_o(t,e),s!=null&&r.push(Ro(t,s,i))),t=t.return}return r}function Ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=_o(n,s),u!=null&&o.unshift(Ro(n,u,l))):i||(u=_o(n,s),u!=null&&o.push(Ro(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Q1=/\r\n?/g,Y1=/\u0000|\uFFFD/g;function mg(t){return(typeof t=="string"?t:""+t).replace(Q1,`
`).replace(Y1,"")}function za(t,e,n){if(e=mg(e),mg(t)!==e&&n)throw Error(F(425))}function bl(){}var Ld=null,jd=null;function Md(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fd=typeof setTimeout=="function"?setTimeout:void 0,X1=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,J1=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(t){return gg.resolve(null).then(t).catch(Z1)}:Fd;function Z1(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),To(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);To(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),rn="__reactFiber$"+ps,Ao="__reactProps$"+ps,jn="__reactContainer$"+ps,Ud="__reactEvents$"+ps,ex="__reactListeners$"+ps,tx="__reactHandles$"+ps;function Kr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yg(t);t!==null;){if(n=t[rn])return n;t=yg(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[rn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Eu(t){return t[Ao]||null}var Bd=[],Di=-1;function br(t){return{current:t}}function _e(t){0>Di||(t.current=Bd[Di],Bd[Di]=null,Di--)}function fe(t,e){Di++,Bd[Di]=t.current,t.current=e}var Sr={},ct=br(Sr),Tt=br(!1),ni=Sr;function Ji(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function Dl(){_e(Tt),_e(ct)}function vg(t,e,n){if(ct.current!==Sr)throw Error(F(168));fe(ct,e),fe(Tt,n)}function L_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,FI(t)||"Unknown",i));return xe({},n,r)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,ni=ct.current,fe(ct,t),fe(Tt,Tt.current),!0}function _g(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=L_(t,e,ni),r.__reactInternalMemoizedMergedChildContext=t,_e(Tt),_e(ct),fe(ct,t)):_e(Tt),fe(Tt,n)}var An=null,Tu=!1,qc=!1;function j_(t){An===null?An=[t]:An.push(t)}function nx(t){Tu=!0,j_(t)}function Dr(){if(!qc&&An!==null){qc=!0;var t=0,e=ce;try{var n=An;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,Tu=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),l_(Gh,Dr),i}finally{ce=e,qc=!1}}return null}var Oi=[],Vi=0,Vl=null,Ll=0,Vt=[],Lt=0,ri=null,kn=1,Pn="";function Wr(t,e){Oi[Vi++]=Ll,Oi[Vi++]=Vl,Vl=t,Ll=e}function M_(t,e,n){Vt[Lt++]=kn,Vt[Lt++]=Pn,Vt[Lt++]=ri,ri=t;var r=kn;t=Pn;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-Gt(e)+i|n<<i|r,Pn=s+t}else kn=1<<s|n<<i|r,Pn=t}function rf(t){t.return!==null&&(Wr(t,1),M_(t,1,0))}function sf(t){for(;t===Vl;)Vl=Oi[--Vi],Oi[Vi]=null,Ll=Oi[--Vi],Oi[Vi]=null;for(;t===ri;)ri=Vt[--Lt],Vt[Lt]=null,Pn=Vt[--Lt],Vt[Lt]=null,kn=Vt[--Lt],Vt[Lt]=null}var Pt=null,At=null,Ee=!1,Ht=null;function F_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,At=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ri!==null?{id:kn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,At=null,!0):!1;default:return!1}}function zd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $d(t){if(Ee){var e=At;if(e){var n=e;if(!wg(t,e)){if(zd(t))throw Error(F(418));e=mr(n.nextSibling);var r=Pt;e&&wg(t,e)?F_(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Pt=t)}}else{if(zd(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ee=!1,Pt=t}}}function Eg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function $a(t){if(t!==Pt)return!1;if(!Ee)return Eg(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Md(t.type,t.memoizedProps)),e&&(e=At)){if(zd(t))throw U_(),Error(F(418));for(;e;)F_(t,e),e=mr(e.nextSibling)}if(Eg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Pt?mr(t.stateNode.nextSibling):null;return!0}function U_(){for(var t=At;t;)t=mr(t.nextSibling)}function Zi(){At=Pt=null,Ee=!1}function of(t){Ht===null?Ht=[t]:Ht.push(t)}var rx=qn.ReactCurrentBatchConfig;function Bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Wa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tg(t){var e=t._init;return e(t._payload)}function B_(t){function e(I,w){if(t){var S=I.deletions;S===null?(I.deletions=[w],I.flags|=16):S.push(w)}}function n(I,w){if(!t)return null;for(;w!==null;)e(I,w),w=w.sibling;return null}function r(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function i(I,w){return I=_r(I,w),I.index=0,I.sibling=null,I}function s(I,w,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<w?(I.flags|=2,w):S):(I.flags|=2,w)):(I.flags|=1048576,w)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,w,S,D){return w===null||w.tag!==6?(w=Jc(S,I.mode,D),w.return=I,w):(w=i(w,S),w.return=I,w)}function u(I,w,S,D){var M=S.type;return M===ki?h(I,w,S.props.children,D,S.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Zn&&Tg(M)===w.type)?(D=i(w,S.props),D.ref=Bs(I,w,S),D.return=I,D):(D=fl(S.type,S.key,S.props,null,I.mode,D),D.ref=Bs(I,w,S),D.return=I,D)}function c(I,w,S,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=Zc(S,I.mode,D),w.return=I,w):(w=i(w,S.children||[]),w.return=I,w)}function h(I,w,S,D,M){return w===null||w.tag!==7?(w=Jr(S,I.mode,D,M),w.return=I,w):(w=i(w,S),w.return=I,w)}function m(I,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Jc(""+w,I.mode,S),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Da:return S=fl(w.type,w.key,w.props,null,I.mode,S),S.ref=Bs(I,null,w),S.return=I,S;case Ai:return w=Zc(w,I.mode,S),w.return=I,w;case Zn:var D=w._init;return m(I,D(w._payload),S)}if(Hs(w)||Ls(w))return w=Jr(w,I.mode,S,null),w.return=I,w;Wa(I,w)}return null}function g(I,w,S,D){var M=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:l(I,w,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Da:return S.key===M?u(I,w,S,D):null;case Ai:return S.key===M?c(I,w,S,D):null;case Zn:return M=S._init,g(I,w,M(S._payload),D)}if(Hs(S)||Ls(S))return M!==null?null:h(I,w,S,D,null);Wa(I,S)}return null}function x(I,w,S,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(S)||null,l(w,I,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Da:return I=I.get(D.key===null?S:D.key)||null,u(w,I,D,M);case Ai:return I=I.get(D.key===null?S:D.key)||null,c(w,I,D,M);case Zn:var U=D._init;return x(I,w,S,U(D._payload),M)}if(Hs(D)||Ls(D))return I=I.get(S)||null,h(w,I,D,M,null);Wa(w,D)}return null}function P(I,w,S,D){for(var M=null,U=null,E=w,v=w=0,R=null;E!==null&&v<S.length;v++){E.index>v?(R=E,E=null):R=E.sibling;var A=g(I,E,S[v],D);if(A===null){E===null&&(E=R);break}t&&E&&A.alternate===null&&e(I,E),w=s(A,w,v),U===null?M=A:U.sibling=A,U=A,E=R}if(v===S.length)return n(I,E),Ee&&Wr(I,v),M;if(E===null){for(;v<S.length;v++)E=m(I,S[v],D),E!==null&&(w=s(E,w,v),U===null?M=E:U.sibling=E,U=E);return Ee&&Wr(I,v),M}for(E=r(I,E);v<S.length;v++)R=x(E,I,v,S[v],D),R!==null&&(t&&R.alternate!==null&&E.delete(R.key===null?v:R.key),w=s(R,w,v),U===null?M=R:U.sibling=R,U=R);return t&&E.forEach(function(C){return e(I,C)}),Ee&&Wr(I,v),M}function N(I,w,S,D){var M=Ls(S);if(typeof M!="function")throw Error(F(150));if(S=M.call(S),S==null)throw Error(F(151));for(var U=M=null,E=w,v=w=0,R=null,A=S.next();E!==null&&!A.done;v++,A=S.next()){E.index>v?(R=E,E=null):R=E.sibling;var C=g(I,E,A.value,D);if(C===null){E===null&&(E=R);break}t&&E&&C.alternate===null&&e(I,E),w=s(C,w,v),U===null?M=C:U.sibling=C,U=C,E=R}if(A.done)return n(I,E),Ee&&Wr(I,v),M;if(E===null){for(;!A.done;v++,A=S.next())A=m(I,A.value,D),A!==null&&(w=s(A,w,v),U===null?M=A:U.sibling=A,U=A);return Ee&&Wr(I,v),M}for(E=r(I,E);!A.done;v++,A=S.next())A=x(E,I,v,A.value,D),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?v:A.key),w=s(A,w,v),U===null?M=A:U.sibling=A,U=A);return t&&E.forEach(function(T){return e(I,T)}),Ee&&Wr(I,v),M}function k(I,w,S,D){if(typeof S=="object"&&S!==null&&S.type===ki&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Da:e:{for(var M=S.key,U=w;U!==null;){if(U.key===M){if(M=S.type,M===ki){if(U.tag===7){n(I,U.sibling),w=i(U,S.props.children),w.return=I,I=w;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Zn&&Tg(M)===U.type){n(I,U.sibling),w=i(U,S.props),w.ref=Bs(I,U,S),w.return=I,I=w;break e}n(I,U);break}else e(I,U);U=U.sibling}S.type===ki?(w=Jr(S.props.children,I.mode,D,S.key),w.return=I,I=w):(D=fl(S.type,S.key,S.props,null,I.mode,D),D.ref=Bs(I,w,S),D.return=I,I=D)}return o(I);case Ai:e:{for(U=S.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(I,w.sibling),w=i(w,S.children||[]),w.return=I,I=w;break e}else{n(I,w);break}else e(I,w);w=w.sibling}w=Zc(S,I.mode,D),w.return=I,I=w}return o(I);case Zn:return U=S._init,k(I,w,U(S._payload),D)}if(Hs(S))return P(I,w,S,D);if(Ls(S))return N(I,w,S,D);Wa(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(I,w.sibling),w=i(w,S),w.return=I,I=w):(n(I,w),w=Jc(S,I.mode,D),w.return=I,I=w),o(I)):n(I,w)}return k}var es=B_(!0),z_=B_(!1),jl=br(null),Ml=null,Li=null,af=null;function lf(){af=Li=Ml=null}function uf(t){var e=jl.current;_e(jl),t._currentValue=e}function Wd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qi(t,e){Ml=t,af=Li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(af!==t)if(t={context:t,memoizedValue:e,next:null},Li===null){if(Ml===null)throw Error(F(308));Li=t,Ml.dependencies={lanes:0,firstContext:t}}else Li=Li.next=t;return e}var Gr=null;function cf(t){Gr===null?Gr=[t]:Gr.push(t)}function $_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mn(t,n)}return i=r.interleaved,i===null?(e.next=e,cf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mn(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qh(t,n)}}function Ig(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fl(t,e,n,r){var i=t.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,h=c=u=null,l=s;do{var g=l.lane,x=l.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(g=e,x=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){m=P.call(x,m,g);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,g=typeof P=="function"?P.call(x,m,g):P,g==null)break e;m=xe({},m,g);break e;case 2:er=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=x,u=m):h=h.next=x,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);si|=o,t.lanes=o,t.memoizedState=m}}function xg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Xo={},cn=br(Xo),ko=br(Xo),Po=br(Xo);function Qr(t){if(t===Xo)throw Error(F(174));return t}function hf(t,e){switch(fe(Po,e),fe(ko,t),fe(cn,Xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xd(e,t)}_e(cn),fe(cn,e)}function ts(){_e(cn),_e(ko),_e(Po)}function q_(t){Qr(Po.current);var e=Qr(cn.current),n=xd(e,t.type);e!==n&&(fe(ko,t),fe(cn,n))}function ff(t){ko.current===t&&(_e(cn),_e(ko))}var Te=br(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hc=[];function pf(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var ll=qn.ReactCurrentDispatcher,Kc=qn.ReactCurrentBatchConfig,ii=0,Ie=null,Le=null,Be=null,Bl=!1,ao=!1,Co=0,ix=0;function nt(){throw Error(F(321))}function mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function gf(t,e,n,r,i,s){if(ii=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?lx:ux,t=n(r,i),ao){s=0;do{if(ao=!1,Co=0,25<=s)throw Error(F(301));s+=1,Be=Le=null,e.updateQueue=null,ll.current=cx,t=n(r,i)}while(ao)}if(ll.current=zl,e=Le!==null&&Le.next!==null,ii=0,Be=Le=Ie=null,Bl=!1,e)throw Error(F(300));return t}function yf(){var t=Co!==0;return Co=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ie.memoizedState=Be=t:Be=Be.next=t,Be}function Ut(){if(Le===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=Be===null?Ie.memoizedState:Be.next;if(e!==null)Be=e,Le=t;else{if(t===null)throw Error(F(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Be===null?Ie.memoizedState=Be=t:Be=Be.next=t}return Be}function No(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((ii&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ie.lanes|=h,si|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Jt(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,si|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jt(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function H_(){}function K_(t,e){var n=Ie,r=Ut(),i=e(),s=!Jt(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,vf(Y_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,bo(9,Q_.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(F(349));ii&30||G_(n,e,i)}return i}function G_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q_(t,e,n,r){e.value=n,e.getSnapshot=r,X_(e)&&J_(t)}function Y_(t,e,n){return n(function(){X_(e)&&J_(t)})}function X_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function J_(t){var e=Mn(t,1);e!==null&&Qt(e,t,1,-1)}function Sg(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},e.queue=t,t=t.dispatch=ax.bind(null,Ie,t),[e.memoizedState,t]}function bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Z_(){return Ut().memoizedState}function ul(t,e,n,r){var i=nn();Ie.flags|=t,i.memoizedState=bo(1|e,n,void 0,r===void 0?null:r)}function Iu(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&mf(r,o.deps)){i.memoizedState=bo(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=bo(1|e,n,s,r)}function Rg(t,e){return ul(8390656,8,t,e)}function vf(t,e){return Iu(2048,8,t,e)}function e0(t,e){return Iu(4,2,t,e)}function t0(t,e){return Iu(4,4,t,e)}function n0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r0(t,e,n){return n=n!=null?n.concat([t]):null,Iu(4,4,n0.bind(null,e,t),n)}function _f(){}function i0(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function s0(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function o0(t,e,n){return ii&21?(Jt(n,e)||(n=d_(),Ie.lanes|=n,si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function sx(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Kc.transition;Kc.transition={};try{t(!1),e()}finally{ce=n,Kc.transition=r}}function a0(){return Ut().memoizedState}function ox(t,e,n){var r=vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},l0(t))u0(e,n);else if(n=$_(t,e,n,r),n!==null){var i=mt();Qt(n,t,r,i),c0(n,e,r)}}function ax(t,e,n){var r=vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(l0(t))u0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Jt(l,o)){var u=e.interleaved;u===null?(i.next=i,cf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=$_(t,e,i,r),n!==null&&(i=mt(),Qt(n,t,r,i),c0(n,e,r))}}function l0(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function u0(t,e){ao=Bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function c0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qh(t,n)}}var zl={readContext:Ft,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},lx={readContext:Ft,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:Rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ul(4194308,4,n0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return ul(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ox.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:Sg,useDebugValue:_f,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=Sg(!1),e=t[0];return t=sx.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=nn();if(Ee){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),ze===null)throw Error(F(349));ii&30||G_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rg(Y_.bind(null,r,s,t),[t]),r.flags|=2048,bo(9,Q_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=ze.identifierPrefix;if(Ee){var n=Pn,r=kn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ix++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ux={readContext:Ft,useCallback:i0,useContext:Ft,useEffect:vf,useImperativeHandle:r0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:s0,useReducer:Gc,useRef:Z_,useState:function(){return Gc(No)},useDebugValue:_f,useDeferredValue:function(t){var e=Ut();return o0(e,Le.memoizedState,t)},useTransition:function(){var t=Gc(No)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:H_,useSyncExternalStore:K_,useId:a0,unstable_isNewReconciler:!1},cx={readContext:Ft,useCallback:i0,useContext:Ft,useEffect:vf,useImperativeHandle:r0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:s0,useReducer:Qc,useRef:Z_,useState:function(){return Qc(No)},useDebugValue:_f,useDeferredValue:function(t){var e=Ut();return Le===null?e.memoizedState=t:o0(e,Le.memoizedState,t)},useTransition:function(){var t=Qc(No)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:H_,useSyncExternalStore:K_,useId:a0,unstable_isNewReconciler:!1};function Wt(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xu={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=vr(t),s=Dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(Qt(e,t,i,r),al(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=vr(t),s=Dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(Qt(e,t,i,r),al(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=vr(t),i=Dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=gr(t,i,r),e!==null&&(Qt(e,t,r,n),al(e,t,r))}};function Ag(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(n,r)||!xo(i,s):!0}function d0(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=It(e)?ni:ct.current,r=e.contextTypes,s=(r=r!=null)?Ji(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xu.enqueueReplaceState(e,e.state,null)}function Hd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},df(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=It(e)?ni:ct.current,i.context=Ji(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xu.enqueueReplaceState(i,i.state,null),Fl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ns(t,e){try{var n="",r=e;do n+=MI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dx=typeof WeakMap=="function"?WeakMap:Map;function h0(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wl||(Wl=!0,rh=r),Kd(t,e)},n}function f0(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kd(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new dx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Sx.bind(null,t,e,n),e.then(t,t))}function Cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ng(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var hx=qn.ReactCurrentOwner,Et=!1;function pt(t,e,n,r){e.child=t===null?z_(e,null,n,r):es(e,t.child,n,r)}function bg(t,e,n,r,i){n=n.render;var s=e.ref;return qi(e,i),r=gf(t,e,n,r,s,i),n=yf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Ee&&n&&rf(e),e.flags|=1,pt(t,e,r,i),e.child)}function Dg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,p0(t,e,s,r,i)):(t=fl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(o,r)&&t.ref===e.ref)return Fn(t,e,i)}return e.flags|=1,t=_r(s,r),t.ref=e.ref,t.return=e,e.child=t}function p0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xo(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Fn(t,e,i)}return Gd(t,e,n,r,i)}function m0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Mi,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Mi,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Mi,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(Mi,Rt),Rt|=r;return pt(t,e,i,n),e.child}function g0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gd(t,e,n,r,i){var s=It(n)?ni:ct.current;return s=Ji(e,s),qi(e,i),n=gf(t,e,n,r,s,i),r=yf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Ee&&r&&rf(e),e.flags|=1,pt(t,e,n,i),e.child)}function Og(t,e,n,r,i){if(It(n)){var s=!0;Ol(e)}else s=!1;if(qi(e,i),e.stateNode===null)cl(t,e),d0(e,n,r),Hd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ft(c):(c=It(n)?ni:ct.current,c=Ji(e,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&kg(e,o,r,c),er=!1;var g=e.memoizedState;o.state=g,Fl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||Tt.current||er?(typeof h=="function"&&(qd(e,n,h,r),u=e.memoizedState),(l=er||Ag(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,W_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Wt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=It(n)?ni:ct.current,u=Ji(e,u));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&kg(e,o,r,u),er=!1,g=e.memoizedState,o.state=g,Fl(e,r,o,i);var P=e.memoizedState;l!==m||g!==P||Tt.current||er?(typeof x=="function"&&(qd(e,n,x,r),P=e.memoizedState),(c=er||Ag(e,n,c,r,g,P,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Qd(t,e,n,r,s,i)}function Qd(t,e,n,r,i,s){g0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&_g(e,n,!1),Fn(t,e,s);r=e.stateNode,hx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=es(e,t.child,null,s),e.child=es(e,null,l,s)):pt(t,e,l,s),e.memoizedState=r.state,i&&_g(e,n,!0),e.child}function y0(t){var e=t.stateNode;e.pendingContext?vg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vg(t,e.context,!1),hf(t,e.containerInfo)}function Vg(t,e,n,r,i){return Zi(),of(i),e.flags|=256,pt(t,e,n,r),e.child}var Yd={dehydrated:null,treeContext:null,retryLane:0};function Xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function v0(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(Te,i&1),t===null)return $d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Au(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xd(n),e.memoizedState=Yd,t):wf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return fx(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_r(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=_r(l,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yd,r}return s=t.child,t=s.sibling,r=_r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wf(t,e){return e=Au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qa(t,e,n,r){return r!==null&&of(r),es(e,t.child,null,n),t=wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Yc(Error(F(422))),qa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Au({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&es(e,t.child,null,o),e.child.memoizedState=Xd(o),e.memoizedState=Yd,s);if(!(e.mode&1))return qa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Yc(s,r,void 0),qa(t,e,o,r)}if(l=(o&t.childLanes)!==0,Et||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(t,i),Qt(r,t,i,-1))}return Rf(),r=Yc(Error(F(421))),qa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Rx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=mr(i.nextSibling),Pt=e,Ee=!0,Ht=null,t!==null&&(Vt[Lt++]=kn,Vt[Lt++]=Pn,Vt[Lt++]=ri,kn=t.id,Pn=t.overflow,ri=e),e=wf(e,r.children),e.flags|=4096,e)}function Lg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wd(t.return,e,n)}function Xc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lg(t,n,e);else if(t.tag===19)Lg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ul(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xc(e,!0,n,null,s);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function px(t,e,n){switch(e.tag){case 3:y0(e),Zi();break;case 5:q_(e);break;case 1:It(e.type)&&Ol(e);break;case 4:hf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(jl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?v0(t,e,n):(fe(Te,Te.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);fe(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,m0(t,e,n)}return Fn(t,e,n)}var w0,Jd,E0,T0;w0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jd=function(){};E0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qr(cn.current);var s=null;switch(n){case"input":i=wd(t,i),r=wd(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=Id(t,i),r=Id(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bl)}Sd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};T0=function(t,e,n,r){n!==r&&(e.flags|=4)};function zs(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mx(t,e,n){var r=e.pendingProps;switch(sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return It(e.type)&&Dl(),rt(e),null;case 3:return r=e.stateNode,ts(),_e(Tt),_e(ct),pf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(oh(Ht),Ht=null))),Jd(t,e),rt(e),null;case 5:ff(e);var i=Qr(Po.current);if(n=e.type,t!==null&&e.stateNode!=null)E0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return rt(e),null}if(t=Qr(cn.current),$a(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[Ao]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Gs.length;i++)ye(Gs[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":qm(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":Km(r,s),ye("invalid",r)}Sd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&za(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&za(r.textContent,l,t),i=["children",""+l]):yo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":Oa(r),Hm(r,s,!0);break;case"textarea":Oa(r),Gm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[Ao]=r,w0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rd(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gs.length;i++)ye(Gs[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":qm(t,r),i=wd(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Km(t,r),i=Id(t,r),ye("invalid",t);break;default:i=r}Sd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Zv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&vo(t,u):typeof u=="number"&&vo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&$h(t,s,u,o))}switch(n){case"input":Oa(t),Hm(t,r,!1);break;case"textarea":Oa(t),Gm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Bi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Bi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)T0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Qr(Po.current),Qr(cn.current),$a(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return rt(e),null;case 13:if(_e(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&At!==null&&e.mode&1&&!(e.flags&128))U_(),Zi(),e.flags|=98560,s=!1;else if(s=$a(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[rn]=e}else Zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),s=!1}else Ht!==null&&(oh(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Me===0&&(Me=3):Rf())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return ts(),Jd(t,e),t===null&&So(e.stateNode.containerInfo),rt(e),null;case 10:return uf(e.type._context),rt(e),null;case 17:return It(e.type)&&Dl(),rt(e),null;case 19:if(_e(Te),s=e.memoizedState,s===null)return rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zs(s,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ul(t),o!==null){for(e.flags|=128,zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>rs&&(e.flags|=128,r=!0,zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ul(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return rt(e),null}else 2*Pe()-s.renderingStartTime>rs&&n!==1073741824&&(e.flags|=128,r=!0,zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=Te.current,fe(Te,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return Sf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function gx(t,e){switch(sf(e),e.tag){case 1:return It(e.type)&&Dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ts(),_e(Tt),_e(ct),pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ff(e),null;case 13:if(_e(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Te),null;case 4:return ts(),null;case 10:return uf(e.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var Ha=!1,ot=!1,yx=typeof WeakSet=="function"?WeakSet:Set,q=null;function ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Zd(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var jg=!1;function vx(t,e){if(Ld=Pl,t=A_(),nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,m=t,g=null;t:for(;;){for(var x;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(x=m.firstChild)!==null;)g=m,m=x;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++h===r&&(u=o),(x=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jd={focusedElem:t,selectionRange:n},Pl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,k=P.memoizedState,I=e.stateNode,w=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:Wt(e.type,N),k);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Ae(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return P=jg,jg=!1,P}function lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zd(e,n,s)}i=i.next}while(i!==r)}}function Su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function I0(t){var e=t.alternate;e!==null&&(t.alternate=null,I0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[Ao],delete e[Ud],delete e[ex],delete e[tx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function x0(t){return t.tag===5||t.tag===3||t.tag===4}function Mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||x0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bl));else if(r!==4&&(t=t.child,t!==null))for(th(t,e,n),t=t.sibling;t!==null;)th(t,e,n),t=t.sibling}function nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nh(t,e,n),t=t.sibling;t!==null;)nh(t,e,n),t=t.sibling}var qe=null,qt=!1;function Yn(t,e,n){for(n=n.child;n!==null;)S0(t,e,n),n=n.sibling}function S0(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(yu,n)}catch{}switch(n.tag){case 5:ot||ji(n,e);case 6:var r=qe,i=qt;qe=null,Yn(t,e,n),qe=r,qt=i,qe!==null&&(qt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(qt?(t=qe,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),To(t)):Wc(qe,n.stateNode));break;case 4:r=qe,i=qt,qe=n.stateNode.containerInfo,qt=!0,Yn(t,e,n),qe=r,qt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zd(n,e,o),i=i.next}while(i!==r)}Yn(t,e,n);break;case 1:if(!ot&&(ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Yn(t,e,n),ot=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function Fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yx),e.forEach(function(r){var i=Ax.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,qt=!1;break e;case 3:qe=l.stateNode.containerInfo,qt=!0;break e;case 4:qe=l.stateNode.containerInfo,qt=!0;break e}l=l.return}if(qe===null)throw Error(F(160));S0(s,o,i),qe=null,qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)R0(e,t),e=e.sibling}function R0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),tn(t),r&4){try{lo(3,t,t.return),Su(3,t)}catch(N){Ae(t,t.return,N)}try{lo(5,t,t.return)}catch(N){Ae(t,t.return,N)}}break;case 1:$t(e,t),tn(t),r&512&&n!==null&&ji(n,n.return);break;case 5:if($t(e,t),tn(t),r&512&&n!==null&&ji(n,n.return),t.flags&32){var i=t.stateNode;try{vo(i,"")}catch(N){Ae(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Gv(i,s),Rd(l,o);var c=Rd(l,s);for(o=0;o<u.length;o+=2){var h=u[o],m=u[o+1];h==="style"?Zv(i,m):h==="dangerouslySetInnerHTML"?Xv(i,m):h==="children"?vo(i,m):$h(i,h,m,c)}switch(l){case"input":Ed(i,s);break;case"textarea":Qv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?Bi(i,!!s.multiple,x,!1):g!==!!s.multiple&&(s.defaultValue!=null?Bi(i,!!s.multiple,s.defaultValue,!0):Bi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ao]=s}catch(N){Ae(t,t.return,N)}}break;case 6:if($t(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Ae(t,t.return,N)}}break;case 3:if($t(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{To(e.containerInfo)}catch(N){Ae(t,t.return,N)}break;case 4:$t(e,t),tn(t);break;case 13:$t(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(If=Pe())),r&4&&Fg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(c=ot)||h,$t(e,t),ot=c):$t(e,t),tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(m=q=h;q!==null;){switch(g=q,x=g.child,g.tag){case 0:case 11:case 14:case 15:lo(4,g,g.return);break;case 1:ji(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){Ae(r,n,N)}}break;case 5:ji(g,g.return);break;case 22:if(g.memoizedState!==null){Bg(m);continue}}x!==null?(x.return=g,q=x):Bg(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Jv("display",o))}catch(N){Ae(t,t.return,N)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(N){Ae(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:$t(e,t),tn(t),r&4&&Fg(t);break;case 21:break;default:$t(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(x0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vo(i,""),r.flags&=-33);var s=Mg(t);nh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Mg(t);th(t,l,o);break;default:throw Error(F(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _x(t,e,n){q=t,A0(t)}function A0(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ha;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ot;l=Ha;var c=ot;if(Ha=o,(ot=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?zg(i):u!==null?(u.return=o,q=u):zg(i);for(;s!==null;)q=s,A0(s),s=s.sibling;q=i,Ha=l,ot=c}Ug(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Ug(t)}}function Ug(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||Su(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&To(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ot||e.flags&512&&eh(e)}catch(g){Ae(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Bg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function zg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Su(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{eh(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{eh(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var wx=Math.ceil,$l=qn.ReactCurrentDispatcher,Ef=qn.ReactCurrentOwner,Mt=qn.ReactCurrentBatchConfig,se=0,ze=null,Oe=null,Qe=0,Rt=0,Mi=br(0),Me=0,Do=null,si=0,Ru=0,Tf=0,uo=null,_t=null,If=0,rs=1/0,Rn=null,Wl=!1,rh=null,yr=null,Ka=!1,ur=null,ql=0,co=0,ih=null,dl=-1,hl=0;function mt(){return se&6?Pe():dl!==-1?dl:dl=Pe()}function vr(t){return t.mode&1?se&2&&Qe!==0?Qe&-Qe:rx.transition!==null?(hl===0&&(hl=d_()),hl):(t=ce,t!==0||(t=window.event,t=t===void 0?16:v_(t.type)),t):1}function Qt(t,e,n,r){if(50<co)throw co=0,ih=null,Error(F(185));Go(t,n,r),(!(se&2)||t!==ze)&&(t===ze&&(!(se&2)&&(Ru|=n),Me===4&&nr(t,Qe)),xt(t,r),n===1&&se===0&&!(e.mode&1)&&(rs=Pe()+500,Tu&&Dr()))}function xt(t,e){var n=t.callbackNode;r1(t,e);var r=kl(t,t===ze?Qe:0);if(r===0)n!==null&&Xm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xm(n),e===1)t.tag===0?nx($g.bind(null,t)):j_($g.bind(null,t)),J1(function(){!(se&6)&&Dr()}),n=null;else{switch(h_(r)){case 1:n=Gh;break;case 4:n=u_;break;case 16:n=Al;break;case 536870912:n=c_;break;default:n=Al}n=V0(n,k0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function k0(t,e){if(dl=-1,hl=0,se&6)throw Error(F(327));var n=t.callbackNode;if(Hi()&&t.callbackNode!==n)return null;var r=kl(t,t===ze?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hl(t,r);else{e=r;var i=se;se|=2;var s=C0();(ze!==t||Qe!==e)&&(Rn=null,rs=Pe()+500,Xr(t,e));do try{Ix();break}catch(l){P0(t,l)}while(!0);lf(),$l.current=s,se=i,Oe!==null?e=0:(ze=null,Qe=0,e=Me)}if(e!==0){if(e===2&&(i=Nd(t),i!==0&&(r=i,e=sh(t,i))),e===1)throw n=Do,Xr(t,0),nr(t,r),xt(t,Pe()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ex(i)&&(e=Hl(t,r),e===2&&(s=Nd(t),s!==0&&(r=s,e=sh(t,s))),e===1))throw n=Do,Xr(t,0),nr(t,r),xt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:qr(t,_t,Rn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=If+500-Pe(),10<e)){if(kl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Fd(qr.bind(null,t,_t,Rn),e);break}qr(t,_t,Rn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wx(r/1960))-r,10<r){t.timeoutHandle=Fd(qr.bind(null,t,_t,Rn),r);break}qr(t,_t,Rn);break;case 5:qr(t,_t,Rn);break;default:throw Error(F(329))}}}return xt(t,Pe()),t.callbackNode===n?k0.bind(null,t):null}function sh(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=Hl(t,e),t!==2&&(e=_t,_t=n,e!==null&&oh(e)),t}function oh(t){_t===null?_t=t:_t.push.apply(_t,t)}function Ex(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Tf,e&=~Ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function $g(t){if(se&6)throw Error(F(327));Hi();var e=kl(t,0);if(!(e&1))return xt(t,Pe()),null;var n=Hl(t,e);if(t.tag!==0&&n===2){var r=Nd(t);r!==0&&(e=r,n=sh(t,r))}if(n===1)throw n=Do,Xr(t,0),nr(t,e),xt(t,Pe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,_t,Rn),xt(t,Pe()),null}function xf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(rs=Pe()+500,Tu&&Dr())}}function oi(t){ur!==null&&ur.tag===0&&!(se&6)&&Hi();var e=se;se|=1;var n=Mt.transition,r=ce;try{if(Mt.transition=null,ce=1,t)return t()}finally{ce=r,Mt.transition=n,se=e,!(se&6)&&Dr()}}function Sf(){Rt=Mi.current,_e(Mi)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,X1(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(sf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dl();break;case 3:ts(),_e(Tt),_e(ct),pf();break;case 5:ff(r);break;case 4:ts();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:uf(r.type._context);break;case 22:case 23:Sf()}n=n.return}if(ze=t,Oe=t=_r(t.current,null),Qe=Rt=e,Me=0,Do=null,Tf=Ru=si=0,_t=uo=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gr=null}return t}function P0(t,e){do{var n=Oe;try{if(lf(),ll.current=zl,Bl){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bl=!1}if(ii=0,Be=Le=Ie=null,ao=!1,Co=0,Ef.current=null,n===null||n.return===null){Me=1,Do=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Cg(o);if(x!==null){x.flags&=-257,Ng(x,o,l,s,e),x.mode&1&&Pg(s,c,e),e=x,u=c;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Pg(s,c,e),Rf();break e}u=Error(F(426))}}else if(Ee&&l.mode&1){var k=Cg(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ng(k,o,l,s,e),of(ns(u,l));break e}}s=u=ns(u,l),Me!==4&&(Me=2),uo===null?uo=[s]:uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=h0(s,u,e);Ig(s,I);break e;case 1:l=u;var w=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(yr===null||!yr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=f0(s,l,e);Ig(s,D);break e}}s=s.return}while(s!==null)}b0(n)}catch(M){e=M,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function C0(){var t=$l.current;return $l.current=zl,t===null?zl:t}function Rf(){(Me===0||Me===3||Me===2)&&(Me=4),ze===null||!(si&268435455)&&!(Ru&268435455)||nr(ze,Qe)}function Hl(t,e){var n=se;se|=2;var r=C0();(ze!==t||Qe!==e)&&(Rn=null,Xr(t,e));do try{Tx();break}catch(i){P0(t,i)}while(!0);if(lf(),se=n,$l.current=r,Oe!==null)throw Error(F(261));return ze=null,Qe=0,Me}function Tx(){for(;Oe!==null;)N0(Oe)}function Ix(){for(;Oe!==null&&!GI();)N0(Oe)}function N0(t){var e=O0(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?b0(t):Oe=e,Ef.current=null}function b0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gx(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,Oe=null;return}}else if(n=mx(n,e,Rt),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Me===0&&(Me=5)}function qr(t,e,n){var r=ce,i=Mt.transition;try{Mt.transition=null,ce=1,xx(t,e,n,r)}finally{Mt.transition=i,ce=r}return null}function xx(t,e,n,r){do Hi();while(ur!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(i1(t,s),t===ze&&(Oe=ze=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ka||(Ka=!0,V0(Al,function(){return Hi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=ce;ce=1;var l=se;se|=4,Ef.current=null,vx(t,n),R0(n,t),W1(jd),Pl=!!Ld,jd=Ld=null,t.current=n,_x(n),QI(),se=l,ce=o,Mt.transition=s}else t.current=n;if(Ka&&(Ka=!1,ur=t,ql=i),s=t.pendingLanes,s===0&&(yr=null),JI(n.stateNode),xt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,t=rh,rh=null,t;return ql&1&&t.tag!==0&&Hi(),s=t.pendingLanes,s&1?t===ih?co++:(co=0,ih=t):co=0,Dr(),null}function Hi(){if(ur!==null){var t=h_(ql),e=Mt.transition,n=ce;try{if(Mt.transition=null,ce=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,ql=0,se&6)throw Error(F(331));var i=se;for(se|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:lo(8,h,s)}var m=h.child;if(m!==null)m.return=h,q=m;else for(;q!==null;){h=q;var g=h.sibling,x=h.return;if(I0(h),h===c){q=null;break}if(g!==null){g.return=x,q=g;break}q=x}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var k=N.sibling;N.sibling=null,N=k}while(N!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:lo(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,q=I;break e}q=s.return}}var w=t.current;for(q=w;q!==null;){o=q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,q=S;else e:for(o=w;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Su(9,l)}}catch(M){Ae(l,l.return,M)}if(l===o){q=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,q=D;break e}q=l.return}}if(se=i,Dr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(yu,t)}catch{}r=!0}return r}finally{ce=n,Mt.transition=e}}return!1}function Wg(t,e,n){e=ns(n,e),e=h0(t,e,1),t=gr(t,e,1),e=mt(),t!==null&&(Go(t,1,e),xt(t,e))}function Ae(t,e,n){if(t.tag===3)Wg(t,t,n);else for(;e!==null;){if(e.tag===3){Wg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=ns(n,t),t=f0(e,t,1),e=gr(e,t,1),t=mt(),e!==null&&(Go(e,1,t),xt(e,t));break}}e=e.return}}function Sx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Qe&n)===n&&(Me===4||Me===3&&(Qe&130023424)===Qe&&500>Pe()-If?Xr(t,0):Tf|=n),xt(t,e)}function D0(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=mt();t=Mn(t,e),t!==null&&(Go(t,e,n),xt(t,n))}function Rx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D0(t,n)}function Ax(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),D0(t,n)}var O0;O0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,px(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Ee&&e.flags&1048576&&M_(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;cl(t,e),t=e.pendingProps;var i=Ji(e,ct.current);qi(e,n),i=gf(null,e,r,t,i,n);var s=yf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,Ol(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,df(e),i.updater=xu,e.stateNode=i,i._reactInternals=e,Hd(e,r,t,n),e=Qd(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&rf(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Px(r),t=Wt(r,t),i){case 0:e=Gd(null,e,r,t,n);break e;case 1:e=Og(null,e,r,t,n);break e;case 11:e=bg(null,e,r,t,n);break e;case 14:e=Dg(null,e,r,Wt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Gd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Og(t,e,r,i,n);case 3:e:{if(y0(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,W_(t,e),Fl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ns(Error(F(423)),e),e=Vg(t,e,r,n,i);break e}else if(r!==i){i=ns(Error(F(424)),e),e=Vg(t,e,r,n,i);break e}else for(At=mr(e.stateNode.containerInfo.firstChild),Pt=e,Ee=!0,Ht=null,n=z_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zi(),r===i){e=Fn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return q_(e),t===null&&$d(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Md(r,i)?o=null:s!==null&&Md(r,s)&&(e.flags|=32),g0(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&$d(e),null;case 13:return v0(t,e,n);case 4:return hf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=es(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),bg(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(jl,r._currentValue),r._currentValue=o,s!==null)if(Jt(s.value,o)){if(s.children===i.children&&!Tt.current){e=Fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Dn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Wd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qi(e,n),i=Ft(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),Dg(t,e,r,i,n);case 15:return p0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),cl(t,e),e.tag=1,It(r)?(t=!0,Ol(e)):t=!1,qi(e,n),d0(e,r,i),Hd(e,r,i,n),Qd(null,e,r,!0,t,n);case 19:return _0(t,e,n);case 22:return m0(t,e,n)}throw Error(F(156,e.tag))};function V0(t,e){return l_(t,e)}function kx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new kx(t,e,n,r)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Px(t){if(typeof t=="function")return Af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qh)return 11;if(t===Hh)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Af(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ki:return Jr(n.children,i,s,e);case Wh:o=8,i|=8;break;case gd:return t=jt(12,n,e,i|2),t.elementType=gd,t.lanes=s,t;case yd:return t=jt(13,n,e,i),t.elementType=yd,t.lanes=s,t;case vd:return t=jt(19,n,e,i),t.elementType=vd,t.lanes=s,t;case qv:return Au(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $v:o=10;break e;case Wv:o=9;break e;case qh:o=11;break e;case Hh:o=14;break e;case Zn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function Au(t,e,n,r){return t=jt(22,t,r,e),t.elementType=qv,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kf(t,e,n,r,i,s,o,l,u){return t=new Cx(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(s),t}function Nx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ai,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function L0(t){if(!t)return Sr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(It(n))return L_(t,n,e)}return e}function j0(t,e,n,r,i,s,o,l,u){return t=kf(n,r,!0,t,i,s,o,l,u),t.context=L0(null),n=t.current,r=mt(),i=vr(n),s=Dn(r,i),s.callback=e??null,gr(n,s,i),t.current.lanes=i,Go(t,i,r),xt(t,r),t}function ku(t,e,n,r){var i=e.current,s=mt(),o=vr(i);return n=L0(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gr(i,e,o),t!==null&&(Qt(t,i,o,s),al(t,i,o)),o}function Kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pf(t,e){qg(t,e),(t=t.alternate)&&qg(t,e)}function bx(){return null}var M0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cf(t){this._internalRoot=t}Pu.prototype.render=Cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));ku(t,e,null,null)};Pu.prototype.unmount=Cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;oi(function(){ku(null,t,null,null)}),e[jn]=null}};function Pu(t){this._internalRoot=t}Pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=m_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&y_(t)}};function Nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function Dx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Kl(o);s.call(c)}}var o=j0(e,r,t,0,null,!1,!1,"",Hg);return t._reactRootContainer=o,t[jn]=o.current,So(t.nodeType===8?t.parentNode:t),oi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Kl(u);l.call(c)}}var u=kf(t,0,!1,null,null,!1,!1,"",Hg);return t._reactRootContainer=u,t[jn]=u.current,So(t.nodeType===8?t.parentNode:t),oi(function(){ku(e,u,n,r)}),u}function Nu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Kl(o);l.call(u)}}ku(e,o,t,i)}else o=Dx(n,e,t,i,r);return Kl(o)}f_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ks(e.pendingLanes);n!==0&&(Qh(e,n|1),xt(e,Pe()),!(se&6)&&(rs=Pe()+500,Dr()))}break;case 13:oi(function(){var r=Mn(t,1);if(r!==null){var i=mt();Qt(r,t,1,i)}}),Pf(t,1)}};Yh=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=mt();Qt(e,t,134217728,n)}Pf(t,134217728)}};p_=function(t){if(t.tag===13){var e=vr(t),n=Mn(t,e);if(n!==null){var r=mt();Qt(n,t,e,r)}Pf(t,e)}};m_=function(){return ce};g_=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};kd=function(t,e,n){switch(e){case"input":if(Ed(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Eu(r);if(!i)throw Error(F(90));Kv(r),Ed(r,i)}}}break;case"textarea":Qv(t,n);break;case"select":e=n.value,e!=null&&Bi(t,!!n.multiple,e,!1)}};n_=xf;r_=oi;var Ox={usingClientEntryPoint:!1,Events:[Yo,bi,Eu,e_,t_,xf]},$s={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vx={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o_(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{yu=Ga.inject(Vx),un=Ga}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ox;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(e))throw Error(F(200));return Nx(t,e,null,n)};bt.createRoot=function(t,e){if(!Nf(t))throw Error(F(299));var n=!1,r="",i=M0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=kf(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,So(t.nodeType===8?t.parentNode:t),new Cf(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=o_(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return oi(t)};bt.hydrate=function(t,e,n){if(!Cu(e))throw Error(F(200));return Nu(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!Nf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=M0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=j0(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,So(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pu(e)};bt.render=function(t,e,n){if(!Cu(e))throw Error(F(200));return Nu(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!Cu(t))throw Error(F(40));return t._reactRootContainer?(oi(function(){Nu(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};bt.unstable_batchedUpdates=xf;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Nu(t,e,n,!1,r)};bt.version="18.3.1-next-f1338f8080-20240426";function F0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F0)}catch(t){console.error(t)}}F0(),Fv.exports=bt;var Lx=Fv.exports,Kg=Lx;pd.createRoot=Kg.createRoot,pd.hydrateRoot=Kg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo(){return Oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oo.apply(this,arguments)}var cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(cr||(cr={}));const Gg="popstate";function jx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return ah("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Gl(i)}return Fx(e,n,null,t)}function Ce(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Mx(){return Math.random().toString(36).substr(2,8)}function Qg(t,e){return{usr:t.state,key:t.key,idx:e}}function ah(t,e,n,r){return n===void 0&&(n=null),Oo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ms(e):e,{state:n,key:e&&e.key||r||Mx()})}function Gl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Fx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=cr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Oo({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function m(){l=cr.Pop;let k=h(),I=k==null?null:k-c;c=k,u&&u({action:l,location:N.location,delta:I})}function g(k,I){l=cr.Push;let w=ah(N.location,k,I);c=h()+1;let S=Qg(w,c),D=N.createHref(w);try{o.pushState(S,"",D)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(D)}s&&u&&u({action:l,location:N.location,delta:1})}function x(k,I){l=cr.Replace;let w=ah(N.location,k,I);c=h();let S=Qg(w,c),D=N.createHref(w);o.replaceState(S,"",D),s&&u&&u({action:l,location:N.location,delta:0})}function P(k){let I=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof k=="string"?k:Gl(k);return w=w.replace(/ $/,"%20"),Ce(I,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,I)}let N={get action(){return l},get location(){return t(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Gg,m),u=k,()=>{i.removeEventListener(Gg,m),u=null}},createHref(k){return e(i,k)},createURL:P,encodeLocation(k){let I=P(k);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:g,replace:x,go(k){return o.go(k)}};return N}var Yg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yg||(Yg={}));function Ux(t,e,n){return n===void 0&&(n="/"),Bx(t,e,n)}function Bx(t,e,n,r){let i=typeof e=="string"?ms(e):e,s=Df(i.pathname||"/",n);if(s==null)return null;let o=U0(t);zx(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=eS(s);l=Xx(o[u],c)}return l}function U0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ce(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=wr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),U0(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Qx(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of B0(s.path))i(s,o,u)}),e}function B0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=B0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function zx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Yx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $x=/^:[\w-]+$/,Wx=3,qx=2,Hx=1,Kx=10,Gx=-2,Xg=t=>t==="*";function Qx(t,e){let n=t.split("/"),r=n.length;return n.some(Xg)&&(r+=Gx),e&&(r+=qx),n.filter(i=>!Xg(i)).reduce((i,s)=>i+($x.test(s)?Wx:s===""?Hx:Kx),r)}function Yx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Xx(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",m=Jx({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:wr([s,m.pathname]),pathnameBase:sS(wr([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=wr([s,m.pathnameBase]))}return o}function Jx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Zx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:x}=h;if(g==="*"){let N=l[m]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const P=l[m];return x&&!P?c[g]=void 0:c[g]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Zx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),bf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function eS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Df(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const tS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nS=t=>tS.test(t);function rS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ms(t):t,s;if(n)if(nS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),bf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Jg(n.substring(1),"/"):s=Jg(n,e)}else s=e;return{pathname:s,search:oS(r),hash:aS(i)}}function Jg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ed(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Of(t,e){let n=iS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Vf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ms(t):(i=Oo({},t),Ce(!i.pathname||!i.pathname.includes("?"),ed("?","pathname","search",i)),Ce(!i.pathname||!i.pathname.includes("#"),ed("#","pathname","hash",i)),Ce(!i.search||!i.search.includes("#"),ed("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=rS(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const wr=t=>t.join("/").replace(/\/\/+/g,"/"),sS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),oS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,aS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const z0=["post","put","patch","delete"];new Set(z0);const uS=["get",...z0];new Set(uS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vo.apply(this,arguments)}const Lf=O.createContext(null),cS=O.createContext(null),Or=O.createContext(null),bu=O.createContext(null),Vr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),$0=O.createContext(null);function dS(t,e){let{relative:n}=e===void 0?{}:e;gs()||Ce(!1);let{basename:r,navigator:i}=O.useContext(Or),{hash:s,pathname:o,search:l}=q0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:wr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function gs(){return O.useContext(bu)!=null}function Jo(){return gs()||Ce(!1),O.useContext(bu).location}function W0(t){O.useContext(Or).static||O.useLayoutEffect(t)}function ys(){let{isDataRoute:t}=O.useContext(Vr);return t?xS():hS()}function hS(){gs()||Ce(!1);let t=O.useContext(Lf),{basename:e,future:n,navigator:r}=O.useContext(Or),{matches:i}=O.useContext(Vr),{pathname:s}=Jo(),o=JSON.stringify(Of(i,n.v7_relativeSplatPath)),l=O.useRef(!1);return W0(()=>{l.current=!0}),O.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=Vf(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:wr([e,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[e,r,o,s,t])}function q0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Or),{matches:i}=O.useContext(Vr),{pathname:s}=Jo(),o=JSON.stringify(Of(i,r.v7_relativeSplatPath));return O.useMemo(()=>Vf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function fS(t,e){return pS(t,e)}function pS(t,e,n,r){gs()||Ce(!1);let{navigator:i}=O.useContext(Or),{matches:s}=O.useContext(Vr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Jo(),h;if(e){var m;let k=typeof e=="string"?ms(e):e;u==="/"||(m=k.pathname)!=null&&m.startsWith(u)||Ce(!1),h=k}else h=c;let g=h.pathname||"/",x=g;if(u!=="/"){let k=u.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let P=Ux(t,{pathname:x}),N=_S(P&&P.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:wr([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:wr([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&N?O.createElement(bu.Provider,{value:{location:Vo({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:cr.Pop}},N):N}function mS(){let t=IS(),e=lS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const gS=O.createElement(mS,null);class yS extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Vr.Provider,{value:this.props.routeContext},O.createElement($0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vS(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(Lf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Vr.Provider,{value:e},r)}function _S(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);h>=0||Ce(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:x}=n,P=m.route.loader&&g[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,m,g)=>{let x,P=!1,N=null,k=null;n&&(x=l&&m.route.id?l[m.route.id]:void 0,N=m.route.errorElement||gS,u&&(c<0&&g===0?(SS("route-fallback"),P=!0,k=null):c===g&&(P=!0,k=m.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,g+1)),w=()=>{let S;return x?S=N:P?S=k:m.route.Component?S=O.createElement(m.route.Component,null):m.route.element?S=m.route.element:S=h,O.createElement(vS,{match:m,routeContext:{outlet:h,matches:I,isDataRoute:n!=null},children:S})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?O.createElement(yS,{location:n.location,revalidation:n.revalidation,component:N,error:x,children:w(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):w()},null)}var H0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(H0||{}),K0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(K0||{});function wS(t){let e=O.useContext(Lf);return e||Ce(!1),e}function ES(t){let e=O.useContext(cS);return e||Ce(!1),e}function TS(t){let e=O.useContext(Vr);return e||Ce(!1),e}function G0(t){let e=TS(),n=e.matches[e.matches.length-1];return n.route.id||Ce(!1),n.route.id}function IS(){var t;let e=O.useContext($0),n=ES(),r=G0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function xS(){let{router:t}=wS(H0.UseNavigateStable),e=G0(K0.UseNavigateStable),n=O.useRef(!1);return W0(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Vo({fromRouteId:e},s)))},[t,e])}const Zg={};function SS(t,e,n){Zg[t]||(Zg[t]=!0)}function RS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Qs(t){let{to:e,replace:n,state:r,relative:i}=t;gs()||Ce(!1);let{future:s,static:o}=O.useContext(Or),{matches:l}=O.useContext(Vr),{pathname:u}=Jo(),c=ys(),h=Vf(e,Of(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(h);return O.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function Sn(t){Ce(!1)}function AS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=cr.Pop,navigator:s,static:o=!1,future:l}=t;gs()&&Ce(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:Vo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ms(r));let{pathname:h="/",search:m="",hash:g="",state:x=null,key:P="default"}=r,N=O.useMemo(()=>{let k=Df(h,u);return k==null?null:{location:{pathname:k,search:m,hash:g,state:x,key:P},navigationType:i}},[u,h,m,g,x,P,i]);return N==null?null:O.createElement(Or.Provider,{value:c},O.createElement(bu.Provider,{children:n,value:N}))}function kS(t){let{children:e,location:n}=t;return fS(lh(e),n)}new Promise(()=>{});function lh(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,lh(r.props.children,s));return}r.type!==Sn&&Ce(!1),!r.props.index||!r.props.children||Ce(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uh(){return uh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uh.apply(this,arguments)}function PS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function NS(t,e){return t.button===0&&(!e||e==="_self")&&!CS(t)}const bS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],DS="6";try{window.__reactRouterVersion=DS}catch{}const OS="startTransition",ey=SI[OS];function VS(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=jx({window:i,v5Compat:!0}));let o=s.current,[l,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=O.useCallback(m=>{c&&ey?ey(()=>u(m)):u(m)},[u,c]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.useEffect(()=>RS(r),[r]),O.createElement(AS,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const LS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vt=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:h,viewTransition:m}=e,g=PS(e,bS),{basename:x}=O.useContext(Or),P,N=!1;if(typeof c=="string"&&jS.test(c)&&(P=c,LS))try{let S=new URL(window.location.href),D=c.startsWith("//")?new URL(S.protocol+c):new URL(c),M=Df(D.pathname,x);D.origin===S.origin&&M!=null?c=M+D.search+D.hash:N=!0}catch{}let k=dS(c,{relative:i}),I=MS(c,{replace:o,state:l,target:u,preventScrollReset:h,relative:i,viewTransition:m});function w(S){r&&r(S),S.defaultPrevented||I(S)}return O.createElement("a",uh({},g,{href:P||k,onClick:N||s?r:w,ref:n,target:u}))});var ty;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ty||(ty={}));var ny;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ny||(ny={}));function MS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=ys(),c=Jo(),h=q0(t,{relative:o});return O.useCallback(m=>{if(NS(m,n)){m.preventDefault();let g=r!==void 0?r:Gl(c)===Gl(h);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,h,r,i,n,t,s,o,l])}let FS={data:""},US=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||FS},BS=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,zS=/\/\*[^]*?\*\/|  +/g,ry=/\n+/g,rr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?rr(o,s):s+"{"+rr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=rr(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=rr.p?rr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},xn={},Q0=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Q0(t[n]);return e}return t},$S=(t,e,n,r,i)=>{let s=Q0(t),o=xn[s]||(xn[s]=(u=>{let c=0,h=11;for(;c<u.length;)h=101*h+u.charCodeAt(c++)>>>0;return"go"+h})(s));if(!xn[o]){let u=s!==t?t:(c=>{let h,m,g=[{}];for(;h=BS.exec(c.replace(zS,""));)h[4]?g.shift():h[3]?(m=h[3].replace(ry," ").trim(),g.unshift(g[0][m]=g[0][m]||{})):g[0][h[1]]=h[2].replace(ry," ").trim();return g[0]})(t);xn[o]=rr(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&xn.g?xn.g:null;return n&&(xn.g=xn[o]),((u,c,h,m)=>{m?c.data=c.data.replace(m,u):c.data.indexOf(u)===-1&&(c.data=h?u+c.data:c.data+u)})(xn[o],e,r,l),o},WS=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":rr(l,""):l===!1?"":l}return r+i+(o??"")},"");function Du(t){let e=this||{},n=t.call?t(e.p):t;return $S(n.unshift?n.raw?WS(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,US(e.target),e.g,e.o,e.k)}let Y0,ch,dh;Du.bind({g:1});let Un=Du.bind({k:1});function qS(t,e,n,r){rr.p=e,Y0=t,ch=n,dh=r}function Lr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:ch&&ch()},l),n.o=/ *go\d+/.test(u),l.className=Du.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=l.as||t,delete l.as),dh&&c[0]&&dh(l),Y0(c,l)}return i}}var HS=t=>typeof t=="function",Ql=(t,e)=>HS(t)?t(e):t,KS=(()=>{let t=0;return()=>(++t).toString()})(),X0=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),GS=20,jf="default",J0=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return J0(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},pl=[],Z0={toasts:[],pausedAt:void 0,settings:{toastLimit:GS}},on={},ew=(t,e=jf)=>{on[e]=J0(on[e]||Z0,t),pl.forEach(([n,r])=>{n===e&&r(on[e])})},tw=t=>Object.keys(on).forEach(e=>ew(t,e)),QS=t=>Object.keys(on).find(e=>on[e].toasts.some(n=>n.id===t)),Ou=(t=jf)=>e=>{ew(e,t)},YS={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},XS=(t={},e=jf)=>{let[n,r]=O.useState(on[e]||Z0),i=O.useRef(on[e]);O.useEffect(()=>(i.current!==on[e]&&r(on[e]),pl.push([e,r]),()=>{let o=pl.findIndex(([l])=>l===e);o>-1&&pl.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||YS[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},JS=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||KS()}),Zo=t=>(e,n)=>{let r=JS(e,t,n);return Ou(r.toasterId||QS(r.id))({type:2,toast:r}),r.id},je=(t,e)=>Zo("blank")(t,e);je.error=Zo("error");je.success=Zo("success");je.loading=Zo("loading");je.custom=Zo("custom");je.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Ou(e)(n):tw(n)};je.dismissAll=t=>je.dismiss(void 0,t);je.remove=(t,e)=>{let n={type:4,toastId:t};e?Ou(e)(n):tw(n)};je.removeAll=t=>je.remove(void 0,t);je.promise=(t,e,n)=>{let r=je.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?Ql(e.success,i):void 0;return s?je.success(s,{id:r,...n,...n==null?void 0:n.success}):je.dismiss(r),i}).catch(i=>{let s=e.error?Ql(e.error,i):void 0;s?je.error(s,{id:r,...n,...n==null?void 0:n.error}):je.dismiss(r)}),t};var ZS=1e3,eR=(t,e="default")=>{let{toasts:n,pausedAt:r}=XS(t,e),i=O.useRef(new Map).current,s=O.useCallback((m,g=ZS)=>{if(i.has(m))return;let x=setTimeout(()=>{i.delete(m),o({type:4,toastId:m})},g);i.set(m,x)},[]);O.useEffect(()=>{if(r)return;let m=Date.now(),g=n.map(x=>{if(x.duration===1/0)return;let P=(x.duration||0)+x.pauseDuration-(m-x.createdAt);if(P<0){x.visible&&je.dismiss(x.id);return}return setTimeout(()=>je.dismiss(x.id,e),P)});return()=>{g.forEach(x=>x&&clearTimeout(x))}},[n,r,e]);let o=O.useCallback(Ou(e),[e]),l=O.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=O.useCallback((m,g)=>{o({type:1,toast:{id:m,height:g}})},[o]),c=O.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),h=O.useCallback((m,g)=>{let{reverseOrder:x=!1,gutter:P=8,defaultPosition:N}=g||{},k=n.filter(S=>(S.position||N)===(m.position||N)&&S.height),I=k.findIndex(S=>S.id===m.id),w=k.filter((S,D)=>D<I&&S.visible).length;return k.filter(S=>S.visible).slice(...x?[w+1]:[0,w]).reduce((S,D)=>S+(D.height||0)+P,0)},[n]);return O.useEffect(()=>{n.forEach(m=>{if(m.dismissed)s(m.id,m.removeDelay);else{let g=i.get(m.id);g&&(clearTimeout(g),i.delete(m.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:h}}},tR=Un`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,nR=Un`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,rR=Un`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,iR=Lr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${tR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${nR} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${rR} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,sR=Un`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,oR=Lr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${sR} 1s linear infinite;
`,aR=Un`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,lR=Un`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,uR=Lr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${aR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${lR} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,cR=Lr("div")`
  position: absolute;
`,dR=Lr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,hR=Un`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fR=Lr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${hR} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,pR=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?O.createElement(fR,null,e):e:n==="blank"?null:O.createElement(dR,null,O.createElement(oR,{...r}),n!=="loading"&&O.createElement(cR,null,n==="error"?O.createElement(iR,{...r}):O.createElement(uR,{...r})))},mR=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,gR=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,yR="0%{opacity:0;} 100%{opacity:1;}",vR="0%{opacity:1;} 100%{opacity:0;}",_R=Lr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,wR=Lr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ER=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=X0()?[yR,vR]:[mR(n),gR(n)];return{animation:e?`${Un(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Un(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},TR=O.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?ER(t.position||e||"top-center",t.visible):{opacity:0},s=O.createElement(pR,{toast:t}),o=O.createElement(wR,{...t.ariaProps},Ql(t.message,t));return O.createElement(_R,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):O.createElement(O.Fragment,null,s,o))});qS(O.createElement);var IR=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=O.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return O.createElement("div",{ref:s,className:e,style:n},i)},xR=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:X0()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},SR=Du`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Qa=16,RR=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=eR(n,s);return O.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Qa,left:Qa,right:Qa,bottom:Qa,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(h=>{let m=h.position||e,g=c.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),x=xR(m,g);return O.createElement(IR,{id:h.id,key:h.id,onHeightUpdate:c.updateHeight,className:h.visible?SR:"",style:x},h.type==="custom"?Ql(h.message,h):i?i(h):O.createElement(TR,{toast:h,position:m}))}))},ie=je,iy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},AR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,x=c&63;u||(x=64,o||(g=64)),r.push(n[h],n[m],n[g],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new kR;const g=s<<2|l>>4;if(r.push(g),c!==64){const x=l<<4&240|c>>2;if(r.push(x),m!==64){const P=c<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PR=function(t){const e=nw(t);return rw.encodeByteArray(e,!0)},Yl=function(t){return PR(t).replace(/\./g,"")},iw=function(t){try{return rw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=()=>CR().__FIREBASE_DEFAULTS__,bR=()=>{if(typeof process>"u"||typeof iy>"u")return;const t=iy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&iw(t[1]);return e&&JSON.parse(e)},Vu=()=>{try{return NR()||bR()||DR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sw=t=>{var e,n;return(n=(e=Vu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ow=t=>{const e=sw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},aw=()=>{var t;return(t=Vu())===null||t===void 0?void 0:t.config},lw=t=>{var e;return(e=Vu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yl(JSON.stringify(n)),Yl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function LR(){var t;const e=(t=Vu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UR(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BR(){return!LR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zR(){try{return typeof indexedDB=="object"}catch{return!1}}function $R(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=WR,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ea.prototype.create)}}class ea{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vn(i,l,r)}}function qR(t,e){return t.replace(HR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HR=/\{\$([^}]+)}/g;function KR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(sy(s)&&sy(o)){if(!Xl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function GR(t,e){const n=new QR(t,e);return n.subscribe.bind(n)}class QR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=td),i.error===void 0&&(i.error=td),i.complete===void 0&&(i.complete=td);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function td(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return t&&t._delegate?t._delegate:t}class Rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new OR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZR(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JR(t){return t===Hr?void 0:t}function ZR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const tA={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},nA=ne.INFO,rA={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},iA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mf{constructor(e){this.name=e,this._logLevel=nA,this._logHandler=iA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const sA=(t,e)=>e.some(n=>t instanceof n);let oy,ay;function oA(){return oy||(oy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aA(){return ay||(ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cw=new WeakMap,hh=new WeakMap,dw=new WeakMap,nd=new WeakMap,Ff=new WeakMap;function lA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cw.set(n,t)}).catch(()=>{}),Ff.set(e,t),e}function uA(t){if(hh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hh.set(t,e)}let fh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cA(t){fh=t(fh)}function dA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rd(this),e,...n);return dw.set(r,e.sort?e.sort():[e]),Er(r)}:aA().includes(t)?function(...e){return t.apply(rd(this),e),Er(cw.get(this))}:function(...e){return Er(t.apply(rd(this),e))}}function hA(t){return typeof t=="function"?dA(t):(t instanceof IDBTransaction&&uA(t),sA(t,oA())?new Proxy(t,fh):t)}function Er(t){if(t instanceof IDBRequest)return lA(t);if(nd.has(t))return nd.get(t);const e=hA(t);return e!==t&&(nd.set(t,e),Ff.set(e,t)),e}const rd=t=>Ff.get(t);function fA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Er(o.result),u.oldVersion,u.newVersion,Er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const pA=["get","getKey","getAll","getAllKeys","count"],mA=["put","add","delete","clear"],id=new Map;function ly(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(id.get(e))return id.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return id.set(e,s),s}cA(t=>({...t,get:(e,n,r)=>ly(e,n)||t.get(e,n,r),has:(e,n)=>!!ly(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ph="@firebase/app",uy="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Mf("@firebase/app"),vA="@firebase/app-compat",_A="@firebase/analytics-compat",wA="@firebase/analytics",EA="@firebase/app-check-compat",TA="@firebase/app-check",IA="@firebase/auth",xA="@firebase/auth-compat",SA="@firebase/database",RA="@firebase/data-connect",AA="@firebase/database-compat",kA="@firebase/functions",PA="@firebase/functions-compat",CA="@firebase/installations",NA="@firebase/installations-compat",bA="@firebase/messaging",DA="@firebase/messaging-compat",OA="@firebase/performance",VA="@firebase/performance-compat",LA="@firebase/remote-config",jA="@firebase/remote-config-compat",MA="@firebase/storage",FA="@firebase/storage-compat",UA="@firebase/firestore",BA="@firebase/vertexai-preview",zA="@firebase/firestore-compat",$A="firebase",WA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="[DEFAULT]",qA={[ph]:"fire-core",[vA]:"fire-core-compat",[wA]:"fire-analytics",[_A]:"fire-analytics-compat",[TA]:"fire-app-check",[EA]:"fire-app-check-compat",[IA]:"fire-auth",[xA]:"fire-auth-compat",[SA]:"fire-rtdb",[RA]:"fire-data-connect",[AA]:"fire-rtdb-compat",[kA]:"fire-fn",[PA]:"fire-fn-compat",[CA]:"fire-iid",[NA]:"fire-iid-compat",[bA]:"fire-fcm",[DA]:"fire-fcm-compat",[OA]:"fire-perf",[VA]:"fire-perf-compat",[LA]:"fire-rc",[jA]:"fire-rc-compat",[MA]:"fire-gcs",[FA]:"fire-gcs-compat",[UA]:"fire-fst",[zA]:"fire-fst-compat",[BA]:"fire-vertex","fire-js":"fire-js",[$A]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new Map,HA=new Map,gh=new Map;function cy(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ai(t){const e=t.name;if(gh.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;gh.set(e,t);for(const n of Jl.values())cy(n,t);for(const n of HA.values())cy(n,t);return!0}function Lu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new ea("app","Firebase",KA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=WA;function hw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tr.create("bad-app-name",{appName:String(i)});if(n||(n=aw()),!n)throw Tr.create("no-options");const s=Jl.get(i);if(s){if(Xl(n,s.options)&&Xl(r,s.config))return s;throw Tr.create("duplicate-app",{appName:i})}const o=new eA(i);for(const u of gh.values())o.addComponent(u);const l=new GA(n,r,o);return Jl.set(i,l),l}function Uf(t=mh){const e=Jl.get(t);if(!e&&t===mh&&aw())return hw();if(!e)throw Tr.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let i=(r=qA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}ai(new Rr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="firebase-heartbeat-database",YA=1,Lo="firebase-heartbeat-store";let sd=null;function fw(){return sd||(sd=fA(QA,YA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tr.create("idb-open",{originalErrorMessage:t.message})})),sd}async function XA(t){try{const n=(await fw()).transaction(Lo),r=await n.objectStore(Lo).get(pw(t));return await n.done,r}catch(e){if(e instanceof vn)Bn.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function dy(t,e){try{const r=(await fw()).transaction(Lo,"readwrite");await r.objectStore(Lo).put(e,pw(t)),await r.done}catch(n){if(n instanceof vn)Bn.warn(n.message);else{const r=Tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function pw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=1024,ZA=30*24*60*60*1e3;class ek{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ZA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hy(),{heartbeatsToSend:r,unsentEntries:i}=tk(this._heartbeatsCache.heartbeats),s=Yl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Bn.warn(n),""}}}function hy(){return new Date().toISOString().substring(0,10)}function tk(t,e=JA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zR()?$R().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fy(t){return Yl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t){ai(new Rr("platform-logger",e=>new gA(e),"PRIVATE")),ai(new Rr("heartbeat",e=>new ek(e),"PRIVATE")),dn(ph,uy,t),dn(ph,uy,"esm2017"),dn("fire-js","")}rk("");function Bf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function mw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ik=mw,gw=new ea("auth","Firebase",mw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new Mf("@firebase/auth");function sk(t,...e){Zl.logLevel<=ne.WARN&&Zl.warn(`Auth (${mi}): ${t}`,...e)}function ml(t,...e){Zl.logLevel<=ne.ERROR&&Zl.error(`Auth (${mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,...e){throw zf(t,...e)}function hn(t,...e){return zf(t,...e)}function yw(t,e,n){const r=Object.assign(Object.assign({},ik()),{[e]:n});return new ea("auth","Firebase",r).create(e,{appName:t.name})}function On(t){return yw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gw.create(t,...e)}function Y(t,e,...n){if(!t)throw zf(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ml(e),new Error(e)}function zn(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ok(){return py()==="http:"||py()==="https:"}function py(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ok()||MR()||"connection"in navigator)?navigator.onLine:!0}function lk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=VR()||FR()}get(){return ak()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=new na(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hn(t,e,n,r,i={}){return _w(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ta(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return jR()||(c.referrerPolicy="no-referrer"),vw.fetch()(ww(t,t.config.apiHost,n,l),c)})}async function _w(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uk),e);try{const i=new hk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ya(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ya(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ya(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw yw(t,h,c);Zt(t,h)}}catch(i){if(i instanceof vn)throw i;Zt(t,"network-request-failed",{message:String(i)})}}async function ra(t,e,n,r,i={}){const s=await Hn(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ww(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$f(t.config,i):`${t.config.apiScheme}://${i}`}function dk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),ck.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hn(t,e,r);return i.customData._tokenResponse=n,i}function my(t){return t!==void 0&&t.enterprise!==void 0}class fk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function pk(t,e){return Hn(t,"GET","/v2/recaptchaConfig",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function Ew(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gk(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),i=Wf(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ho(od(i.auth_time)),issuedAtTime:ho(od(i.iat)),expirationTime:ho(od(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function od(t){return Number(t)*1e3}function Wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=iw(n);return i?JSON.parse(i):(ml("Failed to decode base64 JWT payload"),null)}catch(i){return ml("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gy(t){const e=Wf(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&yk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ho(this.lastLoginAt),this.creationTime=ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await is(t,Ew(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Tw(s.providerUserInfo):[],l=wk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new vh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function _k(t){const e=Ne(t);await eu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Tw(t){return t.map(e=>{var{providerId:n}=e,r=Bf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek(t,e){const n=await _w(t,{},async()=>{const r=ta({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ww(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",vw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tk(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=gy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ek(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ki;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await is(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gk(this,e)}reload(){return _k(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await eu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(On(this.auth));const e=await this.getIdToken();return await is(this,mk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,h;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,x=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:D,isAnonymous:M,providerData:U,stsTokenManager:E}=n;Y(S&&E,e,"internal-error");const v=Ki.fromJSON(this.name,E);Y(typeof S=="string",e,"internal-error"),Xn(m,e.name),Xn(g,e.name),Y(typeof D=="boolean",e,"internal-error"),Y(typeof M=="boolean",e,"internal-error"),Xn(x,e.name),Xn(P,e.name),Xn(N,e.name),Xn(k,e.name),Xn(I,e.name),Xn(w,e.name);const R=new Nn({uid:S,auth:e,email:g,emailVerified:D,displayName:m,isAnonymous:M,photoURL:P,phoneNumber:x,tenantId:N,stsTokenManager:v,createdAt:I,lastLoginAt:w});return U&&Array.isArray(U)&&(R.providerData=U.map(A=>Object.assign({},A))),k&&(R._redirectEventId=k),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ki;i.updateFromServerResponse(n);const s=new Nn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await eu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Tw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ki;l.updateFromIdToken(r);const u=new Nn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=new Map;function bn(t){zn(t instanceof Function,"Expected a class definition");let e=yy.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Iw.type="NONE";const vy=Iw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t,e,n){return`firebase:${t}:${e}:${n}`}class Gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gl(this.userKey,i.apiKey,s),this.fullPersistenceKey=gl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gi(bn(vy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||bn(vy);const o=gl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const m=Nn._fromJSON(e,h);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Gi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Gi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Aw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pw(e))return"Blackberry";if(Cw(e))return"Webos";if(Sw(e))return"Safari";if((e.includes("chrome/")||Rw(e))&&!e.includes("edge/"))return"Chrome";if(kw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xw(t=dt()){return/firefox\//i.test(t)}function Sw(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rw(t=dt()){return/crios\//i.test(t)}function Aw(t=dt()){return/iemobile/i.test(t)}function kw(t=dt()){return/android/i.test(t)}function Pw(t=dt()){return/blackberry/i.test(t)}function Cw(t=dt()){return/webos/i.test(t)}function qf(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ik(t=dt()){var e;return qf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xk(){return UR()&&document.documentMode===10}function Nw(t=dt()){return qf(t)||kw(t)||Cw(t)||Pw(t)||/windows phone/i.test(t)||Aw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t,e=[]){let n;switch(t){case"Browser":n=_y(dt());break;case"Worker":n=`${_y(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",jr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=6;class kk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ak,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wy(this),this.idTokenSubscription=new wy(this),this.beforeStateQueue=new Sk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ew(this,{idToken:e}),r=await Nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await eu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(On(this));const n=e?Ne(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(On(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(On(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rk(this),n=new kk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ea("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Gi.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gi(t){return Ne(t)}class wy{constructor(e){this.auth=e,this.observer=null,this.addObserver=GR(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ck(t){ju=t}function Dw(t){return ju.loadJS(t)}function Nk(){return ju.recaptchaEnterpriseScript}function bk(){return ju.gapiScript}function Dk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ok="recaptcha-enterprise",Vk="NO_RECAPTCHA";class Lk{constructor(e){this.type=Ok,this.auth=gi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{pk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new fk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;my(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Vk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&my(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Nk();u.length!==0&&(u+=l),Dw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Ey(t,e,n,r=!1){const i=new Lk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function _h(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ey(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ey(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(t,e){const n=Lu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xl(s,e??{}))return i;Zt(i,"already-initialized")}return n.initialize({options:e})}function Mk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Fk(t,e,n){const r=gi(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ow(e),{host:o,port:l}=Uk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Bk()}function Ow(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Uk(t){const e=Ow(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ty(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ty(o)}}}function Ty(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}async function zk(t,e){return Hn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(t,e){return ra(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){return ra(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function qk(t,e){return ra(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Hf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _h(e,n,"signInWithPassword",$k);case"emailLink":return Wk(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _h(e,r,"signUpPassword",zk);case"emailLink":return qk(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t,e){return ra(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="http://localhost";class li extends Hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qi(e,n)}buildRequest(){const e={requestUri:Hk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ta(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gk(t){const e=Ys(Xs(t)).link,n=e?Ys(Xs(e)).deep_link_id:null,r=Ys(Xs(t)).deep_link_id;return(r?Ys(Xs(r)).link:null)||r||n||e||t}class Kf{constructor(e){var n,r,i,s,o,l;const u=Ys(Xs(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,m=Kk((i=u.mode)!==null&&i!==void 0?i:null);Y(c&&h&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Gk(e);try{return new Kf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(e,n){return jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kf.parseLink(n);return Y(r,"argument-error"),jo._fromEmailAndCode(e,r.code,r.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends Vw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends ia{constructor(){super("facebook.com")}static credential(e){return li._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return li._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends ia{constructor(){super("github.com")}static credential(e){return li._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ia{constructor(){super("twitter.com")}static credential(e,n){return li._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e){return ra(t,"POST","/v1/accounts:signUp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nn._fromIdTokenResponse(e,r,i),o=Iy(r);return new ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Iy(r);return new ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Iy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tu(e,n,r,i)}}function Lw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tu._fromErrorAndOperation(t,s,e,r):s})}async function Yk(t,e,n=!1){const r=await is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ui._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(On(r));const i="reauthenticate";try{const s=await is(t,Lw(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Wf(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jw(t,e,n=!1){if(an(t.app))return Promise.reject(On(t));const r="signIn",i=await Lw(t,r,e),s=await ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Jk(t,e){return jw(gi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(t){const e=gi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Zk(t,e,n){if(an(t.app))return Promise.reject(On(t));const r=gi(t),o=await _h(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Qk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Mw(t),u}),l=await ui._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function eP(t,e,n){return an(t.app)?Promise.reject(On(t)):Jk(Ne(t),vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Mw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e){return Hn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ne(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await is(r,tP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function rP(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function iP(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function sP(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function oP(t){return Ne(t).signOut()}const nu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nu,"1"),this.storage.removeItem(nu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=1e3,lP=10;class Uw extends Fw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uw.type="LOCAL";const uP=Uw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw extends Fw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bw.type="SESSION";const zw=Bw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await cP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Gf("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return window}function hP(t){fn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function fP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mP(){return $w()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="firebaseLocalStorageDb",gP=1,ru="firebaseLocalStorage",qw="fbase_key";class sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fu(t,e){return t.transaction([ru],e?"readwrite":"readonly").objectStore(ru)}function yP(){const t=indexedDB.deleteDatabase(Ww);return new sa(t).toPromise()}function wh(){const t=indexedDB.open(Ww,gP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ru,{keyPath:qw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ru)?e(r):(r.close(),await yP(),e(await wh()))})})}async function xy(t,e,n){const r=Fu(t,!0).put({[qw]:e,value:n});return new sa(r).toPromise()}async function vP(t,e){const n=Fu(t,!1).get(e),r=await new sa(n).toPromise();return r===void 0?null:r.value}function Sy(t,e){const n=Fu(t,!0).delete(e);return new sa(n).toPromise()}const _P=800,wP=3;class Hw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $w()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mu._getInstance(mP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fP(),!this.activeServiceWorker)return;this.sender=new dP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wh();return await xy(e,nu,"1"),await Sy(e,nu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fu(i,!1).getAll();return new sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_P)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hw.type="LOCAL";const EP=Hw;new na(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t,e){return e?bn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends Hf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IP(t){return jw(t.auth,new Qf(t),t.bypassAuthState)}function xP(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Xk(n,new Qf(t),t.bypassAuthState)}async function SP(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Yk(n,new Qf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IP;case"linkViaPopup":case"linkViaRedirect":return SP;case"reauthViaPopup":case"reauthViaRedirect":return xP;default:Zt(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=new na(2e3,1e4);class Fi extends Kw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fi.currentPopupAction&&Fi.currentPopupAction.cancel(),Fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=Gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RP.get())};e()}}Fi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP="pendingRedirect",yl=new Map;class kP extends Kw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yl.get(this.auth._key());if(!e){try{const r=await PP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yl.set(this.auth._key(),e)}return this.bypassAuthState||yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PP(t,e){const n=bP(e),r=NP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CP(t,e){yl.set(t._key(),e)}function NP(t){return bn(t._redirectPersistence)}function bP(t){return gl(AP,t.config.apiKey,t.name)}async function DP(t,e,n=!1){if(an(t.app))return Promise.reject(On(t));const r=gi(t),i=TP(r,e),o=await new kP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=10*60*1e3;class VP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ry(e))}saveEventToCache(e){this.cachedEventUids.add(Ry(e)),this.lastProcessedEventTime=Date.now()}}function Ry(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FP=/^https?/;async function UP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jP(t);for(const n of e)try{if(BP(n))return}catch{}Zt(t,"unauthorized-domain")}function BP(t){const e=yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FP.test(n))return!1;if(MP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=new na(3e4,6e4);function Ay(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $P(t){return new Promise((e,n)=>{var r,i,s;function o(){Ay(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ay(),n(hn(t,"network-request-failed"))},timeout:zP.get()})}if(!((i=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=fn().gapi)===null||s===void 0)&&s.load)o();else{const l=Dk("iframefcb");return fn()[l]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},Dw(`${bk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw vl=null,e})}let vl=null;function WP(t){return vl=vl||$P(t),vl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=new na(5e3,15e3),HP="__/auth/iframe",KP="emulator/auth/iframe",GP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YP(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$f(e,KP):`https://${t.config.authDomain}/${HP}`,r={apiKey:e.apiKey,appName:t.name,v:mi},i=QP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ta(r).slice(1)}`}async function XP(t){const e=await WP(t),n=fn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:YP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),l=fn().setTimeout(()=>{s(o)},qP.get());function u(){fn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZP=500,eC=600,tC="_blank",nC="http://localhost";class ky{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rC(t,e,n,r=ZP,i=eC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},JP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=dt().toLowerCase();n&&(l=Rw(c)?tC:n),xw(c)&&(e=e||nC,u.scrollbars="yes");const h=Object.entries(u).reduce((g,[x,P])=>`${g}${x}=${P},`,"");if(Ik(c)&&l!=="_self")return iC(e||"",l),new ky(null);const m=window.open(e||"",l,h);Y(m,t,"popup-blocked");try{m.focus()}catch{}return new ky(m)}function iC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="__/auth/handler",oC="emulator/auth/handler",aC=encodeURIComponent("fac");async function Py(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mi,eventId:i};if(e instanceof Vw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",KR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof ia){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${aC}=${encodeURIComponent(u)}`:"";return`${lC(t)}?${ta(l).slice(1)}${c}`}function lC({config:t}){return t.emulator?$f(t,oC):`https://${t.authDomain}/${sC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="webStorageSupport";class uC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zw,this._completeRedirectFn=DP,this._overrideRedirectResult=CP}async _openPopup(e,n,r,i){var s;zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Py(e,n,r,yh(),i);return rC(e,o,Gf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Py(e,n,r,yh(),i);return hP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XP(e),r=new VP(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ad,{type:ad},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ad];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nw()||Sw()||qf()}}const cC=uC;var Cy="@firebase/auth",Ny="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fC(t){ai(new Rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bw(t)},c=new Pk(r,i,s,u);return Mk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ai(new Rr("auth-internal",e=>{const n=gi(e.getProvider("auth").getImmediate());return(r=>new dC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Cy,Ny,hC(t)),dn(Cy,Ny,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=5*60,mC=lw("authIdTokenMaxAge")||pC;let by=null;const gC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mC)return;const i=n==null?void 0:n.token;by!==i&&(by=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yC(t=Uf()){const e=Lu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jk(t,{popupRedirectResolver:cC,persistence:[EP,uP,zw]}),r=lw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gC(s.toString());iP(n,o,()=>o(n.currentUser)),rP(n,l=>o(l))}}const i=sw("auth");return i&&Fk(n,`http://${i}`),n}function vC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ck({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fC("Browser");var _C="firebase",wC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(_C,wC,"app");var Dy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,Qw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function R(){}R.prototype=v.prototype,E.D=v.prototype,E.prototype=new R,E.prototype.constructor=E,E.C=function(A,C,T){for(var _=Array(arguments.length-2),G=2;G<arguments.length;G++)_[G-2]=arguments[G];return v.prototype[C].apply(A,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,R){R||(R=0);var A=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)A[C]=v.charCodeAt(R++)|v.charCodeAt(R++)<<8|v.charCodeAt(R++)<<16|v.charCodeAt(R++)<<24;else for(C=0;16>C;++C)A[C]=v[R++]|v[R++]<<8|v[R++]<<16|v[R++]<<24;v=E.g[0],R=E.g[1],C=E.g[2];var T=E.g[3],_=v+(T^R&(C^T))+A[0]+3614090360&4294967295;v=R+(_<<7&4294967295|_>>>25),_=T+(C^v&(R^C))+A[1]+3905402710&4294967295,T=v+(_<<12&4294967295|_>>>20),_=C+(R^T&(v^R))+A[2]+606105819&4294967295,C=T+(_<<17&4294967295|_>>>15),_=R+(v^C&(T^v))+A[3]+3250441966&4294967295,R=C+(_<<22&4294967295|_>>>10),_=v+(T^R&(C^T))+A[4]+4118548399&4294967295,v=R+(_<<7&4294967295|_>>>25),_=T+(C^v&(R^C))+A[5]+1200080426&4294967295,T=v+(_<<12&4294967295|_>>>20),_=C+(R^T&(v^R))+A[6]+2821735955&4294967295,C=T+(_<<17&4294967295|_>>>15),_=R+(v^C&(T^v))+A[7]+4249261313&4294967295,R=C+(_<<22&4294967295|_>>>10),_=v+(T^R&(C^T))+A[8]+1770035416&4294967295,v=R+(_<<7&4294967295|_>>>25),_=T+(C^v&(R^C))+A[9]+2336552879&4294967295,T=v+(_<<12&4294967295|_>>>20),_=C+(R^T&(v^R))+A[10]+4294925233&4294967295,C=T+(_<<17&4294967295|_>>>15),_=R+(v^C&(T^v))+A[11]+2304563134&4294967295,R=C+(_<<22&4294967295|_>>>10),_=v+(T^R&(C^T))+A[12]+1804603682&4294967295,v=R+(_<<7&4294967295|_>>>25),_=T+(C^v&(R^C))+A[13]+4254626195&4294967295,T=v+(_<<12&4294967295|_>>>20),_=C+(R^T&(v^R))+A[14]+2792965006&4294967295,C=T+(_<<17&4294967295|_>>>15),_=R+(v^C&(T^v))+A[15]+1236535329&4294967295,R=C+(_<<22&4294967295|_>>>10),_=v+(C^T&(R^C))+A[1]+4129170786&4294967295,v=R+(_<<5&4294967295|_>>>27),_=T+(R^C&(v^R))+A[6]+3225465664&4294967295,T=v+(_<<9&4294967295|_>>>23),_=C+(v^R&(T^v))+A[11]+643717713&4294967295,C=T+(_<<14&4294967295|_>>>18),_=R+(T^v&(C^T))+A[0]+3921069994&4294967295,R=C+(_<<20&4294967295|_>>>12),_=v+(C^T&(R^C))+A[5]+3593408605&4294967295,v=R+(_<<5&4294967295|_>>>27),_=T+(R^C&(v^R))+A[10]+38016083&4294967295,T=v+(_<<9&4294967295|_>>>23),_=C+(v^R&(T^v))+A[15]+3634488961&4294967295,C=T+(_<<14&4294967295|_>>>18),_=R+(T^v&(C^T))+A[4]+3889429448&4294967295,R=C+(_<<20&4294967295|_>>>12),_=v+(C^T&(R^C))+A[9]+568446438&4294967295,v=R+(_<<5&4294967295|_>>>27),_=T+(R^C&(v^R))+A[14]+3275163606&4294967295,T=v+(_<<9&4294967295|_>>>23),_=C+(v^R&(T^v))+A[3]+4107603335&4294967295,C=T+(_<<14&4294967295|_>>>18),_=R+(T^v&(C^T))+A[8]+1163531501&4294967295,R=C+(_<<20&4294967295|_>>>12),_=v+(C^T&(R^C))+A[13]+2850285829&4294967295,v=R+(_<<5&4294967295|_>>>27),_=T+(R^C&(v^R))+A[2]+4243563512&4294967295,T=v+(_<<9&4294967295|_>>>23),_=C+(v^R&(T^v))+A[7]+1735328473&4294967295,C=T+(_<<14&4294967295|_>>>18),_=R+(T^v&(C^T))+A[12]+2368359562&4294967295,R=C+(_<<20&4294967295|_>>>12),_=v+(R^C^T)+A[5]+4294588738&4294967295,v=R+(_<<4&4294967295|_>>>28),_=T+(v^R^C)+A[8]+2272392833&4294967295,T=v+(_<<11&4294967295|_>>>21),_=C+(T^v^R)+A[11]+1839030562&4294967295,C=T+(_<<16&4294967295|_>>>16),_=R+(C^T^v)+A[14]+4259657740&4294967295,R=C+(_<<23&4294967295|_>>>9),_=v+(R^C^T)+A[1]+2763975236&4294967295,v=R+(_<<4&4294967295|_>>>28),_=T+(v^R^C)+A[4]+1272893353&4294967295,T=v+(_<<11&4294967295|_>>>21),_=C+(T^v^R)+A[7]+4139469664&4294967295,C=T+(_<<16&4294967295|_>>>16),_=R+(C^T^v)+A[10]+3200236656&4294967295,R=C+(_<<23&4294967295|_>>>9),_=v+(R^C^T)+A[13]+681279174&4294967295,v=R+(_<<4&4294967295|_>>>28),_=T+(v^R^C)+A[0]+3936430074&4294967295,T=v+(_<<11&4294967295|_>>>21),_=C+(T^v^R)+A[3]+3572445317&4294967295,C=T+(_<<16&4294967295|_>>>16),_=R+(C^T^v)+A[6]+76029189&4294967295,R=C+(_<<23&4294967295|_>>>9),_=v+(R^C^T)+A[9]+3654602809&4294967295,v=R+(_<<4&4294967295|_>>>28),_=T+(v^R^C)+A[12]+3873151461&4294967295,T=v+(_<<11&4294967295|_>>>21),_=C+(T^v^R)+A[15]+530742520&4294967295,C=T+(_<<16&4294967295|_>>>16),_=R+(C^T^v)+A[2]+3299628645&4294967295,R=C+(_<<23&4294967295|_>>>9),_=v+(C^(R|~T))+A[0]+4096336452&4294967295,v=R+(_<<6&4294967295|_>>>26),_=T+(R^(v|~C))+A[7]+1126891415&4294967295,T=v+(_<<10&4294967295|_>>>22),_=C+(v^(T|~R))+A[14]+2878612391&4294967295,C=T+(_<<15&4294967295|_>>>17),_=R+(T^(C|~v))+A[5]+4237533241&4294967295,R=C+(_<<21&4294967295|_>>>11),_=v+(C^(R|~T))+A[12]+1700485571&4294967295,v=R+(_<<6&4294967295|_>>>26),_=T+(R^(v|~C))+A[3]+2399980690&4294967295,T=v+(_<<10&4294967295|_>>>22),_=C+(v^(T|~R))+A[10]+4293915773&4294967295,C=T+(_<<15&4294967295|_>>>17),_=R+(T^(C|~v))+A[1]+2240044497&4294967295,R=C+(_<<21&4294967295|_>>>11),_=v+(C^(R|~T))+A[8]+1873313359&4294967295,v=R+(_<<6&4294967295|_>>>26),_=T+(R^(v|~C))+A[15]+4264355552&4294967295,T=v+(_<<10&4294967295|_>>>22),_=C+(v^(T|~R))+A[6]+2734768916&4294967295,C=T+(_<<15&4294967295|_>>>17),_=R+(T^(C|~v))+A[13]+1309151649&4294967295,R=C+(_<<21&4294967295|_>>>11),_=v+(C^(R|~T))+A[4]+4149444226&4294967295,v=R+(_<<6&4294967295|_>>>26),_=T+(R^(v|~C))+A[11]+3174756917&4294967295,T=v+(_<<10&4294967295|_>>>22),_=C+(v^(T|~R))+A[2]+718787259&4294967295,C=T+(_<<15&4294967295|_>>>17),_=R+(T^(C|~v))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(C+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+T&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var R=v-this.blockSize,A=this.B,C=this.h,T=0;T<v;){if(C==0)for(;T<=R;)i(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<v;)if(A[C++]=E.charCodeAt(T++),C==this.blockSize){i(this,A),C=0;break}}else for(;T<v;)if(A[C++]=E[T++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var R=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=R&255,R/=256;for(this.u(E),E=Array(16),v=R=0;4>v;++v)for(var A=0;32>A;A+=8)E[R++]=this.g[v]>>>A&255;return E};function s(E,v){var R=l;return Object.prototype.hasOwnProperty.call(R,E)?R[E]:R[E]=v(E)}function o(E,v){this.h=v;for(var R=[],A=!0,C=E.length-1;0<=C;C--){var T=E[C]|0;A&&T==v||(R[C]=T,A=!1)}this.g=R}var l={};function u(E){return-128<=E&&128>E?s(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return k(c(-E));for(var v=[],R=1,A=0;E>=R;A++)v[A]=E/R|0,R*=4294967296;return new o(v,0)}function h(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return k(h(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=c(Math.pow(v,8)),A=m,C=0;C<E.length;C+=8){var T=Math.min(8,E.length-C),_=parseInt(E.substring(C,C+T),v);8>T?(T=c(Math.pow(v,T)),A=A.j(T).add(c(_))):(A=A.j(R),A=A.add(c(_)))}return A}var m=u(0),g=u(1),x=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-k(this).m();for(var E=0,v=1,R=0;R<this.g.length;R++){var A=this.i(R);E+=(0<=A?A:4294967296+A)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+k(this).toString(E);for(var v=c(Math.pow(E,6)),R=this,A="";;){var C=D(R,v).g;R=I(R,C.j(v));var T=((0<R.g.length?R.g[0]:R.h)>>>0).toString(E);if(R=C,P(R))return T+A;for(;6>T.length;)T="0"+T;A=T+A}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=I(this,E),N(E)?-1:P(E)?0:1};function k(E){for(var v=E.g.length,R=[],A=0;A<v;A++)R[A]=~E.g[A];return new o(R,~E.h).add(g)}t.abs=function(){return N(this)?k(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),R=[],A=0,C=0;C<=v;C++){var T=A+(this.i(C)&65535)+(E.i(C)&65535),_=(T>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);A=_>>>16,T&=65535,_&=65535,R[C]=_<<16|T}return new o(R,R[R.length-1]&-2147483648?-1:0)};function I(E,v){return E.add(k(v))}t.j=function(E){if(P(this)||P(E))return m;if(N(this))return N(E)?k(this).j(k(E)):k(k(this).j(E));if(N(E))return k(this.j(k(E)));if(0>this.l(x)&&0>E.l(x))return c(this.m()*E.m());for(var v=this.g.length+E.g.length,R=[],A=0;A<2*v;A++)R[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<E.g.length;C++){var T=this.i(A)>>>16,_=this.i(A)&65535,G=E.i(C)>>>16,le=E.i(C)&65535;R[2*A+2*C]+=_*le,w(R,2*A+2*C),R[2*A+2*C+1]+=T*le,w(R,2*A+2*C+1),R[2*A+2*C+1]+=_*G,w(R,2*A+2*C+1),R[2*A+2*C+2]+=T*G,w(R,2*A+2*C+2)}for(A=0;A<v;A++)R[A]=R[2*A+1]<<16|R[2*A];for(A=v;A<2*v;A++)R[A]=0;return new o(R,0)};function w(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function S(E,v){this.g=E,this.h=v}function D(E,v){if(P(v))throw Error("division by zero");if(P(E))return new S(m,m);if(N(E))return v=D(k(E),v),new S(k(v.g),k(v.h));if(N(v))return v=D(E,k(v)),new S(k(v.g),v.h);if(30<E.g.length){if(N(E)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var R=g,A=v;0>=A.l(E);)R=M(R),A=M(A);var C=U(R,1),T=U(A,1);for(A=U(A,2),R=U(R,2);!P(A);){var _=T.add(A);0>=_.l(E)&&(C=C.add(R),T=_),A=U(A,1),R=U(R,1)}return v=I(E,C.j(v)),new S(C,v)}for(C=m;0<=E.l(v);){for(R=Math.max(1,Math.floor(E.m()/v.m())),A=Math.ceil(Math.log(R)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),T=c(R),_=T.j(v);N(_)||0<_.l(E);)R-=A,T=c(R),_=T.j(v);P(T)&&(T=g),C=C.add(T),E=I(E,_)}return new S(C,E)}t.A=function(E){return D(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),R=[],A=0;A<v;A++)R[A]=this.i(A)&E.i(A);return new o(R,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),R=[],A=0;A<v;A++)R[A]=this.i(A)|E.i(A);return new o(R,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),R=[],A=0;A<v;A++)R[A]=this.i(A)^E.i(A);return new o(R,this.h^E.h)};function M(E){for(var v=E.g.length+1,R=[],A=0;A<v;A++)R[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(R,E.h)}function U(E,v){var R=v>>5;v%=32;for(var A=E.g.length-R,C=[],T=0;T<A;T++)C[T]=0<v?E.i(T+R)>>>v|E.i(T+R+1)<<32-v:E.i(T+R);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Qw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Zr=o}).apply(typeof Dy<"u"?Dy:typeof self<"u"?self:typeof window<"u"?window:{});var Xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yw,Js,Xw,_l,Eh,Jw,Zw,eE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xa=="object"&&Xa];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var b=a[y];if(!(b in f))break e;f=f[b]}a=a[a.length-1],y=f[a],d=d(y),d!=y&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var f=0,y=!1,b={next:function(){if(!y&&f<a.length){var V=f++;return{value:d(V,a[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function m(a,d,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,y),a.apply(d,b)}}return function(){return a.apply(d,arguments)}}function g(a,d,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,g.apply(null,arguments)}function x(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function P(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,b,V){for(var z=Array(arguments.length-2),he=2;he<arguments.length;he++)z[he-2]=arguments[he];return d.prototype[b].apply(y,z)}}function N(a){const d=a.length;if(0<d){const f=Array(d);for(let y=0;y<d;y++)f[y]=a[y];return f}return[]}function k(a,d){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const b=a.length||0,V=y.length||0;a.length=b+V;for(let z=0;z<V;z++)a[b+z]=y[z]}else a.push(y)}}class I{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(a,d,f){for(const y in a)d.call(f,a[y],y,a)}function E(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function v(a){const d={};for(const f in a)d[f]=a[f];return d}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,d){let f,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(f in y)a[f]=y[f];for(let V=0;V<R.length;V++)f=R[V],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function C(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function T(a){l.setTimeout(()=>{throw a},0)}function _(){var a=$;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class G{constructor(){this.h=this.g=null}add(d,f){const y=le.get();y.set(d,f),this.h?this.h.next=y:this.g=y,this.h=y}}var le=new I(()=>new be,a=>a.reset());class be{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,B=!1,$=new G,Q=()=>{const a=l.Promise.resolve(void 0);pe=()=>{a.then(we)}};var we=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(f){T(f)}var d=le;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}B=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Ot=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function Bt(a,d){if(me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(M){e:{try{D(d.nodeName);var b=!0;break e}catch{}b=!1}b||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:wn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Bt.aa.h.call(this)}}P(Bt,me);var wn={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),NT=0;function bT(a,d,f,y,b){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!y,this.ha=b,this.key=++NT,this.da=this.fa=!1}function pa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ma(a){this.src=a,this.g={},this.h=0}ma.prototype.add=function(a,d,f,y,b){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var z=oc(a,d,y,b);return-1<z?(d=a[z],f||(d.fa=!1)):(d=new bT(d,this.src,V,!!y,b),d.fa=f,a.push(d)),d};function sc(a,d){var f=d.type;if(f in a.g){var y=a.g[f],b=Array.prototype.indexOf.call(y,d,void 0),V;(V=0<=b)&&Array.prototype.splice.call(y,b,1),V&&(pa(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function oc(a,d,f,y){for(var b=0;b<a.length;++b){var V=a[b];if(!V.da&&V.listener==d&&V.capture==!!f&&V.ha==y)return b}return-1}var ac="closure_lm_"+(1e6*Math.random()|0),lc={};function Up(a,d,f,y,b){if(Array.isArray(d)){for(var V=0;V<d.length;V++)Up(a,d[V],f,y,b);return null}return f=$p(f),a&&a[En]?a.K(d,f,c(y)?!!y.capture:!1,b):DT(a,d,f,!1,y,b)}function DT(a,d,f,y,b,V){if(!d)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,he=cc(a);if(he||(a[ac]=he=new ma(a)),f=he.add(d,f,y,z,V),f.proxy)return f;if(y=OT(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)Ot||(b=z),b===void 0&&(b=!1),a.addEventListener(d.toString(),y,b);else if(a.attachEvent)a.attachEvent(zp(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function OT(){function a(f){return d.call(a.src,a.listener,f)}const d=VT;return a}function Bp(a,d,f,y,b){if(Array.isArray(d))for(var V=0;V<d.length;V++)Bp(a,d[V],f,y,b);else y=c(y)?!!y.capture:!!y,f=$p(f),a&&a[En]?(a=a.i,d=String(d).toString(),d in a.g&&(V=a.g[d],f=oc(V,f,y,b),-1<f&&(pa(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[d],a.h--)))):a&&(a=cc(a))&&(d=a.g[d.toString()],a=-1,d&&(a=oc(d,f,y,b)),(f=-1<a?d[a]:null)&&uc(f))}function uc(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[En])sc(d.i,a);else{var f=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(f,y,a.capture):d.detachEvent?d.detachEvent(zp(f),y):d.addListener&&d.removeListener&&d.removeListener(y),(f=cc(d))?(sc(f,a),f.h==0&&(f.src=null,d[ac]=null)):pa(a)}}}function zp(a){return a in lc?lc[a]:lc[a]="on"+a}function VT(a,d){if(a.da)a=!0;else{d=new Bt(d,this);var f=a.listener,y=a.ha||a.src;a.fa&&uc(a),a=f.call(y,d)}return a}function cc(a){return a=a[ac],a instanceof ma?a:null}var dc="__closure_events_fn_"+(1e9*Math.random()>>>0);function $p(a){return typeof a=="function"?a:(a[dc]||(a[dc]=function(d){return a.handleEvent(d)}),a[dc])}function Ze(){ue.call(this),this.i=new ma(this),this.M=this,this.F=null}P(Ze,ue),Ze.prototype[En]=!0,Ze.prototype.removeEventListener=function(a,d,f,y){Bp(this,a,d,f,y)};function ht(a,d){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new me(d,a);else if(d instanceof me)d.target=d.target||a;else{var b=d;d=new me(y,a),A(d,b)}if(b=!0,f)for(var V=f.length-1;0<=V;V--){var z=d.g=f[V];b=ga(z,y,!0,d)&&b}if(z=d.g=a,b=ga(z,y,!0,d)&&b,b=ga(z,y,!1,d)&&b,f)for(V=0;V<f.length;V++)z=d.g=f[V],b=ga(z,y,!1,d)&&b}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],y=0;y<f.length;y++)pa(f[y]);delete a.g[d],a.h--}}this.F=null},Ze.prototype.K=function(a,d,f,y){return this.i.add(String(a),d,!1,f,y)},Ze.prototype.L=function(a,d,f,y){return this.i.add(String(a),d,!0,f,y)};function ga(a,d,f,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var b=!0,V=0;V<d.length;++V){var z=d[V];if(z&&!z.da&&z.capture==f){var he=z.listener,We=z.ha||z.src;z.fa&&sc(a.i,z),b=he.call(We,y)!==!1&&b}}return b&&!y.defaultPrevented}function Wp(a,d,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function qp(a){a.g=Wp(()=>{a.g=null,a.i&&(a.i=!1,qp(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class LT extends ue{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:qp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Is(a){ue.call(this),this.h=a,this.g={}}P(Is,ue);var Hp=[];function Kp(a){U(a.g,function(d,f){this.g.hasOwnProperty(f)&&uc(d)},a),a.g={}}Is.prototype.N=function(){Is.aa.N.call(this),Kp(this)},Is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hc=l.JSON.stringify,jT=l.JSON.parse,MT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function fc(){}fc.prototype.h=null;function Gp(a){return a.h||(a.h=a.i())}function Qp(){}var xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pc(){me.call(this,"d")}P(pc,me);function mc(){me.call(this,"c")}P(mc,me);var Ur={},Yp=null;function ya(){return Yp=Yp||new Ze}Ur.La="serverreachability";function Xp(a){me.call(this,Ur.La,a)}P(Xp,me);function Ss(a){const d=ya();ht(d,new Xp(d))}Ur.STAT_EVENT="statevent";function Jp(a,d){me.call(this,Ur.STAT_EVENT,a),this.stat=d}P(Jp,me);function ft(a){const d=ya();ht(d,new Jp(d,a))}Ur.Ma="timingevent";function Zp(a,d){me.call(this,Ur.Ma,a),this.size=d}P(Zp,me);function Rs(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function FT(a,d,f,y,b,V){a.info(function(){if(a.g)if(V)for(var z="",he=V.split("&"),We=0;We<he.length;We++){var oe=he[We].split("=");if(1<oe.length){var et=oe[0];oe=oe[1];var tt=et.split("_");z=2<=tt.length&&tt[1]=="type"?z+(et+"="+oe+"&"):z+(et+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+d+`
`+f+`
`+z})}function UT(a,d,f,y,b,V,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+d+`
`+f+`
`+V+" "+z})}function _i(a,d,f,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+zT(a,f)+(y?" "+y:"")})}function BT(a,d){a.info(function(){return"TIMEOUT: "+d})}As.prototype.info=function(){};function zT(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var b=y[1];if(Array.isArray(b)&&!(1>b.length)){var V=b[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return hc(f)}catch{return d}}var va={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},em={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gc;function _a(){}P(_a,fc),_a.prototype.g=function(){return new XMLHttpRequest},_a.prototype.i=function(){return{}},gc=new _a;function Kn(a,d,f,y){this.j=a,this.i=d,this.l=f,this.R=y||1,this.U=new Is(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tm}function tm(){this.i=null,this.g="",this.h=!1}var nm={},yc={};function vc(a,d,f){a.L=1,a.v=Ia(Tn(d)),a.m=f,a.P=!0,rm(a,null)}function rm(a,d){a.F=Date.now(),wa(a),a.A=Tn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),ym(f.i,"t",y),a.C=0,f=a.j.J,a.h=new tm,a.g=Vm(a.j,f?d:null,!a.m),0<a.O&&(a.M=new LT(g(a.Y,a,a.g),a.O)),d=a.U,f=a.g,y=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Hp[0]=b.toString()),b=Hp);for(var V=0;V<b.length;V++){var z=Up(f,b[V],y||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ss(),FT(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const d=this.M;d&&In(a)==3?d.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const tt=In(this.g);var d=this.g.Ba();const Ti=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||xm(this.g)))){this.J||tt!=4||d==7||(d==8||0>=Ti?Ss(3):Ss(2)),_c(this);var f=this.g.Z();this.X=f;t:if(im(this)){var y=xm(this.g);a="";var b=y.length,V=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),ks(this);var z="";break t}this.h.i=new l.TextDecoder}for(d=0;d<b;d++)this.h.h=!0,a+=this.h.i.decode(y[d],{stream:!(V&&d==b-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,UT(this.i,this.u,this.A,this.l,this.R,tt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var he,We=this.g;if((he=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(he)){var oe=he;break t}}oe=null}if(f=oe)_i(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wc(this,f);else{this.o=!1,this.s=3,ft(12),Br(this),ks(this);break e}}if(this.P){f=!0;let zt;for(;!this.J&&this.C<z.length;)if(zt=$T(this,z),zt==yc){tt==4&&(this.s=4,ft(14),f=!1),_i(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==nm){this.s=4,ft(15),_i(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else _i(this.i,this.l,zt,null),wc(this,zt);if(im(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||z.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)_i(this.i,this.l,z,"[Invalid Chunked Response]"),Br(this),ks(this);else if(0<z.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Rc(et),et.M=!0,ft(11))}}else _i(this.i,this.l,z,null),wc(this,z);tt==4&&Br(this),this.o&&!this.J&&(tt==4?Nm(this.j,this):(this.o=!1,wa(this)))}else oI(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Br(this),ks(this)}}}catch{}finally{}};function im(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function $T(a,d){var f=a.C,y=d.indexOf(`
`,f);return y==-1?yc:(f=Number(d.substring(f,y)),isNaN(f)?nm:(y+=1,y+f>d.length?yc:(d=d.slice(y,y+f),a.C=y+f,d)))}Kn.prototype.cancel=function(){this.J=!0,Br(this)};function wa(a){a.S=Date.now()+a.I,sm(a,a.I)}function sm(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Rs(g(a.ba,a),d)}function _c(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(BT(this.i,this.A),this.L!=2&&(Ss(),ft(17)),Br(this),this.s=2,ks(this)):sm(this,this.S-a)};function ks(a){a.j.G==0||a.J||Nm(a.j,a)}function Br(a){_c(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Kp(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function wc(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||Ec(f.h,a))){if(!a.K&&Ec(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Pa(f),Aa(f);else break e;Sc(f),ft(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=Rs(g(f.Za,f),6e3));if(1>=lm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else $r(f,11)}else if((a.K||f.g==a)&&Pa(f),!w(d))for(b=f.Da.g.parse(d),d=0;d<b.length;d++){let oe=b[d];if(f.T=oe[0],oe=oe[1],f.G==2)if(oe[0]=="c"){f.K=oe[1],f.ia=oe[2];const et=oe[3];et!=null&&(f.la=et,f.j.info("VER="+f.la));const tt=oe[4];tt!=null&&(f.Aa=tt,f.j.info("SVER="+f.Aa));const Ti=oe[5];Ti!=null&&typeof Ti=="number"&&0<Ti&&(y=1.5*Ti,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const zt=a.g;if(zt){const Na=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Na){var V=y.h;V.g||Na.indexOf("spdy")==-1&&Na.indexOf("quic")==-1&&Na.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Tc(V,V.h),V.h=null))}if(y.D){const Ac=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ac&&(y.ya=Ac,ge(y.I,y.D,Ac))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var z=a;if(y.qa=Om(y,y.J?y.ia:null,y.W),z.K){um(y.h,z);var he=z,We=y.L;We&&(he.I=We),he.B&&(_c(he),wa(he)),y.g=z}else Pm(y);0<f.i.length&&ka(f)}else oe[0]!="stop"&&oe[0]!="close"||$r(f,7);else f.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?$r(f,7):xc(f):oe[0]!="noop"&&f.l&&f.l.ta(oe),f.v=0)}}Ss(4)}catch{}}var WT=class{constructor(a,d){this.g=a,this.map=d}};function om(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function am(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function lm(a){return a.h?1:a.g?a.g.size:0}function Ec(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Tc(a,d){a.g?a.g.add(d):a.h=d}function um(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}om.prototype.cancel=function(){if(this.i=cm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function cm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return N(a.i)}function qT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],f=a.length,y=0;y<f;y++)d.push(a[y]);return d}d=[],f=0;for(y in a)d[f++]=a[y];return d}function HT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const y in a)d[f++]=y;return d}}}function dm(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=HT(a),y=qT(a),b=y.length,V=0;V<b;V++)d.call(void 0,y[V],f&&f[V],a)}var hm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KT(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),b=null;if(0<=y){var V=a[f].substring(0,y);b=a[f].substring(y+1)}else V=a[f];d(V,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof zr){this.h=a.h,Ea(this,a.j),this.o=a.o,this.g=a.g,Ta(this,a.s),this.l=a.l;var d=a.i,f=new Ns;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),fm(this,f),this.m=a.m}else a&&(d=String(a).match(hm))?(this.h=!1,Ea(this,d[1]||"",!0),this.o=Ps(d[2]||""),this.g=Ps(d[3]||"",!0),Ta(this,d[4]),this.l=Ps(d[5]||"",!0),fm(this,d[6]||"",!0),this.m=Ps(d[7]||"")):(this.h=!1,this.i=new Ns(null,this.h))}zr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Cs(d,pm,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Cs(d,pm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Cs(f,f.charAt(0)=="/"?YT:QT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Cs(f,JT)),a.join("")};function Tn(a){return new zr(a)}function Ea(a,d,f){a.j=f?Ps(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ta(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function fm(a,d,f){d instanceof Ns?(a.i=d,ZT(a.i,a.h)):(f||(d=Cs(d,XT)),a.i=new Ns(d,a.h))}function ge(a,d,f){a.i.set(d,f)}function Ia(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ps(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Cs(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,GT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function GT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pm=/[#\/\?@]/g,QT=/[#\?:]/g,YT=/[#\?]/g,XT=/[#\?@]/g,JT=/#/g;function Ns(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&KT(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=Ns.prototype,t.add=function(a,d){Gn(this),this.i=null,a=wi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function mm(a,d){Gn(a),d=wi(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function gm(a,d){return Gn(a),d=wi(a,d),a.g.has(d)}t.forEach=function(a,d){Gn(this),this.g.forEach(function(f,y){f.forEach(function(b){a.call(d,b,y,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let y=0;y<d.length;y++){const b=a[y];for(let V=0;V<b.length;V++)f.push(d[y])}return f},t.V=function(a){Gn(this);let d=[];if(typeof a=="string")gm(this,a)&&(d=d.concat(this.g.get(wi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return Gn(this),this.i=null,a=wi(this,a),gm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function ym(a,d,f){mm(a,d),0<f.length&&(a.i=null,a.g.set(wi(a,d),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var y=d[f];const V=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var b=V;z[y]!==""&&(b+="="+encodeURIComponent(String(z[y]))),a.push(b)}}return this.i=a.join("&")};function wi(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function ZT(a,d){d&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(f,y){var b=y.toLowerCase();y!=b&&(mm(this,y),ym(this,b,f))},a)),a.j=d}function eI(a,d){const f=new As;if(l.Image){const y=new Image;y.onload=x(Qn,f,"TestLoadImage: loaded",!0,d,y),y.onerror=x(Qn,f,"TestLoadImage: error",!1,d,y),y.onabort=x(Qn,f,"TestLoadImage: abort",!1,d,y),y.ontimeout=x(Qn,f,"TestLoadImage: timeout",!1,d,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function tI(a,d){const f=new As,y=new AbortController,b=setTimeout(()=>{y.abort(),Qn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(b),V.ok?Qn(f,"TestPingServer: ok",!0,d):Qn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),Qn(f,"TestPingServer: error",!1,d)})}function Qn(a,d,f,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(f)}catch{}}function nI(){this.g=new MT}function rI(a,d,f){const y=f||"";try{dm(a,function(b,V){let z=b;c(b)&&(z=hc(b)),d.push(y+V+"="+encodeURIComponent(z))})}catch(b){throw d.push(y+"type="+encodeURIComponent("_badmap")),b}}function xa(a){this.l=a.Ub||null,this.j=a.eb||!1}P(xa,fc),xa.prototype.g=function(){return new Sa(this.l,this.j)},xa.prototype.i=function(a){return function(){return a}}({});function Sa(a,d){Ze.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Sa,Ze),t=Sa.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ds(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function vm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?bs(this):Ds(this),this.readyState==3&&vm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,bs(this))},t.Qa=function(a){this.g&&(this.response=a,bs(this))},t.ga=function(){this.g&&bs(this)};function bs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ds(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function Ds(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _m(a){let d="";return U(a,function(f,y){d+=y,d+=":",d+=f,d+=`\r
`}),d}function Ic(a,d,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=_m(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ge(a,d,f))}function Re(a){Ze.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Re,Ze);var iI=/^https?$/i,sI=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gc.g(),this.v=this.o?Gp(this.o):Gp(gc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(V){wm(this,V);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)f.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())f.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(sI,d,void 0))||y||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of f)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Im(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){wm(this,V)}};function wm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Em(a),Ra(a)}function Em(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ht(this,"complete"),ht(this,"abort"),Ra(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ra(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Tm(this):this.bb())},t.bb=function(){Tm(this)};function Tm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)Wp(a.Ea,0,a);else if(ht(a,"readystatechange"),In(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var y;if(y=z===0){var b=String(a.D).match(hm)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),y=!iI.test(b?b.toLowerCase():"")}f=y}if(f)ht(a,"complete"),ht(a,"success");else{a.m=6;try{var V=2<In(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Em(a)}}finally{Ra(a)}}}}function Ra(a,d){if(a.g){Im(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||ht(a,"ready");try{f.onreadystatechange=y}catch{}}}function Im(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),jT(d)}};function xm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function oI(a){const d={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var f=C(a[y]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=d[b]||[];d[b]=V,V.push(f)}E(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Os(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Sm(a){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Os("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Os("baseRetryDelayMs",5e3,a),this.cb=Os("retryDelaySeedMs",1e4,a),this.Wa=Os("forwardChannelMaxRetries",2,a),this.wa=Os("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new om(a&&a.concurrentRequestLimit),this.Da=new nI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sm.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,y){ft(0),this.W=a,this.H=d||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Om(this,null,this.W),ka(this)};function xc(a){if(Rm(a),a.G==3){var d=a.U++,f=Tn(a.I);if(ge(f,"SID",a.K),ge(f,"RID",d),ge(f,"TYPE","terminate"),Vs(a,f),d=new Kn(a,a.j,d),d.L=2,d.v=Ia(Tn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=Vm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),wa(d)}Dm(a)}function Aa(a){a.g&&(Rc(a),a.g.cancel(),a.g=null)}function Rm(a){Aa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Pa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ka(a){if(!am(a.h)&&!a.s){a.s=!0;var d=a.Ga;pe||Q(),B||(pe(),B=!0),$.add(d,a),a.B=0}}function aI(a,d){return lm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Rs(g(a.Ga,a,d),bm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Kn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(b.H=V,V=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=km(this,b,d),f=Tn(this.I),ge(f,"RID",a),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),Vs(this,f),V&&(this.O?d="headers="+encodeURIComponent(String(_m(V)))+"&"+d:this.m&&Ic(f,this.m,V)),Tc(this.h,b),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",d),ge(f,"SID","null"),b.T=!0,vc(b,f,null)):vc(b,f,d),this.G=2}}else this.G==3&&(a?Am(this,a):this.i.length==0||am(this.h)||Am(this))};function Am(a,d){var f;d?f=d.l:f=a.U++;const y=Tn(a.I);ge(y,"SID",a.K),ge(y,"RID",f),ge(y,"AID",a.T),Vs(a,y),a.m&&a.o&&Ic(y,a.m,a.o),f=new Kn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=km(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Tc(a.h,f),vc(f,y,d)}function Vs(a,d){a.H&&U(a.H,function(f,y){ge(d,y,f)}),a.l&&dm({},function(f,y){ge(d,y,f)})}function km(a,d,f){f=Math.min(a.i.length,f);var y=a.l?g(a.l.Na,a.l,a):null;e:{var b=a.i;let V=-1;for(;;){const z=["count="+f];V==-1?0<f?(V=b[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let he=!0;for(let We=0;We<f;We++){let oe=b[We].g;const et=b[We].map;if(oe-=V,0>oe)V=Math.max(0,b[We].g-100),he=!1;else try{rI(et,z,"req"+oe+"_")}catch{y&&y(et)}}if(he){y=z.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,y}function Pm(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;pe||Q(),B||(pe(),B=!0),$.add(d,a),a.v=0}}function Sc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Rs(g(a.Fa,a),bm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Cm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Rs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Aa(this),Cm(this))};function Rc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Cm(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Tn(a.qa);ge(d,"RID","rpc"),ge(d,"SID",a.K),ge(d,"AID",a.T),ge(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(d,"TO",a.ja),ge(d,"TYPE","xmlhttp"),Vs(a,d),a.m&&a.o&&Ic(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ia(Tn(d)),f.m=null,f.P=!0,rm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Aa(this),Sc(this),ft(19))};function Pa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Nm(a,d){var f=null;if(a.g==d){Pa(a),Rc(a),a.g=null;var y=2}else if(Ec(a.h,d))f=d.D,um(a.h,d),y=1;else return;if(a.G!=0){if(d.o)if(y==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var b=a.B;y=ya(),ht(y,new Zp(y,f)),ka(a)}else Pm(a);else if(b=d.s,b==3||b==0&&0<d.X||!(y==1&&aI(a,d)||y==2&&Sc(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),b){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function bm(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function $r(a,d){if(a.j.info("Error code "+d),d==2){var f=g(a.fb,a),y=a.Xa;const b=!y;y=new zr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ea(y,"https"),Ia(y),b?eI(y.toString(),f):tI(y.toString(),f)}else ft(2);a.G=0,a.l&&a.l.sa(d),Dm(a),Rm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Dm(a){if(a.G=0,a.ka=[],a.l){const d=cm(a.h);(d.length!=0||a.i.length!=0)&&(k(a.ka,d),k(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Om(a,d,f){var y=f instanceof zr?Tn(f):new zr(f);if(y.g!="")d&&(y.g=d+"."+y.g),Ta(y,y.s);else{var b=l.location;y=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;var V=new zr(null);y&&Ea(V,y),d&&(V.g=d),b&&Ta(V,b),f&&(V.l=f),y=V}return f=a.D,d=a.ya,f&&d&&ge(y,f,d),ge(y,"VER",a.la),Vs(a,y),y}function Vm(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Re(new xa({eb:f})):new Re(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lm(){}t=Lm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ca(){}Ca.prototype.g=function(a,d){return new St(a,d)};function St(a,d){Ze.call(this),this.g=new Sm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!w(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ei(this)}P(St,Ze),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){xc(this.g)},St.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=hc(a),a=f);d.i.push(new WT(d.Ya++,a)),d.G==3&&ka(d)},St.prototype.N=function(){this.g.l=null,delete this.j,xc(this.g),delete this.g,St.aa.N.call(this)};function jm(a){pc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}P(jm,pc);function Mm(){mc.call(this),this.status=1}P(Mm,mc);function Ei(a){this.g=a}P(Ei,Lm),Ei.prototype.ua=function(){ht(this.g,"a")},Ei.prototype.ta=function(a){ht(this.g,new jm(a))},Ei.prototype.sa=function(a){ht(this.g,new Mm)},Ei.prototype.ra=function(){ht(this.g,"b")},Ca.prototype.createWebChannel=Ca.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,eE=function(){return new Ca},Zw=function(){return ya()},Jw=Ur,Eh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},va.NO_ERROR=0,va.TIMEOUT=8,va.HTTP_ERROR=6,_l=va,em.COMPLETE="complete",Xw=em,Qp.EventType=xs,xs.OPEN="a",xs.CLOSE="b",xs.ERROR="c",xs.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,Js=Qp,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,Yw=Re}).apply(typeof Xa<"u"?Xa:typeof self<"u"?self:typeof window<"u"?window:{});const Oy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Mf("@firebase/firestore");function Ws(){return ci.logLevel}function H(t,...e){if(ci.logLevel<=ne.DEBUG){const n=e.map(Yf);ci.debug(`Firestore (${_s}): ${t}`,...n)}}function $n(t,...e){if(ci.logLevel<=ne.ERROR){const n=e.map(Yf);ci.error(`Firestore (${_s}): ${t}`,...n)}}function ss(t,...e){if(ci.logLevel<=ne.WARN){const n=e.map(Yf);ci.warn(`Firestore (${_s}): ${t}`,...n)}}function Yf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function de(t,e){t||X()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class TC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IC{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new tE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new st(e)}}class xC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){de(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.R=n.token,new RC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function os(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Fe(0,0))}static max(){return new J(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Mo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Mo{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const PC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Mo{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return PC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ve.fromString(e))}static fromName(e){return new K(ve.fromString(e).popFirst(5))}static empty(){return new K(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ve(e.slice()))}}function CC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Ar(i,K.empty(),e)}function NC(t){return new Ar(t.readTime,t.key,-1)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(J.min(),K.empty(),-1)}static max(){return new Ar(J.max(),K.empty(),-1)}}function bC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==DC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++l,l===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function VC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function aa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xf.oe=-1;function Uu(t){return t==null}function iu(t){return t===0&&1/t==-1/0}function LC(t){return typeof t=="number"&&Number.isInteger(t)&&!iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ja(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ja(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ja(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ja(this.root,e,this.comparator,!0)}}class Ja{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ly(this.data.getIterator())}getIteratorFrom(e){return new Ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new kt([])}unionWith(e){let n=new Ye(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iE("Invalid base64 string: "+s):s}}(e);return new Je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const jC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(de(!!t),typeof t=="string"){let e=0;const n=jC.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function di(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zf(t){const e=t.mapValue.fields.__previous_value__;return Jf(e)?Zf(e):e}function Fo(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Uo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Uo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Uo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={mapValue:{}};function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jf(t)?4:UC(t)?9007199254740991:FC(t)?10:11:X()}function gn(t,e){if(t===e)return!0;const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fo(t).isEqual(Fo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),l=kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return di(i.bytesValue).isEqual(di(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),l=ke(s.doubleValue);return o===l?iu(o)===iu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Vy(o)!==Vy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!gn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Bo(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function as(t,e){if(t===e)return 0;const n=hi(t),r=hi(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ke(s.integerValue||s.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return jy(t.timestampValue,e.timestampValue);case 4:return jy(Fo(t),Fo(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=di(s),u=di(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=ae(l[c],u[c]);if(h!==0)return h}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(ke(s.latitude),ke(o.latitude));return l!==0?l:ae(ke(s.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return My(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,h;const m=s.fields||{},g=o.fields||{},x=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=(u=g.value)===null||u===void 0?void 0:u.arrayValue,N=ae(((c=x==null?void 0:x.values)===null||c===void 0?void 0:c.length)||0,((h=P==null?void 0:P.values)===null||h===void 0?void 0:h.length)||0);return N!==0?N:My(x,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Za.mapValue&&o===Za.mapValue)return 0;if(s===Za.mapValue)return 1;if(o===Za.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let m=0;m<u.length&&m<h.length;++m){const g=ae(u[m],h[m]);if(g!==0)return g;const x=as(l[u[m]],c[h[m]]);if(x!==0)return x}return ae(u.length,h.length)}(t.mapValue,e.mapValue);default:throw X()}}function jy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=kr(t),r=kr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function My(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=as(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function ls(t){return Th(t)}function Th(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return di(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Th(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Th(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function Fy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ih(t){return!!t&&"integerValue"in t}function ep(t){return!!t&&"arrayValue"in t}function Uy(t){return!!t&&"nullValue"in t}function By(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wl(t){return!!t&&"mapValue"in t}function FC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function fo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fo(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=fo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){yi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(fo(this.value))}}function sE(t){const e=[];return yi(t.fields,(n,r)=>{const i=new Ge([n]);if(wl(r)){const s=sE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,J.min(),J.min(),J.min(),wt.empty(),0)}static newFoundDocument(e,n,r,i){return new at(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new at(e,2,n,J.min(),J.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,J.min(),J.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n){this.position=e,this.inclusive=n}}function zy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=as(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $y(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n="asc"){this.field=e,this.dir=n}}function BC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{}class Ve extends oE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $C(e,n,r):n==="array-contains"?new HC(e,r):n==="in"?new KC(e,r):n==="not-in"?new GC(e,r):n==="array-contains-any"?new QC(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WC(e,r):new qC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(as(n,this.value)):n!==null&&hi(this.value)===hi(n)&&this.matchesComparison(as(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends oE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new en(e,n)}matches(e){return aE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function aE(t){return t.op==="and"}function lE(t){return zC(t)&&aE(t)}function zC(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function xh(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+ls(t.value);if(lE(t))return t.filters.map(e=>xh(e)).join(",");{const e=t.filters.map(n=>xh(n)).join(",");return`${t.op}(${e})`}}function uE(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&gn(r.value,i.value)}(t,e):t instanceof en?function(r,i){return i instanceof en&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&uE(o,i.filters[l]),!0):!1}(t,e):void X()}function cE(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${ls(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(cE).join(" ,")+"}"}(t):"Filter"}class $C extends Ve{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class WC extends Ve{constructor(e,n){super(e,"in",n),this.keys=dE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qC extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=dE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class HC extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ep(n)&&Bo(n.arrayValue,this.value)}}class KC extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bo(this.value.arrayValue,n)}}class GC extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bo(this.value.arrayValue,n)}}class QC extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ep(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Wy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new YC(t,e,n,r,i,s,o)}function tp(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ls(r)).join(",")),e.ue=n}return e.ue}function np(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!BC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$y(t.startAt,e.startAt)&&$y(t.endAt,e.endAt)}function Sh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function XC(t,e,n,r,i,s,o,l){return new ws(t,e,n,r,i,s,o,l)}function Bu(t){return new ws(t)}function qy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hE(t){return t.collectionGroup!==null}function po(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new zo(s,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new zo(Ge.keyField(),r))}return e.ce}function pn(t){const e=Z(t);return e.le||(e.le=JC(e,po(t))),e.le}function JC(t,e){if(t.limitType==="F")return Wy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new zo(i.field,s)});const n=t.endAt?new su(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new su(t.startAt.position,t.startAt.inclusive):null;return Wy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rh(t,e){const n=t.filters.concat([e]);return new ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ah(t,e,n){return new ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zu(t,e){return np(pn(t),pn(e))&&t.limitType===e.limitType}function fE(t){return`${tp(pn(t))}|lt:${t.limitType}`}function xi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>cE(i)).join(", ")}]`),Uu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ls(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ls(i)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function $u(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of po(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=zy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,po(r),i)||r.endAt&&!function(o,l,u){const c=zy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,po(r),i))}(t,e)}function ZC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pE(t){return(e,n)=>{let r=!1;for(const i of po(t)){const s=e2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function e2(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?as(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){yi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return rE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=new Se(K.comparator);function Wn(){return t2}const mE=new Se(K.comparator);function Zs(...t){let e=mE;for(const n of t)e=e.insert(n.key,n);return e}function gE(t){let e=mE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return mo()}function yE(){return mo()}function mo(){return new Es(t=>t.toString(),(t,e)=>t.isEqual(e))}const n2=new Se(K.comparator),r2=new Ye(K.comparator);function te(...t){let e=r2;for(const n of t)e=e.add(n);return e}const i2=new Ye(ae);function s2(){return i2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:iu(e)?"-0":e}}function vE(t){return{integerValue:""+t}}function o2(t,e){return LC(e)?vE(e):rp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this._=void 0}}function a2(t,e,n){return t instanceof ou?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jf(s)&&(s=Zf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof $o?wE(t,e):t instanceof Wo?EE(t,e):function(i,s){const o=_E(i,s),l=Hy(o)+Hy(i.Pe);return Ih(o)&&Ih(i.Pe)?vE(l):rp(i.serializer,l)}(t,e)}function l2(t,e,n){return t instanceof $o?wE(t,e):t instanceof Wo?EE(t,e):n}function _E(t,e){return t instanceof au?function(r){return Ih(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ou extends Wu{}class $o extends Wu{constructor(e){super(),this.elements=e}}function wE(t,e){const n=TE(e);for(const r of t.elements)n.some(i=>gn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wo extends Wu{constructor(e){super(),this.elements=e}}function EE(t,e){let n=TE(e);for(const r of t.elements)n=n.filter(i=>!gn(i,r));return{arrayValue:{values:n}}}class au extends Wu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Hy(t){return ke(t.integerValue||t.doubleValue)}function TE(t){return ep(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function u2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof $o&&i instanceof $o||r instanceof Wo&&i instanceof Wo?os(r.elements,i.elements,gn):r instanceof au&&i instanceof au?gn(r.Pe,i.Pe):r instanceof ou&&i instanceof ou}(t.transform,e.transform)}class c2{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function El(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qu{}function IE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new SE(t.key,Yt.none()):new la(t.key,t.data,Yt.none());{const n=t.data,r=wt.empty();let i=new Ye(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Mr(t.key,r,new kt(i.toArray()),Yt.none())}}function d2(t,e,n){t instanceof la?function(i,s,o){const l=i.value.clone(),u=Gy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mr?function(i,s,o){if(!El(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Gy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(xE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function go(t,e,n,r){return t instanceof la?function(s,o,l,u){if(!El(s.precondition,o))return l;const c=s.value.clone(),h=Qy(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mr?function(s,o,l,u){if(!El(s.precondition,o))return l;const c=Qy(s.fieldTransforms,u,o),h=o.data;return h.setAll(xE(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return El(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function h2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=_E(r.transform,i||null);s!=null&&(n===null&&(n=wt.empty()),n.set(r.field,s))}return n||null}function Ky(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&os(r,i,(s,o)=>u2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class la extends qu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mr extends qu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gy(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,l2(o,l,n[i]))}return r}function Qy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,a2(s,o,e))}return r}class SE extends qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class f2 extends qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&d2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=IE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,r)=>Ky(n,r))&&os(this.baseMutations,e.baseMutations,(n,r)=>Ky(n,r))}}class ip{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=function(){return n2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ip(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,re;function y2(t){switch(t){default:return X();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function RE(t){if(t===void 0)return $n("GRPC error has no .code"),L.UNKNOWN;switch(t){case De.OK:return L.OK;case De.CANCELLED:return L.CANCELLED;case De.UNKNOWN:return L.UNKNOWN;case De.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case De.INTERNAL:return L.INTERNAL;case De.UNAVAILABLE:return L.UNAVAILABLE;case De.UNAUTHENTICATED:return L.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case De.NOT_FOUND:return L.NOT_FOUND;case De.ALREADY_EXISTS:return L.ALREADY_EXISTS;case De.PERMISSION_DENIED:return L.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case De.ABORTED:return L.ABORTED;case De.OUT_OF_RANGE:return L.OUT_OF_RANGE;case De.UNIMPLEMENTED:return L.UNIMPLEMENTED;case De.DATA_LOSS:return L.DATA_LOSS;default:return X()}}(re=De||(De={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=new Zr([4294967295,4294967295],0);function Yy(t){const e=v2().encode(t),n=new Qw;return n.update(e),new Uint8Array(n.digest())}function Xy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zr([n,r],0),new Zr([i,s],0)]}class sp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(r<0)throw new eo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Zr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Zr.fromNumber(r)));return i.compare(_2)===1&&(i=new Zr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Yy(e),[r,i]=Xy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Yy(e),[r,i]=Xy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hu(J.min(),i,new Se(ae),Wn(),te())}}class ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ua(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class AE{constructor(e,n){this.targetId=e,this.me=n}}class kE{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Jy{constructor(){this.fe=0,this.ge=ev(),this.pe=Je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new ua(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ev()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class w2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Wn(),this.qe=Zy(),this.Qe=new Se(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Sh(s))if(r===0){const o=new K(s.path);this.Ue(n,o,at.newNoDocument(o,J.min()))}else de(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=di(r).toUint8Array()}catch(u){if(u instanceof iE)return ss("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sp(o,i,s)}catch(u){return ss(u instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Sh(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,at.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Hu(e,n,this.Qe,this.ke,r);return this.ke=Wn(),this.qe=Zy(),this.Qe=new Se(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Jy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ye(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Jy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Zy(){return new Se(K.comparator)}function ev(){return new Se(K.comparator)}const E2={asc:"ASCENDING",desc:"DESCENDING"},T2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},I2={and:"AND",or:"OR"};class x2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kh(t,e){return t.useProto3Json||Uu(e)?e:{value:e}}function lu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function PE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function S2(t,e){return lu(t,e.toTimestamp())}function mn(t){return de(!!t),J.fromTimestamp(function(n){const r=kr(n);return new Fe(r.seconds,r.nanos)}(t))}function op(t,e){return Ph(t,e).canonicalString()}function Ph(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function CE(t){const e=ve.fromString(t);return de(VE(e)),e}function Ch(t,e){return op(t.databaseId,e.path)}function ld(t,e){const n=CE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(bE(n))}function NE(t,e){return op(t.databaseId,e)}function R2(t){const e=CE(t);return e.length===4?ve.emptyPath():bE(e)}function Nh(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bE(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function tv(t,e,n){return{name:Ch(t,e),fields:n.value.mapValue.fields}}function A2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(de(h===void 0||typeof h=="string"),Je.fromBase64String(h||"")):(de(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Je.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?L.UNKNOWN:RE(c.code);return new W(h,c.message||"")}(o);n=new kE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ld(t,r.document.name),s=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):J.min(),l=new wt({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(i,s,o,l),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Tl(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ld(t,r.document),s=r.readTime?mn(r.readTime):J.min(),o=at.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Tl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ld(t,r.document),s=r.removedTargetIds||[];n=new Tl([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new g2(i,s),l=r.targetId;n=new AE(l,o)}}return n}function k2(t,e){let n;if(e instanceof la)n={update:tv(t,e.key,e.value)};else if(e instanceof SE)n={delete:Ch(t,e.key)};else if(e instanceof Mr)n={update:tv(t,e.key,e.data),updateMask:j2(e.fieldMask)};else{if(!(e instanceof f2))return X();n={verify:Ch(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ou)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof $o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof au)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:S2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function P2(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?mn(i.updateTime):mn(s);return o.isEqual(J.min())&&(o=mn(s)),new c2(o,i.transformResults||[])}(n,e))):[]}function C2(t,e){return{documents:[NE(t,e.path)]}}function N2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=NE(t,i);const s=function(c){if(c.length!==0)return OE(en.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:Si(g.field),direction:O2(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function b2(t){let e=R2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(m){const g=DE(m);return g instanceof en&&lE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(P){return new zo(Ri(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Uu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,x=m.values||[];return new su(x,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,x=m.values||[];return new su(x,g)}(n.endAt)),XC(e,i,o,s,l,"F",u,c)}function D2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function DE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ri(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ri(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ri(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ri(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Ri(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>DE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function O2(t){return E2[t]}function V2(t){return T2[t]}function L2(t){return I2[t]}function Si(t){return{fieldPath:t.canonicalString()}}function Ri(t){return Ge.fromServerFormat(t.fieldPath)}function OE(t){return t instanceof Ve?function(n){if(n.op==="=="){if(By(n.value))return{unaryFilter:{field:Si(n.field),op:"IS_NAN"}};if(Uy(n.value))return{unaryFilter:{field:Si(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(By(n.value))return{unaryFilter:{field:Si(n.field),op:"IS_NOT_NAN"}};if(Uy(n.value))return{unaryFilter:{field:Si(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Si(n.field),op:V2(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(i=>OE(i));return r.length===1?r[0]:{compositeFilter:{op:L2(n.op),filters:r}}}(t):X()}function j2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=Je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.ct=e}}function F2(t){const e=b2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ah(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(){this.un=new B2}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Ar.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class B2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new us(0)}static kn(){return new us(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(){this.changes=new Es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&go(r.mutation,i,kt.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Yr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Zs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Wn();const o=mo(),l=function(){return mo()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Mr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),go(h.mutation,c,h.mutation.getFieldMask(),Fe.now())):o.set(c.key,kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var m;return l.set(c,new $2(h,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=mo();let i=new Se((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||kt.empty();h=l.applyToLocalView(c,h),r.set(u,h);const m=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,m=yE();h.forEach(g=>{if(!s.has(g)){const x=IE(n.get(g),r.get(g));x!==null&&m.set(g,x),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Yr());let l=-1,u=s;return o.next(c=>j.forEach(c,(h,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(h=>({batchId:l,changes:gE(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Zs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Zs();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const c=function(m,g){return new ws(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,at.newInvalidDocument(h)))});let l=Zs();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&go(h.mutation,c,kt.empty(),Fe.now()),$u(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:F2(i.bundledQuery),readTime:mn(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this.overlays=new Se(K.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Yr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Yr(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=Yr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return j.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new m2(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.Tr=new Ye(Ue.Er),this.dr=new Ye(Ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ue(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new ve([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new ve([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ye(Ue.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new p2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ae);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new K(s),0);let l=new Ye(ae);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ue(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.Mr=e,this.docs=function(){return new Se(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=Wn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():at.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Wn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||bC(NC(h),r)<=0||(i.has(h.key)||$u(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Y2(this)}getSize(e){return j.resolve(this.size)}}class Y2 extends z2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.persistence=e,this.Nr=new Es(n=>tp(n),np),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ap,this.targetCount=0,this.kr=us.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new us(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Xf(0),this.Kr=!1,this.Kr=!0,this.$r=new K2,this.referenceDelegate=e(this),this.Ur=new X2(this),this.indexManager=new U2,this.remoteDocumentCache=function(i){return new Q2(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new M2(n),this.Gr=new q2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new H2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new G2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new Z2(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Z2 extends OC{constructor(e){super(),this.currentSequenceNumber=e}}class lp{constructor(e){this.persistence=e,this.Jr=new ap,this.Yr=null}static Zr(e){return new lp(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new up(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return BR()?8:VC(dt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new eN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ws()<=ne.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Ws()<=ne.DEBUG&&H("QueryEngine","Query:",xi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ws()<=ne.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):j.resolve())}Yi(e,n){if(qy(n))return j.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ah(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Ah(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return qy(n)||i.isEqual(J.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(Ws()<=ne.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xi(n)),this.rs(e,o,n,CC(i,-1)).next(l=>l))})}ts(e,n){let r=new Ye(pE(e));return n.forEach((i,s)=>{$u(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ws()<=ne.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",xi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ar.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Se(ae),this._s=new Es(s=>tp(s),np),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new W2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function rN(t,e,n,r){return new nN(t,e,n,r)}async function LE(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function iN(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const m=c.batch,g=m.keys();let x=j.resolve();return g.forEach(P=>{x=x.next(()=>h.getEntry(u,P)).next(N=>{const k=c.docVersions.get(P);de(k!==null),N.version.compareTo(k)<0&&(m.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),h.addEntry(N)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jE(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function sN(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((h,m)=>{const g=i.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,m)));let x=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?x=x.withResumeToken(Je.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(h.resumeToken,r)),i=i.insert(m,x),function(N,k,I){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,x,h)&&l.push(n.Ur.updateTargetData(s,x))});let u=Wn(),c=te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(oN(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(J.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(h)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function oN(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Wn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function aN(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lN(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function bh(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!aa(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function nv(t,e,n){const r=Z(t);let i=J.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const m=Z(u),g=m._s.get(h);return g!==void 0?j.resolve(m.os.get(g)):m.Ur.getTargetData(c,h)}(r,o,pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:te())).next(l=>(uN(r,ZC(e),l),{documents:l,Ts:s})))}function uN(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class rv{constructor(){this.activeTargetIds=s2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cN{constructor(){this.so=new rv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new rv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el=null;function ud(){return el===null?el=function(){return 268435456+Math.round(2147483648*Math.random())}():el++,"0x"+el.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class pN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=ud(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(H("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw ss("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=hN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=ud();return new Promise((o,l)=>{const u=new Yw;u.setWithCredentials(!0),u.listenOnce(Xw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case _l.NO_ERROR:const h=u.getResponseJson();H(it,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case _l.TIMEOUT:H(it,`RPC '${e}' ${s} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case _l.HTTP_ERROR:const m=u.getStatus();if(H(it,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const x=g==null?void 0:g.error;if(x&&x.status&&x.message){const P=function(k){const I=k.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(I)>=0?I:L.UNKNOWN}(x.status);l(new W(P,x.message))}else l(new W(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{H(it,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(it,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=ud(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eE(),l=Zw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");H(it,`Creating RPC '${e}' stream ${i}: ${h}`,u);const m=o.createWebChannel(h,u);let g=!1,x=!1;const P=new fN({Io:k=>{x?H(it,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(g||(H(it,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),H(it,`RPC '${e}' stream ${i} sending:`,k),m.send(k))},To:()=>m.close()}),N=(k,I,w)=>{k.listen(I,S=>{try{w(S)}catch(D){setTimeout(()=>{throw D},0)}})};return N(m,Js.EventType.OPEN,()=>{x||(H(it,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),N(m,Js.EventType.CLOSE,()=>{x||(x=!0,H(it,`RPC '${e}' stream ${i} transport closed`),P.So())}),N(m,Js.EventType.ERROR,k=>{x||(x=!0,ss(it,`RPC '${e}' stream ${i} transport errored:`,k),P.So(new W(L.UNAVAILABLE,"The operation could not be completed")))}),N(m,Js.EventType.MESSAGE,k=>{var I;if(!x){const w=k.data[0];de(!!w);const S=w,D=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(D){H(it,`RPC '${e}' stream ${i} received error:`,D);const M=D.status;let U=function(R){const A=De[R];if(A!==void 0)return RE(A)}(M),E=D.message;U===void 0&&(U=L.INTERNAL,E="Unknown error status: "+M+" with message "+D.message),x=!0,P.So(new W(U,E)),m.close()}else H(it,`RPC '${e}' stream ${i} received:`,w),P.bo(w)}}),N(l,Jw.STAT_EVENT,k=>{k.stat===Eh.PROXY?H(it,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Eh.NOPROXY&&H(it,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function cd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){return new x2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ME(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mN extends FE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=A2(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?mn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Nh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Sh(u)?{documents:C2(s,u)}:{query:N2(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=PE(s,o.resumeToken);const c=kh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=lu(s,o.snapshotVersion.toTimestamp());const c=kh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=D2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Nh(this.serializer),n.removeTarget=e,this.a_(n)}}class gN extends FE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=P2(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Nh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>k2(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ph(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ph(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class vN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($n(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{vi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.L_.add(4),await ca(c),c.q_.set("Unknown"),c.L_.delete(4),await Gu(c)}(this))})}),this.q_=new vN(r,i)}}async function Gu(t){if(vi(t))for(const e of t.B_)await e(!0)}async function ca(t){for(const e of t.B_)await e(!1)}function UE(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),fp(n)?hp(n):Ts(n).r_()&&dp(n,e))}function cp(t,e){const n=Z(t),r=Ts(n);n.N_.delete(e),r.r_()&&BE(n,e),n.N_.size===0&&(r.r_()?r.o_():vi(n)&&n.q_.set("Unknown"))}function dp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ts(t).A_(e)}function BE(t,e){t.Q_.xe(e),Ts(t).R_(e)}function hp(t){t.Q_=new w2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ts(t).start(),t.q_.v_()}function fp(t){return vi(t)&&!Ts(t).n_()&&t.N_.size>0}function vi(t){return Z(t).L_.size===0}function zE(t){t.Q_=void 0}async function wN(t){t.q_.set("Online")}async function EN(t){t.N_.forEach((e,n)=>{dp(t,e)})}async function TN(t,e){zE(t),fp(t)?(t.q_.M_(e),hp(t)):t.q_.set("Unknown")}async function IN(t,e,n){if(t.q_.set("Online"),e instanceof kE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uu(t,r)}else if(e instanceof Tl?t.Q_.Ke(e):e instanceof AE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await jE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(Je.EMPTY_BYTE_STRING,h.snapshotVersion)),BE(s,u);const m=new dr(h.target,u,c,h.sequenceNumber);dp(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await uu(t,r)}}async function uu(t,e,n){if(!aa(e))throw e;t.L_.add(1),await ca(t),t.q_.set("Offline"),n||(n=()=>jE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Gu(t)})}function $E(t,e){return e().catch(n=>uu(t,n,e))}async function Qu(t){const e=Z(t),n=Pr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;xN(e);)try{const i=await aN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,SN(e,i)}catch(i){await uu(e,i)}WE(e)&&qE(e)}function xN(t){return vi(t)&&t.O_.length<10}function SN(t,e){t.O_.push(e);const n=Pr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function WE(t){return vi(t)&&!Pr(t).n_()&&t.O_.length>0}function qE(t){Pr(t).start()}async function RN(t){Pr(t).p_()}async function AN(t){const e=Pr(t);for(const n of t.O_)e.m_(n.mutations)}async function kN(t,e,n){const r=t.O_.shift(),i=ip.from(r,e,n);await $E(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Qu(t)}async function PN(t,e){e&&Pr(t).V_&&await async function(r,i){if(function(o){return y2(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();Pr(r).s_(),await $E(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Qu(r)}}(t,e),WE(t)&&qE(t)}async function sv(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=vi(n);n.L_.add(3),await ca(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Gu(n)}async function CN(t,e){const n=Z(t);e?(n.L_.delete(2),await Gu(n)):e||(n.L_.add(2),await ca(n),n.q_.set("Unknown"))}function Ts(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new mN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:wN.bind(null,t),Ro:EN.bind(null,t),mo:TN.bind(null,t),d_:IN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),fp(t)?hp(t):t.q_.set("Unknown")):(await t.K_.stop(),zE(t))})),t.K_}function Pr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new gN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:RN.bind(null,t),mo:PN.bind(null,t),f_:AN.bind(null,t),g_:kN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Qu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new pp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mp(t,e){if($n("AsyncQueue",`${e}: ${t}`),aa(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Zs(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Yi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.W_=new Se(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class cs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new cs(e,n,Yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class bN{constructor(){this.queries=av(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=av(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function av(){return new Es(t=>fE(t),zu)}async function gp(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new NN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=mp(o,`Initialization of query '${xi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&vp(n)}async function yp(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DN(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&vp(n)}function ON(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function vp(t){t.Y_.forEach(e=>{e.next()})}var Dh,lv;(lv=Dh||(Dh={})).ea="default",lv.Cache="cache";class _p{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Dh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.key=e}}class KE{constructor(e){this.key=e}}class VN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=pE(e),this.Ra=new Yi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ov,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,m)=>{const g=i.get(h),x=$u(this.query,m)?m:null,P=!!g&&this.mutatedKeys.has(g.key),N=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let k=!1;g&&x?g.data.isEqual(x.data)?P!==N&&(r.track({type:3,doc:x}),k=!0):this.ga(g,x)||(r.track({type:2,doc:x}),k=!0,(u&&this.Aa(x,u)>0||c&&this.Aa(x,c)<0)&&(l=!0)):!g&&x?(r.track({type:0,doc:x}),k=!0):g&&!x&&(r.track({type:1,doc:g}),k=!0,(u||c)&&(l=!0)),k&&(x?(o=o.add(x),s=N?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,m)=>function(x,P){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return N(x)-N(P)}(h.type,m.type)||this.Aa(h.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new cs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ov,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new KE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new HE(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return cs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class LN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jN{constructor(e){this.key=e,this.va=!1}}class MN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Es(l=>fE(l),zu),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(K.comparator),this.Na=new Map,this.La=new ap,this.Ba={},this.ka=new Map,this.qa=us.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function FN(t,e,n=!0){const r=ZE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await GE(r,e,n,!0),i}async function UN(t,e){const n=ZE(t);await GE(n,e,!0,!1)}async function GE(t,e,n,r){const i=await lN(t.localStore,pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await BN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&UE(t.remoteStore,i),l}async function BN(t,e,n,r,i){t.Ka=(m,g,x)=>async function(N,k,I,w){let S=k.view.ma(I);S.ns&&(S=await nv(N.localStore,k.query,!1).then(({documents:E})=>k.view.ma(E,S)));const D=w&&w.targetChanges.get(k.targetId),M=w&&w.targetMismatches.get(k.targetId)!=null,U=k.view.applyChanges(S,N.isPrimaryClient,D,M);return cv(N,k.targetId,U.wa),U.snapshot}(t,m,g,x);const s=await nv(t.localStore,e,!0),o=new VN(e,s.Ts),l=o.ma(s.documents),u=ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);cv(t,n,c.wa);const h=new LN(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function zN(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!zu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&cp(r.remoteStore,i.targetId),Oh(r,i.targetId)}).catch(oa)):(Oh(r,i.targetId),await bh(r.localStore,i.targetId,!0))}async function $N(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cp(n.remoteStore,r.targetId))}async function WN(t,e,n){const r=XN(t);try{const i=await function(o,l){const u=Z(o),c=Fe.now(),h=l.reduce((x,P)=>x.add(P.key),te());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let P=Wn(),N=te();return u.cs.getEntries(x,h).next(k=>{P=k,P.forEach((I,w)=>{w.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,P)).next(k=>{m=k;const I=[];for(const w of l){const S=h2(w,m.get(w.key).overlayedDocument);S!=null&&I.push(new Mr(w.key,S,sE(S.value.mapValue),Yt.exists(!0)))}return u.mutationQueue.addMutationBatch(x,c,I,l)}).next(k=>{g=k;const I=k.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(x,k.batchId,I)})}).then(()=>({batchId:g.batchId,changes:gE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Se(ae)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await da(r,i.changes),await Qu(r.remoteStore)}catch(i){const s=mp(i,"Failed to persist write");n.reject(s)}}async function QE(t,e){const n=Z(t);try{const r=await sN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?de(o.va):i.removedDocuments.size>0&&(de(o.va),o.va=!1))}),await da(n,r,e)}catch(r){await oa(r)}}function uv(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((h,m)=>{for(const g of m.j_)g.Z_(l)&&(c=!0)}),c&&vp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qN(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Se(K.comparator);o=o.insert(s,at.newNoDocument(s,J.min()));const l=te().add(s),u=new Hu(J.min(),new Map,new Se(ae),o,l);await QE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),wp(r)}else await bh(r.localStore,e,!1).then(()=>Oh(r,e,n)).catch(oa)}async function HN(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await iN(n.localStore,e);XE(n,r,null),YE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await da(n,i)}catch(i){await oa(i)}}async function KN(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(de(m!==null),h=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);XE(r,e,n),YE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await da(r,i)}catch(i){await oa(i)}}function YE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function XE(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Oh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||JE(t,r)})}function JE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(cp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),wp(t))}function cv(t,e,n){for(const r of n)r instanceof HE?(t.La.addReference(r.key,e),GN(t,r)):r instanceof KE?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||JE(t,r.key)):X()}function GN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),wp(t))}function wp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(ve.fromString(e)),r=t.qa.next();t.Na.set(r,new jN(n)),t.Oa=t.Oa.insert(n,r),UE(t.remoteStore,new dr(pn(Bu(n.path)),r,"TargetPurposeLimboResolution",Xf.oe))}}async function da(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=up.Wi(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=Z(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>j.forEach(c,g=>j.forEach(g.$i,x=>h.persistence.referenceDelegate.addReference(m,g.targetId,x)).next(()=>j.forEach(g.Ui,x=>h.persistence.referenceDelegate.removeReference(m,g.targetId,x)))))}catch(m){if(!aa(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const x=h.os.get(g),P=x.snapshotVersion,N=x.withLastLimboFreeSnapshotVersion(P);h.os=h.os.insert(g,N)}}}(r.localStore,s))}async function QN(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await LE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await da(n,r.hs)}}function YN(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function ZE(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=QE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qN.bind(null,e),e.Ca.d_=DN.bind(null,e.eventManager),e.Ca.$a=ON.bind(null,e.eventManager),e}function XN(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KN.bind(null,e),e}class cu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ku(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return rN(this.persistence,new tN,e.initialUser,this.serializer)}Ga(e){return new J2(lp.Zr,this.serializer)}Wa(e){return new cN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cu.provider={build:()=>new cu};class Vh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QN.bind(null,this.syncEngine),await CN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bN}()}createDatastore(e){const n=Ku(e.databaseInfo.databaseId),r=function(s){return new pN(s)}(e.databaseInfo);return function(s,o,l,u){return new yN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new _N(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>uv(this.syncEngine,n,0),function(){return iv.D()?new iv:new dN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,h){const m=new MN(i,s,o,l,u,c);return h&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ca(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Vh.provider={build:()=>new Vh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=nE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dd(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await LE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function dv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZN(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>sv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>sv(e.remoteStore,i)),t._onlineComponents=e}async function ZN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await dd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ss("Error using user provided cache. Falling back to memory cache: "+n),await dd(t,new cu)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await dd(t,new cu);return t._offlineComponents}async function eT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await dv(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await dv(t,new Vh))),t._onlineComponents}function eb(t){return eT(t).then(e=>e.syncEngine)}async function du(t){const e=await eT(t),n=e.eventManager;return n.onListen=FN.bind(null,e.syncEngine),n.onUnlisten=zN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=UN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$N.bind(null,e.syncEngine),n}function tb(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new Ep({next:g=>{h.Za(),o.enqueueAndForget(()=>yp(s,m));const x=g.docs.has(l);!x&&g.fromCache?c.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&g.fromCache&&u&&u.source==="server"?c.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new _p(Bu(l.path),h,{includeMetadataChanges:!0,_a:!0});return gp(s,m)}(await du(t),t.asyncQueue,e,n,r)),r.promise}function nb(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new Ep({next:g=>{h.Za(),o.enqueueAndForget(()=>yp(s,m)),g.fromCache&&u.source==="server"?c.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new _p(l,h,{includeMetadataChanges:!0,_a:!0});return gp(s,m)}(await du(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rb(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fv(t){if(!K.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pv(t){if(K.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Ct(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yu(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EC;switch(r.type){case"firstParty":return new SC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hv.get(n);r&&(H("ComponentProvider","Removing Datastore"),hv.delete(n),r.terminate())}(this),Promise.resolve()}}function ib(t,e,n,r={}){var i;const s=(t=Ct(t,Xu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=st.MOCK_USER;else{l=uw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new st(c)}t._authCredentials=new TC(new tE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fr(this.firestore,e,this._query)}}class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class Ir extends Fr{constructor(e,n,r){super(e,n,Bu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new K(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function ei(t,e,...n){if(t=Ne(t),nT("collection","path",e),t instanceof Xu){const r=ve.fromString(e,...n);return pv(r),new Ir(t,null,r)}{if(!(t instanceof ut||t instanceof Ir))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return pv(r),new Ir(t.firestore,null,r)}}function ln(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=nE.newId()),nT("doc","path",e),t instanceof Xu){const r=ve.fromString(e,...n);return fv(r),new ut(t,null,new K(r))}{if(!(t instanceof ut||t instanceof Ir))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return fv(r),new ut(t.firestore,t instanceof Ir?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ME(this,"async_queue_retry"),this.Vu=()=>{const r=cd();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=cd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=cd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Vn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!aa(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw $n("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=pp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function yv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Cr extends Xu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new gv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gv(e),this._firestoreClient=void 0,await e}}}function sb(t,e){const n=typeof t=="object"?t:Uf(),r=typeof t=="string"?t:"(default)",i=Lu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ow("firestore");s&&ib(i,...s)}return i}function Ju(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ob(t),t._firestoreClient}function ob(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,h){return new MC(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,tT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new JN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(Je.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=/^__.*__$/;class lb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new la(e,this.data,n,this.fieldTransforms)}}class rT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Sp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Sp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return hu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(iT(this.Cu)&&ab.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ub{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ku(e)}Qu(e,n,r,i=!1){return new Sp({Cu:e,methodName:n,qu:r,path:Ge.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ec(t){const e=t._freezeSettings(),n=Ku(t._databaseId);return new ub(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sT(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Rp("Data must be an object, but it was:",o,r);const l=oT(r,o);let u,c;if(s.merge)u=new kt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const m of s.mergeFields){const g=Lh(e,m,n);if(!o.contains(g))throw new W(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);lT(h,g)||h.push(g)}u=new kt(h),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new lb(new wt(l),u,c)}class tc extends Tp{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tc}}function cb(t,e,n,r){const i=t.Qu(1,e,n);Rp("Data must be an object, but it was:",i,r);const s=[],o=wt.empty();yi(r,(u,c)=>{const h=Ap(e,u,n);c=Ne(c);const m=i.Nu(h);if(c instanceof tc)s.push(h);else{const g=ha(c,m);g!=null&&(s.push(h),o.set(h,g))}});const l=new kt(s);return new rT(o,l,i.fieldTransforms)}function db(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Lh(e,r,n)],u=[i];if(s.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Lh(e,s[g])),u.push(s[g+1]);const c=[],h=wt.empty();for(let g=l.length-1;g>=0;--g)if(!lT(c,l[g])){const x=l[g];let P=u[g];P=Ne(P);const N=o.Nu(x);if(P instanceof tc)c.push(x);else{const k=ha(P,N);k!=null&&(c.push(x),h.set(x,k))}}const m=new kt(c);return new rT(h,m,o.fieldTransforms)}function hb(t,e,n,r=!1){return ha(n,t.Qu(r?4:3,e))}function ha(t,e){if(aT(t=Ne(t)))return Rp("Unsupported field value:",e,t),oT(t,e);if(t instanceof Tp)return function(r,i){if(!iT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ha(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return o2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:lu(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lu(i.serializer,s)}}if(r instanceof Ip)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ds)return{bytesValue:PE(i.serializer,r._byteString)};if(r instanceof ut){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:op(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof xp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return rp(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Yu(r)}`)}(t,e)}function oT(t,e){const n={};return rE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yi(t,(r,i)=>{const s=ha(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function aT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Ip||t instanceof ds||t instanceof ut||t instanceof Tp||t instanceof xp)}function Rp(t,e,n){if(!aT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Yu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Lh(t,e,n){if((e=Ne(e))instanceof Zu)return e._internalPath;if(typeof e=="string")return Ap(t,e);throw hu("Field path arguments must be of type string or ",t,!1,void 0,n)}const fb=new RegExp("[~\\*/\\[\\]]");function Ap(t,e,n){if(e.search(fb)>=0)throw hu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zu(...e.split("."))._internalPath}catch{throw hu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(L.INVALID_ARGUMENT,l+t+u)}function lT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pb extends uT{data(){return super.data()}}function nc(t,e){return typeof e=="string"?Ap(t,e):e instanceof Zu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kp{}class dT extends kp{}function qo(t,e,...n){let r=[];e instanceof kp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Pp).length,l=s.filter(u=>u instanceof rc).length;if(o>1||o>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class rc extends dT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new rc(e,n,r)}_apply(e){const n=this._parse(e);return hT(e._query,n),new Fr(e.firestore,e.converter,Rh(e._query,n))}_parse(e){const n=ec(e.firestore);return function(s,o,l,u,c,h,m){let g;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){_v(m,h);const x=[];for(const P of m)x.push(vv(u,s,P));g={arrayValue:{values:x}}}else g=vv(u,s,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||_v(m,h),g=hb(l,o,m,h==="in"||h==="not-in");return Ve.create(c,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function sn(t,e,n){const r=e,i=nc("where",t);return rc._create(i,r,n)}class Pp extends kp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)hT(o,u),o=Rh(o,u)}(e._query,n),new Fr(e.firestore,e.converter,Rh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cp extends dT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zo(s,o)}(e._query,this._field,this._direction);return new Fr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ws(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function mb(t,e="asc"){const n=e,r=nc("orderBy",t);return Cp._create(r,n)}function vv(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hE(e)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!K.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fy(t,new K(r))}if(n instanceof ut)return Fy(t,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yu(n)}.`)}function _v(t,e){if(!Array.isArray(t)||t.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class gb{convertValue(e,n="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ke(o.doubleValue));return new xp(s)}convertGeoPoint(e){return new Ip(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);de(VE(r));const i=new Uo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||$n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pT extends uT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(nc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Il extends pT{data(e={}){return super.data(e)}}class mT{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new to(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Il(this._firestore,this._userDataWriter,r.key,r,new to(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new to(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new to(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:yb(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){t=Ct(t,ut);const e=Ct(t.firestore,Cr);return tb(Ju(e),t._key).then(n=>yT(e,t,n))}class Np extends gb{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function Ho(t){t=Ct(t,Fr);const e=Ct(t.firestore,Cr),n=Ju(e),r=new Np(e);return cT(t._query),nb(n,t._query).then(i=>new mT(e,r,t,i))}function vb(t,e,n){t=Ct(t,ut);const r=Ct(t.firestore,Cr),i=fT(t.converter,e);return bp(r,[sT(ec(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Yt.none())])}function Ui(t,e,n,...r){t=Ct(t,ut);const i=Ct(t.firestore,Cr),s=ec(i);let o;return o=typeof(e=Ne(e))=="string"||e instanceof Zu?db(s,"updateDoc",t._key,e,n,r):cb(s,"updateDoc",t._key,e),bp(i,[o.toMutation(t._key,Yt.exists(!0))])}function _b(t,e){const n=Ct(t.firestore,Cr),r=ln(t),i=fT(t.converter,e);return bp(n,[sT(ec(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function wb(t,...e){var n,r,i;t=Ne(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||yv(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(yv(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,c,h;if(t instanceof ut)c=Ct(t.firestore,Cr),h=Bu(t._key.path),u={next:m=>{e[o]&&e[o](yT(c,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Ct(t,Fr);c=Ct(m.firestore,Cr),h=m._query;const g=new Np(c);u={next:x=>{e[o]&&e[o](new mT(c,g,m,x))},error:e[o+1],complete:e[o+2]},cT(t._query)}return function(g,x,P,N){const k=new Ep(N),I=new _p(x,k,P);return g.asyncQueue.enqueueAndForget(async()=>gp(await du(g),I)),()=>{k.Za(),g.asyncQueue.enqueueAndForget(async()=>yp(await du(g),I))}}(Ju(c),h,l,u)}function bp(t,e){return function(r,i){const s=new Vn;return r.asyncQueue.enqueueAndForget(async()=>WN(await eb(r),i,s)),s.promise}(Ju(t),e)}function yT(t,e,n){const r=n.docs.get(e._key),i=new Np(t);return new pT(t,i,e._key,r,new to(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){_s=i})(mi),ai(new Rr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Cr(new IC(r.getProvider("auth-internal")),new AC(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uo(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),dn(Oy,"4.7.3",e),dn(Oy,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="firebasestorage.googleapis.com",Eb="storageBucket",Tb=2*60*1e3,Ib=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends vn{constructor(e,n,r=0){super(hd(e),`Firebase Storage: ${n} (${hd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_n.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yn||(yn={}));function hd(t){return"storage/"+t}function xb(){const t="An unknown error occurred, please check the error payload for server response.";return new _n(yn.UNKNOWN,t)}function Sb(){return new _n(yn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Rb(){return new _n(yn.CANCELED,"User canceled the upload/download.")}function Ab(t){return new _n(yn.INVALID_URL,"Invalid URL '"+t+"'.")}function kb(t){return new _n(yn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wv(t){return new _n(yn.INVALID_ARGUMENT,t)}function _T(){return new _n(yn.APP_DELETED,"The Firebase app was deleted.")}function Pb(t){return new _n(yn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Kt.makeFromUrl(e,n)}catch{return new Kt(e,"")}if(r.path==="")return r;throw kb(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",x=new RegExp(`^https?://${m}/${h}/b/${i}/o${g}`,"i"),P={bucket:1,path:3},N=n===vT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",I=new RegExp(`^https?://${N}/${i}/${k}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:x,indices:P,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<S.length;D++){const M=S[D],U=M.regex.exec(e);if(U){const E=U[M.indices.bucket];let v=U[M.indices.path];v||(v=""),r=new Kt(E,v),M.postModify(r);break}}if(r==null)throw Ab(e);return r}}class Cb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function h(...k){c||(c=!0,e.apply(null,k))}function m(k){i=setTimeout(()=>{i=null,t(x,u())},k)}function g(){s&&clearTimeout(s)}function x(k,...I){if(c){g();return}if(k){g(),h.call(null,k,...I);return}if(u()||o){g(),h.call(null,k,...I);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,m(S)}let P=!1;function N(k){P||(P=!0,g(),!c&&(i!==null?(k||(l=2),clearTimeout(i),m(0)):k||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,N(!0)},n),N}function bb(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t){return t!==void 0}function Ev(t,e,n,r){if(r<e)throw wv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw wv(`Invalid value for '${t}'. Expected ${n} or less.`)}function Ob(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var fu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fu||(fu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,r,i,s,o,l,u,c,h,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,P)=>{this.resolve_=x,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new tl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===fu.NO_ERROR,u=s.getStatus();if(!l||Vb(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===fu.ABORT;r(!1,new tl(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new tl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Db(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=xb();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?_T():Rb();o(u)}else{const u=Sb();o(u)}};this.canceled_?n(!1,new tl(!1,null,!0)):this.backoffId_=Nb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function jb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Mb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Fb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ub(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Bb(t,e,n,r,i,s,o=!0){const l=Ob(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return Fb(c,e),jb(c,n),Mb(c,s),Ub(c,r),new Lb(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function $b(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this._service=e,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pu(e,n)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $b(this._location.path)}get storage(){return this._service}get parent(){const e=zb(this._location.path);if(e===null)return null;const n=new Kt(this._location.bucket,e);return new pu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Pb(e)}}function Tv(t,e){const n=e==null?void 0:e[Eb];return n==null?null:Kt.makeFromBucketSpec(n,t)}function Wb(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:uw(i,t.app.options.projectId))}class qb{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=vT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Tb,this._maxUploadRetryTime=Ib,this._requests=new Set,i!=null?this._bucket=Kt.makeFromBucketSpec(i,this._host):this._bucket=Tv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=Tv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ev("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ev("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Cb(_T());{const o=Bb(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Iv="@firebase/storage",xv="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="storage";function Hb(t=Uf(),e){t=Ne(t);const r=Lu(t,wT).getImmediate({identifier:e}),i=ow("storage");return i&&Kb(r,...i),r}function Kb(t,e,n,r={}){Wb(t,e,n,r)}function Gb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new qb(n,r,i,e,mi)}function Qb(){ai(new Rr(wT,Gb,"PUBLIC").setMultipleInstances(!0)),dn(Iv,xv,""),dn(Iv,xv,"esm2017")}Qb();const Yb={apiKey:"AIzaSyAxT3OdXYrLBC288r2j48IOTe5BFhr8swo",authDomain:"barangayappointmentsyste-998b2.firebaseapp.com",projectId:"barangayappointmentsyste-998b2",storageBucket:"barangayappointmentsyste-998b2.firebasestorage.app",messagingSenderId:"641127048115",appId:"1:641127048115:web:f42b416b290cf32a0da1c6"},Dp=hw(Yb),Xt=yC(Dp),lt=sb(Dp);Hb(Dp);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),$e=(t,e)=>{const n=O.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},h)=>O.createElement("svg",{ref:h,...Xb,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${Jb(t)}`,l].join(" "),...c},[...e.map(([m,g])=>O.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=$e("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=$e("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=$e("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=$e("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=$e("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=$e("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=$e("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=$e("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=$e("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=$e("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=$e("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=$e("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=$e("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=$e("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=$e("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=$e("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=$e("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=$e("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function aD({user:t,isAdmin:e}){const n=ys(),r=async()=>{try{await oP(Xt),ie.success("Logged out successfully"),n("/login")}catch{ie.error("Error logging out")}};return t?e?p.jsx("nav",{className:"navbar",children:p.jsxs("div",{className:"container",children:[p.jsx(vt,{to:"/admin",style:{fontSize:"22px",fontWeight:"bold",textDecoration:"none",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"🏛️ Barangay Del Pilar"}),p.jsxs("div",{className:"nav-links",children:[p.jsxs(vt,{to:"/dashboard",children:[p.jsx(Sv,{size:18,style:{display:"inline",marginRight:"6px"}}),"Dashboard"]}),p.jsxs(vt,{to:"/admin",children:[p.jsx(rD,{size:18,style:{display:"inline",marginRight:"6px"}}),"Admin Dashboard"]}),p.jsxs(vt,{to:"/queue",children:[p.jsx(Lp,{size:18,style:{display:"inline",marginRight:"6px"}}),"Queue Status"]}),p.jsxs("button",{onClick:r,className:"btn btn-danger",style:{padding:"8px 20px"},children:[p.jsx(Rv,{size:16,style:{display:"inline",marginRight:"6px"}}),"Logout"]})]})]})}):p.jsx("nav",{className:"navbar",children:p.jsxs("div",{className:"container",children:[p.jsx(vt,{to:"/dashboard",style:{fontSize:"22px",fontWeight:"bold",textDecoration:"none",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"🏠 Barangay Del Pilar"}),p.jsxs("div",{className:"nav-links",children:[p.jsxs(vt,{to:"/dashboard",children:[p.jsx(Sv,{size:16,style:{display:"inline",marginRight:"6px"}}),"Dashboard"]}),p.jsxs(vt,{to:"/book",children:[p.jsx(Op,{size:16,style:{display:"inline",marginRight:"6px"}}),"Book"]}),p.jsxs(vt,{to:"/appointments",children:[p.jsx(Jn,{size:16,style:{display:"inline",marginRight:"6px"}}),"My Appointments"]}),p.jsxs("button",{onClick:r,className:"btn btn-outline",style:{padding:"8px 20px"},children:[p.jsx(Rv,{size:16,style:{display:"inline",marginRight:"6px"}}),"Logout"]})]})]})}):p.jsx("nav",{className:"navbar",children:p.jsxs("div",{className:"container",children:[p.jsx(vt,{to:"/",style:{fontSize:"24px",fontWeight:"bold",textDecoration:"none",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Barangay Del Pilar"}),p.jsxs("div",{className:"nav-links",children:[p.jsx(vt,{to:"/login",children:"Login"}),p.jsx(vt,{to:"/register",children:"Register"})]})]})})}function lD(){const[t,e]=O.useState(""),[n,r]=O.useState(""),[i,s]=O.useState(!1),o=ys(),l=async u=>{u.preventDefault(),s(!0);try{await eP(Xt,t,n),ie.success("Login successful!"),o("/dashboard")}catch{ie.error("Invalid email or password")}finally{s(!1)}};return p.jsx("div",{className:"container",style:{maxWidth:"400px",marginTop:"50px"},children:p.jsxs("div",{className:"card",children:[p.jsx("h2",{style:{textAlign:"center",marginBottom:"20px"},children:"Login to Barangay Portal"}),p.jsxs("form",{onSubmit:l,children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Email Address"}),p.jsx("input",{type:"email",value:t,onChange:u=>e(u.target.value),required:!0,placeholder:"Enter your email"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Password"}),p.jsx("input",{type:"password",value:n,onChange:u=>r(u.target.value),required:!0,placeholder:"Enter your password"})]}),p.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:i,children:i?"Logging in...":"Login"})]}),p.jsxs("p",{style:{textAlign:"center",marginTop:"15px"},children:["Don't have an account? ",p.jsx(vt,{to:"/register",children:"Register here"})]})]})})}function uD(){const[t,e]=O.useState({email:"",password:"",confirmPassword:"",fullName:"",address:"",contactNumber:"",isPriority:!1,priorityType:""}),[n,r]=O.useState(!1),i=ys(),s=l=>{const{name:u,value:c,type:h,checked:m}=l.target;e(g=>({...g,[u]:h==="checkbox"?m:c}))},o=async l=>{if(l.preventDefault(),t.password!==t.confirmPassword){ie.error("Passwords do not match");return}if(t.password.length<6){ie.error("Password must be at least 6 characters");return}r(!0);try{const c=(await Zk(Xt,t.email,t.password)).user;await nP(c,{displayName:t.fullName}),await vb(ln(lt,"users",c.uid),{fullName:t.fullName,email:t.email,address:t.address,contactNumber:t.contactNumber,isPriority:t.isPriority,priorityType:t.isPriority?t.priorityType:null,createdAt:new Date().toISOString(),role:"resident"}),ie.success("Registration successful!"),i("/dashboard")}catch(u){console.error(u),u.code==="auth/email-already-in-use"?ie.error("Email already registered"):ie.error("Registration failed. Please try again.")}finally{r(!1)}};return p.jsx("div",{className:"container",style:{maxWidth:"500px",marginTop:"50px"},children:p.jsxs("div",{className:"card",children:[p.jsx("h2",{style:{textAlign:"center",marginBottom:"20px"},children:"Register as Barangay Resident"}),p.jsxs("form",{onSubmit:o,children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Full Name"}),p.jsx("input",{type:"text",name:"fullName",value:t.fullName,onChange:s,required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Email Address"}),p.jsx("input",{type:"email",name:"email",value:t.email,onChange:s,required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Complete Address"}),p.jsx("input",{type:"text",name:"address",value:t.address,onChange:s,required:!0,placeholder:"Barangay Del Pilar, City of San Fernando"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Contact Number"}),p.jsx("input",{type:"tel",name:"contactNumber",value:t.contactNumber,onChange:s,required:!0})]}),p.jsx("div",{className:"form-group",children:p.jsxs("label",{children:[p.jsx("input",{type:"checkbox",name:"isPriority",checked:t.isPriority,onChange:s})," ","I belong to a priority group (Senior/PWD/Pregnant)"]})}),t.isPriority&&p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Priority Type"}),p.jsxs("select",{name:"priorityType",value:t.priorityType,onChange:s,required:!0,children:[p.jsx("option",{value:"",children:"Select..."}),p.jsx("option",{value:"senior",children:"Senior Citizen"}),p.jsx("option",{value:"pwd",children:"Person with Disability"}),p.jsx("option",{value:"pregnant",children:"Pregnant"})]})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Password"}),p.jsx("input",{type:"password",name:"password",value:t.password,onChange:s,required:!0})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Confirm Password"}),p.jsx("input",{type:"password",name:"confirmPassword",value:t.confirmPassword,onChange:s,required:!0})]}),p.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:n,children:n?"Registering...":"Register"})]}),p.jsxs("p",{style:{textAlign:"center",marginTop:"15px"},children:["Already have an account? ",p.jsx(vt,{to:"/login",children:"Login here"})]})]})})}function cD({currentQueueNumber:t}){return null}function dD(){var o,l;const[t,e]=O.useState(null),[n,r]=O.useState({pending:0,approved:0});O.useEffect(()=>{i()},[]);const i=async()=>{if(Xt.currentUser){const u=await gT(ln(lt,"users",Xt.currentUser.uid));u.exists()&&e(u.data())}},s=[{name:"Barangay Clearance",icon:Jn,requirements:"Valid ID, Cedula, Fee ₱20-₱100"},{name:"Certificate of Residency",icon:Jn,requirements:"Valid ID, Proof of Residence, Cedula"},{name:"Certificate of Indigency",icon:Jn,requirements:"Valid ID, Proof of Residency, Cedula"},{name:"Barangay Business Clearance",icon:Jn,requirements:"DTI/SEC, Valid ID, Cedula, Business Proof"},{name:"Barangay Permit",icon:Jn,requirements:"Written Request, Valid ID, Cedula"},{name:"Barangay ID",icon:Jn,requirements:"Proof of Residency, Birth Cert, Cedula, Photo"},{name:"Barangay Certification",icon:Jn,requirements:"Valid ID, Proof of Residency, Cedula"}];return p.jsx("div",{className:"container",children:p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"24px"},children:[p.jsxs("div",{children:[p.jsxs("div",{className:"card",children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[p.jsxs("h2",{style:{fontSize:"24px"},children:["Welcome, ",(t==null?void 0:t.fullName)||((o=Xt.currentUser)==null?void 0:o.displayName)||"Resident","!"]}),(t==null?void 0:t.isPriority)&&p.jsxs("span",{className:"priority-badge",children:["⭐ ",(l=t.priorityType)==null?void 0:l.toUpperCase()," Priority"]})]}),p.jsx("p",{style:{color:"#718096",marginBottom:"20px"},children:"Barangay Del Pilar, City of San Fernando, Pampanga"}),p.jsx(vt,{to:"/book",children:p.jsx("button",{className:"btn btn-primary",children:"+ Book New Appointment"})})]}),p.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[p.jsx("h3",{style:{marginBottom:"16px"},children:"📄 Available Documents"}),p.jsx("div",{className:"doc-grid",children:s.map((u,c)=>p.jsxs("div",{className:"doc-card",children:[p.jsx(u.icon,{size:20,color:"#667eea",style:{marginBottom:"8px"}}),p.jsx("strong",{style:{display:"block",marginBottom:"4px"},children:u.name}),p.jsx("small",{style:{color:"#718096"},children:u.requirements})]},c))})]})]}),p.jsxs("div",{children:[p.jsx(cD,{}),p.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[p.jsx("h3",{style:{marginBottom:"16px"},children:"⏰ Barangay Hours"}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[p.jsx("span",{children:"Monday - Friday"}),p.jsx("strong",{children:"8:00 AM - 5:00 PM"})]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[p.jsx("span",{children:"Saturday"}),p.jsx("strong",{children:"9:00 AM - 12:00 PM"})]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("span",{children:"Sunday"}),p.jsx("strong",{children:"Closed"})]}),p.jsx("hr",{style:{margin:"16px 0"}}),p.jsxs("div",{style:{fontSize:"13px",color:"#718096"},children:[p.jsx("p",{children:"⚠️ Please arrive 5 minutes before your scheduled time"}),p.jsx("p",{children:"⭐ Priority given to Seniors, PWDs, and Pregnant"})]})]})]})]})})}function hD({onUploadComplete:t,requirementType:e}){const[n,r]=O.useState(!1),[i,s]=O.useState(!1),[o,l]=O.useState(null),u=e?e.replace(/_/g," ").toUpperCase():"DOCUMENT",c=async h=>{const m=h.target.files[0];if(!m)return;if(!["image/jpeg","image/png","image/jpg"].includes(m.type)){l("Please upload JPEG or PNG files only");return}if(m.size>1*1024*1024){l("File size must be less than 1MB");return}r(!0),l(null);const x=new FileReader;x.onloadend=()=>{const P=x.result;t&&e&&t(e,P),s(!0),r(!1)},x.onerror=()=>{l("Failed to read file"),r(!1)},x.readAsDataURL(m)};return p.jsxs("div",{style:{marginBottom:"15px"},children:[p.jsx("label",{style:{display:"block",marginBottom:"5px",fontWeight:"bold"},children:u}),p.jsx("div",{style:{border:"2px dashed #ddd",borderRadius:"8px",padding:"20px",textAlign:"center",background:i?"#dcfce7":"#f9fafb"},children:i?p.jsxs("div",{children:[p.jsx(ti,{color:"#10b981",size:32,style:{margin:"0 auto"}}),p.jsx("p",{style:{color:"#10b981",marginTop:"10px"},children:"Uploaded successfully!"}),p.jsx("button",{onClick:()=>{s(!1),t&&e&&t(e,null)},style:{background:"#ef4444",color:"white",border:"none",padding:"5px 10px",borderRadius:"5px",cursor:"pointer",marginTop:"10px"},children:"Remove"})]}):p.jsxs("div",{children:[p.jsx(iD,{size:32,style:{margin:"0 auto",color:"#666"}}),p.jsx("input",{type:"file",accept:"image/jpeg,image/png,image/jpg",onChange:c,disabled:n,style:{marginTop:"10px"}}),n&&p.jsxs("div",{style:{marginTop:"10px"},children:[p.jsx(tD,{size:20,style:{animation:"spin 1s linear infinite",display:"inline-block"}}),p.jsx("span",{style:{marginLeft:"10px"},children:"Processing..."})]}),o&&p.jsxs("div",{style:{color:"#dc2626",marginTop:"10px",fontSize:"14px"},children:[p.jsx(mu,{size:16,style:{display:"inline",marginRight:"5px"}}),o]})]})})]})}class fa{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const fD=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},Ke={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:fD()},jp=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},pD=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=jp(t);Ke.publicKey=n.publicKey,Ke.blockHeadless=n.blockHeadless,Ke.storageProvider=n.storageProvider,Ke.blockList=n.blockList,Ke.limitRate=n.limitRate,Ke.origin=n.origin||e},IT=async(t,e,n={})=>{const r=await fetch(Ke.origin+t,{method:"POST",headers:n,body:e}),i=await r.text(),s=new fa(r.status,i);if(r.ok)return s;throw s},xT=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},mD=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},ST=t=>t.webdriver||!t.languages||t.languages.length===0,RT=()=>new fa(451,"Unavailable For Headless Browser"),gD=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},yD=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},vD=(t,e)=>t instanceof FormData?t.get(e):t[e],AT=(t,e)=>{if(yD(t))return!1;gD(t.list,t.watchVariable);const n=vD(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},kT=()=>new fa(403,"Forbidden"),_D=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},wD=async(t,e,n)=>{const r=Number(await n.get(t)||0);return e-Date.now()+r},PT=async(t,e,n)=>{if(!e.throttle||!n)return!1;_D(e.throttle,e.id);const r=e.id||t;return await wD(r,e.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},CT=()=>new fa(429,"Too Many Requests"),ED=async(t,e,n,r)=>{const i=jp(r),s=i.publicKey||Ke.publicKey,o=i.blockHeadless||Ke.blockHeadless,l=i.storageProvider||Ke.storageProvider,u={...Ke.blockList,...i.blockList},c={...Ke.limitRate,...i.limitRate};return o&&ST(navigator)?Promise.reject(RT()):(xT(s,t,e),mD(n),n&&AT(u,n)?Promise.reject(kT()):await PT(location.pathname,c,l)?Promise.reject(CT()):IT("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},TD=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},ID=t=>typeof t=="string"?document.querySelector(t):t,xD=async(t,e,n,r)=>{const i=jp(r),s=i.publicKey||Ke.publicKey,o=i.blockHeadless||Ke.blockHeadless,l=Ke.storageProvider||i.storageProvider,u={...Ke.blockList,...i.blockList},c={...Ke.limitRate,...i.limitRate};if(o&&ST(navigator))return Promise.reject(RT());const h=ID(n);xT(s,t,e),TD(h);const m=new FormData(h);return AT(u,m)?Promise.reject(kT()):await PT(location.pathname,c,l)?Promise.reject(CT()):(m.append("lib_version","4.4.1"),m.append("service_id",t),m.append("template_id",e),m.append("user_id",s),IT("/api/v1.0/email/send-form",m))},ic={init:pD,send:ED,sendForm:xD,EmailJSResponseStatus:fa},SD="c0taJ8w7N3Mpz-NVO",Mp="service_bumf59n",Fp="template_jl1jbvr";ic.init(SD);const RD=t=>({"Barangay Clearance":`✓ Valid ID
✓ Cedula
✓ Barangay fee (P20-P100)`,"Certificate of Residency":`✓ Valid ID with address
✓ Proof of residence
✓ Cedula`,"Certificate of Indigency":`✓ Valid ID
✓ Proof of residency
✓ Cedula
✓ Barangay interview`,"Barangay Business Clearance":`✓ DTI/SEC registration
✓ Valid ID
✓ Cedula
✓ Business address proof`,"Barangay Permit":`✓ Written request
✓ Valid ID
✓ Cedula
✓ Activity description`,"Barangay ID":`✓ Proof of residency
✓ Birth certificate
✓ Cedula
✓ 1x1 photo`,"Barangay Certification":`✓ Valid ID
✓ Proof of residency
✓ Cedula`})[t]||`✓ Valid ID
✓ Proof of residency
✓ Cedula`,AD=async(t,e,n)=>{const r={to_email:t,to_name:e,subject:`✅ Appointment Approved - Queue #${n.queueNumber}`,message:"Your appointment has been approved! Please find your appointment details below.",queue_number:n.queueNumber,document_type:n.documentType,appointment_date:n.date,appointment_time:n.time,barangay:"Barangay Del Pilar, City of San Fernando",requirements:n.requirements,comments:""};try{const i=await ic.send(Mp,Fp,r);return console.log("Approval email sent:",i),{success:!0}}catch(i){return console.error("Email error:",i),{success:!1}}},kD=async(t,e,n,r)=>{const i={to_email:t,to_name:e,subject:`❌ Appointment Rejected - ${n}`,message:"Your appointment request has been rejected. Please review the comments below.",queue_number:"",document_type:n,appointment_date:"",appointment_time:"",barangay:"Barangay Del Pilar, City of San Fernando",requirements:"",comments:r};try{const s=await ic.send(Mp,Fp,i);return console.log("Rejection email sent:",s),{success:!0}}catch(s){return console.error("Email error:",s),{success:!1}}},PD=async(t,e,n)=>{const r={to_email:t,to_name:e,subject:`📋 Appointment Request Received - ${n.documentType}`,message:"Your appointment request has been received and is pending admin approval. You will receive another email once approved or rejected.",queue_number:"Pending",document_type:n.documentType,appointment_date:n.date,appointment_time:n.time,barangay:"Barangay Del Pilar, City of San Fernando",requirements:RD(n.documentType),comments:""};try{const i=await ic.send(Mp,Fp,r);return console.log("Booking confirmation email sent:",i),{success:!0}}catch(i){return console.error("Email error:",i),{success:!1}}};function CD(){const t=ys(),[e,n]=O.useState(!1),[r,i]=O.useState(null),[s,o]=O.useState(null),[l,u]=O.useState({}),[c,h]=O.useState({documentType:"",preferredDate:"",preferredTime:"",notes:""}),[m,g]=O.useState([]),[x,P]=O.useState([]),[N,k]=O.useState(!1),[I,w]=O.useState(6),S={"Barangay Clearance":["Valid ID","Cedula"],"Certificate of Residency":["Valid ID with address","Proof of residence","Cedula"],"Certificate of Indigency":["Valid ID","Proof of residency","Cedula"],"Barangay Business Clearance":["DTI/SEC registration","Valid ID","Cedula","Business address proof"],"Barangay Permit":["Written request","Valid ID","Cedula","Activity description"],"Barangay ID":["Proof of residency","Birth certificate","Cedula","1x1 or 2x2 photo"],"Barangay Certification":["Valid ID","Proof of residency","Cedula","Purpose of certification"]},D=["8:00 AM","9:00 AM","10:00 AM","11:00 AM","1:00 PM","2:00 PM","3:00 PM","4:00 PM"];O.useEffect(()=>{const _=Xt.currentUser;_?(o(_),M(_.uid)):t("/login"),U()},[]),O.useEffect(()=>{c.preferredDate&&E(c.preferredDate)},[c.preferredDate]);const M=async _=>{try{const G=await gT(ln(lt,"users",_));G.exists()&&i(G.data())}catch(G){console.error("Error fetching user data:",G)}},U=()=>{const _=[],G=new Date;for(let le=1;le<=14;le++){const be=new Date(G);be.setDate(G.getDate()+le),be.getDay()!==0&&_.push(be.toISOString().split("T")[0])}g(_)},E=async _=>{k(!0);try{const G=ei(lt,"appointments"),le=qo(G,sn("date","==",_),sn("status","in",["approved","pending","processing"])),be=await Ho(le),pe={};D.forEach($=>{pe[$]=0}),be.forEach($=>{const Q=$.data();Q.time&&pe[Q.time]!==void 0&&pe[Q.time]++});const B=D.filter($=>pe[$]<I);P(B),c.preferredTime&&!B.includes(c.preferredTime)&&h($=>({...$,preferredTime:""}))}catch(G){console.error("Error fetching time slots:",G),P(D)}finally{k(!1)}},v=(_,G)=>{u(le=>({...le,[_]:G}))},R=_=>{h({...c,[_.target.name]:_.target.value})},A=()=>{const _=S[c.documentType];if(!_)return!1;for(let G of _)if(!l[G])return ie.error(`Please upload: ${G}`),!1;return!0},C=async _=>{if(_.preventDefault(),!s){ie.error("Please login first"),t("/login");return}if(!c.documentType){ie.error("Please select a document type");return}if(!c.preferredDate){ie.error("Please select a date");return}if(!c.preferredTime){ie.error("Please select a time");return}if(A()){n(!0);try{const G=ei(lt,"appointments"),le=qo(G,sn("date","==",c.preferredDate),sn("time","==",c.preferredTime),sn("status","in",["approved","pending","processing"]));if((await Ho(le)).size>=I){ie.error(`This time slot is fully booked. Max ${I} appointments per hour.`),n(!1),E(c.preferredDate);return}const pe=(r==null?void 0:r.fullName)||s.displayName||"Resident",B=s.email,$={userId:s.uid,userEmail:B,userName:pe,documentType:c.documentType,date:c.preferredDate,time:c.preferredTime,status:"pending",isPriority:(r==null?void 0:r.isPriority)||!1,priorityType:(r==null?void 0:r.priorityType)||null,notes:c.notes,uploadedFiles:l,requirements:S[c.documentType]||[],createdAt:new Date().toISOString(),adminComments:null};await _b(ei(lt,"appointments"),$);try{await PD(B,pe,{documentType:c.documentType,date:c.preferredDate,time:c.preferredTime})}catch(Q){console.error("Email sending failed:",Q)}ie.success("✅ Appointment request submitted! Waiting for admin approval.",{duration:5e3}),u({}),h({documentType:"",preferredDate:"",preferredTime:"",notes:""}),setTimeout(()=>{t("/appointments")},2e3)}catch(G){console.error("Error booking appointment:",G),ie.error("Failed to submit appointment. Please try again.")}finally{n(!1)}}},T=["Barangay Clearance","Certificate of Residency","Certificate of Indigency","Barangay Business Clearance","Barangay Permit","Barangay ID","Barangay Certification"];return s?p.jsx("div",{className:"container",style:{maxWidth:"1400px"},children:p.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[p.jsxs("div",{className:"card",style:{flex:"0 0 320px"},children:[p.jsx("h3",{style:{marginBottom:"16px",color:"#2d3748"},children:"ℹ️ Queue Information"}),p.jsxs("div",{style:{fontSize:"14px",lineHeight:"1.6",color:"#4a5568"},children:[p.jsxs("div",{style:{marginBottom:"16px",padding:"12px",background:"#f0f9ff",borderRadius:"8px",borderLeft:"4px solid #3b82f6"},children:[p.jsx("p",{style:{margin:"0 0 8px 0",fontWeight:"600",color:"#1e40af"},children:"Priority For Seniors, PWDs, and Pregnant Woman"}),p.jsx("p",{style:{margin:0,fontSize:"13px"},children:"Seniors/PWDs/Pregnant are placed at the top of the waiting list"})]}),p.jsxs("div",{style:{marginBottom:"16px",padding:"12px",background:"#f0fdf4",borderRadius:"8px",borderLeft:"4px solid #22c55e"},children:[p.jsx("p",{style:{margin:"0 0 8px 0",fontWeight:"600",color:"#15803d"},children:"🔄 FIFO System"}),p.jsx("p",{style:{margin:0,fontSize:"13px"},children:"First-in, first-out for regular residentsz"})]}),p.jsxs("div",{style:{marginBottom:"16px",padding:"12px",background:"#fef3c7",borderRadius:"8px",borderLeft:"4px solid #f59e0b"},children:[p.jsx("p",{style:{margin:"0 0 8px 0",fontWeight:"600",color:"#d97706"},children:"⚠️ No-Show Policy"}),p.jsx("p",{style:{margin:0,fontSize:"13px"},children:"If you don't arrive within 5 minutes, you will be bumped down 3 slots"})]}),p.jsxs("div",{style:{marginBottom:"16px",padding:"12px",background:"#fdf2f8",borderRadius:"8px",borderLeft:"4px solid #ec4899"},children:[p.jsx("p",{style:{margin:"0 0 8px 0",fontWeight:"600",color:"#be185d"},children:"⏱️ Estimated Wait Time"}),p.jsx("p",{style:{margin:0,fontSize:"13px"},children:"Based on 8-12 minutes per document (Mean Service Time)"})]})]})]}),p.jsxs("div",{className:"card",style:{flex:1},children:[p.jsx("h2",{style:{textAlign:"center",marginBottom:"8px"},children:"Book an Appointment"}),p.jsx("p",{style:{textAlign:"center",color:"#718096",marginBottom:"24px"},children:"Fill out the form below to request a document"}),p.jsxs("div",{style:{background:"#ebf8ff",padding:"16px",borderRadius:"16px",marginBottom:"24px"},children:[p.jsxs("p",{style:{margin:0,fontSize:"14px"},children:["📧 Confirmation will be sent to: ",p.jsx("strong",{children:s==null?void 0:s.email})]}),p.jsx("p",{style:{margin:"8px 0 0",fontSize:"13px",color:"#4a5568"},children:"⏳ After submission, admin will review your requirements."}),p.jsxs("p",{style:{margin:"8px 0 0",fontSize:"12px",color:"#667eea"},children:["📅 Max ",I," appointments per hour slot."]})]}),p.jsxs("form",{onSubmit:C,children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Document Type *"}),p.jsxs("select",{name:"documentType",value:c.documentType,onChange:R,required:!0,children:[p.jsx("option",{value:"",children:"Select document type"}),T.map(_=>p.jsx("option",{value:_,children:_},_))]})]}),c.documentType&&S[c.documentType]&&p.jsxs("div",{style:{background:"#fefcbf",padding:"20px",borderRadius:"16px",marginBottom:"20px"},children:[p.jsx("h4",{style:{marginTop:0,marginBottom:"16px"},children:"📄 Required Documents - Please Upload:"}),S[c.documentType].map((_,G)=>p.jsx(hD,{requirementType:_,onUploadComplete:v},G))]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Preferred Date *"}),p.jsxs("select",{name:"preferredDate",value:c.preferredDate,onChange:R,required:!0,children:[p.jsx("option",{value:"",children:"Select date"}),m.map(_=>p.jsx("option",{value:_,children:_},_))]})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Preferred Time *"}),p.jsxs("select",{name:"preferredTime",value:c.preferredTime,onChange:R,required:!0,disabled:N,children:[p.jsx("option",{value:"",children:"Select time"}),N?p.jsx("option",{disabled:!0,children:"Loading available slots..."}):x.map(_=>p.jsx("option",{value:_,children:_},_))]}),!N&&x.length===0&&c.preferredDate&&p.jsx("p",{style:{fontSize:"12px",color:"#ef4444",marginTop:"8px"},children:"No available slots for this date. Please select another date."})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{children:"Additional Notes (Optional)"}),p.jsx("textarea",{name:"notes",value:c.notes,onChange:R,rows:"3",placeholder:"Any special requests or additional information..."})]}),p.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:e,children:e?"Submitting...":"Submit Appointment Request"})]})]}),p.jsxs("div",{className:"card",style:{flex:"0 0 350px"},children:[p.jsx("h3",{style:{marginBottom:"16px",color:"#2d3748"},children:"🔒 Data Privacy Act Compliance"}),p.jsxs("div",{style:{fontSize:"14px",lineHeight:"1.6",color:"#4a5568"},children:[p.jsxs("p",{style:{marginBottom:"12px"},children:[p.jsx("strong",{children:"Data Privacy Notice:"})," Your personal information is collected and processed in accordance with Republic Act No. 10173 (Data Privacy Act of 2012) and its implementing rules and regulations."]}),p.jsxs("p",{style:{marginBottom:"12px"},children:[p.jsx("strong",{children:"Purpose:"})," The information you provide will be used solely for processing your barangay document requests and appointment scheduling."]}),p.jsxs("p",{style:{marginBottom:"12px"},children:[p.jsx("strong",{children:"Data Protection:"})," All personal data is secured and will not be shared with third parties without your consent, except as required by law."]}),p.jsxs("p",{style:{marginBottom:"12px"},children:[p.jsx("strong",{children:"Your Rights:"})," You have the right to access, correct, or request deletion of your personal data. Contact the barangay office for any privacy-related concerns."]}),p.jsxs("p",{style:{marginBottom:"12px"},children:[p.jsx("strong",{children:"Consent:"})," By submitting this form, you consent to the collection and processing of your personal information for the stated purposes."]}),p.jsx("div",{style:{background:"#f7fafc",padding:"12px",borderRadius:"8px",marginTop:"16px"},children:p.jsxs("p",{style:{margin:0,fontSize:"13px",fontStyle:"italic"},children:["📞 For privacy concerns: Contact Barangay Office",p.jsx("br",{}),"📧 Email: privacy@barangay.gov.ph"]})})]})]})]})}):p.jsx("div",{className:"container",children:p.jsx("div",{className:"card",children:"Loading..."})})}function ND(){const[t,e]=O.useState([]),[n,r]=O.useState(!0),[i,s]=O.useState(null),[o,l]=O.useState(null);O.useEffect(()=>{const m=Xt.currentUser;m?(l(m),u(m.uid),console.log("Current user UID:",m.uid)):r(!1)},[]);const u=async m=>{try{console.log("Fetching appointments for userId:",m);const g=ei(lt,"appointments"),x=qo(g,sn("userId","==",m)),P=await Ho(x),N=[];P.forEach(k=>{N.push({id:k.id,...k.data()}),console.log("Found appointment:",k.data())}),console.log("Total appointments found:",N.length),e(N)}catch(g){console.error("Error fetching appointments:",g)}finally{r(!1)}},c=m=>{switch(m){case"pending":return{icon:p.jsx(eD,{color:"#f59e0b",size:20}),text:"Pending Approval",color:"#f59e0b",bg:"#fef3c7"};case"approved":return{icon:p.jsx(ti,{color:"#10b981",size:20}),text:"Approved",color:"#10b981",bg:"#dcfce7"};case"rejected":return{icon:p.jsx(mu,{color:"#dc2626",size:20}),text:"Rejected",color:"#dc2626",bg:"#fee2e2"};default:return{icon:null,text:m,color:"#666",bg:"#f3f4f6"}}},h=m=>{s(m)};return n?p.jsx("div",{className:"container",style:{textAlign:"center",marginTop:"50px"},children:p.jsx("div",{className:"card",children:"Loading appointments..."})}):o?p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"card",children:[p.jsx("h2",{style:{marginBottom:"20px"},children:"My Appointments"}),t.length===0?p.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[p.jsx("p",{children:"No appointment requests found."}),p.jsxs("p",{style:{fontSize:"14px",color:"#666",marginTop:"10px"},children:["Your User ID: ",o==null?void 0:o.uid]}),p.jsx("button",{onClick:()=>window.location.href="/book",className:"btn btn-primary",style:{marginTop:"15px"},children:"Book Your First Appointment"})]}):p.jsxs(p.Fragment,{children:[p.jsxs("p",{style:{marginBottom:"15px",color:"#666"},children:["Found ",t.length," appointment(s) for ",o==null?void 0:o.email]}),t.map(m=>{const g=c(m.status);return p.jsx("div",{style:{border:`1px solid ${g.color}`,borderRadius:"8px",padding:"15px",marginBottom:"15px",background:g.bg},children:p.jsxs("div",{children:[p.jsx("h3",{style:{marginBottom:"10px"},children:m.documentType}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"10px"},children:[g.icon,p.jsx("span",{style:{fontWeight:"bold",color:g.color},children:g.text})]}),p.jsxs("div",{style:{fontSize:"13px",color:"#666",marginBottom:"10px"},children:["Submitted: ",new Date(m.createdAt).toLocaleString()]}),m.status==="approved"&&m.date&&p.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",marginTop:"10px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[p.jsx(Op,{size:16}),p.jsxs("span",{children:[p.jsx("strong",{children:"Date:"})," ",m.date]})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[p.jsx(Vp,{size:16}),p.jsxs("span",{children:[p.jsx("strong",{children:"Time:"})," ",m.time]})]}),m.queueNumber&&p.jsxs("div",{children:[p.jsx("strong",{children:"Queue #:"})," ",p.jsx("span",{style:{fontSize:"18px",fontWeight:"bold",color:"#4f46e5"},children:m.queueNumber})]})]}),m.status==="pending"&&p.jsxs("div",{style:{marginTop:"10px",padding:"10px",background:"#fef3c7",borderRadius:"5px"},children:[p.jsx("strong",{children:"⏳ Status:"})," Waiting for admin approval.",p.jsx("br",{}),p.jsxs("small",{children:["Requested date: ",m.date||"Not set"," at ",m.time||"Not set"]})]}),m.status==="rejected"&&m.adminComments&&p.jsxs("div",{style:{marginTop:"10px",padding:"10px",background:"white",borderRadius:"5px",border:"1px solid #fee2e2"},children:[p.jsx("strong",{style:{color:"#dc2626"},children:"❌ Reason for rejection:"}),p.jsx("p",{style:{marginTop:"5px",color:"#333"},children:m.adminComments}),p.jsx("button",{onClick:()=>window.location.href="/book",style:{marginTop:"10px",background:"#4f46e5",color:"white",border:"none",padding:"5px 10px",borderRadius:"5px",cursor:"pointer"},children:"Resubmit Appointment"})]}),m.uploadedFiles&&Object.keys(m.uploadedFiles).length>0&&p.jsxs("button",{onClick:()=>h(m.uploadedFiles),style:{marginTop:"10px",background:"#4f46e5",color:"white",border:"none",padding:"5px 10px",borderRadius:"5px",cursor:"pointer",display:"flex",alignItems:"center",gap:"5px"},children:[p.jsx(ET,{size:16})," View Uploaded Documents"]})]})},m.id)})]})]}),i&&p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,overflow:"auto"},children:p.jsxs("div",{className:"card",style:{maxWidth:"600px",width:"90%",maxHeight:"80vh",overflow:"auto",position:"relative"},children:[p.jsx("h3",{children:"Uploaded Documents"}),p.jsx("button",{onClick:()=>s(null),style:{position:"absolute",top:"10px",right:"10px",background:"#ef4444",color:"white",border:"none",borderRadius:"50%",width:"30px",height:"30px",cursor:"pointer",fontSize:"16px"},children:"×"}),p.jsx("div",{style:{marginTop:"20px"},children:Object.entries(i).map(([m,g])=>p.jsxs("div",{style:{margin:"15px 0",padding:"15px",background:"#f3f4f6",borderRadius:"8px"},children:[p.jsxs("strong",{children:[m,":"]}),g&&g.startsWith("data:image")?p.jsx("img",{src:g,alt:m,style:{maxWidth:"100%",maxHeight:"200px",borderRadius:"8px",marginTop:"10px"}}):p.jsx("p",{style:{marginTop:"10px",color:"#666"},children:"File uploaded"})]},m))})]})})]}):p.jsx("div",{className:"container",style:{textAlign:"center",marginTop:"50px"},children:p.jsxs("div",{className:"card",children:[p.jsx("p",{children:"Please login to view your appointments."}),p.jsx("button",{onClick:()=>window.location.href="/login",className:"btn btn-primary",style:{marginTop:"15px"},children:"Login"})]})})}function bD(){const[t,e]=O.useState([]),[n,r]=O.useState(null),[i,s]=O.useState(0),[o,l]=O.useState(new Date().toISOString().split("T")[0]),[u,c]=O.useState([]),[h,m]=O.useState(!1);O.useEffect(()=>{const k=Xt.currentUser;(k==null?void 0:k.email)==="ieproject83@gmail.com"&&m(!0),g()},[]),O.useEffect(()=>{const k=qo(ei(lt,"appointments"),sn("status","in",["approved","processing"]),sn("date","==",o),mb("queueNumber","asc")),I=wb(k,w=>{const S=[];w.forEach(E=>{S.push({id:E.id,...E.data()})});const D=S.sort((E,v)=>E.isPriority&&!v.isPriority?-1:!E.isPriority&&v.isPriority?1:(E.queueNumber||999)-(v.queueNumber||999));e(D);const M=D.find(E=>E.status==="processing");r(M);const U=D.filter(E=>E.status==="approved").length;s(U*10)});return()=>I()},[o]);const g=()=>{const k=[],I=new Date;for(let w=0;w<=7;w++){const S=new Date(I);S.setDate(I.getDate()+w),S.getDay()!==0&&k.push(S.toISOString().split("T")[0])}c(k)},x=async k=>{if(!h){ie.error("Only admins can perform this action");return}try{await Ui(ln(lt,"appointments",k.id),{status:"processing",startedAt:new Date().toISOString()}),ie.success(`🎯 Now serving Queue #${k.queueNumber}`)}catch{ie.error("Failed to start serving")}},P=async k=>{if(!h){ie.error("Only admins can perform this action");return}try{const I=new Date,w=new Date(k.startedAt),S=Math.round((I-w)/6e4);await Ui(ln(lt,"appointments",k.id),{status:"completed",completedAt:I.toISOString(),actualWaitTime:S}),ie.success(`✅ Queue #${k.queueNumber} completed in ${S} minutes`)}catch{ie.error("Failed to complete")}},N=(k,I)=>{if(k)switch(I){case"senior":return"👴 Senior Citizen";case"pwd":return"♿ PWD";case"pregnant":return"🤰 Pregnant";default:return"⭐ Priority"}return"Regular"};return p.jsxs("div",{className:"container",children:[p.jsx("div",{className:"card",style:{marginBottom:"20px"},children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"},children:[p.jsx(Op,{size:20,color:"#667eea"}),p.jsx("select",{value:o,onChange:k=>l(k.target.value),style:{padding:"10px 16px",borderRadius:"12px",border:"2px solid #e2e8f0",flex:1},children:u.map(k=>p.jsx("option",{value:k,children:new Date(k).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})},k))}),p.jsx(nD,{size:18,color:"#718096",style:{cursor:"pointer"},onClick:()=>window.location.reload()})]})}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[p.jsxs("div",{className:"card",style:{textAlign:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white"},children:[p.jsx("h3",{style:{color:"white",marginBottom:"16px"},children:"Now Serving"}),n?p.jsxs(p.Fragment,{children:[p.jsxs("div",{style:{fontSize:"72px",fontWeight:"800",margin:"20px 0"},children:["#",n.queueNumber]}),p.jsx("p",{children:p.jsx("strong",{children:n.documentType})}),p.jsx("p",{children:n.userName}),n.isPriority&&p.jsx("span",{style:{background:"rgba(255,255,255,0.2)",padding:"4px 12px",borderRadius:"20px",display:"inline-block",marginTop:"10px",fontSize:"12px"},children:N(n.isPriority,n.priorityType)}),h&&n.status==="processing"&&p.jsxs("button",{onClick:()=>P(n),style:{marginTop:"16px",background:"#10b981",color:"white",border:"none",padding:"8px 20px",borderRadius:"40px",cursor:"pointer",fontWeight:"600",display:"inline-flex",alignItems:"center",gap:"8px"},children:[p.jsx(ti,{size:16})," Complete"]})]}):p.jsxs("div",{style:{padding:"40px 0"},children:[p.jsx(sD,{size:48,style:{margin:"0 auto",opacity:.7}}),p.jsx("p",{style:{marginTop:"16px"},children:"No one is currently being served"})]})]}),p.jsx("div",{children:p.jsxs("div",{className:"card",children:[p.jsx("h3",{style:{marginBottom:"16px"},children:"Queue Statistics"}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[p.jsxs("div",{style:{textAlign:"center",padding:"20px",background:"#f7fafc",borderRadius:"16px"},children:[p.jsx(Lp,{size:32,style:{margin:"0 auto",color:"#667eea"}}),p.jsx("h4",{style:{marginTop:"8px"},children:"Waiting"}),p.jsx("p",{style:{fontSize:"28px",fontWeight:"bold"},children:t.filter(k=>k.status==="approved").length})]}),p.jsxs("div",{style:{textAlign:"center",padding:"20px",background:"#f7fafc",borderRadius:"16px"},children:[p.jsx(Vp,{size:32,style:{margin:"0 auto",color:"#667eea"}}),p.jsx("h4",{style:{marginTop:"8px"},children:"Est. Wait Time"}),p.jsxs("p",{style:{fontSize:"28px",fontWeight:"bold"},children:[i," min"]})]})]})]})})]}),p.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[p.jsx("h3",{style:{marginBottom:"16px"},children:"Complete Queue"}),p.jsx("div",{style:{overflowX:"auto"},children:p.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[p.jsx("thead",{children:p.jsxs("tr",{style:{borderBottom:"2px solid #e2e8f0",textAlign:"left"},children:[p.jsx("th",{style:{padding:"12px"},children:"Queue #"}),p.jsx("th",{style:{padding:"12px"},children:"Document Type"}),p.jsx("th",{style:{padding:"12px"},children:"Name"}),p.jsx("th",{style:{padding:"12px"},children:"Time"}),p.jsx("th",{style:{padding:"12px"},children:"Priority"}),p.jsx("th",{style:{padding:"12px"},children:"Status"}),h&&p.jsx("th",{style:{padding:"12px"},children:"Actions"})]})}),p.jsxs("tbody",{children:[t.map(k=>p.jsxs("tr",{style:{borderBottom:"1px solid #e2e8f0"},children:[p.jsxs("td",{style:{padding:"12px",fontWeight:"bold"},children:["#",k.queueNumber]}),p.jsx("td",{style:{padding:"12px"},children:k.documentType}),p.jsx("td",{style:{padding:"12px"},children:k.userName}),p.jsx("td",{style:{padding:"12px"},children:k.time||"—"}),p.jsx("td",{style:{padding:"12px"},children:N(k.isPriority,k.priorityType)}),p.jsx("td",{style:{padding:"12px"},children:k.status==="processing"?p.jsx("span",{style:{color:"#667eea"},children:"🔵 Being Served"}):p.jsx("span",{style:{color:"#10b981"},children:"🟢 Waiting"})}),h&&p.jsxs("td",{style:{padding:"12px"},children:[k.status==="approved"&&p.jsxs("button",{onClick:()=>x(k),style:{background:"#3b82f6",color:"white",border:"none",padding:"6px 12px",borderRadius:"8px",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"12px"},children:[p.jsx(TT,{size:14})," Start Serving"]}),k.status==="processing"&&p.jsxs("button",{onClick:()=>P(k),style:{background:"#10b981",color:"white",border:"none",padding:"6px 12px",borderRadius:"8px",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"12px"},children:[p.jsx(ti,{size:14})," Complete"]})]})]},k.id)),t.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:h?7:6,style:{padding:"40px",textAlign:"center",color:"#718096"},children:"No appointments scheduled for this date"})})]})]})})]}),p.jsxs("div",{className:"card",style:{marginTop:"24px",background:"#ebf8ff"},children:[p.jsx("h4",{style:{marginBottom:"12px"},children:"ℹ️ Queue Information"}),p.jsxs("ul",{style:{marginLeft:"20px",lineHeight:"1.8",fontSize:"14px"},children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Non-preemptive Priority:"})," Seniors/PWDs/Pregnant are placed at the top of the waiting list"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"FIFO System:"})," First-in, first-out for regular residents"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"No-Show Policy:"})," If you don't arrive within 5 minutes, you will be bumped down 3 slots"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Estimated wait time:"})," Based on 8-12 minutes per document (Mean Service Time)"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Queue refreshes automatically"})," every few seconds"]})]})]})]})}function DD(){const[t,e]=O.useState([]),[n,r]=O.useState(null),[i,s]=O.useState(""),[o,l]=O.useState(!1),[u,c]=O.useState(null),[h,m]=O.useState(!1),[g,x]=O.useState("all"),[P,N]=O.useState({total:0,pending:0,approved:0,processing:0,completed:0,rejected:0}),[k,I]=O.useState("");O.useEffect(()=>{var G;if(((G=Xt.currentUser)==null?void 0:G.email)!=="ieproject83@gmail.com"){ie.error("Access denied. Admin only."),window.location.href="/dashboard";return}const T=async()=>{const le=ei(lt,"appointments"),be=await Ho(le),pe=[];be.forEach($=>{pe.push({id:$.id,...$.data()})});const B=pe.sort(($,Q)=>new Date(Q.createdAt)-new Date($.createdAt));e(B),N({total:B.length,pending:B.filter($=>$.status==="pending").length,approved:B.filter($=>$.status==="approved").length,processing:B.filter($=>$.status==="processing").length,completed:B.filter($=>$.status==="completed").length,rejected:B.filter($=>$.status==="rejected").length})};T();const _=setInterval(T,1e4);return()=>clearInterval(_)},[]);const w=async T=>{var _;try{const be=["8:00 AM","9:00 AM","10:00 AM","11:00 AM","1:00 PM","2:00 PM","3:00 PM","4:00 PM"].indexOf(T.time);if(be===-1)throw new Error("Invalid time slot");const pe=be*6+1,B=T.date,$=ei(lt,"appointments"),Q=qo($,sn("date","==",B),sn("time","==",T.time)),ue=(await Ho(Q)).docs.filter(Ot=>{const Bt=Ot.data();return["approved","processing","completed"].includes(Bt.status)&&Ot.id!==T.id}).length,me=pe+ue;await Ui(ln(lt,"appointments",T.id),{status:"approved",queueNumber:me,approvedAt:new Date().toISOString(),adminComments:null}),await AD(T.userEmail,T.userName,{queueNumber:me,documentType:T.documentType,date:T.date,time:T.time,requirements:((_=T.requirements)==null?void 0:_.join(", "))||"Valid ID and Cedula"}),ie.success(`✅ ${T.userName} approved! Queue #${me}. Email sent.`)}catch(G){console.error("Error approving appointment:",G),ie.error("Failed to approve appointment. Please try again.")}},S=async T=>{try{await Ui(ln(lt,"appointments",T.id),{status:"processing",startedAt:new Date().toISOString()}),ie.success(`🎯 Now serving Queue #${T.queueNumber} - Started at: ${new Date().toLocaleTimeString()}`)}catch{ie.error("Failed to start serving")}},D=async T=>{try{const _=new Date,G=new Date(T.startedAt),le=Math.round((_-G)/6e4);await Ui(ln(lt,"appointments",T.id),{status:"completed",completedAt:_.toISOString(),actualWaitTime:le,startTime:T.startedAt,endTime:_.toISOString()}),ie.success(`✅ Queue #${T.queueNumber} completed in ${le} minutes`)}catch{ie.error("Failed to complete")}},M=async()=>{if(!i.trim()){ie.error("Please provide a reason");return}try{await Ui(ln(lt,"appointments",n.id),{status:"rejected",adminComments:i,rejectedAt:new Date().toISOString()}),await kD(n.userEmail,n.userName,n.documentType,i),ie.success(`❌ ${n.userName} rejected.`),l(!1),s(""),r(null)}catch{ie.error("Failed to reject")}},U=T=>{c(T),m(!0)},E=()=>{let T=t;return g!=="all"&&(T=T.filter(_=>_.status===g)),k&&(T=T.filter(_=>{var G,le,be,pe;return((G=_.userName)==null?void 0:G.toLowerCase().includes(k.toLowerCase()))||((le=_.userEmail)==null?void 0:le.toLowerCase().includes(k.toLowerCase()))||((be=_.documentType)==null?void 0:be.toLowerCase().includes(k.toLowerCase()))||((pe=_.queueNumber)==null?void 0:pe.toString().includes(k))})),T},v=T=>{switch(T){case"pending":return p.jsx("span",{style:{background:"#fef3c7",color:"#92400e",padding:"4px 12px",borderRadius:"20px",fontSize:"12px",fontWeight:"500"},children:"⏳ Pending"});case"approved":return p.jsx("span",{style:{background:"#dcfce7",color:"#166534",padding:"4px 12px",borderRadius:"20px",fontSize:"12px",fontWeight:"500"},children:"✅ Approved"});case"processing":return p.jsx("span",{style:{background:"#dbeafe",color:"#1e40af",padding:"4px 12px",borderRadius:"20px",fontSize:"12px",fontWeight:"500"},children:"⚙️ Processing"});case"completed":return p.jsx("span",{style:{background:"#ede9fe",color:"#6d28d9",padding:"4px 12px",borderRadius:"20px",fontSize:"12px",fontWeight:"500"},children:"🎉 Completed"});case"rejected":return p.jsx("span",{style:{background:"#fee2e2",color:"#991b1b",padding:"4px 12px",borderRadius:"20px",fontSize:"12px",fontWeight:"500"},children:"❌ Rejected"});default:return p.jsx("span",{children:T})}},R=(T,_)=>{if(T){const G={senior:"👴 Senior",pwd:"♿ PWD",pregnant:"🤰 Pregnant"};return p.jsx("span",{style:{background:"#ef4444",color:"white",padding:"2px 8px",borderRadius:"20px",fontSize:"10px",marginLeft:"8px"},children:G[_]||"Priority"})}return null},A=T=>{if(!T)return"—";try{return new Date(T).toLocaleTimeString()}catch{return"—"}},C=T=>{var le;const _=g===T,G={all:{active:{background:"#4f46e5",color:"white",border:"none"},inactive:{background:"white",color:"#4f46e5",border:"1px solid #4f46e5"}},pending:{active:{background:"#f59e0b",color:"white",border:"none"},inactive:{background:"white",color:"#f59e0b",border:"1px solid #f59e0b"}},approved:{active:{background:"#10b981",color:"white",border:"none"},inactive:{background:"white",color:"#10b981",border:"1px solid #10b981"}},processing:{active:{background:"#3b82f6",color:"white",border:"none"},inactive:{background:"white",color:"#3b82f6",border:"1px solid #3b82f6"}},completed:{active:{background:"#8b5cf6",color:"white",border:"none"},inactive:{background:"white",color:"#8b5cf6",border:"1px solid #8b5cf6"}},rejected:{active:{background:"#ef4444",color:"white",border:"none"},inactive:{background:"white",color:"#ef4444",border:"1px solid #ef4444"}}};return((le=G[T])==null?void 0:le[_?"active":"inactive"])||G.all.inactive};return p.jsxs("div",{className:"container",style:{maxWidth:"1400px"},children:[p.jsxs("div",{style:{marginBottom:"24px"},children:[p.jsx("h1",{style:{fontSize:"28px",marginBottom:"8px",color:"#1a1a2e"},children:"🏛️ Admin Dashboard"}),p.jsx("p",{style:{color:"#4a5568"},children:"Queue Management System | Barangay Del Pilar"})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"12px",marginBottom:"24px"},children:[p.jsxs("div",{className:"card",style:{textAlign:"center",padding:"16px",background:"white"},children:[p.jsx(Lp,{size:24,style:{margin:"0 auto",color:"#4f46e5"}}),p.jsx("h4",{style:{margin:"8px 0",color:"#333"},children:"Total"}),p.jsx("p",{style:{fontSize:"24px",fontWeight:"bold",color:"#333"},children:P.total})]}),p.jsxs("div",{className:"card",style:{textAlign:"center",padding:"16px",background:"#fef3c7"},children:[p.jsx(Vp,{size:24,style:{margin:"0 auto",color:"#f59e0b"}}),p.jsx("h4",{style:{margin:"8px 0",color:"#92400e"},children:"Pending"}),p.jsx("p",{style:{fontSize:"24px",fontWeight:"bold",color:"#92400e"},children:P.pending})]}),p.jsxs("div",{className:"card",style:{textAlign:"center",padding:"16px",background:"#dcfce7"},children:[p.jsx(ti,{size:24,style:{margin:"0 auto",color:"#10b981"}}),p.jsx("h4",{style:{margin:"8px 0",color:"#166534"},children:"Approved"}),p.jsx("p",{style:{fontSize:"24px",fontWeight:"bold",color:"#166534"},children:P.approved})]}),p.jsxs("div",{className:"card",style:{textAlign:"center",padding:"16px",background:"#dbeafe"},children:[p.jsx(Zb,{size:24,style:{margin:"0 auto",color:"#3b82f6"}}),p.jsx("h4",{style:{margin:"8px 0",color:"#1e40af"},children:"Processing"}),p.jsx("p",{style:{fontSize:"24px",fontWeight:"bold",color:"#1e40af"},children:P.processing})]}),p.jsxs("div",{className:"card",style:{textAlign:"center",padding:"16px",background:"#ede9fe"},children:[p.jsx(oD,{size:24,style:{margin:"0 auto",color:"#8b5cf6"}}),p.jsx("h4",{style:{margin:"8px 0",color:"#6d28d9"},children:"Completed"}),p.jsx("p",{style:{fontSize:"24px",fontWeight:"bold",color:"#6d28d9"},children:P.completed})]}),p.jsxs("div",{className:"card",style:{textAlign:"center",padding:"16px",background:"#fee2e2"},children:[p.jsx(mu,{size:24,style:{margin:"0 auto",color:"#ef4444"}}),p.jsx("h4",{style:{margin:"8px 0",color:"#991b1b"},children:"Rejected"}),p.jsx("p",{style:{fontSize:"24px",fontWeight:"bold",color:"#991b1b"},children:P.rejected})]})]}),p.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"20px",flexWrap:"wrap"},children:[p.jsx("button",{onClick:()=>x("all"),style:{padding:"8px 20px",borderRadius:"40px",cursor:"pointer",fontWeight:"600",...C("all")},children:"All"}),p.jsx("button",{onClick:()=>x("pending"),style:{padding:"8px 20px",borderRadius:"40px",cursor:"pointer",fontWeight:"600",...C("pending")},children:"Pending"}),p.jsx("button",{onClick:()=>x("approved"),style:{padding:"8px 20px",borderRadius:"40px",cursor:"pointer",fontWeight:"600",...C("approved")},children:"Approved"}),p.jsx("button",{onClick:()=>x("processing"),style:{padding:"8px 20px",borderRadius:"40px",cursor:"pointer",fontWeight:"600",...C("processing")},children:"Processing"}),p.jsx("button",{onClick:()=>x("completed"),style:{padding:"8px 20px",borderRadius:"40px",cursor:"pointer",fontWeight:"600",...C("completed")},children:"Completed"}),p.jsx("button",{onClick:()=>x("rejected"),style:{padding:"8px 20px",borderRadius:"40px",cursor:"pointer",fontWeight:"600",...C("rejected")},children:"Rejected"})]}),p.jsx("div",{className:"card",style:{marginBottom:"20px",background:"white"},children:p.jsx("input",{type:"text",placeholder:"🔍 Search by name, email, document, or queue number...",value:k,onChange:T=>I(T.target.value),style:{width:"100%",padding:"12px",borderRadius:"12px",border:"2px solid #e2e8f0",fontSize:"14px",outline:"none"}})}),p.jsx("div",{className:"card",style:{background:"white",overflowX:"auto"},children:p.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[p.jsx("thead",{children:p.jsxs("tr",{style:{borderBottom:"2px solid #e2e8f0",textAlign:"left"},children:[p.jsx("th",{style:{padding:"12px",color:"#4a5568"},children:"Queue #"}),p.jsx("th",{style:{padding:"12px",color:"#4a5568"},children:"Resident"}),p.jsx("th",{style:{padding:"12px",color:"#4a5568"},children:"Document"}),p.jsx("th",{style:{padding:"12px",color:"#4a5568"},children:"Schedule"}),p.jsx("th",{style:{padding:"12px",color:"#4a5568"},children:"Priority"}),p.jsx("th",{style:{padding:"12px",color:"#4a5568"},children:"Status"}),p.jsx("th",{style:{padding:"12px",color:"#4a5568"},children:"Start Time"}),p.jsx("th",{style:{padding:"12px",color:"#4a5568"},children:"End Time"}),p.jsx("th",{style:{padding:"12px",color:"#4a5568"},children:"Actions"})]})}),p.jsxs("tbody",{children:[E().map(T=>p.jsxs("tr",{style:{borderBottom:"1px solid #e2e8f0"},children:[p.jsx("td",{style:{padding:"12px",fontWeight:"bold",color:"#333"},children:T.queueNumber?`#${T.queueNumber}`:"—"}),p.jsxs("td",{style:{padding:"12px"},children:[p.jsx("strong",{style:{color:"#333"},children:T.userName}),p.jsx("br",{}),p.jsx("small",{style:{color:"#718096"},children:T.userEmail})]}),p.jsx("td",{style:{padding:"12px",color:"#333"},children:T.documentType}),p.jsx("td",{style:{padding:"12px",color:"#333"},children:T.date?p.jsxs(p.Fragment,{children:[T.date,p.jsx("br",{}),p.jsx("small",{style:{color:"#718096"},children:T.time||"TBD"})]}):"—"}),p.jsxs("td",{style:{padding:"12px"},children:[R(T.isPriority,T.priorityType),!T.isPriority&&p.jsx("span",{style:{fontSize:"12px",color:"#9ca3af"},children:"Regular"})]}),p.jsx("td",{style:{padding:"12px"},children:v(T.status)}),p.jsx("td",{style:{padding:"12px",fontSize:"13px",color:"#333"},children:T.status==="processing"||T.status==="completed"?A(T.startedAt):"—"}),p.jsx("td",{style:{padding:"12px",fontSize:"13px",color:"#333"},children:T.status==="completed"?A(T.completedAt):"—"}),p.jsxs("td",{style:{padding:"12px"},children:[p.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[p.jsxs("button",{onClick:()=>U(T.uploadedFiles),className:"btn-outline",style:{padding:"6px 12px",fontSize:"12px",background:"white",border:"1px solid #667eea",color:"#667eea",borderRadius:"8px",cursor:"pointer"},children:[p.jsx(ET,{size:14,style:{display:"inline",marginRight:"4px"}}),"Files"]}),T.status==="pending"&&p.jsxs("button",{onClick:()=>w(T),className:"btn-primary",style:{padding:"6px 12px",fontSize:"12px",background:"#10b981",color:"white",border:"none",borderRadius:"8px",cursor:"pointer"},children:[p.jsx(ti,{size:14,style:{display:"inline",marginRight:"4px"}}),"Approve"]}),T.status==="pending"&&p.jsxs("button",{onClick:()=>{r(T),l(!0)},className:"btn-danger",style:{padding:"6px 12px",fontSize:"12px",background:"#ef4444",color:"white",border:"none",borderRadius:"8px",cursor:"pointer"},children:[p.jsx(mu,{size:14,style:{display:"inline",marginRight:"4px"}}),"Reject"]}),T.status==="approved"&&p.jsxs("button",{onClick:()=>S(T),style:{background:"#3b82f6",color:"white",border:"none",padding:"6px 12px",borderRadius:"8px",cursor:"pointer",fontSize:"12px",display:"inline-flex",alignItems:"center",gap:"4px"},children:[p.jsx(TT,{size:14})," Start Serving"]}),T.status==="processing"&&p.jsxs("button",{onClick:()=>D(T),style:{background:"#8b5cf6",color:"white",border:"none",padding:"6px 12px",borderRadius:"8px",cursor:"pointer",fontSize:"12px",display:"inline-flex",alignItems:"center",gap:"4px"},children:[p.jsx(ti,{size:14})," Complete"]})]}),T.adminComments&&T.status==="rejected"&&p.jsxs("div",{style:{fontSize:"11px",color:"#dc2626",marginTop:"8px",background:"#fee2e2",padding:"4px 8px",borderRadius:"6px"},children:["Reason: ",T.adminComments]}),T.actualWaitTime&&T.status==="completed"&&p.jsxs("div",{style:{fontSize:"10px",color:"#6d28d9",marginTop:"4px"},children:["Duration: ",T.actualWaitTime," min"]})]})]},T.id)),E().length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:"9",style:{padding:"40px",textAlign:"center",color:"#718096"},children:"No appointments found"})})]})]})}),o&&p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},children:p.jsxs("div",{className:"card",style:{maxWidth:"500px",width:"90%",background:"white",padding:"24px",borderRadius:"16px"},children:[p.jsx("h3",{style:{color:"#333",marginBottom:"8px"},children:"Reject Appointment"}),p.jsx("p",{style:{marginTop:"8px",color:"#4a5568"},children:"Provide reason for rejection:"}),p.jsx("textarea",{value:i,onChange:T=>s(T.target.value),rows:"4",style:{width:"100%",margin:"16px 0",padding:"12px",border:"2px solid #e2e8f0",borderRadius:"12px",fontSize:"14px",outline:"none"},placeholder:"e.g., Missing required documents, Invalid ID, Incomplete requirements, etc."}),p.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[p.jsx("button",{onClick:()=>{l(!1),s("")},className:"btn-outline",style:{padding:"8px 16px",background:"white",border:"1px solid #cbd5e1",borderRadius:"8px",cursor:"pointer"},children:"Cancel"}),p.jsx("button",{onClick:M,className:"btn-danger",style:{padding:"8px 16px",background:"#ef4444",color:"white",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Confirm Rejection"})]})]})}),h&&u&&p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,overflow:"auto"},children:p.jsxs("div",{className:"card",style:{maxWidth:"600px",width:"90%",maxHeight:"80vh",overflow:"auto",background:"white",padding:"24px",borderRadius:"16px",position:"relative"},children:[p.jsx("h3",{style:{color:"#333",marginBottom:"16px"},children:"📄 Uploaded Documents"}),p.jsx("button",{onClick:()=>m(!1),style:{position:"absolute",top:"16px",right:"16px",background:"#ef4444",color:"white",border:"none",borderRadius:"50%",width:"30px",height:"30px",cursor:"pointer"},children:"×"}),Object.entries(u).map(([T,_])=>p.jsxs("div",{style:{margin:"16px 0",padding:"16px",background:"#f7fafc",borderRadius:"12px"},children:[p.jsx("strong",{style:{color:"#333"},children:T}),_&&_.startsWith("data:image")&&p.jsx("img",{src:_,alt:T,style:{maxWidth:"100%",marginTop:"12px",borderRadius:"8px"}})]},T)),p.jsx("button",{onClick:()=>m(!1),className:"btn-primary",style:{width:"100%",marginTop:"16px",padding:"12px",background:"#667eea",color:"white",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Close"})]})})]})}function fd({user:t,children:e}){return t?e:p.jsx(Qs,{to:"/login"})}function OD(){const[t,e]=O.useState(null),[n,r]=O.useState(!0);if(O.useEffect(()=>{const s=sP(Xt,o=>{e(o),r(!1)});return()=>s()},[]),n)return p.jsx("div",{style:{textAlign:"center",marginTop:"50px"},children:"Loading..."});const i=(t==null?void 0:t.email)==="ieproject83@gmail.com";return p.jsxs(VS,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:[p.jsx(RR,{position:"top-right"}),p.jsx(aD,{user:t,isAdmin:i}),p.jsxs(kS,{children:[p.jsx(Sn,{path:"/login",element:t?p.jsx(Qs,{to:"/dashboard"}):p.jsx(lD,{})}),p.jsx(Sn,{path:"/register",element:t?p.jsx(Qs,{to:"/dashboard"}):p.jsx(uD,{})}),p.jsx(Sn,{path:"/dashboard",element:p.jsx(fd,{user:t,children:p.jsx(dD,{})})}),p.jsx(Sn,{path:"/book",element:p.jsx(fd,{user:t,children:p.jsx(CD,{})})}),p.jsx(Sn,{path:"/appointments",element:p.jsx(fd,{user:t,children:p.jsx(ND,{})})}),p.jsx(Sn,{path:"/queue",element:p.jsx(bD,{})}),p.jsx(Sn,{path:"/admin",element:i?p.jsx(DD,{}):p.jsx(Qs,{to:"/dashboard"})}),p.jsx(Sn,{path:"/",element:p.jsx(Qs,{to:"/dashboard"})})]})]})}pd.createRoot(document.getElementById("root")).render(p.jsx(jv.StrictMode,{children:p.jsx(OD,{})}));
