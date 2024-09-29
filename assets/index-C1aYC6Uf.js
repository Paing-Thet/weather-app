(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xi(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const q={},an=[],Ve=()=>{},Bu=()=>!1,rs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ki=t=>t.startsWith("onUpdate:"),ae=Object.assign,Ri=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hu=Object.prototype.hasOwnProperty,z=(t,e)=>Hu.call(t,e),D=Array.isArray,ln=t=>ir(t)==="[object Map]",cl=t=>ir(t)==="[object Set]",Ao=t=>ir(t)==="[object Date]",F=t=>typeof t=="function",se=t=>typeof t=="string",Ke=t=>typeof t=="symbol",Q=t=>t!==null&&typeof t=="object",ul=t=>(Q(t)||F(t))&&F(t.then)&&F(t.catch),fl=Object.prototype.toString,ir=t=>fl.call(t),Vu=t=>ir(t).slice(8,-1),dl=t=>ir(t)==="[object Object]",Ni=t=>se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fn=xi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ss=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zu=/-(\w)/g,Re=ss(t=>t.replace(zu,(e,n)=>n?n.toUpperCase():"")),Wu=/\B([A-Z])/g,xt=ss(t=>t.replace(Wu,"-$1").toLowerCase()),is=ss(t=>t.charAt(0).toUpperCase()+t.slice(1)),Es=ss(t=>t?`on${is(t)}`:""),qt=(t,e)=>!Object.is(t,e),Or=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Gs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Oo;const pl=()=>Oo||(Oo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Li(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=se(r)?qu(r):Li(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(se(t)||Q(t))return t}const $u=/;(?![^(]*\))/g,Ku=/:([^]+)/,Gu=/\/\*[^]*?\*\//g;function qu(t){const e={};return t.replace(Gu,"").split($u).forEach(n=>{if(n){const r=n.split(Ku);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gn(t){let e="";if(se(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const r=Gn(t[n]);r&&(e+=r+" ")}else if(Q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ju=xi(Yu);function ml(t){return!!t||t===""}function Xu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=jr(t[r],e[r]);return n}function jr(t,e){if(t===e)return!0;let n=Ao(t),r=Ao(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ke(t),r=Ke(e),n||r)return t===e;if(n=D(t),r=D(e),n||r)return n&&r?Xu(t,e):!1;if(n=Q(t),r=Q(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!jr(t[o],e[o]))return!1}}return String(t)===String(e)}const gl=t=>!!(t&&t.__v_isRef===!0),te=t=>se(t)?t:t==null?"":D(t)||Q(t)&&(t.toString===fl||!F(t.toString))?gl(t)?te(t.value):JSON.stringify(t,yl,2):String(t),yl=(t,e)=>gl(e)?yl(t,e.value):ln(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ss(r,i)+" =>"]=s,n),{})}:cl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ss(n))}:Ke(e)?Ss(e):Q(e)&&!D(e)&&!dl(e)?String(e):e,Ss=(t,e="")=>{var n;return Ke(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class Qu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!e&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=we;try{return we=this,e()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Zu(){return we}let K;const Ts=new WeakSet;class vl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ts.has(this)&&(Ts.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=jn,jn=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Po(this),bl(this);const e=K,n=ke;K=this,ke=!0;try{return this.fn()}finally{wl(this),K=e,ke=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ui(e);this.deps=this.depsTail=void 0,Po(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ts.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qs(this)&&this.run()}get dirty(){return qs(this)}}let _l=0,jn;function Mi(){_l++}function Di(){if(--_l>0)return;let t;for(;jn;){let e=jn;for(jn=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function bl(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wl(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),Ui(r),ef(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function qs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Il(e.dep.computed)===!1||e.dep.version!==e.version)return!0;return!!t._dirty}function Il(t){if(t.flags&2)return!1;if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===qn))return;t.globalVersion=qn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!qs(t)){t.flags&=-3;return}const n=K,r=ke;K=t,ke=!0;try{bl(t);const s=t.fn(t._value);(e.version===0||qt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{K=n,ke=r,wl(t),t.flags&=-3}}function Ui(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Ui(s)}}function ef(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ke=!0;const El=[];function kt(){El.push(ke),ke=!1}function Rt(){const t=El.pop();ke=t===void 0?!0:t}function Po(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=K;K=void 0;try{e()}finally{K=n}}}let qn=0;class Sl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!K||!ke||K===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==K)n=this.activeLink={dep:this,sub:K,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},K.deps?(n.prevDep=K.depsTail,K.depsTail.nextDep=n,K.depsTail=n):K.deps=K.depsTail=n,K.flags&4&&Tl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=K.depsTail,n.nextDep=void 0,K.depsTail.nextDep=n,K.depsTail=n,K.deps===n&&(K.deps=r)}return n}trigger(e){this.version++,qn++,this.notify(e)}notify(e){Mi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{Di()}}}function Tl(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Tl(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const Ys=new WeakMap,$t=Symbol(""),Js=Symbol(""),Yn=Symbol("");function ue(t,e,n){if(ke&&K){let r=Ys.get(t);r||Ys.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new Sl),s.track()}}function st(t,e,n,r,s,i){const o=Ys.get(t);if(!o){qn++;return}let a=[];if(e==="clear")a=[...o.values()];else{const l=D(t),c=l&&Ni(n);if(l&&n==="length"){const u=Number(r);o.forEach((h,m)=>{(m==="length"||m===Yn||!Ke(m)&&m>=u)&&a.push(h)})}else{const u=h=>h&&a.push(h);switch(n!==void 0&&u(o.get(n)),c&&u(o.get(Yn)),e){case"add":l?c&&u(o.get("length")):(u(o.get($t)),ln(t)&&u(o.get(Js)));break;case"delete":l||(u(o.get($t)),ln(t)&&u(o.get(Js)));break;case"set":ln(t)&&u(o.get($t));break}}}Mi();for(const l of a)l.trigger();Di()}function tn(t){const e=$(t);return e===t?e:(ue(e,"iterate",Yn),ze(t)?e:e.map(Ie))}function Fi(t){return ue(t=$(t),"iterate",Yn),t}const tf={__proto__:null,[Symbol.iterator](){return Cs(this,Symbol.iterator,Ie)},concat(...t){return tn(this).concat(...t.map(e=>D(e)?tn(e):e))},entries(){return Cs(this,"entries",t=>(t[1]=Ie(t[1]),t))},every(t,e){return Je(this,"every",t,e,void 0,arguments)},filter(t,e){return Je(this,"filter",t,e,n=>n.map(Ie),arguments)},find(t,e){return Je(this,"find",t,e,Ie,arguments)},findIndex(t,e){return Je(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Je(this,"findLast",t,e,Ie,arguments)},findLastIndex(t,e){return Je(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Je(this,"forEach",t,e,void 0,arguments)},includes(...t){return As(this,"includes",t)},indexOf(...t){return As(this,"indexOf",t)},join(t){return tn(this).join(t)},lastIndexOf(...t){return As(this,"lastIndexOf",t)},map(t,e){return Je(this,"map",t,e,void 0,arguments)},pop(){return xn(this,"pop")},push(...t){return xn(this,"push",t)},reduce(t,...e){return xo(this,"reduce",t,e)},reduceRight(t,...e){return xo(this,"reduceRight",t,e)},shift(){return xn(this,"shift")},some(t,e){return Je(this,"some",t,e,void 0,arguments)},splice(...t){return xn(this,"splice",t)},toReversed(){return tn(this).toReversed()},toSorted(t){return tn(this).toSorted(t)},toSpliced(...t){return tn(this).toSpliced(...t)},unshift(...t){return xn(this,"unshift",t)},values(){return Cs(this,"values",Ie)}};function Cs(t,e,n){const r=Fi(t),s=r[e]();return r!==t&&!ze(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const nf=Array.prototype;function Je(t,e,n,r,s,i){const o=Fi(t),a=o!==t&&!ze(t),l=o[e];if(l!==nf[e]){const h=l.apply(t,i);return a?Ie(h):h}let c=n;o!==t&&(a?c=function(h,m){return n.call(this,Ie(h),m,t)}:n.length>2&&(c=function(h,m){return n.call(this,h,m,t)}));const u=l.call(o,c,r);return a&&s?s(u):u}function xo(t,e,n,r){const s=Fi(t);let i=n;return s!==t&&(ze(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Ie(a),l,t)}),s[e](i,...r)}function As(t,e,n){const r=$(t);ue(r,"iterate",Yn);const s=r[e](...n);return(s===-1||s===!1)&&zi(n[0])?(n[0]=$(n[0]),r[e](...n)):s}function xn(t,e,n=[]){kt(),Mi();const r=$(t)[e].apply(t,n);return Di(),Rt(),r}const rf=xi("__proto__,__v_isRef,__isVue"),Cl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ke));function sf(t){Ke(t)||(t=String(t));const e=$(this);return ue(e,"has",t),e.hasOwnProperty(t)}class Al{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?vf:kl:i?xl:Pl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=D(e);if(!s){let l;if(o&&(l=tf[n]))return l;if(n==="hasOwnProperty")return sf}const a=Reflect.get(e,n,pe(e)?e:r);return(Ke(n)?Cl.has(n):rf(n))||(s||ue(e,"get",n),i)?a:pe(a)?o&&Ni(n)?a:a.value:Q(a)?s?Rl(a):Hi(a):a}}class Ol extends Al{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=yn(i);if(!ze(r)&&!yn(r)&&(i=$(i),r=$(r)),!D(e)&&pe(i)&&!pe(r))return l?!1:(i.value=r,!0)}const o=D(e)&&Ni(n)?Number(n)<e.length:z(e,n),a=Reflect.set(e,n,r,pe(e)?e:s);return e===$(s)&&(o?qt(r,i)&&st(e,"set",n,r):st(e,"add",n,r)),a}deleteProperty(e,n){const r=z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&st(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ke(n)||!Cl.has(n))&&ue(e,"has",n),r}ownKeys(e){return ue(e,"iterate",D(e)?"length":$t),Reflect.ownKeys(e)}}class of extends Al{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const af=new Ol,lf=new of,cf=new Ol(!0);const ji=t=>t,os=t=>Reflect.getPrototypeOf(t);function br(t,e,n=!1,r=!1){t=t.__v_raw;const s=$(t),i=$(e);n||(qt(e,i)&&ue(s,"get",e),ue(s,"get",i));const{has:o}=os(s),a=r?ji:n?Wi:Ie;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function wr(t,e=!1){const n=this.__v_raw,r=$(n),s=$(t);return e||(qt(t,s)&&ue(r,"has",t),ue(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ir(t,e=!1){return t=t.__v_raw,!e&&ue($(t),"iterate",$t),Reflect.get(t,"size",t)}function ko(t,e=!1){!e&&!ze(t)&&!yn(t)&&(t=$(t));const n=$(this);return os(n).has.call(n,t)||(n.add(t),st(n,"add",t,t)),this}function Ro(t,e,n=!1){!n&&!ze(e)&&!yn(e)&&(e=$(e));const r=$(this),{has:s,get:i}=os(r);let o=s.call(r,t);o||(t=$(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?qt(e,a)&&st(r,"set",t,e):st(r,"add",t,e),this}function No(t){const e=$(this),{has:n,get:r}=os(e);let s=n.call(e,t);s||(t=$(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&st(e,"delete",t,void 0),i}function Lo(){const t=$(this),e=t.size!==0,n=t.clear();return e&&st(t,"clear",void 0,void 0),n}function Er(t,e){return function(r,s){const i=this,o=i.__v_raw,a=$(o),l=e?ji:t?Wi:Ie;return!t&&ue(a,"iterate",$t),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Sr(t,e,n){return function(...r){const s=this.__v_raw,i=$(s),o=ln(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?ji:e?Wi:Ie;return!e&&ue(i,"iterate",l?Js:$t),{next(){const{value:h,done:m}=c.next();return m?{value:h,done:m}:{value:a?[u(h[0]),u(h[1])]:u(h),done:m}},[Symbol.iterator](){return this}}}}function ht(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function uf(){const t={get(i){return br(this,i)},get size(){return Ir(this)},has:wr,add:ko,set:Ro,delete:No,clear:Lo,forEach:Er(!1,!1)},e={get(i){return br(this,i,!1,!0)},get size(){return Ir(this)},has:wr,add(i){return ko.call(this,i,!0)},set(i,o){return Ro.call(this,i,o,!0)},delete:No,clear:Lo,forEach:Er(!1,!0)},n={get(i){return br(this,i,!0)},get size(){return Ir(this,!0)},has(i){return wr.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:Er(!0,!1)},r={get(i){return br(this,i,!0,!0)},get size(){return Ir(this,!0)},has(i){return wr.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:Er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Sr(i,!1,!1),n[i]=Sr(i,!0,!1),e[i]=Sr(i,!1,!0),r[i]=Sr(i,!0,!0)}),[t,n,e,r]}const[ff,df,hf,pf]=uf();function Bi(t,e){const n=e?t?pf:hf:t?df:ff;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(z(n,s)&&s in r?n:r,s,i)}const mf={get:Bi(!1,!1)},gf={get:Bi(!1,!0)},yf={get:Bi(!0,!1)};const Pl=new WeakMap,xl=new WeakMap,kl=new WeakMap,vf=new WeakMap;function _f(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bf(t){return t.__v_skip||!Object.isExtensible(t)?0:_f(Vu(t))}function Hi(t){return yn(t)?t:Vi(t,!1,af,mf,Pl)}function wf(t){return Vi(t,!1,cf,gf,xl)}function Rl(t){return Vi(t,!0,lf,yf,kl)}function Vi(t,e,n,r,s){if(!Q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=bf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Bn(t){return yn(t)?Bn(t.__v_raw):!!(t&&t.__v_isReactive)}function yn(t){return!!(t&&t.__v_isReadonly)}function ze(t){return!!(t&&t.__v_isShallow)}function zi(t){return t?!!t.__v_raw:!1}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function If(t){return Object.isExtensible(t)&&hl(t,"__v_skip",!0),t}const Ie=t=>Q(t)?Hi(t):t,Wi=t=>Q(t)?Rl(t):t;function pe(t){return t?t.__v_isRef===!0:!1}function Ef(t){return pe(t)?t.value:t}const Sf={get:(t,e,n)=>e==="__v_raw"?t:Ef(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pe(s)&&!pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Nl(t){return Bn(t)?t:new Proxy(t,Sf)}class Tf{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Sl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){K!==this&&(this.flags|=16,this.dep.notify())}get value(){const e=this.dep.track();return Il(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cf(t,e,n=!1){let r,s;return F(t)?r=t:(r=t.get,s=t.set),new Tf(r,s,n)}const Tr={},Br=new WeakMap;let jt;function Af(t,e=!1,n=jt){if(n){let r=Br.get(n);r||Br.set(n,r=[]),r.push(t)}}function Of(t,e,n=q){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,c=O=>s?O:ze(O)||s===!1||s===0?Qe(O,1):Qe(O);let u,h,m,C,N=!1,M=!1;if(pe(t)?(h=()=>t.value,N=ze(t)):Bn(t)?(h=()=>c(t),N=!0):D(t)?(M=!0,N=t.some(O=>Bn(O)||ze(O)),h=()=>t.map(O=>{if(pe(O))return O.value;if(Bn(O))return c(O);if(F(O))return l?l(O,2):O()})):F(t)?e?h=l?()=>l(t,2):t:h=()=>{if(m){kt();try{m()}finally{Rt()}}const O=jt;jt=u;try{return l?l(t,3,[C]):t(C)}finally{jt=O}}:h=Ve,e&&s){const O=h,j=s===!0?1/0:s;h=()=>Qe(O(),j)}const B=Zu(),w=()=>{u.stop(),B&&Ri(B.effects,u)};if(i)if(e){const O=e;e=(...j)=>{O(...j),w()}}else{const O=h;h=()=>{O(),w()}}let S=M?new Array(t.length).fill(Tr):Tr;const k=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const j=u.run();if(s||N||(M?j.some((ie,ne)=>qt(ie,S[ne])):qt(j,S))){m&&m();const ie=jt;jt=u;try{const ne=[j,S===Tr?void 0:M&&S[0]===Tr?[]:S,C];l?l(e,3,ne):e(...ne),S=j}finally{jt=ie}}}else u.run()};return a&&a(k),u=new vl(h),u.scheduler=o?()=>o(k,!1):k,C=O=>Af(O,!1,u),m=u.onStop=()=>{const O=Br.get(u);if(O){if(l)l(O,4);else for(const j of O)j();Br.delete(u)}},e?r?k(!0):S=u.run():o?o(k.bind(null,!0),!0):u.run(),w.pause=u.pause.bind(u),w.resume=u.resume.bind(u),w.stop=w,w}function Qe(t,e=1/0,n){if(e<=0||!Q(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pe(t))Qe(t.value,e,n);else if(D(t))for(let r=0;r<t.length;r++)Qe(t[r],e,n);else if(cl(t)||ln(t))t.forEach(r=>{Qe(r,e,n)});else if(dl(t)){for(const r in t)Qe(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Qe(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function or(t,e,n,r){try{return r?t(...r):t()}catch(s){as(s,e,n)}}function Ge(t,e,n,r){if(F(t)){const s=or(t,e,n,r);return s&&ul(s)&&s.catch(i=>{as(i,e,n)}),s}if(D(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ge(t[i],e,n,r));return s}}function as(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||q;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(i){kt(),or(i,null,10,[t,l,c]),Rt();return}}Pf(t,n,s,r,o)}function Pf(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let Jn=!1,Xs=!1;const he=[];let Ue=0;const cn=[];let gt=null,nn=0;const Ll=Promise.resolve();let $i=null;function xf(t){const e=$i||Ll;return t?e.then(this?t.bind(this):t):e}function kf(t){let e=Jn?Ue+1:0,n=he.length;for(;e<n;){const r=e+n>>>1,s=he[r],i=Xn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ki(t){if(!(t.flags&1)){const e=Xn(t),n=he[he.length-1];!n||!(t.flags&2)&&e>=Xn(n)?he.push(t):he.splice(kf(e),0,t),t.flags|=1,Ml()}}function Ml(){!Jn&&!Xs&&(Xs=!0,$i=Ll.then(Ul))}function Rf(t){D(t)?cn.push(...t):gt&&t.id===-1?gt.splice(nn+1,0,t):t.flags&1||(cn.push(t),t.flags|=1),Ml()}function Mo(t,e,n=Jn?Ue+1:0){for(;n<he.length;n++){const r=he[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;he.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function Dl(t){if(cn.length){const e=[...new Set(cn)].sort((n,r)=>Xn(n)-Xn(r));if(cn.length=0,gt){gt.push(...e);return}for(gt=e,nn=0;nn<gt.length;nn++){const n=gt[nn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gt=null,nn=0}}const Xn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ul(t){Xs=!1,Jn=!0;try{for(Ue=0;Ue<he.length;Ue++){const e=he[Ue];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),or(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;Ue<he.length;Ue++){const e=he[Ue];e&&(e.flags&=-2)}Ue=0,he.length=0,Dl(),Jn=!1,$i=null,(he.length||cn.length)&&Ul()}}let Ee=null,Fl=null;function Hr(t){const e=Ee;return Ee=t,Fl=t&&t.type.__scopeId||null,e}function Nf(t,e=Ee,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Wo(-1);const i=Hr(e);let o;try{o=t(...s)}finally{Hr(i),r._d&&Wo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function It(t,e){if(Ee===null)return t;const n=ds(Ee),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=q]=e[s];i&&(F(i)&&(i={mounted:i,updated:i}),i.deep&&Qe(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ut(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(kt(),Ge(l,n,8,[t.el,a,t,e]),Rt())}}const Lf=Symbol("_vte"),Mf=t=>t.__isTeleport;function Gi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Df(t,e){return F(t)?ae({name:t.name},e,{setup:t}):t}function jl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qs(t,e,n,r,s=!1){if(D(t)){t.forEach((N,M)=>Qs(N,e&&(D(e)?e[M]:e),n,r,s));return}if(Hn(r)&&!s)return;const i=r.shapeFlag&4?ds(r.component):r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===q?a.refs={}:a.refs,h=a.setupState,m=$(h),C=h===q?()=>!1:N=>z(m,N);if(c!=null&&c!==l&&(se(c)?(u[c]=null,C(c)&&(h[c]=null)):pe(c)&&(c.value=null)),F(l))or(l,a,12,[o,u]);else{const N=se(l),M=pe(l);if(N||M){const B=()=>{if(t.f){const w=N?C(l)?h[l]:u[l]:l.value;s?D(w)&&Ri(w,i):D(w)?w.includes(i)||w.push(i):N?(u[l]=[i],C(l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else N?(u[l]=o,C(l)&&(h[l]=o)):M&&(l.value=o,t.k&&(u[t.k]=o))};o?(B.id=-1,be(B,n)):B()}}}const Hn=t=>!!t.type.__asyncLoader,Bl=t=>t.type.__isKeepAlive;function Uf(t,e){Hl(t,"a",e)}function Ff(t,e){Hl(t,"da",e)}function Hl(t,e,n=ce){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ls(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Bl(s.parent.vnode)&&jf(r,e,n,s),s=s.parent}}function jf(t,e,n,r){const s=ls(e,t,r,!0);Vl(()=>{Ri(r[e],s)},n)}function ls(t,e,n=ce,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{kt();const a=ar(n),l=Ge(e,n,t,o);return a(),Rt(),l});return r?s.unshift(i):s.push(i),i}}const ct=t=>(e,n=ce)=>{(!fs||t==="sp")&&ls(t,(...r)=>e(...r),n)},Bf=ct("bm"),Hf=ct("m"),Vf=ct("bu"),zf=ct("u"),Wf=ct("bum"),Vl=ct("um"),$f=ct("sp"),Kf=ct("rtg"),Gf=ct("rtc");function qf(t,e=ce){ls("ec",t,e)}const Yf="components";function Wt(t,e){return Xf(Yf,t,!0,e)||t}const Jf=Symbol.for("v-ndc");function Xf(t,e,n=!0,r=!1){const s=Ee||ce;if(s){const i=s.type;{const a=Fd(i,!1);if(a&&(a===e||a===Re(e)||a===is(Re(e))))return i}const o=Do(s[t]||i[t],e)||Do(s.appContext[t],e);return!o&&r?i:o}}function Do(t,e){return t&&(t[e]||t[Re(e)]||t[is(Re(e))])}const Zs=t=>t?lc(t)?ds(t):Zs(t.parent):null,Vn=ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zs(t.parent),$root:t=>Zs(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qi(t),$forceUpdate:t=>t.f||(t.f=()=>{Ki(t.update)}),$nextTick:t=>t.n||(t.n=xf.bind(t.proxy)),$watch:t=>_d.bind(t)}),Os=(t,e)=>t!==q&&!t.__isScriptSetup&&z(t,e),Qf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const C=o[e];if(C!==void 0)switch(C){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Os(r,e))return o[e]=1,r[e];if(s!==q&&z(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&z(c,e))return o[e]=3,i[e];if(n!==q&&z(n,e))return o[e]=4,n[e];ei&&(o[e]=0)}}const u=Vn[e];let h,m;if(u)return e==="$attrs"&&ue(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==q&&z(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,z(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Os(s,e)?(s[e]=n,!0):r!==q&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==q&&z(t,o)||Os(e,o)||(a=i[0])&&z(a,o)||z(r,o)||z(Vn,o)||z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uo(t){return D(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ei=!0;function Zf(t){const e=qi(t),n=t.proxy,r=t.ctx;ei=!1,e.beforeCreate&&Fo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:m,beforeUpdate:C,updated:N,activated:M,deactivated:B,beforeDestroy:w,beforeUnmount:S,destroyed:k,unmounted:O,render:j,renderTracked:ie,renderTriggered:ne,errorCaptured:Oe,serverPrefetch:dt,expose:Ye,inheritAttrs:Cn,components:gr,directives:yr,filters:ws}=e;if(c&&ed(c,r,null),o)for(const ee in o){const Y=o[ee];F(Y)&&(r[ee]=Y.bind(n))}if(s){const ee=s.call(n,n);Q(ee)&&(t.data=Hi(ee))}if(ei=!0,i)for(const ee in i){const Y=i[ee],Mt=F(Y)?Y.bind(n,n):F(Y.get)?Y.get.bind(n,n):Ve,vr=!F(Y)&&F(Y.set)?Y.set.bind(n):Ve,Dt=Bt({get:Mt,set:vr});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Le=>Dt.value=Le})}if(a)for(const ee in a)zl(a[ee],r,n,ee);if(l){const ee=F(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(Y=>{od(Y,ee[Y])})}u&&Fo(u,t,"c");function fe(ee,Y){D(Y)?Y.forEach(Mt=>ee(Mt.bind(n))):Y&&ee(Y.bind(n))}if(fe(Bf,h),fe(Hf,m),fe(Vf,C),fe(zf,N),fe(Uf,M),fe(Ff,B),fe(qf,Oe),fe(Gf,ie),fe(Kf,ne),fe(Wf,S),fe(Vl,O),fe($f,dt),D(Ye))if(Ye.length){const ee=t.exposed||(t.exposed={});Ye.forEach(Y=>{Object.defineProperty(ee,Y,{get:()=>n[Y],set:Mt=>n[Y]=Mt})})}else t.exposed||(t.exposed={});j&&t.render===Ve&&(t.render=j),Cn!=null&&(t.inheritAttrs=Cn),gr&&(t.components=gr),yr&&(t.directives=yr),dt&&jl(t)}function ed(t,e,n=Ve){D(t)&&(t=ti(t));for(const r in t){const s=t[r];let i;Q(s)?"default"in s?i=Pr(s.from||r,s.default,!0):i=Pr(s.from||r):i=Pr(s),pe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Fo(t,e,n){Ge(D(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function zl(t,e,n,r){let s=r.includes(".")?rc(n,r):()=>n[r];if(se(t)){const i=e[t];F(i)&&xr(s,i)}else if(F(t))xr(s,t.bind(n));else if(Q(t))if(D(t))t.forEach(i=>zl(i,e,n,r));else{const i=F(t.handler)?t.handler.bind(n):e[t.handler];F(i)&&xr(s,i,t)}}function qi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Vr(l,c,o,!0)),Vr(l,e,o)),Q(e)&&i.set(e,l),l}function Vr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Vr(t,i,n,!0),s&&s.forEach(o=>Vr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=td[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const td={data:jo,props:Bo,emits:Bo,methods:Rn,computed:Rn,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:Rn,directives:Rn,watch:rd,provide:jo,inject:nd};function jo(t,e){return e?t?function(){return ae(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function nd(t,e){return Rn(ti(t),ti(e))}function ti(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function Rn(t,e){return t?ae(Object.create(null),t,e):e}function Bo(t,e){return t?D(t)&&D(e)?[...new Set([...t,...e])]:ae(Object.create(null),Uo(t),Uo(e??{})):e}function rd(t,e){if(!t)return e;if(!e)return t;const n=ae(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function Wl(){return{app:null,config:{isNativeTag:Bu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sd=0;function id(t,e){return function(r,s=null){F(r)||(r=ae({},r)),s!=null&&!Q(s)&&(s=null);const i=Wl(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:sd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hd,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&F(u.install)?(o.add(u),u.install(c,...h)):F(u)&&(o.add(u),u(c,...h))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,h){return h?(i.components[u]=h,c):i.components[u]},directive(u,h){return h?(i.directives[u]=h,c):i.directives[u]},mount(u,h,m){if(!l){const C=c._ceVNode||W(r,s);return C.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),h&&e?e(C,u):t(C,u,m),l=!0,c._container=u,u.__vue_app__=c,ds(C.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ge(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return i.provides[u]=h,c},runWithContext(u){const h=un;un=c;try{return u()}finally{un=h}}};return c}}let un=null;function od(t,e){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[t]=e}}function Pr(t,e,n=!1){const r=ce||Ee;if(r||un){const s=un?un._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&F(e)?e.call(r&&r.proxy):e}}const $l={},Kl=()=>Object.create($l),Gl=t=>Object.getPrototypeOf(t)===$l;function ad(t,e,n,r=!1){const s={},i=Kl();t.propsDefaults=Object.create(null),ql(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:wf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ld(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=$(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let m=u[h];if(cs(t.emitsOptions,m))continue;const C=e[m];if(l)if(z(i,m))C!==i[m]&&(i[m]=C,c=!0);else{const N=Re(m);s[N]=ni(l,a,N,C,t,!1)}else C!==i[m]&&(i[m]=C,c=!0)}}}else{ql(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!z(e,h)&&((u=xt(h))===h||!z(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ni(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!z(e,h))&&(delete i[h],c=!0)}c&&st(t.attrs,"set","")}function ql(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fn(l))continue;const c=e[l];let u;s&&z(s,u=Re(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:cs(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=$(n),c=a||q;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ni(s,l,h,c[h],t,!z(c,h))}}return o}function ni(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&F(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=ar(s);r=c[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===xt(n))&&(r=!0))}return r}const cd=new WeakMap;function Yl(t,e,n=!1){const r=n?cd:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!F(t)){const u=h=>{l=!0;const[m,C]=Yl(h,e,!0);ae(o,m),C&&a.push(...C)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Q(t)&&r.set(t,an),an;if(D(i))for(let u=0;u<i.length;u++){const h=Re(i[u]);Ho(h)&&(o[h]=q)}else if(i)for(const u in i){const h=Re(u);if(Ho(h)){const m=i[u],C=o[h]=D(m)||F(m)?{type:m}:ae({},m),N=C.type;let M=!1,B=!0;if(D(N))for(let w=0;w<N.length;++w){const S=N[w],k=F(S)&&S.name;if(k==="Boolean"){M=!0;break}else k==="String"&&(B=!1)}else M=F(N)&&N.name==="Boolean";C[0]=M,C[1]=B,(M||z(C,"default"))&&a.push(h)}}const c=[o,a];return Q(t)&&r.set(t,c),c}function Ho(t){return t[0]!=="$"&&!Fn(t)}const Jl=t=>t[0]==="_"||t==="$stable",Yi=t=>D(t)?t.map(je):[je(t)],ud=(t,e,n)=>{if(e._n)return e;const r=Nf((...s)=>Yi(e(...s)),n);return r._c=!1,r},Xl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Jl(s))continue;const i=t[s];if(F(i))e[s]=ud(s,i,r);else if(i!=null){const o=Yi(i);e[s]=()=>o}}},Ql=(t,e)=>{const n=Yi(e);t.slots.default=()=>n},Zl=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},fd=(t,e,n)=>{const r=t.slots=Kl();if(t.vnode.shapeFlag&32){const s=e._;s?(Zl(r,e,n),n&&hl(r,"_",s,!0)):Xl(e,r)}else e&&Ql(t,e)},dd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=q;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Zl(s,e,n):(i=!e.$stable,Xl(e,s)),o=e}else e&&(Ql(t,e),o={default:1});if(i)for(const a in s)!Jl(a)&&o[a]==null&&delete s[a]},be=Cd;function hd(t){return pd(t)}function pd(t,e){const n=pl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:m,setScopeId:C=Ve,insertStaticContent:N}=t,M=(f,d,p,v=null,g=null,y=null,T=void 0,E=null,I=!!d.dynamicChildren)=>{if(f===d)return;f&&!kn(f,d)&&(v=_r(f),Le(f,g,y,!0),f=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:_,ref:R,shapeFlag:A}=d;switch(_){case us:B(f,d,p,v);break;case Yt:w(f,d,p,v);break;case ks:f==null&&S(d,p,v,T);break;case Fe:gr(f,d,p,v,g,y,T,E,I);break;default:A&1?j(f,d,p,v,g,y,T,E,I):A&6?yr(f,d,p,v,g,y,T,E,I):(A&64||A&128)&&_.process(f,d,p,v,g,y,T,E,I,On)}R!=null&&g&&Qs(R,f&&f.ref,y,d||f,!d)},B=(f,d,p,v)=>{if(f==null)r(d.el=a(d.children),p,v);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},w=(f,d,p,v)=>{f==null?r(d.el=l(d.children||""),p,v):d.el=f.el},S=(f,d,p,v)=>{[f.el,f.anchor]=N(f.children,d,p,v,f.el,f.anchor)},k=({el:f,anchor:d},p,v)=>{let g;for(;f&&f!==d;)g=m(f),r(f,p,v),f=g;r(d,p,v)},O=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=m(f),s(f),f=p;s(d)},j=(f,d,p,v,g,y,T,E,I)=>{d.type==="svg"?T="svg":d.type==="math"&&(T="mathml"),f==null?ie(d,p,v,g,y,T,E,I):dt(f,d,g,y,T,E,I)},ie=(f,d,p,v,g,y,T,E)=>{let I,_;const{props:R,shapeFlag:A,transition:x,dirs:U}=f;if(I=f.el=o(f.type,y,R&&R.is,R),A&8?u(I,f.children):A&16&&Oe(f.children,I,null,v,g,Ps(f,y),T,E),U&&Ut(f,null,v,"created"),ne(I,f,f.scopeId,T,v),R){for(const J in R)J!=="value"&&!Fn(J)&&i(I,J,null,R[J],y,v);"value"in R&&i(I,"value",null,R.value,y),(_=R.onVnodeBeforeMount)&&De(_,v,f)}U&&Ut(f,null,v,"beforeMount");const H=md(g,x);H&&x.beforeEnter(I),r(I,d,p),((_=R&&R.onVnodeMounted)||H||U)&&be(()=>{_&&De(_,v,f),H&&x.enter(I),U&&Ut(f,null,v,"mounted")},g)},ne=(f,d,p,v,g)=>{if(p&&C(f,p),v)for(let y=0;y<v.length;y++)C(f,v[y]);if(g){let y=g.subTree;if(d===y||ic(y.type)&&(y.ssContent===d||y.ssFallback===d)){const T=g.vnode;ne(f,T,T.scopeId,T.slotScopeIds,g.parent)}}},Oe=(f,d,p,v,g,y,T,E,I=0)=>{for(let _=I;_<f.length;_++){const R=f[_]=E?yt(f[_]):je(f[_]);M(null,R,d,p,v,g,y,T,E)}},dt=(f,d,p,v,g,y,T)=>{const E=d.el=f.el;let{patchFlag:I,dynamicChildren:_,dirs:R}=d;I|=f.patchFlag&16;const A=f.props||q,x=d.props||q;let U;if(p&&Ft(p,!1),(U=x.onVnodeBeforeUpdate)&&De(U,p,d,f),R&&Ut(d,f,p,"beforeUpdate"),p&&Ft(p,!0),(A.innerHTML&&x.innerHTML==null||A.textContent&&x.textContent==null)&&u(E,""),_?Ye(f.dynamicChildren,_,E,p,v,Ps(d,g),y):T||Y(f,d,E,null,p,v,Ps(d,g),y,!1),I>0){if(I&16)Cn(E,A,x,p,g);else if(I&2&&A.class!==x.class&&i(E,"class",null,x.class,g),I&4&&i(E,"style",A.style,x.style,g),I&8){const H=d.dynamicProps;for(let J=0;J<H.length;J++){const V=H[J],ye=A[V],le=x[V];(le!==ye||V==="value")&&i(E,V,ye,le,g,p)}}I&1&&f.children!==d.children&&u(E,d.children)}else!T&&_==null&&Cn(E,A,x,p,g);((U=x.onVnodeUpdated)||R)&&be(()=>{U&&De(U,p,d,f),R&&Ut(d,f,p,"updated")},v)},Ye=(f,d,p,v,g,y,T)=>{for(let E=0;E<d.length;E++){const I=f[E],_=d[E],R=I.el&&(I.type===Fe||!kn(I,_)||I.shapeFlag&70)?h(I.el):p;M(I,_,R,null,v,g,y,T,!0)}},Cn=(f,d,p,v,g)=>{if(d!==p){if(d!==q)for(const y in d)!Fn(y)&&!(y in p)&&i(f,y,d[y],null,g,v);for(const y in p){if(Fn(y))continue;const T=p[y],E=d[y];T!==E&&y!=="value"&&i(f,y,E,T,g,v)}"value"in p&&i(f,"value",d.value,p.value,g)}},gr=(f,d,p,v,g,y,T,E,I)=>{const _=d.el=f?f.el:a(""),R=d.anchor=f?f.anchor:a("");let{patchFlag:A,dynamicChildren:x,slotScopeIds:U}=d;U&&(E=E?E.concat(U):U),f==null?(r(_,p,v),r(R,p,v),Oe(d.children||[],p,R,g,y,T,E,I)):A>0&&A&64&&x&&f.dynamicChildren?(Ye(f.dynamicChildren,x,p,g,y,T,E),(d.key!=null||g&&d===g.subTree)&&ec(f,d,!0)):Y(f,d,p,R,g,y,T,E,I)},yr=(f,d,p,v,g,y,T,E,I)=>{d.slotScopeIds=E,f==null?d.shapeFlag&512?g.ctx.activate(d,p,v,T,I):ws(d,p,v,g,y,T,I):bo(f,d,I)},ws=(f,d,p,v,g,y,T)=>{const E=f.component=Nd(f,v,g);if(Bl(f)&&(E.ctx.renderer=On),Ld(E,!1,T),E.asyncDep){if(g&&g.registerDep(E,fe,T),!f.el){const I=E.subTree=W(Yt);w(null,I,d,p)}}else fe(E,f,d,p,g,y,T)},bo=(f,d,p)=>{const v=d.component=f.component;if(Sd(f,d,p))if(v.asyncDep&&!v.asyncResolved){ee(v,d,p);return}else v.next=d,v.update();else d.el=f.el,v.vnode=d},fe=(f,d,p,v,g,y,T)=>{const E=()=>{if(f.isMounted){let{next:A,bu:x,u:U,parent:H,vnode:J}=f;{const ve=tc(f);if(ve){A&&(A.el=J.el,ee(f,A,T)),ve.asyncDep.then(()=>{f.isUnmounted||E()});return}}let V=A,ye;Ft(f,!1),A?(A.el=J.el,ee(f,A,T)):A=J,x&&Or(x),(ye=A.props&&A.props.onVnodeBeforeUpdate)&&De(ye,H,A,J),Ft(f,!0);const le=xs(f),Pe=f.subTree;f.subTree=le,M(Pe,le,h(Pe.el),_r(Pe),f,g,y),A.el=le.el,V===null&&Td(f,le.el),U&&be(U,g),(ye=A.props&&A.props.onVnodeUpdated)&&be(()=>De(ye,H,A,J),g)}else{let A;const{el:x,props:U}=d,{bm:H,m:J,parent:V,root:ye,type:le}=f,Pe=Hn(d);if(Ft(f,!1),H&&Or(H),!Pe&&(A=U&&U.onVnodeBeforeMount)&&De(A,V,d),Ft(f,!0),x&&So){const ve=()=>{f.subTree=xs(f),So(x,f.subTree,f,g,null)};Pe&&le.__asyncHydrate?le.__asyncHydrate(x,f,ve):ve()}else{ye.ce&&ye.ce._injectChildStyle(le);const ve=f.subTree=xs(f);M(null,ve,p,v,f,g,y),d.el=ve.el}if(J&&be(J,g),!Pe&&(A=U&&U.onVnodeMounted)){const ve=d;be(()=>De(A,V,ve),g)}(d.shapeFlag&256||V&&Hn(V.vnode)&&V.vnode.shapeFlag&256)&&f.a&&be(f.a,g),f.isMounted=!0,d=p=v=null}};f.scope.on();const I=f.effect=new vl(E);f.scope.off();const _=f.update=I.run.bind(I),R=f.job=I.runIfDirty.bind(I);R.i=f,R.id=f.uid,I.scheduler=()=>Ki(R),Ft(f,!0),_()},ee=(f,d,p)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,ld(f,d.props,v,p),dd(f,d.children,p),kt(),Mo(f),Rt()},Y=(f,d,p,v,g,y,T,E,I=!1)=>{const _=f&&f.children,R=f?f.shapeFlag:0,A=d.children,{patchFlag:x,shapeFlag:U}=d;if(x>0){if(x&128){vr(_,A,p,v,g,y,T,E,I);return}else if(x&256){Mt(_,A,p,v,g,y,T,E,I);return}}U&8?(R&16&&An(_,g,y),A!==_&&u(p,A)):R&16?U&16?vr(_,A,p,v,g,y,T,E,I):An(_,g,y,!0):(R&8&&u(p,""),U&16&&Oe(A,p,v,g,y,T,E,I))},Mt=(f,d,p,v,g,y,T,E,I)=>{f=f||an,d=d||an;const _=f.length,R=d.length,A=Math.min(_,R);let x;for(x=0;x<A;x++){const U=d[x]=I?yt(d[x]):je(d[x]);M(f[x],U,p,null,g,y,T,E,I)}_>R?An(f,g,y,!0,!1,A):Oe(d,p,v,g,y,T,E,I,A)},vr=(f,d,p,v,g,y,T,E,I)=>{let _=0;const R=d.length;let A=f.length-1,x=R-1;for(;_<=A&&_<=x;){const U=f[_],H=d[_]=I?yt(d[_]):je(d[_]);if(kn(U,H))M(U,H,p,null,g,y,T,E,I);else break;_++}for(;_<=A&&_<=x;){const U=f[A],H=d[x]=I?yt(d[x]):je(d[x]);if(kn(U,H))M(U,H,p,null,g,y,T,E,I);else break;A--,x--}if(_>A){if(_<=x){const U=x+1,H=U<R?d[U].el:v;for(;_<=x;)M(null,d[_]=I?yt(d[_]):je(d[_]),p,H,g,y,T,E,I),_++}}else if(_>x)for(;_<=A;)Le(f[_],g,y,!0),_++;else{const U=_,H=_,J=new Map;for(_=H;_<=x;_++){const _e=d[_]=I?yt(d[_]):je(d[_]);_e.key!=null&&J.set(_e.key,_)}let V,ye=0;const le=x-H+1;let Pe=!1,ve=0;const Pn=new Array(le);for(_=0;_<le;_++)Pn[_]=0;for(_=U;_<=A;_++){const _e=f[_];if(ye>=le){Le(_e,g,y,!0);continue}let Me;if(_e.key!=null)Me=J.get(_e.key);else for(V=H;V<=x;V++)if(Pn[V-H]===0&&kn(_e,d[V])){Me=V;break}Me===void 0?Le(_e,g,y,!0):(Pn[Me-H]=_+1,Me>=ve?ve=Me:Pe=!0,M(_e,d[Me],p,null,g,y,T,E,I),ye++)}const To=Pe?gd(Pn):an;for(V=To.length-1,_=le-1;_>=0;_--){const _e=H+_,Me=d[_e],Co=_e+1<R?d[_e+1].el:v;Pn[_]===0?M(null,Me,p,Co,g,y,T,E,I):Pe&&(V<0||_!==To[V]?Dt(Me,p,Co,2):V--)}}},Dt=(f,d,p,v,g=null)=>{const{el:y,type:T,transition:E,children:I,shapeFlag:_}=f;if(_&6){Dt(f.component.subTree,d,p,v);return}if(_&128){f.suspense.move(d,p,v);return}if(_&64){T.move(f,d,p,On);return}if(T===Fe){r(y,d,p);for(let A=0;A<I.length;A++)Dt(I[A],d,p,v);r(f.anchor,d,p);return}if(T===ks){k(f,d,p);return}if(v!==2&&_&1&&E)if(v===0)E.beforeEnter(y),r(y,d,p),be(()=>E.enter(y),g);else{const{leave:A,delayLeave:x,afterLeave:U}=E,H=()=>r(y,d,p),J=()=>{A(y,()=>{H(),U&&U()})};x?x(y,H,J):J()}else r(y,d,p)},Le=(f,d,p,v=!1,g=!1)=>{const{type:y,props:T,ref:E,children:I,dynamicChildren:_,shapeFlag:R,patchFlag:A,dirs:x,cacheIndex:U}=f;if(A===-2&&(g=!1),E!=null&&Qs(E,null,p,f,!0),U!=null&&(d.renderCache[U]=void 0),R&256){d.ctx.deactivate(f);return}const H=R&1&&x,J=!Hn(f);let V;if(J&&(V=T&&T.onVnodeBeforeUnmount)&&De(V,d,f),R&6)ju(f.component,p,v);else{if(R&128){f.suspense.unmount(p,v);return}H&&Ut(f,null,d,"beforeUnmount"),R&64?f.type.remove(f,d,p,On,v):_&&!_.hasOnce&&(y!==Fe||A>0&&A&64)?An(_,d,p,!1,!0):(y===Fe&&A&384||!g&&R&16)&&An(I,d,p),v&&wo(f)}(J&&(V=T&&T.onVnodeUnmounted)||H)&&be(()=>{V&&De(V,d,f),H&&Ut(f,null,d,"unmounted")},p)},wo=f=>{const{type:d,el:p,anchor:v,transition:g}=f;if(d===Fe){Fu(p,v);return}if(d===ks){O(f);return}const y=()=>{s(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:T,delayLeave:E}=g,I=()=>T(p,y);E?E(f.el,y,I):I()}else y()},Fu=(f,d)=>{let p;for(;f!==d;)p=m(f),s(f),f=p;s(d)},ju=(f,d,p)=>{const{bum:v,scope:g,job:y,subTree:T,um:E,m:I,a:_}=f;Vo(I),Vo(_),v&&Or(v),g.stop(),y&&(y.flags|=8,Le(T,f,d,p)),E&&be(E,d),be(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},An=(f,d,p,v=!1,g=!1,y=0)=>{for(let T=y;T<f.length;T++)Le(f[T],d,p,v,g)},_r=f=>{if(f.shapeFlag&6)return _r(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const d=m(f.anchor||f.el),p=d&&d[Lf];return p?m(p):d};let Is=!1;const Io=(f,d,p)=>{f==null?d._vnode&&Le(d._vnode,null,null,!0):M(d._vnode||null,f,d,null,null,null,p),d._vnode=f,Is||(Is=!0,Mo(),Dl(),Is=!1)},On={p:M,um:Le,m:Dt,r:wo,mt:ws,mc:Oe,pc:Y,pbc:Ye,n:_r,o:t};let Eo,So;return{render:Io,hydrate:Eo,createApp:id(Io,Eo)}}function Ps({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ft({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function md(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ec(t,e,n=!1){const r=t.children,s=e.children;if(D(r)&&D(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=yt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ec(o,a)),a.type===us&&(a.el=o.el)}}function gd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function tc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tc(e)}function Vo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const yd=Symbol.for("v-scx"),vd=()=>Pr(yd);function xr(t,e,n){return nc(t,e,n)}function nc(t,e,n=q){const{immediate:r,deep:s,flush:i,once:o}=n,a=ae({},n);let l;if(fs)if(i==="sync"){const m=vd();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!e||r)a.once=!0;else return{stop:Ve,resume:Ve,pause:Ve};const c=ce;a.call=(m,C,N)=>Ge(m,c,C,N);let u=!1;i==="post"?a.scheduler=m=>{be(m,c&&c.suspense)}:i!=="sync"&&(u=!0,a.scheduler=(m,C)=>{C?m():Ki(m)}),a.augmentJob=m=>{e&&(m.flags|=4),u&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=Of(t,e,a);return l&&l.push(h),h}function _d(t,e,n){const r=this.proxy,s=se(t)?t.includes(".")?rc(r,t):()=>r[t]:t.bind(r,r);let i;F(e)?i=e:(i=e.handler,n=e);const o=ar(this),a=nc(s,i.bind(r),n);return o(),a}function rc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const bd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Re(e)}Modifiers`]||t[`${xt(e)}Modifiers`];function wd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||q;let s=n;const i=e.startsWith("update:"),o=i&&bd(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>se(u)?u.trim():u)),o.number&&(s=n.map(Gs)));let a,l=r[a=Es(e)]||r[a=Es(Re(e))];!l&&i&&(l=r[a=Es(xt(e))]),l&&Ge(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ge(c,t,6,s)}}function sc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!F(t)){const l=c=>{const u=sc(c,e,!0);u&&(a=!0,ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Q(t)&&r.set(t,null),null):(D(i)?i.forEach(l=>o[l]=null):ae(o,i),Q(t)&&r.set(t,o),o)}function cs(t,e){return!t||!rs(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,xt(e))||z(t,e))}function xs(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:m,setupState:C,ctx:N,inheritAttrs:M}=t,B=Hr(t);let w,S;try{if(n.shapeFlag&4){const O=s||r,j=O;w=je(c.call(j,O,u,h,C,m,N)),S=a}else{const O=e;w=je(O.length>1?O(h,{attrs:a,slots:o,emit:l}):O(h,null)),S=e.props?a:Id(a)}}catch(O){zn.length=0,as(O,t,1),w=W(Yt)}let k=w;if(S&&M!==!1){const O=Object.keys(S),{shapeFlag:j}=k;O.length&&j&7&&(i&&O.some(ki)&&(S=Ed(S,i)),k=vn(k,S,!1,!0))}return n.dirs&&(k=vn(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&Gi(k,n.transition),w=k,Hr(B),w}const Id=t=>{let e;for(const n in t)(n==="class"||n==="style"||rs(n))&&((e||(e={}))[n]=t[n]);return e},Ed=(t,e)=>{const n={};for(const r in t)(!ki(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Sd(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?zo(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const m=u[h];if(o[m]!==r[m]&&!cs(c,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?zo(r,o,c):!0:!!o;return!1}function zo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!cs(n,i))return!0}return!1}function Td({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ic=t=>t.__isSuspense;function Cd(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):Rf(t)}const Fe=Symbol.for("v-fgt"),us=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),ks=Symbol.for("v-stc"),zn=[];let Se=null;function re(t=!1){zn.push(Se=t?null:[])}function Ad(){zn.pop(),Se=zn[zn.length-1]||null}let Qn=1;function Wo(t){Qn+=t,t<0&&Se&&(Se.hasOnce=!0)}function oc(t){return t.dynamicChildren=Qn>0?Se||an:null,Ad(),Qn>0&&Se&&Se.push(t),t}function oe(t,e,n,r,s,i){return oc(b(t,e,n,r,s,i,!0))}function zr(t,e,n,r,s){return oc(W(t,e,n,r,s,!0))}function ri(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const ac=({key:t})=>t??null,kr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?se(t)||pe(t)||F(t)?{i:Ee,r:t,k:e,f:!!n}:t:null);function b(t,e=null,n=null,r=0,s=null,i=t===Fe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ac(e),ref:e&&kr(e),scopeId:Fl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ee};return a?(Ji(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),Qn>0&&!o&&Se&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Se.push(l),l}const W=Od;function Od(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Jf)&&(t=Yt),ri(t)){const a=vn(t,e,!0);return n&&Ji(a,n),Qn>0&&!i&&Se&&(a.shapeFlag&6?Se[Se.indexOf(t)]=a:Se.push(a)),a.patchFlag=-2,a}if(jd(t)&&(t=t.__vccOpts),e){e=Pd(e);let{class:a,style:l}=e;a&&!se(a)&&(e.class=Gn(a)),Q(l)&&(zi(l)&&!D(l)&&(l=ae({},l)),e.style=Li(l))}const o=se(t)?1:ic(t)?128:Mf(t)?64:Q(t)?4:F(t)?2:0;return b(t,e,n,r,s,o,i,!0)}function Pd(t){return t?zi(t)||Gl(t)?ae({},t):t:null}function vn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?xd(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ac(c),ref:e&&e.ref?n&&i?D(i)?i.concat(kr(e)):[i,kr(e)]:kr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Gi(u,l.clone(u)),u}function Nn(t=" ",e=0){return W(us,null,t,e)}function xe(t="",e=!1){return e?(re(),zr(Yt,null,t)):W(Yt,null,t)}function je(t){return t==null||typeof t=="boolean"?W(Yt):D(t)?W(Fe,null,t.slice()):typeof t=="object"?yt(t):W(us,null,String(t))}function yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vn(t)}function Ji(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ji(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Gl(e)?e._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:Ee},n=32):(e=String(e),r&64?(n=16,e=[Nn(e)]):n=8);t.children=e,t.shapeFlag|=n}function xd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Gn([e.class,r.class]));else if(s==="style")e.style=Li([e.style,r.style]);else if(rs(s)){const i=e[s],o=r[s];o&&i!==o&&!(D(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function De(t,e,n,r=null){Ge(t,e,7,[n,r])}const kd=Wl();let Rd=0;function Nd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||kd,i={uid:Rd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yl(r,s),emitsOptions:sc(r,s),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wd.bind(null,i),t.ce&&t.ce(i),i}let ce=null,Wr,si;{const t=pl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Wr=e("__VUE_INSTANCE_SETTERS__",n=>ce=n),si=e("__VUE_SSR_SETTERS__",n=>fs=n)}const ar=t=>{const e=ce;return Wr(t),t.scope.on(),()=>{t.scope.off(),Wr(e)}},$o=()=>{ce&&ce.scope.off(),Wr(null)};function lc(t){return t.vnode.shapeFlag&4}let fs=!1;function Ld(t,e=!1,n=!1){e&&si(e);const{props:r,children:s}=t.vnode,i=lc(t);ad(t,r,i,e),fd(t,s,n);const o=i?Md(t,e):void 0;return e&&si(!1),o}function Md(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Qf);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Ud(t):null,i=ar(t);kt();const o=or(r,t,0,[t.props,s]);if(Rt(),i(),ul(o)){if(Hn(t)||jl(t),o.then($o,$o),e)return o.then(a=>{Ko(t,a,e)}).catch(a=>{as(a,t,0)});t.asyncDep=o}else Ko(t,o,e)}else cc(t,e)}function Ko(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Q(e)&&(t.setupState=Nl(e)),cc(t,n)}let Go;function cc(t,e,n){const r=t.type;if(!t.render){if(!e&&Go&&!r.render){const s=r.template||qi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=ae(ae({isCustomElement:i,delimiters:a},o),l);r.render=Go(s,c)}}t.render=r.render||Ve}{const s=ar(t);kt();try{Zf(t)}finally{Rt(),s()}}}const Dd={get(t,e){return ue(t,"get",""),t[e]}};function Ud(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Dd),slots:t.slots,emit:t.emit,expose:e}}function ds(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Nl(If(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vn)return Vn[n](t)},has(e,n){return n in e||n in Vn}})):t.proxy}function Fd(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function jd(t){return F(t)&&"__vccOpts"in t}const Bt=(t,e)=>Cf(t,e,fs);function Bd(t,e,n){const r=arguments.length;return r===2?Q(e)&&!D(e)?ri(e)?W(t,null,[e]):W(t,e):W(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ri(n)&&(n=[n]),W(t,e,n))}const Hd="3.5.3";/**
* @vue/runtime-dom v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ii;const qo=typeof window<"u"&&window.trustedTypes;if(qo)try{ii=qo.createPolicy("vue",{createHTML:t=>t})}catch{}const uc=ii?t=>ii.createHTML(t):t=>t,Vd="http://www.w3.org/2000/svg",zd="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,Yo=Xe&&Xe.createElement("template"),Wd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Xe.createElementNS(Vd,t):e==="mathml"?Xe.createElementNS(zd,t):n?Xe.createElement(t,{is:n}):Xe.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Xe.createTextNode(t),createComment:t=>Xe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Yo.innerHTML=uc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Yo.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$d=Symbol("_vtc");function Kd(t,e,n){const r=t[$d];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jo=Symbol("_vod"),Gd=Symbol("_vsh"),qd=Symbol(""),Yd=/(^|;)\s*display\s*:/;function Jd(t,e,n){const r=t.style,s=se(n);let i=!1;if(n&&!s){if(e)if(se(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Rr(r,a,"")}else for(const o in e)n[o]==null&&Rr(r,o,"");for(const o in n)o==="display"&&(i=!0),Rr(r,o,n[o])}else if(s){if(e!==n){const o=r[qd];o&&(n+=";"+o),r.cssText=n,i=Yd.test(n)}}else e&&t.removeAttribute("style");Jo in t&&(t[Jo]=i?r.display:"",t[Gd]&&(r.display="none"))}const Xo=/\s*!important$/;function Rr(t,e,n){if(D(n))n.forEach(r=>Rr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Xd(t,e);Xo.test(n)?t.setProperty(xt(r),n.replace(Xo,""),"important"):t[r]=n}}const Qo=["Webkit","Moz","ms"],Rs={};function Xd(t,e){const n=Rs[e];if(n)return n;let r=Re(e);if(r!=="filter"&&r in t)return Rs[e]=r;r=is(r);for(let s=0;s<Qo.length;s++){const i=Qo[s]+r;if(i in t)return Rs[e]=i}return e}const Zo="http://www.w3.org/1999/xlink";function ea(t,e,n,r,s,i=Ju(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Zo,e.slice(6,e.length)):t.setAttributeNS(Zo,e,n):n==null||i&&!ml(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ke(n)?String(n):n)}function Qd(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?uc(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=ml(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Vt(t,e,n,r){t.addEventListener(e,n,r)}function Zd(t,e,n,r){t.removeEventListener(e,n,r)}const ta=Symbol("_vei");function eh(t,e,n,r,s=null){const i=t[ta]||(t[ta]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=th(e);if(r){const c=i[e]=sh(r,s);Vt(t,a,c,l)}else o&&(Zd(t,a,o,l),i[e]=void 0)}}const na=/(?:Once|Passive|Capture)$/;function th(t){let e;if(na.test(t)){e={};let r;for(;r=t.match(na);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xt(t.slice(2)),e]}let Ns=0;const nh=Promise.resolve(),rh=()=>Ns||(nh.then(()=>Ns=0),Ns=Date.now());function sh(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ge(ih(r,n.value),e,5,[r])};return n.value=t,n.attached=rh(),n}function ih(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,oh=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Kd(t,r,o):e==="style"?Jd(t,n,r):rs(e)?ki(e)||eh(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ah(t,e,r,o))?(Qd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ea(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ea(t,e,r,o))};function ah(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ra(e)&&F(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ra(e)&&se(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!se(n)))}const $r=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>Or(e,n):e};function lh(t){t.target.composing=!0}function sa(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fn=Symbol("_assign"),rn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[fn]=$r(s);const i=r||s.props&&s.props.type==="number";Vt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Gs(a)),t[fn](a)}),n&&Vt(t,"change",()=>{t.value=t.value.trim()}),e||(Vt(t,"compositionstart",lh),Vt(t,"compositionend",sa),Vt(t,"change",sa))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[fn]=$r(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Gs(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},ia={created(t,{value:e},n){t.checked=jr(e,n.props.value),t[fn]=$r(n),Vt(t,"change",()=>{t[fn](ch(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[fn]=$r(r),e!==n&&(t.checked=jr(e,r.props.value))}};function ch(t){return"_value"in t?t._value:t.value}const uh=["ctrl","shift","alt","meta"],fh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>uh.some(n=>t[`${n}Key`]&&!e.includes(n))},Kr=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=fh[e[o]];if(a&&a(s,e))return}return t(s,...i)})},dh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},hh=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=xt(s.key);if(e.some(o=>o===i||dh[o]===i))return t(s)})},ph=ae({patchProp:oh},Wd);let oa;function mh(){return oa||(oa=hd(ph))}const gh=(...t)=>{const e=mh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=vh(r);if(!s)return;const i=e._component;!F(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,yh(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function yh(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vh(t){return se(t)?document.querySelector(t):t}const Zt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},_h={data(){return{unit:"free"}},props:["weather","condition","isUserLoggedIn"],methods:{formatTime(t){return new Date(t*1e3).toLocaleTimeString()}}},bh={class:"unitContainer"},wh={key:0,class:"simpleContainer"},Ih={class:"simpleMain"},Eh=["src"],Sh={class:"simpleData"},Th={class:"dataContainer"},Ch={class:"dataContainer"},Ah={class:"dataContainer"},Oh={key:1,class:"detailsContainer"},Ph={key:0,class:"lockAccess"},xh={class:"detailsMain"},kh=["src"],Rh={key:0,class:"detailsData"},Nh={class:"dataRow"},Lh={class:"dataContainer"},Mh={class:"dataContainer"},Dh={class:"dataRow"},Uh={class:"dataContainer"},Fh={class:"dataContainer"},jh={class:"dataRow"},Bh={class:"dataContainer"},Hh={class:"dataContainer"};function Vh(t,e,n,r,s,i){const o=Wt("font-awesome-icon");return re(),oe(Fe,null,[b("div",bh,[b("label",null,[It(b("input",{type:"radio","onUpdate:modelValue":e[0]||(e[0]=a=>s.unit=a),value:"free"},null,512),[[ia,s.unit]]),e[2]||(e[2]=Nn(" Free "))]),b("label",null,[It(b("input",{type:"radio","onUpdate:modelValue":e[1]||(e[1]=a=>s.unit=a),value:"pro"},null,512),[[ia,s.unit]]),e[3]||(e[3]=Nn(" Pro "))])]),s.unit=="free"?(re(),oe("div",wh,[e[4]||(e[4]=b("h2",null,"Free",-1)),b("div",{class:Gn(["weather-info",n.condition])},[b("div",Ih,[b("h3",null,te(n.weather.name),1),b("img",{src:`http://openweathermap.org/img/wn/${n.weather.weather[0].icon}@2x.png`,alt:"Weather Icon",class:"weather-icon"},null,8,Eh),b("h2",null,[W(o,{icon:"temperature-half"}),Nn(" "+te(Math.round(n.weather.main.temp))+"°C / "+te(Math.round(n.weather.main.temp*9/5+32))+"°F",1)]),b("p",null,[b("strong",null,te(n.weather.weather[0].description),1)])]),b("div",Sh,[b("div",Th,[b("p",null,[W(o,{icon:"wind",style:{"font-size":"28px"}})]),b("p",null,te(n.weather.wind.speed)+" m/s",1)]),b("div",Ch,[b("p",null,[W(o,{icon:"sun",style:{"font-size":"28px"}})]),b("p",null,te(i.formatTime(n.weather.sys.sunrise)),1)]),b("div",Ah,[b("p",null,[W(o,{icon:"cloud-sun",style:{"font-size":"28px"}})]),b("p",null,te(i.formatTime(n.weather.sys.sunset)),1)])])],2)])):xe("",!0),s.unit=="pro"?(re(),oe("div",Oh,[e[6]||(e[6]=b("h2",null,"Pro",-1)),this.isUserLoggedIn?xe("",!0):(re(),oe("div",Ph,[b("p",null,[W(o,{icon:"triangle-exclamation",style:{color:"goldenrod","font-size":"72px"}})]),e[5]||(e[5]=b("p",null,[b("strong",null,"Pro feature is only for registered users. Please log in to access.")],-1))])),this.isUserLoggedIn?(re(),oe("div",{key:1,class:Gn(["weather-info",n.condition])},[b("div",xh,[b("h3",null,te(n.weather.name),1),b("img",{src:`http://openweathermap.org/img/wn/${n.weather.weather[0].icon}@2x.png`,alt:"Weather Icon",class:"weather-icon"},null,8,kh),b("h2",null,[W(o,{icon:"temperature-half"}),Nn(" "+te(Math.round(n.weather.main.temp))+"°C / "+te(Math.round(n.weather.main.temp*9/5+32))+"°F",1)]),b("p",null,"Feels like : "+te(Math.round(n.weather.main.feels_like))+"°C / "+te(Math.floor(n.weather.main.feels_like*9/5+32))+"°F",1),b("p",null,[b("strong",null,te(n.weather.weather[0].description),1)])]),this.isUserLoggedIn?(re(),oe("div",Rh,[b("div",Nh,[b("div",Lh,[b("p",null,[W(o,{icon:"tint",style:{"font-size":"24px"}})]),b("p",null,te(n.weather.main.humidity)+" %",1)]),b("div",Mh,[b("p",null,[W(o,{icon:"wind",style:{"font-size":"24px"}})]),b("p",null,te(n.weather.wind.speed)+" m/s",1)])]),b("div",Dh,[b("div",Uh,[b("p",null,[W(o,{icon:"tachometer-alt",style:{"font-size":"24px"}})]),b("p",null,te(n.weather.main.pressure)+" hPa",1)]),b("div",Fh,[b("p",null,[W(o,{icon:"eye",style:{"font-size":"24px"}})]),b("p",null,te(n.weather.visibility/1e3)+" km",1)])]),b("div",jh,[b("div",Bh,[b("p",null,[W(o,{icon:"sun",style:{"font-size":"24px"}})]),b("p",null,te(i.formatTime(n.weather.sys.sunrise)),1)]),b("div",Hh,[b("p",null,[W(o,{icon:"cloud-sun",style:{"font-size":"24px"}})]),b("p",null,te(i.formatTime(n.weather.sys.sunset)),1)])])])):xe("",!0)],2)):xe("",!0)])):xe("",!0)],64)}const zh=Zt(_h,[["render",Vh],["__scopeId","data-v-53fe9e25"]]);var aa={};/**
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
 */const fc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Wh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let m=(a&15)<<2|c>>6,C=c&63;l||(C=64,o||(m=64)),r.push(n[u],n[h],n[m],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new $h;const m=i<<2|a>>4;if(r.push(m),c!==64){const C=a<<4&240|c>>2;if(r.push(C),h!==64){const N=c<<6&192|h;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kh=function(t){const e=fc(t);return dc.encodeByteArray(e,!0)},hc=function(t){return Kh(t).replace(/\./g,"")},pc=function(t){try{return dc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qh=()=>Gh().__FIREBASE_DEFAULTS__,Yh=()=>{if(typeof process>"u"||typeof aa>"u")return;const t=aa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pc(t[1]);return e&&JSON.parse(e)},Xi=()=>{try{return qh()||Yh()||Jh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xh=t=>{var e,n;return(n=(e=Xi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mc=()=>{var t;return(t=Xi())===null||t===void 0?void 0:t.config},gc=t=>{var e;return(e=Xi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Qh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function ep(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rp(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sp(){try{return typeof indexedDB=="object"}catch{return!1}}function ip(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const op="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=op,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ap(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nt(s,a,r)}}function ap(t,e){return t.replace(lp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lp=/\{\$([^}]+)}/g;function cp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(la(i)&&la(o)){if(!Gr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function la(t){return t!==null&&typeof t=="object"}/**
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
 */function cr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ln(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Mn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function up(t,e){const n=new fp(t,e);return n.subscribe.bind(n)}class fp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ls),s.error===void 0&&(s.error=Ls),s.complete===void 0&&(s.complete=Ls);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ls(){}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ht="[DEFAULT]";/**
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
 */class hp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mp(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pp(t){return t===Ht?void 0:t}function mp(t){return t.instantiationMode==="EAGER"}/**
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
 */class gp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const yp={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},vp=G.INFO,_p={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},bp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=_p[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yc{constructor(e){this.name=e,this._logLevel=vp,this._logHandler=bp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const wp=(t,e)=>e.some(n=>t instanceof n);let ca,ua;function Ip(){return ca||(ca=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ep(){return ua||(ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vc=new WeakMap,oi=new WeakMap,_c=new WeakMap,Ms=new WeakMap,Qi=new WeakMap;function Sp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(St(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vc.set(n,t)}).catch(()=>{}),Qi.set(e,t),e}function Tp(t){if(oi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});oi.set(t,e)}let ai={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_c.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cp(t){ai=t(ai)}function Ap(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ds(this),e,...n);return _c.set(r,e.sort?e.sort():[e]),St(r)}:Ep().includes(t)?function(...e){return t.apply(Ds(this),e),St(vc.get(this))}:function(...e){return St(t.apply(Ds(this),e))}}function Op(t){return typeof t=="function"?Ap(t):(t instanceof IDBTransaction&&Tp(t),wp(t,Ip())?new Proxy(t,ai):t)}function St(t){if(t instanceof IDBRequest)return Sp(t);if(Ms.has(t))return Ms.get(t);const e=Op(t);return e!==t&&(Ms.set(t,e),Qi.set(e,t)),e}const Ds=t=>Qi.get(t);function Pp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=St(o);return r&&o.addEventListener("upgradeneeded",l=>{r(St(o.result),l.oldVersion,l.newVersion,St(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const xp=["get","getKey","getAll","getAllKeys","count"],kp=["put","add","delete","clear"],Us=new Map;function fa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Us.get(e))return Us.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xp.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Us.set(e,i),i}Cp(t=>({...t,get:(e,n,r)=>fa(e,n)||t.get(e,n,r),has:(e,n)=>!!fa(e,n)||t.has(e,n)}));/**
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
 */class Rp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Np(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Np(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const li="@firebase/app",da="0.10.11";/**
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
 */const it=new yc("@firebase/app"),Lp="@firebase/app-compat",Mp="@firebase/analytics-compat",Dp="@firebase/analytics",Up="@firebase/app-check-compat",Fp="@firebase/app-check",jp="@firebase/auth",Bp="@firebase/auth-compat",Hp="@firebase/database",Vp="@firebase/database-compat",zp="@firebase/functions",Wp="@firebase/functions-compat",$p="@firebase/installations",Kp="@firebase/installations-compat",Gp="@firebase/messaging",qp="@firebase/messaging-compat",Yp="@firebase/performance",Jp="@firebase/performance-compat",Xp="@firebase/remote-config",Qp="@firebase/remote-config-compat",Zp="@firebase/storage",em="@firebase/storage-compat",tm="@firebase/firestore",nm="@firebase/vertexai-preview",rm="@firebase/firestore-compat",sm="firebase",im="10.13.2";/**
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
 */const ci="[DEFAULT]",om={[li]:"fire-core",[Lp]:"fire-core-compat",[Dp]:"fire-analytics",[Mp]:"fire-analytics-compat",[Fp]:"fire-app-check",[Up]:"fire-app-check-compat",[jp]:"fire-auth",[Bp]:"fire-auth-compat",[Hp]:"fire-rtdb",[Vp]:"fire-rtdb-compat",[zp]:"fire-fn",[Wp]:"fire-fn-compat",[$p]:"fire-iid",[Kp]:"fire-iid-compat",[Gp]:"fire-fcm",[qp]:"fire-fcm-compat",[Yp]:"fire-perf",[Jp]:"fire-perf-compat",[Xp]:"fire-rc",[Qp]:"fire-rc-compat",[Zp]:"fire-gcs",[em]:"fire-gcs-compat",[tm]:"fire-fst",[rm]:"fire-fst-compat",[nm]:"fire-vertex","fire-js":"fire-js",[sm]:"fire-js-all"};/**
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
 */const qr=new Map,am=new Map,ui=new Map;function ha(t,e){try{t.container.addComponent(e)}catch(n){it.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zn(t){const e=t.name;if(ui.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;ui.set(e,t);for(const n of qr.values())ha(n,t);for(const n of am.values())ha(n,t);return!0}function bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function et(t){return t.settings!==void 0}/**
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
 */const lm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tt=new lr("app","Firebase",lm);/**
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
 */class cm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=im;function wc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ci,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tt.create("bad-app-name",{appName:String(s)});if(n||(n=mc()),!n)throw Tt.create("no-options");const i=qr.get(s);if(i){if(Gr(n,i.options)&&Gr(r,i.config))return i;throw Tt.create("duplicate-app",{appName:s})}const o=new gp(s);for(const l of ui.values())o.addComponent(l);const a=new cm(n,r,o);return qr.set(s,a),a}function um(t=ci){const e=qr.get(t);if(!e&&t===ci&&mc())return wc();if(!e)throw Tt.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let s=(r=om[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(a.join(" "));return}Zn(new _n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const fm="firebase-heartbeat-database",dm=1,er="firebase-heartbeat-store";let Fs=null;function Ic(){return Fs||(Fs=Pp(fm,dm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(er)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tt.create("idb-open",{originalErrorMessage:t.message})})),Fs}async function hm(t){try{const n=(await Ic()).transaction(er),r=await n.objectStore(er).get(Ec(t));return await n.done,r}catch(e){if(e instanceof Nt)it.warn(e.message);else{const n=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(n.message)}}}async function pa(t,e){try{const r=(await Ic()).transaction(er,"readwrite");await r.objectStore(er).put(e,Ec(t)),await r.done}catch(n){if(n instanceof Nt)it.warn(n.message);else{const r=Tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});it.warn(r.message)}}}function Ec(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pm=1024,mm=30*24*60*60*1e3;class gm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ma();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=mm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){it.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ma(),{heartbeatsToSend:r,unsentEntries:s}=ym(this._heartbeatsCache.heartbeats),i=hc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return it.warn(n),""}}}function ma(){return new Date().toISOString().substring(0,10)}function ym(t,e=pm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ga(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ga(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sp()?ip().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ga(t){return hc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _m(t){Zn(new _n("platform-logger",e=>new Rp(e),"PRIVATE")),Zn(new _n("heartbeat",e=>new gm(e),"PRIVATE")),dn(li,da,t),dn(li,da,"esm2017"),dn("fire-js","")}_m("");var bm="firebase",wm="10.13.2";/**
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
 */dn(bm,wm,"app");function Zi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Im=Sc,Tc=new lr("auth","Firebase",Sc());/**
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
 */const Yr=new yc("@firebase/auth");function Em(t,...e){Yr.logLevel<=G.WARN&&Yr.warn(`Auth (${ur}): ${t}`,...e)}function Nr(t,...e){Yr.logLevel<=G.ERROR&&Yr.error(`Auth (${ur}): ${t}`,...e)}/**
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
 */function Ne(t,...e){throw eo(t,...e)}function We(t,...e){return eo(t,...e)}function Cc(t,e,n){const r=Object.assign(Object.assign({},Im()),{[e]:n});return new lr("auth","Firebase",r).create(e,{appName:t.name})}function Ct(t){return Cc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tc.create(t,...e)}function L(t,e,...n){if(!t)throw eo(e,...n)}function tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nr(e),new Error(e)}function ot(t,e){t||tt(e)}/**
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
 */function fi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sm(){return ya()==="http:"||ya()==="https:"}function ya(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Tm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sm()||tp()||"connection"in navigator)?navigator.onLine:!0}function Cm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=Zh()||np()}get(){return Tm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function to(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ac{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Am={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Om=new fr(3e4,6e4);function en(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lt(t,e,n,r,s={}){return Oc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=cr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return ep()||(c.referrerPolicy="no-referrer"),Ac.fetch()(Pc(t,t.config.apiHost,n,a),c)})}async function Oc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Am),e);try{const s=new xm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Cr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Cr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Cr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Cc(t,u,c);Ne(t,u)}}catch(s){if(s instanceof Nt)throw s;Ne(t,"network-request-failed",{message:String(s)})}}async function hs(t,e,n,r,s={}){const i=await Lt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ne(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Pc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?to(t.config,s):`${t.config.apiScheme}://${s}`}function Pm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),Om.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=We(t,e,r);return s.customData._tokenResponse=n,s}function va(t){return t!==void 0&&t.enterprise!==void 0}class km{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Pm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Rm(t,e){return Lt(t,"GET","/v2/recaptchaConfig",en(t,e))}/**
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
 */async function Nm(t,e){return Lt(t,"POST","/v1/accounts:delete",e)}async function xc(t,e){return Lt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lm(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=no(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wn(js(s.auth_time)),issuedAtTime:Wn(js(s.iat)),expirationTime:Wn(js(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function js(t){return Number(t)*1e3}function no(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const s=pc(n);return s?JSON.parse(s):(Nr("Failed to decode base64 JWT payload"),null)}catch(s){return Nr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _a(t){const e=no(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&Mm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Mm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Dm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class di{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await tr(t,xc(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kc(i.providerUserInfo):[],a=Fm(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new di(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Um(t){const e=ut(t);await Jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kc(t){return t.map(e=>{var{providerId:n}=e,r=Zi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jm(t,e){const n=await Oc(t,{},async()=>{const r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Pc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ac.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Bm(t,e){return Lt(t,"POST","/v2/accounts:revokeToken",en(t,e))}/**
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
 */class hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_a(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=_a(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hn;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hn,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
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
 */function pt(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new di(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await tr(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Lm(this,e)}reload(){return Um(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(Ct(this.auth));const e=await this.getIdToken();return await tr(this,Nm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,C=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,M=(a=n.tenantId)!==null&&a!==void 0?a:void 0,B=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:O,isAnonymous:j,providerData:ie,stsTokenManager:ne}=n;L(k&&ne,e,"internal-error");const Oe=hn.fromJSON(this.name,ne);L(typeof k=="string",e,"internal-error"),pt(h,e.name),pt(m,e.name),L(typeof O=="boolean",e,"internal-error"),L(typeof j=="boolean",e,"internal-error"),pt(C,e.name),pt(N,e.name),pt(M,e.name),pt(B,e.name),pt(w,e.name),pt(S,e.name);const dt=new nt({uid:k,auth:e,email:m,emailVerified:O,displayName:h,isAnonymous:j,photoURL:N,phoneNumber:C,tenantId:M,stsTokenManager:Oe,createdAt:w,lastLoginAt:S});return ie&&Array.isArray(ie)&&(dt.providerData=ie.map(Ye=>Object.assign({},Ye))),B&&(dt._redirectEventId=B),dt}static async _fromIdTokenResponse(e,n,r=!1){const s=new hn;s.updateFromServerResponse(n);const i=new nt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Jr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];L(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new hn;a.updateFromIdToken(r);const l=new nt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new di(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const ba=new Map;function rt(t){ot(t instanceof Function,"Expected a class definition");let e=ba.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ba.set(t,e),e)}/**
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
 */class Rc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rc.type="NONE";const wa=Rc;/**
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
 */function Lr(t,e,n){return`firebase:${t}:${e}:${n}`}class pn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Lr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Lr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new pn(rt(wa),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||rt(wa);const o=Lr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=nt._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new pn(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new pn(i,e,r))}}/**
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
 */function Ia(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fc(e))return"Blackberry";if(jc(e))return"Webos";if(Lc(e))return"Safari";if((e.includes("chrome/")||Mc(e))&&!e.includes("edge/"))return"Chrome";if(Uc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nc(t=me()){return/firefox\//i.test(t)}function Lc(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mc(t=me()){return/crios\//i.test(t)}function Dc(t=me()){return/iemobile/i.test(t)}function Uc(t=me()){return/android/i.test(t)}function Fc(t=me()){return/blackberry/i.test(t)}function jc(t=me()){return/webos/i.test(t)}function ro(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Hm(t=me()){var e;return ro(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vm(){return rp()&&document.documentMode===10}function Bc(t=me()){return ro(t)||Uc(t)||jc(t)||Fc(t)||/windows phone/i.test(t)||Dc(t)}/**
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
 */function Hc(t,e=[]){let n;switch(t){case"Browser":n=Ia(me());break;case"Worker":n=`${Ia(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ur}/${r}`}/**
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
 */class zm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Wm(t,e={}){return Lt(t,"GET","/v2/passwordPolicy",en(t,e))}/**
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
 */const $m=6;class Km{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$m,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Gm{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ea(this),this.idTokenSubscription=new Ea(this),this.beforeStateQueue=new zm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await pn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xc(this,{idToken:e}),r=await nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(et(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(Ct(this));const n=e?ut(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(Ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(Ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wm(this),n=new Km(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Bm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Em(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function En(t){return ut(t)}class Ea{constructor(e){this.auth=e,this.observer=null,this.addObserver=up(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ps={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qm(t){ps=t}function Vc(t){return ps.loadJS(t)}function Ym(){return ps.recaptchaEnterpriseScript}function Jm(){return ps.gapiScript}function Xm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Qm="recaptcha-enterprise",Zm="NO_RECAPTCHA";class eg{constructor(e){this.type=Qm,this.auth=En(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Rm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new km(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;va(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Zm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&va(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ym();l.length!==0&&(l+=a),Vc(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Sa(t,e,n,r=!1){const s=new eg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ta(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Sa(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sa(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function tg(t,e){const n=bc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Gr(i,e??{}))return s;Ne(s,"already-initialized")}return n.initialize({options:e})}function ng(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rg(t,e,n){const r=En(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=zc(e),{host:o,port:a}=sg(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ig()}function zc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sg(t){const e=zc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ca(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ca(o)}}}function Ca(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ig(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class so{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,n){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}async function og(t,e){return Lt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ag(t,e){return hs(t,"POST","/v1/accounts:signInWithPassword",en(t,e))}/**
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
 */async function lg(t,e){return hs(t,"POST","/v1/accounts:signInWithEmailLink",en(t,e))}async function cg(t,e){return hs(t,"POST","/v1/accounts:signInWithEmailLink",en(t,e))}/**
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
 */class nr extends so{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new nr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ta(e,n,"signInWithPassword",ag);case"emailLink":return lg(e,{email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ta(e,r,"signUpPassword",og);case"emailLink":return cg(e,{idToken:n,email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mn(t,e){return hs(t,"POST","/v1/accounts:signInWithIdp",en(t,e))}/**
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
 */const ug="http://localhost";class Jt extends so{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ne("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Jt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,mn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mn(e,n)}buildRequest(){const e={requestUri:ug,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cr(n)}return e}}/**
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
 */function fg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dg(t){const e=Ln(Mn(t)).link,n=e?Ln(Mn(e)).deep_link_id:null,r=Ln(Mn(t)).deep_link_id;return(r?Ln(Mn(r)).link:null)||r||n||e||t}class io{constructor(e){var n,r,s,i,o,a;const l=Ln(Mn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=fg((s=l.mode)!==null&&s!==void 0?s:null);L(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dg(e);try{return new io(n)}catch{return null}}}/**
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
 */class Sn{constructor(){this.providerId=Sn.PROVIDER_ID}static credential(e,n){return nr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=io.parseLink(n);return L(r,"argument-error"),nr._fromEmailAndCode(e,r.code,r.tenantId)}}Sn.PROVIDER_ID="password";Sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dr extends Wc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vt extends dr{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
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
 */class _t extends dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
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
 */class bt extends dr{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
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
 */class wt extends dr{constructor(){super("twitter.com")}static credential(e,n){return Jt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
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
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nt._fromIdTokenResponse(e,r,s),o=Aa(r);return new bn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Aa(r);return new bn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Aa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Xr extends Nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Xr(e,n,r,s)}}function $c(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xr._fromErrorAndOperation(t,i,e,r):i})}async function hg(t,e,n=!1){const r=await tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bn._forOperation(t,"link",r)}/**
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
 */async function pg(t,e,n=!1){const{auth:r}=t;if(et(r.app))return Promise.reject(Ct(r));const s="reauthenticate";try{const i=await tr(t,$c(r,s,e,t),n);L(i.idToken,r,"internal-error");const o=no(i.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),bn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ne(r,"user-mismatch"),i}}/**
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
 */async function Kc(t,e,n=!1){if(et(t.app))return Promise.reject(Ct(t));const r="signIn",s=await $c(t,r,e),i=await bn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function mg(t,e){return Kc(En(t),e)}/**
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
 */async function gg(t){const e=En(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function yg(t,e,n){return et(t.app)?Promise.reject(Ct(t)):mg(ut(t),Sn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gg(t),r})}function vg(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function _g(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function bg(t,e,n,r){return ut(t).onAuthStateChanged(e,n,r)}function wg(t){return ut(t).signOut()}const Qr="__sak";/**
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
 */class Gc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qr,"1"),this.storage.removeItem(Qr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ig=1e3,Eg=10;class qc extends Gc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Vm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Eg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ig)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qc.type="LOCAL";const Sg=qc;/**
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
 */class Yc extends Gc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yc.type="SESSION";const Jc=Yc;/**
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
 */function Tg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ms(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Tg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
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
 */function oo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Cg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=oo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const m=h;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $e(){return window}function Ag(t){$e().location.href=t}/**
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
 */function Xc(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function Og(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xg(){return Xc()?self:null}/**
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
 */const Qc="firebaseLocalStorageDb",kg=1,Zr="firebaseLocalStorage",Zc="fbase_key";class hr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gs(t,e){return t.transaction([Zr],e?"readwrite":"readonly").objectStore(Zr)}function Rg(){const t=indexedDB.deleteDatabase(Qc);return new hr(t).toPromise()}function hi(){const t=indexedDB.open(Qc,kg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zr,{keyPath:Zc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zr)?e(r):(r.close(),await Rg(),e(await hi()))})})}async function Oa(t,e,n){const r=gs(t,!0).put({[Zc]:e,value:n});return new hr(r).toPromise()}async function Ng(t,e){const n=gs(t,!1).get(e),r=await new hr(n).toPromise();return r===void 0?null:r.value}function Pa(t,e){const n=gs(t,!0).delete(e);return new hr(n).toPromise()}const Lg=800,Mg=3;class eu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Mg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(xg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Og(),!this.activeServiceWorker)return;this.sender=new Cg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hi();return await Oa(e,Qr,"1"),await Pa(e,Qr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Oa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ng(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=gs(s,!1).getAll();return new hr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eu.type="LOCAL";const Dg=eu;new fr(3e4,6e4);/**
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
 */function Ug(t,e){return e?rt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ao extends so{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fg(t){return Kc(t.auth,new ao(t),t.bypassAuthState)}function jg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),pg(n,new ao(t),t.bypassAuthState)}async function Bg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),hg(n,new ao(t),t.bypassAuthState)}/**
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
 */class tu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fg;case"linkViaPopup":case"linkViaRedirect":return Bg;case"reauthViaPopup":case"reauthViaRedirect":return jg;default:Ne(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hg=new fr(2e3,1e4);class sn extends tu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hg.get())};e()}}sn.currentPopupAction=null;/**
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
 */const Vg="pendingRedirect",Mr=new Map;class zg extends tu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mr.get(this.auth._key());if(!e){try{const r=await Wg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mr.set(this.auth._key(),e)}return this.bypassAuthState||Mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wg(t,e){const n=Gg(e),r=Kg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $g(t,e){Mr.set(t._key(),e)}function Kg(t){return rt(t._redirectPersistence)}function Gg(t){return Lr(Vg,t.config.apiKey,t.name)}async function qg(t,e,n=!1){if(et(t.app))return Promise.reject(Ct(t));const r=En(t),s=Ug(r,e),o=await new zg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Yg=10*60*1e3;class Jg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(We(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yg&&this.cachedEventUids.clear(),this.cachedEventUids.has(xa(e))}saveEventToCache(e){this.cachedEventUids.add(xa(e)),this.lastProcessedEventTime=Date.now()}}function xa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nu(t);default:return!1}}/**
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
 */async function Qg(t,e={}){return Lt(t,"GET","/v1/projects",e)}/**
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
 */const Zg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ey=/^https?/;async function ty(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qg(t);for(const n of e)try{if(ny(n))return}catch{}Ne(t,"unauthorized-domain")}function ny(t){const e=fi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ey.test(n))return!1;if(Zg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ry=new fr(3e4,6e4);function ka(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sy(t){return new Promise((e,n)=>{var r,s,i;function o(){ka(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ka(),n(We(t,"network-request-failed"))},timeout:ry.get()})}if(!((s=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$e().gapi)===null||i===void 0)&&i.load)o();else{const a=Xm("iframefcb");return $e()[a]=()=>{gapi.load?o():n(We(t,"network-request-failed"))},Vc(`${Jm()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Dr=null,e})}let Dr=null;function iy(t){return Dr=Dr||sy(t),Dr}/**
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
 */const oy=new fr(5e3,15e3),ay="__/auth/iframe",ly="emulator/auth/iframe",cy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fy(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?to(e,ly):`https://${t.config.authDomain}/${ay}`,r={apiKey:e.apiKey,appName:t.name,v:ur},s=uy.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${cr(r).slice(1)}`}async function dy(t){const e=await iy(t),n=$e().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:fy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=We(t,"network-request-failed"),a=$e().setTimeout(()=>{i(o)},oy.get());function l(){$e().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const hy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},py=500,my=600,gy="_blank",yy="http://localhost";class Ra{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vy(t,e,n,r=py,s=my){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hy),{width:r.toString(),height:s.toString(),top:i,left:o}),c=me().toLowerCase();n&&(a=Mc(c)?gy:n),Nc(c)&&(e=e||yy,l.scrollbars="yes");const u=Object.entries(l).reduce((m,[C,N])=>`${m}${C}=${N},`,"");if(Hm(c)&&a!=="_self")return _y(e||"",a),new Ra(null);const h=window.open(e||"",a,u);L(h,t,"popup-blocked");try{h.focus()}catch{}return new Ra(h)}function _y(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const by="__/auth/handler",wy="emulator/auth/handler",Iy=encodeURIComponent("fac");async function Na(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ur,eventId:s};if(e instanceof Wc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof dr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Iy}=${encodeURIComponent(l)}`:"";return`${Ey(t)}?${cr(a).slice(1)}${c}`}function Ey({config:t}){return t.emulator?to(t,wy):`https://${t.authDomain}/${by}`}/**
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
 */const Bs="webStorageSupport";class Sy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jc,this._completeRedirectFn=qg,this._overrideRedirectResult=$g}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Na(e,n,r,fi(),s);return vy(e,o,oo())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Na(e,n,r,fi(),s);return Ag(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dy(e),r=new Jg(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bs,{type:Bs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Bs];o!==void 0&&n(!!o),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ty(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bc()||Lc()||ro()}}const Ty=Sy;var La="@firebase/auth",Ma="1.7.9";/**
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
 */class Cy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ay(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Oy(t){Zn(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hc(t)},c=new Gm(r,s,i,l);return ng(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zn(new _n("auth-internal",e=>{const n=En(e.getProvider("auth").getImmediate());return(r=>new Cy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(La,Ma,Ay(t)),dn(La,Ma,"esm2017")}/**
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
 */const Py=5*60,xy=gc("authIdTokenMaxAge")||Py;let Da=null;const ky=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xy)return;const s=n==null?void 0:n.token;Da!==s&&(Da=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ry(t=um()){const e=bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tg(t,{popupRedirectResolver:Ty,persistence:[Dg,Sg,Jc]}),r=gc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ky(i.toString());_g(n,o,()=>o(n.currentUser)),vg(n,a=>o(a))}}const s=Xh("auth");return s&&rg(n,`http://${s}`),n}function Ny(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}qm({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=We("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ny().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Oy("Browser");const Ly={apiKey:"AIzaSyATsp84nUo4rjmOyOHxALvKkFn_cy3-cIQ",authDomain:"weatherapp-53b4c.firebaseapp.com",projectId:"weatherapp-53b4c",storageBucket:"weatherapp-53b4c.appspot.com",messagingSenderId:"349939297975",appId:"1:349939297975:web:5a1184c0dfae43e854e732",measurementId:"G-2ZDHMEPKK2"},My=wc(Ly),pi=Ry(My),Dy=async(t,e)=>(await yg(pi,t,e)).user,Uy={data(){return{email:"",password:""}},methods:{async login(){try{await Dy(this.email,this.password),alert("Login successful!"),this.closeOverlay()}catch(t){alert(t.message)}},closeOverlay(){this.$emit("close")},checkClose(t){const e=this.$refs.formContainer;e&&!e.contains(t.target)&&this.closeOverlay()}}},Fy={class:"labelContainer"},jy={class:"labelContainer"};function By(t,e,n,r,s,i){return re(),oe("div",{class:"overlay",onClick:e[5]||(e[5]=(...o)=>i.checkClose&&i.checkClose(...o))},[b("div",{class:"formContainer",ref:"formContainer",onClick:e[4]||(e[4]=Kr(()=>{},["stop"]))},[b("button",{class:"close-btn",onClick:e[0]||(e[0]=(...o)=>i.closeOverlay&&i.closeOverlay(...o))},"X"),b("form",{onSubmit:e[3]||(e[3]=Kr((...o)=>i.login&&i.login(...o),["prevent"]))},[b("div",Fy,[e[6]||(e[6]=b("label",null,"Email:",-1)),It(b("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.email=o),type:"email",required:""},null,512),[[rn,s.email]])]),b("div",jy,[e[7]||(e[7]=b("label",null,"Password:",-1)),It(b("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.password=o),type:"password",required:""},null,512),[[rn,s.password]])]),e[8]||(e[8]=b("button",{type:"submit"},"Login",-1))],32)],512)])}const Hy=Zt(Uy,[["render",By],["__scopeId","data-v-43c3f953"]]),Vy={data(){return{name:"",email:"",password:"",confirmPassword:""}},methods:{signUp(){alert("You don't have a permission to register a new user for now. Please try again in another update.")},closeOverlay(){this.$emit("close")},checkClose(t){const e=this.$refs.formContainer;e&&!e.contains(t.target)&&this.closeOverlay()}}},zy={class:"labelContainer"},Wy={class:"labelContainer"},$y={class:"labelContainer"},Ky={class:"labelContainer"};function Gy(t,e,n,r,s,i){return re(),oe("div",{class:"overlay",onClick:e[7]||(e[7]=(...o)=>i.checkClose&&i.checkClose(...o))},[b("div",{class:"formContainer",ref:"formContainer",onClick:e[6]||(e[6]=Kr(()=>{},["stop"]))},[b("button",{class:"close-btn",onClick:e[0]||(e[0]=(...o)=>i.closeOverlay&&i.closeOverlay(...o))},"X"),b("form",{onSubmit:e[5]||(e[5]=Kr((...o)=>i.signUp&&i.signUp(...o),["prevent"]))},[b("div",zy,[e[8]||(e[8]=b("label",null,"Name:",-1)),It(b("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.name=o),type:"text",required:""},null,512),[[rn,s.name]])]),b("div",Wy,[e[9]||(e[9]=b("label",null,"Email:",-1)),It(b("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.email=o),type:"email",required:""},null,512),[[rn,s.email]])]),b("div",$y,[e[10]||(e[10]=b("label",null,"Password:",-1)),It(b("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>s.password=o),type:"password",required:""},null,512),[[rn,s.password]])]),b("div",Ky,[e[11]||(e[11]=b("label",null,"Confirm Password:",-1)),It(b("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>s.confirmPassword=o),type:"password",required:""},null,512),[[rn,s.confirmPassword]])]),e[12]||(e[12]=b("button",{type:"submit"},"Sign Up",-1))],32)],512)])}const qy=Zt(Vy,[["render",Gy],["__scopeId","data-v-977524c8"]]),Yy={props:["isUserLoggedIn"],methods:{cms(){alert("This feature will be avaliable in next patch.")},showLogin(){this.isLoginVisible=!0},showSignUp(){this.isSignUpVisible=!0},async logOut(){try{await wg(pi),this.$emit("updateLoginStatus",!1),alert("You are successfully logged out.")}catch(t){console.error("Log out failed:",t)}}},components:{LoginOverlay:Hy,SignUpOverlay:qy},data(){return{isLoginVisible:!1,isSignUpVisible:!1}},mounted(){bg(pi,t=>{t?this.$emit("updateLoginStatus",!0):this.$emit("updateLoginStatus",!1)})}},Jy={class:"menuContainer"},Xy={key:0,class:"btnContainer"},Qy={key:1,class:"btnContainer"};function Zy(t,e,n,r,s,i){const o=Wt("LoginOverlay"),a=Wt("SignUpOverlay");return re(),oe("div",Jy,[e[5]||(e[5]=b("h3",null,"Weather App",-1)),n.isUserLoggedIn?(re(),oe("div",Qy,[b("button",{onClick:e[2]||(e[2]=(...l)=>i.logOut&&i.logOut(...l))},"Log Out")])):(re(),oe("div",Xy,[b("button",{onClick:e[0]||(e[0]=(...l)=>i.showLogin&&i.showLogin(...l))},"Log in"),b("button",{onClick:e[1]||(e[1]=(...l)=>i.showSignUp&&i.showSignUp(...l))},"Register")])),s.isLoginVisible?(re(),zr(o,{key:2,onClose:e[3]||(e[3]=l=>s.isLoginVisible=!1)})):xe("",!0),s.isSignUpVisible?(re(),zr(a,{key:3,onClose:e[4]||(e[4]=l=>s.isSignUpVisible=!1)})):xe("",!0)])}const ev=Zt(Yy,[["render",Zy],["__scopeId","data-v-89ff612e"]]),tv={data(){return{currentYear:new Date().getFullYear()}}},nv={class:"main-footer"};function rv(t,e,n,r,s,i){return re(),oe("footer",nv,[b("p",null,"© "+te(s.currentYear)+" PaingThet. All rights reserved.",1)])}const sv=Zt(tv,[["render",rv],["__scopeId","data-v-c0a41738"]]),iv={props:["cityInput","isLoading"],emits:["updateCity","getWeather","clearData"],methods:{getWeather(){this.$emit("getWeather")},clearData(){this.$emit("clearData")},updateCityInput(t){this.$emit("update:cityInput",t.target.value)}}},ov={class:"city-input"},av=["value"],lv=["disabled"],cv=["disabled"];function uv(t,e,n,r,s,i){return re(),oe("div",ov,[b("input",{value:n.cityInput,onInput:e[0]||(e[0]=(...o)=>i.updateCityInput&&i.updateCityInput(...o)),placeholder:"Enter City Name",onKeyup:e[1]||(e[1]=hh((...o)=>i.getWeather&&i.getWeather(...o),["enter"])),ref:"cityName"},null,40,av),b("button",{onClick:e[2]||(e[2]=(...o)=>i.getWeather&&i.getWeather(...o)),disabled:n.isLoading||!n.cityInput.trim(),class:"getBtn"},"Get Weather",8,lv),b("button",{onClick:e[3]||(e[3]=(...o)=>i.clearData&&i.clearData(...o)),disabled:n.isLoading||!n.cityInput,class:"resetBtn"},"Clear",8,cv)])}const fv=Zt(iv,[["render",uv]]),dv={components:{WeatherDisplay:zh,Mainmenu:ev,Mainfooter:sv,CityInput:fv},data(){return{isUserLoggedIn:!1,city:"",weather:null,errorMessage:null,isLoading:!1,backgroundClass:"",cityInput:""}},mounted(){const t=localStorage.getItem("lastCity");t&&(this.city=t,this.getWeatherData())},methods:{handleLoginStatus(t){this.isUserLoggedIn=t},validateInput(){const t=this.city.trim();if(this.city){if(!isNaN(t))return this.errorMessage="Hey don't try to type Numbers in City Name!",!1}else return this.errorMessage="City name cannot be empty!",!1;return!0},async getWeatherData(){if(this.validateInput()){this.weather&&localStorage.setItem("lastCity",this.city),this.isLoading=!0;try{const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=cf03c9aebe76a12e49ca8a2f6dafb57e`);if(!e.ok)throw new Error(`${this.city} City is not found or May be a forgotten Ancient City`);const n=await e.json();this.weather=n,this.errorMessage=null}catch(t){t.message.includes("City is not found")?this.errorMessage=t.message:this.errorMessage="Network issue or API unavailable. Please try again later.",this.weather=null}finally{this.isLoading=!1}}},clearData(){this.city="",this.weather=null,this.errorMessage=null}}},hv={id:"app",class:"text-center"},pv={key:0,class:"error-message"},mv={key:1,class:"spacer"},gv={key:3,class:"spinner"};function yv(t,e,n,r,s,i){const o=Wt("Mainmenu"),a=Wt("CityInput"),l=Wt("WeatherDisplay"),c=Wt("Mainfooter");return re(),oe("div",hv,[W(o,{onUpdateLoginStatus:i.handleLoginStatus,isUserLoggedIn:s.isUserLoggedIn},null,8,["onUpdateLoginStatus","isUserLoggedIn"]),W(a,{cityInput:s.city,"onUpdate:cityInput":e[0]||(e[0]=u=>s.city=u),isLoading:s.isLoading,onGetWeather:i.getWeatherData,onClearData:i.clearData},null,8,["cityInput","isLoading","onGetWeather","onClearData"]),s.errorMessage?(re(),oe("div",pv,[b("p",null,te(s.errorMessage),1)])):xe("",!0),s.weather?xe("",!0):(re(),oe("div",mv)),s.weather?(re(),zr(l,{key:2,weather:s.weather,isUserLoggedIn:s.isUserLoggedIn,condition:s.weather.weather[0].main.toLowerCase()},null,8,["weather","isUserLoggedIn","condition"])):xe("",!0),s.isLoading?(re(),oe("div",gv)):xe("",!0),W(c)])}const vv=Zt(dv,[["render",yv],["__scopeId","data-v-3df8443b"]]),Ua=()=>{};let lo={},ru={},su=null,iu={mark:Ua,measure:Ua};try{typeof window<"u"&&(lo=window),typeof document<"u"&&(ru=document),typeof MutationObserver<"u"&&(su=MutationObserver),typeof performance<"u"&&(iu=performance)}catch{}const{userAgent:Fa=""}=lo.navigator||{},At=lo,X=ru,ja=su,Ar=iu;At.document;const ft=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",ou=~Fa.indexOf("MSIE")||~Fa.indexOf("Trident/");var Z="classic",au="duotone",Te="sharp",Ce="sharp-duotone",_v=[Z,au,Te,Ce],bv={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Ba={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},wv=["kit"],Iv=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Ev=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Sv={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Tv={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Cv={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Av={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Ov={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Pv={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},lu={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},xv=["solid","regular","light","thin","duotone","brands"],cu=[1,2,3,4,5,6,7,8,9,10],kv=cu.concat([11,12,13,14,15,16,17,18,19,20]),Dn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rv=[...Object.keys(Av),...xv,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Dn.GROUP,Dn.SWAP_OPACITY,Dn.PRIMARY,Dn.SECONDARY].concat(cu.map(t=>"".concat(t,"x"))).concat(kv.map(t=>"w-".concat(t))),Nv={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Lv={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Mv={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ha={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const at="___FONT_AWESOME___",mi=16,uu="fa",fu="svg-inline--fa",Xt="data-fa-i2svg",gi="data-fa-pseudo-element",Dv="data-fa-pseudo-element-pending",co="data-prefix",uo="data-icon",Va="fontawesome-i2svg",Uv="async",Fv=["HTML","HEAD","STYLE","SCRIPT"],du=(()=>{try{return!0}catch{return!1}})(),hu=[Z,Te,Ce];function pr(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Z]}})}const pu={...lu};pu[Z]={...lu[Z],...Ba.kit,...Ba["kit-duotone"]};const Kt=pr(pu),yi={...Pv};yi[Z]={...yi[Z],...Ha.kit,...Ha["kit-duotone"]};const rr=pr(yi),vi={...Ov};vi[Z]={...vi[Z],...Mv.kit};const Gt=pr(vi),_i={...Cv};_i[Z]={..._i[Z],...Lv.kit};const jv=pr(_i),Bv=Iv,mu="fa-layers-text",Hv=Ev,Vv={...bv};pr(Vv);const zv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Hs=Dn,wn=new Set;Object.keys(rr[Z]).map(wn.add.bind(wn));Object.keys(rr[Te]).map(wn.add.bind(wn));Object.keys(rr[Ce]).map(wn.add.bind(wn));const Wv=[...wv,...Rv],$n=At.FontAwesomeConfig||{};function $v(t){var e=X.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Kv(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}X&&typeof X.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=Kv($v(n));s!=null&&($n[r]=s)});const gu={styleDefault:"solid",familyDefault:"classic",cssPrefix:uu,replacementClass:fu,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$n.familyPrefix&&($n.cssPrefix=$n.familyPrefix);const In={...gu,...$n};In.autoReplaceSvg||(In.observeMutations=!1);const P={};Object.keys(gu).forEach(t=>{Object.defineProperty(P,t,{enumerable:!0,set:function(e){In[t]=e,Kn.forEach(n=>n(P))},get:function(){return In[t]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){In.cssPrefix=t,Kn.forEach(e=>e(P))},get:function(){return In.cssPrefix}});At.FontAwesomeConfig=P;const Kn=[];function Gv(t){return Kn.push(t),()=>{Kn.splice(Kn.indexOf(t),1)}}const mt=mi,Be={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qv(t){if(!t||!ft)return;const e=X.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=X.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(e,r),t}const Yv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sr(){let t=12,e="";for(;t-- >0;)e+=Yv[Math.random()*62|0];return e}function Tn(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function fo(t){return t.classList?Tn(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function yu(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jv(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(yu(t[n]),'" '),"").trim()}function ys(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ho(t){return t.size!==Be.size||t.x!==Be.x||t.y!==Be.y||t.rotate!==Be.rotate||t.flipX||t.flipY}function Xv(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:c}}function Qv(t){let{transform:e,width:n=mi,height:r=mi,startCentered:s=!1}=t,i="";return s&&ou?i+="translate(".concat(e.x/mt-n/2,"em, ").concat(e.y/mt-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/mt,"em), calc(-50% + ").concat(e.y/mt,"em)) "):i+="translate(".concat(e.x/mt,"em, ").concat(e.y/mt,"em) "),i+="scale(".concat(e.size/mt*(e.flipX?-1:1),", ").concat(e.size/mt*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Zv=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function vu(){const t=uu,e=fu,n=P.cssPrefix,r=P.replacementClass;let s=Zv;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let za=!1;function Vs(){P.autoAddCss&&!za&&(qv(vu()),za=!0)}var e_={mixout(){return{dom:{css:vu,insertCss:Vs}}},hooks(){return{beforeDOMElementCreation(){Vs()},beforeI2svg(){Vs()}}}};const lt=At||{};lt[at]||(lt[at]={});lt[at].styles||(lt[at].styles={});lt[at].hooks||(lt[at].hooks={});lt[at].shims||(lt[at].shims=[]);var He=lt[at];const _u=[],bu=function(){X.removeEventListener("DOMContentLoaded",bu),es=1,_u.map(t=>t())};let es=!1;ft&&(es=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),es||X.addEventListener("DOMContentLoaded",bu));function t_(t){ft&&(es?setTimeout(t,0):_u.push(t))}function mr(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?yu(t):"<".concat(e," ").concat(Jv(n),">").concat(r.map(mr).join(""),"</").concat(e,">")}function Wa(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var zs=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,c,u;for(r===void 0?(l=1,u=e[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=a(u,e[c],c,e);return u};function n_(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function bi(t){const e=n_(t);return e.length===1?e[0].toString(16):null}function r_(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function $a(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function wi(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=$a(e);typeof He.hooks.addPack=="function"&&!r?He.hooks.addPack(t,$a(e)):He.styles[t]={...He.styles[t]||{},...s},t==="fas"&&wi("fa",e)}const{styles:zt,shims:s_}=He,i_={[Z]:Object.values(Gt[Z]),[Te]:Object.values(Gt[Te]),[Ce]:Object.values(Gt[Ce])};let po=null,wu={},Iu={},Eu={},Su={},Tu={};const o_={[Z]:Object.keys(Kt[Z]),[Te]:Object.keys(Kt[Te]),[Ce]:Object.keys(Kt[Ce])};function a_(t){return~Wv.indexOf(t)}function l_(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!a_(s)?s:null}const Cu=()=>{const t=r=>zs(zt,(s,i,o)=>(s[o]=zs(i,r,{}),s),{});wu=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),Iu=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Tu=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in zt||P.autoFetchSvg,n=zs(s_,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});Eu=n.names,Su=n.unicodes,po=vs(P.styleDefault,{family:P.familyDefault})};Gv(t=>{po=vs(t.styleDefault,{family:P.familyDefault})});Cu();function mo(t,e){return(wu[t]||{})[e]}function c_(t,e){return(Iu[t]||{})[e]}function Et(t,e){return(Tu[t]||{})[e]}function Au(t){return Eu[t]||{prefix:null,iconName:null}}function u_(t){const e=Su[t],n=mo("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ot(){return po}const go=()=>({prefix:null,iconName:null,rest:[]});function vs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Z}=e,r=Kt[n][t],s=rr[n][t]||rr[n][r],i=t in He.styles?t:null;return s||i||null}const f_={[Z]:Object.keys(Gt[Z]),[Te]:Object.keys(Gt[Te]),[Ce]:Object.keys(Gt[Ce])};function _s(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Z]:"".concat(P.cssPrefix,"-").concat(Z),[Te]:"".concat(P.cssPrefix,"-").concat(Te),[Ce]:"".concat(P.cssPrefix,"-").concat(Ce)};let s=null,i=Z;const o=_v.filter(l=>l!==au);o.forEach(l=>{(t.includes(r[l])||t.some(c=>f_[l].includes(c)))&&(i=l)});const a=t.reduce((l,c)=>{const u=l_(P.cssPrefix,c);if(zt[c]?(c=i_[i].includes(c)?jv[i][c]:c,s=c,l.prefix=c):o_[i].indexOf(c)>-1?(s=c,l.prefix=vs(c,{family:i})):u?l.iconName=u:c!==P.replacementClass&&!o.some(h=>c===r[h])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const h=s==="fa"?Au(l.iconName):{},m=Et(l.prefix,l.iconName);h.prefix&&(s=null),l.iconName=h.iconName||m||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!zt.far&&zt.fas&&!P.autoFetchSvg&&(l.prefix="fas")}return l},go());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===Te&&(zt.fass||P.autoFetchSvg)&&(a.prefix="fass",a.iconName=Et(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===Ce&&(zt.fasds||P.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Et(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=Ot()||"fas"),a}class d_{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},wi(i,s[i]);const o=Gt[Z][i];o&&wi(o,s[i]),Cu()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[i][c]=a)}),e[i][o]=a}),e}}let Ka=[],on={};const gn={},h_=Object.keys(gn);function p_(t,e){let{mixoutsTo:n}=e;return Ka=t,on={},Object.keys(gn).forEach(r=>{h_.indexOf(r)===-1&&delete gn[r]}),Ka.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{on[o]||(on[o]=[]),on[o].push(i[o])})}r.provides&&r.provides(gn)}),n}function Ii(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(on[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Qt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(on[t]||[]).forEach(i=>{i.apply(null,n)})}function Pt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return gn[t]?gn[t].apply(null,e):void 0}function Ei(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ot();if(e)return e=Et(n,e)||e,Wa(Ou.definitions,n,e)||Wa(He.styles,n,e)}const Ou=new d_,m_=()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,Qt("noAuto")},g_={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ft?(Qt("beforeI2svg",t),Pt("pseudoElements2svg",t),Pt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,t_(()=>{v_({autoReplaceSvgRoot:e}),Qt("watch",t)})}},y_={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Et(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=vs(t[0]);return{prefix:n,iconName:Et(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Bv))){const e=_s(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ot(),iconName:Et(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ot();return{prefix:e,iconName:Et(e,t)||t}}}},Ae={noAuto:m_,config:P,dom:g_,parse:y_,library:Ou,findIconDefinition:Ei,toHtml:mr},v_=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=X}=t;(Object.keys(He.styles).length>0||P.autoFetchSvg)&&ft&&P.autoReplaceSvg&&Ae.dom.i2svg({node:e})};function bs(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>mr(n))}}),Object.defineProperty(t,"node",{get:function(){if(!ft)return;const n=X.createElement("div");return n.innerHTML=t.html,n.children}}),t}function __(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(ho(o)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};s.style=ys({...i,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:e}]}function b_(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:r}]}]}function yo(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:h=!1}=t,{width:m,height:C}=n.found?n:e,N=r==="fak",M=[P.replacementClass,s?"".concat(P.cssPrefix,"-").concat(s):""].filter(j=>u.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(u.classes).join(" ");let B={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":s,class:M,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(C)}};const w=N&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/C*16*.0625,"em")}:{};h&&(B.attributes[Xt]=""),a&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(c||sr())},children:[a]}),delete B.attributes.title);const S={...B,prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...w,...u.styles}},{children:k,attributes:O}=n.found&&e.found?Pt("generateAbstractMask",S)||{children:[],attributes:{}}:Pt("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=k,S.attributes=O,o?b_(S):__(S)}function Ga(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};a&&(l[Xt]="");const c={...o.styles};ho(s)&&(c.transform=Qv({transform:s,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const u=ys(c);u.length>0&&(l.style=u);const h=[];return h.push({tag:"span",attributes:l,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function w_(t){const{content:e,title:n,extra:r}=t,s={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=ys(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Ws}=He;function Si(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(Hs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(Hs.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(Hs.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const I_={found:!1,width:512,height:512};function E_(t,e){!du&&!P.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ti(t,e){let n=e;return e==="fa"&&P.styleDefault!==null&&(e=Ot()),new Promise((r,s)=>{if(n==="fa"){const i=Au(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ws[e]&&Ws[e][t]){const i=Ws[e][t];return r(Si(i))}E_(t,e),r({...I_,icon:P.showMissingIcons&&t?Pt("missingIconAbstract")||{}:{}})})}const qa=()=>{},Ci=P.measurePerformance&&Ar&&Ar.mark&&Ar.measure?Ar:{mark:qa,measure:qa},Un='FA "6.6.0"',S_=t=>(Ci.mark("".concat(Un," ").concat(t," begins")),()=>Pu(t)),Pu=t=>{Ci.mark("".concat(Un," ").concat(t," ends")),Ci.measure("".concat(Un," ").concat(t),"".concat(Un," ").concat(t," begins"),"".concat(Un," ").concat(t," ends"))};var vo={begin:S_,end:Pu};const Ur=()=>{};function Ya(t){return typeof(t.getAttribute?t.getAttribute(Xt):null)=="string"}function T_(t){const e=t.getAttribute?t.getAttribute(co):null,n=t.getAttribute?t.getAttribute(uo):null;return e&&n}function C_(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(P.replacementClass)}function A_(){return P.autoReplaceSvg===!0?Fr.replace:Fr[P.autoReplaceSvg]||Fr.replace}function O_(t){return X.createElementNS("http://www.w3.org/2000/svg",t)}function P_(t){return X.createElement(t)}function xu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?O_:P_}=e;if(typeof t=="string")return X.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(xu(i,{ceFn:n}))}),r}function x_(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Fr={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(xu(n),e)}),e.getAttribute(Xt)===null&&P.keepOriginalSource){let n=X.createComment(x_(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~fo(e).indexOf(P.replacementClass))return Fr.replace(t);const r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===P.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>mr(i)).join(`
`);e.setAttribute(Xt,""),e.innerHTML=s}};function Ja(t){t()}function ku(t,e){const n=typeof e=="function"?e:Ur;if(t.length===0)n();else{let r=Ja;P.mutateApproach===Uv&&(r=At.requestAnimationFrame||Ja),r(()=>{const s=A_(),i=vo.begin("mutate");t.map(s),i(),n()})}}let _o=!1;function Ru(){_o=!0}function Ai(){_o=!1}let ts=null;function Xa(t){if(!ja||!P.observeMutations)return;const{treeCallback:e=Ur,nodeCallback:n=Ur,pseudoElementsCallback:r=Ur,observeMutationsRoot:s=X}=t;ts=new ja(i=>{if(_o)return;const o=Ot();Tn(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Ya(a.addedNodes[0])&&(P.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&P.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Ya(a.target)&&~zv.indexOf(a.attributeName))if(a.attributeName==="class"&&T_(a.target)){const{prefix:l,iconName:c}=_s(fo(a.target));a.target.setAttribute(co,l||o),c&&a.target.setAttribute(uo,c)}else C_(a.target)&&n(a.target)})}),ft&&ts.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function k_(){ts&&ts.disconnect()}function R_(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function N_(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=_s(fo(t));return s.prefix||(s.prefix=Ot()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=c_(s.prefix,t.innerText)||mo(s.prefix,bi(t.innerText))),!s.iconName&&P.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function L_(t){const e=Tn(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return P.autoA11y&&(n?e["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||sr()):(e["aria-hidden"]="true",e.focusable="false")),e}function M_(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Be,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=N_(t),i=L_(t),o=Ii("parseNodeAttributes",{},t);let a=e.styleParser?R_(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Be,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i},...o}}const{styles:D_}=He;function Nu(t){const e=P.autoReplaceSvg==="nest"?Qa(t,{styleParser:!1}):Qa(t);return~e.extra.classes.indexOf(mu)?Pt("generateLayersText",t,e):Pt("generateSvgReplacementMutation",t,e)}let qe=new Set;hu.map(t=>{qe.add("fa-".concat(t))});Object.keys(Kt[Z]).map(qe.add.bind(qe));Object.keys(Kt[Te]).map(qe.add.bind(qe));Object.keys(Kt[Ce]).map(qe.add.bind(qe));qe=[...qe];function Za(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ft)return Promise.resolve();const n=X.documentElement.classList,r=u=>n.add("".concat(Va,"-").concat(u)),s=u=>n.remove("".concat(Va,"-").concat(u)),i=P.autoFetchSvg?qe:hu.map(u=>"fa-".concat(u)).concat(Object.keys(D_));i.includes("fa")||i.push("fa");const o=[".".concat(mu,":not([").concat(Xt,"])")].concat(i.map(u=>".".concat(u,":not([").concat(Xt,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Tn(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=vo.begin("onTree"),c=a.reduce((u,h)=>{try{const m=Nu(h);m&&u.push(m)}catch(m){du||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,h)=>{Promise.all(c).then(m=>{ku(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),u()})}).catch(m=>{l(),h(m)})})}function U_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Nu(t).then(n=>{n&&ku([n],e)})}function F_(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ei(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Ei(s||{})),t(r,{...n,mask:s})}}const j_=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Be,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:h,iconName:m,icon:C}=t;return bs({type:"icon",...t},()=>(Qt("beforeDOMElementCreation",{iconDefinition:t,params:e}),P.autoA11y&&(o?c["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(a||sr()):(c["aria-hidden"]="true",c.focusable="false")),yo({icons:{main:Si(C),mask:s?Si(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:m,transform:{...Be,...n},symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var B_={mixout(){return{icon:F_(j_)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Za,t.nodeCallback=U_,t}}},provides(t){t.i2svg=function(e){const{node:n=X,callback:r=()=>{}}=e;return Za(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:h}=n;return new Promise((m,C)=>{Promise.all([Ti(r,o),c.iconName?Ti(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(N=>{let[M,B]=N;m([e,yo({icons:{main:M,mask:B},prefix:o,iconName:r,transform:a,symbol:l,maskId:u,title:s,titleId:i,extra:h,watchable:!0})])}).catch(C)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=ys(o);a.length>0&&(r.style=a);let l;return ho(i)&&(l=Pt("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},H_={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return bs({type:"layer"},()=>{Qt("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},V_={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return bs({type:"counter",content:t},()=>(Qt("beforeDOMElementCreation",{content:t,params:e}),w_({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(P.cssPrefix,"-layers-counter"),...r]}})))}}}},z_={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Be,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return bs({type:"text",content:t},()=>(Qt("beforeDOMElementCreation",{content:t,params:e}),Ga({content:t,transform:{...Be,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(P.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(ou){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return P.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Ga({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const W_=new RegExp('"',"ug"),el=[1105920,1112319],tl={FontAwesome:{normal:"fas",400:"fas"},...Tv,...Sv,...Nv},Oi=Object.keys(tl).reduce((t,e)=>(t[e.toLowerCase()]=tl[e],t),{}),$_=Object.keys(Oi).reduce((t,e)=>{const n=Oi[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function K_(t){const e=t.replace(W_,""),n=r_(e,0),r=n>=el[0]&&n<=el[1],s=e.length===2?e[0]===e[1]:!1;return{value:bi(s?e[0]:e),isSecondary:r||s}}function G_(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Oi[n]||{})[s]||$_[n]}function nl(t,e){const n="".concat(Dv).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Tn(t.children).filter(m=>m.getAttribute(gi)===e)[0],a=At.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(Hv),u=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&h!=="none"&&h!==""){const m=a.getPropertyValue("content");let C=G_(l,u);const{value:N,isSecondary:M}=K_(m),B=c[0].startsWith("FontAwesome");let w=mo(C,N),S=w;if(B){const k=u_(N);k.iconName&&k.prefix&&(w=k.iconName,C=k.prefix)}if(w&&!M&&(!o||o.getAttribute(co)!==C||o.getAttribute(uo)!==S)){t.setAttribute(n,S),o&&t.removeChild(o);const k=M_(),{extra:O}=k;O.attributes[gi]=e,Ti(w,C).then(j=>{const ie=yo({...k,icons:{main:j,mask:go()},prefix:C,iconName:S,extra:O,watchable:!0}),ne=X.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ne,t.firstChild):t.appendChild(ne),ne.outerHTML=ie.map(Oe=>mr(Oe)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function q_(t){return Promise.all([nl(t,"::before"),nl(t,"::after")])}function Y_(t){return t.parentNode!==document.head&&!~Fv.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(gi)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function rl(t){if(ft)return new Promise((e,n)=>{const r=Tn(t.querySelectorAll("*")).filter(Y_).map(q_),s=vo.begin("searchPseudoElements");Ru(),Promise.all(r).then(()=>{s(),Ai(),e()}).catch(()=>{s(),Ai(),n()})})}var J_={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=rl,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=X}=e;P.searchPseudoElements&&rl(n)}}};let sl=!1;var X_={mixout(){return{dom:{unwatch(){Ru(),sl=!0}}}},hooks(){return{bootstrap(){Xa(Ii("mutationObserverCallbacks",{}))},noAuto(){k_()},watch(t){const{observeMutationsRoot:e}=t;sl?Ai():Xa(Ii("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const il=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Q_={mixout(){return{parse:{transform:t=>il(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=il(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},h={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:u,path:h};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const $s={x:0,y:0,width:"100%",height:"100%"};function ol(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Z_(t){return t.tag==="g"?t.children:[t]}var eb={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?_s(n.split(" ").map(s=>s.trim())):go();return r.prefix||(r.prefix=Ot()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:c}=s,{width:u,icon:h}=i,m=Xv({transform:a,containerWidth:u,iconWidth:l}),C={tag:"rect",attributes:{...$s,fill:"white"}},N=c.children?{children:c.children.map(ol)}:{},M={tag:"g",attributes:{...m.inner},children:[ol({tag:c.tag,attributes:{...c.attributes,...m.path},...N})]},B={tag:"g",attributes:{...m.outer},children:[M]},w="mask-".concat(o||sr()),S="clip-".concat(o||sr()),k={tag:"mask",attributes:{...$s,id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[C,B]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Z_(h)},k]};return n.push(O,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(w,")"),...$s}}),{children:n,attributes:r}}}},tb={provides(t){let e=!1;At.matchMedia&&(e=At.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},nb={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},rb=[e_,B_,H_,V_,z_,J_,X_,Q_,eb,tb,nb];p_(rb,{mixoutsTo:Ae});Ae.noAuto;Ae.config;const sb=Ae.library;Ae.dom;const Pi=Ae.parse;Ae.findIconDefinition;Ae.toHtml;const ib=Ae.icon;Ae.layer;Ae.text;Ae.counter;function al(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Ze(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?al(Object(n),!0).forEach(function(r){ge(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):al(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ob(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ab(t){var e=ob(t,"string");return typeof e=="symbol"?e:e+""}function ns(t){"@babel/helpers - typeof";return ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ns(t)}function ge(t,e,n){return e=ab(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lb(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function cb(t,e){if(t==null)return{};var n=lb(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var ub=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Lu={exports:{}};(function(t){(function(e){var n=function(w,S,k){if(!c(S)||h(S)||m(S)||C(S)||l(S))return S;var O,j=0,ie=0;if(u(S))for(O=[],ie=S.length;j<ie;j++)O.push(n(w,S[j],k));else{O={};for(var ne in S)Object.prototype.hasOwnProperty.call(S,ne)&&(O[w(ne,k)]=n(w,S[ne],k))}return O},r=function(w,S){S=S||{};var k=S.separator||"_",O=S.split||/(?=[A-Z])/;return w.split(O).join(k)},s=function(w){return N(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(S,k){return k?k.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var S=s(w);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(w,S){return r(w,S).toLowerCase()},a=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},u=function(w){return a.call(w)=="[object Array]"},h=function(w){return a.call(w)=="[object Date]"},m=function(w){return a.call(w)=="[object RegExp]"},C=function(w){return a.call(w)=="[object Boolean]"},N=function(w){return w=w-0,w===w},M=function(w,S){var k=S&&"process"in S?S.process:S;return typeof k!="function"?w:function(O,j){return k(O,w,j)}},B={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,S){return n(M(s,S),w)},decamelizeKeys:function(w,S){return n(M(o,S),w,S)},pascalizeKeys:function(w,S){return n(M(i,S),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=B:e.humps=B})(ub)})(Lu);var fb=Lu.exports,db=["class","style"];function hb(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=fb.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function pb(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Mu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Mu(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=pb(u);break;case"style":l.style=hb(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=cb(n,db);return Bd(t.tag,Ze(Ze(Ze({},e),{},{class:s.class,style:Ze(Ze({},s.style),o)},s.attrs),a),r)}var Du=!1;try{Du=!0}catch{}function mb(){if(!Du&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ks(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ge({},t,e):{}}function gb(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),ge(ge(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ll(t){if(t&&ns(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Pi.icon)return Pi.icon(t);if(t===null)return null;if(ns(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var yb=Df({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Bt(function(){return ll(e.icon)}),i=Bt(function(){return Ks("classes",gb(e))}),o=Bt(function(){return Ks("transform",typeof e.transform=="string"?Pi.transform(e.transform):e.transform)}),a=Bt(function(){return Ks("mask",ll(e.mask))}),l=Bt(function(){return ib(s.value,Ze(Ze(Ze(Ze({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});xr(l,function(u){if(!u)return mb("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=Bt(function(){return l.value?Mu(l.value.abstract[0],{},r):null});return function(){return c.value}}});const vb={prefix:"fas",iconName:"temperature-half",icon:[320,512,[127777,"temperature-2","thermometer-2","thermometer-half"],"f2c9","M160 64c-26.5 0-48 21.5-48 48l0 164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5L208 112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112l0 164.4c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6L48 112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L144 208c0-8.8 7.2-16 16-16s16 7.2 16 16l0 114.7c18.6 6.6 32 24.4 32 45.3z"]},_b={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},bb={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},wb={prefix:"fas",iconName:"droplet",icon:[384,512,[128167,"tint"],"f043","M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"]},Ib=wb,Eb={prefix:"fas",iconName:"gauge-high",icon:[512,512,[62461,"tachometer-alt","tachometer-alt-fast"],"f625","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Sb=Eb,Tb={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M288 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"]},Cb={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Ab={prefix:"fas",iconName:"cloud-sun",icon:[640,512,[9925],"f6c4","M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l14.1 84.7 84.7 14.1c5.4 .9 10 4.5 12.1 9.6s1.5 10.9-1.6 15.4l-38.5 55c-2.2-.1-4.4-.2-6.7-.2c-23.3 0-45.1 6.2-64 17.1l0-1.1c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c8.1 0 15.9-1 23.4-2.9c-36.6 18.1-63.3 53.1-69.8 94.9l-24.4 17c-4.5 3.2-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM144 208a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM639.9 431.9c0 44.2-35.8 80-80 80l-271.9 0c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"]};sb.add(vb,Tb,Ib,bb,Ab,Sb,_b,Cb);const Uu=gh(vv);Uu.mount("#app");Uu.component("font-awesome-icon",yb);
