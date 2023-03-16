(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function U(){}function de(n,e){for(const t in e)n[t]=e[t];return n}function ri(n){return n()}function ir(){return Object.create(null)}function st(n){n.forEach(ri)}function Bn(n){return typeof n=="function"}function fe(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function ds(n){return Object.keys(n).length===0}function ii(n,e,t,r){if(n){const i=si(n,e,t,r);return n[0](i)}}function si(n,e,t,r){return n[1]&&r?de(t.ctx.slice(),n[1](r(e))):t.ctx}function oi(n,e,t,r){if(n[2]&&r){const i=n[2](r(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function ai(n,e,t,r,i,s){if(i){const o=si(e,t,r,s);n.p(o,i)}}function ci(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function ye(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function $t(n){return n??""}function g(n,e){n.appendChild(e)}function $(n,e,t){n.insertBefore(e,t||null)}function F(n){n.parentNode&&n.parentNode.removeChild(n)}function fs(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function v(n){return document.createElement(n)}function ae(n){return document.createTextNode(n)}function w(){return ae(" ")}function ps(){return ae("")}function oe(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function T(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function gs(n){return Array.from(n.childNodes)}function wt(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Ht(n,e){n.value=e??""}function E(n,e,t,r){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}function sr(n,e){for(let t=0;t<n.options.length;t+=1){const r=n.options[t];if(r.__value===e){r.selected=!0;return}}n.selectedIndex=-1}function ms(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}let mt;function ft(n){mt=n}function _s(){if(!mt)throw new Error("Function called outside component initialization");return mt}function ys(n){_s().$$.on_mount.push(n)}function vs(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const et=[],it=[],Pt=[],kn=[],bs=Promise.resolve();let Sn=!1;function Is(){Sn||(Sn=!0,bs.then(li))}function Vt(n){Pt.push(n)}function or(n){kn.push(n)}const an=new Set;let Xe=0;function li(){if(Xe!==0)return;const n=mt;do{try{for(;Xe<et.length;){const e=et[Xe];Xe++,ft(e),ws(e.$$)}}catch(e){throw et.length=0,Xe=0,e}for(ft(null),et.length=0,Xe=0;it.length;)it.pop()();for(let e=0;e<Pt.length;e+=1){const t=Pt[e];an.has(t)||(an.add(t),t())}Pt.length=0}while(et.length);for(;kn.length;)kn.pop()();Sn=!1,an.clear(),ft(n)}function ws(n){if(n.fragment!==null){n.update(),st(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Vt)}}const Mt=new Set;let He;function Wt(){He={r:0,c:[],p:He}}function jt(){He.r||st(He.c),He=He.p}function M(n,e){n&&n.i&&(Mt.delete(n),n.i(e))}function N(n,e,t,r){if(n&&n.o){if(Mt.has(n))return;Mt.add(n),He.c.push(()=>{Mt.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function ar(n,e,t){const r=n.$$.props[e];r!==void 0&&(n.$$.bound[r]=t,t(n.$$.ctx[r]))}function Z(n){n&&n.c()}function Y(n,e,t,r){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),r||Vt(()=>{const o=n.$$.on_mount.map(ri).filter(Bn);n.$$.on_destroy?n.$$.on_destroy.push(...o):st(o),n.$$.on_mount=[]}),s.forEach(Vt)}function X(n,e){const t=n.$$;t.fragment!==null&&(st(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Es(n,e){n.$$.dirty[0]===-1&&(et.push(n),Is(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function pe(n,e,t,r,i,s,o,a=[-1]){const c=mt;ft(n);const l=n.$$={fragment:null,ctx:[],props:s,update:U,not_equal:i,bound:ir(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ir(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=t?t(n,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=p)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](p),u&&Es(n,h)),d}):[],l.update(),u=!0,st(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=gs(e.target);l.fragment&&l.fragment.l(h),h.forEach(F)}else l.fragment&&l.fragment.c();e.intro&&M(n.$$.fragment),Y(n,e.target,e.anchor,e.customElement),li()}ft(c)}class ge{$destroy(){X(this,1),this.$destroy=U}$on(e,t){if(!Bn(t))return U;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ds(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
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
 */const ui=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ks=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ui(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ks(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ss=function(n){const e=ui(n);return hi.encodeByteArray(e,!0)},di=function(n){return Ss(n).replace(/\./g,"")},Ts=function(n){try{return hi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function As(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rs=()=>As().__FIREBASE_DEFAULTS__,Cs=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Os=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ts(n[1]);return e&&JSON.parse(e)},Ds=()=>{try{return Rs()||Cs()||Os()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ps=()=>{var n;return(n=Ds())===null||n===void 0?void 0:n.config};/**
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
 */class Ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}function Ls(){try{return typeof indexedDB=="object"}catch{return!1}}function Ns(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const xs="FirebaseError";let Fn=class fi extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=xs,Object.setPrototypeOf(this,fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}},pi=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Us(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,a,r)}};function Us(n,e){return n.replace(Bs,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Bs=/\{\$([^}]+)}/g;function Tn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(cr(s)&&cr(o)){if(!Tn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function cr(n){return n!==null&&typeof n=="object"}let zt=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */class Fs{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ms;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hs(e))try{this.getOrInitializeService({instanceIdentifier:$e})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$e){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$e){return this.instances.has(e)}getOptions(e=$e){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$s(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$e){return this.component?this.component.multipleInstances?e:$e:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $s(n){return n===$e?void 0:n}function Hs(n){return n.instantiationMode==="EAGER"}/**
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
 */class Vs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fs(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Ws={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},js=z.INFO,zs={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Ks=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=zs[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Gs=class{constructor(e){this.name=e,this._logLevel=js,this._logHandler=Ks,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ws[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}};const qs=(n,e)=>e.some(t=>n instanceof t);let lr,ur;function Js(){return lr||(lr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ys(){return ur||(ur=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gi=new WeakMap,An=new WeakMap,mi=new WeakMap,cn=new WeakMap,$n=new WeakMap;function Xs(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(xe(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&gi.set(t,n)}).catch(()=>{}),$n.set(e,n),e}function Qs(n){if(An.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});An.set(n,e)}let Rn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return An.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mi.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zs(n){Rn=n(Rn)}function eo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ln(this),e,...t);return mi.set(r,e.sort?e.sort():[e]),xe(r)}:Ys().includes(n)?function(...e){return n.apply(ln(this),e),xe(gi.get(this))}:function(...e){return xe(n.apply(ln(this),e))}}function to(n){return typeof n=="function"?eo(n):(n instanceof IDBTransaction&&Qs(n),qs(n,Js())?new Proxy(n,Rn):n)}function xe(n){if(n instanceof IDBRequest)return Xs(n);if(cn.has(n))return cn.get(n);const e=to(n);return e!==n&&(cn.set(n,e),$n.set(e,n)),e}const ln=n=>$n.get(n);function no(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=xe(o);return r&&o.addEventListener("upgradeneeded",c=>{r(xe(o.result),c.oldVersion,c.newVersion,xe(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ro=["get","getKey","getAll","getAllKeys","count"],io=["put","add","delete","clear"],un=new Map;function hr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(un.get(e))return un.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=io.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ro.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return un.set(e,s),s}Zs(n=>({...n,get:(e,t,r)=>hr(e,t)||n.get(e,t,r),has:(e,t)=>!!hr(e,t)||n.has(e,t)}));/**
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
 */class so{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oo(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function oo(n){const e=n.getComponent();return e?.type==="VERSION"}const Cn="@firebase/app",dr="0.9.1";/**
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
 */const ze=new Gs("@firebase/app"),ao="@firebase/app-compat",co="@firebase/analytics-compat",lo="@firebase/analytics",uo="@firebase/app-check-compat",ho="@firebase/app-check",fo="@firebase/auth",po="@firebase/auth-compat",go="@firebase/database",mo="@firebase/database-compat",_o="@firebase/functions",yo="@firebase/functions-compat",vo="@firebase/installations",bo="@firebase/installations-compat",Io="@firebase/messaging",wo="@firebase/messaging-compat",Eo="@firebase/performance",ko="@firebase/performance-compat",So="@firebase/remote-config",To="@firebase/remote-config-compat",Ao="@firebase/storage",Ro="@firebase/storage-compat",Co="@firebase/firestore",Oo="@firebase/firestore-compat",Do="firebase",Po="9.16.0";/**
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
 */const On="[DEFAULT]",Mo={[Cn]:"fire-core",[ao]:"fire-core-compat",[lo]:"fire-analytics",[co]:"fire-analytics-compat",[ho]:"fire-app-check",[uo]:"fire-app-check-compat",[fo]:"fire-auth",[po]:"fire-auth-compat",[go]:"fire-rtdb",[mo]:"fire-rtdb-compat",[_o]:"fire-fn",[yo]:"fire-fn-compat",[vo]:"fire-iid",[bo]:"fire-iid-compat",[Io]:"fire-fcm",[wo]:"fire-fcm-compat",[Eo]:"fire-perf",[ko]:"fire-perf-compat",[So]:"fire-rc",[To]:"fire-rc-compat",[Ao]:"fire-gcs",[Ro]:"fire-gcs-compat",[Co]:"fire-fst",[Oo]:"fire-fst-compat","fire-js":"fire-js",[Do]:"fire-js-all"};/**
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
 */const Kt=new Map,Dn=new Map;function Lo(n,e){try{n.container.addComponent(e)}catch(t){ze.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _t(n){const e=n.name;if(Dn.has(e))return ze.debug(`There were multiple attempts to register component ${e}.`),!1;Dn.set(e,n);for(const t of Kt.values())Lo(t,n);return!0}function _i(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const No={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ue=new pi("app","Firebase",No);/**
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
 */class xo{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
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
 */const Qt=Po;function yi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:On,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ue.create("bad-app-name",{appName:String(i)});if(t||(t=Ps()),!t)throw Ue.create("no-options");const s=Kt.get(i);if(s){if(Tn(t,s.options)&&Tn(r,s.config))return s;throw Ue.create("duplicate-app",{appName:i})}const o=new Vs(i);for(const c of Dn.values())o.addComponent(c);const a=new xo(t,r,o);return Kt.set(i,a),a}function Uo(n=On){const e=Kt.get(n);if(!e&&n===On)return yi();if(!e)throw Ue.create("no-app",{appName:n});return e}function tt(n,e,t){var r;let i=(r=Mo[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ze.warn(a.join(" "));return}_t(new zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Bo="firebase-heartbeat-database",Fo=1,yt="firebase-heartbeat-store";let hn=null;function vi(){return hn||(hn=no(Bo,Fo,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(yt)}}}).catch(n=>{throw Ue.create("idb-open",{originalErrorMessage:n.message})})),hn}async function $o(n){try{return(await vi()).transaction(yt).objectStore(yt).get(bi(n))}catch(e){if(e instanceof Fn)ze.warn(e.message);else{const t=Ue.create("idb-get",{originalErrorMessage:e?.message});ze.warn(t.message)}}}async function fr(n,e){try{const r=(await vi()).transaction(yt,"readwrite");return await r.objectStore(yt).put(e,bi(n)),r.done}catch(t){if(t instanceof Fn)ze.warn(t.message);else{const r=Ue.create("idb-set",{originalErrorMessage:t?.message});ze.warn(r.message)}}}function bi(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ho=1024,Vo=30*24*60*60*1e3;class Wo{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zo(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=pr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Vo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pr(),{heartbeatsToSend:t,unsentEntries:r}=jo(this._heartbeatsCache.heartbeats),i=di(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function pr(){return new Date().toISOString().substring(0,10)}function jo(n,e=Ho){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gr(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),gr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class zo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ls()?Ns().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $o(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gr(n){return di(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ko(n){_t(new zt("platform-logger",e=>new so(e),"PRIVATE")),_t(new zt("heartbeat",e=>new Wo(e),"PRIVATE")),tt(Cn,dr,n),tt(Cn,dr,"esm2017"),tt("fire-js","")}Ko("");var Go="firebase",qo="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(Go,qo,"app");/**
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
 */const Jo=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Yo=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Yo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ii=function(n){try{return Xo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zo=()=>Qo().__FIREBASE_DEFAULTS__,ea=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ta=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ii(n[1]);return e&&JSON.parse(e)},wi=()=>{try{return Zo()||ea()||ta()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},na=n=>{var e,t;return(t=(e=wi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ei=n=>{var e;return(e=wi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ra(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function ia(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oa(){const n=ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}/**
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
 */const aa="FirebaseError";class ot extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=aa,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zt.prototype.create)}}class Zt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ca(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ot(i,a,r)}}function ca(n,e){return n.replace(la,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const la=/\{\$([^}]+)}/g;function ua(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ki(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(mr(s)&&mr(o)){if(!ki(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function mr(n){return n!==null&&typeof n=="object"}/**
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
 */function Et(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ut(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ht(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ha(n,e){const t=new da(n,e);return t.subscribe.bind(t)}class da{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");fa(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=dn),i.error===void 0&&(i.error=dn),i.complete===void 0&&(i.complete=dn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fa(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function dn(){}/**
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
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const pa={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},ga=V.INFO,ma={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},_a=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=ma[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ya{constructor(e){this.name=e,this._logLevel=ga,this._logHandler=_a,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}function Hn(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}class _r{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}function Si(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const va=Si,Ti=new Zt("auth","Firebase",Si());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new ya("@firebase/auth");function Lt(n,...e){yr.logLevel<=V.ERROR&&yr.error(`Auth (${Qt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n,...e){throw Vn(n,...e)}function me(n,...e){return Vn(n,...e)}function Ai(n,e,t){const r=Object.assign(Object.assign({},va()),{[e]:t});return new Zt("auth","Firebase",r).create(e,{appName:n.name})}function ba(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ue(n,"argument-error"),Ai(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ti.create(n,...e)}function I(n,e,...t){if(!n)throw Vn(e,...t)}function Ie(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Lt(e),new Error(e)}function Ee(n,e){n||Ie(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Map;function we(n){Ee(n instanceof Function,"Expected a class definition");let e=vr.get(n);return e?(Ee(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vr.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n,e){const t=_i(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(ki(s,e??{}))return i;ue(i,"already-initialized")}return t.initialize({options:e})}function wa(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(we);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ea(){return br()==="http:"||br()==="https:"}function br(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ea()||ia()||"connection"in navigator)?navigator.onLine:!0}function Sa(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ee(t>e,"Short delay should be less than long delay!"),this.isMobile=ra()||sa()}get(){return ka()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n,e){Ee(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new kt(3e4,6e4);function St(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Tt(n,e,t,r,i={}){return Ci(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Et(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Ri.fetch()(Oi(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ci(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ta),e);try{const i=new Ra(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ot(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ot(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ot(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ot(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ai(n,u,l);ue(n,u)}}catch(i){if(i instanceof ot)throw i;ue(n,"network-request-failed")}}async function At(n,e,t,r,i={}){const s=await Tt(n,e,t,r,i);return"mfaPendingCredential"in s&&ue(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Oi(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Wn(n.config,i):`${n.config.apiScheme}://${i}`}class Ra{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(me(this.auth,"network-request-failed")),Aa.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ot(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=me(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(n,e){return Tt(n,"POST","/v1/accounts:delete",e)}async function Oa(n,e){return Tt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Da(n,e=!1){const t=qe(n),r=await t.getIdToken(e),i=jn(r);I(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:pt(fn(i.auth_time)),issuedAtTime:pt(fn(i.iat)),expirationTime:pt(fn(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function fn(n){return Number(n)*1e3}function jn(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Lt("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ii(t);return i?JSON.parse(i):(Lt("Failed to decode base64 JWT payload"),null)}catch(i){return Lt("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Pa(n){const e=jn(n);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ot&&Ma(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ma({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pt(this.lastLoginAt),this.creationTime=pt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gt(n){var e;const t=n.auth,r=await n.getIdToken(),i=await vt(n,Oa(t,{idToken:r}));I(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ua(s.providerUserInfo):[],a=xa(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!a?.length,u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Di(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Na(n){const e=qe(n);await Gt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xa(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ua(n){return n.map(e=>{var{providerId:t}=e,r=Hn(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ba(n,e){const t=await Ci(n,{},async()=>{const r=Et({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Oi(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ri.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ba(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new bt;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bt,this.toJSON())}_performRefresh(){return Ie("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,e){I(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class We{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Hn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new La(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Di(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await vt(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Da(this,e)}reload(){return Na(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new We(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Gt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vt(this,Ca(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=t.createdAt)!==null&&l!==void 0?l:void 0,L=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:k,isAnonymous:H,providerData:O,stsTokenManager:W}=t;I(R&&W,e,"internal-error");const B=bt.fromJSON(this.name,W);I(typeof R=="string",e,"internal-error"),Se(h,e.name),Se(d,e.name),I(typeof k=="boolean",e,"internal-error"),I(typeof H=="boolean",e,"internal-error"),Se(f,e.name),Se(p,e.name),Se(y,e.name),Se(m,e.name),Se(_,e.name),Se(L,e.name);const j=new We({uid:R,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:H,photoURL:p,phoneNumber:f,tenantId:y,stsTokenManager:B,createdAt:_,lastLoginAt:L});return O&&Array.isArray(O)&&(j.providerData=O.map(ee=>Object.assign({},ee))),m&&(j._redirectEventId=m),j}static async _fromIdTokenResponse(e,t,r=!1){const i=new bt;i.updateFromServerResponse(t);const s=new We({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gt(s),s}}/**
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
 */class Pi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pi.type="NONE";const Ir=Pi;/**
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
 */function Nt(n,e,t){return`firebase:${n}:${e}:${t}`}class nt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Nt(this.userKey,i.apiKey,s),this.fullPersistenceKey=Nt("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?We._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new nt(we(Ir),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||we(Ir);const o=Nt(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=We._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new nt(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new nt(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ni(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ui(e))return"Blackberry";if(Bi(e))return"Webos";if(zn(e))return"Safari";if((e.includes("chrome/")||Li(e))&&!e.includes("edge/"))return"Chrome";if(xi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Mi(n=ie()){return/firefox\//i.test(n)}function zn(n=ie()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Li(n=ie()){return/crios\//i.test(n)}function Ni(n=ie()){return/iemobile/i.test(n)}function xi(n=ie()){return/android/i.test(n)}function Ui(n=ie()){return/blackberry/i.test(n)}function Bi(n=ie()){return/webos/i.test(n)}function en(n=ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Fa(n=ie()){var e;return en(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $a(){return oa()&&document.documentMode===10}function Fi(n=ie()){return en(n)||xi(n)||Bi(n)||Ui(n)||/windows phone/i.test(n)||Ni(n)}function Ha(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n,e=[]){let t;switch(n){case"Browser":t=wr(ie());break;case"Worker":t=`${wr(ie())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qt}/${r}`}/**
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
 */class Va{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Er(this),this.idTokenSubscription=new Er(this),this.beforeStateQueue=new Va(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ti,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=we(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await nt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gt(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?qe(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(we(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&we(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await nt.create(this,[we(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$i(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function at(n){return qe(n)}class Er{constructor(e){this.auth=e,this.observer=null,this.addObserver=ha(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ja(n,e,t){const r=at(n);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!t?.disableWarnings,s=Hi(e),{host:o,port:a}=za(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ka()}function Hi(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function za(n){const e=Hi(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kr(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kr(o)}}}function kr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ka(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ie("not implemented")}_getIdTokenResponse(e){return Ie("not implemented")}_linkToIdToken(e,t){return Ie("not implemented")}_getReauthenticationResolver(e){return Ie("not implemented")}}async function Ga(n,e){return Tt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(n,e){return At(n,"POST","/v1/accounts:signInWithPassword",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}async function Ya(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Kn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new It(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new It(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qa(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ja(e,{email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ga(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ya(e,{idToken:t,email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xa="http://localhost";class Ke extends Kn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ue("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Hn(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ke(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return rt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,rt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rt(e,t)}buildRequest(){const e={requestUri:Xa,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Et(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Za(n){const e=ut(ht(n)).link,t=e?ut(ht(e)).deep_link_id:null,r=ut(ht(n)).deep_link_id;return(r?ut(ht(r)).link:null)||r||t||e||n}class Gn{constructor(e){var t,r,i,s,o,a;const c=ut(ht(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Qa((i=c.mode)!==null&&i!==void 0?i:null);I(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Za(e);try{return new Gn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.providerId=ct.PROVIDER_ID}static credential(e,t){return It._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Gn.parseLink(t);return I(r,"argument-error"),It._fromEmailAndCode(e,r.code,r.tenantId)}}ct.PROVIDER_ID="password";ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rt extends qn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Rt{constructor(){super("facebook.com")}static credential(e){return Ke._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}Te.FACEBOOK_SIGN_IN_METHOD="facebook.com";Te.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Rt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ke._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return be.credential(t,r)}catch{return null}}}be.GOOGLE_SIGN_IN_METHOD="google.com";be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Rt{constructor(){super("github.com")}static credential(e){return Ke._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.GITHUB_SIGN_IN_METHOD="github.com";Ae.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Rt{constructor(){super("twitter.com")}static credential(e,t){return Ke._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Re.credential(t,r)}catch{return null}}}Re.TWITTER_SIGN_IN_METHOD="twitter.com";Re.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(n,e){return At(n,"POST","/v1/accounts:signUp",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await We._fromIdTokenResponse(e,r,i),o=Sr(r);return new Ge({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Sr(r);return new Ge({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Sr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends ot{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new qt(e,t,r,i)}}function Vi(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qt._fromErrorAndOperation(n,s,e,r):s})}async function tc(n,e,t=!1){const r=await vt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ge._forOperation(n,"link",r)}/**
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
 */async function nc(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await vt(n,Vi(r,i,e,n),t);I(s.idToken,r,"internal-error");const o=jn(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(n.uid===a,r,"user-mismatch"),Ge._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&ue(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(n,e,t=!1){const r="signIn",i=await Vi(n,r,e),s=await Ge._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function rc(n,e){return Wi(at(n),e)}async function ic(n,e,t){const r=at(n),i=await ec(r,{returnSecureToken:!0,email:e,password:t}),s=await Ge._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function sc(n,e,t){return rc(qe(n),ct.credential(e,t))}function oc(n,e,t,r){return qe(n).onIdTokenChanged(e,t,r)}function ac(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}const Jt="__sak";/**
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
 */class ji{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jt,"1"),this.storage.removeItem(Jt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){const n=ie();return zn(n)||en(n)}const lc=1e3,uc=10;class zi extends ji{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cc()&&Ha(),this.fallbackToPolling=Fi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$a()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uc):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},lc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zi.type="LOCAL";const hc=zi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends ji{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ki.type="SESSION";const Gi=Ki;/**
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
 */function dc(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new tn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await dc(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class fc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Jn("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return window}function pc(n){_e().location.href=n}/**
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
 */function qi(){return typeof _e().WorkerGlobalScope<"u"&&typeof _e().importScripts=="function"}async function gc(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mc(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function _c(){return qi()?self:null}/**
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
 */const Ji="firebaseLocalStorageDb",yc=1,Yt="firebaseLocalStorage",Yi="fbase_key";class Ct{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nn(n,e){return n.transaction([Yt],e?"readwrite":"readonly").objectStore(Yt)}function vc(){const n=indexedDB.deleteDatabase(Ji);return new Ct(n).toPromise()}function Mn(){const n=indexedDB.open(Ji,yc);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Yt,{keyPath:Yi})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Yt)?e(r):(r.close(),await vc(),e(await Mn()))})})}async function Tr(n,e,t){const r=nn(n,!0).put({[Yi]:e,value:t});return new Ct(r).toPromise()}async function bc(n,e){const t=nn(n,!1).get(e),r=await new Ct(t).toPromise();return r===void 0?null:r.value}function Ar(n,e){const t=nn(n,!0).delete(e);return new Ct(t).toPromise()}const Ic=800,wc=3;class Xi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>wc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(_c()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await gc(),!this.activeServiceWorker)return;this.sender=new fc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mn();return await Tr(e,Jt,"1"),await Ar(e,Jt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>bc(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ar(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nn(i,!1).getAll();return new Ct(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ic)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xi.type="LOCAL";const Ec=Xi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Sc(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=me("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",kc().appendChild(r)})}function Tc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new kt(3e4,6e4);/**
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
 */function Qi(n,e){return e?we(e):(I(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Yn extends Kn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ac(n){return Wi(n.auth,new Yn(n),n.bypassAuthState)}function Rc(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),nc(t,new Yn(n),n.bypassAuthState)}async function Cc(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),tc(t,new Yn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ac;case"linkViaPopup":case"linkViaRedirect":return Cc;case"reauthViaPopup":case"reauthViaRedirect":return Rc;default:ue(this.auth,"internal-error")}}resolve(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new kt(2e3,1e4);async function Dc(n,e,t){const r=at(n);ba(n,e,qn);const i=Qi(r,t);return new Ve(r,"signInViaPopup",e,i).executeNotNull()}class Ve extends Zi{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ve.currentPopupAction&&Ve.currentPopupAction.cancel(),Ve.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const e=Jn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ve.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Oc.get())};e()}}Ve.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="pendingRedirect",xt=new Map;class Mc extends Zi{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=xt.get(this.auth._key());if(!e){try{const r=await Lc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}xt.set(this.auth._key(),e)}return this.bypassAuthState||xt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lc(n,e){const t=Uc(e),r=xc(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Nc(n,e){xt.set(n._key(),e)}function xc(n){return we(n._redirectPersistence)}function Uc(n){return Nt(Pc,n.config.apiKey,n.name)}async function Bc(n,e,t=!1){const r=at(n),i=Qi(r,e),o=await new Mc(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=10*60*1e3;class $c{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!es(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(me(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rr(e))}saveEventToCache(e){this.cachedEventUids.add(Rr(e)),this.lastProcessedEventTime=Date.now()}}function Rr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function es({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Hc(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return es(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(n,e={}){return Tt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jc=/^https?/;async function zc(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Vc(n);for(const t of e)try{if(Kc(t))return}catch{}ue(n,"unauthorized-domain")}function Kc(n){const e=Pn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!jc.test(t))return!1;if(Wc.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Gc=new kt(3e4,6e4);function Cr(){const n=_e().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qc(n){return new Promise((e,t)=>{var r,i,s;function o(){Cr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cr(),t(me(n,"network-request-failed"))},timeout:Gc.get()})}if(!((i=(r=_e().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_e().gapi)===null||s===void 0)&&s.load)o();else{const a=Tc("iframefcb");return _e()[a]=()=>{gapi.load?o():t(me(n,"network-request-failed"))},Sc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Ut=null,e})}let Ut=null;function Jc(n){return Ut=Ut||qc(n),Ut}/**
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
 */const Yc=new kt(5e3,15e3),Xc="__/auth/iframe",Qc="emulator/auth/iframe",Zc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},el=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tl(n){const e=n.config;I(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Wn(e,Qc):`https://${n.config.authDomain}/${Xc}`,r={apiKey:e.apiKey,appName:n.name,v:Qt},i=el.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Et(r).slice(1)}`}async function nl(n){const e=await Jc(n),t=_e().gapi;return I(t,n,"internal-error"),e.open({where:document.body,url:tl(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zc,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=me(n,"network-request-failed"),a=_e().setTimeout(()=>{s(o)},Yc.get());function c(){_e().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const rl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},il=500,sl=600,ol="_blank",al="http://localhost";class Or{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cl(n,e,t,r=il,i=sl){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},rl),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ie().toLowerCase();t&&(a=Li(l)?ol:t),Mi(l)&&(e=e||al,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Fa(l)&&a!=="_self")return ll(e||"",a),new Or(null);const h=window.open(e||"",a,u);I(h,n,"popup-blocked");try{h.focus()}catch{}return new Or(h)}function ll(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const ul="__/auth/handler",hl="emulator/auth/handler";function Dr(n,e,t,r,i,s){I(n.config.authDomain,n,"auth-domain-config-required"),I(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Qt,eventId:i};if(e instanceof qn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ua(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Rt){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${dl(n)}?${Et(a).slice(1)}`}function dl({config:n}){return n.emulator?Wn(n,hl):`https://${n.authDomain}/${ul}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="webStorageSupport";class fl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gi,this._completeRedirectFn=Bc,this._overrideRedirectResult=Nc}async _openPopup(e,t,r,i){var s;Ee((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Dr(e,t,r,Pn(),i);return cl(e,o,Jn())}async _openRedirect(e,t,r,i){return await this._originValidation(e),pc(Dr(e,t,r,Pn(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ee(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await nl(e),r=new $c(e);return t.register("authEvent",i=>(I(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pn,{type:pn},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[pn];o!==void 0&&t(!!o),ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fi()||zn()||en()}}const pl=fl;var Pr="@firebase/auth",Mr="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _l(n){_t(new _r("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{I(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),I(!o?.includes(":"),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$i(n)},u=new Wa(a,c,l);return wa(u,t),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),_t(new _r("auth-internal",e=>{const t=at(e.getProvider("auth").getImmediate());return(r=>new gl(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(Pr,Mr,ml(n)),tt(Pr,Mr,"esm2017")}/**
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
 */const yl=5*60,vl=Ei("authIdTokenMaxAge")||yl;let Lr=null;const bl=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>vl)return;const i=t?.token;Lr!==i&&(Lr=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Il(n=Uo()){const e=_i(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ia(n,{popupRedirectResolver:pl,persistence:[Ec,hc,Gi]}),r=Ei("authTokenSyncURL");if(r){const s=bl(r);ac(t,s,()=>s(t.currentUser)),oc(t,o=>s(o))}const i=na("auth");return i&&ja(t,`http://${i}`),t}_l("Browser");const wl=()=>{},El="https://api.cubingapp.com:3000",kl={apiKey:"AIzaSyCnwuoBqAR6cx7uqzxf7iEC99sZf36sZZA",authDomain:"virtual-cube.firebaseapp.com",projectId:"virtual-cube",storageBucket:"virtual-cube.appspot.com",messagingSenderId:"371073332227",appId:"1:371073332227:web:c96d3137080aecfe634a36",measurementId:"G-YR33BDCQDY"},Sl=yi(kl),rn=()=>Il(Sl);async function sn(n,e){return await fetch(`${El}${n}`,{method:"POST",body:JSON.stringify(e)}).then(r=>r.json())}async function Tl(n){return sn("/user",{email:n})}const ts="algSet",Nr="casesToday",ns="showScramble",Xn="user";function Al(){return localStorage.getItem(ts)??""}function Rl(n){localStorage.setItem(ts,n)}let Ln={get:()=>{const n=localStorage.getItem(Nr);if(n){const e=JSON.parse(n);return{date:new Date(e.date),count:e.count}}return{date:new Date,count:0}},set:n=>{localStorage.setItem(Nr,JSON.stringify(n))}};function Cl(){return Ml(ns)??!1}function Ol(n){Ll(ns,n)}function Dl(){return localStorage.getItem(Xn)}function rs(){localStorage.removeItem(Xn)}function Pl(n){localStorage.setItem(Xn,n)}function Ml(n){const e=localStorage.getItem(n);return e===null?null:e=="1"}function Ll(n,e){localStorage.setItem(n,e?"1":"0")}class is{email;uid;constructor(){}toJsonString(){return JSON.stringify({email:this.email,uid:this.uid})}fromJsonString(e){const t=JSON.parse(e);this.email=t.email,this.uid=t.uid}}function ss(n){wl("Signed in as "+n.email+" with uid "+n.uid)}function Nl(){const n=Dl();if(!n)return null;const e=new is;return e.fromJsonString(n),!e.email||!e.uid?(rs(),null):(ss(e),e)}function Qn(n,e){const t=new is;t.email=n.user.email,Tl(t.email).then(r=>{t.uid=r.uid,Pl(t.toJsonString()),ss(t),e(t)})}function xl(n){const e=rn(),t=new be;Dc(e,t).then(r=>{Qn(r,n)}).catch(r=>{console.log(r)})}function Ul(n,e,t){const r=rn();ic(r,n,e).then(i=>{Qn(i,t)}).catch(i=>{console.log(i.message)})}function Bl(n,e,t){const r=rn();sc(r,n,e).then(i=>{Qn(i,t)}).catch(i=>{console.log(i.message)})}function Fl(){rn().signOut(),rs()}function $l(n){let e,t,r;return{c(){e=v("button"),e.textContent="Create Account",T(e,"class","btn-primary")},m(i,s){$(i,e,s),t||(r=oe(e,"click",n[3]),t=!0)},p:U,i:U,o:U,d(i){i&&F(e),t=!1,r()}}}function Hl(n,e,t){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{Ul(r,i,s)};return n.$$set=a=>{"email"in a&&t(0,r=a.email),"password"in a&&t(1,i=a.password),"callback"in a&&t(2,s=a.callback)},[r,i,s,o]}class Vl extends ge{constructor(e){super(),pe(this,e,Hl,$l,fe,{email:0,password:1,callback:2})}}function Wl(n){let e,t,r;return{c(){e=v("button"),e.textContent="Sign In",T(e,"class","btn-primary")},m(i,s){$(i,e,s),t||(r=oe(e,"click",n[3]),t=!0)},p:U,i:U,o:U,d(i){i&&F(e),t=!1,r()}}}function jl(n,e,t){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{Bl(r,i,s)};return n.$$set=a=>{"email"in a&&t(0,r=a.email),"password"in a&&t(1,i=a.password),"callback"in a&&t(2,s=a.callback)},[r,i,s,o]}class zl extends ge{constructor(e){super(),pe(this,e,jl,Wl,fe,{email:0,password:1,callback:2})}}function Kl(n){let e,t,r;return{c(){e=v("button"),e.innerHTML=`<div class="row"><svg style="width: 20px; height: 20px; margin-right: 0.6rem;" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path><path fill="none" d="M2 2h44v44H2z"></path></svg> 
        <p style="font-size: 1rem; color: black;">Sign in with Google</p></div>`,T(e,"class","btn-white")},m(i,s){$(i,e,s),t||(r=oe(e,"click",n[1]),t=!0)},p:U,i:U,o:U,d(i){i&&F(e),t=!1,r()}}}function Gl(n,e,t){let{callback:r}=e;const i=()=>xl(r);return n.$$set=s=>{"callback"in s&&t(0,r=s.callback)},[r,i]}class ql extends ge{constructor(e){super(),pe(this,e,Gl,Kl,fe,{callback:0})}}function Jl(n){let e,t,r,i;return{c(){e=v("input"),T(e,"class",t=n[1].class),T(e,"type","email"),T(e,"placeholder","Email")},m(s,o){$(s,e,o),Ht(e,n[0]),r||(i=oe(e,"input",n[2]),r=!0)},p(s,[o]){o&2&&t!==(t=s[1].class)&&T(e,"class",t),o&1&&e.value!==s[0]&&Ht(e,s[0])},i:U,o:U,d(s){s&&F(e),r=!1,i()}}}function Yl(n,e,t){let{value:r}=e;function i(){r=this.value,t(0,r)}return n.$$set=s=>{t(1,e=de(de({},e),ye(s))),"value"in s&&t(0,r=s.value)},e=ye(e),[r,e,i]}class Xl extends ge{constructor(e){super(),pe(this,e,Yl,Jl,fe,{value:0})}}function Ql(n){let e,t,r,i;return{c(){e=v("input"),T(e,"class",t=n[1].class),T(e,"type","password"),T(e,"placeholder","Password")},m(s,o){$(s,e,o),Ht(e,n[0]),r||(i=oe(e,"input",n[2]),r=!0)},p(s,[o]){o&2&&t!==(t=s[1].class)&&T(e,"class",t),o&1&&e.value!==s[0]&&Ht(e,s[0])},i:U,o:U,d(s){s&&F(e),r=!1,i()}}}function Zl(n,e,t){let{value:r}=e;function i(){r=this.value,t(0,r)}return n.$$set=s=>{t(1,e=de(de({},e),ye(s))),"value"in s&&t(0,r=s.value)},e=ye(e),[r,e,i]}class eu extends ge{constructor(e){super(),pe(this,e,Zl,Ql,fe,{value:0})}}function tu(n){let e,t,r,i;const s=n[6].default,o=ii(s,n,n[5],null);return{c(){e=v("div"),o&&o.c(),T(e,"class",t=$t("hoverable "+n[1].class)+" svelte-euathk"),T(e,"style",r=n[0]+n[1].style)},m(a,c){$(a,e,c),o&&o.m(e,null),i=!0},p(a,[c]){o&&o.p&&(!i||c&32)&&ai(o,s,a,a[5],i?oi(s,a[5],c,null):ci(a[5]),null),(!i||c&2&&t!==(t=$t("hoverable "+a[1].class)+" svelte-euathk"))&&T(e,"class",t),(!i||c&2&&r!==(r=a[0]+a[1].style))&&T(e,"style",r)},i(a){i||(M(o,a),i=!0)},o(a){N(o,a),i=!1},d(a){a&&F(e),o&&o.d(a)}}}function nu(n,e,t){let{$$slots:r={},$$scope:i}=e,{background:s="transparent"}=e,{borderRadius:o="inherit"}=e,{hovBackground:a="transparent"}=e,c=`
    --background: ${s};
    --border-radius: ${o};
    --hov-background: ${a};
    `;return n.$$set=l=>{t(1,e=de(de({},e),ye(l))),"background"in l&&t(2,s=l.background),"borderRadius"in l&&t(3,o=l.borderRadius),"hovBackground"in l&&t(4,a=l.hovBackground),"$$scope"in l&&t(5,i=l.$$scope)},e=ye(e),[c,e,s,o,a,i,r]}class gt extends ge{constructor(e){super(),pe(this,e,nu,tu,fe,{background:2,borderRadius:3,hovBackground:4})}}function ru(n){let e,t,r,i,s;return{c(){e=v("button"),T(e,"class",t=$t(n[1].class)+" svelte-18z7rew"),T(e,"style",r=n[1].style)},m(o,a){$(o,e,a),e.innerHTML=n[0],i||(s=oe(e,"click",n[4]),i=!0)},p(o,[a]){a&2&&t!==(t=$t(o[1].class)+" svelte-18z7rew")&&T(e,"class",t),a&2&&r!==(r=o[1].style)&&T(e,"style",r)},i:U,o:U,d(o){o&&F(e),i=!1,s()}}}function iu(n,e,t){let{name:r}=e,{stroke:i="white"}=e,o={happy:`<svg width="100%" height="100%" stroke="${i}" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
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
        </svg>`}[r];function a(c){vs.call(this,n,c)}return n.$$set=c=>{t(1,e=de(de({},e),ye(c))),"name"in c&&t(2,r=c.name),"stroke"in c&&t(3,i=c.stroke)},e=ye(e),[o,e,r,i,a]}class Be extends ge{constructor(e){super(),pe(this,e,iu,ru,fe,{name:2,stroke:3})}}function su(n){let e,t;return e=new Be({props:{name:"x",style:"padding: 4px;"}}),e.$on("click",n[3]),{c(){Z(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p:U,i(r){t||(M(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function ou(n){let e,t,r,i,s,o,a,c,l;o=new gt({props:{hovBackground:"var(--gray-500)",borderRadius:"4px",$$slots:{default:[su]},$$scope:{ctx:n}}});const u=n[2].default,h=ii(u,n,n[4],null);return{c(){e=v("div"),t=v("div"),r=v("p"),i=ae(n[0]),s=w(),Z(o.$$.fragment),a=w(),c=v("div"),h&&h.c(),T(t,"class","drawer-header svelte-vauk1a"),T(c,"class","drawer-body"),T(e,"class","drawer svelte-vauk1a")},m(d,f){$(d,e,f),g(e,t),g(t,r),g(r,i),g(t,s),Y(o,t,null),g(e,a),g(e,c),h&&h.m(c,null),l=!0},p(d,[f]){(!l||f&1)&&wt(i,d[0]);const p={};f&18&&(p.$$scope={dirty:f,ctx:d}),o.$set(p),h&&h.p&&(!l||f&16)&&ai(h,u,d,d[4],l?oi(u,d[4],f,null):ci(d[4]),null)},i(d){l||(M(o.$$.fragment,d),M(h,d),l=!0)},o(d){N(o.$$.fragment,d),N(h,d),l=!1},d(d){d&&F(e),X(o),h&&h.d(d)}}}function au(n,e,t){let{$$slots:r={},$$scope:i}=e,{title:s}=e,{close:o}=e;const a=()=>o();return n.$$set=c=>{"title"in c&&t(0,s=c.title),"close"in c&&t(1,o=c.close),"$$scope"in c&&t(4,i=c.$$scope)},[s,o,r,a,i]}class os extends ge{constructor(e){super(),pe(this,e,au,ou,fe,{title:0,close:1})}}const cu=[1,1,1,1],lu=[.5,.5,.5,1],uu=[1,1,0,1],hu=[0,1,0,1],du=[0,0,1,1],fu=[1,.5,0,1],pu=[1,0,0,1],gu=[0,0,0,1],xr=[cu,hu,uu,du,fu,pu];function Ur(n){return(n<0||n>=xr.length)&&console.error("Invalid face: "+n),xr[n]}function Br(n,e){return Math.floor(n/S(e.layers))}function mu(n){return n[je(n.length)]}function je(n){return Math.floor(Math.random()*n)}function _u(n){let e=n.length;for(;e!=0;){let t=je(e);e--;let r=n[t];n[t]=n[e],n[e]=r}return n}function Zn(n){return n<=0?2:Zn(n-1)+n+2}function yu(n){n[0].Score++;let e=Zn(n[0].Score);const t=Math.ceil(n.length*3/4);e>t&&(e=t+je(n.length-t)),as(n,e)}function vu(n){n[0].Score=0,as(n,Zn(0))}function as(n,e){const t=n[0];for(let r=0;r<e;r++)n[r]=n[r+1];n[e]=t}const Oe=0,De=1,Pe=2,Me=3,Le=4,Ne=5,bu=[[Oe,Me,Le],[Oe,Ne,Me],[Oe,Le,De],[Oe,De,Ne],[Pe,De,Le],[Pe,Ne,De],[Pe,Le,Me],[Pe,Me,Ne]],Iu=[[Oe,Me],[Oe,Le],[Oe,Ne],[Oe,De],[De,Le],[De,Ne],[Pe,De],[Pe,Le],[Pe,Ne],[Pe,Me],[Me,Le],[Me,Ne]];function wu(n){let e=Fr(12,2),t=Fr(8,3),r=gn(8),i=gn(12);for(;$r(r)!==$r(i);)r=gn(8);const s=Array(54);for(let k=0;k<6;k++){const H=n.center(k);s[H]=k}let o=n.corners(0,0),a=n.corners(1,0),c=n.corners(2,0),l=n.corners(3,0),u=n.corners(4,0),h=n.corners(5,0);const d=(k,H,O,W,B,j,ee,te,x)=>{const A=(J,ne)=>bu[r[J]][(t[J]+ne)%3];s[k.topLeft]=A(H,j),s[k.topRight]=A(O,ee),s[k.bottomLeft]=A(W,te),s[k.bottomRight]=A(B,x)};d(o,0,1,2,3,0,0,0,0),d(a,2,3,4,5,2,1,1,2),d(c,4,5,6,7,0,0,0,0),d(l,6,7,0,1,2,1,1,2),d(u,0,2,6,4,2,1,1,2),d(h,3,1,5,7,2,1,1,2);let f=n.edges(0,0,0),p=n.edges(1,0,0),y=n.edges(2,0,0),m=n.edges(3,0,0),_=n.edges(4,0,0),L=n.edges(5,0,0);const R=(k,H,O,W,B,j,ee,te,x)=>{const A=(J,ne)=>Iu[i[J]][(e[J]+ne)%2];s[k.top]=A(H,j),s[k.left]=A(O,ee),s[k.right]=A(W,te),s[k.bottom]=A(B,x)};return R(f,0,1,2,3,0,0,0,0),R(p,3,4,5,6,1,0,0,1),R(y,6,7,8,9,0,0,0,0),R(m,9,10,11,0,1,0,0,1),R(_,1,10,4,7,1,1,1,1),R(L,2,5,11,8,1,1,1,1),s}function Fr(n,e){const t=Array(n);for(let r=0;r<n;r++)t[r]=je(e);for(;!Eu(t,e);){const r=je(n);t[r]=je(e)}return t}function Eu(n,e){let t=0;for(let r=0;r<n.length;r++)t+=n[r];return t%e===0}function gn(n){const e=Array(n);for(let t=0;t<n;t++)e[t]=t;return _u(e),e}function $r(n){const e=[...n];let t=!1;for(;;)if(e[0]===0){const r=e.findIndex((i,s)=>i!==s);if(r===-1)return t;e[0]=e[r],e[r]=0,t=!t}else{const r=e[0];e[0]=e[r],e[r]=r,t=!t}}let Ce;function Bt(n,e){const t=[e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3]];Ce.bindBuffer(Ce.ARRAY_BUFFER,n.buffer),Ce.bufferData(Ce.ARRAY_BUFFER,new Float32Array(t),Ce.STATIC_DRAW)}function S(n){return n*n}function q(n){return Math.floor(n/2)}function lt(n){return n%2==0}function se(n){return n*n*6}class ku{stickers;underStickers;layers;affectedStickers;disableTurn;clockwise;animationQueue;constructor(e){Ce=e,this.animationQueue=[]}setColors(e){for(let t=0;t<se(this.layers);t++)Bt(this.stickers[t],e[t])}solve(){const e=Array(se(this.layers));for(let t=0;t<se(this.layers);t++){const r=Br(t,this);this.stickers[t].face=r,e[t]=Ur(r)}this.setColors(e)}scramble(){if(this.layers===3){this.scramble3x3();return}this.naiveScramble()}scramble3x3(){const e=wu(this);this.setCubeState(e)}naiveScramble(){let e=S(this.layers)*10;for(let t=0;t<e;t++){let r=Math.floor(Math.random()*3),i=Math.floor(Math.random()*this.layers),s=Math.floor(Math.random()*1)==0;this._matchTurn(r,i,s)}}setNumOfLayers(e){this.layers=e,this.stickers=Array(se(e)),this.underStickers=Array(se(e));for(let t=0;t<se(e);t++){const r=Br(t,this);this.stickers[t]={face:r,buffer:Ce.createBuffer()},this.underStickers[t]={face:r,buffer:Ce.createBuffer()},Bt(this.underStickers[t],gu)}this.affectedStickers=Array(se(e)).fill(!1)}getCubeState(){return this.stickers.map(e=>e.face)}setCubeState(e){for(let t=0;t<se(this.layers);t++){const r=Ur(e[t]);this.stickers[t].face=e[t],Bt(this.stickers[t],r)}}resetAffectedStickers(){const e=Array(se(this.layers));this.affectedStickers=e.fill(this.layers===1)}pushAnimation(e,t,r){let i=t?-1:1,s=[0,0,0];s[e]=i,this.animationQueue.push({axis:s,stickers:r,stickersToAnimate:this.affectedStickers})}turn(e,t,r){this.resetAffectedStickers(),this.pushAnimation(e,r,[...this.stickers]),this._matchTurn(e,t,r)}sliceTurn(e,t){const r=Array(se(this.layers));this.affectedStickers=r.fill(!1),this.pushAnimation(e,t,[...this.stickers]);for(let i=1;i<this.layers-1;i++)this._matchTurn(e,i,t)}wideTurn(e,t,r){this.resetAffectedStickers(),this.pushAnimation(e,r,[...this.stickers]),this._matchTurn(e,t,r);for(let i=1;i<this.layers-1;i++)this._matchTurn(e,i,r)}cubeRotate(e,t){this.resetAffectedStickers(),this.pushAnimation(e,t,[...this.stickers]);for(let r=0;r<this.layers;r++)this._matchTurn(e,r,t)}_matchTurn(e,t,r){e==0?(this._turnXAxis(t,r),t==0?this._turnOuter(5,r):t==this.layers-1&&this._turnOuter(4,!r)):e==1?(this._turnYAxis(t,r),t==0?this._turnOuter(0,r):t==this.layers-1&&this._turnOuter(2,!r)):e==2?(this._turnZAxis(t,r),t==0?this._turnOuter(1,r):t==this.layers-1&&this._turnOuter(3,!r)):console.error(`Axis ${e} not recognized`)}_turnXAxis(e,t){for(let r=1;r<=this.layers;r++)this._cycle(t,0*S(this.layers)+S(this.layers)-r-e*this.layers,3*S(this.layers)+S(this.layers)-r-e*this.layers,2*S(this.layers)+S(this.layers)-r-e*this.layers,1*S(this.layers)+S(this.layers)-r-e*this.layers)}_turnYAxis(e,t){for(let r=0;r<this.layers;r++)this._cycle(t,1*S(this.layers)+r*this.layers+e,4*S(this.layers)+r*this.layers+e,3*S(this.layers)+(this.layers-r-1)*this.layers+(this.layers-1)-e,5*S(this.layers)+r*this.layers+e)}_turnZAxis(e,t){for(let r=0;r<this.layers;r++)this._cycle(t,0*S(this.layers)+(r+1)*this.layers-1-e,5*S(this.layers)+r+this.layers*e,2*S(this.layers)+(this.layers-r-1)*this.layers+e,4*S(this.layers)+S(this.layers)-(r+1)-e*this.layers)}_turnOuter(e,t){if(this.layers%2!=0){let r=this.center(e);this.affectedStickers[r]=!0}for(let r=0;r<Math.floor(this.layers/2);r++){const{topLeft:i,topRight:s,bottomLeft:o,bottomRight:a}=this.corners(e,r);this._cycle(t,i,s,a,o);let c=this.layers-2*(r+1);for(let l=0;l<c;l++){const{top:u,left:h,bottom:d,right:f}=this.edges(e,r,l);this._cycle(t,u,f,d,h)}}}_cycle(e,t,r,i,s){this.affectedStickers[t]=!0,this.affectedStickers[r]=!0,this.affectedStickers[i]=!0,this.affectedStickers[s]=!0,e?this._cycleHelper(t,r,i,s):this._cycleHelper(s,i,r,t)}_cycleHelper(e,t,r,i){let s=this.stickers[i];this.stickers[i]=this.stickers[r],this.stickers[r]=this.stickers[t],this.stickers[t]=this.stickers[e],this.stickers[e]=s}matchKeyToTurn(e){if(!this.disableTurn&&!e.ctrlKey)return this.matchKeyCodeToTurn(e.code)}matchKeyCodeToTurn(e){switch(e){case"KeyN":return this.cubeRotate(0,!0),{notation:"x",rotate:!0};case"KeyB":return this.cubeRotate(0,!1),{notation:"x'",rotate:!0};case"Semicolon":return this.cubeRotate(1,!0),{notation:"y",rotate:!0};case"KeyA":return this.cubeRotate(1,!1),{notation:"y'",rotate:!0};case"KeyP":return this.cubeRotate(2,!0),{notation:"z",rotate:!0};case"KeyQ":return this.cubeRotate(2,!1),{notation:"z'",rotate:!0};case"KeyJ":return this.turn(1,0,!0),{notation:"U",turn:!0};case"KeyF":return this.turn(1,0,!1),{notation:"U'",turn:!0};case"KeyS":return this.turn(1,this.layers-1,!1),{notation:"D",turn:!0};case"KeyL":return this.turn(1,this.layers-1,!0),{notation:"D'",turn:!0};case"KeyH":return this.turn(2,0,!0),{notation:"F",turn:!0};case"KeyG":return this.turn(2,0,!1),{notation:"F'",turn:!0};case"KeyW":return this.turn(2,this.layers-1,!1),{notation:"B",turn:!0};case"KeyO":return this.turn(2,this.layers-1,!0),{notation:"B'",turn:!0};case"KeyD":return this.turn(0,this.layers-1,!1),{notation:"L",turn:!0};case"KeyE":return this.turn(0,this.layers-1,!0),{notation:"L'",turn:!0};case"KeyI":return this.turn(0,0,!0),{notation:"R",turn:!0};case"KeyK":return this.turn(0,0,!1),{notation:"R'",turn:!0};case"BracketLeft":return this.sliceTurn(0,!1),{notation:"M",turn:!0};case"Quote":return this.sliceTurn(0,!0),{notation:"M'",turn:!0};case"KeyC":return this.sliceTurn(1,!1),{notation:"E",turn:!0};case"Comma":return this.sliceTurn(1,!0),{notation:"E'",turn:!0};case"KeyY":return this.sliceTurn(2,!0),{notation:"S",turn:!0};case"KeyT":return this.sliceTurn(2,!1),{notation:"S'",turn:!0};case"KeyU":return this.wideTurn(0,0,!0),{notation:"r",turn:!0};case"KeyM":return this.wideTurn(0,0,!1),{notation:"r'",turn:!0};case"KeyV":return this.wideTurn(0,this.layers-1,!1),{notation:"l",turn:!0};case"KeyR":return this.wideTurn(0,this.layers-1,!0),{notation:"l'",turn:!0}}}stepAlgorithm(e,t){switch(e){case"x":this.cubeRotate(0,t);break;case"x'":this.cubeRotate(0,!t);break;case"x2":case"x2'":this.cubeRotate(0,t),this.cubeRotate(0,t);break;case"y":this.cubeRotate(1,t);break;case"y'":this.cubeRotate(1,!t);break;case"y2":case"y2'":this.cubeRotate(1,t),this.cubeRotate(1,t);break;case"z":this.cubeRotate(2,t);break;case"z'":this.cubeRotate(2,!t);break;case"z2":case"z2'":this.cubeRotate(2,t),this.cubeRotate(2,t);break;case"U":this.turn(1,0,t);break;case"U'":this.turn(1,0,!t);break;case"U2":case"U2'":this.turn(1,0,t),this.turn(1,0,t);break;case"u":this.wideTurn(1,0,t);break;case"u'":this.wideTurn(1,0,!t);break;case"u2":case"u2'":this.wideTurn(1,0,t),this.wideTurn(1,0,t);break;case"D":this.turn(1,this.layers-1,!t);break;case"D'":this.turn(1,this.layers-1,t);break;case"D2":case"D2'":this.turn(1,this.layers-1,t),this.turn(1,this.layers-1,t);break;case"d":this.wideTurn(1,this.layers-1,!t);break;case"d'":this.wideTurn(1,this.layers-1,t);break;case"d2":case"d2'":this.wideTurn(1,this.layers-1,t),this.wideTurn(1,this.layers-1,t);break;case"F":this.turn(2,0,t);break;case"F'":this.turn(2,0,!t);break;case"F2":case"F2'":this.turn(2,0,t),this.turn(2,0,t);break;case"f":this.wideTurn(2,0,t);break;case"f'":this.wideTurn(2,0,!t);break;case"f2":case"f2'":this.wideTurn(2,0,t),this.wideTurn(2,0,t);break;case"B":this.turn(2,this.layers-1,!t);break;case"B'":this.turn(2,this.layers-1,t);break;case"B2":case"B2'":this.turn(2,this.layers-1,t),this.turn(2,this.layers-1,t);break;case"b":this.wideTurn(2,this.layers-1,!t);break;case"b'":this.wideTurn(2,this.layers-1,t);break;case"b2":case"b2'":this.wideTurn(2,this.layers-1,t),this.wideTurn(2,this.layers-1,t);break;case"L":this.turn(0,this.layers-1,!t);break;case"L'":this.turn(0,this.layers-1,t);break;case"L2":case"L2'":this.turn(0,this.layers-1,t),this.turn(0,this.layers-1,t);break;case"l":this.wideTurn(0,this.layers-1,!t);break;case"l'":this.wideTurn(0,this.layers-1,t);break;case"l2":case"l2'":this.wideTurn(0,this.layers-1,t),this.wideTurn(0,this.layers-1,t);break;case"R":this.turn(0,0,t);break;case"R'":this.turn(0,0,!t);break;case"R2":case"R2'":this.turn(0,0,t),this.turn(0,0,t);break;case"r":this.wideTurn(0,0,t);break;case"r'":this.wideTurn(0,0,!t);break;case"r2":case"r2'":this.wideTurn(0,0,t),this.wideTurn(0,0,t);break;case"M":this.turn(0,1,!t);break;case"M'":this.turn(0,1,t);break;case"M2":case"M2'":this.sliceTurn(0,t),this.sliceTurn(0,t);break;case"E":this.sliceTurn(1,!t);break;case"E'":this.sliceTurn(1,t);break;case"E2":case"E2'":this.sliceTurn(1,t),this.sliceTurn(1,t);break;case"S":this.sliceTurn(2,t);break;case"S'":this.sliceTurn(2,!t);break;case"S2":case"S2'":this.sliceTurn(2,t);default:throw new Error("Invalid turn in algorithm: "+e)}}execAlg(e){if(!e)return;let t=e.split(" ");for(let r=0;r<t.length;r++)this.stepAlgorithm(t[r],!0);this.animationQueue=[]}execAlgReverse(e){if(!e)return;let t=e.split(" ");for(let r=t.length-1;r>=0;r--)this.stepAlgorithm(t[r],!1);this.animationQueue=[]}stickerIsOnFace(e,t){return t*S(this.layers)<=e&&e<(t+1)*S(this.layers)}center(e){return e*S(this.layers)+Math.floor(S(this.layers)/2)}corners(e,t){const r=e*S(this.layers);return{topLeft:r+(this.layers+1)*t,topRight:r+(this.layers-1)*(this.layers-t),bottomRight:r+(this.layers+1)*(this.layers-t-1),bottomLeft:r+(this.layers-1)*(t+1)}}edges(e,t,r){const i=this.corners(e,t);let s=this.layers-2*(t+1);return{top:i.topLeft+this.layers*(r+1),left:i.topLeft+(s-r),right:i.topRight+r+1,bottom:i.bottomLeft+this.layers*(s-r)}}}function Nn(n){const e=n.gl,t=n.cube,r=n.perspectiveMatrix;let i=mn(t,1.01,.02),s=mn(t,1,0),o=mn(t,1.5,.02);const a=Array(se(t.layers));for(let c=0;c<se(t.layers);c++){let l={positionBuffer:e.createBuffer(),noGapPositionBuffer:e.createBuffer(),hintPositionBuffer:e.createBuffer(),indexBuffer:e.createBuffer(),cart2d:[],positions:null},u=new Float32Array(12),h=new Float32Array(12),d=new Float32Array(12);for(let y=0;y<12;y++){let m=c*12+y;u[y]=i[m],h[y]=s[m],d[y]=o[m]}e.bindBuffer(e.ARRAY_BUFFER,l.positionBuffer),e.bufferData(e.ARRAY_BUFFER,u,e.STATIC_DRAW),l.positions=u,e.bindBuffer(e.ARRAY_BUFFER,l.noGapPositionBuffer),e.bufferData(e.ARRAY_BUFFER,h,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,l.hintPositionBuffer),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW);const f=Array(16);Dt(f,0,r,[h[0],h[1],h[2],1]),Dt(f,4,r,[h[3],h[4],h[5],1]),Dt(f,8,r,[h[6],h[7],h[8],1]),Dt(f,12,r,[h[9],h[10],h[11],1]),l.cart2d=[f[0]/f[3],f[1]/f[3],f[4]/f[7],f[5]/f[7],f[8]/f[11],f[9]/f[11],f[12]/f[15],f[13]/f[15]];const p=[0,1,2,0,2,3];e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(p),e.STATIC_DRAW),a[c]=l}return a}function Dt(n,e,t,r){Array(4);let i=r[0],s=r[1],o=r[2],a=r[3];n[e+0]=i*t[0]+s*t[4]+o*t[8]+a*t[12],n[e+1]=i*t[1]+s*t[5]+o*t[9]+a*t[13],n[e+2]=i*t[2]+s*t[6]+o*t[10]+a*t[14],n[e+3]=i*t[3]+s*t[7]+o*t[11]+a*t[15]}const cs=12,Su=4,Qe=3;function mn(n,e,t){const r=S(n.layers)*cs,i=Array(6*r);return Tu(i,0*r,n,1,e,t),Au(i,1*r,n,0,e,t),Ru(i,2*r,n,1,-e,t),Cu(i,3*r,n,0,-e,t),Ou(i,4*r,n,2,-e,t),Du(i,5*r,n,2,e,t),i}function Tu(n,e,t,r,i,s){if(lt(t.layers)){let c=Array(S(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=0;h<t.layers;h++){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,i],l++}he(n,e,t,c,r,s);return}let o=Array(S(t.layers)),a=0;for(let c=-q(t.layers);c<=q(t.layers);c++)for(let l=-q(t.layers);l<=q(t.layers);l++)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;he(n,e,t,o,r,s)}function Au(n,e,t,r,i,s){if(lt(t.layers)){let c=Array(S(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){const d=-1+1/t.layers+u*2/t.layers,f=-1+1/t.layers+h*2/t.layers;c[l]=[d,f,i],l++}he(n,e,t,c,r,s);return}let o=Array(S(t.layers)),a=0;for(let c=-q(t.layers);c<=q(t.layers);c++)for(let l=q(t.layers);l>=-q(t.layers);l--)o[a]=[2*c/t.layers,2*l/t.layers,i],a++;he(n,e,t,o,r,s)}function Ru(n,e,t,r,i,s){if(lt(t.layers)){let c=Array(S(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,i],l++}he(n,e,t,c,r,s);return}let o=Array(S(t.layers)),a=0;for(let c=-q(t.layers);c<=q(t.layers);c++)for(let l=q(t.layers);l>=-q(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;he(n,e,t,o,r,s)}function Cu(n,e,t,r,i,s){if(lt(t.layers)){let c=Array(S(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=0;h<t.layers;h++){const d=-1+1/t.layers+u*2/t.layers,f=-1+1/t.layers+h*2/t.layers;c[l]=[d,f,i],l++}he(n,e,t,c,r,s);return}let o=Array(S(t.layers)),a=0;for(let c=-q(t.layers);c<=q(t.layers);c++)for(let l=-q(t.layers);l<=q(t.layers);l++)o[a]=[2*c/t.layers,2*l/t.layers,i],a++;he(n,e,t,o,r,s)}function Ou(n,e,t,r,i,s){if(lt(t.layers)){let c=Array(S(t.layers)),l=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,i],l++}he(n,e,t,c,r,s);return}let o=Array(S(t.layers)),a=0;for(let c=-q(t.layers);c<=q(t.layers);c++)for(let l=q(t.layers);l>=-q(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;he(n,e,t,o,r,s)}function Du(n,e,t,r,i,s){if(lt(t.layers)){let c=Array(S(t.layers)),l=0;for(let u=t.layers-1;u>=0;u--)for(let h=t.layers-1;h>=0;h--){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,i],l++}he(n,e,t,c,r,s);return}let o=Array(S(t.layers)),a=0;for(let c=q(t.layers);c>=-q(t.layers);c--)for(let l=q(t.layers);l>=-q(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;he(n,e,t,o,r,s)}function he(n,e,t,r,i,s){for(let o=0;o<S(t.layers);o++){const a=r[o];Pu(n,e+o*cs,t,a[0],a[1],a[2],i,s)}}function Pu(n,e,t,r,i,s,o,a){const c=1/t.layers-a,l=[[r-c,i-c,s],[r+c,i-c,s],[r+c,i+c,s],[r-c,i+c,s]];for(let u=0;u<Su;u++){const h=l[u];n[e+u*Qe]=h[(o+0)%Qe],n[e+u*Qe+1]=h[(o+1)%Qe],n[e+u*Qe+2]=h[(o+2)%Qe]}}const Mu=100,Lu=15;class Nu{position;_velocity;_acceleration;target;constructor(){this.position=0,this._velocity=200,this._acceleration=0,this.target=0}update(e){const t=-Mu*(this.position-this.target),r=-Lu*this._velocity;this._acceleration=t+r,this._velocity+=this._acceleration*e,this.position+=this._velocity*e}}function Hr(n,e){return n/e*2-1}function Vr(n,e){return 1-n/e*2}function _n(n,e,t,r){return n<t?(r-e)/(t-n):(e-r)/(n-t)}function Ze(n,e,t,r,i,s){return Math.abs(.5*(n*(r-s)+t*(s-e)+i*(e-r)))}function xu(n,e){return n.layers-1-e%n.layers}function yn(n,e){return n.layers-1-Math.floor(e/n.layers)}function Uu(n,e){return e%n.layers}function vn(n,e){return n.layers-1-Math.floor((e-S(n.layers))/n.layers)}class Bu{numOfPointerMoves;xOnDown;yOnDown;xOnMove;yOnMove;stickerOnDown;cart2dOnDown;onPointerDown(e,t,r,i,s){this.numOfPointerMoves=0;const o=Hr(e,r.clientWidth),a=Vr(t,r.clientHeight);this.xOnDown=o,this.yOnDown=a,[this.stickerOnDown,this.cart2dOnDown]=this._coordinatesToSticker(o,a,i,s);function c(y,m,_){return{x:s[y].cart2d[m],y:s[y].cart2d[_]}}if(this.stickerOnDown!==-1)return;const l=c(0,0,1),u=c(i.layers*(i.layers-1),6,7),h=c(i.layers-1,2,3),d=c(S(i.layers)-1,4,5),f=c(i.layers*(i.layers+1)-1,0,1),p=c(S(i.layers)*2-1,2,3);a>l.y&&o>l.x&&o<u.x?i.cubeRotate(0,!0):o<l.x&&a>h.y&&a<l.y?i.cubeRotate(2,!1):o>u.x&&a>d.y&&a<u.y?i.cubeRotate(2,!0):o<f.x&&a>f.y&&a<h.y?i.cubeRotate(1,!0):o>p.x&&a>p.y&&a<d.y?i.cubeRotate(1,!1):a<f.y&&o>f.x&&o<p.x&&i.cubeRotate(0,!1)}onPointerMove(e,t){this.numOfPointerMoves++,this.xOnMove=e,this.yOnMove=t}onPointerUp(e,t,r){if(this.numOfPointerMoves<2)return;let i,s;if(this.stickerOnDown!==-1&&(i=_n(this.cart2dOnDown[0],this.cart2dOnDown[1],this.cart2dOnDown[4],this.cart2dOnDown[5]),s=_n(this.cart2dOnDown[2],this.cart2dOnDown[3],this.cart2dOnDown[6],this.cart2dOnDown[7]),i<0)){const l=i;i=s,s=l}const o=Hr(this.xOnMove,e.clientWidth),a=Vr(this.yOnMove,e.clientHeight),c=_n(o,a,this.xOnDown,this.yOnDown);t.stickerIsOnFace(this.stickerOnDown,0)?o===this.xOnDown?t.turn(0,yn(t,this.stickerOnDown),a>this.yOnDown):c>i?t.turn(0,yn(t,this.stickerOnDown),o>this.xOnDown):c<s?t.turn(0,yn(t,this.stickerOnDown),o<this.xOnDown):t.turn(2,xu(t,this.stickerOnDown),o>this.xOnDown):t.stickerIsOnFace(this.stickerOnDown,1)&&(o===this.xOnDown?t.turn(0,vn(t,this.stickerOnDown),a>this.yOnDown):c>i?t.turn(0,vn(t,this.stickerOnDown),o>this.xOnDown):c<s?t.turn(0,vn(t,this.stickerOnDown),o<this.xOnDown):t.turn(1,Uu(t,this.stickerOnDown),o<this.xOnDown))}_coordinatesToSticker(e,t,r,i){const s=o=>{if(!i[o].cart2d){console.error("cart2d is undefined");return}const a=i[o].cart2d,c=Ze(a[0],a[1],a[2],a[3],a[4],a[5])+Ze(a[0],a[1],a[4],a[5],a[6],a[7]),l=Ze(e,t,a[0],a[1],a[2],a[3])+Ze(e,t,a[2],a[3],a[4],a[5])+Ze(e,t,a[4],a[5],a[6],a[7])+Ze(e,t,a[6],a[7],a[0],a[1]),u=1e-5;if(Math.abs(c-l)<u)return[o,a]};for(let o=0;o<2*S(r.layers);o++){const a=s(o);if(a)return a}return[-1,void 0]}}function Ft(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Fu(n,e,t,r,i){const s=1/Math.tan(e/2);if(n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,i!=null&&i!==1/0){const o=1/(r-i);n[10]=(i+r)*o,n[14]=2*i*r*o}else n[10]=-1,n[14]=-2*r;return n}function Xt(n,e,t,r){let i=r[0],s=r[1],o=r[2],a=1/Math.hypot(i,s,o);i*=a,s*=a,o*=a;let c=Math.sin(t),l=Math.cos(t),u=1-l,h=e[0],d=e[1],f=e[2],p=e[3],y=e[4],m=e[5],_=e[6],L=e[7],R=e[8],k=e[9],H=e[10],O=e[11],W=i*i*u+l,B=s*i*u+o*c,j=o*i*u-s*c,ee=i*s*u-o*c,te=s*s*u+l,x=o*s*u+i*c,A=i*o*u+s*c,J=s*o*u-i*c,ne=o*o*u+l;return n[0]=h*W+y*B+R*j,n[1]=d*W+m*B+k*j,n[2]=f*W+_*B+H*j,n[3]=p*W+L*B+O*j,n[4]=h*ee+y*te+R*x,n[5]=d*ee+m*te+k*x,n[6]=f*ee+_*te+H*x,n[7]=p*ee+L*te+O*x,n[8]=h*A+y*J+R*ne,n[9]=d*A+m*J+k*ne,n[10]=f*A+_*J+H*ne,n[11]=p*A+L*J+O*ne,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function $u(n,e){let t=e[0],r=e[1],i=e[2];return n[12]+=n[0]*t+n[4]*r+n[7]*i,n[13]+=n[1]*t+n[5]*r+n[8]*i,n[14]+=n[2]*t+n[5]*r+n[9]*i,n[15]+=n[3]*t+n[6]*r+n[10]*i,n}function Wr(){let n;return e=>(n||(n=e()),n)}let le,D,ve,xn=[],jr={animateTurns:!0,hintStickers:!0,showBody:!0},zr=Date.now()*.001,Hu=3,Kr=!1;function Vu(){Kr||(Kr=!0,requestAnimationFrame(ls))}function Wu(n,e){D||(le=e,D=le.getContext("webgl"),ve=ju());let t=new ku(D),r=new Nu,i=zu(n),s=new Bu;t.setNumOfLayers(Hu);let o=Nn({gl:D,cube:t,perspectiveMatrix:i}),a={div:n,gl:D,cube:t,spring:r,buffers:o,perspectiveMatrix:i};const c=(p,y)=>{a.dragEnabled&&s.onPointerDown(p,y,a.div,a.cube,a.buffers)},l=(p,y)=>{a.dragEnabled&&s.onPointerMove(p,y)},u=()=>{a.dragEnabled&&s.onPointerUp(a.div,a.cube,a.buffers)},h=p=>{const y=p.target.getBoundingClientRect(),m=p.touches[0].pageX-y.left,_=p.touches[0].pageY-y.top;return{x:m,y:_}},d=()=>{n.addEventListener("pointerdown",p=>c(p.offsetX,p.offsetY)),n.addEventListener("pointermove",p=>l(p.offsetX,p.offsetY)),n.addEventListener("pointerup",p=>u())},f=()=>{n.addEventListener("touchstart",p=>{const{x:y,y:m}=h(p);c(y,m)}),n.addEventListener("touchmove",p=>{const{x:y,y:m}=h(p);l(y,m)}),n.addEventListener("touchend",p=>{u()})};return window.PointerEvent?d():f(),a}function ju(){const t=Ku(D,`
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
    `);return D.useProgram(t),{attribLocations:{vertexPosition:D.getAttribLocation(t,"aVertexPosition"),vertexColor:D.getAttribLocation(t,"aVertexColor")},uniformLocations:{transformMatrix:D.getUniformLocation(t,"uTransformMatrix"),rotateMatrix:D.getUniformLocation(t,"uRotateMatrix")}}}function zu(n){let e=Ft();return Fu(e,50*Math.PI/180,n.clientWidth/n.clientHeight,.1,100),$u(e,[0,0,-5]),Xt(e,e,45*Math.PI/180,[1,0,0]),Xt(e,e,0,[0,-1,0]),e}function bn(n,e,t){t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(e.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexPosition)}function In(n,e,t){t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(e.attribLocations.vertexColor,4,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexColor)}function wn(n){n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)}function Ku(n,e,t){const r=Gr(n,n.VERTEX_SHADER,e),i=Gr(n,n.FRAGMENT_SHADER,t),s=n.createProgram();return n.attachShader(s,r),n.attachShader(s,i),n.linkProgram(s),n.getProgramParameter(s,n.LINK_STATUS)?s:(alert("Unable to initialize the shader program: "+n.getProgramInfoLog(s)),null)}function Gr(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)?r:(alert("An error occurred compiling the shaders: "+n.getShaderInfoLog(r)),n.deleteShader(r),null)}function Gu(){const n=le.clientWidth,e=le.clientHeight,t=le.width!==n||le.height!==e;return t&&(le.width=n,le.height=e),t}function ls(n){n*=.001;const e=n-zr;zr=n,Gu(),D.enable(D.DEPTH_TEST),D.enable(D.SCISSOR_TEST),D.depthFunc(D.LEQUAL),D.clear(D.COLOR_BUFFER_BIT|D.DEPTH_BUFFER_BIT),le.style.transform=`translateY(${window.scrollY}px)`;for(let t=0;t<xn.length;t++){const{cube:r,div:i,spring:s,buffers:o,perspectiveMatrix:a}=xn[t],c=i.getBoundingClientRect();if(c.bottom<0||c.top>le.clientHeight||c.right<0||c.left>le.clientWidth)continue;const l=c.right-c.left,u=c.bottom-c.top,h=c.left,d=le.clientHeight-c.bottom;D.viewport(h,d,l,u),D.scissor(h,d,l,u),r.animationQueue[0]&&(s.target=r.animationQueue.length*90,s.update(e),s.position>=90&&(r.affectedStickers=Array(se(r.layers)).fill(!1),s.position=0,r.animationQueue.shift()));const f=r.animationQueue[0];let p=qu(r),y=Wr(),m=Wr();for(let _=0;_<se(r.layers);_++){let L=o[_];const R=f&&f.stickersToAnimate[_]&&jr.animateTurns?y(()=>Xt(Ft(),a,s.position*Math.PI/180,f.axis)):a;D.uniformMatrix4fv(ve.uniformLocations.transformMatrix,!1,R);const k=f&&f.stickersToAnimate[_]&&jr.animateTurns?m(()=>{const H=Ft();return Xt(H,H,s.position*Math.PI/180,f.axis)}):Ft();D.uniformMatrix4fv(ve.uniformLocations.rotateMatrix,!1,k),D.bindBuffer(D.ELEMENT_ARRAY_BUFFER,L.indexBuffer),bn(L.noGapPositionBuffer,ve,D),In(r.underStickers[_].buffer,ve,D),wn(D),bn(L.positionBuffer,ve,D),In(p[_].buffer,ve,D),wn(D),bn(L.hintPositionBuffer,ve,D),In(p[_].buffer,ve,D),wn(D)}}requestAnimationFrame(ls)}function qu(n){return n.animationQueue[0]?n.animationQueue[0].stickers:n.stickers}function Ju(n){let e,t,r,i,s,o,a;return{c(){e=v("div"),t=v("canvas"),r=w(),i=v("div"),T(i,"class","glDiv"),T(e,"class",s=n[3].class)},m(c,l){$(c,e,l),g(e,t),n[6](t),g(e,r),g(e,i),n[7](i),o||(a=oe(window,"keydown",n[5]),o=!0)},p(c,[l]){l&8&&s!==(s=c[3].class)&&T(e,"class",s)},i:U,o:U,d(c){c&&F(e),n[6](null),n[7](null),o=!1,a()}}}function Yu(n,e,t){let{onSceneInitialized:r}=e,i,s,o;ys(()=>{t(2,o=Wu(s,i)),xn.push(o),o.cube.solve(),t(2,o.dragEnabled=!0,o),Vu(),r(o)});const a=u=>{o&&o.cube.matchKeyToTurn(u)};function c(u){it[u?"unshift":"push"](()=>{i=u,t(0,i)})}function l(u){it[u?"unshift":"push"](()=>{s=u,t(1,s)})}return n.$$set=u=>{t(3,e=de(de({},e),ye(u))),"onSceneInitialized"in u&&t(4,r=u.onSceneInitialized)},e=ye(e),[i,s,o,e,r,a,c,l]}class Xu extends ge{constructor(e){super(),pe(this,e,Yu,Ju,fe,{onSceneInitialized:4})}}const Qu={CMLL:{cube:"3x3",inactive:[1,3,4,5,7,12,13,14,21,22,23,30,31,32,39,48]},F2L:{cube:"3x3",inactive:[0,1,2,3,5,6,7,8,9,12,15,29,32,35,36,39,42,45,48,51]},OLL:{cube:"3x3",inactive:[9,12,15,29,32,35,36,39,42,45,48,51]},PLL:{cube:"3x3",inactive:[]},ZBLL:{cube:"3x3",inactive:[]},"2x2 CLL":{cube:"2x2",inactive:[]},"2x2 EG1":{cube:"2x2",inactive:[]},"2x2 EG2":{cube:"2x2",inactive:[]}};async function Zu(n,e,t,r,i,s,o,a){return sn("/createAlgSet",{uid:n,set:e,trainingAlgs:t,cube:r,inactiveStickers:i,moves:s,disregard:o,onlyOrientation:a})}async function eh(n,e){return sn("/getAlgSet",{uid:n,set:e})}async function th(n,e){return sn("/updateAlgSet",{id:n,trainingAlgs:e})}function nh(n){var e,t,r;if(n.alg===null||n.alg===void 0)throw new Error("alg must be defined");if(n.moves===null||n.moves===void 0)throw new Error("moves must be defined");return{alg:n.alg,moves:n.moves,onlyOrientation:(e=n.onlyOrientation)!==null&&e!==void 0?e:[],disregard:(t=n.disregard)!==null&&t!==void 0?t:[],maxSolutions:(r=n.maxSolutions)!==null&&r!==void 0?r:10}}function rh(n){var e=nh(n);return new Promise(function(t){var r=new Worker(new URL("/assets/worker-f983b957.js",self.location));r.onmessage=function(i){var s=i.data,o=s.split(",");t(o),r.terminate()},r.onerror=function(i){console.log("Caught error"),console.error(i),r.terminate()},r.postMessage(e)})}let G={scene:null,algSet:null,preRotation:"",preAUF:"",postAUF:""};function Un(n){return us(n,G.preAUF,G.postAUF)}function ih(n){const e=Yr(G.preAUF),t=Yr(G.postAUF);return us(n,t,e)}function us(n,e,t){e&&(n=`${e} ${n}`),t&&(n=`${n} ${t}`);let r=n.split(" ");const i=qr(r[0],r[1]),s=qr(r[r.length-2],r[r.length-1]);return r=r.slice(2,-2),r=i.concat(r).concat(s),r.join(" ")}function qr(n,e){if(n[0]!=="U"||e[0]!=="U")return[n,e];const t=(Jr(n)+Jr(e))%4;return t===0?[]:[sh(t)]}function Jr(n){return n.endsWith("'")?3:n.endsWith("2")?2:1}function sh(n){return["","U","U2","U'"][n]}function Yr(n){return n===""?"":n.endsWith("'")?n.slice(0,-1):n.endsWith("2")?n:`${n}'`}function Xr(){return["","U","U2","U'"][je(4)]}function oh(n){G.scene=n}function hs(){const n=G.algSet.trainingAlgs;return n&&n.length>0?n[0].Alg:(console.log("No algs to load",n),"")}async function dt(n,e){const t=G.scene;if(!t){console.error("Scene not set. Have you called setScene()?");return}(!G.algSet||G.algSet.name!==e)&&(G.algSet=await eh(n,e),G.algSet.cube=="2x2"?(t.cube.setNumOfLayers(2),t.buffers=Nn(t),t.cube.solve()):G.algSet.cube=="3x3"&&(t.cube.setNumOfLayers(3),t.buffers=Nn(t),t.cube.solve()));let r=hs();G.preAUF=Xr(),G.postAUF=Xr(),t.cube.solve(),t.cube.execAlg(G.preRotation),G.algSet.inactive.forEach(s=>{Bt(t.cube.stickers[s],lu)});let i=Un(r);return t.cube.execAlgReverse(i),r}async function Qr(n,e,t){if(n?yu(G.algSet.trainingAlgs):vu(G.algSet.trainingAlgs),G.algSet.id===-1){const{trainingAlgs:r,cube:i,inactive:s,moves:o,disregard:a,onlyOrientation:c}=G.algSet,l=await Zu(e,t,r,i,s,o,a,c);G.algSet.id=l.id}else{const{id:r,trainingAlgs:i}=G.algSet;th(r,i)}return uh(),dt(e,t)}function ah(){return Object.keys(Qu)}async function ch(){let n=hs();const e=await rh({alg:n,moves:"U U' F F' R R'",disregard:G.algSet.disregard,onlyOrientation:G.algSet.onlyOrientation});return mu(e)}function lh(n,e){return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate()}function En(){const n=Ln.get(),e=new Date;return lh(n.date,e)?n.count:0}function uh(){const n=Ln.get();n.count++,Ln.set(n)}function hh(n){let e,t;return e=new Be({props:{name:"x",style:"padding: 4px;"}}),e.$on("click",function(){Bn(n[0])&&n[0].apply(this,arguments)}),{c(){Z(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p(r,i){n=r},i(r){t||(M(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function dh(n){let e,t,r,i,s,o,a,c;return s=new gt({props:{hovBackground:"var(--gray-500)",borderRadius:"4px",$$slots:{default:[hh]},$$scope:{ctx:n}}}),{c(){e=v("div"),t=v("div"),r=v("h5"),r.textContent="Menu",i=w(),Z(s.$$.fragment),o=w(),a=v("div"),a.innerHTML=`<div style="height: 8px;"></div> 
        <a href="learn.html"><button style="width: 100%;">Learn</button></a> 
        <div style="height: 8px;"></div> 
        <a href="play.html"><button style="width: 100%;">Play</button></a> 
        <div style="height: 8px;"></div> 
        <a href="train.html"><button style="width: 100%;">Train</button></a> 
        <div style="height: 8px;"></div> 
        <a href="cuble.html"><button style="width: 100%;">Cuble</button></a>`,E(r,"color","white"),E(r,"font-size","1.2rem"),T(t,"class","row"),E(t,"justify-content","space-between"),E(t,"padding","8px"),E(a,"display","flex"),E(a,"flex-direction","column"),E(a,"padding","0 8px"),T(e,"style",n[1])},m(l,u){$(l,e,u),g(e,t),g(t,r),g(t,i),Y(s,t,null),g(e,o),g(e,a),c=!0},p(l,[u]){const h={};u&9&&(h.$$scope={dirty:u,ctx:l}),s.$set(h),(!c||u&2)&&T(e,"style",l[1])},i(l){c||(M(s.$$.fragment,l),c=!0)},o(l){N(s.$$.fragment,l),c=!1},d(l){l&&F(e),X(s)}}}function fh(n,e,t){let r,{open:i}=e,{onClose:s=()=>{}}=e;return n.$$set=o=>{"open"in o&&t(2,i=o.open),"onClose"in o&&t(0,s=o.onClose)},n.$$.update=()=>{n.$$.dirty&4&&t(1,r=`position: fixed; top: 0; left: 0; width: 300px; height: 100%; background-color: var(--gray-700); z-index: 10; ${i?"transform: translateX(0); transition: transform 0.3s ease-in-out":"transform: translateX(-100%); transition: transform 0.3s ease-in-out"}`)},[s,r,i]}class ph extends ge{constructor(e){super(),pe(this,e,fh,dh,fe,{open:2,onClose:0})}}function Zr(n,e,t){const r=n.slice();return r[37]=e[t],r}function ei(n){let e,t,r,i,s;return t=new Be({props:{class:"icon",style:"padding: 8px;",name:"profile"}}),t.$on("click",n[16]),i=new Be({props:{class:"icon",style:"padding: 8px;",name:"settings"}}),i.$on("click",n[17]),{c(){e=v("div"),Z(t.$$.fragment),r=w(),Z(i.$$.fragment),T(e,"id","iconContainer"),T(e,"class","row")},m(o,a){$(o,e,a),Y(t,e,null),g(e,r),Y(i,e,null),s=!0},p:U,i(o){s||(M(t.$$.fragment,o),M(i.$$.fragment,o),s=!0)},o(o){N(t.$$.fragment,o),N(i.$$.fragment,o),s=!1},d(o){o&&F(e),X(t),X(i)}}}function gh(n){let e,t,r,i,s,o,a,c,l,u,h,d,f,p,y,m,_,L,R,k,H,O,W,B,j,ee,te,x,A,J,ne,ke,Je;i=new Xu({props:{onSceneInitialized:n[24]}}),l=new gt({props:{background:"var(--gray-500)",hovBackground:"var(--gray-700)",borderRadius:"8px",$$slots:{default:[_h]},$$scope:{ctx:n}}}),h=new gt({props:{background:"var(--red-500)",hovBackground:"var(--red-700)",borderRadius:"8px",$$slots:{default:[yh]},$$scope:{ctx:n}}}),f=new gt({props:{background:"var(--green-500)",hovBackground:"var(--green-700)",borderRadius:"8px",$$slots:{default:[vh]},$$scope:{ctx:n}}});function Fe(b,Q){return b[4]?Ih:bh}let C=Fe(n),K=C(n),re=n[8]&&ti(n);const Ye=[Eh,wh],ce=[];function P(b,Q){return b[5]===0?0:b[5]===1?1:-1}return~(x=P(n))&&(A=ce[x]=Ye[x](n)),{c(){e=v("div"),t=v("div"),r=w(),Z(i.$$.fragment),s=w(),o=v("div"),a=w(),c=v("div"),Z(l.$$.fragment),u=w(),Z(h.$$.fragment),d=w(),Z(f.$$.fragment),p=w(),y=v("div"),m=w(),_=v("button"),K.c(),L=w(),re&&re.c(),R=w(),k=v("div"),H=w(),O=v("p"),W=ae("cases today: "),B=ae(n[10]),j=w(),ee=v("div"),te=w(),A&&A.c(),J=ps(),E(t,"height","16px"),E(o,"height","16px"),T(c,"class","row"),E(c,"gap","16px"),E(y,"height","16px"),T(_,"class","btn-primary"),E(k,"flex-grow","1"),E(ee,"height","16px"),T(e,"class","col"),E(e,"width","100%"),E(e,"height","100%")},m(b,Q){$(b,e,Q),g(e,t),g(e,r),Y(i,e,null),g(e,s),g(e,o),g(e,a),g(e,c),Y(l,c,null),g(c,u),Y(h,c,null),g(c,d),Y(f,c,null),g(e,p),g(e,y),g(e,m),g(e,_),K.m(_,null),g(e,L),re&&re.m(e,null),g(e,R),g(e,k),g(e,H),g(e,O),g(O,W),g(O,B),g(e,j),g(e,ee),$(b,te,Q),~x&&ce[x].m(b,Q),$(b,J,Q),ne=!0,ke||(Je=oe(_,"click",n[28]),ke=!0)},p(b,Q){const er={};Q[0]&193&&(er.onSceneInitialized=b[24]),i.$set(er);const tr={};Q[0]&209|Q[1]&512&&(tr.$$scope={dirty:Q,ctx:b}),l.$set(tr);const nr={};Q[0]&1233|Q[1]&512&&(nr.$$scope={dirty:Q,ctx:b}),h.$set(nr);const rr={};Q[0]&1233|Q[1]&512&&(rr.$$scope={dirty:Q,ctx:b}),f.$set(rr),C===(C=Fe(b))&&K?K.p(b,Q):(K.d(1),K=C(b),K&&(K.c(),K.m(_,null))),b[8]?re?re.p(b,Q):(re=ti(b),re.c(),re.m(e,R)):re&&(re.d(1),re=null),(!ne||Q[0]&1024)&&wt(B,b[10]);let on=x;x=P(b),x===on?~x&&ce[x].p(b,Q):(A&&(Wt(),N(ce[on],1,1,()=>{ce[on]=null}),jt()),~x?(A=ce[x],A?A.p(b,Q):(A=ce[x]=Ye[x](b),A.c()),M(A,1),A.m(J.parentNode,J)):A=null)},i(b){ne||(M(i.$$.fragment,b),M(l.$$.fragment,b),M(h.$$.fragment,b),M(f.$$.fragment,b),M(A),ne=!0)},o(b){N(i.$$.fragment,b),N(l.$$.fragment,b),N(h.$$.fragment,b),N(f.$$.fragment,b),N(A),ne=!1},d(b){b&&F(e),X(i),X(l),X(h),X(f),K.d(),re&&re.d(),b&&F(te),~x&&ce[x].d(b),b&&F(J),ke=!1,Je()}}}function mh(n){let e,t,r,i,s,o,a,c,l,u,h,d,f,p,y,m,_,L;const R=[Ah,Th],k=[];function H(O,W){return O[0]?0:1}return m=H(n),_=k[m]=R[m](n),{c(){e=v("div"),t=v("div"),r=w(),i=v("h1"),i.textContent="Algorithm Trainer",s=w(),o=v("div"),a=w(),c=v("p"),c.textContent="Learn algorithms at lightning speed",l=w(),u=v("div"),h=w(),d=v("div"),d.innerHTML=`<h2>1. Memorize faster</h2> 
          <div style="height: 8px"></div> 
          <ul><li>Get an algorithm right, and you&#39;ll see it less often.</li> 
            <div style="height: 8px"></div> 
            <li>Get an algorithm wrong, and you&#39;ll see it more often.</li></ul> 
          <div style="height: 16px"></div> 
          <h2>2. Virtual Cube</h2> 
          <div style="height: 8px"></div> 
          <ul><li>Never scramble a cube again</li> 
            <div style="height: 8px"></div> 
            <li>Practice anywhere, anytime</li></ul>`,f=w(),p=v("div"),y=w(),_.c(),E(t,"height","8px"),E(o,"height","16px"),T(c,"class","text-gradient"),E(c,"font-weight","bold"),E(c,"font-size","1.2rem"),E(c,"background-image","linear-gradient(90deg, var(--blue-400), var(--purple-400))"),E(u,"height","16px"),E(p,"height","24px"),T(e,"class","col w-full h-full")},m(O,W){$(O,e,W),g(e,t),g(e,r),g(e,i),g(e,s),g(e,o),g(e,a),g(e,c),g(e,l),g(e,u),g(e,h),g(e,d),g(e,f),g(e,p),g(e,y),k[m].m(e,null),L=!0},p(O,W){let B=m;m=H(O),m===B?k[m].p(O,W):(Wt(),N(k[B],1,1,()=>{k[B]=null}),jt(),_=k[m],_?_.p(O,W):(_=k[m]=R[m](O),_.c()),M(_,1),_.m(e,null))},i(O){L||(M(_),L=!0)},o(O){N(_),L=!1},d(O){O&&F(e),k[m].d()}}}function _h(n){let e,t;return e=new Be({props:{name:"retry",style:`
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);`}}),e.$on("click",n[25]),{c(){Z(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p:U,i(r){t||(M(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function yh(n){let e,t;return e=new Be({props:{name:"sad",style:`
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);`}}),e.$on("click",n[26]),{c(){Z(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p:U,i(r){t||(M(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function vh(n){let e,t;return e=new Be({props:{name:"happy",style:`
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);`}}),e.$on("click",n[27]),{c(){Z(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p:U,i(r){t||(M(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function bh(n){let e;return{c(){e=ae("show solution")},m(t,r){$(t,e,r)},p:U,d(t){t&&F(e)}}}function Ih(n){let e,t=Un(n[7])+"",r;return{c(){e=ae("solution: "),r=ae(t)},m(i,s){$(i,e,s),$(i,r,s)},p(i,s){s[0]&128&&t!==(t=Un(i[7])+"")&&wt(r,t)},d(i){i&&F(e),i&&F(r)}}}function ti(n){let e,t,r,i,s;return{c(){e=v("div"),t=w(),r=v("p"),i=ae("scramble: "),s=ae(n[9]),E(e,"height","16px")},m(o,a){$(o,e,a),$(o,t,a),$(o,r,a),g(r,i),g(r,s)},p(o,a){a[0]&512&&wt(s,o[9])},d(o){o&&F(e),o&&F(t),o&&F(r)}}}function wh(n){let e,t;return e=new os({props:{title:"Settings",close:n[35],$$slots:{default:[kh]},$$scope:{ctx:n}}}),{c(){Z(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p(r,i){const s={};i[0]&449|i[1]&512&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(M(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function Eh(n){let e,t;return e=new os({props:{title:"Profile",close:n[30],$$slots:{default:[Sh]},$$scope:{ctx:n}}}),{c(){Z(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p(r,i){const s={};i[0]&9|i[1]&512&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(M(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function ni(n){let e,t=n[37]+"",r;return{c(){e=v("option"),r=ae(t),e.__value=n[37],e.value=e.__value},m(i,s){$(i,e,s),g(e,r)},p:U,d(i){i&&F(e)}}}function kh(n){let e,t,r,i,s,o,a,c,l,u,h,d,f=n[13],p=[];for(let y=0;y<f.length;y+=1)p[y]=ni(Zr(n,f,y));return{c(){e=v("div"),t=v("p"),t.textContent="algorithm set",r=w(),i=v("select");for(let y=0;y<p.length;y+=1)p[y].c();s=w(),o=v("div"),a=w(),c=v("p"),c.textContent="show scramble",l=w(),u=v("input"),n[6]===void 0&&Vt(()=>n[31].call(i)),E(o,"height","16px"),T(u,"type","checkbox"),E(e,"padding","16px")},m(y,m){$(y,e,m),g(e,t),g(e,r),g(e,i);for(let _=0;_<p.length;_+=1)p[_].m(i,null);sr(i,n[6]),g(e,s),g(e,o),g(e,a),g(e,c),g(e,l),g(e,u),u.checked=n[8],h||(d=[oe(i,"change",n[31]),oe(i,"change",n[32]),oe(u,"change",n[33]),oe(u,"change",n[34])],h=!0)},p(y,m){if(m[0]&8192){f=y[13];let _;for(_=0;_<f.length;_+=1){const L=Zr(y,f,_);p[_]?p[_].p(L,m):(p[_]=ni(L),p[_].c(),p[_].m(i,null))}for(;_<p.length;_+=1)p[_].d(1);p.length=f.length}m[0]&8256&&sr(i,y[6]),m[0]&256&&(u.checked=y[8])},d(y){y&&F(e),fs(p,y),h=!1,st(d)}}}function Sh(n){let e,t,r,i=n[0].email+"",s,o,a,c,l;return{c(){e=v("div"),t=v("p"),r=ae("signed in as "),s=ae(i),o=w(),a=v("button"),a.textContent="Sign Out",T(a,"class","btn-primary"),E(e,"padding","12px")},m(u,h){$(u,e,h),g(e,t),g(t,r),g(t,s),g(e,o),g(e,a),c||(l=oe(a,"click",n[29]),c=!0)},p(u,h){h[0]&1&&i!==(i=u[0].email+"")&&wt(s,i)},d(u){u&&F(e),c=!1,l()}}}function Th(n){let e,t,r,i,s,o,a,c,l,u,h,d,f,p,y,m,_,L,R,k,H,O,W,B,j,ee,te,x,A,J;t=new ql({props:{callback:n[19]}});function ne(C){n[20](C)}let ke={class:"mt-4"};n[1]!==void 0&&(ke.value=n[1]),p=new Xl({props:ke}),it.push(()=>ar(p,"value",ne));function Je(C){n[21](C)}let Fe={class:"mt-4"};return n[2]!==void 0&&(Fe.value=n[2]),R=new eu({props:Fe}),it.push(()=>ar(R,"value",Je)),j=new Vl({props:{email:n[1],password:n[2],callback:n[22]}}),A=new zl({props:{email:n[1],password:n[2],callback:n[23]}}),{c(){e=v("div"),Z(t.$$.fragment),r=w(),i=v("div"),s=w(),o=v("div"),a=w(),c=v("div"),l=w(),u=v("p"),u.textContent="Or use email and password",h=w(),d=v("div"),f=w(),Z(p.$$.fragment),m=w(),_=v("div"),L=w(),Z(R.$$.fragment),H=w(),O=v("div"),W=w(),B=v("div"),Z(j.$$.fragment),ee=w(),te=v("div"),x=w(),Z(A.$$.fragment),E(i,"height","16px"),E(o,"width","100%"),E(o,"height","2px"),E(o,"background-color","var(--gray-600)"),E(c,"height","16px"),E(d,"height","12px"),E(_,"height","16px"),E(O,"height","32px"),E(te,"width","16px"),T(B,"class","row"),T(e,"class","col"),E(e,"border-radius","16px"),E(e,"padding","16px"),E(e,"box-shadow","0 0 4px lightgray")},m(C,K){$(C,e,K),Y(t,e,null),g(e,r),g(e,i),g(e,s),g(e,o),g(e,a),g(e,c),g(e,l),g(e,u),g(e,h),g(e,d),g(e,f),Y(p,e,null),g(e,m),g(e,_),g(e,L),Y(R,e,null),g(e,H),g(e,O),g(e,W),g(e,B),Y(j,B,null),g(B,ee),g(B,te),g(B,x),Y(A,B,null),J=!0},p(C,K){const re={};K[0]&1&&(re.callback=C[19]),t.$set(re);const Ye={};!y&&K[0]&2&&(y=!0,Ye.value=C[1],or(()=>y=!1)),p.$set(Ye);const ce={};!k&&K[0]&4&&(k=!0,ce.value=C[2],or(()=>k=!1)),R.$set(ce);const P={};K[0]&2&&(P.email=C[1]),K[0]&4&&(P.password=C[2]),K[0]&1&&(P.callback=C[22]),j.$set(P);const b={};K[0]&2&&(b.email=C[1]),K[0]&4&&(b.password=C[2]),K[0]&1&&(b.callback=C[23]),A.$set(b)},i(C){J||(M(t.$$.fragment,C),M(p.$$.fragment,C),M(R.$$.fragment,C),M(j.$$.fragment,C),M(A.$$.fragment,C),J=!0)},o(C){N(t.$$.fragment,C),N(p.$$.fragment,C),N(R.$$.fragment,C),N(j.$$.fragment,C),N(A.$$.fragment,C),J=!1},d(C){C&&F(e),X(t),X(p),X(R),X(j),X(A)}}}function Ah(n){let e,t,r;return{c(){e=v("button"),e.textContent="Start Training"},m(i,s){$(i,e,s),t||(r=oe(e,"click",n[18]),t=!0)},p:U,i:U,o:U,d(i){i&&F(e),t=!1,r()}}}function Rh(n){let e,t,r,i,s,o,a,c,l,u,h;r=new Be({props:{class:"icon",style:"padding: 8px;",name:"menu"}}),r.$on("click",n[15]);let d=n[3]==="train"&&ei(n);const f=[mh,gh],p=[];function y(m,_){return m[3]==="landing"?0:m[3]==="train"?1:-1}return~(a=y(n))&&(c=p[a]=f[a](n)),u=new ph({props:{open:n[11],onClose:n[36]}}),{c(){e=v("main"),t=v("nav"),Z(r.$$.fragment),i=w(),d&&d.c(),s=w(),o=v("div"),c&&c.c(),l=w(),Z(u.$$.fragment),T(t,"class","navbar"),E(t,"justify-content","space-between"),T(o,"class","row"),E(o,"justify-content","center"),E(o,"align-items","start"),E(o,"width","100%"),E(o,"height","100%"),E(o,"position","relative"),T(e,"class","col"),E(e,"width","100%"),E(e,"height","100%")},m(m,_){$(m,e,_),g(e,t),Y(r,t,null),g(t,i),d&&d.m(t,null),g(e,s),g(e,o),~a&&p[a].m(o,null),g(e,l),Y(u,e,null),h=!0},p(m,_){m[3]==="train"?d?(d.p(m,_),_[0]&8&&M(d,1)):(d=ei(m),d.c(),M(d,1),d.m(t,null)):d&&(Wt(),N(d,1,1,()=>{d=null}),jt());let L=a;a=y(m),a===L?~a&&p[a].p(m,_):(c&&(Wt(),N(p[L],1,1,()=>{p[L]=null}),jt()),~a?(c=p[a],c?c.p(m,_):(c=p[a]=f[a](m),c.c()),M(c,1),c.m(o,null)):c=null);const R={};_[0]&2048&&(R.open=m[11]),_[0]&2048&&(R.onClose=m[36]),u.$set(R)},i(m){h||(M(r.$$.fragment,m),M(d),M(c),M(u.$$.fragment,m),h=!0)},o(m){N(r.$$.fragment,m),N(d),N(c),N(u.$$.fragment,m),h=!1},d(m){m&&F(e),X(r),d&&d.d(),~a&&p[a].d(),X(u)}}}function Ch(n,e,t){let r=Nl(),i="",s="",o="landing",a=!1,c=-1;function l(P){c===P?t(5,c=-1):t(5,c=P)}const u=ah();let h,d;h&&dt(r.uid,h).then(P=>{t(7,d=P)});let f=Cl(),p="loading...";function y(){f&&(t(9,p="loading..."),ch().then(P=>{t(9,p=ih(P))}))}let m=En(),_=!1;const L=()=>t(11,_=!0),R=()=>l(0),k=()=>l(1),H=()=>t(3,o="train"),O=P=>t(0,r=P);function W(P){i=P,t(1,i)}function B(P){s=P,t(2,s)}const j=P=>t(0,r=P),ee=P=>t(0,r=P),te=P=>{oh(P),t(6,h=Al()),h||t(6,h=u[0]),dt(r.uid,h).then(b=>{t(7,d=b),y()})},x=()=>{dt(r.uid,h).then(P=>{t(7,d=P),t(4,a=!1)})},A=()=>{Qr(!1,r.uid,h).then(P=>{t(7,d=P),t(4,a=!1),t(10,m=En()),y()})},J=()=>{Qr(!0,r.uid,h).then(P=>{t(7,d=P),t(4,a=!1),t(10,m=En()),y()})},ne=()=>t(4,a=!a),ke=()=>{Fl(),t(3,o="landing"),t(0,r=null)},Je=()=>l(0);function Fe(){h=ms(this),t(6,h),t(13,u)}const C=()=>{dt(r.uid,h).then(P=>{t(7,d=P),y()}),Rl(h)};function K(){f=this.checked,t(8,f)}return[r,i,s,o,a,c,h,d,f,p,m,_,l,u,y,L,R,k,H,O,W,B,j,ee,te,x,A,J,ne,ke,Je,Fe,C,K,()=>{y(),Ol(f)},()=>l(1),()=>t(11,_=!1)]}class Oh extends ge{constructor(e){super(),pe(this,e,Ch,Rh,fe,{},null,[-1,-1])}}new Oh({target:document.getElementById("app")});
