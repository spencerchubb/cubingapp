import"./analytics-83a120ef.js";import{S as re,i as ue,s as ce,N as pe,a as me,b as fe,c as de,e as u,d as x,f as m,r as te,g as f,h as s,j as ge,k as e,m as F,z as ne,v as k,w as ae,l as _e,t as M,n as H,o as ve,p as J,A as be}from"./NavBarIcon-a127fe0e.js";import{G as he}from"./GLManager-5c2df976.js";import"./scene-67ffe04a.js";let K;function ke(t){return K=t,S}let S={timerButtonText:"Start",timerText:"0.00",algToPerform:""},D=!1,le,se;function $e(){D=!D,S.timerButtonText=D?"Stop":"Start",K(S),D?(le=Date.now(),se=setInterval(()=>{const t=(Date.now()-le)/1e3;S.timerText=t.toFixed(2),K(S)},10)):clearInterval(se)}function ie(t){t.cube.performAlg(S.algToPerform)}function we(t){let i,p,l,B,o,a,c,d,I,$,P,w,C,g,N,r,T=t[1].timerText+"",L,Q,j,z=t[1].timerButtonText+"",E,R,v,_,U,G,V,A,W,b,O,y,q,X;l=new pe({props:{name:"menu"}}),l.$on("click",t[4]),g=new he({props:{onSceneInitialized:t[7]}});function oe(n){t[12](n)}let Y={};return t[2]!==void 0&&(Y.open=t[2]),b=new me({props:Y}),fe.push(()=>de(b,"open",oe)),{c(){i=u("main"),p=u("nav"),x(l.$$.fragment),B=m(),o=u("div"),a=u("div"),c=u("div"),d=u("input"),I=m(),$=u("button"),$.textContent="Solve",P=m(),w=u("button"),w.textContent="Scramble",C=m(),x(g.$$.fragment),N=m(),r=u("p"),L=te(T),Q=m(),j=u("button"),E=te(z),R=m(),v=u("div"),_=u("input"),U=m(),G=u("div"),V=m(),A=u("button"),A.textContent="go",W=m(),x(b.$$.fragment),f(p,"class","navbar"),s(p,"justify-content","space-between"),f(d,"type","number"),d.value="3",f(d,"min","1"),s(d,"width","100px"),f(c,"class","row"),s(c,"justify-content","space-between"),s(c,"gap","16px"),s(r,"font-size","1.5rem"),f(_,"type","text"),f(_,"placeholder","Type an algorithm"),s(G,"width","16px"),f(v,"class","row"),f(a,"class","col"),s(a,"gap","16px"),s(a,"padding","16px"),f(o,"class","row"),s(o,"justify-content","center"),s(o,"align-items","start"),s(o,"width","100%"),s(o,"height","100%"),s(o,"position","relative"),f(i,"class","col"),s(i,"width","100%"),s(i,"height","100%")},m(n,h){ge(n,i,h),e(i,p),F(l,p,null),e(i,B),e(i,o),e(o,a),e(a,c),e(c,d),e(c,I),e(c,$),e(c,P),e(c,w),e(a,C),F(g,a,null),e(a,N),e(a,r),e(r,L),e(a,Q),e(a,j),e(j,E),e(a,R),e(a,v),e(v,_),ne(_,t[1].algToPerform),e(v,U),e(v,G),e(v,V),e(v,A),e(i,W),F(b,i,null),y=!0,q||(X=[k(d,"change",t[3]),k($,"click",t[5]),k(w,"click",t[6]),k(j,"click",t[8]),k(_,"input",t[9]),k(_,"keypress",t[10]),k(A,"click",t[11])],q=!0)},p(n,[h]){const Z={};h&1&&(Z.onSceneInitialized=n[7]),g.$set(Z),(!y||h&2)&&T!==(T=n[1].timerText+"")&&ae(L,T),(!y||h&2)&&z!==(z=n[1].timerButtonText+"")&&ae(E,z),h&2&&_.value!==n[1].algToPerform&&ne(_,n[1].algToPerform);const ee={};!O&&h&4&&(O=!0,ee.open=n[2],_e(()=>O=!1)),b.$set(ee)},i(n){y||(M(l.$$.fragment,n),M(g.$$.fragment,n),M(b.$$.fragment,n),y=!0)},o(n){H(l.$$.fragment,n),H(g.$$.fragment,n),H(b.$$.fragment,n),y=!1},d(n){n&&ve(i),J(l),J(g),J(b),q=!1,be(X)}}}function Te(t,i,p){let l;function B(r){const T=r.target.value;l.cube.setNumOfLayers(parseInt(T))}let o=ke(r=>{p(1,o=r)}),a=!1;const c=()=>p(2,a=!0),d=()=>l.cube.solve(),I=()=>l.cube.scramble(),$=r=>{p(0,l=r)},P=()=>$e();function w(){o.algToPerform=this.value,p(1,o)}const C=r=>{r.key==="Enter"&&ie(l)},g=()=>ie(l);function N(r){a=r,p(2,a)}return[l,o,a,B,c,d,I,$,P,w,C,g,N]}class ye extends re{constructor(i){super(),ue(this,i,Te,we,ce,{})}}new ye({target:document.getElementById("app")});
