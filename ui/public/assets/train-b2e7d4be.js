import{S as Oe,i as Re,s as De,I as Se,w as Rr,e as f,t as ne,f as b,d as Y,g as P,h as p,j as x,k as u,m as X,n as me,x as Dr,y as Nr,z as Pr,p as C,q as R,r as F,u as Q,l as W,A as z,B as Te,C as yt,D as wt,E as ji,F as zi,H as Gi,J as on,K as Ae,L as Ce,M as Jt,O as qi,P as Tn,Q as Ki,v as Nt,N as gt,a as Ji,b as It,c as St,o as Et,R as Yi,T as Xi,G as Qi,U as An,V as Qe}from"./NavBarIcon-96ef93ff.js";function Zi(t){let e,n,r,i,s,o,l,a,c;o=new Se({props:{name:"x",class:"x-icon",style:"padding: 4px;"}}),o.$on("click",t[4]);const d=t[3].default,h=Rr(d,t,t[2],null);return{c(){e=f("div"),n=f("div"),r=f("p"),i=ne(t[0]),s=b(),Y(o.$$.fragment),l=b(),a=f("div"),h&&h.c(),P(n,"class","drawer-header svelte-5httr9"),p(a,"overflow-y","auto"),p(a,"height","calc(100vh - 96px)"),P(e,"class","drawer svelte-5httr9")},m(g,v){x(g,e,v),u(e,n),u(n,r),u(r,i),u(n,s),X(o,n,null),u(e,l),u(e,a),h&&h.m(a,null),c=!0},p(g,[v]){(!c||v&1)&&me(i,g[0]),h&&h.p&&(!c||v&4)&&Dr(h,d,g,g[2],c?Pr(d,g[2],v,null):Nr(g[2]),null)},i(g){c||(C(o.$$.fragment,g),C(h,g),c=!0)},o(g){R(o.$$.fragment,g),R(h,g),c=!1},d(g){g&&F(e),Q(o),h&&h.d(g)}}}function es(t,e,n){let{$$slots:r={},$$scope:i}=e,{title:s}=e,{close:o}=e;const l=()=>o();return t.$$set=a=>{"title"in a&&n(0,s=a.title),"close"in a&&n(1,o=a.close),"$$scope"in a&&n(2,i=a.$$scope)},[s,o,i,r,l]}class an extends Oe{constructor(e){super(),Re(this,e,es,Zi,De,{title:0,close:1})}}const Cn="algSet",On="casesToday",Rn="orientation",Dn="showScramble",ln="user",Mr={get:()=>ss(Cn)??-1,set:t=>os(Cn,t)},kt={get:()=>{const t=localStorage.getItem(On);return t?JSON.parse(t):{count:0,msSinceEpoch:Date.now()}},set:t=>{localStorage.setItem(On,JSON.stringify(t))}};let Yt={get:()=>localStorage.getItem(Rn)??"",set:t=>{localStorage.setItem(Rn,t)}};const Lr={get:()=>rs(Dn)??!1,set:t=>is(Dn,t)};function ts(){return localStorage.getItem(ln)}function Ur(){localStorage.removeItem(ln)}function ns(t){localStorage.setItem(ln,t)}function rs(t){const e=localStorage.getItem(t);return e===null?null:e=="1"}function is(t,e){localStorage.setItem(t,e?"1":"0")}function ss(t){const e=localStorage.getItem(t);return e===null?null:parseInt(e)}function os(t,e){localStorage.setItem(t,e.toString())}/**
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
 */const $r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},as=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Br={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,d=s>>2,h=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,v=c&63;a||(v=64,o||(g=64)),r.push(n[d],n[h],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):as(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||h==null)throw Error();const g=s<<2|l>>4;if(r.push(g),c!==64){const v=l<<4&240|c>>2;if(r.push(v),h!==64){const S=c<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ls=function(t){const e=$r(t);return Br.encodeByteArray(e,!0)},xr=function(t){return ls(t).replace(/\./g,"")},cs=function(t){try{return Br.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function us(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ds=()=>us().__FIREBASE_DEFAULTS__,hs=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fs=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cs(t[1]);return e&&JSON.parse(e)},gs=()=>{try{return ds()||hs()||fs()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ps=()=>{var t;return(t=gs())===null||t===void 0?void 0:t.config};/**
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
 */class ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function _s(){try{return typeof indexedDB=="object"}catch{return!1}}function vs(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const bs="FirebaseError";let cn=class Fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bs,Object.setPrototypeOf(this,Fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hr.prototype.create)}},Hr=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ys(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cn(i,l,r)}};function ys(t,e){return t.replace(ws,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ws=/\{\$([^}]+)}/g;function Xt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Nn(s)&&Nn(o)){if(!Xt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Nn(t){return t!==null&&typeof t=="object"}let Tt=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Ne="[DEFAULT]";/**
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
 */class Is{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ms;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Es(e))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ne){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ne){return this.instances.has(e)}getOptions(e=Ne){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ss(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ne){return this.component?this.component.multipleInstances?e:Ne:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ss(t){return t===Ne?void 0:t}function Es(t){return t.instantiationMode==="EAGER"}/**
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
 */class ks{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Is(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const Ts={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},As=K.INFO,Cs={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Os=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Cs[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Rs=class{constructor(e){this.name=e,this._logLevel=As,this._logHandler=Os,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ts[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}};const Ds=(t,e)=>e.some(n=>t instanceof n);let Pn,Mn;function Ns(){return Pn||(Pn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ps(){return Mn||(Mn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wr=new WeakMap,Qt=new WeakMap,Vr=new WeakMap,Ft=new WeakMap,un=new WeakMap;function Ms(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ee(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wr.set(n,t)}).catch(()=>{}),un.set(e,t),e}function Ls(t){if(Qt.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qt.set(t,e)}let Zt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ee(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Us(t){Zt=t(Zt)}function $s(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ht(this),e,...n);return Vr.set(r,e.sort?e.sort():[e]),Ee(r)}:Ps().includes(t)?function(...e){return t.apply(Ht(this),e),Ee(Wr.get(this))}:function(...e){return Ee(t.apply(Ht(this),e))}}function Bs(t){return typeof t=="function"?$s(t):(t instanceof IDBTransaction&&Ls(t),Ds(t,Ns())?new Proxy(t,Zt):t)}function Ee(t){if(t instanceof IDBRequest)return Ms(t);if(Ft.has(t))return Ft.get(t);const e=Bs(t);return e!==t&&(Ft.set(t,e),un.set(e,t)),e}const Ht=t=>un.get(t);function xs(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ee(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Ee(o.result),a.oldVersion,a.newVersion,Ee(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Fs=["get","getKey","getAll","getAllKeys","count"],Hs=["put","add","delete","clear"],Wt=new Map;function Ln(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wt.get(e))return Wt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Hs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Fs.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Wt.set(e,s),s}Us(t=>({...t,get:(e,n,r)=>Ln(e,n)||t.get(e,n,r),has:(e,n)=>!!Ln(e,n)||t.has(e,n)}));/**
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
 */class Ws{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vs(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vs(t){const e=t.getComponent();return e?.type==="VERSION"}const en="@firebase/app",Un="0.9.1";/**
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
 */const Ue=new Rs("@firebase/app"),js="@firebase/app-compat",zs="@firebase/analytics-compat",Gs="@firebase/analytics",qs="@firebase/app-check-compat",Ks="@firebase/app-check",Js="@firebase/auth",Ys="@firebase/auth-compat",Xs="@firebase/database",Qs="@firebase/database-compat",Zs="@firebase/functions",eo="@firebase/functions-compat",to="@firebase/installations",no="@firebase/installations-compat",ro="@firebase/messaging",io="@firebase/messaging-compat",so="@firebase/performance",oo="@firebase/performance-compat",ao="@firebase/remote-config",lo="@firebase/remote-config-compat",co="@firebase/storage",uo="@firebase/storage-compat",ho="@firebase/firestore",fo="@firebase/firestore-compat",go="firebase",po="9.16.0";/**
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
 */const tn="[DEFAULT]",mo={[en]:"fire-core",[js]:"fire-core-compat",[Gs]:"fire-analytics",[zs]:"fire-analytics-compat",[Ks]:"fire-app-check",[qs]:"fire-app-check-compat",[Js]:"fire-auth",[Ys]:"fire-auth-compat",[Xs]:"fire-rtdb",[Qs]:"fire-rtdb-compat",[Zs]:"fire-fn",[eo]:"fire-fn-compat",[to]:"fire-iid",[no]:"fire-iid-compat",[ro]:"fire-fcm",[io]:"fire-fcm-compat",[so]:"fire-perf",[oo]:"fire-perf-compat",[ao]:"fire-rc",[lo]:"fire-rc-compat",[co]:"fire-gcs",[uo]:"fire-gcs-compat",[ho]:"fire-fst",[fo]:"fire-fst-compat","fire-js":"fire-js",[go]:"fire-js-all"};/**
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
 */const At=new Map,nn=new Map;function _o(t,e){try{t.container.addComponent(e)}catch(n){Ue.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ze(t){const e=t.name;if(nn.has(e))return Ue.debug(`There were multiple attempts to register component ${e}.`),!1;nn.set(e,t);for(const n of At.values())_o(n,t);return!0}function jr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vo={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ke=new Hr("app","Firebase",vo);/**
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
 */class bo{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ke.create("app-deleted",{appName:this._name})}}/**
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
 */const Pt=po;function zr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ke.create("bad-app-name",{appName:String(i)});if(n||(n=ps()),!n)throw ke.create("no-options");const s=At.get(i);if(s){if(Xt(n,s.options)&&Xt(r,s.config))return s;throw ke.create("duplicate-app",{appName:i})}const o=new ks(i);for(const a of nn.values())o.addComponent(a);const l=new bo(n,r,o);return At.set(i,l),l}function yo(t=tn){const e=At.get(t);if(!e&&t===tn)return zr();if(!e)throw ke.create("no-app",{appName:t});return e}function He(t,e,n){var r;let i=(r=mo[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ue.warn(l.join(" "));return}Ze(new Tt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const wo="firebase-heartbeat-database",Io=1,et="firebase-heartbeat-store";let Vt=null;function Gr(){return Vt||(Vt=xs(wo,Io,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(et)}}}).catch(t=>{throw ke.create("idb-open",{originalErrorMessage:t.message})})),Vt}async function So(t){try{return(await Gr()).transaction(et).objectStore(et).get(qr(t))}catch(e){if(e instanceof cn)Ue.warn(e.message);else{const n=ke.create("idb-get",{originalErrorMessage:e?.message});Ue.warn(n.message)}}}async function $n(t,e){try{const r=(await Gr()).transaction(et,"readwrite");return await r.objectStore(et).put(e,qr(t)),r.done}catch(n){if(n instanceof cn)Ue.warn(n.message);else{const r=ke.create("idb-set",{originalErrorMessage:n?.message});Ue.warn(r.message)}}}function qr(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Eo=1024,ko=30*24*60*60*1e3;class To{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Co(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ko}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bn(),{heartbeatsToSend:n,unsentEntries:r}=Ao(this._heartbeatsCache.heartbeats),i=xr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bn(){return new Date().toISOString().substring(0,10)}function Ao(t,e=Eo){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xn(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Co{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _s()?vs().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await So(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $n(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $n(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xn(t){return xr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Oo(t){Ze(new Tt("platform-logger",e=>new Ws(e),"PRIVATE")),Ze(new Tt("heartbeat",e=>new To(e),"PRIVATE")),He(en,Un,t),He(en,Un,"esm2017"),He("fire-js","")}Oo("");var Ro="firebase",Do="9.16.0";/**
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
 */He(Ro,Do,"app");/**
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
 */const No=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Po=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,d=s>>2,h=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,v=c&63;a||(v=64,o||(g=64)),r.push(n[d],n[h],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(No(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Po(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||h==null)throw Error();const g=s<<2|l>>4;if(r.push(g),c!==64){const v=l<<4&240|c>>2;if(r.push(v),h!==64){const S=c<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Kr=function(t){try{return Mo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Uo=()=>Lo().__FIREBASE_DEFAULTS__,$o=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bo=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Kr(t[1]);return e&&JSON.parse(e)},Jr=()=>{try{return Uo()||$o()||Bo()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xo=t=>{var e,n;return(n=(e=Jr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yr=t=>{var e;return(e=Jr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function Ho(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vo(){const t=se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
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
 */const jo="FirebaseError";class je extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jo,Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mt.prototype.create)}}class Mt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zo(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new je(i,l,r)}}function zo(t,e){return t.replace(Go,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Go=/\{\$([^}]+)}/g;function qo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Fn(s)&&Fn(o)){if(!Xr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fn(t){return t!==null&&typeof t=="object"}/**
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
 */function st(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Je(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ye(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ko(t,e){const n=new Jo(t,e);return n.subscribe.bind(n)}class Jo{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yo(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jt),i.error===void 0&&(i.error=jt),i.complete===void 0&&(i.complete=jt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yo(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jt(){}/**
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
 */function xe(t){return t&&t._delegate?t._delegate:t}/**
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
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const Xo={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Qo=j.INFO,Zo={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},ea=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Zo[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ta{constructor(e){this.name=e,this._logLevel=Qo,this._logHandler=ea,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}function dn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}class Hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}function Qr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const na=Qr,Zr=new Mt("auth","Firebase",Qr());/**
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
 */const Wn=new ta("@firebase/auth");function pt(t,...e){Wn.logLevel<=j.ERROR&&Wn.error(`Auth (${Pt}): ${t}`,...e)}/**
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
 */function ue(t,...e){throw hn(t,...e)}function de(t,...e){return hn(t,...e)}function ei(t,e,n){const r=Object.assign(Object.assign({},na()),{[e]:n});return new Mt("auth","Firebase",r).create(e,{appName:t.name})}function ra(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ue(t,"argument-error"),ei(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hn(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zr.create(t,...e)}function A(t,e,...n){if(!t)throw hn(e,...n)}function ge(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pt(e),new Error(e)}function _e(t,e){t||ge(e)}/**
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
 */const Vn=new Map;function pe(t){_e(t instanceof Function,"Expected a class definition");let e=Vn.get(t);return e?(_e(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vn.set(t,e),e)}/**
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
 */function ia(t,e){const n=jr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xr(s,e??{}))return i;ue(i,"already-initialized")}return n.initialize({options:e})}function sa(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(pe);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}/**
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
 */function rn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oa(){return jn()==="http:"||jn()==="https:"}function jn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function aa(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oa()||Ho()||"connection"in navigator)?navigator.onLine:!0}function la(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ot{constructor(e,n){this.shortDelay=e,this.longDelay=n,_e(n>e,"Short delay should be less than long delay!"),this.isMobile=Fo()||Wo()}get(){return aa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fn(t,e){_e(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ti{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ca={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const ua=new ot(3e4,6e4);function at(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lt(t,e,n,r,i={}){return ni(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=st(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ti.fetch()(ri(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function ni(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ca),e);try{const i=new da(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ft(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ft(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ft(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ft(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ei(t,d,c);ue(t,d)}}catch(i){if(i instanceof je)throw i;ue(t,"network-request-failed")}}async function ct(t,e,n,r,i={}){const s=await lt(t,e,n,r,i);return"mfaPendingCredential"in s&&ue(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ri(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?fn(t.config,i):`${t.config.apiScheme}://${i}`}class da{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(de(this.auth,"network-request-failed")),ua.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ft(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=de(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ha(t,e){return lt(t,"POST","/v1/accounts:delete",e)}async function fa(t,e){return lt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ga(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=gn(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Xe(zt(i.auth_time)),issuedAtTime:Xe(zt(i.iat)),expirationTime:Xe(zt(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function zt(t){return Number(t)*1e3}function gn(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pt("JWT malformed, contained fewer than 3 sections"),null;try{const i=Kr(n);return i?JSON.parse(i):(pt("Failed to decode base64 JWT payload"),null)}catch(i){return pt("Caught error parsing JWT payload as JSON",i?.toString()),null}}function pa(t){const e=gn(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof je&&ma(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ma({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _a{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ii{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xe(this.lastLoginAt),this.creationTime=Xe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ct(t){var e;const n=t.auth,r=await t.getIdToken(),i=await tt(t,fa(n,{idToken:r}));A(i?.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ya(s.providerUserInfo):[],l=ba(t.providerData,o),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!l?.length,d=a?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ii(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function va(t){const e=xe(t);await Ct(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ba(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ya(t){return t.map(e=>{var{providerId:n}=e,r=dn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wa(t,e){const n=await ni(t,{},async()=>{const r=st({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ri(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ti.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wa(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new nt;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nt,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
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
 */function be(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Le{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=dn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _a(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ii(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await tt(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ga(this,e)}reload(){return va(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ct(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tt(this,ha(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(l=n.tenantId)!==null&&l!==void 0?l:void 0,_=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:M,emailVerified:y,isAnonymous:L,providerData:H,stsTokenManager:$}=n;A(M&&$,e,"internal-error");const E=nt.fromJSON(this.name,$);A(typeof M=="string",e,"internal-error"),be(h,e.name),be(g,e.name),A(typeof y=="boolean",e,"internal-error"),A(typeof L=="boolean",e,"internal-error"),be(v,e.name),be(S,e.name),be(m,e.name),be(_,e.name),be(T,e.name),be(k,e.name);const B=new Le({uid:M,auth:e,email:g,emailVerified:y,displayName:h,isAnonymous:L,photoURL:S,phoneNumber:v,tenantId:m,stsTokenManager:E,createdAt:T,lastLoginAt:k});return H&&Array.isArray(H)&&(B.providerData=H.map(Z=>Object.assign({},Z))),_&&(B._redirectEventId=_),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new nt;i.updateFromServerResponse(n);const s=new Le({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ct(s),s}}/**
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
 */class si{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}si.type="NONE";const zn=si;/**
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
 */function mt(t,e,n){return`firebase:${t}:${e}:${n}`}class We{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=mt(this.userKey,i.apiKey,s),this.fullPersistenceKey=mt("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new We(pe(zn),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||pe(zn);const o=mt(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const h=Le._fromJSON(e,d);c!==s&&(l=h),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new We(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new We(s,e,r))}}/**
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
 */function Gn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(li(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ui(e))return"Blackberry";if(di(e))return"Webos";if(pn(e))return"Safari";if((e.includes("chrome/")||ai(e))&&!e.includes("edge/"))return"Chrome";if(ci(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function oi(t=se()){return/firefox\//i.test(t)}function pn(t=se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ai(t=se()){return/crios\//i.test(t)}function li(t=se()){return/iemobile/i.test(t)}function ci(t=se()){return/android/i.test(t)}function ui(t=se()){return/blackberry/i.test(t)}function di(t=se()){return/webos/i.test(t)}function Lt(t=se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ia(t=se()){var e;return Lt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Sa(){return Vo()&&document.documentMode===10}function hi(t=se()){return Lt(t)||ci(t)||di(t)||ui(t)||/windows phone/i.test(t)||li(t)}function Ea(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fi(t,e=[]){let n;switch(t){case"Browser":n=Gn(se());break;case"Worker":n=`${Gn(se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pt}/${r}`}/**
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
 */class ka{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */class Ta{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qn(this),this.idTokenSubscription=new qn(this),this.beforeStateQueue=new ka(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await We.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i?._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&a?.user&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ct(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=la()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xe(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pe(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await We.create(this,[pe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ze(t){return xe(t)}class qn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ko(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Aa(t,e,n){const r=ze(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,s=gi(e),{host:o,port:l}=Ca(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Oa()}function gi(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ca(t){const e=gi(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Kn(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Kn(o)}}}function Kn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Oa(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class mn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ge("not implemented")}_getIdTokenResponse(e){return ge("not implemented")}_linkToIdToken(e,n){return ge("not implemented")}_getReauthenticationResolver(e){return ge("not implemented")}}async function Ra(t,e){return lt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Da(t,e){return ct(t,"POST","/v1/accounts:signInWithPassword",at(t,e))}/**
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
 */async function Na(t,e){return ct(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}async function Pa(t,e){return ct(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}/**
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
 */class rt extends mn{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new rt(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new rt(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Da(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Na(e,{email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ra(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pa(e,{idToken:n,email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ve(t,e){return ct(t,"POST","/v1/accounts:signInWithIdp",at(t,e))}/**
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
 */const Ma="http://localhost";class $e extends mn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $e(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=dn(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $e(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ve(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ve(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ve(e,n)}buildRequest(){const e={requestUri:Ma,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=st(n)}return e}}/**
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
 */function La(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ua(t){const e=Je(Ye(t)).link,n=e?Je(Ye(e)).deep_link_id:null,r=Je(Ye(t)).deep_link_id;return(r?Je(Ye(r)).link:null)||r||n||e||t}class _n{constructor(e){var n,r,i,s,o,l;const a=Je(Ye(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,h=La((i=a.mode)!==null&&i!==void 0?i:null);A(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Ua(e);try{return new _n(n)}catch{return null}}}/**
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
 */class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(e,n){return rt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_n.parseLink(n);return A(r,"argument-error"),rt._fromEmailAndCode(e,r.code,r.tenantId)}}Ge.PROVIDER_ID="password";Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class vn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ut extends vn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ye extends ut{constructor(){super("facebook.com")}static credential(e){return $e._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ye.credential(e.oauthAccessToken)}catch{return null}}}ye.FACEBOOK_SIGN_IN_METHOD="facebook.com";ye.PROVIDER_ID="facebook.com";/**
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
 */class fe extends ut{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $e._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fe.credential(n,r)}catch{return null}}}fe.GOOGLE_SIGN_IN_METHOD="google.com";fe.PROVIDER_ID="google.com";/**
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
 */class we extends ut{constructor(){super("github.com")}static credential(e){return $e._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return we.credential(e.oauthAccessToken)}catch{return null}}}we.GITHUB_SIGN_IN_METHOD="github.com";we.PROVIDER_ID="github.com";/**
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
 */class Ie extends ut{constructor(){super("twitter.com")}static credential(e,n){return $e._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ie.credential(n,r)}catch{return null}}}Ie.TWITTER_SIGN_IN_METHOD="twitter.com";Ie.PROVIDER_ID="twitter.com";/**
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
 */async function $a(t,e){return ct(t,"POST","/v1/accounts:signUp",at(t,e))}/**
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
 */class Be{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Le._fromIdTokenResponse(e,r,i),o=Jn(r);return new Be({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jn(r);return new Be({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ot extends je{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ot.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ot(e,n,r,i)}}function pi(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ot._fromErrorAndOperation(t,s,e,r):s})}async function Ba(t,e,n=!1){const r=await tt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Be._forOperation(t,"link",r)}/**
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
 */async function xa(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await tt(t,pi(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=gn(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),Be._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&ue(r,"user-mismatch"),s}}/**
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
 */async function mi(t,e,n=!1){const r="signIn",i=await pi(t,r,e),s=await Be._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Fa(t,e){return mi(ze(t),e)}async function Ha(t,e,n){const r=ze(t),i=await $a(r,{returnSecureToken:!0,email:e,password:n}),s=await Be._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Wa(t,e,n){return Fa(xe(t),Ge.credential(e,n))}function Va(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function ja(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}const Rt="__sak";/**
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
 */class _i{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rt,"1"),this.storage.removeItem(Rt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function za(){const t=se();return pn(t)||Lt(t)}const Ga=1e3,qa=10;class vi extends _i{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=za()&&Ea(),this.fallbackToPolling=hi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Sa()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qa):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ga)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vi.type="LOCAL";const Ka=vi;/**
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
 */class bi extends _i{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bi.type="SESSION";const yi=bi;/**
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
 */function Ja(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ut{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ut(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await Ja(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ut.receivers=[];/**
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
 */function bn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ya{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=bn("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const g=h;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function he(){return window}function Xa(t){he().location.href=t}/**
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
 */function wi(){return typeof he().WorkerGlobalScope<"u"&&typeof he().importScripts=="function"}async function Qa(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Za(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function el(){return wi()?self:null}/**
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
 */const Ii="firebaseLocalStorageDb",tl=1,Dt="firebaseLocalStorage",Si="fbase_key";class dt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $t(t,e){return t.transaction([Dt],e?"readwrite":"readonly").objectStore(Dt)}function nl(){const t=indexedDB.deleteDatabase(Ii);return new dt(t).toPromise()}function sn(){const t=indexedDB.open(Ii,tl);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dt,{keyPath:Si})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dt)?e(r):(r.close(),await nl(),e(await sn()))})})}async function Yn(t,e,n){const r=$t(t,!0).put({[Si]:e,value:n});return new dt(r).toPromise()}async function rl(t,e){const n=$t(t,!1).get(e),r=await new dt(n).toPromise();return r===void 0?null:r.value}function Xn(t,e){const n=$t(t,!0).delete(e);return new dt(n).toPromise()}const il=800,sl=3;class Ei{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ut._getInstance(el()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Qa(),!this.activeServiceWorker)return;this.sender=new Ya(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Za()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sn();return await Yn(e,Rt,"1"),await Xn(e,Rt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yn(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rl(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$t(i,!1).getAll();return new dt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),il)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ei.type="LOCAL";const ol=Ei;/**
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
 */function al(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ll(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=de("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",al().appendChild(r)})}function cl(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ot(3e4,6e4);/**
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
 */function ki(t,e){return e?pe(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yn extends mn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ve(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ve(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ul(t){return mi(t.auth,new yn(t),t.bypassAuthState)}function dl(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),xa(n,new yn(t),t.bypassAuthState)}async function hl(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Ba(n,new yn(t),t.bypassAuthState)}/**
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
 */class Ti{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ul;case"linkViaPopup":case"linkViaRedirect":return hl;case"reauthViaPopup":case"reauthViaRedirect":return dl;default:ue(this.auth,"internal-error")}}resolve(e){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fl=new ot(2e3,1e4);async function gl(t,e,n){const r=ze(t);ra(t,e,vn);const i=ki(r,n);return new Pe(r,"signInViaPopup",e,i).executeNotNull()}class Pe extends Ti{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pe.currentPopupAction&&Pe.currentPopupAction.cancel(),Pe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){_e(this.filter.length===1,"Popup operations only handle one event");const e=bn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(de(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(de(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(de(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,fl.get())};e()}}Pe.currentPopupAction=null;/**
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
 */const pl="pendingRedirect",_t=new Map;class ml extends Ti{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_t.get(this.auth._key());if(!e){try{const r=await _l(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_t.set(this.auth._key(),e)}return this.bypassAuthState||_t.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _l(t,e){const n=yl(e),r=bl(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vl(t,e){_t.set(t._key(),e)}function bl(t){return pe(t._redirectPersistence)}function yl(t){return mt(pl,t.config.apiKey,t.name)}async function wl(t,e,n=!1){const r=ze(t),i=ki(r,e),o=await new ml(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Il=10*60*1e3;class Sl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!El(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ai(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(de(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Il&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qn(e))}saveEventToCache(e){this.cachedEventUids.add(Qn(e)),this.lastProcessedEventTime=Date.now()}}function Qn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ai({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function El(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ai(t);default:return!1}}/**
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
 */async function kl(t,e={}){return lt(t,"GET","/v1/projects",e)}/**
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
 */const Tl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Al=/^https?/;async function Cl(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kl(t);for(const n of e)try{if(Ol(n))return}catch{}ue(t,"unauthorized-domain")}function Ol(t){const e=rn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Al.test(n))return!1;if(Tl.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Rl=new ot(3e4,6e4);function Zn(){const t=he().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dl(t){return new Promise((e,n)=>{var r,i,s;function o(){Zn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zn(),n(de(t,"network-request-failed"))},timeout:Rl.get()})}if(!((i=(r=he().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=he().gapi)===null||s===void 0)&&s.load)o();else{const l=cl("iframefcb");return he()[l]=()=>{gapi.load?o():n(de(t,"network-request-failed"))},ll(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw vt=null,e})}let vt=null;function Nl(t){return vt=vt||Dl(t),vt}/**
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
 */const Pl=new ot(5e3,15e3),Ml="__/auth/iframe",Ll="emulator/auth/iframe",Ul={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$l=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bl(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fn(e,Ll):`https://${t.config.authDomain}/${Ml}`,r={apiKey:e.apiKey,appName:t.name,v:Pt},i=$l.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${st(r).slice(1)}`}async function xl(t){const e=await Nl(t),n=he().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:Bl(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ul,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=de(t,"network-request-failed"),l=he().setTimeout(()=>{s(o)},Pl.get());function a(){he().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Fl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hl=500,Wl=600,Vl="_blank",jl="http://localhost";class er{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zl(t,e,n,r=Hl,i=Wl){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Fl),{width:r.toString(),height:i.toString(),top:s,left:o}),c=se().toLowerCase();n&&(l=ai(c)?Vl:n),oi(c)&&(e=e||jl,a.scrollbars="yes");const d=Object.entries(a).reduce((g,[v,S])=>`${g}${v}=${S},`,"");if(Ia(c)&&l!=="_self")return Gl(e||"",l),new er(null);const h=window.open(e||"",l,d);A(h,t,"popup-blocked");try{h.focus()}catch{}return new er(h)}function Gl(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ql="__/auth/handler",Kl="emulator/auth/handler";function tr(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pt,eventId:i};if(e instanceof vn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,c]of Object.entries(s||{}))o[a]=c}if(e instanceof ut){const a=e.getScopes().filter(c=>c!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${Jl(t)}?${st(l).slice(1)}`}function Jl({config:t}){return t.emulator?fn(t,Kl):`https://${t.authDomain}/${ql}`}/**
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
 */const Gt="webStorageSupport";class Yl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yi,this._completeRedirectFn=wl,this._overrideRedirectResult=vl}async _openPopup(e,n,r,i){var s;_e((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=tr(e,n,r,rn(),i);return zl(e,o,bn())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Xa(tr(e,n,r,rn(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_e(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xl(e),r=new Sl(e);return n.register("authEvent",i=>(A(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gt,{type:Gt},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[Gt];o!==void 0&&n(!!o),ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hi()||pn()||Lt()}}const Xl=Yl;var nr="@firebase/auth",rr="0.21.1";/**
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
 */class Ql{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Zl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ec(t){Ze(new Hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{A(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),A(!o?.includes(":"),"argument-error",{appName:l.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fi(t)},d=new Ta(l,a,c);return sa(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ze(new Hn("auth-internal",e=>{const n=ze(e.getProvider("auth").getImmediate());return(r=>new Ql(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(nr,rr,Zl(t)),He(nr,rr,"esm2017")}/**
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
 */const tc=5*60,nc=Yr("authIdTokenMaxAge")||tc;let ir=null;const rc=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nc)return;const i=n?.token;ir!==i&&(ir=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ic(t=yo()){const e=jr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ia(t,{popupRedirectResolver:Xl,persistence:[ol,Ka,yi]}),r=Yr("authTokenSyncURL");if(r){const s=rc(r);ja(n,s,()=>s(n.currentUser)),Va(n,o=>s(o))}const i=xo("auth");return i&&Aa(n,`http://${i}`),n}ec("Browser");const sc=()=>{},oc="https://api.cubingapp.com:3000",ac={apiKey:"AIzaSyCnwuoBqAR6cx7uqzxf7iEC99sZf36sZZA",authDomain:"virtual-cube.firebaseapp.com",projectId:"virtual-cube",storageBucket:"virtual-cube.appspot.com",messagingSenderId:"371073332227",appId:"1:371073332227:web:c96d3137080aecfe634a36",measurementId:"G-YR33BDCQDY"},lc=zr(ac),Bt=()=>ic(lc);async function qe(t,e){return await fetch(`${oc}${t}`,{method:"POST",body:JSON.stringify(e)}).then(r=>r.json())}async function cc(t){return qe("/user",{email:t})}class Ci{email;uid;constructor(){}toJsonString(){return JSON.stringify({email:this.email,uid:this.uid})}fromJsonString(e){const n=JSON.parse(e);this.email=n.email,this.uid=n.uid}}function Oi(t){sc("Signed in as "+t.email+" with uid "+t.uid)}function uc(){const t=ts();if(!t)return null;const e=new Ci;return e.fromJsonString(t),!e.email||!e.uid?(Ur(),null):(Oi(e),e)}function wn(t,e){const n=new Ci;n.email=t.user.email,cc(n.email).then(r=>{n.uid=r.uid,ns(n.toJsonString()),Oi(n),e(n)})}function dc(t){const e=Bt(),n=new fe;gl(e,n).then(r=>{wn(r,t)}).catch(r=>{console.log(r)})}function hc(t,e,n){const r=Bt();Ha(r,t,e).then(i=>{wn(i,n)}).catch(i=>{console.log(i.message)})}function fc(t,e,n){const r=Bt();Wa(r,t,e).then(i=>{wn(i,n)}).catch(i=>{console.log(i.message)})}function gc(){Bt().signOut(),Ur()}function pc(t){let e,n,r;return{c(){e=f("button"),e.textContent="Create Account",P(e,"class","btn-primary")},m(i,s){x(i,e,s),n||(r=W(e,"click",t[3]),n=!0)},p:z,i:z,o:z,d(i){i&&F(e),n=!1,r()}}}function mc(t,e,n){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{hc(r,i,s)};return t.$$set=l=>{"email"in l&&n(0,r=l.email),"password"in l&&n(1,i=l.password),"callback"in l&&n(2,s=l.callback)},[r,i,s,o]}class _c extends Oe{constructor(e){super(),Re(this,e,mc,pc,De,{email:0,password:1,callback:2})}}function vc(t){let e,n,r;return{c(){e=f("button"),e.textContent="Sign In",P(e,"class","btn-primary")},m(i,s){x(i,e,s),n||(r=W(e,"click",t[3]),n=!0)},p:z,i:z,o:z,d(i){i&&F(e),n=!1,r()}}}function bc(t,e,n){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{fc(r,i,s)};return t.$$set=l=>{"email"in l&&n(0,r=l.email),"password"in l&&n(1,i=l.password),"callback"in l&&n(2,s=l.callback)},[r,i,s,o]}class yc extends Oe{constructor(e){super(),Re(this,e,bc,vc,De,{email:0,password:1,callback:2})}}function wc(t){let e,n,r;return{c(){e=f("button"),e.innerHTML=`<div class="row"><svg style="width: 20px; height: 20px; margin-right: 0.6rem;" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path><path fill="none" d="M2 2h44v44H2z"></path></svg> 
        <p style="font-size: 1rem; color: black;">Sign in with Google</p></div>`,P(e,"class","btn-white")},m(i,s){x(i,e,s),n||(r=W(e,"click",t[1]),n=!0)},p:z,i:z,o:z,d(i){i&&F(e),n=!1,r()}}}function Ic(t,e,n){let{callback:r}=e;const i=()=>dc(r);return t.$$set=s=>{"callback"in s&&n(0,r=s.callback)},[r,i]}class Sc extends Oe{constructor(e){super(),Re(this,e,Ic,wc,De,{callback:0})}}function Ec(t){let e,n,r,i;return{c(){e=f("input"),P(e,"class",n=t[1].class),P(e,"type","email"),P(e,"placeholder","Email")},m(s,o){x(s,e,o),Te(e,t[0]),r||(i=W(e,"input",t[2]),r=!0)},p(s,[o]){o&2&&n!==(n=s[1].class)&&P(e,"class",n),o&1&&e.value!==s[0]&&Te(e,s[0])},i:z,o:z,d(s){s&&F(e),r=!1,i()}}}function kc(t,e,n){let{value:r}=e;function i(){r=this.value,n(0,r)}return t.$$set=s=>{n(1,e=yt(yt({},e),wt(s))),"value"in s&&n(0,r=s.value)},e=wt(e),[r,e,i]}class Tc extends Oe{constructor(e){super(),Re(this,e,kc,Ec,De,{value:0})}}function Ac(t){let e,n,r,i;return{c(){e=f("input"),P(e,"class",n=t[1].class),P(e,"type","password"),P(e,"placeholder","Password")},m(s,o){x(s,e,o),Te(e,t[0]),r||(i=W(e,"input",t[2]),r=!0)},p(s,[o]){o&2&&n!==(n=s[1].class)&&P(e,"class",n),o&1&&e.value!==s[0]&&Te(e,s[0])},i:z,o:z,d(s){s&&F(e),r=!1,i()}}}function Cc(t,e,n){let{value:r}=e;function i(){r=this.value,n(0,r)}return t.$$set=s=>{n(1,e=yt(yt({},e),wt(s))),"value"in s&&n(0,r=s.value)},e=wt(e),[r,e,i]}class Oc extends Oe{constructor(e){super(),Re(this,e,Cc,Ac,De,{value:0})}}async function Rc(t,e,n,r,i,s,o,l){return qe("/createAlgSet",{uid:t,set:e,trainingAlgs:n,cube:r,inactiveStickers:i,moves:s,disregard:o,onlyOrientation:l})}async function Dc(t,e){return qe("/createPrebuiltAlgSet",{uid:t,set:e})}async function Nc(t){return qe("/deleteAlgSet",{id:t})}async function Pc(t){return qe("/getAlgSets",{uid:t})}async function xt(t,e,n){return qe("/updateAlgSet",{id:t,set:e,trainingAlgs:n})}function Mc(t){return t[In(t.length)]}function In(t){return Math.floor(Math.random()*t)}function Sn(t){return t<=0?2:Sn(t-1)+t+2}function Lc(t){t[0].Score++;let e=Sn(t[0].Score);const n=Math.ceil(t.length*3/4);e>n&&(e=n+In(t.length-n)),Ri(t,e)}function Uc(t){t[0].Score=0,Ri(t,Sn(0))}function Ri(t,e){const n=t[0];for(let r=0;r<e;r++)t[r]=t[r+1];t[e]=n}var $c=globalThis&&globalThis.__awaiter||function(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(d){try{c(r.next(d))}catch(h){o(h)}}function a(d){try{c(r.throw(d))}catch(h){o(h)}}function c(d){d.done?s(d.value):i(d.value).then(l,a)}c((r=r.apply(t,e||[])).next())})},Bc=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(c){return function(d){return a([c,d])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(n=0)),n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};function xc(t){var e,n,r;if(t.alg===null||t.alg===void 0)throw new Error("alg must be defined");if(t.moves===null||t.moves===void 0)throw new Error("moves must be defined");return{alg:t.alg,moves:t.moves,onlyOrientation:(e=t.onlyOrientation)!==null&&e!==void 0?e:[],disregard:(n=t.disregard)!==null&&n!==void 0?n:[],maxSolutions:(r=t.maxSolutions)!==null&&r!==void 0?r:10}}function Fc(t){return $c(this,void 0,void 0,function(){var e;return Bc(this,function(n){return e=xc(t),[2,new Promise(function(r){var i=new Worker(new URL("/assets/worker-21d563c4.js",self.location));i.onmessage=function(s){var o=s.data,l=o.split(",");r(l),i.terminate()},i.onerror=function(s){console.log("Caught error"),console.error(s),i.terminate()},i.postMessage(e)})]})})}const En=-1;let le={showSolution:!1,scene:null,preAUF:"",postAUF:"",orientation:Yt.get()},ce;function Hc(t){return ce=t,I}function Wc(t){I=t}let I={user:null,algSet:null,algSetEditing:null,algSets:[],solutionButtonText:"show solution",modalOpen:!1,modalType:null,selectedAlg:null,selectedAlgIndex:0,showScramble:Lr.get(),scramble:""};async function Vc(){if(I.user=uc(),I.user,I.algSets=await Pc(I.user.uid),!I.algSets){ce(I);return}const t=Mr.get(),e=I.algSets.find(n=>n.id===t);I.algSet=e||I.algSets[0],ce(I)}function qt(t){I.user=t,ce(I)}function jc(){I.user=null,ce(I),gc()}function zc(){le.showSolution=!le.showSolution,I.solutionButtonText=le.showSolution?Di(kn()):"show solution",ce(I)}function Gc(t){it("edit alg");const e=I.algSet.trainingAlgs[t];I.selectedAlg=JSON.parse(JSON.stringify(e)),I.selectedAlgIndex=t,ce(I)}function qc(){I.selectedAlg={Alg:"",Score:0},I.selectedAlgIndex=En,it("edit alg"),ce(I)}function Kc(t){const e=t.target;I.selectedAlg.Alg=e.value}function Jc(){if(I.selectedAlgIndex===En){it(null),ce(I);return}I.algSet.trainingAlgs.splice(I.selectedAlgIndex,1),it(null),ce(I);const{id:t,name:e,trainingAlgs:n}=I.algSet;xt(t,e,n)}function Yc(){if(I.selectedAlgIndex===En)I.algSet.trainingAlgs.unshift(I.selectedAlg);else{const r=I.selectedAlg,i=I.selectedAlgIndex;I.algSet.trainingAlgs[i]=r}it(null),ce(I);const{id:t,name:e,trainingAlgs:n}=I.algSet;xt(t,e,n),Me()}function it(t){if(!t){I.modalOpen=!1,I.modalType=null;return}I.modalOpen=!0,I.modalType=t}function Di(t){return Ni(t,le.preAUF,le.postAUF)}function Xc(t){const e=ar(le.preAUF),n=ar(le.postAUF);return Ni(t,n,e)}function Ni(t,e,n){e&&(t=`${e} ${t}`),n&&(t=`${t} ${n}`);let r=t.split(" ");const i=sr(r[0],r[1]),s=sr(r[r.length-2],r[r.length-1]);return r=r.slice(2,-2),r=i.concat(r).concat(s),r.join(" ")}function sr(t,e){if(t[0]!=="U"||e[0]!=="U")return[t,e];const n=(or(t)+or(e))%4;return n===0?[]:[Qc(n)]}function or(t){return t.endsWith("'")?3:t.endsWith("2")?2:1}function Qc(t){return["","U","U2","U'"][t]}function ar(t){return t===""?"":t.endsWith("'")?t.slice(0,-1):t.endsWith("2")?t:`${t}'`}function lr(){return["","U","U2","U'"][In(4)]}function Zc(t){le.scene=t}function cr(){const t=I.algSet.trainingAlgs,e=t.map(i=>i.Score),n=Math.max(...e),r=new Array(n+1).fill(0);return e.forEach(i=>r[i]++),r.map((i,s)=>({reps:s,algs:i,ratio:Math.round(i/t.length*100)}))}function kn(){return I.algSet?.trainingAlgs?I.algSet.trainingAlgs[0].Alg:""}async function ur(){const t=le.scene;if(!t){console.error("Scene not set. Have you called setScene()?");return}I.algSet.cube=="2x2"?(t.cube.setNumOfLayers(2),t.cube.solve()):I.algSet.cube=="3x3"&&(t.cube.setNumOfLayers(3),t.cube.solve())}function Me(){let t=kn();if(!t)return;I.scramble="",ce(I),bt(),le.preAUF=lr(),le.postAUF=lr();const e=le.scene;e.cube.solve(),e.cube.performAlg(le.orientation),I.algSet.inactive.forEach(r=>{ji(e.cube.stickers[r],zi)});let n=Di(t);return e.cube.performAlgReverse(n),t}async function dr(t,e){if(t?Lc(I.algSet.trainingAlgs):Uc(I.algSet.trainingAlgs),I.algSet.id===-1){const n=I.user.uid,{trainingAlgs:r,cube:i,inactive:s,moves:o,disregard:l,onlyOrientation:a}=I.algSet,c=await Rc(n,e,r,i,s,o,l,a);I.algSet.id=c.id}else{const{id:n,name:r,trainingAlgs:i}=I.algSet;xt(n,r,i)}return nu(),Me()}async function bt(){if(!I.showScramble)return;let t=kn();const e=await Fc({alg:t,moves:"U U' F F' R R'",disregard:I.algSet.disregard,onlyOrientation:I.algSet.onlyOrientation}),n=Mc(e);I.scramble=Xc(n),ce(I)}function eu(t){Lr.set(t)}function tu(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}function Kt(){const t=kt.get(),e=new Date(t.msSinceEpoch),n=new Date;return tu(e,n)||(t.count=0,t.msSinceEpoch=n.getTime(),kt.set(t)),t.count}function nu(){const t=kt.get();t.count++,kt.set(t)}const hr=[{label:"white green",value:""},{label:"white orange",value:"y'"},{label:"white blue",value:"y2"},{label:"white red",value:"y"},{label:"yellow green",value:"z2"},{label:"yellow orange",value:"z2 y"},{label:"yellow blue",value:"z2 y2"},{label:"yellow red",value:"z2 y'"},{label:"green yellow",value:"x"},{label:"green orange",value:"x y'"},{label:"green white",value:"x y2"},{label:"green red",value:"x y"},{label:"blue white",value:"x'"},{label:"blue orange",value:"x' y'"},{label:"blue yellow",value:"x' y2"},{label:"blue red",value:"x' y"},{label:"orange green",value:"z"},{label:"orange yellow",value:"z y'"},{label:"orange blue",value:"z y2"},{label:"orange white",value:"z y"},{label:"red green",value:"z'"},{label:"red white",value:"z' y'"},{label:"red blue",value:"z' y2"},{label:"red yellow",value:"z' y"}];let fr={get:Yt.get,set:t=>{le.orientation=t,Yt.set(t),Me()}};function ru(t){const e=t-1;return e*e*e+1}function gr(t,{delay:e=0,duration:n=400,easing:r=Gi}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:s=>`opacity: ${s*i}`}}function pr(t,{delay:e=0,duration:n=400,easing:r=ru,x:i=0,y:s=0,opacity:o=0}={}){const l=getComputedStyle(t),a=+l.opacity,c=l.transform==="none"?"":l.transform,d=a*(1-o);return{delay:e,duration:n,easing:r,css:(h,g)=>`
			transform: ${c} translate(${(1-h)*i}px, ${(1-h)*s}px);
			opacity: ${a-d*g}`}}function mr(t){let e,n,r,i,s,o,l,a,c,d,h,g,v,S;l=new Se({props:{name:"x",class:"x-icon",style:"padding: 4px;"}}),l.$on("click",t[4]);const m=t[3].default,_=Rr(m,t,t[2],null);return{c(){e=f("div"),n=f("div"),r=f("div"),i=f("p"),s=ne(t[1]),o=b(),Y(l.$$.fragment),a=b(),_&&_.c(),P(r,"class","modal-header svelte-18uiis"),P(n,"class","modal svelte-18uiis"),p(e,"position","fixed"),p(e,"top","0"),p(e,"left","0"),p(e,"width","100%"),p(e,"height","100%"),p(e,"z-index","10"),p(e,"background","rgba(0, 0, 0, 0.5)")},m(T,k){x(T,e,k),u(e,n),u(n,r),u(r,i),u(i,s),u(r,o),X(l,r,null),u(n,a),_&&_.m(n,null),g=!0,v||(S=[W(n,"click",su),W(n,"keypress",ou),W(e,"click",t[5]),W(e,"keypress",au)],v=!0)},p(T,k){(!g||k&2)&&me(s,T[1]),_&&_.p&&(!g||k&4)&&Dr(_,m,T,T[2],g?Pr(m,T[2],k,null):Nr(T[2]),null)},i(T){g||(C(l.$$.fragment,T),C(_,T),Jt(()=>{d&&d.end(1),c=qi(n,pr,{y:50,duration:250}),c.start()}),Jt(()=>{h||(h=Tn(e,gr,{duration:250},!0)),h.run(1)}),g=!0)},o(T){R(l.$$.fragment,T),R(_,T),c&&c.invalidate(),d=Ki(n,pr,{y:50,duration:250}),h||(h=Tn(e,gr,{duration:250},!1)),h.run(0),g=!1},d(T){T&&F(e),Q(l),_&&_.d(T),T&&d&&d.end(),T&&h&&h.end(),v=!1,Nt(S)}}}function iu(t){let e,n,r=t[0]&&mr(t);return{c(){r&&r.c(),e=on()},m(i,s){r&&r.m(i,s),x(i,e,s),n=!0},p(i,[s]){i[0]?r?(r.p(i,s),s&1&&C(r,1)):(r=mr(i),r.c(),C(r,1),r.m(e.parentNode,e)):r&&(Ae(),R(r,1,1,()=>{r=null}),Ce())},i(i){n||(C(r),n=!0)},o(i){R(r),n=!1},d(i){r&&r.d(i),i&&F(e)}}}const su=t=>t.stopPropagation(),ou=t=>{},au=t=>{};function lu(t,e,n){let{$$slots:r={},$$scope:i}=e,{title:s}=e,{open:o=!1}=e;const l=()=>n(0,o=!1),a=()=>n(0,o=!1);return t.$$set=c=>{"title"in c&&n(1,s=c.title),"open"in c&&n(0,o=c.open),"$$scope"in c&&n(2,i=c.$$scope)},[o,s,i,r,l,a]}class cu extends Oe{constructor(e){super(),Re(this,e,lu,iu,De,{title:1,open:0})}}function Fe(t){return t?{modalOpen:!0,modalType:t}:{modalOpen:!1,modalType:null}}const _r=["OLL","PLL","F2L","CMLL","ZBLL","2x2 CLL","2x2 EG1","2x2 EG2"];class uu{callback;constructor(e){this.callback=e}displayChooseAlgSet(){const e=Fe("choose alg set");this.callback(e)}chooseAlgSet(e,n){Mr.set(e);const i={algSet:n.find(s=>s.id===e),...Fe(null)};this.callback(i)}async createPrebuiltAlgSet(e,n,r){const i=await Dc(e,n),o={algSets:r?[i,...r]:[i],algSet:i,...Fe(null)};this.callback(o)}createCustomSet(){const n={...Fe("edit alg set"),algSetEditing:{name:""}};this.callback(n)}editAlgSet(e,n){const r=Fe("edit alg set"),i=n.find(o=>o.id===e),s={...r,algSetEditing:i};this.callback(s)}deleteAlgSet(e,n,r){Nc(e);const s={algSets:n.filter(o=>o.id!==e)};this.callback(s)}saveAlgSet(e,n,r,i){const s=Fe(null);xt(e,n,r);const o=i.find(a=>a.id===e),l={...s,algSet:o,algSets:i};this.callback(l)}}function vr(t,e,n){const r=t.slice();return r[52]=e[n],r}function br(t,e,n){const r=t.slice();return r[55]=e[n],r}function yr(t,e,n){const r=t.slice();return r[61]=e[n],r[63]=n,r}function wr(t,e,n){const r=t.slice();return r[64]=e[n],r}function Ir(t,e,n){const r=t.slice();return r[58]=e[n],r}function Sr(t){let e,n,r,i,s,o,l;return n=new gt({props:{name:"chart"}}),n.$on("click",t[15]),i=new gt({props:{name:"profile"}}),i.$on("click",t[16]),o=new gt({props:{name:"settings"}}),o.$on("click",t[17]),{c(){e=f("div"),Y(n.$$.fragment),r=b(),Y(i.$$.fragment),s=b(),Y(o.$$.fragment),P(e,"id","iconContainer"),P(e,"class","row")},m(a,c){x(a,e,c),X(n,e,null),u(e,r),X(i,e,null),u(e,s),X(o,e,null),l=!0},p:z,i(a){l||(C(n.$$.fragment,a),C(i.$$.fragment,a),C(o.$$.fragment,a),l=!0)},o(a){R(n.$$.fragment,a),R(i.$$.fragment,a),R(o.$$.fragment,a),l=!1},d(a){a&&F(e),Q(n),Q(i),Q(o)}}}function du(t){let e,n,r,i,s,o,l,a,c,d,h,g,v,S,m,_,T,k=t[9].solutionButtonText+"",M,y,L,H,$,E,B,Z,oe,ee,re,V,G,q,ie,J,w;i=new Qi({props:{onSceneInitialized:t[24]}}),c=new Se({props:{name:"retry",id:"retry-icon",style:`
            width: 48px;
            height: 48px;
            padding: 2px;
            box-shadow: 0 0 4px var(--gray-400);`}}),c.$on("click",t[25]),h=new Se({props:{name:"sad",id:"sad-icon",style:`
            width: 48px;
            height: 48px;
            padding: 2px;
            box-shadow: 0 0 4px var(--gray-400);`}}),h.$on("click",t[26]),v=new Se({props:{name:"happy",id:"happy-icon",style:`
            width: 48px;
            height: 48px;
            padding: 2px;
            box-shadow: 0 0 4px var(--gray-400);`}}),v.$on("click",t[27]);let U=t[9].showScramble&&Er(t);const O=[pu,gu,fu],te=[];function ve(D,ae){return D[4]===0?0:D[4]===1?1:D[4]===2?2:-1}return~(V=ve(t))&&(G=te[V]=O[V](t)),{c(){e=f("div"),n=f("div"),r=b(),Y(i.$$.fragment),s=b(),o=f("div"),l=b(),a=f("div"),Y(c.$$.fragment),d=b(),Y(h.$$.fragment),g=b(),Y(v.$$.fragment),S=b(),m=f("div"),_=b(),T=f("button"),M=ne(k),y=b(),U&&U.c(),L=b(),H=f("div"),$=b(),E=f("p"),B=ne("cases today: "),Z=ne(t[7]),oe=b(),ee=f("div"),re=b(),G&&G.c(),q=on(),p(n,"height","16px"),p(o,"height","16px"),P(a,"class","row"),p(a,"gap","16px"),p(m,"height","16px"),P(T,"class","btn-primary"),p(H,"flex-grow","1"),p(ee,"height","16px"),P(e,"class","col"),p(e,"width","100%"),p(e,"height","100%")},m(D,ae){x(D,e,ae),u(e,n),u(e,r),X(i,e,null),u(e,s),u(e,o),u(e,l),u(e,a),X(c,a,null),u(a,d),X(h,a,null),u(a,g),X(v,a,null),u(e,S),u(e,m),u(e,_),u(e,T),u(T,M),u(e,y),U&&U.m(e,null),u(e,L),u(e,H),u(e,$),u(e,E),u(E,B),u(E,Z),u(e,oe),u(e,ee),x(D,re,ae),~V&&te[V].m(D,ae),x(D,q,ae),ie=!0,J||(w=W(T,"click",t[28]),J=!0)},p(D,ae){const ht={};ae[0]&512&&(ht.onSceneInitialized=D[24]),i.$set(ht),(!ie||ae[0]&512)&&k!==(k=D[9].solutionButtonText+"")&&me(M,k),D[9].showScramble?U?U.p(D,ae):(U=Er(D),U.c(),U.m(e,L)):U&&(U.d(1),U=null),(!ie||ae[0]&128)&&me(Z,D[7]);let Ke=V;V=ve(D),V===Ke?~V&&te[V].p(D,ae):(G&&(Ae(),R(te[Ke],1,1,()=>{te[Ke]=null}),Ce()),~V?(G=te[V],G?G.p(D,ae):(G=te[V]=O[V](D),G.c()),C(G,1),G.m(q.parentNode,q)):G=null)},i(D){ie||(C(i.$$.fragment,D),C(c.$$.fragment,D),C(h.$$.fragment,D),C(v.$$.fragment,D),C(G),ie=!0)},o(D){R(i.$$.fragment,D),R(c.$$.fragment,D),R(h.$$.fragment,D),R(v.$$.fragment,D),R(G),ie=!1},d(D){D&&F(e),Q(i),Q(c),Q(h),Q(v),U&&U.d(),D&&F(re),~V&&te[V].d(D),D&&F(q),J=!1,w()}}}function hu(t){let e,n,r,i,s,o,l,a,c,d,h,g,v,S,m,_;const T=[yu,bu],k=[];function M(y,L){return y[9].user?0:1}return S=M(t),m=k[S]=T[S](t),{c(){e=f("div"),n=f("h1"),n.textContent="Algorithm Trainer",r=b(),i=f("div"),s=b(),o=f("p"),o.textContent="Learn algorithms at lightning speed",l=b(),a=f("div"),c=b(),d=f("div"),d.innerHTML=`<h2>1. Memorize faster</h2> 
          <div style="height: 8px"></div> 
          <ul><li>Get an algorithm right, and you&#39;ll see it less often.</li> 
            <div style="height: 8px"></div> 
            <li>Get an algorithm wrong, and you&#39;ll see it more often.</li></ul> 
          <div style="height: 16px"></div> 
          <h2>2. Virtual Cube</h2> 
          <div style="height: 8px"></div> 
          <ul><li>Never scramble a cube again</li> 
            <div style="height: 8px"></div> 
            <li>Practice anywhere, anytime</li></ul>`,h=b(),g=f("div"),v=b(),m.c(),p(i,"height","16px"),P(o,"class","text-gradient"),p(o,"font-weight","bold"),p(o,"font-size","1.2rem"),p(o,"background-image","linear-gradient(90deg, var(--blue-400), var(--purple-400))"),p(a,"height","16px"),p(g,"height","24px"),P(e,"class","col w-full h-full"),p(e,"padding","16px")},m(y,L){x(y,e,L),u(e,n),u(e,r),u(e,i),u(e,s),u(e,o),u(e,l),u(e,a),u(e,c),u(e,d),u(e,h),u(e,g),u(e,v),k[S].m(e,null),_=!0},p(y,L){let H=S;S=M(y),S===H?k[S].p(y,L):(Ae(),R(k[H],1,1,()=>{k[H]=null}),Ce(),m=k[S],m?m.p(y,L):(m=k[S]=T[S](y),m.c()),C(m,1),m.m(e,null))},i(y){_||(C(m),_=!0)},o(y){R(m),_=!1},d(y){y&&F(e),k[S].d()}}}function Er(t){let e,n,r,i,s=(t[9].scramble||"loading...")+"",o;return{c(){e=f("div"),n=b(),r=f("p"),i=ne("scramble: "),o=ne(s),p(e,"height","16px")},m(l,a){x(l,e,a),x(l,n,a),x(l,r,a),u(r,i),u(r,o)},p(l,a){a[0]&512&&s!==(s=(l[9].scramble||"loading...")+"")&&me(o,s)},d(l){l&&F(e),l&&F(n),l&&F(r)}}}function fu(t){let e,n;return e=new an({props:{title:"Settings",close:t[38],$$slots:{default:[mu]},$$scope:{ctx:t}}}),{c(){Y(e.$$.fragment)},m(r,i){X(e,r,i),n=!0},p(r,i){const s={};i[0]&576|i[2]&32&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function gu(t){let e,n;return e=new an({props:{title:"Profile",close:t[31],$$slots:{default:[_u]},$$scope:{ctx:t}}}),{c(){Y(e.$$.fragment)},m(r,i){X(e,r,i),n=!0},p(r,i){const s={};i[0]&516|i[2]&32&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function pu(t){let e,n;return e=new an({props:{title:"Stats",close:t[29],$$slots:{default:[vu]},$$scope:{ctx:t}}}),{c(){Y(e.$$.fragment)},m(r,i){X(e,r,i),n=!0},p(r,i){const s={};i[2]&32&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function kr(t){let e,n=t[64].label+"",r;return{c(){e=f("option"),r=ne(n),e.__value=t[64].value,e.value=e.__value},m(i,s){x(i,e,s),u(e,r)},p:z,d(i){i&&F(e)}}}function Tr(t){let e,n,r=t[61].Alg+"",i,s,o,l;function a(){return t[37](t[63])}return{c(){e=f("button"),n=f("p"),i=ne(r),s=b(),P(e,"class","alg-list-item svelte-x87i1g"),p(e,"border-top","solid 1px var(--gray-500)"),p(e,"border-radius","0"),p(e,"width","100%"),p(e,"padding","4px"),p(e,"text-align","left")},m(c,d){x(c,e,d),u(e,n),u(n,i),u(e,s),o||(l=W(e,"click",a),o=!0)},p(c,d){t=c,d[0]&512&&r!==(r=t[61].Alg+"")&&me(i,r)},d(c){c&&F(e),o=!1,l()}}}function mu(t){let e,n,r,i=(t[9].algSet?.name??"none")+"",s,o,l,a,c,d,h,g,v,S,m,_,T,k,M,y,L,H,$,E,B,Z,oe,ee,re,V,G=hr,q=[];for(let w=0;w<G.length;w+=1)q[w]=kr(wr(t,G,w));Z=new Se({props:{name:"plus",id:"plus-icon",style:`
                width: 24px; 
                height: 24px; 
                padding: 4px; 
                margin-left: 4px;`}}),Z.$on("click",t[36]);let ie=t[9].algSet?.trainingAlgs??[],J=[];for(let w=0;w<ie.length;w+=1)J[w]=Tr(yr(t,ie,w));return{c(){e=f("div"),n=f("p"),r=ne("algorithm set: "),s=ne(i),o=b(),l=f("button"),l.textContent="choose alg set",a=b(),c=f("div"),d=b(),h=f("p"),h.textContent="orientation",g=b(),v=f("select");for(let w=0;w<q.length;w+=1)q[w].c();S=b(),m=f("div"),_=b(),T=f("p"),T.textContent="show scramble",k=b(),M=f("input"),y=b(),L=f("div"),H=b(),$=f("div"),E=f("p"),E.textContent="algorithms",B=b(),Y(Z.$$.fragment),oe=b();for(let w=0;w<J.length;w+=1)J[w].c();p(c,"height","16px"),t[6]===void 0&&Jt(()=>t[33].call(v)),p(m,"height","16px"),P(M,"type","checkbox"),p(L,"height","16px"),P($,"class","row"),p(e,"padding","16px")},m(w,U){x(w,e,U),u(e,n),u(n,r),u(n,s),u(e,o),u(e,l),u(e,a),u(e,c),u(e,d),u(e,h),u(e,g),u(e,v);for(let O=0;O<q.length;O+=1)q[O].m(v,null);An(v,t[6]),u(e,S),u(e,m),u(e,_),u(e,T),u(e,k),u(e,M),M.checked=t[9].showScramble,u(e,y),u(e,L),u(e,H),u(e,$),u($,E),u($,B),X(Z,$,null),u(e,oe);for(let O=0;O<J.length;O+=1)J[O].m(e,null);ee=!0,re||(V=[W(l,"click",t[32]),W(v,"change",t[33]),W(v,"change",t[12]),W(M,"change",t[34]),W(M,"change",t[35])],re=!0)},p(w,U){if((!ee||U[0]&512)&&i!==(i=(w[9].algSet?.name??"none")+"")&&me(s,i),U&0){G=hr;let O;for(O=0;O<G.length;O+=1){const te=wr(w,G,O);q[O]?q[O].p(te,U):(q[O]=kr(te),q[O].c(),q[O].m(v,null))}for(;O<q.length;O+=1)q[O].d(1);q.length=G.length}if(U[0]&64&&An(v,w[6]),U[0]&512&&(M.checked=w[9].showScramble),U[0]&512){ie=w[9].algSet?.trainingAlgs??[];let O;for(O=0;O<ie.length;O+=1){const te=yr(w,ie,O);J[O]?J[O].p(te,U):(J[O]=Tr(te),J[O].c(),J[O].m(e,null))}for(;O<J.length;O+=1)J[O].d(1);J.length=ie.length}},i(w){ee||(C(Z.$$.fragment,w),ee=!0)},o(w){R(Z.$$.fragment,w),ee=!1},d(w){w&&F(e),Qe(q,w),Q(Z),Qe(J,w),re=!1,Nt(V)}}}function _u(t){let e,n,r,i=t[9].user.email+"",s,o,l,a,c;return{c(){e=f("div"),n=f("p"),r=ne("signed in as "),s=ne(i),o=b(),l=f("button"),l.textContent="Sign Out",P(l,"class","btn-primary"),p(e,"padding","12px")},m(d,h){x(d,e,h),u(e,n),u(n,r),u(n,s),u(e,o),u(e,l),a||(c=W(l,"click",t[30]),a=!0)},p(d,h){h[0]&512&&i!==(i=d[9].user.email+"")&&me(s,i)},d(d){d&&F(e),a=!1,c()}}}function Ar(t){let e,n,r=t[58].reps+"",i,s,o,l=t[58].algs+"",a,c,d,h=t[58].ratio+"",g,v,S;return{c(){e=f("tr"),n=f("td"),i=ne(r),s=b(),o=f("td"),a=ne(l),c=b(),d=f("td"),g=ne(h),v=ne("%"),S=b()},m(m,_){x(m,e,_),u(e,n),u(n,i),u(e,s),u(e,o),u(o,a),u(e,c),u(e,d),u(d,g),u(d,v),u(e,S)},p:z,d(m){m&&F(e)}}}function vu(t){let e,n,r,i,s=cr(),o=[];for(let l=0;l<s.length;l+=1)o[l]=Ar(Ir(t,s,l));return{c(){e=f("table"),n=f("thead"),n.innerHTML=`<tr><th>repetitions</th> 
                <th>algs</th> 
                <th>%</th></tr>`,r=b(),i=f("tbody");for(let l=0;l<o.length;l+=1)o[l].c();p(e,"margin","16px auto")},m(l,a){x(l,e,a),u(e,n),u(e,r),u(e,i);for(let c=0;c<o.length;c+=1)o[c].m(i,null)},p(l,a){if(a&0){s=cr();let c;for(c=0;c<s.length;c+=1){const d=Ir(l,s,c);o[c]?o[c].p(d,a):(o[c]=Ar(d),o[c].c(),o[c].m(i,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=s.length}},d(l){l&&F(e),Qe(o,l)}}}function bu(t){let e,n,r,i,s,o,l,a,c,d,h,g,v,S,m,_,T,k,M,y,L,H,$,E,B,Z,oe,ee,re,V;n=new Sc({props:{callback:t[19]}});function G(w){t[20](w)}let q={class:"mt-4"};t[0]!==void 0&&(q.value=t[0]),S=new Tc({props:q}),It.push(()=>St(S,"value",G));function ie(w){t[21](w)}let J={class:"mt-4"};return t[1]!==void 0&&(J.value=t[1]),M=new Oc({props:J}),It.push(()=>St(M,"value",ie)),B=new _c({props:{email:t[0],password:t[1],callback:t[22]}}),re=new yc({props:{email:t[0],password:t[1],callback:t[23]}}),{c(){e=f("div"),Y(n.$$.fragment),r=b(),i=f("div"),s=b(),o=f("div"),l=b(),a=f("div"),c=b(),d=f("p"),d.textContent="Or use email and password",h=b(),g=f("div"),v=b(),Y(S.$$.fragment),_=b(),T=f("div"),k=b(),Y(M.$$.fragment),L=b(),H=f("div"),$=b(),E=f("div"),Y(B.$$.fragment),Z=b(),oe=f("div"),ee=b(),Y(re.$$.fragment),p(i,"height","16px"),p(o,"width","100%"),p(o,"height","2px"),p(o,"background-color","var(--gray-600)"),p(a,"height","16px"),p(g,"height","12px"),p(T,"height","16px"),p(H,"height","32px"),p(oe,"width","16px"),P(E,"class","row"),P(e,"class","col"),p(e,"border-radius","16px"),p(e,"padding","16px"),p(e,"box-shadow","0 0 4px lightgray")},m(w,U){x(w,e,U),X(n,e,null),u(e,r),u(e,i),u(e,s),u(e,o),u(e,l),u(e,a),u(e,c),u(e,d),u(e,h),u(e,g),u(e,v),X(S,e,null),u(e,_),u(e,T),u(e,k),X(M,e,null),u(e,L),u(e,H),u(e,$),u(e,E),X(B,E,null),u(E,Z),u(E,oe),u(E,ee),X(re,E,null),V=!0},p(w,U){const O={};!m&&U[0]&1&&(m=!0,O.value=w[0],Et(()=>m=!1)),S.$set(O);const te={};!y&&U[0]&2&&(y=!0,te.value=w[1],Et(()=>y=!1)),M.$set(te);const ve={};U[0]&1&&(ve.email=w[0]),U[0]&2&&(ve.password=w[1]),B.$set(ve);const D={};U[0]&1&&(D.email=w[0]),U[0]&2&&(D.password=w[1]),re.$set(D)},i(w){V||(C(n.$$.fragment,w),C(S.$$.fragment,w),C(M.$$.fragment,w),C(B.$$.fragment,w),C(re.$$.fragment,w),V=!0)},o(w){R(n.$$.fragment,w),R(S.$$.fragment,w),R(M.$$.fragment,w),R(B.$$.fragment,w),R(re.$$.fragment,w),V=!1},d(w){w&&F(e),Q(n),Q(S),Q(M),Q(B),Q(re)}}}function yu(t){let e,n,r;return{c(){e=f("button"),e.textContent="Start Training"},m(i,s){x(i,e,s),n||(r=W(e,"click",t[18]),n=!0)},p:z,i:z,o:z,d(i){i&&F(e),n=!1,r()}}}function wu(t){let e,n,r,i,s,o,l,a,c;return{c(){e=f("div"),n=f("input"),r=b(),i=f("div"),s=f("button"),s.textContent="Delete",o=b(),l=f("button"),l.textContent="Save",P(n,"type","text"),p(n,"width","300px"),P(s,"class","btn-gray"),P(i,"class","row"),p(i,"gap","16px"),P(e,"class","col"),p(e,"padding","16px"),p(e,"gap","16px")},m(d,h){x(d,e,h),u(e,n),Te(n,t[9].selectedAlg.Alg),u(e,r),u(e,i),u(i,s),u(i,o),u(i,l),a||(c=[W(n,"input",t[47]),W(n,"change",Kc),W(s,"click",t[48]),W(l,"click",t[49])],a=!0)},p(d,h){h[0]&512&&n.value!==d[9].selectedAlg.Alg&&Te(n,d[9].selectedAlg.Alg)},i:z,o:z,d(d){d&&F(e),a=!1,Nt(c)}}}function Iu(t){let e,n,r,i,s,o;return{c(){e=f("div"),n=f("input"),r=b(),i=f("button"),i.textContent="save",P(n,"type","text"),P(e,"class","col"),p(e,"padding","16px"),p(e,"gap","16px")},m(l,a){x(l,e,a),u(e,n),Te(n,t[9].algSetEditing.name),u(e,r),u(e,i),s||(o=[W(n,"input",t[45]),W(i,"click",t[46])],s=!0)},p(l,a){a[0]&512&&n.value!==l[9].algSetEditing.name&&Te(n,l[9].algSetEditing.name)},i:z,o:z,d(l){l&&F(e),s=!1,Nt(o)}}}function Su(t){let e,n,r,i,s,o,l,a,c,d,h,g,v,S,m=_r,_=[];for(let y=0;y<m.length;y+=1)_[y]=Cr(br(t,m,y));const T=[ku,Eu],k=[];function M(y,L){return!y[9].algSets||y[9].algSets.length===0?0:1}return a=M(t),c=k[a]=T[a](t),{c(){e=f("div"),n=f("p"),n.textContent="pre-built sets",r=b(),i=f("div");for(let y=0;y<_.length;y+=1)_[y].c();s=b(),o=f("p"),o.textContent="your sets",l=b(),c.c(),d=b(),h=f("button"),h.textContent="new custom set",p(n,"font-weight","bold"),p(i,"display","flex"),p(i,"flex-wrap","wrap"),p(i,"justify-content","center"),p(i,"gap","16px"),p(o,"font-weight","bold"),P(e,"class","col"),p(e,"padding","16px"),p(e,"gap","16px")},m(y,L){x(y,e,L),u(e,n),u(e,r),u(e,i);for(let H=0;H<_.length;H+=1)_[H].m(i,null);u(e,s),u(e,o),u(e,l),k[a].m(e,null),u(e,d),u(e,h),g=!0,v||(S=W(h,"click",t[44]),v=!0)},p(y,L){if(L[0]&8704){m=_r;let $;for($=0;$<m.length;$+=1){const E=br(y,m,$);_[$]?_[$].p(E,L):(_[$]=Cr(E),_[$].c(),_[$].m(i,null))}for(;$<_.length;$+=1)_[$].d(1);_.length=m.length}let H=a;a=M(y),a===H?k[a].p(y,L):(Ae(),R(k[H],1,1,()=>{k[H]=null}),Ce(),c=k[a],c?c.p(y,L):(c=k[a]=T[a](y),c.c()),C(c,1),c.m(e,d))},i(y){g||(C(c),g=!0)},o(y){R(c),g=!1},d(y){y&&F(e),Qe(_,y),k[a].d(),v=!1,S()}}}function Cr(t){let e,n=t[55]+"",r,i,s,o;function l(){return t[40](t[55])}return{c(){e=f("button"),r=ne(n),i=b()},m(a,c){x(a,e,c),u(e,r),u(e,i),s||(o=W(e,"click",l),s=!0)},p(a,c){t=a},d(a){a&&F(e),s=!1,o()}}}function Eu(t){let e,n,r=t[9].algSets,i=[];for(let o=0;o<r.length;o+=1)i[o]=Or(vr(t,r,o));const s=o=>R(i[o],1,1,()=>{i[o]=null});return{c(){e=f("div");for(let o=0;o<i.length;o+=1)i[o].c();p(e,"width","100%"),p(e,"max-width","300px")},m(o,l){x(o,e,l);for(let a=0;a<i.length;a+=1)i[a].m(e,null);n=!0},p(o,l){if(l[0]&8704){r=o[9].algSets;let a;for(a=0;a<r.length;a+=1){const c=vr(o,r,a);i[a]?(i[a].p(c,l),C(i[a],1)):(i[a]=Or(c),i[a].c(),C(i[a],1),i[a].m(e,null))}for(Ae(),a=r.length;a<i.length;a+=1)s(a);Ce()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)C(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)R(i[l]);n=!1},d(o){o&&F(e),Qe(i,o)}}}function ku(t){let e;return{c(){e=f("p"),e.textContent="you don't have any sets yet",p(e,"font-style","italic")},m(n,r){x(n,e,r)},p:z,i:z,o:z,d(n){n&&F(e)}}}function Or(t){let e,n,r=t[52].name+"",i,s,o,l,a,c,d,h,g,v,S,m,_;function T(){return t[41](t[52])}a=new Se({props:{name:"edit",style:"width: 30px; height: 30px; padding: 4px;"}}),a.$on("click",T);function k(){return t[42](t[52])}g=new Se({props:{name:"x",style:"width: 30px; height: 30px; padding: 4px;"}}),g.$on("click",k);function M(){return t[43](t[52])}return{c(){e=f("button"),n=f("p"),i=ne(r),s=b(),o=f("div"),l=b(),Y(a.$$.fragment),c=b(),d=f("div"),h=b(),Y(g.$$.fragment),v=b(),p(n,"font-size","1.2rem"),p(o,"flex-grow","1"),p(d,"width","16px"),P(e,"class","row alg-list-item svelte-x87i1g"),p(e,"width","100%"),p(e,"border-top","solid 1px var(--gray-500)"),p(e,"padding","4px")},m(y,L){x(y,e,L),u(e,n),u(n,i),u(e,s),u(e,o),u(e,l),X(a,e,null),u(e,c),u(e,d),u(e,h),X(g,e,null),u(e,v),S=!0,m||(_=W(e,"click",M),m=!0)},p(y,L){t=y,(!S||L[0]&512)&&r!==(r=t[52].name+"")&&me(i,r)},i(y){S||(C(a.$$.fragment,y),C(g.$$.fragment,y),S=!0)},o(y){R(a.$$.fragment,y),R(g.$$.fragment,y),S=!1},d(y){y&&F(e),Q(a),Q(g),m=!1,_()}}}function Tu(t){let e,n,r,i;const s=[Su,Iu,wu],o=[];function l(a,c){return a[9].modalType==="choose alg set"?0:a[9].modalType==="edit alg set"?1:a[9].modalType==="edit alg"?2:-1}return~(e=l(t))&&(n=o[e]=s[e](t)),{c(){n&&n.c(),r=on()},m(a,c){~e&&o[e].m(a,c),x(a,r,c),i=!0},p(a,c){let d=e;e=l(a),e===d?~e&&o[e].p(a,c):(n&&(Ae(),R(o[d],1,1,()=>{o[d]=null}),Ce()),~e?(n=o[e],n?n.p(a,c):(n=o[e]=s[e](a),n.c()),C(n,1),n.m(r.parentNode,r)):n=null)},i(a){i||(C(n),i=!0)},o(a){R(n),i=!1},d(a){~e&&o[e].d(a),a&&F(r)}}}function Au(t){let e,n,r,i,s,o,l,a,c,d,h,g,v,S,m;r=new gt({props:{name:"menu"}}),r.$on("click",t[14]);let _=t[2]==="train"&&Sr(t);const T=[hu,du],k=[];function M(E,B){return E[2]==="landing"?0:E[2]==="train"?1:-1}~(l=M(t))&&(a=k[l]=T[l](t));function y(E){t[39](E)}let L={};t[8]!==void 0&&(L.open=t[8]),d=new Ji({props:L}),It.push(()=>St(d,"open",y));function H(E){t[50](E)}let $={title:t[9].modalType,$$slots:{default:[Tu]},$$scope:{ctx:t}};return t[9].modalOpen!==void 0&&($.open=t[9].modalOpen),v=new cu({props:$}),It.push(()=>St(v,"open",H)),{c(){e=f("main"),n=f("nav"),Y(r.$$.fragment),i=b(),_&&_.c(),s=b(),o=f("div"),a&&a.c(),c=b(),Y(d.$$.fragment),g=b(),Y(v.$$.fragment),P(n,"class","navbar"),p(n,"justify-content","space-between"),P(o,"class","row"),p(o,"justify-content","center"),p(o,"align-items","start"),p(o,"width","100%"),p(o,"height","100%"),p(o,"position","relative"),P(e,"class","col"),p(e,"width","100%"),p(e,"height","100%")},m(E,B){x(E,e,B),u(e,n),X(r,n,null),u(n,i),_&&_.m(n,null),u(e,s),u(e,o),~l&&k[l].m(o,null),u(e,c),X(d,e,null),u(e,g),X(v,e,null),m=!0},p(E,B){E[2]==="train"?_?(_.p(E,B),B[0]&4&&C(_,1)):(_=Sr(E),_.c(),C(_,1),_.m(n,null)):_&&(Ae(),R(_,1,1,()=>{_=null}),Ce());let Z=l;l=M(E),l===Z?~l&&k[l].p(E,B):(a&&(Ae(),R(k[Z],1,1,()=>{k[Z]=null}),Ce()),~l?(a=k[l],a?a.p(E,B):(a=k[l]=T[l](E),a.c()),C(a,1),a.m(o,null)):a=null);const oe={};!h&&B[0]&256&&(h=!0,oe.open=E[8],Et(()=>h=!1)),d.$set(oe);const ee={};B[0]&512&&(ee.title=E[9].modalType),B[0]&512|B[2]&32&&(ee.$$scope={dirty:B,ctx:E}),!S&&B[0]&512&&(S=!0,ee.open=E[9].modalOpen,Et(()=>S=!1)),v.$set(ee)},i(E){m||(C(r.$$.fragment,E),C(_),C(a),C(d.$$.fragment,E),C(v.$$.fragment,E),m=!0)},o(E){R(r.$$.fragment,E),R(_),R(a),R(d.$$.fragment,E),R(v.$$.fragment,E),m=!1},d(E){E&&F(e),Q(r),_&&_.d(),~l&&k[l].d(),Q(d),Q(v)}}}function Cu(t,e,n){let r="",i="",s="landing",o=!1,l=-1;function a(N){l===N?n(4,l=-1):n(4,l=N)}let c,d,h=fr.get();function g(N){const Vi=N.target.value;fr.set(Vi)}let v=Kt(),S=!1,m=Hc(N=>{n(9,m=N)});const _=new uu(N=>{n(9,m=Object.assign(m,N)),Wc(m)});Yi(()=>{Vc()});const T=()=>n(8,S=!0),k=()=>a(0),M=()=>a(1),y=()=>a(2),L=()=>n(2,s="train"),H=N=>qt(N);function $(N){r=N,n(0,r)}function E(N){i=N,n(1,i)}const B=N=>qt(N),Z=N=>qt(N),oe=N=>{Zc(N),console.log(m.algSet),m.algSet?Me():_.displayChooseAlgSet()},ee=()=>{n(5,d=Me()),n(3,o=!1)},re=()=>{dr(!1,c).then(N=>{n(5,d=N),n(3,o=!1),n(7,v=Kt()),bt()})},V=()=>{dr(!0,c).then(N=>{n(5,d=N),n(3,o=!1),n(7,v=Kt()),bt()})},G=()=>zc(),q=()=>a(-1),ie=()=>{n(2,s="landing"),jc()},J=()=>a(-1),w=()=>_.displayChooseAlgSet();function U(){h=Xi(this),n(6,h)}function O(){m.showScramble=this.checked,n(9,m)}const te=()=>{eu(m.showScramble),bt()},ve=()=>qc(),D=N=>Gc(N),ae=()=>a(-1);function ht(N){S=N,n(8,S)}const Ke=N=>{_.createPrebuiltAlgSet(m.user.uid,N,m.algSets).then(()=>{ur(),Me()})},Pi=N=>_.editAlgSet(N.id,m.algSets),Mi=N=>_.deleteAlgSet(N.id,m.algSets,m.algSet),Li=N=>{_.chooseAlgSet(N.id,m.algSets),ur(),Me()},Ui=()=>_.createCustomSet();function $i(){m.algSetEditing.name=this.value,n(9,m)}const Bi=()=>_.saveAlgSet(m.algSetEditing.id,m.algSetEditing.name,m.algSetEditing.trainingAlgs,m.algSets);function xi(){m.selectedAlg.Alg=this.value,n(9,m)}const Fi=()=>Jc(),Hi=()=>Yc();function Wi(N){t.$$.not_equal(m.modalOpen,N)&&(m.modalOpen=N,n(9,m))}return[r,i,s,o,l,d,h,v,S,m,a,c,g,_,T,k,M,y,L,H,$,E,B,Z,oe,ee,re,V,G,q,ie,J,w,U,O,te,ve,D,ae,ht,Ke,Pi,Mi,Li,Ui,$i,Bi,xi,Fi,Hi,Wi]}class Ou extends Oe{constructor(e){super(),Re(this,e,Cu,Au,De,{},null,[-1,-1,-1])}}new Ou({target:document.getElementById("app")});
