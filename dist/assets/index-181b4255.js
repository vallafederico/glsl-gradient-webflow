(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();/* @license twgl.js 5.3.1 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */let ot=Float32Array;function H(e,t,i){const n=new ot(3);return e&&(n[0]=e),t&&(n[1]=t),i&&(n[2]=i),n}function Me(e,t,i){return i=i||new ot(3),i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2],i}function Lt(e,t,i){i=i||new ot(3);const n=e[2]*t[0]-e[0]*t[2],r=e[0]*t[1]-e[1]*t[0];return i[0]=e[1]*t[2]-e[2]*t[1],i[1]=n,i[2]=r,i}function pt(e,t){t=t||new ot(3);const i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=Math.sqrt(i);return n>1e-5?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=0,t[1]=0,t[2]=0),t}let x=Float32Array;function De(e){const t=x;return x=e,t}function Le(e,t){return t=t||new x(16),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t[9]=-e[9],t[10]=-e[10],t[11]=-e[11],t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=-e[15],t}function ke(){return new x(16).fill(0)}function Ht(e,t){return t=t||new x(16),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Yt(e){return e=e||new x(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Ue(e,t){if(t=t||new x(16),t===e){let d;return d=e[1],e[1]=e[4],e[4]=d,d=e[2],e[2]=e[8],e[8]=d,d=e[3],e[3]=e[12],e[12]=d,d=e[6],e[6]=e[9],e[9]=d,d=e[7],e[7]=e[13],e[13]=d,d=e[11],e[11]=e[14],e[14]=d,t}const i=e[0*4+0],n=e[0*4+1],r=e[0*4+2],o=e[0*4+3],s=e[1*4+0],a=e[1*4+1],l=e[1*4+2],c=e[1*4+3],h=e[2*4+0],u=e[2*4+1],f=e[2*4+2],g=e[2*4+3],m=e[3*4+0],A=e[3*4+1],y=e[3*4+2],p=e[3*4+3];return t[0]=i,t[1]=s,t[2]=h,t[3]=m,t[4]=n,t[5]=a,t[6]=u,t[7]=A,t[8]=r,t[9]=l,t[10]=f,t[11]=y,t[12]=o,t[13]=c,t[14]=g,t[15]=p,t}function Xt(e,t){t=t||new x(16);const i=e[0*4+0],n=e[0*4+1],r=e[0*4+2],o=e[0*4+3],s=e[1*4+0],a=e[1*4+1],l=e[1*4+2],c=e[1*4+3],h=e[2*4+0],u=e[2*4+1],f=e[2*4+2],g=e[2*4+3],m=e[3*4+0],A=e[3*4+1],y=e[3*4+2],p=e[3*4+3],d=f*p,_=y*g,E=l*p,w=y*c,C=l*g,z=f*c,I=r*p,$=y*o,B=r*g,R=f*o,P=r*c,M=l*o,D=h*A,L=m*u,k=s*A,U=m*a,N=s*u,q=h*a,J=i*A,Z=m*n,tt=i*u,et=h*n,it=i*a,nt=s*n,Rt=d*a+w*u+C*A-(_*a+E*u+z*A),Pt=_*n+I*u+R*A-(d*n+$*u+B*A),Mt=E*n+$*a+P*A-(w*n+I*a+M*A),Dt=z*n+B*a+M*u-(C*n+R*a+P*u),T=1/(i*Rt+s*Pt+h*Mt+m*Dt);return t[0]=T*Rt,t[1]=T*Pt,t[2]=T*Mt,t[3]=T*Dt,t[4]=T*(_*s+E*h+z*m-(d*s+w*h+C*m)),t[5]=T*(d*i+$*h+B*m-(_*i+I*h+R*m)),t[6]=T*(w*i+I*s+M*m-(E*i+$*s+P*m)),t[7]=T*(C*i+R*s+P*h-(z*i+B*s+M*h)),t[8]=T*(D*c+U*g+N*p-(L*c+k*g+q*p)),t[9]=T*(L*o+J*g+et*p-(D*o+Z*g+tt*p)),t[10]=T*(k*o+Z*c+it*p-(U*o+J*c+nt*p)),t[11]=T*(q*o+tt*c+nt*g-(N*o+et*c+it*g)),t[12]=T*(k*f+q*y+L*l-(N*y+D*l+U*f)),t[13]=T*(tt*y+D*r+Z*f-(J*f+et*y+L*r)),t[14]=T*(J*l+nt*y+U*r-(it*y+k*r+Z*l)),t[15]=T*(it*f+N*r+et*l-(tt*l+nt*f+q*r)),t}function Ne(e,t,i){i=i||new x(16);const n=e[0],r=e[1],o=e[2],s=e[3],a=e[4+0],l=e[4+1],c=e[4+2],h=e[4+3],u=e[8+0],f=e[8+1],g=e[8+2],m=e[8+3],A=e[12+0],y=e[12+1],p=e[12+2],d=e[12+3],_=t[0],E=t[1],w=t[2],C=t[3],z=t[4+0],I=t[4+1],$=t[4+2],B=t[4+3],R=t[8+0],P=t[8+1],M=t[8+2],D=t[8+3],L=t[12+0],k=t[12+1],U=t[12+2],N=t[12+3];return i[0]=n*_+a*E+u*w+A*C,i[1]=r*_+l*E+f*w+y*C,i[2]=o*_+c*E+g*w+p*C,i[3]=s*_+h*E+m*w+d*C,i[4]=n*z+a*I+u*$+A*B,i[5]=r*z+l*I+f*$+y*B,i[6]=o*z+c*I+g*$+p*B,i[7]=s*z+h*I+m*$+d*B,i[8]=n*R+a*P+u*M+A*D,i[9]=r*R+l*P+f*M+y*D,i[10]=o*R+c*P+g*M+p*D,i[11]=s*R+h*P+m*M+d*D,i[12]=n*L+a*k+u*U+A*N,i[13]=r*L+l*k+f*U+y*N,i[14]=o*L+c*k+g*U+p*N,i[15]=s*L+h*k+m*U+d*N,i}function Oe(e,t,i){return i=i||Yt(),e!==i&&(i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11]),i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i}function Ve(e,t){return t=t||H(),t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Ge(e,t,i){i=i||H();const n=t*4;return i[0]=e[n+0],i[1]=e[n+1],i[2]=e[n+2],i}function He(e,t,i,n){n!==e&&(n=Ht(e,n));const r=i*4;return n[r+0]=t[0],n[r+1]=t[1],n[r+2]=t[2],n}function Ye(e,t,i,n,r){r=r||new x(16);const o=Math.tan(Math.PI*.5-.5*e),s=1/(i-n);return r[0]=o/t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=o,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=(i+n)*s,r[11]=-1,r[12]=0,r[13]=0,r[14]=i*n*s*2,r[15]=0,r}function Xe(e,t,i,n,r,o,s){return s=s||new x(16),s[0]=2/(t-e),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(n-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(r-o),s[11]=0,s[12]=(t+e)/(e-t),s[13]=(n+i)/(i-n),s[14]=(o+r)/(r-o),s[15]=1,s}function We(e,t,i,n,r,o,s){s=s||new x(16);const a=t-e,l=n-i,c=r-o;return s[0]=2*r/a,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2*r/l,s[6]=0,s[7]=0,s[8]=(e+t)/a,s[9]=(n+i)/l,s[10]=o/c,s[11]=-1,s[12]=0,s[13]=0,s[14]=r*o/c,s[15]=0,s}let G,X,V;function je(e,t,i,n){return n=n||new x(16),G=G||H(),X=X||H(),V=V||H(),pt(Me(e,t,V),V),pt(Lt(i,V,G),G),pt(Lt(V,G,X),X),n[0]=G[0],n[1]=G[1],n[2]=G[2],n[3]=0,n[4]=X[0],n[5]=X[1],n[6]=X[2],n[7]=0,n[8]=V[0],n[9]=V[1],n[10]=V[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function Ke(e,t){return t=t||new x(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function Qe(e,t,i){i=i||new x(16);const n=t[0],r=t[1],o=t[2],s=e[0],a=e[1],l=e[2],c=e[3],h=e[1*4+0],u=e[1*4+1],f=e[1*4+2],g=e[1*4+3],m=e[2*4+0],A=e[2*4+1],y=e[2*4+2],p=e[2*4+3],d=e[3*4+0],_=e[3*4+1],E=e[3*4+2],w=e[3*4+3];return e!==i&&(i[0]=s,i[1]=a,i[2]=l,i[3]=c,i[4]=h,i[5]=u,i[6]=f,i[7]=g,i[8]=m,i[9]=A,i[10]=y,i[11]=p),i[12]=s*n+h*r+m*o+d,i[13]=a*n+u*r+A*o+_,i[14]=l*n+f*r+y*o+E,i[15]=c*n+g*r+p*o+w,i}function qe(e,t){t=t||new x(16);const i=Math.cos(e),n=Math.sin(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Je(e,t,i){i=i||new x(16);const n=e[4],r=e[5],o=e[6],s=e[7],a=e[8],l=e[9],c=e[10],h=e[11],u=Math.cos(t),f=Math.sin(t);return i[4]=u*n+f*a,i[5]=u*r+f*l,i[6]=u*o+f*c,i[7]=u*s+f*h,i[8]=u*a-f*n,i[9]=u*l-f*r,i[10]=u*c-f*o,i[11]=u*h-f*s,e!==i&&(i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function Ze(e,t){t=t||new x(16);const i=Math.cos(e),n=Math.sin(e);return t[0]=i,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ti(e,t,i){i=i||new x(16);const n=e[0*4+0],r=e[0*4+1],o=e[0*4+2],s=e[0*4+3],a=e[2*4+0],l=e[2*4+1],c=e[2*4+2],h=e[2*4+3],u=Math.cos(t),f=Math.sin(t);return i[0]=u*n-f*a,i[1]=u*r-f*l,i[2]=u*o-f*c,i[3]=u*s-f*h,i[8]=u*a+f*n,i[9]=u*l+f*r,i[10]=u*c+f*o,i[11]=u*h+f*s,e!==i&&(i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function ei(e,t){t=t||new x(16);const i=Math.cos(e),n=Math.sin(e);return t[0]=i,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ii(e,t,i){i=i||new x(16);const n=e[0*4+0],r=e[0*4+1],o=e[0*4+2],s=e[0*4+3],a=e[1*4+0],l=e[1*4+1],c=e[1*4+2],h=e[1*4+3],u=Math.cos(t),f=Math.sin(t);return i[0]=u*n+f*a,i[1]=u*r+f*l,i[2]=u*o+f*c,i[3]=u*s+f*h,i[4]=u*a-f*n,i[5]=u*l-f*r,i[6]=u*c-f*o,i[7]=u*h-f*s,e!==i&&(i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function ni(e,t,i){i=i||new x(16);let n=e[0],r=e[1],o=e[2];const s=Math.sqrt(n*n+r*r+o*o);n/=s,r/=s,o/=s;const a=n*n,l=r*r,c=o*o,h=Math.cos(t),u=Math.sin(t),f=1-h;return i[0]=a+(1-a)*h,i[1]=n*r*f+o*u,i[2]=n*o*f-r*u,i[3]=0,i[4]=n*r*f-o*u,i[5]=l+(1-l)*h,i[6]=r*o*f+n*u,i[7]=0,i[8]=n*o*f+r*u,i[9]=r*o*f-n*u,i[10]=c+(1-c)*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function ri(e,t,i,n){n=n||new x(16);let r=t[0],o=t[1],s=t[2];const a=Math.sqrt(r*r+o*o+s*s);r/=a,o/=a,s/=a;const l=r*r,c=o*o,h=s*s,u=Math.cos(i),f=Math.sin(i),g=1-u,m=l+(1-l)*u,A=r*o*g+s*f,y=r*s*g-o*f,p=r*o*g-s*f,d=c+(1-c)*u,_=o*s*g+r*f,E=r*s*g+o*f,w=o*s*g-r*f,C=h+(1-h)*u,z=e[0],I=e[1],$=e[2],B=e[3],R=e[4],P=e[5],M=e[6],D=e[7],L=e[8],k=e[9],U=e[10],N=e[11];return n[0]=m*z+A*R+y*L,n[1]=m*I+A*P+y*k,n[2]=m*$+A*M+y*U,n[3]=m*B+A*D+y*N,n[4]=p*z+d*R+_*L,n[5]=p*I+d*P+_*k,n[6]=p*$+d*M+_*U,n[7]=p*B+d*D+_*N,n[8]=E*z+w*R+C*L,n[9]=E*I+w*P+C*k,n[10]=E*$+w*M+C*U,n[11]=E*B+w*D+C*N,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function oi(e,t){return t=t||new x(16),t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function si(e,t,i){i=i||new x(16);const n=t[0],r=t[1],o=t[2];return i[0]=n*e[0*4+0],i[1]=n*e[0*4+1],i[2]=n*e[0*4+2],i[3]=n*e[0*4+3],i[4]=r*e[1*4+0],i[5]=r*e[1*4+1],i[6]=r*e[1*4+2],i[7]=r*e[1*4+3],i[8]=o*e[2*4+0],i[9]=o*e[2*4+1],i[10]=o*e[2*4+2],i[11]=o*e[2*4+3],e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function ai(e,t,i){i=i||H();const n=t[0],r=t[1],o=t[2],s=n*e[0*4+3]+r*e[1*4+3]+o*e[2*4+3]+e[3*4+3];return i[0]=(n*e[0*4+0]+r*e[1*4+0]+o*e[2*4+0]+e[3*4+0])/s,i[1]=(n*e[0*4+1]+r*e[1*4+1]+o*e[2*4+1]+e[3*4+1])/s,i[2]=(n*e[0*4+2]+r*e[1*4+2]+o*e[2*4+2]+e[3*4+2])/s,i}function ci(e,t,i){i=i||H();const n=t[0],r=t[1],o=t[2];return i[0]=n*e[0*4+0]+r*e[1*4+0]+o*e[2*4+0],i[1]=n*e[0*4+1]+r*e[1*4+1]+o*e[2*4+1],i[2]=n*e[0*4+2]+r*e[1*4+2]+o*e[2*4+2],i}function li(e,t,i){i=i||H();const n=Xt(e),r=t[0],o=t[1],s=t[2];return i[0]=r*n[0*4+0]+o*n[0*4+1]+s*n[0*4+2],i[1]=r*n[1*4+0]+o*n[1*4+1]+s*n[1*4+2],i[2]=r*n[2*4+0]+o*n[2*4+1]+s*n[2*4+2],i}var kt=Object.freeze({__proto__:null,axisRotate:ri,axisRotation:ni,copy:Ht,create:ke,frustum:We,getAxis:Ge,getTranslation:Ve,identity:Yt,inverse:Xt,lookAt:je,multiply:Ne,negate:Le,ortho:Xe,perspective:Ye,rotateX:Je,rotateY:ti,rotateZ:ii,rotationX:qe,rotationY:Ze,rotationZ:ei,scale:si,scaling:oi,setAxis:He,setDefaultType:De,setTranslation:Oe,transformDirection:ci,transformNormal:li,transformPoint:ai,translate:Qe,translation:Ke,transpose:Ue});const At=5120,K=5121,yt=5122,_t=5123,xt=5124,bt=5125,Et=5126,ui=32819,hi=32820,fi=33635,pi=5131,di=33640,gi=35899,mi=35902,vi=36269,Ai=34042,Wt={};{const e=Wt;e[At]=Int8Array,e[K]=Uint8Array,e[yt]=Int16Array,e[_t]=Uint16Array,e[xt]=Int32Array,e[bt]=Uint32Array,e[Et]=Float32Array,e[ui]=Uint16Array,e[hi]=Uint16Array,e[fi]=Uint16Array,e[pi]=Uint16Array,e[di]=Uint32Array,e[gi]=Uint32Array,e[mi]=Uint32Array,e[vi]=Uint32Array,e[Ai]=Uint32Array}function jt(e){if(e instanceof Int8Array)return At;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return K;if(e instanceof Int16Array)return yt;if(e instanceof Uint16Array)return _t;if(e instanceof Int32Array)return xt;if(e instanceof Uint32Array)return bt;if(e instanceof Float32Array)return Et;throw new Error("unsupported typed array type")}function Kt(e){if(e===Int8Array)return At;if(e===Uint8Array||e===Uint8ClampedArray)return K;if(e===Int16Array)return yt;if(e===Uint16Array)return _t;if(e===Int32Array)return xt;if(e===Uint32Array)return bt;if(e===Float32Array)return Et;throw new Error("unsupported typed array type")}function yi(e){const t=Wt[e];if(!t)throw new Error("unknown gl type");return t}const mt=typeof SharedArrayBuffer<"u"?function(t){return t&&t.buffer&&(t.buffer instanceof ArrayBuffer||t.buffer instanceof SharedArrayBuffer)}:function(t){return t&&t.buffer&&t.buffer instanceof ArrayBuffer};function _i(...e){console.error(...e)}const Ut=new Map;function Qt(e,t){if(!e||typeof e!="object")return!1;let i=Ut.get(t);i||(i=new WeakMap,Ut.set(t,i));let n=i.get(e);if(n===void 0){const r=Object.prototype.toString.call(e);n=r.substring(8,r.length-1)===t,i.set(e,n)}return n}function xi(e,t){return typeof WebGLBuffer<"u"&&Qt(t,"WebGLBuffer")}function qt(e,t){return typeof WebGLTexture<"u"&&Qt(t,"WebGLTexture")}const Jt=35044,W=34962,bi=34963,Ei=34660,wi=5120,Ti=5121,Si=5122,Fi=5123,Ci=5124,zi=5125,Zt=5126,te={attribPrefix:""};function Ii(e,t,i,n,r){e.bindBuffer(t,i),e.bufferData(t,n,r||Jt)}function ee(e,t,i,n){if(xi(e,t))return t;i=i||W;const r=e.createBuffer();return Ii(e,i,r,t,n),r}function ie(e){return e==="indices"}function $i(e){return e===Int8Array||e===Uint8Array}function Bi(e){return e.length?e:e.data}const Ri=/coord|texture/i,Pi=/color|colour/i;function Mi(e,t){let i;if(Ri.test(e)?i=2:Pi.test(e)?i=4:i=3,t%i>0)throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${i} but ${t} values is not evenly divisible by ${i}. You should specify it.`);return i}function Di(e,t,i){return e.numComponents||e.size||Mi(t,i||Bi(e).length)}function ne(e,t){if(mt(e))return e;if(mt(e.data))return e.data;Array.isArray(e)&&(e={data:e});let i=e.type?wt(e.type):void 0;return i||(ie(t)?i=Uint16Array:i=Float32Array),new i(e.data)}function Li(e){return typeof e=="number"?e:e?Kt(e):Zt}function wt(e){return typeof e=="number"?yi(e):e||Float32Array}function ki(e,t){return{buffer:t.buffer,numValues:2*3*4,type:Li(t.type),arrayType:wt(t.type)}}function Ui(e,t){const i=t.data||t,n=wt(t.type),r=i*n.BYTES_PER_ELEMENT,o=e.createBuffer();return e.bindBuffer(W,o),e.bufferData(W,r,t.drawType||Jt),{buffer:o,numValues:i,type:Kt(n),arrayType:n}}function Ni(e,t,i){const n=ne(t,i);return{arrayType:n.constructor,buffer:ee(e,n,void 0,t.drawType),type:jt(n),numValues:0}}function Oi(e,t){const i={};return Object.keys(t).forEach(function(n){if(!ie(n)){const r=t[n],o=r.attrib||r.name||r.attribName||te.attribPrefix+n;if(r.value){if(!Array.isArray(r.value)&&!mt(r.value))throw new Error("array.value is not array or typedarray");i[o]={value:r.value}}else{let s;r.buffer&&r.buffer instanceof WebGLBuffer?s=ki:typeof r=="number"||typeof r.data=="number"?s=Ui:s=Ni;const{buffer:a,type:l,numValues:c,arrayType:h}=s(e,r,n),u=r.normalize!==void 0?r.normalize:$i(h),f=Di(r,n,c);i[o]={buffer:a,numComponents:f,type:l,normalize:u,stride:r.stride||0,offset:r.offset||0,divisor:r.divisor===void 0?void 0:r.divisor,drawType:r.drawType}}}}),e.bindBuffer(W,null),i}function Vi(e,t){return t===wi||t===Ti?1:t===Si||t===Fi?2:t===Ci||t===zi||t===Zt?4:0}const dt=["position","positions","a_position"];function Gi(e,t){let i,n;for(n=0;n<dt.length&&(i=dt[n],!(i in t||(i=te.attribPrefix+i,i in t)));++n);n===dt.length&&(i=Object.keys(t)[0]);const r=t[i];if(!r.buffer)return 1;e.bindBuffer(W,r.buffer);const o=e.getBufferParameter(W,Ei);e.bindBuffer(W,null);const s=Vi(e,r.type),a=o/s,l=r.numComponents||r.size,c=a/l;if(c%1!==0)throw new Error(`numComponents ${l} not correct for length ${length}`);return c}function re(e,t,i){const n=Oi(e,t),r=Object.assign({},i||{});r.attribs=Object.assign({},i?i.attribs:{},n);const o=t.indices;if(o){const s=ne(o,"indices");r.indices=ee(e,s,bi),r.numElements=s.length,r.elementType=jt(s)}else r.numElements||(r.numElements=Gi(e,r.attribs));return r}function Tt(e){return!!e.texStorage2D}const Hi=function(){const e={},t={};function i(n){const r=n.constructor.name;if(!e[r]){for(const o in n)if(typeof n[o]=="number"){const s=t[n[o]];t[n[o]]=s?`${s} | ${o}`:o}e[r]=!0}}return function(r,o){return i(r),t[o]||(typeof o=="number"?`0x${o.toString(16)}`:o)}}(),St=_i;function oe(e){return typeof document<"u"&&document.getElementById?document.getElementById(e):null}const rt=33984,st=34962,Yi=34963,Xi=35713,Wi=35714,ji=35632,Ki=35633,Qi=35981,se=35718,qi=35721,Ji=35971,Zi=35382,tn=35396,en=35398,nn=35392,rn=35395,at=5126,ae=35664,ce=35665,le=35666,Ft=5124,ue=35667,he=35668,fe=35669,pe=35670,de=35671,ge=35672,me=35673,ve=35674,Ae=35675,ye=35676,on=35678,sn=35680,an=35679,cn=35682,ln=35685,un=35686,hn=35687,fn=35688,pn=35689,dn=35690,gn=36289,mn=36292,vn=36293,Ct=5125,_e=36294,xe=36295,be=36296,An=36298,yn=36299,_n=36300,xn=36303,bn=36306,En=36307,wn=36308,Tn=36311,ct=3553,lt=34067,zt=32879,ut=35866,v={};function Ee(e,t){return v[t].bindPoint}function Sn(e,t){return function(i){e.uniform1f(t,i)}}function Fn(e,t){return function(i){e.uniform1fv(t,i)}}function Cn(e,t){return function(i){e.uniform2fv(t,i)}}function zn(e,t){return function(i){e.uniform3fv(t,i)}}function In(e,t){return function(i){e.uniform4fv(t,i)}}function we(e,t){return function(i){e.uniform1i(t,i)}}function Te(e,t){return function(i){e.uniform1iv(t,i)}}function Se(e,t){return function(i){e.uniform2iv(t,i)}}function Fe(e,t){return function(i){e.uniform3iv(t,i)}}function Ce(e,t){return function(i){e.uniform4iv(t,i)}}function $n(e,t){return function(i){e.uniform1ui(t,i)}}function Bn(e,t){return function(i){e.uniform1uiv(t,i)}}function Rn(e,t){return function(i){e.uniform2uiv(t,i)}}function Pn(e,t){return function(i){e.uniform3uiv(t,i)}}function Mn(e,t){return function(i){e.uniform4uiv(t,i)}}function Dn(e,t){return function(i){e.uniformMatrix2fv(t,!1,i)}}function Ln(e,t){return function(i){e.uniformMatrix3fv(t,!1,i)}}function kn(e,t){return function(i){e.uniformMatrix4fv(t,!1,i)}}function Un(e,t){return function(i){e.uniformMatrix2x3fv(t,!1,i)}}function Nn(e,t){return function(i){e.uniformMatrix3x2fv(t,!1,i)}}function On(e,t){return function(i){e.uniformMatrix2x4fv(t,!1,i)}}function Vn(e,t){return function(i){e.uniformMatrix4x2fv(t,!1,i)}}function Gn(e,t){return function(i){e.uniformMatrix3x4fv(t,!1,i)}}function Hn(e,t){return function(i){e.uniformMatrix4x3fv(t,!1,i)}}function S(e,t,i,n){const r=Ee(e,t);return Tt(e)?function(o){let s,a;!o||qt(e,o)?(s=o,a=null):(s=o.texture,a=o.sampler),e.uniform1i(n,i),e.activeTexture(rt+i),e.bindTexture(r,s),e.bindSampler(i,a)}:function(o){e.uniform1i(n,i),e.activeTexture(rt+i),e.bindTexture(r,o)}}function F(e,t,i,n,r){const o=Ee(e,t),s=new Int32Array(r);for(let a=0;a<r;++a)s[a]=i+a;return Tt(e)?function(a){e.uniform1iv(n,s),a.forEach(function(l,c){e.activeTexture(rt+s[c]);let h,u;!l||qt(e,l)?(h=l,u=null):(h=l.texture,u=l.sampler),e.bindSampler(i,u),e.bindTexture(o,h)})}:function(a){e.uniform1iv(n,s),a.forEach(function(l,c){e.activeTexture(rt+s[c]),e.bindTexture(o,l)})}}v[at]={Type:Float32Array,size:4,setter:Sn,arraySetter:Fn};v[ae]={Type:Float32Array,size:8,setter:Cn,cols:2};v[ce]={Type:Float32Array,size:12,setter:zn,cols:3};v[le]={Type:Float32Array,size:16,setter:In,cols:4};v[Ft]={Type:Int32Array,size:4,setter:we,arraySetter:Te};v[ue]={Type:Int32Array,size:8,setter:Se,cols:2};v[he]={Type:Int32Array,size:12,setter:Fe,cols:3};v[fe]={Type:Int32Array,size:16,setter:Ce,cols:4};v[Ct]={Type:Uint32Array,size:4,setter:$n,arraySetter:Bn};v[_e]={Type:Uint32Array,size:8,setter:Rn,cols:2};v[xe]={Type:Uint32Array,size:12,setter:Pn,cols:3};v[be]={Type:Uint32Array,size:16,setter:Mn,cols:4};v[pe]={Type:Uint32Array,size:4,setter:we,arraySetter:Te};v[de]={Type:Uint32Array,size:8,setter:Se,cols:2};v[ge]={Type:Uint32Array,size:12,setter:Fe,cols:3};v[me]={Type:Uint32Array,size:16,setter:Ce,cols:4};v[ve]={Type:Float32Array,size:32,setter:Dn,rows:2,cols:2};v[Ae]={Type:Float32Array,size:48,setter:Ln,rows:3,cols:3};v[ye]={Type:Float32Array,size:64,setter:kn,rows:4,cols:4};v[ln]={Type:Float32Array,size:32,setter:Un,rows:2,cols:3};v[un]={Type:Float32Array,size:32,setter:On,rows:2,cols:4};v[hn]={Type:Float32Array,size:48,setter:Nn,rows:3,cols:2};v[fn]={Type:Float32Array,size:48,setter:Gn,rows:3,cols:4};v[pn]={Type:Float32Array,size:64,setter:Vn,rows:4,cols:2};v[dn]={Type:Float32Array,size:64,setter:Hn,rows:4,cols:3};v[on]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:ct};v[sn]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:lt};v[an]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:zt};v[cn]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:ct};v[gn]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:ut};v[mn]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:ut};v[vn]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:lt};v[An]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:ct};v[yn]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:zt};v[_n]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:lt};v[xn]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:ut};v[bn]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:ct};v[En]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:zt};v[wn]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:lt};v[Tn]={Type:null,size:0,setter:S,arraySetter:F,bindPoint:ut};function ht(e,t){return function(i){if(i.value)switch(e.disableVertexAttribArray(t),i.value.length){case 4:e.vertexAttrib4fv(t,i.value);break;case 3:e.vertexAttrib3fv(t,i.value);break;case 2:e.vertexAttrib2fv(t,i.value);break;case 1:e.vertexAttrib1fv(t,i.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else e.bindBuffer(st,i.buffer),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,i.numComponents||i.size,i.type||at,i.normalize||!1,i.stride||0,i.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,i.divisor||0)}}function Y(e,t){return function(i){if(i.value)if(e.disableVertexAttribArray(t),i.value.length===4)e.vertexAttrib4iv(t,i.value);else throw new Error("The length of an integer constant value must be 4!");else e.bindBuffer(st,i.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,i.numComponents||i.size,i.type||Ft,i.stride||0,i.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,i.divisor||0)}}function ft(e,t){return function(i){if(i.value)if(e.disableVertexAttribArray(t),i.value.length===4)e.vertexAttrib4uiv(t,i.value);else throw new Error("The length of an unsigned integer constant value must be 4!");else e.bindBuffer(st,i.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,i.numComponents||i.size,i.type||Ct,i.stride||0,i.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,i.divisor||0)}}function It(e,t,i){const n=i.size,r=i.count;return function(o){e.bindBuffer(st,o.buffer);const s=o.size||o.numComponents||n,a=s/r,l=o.type||at,h=v[l].size*s,u=o.normalize||!1,f=o.offset||0,g=h/r;for(let m=0;m<r;++m)e.enableVertexAttribArray(t+m),e.vertexAttribPointer(t+m,a,l,u,h,f+g*m),e.vertexAttribDivisor&&e.vertexAttribDivisor(t+m,o.divisor||0)}}const b={};b[at]={size:4,setter:ht};b[ae]={size:8,setter:ht};b[ce]={size:12,setter:ht};b[le]={size:16,setter:ht};b[Ft]={size:4,setter:Y};b[ue]={size:8,setter:Y};b[he]={size:12,setter:Y};b[fe]={size:16,setter:Y};b[Ct]={size:4,setter:ft};b[_e]={size:8,setter:ft};b[xe]={size:12,setter:ft};b[be]={size:16,setter:ft};b[pe]={size:4,setter:Y};b[de]={size:8,setter:Y};b[ge]={size:12,setter:Y};b[me]={size:16,setter:Y};b[ve]={size:4,setter:It,count:2};b[Ae]={size:9,setter:It,count:3};b[ye]={size:16,setter:It,count:4};const Yn=/ERROR:\s*\d+:(\d+)/gi;function Xn(e,t="",i=0){const n=[...t.matchAll(Yn)],r=new Map(n.map((o,s)=>{const a=parseInt(o[1]),l=n[s+1],c=l?l.index:t.length,h=t.substring(o.index,c);return[a-1,h]}));return e.split(`
`).map((o,s)=>{const a=r.get(s);return`${s+1+i}: ${o}${a?`

^^^ ${a}`:""}`}).join(`
`)}const Nt=/^[ \t]*\n/;function ze(e){let t=0;return Nt.test(e)&&(t=1,e=e.replace(Nt,"")),{lineOffset:t,shaderSource:e}}function Wn(e,t){return e.errorCallback(t),e.callback&&setTimeout(()=>{e.callback(`${t}
${e.errors.join(`
`)}`)}),null}function jn(e,t,i,n){if(n=n||St,!e.getShaderParameter(i,Xi)){const o=e.getShaderInfoLog(i),{lineOffset:s,shaderSource:a}=ze(e.getShaderSource(i)),l=`${Xn(a,o,s)}
Error compiling ${Hi(e,t)}: ${o}`;return n(l),l}return""}function $t(e,t,i){let n,r,o;if(typeof t=="function"&&(i=t,t=void 0),typeof e=="function")i=e,e=void 0;else if(e&&!Array.isArray(e)){const c=e;i=c.errorCallback,e=c.attribLocations,n=c.transformFeedbackVaryings,r=c.transformFeedbackMode,o=c.callback}const s=i||St,a=[],l={errorCallback(c,...h){a.push(c),s(c,...h)},transformFeedbackVaryings:n,transformFeedbackMode:r,callback:o,errors:a};{let c={};Array.isArray(e)?e.forEach(function(h,u){c[h]=t?t[u]:u}):c=e||{},l.attribLocations=c}return l}const Kn=["VERTEX_SHADER","FRAGMENT_SHADER"];function Qn(e,t){if(t.indexOf("frag")>=0)return ji;if(t.indexOf("vert")>=0)return Ki}function qn(e,t,i){const n=e.getAttachedShaders(t);for(const r of n)i.has(r)&&e.deleteShader(r);e.deleteProgram(t)}const Jn=(e=0)=>new Promise(t=>setTimeout(t,e));function Zn(e,t,i){const n=e.createProgram(),{attribLocations:r,transformFeedbackVaryings:o,transformFeedbackMode:s}=$t(i);for(let a=0;a<t.length;++a){let l=t[a];if(typeof l=="string"){const c=oe(l),h=c?c.text:l;let u=e[Kn[a]];c&&c.type&&(u=Qn(e,c.type)||u),l=e.createShader(u),e.shaderSource(l,ze(h).shaderSource),e.compileShader(l),e.attachShader(n,l)}}Object.entries(r).forEach(([a,l])=>e.bindAttribLocation(n,l,a));{let a=o;a&&(a.attribs&&(a=a.attribs),Array.isArray(a)||(a=Object.keys(a)),e.transformFeedbackVaryings(n,a,s||Qi))}return e.linkProgram(n),n}function tr(e,t,i,n,r){const o=$t(i,n,r),s=new Set(t),a=Zn(e,t,o);function l(c,h){const u=ir(c,h,o.errorCallback);return u&&qn(c,h,s),u}if(o.callback){er(e,a).then(()=>{const c=l(e,a);o.callback(c,c?void 0:a)});return}return l(e,a)?void 0:a}async function er(e,t){const i=e.getExtension("KHR_parallel_shader_compile"),n=i?(o,s)=>o.getProgramParameter(s,i.COMPLETION_STATUS_KHR):()=>!0;let r=0;do await Jn(r),r=1e3/60;while(!n(e,t))}function ir(e,t,i){if(i=i||St,!e.getProgramParameter(t,Wi)){const r=e.getProgramInfoLog(t);i(`Error in program linking: ${r}`);const s=e.getAttachedShaders(t).map(a=>jn(e,e.getShaderParameter(a,e.SHADER_TYPE),a,i));return`${r}
${s.filter(a=>a).join(`
`)}`}}function nr(e,t,i,n,r){return tr(e,t,i,n,r)}function Ie(e){const t=e.name;return t.startsWith("gl_")||t.startsWith("webgl_")}const rr=/(\.|\[|]|\w+)/g,or=e=>e>="0"&&e<="9";function sr(e,t,i,n){const r=e.split(rr).filter(a=>a!=="");let o=0,s="";for(;;){const a=r[o++];s+=a;const l=or(a[0]),c=l?parseInt(a):a;if(l&&(s+=r[o++]),o===r.length){i[c]=t;break}else{const u=r[o++],f=u==="[",g=i[c]||(f?[]:{});i[c]=g,i=g,n[s]=n[s]||function(m){return function(A){$e(m,A)}}(g),s+=u}}}function ar(e,t){let i=0;function n(a,l,c){const h=l.name.endsWith("[0]"),u=l.type,f=v[u];if(!f)throw new Error(`unknown type: 0x${u.toString(16)}`);let g;if(f.bindPoint){const m=i;i+=l.size,h?g=f.arraySetter(e,u,m,c,l.size):g=f.setter(e,u,m,c,l.size)}else f.arraySetter&&h?g=f.arraySetter(e,c):g=f.setter(e,c);return g.location=c,g}const r={},o={},s=e.getProgramParameter(t,se);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a);if(Ie(l))continue;let c=l.name;c.endsWith("[0]")&&(c=c.substr(0,c.length-3));const h=e.getUniformLocation(t,l.name);if(h){const u=n(t,l,h);r[c]=u,sr(c,u,o,r)}}return r}function cr(e,t){const i={},n=e.getProgramParameter(t,Ji);for(let r=0;r<n;++r){const o=e.getTransformFeedbackVarying(t,r);i[o.name]={index:r,type:o.type,size:o.size}}return i}function lr(e,t){const i=e.getProgramParameter(t,se),n=[],r=[];for(let a=0;a<i;++a){r.push(a),n.push({});const l=e.getActiveUniform(t,a);n[a].name=l.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach(function(a){const l=a[0],c=a[1];e.getActiveUniforms(t,r,e[l]).forEach(function(h,u){n[u][c]=h})});const o={},s=e.getProgramParameter(t,Zi);for(let a=0;a<s;++a){const l=e.getActiveUniformBlockName(t,a),c={index:e.getUniformBlockIndex(t,l),usedByVertexShader:e.getActiveUniformBlockParameter(t,a,tn),usedByFragmentShader:e.getActiveUniformBlockParameter(t,a,en),size:e.getActiveUniformBlockParameter(t,a,nn),uniformIndices:e.getActiveUniformBlockParameter(t,a,rn)};c.used=c.usedByVertexShader||c.usedByFragmentShader,o[l]=c}return{blockSpecs:o,uniformData:n}}function $e(e,t){for(const i in t){const n=e[i];typeof n=="function"?n(t[i]):$e(e[i],t[i])}}function j(e,...t){const i=e.uniformSetters||e,n=t.length;for(let r=0;r<n;++r){const o=t[r];if(Array.isArray(o)){const s=o.length;for(let a=0;a<s;++a)j(i,o[a])}else for(const s in o){const a=i[s];a&&a(o[s])}}}function ur(e,t){const i={},n=e.getProgramParameter(t,qi);for(let r=0;r<n;++r){const o=e.getActiveAttrib(t,r);if(Ie(o))continue;const s=e.getAttribLocation(t,o.name),a=b[o.type],l=a.setter(e,s,a);l.location=s,i[o.name]=l}return i}function hr(e,t){for(const i in t){const n=e[i];n&&n(t[i])}}function Be(e,t,i){i.vertexArrayObject?e.bindVertexArray(i.vertexArrayObject):(hr(t.attribSetters||t,i.attribs),i.indices&&e.bindBuffer(Yi,i.indices))}function Ot(e,t){const i=ar(e,t),n=ur(e,t),r={program:t,uniformSetters:i,attribSetters:n};return Tt(e)&&(r.uniformBlockSpec=lr(e,t),r.transformFeedbackInfo=cr(e,t)),r}const fr=/\s|{|}|;/;function Re(e,t,i,n,r){const o=$t(i,n,r),s=[];if(t=t.map(function(c){if(!fr.test(c)){const h=oe(c);if(h)c=h.text;else{const u=`no element with id: ${c}`;o.errorCallback(u),s.push(u)}}return c}),s.length)return Wn(o,"");const a=o.callback;a&&(o.callback=(c,h)=>{a(c,c?void 0:Ot(e,h))});const l=nr(e,t,o);return l?Ot(e,l):null}const pr=4,Vt=5123;function Pe(e,t,i,n,r,o){i=i===void 0?pr:i;const s=t.indices,a=t.elementType,l=n===void 0?t.numElements:n;r=r===void 0?0:r,a||s?o!==void 0?e.drawElementsInstanced(i,l,a===void 0?Vt:t.elementType,r,o):e.drawElements(i,l,a===void 0?Vt:t.elementType,r):o!==void 0?e.drawArraysInstanced(i,r,l,o):e.drawArrays(i,r,l)}function dr(e,t){t=t||1,t=Math.max(0,t);const i=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==i||e.height!==n?(e.width=i,e.height=n,!0):!1}class gr{constructor(t){this.gl=t,this.y=0,this.isActive=this.canScroll,document.onscroll=i=>this.onScroll(i)}onScroll(t){this.isActive&&(this.y=window.scrollY*this.gl.vp.px)}resize(t){this.gl=t,this.isActive=this.canScroll,this.y=window.scrollY*this.gl.vp.px}get canScroll(){return document.documentElement.scrollHeight>window.innerHeight}}class mr{constructor(t,i={z:-9,fov:.6,near:1,far:1024}){i.fov=vr(35),this.camera=i}get(t){return this.camera.mat=kt.translate(kt.perspective(this.camera.fov,t.canvas.width/t.canvas.height,this.camera.near,this.camera.far),[0,0,this.camera.z]),this.camera}}function vr(e){return e*Math.PI/180}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class O{constructor(t,i,n,r,o="div"){this.parent=t,this.object=i,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),O.nextNameID=O.nextNameID||0,this.$name.id=`lil-gui-name-${++O.nextNameID}`,this.$widget=document.createElement(o),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ar extends O{constructor(t,i,n){super(t,i,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function vt(e){let t,i;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),i?"#"+i:!1}const yr={isPrimitive:!0,match:e=>typeof e=="string",fromHexString:vt,toHexString:vt},Q={isPrimitive:!0,match:e=>typeof e=="number",fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},_r={isPrimitive:!1,match:e=>Array.isArray(e),fromHexString(e,t,i=1){const n=Q.fromHexString(e);t[0]=(n>>16&255)/255*i,t[1]=(n>>8&255)/255*i,t[2]=(n&255)/255*i},toHexString([e,t,i],n=1){n=255/n;const r=e*n<<16^t*n<<8^i*n<<0;return Q.toHexString(r)}},xr={isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,i=1){const n=Q.fromHexString(e);t.r=(n>>16&255)/255*i,t.g=(n>>8&255)/255*i,t.b=(n&255)/255*i},toHexString({r:e,g:t,b:i},n=1){n=255/n;const r=e*n<<16^t*n<<8^i*n<<0;return Q.toHexString(r)}},br=[yr,Q,_r,xr];function Er(e){return br.find(t=>t.match(e))}class wr extends O{constructor(t,i,n,r){super(t,i,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Er(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=vt(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class gt extends O{constructor(t,i,n){super(t,i,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Tr extends O{constructor(t,i,n,r,o,s){super(t,i,n,"number"),this._initInput(),this.min(r),this.max(o);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let p=parseFloat(this.$input.value);isNaN(p)||(this._stepExplicit&&(p=this._snap(p)),this.setValue(this._clamp(p)))},i=p=>{const d=parseFloat(this.$input.value);isNaN(d)||(this._snapClampSetValue(d+p),this.$input.value=this.getValue())},n=p=>{p.code==="Enter"&&this.$input.blur(),p.code==="ArrowUp"&&(p.preventDefault(),i(this._step*this._arrowKeyMultiplier(p))),p.code==="ArrowDown"&&(p.preventDefault(),i(this._step*this._arrowKeyMultiplier(p)*-1))},r=p=>{this._inputFocused&&(p.preventDefault(),i(this._step*this._normalizeMouseWheel(p)))};let o=!1,s,a,l,c,h;const u=5,f=p=>{s=p.clientX,a=l=p.clientY,o=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",m)},g=p=>{if(o){const d=p.clientX-s,_=p.clientY-a;Math.abs(_)>u?(p.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(d)>u&&m()}if(!o){const d=p.clientY-l;h-=d*this._step*this._arrowKeyMultiplier(p),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)}l=p.clientY},m=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",m)},A=()=>{this._inputFocused=!0},y=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",A),this.$input.addEventListener("blur",y)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,d,_,E,w)=>(p-d)/(_-d)*(w-E)+E,i=p=>{const d=this.$slider.getBoundingClientRect();let _=t(p,d.left,d.right,this._min,this._max);this._snapClampSetValue(_)},n=p=>{this._setDraggingStyle(!0),i(p.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",o)},r=p=>{i(p.clientX)},o=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",o)};let s=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),i(p.touches[0].clientX),s=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,s=!0):c(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f))},u=p=>{if(s){const d=p.touches[0].clientX-a,_=p.touches[0].clientY-l;Math.abs(d)>Math.abs(_)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f))}else p.preventDefault(),i(p.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f)},g=this._callOnFinishChange.bind(this),m=400;let A;const y=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const _=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(A),A=setTimeout(g,m)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",y,{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${i}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),i+-n}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){const i=Math.round(t/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Sr extends O{constructor(t,i,n,r){super(t,i,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(o=>{const s=document.createElement("option");s.innerHTML=o,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.innerHTML=i===-1?t:this._names[i],this}}class Fr extends O{constructor(t,i,n){super(t,i,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Cr=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function zr(e){const t=document.createElement("style");t.innerHTML=e;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let Gt=!1;class Bt{constructor({parent:t,autoPlace:i=t===void 0,container:n,width:r,title:o="Controls",closeFolders:s=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(o),l&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Gt&&a&&(zr(Cr),Gt=!0),n?n.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=s,this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(t,i,n,r,o){if(Object(n)===n)return new Sr(this,t,i,n);const s=t[i];switch(typeof s){case"number":return new Tr(this,t,i,n,r,o);case"boolean":return new Ar(this,t,i);case"string":return new Fr(this,t,i);case"function":return new gt(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,s)}addColor(t,i,n=1){return new wr(this,t,i,n)}addFolder(t){const i=new Bt({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof gt||n._name in t.controllers&&n.load(t.controllers[n._name])}),i&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof gt)){if(n._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);i.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);i.folders[n._title]=n.save()}),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const n=o=>{o.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}const Ir=Bt;var $r=`attribute vec4 position;

varying vec2 v_xy;

void main() {
  gl_Position = position;
  v_xy = position.xy;
}`,Br=`precision mediump float;

uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
varying vec2 v_xy;

uniform vec4 u_params;
uniform vec4 u_params2;
uniform vec3 u_color;
uniform float u_mode;

const float MPI = 6.28318530718;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ){
    return a + b * cos( 6.28318 * ( c * t + d));
}

vec3 hueShift( vec3 color, float hueAdjust ){

    const vec3  kRGBToYPrime = vec3 (0.299, 0.587, 0.114);
    const vec3  kRGBToI      = vec3 (0.596, -0.275, -0.321);
    const vec3  kRGBToQ      = vec3 (0.212, -0.523, 0.311);

    const vec3  kYIQToR     = vec3 (1.0, 0.956, 0.621);
    const vec3  kYIQToG     = vec3 (1.0, -0.272, -0.647);
    const vec3  kYIQToB     = vec3 (1.0, -1.107, 1.704);

    float   YPrime  = dot (color, kRGBToYPrime);
    float   I       = dot (color, kRGBToI);
    float   Q       = dot (color, kRGBToQ);
    float   hue     = atan (Q, I);
    float   chroma  = sqrt (I * I + Q * Q);

    hue += hueAdjust;

    Q = chroma * sin (hue);
    I = chroma * cos (hue);

    vec3    yIQ   = vec3 (YPrime, I, Q);

    return vec3( dot (yIQ, kYIQToR), dot (yIQ, kYIQToG), dot (yIQ, kYIQToB) );

}

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

const vec3 col1 = vec3(0.5, 0.5, 0.5);
const vec3 col2 = vec3(0.5, 0.5, 0.5);
const vec3 col3 = vec3(1.0, 1.0, 1.0);
				

void main() {
  
 float MULT_X = u_params.x;
 float MULT_Y = u_params.y;
 float HUE = u_params.z; 
 float BRIGHTNESS = u_params.w;
 float MOUSE_BRIGHTNESS = u_params2.x; 
 float SCALE = u_params2.y;
 float NOISE_FACTOR = u_params2.z;
 float BW = u_params2.w;

  
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 scale_uv = uv;
  scale_uv -= vec2(.5);
  scale_uv *= SCALE;
  
  
  float noise = cnoise(vec3(scale_uv, u_time)) * NOISE_FACTOR;
  
  
  float c_d = distance(scale_uv.x, .5);
  c_d = smoothstep(0., .6, c_d);
  vec2 m_uv = scale_uv * (c_d + cos(scale_uv.x * MULT_X) * noise - sin(scale_uv.y * MULT_Y) * noise);

  
  scale_uv += vec2(.5);

  
  vec3 col = palette(
    u_time + cos((m_uv.x) + (m_uv.y)), 
    col1, col2, col2, u_color
  );

  
  float dist = distance(m_uv, u_mouse * SCALE/2.);
  
  dist = 1. - dist;
  dist = smoothstep(.3, 1., dist);

  vec3 shift_col = hueShift(col, sin(u_time * MPI));

  col = mix(
    col, 
    shift_col * col + (dist * MOUSE_BRIGHTNESS), 
    dist
  );

 
  
  col = hueShift(col, HUE);
  col *= BRIGHTNESS;

  float bw_col = (col.r + col.g + col.b) * .3;
  col = mix(col, vec3(bw_col), BW);

  

  if (u_mode > .5) {
    col = vec3(1.) - col;
  }

  gl_FragColor.rgb =  col;
  gl_FragColor.a = 1.;
}`;const Rr=[$r,Br];class Pr{constructor(t,i={}){this.gl=t,this.data=i,this.shaders=Rr,this.programInfo=Re(this.gl,this.shaders),this.data.test&&this.initGui(),this.a={mode:0},this.gl.useProgram(this.programInfo.program),this.setBuffAtt(),this.setUniforms()}setBuffAtt(){const t={position:[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]};this.bufferInfo=re(this.gl,t)}setUniforms(){this.uniforms={u_res:[this.gl.canvas.width,this.gl.canvas.height],u_time:0,u_params:[this.data.multx,this.data.multy,this.data.hue,this.data.brightness],u_params2:[this.data.mouse,this.data.scale,this.data.noise,this.data.bw],u_color:this.data.color,u_mode:this.a.mode},this.gl.useProgram(this.programInfo.program),j(this.programInfo,this.uniforms)}render(t,{x:i,y:n}){this.gl.useProgram(this.programInfo.program),Be(this.gl,this.programInfo,this.bufferInfo),j(this.programInfo,{u_time:t*this.data.time,u_mouse:[i,n],u_mode:this.a.mode}),Pe(this.gl,this.bufferInfo)}resize(t){this.gl=t,this.gl.useProgram(this.programInfo.program),j(this.programInfo,{u_res:[this.gl.canvas.width,this.gl.canvas.height]})}initGui(){this.gui=new Ir,this.gui.add(this.data,"multx",0,10).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"multy",0,10).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"hue",0,1).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"brightness",0,5).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"mouse",-1,1).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"scale",0,10).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"noise",0,10).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"bw",0,1).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"time",0,1)}mode(t){t==="light"?this.a.mode=1:t==="dark"?this.a.mode=0:this.a.mode===0?this.a.mode=1:this.a.mode=0,console.log(t,this.uniforms.u_mode),this.setUniforms()}}class Mr{constructor(t){this.gl=t,this.computeParams(),this.events(),this.create()}events(){this.mouse={x:0,y:0,wx:window.innerWidth,wy:window.innerHeight},document.addEventListener("mousemove",t=>{this.mouse.x=t.clientX/this.mouse.wx*2-1,this.mouse.y=-(t.clientY/this.mouse.wy)*2+1})}create(){this.quad=new Pr(this.gl,this.params)}render(t,i){this.quad&&this.quad.render(t,this.mouse)}resize(t){this.gl=t,this.mouse.wx=window.innerWidth,this.mouse.wy=window.innerHeight,this.quad&&this.quad.resize(this.gl)}computeParams(){const t=document.querySelector('[data-gradient="wrapper"]'),i=[parseFloat(t.dataset.red)||0,parseFloat(t.dataset.green)||.33,parseFloat(t.dataset.blue)||.66];this.params={test:t.hasAttribute("data-test"),multx:parseFloat(t.dataset.multx)||.2,multy:parseFloat(t.dataset.multy)||.8,hue:parseFloat(t.dataset.hue)||0,brightness:parseFloat(t.dataset.brightness)||.8,mouse:parseFloat(t.dataset.mouse)||1,scale:parseFloat(t.dataset.scale)||.2,noise:parseFloat(t.dataset.noise)||1,color:i,bw:parseFloat(t.dataset.bw)||0,time:parseFloat(t.dataset.time)||1}}}var Dr=`attribute vec4 position;

void main() {
  vec4 pos = position;
  gl_Position = position;
}`,Lr=`precision mediump float;

uniform vec2 u_res;
uniform float u_time;

uniform sampler2D u_diff;

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;

  vec3 img = texture2D(u_diff, uv).rgb;

  

  gl_FragColor.rgb = img.rgb;
  gl_FragColor.a = 1.;
}`;const kr=[Dr,Lr];class Ur{constructor(t,i={}){this.gl=t,this.data=i,this.shaders=kr,this.programInfo=Re(this.gl,this.shaders),this.gl.useProgram(this.programInfo.program),this.setBuffAtt(),this.setUniforms()}setBuffAtt(){const t={position:[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]};this.bufferInfo=re(this.gl,t)}setUniforms(){this.uniforms={u_res:[this.gl.canvas.width,this.gl.canvas.height],u_time:0},this.gl.useProgram(this.programInfo.program),j(this.programInfo,this.uniforms)}render(t,i=null){this.gl.useProgram(this.programInfo.program),Be(this.gl,this.programInfo,this.bufferInfo),j(this.programInfo,{u_time:t,u_diff:i}),Pe(this.gl,this.bufferInfo)}resize(t){this.gl=t,this.gl.useProgram(this.programInfo.program),j(this.programInfo,{u_res:[this.gl.canvas.width,this.gl.canvas.height]})}}class Nr{constructor(t){this.gl=t}create(){this.fbi=this.gl.createFramebuffer(),this.texture=this.gl.createTexture(),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.canvas.width,this.gl.canvas.height,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,this.gl.canvas.width,this.gl.canvas.height),this.attach(),this.createPlane(),this.unbind()}attach(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbi),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.texture,0),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null)}createPlane(){this.quad=new Ur(this.gl)}setupRender(){this.isActive&&(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbi),this.gl.clear(this.gl.COLOR_BUFFER_BIT||this.gl.DEPTH_BUFFER_BIT))}render(t){this.isActive&&(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.quad&&this.quad.render(t,this.texture))}resize(t){this.gl=t,this.create(),this.quad&&this.quad.resize(this.gl)}}class Or{constructor(){this.canvas=document.getElementById("c"),this.gl=this.canvas.getContext("webgl"),this.gl.clearColor(.04,.04,.04,1),this.gl.vp={dpr:Math.min(window.devicePixelRatio,2)},this.camera=new mr(this.gl),this.gl.camera=this.camera.get(this.gl),new ResizeObserver(t=>this.resize(t[0].contentRect)).observe(this.canvas),this.resize(),this.scroll=new gr(this.gl),this.time=0,this.create(),this.render(),this.resize()}create(){this.post=new Nr(this.gl),this.post.isActive=!1,this.scene=new Mr(this.gl),window.dispatchEvent(new Event("gradientReady"))}render(){this.time+=.01,this.gl.clear(this.gl.COLOR_BUFFER_BIT||this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.post&&this.post.isActive&&this.post.setupRender(),this.scene&&this.scene.render(this.time,this.scroll.y),this.post&&this.post.isActive&&this.post.render(this.time),requestAnimationFrame(this.render.bind(this))}resize(){dr(this.gl.canvas,this.gl.vp.dpr),this.gl.vp={viewSize:this.viewSize,px:this.pixelSize,inner:[window.innerWidth,window.innerHeight],scroll:window.scrollY},this.gl.camera&&(this.gl.camera=this.camera.get(this.gl)),this.scroll&&this.scroll.resize(this.gl),this.post&&this.post.resize(this.gl),this.scene&&this.scene.resize(this.gl)}get viewSize(){const t=Math.abs(this.gl.camera.z*Math.tan(this.gl.camera.fov/2)*2);return[t*(this.gl.canvas.width/this.gl.canvas.height),t]}get pixelSize(){return this.viewSize[0]/window.innerWidth}}class Vr{constructor(){this.call={mode:t=>{console.log("light mode",t),this.gl.scene.quad.mode(t)}},this.gl=new Or("c")}}window.Gradient=new Vr;
