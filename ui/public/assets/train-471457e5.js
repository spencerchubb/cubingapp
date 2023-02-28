(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function M(){}function ge(n,e){for(const t in e)n[t]=e[t];return n}function $r(n){return n()}function $n(){return Object.create(null)}function Je(n){n.forEach($r)}function kn(n){return typeof n=="function"}function se(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Zi(n){return Object.keys(n).length===0}function Hr(n,e,t,r){if(n){const i=Vr(n,e,t,r);return n[0](i)}}function Vr(n,e,t,r){return n[1]&&r?ge(t.ctx.slice(),n[1](r(e))):t.ctx}function Wr(n,e,t,r){if(n[2]&&r){const i=n[2](r(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function jr(n,e,t,r,i,s){if(i){const o=Vr(e,t,r,s);n.p(o,i)}}function zr(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function Oe(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function Hn(n){return n??""}function y(n,e){n.appendChild(e)}function $(n,e,t){n.insertBefore(e,t||null)}function B(n){n.parentNode&&n.parentNode.removeChild(n)}function es(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function w(n){return document.createElement(n)}function ce(n){return document.createTextNode(n)}function D(){return ce(" ")}function ts(){return ce("")}function ee(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function I(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ns(n){return Array.from(n.childNodes)}function Ht(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Ot(n,e){n.value=e??""}function O(n,e,t,r){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}function Vn(n,e){for(let t=0;t<n.options.length;t+=1){const r=n.options[t];if(r.__value===e){r.selected=!0;return}}n.selectedIndex=-1}function rs(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}let ot;function it(n){ot=n}function is(){if(!ot)throw new Error("Function called outside component initialization");return ot}function ss(n){is().$$.on_mount.push(n)}function Gr(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const je=[],qe=[],It=[],dn=[],os=Promise.resolve();let fn=!1;function as(){fn||(fn=!0,os.then(Kr))}function Dt(n){It.push(n)}function Wn(n){dn.push(n)}const Jt=new Set;let He=0;function Kr(){if(He!==0)return;const n=ot;do{try{for(;He<je.length;){const e=je[He];He++,it(e),cs(e.$$)}}catch(e){throw je.length=0,He=0,e}for(it(null),je.length=0,He=0;qe.length;)qe.pop()();for(let e=0;e<It.length;e+=1){const t=It[e];Jt.has(t)||(Jt.add(t),t())}It.length=0}while(je.length);for(;dn.length;)dn.pop()();fn=!1,Jt.clear(),it(n)}function cs(n){if(n.fragment!==null){n.update(),Je(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Dt)}}const Et=new Set;let Pe;function Pt(){Pe={r:0,c:[],p:Pe}}function Mt(){Pe.r||Je(Pe.c),Pe=Pe.p}function P(n,e){n&&n.i&&(Et.delete(n),n.i(e))}function N(n,e,t,r){if(n&&n.o){if(Et.has(n))return;Et.add(n),Pe.c.push(()=>{Et.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function jn(n,e,t){const r=n.$$.props[e];r!==void 0&&(n.$$.bound[r]=t,t(n.$$.ctx[r]))}function X(n){n&&n.c()}function q(n,e,t,r){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),r||Dt(()=>{const o=n.$$.on_mount.map($r).filter(kn);n.$$.on_destroy?n.$$.on_destroy.push(...o):Je(o),n.$$.on_mount=[]}),s.forEach(Dt)}function J(n,e){const t=n.$$;t.fragment!==null&&(Je(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function ls(n,e){n.$$.dirty[0]===-1&&(je.push(n),as(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function oe(n,e,t,r,i,s,o,a=[-1]){const c=ot;it(n);const l=n.$$={fragment:null,ctx:[],props:s,update:M,not_equal:i,bound:$n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:$n(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let h=!1;if(l.ctx=t?t(n,e.props||{},(u,d,...p)=>{const f=p.length?p[0]:d;return l.ctx&&i(l.ctx[u],l.ctx[u]=f)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](f),h&&ls(n,u)),d}):[],l.update(),h=!0,Je(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const u=ns(e.target);l.fragment&&l.fragment.l(u),u.forEach(B)}else l.fragment&&l.fragment.c();e.intro&&P(n.$$.fragment),q(n,e.target,e.anchor,e.customElement),Kr()}it(c)}class ae{$destroy(){J(this,1),this.$destroy=M}$on(e,t){if(!kn(t))return M;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Zi(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
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
 */const qr=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},us=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(t[h],t[u],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(qr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):us(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||u==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),u!==64){const f=l<<6&192|u;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},hs=function(n){const e=qr(n);return Jr.encodeByteArray(e,!0)},Yr=function(n){return hs(n).replace(/\./g,"")},ds=function(n){try{return Jr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ps=()=>fs().__FIREBASE_DEFAULTS__,gs=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ms=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ds(n[1]);return e&&JSON.parse(e)},_s=()=>{try{return ps()||gs()||ms()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ys=()=>{var n;return(n=_s())===null||n===void 0?void 0:n.config};/**
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
 */class vs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}function bs(){try{return typeof indexedDB=="object"}catch{return!1}}function ws(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Is="FirebaseError";let Sn=class Xr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Is,Object.setPrototypeOf(this,Xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qr.prototype.create)}},Qr=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Es(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,a,r)}};function Es(n,e){return n.replace(ks,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ks=/\{\$([^}]+)}/g;function pn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(zn(s)&&zn(o)){if(!pn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function zn(n){return n!==null&&typeof n=="object"}let Lt=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const De="[DEFAULT]";/**
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
 */class Ss{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new vs;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(As(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=De){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=De){return this.instances.has(e)}getOptions(e=De){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ts(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=De){return this.component?this.component.multipleInstances?e:De:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ts(n){return n===De?void 0:n}function As(n){return n.instantiationMode==="EAGER"}/**
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
 */class Rs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ss(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const Cs={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Os=F.INFO,Ds={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Ps=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Ds[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Ms=class{constructor(e){this.name=e,this._logLevel=Os,this._logHandler=Ps,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}};const Ls=(n,e)=>e.some(t=>n instanceof t);let Gn,Kn;function Ns(){return Gn||(Gn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xs(){return Kn||(Kn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zr=new WeakMap,gn=new WeakMap,ei=new WeakMap,Yt=new WeakMap,Tn=new WeakMap;function Us(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Re(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Zr.set(t,n)}).catch(()=>{}),Tn.set(e,n),e}function Bs(n){if(gn.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});gn.set(n,e)}let mn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return gn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ei.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Re(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fs(n){mn=n(mn)}function $s(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Xt(this),e,...t);return ei.set(r,e.sort?e.sort():[e]),Re(r)}:xs().includes(n)?function(...e){return n.apply(Xt(this),e),Re(Zr.get(this))}:function(...e){return Re(n.apply(Xt(this),e))}}function Hs(n){return typeof n=="function"?$s(n):(n instanceof IDBTransaction&&Bs(n),Ls(n,Ns())?new Proxy(n,mn):n)}function Re(n){if(n instanceof IDBRequest)return Us(n);if(Yt.has(n))return Yt.get(n);const e=Hs(n);return e!==n&&(Yt.set(n,e),Tn.set(e,n)),e}const Xt=n=>Tn.get(n);function Vs(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Re(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Re(o.result),c.oldVersion,c.newVersion,Re(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ws=["get","getKey","getAll","getAllKeys","count"],js=["put","add","delete","clear"],Qt=new Map;function qn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qt.get(e))return Qt.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=js.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ws.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Qt.set(e,s),s}Fs(n=>({...n,get:(e,t,r)=>qn(e,t)||n.get(e,t,r),has:(e,t)=>!!qn(e,t)||n.has(e,t)}));/**
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
 */class zs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gs(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Gs(n){const e=n.getComponent();return e?.type==="VERSION"}const _n="@firebase/app",Jn="0.9.1";/**
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
 */const Ue=new Ms("@firebase/app"),Ks="@firebase/app-compat",qs="@firebase/analytics-compat",Js="@firebase/analytics",Ys="@firebase/app-check-compat",Xs="@firebase/app-check",Qs="@firebase/auth",Zs="@firebase/auth-compat",eo="@firebase/database",to="@firebase/database-compat",no="@firebase/functions",ro="@firebase/functions-compat",io="@firebase/installations",so="@firebase/installations-compat",oo="@firebase/messaging",ao="@firebase/messaging-compat",co="@firebase/performance",lo="@firebase/performance-compat",uo="@firebase/remote-config",ho="@firebase/remote-config-compat",fo="@firebase/storage",po="@firebase/storage-compat",go="@firebase/firestore",mo="@firebase/firestore-compat",_o="firebase",yo="9.16.0";/**
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
 */const yn="[DEFAULT]",vo={[_n]:"fire-core",[Ks]:"fire-core-compat",[Js]:"fire-analytics",[qs]:"fire-analytics-compat",[Xs]:"fire-app-check",[Ys]:"fire-app-check-compat",[Qs]:"fire-auth",[Zs]:"fire-auth-compat",[eo]:"fire-rtdb",[to]:"fire-rtdb-compat",[no]:"fire-fn",[ro]:"fire-fn-compat",[io]:"fire-iid",[so]:"fire-iid-compat",[oo]:"fire-fcm",[ao]:"fire-fcm-compat",[co]:"fire-perf",[lo]:"fire-perf-compat",[uo]:"fire-rc",[ho]:"fire-rc-compat",[fo]:"fire-gcs",[po]:"fire-gcs-compat",[go]:"fire-fst",[mo]:"fire-fst-compat","fire-js":"fire-js",[_o]:"fire-js-all"};/**
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
 */const Nt=new Map,vn=new Map;function bo(n,e){try{n.container.addComponent(e)}catch(t){Ue.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function at(n){const e=n.name;if(vn.has(e))return Ue.debug(`There were multiple attempts to register component ${e}.`),!1;vn.set(e,n);for(const t of Nt.values())bo(t,n);return!0}function ti(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const wo={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ce=new Qr("app","Firebase",wo);/**
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
 */class Io{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
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
 */const Vt=yo;function ni(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ce.create("bad-app-name",{appName:String(i)});if(t||(t=ys()),!t)throw Ce.create("no-options");const s=Nt.get(i);if(s){if(pn(t,s.options)&&pn(r,s.config))return s;throw Ce.create("duplicate-app",{appName:i})}const o=new Rs(i);for(const c of vn.values())o.addComponent(c);const a=new Io(t,r,o);return Nt.set(i,a),a}function Eo(n=yn){const e=Nt.get(n);if(!e&&n===yn)return ni();if(!e)throw Ce.create("no-app",{appName:n});return e}function ze(n,e,t){var r;let i=(r=vo[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ue.warn(a.join(" "));return}at(new Lt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ko="firebase-heartbeat-database",So=1,ct="firebase-heartbeat-store";let Zt=null;function ri(){return Zt||(Zt=Vs(ko,So,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ct)}}}).catch(n=>{throw Ce.create("idb-open",{originalErrorMessage:n.message})})),Zt}async function To(n){try{return(await ri()).transaction(ct).objectStore(ct).get(ii(n))}catch(e){if(e instanceof Sn)Ue.warn(e.message);else{const t=Ce.create("idb-get",{originalErrorMessage:e?.message});Ue.warn(t.message)}}}async function Yn(n,e){try{const r=(await ri()).transaction(ct,"readwrite");return await r.objectStore(ct).put(e,ii(n)),r.done}catch(t){if(t instanceof Sn)Ue.warn(t.message);else{const r=Ce.create("idb-set",{originalErrorMessage:t?.message});Ue.warn(r.message)}}}function ii(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ao=1024,Ro=30*24*60*60*1e3;class Co{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Do(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ro}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xn(),{heartbeatsToSend:t,unsentEntries:r}=Oo(this._heartbeatsCache.heartbeats),i=Yr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xn(){return new Date().toISOString().substring(0,10)}function Oo(n,e=Ao){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qn(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Qn(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Do{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bs()?ws().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await To(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qn(n){return Yr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Po(n){at(new Lt("platform-logger",e=>new zs(e),"PRIVATE")),at(new Lt("heartbeat",e=>new Co(e),"PRIVATE")),ze(_n,Jn,n),ze(_n,Jn,"esm2017"),ze("fire-js","")}Po("");var Mo="firebase",Lo="9.16.0";/**
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
 */ze(Mo,Lo,"app");/**
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
 */const No=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xo=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Uo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(t[h],t[u],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(No(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||u==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),u!==64){const f=l<<6&192|u;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},si=function(n){try{return Uo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fo=()=>Bo().__FIREBASE_DEFAULTS__,$o=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ho=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&si(n[1]);return e&&JSON.parse(e)},oi=()=>{try{return Fo()||$o()||Ho()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vo=n=>{var e,t;return(t=(e=oi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ai=n=>{var e;return(e=oi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function jo(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Go(){const n=Z();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}/**
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
 */const Ko="FirebaseError";class Ye extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ko,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wt.prototype.create)}}class Wt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qo(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ye(i,a,r)}}function qo(n,e){return n.replace(Jo,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Jo=/\{\$([^}]+)}/g;function Yo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ci(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Zn(s)&&Zn(o)){if(!ci(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Zn(n){return n!==null&&typeof n=="object"}/**
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
 */function dt(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function nt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Xo(n,e){const t=new Qo(n,e);return t.subscribe.bind(t)}class Qo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zo(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=en),i.error===void 0&&(i.error=en),i.complete===void 0&&(i.complete=en);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zo(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function en(){}/**
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
 */function $e(n){return n&&n._delegate?n._delegate:n}/**
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
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const ea={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},ta=U.INFO,na={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},ra=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=na[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ia{constructor(e){this.name=e,this._logLevel=ta,this._logHandler=ra,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ea[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}function An(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}class er{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}function li(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sa=li,ui=new Wt("auth","Firebase",li());/**
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
 */const tr=new ia("@firebase/auth");function kt(n,...e){tr.logLevel<=U.ERROR&&tr.error(`Auth (${Vt}): ${n}`,...e)}/**
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
 */function re(n,...e){throw Rn(n,...e)}function le(n,...e){return Rn(n,...e)}function hi(n,e,t){const r=Object.assign(Object.assign({},sa()),{[e]:t});return new Wt("auth","Firebase",r).create(e,{appName:n.name})}function oa(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&re(n,"argument-error"),hi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ui.create(n,...e)}function E(n,e,...t){if(!n)throw Rn(e,...t)}function fe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw kt(e),new Error(e)}function me(n,e){n||fe(e)}/**
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
 */const nr=new Map;function pe(n){me(n instanceof Function,"Expected a class definition");let e=nr.get(n);return e?(me(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nr.set(n,e),e)}/**
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
 */function aa(n,e){const t=ti(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(ci(s,e??{}))return i;re(i,"already-initialized")}return t.initialize({options:e})}function ca(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(pe);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}/**
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
 */function bn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function la(){return rr()==="http:"||rr()==="https:"}function rr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ua(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(la()||jo()||"connection"in navigator)?navigator.onLine:!0}function ha(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ft{constructor(e,t){this.shortDelay=e,this.longDelay=t,me(t>e,"Short delay should be less than long delay!"),this.isMobile=Wo()||zo()}get(){return ua()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cn(n,e){me(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class di{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const da={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const fa=new ft(3e4,6e4);function pt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gt(n,e,t,r,i={}){return fi(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=dt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),di.fetch()(pi(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function fi(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},da),e);try{const i=new pa(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bt(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw bt(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw bt(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw bt(n,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw hi(n,h,l);re(n,h)}}catch(i){if(i instanceof Ye)throw i;re(n,"network-request-failed")}}async function mt(n,e,t,r,i={}){const s=await gt(n,e,t,r,i);return"mfaPendingCredential"in s&&re(n,"multi-factor-auth-required",{_serverResponse:s}),s}function pi(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Cn(n.config,i):`${n.config.apiScheme}://${i}`}class pa{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(le(this.auth,"network-request-failed")),fa.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bt(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=le(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function ga(n,e){return gt(n,"POST","/v1/accounts:delete",e)}async function ma(n,e){return gt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function st(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _a(n,e=!1){const t=$e(n),r=await t.getIdToken(e),i=On(r);E(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:st(tn(i.auth_time)),issuedAtTime:st(tn(i.iat)),expirationTime:st(tn(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function tn(n){return Number(n)*1e3}function On(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return kt("JWT malformed, contained fewer than 3 sections"),null;try{const i=si(t);return i?JSON.parse(i):(kt("Failed to decode base64 JWT payload"),null)}catch(i){return kt("Caught error parsing JWT payload as JSON",i?.toString()),null}}function ya(n){const e=On(n);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function lt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ye&&va(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function va({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ba{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=st(this.lastLoginAt),this.creationTime=st(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xt(n){var e;const t=n.auth,r=await n.getIdToken(),i=await lt(n,ma(t,{idToken:r}));E(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ea(s.providerUserInfo):[],a=Ia(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!a?.length,h=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gi(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function wa(n){const e=$e(n);await xt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ia(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ea(n){return n.map(e=>{var{providerId:t}=e,r=An(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ka(n,e){const t=await fi(n,{},async()=>{const r=dt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=pi(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",di.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ya(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await ka(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ut;return r&&(E(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(E(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(E(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ut,this.toJSON())}_performRefresh(){return fe("not implemented")}}/**
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
 */function _e(n,e){E(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Le{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=An(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ba(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await lt(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return _a(this,e)}reload(){return wa(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await xt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lt(this,ga(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,h;const u=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,f=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,_=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,m=(l=t.createdAt)!==null&&l!==void 0?l:void 0,S=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:R,isAnonymous:W,providerData:K,stsTokenManager:Y}=t;E(A&&Y,e,"internal-error");const G=ut.fromJSON(this.name,Y);E(typeof A=="string",e,"internal-error"),_e(u,e.name),_e(d,e.name),E(typeof R=="boolean",e,"internal-error"),E(typeof W=="boolean",e,"internal-error"),_e(p,e.name),_e(f,e.name),_e(g,e.name),_e(_,e.name),_e(m,e.name),_e(S,e.name);const v=new Le({uid:A,auth:e,email:d,emailVerified:R,displayName:u,isAnonymous:W,photoURL:f,phoneNumber:p,tenantId:g,stsTokenManager:G,createdAt:m,lastLoginAt:S});return K&&Array.isArray(K)&&(v.providerData=K.map(T=>Object.assign({},T))),_&&(v._redirectEventId=_),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new ut;i.updateFromServerResponse(t);const s=new Le({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xt(s),s}}/**
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
 */class mi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mi.type="NONE";const ir=mi;/**
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
 */function St(n,e,t){return`firebase:${n}:${e}:${t}`}class Ge{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=St(this.userKey,i.apiKey,s),this.fullPersistenceKey=St("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ge(pe(ir),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||pe(ir);const o=St(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const h=await l._get(o);if(h){const u=Le._fromJSON(e,h);l!==s&&(a=u),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ge(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ge(s,e,r))}}/**
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
 */function sr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_i(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wi(e))return"Blackberry";if(Ii(e))return"Webos";if(Dn(e))return"Safari";if((e.includes("chrome/")||yi(e))&&!e.includes("edge/"))return"Chrome";if(bi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function _i(n=Z()){return/firefox\//i.test(n)}function Dn(n=Z()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yi(n=Z()){return/crios\//i.test(n)}function vi(n=Z()){return/iemobile/i.test(n)}function bi(n=Z()){return/android/i.test(n)}function wi(n=Z()){return/blackberry/i.test(n)}function Ii(n=Z()){return/webos/i.test(n)}function jt(n=Z()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Sa(n=Z()){var e;return jt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ta(){return Go()&&document.documentMode===10}function Ei(n=Z()){return jt(n)||bi(n)||Ii(n)||wi(n)||/windows phone/i.test(n)||vi(n)}function Aa(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ki(n,e=[]){let t;switch(n){case"Browser":t=sr(Z());break;case"Worker":t=`${sr(Z())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vt}/${r}`}/**
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
 */class Ra{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */class Ca{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new or(this),this.idTokenSubscription=new or(this),this.beforeStateQueue=new Ra(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ui,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pe(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ge.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xt(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ha()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?$e(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pe(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await Ge.create(this,[pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return E(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ki(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function Xe(n){return $e(n)}class or{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xo(t=>this.observer=t)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Oa(n,e,t){const r=Xe(n);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!t?.disableWarnings,s=Si(e),{host:o,port:a}=Da(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Pa()}function Si(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Da(n){const e=Si(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ar(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ar(o)}}}function ar(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Pa(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Pn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return fe("not implemented")}_getIdTokenResponse(e){return fe("not implemented")}_linkToIdToken(e,t){return fe("not implemented")}_getReauthenticationResolver(e){return fe("not implemented")}}async function Ma(n,e){return gt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function La(n,e){return mt(n,"POST","/v1/accounts:signInWithPassword",pt(n,e))}/**
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
 */async function Na(n,e){return mt(n,"POST","/v1/accounts:signInWithEmailLink",pt(n,e))}async function xa(n,e){return mt(n,"POST","/v1/accounts:signInWithEmailLink",pt(n,e))}/**
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
 */class ht extends Pn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ht(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ht(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return La(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Na(e,{email:this._email,oobCode:this._password});default:re(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ma(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xa(e,{idToken:t,email:this._email,oobCode:this._password});default:re(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ke(n,e){return mt(n,"POST","/v1/accounts:signInWithIdp",pt(n,e))}/**
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
 */const Ua="http://localhost";class Be extends Pn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Be(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):re("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=An(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Be(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ke(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ke(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ke(e,t)}buildRequest(){const e={requestUri:Ua,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dt(t)}return e}}/**
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
 */function Ba(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fa(n){const e=tt(nt(n)).link,t=e?tt(nt(e)).deep_link_id:null,r=tt(nt(n)).deep_link_id;return(r?tt(nt(r)).link:null)||r||t||e||n}class Mn{constructor(e){var t,r,i,s,o,a;const c=tt(nt(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,u=Ba((i=c.mode)!==null&&i!==void 0?i:null);E(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Fa(e);try{return new Mn(t)}catch{return null}}}/**
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
 */class Qe{constructor(){this.providerId=Qe.PROVIDER_ID}static credential(e,t){return ht._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Mn.parseLink(t);return E(r,"argument-error"),ht._fromEmailAndCode(e,r.code,r.tenantId)}}Qe.PROVIDER_ID="password";Qe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ln{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _t extends Ln{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ye extends _t{constructor(){super("facebook.com")}static credential(e){return Be._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ye.credential(e.oauthAccessToken)}catch{return null}}}ye.FACEBOOK_SIGN_IN_METHOD="facebook.com";ye.PROVIDER_ID="facebook.com";/**
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
 */class de extends _t{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Be._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return de.credential(t,r)}catch{return null}}}de.GOOGLE_SIGN_IN_METHOD="google.com";de.PROVIDER_ID="google.com";/**
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
 */class ve extends _t{constructor(){super("github.com")}static credential(e){return Be._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ve.credential(e.oauthAccessToken)}catch{return null}}}ve.GITHUB_SIGN_IN_METHOD="github.com";ve.PROVIDER_ID="github.com";/**
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
 */class be extends _t{constructor(){super("twitter.com")}static credential(e,t){return Be._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return be.credential(t,r)}catch{return null}}}be.TWITTER_SIGN_IN_METHOD="twitter.com";be.PROVIDER_ID="twitter.com";/**
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
 */async function $a(n,e){return mt(n,"POST","/v1/accounts:signUp",pt(n,e))}/**
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
 */class Fe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Le._fromIdTokenResponse(e,r,i),o=cr(r);return new Fe({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=cr(r);return new Fe({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function cr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ut extends Ye{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ut.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ut(e,t,r,i)}}function Ti(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ut._fromErrorAndOperation(n,s,e,r):s})}async function Ha(n,e,t=!1){const r=await lt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fe._forOperation(n,"link",r)}/**
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
 */async function Va(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await lt(n,Ti(r,i,e,n),t);E(s.idToken,r,"internal-error");const o=On(s.idToken);E(o,r,"internal-error");const{sub:a}=o;return E(n.uid===a,r,"user-mismatch"),Fe._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&re(r,"user-mismatch"),s}}/**
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
 */async function Ai(n,e,t=!1){const r="signIn",i=await Ti(n,r,e),s=await Fe._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Wa(n,e){return Ai(Xe(n),e)}async function ja(n,e,t){const r=Xe(n),i=await $a(r,{returnSecureToken:!0,email:e,password:t}),s=await Fe._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function za(n,e,t){return Wa($e(n),Qe.credential(e,t))}function Ga(n,e,t,r){return $e(n).onIdTokenChanged(e,t,r)}function Ka(n,e,t){return $e(n).beforeAuthStateChanged(e,t)}const Bt="__sak";/**
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
 */class Ri{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bt,"1"),this.storage.removeItem(Bt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function qa(){const n=Z();return Dn(n)||jt(n)}const Ja=1e3,Ya=10;class Ci extends Ri{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qa()&&Aa(),this.fallbackToPolling=Ei(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ta()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ya):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ja)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ci.type="LOCAL";const Xa=Ci;/**
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
 */class Oi extends Ri{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Oi.type="SESSION";const Di=Oi;/**
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
 */function Qa(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class zt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new zt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await Qa(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zt.receivers=[];/**
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
 */function Nn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Za{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Nn("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const d=u;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ue(){return window}function ec(n){ue().location.href=n}/**
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
 */function Pi(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function tc(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nc(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function rc(){return Pi()?self:null}/**
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
 */const Mi="firebaseLocalStorageDb",ic=1,Ft="firebaseLocalStorage",Li="fbase_key";class yt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gt(n,e){return n.transaction([Ft],e?"readwrite":"readonly").objectStore(Ft)}function sc(){const n=indexedDB.deleteDatabase(Mi);return new yt(n).toPromise()}function wn(){const n=indexedDB.open(Mi,ic);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ft,{keyPath:Li})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ft)?e(r):(r.close(),await sc(),e(await wn()))})})}async function lr(n,e,t){const r=Gt(n,!0).put({[Li]:e,value:t});return new yt(r).toPromise()}async function oc(n,e){const t=Gt(n,!1).get(e),r=await new yt(t).toPromise();return r===void 0?null:r.value}function ur(n,e){const t=Gt(n,!0).delete(e);return new yt(t).toPromise()}const ac=800,cc=3;class Ni{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>cc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zt._getInstance(rc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tc(),!this.activeServiceWorker)return;this.sender=new Za(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wn();return await lr(e,Bt,"1"),await ur(e,Bt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>lr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>oc(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ur(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gt(i,!1).getAll();return new yt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ac)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ni.type="LOCAL";const lc=Ni;/**
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
 */function uc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function hc(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=le("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",uc().appendChild(r)})}function dc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new ft(3e4,6e4);/**
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
 */function xi(n,e){return e?pe(e):(E(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class xn extends Pn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ke(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ke(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ke(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fc(n){return Ai(n.auth,new xn(n),n.bypassAuthState)}function pc(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Va(t,new xn(n),n.bypassAuthState)}async function gc(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Ha(t,new xn(n),n.bypassAuthState)}/**
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
 */class Ui{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fc;case"linkViaPopup":case"linkViaRedirect":return gc;case"reauthViaPopup":case"reauthViaRedirect":return pc;default:re(this.auth,"internal-error")}}resolve(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mc=new ft(2e3,1e4);async function _c(n,e,t){const r=Xe(n);oa(n,e,Ln);const i=xi(r,t);return new Me(r,"signInViaPopup",e,i).executeNotNull()}class Me extends Ui{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Me.currentPopupAction&&Me.currentPopupAction.cancel(),Me.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){me(this.filter.length===1,"Popup operations only handle one event");const e=Nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Me.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(le(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,mc.get())};e()}}Me.currentPopupAction=null;/**
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
 */const yc="pendingRedirect",Tt=new Map;class vc extends Ui{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Tt.get(this.auth._key());if(!e){try{const r=await bc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Tt.set(this.auth._key(),e)}return this.bypassAuthState||Tt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bc(n,e){const t=Ec(e),r=Ic(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function wc(n,e){Tt.set(n._key(),e)}function Ic(n){return pe(n._redirectPersistence)}function Ec(n){return St(yc,n.config.apiKey,n.name)}async function kc(n,e,t=!1){const r=Xe(n),i=xi(r,e),o=await new vc(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Sc=10*60*1e3;class Tc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ac(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Bi(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(le(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sc&&this.cachedEventUids.clear(),this.cachedEventUids.has(hr(e))}saveEventToCache(e){this.cachedEventUids.add(hr(e)),this.lastProcessedEventTime=Date.now()}}function hr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bi({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Ac(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bi(n);default:return!1}}/**
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
 */async function Rc(n,e={}){return gt(n,"GET","/v1/projects",e)}/**
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
 */const Cc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oc=/^https?/;async function Dc(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Rc(n);for(const t of e)try{if(Pc(t))return}catch{}re(n,"unauthorized-domain")}function Pc(n){const e=bn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Oc.test(t))return!1;if(Cc.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Mc=new ft(3e4,6e4);function dr(){const n=ue().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Lc(n){return new Promise((e,t)=>{var r,i,s;function o(){dr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dr(),t(le(n,"network-request-failed"))},timeout:Mc.get()})}if(!((i=(r=ue().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ue().gapi)===null||s===void 0)&&s.load)o();else{const a=dc("iframefcb");return ue()[a]=()=>{gapi.load?o():t(le(n,"network-request-failed"))},hc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw At=null,e})}let At=null;function Nc(n){return At=At||Lc(n),At}/**
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
 */const xc=new ft(5e3,15e3),Uc="__/auth/iframe",Bc="emulator/auth/iframe",Fc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$c=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hc(n){const e=n.config;E(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cn(e,Bc):`https://${n.config.authDomain}/${Uc}`,r={apiKey:e.apiKey,appName:n.name,v:Vt},i=$c.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${dt(r).slice(1)}`}async function Vc(n){const e=await Nc(n),t=ue().gapi;return E(t,n,"internal-error"),e.open({where:document.body,url:Hc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fc,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=le(n,"network-request-failed"),a=ue().setTimeout(()=>{s(o)},xc.get());function c(){ue().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Wc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jc=500,zc=600,Gc="_blank",Kc="http://localhost";class fr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qc(n,e,t,r=jc,i=zc){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Wc),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Z().toLowerCase();t&&(a=yi(l)?Gc:t),_i(l)&&(e=e||Kc,c.scrollbars="yes");const h=Object.entries(c).reduce((d,[p,f])=>`${d}${p}=${f},`,"");if(Sa(l)&&a!=="_self")return Jc(e||"",a),new fr(null);const u=window.open(e||"",a,h);E(u,n,"popup-blocked");try{u.focus()}catch{}return new fr(u)}function Jc(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Yc="__/auth/handler",Xc="emulator/auth/handler";function pr(n,e,t,r,i,s){E(n.config.authDomain,n,"auth-domain-config-required"),E(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vt,eventId:i};if(e instanceof Ln){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Yo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof _t){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Qc(n)}?${dt(a).slice(1)}`}function Qc({config:n}){return n.emulator?Cn(n,Xc):`https://${n.authDomain}/${Yc}`}/**
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
 */const nn="webStorageSupport";class Zc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Di,this._completeRedirectFn=kc,this._overrideRedirectResult=wc}async _openPopup(e,t,r,i){var s;me((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=pr(e,t,r,bn(),i);return qc(e,o,Nn())}async _openRedirect(e,t,r,i){return await this._originValidation(e),ec(pr(e,t,r,bn(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(me(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Vc(e),r=new Tc(e);return t.register("authEvent",i=>(E(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nn,{type:nn},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[nn];o!==void 0&&t(!!o),re(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ei()||Dn()||jt()}}const el=Zc;var gr="@firebase/auth",mr="0.21.1";/**
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
 */class tl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nl(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rl(n){at(new er("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{E(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),E(!o?.includes(":"),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ki(n)},h=new Ca(a,c,l);return ca(h,t),h})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),at(new er("auth-internal",e=>{const t=Xe(e.getProvider("auth").getImmediate());return(r=>new tl(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(gr,mr,nl(n)),ze(gr,mr,"esm2017")}/**
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
 */const il=5*60,sl=ai("authIdTokenMaxAge")||il;let _r=null;const ol=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>sl)return;const i=t?.token;_r!==i&&(_r=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function al(n=Eo()){const e=ti(n,"auth");if(e.isInitialized())return e.getImmediate();const t=aa(n,{popupRedirectResolver:el,persistence:[lc,Xa,Di]}),r=ai("authTokenSyncURL");if(r){const s=ol(r);Ka(t,s,()=>s(t.currentUser)),Ga(t,o=>s(o))}const i=Vo("auth");return i&&Oa(t,`http://${i}`),t}rl("Browser");const cl=()=>{},ll="https://api.cubingapp.com:3000",ul={apiKey:"AIzaSyCnwuoBqAR6cx7uqzxf7iEC99sZf36sZZA",authDomain:"virtual-cube.firebaseapp.com",projectId:"virtual-cube",storageBucket:"virtual-cube.appspot.com",messagingSenderId:"371073332227",appId:"1:371073332227:web:c96d3137080aecfe634a36",measurementId:"G-YR33BDCQDY"},hl=ni(ul),Kt=()=>al(hl);async function qt(n,e){return await fetch(`${ll}${n}`,{method:"POST",body:JSON.stringify(e)}).then(r=>r.json())}async function dl(n){return qt("/user",{email:n})}const Fi="algSet",$i="showScramble",Un="user";function fl(){return localStorage.getItem(Fi)??""}function pl(n){localStorage.setItem(Fi,n)}function gl(){return vl($i)??!1}function ml(n){bl($i,n)}function _l(){return localStorage.getItem(Un)}function Hi(){localStorage.removeItem(Un)}function yl(n){localStorage.setItem(Un,n)}function vl(n){const e=localStorage.getItem(n);return e===null?null:e=="1"}function bl(n,e){localStorage.setItem(n,e?"1":"0")}class Vi{email;uid;constructor(){}toJsonString(){return JSON.stringify({email:this.email,uid:this.uid})}fromJsonString(e){const t=JSON.parse(e);this.email=t.email,this.uid=t.uid}}function Wi(n){cl("Signed in as "+n.email+" with uid "+n.uid)}function wl(){const n=_l();if(!n)return null;const e=new Vi;return e.fromJsonString(n),!e.email||!e.uid?(Hi(),null):(Wi(e),e)}function Bn(n,e){const t=new Vi;t.email=n.user.email,dl(t.email).then(r=>{t.uid=r.uid,yl(t.toJsonString()),Wi(t),e(t)})}function Il(n){const e=Kt(),t=new de;_c(e,t).then(r=>{Bn(r,n)}).catch(r=>{console.log(r)})}function El(n,e,t){const r=Kt();ja(r,n,e).then(i=>{Bn(i,t)}).catch(i=>{console.log(i.message)})}function kl(n,e,t){const r=Kt();za(r,n,e).then(i=>{Bn(i,t)}).catch(i=>{console.log(i.message)})}function Sl(){Kt().signOut(),Hi()}function Tl(n){let e,t,r;return{c(){e=w("button"),e.textContent="Create Account",I(e,"class","btn-primary")},m(i,s){$(i,e,s),t||(r=ee(e,"click",n[3]),t=!0)},p:M,i:M,o:M,d(i){i&&B(e),t=!1,r()}}}function Al(n,e,t){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{El(r,i,s)};return n.$$set=a=>{"email"in a&&t(0,r=a.email),"password"in a&&t(1,i=a.password),"callback"in a&&t(2,s=a.callback)},[r,i,s,o]}class Rl extends ae{constructor(e){super(),oe(this,e,Al,Tl,se,{email:0,password:1,callback:2})}}function Cl(n){let e,t,r;return{c(){e=w("button"),e.textContent="Sign In",I(e,"class","btn-primary")},m(i,s){$(i,e,s),t||(r=ee(e,"click",n[3]),t=!0)},p:M,i:M,o:M,d(i){i&&B(e),t=!1,r()}}}function Ol(n,e,t){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{kl(r,i,s)};return n.$$set=a=>{"email"in a&&t(0,r=a.email),"password"in a&&t(1,i=a.password),"callback"in a&&t(2,s=a.callback)},[r,i,s,o]}class Dl extends ae{constructor(e){super(),oe(this,e,Ol,Cl,se,{email:0,password:1,callback:2})}}function Pl(n){let e,t,r;return{c(){e=w("button"),e.innerHTML=`<div class="row"><svg style="width: 20px; height: 20px; margin-right: 0.6rem;" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path><path fill="none" d="M2 2h44v44H2z"></path></svg> 
        <p style="font-size: 1rem;">Sign in with Google</p></div>`,I(e,"class","p-2 bg-white rounded-md shadow-lg border-solid border-gray-400 hover:cursor-pointer hover:bg-gray-200")},m(i,s){$(i,e,s),t||(r=ee(e,"click",n[1]),t=!0)},p:M,i:M,o:M,d(i){i&&B(e),t=!1,r()}}}function Ml(n,e,t){let{callback:r}=e;const i=()=>Il(r);return n.$$set=s=>{"callback"in s&&t(0,r=s.callback)},[r,i]}class Ll extends ae{constructor(e){super(),oe(this,e,Ml,Pl,se,{callback:0})}}function Nl(n){let e,t,r,i;return{c(){e=w("input"),I(e,"class",t=n[1].class),I(e,"type","email"),I(e,"placeholder","Email")},m(s,o){$(s,e,o),Ot(e,n[0]),r||(i=ee(e,"input",n[2]),r=!0)},p(s,[o]){o&2&&t!==(t=s[1].class)&&I(e,"class",t),o&1&&e.value!==s[0]&&Ot(e,s[0])},i:M,o:M,d(s){s&&B(e),r=!1,i()}}}function xl(n,e,t){let{value:r}=e;function i(){r=this.value,t(0,r)}return n.$$set=s=>{t(1,e=ge(ge({},e),Oe(s))),"value"in s&&t(0,r=s.value)},e=Oe(e),[r,e,i]}class Ul extends ae{constructor(e){super(),oe(this,e,xl,Nl,se,{value:0})}}function Bl(n){let e,t,r,i;return{c(){e=w("input"),I(e,"class",t=n[1].class),I(e,"type","password"),I(e,"placeholder","Password")},m(s,o){$(s,e,o),Ot(e,n[0]),r||(i=ee(e,"input",n[2]),r=!0)},p(s,[o]){o&2&&t!==(t=s[1].class)&&I(e,"class",t),o&1&&e.value!==s[0]&&Ot(e,s[0])},i:M,o:M,d(s){s&&B(e),r=!1,i()}}}function Fl(n,e,t){let{value:r}=e;function i(){r=this.value,t(0,r)}return n.$$set=s=>{t(1,e=ge(ge({},e),Oe(s))),"value"in s&&t(0,r=s.value)},e=Oe(e),[r,e,i]}class $l extends ae{constructor(e){super(),oe(this,e,Fl,Bl,se,{value:0})}}function Hl(n){let e,t;const r=n[3].default,i=Hr(r,n,n[2],null);return{c(){e=w("div"),i&&i.c(),I(e,"class","hoverable svelte-3ofaiz"),O(e,"--hov-background-color",n[0]),O(e,"--hov-border-radius",n[1])},m(s,o){$(s,e,o),i&&i.m(e,null),t=!0},p(s,[o]){i&&i.p&&(!t||o&4)&&jr(i,r,s,s[2],t?Wr(r,s[2],o,null):zr(s[2]),null),(!t||o&1)&&O(e,"--hov-background-color",s[0]),(!t||o&2)&&O(e,"--hov-border-radius",s[1])},i(s){t||(P(i,s),t=!0)},o(s){N(i,s),t=!1},d(s){s&&B(e),i&&i.d(s)}}}function Vl(n,e,t){let{$$slots:r={},$$scope:i}=e,{backgroundColor:s="transparent"}=e,{borderRadius:o="0"}=e;return n.$$set=a=>{"backgroundColor"in a&&t(0,s=a.backgroundColor),"borderRadius"in a&&t(1,o=a.borderRadius),"$$scope"in a&&t(2,i=a.$$scope)},[s,o,i,r]}class Wl extends ae{constructor(e){super(),oe(this,e,Vl,Hl,se,{backgroundColor:0,borderRadius:1})}}function jl(n){let e,t,r,i,s;return{c(){e=w("button"),I(e,"class",t=Hn(n[1].class)+" svelte-wi771e"),I(e,"style",r=n[1].style)},m(o,a){$(o,e,a),e.innerHTML=n[0],i||(s=ee(e,"click",n[4]),i=!0)},p(o,[a]){a&2&&t!==(t=Hn(o[1].class)+" svelte-wi771e")&&I(e,"class",t),a&2&&r!==(r=o[1].style)&&I(e,"style",r)},i:M,o:M,d(o){o&&B(e),i=!1,s()}}}function zl(n,e,t){let{name:r}=e,{stroke:i="white"}=e,o={happy:`<svg width="100%" height="100%" stroke="${i}" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
            <circle cx="25" cy="25" r="22" />
            <circle cx="18" cy="20" r="3" />
            <circle cx="32" cy="20" r="3" />
            <path d="M 15,33 Q 25,40 35,33"/>
        </svg>`,menu:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${i}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
            <line x1="3" y1="7" x2="21" y2="7"></line>
            <line x1="3" y1="13" x2="21" y2="13"></line>
            <line x1="3" y1="19" x2="21" y2="19"></line>
        </svg>`,profile:`<svg x="0px" y="0px" stroke="${i}" fill="white" viewBox="0 0 54 54" xml:space="preserve">
            <circle style="stroke-width: 3; fill-opacity: 0; opacity: 1;" cx="26.5" cy="26.5" r="24" />
            <circle style="stroke-width: 3; fill-opacity: 0; opacity: 1;" cx="26.5" cy="20" r="10" />
            <path fill="none" stroke="white" stroke-width="3" d="M 8,42 Q 12,28 20,28 M 45,42 Q 41,28 33,28 "/>
        </svg>`,retry:`<svg width="100%" height="100%" stroke="${i}" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50">
            <path d="M 42,32 A 20,20,0,1,1,42,18"/>
            <path fill="white" fill-opacity="1" d="M 44,22 L 34,17 L 45,12  Z"/>
        </svg>`,sad:`<svg width="100%" height="100%" stroke="${i}" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
            <circle cx="25" cy="25" r="22" />
            <circle cx="18" cy="20" r="3" />
            <circle cx="32" cy="20" r="3" />
            <path d="M 15,35 Q 25,28 35,35"/>
        </svg>`,settings:`<svg x="0px" y="0px" stroke="${i}" fill="white" viewBox="0 0 54 54" xml:space="preserve">
        <path d="M51.22,21h-5.052c-0.812,0-1.481-0.447-1.792-1.197s-0.153-1.54,0.42-2.114l3.572-3.571
            c0.525-0.525,0.814-1.224,0.814-1.966c0-0.743-0.289-1.441-0.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933,0l-3.571,3.571
            c-0.574,0.573-1.366,0.733-2.114,0.421C33.447,9.313,33,8.644,33,7.832V2.78C33,1.247,31.753,0,30.22,0H23.78
            C22.247,0,21,1.247,21,2.78v5.052c0,0.812-0.447,1.481-1.197,1.792c-0.748,0.313-1.54,0.152-2.114-0.421l-3.571-3.571
            c-1.052-1.052-2.883-1.05-3.933,0l-4.553,4.553c-0.525,0.525-0.814,1.224-0.814,1.967c0,0.742,0.289,1.44,0.814,1.966l3.572,3.571
            c0.573,0.574,0.73,1.364,0.42,2.114S8.644,21,7.832,21H2.78C1.247,21,0,22.247,0,23.78v6.439C0,31.753,1.247,33,2.78,33h5.052
            c0.812,0,1.481,0.447,1.792,1.197s0.153,1.54-0.42,2.114l-3.572,3.571c-0.525,0.525-0.814,1.224-0.814,1.966
            c0,0.743,0.289,1.441,0.814,1.967l4.553,4.553c1.051,1.051,2.881,1.053,3.933,0l3.571-3.572c0.574-0.573,1.363-0.731,2.114-0.42
            c0.75,0.311,1.197,0.98,1.197,1.792v5.052c0,1.533,1.247,2.78,2.78,2.78h6.439c1.533,0,2.78-1.247,2.78-2.78v-5.052
            c0-0.812,0.447-1.481,1.197-1.792c0.751-0.312,1.54-0.153,2.114,0.42l3.571,3.572c1.052,1.052,2.883,1.05,3.933,0l4.553-4.553
            c0.525-0.525,0.814-1.224,0.814-1.967c0-0.742-0.289-1.44-0.814-1.966l-3.572-3.571c-0.573-0.574-0.73-1.364-0.42-2.114
            S45.356,33,46.168,33h5.052c1.533,0,2.78-1.247,2.78-2.78V23.78C54,22.247,52.753,21,51.22,21z M52,30.22
            C52,30.65,51.65,31,51.22,31h-5.052c-1.624,0-3.019,0.932-3.64,2.432c-0.622,1.5-0.295,3.146,0.854,4.294l3.572,3.571
            c0.305,0.305,0.305,0.8,0,1.104l-4.553,4.553c-0.304,0.304-0.799,0.306-1.104,0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-0.854
            c-1.5,0.621-2.432,2.016-2.432,3.64v5.052C31,51.65,30.65,52,30.22,52H23.78C23.35,52,23,51.65,23,51.22v-5.052
            c0-1.624-0.932-3.019-2.432-3.64c-0.503-0.209-1.021-0.311-1.533-0.311c-1.014,0-1.997,0.4-2.761,1.164l-3.571,3.572
            c-0.306,0.306-0.801,0.304-1.104,0l-4.553-4.553c-0.305-0.305-0.305-0.8,0-1.104l3.572-3.571c1.148-1.148,1.476-2.794,0.854-4.294
            C10.851,31.932,9.456,31,7.832,31H2.78C2.35,31,2,30.65,2,30.22V23.78C2,23.35,2.35,23,2.78,23h5.052
            c1.624,0,3.019-0.932,3.64-2.432c0.622-1.5,0.295-3.146-0.854-4.294l-3.572-3.571c-0.305-0.305-0.305-0.8,0-1.104l4.553-4.553
            c0.304-0.305,0.799-0.305,1.104,0l3.571,3.571c1.147,1.147,2.792,1.476,4.294,0.854C22.068,10.851,23,9.456,23,7.832V2.78
            C23,2.35,23.35,2,23.78,2h6.439C30.65,2,31,2.35,31,2.78v5.052c0,1.624,0.932,3.019,2.432,3.64
            c1.502,0.622,3.146,0.294,4.294-0.854l3.571-3.571c0.306-0.305,0.801-0.305,1.104,0l4.553,4.553c0.305,0.305,0.305,0.8,0,1.104
            l-3.572,3.571c-1.148,1.148-1.476,2.794-0.854,4.294c0.621,1.5,2.016,2.432,3.64,2.432h5.052C51.65,23,52,23.35,52,23.78V30.22z"/>
            <path d="M27,18c-4.963,0-9,4.037-9,9s4.037,9,9,9s9-4.037,9-9S31.963,18,27,18z M27,34c-3.859,0-7-3.141-7-7s3.141-7,7-7s7,3.141,7,7S30.859,34,27,34z"/>
        </svg>`,x:`<svg width="24" height="24" viewBox="0 0 24 24" stroke="${i}">
            <path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
        </svg>`}[r];function a(c){Gr.call(this,n,c)}return n.$$set=c=>{t(1,e=ge(ge({},e),Oe(c))),"name"in c&&t(2,r=c.name),"stroke"in c&&t(3,i=c.stroke)},e=Oe(e),[o,e,r,i,a]}class Ne extends ae{constructor(e){super(),oe(this,e,zl,jl,se,{name:2,stroke:3})}}function Gl(n){let e,t;return e=new Ne({props:{name:"x",alt:"Close",stroke:"white",style:"padding: 2px;"}}),e.$on("click",n[3]),{c(){X(e.$$.fragment)},m(r,i){q(e,r,i),t=!0},p:M,i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){J(e,r)}}}function Kl(n){let e,t,r,i,s,o,a,c,l;o=new Wl({props:{backgroundColor:"#444",borderRadius:"4px",$$slots:{default:[Gl]},$$scope:{ctx:n}}});const h=n[2].default,u=Hr(h,n,n[4],null);return{c(){e=w("div"),t=w("div"),r=w("p"),i=ce(n[0]),s=D(),X(o.$$.fragment),a=D(),c=w("div"),u&&u.c(),I(t,"class","drawer-header svelte-7uv2k9"),I(c,"class","drawer-body"),I(e,"class","drawer svelte-7uv2k9")},m(d,p){$(d,e,p),y(e,t),y(t,r),y(r,i),y(t,s),q(o,t,null),y(e,a),y(e,c),u&&u.m(c,null),l=!0},p(d,[p]){(!l||p&1)&&Ht(i,d[0]);const f={};p&18&&(f.$$scope={dirty:p,ctx:d}),o.$set(f),u&&u.p&&(!l||p&16)&&jr(u,h,d,d[4],l?Wr(h,d[4],p,null):zr(d[4]),null)},i(d){l||(P(o.$$.fragment,d),P(u,d),l=!0)},o(d){N(o.$$.fragment,d),N(u,d),l=!1},d(d){d&&B(e),J(o),u&&u.d(d)}}}function ql(n,e,t){let{$$slots:r={},$$scope:i}=e,{title:s}=e,{close:o}=e;const a=()=>o();return n.$$set=c=>{"title"in c&&t(0,s=c.title),"close"in c&&t(1,o=c.close),"$$scope"in c&&t(4,i=c.$$scope)},[s,o,r,a,i]}class ji extends ae{constructor(e){super(),oe(this,e,ql,Kl,se,{title:0,close:1})}}const Jl=[1,1,1,1],Yl=[.5,.5,.5,1],Xl=[1,1,0,1],Ql=[0,1,0,1],Zl=[0,0,1,1],eu=[1,.5,0,1],tu=[1,0,0,1],nu=[0,0,0,1],yr=[Jl,Ql,Xl,Zl,eu,tu];function vr(n){return(n<0||n>=yr.length)&&console.error("Invalid face: "+n),yr[n]}function br(n,e){return Math.floor(n/k(e.layers))}function ru(n){return n[xe(n.length)]}function xe(n){return Math.floor(Math.random()*n)}function iu(n){let e=n.length;for(;e!=0;){let t=xe(e);e--;let r=n[t];n[t]=n[e],n[e]=r}return n}function Fn(n){return n<=0?2:Fn(n-1)+n+2}function su(n){n[0].Score++;let e=Fn(n[0].Score);const t=Math.ceil(n.length*3/4);e>t&&(e=t+xe(n.length-t)),zi(n,e)}function ou(n){n[0].Score=0,zi(n,Fn(0))}function zi(n,e){const t=n[0];for(let r=0;r<e;r++)n[r]=n[r+1];n[e]=t}const Ie=0,Ee=1,ke=2,Se=3,Te=4,Ae=5,au=[[Ie,Se,Te],[Ie,Ae,Se],[Ie,Te,Ee],[Ie,Ee,Ae],[ke,Ee,Te],[ke,Ae,Ee],[ke,Te,Se],[ke,Se,Ae]],cu=[[Ie,Se],[Ie,Te],[Ie,Ae],[Ie,Ee],[Ee,Te],[Ee,Ae],[ke,Ee],[ke,Te],[ke,Ae],[ke,Se],[Se,Te],[Se,Ae]];function lu(n){let e=wr(12,2),t=wr(8,3),r=rn(8),i=rn(12);for(;Ir(r)!==Ir(i);)r=rn(8);const s=Array(54);for(let R=0;R<6;R++){const W=n.center(R);s[W]=R}let o=n.corners(0,0),a=n.corners(1,0),c=n.corners(2,0),l=n.corners(3,0),h=n.corners(4,0),u=n.corners(5,0);const d=(R,W,K,Y,G,v,T,Q,j)=>{const z=(b,L)=>au[r[b]][(t[b]+L)%3];s[R.topLeft]=z(W,v),s[R.topRight]=z(K,T),s[R.bottomLeft]=z(Y,Q),s[R.bottomRight]=z(G,j)};d(o,0,1,2,3,0,0,0,0),d(a,2,3,4,5,2,1,1,2),d(c,4,5,6,7,0,0,0,0),d(l,6,7,0,1,2,1,1,2),d(h,0,2,6,4,2,1,1,2),d(u,3,1,5,7,2,1,1,2);let p=n.edges(0,0,0),f=n.edges(1,0,0),g=n.edges(2,0,0),_=n.edges(3,0,0),m=n.edges(4,0,0),S=n.edges(5,0,0);const A=(R,W,K,Y,G,v,T,Q,j)=>{const z=(b,L)=>cu[i[b]][(e[b]+L)%2];s[R.top]=z(W,v),s[R.left]=z(K,T),s[R.right]=z(Y,Q),s[R.bottom]=z(G,j)};return A(p,0,1,2,3,0,0,0,0),A(f,3,4,5,6,1,0,0,1),A(g,6,7,8,9,0,0,0,0),A(_,9,10,11,0,1,0,0,1),A(m,1,10,4,7,1,1,1,1),A(S,2,5,11,8,1,1,1,1),s}function wr(n,e){const t=Array(n);for(let r=0;r<n;r++)t[r]=xe(e);for(;!uu(t,e);){const r=xe(n);t[r]=xe(e)}return t}function uu(n,e){let t=0;for(let r=0;r<n.length;r++)t+=n[r];return t%e===0}function rn(n){const e=Array(n);for(let t=0;t<n;t++)e[t]=t;return iu(e),e}function Ir(n){const e=[...n];let t=!1;for(;;)if(e[0]===0){const r=e.findIndex((i,s)=>i!==s);if(r===-1)return t;e[0]=e[r],e[r]=0,t=!t}else{const r=e[0];e[0]=e[r],e[r]=r,t=!t}}let we;function Rt(n,e){const t=[e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3]];we.bindBuffer(we.ARRAY_BUFFER,n.buffer),we.bufferData(we.ARRAY_BUFFER,new Float32Array(t),we.STATIC_DRAW)}function k(n){return n*n}function V(n){return Math.floor(n/2)}function Ze(n){return n%2==0}function te(n){return n*n*6}class hu{stickers;underStickers;layers;affectedStickers;disableTurn;clockwise;animationQueue;constructor(e){we=e,this.animationQueue=[]}setColors(e){for(let t=0;t<te(this.layers);t++)Rt(this.stickers[t],e[t])}solve(){const e=Array(te(this.layers));for(let t=0;t<te(this.layers);t++){const r=br(t,this);this.stickers[t].face=r,e[t]=vr(r)}this.setColors(e)}scramble(){if(this.layers===3){this.scramble3x3();return}this.naiveScramble()}scramble3x3(){const e=lu(this);this.setCubeState(e)}naiveScramble(){let e=k(this.layers)*10;for(let t=0;t<e;t++){let r=Math.floor(Math.random()*3),i=Math.floor(Math.random()*this.layers),s=Math.floor(Math.random()*1)==0;this._matchTurn(r,i,s)}}setNumOfLayers(e){this.layers=e,this.stickers=Array(te(e)),this.underStickers=Array(te(e));for(let t=0;t<te(e);t++){const r=br(t,this);this.stickers[t]={face:r,buffer:we.createBuffer()},this.underStickers[t]={face:r,buffer:we.createBuffer()},Rt(this.underStickers[t],nu)}this.affectedStickers=Array(te(e)).fill(!1)}getCubeState(){return this.stickers.map(e=>e.face)}setCubeState(e){for(let t=0;t<te(this.layers);t++){const r=vr(e[t]);this.stickers[t].face=e[t],Rt(this.stickers[t],r)}}resetAffectedStickers(){const e=Array(te(this.layers));this.affectedStickers=e.fill(this.layers===1)}pushAnimation(e,t,r){let i=t?-1:1,s=[0,0,0];s[e]=i,this.animationQueue.push({axis:s,stickers:r,stickersToAnimate:this.affectedStickers})}turn(e,t,r){this.resetAffectedStickers(),this.pushAnimation(e,r,[...this.stickers]),this._matchTurn(e,t,r)}sliceTurn(e,t){const r=Array(te(this.layers));this.affectedStickers=r.fill(!1),this.pushAnimation(e,t,[...this.stickers]);for(let i=1;i<this.layers-1;i++)this._matchTurn(e,i,t)}wideTurn(e,t,r){this.resetAffectedStickers(),this.pushAnimation(e,r,[...this.stickers]),this._matchTurn(e,t,r);for(let i=1;i<this.layers-1;i++)this._matchTurn(e,i,r)}cubeRotate(e,t){this.resetAffectedStickers(),this.pushAnimation(e,t,[...this.stickers]);for(let r=0;r<this.layers;r++)this._matchTurn(e,r,t)}_matchTurn(e,t,r){e==0?(this._turnXAxis(t,r),t==0?this._turnOuter(5,r):t==this.layers-1&&this._turnOuter(4,!r)):e==1?(this._turnYAxis(t,r),t==0?this._turnOuter(0,r):t==this.layers-1&&this._turnOuter(2,!r)):e==2?(this._turnZAxis(t,r),t==0?this._turnOuter(1,r):t==this.layers-1&&this._turnOuter(3,!r)):console.error(`Axis ${e} not recognized`)}_turnXAxis(e,t){for(let r=1;r<=this.layers;r++)this._cycle(t,0*k(this.layers)+k(this.layers)-r-e*this.layers,3*k(this.layers)+k(this.layers)-r-e*this.layers,2*k(this.layers)+k(this.layers)-r-e*this.layers,1*k(this.layers)+k(this.layers)-r-e*this.layers)}_turnYAxis(e,t){for(let r=0;r<this.layers;r++)this._cycle(t,1*k(this.layers)+r*this.layers+e,4*k(this.layers)+r*this.layers+e,3*k(this.layers)+(this.layers-r-1)*this.layers+(this.layers-1)-e,5*k(this.layers)+r*this.layers+e)}_turnZAxis(e,t){for(let r=0;r<this.layers;r++)this._cycle(t,0*k(this.layers)+(r+1)*this.layers-1-e,5*k(this.layers)+r+this.layers*e,2*k(this.layers)+(this.layers-r-1)*this.layers+e,4*k(this.layers)+k(this.layers)-(r+1)-e*this.layers)}_turnOuter(e,t){if(this.layers%2!=0){let r=this.center(e);this.affectedStickers[r]=!0}for(let r=0;r<Math.floor(this.layers/2);r++){const{topLeft:i,topRight:s,bottomLeft:o,bottomRight:a}=this.corners(e,r);this._cycle(t,i,s,a,o);let c=this.layers-2*(r+1);for(let l=0;l<c;l++){const{top:h,left:u,bottom:d,right:p}=this.edges(e,r,l);this._cycle(t,h,p,d,u)}}}_cycle(e,t,r,i,s){this.affectedStickers[t]=!0,this.affectedStickers[r]=!0,this.affectedStickers[i]=!0,this.affectedStickers[s]=!0,e?this._cycleHelper(t,r,i,s):this._cycleHelper(s,i,r,t)}_cycleHelper(e,t,r,i){let s=this.stickers[i];this.stickers[i]=this.stickers[r],this.stickers[r]=this.stickers[t],this.stickers[t]=this.stickers[e],this.stickers[e]=s}matchKeyToTurn(e){if(!this.disableTurn&&!e.ctrlKey)return this.matchKeyCodeToTurn(e.code)}matchKeyCodeToTurn(e){switch(e){case"KeyN":return this.cubeRotate(0,!0),{notation:"x",rotate:!0};case"KeyB":return this.cubeRotate(0,!1),{notation:"x'",rotate:!0};case"Semicolon":return this.cubeRotate(1,!0),{notation:"y",rotate:!0};case"KeyA":return this.cubeRotate(1,!1),{notation:"y'",rotate:!0};case"KeyP":return this.cubeRotate(2,!0),{notation:"z",rotate:!0};case"KeyQ":return this.cubeRotate(2,!1),{notation:"z'",rotate:!0};case"KeyJ":return this.turn(1,0,!0),{notation:"U",turn:!0};case"KeyF":return this.turn(1,0,!1),{notation:"U'",turn:!0};case"KeyS":return this.turn(1,this.layers-1,!1),{notation:"D",turn:!0};case"KeyL":return this.turn(1,this.layers-1,!0),{notation:"D'",turn:!0};case"KeyH":return this.turn(2,0,!0),{notation:"F",turn:!0};case"KeyG":return this.turn(2,0,!1),{notation:"F'",turn:!0};case"KeyW":return this.turn(2,this.layers-1,!1),{notation:"B",turn:!0};case"KeyO":return this.turn(2,this.layers-1,!0),{notation:"B'",turn:!0};case"KeyD":return this.turn(0,this.layers-1,!1),{notation:"L",turn:!0};case"KeyE":return this.turn(0,this.layers-1,!0),{notation:"L'",turn:!0};case"KeyI":return this.turn(0,0,!0),{notation:"R",turn:!0};case"KeyK":return this.turn(0,0,!1),{notation:"R'",turn:!0};case"BracketLeft":return this.sliceTurn(0,!1),{notation:"M",turn:!0};case"Quote":return this.sliceTurn(0,!0),{notation:"M'",turn:!0};case"KeyC":return this.sliceTurn(1,!1),{notation:"E",turn:!0};case"Comma":return this.sliceTurn(1,!0),{notation:"E'",turn:!0};case"KeyY":return this.sliceTurn(2,!0),{notation:"S",turn:!0};case"KeyT":return this.sliceTurn(2,!1),{notation:"S'",turn:!0};case"KeyU":return this.wideTurn(0,0,!0),{notation:"r",turn:!0};case"KeyM":return this.wideTurn(0,0,!1),{notation:"r'",turn:!0};case"KeyV":return this.wideTurn(0,this.layers-1,!1),{notation:"l",turn:!0};case"KeyR":return this.wideTurn(0,this.layers-1,!0),{notation:"l'",turn:!0}}}stepAlgorithm(e,t){switch(e){case"x":this.cubeRotate(0,t);break;case"x'":this.cubeRotate(0,!t);break;case"x2":case"x2'":this.cubeRotate(0,t),this.cubeRotate(0,t);break;case"y":this.cubeRotate(1,t);break;case"y'":this.cubeRotate(1,!t);break;case"y2":case"y2'":this.cubeRotate(1,t),this.cubeRotate(1,t);break;case"z":this.cubeRotate(2,t);break;case"z'":this.cubeRotate(2,!t);break;case"z2":case"z2'":this.cubeRotate(2,t),this.cubeRotate(2,t);break;case"U":this.turn(1,0,t);break;case"U'":this.turn(1,0,!t);break;case"U2":case"U2'":this.turn(1,0,t),this.turn(1,0,t);break;case"u":this.wideTurn(1,0,t);break;case"u'":this.wideTurn(1,0,!t);break;case"u2":case"u2'":this.wideTurn(1,0,t),this.wideTurn(1,0,t);break;case"D":this.turn(1,this.layers-1,!t);break;case"D'":this.turn(1,this.layers-1,t);break;case"D2":case"D2'":this.turn(1,this.layers-1,t),this.turn(1,this.layers-1,t);break;case"d":this.wideTurn(1,this.layers-1,!t);break;case"d'":this.wideTurn(1,this.layers-1,t);break;case"d2":case"d2'":this.wideTurn(1,this.layers-1,t),this.wideTurn(1,this.layers-1,t);break;case"F":this.turn(2,0,t);break;case"F'":this.turn(2,0,!t);break;case"F2":case"F2'":this.turn(2,0,t),this.turn(2,0,t);break;case"f":this.wideTurn(2,0,t);break;case"f'":this.wideTurn(2,0,!t);break;case"f2":case"f2'":this.wideTurn(2,0,t),this.wideTurn(2,0,t);break;case"B":this.turn(2,this.layers-1,!t);break;case"B'":this.turn(2,this.layers-1,t);break;case"B2":case"B2'":this.turn(2,this.layers-1,t),this.turn(2,this.layers-1,t);break;case"b":this.wideTurn(2,this.layers-1,!t);break;case"b'":this.wideTurn(2,this.layers-1,t);break;case"b2":case"b2'":this.wideTurn(2,this.layers-1,t),this.wideTurn(2,this.layers-1,t);break;case"L":this.turn(0,this.layers-1,!t);break;case"L'":this.turn(0,this.layers-1,t);break;case"L2":case"L2'":this.turn(0,this.layers-1,t),this.turn(0,this.layers-1,t);break;case"l":this.wideTurn(0,this.layers-1,!t);break;case"l'":this.wideTurn(0,this.layers-1,t);break;case"l2":case"l2'":this.wideTurn(0,this.layers-1,t),this.wideTurn(0,this.layers-1,t);break;case"R":this.turn(0,0,t);break;case"R'":this.turn(0,0,!t);break;case"R2":case"R2'":this.turn(0,0,t),this.turn(0,0,t);break;case"r":this.wideTurn(0,0,t);break;case"r'":this.wideTurn(0,0,!t);break;case"r2":case"r2'":this.wideTurn(0,0,t),this.wideTurn(0,0,t);break;case"M":this.turn(0,1,!t);break;case"M'":this.turn(0,1,t);break;case"M2":case"M2'":this.sliceTurn(0,t),this.sliceTurn(0,t);break;case"E":this.sliceTurn(1,!t);break;case"E'":this.sliceTurn(1,t);break;case"E2":case"E2'":this.sliceTurn(1,t),this.sliceTurn(1,t);break;case"S":this.sliceTurn(2,t);break;case"S'":this.sliceTurn(2,!t);break;case"S2":case"S2'":this.sliceTurn(2,t);default:throw new Error("Invalid turn in algorithm: "+e)}}execAlg(e){if(!e)return;let t=e.split(" ");for(let r=0;r<t.length;r++)this.stepAlgorithm(t[r],!0);this.animationQueue=[]}execAlgReverse(e){if(!e)return;let t=e.split(" ");for(let r=t.length-1;r>=0;r--)this.stepAlgorithm(t[r],!1);this.animationQueue=[]}stickerIsOnFace(e,t){return t*k(this.layers)<=e&&e<(t+1)*k(this.layers)}center(e){return e*k(this.layers)+Math.floor(k(this.layers)/2)}corners(e,t){const r=e*k(this.layers);return{topLeft:r+(this.layers+1)*t,topRight:r+(this.layers-1)*(this.layers-t),bottomRight:r+(this.layers+1)*(this.layers-t-1),bottomLeft:r+(this.layers-1)*(t+1)}}edges(e,t,r){const i=this.corners(e,t);let s=this.layers-2*(t+1);return{top:i.topLeft+this.layers*(r+1),left:i.topLeft+(s-r),right:i.topRight+r+1,bottom:i.bottomLeft+this.layers*(s-r)}}}function In(n){const e=n.gl,t=n.cube,r=n.perspectiveMatrix;let i=sn(t,1.01,.02),s=sn(t,1,0),o=sn(t,1.5,.02);const a=Array(te(t.layers));for(let c=0;c<te(t.layers);c++){let l={positionBuffer:e.createBuffer(),noGapPositionBuffer:e.createBuffer(),hintPositionBuffer:e.createBuffer(),indexBuffer:e.createBuffer(),cart2d:[],positions:null},h=new Float32Array(12),u=new Float32Array(12),d=new Float32Array(12);for(let g=0;g<12;g++){let _=c*12+g;h[g]=i[_],u[g]=s[_],d[g]=o[_]}e.bindBuffer(e.ARRAY_BUFFER,l.positionBuffer),e.bufferData(e.ARRAY_BUFFER,h,e.STATIC_DRAW),l.positions=h,e.bindBuffer(e.ARRAY_BUFFER,l.noGapPositionBuffer),e.bufferData(e.ARRAY_BUFFER,u,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,l.hintPositionBuffer),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW);const p=Array(16);wt(p,0,r,[u[0],u[1],u[2],1]),wt(p,4,r,[u[3],u[4],u[5],1]),wt(p,8,r,[u[6],u[7],u[8],1]),wt(p,12,r,[u[9],u[10],u[11],1]),l.cart2d=[p[0]/p[3],p[1]/p[3],p[4]/p[7],p[5]/p[7],p[8]/p[11],p[9]/p[11],p[12]/p[15],p[13]/p[15]];const f=[0,1,2,0,2,3];e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(f),e.STATIC_DRAW),a[c]=l}return a}function wt(n,e,t,r){Array(4);let i=r[0],s=r[1],o=r[2],a=r[3];n[e+0]=i*t[0]+s*t[4]+o*t[8]+a*t[12],n[e+1]=i*t[1]+s*t[5]+o*t[9]+a*t[13],n[e+2]=i*t[2]+s*t[6]+o*t[10]+a*t[14],n[e+3]=i*t[3]+s*t[7]+o*t[11]+a*t[15]}const Gi=12,du=4,Ve=3;function sn(n,e,t){const r=k(n.layers)*Gi,i=Array(6*r);return fu(i,0*r,n,1,e,t),pu(i,1*r,n,0,e,t),gu(i,2*r,n,1,-e,t),mu(i,3*r,n,0,-e,t),_u(i,4*r,n,2,-e,t),yu(i,5*r,n,2,e,t),i}function fu(n,e,t,r,i,s){if(Ze(t.layers)){let c=Array(k(t.layers)),l=0;for(let h=0;h<t.layers;h++)for(let u=0;u<t.layers;u++){const d=-1+1/t.layers+u*2/t.layers,p=-1+1/t.layers+h*2/t.layers;c[l]=[d,p,i],l++}ie(n,e,t,c,r,s);return}let o=Array(k(t.layers)),a=0;for(let c=-V(t.layers);c<=V(t.layers);c++)for(let l=-V(t.layers);l<=V(t.layers);l++)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;ie(n,e,t,o,r,s)}function pu(n,e,t,r,i,s){if(Ze(t.layers)){let c=Array(k(t.layers)),l=0;for(let h=0;h<t.layers;h++)for(let u=t.layers-1;u>=0;u--){const d=-1+1/t.layers+h*2/t.layers,p=-1+1/t.layers+u*2/t.layers;c[l]=[d,p,i],l++}ie(n,e,t,c,r,s);return}let o=Array(k(t.layers)),a=0;for(let c=-V(t.layers);c<=V(t.layers);c++)for(let l=V(t.layers);l>=-V(t.layers);l--)o[a]=[2*c/t.layers,2*l/t.layers,i],a++;ie(n,e,t,o,r,s)}function gu(n,e,t,r,i,s){if(Ze(t.layers)){let c=Array(k(t.layers)),l=0;for(let h=0;h<t.layers;h++)for(let u=t.layers-1;u>=0;u--){const d=-1+1/t.layers+u*2/t.layers,p=-1+1/t.layers+h*2/t.layers;c[l]=[d,p,i],l++}ie(n,e,t,c,r,s);return}let o=Array(k(t.layers)),a=0;for(let c=-V(t.layers);c<=V(t.layers);c++)for(let l=V(t.layers);l>=-V(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;ie(n,e,t,o,r,s)}function mu(n,e,t,r,i,s){if(Ze(t.layers)){let c=Array(k(t.layers)),l=0;for(let h=0;h<t.layers;h++)for(let u=0;u<t.layers;u++){const d=-1+1/t.layers+h*2/t.layers,p=-1+1/t.layers+u*2/t.layers;c[l]=[d,p,i],l++}ie(n,e,t,c,r,s);return}let o=Array(k(t.layers)),a=0;for(let c=-V(t.layers);c<=V(t.layers);c++)for(let l=-V(t.layers);l<=V(t.layers);l++)o[a]=[2*c/t.layers,2*l/t.layers,i],a++;ie(n,e,t,o,r,s)}function _u(n,e,t,r,i,s){if(Ze(t.layers)){let c=Array(k(t.layers)),l=0;for(let h=0;h<t.layers;h++)for(let u=t.layers-1;u>=0;u--){const d=-1+1/t.layers+u*2/t.layers,p=-1+1/t.layers+h*2/t.layers;c[l]=[d,p,i],l++}ie(n,e,t,c,r,s);return}let o=Array(k(t.layers)),a=0;for(let c=-V(t.layers);c<=V(t.layers);c++)for(let l=V(t.layers);l>=-V(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;ie(n,e,t,o,r,s)}function yu(n,e,t,r,i,s){if(Ze(t.layers)){let c=Array(k(t.layers)),l=0;for(let h=t.layers-1;h>=0;h--)for(let u=t.layers-1;u>=0;u--){const d=-1+1/t.layers+u*2/t.layers,p=-1+1/t.layers+h*2/t.layers;c[l]=[d,p,i],l++}ie(n,e,t,c,r,s);return}let o=Array(k(t.layers)),a=0;for(let c=V(t.layers);c>=-V(t.layers);c--)for(let l=V(t.layers);l>=-V(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;ie(n,e,t,o,r,s)}function ie(n,e,t,r,i,s){for(let o=0;o<k(t.layers);o++){const a=r[o];vu(n,e+o*Gi,t,a[0],a[1],a[2],i,s)}}function vu(n,e,t,r,i,s,o,a){const c=1/t.layers-a,l=[[r-c,i-c,s],[r+c,i-c,s],[r+c,i+c,s],[r-c,i+c,s]];for(let h=0;h<du;h++){const u=l[h];n[e+h*Ve]=u[(o+0)%Ve],n[e+h*Ve+1]=u[(o+1)%Ve],n[e+h*Ve+2]=u[(o+2)%Ve]}}const bu=100,wu=15;class Iu{position;_velocity;_acceleration;target;constructor(){this.position=0,this._velocity=200,this._acceleration=0,this.target=0}update(e){const t=-bu*(this.position-this.target),r=-wu*this._velocity;this._acceleration=t+r,this._velocity+=this._acceleration*e,this.position+=this._velocity*e}}function Er(n,e){return n/e*2-1}function kr(n,e){return 1-n/e*2}function on(n,e,t,r){return n<t?(r-e)/(t-n):(e-r)/(n-t)}function We(n,e,t,r,i,s){return Math.abs(.5*(n*(r-s)+t*(s-e)+i*(e-r)))}function Eu(n,e){return n.layers-1-e%n.layers}function an(n,e){return n.layers-1-Math.floor(e/n.layers)}function ku(n,e){return e%n.layers}function cn(n,e){return n.layers-1-Math.floor((e-k(n.layers))/n.layers)}class Su{numOfPointerMoves;xOnDown;yOnDown;xOnMove;yOnMove;stickerOnDown;cart2dOnDown;onPointerDown(e,t,r,i,s){this.numOfPointerMoves=0;const o=Er(e,r.clientWidth),a=kr(t,r.clientHeight);this.xOnDown=o,this.yOnDown=a,[this.stickerOnDown,this.cart2dOnDown]=this._coordinatesToSticker(o,a,i,s);function c(g,_,m){return{x:s[g].cart2d[_],y:s[g].cart2d[m]}}if(this.stickerOnDown!==-1)return;const l=c(0,0,1),h=c(i.layers*(i.layers-1),6,7),u=c(i.layers-1,2,3),d=c(k(i.layers)-1,4,5),p=c(i.layers*(i.layers+1)-1,0,1),f=c(k(i.layers)*2-1,2,3);a>l.y&&o>l.x&&o<h.x?i.cubeRotate(0,!0):o<l.x&&a>u.y&&a<l.y?i.cubeRotate(2,!1):o>h.x&&a>d.y&&a<h.y?i.cubeRotate(2,!0):o<p.x&&a>p.y&&a<u.y?i.cubeRotate(1,!0):o>f.x&&a>f.y&&a<d.y?i.cubeRotate(1,!1):a<p.y&&o>p.x&&o<f.x&&i.cubeRotate(0,!1)}onPointerMove(e,t){this.numOfPointerMoves++,this.xOnMove=e,this.yOnMove=t}onPointerUp(e,t,r){if(this.numOfPointerMoves<2)return;let i,s;if(this.stickerOnDown!==-1&&(i=on(this.cart2dOnDown[0],this.cart2dOnDown[1],this.cart2dOnDown[4],this.cart2dOnDown[5]),s=on(this.cart2dOnDown[2],this.cart2dOnDown[3],this.cart2dOnDown[6],this.cart2dOnDown[7]),i<0)){const l=i;i=s,s=l}const o=Er(this.xOnMove,e.clientWidth),a=kr(this.yOnMove,e.clientHeight),c=on(o,a,this.xOnDown,this.yOnDown);t.stickerIsOnFace(this.stickerOnDown,0)?o===this.xOnDown?t.turn(0,an(t,this.stickerOnDown),a>this.yOnDown):c>i?t.turn(0,an(t,this.stickerOnDown),o>this.xOnDown):c<s?t.turn(0,an(t,this.stickerOnDown),o<this.xOnDown):t.turn(2,Eu(t,this.stickerOnDown),o>this.xOnDown):t.stickerIsOnFace(this.stickerOnDown,1)&&(o===this.xOnDown?t.turn(0,cn(t,this.stickerOnDown),a>this.yOnDown):c>i?t.turn(0,cn(t,this.stickerOnDown),o>this.xOnDown):c<s?t.turn(0,cn(t,this.stickerOnDown),o<this.xOnDown):t.turn(1,ku(t,this.stickerOnDown),o<this.xOnDown))}_coordinatesToSticker(e,t,r,i){const s=o=>{if(!i[o].cart2d){console.error("cart2d is undefined");return}const a=i[o].cart2d,c=We(a[0],a[1],a[2],a[3],a[4],a[5])+We(a[0],a[1],a[4],a[5],a[6],a[7]),l=We(e,t,a[0],a[1],a[2],a[3])+We(e,t,a[2],a[3],a[4],a[5])+We(e,t,a[4],a[5],a[6],a[7])+We(e,t,a[6],a[7],a[0],a[1]),h=1e-5;if(Math.abs(c-l)<h)return[o,a]};for(let o=0;o<2*k(r.layers);o++){const a=s(o);if(a)return a}return[-1,void 0]}}function Ct(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Tu(n,e,t,r,i){const s=1/Math.tan(e/2);if(n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,i!=null&&i!==1/0){const o=1/(r-i);n[10]=(i+r)*o,n[14]=2*i*r*o}else n[10]=-1,n[14]=-2*r;return n}function $t(n,e,t,r){let i=r[0],s=r[1],o=r[2],a=1/Math.hypot(i,s,o);i*=a,s*=a,o*=a;let c=Math.sin(t),l=Math.cos(t),h=1-l,u=e[0],d=e[1],p=e[2],f=e[3],g=e[4],_=e[5],m=e[6],S=e[7],A=e[8],R=e[9],W=e[10],K=e[11],Y=i*i*h+l,G=s*i*h+o*c,v=o*i*h-s*c,T=i*s*h-o*c,Q=s*s*h+l,j=o*s*h+i*c,z=i*o*h+s*c,b=s*o*h-i*c,L=o*o*h+l;return n[0]=u*Y+g*G+A*v,n[1]=d*Y+_*G+R*v,n[2]=p*Y+m*G+W*v,n[3]=f*Y+S*G+K*v,n[4]=u*T+g*Q+A*j,n[5]=d*T+_*Q+R*j,n[6]=p*T+m*Q+W*j,n[7]=f*T+S*Q+K*j,n[8]=u*z+g*b+A*L,n[9]=d*z+_*b+R*L,n[10]=p*z+m*b+W*L,n[11]=f*z+S*b+K*L,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function Au(n,e){let t=e[0],r=e[1],i=e[2];return n[12]+=n[0]*t+n[4]*r+n[7]*i,n[13]+=n[1]*t+n[5]*r+n[8]*i,n[14]+=n[2]*t+n[5]*r+n[9]*i,n[15]+=n[3]*t+n[6]*r+n[10]*i,n}function Sr(){let n;return e=>(n||(n=e()),n)}let ne,C,he,En=[],Tr={animateTurns:!0,hintStickers:!0,showBody:!0},Ar=Date.now()*.001,Ru=3,Rr=!1;function Cu(){Rr||(Rr=!0,requestAnimationFrame(Ki))}function Ou(n,e){C||(ne=e,C=ne.getContext("webgl"),he=Du());let t=new hu(C),r=new Iu,i=Pu(n),s=new Su;t.setNumOfLayers(Ru);let o=In({gl:C,cube:t,perspectiveMatrix:i}),a={div:n,gl:C,cube:t,spring:r,buffers:o,perspectiveMatrix:i};const c=(f,g)=>{a.dragEnabled&&s.onPointerDown(f,g,a.div,a.cube,a.buffers)},l=(f,g)=>{a.dragEnabled&&s.onPointerMove(f,g)},h=()=>{a.dragEnabled&&s.onPointerUp(a.div,a.cube,a.buffers)},u=f=>{const g=f.target.getBoundingClientRect(),_=f.touches[0].pageX-g.left,m=f.touches[0].pageY-g.top;return{x:_,y:m}},d=()=>{n.addEventListener("pointerdown",f=>c(f.offsetX,f.offsetY)),n.addEventListener("pointermove",f=>l(f.offsetX,f.offsetY)),n.addEventListener("pointerup",f=>h())},p=()=>{n.addEventListener("touchstart",f=>{const{x:g,y:_}=u(f);c(g,_)}),n.addEventListener("touchmove",f=>{const{x:g,y:_}=u(f);l(g,_)}),n.addEventListener("touchend",f=>{h()})};return window.PointerEvent?d():p(),a}function Du(){const t=Mu(C,`
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    uniform mat4 uTransformMatrix;
    uniform mat4 uRotateMatrix;

    // variables shared between vertex and fragment shaders
    varying lowp vec4 vColor;
    varying lowp vec4 originalPos;
    varying lowp vec4 rotatedPos;
    void main(void) {
        gl_Position = uTransformMatrix * aVertexPosition;
        originalPos = aVertexPosition;
        rotatedPos = uRotateMatrix * aVertexPosition;
        vColor = aVertexColor;
    }
    `,`
    // variables shared between vertex and fragment shaders
    varying lowp vec4 vColor;
    varying lowp vec4 originalPos;
    varying lowp vec4 rotatedPos;

    void main(void) {
        gl_FragColor = vColor;

        // low precision float variable
        lowp float max = 1.05;

        // if it is a normal sticker rather than a hint sticker, it should not be discarded
        if (originalPos.x < max && originalPos.x > -max && originalPos.y < max && originalPos.y > -max && originalPos.z < max && originalPos.z > -max) {
            return;
        }

        // if it starts on the right or left, and stays on its side, it should not be discarded
        if (originalPos.x > max && rotatedPos.x > max) return;
        if (originalPos.x < -max && rotatedPos.x < -max) return;

        if (rotatedPos.y < max && rotatedPos.z < max) return;
        discard;
    }
    `);return C.useProgram(t),{attribLocations:{vertexPosition:C.getAttribLocation(t,"aVertexPosition"),vertexColor:C.getAttribLocation(t,"aVertexColor")},uniformLocations:{transformMatrix:C.getUniformLocation(t,"uTransformMatrix"),rotateMatrix:C.getUniformLocation(t,"uRotateMatrix")}}}function Pu(n){let e=Ct();return Tu(e,50*Math.PI/180,n.clientWidth/n.clientHeight,.1,100),Au(e,[0,0,-5]),$t(e,e,45*Math.PI/180,[1,0,0]),$t(e,e,0,[0,-1,0]),e}function ln(n,e,t){t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(e.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexPosition)}function un(n,e,t){t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(e.attribLocations.vertexColor,4,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexColor)}function hn(n){n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)}function Mu(n,e,t){const r=Cr(n,n.VERTEX_SHADER,e),i=Cr(n,n.FRAGMENT_SHADER,t),s=n.createProgram();return n.attachShader(s,r),n.attachShader(s,i),n.linkProgram(s),n.getProgramParameter(s,n.LINK_STATUS)?s:(alert("Unable to initialize the shader program: "+n.getProgramInfoLog(s)),null)}function Cr(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)?r:(alert("An error occurred compiling the shaders: "+n.getShaderInfoLog(r)),n.deleteShader(r),null)}function Lu(){const n=ne.clientWidth,e=ne.clientHeight,t=ne.width!==n||ne.height!==e;return t&&(ne.width=n,ne.height=e),t}function Ki(n){n*=.001;const e=n-Ar;Ar=n,Lu(),C.enable(C.DEPTH_TEST),C.enable(C.SCISSOR_TEST),C.depthFunc(C.LEQUAL),C.clear(C.COLOR_BUFFER_BIT|C.DEPTH_BUFFER_BIT),ne.style.transform=`translateY(${window.scrollY}px)`;for(let t=0;t<En.length;t++){const{cube:r,div:i,spring:s,buffers:o,perspectiveMatrix:a}=En[t],c=i.getBoundingClientRect();if(c.bottom<0||c.top>ne.clientHeight||c.right<0||c.left>ne.clientWidth)continue;const l=c.right-c.left,h=c.bottom-c.top,u=c.left,d=ne.clientHeight-c.bottom;C.viewport(u,d,l,h),C.scissor(u,d,l,h),r.animationQueue[0]&&(s.target=r.animationQueue.length*90,s.update(e),s.position>=90&&(r.affectedStickers=Array(te(r.layers)).fill(!1),s.position=0,r.animationQueue.shift()));const p=r.animationQueue[0];let f=Nu(r),g=Sr(),_=Sr();for(let m=0;m<te(r.layers);m++){let S=o[m];const A=p&&p.stickersToAnimate[m]&&Tr.animateTurns?g(()=>$t(Ct(),a,s.position*Math.PI/180,p.axis)):a;C.uniformMatrix4fv(he.uniformLocations.transformMatrix,!1,A);const R=p&&p.stickersToAnimate[m]&&Tr.animateTurns?_(()=>{const W=Ct();return $t(W,W,s.position*Math.PI/180,p.axis)}):Ct();C.uniformMatrix4fv(he.uniformLocations.rotateMatrix,!1,R),C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,S.indexBuffer),ln(S.noGapPositionBuffer,he,C),un(r.underStickers[m].buffer,he,C),hn(C),ln(S.positionBuffer,he,C),un(f[m].buffer,he,C),hn(C),ln(S.hintPositionBuffer,he,C),un(f[m].buffer,he,C),hn(C)}}requestAnimationFrame(Ki)}function Nu(n){return n.animationQueue[0]?n.animationQueue[0].stickers:n.stickers}function xu(n){let e,t,r,i,s,o,a;return{c(){e=w("div"),t=w("canvas"),r=D(),i=w("div"),I(i,"class","glDiv"),I(e,"class",s=n[3].class)},m(c,l){$(c,e,l),y(e,t),n[6](t),y(e,r),y(e,i),n[7](i),o||(a=ee(window,"keydown",n[5]),o=!0)},p(c,[l]){l&8&&s!==(s=c[3].class)&&I(e,"class",s)},i:M,o:M,d(c){c&&B(e),n[6](null),n[7](null),o=!1,a()}}}function Uu(n,e,t){let{onSceneInitialized:r}=e,i,s,o;ss(()=>{t(2,o=Ou(s,i)),En.push(o),o.cube.solve(),t(2,o.dragEnabled=!0,o),Cu(),r(o)});const a=h=>{o&&o.cube.matchKeyToTurn(h)};function c(h){qe[h?"unshift":"push"](()=>{i=h,t(0,i)})}function l(h){qe[h?"unshift":"push"](()=>{s=h,t(1,s)})}return n.$$set=h=>{t(3,e=ge(ge({},e),Oe(h))),"onSceneInitialized"in h&&t(4,r=h.onSceneInitialized)},e=Oe(e),[i,s,o,e,r,a,c,l]}class Bu extends ae{constructor(e){super(),oe(this,e,Uu,xu,se,{onSceneInitialized:4})}}const Fu={CMLL:{cube:"3x3",inactive:[1,3,4,5,7,12,13,14,21,22,23,30,31,32,39,48]},F2L:{cube:"3x3",inactive:[0,1,2,3,5,6,7,8,9,12,15,29,32,35,36,39,42,45,48,51]},OLL:{cube:"3x3",inactive:[9,12,15,29,32,35,36,39,42,45,48,51]},PLL:{cube:"3x3",inactive:[]},ZBLL:{cube:"3x3",inactive:[]},"2x2 CLL":{cube:"2x2",inactive:[]},"2x2 EG1":{cube:"2x2",inactive:[]},"2x2 EG2":{cube:"2x2",inactive:[]}};async function $u(n,e,t,r,i,s,o,a){return qt("/createAlgSet",{uid:n,set:e,trainingAlgs:t,cube:r,inactiveStickers:i,moves:s,disregard:o,onlyOrientation:a})}async function Hu(n,e){return qt("/getAlgSet",{uid:n,set:e})}async function Vu(n,e){return qt("/updateAlgSet",{id:n,trainingAlgs:e})}function Wu(n){var e,t,r;if(n.alg===null||n.alg===void 0)throw new Error("alg must be defined");if(n.moves===null||n.moves===void 0)throw new Error("moves must be defined");return{alg:n.alg,moves:n.moves,onlyOrientation:(e=n.onlyOrientation)!==null&&e!==void 0?e:[],disregard:(t=n.disregard)!==null&&t!==void 0?t:[],maxSolutions:(r=n.maxSolutions)!==null&&r!==void 0?r:10}}function ju(n){var e=Wu(n);return new Promise(function(t){var r=new Worker(new URL("/assets/worker-f983b957.js",self.location));r.onmessage=function(i){var s=i.data,o=s.split(",");t(o),r.terminate()},r.onerror=function(i){console.log("Caught error"),console.error(i),r.terminate()},r.postMessage(e)})}let H={scene:null,algSet:null,preRotation:"",preAUF:"",postAUF:""};function Or(n){return qi(n,H.preAUF,H.postAUF)}function zu(n){const e=Mr(H.preAUF),t=Mr(H.postAUF);return qi(n,t,e)}function qi(n,e,t){e&&(n=`${e} ${n}`),t&&(n=`${n} ${t}`);let r=n.split(" ");const i=Dr(r[0],r[1]),s=Dr(r[r.length-2],r[r.length-1]);return r=r.slice(2,-2),r=i.concat(r).concat(s),r.join(" ")}function Dr(n,e){if(n[0]!=="U"||e[0]!=="U")return[n,e];const t=(Pr(n)+Pr(e))%4;return t===0?[]:[Gu(t)]}function Pr(n){return n.endsWith("'")?3:n.endsWith("2")?2:1}function Gu(n){return["","U","U2","U'"][n]}function Mr(n){return n===""?"":n.endsWith("'")?n.slice(0,-1):n.endsWith("2")?n:`${n}'`}function Lr(){return["","U","U2","U'"][xe(4)]}function Ku(n){H.scene=n}function Ji(){const n=H.algSet.trainingAlgs;return n&&n.length>0?n[0].Alg:(console.log("No algs to load",n),"")}async function rt(n,e){const t=H.scene;if(!t){console.error("Scene not set. Have you called setScene()?");return}(!H.algSet||H.algSet.name!==e)&&(H.algSet=await Hu(n,e),H.algSet.cube=="2x2"?(t.cube.setNumOfLayers(2),t.buffers=In(t),t.cube.solve()):H.algSet.cube=="3x3"&&(t.cube.setNumOfLayers(3),t.buffers=In(t),t.cube.solve()));let r=Ji();return H.preAUF=Lr(),H.postAUF=Lr(),t.cube.solve(),t.cube.execAlg(H.preRotation),H.algSet.inactive.forEach(i=>{Rt(t.cube.stickers[i],Yl)}),t.cube.execAlgReverse(r),r}async function Nr(n,e,t){if(n?su(H.algSet.trainingAlgs):ou(H.algSet.trainingAlgs),H.algSet.id===-1){const{trainingAlgs:r,cube:i,inactive:s,moves:o,disregard:a,onlyOrientation:c}=H.algSet,l=await $u(e,t,r,i,s,o,a,c);H.algSet.id=l.id}else{const{id:r,trainingAlgs:i}=H.algSet;Vu(r,i)}return rt(e,t)}function qu(){return Object.keys(Fu)}async function Ju(){let n=Ji();const e=await ju({alg:n,moves:"U U' F F' R R'",disregard:H.algSet.disregard,onlyOrientation:H.algSet.onlyOrientation});return ru(e)}function Yu(n){let e,t;return e=new Ne({props:{name:"menu",alt:"Open the side navigation panel",class:"hover:cursor-pointer ml-4 hover:bg-slate-500 rounded-lg"}}),e.$on("click",n[0]),{c(){X(e.$$.fragment)},m(r,i){q(e,r,i),t=!0},p:M,i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){J(e,r)}}}function Xu(n){function e(t){Gr.call(this,n,t)}return[e]}class Qu extends ae{constructor(e){super(),oe(this,e,Xu,Yu,se,{})}}function Zu(n){let e,t,r,i,s,o,a,c,l;return{c(){e=w("div"),t=w("div"),r=w("h5"),r.textContent="Menu",i=D(),s=w("button"),s.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="white"><path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2"></path></svg>',o=D(),a=w("div"),a.innerHTML=`<div style="height: 8px;"></div> 
        <a class="btn-primary" href="learn.html">Learn</a> 
        <div style="height: 8px;"></div> 
        <a class="btn-primary" href="play.html">Play</a> 
        <div style="height: 8px;"></div> 
        <a class="btn-primary" href="train.html">Train</a> 
        <div style="height: 8px;"></div> 
        <a class="btn-primary" href="cuble.html">Cuble</a>`,O(r,"color","white"),O(r,"font-size","1.2rem"),I(s,"class","xButton"),I(t,"class","row"),O(t,"justify-content","space-between"),O(t,"padding","8px"),O(a,"display","flex"),O(a,"flex-direction","column"),I(e,"style",n[1])},m(h,u){$(h,e,u),y(e,t),y(t,r),y(t,i),y(t,s),y(e,o),y(e,a),c||(l=ee(s,"click",function(){kn(n[0])&&n[0].apply(this,arguments)}),c=!0)},p(h,[u]){n=h,u&2&&I(e,"style",n[1])},i:M,o:M,d(h){h&&B(e),c=!1,l()}}}function eh(n,e,t){let r,{open:i}=e,{onClose:s=()=>{}}=e;return n.$$set=o=>{"open"in o&&t(2,i=o.open),"onClose"in o&&t(0,s=o.onClose)},n.$$.update=()=>{n.$$.dirty&4&&t(1,r=`position: fixed; top: 0; left: 0; width: 300px; height: 100%; background-color: #2f2f32; z-index: 10; ${i?"transform: translateX(0); transition: transform 0.3s ease-in-out":"transform: translateX(-100%); transition: transform 0.3s ease-in-out"}`)},[s,r,i]}class th extends ae{constructor(e){super(),oe(this,e,eh,Zu,se,{open:2,onClose:0})}}function xr(n,e,t){const r=n.slice();return r[36]=e[t],r}function Ur(n){let e,t,r,i,s;return t=new Ne({props:{class:"icon",style:"padding: 8px;",name:"profile",alt:"Profile"}}),t.$on("click",n[15]),i=new Ne({props:{class:"icon",style:"padding: 8px;",name:"settings",alt:"Settings"}}),i.$on("click",n[16]),{c(){e=w("div"),X(t.$$.fragment),r=D(),X(i.$$.fragment),I(e,"id","iconContainer"),I(e,"class","row")},m(o,a){$(o,e,a),q(t,e,null),y(e,r),q(i,e,null),s=!0},p:M,i(o){s||(P(t.$$.fragment,o),P(i.$$.fragment,o),s=!0)},o(o){N(t.$$.fragment,o),N(i.$$.fragment,o),s=!1},d(o){o&&B(e),J(t),J(i)}}}function nh(n){let e,t,r,i,s,o,a,c,l,h,u,d,p,f,g,_,m,S,A,R,W,K;t=new Bu({props:{class:"mt-4",onSceneInitialized:n[23]}}),o=new Ne({props:{name:"retry",alt:"Retry Algorithm"}}),o.$on("click",n[24]),l=new Ne({props:{name:"sad",alt:"Got algorithm wrong"}}),l.$on("click",n[25]),d=new Ne({props:{name:"happy",alt:"Got algorithm right"}}),d.$on("click",n[26]);function Y(b,L){return b[4]?sh:ih}let G=Y(n),v=G(n),T=n[8]&&Br(n);const Q=[ah,oh],j=[];function z(b,L){return b[5]===0?0:b[5]===1?1:-1}return~(m=z(n))&&(S=j[m]=Q[m](n)),{c(){e=w("div"),X(t.$$.fragment),r=D(),i=w("div"),s=w("div"),X(o.$$.fragment),a=D(),c=w("div"),X(l.$$.fragment),h=D(),u=w("div"),X(d.$$.fragment),p=D(),f=w("button"),v.c(),g=D(),T&&T.c(),_=D(),S&&S.c(),A=ts(),I(s,"class","bg-neutral-700 hover:bg-neutral-800 hover:cursor-pointer"),O(s,"max-width","48px"),O(s,"max-height","48px"),O(s,"padding","2px"),O(s,"box-shadow","0 0 4px black"),O(s,"border-radius","50%"),I(c,"class","bg-red-500 hover:bg-red-700 hover:cursor-pointer"),O(c,"max-width","48px"),O(c,"max-height","48px"),O(c,"padding","2px"),O(c,"box-shadow","0 0 4px black"),O(c,"border-radius","50%"),I(u,"class","bg-green-500 hover:bg-green-700 hover:cursor-pointer"),O(u,"max-width","48px"),O(u,"max-height","48px"),O(u,"padding","2px"),O(u,"box-shadow","0 0 4px black"),O(u,"border-radius","50%"),I(i,"class","row mt-4"),O(i,"gap","16px"),I(f,"class","mt-4"),I(e,"class","col w-full h-full")},m(b,L){$(b,e,L),q(t,e,null),y(e,r),y(e,i),y(i,s),q(o,s,null),y(i,a),y(i,c),q(l,c,null),y(i,h),y(i,u),q(d,u,null),y(e,p),y(e,f),v.m(f,null),y(e,g),T&&T.m(e,null),$(b,_,L),~m&&j[m].m(b,L),$(b,A,L),R=!0,W||(K=ee(f,"click",n[27]),W=!0)},p(b,L){const vt={};L[0]&193&&(vt.onSceneInitialized=b[23]),t.$set(vt),G===(G=Y(b))&&v?v.p(b,L):(v.d(1),v=G(b),v&&(v.c(),v.m(f,null))),b[8]?T?T.p(b,L):(T=Br(b),T.c(),T.m(e,null)):T&&(T.d(1),T=null);let et=m;m=z(b),m===et?~m&&j[m].p(b,L):(S&&(Pt(),N(j[et],1,1,()=>{j[et]=null}),Mt()),~m?(S=j[m],S?S.p(b,L):(S=j[m]=Q[m](b),S.c()),P(S,1),S.m(A.parentNode,A)):S=null)},i(b){R||(P(t.$$.fragment,b),P(o.$$.fragment,b),P(l.$$.fragment,b),P(d.$$.fragment,b),P(S),R=!0)},o(b){N(t.$$.fragment,b),N(o.$$.fragment,b),N(l.$$.fragment,b),N(d.$$.fragment,b),N(S),R=!1},d(b){b&&B(e),J(t),J(o),J(l),J(d),v.d(),T&&T.d(),b&&B(_),~m&&j[m].d(b),b&&B(A),W=!1,K()}}}function rh(n){let e,t,r,i,s,o,a,c,l,h;const u=[hh,uh],d=[];function p(f,g){return f[0]?0:1}return c=p(n),l=d[c]=u[c](n),{c(){e=w("div"),t=w("h1"),t.textContent="Algorithm Trainer",r=D(),i=w("p"),i.textContent="Learn algorithms at lightning speed",s=D(),o=w("div"),o.innerHTML=`<h2 class="text-white mt-4">1. Memorize faster</h2> 
          <ul><li class="text-white">Get an algorithm right, and you&#39;ll see it less often.</li> 
            <li class="text-white">Get an algorithm wrong, and you&#39;ll see it more often.</li></ul> 
          <h2 class="text-white">2. Virtual Cube</h2> 
          <p class="text-white mt-4">Virtual cubes are better because:</p> 
          <ul><li class="text-white">You&#39;ll never have to scramble a cube again</li> 
            <li class="text-white">You can practice anywhere, anytime</li></ul>`,a=D(),l.c(),I(t,"class","text-white mt-4"),I(i,"class","text-gray-300 mt-4 font-bold"),I(e,"class","col w-full h-full")},m(f,g){$(f,e,g),y(e,t),y(e,r),y(e,i),y(e,s),y(e,o),y(e,a),d[c].m(e,null),h=!0},p(f,g){let _=c;c=p(f),c===_?d[c].p(f,g):(Pt(),N(d[_],1,1,()=>{d[_]=null}),Mt(),l=d[c],l?l.p(f,g):(l=d[c]=u[c](f),l.c()),P(l,1),l.m(e,null))},i(f){h||(P(l),h=!0)},o(f){N(l),h=!1},d(f){f&&B(e),d[c].d()}}}function ih(n){let e;return{c(){e=ce("show solution")},m(t,r){$(t,e,r)},p:M,d(t){t&&B(e)}}}function sh(n){let e,t=Or(n[7])+"",r;return{c(){e=ce("solution: "),r=ce(t)},m(i,s){$(i,e,s),$(i,r,s)},p(i,s){s[0]&128&&t!==(t=Or(i[7])+"")&&Ht(r,t)},d(i){i&&B(e),i&&B(r)}}}function Br(n){let e,t,r;return{c(){e=w("p"),t=ce("scramble: "),r=ce(n[9]),I(e,"class","mt-4 text-white")},m(i,s){$(i,e,s),y(e,t),y(e,r)},p(i,s){s[0]&512&&Ht(r,i[9])},d(i){i&&B(e)}}}function oh(n){let e,t;return e=new ji({props:{title:"Settings",close:n[34],$$slots:{default:[ch]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},m(r,i){q(e,r,i),t=!0},p(r,i){const s={};i[0]&449|i[1]&256&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){J(e,r)}}}function ah(n){let e,t;return e=new ji({props:{title:"Profile",close:n[29],$$slots:{default:[lh]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},m(r,i){q(e,r,i),t=!0},p(r,i){const s={};i[0]&9|i[1]&256&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){J(e,r)}}}function Fr(n){let e,t=n[36]+"",r;return{c(){e=w("option"),r=ce(t),e.__value=n[36],e.value=e.__value},m(i,s){$(i,e,s),y(e,r)},p:M,d(i){i&&B(e)}}}function ch(n){let e,t,r,i,s,o,a,c,l,h,u,d,p=n[12],f=[];for(let g=0;g<p.length;g+=1)f[g]=Fr(xr(n,p,g));return{c(){e=w("div"),t=w("p"),t.textContent="algorithm set",r=D(),i=w("select");for(let g=0;g<f.length;g+=1)f[g].c();s=D(),o=w("div"),a=D(),c=w("p"),c.textContent="show scramble",l=D(),h=w("input"),n[6]===void 0&&Dt(()=>n[30].call(i)),O(o,"height","16px"),I(h,"type","checkbox"),O(e,"padding","16px")},m(g,_){$(g,e,_),y(e,t),y(e,r),y(e,i);for(let m=0;m<f.length;m+=1)f[m].m(i,null);Vn(i,n[6]),y(e,s),y(e,o),y(e,a),y(e,c),y(e,l),y(e,h),h.checked=n[8],u||(d=[ee(i,"change",n[30]),ee(i,"change",n[31]),ee(h,"change",n[32]),ee(h,"change",n[33])],u=!0)},p(g,_){if(_[0]&4096){p=g[12];let m;for(m=0;m<p.length;m+=1){const S=xr(g,p,m);f[m]?f[m].p(S,_):(f[m]=Fr(S),f[m].c(),f[m].m(i,null))}for(;m<f.length;m+=1)f[m].d(1);f.length=p.length}_[0]&4160&&Vn(i,g[6]),_[0]&256&&(h.checked=g[8])},d(g){g&&B(e),es(f,g),u=!1,Je(d)}}}function lh(n){let e,t,r,i=n[0].email+"",s,o,a,c,l;return{c(){e=w("div"),t=w("p"),r=ce("signed in as "),s=ce(i),o=D(),a=w("button"),a.textContent="Sign Out",I(a,"class","btn-primary"),O(e,"padding","12px")},m(h,u){$(h,e,u),y(e,t),y(t,r),y(t,s),y(e,o),y(e,a),c||(l=ee(a,"click",n[28]),c=!0)},p(h,u){u[0]&1&&i!==(i=h[0].email+"")&&Ht(s,i)},d(h){h&&B(e),c=!1,l()}}}function uh(n){let e,t,r,i,s,o,a,c,l,h,u,d,p,f,g,_,m,S,A,R;t=new Ll({props:{callback:n[18]}});function W(v){n[19](v)}let K={class:"mt-4"};n[1]!==void 0&&(K.value=n[1]),c=new Ul({props:K}),qe.push(()=>jn(c,"value",W));function Y(v){n[20](v)}let G={class:"mt-4"};return n[2]!==void 0&&(G.value=n[2]),u=new $l({props:G}),qe.push(()=>jn(u,"value",Y)),g=new Rl({props:{email:n[1],password:n[2],callback:n[21]}}),A=new Dl({props:{email:n[1],password:n[2],callback:n[22]}}),{c(){e=w("div"),X(t.$$.fragment),r=D(),i=w("div"),s=D(),o=w("p"),o.textContent="Or use email and password",a=D(),X(c.$$.fragment),h=D(),X(u.$$.fragment),p=D(),f=w("div"),X(g.$$.fragment),_=D(),m=w("div"),S=D(),X(A.$$.fragment),I(i,"class","w-full mt-4 bg-white"),O(i,"height","2px"),I(o,"class","text-white mt-4"),O(m,"width","16px"),I(f,"class","row mt-4"),I(e,"class","col"),O(e,"border-radius","16px"),O(e,"padding","16px"),O(e,"box-shadow","0 0 4px lightgray")},m(v,T){$(v,e,T),q(t,e,null),y(e,r),y(e,i),y(e,s),y(e,o),y(e,a),q(c,e,null),y(e,h),q(u,e,null),y(e,p),y(e,f),q(g,f,null),y(f,_),y(f,m),y(f,S),q(A,f,null),R=!0},p(v,T){const Q={};T[0]&1&&(Q.callback=v[18]),t.$set(Q);const j={};!l&&T[0]&2&&(l=!0,j.value=v[1],Wn(()=>l=!1)),c.$set(j);const z={};!d&&T[0]&4&&(d=!0,z.value=v[2],Wn(()=>d=!1)),u.$set(z);const b={};T[0]&2&&(b.email=v[1]),T[0]&4&&(b.password=v[2]),T[0]&1&&(b.callback=v[21]),g.$set(b);const L={};T[0]&2&&(L.email=v[1]),T[0]&4&&(L.password=v[2]),T[0]&1&&(L.callback=v[22]),A.$set(L)},i(v){R||(P(t.$$.fragment,v),P(c.$$.fragment,v),P(u.$$.fragment,v),P(g.$$.fragment,v),P(A.$$.fragment,v),R=!0)},o(v){N(t.$$.fragment,v),N(c.$$.fragment,v),N(u.$$.fragment,v),N(g.$$.fragment,v),N(A.$$.fragment,v),R=!1},d(v){v&&B(e),J(t),J(c),J(u),J(g),J(A)}}}function hh(n){let e,t,r;return{c(){e=w("button"),e.textContent="Start Training",I(e,"class","btn btn-primary mt-4")},m(i,s){$(i,e,s),t||(r=ee(e,"click",n[17]),t=!0)},p:M,i:M,o:M,d(i){i&&B(e),t=!1,r()}}}function dh(n){let e,t,r,i,s,o,a,c,l,h,u;r=new Qu({}),r.$on("click",n[14]);let d=n[3]==="train"&&Ur(n);const p=[rh,nh],f=[];function g(_,m){return _[3]==="landing"?0:_[3]==="train"?1:-1}return~(a=g(n))&&(c=f[a]=p[a](n)),h=new th({props:{open:n[10],onClose:n[35]}}),{c(){e=w("main"),t=w("nav"),X(r.$$.fragment),i=D(),d&&d.c(),s=D(),o=w("div"),c&&c.c(),l=D(),X(h.$$.fragment),I(t,"class","navbar"),O(t,"justify-content","space-between"),I(o,"class","row w-full h-full"),I(e,"class","col w-full h-full")},m(_,m){$(_,e,m),y(e,t),q(r,t,null),y(t,i),d&&d.m(t,null),y(e,s),y(e,o),~a&&f[a].m(o,null),y(e,l),q(h,e,null),u=!0},p(_,m){_[3]==="train"?d?(d.p(_,m),m[0]&8&&P(d,1)):(d=Ur(_),d.c(),P(d,1),d.m(t,null)):d&&(Pt(),N(d,1,1,()=>{d=null}),Mt());let S=a;a=g(_),a===S?~a&&f[a].p(_,m):(c&&(Pt(),N(f[S],1,1,()=>{f[S]=null}),Mt()),~a?(c=f[a],c?c.p(_,m):(c=f[a]=p[a](_),c.c()),P(c,1),c.m(o,null)):c=null);const A={};m[0]&1024&&(A.open=_[10]),m[0]&1024&&(A.onClose=_[35]),h.$set(A)},i(_){u||(P(r.$$.fragment,_),P(d),P(c),P(h.$$.fragment,_),u=!0)},o(_){N(r.$$.fragment,_),N(d),N(c),N(h.$$.fragment,_),u=!1},d(_){_&&B(e),J(r),d&&d.d(),~a&&f[a].d(),J(h)}}}function fh(n,e,t){let r=wl(),i="",s="",o="landing",a=!1,c=-1;function l(x){c===x?t(5,c=-1):t(5,c=x)}const h=qu();let u,d;u&&rt(r.uid,u).then(x=>{t(7,d=x)});let p=gl(),f="loading...";function g(){p&&(t(9,f="loading..."),Ju().then(x=>{t(9,f=zu(x))}))}let _=!1;const m=()=>t(10,_=!0),S=()=>l(0),A=()=>l(1),R=()=>t(3,o="train"),W=x=>t(0,r=x);function K(x){i=x,t(1,i)}function Y(x){s=x,t(2,s)}const G=x=>t(0,r=x),v=x=>t(0,r=x),T=x=>{Ku(x),t(6,u=fl()),u||t(6,u=h[0]),console.log({currAlgSet:u}),rt(r.uid,u).then(Qi=>{t(7,d=Qi),g()})},Q=()=>{rt(r.uid,u).then(x=>{t(7,d=x),t(4,a=!1)})},j=()=>{Nr(!1,r.uid,u).then(x=>{t(7,d=x),t(4,a=!1),g()})},z=()=>{Nr(!0,r.uid,u).then(x=>{t(7,d=x),t(4,a=!1),g()})},b=()=>t(4,a=!a),L=()=>{Sl(),t(3,o="landing"),t(0,r=null)},vt=()=>l(0);function et(){u=rs(this),t(6,u),t(12,h)}const Yi=()=>{rt(r.uid,u).then(x=>{t(7,d=x),g()}),pl(u)};function Xi(){p=this.checked,t(8,p)}return[r,i,s,o,a,c,u,d,p,f,_,l,h,g,m,S,A,R,W,K,Y,G,v,T,Q,j,z,b,L,vt,et,Yi,Xi,()=>{g(),ml(p)},()=>l(1),()=>t(10,_=!1)]}class ph extends ae{constructor(e){super(),oe(this,e,fh,dh,se,{},null,[-1,-1])}}new ph({target:document.getElementById("app")});
