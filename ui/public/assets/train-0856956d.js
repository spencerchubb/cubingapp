(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function F(){}function de(n,e){for(const t in e)n[t]=e[t];return n}function yi(n){return n()}function lr(){return Object.create(null)}function ot(n){n.forEach(yi)}function zn(n){return typeof n=="function"}function fe(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Ss(n){return Object.keys(n).length===0}function vi(n,e,t,r){if(n){const i=bi(n,e,t,r);return n[0](i)}}function bi(n,e,t,r){return n[1]&&r?de(t.ctx.slice(),n[1](r(e))):t.ctx}function wi(n,e,t,r){if(n[2]&&r){const i=n[2](r(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function Ii(n,e,t,r,i,s){if(i){const o=bi(e,t,r,s);n.p(o,i)}}function Ei(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function ye(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function jt(n){return n??""}function d(n,e){n.appendChild(e)}function V(n,e,t){n.insertBefore(e,t||null)}function $(n){n.parentNode&&n.parentNode.removeChild(n)}function On(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function _(n){return document.createElement(n)}function ie(n){return document.createTextNode(n)}function E(){return ie(" ")}function Ts(){return ie("")}function se(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function O(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function As(n){return Array.from(n.childNodes)}function kt(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function zt(n,e){n.value=e??""}function T(n,e,t,r){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}function Mt(n,e){for(let t=0;t<n.options.length;t+=1){const r=n.options[t];if(r.__value===e){r.selected=!0;return}}n.selectedIndex=-1}function cr(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}let _t;function ft(n){_t=n}function Rs(){if(!_t)throw new Error("Function called outside component initialization");return _t}function Cs(n){Rs().$$.on_mount.push(n)}function Os(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const tt=[],st=[],xt=[],Dn=[],Ds=Promise.resolve();let Pn=!1;function Ps(){Pn||(Pn=!0,Ds.then(ki))}function yt(n){xt.push(n)}function ur(n){Dn.push(n)}const fn=new Set;let Qe=0;function ki(){if(Qe!==0)return;const n=_t;do{try{for(;Qe<tt.length;){const e=tt[Qe];Qe++,ft(e),Ms(e.$$)}}catch(e){throw tt.length=0,Qe=0,e}for(ft(null),tt.length=0,Qe=0;st.length;)st.pop()();for(let e=0;e<xt.length;e+=1){const t=xt[e];fn.has(t)||(fn.add(t),t())}xt.length=0}while(tt.length);for(;Dn.length;)Dn.pop()();Pn=!1,fn.clear(),ft(n)}function Ms(n){if(n.fragment!==null){n.update(),ot(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(yt)}}const Bt=new Set;let We;function Kt(){We={r:0,c:[],p:We}}function Gt(){We.r||ot(We.c),We=We.p}function L(n,e){n&&n.i&&(Bt.delete(n),n.i(e))}function B(n,e,t,r){if(n&&n.o){if(Bt.has(n))return;Bt.add(n),We.c.push(()=>{Bt.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function hr(n,e,t){const r=n.$$.props[e];r!==void 0&&(n.$$.bound[r]=t,t(n.$$.ctx[r]))}function X(n){n&&n.c()}function q(n,e,t,r){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),r||yt(()=>{const o=n.$$.on_mount.map(yi).filter(zn);n.$$.on_destroy?n.$$.on_destroy.push(...o):ot(o),n.$$.on_mount=[]}),s.forEach(yt)}function J(n,e){const t=n.$$;t.fragment!==null&&(ot(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ls(n,e){n.$$.dirty[0]===-1&&(tt.push(n),Ps(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function pe(n,e,t,r,i,s,o,a=[-1]){const l=_t;ft(n);const c=n.$$={fragment:null,ctx:[],props:s,update:F,not_equal:i,bound:lr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:lr(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,f,...p)=>{const g=p.length?p[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=g)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](g),u&&Ls(n,h)),f}):[],c.update(),u=!0,ot(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const h=As(e.target);c.fragment&&c.fragment.l(h),h.forEach($)}else c.fragment&&c.fragment.c();e.intro&&L(n.$$.fragment),q(n,e.target,e.anchor,e.customElement),ki()}ft(l)}class ge{$destroy(){J(this,1),this.$destroy=F}$on(e,t){if(!zn(t))return F;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Ss(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
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
 */const Si=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ns=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ti={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(t[u],t[h],t[f],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Si(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ns(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},xs=function(n){const e=Si(n);return Ti.encodeByteArray(e,!0)},Ai=function(n){return xs(n).replace(/\./g,"")},Bs=function(n){try{return Ti.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Us(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fs=()=>Us().__FIREBASE_DEFAULTS__,$s=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hs=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bs(n[1]);return e&&JSON.parse(e)},Vs=()=>{try{return Fs()||$s()||Hs()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ws=()=>{var n;return(n=Vs())===null||n===void 0?void 0:n.config};/**
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
 */class js{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}function zs(){try{return typeof indexedDB=="object"}catch{return!1}}function Ks(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Gs="FirebaseError";let Kn=class Ri extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Gs,Object.setPrototypeOf(this,Ri.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}},Ci=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qs(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kn(i,a,r)}};function qs(n,e){return n.replace(Js,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Js=/\{\$([^}]+)}/g;function Mn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(dr(s)&&dr(o)){if(!Mn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function dr(n){return n!==null&&typeof n=="object"}let qt=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Ve="[DEFAULT]";/**
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
 */class Ys{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new js;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qs(e))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ve){return this.instances.has(e)}getOptions(e=Ve){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xs(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ve){return this.component?this.component.multipleInstances?e:Ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xs(n){return n===Ve?void 0:n}function Qs(n){return n.instantiationMode==="EAGER"}/**
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
 */class Zs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ys(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const eo={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},to=G.INFO,no={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},ro=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=no[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let io=class{constructor(e){this.name=e,this._logLevel=to,this._logHandler=ro,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}};const so=(n,e)=>e.some(t=>n instanceof t);let fr,pr;function oo(){return fr||(fr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ao(){return pr||(pr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oi=new WeakMap,Ln=new WeakMap,Di=new WeakMap,pn=new WeakMap,Gn=new WeakMap;function lo(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ue(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Oi.set(t,n)}).catch(()=>{}),Gn.set(e,n),e}function co(n){if(Ln.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ln.set(n,e)}let Nn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ln.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Di.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ue(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function uo(n){Nn=n(Nn)}function ho(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(gn(this),e,...t);return Di.set(r,e.sort?e.sort():[e]),Ue(r)}:ao().includes(n)?function(...e){return n.apply(gn(this),e),Ue(Oi.get(this))}:function(...e){return Ue(n.apply(gn(this),e))}}function fo(n){return typeof n=="function"?ho(n):(n instanceof IDBTransaction&&co(n),so(n,oo())?new Proxy(n,Nn):n)}function Ue(n){if(n instanceof IDBRequest)return lo(n);if(pn.has(n))return pn.get(n);const e=fo(n);return e!==n&&(pn.set(n,e),Gn.set(e,n)),e}const gn=n=>Gn.get(n);function po(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Ue(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ue(o.result),l.oldVersion,l.newVersion,Ue(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const go=["get","getKey","getAll","getAllKeys","count"],mo=["put","add","delete","clear"],mn=new Map;function gr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(mn.get(e))return mn.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=mo.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||go.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return mn.set(e,s),s}uo(n=>({...n,get:(e,t,r)=>gr(e,t)||n.get(e,t,r),has:(e,t)=>!!gr(e,t)||n.has(e,t)}));/**
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
 */class _o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yo(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function yo(n){const e=n.getComponent();return e?.type==="VERSION"}const xn="@firebase/app",mr="0.9.1";/**
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
 */const Ge=new io("@firebase/app"),vo="@firebase/app-compat",bo="@firebase/analytics-compat",wo="@firebase/analytics",Io="@firebase/app-check-compat",Eo="@firebase/app-check",ko="@firebase/auth",So="@firebase/auth-compat",To="@firebase/database",Ao="@firebase/database-compat",Ro="@firebase/functions",Co="@firebase/functions-compat",Oo="@firebase/installations",Do="@firebase/installations-compat",Po="@firebase/messaging",Mo="@firebase/messaging-compat",Lo="@firebase/performance",No="@firebase/performance-compat",xo="@firebase/remote-config",Bo="@firebase/remote-config-compat",Uo="@firebase/storage",Fo="@firebase/storage-compat",$o="@firebase/firestore",Ho="@firebase/firestore-compat",Vo="firebase",Wo="9.16.0";/**
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
 */const Bn="[DEFAULT]",jo={[xn]:"fire-core",[vo]:"fire-core-compat",[wo]:"fire-analytics",[bo]:"fire-analytics-compat",[Eo]:"fire-app-check",[Io]:"fire-app-check-compat",[ko]:"fire-auth",[So]:"fire-auth-compat",[To]:"fire-rtdb",[Ao]:"fire-rtdb-compat",[Ro]:"fire-fn",[Co]:"fire-fn-compat",[Oo]:"fire-iid",[Do]:"fire-iid-compat",[Po]:"fire-fcm",[Mo]:"fire-fcm-compat",[Lo]:"fire-perf",[No]:"fire-perf-compat",[xo]:"fire-rc",[Bo]:"fire-rc-compat",[Uo]:"fire-gcs",[Fo]:"fire-gcs-compat",[$o]:"fire-fst",[Ho]:"fire-fst-compat","fire-js":"fire-js",[Vo]:"fire-js-all"};/**
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
 */const Jt=new Map,Un=new Map;function zo(n,e){try{n.container.addComponent(e)}catch(t){Ge.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vt(n){const e=n.name;if(Un.has(e))return Ge.debug(`There were multiple attempts to register component ${e}.`),!1;Un.set(e,n);for(const t of Jt.values())zo(t,n);return!0}function Pi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Ko={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fe=new Ci("app","Firebase",Ko);/**
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
 */class Go{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fe.create("app-deleted",{appName:this._name})}}/**
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
 */const nn=Wo;function Mi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fe.create("bad-app-name",{appName:String(i)});if(t||(t=Ws()),!t)throw Fe.create("no-options");const s=Jt.get(i);if(s){if(Mn(t,s.options)&&Mn(r,s.config))return s;throw Fe.create("duplicate-app",{appName:i})}const o=new Zs(i);for(const l of Un.values())o.addComponent(l);const a=new Go(t,r,o);return Jt.set(i,a),a}function qo(n=Bn){const e=Jt.get(n);if(!e&&n===Bn)return Mi();if(!e)throw Fe.create("no-app",{appName:n});return e}function nt(n,e,t){var r;let i=(r=jo[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ge.warn(a.join(" "));return}vt(new qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Jo="firebase-heartbeat-database",Yo=1,bt="firebase-heartbeat-store";let _n=null;function Li(){return _n||(_n=po(Jo,Yo,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(bt)}}}).catch(n=>{throw Fe.create("idb-open",{originalErrorMessage:n.message})})),_n}async function Xo(n){try{return(await Li()).transaction(bt).objectStore(bt).get(Ni(n))}catch(e){if(e instanceof Kn)Ge.warn(e.message);else{const t=Fe.create("idb-get",{originalErrorMessage:e?.message});Ge.warn(t.message)}}}async function _r(n,e){try{const r=(await Li()).transaction(bt,"readwrite");return await r.objectStore(bt).put(e,Ni(n)),r.done}catch(t){if(t instanceof Kn)Ge.warn(t.message);else{const r=Fe.create("idb-set",{originalErrorMessage:t?.message});Ge.warn(r.message)}}}function Ni(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Qo=1024,Zo=30*24*60*60*1e3;class ea{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new na(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Zo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yr(),{heartbeatsToSend:t,unsentEntries:r}=ta(this._heartbeatsCache.heartbeats),i=Ai(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function yr(){return new Date().toISOString().substring(0,10)}function ta(n,e=Qo){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vr(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),vr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class na{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zs()?Ks().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Xo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _r(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _r(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vr(n){return Ai(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ra(n){vt(new qt("platform-logger",e=>new _o(e),"PRIVATE")),vt(new qt("heartbeat",e=>new ea(e),"PRIVATE")),nt(xn,mr,n),nt(xn,mr,"esm2017"),nt("fire-js","")}ra("");var ia="firebase",sa="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(ia,sa,"app");/**
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
 */const oa=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},aa=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},la={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(t[u],t[h],t[f],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(oa(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):aa(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},xi=function(n){try{return la.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ca(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ua=()=>ca().__FIREBASE_DEFAULTS__,ha=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},da=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xi(n[1]);return e&&JSON.parse(e)},Bi=()=>{try{return ua()||ha()||da()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fa=n=>{var e,t;return(t=(e=Bi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ui=n=>{var e;return(e=Bi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function ga(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ma(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _a(){const n=oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}/**
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
 */const ya="FirebaseError";class at extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ya,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rn.prototype.create)}}class rn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?va(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new at(i,a,r)}}function va(n,e){return n.replace(ba,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ba=/\{\$([^}]+)}/g;function wa(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(br(s)&&br(o)){if(!Fi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function br(n){return n!==null&&typeof n=="object"}/**
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
 */function St(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ht(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function dt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ia(n,e){const t=new Ea(n,e);return t.subscribe.bind(t)}class Ea{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ka(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=yn),i.error===void 0&&(i.error=yn),i.complete===void 0&&(i.complete=yn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ka(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yn(){}/**
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
 */function Ye(n){return n&&n._delegate?n._delegate:n}/**
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
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Sa={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Ta=j.INFO,Aa={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Ra=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Aa[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ca{constructor(e){this.name=e,this._logLevel=Ta,this._logHandler=Ra,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}function qn(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}class wr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}function $i(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oa=$i,Hi=new rn("auth","Firebase",$i());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Ca("@firebase/auth");function Ut(n,...e){Ir.logLevel<=j.ERROR&&Ir.error(`Auth (${nn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n,...e){throw Jn(n,...e)}function me(n,...e){return Jn(n,...e)}function Vi(n,e,t){const r=Object.assign(Object.assign({},Oa()),{[e]:t});return new rn("auth","Firebase",r).create(e,{appName:n.name})}function Da(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ue(n,"argument-error"),Vi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Hi.create(n,...e)}function R(n,e,...t){if(!n)throw Jn(e,...t)}function Ie(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ut(e),new Error(e)}function Se(n,e){n||Ie(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map;function Ee(n){Se(n instanceof Function,"Expected a class definition");let e=Er.get(n);return e?(Se(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Er.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n,e){const t=Pi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Fi(s,e??{}))return i;ue(i,"already-initialized")}return t.initialize({options:e})}function Ma(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Ee);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function La(){return kr()==="http:"||kr()==="https:"}function kr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(La()||ga()||"connection"in navigator)?navigator.onLine:!0}function xa(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Se(t>e,"Short delay should be less than long delay!"),this.isMobile=pa()||ma()}get(){return Na()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n,e){Se(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new Tt(3e4,6e4);function At(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Rt(n,e,t,r,i={}){return ji(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=St(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Wi.fetch()(zi(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ji(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ba),e);try{const i=new Fa(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Lt(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lt(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Lt(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Lt(n,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Vi(n,u,c);ue(n,u)}}catch(i){if(i instanceof at)throw i;ue(n,"network-request-failed")}}async function Ct(n,e,t,r,i={}){const s=await Rt(n,e,t,r,i);return"mfaPendingCredential"in s&&ue(n,"multi-factor-auth-required",{_serverResponse:s}),s}function zi(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Yn(n.config,i):`${n.config.apiScheme}://${i}`}class Fa{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(me(this.auth,"network-request-failed")),Ua.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Lt(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=me(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(n,e){return Rt(n,"POST","/v1/accounts:delete",e)}async function Ha(n,e){return Rt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Va(n,e=!1){const t=Ye(n),r=await t.getIdToken(e),i=Xn(r);R(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:pt(vn(i.auth_time)),issuedAtTime:pt(vn(i.iat)),expirationTime:pt(vn(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function vn(n){return Number(n)*1e3}function Xn(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ut("JWT malformed, contained fewer than 3 sections"),null;try{const i=xi(t);return i?JSON.parse(i):(Ut("Failed to decode base64 JWT payload"),null)}catch(i){return Ut("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Wa(n){const e=Xn(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof at&&ja(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ja({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pt(this.lastLoginAt),this.creationTime=pt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yt(n){var e;const t=n.auth,r=await n.getIdToken(),i=await wt(n,Ha(t,{idToken:r}));R(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qa(s.providerUserInfo):[],a=Ga(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!a?.length,u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ki(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Ka(n){const e=Ye(n);await Yt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ga(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qa(n){return n.map(e=>{var{providerId:t}=e,r=qn(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(n,e){const t=await ji(n,{},async()=>{const r=St({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=zi(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wi.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ja(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new It;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new It,this.toJSON())}_performRefresh(){return Ie("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ze{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=qn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new za(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ki(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await wt(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Va(this,e)}reload(){return Ka(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Yt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wt(this,$a(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,c,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(i=t.email)!==null&&i!==void 0?i:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,b=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=t.createdAt)!==null&&c!==void 0?c:void 0,N=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:w,isAnonymous:U,providerData:k,stsTokenManager:I}=t;R(A&&I,e,"internal-error");const D=It.fromJSON(this.name,I);R(typeof A=="string",e,"internal-error"),Ae(h,e.name),Ae(f,e.name),R(typeof w=="boolean",e,"internal-error"),R(typeof U=="boolean",e,"internal-error"),Ae(p,e.name),Ae(g,e.name),Ae(b,e.name),Ae(m,e.name),Ae(y,e.name),Ae(N,e.name);const v=new ze({uid:A,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:U,photoURL:g,phoneNumber:p,tenantId:b,stsTokenManager:D,createdAt:y,lastLoginAt:N});return k&&Array.isArray(k)&&(v.providerData=k.map(z=>Object.assign({},z))),m&&(v._redirectEventId=m),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new It;i.updateFromServerResponse(t);const s=new ze({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yt(s),s}}/**
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
 */class Gi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gi.type="NONE";const Sr=Gi;/**
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
 */function Ft(n,e,t){return`firebase:${n}:${e}:${t}`}class rt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ft(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ft("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new rt(Ee(Sr),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ee(Sr);const o=Ft(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=ze._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new rt(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new rt(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qi(e))return"Blackberry";if(Zi(e))return"Webos";if(Qn(e))return"Safari";if((e.includes("chrome/")||Ji(e))&&!e.includes("edge/"))return"Chrome";if(Xi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function qi(n=oe()){return/firefox\//i.test(n)}function Qn(n=oe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ji(n=oe()){return/crios\//i.test(n)}function Yi(n=oe()){return/iemobile/i.test(n)}function Xi(n=oe()){return/android/i.test(n)}function Qi(n=oe()){return/blackberry/i.test(n)}function Zi(n=oe()){return/webos/i.test(n)}function sn(n=oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ya(n=oe()){var e;return sn(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xa(){return _a()&&document.documentMode===10}function es(n=oe()){return sn(n)||Xi(n)||Zi(n)||Qi(n)||/windows phone/i.test(n)||Yi(n)}function Qa(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n,e=[]){let t;switch(n){case"Browser":t=Tr(oe());break;case"Worker":t=`${Tr(oe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${nn}/${r}`}/**
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
 */class Za{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ar(this),this.idTokenSubscription=new Ar(this),this.beforeStateQueue=new Za(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hi,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ee(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await rt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yt(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ye(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ee(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await rt.create(this,[Ee(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ts(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function lt(n){return Ye(n)}class Ar{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ia(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function tl(n,e,t){const r=lt(n);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!t?.disableWarnings,s=ns(e),{host:o,port:a}=nl(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||rl()}function ns(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function nl(n){const e=ns(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Rr(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Rr(o)}}}function Rr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function rl(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ie("not implemented")}_getIdTokenResponse(e){return Ie("not implemented")}_linkToIdToken(e,t){return Ie("not implemented")}_getReauthenticationResolver(e){return Ie("not implemented")}}async function il(n,e){return Rt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(n,e){return Ct(n,"POST","/v1/accounts:signInWithPassword",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(n,e){return Ct(n,"POST","/v1/accounts:signInWithEmailLink",At(n,e))}async function al(n,e){return Ct(n,"POST","/v1/accounts:signInWithEmailLink",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Zn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Et(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Et(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return sl(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ol(e,{email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return il(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return al(e,{idToken:t,email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(n,e){return Ct(n,"POST","/v1/accounts:signInWithIdp",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="http://localhost";class qe extends Zn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ue("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=qn(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qe(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return it(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,it(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,it(e,t)}buildRequest(){const e={requestUri:ll,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=St(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ul(n){const e=ht(dt(n)).link,t=e?ht(dt(e)).deep_link_id:null,r=ht(dt(n)).deep_link_id;return(r?ht(dt(r)).link:null)||r||t||e||n}class er{constructor(e){var t,r,i,s,o,a;const l=ht(dt(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=cl((i=l.mode)!==null&&i!==void 0?i:null);R(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=ul(e);try{return new er(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.providerId=ct.PROVIDER_ID}static credential(e,t){return Et._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=er.parseLink(t);return R(r,"argument-error"),Et._fromEmailAndCode(e,r.code,r.tenantId)}}ct.PROVIDER_ID="password";ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ot extends tr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Ot{constructor(){super("facebook.com")}static credential(e){return qe._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.FACEBOOK_SIGN_IN_METHOD="facebook.com";Re.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends Ot{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qe._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return we.credential(t,r)}catch{return null}}}we.GOOGLE_SIGN_IN_METHOD="google.com";we.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Ot{constructor(){super("github.com")}static credential(e){return qe._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch{return null}}}Ce.GITHUB_SIGN_IN_METHOD="github.com";Ce.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Ot{constructor(){super("twitter.com")}static credential(e,t){return qe._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Oe.credential(t,r)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(n,e){return Ct(n,"POST","/v1/accounts:signUp",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ze._fromIdTokenResponse(e,r,i),o=Cr(r);return new Je({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Cr(r);return new Je({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Cr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends at{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Xt(e,t,r,i)}}function rs(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xt._fromErrorAndOperation(n,s,e,r):s})}async function dl(n,e,t=!1){const r=await wt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Je._forOperation(n,"link",r)}/**
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
 */async function fl(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await wt(n,rs(r,i,e,n),t);R(s.idToken,r,"internal-error");const o=Xn(s.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(n.uid===a,r,"user-mismatch"),Je._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&ue(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(n,e,t=!1){const r="signIn",i=await rs(n,r,e),s=await Je._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function pl(n,e){return is(lt(n),e)}async function gl(n,e,t){const r=lt(n),i=await hl(r,{returnSecureToken:!0,email:e,password:t}),s=await Je._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function ml(n,e,t){return pl(Ye(n),ct.credential(e,t))}function _l(n,e,t,r){return Ye(n).onIdTokenChanged(e,t,r)}function yl(n,e,t){return Ye(n).beforeAuthStateChanged(e,t)}const Qt="__sak";/**
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
 */class ss{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qt,"1"),this.storage.removeItem(Qt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){const n=oe();return Qn(n)||sn(n)}const bl=1e3,wl=10;class os extends ss{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vl()&&Qa(),this.fallbackToPolling=es(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Xa()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wl):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},bl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}os.type="LOCAL";const Il=os;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends ss{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}as.type="SESSION";const ls=as;/**
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
 */function El(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class on{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new on(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await El(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}on.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class kl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=nr("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return window}function Sl(n){_e().location.href=n}/**
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
 */function cs(){return typeof _e().WorkerGlobalScope<"u"&&typeof _e().importScripts=="function"}async function Tl(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Al(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Rl(){return cs()?self:null}/**
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
 */const us="firebaseLocalStorageDb",Cl=1,Zt="firebaseLocalStorage",hs="fbase_key";class Dt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function an(n,e){return n.transaction([Zt],e?"readwrite":"readonly").objectStore(Zt)}function Ol(){const n=indexedDB.deleteDatabase(us);return new Dt(n).toPromise()}function $n(){const n=indexedDB.open(us,Cl);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Zt,{keyPath:hs})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Zt)?e(r):(r.close(),await Ol(),e(await $n()))})})}async function Or(n,e,t){const r=an(n,!0).put({[hs]:e,value:t});return new Dt(r).toPromise()}async function Dl(n,e){const t=an(n,!1).get(e),r=await new Dt(t).toPromise();return r===void 0?null:r.value}function Dr(n,e){const t=an(n,!0).delete(e);return new Dt(t).toPromise()}const Pl=800,Ml=3;class ds{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $n(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ml)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=on._getInstance(Rl()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Tl(),!this.activeServiceWorker)return;this.sender=new kl(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Al()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $n();return await Or(e,Qt,"1"),await Dr(e,Qt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Or(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Dl(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=an(i,!1).getAll();return new Dt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ds.type="LOCAL";const Ll=ds;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function xl(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=me("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Nl().appendChild(r)})}function Bl(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Tt(3e4,6e4);/**
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
 */function fs(n,e){return e?Ee(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class rr extends Zn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return it(e,this._buildIdpRequest())}_linkToIdToken(e,t){return it(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return it(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ul(n){return is(n.auth,new rr(n),n.bypassAuthState)}function Fl(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),fl(t,new rr(n),n.bypassAuthState)}async function $l(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),dl(t,new rr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ul;case"linkViaPopup":case"linkViaRedirect":return $l;case"reauthViaPopup":case"reauthViaRedirect":return Fl;default:ue(this.auth,"internal-error")}}resolve(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new Tt(2e3,1e4);async function Vl(n,e,t){const r=lt(n);Da(n,e,tr);const i=fs(r,t);return new je(r,"signInViaPopup",e,i).executeNotNull()}class je extends ps{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,je.currentPopupAction&&je.currentPopupAction.cancel(),je.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const e=nr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,je.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Hl.get())};e()}}je.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="pendingRedirect",$t=new Map;class jl extends ps{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$t.get(this.auth._key());if(!e){try{const r=await zl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$t.set(this.auth._key(),e)}return this.bypassAuthState||$t.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zl(n,e){const t=ql(e),r=Gl(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Kl(n,e){$t.set(n._key(),e)}function Gl(n){return Ee(n._redirectPersistence)}function ql(n){return Ft(Wl,n.config.apiKey,n.name)}async function Jl(n,e,t=!1){const r=lt(n),i=fs(r,e),o=await new jl(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=10*60*1e3;class Xl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ql(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gs(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(me(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pr(e))}saveEventToCache(e){this.cachedEventUids.add(Pr(e)),this.lastProcessedEventTime=Date.now()}}function Pr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gs({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Ql(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gs(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(n,e={}){return Rt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tc=/^https?/;async function nc(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Zl(n);for(const t of e)try{if(rc(t))return}catch{}ue(n,"unauthorized-domain")}function rc(n){const e=Fn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!tc.test(t))return!1;if(ec.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ic=new Tt(3e4,6e4);function Mr(){const n=_e().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sc(n){return new Promise((e,t)=>{var r,i,s;function o(){Mr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mr(),t(me(n,"network-request-failed"))},timeout:ic.get()})}if(!((i=(r=_e().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_e().gapi)===null||s===void 0)&&s.load)o();else{const a=Bl("iframefcb");return _e()[a]=()=>{gapi.load?o():t(me(n,"network-request-failed"))},xl(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ht=null,e})}let Ht=null;function oc(n){return Ht=Ht||sc(n),Ht}/**
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
 */const ac=new Tt(5e3,15e3),lc="__/auth/iframe",cc="emulator/auth/iframe",uc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dc(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yn(e,cc):`https://${n.config.authDomain}/${lc}`,r={apiKey:e.apiKey,appName:n.name,v:nn},i=hc.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${St(r).slice(1)}`}async function fc(n){const e=await oc(n),t=_e().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:dc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uc,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=me(n,"network-request-failed"),a=_e().setTimeout(()=>{s(o)},ac.get());function l(){_e().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const pc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gc=500,mc=600,_c="_blank",yc="http://localhost";class Lr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vc(n,e,t,r=gc,i=mc){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pc),{width:r.toString(),height:i.toString(),top:s,left:o}),c=oe().toLowerCase();t&&(a=Ji(c)?_c:t),qi(c)&&(e=e||yc,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(Ya(c)&&a!=="_self")return bc(e||"",a),new Lr(null);const h=window.open(e||"",a,u);R(h,n,"popup-blocked");try{h.focus()}catch{}return new Lr(h)}function bc(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const wc="__/auth/handler",Ic="emulator/auth/handler";function Nr(n,e,t,r,i,s){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:nn,eventId:i};if(e instanceof tr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",wa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof Ot){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Ec(n)}?${St(a).slice(1)}`}function Ec({config:n}){return n.emulator?Yn(n,Ic):`https://${n.authDomain}/${wc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="webStorageSupport";class kc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ls,this._completeRedirectFn=Jl,this._overrideRedirectResult=Kl}async _openPopup(e,t,r,i){var s;Se((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Nr(e,t,r,Fn(),i);return vc(e,o,nr())}async _openRedirect(e,t,r,i){return await this._originValidation(e),Sl(Nr(e,t,r,Fn(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Se(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await fc(e),r=new Xl(e);return t.register("authEvent",i=>(R(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bn,{type:bn},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[bn];o!==void 0&&t(!!o),ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return es()||Qn()||sn()}}const Sc=kc;var xr="@firebase/auth",Br="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rc(n){vt(new wr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{R(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),R(!o?.includes(":"),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ts(n)},u=new el(a,l,c);return Ma(u,t),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),vt(new wr("auth-internal",e=>{const t=lt(e.getProvider("auth").getImmediate());return(r=>new Tc(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(xr,Br,Ac(n)),nt(xr,Br,"esm2017")}/**
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
 */const Cc=5*60,Oc=Ui("authIdTokenMaxAge")||Cc;let Ur=null;const Dc=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Oc)return;const i=t?.token;Ur!==i&&(Ur=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pc(n=qo()){const e=Pi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Pa(n,{popupRedirectResolver:Sc,persistence:[Ll,Il,ls]}),r=Ui("authTokenSyncURL");if(r){const s=Dc(r);yl(t,s,()=>s(t.currentUser)),_l(t,o=>s(o))}const i=fa("auth");return i&&tl(t,`http://${i}`),t}Rc("Browser");const Mc=()=>{},Lc="https://api.cubingapp.com:3000",Nc={apiKey:"AIzaSyCnwuoBqAR6cx7uqzxf7iEC99sZf36sZZA",authDomain:"virtual-cube.firebaseapp.com",projectId:"virtual-cube",storageBucket:"virtual-cube.appspot.com",messagingSenderId:"371073332227",appId:"1:371073332227:web:c96d3137080aecfe634a36",measurementId:"G-YR33BDCQDY"},xc=Mi(Nc),ln=()=>Pc(xc);async function cn(n,e){return await fetch(`${Lc}${n}`,{method:"POST",body:JSON.stringify(e)}).then(r=>r.json())}async function Bc(n){return cn("/user",{email:n})}const Fr="algSet",$r="casesToday",Hr="orientation",ms="showScramble",ir="user",Vr={get:()=>localStorage.getItem(Fr)??"",set:n=>localStorage.setItem(Fr,n)},en={get:()=>{const n=localStorage.getItem($r);return n?JSON.parse(n):{count:0,msSinceEpoch:Date.now()}},set:n=>{localStorage.setItem($r,JSON.stringify(n))}};let Hn={get:()=>localStorage.getItem(Hr)??"",set:n=>{localStorage.setItem(Hr,n)}};function Uc(){return Vc(ms)??!1}function Fc(n){Wc(ms,n)}function $c(){return localStorage.getItem(ir)}function _s(){localStorage.removeItem(ir)}function Hc(n){localStorage.setItem(ir,n)}function Vc(n){const e=localStorage.getItem(n);return e===null?null:e=="1"}function Wc(n,e){localStorage.setItem(n,e?"1":"0")}class ys{email;uid;constructor(){}toJsonString(){return JSON.stringify({email:this.email,uid:this.uid})}fromJsonString(e){const t=JSON.parse(e);this.email=t.email,this.uid=t.uid}}function vs(n){Mc("Signed in as "+n.email+" with uid "+n.uid)}function jc(){const n=$c();if(!n)return null;const e=new ys;return e.fromJsonString(n),!e.email||!e.uid?(_s(),null):(vs(e),e)}function sr(n,e){const t=new ys;t.email=n.user.email,Bc(t.email).then(r=>{t.uid=r.uid,Hc(t.toJsonString()),vs(t),e(t)})}function zc(n){const e=ln(),t=new we;Vl(e,t).then(r=>{sr(r,n)}).catch(r=>{console.log(r)})}function Kc(n,e,t){const r=ln();gl(r,n,e).then(i=>{sr(i,t)}).catch(i=>{console.log(i.message)})}function Gc(n,e,t){const r=ln();ml(r,n,e).then(i=>{sr(i,t)}).catch(i=>{console.log(i.message)})}function qc(){ln().signOut(),_s()}function Jc(n){let e,t,r;return{c(){e=_("button"),e.textContent="Create Account",O(e,"class","btn-primary")},m(i,s){V(i,e,s),t||(r=se(e,"click",n[3]),t=!0)},p:F,i:F,o:F,d(i){i&&$(e),t=!1,r()}}}function Yc(n,e,t){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{Kc(r,i,s)};return n.$$set=a=>{"email"in a&&t(0,r=a.email),"password"in a&&t(1,i=a.password),"callback"in a&&t(2,s=a.callback)},[r,i,s,o]}class Xc extends ge{constructor(e){super(),pe(this,e,Yc,Jc,fe,{email:0,password:1,callback:2})}}function Qc(n){let e,t,r;return{c(){e=_("button"),e.textContent="Sign In",O(e,"class","btn-primary")},m(i,s){V(i,e,s),t||(r=se(e,"click",n[3]),t=!0)},p:F,i:F,o:F,d(i){i&&$(e),t=!1,r()}}}function Zc(n,e,t){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{Gc(r,i,s)};return n.$$set=a=>{"email"in a&&t(0,r=a.email),"password"in a&&t(1,i=a.password),"callback"in a&&t(2,s=a.callback)},[r,i,s,o]}class eu extends ge{constructor(e){super(),pe(this,e,Zc,Qc,fe,{email:0,password:1,callback:2})}}function tu(n){let e,t,r;return{c(){e=_("button"),e.innerHTML=`<div class="row"><svg style="width: 20px; height: 20px; margin-right: 0.6rem;" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path><path fill="none" d="M2 2h44v44H2z"></path></svg> 
        <p style="font-size: 1rem; color: black;">Sign in with Google</p></div>`,O(e,"class","btn-white")},m(i,s){V(i,e,s),t||(r=se(e,"click",n[1]),t=!0)},p:F,i:F,o:F,d(i){i&&$(e),t=!1,r()}}}function nu(n,e,t){let{callback:r}=e;const i=()=>zc(r);return n.$$set=s=>{"callback"in s&&t(0,r=s.callback)},[r,i]}class ru extends ge{constructor(e){super(),pe(this,e,nu,tu,fe,{callback:0})}}function iu(n){let e,t,r,i;return{c(){e=_("input"),O(e,"class",t=n[1].class),O(e,"type","email"),O(e,"placeholder","Email")},m(s,o){V(s,e,o),zt(e,n[0]),r||(i=se(e,"input",n[2]),r=!0)},p(s,[o]){o&2&&t!==(t=s[1].class)&&O(e,"class",t),o&1&&e.value!==s[0]&&zt(e,s[0])},i:F,o:F,d(s){s&&$(e),r=!1,i()}}}function su(n,e,t){let{value:r}=e;function i(){r=this.value,t(0,r)}return n.$$set=s=>{t(1,e=de(de({},e),ye(s))),"value"in s&&t(0,r=s.value)},e=ye(e),[r,e,i]}class ou extends ge{constructor(e){super(),pe(this,e,su,iu,fe,{value:0})}}function au(n){let e,t,r,i;return{c(){e=_("input"),O(e,"class",t=n[1].class),O(e,"type","password"),O(e,"placeholder","Password")},m(s,o){V(s,e,o),zt(e,n[0]),r||(i=se(e,"input",n[2]),r=!0)},p(s,[o]){o&2&&t!==(t=s[1].class)&&O(e,"class",t),o&1&&e.value!==s[0]&&zt(e,s[0])},i:F,o:F,d(s){s&&$(e),r=!1,i()}}}function lu(n,e,t){let{value:r}=e;function i(){r=this.value,t(0,r)}return n.$$set=s=>{t(1,e=de(de({},e),ye(s))),"value"in s&&t(0,r=s.value)},e=ye(e),[r,e,i]}class cu extends ge{constructor(e){super(),pe(this,e,lu,au,fe,{value:0})}}function uu(n){let e,t,r,i;const s=n[6].default,o=vi(s,n,n[5],null);return{c(){e=_("div"),o&&o.c(),O(e,"class",t=jt("hoverable "+n[1].class)+" svelte-euathk"),O(e,"style",r=n[0]+n[1].style)},m(a,l){V(a,e,l),o&&o.m(e,null),i=!0},p(a,[l]){o&&o.p&&(!i||l&32)&&Ii(o,s,a,a[5],i?wi(s,a[5],l,null):Ei(a[5]),null),(!i||l&2&&t!==(t=jt("hoverable "+a[1].class)+" svelte-euathk"))&&O(e,"class",t),(!i||l&2&&r!==(r=a[0]+a[1].style))&&O(e,"style",r)},i(a){i||(L(o,a),i=!0)},o(a){B(o,a),i=!1},d(a){a&&$(e),o&&o.d(a)}}}function hu(n,e,t){let{$$slots:r={},$$scope:i}=e,{background:s="transparent"}=e,{borderRadius:o="inherit"}=e,{hovBackground:a="transparent"}=e,l=`
    --background: ${s};
    --border-radius: ${o};
    --hov-background: ${a};
    `;return n.$$set=c=>{t(1,e=de(de({},e),ye(c))),"background"in c&&t(2,s=c.background),"borderRadius"in c&&t(3,o=c.borderRadius),"hovBackground"in c&&t(4,a=c.hovBackground),"$$scope"in c&&t(5,i=c.$$scope)},e=ye(e),[l,e,s,o,a,i,r]}class gt extends ge{constructor(e){super(),pe(this,e,hu,uu,fe,{background:2,borderRadius:3,hovBackground:4})}}function du(n){let e,t,r,i,s;return{c(){e=_("button"),O(e,"class",t=jt(n[1].class)+" svelte-18z7rew"),O(e,"style",r=n[1].style)},m(o,a){V(o,e,a),e.innerHTML=n[0],i||(s=se(e,"click",n[4]),i=!0)},p(o,[a]){a&2&&t!==(t=jt(o[1].class)+" svelte-18z7rew")&&O(e,"class",t),a&2&&r!==(r=o[1].style)&&O(e,"style",r)},i:F,o:F,d(o){o&&$(e),i=!1,s()}}}function fu(n,e,t){let{name:r}=e,{stroke:i="white"}=e,o={chart:`<svg x="0px" y="0px" stroke="white" fill="white" stroke-width="5" viewBox="0 0 100 100" xml:space="preserve">
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
        </svg>`}[r];function a(l){Os.call(this,n,l)}return n.$$set=l=>{t(1,e=de(de({},e),ye(l))),"name"in l&&t(2,r=l.name),"stroke"in l&&t(3,i=l.stroke)},e=ye(e),[o,e,r,i,a]}class ke extends ge{constructor(e){super(),pe(this,e,fu,du,fe,{name:2,stroke:3})}}function pu(n){let e,t;return e=new ke({props:{name:"x",style:"padding: 4px;"}}),e.$on("click",n[3]),{c(){X(e.$$.fragment)},m(r,i){q(e,r,i),t=!0},p:F,i(r){t||(L(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){J(e,r)}}}function gu(n){let e,t,r,i,s,o,a,l;o=new gt({props:{hovBackground:"var(--gray-500)",borderRadius:"4px",$$slots:{default:[pu]},$$scope:{ctx:n}}});const c=n[2].default,u=vi(c,n,n[4],null);return{c(){e=_("div"),t=_("div"),r=_("p"),i=ie(n[0]),s=E(),X(o.$$.fragment),a=E(),u&&u.c(),O(t,"class","drawer-header svelte-1yj1jo6"),O(e,"class","drawer svelte-1yj1jo6")},m(h,f){V(h,e,f),d(e,t),d(t,r),d(r,i),d(t,s),q(o,t,null),d(e,a),u&&u.m(e,null),l=!0},p(h,[f]){(!l||f&1)&&kt(i,h[0]);const p={};f&18&&(p.$$scope={dirty:f,ctx:h}),o.$set(p),u&&u.p&&(!l||f&16)&&Ii(u,c,h,h[4],l?wi(c,h[4],f,null):Ei(h[4]),null)},i(h){l||(L(o.$$.fragment,h),L(u,h),l=!0)},o(h){B(o.$$.fragment,h),B(u,h),l=!1},d(h){h&&$(e),J(o),u&&u.d(h)}}}function mu(n,e,t){let{$$slots:r={},$$scope:i}=e,{title:s}=e,{close:o}=e;const a=()=>o();return n.$$set=l=>{"title"in l&&t(0,s=l.title),"close"in l&&t(1,o=l.close),"$$scope"in l&&t(4,i=l.$$scope)},[s,o,r,a,i]}class or extends ge{constructor(e){super(),pe(this,e,mu,gu,fe,{title:0,close:1})}}const _u=[1,1,1,1],yu=[.5,.5,.5,1],vu=[1,1,0,1],bu=[0,1,0,1],wu=[0,0,1,1],Iu=[1,.5,0,1],Eu=[1,0,0,1],ku=[0,0,0,1],Wr=[_u,bu,vu,wu,Iu,Eu];function jr(n){return(n<0||n>=Wr.length)&&console.error("Invalid face: "+n),Wr[n]}function zr(n,e){return Math.floor(n/C(e.layers))}function Su(n){return n[Ke(n.length)]}function Ke(n){return Math.floor(Math.random()*n)}function Tu(n){let e=n.length;for(;e!=0;){let t=Ke(e);e--;let r=n[t];n[t]=n[e],n[e]=r}return n}function ar(n){return n<=0?2:ar(n-1)+n+2}function Au(n){n[0].Score++;let e=ar(n[0].Score);const t=Math.ceil(n.length*3/4);e>t&&(e=t+Ke(n.length-t)),bs(n,e)}function Ru(n){n[0].Score=0,bs(n,ar(0))}function bs(n,e){const t=n[0];for(let r=0;r<e;r++)n[r]=n[r+1];n[e]=t}const Pe=0,Me=1,Le=2,Ne=3,xe=4,Be=5,Cu=[[Pe,Ne,xe],[Pe,Be,Ne],[Pe,xe,Me],[Pe,Me,Be],[Le,Me,xe],[Le,Be,Me],[Le,xe,Ne],[Le,Ne,Be]],Ou=[[Pe,Ne],[Pe,xe],[Pe,Be],[Pe,Me],[Me,xe],[Me,Be],[Le,Me],[Le,xe],[Le,Be],[Le,Ne],[Ne,xe],[Ne,Be]];function Du(n){let e=Kr(12,2),t=Kr(8,3),r=wn(8),i=wn(12);for(;Gr(r)!==Gr(i);)r=wn(8);const s=Array(54);for(let w=0;w<6;w++){const U=n.center(w);s[U]=w}let o=n.corners(0,0),a=n.corners(1,0),l=n.corners(2,0),c=n.corners(3,0),u=n.corners(4,0),h=n.corners(5,0);const f=(w,U,k,I,D,v,z,ne,H)=>{const P=(Z,re)=>Cu[r[Z]][(t[Z]+re)%3];s[w.topLeft]=P(U,v),s[w.topRight]=P(k,z),s[w.bottomLeft]=P(I,ne),s[w.bottomRight]=P(D,H)};f(o,0,1,2,3,0,0,0,0),f(a,2,3,4,5,2,1,1,2),f(l,4,5,6,7,0,0,0,0),f(c,6,7,0,1,2,1,1,2),f(u,0,2,6,4,2,1,1,2),f(h,3,1,5,7,2,1,1,2);let p=n.edges(0,0,0),g=n.edges(1,0,0),b=n.edges(2,0,0),m=n.edges(3,0,0),y=n.edges(4,0,0),N=n.edges(5,0,0);const A=(w,U,k,I,D,v,z,ne,H)=>{const P=(Z,re)=>Ou[i[Z]][(e[Z]+re)%2];s[w.top]=P(U,v),s[w.left]=P(k,z),s[w.right]=P(I,ne),s[w.bottom]=P(D,H)};return A(p,0,1,2,3,0,0,0,0),A(g,3,4,5,6,1,0,0,1),A(b,6,7,8,9,0,0,0,0),A(m,9,10,11,0,1,0,0,1),A(y,1,10,4,7,1,1,1,1),A(N,2,5,11,8,1,1,1,1),s}function Kr(n,e){const t=Array(n);for(let r=0;r<n;r++)t[r]=Ke(e);for(;!Pu(t,e);){const r=Ke(n);t[r]=Ke(e)}return t}function Pu(n,e){let t=0;for(let r=0;r<n.length;r++)t+=n[r];return t%e===0}function wn(n){const e=Array(n);for(let t=0;t<n;t++)e[t]=t;return Tu(e),e}function Gr(n){const e=[...n];let t=!1;for(;;)if(e[0]===0){const r=e.findIndex((i,s)=>i!==s);if(r===-1)return t;e[0]=e[r],e[r]=0,t=!t}else{const r=e[0];e[0]=e[r],e[r]=r,t=!t}}let De;function Vt(n,e){const t=[e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3]];De.bindBuffer(De.ARRAY_BUFFER,n.buffer),De.bufferData(De.ARRAY_BUFFER,new Float32Array(t),De.STATIC_DRAW)}function C(n){return n*n}function Q(n){return Math.floor(n/2)}function ut(n){return n%2==0}function ae(n){return n*n*6}class Mu{stickers;underStickers;layers;affectedStickers;disableTurn;clockwise;animationQueue;constructor(e){De=e,this.animationQueue=[]}setColors(e){for(let t=0;t<ae(this.layers);t++)Vt(this.stickers[t],e[t])}solve(){const e=Array(ae(this.layers));for(let t=0;t<ae(this.layers);t++){const r=zr(t,this);this.stickers[t].face=r,e[t]=jr(r)}this.setColors(e)}scramble(){if(this.layers===3){this.scramble3x3();return}this.naiveScramble()}scramble3x3(){const e=Du(this);this.setCubeState(e)}naiveScramble(){let e=C(this.layers)*10;for(let t=0;t<e;t++){let r=Math.floor(Math.random()*3),i=Math.floor(Math.random()*this.layers),s=Math.floor(Math.random()*1)==0;this._matchTurn(r,i,s)}}setNumOfLayers(e){this.layers=e,this.stickers=Array(ae(e)),this.underStickers=Array(ae(e));for(let t=0;t<ae(e);t++){const r=zr(t,this);this.stickers[t]={face:r,buffer:De.createBuffer()},this.underStickers[t]={face:r,buffer:De.createBuffer()},Vt(this.underStickers[t],ku)}this.affectedStickers=Array(ae(e)).fill(!1)}getCubeState(){return this.stickers.map(e=>e.face)}setCubeState(e){for(let t=0;t<ae(this.layers);t++){const r=jr(e[t]);this.stickers[t].face=e[t],Vt(this.stickers[t],r)}}resetAffectedStickers(){const e=Array(ae(this.layers));this.affectedStickers=e.fill(this.layers===1)}pushAnimation(e,t,r){let i=t?-1:1,s=[0,0,0];s[e]=i,this.animationQueue.push({axis:s,stickers:r,stickersToAnimate:this.affectedStickers})}turn(e,t,r){this.resetAffectedStickers(),this.pushAnimation(e,r,[...this.stickers]),this._matchTurn(e,t,r)}sliceTurn(e,t){const r=Array(ae(this.layers));this.affectedStickers=r.fill(!1),this.pushAnimation(e,t,[...this.stickers]);for(let i=1;i<this.layers-1;i++)this._matchTurn(e,i,t)}wideTurn(e,t,r){this.resetAffectedStickers(),this.pushAnimation(e,r,[...this.stickers]),this._matchTurn(e,t,r);for(let i=1;i<this.layers-1;i++)this._matchTurn(e,i,r)}cubeRotate(e,t){this.resetAffectedStickers(),this.pushAnimation(e,t,[...this.stickers]);for(let r=0;r<this.layers;r++)this._matchTurn(e,r,t)}_matchTurn(e,t,r){e==0?(this._turnXAxis(t,r),t==0?this._turnOuter(5,r):t==this.layers-1&&this._turnOuter(4,!r)):e==1?(this._turnYAxis(t,r),t==0?this._turnOuter(0,r):t==this.layers-1&&this._turnOuter(2,!r)):e==2?(this._turnZAxis(t,r),t==0?this._turnOuter(1,r):t==this.layers-1&&this._turnOuter(3,!r)):console.error(`Axis ${e} not recognized`)}_turnXAxis(e,t){for(let r=1;r<=this.layers;r++)this._cycle(t,0*C(this.layers)+C(this.layers)-r-e*this.layers,3*C(this.layers)+C(this.layers)-r-e*this.layers,2*C(this.layers)+C(this.layers)-r-e*this.layers,1*C(this.layers)+C(this.layers)-r-e*this.layers)}_turnYAxis(e,t){for(let r=0;r<this.layers;r++)this._cycle(t,1*C(this.layers)+r*this.layers+e,4*C(this.layers)+r*this.layers+e,3*C(this.layers)+(this.layers-r-1)*this.layers+(this.layers-1)-e,5*C(this.layers)+r*this.layers+e)}_turnZAxis(e,t){for(let r=0;r<this.layers;r++)this._cycle(t,0*C(this.layers)+(r+1)*this.layers-1-e,5*C(this.layers)+r+this.layers*e,2*C(this.layers)+(this.layers-r-1)*this.layers+e,4*C(this.layers)+C(this.layers)-(r+1)-e*this.layers)}_turnOuter(e,t){if(this.layers%2!=0){let r=this.center(e);this.affectedStickers[r]=!0}for(let r=0;r<Math.floor(this.layers/2);r++){const{topLeft:i,topRight:s,bottomLeft:o,bottomRight:a}=this.corners(e,r);this._cycle(t,i,s,a,o);let l=this.layers-2*(r+1);for(let c=0;c<l;c++){const{top:u,left:h,bottom:f,right:p}=this.edges(e,r,c);this._cycle(t,u,p,f,h)}}}_cycle(e,t,r,i,s){this.affectedStickers[t]=!0,this.affectedStickers[r]=!0,this.affectedStickers[i]=!0,this.affectedStickers[s]=!0,e?this._cycleHelper(t,r,i,s):this._cycleHelper(s,i,r,t)}_cycleHelper(e,t,r,i){let s=this.stickers[i];this.stickers[i]=this.stickers[r],this.stickers[r]=this.stickers[t],this.stickers[t]=this.stickers[e],this.stickers[e]=s}matchKeyToTurn(e){if(!this.disableTurn&&!e.ctrlKey)return this.matchKeyCodeToTurn(e.code)}matchKeyCodeToTurn(e){switch(e){case"KeyN":return this.cubeRotate(0,!0),{notation:"x",rotate:!0};case"KeyB":return this.cubeRotate(0,!1),{notation:"x'",rotate:!0};case"Semicolon":return this.cubeRotate(1,!0),{notation:"y",rotate:!0};case"KeyA":return this.cubeRotate(1,!1),{notation:"y'",rotate:!0};case"KeyP":return this.cubeRotate(2,!0),{notation:"z",rotate:!0};case"KeyQ":return this.cubeRotate(2,!1),{notation:"z'",rotate:!0};case"KeyJ":return this.turn(1,0,!0),{notation:"U",turn:!0};case"KeyF":return this.turn(1,0,!1),{notation:"U'",turn:!0};case"KeyS":return this.turn(1,this.layers-1,!1),{notation:"D",turn:!0};case"KeyL":return this.turn(1,this.layers-1,!0),{notation:"D'",turn:!0};case"KeyH":return this.turn(2,0,!0),{notation:"F",turn:!0};case"KeyG":return this.turn(2,0,!1),{notation:"F'",turn:!0};case"KeyW":return this.turn(2,this.layers-1,!1),{notation:"B",turn:!0};case"KeyO":return this.turn(2,this.layers-1,!0),{notation:"B'",turn:!0};case"KeyD":return this.turn(0,this.layers-1,!1),{notation:"L",turn:!0};case"KeyE":return this.turn(0,this.layers-1,!0),{notation:"L'",turn:!0};case"KeyI":return this.turn(0,0,!0),{notation:"R",turn:!0};case"KeyK":return this.turn(0,0,!1),{notation:"R'",turn:!0};case"BracketLeft":return this.sliceTurn(0,!1),{notation:"M",turn:!0};case"Quote":return this.sliceTurn(0,!0),{notation:"M'",turn:!0};case"KeyC":return this.sliceTurn(1,!1),{notation:"E",turn:!0};case"Comma":return this.sliceTurn(1,!0),{notation:"E'",turn:!0};case"KeyY":return this.sliceTurn(2,!0),{notation:"S",turn:!0};case"KeyT":return this.sliceTurn(2,!1),{notation:"S'",turn:!0};case"KeyU":return this.wideTurn(0,0,!0),{notation:"r",turn:!0};case"KeyM":return this.wideTurn(0,0,!1),{notation:"r'",turn:!0};case"KeyV":return this.wideTurn(0,this.layers-1,!1),{notation:"l",turn:!0};case"KeyR":return this.wideTurn(0,this.layers-1,!0),{notation:"l'",turn:!0}}}stepAlgorithm(e,t){switch(e){case"x":this.cubeRotate(0,t);break;case"x'":this.cubeRotate(0,!t);break;case"x2":case"x2'":this.cubeRotate(0,t),this.cubeRotate(0,t);break;case"y":this.cubeRotate(1,t);break;case"y'":this.cubeRotate(1,!t);break;case"y2":case"y2'":this.cubeRotate(1,t),this.cubeRotate(1,t);break;case"z":this.cubeRotate(2,t);break;case"z'":this.cubeRotate(2,!t);break;case"z2":case"z2'":this.cubeRotate(2,t),this.cubeRotate(2,t);break;case"U":this.turn(1,0,t);break;case"U'":this.turn(1,0,!t);break;case"U2":case"U2'":this.turn(1,0,t),this.turn(1,0,t);break;case"u":this.wideTurn(1,0,t);break;case"u'":this.wideTurn(1,0,!t);break;case"u2":case"u2'":this.wideTurn(1,0,t),this.wideTurn(1,0,t);break;case"D":this.turn(1,this.layers-1,!t);break;case"D'":this.turn(1,this.layers-1,t);break;case"D2":case"D2'":this.turn(1,this.layers-1,t),this.turn(1,this.layers-1,t);break;case"d":this.wideTurn(1,this.layers-1,!t);break;case"d'":this.wideTurn(1,this.layers-1,t);break;case"d2":case"d2'":this.wideTurn(1,this.layers-1,t),this.wideTurn(1,this.layers-1,t);break;case"F":this.turn(2,0,t);break;case"F'":this.turn(2,0,!t);break;case"F2":case"F2'":this.turn(2,0,t),this.turn(2,0,t);break;case"f":this.wideTurn(2,0,t);break;case"f'":this.wideTurn(2,0,!t);break;case"f2":case"f2'":this.wideTurn(2,0,t),this.wideTurn(2,0,t);break;case"B":this.turn(2,this.layers-1,!t);break;case"B'":this.turn(2,this.layers-1,t);break;case"B2":case"B2'":this.turn(2,this.layers-1,t),this.turn(2,this.layers-1,t);break;case"b":this.wideTurn(2,this.layers-1,!t);break;case"b'":this.wideTurn(2,this.layers-1,t);break;case"b2":case"b2'":this.wideTurn(2,this.layers-1,t),this.wideTurn(2,this.layers-1,t);break;case"L":this.turn(0,this.layers-1,!t);break;case"L'":this.turn(0,this.layers-1,t);break;case"L2":case"L2'":this.turn(0,this.layers-1,t),this.turn(0,this.layers-1,t);break;case"l":this.wideTurn(0,this.layers-1,!t);break;case"l'":this.wideTurn(0,this.layers-1,t);break;case"l2":case"l2'":this.wideTurn(0,this.layers-1,t),this.wideTurn(0,this.layers-1,t);break;case"R":this.turn(0,0,t);break;case"R'":this.turn(0,0,!t);break;case"R2":case"R2'":this.turn(0,0,t),this.turn(0,0,t);break;case"r":this.wideTurn(0,0,t);break;case"r'":this.wideTurn(0,0,!t);break;case"r2":case"r2'":this.wideTurn(0,0,t),this.wideTurn(0,0,t);break;case"M":this.turn(0,1,!t);break;case"M'":this.turn(0,1,t);break;case"M2":case"M2'":this.sliceTurn(0,t),this.sliceTurn(0,t);break;case"E":this.sliceTurn(1,!t);break;case"E'":this.sliceTurn(1,t);break;case"E2":case"E2'":this.sliceTurn(1,t),this.sliceTurn(1,t);break;case"S":this.sliceTurn(2,t);break;case"S'":this.sliceTurn(2,!t);break;case"S2":case"S2'":this.sliceTurn(2,t);default:throw new Error("Invalid turn in algorithm: "+e)}}execAlg(e){if(!e)return;let t=e.split(" ");for(let r=0;r<t.length;r++)this.stepAlgorithm(t[r],!0);this.animationQueue=[]}execAlgReverse(e){if(!e)return;let t=e.split(" ");for(let r=t.length-1;r>=0;r--)this.stepAlgorithm(t[r],!1);this.animationQueue=[]}stickerIsOnFace(e,t){return t*C(this.layers)<=e&&e<(t+1)*C(this.layers)}center(e){return e*C(this.layers)+Math.floor(C(this.layers)/2)}corners(e,t){const r=e*C(this.layers);return{topLeft:r+(this.layers+1)*t,topRight:r+(this.layers-1)*(this.layers-t),bottomRight:r+(this.layers+1)*(this.layers-t-1),bottomLeft:r+(this.layers-1)*(t+1)}}edges(e,t,r){const i=this.corners(e,t);let s=this.layers-2*(t+1);return{top:i.topLeft+this.layers*(r+1),left:i.topLeft+(s-r),right:i.topRight+r+1,bottom:i.bottomLeft+this.layers*(s-r)}}}function Vn(n){const e=n.gl,t=n.cube,r=n.perspectiveMatrix;let i=In(t,1.01,.02),s=In(t,1,0),o=In(t,1.5,.02);const a=Array(ae(t.layers));for(let l=0;l<ae(t.layers);l++){let c={positionBuffer:e.createBuffer(),noGapPositionBuffer:e.createBuffer(),hintPositionBuffer:e.createBuffer(),indexBuffer:e.createBuffer(),cart2d:[],positions:null},u=new Float32Array(12),h=new Float32Array(12),f=new Float32Array(12);for(let b=0;b<12;b++){let m=l*12+b;u[b]=i[m],h[b]=s[m],f[b]=o[m]}e.bindBuffer(e.ARRAY_BUFFER,c.positionBuffer),e.bufferData(e.ARRAY_BUFFER,u,e.STATIC_DRAW),c.positions=u,e.bindBuffer(e.ARRAY_BUFFER,c.noGapPositionBuffer),e.bufferData(e.ARRAY_BUFFER,h,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,c.hintPositionBuffer),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW);const p=Array(16);Nt(p,0,r,[h[0],h[1],h[2],1]),Nt(p,4,r,[h[3],h[4],h[5],1]),Nt(p,8,r,[h[6],h[7],h[8],1]),Nt(p,12,r,[h[9],h[10],h[11],1]),c.cart2d=[p[0]/p[3],p[1]/p[3],p[4]/p[7],p[5]/p[7],p[8]/p[11],p[9]/p[11],p[12]/p[15],p[13]/p[15]];const g=[0,1,2,0,2,3];e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,c.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(g),e.STATIC_DRAW),a[l]=c}return a}function Nt(n,e,t,r){Array(4);let i=r[0],s=r[1],o=r[2],a=r[3];n[e+0]=i*t[0]+s*t[4]+o*t[8]+a*t[12],n[e+1]=i*t[1]+s*t[5]+o*t[9]+a*t[13],n[e+2]=i*t[2]+s*t[6]+o*t[10]+a*t[14],n[e+3]=i*t[3]+s*t[7]+o*t[11]+a*t[15]}const ws=12,Lu=4,Ze=3;function In(n,e,t){const r=C(n.layers)*ws,i=Array(6*r);return Nu(i,0*r,n,1,e,t),xu(i,1*r,n,0,e,t),Bu(i,2*r,n,1,-e,t),Uu(i,3*r,n,0,-e,t),Fu(i,4*r,n,2,-e,t),$u(i,5*r,n,2,e,t),i}function Nu(n,e,t,r,i,s){if(ut(t.layers)){let l=Array(C(t.layers)),c=0;for(let u=0;u<t.layers;u++)for(let h=0;h<t.layers;h++){const f=-1+1/t.layers+h*2/t.layers,p=-1+1/t.layers+u*2/t.layers;l[c]=[f,p,i],c++}he(n,e,t,l,r,s);return}let o=Array(C(t.layers)),a=0;for(let l=-Q(t.layers);l<=Q(t.layers);l++)for(let c=-Q(t.layers);c<=Q(t.layers);c++)o[a]=[2*c/t.layers,2*l/t.layers,i],a++;he(n,e,t,o,r,s)}function xu(n,e,t,r,i,s){if(ut(t.layers)){let l=Array(C(t.layers)),c=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){const f=-1+1/t.layers+u*2/t.layers,p=-1+1/t.layers+h*2/t.layers;l[c]=[f,p,i],c++}he(n,e,t,l,r,s);return}let o=Array(C(t.layers)),a=0;for(let l=-Q(t.layers);l<=Q(t.layers);l++)for(let c=Q(t.layers);c>=-Q(t.layers);c--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;he(n,e,t,o,r,s)}function Bu(n,e,t,r,i,s){if(ut(t.layers)){let l=Array(C(t.layers)),c=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){const f=-1+1/t.layers+h*2/t.layers,p=-1+1/t.layers+u*2/t.layers;l[c]=[f,p,i],c++}he(n,e,t,l,r,s);return}let o=Array(C(t.layers)),a=0;for(let l=-Q(t.layers);l<=Q(t.layers);l++)for(let c=Q(t.layers);c>=-Q(t.layers);c--)o[a]=[2*c/t.layers,2*l/t.layers,i],a++;he(n,e,t,o,r,s)}function Uu(n,e,t,r,i,s){if(ut(t.layers)){let l=Array(C(t.layers)),c=0;for(let u=0;u<t.layers;u++)for(let h=0;h<t.layers;h++){const f=-1+1/t.layers+u*2/t.layers,p=-1+1/t.layers+h*2/t.layers;l[c]=[f,p,i],c++}he(n,e,t,l,r,s);return}let o=Array(C(t.layers)),a=0;for(let l=-Q(t.layers);l<=Q(t.layers);l++)for(let c=-Q(t.layers);c<=Q(t.layers);c++)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;he(n,e,t,o,r,s)}function Fu(n,e,t,r,i,s){if(ut(t.layers)){let l=Array(C(t.layers)),c=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){const f=-1+1/t.layers+h*2/t.layers,p=-1+1/t.layers+u*2/t.layers;l[c]=[f,p,i],c++}he(n,e,t,l,r,s);return}let o=Array(C(t.layers)),a=0;for(let l=-Q(t.layers);l<=Q(t.layers);l++)for(let c=Q(t.layers);c>=-Q(t.layers);c--)o[a]=[2*c/t.layers,2*l/t.layers,i],a++;he(n,e,t,o,r,s)}function $u(n,e,t,r,i,s){if(ut(t.layers)){let l=Array(C(t.layers)),c=0;for(let u=t.layers-1;u>=0;u--)for(let h=t.layers-1;h>=0;h--){const f=-1+1/t.layers+h*2/t.layers,p=-1+1/t.layers+u*2/t.layers;l[c]=[f,p,i],c++}he(n,e,t,l,r,s);return}let o=Array(C(t.layers)),a=0;for(let l=Q(t.layers);l>=-Q(t.layers);l--)for(let c=Q(t.layers);c>=-Q(t.layers);c--)o[a]=[2*c/t.layers,2*l/t.layers,i],a++;he(n,e,t,o,r,s)}function he(n,e,t,r,i,s){for(let o=0;o<C(t.layers);o++){const a=r[o];Hu(n,e+o*ws,t,a[0],a[1],a[2],i,s)}}function Hu(n,e,t,r,i,s,o,a){const l=1/t.layers-a,c=[[r-l,i-l,s],[r+l,i-l,s],[r+l,i+l,s],[r-l,i+l,s]];for(let u=0;u<Lu;u++){const h=c[u];n[e+u*Ze]=h[(o+0)%Ze],n[e+u*Ze+1]=h[(o+1)%Ze],n[e+u*Ze+2]=h[(o+2)%Ze]}}const Vu=100,Wu=15;class ju{position;_velocity;_acceleration;target;constructor(){this.position=0,this._velocity=200,this._acceleration=0,this.target=0}update(e){const t=-Vu*(this.position-this.target),r=-Wu*this._velocity;this._acceleration=t+r,this._velocity+=this._acceleration*e,this.position+=this._velocity*e}}function qr(n,e){return n/e*2-1}function Jr(n,e){return 1-n/e*2}function En(n,e,t,r){return n<t?(r-e)/(t-n):(e-r)/(n-t)}function et(n,e,t,r,i,s){return Math.abs(.5*(n*(r-s)+t*(s-e)+i*(e-r)))}function zu(n,e){return n.layers-1-e%n.layers}function kn(n,e){return n.layers-1-Math.floor(e/n.layers)}function Ku(n,e){return e%n.layers}function Sn(n,e){return n.layers-1-Math.floor((e-C(n.layers))/n.layers)}class Gu{numOfPointerMoves;xOnDown;yOnDown;xOnMove;yOnMove;stickerOnDown;cart2dOnDown;onPointerDown(e,t,r,i,s){this.numOfPointerMoves=0;const o=qr(e,r.clientWidth),a=Jr(t,r.clientHeight);this.xOnDown=o,this.yOnDown=a,[this.stickerOnDown,this.cart2dOnDown]=this._coordinatesToSticker(o,a,i,s);function l(b,m,y){return{x:s[b].cart2d[m],y:s[b].cart2d[y]}}if(this.stickerOnDown!==-1)return;const c=l(0,0,1),u=l(i.layers*(i.layers-1),6,7),h=l(i.layers-1,2,3),f=l(C(i.layers)-1,4,5),p=l(i.layers*(i.layers+1)-1,0,1),g=l(C(i.layers)*2-1,2,3);a>c.y&&o>c.x&&o<u.x?i.cubeRotate(0,!0):o<c.x&&a>h.y&&a<c.y?i.cubeRotate(2,!1):o>u.x&&a>f.y&&a<u.y?i.cubeRotate(2,!0):o<p.x&&a>p.y&&a<h.y?i.cubeRotate(1,!0):o>g.x&&a>g.y&&a<f.y?i.cubeRotate(1,!1):a<p.y&&o>p.x&&o<g.x&&i.cubeRotate(0,!1)}onPointerMove(e,t){this.numOfPointerMoves++,this.xOnMove=e,this.yOnMove=t}onPointerUp(e,t,r){if(this.numOfPointerMoves<2)return;let i,s;if(this.stickerOnDown!==-1&&(i=En(this.cart2dOnDown[0],this.cart2dOnDown[1],this.cart2dOnDown[4],this.cart2dOnDown[5]),s=En(this.cart2dOnDown[2],this.cart2dOnDown[3],this.cart2dOnDown[6],this.cart2dOnDown[7]),i<0)){const c=i;i=s,s=c}const o=qr(this.xOnMove,e.clientWidth),a=Jr(this.yOnMove,e.clientHeight),l=En(o,a,this.xOnDown,this.yOnDown);t.stickerIsOnFace(this.stickerOnDown,0)?o===this.xOnDown?t.turn(0,kn(t,this.stickerOnDown),a>this.yOnDown):l>i?t.turn(0,kn(t,this.stickerOnDown),o>this.xOnDown):l<s?t.turn(0,kn(t,this.stickerOnDown),o<this.xOnDown):t.turn(2,zu(t,this.stickerOnDown),o>this.xOnDown):t.stickerIsOnFace(this.stickerOnDown,1)&&(o===this.xOnDown?t.turn(0,Sn(t,this.stickerOnDown),a>this.yOnDown):l>i?t.turn(0,Sn(t,this.stickerOnDown),o>this.xOnDown):l<s?t.turn(0,Sn(t,this.stickerOnDown),o<this.xOnDown):t.turn(1,Ku(t,this.stickerOnDown),o<this.xOnDown))}_coordinatesToSticker(e,t,r,i){const s=o=>{if(!i[o].cart2d){console.error("cart2d is undefined");return}const a=i[o].cart2d,l=et(a[0],a[1],a[2],a[3],a[4],a[5])+et(a[0],a[1],a[4],a[5],a[6],a[7]),c=et(e,t,a[0],a[1],a[2],a[3])+et(e,t,a[2],a[3],a[4],a[5])+et(e,t,a[4],a[5],a[6],a[7])+et(e,t,a[6],a[7],a[0],a[1]),u=1e-5;if(Math.abs(l-c)<u)return[o,a]};for(let o=0;o<2*C(r.layers);o++){const a=s(o);if(a)return a}return[-1,void 0]}}function Wt(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function qu(n,e,t,r,i){const s=1/Math.tan(e/2);if(n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,i!=null&&i!==1/0){const o=1/(r-i);n[10]=(i+r)*o,n[14]=2*i*r*o}else n[10]=-1,n[14]=-2*r;return n}function tn(n,e,t,r){let i=r[0],s=r[1],o=r[2],a=1/Math.hypot(i,s,o);i*=a,s*=a,o*=a;let l=Math.sin(t),c=Math.cos(t),u=1-c,h=e[0],f=e[1],p=e[2],g=e[3],b=e[4],m=e[5],y=e[6],N=e[7],A=e[8],w=e[9],U=e[10],k=e[11],I=i*i*u+c,D=s*i*u+o*l,v=o*i*u-s*l,z=i*s*u-o*l,ne=s*s*u+c,H=o*s*u+i*l,P=i*o*u+s*l,Z=s*o*u-i*l,re=o*o*u+c;return n[0]=h*I+b*D+A*v,n[1]=f*I+m*D+w*v,n[2]=p*I+y*D+U*v,n[3]=g*I+N*D+k*v,n[4]=h*z+b*ne+A*H,n[5]=f*z+m*ne+w*H,n[6]=p*z+y*ne+U*H,n[7]=g*z+N*ne+k*H,n[8]=h*P+b*Z+A*re,n[9]=f*P+m*Z+w*re,n[10]=p*P+y*Z+U*re,n[11]=g*P+N*Z+k*re,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function Ju(n,e){let t=e[0],r=e[1],i=e[2];return n[12]+=n[0]*t+n[4]*r+n[7]*i,n[13]+=n[1]*t+n[5]*r+n[8]*i,n[14]+=n[2]*t+n[5]*r+n[9]*i,n[15]+=n[3]*t+n[6]*r+n[10]*i,n}function Yr(){let n;return e=>(n||(n=e()),n)}let ce,x,be,Wn=[],Xr={animateTurns:!0,hintStickers:!0,showBody:!0},Qr=Date.now()*.001,Yu=3,Zr=!1;function Xu(){Zr||(Zr=!0,requestAnimationFrame(Is))}function Qu(n,e){x||(ce=e,x=ce.getContext("webgl"),be=Zu());let t=new Mu(x),r=new ju,i=eh(n),s=new Gu;t.setNumOfLayers(Yu);let o=Vn({gl:x,cube:t,perspectiveMatrix:i}),a={div:n,gl:x,cube:t,spring:r,buffers:o,perspectiveMatrix:i};const l=(g,b)=>{a.dragEnabled&&s.onPointerDown(g,b,a.div,a.cube,a.buffers)},c=(g,b)=>{a.dragEnabled&&s.onPointerMove(g,b)},u=()=>{a.dragEnabled&&s.onPointerUp(a.div,a.cube,a.buffers)},h=g=>{const b=g.target.getBoundingClientRect(),m=g.touches[0].pageX-b.left,y=g.touches[0].pageY-b.top;return{x:m,y}},f=()=>{n.addEventListener("pointerdown",g=>l(g.offsetX,g.offsetY)),n.addEventListener("pointermove",g=>c(g.offsetX,g.offsetY)),n.addEventListener("pointerup",g=>u())},p=()=>{n.addEventListener("touchstart",g=>{const{x:b,y:m}=h(g);l(b,m)}),n.addEventListener("touchmove",g=>{const{x:b,y:m}=h(g);c(b,m)}),n.addEventListener("touchend",g=>{u()})};return window.PointerEvent?f():p(),a}function Zu(){const t=th(x,`
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
    `);return x.useProgram(t),{attribLocations:{vertexPosition:x.getAttribLocation(t,"aVertexPosition"),vertexColor:x.getAttribLocation(t,"aVertexColor")},uniformLocations:{transformMatrix:x.getUniformLocation(t,"uTransformMatrix"),rotateMatrix:x.getUniformLocation(t,"uRotateMatrix")}}}function eh(n){let e=Wt();return qu(e,50*Math.PI/180,n.clientWidth/n.clientHeight,.1,100),Ju(e,[0,0,-5]),tn(e,e,45*Math.PI/180,[1,0,0]),tn(e,e,0,[0,-1,0]),e}function Tn(n,e,t){t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(e.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexPosition)}function An(n,e,t){t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(e.attribLocations.vertexColor,4,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexColor)}function Rn(n){n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)}function th(n,e,t){const r=ei(n,n.VERTEX_SHADER,e),i=ei(n,n.FRAGMENT_SHADER,t),s=n.createProgram();return n.attachShader(s,r),n.attachShader(s,i),n.linkProgram(s),n.getProgramParameter(s,n.LINK_STATUS)?s:(alert("Unable to initialize the shader program: "+n.getProgramInfoLog(s)),null)}function ei(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)?r:(alert("An error occurred compiling the shaders: "+n.getShaderInfoLog(r)),n.deleteShader(r),null)}function nh(){const n=ce.clientWidth,e=ce.clientHeight,t=ce.width!==n||ce.height!==e;return t&&(ce.width=n,ce.height=e),t}function Is(n){n*=.001;const e=n-Qr;Qr=n,nh(),x.enable(x.DEPTH_TEST),x.enable(x.SCISSOR_TEST),x.depthFunc(x.LEQUAL),x.clear(x.COLOR_BUFFER_BIT|x.DEPTH_BUFFER_BIT),ce.style.transform=`translateY(${window.scrollY}px)`;for(let t=0;t<Wn.length;t++){const{cube:r,div:i,spring:s,buffers:o,perspectiveMatrix:a}=Wn[t],l=i.getBoundingClientRect();if(l.bottom<0||l.top>ce.clientHeight||l.right<0||l.left>ce.clientWidth)continue;const c=l.right-l.left,u=l.bottom-l.top,h=l.left,f=ce.clientHeight-l.bottom;x.viewport(h,f,c,u),x.scissor(h,f,c,u),r.animationQueue[0]&&(s.target=r.animationQueue.length*90,s.update(e),s.position>=90&&(r.affectedStickers=Array(ae(r.layers)).fill(!1),s.position=0,r.animationQueue.shift()));const p=r.animationQueue[0];let g=rh(r),b=Yr(),m=Yr();for(let y=0;y<ae(r.layers);y++){let N=o[y];const A=p&&p.stickersToAnimate[y]&&Xr.animateTurns?b(()=>tn(Wt(),a,s.position*Math.PI/180,p.axis)):a;x.uniformMatrix4fv(be.uniformLocations.transformMatrix,!1,A);const w=p&&p.stickersToAnimate[y]&&Xr.animateTurns?m(()=>{const U=Wt();return tn(U,U,s.position*Math.PI/180,p.axis)}):Wt();x.uniformMatrix4fv(be.uniformLocations.rotateMatrix,!1,w),x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,N.indexBuffer),Tn(N.noGapPositionBuffer,be,x),An(r.underStickers[y].buffer,be,x),Rn(x),Tn(N.positionBuffer,be,x),An(g[y].buffer,be,x),Rn(x),Tn(N.hintPositionBuffer,be,x),An(g[y].buffer,be,x),Rn(x)}}requestAnimationFrame(Is)}function rh(n){return n.animationQueue[0]?n.animationQueue[0].stickers:n.stickers}function ih(n){let e,t,r,i,s,o,a;return{c(){e=_("div"),t=_("canvas"),r=E(),i=_("div"),O(i,"class","glDiv"),O(e,"class",s=n[3].class)},m(l,c){V(l,e,c),d(e,t),n[6](t),d(e,r),d(e,i),n[7](i),o||(a=se(window,"keydown",n[5]),o=!0)},p(l,[c]){c&8&&s!==(s=l[3].class)&&O(e,"class",s)},i:F,o:F,d(l){l&&$(e),n[6](null),n[7](null),o=!1,a()}}}function sh(n,e,t){let{onSceneInitialized:r}=e,i,s,o;Cs(()=>{t(2,o=Qu(s,i)),Wn.push(o),o.cube.solve(),t(2,o.dragEnabled=!0,o),Xu(),r(o)});const a=u=>{o&&o.cube.matchKeyToTurn(u)};function l(u){st[u?"unshift":"push"](()=>{i=u,t(0,i)})}function c(u){st[u?"unshift":"push"](()=>{s=u,t(1,s)})}return n.$$set=u=>{t(3,e=de(de({},e),ye(u))),"onSceneInitialized"in u&&t(4,r=u.onSceneInitialized)},e=ye(e),[i,s,o,e,r,a,l,c]}class oh extends ge{constructor(e){super(),pe(this,e,sh,ih,fe,{onSceneInitialized:4})}}const ah={CMLL:{cube:"3x3",inactive:[1,3,4,5,7,12,13,14,21,22,23,30,31,32,39,48]},F2L:{cube:"3x3",inactive:[0,1,2,3,5,6,7,8,9,12,15,29,32,35,36,39,42,45,48,51]},OLL:{cube:"3x3",inactive:[9,12,15,29,32,35,36,39,42,45,48,51]},PLL:{cube:"3x3",inactive:[]},ZBLL:{cube:"3x3",inactive:[]},"2x2 CLL":{cube:"2x2",inactive:[]},"2x2 EG1":{cube:"2x2",inactive:[]},"2x2 EG2":{cube:"2x2",inactive:[]}};async function lh(n,e,t,r,i,s,o,a){return cn("/createAlgSet",{uid:n,set:e,trainingAlgs:t,cube:r,inactiveStickers:i,moves:s,disregard:o,onlyOrientation:a})}async function ch(n,e){return cn("/getAlgSet",{uid:n,set:e})}async function uh(n,e){return cn("/updateAlgSet",{id:n,trainingAlgs:e})}function hh(n){var e,t,r;if(n.alg===null||n.alg===void 0)throw new Error("alg must be defined");if(n.moves===null||n.moves===void 0)throw new Error("moves must be defined");return{alg:n.alg,moves:n.moves,onlyOrientation:(e=n.onlyOrientation)!==null&&e!==void 0?e:[],disregard:(t=n.disregard)!==null&&t!==void 0?t:[],maxSolutions:(r=n.maxSolutions)!==null&&r!==void 0?r:10}}function dh(n){var e=hh(n);return new Promise(function(t){var r=new Worker(new URL("/assets/worker-f983b957.js",self.location));r.onmessage=function(i){var s=i.data,o=s.split(",");t(o),r.terminate()},r.onerror=function(i){console.log("Caught error"),console.error(i),r.terminate()},r.postMessage(e)})}let W={scene:null,algSet:null,preAUF:"",postAUF:"",orientation:Hn.get()};function jn(n){return Es(n,W.preAUF,W.postAUF)}function fh(n){const e=ri(W.preAUF),t=ri(W.postAUF);return Es(n,t,e)}function Es(n,e,t){e&&(n=`${e} ${n}`),t&&(n=`${n} ${t}`);let r=n.split(" ");const i=ti(r[0],r[1]),s=ti(r[r.length-2],r[r.length-1]);return r=r.slice(2,-2),r=i.concat(r).concat(s),r.join(" ")}function ti(n,e){if(n[0]!=="U"||e[0]!=="U")return[n,e];const t=(ni(n)+ni(e))%4;return t===0?[]:[ph(t)]}function ni(n){return n.endsWith("'")?3:n.endsWith("2")?2:1}function ph(n){return["","U","U2","U'"][n]}function ri(n){return n===""?"":n.endsWith("'")?n.slice(0,-1):n.endsWith("2")?n:`${n}'`}function ii(){return["","U","U2","U'"][Ke(4)]}function gh(n){W.scene=n}function si(){const n=W.algSet.trainingAlgs,e=n.map(i=>i.Score),t=Math.max(...e),r=new Array(t+1).fill(0);return e.forEach(i=>r[i]++),r.map((i,s)=>({reps:s,algs:i,ratio:Math.round(i/n.length*100)}))}function ks(){return W.algSet?.trainingAlgs?W.algSet.trainingAlgs[0].Alg:""}async function oi(n,e){const t=W.scene;if(!t){console.error("Scene not set. Have you called setScene()?");return}W.algSet?.name!==e&&(W.algSet=await ch(n,e),W.algSet.cube=="2x2"?(t.cube.setNumOfLayers(2),t.buffers=Vn(t),t.cube.solve()):W.algSet.cube=="3x3"&&(t.cube.setNumOfLayers(3),t.buffers=Vn(t),t.cube.solve()))}function mt(){let n=ks();W.preAUF=ii(),W.postAUF=ii();const e=W.scene;e.cube.solve(),e.cube.execAlg(W.orientation),W.algSet.inactive.forEach(r=>{Vt(e.cube.stickers[r],yu)});let t=jn(n);return e.cube.execAlgReverse(t),n}async function ai(n,e,t){if(n?Au(W.algSet.trainingAlgs):Ru(W.algSet.trainingAlgs),W.algSet.id===-1){const{trainingAlgs:r,cube:i,inactive:s,moves:o,disregard:a,onlyOrientation:l}=W.algSet,c=await lh(e,t,r,i,s,o,a,l);W.algSet.id=c.id}else{const{id:r,trainingAlgs:i}=W.algSet;uh(r,i)}return vh(),mt()}function mh(){return Object.keys(ah)}async function _h(){let n=ks();const e=await dh({alg:n,moves:"U U' F F' R R'",disregard:W.algSet.disregard,onlyOrientation:W.algSet.onlyOrientation});return Su(e)}function yh(n,e){return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate()}function Cn(){const n=en.get(),e=new Date(n.msSinceEpoch),t=new Date;return yh(e,t)||(n.count=0,n.msSinceEpoch=t.getTime(),en.set(n)),n.count}function vh(){const n=en.get();n.count++,en.set(n)}const li=[{label:"white green",value:""},{label:"white orange",value:"y'"},{label:"white blue",value:"y2"},{label:"white red",value:"y"},{label:"yellow green",value:"z2"},{label:"yellow orange",value:"z2 y"},{label:"yellow blue",value:"z2 y2"},{label:"yellow red",value:"z2 y'"},{label:"green yellow",value:"x"},{label:"green orange",value:"x y'"},{label:"green white",value:"x y2"},{label:"green red",value:"x y"},{label:"blue white",value:"x'"},{label:"blue orange",value:"x' y'"},{label:"blue yellow",value:"x' y2"},{label:"blue red",value:"x' y"},{label:"orange green",value:"z"},{label:"orange yellow",value:"z y'"},{label:"orange blue",value:"z y2"},{label:"orange white",value:"z y"},{label:"red green",value:"z'"},{label:"red white",value:"z' y'"},{label:"red blue",value:"z' y2"},{label:"red yellow",value:"z' y"}];let ci={get:Hn.get,set:n=>{W.orientation=n,Hn.set(n),mt()}};function bh(n){let e,t;return e=new ke({props:{name:"x",style:"padding: 4px;"}}),e.$on("click",function(){zn(n[0])&&n[0].apply(this,arguments)}),{c(){X(e.$$.fragment)},m(r,i){q(e,r,i),t=!0},p(r,i){n=r},i(r){t||(L(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){J(e,r)}}}function wh(n){let e,t,r,i,s,o,a,l;return s=new gt({props:{hovBackground:"var(--gray-500)",borderRadius:"4px",$$slots:{default:[bh]},$$scope:{ctx:n}}}),{c(){e=_("div"),t=_("div"),r=_("h5"),r.textContent="Menu",i=E(),X(s.$$.fragment),o=E(),a=_("div"),a.innerHTML=`<div style="height: 8px;"></div> 
        <a href="learn.html"><button style="width: 100%;">Learn</button></a> 
        <div style="height: 8px;"></div> 
        <a href="play.html"><button style="width: 100%;">Play</button></a> 
        <div style="height: 8px;"></div> 
        <a href="train.html"><button style="width: 100%;">Train</button></a> 
        <div style="height: 8px;"></div> 
        <a href="cuble.html"><button style="width: 100%;">Cuble</button></a>`,T(r,"color","white"),T(r,"font-size","1.2rem"),O(t,"class","row"),T(t,"justify-content","space-between"),T(t,"padding","8px"),T(a,"display","flex"),T(a,"flex-direction","column"),T(a,"padding","0 8px"),O(e,"style",n[1])},m(c,u){V(c,e,u),d(e,t),d(t,r),d(t,i),q(s,t,null),d(e,o),d(e,a),l=!0},p(c,[u]){const h={};u&9&&(h.$$scope={dirty:u,ctx:c}),s.$set(h),(!l||u&2)&&O(e,"style",c[1])},i(c){l||(L(s.$$.fragment,c),l=!0)},o(c){B(s.$$.fragment,c),l=!1},d(c){c&&$(e),J(s)}}}function Ih(n,e,t){let r,{open:i}=e,{onClose:s=()=>{}}=e;return n.$$set=o=>{"open"in o&&t(2,i=o.open),"onClose"in o&&t(0,s=o.onClose)},n.$$.update=()=>{n.$$.dirty&4&&t(1,r=`position: fixed; top: 0; left: 0; width: 300px; height: 100%; background-color: var(--gray-700); z-index: 10; ${i?"transform: translateX(0); transition: transform 0.3s ease-in-out":"transform: translateX(-100%); transition: transform 0.3s ease-in-out"}`)},[s,r,i]}class Eh extends ge{constructor(e){super(),pe(this,e,Ih,wh,fe,{open:2,onClose:0})}}function ui(n,e,t){const r=n.slice();return r[45]=e[t],r}function hi(n,e,t){const r=n.slice();return r[48]=e[t],r}function di(n,e,t){const r=n.slice();return r[42]=e[t],r}function fi(n){let e,t,r,i,s,o,a;return t=new ke({props:{class:"icon",style:"padding: 8px;",name:"chart"}}),t.$on("click",n[18]),i=new ke({props:{class:"icon",style:"padding: 8px;",name:"profile"}}),i.$on("click",n[19]),o=new ke({props:{class:"icon",style:"padding: 8px;",name:"settings"}}),o.$on("click",n[20]),{c(){e=_("div"),X(t.$$.fragment),r=E(),X(i.$$.fragment),s=E(),X(o.$$.fragment),O(e,"id","iconContainer"),O(e,"class","row")},m(l,c){V(l,e,c),q(t,e,null),d(e,r),q(i,e,null),d(e,s),q(o,e,null),a=!0},p:F,i(l){a||(L(t.$$.fragment,l),L(i.$$.fragment,l),L(o.$$.fragment,l),a=!0)},o(l){B(t.$$.fragment,l),B(i.$$.fragment,l),B(o.$$.fragment,l),a=!1},d(l){l&&$(e),J(t),J(i),J(o)}}}function kh(n){let e,t,r,i,s,o,a,l,c,u,h,f,p,g,b,m,y,N,A,w,U,k,I,D,v,z,ne,H,P,Z,re,Te,Xe;i=new oh({props:{onSceneInitialized:n[27]}}),c=new gt({props:{background:"var(--gray-500)",hovBackground:"var(--gray-700)",borderRadius:"8px",$$slots:{default:[Th]},$$scope:{ctx:n}}}),h=new gt({props:{background:"var(--red-500)",hovBackground:"var(--red-700)",borderRadius:"8px",$$slots:{default:[Ah]},$$scope:{ctx:n}}}),p=new gt({props:{background:"var(--green-500)",hovBackground:"var(--green-700)",borderRadius:"8px",$$slots:{default:[Rh]},$$scope:{ctx:n}}});function $e(S,ee){return S[4]?Oh:Ch}let M=$e(n),Y=M(n),te=n[9]&&pi(n);const He=[Mh,Ph,Dh],le=[];function ve(S,ee){return S[5]===0?0:S[5]===1?1:S[5]===2?2:-1}return~(H=ve(n))&&(P=le[H]=He[H](n)),{c(){e=_("div"),t=_("div"),r=E(),X(i.$$.fragment),s=E(),o=_("div"),a=E(),l=_("div"),X(c.$$.fragment),u=E(),X(h.$$.fragment),f=E(),X(p.$$.fragment),g=E(),b=_("div"),m=E(),y=_("button"),Y.c(),N=E(),te&&te.c(),A=E(),w=_("div"),U=E(),k=_("p"),I=ie("cases today: "),D=ie(n[11]),v=E(),z=_("div"),ne=E(),P&&P.c(),Z=Ts(),T(t,"height","16px"),T(o,"height","16px"),O(l,"class","row"),T(l,"gap","16px"),T(b,"height","16px"),O(y,"class","btn-primary"),T(w,"flex-grow","1"),T(z,"height","16px"),O(e,"class","col"),T(e,"width","100%"),T(e,"height","100%")},m(S,ee){V(S,e,ee),d(e,t),d(e,r),q(i,e,null),d(e,s),d(e,o),d(e,a),d(e,l),q(c,l,null),d(l,u),q(h,l,null),d(l,f),q(p,l,null),d(e,g),d(e,b),d(e,m),d(e,y),Y.m(y,null),d(e,N),te&&te.m(e,null),d(e,A),d(e,w),d(e,U),d(e,k),d(k,I),d(k,D),d(e,v),d(e,z),V(S,ne,ee),~H&&le[H].m(S,ee),V(S,Z,ee),re=!0,Te||(Xe=se(y,"click",n[31]),Te=!0)},p(S,ee){const un={};ee[0]&193&&(un.onSceneInitialized=S[27]),i.$set(un);const hn={};ee[0]&144|ee[1]&1048576&&(hn.$$scope={dirty:ee,ctx:S}),c.$set(hn);const K={};ee[0]&2257|ee[1]&1048576&&(K.$$scope={dirty:ee,ctx:S}),h.$set(K);const Pt={};ee[0]&2257|ee[1]&1048576&&(Pt.$$scope={dirty:ee,ctx:S}),p.$set(Pt),M===(M=$e(S))&&Y?Y.p(S,ee):(Y.d(1),Y=M(S),Y&&(Y.c(),Y.m(y,null))),S[9]?te?te.p(S,ee):(te=pi(S),te.c(),te.m(e,A)):te&&(te.d(1),te=null),(!re||ee[0]&2048)&&kt(D,S[11]);let dn=H;H=ve(S),H===dn?~H&&le[H].p(S,ee):(P&&(Kt(),B(le[dn],1,1,()=>{le[dn]=null}),Gt()),~H?(P=le[H],P?P.p(S,ee):(P=le[H]=He[H](S),P.c()),L(P,1),P.m(Z.parentNode,Z)):P=null)},i(S){re||(L(i.$$.fragment,S),L(c.$$.fragment,S),L(h.$$.fragment,S),L(p.$$.fragment,S),L(P),re=!0)},o(S){B(i.$$.fragment,S),B(c.$$.fragment,S),B(h.$$.fragment,S),B(p.$$.fragment,S),B(P),re=!1},d(S){S&&$(e),J(i),J(c),J(h),J(p),Y.d(),te&&te.d(),S&&$(ne),~H&&le[H].d(S),S&&$(Z),Te=!1,Xe()}}}function Sh(n){let e,t,r,i,s,o,a,l,c,u,h,f,p,g,b,m,y,N;const A=[Uh,Bh],w=[];function U(k,I){return k[0]?0:1}return m=U(n),y=w[m]=A[m](n),{c(){e=_("div"),t=_("div"),r=E(),i=_("h1"),i.textContent="Algorithm Trainer",s=E(),o=_("div"),a=E(),l=_("p"),l.textContent="Learn algorithms at lightning speed",c=E(),u=_("div"),h=E(),f=_("div"),f.innerHTML=`<h2>1. Memorize faster</h2> 
          <div style="height: 8px"></div> 
          <ul><li>Get an algorithm right, and you&#39;ll see it less often.</li> 
            <div style="height: 8px"></div> 
            <li>Get an algorithm wrong, and you&#39;ll see it more often.</li></ul> 
          <div style="height: 16px"></div> 
          <h2>2. Virtual Cube</h2> 
          <div style="height: 8px"></div> 
          <ul><li>Never scramble a cube again</li> 
            <div style="height: 8px"></div> 
            <li>Practice anywhere, anytime</li></ul>`,p=E(),g=_("div"),b=E(),y.c(),T(t,"height","8px"),T(o,"height","16px"),O(l,"class","text-gradient"),T(l,"font-weight","bold"),T(l,"font-size","1.2rem"),T(l,"background-image","linear-gradient(90deg, var(--blue-400), var(--purple-400))"),T(u,"height","16px"),T(g,"height","24px"),O(e,"class","col w-full h-full")},m(k,I){V(k,e,I),d(e,t),d(e,r),d(e,i),d(e,s),d(e,o),d(e,a),d(e,l),d(e,c),d(e,u),d(e,h),d(e,f),d(e,p),d(e,g),d(e,b),w[m].m(e,null),N=!0},p(k,I){let D=m;m=U(k),m===D?w[m].p(k,I):(Kt(),B(w[D],1,1,()=>{w[D]=null}),Gt(),y=w[m],y?y.p(k,I):(y=w[m]=A[m](k),y.c()),L(y,1),y.m(e,null))},i(k){N||(L(y),N=!0)},o(k){B(y),N=!1},d(k){k&&$(e),w[m].d()}}}function Th(n){let e,t;return e=new ke({props:{name:"retry",style:`
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);`}}),e.$on("click",n[28]),{c(){X(e.$$.fragment)},m(r,i){q(e,r,i),t=!0},p:F,i(r){t||(L(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){J(e,r)}}}function Ah(n){let e,t;return e=new ke({props:{name:"sad",style:`
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);`}}),e.$on("click",n[29]),{c(){X(e.$$.fragment)},m(r,i){q(e,r,i),t=!0},p:F,i(r){t||(L(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){J(e,r)}}}function Rh(n){let e,t;return e=new ke({props:{name:"happy",style:`
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);`}}),e.$on("click",n[30]),{c(){X(e.$$.fragment)},m(r,i){q(e,r,i),t=!0},p:F,i(r){t||(L(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){J(e,r)}}}function Ch(n){let e;return{c(){e=ie("show solution")},m(t,r){V(t,e,r)},p:F,d(t){t&&$(e)}}}function Oh(n){let e,t=jn(n[7])+"",r;return{c(){e=ie("solution: "),r=ie(t)},m(i,s){V(i,e,s),V(i,r,s)},p(i,s){s[0]&128&&t!==(t=jn(i[7])+"")&&kt(r,t)},d(i){i&&$(e),i&&$(r)}}}function pi(n){let e,t,r,i,s;return{c(){e=_("div"),t=E(),r=_("p"),i=ie("scramble: "),s=ie(n[10]),T(e,"height","16px")},m(o,a){V(o,e,a),V(o,t,a),V(o,r,a),d(r,i),d(r,s)},p(o,a){a[0]&1024&&kt(s,o[10])},d(o){o&&$(e),o&&$(t),o&&$(r)}}}function Dh(n){let e,t;return e=new or({props:{title:"Settings",close:n[40],$$slots:{default:[Lh]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},m(r,i){q(e,r,i),t=!0},p(r,i){const s={};i[0]&961|i[1]&1048576&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(L(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){J(e,r)}}}function Ph(n){let e,t;return e=new or({props:{title:"Profile",close:n[34],$$slots:{default:[Nh]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},m(r,i){q(e,r,i),t=!0},p(r,i){const s={};i[0]&9|i[1]&1048576&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(L(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){J(e,r)}}}function Mh(n){let e,t;return e=new or({props:{title:"Stats",close:n[32],$$slots:{default:[xh]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},m(r,i){q(e,r,i),t=!0},p(r,i){const s={};i[1]&1048576&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(L(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){J(e,r)}}}function gi(n){let e,t=n[48]+"",r;return{c(){e=_("option"),r=ie(t),e.__value=n[48],e.value=e.__value},m(i,s){V(i,e,s),d(e,r)},p:F,d(i){i&&$(e)}}}function mi(n){let e,t=n[45].label+"",r;return{c(){e=_("option"),r=ie(t),e.__value=n[45].value,e.value=e.__value},m(i,s){V(i,e,s),d(e,r)},p:F,d(i){i&&$(e)}}}function Lh(n){let e,t,r,i,s,o,a,l,c,u,h,f,p,g,b,m,y,N,A=n[14],w=[];for(let I=0;I<A.length;I+=1)w[I]=gi(hi(n,A,I));let U=li,k=[];for(let I=0;I<U.length;I+=1)k[I]=mi(ui(n,U,I));return{c(){e=_("div"),t=_("p"),t.textContent="algorithm set",r=E(),i=_("select");for(let I=0;I<w.length;I+=1)w[I].c();s=E(),o=_("div"),a=E(),l=_("p"),l.textContent="orientation",c=E(),u=_("select");for(let I=0;I<k.length;I+=1)k[I].c();h=E(),f=_("div"),p=E(),g=_("p"),g.textContent="show scramble",b=E(),m=_("input"),n[6]===void 0&&yt(()=>n[35].call(i)),T(o,"height","16px"),n[8]===void 0&&yt(()=>n[37].call(u)),T(f,"height","16px"),O(m,"type","checkbox"),T(e,"padding","16px")},m(I,D){V(I,e,D),d(e,t),d(e,r),d(e,i);for(let v=0;v<w.length;v+=1)w[v].m(i,null);Mt(i,n[6]),d(e,s),d(e,o),d(e,a),d(e,l),d(e,c),d(e,u);for(let v=0;v<k.length;v+=1)k[v].m(u,null);Mt(u,n[8]),d(e,h),d(e,f),d(e,p),d(e,g),d(e,b),d(e,m),m.checked=n[9],y||(N=[se(i,"change",n[35]),se(i,"change",n[36]),se(u,"change",n[37]),se(u,"change",n[15]),se(m,"change",n[38]),se(m,"change",n[39])],y=!0)},p(I,D){if(D[0]&16384){A=I[14];let v;for(v=0;v<A.length;v+=1){const z=hi(I,A,v);w[v]?w[v].p(z,D):(w[v]=gi(z),w[v].c(),w[v].m(i,null))}for(;v<w.length;v+=1)w[v].d(1);w.length=A.length}if(D[0]&16448&&Mt(i,I[6]),D&0){U=li;let v;for(v=0;v<U.length;v+=1){const z=ui(I,U,v);k[v]?k[v].p(z,D):(k[v]=mi(z),k[v].c(),k[v].m(u,null))}for(;v<k.length;v+=1)k[v].d(1);k.length=U.length}D[0]&256&&Mt(u,I[8]),D[0]&512&&(m.checked=I[9])},d(I){I&&$(e),On(w,I),On(k,I),y=!1,ot(N)}}}function Nh(n){let e,t,r,i=n[0].email+"",s,o,a,l,c;return{c(){e=_("div"),t=_("p"),r=ie("signed in as "),s=ie(i),o=E(),a=_("button"),a.textContent="Sign Out",O(a,"class","btn-primary"),T(e,"padding","12px")},m(u,h){V(u,e,h),d(e,t),d(t,r),d(t,s),d(e,o),d(e,a),l||(c=se(a,"click",n[33]),l=!0)},p(u,h){h[0]&1&&i!==(i=u[0].email+"")&&kt(s,i)},d(u){u&&$(e),l=!1,c()}}}function _i(n){let e,t,r=n[42].reps+"",i,s,o,a=n[42].algs+"",l,c,u,h=n[42].ratio+"",f,p,g;return{c(){e=_("tr"),t=_("td"),i=ie(r),s=E(),o=_("td"),l=ie(a),c=E(),u=_("td"),f=ie(h),p=ie("%"),g=E()},m(b,m){V(b,e,m),d(e,t),d(t,i),d(e,s),d(e,o),d(o,l),d(e,c),d(e,u),d(u,f),d(u,p),d(e,g)},p:F,d(b){b&&$(e)}}}function xh(n){let e,t,r,i,s=si(),o=[];for(let a=0;a<s.length;a+=1)o[a]=_i(di(n,s,a));return{c(){e=_("table"),t=_("thead"),t.innerHTML=`<tr><th>repetitions</th> 
                <th>algs</th> 
                <th>%</th></tr>`,r=E(),i=_("tbody");for(let a=0;a<o.length;a+=1)o[a].c();T(e,"margin","16px auto")},m(a,l){V(a,e,l),d(e,t),d(e,r),d(e,i);for(let c=0;c<o.length;c+=1)o[c].m(i,null)},p(a,l){if(l&0){s=si();let c;for(c=0;c<s.length;c+=1){const u=di(a,s,c);o[c]?o[c].p(u,l):(o[c]=_i(u),o[c].c(),o[c].m(i,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=s.length}},d(a){a&&$(e),On(o,a)}}}function Bh(n){let e,t,r,i,s,o,a,l,c,u,h,f,p,g,b,m,y,N,A,w,U,k,I,D,v,z,ne,H,P,Z;t=new ru({props:{callback:n[22]}});function re(M){n[23](M)}let Te={class:"mt-4"};n[1]!==void 0&&(Te.value=n[1]),g=new ou({props:Te}),st.push(()=>hr(g,"value",re));function Xe(M){n[24](M)}let $e={class:"mt-4"};return n[2]!==void 0&&($e.value=n[2]),A=new cu({props:$e}),st.push(()=>hr(A,"value",Xe)),v=new Xc({props:{email:n[1],password:n[2],callback:n[25]}}),P=new eu({props:{email:n[1],password:n[2],callback:n[26]}}),{c(){e=_("div"),X(t.$$.fragment),r=E(),i=_("div"),s=E(),o=_("div"),a=E(),l=_("div"),c=E(),u=_("p"),u.textContent="Or use email and password",h=E(),f=_("div"),p=E(),X(g.$$.fragment),m=E(),y=_("div"),N=E(),X(A.$$.fragment),U=E(),k=_("div"),I=E(),D=_("div"),X(v.$$.fragment),z=E(),ne=_("div"),H=E(),X(P.$$.fragment),T(i,"height","16px"),T(o,"width","100%"),T(o,"height","2px"),T(o,"background-color","var(--gray-600)"),T(l,"height","16px"),T(f,"height","12px"),T(y,"height","16px"),T(k,"height","32px"),T(ne,"width","16px"),O(D,"class","row"),O(e,"class","col"),T(e,"border-radius","16px"),T(e,"padding","16px"),T(e,"box-shadow","0 0 4px lightgray")},m(M,Y){V(M,e,Y),q(t,e,null),d(e,r),d(e,i),d(e,s),d(e,o),d(e,a),d(e,l),d(e,c),d(e,u),d(e,h),d(e,f),d(e,p),q(g,e,null),d(e,m),d(e,y),d(e,N),q(A,e,null),d(e,U),d(e,k),d(e,I),d(e,D),q(v,D,null),d(D,z),d(D,ne),d(D,H),q(P,D,null),Z=!0},p(M,Y){const te={};Y[0]&1&&(te.callback=M[22]),t.$set(te);const He={};!b&&Y[0]&2&&(b=!0,He.value=M[1],ur(()=>b=!1)),g.$set(He);const le={};!w&&Y[0]&4&&(w=!0,le.value=M[2],ur(()=>w=!1)),A.$set(le);const ve={};Y[0]&2&&(ve.email=M[1]),Y[0]&4&&(ve.password=M[2]),Y[0]&1&&(ve.callback=M[25]),v.$set(ve);const S={};Y[0]&2&&(S.email=M[1]),Y[0]&4&&(S.password=M[2]),Y[0]&1&&(S.callback=M[26]),P.$set(S)},i(M){Z||(L(t.$$.fragment,M),L(g.$$.fragment,M),L(A.$$.fragment,M),L(v.$$.fragment,M),L(P.$$.fragment,M),Z=!0)},o(M){B(t.$$.fragment,M),B(g.$$.fragment,M),B(A.$$.fragment,M),B(v.$$.fragment,M),B(P.$$.fragment,M),Z=!1},d(M){M&&$(e),J(t),J(g),J(A),J(v),J(P)}}}function Uh(n){let e,t,r;return{c(){e=_("button"),e.textContent="Start Training"},m(i,s){V(i,e,s),t||(r=se(e,"click",n[21]),t=!0)},p:F,i:F,o:F,d(i){i&&$(e),t=!1,r()}}}function Fh(n){let e,t,r,i,s,o,a,l,c,u,h;r=new ke({props:{class:"icon",style:"padding: 8px;",name:"menu"}}),r.$on("click",n[17]);let f=n[3]==="train"&&fi(n);const p=[Sh,kh],g=[];function b(m,y){return m[3]==="landing"?0:m[3]==="train"?1:-1}return~(a=b(n))&&(l=g[a]=p[a](n)),u=new Eh({props:{open:n[12],onClose:n[41]}}),{c(){e=_("main"),t=_("nav"),X(r.$$.fragment),i=E(),f&&f.c(),s=E(),o=_("div"),l&&l.c(),c=E(),X(u.$$.fragment),O(t,"class","navbar"),T(t,"justify-content","space-between"),O(o,"class","row"),T(o,"justify-content","center"),T(o,"align-items","start"),T(o,"width","100%"),T(o,"height","100%"),T(o,"position","relative"),O(e,"class","col"),T(e,"width","100%"),T(e,"height","100%")},m(m,y){V(m,e,y),d(e,t),q(r,t,null),d(t,i),f&&f.m(t,null),d(e,s),d(e,o),~a&&g[a].m(o,null),d(e,c),q(u,e,null),h=!0},p(m,y){m[3]==="train"?f?(f.p(m,y),y[0]&8&&L(f,1)):(f=fi(m),f.c(),L(f,1),f.m(t,null)):f&&(Kt(),B(f,1,1,()=>{f=null}),Gt());let N=a;a=b(m),a===N?~a&&g[a].p(m,y):(l&&(Kt(),B(g[N],1,1,()=>{g[N]=null}),Gt()),~a?(l=g[a],l?l.p(m,y):(l=g[a]=p[a](m),l.c()),L(l,1),l.m(o,null)):l=null);const A={};y[0]&4096&&(A.open=m[12]),y[0]&4096&&(A.onClose=m[41]),u.$set(A)},i(m){h||(L(r.$$.fragment,m),L(f),L(l),L(u.$$.fragment,m),h=!0)},o(m){B(r.$$.fragment,m),B(f),B(l),B(u.$$.fragment,m),h=!1},d(m){m&&$(e),J(r),f&&f.d(),~a&&g[a].d(),J(u)}}}function $h(n,e,t){let r=jc(),i="",s="",o="landing",a=!1,l=-1;function c(K){l===K?t(5,l=-1):t(5,l=K)}const u=mh();let h,f,p=ci.get();function g(K){const Pt=K.target.value;ci.set(Pt)}let b=Uc(),m="loading...";function y(){b&&(t(10,m="loading..."),_h().then(K=>{t(10,m=fh(K))}))}let N=Cn(),A=!1;const w=()=>t(12,A=!0),U=()=>c(0),k=()=>c(1),I=()=>c(2),D=()=>t(3,o="train"),v=K=>t(0,r=K);function z(K){i=K,t(1,i)}function ne(K){s=K,t(2,s)}const H=K=>t(0,r=K),P=K=>t(0,r=K),Z=K=>{gh(K),t(6,h=Vr.get()),h||t(6,h=u[0]),oi(r.uid,h).then(()=>{t(7,f=mt()),y()})},re=()=>{t(7,f=mt()),t(4,a=!1)},Te=()=>{ai(!1,r.uid,h).then(K=>{t(7,f=K),t(4,a=!1),t(11,N=Cn()),y()})},Xe=()=>{ai(!0,r.uid,h).then(K=>{t(7,f=K),t(4,a=!1),t(11,N=Cn()),y()})},$e=()=>t(4,a=!a),M=()=>c(-1),Y=()=>{qc(),t(3,o="landing"),t(0,r=null)},te=()=>c(-1);function He(){h=cr(this),t(6,h),t(14,u)}const le=()=>{oi(r.uid,h).then(()=>{t(7,f=mt()),y()}),Vr.set(h)};function ve(){p=cr(this),t(8,p)}function S(){b=this.checked,t(9,b)}return[r,i,s,o,a,l,h,f,p,b,m,N,A,c,u,g,y,w,U,k,I,D,v,z,ne,H,P,Z,re,Te,Xe,$e,M,Y,te,He,le,ve,S,()=>{y(),Fc(b)},()=>c(-1),()=>t(12,A=!1)]}class Hh extends ge{constructor(e){super(),pe(this,e,$h,Fh,fe,{},null,[-1,-1])}}new Hh({target:document.getElementById("app")});
