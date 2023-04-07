import{S as ve,i as be,s as ye,e as f,g as M,j as x,l as V,x as W,r as F,w as Oe,y as yt,z as wt,I as Te,A as Rr,t as ne,f as _,d as Y,h as g,k as u,m as X,n as me,B as Dr,C as Nr,D as Pr,p as A,q as O,u as Q,E as Vi,F as ji,H as zi,J as on,K as Re,L as De,M as Jt,O as Gi,P as Tn,Q as qi,v as Nt,N as gt,a as Ki,b as It,c as St,o as Et,R as Ji,T as Yi,G as Xi,U as An,V as Qe}from"./NavBarIcon-c616a1f2.js";/**
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
 */const Lr=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qi=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Mr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,d=s>>2,h=(s&3)<<4|l>>4;let p=(l&15)<<2|c>>6,m=c&63;a||(m=64,o||(p=64)),r.push(n[d],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qi(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||h==null)throw Error();const p=s<<2|l>>4;if(r.push(p),c!==64){const m=l<<4&240|c>>2;if(r.push(m),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Zi=function(t){const e=Lr(t);return Mr.encodeByteArray(e,!0)},$r=function(t){return Zi(t).replace(/\./g,"")},es=function(t){try{return Mr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ts(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ns=()=>ts().__FIREBASE_DEFAULTS__,rs=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},is=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&es(t[1]);return e&&JSON.parse(e)},ss=()=>{try{return ns()||rs()||is()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},os=()=>{var t;return(t=ss())===null||t===void 0?void 0:t.config};/**
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
 */class as{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function ls(){try{return typeof indexedDB=="object"}catch{return!1}}function cs(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const us="FirebaseError";let an=class Ur extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=us,Object.setPrototypeOf(this,Ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}},Br=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ds(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new an(i,l,r)}};function ds(t,e){return t.replace(hs,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hs=/\{\$([^}]+)}/g;function Yt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cn(s)&&Cn(o)){if(!Yt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cn(t){return t!==null&&typeof t=="object"}let kt=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */class fs{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new as;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ps(e))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ne){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ne){return this.instances.has(e)}getOptions(e=Ne){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gs(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ne){return this.component?this.component.multipleInstances?e:Ne:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gs(t){return t===Ne?void 0:t}function ps(t){return t.instantiationMode==="EAGER"}/**
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
 */class ms{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fs(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const _s={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},vs=J.INFO,bs={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},ys=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bs[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let ws=class{constructor(e){this.name=e,this._logLevel=vs,this._logHandler=ys,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}};const Is=(t,e)=>e.some(n=>t instanceof n);let On,Rn;function Ss(){return On||(On=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Es(){return Rn||(Rn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xr=new WeakMap,Xt=new WeakMap,Fr=new WeakMap,Ft=new WeakMap,ln=new WeakMap;function ks(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ae(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xr.set(n,t)}).catch(()=>{}),ln.set(e,t),e}function Ts(t){if(Xt.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xt.set(t,e)}let Qt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ae(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function As(t){Qt=t(Qt)}function Cs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ht(this),e,...n);return Fr.set(r,e.sort?e.sort():[e]),Ae(r)}:Es().includes(t)?function(...e){return t.apply(Ht(this),e),Ae(xr.get(this))}:function(...e){return Ae(t.apply(Ht(this),e))}}function Os(t){return typeof t=="function"?Cs(t):(t instanceof IDBTransaction&&Ts(t),Is(t,Ss())?new Proxy(t,Qt):t)}function Ae(t){if(t instanceof IDBRequest)return ks(t);if(Ft.has(t))return Ft.get(t);const e=Os(t);return e!==t&&(Ft.set(t,e),ln.set(e,t)),e}const Ht=t=>ln.get(t);function Rs(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ae(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Ae(o.result),a.oldVersion,a.newVersion,Ae(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Ds=["get","getKey","getAll","getAllKeys","count"],Ns=["put","add","delete","clear"],Wt=new Map;function Dn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wt.get(e))return Wt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ns.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ds.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Wt.set(e,s),s}As(t=>({...t,get:(e,n,r)=>Dn(e,n)||t.get(e,n,r),has:(e,n)=>!!Dn(e,n)||t.has(e,n)}));/**
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
 */class Ps{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ls(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ls(t){const e=t.getComponent();return e?.type==="VERSION"}const Zt="@firebase/app",Nn="0.9.1";/**
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
 */const $e=new ws("@firebase/app"),Ms="@firebase/app-compat",$s="@firebase/analytics-compat",Us="@firebase/analytics",Bs="@firebase/app-check-compat",xs="@firebase/app-check",Fs="@firebase/auth",Hs="@firebase/auth-compat",Ws="@firebase/database",Vs="@firebase/database-compat",js="@firebase/functions",zs="@firebase/functions-compat",Gs="@firebase/installations",qs="@firebase/installations-compat",Ks="@firebase/messaging",Js="@firebase/messaging-compat",Ys="@firebase/performance",Xs="@firebase/performance-compat",Qs="@firebase/remote-config",Zs="@firebase/remote-config-compat",eo="@firebase/storage",to="@firebase/storage-compat",no="@firebase/firestore",ro="@firebase/firestore-compat",io="firebase",so="9.16.0";/**
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
 */const en="[DEFAULT]",oo={[Zt]:"fire-core",[Ms]:"fire-core-compat",[Us]:"fire-analytics",[$s]:"fire-analytics-compat",[xs]:"fire-app-check",[Bs]:"fire-app-check-compat",[Fs]:"fire-auth",[Hs]:"fire-auth-compat",[Ws]:"fire-rtdb",[Vs]:"fire-rtdb-compat",[js]:"fire-fn",[zs]:"fire-fn-compat",[Gs]:"fire-iid",[qs]:"fire-iid-compat",[Ks]:"fire-fcm",[Js]:"fire-fcm-compat",[Ys]:"fire-perf",[Xs]:"fire-perf-compat",[Qs]:"fire-rc",[Zs]:"fire-rc-compat",[eo]:"fire-gcs",[to]:"fire-gcs-compat",[no]:"fire-fst",[ro]:"fire-fst-compat","fire-js":"fire-js",[io]:"fire-js-all"};/**
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
 */const Tt=new Map,tn=new Map;function ao(t,e){try{t.container.addComponent(e)}catch(n){$e.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ze(t){const e=t.name;if(tn.has(e))return $e.debug(`There were multiple attempts to register component ${e}.`),!1;tn.set(e,t);for(const n of Tt.values())ao(n,t);return!0}function Hr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const lo={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ce=new Br("app","Firebase",lo);/**
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
 */class co{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
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
 */const Pt=so;function Wr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:en,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ce.create("bad-app-name",{appName:String(i)});if(n||(n=os()),!n)throw Ce.create("no-options");const s=Tt.get(i);if(s){if(Yt(n,s.options)&&Yt(r,s.config))return s;throw Ce.create("duplicate-app",{appName:i})}const o=new ms(i);for(const a of tn.values())o.addComponent(a);const l=new co(n,r,o);return Tt.set(i,l),l}function uo(t=en){const e=Tt.get(t);if(!e&&t===en)return Wr();if(!e)throw Ce.create("no-app",{appName:t});return e}function He(t,e,n){var r;let i=(r=oo[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$e.warn(l.join(" "));return}Ze(new kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ho="firebase-heartbeat-database",fo=1,et="firebase-heartbeat-store";let Vt=null;function Vr(){return Vt||(Vt=Rs(ho,fo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(et)}}}).catch(t=>{throw Ce.create("idb-open",{originalErrorMessage:t.message})})),Vt}async function go(t){try{return(await Vr()).transaction(et).objectStore(et).get(jr(t))}catch(e){if(e instanceof an)$e.warn(e.message);else{const n=Ce.create("idb-get",{originalErrorMessage:e?.message});$e.warn(n.message)}}}async function Pn(t,e){try{const r=(await Vr()).transaction(et,"readwrite");return await r.objectStore(et).put(e,jr(t)),r.done}catch(n){if(n instanceof an)$e.warn(n.message);else{const r=Ce.create("idb-set",{originalErrorMessage:n?.message});$e.warn(r.message)}}}function jr(t){return`${t.name}!${t.options.appId}`}/**
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
 */const po=1024,mo=30*24*60*60*1e3;class _o{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bo(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ln();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=mo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ln(),{heartbeatsToSend:n,unsentEntries:r}=vo(this._heartbeatsCache.heartbeats),i=$r(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ln(){return new Date().toISOString().substring(0,10)}function vo(t,e=po){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mn(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ls()?cs().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await go(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mn(t){return $r(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function yo(t){Ze(new kt("platform-logger",e=>new Ps(e),"PRIVATE")),Ze(new kt("heartbeat",e=>new _o(e),"PRIVATE")),He(Zt,Nn,t),He(Zt,Nn,"esm2017"),He("fire-js","")}yo("");var wo="firebase",Io="9.16.0";/**
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
 */He(wo,Io,"app");/**
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
 */const So=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Eo=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,d=s>>2,h=(s&3)<<4|l>>4;let p=(l&15)<<2|c>>6,m=c&63;a||(m=64,o||(p=64)),r.push(n[d],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(So(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Eo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||h==null)throw Error();const p=s<<2|l>>4;if(r.push(p),c!==64){const m=l<<4&240|c>>2;if(r.push(m),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},zr=function(t){try{return ko.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function To(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ao=()=>To().__FIREBASE_DEFAULTS__,Co=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Oo=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zr(t[1]);return e&&JSON.parse(e)},Gr=()=>{try{return Ao()||Co()||Oo()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ro=t=>{var e,n;return(n=(e=Gr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qr=t=>{var e;return(e=Gr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Do(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function No(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Po(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lo(){const t=se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
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
 */const Mo="FirebaseError";class je extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Mo,Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lt.prototype.create)}}class Lt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$o(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new je(i,l,r)}}function $o(t,e){return t.replace(Uo,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Uo=/\{\$([^}]+)}/g;function Bo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($n(s)&&$n(o)){if(!Kr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $n(t){return t!==null&&typeof t=="object"}/**
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
 */function st(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Je(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ye(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xo(t,e){const n=new Fo(t,e);return n.subscribe.bind(n)}class Fo{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ho(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jt),i.error===void 0&&(i.error=jt),i.complete===void 0&&(i.complete=jt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ho(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jt(){}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const Wo={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Vo=G.INFO,jo={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},zo=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jo[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Go{constructor(e){this.name=e,this._logLevel=Vo,this._logHandler=zo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}function cn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}class Un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}function Jr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qo=Jr,Yr=new Lt("auth","Firebase",Jr());/**
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
 */const Bn=new Go("@firebase/auth");function pt(t,...e){Bn.logLevel<=G.ERROR&&Bn.error(`Auth (${Pt}): ${t}`,...e)}/**
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
 */function ue(t,...e){throw un(t,...e)}function de(t,...e){return un(t,...e)}function Xr(t,e,n){const r=Object.assign(Object.assign({},qo()),{[e]:n});return new Lt("auth","Firebase",r).create(e,{appName:t.name})}function Ko(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ue(t,"argument-error"),Xr(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function un(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yr.create(t,...e)}function T(t,e,...n){if(!t)throw un(e,...n)}function ge(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pt(e),new Error(e)}function _e(t,e){t||ge(e)}/**
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
 */const xn=new Map;function pe(t){_e(t instanceof Function,"Expected a class definition");let e=xn.get(t);return e?(_e(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xn.set(t,e),e)}/**
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
 */function Jo(t,e){const n=Hr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Kr(s,e??{}))return i;ue(i,"already-initialized")}return n.initialize({options:e})}function Yo(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(pe);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}/**
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
 */function nn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xo(){return Fn()==="http:"||Fn()==="https:"}function Fn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Qo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xo()||No()||"connection"in navigator)?navigator.onLine:!0}function Zo(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ot{constructor(e,n){this.shortDelay=e,this.longDelay=n,_e(n>e,"Short delay should be less than long delay!"),this.isMobile=Do()||Po()}get(){return Qo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dn(t,e){_e(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Qr{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ea={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const ta=new ot(3e4,6e4);function at(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lt(t,e,n,r,i={}){return Zr(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=st(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Qr.fetch()(ei(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Zr(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ea),e);try{const i=new na(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ft(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ft(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ft(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ft(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xr(t,d,c);ue(t,d)}}catch(i){if(i instanceof je)throw i;ue(t,"network-request-failed")}}async function ct(t,e,n,r,i={}){const s=await lt(t,e,n,r,i);return"mfaPendingCredential"in s&&ue(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ei(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?dn(t.config,i):`${t.config.apiScheme}://${i}`}class na{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(de(this.auth,"network-request-failed")),ta.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ft(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=de(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ra(t,e){return lt(t,"POST","/v1/accounts:delete",e)}async function ia(t,e){return lt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sa(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=hn(r);T(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Xe(zt(i.auth_time)),issuedAtTime:Xe(zt(i.iat)),expirationTime:Xe(zt(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function zt(t){return Number(t)*1e3}function hn(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pt("JWT malformed, contained fewer than 3 sections"),null;try{const i=zr(n);return i?JSON.parse(i):(pt("Failed to decode base64 JWT payload"),null)}catch(i){return pt("Caught error parsing JWT payload as JSON",i?.toString()),null}}function oa(t){const e=hn(t);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof je&&aa(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function aa({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class la{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ti{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xe(this.lastLoginAt),this.creationTime=Xe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function At(t){var e;const n=t.auth,r=await t.getIdToken(),i=await tt(t,ia(n,{idToken:r}));T(i?.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?da(s.providerUserInfo):[],l=ua(t.providerData,o),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!l?.length,d=a?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ti(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function ca(t){const e=xe(t);await At(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ua(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function da(t){return t.map(e=>{var{providerId:n}=e,r=cn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ha(t,e){const n=await Zr(t,{},async()=>{const r=st({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ei(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Qr.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ha(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new nt;return r&&(T(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(T(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(T(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nt,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
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
 */function Ie(t,e){T(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Me{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=cn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new la(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ti(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await tt(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sa(this,e)}reload(){return ca(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Me(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await At(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tt(this,ra(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(l=n.tenantId)!==null&&l!==void 0?l:void 0,y=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:R,emailVerified:S,isAnonymous:H,providerData:U,stsTokenManager:$}=n;T(R&&$,e,"internal-error");const b=nt.fromJSON(this.name,$);T(typeof R=="string",e,"internal-error"),Ie(h,e.name),Ie(p,e.name),T(typeof S=="boolean",e,"internal-error"),T(typeof H=="boolean",e,"internal-error"),Ie(m,e.name),Ie(v,e.name),Ie(E,e.name),Ie(y,e.name),Ie(k,e.name),Ie(C,e.name);const P=new Me({uid:R,auth:e,email:p,emailVerified:S,displayName:h,isAnonymous:H,photoURL:v,phoneNumber:m,tenantId:E,stsTokenManager:b,createdAt:k,lastLoginAt:C});return U&&Array.isArray(U)&&(P.providerData=U.map(j=>Object.assign({},j))),y&&(P._redirectEventId=y),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new nt;i.updateFromServerResponse(n);const s=new Me({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await At(s),s}}/**
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
 */class ni{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ni.type="NONE";const Hn=ni;/**
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
 */function mt(t,e,n){return`firebase:${t}:${e}:${n}`}class We{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=mt(this.userKey,i.apiKey,s),this.fullPersistenceKey=mt("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Me._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new We(pe(Hn),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||pe(Hn);const o=mt(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const h=Me._fromJSON(e,d);c!==s&&(l=h),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new We(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new We(s,e,r))}}/**
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
 */function Wn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(si(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ri(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ai(e))return"Blackberry";if(li(e))return"Webos";if(fn(e))return"Safari";if((e.includes("chrome/")||ii(e))&&!e.includes("edge/"))return"Chrome";if(oi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function ri(t=se()){return/firefox\//i.test(t)}function fn(t=se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ii(t=se()){return/crios\//i.test(t)}function si(t=se()){return/iemobile/i.test(t)}function oi(t=se()){return/android/i.test(t)}function ai(t=se()){return/blackberry/i.test(t)}function li(t=se()){return/webos/i.test(t)}function Mt(t=se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fa(t=se()){var e;return Mt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ga(){return Lo()&&document.documentMode===10}function ci(t=se()){return Mt(t)||oi(t)||li(t)||ai(t)||/windows phone/i.test(t)||si(t)}function pa(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ui(t,e=[]){let n;switch(t){case"Browser":n=Wn(se());break;case"Worker":n=`${Wn(se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pt}/${r}`}/**
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
 */class ma{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */class _a{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vn(this),this.idTokenSubscription=new Vn(this),this.beforeStateQueue=new ma(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await We.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i?._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&a?.user&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await At(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xe(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pe(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await We.create(this,[pe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ui(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ze(t){return xe(t)}class Vn{constructor(e){this.auth=e,this.observer=null,this.addObserver=xo(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function va(t,e,n){const r=ze(t);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,s=di(e),{host:o,port:l}=ba(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ya()}function di(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ba(t){const e=di(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jn(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jn(o)}}}function jn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ya(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ge("not implemented")}_getIdTokenResponse(e){return ge("not implemented")}_linkToIdToken(e,n){return ge("not implemented")}_getReauthenticationResolver(e){return ge("not implemented")}}async function wa(t,e){return lt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ia(t,e){return ct(t,"POST","/v1/accounts:signInWithPassword",at(t,e))}/**
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
 */async function Sa(t,e){return ct(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}async function Ea(t,e){return ct(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}/**
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
 */class rt extends gn{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new rt(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new rt(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ia(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sa(e,{email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wa(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ea(e,{idToken:n,email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const ka="http://localhost";class Ue extends gn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=cn(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ue(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ve(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ve(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ve(e,n)}buildRequest(){const e={requestUri:ka,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=st(n)}return e}}/**
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
 */function Ta(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Aa(t){const e=Je(Ye(t)).link,n=e?Je(Ye(e)).deep_link_id:null,r=Je(Ye(t)).deep_link_id;return(r?Je(Ye(r)).link:null)||r||n||e||t}class pn{constructor(e){var n,r,i,s,o,l;const a=Je(Ye(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,h=Ta((i=a.mode)!==null&&i!==void 0?i:null);T(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Aa(e);try{return new pn(n)}catch{return null}}}/**
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
 */class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(e,n){return rt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pn.parseLink(n);return T(r,"argument-error"),rt._fromEmailAndCode(e,r.code,r.tenantId)}}Ge.PROVIDER_ID="password";Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class mn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ut extends mn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Se extends ut{constructor(){super("facebook.com")}static credential(e){return Ue._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch{return null}}}Se.FACEBOOK_SIGN_IN_METHOD="facebook.com";Se.PROVIDER_ID="facebook.com";/**
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
 */class fe extends ut{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ue._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fe.credential(n,r)}catch{return null}}}fe.GOOGLE_SIGN_IN_METHOD="google.com";fe.PROVIDER_ID="google.com";/**
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
 */class Ee extends ut{constructor(){super("github.com")}static credential(e){return Ue._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.GITHUB_SIGN_IN_METHOD="github.com";Ee.PROVIDER_ID="github.com";/**
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
 */class ke extends ut{constructor(){super("twitter.com")}static credential(e,n){return Ue._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ke.credential(n,r)}catch{return null}}}ke.TWITTER_SIGN_IN_METHOD="twitter.com";ke.PROVIDER_ID="twitter.com";/**
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
 */async function Ca(t,e){return ct(t,"POST","/v1/accounts:signUp",at(t,e))}/**
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
 */class Be{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Me._fromIdTokenResponse(e,r,i),o=zn(r);return new Be({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=zn(r);return new Be({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function zn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ct extends je{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ct.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ct(e,n,r,i)}}function hi(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ct._fromErrorAndOperation(t,s,e,r):s})}async function Oa(t,e,n=!1){const r=await tt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Be._forOperation(t,"link",r)}/**
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
 */async function Ra(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await tt(t,hi(r,i,e,t),n);T(s.idToken,r,"internal-error");const o=hn(s.idToken);T(o,r,"internal-error");const{sub:l}=o;return T(t.uid===l,r,"user-mismatch"),Be._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&ue(r,"user-mismatch"),s}}/**
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
 */async function fi(t,e,n=!1){const r="signIn",i=await hi(t,r,e),s=await Be._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Da(t,e){return fi(ze(t),e)}async function Na(t,e,n){const r=ze(t),i=await Ca(r,{returnSecureToken:!0,email:e,password:n}),s=await Be._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Pa(t,e,n){return Da(xe(t),Ge.credential(e,n))}function La(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function Ma(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}const Ot="__sak";/**
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
 */class gi{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ot,"1"),this.storage.removeItem(Ot),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function $a(){const t=se();return fn(t)||Mt(t)}const Ua=1e3,Ba=10;class pi extends gi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$a()&&pa(),this.fallbackToPolling=ci(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ga()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ba):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ua)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pi.type="LOCAL";const xa=pi;/**
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
 */class mi extends gi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mi.type="SESSION";const _i=mi;/**
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
 */function Fa(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $t(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await Fa(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$t.receivers=[];/**
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
 */function _n(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ha{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=_n("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function he(){return window}function Wa(t){he().location.href=t}/**
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
 */function vi(){return typeof he().WorkerGlobalScope<"u"&&typeof he().importScripts=="function"}async function Va(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ja(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function za(){return vi()?self:null}/**
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
 */const bi="firebaseLocalStorageDb",Ga=1,Rt="firebaseLocalStorage",yi="fbase_key";class dt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ut(t,e){return t.transaction([Rt],e?"readwrite":"readonly").objectStore(Rt)}function qa(){const t=indexedDB.deleteDatabase(bi);return new dt(t).toPromise()}function rn(){const t=indexedDB.open(bi,Ga);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rt,{keyPath:yi})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rt)?e(r):(r.close(),await qa(),e(await rn()))})})}async function Gn(t,e,n){const r=Ut(t,!0).put({[yi]:e,value:n});return new dt(r).toPromise()}async function Ka(t,e){const n=Ut(t,!1).get(e),r=await new dt(n).toPromise();return r===void 0?null:r.value}function qn(t,e){const n=Ut(t,!0).delete(e);return new dt(n).toPromise()}const Ja=800,Ya=3;class wi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ya)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$t._getInstance(za()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Va(),!this.activeServiceWorker)return;this.sender=new Ha(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ja()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rn();return await Gn(e,Ot,"1"),await qn(e,Ot),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gn(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ka(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ut(i,!1).getAll();return new dt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ja)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wi.type="LOCAL";const Xa=wi;/**
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
 */function Qa(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Za(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=de("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Qa().appendChild(r)})}function el(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ot(3e4,6e4);/**
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
 */function Ii(t,e){return e?pe(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vn extends gn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ve(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ve(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tl(t){return fi(t.auth,new vn(t),t.bypassAuthState)}function nl(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Ra(n,new vn(t),t.bypassAuthState)}async function rl(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Oa(n,new vn(t),t.bypassAuthState)}/**
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
 */class Si{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tl;case"linkViaPopup":case"linkViaRedirect":return rl;case"reauthViaPopup":case"reauthViaRedirect":return nl;default:ue(this.auth,"internal-error")}}resolve(e){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const il=new ot(2e3,1e4);async function sl(t,e,n){const r=ze(t);Ko(t,e,mn);const i=Ii(r,n);return new Pe(r,"signInViaPopup",e,i).executeNotNull()}class Pe extends Si{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pe.currentPopupAction&&Pe.currentPopupAction.cancel(),Pe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){_e(this.filter.length===1,"Popup operations only handle one event");const e=_n();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(de(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(de(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(de(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,il.get())};e()}}Pe.currentPopupAction=null;/**
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
 */const ol="pendingRedirect",_t=new Map;class al extends Si{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_t.get(this.auth._key());if(!e){try{const r=await ll(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_t.set(this.auth._key(),e)}return this.bypassAuthState||_t.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ll(t,e){const n=dl(e),r=ul(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function cl(t,e){_t.set(t._key(),e)}function ul(t){return pe(t._redirectPersistence)}function dl(t){return mt(ol,t.config.apiKey,t.name)}async function hl(t,e,n=!1){const r=ze(t),i=Ii(r,e),o=await new al(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const fl=10*60*1e3;class gl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pl(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ei(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(de(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kn(e))}saveEventToCache(e){this.cachedEventUids.add(Kn(e)),this.lastProcessedEventTime=Date.now()}}function Kn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ei({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function pl(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ei(t);default:return!1}}/**
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
 */async function ml(t,e={}){return lt(t,"GET","/v1/projects",e)}/**
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
 */const _l=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vl=/^https?/;async function bl(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ml(t);for(const n of e)try{if(yl(n))return}catch{}ue(t,"unauthorized-domain")}function yl(t){const e=nn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vl.test(n))return!1;if(_l.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const wl=new ot(3e4,6e4);function Jn(){const t=he().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Il(t){return new Promise((e,n)=>{var r,i,s;function o(){Jn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jn(),n(de(t,"network-request-failed"))},timeout:wl.get()})}if(!((i=(r=he().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=he().gapi)===null||s===void 0)&&s.load)o();else{const l=el("iframefcb");return he()[l]=()=>{gapi.load?o():n(de(t,"network-request-failed"))},Za(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw vt=null,e})}let vt=null;function Sl(t){return vt=vt||Il(t),vt}/**
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
 */const El=new ot(5e3,15e3),kl="__/auth/iframe",Tl="emulator/auth/iframe",Al={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ol(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dn(e,Tl):`https://${t.config.authDomain}/${kl}`,r={apiKey:e.apiKey,appName:t.name,v:Pt},i=Cl.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${st(r).slice(1)}`}async function Rl(t){const e=await Sl(t),n=he().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:Ol(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Al,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=de(t,"network-request-failed"),l=he().setTimeout(()=>{s(o)},El.get());function a(){he().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Dl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nl=500,Pl=600,Ll="_blank",Ml="http://localhost";class Yn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $l(t,e,n,r=Nl,i=Pl){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Dl),{width:r.toString(),height:i.toString(),top:s,left:o}),c=se().toLowerCase();n&&(l=ii(c)?Ll:n),ri(c)&&(e=e||Ml,a.scrollbars="yes");const d=Object.entries(a).reduce((p,[m,v])=>`${p}${m}=${v},`,"");if(fa(c)&&l!=="_self")return Ul(e||"",l),new Yn(null);const h=window.open(e||"",l,d);T(h,t,"popup-blocked");try{h.focus()}catch{}return new Yn(h)}function Ul(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Bl="__/auth/handler",xl="emulator/auth/handler";function Xn(t,e,n,r,i,s){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pt,eventId:i};if(e instanceof mn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,c]of Object.entries(s||{}))o[a]=c}if(e instanceof ut){const a=e.getScopes().filter(c=>c!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${Fl(t)}?${st(l).slice(1)}`}function Fl({config:t}){return t.emulator?dn(t,xl):`https://${t.authDomain}/${Bl}`}/**
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
 */const Gt="webStorageSupport";class Hl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_i,this._completeRedirectFn=hl,this._overrideRedirectResult=cl}async _openPopup(e,n,r,i){var s;_e((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Xn(e,n,r,nn(),i);return $l(e,o,_n())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Wa(Xn(e,n,r,nn(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_e(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Rl(e),r=new gl(e);return n.register("authEvent",i=>(T(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gt,{type:Gt},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[Gt];o!==void 0&&n(!!o),ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ci()||fn()||Mt()}}const Wl=Hl;var Qn="@firebase/auth",Zn="0.21.1";/**
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
 */class Vl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zl(t){Ze(new Un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{T(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),T(!o?.includes(":"),"argument-error",{appName:l.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ui(t)},d=new _a(l,a,c);return Yo(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ze(new Un("auth-internal",e=>{const n=ze(e.getProvider("auth").getImmediate());return(r=>new Vl(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Qn,Zn,jl(t)),He(Qn,Zn,"esm2017")}/**
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
 */const Gl=5*60,ql=qr("authIdTokenMaxAge")||Gl;let er=null;const Kl=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ql)return;const i=n?.token;er!==i&&(er=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Jl(t=uo()){const e=Hr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Jo(t,{popupRedirectResolver:Wl,persistence:[Xa,xa,_i]}),r=qr("authTokenSyncURL");if(r){const s=Kl(r);Ma(n,s,()=>s(n.currentUser)),La(n,o=>s(o))}const i=Ro("auth");return i&&va(n,`http://${i}`),n}zl("Browser");const Yl=()=>{},Xl="https://api.cubingapp.com:3000",Ql={apiKey:"AIzaSyCnwuoBqAR6cx7uqzxf7iEC99sZf36sZZA",authDomain:"virtual-cube.firebaseapp.com",projectId:"virtual-cube",storageBucket:"virtual-cube.appspot.com",messagingSenderId:"371073332227",appId:"1:371073332227:web:c96d3137080aecfe634a36",measurementId:"G-YR33BDCQDY"},Zl=Wr(Ql),Bt=()=>Jl(Zl);async function qe(t,e){return await fetch(`${Xl}${t}`,{method:"POST",body:JSON.stringify(e)}).then(r=>r.json())}async function ec(t){return qe("/user",{email:t})}const tr="algSet",nr="casesToday",rr="orientation",ir="showScramble",bn="user",ki={get:()=>sc(tr)??-1,set:t=>oc(tr,t)},Dt={get:()=>{const t=localStorage.getItem(nr);return t?JSON.parse(t):{count:0,msSinceEpoch:Date.now()}},set:t=>{localStorage.setItem(nr,JSON.stringify(t))}};let sn={get:()=>localStorage.getItem(rr)??"",set:t=>{localStorage.setItem(rr,t)}};const Ti={get:()=>rc(ir)??!1,set:t=>ic(ir,t)};function tc(){return localStorage.getItem(bn)}function Ai(){localStorage.removeItem(bn)}function nc(t){localStorage.setItem(bn,t)}function rc(t){const e=localStorage.getItem(t);return e===null?null:e=="1"}function ic(t,e){localStorage.setItem(t,e?"1":"0")}function sc(t){const e=localStorage.getItem(t);return e===null?null:parseInt(e)}function oc(t,e){localStorage.setItem(t,e.toString())}class Ci{email;uid;constructor(){}toJsonString(){return JSON.stringify({email:this.email,uid:this.uid})}fromJsonString(e){const n=JSON.parse(e);this.email=n.email,this.uid=n.uid}}function Oi(t){Yl("Signed in as "+t.email+" with uid "+t.uid)}function ac(){const t=tc();if(!t)return null;const e=new Ci;return e.fromJsonString(t),!e.email||!e.uid?(Ai(),null):(Oi(e),e)}function yn(t,e){const n=new Ci;n.email=t.user.email,ec(n.email).then(r=>{n.uid=r.uid,nc(n.toJsonString()),Oi(n),e(n)})}function lc(t){const e=Bt(),n=new fe;sl(e,n).then(r=>{yn(r,t)}).catch(r=>{console.log(r)})}function cc(t,e,n){const r=Bt();Na(r,t,e).then(i=>{yn(i,n)}).catch(i=>{console.log(i.message)})}function uc(t,e,n){const r=Bt();Pa(r,t,e).then(i=>{yn(i,n)}).catch(i=>{console.log(i.message)})}function dc(){Bt().signOut(),Ai()}function hc(t){let e,n,r;return{c(){e=f("button"),e.textContent="Create Account",M(e,"class","btn-primary")},m(i,s){x(i,e,s),n||(r=V(e,"click",t[3]),n=!0)},p:W,i:W,o:W,d(i){i&&F(e),n=!1,r()}}}function fc(t,e,n){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{cc(r,i,s)};return t.$$set=l=>{"email"in l&&n(0,r=l.email),"password"in l&&n(1,i=l.password),"callback"in l&&n(2,s=l.callback)},[r,i,s,o]}class gc extends ve{constructor(e){super(),be(this,e,fc,hc,ye,{email:0,password:1,callback:2})}}function pc(t){let e,n,r;return{c(){e=f("button"),e.textContent="Sign In",M(e,"class","btn-primary")},m(i,s){x(i,e,s),n||(r=V(e,"click",t[3]),n=!0)},p:W,i:W,o:W,d(i){i&&F(e),n=!1,r()}}}function mc(t,e,n){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{uc(r,i,s)};return t.$$set=l=>{"email"in l&&n(0,r=l.email),"password"in l&&n(1,i=l.password),"callback"in l&&n(2,s=l.callback)},[r,i,s,o]}class _c extends ve{constructor(e){super(),be(this,e,mc,pc,ye,{email:0,password:1,callback:2})}}function vc(t){let e,n,r;return{c(){e=f("button"),e.innerHTML=`<div class="row"><svg style="width: 20px; height: 20px; margin-right: 0.6rem;" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path><path fill="none" d="M2 2h44v44H2z"></path></svg> 
        <p style="font-size: 1rem; color: black;">Sign in with Google</p></div>`,M(e,"class","btn-white")},m(i,s){x(i,e,s),n||(r=V(e,"click",t[1]),n=!0)},p:W,i:W,o:W,d(i){i&&F(e),n=!1,r()}}}function bc(t,e,n){let{callback:r}=e;const i=()=>lc(r);return t.$$set=s=>{"callback"in s&&n(0,r=s.callback)},[r,i]}class yc extends ve{constructor(e){super(),be(this,e,bc,vc,ye,{callback:0})}}function wc(t){let e,n,r,i;return{c(){e=f("input"),M(e,"class",n=t[1].class),M(e,"type","email"),M(e,"placeholder","Email")},m(s,o){x(s,e,o),Oe(e,t[0]),r||(i=V(e,"input",t[2]),r=!0)},p(s,[o]){o&2&&n!==(n=s[1].class)&&M(e,"class",n),o&1&&e.value!==s[0]&&Oe(e,s[0])},i:W,o:W,d(s){s&&F(e),r=!1,i()}}}function Ic(t,e,n){let{value:r}=e;function i(){r=this.value,n(0,r)}return t.$$set=s=>{n(1,e=yt(yt({},e),wt(s))),"value"in s&&n(0,r=s.value)},e=wt(e),[r,e,i]}class Sc extends ve{constructor(e){super(),be(this,e,Ic,wc,ye,{value:0})}}function Ec(t){let e,n,r,i;return{c(){e=f("input"),M(e,"class",n=t[1].class),M(e,"type","password"),M(e,"placeholder","Password")},m(s,o){x(s,e,o),Oe(e,t[0]),r||(i=V(e,"input",t[2]),r=!0)},p(s,[o]){o&2&&n!==(n=s[1].class)&&M(e,"class",n),o&1&&e.value!==s[0]&&Oe(e,s[0])},i:W,o:W,d(s){s&&F(e),r=!1,i()}}}function kc(t,e,n){let{value:r}=e;function i(){r=this.value,n(0,r)}return t.$$set=s=>{n(1,e=yt(yt({},e),wt(s))),"value"in s&&n(0,r=s.value)},e=wt(e),[r,e,i]}class Tc extends ve{constructor(e){super(),be(this,e,kc,Ec,ye,{value:0})}}function Ac(t){let e,n,r,i,s,o,l,a,c;o=new Te({props:{name:"x",class:"x-icon",style:"padding: 4px;"}}),o.$on("click",t[4]);const d=t[3].default,h=Rr(d,t,t[2],null);return{c(){e=f("div"),n=f("div"),r=f("p"),i=ne(t[0]),s=_(),Y(o.$$.fragment),l=_(),a=f("div"),h&&h.c(),M(n,"class","drawer-header svelte-5httr9"),g(a,"overflow-y","auto"),g(a,"height","calc(100vh - 96px)"),M(e,"class","drawer svelte-5httr9")},m(p,m){x(p,e,m),u(e,n),u(n,r),u(r,i),u(n,s),X(o,n,null),u(e,l),u(e,a),h&&h.m(a,null),c=!0},p(p,[m]){(!c||m&1)&&me(i,p[0]),h&&h.p&&(!c||m&4)&&Dr(h,d,p,p[2],c?Pr(d,p[2],m,null):Nr(p[2]),null)},i(p){c||(A(o.$$.fragment,p),A(h,p),c=!0)},o(p){O(o.$$.fragment,p),O(h,p),c=!1},d(p){p&&F(e),Q(o),h&&h.d(p)}}}function Cc(t,e,n){let{$$slots:r={},$$scope:i}=e,{title:s}=e,{close:o}=e;const l=()=>o();return t.$$set=a=>{"title"in a&&n(0,s=a.title),"close"in a&&n(1,o=a.close),"$$scope"in a&&n(2,i=a.$$scope)},[s,o,i,r,l]}class wn extends ve{constructor(e){super(),be(this,e,Cc,Ac,ye,{title:0,close:1})}}async function Oc(t,e,n,r,i,s,o,l){return qe("/createAlgSet",{uid:t,set:e,trainingAlgs:n,cube:r,inactiveStickers:i,moves:s,disregard:o,onlyOrientation:l})}async function Rc(t,e){return qe("/createPrebuiltAlgSet",{uid:t,set:e})}async function Dc(t){return qe("/deleteAlgSet",{id:t})}async function Nc(t){return qe("/getAlgSets",{uid:t})}async function xt(t,e,n){return qe("/updateAlgSet",{id:t,set:e,trainingAlgs:n})}function Pc(t){return t[In(t.length)]}function In(t){return Math.floor(Math.random()*t)}function Sn(t){return t<=0?2:Sn(t-1)+t+2}function Lc(t){t[0].Score++;let e=Sn(t[0].Score);const n=Math.ceil(t.length*3/4);e>n&&(e=n+In(t.length-n)),Ri(t,e)}function Mc(t){t[0].Score=0,Ri(t,Sn(0))}function Ri(t,e){const n=t[0];for(let r=0;r<e;r++)t[r]=t[r+1];t[e]=n}var $c=globalThis&&globalThis.__awaiter||function(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(d){try{c(r.next(d))}catch(h){o(h)}}function a(d){try{c(r.throw(d))}catch(h){o(h)}}function c(d){d.done?s(d.value):i(d.value).then(l,a)}c((r=r.apply(t,e||[])).next())})},Uc=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(c){return function(d){return a([c,d])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(n=0)),n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};function Bc(t){var e,n,r;if(t.alg===null||t.alg===void 0)throw new Error("alg must be defined");if(t.moves===null||t.moves===void 0)throw new Error("moves must be defined");return{alg:t.alg,moves:t.moves,onlyOrientation:(e=t.onlyOrientation)!==null&&e!==void 0?e:[],disregard:(n=t.disregard)!==null&&n!==void 0?n:[],maxSolutions:(r=t.maxSolutions)!==null&&r!==void 0?r:10}}function xc(t){return $c(this,void 0,void 0,function(){var e;return Uc(this,function(n){return e=Bc(t),[2,new Promise(function(r){var i=new Worker(new URL("/assets/worker-27701fc1.js",self.location));i.onmessage=function(s){var o=s.data,l=o.split(",");r(l),i.terminate()},i.onerror=function(s){console.log("Caught error"),console.error(s),i.terminate()},i.postMessage(e)})]})})}const En=-1;let oe={showSolution:!1,scene:null,preAUF:"",postAUF:"",orientation:sn.get()},ce;function Fc(t){return ce=t,w}function Hc(t){w=t}let w={user:null,algSet:null,algSetEditing:null,algSets:[],solutionButtonText:"show solution",modalOpen:!1,modalType:null,selectedAlg:null,selectedAlgIndex:0,showScramble:Ti.get(),scramble:""};async function Wc(){if(w.user=ac(),w.user,w.algSets=await Nc(w.user.uid),!w.algSets){ce(w);return}const t=ki.get(),e=w.algSets.find(n=>n.id===t);w.algSet=e||w.algSets[0],ce(w)}function qt(t){w.user=t,ce(w)}function Vc(){w.user=null,ce(w),dc()}function jc(){oe.showSolution=!oe.showSolution,w.solutionButtonText=oe.showSolution?Di(kn()):"show solution",ce(w)}function zc(t){it("edit alg");const e=w.algSet.trainingAlgs[t];w.selectedAlg=JSON.parse(JSON.stringify(e)),w.selectedAlgIndex=t,ce(w)}function Gc(){w.selectedAlg={Alg:"",Score:0},w.selectedAlgIndex=En,it("edit alg"),ce(w)}function qc(t){const e=t.target;w.selectedAlg.Alg=e.value}function Kc(){if(w.selectedAlgIndex===En){it(null),ce(w);return}w.algSet.trainingAlgs.splice(w.selectedAlgIndex,1),it(null),ce(w);const{id:t,name:e,trainingAlgs:n}=w.algSet;xt(t,e,n)}function Jc(){if(w.selectedAlgIndex===En)w.algSet.trainingAlgs.unshift(w.selectedAlg);else{const r=w.selectedAlg,i=w.selectedAlgIndex;w.algSet.trainingAlgs[i]=r}it(null),ce(w);const{id:t,name:e,trainingAlgs:n}=w.algSet;xt(t,e,n),Le()}function it(t){if(!t){w.modalOpen=!1,w.modalType=null;return}w.modalOpen=!0,w.modalType=t}function Di(t){return Ni(t,oe.preAUF,oe.postAUF)}function Yc(t){const e=ar(oe.preAUF),n=ar(oe.postAUF);return Ni(t,n,e)}function Ni(t,e,n){e&&(t=`${e} ${t}`),n&&(t=`${t} ${n}`);let r=t.split(" ");const i=sr(r[0],r[1]),s=sr(r[r.length-2],r[r.length-1]);return r=r.slice(2,-2),r=i.concat(r).concat(s),r.join(" ")}function sr(t,e){if(t[0]!=="U"||e[0]!=="U")return[t,e];const n=(or(t)+or(e))%4;return n===0?[]:[Xc(n)]}function or(t){return t.endsWith("'")?3:t.endsWith("2")?2:1}function Xc(t){return["","U","U2","U'"][t]}function ar(t){return t===""?"":t.endsWith("'")?t.slice(0,-1):t.endsWith("2")?t:`${t}'`}function lr(){return["","U","U2","U'"][In(4)]}function Qc(t){oe.scene=t}function cr(){const t=w.algSet.trainingAlgs,e=t.map(i=>i.Score),n=Math.max(...e),r=new Array(n+1).fill(0);return e.forEach(i=>r[i]++),r.map((i,s)=>({reps:s,algs:i,ratio:Math.round(i/t.length*100)}))}function kn(){return w.algSet?.trainingAlgs?w.algSet.trainingAlgs[0].Alg:""}async function ur(){const t=oe.scene;if(!t){console.error("Scene not set. Have you called setScene()?");return}w.algSet.cube=="2x2"?(t.cube.setNumOfLayers(2),t.cube.solve()):w.algSet.cube=="3x3"&&(t.cube.setNumOfLayers(3),t.cube.solve())}function Le(){let t=kn();if(!t)return;oe.showSolution=!1,w.solutionButtonText="show solution",ce(w),bt(),oe.preAUF=lr(),oe.postAUF=lr();const e=oe.scene;e.cube.solve(),e.cube.performAlg(oe.orientation),w.algSet.inactive.forEach(r=>{Vi(e.cube.stickers[r],ji)});let n=Di(t);return e.cube.performAlgReverse(n),t}async function dr(t,e){if(t?Lc(w.algSet.trainingAlgs):Mc(w.algSet.trainingAlgs),w.algSet.id===-1){const n=w.user.uid,{trainingAlgs:r,cube:i,inactive:s,moves:o,disregard:l,onlyOrientation:a}=w.algSet,c=await Oc(n,e,r,i,s,o,l,a);w.algSet.id=c.id}else{const{id:n,name:r,trainingAlgs:i}=w.algSet;xt(n,r,i)}return tu(),Le()}async function bt(){if(!w.showScramble)return;w.scramble="loading...",ce(w);let t=kn();const e=await xc({alg:t,moves:w.algSet.moves,disregard:w.algSet.disregard,onlyOrientation:w.algSet.onlyOrientation}),n=Pc(e);w.scramble=Yc(n),ce(w)}function Zc(t){Ti.set(t)}function eu(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}function Kt(){const t=Dt.get(),e=new Date(t.msSinceEpoch),n=new Date;return eu(e,n)||(t.count=0,t.msSinceEpoch=n.getTime(),Dt.set(t)),t.count}function tu(){const t=Dt.get();t.count++,Dt.set(t)}const hr=[{label:"white green",value:""},{label:"white orange",value:"y'"},{label:"white blue",value:"y2"},{label:"white red",value:"y"},{label:"yellow green",value:"z2"},{label:"yellow orange",value:"z2 y"},{label:"yellow blue",value:"z2 y2"},{label:"yellow red",value:"z2 y'"},{label:"green yellow",value:"x"},{label:"green orange",value:"x y'"},{label:"green white",value:"x y2"},{label:"green red",value:"x y"},{label:"blue white",value:"x'"},{label:"blue orange",value:"x' y'"},{label:"blue yellow",value:"x' y2"},{label:"blue red",value:"x' y"},{label:"orange green",value:"z"},{label:"orange yellow",value:"z y'"},{label:"orange blue",value:"z y2"},{label:"orange white",value:"z y"},{label:"red green",value:"z'"},{label:"red white",value:"z' y'"},{label:"red blue",value:"z' y2"},{label:"red yellow",value:"z' y"}];let fr={get:sn.get,set:t=>{oe.orientation=t,sn.set(t),Le()}};function nu(t){const e=t-1;return e*e*e+1}function gr(t,{delay:e=0,duration:n=400,easing:r=zi}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:s=>`opacity: ${s*i}`}}function pr(t,{delay:e=0,duration:n=400,easing:r=nu,x:i=0,y:s=0,opacity:o=0}={}){const l=getComputedStyle(t),a=+l.opacity,c=l.transform==="none"?"":l.transform,d=a*(1-o);return{delay:e,duration:n,easing:r,css:(h,p)=>`
			transform: ${c} translate(${(1-h)*i}px, ${(1-h)*s}px);
			opacity: ${a-d*p}`}}function mr(t){let e,n,r,i,s,o,l,a,c,d,h,p,m,v;l=new Te({props:{name:"x",class:"x-icon",style:"padding: 4px;"}}),l.$on("click",t[4]);const E=t[3].default,y=Rr(E,t,t[2],null);return{c(){e=f("div"),n=f("div"),r=f("div"),i=f("p"),s=ne(t[1]),o=_(),Y(l.$$.fragment),a=_(),y&&y.c(),M(r,"class","modal-header svelte-1ng7mvr"),M(n,"class","modal svelte-1ng7mvr"),g(e,"position","fixed"),g(e,"top","0"),g(e,"left","0"),g(e,"width","100%"),g(e,"height","100%"),g(e,"z-index","10"),g(e,"background","rgba(0, 0, 0, 0.5)")},m(k,C){x(k,e,C),u(e,n),u(n,r),u(r,i),u(i,s),u(r,o),X(l,r,null),u(n,a),y&&y.m(n,null),p=!0,m||(v=[V(n,"click",iu),V(n,"keypress",su),V(e,"click",t[5]),V(e,"keypress",ou)],m=!0)},p(k,C){(!p||C&2)&&me(s,k[1]),y&&y.p&&(!p||C&4)&&Dr(y,E,k,k[2],p?Pr(E,k[2],C,null):Nr(k[2]),null)},i(k){p||(A(l.$$.fragment,k),A(y,k),Jt(()=>{d&&d.end(1),c=Gi(n,pr,{y:50,duration:250}),c.start()}),Jt(()=>{h||(h=Tn(e,gr,{duration:250},!0)),h.run(1)}),p=!0)},o(k){O(l.$$.fragment,k),O(y,k),c&&c.invalidate(),d=qi(n,pr,{y:50,duration:250}),h||(h=Tn(e,gr,{duration:250},!1)),h.run(0),p=!1},d(k){k&&F(e),Q(l),y&&y.d(k),k&&d&&d.end(),k&&h&&h.end(),m=!1,Nt(v)}}}function ru(t){let e,n,r=t[0]&&mr(t);return{c(){r&&r.c(),e=on()},m(i,s){r&&r.m(i,s),x(i,e,s),n=!0},p(i,[s]){i[0]?r?(r.p(i,s),s&1&&A(r,1)):(r=mr(i),r.c(),A(r,1),r.m(e.parentNode,e)):r&&(Re(),O(r,1,1,()=>{r=null}),De())},i(i){n||(A(r),n=!0)},o(i){O(r),n=!1},d(i){r&&r.d(i),i&&F(e)}}}const iu=t=>t.stopPropagation(),su=t=>{},ou=t=>{};function au(t,e,n){let{$$slots:r={},$$scope:i}=e,{title:s}=e,{open:o=!1}=e;const l=()=>n(0,o=!1),a=()=>n(0,o=!1);return t.$$set=c=>{"title"in c&&n(1,s=c.title),"open"in c&&n(0,o=c.open),"$$scope"in c&&n(2,i=c.$$scope)},[o,s,i,r,l,a]}class lu extends ve{constructor(e){super(),be(this,e,au,ru,ye,{title:1,open:0})}}function Fe(t){return t?{modalOpen:!0,modalType:t}:{modalOpen:!1,modalType:null}}const _r=["OLL","PLL","F2L","CMLL","ZBLL","2x2 CLL","2x2 EG1","2x2 EG2"];class cu{callback;constructor(e){this.callback=e}displayChooseAlgSet(){const e=Fe("choose alg set");this.callback(e)}chooseAlgSet(e,n){ki.set(e);const i={algSet:n.find(s=>s.id===e),...Fe(null)};this.callback(i)}async createPrebuiltAlgSet(e,n,r){const i=await Rc(e,n),o={algSets:r?[i,...r]:[i],algSet:i,...Fe(null)};this.callback(o)}createCustomSet(){const n={...Fe("edit alg set"),algSetEditing:{name:""}};this.callback(n)}editAlgSet(e,n){const r=Fe("edit alg set"),i=n.find(o=>o.id===e),s={...r,algSetEditing:i};this.callback(s)}deleteAlgSet(e,n,r){Dc(e);const s={algSets:n.filter(o=>o.id!==e)};this.callback(s)}saveAlgSet(e,n,r,i){const s=Fe(null);xt(e,n,r);const o=i.find(a=>a.id===e),l={...s,algSet:o,algSets:i};this.callback(l)}}function uu(t){let e;return{c(){e=f("div"),e.innerHTML=`<h2 style="text-align: center; margin-bottom: 16px;">FAQ</h2> 
    <h3 style="margin-bottom: 8px;">Why use this trainer?</h3> 
    <p style="margin-bottom: 24px;">We use a memorization technique called <i>spaced repetition</i>. This
        means that you&#39;ll see an algorithm less often if you get it right, and
        more often if you get it wrong. The algorithms are automatically spaced
        out so you can memorize in the most efficient way possible.</p> 
    <h3 style="margin-bottom: 8px;">How does I use it?</h3> 
    <p style="margin-bottom: 24px;">There are a couple ways to use this trainer. We provide a scramble so
        you can set up a case on your own cube, or you can use the virtual cube.
        To turn the virtual cube, you can use the keyboard or drag the cube.</p> 
    <h3 style="margin-bottom: 8px;">What alg sets do you have?</h3> 
    <p style="margin-bottom: 24px;">You can make your own! We also have common sets pre-made such as OLL,
        PLL, CLL, and more.</p>`,g(e,"max-width","600px")},m(n,r){x(n,e,r)},p:W,i:W,o:W,d(n){n&&F(e)}}}class du extends ve{constructor(e){super(),be(this,e,null,uu,ye,{})}}function vr(t,e,n){const r=t.slice();return r[51]=e[n],r}function br(t,e,n){const r=t.slice();return r[54]=e[n],r}function yr(t,e,n){const r=t.slice();return r[60]=e[n],r[62]=n,r}function wr(t,e,n){const r=t.slice();return r[63]=e[n],r}function Ir(t,e,n){const r=t.slice();return r[57]=e[n],r}function Sr(t){let e,n,r,i,s,o,l;return n=new gt({props:{name:"chart"}}),n.$on("click",t[14]),i=new gt({props:{name:"profile"}}),i.$on("click",t[15]),o=new gt({props:{name:"settings"}}),o.$on("click",t[16]),{c(){e=f("div"),Y(n.$$.fragment),r=_(),Y(i.$$.fragment),s=_(),Y(o.$$.fragment),M(e,"id","iconContainer"),M(e,"class","row")},m(a,c){x(a,e,c),X(n,e,null),u(e,r),X(i,e,null),u(e,s),X(o,e,null),l=!0},p:W,i(a){l||(A(n.$$.fragment,a),A(i.$$.fragment,a),A(o.$$.fragment,a),l=!0)},o(a){O(n.$$.fragment,a),O(i.$$.fragment,a),O(o.$$.fragment,a),l=!1},d(a){a&&F(e),Q(n),Q(i),Q(o)}}}function hu(t){let e,n,r,i,s,o,l,a,c,d,h,p,m,v,E,y,k,C=t[8].solutionButtonText+"",R,S,H,U,$,b,P,j,ae,ee,re,z,q,K,ie,Z,I;i=new Xi({props:{onSceneInitialized:t[23]}}),c=new Te({props:{name:"retry",id:"retry-icon",style:`
            width: 48px;
            height: 48px;
            padding: 2px;
            box-shadow: 0 0 4px var(--gray-400);`}}),c.$on("click",t[24]),h=new Te({props:{name:"sad",id:"sad-icon",style:`
            width: 48px;
            height: 48px;
            padding: 2px;
            box-shadow: 0 0 4px var(--gray-400);`}}),h.$on("click",t[25]),m=new Te({props:{name:"happy",id:"happy-icon",style:`
            width: 48px;
            height: 48px;
            padding: 2px;
            box-shadow: 0 0 4px var(--gray-400);`}}),m.$on("click",t[26]);let B=t[8].showScramble&&Er(t);const D=[mu,pu,gu],te=[];function we(N,le){return N[3]===0?0:N[3]===1?1:N[3]===2?2:-1}return~(z=we(t))&&(q=te[z]=D[z](t)),{c(){e=f("div"),n=f("div"),r=_(),Y(i.$$.fragment),s=_(),o=f("div"),l=_(),a=f("div"),Y(c.$$.fragment),d=_(),Y(h.$$.fragment),p=_(),Y(m.$$.fragment),v=_(),E=f("div"),y=_(),k=f("button"),R=ne(C),S=_(),B&&B.c(),H=_(),U=f("div"),$=_(),b=f("p"),P=ne("cases today: "),j=ne(t[6]),ae=_(),ee=f("div"),re=_(),q&&q.c(),K=on(),g(n,"height","16px"),g(o,"height","16px"),M(a,"class","row"),g(a,"gap","16px"),g(E,"height","16px"),M(k,"class","btn-primary"),g(U,"flex-grow","1"),g(ee,"height","16px"),M(e,"class","col"),g(e,"width","100%"),g(e,"height","100%")},m(N,le){x(N,e,le),u(e,n),u(e,r),X(i,e,null),u(e,s),u(e,o),u(e,l),u(e,a),X(c,a,null),u(a,d),X(h,a,null),u(a,p),X(m,a,null),u(e,v),u(e,E),u(e,y),u(e,k),u(k,R),u(e,S),B&&B.m(e,null),u(e,H),u(e,U),u(e,$),u(e,b),u(b,P),u(b,j),u(e,ae),u(e,ee),x(N,re,le),~z&&te[z].m(N,le),x(N,K,le),ie=!0,Z||(I=V(k,"click",t[27]),Z=!0)},p(N,le){const ht={};le[0]&256&&(ht.onSceneInitialized=N[23]),i.$set(ht),(!ie||le[0]&256)&&C!==(C=N[8].solutionButtonText+"")&&me(R,C),N[8].showScramble?B?B.p(N,le):(B=Er(N),B.c(),B.m(e,H)):B&&(B.d(1),B=null),(!ie||le[0]&64)&&me(j,N[6]);let Ke=z;z=we(N),z===Ke?~z&&te[z].p(N,le):(q&&(Re(),O(te[Ke],1,1,()=>{te[Ke]=null}),De()),~z?(q=te[z],q?q.p(N,le):(q=te[z]=D[z](N),q.c()),A(q,1),q.m(K.parentNode,K)):q=null)},i(N){ie||(A(i.$$.fragment,N),A(c.$$.fragment,N),A(h.$$.fragment,N),A(m.$$.fragment,N),A(q),ie=!0)},o(N){O(i.$$.fragment,N),O(c.$$.fragment,N),O(h.$$.fragment,N),O(m.$$.fragment,N),O(q),ie=!1},d(N){N&&F(e),Q(i),Q(c),Q(h),Q(m),B&&B.d(),N&&F(re),~z&&te[z].d(N),N&&F(K),Z=!1,I()}}}function fu(t){let e,n,r,i,s,o,l,a,c,d,h,p,m,v,E,y,k,C,R,S;const H=[wu,yu],U=[];function $(b,P){return b[8].user?0:1}return d=$(t),h=U[d]=H[d](t),R=new du({}),{c(){e=f("div"),n=f("h1"),n.textContent="Learn OLL, PLL, CLL and more",r=_(),i=f("div"),s=_(),o=f("p"),o.textContent="Memorize algs in half the time",l=_(),a=f("div"),c=_(),h.c(),p=_(),m=f("div"),v=_(),E=f("div"),y=_(),k=f("div"),C=_(),Y(R.$$.fragment),g(i,"height","16px"),M(o,"class","text-gradient"),g(o,"font-weight","bold"),g(o,"font-size","1.2rem"),g(o,"background-image","linear-gradient(90deg, var(--blue-400), var(--purple-400))"),g(a,"height","16px"),g(m,"height","16px"),g(E,"width","100%"),g(E,"height","1px"),g(E,"background-color","var(--gray-600)"),g(k,"height","16px"),M(e,"class","col w-full h-full"),g(e,"padding","16px")},m(b,P){x(b,e,P),u(e,n),u(e,r),u(e,i),u(e,s),u(e,o),u(e,l),u(e,a),u(e,c),U[d].m(e,null),u(e,p),u(e,m),u(e,v),u(e,E),u(e,y),u(e,k),u(e,C),X(R,e,null),S=!0},p(b,P){let j=d;d=$(b),d===j?U[d].p(b,P):(Re(),O(U[j],1,1,()=>{U[j]=null}),De(),h=U[d],h?h.p(b,P):(h=U[d]=H[d](b),h.c()),A(h,1),h.m(e,p))},i(b){S||(A(h),A(R.$$.fragment,b),S=!0)},o(b){O(h),O(R.$$.fragment,b),S=!1},d(b){b&&F(e),U[d].d(),Q(R)}}}function Er(t){let e,n,r,i,s=(t[8].scramble||"loading...")+"",o;return{c(){e=f("div"),n=_(),r=f("p"),i=ne("scramble: "),o=ne(s),g(e,"height","16px")},m(l,a){x(l,e,a),x(l,n,a),x(l,r,a),u(r,i),u(r,o)},p(l,a){a[0]&256&&s!==(s=(l[8].scramble||"loading...")+"")&&me(o,s)},d(l){l&&F(e),l&&F(n),l&&F(r)}}}function gu(t){let e,n;return e=new wn({props:{title:"Settings",close:t[37],$$slots:{default:[_u]},$$scope:{ctx:t}}}),{c(){Y(e.$$.fragment)},m(r,i){X(e,r,i),n=!0},p(r,i){const s={};i[0]&288|i[2]&16&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){O(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function pu(t){let e,n;return e=new wn({props:{title:"Profile",close:t[30],$$slots:{default:[vu]},$$scope:{ctx:t}}}),{c(){Y(e.$$.fragment)},m(r,i){X(e,r,i),n=!0},p(r,i){const s={};i[0]&260|i[2]&16&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){O(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function mu(t){let e,n;return e=new wn({props:{title:"Stats",close:t[28],$$slots:{default:[bu]},$$scope:{ctx:t}}}),{c(){Y(e.$$.fragment)},m(r,i){X(e,r,i),n=!0},p(r,i){const s={};i[2]&16&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){O(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function kr(t){let e,n=t[63].label+"",r;return{c(){e=f("option"),r=ne(n),e.__value=t[63].value,e.value=e.__value},m(i,s){x(i,e,s),u(e,r)},p:W,d(i){i&&F(e)}}}function Tr(t){let e,n,r=t[60].Alg+"",i,s,o,l;function a(){return t[36](t[62])}return{c(){e=f("button"),n=f("p"),i=ne(r),s=_(),M(e,"class","alg-list-item svelte-3n3qiq"),g(e,"border-top","solid 1px var(--gray-500)"),g(e,"border-radius","0"),g(e,"width","100%"),g(e,"padding","4px"),g(e,"text-align","left")},m(c,d){x(c,e,d),u(e,n),u(n,i),u(e,s),o||(l=V(e,"click",a),o=!0)},p(c,d){t=c,d[0]&256&&r!==(r=t[60].Alg+"")&&me(i,r)},d(c){c&&F(e),o=!1,l()}}}function _u(t){let e,n,r,i=(t[8].algSet?.name??"none")+"",s,o,l,a,c,d,h,p,m,v,E,y,k,C,R,S,H,U,$,b,P,j,ae,ee,re,z,q=hr,K=[];for(let I=0;I<q.length;I+=1)K[I]=kr(wr(t,q,I));j=new Te({props:{name:"plus",id:"plus-icon",style:`
                width: 24px; 
                height: 24px; 
                padding: 4px; 
                margin-left: 4px;`}}),j.$on("click",t[35]);let ie=t[8].algSet?.trainingAlgs??[],Z=[];for(let I=0;I<ie.length;I+=1)Z[I]=Tr(yr(t,ie,I));return{c(){e=f("div"),n=f("p"),r=ne("algorithm set: "),s=ne(i),o=_(),l=f("button"),l.textContent="choose alg set",a=_(),c=f("div"),d=_(),h=f("p"),h.textContent="orientation",p=_(),m=f("select");for(let I=0;I<K.length;I+=1)K[I].c();v=_(),E=f("div"),y=_(),k=f("p"),k.textContent="show scramble",C=_(),R=f("input"),S=_(),H=f("div"),U=_(),$=f("div"),b=f("p"),b.textContent="algorithms",P=_(),Y(j.$$.fragment),ae=_();for(let I=0;I<Z.length;I+=1)Z[I].c();g(c,"height","16px"),t[5]===void 0&&Jt(()=>t[32].call(m)),g(E,"height","16px"),M(R,"type","checkbox"),g(H,"height","16px"),M($,"class","row"),g(e,"padding","16px")},m(I,B){x(I,e,B),u(e,n),u(n,r),u(n,s),u(e,o),u(e,l),u(e,a),u(e,c),u(e,d),u(e,h),u(e,p),u(e,m);for(let D=0;D<K.length;D+=1)K[D].m(m,null);An(m,t[5]),u(e,v),u(e,E),u(e,y),u(e,k),u(e,C),u(e,R),R.checked=t[8].showScramble,u(e,S),u(e,H),u(e,U),u(e,$),u($,b),u($,P),X(j,$,null),u(e,ae);for(let D=0;D<Z.length;D+=1)Z[D].m(e,null);ee=!0,re||(z=[V(l,"click",t[31]),V(m,"change",t[32]),V(m,"change",t[11]),V(R,"change",t[33]),V(R,"change",t[34])],re=!0)},p(I,B){if((!ee||B[0]&256)&&i!==(i=(I[8].algSet?.name??"none")+"")&&me(s,i),B&0){q=hr;let D;for(D=0;D<q.length;D+=1){const te=wr(I,q,D);K[D]?K[D].p(te,B):(K[D]=kr(te),K[D].c(),K[D].m(m,null))}for(;D<K.length;D+=1)K[D].d(1);K.length=q.length}if(B[0]&32&&An(m,I[5]),B[0]&256&&(R.checked=I[8].showScramble),B[0]&256){ie=I[8].algSet?.trainingAlgs??[];let D;for(D=0;D<ie.length;D+=1){const te=yr(I,ie,D);Z[D]?Z[D].p(te,B):(Z[D]=Tr(te),Z[D].c(),Z[D].m(e,null))}for(;D<Z.length;D+=1)Z[D].d(1);Z.length=ie.length}},i(I){ee||(A(j.$$.fragment,I),ee=!0)},o(I){O(j.$$.fragment,I),ee=!1},d(I){I&&F(e),Qe(K,I),Q(j),Qe(Z,I),re=!1,Nt(z)}}}function vu(t){let e,n,r,i=t[8].user.email+"",s,o,l,a,c;return{c(){e=f("div"),n=f("p"),r=ne("signed in as "),s=ne(i),o=_(),l=f("button"),l.textContent="Sign Out",M(l,"class","btn-primary"),g(e,"padding","12px")},m(d,h){x(d,e,h),u(e,n),u(n,r),u(n,s),u(e,o),u(e,l),a||(c=V(l,"click",t[29]),a=!0)},p(d,h){h[0]&256&&i!==(i=d[8].user.email+"")&&me(s,i)},d(d){d&&F(e),a=!1,c()}}}function Ar(t){let e,n,r=t[57].reps+"",i,s,o,l=t[57].algs+"",a,c,d,h=t[57].ratio+"",p,m,v;return{c(){e=f("tr"),n=f("td"),i=ne(r),s=_(),o=f("td"),a=ne(l),c=_(),d=f("td"),p=ne(h),m=ne("%"),v=_()},m(E,y){x(E,e,y),u(e,n),u(n,i),u(e,s),u(e,o),u(o,a),u(e,c),u(e,d),u(d,p),u(d,m),u(e,v)},p:W,d(E){E&&F(e)}}}function bu(t){let e,n,r,i,s=cr(),o=[];for(let l=0;l<s.length;l+=1)o[l]=Ar(Ir(t,s,l));return{c(){e=f("table"),n=f("thead"),n.innerHTML=`<tr><th>repetitions</th> 
                <th>algs</th> 
                <th>%</th></tr>`,r=_(),i=f("tbody");for(let l=0;l<o.length;l+=1)o[l].c();g(e,"margin","16px auto")},m(l,a){x(l,e,a),u(e,n),u(e,r),u(e,i);for(let c=0;c<o.length;c+=1)o[c].m(i,null)},p(l,a){if(a&0){s=cr();let c;for(c=0;c<s.length;c+=1){const d=Ir(l,s,c);o[c]?o[c].p(d,a):(o[c]=Ar(d),o[c].c(),o[c].m(i,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=s.length}},d(l){l&&F(e),Qe(o,l)}}}function yu(t){let e,n,r,i,s,o,l,a,c,d,h,p,m,v,E,y,k,C,R,S,H,U,$,b,P,j,ae,ee,re,z;n=new yc({props:{callback:t[18]}});function q(I){t[19](I)}let K={class:"mt-4"};t[0]!==void 0&&(K.value=t[0]),v=new Sc({props:K}),It.push(()=>St(v,"value",q));function ie(I){t[20](I)}let Z={class:"mt-4"};return t[1]!==void 0&&(Z.value=t[1]),R=new Tc({props:Z}),It.push(()=>St(R,"value",ie)),P=new gc({props:{email:t[0],password:t[1],callback:t[21]}}),re=new _c({props:{email:t[0],password:t[1],callback:t[22]}}),{c(){e=f("div"),Y(n.$$.fragment),r=_(),i=f("div"),s=_(),o=f("div"),l=_(),a=f("div"),c=_(),d=f("p"),d.textContent="Or use email and password",h=_(),p=f("div"),m=_(),Y(v.$$.fragment),y=_(),k=f("div"),C=_(),Y(R.$$.fragment),H=_(),U=f("div"),$=_(),b=f("div"),Y(P.$$.fragment),j=_(),ae=f("div"),ee=_(),Y(re.$$.fragment),g(i,"height","16px"),g(o,"width","100%"),g(o,"height","2px"),g(o,"background-color","var(--gray-600)"),g(a,"height","16px"),g(p,"height","12px"),g(k,"height","16px"),g(U,"height","32px"),g(ae,"width","16px"),M(b,"class","row"),M(e,"class","col"),g(e,"border-radius","16px"),g(e,"padding","16px"),g(e,"box-shadow","0 0 4px lightgray")},m(I,B){x(I,e,B),X(n,e,null),u(e,r),u(e,i),u(e,s),u(e,o),u(e,l),u(e,a),u(e,c),u(e,d),u(e,h),u(e,p),u(e,m),X(v,e,null),u(e,y),u(e,k),u(e,C),X(R,e,null),u(e,H),u(e,U),u(e,$),u(e,b),X(P,b,null),u(b,j),u(b,ae),u(b,ee),X(re,b,null),z=!0},p(I,B){const D={};!E&&B[0]&1&&(E=!0,D.value=I[0],Et(()=>E=!1)),v.$set(D);const te={};!S&&B[0]&2&&(S=!0,te.value=I[1],Et(()=>S=!1)),R.$set(te);const we={};B[0]&1&&(we.email=I[0]),B[0]&2&&(we.password=I[1]),P.$set(we);const N={};B[0]&1&&(N.email=I[0]),B[0]&2&&(N.password=I[1]),re.$set(N)},i(I){z||(A(n.$$.fragment,I),A(v.$$.fragment,I),A(R.$$.fragment,I),A(P.$$.fragment,I),A(re.$$.fragment,I),z=!0)},o(I){O(n.$$.fragment,I),O(v.$$.fragment,I),O(R.$$.fragment,I),O(P.$$.fragment,I),O(re.$$.fragment,I),z=!1},d(I){I&&F(e),Q(n),Q(v),Q(R),Q(P),Q(re)}}}function wu(t){let e,n,r;return{c(){e=f("button"),e.textContent="Start Training"},m(i,s){x(i,e,s),n||(r=V(e,"click",t[17]),n=!0)},p:W,i:W,o:W,d(i){i&&F(e),n=!1,r()}}}function Iu(t){let e,n,r,i,s,o,l,a,c;return{c(){e=f("div"),n=f("input"),r=_(),i=f("div"),s=f("button"),s.textContent="Delete",o=_(),l=f("button"),l.textContent="Save",M(n,"type","text"),g(n,"width","300px"),M(s,"class","btn-gray"),M(i,"class","row"),g(i,"gap","16px"),M(e,"class","col"),g(e,"padding","16px"),g(e,"gap","16px")},m(d,h){x(d,e,h),u(e,n),Oe(n,t[8].selectedAlg.Alg),u(e,r),u(e,i),u(i,s),u(i,o),u(i,l),a||(c=[V(n,"input",t[46]),V(n,"change",qc),V(s,"click",t[47]),V(l,"click",t[48])],a=!0)},p(d,h){h[0]&256&&n.value!==d[8].selectedAlg.Alg&&Oe(n,d[8].selectedAlg.Alg)},i:W,o:W,d(d){d&&F(e),a=!1,Nt(c)}}}function Su(t){let e,n,r,i,s,o;return{c(){e=f("div"),n=f("input"),r=_(),i=f("button"),i.textContent="save",M(n,"type","text"),M(e,"class","col"),g(e,"padding","16px"),g(e,"gap","16px")},m(l,a){x(l,e,a),u(e,n),Oe(n,t[8].algSetEditing.name),u(e,r),u(e,i),s||(o=[V(n,"input",t[44]),V(i,"click",t[45])],s=!0)},p(l,a){a[0]&256&&n.value!==l[8].algSetEditing.name&&Oe(n,l[8].algSetEditing.name)},i:W,o:W,d(l){l&&F(e),s=!1,Nt(o)}}}function Eu(t){let e,n,r,i,s,o,l,a,c,d,h,p,m,v,E=_r,y=[];for(let S=0;S<E.length;S+=1)y[S]=Cr(br(t,E,S));const k=[Tu,ku],C=[];function R(S,H){return!S[8].algSets||S[8].algSets.length===0?0:1}return a=R(t),c=C[a]=k[a](t),{c(){e=f("div"),n=f("p"),n.textContent="pre-built sets",r=_(),i=f("div");for(let S=0;S<y.length;S+=1)y[S].c();s=_(),o=f("p"),o.textContent="your sets",l=_(),c.c(),d=_(),h=f("button"),h.textContent="new custom set",g(n,"font-weight","bold"),g(i,"display","flex"),g(i,"flex-wrap","wrap"),g(i,"justify-content","center"),g(i,"gap","16px"),g(o,"font-weight","bold"),M(e,"class","col"),g(e,"padding","16px"),g(e,"gap","16px")},m(S,H){x(S,e,H),u(e,n),u(e,r),u(e,i);for(let U=0;U<y.length;U+=1)y[U].m(i,null);u(e,s),u(e,o),u(e,l),C[a].m(e,null),u(e,d),u(e,h),p=!0,m||(v=V(h,"click",t[43]),m=!0)},p(S,H){if(H[0]&4352){E=_r;let $;for($=0;$<E.length;$+=1){const b=br(S,E,$);y[$]?y[$].p(b,H):(y[$]=Cr(b),y[$].c(),y[$].m(i,null))}for(;$<y.length;$+=1)y[$].d(1);y.length=E.length}let U=a;a=R(S),a===U?C[a].p(S,H):(Re(),O(C[U],1,1,()=>{C[U]=null}),De(),c=C[a],c?c.p(S,H):(c=C[a]=k[a](S),c.c()),A(c,1),c.m(e,d))},i(S){p||(A(c),p=!0)},o(S){O(c),p=!1},d(S){S&&F(e),Qe(y,S),C[a].d(),m=!1,v()}}}function Cr(t){let e,n=t[54]+"",r,i,s,o;function l(){return t[39](t[54])}return{c(){e=f("button"),r=ne(n),i=_()},m(a,c){x(a,e,c),u(e,r),u(e,i),s||(o=V(e,"click",l),s=!0)},p(a,c){t=a},d(a){a&&F(e),s=!1,o()}}}function ku(t){let e,n,r=t[8].algSets,i=[];for(let o=0;o<r.length;o+=1)i[o]=Or(vr(t,r,o));const s=o=>O(i[o],1,1,()=>{i[o]=null});return{c(){e=f("div");for(let o=0;o<i.length;o+=1)i[o].c();g(e,"width","100%"),g(e,"max-width","300px")},m(o,l){x(o,e,l);for(let a=0;a<i.length;a+=1)i[a].m(e,null);n=!0},p(o,l){if(l[0]&4352){r=o[8].algSets;let a;for(a=0;a<r.length;a+=1){const c=vr(o,r,a);i[a]?(i[a].p(c,l),A(i[a],1)):(i[a]=Or(c),i[a].c(),A(i[a],1),i[a].m(e,null))}for(Re(),a=r.length;a<i.length;a+=1)s(a);De()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)A(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)O(i[l]);n=!1},d(o){o&&F(e),Qe(i,o)}}}function Tu(t){let e;return{c(){e=f("p"),e.textContent="you don't have any sets yet",g(e,"font-style","italic")},m(n,r){x(n,e,r)},p:W,i:W,o:W,d(n){n&&F(e)}}}function Or(t){let e,n,r=t[51].name+"",i,s,o,l,a,c,d,h,p,m,v,E,y;function k(){return t[40](t[51])}a=new Te({props:{name:"edit",style:"width: 30px; height: 30px; padding: 4px;"}}),a.$on("click",k);function C(){return t[41](t[51])}p=new Te({props:{name:"x",style:"width: 30px; height: 30px; padding: 4px;"}}),p.$on("click",C);function R(){return t[42](t[51])}return{c(){e=f("button"),n=f("p"),i=ne(r),s=_(),o=f("div"),l=_(),Y(a.$$.fragment),c=_(),d=f("div"),h=_(),Y(p.$$.fragment),m=_(),g(n,"font-size","1.2rem"),g(o,"flex-grow","1"),g(d,"width","16px"),M(e,"class","row alg-list-item svelte-3n3qiq"),g(e,"width","100%"),g(e,"border-top","solid 1px var(--gray-500)"),g(e,"padding","4px")},m(S,H){x(S,e,H),u(e,n),u(n,i),u(e,s),u(e,o),u(e,l),X(a,e,null),u(e,c),u(e,d),u(e,h),X(p,e,null),u(e,m),v=!0,E||(y=V(e,"click",R),E=!0)},p(S,H){t=S,(!v||H[0]&256)&&r!==(r=t[51].name+"")&&me(i,r)},i(S){v||(A(a.$$.fragment,S),A(p.$$.fragment,S),v=!0)},o(S){O(a.$$.fragment,S),O(p.$$.fragment,S),v=!1},d(S){S&&F(e),Q(a),Q(p),E=!1,y()}}}function Au(t){let e,n,r,i;const s=[Eu,Su,Iu],o=[];function l(a,c){return a[8].modalType==="choose alg set"?0:a[8].modalType==="edit alg set"?1:a[8].modalType==="edit alg"?2:-1}return~(e=l(t))&&(n=o[e]=s[e](t)),{c(){n&&n.c(),r=on()},m(a,c){~e&&o[e].m(a,c),x(a,r,c),i=!0},p(a,c){let d=e;e=l(a),e===d?~e&&o[e].p(a,c):(n&&(Re(),O(o[d],1,1,()=>{o[d]=null}),De()),~e?(n=o[e],n?n.p(a,c):(n=o[e]=s[e](a),n.c()),A(n,1),n.m(r.parentNode,r)):n=null)},i(a){i||(A(n),i=!0)},o(a){O(n),i=!1},d(a){~e&&o[e].d(a),a&&F(r)}}}function Cu(t){let e,n,r,i,s,o,l,a,c,d,h,p,m,v,E;r=new gt({props:{name:"menu"}}),r.$on("click",t[13]);let y=t[2]==="train"&&Sr(t);const k=[fu,hu],C=[];function R(b,P){return b[2]==="landing"?0:b[2]==="train"?1:-1}~(l=R(t))&&(a=C[l]=k[l](t));function S(b){t[38](b)}let H={};t[7]!==void 0&&(H.open=t[7]),d=new Ki({props:H}),It.push(()=>St(d,"open",S));function U(b){t[49](b)}let $={title:t[8].modalType,$$slots:{default:[Au]},$$scope:{ctx:t}};return t[8].modalOpen!==void 0&&($.open=t[8].modalOpen),m=new lu({props:$}),It.push(()=>St(m,"open",U)),{c(){e=f("main"),n=f("nav"),Y(r.$$.fragment),i=_(),y&&y.c(),s=_(),o=f("div"),a&&a.c(),c=_(),Y(d.$$.fragment),p=_(),Y(m.$$.fragment),M(n,"class","navbar"),g(n,"justify-content","space-between"),M(o,"class","row"),g(o,"justify-content","center"),g(o,"align-items","start"),g(o,"width","100%"),g(o,"height","100%"),g(o,"position","relative"),g(o,"overflow-y","auto"),M(e,"class","col"),g(e,"width","100%"),g(e,"height","100%")},m(b,P){x(b,e,P),u(e,n),X(r,n,null),u(n,i),y&&y.m(n,null),u(e,s),u(e,o),~l&&C[l].m(o,null),u(e,c),X(d,e,null),u(e,p),X(m,e,null),E=!0},p(b,P){b[2]==="train"?y?(y.p(b,P),P[0]&4&&A(y,1)):(y=Sr(b),y.c(),A(y,1),y.m(n,null)):y&&(Re(),O(y,1,1,()=>{y=null}),De());let j=l;l=R(b),l===j?~l&&C[l].p(b,P):(a&&(Re(),O(C[j],1,1,()=>{C[j]=null}),De()),~l?(a=C[l],a?a.p(b,P):(a=C[l]=k[l](b),a.c()),A(a,1),a.m(o,null)):a=null);const ae={};!h&&P[0]&128&&(h=!0,ae.open=b[7],Et(()=>h=!1)),d.$set(ae);const ee={};P[0]&256&&(ee.title=b[8].modalType),P[0]&256|P[2]&16&&(ee.$$scope={dirty:P,ctx:b}),!v&&P[0]&256&&(v=!0,ee.open=b[8].modalOpen,Et(()=>v=!1)),m.$set(ee)},i(b){E||(A(r.$$.fragment,b),A(y),A(a),A(d.$$.fragment,b),A(m.$$.fragment,b),E=!0)},o(b){O(r.$$.fragment,b),O(y),O(a),O(d.$$.fragment,b),O(m.$$.fragment,b),E=!1},d(b){b&&F(e),Q(r),y&&y.d(),~l&&C[l].d(),Q(d),Q(m)}}}function Ou(t,e,n){let r="",i="",s="landing",o=-1;function l(L){o===L?n(3,o=-1):n(3,o=L)}let a,c,d=fr.get();function h(L){const Wi=L.target.value;fr.set(Wi)}let p=Kt(),m=!1,v=Fc(L=>{n(8,v=L)});const E=new cu(L=>{n(8,v=Object.assign(v,L)),Hc(v)});Ji(()=>{Wc()});const y=()=>n(7,m=!0),k=()=>l(0),C=()=>l(1),R=()=>l(2),S=()=>n(2,s="train"),H=L=>qt(L);function U(L){r=L,n(0,r)}function $(L){i=L,n(1,i)}const b=L=>qt(L),P=L=>qt(L),j=L=>{Qc(L),v.algSet?Le():E.displayChooseAlgSet()},ae=()=>{n(4,c=Le())},ee=()=>{dr(!1,a).then(L=>{n(4,c=L),n(6,p=Kt()),bt()})},re=()=>{dr(!0,a).then(L=>{n(4,c=L),n(6,p=Kt()),bt()})},z=()=>jc(),q=()=>l(-1),K=()=>{n(2,s="landing"),Vc()},ie=()=>l(-1),Z=()=>E.displayChooseAlgSet();function I(){d=Yi(this),n(5,d)}function B(){v.showScramble=this.checked,n(8,v)}const D=()=>{Zc(v.showScramble),bt()},te=()=>Gc(),we=L=>zc(L),N=()=>l(-1);function le(L){m=L,n(7,m)}const ht=L=>{E.createPrebuiltAlgSet(v.user.uid,L,v.algSets).then(()=>{ur(),Le()})},Ke=L=>E.editAlgSet(L.id,v.algSets),Pi=L=>E.deleteAlgSet(L.id,v.algSets,v.algSet),Li=L=>{E.chooseAlgSet(L.id,v.algSets),ur(),Le()},Mi=()=>E.createCustomSet();function $i(){v.algSetEditing.name=this.value,n(8,v)}const Ui=()=>E.saveAlgSet(v.algSetEditing.id,v.algSetEditing.name,v.algSetEditing.trainingAlgs,v.algSets);function Bi(){v.selectedAlg.Alg=this.value,n(8,v)}const xi=()=>Kc(),Fi=()=>Jc();function Hi(L){t.$$.not_equal(v.modalOpen,L)&&(v.modalOpen=L,n(8,v))}return[r,i,s,o,c,d,p,m,v,l,a,h,E,y,k,C,R,S,H,U,$,b,P,j,ae,ee,re,z,q,K,ie,Z,I,B,D,te,we,N,le,ht,Ke,Pi,Li,Mi,$i,Ui,Bi,xi,Fi,Hi]}class Ru extends ve{constructor(e){super(),be(this,e,Ou,Cu,ye,{},null,[-1,-1,-1])}}new Ru({target:document.getElementById("app")});
