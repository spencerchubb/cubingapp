(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function x(){}function he(n,e){for(const t in e)n[t]=e[t];return n}function ai(n){return n()}function sr(){return Object.create(null)}function st(n){n.forEach(ai)}function Fn(n){return typeof n=="function"}function de(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function ms(n){return Object.keys(n).length===0}function ci(n,e,t,r){if(n){const i=li(n,e,t,r);return n[0](i)}}function li(n,e,t,r){return n[1]&&r?he(t.ctx.slice(),n[1](r(e))):t.ctx}function ui(n,e,t,r){if(n[2]&&r){const i=n[2](r(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function hi(n,e,t,r,i,s){if(i){const o=li(e,t,r,s);n.p(o,i)}}function di(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function _e(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function Ht(n){return n??""}function p(n,e){n.appendChild(e)}function $(n,e,t){n.insertBefore(e,t||null)}function U(n){n.parentNode&&n.parentNode.removeChild(n)}function fi(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function v(n){return document.createElement(n)}function re(n){return document.createTextNode(n)}function b(){return re(" ")}function _s(){return re("")}function oe(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function A(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ys(n){return Array.from(n.childNodes)}function wt(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Vt(n,e){n.value=e??""}function E(n,e,t,r){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}function or(n,e){for(let t=0;t<n.options.length;t+=1){const r=n.options[t];if(r.__value===e){r.selected=!0;return}}n.selectedIndex=-1}function vs(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}let mt;function ft(n){mt=n}function bs(){if(!mt)throw new Error("Function called outside component initialization");return mt}function Is(n){bs().$$.on_mount.push(n)}function ws(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const et=[],it=[],Mt=[],Tn=[],Es=Promise.resolve();let An=!1;function ks(){An||(An=!0,Es.then(pi))}function Wt(n){Mt.push(n)}function ar(n){Tn.push(n)}const ln=new Set;let Xe=0;function pi(){if(Xe!==0)return;const n=mt;do{try{for(;Xe<et.length;){const e=et[Xe];Xe++,ft(e),Ss(e.$$)}}catch(e){throw et.length=0,Xe=0,e}for(ft(null),et.length=0,Xe=0;it.length;)it.pop()();for(let e=0;e<Mt.length;e+=1){const t=Mt[e];ln.has(t)||(ln.add(t),t())}Mt.length=0}while(et.length);for(;Tn.length;)Tn.pop()();An=!1,ln.clear(),ft(n)}function Ss(n){if(n.fragment!==null){n.update(),st(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Wt)}}const Lt=new Set;let Ve;function jt(){Ve={r:0,c:[],p:Ve}}function zt(){Ve.r||st(Ve.c),Ve=Ve.p}function D(n,e){n&&n.i&&(Lt.delete(n),n.i(e))}function L(n,e,t,r){if(n&&n.o){if(Lt.has(n))return;Lt.add(n),Ve.c.push(()=>{Lt.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function cr(n,e,t){const r=n.$$.props[e];r!==void 0&&(n.$$.bound[r]=t,t(n.$$.ctx[r]))}function Y(n){n&&n.c()}function G(n,e,t,r){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),r||Wt(()=>{const o=n.$$.on_mount.map(ai).filter(Fn);n.$$.on_destroy?n.$$.on_destroy.push(...o):st(o),n.$$.on_mount=[]}),s.forEach(Wt)}function q(n,e){const t=n.$$;t.fragment!==null&&(st(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ts(n,e){n.$$.dirty[0]===-1&&(et.push(n),ks(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function fe(n,e,t,r,i,s,o,a=[-1]){const c=mt;ft(n);const l=n.$$={fragment:null,ctx:[],props:s,update:x,not_equal:i,bound:sr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:sr(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=t?t(n,e.props||{},(h,d,...f)=>{const g=f.length?f[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=g)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](g),u&&Ts(n,h)),d}):[],l.update(),u=!0,st(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=ys(e.target);l.fragment&&l.fragment.l(h),h.forEach(U)}else l.fragment&&l.fragment.c();e.intro&&D(n.$$.fragment),G(n,e.target,e.anchor,e.customElement),pi()}ft(c)}class pe{$destroy(){q(this,1),this.$destroy=x}$on(e,t){if(!Fn(t))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ms(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
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
 */const gi=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},As=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(gi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):As(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Rs=function(n){const e=gi(n);return mi.encodeByteArray(e,!0)},_i=function(n){return Rs(n).replace(/\./g,"")},Cs=function(n){try{return mi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Os(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ds=()=>Os().__FIREBASE_DEFAULTS__,Ps=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ms=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Cs(n[1]);return e&&JSON.parse(e)},Ls=()=>{try{return Ds()||Ps()||Ms()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ns=()=>{var n;return(n=Ls())===null||n===void 0?void 0:n.config};/**
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
 */class xs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}function Bs(){try{return typeof indexedDB=="object"}catch{return!1}}function Us(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Fs="FirebaseError";let $n=class yi extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Fs,Object.setPrototypeOf(this,yi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vi.prototype.create)}},vi=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$s(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $n(i,a,r)}};function $s(n,e){return n.replace(Hs,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Hs=/\{\$([^}]+)}/g;function Rn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(lr(s)&&lr(o)){if(!Rn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function lr(n){return n!==null&&typeof n=="object"}let Kt=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const He="[DEFAULT]";/**
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
 */class Vs{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new xs;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(js(e))try{this.getOrInitializeService({instanceIdentifier:He})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=He){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=He){return this.instances.has(e)}getOptions(e=He){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ws(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=He){return this.component?this.component.multipleInstances?e:He:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ws(n){return n===He?void 0:n}function js(n){return n.instantiationMode==="EAGER"}/**
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
 */class zs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vs(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Ks={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Gs=z.INFO,qs={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Js=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=qs[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Ys=class{constructor(e){this.name=e,this._logLevel=Gs,this._logHandler=Js,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ks[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}};const Xs=(n,e)=>e.some(t=>n instanceof t);let ur,hr;function Qs(){return ur||(ur=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zs(){return hr||(hr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bi=new WeakMap,Cn=new WeakMap,Ii=new WeakMap,un=new WeakMap,Hn=new WeakMap;function eo(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Be(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&bi.set(t,n)}).catch(()=>{}),Hn.set(e,n),e}function to(n){if(Cn.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Cn.set(n,e)}let On={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ii.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Be(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function no(n){On=n(On)}function ro(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hn(this),e,...t);return Ii.set(r,e.sort?e.sort():[e]),Be(r)}:Zs().includes(n)?function(...e){return n.apply(hn(this),e),Be(bi.get(this))}:function(...e){return Be(n.apply(hn(this),e))}}function io(n){return typeof n=="function"?ro(n):(n instanceof IDBTransaction&&to(n),Xs(n,Qs())?new Proxy(n,On):n)}function Be(n){if(n instanceof IDBRequest)return eo(n);if(un.has(n))return un.get(n);const e=io(n);return e!==n&&(un.set(n,e),Hn.set(e,n)),e}const hn=n=>Hn.get(n);function so(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Be(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Be(o.result),c.oldVersion,c.newVersion,Be(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const oo=["get","getKey","getAll","getAllKeys","count"],ao=["put","add","delete","clear"],dn=new Map;function dr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(dn.get(e))return dn.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ao.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oo.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return dn.set(e,s),s}no(n=>({...n,get:(e,t,r)=>dr(e,t)||n.get(e,t,r),has:(e,t)=>!!dr(e,t)||n.has(e,t)}));/**
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
 */class co{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lo(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function lo(n){const e=n.getComponent();return e?.type==="VERSION"}const Dn="@firebase/app",fr="0.9.1";/**
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
 */const Ke=new Ys("@firebase/app"),uo="@firebase/app-compat",ho="@firebase/analytics-compat",fo="@firebase/analytics",po="@firebase/app-check-compat",go="@firebase/app-check",mo="@firebase/auth",_o="@firebase/auth-compat",yo="@firebase/database",vo="@firebase/database-compat",bo="@firebase/functions",Io="@firebase/functions-compat",wo="@firebase/installations",Eo="@firebase/installations-compat",ko="@firebase/messaging",So="@firebase/messaging-compat",To="@firebase/performance",Ao="@firebase/performance-compat",Ro="@firebase/remote-config",Co="@firebase/remote-config-compat",Oo="@firebase/storage",Do="@firebase/storage-compat",Po="@firebase/firestore",Mo="@firebase/firestore-compat",Lo="firebase",No="9.16.0";/**
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
 */const Pn="[DEFAULT]",xo={[Dn]:"fire-core",[uo]:"fire-core-compat",[fo]:"fire-analytics",[ho]:"fire-analytics-compat",[go]:"fire-app-check",[po]:"fire-app-check-compat",[mo]:"fire-auth",[_o]:"fire-auth-compat",[yo]:"fire-rtdb",[vo]:"fire-rtdb-compat",[bo]:"fire-fn",[Io]:"fire-fn-compat",[wo]:"fire-iid",[Eo]:"fire-iid-compat",[ko]:"fire-fcm",[So]:"fire-fcm-compat",[To]:"fire-perf",[Ao]:"fire-perf-compat",[Ro]:"fire-rc",[Co]:"fire-rc-compat",[Oo]:"fire-gcs",[Do]:"fire-gcs-compat",[Po]:"fire-fst",[Mo]:"fire-fst-compat","fire-js":"fire-js",[Lo]:"fire-js-all"};/**
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
 */const Gt=new Map,Mn=new Map;function Bo(n,e){try{n.container.addComponent(e)}catch(t){Ke.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _t(n){const e=n.name;if(Mn.has(e))return Ke.debug(`There were multiple attempts to register component ${e}.`),!1;Mn.set(e,n);for(const t of Gt.values())Bo(t,n);return!0}function wi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Uo={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ue=new vi("app","Firebase",Uo);/**
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
 */class Fo{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
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
 */const en=No;function Ei(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ue.create("bad-app-name",{appName:String(i)});if(t||(t=Ns()),!t)throw Ue.create("no-options");const s=Gt.get(i);if(s){if(Rn(t,s.options)&&Rn(r,s.config))return s;throw Ue.create("duplicate-app",{appName:i})}const o=new zs(i);for(const c of Mn.values())o.addComponent(c);const a=new Fo(t,r,o);return Gt.set(i,a),a}function $o(n=Pn){const e=Gt.get(n);if(!e&&n===Pn)return Ei();if(!e)throw Ue.create("no-app",{appName:n});return e}function tt(n,e,t){var r;let i=(r=xo[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ke.warn(a.join(" "));return}_t(new Kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ho="firebase-heartbeat-database",Vo=1,yt="firebase-heartbeat-store";let fn=null;function ki(){return fn||(fn=so(Ho,Vo,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(yt)}}}).catch(n=>{throw Ue.create("idb-open",{originalErrorMessage:n.message})})),fn}async function Wo(n){try{return(await ki()).transaction(yt).objectStore(yt).get(Si(n))}catch(e){if(e instanceof $n)Ke.warn(e.message);else{const t=Ue.create("idb-get",{originalErrorMessage:e?.message});Ke.warn(t.message)}}}async function pr(n,e){try{const r=(await ki()).transaction(yt,"readwrite");return await r.objectStore(yt).put(e,Si(n)),r.done}catch(t){if(t instanceof $n)Ke.warn(t.message);else{const r=Ue.create("idb-set",{originalErrorMessage:t?.message});Ke.warn(r.message)}}}function Si(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jo=1024,zo=30*24*60*60*1e3;class Ko{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qo(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=zo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gr(),{heartbeatsToSend:t,unsentEntries:r}=Go(this._heartbeatsCache.heartbeats),i=_i(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gr(){return new Date().toISOString().substring(0,10)}function Go(n,e=jo){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mr(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),mr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class qo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bs()?Us().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Wo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return pr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return pr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mr(n){return _i(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Jo(n){_t(new Kt("platform-logger",e=>new co(e),"PRIVATE")),_t(new Kt("heartbeat",e=>new Ko(e),"PRIVATE")),tt(Dn,fr,n),tt(Dn,fr,"esm2017"),tt("fire-js","")}Jo("");var Yo="firebase",Xo="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(Yo,Xo,"app");/**
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
 */const Qo=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Zo=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ea={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ti=function(n){try{return ea.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ta(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const na=()=>ta().__FIREBASE_DEFAULTS__,ra=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ia=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ti(n[1]);return e&&JSON.parse(e)},Ai=()=>{try{return na()||ra()||ia()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sa=n=>{var e,t;return(t=(e=Ai())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ri=n=>{var e;return(e=Ai())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function aa(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ca(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function la(){const n=ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}/**
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
 */const ua="FirebaseError";class ot extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ua,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tn.prototype.create)}}class tn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ha(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ot(i,a,r)}}function ha(n,e){return n.replace(da,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const da=/\{\$([^}]+)}/g;function fa(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ci(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(_r(s)&&_r(o)){if(!Ci(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function _r(n){return n!==null&&typeof n=="object"}/**
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
 */function Et(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ut(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ht(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function pa(n,e){const t=new ga(n,e);return t.subscribe.bind(t)}class ga{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ma(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=pn),i.error===void 0&&(i.error=pn),i.complete===void 0&&(i.complete=pn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ma(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function pn(){}/**
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
 */function Je(n){return n&&n._delegate?n._delegate:n}/**
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
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const _a={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},ya=V.INFO,va={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},ba=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=va[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ia{constructor(e){this.name=e,this._logLevel=ya,this._logHandler=ba,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}function Vn(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}class yr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}function Oi(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wa=Oi,Di=new tn("auth","Firebase",Oi());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Ia("@firebase/auth");function Nt(n,...e){vr.logLevel<=V.ERROR&&vr.error(`Auth (${en}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,...e){throw Wn(n,...e)}function ge(n,...e){return Wn(n,...e)}function Pi(n,e,t){const r=Object.assign(Object.assign({},wa()),{[e]:t});return new tn("auth","Firebase",r).create(e,{appName:n.name})}function Ea(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&le(n,"argument-error"),Pi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Di.create(n,...e)}function k(n,e,...t){if(!n)throw Wn(e,...t)}function be(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Nt(e),new Error(e)}function Ee(n,e){n||be(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Map;function Ie(n){Ee(n instanceof Function,"Expected a class definition");let e=br.get(n);return e?(Ee(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,br.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(n,e){const t=wi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ci(s,e??{}))return i;le(i,"already-initialized")}return t.initialize({options:e})}function Sa(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Ie);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ta(){return Ir()==="http:"||Ir()==="https:"}function Ir(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ta()||aa()||"connection"in navigator)?navigator.onLine:!0}function Ra(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ee(t>e,"Short delay should be less than long delay!"),this.isMobile=oa()||ca()}get(){return Aa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(n,e){Ee(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new kt(3e4,6e4);function St(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Tt(n,e,t,r,i={}){return Li(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Et(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Mi.fetch()(Ni(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Li(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ca),e);try{const i=new Da(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Dt(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dt(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Dt(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Dt(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Pi(n,u,l);le(n,u)}}catch(i){if(i instanceof ot)throw i;le(n,"network-request-failed")}}async function At(n,e,t,r,i={}){const s=await Tt(n,e,t,r,i);return"mfaPendingCredential"in s&&le(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ni(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?jn(n.config,i):`${n.config.apiScheme}://${i}`}class Da{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ge(this.auth,"network-request-failed")),Oa.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dt(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ge(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(n,e){return Tt(n,"POST","/v1/accounts:delete",e)}async function Ma(n,e){return Tt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function La(n,e=!1){const t=Je(n),r=await t.getIdToken(e),i=zn(r);k(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:pt(gn(i.auth_time)),issuedAtTime:pt(gn(i.iat)),expirationTime:pt(gn(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function gn(n){return Number(n)*1e3}function zn(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Nt("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ti(t);return i?JSON.parse(i):(Nt("Failed to decode base64 JWT payload"),null)}catch(i){return Nt("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Na(n){const e=zn(n);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ot&&xa(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xa({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pt(this.lastLoginAt),this.creationTime=pt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qt(n){var e;const t=n.auth,r=await n.getIdToken(),i=await vt(n,Ma(t,{idToken:r}));k(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$a(s.providerUserInfo):[],a=Fa(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!a?.length,u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xi(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Ua(n){const e=Je(n);await qt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fa(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $a(n){return n.map(e=>{var{providerId:t}=e,r=Vn(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(n,e){const t=await Li(n,{},async()=>{const r=Et({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Ni(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mi.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Na(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ha(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new bt;return r&&(k(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(k(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(k(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bt,this.toJSON())}_performRefresh(){return be("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n,e){k(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class je{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Vn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ba(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await vt(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return La(this,e)}reload(){return Ua(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new je(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await qt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vt(this,Pa(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=t.createdAt)!==null&&l!==void 0?l:void 0,N=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:S,isAnonymous:H,providerData:P,stsTokenManager:W}=t;k(C&&W,e,"internal-error");const F=bt.fromJSON(this.name,W);k(typeof C=="string",e,"internal-error"),Te(h,e.name),Te(d,e.name),k(typeof S=="boolean",e,"internal-error"),k(typeof H=="boolean",e,"internal-error"),Te(f,e.name),Te(g,e.name),Te(_,e.name),Te(m,e.name),Te(y,e.name),Te(N,e.name);const j=new je({uid:C,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:H,photoURL:g,phoneNumber:f,tenantId:_,stsTokenManager:F,createdAt:y,lastLoginAt:N});return P&&Array.isArray(P)&&(j.providerData=P.map(Z=>Object.assign({},Z))),m&&(j._redirectEventId=m),j}static async _fromIdTokenResponse(e,t,r=!1){const i=new bt;i.updateFromServerResponse(t);const s=new je({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qt(s),s}}/**
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
 */class Bi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bi.type="NONE";const wr=Bi;/**
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
 */function xt(n,e,t){return`firebase:${n}:${e}:${t}`}class nt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xt(this.userKey,i.apiKey,s),this.fullPersistenceKey=xt("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?je._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new nt(Ie(wr),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ie(wr);const o=xt(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=je._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new nt(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new nt(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($i(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ui(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vi(e))return"Blackberry";if(Wi(e))return"Webos";if(Kn(e))return"Safari";if((e.includes("chrome/")||Fi(e))&&!e.includes("edge/"))return"Chrome";if(Hi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Ui(n=ie()){return/firefox\//i.test(n)}function Kn(n=ie()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fi(n=ie()){return/crios\//i.test(n)}function $i(n=ie()){return/iemobile/i.test(n)}function Hi(n=ie()){return/android/i.test(n)}function Vi(n=ie()){return/blackberry/i.test(n)}function Wi(n=ie()){return/webos/i.test(n)}function nn(n=ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Va(n=ie()){var e;return nn(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wa(){return la()&&document.documentMode===10}function ji(n=ie()){return nn(n)||Hi(n)||Wi(n)||Vi(n)||/windows phone/i.test(n)||$i(n)}function ja(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n,e=[]){let t;switch(n){case"Browser":t=Er(ie());break;case"Worker":t=`${Er(ie())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${en}/${r}`}/**
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
 */class za{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kr(this),this.idTokenSubscription=new kr(this),this.beforeStateQueue=new za(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Di,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ie(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await nt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qt(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ra()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Je(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ie(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ie(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await nt.create(this,[Ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return k(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function at(n){return Je(n)}class kr{constructor(e){this.auth=e,this.observer=null,this.addObserver=pa(t=>this.observer=t)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ga(n,e,t){const r=at(n);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!t?.disableWarnings,s=Ki(e),{host:o,port:a}=qa(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ja()}function Ki(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qa(n){const e=Ki(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sr(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sr(o)}}}function Sr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ja(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return be("not implemented")}_getIdTokenResponse(e){return be("not implemented")}_linkToIdToken(e,t){return be("not implemented")}_getReauthenticationResolver(e){return be("not implemented")}}async function Ya(n,e){return Tt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(n,e){return At(n,"POST","/v1/accounts:signInWithPassword",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}async function Za(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Gn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new It(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new It(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Xa(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qa(e,{email:this._email,oobCode:this._password});default:le(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ya(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Za(e,{idToken:t,email:this._email,oobCode:this._password});default:le(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(n,e){return At(n,"POST","/v1/accounts:signInWithIdp",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="http://localhost";class Ge extends Gn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ge(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):le("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Vn(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ge(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return rt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,rt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rt(e,t)}buildRequest(){const e={requestUri:ec,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Et(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nc(n){const e=ut(ht(n)).link,t=e?ut(ht(e)).deep_link_id:null,r=ut(ht(n)).deep_link_id;return(r?ut(ht(r)).link:null)||r||t||e||n}class qn{constructor(e){var t,r,i,s,o,a;const c=ut(ht(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=tc((i=c.mode)!==null&&i!==void 0?i:null);k(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=nc(e);try{return new qn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.providerId=ct.PROVIDER_ID}static credential(e,t){return It._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=qn.parseLink(t);return k(r,"argument-error"),It._fromEmailAndCode(e,r.code,r.tenantId)}}ct.PROVIDER_ID="password";ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rt extends Jn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Rt{constructor(){super("facebook.com")}static credential(e){return Ge._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ae.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends Rt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ge._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ve.credential(t,r)}catch{return null}}}ve.GOOGLE_SIGN_IN_METHOD="google.com";ve.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Rt{constructor(){super("github.com")}static credential(e){return Ge._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.GITHUB_SIGN_IN_METHOD="github.com";Re.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Rt{constructor(){super("twitter.com")}static credential(e,t){return Ge._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ce.credential(t,r)}catch{return null}}}Ce.TWITTER_SIGN_IN_METHOD="twitter.com";Ce.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(n,e){return At(n,"POST","/v1/accounts:signUp",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await je._fromIdTokenResponse(e,r,i),o=Tr(r);return new qe({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Tr(r);return new qe({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Tr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends ot{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Jt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Jt(e,t,r,i)}}function Gi(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Jt._fromErrorAndOperation(n,s,e,r):s})}async function ic(n,e,t=!1){const r=await vt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qe._forOperation(n,"link",r)}/**
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
 */async function sc(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await vt(n,Gi(r,i,e,n),t);k(s.idToken,r,"internal-error");const o=zn(s.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(n.uid===a,r,"user-mismatch"),qe._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&le(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(n,e,t=!1){const r="signIn",i=await Gi(n,r,e),s=await qe._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function oc(n,e){return qi(at(n),e)}async function ac(n,e,t){const r=at(n),i=await rc(r,{returnSecureToken:!0,email:e,password:t}),s=await qe._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function cc(n,e,t){return oc(Je(n),ct.credential(e,t))}function lc(n,e,t,r){return Je(n).onIdTokenChanged(e,t,r)}function uc(n,e,t){return Je(n).beforeAuthStateChanged(e,t)}const Yt="__sak";/**
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
 */class Ji{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yt,"1"),this.storage.removeItem(Yt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(){const n=ie();return Kn(n)||nn(n)}const dc=1e3,fc=10;class Yi extends Ji{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hc()&&ja(),this.fallbackToPolling=ji(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Wa()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fc):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},dc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yi.type="LOCAL";const pc=Yi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Ji{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xi.type="SESSION";const Qi=Xi;/**
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
 */function gc(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class rn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new rn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await gc(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class mc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Yn("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return window}function _c(n){me().location.href=n}/**
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
 */function Zi(){return typeof me().WorkerGlobalScope<"u"&&typeof me().importScripts=="function"}async function yc(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vc(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bc(){return Zi()?self:null}/**
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
 */const es="firebaseLocalStorageDb",Ic=1,Xt="firebaseLocalStorage",ts="fbase_key";class Ct{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sn(n,e){return n.transaction([Xt],e?"readwrite":"readonly").objectStore(Xt)}function wc(){const n=indexedDB.deleteDatabase(es);return new Ct(n).toPromise()}function Nn(){const n=indexedDB.open(es,Ic);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Xt,{keyPath:ts})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Xt)?e(r):(r.close(),await wc(),e(await Nn()))})})}async function Ar(n,e,t){const r=sn(n,!0).put({[ts]:e,value:t});return new Ct(r).toPromise()}async function Ec(n,e){const t=sn(n,!1).get(e),r=await new Ct(t).toPromise();return r===void 0?null:r.value}function Rr(n,e){const t=sn(n,!0).delete(e);return new Ct(t).toPromise()}const kc=800,Sc=3;class ns{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Sc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rn._getInstance(bc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yc(),!this.activeServiceWorker)return;this.sender=new mc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nn();return await Ar(e,Yt,"1"),await Rr(e,Yt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ar(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ec(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Rr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=sn(i,!1).getAll();return new Ct(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ns.type="LOCAL";const Tc=ns;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Rc(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ge("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Ac().appendChild(r)})}function Cc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new kt(3e4,6e4);/**
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
 */function rs(n,e){return e?Ie(e):(k(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Xn extends Gn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Oc(n){return qi(n.auth,new Xn(n),n.bypassAuthState)}function Dc(n){const{auth:e,user:t}=n;return k(t,e,"internal-error"),sc(t,new Xn(n),n.bypassAuthState)}async function Pc(n){const{auth:e,user:t}=n;return k(t,e,"internal-error"),ic(t,new Xn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Oc;case"linkViaPopup":case"linkViaRedirect":return Pc;case"reauthViaPopup":case"reauthViaRedirect":return Dc;default:le(this.auth,"internal-error")}}resolve(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new kt(2e3,1e4);async function Lc(n,e,t){const r=at(n);Ea(n,e,Jn);const i=rs(r,t);return new We(r,"signInViaPopup",e,i).executeNotNull()}class We extends is{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,We.currentPopupAction&&We.currentPopupAction.cancel(),We.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const e=Yn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,We.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Mc.get())};e()}}We.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="pendingRedirect",Bt=new Map;class xc extends is{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Bt.get(this.auth._key());if(!e){try{const r=await Bc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Bt.set(this.auth._key(),e)}return this.bypassAuthState||Bt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bc(n,e){const t=$c(e),r=Fc(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Uc(n,e){Bt.set(n._key(),e)}function Fc(n){return Ie(n._redirectPersistence)}function $c(n){return xt(Nc,n.config.apiKey,n.name)}async function Hc(n,e,t=!1){const r=at(n),i=rs(r,e),o=await new xc(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=10*60*1e3;class Wc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ss(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ge(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cr(e))}saveEventToCache(e){this.cachedEventUids.add(Cr(e)),this.lastProcessedEventTime=Date.now()}}function Cr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ss({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function jc(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ss(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(n,e={}){return Tt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gc=/^https?/;async function qc(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zc(n);for(const t of e)try{if(Jc(t))return}catch{}le(n,"unauthorized-domain")}function Jc(n){const e=Ln(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Gc.test(t))return!1;if(Kc.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Yc=new kt(3e4,6e4);function Or(){const n=me().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xc(n){return new Promise((e,t)=>{var r,i,s;function o(){Or(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Or(),t(ge(n,"network-request-failed"))},timeout:Yc.get()})}if(!((i=(r=me().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=me().gapi)===null||s===void 0)&&s.load)o();else{const a=Cc("iframefcb");return me()[a]=()=>{gapi.load?o():t(ge(n,"network-request-failed"))},Rc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Ut=null,e})}let Ut=null;function Qc(n){return Ut=Ut||Xc(n),Ut}/**
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
 */const Zc=new kt(5e3,15e3),el="__/auth/iframe",tl="emulator/auth/iframe",nl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function il(n){const e=n.config;k(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?jn(e,tl):`https://${n.config.authDomain}/${el}`,r={apiKey:e.apiKey,appName:n.name,v:en},i=rl.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Et(r).slice(1)}`}async function sl(n){const e=await Qc(n),t=me().gapi;return k(t,n,"internal-error"),e.open({where:document.body,url:il(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nl,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ge(n,"network-request-failed"),a=me().setTimeout(()=>{s(o)},Zc.get());function c(){me().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const ol={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},al=500,cl=600,ll="_blank",ul="http://localhost";class Dr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hl(n,e,t,r=al,i=cl){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ol),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ie().toLowerCase();t&&(a=Fi(l)?ll:t),Ui(l)&&(e=e||ul,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(Va(l)&&a!=="_self")return dl(e||"",a),new Dr(null);const h=window.open(e||"",a,u);k(h,n,"popup-blocked");try{h.focus()}catch{}return new Dr(h)}function dl(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const fl="__/auth/handler",pl="emulator/auth/handler";function Pr(n,e,t,r,i,s){k(n.config.authDomain,n,"auth-domain-config-required"),k(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:en,eventId:i};if(e instanceof Jn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",fa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Rt){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${gl(n)}?${Et(a).slice(1)}`}function gl({config:n}){return n.emulator?jn(n,pl):`https://${n.authDomain}/${fl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="webStorageSupport";class ml{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qi,this._completeRedirectFn=Hc,this._overrideRedirectResult=Uc}async _openPopup(e,t,r,i){var s;Ee((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Pr(e,t,r,Ln(),i);return hl(e,o,Yn())}async _openRedirect(e,t,r,i){return await this._originValidation(e),_c(Pr(e,t,r,Ln(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ee(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await sl(e),r=new Wc(e);return t.register("authEvent",i=>(k(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mn,{type:mn},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[mn];o!==void 0&&t(!!o),le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ji()||Kn()||nn()}}const _l=ml;var Mr="@firebase/auth",Lr="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bl(n){_t(new yr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{k(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),k(!o?.includes(":"),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zi(n)},u=new Ka(a,c,l);return Sa(u,t),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),_t(new yr("auth-internal",e=>{const t=at(e.getProvider("auth").getImmediate());return(r=>new yl(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(Mr,Lr,vl(n)),tt(Mr,Lr,"esm2017")}/**
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
 */const Il=5*60,wl=Ri("authIdTokenMaxAge")||Il;let Nr=null;const El=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>wl)return;const i=t?.token;Nr!==i&&(Nr=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kl(n=$o()){const e=wi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ka(n,{popupRedirectResolver:_l,persistence:[Tc,pc,Qi]}),r=Ri("authTokenSyncURL");if(r){const s=El(r);uc(t,s,()=>s(t.currentUser)),lc(t,o=>s(o))}const i=sa("auth");return i&&Ga(t,`http://${i}`),t}bl("Browser");const Sl=()=>{},Tl="https://api.cubingapp.com:3000",Al={apiKey:"AIzaSyCnwuoBqAR6cx7uqzxf7iEC99sZf36sZZA",authDomain:"virtual-cube.firebaseapp.com",projectId:"virtual-cube",storageBucket:"virtual-cube.appspot.com",messagingSenderId:"371073332227",appId:"1:371073332227:web:c96d3137080aecfe634a36",measurementId:"G-YR33BDCQDY"},Rl=Ei(Al),on=()=>kl(Rl);async function an(n,e){return await fetch(`${Tl}${n}`,{method:"POST",body:JSON.stringify(e)}).then(r=>r.json())}async function Cl(n){return an("/user",{email:n})}const os="algSet",xr="casesToday",as="showScramble",Qn="user";function Ol(){return localStorage.getItem(os)??""}function Dl(n){localStorage.setItem(os,n)}let Qt={get:()=>{const n=localStorage.getItem(xr);return n?JSON.parse(n):{count:0,msSinceEpoch:Date.now()}},set:n=>{localStorage.setItem(xr,JSON.stringify(n))}};function Pl(){return xl(as)??!1}function Ml(n){Bl(as,n)}function Ll(){return localStorage.getItem(Qn)}function cs(){localStorage.removeItem(Qn)}function Nl(n){localStorage.setItem(Qn,n)}function xl(n){const e=localStorage.getItem(n);return e===null?null:e=="1"}function Bl(n,e){localStorage.setItem(n,e?"1":"0")}class ls{email;uid;constructor(){}toJsonString(){return JSON.stringify({email:this.email,uid:this.uid})}fromJsonString(e){const t=JSON.parse(e);this.email=t.email,this.uid=t.uid}}function us(n){Sl("Signed in as "+n.email+" with uid "+n.uid)}function Ul(){const n=Ll();if(!n)return null;const e=new ls;return e.fromJsonString(n),!e.email||!e.uid?(cs(),null):(us(e),e)}function Zn(n,e){const t=new ls;t.email=n.user.email,Cl(t.email).then(r=>{t.uid=r.uid,Nl(t.toJsonString()),us(t),e(t)})}function Fl(n){const e=on(),t=new ve;Lc(e,t).then(r=>{Zn(r,n)}).catch(r=>{console.log(r)})}function $l(n,e,t){const r=on();ac(r,n,e).then(i=>{Zn(i,t)}).catch(i=>{console.log(i.message)})}function Hl(n,e,t){const r=on();cc(r,n,e).then(i=>{Zn(i,t)}).catch(i=>{console.log(i.message)})}function Vl(){on().signOut(),cs()}function Wl(n){let e,t,r;return{c(){e=v("button"),e.textContent="Create Account",A(e,"class","btn-primary")},m(i,s){$(i,e,s),t||(r=oe(e,"click",n[3]),t=!0)},p:x,i:x,o:x,d(i){i&&U(e),t=!1,r()}}}function jl(n,e,t){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{$l(r,i,s)};return n.$$set=a=>{"email"in a&&t(0,r=a.email),"password"in a&&t(1,i=a.password),"callback"in a&&t(2,s=a.callback)},[r,i,s,o]}class zl extends pe{constructor(e){super(),fe(this,e,jl,Wl,de,{email:0,password:1,callback:2})}}function Kl(n){let e,t,r;return{c(){e=v("button"),e.textContent="Sign In",A(e,"class","btn-primary")},m(i,s){$(i,e,s),t||(r=oe(e,"click",n[3]),t=!0)},p:x,i:x,o:x,d(i){i&&U(e),t=!1,r()}}}function Gl(n,e,t){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{Hl(r,i,s)};return n.$$set=a=>{"email"in a&&t(0,r=a.email),"password"in a&&t(1,i=a.password),"callback"in a&&t(2,s=a.callback)},[r,i,s,o]}class ql extends pe{constructor(e){super(),fe(this,e,Gl,Kl,de,{email:0,password:1,callback:2})}}function Jl(n){let e,t,r;return{c(){e=v("button"),e.innerHTML=`<div class="row"><svg style="width: 20px; height: 20px; margin-right: 0.6rem;" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path><path fill="none" d="M2 2h44v44H2z"></path></svg> 
        <p style="font-size: 1rem; color: black;">Sign in with Google</p></div>`,A(e,"class","btn-white")},m(i,s){$(i,e,s),t||(r=oe(e,"click",n[1]),t=!0)},p:x,i:x,o:x,d(i){i&&U(e),t=!1,r()}}}function Yl(n,e,t){let{callback:r}=e;const i=()=>Fl(r);return n.$$set=s=>{"callback"in s&&t(0,r=s.callback)},[r,i]}class Xl extends pe{constructor(e){super(),fe(this,e,Yl,Jl,de,{callback:0})}}function Ql(n){let e,t,r,i;return{c(){e=v("input"),A(e,"class",t=n[1].class),A(e,"type","email"),A(e,"placeholder","Email")},m(s,o){$(s,e,o),Vt(e,n[0]),r||(i=oe(e,"input",n[2]),r=!0)},p(s,[o]){o&2&&t!==(t=s[1].class)&&A(e,"class",t),o&1&&e.value!==s[0]&&Vt(e,s[0])},i:x,o:x,d(s){s&&U(e),r=!1,i()}}}function Zl(n,e,t){let{value:r}=e;function i(){r=this.value,t(0,r)}return n.$$set=s=>{t(1,e=he(he({},e),_e(s))),"value"in s&&t(0,r=s.value)},e=_e(e),[r,e,i]}class eu extends pe{constructor(e){super(),fe(this,e,Zl,Ql,de,{value:0})}}function tu(n){let e,t,r,i;return{c(){e=v("input"),A(e,"class",t=n[1].class),A(e,"type","password"),A(e,"placeholder","Password")},m(s,o){$(s,e,o),Vt(e,n[0]),r||(i=oe(e,"input",n[2]),r=!0)},p(s,[o]){o&2&&t!==(t=s[1].class)&&A(e,"class",t),o&1&&e.value!==s[0]&&Vt(e,s[0])},i:x,o:x,d(s){s&&U(e),r=!1,i()}}}function nu(n,e,t){let{value:r}=e;function i(){r=this.value,t(0,r)}return n.$$set=s=>{t(1,e=he(he({},e),_e(s))),"value"in s&&t(0,r=s.value)},e=_e(e),[r,e,i]}class ru extends pe{constructor(e){super(),fe(this,e,nu,tu,de,{value:0})}}function iu(n){let e,t,r,i;const s=n[6].default,o=ci(s,n,n[5],null);return{c(){e=v("div"),o&&o.c(),A(e,"class",t=Ht("hoverable "+n[1].class)+" svelte-euathk"),A(e,"style",r=n[0]+n[1].style)},m(a,c){$(a,e,c),o&&o.m(e,null),i=!0},p(a,[c]){o&&o.p&&(!i||c&32)&&hi(o,s,a,a[5],i?ui(s,a[5],c,null):di(a[5]),null),(!i||c&2&&t!==(t=Ht("hoverable "+a[1].class)+" svelte-euathk"))&&A(e,"class",t),(!i||c&2&&r!==(r=a[0]+a[1].style))&&A(e,"style",r)},i(a){i||(D(o,a),i=!0)},o(a){L(o,a),i=!1},d(a){a&&U(e),o&&o.d(a)}}}function su(n,e,t){let{$$slots:r={},$$scope:i}=e,{background:s="transparent"}=e,{borderRadius:o="inherit"}=e,{hovBackground:a="transparent"}=e,c=`
    --background: ${s};
    --border-radius: ${o};
    --hov-background: ${a};
    `;return n.$$set=l=>{t(1,e=he(he({},e),_e(l))),"background"in l&&t(2,s=l.background),"borderRadius"in l&&t(3,o=l.borderRadius),"hovBackground"in l&&t(4,a=l.hovBackground),"$$scope"in l&&t(5,i=l.$$scope)},e=_e(e),[c,e,s,o,a,i,r]}class gt extends pe{constructor(e){super(),fe(this,e,su,iu,de,{background:2,borderRadius:3,hovBackground:4})}}function ou(n){let e,t,r,i,s;return{c(){e=v("button"),A(e,"class",t=Ht(n[1].class)+" svelte-18z7rew"),A(e,"style",r=n[1].style)},m(o,a){$(o,e,a),e.innerHTML=n[0],i||(s=oe(e,"click",n[4]),i=!0)},p(o,[a]){a&2&&t!==(t=Ht(o[1].class)+" svelte-18z7rew")&&A(e,"class",t),a&2&&r!==(r=o[1].style)&&A(e,"style",r)},i:x,o:x,d(o){o&&U(e),i=!1,s()}}}function au(n,e,t){let{name:r}=e,{stroke:i="white"}=e,o={chart:`<svg x="0px" y="0px" stroke="white" fill="white" stroke-width="5" viewBox="0 0 100 100" xml:space="preserve">
            <circle style="fill-opacity: 0; opacity: 1;" cx="50" cy="50" r="48" />
            <path fill="none" stroke="white" stroke-linecap="round" d="M 25, 75 L 42 40 L 58 60 L 75 25 "/>
        </svg>`,happy:`<svg width="100%" height="100%" stroke="${i}" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
            <circle cx="25" cy="25" r="22" />
            <circle cx="18" cy="20" r="3" />
            <circle cx="32" cy="20" r="3" />
            <path d="M 15,33 Q 25,40 35,33"/>
        </svg>`,menu:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${i}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
            <line x1="3" y1="4" x2="21" y2="4"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="20" x2="21" y2="20"></line>
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
        </svg>`}[r];function a(c){ws.call(this,n,c)}return n.$$set=c=>{t(1,e=he(he({},e),_e(c))),"name"in c&&t(2,r=c.name),"stroke"in c&&t(3,i=c.stroke)},e=_e(e),[o,e,r,i,a]}class we extends pe{constructor(e){super(),fe(this,e,au,ou,de,{name:2,stroke:3})}}function cu(n){let e,t;return e=new we({props:{name:"x",style:"padding: 4px;"}}),e.$on("click",n[3]),{c(){Y(e.$$.fragment)},m(r,i){G(e,r,i),t=!0},p:x,i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){q(e,r)}}}function lu(n){let e,t,r,i,s,o,a,c;o=new gt({props:{hovBackground:"var(--gray-500)",borderRadius:"4px",$$slots:{default:[cu]},$$scope:{ctx:n}}});const l=n[2].default,u=ci(l,n,n[4],null);return{c(){e=v("div"),t=v("div"),r=v("p"),i=re(n[0]),s=b(),Y(o.$$.fragment),a=b(),u&&u.c(),A(t,"class","drawer-header svelte-1yj1jo6"),A(e,"class","drawer svelte-1yj1jo6")},m(h,d){$(h,e,d),p(e,t),p(t,r),p(r,i),p(t,s),G(o,t,null),p(e,a),u&&u.m(e,null),c=!0},p(h,[d]){(!c||d&1)&&wt(i,h[0]);const f={};d&18&&(f.$$scope={dirty:d,ctx:h}),o.$set(f),u&&u.p&&(!c||d&16)&&hi(u,l,h,h[4],c?ui(l,h[4],d,null):di(h[4]),null)},i(h){c||(D(o.$$.fragment,h),D(u,h),c=!0)},o(h){L(o.$$.fragment,h),L(u,h),c=!1},d(h){h&&U(e),q(o),u&&u.d(h)}}}function uu(n,e,t){let{$$slots:r={},$$scope:i}=e,{title:s}=e,{close:o}=e;const a=()=>o();return n.$$set=c=>{"title"in c&&t(0,s=c.title),"close"in c&&t(1,o=c.close),"$$scope"in c&&t(4,i=c.$$scope)},[s,o,r,a,i]}class er extends pe{constructor(e){super(),fe(this,e,uu,lu,de,{title:0,close:1})}}const hu=[1,1,1,1],du=[.5,.5,.5,1],fu=[1,1,0,1],pu=[0,1,0,1],gu=[0,0,1,1],mu=[1,.5,0,1],_u=[1,0,0,1],yu=[0,0,0,1],Br=[hu,pu,fu,gu,mu,_u];function Ur(n){return(n<0||n>=Br.length)&&console.error("Invalid face: "+n),Br[n]}function Fr(n,e){return Math.floor(n/T(e.layers))}function vu(n){return n[ze(n.length)]}function ze(n){return Math.floor(Math.random()*n)}function bu(n){let e=n.length;for(;e!=0;){let t=ze(e);e--;let r=n[t];n[t]=n[e],n[e]=r}return n}function tr(n){return n<=0?2:tr(n-1)+n+2}function Iu(n){n[0].Score++;let e=tr(n[0].Score);const t=Math.ceil(n.length*3/4);e>t&&(e=t+ze(n.length-t)),hs(n,e)}function wu(n){n[0].Score=0,hs(n,tr(0))}function hs(n,e){const t=n[0];for(let r=0;r<e;r++)n[r]=n[r+1];n[e]=t}const De=0,Pe=1,Me=2,Le=3,Ne=4,xe=5,Eu=[[De,Le,Ne],[De,xe,Le],[De,Ne,Pe],[De,Pe,xe],[Me,Pe,Ne],[Me,xe,Pe],[Me,Ne,Le],[Me,Le,xe]],ku=[[De,Le],[De,Ne],[De,xe],[De,Pe],[Pe,Ne],[Pe,xe],[Me,Pe],[Me,Ne],[Me,xe],[Me,Le],[Le,Ne],[Le,xe]];function Su(n){let e=$r(12,2),t=$r(8,3),r=_n(8),i=_n(12);for(;Hr(r)!==Hr(i);)r=_n(8);const s=Array(54);for(let S=0;S<6;S++){const H=n.center(S);s[H]=S}let o=n.corners(0,0),a=n.corners(1,0),c=n.corners(2,0),l=n.corners(3,0),u=n.corners(4,0),h=n.corners(5,0);const d=(S,H,P,W,F,j,Z,te,B)=>{const R=(Q,ne)=>Eu[r[Q]][(t[Q]+ne)%3];s[S.topLeft]=R(H,j),s[S.topRight]=R(P,Z),s[S.bottomLeft]=R(W,te),s[S.bottomRight]=R(F,B)};d(o,0,1,2,3,0,0,0,0),d(a,2,3,4,5,2,1,1,2),d(c,4,5,6,7,0,0,0,0),d(l,6,7,0,1,2,1,1,2),d(u,0,2,6,4,2,1,1,2),d(h,3,1,5,7,2,1,1,2);let f=n.edges(0,0,0),g=n.edges(1,0,0),_=n.edges(2,0,0),m=n.edges(3,0,0),y=n.edges(4,0,0),N=n.edges(5,0,0);const C=(S,H,P,W,F,j,Z,te,B)=>{const R=(Q,ne)=>ku[i[Q]][(e[Q]+ne)%2];s[S.top]=R(H,j),s[S.left]=R(P,Z),s[S.right]=R(W,te),s[S.bottom]=R(F,B)};return C(f,0,1,2,3,0,0,0,0),C(g,3,4,5,6,1,0,0,1),C(_,6,7,8,9,0,0,0,0),C(m,9,10,11,0,1,0,0,1),C(y,1,10,4,7,1,1,1,1),C(N,2,5,11,8,1,1,1,1),s}function $r(n,e){const t=Array(n);for(let r=0;r<n;r++)t[r]=ze(e);for(;!Tu(t,e);){const r=ze(n);t[r]=ze(e)}return t}function Tu(n,e){let t=0;for(let r=0;r<n.length;r++)t+=n[r];return t%e===0}function _n(n){const e=Array(n);for(let t=0;t<n;t++)e[t]=t;return bu(e),e}function Hr(n){const e=[...n];let t=!1;for(;;)if(e[0]===0){const r=e.findIndex((i,s)=>i!==s);if(r===-1)return t;e[0]=e[r],e[r]=0,t=!t}else{const r=e[0];e[0]=e[r],e[r]=r,t=!t}}let Oe;function Ft(n,e){const t=[e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3]];Oe.bindBuffer(Oe.ARRAY_BUFFER,n.buffer),Oe.bufferData(Oe.ARRAY_BUFFER,new Float32Array(t),Oe.STATIC_DRAW)}function T(n){return n*n}function X(n){return Math.floor(n/2)}function lt(n){return n%2==0}function se(n){return n*n*6}class Au{stickers;underStickers;layers;affectedStickers;disableTurn;clockwise;animationQueue;constructor(e){Oe=e,this.animationQueue=[]}setColors(e){for(let t=0;t<se(this.layers);t++)Ft(this.stickers[t],e[t])}solve(){const e=Array(se(this.layers));for(let t=0;t<se(this.layers);t++){const r=Fr(t,this);this.stickers[t].face=r,e[t]=Ur(r)}this.setColors(e)}scramble(){if(this.layers===3){this.scramble3x3();return}this.naiveScramble()}scramble3x3(){const e=Su(this);this.setCubeState(e)}naiveScramble(){let e=T(this.layers)*10;for(let t=0;t<e;t++){let r=Math.floor(Math.random()*3),i=Math.floor(Math.random()*this.layers),s=Math.floor(Math.random()*1)==0;this._matchTurn(r,i,s)}}setNumOfLayers(e){this.layers=e,this.stickers=Array(se(e)),this.underStickers=Array(se(e));for(let t=0;t<se(e);t++){const r=Fr(t,this);this.stickers[t]={face:r,buffer:Oe.createBuffer()},this.underStickers[t]={face:r,buffer:Oe.createBuffer()},Ft(this.underStickers[t],yu)}this.affectedStickers=Array(se(e)).fill(!1)}getCubeState(){return this.stickers.map(e=>e.face)}setCubeState(e){for(let t=0;t<se(this.layers);t++){const r=Ur(e[t]);this.stickers[t].face=e[t],Ft(this.stickers[t],r)}}resetAffectedStickers(){const e=Array(se(this.layers));this.affectedStickers=e.fill(this.layers===1)}pushAnimation(e,t,r){let i=t?-1:1,s=[0,0,0];s[e]=i,this.animationQueue.push({axis:s,stickers:r,stickersToAnimate:this.affectedStickers})}turn(e,t,r){this.resetAffectedStickers(),this.pushAnimation(e,r,[...this.stickers]),this._matchTurn(e,t,r)}sliceTurn(e,t){const r=Array(se(this.layers));this.affectedStickers=r.fill(!1),this.pushAnimation(e,t,[...this.stickers]);for(let i=1;i<this.layers-1;i++)this._matchTurn(e,i,t)}wideTurn(e,t,r){this.resetAffectedStickers(),this.pushAnimation(e,r,[...this.stickers]),this._matchTurn(e,t,r);for(let i=1;i<this.layers-1;i++)this._matchTurn(e,i,r)}cubeRotate(e,t){this.resetAffectedStickers(),this.pushAnimation(e,t,[...this.stickers]);for(let r=0;r<this.layers;r++)this._matchTurn(e,r,t)}_matchTurn(e,t,r){e==0?(this._turnXAxis(t,r),t==0?this._turnOuter(5,r):t==this.layers-1&&this._turnOuter(4,!r)):e==1?(this._turnYAxis(t,r),t==0?this._turnOuter(0,r):t==this.layers-1&&this._turnOuter(2,!r)):e==2?(this._turnZAxis(t,r),t==0?this._turnOuter(1,r):t==this.layers-1&&this._turnOuter(3,!r)):console.error(`Axis ${e} not recognized`)}_turnXAxis(e,t){for(let r=1;r<=this.layers;r++)this._cycle(t,0*T(this.layers)+T(this.layers)-r-e*this.layers,3*T(this.layers)+T(this.layers)-r-e*this.layers,2*T(this.layers)+T(this.layers)-r-e*this.layers,1*T(this.layers)+T(this.layers)-r-e*this.layers)}_turnYAxis(e,t){for(let r=0;r<this.layers;r++)this._cycle(t,1*T(this.layers)+r*this.layers+e,4*T(this.layers)+r*this.layers+e,3*T(this.layers)+(this.layers-r-1)*this.layers+(this.layers-1)-e,5*T(this.layers)+r*this.layers+e)}_turnZAxis(e,t){for(let r=0;r<this.layers;r++)this._cycle(t,0*T(this.layers)+(r+1)*this.layers-1-e,5*T(this.layers)+r+this.layers*e,2*T(this.layers)+(this.layers-r-1)*this.layers+e,4*T(this.layers)+T(this.layers)-(r+1)-e*this.layers)}_turnOuter(e,t){if(this.layers%2!=0){let r=this.center(e);this.affectedStickers[r]=!0}for(let r=0;r<Math.floor(this.layers/2);r++){const{topLeft:i,topRight:s,bottomLeft:o,bottomRight:a}=this.corners(e,r);this._cycle(t,i,s,a,o);let c=this.layers-2*(r+1);for(let l=0;l<c;l++){const{top:u,left:h,bottom:d,right:f}=this.edges(e,r,l);this._cycle(t,u,f,d,h)}}}_cycle(e,t,r,i,s){this.affectedStickers[t]=!0,this.affectedStickers[r]=!0,this.affectedStickers[i]=!0,this.affectedStickers[s]=!0,e?this._cycleHelper(t,r,i,s):this._cycleHelper(s,i,r,t)}_cycleHelper(e,t,r,i){let s=this.stickers[i];this.stickers[i]=this.stickers[r],this.stickers[r]=this.stickers[t],this.stickers[t]=this.stickers[e],this.stickers[e]=s}matchKeyToTurn(e){if(!this.disableTurn&&!e.ctrlKey)return this.matchKeyCodeToTurn(e.code)}matchKeyCodeToTurn(e){switch(e){case"KeyN":return this.cubeRotate(0,!0),{notation:"x",rotate:!0};case"KeyB":return this.cubeRotate(0,!1),{notation:"x'",rotate:!0};case"Semicolon":return this.cubeRotate(1,!0),{notation:"y",rotate:!0};case"KeyA":return this.cubeRotate(1,!1),{notation:"y'",rotate:!0};case"KeyP":return this.cubeRotate(2,!0),{notation:"z",rotate:!0};case"KeyQ":return this.cubeRotate(2,!1),{notation:"z'",rotate:!0};case"KeyJ":return this.turn(1,0,!0),{notation:"U",turn:!0};case"KeyF":return this.turn(1,0,!1),{notation:"U'",turn:!0};case"KeyS":return this.turn(1,this.layers-1,!1),{notation:"D",turn:!0};case"KeyL":return this.turn(1,this.layers-1,!0),{notation:"D'",turn:!0};case"KeyH":return this.turn(2,0,!0),{notation:"F",turn:!0};case"KeyG":return this.turn(2,0,!1),{notation:"F'",turn:!0};case"KeyW":return this.turn(2,this.layers-1,!1),{notation:"B",turn:!0};case"KeyO":return this.turn(2,this.layers-1,!0),{notation:"B'",turn:!0};case"KeyD":return this.turn(0,this.layers-1,!1),{notation:"L",turn:!0};case"KeyE":return this.turn(0,this.layers-1,!0),{notation:"L'",turn:!0};case"KeyI":return this.turn(0,0,!0),{notation:"R",turn:!0};case"KeyK":return this.turn(0,0,!1),{notation:"R'",turn:!0};case"BracketLeft":return this.sliceTurn(0,!1),{notation:"M",turn:!0};case"Quote":return this.sliceTurn(0,!0),{notation:"M'",turn:!0};case"KeyC":return this.sliceTurn(1,!1),{notation:"E",turn:!0};case"Comma":return this.sliceTurn(1,!0),{notation:"E'",turn:!0};case"KeyY":return this.sliceTurn(2,!0),{notation:"S",turn:!0};case"KeyT":return this.sliceTurn(2,!1),{notation:"S'",turn:!0};case"KeyU":return this.wideTurn(0,0,!0),{notation:"r",turn:!0};case"KeyM":return this.wideTurn(0,0,!1),{notation:"r'",turn:!0};case"KeyV":return this.wideTurn(0,this.layers-1,!1),{notation:"l",turn:!0};case"KeyR":return this.wideTurn(0,this.layers-1,!0),{notation:"l'",turn:!0}}}stepAlgorithm(e,t){switch(e){case"x":this.cubeRotate(0,t);break;case"x'":this.cubeRotate(0,!t);break;case"x2":case"x2'":this.cubeRotate(0,t),this.cubeRotate(0,t);break;case"y":this.cubeRotate(1,t);break;case"y'":this.cubeRotate(1,!t);break;case"y2":case"y2'":this.cubeRotate(1,t),this.cubeRotate(1,t);break;case"z":this.cubeRotate(2,t);break;case"z'":this.cubeRotate(2,!t);break;case"z2":case"z2'":this.cubeRotate(2,t),this.cubeRotate(2,t);break;case"U":this.turn(1,0,t);break;case"U'":this.turn(1,0,!t);break;case"U2":case"U2'":this.turn(1,0,t),this.turn(1,0,t);break;case"u":this.wideTurn(1,0,t);break;case"u'":this.wideTurn(1,0,!t);break;case"u2":case"u2'":this.wideTurn(1,0,t),this.wideTurn(1,0,t);break;case"D":this.turn(1,this.layers-1,!t);break;case"D'":this.turn(1,this.layers-1,t);break;case"D2":case"D2'":this.turn(1,this.layers-1,t),this.turn(1,this.layers-1,t);break;case"d":this.wideTurn(1,this.layers-1,!t);break;case"d'":this.wideTurn(1,this.layers-1,t);break;case"d2":case"d2'":this.wideTurn(1,this.layers-1,t),this.wideTurn(1,this.layers-1,t);break;case"F":this.turn(2,0,t);break;case"F'":this.turn(2,0,!t);break;case"F2":case"F2'":this.turn(2,0,t),this.turn(2,0,t);break;case"f":this.wideTurn(2,0,t);break;case"f'":this.wideTurn(2,0,!t);break;case"f2":case"f2'":this.wideTurn(2,0,t),this.wideTurn(2,0,t);break;case"B":this.turn(2,this.layers-1,!t);break;case"B'":this.turn(2,this.layers-1,t);break;case"B2":case"B2'":this.turn(2,this.layers-1,t),this.turn(2,this.layers-1,t);break;case"b":this.wideTurn(2,this.layers-1,!t);break;case"b'":this.wideTurn(2,this.layers-1,t);break;case"b2":case"b2'":this.wideTurn(2,this.layers-1,t),this.wideTurn(2,this.layers-1,t);break;case"L":this.turn(0,this.layers-1,!t);break;case"L'":this.turn(0,this.layers-1,t);break;case"L2":case"L2'":this.turn(0,this.layers-1,t),this.turn(0,this.layers-1,t);break;case"l":this.wideTurn(0,this.layers-1,!t);break;case"l'":this.wideTurn(0,this.layers-1,t);break;case"l2":case"l2'":this.wideTurn(0,this.layers-1,t),this.wideTurn(0,this.layers-1,t);break;case"R":this.turn(0,0,t);break;case"R'":this.turn(0,0,!t);break;case"R2":case"R2'":this.turn(0,0,t),this.turn(0,0,t);break;case"r":this.wideTurn(0,0,t);break;case"r'":this.wideTurn(0,0,!t);break;case"r2":case"r2'":this.wideTurn(0,0,t),this.wideTurn(0,0,t);break;case"M":this.turn(0,1,!t);break;case"M'":this.turn(0,1,t);break;case"M2":case"M2'":this.sliceTurn(0,t),this.sliceTurn(0,t);break;case"E":this.sliceTurn(1,!t);break;case"E'":this.sliceTurn(1,t);break;case"E2":case"E2'":this.sliceTurn(1,t),this.sliceTurn(1,t);break;case"S":this.sliceTurn(2,t);break;case"S'":this.sliceTurn(2,!t);break;case"S2":case"S2'":this.sliceTurn(2,t);default:throw new Error("Invalid turn in algorithm: "+e)}}execAlg(e){if(!e)return;let t=e.split(" ");for(let r=0;r<t.length;r++)this.stepAlgorithm(t[r],!0);this.animationQueue=[]}execAlgReverse(e){if(!e)return;let t=e.split(" ");for(let r=t.length-1;r>=0;r--)this.stepAlgorithm(t[r],!1);this.animationQueue=[]}stickerIsOnFace(e,t){return t*T(this.layers)<=e&&e<(t+1)*T(this.layers)}center(e){return e*T(this.layers)+Math.floor(T(this.layers)/2)}corners(e,t){const r=e*T(this.layers);return{topLeft:r+(this.layers+1)*t,topRight:r+(this.layers-1)*(this.layers-t),bottomRight:r+(this.layers+1)*(this.layers-t-1),bottomLeft:r+(this.layers-1)*(t+1)}}edges(e,t,r){const i=this.corners(e,t);let s=this.layers-2*(t+1);return{top:i.topLeft+this.layers*(r+1),left:i.topLeft+(s-r),right:i.topRight+r+1,bottom:i.bottomLeft+this.layers*(s-r)}}}function xn(n){const e=n.gl,t=n.cube,r=n.perspectiveMatrix;let i=yn(t,1.01,.02),s=yn(t,1,0),o=yn(t,1.5,.02);const a=Array(se(t.layers));for(let c=0;c<se(t.layers);c++){let l={positionBuffer:e.createBuffer(),noGapPositionBuffer:e.createBuffer(),hintPositionBuffer:e.createBuffer(),indexBuffer:e.createBuffer(),cart2d:[],positions:null},u=new Float32Array(12),h=new Float32Array(12),d=new Float32Array(12);for(let _=0;_<12;_++){let m=c*12+_;u[_]=i[m],h[_]=s[m],d[_]=o[m]}e.bindBuffer(e.ARRAY_BUFFER,l.positionBuffer),e.bufferData(e.ARRAY_BUFFER,u,e.STATIC_DRAW),l.positions=u,e.bindBuffer(e.ARRAY_BUFFER,l.noGapPositionBuffer),e.bufferData(e.ARRAY_BUFFER,h,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,l.hintPositionBuffer),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW);const f=Array(16);Pt(f,0,r,[h[0],h[1],h[2],1]),Pt(f,4,r,[h[3],h[4],h[5],1]),Pt(f,8,r,[h[6],h[7],h[8],1]),Pt(f,12,r,[h[9],h[10],h[11],1]),l.cart2d=[f[0]/f[3],f[1]/f[3],f[4]/f[7],f[5]/f[7],f[8]/f[11],f[9]/f[11],f[12]/f[15],f[13]/f[15]];const g=[0,1,2,0,2,3];e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(g),e.STATIC_DRAW),a[c]=l}return a}function Pt(n,e,t,r){Array(4);let i=r[0],s=r[1],o=r[2],a=r[3];n[e+0]=i*t[0]+s*t[4]+o*t[8]+a*t[12],n[e+1]=i*t[1]+s*t[5]+o*t[9]+a*t[13],n[e+2]=i*t[2]+s*t[6]+o*t[10]+a*t[14],n[e+3]=i*t[3]+s*t[7]+o*t[11]+a*t[15]}const ds=12,Ru=4,Qe=3;function yn(n,e,t){const r=T(n.layers)*ds,i=Array(6*r);return Cu(i,0*r,n,1,e,t),Ou(i,1*r,n,0,e,t),Du(i,2*r,n,1,-e,t),Pu(i,3*r,n,0,-e,t),Mu(i,4*r,n,2,-e,t),Lu(i,5*r,n,2,e,t),i}function Cu(n,e,t,r,i,s){if(lt(t.layers)){let c=Array(T(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=0;h<t.layers;h++){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,i],l++}ue(n,e,t,c,r,s);return}let o=Array(T(t.layers)),a=0;for(let c=-X(t.layers);c<=X(t.layers);c++)for(let l=-X(t.layers);l<=X(t.layers);l++)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;ue(n,e,t,o,r,s)}function Ou(n,e,t,r,i,s){if(lt(t.layers)){let c=Array(T(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){const d=-1+1/t.layers+u*2/t.layers,f=-1+1/t.layers+h*2/t.layers;c[l]=[d,f,i],l++}ue(n,e,t,c,r,s);return}let o=Array(T(t.layers)),a=0;for(let c=-X(t.layers);c<=X(t.layers);c++)for(let l=X(t.layers);l>=-X(t.layers);l--)o[a]=[2*c/t.layers,2*l/t.layers,i],a++;ue(n,e,t,o,r,s)}function Du(n,e,t,r,i,s){if(lt(t.layers)){let c=Array(T(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,i],l++}ue(n,e,t,c,r,s);return}let o=Array(T(t.layers)),a=0;for(let c=-X(t.layers);c<=X(t.layers);c++)for(let l=X(t.layers);l>=-X(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;ue(n,e,t,o,r,s)}function Pu(n,e,t,r,i,s){if(lt(t.layers)){let c=Array(T(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=0;h<t.layers;h++){const d=-1+1/t.layers+u*2/t.layers,f=-1+1/t.layers+h*2/t.layers;c[l]=[d,f,i],l++}ue(n,e,t,c,r,s);return}let o=Array(T(t.layers)),a=0;for(let c=-X(t.layers);c<=X(t.layers);c++)for(let l=-X(t.layers);l<=X(t.layers);l++)o[a]=[2*c/t.layers,2*l/t.layers,i],a++;ue(n,e,t,o,r,s)}function Mu(n,e,t,r,i,s){if(lt(t.layers)){let c=Array(T(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,i],l++}ue(n,e,t,c,r,s);return}let o=Array(T(t.layers)),a=0;for(let c=-X(t.layers);c<=X(t.layers);c++)for(let l=X(t.layers);l>=-X(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;ue(n,e,t,o,r,s)}function Lu(n,e,t,r,i,s){if(lt(t.layers)){let c=Array(T(t.layers)),l=0;for(let u=t.layers-1;u>=0;u--)for(let h=t.layers-1;h>=0;h--){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,i],l++}ue(n,e,t,c,r,s);return}let o=Array(T(t.layers)),a=0;for(let c=X(t.layers);c>=-X(t.layers);c--)for(let l=X(t.layers);l>=-X(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;ue(n,e,t,o,r,s)}function ue(n,e,t,r,i,s){for(let o=0;o<T(t.layers);o++){const a=r[o];Nu(n,e+o*ds,t,a[0],a[1],a[2],i,s)}}function Nu(n,e,t,r,i,s,o,a){const c=1/t.layers-a,l=[[r-c,i-c,s],[r+c,i-c,s],[r+c,i+c,s],[r-c,i+c,s]];for(let u=0;u<Ru;u++){const h=l[u];n[e+u*Qe]=h[(o+0)%Qe],n[e+u*Qe+1]=h[(o+1)%Qe],n[e+u*Qe+2]=h[(o+2)%Qe]}}const xu=100,Bu=15;class Uu{position;_velocity;_acceleration;target;constructor(){this.position=0,this._velocity=200,this._acceleration=0,this.target=0}update(e){const t=-xu*(this.position-this.target),r=-Bu*this._velocity;this._acceleration=t+r,this._velocity+=this._acceleration*e,this.position+=this._velocity*e}}function Vr(n,e){return n/e*2-1}function Wr(n,e){return 1-n/e*2}function vn(n,e,t,r){return n<t?(r-e)/(t-n):(e-r)/(n-t)}function Ze(n,e,t,r,i,s){return Math.abs(.5*(n*(r-s)+t*(s-e)+i*(e-r)))}function Fu(n,e){return n.layers-1-e%n.layers}function bn(n,e){return n.layers-1-Math.floor(e/n.layers)}function $u(n,e){return e%n.layers}function In(n,e){return n.layers-1-Math.floor((e-T(n.layers))/n.layers)}class Hu{numOfPointerMoves;xOnDown;yOnDown;xOnMove;yOnMove;stickerOnDown;cart2dOnDown;onPointerDown(e,t,r,i,s){this.numOfPointerMoves=0;const o=Vr(e,r.clientWidth),a=Wr(t,r.clientHeight);this.xOnDown=o,this.yOnDown=a,[this.stickerOnDown,this.cart2dOnDown]=this._coordinatesToSticker(o,a,i,s);function c(_,m,y){return{x:s[_].cart2d[m],y:s[_].cart2d[y]}}if(this.stickerOnDown!==-1)return;const l=c(0,0,1),u=c(i.layers*(i.layers-1),6,7),h=c(i.layers-1,2,3),d=c(T(i.layers)-1,4,5),f=c(i.layers*(i.layers+1)-1,0,1),g=c(T(i.layers)*2-1,2,3);a>l.y&&o>l.x&&o<u.x?i.cubeRotate(0,!0):o<l.x&&a>h.y&&a<l.y?i.cubeRotate(2,!1):o>u.x&&a>d.y&&a<u.y?i.cubeRotate(2,!0):o<f.x&&a>f.y&&a<h.y?i.cubeRotate(1,!0):o>g.x&&a>g.y&&a<d.y?i.cubeRotate(1,!1):a<f.y&&o>f.x&&o<g.x&&i.cubeRotate(0,!1)}onPointerMove(e,t){this.numOfPointerMoves++,this.xOnMove=e,this.yOnMove=t}onPointerUp(e,t,r){if(this.numOfPointerMoves<2)return;let i,s;if(this.stickerOnDown!==-1&&(i=vn(this.cart2dOnDown[0],this.cart2dOnDown[1],this.cart2dOnDown[4],this.cart2dOnDown[5]),s=vn(this.cart2dOnDown[2],this.cart2dOnDown[3],this.cart2dOnDown[6],this.cart2dOnDown[7]),i<0)){const l=i;i=s,s=l}const o=Vr(this.xOnMove,e.clientWidth),a=Wr(this.yOnMove,e.clientHeight),c=vn(o,a,this.xOnDown,this.yOnDown);t.stickerIsOnFace(this.stickerOnDown,0)?o===this.xOnDown?t.turn(0,bn(t,this.stickerOnDown),a>this.yOnDown):c>i?t.turn(0,bn(t,this.stickerOnDown),o>this.xOnDown):c<s?t.turn(0,bn(t,this.stickerOnDown),o<this.xOnDown):t.turn(2,Fu(t,this.stickerOnDown),o>this.xOnDown):t.stickerIsOnFace(this.stickerOnDown,1)&&(o===this.xOnDown?t.turn(0,In(t,this.stickerOnDown),a>this.yOnDown):c>i?t.turn(0,In(t,this.stickerOnDown),o>this.xOnDown):c<s?t.turn(0,In(t,this.stickerOnDown),o<this.xOnDown):t.turn(1,$u(t,this.stickerOnDown),o<this.xOnDown))}_coordinatesToSticker(e,t,r,i){const s=o=>{if(!i[o].cart2d){console.error("cart2d is undefined");return}const a=i[o].cart2d,c=Ze(a[0],a[1],a[2],a[3],a[4],a[5])+Ze(a[0],a[1],a[4],a[5],a[6],a[7]),l=Ze(e,t,a[0],a[1],a[2],a[3])+Ze(e,t,a[2],a[3],a[4],a[5])+Ze(e,t,a[4],a[5],a[6],a[7])+Ze(e,t,a[6],a[7],a[0],a[1]),u=1e-5;if(Math.abs(c-l)<u)return[o,a]};for(let o=0;o<2*T(r.layers);o++){const a=s(o);if(a)return a}return[-1,void 0]}}function $t(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Vu(n,e,t,r,i){const s=1/Math.tan(e/2);if(n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,i!=null&&i!==1/0){const o=1/(r-i);n[10]=(i+r)*o,n[14]=2*i*r*o}else n[10]=-1,n[14]=-2*r;return n}function Zt(n,e,t,r){let i=r[0],s=r[1],o=r[2],a=1/Math.hypot(i,s,o);i*=a,s*=a,o*=a;let c=Math.sin(t),l=Math.cos(t),u=1-l,h=e[0],d=e[1],f=e[2],g=e[3],_=e[4],m=e[5],y=e[6],N=e[7],C=e[8],S=e[9],H=e[10],P=e[11],W=i*i*u+l,F=s*i*u+o*c,j=o*i*u-s*c,Z=i*s*u-o*c,te=s*s*u+l,B=o*s*u+i*c,R=i*o*u+s*c,Q=s*o*u-i*c,ne=o*o*u+l;return n[0]=h*W+_*F+C*j,n[1]=d*W+m*F+S*j,n[2]=f*W+y*F+H*j,n[3]=g*W+N*F+P*j,n[4]=h*Z+_*te+C*B,n[5]=d*Z+m*te+S*B,n[6]=f*Z+y*te+H*B,n[7]=g*Z+N*te+P*B,n[8]=h*R+_*Q+C*ne,n[9]=d*R+m*Q+S*ne,n[10]=f*R+y*Q+H*ne,n[11]=g*R+N*Q+P*ne,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function Wu(n,e){let t=e[0],r=e[1],i=e[2];return n[12]+=n[0]*t+n[4]*r+n[7]*i,n[13]+=n[1]*t+n[5]*r+n[8]*i,n[14]+=n[2]*t+n[5]*r+n[9]*i,n[15]+=n[3]*t+n[6]*r+n[10]*i,n}function jr(){let n;return e=>(n||(n=e()),n)}let ce,M,ye,Bn=[],zr={animateTurns:!0,hintStickers:!0,showBody:!0},Kr=Date.now()*.001,ju=3,Gr=!1;function zu(){Gr||(Gr=!0,requestAnimationFrame(fs))}function Ku(n,e){M||(ce=e,M=ce.getContext("webgl"),ye=Gu());let t=new Au(M),r=new Uu,i=qu(n),s=new Hu;t.setNumOfLayers(ju);let o=xn({gl:M,cube:t,perspectiveMatrix:i}),a={div:n,gl:M,cube:t,spring:r,buffers:o,perspectiveMatrix:i};const c=(g,_)=>{a.dragEnabled&&s.onPointerDown(g,_,a.div,a.cube,a.buffers)},l=(g,_)=>{a.dragEnabled&&s.onPointerMove(g,_)},u=()=>{a.dragEnabled&&s.onPointerUp(a.div,a.cube,a.buffers)},h=g=>{const _=g.target.getBoundingClientRect(),m=g.touches[0].pageX-_.left,y=g.touches[0].pageY-_.top;return{x:m,y}},d=()=>{n.addEventListener("pointerdown",g=>c(g.offsetX,g.offsetY)),n.addEventListener("pointermove",g=>l(g.offsetX,g.offsetY)),n.addEventListener("pointerup",g=>u())},f=()=>{n.addEventListener("touchstart",g=>{const{x:_,y:m}=h(g);c(_,m)}),n.addEventListener("touchmove",g=>{const{x:_,y:m}=h(g);l(_,m)}),n.addEventListener("touchend",g=>{u()})};return window.PointerEvent?d():f(),a}function Gu(){const t=Ju(M,`
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
    `);return M.useProgram(t),{attribLocations:{vertexPosition:M.getAttribLocation(t,"aVertexPosition"),vertexColor:M.getAttribLocation(t,"aVertexColor")},uniformLocations:{transformMatrix:M.getUniformLocation(t,"uTransformMatrix"),rotateMatrix:M.getUniformLocation(t,"uRotateMatrix")}}}function qu(n){let e=$t();return Vu(e,50*Math.PI/180,n.clientWidth/n.clientHeight,.1,100),Wu(e,[0,0,-5]),Zt(e,e,45*Math.PI/180,[1,0,0]),Zt(e,e,0,[0,-1,0]),e}function wn(n,e,t){t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(e.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexPosition)}function En(n,e,t){t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(e.attribLocations.vertexColor,4,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexColor)}function kn(n){n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)}function Ju(n,e,t){const r=qr(n,n.VERTEX_SHADER,e),i=qr(n,n.FRAGMENT_SHADER,t),s=n.createProgram();return n.attachShader(s,r),n.attachShader(s,i),n.linkProgram(s),n.getProgramParameter(s,n.LINK_STATUS)?s:(alert("Unable to initialize the shader program: "+n.getProgramInfoLog(s)),null)}function qr(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)?r:(alert("An error occurred compiling the shaders: "+n.getShaderInfoLog(r)),n.deleteShader(r),null)}function Yu(){const n=ce.clientWidth,e=ce.clientHeight,t=ce.width!==n||ce.height!==e;return t&&(ce.width=n,ce.height=e),t}function fs(n){n*=.001;const e=n-Kr;Kr=n,Yu(),M.enable(M.DEPTH_TEST),M.enable(M.SCISSOR_TEST),M.depthFunc(M.LEQUAL),M.clear(M.COLOR_BUFFER_BIT|M.DEPTH_BUFFER_BIT),ce.style.transform=`translateY(${window.scrollY}px)`;for(let t=0;t<Bn.length;t++){const{cube:r,div:i,spring:s,buffers:o,perspectiveMatrix:a}=Bn[t],c=i.getBoundingClientRect();if(c.bottom<0||c.top>ce.clientHeight||c.right<0||c.left>ce.clientWidth)continue;const l=c.right-c.left,u=c.bottom-c.top,h=c.left,d=ce.clientHeight-c.bottom;M.viewport(h,d,l,u),M.scissor(h,d,l,u),r.animationQueue[0]&&(s.target=r.animationQueue.length*90,s.update(e),s.position>=90&&(r.affectedStickers=Array(se(r.layers)).fill(!1),s.position=0,r.animationQueue.shift()));const f=r.animationQueue[0];let g=Xu(r),_=jr(),m=jr();for(let y=0;y<se(r.layers);y++){let N=o[y];const C=f&&f.stickersToAnimate[y]&&zr.animateTurns?_(()=>Zt($t(),a,s.position*Math.PI/180,f.axis)):a;M.uniformMatrix4fv(ye.uniformLocations.transformMatrix,!1,C);const S=f&&f.stickersToAnimate[y]&&zr.animateTurns?m(()=>{const H=$t();return Zt(H,H,s.position*Math.PI/180,f.axis)}):$t();M.uniformMatrix4fv(ye.uniformLocations.rotateMatrix,!1,S),M.bindBuffer(M.ELEMENT_ARRAY_BUFFER,N.indexBuffer),wn(N.noGapPositionBuffer,ye,M),En(r.underStickers[y].buffer,ye,M),kn(M),wn(N.positionBuffer,ye,M),En(g[y].buffer,ye,M),kn(M),wn(N.hintPositionBuffer,ye,M),En(g[y].buffer,ye,M),kn(M)}}requestAnimationFrame(fs)}function Xu(n){return n.animationQueue[0]?n.animationQueue[0].stickers:n.stickers}function Qu(n){let e,t,r,i,s,o,a;return{c(){e=v("div"),t=v("canvas"),r=b(),i=v("div"),A(i,"class","glDiv"),A(e,"class",s=n[3].class)},m(c,l){$(c,e,l),p(e,t),n[6](t),p(e,r),p(e,i),n[7](i),o||(a=oe(window,"keydown",n[5]),o=!0)},p(c,[l]){l&8&&s!==(s=c[3].class)&&A(e,"class",s)},i:x,o:x,d(c){c&&U(e),n[6](null),n[7](null),o=!1,a()}}}function Zu(n,e,t){let{onSceneInitialized:r}=e,i,s,o;Is(()=>{t(2,o=Ku(s,i)),Bn.push(o),o.cube.solve(),t(2,o.dragEnabled=!0,o),zu(),r(o)});const a=u=>{o&&o.cube.matchKeyToTurn(u)};function c(u){it[u?"unshift":"push"](()=>{i=u,t(0,i)})}function l(u){it[u?"unshift":"push"](()=>{s=u,t(1,s)})}return n.$$set=u=>{t(3,e=he(he({},e),_e(u))),"onSceneInitialized"in u&&t(4,r=u.onSceneInitialized)},e=_e(e),[i,s,o,e,r,a,c,l]}class eh extends pe{constructor(e){super(),fe(this,e,Zu,Qu,de,{onSceneInitialized:4})}}const th={CMLL:{cube:"3x3",inactive:[1,3,4,5,7,12,13,14,21,22,23,30,31,32,39,48]},F2L:{cube:"3x3",inactive:[0,1,2,3,5,6,7,8,9,12,15,29,32,35,36,39,42,45,48,51]},OLL:{cube:"3x3",inactive:[9,12,15,29,32,35,36,39,42,45,48,51]},PLL:{cube:"3x3",inactive:[]},ZBLL:{cube:"3x3",inactive:[]},"2x2 CLL":{cube:"2x2",inactive:[]},"2x2 EG1":{cube:"2x2",inactive:[]},"2x2 EG2":{cube:"2x2",inactive:[]}};async function nh(n,e,t,r,i,s,o,a){return an("/createAlgSet",{uid:n,set:e,trainingAlgs:t,cube:r,inactiveStickers:i,moves:s,disregard:o,onlyOrientation:a})}async function rh(n,e){return an("/getAlgSet",{uid:n,set:e})}async function ih(n,e){return an("/updateAlgSet",{id:n,trainingAlgs:e})}function sh(n){var e,t,r;if(n.alg===null||n.alg===void 0)throw new Error("alg must be defined");if(n.moves===null||n.moves===void 0)throw new Error("moves must be defined");return{alg:n.alg,moves:n.moves,onlyOrientation:(e=n.onlyOrientation)!==null&&e!==void 0?e:[],disregard:(t=n.disregard)!==null&&t!==void 0?t:[],maxSolutions:(r=n.maxSolutions)!==null&&r!==void 0?r:10}}function oh(n){var e=sh(n);return new Promise(function(t){var r=new Worker(new URL("/assets/worker-f983b957.js",self.location));r.onmessage=function(i){var s=i.data,o=s.split(",");t(o),r.terminate()},r.onerror=function(i){console.log("Caught error"),console.error(i),r.terminate()},r.postMessage(e)})}let K={scene:null,algSet:null,preRotation:"",preAUF:"",postAUF:""};function Un(n){return ps(n,K.preAUF,K.postAUF)}function ah(n){const e=Xr(K.preAUF),t=Xr(K.postAUF);return ps(n,t,e)}function ps(n,e,t){e&&(n=`${e} ${n}`),t&&(n=`${n} ${t}`);let r=n.split(" ");const i=Jr(r[0],r[1]),s=Jr(r[r.length-2],r[r.length-1]);return r=r.slice(2,-2),r=i.concat(r).concat(s),r.join(" ")}function Jr(n,e){if(n[0]!=="U"||e[0]!=="U")return[n,e];const t=(Yr(n)+Yr(e))%4;return t===0?[]:[ch(t)]}function Yr(n){return n.endsWith("'")?3:n.endsWith("2")?2:1}function ch(n){return["","U","U2","U'"][n]}function Xr(n){return n===""?"":n.endsWith("'")?n.slice(0,-1):n.endsWith("2")?n:`${n}'`}function Qr(){return["","U","U2","U'"][ze(4)]}function lh(n){K.scene=n}function Zr(){const n=K.algSet.trainingAlgs,e=n.map(i=>i.Score),t=Math.max(...e),r=new Array(t+1).fill(0);return e.forEach(i=>r[i]++),r.map((i,s)=>({reps:s,algs:i,ratio:Math.round(i/n.length*100)}))}function gs(){const n=K.algSet.trainingAlgs;return n&&n.length>0?n[0].Alg:(console.log("No algs to load",n),"")}async function dt(n,e){const t=K.scene;if(!t){console.error("Scene not set. Have you called setScene()?");return}(!K.algSet||K.algSet.name!==e)&&(K.algSet=await rh(n,e),K.algSet.cube=="2x2"?(t.cube.setNumOfLayers(2),t.buffers=xn(t),t.cube.solve()):K.algSet.cube=="3x3"&&(t.cube.setNumOfLayers(3),t.buffers=xn(t),t.cube.solve()));let r=gs();K.preAUF=Qr(),K.postAUF=Qr(),t.cube.solve(),t.cube.execAlg(K.preRotation),K.algSet.inactive.forEach(s=>{Ft(t.cube.stickers[s],du)});let i=Un(r);return t.cube.execAlgReverse(i),r}async function ei(n,e,t){if(n?Iu(K.algSet.trainingAlgs):wu(K.algSet.trainingAlgs),K.algSet.id===-1){const{trainingAlgs:r,cube:i,inactive:s,moves:o,disregard:a,onlyOrientation:c}=K.algSet,l=await nh(e,t,r,i,s,o,a,c);K.algSet.id=l.id}else{const{id:r,trainingAlgs:i}=K.algSet;ih(r,i)}return fh(),dt(e,t)}function uh(){return Object.keys(th)}async function hh(){let n=gs();const e=await oh({alg:n,moves:"U U' F F' R R'",disregard:K.algSet.disregard,onlyOrientation:K.algSet.onlyOrientation});return vu(e)}function dh(n,e){return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate()}function Sn(){const n=Qt.get(),e=new Date(n.msSinceEpoch),t=new Date;return t.setDate(t.getDate()+1),dh(e,t)||(console.log("Resetting cases today"),n.count=0,n.msSinceEpoch=t.getTime(),Qt.set(n)),n.count}function fh(){const n=Qt.get();n.count++,Qt.set(n)}function ph(n){let e,t;return e=new we({props:{name:"x",style:"padding: 4px;"}}),e.$on("click",function(){Fn(n[0])&&n[0].apply(this,arguments)}),{c(){Y(e.$$.fragment)},m(r,i){G(e,r,i),t=!0},p(r,i){n=r},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){q(e,r)}}}function gh(n){let e,t,r,i,s,o,a,c;return s=new gt({props:{hovBackground:"var(--gray-500)",borderRadius:"4px",$$slots:{default:[ph]},$$scope:{ctx:n}}}),{c(){e=v("div"),t=v("div"),r=v("h5"),r.textContent="Menu",i=b(),Y(s.$$.fragment),o=b(),a=v("div"),a.innerHTML=`<div style="height: 8px;"></div> 
        <a href="learn.html"><button style="width: 100%;">Learn</button></a> 
        <div style="height: 8px;"></div> 
        <a href="play.html"><button style="width: 100%;">Play</button></a> 
        <div style="height: 8px;"></div> 
        <a href="train.html"><button style="width: 100%;">Train</button></a> 
        <div style="height: 8px;"></div> 
        <a href="cuble.html"><button style="width: 100%;">Cuble</button></a>`,E(r,"color","white"),E(r,"font-size","1.2rem"),A(t,"class","row"),E(t,"justify-content","space-between"),E(t,"padding","8px"),E(a,"display","flex"),E(a,"flex-direction","column"),E(a,"padding","0 8px"),A(e,"style",n[1])},m(l,u){$(l,e,u),p(e,t),p(t,r),p(t,i),G(s,t,null),p(e,o),p(e,a),c=!0},p(l,[u]){const h={};u&9&&(h.$$scope={dirty:u,ctx:l}),s.$set(h),(!c||u&2)&&A(e,"style",l[1])},i(l){c||(D(s.$$.fragment,l),c=!0)},o(l){L(s.$$.fragment,l),c=!1},d(l){l&&U(e),q(s)}}}function mh(n,e,t){let r,{open:i}=e,{onClose:s=()=>{}}=e;return n.$$set=o=>{"open"in o&&t(2,i=o.open),"onClose"in o&&t(0,s=o.onClose)},n.$$.update=()=>{n.$$.dirty&4&&t(1,r=`position: fixed; top: 0; left: 0; width: 300px; height: 100%; background-color: var(--gray-700); z-index: 10; ${i?"transform: translateX(0); transition: transform 0.3s ease-in-out":"transform: translateX(-100%); transition: transform 0.3s ease-in-out"}`)},[s,r,i]}class _h extends pe{constructor(e){super(),fe(this,e,mh,gh,de,{open:2,onClose:0})}}function ti(n,e,t){const r=n.slice();return r[42]=e[t],r}function ni(n,e,t){const r=n.slice();return r[39]=e[t],r}function ri(n){let e,t,r,i,s,o,a;return t=new we({props:{class:"icon",style:"padding: 8px;",name:"chart"}}),t.$on("click",n[16]),i=new we({props:{class:"icon",style:"padding: 8px;",name:"profile"}}),i.$on("click",n[17]),o=new we({props:{class:"icon",style:"padding: 8px;",name:"settings"}}),o.$on("click",n[18]),{c(){e=v("div"),Y(t.$$.fragment),r=b(),Y(i.$$.fragment),s=b(),Y(o.$$.fragment),A(e,"id","iconContainer"),A(e,"class","row")},m(c,l){$(c,e,l),G(t,e,null),p(e,r),G(i,e,null),p(e,s),G(o,e,null),a=!0},p:x,i(c){a||(D(t.$$.fragment,c),D(i.$$.fragment,c),D(o.$$.fragment,c),a=!0)},o(c){L(t.$$.fragment,c),L(i.$$.fragment,c),L(o.$$.fragment,c),a=!1},d(c){c&&U(e),q(t),q(i),q(o)}}}function yh(n){let e,t,r,i,s,o,a,c,l,u,h,d,f,g,_,m,y,N,C,S,H,P,W,F,j,Z,te,B,R,Q,ne,ke,Ye;i=new eh({props:{onSceneInitialized:n[25]}}),l=new gt({props:{background:"var(--gray-500)",hovBackground:"var(--gray-700)",borderRadius:"8px",$$slots:{default:[bh]},$$scope:{ctx:n}}}),h=new gt({props:{background:"var(--red-500)",hovBackground:"var(--red-700)",borderRadius:"8px",$$slots:{default:[Ih]},$$scope:{ctx:n}}}),f=new gt({props:{background:"var(--green-500)",hovBackground:"var(--green-700)",borderRadius:"8px",$$slots:{default:[wh]},$$scope:{ctx:n}}});function Fe(w,I){return w[4]?kh:Eh}let O=Fe(n),J=O(n),ee=n[8]&&ii(n);const $e=[Ah,Th,Sh],ae=[];function Se(w,I){return w[5]===0?0:w[5]===1?1:w[5]===2?2:-1}return~(B=Se(n))&&(R=ae[B]=$e[B](n)),{c(){e=v("div"),t=v("div"),r=b(),Y(i.$$.fragment),s=b(),o=v("div"),a=b(),c=v("div"),Y(l.$$.fragment),u=b(),Y(h.$$.fragment),d=b(),Y(f.$$.fragment),g=b(),_=v("div"),m=b(),y=v("button"),J.c(),N=b(),ee&&ee.c(),C=b(),S=v("div"),H=b(),P=v("p"),W=re("cases today: "),F=re(n[10]),j=b(),Z=v("div"),te=b(),R&&R.c(),Q=_s(),E(t,"height","16px"),E(o,"height","16px"),A(c,"class","row"),E(c,"gap","16px"),E(_,"height","16px"),A(y,"class","btn-primary"),E(S,"flex-grow","1"),E(Z,"height","16px"),A(e,"class","col"),E(e,"width","100%"),E(e,"height","100%")},m(w,I){$(w,e,I),p(e,t),p(e,r),G(i,e,null),p(e,s),p(e,o),p(e,a),p(e,c),G(l,c,null),p(c,u),G(h,c,null),p(c,d),G(f,c,null),p(e,g),p(e,_),p(e,m),p(e,y),J.m(y,null),p(e,N),ee&&ee.m(e,null),p(e,C),p(e,S),p(e,H),p(e,P),p(P,W),p(P,F),p(e,j),p(e,Z),$(w,te,I),~B&&ae[B].m(w,I),$(w,Q,I),ne=!0,ke||(Ye=oe(y,"click",n[29]),ke=!0)},p(w,I){const Ot={};I[0]&193&&(Ot.onSceneInitialized=w[25]),i.$set(Ot);const nr={};I[0]&209|I[1]&16384&&(nr.$$scope={dirty:I,ctx:w}),l.$set(nr);const rr={};I[0]&1233|I[1]&16384&&(rr.$$scope={dirty:I,ctx:w}),h.$set(rr);const ir={};I[0]&1233|I[1]&16384&&(ir.$$scope={dirty:I,ctx:w}),f.$set(ir),O===(O=Fe(w))&&J?J.p(w,I):(J.d(1),J=O(w),J&&(J.c(),J.m(y,null))),w[8]?ee?ee.p(w,I):(ee=ii(w),ee.c(),ee.m(e,C)):ee&&(ee.d(1),ee=null),(!ne||I[0]&1024)&&wt(F,w[10]);let cn=B;B=Se(w),B===cn?~B&&ae[B].p(w,I):(R&&(jt(),L(ae[cn],1,1,()=>{ae[cn]=null}),zt()),~B?(R=ae[B],R?R.p(w,I):(R=ae[B]=$e[B](w),R.c()),D(R,1),R.m(Q.parentNode,Q)):R=null)},i(w){ne||(D(i.$$.fragment,w),D(l.$$.fragment,w),D(h.$$.fragment,w),D(f.$$.fragment,w),D(R),ne=!0)},o(w){L(i.$$.fragment,w),L(l.$$.fragment,w),L(h.$$.fragment,w),L(f.$$.fragment,w),L(R),ne=!1},d(w){w&&U(e),q(i),q(l),q(h),q(f),J.d(),ee&&ee.d(),w&&U(te),~B&&ae[B].d(w),w&&U(Q),ke=!1,Ye()}}}function vh(n){let e,t,r,i,s,o,a,c,l,u,h,d,f,g,_,m,y,N;const C=[Ph,Dh],S=[];function H(P,W){return P[0]?0:1}return m=H(n),y=S[m]=C[m](n),{c(){e=v("div"),t=v("div"),r=b(),i=v("h1"),i.textContent="Algorithm Trainer",s=b(),o=v("div"),a=b(),c=v("p"),c.textContent="Learn algorithms at lightning speed",l=b(),u=v("div"),h=b(),d=v("div"),d.innerHTML=`<h2>1. Memorize faster</h2> 
          <div style="height: 8px"></div> 
          <ul><li>Get an algorithm right, and you&#39;ll see it less often.</li> 
            <div style="height: 8px"></div> 
            <li>Get an algorithm wrong, and you&#39;ll see it more often.</li></ul> 
          <div style="height: 16px"></div> 
          <h2>2. Virtual Cube</h2> 
          <div style="height: 8px"></div> 
          <ul><li>Never scramble a cube again</li> 
            <div style="height: 8px"></div> 
            <li>Practice anywhere, anytime</li></ul>`,f=b(),g=v("div"),_=b(),y.c(),E(t,"height","8px"),E(o,"height","16px"),A(c,"class","text-gradient"),E(c,"font-weight","bold"),E(c,"font-size","1.2rem"),E(c,"background-image","linear-gradient(90deg, var(--blue-400), var(--purple-400))"),E(u,"height","16px"),E(g,"height","24px"),A(e,"class","col w-full h-full")},m(P,W){$(P,e,W),p(e,t),p(e,r),p(e,i),p(e,s),p(e,o),p(e,a),p(e,c),p(e,l),p(e,u),p(e,h),p(e,d),p(e,f),p(e,g),p(e,_),S[m].m(e,null),N=!0},p(P,W){let F=m;m=H(P),m===F?S[m].p(P,W):(jt(),L(S[F],1,1,()=>{S[F]=null}),zt(),y=S[m],y?y.p(P,W):(y=S[m]=C[m](P),y.c()),D(y,1),y.m(e,null))},i(P){N||(D(y),N=!0)},o(P){L(y),N=!1},d(P){P&&U(e),S[m].d()}}}function bh(n){let e,t;return e=new we({props:{name:"retry",style:`
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);`}}),e.$on("click",n[26]),{c(){Y(e.$$.fragment)},m(r,i){G(e,r,i),t=!0},p:x,i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){q(e,r)}}}function Ih(n){let e,t;return e=new we({props:{name:"sad",style:`
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);`}}),e.$on("click",n[27]),{c(){Y(e.$$.fragment)},m(r,i){G(e,r,i),t=!0},p:x,i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){q(e,r)}}}function wh(n){let e,t;return e=new we({props:{name:"happy",style:`
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);`}}),e.$on("click",n[28]),{c(){Y(e.$$.fragment)},m(r,i){G(e,r,i),t=!0},p:x,i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){q(e,r)}}}function Eh(n){let e;return{c(){e=re("show solution")},m(t,r){$(t,e,r)},p:x,d(t){t&&U(e)}}}function kh(n){let e,t=Un(n[7])+"",r;return{c(){e=re("solution: "),r=re(t)},m(i,s){$(i,e,s),$(i,r,s)},p(i,s){s[0]&128&&t!==(t=Un(i[7])+"")&&wt(r,t)},d(i){i&&U(e),i&&U(r)}}}function ii(n){let e,t,r,i,s;return{c(){e=v("div"),t=b(),r=v("p"),i=re("scramble: "),s=re(n[9]),E(e,"height","16px")},m(o,a){$(o,e,a),$(o,t,a),$(o,r,a),p(r,i),p(r,s)},p(o,a){a[0]&512&&wt(s,o[9])},d(o){o&&U(e),o&&U(t),o&&U(r)}}}function Sh(n){let e,t;return e=new er({props:{title:"Settings",close:n[37],$$slots:{default:[Rh]},$$scope:{ctx:n}}}),{c(){Y(e.$$.fragment)},m(r,i){G(e,r,i),t=!0},p(r,i){const s={};i[0]&449|i[1]&16384&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){q(e,r)}}}function Th(n){let e,t;return e=new er({props:{title:"Profile",close:n[32],$$slots:{default:[Ch]},$$scope:{ctx:n}}}),{c(){Y(e.$$.fragment)},m(r,i){G(e,r,i),t=!0},p(r,i){const s={};i[0]&9|i[1]&16384&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){q(e,r)}}}function Ah(n){let e,t;return e=new er({props:{title:"Stats",close:n[30],$$slots:{default:[Oh]},$$scope:{ctx:n}}}),{c(){Y(e.$$.fragment)},m(r,i){G(e,r,i),t=!0},p(r,i){const s={};i[1]&16384&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){q(e,r)}}}function si(n){let e,t=n[42]+"",r;return{c(){e=v("option"),r=re(t),e.__value=n[42],e.value=e.__value},m(i,s){$(i,e,s),p(e,r)},p:x,d(i){i&&U(e)}}}function Rh(n){let e,t,r,i,s,o,a,c,l,u,h,d,f=n[13],g=[];for(let _=0;_<f.length;_+=1)g[_]=si(ti(n,f,_));return{c(){e=v("div"),t=v("p"),t.textContent="algorithm set",r=b(),i=v("select");for(let _=0;_<g.length;_+=1)g[_].c();s=b(),o=v("div"),a=b(),c=v("p"),c.textContent="show scramble",l=b(),u=v("input"),n[6]===void 0&&Wt(()=>n[33].call(i)),E(o,"height","16px"),A(u,"type","checkbox"),E(e,"padding","16px")},m(_,m){$(_,e,m),p(e,t),p(e,r),p(e,i);for(let y=0;y<g.length;y+=1)g[y].m(i,null);or(i,n[6]),p(e,s),p(e,o),p(e,a),p(e,c),p(e,l),p(e,u),u.checked=n[8],h||(d=[oe(i,"change",n[33]),oe(i,"change",n[34]),oe(u,"change",n[35]),oe(u,"change",n[36])],h=!0)},p(_,m){if(m[0]&8192){f=_[13];let y;for(y=0;y<f.length;y+=1){const N=ti(_,f,y);g[y]?g[y].p(N,m):(g[y]=si(N),g[y].c(),g[y].m(i,null))}for(;y<g.length;y+=1)g[y].d(1);g.length=f.length}m[0]&8256&&or(i,_[6]),m[0]&256&&(u.checked=_[8])},d(_){_&&U(e),fi(g,_),h=!1,st(d)}}}function Ch(n){let e,t,r,i=n[0].email+"",s,o,a,c,l;return{c(){e=v("div"),t=v("p"),r=re("signed in as "),s=re(i),o=b(),a=v("button"),a.textContent="Sign Out",A(a,"class","btn-primary"),E(e,"padding","12px")},m(u,h){$(u,e,h),p(e,t),p(t,r),p(t,s),p(e,o),p(e,a),c||(l=oe(a,"click",n[31]),c=!0)},p(u,h){h[0]&1&&i!==(i=u[0].email+"")&&wt(s,i)},d(u){u&&U(e),c=!1,l()}}}function oi(n){let e,t,r=n[39].reps+"",i,s,o,a=n[39].algs+"",c,l,u,h=n[39].ratio+"",d,f,g;return{c(){e=v("tr"),t=v("td"),i=re(r),s=b(),o=v("td"),c=re(a),l=b(),u=v("td"),d=re(h),f=re("%"),g=b()},m(_,m){$(_,e,m),p(e,t),p(t,i),p(e,s),p(e,o),p(o,c),p(e,l),p(e,u),p(u,d),p(u,f),p(e,g)},p:x,d(_){_&&U(e)}}}function Oh(n){let e,t,r,i,s=Zr(),o=[];for(let a=0;a<s.length;a+=1)o[a]=oi(ni(n,s,a));return{c(){e=v("table"),t=v("thead"),t.innerHTML=`<tr><th>repetitions</th> 
                <th>algs</th> 
                <th>%</th></tr>`,r=b(),i=v("tbody");for(let a=0;a<o.length;a+=1)o[a].c();E(e,"margin","16px auto")},m(a,c){$(a,e,c),p(e,t),p(e,r),p(e,i);for(let l=0;l<o.length;l+=1)o[l].m(i,null)},p(a,c){if(c&0){s=Zr();let l;for(l=0;l<s.length;l+=1){const u=ni(a,s,l);o[l]?o[l].p(u,c):(o[l]=oi(u),o[l].c(),o[l].m(i,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=s.length}},d(a){a&&U(e),fi(o,a)}}}function Dh(n){let e,t,r,i,s,o,a,c,l,u,h,d,f,g,_,m,y,N,C,S,H,P,W,F,j,Z,te,B,R,Q;t=new Xl({props:{callback:n[20]}});function ne(O){n[21](O)}let ke={class:"mt-4"};n[1]!==void 0&&(ke.value=n[1]),g=new eu({props:ke}),it.push(()=>cr(g,"value",ne));function Ye(O){n[22](O)}let Fe={class:"mt-4"};return n[2]!==void 0&&(Fe.value=n[2]),C=new ru({props:Fe}),it.push(()=>cr(C,"value",Ye)),j=new zl({props:{email:n[1],password:n[2],callback:n[23]}}),R=new ql({props:{email:n[1],password:n[2],callback:n[24]}}),{c(){e=v("div"),Y(t.$$.fragment),r=b(),i=v("div"),s=b(),o=v("div"),a=b(),c=v("div"),l=b(),u=v("p"),u.textContent="Or use email and password",h=b(),d=v("div"),f=b(),Y(g.$$.fragment),m=b(),y=v("div"),N=b(),Y(C.$$.fragment),H=b(),P=v("div"),W=b(),F=v("div"),Y(j.$$.fragment),Z=b(),te=v("div"),B=b(),Y(R.$$.fragment),E(i,"height","16px"),E(o,"width","100%"),E(o,"height","2px"),E(o,"background-color","var(--gray-600)"),E(c,"height","16px"),E(d,"height","12px"),E(y,"height","16px"),E(P,"height","32px"),E(te,"width","16px"),A(F,"class","row"),A(e,"class","col"),E(e,"border-radius","16px"),E(e,"padding","16px"),E(e,"box-shadow","0 0 4px lightgray")},m(O,J){$(O,e,J),G(t,e,null),p(e,r),p(e,i),p(e,s),p(e,o),p(e,a),p(e,c),p(e,l),p(e,u),p(e,h),p(e,d),p(e,f),G(g,e,null),p(e,m),p(e,y),p(e,N),G(C,e,null),p(e,H),p(e,P),p(e,W),p(e,F),G(j,F,null),p(F,Z),p(F,te),p(F,B),G(R,F,null),Q=!0},p(O,J){const ee={};J[0]&1&&(ee.callback=O[20]),t.$set(ee);const $e={};!_&&J[0]&2&&(_=!0,$e.value=O[1],ar(()=>_=!1)),g.$set($e);const ae={};!S&&J[0]&4&&(S=!0,ae.value=O[2],ar(()=>S=!1)),C.$set(ae);const Se={};J[0]&2&&(Se.email=O[1]),J[0]&4&&(Se.password=O[2]),J[0]&1&&(Se.callback=O[23]),j.$set(Se);const w={};J[0]&2&&(w.email=O[1]),J[0]&4&&(w.password=O[2]),J[0]&1&&(w.callback=O[24]),R.$set(w)},i(O){Q||(D(t.$$.fragment,O),D(g.$$.fragment,O),D(C.$$.fragment,O),D(j.$$.fragment,O),D(R.$$.fragment,O),Q=!0)},o(O){L(t.$$.fragment,O),L(g.$$.fragment,O),L(C.$$.fragment,O),L(j.$$.fragment,O),L(R.$$.fragment,O),Q=!1},d(O){O&&U(e),q(t),q(g),q(C),q(j),q(R)}}}function Ph(n){let e,t,r;return{c(){e=v("button"),e.textContent="Start Training"},m(i,s){$(i,e,s),t||(r=oe(e,"click",n[19]),t=!0)},p:x,i:x,o:x,d(i){i&&U(e),t=!1,r()}}}function Mh(n){let e,t,r,i,s,o,a,c,l,u,h;r=new we({props:{class:"icon",style:"padding: 8px;",name:"menu"}}),r.$on("click",n[15]);let d=n[3]==="train"&&ri(n);const f=[vh,yh],g=[];function _(m,y){return m[3]==="landing"?0:m[3]==="train"?1:-1}return~(a=_(n))&&(c=g[a]=f[a](n)),u=new _h({props:{open:n[11],onClose:n[38]}}),{c(){e=v("main"),t=v("nav"),Y(r.$$.fragment),i=b(),d&&d.c(),s=b(),o=v("div"),c&&c.c(),l=b(),Y(u.$$.fragment),A(t,"class","navbar"),E(t,"justify-content","space-between"),A(o,"class","row"),E(o,"justify-content","center"),E(o,"align-items","start"),E(o,"width","100%"),E(o,"height","100%"),E(o,"position","relative"),A(e,"class","col"),E(e,"width","100%"),E(e,"height","100%")},m(m,y){$(m,e,y),p(e,t),G(r,t,null),p(t,i),d&&d.m(t,null),p(e,s),p(e,o),~a&&g[a].m(o,null),p(e,l),G(u,e,null),h=!0},p(m,y){m[3]==="train"?d?(d.p(m,y),y[0]&8&&D(d,1)):(d=ri(m),d.c(),D(d,1),d.m(t,null)):d&&(jt(),L(d,1,1,()=>{d=null}),zt());let N=a;a=_(m),a===N?~a&&g[a].p(m,y):(c&&(jt(),L(g[N],1,1,()=>{g[N]=null}),zt()),~a?(c=g[a],c?c.p(m,y):(c=g[a]=f[a](m),c.c()),D(c,1),c.m(o,null)):c=null);const C={};y[0]&2048&&(C.open=m[11]),y[0]&2048&&(C.onClose=m[38]),u.$set(C)},i(m){h||(D(r.$$.fragment,m),D(d),D(c),D(u.$$.fragment,m),h=!0)},o(m){L(r.$$.fragment,m),L(d),L(c),L(u.$$.fragment,m),h=!1},d(m){m&&U(e),q(r),d&&d.d(),~a&&g[a].d(),q(u)}}}function Lh(n,e,t){let r=Ul(),i="",s="",o="landing",a=!1,c=-1;function l(I){c===I?t(5,c=-1):t(5,c=I)}const u=uh();let h,d;h&&dt(r.uid,h).then(I=>{t(7,d=I)});let f=Pl(),g="loading...";function _(){f&&(t(9,g="loading..."),hh().then(I=>{t(9,g=ah(I))}))}let m=Sn(),y=!1;const N=()=>t(11,y=!0),C=()=>l(0),S=()=>l(1),H=()=>l(2),P=()=>t(3,o="train"),W=I=>t(0,r=I);function F(I){i=I,t(1,i)}function j(I){s=I,t(2,s)}const Z=I=>t(0,r=I),te=I=>t(0,r=I),B=I=>{lh(I),t(6,h=Ol()),h||t(6,h=u[0]),dt(r.uid,h).then(Ot=>{t(7,d=Ot),_()})},R=()=>{dt(r.uid,h).then(I=>{t(7,d=I),t(4,a=!1)})},Q=()=>{ei(!1,r.uid,h).then(I=>{t(7,d=I),t(4,a=!1),t(10,m=Sn()),_()})},ne=()=>{ei(!0,r.uid,h).then(I=>{t(7,d=I),t(4,a=!1),t(10,m=Sn()),_()})},ke=()=>t(4,a=!a),Ye=()=>l(-1),Fe=()=>{Vl(),t(3,o="landing"),t(0,r=null)},O=()=>l(-1);function J(){h=vs(this),t(6,h),t(13,u)}const ee=()=>{dt(r.uid,h).then(I=>{t(7,d=I),_()}),Dl(h)};function $e(){f=this.checked,t(8,f)}return[r,i,s,o,a,c,h,d,f,g,m,y,l,u,_,N,C,S,H,P,W,F,j,Z,te,B,R,Q,ne,ke,Ye,Fe,O,J,ee,$e,()=>{_(),Ml(f)},()=>l(-1),()=>t(11,y=!1)]}class Nh extends pe{constructor(e){super(),fe(this,e,Lh,Mh,de,{},null,[-1,-1])}}new Nh({target:document.getElementById("app")});
