(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hl="166",As={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wm=0,Ou=1,Xm=2,Rd=1,qm=2,Mi=3,$i=0,dn=1,ri=2,Yi=0,fs=1,Fu=2,zu=3,Bu=4,Ym=5,us=100,$m=101,Zm=102,Km=103,jm=104,Jm=200,Qm=201,eg=202,tg=203,zc=204,Bc=205,ng=206,ig=207,sg=208,rg=209,og=210,ag=211,cg=212,lg=213,ug=214,hg=0,dg=1,fg=2,Jo=3,pg=4,mg=5,gg=6,_g=7,ma=0,vg=1,xg=2,bn=0,Cd=1,Ld=2,Pd=3,Id=4,yg=5,Dd=6,Ud=7,Od=300,or=301,ar=302,Vc=303,Hc=304,ga=306,kc=1e3,ds=1001,Gc=1002,nn=1003,Mg=1004,oo=1005,Gn=1006,Va=1007,Xi=1008,bi=1009,Fd=1010,zd=1011,Vr=1012,_a=1013,Zi=1014,ai=1015,mr=1016,kl=1017,Gl=1018,cr=1020,Bd=35902,Vd=1021,Hd=1022,Xn=1023,kd=1024,Gd=1025,js=1026,lr=1027,Wd=1028,Wl=1029,Xd=1030,Xl=1031,ql=1033,Vo=33776,Ho=33777,ko=33778,Go=33779,Wc=35840,Xc=35841,qc=35842,Yc=35843,$c=36196,Zc=37492,Kc=37496,jc=37808,Jc=37809,Qc=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,ol=37817,al=37818,cl=37819,ll=37820,ul=37821,Wo=36492,hl=36494,dl=36495,qd=36283,fl=36284,pl=36285,ml=36286,Sg=3200,Tg=3201,Ri=0,Yd=1,Gi="",kn="srgb",jn="srgb-linear",Yl="display-p3",va="display-p3-linear",Qo="linear",Mt="srgb",ea="rec709",ta="p3",bs=7680,Vu=519,Eg=512,$d=513,Ng=514,Zd=515,Ag=516,wg=517,bg=518,Rg=519,na=35044,Pr=35048,Hu="300 es",qn=2e3,ur=2001;class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ku=1234567;const Dr=Math.PI/180,hr=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function $l(i,e){return(i%e+e)%e}function Cg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lg(i,e,t){return i!==e?(t-i)/(e-i):0}function Ur(i,e,t){return(1-t)*i+t*e}function Pg(i,e,t,n){return Ur(i,e,1-Math.exp(-t*n))}function Ig(i,e=1){return e-Math.abs($l(i,e*2)-e)}function Dg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ug(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Og(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fg(i,e){return i+Math.random()*(e-i)}function zg(i){return i*(.5-Math.random())}function Bg(i){i!==void 0&&(ku=i);let e=ku+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vg(i){return i*Dr}function Hg(i){return i*hr}function kg(i){return(i&i-1)===0&&i!==0}function Gg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xg(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zl={DEG2RAD:Dr,RAD2DEG:hr,generateUUID:ci,clamp:Vt,euclideanModulo:$l,mapLinear:Cg,inverseLerp:Lg,lerp:Ur,damp:Pg,pingpong:Ig,smoothstep:Dg,smootherstep:Ug,randInt:Og,randFloat:Fg,randFloatSpread:zg,seededRandom:Bg,degToRad:Vg,radToDeg:Hg,isPowerOfTwo:kg,ceilPowerOfTwo:Gg,floorPowerOfTwo:Wg,setQuaternionFromProperEuler:Xg,normalize:gt,denormalize:Wn};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,s,r,o,a,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],N=s[1],x=s[4],E=s[7],I=s[2],R=s[5],w=s[8];return r[0]=o*_+a*N+c*I,r[3]=o*m+a*x+c*R,r[6]=o*p+a*E+c*w,r[1]=l*_+u*N+d*I,r[4]=l*m+u*x+d*R,r[7]=l*p+u*E+d*w,r[2]=h*_+f*N+g*I,r[5]=h*m+f*x+g*R,r[8]=h*p+f*E+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=t*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=h*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new tt;function Kd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qg(){const i=ia("canvas");return i.style.display="block",i}const Gu={};function Kl(i){i in Gu||(Gu[i]=!0,console.warn(i))}function Yg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Wu=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xu=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ao={[jn]:{transfer:Qo,primaries:ea,toReference:i=>i,fromReference:i=>i},[kn]:{transfer:Mt,primaries:ea,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[va]:{transfer:Qo,primaries:ta,toReference:i=>i.applyMatrix3(Xu),fromReference:i=>i.applyMatrix3(Wu)},[Yl]:{transfer:Mt,primaries:ta,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xu),fromReference:i=>i.applyMatrix3(Wu).convertLinearToSRGB()}},$g=new Set([jn,va]),_t={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$g.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ao[e].toReference,s=ao[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ao[i].primaries},getTransfer:function(i){return i===Gi?Qo:ao[i].transfer}};function Js(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ka(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Rs;class Zg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=ia("canvas")),Rs.width=e.width,Rs.height=e.height;const n=Rs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Js(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Js(t[n]/255)*255):t[n]=Js(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kg=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ga(s[o].image)):r.push(Ga(s[o]))}else r=Ga(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jg=0;class fn extends Ii{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=ds,s=ds,r=Gn,o=Xi,a=Xn,c=bi,l=fn.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=ci(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case ds:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case ds:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Od;fn.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,E=(f+1)/2,I=(p+1)/2,R=(u+h)/4,w=(d+_)/4,P=(g+m)/4;return x>E&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=w/n):E>I?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=R/s,r=P/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=w/r,s=P/r),this.set(n,s,r,t),this}let N=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(N)<.001&&(N=1),this.x=(m-g)/N,this.y=(d-_)/N,this.z=(h-u)/N,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ci extends Ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends Ci{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jl extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jg extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==h||l!==f||u!==g){let m=1-a;const p=c*h+l*f+u*g+d*_,N=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const I=Math.sqrt(x),R=Math.atan2(I,p*N);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}const E=a*N;if(c=c*m+h*E,l=l*m+f*E,u=u*m+g*E,d=d*m+_*E,m===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new L,qu=new ms;class Kr{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),lo.subVectors(this.max,Sr),Cs.subVectors(e.a,Sr),Ls.subVectors(e.b,Sr),Ps.subVectors(e.c,Sr),Fi.subVectors(Ls,Cs),zi.subVectors(Ps,Ls),es.subVectors(Cs,Ps);let t=[0,-Fi.z,Fi.y,0,-zi.z,zi.y,0,-es.z,es.y,Fi.z,0,-Fi.x,zi.z,0,-zi.x,es.z,0,-es.x,-Fi.y,Fi.x,0,-zi.y,zi.x,0,-es.y,es.x,0];return!Xa(t,Cs,Ls,Ps,lo)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,Cs,Ls,Ps,lo))?!1:(uo.crossVectors(Fi,zi),t=[uo.x,uo.y,uo.z],Xa(t,Cs,Ls,Ps,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new L,new L,new L,new L,new L,new L,new L,new L],zn=new L,co=new Kr,Cs=new L,Ls=new L,Ps=new L,Fi=new L,zi=new L,es=new L,Sr=new L,lo=new L,uo=new L,ts=new L;function Xa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ts.fromArray(i,r);const a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),c=e.dot(ts),l=t.dot(ts),u=n.dot(ts);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Qg=new Kr,Tr=new L,qa=new L;class Jl{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const t=Tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(qa)),this.expandByPoint(Tr.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new L,Ya=new L,ho=new L,Bi=new L,$a=new L,fo=new L,Za=new L;class Jd{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ya.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Ya);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=Bi.dot(this.direction),c=-Bi.dot(ho),l=Bi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ya).addScaledVector(ho,h),f}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,r){$a.subVectors(t,e),fo.subVectors(n,e),Za.crossVectors($a,fo);let o=this.direction.dot(Za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const c=a*this.direction.dot(fo.crossVectors(Bi,fo));if(c<0)return null;const l=a*this.direction.dot($a.cross(Bi));if(l<0||c+l>o)return null;const u=-a*Bi.dot(Za);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,s,r,o,a,c,l,u,d,h,f,g,_,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,d,h,f,g,_,m)}set(e,t,n,s,r,o,a,c,l,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e0,e,t0)}lookAt(e,t,n){const s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Vi.crossVectors(n,Tn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Vi.crossVectors(n,Tn)),Vi.normalize(),po.crossVectors(Tn,Vi),s[0]=Vi.x,s[4]=po.x,s[8]=Tn.x,s[1]=Vi.y,s[5]=po.y,s[9]=Tn.y,s[2]=Vi.z,s[6]=po.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],N=n[3],x=n[7],E=n[11],I=n[15],R=s[0],w=s[4],P=s[8],T=s[12],M=s[1],C=s[5],$=s[9],G=s[13],Q=s[2],te=s[6],Y=s[10],ne=s[14],Z=s[3],Te=s[7],be=s[11],Ae=s[15];return r[0]=o*R+a*M+c*Q+l*Z,r[4]=o*w+a*C+c*te+l*Te,r[8]=o*P+a*$+c*Y+l*be,r[12]=o*T+a*G+c*ne+l*Ae,r[1]=u*R+d*M+h*Q+f*Z,r[5]=u*w+d*C+h*te+f*Te,r[9]=u*P+d*$+h*Y+f*be,r[13]=u*T+d*G+h*ne+f*Ae,r[2]=g*R+_*M+m*Q+p*Z,r[6]=g*w+_*C+m*te+p*Te,r[10]=g*P+_*$+m*Y+p*be,r[14]=g*T+_*G+m*ne+p*Ae,r[3]=N*R+x*M+E*Q+I*Z,r[7]=N*w+x*C+E*te+I*Te,r[11]=N*P+x*$+E*Y+I*be,r[15]=N*T+x*G+E*ne+I*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*d-s*l*d-r*a*h+n*l*h+s*a*f-n*c*f)+_*(+t*c*f-t*l*h+r*o*h-s*o*f+s*l*u-r*c*u)+m*(+t*l*d-t*a*f-r*o*d+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-t*c*d+t*a*h+s*o*d-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],N=d*m*l-_*h*l+_*c*f-a*m*f-d*c*p+a*h*p,x=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,E=u*_*l-g*d*l+g*a*f-o*_*f-u*a*p+o*d*p,I=g*d*c-u*_*c-g*a*h+o*_*h+u*a*m-o*d*m,R=t*N+n*x+s*E+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=N*w,e[1]=(_*h*r-d*m*r-_*s*f+n*m*f+d*s*p-n*h*p)*w,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*w,e[3]=(d*c*r-a*h*r-d*s*l+n*h*l+a*s*f-n*c*f)*w,e[4]=x*w,e[5]=(u*m*r-g*h*r+g*s*f-t*m*f-u*s*p+t*h*p)*w,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*w,e[7]=(o*h*r-u*c*r+u*s*l-t*h*l-o*s*f+t*c*f)*w,e[8]=E*w,e[9]=(g*d*r-u*_*r-g*n*f+t*_*f+u*n*p-t*d*p)*w,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*d*r-u*n*l+t*d*l+o*n*f-t*a*f)*w,e[12]=I*w,e[13]=(u*_*s-g*d*s+g*n*h-t*_*h-u*n*m+t*d*m)*w,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*w,e[15]=(o*d*s-u*a*s+u*n*c-t*d*c-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,_=o*u,m=o*d,p=a*d,N=c*l,x=c*u,E=c*d,I=n.x,R=n.y,w=n.z;return s[0]=(1-(_+p))*I,s[1]=(f+E)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(f-E)*R,s[5]=(1-(h+p))*R,s[6]=(m+N)*R,s[7]=0,s[8]=(g+x)*w,s[9]=(m-N)*w,s[10]=(1-(h+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Is.set(s[0],s[1],s[2]).length();const o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bn.copy(this);const l=1/r,u=1/o,d=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,t.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=qn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let f,g;if(a===qn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ur)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=qn){const c=this.elements,l=1/(t-e),u=1/(n-s),d=1/(o-r),h=(t+e)*l,f=(n+s)*u;let g,_;if(a===qn)g=(o+r)*d,_=-2*d;else if(a===ur)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Is=new L,Bn=new yt,e0=new L(0,0,0),t0=new L(1,1,1),Vi=new L,po=new L,Tn=new L,Yu=new yt,$u=new ms;class On{constructor(e=0,t=0,n=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $u.setFromEuler(this),this.setFromQuaternion($u,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Qd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n0=0;const Zu=new L,Ds=new ms,_i=new yt,mo=new L,Er=new L,i0=new L,s0=new ms,Ku=new L(1,0,0),ju=new L(0,1,0),Ju=new L(0,0,1),Qu={type:"added"},r0={type:"removed"},Us={type:"childadded",child:null},Ka={type:"childremoved",child:null};class kt extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new L,t=new On,n=new ms,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new tt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Ku,e)}rotateY(e){return this.rotateOnAxis(ju,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return Zu.copy(e).applyQuaternion(this.quaternion),this.position.add(Zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ku,e)}translateY(e){return this.translateOnAxis(ju,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mo.copy(e):mo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Er,mo,this.up):_i.lookAt(mo,Er,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(_i),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qu),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r0),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qu),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,i0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,s0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}kt.DEFAULT_UP=new L(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new L,vi=new L,ja=new L,xi=new L,Os=new L,Fs=new L,eh=new L,Ja=new L,Qa=new L,ec=new L;class oi{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vn.subVectors(s,t),vi.subVectors(n,t),ja.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(vi),c=Vn.dot(ja),l=vi.dot(vi),u=vi.dot(ja),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xi.x),c.addScaledVector(o,xi.y),c.addScaledVector(a,xi.z),c)}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),vi.subVectors(e,t),Vn.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Vn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Os.subVectors(s,n),Fs.subVectors(r,n),Ja.subVectors(e,n);const c=Os.dot(Ja),l=Fs.dot(Ja);if(c<=0&&l<=0)return t.copy(n);Qa.subVectors(e,s);const u=Os.dot(Qa),d=Fs.dot(Qa);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Os,o);ec.subVectors(e,r);const f=Os.dot(ec),g=Fs.dot(ec);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Fs,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return eh.subVectors(r,s),a=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(eh,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},go={h:0,s:0,l:0};function tc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=$l(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tc(o,r,e+1/3),this.g=tc(o,r,e),this.b=tc(o,r,e-1/3)}return _t.toWorkingColorSpace(this,s),this}setStyle(e,t=kn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){const n=ef[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return _t.fromWorkingColorSpace(en.copy(this),e),Math.round(Vt(en.r*255,0,255))*65536+Math.round(Vt(en.g*255,0,255))*256+Math.round(Vt(en.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(en.copy(this),t);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=kn){_t.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,s=en.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(go);const n=Ur(Hi.h,go.h,t),s=Ur(Hi.s,go.s,t),r=Ur(Hi.l,go.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Be;Be.NAMES=ef;let o0=0;class rn extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=fs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Bc,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Bc&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ql extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new L,_o=new se;class Dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=na,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Kl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==na&&(e.usage=this.usage),e}}class tf extends Dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nf extends Dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $n extends Dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let a0=0;const Ln=new yt,nc=new kt,zs=new L,En=new Kr,Nr=new Kr,Xt=new L;class Di extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kd(e)?nf:tf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(En.min,Nr.min),En.expandByPoint(Xt),Xt.addVectors(En.max,Nr.max),En.expandByPoint(Xt)):(En.expandByPoint(Nr.min),En.expandByPoint(Nr.max))}En.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Xt.fromBufferAttribute(a,l),c&&(zs.fromBufferAttribute(e,l),Xt.add(zs)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new L,c[P]=new L;const l=new L,u=new L,d=new L,h=new se,f=new se,g=new se,_=new L,m=new L;function p(P,T,M){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,M),h.fromBufferAttribute(r,P),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[P].add(_),a[T].add(_),a[M].add(_),c[P].add(m),c[T].add(m),c[M].add(m))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let P=0,T=N.length;P<T;++P){const M=N[P],C=M.start,$=M.count;for(let G=C,Q=C+$;G<Q;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const x=new L,E=new L,I=new L,R=new L;function w(P){I.fromBufferAttribute(s,P),R.copy(I);const T=a[P];x.copy(T),x.sub(I.multiplyScalar(I.dot(T))).normalize(),E.crossVectors(R,T);const C=E.dot(c[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,C)}for(let P=0,T=N.length;P<T;++P){const M=N[P],C=M.start,$=M.count;for(let G=C,Q=C+$;G<Q;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Dn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const th=new yt,ns=new Jd,vo=new Jl,nh=new L,Bs=new L,Vs=new L,Hs=new L,ic=new L,xo=new L,yo=new se,Mo=new se,So=new se,ih=new L,sh=new L,rh=new L,To=new L,Eo=new L;class Pn extends kt{constructor(e=new Di,t=new Ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){xo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(ic.fromBufferAttribute(d,e),o?xo.addScaledVector(ic,u):xo.addScaledVector(ic.sub(t),u))}t.add(xo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(vo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(vo,nh)===null||ns.origin.distanceToSquared(nh)>(e.far-e.near)**2))&&(th.copy(r).invert(),ns.copy(e.ray).applyMatrix4(th),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],N=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=N,I=x;E<I;E+=3){const R=a.getX(E),w=a.getX(E+1),P=a.getX(E+2);s=No(this,p,e,n,l,u,d,R,w,P),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const N=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);s=No(this,o,e,n,l,u,d,N,x,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],N=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=N,I=x;E<I;E+=3){const R=E,w=E+1,P=E+2;s=No(this,p,e,n,l,u,d,R,w,P),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const N=m,x=m+1,E=m+2;s=No(this,o,e,n,l,u,d,N,x,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function c0(i,e,t,n,s,r,o,a){let c;if(e.side===dn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===$i,a),c===null)return null;Eo.copy(a),Eo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Eo);return l<t.near||l>t.far?null:{distance:l,point:Eo.clone(),object:i}}function No(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Bs),i.getVertexPosition(c,Vs),i.getVertexPosition(l,Hs);const u=c0(i,e,t,n,Bs,Vs,Hs,To);if(u){s&&(yo.fromBufferAttribute(s,a),Mo.fromBufferAttribute(s,c),So.fromBufferAttribute(s,l),u.uv=oi.getInterpolation(To,Bs,Vs,Hs,yo,Mo,So,new se)),r&&(yo.fromBufferAttribute(r,a),Mo.fromBufferAttribute(r,c),So.fromBufferAttribute(r,l),u.uv1=oi.getInterpolation(To,Bs,Vs,Hs,yo,Mo,So,new se)),o&&(ih.fromBufferAttribute(o,a),sh.fromBufferAttribute(o,c),rh.fromBufferAttribute(o,l),u.normal=oi.getInterpolation(To,Bs,Vs,Hs,ih,sh,rh,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};oi.getNormal(Bs,Vs,Hs,d.normal),u.face=d}return u}class jr extends Di{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $n(l,3)),this.setAttribute("normal",new $n(u,3)),this.setAttribute("uv",new $n(d,2));function g(_,m,p,N,x,E,I,R,w,P,T){const M=E/w,C=I/P,$=E/2,G=I/2,Q=R/2,te=w+1,Y=P+1;let ne=0,Z=0;const Te=new L;for(let be=0;be<Y;be++){const Ae=be*C-G;for(let et=0;et<te;et++){const rt=et*M-$;Te[_]=rt*N,Te[m]=Ae*x,Te[p]=Q,l.push(Te.x,Te.y,Te.z),Te[_]=0,Te[m]=0,Te[p]=R>0?1:-1,u.push(Te.x,Te.y,Te.z),d.push(et/w),d.push(1-be/P),ne+=1}}for(let be=0;be<P;be++)for(let Ae=0;Ae<w;Ae++){const et=h+Ae+te*be,rt=h+Ae+te*(be+1),J=h+(Ae+1)+te*(be+1),he=h+(Ae+1)+te*be;c.push(et,rt,he),c.push(rt,J,he),Z+=6}a.addGroup(f,Z,T),f+=Z,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ln(i){const e={};for(let t=0;t<i.length;t++){const n=dr(i[t]);for(const s in n)e[s]=n[s]}return e}function l0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const u0={clone:dr,merge:ln};var h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=d0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=l0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rf extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new L,oh=new se,ah=new se;class pn extends rf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,oh,ah),t.subVectors(ah,oh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Gs=1;class f0 extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(ks,Gs,e,t);s.layers=this.layers,this.add(s);const r=new pn(ks,Gs,e,t);r.layers=this.layers,this.add(r);const o=new pn(ks,Gs,e,t);o.layers=this.layers,this.add(o);const a=new pn(ks,Gs,e,t);a.layers=this.layers,this.add(a);const c=new pn(ks,Gs,e,t);c.layers=this.layers,this.add(c);const l=new pn(ks,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class of extends fn{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p0 extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new of(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new jr(5,5,5),r=new Li({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Yi});r.uniforms.tEquirect.value=t;const o=new Pn(s,r),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Gn),new f0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const sc=new L,m0=new L,g0=new tt;class Ti{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=sc.subVectors(n,t).cross(m0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||g0.getNormalMatrix(e),s=this.coplanarPoint(sc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Jl,Ao=new L;class eu{constructor(e=new Ti,t=new Ti,n=new Ti,s=new Ti,r=new Ti,o=new Ti){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],N=s[13],x=s[14],E=s[15];if(n[0].setComponents(c-r,h-l,m-f,E-p).normalize(),n[1].setComponents(c+r,h+l,m+f,E+p).normalize(),n[2].setComponents(c+o,h+u,m+g,E+N).normalize(),n[3].setComponents(c-o,h-u,m-g,E-N).normalize(),n[4].setComponents(c-a,h-d,m-_,E-x).normalize(),t===qn)n[5].setComponents(c+a,h+d,m+_,E+x).normalize();else if(t===ur)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ao.x=s.normal.x>0?e.max.x:e.min.x,Ao.y=s.normal.y>0?e.max.y:e.min.y,Ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function af(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _0(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c._updateRange,h=c.updateRanges;if(i.bindBuffer(l,a),d.count===-1&&h.length===0&&i.bufferSubData(l,0,u),h.length!==0){for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Jr extends Di{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const N=p*h-o;for(let x=0;x<l;x++){const E=x*d-r;g.push(E,-N,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let N=0;N<a;N++){const x=N+l*p,E=N+l*(p+1),I=N+1+l*(p+1),R=N+1+l*p;f.push(x,E,R),f.push(E,I,R)}this.setIndex(f),this.setAttribute("position",new $n(g,3)),this.setAttribute("normal",new $n(_,3)),this.setAttribute("uv",new $n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.widthSegments,e.heightSegments)}}var v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,P0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,H0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,k0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,G0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,K0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,__=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ov=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ev=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Av=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ov=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:v0,alphahash_pars_fragment:x0,alphamap_fragment:y0,alphamap_pars_fragment:M0,alphatest_fragment:S0,alphatest_pars_fragment:T0,aomap_fragment:E0,aomap_pars_fragment:N0,batching_pars_vertex:A0,batching_vertex:w0,begin_vertex:b0,beginnormal_vertex:R0,bsdfs:C0,iridescence_fragment:L0,bumpmap_pars_fragment:P0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:D0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:O0,color_fragment:F0,color_pars_fragment:z0,color_pars_vertex:B0,color_vertex:V0,common:H0,cube_uv_reflection_fragment:k0,defaultnormal_vertex:G0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:q0,emissivemap_pars_fragment:Y0,colorspace_fragment:$0,colorspace_pars_fragment:Z0,envmap_fragment:K0,envmap_common_pars_fragment:j0,envmap_pars_fragment:J0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:u_,envmap_vertex:e_,fog_vertex:t_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:o_,lights_lambert_fragment:a_,lights_lambert_pars_fragment:c_,lights_pars_begin:l_,lights_toon_fragment:h_,lights_toon_pars_fragment:d_,lights_phong_fragment:f_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:__,lights_fragment_maps:v_,lights_fragment_end:x_,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:M_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:T_,map_fragment:E_,map_pars_fragment:N_,map_particle_fragment:A_,map_particle_pars_fragment:w_,metalnessmap_fragment:b_,metalnessmap_pars_fragment:R_,morphinstance_vertex:C_,morphcolor_vertex:L_,morphnormal_vertex:P_,morphtarget_pars_vertex:I_,morphtarget_vertex:D_,normal_fragment_begin:U_,normal_fragment_maps:O_,normal_pars_fragment:F_,normal_pars_vertex:z_,normal_vertex:B_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:H_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:G_,iridescence_pars_fragment:W_,opaque_fragment:X_,packing:q_,premultiplied_alpha_fragment:Y_,project_vertex:$_,dithering_fragment:Z_,dithering_pars_fragment:K_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:J_,shadowmap_pars_fragment:Q_,shadowmap_pars_vertex:ev,shadowmap_vertex:tv,shadowmask_pars_fragment:nv,skinbase_vertex:iv,skinning_pars_vertex:sv,skinning_vertex:rv,skinnormal_vertex:ov,specularmap_fragment:av,specularmap_pars_fragment:cv,tonemapping_fragment:lv,tonemapping_pars_fragment:uv,transmission_fragment:hv,transmission_pars_fragment:dv,uv_pars_fragment:fv,uv_pars_vertex:pv,uv_vertex:mv,worldpos_vertex:gv,background_vert:_v,background_frag:vv,backgroundCube_vert:xv,backgroundCube_frag:yv,cube_vert:Mv,cube_frag:Sv,depth_vert:Tv,depth_frag:Ev,distanceRGBA_vert:Nv,distanceRGBA_frag:Av,equirect_vert:wv,equirect_frag:bv,linedashed_vert:Rv,linedashed_frag:Cv,meshbasic_vert:Lv,meshbasic_frag:Pv,meshlambert_vert:Iv,meshlambert_frag:Dv,meshmatcap_vert:Uv,meshmatcap_frag:Ov,meshnormal_vert:Fv,meshnormal_frag:zv,meshphong_vert:Bv,meshphong_frag:Vv,meshphysical_vert:Hv,meshphysical_frag:kv,meshtoon_vert:Gv,meshtoon_frag:Wv,points_vert:Xv,points_frag:qv,shadow_vert:Yv,shadow_frag:$v,sprite_vert:Zv,sprite_frag:Kv},ve={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Qn={basic:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Be(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:ln([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:ln([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Be(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:ln([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:ln([ve.points,ve.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:ln([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:ln([ve.common,ve.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:ln([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:ln([ve.sprite,ve.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:ln([ve.common,ve.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:ln([ve.lights,ve.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Qn.physical={uniforms:ln([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const wo={r:0,b:0,g:0},ss=new On,jv=new yt;function Jv(i,e,t,n,s,r,o){const a=new Be(0);let c=r===!0?0:1,l,u,d=null,h=0,f=null;function g(N){let x=N.isScene===!0?N.background:null;return x&&x.isTexture&&(x=(N.backgroundBlurriness>0?t:e).get(x)),x}function _(N){let x=!1;const E=g(N);E===null?p(a,c):E&&E.isColor&&(p(E,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(N,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===ga)?(u===void 0&&(u=new Pn(new jr(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:dr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ss.copy(x.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(ss)),u.material.toneMapped=_t.getTransfer(E.colorSpace)!==Mt,(d!==E||h!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,f=i.toneMapping),u.layers.enableAll(),N.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Pn(new Jr(2,2),new Li({name:"BackgroundMaterial",uniforms:dr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=_t.getTransfer(E.colorSpace)!==Mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,h=E.version,f=i.toneMapping),l.layers.enableAll(),N.unshift(l,l.geometry,l.material,0,0,null))}function p(N,x){N.getRGB(wo,sf(i)),n.buffers.color.setClear(wo.r,wo.g,wo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(N,x=1){a.set(N),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(N){c=N,p(a,c)},render:_,addToRenderList:m}}function Qv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(M,C,$,G,Q){let te=!1;const Y=d(G,$,C);r!==Y&&(r=Y,l(r.object)),te=f(M,G,$,Q),te&&g(M,G,$,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,E(M,C,$,G),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,C,$){const G=$.wireframe===!0;let Q=n[M.id];Q===void 0&&(Q={},n[M.id]=Q);let te=Q[C.id];te===void 0&&(te={},Q[C.id]=te);let Y=te[G];return Y===void 0&&(Y=h(c()),te[G]=Y),Y}function h(M){const C=[],$=[],G=[];for(let Q=0;Q<t;Q++)C[Q]=0,$[Q]=0,G[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:$,attributeDivisors:G,object:M,attributes:{},index:null}}function f(M,C,$,G){const Q=r.attributes,te=C.attributes;let Y=0;const ne=$.getAttributes();for(const Z in ne)if(ne[Z].location>=0){const be=Q[Z];let Ae=te[Z];if(Ae===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),be===void 0||be.attribute!==Ae||Ae&&be.data!==Ae.data)return!0;Y++}return r.attributesNum!==Y||r.index!==G}function g(M,C,$,G){const Q={},te=C.attributes;let Y=0;const ne=$.getAttributes();for(const Z in ne)if(ne[Z].location>=0){let be=te[Z];be===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(be=M.instanceColor));const Ae={};Ae.attribute=be,be&&be.data&&(Ae.data=be.data),Q[Z]=Ae,Y++}r.attributes=Q,r.attributesNum=Y,r.index=G}function _(){const M=r.newAttributes;for(let C=0,$=M.length;C<$;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const $=r.newAttributes,G=r.enabledAttributes,Q=r.attributeDivisors;$[M]=1,G[M]===0&&(i.enableVertexAttribArray(M),G[M]=1),Q[M]!==C&&(i.vertexAttribDivisor(M,C),Q[M]=C)}function N(){const M=r.newAttributes,C=r.enabledAttributes;for(let $=0,G=C.length;$<G;$++)C[$]!==M[$]&&(i.disableVertexAttribArray($),C[$]=0)}function x(M,C,$,G,Q,te,Y){Y===!0?i.vertexAttribIPointer(M,C,$,Q,te):i.vertexAttribPointer(M,C,$,G,Q,te)}function E(M,C,$,G){_();const Q=G.attributes,te=$.getAttributes(),Y=C.defaultAttributeValues;for(const ne in te){const Z=te[ne];if(Z.location>=0){let Te=Q[ne];if(Te===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),Te!==void 0){const be=Te.normalized,Ae=Te.itemSize,et=e.get(Te);if(et===void 0)continue;const rt=et.buffer,J=et.type,he=et.bytesPerElement,Le=J===i.INT||J===i.UNSIGNED_INT||Te.gpuType===_a;if(Te.isInterleavedBufferAttribute){const ye=Te.data,Ge=ye.stride,Qe=Te.offset;if(ye.isInstancedInterleavedBuffer){for(let ke=0;ke<Z.locationSize;ke++)p(Z.location+ke,ye.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ke=0;ke<Z.locationSize;ke++)m(Z.location+ke);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let ke=0;ke<Z.locationSize;ke++)x(Z.location+ke,Ae/Z.locationSize,J,be,Ge*he,(Qe+Ae/Z.locationSize*ke)*he,Le)}else{if(Te.isInstancedBufferAttribute){for(let ye=0;ye<Z.locationSize;ye++)p(Z.location+ye,Te.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ye=0;ye<Z.locationSize;ye++)m(Z.location+ye);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let ye=0;ye<Z.locationSize;ye++)x(Z.location+ye,Ae/Z.locationSize,J,be,Ae*he,Ae/Z.locationSize*ye*he,Le)}}else if(Y!==void 0){const be=Y[ne];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(Z.location,be);break;case 3:i.vertexAttrib3fv(Z.location,be);break;case 4:i.vertexAttrib4fv(Z.location,be);break;default:i.vertexAttrib1fv(Z.location,be)}}}}N()}function I(){P();for(const M in n){const C=n[M];for(const $ in C){const G=C[$];for(const Q in G)u(G[Q].object),delete G[Q];delete C[$]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const $ in C){const G=C[$];for(const Q in G)u(G[Q].object),delete G[Q];delete C[$]}delete n[M.id]}function w(M){for(const C in n){const $=n[C];if($[M.id]===void 0)continue;const G=$[M.id];for(const Q in G)u(G[Q].object),delete G[Q];delete $[M.id]}}function P(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:N}}function ex(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,n,h[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function tx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const w=R===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==bi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ai&&!w)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:N,maxFragmentUniforms:x,vertexTextures:E,maxSamples:I}}function nx(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ti,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const N=r?0:n,x=N*4;let E=p.clippingState||null;c.value=E,E=u(g,h,x,f);for(let I=0;I!==x;++I)E[I]=t[I];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=N}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,N=h.matrixWorldInverse;a.getNormalMatrix(N),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=f;x!==_;++x,E+=4)o.copy(d[x]).applyMatrix4(N,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ix(i){let e=new WeakMap;function t(o,a){return a===Vc?o.mapping=or:a===Hc&&(o.mapping=ar),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vc||a===Hc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new p0(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class tu extends rf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=4,ch=[.125,.215,.35,.446,.526,.582],hs=20,rc=new tu,lh=new Be;let oc=null,ac=0,cc=0,lc=!1;const cs=(1+Math.sqrt(5))/2,Ws=1/cs,uh=[new L(-cs,Ws,0),new L(cs,Ws,0),new L(-Ws,0,cs),new L(Ws,0,cs),new L(0,cs,-Ws),new L(0,cs,Ws),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,ac,cc),this._renderer.xr.enabled=lc,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:mr,format:Xn,colorSpace:jn,depthBuffer:!1},s=dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sx(r)),this._blurMaterial=rx(r,e,t)}return s}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,rc)}_sceneToCubeUV(e,t,n,s){const a=new pn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(lh),u.toneMapping=bn,u.autoClear=!1;const f=new Ql({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new Pn(new jr,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(lh),_=!0);for(let p=0;p<6;p++){const N=p%3;N===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):N===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;bo(s,N*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===or||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;bo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,rc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uh[(s-r-1)%uh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Pn(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):hs;m>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);const p=[];let N=0;for(let w=0;w<hs;++w){const P=w/_,T=Math.exp(-P*P/2);p.push(T),w===0?N+=T:w<m&&(N+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/N;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const E=this._sizeLods[s],I=3*E*(s>x-Xs?s-x+Xs:0),R=4*(this._cubeSize-E);bo(t,I,R,3*E,2*E),c.setRenderTarget(t),c.render(d,rc)}}function sx(i){const e=[],t=[],n=[];let s=i;const r=i-Xs+1+ch.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Xs?c=ch[o-i+Xs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,N=new Float32Array(_*g*f),x=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let R=0;R<f;R++){const w=R%3*2/3-1,P=R>2?0:-1,T=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];N.set(T,_*g*R),x.set(h,m*g*R);const M=[R,R,R,R,R,R];E.set(M,p*g*R)}const I=new Di;I.setAttribute("position",new Dn(N,_)),I.setAttribute("uv",new Dn(x,m)),I.setAttribute("faceIndex",new Dn(E,p)),e.push(I),s>Xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dh(i,e,t){const n=new ps(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function rx(i,e,t){const n=new Float32Array(hs),s=new L(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function fh(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function ph(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ox(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Vc||c===Hc,u=c===or||c===ar;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new hh(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new hh(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ax(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Kl("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cx(i,e,t,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const N=f.array;_=f.version;for(let x=0,E=N.length;x<E;x+=3){const I=N[x+0],R=N[x+1],w=N[x+2];h.push(I,R,R,w,w,I)}}else if(g!==void 0){const N=g.array;_=g.version;for(let x=0,E=N.length/3-1;x<E;x+=3){const I=x+0,R=x+1,w=x+2;h.push(I,R,R,w,w,I)}}else return;const m=new(Kd(h)?nf:tf)(h,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function lx(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*o),t.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*o,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,_,0,g);let p=0;for(let N=0;N<g;N++)p+=f[N];for(let N=0;N<_.length;N++)t.update(p,n,_[N])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ux(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hx(i,e,t){const n=new WeakMap,s=new at;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],N=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let I=a.attributes.position.count*E,R=1;I>e.maxTextureSize&&(R=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const w=new Float32Array(I*R*4*d),P=new jl(w,I,R,d);P.type=ai,P.needsUpdate=!0;const T=E*4;for(let C=0;C<d;C++){const $=p[C],G=N[C],Q=x[C],te=I*R*4*C;for(let Y=0;Y<$.count;Y++){const ne=Y*T;g===!0&&(s.fromBufferAttribute($,Y),w[te+ne+0]=s.x,w[te+ne+1]=s.y,w[te+ne+2]=s.z,w[te+ne+3]=0),_===!0&&(s.fromBufferAttribute(G,Y),w[te+ne+4]=s.x,w[te+ne+5]=s.y,w[te+ne+6]=s.z,w[te+ne+7]=0),m===!0&&(s.fromBufferAttribute(Q,Y),w[te+ne+8]=s.x,w[te+ne+9]=s.y,w[te+ne+10]=s.z,w[te+ne+11]=Q.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new se(I,R)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function dx(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Qr extends fn{constructor(e,t,n,s,r,o,a,c,l,u=js){if(u!==js&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===js&&(n=Zi),n===void 0&&u===lr&&(n=cr),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cf=new fn,mh=new Qr(1,1),lf=new jl,uf=new Jg,hf=new of,gh=[],_h=[],vh=new Float32Array(16),xh=new Float32Array(9),yh=new Float32Array(4);function gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xa(i,e){let t=_h[e];t===void 0&&(t=new Int32Array(e),_h[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function _x(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;yh.set(n),i.uniformMatrix2fv(this.addr,!1,yh),Wt(t,n)}}function vx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;xh.set(n),i.uniformMatrix3fv(this.addr,!1,xh),Wt(t,n)}}function xx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;vh.set(n),i.uniformMatrix4fv(this.addr,!1,vh),Wt(t,n)}}function yx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function Sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function Tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function Ex(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function bx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=Zd,r=mh):r=cf,t.setTexture2D(e||r,s)}function Rx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||uf,s)}function Cx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hf,s)}function Lx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lf,s)}function Px(i){switch(i){case 5126:return fx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return _x;case 35675:return vx;case 35676:return xx;case 5124:case 35670:return yx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return Tx;case 5125:return Ex;case 36294:return Nx;case 36295:return Ax;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Lx}}function Ix(i,e){i.uniform1fv(this.addr,e)}function Dx(i,e){const t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ux(i,e){const t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ox(i,e){const t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function Fx(i,e){const t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zx(i,e){const t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bx(i,e){const t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vx(i,e){i.uniform1iv(this.addr,e)}function Hx(i,e){i.uniform2iv(this.addr,e)}function kx(i,e){i.uniform3iv(this.addr,e)}function Gx(i,e){i.uniform4iv(this.addr,e)}function Wx(i,e){i.uniform1uiv(this.addr,e)}function Xx(i,e){i.uniform2uiv(this.addr,e)}function qx(i,e){i.uniform3uiv(this.addr,e)}function Yx(i,e){i.uniform4uiv(this.addr,e)}function $x(i,e,t){const n=this.cache,s=e.length,r=xa(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||cf,r[o])}function Zx(i,e,t){const n=this.cache,s=e.length,r=xa(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||uf,r[o])}function Kx(i,e,t){const n=this.cache,s=e.length,r=xa(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hf,r[o])}function jx(i,e,t){const n=this.cache,s=e.length,r=xa(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lf,r[o])}function Jx(i){switch(i){case 5126:return Ix;case 35664:return Dx;case 35665:return Ux;case 35666:return Ox;case 35674:return Fx;case 35675:return zx;case 35676:return Bx;case 5124:case 35670:return Vx;case 35667:case 35671:return Hx;case 35668:case 35672:return kx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return jx}}class Qx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Px(t.type)}}class ey{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jx(t.type)}}class ty{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function Mh(i,e){i.seq.push(e),i.map[e.id]=e}function ny(i,e,t){const n=i.name,s=n.length;for(uc.lastIndex=0;;){const r=uc.exec(n),o=uc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Mh(t,l===void 0?new Qx(a,i,e):new ey(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new ty(a),Mh(t,d)),t=d}}}class Xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ny(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Sh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const iy=37297;let sy=0;function ry(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function oy(i){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(i);let n;switch(e===t?n="":e===ta&&t===ea?n="LinearDisplayP3ToLinearSRGB":e===ea&&t===ta&&(n="LinearSRGBToLinearDisplayP3"),i){case jn:case va:return[n,"LinearTransferOETF"];case kn:case Yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Th(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ry(i.getShaderSource(e),o)}else return s}function ay(i,e){const t=oy(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cy(i,e){let t;switch(e){case Cd:t="Linear";break;case Ld:t="Reinhard";break;case Pd:t="OptimizedCineon";break;case Id:t="ACESFilmic";break;case Dd:t="AgX";break;case Ud:t="Neutral";break;case yg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function uy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ir(i){return i!==""}function Eh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(dy,py)}const fy=new Map;function py(i,e){let t=nt[e];if(t===void 0){const n=fy.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}const my=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(i){return i.replace(my,gy)}function gy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _y(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function vy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function yy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ma:e="ENVMAP_BLENDING_MULTIPLY";break;case vg:e="ENVMAP_BLENDING_MIX";break;case xg:e="ENVMAP_BLENDING_ADD";break}return e}function My(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Sy(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=_y(t),l=vy(t),u=xy(t),d=yy(t),h=My(t),f=ly(t),g=uy(r),_=s.createProgram();let m,p,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?nt.tonemapping_pars_fragment:"",t.toneMapping!==bn?cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=gl(o),o=Eh(o,t),o=Nh(o,t),a=gl(a),a=Eh(a,t),a=Nh(a,t),o=Ah(o),a=Ah(a),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=N+m+o,E=N+p+a,I=Sh(s,s.VERTEX_SHADER,x),R=Sh(s,s.FRAGMENT_SHADER,E);s.attachShader(_,I),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const $=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(I).trim(),Q=s.getShaderInfoLog(R).trim();let te=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,R);else{const ne=Th(s,I,"vertex"),Z=Th(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+$+`
`+ne+`
`+Z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(G===""||Q==="")&&(Y=!1);Y&&(C.diagnostics={runnable:te,programLog:$,vertexShader:{log:G,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(I),s.deleteShader(R),P=new Xo(s,_),T=hy(s,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,iy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=R,this}let Ty=0;class Ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ny(e),t.set(e,n)),n}}class Ny{constructor(e){this.id=Ty++,this.code=e,this.usedTimes=0}}function Ay(i,e,t,n,s,r,o){const a=new Qd,c=new Ey,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,M,C,$,G){const Q=$.fog,te=G.geometry,Y=T.isMeshStandardMaterial?$.environment:null,ne=(T.isMeshStandardMaterial?t:e).get(T.envMap||Y),Z=ne&&ne.mapping===ga?ne.image.height:null,Te=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const be=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ae=be!==void 0?be.length:0;let et=0;te.morphAttributes.position!==void 0&&(et=1),te.morphAttributes.normal!==void 0&&(et=2),te.morphAttributes.color!==void 0&&(et=3);let rt,J,he,Le;if(Te){const ot=Qn[Te];rt=ot.vertexShader,J=ot.fragmentShader}else rt=T.vertexShader,J=T.fragmentShader,c.update(T),he=c.getVertexShaderID(T),Le=c.getFragmentShaderID(T);const ye=i.getRenderTarget(),Ge=G.isInstancedMesh===!0,Qe=G.isBatchedMesh===!0,ke=!!T.map,st=!!T.matcap,A=!!ne,pe=!!T.aoMap,le=!!T.lightMap,Me=!!T.bumpMap,ee=!!T.normalMap,ze=!!T.displacementMap,Se=!!T.emissiveMap,Re=!!T.metalnessMap,b=!!T.roughnessMap,y=T.anisotropy>0,H=T.clearcoat>0,ae=T.dispersion>0,oe=T.iridescence>0,re=T.sheen>0,Ue=T.transmission>0,xe=y&&!!T.anisotropyMap,Ne=H&&!!T.clearcoatMap,je=H&&!!T.clearcoatNormalMap,de=H&&!!T.clearcoatRoughnessMap,Ee=oe&&!!T.iridescenceMap,it=oe&&!!T.iridescenceThicknessMap,We=re&&!!T.sheenColorMap,Pe=re&&!!T.sheenRoughnessMap,Ye=!!T.specularMap,Je=!!T.specularColorMap,Tt=!!T.specularIntensityMap,v=Ue&&!!T.transmissionMap,z=Ue&&!!T.thicknessMap,V=!!T.gradientMap,q=!!T.alphaMap,ue=T.alphaTest>0,Oe=!!T.alphaHash,$e=!!T.extensions;let Ct=bn;T.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const Ft={shaderID:Te,shaderType:T.type,shaderName:T.name,vertexShader:rt,fragmentShader:J,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:Le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Qe,batchingColor:Qe&&G._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&G.instanceColor!==null,instancingMorph:Ge&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:jn,alphaToCoverage:!!T.alphaToCoverage,map:ke,matcap:st,envMap:A,envMapMode:A&&ne.mapping,envMapCubeUVHeight:Z,aoMap:pe,lightMap:le,bumpMap:Me,normalMap:ee,displacementMap:h&&ze,emissiveMap:Se,normalMapObjectSpace:ee&&T.normalMapType===Yd,normalMapTangentSpace:ee&&T.normalMapType===Ri,metalnessMap:Re,roughnessMap:b,anisotropy:y,anisotropyMap:xe,clearcoat:H,clearcoatMap:Ne,clearcoatNormalMap:je,clearcoatRoughnessMap:de,dispersion:ae,iridescence:oe,iridescenceMap:Ee,iridescenceThicknessMap:it,sheen:re,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:Ye,specularColorMap:Je,specularIntensityMap:Tt,transmission:Ue,transmissionMap:v,thicknessMap:z,gradientMap:V,opaque:T.transparent===!1&&T.blending===fs&&T.alphaToCoverage===!1,alphaMap:q,alphaTest:ue,alphaHash:Oe,combine:T.combine,mapUv:ke&&_(T.map.channel),aoMapUv:pe&&_(T.aoMap.channel),lightMapUv:le&&_(T.lightMap.channel),bumpMapUv:Me&&_(T.bumpMap.channel),normalMapUv:ee&&_(T.normalMap.channel),displacementMapUv:ze&&_(T.displacementMap.channel),emissiveMapUv:Se&&_(T.emissiveMap.channel),metalnessMapUv:Re&&_(T.metalnessMap.channel),roughnessMapUv:b&&_(T.roughnessMap.channel),anisotropyMapUv:xe&&_(T.anisotropyMap.channel),clearcoatMapUv:Ne&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(T.sheenRoughnessMap.channel),specularMapUv:Ye&&_(T.specularMap.channel),specularColorMapUv:Je&&_(T.specularColorMap.channel),specularIntensityMapUv:Tt&&_(T.specularIntensityMap.channel),transmissionMapUv:v&&_(T.transmissionMap.channel),thicknessMapUv:z&&_(T.thicknessMap.channel),alphaMapUv:q&&_(T.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(ee||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!te.attributes.uv&&(ke||q),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:et,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:ke&&T.map.isVideoTexture===!0&&_t.getTransfer(T.map.colorSpace)===Mt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ri,flipSided:T.side===dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$e&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&T.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)M.push(C),M.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(N(M,T),x(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function N(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function x(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),T.push(a.mask)}function E(T){const M=g[T.type];let C;if(M){const $=Qn[M];C=u0.clone($.uniforms)}else C=T.uniforms;return C}function I(T,M){let C;for(let $=0,G=u.length;$<G;$++){const Q=u[$];if(Q.cacheKey===M){C=Q,++C.usedTimes;break}}return C===void 0&&(C=new Sy(i,M,T,r),u.push(C)),C}function R(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function w(T){c.remove(T)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:I,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:P}}function wy(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function by(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,h,f,g,_,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,h,f,g,_,m){const p=o(d,h,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(d,h,f,g,_,m){const p=o(d,h,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||by),n.length>1&&n.sort(h||bh),s.length>1&&s.sort(h||bh)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Ry(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Rh,i.set(n,[o])):s>=r.length?(o=new Rh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Ly(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Py=0;function Iy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dy(i){const e=new Cy,t=Ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new yt,o=new yt;function a(l){let u=0,d=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,N=0,x=0,E=0,I=0,R=0,w=0;l.sort(Iy);for(let T=0,M=l.length;T<M;T++){const C=l[T],$=C.color,G=C.intensity,Q=C.distance,te=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=$.r*G,d+=$.g*G,h+=$.b*G;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],G);w++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ne=C.shadow,Z=t.get(C);Z.shadowIntensity=ne.intensity,Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=te,n.directionalShadowMatrix[f]=C.shadow.matrix,N++}n.directional[f]=Y,f++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy($).multiplyScalar(G),Y.distance=Q,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[_]=Y;const ne=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,ne.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[_]=ne.matrix,C.castShadow){const Z=t.get(C);Z.shadowIntensity=ne.intensity,Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=te,E++}_++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy($).multiplyScalar(G),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=Y,m++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const ne=C.shadow,Z=t.get(C);Z.shadowIntensity=ne.intensity,Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,Z.shadowCameraNear=ne.camera.near,Z.shadowCameraFar=ne.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=C.shadow.matrix,x++}n.point[g]=Y,g++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(G),Y.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==N||P.numPointShadows!==x||P.numSpotShadows!==E||P.numSpotMaps!==I||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=N,P.numPointShadows=x,P.numSpotShadows=E,P.numSpotMaps=I,P.numLightProbes=w,n.version=Py++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,N=l.length;p<N;p++){const x=l[p];if(x.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(x.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Ch(i){const e=new Dy(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Uy(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ch(i),e.set(s,[a])):r>=o.length?(a=new Ch(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Oy extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fy extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,By=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vy(i,e,t){let n=new eu;const s=new se,r=new se,o=new at,a=new Oy({depthPacking:Tg}),c=new Fy,l={},u=t.maxTextureSize,d={[$i]:dn,[dn]:$i,[ri]:ri},h=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:zy,fragmentShader:By}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Di;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rd;let p=this.type;this.render=function(R,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Yi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const G=p!==Mi&&this.type===Mi,Q=p===Mi&&this.type!==Mi;for(let te=0,Y=R.length;te<Y;te++){const ne=R[te],Z=ne.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const Te=Z.getFrameExtents();if(s.multiply(Te),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Te.x),s.x=r.x*Te.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Te.y),s.y=r.y*Te.y,Z.mapSize.y=r.y)),Z.map===null||G===!0||Q===!0){const Ae=this.type!==Mi?{minFilter:nn,magFilter:nn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ps(s.x,s.y,Ae),Z.map.texture.name=ne.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const be=Z.getViewportCount();for(let Ae=0;Ae<be;Ae++){const et=Z.getViewport(Ae);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),$.viewport(o),Z.updateMatrices(ne,Ae),n=Z.getFrustum(),E(w,P,Z.camera,ne,this.type)}Z.isPointLightShadow!==!0&&this.type===Mi&&N(Z,P),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,M,C)};function N(R,w){const P=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ps(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,P,h,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,P,f,_,null)}function x(R,w,P,T){let M=null;const C=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=M.uuid,G=w.uuid;let Q=l[$];Q===void 0&&(Q={},l[$]=Q);let te=Q[G];te===void 0&&(te=M.clone(),Q[G]=te,w.addEventListener("dispose",I)),M=te}if(M.visible=w.visible,M.wireframe=w.wireframe,T===Mi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=i.properties.get(M);$.light=P}return M}function E(R,w,P,T,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Mi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const G=e.update(R),Q=R.material;if(Array.isArray(Q)){const te=G.groups;for(let Y=0,ne=te.length;Y<ne;Y++){const Z=te[Y],Te=Q[Z.materialIndex];if(Te&&Te.visible){const be=x(R,Te,T,M);R.onBeforeShadow(i,R,w,P,G,be,Z),i.renderBufferDirect(P,null,G,be,R,Z),R.onAfterShadow(i,R,w,P,G,be,Z)}}}else if(Q.visible){const te=x(R,Q,T,M);R.onBeforeShadow(i,R,w,P,G,te,null),i.renderBufferDirect(P,null,G,te,R,null),R.onAfterShadow(i,R,w,P,G,te,null)}}const $=R.children;for(let G=0,Q=$.length;G<Q;G++)E($[G],w,P,T,M)}function I(R){R.target.removeEventListener("dispose",I);for(const P in l){const T=l[P],M=R.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function Hy(i){function e(){let v=!1;const z=new at;let V=null;const q=new at(0,0,0,0);return{setMask:function(ue){V!==ue&&!v&&(i.colorMask(ue,ue,ue,ue),V=ue)},setLocked:function(ue){v=ue},setClear:function(ue,Oe,$e,Ct,Ft){Ft===!0&&(ue*=Ct,Oe*=Ct,$e*=Ct),z.set(ue,Oe,$e,Ct),q.equals(z)===!1&&(i.clearColor(ue,Oe,$e,Ct),q.copy(z))},reset:function(){v=!1,V=null,q.set(-1,0,0,0)}}}function t(){let v=!1,z=null,V=null,q=null;return{setTest:function(ue){ue?Le(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ue){z!==ue&&!v&&(i.depthMask(ue),z=ue)},setFunc:function(ue){if(V!==ue){switch(ue){case hg:i.depthFunc(i.NEVER);break;case dg:i.depthFunc(i.ALWAYS);break;case fg:i.depthFunc(i.LESS);break;case Jo:i.depthFunc(i.LEQUAL);break;case pg:i.depthFunc(i.EQUAL);break;case mg:i.depthFunc(i.GEQUAL);break;case gg:i.depthFunc(i.GREATER);break;case _g:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=ue}},setLocked:function(ue){v=ue},setClear:function(ue){q!==ue&&(i.clearDepth(ue),q=ue)},reset:function(){v=!1,z=null,V=null,q=null}}}function n(){let v=!1,z=null,V=null,q=null,ue=null,Oe=null,$e=null,Ct=null,Ft=null;return{setTest:function(ot){v||(ot?Le(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(ot){z!==ot&&!v&&(i.stencilMask(ot),z=ot)},setFunc:function(ot,zt,Pt){(V!==ot||q!==zt||ue!==Pt)&&(i.stencilFunc(ot,zt,Pt),V=ot,q=zt,ue=Pt)},setOp:function(ot,zt,Pt){(Oe!==ot||$e!==zt||Ct!==Pt)&&(i.stencilOp(ot,zt,Pt),Oe=ot,$e=zt,Ct=Pt)},setLocked:function(ot){v=ot},setClear:function(ot){Ft!==ot&&(i.clearStencil(ot),Ft=ot)},reset:function(){v=!1,z=null,V=null,q=null,ue=null,Oe=null,$e=null,Ct=null,Ft=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,m=null,p=null,N=null,x=null,E=null,I=null,R=new Be(0,0,0),w=0,P=!1,T=null,M=null,C=null,$=null,G=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,Y=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=Y>=1):ne.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=Y>=2);let Z=null,Te={};const be=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),et=new at().fromArray(be),rt=new at().fromArray(Ae);function J(v,z,V,q){const ue=new Uint8Array(4),Oe=i.createTexture();i.bindTexture(v,Oe),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<V;$e++)v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY?i.texImage3D(z,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(z+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return Oe}const he={};he[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Le(i.DEPTH_TEST),r.setFunc(Jo),Me(!1),ee(Ou),Le(i.CULL_FACE),pe(Yi);function Le(v){l[v]!==!0&&(i.enable(v),l[v]=!0)}function ye(v){l[v]!==!1&&(i.disable(v),l[v]=!1)}function Ge(v,z){return u[v]!==z?(i.bindFramebuffer(v,z),u[v]=z,v===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=z),v===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=z),!0):!1}function Qe(v,z){let V=h,q=!1;if(v){V=d.get(z),V===void 0&&(V=[],d.set(z,V));const ue=v.textures;if(V.length!==ue.length||V[0]!==i.COLOR_ATTACHMENT0){for(let Oe=0,$e=ue.length;Oe<$e;Oe++)V[Oe]=i.COLOR_ATTACHMENT0+Oe;V.length=ue.length,q=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,q=!0);q&&i.drawBuffers(V)}function ke(v){return f!==v?(i.useProgram(v),f=v,!0):!1}const st={[us]:i.FUNC_ADD,[$m]:i.FUNC_SUBTRACT,[Zm]:i.FUNC_REVERSE_SUBTRACT};st[Km]=i.MIN,st[jm]=i.MAX;const A={[Jm]:i.ZERO,[Qm]:i.ONE,[eg]:i.SRC_COLOR,[zc]:i.SRC_ALPHA,[og]:i.SRC_ALPHA_SATURATE,[sg]:i.DST_COLOR,[ng]:i.DST_ALPHA,[tg]:i.ONE_MINUS_SRC_COLOR,[Bc]:i.ONE_MINUS_SRC_ALPHA,[rg]:i.ONE_MINUS_DST_COLOR,[ig]:i.ONE_MINUS_DST_ALPHA,[ag]:i.CONSTANT_COLOR,[cg]:i.ONE_MINUS_CONSTANT_COLOR,[lg]:i.CONSTANT_ALPHA,[ug]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(v,z,V,q,ue,Oe,$e,Ct,Ft,ot){if(v===Yi){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(Le(i.BLEND),g=!0),v!==Ym){if(v!==_||ot!==P){if((m!==us||x!==us)&&(i.blendEquation(i.FUNC_ADD),m=us,x=us),ot)switch(v){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fu:i.blendFunc(i.ONE,i.ONE);break;case zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}p=null,N=null,E=null,I=null,R.set(0,0,0),w=0,_=v,P=ot}return}ue=ue||z,Oe=Oe||V,$e=$e||q,(z!==m||ue!==x)&&(i.blendEquationSeparate(st[z],st[ue]),m=z,x=ue),(V!==p||q!==N||Oe!==E||$e!==I)&&(i.blendFuncSeparate(A[V],A[q],A[Oe],A[$e]),p=V,N=q,E=Oe,I=$e),(Ct.equals(R)===!1||Ft!==w)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Ft),R.copy(Ct),w=Ft),_=v,P=!1}function le(v,z){v.side===ri?ye(i.CULL_FACE):Le(i.CULL_FACE);let V=v.side===dn;z&&(V=!V),Me(V),v.blending===fs&&v.transparent===!1?pe(Yi):pe(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),r.setFunc(v.depthFunc),r.setTest(v.depthTest),r.setMask(v.depthWrite),s.setMask(v.colorWrite);const q=v.stencilWrite;o.setTest(q),q&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),Se(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(v){T!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),T=v)}function ee(v){v!==Wm?(Le(i.CULL_FACE),v!==M&&(v===Ou?i.cullFace(i.BACK):v===Xm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),M=v}function ze(v){v!==C&&(te&&i.lineWidth(v),C=v)}function Se(v,z,V){v?(Le(i.POLYGON_OFFSET_FILL),($!==z||G!==V)&&(i.polygonOffset(z,V),$=z,G=V)):ye(i.POLYGON_OFFSET_FILL)}function Re(v){v?Le(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function b(v){v===void 0&&(v=i.TEXTURE0+Q-1),Z!==v&&(i.activeTexture(v),Z=v)}function y(v,z,V){V===void 0&&(Z===null?V=i.TEXTURE0+Q-1:V=Z);let q=Te[V];q===void 0&&(q={type:void 0,texture:void 0},Te[V]=q),(q.type!==v||q.texture!==z)&&(Z!==V&&(i.activeTexture(V),Z=V),i.bindTexture(v,z||he[v]),q.type=v,q.texture=z)}function H(){const v=Te[Z];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function it(){try{i.texImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function We(v){et.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),et.copy(v))}function Pe(v){rt.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),rt.copy(v))}function Ye(v,z){let V=c.get(z);V===void 0&&(V=new WeakMap,c.set(z,V));let q=V.get(v);q===void 0&&(q=i.getUniformBlockIndex(z,v.name),V.set(v,q))}function Je(v,z){const q=c.get(z).get(v);a.get(z)!==q&&(i.uniformBlockBinding(z,q,v.__bindingPointIndex),a.set(z,q))}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Z=null,Te={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,m=null,p=null,N=null,x=null,E=null,I=null,R=new Be(0,0,0),w=0,P=!1,T=null,M=null,C=null,$=null,G=null,et.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Le,disable:ye,bindFramebuffer:Ge,drawBuffers:Qe,useProgram:ke,setBlending:pe,setMaterial:le,setFlipSided:Me,setCullFace:ee,setLineWidth:ze,setPolygonOffset:Se,setScissorTest:Re,activeTexture:b,bindTexture:y,unbindTexture:H,compressedTexImage2D:ae,compressedTexImage3D:oe,texImage2D:Ee,texImage3D:it,updateUBOMapping:Ye,uniformBlockBinding:Je,texStorage2D:je,texStorage3D:de,texSubImage2D:re,texSubImage3D:Ue,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ne,scissor:We,viewport:Pe,reset:Tt}}function Lh(i,e,t,n){const s=ky(n);switch(t){case Vd:return i*e;case kd:return i*e;case Gd:return i*e*2;case Wd:return i*e/s.components*s.byteLength;case Wl:return i*e/s.components*s.byteLength;case Xd:return i*e*2/s.components*s.byteLength;case Xl:return i*e*2/s.components*s.byteLength;case Hd:return i*e*3/s.components*s.byteLength;case Xn:return i*e*4/s.components*s.byteLength;case ql:return i*e*4/s.components*s.byteLength;case Vo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ko:case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xc:case Yc:return Math.max(i,16)*Math.max(e,8)/4;case Wc:case qc:return Math.max(i,8)*Math.max(e,8)/2;case $c:case Zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wo:case hl:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qd:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ky(i){switch(i){case bi:case Fd:return{byteLength:1,components:1};case Vr:case zd:case mr:return{byteLength:2,components:1};case kl:case Gl:return{byteLength:2,components:4};case Zi:case _a:case ai:return{byteLength:4,components:1};case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Gy(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return f?new OffscreenCanvas(b,y):ia("canvas")}function _(b,y,H){let ae=1;const oe=Re(b);if((oe.width>H||oe.height>H)&&(ae=H/Math.max(oe.width,oe.height)),ae<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const re=Math.floor(ae*oe.width),Ue=Math.floor(ae*oe.height);d===void 0&&(d=g(re,Ue));const xe=y?g(re,Ue):d;return xe.width=re,xe.height=Ue,xe.getContext("2d").drawImage(b,0,0,re,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+re+"x"+Ue+")."),xe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==nn&&b.minFilter!==Gn}function p(b){i.generateMipmap(b)}function N(b,y,H,ae,oe=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=y;if(y===i.RED&&(H===i.FLOAT&&(re=i.R32F),H===i.HALF_FLOAT&&(re=i.R16F),H===i.UNSIGNED_BYTE&&(re=i.R8)),y===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(re=i.R8UI),H===i.UNSIGNED_SHORT&&(re=i.R16UI),H===i.UNSIGNED_INT&&(re=i.R32UI),H===i.BYTE&&(re=i.R8I),H===i.SHORT&&(re=i.R16I),H===i.INT&&(re=i.R32I)),y===i.RG&&(H===i.FLOAT&&(re=i.RG32F),H===i.HALF_FLOAT&&(re=i.RG16F),H===i.UNSIGNED_BYTE&&(re=i.RG8)),y===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(re=i.RG8UI),H===i.UNSIGNED_SHORT&&(re=i.RG16UI),H===i.UNSIGNED_INT&&(re=i.RG32UI),H===i.BYTE&&(re=i.RG8I),H===i.SHORT&&(re=i.RG16I),H===i.INT&&(re=i.RG32I)),y===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),y===i.RGBA){const Ue=oe?Qo:_t.getTransfer(ae);H===i.FLOAT&&(re=i.RGBA32F),H===i.HALF_FLOAT&&(re=i.RGBA16F),H===i.UNSIGNED_BYTE&&(re=Ue===Mt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(b,y){let H;return b?y===null||y===Zi||y===cr?H=i.DEPTH24_STENCIL8:y===ai?H=i.DEPTH32F_STENCIL8:y===Vr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Zi||y===cr?H=i.DEPTH_COMPONENT24:y===ai?H=i.DEPTH_COMPONENT32F:y===Vr&&(H=i.DEPTH_COMPONENT16),H}function E(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==nn&&b.minFilter!==Gn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function I(b){const y=b.target;y.removeEventListener("dispose",I),w(y),y.isVideoTexture&&u.delete(y)}function R(b){const y=b.target;y.removeEventListener("dispose",R),T(y)}function w(b){const y=n.get(b);if(y.__webglInit===void 0)return;const H=b.source,ae=h.get(H);if(ae){const oe=ae[y.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&P(b),Object.keys(ae).length===0&&h.delete(H)}n.remove(b)}function P(b){const y=n.get(b);i.deleteTexture(y.__webglTexture);const H=b.source,ae=h.get(H);delete ae[y.__cacheKey],o.memory.textures--}function T(b){const y=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(y.__webglFramebuffer[ae]))for(let oe=0;oe<y.__webglFramebuffer[ae].length;oe++)i.deleteFramebuffer(y.__webglFramebuffer[ae][oe]);else i.deleteFramebuffer(y.__webglFramebuffer[ae]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ae])}else{if(Array.isArray(y.__webglFramebuffer))for(let ae=0;ae<y.__webglFramebuffer.length;ae++)i.deleteFramebuffer(y.__webglFramebuffer[ae]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ae=0;ae<y.__webglColorRenderbuffer.length;ae++)y.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ae]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=b.textures;for(let ae=0,oe=H.length;ae<oe;ae++){const re=n.get(H[ae]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(H[ae])}n.remove(b)}let M=0;function C(){M=0}function $(){const b=M;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),M+=1,b}function G(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function Q(b,y){const H=n.get(b);if(b.isVideoTexture&&ze(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const ae=b.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(H,b,y);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+y)}function te(b,y){const H=n.get(b);if(b.version>0&&H.__version!==b.version){rt(H,b,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+y)}function Y(b,y){const H=n.get(b);if(b.version>0&&H.__version!==b.version){rt(H,b,y);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+y)}function ne(b,y){const H=n.get(b);if(b.version>0&&H.__version!==b.version){J(H,b,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+y)}const Z={[kc]:i.REPEAT,[ds]:i.CLAMP_TO_EDGE,[Gc]:i.MIRRORED_REPEAT},Te={[nn]:i.NEAREST,[Mg]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[Va]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},be={[Eg]:i.NEVER,[Rg]:i.ALWAYS,[$d]:i.LESS,[Zd]:i.LEQUAL,[Ng]:i.EQUAL,[bg]:i.GEQUAL,[Ag]:i.GREATER,[wg]:i.NOTEQUAL};function Ae(b,y){if(y.type===ai&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Gn||y.magFilter===Va||y.magFilter===oo||y.magFilter===Xi||y.minFilter===Gn||y.minFilter===Va||y.minFilter===oo||y.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Z[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Z[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Z[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Te[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Te[y.minFilter]),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===nn||y.minFilter!==oo&&y.minFilter!==Xi||y.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function et(b,y){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",I));const ae=y.source;let oe=h.get(ae);oe===void 0&&(oe={},h.set(ae,oe));const re=G(y);if(re!==b.__cacheKey){oe[re]===void 0&&(oe[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[re].usedTimes++;const Ue=oe[b.__cacheKey];Ue!==void 0&&(oe[b.__cacheKey].usedTimes--,Ue.usedTimes===0&&P(y)),b.__cacheKey=re,b.__webglTexture=oe[re].texture}return H}function rt(b,y,H){let ae=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=i.TEXTURE_3D);const oe=et(b,y),re=y.source;t.bindTexture(ae,b.__webglTexture,i.TEXTURE0+H);const Ue=n.get(re);if(re.version!==Ue.__version||oe===!0){t.activeTexture(i.TEXTURE0+H);const xe=_t.getPrimaries(_t.workingColorSpace),Ne=y.colorSpace===Gi?null:_t.getPrimaries(y.colorSpace),je=y.colorSpace===Gi||xe===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let de=_(y.image,!1,s.maxTextureSize);de=Se(y,de);const Ee=r.convert(y.format,y.colorSpace),it=r.convert(y.type);let We=N(y.internalFormat,Ee,it,y.colorSpace,y.isVideoTexture);Ae(ae,y);let Pe;const Ye=y.mipmaps,Je=y.isVideoTexture!==!0,Tt=Ue.__version===void 0||oe===!0,v=re.dataReady,z=E(y,de);if(y.isDepthTexture)We=x(y.format===lr,y.type),Tt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,We,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,We,de.width,de.height,0,Ee,it,null));else if(y.isDataTexture)if(Ye.length>0){Je&&Tt&&t.texStorage2D(i.TEXTURE_2D,z,We,Ye[0].width,Ye[0].height);for(let V=0,q=Ye.length;V<q;V++)Pe=Ye[V],Je?v&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Pe.width,Pe.height,Ee,it,Pe.data):t.texImage2D(i.TEXTURE_2D,V,We,Pe.width,Pe.height,0,Ee,it,Pe.data);y.generateMipmaps=!1}else Je?(Tt&&t.texStorage2D(i.TEXTURE_2D,z,We,de.width,de.height),v&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Ee,it,de.data)):t.texImage2D(i.TEXTURE_2D,0,We,de.width,de.height,0,Ee,it,de.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Je&&Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,z,We,Ye[0].width,Ye[0].height,de.depth);for(let V=0,q=Ye.length;V<q;V++)if(Pe=Ye[V],y.format!==Xn)if(Ee!==null)if(Je){if(v)if(y.layerUpdates.size>0){const ue=Lh(Pe.width,Pe.height,y.format,y.type);for(const Oe of y.layerUpdates){const $e=Pe.data.subarray(Oe*ue/Pe.data.BYTES_PER_ELEMENT,(Oe+1)*ue/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,Oe,Pe.width,Pe.height,1,Ee,$e,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Pe.width,Pe.height,de.depth,Ee,Pe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,We,Pe.width,Pe.height,de.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?v&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Pe.width,Pe.height,de.depth,Ee,it,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,We,Pe.width,Pe.height,de.depth,0,Ee,it,Pe.data)}else{Je&&Tt&&t.texStorage2D(i.TEXTURE_2D,z,We,Ye[0].width,Ye[0].height);for(let V=0,q=Ye.length;V<q;V++)Pe=Ye[V],y.format!==Xn?Ee!==null?Je?v&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,Pe.width,Pe.height,Ee,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,V,We,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?v&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Pe.width,Pe.height,Ee,it,Pe.data):t.texImage2D(i.TEXTURE_2D,V,We,Pe.width,Pe.height,0,Ee,it,Pe.data)}else if(y.isDataArrayTexture)if(Je){if(Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,z,We,de.width,de.height,de.depth),v)if(y.layerUpdates.size>0){const V=Lh(de.width,de.height,y.format,y.type);for(const q of y.layerUpdates){const ue=de.data.subarray(q*V/de.data.BYTES_PER_ELEMENT,(q+1)*V/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,de.width,de.height,1,Ee,it,ue)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ee,it,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,de.width,de.height,de.depth,0,Ee,it,de.data);else if(y.isData3DTexture)Je?(Tt&&t.texStorage3D(i.TEXTURE_3D,z,We,de.width,de.height,de.depth),v&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ee,it,de.data)):t.texImage3D(i.TEXTURE_3D,0,We,de.width,de.height,de.depth,0,Ee,it,de.data);else if(y.isFramebufferTexture){if(Tt)if(Je)t.texStorage2D(i.TEXTURE_2D,z,We,de.width,de.height);else{let V=de.width,q=de.height;for(let ue=0;ue<z;ue++)t.texImage2D(i.TEXTURE_2D,ue,We,V,q,0,Ee,it,null),V>>=1,q>>=1}}else if(Ye.length>0){if(Je&&Tt){const V=Re(Ye[0]);t.texStorage2D(i.TEXTURE_2D,z,We,V.width,V.height)}for(let V=0,q=Ye.length;V<q;V++)Pe=Ye[V],Je?v&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Ee,it,Pe):t.texImage2D(i.TEXTURE_2D,V,We,Ee,it,Pe);y.generateMipmaps=!1}else if(Je){if(Tt){const V=Re(de);t.texStorage2D(i.TEXTURE_2D,z,We,V.width,V.height)}v&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,it,de)}else t.texImage2D(i.TEXTURE_2D,0,We,Ee,it,de);m(y)&&p(ae),Ue.__version=re.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function J(b,y,H){if(y.image.length!==6)return;const ae=et(b,y),oe=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+H);const re=n.get(oe);if(oe.version!==re.__version||ae===!0){t.activeTexture(i.TEXTURE0+H);const Ue=_t.getPrimaries(_t.workingColorSpace),xe=y.colorSpace===Gi?null:_t.getPrimaries(y.colorSpace),Ne=y.colorSpace===Gi||Ue===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const je=y.isCompressedTexture||y.image[0].isCompressedTexture,de=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let q=0;q<6;q++)!je&&!de?Ee[q]=_(y.image[q],!0,s.maxCubemapSize):Ee[q]=de?y.image[q].image:y.image[q],Ee[q]=Se(y,Ee[q]);const it=Ee[0],We=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type),Ye=N(y.internalFormat,We,Pe,y.colorSpace),Je=y.isVideoTexture!==!0,Tt=re.__version===void 0||ae===!0,v=oe.dataReady;let z=E(y,it);Ae(i.TEXTURE_CUBE_MAP,y);let V;if(je){Je&&Tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,z,Ye,it.width,it.height);for(let q=0;q<6;q++){V=Ee[q].mipmaps;for(let ue=0;ue<V.length;ue++){const Oe=V[ue];y.format!==Xn?We!==null?Je?v&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,Oe.width,Oe.height,We,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,Ye,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,Oe.width,Oe.height,We,Pe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,Ye,Oe.width,Oe.height,0,We,Pe,Oe.data)}}}else{if(V=y.mipmaps,Je&&Tt){V.length>0&&z++;const q=Re(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,z,Ye,q.width,q.height)}for(let q=0;q<6;q++)if(de){Je?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ee[q].width,Ee[q].height,We,Pe,Ee[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ye,Ee[q].width,Ee[q].height,0,We,Pe,Ee[q].data);for(let ue=0;ue<V.length;ue++){const $e=V[ue].image[q].image;Je?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,$e.width,$e.height,We,Pe,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,Ye,$e.width,$e.height,0,We,Pe,$e.data)}}else{Je?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,We,Pe,Ee[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ye,We,Pe,Ee[q]);for(let ue=0;ue<V.length;ue++){const Oe=V[ue];Je?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,We,Pe,Oe.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,Ye,We,Pe,Oe.image[q])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),re.__version=oe.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function he(b,y,H,ae,oe,re){const Ue=r.convert(H.format,H.colorSpace),xe=r.convert(H.type),Ne=N(H.internalFormat,Ue,xe,H.colorSpace);if(!n.get(y).__hasExternalTextures){const de=Math.max(1,y.width>>re),Ee=Math.max(1,y.height>>re);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,re,Ne,de,Ee,y.depth,0,Ue,xe,null):t.texImage2D(oe,re,Ne,de,Ee,0,Ue,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ee(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,oe,n.get(H).__webglTexture,0,Me(y)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,oe,n.get(H).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(b,y,H){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer){const ae=y.depthTexture,oe=ae&&ae.isDepthTexture?ae.type:null,re=x(y.stencilBuffer,oe),Ue=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=Me(y);ee(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,re,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,re,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,re,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,b)}else{const ae=y.textures;for(let oe=0;oe<ae.length;oe++){const re=ae[oe],Ue=r.convert(re.format,re.colorSpace),xe=r.convert(re.type),Ne=N(re.internalFormat,Ue,xe,re.colorSpace),je=Me(y);H&&ee(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Ne,y.width,y.height):ee(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,Ne,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q(y.depthTexture,0);const ae=n.get(y.depthTexture).__webglTexture,oe=Me(y);if(y.depthTexture.format===js)ee(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(y.depthTexture.format===lr)ee(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ge(b){const y=n.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ye(y.__webglFramebuffer,b)}else if(H){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]=i.createRenderbuffer(),Le(y.__webglDepthbuffer[ae],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Le(y.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(b,y,H){const ae=n.get(b);y!==void 0&&he(ae.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ge(b)}function ke(b){const y=b.texture,H=n.get(b),ae=n.get(y);b.addEventListener("dispose",R);const oe=b.textures,re=b.isWebGLCubeRenderTarget===!0,Ue=oe.length>1;if(Ue||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=y.version,o.memory.textures++),re){H.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[xe]=[];for(let Ne=0;Ne<y.mipmaps.length;Ne++)H.__webglFramebuffer[xe][Ne]=i.createFramebuffer()}else H.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let xe=0;xe<y.mipmaps.length;xe++)H.__webglFramebuffer[xe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let xe=0,Ne=oe.length;xe<Ne;xe++){const je=n.get(oe[xe]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&ee(b)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xe=0;xe<oe.length;xe++){const Ne=oe[xe];H.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[xe]);const je=r.convert(Ne.format,Ne.colorSpace),de=r.convert(Ne.type),Ee=N(Ne.internalFormat,je,de,Ne.colorSpace,b.isXRRenderTarget===!0),it=Me(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Ee,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,H.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,y);for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ne=0;Ne<y.mipmaps.length;Ne++)he(H.__webglFramebuffer[xe][Ne],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ne);else he(H.__webglFramebuffer[xe],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let xe=0,Ne=oe.length;xe<Ne;xe++){const je=oe[xe],de=n.get(je);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),Ae(i.TEXTURE_2D,je),he(H.__webglFramebuffer,b,je,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),m(je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(xe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,ae.__webglTexture),Ae(xe,y),y.mipmaps&&y.mipmaps.length>0)for(let Ne=0;Ne<y.mipmaps.length;Ne++)he(H.__webglFramebuffer[Ne],b,y,i.COLOR_ATTACHMENT0,xe,Ne);else he(H.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,xe,0);m(y)&&p(xe),t.unbindTexture()}b.depthBuffer&&Ge(b)}function st(b){const y=b.textures;for(let H=0,ae=y.length;H<ae;H++){const oe=y[H];if(m(oe)){const re=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ue=n.get(oe).__webglTexture;t.bindTexture(re,Ue),p(re),t.unbindTexture()}}}const A=[],pe=[];function le(b){if(b.samples>0){if(ee(b)===!1){const y=b.textures,H=b.width,ae=b.height;let oe=i.COLOR_BUFFER_BIT;const re=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(b),xe=y.length>1;if(xe)for(let Ne=0;Ne<y.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ne=0;Ne<y.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const je=n.get(y[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,H,ae,0,0,H,ae,oe,i.NEAREST),c===!0&&(A.length=0,pe.length=0,A.push(i.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(A.push(re),pe.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Ne=0;Ne<y.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const je=n.get(y[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Me(b){return Math.min(s.maxSamples,b.samples)}function ee(b){const y=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ze(b){const y=o.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function Se(b,y){const H=b.colorSpace,ae=b.format,oe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==jn&&H!==Gi&&(_t.getTransfer(H)===Mt?(ae!==Xn||oe!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function Re(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=C,this.setTexture2D=Q,this.setTexture2DArray=te,this.setTexture3D=Y,this.setTextureCube=ne,this.rebindTextures=Qe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ee}function Wy(i,e){function t(n,s=Gi){let r;const o=_t.getTransfer(s);if(n===bi)return i.UNSIGNED_BYTE;if(n===kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fd)return i.BYTE;if(n===zd)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===mr)return i.HALF_FLOAT;if(n===Vd)return i.ALPHA;if(n===Hd)return i.RGB;if(n===Xn)return i.RGBA;if(n===kd)return i.LUMINANCE;if(n===Gd)return i.LUMINANCE_ALPHA;if(n===js)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===Wd)return i.RED;if(n===Wl)return i.RED_INTEGER;if(n===Xd)return i.RG;if(n===Xl)return i.RG_INTEGER;if(n===ql)return i.RGBA_INTEGER;if(n===Vo||n===Ho||n===ko||n===Go)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wc||n===Xc||n===qc||n===Yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$c||n===Zc||n===Kc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$c||n===Zc)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jc||n===Jc||n===Qc||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===hl||n===dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wo)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qd||n===fl||n===pl||n===ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Xy extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ro extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qy={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ro;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Yy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new fn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Li({vertexShader:Yy,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ky extends Ii{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=new Zy,m=t.getContextAttributes();let p=null,N=null;const x=[],E=[],I=new se;let R=null;const w=new pn;w.layers.enable(1),w.viewport=new at;const P=new pn;P.layers.enable(2),P.viewport=new at;const T=[w,P],M=new Xy;M.layers.enable(1),M.layers.enable(2);let C=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=x[J];return he===void 0&&(he=new hc,x[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=x[J];return he===void 0&&(he=new hc,x[J]=he),he.getGripSpace()},this.getHand=function(J){let he=x[J];return he===void 0&&(he=new hc,x[J]=he),he.getHandSpace()};function G(J){const he=E.indexOf(J.inputSource);if(he===-1)return;const Le=x[he];Le!==void 0&&(Le.update(J.inputSource,J.frame,l||o),Le.dispatchEvent({type:J.type,data:J.inputSource}))}function Q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",te);for(let J=0;J<x.length;J++){const he=E[J];he!==null&&(E[J]=null,x[J].disconnect(he))}C=null,$=null,_.reset(),e.setRenderTarget(p),f=null,h=null,d=null,s=null,N=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),N=new ps(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,Le=null,ye=null;m.depth&&(ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?lr:js,Le=m.stencil?cr:Zi);const Ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(Ge),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),N=new ps(h.textureWidth,h.textureHeight,{format:Xn,type:bi,depthTexture:new Qr(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function te(J){for(let he=0;he<J.removed.length;he++){const Le=J.removed[he],ye=E.indexOf(Le);ye>=0&&(E[ye]=null,x[ye].disconnect(Le))}for(let he=0;he<J.added.length;he++){const Le=J.added[he];let ye=E.indexOf(Le);if(ye===-1){for(let Qe=0;Qe<x.length;Qe++)if(Qe>=E.length){E.push(Le),ye=Qe;break}else if(E[Qe]===null){E[Qe]=Le,ye=Qe;break}if(ye===-1)break}const Ge=x[ye];Ge&&Ge.connect(Le)}}const Y=new L,ne=new L;function Z(J,he,Le){Y.setFromMatrixPosition(he.matrixWorld),ne.setFromMatrixPosition(Le.matrixWorld);const ye=Y.distanceTo(ne),Ge=he.projectionMatrix.elements,Qe=Le.projectionMatrix.elements,ke=Ge[14]/(Ge[10]-1),st=Ge[14]/(Ge[10]+1),A=(Ge[9]+1)/Ge[5],pe=(Ge[9]-1)/Ge[5],le=(Ge[8]-1)/Ge[0],Me=(Qe[8]+1)/Qe[0],ee=ke*le,ze=ke*Me,Se=ye/(-le+Me),Re=Se*-le;he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Re),J.translateZ(Se),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const b=ke+Se,y=st+Se,H=ee-Re,ae=ze+(ye-Re),oe=A*st/y*b,re=pe*st/y*b;J.projectionMatrix.makePerspective(H,ae,oe,re,b,y),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function Te(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;_.texture!==null&&(J.near=_.depthNear,J.far=_.depthFar),M.near=P.near=w.near=J.near,M.far=P.far=w.far=J.far,(C!==M.near||$!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,$=M.far,w.near=C,w.far=$,P.near=C,P.far=$,w.updateProjectionMatrix(),P.updateProjectionMatrix(),J.updateProjectionMatrix());const he=J.parent,Le=M.cameras;Te(M,he);for(let ye=0;ye<Le.length;ye++)Te(Le[ye],he);Le.length===2?Z(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),be(J,M,he)};function be(J,he,Le){Le===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(Le.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=hr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Ae=null;function et(J,he){if(u=he.getViewerPose(l||o),g=he,u!==null){const Le=u.views;f!==null&&(e.setRenderTargetFramebuffer(N,f.framebuffer),e.setRenderTarget(N));let ye=!1;Le.length!==M.cameras.length&&(M.cameras.length=0,ye=!0);for(let Qe=0;Qe<Le.length;Qe++){const ke=Le[Qe];let st=null;if(f!==null)st=f.getViewport(ke);else{const pe=d.getViewSubImage(h,ke);st=pe.viewport,Qe===0&&(e.setRenderTargetTextures(N,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(N))}let A=T[Qe];A===void 0&&(A=new pn,A.layers.enable(Qe),A.viewport=new at,T[Qe]=A),A.matrix.fromArray(ke.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(ke.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(st.x,st.y,st.width,st.height),Qe===0&&(M.matrix.copy(A.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ye===!0&&M.cameras.push(A)}const Ge=s.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){const Qe=d.getDepthInformation(Le[0]);Qe&&Qe.isValid&&Qe.texture&&_.init(e,Qe,s.renderState)}}for(let Le=0;Le<x.length;Le++){const ye=E[Le],Ge=x[Le];ye!==null&&Ge!==void 0&&Ge.update(ye,he,l||o)}Ae&&Ae(J,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}const rt=new af;rt.setAnimationLoop(et),this.setAnimationLoop=function(J){Ae=J},this.dispose=function(){}}}const rs=new On,jy=new yt;function Jy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,N,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,N,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const N=e.get(p),x=N.envMap,E=N.envMapRotation;x&&(m.envMap.value=x,rs.copy(E),rs.x*=-1,rs.y*=-1,rs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(jy.makeRotationFromEuler(rs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,N,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*N,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,N){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=N.texture,m.transmissionSamplerSize.value.set(N.width,N.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const N=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(N.matrixWorld),m.nearDistance.value=N.shadow.camera.near,m.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qy(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(N,x){const E=x.program;n.uniformBlockBinding(N,E)}function l(N,x){let E=s[N.id];E===void 0&&(g(N),E=u(N),s[N.id]=E,N.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(N,I);const R=e.render.frame;r[N.id]!==R&&(h(N),r[N.id]=R)}function u(N){const x=d();N.__bindingPointIndex=x;const E=i.createBuffer(),I=N.__size,R=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function d(){for(let N=0;N<a;N++)if(o.indexOf(N)===-1)return o.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(N){const x=s[N.id],E=N.uniforms,I=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,w=E.length;R<w;R++){const P=Array.isArray(E[R])?E[R]:[E[R]];for(let T=0,M=P.length;T<M;T++){const C=P[T];if(f(C,R,T,I)===!0){const $=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let Q=0;for(let te=0;te<G.length;te++){const Y=G[te],ne=_(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,$+Q,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,Q),Q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(N,x,E,I){const R=N.value,w=x+"_"+E;if(I[w]===void 0)return typeof R=="number"||typeof R=="boolean"?I[w]=R:I[w]=R.clone(),!0;{const P=I[w];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return I[w]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(N){const x=N.uniforms;let E=0;const I=16;for(let w=0,P=x.length;w<P;w++){const T=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,C=T.length;M<C;M++){const $=T[M],G=Array.isArray($.value)?$.value:[$.value];for(let Q=0,te=G.length;Q<te;Q++){const Y=G[Q],ne=_(Y),Z=E%I;Z!==0&&I-Z<ne.boundary&&(E+=I-Z),$.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=ne.storage}}}const R=E%I;return R>0&&(E+=I-R),N.__size=E,N.__cache={},this}function _(N){const x={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(x.boundary=4,x.storage=4):N.isVector2?(x.boundary=8,x.storage=8):N.isVector3||N.isColor?(x.boundary=16,x.storage=12):N.isVector4?(x.boundary=16,x.storage=16):N.isMatrix3?(x.boundary=48,x.storage=48):N.isMatrix4?(x.boundary=64,x.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),x}function m(N){const x=N.target;x.removeEventListener("dispose",m);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const N in s)i.deleteBuffer(s[N]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class eM{constructor(e={}){const{canvas:t=qg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=bn,this.toneMappingExposure=1;const x=this;let E=!1,I=0,R=0,w=null,P=-1,T=null;const M=new at,C=new at;let $=null;const G=new Be(0);let Q=0,te=t.width,Y=t.height,ne=1,Z=null,Te=null;const be=new at(0,0,te,Y),Ae=new at(0,0,te,Y);let et=!1;const rt=new eu;let J=!1,he=!1;const Le=new yt,ye=new L,Ge=new at,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function st(){return w===null?ne:1}let A=n;function pe(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hl}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",ue,!1),A===null){const U="webgl2";if(A=pe(U,S),A===null)throw pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let le,Me,ee,ze,Se,Re,b,y,H,ae,oe,re,Ue,xe,Ne,je,de,Ee,it,We,Pe,Ye,Je,Tt;function v(){le=new ax(A),le.init(),Ye=new Wy(A,le),Me=new tx(A,le,e,Ye),ee=new Hy(A),ze=new ux(A),Se=new wy,Re=new Gy(A,le,ee,Se,Me,Ye,ze),b=new ix(x),y=new ox(x),H=new _0(A),Je=new Qv(A,H),ae=new cx(A,H,ze,Je),oe=new dx(A,ae,H,ze),it=new hx(A,Me,Re),je=new nx(Se),re=new Ay(x,b,y,le,Me,Je,je),Ue=new Jy(x,Se),xe=new Ry,Ne=new Uy(le),Ee=new Jv(x,b,y,ee,oe,h,c),de=new Vy(x,oe,Me),Tt=new Qy(A,ze,Me,ee),We=new ex(A,le,ze),Pe=new lx(A,le,ze),ze.programs=re.programs,x.capabilities=Me,x.extensions=le,x.properties=Se,x.renderLists=xe,x.shadowMap=de,x.state=ee,x.info=ze}v();const z=new Ky(x,A);this.xr=z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const S=le.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=le.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(te,Y,!1))},this.getSize=function(S){return S.set(te,Y)},this.setSize=function(S,U,k=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=S,Y=U,t.width=Math.floor(S*ne),t.height=Math.floor(U*ne),k===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(te*ne,Y*ne).floor()},this.setDrawingBufferSize=function(S,U,k){te=S,Y=U,ne=k,t.width=Math.floor(S*k),t.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,U,k,W){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,U,k,W),ee.viewport(M.copy(be).multiplyScalar(ne).round())},this.getScissor=function(S){return S.copy(Ae)},this.setScissor=function(S,U,k,W){S.isVector4?Ae.set(S.x,S.y,S.z,S.w):Ae.set(S,U,k,W),ee.scissor(C.copy(Ae).multiplyScalar(ne).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(S){ee.setScissorTest(et=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){Te=S},this.getClearColor=function(S){return S.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(S=!0,U=!0,k=!0){let W=0;if(S){let F=!1;if(w!==null){const _e=w.texture.format;F=_e===ql||_e===Xl||_e===Wl}if(F){const _e=w.texture.type,we=_e===bi||_e===Zi||_e===Vr||_e===cr||_e===kl||_e===Gl,Ie=Ee.getClearColor(),De=Ee.getClearAlpha(),Xe=Ie.r,Ze=Ie.g,He=Ie.b;we?(f[0]=Xe,f[1]=Ze,f[2]=He,f[3]=De,A.clearBufferuiv(A.COLOR,0,f)):(g[0]=Xe,g[1]=Ze,g[2]=He,g[3]=De,A.clearBufferiv(A.COLOR,0,g))}else W|=A.COLOR_BUFFER_BIT}U&&(W|=A.DEPTH_BUFFER_BIT),k&&(W|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),xe.dispose(),Ne.dispose(),Se.dispose(),b.dispose(),y.dispose(),oe.dispose(),Je.dispose(),Tt.dispose(),re.dispose(),z.dispose(),z.removeEventListener("sessionstart",Pt),z.removeEventListener("sessionend",Ui),$t.stop()};function V(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=ze.autoReset,U=de.enabled,k=de.autoUpdate,W=de.needsUpdate,F=de.type;v(),ze.autoReset=S,de.enabled=U,de.autoUpdate=k,de.needsUpdate=W,de.type=F}function ue(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Oe(S){const U=S.target;U.removeEventListener("dispose",Oe),$e(U)}function $e(S){Ct(S),Se.remove(S)}function Ct(S){const U=Se.get(S).programs;U!==void 0&&(U.forEach(function(k){re.releaseProgram(k)}),S.isShaderMaterial&&re.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,W,F,_e){U===null&&(U=Qe);const we=F.isMesh&&F.matrixWorld.determinant()<0,Ie=Vm(S,U,k,W,F);ee.setMaterial(W,we);let De=k.index,Xe=1;if(W.wireframe===!0){if(De=ae.getWireframeAttribute(k),De===void 0)return;Xe=2}const Ze=k.drawRange,He=k.attributes.position;let dt=Ze.start*Xe,wt=(Ze.start+Ze.count)*Xe;_e!==null&&(dt=Math.max(dt,_e.start*Xe),wt=Math.min(wt,(_e.start+_e.count)*Xe)),De!==null?(dt=Math.max(dt,0),wt=Math.min(wt,De.count)):He!=null&&(dt=Math.max(dt,0),wt=Math.min(wt,He.count));const bt=wt-dt;if(bt<0||bt===1/0)return;Je.setup(F,W,Ie,k,De);let Mn,ft=We;if(De!==null&&(Mn=H.get(De),ft=Pe,ft.setIndex(Mn)),F.isMesh)W.wireframe===!0?(ee.setLineWidth(W.wireframeLinewidth*st()),ft.setMode(A.LINES)):ft.setMode(A.TRIANGLES);else if(F.isLine){let Fe=W.linewidth;Fe===void 0&&(Fe=1),ee.setLineWidth(Fe*st()),F.isLineSegments?ft.setMode(A.LINES):F.isLineLoop?ft.setMode(A.LINE_LOOP):ft.setMode(A.LINE_STRIP)}else F.isPoints?ft.setMode(A.POINTS):F.isSprite&&ft.setMode(A.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ft.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ft.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Fe=F._multiDrawStarts,Zt=F._multiDrawCounts,pt=F._multiDrawCount,Fn=De?H.get(De).bytesPerElement:1,Ns=Se.get(W).currentProgram.getUniforms();for(let Sn=0;Sn<pt;Sn++)Ns.setValue(A,"_gl_DrawID",Sn),ft.render(Fe[Sn]/Fn,Zt[Sn])}else if(F.isInstancedMesh)ft.renderInstances(dt,bt,F.count);else if(k.isInstancedBufferGeometry){const Fe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Zt=Math.min(k.instanceCount,Fe);ft.renderInstances(dt,bt,Zt)}else ft.render(dt,bt)};function Ft(S,U,k){S.transparent===!0&&S.side===ri&&S.forceSinglePass===!1?(S.side=dn,S.needsUpdate=!0,ro(S,U,k),S.side=$i,S.needsUpdate=!0,ro(S,U,k),S.side=ri):ro(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),m=Ne.get(k),m.init(U),N.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const W=new Set;return S.traverse(function(F){const _e=F.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Ie=_e[we];Ft(Ie,k,F),W.add(Ie)}else Ft(_e,k,F),W.add(_e)}),N.pop(),m=null,W},this.compileAsync=function(S,U,k=null){const W=this.compile(S,U,k);return new Promise(F=>{function _e(){if(W.forEach(function(we){Se.get(we).currentProgram.isReady()&&W.delete(we)}),W.size===0){F(S);return}setTimeout(_e,10)}le.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ot=null;function zt(S){ot&&ot(S)}function Pt(){$t.stop()}function Ui(){$t.start()}const $t=new af;$t.setAnimationLoop(zt),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(S){ot=S,z.setAnimationLoop(S),S===null?$t.stop():$t.start()},z.addEventListener("sessionstart",Pt),z.addEventListener("sessionend",Ui),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(U),U=z.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,w),m=Ne.get(S,N.length),m.init(U),N.push(m),Le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),rt.setFromProjectionMatrix(Le),he=this.localClippingEnabled,J=je.init(this.clippingPlanes,he),_=xe.get(S,p.length),_.init(),p.push(_),z.enabled===!0&&z.isPresenting===!0){const _e=x.xr.getDepthSensingMesh();_e!==null&&pi(_e,U,-1/0,x.sortObjects)}pi(S,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Z,Te),ke=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,ke&&Ee.addToRenderList(_,S),this.info.render.frame++,J===!0&&je.beginShadows();const k=m.state.shadowsArray;de.render(k,S,U),J===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,F=_.transmissive;if(m.setupLights(),U.isArrayCamera){const _e=U.cameras;if(F.length>0)for(let we=0,Ie=_e.length;we<Ie;we++){const De=_e[we];Mr(W,F,S,De)}ke&&Ee.render(S);for(let we=0,Ie=_e.length;we<Ie;we++){const De=_e[we];Qi(_,S,De,De.viewport)}}else F.length>0&&Mr(W,F,S,U),ke&&Ee.render(S),Qi(_,S,U);w!==null&&(Re.updateMultisampleRenderTarget(w),Re.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(x,S,U),Je.resetDefaultState(),P=-1,T=null,N.pop(),N.length>0?(m=N[N.length-1],J===!0&&je.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function pi(S,U,k,W){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||rt.intersectsSprite(S)){W&&Ge.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Le);const we=oe.update(S),Ie=S.material;Ie.visible&&_.push(S,we,Ie,k,Ge.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||rt.intersectsObject(S))){const we=oe.update(S),Ie=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ge.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ge.copy(we.boundingSphere.center)),Ge.applyMatrix4(S.matrixWorld).applyMatrix4(Le)),Array.isArray(Ie)){const De=we.groups;for(let Xe=0,Ze=De.length;Xe<Ze;Xe++){const He=De[Xe],dt=Ie[He.materialIndex];dt&&dt.visible&&_.push(S,we,dt,k,Ge.z,He)}}else Ie.visible&&_.push(S,we,Ie,k,Ge.z,null)}}const _e=S.children;for(let we=0,Ie=_e.length;we<Ie;we++)pi(_e[we],U,k,W)}function Qi(S,U,k,W){const F=S.opaque,_e=S.transmissive,we=S.transparent;m.setupLightsView(k),J===!0&&je.setGlobalState(x.clippingPlanes,k),W&&ee.viewport(M.copy(W)),F.length>0&&so(F,U,k),_e.length>0&&so(_e,U,k),we.length>0&&so(we,U,k),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Mr(S,U,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new ps(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?mr:bi,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const _e=m.state.transmissionRenderTarget[W.id],we=W.viewport||M;_e.setSize(we.z,we.w);const Ie=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(G),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),ke?Ee.render(k):x.clear();const De=x.toneMapping;x.toneMapping=bn;const Xe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),J===!0&&je.setGlobalState(x.clippingPlanes,W),so(S,k,W),Re.updateMultisampleRenderTarget(_e),Re.updateRenderTargetMipmap(_e),le.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let He=0,dt=U.length;He<dt;He++){const wt=U[He],bt=wt.object,Mn=wt.geometry,ft=wt.material,Fe=wt.group;if(ft.side===ri&&bt.layers.test(W.layers)){const Zt=ft.side;ft.side=dn,ft.needsUpdate=!0,Pu(bt,k,W,Mn,ft,Fe),ft.side=Zt,ft.needsUpdate=!0,Ze=!0}}Ze===!0&&(Re.updateMultisampleRenderTarget(_e),Re.updateRenderTargetMipmap(_e))}x.setRenderTarget(Ie),x.setClearColor(G,Q),Xe!==void 0&&(W.viewport=Xe),x.toneMapping=De}function so(S,U,k){const W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,_e=S.length;F<_e;F++){const we=S[F],Ie=we.object,De=we.geometry,Xe=W===null?we.material:W,Ze=we.group;Ie.layers.test(k.layers)&&Pu(Ie,U,k,De,Xe,Ze)}}function Pu(S,U,k,W,F,_e){S.onBeforeRender(x,U,k,W,F,_e),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.transparent===!0&&F.side===ri&&F.forceSinglePass===!1?(F.side=dn,F.needsUpdate=!0,x.renderBufferDirect(k,U,W,F,S,_e),F.side=$i,F.needsUpdate=!0,x.renderBufferDirect(k,U,W,F,S,_e),F.side=ri):x.renderBufferDirect(k,U,W,F,S,_e),S.onAfterRender(x,U,k,W,F,_e)}function ro(S,U,k){U.isScene!==!0&&(U=Qe);const W=Se.get(S),F=m.state.lights,_e=m.state.shadowsArray,we=F.state.version,Ie=re.getParameters(S,F.state,_e,U,k),De=re.getProgramCacheKey(Ie);let Xe=W.programs;W.environment=S.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(S.isMeshStandardMaterial?y:b).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Xe===void 0&&(S.addEventListener("dispose",Oe),Xe=new Map,W.programs=Xe);let Ze=Xe.get(De);if(Ze!==void 0){if(W.currentProgram===Ze&&W.lightsStateVersion===we)return Du(S,Ie),Ze}else Ie.uniforms=re.getUniforms(S),S.onBeforeCompile(Ie,x),Ze=re.acquireProgram(Ie,De),Xe.set(De,Ze),W.uniforms=Ie.uniforms;const He=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=je.uniform),Du(S,Ie),W.needsLights=km(S),W.lightsStateVersion=we,W.needsLights&&(He.ambientLightColor.value=F.state.ambient,He.lightProbe.value=F.state.probe,He.directionalLights.value=F.state.directional,He.directionalLightShadows.value=F.state.directionalShadow,He.spotLights.value=F.state.spot,He.spotLightShadows.value=F.state.spotShadow,He.rectAreaLights.value=F.state.rectArea,He.ltc_1.value=F.state.rectAreaLTC1,He.ltc_2.value=F.state.rectAreaLTC2,He.pointLights.value=F.state.point,He.pointLightShadows.value=F.state.pointShadow,He.hemisphereLights.value=F.state.hemi,He.directionalShadowMap.value=F.state.directionalShadowMap,He.directionalShadowMatrix.value=F.state.directionalShadowMatrix,He.spotShadowMap.value=F.state.spotShadowMap,He.spotLightMatrix.value=F.state.spotLightMatrix,He.spotLightMap.value=F.state.spotLightMap,He.pointShadowMap.value=F.state.pointShadowMap,He.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ze,W.uniformsList=null,Ze}function Iu(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Xo.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Du(S,U){const k=Se.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Vm(S,U,k,W,F){U.isScene!==!0&&(U=Qe),Re.resetTextureUnits();const _e=U.fog,we=W.isMeshStandardMaterial?U.environment:null,Ie=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:jn,De=(W.isMeshStandardMaterial?y:b).get(W.envMap||we),Xe=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ze=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),He=!!k.morphAttributes.position,dt=!!k.morphAttributes.normal,wt=!!k.morphAttributes.color;let bt=bn;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(bt=x.toneMapping);const Mn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ft=Mn!==void 0?Mn.length:0,Fe=Se.get(W),Zt=m.state.lights;if(J===!0&&(he===!0||S!==T)){const Cn=S===T&&W.id===P;je.setState(W,S,Cn)}let pt=!1;W.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Zt.state.version||Fe.outputColorSpace!==Ie||F.isBatchedMesh&&Fe.batching===!1||!F.isBatchedMesh&&Fe.batching===!0||F.isBatchedMesh&&Fe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Fe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Fe.instancing===!1||!F.isInstancedMesh&&Fe.instancing===!0||F.isSkinnedMesh&&Fe.skinning===!1||!F.isSkinnedMesh&&Fe.skinning===!0||F.isInstancedMesh&&Fe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Fe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Fe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Fe.instancingMorph===!1&&F.morphTexture!==null||Fe.envMap!==De||W.fog===!0&&Fe.fog!==_e||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==je.numPlanes||Fe.numIntersection!==je.numIntersection)||Fe.vertexAlphas!==Xe||Fe.vertexTangents!==Ze||Fe.morphTargets!==He||Fe.morphNormals!==dt||Fe.morphColors!==wt||Fe.toneMapping!==bt||Fe.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,Fe.__version=W.version);let Fn=Fe.currentProgram;pt===!0&&(Fn=ro(W,U,F));let Ns=!1,Sn=!1,Fa=!1;const It=Fn.getUniforms(),Oi=Fe.uniforms;if(ee.useProgram(Fn.program)&&(Ns=!0,Sn=!0,Fa=!0),W.id!==P&&(P=W.id,Sn=!0),Ns||T!==S){It.setValue(A,"projectionMatrix",S.projectionMatrix),It.setValue(A,"viewMatrix",S.matrixWorldInverse);const Cn=It.map.cameraPosition;Cn!==void 0&&Cn.setValue(A,ye.setFromMatrixPosition(S.matrixWorld)),Me.logarithmicDepthBuffer&&It.setValue(A,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&It.setValue(A,"isOrthographic",S.isOrthographicCamera===!0),T!==S&&(T=S,Sn=!0,Fa=!0)}if(F.isSkinnedMesh){It.setOptional(A,F,"bindMatrix"),It.setOptional(A,F,"bindMatrixInverse");const Cn=F.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),It.setValue(A,"boneTexture",Cn.boneTexture,Re))}F.isBatchedMesh&&(It.setOptional(A,F,"batchingTexture"),It.setValue(A,"batchingTexture",F._matricesTexture,Re),It.setOptional(A,F,"batchingIdTexture"),It.setValue(A,"batchingIdTexture",F._indirectTexture,Re),It.setOptional(A,F,"batchingColorTexture"),F._colorsTexture!==null&&It.setValue(A,"batchingColorTexture",F._colorsTexture,Re));const za=k.morphAttributes;if((za.position!==void 0||za.normal!==void 0||za.color!==void 0)&&it.update(F,k,Fn),(Sn||Fe.receiveShadow!==F.receiveShadow)&&(Fe.receiveShadow=F.receiveShadow,It.setValue(A,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Oi.envMap.value=De,Oi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Oi.envMapIntensity.value=U.environmentIntensity),Sn&&(It.setValue(A,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&Hm(Oi,Fa),_e&&W.fog===!0&&Ue.refreshFogUniforms(Oi,_e),Ue.refreshMaterialUniforms(Oi,W,ne,Y,m.state.transmissionRenderTarget[S.id]),Xo.upload(A,Iu(Fe),Oi,Re)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Xo.upload(A,Iu(Fe),Oi,Re),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&It.setValue(A,"center",F.center),It.setValue(A,"modelViewMatrix",F.modelViewMatrix),It.setValue(A,"normalMatrix",F.normalMatrix),It.setValue(A,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Cn=W.uniformsGroups;for(let Ba=0,Gm=Cn.length;Ba<Gm;Ba++){const Uu=Cn[Ba];Tt.update(Uu,Fn),Tt.bind(Uu,Fn)}}return Fn}function Hm(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function km(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,U,k){Se.get(S.texture).__webglTexture=U,Se.get(S.depthTexture).__webglTexture=k;const W=Se.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const k=Se.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){w=S,I=U,R=k;let W=!0,F=null,_e=!1,we=!1;if(S){const De=Se.get(S);De.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(A.FRAMEBUFFER,null),W=!1):De.__webglFramebuffer===void 0?Re.setupRenderTarget(S):De.__hasExternalTextures&&Re.rebindTextures(S,Se.get(S.texture).__webglTexture,Se.get(S.depthTexture).__webglTexture);const Xe=S.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);const Ze=Se.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ze[U])?F=Ze[U][k]:F=Ze[U],_e=!0):S.samples>0&&Re.useMultisampledRTT(S)===!1?F=Se.get(S).__webglMultisampledFramebuffer:Array.isArray(Ze)?F=Ze[k]:F=Ze,M.copy(S.viewport),C.copy(S.scissor),$=S.scissorTest}else M.copy(be).multiplyScalar(ne).floor(),C.copy(Ae).multiplyScalar(ne).floor(),$=et;if(ee.bindFramebuffer(A.FRAMEBUFFER,F)&&W&&ee.drawBuffers(S,F),ee.viewport(M),ee.scissor(C),ee.setScissorTest($),_e){const De=Se.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,De.__webglTexture,k)}else if(we){const De=Se.get(S.texture),Xe=U||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.__webglTexture,k||0,Xe)}P=-1},this.readRenderTargetPixels=function(S,U,k,W,F,_e,we){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){ee.bindFramebuffer(A.FRAMEBUFFER,Ie);try{const De=S.texture,Xe=De.format,Ze=De.type;if(!Me.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-W&&k>=0&&k<=S.height-F&&A.readPixels(U,k,W,F,Ye.convert(Xe),Ye.convert(Ze),_e)}finally{const De=w!==null?Se.get(w).__webglFramebuffer:null;ee.bindFramebuffer(A.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,W,F,_e,we){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){ee.bindFramebuffer(A.FRAMEBUFFER,Ie);try{const De=S.texture,Xe=De.format,Ze=De.type;if(!Me.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-W&&k>=0&&k<=S.height-F){const He=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,He),A.bufferData(A.PIXEL_PACK_BUFFER,_e.byteLength,A.STREAM_READ),A.readPixels(U,k,W,F,Ye.convert(Xe),Ye.convert(Ze),0),A.flush();const dt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);await Yg(A,dt,4);try{A.bindBuffer(A.PIXEL_PACK_BUFFER,He),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,_e)}finally{A.deleteBuffer(He),A.deleteSync(dt)}return _e}}finally{const De=w!==null?Se.get(w).__webglFramebuffer:null;ee.bindFramebuffer(A.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(S,U=null,k=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const W=Math.pow(2,-k),F=Math.floor(S.image.width*W),_e=Math.floor(S.image.height*W),we=U!==null?U.x:0,Ie=U!==null?U.y:0;Re.setTexture2D(S,0),A.copyTexSubImage2D(A.TEXTURE_2D,k,0,0,we,Ie,F,_e),ee.unbindTexture()},this.copyTextureToTexture=function(S,U,k=null,W=null,F=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],U=arguments[2],F=arguments[3]||0,k=null);let _e,we,Ie,De,Xe,Ze;k!==null?(_e=k.max.x-k.min.x,we=k.max.y-k.min.y,Ie=k.min.x,De=k.min.y):(_e=S.image.width,we=S.image.height,Ie=0,De=0),W!==null?(Xe=W.x,Ze=W.y):(Xe=0,Ze=0);const He=Ye.convert(U.format),dt=Ye.convert(U.type);Re.setTexture2D(U,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const wt=A.getParameter(A.UNPACK_ROW_LENGTH),bt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Mn=A.getParameter(A.UNPACK_SKIP_PIXELS),ft=A.getParameter(A.UNPACK_SKIP_ROWS),Fe=A.getParameter(A.UNPACK_SKIP_IMAGES),Zt=S.isCompressedTexture?S.mipmaps[F]:S.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Zt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Zt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ie),A.pixelStorei(A.UNPACK_SKIP_ROWS,De),S.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,F,Xe,Ze,_e,we,He,dt,Zt.data):S.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,F,Xe,Ze,Zt.width,Zt.height,He,Zt.data):A.texSubImage2D(A.TEXTURE_2D,F,Xe,Ze,_e,we,He,dt,Zt),A.pixelStorei(A.UNPACK_ROW_LENGTH,wt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,bt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Mn),A.pixelStorei(A.UNPACK_SKIP_ROWS,ft),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Fe),F===0&&U.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,W=null,F=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,W=arguments[1]||null,S=arguments[2],U=arguments[3],F=arguments[4]||0);let _e,we,Ie,De,Xe,Ze,He,dt,wt;const bt=S.isCompressedTexture?S.mipmaps[F]:S.image;k!==null?(_e=k.max.x-k.min.x,we=k.max.y-k.min.y,Ie=k.max.z-k.min.z,De=k.min.x,Xe=k.min.y,Ze=k.min.z):(_e=bt.width,we=bt.height,Ie=bt.depth,De=0,Xe=0,Ze=0),W!==null?(He=W.x,dt=W.y,wt=W.z):(He=0,dt=0,wt=0);const Mn=Ye.convert(U.format),ft=Ye.convert(U.type);let Fe;if(U.isData3DTexture)Re.setTexture3D(U,0),Fe=A.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Re.setTexture2DArray(U,0),Fe=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const Zt=A.getParameter(A.UNPACK_ROW_LENGTH),pt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Fn=A.getParameter(A.UNPACK_SKIP_PIXELS),Ns=A.getParameter(A.UNPACK_SKIP_ROWS),Sn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,bt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,bt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,De),A.pixelStorei(A.UNPACK_SKIP_ROWS,Xe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ze),S.isDataTexture||S.isData3DTexture?A.texSubImage3D(Fe,F,He,dt,wt,_e,we,Ie,Mn,ft,bt.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(Fe,F,He,dt,wt,_e,we,Ie,Mn,bt.data):A.texSubImage3D(Fe,F,He,dt,wt,_e,we,Ie,Mn,ft,bt),A.pixelStorei(A.UNPACK_ROW_LENGTH,Zt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,pt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Fn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ns),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Sn),F===0&&U.generateMipmaps&&A.generateMipmap(Fe),ee.unbindTexture()},this.initRenderTarget=function(S){Se.get(S).__webglFramebuffer===void 0&&Re.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Re.setTextureCube(S,0):S.isData3DTexture?Re.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Re.setTexture2DArray(S,0):Re.setTexture2D(S,0),ee.unbindTexture()},this.resetState=function(){I=0,R=0,w=null,ee.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yl?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===va?"display-p3":"srgb"}}class tM extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class df{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=na,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Kl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new L;class iu{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new iu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nM extends rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class ff extends Dn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class pf extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class mf extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class gf extends fn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=nn,this.minFilter=nn,this.generateMipmaps=!1,this.needsUpdate=!0}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new se:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,s=[],r=[],o=[],a=new L,c=new yt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Vt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Vt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class su extends di{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new se){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class iM extends su{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ru(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Co=new L,dc=new ru,fc=new ru,pc=new ru;class sM extends di{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Co.subVectors(s[0],s[1]).add(s[0]),l=Co);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Co.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Co),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),dc.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,m),fc.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,m),pc.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),fc.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),pc.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(dc.calc(c),fc.calc(c),pc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ph(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function rM(i,e){const t=1-i;return t*t*e}function oM(i,e){return 2*(1-i)*i*e}function aM(i,e){return i*i*e}function Or(i,e,t,n){return rM(i,e)+oM(i,t)+aM(i,n)}function cM(i,e){const t=1-i;return t*t*t*e}function lM(i,e){const t=1-i;return 3*t*t*i*e}function uM(i,e){return 3*(1-i)*i*i*e}function hM(i,e){return i*i*i*e}function Fr(i,e,t,n,s){return cM(i,e)+lM(i,t)+uM(i,n)+hM(i,s)}class _f extends di{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(e,s.x,r.x,o.x,a.x),Fr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dM extends di{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(e,s.x,r.x,o.x,a.x),Fr(e,s.y,r.y,o.y,a.y),Fr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vf extends di{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fM extends di{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xf extends di{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Or(e,s.x,r.x,o.x),Or(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pM extends di{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Or(e,s.x,r.x,o.x),Or(e,s.y,r.y,o.y),Or(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yf extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ph(a,c.x,l.x,u.x,d.x),Ph(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new se().fromArray(s))}return this}}var _l=Object.freeze({__proto__:null,ArcCurve:iM,CatmullRomCurve3:sM,CubicBezierCurve:_f,CubicBezierCurve3:dM,EllipseCurve:su,LineCurve:vf,LineCurve3:fM,QuadraticBezierCurve:xf,QuadraticBezierCurve3:pM,SplineCurve:yf});class mM extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _l[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new _l[s.type]().fromJSON(s))}return this}}class vl extends mM{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new vf(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new xf(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new _f(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new yf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new su(e,t,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qo extends vl{constructor(e){super(e),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new vl().fromJSON(s))}return this}}const gM={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Mf(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,d,h,f;if(n&&(r=MM(i,e,r,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let g=t;g<s;g+=t)d=i[g],h=i[g+1],d<a&&(a=d),h<c&&(c=h),d>l&&(l=d),h>u&&(u=h);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Hr(r,o,t,a,c,f,0),o}};function Mf(i,e,t,n,s){let r,o;if(s===PM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Ih(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Ih(r,i[r],i[r+1],o);return o&&ya(o,o.next)&&(Gr(o),o=o.next),o}function gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ya(t,t.next)||At(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Hr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&AM(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?vM(i,n,s,r):_M(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Gr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=xM(gs(i),e,t),Hr(i,e,t,n,s,r,2)):o===2&&yM(i,e,t,n,s,r):Hr(gs(i),e,t,n,s,r,1);break}}}function _M(i){const e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,h=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&qs(s,a,r,c,o,l,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vM(i,e,t,n){const s=i.prev,r=i,o=i.next;if(At(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<d?u<h?u:h:d<h?d:h,_=a>c?a>l?a:l:c>l?c:l,m=u>d?u>h?u:h:d>h?d:h,p=xl(f,g,e,t,n),N=xl(_,m,e,t,n);let x=i.prevZ,E=i.nextZ;for(;x&&x.z>=p&&E&&E.z<=N;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&qs(a,u,c,d,l,h,x.x,x.y)&&At(x.prev,x,x.next)>=0||(x=x.prevZ,E.x>=f&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&qs(a,u,c,d,l,h,E.x,E.y)&&At(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&qs(a,u,c,d,l,h,x.x,x.y)&&At(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;E&&E.z<=N;){if(E.x>=f&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&qs(a,u,c,d,l,h,E.x,E.y)&&At(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function xM(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!ya(s,r)&&Sf(s,n,n.next,r)&&kr(s,r)&&kr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Gr(n),Gr(n.next),n=i=r),n=n.next}while(n!==i);return gs(n)}function yM(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&RM(o,a)){let c=Tf(o,a);o=gs(o,o.next),c=gs(c,c.next),Hr(o,e,t,n,s,r,0),Hr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function MM(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Mf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(bM(l));for(s.sort(SM),r=0;r<s.length;r++)t=TM(s[r],t);return t}function SM(i,e){return i.x-e.x}function TM(i,e){const t=EM(i,e);if(!t)return e;const n=Tf(t,i);return gs(n,n.next),gs(t,t.next)}function EM(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>n&&(n=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,d;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&qs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),kr(t,i)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&NM(s,t)))&&(s=t,u=d)),t=t.next;while(t!==a);return s}function NM(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function AM(i,e,t,n){let s=i;do s.z===0&&(s.z=xl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wM(s)}function wM(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function xl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function bM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function qs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function RM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!CM(i,e)&&(kr(i,e)&&kr(e,i)&&LM(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||ya(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ya(i,e){return i.x===e.x&&i.y===e.y}function Sf(i,e,t,n){const s=Po(At(i,e,t)),r=Po(At(i,e,n)),o=Po(At(t,n,i)),a=Po(At(t,n,e));return!!(s!==r&&o!==a||s===0&&Lo(i,t,e)||r===0&&Lo(i,n,e)||o===0&&Lo(t,i,n)||a===0&&Lo(t,e,n))}function Lo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Po(i){return i>0?1:i<0?-1:0}function CM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Sf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function kr(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function LM(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Tf(i,e){const t=new yl(i.i,i.x,i.y),n=new yl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ih(i,e,t,n){const s=new yl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function PM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Qs{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Qs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Dh(e),Uh(n,e);let o=e.length;t.forEach(Dh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Uh(n,t[c]);const a=gM.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Dh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Uh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ou extends Di{constructor(e=new qo([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new $n(s,3)),this.setAttribute("uv",new $n(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,N=t.UVGenerator!==void 0?t.UVGenerator:IM;let x,E=!1,I,R,w,P;p&&(x=p.getSpacedPoints(u),E=!0,h=!1,I=p.computeFrenetFrames(u,!1),R=new L,w=new L,P=new L),h||(m=0,f=0,g=0,_=0);const T=a.extractPoints(l);let M=T.shape;const C=T.holes;if(!Qs.isClockWise(M)){M=M.reverse();for(let A=0,pe=C.length;A<pe;A++){const le=C[A];Qs.isClockWise(le)&&(C[A]=le.reverse())}}const G=Qs.triangulateShape(M,C),Q=M;for(let A=0,pe=C.length;A<pe;A++){const le=C[A];M=M.concat(le)}function te(A,pe,le){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().addScaledVector(pe,le)}const Y=M.length,ne=G.length;function Z(A,pe,le){let Me,ee,ze;const Se=A.x-pe.x,Re=A.y-pe.y,b=le.x-A.x,y=le.y-A.y,H=Se*Se+Re*Re,ae=Se*y-Re*b;if(Math.abs(ae)>Number.EPSILON){const oe=Math.sqrt(H),re=Math.sqrt(b*b+y*y),Ue=pe.x-Re/oe,xe=pe.y+Se/oe,Ne=le.x-y/re,je=le.y+b/re,de=((Ne-Ue)*y-(je-xe)*b)/(Se*y-Re*b);Me=Ue+Se*de-A.x,ee=xe+Re*de-A.y;const Ee=Me*Me+ee*ee;if(Ee<=2)return new se(Me,ee);ze=Math.sqrt(Ee/2)}else{let oe=!1;Se>Number.EPSILON?b>Number.EPSILON&&(oe=!0):Se<-Number.EPSILON?b<-Number.EPSILON&&(oe=!0):Math.sign(Re)===Math.sign(y)&&(oe=!0),oe?(Me=-Re,ee=Se,ze=Math.sqrt(H)):(Me=Se,ee=Re,ze=Math.sqrt(H/2))}return new se(Me/ze,ee/ze)}const Te=[];for(let A=0,pe=Q.length,le=pe-1,Me=A+1;A<pe;A++,le++,Me++)le===pe&&(le=0),Me===pe&&(Me=0),Te[A]=Z(Q[A],Q[le],Q[Me]);const be=[];let Ae,et=Te.concat();for(let A=0,pe=C.length;A<pe;A++){const le=C[A];Ae=[];for(let Me=0,ee=le.length,ze=ee-1,Se=Me+1;Me<ee;Me++,ze++,Se++)ze===ee&&(ze=0),Se===ee&&(Se=0),Ae[Me]=Z(le[Me],le[ze],le[Se]);be.push(Ae),et=et.concat(Ae)}for(let A=0;A<m;A++){const pe=A/m,le=f*Math.cos(pe*Math.PI/2),Me=g*Math.sin(pe*Math.PI/2)+_;for(let ee=0,ze=Q.length;ee<ze;ee++){const Se=te(Q[ee],Te[ee],Me);ye(Se.x,Se.y,-le)}for(let ee=0,ze=C.length;ee<ze;ee++){const Se=C[ee];Ae=be[ee];for(let Re=0,b=Se.length;Re<b;Re++){const y=te(Se[Re],Ae[Re],Me);ye(y.x,y.y,-le)}}}const rt=g+_;for(let A=0;A<Y;A++){const pe=h?te(M[A],et[A],rt):M[A];E?(w.copy(I.normals[0]).multiplyScalar(pe.x),R.copy(I.binormals[0]).multiplyScalar(pe.y),P.copy(x[0]).add(w).add(R),ye(P.x,P.y,P.z)):ye(pe.x,pe.y,0)}for(let A=1;A<=u;A++)for(let pe=0;pe<Y;pe++){const le=h?te(M[pe],et[pe],rt):M[pe];E?(w.copy(I.normals[A]).multiplyScalar(le.x),R.copy(I.binormals[A]).multiplyScalar(le.y),P.copy(x[A]).add(w).add(R),ye(P.x,P.y,P.z)):ye(le.x,le.y,d/u*A)}for(let A=m-1;A>=0;A--){const pe=A/m,le=f*Math.cos(pe*Math.PI/2),Me=g*Math.sin(pe*Math.PI/2)+_;for(let ee=0,ze=Q.length;ee<ze;ee++){const Se=te(Q[ee],Te[ee],Me);ye(Se.x,Se.y,d+le)}for(let ee=0,ze=C.length;ee<ze;ee++){const Se=C[ee];Ae=be[ee];for(let Re=0,b=Se.length;Re<b;Re++){const y=te(Se[Re],Ae[Re],Me);E?ye(y.x,y.y+x[u-1].y,x[u-1].x+le):ye(y.x,y.y,d+le)}}}J(),he();function J(){const A=s.length/3;if(h){let pe=0,le=Y*pe;for(let Me=0;Me<ne;Me++){const ee=G[Me];Ge(ee[2]+le,ee[1]+le,ee[0]+le)}pe=u+m*2,le=Y*pe;for(let Me=0;Me<ne;Me++){const ee=G[Me];Ge(ee[0]+le,ee[1]+le,ee[2]+le)}}else{for(let pe=0;pe<ne;pe++){const le=G[pe];Ge(le[2],le[1],le[0])}for(let pe=0;pe<ne;pe++){const le=G[pe];Ge(le[0]+Y*u,le[1]+Y*u,le[2]+Y*u)}}n.addGroup(A,s.length/3-A,0)}function he(){const A=s.length/3;let pe=0;Le(Q,pe),pe+=Q.length;for(let le=0,Me=C.length;le<Me;le++){const ee=C[le];Le(ee,pe),pe+=ee.length}n.addGroup(A,s.length/3-A,1)}function Le(A,pe){let le=A.length;for(;--le>=0;){const Me=le;let ee=le-1;ee<0&&(ee=A.length-1);for(let ze=0,Se=u+m*2;ze<Se;ze++){const Re=Y*ze,b=Y*(ze+1),y=pe+Me+Re,H=pe+ee+Re,ae=pe+ee+b,oe=pe+Me+b;Qe(y,H,ae,oe)}}}function ye(A,pe,le){c.push(A),c.push(pe),c.push(le)}function Ge(A,pe,le){ke(A),ke(pe),ke(le);const Me=s.length/3,ee=N.generateTopUV(n,s,Me-3,Me-2,Me-1);st(ee[0]),st(ee[1]),st(ee[2])}function Qe(A,pe,le,Me){ke(A),ke(pe),ke(Me),ke(pe),ke(le),ke(Me);const ee=s.length/3,ze=N.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);st(ze[0]),st(ze[1]),st(ze[3]),st(ze[1]),st(ze[2]),st(ze[3])}function ke(A){s.push(c[A*3+0]),s.push(c[A*3+1]),s.push(c[A*3+2])}function st(A){r.push(A.x),r.push(A.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return DM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new _l[s.type]().fromJSON(s)),new ou(n,e.options)}}const IM={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new se(r,o),new se(a,c),new se(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new se(o,1-c),new se(l,1-d),new se(h,1-g),new se(_,1-p)]:[new se(a,1-c),new se(u,1-d),new se(f,1-g),new se(m,1-p)]}};function DM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class UM extends rn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ef extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class OM extends Ef{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class FM extends rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zM extends rn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class BM extends rn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class VM extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HM extends rn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Be(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nf extends pf{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Oh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kM{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const GM=new kM;class au{constructor(e){this.manager=e!==void 0?e:GM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}au.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class WM extends Error{constructor(e,t){super(e),this.response=t}}class XM extends au{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Oh.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:n,onError:s});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=yi[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){N();function N(){d.read().then(({done:x,value:E})=>{if(x)p.close();else{_+=E.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,w=u.length;R<w;R++){const P=u[R];P.onProgress&&P.onProgress(I)}p.enqueue(E),N()}},x=>{p.error(x)})}}});return new Response(m)}else throw new WM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Oh.add(e,l);const u=yi[e];delete yi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=yi[e];if(u===void 0)throw this.manager.itemError(e),l;delete yi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _r extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class qM extends _r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const mc=new yt,Fh=new L,zh=new L;class cu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eu,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zh),t.updateMatrixWorld(),mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class YM extends cu{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=hr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Af extends _r{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new YM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bh=new yt,Ar=new L,gc=new L;class $M extends cu{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ar),gc.copy(n.position),gc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(gc),n.updateMatrixWorld(),s.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Bh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh)}}class ZM extends _r{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $M}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class KM extends cu{constructor(){super(new tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jM extends _r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new KM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class JM extends _r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class QM extends _r{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class eS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vh(){return(typeof performance>"u"?Date:performance).now()}class tS extends df{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Hh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nS{constructor(){this.type="ShapePath",this.color=new Be,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new vl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const N=[];for(let x=0,E=p.length;x<E;x++){const I=p[x],R=new qo;R.curves=I.curves,N.push(R)}return N}function n(p,N){const x=N.length;let E=!1;for(let I=x-1,R=0;R<x;I=R++){let w=N[I],P=N[R],T=P.x-w.x,M=P.y-w.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(w=N[R],T=-T,P=N[I],M=-M),p.y<w.y||p.y>P.y)continue;if(p.y===w.y){if(p.x===w.x)return!0}else{const C=M*(p.x-w.x)-T*(p.y-w.y);if(C===0)return!0;if(C<0)continue;E=!E}}else{if(p.y!==w.y)continue;if(P.x<=p.x&&p.x<=w.x||w.x<=p.x&&p.x<=P.x)return!0}}return E}const s=Qs.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new qo,c.curves=a.curves,l.push(c),l;let u=!s(r[0].getPoints());u=e?!u:u;const d=[],h=[];let f=[],g=0,_;h[g]=void 0,f[g]=[];for(let p=0,N=r.length;p<N;p++)a=r[p],_=a.getPoints(),o=s(_),o=e?!o:o,o?(!u&&h[g]&&g++,h[g]={s:new qo,p:_},h[g].s.curves=a.curves,u&&g++,f[g]=[]):f[g].push({h:a,p:_[0]});if(!h[0])return t(r);if(h.length>1){let p=!1,N=0;for(let x=0,E=h.length;x<E;x++)d[x]=[];for(let x=0,E=h.length;x<E;x++){const I=f[x];for(let R=0;R<I.length;R++){const w=I[R];let P=!0;for(let T=0;T<h.length;T++)n(w.p,h[T].p)&&(x!==T&&N++,P?(P=!1,d[T].push(w)):p=!0);P&&d[x].push(w)}}N>0&&p===!1&&(f=d)}let m;for(let p=0,N=h.length;p<N;p++){c=h[p].s,l.push(c),m=f[p];for(let x=0,E=m.length;x<E;x++)c.holes.push(m[x].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);const kh={type:"change"},_c={type:"start"},Gh={type:"end"},Io=new Jd,Wh=new Ti,iS=Math.cos(70*Zl.DEG2RAD);class sS extends Ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:As.ROTATE,MIDDLE:As.DOLLY,RIGHT:As.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",Ne),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ne),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(kh),n.update(),r=s.NONE},this.update=function(){const v=new L,z=new ms().setFromUnitVectors(e.up,new L(0,1,0)),V=z.clone().invert(),q=new L,ue=new ms,Oe=new L,$e=2*Math.PI;return function(Ft=null){const ot=n.object.position;v.copy(ot).sub(n.target),v.applyQuaternion(z),a.setFromVector3(v),n.autoRotate&&r===s.NONE&&$(M(Ft)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let zt=n.minAzimuthAngle,Pt=n.maxAzimuthAngle;isFinite(zt)&&isFinite(Pt)&&(zt<-Math.PI?zt+=$e:zt>Math.PI&&(zt-=$e),Pt<-Math.PI?Pt+=$e:Pt>Math.PI&&(Pt-=$e),zt<=Pt?a.theta=Math.max(zt,Math.min(Pt,a.theta)):a.theta=a.theta>(zt+Pt)/2?Math.max(zt,a.theta):Math.min(Pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ui=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)a.radius=be(a.radius);else{const $t=a.radius;a.radius=be(a.radius*l),Ui=$t!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(V),ot.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&R){let $t=null;if(n.object.isPerspectiveCamera){const pi=v.length();$t=be(pi*l);const Qi=pi-$t;n.object.position.addScaledVector(E,Qi),n.object.updateMatrixWorld(),Ui=!!Qi}else if(n.object.isOrthographicCamera){const pi=new L(I.x,I.y,0);pi.unproject(n.object);const Qi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ui=Qi!==n.object.zoom;const Mr=new L(I.x,I.y,0);Mr.unproject(n.object),n.object.position.sub(Mr).add(pi),n.object.updateMatrixWorld(),$t=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;$t!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar($t).add(n.object.position):(Io.origin.copy(n.object.position),Io.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Io.direction))<iS?e.lookAt(n.target):(Wh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Io.intersectPlane(Wh,n.target))))}else if(n.object.isOrthographicCamera){const $t=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),$t!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ui=!0)}return l=1,R=!1,Ui||q.distanceToSquared(n.object.position)>o||8*(1-ue.dot(n.object.quaternion))>o||Oe.distanceToSquared(n.target)>o?(n.dispatchEvent(kh),q.copy(n.object.position),ue.copy(n.object.quaternion),Oe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ee),n.domElement.removeEventListener("pointerdown",Re),n.domElement.removeEventListener("pointercancel",y),n.domElement.removeEventListener("wheel",oe),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",y),n.domElement.getRootNode().removeEventListener("keydown",Ue,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ne),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Hh,c=new Hh;let l=1;const u=new L,d=new se,h=new se,f=new se,g=new se,_=new se,m=new se,p=new se,N=new se,x=new se,E=new L,I=new se;let R=!1;const w=[],P={};let T=!1;function M(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function C(v){const z=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*z)}function $(v){c.theta-=v}function G(v){c.phi-=v}const Q=function(){const v=new L;return function(V,q){v.setFromMatrixColumn(q,0),v.multiplyScalar(-V),u.add(v)}}(),te=function(){const v=new L;return function(V,q){n.screenSpacePanning===!0?v.setFromMatrixColumn(q,1):(v.setFromMatrixColumn(q,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(V),u.add(v)}}(),Y=function(){const v=new L;return function(V,q){const ue=n.domElement;if(n.object.isPerspectiveCamera){const Oe=n.object.position;v.copy(Oe).sub(n.target);let $e=v.length();$e*=Math.tan(n.object.fov/2*Math.PI/180),Q(2*V*$e/ue.clientHeight,n.object.matrix),te(2*q*$e/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Q(V*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),te(q*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ne(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Te(v,z){if(!n.zoomToCursor)return;R=!0;const V=n.domElement.getBoundingClientRect(),q=v-V.left,ue=z-V.top,Oe=V.width,$e=V.height;I.x=q/Oe*2-1,I.y=-(ue/$e)*2+1,E.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function be(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function Ae(v){d.set(v.clientX,v.clientY)}function et(v){Te(v.clientX,v.clientX),p.set(v.clientX,v.clientY)}function rt(v){g.set(v.clientX,v.clientY)}function J(v){h.set(v.clientX,v.clientY),f.subVectors(h,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;$(2*Math.PI*f.x/z.clientHeight),G(2*Math.PI*f.y/z.clientHeight),d.copy(h),n.update()}function he(v){N.set(v.clientX,v.clientY),x.subVectors(N,p),x.y>0?ne(C(x.y)):x.y<0&&Z(C(x.y)),p.copy(N),n.update()}function Le(v){_.set(v.clientX,v.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),Y(m.x,m.y),g.copy(_),n.update()}function ye(v){Te(v.clientX,v.clientY),v.deltaY<0?Z(C(v.deltaY)):v.deltaY>0&&ne(C(v.deltaY)),n.update()}function Ge(v){let z=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),z=!0;break}z&&(v.preventDefault(),n.update())}function Qe(v){if(w.length===1)d.set(v.pageX,v.pageY);else{const z=Je(v),V=.5*(v.pageX+z.x),q=.5*(v.pageY+z.y);d.set(V,q)}}function ke(v){if(w.length===1)g.set(v.pageX,v.pageY);else{const z=Je(v),V=.5*(v.pageX+z.x),q=.5*(v.pageY+z.y);g.set(V,q)}}function st(v){const z=Je(v),V=v.pageX-z.x,q=v.pageY-z.y,ue=Math.sqrt(V*V+q*q);p.set(0,ue)}function A(v){n.enableZoom&&st(v),n.enablePan&&ke(v)}function pe(v){n.enableZoom&&st(v),n.enableRotate&&Qe(v)}function le(v){if(w.length==1)h.set(v.pageX,v.pageY);else{const V=Je(v),q=.5*(v.pageX+V.x),ue=.5*(v.pageY+V.y);h.set(q,ue)}f.subVectors(h,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;$(2*Math.PI*f.x/z.clientHeight),G(2*Math.PI*f.y/z.clientHeight),d.copy(h)}function Me(v){if(w.length===1)_.set(v.pageX,v.pageY);else{const z=Je(v),V=.5*(v.pageX+z.x),q=.5*(v.pageY+z.y);_.set(V,q)}m.subVectors(_,g).multiplyScalar(n.panSpeed),Y(m.x,m.y),g.copy(_)}function ee(v){const z=Je(v),V=v.pageX-z.x,q=v.pageY-z.y,ue=Math.sqrt(V*V+q*q);N.set(0,ue),x.set(0,Math.pow(N.y/p.y,n.zoomSpeed)),ne(x.y),p.copy(N);const Oe=(v.pageX+z.x)*.5,$e=(v.pageY+z.y)*.5;Te(Oe,$e)}function ze(v){n.enableZoom&&ee(v),n.enablePan&&Me(v)}function Se(v){n.enableZoom&&ee(v),n.enableRotate&&le(v)}function Re(v){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",y)),!Pe(v)&&(it(v),v.pointerType==="touch"?je(v):H(v)))}function b(v){n.enabled!==!1&&(v.pointerType==="touch"?de(v):ae(v))}function y(v){switch(We(v),w.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",y),n.dispatchEvent(Gh),r=s.NONE;break;case 1:const z=w[0],V=P[z];je({pointerId:z,pageX:V.x,pageY:V.y});break}}function H(v){let z;switch(v.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case As.DOLLY:if(n.enableZoom===!1)return;et(v),r=s.DOLLY;break;case As.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;rt(v),r=s.PAN}else{if(n.enableRotate===!1)return;Ae(v),r=s.ROTATE}break;case As.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;Ae(v),r=s.ROTATE}else{if(n.enablePan===!1)return;rt(v),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(_c)}function ae(v){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;J(v);break;case s.DOLLY:if(n.enableZoom===!1)return;he(v);break;case s.PAN:if(n.enablePan===!1)return;Le(v);break}}function oe(v){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(v.preventDefault(),n.dispatchEvent(_c),ye(re(v)),n.dispatchEvent(Gh))}function re(v){const z=v.deltaMode,V={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(z){case 1:V.deltaY*=16;break;case 2:V.deltaY*=100;break}return v.ctrlKey&&!T&&(V.deltaY*=10),V}function Ue(v){v.key==="Control"&&(T=!0,n.domElement.getRootNode().addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(v){v.key==="Control"&&(T=!1,n.domElement.getRootNode().removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function Ne(v){n.enabled===!1||n.enablePan===!1||Ge(v)}function je(v){switch(Ye(v),w.length){case 1:switch(n.touches.ONE){case ws.ROTATE:if(n.enableRotate===!1)return;Qe(v),r=s.TOUCH_ROTATE;break;case ws.PAN:if(n.enablePan===!1)return;ke(v),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ws.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;A(v),r=s.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(v),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(_c)}function de(v){switch(Ye(v),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;le(v),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Me(v),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ze(v),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(v),n.update();break;default:r=s.NONE}}function Ee(v){n.enabled!==!1&&v.preventDefault()}function it(v){w.push(v.pointerId)}function We(v){delete P[v.pointerId];for(let z=0;z<w.length;z++)if(w[z]==v.pointerId){w.splice(z,1);return}}function Pe(v){for(let z=0;z<w.length;z++)if(w[z]==v.pointerId)return!0;return!1}function Ye(v){let z=P[v.pointerId];z===void 0&&(z=new se,P[v.pointerId]=z),z.set(v.pageX,v.pageY)}function Je(v){const z=v.pointerId===w[0]?w[1]:w[0];return P[z]}n.domElement.addEventListener("contextmenu",Ee),n.domElement.addEventListener("pointerdown",Re),n.domElement.addEventListener("pointercancel",y),n.domElement.addEventListener("wheel",oe,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ue,{passive:!0,capture:!0}),this.update()}}var rS=`varying vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
}`,oS=`#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

uniform float uTime;

vec3 palette(float t)
{
    vec3 a = vec3(0.5, 0.5, 0.5);		
    vec3 b = vec3(0.5, 0.5, 0.5);	
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263, 0.416, 0.557);
    return a + b * cos(6.28318 * (c * t + d));
}

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}

vec2 fade(vec2 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec2 P)
{
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); 
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; 
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

void main()
{
  
    vec2 uv = vUv;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);

    for(float i= 0.0; i< 3.0; i++){

        uv = fract(uv* 2.0);

        float myColor = 1.0;
        float d = distance(uv, vec2(0.5)) * exp(-distance(uv0, vec2(0.5)));

        vec3 col = palette(distance(uv0, vec2(0.5)) + i * 0.4 + uTime * 0.4);

        d = sin(d*16.0 + uTime)/16.0;
        d = abs(d);
        d = pow(0.01 / d, 1.5);

        finalColor += col * d;
    }

    gl_FragColor = vec4(finalColor, 1.0);
}`;const Xh={VERTEX:"vertex",FRAGMENT:"fragment"},ct={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},Ma=["x","y","z","w"];function wf(i,e=!1){let t="{";i.isNode===!0&&(t+=i.id);for(const{property:n,childNode:s}of sa(i))t+=","+n.slice(0,-4)+":"+s.getCacheKey(e);return t+="}",t}function*sa(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}}}function qi(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function bf(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new Be(...e):t==="vec2"?new se(...e):t==="vec3"?new L(...e):t==="vec4"?new at(...e):t==="mat3"?new tt(...e):t==="mat4"?new yt(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?Cf(e[0]):null}function Rf(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function Cf(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const qh=new Map;let aS=0;class Ve extends Ii{constructor(e=null){super(),this.nodeType=e,this.updateType=ct.NONE,this.updateBeforeType=ct.NONE,this.updateAfterType=ct.NONE,this.uuid=Zl.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.global=!1,this.isNode=!0,Object.defineProperty(this,"id",{value:aS++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,ct.FRAME)}onRenderUpdate(e){return this.onUpdate(e,ct.RENDER)}onObjectUpdate(e){return this.onUpdate(e,ct.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return this.global}*getChildren(){for(const{childNode:e}of sa(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=wf(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getUpdateAfterType(){return this.updateAfterType}getElementType(e){const t=this.getNodeType(e);return e.getElementType(t)}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);let n=0;for(const s of this.getChildren())t["node"+n++]=s;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}updateAfter(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const r=e.getBuildStage();if(r==="setup"){this.updateReference(e);const o=e.getNodeProperties(this);if(o.initialized!==!0){const a=e.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(e),o.outputNode!==null&&e.stack.nodes.length!==a&&(o.outputNode=e.stack);for(const c of Object.values(o))c&&c.isNode===!0&&c.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);s=c.snippet,s===void 0&&(s=this.generate(e)||"",c.snippet=s),s=e.format(s,a,t)}else s=this.generate(e,t)||"";return e.removeChain(this),s}getSerializeChildren(){return sa(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:r,childNode:o}of t)r!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(r)?[]:{}),n[s][r]=o.toJSON(e.meta).uuid):n[s]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const r of e.inputNodes[n])s.push(t[r]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];s[r]=t[o]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(s){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}function ie(i,e){if(typeof e!="function"||!i)throw new Error(`Node class ${i} is not a class`);if(qh.has(i)){console.warn(`Redefinition of node class ${i}`);return}qh.set(i,e),e.type=i}class ut extends Ve{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(r.propertyName!==void 0)return e.format(r.propertyName,s,t);if(s!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,s),a=e.getVarFromNode(this,null,s),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`),r.snippet=o,r.propertyName=c,e.format(r.propertyName,s,t)}}return super.build(e,t)}}ie("TempNode",ut);class vr extends Ve{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}ie("ArrayElementNode",vr);class lu extends Ve{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),r=n.build(e,s);return e.format(r,s,t)}}ie("ConvertNode",lu);class Lf extends ut{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,r=e.getComponentType(n),o=[];for(const c of s){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),o.push(l)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}ie("JoinNode",Lf);const cS=Ma.join("");class Ml extends Ve{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(Ma.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let r=null;if(s>1){let o=null;this.getVectorLength()>=s&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,o);this.components.length===s&&this.components===cS.slice(0,this.components.length)?r=e.format(c,o,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}ie("SplitNode",Ml);class Pf extends ut{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,r=this.getNodeType(e),o=e.getTypeFromLength(n.length),a=s.build(e,o),c=t.build(e,r),l=e.getTypeLength(r),u=[];for(let d=0;d<l;d++){const h=Ma[d];h===n[0]?(u.push(a),d+=n.length-1):u.push(c+"."+h)}return`${e.getType(r)}( ${u.join(", ")} )`}}ie("SetNode",Pf);class Sa extends Ve{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?qi(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=qi(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=Rf(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?bf(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}ie("InputNode",Sa);class fi extends Sa{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}ie("ConstNode",fi);let fr=null;const Ys=new Map;function O(i,e){if(Ys.has(i)){console.warn(`Redefinition of node element ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);Ys.set(i,e)}const Yh=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),If={setup(i,e){const t=e.shift();return i(Na(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(fr.assign(t,...n),t);if(Ys.has(e)){const n=Ys.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&Ys.has(e.slice(0,e.length-6))){const n=Ys.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=Yh(e),fe(new Ml(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Yh(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>fe(new Pf(i,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),fe(new Ml(i,e));if(/^\d+$/.test(e)===!0)return fe(new vr(t,new fi(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},vc=new WeakMap,$h=new WeakMap,lS=function(i,e=null){const t=qi(i);if(t==="node"){let n=vc.get(i);return n===void 0&&(n=new Proxy(i,If),vc.set(i,n),vc.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return fe(Sl(i,e));if(t==="shader")return me(i)}return i},uS=function(i,e=null){for(const t in i)i[t]=fe(i[t],e);return i},hS=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=fe(i[n],e);return i},dS=function(i,e=null,t=null,n=null){const s=r=>fe(n!==null?Object.assign(r,n):r);return e===null?(...r)=>s(new i(...er(r))):t!==null?(t=fe(t),(...r)=>s(new i(e,...er(r),t))):(...r)=>s(new i(e,...er(r)))},fS=function(i,...e){return fe(new i(...er(e)))};class pS extends Ve{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode===null&&(t.outputNode=this.setupOutput(e)),t.outputNode.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let o=$h.get(e.constructor);o===void 0&&(o=new WeakMap,$h.set(e.constructor,o));let a=o.get(t);return a===void 0&&(a=fe(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),fe(a.call(n))}const s=t.jsFunc,r=n!==null?s(n,e.stack,e):s(e.stack,e);return fe(r)}setup(e){const{outputNode:t}=e.getNodeProperties(this);return t||this.setupOutput(e)}setupOutput(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class mS extends Ve{constructor(e){super(),this.jsFunc=e,this.layout=null,this.global=!0}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return Na(e),fe(new pS(this,e))}setup(){return this.call()}}const gS=[!1,!0],_S=[0,1,2,3],vS=[-1,-2],Df=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],uu=new Map;for(const i of gS)uu.set(i,new fi(i));const hu=new Map;for(const i of _S)hu.set(i,new fi(i,"uint"));const du=new Map([...hu].map(i=>new fi(i.value,"int")));for(const i of vS)du.set(i,new fi(i,"int"));const Ta=new Map([...du].map(i=>new fi(i.value)));for(const i of Df)Ta.set(i,new fi(i));for(const i of Df)Ta.set(-i,new fi(-i));const Ea={bool:uu,uint:hu,ints:du,float:Ta},Zh=new Map([...uu,...Ta]),Sl=(i,e)=>Zh.has(i)?Zh.get(i):i.isNode===!0?i:new fi(i,e),xS=i=>{try{return i.getNodeType()}catch{return}},vt=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[bf(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return fe(e.get(t[0]));if(t.length===1){const s=Sl(t[0],i);return xS(s)===i?fe(s):fe(new lu(s,i))}const n=t.map(s=>Sl(s));return fe(new Lf(n,i))}},Kh=i=>i&&i.value,yS=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function zr(i){return new Proxy(new mS(i),If)}const fe=(i,e=null)=>lS(i,e),Na=(i,e=null)=>new uS(i,e),er=(i,e=null)=>new hS(i,e),B=(...i)=>new dS(...i),ge=(...i)=>new fS(...i),me=i=>{const e=new zr(i),t=(...n)=>{let s;return Na(n),n[0]&&n[0].isNode?s=[...n]:s=n[0],e.call(s)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};ie("ShaderNode",zr);O("toGlobal",i=>(i.global=!0,i));const jh=i=>{fr=i},MS=()=>fr,Lt=(...i)=>fr.if(...i);function SS(i){return fr&&fr.add(i),i}O("append",SS);const TS=new vt("color"),j=new vt("float",Ea.float),Bt=new vt("int",Ea.ints),ES=new vt("uint",Ea.uint),NS=new vt("bool",Ea.bool),ce=new vt("vec2"),Wi=new vt("ivec2"),AS=new vt("uvec2"),wS=new vt("bvec2"),X=new vt("vec3"),bS=new vt("ivec3"),RS=new vt("uvec3"),CS=new vt("bvec3"),Ce=new vt("vec4"),LS=new vt("ivec4"),PS=new vt("uvec4"),IS=new vt("bvec4"),fu=new vt("mat2"),DS=new vt("imat2"),US=new vt("umat2"),OS=new vt("bmat2"),on=new vt("mat3"),FS=new vt("imat3"),zS=new vt("umat3"),BS=new vt("bmat3"),tr=new vt("mat4"),VS=new vt("imat4"),HS=new vt("umat4"),kS=new vt("bmat4");O("toColor",TS);O("toFloat",j);O("toInt",Bt);O("toUint",ES);O("toBool",NS);O("toVec2",ce);O("toIvec2",Wi);O("toUvec2",AS);O("toBvec2",wS);O("toVec3",X);O("toIvec3",bS);O("toUvec3",RS);O("toBvec3",CS);O("toVec4",Ce);O("toIvec4",LS);O("toUvec4",PS);O("toBvec4",IS);O("toMat2",fu);O("toImat2",DS);O("toUmat2",US);O("toBmat2",OS);O("toMat3",on);O("toImat3",FS);O("toUmat3",zS);O("toBmat3",BS);O("toMat4",tr);O("toImat4",VS);O("toUmat4",HS);O("toBmat4",kS);const GS=B(vr),WS=(i,e)=>fe(new lu(fe(i),e));O("element",GS);O("convert",WS);class Uf extends ut{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return Ma.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:s}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=s.build(e,o),l=s.getNodeType(e),u=e.getDataFromNode(this);let d;if(u.initialized===!0)t!=="void"&&(d=a);else if(r){const h=e.getVarFromNode(this,null,o),f=e.getPropertyName(h);e.addLineFlowCode(`${f} = ${c}`);const g=n.node.context({assign:!0}).build(e);for(let _=0;_<n.components.length;_++){const m=n.components[_];e.addLineFlowCode(`${g}.${m} = ${f}[ ${_} ]`)}t!=="void"&&(d=a)}else d=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(d),t!=="void"&&(d=a));return u.initialized=!0,e.format(d,o,t)}}const XS=B(Uf);ie("AssignNode",Uf);O("assign",XS);class Of extends Ve{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}setupVarying(e){const t=e.getNodeProperties(this);let n=t.varying;if(n===void 0){const s=this.name,r=this.getNodeType(e);t.varying=n=e.getVaryingFromNode(this,s,r),t.node=this.node}return n.needsInterpolation||(n.needsInterpolation=e.shaderStage==="fragment"),n}setup(e){this.setupVarying(e)}analyze(e){return this.setupVarying(e),this.node.analyze(e)}generate(e){const t=e.getNodeProperties(this),n=this.setupVarying(e);if(t.propertyName===void 0){const s=this.getNodeType(e),r=e.getPropertyName(n,Xh.VERTEX);e.flowNodeFromShaderStage(Xh.VERTEX,this.node,s,r),t.propertyName=r}return e.getPropertyName(n)}}const Ut=B(Of);O("varying",Ut);ie("VaryingNode",Of);class pu extends Ve{constructor(e,t=null,n=null){super(t),this.defaultNode=n,this.global=!0,this._attributeName=e}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):Ut(this).build(e,n)}else{console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`);const{defaultNode:r}=this;return r!==null?r.build(e,n):e.generateConst(n)}}}const tn=(i,e,t)=>fe(new pu(i,e,fe(t)));ie("AttributeNode",pu);class Ff extends Ve{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const zf=B(Ff);O("bypass",zf);ie("BypassNode",Ff);class Bf extends Ve{constructor(e,t=!0){super(),this.node=e,this.parent=t,this.isCacheNode=!0}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),s=e.getCacheFromNode(this,parent);e.setCache(s);const r=this.node.build(e,...t);return e.setCache(n),r}}const Yo=(i,...e)=>fe(new Bf(fe(i),...e));O("cache",Yo);ie("CacheNode",Bf);class mu extends Ve{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}analyze(e){this.node.build(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const s=this.node.build(e,t);return e.setContext(n),s}}const Br=B(mu),qS=(i,e)=>Br(i,{label:e});O("context",Br);O("label",qS);ie("ContextNode",mu);class gn extends Ve{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===gn.VERTEX)s=e.getVertexIndex();else if(n===gn.INSTANCE)s=e.getInstanceIndex();else if(n===gn.DRAW)s=e.getDrawIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=s:r=Ut(this).build(e,t),r}}gn.VERTEX="vertex";gn.INSTANCE="instance";gn.DRAW="draw";const YS=ge(gn,gn.VERTEX),gu=ge(gn,gn.INSTANCE),$S=ge(gn,gn.DRAW);ie("IndexNode",gn);class Aa{start(){}finish(){}direct(){}directRectArea(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class Vf extends Ve{constructor(e,t=null){super(),this.node=e,this.name=t,this.global=!0,this.isVarNode=!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(s),o=t.build(e,s.type);return e.addLineFlowCode(`${r} = ${o}`),r}}const ra=B(Vf);O("temp",ra);O("toVar",(...i)=>ra(...i).append());ie("VarNode",Vf);class ht extends Ve{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const Nt=(i,e)=>fe(new ht(i,e)),Jn=(i,e)=>fe(new ht(i,e,!0)),xt=ge(ht,"vec4","DiffuseColor"),Ei=ge(ht,"float","Roughness"),oa=ge(ht,"float","Metalness"),Tl=ge(ht,"float","Clearcoat"),aa=ge(ht,"float","ClearcoatRoughness"),$s=ge(ht,"vec3","Sheen"),_u=ge(ht,"float","SheenRoughness"),vu=ge(ht,"float","Iridescence"),Hf=ge(ht,"float","IridescenceIOR"),kf=ge(ht,"float","IridescenceThickness"),El=ge(ht,"float","AlphaT"),ls=ge(ht,"float","Anisotropy"),$o=ge(ht,"vec3","AnisotropyT"),nr=ge(ht,"vec3","AnisotropyB"),An=ge(ht,"color","SpecularColor"),ca=ge(ht,"float","SpecularF90"),Nl=ge(ht,"float","Shininess"),ZS=ge(ht,"vec4","Output"),ir=ge(ht,"float","dashSize"),la=ge(ht,"float","gapSize");ge(ht,"float","pointWidth");const Zo=ge(ht,"float","IOR"),Al=ge(ht,"float","Transmission"),Gf=ge(ht,"float","Thickness"),Wf=ge(ht,"float","AttenuationDistance"),Xf=ge(ht,"color","AttenuationColor"),qf=ge(ht,"float","Dispersion");ie("PropertyNode",ht);class KS extends ht{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}ie("ParameterNode",KS);class xu extends Ve{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}B(xu);ie("CodeNode",xu);class jS extends xu{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,r=n.type,o=e.getCodeFromNode(this,r);s!==""&&(o.name=s);const a=e.getPropertyName(o);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const d of u){const h=new RegExp(`\\b${d}\\b`,"g"),f=l[d].build(e,"property");c=c.replace(h,f)}return o.code=c+`
`,t==="property"?a:e.format(`${a}()`,r,t)}}ie("FunctionNode",jS);class yu extends Ve{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const JS=i=>new yu(i),Mu=i=>new yu(i,!0);Mu("frame");Mu("render");const QS=JS("object");ie("UniformGroupNode",yu);class Ms extends Sa{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.name="",this.groupNode=QS}label(e){return this.name=e,this}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(s=>{const r=e(s,n);r!==void 0&&(this.value=r)},t)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let r=e.getNodeFromHash(s);r===void 0&&(e.setHashNode(this,s),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,this.name||e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const qe=(i,e)=>{const t=yS(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return fe(new Ms(n,t))};ie("UniformNode",Ms);const yn=i=>tn("uv"+(i>0?i:""),"vec2");class Yf extends Ve{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const ua=B(Yf);O("textureSize",ua);ie("TextureSizeNode",Yf);class St extends ut{constructor(e,t,n,...s){if(super(),s.length>0){let r=new St(e,t,n);for(let o=0;o<s.length-1;o++)r=new St(e,r,s[o]);t=r,n=s[s.length-1]}this.op=e,this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=s.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=s.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=s.build(e,a),u=typeof r<"u"?r.build(e,c):null,d=e.getTypeLength(t),h=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&d>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,o,t):n==="<="&&d>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,t):n===">"&&d>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,o,t):n===">="&&d>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):h?e.format(`${h}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${n} ${u} )`,o,t);if(a!=="void")return h?e.format(`${h}( ${l}, ${u} )`,o,t):e.format(`${l} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const vn=B(St,"+"),li=B(St,"-"),mt=B(St,"*"),Pi=B(St,"/"),eT=B(St,"%"),tT=B(St,"=="),nT=B(St,"!="),iT=B(St,"<"),sT=B(St,">"),rT=B(St,"<="),oT=B(St,">="),aT=B(St,"&&"),cT=B(St,"||"),lT=B(St,"!"),uT=B(St,"^^"),hT=B(St,"&"),dT=B(St,"~"),fT=B(St,"|"),pT=B(St,"^"),mT=B(St,"<<"),gT=B(St,">>");O("add",vn);O("sub",li);O("mul",mt);O("div",Pi);O("remainder",eT);O("equal",tT);O("notEqual",nT);O("lessThan",iT);O("greaterThan",sT);O("lessThanEqual",rT);O("greaterThanEqual",oT);O("and",aT);O("or",cT);O("not",lT);O("xor",uT);O("bitAnd",hT);O("bitNot",dT);O("bitOr",fT);O("bitXor",pT);O("shiftLeft",mT);O("shiftRight",gT);ie("OperatorNode",St);class D extends ut{constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(s)?0:e.getTypeLength(s);return r>o&&r>a?t:o>a?n:a>r?s:t}getNodeType(e){const t=this.method;return t===D.LENGTH||t===D.DISTANCE||t===D.DOT?"float":t===D.CROSS?"vec3":t===D.ALL?"bool":t===D.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===D.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===D.TRANSFORM_DIRECTION){let u=o,d=a;e.isMatrix(u.getNodeType(e))?d=Ce(X(d),0):u=Ce(X(u),0);const h=mt(u,d).xyz;return Wr(h).build(e,t)}else{if(n===D.NEGATE)return e.format("( - "+o.build(e,r)+" )",s,t);if(n===D.ONE_MINUS)return li(1,o).build(e,t);if(n===D.RECIPROCAL)return Pi(1,o).build(e,t);if(n===D.DIFFERENCE)return ti(li(o,a)).build(e,t);{const u=[];return n===D.CROSS||n===D.MOD?u.push(o.build(e,s),a.build(e,s)):n===D.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):l&&(n===D.MIN||n===D.MAX)||n===D.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===D.REFRACT?u.push(o.build(e,r),a.build(e,r),c.build(e,"float")):n===D.MIX?u.push(o.build(e,r),a.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}D.ALL="all";D.ANY="any";D.EQUALS="equals";D.RADIANS="radians";D.DEGREES="degrees";D.EXP="exp";D.EXP2="exp2";D.LOG="log";D.LOG2="log2";D.SQRT="sqrt";D.INVERSE_SQRT="inversesqrt";D.FLOOR="floor";D.CEIL="ceil";D.NORMALIZE="normalize";D.FRACT="fract";D.SIN="sin";D.COS="cos";D.TAN="tan";D.ASIN="asin";D.ACOS="acos";D.ATAN="atan";D.ABS="abs";D.SIGN="sign";D.LENGTH="length";D.NEGATE="negate";D.ONE_MINUS="oneMinus";D.DFDX="dFdx";D.DFDY="dFdy";D.ROUND="round";D.RECIPROCAL="reciprocal";D.TRUNC="trunc";D.FWIDTH="fwidth";D.BITCAST="bitcast";D.TRANSPOSE="transpose";D.ATAN2="atan2";D.MIN="min";D.MAX="max";D.MOD="mod";D.STEP="step";D.REFLECT="reflect";D.DISTANCE="distance";D.DIFFERENCE="difference";D.DOT="dot";D.CROSS="cross";D.POW="pow";D.TRANSFORM_DIRECTION="transformDirection";D.MIX="mix";D.CLAMP="clamp";D.REFRACT="refract";D.SMOOTHSTEP="smoothstep";D.FACEFORWARD="faceforward";const $f=j(1e-6);j(1e6);const Jh=j(Math.PI);j(Math.PI*2);const Zf=B(D,D.ALL),_T=B(D,D.ANY),vT=B(D,D.EQUALS),xT=B(D,D.RADIANS),yT=B(D,D.DEGREES),Kf=B(D,D.EXP),wl=B(D,D.EXP2),jf=B(D,D.LOG),wa=B(D,D.LOG2),MT=B(D,D.SQRT),ST=B(D,D.INVERSE_SQRT),ba=B(D,D.FLOOR),Jf=B(D,D.CEIL),Wr=B(D,D.NORMALIZE),Ra=B(D,D.FRACT),wn=B(D,D.SIN),ei=B(D,D.COS),TT=B(D,D.TAN),ET=B(D,D.ASIN),NT=B(D,D.ACOS),AT=B(D,D.ATAN),ti=B(D,D.ABS),Su=B(D,D.SIGN),sr=B(D,D.LENGTH),wT=B(D,D.NEGATE),bT=B(D,D.ONE_MINUS),RT=B(D,D.DFDX),CT=B(D,D.DFDY),LT=B(D,D.ROUND),PT=B(D,D.RECIPROCAL),IT=B(D,D.TRUNC),DT=B(D,D.FWIDTH);B(D,D.BITCAST);const UT=B(D,D.TRANSPOSE),OT=B(D,D.ATAN2),Ni=B(D,D.MIN),hn=B(D,D.MAX),FT=B(D,D.MOD),zT=B(D,D.STEP),BT=B(D,D.REFLECT),VT=B(D,D.DISTANCE),HT=B(D,D.DIFFERENCE),Ca=B(D,D.DOT),Qf=B(D,D.CROSS),Ai=B(D,D.POW),ep=B(D,D.POW,2),kT=B(D,D.POW,3),GT=B(D,D.POW,4),WT=B(D,D.TRANSFORM_DIRECTION),XT=i=>mt(Su(i),Ai(ti(i),1/3)),qT=i=>Ca(i,i),Ot=B(D,D.MIX),_s=(i,e=0,t=1)=>fe(new D(D.CLAMP,fe(i),fe(e),fe(t))),YT=i=>_s(i),tp=B(D,D.REFRACT),ui=B(D,D.SMOOTHSTEP),$T=B(D,D.FACEFORWARD),ZT=(i,e,t)=>Ot(e,t,i),KT=(i,e,t)=>ui(e,t,i);O("all",Zf);O("any",_T);O("equals",vT);O("radians",xT);O("degrees",yT);O("exp",Kf);O("exp2",wl);O("log",jf);O("log2",wa);O("sqrt",MT);O("inverseSqrt",ST);O("floor",ba);O("ceil",Jf);O("normalize",Wr);O("fract",Ra);O("sin",wn);O("cos",ei);O("tan",TT);O("asin",ET);O("acos",NT);O("atan",AT);O("abs",ti);O("sign",Su);O("length",sr);O("lengthSq",qT);O("negate",wT);O("oneMinus",bT);O("dFdx",RT);O("dFdy",CT);O("round",LT);O("reciprocal",PT);O("trunc",IT);O("fwidth",DT);O("atan2",OT);O("min",Ni);O("max",hn);O("mod",FT);O("step",zT);O("reflect",BT);O("distance",VT);O("dot",Ca);O("cross",Qf);O("pow",Ai);O("pow2",ep);O("pow3",kT);O("pow4",GT);O("transformDirection",WT);O("mix",ZT);O("clamp",_s);O("refract",tp);O("smoothstep",KT);O("faceForward",$T);O("difference",HT);O("saturate",YT);O("cbrt",XT);O("transpose",UT);ie("MathNode",D);const jT=me(i=>{const{value:e}=i,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),s=t.mul(.0773993808),r=t.lessThanEqual(.04045),o=Ot(n,s,r);return Ce(o,e.a)}),JT=me(i=>{const{value:e}=i,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),s=t.mul(12.92),r=t.lessThanEqual(.0031308),o=Ot(n,s,r);return Ce(o,e.a)}),Qh=i=>{let e=null;return i===jn?e="Linear":i===kn&&(e="sRGB"),e},np=(i,e)=>Qh(i)+"To"+Qh(e);class xn extends ut{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===xn.LINEAR_TO_LINEAR?t:QT[e]({value:t})}}xn.LINEAR_TO_LINEAR="LinearToLinear";xn.LINEAR_TO_sRGB="LinearTosRGB";xn.sRGB_TO_LINEAR="sRGBToLinear";const QT={[xn.LINEAR_TO_sRGB]:JT,[xn.sRGB_TO_LINEAR]:jT},eE=(i,e)=>fe(new xn(np(jn,e),fe(i))),ip=(i,e)=>fe(new xn(np(e,jn),fe(i))),tE=B(xn,xn.LINEAR_TO_sRGB),nE=B(xn,xn.sRGB_TO_LINEAR);O("linearTosRGB",tE);O("sRGBToLinear",nE);O("linearToColorSpace",eE);O("colorSpaceToLinear",ip);ie("ColorSpaceNode",xn);class sp extends Ve{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s);else return e.format(`( ${s} )`,n,t)}}const La=B(sp);ie("ExpressionNode",sp);class rp extends Ms{constructor(e){super(0),this.textureNode=e,this.updateType=ct.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:r}=n;this.value=Math.log2(Math.max(s,r))}}}const iE=B(rp);ie("MaxMipLevelNode",rp);class Ss extends Ms{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=ct.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":this.value.type===Zi?"uvec4":this.value.type===_a?"ivec4":"vec4"}getInputType(){return"texture"}getDefaultUV(){return yn(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return qe(t.matrix).mul(X(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?ct.FRAME:ct.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let s=this.levelNode;s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=s,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,r,o,a){const c=this.value;let l;return s?l=e.generateTextureLevel(c,t,n,s,r):a?l=e.generateTextureGrad(c,t,n,a,r):o?l=e.generateTextureCompare(c,t,n,o,r):this.sampler===!1?l=e.generateTextureLoad(c,t,n,r):l=e.generateTexture(c,t,n,r),l}generate(e,t){const n=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:d,compareNode:h,depthNode:f,gradNode:g}=n,_=this.generateUV(e,u),m=d?d.build(e,"float"):null,p=f?f.build(e,"int"):null,N=h?h.build(e,"float"):null,x=g?[g[0].build(e,"vec2"),g[1].build(e,"vec2")]:null,E=e.getVarFromNode(this);a=e.getPropertyName(E);const I=this.generateSnippet(e,r,_,m,p,N,x);e.addLineFlowCode(`${a} = ${I}`),o.snippet=I,o.propertyName=a}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(s)&&(c=ip(La(c,l),s.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,fe(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(iE(t)),t.referenceNode=this,fe(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return ua(this,e)}compare(e){const t=this.clone();return t.compareNode=fe(e),t.referenceNode=this,fe(t)}grad(e,t){const n=this.clone();return n.gradNode=[fe(e),fe(t)],n.referenceNode=this,fe(n)}depth(e){const t=this.clone();return t.depthNode=fe(e),t.referenceNode=this,fe(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const Kt=B(Ss),Si=(...i)=>Kt(...i).setSampler(!1);O("texture",Kt);ie("TextureNode",Ss);class Pa extends Ms{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getElementType(e){return this.getNodeType(e)}getInputType(){return"buffer"}}const Tu=(i,e,t)=>fe(new Pa(i,e,t));ie("BufferNode",Pa);class sE extends vr{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class op extends Pa{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=ct.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),s=this.getElementType();if(n===1)for(let r=0;r<e.length;r++){const o=r*4;t[o]=e[r]}else if(s==="color")for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.r,t[o+1]=a.g,t[o+2]=a.b||0}else for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.x,t[o+1]=a.y,t[o+2]=a.z||0,t[o+3]=a.w||0}}setup(e){const t=this.array.length;this._elementType=this.elementType===null?qi(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType);let n=Float32Array;return this._elementType.charAt(0)==="i"?n=Int32Array:this._elementType.charAt(0)==="u"&&(n=Uint32Array),this.value=new n(t*4),this.bufferCount=t,this.bufferType=e.changeComponentType("vec4",e.getComponentType(this._elementType)),super.setup(e)}element(e){return fe(new sE(this,fe(e)))}}const bl=(i,e)=>fe(new op(i,e));ie("UniformsNode",op);class rE extends vr{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class xr extends Ve{constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=ct.OBJECT}element(e){return fe(new rE(this,fe(e)))}setNodeType(e){let t=null;this.count!==null?t=Tu(null,e,this.count):Array.isArray(this.getValueFromReference())?t=bl(null,e):e==="texture"?t=Kt(null):t=qe(null,e),this.node=t}getNodeType(e){return this.node===null&&this.updateValue(),this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const Un=(i,e,t)=>fe(new xr(i,e,t)),oE=(i,e,t,n)=>fe(new xr(i,e,n,t));ie("ReferenceNode",xr);class ap extends xr{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const wi=(i,e,t)=>fe(new ap(i,e,t));ie("MaterialReferenceNode",ap);const Ts=Mu("camera").onRenderUpdate(()=>{Ts.needsUpdate=!0}),wr=qe("float").label("cameraNear").setGroup(Ts).onRenderUpdate(({camera:i})=>i.near),br=qe("float").label("cameraFar").setGroup(Ts).onRenderUpdate(({camera:i})=>i.far),aE=qe("float").label("cameraLogDepth").setGroup(Ts).onRenderUpdate(({camera:i})=>2/(Math.log(i.far+1)/Math.LN2)),ni=qe("mat4").label("cameraProjectionMatrix").setGroup(Ts).onRenderUpdate(({camera:i})=>i.projectionMatrix),yr=qe("mat4").label("cameraViewMatrix").setGroup(Ts).onRenderUpdate(({camera:i})=>i.matrixWorldInverse),cp=qe(new L).label("cameraPosition").setGroup(Ts).onRenderUpdate(({camera:i},e)=>e.value.setFromMatrixPosition(i.matrixWorld));class Ke extends Ve{constructor(e=Ke.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=ct.OBJECT,this._uniformNode=new Ms(null)}getNodeType(){const e=this.scope;if(e===Ke.WORLD_MATRIX||e===Ke.VIEW_MATRIX)return"mat4";if(e===Ke.NORMAL_MATRIX)return"mat3";if(e===Ke.POSITION||e===Ke.VIEW_POSITION||e===Ke.DIRECTION||e===Ke.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===Ke.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(s===Ke.NORMAL_MATRIX)n.value=t.normalMatrix;else if(s===Ke.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===Ke.POSITION)n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===Ke.SCALE)n.value=n.value||new L,n.value.setFromMatrixScale(t.matrixWorld);else if(s===Ke.DIRECTION)n.value=n.value||new L,t.getWorldDirection(n.value);else if(s===Ke.VIEW_POSITION){const r=e.camera;n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Ke.WORLD_MATRIX||t===Ke.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===Ke.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===Ke.POSITION||t===Ke.VIEW_POSITION||t===Ke.DIRECTION||t===Ke.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Ke.VIEW_MATRIX="viewMatrix";Ke.NORMAL_MATRIX="normalMatrix";Ke.WORLD_MATRIX="worldMatrix";Ke.POSITION="position";Ke.SCALE="scale";Ke.VIEW_POSITION="viewPosition";Ke.DIRECTION="direction";B(Ke,Ke.DIRECTION);B(Ke,Ke.VIEW_MATRIX);B(Ke,Ke.NORMAL_MATRIX);B(Ke,Ke.WORLD_MATRIX);const Rl=B(Ke,Ke.POSITION);B(Ke,Ke.SCALE);const Eu=B(Ke,Ke.VIEW_POSITION);ie("Object3DNode",Ke);class Jt extends Ke{constructor(e=Jt.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}ge(Jt,Jt.DIRECTION);const vs=ge(Jt,Jt.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),lp=ge(Jt,Jt.NORMAL_MATRIX),Xr=ge(Jt,Jt.WORLD_MATRIX);ge(Jt,Jt.POSITION);ge(Jt,Jt.SCALE);ge(Jt,Jt.VIEW_POSITION);const cE=qe(new yt).onObjectUpdate(({object:i},e)=>e.value.copy(i.matrixWorld).invert());ie("ModelNode",Jt);const ha=tn("normal","vec3",X(0,1,0)),Kn=ha.toVar("normalLocal"),Ki=Ut(lp.mul(Kn),"v_normalView").normalize().toVar("normalView"),lE=Ut(Ki.transformDirection(yr),"v_normalWorld").normalize().toVar("transformedNormalWorld"),Rt=Nt("vec3","transformedNormalView"),up=Rt.transformDirection(yr).normalize().toVar("transformedNormalWorld"),Zs=Nt("vec3","transformedClearcoatNormalView"),ed=new Map;class K extends Ve{constructor(e){super(),this.scope=e}getCache(e,t){let n=ed.get(e);return n===void 0&&(n=wi(e,t),ed.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===K.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?s=r.mul(this.getTexture("map")):s=r}else if(n===K.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=r.mul(this.getTexture("alpha")):s=r}else if(n===K.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture("specular").r:s=j(1);else if(n===K.SPECULAR_INTENSITY){const r=this.getFloat(n);t.specularMap?s=r.mul(this.getTexture(n).a):s=r}else if(n===K.SPECULAR_COLOR){const r=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?s=r.mul(this.getTexture(n).rgb):s=r}else if(n===K.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).g):s=r}else if(n===K.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=r.mul(this.getTexture(n).b):s=r}else if(n===K.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=r.mul(this.getTexture(n)):s=r}else if(n===K.NORMAL)t.normalMap?s=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?s=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):s=Ki;else if(n===K.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===K.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===K.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):s=Ki;else if(n===K.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=r.mul(this.getTexture("sheenColor").rgb):s=r}else if(n===K.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r,s=s.clamp(.07,1)}else if(n===K.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const r=this.getTexture(n);s=fu(Rr.x,Rr.y,Rr.y.negate(),Rr.x).mul(r.rg.mul(2).sub(ce(1)).normalize().mul(r.b))}else s=Rr;else if(n===K.IRIDESCENCE_THICKNESS){const r=Un("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=Un("0","float",t.iridescenceThicknessRange);s=r.sub(o).mul(this.getTexture(n).g).add(o)}else s=r}else if(n===K.TRANSMISSION){const r=this.getFloat(n);t.transmissionMap?s=r.mul(this.getTexture(n).r):s=r}else if(n===K.THICKNESS){const r=this.getFloat(n);t.thicknessMap?s=r.mul(this.getTexture(n).g):s=r}else if(n===K.IOR)s=this.getFloat(n);else{const r=this.getNodeType(e);s=this.getCache(n,r)}return s}}K.ALPHA_TEST="alphaTest";K.COLOR="color";K.OPACITY="opacity";K.SHININESS="shininess";K.SPECULAR="specular";K.SPECULAR_STRENGTH="specularStrength";K.SPECULAR_INTENSITY="specularIntensity";K.SPECULAR_COLOR="specularColor";K.REFLECTIVITY="reflectivity";K.ROUGHNESS="roughness";K.METALNESS="metalness";K.NORMAL="normal";K.CLEARCOAT="clearcoat";K.CLEARCOAT_ROUGHNESS="clearcoatRoughness";K.CLEARCOAT_NORMAL="clearcoatNormal";K.EMISSIVE="emissive";K.ROTATION="rotation";K.SHEEN="sheen";K.SHEEN_ROUGHNESS="sheenRoughness";K.ANISOTROPY="anisotropy";K.IRIDESCENCE="iridescence";K.IRIDESCENCE_IOR="iridescenceIOR";K.IRIDESCENCE_THICKNESS="iridescenceThickness";K.IOR="ior";K.TRANSMISSION="transmission";K.THICKNESS="thickness";K.ATTENUATION_DISTANCE="attenuationDistance";K.ATTENUATION_COLOR="attenuationColor";K.LINE_SCALE="scale";K.LINE_DASH_SIZE="dashSize";K.LINE_GAP_SIZE="gapSize";K.LINE_WIDTH="linewidth";K.LINE_DASH_OFFSET="dashOffset";K.POINT_WIDTH="pointWidth";K.DISPERSION="dispersion";const uE=ge(K,K.ALPHA_TEST),qr=ge(K,K.COLOR),hE=ge(K,K.SHININESS),dE=ge(K,K.EMISSIVE),hp=ge(K,K.OPACITY),fE=ge(K,K.SPECULAR),td=ge(K,K.SPECULAR_INTENSITY),pE=ge(K,K.SPECULAR_COLOR),mE=ge(K,K.SPECULAR_STRENGTH);ge(K,K.REFLECTIVITY);const gE=ge(K,K.ROUGHNESS),_E=ge(K,K.METALNESS),vE=ge(K,K.NORMAL),xE=ge(K,K.CLEARCOAT),yE=ge(K,K.CLEARCOAT_ROUGHNESS),ME=ge(K,K.CLEARCOAT_NORMAL),SE=ge(K,K.ROTATION),TE=ge(K,K.SHEEN),EE=ge(K,K.SHEEN_ROUGHNESS),NE=ge(K,K.ANISOTROPY),AE=ge(K,K.IRIDESCENCE),wE=ge(K,K.IRIDESCENCE_IOR),bE=ge(K,K.IRIDESCENCE_THICKNESS),RE=ge(K,K.TRANSMISSION),CE=ge(K,K.THICKNESS),LE=ge(K,K.IOR),PE=ge(K,K.ATTENUATION_DISTANCE),IE=ge(K,K.ATTENUATION_COLOR),Cl=ge(K,K.LINE_SCALE),dp=ge(K,K.LINE_DASH_SIZE),fp=ge(K,K.LINE_GAP_SIZE),xc=ge(K,K.LINE_WIDTH),nd=ge(K,K.LINE_DASH_OFFSET),DE=ge(K,K.POINT_WIDTH),UE=ge(K,K.DISPERSION),Rr=qe(new se).onReference(function(i){return i.material}).onRenderUpdate(function({material:i}){this.value.set(i.anisotropy*Math.cos(i.anisotropyRotation),i.anisotropy*Math.sin(i.anisotropyRotation))});ie("MaterialNode",K);const un=tn("position","vec3"),jt=un.toVar("positionLocal"),Ll=Ut(Xr.mul(jt).xyz,"v_positionWorld"),OE=Ut(jt.transformDirection(Xr),"v_positionWorldDirection").normalize().toVar("positionWorldDirection"),sn=Ut(vs.mul(jt).xyz,"v_positionView"),Et=Ut(sn.negate(),"v_positionViewDirection").normalize().toVar("positionViewDirection");class pp extends ut{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Ut(e.context.mvp);const t=this.positionNode||jt;return ni.mul(vs).mul(t)}}const id=B(pp);ie("ModelViewProjectionNode",pp);class mp extends Sa{constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=na,this.instanced=!1,this.attribute=null,this.global=!0,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getHash(e){if(this.bufferStride===0&&this.bufferOffset===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),r=this.bufferStride||s,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new df(n,r),c=new iu(a,s,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,r=s):r=Ut(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this.attribute&&this.attribute.isBufferAttribute===!0&&(this.attribute.usage=e),this}setInstanced(e){return this.instanced=e,this}}const Ia=(i,e,t,n)=>fe(new mp(i,e,t,n)),FE=(i,e,t,n)=>Ia(i,e,t,n).setUsage(Pr),Pl=(i,e,t,n)=>Ia(i,e,t,n).setInstanced(!0),sd=(i,e,t,n)=>FE(i,e,t,n).setInstanced(!0);O("toAttribute",i=>Ia(i.value));ie("BufferAttributeNode",mp);class gp extends Ve{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null,this.updateType=ct.FRAME,this.buffer=null,this.bufferColor=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const c=t.instanceMatrix,l=new tS(c.array,16,1);this.buffer=l;const u=c.usage===Pr?sd:Pl,d=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];e=tr(...d),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const c=new ff(n.array,3),l=n.usage===Pr?sd:Pl;this.bufferColor=c,this.instanceColorNode=X(l(c,"vec3",3,0))}const s=e.mul(jt).xyz,r=on(e[0].xyz,e[1].xyz,e[2].xyz),o=Kn.div(X(r[0].dot(r[0]),r[1].dot(r[1]),r[2].dot(r[2]))),a=r.mul(o).xyz;jt.assign(s),Kn.assign(a),this.instanceColorNode!==null&&Jn("vec3","vInstanceColor").assign(this.instanceColorNode)}update(){this.instanceMesh.instanceMatrix.usage!==Pr&&this.instanceMesh.instanceMatrix.version!==this.buffer.version&&(this.buffer.version=this.instanceMesh.instanceMatrix.version),this.instanceMesh.instanceColor&&this.instanceMesh.instanceColor.usage!==Pr&&this.instanceMesh.instanceColor.version!==this.bufferColor.version&&(this.bufferColor.version=this.instanceMesh.instanceColor.version)}}const zE=B(gp);ie("InstanceNode",gp);const _p=me((i,e)=>(e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents(),tn("tangent","vec4")))(),Nu=_p.xyz.toVar("tangentLocal"),vp=Ut(vs.mul(Ce(Nu,0)).xyz,"v_tangentView").normalize().toVar("tangentView");class xp extends Ve{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(e.getDrawIndex()===null?this.batchingIdNode=gu:this.batchingIdNode=$S);const t=me(([h])=>{const f=ua(Si(this.batchMesh._indirectTexture),0),g=Bt(h).remainder(Bt(f)),_=Bt(h).div(Bt(f));return Si(this.batchMesh._indirectTexture,Wi(g,_),null,"uvec4").x}).setLayout({name:"getIndirectIndex",type:"uint",inputs:[{name:"id",type:"int"}]}),n=this.batchMesh._matricesTexture,s=ua(Si(n),0),r=j(t(Bt(this.batchingIdNode))).mul(4).toVar(),o=Bt(r.mod(s)),a=Bt(r).div(Bt(s)),c=tr(Si(n,Wi(o,a)),Si(n,Wi(o.add(1),a)),Si(n,Wi(o.add(2),a)),Si(n,Wi(o.add(3),a))),l=on(c[0].xyz,c[1].xyz,c[2].xyz);jt.assign(c.mul(jt));const u=Kn.div(X(l[0].dot(l[0]),l[1].dot(l[1]),l[2].dot(l[2]))),d=l.mul(u).xyz;Kn.assign(d),e.hasGeometryAttribute("tangent")&&Nu.mulAssign(l)}}const BE=B(xp);ie("batch",xp);class yp extends Ve{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=ct.OBJECT,this.skinIndexNode=tn("skinIndex","uvec4"),this.skinWeightNode=tn("skinWeight","vec4");let n,s,r;t?(n=Un("bindMatrix","mat4"),s=Un("bindMatrixInverse","mat4"),r=oE("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=qe(e.bindMatrix,"mat4"),s=qe(e.bindMatrixInverse,"mat4"),r=Tu(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=r}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:s,bindMatrixInverseNode:r,boneMatricesNode:o}=this,a=o.element(t.x),c=o.element(t.y),l=o.element(t.z),u=o.element(t.w),d=s.mul(jt),h=vn(a.mul(n.x).mul(d),c.mul(n.y).mul(d),l.mul(n.z).mul(d),u.mul(n.w).mul(d)),f=r.mul(h).xyz;let g=vn(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=r.mul(g).mul(s);const _=g.transformDirection(Kn).xyz;jt.assign(f),Kn.assign(_),e.hasGeometryAttribute("tangent")&&Nu.assign(_)}generate(e,t){if(t!=="void")return jt.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const VE=i=>fe(new yp(i,!0));ie("SkinningNode",yp);class Mp extends Ve{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let r=0,o=this.params.length-1;r<o;r++){const a=this.params[r],c=a.isNode!==!0&&a.name||this.getVarName(r),l=a.isNode!==!0&&a.type||"int";n[c]=La(c,l)}const s=e.addStack();return t.returnsNode=this.params[this.params.length-1](n,s,e),t.stackNode=s,e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n=this.params,s=t.stackNode;for(let a=0,c=n.length-1;a<c;a++){const l=n[a];let u=null,d=null,h=null,f=null,g=null,_=null;l.isNode?(f="int",h=this.getVarName(a),u="0",d=l.build(e,f),g="<"):(f=l.type||"int",h=l.name||this.getVarName(a),u=l.start,d=l.end,g=l.condition,_=l.update,typeof u=="number"?u=u.toString():u&&u.isNode&&(u=u.build(e,f)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,f)),u!==void 0&&d===void 0?(u=u+" - 1",d="0",g=">="):d!==void 0&&u===void 0&&(u="0",g="<"),g===void 0&&(Number(u)>Number(d)?g=">=":g="<"));const m={start:u,end:d,condition:g},p=m.start,N=m.end;let x="",E="",I="";_||(f==="int"||f==="uint"?g.includes("<")?_="++":_="--":g.includes("<")?_="+= 1.":_="-= 1."),x+=e.getVar(f,h)+" = "+p,E+=h+" "+g+" "+N,I+=h+" "+_;const R=`for ( ${x}; ${E}; ${I} )`;e.addFlowCode((a===0?`
`:"")+e.tab+R+` {

`).addFlowTab()}const r=s.build(e,"void"),o=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+r);for(let a=0,c=this.params.length-1;a<c;a++)e.addFlowCode((a===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),o}}const Yn=(...i)=>fe(new Mp(er(i,"int"))).append(),Sp=()=>La("break").append();O("loop",(i,...e)=>zf(i,Yn(...e)));ie("LoopNode",Mp);const yc=new WeakMap,Nn=new at,rd=me(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:r})=>{const o=Bt(YS).mul(t).add(r),a=o.div(n),c=o.sub(a.mul(n));return Si(i,Wi(c,a)).depth(s).mul(e)});function HE(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,r=s!==void 0?s.length:0;let o=yc.get(i);if(o===void 0||o.count!==r){let N=function(){m.dispose(),yc.delete(i),i.removeEventListener("dispose",N)};var a=N;o!==void 0&&o.texture.dispose();const c=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],u=i.morphAttributes.color||[];let d=0;e===!0&&(d=1),t===!0&&(d=2),n===!0&&(d=3);let h=i.attributes.position.count*d,f=1;const g=4096;h>g&&(f=Math.ceil(h/g),h=g);const _=new Float32Array(h*f*4*r),m=new jl(_,h,f,r);m.type=ai,m.needsUpdate=!0;const p=d*4;for(let x=0;x<r;x++){const E=c[x],I=l[x],R=u[x],w=h*f*4*x;for(let P=0;P<E.count;P++){const T=P*p;e===!0&&(Nn.fromBufferAttribute(E,P),_[w+T+0]=Nn.x,_[w+T+1]=Nn.y,_[w+T+2]=Nn.z,_[w+T+3]=0),t===!0&&(Nn.fromBufferAttribute(I,P),_[w+T+4]=Nn.x,_[w+T+5]=Nn.y,_[w+T+6]=Nn.z,_[w+T+7]=0),n===!0&&(Nn.fromBufferAttribute(R,P),_[w+T+8]=Nn.x,_[w+T+9]=Nn.y,_[w+T+10]=Nn.z,_[w+T+11]=R.itemSize===4?Nn.w:1)}}o={count:r,texture:m,stride:d,size:new se(h,f)},yc.set(i,o),i.addEventListener("dispose",N)}return o}class Tp extends Ve{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=qe(1),this.updateType=ct.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:c,size:l}=HE(t);n===!0&&jt.mulAssign(this.morphBaseInfluence),s===!0&&Kn.mulAssign(this.morphBaseInfluence);const u=Bt(l.width);Yn(o,({i:d})=>{const h=j(0).toVar();this.mesh.count>1&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?h.assign(Si(this.mesh.morphTexture,Wi(Bt(d).add(1),Bt(gu))).r):h.assign(Un("morphTargetInfluences","float").element(d).toVar()),n===!0&&jt.addAssign(rd({bufferMap:a,influence:h,stride:c,width:u,depth:d,offset:Bt(0)})),s===!0&&Kn.addAssign(rd({bufferMap:a,influence:h,stride:c,width:u,depth:d,offset:Bt(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const kE=B(Tp);ie("MorphNode",Tp);const GE=Et.negate().reflect(Rt),WE=GE.transformDirection(yr).toVar("reflectVector");class Ep extends Ss{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return WE}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===ur||!n.isRenderTargetTexture?X(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const Np=B(Ep);O("cubeTexture",Np);ie("CubeTextureNode",Ep);class eo extends Ve{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}ie("LightingNode",eo);let Cr=null;class Ji extends eo{constructor(e=null){super(),this.updateType=ct.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.shadowMaskNode=null,this.color=new Be,this._defaultColorNode=qe(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){const{object:t}=e;if(t.receiveShadow===!1)return;let n=this.shadowNode;if(n===null){Cr===null&&(Cr=e.createNodeMaterial(),Cr.fragmentNode=Ce(0,0,0,1),Cr.isShadowNodeMaterial=!0);const s=this.light.shadow,r=e.createRenderTarget(s.mapSize.width,s.mapSize.height),o=new Qr;o.minFilter=nn,o.magFilter=nn,o.image.width=s.mapSize.width,o.image.height=s.mapSize.height,o.compareFunction=$d,r.depthTexture=o,s.camera.updateProjectionMatrix();const a=Un("intensity","float",s),c=Un("bias","float",s),l=Un("normalBias","float",s),u=t.material.shadowPositionNode||Ll;let d=qe(s.matrix).mul(u.add(lE.mul(l)));d=d.xyz.div(d.w);const h=d.x.greaterThanEqual(0).and(d.x.lessThanEqual(1)).and(d.y.greaterThanEqual(0)).and(d.y.lessThanEqual(1)).and(d.z.lessThanEqual(1));let f=d.z.add(c);e.renderer.coordinateSystem===ur&&(f=f.mul(2).sub(1)),d=X(d.x,d.y.oneMinus(),f),n=((p,N,x)=>Kt(p,N).compare(x))(o,d.xy,d.z);const _=Kt(r.texture,d),m=h.mix(1,n.mix(_.a.mix(1,_),1));this.rtt=r,this.colorNode=this.colorNode.mul(Ot(1,m,a)),this.shadowNode=n,this.shadowMaskNode=m,this.updateBeforeType=ct.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:s,scene:r,camera:o}=e,a=r.overrideMaterial;r.overrideMaterial=Cr,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n),n.shadow.camera.layers.mask=o.layers.mask;const c=s.toneMapping,l=s.getRenderTarget(),u=s.getRenderObjectFunction();s.setRenderObjectFunction((d,...h)=>{d.castShadow===!0&&s.renderObject(d,...h)}),s.setRenderTarget(t),s.toneMapping=bn,s.render(r,n.shadow.camera),s.setRenderTarget(l),s.setRenderObjectFunction(u),s.toneMapping=c,r.overrideMaterial=a}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.shadowMaskNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}ie("AnalyticLightNode",Ji);const da=new WeakMap,XE=i=>i.sort((e,t)=>e.id-t.id);class qE extends Ve{constructor(e=[]){super("vec3"),this.totalDiffuseNode=X().temp("totalDiffuse"),this.totalSpecularNode=X().temp("totalSpecular"),this.outgoingLightNode=X().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}analyze(e){const t=e.getDataFromNode(this);for(const n of t.nodes)n.build(e)}setup(e){const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=s;const c=e.addStack(),l=e.getDataFromNode(this);l.nodes=c.nodes,n.start(t,c,e);for(const p of r)p.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:u,backdropAlpha:d}=t,{directDiffuse:h,directSpecular:f,indirectDiffuse:g,indirectSpecular:_}=t.reflectedLight;let m=h.add(g);u!==null&&(d!==null?m=X(d.mix(m,u)):m=X(u),t.material.transparent=!0),o.assign(m),a.assign(f.add(_)),s.assign(o.add(a)),n.finish(t,c,e),s=s.bypass(e.removeStack())}return s}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=XE(e);for(const n of e){let s=this._getLightNodeById(n.id);if(s===null){const r=n.constructor,o=da.has(r)?da.get(r):Ji;s=fe(new o(n))}t.push(s)}return this.lightNodes=t,this._hash=null,this}}const YE=B(qE);function Es(i,e){if(da.has(i)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof i!="function")throw new Error(`Light ${i.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);da.set(i,e)}class Ap extends eo{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}ie("AONode",Ap);class wp extends mu{constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=X().temp("directDiffuse"),s=X().temp("directSpecular"),r=X().temp("indirectDiffuse"),o=X().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:s,indirectDiffuse:r,indirectSpecular:o};return{radiance:X().temp("radiance"),irradiance:X().temp("irradiance"),iblIrradiance:X().temp("iblIrradiance"),ambientOcclusion:j(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const bp=B(wp);O("lightingContext",bp);ie("LightingContextNode",wp);const $E=i=>i.mul(_p.w).xyz,ZE=Ut($E(Ki.cross(vp)),"v_bitangentView").normalize().toVar("bitangentView"),Ks=on(vp,ZE,Ki);Et.mul(Ks);const KE=(()=>{let i=nr.cross(Et);return i=i.cross(nr).normalize(),i=Ot(i,Rt,ls.mul(Ei.oneMinus()).oneMinus().pow2().pow2()).normalize(),i})();class Au extends Ve{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}setup(e){const t=e.getNodeProperties(this);t.condNode=this.condNode.cache(),t.ifNode=this.ifNode.cache(),t.elseNode=this.elseNode?this.elseNode.cache():null}generate(e,t){const n=this.getNodeType(e),s=e.getDataFromNode(this);if(s.nodeProperty!==void 0)return s.nodeProperty;const{condNode:r,ifNode:o,elseNode:a}=e.getNodeProperties(this),c=t!=="void",l=c?Nt(n).build(e):"";s.nodeProperty=l;const u=r.build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let d=o.build(e,n);if(d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let h=a.build(e,n);h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const In=B(Au);O("cond",In);ie("CondNode",Au);const od=j(1),Il=j(-2),Do=j(.8),Mc=j(-1),Uo=j(.4),Sc=j(2),Oo=j(.305),Tc=j(3),ad=j(.21),jE=j(4),cd=j(4),JE=j(16),QE=me(([i])=>{const e=X(ti(i)).toVar(),t=j(-1).toVar();return Lt(e.x.greaterThan(e.z),()=>{Lt(e.x.greaterThan(e.y),()=>{t.assign(In(i.x.greaterThan(0),0,3))}).else(()=>{t.assign(In(i.y.greaterThan(0),1,4))})}).else(()=>{Lt(e.z.greaterThan(e.y),()=>{t.assign(In(i.z.greaterThan(0),2,5))}).else(()=>{t.assign(In(i.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),eN=me(([i,e])=>{const t=ce().toVar();return Lt(e.equal(0),()=>{t.assign(ce(i.z,i.y).div(ti(i.x)))}).elseif(e.equal(1),()=>{t.assign(ce(i.x.negate(),i.z.negate()).div(ti(i.y)))}).elseif(e.equal(2),()=>{t.assign(ce(i.x.negate(),i.y).div(ti(i.z)))}).elseif(e.equal(3),()=>{t.assign(ce(i.z.negate(),i.y).div(ti(i.x)))}).elseif(e.equal(4),()=>{t.assign(ce(i.x.negate(),i.z).div(ti(i.y)))}).else(()=>{t.assign(ce(i.x,i.y).div(ti(i.z)))}),mt(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),tN=me(([i])=>{const e=j(0).toVar();return Lt(i.greaterThanEqual(Do),()=>{e.assign(od.sub(i).mul(Mc.sub(Il)).div(od.sub(Do)).add(Il))}).elseif(i.greaterThanEqual(Uo),()=>{e.assign(Do.sub(i).mul(Sc.sub(Mc)).div(Do.sub(Uo)).add(Mc))}).elseif(i.greaterThanEqual(Oo),()=>{e.assign(Uo.sub(i).mul(Tc.sub(Sc)).div(Uo.sub(Oo)).add(Sc))}).elseif(i.greaterThanEqual(ad),()=>{e.assign(Oo.sub(i).mul(jE.sub(Tc)).div(Oo.sub(ad)).add(Tc))}).else(()=>{e.assign(j(-2).mul(wa(mt(1.16,i))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});me(([i,e])=>{const t=i.toVar();t.assign(mt(2,t).sub(1));const n=X(t,1).toVar();return Lt(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const nN=me(([i,e,t,n,s,r])=>{const o=j(t),a=X(e),c=_s(tN(o),Il,r),l=Ra(c),u=ba(c),d=X(Dl(i,a,u,n,s,r)).toVar();return Lt(l.notEqual(0),()=>{const h=X(Dl(i,a,u.add(1),n,s,r)).toVar();d.assign(Ot(d,h,l))}),d}),Dl=me(([i,e,t,n,s,r])=>{const o=j(t).toVar(),a=X(e),c=j(QE(a)).toVar(),l=j(hn(cd.sub(o),0)).toVar();o.assign(hn(o,cd));const u=j(wl(o)).toVar(),d=ce(eN(a,c).mul(u.sub(2)).add(1)).toVar();return Lt(c.greaterThan(2),()=>{d.y.addAssign(u),c.subAssign(3)}),d.x.addAssign(c.mul(u)),d.x.addAssign(l.mul(mt(3,JE))),d.y.addAssign(mt(4,wl(r).sub(u))),d.x.mulAssign(n),d.y.mulAssign(s),i.uv(d).grad(ce(),ce())}),Ec=me(({envMap:i,mipInt:e,outputDirection:t,theta:n,axis:s,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const c=ei(n),l=t.mul(c).add(s.cross(t).mul(wn(n))).add(s.mul(s.dot(t).mul(c.oneMinus())));return Dl(i,l,e,r,o,a)});me(({n:i,latitudinal:e,poleAxis:t,outputDirection:n,weights:s,samples:r,dTheta:o,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d})=>{const h=X(In(e,t,Qf(t,n))).toVar();Lt(Zf(h.equals(X(0))),()=>{h.assign(X(n.z,0,n.x.negate()))}),h.assign(Wr(h));const f=X().toVar();return f.addAssign(s.element(Bt(0)).mul(Ec({theta:0,axis:h,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d}))),Yn({start:Bt(1),end:i},({i:g})=>{Lt(g.greaterThanEqual(r),()=>{Sp()});const _=j(o.mul(j(g))).toVar();f.addAssign(s.element(g).mul(Ec({theta:_.mul(-1),axis:h,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d}))),f.addAssign(s.element(g).mul(Ec({theta:_,axis:h,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d})))}),Ce(f,1)});let fa=null;const ld=new WeakMap;function iN(i){const e=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function sN(i){let e=ld.get(i);if((e!==void 0?e.pmremVersion:-1)!==i.pmremVersion){if(i.isCubeTexture){if(i.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=fa.fromCubemap(i,e)}else{if(i.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=fa.fromEquirectangular(i,e)}e.pmremVersion=i.pmremVersion,ld.set(i,e)}return e.texture}class Rp extends ut{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=Kt(null),this._width=qe(0),this._height=qe(0),this._maxMip=qe(0),this.updateBeforeType=ct.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=iN(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=sN(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){fa===null&&(fa=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===qn&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=X(t.x.negate(),t.yz));let s=this.levelNode;return s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),nN(this._texture,t,s,this._width,this._height,this._maxMip)}}const rN=B(Rp);ie("PMREMNode",Rp);const ud=new WeakMap;class Cp extends eo{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let f=ud.get(t.value);f===void 0&&(f=rN(t.value),ud.set(t.value,f)),t=f}const{material:n}=e,r=n.envMap?Un("envMapIntensity","float",e.material):Un("environmentIntensity","float",e.scene),a=n.useAnisotropy===!0||n.anisotropy>0?KE:Rt,c=Br(t,hd(Ei,a)).mul(r),l=Br(t,oN(up)).mul(Math.PI).mul(r),u=Yo(c),d=Yo(l);e.context.radiance.addAssign(u),e.context.iblIrradiance.addAssign(d);const h=e.context.lightingModel.clearcoatRadiance;if(h){const f=Br(t,hd(aa,Zs)).mul(r),g=Yo(f);h.addAssign(g)}}}const hd=(i,e)=>{let t=null;return{getUV:()=>(t===null&&(t=Et.negate().reflect(e),t=i.mul(i).mix(t,e).normalize(),t=t.transformDirection(yr)),t),getTextureLevel:()=>i}},oN=i=>({getUV:()=>i,getTextureLevel:()=>j(1)});ie("EnvironmentNode",Cp);class Lp extends eo{constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}}ie("IrradianceNode",Lp);let Nc,Ac;class lt extends Ve{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===lt.VIEWPORT?"vec4":this.scope===lt.COORDINATE?"vec3":"vec2"}getUpdateType(){let e=ct.NONE;return(this.scope===lt.RESOLUTION||this.scope===lt.VIEWPORT)&&(e=ct.RENDER),this.updateType=e,e}update({renderer:e}){this.scope===lt.VIEWPORT?e.getViewport(Ac):e.getDrawingBufferSize(Nc)}setup(){const e=this.scope;let t=null;if(e===lt.RESOLUTION)t=qe(Nc||(Nc=new se));else if(e===lt.VIEWPORT)t=qe(Ac||(Ac=new at));else{t=aN.div(Ul);let n=t.x,s=t.y;/bottom/i.test(e)&&(s=s.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=ce(n,s)}return t}generate(e){if(this.scope===lt.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(Ul).outputNode.build(e);t=`${e.getType("vec3")}( ${t}.x, ${n}.y - ${t}.y, ${t}.z )`}return t}return super.generate(e)}}lt.COORDINATE="coordinate";lt.RESOLUTION="resolution";lt.VIEWPORT="viewport";lt.TOP_LEFT="topLeft";lt.BOTTOM_LEFT="bottomLeft";lt.TOP_RIGHT="topRight";lt.BOTTOM_RIGHT="bottomRight";const aN=ge(lt,lt.COORDINATE),Ul=ge(lt,lt.RESOLUTION),rr=ge(lt,lt.VIEWPORT),Yr=ge(lt,lt.TOP_LEFT);ge(lt,lt.BOTTOM_LEFT);ge(lt,lt.TOP_RIGHT);ge(lt,lt.BOTTOM_RIGHT);ie("ViewportNode",lt);const Lr=new se;class to extends Ss{constructor(e=Yr,t=null,n=null){n===null&&(n=new gf,n.minFilter=Xi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=ct.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(Lr);const n=this.value;(n.image.width!==Lr.width||n.image.height!==Lr.height)&&(n.image.width=Lr.width,n.image.height=Lr.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}const cN=B(to),Pp=B(to,null,null,{generateMipmaps:!0});O("viewportTexture",cN);O("viewportMipTexture",Pp);ie("ViewportTextureNode",to);let wc=null;class Ip extends to{constructor(e=Yr,t=null){wc===null&&(wc=new Qr),super(e,t,wc)}}const Dp=B(Ip);O("viewportDepthTexture",Dp);ie("ViewportDepthTextureNode",Ip);class Rn extends Ve{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===Rn.DEPTH?e.getFragDepth():super.generate(e)}setup({camera:e}){const{scope:t}=this,n=this.valueNode;let s=null;if(t===Rn.DEPTH)n!==null?s=Op().assign(n):e.isPerspectiveCamera?s=lN(sn.z,wr,br):s=Ko(sn.z,wr,br);else if(t===Rn.LINEAR_DEPTH)if(n!==null)if(e.isPerspectiveCamera){const r=Up(n,wr,br);s=Ko(r,wr,br)}else s=n;else s=Ko(sn.z,wr,br);return s}}const Ko=(i,e,t)=>i.add(e).div(e.sub(t)),lN=(i,e,t)=>e.add(i).mul(t).div(t.sub(e).mul(i)),Up=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t));Rn.DEPTH="depth";Rn.LINEAR_DEPTH="linearDepth";const Op=B(Rn,Rn.DEPTH),Fp=ge(Rn,Rn.DEPTH),uN=B(Rn,Rn.LINEAR_DEPTH);uN(Dp());Fp.assign=i=>Op(i);ie("ViewportDepthNode",Rn);class ji extends Ve{constructor(e=ji.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:s,globalClippingCount:r}=t,o=r+s,a=n?o-s:o;return this.scope===ji.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,o,a):this.setupDefault(t.planes,o,a)}setupAlphaToCoverage(e,t,n){return me(()=>{const s=bl(e),r=Nt("float","distanceToPlane"),o=Nt("float","distanceToGradient"),a=Nt("float","clipOpacity");a.assign(1);let c;if(Yn(n,({i:l})=>{c=s.element(l),r.assign(sn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),a.mulAssign(ui(o.negate(),o,r)),a.equal(0).discard()}),n<t){const l=Nt("float","unionclipOpacity");l.assign(1),Yn({start:n,end:t},({i:u})=>{c=s.element(u),r.assign(sn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),l.mulAssign(ui(o.negate(),o,r).oneMinus())}),a.mulAssign(l.oneMinus())}xt.a.mulAssign(a),xt.a.equal(0).discard()})()}setupDefault(e,t,n){return me(()=>{const s=bl(e);let r;if(Yn(n,({i:o})=>{r=s.element(o),sn.dot(r.xyz).greaterThan(r.w).discard()}),n<t){const o=Nt("bool","clipped");o.assign(!0),Yn({start:n,end:t},({i:a})=>{r=s.element(a),o.assign(sn.dot(r.xyz).greaterThan(r.w).and(o))}),o.discard()}})()}}ji.ALPHA_TO_COVERAGE="alphaToCoverage";ji.DEFAULT="default";const hN=()=>fe(new ji),dN=()=>fe(new ji(ji.ALPHA_TO_COVERAGE));class zp extends Ve{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){const{renderer:t,material:n}=e;return t.coordinateSystem===qn&&n.side===dn?"false":e.getFrontFacing()}}const fN=ge(zp),pa=j(fN).mul(2).sub(1);ie("FrontFacingNode",zp);const Ol=new Map;class an extends rn{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.shadowPositionNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+wf(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.depthWrite===!0&&this.setupDepth(e),this.fragmentNode===null){this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const s=this.setupLighting(e);n!==null&&e.stack.add(n);const r=Ce(s,xt.a).max(0);t=this.setupOutput(e,r),ZS.assign(t),this.outputNode!==null&&(t=this.outputNode)}else{let s=this.fragmentNode;s.isOutputStructNode!==!0&&(s=Ce(s)),t=this.setupOutput(e,s)}e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){if(e.clippingContext===null)return null;const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let s=null;return(t||n)&&(this.alphaToCoverage?s=dN():e.stack.add(hN())),s}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=id().w.add(1).log2().mul(aE).mul(.5)),n!==null&&Fp.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;if(e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&kE(t).append(),t.isSkinnedMesh===!0&&VE(t).append(),this.displacementMap){const r=wi("displacementMap","texture"),o=wi("displacementScale","float"),a=wi("displacementBias","float");jt.addAssign(Kn.normalize().mul(r.x.mul(o).add(a)))}t.isBatchedMesh&&BE(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&zE(t).append(),this.positionNode!==null&&jt.assign(this.positionNode);const s=id();return e.context.vertex=e.removeStack(),e.context.mvp=s,s}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Ce(this.colorNode):qr;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Ce(n.xyz.mul(tn("color","vec3")),n.a)),e.instanceColor&&(n=Jn("vec3","vInstanceColor").mul(n)),xt.assign(n);const s=this.opacityNode?j(this.opacityNode):hp;if(xt.a.assign(xt.a.mul(s)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?j(this.alphaTestNode):uE;xt.a.lessThanEqual(r).discard()}this.transparent===!1&&this.blending===fs&&this.alphaToCoverage===!1&&xt.a.assign(1)}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=sn.dFdx().cross(sn.dFdy()).normalize();Rt.assign(e.mul(pa))}else{const e=this.normalNode?X(this.normalNode):vE;Rt.assign(e.mul(pa))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?Np(this.envMap):Kt(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];if(t&&n.push(new Cp(t)),e.material.lightMap&&n.push(new Lp(wi("lightMap","texture"))),this.aoNode!==null||e.material.aoMap){const r=this.aoNode!==null?this.aoNode:Kt(e.material.aoMap);n.push(new Ap(r))}let s=this.lightsNode||e.lightsNode;return n.length>0&&(s=YE([...s.lightNodes,...n])),s}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=xt.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=bp(a,l,n,s)}else n!==null&&(c=X(s!==null?Ot(c,n,s):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(X(r||dE))),c}setupOutput(e,t){if(this.fog===!0){const n=e.fogNode;n&&(t=Ce(n.mix(t.rgb,n.colorNode),t.a))}return t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=rn.prototype.toJSON.call(this,e),s=sa(this);n.inputNodes={};for(const{property:o,childNode:a}of s)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images),c=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.shadowPositionNode=e.shadowPositionNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=pN(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const s in e)n[s]=e[s];return n}}function Yt(i,e){if(typeof e!="function"||!i)throw new Error(`Node material ${i} is not a class`);if(Ol.has(i)){console.warn(`Redefinition of node material ${i}`);return}Ol.set(i,e),e.type=i}function pN(i){const e=Ol.get(i);if(e!==void 0)return new e}Yt("NodeMaterial",an);class Bp extends Ve{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new zr(t);return this._currentCond=In(e,n),this.add(this._currentCond)}elseif(e,t){const n=new zr(t),s=In(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}else(e){return this._currentCond.elseNode=new zr(e),this}build(e,...t){const n=MS();jh(this);for(const s of this.nodes)s.build(e,"void");return jh(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}B(Bp);ie("StackNode",Bp);class Vp extends ut{constructor(e=OE){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return ce(t,n)}}B(Vp);ie("EquirectUVNode",Vp);class Hp extends Ve{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}ie("StructTypeNode",Hp);class kp extends Ve{constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new Hp(n)).name}generate(e,t){const n=e.getOutputStructName(),s=this.members,r=n!==""?n+".":"";for(let o=0;o<s.length;o++){const a=s[o].build(e,t);e.addLineFlowCode(`${r}m${o} = ${a}`)}return n}}B(kp);ie("OutputStructNode",kp);class Gp extends Ve{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.toUint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).toFloat().mul(1/2**32)}}const mN=B(Gp);O("hash",mN);ie("HashNode",Gp);const Fl=(i,e)=>Ai(mt(4,i.mul(li(1,i))),e),gN=(i,e)=>i.lessThan(.5)?Fl(i.mul(2),e).div(2):li(1,Fl(mt(li(1,i),2),e).div(2)),_N=(i,e,t)=>Ai(Pi(Ai(i,e),vn(Ai(i,e),Ai(li(1,i),t))),1/e),vN=(i,e)=>wn(Jh.mul(e.mul(i).sub(1))).div(Jh.mul(e.mul(i).sub(1)));O("parabola",Fl);O("gain",gN);O("pcurve",_N);O("sinc",vN);const ii=me(([i])=>i.fract().sub(.5).abs()),Wp=me(([i])=>X(ii(i.z.add(ii(i.y.mul(1)))),ii(i.z.add(ii(i.x.mul(1)))),ii(i.y.add(ii(i.x.mul(1)))))),xN=me(([i,e,t])=>{const n=X(i).toVar(),s=j(1.4).toVar(),r=j(0).toVar(),o=X(n).toVar();return Yn({start:j(0),end:j(3),type:"float",condition:"<="},()=>{const a=X(Wp(o.mul(2))).toVar();n.addAssign(a.add(t.mul(j(.1).mul(e)))),o.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const c=j(ii(n.z.add(ii(n.x.add(ii(n.y)))))).toVar();r.addAssign(c.div(s)),o.addAssign(.14)}),r});ii.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});Wp.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});xN.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let bc;class Xp extends Au{constructor(e){bc=bc||La("discard"),super(e,bc)}}const yN=B(Xp),MN=i=>yN(i).append();O("discard",MN);ie("DiscardNode",Xp);class qp extends Ve{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null,this.global=!0}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,r=-1;for(const o of this.functionNodes){const c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let d=0;d<t.length;d++){const h=t[d],f=l[d];h.getNodeType(e)===f.type?u++:u=0}u>r&&(s=o,r=u)}}this._candidateFnCall=n=s(...t)}return n}}B(qp);ie("FunctionOverloadingNode",qp);class Yp extends ut{constructor(){super("vec2")}setup(){const e=X(Et.z,0,Et.x.negate()).normalize(),t=Et.cross(e);return ce(e.dot(Rt),t.dot(Rt)).mul(.495).add(.5)}}const SN=ge(Yp);ie("MatcapUVNode",Yp);class mn extends Ms{constructor(e=mn.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=ct.FRAME}update(e){const t=this.scope,n=this.scale;t===mn.LOCAL?this.value+=e.deltaTime*n:t===mn.DELTA?this.value=e.deltaTime*n:t===mn.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}mn.LOCAL="local";mn.GLOBAL="global";mn.DELTA="delta";mn.FRAME="frame";const TN=(i,e=0)=>fe(new mn(mn.LOCAL,i,e));ge(mn,mn.FRAME).toUint();ie("TimerNode",mn);class Ht extends Ve{constructor(e=Ht.SINE,t=TN()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=fe(this.timeNode);let n=null;return e===Ht.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Ht.SQUARE?n=t.fract().round():e===Ht.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Ht.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Ht.SINE="sine";Ht.SQUARE="square";Ht.TRIANGLE="triangle";Ht.SAWTOOTH="sawtooth";B(Ht,Ht.SINE);B(Ht,Ht.SQUARE);B(Ht,Ht.TRIANGLE);B(Ht,Ht.SAWTOOTH);ie("OscNode",Ht);class hi extends ut{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===hi.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===hi.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}hi.DIRECTION_TO_COLOR="directionToColor";hi.COLOR_TO_DIRECTION="colorToDirection";const $p=B(hi,hi.DIRECTION_TO_COLOR),EN=B(hi,hi.COLOR_TO_DIRECTION);O("directionToColor",$p);O("colorToDirection",EN);ie("PackingNode",hi);class wu extends Ve{constructor(e,t,n,s=j(0),r=j(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:r,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(s)).add(s)}}const NN=B(wu,null,null,{doClamp:!1}),AN=B(wu);O("remap",NN);O("remapClamp",AN);ie("RemapNode",wu);class Zp extends ut{constructor(e,t,n=ce(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const wN=B(Zp);O("rotateUV",wN);ie("RotateUVNode",Zp);class Kp extends ut{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),o=t.sin();return fu(r,o,o.negate(),r).mul(n)}else{const r=t,o=tr(Ce(1,0,0,0),Ce(0,ei(r.x),wn(r.x).negate(),0),Ce(0,wn(r.x),ei(r.x),0),Ce(0,0,0,1)),a=tr(Ce(ei(r.y),0,wn(r.y),0),Ce(0,1,0,0),Ce(wn(r.y).negate(),0,ei(r.y),0),Ce(0,0,0,1)),c=tr(Ce(ei(r.z),wn(r.z).negate(),0,0),Ce(wn(r.z),ei(r.z),0,0),Ce(0,0,1,0),Ce(0,0,0,1));return o.mul(a).mul(c).mul(Ce(n,1)).xyz}}}const bN=B(Kp);O("rotate",bN);ie("RotateNode",Kp);class jp extends Ve{constructor(e,t=yn(),n=j(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:r}=n,o=e.mod(s.mul(r)).floor(),a=o.mod(s),c=r.sub(o.add(1).div(s).ceil()),l=n.reciprocal(),u=ce(a,c);return t.add(u).mul(l)}}B(jp);ie("SpriteSheetUVNode",jp);class Jp extends vr{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const s=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&s!==!0?n=e.generatePBO(this):n=r.build(e)}else n=super.generate(e);if(s!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const Qp=B(Jp);O("storageElement",Qp);ie("StorageArrayElementNode",Jp);class em extends Ve{constructor(e,t=null,n=null,s=j(1),r=jt,o=Kn){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(X(1)));const c=r.yz.mul(s),l=r.zx.mul(s),u=r.xy.mul(s),d=e.value,h=t!==null?t.value:d,f=n!==null?n.value:d,g=Kt(d,c).mul(a.x),_=Kt(h,l).mul(a.y),m=Kt(f,u).mul(a.z);return vn(g,_,m)}}const RN=B(em),CN=(...i)=>RN(...i);O("triplanarTexture",CN);ie("TriplanarTexturesNode",em);new Ti;new L;new L;new L;new yt;new L(0,0,-1);new at;new L;new L;new at;new se;new Ci;ce(Yr.x.oneMinus(),Yr.y);class LN extends pu{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new at(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}ie("VertexColorNode",LN);class tm extends xr{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const PN=(i,e,t)=>fe(new tm(i,e,t));ie("RendererReferenceNode",tm);const Da=1/6,nm=i=>mt(Da,mt(i,mt(i,i.negate().add(3)).sub(3)).add(1)),zl=i=>mt(Da,mt(i,mt(i,mt(3,i).sub(6))).add(4)),im=i=>mt(Da,mt(i,mt(i,mt(-3,i).add(3)).add(3)).add(1)),Bl=i=>mt(Da,Ai(i,3)),dd=i=>nm(i).add(zl(i)),fd=i=>im(i).add(Bl(i)),pd=i=>vn(-1,zl(i).div(nm(i).add(zl(i)))),md=i=>vn(1,Bl(i).div(im(i).add(Bl(i)))),gd=(i,e,t)=>{const n=i.uvNode,s=mt(n,e.zw).add(.5),r=ba(s),o=Ra(s),a=dd(o.x),c=fd(o.x),l=pd(o.x),u=md(o.x),d=pd(o.y),h=md(o.y),f=ce(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),g=ce(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),_=ce(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),m=ce(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),p=dd(o.y).mul(vn(a.mul(i.uv(f).level(t)),c.mul(i.uv(g).level(t)))),N=fd(o.y).mul(vn(a.mul(i.uv(_).level(t)),c.mul(i.uv(m).level(t))));return p.add(N)},IN=(i,e)=>{const t=ce(i.size(Bt(e))),n=ce(i.size(Bt(e.add(1)))),s=Pi(1,t),r=Pi(1,n),o=gd(i,Ce(s,t),ba(e)),a=gd(i,Ce(r,n),Jf(e));return Ra(e).mix(o,a)};class sm extends ut{constructor(e,t=j(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return IN(this.textureNode,this.blurNode)}}const DN=B(sm);O("bicubic",DN);ie("TextureBicubicNode",sm);class rm extends Ve{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}ge(rm);ie("PointUVNode",rm);class Zn extends Ve{constructor(e=Zn.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===Zn.BACKGROUND_BLURRINESS?s=Un("backgroundBlurriness","float",n):t===Zn.BACKGROUND_INTENSITY?s=Un("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),s}}Zn.BACKGROUND_BLURRINESS="backgroundBlurriness";Zn.BACKGROUND_INTENSITY="backgroundIntensity";ge(Zn,Zn.BACKGROUND_BLURRINESS);ge(Zn,Zn.BACKGROUND_INTENSITY);ie("SceneNode",Zn);const _d={Uniform:"uniform",Storage:"storage",ReadOnlyStorage:"read-only-storage"},Rc={WriteOnly:"write-only",ReadOnly:"read-only",ReadWrite:"read-write"};class UN extends Pa{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.access=_d.Storage,this.bufferObject=!1,this.bufferCount=n,this._attribute=null,this._varying=null,this.global=!0,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getHash(e){if(this.bufferCount===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getInputType(){return"storageBuffer"}element(e){return Qp(this,e)}setBufferObject(e){return this.bufferObject=e,this}setAccess(e){return this.access=e,this}toReadOnly(){return this.setAccess(_d.ReadOnlyStorage)}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=Ia(this.value),this._varying=Ut(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}ie("StorageBufferNode",UN);class om extends Ss{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStorageTextureNode=!0,this.access=Rc.WriteOnly}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}setAccess(e){return this.access=e,this}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}toReadOnly(){return this.setAccess(Rc.ReadOnly)}toWriteOnly(){return this.setAccess(Rc.WriteOnly)}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=s.build(e,"vec4"),c=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(c)}}B(om);ie("StorageTextureNode",om);const ON=me(({texture:i,uv:e})=>{const n=X().temp();return Lt(e.x.lessThan(1e-4),()=>{n.assign(X(1,0,0))}).elseif(e.y.lessThan(1e-4),()=>{n.assign(X(0,1,0))}).elseif(e.z.lessThan(1e-4),()=>{n.assign(X(0,0,1))}).elseif(e.x.greaterThan(1-1e-4),()=>{n.assign(X(-1,0,0))}).elseif(e.y.greaterThan(1-1e-4),()=>{n.assign(X(0,-1,0))}).elseif(e.z.greaterThan(1-1e-4),()=>{n.assign(X(0,0,-1))}).else(()=>{const r=i.uv(e.add(X(-.01,0,0))).r.sub(i.uv(e.add(X(.01,0,0))).r),o=i.uv(e.add(X(0,-.01,0))).r.sub(i.uv(e.add(X(0,.01,0))).r),a=i.uv(e.add(X(0,0,-.01))).r.sub(i.uv(e.add(X(0,0,.01))).r);n.assign(X(r,o,a))}),n.normalize()});class am extends Ss{constructor(e,t=null,n=null){super(e,t,n),this.isTexture3DNode=!0}getInputType(){return"texture3D"}getDefaultUV(){return X(.5,.5,.5)}setUpdateMatrix(){}setupUV(e,t){return t}generateUV(e,t){return t.build(e,"vec3")}normal(e){return ON({texture:this,uv:e})}}const FN=B(am);ie("Texture3DNode",am);class zN extends xr{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}ie("UserDataNode",zN);const BN=me(({base:i,blend:e})=>{const t=n=>e[n].lessThan($f).cond(e[n],i[n].oneMinus().div(e[n]).oneMinus().max(0));return X(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),VN=me(({base:i,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],i[n].div(e[n].oneMinus()).max(0));return X(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),HN=me(({base:i,blend:e})=>{const t=n=>i[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return X(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),kN=me(({base:i,blend:e})=>{const t=n=>i[n].lessThan(.5).cond(i[n].mul(e[n],2),i[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return X(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class qt extends ut{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,s={base:t,blend:n};let r=null;return e===qt.BURN?r=BN(s):e===qt.DODGE?r=VN(s):e===qt.SCREEN?r=HN(s):e===qt.OVERLAY&&(r=kN(s)),r}}qt.BURN="burn";qt.DODGE="dodge";qt.SCREEN="screen";qt.OVERLAY="overlay";const GN=B(qt,qt.BURN),WN=B(qt,qt.DODGE),XN=B(qt,qt.OVERLAY),qN=B(qt,qt.SCREEN);O("burn",GN);O("dodge",WN);O("overlay",XN);O("screen",qN);ie("BlendModeNode",qt);const YN=me(({textureNode:i,bumpScale:e})=>{const t=s=>i.cache().context({getUV:r=>s(r.uvNode||yn()),forceUVContext:!0}),n=j(t(s=>s));return ce(j(t(s=>s.add(s.dFdx()))).sub(n),j(t(s=>s.add(s.dFdy()))).sub(n)).mul(e)}),$N=me(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),c=o.cross(s),l=s.dot(a).mul(pa),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class cm extends ut{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=YN({textureNode:this.textureNode,bumpScale:e});return $N({surf_pos:sn,surf_norm:Ki,dHdxy:t})}}const ZN=B(cm);O("bumpMap",ZN);ie("BumpMapNode",cm);const KN=me(({color:i,adjustment:e})=>e.mix(Hn(i.rgb),i.rgb)),jN=me(({color:i,adjustment:e})=>{const t=vn(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return Ot(i.rgb,n,s)}),JN=me(({color:i,adjustment:e})=>{const t=X(.57735,.57735,.57735),n=e.cos();return X(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(Ca(t,i.rgb).mul(n.oneMinus())))))});class _n extends ut{constructor(e,t,n=j(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,s={color:t,adjustment:n};let r=null;return e===_n.SATURATION?r=KN(s):e===_n.VIBRANCE?r=jN(s):e===_n.HUE?r=JN(s):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}_n.SATURATION="saturation";_n.VIBRANCE="vibrance";_n.HUE="hue";const QN=B(_n,_n.SATURATION),eA=B(_n,_n.VIBRANCE),tA=B(_n,_n.HUE),nA=X(.2125,.7154,.0721),Hn=(i,e=nA)=>Ca(i,e),lm=(i,e)=>Ot(X(0),i,Hn(i).sub(e).max(0));O("saturation",QN);O("vibrance",eA);O("hue",tA);O("threshold",lm);ie("ColorAdjustmentNode",_n);const iA=me(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,r=e.dFdx(),o=e.dFdy(),a=s.dFdx(),c=s.dFdy(),l=t,u=o.cross(l),d=l.cross(r),h=u.mul(a.x).add(d.mul(c.x)),f=u.mul(a.y).add(d.mul(c.y)),g=h.dot(h).max(f.dot(f)),_=pa.mul(g.inverseSqrt());return vn(h.mul(n.x,_),f.mul(n.y,_),l.mul(n.z)).normalize()});class um extends ut{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=Ri}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=X(s.xy.mul(n),s.z));let r=null;return t===Yd?r=lp.mul(s).normalize():t===Ri&&(e.hasGeometryAttribute("tangent")===!0?r=Ks.mul(s).normalize():r=iA({eye_pos:sn,surf_norm:Ki,mapN:s,uv:yn()})),r}}const sA=B(um);O("normalMap",sA);ie("NormalMapNode",um);class hm extends ut{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const rA=B(hm);O("posterize",rA);ie("PosterizeNode",hm);const oA=me(({color:i,exposure:e})=>i.mul(e).clamp()),aA=me(({color:i,exposure:e})=>(i=i.mul(e),i.div(i.add(1)).clamp())),cA=me(({color:i,exposure:e})=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),lA=me(({color:i})=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),uA=me(({color:i,exposure:e})=>{const t=on(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=on(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=lA({color:i}),i=n.mul(i),i.clamp()}),hA=on(X(1.6605,-.1246,-.0182),X(-.5876,1.1329,-.1006),X(-.0728,-.0083,1.1187)),dA=on(X(.6274,.0691,.0164),X(.3293,.9195,.088),X(.0433,.0113,.8956)),fA=me(([i])=>{const e=X(i).toVar(),t=X(e.mul(e)).toVar(),n=X(t.mul(t)).toVar();return j(15.5).mul(n.mul(t)).sub(mt(40.14,n.mul(e))).add(mt(31.96,n).sub(mt(6.868,t.mul(e))).add(mt(.4298,t).add(mt(.1191,e).sub(.00232))))}),pA=me(({color:i,exposure:e})=>{const t=X(i).toVar(),n=on(X(.856627153315983,.137318972929847,.11189821299995),X(.0951212405381588,.761241990602591,.0767994186031903),X(.0482516061458583,.101439036467562,.811302368396859)),s=on(X(1.1271005818144368,-.1413297634984383,-.14132976349843826),X(-.11060664309660323,1.157823702216272,-.11060664309660294),X(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=j(-12.47393),o=j(4.026069);return t.mulAssign(e),t.assign(dA.mul(t)),t.assign(n.mul(t)),t.assign(hn(t,1e-10)),t.assign(wa(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(_s(t,0,1)),t.assign(fA(t)),t.assign(s.mul(t)),t.assign(Ai(hn(X(0),t),X(2.2))),t.assign(hA.mul(t)),t.assign(_s(t,0,1)),t}),mA=me(({color:i,exposure:e})=>{const t=j(.76),n=j(.15);i=i.mul(e);const s=Ni(i.r,Ni(i.g,i.b)),r=In(s.lessThan(.08),s.sub(mt(6.25,s.mul(s))),.04);i.subAssign(r);const o=hn(i.r,hn(i.g,i.b));Lt(o.lessThan(t),()=>i);const a=li(1,t),c=li(1,a.mul(a).div(o.add(a.sub(t))));i.mulAssign(c.div(o));const l=li(1,Pi(1,n.mul(o.sub(c)).add(1)));return Ot(i,X(c),l)}).setLayout({name:"NeutralToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),gA={[Cd]:oA,[Ld]:aA,[Pd]:cA,[Id]:uA,[Dd]:pA,[Ud]:mA};class dm extends ut{constructor(e=bn,t=vA,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===bn)return t;const s={exposure:this.exposureNode,color:t},r=gA[n];let o=null;return r?o=r(s):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const _A=(i,e,t)=>fe(new dm(i,fe(e),fe(t))),vA=PN("toneMappingExposure","float");O("toneMapping",(i,e,t)=>_A(e,t,i));ie("ToneMappingNode",dm);let Cc=null;class fm extends to{constructor(e=Yr,t=null){Cc===null&&(Cc=new gf),super(e,t,Cc)}updateReference(){return this}}const xA=B(fm);O("viewportSharedTexture",xA);ie("ViewportSharedTextureNode",fm);const yA=new se;class Vl extends Ss{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class no extends ut{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const s=new Qr;s.isRenderTargetTexture=!0,s.name="PostProcessingDepth";const r=new Ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mr});r.texture.name="PostProcessing",r.depthTexture=s,this.renderTarget=r,this.updateBeforeType=ct.FRAME,this._textureNode=fe(new Vl(this,r.texture)),this._depthTextureNode=fe(new Vl(this,s)),this._linearDepthNode=null,this._viewZNode=null,this._cameraNear=qe(0),this._cameraFar=qe(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=Up(this._depthTextureNode,e,t)}return this._viewZNode}getLinearDepthNode(){if(this._linearDepthNode===null){const e=this._cameraNear,t=this._cameraFar;this._linearDepthNode=Ko(this.getViewZNode(),e,t)}return this._linearDepthNode}setup(){return this.scope===no.COLOR?this.getTextureNode():this.getLinearDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(yA);this.setSize(r.width,r.height);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=s.near,this._cameraFar.value=s.far,t.toneMapping=bn,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,s),t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}no.COLOR="color";no.DEPTH="depth";const Ua=(i,e)=>fe(new Vl(i,e));ie("PassNode",no);const Lc=new tu(-1,1,1,-1,0,1);class MA extends Di{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $n(t,2))}}const SA=new MA;class io extends Pn{constructor(e=null){super(SA,e),this.camera=Lc}renderAsync(e){return e.renderAsync(this,Lc)}render(e){e.render(this,Lc)}}const vd=new io,xd=new io;class TA extends ut{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=ce(1),this._invSize=qe(new se),this._passDirection=qe(new se),this._horizontalRT=new Ci,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new Ci,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=Ua(this,this._verticalRT.texture),this.updateBeforeType=ct.RENDER,this.resolution=new se(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=t.getRenderTarget(),o=n.value;vd.material=this._material,xd.material=this._material,this.setSize(s.image.width,s.image.height);const a=s.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),vd.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),xd.render(t),t.setRenderTarget(r),n.value=o}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Ce();const n=t.uvNode||yn(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=me(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,d=ce(this.directionNode).mul(this._passDirection),h=j(l[0]).toVar(),f=Ce(s(n).mul(h)).toVar();for(let g=1;g<c;g++){const _=j(g),m=j(l[g]),p=ce(d.mul(u.mul(_))).toVar(),N=Ce(s(n.add(p))),x=Ce(s(n.sub(p)));f.addAssign(N.add(x).mul(m)),h.addAssign(mt(2,m))}return f.div(h)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const EA=(i,e)=>fe(new TA(fe(i),e));O("gaussianBlur",EA);const Pc=new se,yd=new io;class NA extends ut{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=Kt(),this.damp=qe(t),this._compRT=new Ci,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new Ci,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=Ua(this,this._compRT.texture),this.updateBeforeType=ct.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,r=n.value.type;this._compRT.texture.type=r,this._oldRT.texture.type=r,t.getDrawingBufferSize(Pc),this.setSize(Pc.x,Pc.y);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget(),l=n.value;this.textureNodeOld.value=this._oldRT.texture,t.toneMapping=bn,t.toneMappingNode=null,t.setRenderTarget(this._compRT),yd.render(t);const u=this._oldRT;this._oldRT=this._compRT,this._compRT=u,t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c),n.value=l}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Ce();const s=t.uvNode||yn();n.uvNode=s;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),o=me(([u,d])=>{const h=j(d).toVar(),f=Ce(u).toVar();return hn(Su(f.sub(h)),0)}),a=me(()=>{const u=Ce(n),d=Ce(r(s));return u.mulAssign(this.damp.mul(o(u,.1))),hn(d,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=a(),yd.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const AA=(i,e)=>fe(new NA(fe(i),e));O("afterImage",AA);const Md=new io;class wA extends ut{constructor(e,t,n,s){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=X(.1,0,1),this.samples=s,this.resolution=new se(1,1),this._renderTarget=new Ci,this._renderTarget.texture.name="anamorphic",this._invSize=qe(new se),this._textureNode=Ua(this,this._renderTarget.texture),this.updateBeforeType=ct.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),o=n.value;Md.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),Md.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Ce();const n=t.uvNode||yn(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=me(()=>{const c=this.samples,l=Math.floor(c/2),u=X(0).toVar();return Yn({start:-l,end:l},({i:d})=>{const h=j(d).abs().div(l).oneMinus(),f=ce(n.x.add(this._invSize.x.mul(d).mul(this.scaleNode)),n.y),g=s(f),_=lm(g,this.tresholdNode).mul(h);u.addAssign(_)}),u.mul(this.colorNode)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const bA=(i,e=.9,t=3,n=32)=>fe(new wA(fe(i),fe(e),fe(t),n));O("anamorphic",bA);class RA extends ut{constructor(e){super(),this.textureNode=e,this.updateBeforeType=ct.RENDER,this._invSize=qe(new se)}updateBefore(){const e=this.textureNode.value;this._invSize.value.set(1/e.image.width,1/e.image.height)}setup(){const{textureNode:e}=this,t=e.uvNode||yn(),n=o=>this.textureNode.cache().context({getUV:()=>o,forceUVContext:!0});return me(()=>{const o=this._invSize,a=on(-1,-2,-1,0,0,0,1,2,1),c=on(-1,0,1,-2,0,2,-1,0,1),l=Hn(n(t.add(o.mul(ce(-1,-1)))).xyz),u=Hn(n(t.add(o.mul(ce(-1,0)))).xyz),d=Hn(n(t.add(o.mul(ce(-1,1)))).xyz),h=Hn(n(t.add(o.mul(ce(0,-1)))).xyz),f=Hn(n(t.add(o.mul(ce(0,0)))).xyz),g=Hn(n(t.add(o.mul(ce(0,1)))).xyz),_=Hn(n(t.add(o.mul(ce(1,-1)))).xyz),m=Hn(n(t.add(o.mul(ce(1,0)))).xyz),p=Hn(n(t.add(o.mul(ce(1,1)))).xyz),N=vn(a[0][0].mul(l),a[1][0].mul(h),a[2][0].mul(_),a[0][1].mul(u),a[1][1].mul(f),a[2][1].mul(m),a[0][2].mul(d),a[1][2].mul(g),a[2][2].mul(p)),x=vn(c[0][0].mul(l),c[1][0].mul(h),c[2][0].mul(_),c[0][1].mul(u),c[1][1].mul(f),c[2][1].mul(m),c[0][2].mul(d),c[1][2].mul(g),c[2][2].mul(p)),E=N.mul(N).add(x.mul(x)).sqrt();return Ce(X(E),1)})()}}const CA=i=>fe(new RA(fe(i)));O("sobel",CA);class LA extends ut{constructor(e,t,n=1,s=.025,r=1){super(),this.textureNode=e,this.viewZNode=t,this.focus=qe(n),this.aperture=qe(s),this.maxblur=qe(r),this._aspect=qe(0),this.updateBeforeType=ct.RENDER}updateBefore(){const e=this.textureNode.value;this._aspect.value=e.image.width/e.image.height}setup(){const{textureNode:e}=this,t=e.uvNode||yn(),n=o=>this.textureNode.uv(o);return me(()=>{const o=ce(1,this._aspect),a=this.focus.add(this.viewZNode),c=ce(_s(a.mul(this.aperture),this.maxblur.negate(),this.maxblur)),l=c.mul(.9),u=c.mul(.7),d=c.mul(.4);let h=Ce(0);return h=h.add(n(t)),h=h.add(n(t.add(ce(0,.4).mul(o).mul(c)))),h=h.add(n(t.add(ce(.15,.37).mul(o).mul(c)))),h=h.add(n(t.add(ce(.29,.29).mul(o).mul(c)))),h=h.add(n(t.add(ce(-.37,.15).mul(o).mul(c)))),h=h.add(n(t.add(ce(.4,0).mul(o).mul(c)))),h=h.add(n(t.add(ce(.37,-.15).mul(o).mul(c)))),h=h.add(n(t.add(ce(.29,-.29).mul(o).mul(c)))),h=h.add(n(t.add(ce(-.15,-.37).mul(o).mul(c)))),h=h.add(n(t.add(ce(0,-.4).mul(o).mul(c)))),h=h.add(n(t.add(ce(-.15,.37).mul(o).mul(c)))),h=h.add(n(t.add(ce(-.29,.29).mul(o).mul(c)))),h=h.add(n(t.add(ce(.37,.15).mul(o).mul(c)))),h=h.add(n(t.add(ce(-.4,0).mul(o).mul(c)))),h=h.add(n(t.add(ce(-.37,-.15).mul(o).mul(c)))),h=h.add(n(t.add(ce(-.29,-.29).mul(o).mul(c)))),h=h.add(n(t.add(ce(.15,-.37).mul(o).mul(c)))),h=h.add(n(t.add(ce(.15,.37).mul(o).mul(l)))),h=h.add(n(t.add(ce(-.37,.15).mul(o).mul(l)))),h=h.add(n(t.add(ce(.37,-.15).mul(o).mul(l)))),h=h.add(n(t.add(ce(-.15,-.37).mul(o).mul(l)))),h=h.add(n(t.add(ce(-.15,.37).mul(o).mul(l)))),h=h.add(n(t.add(ce(.37,.15).mul(o).mul(l)))),h=h.add(n(t.add(ce(-.37,-.15).mul(o).mul(l)))),h=h.add(n(t.add(ce(.15,-.37).mul(o).mul(l)))),h=h.add(n(t.add(ce(.29,.29).mul(o).mul(u)))),h=h.add(n(t.add(ce(.4,0).mul(o).mul(u)))),h=h.add(n(t.add(ce(.29,-.29).mul(o).mul(u)))),h=h.add(n(t.add(ce(0,-.4).mul(o).mul(u)))),h=h.add(n(t.add(ce(-.29,.29).mul(o).mul(u)))),h=h.add(n(t.add(ce(-.4,0).mul(o).mul(u)))),h=h.add(n(t.add(ce(-.29,-.29).mul(o).mul(u)))),h=h.add(n(t.add(ce(0,.4).mul(o).mul(u)))),h=h.add(n(t.add(ce(.29,.29).mul(o).mul(d)))),h=h.add(n(t.add(ce(.4,0).mul(o).mul(d)))),h=h.add(n(t.add(ce(.29,-.29).mul(o).mul(d)))),h=h.add(n(t.add(ce(0,-.4).mul(o).mul(d)))),h=h.add(n(t.add(ce(-.29,.29).mul(o).mul(d)))),h=h.add(n(t.add(ce(-.4,0).mul(o).mul(d)))),h=h.add(n(t.add(ce(-.29,-.29).mul(o).mul(d)))),h=h.add(n(t.add(ce(0,.4).mul(o).mul(d)))),h=h.div(41),h.a=1,Ce(h)})()}}const PA=(i,e,t,n,s)=>fe(new LA(fe(i),fe(e),t,n,s));O("dof",PA);const Sd=new io;class IA extends ut{constructor(e,t=new se(.5,.5),n=1.57,s=1){super("vec4"),this.colorNode=e,this.center=qe(t),this.angle=qe(n),this.scale=qe(s),this._renderTarget=new Ci,this._renderTarget.texture.name="dotScreen",this._size=qe(new se),this._textureNode=Ua(this,this._renderTarget.texture),this.updateBeforeType=ct.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._size.value.set(e,t),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.colorNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),o=n.value;Sd.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),Sd.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.colorNode,n=me(()=>{const a=wn(this.angle),c=ei(this.angle),l=yn().mul(this._size).sub(this.center),u=ce(c.mul(l.x).sub(a.mul(l.y)),a.mul(l.x).add(c.mul(l.y))).mul(this.scale);return wn(u.x).mul(wn(u.y)).mul(4)}),s=me(()=>{const a=t,c=vn(a.r,a.g,a.b).div(3);return Ce(X(c.mul(10).sub(5).add(n())),a.a)}),r=this._material||(this._material=e.createNodeMaterial());r.fragmentNode=s();const o=e.getNodeProperties(this);return o.textureNode=t,this._textureNode}}const DA=(i,e,t,n)=>fe(new IA(fe(i),e,t,n));O("dotScreen",DA);class UA extends ut{constructor(e,t=.005,n=0){super("vec4"),this.textureNode=e,this.amount=qe(t),this.angle=qe(n),this.updateBeforeType=ct.RENDER}updateBefore(){}setup(){const{textureNode:e}=this,t=e.uvNode||yn(),n=r=>this.textureNode.uv(r);return me(()=>{const r=ce(ei(this.angle),wn(this.angle)).mul(this.amount),o=n(t.add(r)),a=n(t),c=n(t.sub(r));return Ce(o.r,a.g,c.b,a.a)})()}}const OA=(i,e,t)=>fe(new UA(fe(i),e,t));O("rgbShift",OA);class pm extends ut{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let a=0;a<r.length;a++){const c=s[a],l=r[a];t.push(l.build(e,c.type))}else for(const a of s){const c=r[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const FA=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?er(e):Na(e[0]),fe(new pm(fe(i),e)));O("call",FA);ie("FunctionCallNode",pm);class mm extends Ve{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new Ii,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:j()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=Rf(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=Cf(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const jo=B(mm);O("scriptableValue",jo);ie("ScriptableValueNode",mm);class gm extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class zA{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const Ic=new gm;class _m extends Ve{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new gm,this._output=jo(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=jo(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=jo(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new zA(this),s=Ic.get("THREE"),r=Ic.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,Ic,e,t,s,r];this._object=o(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:j()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=s+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const BA=B(_m);O("scriptable",BA);ie("ScriptableNode",_m);class Oa extends Ve{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||sn.z).negate()}setup(){return this.factorNode}}const VA=B(Oa);O("fog",VA);ie("FogNode",Oa);class vm extends Oa{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return ui(this.nearNode,this.farNode,t)}}const HA=B(vm);O("rangeFog",HA);ie("FogRangeNode",vm);class xm extends Oa{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const kA=B(xm);O("densityFog",kA);ie("FogExp2Node",xm);let os=null,as=null;class ym extends Ve{constructor(e=j(),t=j()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(qi(this.minNode.value)),n=e.getTypeLength(qi(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.count>1?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.count>1){const s=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(qi(s)),a=e.getTypeLength(qi(r));os=os||new at,as=as||new at,os.setScalar(0),as.setScalar(0),o===1?os.setScalar(s):s.isColor?os.set(s.r,s.g,s.b):os.set(s.x,s.y,s.z||0,s.w||0),a===1?as.setScalar(r):r.isColor?as.set(r.r,r.g,r.b):as.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let h=0;h<l;h++){const f=h%c,g=os.getComponent(f),_=as.getComponent(f);u[h]=Zl.lerp(g,_,Math.random())}const d=this.getNodeType(e);if(t.count<=4096)n=Tu(u,"vec4",t.count).element(gu).convert(d);else{const h=new ff(u,4);e.geometry.setAttribute("__range"+this.id,h),n=Pl(h).convert(d)}}else n=j(0);return n}}B(ym);ie("RangeNode",ym);class Mm extends Ve{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=ct.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const GA=(i,e,t)=>fe(new Mm(fe(i),e,t));O("compute",GA);ie("ComputeNode",Mm);class xs extends Ve{constructor(e=xs.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===xs.TARGET_DIRECTION&&(n=yr.transformDirection(Rl(t).sub(Rl(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}xs.TARGET_DIRECTION="targetDirection";const Sm=B(xs,xs.TARGET_DIRECTION);ie("LightNode",xs);const Tm=me(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});class Em extends Ji{constructor(e=null){super(e),this.cutoffDistanceNode=qe(0),this.decayExponentNode=qe(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:s,light:r}=this,o=e.context.lightingModel,a=Eu(r).sub(sn),c=a.normalize(),l=a.length(),u=Tm({lightDistance:l,cutoffDistance:n,decayExponent:s}),d=t.mul(u),h=e.context.reflectedLight;o.direct({lightDirection:c,lightColor:d,reflectedLight:h,shadowMask:this.shadowMaskNode},e.stack,e)}}ie("PointLightNode",Em);Es(ZM,Em);class Nm extends Ji{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,s=Sm(this.light),r=e.context.reflectedLight;t.direct({lightDirection:s,lightColor:n,reflectedLight:r,shadowMask:this.shadowMaskNode},e.stack,e)}}ie("DirectionalLightNode",Nm);Es(jM,Nm);const Dc=new yt,Fo=new yt;let zo,Uc;class Am extends Ji{constructor(e=null){super(e),this.halfHeight=qe(new L),this.halfWidth=qe(new L)}update(e){super.update(e);const{light:t}=this,n=e.camera.matrixWorldInverse;Fo.identity(),Dc.copy(t.matrixWorld),Dc.premultiply(n),Fo.extractRotation(Dc),this.halfWidth.value.set(t.width*.5,0,0),this.halfHeight.value.set(0,t.height*.5,0),this.halfWidth.value.applyMatrix4(Fo),this.halfHeight.value.applyMatrix4(Fo)}setup(e){super.setup(e),zo===void 0&&(e.isAvailable("float32Filterable")?(zo=Kt(ve.LTC_FLOAT_1),Uc=Kt(ve.LTC_FLOAT_2)):(zo=Kt(ve.LTC_HALF_1),Uc=Kt(ve.LTC_HALF_2)));const{colorNode:t,light:n}=this,s=e.context.lightingModel,r=Eu(n),o=e.context.reflectedLight;s.directRectArea({lightColor:t,lightPosition:r,halfWidth:this.halfWidth,halfHeight:this.halfHeight,reflectedLight:o,ltc_1:zo,ltc_2:Uc},e.stack,e)}}ie("RectAreaLightNode",Am);Es(QM,Am);class bu extends Ji{constructor(e=null){super(e),this.coneCosNode=qe(0),this.penumbraCosNode=qe(0),this.cutoffDistanceNode=qe(0),this.decayExponentNode=qe(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return ui(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:s,decayExponentNode:r,light:o}=this,a=Eu(o).sub(sn),c=a.normalize(),l=c.dot(Sm(o)),u=this.getSpotAttenuation(l),d=a.length(),h=Tm({lightDistance:d,cutoffDistance:s,decayExponent:r}),f=n.mul(u).mul(h),g=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:f,reflectedLight:g,shadowMask:this.shadowMaskNode},e.stack,e)}}ie("SpotLightNode",bu);Es(Af,bu);class WA extends Af{constructor(e,t,n,s,r,o){super(e,t,n,s,r,o),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}class wm extends bu{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const s=e.acos().mul(1/Math.PI);n=Kt(t,ce(s,0),0).r}else n=super.getSpotAttenuation(e);return n}}ie("IESSpotLightNode",wm);Es(WA,wm);class bm extends Ji{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}ie("AmbientLightNode",bm);Es(JM,bm);class Rm extends Ji{constructor(e=null){super(e),this.lightPositionNode=Rl(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=qe(new Be)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:s}=this,o=Ki.dot(s).mul(.5).add(.5),a=Ot(n,t,o);e.context.irradiance.addAssign(a)}}ie("HemisphereLightNode",Rm);Es(qM,Rm);const XA=me(i=>{const e=i.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class Cm extends ut{constructor(e=yn()){super("float"),this.uvNode=e}setup(){return XA({uv:this.uvNode})}}const qA=B(Cm);O("checker",qA);ie("CheckerNode",Cm);const YA=new mf;class $A extends an{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(YA),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=me(()=>{Ut(ce(),"vUv").assign(yn());const n=tn("instancePosition"),s=Nt("vec4","mvPos");s.assign(vs.mul(Ce(n,1)));const r=rr.z.div(rr.w),o=ni.mul(s),a=Nt("vec2","offset");return a.assign(un.xy),a.assign(a.mul(DE)),a.assign(a.div(rr.z)),a.y.assign(a.y.mul(r)),a.assign(a.mul(o.w)),o.assign(o.add(Ce(a,0,0))),o})(),this.fragmentNode=me(()=>{const n=Ut(ce(),"vUv"),s=Nt("float","alpha");s.assign(1);const r=n.x,o=n.y,a=r.mul(r).add(o.mul(o));if(e){const l=Nt("float","dlen");l.assign(a.fwidth()),s.assign(ui(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=tn("instanceColor").mul(qr):c=qr,Ce(c,s)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Yt("InstancedPointsNodeMaterial",$A);const ZA=new pf;class KA extends an{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(ZA),this.setValues(e)}}Yt("LineBasicNodeMaterial",KA);const jA=new Nf;class JA extends an{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(jA),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?j(this.dashScaleNode):Cl,n=this.dashSizeNode?j(this.dashSizeNode):dp,s=this.dashSizeNode?j(this.dashGapNode):fp;ir.assign(n),la.assign(s);const r=Ut(tn("lineDistance").mul(t));(e?r.add(e):r).mod(ir.add(la)).greaterThan(ir).discard()}}Yt("LineDashedNodeMaterial",JA);const QA=new Nf;class ew extends an{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(QA),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setup(e){this.setupShaders(),super.setup(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,s=this.worldUnits,r=me(({start:a,end:c})=>{const l=ni.element(2).element(2),h=ni.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return Ce(Ot(a.xyz,c.xyz,h),c.w)});this.vertexNode=me(()=>{Jn("vec2","vUv").assign(yn());const a=tn("instanceStart"),c=tn("instanceEnd"),l=Nt("vec4","start"),u=Nt("vec4","end");l.assign(vs.mul(Ce(a,1))),u.assign(vs.mul(Ce(c,1))),s&&(Jn("vec3","worldStart").assign(l.xyz),Jn("vec3","worldEnd").assign(u.xyz));const d=rr.z.div(rr.w),h=ni.element(2).element(3).equal(-1);Lt(h,()=>{Lt(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(r({start:u,end:l}))})});const f=ni.mul(l),g=ni.mul(u),_=f.xyz.div(f.w),m=g.xyz.div(g.w),p=m.xy.sub(_.xy).temp();p.x.assign(p.x.mul(d)),p.assign(p.normalize());const N=ra(Ce());if(s){const x=u.xyz.sub(l.xyz).normalize(),E=Ot(l.xyz,u.xyz,.5).normalize(),I=x.cross(E).normalize(),R=x.cross(I),w=Jn("vec4","worldPos");w.assign(un.y.lessThan(.5).cond(l,u));const P=xc.mul(.5);w.addAssign(Ce(un.x.lessThan(0).cond(I.mul(P),I.mul(P).negate()),0)),n||(w.addAssign(Ce(un.y.lessThan(.5).cond(x.mul(P).negate(),x.mul(P)),0)),w.addAssign(Ce(R.mul(P),0)),Lt(un.y.greaterThan(1).or(un.y.lessThan(0)),()=>{w.subAssign(Ce(R.mul(2).mul(P),0))})),N.assign(ni.mul(w));const T=ra(X());T.assign(un.y.lessThan(.5).cond(_,m)),N.z.assign(T.z.mul(N.w))}else{const x=Nt("vec2","offset");x.assign(ce(p.y,p.x.negate())),p.x.assign(p.x.div(d)),x.x.assign(x.x.div(d)),x.assign(un.x.lessThan(0).cond(x.negate(),x)),Lt(un.y.lessThan(0),()=>{x.assign(x.sub(p))}).elseif(un.y.greaterThan(1),()=>{x.assign(x.add(p))}),x.assign(x.mul(xc)),x.assign(x.div(rr.w)),N.assign(un.y.lessThan(.5).cond(f,g)),x.assign(x.mul(N.w)),N.assign(N.add(Ce(x,0,0)))}return N})();const o=me(({p1:a,p2:c,p3:l,p4:u})=>{const d=a.sub(l),h=u.sub(l),f=c.sub(a),g=d.dot(h),_=h.dot(f),m=d.dot(f),p=h.dot(h),x=f.dot(f).mul(p).sub(_.mul(_)),I=g.mul(_).sub(m.mul(p)).div(x).clamp(),R=g.add(_.mul(I)).div(p).clamp();return ce(I,R)});this.fragmentNode=me(()=>{const a=Jn("vec2","vUv");if(n){const u=this.offsetNode?j(this.offsetNodeNode):nd,d=this.dashScaleNode?j(this.dashScaleNode):Cl,h=this.dashSizeNode?j(this.dashSizeNode):dp,f=this.dashSizeNode?j(this.dashGapNode):fp;ir.assign(h),la.assign(f);const g=tn("instanceDistanceStart"),_=tn("instanceDistanceEnd"),m=un.y.lessThan(.5).cond(d.mul(g),Cl.mul(_)),p=Ut(m.add(nd)),N=u?p.add(u):p;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),N.mod(ir.add(la)).greaterThan(ir).discard()}const c=Nt("float","alpha");if(c.assign(1),s){const u=Jn("vec3","worldStart"),d=Jn("vec3","worldEnd"),h=Jn("vec4","worldPos").xyz.normalize().mul(1e5),f=d.sub(u),g=o({p1:u,p2:d,p3:X(0,0,0),p4:h}),_=u.add(f.mul(g.x)),m=h.mul(g.y),x=_.sub(m).length().div(xc);if(!n)if(e){const E=x.fwidth();c.assign(ui(E.negate().add(.5),E.add(.5),x).oneMinus())}else x.greaterThan(.5).discard()}else if(e){const u=a.x,d=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),h=u.mul(u).add(d.mul(d)),f=Nt("float","dlen");f.assign(h.fwidth()),Lt(a.y.abs().greaterThan(1),()=>{c.assign(ui(f.oneMinus(),f.add(1),h).oneMinus())})}else Lt(a.y.abs().greaterThan(1),()=>{const u=a.x,d=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(d.mul(d)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=tn("instanceColorStart"),d=tn("instanceColorEnd");l=un.y.lessThan(.5).cond(u,d).mul(qr)}else l=qr;return Ce(l,c)})()}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.needsUpdate=!0)}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.needsUpdate=!0)}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.needsUpdate=!0)}}Yt("Line2NodeMaterial",ew);const tw=new BM;class nw extends an{constructor(e){super(),this.lights=!1,this.isMeshNormalNodeMaterial=!0,this.setDefaultValues(tw),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?j(this.opacityNode):hp;xt.assign(Ce($p(Rt),e))}}Yt("MeshNormalNodeMaterial",nw);const iw=new Ql;class sw extends an{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(iw),this.setValues(e)}}Yt("MeshBasicNodeMaterial",sw);const $r=me(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),pr=me(i=>i.diffuseColor.mul(1/Math.PI)),rw=()=>j(.25),ow=me(({dotNH:i})=>Nl.mul(j(.5)).add(1).mul(j(1/Math.PI)).mul(i.pow(Nl))),aw=me(({lightDirection:i})=>{const e=i.add(Et).normalize(),t=Rt.dot(e).clamp(),n=Et.dot(e).clamp(),s=$r({f0:An,f90:1,dotVH:n}),r=rw(),o=ow({dotNH:t});return s.mul(r).mul(o)});class Lm extends Aa{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Rt.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(pr({diffuseColor:xt.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(aw({lightDirection:e})).mul(mE))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(pr({diffuseColor:xt})))}}const cw=new VM;class lw extends an{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(cw),this.setValues(e)}setupLightingModel(){return new Lm(!1)}}Yt("MeshLambertNodeMaterial",lw);const uw=new FM;class hw extends an{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(uw),this.setValues(e)}setupLightingModel(){return new Lm}setupVariants(){const e=(this.shininessNode?j(this.shininessNode):hE).max(1e-4);Nl.assign(e);const t=this.specularNode||fE;An.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}Yt("MeshPhongNodeMaterial",hw);const dw=me(()=>{const i=ha.dFdx().abs().max(ha.dFdy().abs());return i.x.max(i.y).max(i.z)}),Pm=me(i=>{const{roughness:e}=i,t=dw();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),fw=me(({alpha:i,dotNL:e,dotNV:t})=>{const n=i.pow2(),s=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),r=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return Pi(.5,s.add(r).max($f))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),pw=me(({alphaT:i,alphaB:e,dotTV:t,dotBV:n,dotTL:s,dotBL:r,dotNV:o,dotNL:a})=>{const c=a.mul(X(i.mul(t),e.mul(n),o).length()),l=o.mul(X(i.mul(s),e.mul(r),a).length());return Pi(.5,c.add(l)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),mw=me(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),gw=j(1/Math.PI),_w=me(({alphaT:i,alphaB:e,dotNH:t,dotTH:n,dotBH:s})=>{const r=i.mul(e),o=X(e.mul(n),i.mul(s),r.mul(t)),a=o.dot(o),c=r.div(a);return gw.mul(r.mul(c.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),Td=me(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,f:r,USE_IRIDESCENCE:o,USE_ANISOTROPY:a}=i,c=i.normalView||Rt,l=s.pow2(),u=e.add(Et).normalize(),d=c.dot(e).clamp(),h=c.dot(Et).clamp(),f=c.dot(u).clamp(),g=Et.dot(u).clamp();let _=$r({f0:t,f90:n,dotVH:g}),m,p;if(Kh(o)&&(_=vu.mix(_,r)),Kh(a)){const N=$o.dot(e),x=$o.dot(Et),E=$o.dot(u),I=nr.dot(e),R=nr.dot(Et),w=nr.dot(u);m=pw({alphaT:El,alphaB:l,dotTV:x,dotBV:R,dotTL:N,dotBL:I,dotNV:h,dotNL:d}),p=_w({alphaT:El,alphaB:l,dotNH:f,dotTH:E,dotBH:w})}else m=fw({alpha:l,dotNL:d,dotNV:h}),p=mw({alpha:l,dotNH:f});return _.mul(m).mul(p)}),Im=me(({roughness:i,dotNV:e})=>{const t=Ce(-1,-.0275,-.572,.022),n=Ce(1,.0425,1.04,-.04),s=i.mul(t).add(n),r=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return ce(-1.04,1.04).mul(r).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),Dm=me(i=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:s}=i,r=Im({dotNV:e,roughness:s});return t.mul(r.x).add(n.mul(r.y))}),vw=me(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),r=n.mul(s,s).clamp(0,.9999);return i.sub(X(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),xw=me(({roughness:i,dotNH:e})=>{const t=i.pow2(),n=j(1).div(t),r=e.pow2().oneMinus().max(.0078125);return j(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),yw=me(({dotNV:i,dotNL:e})=>j(1).div(j(4).mul(e.add(i).sub(e.mul(i))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),Mw=me(({lightDirection:i})=>{const e=i.add(Et).normalize(),t=Rt.dot(i).clamp(),n=Rt.dot(Et).clamp(),s=Rt.dot(e).clamp(),r=xw({roughness:_u,dotNH:s}),o=yw({dotNV:n,dotNL:t});return $s.mul(r).mul(o)}),Sw=me(({N:i,V:e,roughness:t})=>{const r=.0078125,o=i.dot(e).saturate(),a=ce(t,o.oneMinus().sqrt());return a.assign(a.mul(.984375).add(r)),a}).setLayout({name:"LTC_Uv",type:"vec2",inputs:[{name:"N",type:"vec3"},{name:"V",type:"vec3"},{name:"roughness",type:"float"}]}),Tw=me(({f:i})=>{const e=i.length();return hn(e.mul(e).add(i.z).div(e.add(1)),0)}).setLayout({name:"LTC_ClippedSphereFormFactor",type:"float",inputs:[{name:"f",type:"vec3"}]}),Bo=me(({v1:i,v2:e})=>{const t=i.dot(e),n=t.abs().toVar(),s=n.mul(.0145206).add(.4965155).mul(n).add(.8543985).toVar(),r=n.add(4.1616724).mul(n).add(3.417594).toVar(),o=s.div(r),a=t.greaterThan(0).cond(o,hn(t.mul(t).oneMinus(),1e-7).inverseSqrt().mul(.5).sub(o));return i.cross(e).mul(a)}).setLayout({name:"LTC_EdgeVectorFormFactor",type:"vec3",inputs:[{name:"v1",type:"vec3"},{name:"v2",type:"vec3"}]}),Ed=me(({N:i,V:e,P:t,mInv:n,p0:s,p1:r,p2:o,p3:a})=>{const c=r.sub(s).toVar(),l=a.sub(s).toVar(),u=c.cross(l),d=X().toVar();return Lt(u.dot(t.sub(s)).greaterThanEqual(0),()=>{const h=e.sub(i.mul(e.dot(i))).normalize(),f=i.cross(h).negate(),g=n.mul(on(h,f,i).transpose()).toVar(),_=g.mul(s.sub(t)).normalize().toVar(),m=g.mul(r.sub(t)).normalize().toVar(),p=g.mul(o.sub(t)).normalize().toVar(),N=g.mul(a.sub(t)).normalize().toVar(),x=X(0).toVar();x.addAssign(Bo({v1:_,v2:m})),x.addAssign(Bo({v1:m,v2:p})),x.addAssign(Bo({v1:p,v2:N})),x.addAssign(Bo({v1:N,v2:_})),d.assign(X(Tw({f:x})))}),d}).setLayout({name:"LTC_Evaluate",type:"vec3",inputs:[{name:"N",type:"vec3"},{name:"V",type:"vec3"},{name:"P",type:"vec3"},{name:"mInv",type:"mat3"},{name:"p0",type:"vec3"},{name:"p1",type:"vec3"},{name:"p2",type:"vec3"},{name:"p3",type:"vec3"}]}),Nd=me(([i,e,t,n,s])=>{const r=X(tp(e.negate(),Wr(i),Pi(1,n))),o=X(sr(s[0].xyz),sr(s[1].xyz),sr(s[2].xyz));return Wr(r).mul(t.mul(o))}).setLayout({name:"getVolumeTransmissionRay",type:"vec3",inputs:[{name:"n",type:"vec3"},{name:"v",type:"vec3"},{name:"thickness",type:"float"},{name:"ior",type:"float"},{name:"modelMatrix",type:"mat4"}]}),Ew=me(([i,e])=>i.mul(_s(e.mul(2).sub(2),0,1))).setLayout({name:"applyIorToRoughness",type:"float",inputs:[{name:"roughness",type:"float"},{name:"ior",type:"float"}]}),Nw=Pp(),Ad=me(([i,e,t])=>{const n=Nw.uv(i),s=wa(j(Ul.x)).mul(Ew(e,t));return n.bicubic(s)}),wd=me(([i,e,t])=>(Lt(t.notEqual(0),()=>{const n=jf(e).negate().div(t);return Kf(n.negate().mul(i))}),X(1))).setLayout({name:"volumeAttenuation",type:"vec3",inputs:[{name:"transmissionDistance",type:"float"},{name:"attenuationColor",type:"vec3"},{name:"attenuationDistance",type:"float"}]}),Aw=me(([i,e,t,n,s,r,o,a,c,l,u,d,h,f,g])=>{let _,m;if(g){_=Ce().toVar(),m=X().toVar();const I=u.sub(1).mul(g.mul(.025)),R=X(u.sub(I),u,u.add(I));Yn({start:0,end:3},({i:w})=>{const P=R.element(w),T=Nd(i,e,d,P,a),M=o.add(T),C=l.mul(c.mul(Ce(M,1))),$=ce(C.xy.div(C.w)).toVar();$.addAssign(1),$.divAssign(2),$.assign(ce($.x,$.y.oneMinus()));const G=Ad($,t,P);_.element(w).assign(G.element(w)),_.a.addAssign(G.a),m.element(w).assign(n.element(w).mul(wd(sr(T),h,f).element(w)))}),_.a.divAssign(3)}else{const I=Nd(i,e,d,u,a),R=o.add(I),w=l.mul(c.mul(Ce(R,1))),P=ce(w.xy.div(w.w)).toVar();P.addAssign(1),P.divAssign(2),P.assign(ce(P.x,P.y.oneMinus())),_=Ad(P,t,u),m=n.mul(wd(sr(I),h,f))}const p=m.rgb.mul(_.rgb),N=i.dot(e).clamp(),x=X(Dm({dotNV:N,specularColor:s,specularF90:r,roughness:t})),E=m.r.add(m.g,m.b).div(3);return Ce(x.oneMinus().mul(p),_.a.oneMinus().mul(E).oneMinus())}),ww=on(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),bw=i=>{const e=i.sqrt();return X(1).add(e).div(X(1).sub(e))},bd=(i,e)=>i.sub(e).div(i.add(e)).pow2(),Rw=(i,e)=>{const t=i.mul(2*Math.PI*1e-9),n=X(54856e-17,44201e-17,52481e-17),s=X(1681e3,1795300,2208400),r=X(43278e5,93046e5,66121e5),o=j(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(r.mul(2*Math.PI).sqrt()).mul(s.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return a=X(a.x.add(o),a.y,a.z).div(10685e-11),ww.mul(a)},Cw=me(({outsideIOR:i,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:s})=>{const r=Ot(i,e,ui(0,.03,n)),o=i.div(r).pow2().mul(j(1).sub(t.pow2())),c=j(1).sub(o).sqrt(),l=bd(r,i),u=$r({f0:l,f90:1,dotVH:t}),d=u.oneMinus(),h=r.lessThan(i).cond(Math.PI,0),f=j(Math.PI).sub(h),g=bw(s.clamp(0,.9999)),_=bd(g,r.toVec3()),m=$r({f0:_,f90:1,dotVH:c}),p=X(g.x.lessThan(r).cond(Math.PI,0),g.y.lessThan(r).cond(Math.PI,0),g.z.lessThan(r).cond(Math.PI,0)),N=r.mul(n,c,2),x=X(f).add(p),E=u.mul(m).clamp(1e-5,.9999),I=E.sqrt(),R=d.pow2().mul(m).div(X(1).sub(E));let P=u.add(R),T=R.sub(d);for(let M=1;M<=2;++M){T=T.mul(I);const C=Rw(j(M).mul(N),j(M).mul(x)).mul(2);P=P.add(T.mul(C))}return P.max(X(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),Lw=me(({normal:i,viewDir:e,roughness:t})=>{const n=i.dot(e).saturate(),s=t.pow2(),r=In(t.lessThan(.25),j(-339.2).mul(s).add(j(161.4).mul(t)).sub(25.9),j(-8.48).mul(s).add(j(14.3).mul(t)).sub(9.95)),o=In(t.lessThan(.25),j(44).mul(s).sub(j(23.7).mul(t)).add(3.26),j(1.97).mul(s).sub(j(3.27).mul(t)).add(.72));return In(t.lessThan(.25),0,j(.1).mul(t).sub(.025)).add(r.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),Oc=X(.04),Fc=j(1);class Ru extends Aa{constructor(e=!1,t=!1,n=!1,s=!1,r=!1,o=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.anisotropy=s,this.transmission=r,this.dispersion=o,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(e){if(this.clearcoat===!0&&(this.clearcoatRadiance=X().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=X().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=X().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=X().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=X().temp("sheenSpecularIndirect")),this.iridescence===!0){const t=Rt.dot(Et).clamp();this.iridescenceFresnel=Cw({outsideIOR:j(1),eta2:Hf,cosTheta1:t,thinFilmThickness:kf,baseF0:An}),this.iridescenceF0=vw({f:this.iridescenceFresnel,f90:1,dotVH:t})}if(this.transmission===!0){const t=Ll,n=cp.sub(Ll).normalize(),s=up;e.backdrop=Aw(s,n,Ei,xt,An,ca,t,Xr,yr,ni,Zo,Gf,Xf,Wf,this.dispersion?qf:null),e.backdropAlpha=Al,xt.a.mulAssign(Ot(1,e.backdrop.a,Al))}}computeMultiscattering(e,t,n){const s=Rt.dot(Et).clamp(),r=Im({roughness:Ei,dotNV:s}),a=(this.iridescenceF0?vu.mix(An,this.iridescenceF0):An).mul(r.x).add(n.mul(r.y)),l=r.x.add(r.y).oneMinus(),u=An.add(An.oneMinus().mul(.047619)),d=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(d.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Rt.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(Mw({lightDirection:e}))),this.clearcoat===!0){const a=Zs.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(Td({lightDirection:e,f0:Oc,f90:Fc,roughness:aa,normalView:Zs})))}n.directDiffuse.addAssign(r.mul(pr({diffuseColor:xt.rgb}))),n.directSpecular.addAssign(r.mul(Td({lightDirection:e,f0:An,f90:1,roughness:Ei,iridescence:this.iridescence,f:this.iridescenceFresnel,USE_IRIDESCENCE:this.iridescence,USE_ANISOTROPY:this.anisotropy})))}directRectArea({lightColor:e,lightPosition:t,halfWidth:n,halfHeight:s,reflectedLight:r,ltc_1:o,ltc_2:a}){const c=t.add(n).sub(s),l=t.sub(n).sub(s),u=t.sub(n).add(s),d=t.add(n).add(s),h=Rt,f=Et,g=sn.toVar(),_=Sw({N:h,V:f,roughness:Ei}),m=o.uv(_).toVar(),p=a.uv(_).toVar(),N=on(X(m.x,0,m.y),X(0,1,0),X(m.z,0,m.w)).toVar(),x=An.mul(p.x).add(An.oneMinus().mul(p.y)).toVar();r.directSpecular.addAssign(e.mul(x).mul(Ed({N:h,V:f,P:g,mInv:N,p0:c,p1:l,p2:u,p3:d}))),r.directDiffuse.addAssign(e.mul(xt).mul(Ed({N:h,V:f,P:g,mInv:on(1,0,0,0,1,0,0,0,1),p0:c,p1:l,p2:u,p3:d})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(pr({diffuseColor:xt})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul($s,Lw({normal:Rt,viewDir:Et,roughness:_u}))),this.clearcoat===!0){const l=Zs.dot(Et).clamp(),u=Dm({dotNV:l,specularColor:Oc,specularF90:Fc,roughness:aa});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const s=X().temp("singleScattering"),r=X().temp("multiScattering"),o=t.mul(1/Math.PI);this.computeMultiscattering(s,r,ca);const a=s.add(r),c=xt.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(s)),n.indirectSpecular.addAssign(r.mul(o)),n.indirectDiffuse.addAssign(c.mul(o))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const s=Rt.dot(Et).clamp().add(e),r=Ei.mul(-16).oneMinus().negate().exp2(),o=e.sub(s.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(o)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=Zs.dot(Et).clamp(),s=$r({dotVH:n,f0:Oc,f90:Fc}),r=t.mul(Tl.mul(s).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(Tl));t.assign(r)}if(this.sheen===!0){const n=$s.r.max($s.g).max($s.b).mul(.157).oneMinus(),s=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(s)}}}const Pw=new Ef;class Um extends an{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(Pw),this.setValues(e)}setupLightingModel(){return new Ru}setupSpecular(){const e=Ot(X(.04),xt.rgb,oa);An.assign(e),ca.assign(1)}setupVariants(){const e=this.metalnessNode?j(this.metalnessNode):_E;oa.assign(e);let t=this.roughnessNode?j(this.roughnessNode):gE;t=Pm({roughness:t}),Ei.assign(t),this.setupSpecular(),xt.assign(Ce(xt.rgb.mul(e.oneMinus()),xt.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}Yt("MeshStandardNodeMaterial",Um);const Iw=new OM;class Om extends Um{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.iorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.dispersionNode=null,this.anisotropyNode=null,this.setDefaultValues(Iw),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}get useAnisotropy(){return this.anisotropy>0||this.anisotropyNode!==null}get useTransmission(){return this.transmission>0||this.transmissionNode!==null}get useDispersion(){return this.dispersion>0||this.dispersionNode!==null}setupSpecular(){const e=this.iorNode?j(this.iorNode):LE;Zo.assign(e),An.assign(Ot(Ni(ep(Zo.sub(1).div(Zo.add(1))).mul(pE),X(1)).mul(td),xt.rgb,oa)),ca.assign(Ot(td,1,oa))}setupLightingModel(){return new Ru(this.useClearcoat,this.useSheen,this.useIridescence,this.useAnisotropy,this.useTransmission,this.useDispersion)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?j(this.clearcoatNode):xE,n=this.clearcoatRoughnessNode?j(this.clearcoatRoughnessNode):yE;Tl.assign(t),aa.assign(Pm({roughness:n}))}if(this.useSheen){const t=this.sheenNode?X(this.sheenNode):TE,n=this.sheenRoughnessNode?j(this.sheenRoughnessNode):EE;$s.assign(t),_u.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?j(this.iridescenceNode):AE,n=this.iridescenceIORNode?j(this.iridescenceIORNode):wE,s=this.iridescenceThicknessNode?j(this.iridescenceThicknessNode):bE;vu.assign(t),Hf.assign(n),kf.assign(s)}if(this.useAnisotropy){const t=(this.anisotropyNode?ce(this.anisotropyNode):NE).toVar();ls.assign(t.length()),Lt(ls.equal(0),()=>{t.assign(ce(1,0))}).else(()=>{t.divAssign(ce(ls)),ls.assign(ls.saturate())}),El.assign(ls.pow2().mix(Ei.pow2(),1)),$o.assign(Ks[0].mul(t.x).add(Ks[1].mul(t.y))),nr.assign(Ks[1].mul(t.x).sub(Ks[0].mul(t.y)))}if(this.useTransmission){const t=this.transmissionNode?j(this.transmissionNode):RE,n=this.thicknessNode?j(this.thicknessNode):CE,s=this.attenuationDistanceNode?j(this.attenuationDistanceNode):PE,r=this.attenuationColorNode?X(this.attenuationColorNode):IE;if(Al.assign(t),Gf.assign(n),Wf.assign(s),Xf.assign(r),this.useDispersion){const o=this.dispersionNode?j(this.dispersionNode):UE;qf.assign(o)}}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?X(this.clearcoatNormalNode):ME;Zs.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,this.dispersionNode=e.dispersionNode,this.anisotropyNode=e.anisotropyNode,super.copy(e)}}Yt("MeshPhysicalNodeMaterial",Om);class Dw extends Ru{constructor(e,t,n,s){super(e,t,n),this.useSSS=s}direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){if(this.useSSS===!0){const o=r.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:d,thicknessScaleNode:h}=o,f=e.add(Rt.mul(c)).normalize(),g=j(Et.dot(f.negate()).saturate().pow(d).mul(h)),_=X(g.add(l).mul(a));n.directDiffuse.addAssign(_.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r)}}class Uw extends Om{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=j(.1),this.thicknessAmbientNode=j(0),this.thicknessAttenuationNode=j(.1),this.thicknessPowerNode=j(2),this.thicknessScaleNode=j(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new Dw(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}Yt("MeshSSSNodeMaterial",Uw);const Ow=me(({normal:i,lightDirection:e,builder:t})=>{const n=i.dot(e),s=ce(n.mul(.5).add(.5),0);if(t.material.gradientMap){const r=wi("gradientMap","texture").context({getUV:()=>s});return X(r.r)}else{const r=s.fwidth().mul(.5);return Ot(X(.7),X(1),ui(j(.7).sub(r.x),j(.7).add(r.x),s.x))}});class Fw extends Aa{direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){const o=Ow({normal:ha,lightDirection:e,builder:r}).mul(t);n.directDiffuse.addAssign(o.mul(pr({diffuseColor:xt.rgb})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(pr({diffuseColor:xt})))}}const zw=new zM;class Bw extends an{constructor(e){super(),this.isMeshToonNodeMaterial=!0,this.lights=!0,this.setDefaultValues(zw),this.setValues(e)}setupLightingModel(){return new Fw}}Yt("MeshToonNodeMaterial",Bw);const Vw=new HM;class Hw extends an{constructor(e){super(),this.lights=!1,this.isMeshMatcapNodeMaterial=!0,this.setDefaultValues(Vw),this.setValues(e)}setupVariants(e){const t=SN;let n;e.material.matcap?n=wi("matcap","texture").context({getUV:()=>t}):n=X(Ot(.2,.8,t.y)),xt.rgb.mulAssign(n.rgb)}}Yt("MeshMatcapNodeMaterial",Hw);const kw=new mf;class Gw extends an{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(kw),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}Yt("PointsNodeMaterial",Gw);const Ww=new nM;class Xw extends an{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(Ww),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:s,scaleNode:r}=this,o=jt;let a=vs.mul(X(n||0)),c=ce(Xr[0].xyz.length(),Xr[1].xyz.length());r!==null&&(c=c.mul(r));let l=o.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(qe(e.center).sub(.5))),l=l.mul(c);const u=j(s||SE),d=l.rotate(u);a=Ce(a.xy.add(d),a.zw);const h=ni.mul(a);return t.vertex=o,h}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}Yt("SpriteNodeMaterial",Xw);class qw extends Aa{constructor(){super(),this.shadowNode=j(1).toVar("shadowMask")}direct({shadowMask:e}){this.shadowNode.mulAssign(e)}finish(e){xt.a.mulAssign(this.shadowNode.oneMinus()),e.outgoingLight.rgb.assign(xt.rgb)}}const Yw=new UM;class $w extends an{constructor(e){super(),this.isShadowNodeMaterial=!0,this.lights=!0,this.setDefaultValues(Yw),this.setValues(e)}setupLightingModel(){return new qw}}Yt("ShadowNodeMaterial",$w);class Zw extends an{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.isVolumeNodeMaterial=!0,this.testNode=null,this.setValues(e)}setup(e){const t=FN(this.map,null,0),n=me(({orig:s,dir:r})=>{const o=X(-.5),a=X(.5),c=r.reciprocal(),l=o.sub(s).mul(c),u=a.sub(s).mul(c),d=Ni(l,u),h=hn(l,u),f=hn(d.x,hn(d.y,d.z)),g=Ni(h.x,Ni(h.y,h.z));return ce(f,g)});this.fragmentNode=me(()=>{const s=Ut(X(cE.mul(Ce(cp,1)))),o=Ut(un.sub(s)).normalize(),a=Nt("vec2","bounds").assign(n({orig:s,dir:o}));a.x.greaterThan(a.y).discard(),a.assign(ce(hn(a.x,0),a.y));const c=Nt("vec3","p").assign(s.add(a.x.mul(o))),l=Nt("vec3","inc").assign(X(o.abs().reciprocal())),u=Nt("float","delta").assign(Ni(l.x,Ni(l.y,l.z)));u.divAssign(wi("steps","float"));const d=Nt("vec4","ac").assign(Ce(wi("base","color"),0));return Yn({type:"float",start:a.x,end:a.y,update:"+= delta"},()=>{const h=Nt("float","d").assign(t.uv(c.add(.5)).r);this.testNode!==null?this.testNode({map:t,mapValue:h,probe:c,finalColor:d}).append():(d.a.assign(1),Sp()),c.addAssign(o.mul(u))}),d.a.equal(0).discard(),Ce(d)})(),super.setup(e)}}Yt("VolumeNodeMaterial",Zw);class Kw extends ou{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const s=n.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}class jw extends au{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new XM(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=r.parse(JSON.parse(a));t&&t(c)},n,s)}parse(e){return new Jw(e)}}class Jw{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=Qw(e,t,this.data);for(let r=0,o=s.length;r<o;r++)n.push(...s[r].toShapes());return n}}function Qw(i,e,t){const n=Array.from(i),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const u=n[l];if(u===`
`)a=0,c-=r;else{const d=eb(u,s,a,c,t);a+=d.offsetX,o.push(d.path)}}return o}function eb(i,e,t,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const o=new nS;let a,c,l,u,d,h,f,g;if(r.o){const _=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,p=_.length;m<p;)switch(_[m++]){case"m":a=_[m++]*e+t,c=_[m++]*e+n,o.moveTo(a,c);break;case"l":a=_[m++]*e+t,c=_[m++]*e+n,o.lineTo(a,c);break;case"q":l=_[m++]*e+t,u=_[m++]*e+n,d=_[m++]*e+t,h=_[m++]*e+n,o.quadraticCurveTo(d,h,l,u);break;case"b":l=_[m++]*e+t,u=_[m++]*e+n,d=_[m++]*e+t,h=_[m++]*e+n,f=_[m++]*e+t,g=_[m++]*e+n,o.bezierCurveTo(d,h,f,g,l,u);break}}return{offsetX:r.ha*e,path:o}}const Fm=document.querySelector("canvas.webgl"),Cu=new tM,tb=new Jr(1,1,32,32),Lu=new Li({vertexShader:rS,fragmentShader:oS,side:ri,uniforms:{uTime:{value:0}}});new Pn(tb,Lu);const nb=new jw;nb.load("/fonts/popins-semibold.json",i=>{const e=new Kw("Symphony",{font:i,size:.3,depth:.1});e.center();const t=new Pn(e,Lu);t.position.x=0,t.position.y=0,t.position.z=0,Cu.add(t),ys.lookAt(t.position)});const si={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{si.width=window.innerWidth,si.height=window.innerHeight,ys.aspect=si.width/si.height,ys.updateProjectionMatrix(),Zr.setSize(si.width,si.height),Zr.setPixelRatio(Math.min(window.devicePixelRatio,2))});const ys=new pn(75,si.width/si.height,.1,100);ys.position.set(0,.2,1);Cu.add(ys);const zm=new sS(ys,Fm);zm.enableDamping=!0;const Zr=new eM({canvas:Fm});Zr.setSize(si.width,si.height);Zr.setPixelRatio(Math.min(window.devicePixelRatio,2));const ib=new eS,Bm=()=>{zm.update();const i=ib.getElapsedTime();Lu.uniforms.uTime.value=i,Zr.render(Cu,ys),window.requestAnimationFrame(Bm)};Bm();
//# sourceMappingURL=index-TNn2fw08.js.map
