var Ji=Object.defineProperty;var Yi=(n,e,t)=>e in n?Ji(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var G=(n,e,t)=>(Yi(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function P(){}function me(n,e){for(const t in e)n[t]=e[t];return n}function Vr(n){return n()}function Vn(){return Object.create(null)}function Ye(n){n.forEach(Vr)}function kn(n){return typeof n=="function"}function ae(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Xi(n){return Object.keys(n).length===0}function Qi(n,e,t,r){if(n){const i=Wr(n,e,t,r);return n[0](i)}}function Wr(n,e,t,r){return n[1]&&r?me(t.ctx.slice(),n[1](r(e))):t.ctx}function Zi(n,e,t,r){if(n[2]&&r){const i=n[2](r(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function es(n,e,t,r,i,s){if(i){const o=Wr(e,t,r,s);n.p(o,i)}}function ts(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function De(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function Wn(n){return n??""}function y(n,e){n.appendChild(e)}function V(n,e,t){n.insertBefore(e,t||null)}function $(n){n.parentNode&&n.parentNode.removeChild(n)}function ns(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function w(n){return document.createElement(n)}function oe(n){return document.createTextNode(n)}function D(){return oe(" ")}function rs(){return oe("")}function ne(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function E(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function is(n){return Array.from(n.childNodes)}function Wt(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Pt(n,e){n.value=e??""}function O(n,e,t,r){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}function jn(n,e){for(let t=0;t<n.options.length;t+=1){const r=n.options[t];if(r.__value===e){r.selected=!0;return}}n.selectedIndex=-1}function ss(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}let at;function st(n){at=n}function os(){if(!at)throw new Error("Function called outside component initialization");return at}function as(n){os().$$.on_mount.push(n)}function jr(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const je=[],Je=[],Et=[],pn=[],cs=Promise.resolve();let gn=!1;function ls(){gn||(gn=!0,cs.then(zr))}function Mt(n){Et.push(n)}function zn(n){pn.push(n)}const Xt=new Set;let He=0;function zr(){if(He!==0)return;const n=at;do{try{for(;He<je.length;){const e=je[He];He++,st(e),us(e.$$)}}catch(e){throw je.length=0,He=0,e}for(st(null),je.length=0,He=0;Je.length;)Je.pop()();for(let e=0;e<Et.length;e+=1){const t=Et[e];Xt.has(t)||(Xt.add(t),t())}Et.length=0}while(je.length);for(;pn.length;)pn.pop()();gn=!1,Xt.clear(),st(n)}function us(n){if(n.fragment!==null){n.update(),Ye(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Mt)}}const St=new Set;let Me;function Lt(){Me={r:0,c:[],p:Me}}function Nt(){Me.r||Ye(Me.c),Me=Me.p}function N(n,e){n&&n.i&&(St.delete(n),n.i(e))}function U(n,e,t,r){if(n&&n.o){if(St.has(n))return;St.add(n),Me.c.push(()=>{St.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function Gn(n,e,t){const r=n.$$.props[e];r!==void 0&&(n.$$.bound[r]=t,t(n.$$.ctx[r]))}function Q(n){n&&n.c()}function Y(n,e,t,r){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),r||Mt(()=>{const o=n.$$.on_mount.map(Vr).filter(kn);n.$$.on_destroy?n.$$.on_destroy.push(...o):Ye(o),n.$$.on_mount=[]}),s.forEach(Mt)}function X(n,e){const t=n.$$;t.fragment!==null&&(Ye(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function hs(n,e){n.$$.dirty[0]===-1&&(je.push(n),ls(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ce(n,e,t,r,i,s,o,a=[-1]){const c=at;st(n);const l=n.$$={fragment:null,ctx:[],props:s,update:P,not_equal:i,bound:Vn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Vn(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let h=!1;if(l.ctx=t?t(n,e.props||{},(u,d,...f)=>{const p=f.length?f[0]:d;return l.ctx&&i(l.ctx[u],l.ctx[u]=p)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](p),h&&hs(n,u)),d}):[],l.update(),h=!0,Ye(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const u=is(e.target);l.fragment&&l.fragment.l(u),u.forEach($)}else l.fragment&&l.fragment.c();e.intro&&N(n.$$.fragment),Y(n,e.target,e.anchor,e.customElement),zr()}st(c)}class le{$destroy(){X(this,1),this.$destroy=P}$on(e,t){if(!kn(t))return P;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Xi(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
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
 */const Gr=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ds=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Kr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[h],t[u],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ds(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||u==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),u!==64){const p=l<<6&192|u;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},fs=function(n){const e=Gr(n);return Kr.encodeByteArray(e,!0)},qr=function(n){return fs(n).replace(/\./g,"")},ps=function(n){try{return Kr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ms=()=>gs().__FIREBASE_DEFAULTS__,_s=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ys=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ps(n[1]);return e&&JSON.parse(e)},vs=()=>{try{return ms()||_s()||ys()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bs=()=>{var n;return(n=vs())===null||n===void 0?void 0:n.config};/**
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
 */class ws{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}function Is(){try{return typeof indexedDB=="object"}catch{return!1}}function Es(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ss="FirebaseError";let An=class Jr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ss,Object.setPrototypeOf(this,Jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}},Yr=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ts(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new An(i,a,r)}};function Ts(n,e){return n.replace(ks,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ks=/\{\$([^}]+)}/g;function mn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Kn(s)&&Kn(o)){if(!mn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Kn(n){return n!==null&&typeof n=="object"}let xt=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Pe="[DEFAULT]";/**
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
 */class As{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ws;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cs(e))try{this.getOrInitializeService({instanceIdentifier:Pe})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pe){return this.instances.has(e)}getOptions(e=Pe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rs(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pe){return this.component?this.component.multipleInstances?e:Pe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rs(n){return n===Pe?void 0:n}function Cs(n){return n.instantiationMode==="EAGER"}/**
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
 */class Os{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new As(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Ds={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Ps=B.INFO,Ms={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Ls=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Ms[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Ns=class{constructor(e){this.name=e,this._logLevel=Ps,this._logHandler=Ls,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ds[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}};const xs=(n,e)=>e.some(t=>n instanceof t);let qn,Jn;function Us(){return qn||(qn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bs(){return Jn||(Jn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xr=new WeakMap,_n=new WeakMap,Qr=new WeakMap,Qt=new WeakMap,Rn=new WeakMap;function Fs(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ce(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Xr.set(t,n)}).catch(()=>{}),Rn.set(e,n),e}function $s(n){if(_n.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});_n.set(n,e)}let yn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _n.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Qr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ce(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Hs(n){yn=n(yn)}function Vs(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Zt(this),e,...t);return Qr.set(r,e.sort?e.sort():[e]),Ce(r)}:Bs().includes(n)?function(...e){return n.apply(Zt(this),e),Ce(Xr.get(this))}:function(...e){return Ce(n.apply(Zt(this),e))}}function Ws(n){return typeof n=="function"?Vs(n):(n instanceof IDBTransaction&&$s(n),xs(n,Us())?new Proxy(n,yn):n)}function Ce(n){if(n instanceof IDBRequest)return Fs(n);if(Qt.has(n))return Qt.get(n);const e=Ws(n);return e!==n&&(Qt.set(n,e),Rn.set(e,n)),e}const Zt=n=>Rn.get(n);function js(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Ce(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ce(o.result),c.oldVersion,c.newVersion,Ce(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const zs=["get","getKey","getAll","getAllKeys","count"],Gs=["put","add","delete","clear"],en=new Map;function Yn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(en.get(e))return en.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Gs.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zs.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return en.set(e,s),s}Hs(n=>({...n,get:(e,t,r)=>Yn(e,t)||n.get(e,t,r),has:(e,t)=>!!Yn(e,t)||n.has(e,t)}));/**
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
 */class Ks{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qs(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function qs(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vn="@firebase/app",Xn="0.9.1";/**
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
 */const Ue=new Ns("@firebase/app"),Js="@firebase/app-compat",Ys="@firebase/analytics-compat",Xs="@firebase/analytics",Qs="@firebase/app-check-compat",Zs="@firebase/app-check",eo="@firebase/auth",to="@firebase/auth-compat",no="@firebase/database",ro="@firebase/database-compat",io="@firebase/functions",so="@firebase/functions-compat",oo="@firebase/installations",ao="@firebase/installations-compat",co="@firebase/messaging",lo="@firebase/messaging-compat",uo="@firebase/performance",ho="@firebase/performance-compat",fo="@firebase/remote-config",po="@firebase/remote-config-compat",go="@firebase/storage",mo="@firebase/storage-compat",_o="@firebase/firestore",yo="@firebase/firestore-compat",vo="firebase",bo="9.16.0";/**
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
 */const bn="[DEFAULT]",wo={[vn]:"fire-core",[Js]:"fire-core-compat",[Xs]:"fire-analytics",[Ys]:"fire-analytics-compat",[Zs]:"fire-app-check",[Qs]:"fire-app-check-compat",[eo]:"fire-auth",[to]:"fire-auth-compat",[no]:"fire-rtdb",[ro]:"fire-rtdb-compat",[io]:"fire-fn",[so]:"fire-fn-compat",[oo]:"fire-iid",[ao]:"fire-iid-compat",[co]:"fire-fcm",[lo]:"fire-fcm-compat",[uo]:"fire-perf",[ho]:"fire-perf-compat",[fo]:"fire-rc",[po]:"fire-rc-compat",[go]:"fire-gcs",[mo]:"fire-gcs-compat",[_o]:"fire-fst",[yo]:"fire-fst-compat","fire-js":"fire-js",[vo]:"fire-js-all"};/**
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
 */const Ut=new Map,wn=new Map;function Io(n,e){try{n.container.addComponent(e)}catch(t){Ue.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ct(n){const e=n.name;if(wn.has(e))return Ue.debug(`There were multiple attempts to register component ${e}.`),!1;wn.set(e,n);for(const t of Ut.values())Io(t,n);return!0}function Zr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Eo={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Oe=new Yr("app","Firebase",Eo);/**
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
 */class So{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oe.create("app-deleted",{appName:this._name})}}/**
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
 */const jt=bo;function ei(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Oe.create("bad-app-name",{appName:String(i)});if(t||(t=bs()),!t)throw Oe.create("no-options");const s=Ut.get(i);if(s){if(mn(t,s.options)&&mn(r,s.config))return s;throw Oe.create("duplicate-app",{appName:i})}const o=new Os(i);for(const c of wn.values())o.addComponent(c);const a=new So(t,r,o);return Ut.set(i,a),a}function To(n=bn){const e=Ut.get(n);if(!e&&n===bn)return ei();if(!e)throw Oe.create("no-app",{appName:n});return e}function ze(n,e,t){var r;let i=(r=wo[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ue.warn(a.join(" "));return}ct(new xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ko="firebase-heartbeat-database",Ao=1,lt="firebase-heartbeat-store";let tn=null;function ti(){return tn||(tn=js(ko,Ao,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(lt)}}}).catch(n=>{throw Oe.create("idb-open",{originalErrorMessage:n.message})})),tn}async function Ro(n){try{return(await ti()).transaction(lt).objectStore(lt).get(ni(n))}catch(e){if(e instanceof An)Ue.warn(e.message);else{const t=Oe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ue.warn(t.message)}}}async function Qn(n,e){try{const r=(await ti()).transaction(lt,"readwrite");return await r.objectStore(lt).put(e,ni(n)),r.done}catch(t){if(t instanceof An)Ue.warn(t.message);else{const r=Oe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ue.warn(r.message)}}}function ni(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Co=1024,Oo=30*24*60*60*1e3;class Do{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Mo(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Oo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zn(),{heartbeatsToSend:t,unsentEntries:r}=Po(this._heartbeatsCache.heartbeats),i=qr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zn(){return new Date().toISOString().substring(0,10)}function Po(n,e=Co){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),er(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),er(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Mo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Is()?Es().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ro(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function er(n){return qr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Lo(n){ct(new xt("platform-logger",e=>new Ks(e),"PRIVATE")),ct(new xt("heartbeat",e=>new Do(e),"PRIVATE")),ze(vn,Xn,n),ze(vn,Xn,"esm2017"),ze("fire-js","")}Lo("");var No="firebase",xo="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(No,xo,"app");/**
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
 */const Uo=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Bo=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[h],t[u],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Uo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Bo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||u==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),u!==64){const p=l<<6&192|u;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},ri=function(n){try{return Fo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $o(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ho=()=>$o().__FIREBASE_DEFAULTS__,Vo=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Wo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ri(n[1]);return e&&JSON.parse(e)},ii=()=>{try{return Ho()||Vo()||Wo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jo=n=>{var e,t;return(t=(e=ii())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},si=n=>{var e;return(e=ii())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())}function Go(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ko(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qo(){const n=ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}/**
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
 */const Jo="FirebaseError";class Xe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Jo,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zt.prototype.create)}}class zt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Yo(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xe(i,a,r)}}function Yo(n,e){return n.replace(Xo,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Xo=/\{\$([^}]+)}/g;function Qo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function oi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(tr(s)&&tr(o)){if(!oi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function tr(n){return n!==null&&typeof n=="object"}/**
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
 */function ft(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function rt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Zo(n,e){const t=new ea(n,e);return t.subscribe.bind(t)}class ea{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ta(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=nn),i.error===void 0&&(i.error=nn),i.complete===void 0&&(i.complete=nn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ta(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function nn(){}/**
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
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const na={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},ra=x.INFO,ia={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},sa=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=ia[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oa{constructor(e){this.name=e,this._logLevel=ra,this._logHandler=sa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?na[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}function Cn(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}class nr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}function ai(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aa=ai,ci=new zt("auth","Firebase",ai());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new oa("@firebase/auth");function Tt(n,...e){rr.logLevel<=x.ERROR&&rr.error(`Auth (${jt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n,...e){throw On(n,...e)}function ue(n,...e){return On(n,...e)}function li(n,e,t){const r=Object.assign(Object.assign({},aa()),{[e]:t});return new zt("auth","Firebase",r).create(e,{appName:n.name})}function ca(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ie(n,"argument-error"),li(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function On(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ci.create(n,...e)}function I(n,e,...t){if(!n)throw On(e,...t)}function pe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Tt(e),new Error(e)}function _e(n,e){n||pe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Map;function ge(n){_e(n instanceof Function,"Expected a class definition");let e=ir.get(n);return e?(_e(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ir.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n,e){const t=Zr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(oi(s,e??{}))return i;ie(i,"already-initialized")}return t.initialize({options:e})}function ua(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ha(){return sr()==="http:"||sr()==="https:"}function sr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ha()||Go()||"connection"in navigator)?navigator.onLine:!0}function fa(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.shortDelay=e,this.longDelay=t,_e(t>e,"Short delay should be less than long delay!"),this.isMobile=zo()||Ko()}get(){return da()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,e){_e(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new pt(3e4,6e4);function gt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function mt(n,e,t,r,i={}){return hi(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ft(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),ui.fetch()(di(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function hi(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},pa),e);try{const i=new ma(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wt(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wt(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wt(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw wt(n,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw li(n,h,l);ie(n,h)}}catch(i){if(i instanceof Xe)throw i;ie(n,"network-request-failed")}}async function _t(n,e,t,r,i={}){const s=await mt(n,e,t,r,i);return"mfaPendingCredential"in s&&ie(n,"multi-factor-auth-required",{_serverResponse:s}),s}function di(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Dn(n.config,i):`${n.config.apiScheme}://${i}`}class ma{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ue(this.auth,"network-request-failed")),ga.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wt(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ue(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(n,e){return mt(n,"POST","/v1/accounts:delete",e)}async function ya(n,e){return mt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function va(n,e=!1){const t=$e(n),r=await t.getIdToken(e),i=Pn(r);I(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ot(rn(i.auth_time)),issuedAtTime:ot(rn(i.iat)),expirationTime:ot(rn(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rn(n){return Number(n)*1e3}function Pn(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Tt("JWT malformed, contained fewer than 3 sections"),null;try{const i=ri(t);return i?JSON.parse(i):(Tt("Failed to decode base64 JWT payload"),null)}catch(i){return Tt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ba(n){const e=Pn(n);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Xe&&wa(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wa({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ot(this.lastLoginAt),this.creationTime=ot(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bt(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ut(n,ya(t,{idToken:r}));I(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ta(s.providerUserInfo):[],a=Sa(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fi(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function Ea(n){const e=$e(n);await Bt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sa(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ta(n){return n.map(e=>{var{providerId:t}=e,r=Cn(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(n,e){const t=await hi(n,{},async()=>{const r=ft({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=di(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ui.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ba(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await ka(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ht;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ht,this.toJSON())}_performRefresh(){return pe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,e){I(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ne{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Cn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ia(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ut(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return va(this,e)}reload(){return Ea(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Bt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ut(this,_a(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,h;const u=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,_=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,m=(l=t.createdAt)!==null&&l!==void 0?l:void 0,T=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:R,isAnonymous:W,providerData:q,stsTokenManager:J}=t;I(A&&J,e,"internal-error");const K=ht.fromJSON(this.name,J);I(typeof A=="string",e,"internal-error"),ye(u,e.name),ye(d,e.name),I(typeof R=="boolean",e,"internal-error"),I(typeof W=="boolean",e,"internal-error"),ye(f,e.name),ye(p,e.name),ye(g,e.name),ye(_,e.name),ye(m,e.name),ye(T,e.name);const v=new Ne({uid:A,auth:e,email:d,emailVerified:R,displayName:u,isAnonymous:W,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:K,createdAt:m,lastLoginAt:T});return q&&Array.isArray(q)&&(v.providerData=q.map(k=>Object.assign({},k))),_&&(v._redirectEventId=_),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new ht;i.updateFromServerResponse(t);const s=new Ne({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bt(s),s}}/**
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
 */class pi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pi.type="NONE";const or=pi;/**
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
 */function kt(n,e,t){return`firebase:${n}:${e}:${t}`}class Ge{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=kt(this.userKey,i.apiKey,s),this.fullPersistenceKey=kt("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ge(ge(or),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||ge(or);const o=kt(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const h=await l._get(o);if(h){const u=Ne._fromJSON(e,h);l!==s&&(a=u),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ge(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ge(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_i(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vi(e))return"Blackberry";if(bi(e))return"Webos";if(Mn(e))return"Safari";if((e.includes("chrome/")||mi(e))&&!e.includes("edge/"))return"Chrome";if(yi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gi(n=ee()){return/firefox\//i.test(n)}function Mn(n=ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mi(n=ee()){return/crios\//i.test(n)}function _i(n=ee()){return/iemobile/i.test(n)}function yi(n=ee()){return/android/i.test(n)}function vi(n=ee()){return/blackberry/i.test(n)}function bi(n=ee()){return/webos/i.test(n)}function Gt(n=ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Aa(n=ee()){var e;return Gt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ra(){return qo()&&document.documentMode===10}function wi(n=ee()){return Gt(n)||yi(n)||bi(n)||vi(n)||/windows phone/i.test(n)||_i(n)}function Ca(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n,e=[]){let t;switch(n){case"Browser":t=ar(ee());break;case"Worker":t=`${ar(ee())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jt}/${r}`}/**
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
 */class Oa{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cr(this),this.idTokenSubscription=new cr(this),this.beforeStateQueue=new Oa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ci,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ge(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ge.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?$e(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ge(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ge(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await Ge.create(this,[ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ii(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function Qe(n){return $e(n)}class cr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zo(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pa(n,e,t){const r=Qe(n);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Ei(e),{host:o,port:a}=Ma(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||La()}function Ei(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ma(n){const e=Ei(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lr(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lr(o)}}}function lr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function La(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pe("not implemented")}_getIdTokenResponse(e){return pe("not implemented")}_linkToIdToken(e,t){return pe("not implemented")}_getReauthenticationResolver(e){return pe("not implemented")}}async function Na(n,e){return mt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(n,e){return _t(n,"POST","/v1/accounts:signInWithPassword",gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(n,e){return _t(n,"POST","/v1/accounts:signInWithEmailLink",gt(n,e))}async function Ba(n,e){return _t(n,"POST","/v1/accounts:signInWithEmailLink",gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Ln{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new dt(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new dt(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xa(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ua(e,{email:this._email,oobCode:this._password});default:ie(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Na(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ba(e,{idToken:t,email:this._email,oobCode:this._password});default:ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(n,e){return _t(n,"POST","/v1/accounts:signInWithIdp",gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="http://localhost";class Be extends Ln{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Be(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ie("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Cn(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Be(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ke(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ke(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ke(e,t)}buildRequest(){const e={requestUri:Fa,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ft(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ha(n){const e=nt(rt(n)).link,t=e?nt(rt(e)).deep_link_id:null,r=nt(rt(n)).deep_link_id;return(r?nt(rt(r)).link:null)||r||t||e||n}class Nn{constructor(e){var t,r,i,s,o,a;const c=nt(rt(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,u=$a((i=c.mode)!==null&&i!==void 0?i:null);I(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Ha(e);try{return new Nn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(){this.providerId=Ze.PROVIDER_ID}static credential(e,t){return dt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Nn.parseLink(t);return I(r,"argument-error"),dt._fromEmailAndCode(e,r.code,r.tenantId)}}Ze.PROVIDER_ID="password";Ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yt extends xn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends yt{constructor(){super("facebook.com")}static credential(e){return Be._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ve.credential(e.oauthAccessToken)}catch{return null}}}ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";ve.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends yt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Be._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return fe.credential(t,r)}catch{return null}}}fe.GOOGLE_SIGN_IN_METHOD="google.com";fe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends yt{constructor(){super("github.com")}static credential(e){return Be._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}be.GITHUB_SIGN_IN_METHOD="github.com";be.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends yt{constructor(){super("twitter.com")}static credential(e,t){return Be._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return we.credential(t,r)}catch{return null}}}we.TWITTER_SIGN_IN_METHOD="twitter.com";we.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(n,e){return _t(n,"POST","/v1/accounts:signUp",gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ne._fromIdTokenResponse(e,r,i),o=ur(r);return new Fe({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ur(r);return new Fe({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ur(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Xe{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ft.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ft(e,t,r,i)}}function Si(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ft._fromErrorAndOperation(n,s,e,r):s})}async function Wa(n,e,t=!1){const r=await ut(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fe._forOperation(n,"link",r)}/**
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
 */async function ja(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await ut(n,Si(r,i,e,n),t);I(s.idToken,r,"internal-error");const o=Pn(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(n.uid===a,r,"user-mismatch"),Fe._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ie(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(n,e,t=!1){const r="signIn",i=await Si(n,r,e),s=await Fe._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function za(n,e){return Ti(Qe(n),e)}async function Ga(n,e,t){const r=Qe(n),i=await Va(r,{returnSecureToken:!0,email:e,password:t}),s=await Fe._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ka(n,e,t){return za($e(n),Ze.credential(e,t))}function qa(n,e,t,r){return $e(n).onIdTokenChanged(e,t,r)}function Ja(n,e,t){return $e(n).beforeAuthStateChanged(e,t)}const $t="__sak";/**
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
 */class ki{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($t,"1"),this.storage.removeItem($t),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(){const n=ee();return Mn(n)||Gt(n)}const Xa=1e3,Qa=10;class Ai extends ki{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ya()&&Ca(),this.fallbackToPolling=wi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ra()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Qa):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Xa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ai.type="LOCAL";const Za=Ai;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends ki{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ri.type="SESSION";const Ci=Ri;/**
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
 */function ec(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Kt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Kt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await ec(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class tc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Un("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const d=u;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return window}function nc(n){he().location.href=n}/**
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
 */function Oi(){return typeof he().WorkerGlobalScope<"u"&&typeof he().importScripts=="function"}async function rc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ic(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function sc(){return Oi()?self:null}/**
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
 */const Di="firebaseLocalStorageDb",oc=1,Ht="firebaseLocalStorage",Pi="fbase_key";class vt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qt(n,e){return n.transaction([Ht],e?"readwrite":"readonly").objectStore(Ht)}function ac(){const n=indexedDB.deleteDatabase(Di);return new vt(n).toPromise()}function En(){const n=indexedDB.open(Di,oc);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ht,{keyPath:Pi})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ht)?e(r):(r.close(),await ac(),e(await En()))})})}async function hr(n,e,t){const r=qt(n,!0).put({[Pi]:e,value:t});return new vt(r).toPromise()}async function cc(n,e){const t=qt(n,!1).get(e),r=await new vt(t).toPromise();return r===void 0?null:r.value}function dr(n,e){const t=qt(n,!0).delete(e);return new vt(t).toPromise()}const lc=800,uc=3;class Mi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await En(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>uc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kt._getInstance(sc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rc(),!this.activeServiceWorker)return;this.sender=new tc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ic()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await En();return await hr(e,$t,"1"),await dr(e,$t),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>hr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>cc(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qt(i,!1).getAll();return new vt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mi.type="LOCAL";const hc=Mi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function fc(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ue("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",dc().appendChild(r)})}function pc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new pt(3e4,6e4);/**
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
 */function Li(n,e){return e?ge(e):(I(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Bn extends Ln{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ke(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ke(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ke(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gc(n){return Ti(n.auth,new Bn(n),n.bypassAuthState)}function mc(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),ja(t,new Bn(n),n.bypassAuthState)}async function _c(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),Wa(t,new Bn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gc;case"linkViaPopup":case"linkViaRedirect":return _c;case"reauthViaPopup":case"reauthViaRedirect":return mc;default:ie(this.auth,"internal-error")}}resolve(e){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new pt(2e3,1e4);async function vc(n,e,t){const r=Qe(n);ca(n,e,xn);const i=Li(r,t);return new Le(r,"signInViaPopup",e,i).executeNotNull()}class Le extends Ni{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Le.currentPopupAction&&Le.currentPopupAction.cancel(),Le.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){_e(this.filter.length===1,"Popup operations only handle one event");const e=Un();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Le.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ue(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,yc.get())};e()}}Le.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="pendingRedirect",At=new Map;class wc extends Ni{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=At.get(this.auth._key());if(!e){try{const r=await Ic(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}At.set(this.auth._key(),e)}return this.bypassAuthState||At.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ic(n,e){const t=Tc(e),r=Sc(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Ec(n,e){At.set(n._key(),e)}function Sc(n){return ge(n._redirectPersistence)}function Tc(n){return kt(bc,n.config.apiKey,n.name)}async function kc(n,e,t=!1){const r=Qe(n),i=Li(r,e),o=await new wc(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=10*60*1e3;class Rc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!xi(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ue(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ac&&this.cachedEventUids.clear(),this.cachedEventUids.has(fr(e))}saveEventToCache(e){this.cachedEventUids.add(fr(e)),this.lastProcessedEventTime=Date.now()}}function fr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xi({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Cc(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xi(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oc(n,e={}){return mt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pc=/^https?/;async function Mc(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Oc(n);for(const t of e)try{if(Lc(t))return}catch{}ie(n,"unauthorized-domain")}function Lc(n){const e=In(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Pc.test(t))return!1;if(Dc.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Nc=new pt(3e4,6e4);function pr(){const n=he().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xc(n){return new Promise((e,t)=>{var r,i,s;function o(){pr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pr(),t(ue(n,"network-request-failed"))},timeout:Nc.get()})}if(!((i=(r=he().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=he().gapi)===null||s===void 0)&&s.load)o();else{const a=pc("iframefcb");return he()[a]=()=>{gapi.load?o():t(ue(n,"network-request-failed"))},fc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Rt=null,e})}let Rt=null;function Uc(n){return Rt=Rt||xc(n),Rt}/**
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
 */const Bc=new pt(5e3,15e3),Fc="__/auth/iframe",$c="emulator/auth/iframe",Hc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wc(n){const e=n.config;I(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Dn(e,$c):`https://${n.config.authDomain}/${Fc}`,r={apiKey:e.apiKey,appName:n.name,v:jt},i=Vc.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ft(r).slice(1)}`}async function jc(n){const e=await Uc(n),t=he().gapi;return I(t,n,"internal-error"),e.open({where:document.body,url:Wc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hc,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ue(n,"network-request-failed"),a=he().setTimeout(()=>{s(o)},Bc.get());function c(){he().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const zc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gc=500,Kc=600,qc="_blank",Jc="http://localhost";class gr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yc(n,e,t,r=Gc,i=Kc){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},zc),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ee().toLowerCase();t&&(a=mi(l)?qc:t),gi(l)&&(e=e||Jc,c.scrollbars="yes");const h=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Aa(l)&&a!=="_self")return Xc(e||"",a),new gr(null);const u=window.open(e||"",a,h);I(u,n,"popup-blocked");try{u.focus()}catch{}return new gr(u)}function Xc(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Qc="__/auth/handler",Zc="emulator/auth/handler";function mr(n,e,t,r,i,s){I(n.config.authDomain,n,"auth-domain-config-required"),I(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:jt,eventId:i};if(e instanceof xn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Qo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof yt){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${el(n)}?${ft(a).slice(1)}`}function el({config:n}){return n.emulator?Dn(n,Zc):`https://${n.authDomain}/${Qc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="webStorageSupport";class tl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ci,this._completeRedirectFn=kc,this._overrideRedirectResult=Ec}async _openPopup(e,t,r,i){var s;_e((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=mr(e,t,r,In(),i);return Yc(e,o,Un())}async _openRedirect(e,t,r,i){return await this._originValidation(e),nc(mr(e,t,r,In(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(_e(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await jc(e),r=new Rc(e);return t.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sn,{type:sn},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sn];o!==void 0&&t(!!o),ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wi()||Mn()||Gt()}}const nl=tl;var _r="@firebase/auth",yr="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sl(n){ct(new nr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{I(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),I(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ii(n)},h=new Da(a,c,l);return ua(h,t),h})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ct(new nr("auth-internal",e=>{const t=Qe(e.getProvider("auth").getImmediate());return(r=>new rl(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(_r,yr,il(n)),ze(_r,yr,"esm2017")}/**
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
 */const ol=5*60,al=si("authIdTokenMaxAge")||ol;let vr=null;const cl=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>al)return;const i=t==null?void 0:t.token;vr!==i&&(vr=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ll(n=To()){const e=Zr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=la(n,{popupRedirectResolver:nl,persistence:[hc,Za,Ci]}),r=si("authTokenSyncURL");if(r){const s=cl(r);Ja(t,s,()=>s(t.currentUser)),qa(t,o=>s(o))}const i=jo("auth");return i&&Pa(t,`http://${i}`),t}sl("Browser");const Ui="https://api.cubingapp.com:3000",ul={apiKey:"AIzaSyCnwuoBqAR6cx7uqzxf7iEC99sZf36sZZA",authDomain:"virtual-cube.firebaseapp.com",projectId:"virtual-cube",storageBucket:"virtual-cube.appspot.com",messagingSenderId:"371073332227",appId:"1:371073332227:web:c96d3137080aecfe634a36",measurementId:"G-YR33BDCQDY"},hl=ei(ul),Jt=()=>ll(hl),Bi="algSet",Fi="showScramble",Fn="user";function dl(){return localStorage.getItem(Bi)??""}function fl(n){localStorage.setItem(Bi,n)}function pl(){return console.log("getShowScramble"),vl(Fi)??!1}function gl(n){bl(Fi,n)}function ml(){return localStorage.getItem(Fn)}function _l(){localStorage.removeItem(Fn)}function yl(n){localStorage.setItem(Fn,n)}function vl(n){const e=localStorage.getItem(n);return e===null?null:e=="1"}function bl(n,e){localStorage.setItem(n,e?"1":"0")}class $i{constructor(){G(this,"email");G(this,"uid")}toJsonString(){return JSON.stringify({email:this.email,uid:this.uid})}fromJsonString(e){const t=JSON.parse(e);this.email=t.email,this.uid=t.uid}}function wl(){const n=ml();if(n){const e=new $i;return e.fromJsonString(n),e}return null}function $n(n,e){const t=new $i;t.email=n.user.email,fetch(`${Ui}/user`,{method:"POST",body:JSON.stringify({Email:t.email})}).then(r=>r.json()).then(r=>{t.uid=r.Uid,yl(t.toJsonString()),e(t)})}function Il(n){const e=Jt(),t=new fe;vc(e,t).then(r=>{$n(r,n)}).catch(r=>{console.log(r)})}function El(n,e,t){const r=Jt();Ga(r,n,e).then(i=>{$n(i,t)}).catch(i=>{console.log(i.message)})}function Sl(n,e,t){const r=Jt();Ka(r,n,e).then(i=>{$n(i,t)}).catch(i=>{console.log(i.message)})}function Tl(){Jt().signOut(),_l()}function kl(n){let e,t,r;return{c(){e=w("button"),e.textContent="Create Account",E(e,"class","btn-primary")},m(i,s){V(i,e,s),t||(r=ne(e,"click",n[3]),t=!0)},p:P,i:P,o:P,d(i){i&&$(e),t=!1,r()}}}function Al(n,e,t){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{El(r,i,s)};return n.$$set=a=>{"email"in a&&t(0,r=a.email),"password"in a&&t(1,i=a.password),"callback"in a&&t(2,s=a.callback)},[r,i,s,o]}class Rl extends le{constructor(e){super(),ce(this,e,Al,kl,ae,{email:0,password:1,callback:2})}}function Cl(n){let e,t,r;return{c(){e=w("button"),e.textContent="Sign In",E(e,"class","btn-primary")},m(i,s){V(i,e,s),t||(r=ne(e,"click",n[3]),t=!0)},p:P,i:P,o:P,d(i){i&&$(e),t=!1,r()}}}function Ol(n,e,t){let{email:r}=e,{password:i}=e,{callback:s}=e;const o=()=>{Sl(r,i,s)};return n.$$set=a=>{"email"in a&&t(0,r=a.email),"password"in a&&t(1,i=a.password),"callback"in a&&t(2,s=a.callback)},[r,i,s,o]}class Dl extends le{constructor(e){super(),ce(this,e,Ol,Cl,ae,{email:0,password:1,callback:2})}}function Pl(n){let e,t,r;return{c(){e=w("button"),e.innerHTML=`<div class="row"><svg style="width: 20px; height: 20px; margin-right: 0.6rem;" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path><path fill="none" d="M2 2h44v44H2z"></path></svg> 
        <p style="font-size: 1rem;">Sign in with Google</p></div>`,E(e,"class","p-2 bg-white rounded-md shadow-lg border-solid border-gray-400 hover:cursor-pointer hover:bg-gray-200")},m(i,s){V(i,e,s),t||(r=ne(e,"click",n[1]),t=!0)},p:P,i:P,o:P,d(i){i&&$(e),t=!1,r()}}}function Ml(n,e,t){let{callback:r}=e;const i=()=>Il(r);return n.$$set=s=>{"callback"in s&&t(0,r=s.callback)},[r,i]}class Ll extends le{constructor(e){super(),ce(this,e,Ml,Pl,ae,{callback:0})}}function Nl(n){let e,t,r,i;return{c(){e=w("input"),E(e,"class",t=n[1].class),E(e,"type","email"),E(e,"placeholder","Email")},m(s,o){V(s,e,o),Pt(e,n[0]),r||(i=ne(e,"input",n[2]),r=!0)},p(s,[o]){o&2&&t!==(t=s[1].class)&&E(e,"class",t),o&1&&e.value!==s[0]&&Pt(e,s[0])},i:P,o:P,d(s){s&&$(e),r=!1,i()}}}function xl(n,e,t){let{value:r}=e;function i(){r=this.value,t(0,r)}return n.$$set=s=>{t(1,e=me(me({},e),De(s))),"value"in s&&t(0,r=s.value)},e=De(e),[r,e,i]}class Ul extends le{constructor(e){super(),ce(this,e,xl,Nl,ae,{value:0})}}function Bl(n){let e,t,r,i;return{c(){e=w("input"),E(e,"class",t=n[1].class),E(e,"type","password"),E(e,"placeholder","Password")},m(s,o){V(s,e,o),Pt(e,n[0]),r||(i=ne(e,"input",n[2]),r=!0)},p(s,[o]){o&2&&t!==(t=s[1].class)&&E(e,"class",t),o&1&&e.value!==s[0]&&Pt(e,s[0])},i:P,o:P,d(s){s&&$(e),r=!1,i()}}}function Fl(n,e,t){let{value:r}=e;function i(){r=this.value,t(0,r)}return n.$$set=s=>{t(1,e=me(me({},e),De(s))),"value"in s&&t(0,r=s.value)},e=De(e),[r,e,i]}class $l extends le{constructor(e){super(),ce(this,e,Fl,Bl,ae,{value:0})}}function Hl(n){let e,t,r,i,s;return{c(){e=w("button"),E(e,"class",t=Wn(n[1].class)+" svelte-um8cyy"),E(e,"style",r=n[1].style)},m(o,a){V(o,e,a),e.innerHTML=n[0],i||(s=ne(e,"click",n[3]),i=!0)},p(o,[a]){a&2&&t!==(t=Wn(o[1].class)+" svelte-um8cyy")&&E(e,"class",t),a&2&&r!==(r=o[1].style)&&E(e,"style",r)},i:P,o:P,d(o){o&&$(e),i=!1,s()}}}function Vl(n,e,t){let{name:r}=e,s={happy:`<svg width="100%" height="100%" stroke="white" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
            <circle cx="25" cy="25" r="22" />
            <circle cx="18" cy="20" r="3" />
            <circle cx="32" cy="20" r="3" />
            <path d="M 15,33 Q 25,40 35,33"/>
        </svg>`,menu:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
            <line x1="3" y1="7" x2="21" y2="7"></line>
            <line x1="3" y1="13" x2="21" y2="13"></line>
            <line x1="3" y1="19" x2="21" y2="19"></line>
        </svg>`,profile:`<svg x="0px" y="0px" stroke="white" fill="white" viewBox="0 0 54 54" xml:space="preserve">
            <circle style="stroke-width: 3; fill-opacity: 0; opacity: 1;" cx="26.5" cy="26.5" r="24" />
            <circle style="stroke-width: 3; fill-opacity: 0; opacity: 1;" cx="26.5" cy="20" r="10" />
            <path fill="none" stroke="white" stroke-width="3" d="M 8,42 Q 12,28 20,28 M 45,42 Q 41,28 33,28 "/>
        </svg>`,retry:`<svg width="100%" height="100%" stroke="white" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50">
            <path d="M 42,32 A 20,20,0,1,1,42,18"/>
            <path fill="white" fill-opacity="1" d="M 44,22 L 34,17 L 45,12  Z"/>
        </svg>`,sad:`<svg width="100%" height="100%" stroke="white" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
            <circle cx="25" cy="25" r="22" />
            <circle cx="18" cy="20" r="3" />
            <circle cx="32" cy="20" r="3" />
            <path d="M 15,35 Q 25,28 35,35"/>
        </svg>`,settings:`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" stroke="white" fill="white" viewBox="0 0 54 54" xml:space="preserve">
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
        </svg>`,x:`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="black">
            <path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
        </svg>`}[r];function o(a){jr.call(this,n,a)}return n.$$set=a=>{t(1,e=me(me({},e),De(a))),"name"in a&&t(2,r=a.name)},e=De(e),[s,e,r,o]}class xe extends le{constructor(e){super(),ce(this,e,Vl,Hl,ae,{name:2})}}function Wl(n){let e,t,r,i,s,o,a,c,l;o=new xe({props:{name:"x",alt:"Close"}}),o.$on("click",n[4]);const h=n[3].default,u=Qi(h,n,n[2],null);return{c(){e=w("div"),t=w("div"),r=w("p"),i=oe(n[0]),s=D(),Q(o.$$.fragment),a=D(),c=w("div"),u&&u.c(),E(t,"class","drawer-header svelte-mmv3og"),E(c,"class","drawer-body"),E(e,"class","drawer svelte-mmv3og")},m(d,f){V(d,e,f),y(e,t),y(t,r),y(r,i),y(t,s),Y(o,t,null),y(e,a),y(e,c),u&&u.m(c,null),l=!0},p(d,[f]){(!l||f&1)&&Wt(i,d[0]),u&&u.p&&(!l||f&4)&&es(u,h,d,d[2],l?Zi(h,d[2],f,null):ts(d[2]),null)},i(d){l||(N(o.$$.fragment,d),N(u,d),l=!0)},o(d){U(o.$$.fragment,d),U(u,d),l=!1},d(d){d&&$(e),X(o),u&&u.d(d)}}}function jl(n,e,t){let{$$slots:r={},$$scope:i}=e,{title:s}=e,{close:o}=e;const a=()=>o();return n.$$set=c=>{"title"in c&&t(0,s=c.title),"close"in c&&t(1,o=c.close),"$$scope"in c&&t(2,i=c.$$scope)},[s,o,i,r,a]}class Hi extends le{constructor(e){super(),ce(this,e,jl,Wl,ae,{title:0,close:1})}}const zl=[1,1,1,1],Gl=[.5,.5,.5,1],Kl=[1,1,0,1],ql=[0,1,0,1],Jl=[0,0,1,1],Yl=[1,.5,0,1],Xl=[1,0,0,1],Ql=[0,0,0,1],br=[zl,ql,Kl,Jl,Yl,Xl];function wr(n){return(n<0||n>=br.length)&&console.error("Invalid face: "+n),br[n]}function Ir(n,e){return Math.floor(n/S(e.layers))}function qe(n){return Math.floor(Math.random()*n)}function Zl(n){let e=n.length;for(;e!=0;){let t=qe(e);e--;let r=n[t];n[t]=n[e],n[e]=r}return n}function Hn(n){return n<=0?2:Hn(n-1)+n+2}function eu(n){n[0].Score++;let e=Hn(n[0].Score);const t=Math.ceil(n.length*3/4);e>t&&(e=t+qe(n.length-t)),Vi(n,e)}function tu(n){n[0].Score=0,Vi(n,Hn(0))}function Vi(n,e){const t=n[0];for(let r=0;r<e;r++)n[r]=n[r+1];n[e]=t}const Ee=0,Se=1,Te=2,ke=3,Ae=4,Re=5,nu=[[Ee,ke,Ae],[Ee,Re,ke],[Ee,Ae,Se],[Ee,Se,Re],[Te,Se,Ae],[Te,Re,Se],[Te,Ae,ke],[Te,ke,Re]],ru=[[Ee,ke],[Ee,Ae],[Ee,Re],[Ee,Se],[Se,Ae],[Se,Re],[Te,Se],[Te,Ae],[Te,Re],[Te,ke],[ke,Ae],[ke,Re]];function iu(n){let e=Er(12,2),t=Er(8,3),r=on(8),i=on(12);for(;Sr(r)!==Sr(i);)r=on(8);const s=Array(54);for(let R=0;R<6;R++){const W=n.center(R);s[W]=R}let o=n.corners(0,0),a=n.corners(1,0),c=n.corners(2,0),l=n.corners(3,0),h=n.corners(4,0),u=n.corners(5,0);const d=(R,W,q,J,K,v,k,Z,j)=>{const z=(b,M)=>nu[r[b]][(t[b]+M)%3];s[R.topLeft]=z(W,v),s[R.topRight]=z(q,k),s[R.bottomLeft]=z(J,Z),s[R.bottomRight]=z(K,j)};d(o,0,1,2,3,0,0,0,0),d(a,2,3,4,5,2,1,1,2),d(c,4,5,6,7,0,0,0,0),d(l,6,7,0,1,2,1,1,2),d(h,0,2,6,4,2,1,1,2),d(u,3,1,5,7,2,1,1,2);let f=n.edges(0,0,0),p=n.edges(1,0,0),g=n.edges(2,0,0),_=n.edges(3,0,0),m=n.edges(4,0,0),T=n.edges(5,0,0);const A=(R,W,q,J,K,v,k,Z,j)=>{const z=(b,M)=>ru[i[b]][(e[b]+M)%2];s[R.top]=z(W,v),s[R.left]=z(q,k),s[R.right]=z(J,Z),s[R.bottom]=z(K,j)};return A(f,0,1,2,3,0,0,0,0),A(p,3,4,5,6,1,0,0,1),A(g,6,7,8,9,0,0,0,0),A(_,9,10,11,0,1,0,0,1),A(m,1,10,4,7,1,1,1,1),A(T,2,5,11,8,1,1,1,1),s}function Er(n,e){const t=Array(n);for(let r=0;r<n;r++)t[r]=qe(e);for(;!su(t,e);){const r=qe(n);t[r]=qe(e)}return t}function su(n,e){let t=0;for(let r=0;r<n.length;r++)t+=n[r];return t%e===0}function on(n){const e=Array(n);for(let t=0;t<n;t++)e[t]=t;return Zl(e),e}function Sr(n){const e=[...n];let t=!1;for(;;)if(e[0]===0){const r=e.findIndex((i,s)=>i!==s);if(r===-1)return t;e[0]=e[r],e[r]=0,t=!t}else{const r=e[0];e[0]=e[r],e[r]=r,t=!t}}let Ie;function Ct(n,e){const t=[e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3]];Ie.bindBuffer(Ie.ARRAY_BUFFER,n.buffer),Ie.bufferData(Ie.ARRAY_BUFFER,new Float32Array(t),Ie.STATIC_DRAW)}function S(n){return n*n}function H(n){return Math.floor(n/2)}function et(n){return n%2==0}function te(n){return n*n*6}class ou{constructor(e){G(this,"stickers");G(this,"underStickers");G(this,"layers");G(this,"affectedStickers");G(this,"disableTurn");G(this,"clockwise");G(this,"animationQueue");Ie=e,this.animationQueue=[]}setColors(e){for(let t=0;t<te(this.layers);t++)Ct(this.stickers[t],e[t])}solve(){const e=Array(te(this.layers));for(let t=0;t<te(this.layers);t++){const r=Ir(t,this);this.stickers[t].face=r,e[t]=wr(r)}this.setColors(e)}scramble(){if(this.layers===3){this.scramble3x3();return}this.naiveScramble()}scramble3x3(){const e=iu(this);this.setCubeState(e)}naiveScramble(){let e=S(this.layers)*10;for(let t=0;t<e;t++){let r=Math.floor(Math.random()*3),i=Math.floor(Math.random()*this.layers),s=Math.floor(Math.random()*1)==0;this._matchTurn(r,i,s)}}setNumOfLayers(e){this.layers=e,this.stickers=Array(te(e)),this.underStickers=Array(te(e));for(let t=0;t<te(e);t++){const r=Ir(t,this);this.stickers[t]={face:r,buffer:Ie.createBuffer()},this.underStickers[t]={face:r,buffer:Ie.createBuffer()},Ct(this.underStickers[t],Ql)}this.affectedStickers=Array(te(e)).fill(!1)}getCubeState(){return this.stickers.map(e=>e.face)}setCubeState(e){for(let t=0;t<te(this.layers);t++){const r=wr(e[t]);this.stickers[t].face=e[t],Ct(this.stickers[t],r)}}resetAffectedStickers(){const e=Array(te(this.layers));this.affectedStickers=e.fill(this.layers===1)}pushAnimation(e,t,r){let i=t?-1:1,s=[0,0,0];s[e]=i,this.animationQueue.push({axis:s,stickers:r,stickersToAnimate:this.affectedStickers})}turn(e,t,r){this.resetAffectedStickers(),this.pushAnimation(e,r,[...this.stickers]),this._matchTurn(e,t,r)}sliceTurn(e,t){const r=Array(te(this.layers));this.affectedStickers=r.fill(!1),this.pushAnimation(e,t,[...this.stickers]);for(let i=1;i<this.layers-1;i++)this._matchTurn(e,i,t)}wideTurn(e,t,r){this.resetAffectedStickers(),this.pushAnimation(e,r,[...this.stickers]),this._matchTurn(e,t,r);for(let i=1;i<this.layers-1;i++)this._matchTurn(e,i,r)}cubeRotate(e,t){this.resetAffectedStickers(),this.pushAnimation(e,t,[...this.stickers]);for(let r=0;r<this.layers;r++)this._matchTurn(e,r,t)}_matchTurn(e,t,r){e==0?(this._turnXAxis(t,r),t==0?this._turnOuter(5,r):t==this.layers-1&&this._turnOuter(4,!r)):e==1?(this._turnYAxis(t,r),t==0?this._turnOuter(0,r):t==this.layers-1&&this._turnOuter(2,!r)):e==2?(this._turnZAxis(t,r),t==0?this._turnOuter(1,r):t==this.layers-1&&this._turnOuter(3,!r)):console.error(`Axis ${e} not recognized`)}_turnXAxis(e,t){for(let r=1;r<=this.layers;r++)this._cycle(t,0*S(this.layers)+S(this.layers)-r-e*this.layers,3*S(this.layers)+S(this.layers)-r-e*this.layers,2*S(this.layers)+S(this.layers)-r-e*this.layers,1*S(this.layers)+S(this.layers)-r-e*this.layers)}_turnYAxis(e,t){for(let r=0;r<this.layers;r++)this._cycle(t,1*S(this.layers)+r*this.layers+e,4*S(this.layers)+r*this.layers+e,3*S(this.layers)+(this.layers-r-1)*this.layers+(this.layers-1)-e,5*S(this.layers)+r*this.layers+e)}_turnZAxis(e,t){for(let r=0;r<this.layers;r++)this._cycle(t,0*S(this.layers)+(r+1)*this.layers-1-e,5*S(this.layers)+r+this.layers*e,2*S(this.layers)+(this.layers-r-1)*this.layers+e,4*S(this.layers)+S(this.layers)-(r+1)-e*this.layers)}_turnOuter(e,t){if(this.layers%2!=0){let r=this.center(e);this.affectedStickers[r]=!0}for(let r=0;r<Math.floor(this.layers/2);r++){const{topLeft:i,topRight:s,bottomLeft:o,bottomRight:a}=this.corners(e,r);this._cycle(t,i,s,a,o);let c=this.layers-2*(r+1);for(let l=0;l<c;l++){const{top:h,left:u,bottom:d,right:f}=this.edges(e,r,l);this._cycle(t,h,f,d,u)}}}_cycle(e,t,r,i,s){this.affectedStickers[t]=!0,this.affectedStickers[r]=!0,this.affectedStickers[i]=!0,this.affectedStickers[s]=!0,e?this._cycleHelper(t,r,i,s):this._cycleHelper(s,i,r,t)}_cycleHelper(e,t,r,i){let s=this.stickers[i];this.stickers[i]=this.stickers[r],this.stickers[r]=this.stickers[t],this.stickers[t]=this.stickers[e],this.stickers[e]=s}matchKeyToTurn(e){if(!this.disableTurn&&!e.ctrlKey)return this.matchKeyCodeToTurn(e.code)}matchKeyCodeToTurn(e){switch(e){case"KeyN":return this.cubeRotate(0,!0),{notation:"x",rotate:!0};case"KeyB":return this.cubeRotate(0,!1),{notation:"x'",rotate:!0};case"Semicolon":return this.cubeRotate(1,!0),{notation:"y",rotate:!0};case"KeyA":return this.cubeRotate(1,!1),{notation:"y'",rotate:!0};case"KeyP":return this.cubeRotate(2,!0),{notation:"z",rotate:!0};case"KeyQ":return this.cubeRotate(2,!1),{notation:"z'",rotate:!0};case"KeyJ":return this.turn(1,0,!0),{notation:"U",turn:!0};case"KeyF":return this.turn(1,0,!1),{notation:"U'",turn:!0};case"KeyS":return this.turn(1,this.layers-1,!1),{notation:"D",turn:!0};case"KeyL":return this.turn(1,this.layers-1,!0),{notation:"D'",turn:!0};case"KeyH":return this.turn(2,0,!0),{notation:"F",turn:!0};case"KeyG":return this.turn(2,0,!1),{notation:"F'",turn:!0};case"KeyW":return this.turn(2,this.layers-1,!1),{notation:"B",turn:!0};case"KeyO":return this.turn(2,this.layers-1,!0),{notation:"B'",turn:!0};case"KeyD":return this.turn(0,this.layers-1,!1),{notation:"L",turn:!0};case"KeyE":return this.turn(0,this.layers-1,!0),{notation:"L'",turn:!0};case"KeyI":return this.turn(0,0,!0),{notation:"R",turn:!0};case"KeyK":return this.turn(0,0,!1),{notation:"R'",turn:!0};case"BracketLeft":return this.sliceTurn(0,!1),{notation:"M",turn:!0};case"Quote":return this.sliceTurn(0,!0),{notation:"M'",turn:!0};case"KeyC":return this.sliceTurn(1,!1),{notation:"E",turn:!0};case"Comma":return this.sliceTurn(1,!0),{notation:"E'",turn:!0};case"KeyY":return this.sliceTurn(2,!0),{notation:"S",turn:!0};case"KeyT":return this.sliceTurn(2,!1),{notation:"S'",turn:!0};case"KeyU":return this.wideTurn(0,0,!0),{notation:"r",turn:!0};case"KeyM":return this.wideTurn(0,0,!1),{notation:"r'",turn:!0};case"KeyV":return this.wideTurn(0,this.layers-1,!1),{notation:"l",turn:!0};case"KeyR":return this.wideTurn(0,this.layers-1,!0),{notation:"l'",turn:!0}}}stepAlgorithm(e,t){switch(e){case"x":this.cubeRotate(0,t);break;case"x'":this.cubeRotate(0,!t);break;case"x2":case"x2'":this.cubeRotate(0,t),this.cubeRotate(0,t);break;case"y":this.cubeRotate(1,t);break;case"y'":this.cubeRotate(1,!t);break;case"y2":case"y2'":this.cubeRotate(1,t),this.cubeRotate(1,t);break;case"z":this.cubeRotate(2,t);break;case"z'":this.cubeRotate(2,!t);break;case"z2":case"z2'":this.cubeRotate(2,t),this.cubeRotate(2,t);break;case"U":this.turn(1,0,t);break;case"U'":this.turn(1,0,!t);break;case"U2":case"U2'":this.turn(1,0,t),this.turn(1,0,t);break;case"u":this.wideTurn(1,0,t);break;case"u'":this.wideTurn(1,0,!t);break;case"u2":case"u2'":this.wideTurn(1,0,t),this.wideTurn(1,0,t);break;case"D":this.turn(1,this.layers-1,!t);break;case"D'":this.turn(1,this.layers-1,t);break;case"D2":case"D2'":this.turn(1,this.layers-1,t),this.turn(1,this.layers-1,t);break;case"d":this.wideTurn(1,this.layers-1,!t);break;case"d'":this.wideTurn(1,this.layers-1,t);break;case"d2":case"d2'":this.wideTurn(1,this.layers-1,t),this.wideTurn(1,this.layers-1,t);break;case"F":this.turn(2,0,t);break;case"F'":this.turn(2,0,!t);break;case"F2":case"F2'":this.turn(2,0,t),this.turn(2,0,t);break;case"f":this.wideTurn(2,0,t);break;case"f'":this.wideTurn(2,0,!t);break;case"f2":case"f2'":this.wideTurn(2,0,t),this.wideTurn(2,0,t);break;case"B":this.turn(2,this.layers-1,!t);break;case"B'":this.turn(2,this.layers-1,t);break;case"B2":case"B2'":this.turn(2,this.layers-1,t),this.turn(2,this.layers-1,t);break;case"b":this.wideTurn(2,this.layers-1,!t);break;case"b'":this.wideTurn(2,this.layers-1,t);break;case"b2":case"b2'":this.wideTurn(2,this.layers-1,t),this.wideTurn(2,this.layers-1,t);break;case"L":this.turn(0,this.layers-1,!t);break;case"L'":this.turn(0,this.layers-1,t);break;case"L2":case"L2'":this.turn(0,this.layers-1,t),this.turn(0,this.layers-1,t);break;case"l":this.wideTurn(0,this.layers-1,!t);break;case"l'":this.wideTurn(0,this.layers-1,t);break;case"l2":case"l2'":this.wideTurn(0,this.layers-1,t),this.wideTurn(0,this.layers-1,t);break;case"R":this.turn(0,0,t);break;case"R'":this.turn(0,0,!t);break;case"R2":case"R2'":this.turn(0,0,t),this.turn(0,0,t);break;case"r":this.wideTurn(0,0,t);break;case"r'":this.wideTurn(0,0,!t);break;case"r2":case"r2'":this.wideTurn(0,0,t),this.wideTurn(0,0,t);break;case"M":this.turn(0,1,!t);break;case"M'":this.turn(0,1,t);break;case"M2":case"M2'":this.sliceTurn(0,t),this.sliceTurn(0,t);break;case"E":this.sliceTurn(1,!t);break;case"E'":this.sliceTurn(1,t);break;case"E2":case"E2'":this.sliceTurn(1,t),this.sliceTurn(1,t);break;case"S":this.sliceTurn(2,t);break;case"S'":this.sliceTurn(2,!t);break;case"S2":case"S2'":this.sliceTurn(2,t);default:throw new Error("Invalid turn in algorithm: "+e)}}execAlg(e){if(!e)return;let t=e.split(" ");for(let r=0;r<t.length;r++)this.stepAlgorithm(t[r],!0);this.animationQueue=[]}execAlgReverse(e){if(!e)return;let t=e.split(" ");for(let r=t.length-1;r>=0;r--)this.stepAlgorithm(t[r],!1);this.animationQueue=[]}stickerIsOnFace(e,t){return t*S(this.layers)<=e&&e<(t+1)*S(this.layers)}center(e){return e*S(this.layers)+Math.floor(S(this.layers)/2)}corners(e,t){const r=e*S(this.layers);return{topLeft:r+(this.layers+1)*t,topRight:r+(this.layers-1)*(this.layers-t),bottomRight:r+(this.layers+1)*(this.layers-t-1),bottomLeft:r+(this.layers-1)*(t+1)}}edges(e,t,r){const i=this.corners(e,t);let s=this.layers-2*(t+1);return{top:i.topLeft+this.layers*(r+1),left:i.topLeft+(s-r),right:i.topRight+r+1,bottom:i.bottomLeft+this.layers*(s-r)}}}function Sn(n){const e=n.gl,t=n.cube,r=n.perspectiveMatrix;let i=an(t,1.01,.02),s=an(t,1,0),o=an(t,1.5,.02);const a=Array(te(t.layers));for(let c=0;c<te(t.layers);c++){let l={positionBuffer:e.createBuffer(),noGapPositionBuffer:e.createBuffer(),hintPositionBuffer:e.createBuffer(),indexBuffer:e.createBuffer(),cart2d:[],positions:null},h=new Float32Array(12),u=new Float32Array(12),d=new Float32Array(12);for(let g=0;g<12;g++){let _=c*12+g;h[g]=i[_],u[g]=s[_],d[g]=o[_]}e.bindBuffer(e.ARRAY_BUFFER,l.positionBuffer),e.bufferData(e.ARRAY_BUFFER,h,e.STATIC_DRAW),l.positions=h,e.bindBuffer(e.ARRAY_BUFFER,l.noGapPositionBuffer),e.bufferData(e.ARRAY_BUFFER,u,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,l.hintPositionBuffer),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW);const f=Array(16);It(f,0,r,[u[0],u[1],u[2],1]),It(f,4,r,[u[3],u[4],u[5],1]),It(f,8,r,[u[6],u[7],u[8],1]),It(f,12,r,[u[9],u[10],u[11],1]),l.cart2d=[f[0]/f[3],f[1]/f[3],f[4]/f[7],f[5]/f[7],f[8]/f[11],f[9]/f[11],f[12]/f[15],f[13]/f[15]];const p=[0,1,2,0,2,3];e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(p),e.STATIC_DRAW),a[c]=l}return a}function It(n,e,t,r){Array(4);let i=r[0],s=r[1],o=r[2],a=r[3];n[e+0]=i*t[0]+s*t[4]+o*t[8]+a*t[12],n[e+1]=i*t[1]+s*t[5]+o*t[9]+a*t[13],n[e+2]=i*t[2]+s*t[6]+o*t[10]+a*t[14],n[e+3]=i*t[3]+s*t[7]+o*t[11]+a*t[15]}const Wi=12,au=4,Ve=3;function an(n,e,t){const r=S(n.layers)*Wi,i=Array(6*r);return cu(i,0*r,n,1,e,t),lu(i,1*r,n,0,e,t),uu(i,2*r,n,1,-e,t),hu(i,3*r,n,0,-e,t),du(i,4*r,n,2,-e,t),fu(i,5*r,n,2,e,t),i}function cu(n,e,t,r,i,s){if(et(t.layers)){let c=Array(S(t.layers)),l=0;for(let h=0;h<t.layers;h++)for(let u=0;u<t.layers;u++){const d=-1+1/t.layers+u*2/t.layers,f=-1+1/t.layers+h*2/t.layers;c[l]=[d,f,i],l++}se(n,e,t,c,r,s);return}let o=Array(S(t.layers)),a=0;for(let c=-H(t.layers);c<=H(t.layers);c++)for(let l=-H(t.layers);l<=H(t.layers);l++)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;se(n,e,t,o,r,s)}function lu(n,e,t,r,i,s){if(et(t.layers)){let c=Array(S(t.layers)),l=0;for(let h=0;h<t.layers;h++)for(let u=t.layers-1;u>=0;u--){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,i],l++}se(n,e,t,c,r,s);return}let o=Array(S(t.layers)),a=0;for(let c=-H(t.layers);c<=H(t.layers);c++)for(let l=H(t.layers);l>=-H(t.layers);l--)o[a]=[2*c/t.layers,2*l/t.layers,i],a++;se(n,e,t,o,r,s)}function uu(n,e,t,r,i,s){if(et(t.layers)){let c=Array(S(t.layers)),l=0;for(let h=0;h<t.layers;h++)for(let u=t.layers-1;u>=0;u--){const d=-1+1/t.layers+u*2/t.layers,f=-1+1/t.layers+h*2/t.layers;c[l]=[d,f,i],l++}se(n,e,t,c,r,s);return}let o=Array(S(t.layers)),a=0;for(let c=-H(t.layers);c<=H(t.layers);c++)for(let l=H(t.layers);l>=-H(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;se(n,e,t,o,r,s)}function hu(n,e,t,r,i,s){if(et(t.layers)){let c=Array(S(t.layers)),l=0;for(let h=0;h<t.layers;h++)for(let u=0;u<t.layers;u++){const d=-1+1/t.layers+h*2/t.layers,f=-1+1/t.layers+u*2/t.layers;c[l]=[d,f,i],l++}se(n,e,t,c,r,s);return}let o=Array(S(t.layers)),a=0;for(let c=-H(t.layers);c<=H(t.layers);c++)for(let l=-H(t.layers);l<=H(t.layers);l++)o[a]=[2*c/t.layers,2*l/t.layers,i],a++;se(n,e,t,o,r,s)}function du(n,e,t,r,i,s){if(et(t.layers)){let c=Array(S(t.layers)),l=0;for(let h=0;h<t.layers;h++)for(let u=t.layers-1;u>=0;u--){const d=-1+1/t.layers+u*2/t.layers,f=-1+1/t.layers+h*2/t.layers;c[l]=[d,f,i],l++}se(n,e,t,c,r,s);return}let o=Array(S(t.layers)),a=0;for(let c=-H(t.layers);c<=H(t.layers);c++)for(let l=H(t.layers);l>=-H(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;se(n,e,t,o,r,s)}function fu(n,e,t,r,i,s){if(et(t.layers)){let c=Array(S(t.layers)),l=0;for(let h=t.layers-1;h>=0;h--)for(let u=t.layers-1;u>=0;u--){const d=-1+1/t.layers+u*2/t.layers,f=-1+1/t.layers+h*2/t.layers;c[l]=[d,f,i],l++}se(n,e,t,c,r,s);return}let o=Array(S(t.layers)),a=0;for(let c=H(t.layers);c>=-H(t.layers);c--)for(let l=H(t.layers);l>=-H(t.layers);l--)o[a]=[2*l/t.layers,2*c/t.layers,i],a++;se(n,e,t,o,r,s)}function se(n,e,t,r,i,s){for(let o=0;o<S(t.layers);o++){const a=r[o];pu(n,e+o*Wi,t,a[0],a[1],a[2],i,s)}}function pu(n,e,t,r,i,s,o,a){const c=1/t.layers-a,l=[[r-c,i-c,s],[r+c,i-c,s],[r+c,i+c,s],[r-c,i+c,s]];for(let h=0;h<au;h++){const u=l[h];n[e+h*Ve]=u[(o+0)%Ve],n[e+h*Ve+1]=u[(o+1)%Ve],n[e+h*Ve+2]=u[(o+2)%Ve]}}const gu=100,mu=15;class _u{constructor(){G(this,"position");G(this,"_velocity");G(this,"_acceleration");G(this,"target");this.position=0,this._velocity=200,this._acceleration=0,this.target=0}update(e){const t=-gu*(this.position-this.target),r=-mu*this._velocity;this._acceleration=t+r,this._velocity+=this._acceleration*e,this.position+=this._velocity*e}}function Tr(n,e){return n/e*2-1}function kr(n,e){return 1-n/e*2}function cn(n,e,t,r){return n<t?(r-e)/(t-n):(e-r)/(n-t)}function We(n,e,t,r,i,s){return Math.abs(.5*(n*(r-s)+t*(s-e)+i*(e-r)))}function yu(n,e){return n.layers-1-e%n.layers}function ln(n,e){return n.layers-1-Math.floor(e/n.layers)}function vu(n,e){return e%n.layers}function un(n,e){return n.layers-1-Math.floor((e-S(n.layers))/n.layers)}class bu{constructor(){G(this,"numOfPointerMoves");G(this,"xOnDown");G(this,"yOnDown");G(this,"xOnMove");G(this,"yOnMove");G(this,"stickerOnDown");G(this,"cart2dOnDown")}onPointerDown(e,t,r,i,s){this.numOfPointerMoves=0;const o=Tr(e,r.clientWidth),a=kr(t,r.clientHeight);this.xOnDown=o,this.yOnDown=a,[this.stickerOnDown,this.cart2dOnDown]=this._coordinatesToSticker(o,a,i,s);function c(g,_,m){return{x:s[g].cart2d[_],y:s[g].cart2d[m]}}if(this.stickerOnDown!==-1)return;const l=c(0,0,1),h=c(i.layers*(i.layers-1),6,7),u=c(i.layers-1,2,3),d=c(S(i.layers)-1,4,5),f=c(i.layers*(i.layers+1)-1,0,1),p=c(S(i.layers)*2-1,2,3);a>l.y&&o>l.x&&o<h.x?i.cubeRotate(0,!0):o<l.x&&a>u.y&&a<l.y?i.cubeRotate(2,!1):o>h.x&&a>d.y&&a<h.y?i.cubeRotate(2,!0):o<f.x&&a>f.y&&a<u.y?i.cubeRotate(1,!0):o>p.x&&a>p.y&&a<d.y?i.cubeRotate(1,!1):a<f.y&&o>f.x&&o<p.x&&i.cubeRotate(0,!1)}onPointerMove(e,t){this.numOfPointerMoves++,this.xOnMove=e,this.yOnMove=t}onPointerUp(e,t,r){if(this.numOfPointerMoves<2)return;let i,s;if(this.stickerOnDown!==-1&&(i=cn(this.cart2dOnDown[0],this.cart2dOnDown[1],this.cart2dOnDown[4],this.cart2dOnDown[5]),s=cn(this.cart2dOnDown[2],this.cart2dOnDown[3],this.cart2dOnDown[6],this.cart2dOnDown[7]),i<0)){const l=i;i=s,s=l}const o=Tr(this.xOnMove,e.clientWidth),a=kr(this.yOnMove,e.clientHeight),c=cn(o,a,this.xOnDown,this.yOnDown);t.stickerIsOnFace(this.stickerOnDown,0)?o===this.xOnDown?t.turn(0,ln(t,this.stickerOnDown),a>this.yOnDown):c>i?t.turn(0,ln(t,this.stickerOnDown),o>this.xOnDown):c<s?t.turn(0,ln(t,this.stickerOnDown),o<this.xOnDown):t.turn(2,yu(t,this.stickerOnDown),o>this.xOnDown):t.stickerIsOnFace(this.stickerOnDown,1)&&(o===this.xOnDown?t.turn(0,un(t,this.stickerOnDown),a>this.yOnDown):c>i?t.turn(0,un(t,this.stickerOnDown),o>this.xOnDown):c<s?t.turn(0,un(t,this.stickerOnDown),o<this.xOnDown):t.turn(1,vu(t,this.stickerOnDown),o<this.xOnDown))}_coordinatesToSticker(e,t,r,i){const s=o=>{if(!i[o].cart2d){console.error("cart2d is undefined");return}const a=i[o].cart2d,c=We(a[0],a[1],a[2],a[3],a[4],a[5])+We(a[0],a[1],a[4],a[5],a[6],a[7]),l=We(e,t,a[0],a[1],a[2],a[3])+We(e,t,a[2],a[3],a[4],a[5])+We(e,t,a[4],a[5],a[6],a[7])+We(e,t,a[6],a[7],a[0],a[1]),h=1e-5;if(Math.abs(c-l)<h)return[o,a]};for(let o=0;o<2*S(r.layers);o++){const a=s(o);if(a)return a}return[-1,void 0]}}function Ot(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function wu(n,e,t,r,i){const s=1/Math.tan(e/2);if(n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,i!=null&&i!==1/0){const o=1/(r-i);n[10]=(i+r)*o,n[14]=2*i*r*o}else n[10]=-1,n[14]=-2*r;return n}function Vt(n,e,t,r){let i=r[0],s=r[1],o=r[2],a=1/Math.hypot(i,s,o);i*=a,s*=a,o*=a;let c=Math.sin(t),l=Math.cos(t),h=1-l,u=e[0],d=e[1],f=e[2],p=e[3],g=e[4],_=e[5],m=e[6],T=e[7],A=e[8],R=e[9],W=e[10],q=e[11],J=i*i*h+l,K=s*i*h+o*c,v=o*i*h-s*c,k=i*s*h-o*c,Z=s*s*h+l,j=o*s*h+i*c,z=i*o*h+s*c,b=s*o*h-i*c,M=o*o*h+l;return n[0]=u*J+g*K+A*v,n[1]=d*J+_*K+R*v,n[2]=f*J+m*K+W*v,n[3]=p*J+T*K+q*v,n[4]=u*k+g*Z+A*j,n[5]=d*k+_*Z+R*j,n[6]=f*k+m*Z+W*j,n[7]=p*k+T*Z+q*j,n[8]=u*z+g*b+A*M,n[9]=d*z+_*b+R*M,n[10]=f*z+m*b+W*M,n[11]=p*z+T*b+q*M,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function Iu(n,e){let t=e[0],r=e[1],i=e[2];return n[12]+=n[0]*t+n[4]*r+n[7]*i,n[13]+=n[1]*t+n[5]*r+n[8]*i,n[14]+=n[2]*t+n[5]*r+n[9]*i,n[15]+=n[3]*t+n[6]*r+n[10]*i,n}function Ar(){let n;return e=>(n||(n=e()),n)}let re,C,de,Tn=[],Rr={animateTurns:!0,hintStickers:!0,showBody:!0},Cr=Date.now()*.001,Eu=3,Or=!1;function Su(){Or||(Or=!0,requestAnimationFrame(ji))}function Tu(n,e){C||(re=e,C=re.getContext("webgl"),de=ku());let t=new ou(C),r=new _u,i=Au(n),s=new bu;t.setNumOfLayers(Eu);let o=Sn({gl:C,cube:t,perspectiveMatrix:i}),a={div:n,gl:C,cube:t,spring:r,buffers:o,perspectiveMatrix:i};const c=(p,g)=>{a.dragEnabled&&s.onPointerDown(p,g,a.div,a.cube,a.buffers)},l=(p,g)=>{a.dragEnabled&&s.onPointerMove(p,g)},h=()=>{a.dragEnabled&&s.onPointerUp(a.div,a.cube,a.buffers)},u=p=>{const g=p.target.getBoundingClientRect(),_=p.touches[0].pageX-g.left,m=p.touches[0].pageY-g.top;return{x:_,y:m}},d=()=>{n.addEventListener("pointerdown",p=>c(p.offsetX,p.offsetY)),n.addEventListener("pointermove",p=>l(p.offsetX,p.offsetY)),n.addEventListener("pointerup",p=>h())},f=()=>{n.addEventListener("touchstart",p=>{const{x:g,y:_}=u(p);c(g,_)}),n.addEventListener("touchmove",p=>{const{x:g,y:_}=u(p);l(g,_)}),n.addEventListener("touchend",p=>{h()})};return window.PointerEvent?d():f(),a}function ku(){const t=Ru(C,`
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
    `);return C.useProgram(t),{attribLocations:{vertexPosition:C.getAttribLocation(t,"aVertexPosition"),vertexColor:C.getAttribLocation(t,"aVertexColor")},uniformLocations:{transformMatrix:C.getUniformLocation(t,"uTransformMatrix"),rotateMatrix:C.getUniformLocation(t,"uRotateMatrix")}}}function Au(n){let e=Ot();return wu(e,50*Math.PI/180,n.clientWidth/n.clientHeight,.1,100),Iu(e,[0,0,-5]),Vt(e,e,45*Math.PI/180,[1,0,0]),Vt(e,e,0,[0,-1,0]),e}function hn(n,e,t){t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(e.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexPosition)}function dn(n,e,t){t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(e.attribLocations.vertexColor,4,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexColor)}function fn(n){n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)}function Ru(n,e,t){const r=Dr(n,n.VERTEX_SHADER,e),i=Dr(n,n.FRAGMENT_SHADER,t),s=n.createProgram();return n.attachShader(s,r),n.attachShader(s,i),n.linkProgram(s),n.getProgramParameter(s,n.LINK_STATUS)?s:(alert("Unable to initialize the shader program: "+n.getProgramInfoLog(s)),null)}function Dr(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)?r:(alert("An error occurred compiling the shaders: "+n.getShaderInfoLog(r)),n.deleteShader(r),null)}function Cu(){const n=re.clientWidth,e=re.clientHeight,t=re.width!==n||re.height!==e;return t&&(re.width=n,re.height=e),t}function ji(n){n*=.001;const e=n-Cr;Cr=n,Cu(),C.enable(C.DEPTH_TEST),C.enable(C.SCISSOR_TEST),C.depthFunc(C.LEQUAL),C.clear(C.COLOR_BUFFER_BIT|C.DEPTH_BUFFER_BIT),re.style.transform=`translateY(${window.scrollY}px)`;for(let t=0;t<Tn.length;t++){const{cube:r,div:i,spring:s,buffers:o,perspectiveMatrix:a}=Tn[t],c=i.getBoundingClientRect();if(c.bottom<0||c.top>re.clientHeight||c.right<0||c.left>re.clientWidth)continue;const l=c.right-c.left,h=c.bottom-c.top,u=c.left,d=re.clientHeight-c.bottom;C.viewport(u,d,l,h),C.scissor(u,d,l,h),r.animationQueue[0]&&(s.target=r.animationQueue.length*90,s.update(e),s.position>=90&&(r.affectedStickers=Array(te(r.layers)).fill(!1),s.position=0,r.animationQueue.shift()));const f=r.animationQueue[0];let p=Ou(r),g=Ar(),_=Ar();for(let m=0;m<te(r.layers);m++){let T=o[m];const A=f&&f.stickersToAnimate[m]&&Rr.animateTurns?g(()=>Vt(Ot(),a,s.position*Math.PI/180,f.axis)):a;C.uniformMatrix4fv(de.uniformLocations.transformMatrix,!1,A);const R=f&&f.stickersToAnimate[m]&&Rr.animateTurns?_(()=>{const W=Ot();return Vt(W,W,s.position*Math.PI/180,f.axis)}):Ot();C.uniformMatrix4fv(de.uniformLocations.rotateMatrix,!1,R),C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,T.indexBuffer),hn(T.noGapPositionBuffer,de,C),dn(r.underStickers[m].buffer,de,C),fn(C),hn(T.positionBuffer,de,C),dn(p[m].buffer,de,C),fn(C),hn(T.hintPositionBuffer,de,C),dn(p[m].buffer,de,C),fn(C)}}requestAnimationFrame(ji)}function Ou(n){return n.animationQueue[0]?n.animationQueue[0].stickers:n.stickers}function Du(n){let e,t,r,i,s;return{c(){e=w("div"),t=w("canvas"),r=D(),i=w("div"),E(i,"class","glDiv"),E(e,"class",s=n[2].class)},m(o,a){V(o,e,a),y(e,t),n[4](t),y(e,r),y(e,i),n[5](i)},p(o,[a]){a&4&&s!==(s=o[2].class)&&E(e,"class",s)},i:P,o:P,d(o){o&&$(e),n[4](null),n[5](null)}}}function Pu(n,e,t){let{onSceneInitialized:r}=e,i,s;as(()=>{const c=Tu(s,i);Tn.push(c),c.cube.solve(),c.dragEnabled=!0,Su(),r(c)});function o(c){Je[c?"unshift":"push"](()=>{i=c,t(0,i)})}function a(c){Je[c?"unshift":"push"](()=>{s=c,t(1,s)})}return n.$$set=c=>{t(2,e=me(me({},e),De(c))),"onSceneInitialized"in c&&t(3,r=c.onSceneInitialized)},e=De(e),[i,s,e,r,o,a]}class Mu extends le{constructor(e){super(),ce(this,e,Pu,Du,ae,{onSceneInitialized:3})}}async function Lu(n,e){return Yt("/getScramble",{setName:n,alg:e})}async function Nu(n,e){return Yt("/getTrainingAlgs",{uid:n,set:e})}async function xu(n,e,t,r,i){return Yt("/createTrainingAlgs",{uid:n,set:e,trainingAlgs:t,cube:r,inactiveStickers:i})}async function Uu(n,e){return Yt("/updateTrainingAlgs",{id:n,trainingAlgs:e})}async function Yt(n,e){return console.log({endpoint:n}),fetch(`${Ui}${n}`,{method:"POST",body:JSON.stringify(e)}).then(t=>t.json())}const Dt={CMLL:{cube:"3x3",inactive:[1,3,4,5,7,12,13,14,21,22,23,30,31,32,39,48]},F2L:{cube:"3x3",inactive:[0,1,2,3,5,6,7,8,9,12,15,29,32,35,36,39,42,45,48,51]},OLL:{cube:"3x3",inactive:[9,12,15,29,32,35,36,39,42,45,48,51]},PLL:{cube:"3x3",inactive:[]},ZBLL:{cube:"3x3",inactive:[]},"2x2 CLL":{cube:"2x2",inactive:[]},"2x2 EG1":{cube:"2x2",inactive:[]},"2x2 EG2":{cube:"2x2",inactive:[]}};let F={scene:null,setName:null,preRotation:"",algSetID:null,trainingAlgs:null,cube:null,inactiveStickers:null,preAUF:"",postAUF:""};function Pr(n){return zi(n,F.preAUF,F.postAUF)}function Bu(n){const e=Nr(F.preAUF),t=Nr(F.postAUF);return zi(n,t,e)}function zi(n,e,t){e&&(n=`${e} ${n}`),t&&(n=`${n} ${t}`);let r=n.split(" ");const i=Mr(r[0],r[1]),s=Mr(r[r.length-2],r[r.length-1]);return r=r.slice(2,-2),r=i.concat(r).concat(s),r.join(" ")}function Mr(n,e){if(n[0]!=="U"||e[0]!=="U")return[n,e];const t=(Lr(n)+Lr(e))%4;return t===0?[]:[Fu(t)]}function Lr(n){return n.endsWith("'")?3:n.endsWith("2")?2:1}function Fu(n){return["","U","U2","U'"][n]}function Nr(n){return n===""?"":n.endsWith("'")?n.slice(0,-1):n.endsWith("2")?n:`${n}'`}function xr(){return["","U","U2","U'"][qe(4)]}function $u(n){F.scene=n}async function it(n,e){const t=F.scene;if(!t){console.error("Scene not set. Have you called setScene()?");return}if(F.setName!==e){F.setName=e;const i=await Nu(n,e);F.algSetID=i.id,F.trainingAlgs=i.trainingAlgs,Dt[e].cube=="2x2"?(t.cube.setNumOfLayers(2),t.buffers=Sn(t),t.cube.solve()):Dt[e].cube=="3x3"&&(t.cube.setNumOfLayers(3),t.buffers=Sn(t),t.cube.solve())}if(!F.trainingAlgs||F.trainingAlgs.length==0){console.error("No algs to load");return}let r=F.trainingAlgs[0].Alg;return F.preAUF=xr(),F.postAUF=xr(),t.cube.solve(),t.cube.execAlg(F.preRotation),Dt[e].inactive.forEach(i=>{Ct(t.cube.stickers[i],Gl)}),t.cube.execAlgReverse(r),r}async function Ur(n,e,t){if(n?eu(F.trainingAlgs):tu(F.trainingAlgs),F.algSetID===-1){const r=await xu(e,t,F.trainingAlgs,F.cube,F.inactiveStickers);r.success?F.algSetID=r.id:console.error("Failed to create training algs")}else Uu(F.algSetID,F.trainingAlgs);return it(e,t)}function Hu(){return Object.keys(Dt)}function Vu(n){let e,t;return e=new xe({props:{name:"menu",alt:"Open the side navigation panel",class:"hover:cursor-pointer ml-4 hover:bg-slate-500 rounded-lg"}}),e.$on("click",n[0]),{c(){Q(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p:P,i(r){t||(N(e.$$.fragment,r),t=!0)},o(r){U(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function Wu(n){function e(t){jr.call(this,n,t)}return[e]}class ju extends le{constructor(e){super(),ce(this,e,Wu,Vu,ae,{})}}function zu(n){let e,t,r,i,s,o,a,c,l;return{c(){e=w("div"),t=w("div"),r=w("h5"),r.textContent="Menu",i=D(),s=w("button"),s.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="white"><path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2"></path></svg>',o=D(),a=w("div"),a.innerHTML=`<div style="height: 8px;"></div> 
        <a class="btn-primary" href="learn.html">Learn</a> 
        <div style="height: 8px;"></div> 
        <a class="btn-primary" href="play.html">Play</a> 
        <div style="height: 8px;"></div> 
        <a class="btn-primary" href="train.html">Train</a> 
        <div style="height: 8px;"></div> 
        <a class="btn-primary" href="cuble.html">Cuble</a>`,O(r,"color","white"),O(r,"font-size","1.2rem"),E(s,"class","xButton"),E(t,"class","row"),O(t,"justify-content","space-between"),O(t,"padding","8px"),O(a,"display","flex"),O(a,"flex-direction","column"),E(e,"style",n[1])},m(h,u){V(h,e,u),y(e,t),y(t,r),y(t,i),y(t,s),y(e,o),y(e,a),c||(l=ne(s,"click",function(){kn(n[0])&&n[0].apply(this,arguments)}),c=!0)},p(h,[u]){n=h,u&2&&E(e,"style",n[1])},i:P,o:P,d(h){h&&$(e),c=!1,l()}}}function Gu(n,e,t){let r,{open:i}=e,{onClose:s=()=>{}}=e;return n.$$set=o=>{"open"in o&&t(2,i=o.open),"onClose"in o&&t(0,s=o.onClose)},n.$$.update=()=>{n.$$.dirty&4&&t(1,r=`position: fixed; top: 0; left: 0; width: 300px; height: 100%; background-color: #2f2f32; z-index: 10; ${i?"transform: translateX(0); transition: transform 0.3s ease-in-out":"transform: translateX(-100%); transition: transform 0.3s ease-in-out"}`)},[s,r,i]}class Ku extends le{constructor(e){super(),ce(this,e,Gu,zu,ae,{open:2,onClose:0})}}function Br(n,e,t){const r=n.slice();return r[36]=e[t],r}function Fr(n){let e,t,r,i,s;return t=new xe({props:{class:"icon",style:"padding: 8px;",name:"profile",alt:"Profile"}}),t.$on("click",n[15]),i=new xe({props:{class:"icon",style:"padding: 8px;",name:"settings",alt:"Settings"}}),i.$on("click",n[16]),{c(){e=w("div"),Q(t.$$.fragment),r=D(),Q(i.$$.fragment),E(e,"id","iconContainer"),E(e,"class","row")},m(o,a){V(o,e,a),Y(t,e,null),y(e,r),Y(i,e,null),s=!0},p:P,i(o){s||(N(t.$$.fragment,o),N(i.$$.fragment,o),s=!0)},o(o){U(t.$$.fragment,o),U(i.$$.fragment,o),s=!1},d(o){o&&$(e),X(t),X(i)}}}function qu(n){let e,t,r,i,s,o,a,c,l,h,u,d,f,p,g,_,m,T,A,R,W,q;t=new Mu({props:{class:"mt-4",onSceneInitialized:n[23]}}),o=new xe({props:{name:"retry",alt:"Retry Algorithm"}}),o.$on("click",n[24]),l=new xe({props:{name:"sad",alt:"Got algorithm wrong"}}),l.$on("click",n[25]),d=new xe({props:{name:"happy",alt:"Got algorithm right"}}),d.$on("click",n[26]);function J(b,M){return b[4]?Xu:Yu}let K=J(n),v=K(n),k=n[8]&&$r(n);const Z=[Zu,Qu],j=[];function z(b,M){return b[5]===0?0:b[5]===1?1:-1}return~(m=z(n))&&(T=j[m]=Z[m](n)),{c(){e=w("div"),Q(t.$$.fragment),r=D(),i=w("div"),s=w("div"),Q(o.$$.fragment),a=D(),c=w("div"),Q(l.$$.fragment),h=D(),u=w("div"),Q(d.$$.fragment),f=D(),p=w("button"),v.c(),g=D(),k&&k.c(),_=D(),T&&T.c(),A=rs(),E(s,"class","bg-neutral-700 hover:bg-neutral-800 hover:cursor-pointer"),O(s,"max-width","48px"),O(s,"max-height","48px"),O(s,"padding","2px"),O(s,"box-shadow","0 0 4px black"),O(s,"border-radius","50%"),E(c,"class","bg-red-500 hover:bg-red-700 hover:cursor-pointer"),O(c,"max-width","48px"),O(c,"max-height","48px"),O(c,"padding","2px"),O(c,"box-shadow","0 0 4px black"),O(c,"border-radius","50%"),E(u,"class","bg-green-500 hover:bg-green-700 hover:cursor-pointer"),O(u,"max-width","48px"),O(u,"max-height","48px"),O(u,"padding","2px"),O(u,"box-shadow","0 0 4px black"),O(u,"border-radius","50%"),E(i,"class","row mt-4"),O(i,"gap","16px"),E(p,"class","mt-4"),E(e,"class","col w-full h-full")},m(b,M){V(b,e,M),Y(t,e,null),y(e,r),y(e,i),y(i,s),Y(o,s,null),y(i,a),y(i,c),Y(l,c,null),y(i,h),y(i,u),Y(d,u,null),y(e,f),y(e,p),v.m(p,null),y(e,g),k&&k.m(e,null),V(b,_,M),~m&&j[m].m(b,M),V(b,A,M),R=!0,W||(q=ne(p,"click",n[27]),W=!0)},p(b,M){const bt={};M[0]&193&&(bt.onSceneInitialized=b[23]),t.$set(bt),K===(K=J(b))&&v?v.p(b,M):(v.d(1),v=K(b),v&&(v.c(),v.m(p,null))),b[8]?k?k.p(b,M):(k=$r(b),k.c(),k.m(e,null)):k&&(k.d(1),k=null);let tt=m;m=z(b),m===tt?~m&&j[m].p(b,M):(T&&(Lt(),U(j[tt],1,1,()=>{j[tt]=null}),Nt()),~m?(T=j[m],T?T.p(b,M):(T=j[m]=Z[m](b),T.c()),N(T,1),T.m(A.parentNode,A)):T=null)},i(b){R||(N(t.$$.fragment,b),N(o.$$.fragment,b),N(l.$$.fragment,b),N(d.$$.fragment,b),N(T),R=!0)},o(b){U(t.$$.fragment,b),U(o.$$.fragment,b),U(l.$$.fragment,b),U(d.$$.fragment,b),U(T),R=!1},d(b){b&&$(e),X(t),X(o),X(l),X(d),v.d(),k&&k.d(),b&&$(_),~m&&j[m].d(b),b&&$(A),W=!1,q()}}}function Ju(n){let e,t,r,i,s,o,a,c,l,h;const u=[rh,nh],d=[];function f(p,g){return p[0]?0:1}return c=f(n),l=d[c]=u[c](n),{c(){e=w("div"),t=w("h1"),t.textContent="Algorithm Trainer",r=D(),i=w("p"),i.textContent="Learn algorithms at lightning speed",s=D(),o=w("div"),o.innerHTML=`<h2 class="text-white mt-4">1. Memorize faster</h2> 
          <ul><li class="text-white">Get an algorithm right, and you&#39;ll see it less often.</li> 
            <li class="text-white">Get an algorithm wrong, and you&#39;ll see it more often.</li></ul> 
          <h2 class="text-white">2. Virtual Cube</h2> 
          <p class="text-white mt-4">Virtual cubes are better because:</p> 
          <ul><li class="text-white">You&#39;ll never have to scramble a cube again</li> 
            <li class="text-white">You can practice anywhere, anytime</li></ul>`,a=D(),l.c(),E(t,"class","text-white mt-4"),E(i,"class","text-gray-300 mt-4 font-bold"),E(e,"class","col w-full h-full")},m(p,g){V(p,e,g),y(e,t),y(e,r),y(e,i),y(e,s),y(e,o),y(e,a),d[c].m(e,null),h=!0},p(p,g){let _=c;c=f(p),c===_?d[c].p(p,g):(Lt(),U(d[_],1,1,()=>{d[_]=null}),Nt(),l=d[c],l?l.p(p,g):(l=d[c]=u[c](p),l.c()),N(l,1),l.m(e,null))},i(p){h||(N(l),h=!0)},o(p){U(l),h=!1},d(p){p&&$(e),d[c].d()}}}function Yu(n){let e;return{c(){e=oe("show solution")},m(t,r){V(t,e,r)},p:P,d(t){t&&$(e)}}}function Xu(n){let e,t=Pr(n[7])+"",r;return{c(){e=oe("solution: "),r=oe(t)},m(i,s){V(i,e,s),V(i,r,s)},p(i,s){s[0]&128&&t!==(t=Pr(i[7])+"")&&Wt(r,t)},d(i){i&&$(e),i&&$(r)}}}function $r(n){let e,t,r;return{c(){e=w("p"),t=oe("scramble: "),r=oe(n[9]),E(e,"class","mt-4 text-white")},m(i,s){V(i,e,s),y(e,t),y(e,r)},p(i,s){s[0]&512&&Wt(r,i[9])},d(i){i&&$(e)}}}function Qu(n){let e,t;return e=new Hi({props:{title:"Settings",close:n[34],$$slots:{default:[eh]},$$scope:{ctx:n}}}),{c(){Q(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p(r,i){const s={};i[0]&449|i[1]&256&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(N(e.$$.fragment,r),t=!0)},o(r){U(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function Zu(n){let e,t;return e=new Hi({props:{title:"Profile",close:n[29],$$slots:{default:[th]},$$scope:{ctx:n}}}),{c(){Q(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p(r,i){const s={};i[0]&9|i[1]&256&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(N(e.$$.fragment,r),t=!0)},o(r){U(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function Hr(n){let e,t=n[36]+"",r;return{c(){e=w("option"),r=oe(t),e.__value=n[36],e.value=e.__value},m(i,s){V(i,e,s),y(e,r)},p:P,d(i){i&&$(e)}}}function eh(n){let e,t,r,i,s,o,a,c,l,h,u,d,f=n[12],p=[];for(let g=0;g<f.length;g+=1)p[g]=Hr(Br(n,f,g));return{c(){e=w("div"),t=w("p"),t.textContent="algorithm set",r=D(),i=w("select");for(let g=0;g<p.length;g+=1)p[g].c();s=D(),o=w("div"),a=D(),c=w("p"),c.textContent="show scramble",l=D(),h=w("input"),n[6]===void 0&&Mt(()=>n[30].call(i)),O(o,"height","16px"),E(h,"type","checkbox"),O(e,"padding","16px")},m(g,_){V(g,e,_),y(e,t),y(e,r),y(e,i);for(let m=0;m<p.length;m+=1)p[m].m(i,null);jn(i,n[6]),y(e,s),y(e,o),y(e,a),y(e,c),y(e,l),y(e,h),h.checked=n[8],u||(d=[ne(i,"change",n[30]),ne(i,"change",n[31]),ne(h,"change",n[32]),ne(h,"change",n[33])],u=!0)},p(g,_){if(_[0]&4096){f=g[12];let m;for(m=0;m<f.length;m+=1){const T=Br(g,f,m);p[m]?p[m].p(T,_):(p[m]=Hr(T),p[m].c(),p[m].m(i,null))}for(;m<p.length;m+=1)p[m].d(1);p.length=f.length}_[0]&4160&&jn(i,g[6]),_[0]&256&&(h.checked=g[8])},d(g){g&&$(e),ns(p,g),u=!1,Ye(d)}}}function th(n){let e,t,r,i=n[0].email+"",s,o,a,c,l;return{c(){e=w("div"),t=w("p"),r=oe("signed in as "),s=oe(i),o=D(),a=w("button"),a.textContent="Sign Out",E(a,"class","btn-primary"),O(e,"padding","12px")},m(h,u){V(h,e,u),y(e,t),y(t,r),y(t,s),y(e,o),y(e,a),c||(l=ne(a,"click",n[28]),c=!0)},p(h,u){u[0]&1&&i!==(i=h[0].email+"")&&Wt(s,i)},d(h){h&&$(e),c=!1,l()}}}function nh(n){let e,t,r,i,s,o,a,c,l,h,u,d,f,p,g,_,m,T,A,R;t=new Ll({props:{callback:n[18]}});function W(v){n[19](v)}let q={class:"mt-4"};n[1]!==void 0&&(q.value=n[1]),c=new Ul({props:q}),Je.push(()=>Gn(c,"value",W));function J(v){n[20](v)}let K={class:"mt-4"};return n[2]!==void 0&&(K.value=n[2]),u=new $l({props:K}),Je.push(()=>Gn(u,"value",J)),g=new Rl({props:{email:n[1],password:n[2],callback:n[21]}}),A=new Dl({props:{email:n[1],password:n[2],callback:n[22]}}),{c(){e=w("div"),Q(t.$$.fragment),r=D(),i=w("div"),s=D(),o=w("p"),o.textContent="Or use email and password",a=D(),Q(c.$$.fragment),h=D(),Q(u.$$.fragment),f=D(),p=w("div"),Q(g.$$.fragment),_=D(),m=w("div"),T=D(),Q(A.$$.fragment),E(i,"class","w-full mt-4 bg-white"),O(i,"height","2px"),E(o,"class","text-white mt-4"),O(m,"width","16px"),E(p,"class","row mt-4"),E(e,"class","col"),O(e,"border-radius","16px"),O(e,"padding","16px"),O(e,"box-shadow","0 0 4px lightgray")},m(v,k){V(v,e,k),Y(t,e,null),y(e,r),y(e,i),y(e,s),y(e,o),y(e,a),Y(c,e,null),y(e,h),Y(u,e,null),y(e,f),y(e,p),Y(g,p,null),y(p,_),y(p,m),y(p,T),Y(A,p,null),R=!0},p(v,k){const Z={};k[0]&1&&(Z.callback=v[18]),t.$set(Z);const j={};!l&&k[0]&2&&(l=!0,j.value=v[1],zn(()=>l=!1)),c.$set(j);const z={};!d&&k[0]&4&&(d=!0,z.value=v[2],zn(()=>d=!1)),u.$set(z);const b={};k[0]&2&&(b.email=v[1]),k[0]&4&&(b.password=v[2]),k[0]&1&&(b.callback=v[21]),g.$set(b);const M={};k[0]&2&&(M.email=v[1]),k[0]&4&&(M.password=v[2]),k[0]&1&&(M.callback=v[22]),A.$set(M)},i(v){R||(N(t.$$.fragment,v),N(c.$$.fragment,v),N(u.$$.fragment,v),N(g.$$.fragment,v),N(A.$$.fragment,v),R=!0)},o(v){U(t.$$.fragment,v),U(c.$$.fragment,v),U(u.$$.fragment,v),U(g.$$.fragment,v),U(A.$$.fragment,v),R=!1},d(v){v&&$(e),X(t),X(c),X(u),X(g),X(A)}}}function rh(n){let e,t,r;return{c(){e=w("button"),e.textContent="Start Training",E(e,"class","btn btn-primary mt-4")},m(i,s){V(i,e,s),t||(r=ne(e,"click",n[17]),t=!0)},p:P,i:P,o:P,d(i){i&&$(e),t=!1,r()}}}function ih(n){let e,t,r,i,s,o,a,c,l,h,u;r=new ju({}),r.$on("click",n[14]);let d=n[3]==="train"&&Fr(n);const f=[Ju,qu],p=[];function g(_,m){return _[3]==="landing"?0:_[3]==="train"?1:-1}return~(a=g(n))&&(c=p[a]=f[a](n)),h=new Ku({props:{open:n[10],onClose:n[35]}}),{c(){e=w("main"),t=w("nav"),Q(r.$$.fragment),i=D(),d&&d.c(),s=D(),o=w("div"),c&&c.c(),l=D(),Q(h.$$.fragment),E(t,"class","navbar"),O(t,"justify-content","space-between"),E(o,"class","row w-full h-full"),E(e,"class","col w-full h-full")},m(_,m){V(_,e,m),y(e,t),Y(r,t,null),y(t,i),d&&d.m(t,null),y(e,s),y(e,o),~a&&p[a].m(o,null),y(e,l),Y(h,e,null),u=!0},p(_,m){_[3]==="train"?d?(d.p(_,m),m[0]&8&&N(d,1)):(d=Fr(_),d.c(),N(d,1),d.m(t,null)):d&&(Lt(),U(d,1,1,()=>{d=null}),Nt());let T=a;a=g(_),a===T?~a&&p[a].p(_,m):(c&&(Lt(),U(p[T],1,1,()=>{p[T]=null}),Nt()),~a?(c=p[a],c?c.p(_,m):(c=p[a]=f[a](_),c.c()),N(c,1),c.m(o,null)):c=null);const A={};m[0]&1024&&(A.open=_[10]),m[0]&1024&&(A.onClose=_[35]),h.$set(A)},i(_){u||(N(r.$$.fragment,_),N(d),N(c),N(h.$$.fragment,_),u=!0)},o(_){U(r.$$.fragment,_),U(d),U(c),U(h.$$.fragment,_),u=!1},d(_){_&&$(e),X(r),d&&d.d(),~a&&p[a].d(),X(h)}}}function sh(n,e,t){let r=wl(),i="",s="",o="landing",a=!1,c=-1;function l(L){c===L?t(5,c=-1):t(5,c=L)}const h=Hu();let u,d;u&&it(r.uid,u).then(L=>{t(7,d=L)});let f=pl(),p="";function g(){if(f){if(u!=="OLL"&&u!=="PLL"){t(9,p=`${u} doesn't have scrambles yet, sorry!`);return}Lu(u,d).then(L=>{if(L.err){console.error(L.err);return}t(9,p=Bu(L.scramble))})}}let _=!1;const m=()=>t(10,_=!0),T=()=>l(0),A=()=>l(1),R=()=>t(3,o="train"),W=L=>t(0,r=L);function q(L){i=L,t(1,i)}function J(L){s=L,t(2,s)}const K=L=>t(0,r=L),v=L=>t(0,r=L),k=L=>{$u(L),t(6,u=dl()??h[0]),it(r.uid,u).then(qi=>{t(7,d=qi),g()})},Z=()=>{it(r.uid,u).then(L=>{t(7,d=L),t(4,a=!1)})},j=()=>{Ur(!1,r.uid,u).then(L=>{t(7,d=L),t(4,a=!1),g()})},z=()=>{Ur(!0,r.uid,u).then(L=>{t(7,d=L),t(4,a=!1),g()})},b=()=>t(4,a=!a),M=()=>{Tl(),t(3,o="landing"),t(0,r=null)},bt=()=>l(0);function tt(){u=ss(this),t(6,u),t(12,h)}const Gi=()=>{it(r.uid,u).then(L=>{t(7,d=L),g()}),fl(u)};function Ki(){f=this.checked,t(8,f)}return[r,i,s,o,a,c,u,d,f,p,_,l,h,g,m,T,A,R,W,q,J,K,v,k,Z,j,z,b,M,bt,tt,Gi,Ki,()=>{g(),gl(f)},()=>l(1),()=>t(10,_=!1)]}class oh extends le{constructor(e){super(),ce(this,e,sh,ih,ae,{},null,[-1,-1])}}new oh({target:document.getElementById("app")});
