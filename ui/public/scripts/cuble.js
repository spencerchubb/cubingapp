(()=>{var jt=[1,1,1,1],gt=[.5,.5,.5,1],qt=[1,1,0,1],Nt=[0,1,0,1],zt=[0,0,1,1],Qt=[1,.5,0,1],Vt=[1,0,0,1],kt=[0,0,0,1],bt=[jt,Nt,qt,zt,Qt,Vt];function J(r){return(r<0||r>=bt.length)&&console.error("Invalid face: "+r),bt[r]}function it(r,e){return Math.floor(r/m(e.layers))}function Q(r){return Math.floor(Math.random()*r)}function At(r){let e=r.length;for(;e!=0;){let t=Q(e);e--;let n=r[t];r[t]=r[e],r[e]=n}return r}var U=0,w=1,K=2,G=3,H=4,W=5,Xt=[[U,G,H],[U,W,G],[U,H,w],[U,w,W],[K,w,H],[K,W,w],[K,H,G],[K,G,W]],$t=[[U,G],[U,H],[U,W],[U,w],[w,H],[w,W],[K,w],[K,H],[K,W],[K,G],[G,H],[G,W]];function Tt(r){let e=Rt(12,2),t=Rt(8,3),n=at(8),s=at(12);for(;vt(n)!==vt(s);)n=at(8);let o=Array(54);for(let g=0;g<6;g++){let T=r.center(g);o[T]=g}let l=r.corners(0,0),i=r.corners(1,0),a=r.corners(2,0),c=r.corners(3,0),u=r.corners(4,0),h=r.corners(5,0),f=(g,T,q,M,O,P,D,F,_)=>{let R=(B,I)=>Xt[n[B]][(t[B]+I)%3];o[g.topLeft]=R(T,P),o[g.topRight]=R(q,D),o[g.bottomLeft]=R(M,F),o[g.bottomRight]=R(O,_)};f(l,0,1,2,3,0,0,0,0),f(i,2,3,4,5,2,1,1,2),f(a,4,5,6,7,0,0,0,0),f(c,6,7,0,1,2,1,1,2),f(u,0,2,6,4,2,1,1,2),f(h,3,1,5,7,2,1,1,2);let d=r.edges(0,0,0),y=r.edges(1,0,0),x=r.edges(2,0,0),A=r.edges(3,0,0),k=r.edges(4,0,0),C=r.edges(5,0,0),v=(g,T,q,M,O,P,D,F,_)=>{let R=(B,I)=>$t[s[B]][(e[B]+I)%2];o[g.top]=R(T,P),o[g.left]=R(q,D),o[g.right]=R(M,F),o[g.bottom]=R(O,_)};return v(d,0,1,2,3,0,0,0,0),v(y,3,4,5,6,1,0,0,1),v(x,6,7,8,9,0,0,0,0),v(A,9,10,11,0,1,0,0,1),v(k,1,10,4,7,1,1,1,1),v(C,2,5,11,8,1,1,1,1),o}function Rt(r,e){let t=Array(r);for(let n=0;n<r;n++)t[n]=Q(e);for(;!Jt(t,e);){let n=Q(r);t[n]=Q(e)}return t}function Jt(r,e){let t=0;for(let n=0;n<r.length;n++)t+=r[n];return t%e===0}function at(r){let e=Array(r);for(let t=0;t<r;t++)e[t]=t;return At(e),e}function vt(r){let e=[...r],t=!1;for(;;)if(e[0]===0){let n=e.findIndex((s,o)=>s!==o);if(n===-1)return t;e[0]=e[n],e[n]=0,t=!t}else{let n=e[0];e[0]=e[n],e[n]=n,t=!t}}var Zt=document.querySelector("canvas"),N=Zt.getContext("webgl");function V(r,e){let t=[e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3]];N.bindBuffer(N.ARRAY_BUFFER,r.buffer),N.bufferData(N.ARRAY_BUFFER,new Float32Array(t),N.STATIC_DRAW)}function m(r){return r*r}function b(r){return Math.floor(r/2)}function z(r){return r%2==0}function S(r){return r*r*6}var et=class{constructor(){this.animationQueue=[]}setColors(e){for(let t=0;t<S(this.layers);t++)V(this.stickers[t],e[t])}solve(){let e=Array(S(this.layers));for(let t=0;t<S(this.layers);t++)e[t]=J(it(t,this));this.setColors(e)}scramble(){if(this.layers===3){this.scramble3x3();return}this.naiveScramble()}scramble3x3(){let e=Tt(this);this.setCubeState(e)}naiveScramble(){let e=m(this.layers)*10;for(let t=0;t<e;t++){let n=Math.floor(Math.random()*3),s=Math.floor(Math.random()*this.layers),o=Math.floor(Math.random()*1)==0;this._matchTurn(n,s,o)}}setNumOfLayers(e){this.layers=e,this.stickers=Array(S(e)),this.underStickers=Array(S(e));for(let t=0;t<S(e);t++){let n=it(t,this);this.stickers[t]={face:n,buffer:N.createBuffer()},this.underStickers[t]={face:n,buffer:N.createBuffer()},V(this.underStickers[t],kt)}this.affectedStickers=Array(S(e)).fill(!1)}getCubeState(){return this.stickers.map(e=>e.face)}setCubeState(e){for(let t=0;t<S(this.layers);t++){let n=J(e[t]);this.stickers[t].face=e[t],V(this.stickers[t],n)}}resetAffectedStickers(){let e=Array(S(this.layers));this.affectedStickers=e.fill(this.layers===1)}pushAnimation(e,t,n){let s=t?-1:1,o=[0,0,0];o[e]=s,this.animationQueue.push({axis:o,stickers:n,stickersToAnimate:this.affectedStickers})}turn(e,t,n){this.resetAffectedStickers(),this.pushAnimation(e,n,[...this.stickers]),this._matchTurn(e,t,n)}sliceTurn(e,t){let n=Array(S(this.layers));this.affectedStickers=n.fill(!1),this.pushAnimation(e,t,[...this.stickers]);for(let s=1;s<this.layers-1;s++)this._matchTurn(e,s,t)}wideTurn(e,t,n){this.resetAffectedStickers(),this.pushAnimation(e,n,[...this.stickers]),this._matchTurn(e,t,n);for(let s=1;s<this.layers-1;s++)this._matchTurn(e,s,n)}cubeRotate(e,t){this.resetAffectedStickers(),this.pushAnimation(e,t,[...this.stickers]);for(let n=0;n<this.layers;n++)this._matchTurn(e,n,t)}_matchTurn(e,t,n){e==0?(this._turnXAxis(t,n),t==0?this._turnOuter(5,n):t==this.layers-1&&this._turnOuter(4,!n)):e==1?(this._turnYAxis(t,n),t==0?this._turnOuter(0,n):t==this.layers-1&&this._turnOuter(2,!n)):e==2?(this._turnZAxis(t,n),t==0?this._turnOuter(1,n):t==this.layers-1&&this._turnOuter(3,!n)):console.error(`Axis ${e} not recognized`)}_turnXAxis(e,t){for(let n=1;n<=this.layers;n++)this._cycle(t,0*m(this.layers)+m(this.layers)-n-e*this.layers,3*m(this.layers)+m(this.layers)-n-e*this.layers,2*m(this.layers)+m(this.layers)-n-e*this.layers,1*m(this.layers)+m(this.layers)-n-e*this.layers)}_turnYAxis(e,t){for(let n=0;n<this.layers;n++)this._cycle(t,1*m(this.layers)+n*this.layers+e,4*m(this.layers)+n*this.layers+e,3*m(this.layers)+(this.layers-n-1)*this.layers+(this.layers-1)-e,5*m(this.layers)+n*this.layers+e)}_turnZAxis(e,t){for(let n=0;n<this.layers;n++)this._cycle(t,0*m(this.layers)+(n+1)*this.layers-1-e,5*m(this.layers)+n+this.layers*e,2*m(this.layers)+(this.layers-n-1)*this.layers+e,4*m(this.layers)+m(this.layers)-(n+1)-e*this.layers)}_turnOuter(e,t){if(this.layers%2!=0){let n=this.center(e);this.affectedStickers[n]=!0}for(let n=0;n<Math.floor(this.layers/2);n++){let{topLeft:s,topRight:o,bottomLeft:l,bottomRight:i}=this.corners(e,n);this._cycle(t,s,o,i,l);let a=this.layers-2*(n+1);for(let c=0;c<a;c++){let{top:u,left:h,bottom:f,right:d}=this.edges(e,n,c);this._cycle(t,u,d,f,h)}}}_cycle(e,t,n,s,o){this.affectedStickers[t]=!0,this.affectedStickers[n]=!0,this.affectedStickers[s]=!0,this.affectedStickers[o]=!0,e?this._cycleHelper(t,n,s,o):this._cycleHelper(o,s,n,t)}_cycleHelper(e,t,n,s){let o=this.stickers[s];this.stickers[s]=this.stickers[n],this.stickers[n]=this.stickers[t],this.stickers[t]=this.stickers[e],this.stickers[e]=o}matchKeyToTurn(e){if(this.disableTurn||e.ctrlKey)return;switch(e.code){case"KeyN":return this.cubeRotate(0,!0),{notation:"x",rotate:!0};case"KeyB":return this.cubeRotate(0,!1),{notation:"x'",rotate:!0};case"Semicolon":return this.cubeRotate(1,!0),{notation:"y",rotate:!0};case"KeyA":return this.cubeRotate(1,!1),{notation:"y'",rotate:!0};case"KeyP":return this.cubeRotate(2,!0),{notation:"z",rotate:!0};case"KeyQ":return this.cubeRotate(2,!1),{notation:"z'",rotate:!0};case"KeyJ":return this.turn(1,0,!0),{notation:"U",turn:!0};case"KeyF":return this.turn(1,0,!1),{notation:"U'",turn:!0};case"KeyS":return this.turn(1,this.layers-1,!1),{notation:"D",turn:!0};case"KeyL":return this.turn(1,this.layers-1,!0),{notation:"D'",turn:!0};case"KeyH":return this.turn(2,0,!0),{notation:"F",turn:!0};case"KeyG":return this.turn(2,0,!1),{notation:"F'",turn:!0};case"KeyW":return this.turn(2,this.layers-1,!1),{notation:"B",turn:!0};case"KeyO":return this.turn(2,this.layers-1,!0),{notation:"B'",turn:!0};case"KeyD":return this.turn(0,this.layers-1,!1),{notation:"L",turn:!0};case"KeyE":return this.turn(0,this.layers-1,!0),{notation:"L'",turn:!0};case"KeyI":return this.turn(0,0,!0),{notation:"R",turn:!0};case"KeyK":return this.turn(0,0,!1),{notation:"R'",turn:!0};case"BracketLeft":return this.sliceTurn(0,!1),{notation:"M",turn:!0};case"Quote":return this.sliceTurn(0,!0),{notation:"M'",turn:!0};case"KeyC":return this.sliceTurn(1,!1),{notation:"E",turn:!0};case"Comma":return this.sliceTurn(1,!0),{notation:"E'",turn:!0};case"KeyY":return this.sliceTurn(2,!0),{notation:"S",turn:!0};case"KeyT":return this.sliceTurn(2,!1),{notation:"S'",turn:!0};case"KeyU":return this.wideTurn(0,0,!0),{notation:"r",turn:!0};case"KeyM":return this.wideTurn(0,0,!1),{notation:"r'",turn:!0};case"KeyV":return this.wideTurn(0,this.layers-1,!1),{notation:"l",turn:!0};case"KeyR":return this.wideTurn(0,this.layers-1,!0),{notation:"l'",turn:!0}}}stepAlgorithm(e,t){switch(e){case"x":this.cubeRotate(0,t);break;case"x'":this.cubeRotate(0,!t);break;case"x2":this.cubeRotate(0,t),this.cubeRotate(0,t);break;case"y":this.cubeRotate(1,t);break;case"y'":this.cubeRotate(1,!t);break;case"y2":this.cubeRotate(1,t),this.cubeRotate(1,t);break;case"z":this.cubeRotate(2,t);break;case"z'":this.cubeRotate(2,!t);break;case"z2":this.cubeRotate(2,t),this.cubeRotate(2,t);break;case"U":this.turn(1,0,t);break;case"U'":this.turn(1,0,!t);break;case"U2":case"U2'":this.turn(1,0,t),this.turn(1,0,t);break;case"D":this.turn(1,this.layers-1,!t);break;case"D'":this.turn(1,this.layers-1,t);break;case"D2":this.turn(1,this.layers-1,t),this.turn(1,this.layers-1,t);break;case"F":this.turn(2,0,t);break;case"F'":this.turn(2,0,!t);break;case"F2":this.turn(2,0,t),this.turn(2,0,t);break;case"B":this.turn(2,this.layers-1,!t);break;case"B'":this.turn(2,this.layers-1,t);break;case"B2":this.turn(2,this.layers-1,t),this.turn(2,this.layers-1,t);break;case"L":this.turn(0,this.layers-1,!t);break;case"L'":this.turn(0,this.layers-1,t);break;case"L2":this.turn(0,this.layers-1,t),this.turn(0,this.layers-1,t);break;case"l":this.wideTurn(0,this.layers-1,!t);break;case"l'":this.wideTurn(0,this.layers-1,t);break;case"R":this.turn(0,0,t);break;case"R'":this.turn(0,0,!t);break;case"R2":case"R2'":this.turn(0,0,t),this.turn(0,0,t);break;case"r":this.wideTurn(0,0,t);break;case"r'":this.wideTurn(0,0,!t);break;case"r2":case"r2'":this.wideTurn(0,0,t),this.wideTurn(0,0,t);break;case"M":this.turn(0,1,!t);break;case"M'":this.turn(0,1,t);break;case"M2":this.sliceTurn(0,t),this.sliceTurn(0,t);break;case"E":this.sliceTurn(1,!t);break;case"E'":this.sliceTurn(1,t);break;case"S":this.sliceTurn(2,t);break;case"S'":this.sliceTurn(2,!t);break;default:throw new Error("Invalid turn in algorithm: "+e)}}execAlg(e){if(!e)return;let t=e.split(" ");for(let n=0;n<t.length;n++)this.stepAlgorithm(t[n],!0);this.animationQueue=[]}execAlgReverse(e){if(!e)return;let t=e.split(" ");for(let n=t.length-1;n>=0;n--)this.stepAlgorithm(t[n],!1);this.animationQueue=[]}stickerIsOnFace(e,t){return t*m(this.layers)<=e&&e<(t+1)*m(this.layers)}center(e){return e*m(this.layers)+Math.floor(m(this.layers)/2)}corners(e,t){let n=e*m(this.layers);return{topLeft:n+(this.layers+1)*t,topRight:n+(this.layers-1)*(this.layers-t),bottomRight:n+(this.layers+1)*(this.layers-t-1),bottomLeft:n+(this.layers-1)*(t+1)}}edges(e,t,n){let s=this.corners(e,t),o=this.layers-2*(t+1);return{top:s.topLeft+this.layers*(n+1),left:s.topLeft+(o-n),right:s.topRight+n+1,bottom:s.bottomLeft+this.layers*(o-n)}}};var lt=[4,13,22,31,40,49],te=[0,29,36],ee=[6,35,51],re=[2,9,42],ne=[8,15,45],se=[18,11,44],oe=[24,47,17],ie=[20,38,27],ae=[26,33,53],le=[3,32],ce=[1,39],ue=[7,48],fe=[5,12],he=[10,43],me=[16,46],ye=[21,14],de=[19,41],pe=[25,50],xe=[23,30],be=[28,37],ge=[34,52],ke=[...te,...ee,...re,...ne],Se=[...se,...oe,...ie,...ae],Ae=[...le,...ce,...ue,...fe],Re=[...he,...me,...be,...ge],ve=[...ye,...de,...pe,...xe],Te=[...lt,...Ae],Le=[...Te,...ke],Ee=[...Le,...Re];var Ce=[...ve,...Se],ur=[...Ee,...Ce];function Lt(r,e,t){let n=ct(e,1.01,.02),s=ct(e,1,0),o=ct(e,1.5,.02),l=Array(S(e.layers));for(let i=0;i<S(e.layers);i++){let a={positionBuffer:r.createBuffer(),noGapPositionBuffer:r.createBuffer(),hintPositionBuffer:r.createBuffer(),indexBuffer:r.createBuffer(),cart2d:[],positions:null},c=new Float32Array(12),u=new Float32Array(12),h=new Float32Array(12);for(let y=0;y<12;y++){let x=i*12+y;c[y]=n[x],u[y]=s[x],h[y]=o[x]}r.bindBuffer(r.ARRAY_BUFFER,a.positionBuffer),r.bufferData(r.ARRAY_BUFFER,c,r.STATIC_DRAW),a.positions=c,r.bindBuffer(r.ARRAY_BUFFER,a.noGapPositionBuffer),r.bufferData(r.ARRAY_BUFFER,u,r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,a.hintPositionBuffer),r.bufferData(r.ARRAY_BUFFER,h,r.STATIC_DRAW);let f=Array(16);rt(f,0,t,[u[0],u[1],u[2],1]),rt(f,4,t,[u[3],u[4],u[5],1]),rt(f,8,t,[u[6],u[7],u[8],1]),rt(f,12,t,[u[9],u[10],u[11],1]),a.cart2d=[f[0]/f[3],f[1]/f[3],f[4]/f[7],f[5]/f[7],f[8]/f[11],f[9]/f[11],f[12]/f[15],f[13]/f[15]];let d=[0,1,2,0,2,3];r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,a.indexBuffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,new Uint16Array(d),r.STATIC_DRAW),l[i]=a}return l}function rt(r,e,t,n){let s=Array(4),o=n[0],l=n[1],i=n[2],a=n[3];r[e+0]=o*t[0]+l*t[4]+i*t[8]+a*t[12],r[e+1]=o*t[1]+l*t[5]+i*t[9]+a*t[13],r[e+2]=o*t[2]+l*t[6]+i*t[10]+a*t[14],r[e+3]=o*t[3]+l*t[7]+i*t[11]+a*t[15]}var Et=12,Me=4,X=3;function ct(r,e,t){let n=m(r.layers)*Et,s=Array(6*n);return Oe(s,0*n,r,1,e,t),Pe(s,1*n,r,0,e,t),De(s,2*n,r,1,-e,t),Fe(s,3*n,r,0,-e,t),_e(s,4*n,r,2,-e,t),Ie(s,5*n,r,2,e,t),s}function Oe(r,e,t,n,s,o){if(z(t.layers)){let a=Array(m(t.layers)),c=0;for(let u=0;u<t.layers;u++)for(let h=0;h<t.layers;h++){let f=-1+1/t.layers+h*2/t.layers,d=-1+1/t.layers+u*2/t.layers;a[c]=[f,d,s],c++}L(r,e,t,a,n,o);return}let l=Array(m(t.layers)),i=0;for(let a=-b(t.layers);a<=b(t.layers);a++)for(let c=-b(t.layers);c<=b(t.layers);c++)l[i]=[2*c/t.layers,2*a/t.layers,s],i++;L(r,e,t,l,n,o)}function Pe(r,e,t,n,s,o){if(z(t.layers)){let a=Array(m(t.layers)),c=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){let f=-1+1/t.layers+u*2/t.layers,d=-1+1/t.layers+h*2/t.layers;a[c]=[f,d,s],c++}L(r,e,t,a,n,o);return}let l=Array(m(t.layers)),i=0;for(let a=-b(t.layers);a<=b(t.layers);a++)for(let c=b(t.layers);c>=-b(t.layers);c--)l[i]=[2*a/t.layers,2*c/t.layers,s],i++;L(r,e,t,l,n,o)}function De(r,e,t,n,s,o){if(z(t.layers)){let a=Array(m(t.layers)),c=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){let f=-1+1/t.layers+h*2/t.layers,d=-1+1/t.layers+u*2/t.layers;a[c]=[f,d,s],c++}L(r,e,t,a,n,o);return}let l=Array(m(t.layers)),i=0;for(let a=-b(t.layers);a<=b(t.layers);a++)for(let c=b(t.layers);c>=-b(t.layers);c--)l[i]=[2*c/t.layers,2*a/t.layers,s],i++;L(r,e,t,l,n,o)}function Fe(r,e,t,n,s,o){if(z(t.layers)){let a=Array(m(t.layers)),c=0;for(let u=0;u<t.layers;u++)for(let h=0;h<t.layers;h++){let f=-1+1/t.layers+u*2/t.layers,d=-1+1/t.layers+h*2/t.layers;a[c]=[f,d,s],c++}L(r,e,t,a,n,o);return}let l=Array(m(t.layers)),i=0;for(let a=-b(t.layers);a<=b(t.layers);a++)for(let c=-b(t.layers);c<=b(t.layers);c++)l[i]=[2*a/t.layers,2*c/t.layers,s],i++;L(r,e,t,l,n,o)}function _e(r,e,t,n,s,o){if(z(t.layers)){let a=Array(m(t.layers)),c=0;for(let u=0;u<t.layers;u++)for(let h=t.layers-1;h>=0;h--){let f=-1+1/t.layers+h*2/t.layers,d=-1+1/t.layers+u*2/t.layers;a[c]=[f,d,s],c++}L(r,e,t,a,n,o);return}let l=Array(m(t.layers)),i=0;for(let a=-b(t.layers);a<=b(t.layers);a++)for(let c=b(t.layers);c>=-b(t.layers);c--)l[i]=[2*c/t.layers,2*a/t.layers,s],i++;L(r,e,t,l,n,o)}function Ie(r,e,t,n,s,o){if(z(t.layers)){let a=Array(m(t.layers)),c=0;for(let u=t.layers-1;u>=0;u--)for(let h=t.layers-1;h>=0;h--){let f=-1+1/t.layers+h*2/t.layers,d=-1+1/t.layers+u*2/t.layers;a[c]=[f,d,s],c++}L(r,e,t,a,n,o);return}let l=Array(m(t.layers)),i=0;for(let a=b(t.layers);a>=-b(t.layers);a--)for(let c=b(t.layers);c>=-b(t.layers);c--)l[i]=[2*c/t.layers,2*a/t.layers,s],i++;L(r,e,t,l,n,o)}function L(r,e,t,n,s,o){for(let l=0;l<m(t.layers);l++){let i=n[l];Ue(r,e+l*Et,t,i[0],i[1],i[2],s,o)}}function Ue(r,e,t,n,s,o,l,i){let a=1/t.layers-i,c=[[n-a,s-a,o],[n+a,s-a,o],[n+a,s+a,o],[n-a,s+a,o]];for(let u=0;u<Me;u++){let h=c[u];r[e+u*X]=h[(l+0)%X],r[e+u*X+1]=h[(l+1)%X],r[e+u*X+2]=h[(l+2)%X]}}var nt=class{constructor(){this.position=0,this._velocity=200,this._acceleration=0,this.target=0}update(e){let t=-100*(this.position-this.target),n=-15*this._velocity;this._acceleration=t+n,this._velocity+=this._acceleration*e,this.position+=this._velocity*e}};function Ct(r,e){return r/e*2-1}function Bt(r,e){return 1-r/e*2}function ut(r,e,t,n){return r<t?(n-e)/(t-r):(e-n)/(r-t)}function $(r,e,t,n,s,o){return Math.abs(.5*(r*(n-o)+t*(o-e)+s*(e-n)))}function we(r,e){return r.layers-1-e%r.layers}function ft(r,e){return r.layers-1-Math.floor(e/r.layers)}function Ke(r,e){return e%r.layers}function ht(r,e){return r.layers-1-Math.floor((e-m(r.layers))/r.layers)}var st=class{onPointerDown(e,t,n,s,o){this.numOfPointerMoves=0;let l=Ct(e,n.clientWidth),i=Bt(t,n.clientHeight);this.xOnDown=l,this.yOnDown=i,[this.stickerOnDown,this.cart2dOnDown]=this._coordinatesToSticker(l,i,s,o);function a(x,A,k){return{x:o[x].cart2d[A],y:o[x].cart2d[k]}}if(this.stickerOnDown!==-1)return;let c=a(0,0,1),u=a(s.layers*(s.layers-1),6,7),h=a(s.layers-1,2,3),f=a(m(s.layers)-1,4,5),d=a(s.layers*(s.layers+1)-1,0,1),y=a(m(s.layers)*2-1,2,3);i>c.y&&l>c.x&&l<u.x?s.cubeRotate(0,!0):l<c.x&&i>h.y&&i<c.y?s.cubeRotate(2,!1):l>u.x&&i>f.y&&i<u.y?s.cubeRotate(2,!0):l<d.x&&i>d.y&&i<h.y?s.cubeRotate(1,!0):l>y.x&&i>y.y&&i<f.y?s.cubeRotate(1,!1):i<d.y&&l>d.x&&l<y.x&&s.cubeRotate(0,!1)}onPointerMove(e,t){this.numOfPointerMoves++,this.xOnMove=e,this.yOnMove=t}onPointerUp(e,t,n){if(this.numOfPointerMoves<2)return;let s,o;if(this.stickerOnDown!==-1&&(s=ut(this.cart2dOnDown[0],this.cart2dOnDown[1],this.cart2dOnDown[4],this.cart2dOnDown[5]),o=ut(this.cart2dOnDown[2],this.cart2dOnDown[3],this.cart2dOnDown[6],this.cart2dOnDown[7]),s<0)){let c=s;s=o,o=c}let l=Ct(this.xOnMove,e.clientWidth),i=Bt(this.yOnMove,e.clientHeight),a=ut(l,i,this.xOnDown,this.yOnDown);t.stickerIsOnFace(this.stickerOnDown,0)?l===this.xOnDown?t.turn(0,ft(t,this.stickerOnDown),i>this.yOnDown):a>s?t.turn(0,ft(t,this.stickerOnDown),l>this.xOnDown):a<o?t.turn(0,ft(t,this.stickerOnDown),l<this.xOnDown):t.turn(2,we(t,this.stickerOnDown),l>this.xOnDown):t.stickerIsOnFace(this.stickerOnDown,1)&&(l===this.xOnDown?t.turn(0,ht(t,this.stickerOnDown),i>this.yOnDown):a>s?t.turn(0,ht(t,this.stickerOnDown),l>this.xOnDown):a<o?t.turn(0,ht(t,this.stickerOnDown),l<this.xOnDown):t.turn(1,Ke(t,this.stickerOnDown),l<this.xOnDown))}_coordinatesToSticker(e,t,n,s){let o=l=>{if(!s[l].cart2d){console.error("cart2d is undefined");return}let i=s[l].cart2d,a=$(i[0],i[1],i[2],i[3],i[4],i[5])+$(i[0],i[1],i[4],i[5],i[6],i[7]),c=$(e,t,i[0],i[1],i[2],i[3])+$(e,t,i[2],i[3],i[4],i[5])+$(e,t,i[4],i[5],i[6],i[7])+$(e,t,i[6],i[7],i[0],i[1]),u=1e-5;if(Math.abs(a-c)<u)return[l,i]};for(let l=0;l<2*m(n.layers);l++){let i=o(l);if(i)return i}return[-1,void 0]}};function Z(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Mt(r,e,t,n,s){let o=1/Math.tan(e/2);if(r[0]=o/t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=o,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=-1,r[12]=0,r[13]=0,r[15]=0,s!=null&&s!==1/0){let l=1/(n-s);r[10]=(s+n)*l,r[14]=2*s*n*l}else r[10]=-1,r[14]=-2*n;return r}function tt(r,e,t,n){let s=n[0],o=n[1],l=n[2],i=1/Math.hypot(s,o,l);s*=i,o*=i,l*=i;let a=Math.sin(t),c=Math.cos(t),u=1-c,h=e[0],f=e[1],d=e[2],y=e[3],x=e[4],A=e[5],k=e[6],C=e[7],v=e[8],g=e[9],T=e[10],q=e[11],M=s*s*u+c,O=o*s*u+l*a,P=l*s*u-o*a,D=s*o*u-l*a,F=o*o*u+c,_=l*o*u+s*a,R=s*l*u+o*a,B=o*l*u-s*a,I=l*l*u+c;return r[0]=h*M+x*O+v*P,r[1]=f*M+A*O+g*P,r[2]=d*M+k*O+T*P,r[3]=y*M+C*O+q*P,r[4]=h*D+x*F+v*_,r[5]=f*D+A*F+g*_,r[6]=d*D+k*F+T*_,r[7]=y*D+C*F+q*_,r[8]=h*R+x*B+v*I,r[9]=f*R+A*B+g*I,r[10]=d*R+k*B+T*I,r[11]=y*R+C*B+q*I,e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Ot(r,e){let t=e[0],n=e[1],s=e[2];return r[12]+=r[0]*t+r[4]*n+r[7]*s,r[13]+=r[1]*t+r[5]*n+r[8]*s,r[14]+=r[2]*t+r[5]*n+r[9]*s,r[15]+=r[3]*t+r[6]*n+r[10]*s,r}function mt(){let r;return e=>(r||(r=e()),r)}var He="animateTurns",We="hintStickers";var Ye="showBody";function Pt(){var r;return(r=yt(We))!=null?r:!0}function Dt(){var r;return(r=yt(Ye))!=null?r:!0}function Ft(){var r;return(r=yt(He))!=null?r:!0}function yt(r){let e=localStorage.getItem(r);return e===null?null:e=="1"}var E=document.querySelector("canvas"),p=E.getContext("webgl"),Y=Ne(),ot=[],j={animateTurns:!0,hintStickers:!0,showBody:!0};function wt(){j.animateTurns=Ft(),j.hintStickers=Pt(),j.showBody=Dt()}var _t=Date.now()*.001,qe=3,It=!1;function Kt(){It||(It=!0,requestAnimationFrame(Ht))}function Gt(r){let e=document.querySelector(r),t=new et,n=new nt,s=ze(e),o=new st;t.setNumOfLayers(qe);let l=Lt(p,t,s),i={div:e,cube:t,spring:n,buffers:l,perspectiveMatrix:s},a=(y,x)=>{!i.dragEnabled||o.onPointerDown(y,x,i.div,i.cube,i.buffers)},c=(y,x)=>{!i.dragEnabled||o.onPointerMove(y,x)},u=()=>{!i.dragEnabled||o.onPointerUp(i.div,i.cube,i.buffers)},h=y=>{let x=y.target.getBoundingClientRect(),A=y.touches[0].pageX-x.left,k=y.touches[0].pageY-x.top;return{x:A,y:k}},f=()=>{e.addEventListener("pointerdown",y=>a(y.offsetX,y.offsetY)),e.addEventListener("pointermove",y=>c(y.offsetX,y.offsetY)),e.addEventListener("pointerup",y=>u())},d=()=>{e.addEventListener("touchstart",y=>{let{x,y:A}=h(y);a(x,A)}),e.addEventListener("touchmove",y=>{let{x,y:A}=h(y);c(x,A)}),e.addEventListener("touchend",y=>{u()})};return window.PointerEvent?f():d(),i}function Ne(){let t=Qe(p,`
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
    `);return p.useProgram(t),{attribLocations:{vertexPosition:p.getAttribLocation(t,"aVertexPosition"),vertexColor:p.getAttribLocation(t,"aVertexColor")},uniformLocations:{transformMatrix:p.getUniformLocation(t,"uTransformMatrix"),rotateMatrix:p.getUniformLocation(t,"uRotateMatrix")}}}function ze(r){let e=Z();return Mt(e,50*Math.PI/180,r.clientWidth/r.clientHeight,.1,100),Ot(e,[0,0,-5]),tt(e,e,45*Math.PI/180,[1,0,0]),tt(e,e,0,[0,-1,0]),e}function dt(r,e,t){t.bindBuffer(t.ARRAY_BUFFER,r),t.vertexAttribPointer(e.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexPosition)}function pt(r,e,t){t.bindBuffer(t.ARRAY_BUFFER,r),t.vertexAttribPointer(e.attribLocations.vertexColor,4,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexColor)}function xt(r){r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0)}function Qe(r,e,t){let n=Ut(r,r.VERTEX_SHADER,e),s=Ut(r,r.FRAGMENT_SHADER,t),o=r.createProgram();return r.attachShader(o,n),r.attachShader(o,s),r.linkProgram(o),r.getProgramParameter(o,r.LINK_STATUS)?o:(alert("Unable to initialize the shader program: "+r.getProgramInfoLog(o)),null)}function Ut(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),r.getShaderParameter(n,r.COMPILE_STATUS)?n:(alert("An error occurred compiling the shaders: "+r.getShaderInfoLog(n)),r.deleteShader(n),null)}function Ve(){let r=E.clientWidth,e=E.clientHeight,t=E.width!==r||E.height!==e;return t&&(E.width=r,E.height=e),t}function Ht(r){r*=.001;let e=r-_t;_t=r,Ve(),p.enable(p.DEPTH_TEST),p.enable(p.SCISSOR_TEST),p.depthFunc(p.LEQUAL),p.clear(p.COLOR_BUFFER_BIT|p.DEPTH_BUFFER_BIT),E.style.transform=`translateY(${window.scrollY}px)`;for(let t=0;t<ot.length;t++){let{cube:n,div:s,spring:o,buffers:l,perspectiveMatrix:i}=ot[t],a=s.getBoundingClientRect();if(a.bottom<0||a.top>E.clientHeight||a.right<0||a.left>E.clientWidth)continue;let c=a.right-a.left,u=a.bottom-a.top,h=a.left,f=E.clientHeight-a.bottom;p.viewport(h,f,c,u),p.scissor(h,f,c,u),n.animationQueue[0]&&(o.target=n.animationQueue.length*90,o.update(e),o.position>=90&&(n.affectedStickers=Array(S(n.layers)).fill(!1),o.position=0,n.animationQueue.shift()));let d=n.animationQueue[0],y=Xe(n),x=mt(),A=mt();for(let k=0;k<S(n.layers);k++){let C=l[k],v=d&&d.stickersToAnimate[k]&&j.animateTurns?x(()=>tt(Z(),i,o.position*Math.PI/180,d.axis)):i;p.uniformMatrix4fv(Y.uniformLocations.transformMatrix,!1,v);let g=d&&d.stickersToAnimate[k]&&j.animateTurns?A(()=>{let T=Z();return tt(T,T,o.position*Math.PI/180,d.axis)}):Z();p.uniformMatrix4fv(Y.uniformLocations.rotateMatrix,!1,g),p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,C.indexBuffer),j.showBody&&(dt(C.noGapPositionBuffer,Y,p),pt(n.underStickers[k].buffer,Y,p),xt(p)),dt(C.positionBuffer,Y,p),pt(y[k].buffer,Y,p),xt(p),j.hintStickers&&(dt(C.hintPositionBuffer,Y,p),pt(y[k].buffer,Y,p),xt(p))}}requestAnimationFrame(Ht)}function Xe(r){return j.animateTurns&&r.animationQueue[0]?r.animationQueue[0].stickers:r.stickers}function Wt(){let r=document.querySelector(".slideRight"),e=!1;function t(n){if(e=n,e){r.classList.add("slideRightOpen");return}r.classList.remove("slideRightOpen")}document.addEventListener("click",n=>{let s=n.target;if(s===document.querySelector("#menu")){t(!0);return}e&&!s.closest(".slideRight")&&t(!1)}),document.querySelector("#closeMenu").addEventListener("click",()=>{t(!1)}),document.querySelector("#learnButton").addEventListener("click",()=>{document.location.href="learn.html"}),document.querySelector("#playButton").addEventListener("click",()=>{document.location.href="play.html"}),document.querySelector("#trainButton").addEventListener("click",()=>{document.location.href="train.html"}),document.querySelector("#cubleButton").addEventListener("click",()=>{document.location.href="cuble.html"})}function $e(){let r=Gt("#scene");ot.push(r),r.cube.solve(),wt(),Kt(),Wt();let e=document.querySelector("#moveCount"),t=0;function n(){t=0,e.textContent=`Moves: ${t}`}function s(){t+=1,e.textContent=`Moves: ${t}`}n(),document.querySelector("#solve").addEventListener("click",o=>{r.cube.solve(),n()}),document.querySelector("#scramble").addEventListener("click",o=>{r.cube.scramble();for(let l=0;l<54;l++)lt.includes(l)||V(r.cube.stickers[l],gt);Yt(r.cube),n()}),document.addEventListener("keydown",o=>{let l=r.cube.matchKeyToTurn(o);l&&l.turn&&(Yt(r.cube),s())})}function Yt(r){for(let e=0;e<54;e++)if(0<=e&&e<=8&&r.stickers[e].face==r.stickers[4].face||9<=e&&e<=17&&r.stickers[e].face==r.stickers[13].face||18<=e&&e<=26&&r.stickers[e].face==r.stickers[22].face||27<=e&&e<=35&&r.stickers[e].face==r.stickers[31].face||36<=e&&e<=44&&r.stickers[e].face==r.stickers[40].face||45<=e&&e<=53&&r.stickers[e].face==r.stickers[49].face){let t=J(r.stickers[e].face);V(r.stickers[e],t)}}$e();})();
//# sourceMappingURL=cuble.js.map
