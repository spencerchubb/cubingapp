(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function U(){}function he(n,e){for(const t in e)n[t]=e[t];return n}function ts(n){return n()}function nr(){return Object.create(null)}function st(n){n.forEach(ts)}function Un(n){return typeof n=="function"}function de(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function ui(n){return Object.keys(n).length===0}function ns(n,e,t,r){if(n){const s=rs(n,e,t,r);return n[0](s)}}function rs(n,e,t,r){return n[1]&&r?he(t.ctx.slice(),n[1](r(e))):t.ctx}function ss(n,e,t,r){if(n[2]&&r){const s=n[2](r(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|s[a];return i}return e.dirty|s}return e.dirty}function is(n,e,t,r,s,i){if(s){const o=rs(e,t,r,i);n.p(o,s)}}function os(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function _e(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function Ft(n){return n??""}function g(n,e){n.appendChild(e)}function K(n,e,t){n.insertBefore(e,t||null)}function W(n){n.parentNode&&n.parentNode.removeChild(n)}function hi(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function v(n){return document.createElement(n)}function oe(n){return document.createTextNode(n)}function k(){return oe(" ")}function di(){return oe("")}function ie(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function A(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function fi(n){return Array.from(n.childNodes)}function It(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function $t(n,e){n.value=e??""}function D(n,e,t,r){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}function rr(n,e){for(let t=0;t<n.options.length;t+=1){const r=n.options[t];if(r.__value===e){r.selected=!0;return}}n.selectedIndex=-1}function pi(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}let gt;function dt(n){gt=n}function gi(){if(!gt)throw new Error("Function called outside component initialization");return gt}function mi(n){gi().$$.on_mount.push(n)}function _i(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const Ze=[],rt=[],Dt=[],En=[],yi=Promise.resolve();let kn=!1;function vi(){kn||(kn=!0,yi.then(as))}function Ht(n){Dt.push(n)}function sr(n){En.push(n)}const on=new Set;let Ye=0;function as(){if(Ye!==0)return;const n=gt;do{try{for(;Ye<Ze.length;){const e=Ze[Ye];Ye++,dt(e),bi(e.$$)}}catch(e){throw Ze.length=0,Ye=0,e}for(dt(null),Ze.length=0,Ye=0;rt.length;)rt.pop()();for(let e=0;e<Dt.length;e+=1){const t=Dt[e];on.has(t)||(on.add(t),t())}Dt.length=0}while(Ze.length);for(;En.length;)En.pop()();kn=!1,on.clear(),dt(n)}function bi(n){if(n.fragment!==null){n.update(),st(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ht)}}const Pt=new Set;let He;function Vt(){He={r:0,c:[],p:He}}function Wt(){He.r||st(He.c),He=He.p}function P(n,e){n&&n.i&&(Pt.delete(n),n.i(e))}function N(n,e,t,r){if(n&&n.o){if(Pt.has(n))return;Pt.add(n),He.c.push(()=>{Pt.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function ir(n,e,t){const r=n.$$.props[e];r!==void 0&&(n.$$.bound[r]=t,t(n.$$.ctx[r]))}function X(n){n&&n.c()}function J(n,e,t,r){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),r||Ht(()=>{const o=n.$$.on_mount.map(ts).filter(Un);n.$$.on_destroy?n.$$.on_destroy.push(...o):st(o),n.$$.on_mount=[]}),i.forEach(Ht)}function Y(n,e){const t=n.$$;t.fragment!==null&&(st(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ii(n,e){n.$$.dirty[0]===-1&&(Ze.push(n),vi(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function fe(n,e,t,r,s,i,o,a=[-1]){const c=gt;dt(n);const l=n.$$={fragment:null,ctx:[],props:i,update:U,not_equal:s,bound:nr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:nr(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=t?t(n,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return l.ctx&&s(l.ctx[h],l.ctx[h]=p)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](p),u&&Ii(n,h)),d}):[],l.update(),u=!0,st(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=fi(e.target);l.fragment&&l.fragment.l(h),h.forEach(W)}else l.fragment&&l.fragment.c();e.intro&&P(n.$$.fragment),J(n,e.target,e.anchor,e.customElement),as()}dt(c)}class pe{$destroy(){Y(this,1),this.$destroy=U}$on(e,t){if(!Un(t))return U;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ui(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
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
 */const cs=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},wi=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ls={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wi(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ei=function(n){const e=cs(n);return ls.encodeByteArray(e,!0)},us=function(n){return Ei(n).replace(/\./g,"")},ki=function(n){try{return ls.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Si(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ti=()=>Si().__FIREBASE_DEFAULTS__,Ai=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ri=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ki(n[1]);return e&&JSON.parse(e)},Ci=()=>{try{return Ti()||Ai()||Ri()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Oi=()=>{var n;return(n=Ci())===null||n===void 0?void 0:n.config};/**
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
 */class Di{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}function Pi(){try{return typeof indexedDB=="object"}catch{return!1}}function Mi(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Li="FirebaseError";let Bn=class hs extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Li,Object.setPrototypeOf(this,hs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}},ds=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ni(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,a,r)}};function Ni(n,e){return n.replace(xi,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xi=/\{\$([^}]+)}/g;function Sn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(or(i)&&or(o)){if(!Sn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function or(n){return n!==null&&typeof n=="object"}let jt=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const $e="[DEFAULT]";/**
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
 */class Ui{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Di;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fi(e))try{this.getOrInitializeService({instanceIdentifier:$e})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=$e){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$e){return this.instances.has(e)}getOptions(e=$e){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bi(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$e){return this.component?this.component.multipleInstances?e:$e:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bi(n){return n===$e?void 0:n}function Fi(n){return n.instantiationMode==="EAGER"}/**
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
 */class $i{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ui(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Hi={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Vi=z.INFO,Wi={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},ji=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Wi[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let zi=class{constructor(e){this.name=e,this._logLevel=Vi,this._logHandler=ji,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}};const Ki=(n,e)=>e.some(t=>n instanceof t);let ar,cr;function Gi(){return ar||(ar=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qi(){return cr||(cr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fs=new WeakMap,Tn=new WeakMap,ps=new WeakMap,an=new WeakMap,Fn=new WeakMap;function Ji(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(xe(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&fs.set(t,n)}).catch(()=>{}),Fn.set(e,n),e}function Yi(n){if(Tn.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Tn.set(n,e)}let An={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ps.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Xi(n){An=n(An)}function Qi(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(cn(this),e,...t);return ps.set(r,e.sort?e.sort():[e]),xe(r)}:qi().includes(n)?function(...e){return n.apply(cn(this),e),xe(fs.get(this))}:function(...e){return xe(n.apply(cn(this),e))}}function Zi(n){return typeof n=="function"?Qi(n):(n instanceof IDBTransaction&&Yi(n),Ki(n,Gi())?new Proxy(n,An):n)}function xe(n){if(n instanceof IDBRequest)return Ji(n);if(an.has(n))return an.get(n);const e=Zi(n);return e!==n&&(an.set(n,e),Fn.set(e,n)),e}const cn=n=>Fn.get(n);function eo(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=xe(o);return r&&o.addEventListener("upgradeneeded",c=>{r(xe(o.result),c.oldVersion,c.newVersion,xe(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const to=["get","getKey","getAll","getAllKeys","count"],no=["put","add","delete","clear"],ln=new Map;function lr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ln.get(e))return ln.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=no.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||to.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return ln.set(e,i),i}Xi(n=>({...n,get:(e,t,r)=>lr(e,t)||n.get(e,t,r),has:(e,t)=>!!lr(e,t)||n.has(e,t)}));/**
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
 */class ro{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(so(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function so(n){const e=n.getComponent();return e?.type==="VERSION"}const Rn="@firebase/app",ur="0.9.1";/**
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
 */const ze=new zi("@firebase/app"),io="@firebase/app-compat",oo="@firebase/analytics-compat",ao="@firebase/analytics",co="@firebase/app-check-compat",lo="@firebase/app-check",uo="@firebase/auth",ho="@firebase/auth-compat",fo="@firebase/database",po="@firebase/database-compat",go="@firebase/functions",mo="@firebase/functions-compat",_o="@firebase/installations",yo="@firebase/installations-compat",vo="@firebase/messaging",bo="@firebase/messaging-compat",Io="@firebase/performance",wo="@firebase/performance-compat",Eo="@firebase/remote-config",ko="@firebase/remote-config-compat",So="@firebase/storage",To="@firebase/storage-compat",Ao="@firebase/firestore",Ro="@firebase/firestore-compat",Co="firebase",Oo="9.16.0";/**
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
 */const Cn="[DEFAULT]",Do={[Rn]:"fire-core",[io]:"fire-core-compat",[ao]:"fire-analytics",[oo]:"fire-analytics-compat",[lo]:"fire-app-check",[co]:"fire-app-check-compat",[uo]:"fire-auth",[ho]:"fire-auth-compat",[fo]:"fire-rtdb",[po]:"fire-rtdb-compat",[go]:"fire-fn",[mo]:"fire-fn-compat",[_o]:"fire-iid",[yo]:"fire-iid-compat",[vo]:"fire-fcm",[bo]:"fire-fcm-compat",[Io]:"fire-perf",[wo]:"fire-perf-compat",[Eo]:"fire-rc",[ko]:"fire-rc-compat",[So]:"fire-gcs",[To]:"fire-gcs-compat",[Ao]:"fire-fst",[Ro]:"fire-fst-compat","fire-js":"fire-js",[Co]:"fire-js-all"};/**
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
 */const zt=new Map,On=new Map;function Po(n,e){try{n.container.addComponent(e)}catch(t){ze.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mt(n){const e=n.name;if(On.has(e))return ze.debug(`There were multiple attempts to register component ${e}.`),!1;On.set(e,n);for(const t of zt.values())Po(t,n);return!0}function gs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Mo={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ue=new ds("app","Firebase",Mo);/**
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
 */class Lo{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
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
 */const Xt=Oo;function ms(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cn,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ue.create("bad-app-name",{appName:String(s)});if(t||(t=Oi()),!t)throw Ue.create("no-options");const i=zt.get(s);if(i){if(Sn(t,i.options)&&Sn(r,i.config))return i;throw Ue.create("duplicate-app",{appName:s})}const o=new $i(s);for(const c of On.values())o.addComponent(c);const a=new Lo(t,r,o);return zt.set(s,a),a}function No(n=Cn){const e=zt.get(n);if(!e&&n===Cn)return ms();if(!e)throw Ue.create("no-app",{appName:n});return e}function et(n,e,t){var r;let s=(r=Do[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ze.warn(a.join(" "));return}mt(new jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xo="firebase-heartbeat-database",Uo=1,_t="firebase-heartbeat-store";let un=null;function _s(){return un||(un=eo(xo,Uo,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(_t)}}}).catch(n=>{throw Ue.create("idb-open",{originalErrorMessage:n.message})})),un}async function Bo(n){try{return(await _s()).transaction(_t).objectStore(_t).get(ys(n))}catch(e){if(e instanceof Bn)ze.warn(e.message);else{const t=Ue.create("idb-get",{originalErrorMessage:e?.message});ze.warn(t.message)}}}async function hr(n,e){try{const r=(await _s()).transaction(_t,"readwrite");return await r.objectStore(_t).put(e,ys(n)),r.done}catch(t){if(t instanceof Bn)ze.warn(t.message);else{const r=Ue.create("idb-set",{originalErrorMessage:t?.message});ze.warn(r.message)}}}function ys(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Fo=1024,$o=30*24*60*60*1e3;class Ho{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wo(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=$o}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dr(),{heartbeatsToSend:t,unsentEntries:r}=Vo(this._heartbeatsCache.heartbeats),s=us(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function dr(){return new Date().toISOString().substring(0,10)}function Vo(n,e=Fo){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fr(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),fr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Wo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pi()?Mi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return hr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return hr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fr(n){return us(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function jo(n){mt(new jt("platform-logger",e=>new ro(e),"PRIVATE")),mt(new jt("heartbeat",e=>new Ho(e),"PRIVATE")),et(Rn,ur,n),et(Rn,ur,"esm2017"),et("fire-js","")}jo("");var zo="firebase",Ko="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(zo,Ko,"app");/**
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
 */const Go=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},qo=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Go(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},vs=function(n){try{return Jo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xo=()=>Yo().__FIREBASE_DEFAULTS__,Qo=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vs(n[1]);return e&&JSON.parse(e)},bs=()=>{try{return Xo()||Qo()||Zo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ea=n=>{var e,t;return(t=(e=bs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Is=n=>{var e;return(e=bs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ta(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function na(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ra(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sa(){const n=te();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}/**
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
 */const ia="FirebaseError";class it extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ia,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qt.prototype.create)}}class Qt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?oa(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new it(s,a,r)}}function oa(n,e){return n.replace(aa,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const aa=/\{\$([^}]+)}/g;function ca(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ws(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(pr(i)&&pr(o)){if(!ws(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function pr(n){return n!==null&&typeof n=="object"}/**
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
 */function wt(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ut(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function la(n,e){const t=new ua(n,e);return t.subscribe.bind(t)}class ua{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ha(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=hn),s.error===void 0&&(s.error=hn),s.complete===void 0&&(s.complete=hn);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ha(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function hn(){}/**
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
 */function qe(n){return n&&n._delegate?n._delegate:n}/**
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
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const da={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},fa=V.INFO,pa={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},ga=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=pa[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ma{constructor(e){this.name=e,this._logLevel=fa,this._logHandler=ga,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?da[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}function $n(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}class gr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}function Es(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _a=Es,ks=new Qt("auth","Firebase",Es());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new ma("@firebase/auth");function Mt(n,...e){mr.logLevel<=V.ERROR&&mr.error(`Auth (${Xt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,...e){throw Hn(n,...e)}function ge(n,...e){return Hn(n,...e)}function Ss(n,e,t){const r=Object.assign(Object.assign({},_a()),{[e]:t});return new Qt("auth","Firebase",r).create(e,{appName:n.name})}function ya(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&le(n,"argument-error"),Ss(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ks.create(n,...e)}function I(n,e,...t){if(!n)throw Hn(e,...t)}function Ie(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Mt(e),new Error(e)}function Ee(n,e){n||Ie(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map;function we(n){Ee(n instanceof Function,"Expected a class definition");let e=_r.get(n);return e?(Ee(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_r.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n,e){const t=gs(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ws(i,e??{}))return s;le(s,"already-initialized")}return t.initialize({options:e})}function ba(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(we);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ia(){return yr()==="http:"||yr()==="https:"}function yr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ia()||na()||"connection"in navigator)?navigator.onLine:!0}function Ea(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ee(t>e,"Short delay should be less than long delay!"),this.isMobile=ta()||ra()}get(){return wa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n,e){Ee(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Et(3e4,6e4);function kt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function St(n,e,t,r,s={}){return As(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=wt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Ts.fetch()(Rs(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function As(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ka),e);try{const s=new Ta(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ct(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ct(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ct(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ct(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ss(n,u,l);le(n,u)}}catch(s){if(s instanceof it)throw s;le(n,"network-request-failed")}}async function Tt(n,e,t,r,s={}){const i=await St(n,e,t,r,s);return"mfaPendingCredential"in i&&le(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Rs(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Vn(n.config,s):`${n.config.apiScheme}://${s}`}class Ta{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ge(this.auth,"network-request-failed")),Sa.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ct(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ge(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(n,e){return St(n,"POST","/v1/accounts:delete",e)}async function Ra(n,e){return St(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ca(n,e=!1){const t=qe(n),r=await t.getIdToken(e),s=Wn(r);I(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:ft(dn(s.auth_time)),issuedAtTime:ft(dn(s.iat)),expirationTime:ft(dn(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function dn(n){return Number(n)*1e3}function Wn(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Mt("JWT malformed, contained fewer than 3 sections"),null;try{const s=vs(t);return s?JSON.parse(s):(Mt("Failed to decode base64 JWT payload"),null)}catch(s){return Mt("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Oa(n){const e=Wn(n);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof it&&Da(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Da({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ft(this.lastLoginAt),this.creationTime=ft(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kt(n){var e;const t=n.auth,r=await n.getIdToken(),s=await yt(n,Ra(t,{idToken:r}));I(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Na(i.providerUserInfo):[],a=La(n.providerData,o),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!a?.length,u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Cs(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Ma(n){const e=qe(n);await Kt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function La(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Na(n){return n.map(e=>{var{providerId:t}=e,r=$n(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(n,e){const t=await As(n,{},async()=>{const r=wt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Rs(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ts.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await xa(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new vt;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(I(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(I(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vt,this.toJSON())}_performRefresh(){return Ie("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,e){I(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class We{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=$n(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await yt(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ca(this,e)}reload(){return Ma(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new We(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Kt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yt(this,Aa(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=t.createdAt)!==null&&l!==void 0?l:void 0,M=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:S,isAnonymous:$,providerData:C,stsTokenManager:j}=t;I(R&&j,e,"internal-error");const B=vt.fromJSON(this.name,j);I(typeof R=="string",e,"internal-error"),Se(h,e.name),Se(d,e.name),I(typeof S=="boolean",e,"internal-error"),I(typeof $=="boolean",e,"internal-error"),Se(f,e.name),Se(p,e.name),Se(y,e.name),Se(m,e.name),Se(_,e.name),Se(M,e.name);const H=new We({uid:R,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:$,photoURL:p,phoneNumber:f,tenantId:y,stsTokenManager:B,createdAt:_,lastLoginAt:M});return C&&Array.isArray(C)&&(H.providerData=C.map(L=>Object.assign({},L))),m&&(H._redirectEventId=m),H}static async _fromIdTokenResponse(e,t,r=!1){const s=new vt;s.updateFromServerResponse(t);const i=new We({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Kt(i),i}}/**
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
 */class Os{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Os.type="NONE";const vr=Os;/**
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
 */function Lt(n,e,t){return`firebase:${n}:${e}:${t}`}class tt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Lt(this.userKey,s.apiKey,i),this.fullPersistenceKey=Lt("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?We._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tt(we(vr),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||we(vr);const o=Lt(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=We._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new tt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new tt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ms(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ds(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ns(e))return"Blackberry";if(xs(e))return"Webos";if(jn(e))return"Safari";if((e.includes("chrome/")||Ps(e))&&!e.includes("edge/"))return"Chrome";if(Ls(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Ds(n=te()){return/firefox\//i.test(n)}function jn(n=te()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ps(n=te()){return/crios\//i.test(n)}function Ms(n=te()){return/iemobile/i.test(n)}function Ls(n=te()){return/android/i.test(n)}function Ns(n=te()){return/blackberry/i.test(n)}function xs(n=te()){return/webos/i.test(n)}function Zt(n=te()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ua(n=te()){var e;return Zt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ba(){return sa()&&document.documentMode===10}function Us(n=te()){return Zt(n)||Ls(n)||xs(n)||Ns(n)||/windows phone/i.test(n)||Ms(n)}function Fa(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n,e=[]){let t;switch(n){case"Browser":t=br(te());break;case"Worker":t=`${br(te())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xt}/${r}`}/**
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
 */class $a{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ir(this),this.idTokenSubscription=new Ir(this),this.beforeStateQueue=new $a(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ks,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=we(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await tt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kt(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ea()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?qe(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(we(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&we(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await tt.create(this,[we(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function ot(n){return qe(n)}class Ir{constructor(e){this.auth=e,this.observer=null,this.addObserver=la(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Va(n,e,t){const r=ot(n);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!t?.disableWarnings,i=Fs(e),{host:o,port:a}=Wa(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ja()}function Fs(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Wa(n){const e=Fs(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wr(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wr(o)}}}function wr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ja(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ie("not implemented")}_getIdTokenResponse(e){return Ie("not implemented")}_linkToIdToken(e,t){return Ie("not implemented")}_getReauthenticationResolver(e){return Ie("not implemented")}}async function za(n,e){return St(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(n,e){return Tt(n,"POST","/v1/accounts:signInWithPassword",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(n,e){return Tt(n,"POST","/v1/accounts:signInWithEmailLink",kt(n,e))}async function qa(n,e){return Tt(n,"POST","/v1/accounts:signInWithEmailLink",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends zn{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new bt(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new bt(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ka(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ga(e,{email:this._email,oobCode:this._password});default:le(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return za(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qa(e,{idToken:t,email:this._email,oobCode:this._password});default:le(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(n,e){return Tt(n,"POST","/v1/accounts:signInWithIdp",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="http://localhost";class Ke extends zn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):le("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=$n(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ke(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return nt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,nt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nt(e,t)}buildRequest(){const e={requestUri:Ja,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xa(n){const e=lt(ut(n)).link,t=e?lt(ut(e)).deep_link_id:null,r=lt(ut(n)).deep_link_id;return(r?lt(ut(r)).link:null)||r||t||e||n}class Kn{constructor(e){var t,r,s,i,o,a;const c=lt(ut(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Ya((s=c.mode)!==null&&s!==void 0?s:null);I(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Xa(e);try{return new Kn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.providerId=at.PROVIDER_ID}static credential(e,t){return bt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Kn.parseLink(t);return I(r,"argument-error"),bt._fromEmailAndCode(e,r.code,r.tenantId)}}at.PROVIDER_ID="password";at.EMAIL_PASSWORD_SIGN_IN_METHOD="password";at.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class At extends Gn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends At{constructor(){super("facebook.com")}static credential(e){return Ke._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}Te.FACEBOOK_SIGN_IN_METHOD="facebook.com";Te.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends At{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ke._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return be.credential(t,r)}catch{return null}}}be.GOOGLE_SIGN_IN_METHOD="google.com";be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends At{constructor(){super("github.com")}static credential(e){return Ke._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.GITHUB_SIGN_IN_METHOD="github.com";Ae.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends At{constructor(){super("twitter.com")}static credential(e,t){return Ke._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Re.credential(t,r)}catch{return null}}}Re.TWITTER_SIGN_IN_METHOD="twitter.com";Re.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(n,e){return Tt(n,"POST","/v1/accounts:signUp",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await We._fromIdTokenResponse(e,r,s),o=Er(r);return new Ge({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Er(r);return new Ge({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Er(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends it{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gt.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Gt(e,t,r,s)}}function $s(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gt._fromErrorAndOperation(n,i,e,r):i})}async function Za(n,e,t=!1){const r=await yt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ge._forOperation(n,"link",r)}/**
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
 */async function ec(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await yt(n,$s(r,s,e,n),t);I(i.idToken,r,"internal-error");const o=Wn(i.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(n.uid===a,r,"user-mismatch"),Ge._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&le(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(n,e,t=!1){const r="signIn",s=await $s(n,r,e),i=await Ge._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function tc(n,e){return Hs(ot(n),e)}async function nc(n,e,t){const r=ot(n),s=await Qa(r,{returnSecureToken:!0,email:e,password:t}),i=await Ge._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function rc(n,e,t){return tc(qe(n),at.credential(e,t))}function sc(n,e,t,r){return qe(n).onIdTokenChanged(e,t,r)}function ic(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}const qt="__sak";/**
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
 */class Vs{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qt,"1"),this.storage.removeItem(qt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){const n=te();return jn(n)||Zt(n)}const ac=1e3,cc=10;class Ws extends Vs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oc()&&Fa(),this.fallbackToPolling=Us(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ba()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cc):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ac)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ws.type="LOCAL";const lc=Ws;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Vs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}js.type="SESSION";const zs=js;/**
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
 */function uc(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class en{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new en(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,i)),c=await uc(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}en.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class hc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=qn("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return window}function dc(n){me().location.href=n}/**
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
 */function Ks(){return typeof me().WorkerGlobalScope<"u"&&typeof me().importScripts=="function"}async function fc(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pc(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function gc(){return Ks()?self:null}/**
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
 */const Gs="firebaseLocalStorageDb",mc=1,Jt="firebaseLocalStorage",qs="fbase_key";class Rt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tn(n,e){return n.transaction([Jt],e?"readwrite":"readonly").objectStore(Jt)}function _c(){const n=indexedDB.deleteDatabase(Gs);return new Rt(n).toPromise()}function Pn(){const n=indexedDB.open(Gs,mc);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Jt,{keyPath:qs})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Jt)?e(r):(r.close(),await _c(),e(await Pn()))})})}async function kr(n,e,t){const r=tn(n,!0).put({[qs]:e,value:t});return new Rt(r).toPromise()}async function yc(n,e){const t=tn(n,!1).get(e),r=await new Rt(t).toPromise();return r===void 0?null:r.value}function Sr(n,e){const t=tn(n,!0).delete(e);return new Rt(t).toPromise()}const vc=800,bc=3;class Js{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>bc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ks()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=en._getInstance(gc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fc(),!this.activeServiceWorker)return;this.sender=new hc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pn();return await kr(e,qt,"1"),await Sr(e,qt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>kr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>yc(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=tn(s,!1).getAll();return new Rt(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Js.type="LOCAL";const Ic=Js;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Ec(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ge("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",wc().appendChild(r)})}function kc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Et(3e4,6e4);/**
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
 */function Ys(n,e){return e?we(e):(I(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Jn extends zn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sc(n){return Hs(n.auth,new Jn(n),n.bypassAuthState)}function Tc(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),ec(t,new Jn(n),n.bypassAuthState)}async function Ac(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),Za(t,new Jn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sc;case"linkViaPopup":case"linkViaRedirect":return Ac;case"reauthViaPopup":case"reauthViaRedirect":return Tc;default:le(this.auth,"internal-error")}}resolve(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Et(2e3,1e4);async function Cc(n,e,t){const r=ot(n);ya(n,e,Gn);const s=Ys(r,t);return new Ve(r,"signInViaPopup",e,s).executeNotNull()}class Ve extends Xs{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ve.currentPopupAction&&Ve.currentPopupAction.cancel(),Ve.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const e=qn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ve.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Rc.get())};e()}}Ve.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="pendingRedirect",Nt=new Map;class Dc extends Xs{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Nt.get(this.auth._key());if(!e){try{const r=await Pc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Nt.set(this.auth._key(),e)}return this.bypassAuthState||Nt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pc(n,e){const t=Nc(e),r=Lc(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Mc(n,e){Nt.set(n._key(),e)}function Lc(n){return we(n._redirectPersistence)}function Nc(n){return Lt(Oc,n.config.apiKey,n.name)}async function xc(n,e,t=!1){const r=ot(n),s=Ys(r,e),o=await new Dc(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=10*60*1e3;class Bc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Qs(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ge(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tr(e))}saveEventToCache(e){this.cachedEventUids.add(Tr(e)),this.lastProcessedEventTime=Date.now()}}function Tr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Qs({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Fc(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qs(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(n,e={}){return St(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vc=/^https?/;async function Wc(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $c(n);for(const t of e)try{if(jc(t))return}catch{}le(n,"unauthorized-domain")}function jc(n){const e=Dn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Vc.test(t))return!1;if(Hc.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zc=new Et(3e4,6e4);function Ar(){const n=me().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Kc(n){return new Promise((e,t)=>{var r,s,i;function o(){Ar(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ar(),t(ge(n,"network-request-failed"))},timeout:zc.get()})}if(!((s=(r=me().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=me().gapi)===null||i===void 0)&&i.load)o();else{const a=kc("iframefcb");return me()[a]=()=>{gapi.load?o():t(ge(n,"network-request-failed"))},Ec(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw xt=null,e})}let xt=null;function Gc(n){return xt=xt||Kc(n),xt}/**
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
 */const qc=new Et(5e3,15e3),Jc="__/auth/iframe",Yc="emulator/auth/iframe",Xc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zc(n){const e=n.config;I(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vn(e,Yc):`https://${n.config.authDomain}/${Jc}`,r={apiKey:e.apiKey,appName:n.name,v:Xt},s=Qc.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${wt(r).slice(1)}`}async function el(n){const e=await Gc(n),t=me().gapi;return I(t,n,"internal-error"),e.open({where:document.body,url:Zc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xc,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ge(n,"network-request-failed"),a=me().setTimeout(()=>{i(o)},qc.get());function c(){me().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const tl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nl=500,rl=600,sl="_blank",il="http://localhost";class Rr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ol(n,e,t,r=nl,s=rl){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tl),{width:r.toString(),height:s.toString(),top:i,left:o}),l=te().toLowerCase();t&&(a=Ps(l)?sl:t),Ds(l)&&(e=e||il,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Ua(l)&&a!=="_self")return al(e||"",a),new Rr(null);const h=window.open(e||"",a,u);I(h,n,"popup-blocked");try{h.focus()}catch{}return new Rr(h)}function al(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const cl="__/auth/handler",ll="emulator/auth/handler";function Cr(n,e,t,r,s,i){I(n.config.authDomain,n,"auth-domain-config-required"),I(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Xt,eventId:s};if(e instanceof Gn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ca(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof At){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ul(n)}?${wt(a).slice(1)}`}function ul({config:n}){return n.emulator?Vn(n,ll):`https://${n.authDomain}/${cl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="webStorageSupport";class hl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zs,this._completeRedirectFn=xc,this._overrideRedirectResult=Mc}async _openPopup(e,t,r,s){var i;Ee((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Cr(e,t,r,Dn(),s);return ol(e,o,qn())}async _openRedirect(e,t,r,s){return await this._originValidation(e),dc(Cr(e,t,r,Dn(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ee(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await el(e),r=new Bc(e);return t.register("authEvent",s=>(I(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fn,{type:fn},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[fn];o!==void 0&&t(!!o),le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Us()||jn()||Zt()}}const dl=hl;var Or="@firebase/auth",Dr="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gl(n){mt(new gr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{I(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),I(!o?.includes(":"),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bs(n)},u=new Ha(a,c,l);return ba(u,t),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),mt(new gr("auth-internal",e=>{const t=ot(e.getProvider("auth").getImmediate());return(r=>new fl(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Or,Dr,pl(n)),et(Or,Dr,"esm2017")}/**
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
 */const ml=5*60,_l=Is("authIdTokenMaxAge")||ml;let Pr=null;const yl=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>_l)return;const s=t?.token;Pr!==s&&(Pr=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vl(n=No()){const e=gs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=va(n,{popupRedirectResolver:dl,persistence:[Ic,lc,zs]}),r=Is("authTokenSyncURL");if(r){const i=yl(r);ic(t,i,()=>i(t.currentUser)),sc(t,o=>i(o))}const s=ea("auth");return s&&Va(t,`http://${s}`),t}gl("Browser");const bl=()=>{},Il="https://api.cubingapp.com:3000",wl={apiKey:"AIzaSyCnwuoBqAR6cx7uqzxf7iEC99sZf36sZZA",authDomain:"virtual-cube.firebaseapp.com",projectId:"virtual-cube",storageBucket:"virtual-cube.appspot.com",messagingSenderId:"371073332227",appId:"1:371073332227:web:c96d3137080aecfe634a36",measurementId:"G-YR33BDCQDY"},El=ms(wl),nn=()=>vl(El);async function rn(n,e){return await fetch(`${Il}${n}`,{method:"POST",body:JSON.stringify(e)}).then(r=>r.json())}async function kl(n){return rn("/user",{email:n})}const Zs="algSet",Mr="casesToday",ei="showScramble",Yn="user";function Sl(){return localStorage.getItem(Zs)??""}function Tl(n){localStorage.setItem(Zs,n)}let Mn={get:()=>{const n=localStorage.getItem(Mr);if(n){const e=JSON.parse(n);return{date:new Date(e.date),count:e.count}}return{date:new Date,count:0}},set:n=>{localStorage.setItem(Mr,JSON.stringify(n))}};function Al(){return Dl(ei)??!1}function Rl(n){Pl(ei,n)}function Cl(){return localStorage.getItem(Yn)}function ti(){localStorage.removeItem(Yn)}function Ol(n){localStorage.setItem(Yn,n)}function Dl(n){const e=localStorage.getItem(n);return e===null?null:e=="1"}function Pl(n,e){localStorage.setItem(n,e?"1":"0")}class ni{email;uid;constructor(){}toJsonString(){return JSON.stringify({email:this.email,uid:this.uid})}fromJsonString(e){const t=JSON.parse(e);this.email=t.email,this.uid=t.uid}}function ri(n){bl("Signed in as "+n.email+" with uid "+n.uid)}function Ml(){const n=Cl();if(!n)return null;const e=new ni;return e.fromJsonString(n),!e.email||!e.uid?(ti(),null):(ri(e),e)}function Xn(n,e){const t=new ni;t.email=n.user.email,kl(t.email).then(r=>{t.uid=r.uid,Ol(t.toJsonString()),ri(t),e(t)})}function Ll(n){const e=nn(),t=new be;Cc(e,t).then(r=>{Xn(r,n)}).catch(r=>{console.log(r)})}function Nl(n,e,t){const r=nn();nc(r,n,e).then(s=>{Xn(s,t)}).catch(s=>{console.log(s.message)})}function xl(n,e,t){const r=nn();rc(r,n,e).then(s=>{Xn(s,t)}).catch(s=>{console.log(s.message)})}function Ul(){nn().signOut(),ti()}function Bl(n){let e,t,r;return{c(){e=v("button"),e.textContent="Create Account",A(e,"class","btn-primary")},m(s,i){K(s,e,i),t||(r=ie(e,"click",n[3]),t=!0)},p:U,i:U,o:U,d(s){s&&W(e),t=!1,r()}}}function Fl(n,e,t){let{email:r}=e,{password:s}=e,{callback:i}=e;const o=()=>{Nl(r,s,i)};return n.$$set=a=>{"email"in a&&t(0,r=a.email),"password"in a&&t(1,s=a.password),"callback"in a&&t(2,i=a.callback)},[r,s,i,o]}class $l extends pe{constructor(e){super(),fe(this,e,Fl,Bl,de,{email:0,password:1,callback:2})}}function Hl(n){let e,t,r;return{c(){e=v("button"),e.textContent="Sign In",A(e,"class","btn-primary")},m(s,i){K(s,e,i),t||(r=ie(e,"click",n[3]),t=!0)},p:U,i:U,o:U,d(s){s&&W(e),t=!1,r()}}}function Vl(n,e,t){let{email:r}=e,{password:s}=e,{callback:i}=e;const o=()=>{xl(r,s,i)};return n.$$set=a=>{"email"in a&&t(0,r=a.email),"password"in a&&t(1,s=a.password),"callback"in a&&t(2,i=a.callback)},[r,s,i,o]}class Wl extends pe{constructor(e){super(),fe(this,e,Vl,Hl,de,{email:0,password:1,callback:2})}}function jl(n){let e,t,r;return{c(){e=v("button"),e.innerHTML=`<div class="row"><svg style="width: 20px; height: 20px; margin-right: 0.6rem;" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path><path fill="none" d="M2 2h44v44H2z"></path></svg> 
        <p style="font-size: 1rem; color: black;">Sign in with Google</p></div>`,A(e,"class","btn-white")},m(s,i){K(s,e,i),t||(r=ie(e,"click",n[1]),t=!0)},p:U,i:U,o:U,d(s){s&&W(e),t=!1,r()}}}function zl(n,e,t){let{callback:r}=e;const s=()=>Ll(r);return n.$$set=i=>{"callback"in i&&t(0,r=i.callback)},[r,s]}class Kl extends pe{constructor(e){super(),fe(this,e,zl,jl,de,{callback:0})}}function Gl(n){let e,t,r,s;return{c(){e=v("input"),A(e,"class",t=n[1].class),A(e,"type","email"),A(e,"placeholder","Email")},m(i,o){K(i,e,o),$t(e,n[0]),r||(s=ie(e,"input",n[2]),r=!0)},p(i,[o]){o&2&&t!==(t=i[1].class)&&A(e,"class",t),o&1&&e.value!==i[0]&&$t(e,i[0])},i:U,o:U,d(i){i&&W(e),r=!1,s()}}}function ql(n,e,t){let{value:r}=e;function s(){r=this.value,t(0,r)}return n.$$set=i=>{t(1,e=he(he({},e),_e(i))),"value"in i&&t(0,r=i.value)},e=_e(e),[r,e,s]}class Jl extends pe{constructor(e){super(),fe(this,e,ql,Gl,de,{value:0})}}function Yl(n){let e,t,r,s;return{c(){e=v("input"),A(e,"class",t=n[1].class),A(e,"type","password"),A(e,"placeholder","Password")},m(i,o){K(i,e,o),$t(e,n[0]),r||(s=ie(e,"input",n[2]),r=!0)},p(i,[o]){o&2&&t!==(t=i[1].class)&&A(e,"class",t),o&1&&e.value!==i[0]&&$t(e,i[0])},i:U,o:U,d(i){i&&W(e),r=!1,s()}}}function Xl(n,e,t){let{value:r}=e;function s(){r=this.value,t(0,r)}return n.$$set=i=>{t(1,e=he(he({},e),_e(i))),"value"in i&&t(0,r=i.value)},e=_e(e),[r,e,s]}class Ql extends pe{constructor(e){super(),fe(this,e,Xl,Yl,de,{value:0})}}function Zl(n){let e,t,r,s;const i=n[6].default,o=ns(i,n,n[5],null);return{c(){e=v("div"),o&&o.c(),A(e,"class",t=Ft("hoverable "+n[1].class)+" svelte-euathk"),A(e,"style",r=n[0]+n[1].style)},m(a,c){K(a,e,c),o&&o.m(e,null),s=!0},p(a,[c]){o&&o.p&&(!s||c&32)&&is(o,i,a,a[5],s?ss(i,a[5],c,null):os(a[5]),null),(!s||c&2&&t!==(t=Ft("hoverable "+a[1].class)+" svelte-euathk"))&&A(e,"class",t),(!s||c&2&&r!==(r=a[0]+a[1].style))&&A(e,"style",r)},i(a){s||(P(o,a),s=!0)},o(a){N(o,a),s=!1},d(a){a&&W(e),o&&o.d(a)}}}function eu(n,e,t){let{$$slots:r={},$$scope:s}=e,{background:i="transparent"}=e,{borderRadius:o="inherit"}=e,{hovBackground:a="transparent"}=e,c=`
    --background: ${i};
    --border-radius: ${o};
    --hov-background: ${a};
    `;return n.$$set=l=>{t(1,e=he(he({},e),_e(l))),"background"in l&&t(2,i=l.background),"borderRadius"in l&&t(3,o=l.borderRadius),"hovBackground"in l&&t(4,a=l.hovBackground),"$$scope"in l&&t(5,s=l.$$scope)},e=_e(e),[c,e,i,o,a,s,r]}class pt extends pe{constructor(e){super(),fe(this,e,eu,Zl,de,{background:2,borderRadius:3,hovBackground:4})}}function tu(n){let e,t,r,s,i;return{c(){e=v("button"),A(e,"class",t=Ft(n[1].class)+" svelte-18z7rew"),A(e,"style",r=n[1].style)},m(o,a){K(o,e,a),e.innerHTML=n[0],s||(i=ie(e,"click",n[4]),s=!0)},p(o,[a]){a&2&&t!==(t=Ft(o[1].class)+" svelte-18z7rew")&&A(e,"class",t),a&2&&r!==(r=o[1].style)&&A(e,"style",r)},i:U,o:U,d(o){o&&W(e),s=!1,i()}}}function nu(n,e,t){let{name:r}=e,{stroke:s="white"}=e,o={happy:`<svg width="100%" height="100%" stroke="${s}" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
            <circle cx="25" cy="25" r="22" />
            <circle cx="18" cy="20" r="3" />
            <circle cx="32" cy="20" r="3" />
            <path d="M 15,33 Q 25,40 35,33"/>
        </svg>`,menu:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
            <line x1="3" y1="4" x2="21" y2="4"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="20" x2="21" y2="20"></line>
        </svg>`,profile:`<svg x="0px" y="0px" stroke="${s}" fill="white" viewBox="0 0 54 54" xml:space="preserve">
            <circle style="stroke-width: 3; fill-opacity: 0; opacity: 1;" cx="26.5" cy="26.5" r="24" />
            <circle style="stroke-width: 3; fill-opacity: 0; opacity: 1;" cx="26.5" cy="20" r="10" />
            <path fill="none" stroke="white" stroke-width="3" d="M 8,42 Q 12,28 20,28 M 45,42 Q 41,28 33,28 "/>
        </svg>`,retry:`<svg width="100%" height="100%" stroke="${s}" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50">
            <path d="M 42,32 A 20,20,0,1,1,42,18"/>
            <path fill="white" fill-opacity="1" d="M 44,22 L 34,17 L 45,12  Z"/>
        </svg>`,sad:`<svg width="100%" height="100%" stroke="${s}" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
            <circle cx="25" cy="25" r="22" />
            <circle cx="18" cy="20" r="3" />
            <circle cx="32" cy="20" r="3" />
            <path d="M 15,35 Q 25,28 35,35"/>
        </svg>`,settings:`<svg x="0px" y="0px" stroke="${s}" fill="white" viewBox="0 0 54 54" xml:space="preserve">
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
        </svg>`,x:`<svg width="24" height="24" viewBox="0 0 24 24" stroke="${s}">
            <path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
        </svg>`}[r];function a(c){_i.call(this,n,c)}return n.$$set=c=>{t(1,e=he(he({},e),_e(c))),"name"in c&&t(2,r=c.name),"stroke"in c&&t(3,s=c.stroke)},e=_e(e),[o,e,r,s,a]}class Be extends pe{constructor(e){super(),fe(this,e,nu,tu,de,{name:2,stroke:3})}}function ru(n){let e,t;return e=new Be({props:{name:"x",style:"padding: 4px;"}}),e.$on("click",n[3]),{c(){X(e.$$.fragment)},m(r,s){J(e,r,s),t=!0},p:U,i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function su(n){let e,t,r,s,i,o,a,c,l;o=new pt({props:{hovBackground:"#444",borderRadius:"4px",$$slots:{default:[ru]},$$scope:{ctx:n}}});const u=n[2].default,h=ns(u,n,n[4],null);return{c(){e=v("div"),t=v("div"),r=v("p"),s=oe(n[0]),i=k(),X(o.$$.fragment),a=k(),c=v("div"),h&&h.c(),A(t,"class","drawer-header svelte-7uv2k9"),A(c,"class","drawer-body"),A(e,"class","drawer svelte-7uv2k9")},m(d,f){K(d,e,f),g(e,t),g(t,r),g(r,s),g(t,i),J(o,t,null),g(e,a),g(e,c),h&&h.m(c,null),l=!0},p(d,[f]){(!l||f&1)&&It(s,d[0]);const p={};f&18&&(p.$$scope={dirty:f,ctx:d}),o.$set(p),h&&h.p&&(!l||f&16)&&is(h,u,d,d[4],l?ss(u,d[4],f,null):os(d[4]),null)},i(d){l||(P(o.$$.fragment,d),P(h,d),l=!0)},o(d){N(o.$$.fragment,d),N(h,d),l=!1},d(d){d&&W(e),Y(o),h&&h.d(d)}}}function iu(n,e,t){let{$$slots:r={},$$scope:s}=e,{title:i}=e,{close:o}=e;const a=()=>o();return n.$$set=c=>{"title"in c&&t(0,i=c.title),"close"in c&&t(1,o=c.close),"$$scope"in c&&t(4,s=c.$$scope)},[i,o,r,a,s]}class si extends pe{constructor(e){super(),fe(this,e,iu,su,de,{title:0,close:1})}}const ou=[1,1,1,1],au=[.5,.5,.5,1],cu=[1,1,0,1],lu=[0,1,0,1],uu=[0,0,1,1],hu=[1,.5,0,1],du=[1,0,0,1],fu=[0,0,0,1],Lr=[ou,lu,cu,uu,hu,du];function Nr(n){return(n<0||n>=Lr.length)&&console.error("Invalid face: "+n),Lr[n]}function xr(n,e){return Math.floor(n/T(e.layers))}function pu(n){return n[je(n.length)]}function je(n){return Math.floor(Math.random()*n)}function gu(n){let e=n.length;for(;e!=0;){let t=je(e);e--;let r=n[t];n[t]=n[e],n[e]=r}return n}function Qn(n){return n<=0?2:Qn(n-1)+n+2}function mu(n){n[0].Score++;let e=Qn(n[0].Score);const t=Math.ceil(n.length*3/4);e>t&&(e=t+je(n.length-t)),ii(n,e)}function _u(n){n[0].Score=0,ii(n,Qn(0))}function ii(n,e){const t=n[0];for(let r=0;r<e;r++)n[r]=n[r+1];n[e]=t}const Oe=0,De=1,Pe=2,Me=3,Le=4,Ne=5,yu=[[Oe,Me,Le],[Oe,Ne,Me],[Oe,Le,De],[Oe,De,Ne],[Pe,De,Le],[Pe,Ne,De],[Pe,Le,Me],[Pe,Me,Ne]],vu=[[Oe,Me],[Oe,Le],[Oe,Ne],[Oe,De],[De,Le],[De,Ne],[Pe,De],[Pe,Le],[Pe,Ne],[Pe,Me],[Me,Le],[Me,Ne]];function bu(n){let e=Ur(12,2),t=Ur(8,3),r=pn(8),s=pn(12);for(;Br(r)!==Br(s);)r=pn(8);const i=Array(54);for(let S=0;S<6;S++){const $=n.center(S);i[$]=S}let o=n.corners(0,0),a=n.corners(1,0),c=n.corners(2,0),l=n.corners(3,0),u=n.corners(4,0),h=n.corners(5,0);const d=(S,$,C,j,B,H,L,F,Z)=>{const x=(Q,ne)=>yu[r[Q]][(t[Q]+ne)%3];i[S.topLeft]=x($,H),i[S.topRight]=x(C,L),i[S.bottomLeft]=x(j,F),i[S.bottomRight]=x(B,Z)};d(o,0,1,2,3,0,0,0,0),d(a,2,3,4,5,2,1,1,2),d(c,4,5,6,7,0,0,0,0),d(l,6,7,0,1,2,1,1,2),d(u,0,2,6,4,2,1,1,2),d(h,3,1,5,7,2,1,1,2);let f=n.edges(0,0,0),p=n.edges(1,0,0),y=n.edges(2,0,0),m=n.edges(3,0,0),_=n.edges(4,0,0),M=n.edges(5,0,0);const R=(S,$,C,j,B,H,L,F,Z)=>{const x=(Q,ne)=>vu[s[Q]][(e[Q]+ne)%2];i[S.top]=x($,H),i[S.left]=x(C,L),i[S.right]=x(j,F),i[S.bottom]=x(B,Z)};return R(f,0,1,2,3,0,0,0,0),R(p,3,4,5,6,1,0,0,1),R(y,6,7,8,9,0,0,0,0),R(m,9,10,11,0,1,0,0,1),R(_,1,10,4,7,1,1,1,1),R(M,2,5,11,8,1,1,1,1),i}function Ur(n,e){const t=Array(n);for(let r=0;r<n;r++)t[r]=je(e);for(;!Iu(t,e);){const r=je(n);t[r]=je(e)}return t}function Iu(n,e){let t=0;for(let r=0;r<n.length;r++)t+=n[r];return t%e===0}function pn(n){const e=Array(n);for(let t=0;t<n;t++)e[t]=t;return gu(e),e}function Br(n){const e=[...n];let t=!1;for(;;)if(e[0]===0){const r=e.findIndex((s,i)=>s!==i);if(r===-1)return t;e[0]=e[r],e[r]=0,t=!t}else{const r=e[0];e[0]=e[r],e[r]=r,t=!t}}let Ce;function Ut(n,e){const t=[e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3]];Ce.bindBuffer(Ce.ARRAY_BUFFER,n.buffer),Ce.bufferData(Ce.ARRAY_BUFFER,new Float32Array(t),Ce.STATIC_DRAW)}function T(n){return n*n}function q(n){return Math.floor(n/2)}function ct(n){return n%2==0}function se(n){return n*n*6}class wu{stickers;underStickers;layers;affectedStickers;disableTurn;clockwise;animationQueue;constructor(e){Ce=e,this.animationQueue=[]}setColors(e){for(let t=0;t<se(this.layers);t++)Ut(this.stickers[t],e[t])}solve(){const e=Array(se(this.layers));for(let t=0;t<se(this.layers);t++){const r=xr(t,this);this.stickers[t].face=r,e[t]=Nr(r)}this.setColors(e)}scramble(){if(this.layers===3){this.scramble3x3();return}this.naiveScramble()}scramble3x3(){const e=bu(this);this.setCubeState(e)}naiveScramble(){let e=T(this.layers)*10;for(let t=0;t<e;t++){let r=Math.floor(Math.random()*3),s=Math.floor(Math.random()*this.layers),i=Math.floor(Math.random()*1)==0;this._matchTurn(r,s,i)}}setNumOfLayers(e){this.layers=e,this.stickers=Array(se(e)),this.underStickers=Array(se(e));for(let t=0;t<se(e);t++){const r=xr(t,this);this.stickers[t]={face:r,buffer:Ce.createBuffer()},this.underStickers[t]={face:r,buffer:Ce.createBuffer()},Ut(this.underStickers[t],fu)}this.affectedStickers=Array(se(e)).fill(!1)}getCubeState(){return this.stickers.map(e=>e.face)}setCubeState(e){for(let t=0;t<se(this.layers);t++){const r=Nr(e[t]);this.stickers[t].face=e[t],Ut(this.stickers[t],r)}}resetAffectedStickers(){const e=Array(se(this.layers));this.affectedStickers=e.fill(this.layers===1)}pushAnimation(e,t,r){let s=t?-1:1,i=[0,0,0];i[e]=s,this.animationQueue.push({axis:i,stickers:r,stickersToAnimate:this.affectedStickers})}turn(e,t,r){this.resetAffectedStickers(),this.pushAnimation(e,r,[...this.stickers]),this._matchTurn(e,t,r)}sliceTurn(e,t){const r=Array(se(this.layers));this.affectedStickers=r.fill(!1),this.pushAnimation(e,t,[...this.stickers]);for(let s=1;s<this.layers-1;s++)this._matchTurn(e,s,t)}wideTurn(e,t,r){this.resetAffectedStickers(),this.pushAnimation(e,r,[...this.stickers]),this._matchTurn(e,t,r);for(let s=1;s<this.layers-1;s++)this._matchTurn(e,s,r)}cubeRotate(e,t){this.resetAffectedStickers(),this.pushAnimation(e,t,[...this.stickers]);for(let r=0;r<this.layers;r++)this._matchTurn(e,r,t)}_matchTurn(e,t,r){e==0?(this._turnXAxis(t,r),t==0?this._turnOuter(5,r):t==this.layers-1&&this._turnOuter(4,!r)):e==1?(this._turnYAxis(t,r),t==0?this._turnOuter(0,r):t==this.layers-1&&this._turnOuter(2,!r)):e==2?(this._turnZAxis(t,r),t==0?this._turnOuter(1,r):t==this.layers-1&&this._turnOuter(3,!r)):console.error(`Axis ${e} not recognized`)}_turnXAxis(e,t){for(let r=1;r<=this.layers;r++)this._cycle(t,0*T(this.layers)+T(this.layers)-r-e*this.layers,3*T(this.layers)+T(this.layers)-r-e*this.layers,2*T(this.layers)+T(this.layers)-r-e*this.layers,1*T(this.layers)+T(this.layers)-r-e*this.layers)}_turnYAxis(e,t){for(let r=0;r<this.layers;r++)this._cycle(t,1*T(this.layers)+r*this.layers+e,4*T(this.layers)+r*this.layers+e,3*T(this.layers)+(this.layers-r-1)*this.layers+(this.layers-1)-e,5*T(this.layers)+r*this.layers+e)}_turnZAxis(e,t){for(let r=0;r<this.layers;r++)this._cycle(t,0*T(this.layers)+(r+1)*this.layers-1-e,5*T(this.layers)+r+this.layers*e,2*T(this.layers)+(this.layers-r-1)*this.layers+e,4*T(this.layers)+T(this.layers)-(r+1)-e*this.layers)}_turnOuter(e,t){if(this.layers%2!=0){let r=this.center(e);this.affectedStickers[r]=!0}for(let r=0;r<Math.floor(this.layers/2);r++){const{topLeft:s,topRight:i,bottomLeft:o,bottomRight:a}=this.corners(e,r);this._cycle(t,s,i,a,o);let c=this.layers-2*(r+1);for(let l=0;l<c;l++){const{top:u,left:h,bottom:d,right:f}=this.edges(e,r,l);this._cycle(t,u,f,d,h)}}}_cycle(e,t,r,s,i){this.affectedStickers[t]=!0,this.affectedStickers[r]=!0,this.affectedStickers[s]=!0,this.affectedStickers[i]=!0,e?this._cycleHelper(t,r,s,i):this._cycleHelper(i,s,r,t)}_cycleHelper(e,t,r,s){let i=this.stickers[s];this.stickers[s]=this.stickers[r],this.stickers[r]=this.stickers[t],this.stickers[t]=this.stickers[e],this.stickers[e]=i}matchKeyToTurn(e){if(!this.disableTurn&&!e.ctrlKey)return this.matchKeyCodeToTurn(e.code)}matchKeyCodeToTurn(e){switch(e){case"KeyN":return this.cubeRotate(0,!0),{notation:"x",rotate:!0};case"KeyB":return this.cubeRotate(0,!1),{notation:"x'",rotate:!0};case"Semicolon":return this.cubeRotate(1,!0),{notation:"y",rotate:!0};case"KeyA":return this.cubeRotate(1,!1),{notation:"y'",rotate:!0};case"KeyP":return this.cubeRotate(2,!0),{notation:"z",rotate:!0};case"KeyQ":return this.cubeRotate(2,!1),{notation:"z'",rotate:!0};case"KeyJ":return this.turn(1,0,!0),{notation:"U",turn:!0};case"KeyF":return this.turn(1,0,!1),{notation:"U'",turn:!0};case"KeyS":return this.turn(1,this.layers-1,!1),{notation:"D",turn:!0};case"KeyL":return this.turn(1,this.layers-1,!0),{notation:"D'",turn:!0};case"KeyH":return this.turn(2,0,!0),{notation:"F",turn:!0};case"KeyG":return this.turn(2,0,!1),{notation:"F'",turn:!0};case"KeyW":return this.turn(2,this.layers-1,!1),{notation:"B",turn:!0};case"KeyO":return this.turn(2,this.layers-1,!0),{notation:"B'",turn:!0};case"KeyD":return this.turn(0,this.layers-1,!1),{notation:"L",turn:!0};case"KeyE":return this.turn(0,this.layers-1,!0),{notation:"L'",turn:!0};case"KeyI":return this.turn(0,0,!0),{notation:"R",turn:!0};case"KeyK":return this.turn(0,0,!1),{notation:"R'",turn:!0};case"BracketLeft":return this.sliceTurn(0,!1),{notation:"M",turn:!0};case"Quote":return this.sliceTurn(0,!0),{notation:"M'",turn:!0};case"KeyC":return this.sliceTurn(1,!1),{notation:"E",turn:!0};case"Comma":return this.sliceTurn(1,!0),{notation:"E'",turn:!0};case"KeyY":return this.sliceTurn(2,!0),{notation:"S",turn:!0};case"KeyT":return this.sliceTurn(2,!1),{notation:"S'",turn:!0};case"KeyU":return this.wideTurn(0,0,!0),{notation:"r",turn:!0};case"KeyM":return this.wideTurn(0,0,!1),{notation:"r'",turn:!0};case"KeyV":return this.wideTurn(0,this.layers-1,!1),{notation:"l",turn:!0};case"KeyR":return this.wideTurn(0,this.layers-1,!0),{notation:"l'",turn:!0}}}stepAlgorithm(e,t){switch(e){case"x":this.cubeRotate(0,t);break;case"x'":this.cubeRotate(0,!t);break;case"x2":case"x2'":this.cubeRotate(0,t),this.cubeRotate(0,t);break;case"y":this.cubeRotate(1,t);break;case"y'":this.cubeRotate(1,!t);break;case"y2":case"y2'":this.cubeRotate(1,t),this.cubeRotate(1,t);break;case"z":this.cubeRotate(2,t);break;case"z'":this.cubeRotate(2,!t);break;case"z2":case"z2'":this.cubeRotate(2,t),this.cubeRotate(2,t);break;case"U":this.turn(1,0,t);break;case"U'":this.turn(1,0,!t);break;case"U2":case"U2'":this.turn(1,0,t),this.turn(1,0,t);break;case"u":this.wideTurn(1,0,t);break;case"u'":this.wideTurn(1,0,!t);break;case"u2":case"u2'":this.wideTurn(1,0,t),this.wideTurn(1,0,t);break;case"D":this.turn(1,this.layers-1,!t);break;case"D'":this.turn(1,this.layers-1,t);break;case"D2":case"D2'":this.turn(1,this.layers-1,t),this.turn(1,this.layers-1,t);break;case"d":this.wideTurn(1,this.layers-1,!t);break;case"d'":this.wideTurn(1,this.layers-1,t);break;case"d2":case"d2'":this.wideTurn(1,this.layers-1,t),this.wideTurn(1,this.layers-1,t);break;case"F":this.turn(2,0,t);break;case"F'":this.turn(2,0,!t);break;case"F2":case"F2'":this.turn(2,0,t),this.turn(2,0,t);break;case"f":this.wideTurn(2,0,t);break;case"f'":this.wideTurn(2,0,!t);break;case"f2":case"f2'":this.wideTurn(2,0,t),this.wideTurn(2,0,t);break;case"B":this.turn(2,this.layers-1,!t);break;case"B'":this.turn(2,this.layers-1,t);break;case"B2":case"B2'":this.turn(2,this.layers-1,t),this.turn(2,this.layers-1,t);break;case"b":this.wideTurn(2,this.layers-1,!t);break;case"b'":this.wideTurn(2,this.layers-1,t);break;case"b2":case"b2'":this.wideTurn(2,this.layers-1,t),this.wideTurn(2,this.layers-1,t);break;case"L":this.turn(0,this.layers-1,!t);break;case"L'":this.turn(0,this.layers-1,t);break;case"L2":case"L2'":this.turn(0,this.layers-1,t),this.turn(0,this.layers-1,t);break;case"l":this.wideTurn(0,this.layers-1,!t);break;case"l'":this.wideTurn(0,this.layers-1,t);break;case"l2":case"l2'":this.wideTurn(0,this.layers-1,t),this.wideTurn(0,this.layers-1,t);break;case"R":this.turn(0,0,t);break;case"R'":this.turn(0,0,!t);break;case"R2":case"R2'":this.turn(0,0,t),this.turn(0,0,t);break;case"r":this.wideTurn(0,0,t);break;case"r'":this.wideTurn(0,0,!t);break;case"r2":case"r2'":this.wideTurn(0,0,t),this.wideTurn(0,0,t);break;case"M":this.turn(0,1,!t);break;case"M'":this.turn(0,1,t);break;case"M2":case"M2'":this.sliceTurn(0,t),this.sliceTurn(0,t);break;case"E":this.sliceTurn(1,!t);break;case"E'":this.sliceTurn(1,t);break;case"E2":case"E2'":this.sliceTurn(1,t),this.sliceTurn(1,t);break;case"S":this.sliceTurn(2,t);break;case"S'":this.sliceTurn(2,!t);break;case"S2":case"S2'":this.sliceTurn(2,t);default:throw new Error("Invalid turn in algorithm: "+e)}}execAlg(e){if(!e)return;let t=e.split(" ");for(let r=0;r<t.length;r++)this.stepAlgorithm(t[r],!0);this.animationQueue=[]}execAlgReverse(e){if(!e)return;let t=e.split(" ");for(let r=t.length-1;r>=0;r--)this.stepAlgorithm(t[r],!1);this.animationQueue=[]}stickerIsOnFace(e,t){return t*T(this.layers)<=e&&e<(t+1)*T(this.layers)}center(e){return e*T(this.layers)+Math.floor(T(this.layers)/2)}corners(e,t){const r=e*T(this.layers);return{topLeft:r+(this.layers+1)*t,topRight:r+(this.layers-1)*(this.layers-t),bottomRight:r+(this.layers+1)*(this.layers-t-1),bottomLeft:r+(this.layers-1)*(t+1)}}edges(e,t,r){const s=this.corners(e,t);let i=this.layers-2*(t+1);return{top:s.topLeft+this.layers*(r+1),left:s.topLeft+(i-r),right:s.topRight+r+1,bottom:s.bottomLeft+this.layers*(i-r)}}}function Ln(n){const e=n.gl,t=n.cube,r=n.perspectiveMatrix;let s=gn(t,1.01,.02),i=gn(t,1,0),o=gn(t,1.5,.02);const a=Array(se(t.layers));for(let c=0;c<se(t.layers);c++){let l={positionBuffer:e.createBuffer(),noGapPositionBuffer:e.createBuffer(),hintPositionBuffer:e.createBuffer(),indexBuffer:e.createBuffer(),cart2d:[],positions:null},u=new Float32Array(12),h=new Float32Array(12),d=new Float32Array(12);for(let y=0;y<12;y++){let m=c*12+y;u[y]=s[m],h[y]=i[m],d[y]=o[m]}e.bindBuffer(e.ARRAY_BUFFER,l.positionBuffer),e.bufferData(e.ARRAY_BUFFER,u,e.STATIC_DRAW),l.positions=u,e.bindBuffer(e.ARRAY_BUFFER,l.noGapPositionBuffer),e.bufferData(e.ARRAY_BUFFER,h,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,l.hintPositionBuffer),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW);const f=Array(16);Ot(f,0,r,[h[0],h[1],h[2],1]),Ot(f,4,r,[h[3],h[4],h[5],1]),Ot(f,8,r,[h[6],h[7],h[8],1]),Ot(f,12,r,[h[9],h[10],h[11],1]),l.cart2d=[f[0]/f[3],f[1]/f[3],f[4]/f[7],f[5]/f[7],f[8]/f[11],f[9]/f[11],f[12]/f[15],f[13]/f[15]];const p=[0,1,2,0,2,3];e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(p),e.STATIC_DRAW),a[c]=l}return a}function Ot(n,e,t,r){Array(4);let s=r[0],i=r[1],o=r[2],a=r[3];n[e+0]=s*t[0]+i*t[4]+o*t[8]+a*t[12],n[e+1]=s*t[1]+i*t[5]+o*t[9]+a*t[13],n[e+2]=s*t[2]+i*t[6]+o*t[10]+a*t[14],n[e+3]=s*t[3]+i*t[7]+o*t[11]+a*t[15]}const oi=12,Eu=4,Xe=3;function gn(n,e,t){const r=T(n.layers)*oi,s=Array(6*r);return ku(s,0*r,n,1,e,t),Su(s,1*r,n,0,e,t),Tu(s,2*r,n,1,-e,t),Au(s,3*r,n,0,-e,t),Ru(s,4*r,n,2,-e,t),Cu(s,5*r,n,2,e,t),s}function ku(n,e,t,r,s,i){if(ct(t.layers)){let c=Array(T(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=0;h<t.layers;h++){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,s],l++}ue(n,e,t,c,r,i);return}let o=Array(T(t.layers)),a=0;for(let c=-q(t.layers);c<=q(t.layers);c++)for(let l=-q(t.layers);l<=q(t.layers);l++)o[a]=[2*l/t.layers,2*c/t.layers,s],a++;ue(n,e,t,o,r,i)}function Su(n,e,t,r,s,i){if(ct(t.layers)){let c=Array(T(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){const d=-1+1/t.layers+u*2/t.layers,f=-1+1/t.layers+h*2/t.layers;c[l]=[d,f,s],l++}ue(n,e,t,c,r,i);return}let o=Array(T(t.layers)),a=0;for(let c=-q(t.layers);c<=q(t.layers);c++)for(let l=q(t.layers);l>=-q(t.layers);l--)o[a]=[2*c/t.layers,2*l/t.layers,s],a++;ue(n,e,t,o,r,i)}function Tu(n,e,t,r,s,i){if(ct(t.layers)){let c=Array(T(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,s],l++}ue(n,e,t,c,r,i);return}let o=Array(T(t.layers)),a=0;for(let c=-q(t.layers);c<=q(t.layers);c++)for(let l=q(t.layers);l>=-q(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,s],a++;ue(n,e,t,o,r,i)}function Au(n,e,t,r,s,i){if(ct(t.layers)){let c=Array(T(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=0;h<t.layers;h++){const d=-1+1/t.layers+u*2/t.layers,f=-1+1/t.layers+h*2/t.layers;c[l]=[d,f,s],l++}ue(n,e,t,c,r,i);return}let o=Array(T(t.layers)),a=0;for(let c=-q(t.layers);c<=q(t.layers);c++)for(let l=-q(t.layers);l<=q(t.layers);l++)o[a]=[2*c/t.layers,2*l/t.layers,s],a++;ue(n,e,t,o,r,i)}function Ru(n,e,t,r,s,i){if(ct(t.layers)){let c=Array(T(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,s],l++}ue(n,e,t,c,r,i);return}let o=Array(T(t.layers)),a=0;for(let c=-q(t.layers);c<=q(t.layers);c++)for(let l=q(t.layers);l>=-q(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,s],a++;ue(n,e,t,o,r,i)}function Cu(n,e,t,r,s,i){if(ct(t.layers)){let c=Array(T(t.layers)),l=0;for(let u=t.layers-1;u>=0;u--)for(let h=t.layers-1;h>=0;h--){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,s],l++}ue(n,e,t,c,r,i);return}let o=Array(T(t.layers)),a=0;for(let c=q(t.layers);c>=-q(t.layers);c--)for(let l=q(t.layers);l>=-q(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,s],a++;ue(n,e,t,o,r,i)}function ue(n,e,t,r,s,i){for(let o=0;o<T(t.layers);o++){const a=r[o];Ou(n,e+o*oi,t,a[0],a[1],a[2],s,i)}}function Ou(n,e,t,r,s,i,o,a){const c=1/t.layers-a,l=[[r-c,s-c,i],[r+c,s-c,i],[r+c,s+c,i],[r-c,s+c,i]];for(let u=0;u<Eu;u++){const h=l[u];n[e+u*Xe]=h[(o+0)%Xe],n[e+u*Xe+1]=h[(o+1)%Xe],n[e+u*Xe+2]=h[(o+2)%Xe]}}const Du=100,Pu=15;class Mu{position;_velocity;_acceleration;target;constructor(){this.position=0,this._velocity=200,this._acceleration=0,this.target=0}update(e){const t=-Du*(this.position-this.target),r=-Pu*this._velocity;this._acceleration=t+r,this._velocity+=this._acceleration*e,this.position+=this._velocity*e}}function Fr(n,e){return n/e*2-1}function $r(n,e){return 1-n/e*2}function mn(n,e,t,r){return n<t?(r-e)/(t-n):(e-r)/(n-t)}function Qe(n,e,t,r,s,i){return Math.abs(.5*(n*(r-i)+t*(i-e)+s*(e-r)))}function Lu(n,e){return n.layers-1-e%n.layers}function _n(n,e){return n.layers-1-Math.floor(e/n.layers)}function Nu(n,e){return e%n.layers}function yn(n,e){return n.layers-1-Math.floor((e-T(n.layers))/n.layers)}class xu{numOfPointerMoves;xOnDown;yOnDown;xOnMove;yOnMove;stickerOnDown;cart2dOnDown;onPointerDown(e,t,r,s,i){this.numOfPointerMoves=0;const o=Fr(e,r.clientWidth),a=$r(t,r.clientHeight);this.xOnDown=o,this.yOnDown=a,[this.stickerOnDown,this.cart2dOnDown]=this._coordinatesToSticker(o,a,s,i);function c(y,m,_){return{x:i[y].cart2d[m],y:i[y].cart2d[_]}}if(this.stickerOnDown!==-1)return;const l=c(0,0,1),u=c(s.layers*(s.layers-1),6,7),h=c(s.layers-1,2,3),d=c(T(s.layers)-1,4,5),f=c(s.layers*(s.layers+1)-1,0,1),p=c(T(s.layers)*2-1,2,3);a>l.y&&o>l.x&&o<u.x?s.cubeRotate(0,!0):o<l.x&&a>h.y&&a<l.y?s.cubeRotate(2,!1):o>u.x&&a>d.y&&a<u.y?s.cubeRotate(2,!0):o<f.x&&a>f.y&&a<h.y?s.cubeRotate(1,!0):o>p.x&&a>p.y&&a<d.y?s.cubeRotate(1,!1):a<f.y&&o>f.x&&o<p.x&&s.cubeRotate(0,!1)}onPointerMove(e,t){this.numOfPointerMoves++,this.xOnMove=e,this.yOnMove=t}onPointerUp(e,t,r){if(this.numOfPointerMoves<2)return;let s,i;if(this.stickerOnDown!==-1&&(s=mn(this.cart2dOnDown[0],this.cart2dOnDown[1],this.cart2dOnDown[4],this.cart2dOnDown[5]),i=mn(this.cart2dOnDown[2],this.cart2dOnDown[3],this.cart2dOnDown[6],this.cart2dOnDown[7]),s<0)){const l=s;s=i,i=l}const o=Fr(this.xOnMove,e.clientWidth),a=$r(this.yOnMove,e.clientHeight),c=mn(o,a,this.xOnDown,this.yOnDown);t.stickerIsOnFace(this.stickerOnDown,0)?o===this.xOnDown?t.turn(0,_n(t,this.stickerOnDown),a>this.yOnDown):c>s?t.turn(0,_n(t,this.stickerOnDown),o>this.xOnDown):c<i?t.turn(0,_n(t,this.stickerOnDown),o<this.xOnDown):t.turn(2,Lu(t,this.stickerOnDown),o>this.xOnDown):t.stickerIsOnFace(this.stickerOnDown,1)&&(o===this.xOnDown?t.turn(0,yn(t,this.stickerOnDown),a>this.yOnDown):c>s?t.turn(0,yn(t,this.stickerOnDown),o>this.xOnDown):c<i?t.turn(0,yn(t,this.stickerOnDown),o<this.xOnDown):t.turn(1,Nu(t,this.stickerOnDown),o<this.xOnDown))}_coordinatesToSticker(e,t,r,s){const i=o=>{if(!s[o].cart2d){console.error("cart2d is undefined");return}const a=s[o].cart2d,c=Qe(a[0],a[1],a[2],a[3],a[4],a[5])+Qe(a[0],a[1],a[4],a[5],a[6],a[7]),l=Qe(e,t,a[0],a[1],a[2],a[3])+Qe(e,t,a[2],a[3],a[4],a[5])+Qe(e,t,a[4],a[5],a[6],a[7])+Qe(e,t,a[6],a[7],a[0],a[1]),u=1e-5;if(Math.abs(c-l)<u)return[o,a]};for(let o=0;o<2*T(r.layers);o++){const a=i(o);if(a)return a}return[-1,void 0]}}function Bt(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Uu(n,e,t,r,s){const i=1/Math.tan(e/2);if(n[0]=i/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=i,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,s!=null&&s!==1/0){const o=1/(r-s);n[10]=(s+r)*o,n[14]=2*s*r*o}else n[10]=-1,n[14]=-2*r;return n}function Yt(n,e,t,r){let s=r[0],i=r[1],o=r[2],a=1/Math.hypot(s,i,o);s*=a,i*=a,o*=a;let c=Math.sin(t),l=Math.cos(t),u=1-l,h=e[0],d=e[1],f=e[2],p=e[3],y=e[4],m=e[5],_=e[6],M=e[7],R=e[8],S=e[9],$=e[10],C=e[11],j=s*s*u+l,B=i*s*u+o*c,H=o*s*u-i*c,L=s*i*u-o*c,F=i*i*u+l,Z=o*i*u+s*c,x=s*o*u+i*c,Q=i*o*u-s*c,ne=o*o*u+l;return n[0]=h*j+y*B+R*H,n[1]=d*j+m*B+S*H,n[2]=f*j+_*B+$*H,n[3]=p*j+M*B+C*H,n[4]=h*L+y*F+R*Z,n[5]=d*L+m*F+S*Z,n[6]=f*L+_*F+$*Z,n[7]=p*L+M*F+C*Z,n[8]=h*x+y*Q+R*ne,n[9]=d*x+m*Q+S*ne,n[10]=f*x+_*Q+$*ne,n[11]=p*x+M*Q+C*ne,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function Bu(n,e){let t=e[0],r=e[1],s=e[2];return n[12]+=n[0]*t+n[4]*r+n[7]*s,n[13]+=n[1]*t+n[5]*r+n[8]*s,n[14]+=n[2]*t+n[5]*r+n[9]*s,n[15]+=n[3]*t+n[6]*r+n[10]*s,n}function Hr(){let n;return e=>(n||(n=e()),n)}let ce,O,ve,Nn=[],Vr={animateTurns:!0,hintStickers:!0,showBody:!0},Wr=Date.now()*.001,Fu=3,jr=!1;function $u(){jr||(jr=!0,requestAnimationFrame(ai))}function Hu(n,e){O||(ce=e,O=ce.getContext("webgl"),ve=Vu());let t=new wu(O),r=new Mu,s=Wu(n),i=new xu;t.setNumOfLayers(Fu);let o=Ln({gl:O,cube:t,perspectiveMatrix:s}),a={div:n,gl:O,cube:t,spring:r,buffers:o,perspectiveMatrix:s};const c=(p,y)=>{a.dragEnabled&&i.onPointerDown(p,y,a.div,a.cube,a.buffers)},l=(p,y)=>{a.dragEnabled&&i.onPointerMove(p,y)},u=()=>{a.dragEnabled&&i.onPointerUp(a.div,a.cube,a.buffers)},h=p=>{const y=p.target.getBoundingClientRect(),m=p.touches[0].pageX-y.left,_=p.touches[0].pageY-y.top;return{x:m,y:_}},d=()=>{n.addEventListener("pointerdown",p=>c(p.offsetX,p.offsetY)),n.addEventListener("pointermove",p=>l(p.offsetX,p.offsetY)),n.addEventListener("pointerup",p=>u())},f=()=>{n.addEventListener("touchstart",p=>{const{x:y,y:m}=h(p);c(y,m)}),n.addEventListener("touchmove",p=>{const{x:y,y:m}=h(p);l(y,m)}),n.addEventListener("touchend",p=>{u()})};return window.PointerEvent?d():f(),a}function Vu(){const t=ju(O,`
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
    `);return O.useProgram(t),{attribLocations:{vertexPosition:O.getAttribLocation(t,"aVertexPosition"),vertexColor:O.getAttribLocation(t,"aVertexColor")},uniformLocations:{transformMatrix:O.getUniformLocation(t,"uTransformMatrix"),rotateMatrix:O.getUniformLocation(t,"uRotateMatrix")}}}function Wu(n){let e=Bt();return Uu(e,50*Math.PI/180,n.clientWidth/n.clientHeight,.1,100),Bu(e,[0,0,-5]),Yt(e,e,45*Math.PI/180,[1,0,0]),Yt(e,e,0,[0,-1,0]),e}function vn(n,e,t){t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(e.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexPosition)}function bn(n,e,t){t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(e.attribLocations.vertexColor,4,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexColor)}function In(n){n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)}function ju(n,e,t){const r=zr(n,n.VERTEX_SHADER,e),s=zr(n,n.FRAGMENT_SHADER,t),i=n.createProgram();return n.attachShader(i,r),n.attachShader(i,s),n.linkProgram(i),n.getProgramParameter(i,n.LINK_STATUS)?i:(alert("Unable to initialize the shader program: "+n.getProgramInfoLog(i)),null)}function zr(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)?r:(alert("An error occurred compiling the shaders: "+n.getShaderInfoLog(r)),n.deleteShader(r),null)}function zu(){const n=ce.clientWidth,e=ce.clientHeight,t=ce.width!==n||ce.height!==e;return t&&(ce.width=n,ce.height=e),t}function ai(n){n*=.001;const e=n-Wr;Wr=n,zu(),O.enable(O.DEPTH_TEST),O.enable(O.SCISSOR_TEST),O.depthFunc(O.LEQUAL),O.clear(O.COLOR_BUFFER_BIT|O.DEPTH_BUFFER_BIT),ce.style.transform=`translateY(${window.scrollY}px)`;for(let t=0;t<Nn.length;t++){const{cube:r,div:s,spring:i,buffers:o,perspectiveMatrix:a}=Nn[t],c=s.getBoundingClientRect();if(c.bottom<0||c.top>ce.clientHeight||c.right<0||c.left>ce.clientWidth)continue;const l=c.right-c.left,u=c.bottom-c.top,h=c.left,d=ce.clientHeight-c.bottom;O.viewport(h,d,l,u),O.scissor(h,d,l,u),r.animationQueue[0]&&(i.target=r.animationQueue.length*90,i.update(e),i.position>=90&&(r.affectedStickers=Array(se(r.layers)).fill(!1),i.position=0,r.animationQueue.shift()));const f=r.animationQueue[0];let p=Ku(r),y=Hr(),m=Hr();for(let _=0;_<se(r.layers);_++){let M=o[_];const R=f&&f.stickersToAnimate[_]&&Vr.animateTurns?y(()=>Yt(Bt(),a,i.position*Math.PI/180,f.axis)):a;O.uniformMatrix4fv(ve.uniformLocations.transformMatrix,!1,R);const S=f&&f.stickersToAnimate[_]&&Vr.animateTurns?m(()=>{const $=Bt();return Yt($,$,i.position*Math.PI/180,f.axis)}):Bt();O.uniformMatrix4fv(ve.uniformLocations.rotateMatrix,!1,S),O.bindBuffer(O.ELEMENT_ARRAY_BUFFER,M.indexBuffer),vn(M.noGapPositionBuffer,ve,O),bn(r.underStickers[_].buffer,ve,O),In(O),vn(M.positionBuffer,ve,O),bn(p[_].buffer,ve,O),In(O),vn(M.hintPositionBuffer,ve,O),bn(p[_].buffer,ve,O),In(O)}}requestAnimationFrame(ai)}function Ku(n){return n.animationQueue[0]?n.animationQueue[0].stickers:n.stickers}function Gu(n){let e,t,r,s,i,o,a;return{c(){e=v("div"),t=v("canvas"),r=k(),s=v("div"),A(s,"class","glDiv"),A(e,"class",i=n[3].class)},m(c,l){K(c,e,l),g(e,t),n[6](t),g(e,r),g(e,s),n[7](s),o||(a=ie(window,"keydown",n[5]),o=!0)},p(c,[l]){l&8&&i!==(i=c[3].class)&&A(e,"class",i)},i:U,o:U,d(c){c&&W(e),n[6](null),n[7](null),o=!1,a()}}}function qu(n,e,t){let{onSceneInitialized:r}=e,s,i,o;mi(()=>{t(2,o=Hu(i,s)),Nn.push(o),o.cube.solve(),t(2,o.dragEnabled=!0,o),$u(),r(o)});const a=u=>{o&&o.cube.matchKeyToTurn(u)};function c(u){rt[u?"unshift":"push"](()=>{s=u,t(0,s)})}function l(u){rt[u?"unshift":"push"](()=>{i=u,t(1,i)})}return n.$$set=u=>{t(3,e=he(he({},e),_e(u))),"onSceneInitialized"in u&&t(4,r=u.onSceneInitialized)},e=_e(e),[s,i,o,e,r,a,c,l]}class Ju extends pe{constructor(e){super(),fe(this,e,qu,Gu,de,{onSceneInitialized:4})}}const Yu={CMLL:{cube:"3x3",inactive:[1,3,4,5,7,12,13,14,21,22,23,30,31,32,39,48]},F2L:{cube:"3x3",inactive:[0,1,2,3,5,6,7,8,9,12,15,29,32,35,36,39,42,45,48,51]},OLL:{cube:"3x3",inactive:[9,12,15,29,32,35,36,39,42,45,48,51]},PLL:{cube:"3x3",inactive:[]},ZBLL:{cube:"3x3",inactive:[]},"2x2 CLL":{cube:"2x2",inactive:[]},"2x2 EG1":{cube:"2x2",inactive:[]},"2x2 EG2":{cube:"2x2",inactive:[]}};async function Xu(n,e,t,r,s,i,o,a){return rn("/createAlgSet",{uid:n,set:e,trainingAlgs:t,cube:r,inactiveStickers:s,moves:i,disregard:o,onlyOrientation:a})}async function Qu(n,e){return rn("/getAlgSet",{uid:n,set:e})}async function Zu(n,e){return rn("/updateAlgSet",{id:n,trainingAlgs:e})}function eh(n){var e,t,r;if(n.alg===null||n.alg===void 0)throw new Error("alg must be defined");if(n.moves===null||n.moves===void 0)throw new Error("moves must be defined");return{alg:n.alg,moves:n.moves,onlyOrientation:(e=n.onlyOrientation)!==null&&e!==void 0?e:[],disregard:(t=n.disregard)!==null&&t!==void 0?t:[],maxSolutions:(r=n.maxSolutions)!==null&&r!==void 0?r:10}}function th(n){var e=eh(n);return new Promise(function(t){var r=new Worker(new URL("/assets/worker-f983b957.js",self.location));r.onmessage=function(s){var i=s.data,o=i.split(",");t(o),r.terminate()},r.onerror=function(s){console.log("Caught error"),console.error(s),r.terminate()},r.postMessage(e)})}let G={scene:null,algSet:null,preRotation:"",preAUF:"",postAUF:""};function xn(n){return ci(n,G.preAUF,G.postAUF)}function nh(n){const e=qr(G.preAUF),t=qr(G.postAUF);return ci(n,t,e)}function ci(n,e,t){e&&(n=`${e} ${n}`),t&&(n=`${n} ${t}`);let r=n.split(" ");const s=Kr(r[0],r[1]),i=Kr(r[r.length-2],r[r.length-1]);return r=r.slice(2,-2),r=s.concat(r).concat(i),r.join(" ")}function Kr(n,e){if(n[0]!=="U"||e[0]!=="U")return[n,e];const t=(Gr(n)+Gr(e))%4;return t===0?[]:[rh(t)]}function Gr(n){return n.endsWith("'")?3:n.endsWith("2")?2:1}function rh(n){return["","U","U2","U'"][n]}function qr(n){return n===""?"":n.endsWith("'")?n.slice(0,-1):n.endsWith("2")?n:`${n}'`}function Jr(){return["","U","U2","U'"][je(4)]}function sh(n){G.scene=n}function li(){const n=G.algSet.trainingAlgs;return n&&n.length>0?n[0].Alg:(console.log("No algs to load",n),"")}async function ht(n,e){const t=G.scene;if(!t){console.error("Scene not set. Have you called setScene()?");return}(!G.algSet||G.algSet.name!==e)&&(G.algSet=await Qu(n,e),G.algSet.cube=="2x2"?(t.cube.setNumOfLayers(2),t.buffers=Ln(t),t.cube.solve()):G.algSet.cube=="3x3"&&(t.cube.setNumOfLayers(3),t.buffers=Ln(t),t.cube.solve()));let r=li();G.preAUF=Jr(),G.postAUF=Jr(),t.cube.solve(),t.cube.execAlg(G.preRotation),G.algSet.inactive.forEach(i=>{Ut(t.cube.stickers[i],au)});let s=xn(r);return t.cube.execAlgReverse(s),r}async function Yr(n,e,t){if(n?mu(G.algSet.trainingAlgs):_u(G.algSet.trainingAlgs),G.algSet.id===-1){const{trainingAlgs:r,cube:s,inactive:i,moves:o,disregard:a,onlyOrientation:c}=G.algSet,l=await Xu(e,t,r,s,i,o,a,c);G.algSet.id=l.id}else{const{id:r,trainingAlgs:s}=G.algSet;Zu(r,s)}return ch(),ht(e,t)}function ih(){return Object.keys(Yu)}async function oh(){let n=li();const e=await th({alg:n,moves:"U U' F F' R R'",disregard:G.algSet.disregard,onlyOrientation:G.algSet.onlyOrientation});return pu(e)}function ah(n,e){return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate()}function wn(){const n=Mn.get(),e=new Date;return ah(n.date,e)?n.count:0}function ch(){const n=Mn.get();n.count++,Mn.set(n)}function lh(n){let e,t;return e=new Be({props:{name:"x",style:"padding: 4px;"}}),e.$on("click",function(){Un(n[0])&&n[0].apply(this,arguments)}),{c(){X(e.$$.fragment)},m(r,s){J(e,r,s),t=!0},p(r,s){n=r},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function uh(n){let e,t,r,s,i,o,a,c;return i=new pt({props:{hovBackground:"#444",borderRadius:"4px",$$slots:{default:[lh]},$$scope:{ctx:n}}}),{c(){e=v("div"),t=v("div"),r=v("h5"),r.textContent="Menu",s=k(),X(i.$$.fragment),o=k(),a=v("div"),a.innerHTML=`<div style="height: 8px;"></div> 
        <a href="learn.html"><button style="width: 100%;">Learn</button></a> 
        <div style="height: 8px;"></div> 
        <a href="play.html"><button style="width: 100%;">Play</button></a> 
        <div style="height: 8px;"></div> 
        <a href="train.html"><button style="width: 100%;">Train</button></a> 
        <div style="height: 8px;"></div> 
        <a href="cuble.html"><button style="width: 100%;">Cuble</button></a>`,D(r,"color","white"),D(r,"font-size","1.2rem"),A(t,"class","row"),D(t,"justify-content","space-between"),D(t,"padding","8px"),D(a,"display","flex"),D(a,"flex-direction","column"),D(a,"padding","0 8px"),A(e,"style",n[1])},m(l,u){K(l,e,u),g(e,t),g(t,r),g(t,s),J(i,t,null),g(e,o),g(e,a),c=!0},p(l,[u]){const h={};u&9&&(h.$$scope={dirty:u,ctx:l}),i.$set(h),(!c||u&2)&&A(e,"style",l[1])},i(l){c||(P(i.$$.fragment,l),c=!0)},o(l){N(i.$$.fragment,l),c=!1},d(l){l&&W(e),Y(i)}}}function hh(n,e,t){let r,{open:s}=e,{onClose:i=()=>{}}=e;return n.$$set=o=>{"open"in o&&t(2,s=o.open),"onClose"in o&&t(0,i=o.onClose)},n.$$.update=()=>{n.$$.dirty&4&&t(1,r=`position: fixed; top: 0; left: 0; width: 300px; height: 100%; background-color: #2f2f32; z-index: 10; ${s?"transform: translateX(0); transition: transform 0.3s ease-in-out":"transform: translateX(-100%); transition: transform 0.3s ease-in-out"}`)},[i,r,s]}class dh extends pe{constructor(e){super(),fe(this,e,hh,uh,de,{open:2,onClose:0})}}function Xr(n,e,t){const r=n.slice();return r[37]=e[t],r}function Qr(n){let e,t,r,s,i;return t=new Be({props:{class:"icon",style:"padding: 8px;",name:"profile"}}),t.$on("click",n[16]),s=new Be({props:{class:"icon",style:"padding: 8px;",name:"settings"}}),s.$on("click",n[17]),{c(){e=v("div"),X(t.$$.fragment),r=k(),X(s.$$.fragment),A(e,"id","iconContainer"),A(e,"class","row")},m(o,a){K(o,e,a),J(t,e,null),g(e,r),J(s,e,null),i=!0},p:U,i(o){i||(P(t.$$.fragment,o),P(s.$$.fragment,o),i=!0)},o(o){N(t.$$.fragment,o),N(s.$$.fragment,o),i=!1},d(o){o&&W(e),Y(t),Y(s)}}}function fh(n){let e,t,r,s,i,o,a,c,l,u,h,d,f,p,y,m,_,M,R,S,$,C,j,B,H,L,F,Z,x,Q,ne;s=new Ju({props:{onSceneInitialized:n[24]}}),l=new pt({props:{background:"var(--gray-500)",hovBackground:"var(--gray-700)",borderRadius:"8px",$$slots:{default:[gh]},$$scope:{ctx:n}}}),h=new pt({props:{background:"var(--red-500)",hovBackground:"var(--red-700)",borderRadius:"8px",$$slots:{default:[mh]},$$scope:{ctx:n}}}),f=new pt({props:{background:"var(--green-500)",hovBackground:"var(--green-700)",borderRadius:"8px",$$slots:{default:[_h]},$$scope:{ctx:n}}});function Fe(E,b){return E[4]?vh:yh}let ke=Fe(n),re=ke(n),w=n[8]&&Zr(n);const ee=[Ih,bh],ae=[];function Je(E,b){return E[5]===0?0:E[5]===1?1:-1}return~(L=Je(n))&&(F=ae[L]=ee[L](n)),{c(){e=v("div"),t=v("div"),r=k(),X(s.$$.fragment),i=k(),o=v("div"),a=k(),c=v("div"),X(l.$$.fragment),u=k(),X(h.$$.fragment),d=k(),X(f.$$.fragment),p=k(),y=v("div"),m=k(),_=v("button"),re.c(),M=k(),w&&w.c(),R=k(),S=v("div"),$=k(),C=v("p"),j=oe("cases today: "),B=oe(n[10]),H=k(),F&&F.c(),Z=di(),D(t,"height","16px"),D(o,"height","16px"),A(c,"class","row"),D(c,"gap","16px"),D(y,"height","16px"),A(_,"class","btn-primary"),D(S,"height","16px"),A(e,"class","col w-full h-full")},m(E,b){K(E,e,b),g(e,t),g(e,r),J(s,e,null),g(e,i),g(e,o),g(e,a),g(e,c),J(l,c,null),g(c,u),J(h,c,null),g(c,d),J(f,c,null),g(e,p),g(e,y),g(e,m),g(e,_),re.m(_,null),g(e,M),w&&w.m(e,null),g(e,R),g(e,S),g(e,$),g(e,C),g(C,j),g(C,B),K(E,H,b),~L&&ae[L].m(E,b),K(E,Z,b),x=!0,Q||(ne=ie(_,"click",n[28]),Q=!0)},p(E,b){const ye={};b[0]&193&&(ye.onSceneInitialized=E[24]),s.$set(ye);const Zn={};b[0]&209|b[1]&512&&(Zn.$$scope={dirty:b,ctx:E}),l.$set(Zn);const er={};b[0]&1233|b[1]&512&&(er.$$scope={dirty:b,ctx:E}),h.$set(er);const tr={};b[0]&1233|b[1]&512&&(tr.$$scope={dirty:b,ctx:E}),f.$set(tr),ke===(ke=Fe(E))&&re?re.p(E,b):(re.d(1),re=ke(E),re&&(re.c(),re.m(_,null))),E[8]?w?w.p(E,b):(w=Zr(E),w.c(),w.m(e,R)):w&&(w.d(1),w=null),(!x||b[0]&1024)&&It(B,E[10]);let sn=L;L=Je(E),L===sn?~L&&ae[L].p(E,b):(F&&(Vt(),N(ae[sn],1,1,()=>{ae[sn]=null}),Wt()),~L?(F=ae[L],F?F.p(E,b):(F=ae[L]=ee[L](E),F.c()),P(F,1),F.m(Z.parentNode,Z)):F=null)},i(E){x||(P(s.$$.fragment,E),P(l.$$.fragment,E),P(h.$$.fragment,E),P(f.$$.fragment,E),P(F),x=!0)},o(E){N(s.$$.fragment,E),N(l.$$.fragment,E),N(h.$$.fragment,E),N(f.$$.fragment,E),N(F),x=!1},d(E){E&&W(e),Y(s),Y(l),Y(h),Y(f),re.d(),w&&w.d(),E&&W(H),~L&&ae[L].d(E),E&&W(Z),Q=!1,ne()}}}function ph(n){let e,t,r,s,i,o,a,c,l,u,h,d,f,p,y,m,_,M;const R=[Sh,kh],S=[];function $(C,j){return C[0]?0:1}return m=$(n),_=S[m]=R[m](n),{c(){e=v("div"),t=v("div"),r=k(),s=v("h1"),s.textContent="Algorithm Trainer",i=k(),o=v("div"),a=k(),c=v("p"),c.textContent="Learn algorithms at lightning speed",l=k(),u=v("div"),h=k(),d=v("div"),d.innerHTML=`<h2>1. Memorize faster</h2> 
          <div style="height: 8px"></div> 
          <ul><li>Get an algorithm right, and you&#39;ll see it less often.</li> 
            <div style="height: 8px"></div> 
            <li>Get an algorithm wrong, and you&#39;ll see it more often.</li></ul> 
          <div style="height: 16px"></div> 
          <h2>2. Virtual Cube</h2> 
          <div style="height: 8px"></div> 
          <p>Virtual cubes are better because:</p> 
          <div style="height: 8px"></div> 
          <ul><li>You&#39;ll never have to scramble a cube again</li> 
            <div style="height: 8px"></div> 
            <li>You can practice anywhere, anytime</li></ul>`,f=k(),p=v("div"),y=k(),_.c(),D(t,"height","8px"),D(o,"height","16px"),D(c,"color","var(--gray-300)"),D(c,"font-weight","bold"),D(u,"height","16px"),D(p,"height","24px"),A(e,"class","col w-full h-full")},m(C,j){K(C,e,j),g(e,t),g(e,r),g(e,s),g(e,i),g(e,o),g(e,a),g(e,c),g(e,l),g(e,u),g(e,h),g(e,d),g(e,f),g(e,p),g(e,y),S[m].m(e,null),M=!0},p(C,j){let B=m;m=$(C),m===B?S[m].p(C,j):(Vt(),N(S[B],1,1,()=>{S[B]=null}),Wt(),_=S[m],_?_.p(C,j):(_=S[m]=R[m](C),_.c()),P(_,1),_.m(e,null))},i(C){M||(P(_),M=!0)},o(C){N(_),M=!1},d(C){C&&W(e),S[m].d()}}}function gh(n){let e,t;return e=new Be({props:{name:"retry",style:`
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);`}}),e.$on("click",n[25]),{c(){X(e.$$.fragment)},m(r,s){J(e,r,s),t=!0},p:U,i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function mh(n){let e,t;return e=new Be({props:{name:"sad",style:`
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);`}}),e.$on("click",n[26]),{c(){X(e.$$.fragment)},m(r,s){J(e,r,s),t=!0},p:U,i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function _h(n){let e,t;return e=new Be({props:{name:"happy",style:`
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);`}}),e.$on("click",n[27]),{c(){X(e.$$.fragment)},m(r,s){J(e,r,s),t=!0},p:U,i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function yh(n){let e;return{c(){e=oe("show solution")},m(t,r){K(t,e,r)},p:U,d(t){t&&W(e)}}}function vh(n){let e,t=xn(n[7])+"",r;return{c(){e=oe("solution: "),r=oe(t)},m(s,i){K(s,e,i),K(s,r,i)},p(s,i){i[0]&128&&t!==(t=xn(s[7])+"")&&It(r,t)},d(s){s&&W(e),s&&W(r)}}}function Zr(n){let e,t,r;return{c(){e=v("p"),t=oe("scramble: "),r=oe(n[9])},m(s,i){K(s,e,i),g(e,t),g(e,r)},p(s,i){i[0]&512&&It(r,s[9])},d(s){s&&W(e)}}}function bh(n){let e,t;return e=new si({props:{title:"Settings",close:n[35],$$slots:{default:[wh]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},m(r,s){J(e,r,s),t=!0},p(r,s){const i={};s[0]&449|s[1]&512&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Ih(n){let e,t;return e=new si({props:{title:"Profile",close:n[30],$$slots:{default:[Eh]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},m(r,s){J(e,r,s),t=!0},p(r,s){const i={};s[0]&9|s[1]&512&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function es(n){let e,t=n[37]+"",r;return{c(){e=v("option"),r=oe(t),e.__value=n[37],e.value=e.__value},m(s,i){K(s,e,i),g(e,r)},p:U,d(s){s&&W(e)}}}function wh(n){let e,t,r,s,i,o,a,c,l,u,h,d,f=n[13],p=[];for(let y=0;y<f.length;y+=1)p[y]=es(Xr(n,f,y));return{c(){e=v("div"),t=v("p"),t.textContent="algorithm set",r=k(),s=v("select");for(let y=0;y<p.length;y+=1)p[y].c();i=k(),o=v("div"),a=k(),c=v("p"),c.textContent="show scramble",l=k(),u=v("input"),n[6]===void 0&&Ht(()=>n[31].call(s)),D(o,"height","16px"),A(u,"type","checkbox"),D(e,"padding","16px")},m(y,m){K(y,e,m),g(e,t),g(e,r),g(e,s);for(let _=0;_<p.length;_+=1)p[_].m(s,null);rr(s,n[6]),g(e,i),g(e,o),g(e,a),g(e,c),g(e,l),g(e,u),u.checked=n[8],h||(d=[ie(s,"change",n[31]),ie(s,"change",n[32]),ie(u,"change",n[33]),ie(u,"change",n[34])],h=!0)},p(y,m){if(m[0]&8192){f=y[13];let _;for(_=0;_<f.length;_+=1){const M=Xr(y,f,_);p[_]?p[_].p(M,m):(p[_]=es(M),p[_].c(),p[_].m(s,null))}for(;_<p.length;_+=1)p[_].d(1);p.length=f.length}m[0]&8256&&rr(s,y[6]),m[0]&256&&(u.checked=y[8])},d(y){y&&W(e),hi(p,y),h=!1,st(d)}}}function Eh(n){let e,t,r,s=n[0].email+"",i,o,a,c,l;return{c(){e=v("div"),t=v("p"),r=oe("signed in as "),i=oe(s),o=k(),a=v("button"),a.textContent="Sign Out",A(a,"class","btn-primary"),D(e,"padding","12px")},m(u,h){K(u,e,h),g(e,t),g(t,r),g(t,i),g(e,o),g(e,a),c||(l=ie(a,"click",n[29]),c=!0)},p(u,h){h[0]&1&&s!==(s=u[0].email+"")&&It(i,s)},d(u){u&&W(e),c=!1,l()}}}function kh(n){let e,t,r,s,i,o,a,c,l,u,h,d,f,p,y,m,_,M,R,S,$,C,j,B,H,L,F,Z,x,Q;t=new Kl({props:{callback:n[19]}});function ne(w){n[20](w)}let Fe={class:"mt-4"};n[1]!==void 0&&(Fe.value=n[1]),p=new Jl({props:Fe}),rt.push(()=>ir(p,"value",ne));function ke(w){n[21](w)}let re={class:"mt-4"};return n[2]!==void 0&&(re.value=n[2]),R=new Ql({props:re}),rt.push(()=>ir(R,"value",ke)),H=new $l({props:{email:n[1],password:n[2],callback:n[22]}}),x=new Wl({props:{email:n[1],password:n[2],callback:n[23]}}),{c(){e=v("div"),X(t.$$.fragment),r=k(),s=v("div"),i=k(),o=v("div"),a=k(),c=v("div"),l=k(),u=v("p"),u.textContent="Or use email and password",h=k(),d=v("div"),f=k(),X(p.$$.fragment),m=k(),_=v("div"),M=k(),X(R.$$.fragment),$=k(),C=v("div"),j=k(),B=v("div"),X(H.$$.fragment),L=k(),F=v("div"),Z=k(),X(x.$$.fragment),D(s,"height","16px"),D(o,"width","100%"),D(o,"height","2px"),D(o,"background-color","var(--gray-600)"),D(c,"height","16px"),D(d,"height","12px"),D(_,"height","16px"),D(C,"height","32px"),D(F,"width","16px"),A(B,"class","row mt-4"),A(e,"class","col"),D(e,"border-radius","16px"),D(e,"padding","16px"),D(e,"box-shadow","0 0 4px lightgray")},m(w,ee){K(w,e,ee),J(t,e,null),g(e,r),g(e,s),g(e,i),g(e,o),g(e,a),g(e,c),g(e,l),g(e,u),g(e,h),g(e,d),g(e,f),J(p,e,null),g(e,m),g(e,_),g(e,M),J(R,e,null),g(e,$),g(e,C),g(e,j),g(e,B),J(H,B,null),g(B,L),g(B,F),g(B,Z),J(x,B,null),Q=!0},p(w,ee){const ae={};ee[0]&1&&(ae.callback=w[19]),t.$set(ae);const Je={};!y&&ee[0]&2&&(y=!0,Je.value=w[1],sr(()=>y=!1)),p.$set(Je);const E={};!S&&ee[0]&4&&(S=!0,E.value=w[2],sr(()=>S=!1)),R.$set(E);const b={};ee[0]&2&&(b.email=w[1]),ee[0]&4&&(b.password=w[2]),ee[0]&1&&(b.callback=w[22]),H.$set(b);const ye={};ee[0]&2&&(ye.email=w[1]),ee[0]&4&&(ye.password=w[2]),ee[0]&1&&(ye.callback=w[23]),x.$set(ye)},i(w){Q||(P(t.$$.fragment,w),P(p.$$.fragment,w),P(R.$$.fragment,w),P(H.$$.fragment,w),P(x.$$.fragment,w),Q=!0)},o(w){N(t.$$.fragment,w),N(p.$$.fragment,w),N(R.$$.fragment,w),N(H.$$.fragment,w),N(x.$$.fragment,w),Q=!1},d(w){w&&W(e),Y(t),Y(p),Y(R),Y(H),Y(x)}}}function Sh(n){let e,t,r;return{c(){e=v("button"),e.textContent="Start Training"},m(s,i){K(s,e,i),t||(r=ie(e,"click",n[18]),t=!0)},p:U,i:U,o:U,d(s){s&&W(e),t=!1,r()}}}function Th(n){let e,t,r,s,i,o,a,c,l,u,h;r=new Be({props:{class:"icon",style:"padding: 8px;",name:"menu"}}),r.$on("click",n[15]);let d=n[3]==="train"&&Qr(n);const f=[ph,fh],p=[];function y(m,_){return m[3]==="landing"?0:m[3]==="train"?1:-1}return~(a=y(n))&&(c=p[a]=f[a](n)),u=new dh({props:{open:n[11],onClose:n[36]}}),{c(){e=v("main"),t=v("nav"),X(r.$$.fragment),s=k(),d&&d.c(),i=k(),o=v("div"),c&&c.c(),l=k(),X(u.$$.fragment),A(t,"class","navbar"),D(t,"justify-content","space-between"),A(o,"class","row w-full h-full"),A(e,"class","col")},m(m,_){K(m,e,_),g(e,t),J(r,t,null),g(t,s),d&&d.m(t,null),g(e,i),g(e,o),~a&&p[a].m(o,null),g(e,l),J(u,e,null),h=!0},p(m,_){m[3]==="train"?d?(d.p(m,_),_[0]&8&&P(d,1)):(d=Qr(m),d.c(),P(d,1),d.m(t,null)):d&&(Vt(),N(d,1,1,()=>{d=null}),Wt());let M=a;a=y(m),a===M?~a&&p[a].p(m,_):(c&&(Vt(),N(p[M],1,1,()=>{p[M]=null}),Wt()),~a?(c=p[a],c?c.p(m,_):(c=p[a]=f[a](m),c.c()),P(c,1),c.m(o,null)):c=null);const R={};_[0]&2048&&(R.open=m[11]),_[0]&2048&&(R.onClose=m[36]),u.$set(R)},i(m){h||(P(r.$$.fragment,m),P(d),P(c),P(u.$$.fragment,m),h=!0)},o(m){N(r.$$.fragment,m),N(d),N(c),N(u.$$.fragment,m),h=!1},d(m){m&&W(e),Y(r),d&&d.d(),~a&&p[a].d(),Y(u)}}}function Ah(n,e,t){let r=Ml(),s="",i="",o="landing",a=!1,c=-1;function l(b){c===b?t(5,c=-1):t(5,c=b)}const u=ih();let h,d;h&&ht(r.uid,h).then(b=>{t(7,d=b)});let f=Al(),p="loading...";function y(){f&&(t(9,p="loading..."),oh().then(b=>{t(9,p=nh(b))}))}let m=wn(),_=!1;const M=()=>t(11,_=!0),R=()=>l(0),S=()=>l(1),$=()=>t(3,o="train"),C=b=>t(0,r=b);function j(b){s=b,t(1,s)}function B(b){i=b,t(2,i)}const H=b=>t(0,r=b),L=b=>t(0,r=b),F=b=>{sh(b),t(6,h=Sl()),h||t(6,h=u[0]),ht(r.uid,h).then(ye=>{t(7,d=ye),y()})},Z=()=>{ht(r.uid,h).then(b=>{t(7,d=b),t(4,a=!1)})},x=()=>{Yr(!1,r.uid,h).then(b=>{t(7,d=b),t(4,a=!1),t(10,m=wn()),y()})},Q=()=>{Yr(!0,r.uid,h).then(b=>{t(7,d=b),t(4,a=!1),t(10,m=wn()),y()})},ne=()=>t(4,a=!a),Fe=()=>{Ul(),t(3,o="landing"),t(0,r=null)},ke=()=>l(0);function re(){h=pi(this),t(6,h),t(13,u)}const w=()=>{ht(r.uid,h).then(b=>{t(7,d=b),y()}),Tl(h)};function ee(){f=this.checked,t(8,f)}return[r,s,i,o,a,c,h,d,f,p,m,_,l,u,y,M,R,S,$,C,j,B,H,L,F,Z,x,Q,ne,Fe,ke,re,w,ee,()=>{y(),Rl(f)},()=>l(1),()=>t(11,_=!1)]}class Rh extends pe{constructor(e){super(),fe(this,e,Ah,Th,de,{},null,[-1,-1])}}new Rh({target:document.getElementById("app")});
