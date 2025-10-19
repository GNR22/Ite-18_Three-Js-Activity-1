(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="148",Li={ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iu=0,rl=1,Ou=2,Gc=1,Fu=2,Tr=3,_i=0,en=1,Sa=2,ns=3,Gn=0,Ji=1,sl=2,ol=3,al=4,Nu=5,qi=100,zu=101,Uu=102,ll=103,cl=104,ku=200,Bu=201,Vu=202,Gu=203,Hc=204,Wc=205,Hu=206,Wu=207,Xu=208,qu=209,$u=210,Yu=0,ju=1,Zu=2,jo=3,Ju=4,Ku=5,Qu=6,td=7,Xc=0,ed=1,nd=2,Dn=0,id=1,rd=2,sd=3,od=4,ad=5,qc=300,ir=301,rr=302,Zo=303,Jo=304,Vs=306,Ko=1e3,an=1001,Qo=1002,ve=1003,hl=1004,eo=1005,Ze=1006,ld=1007,Fr=1008,xi=1009,cd=1010,hd=1011,$c=1012,ud=1013,li=1014,ci=1015,Nr=1016,dd=1017,fd=1018,Ki=1020,pd=1021,md=1022,ln=1023,gd=1024,_d=1025,ui=1026,sr=1027,xd=1028,vd=1029,yd=1030,bd=1031,Md=1033,no=33776,io=33777,ro=33778,so=33779,ul=35840,dl=35841,fl=35842,pl=35843,Sd=36196,ml=37492,gl=37496,_l=37808,xl=37809,vl=37810,yl=37811,bl=37812,Ml=37813,Sl=37814,wl=37815,Tl=37816,El=37817,Al=37818,Cl=37819,Ll=37820,Pl=37821,Dl=36492,vi=3e3,$t=3001,wd=3200,Td=3201,Ed=0,Ad=1,hn="srgb",zr="srgb-linear",oo=7680,Cd=519,Rl=35044,Il="300 es",ta=1035;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ao=Math.PI/180,Ol=180/Math.PI;function fr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[s&255]+xe[s>>8&255]+xe[s>>16&255]+xe[s>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function ye(s,t,e){return Math.max(t,Math.min(e,s))}function Ld(s,t){return(s%t+t)%t}function lo(s,t,e){return(1-e)*s+e*t}function Fl(s){return(s&s-1)===0&&s!==0}function ea(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function is(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],f=i[0],p=i[3],_=i[6],b=i[1],x=i[4],M=i[7],y=i[2],E=i[5],C=i[8];return r[0]=o*f+a*b+c*y,r[3]=o*p+a*x+c*E,r[6]=o*_+a*M+c*C,r[1]=l*f+h*b+u*y,r[4]=l*p+h*x+u*E,r[7]=l*_+h*M+u*C,r[2]=d*f+m*b+g*y,r[5]=d*p+m*x+g*E,r[8]=d*_+m*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,m=l*r-o*c,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return t[0]=u*f,t[1]=(i*l-h*n)*f,t[2]=(a*n-i*o)*f,t[3]=d*f,t[4]=(h*e-i*c)*f,t[5]=(i*r-a*e)*f,t[6]=m*f,t[7]=(n*c-l*e)*f,t[8]=(o*e-n*r)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const co=new Ve;function Yc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ho={[hn]:{[zr]:di},[zr]:{[hn]:As}},Te={legacyMode:!0,get workingColorSpace(){return zr},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(ho[t]&&ho[t][e]!==void 0){const n=ho[t][e];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},le={r:0,g:0,b:0},rn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function uo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function ss(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Te.workingColorSpace){if(t=Ld(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=uo(o,r,t+1/3),this.g=uo(o,r,t),this.b=uo(o,r,t-1/3)}return Te.toWorkingColorSpace(this,i),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Te.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Te.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Te.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Te.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=hn){const n=jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Te.fromWorkingColorSpace(ss(this,le),t),ye(le.r*255,0,255)<<16^ye(le.g*255,0,255)<<8^ye(le.b*255,0,255)<<0}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(ss(this,le),e);const n=le.r,i=le.g,r=le.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(ss(this,le),e),t.r=le.r,t.g=le.g,t.b=le.b,t}getStyle(t=hn){return Te.fromWorkingColorSpace(ss(this,le),t),t!==hn?`color(${t} ${le.r} ${le.g} ${le.b})`:`rgb(${le.r*255|0},${le.g*255|0},${le.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(rn),rn.h+=t,rn.s+=e,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rn),t.getHSL(rs);const n=lo(rn.h,rs.h,e),i=lo(rn.s,rs.s,e),r=lo(rn.l,rs.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Yt.NAMES=jc;let Di;class Zc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Ur("canvas")),Di.width=t.width,Di.height=t.height;const n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Jc{constructor(t=null){this.isSource=!0,this.uuid=fr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fo(i[o].image)):r.push(fo(i[o]))}else r=fo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function fo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Zc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pd=0;class Ce extends Ai{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=an,i=an,r=Ze,o=Fr,a=ln,c=xi,l=Ce.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=fr(),this.name="",this.source=new Jc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ko:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ko:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=qc;Ce.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],f=c[2],p=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+f)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(m+1)/2,y=(_+1)/2,E=(h+d)/4,C=(u+f)/4,v=(g+p)/4;return x>M&&x>y?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=C/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=v/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=v/r),this.set(n,i,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-f)*(u-f)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-f)/b,this.z=(d-h)/b,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yi extends Ai{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ce(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ze,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kc extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ve,this.minFilter=ve,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dd extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ve,this.minFilter=ve,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],f=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=f;return}if(u!==f||c!==d||l!==m||h!==g){let p=1-a;const _=c*d+l*m+h*g+u*f,b=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const y=Math.sqrt(x),E=Math.atan2(y,_*b);p=Math.sin(p*E)/y,a=Math.sin(a*E)/y}const M=a*b;if(c=c*p+d*M,l=l*p+m*M,h=h*p+g*M,u=u*p+f*M,p===1-a){const y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,h=c*n+a*e-r*i,u=c*i+r*n-o*e,d=-r*e-o*n-a*i;return this.x=l*c+d*-r+h*-a-u*-o,this.y=h*c+d*-o+u*-r-l*-a,this.z=u*c+d*-a+l*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return po.copy(this).projectOnVector(t),this.sub(po)}reflect(t){return this.sub(po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new O,Nl=new bi;class Mi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const h=t[c],u=t[c+1],d=t[c+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const h=t.getX(c),u=t.getY(c),d=t.getZ(c);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Qn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Qn)}else n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox),mo.applyMatrix4(t.matrixWorld),this.union(mo);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),os.subVectors(this.max,_r),Ri.subVectors(t.a,_r),Ii.subVectors(t.b,_r),Oi.subVectors(t.c,_r),Fn.subVectors(Ii,Ri),Nn.subVectors(Oi,Ii),ti.subVectors(Ri,Oi);let e=[0,-Fn.z,Fn.y,0,-Nn.z,Nn.y,0,-ti.z,ti.y,Fn.z,0,-Fn.x,Nn.z,0,-Nn.x,ti.z,0,-ti.x,-Fn.y,Fn.x,0,-Nn.y,Nn.x,0,-ti.y,ti.x,0];return!go(e,Ri,Ii,Oi,os)||(e=[1,0,0,0,1,0,0,0,1],!go(e,Ri,Ii,Oi,os))?!1:(as.crossVectors(Fn,Nn),e=[as.x,as.y,as.z],go(e,Ri,Ii,Oi,os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Qn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new O,new O,new O,new O,new O,new O,new O,new O],Qn=new O,mo=new Mi,Ri=new O,Ii=new O,Oi=new O,Fn=new O,Nn=new O,ti=new O,_r=new O,os=new O,as=new O,ei=new O;function go(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ei.fromArray(s,r);const a=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),c=t.dot(ei),l=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Rd=new Mi,xr=new O,_o=new O;class wa{constructor(t=new O,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(_o)),this.expandByPoint(xr.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new O,xo=new O,ls=new O,zn=new O,vo=new O,cs=new O,yo=new O;class Id{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.direction).multiplyScalar(e).add(this.origin),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xo.copy(t).add(e).multiplyScalar(.5),ls.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(xo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ls),a=zn.dot(this.direction),c=-zn.dot(ls),l=zn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const f=1/h;u*=f,d*=f,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(ls).multiplyScalar(d).add(xo),m}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,r){vo.subVectors(e,t),cs.subVectors(n,t),yo.crossVectors(vo,cs);let o=this.direction.dot(yo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const c=a*this.direction.dot(cs.crossVectors(zn,cs));if(c<0)return null;const l=a*this.direction.dot(vo.cross(zn));if(l<0||c+l>o)return null;const h=-a*zn.dot(yo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,o,a,c,l,h,u,d,m,g,f,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=h,_[10]=u,_[14]=d,_[3]=m,_[7]=g,_[11]=f,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*u,g=a*h,f=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-f*l,e[9]=-a*c,e[2]=f-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,g=l*h,f=l*u;e[0]=d+f*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=f+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,g=l*h,f=l*u;e[0]=d-f*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=f-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,m=o*u,g=a*h,f=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+f,e[1]=c*u,e[5]=f*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=a*c,f=a*l;e[0]=c*h,e[4]=f-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-f*u}else if(t.order==="XZY"){const d=o*c,m=o*l,g=a*c,f=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+f,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=f*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Od,t,Fd)}lookAt(t,e,n){const i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Un.crossVectors(n,ze),Un.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Un.crossVectors(n,ze)),Un.normalize(),hs.crossVectors(ze,Un),i[0]=Un.x,i[4]=hs.x,i[8]=ze.x,i[1]=Un.y,i[5]=hs.y,i[9]=ze.y,i[2]=Un.z,i[6]=hs.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],f=n[6],p=n[10],_=n[14],b=n[3],x=n[7],M=n[11],y=n[15],E=i[0],C=i[4],v=i[8],w=i[12],P=i[1],z=i[5],K=i[9],R=i[13],D=i[2],B=i[6],X=i[10],j=i[14],H=i[3],nt=i[7],Q=i[11],k=i[15];return r[0]=o*E+a*P+c*D+l*H,r[4]=o*C+a*z+c*B+l*nt,r[8]=o*v+a*K+c*X+l*Q,r[12]=o*w+a*R+c*j+l*k,r[1]=h*E+u*P+d*D+m*H,r[5]=h*C+u*z+d*B+m*nt,r[9]=h*v+u*K+d*X+m*Q,r[13]=h*w+u*R+d*j+m*k,r[2]=g*E+f*P+p*D+_*H,r[6]=g*C+f*z+p*B+_*nt,r[10]=g*v+f*K+p*X+_*Q,r[14]=g*w+f*R+p*j+_*k,r[3]=b*E+x*P+M*D+y*H,r[7]=b*C+x*z+M*B+y*nt,r[11]=b*v+x*K+M*X+y*Q,r[15]=b*w+x*R+M*j+y*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],f=t[7],p=t[11],_=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*m-n*c*m)+f*(+e*c*m-e*l*d+r*o*d-i*o*m+i*l*h-r*c*h)+p*(+e*l*u-e*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+_*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],f=t[13],p=t[14],_=t[15],b=u*p*l-f*d*l+f*c*m-a*p*m-u*c*_+a*d*_,x=g*d*l-h*p*l-g*c*m+o*p*m+h*c*_-o*d*_,M=h*f*l-g*u*l+g*a*m-o*f*m-h*a*_+o*u*_,y=g*u*c-h*f*c-g*a*d+o*f*d+h*a*p-o*u*p,E=e*b+n*x+i*M+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=b*C,t[1]=(f*d*r-u*p*r-f*i*m+n*p*m+u*i*_-n*d*_)*C,t[2]=(a*p*r-f*c*r+f*i*l-n*p*l-a*i*_+n*c*_)*C,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*m-n*c*m)*C,t[4]=x*C,t[5]=(h*p*r-g*d*r+g*i*m-e*p*m-h*i*_+e*d*_)*C,t[6]=(g*c*r-o*p*r-g*i*l+e*p*l+o*i*_-e*c*_)*C,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*m+e*c*m)*C,t[8]=M*C,t[9]=(g*u*r-h*f*r-g*n*m+e*f*m+h*n*_-e*u*_)*C,t[10]=(o*f*r-g*a*r+g*n*l-e*f*l-o*n*_+e*a*_)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*m-e*a*m)*C,t[12]=y*C,t[13]=(h*f*i-g*u*i+g*n*d-e*f*d-h*n*p+e*u*p)*C,t[14]=(g*a*i-o*f*i-g*n*c+e*f*c+o*n*p-e*a*p)*C,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,m=r*h,g=r*u,f=o*h,p=o*u,_=a*u,b=c*l,x=c*h,M=c*u,y=n.x,E=n.y,C=n.z;return i[0]=(1-(f+_))*y,i[1]=(m+M)*y,i[2]=(g-x)*y,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(d+_))*E,i[6]=(p+b)*E,i[7]=0,i[8]=(g+x)*C,i[9]=(p-b)*C,i[10]=(1-(d+f))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Fi.set(i[0],i[1],i[2]).length();const o=Fi.set(i[4],i[5],i[6]).length(),a=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],sn.copy(this);const l=1/r,h=1/o,u=1/a;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){const a=this.elements,c=2*r/(e-t),l=2*r/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,c=1/(e-t),l=1/(n-i),h=1/(o-r),u=(e+t)*c,d=(n+i)*l,m=(o+r)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fi=new O,sn=new ae,Od=new O(0,0,0),Fd=new O(1,1,1),Un=new O,hs=new O,ze=new O,zl=new ae,Ul=new bi;class Kr{constructor(t=0,e=0,n=0,i=Kr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Kr.DefaultOrder="XYZ";Kr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nd=0;const kl=new O,Ni=new bi,wn=new ae,us=new O,vr=new O,zd=new O,Ud=new bi,Bl=new O(1,0,0),Vl=new O(0,1,0),Gl=new O(0,0,1),kd={type:"added"},Hl={type:"removed"};class Me extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DefaultUp.clone();const t=new O,e=new Kr,n=new bi,i=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ve}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Me.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Me.DefaultMatrixWorldAutoUpdate,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(Bl,t)}rotateY(t){return this.rotateOnAxis(Vl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bl,t)}translateY(t){return this.translateOnAxis(Vl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?us.copy(t):us.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(vr,us,this.up):wn.lookAt(us,vr,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Ni.setFromRotationMatrix(wn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(kd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Hl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Me.DefaultUp=new O(0,1,0);Me.DefaultMatrixAutoUpdate=!0;Me.DefaultMatrixWorldAutoUpdate=!0;const on=new O,Tn=new O,bo=new O,En=new O,zi=new O,Ui=new O,Wl=new O,Mo=new O,So=new O,wo=new O;class Pn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),on.subVectors(t,e),i.cross(on);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){on.subVectors(i,e),Tn.subVectors(n,e),bo.subVectors(t,e);const o=on.dot(on),a=on.dot(Tn),c=on.dot(bo),l=Tn.dot(Tn),h=Tn.dot(bo),u=o*l-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,En),En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,En),c.set(0,0),c.addScaledVector(r,En.x),c.addScaledVector(o,En.y),c.addScaledVector(a,En.z),c}static isFrontFacing(t,e,n,i){return on.subVectors(n,e),Tn.subVectors(t,e),on.cross(Tn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),on.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Pn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;zi.subVectors(i,n),Ui.subVectors(r,n),Mo.subVectors(t,n);const c=zi.dot(Mo),l=Ui.dot(Mo);if(c<=0&&l<=0)return e.copy(n);So.subVectors(t,i);const h=zi.dot(So),u=Ui.dot(So);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(zi,o);wo.subVectors(t,r);const m=zi.dot(wo),g=Ui.dot(wo);if(g>=0&&m<=g)return e.copy(r);const f=m*l-c*g;if(f<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ui,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Wl.subVectors(r,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(Wl,a);const _=1/(p+f+d);return o=f*_,a=d*_,e.copy(n).addScaledVector(zi,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Bd=0;class Gs extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=Ji,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Hc,this.blendDst=Wc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qr extends Gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const re=new O,ds=new lt;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix3(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix4(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyNormalMatrix(t),this.setXYZ(e,re.x,re.y,re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.transformDirection(t),this.setXYZ(e,re.x,re.y,re.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class th extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eh extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class nn extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vd=0;const Ye=new ae,To=new Me,ki=new O,Ue=new Mi,yr=new Mi,fe=new O;class On extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yc(t)?eh:th)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return To.lookAt(t),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(fe.addVectors(Ue.min,yr.min),Ue.expandByPoint(fe),fe.addVectors(Ue.max,yr.max),Ue.expandByPoint(fe)):(Ue.expandByPoint(yr.min),Ue.expandByPoint(yr.max))}Ue.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fe.fromBufferAttribute(a,l),c&&(ki.fromBufferAttribute(t,l),fe.add(ki)),i=Math.max(i,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let P=0;P<a;P++)l[P]=new O,h[P]=new O;const u=new O,d=new O,m=new O,g=new lt,f=new lt,p=new lt,_=new O,b=new O;function x(P,z,K){u.fromArray(i,P*3),d.fromArray(i,z*3),m.fromArray(i,K*3),g.fromArray(o,P*2),f.fromArray(o,z*2),p.fromArray(o,K*2),d.sub(u),m.sub(u),f.sub(g),p.sub(g);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(_.copy(d).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(R),b.copy(m).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(R),l[P].add(_),l[z].add(_),l[K].add(_),h[P].add(b),h[z].add(b),h[K].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let P=0,z=M.length;P<z;++P){const K=M[P],R=K.start,D=K.count;for(let B=R,X=R+D;B<X;B+=3)x(n[B+0],n[B+1],n[B+2])}const y=new O,E=new O,C=new O,v=new O;function w(P){C.fromArray(r,P*3),v.copy(C);const z=l[P];y.copy(z),y.sub(C.multiplyScalar(C.dot(z))).normalize(),E.crossVectors(v,z);const R=E.dot(h[P])<0?-1:1;c[P*4]=y.x,c[P*4+1]=y.y,c[P*4+2]=y.z,c[P*4+3]=R}for(let P=0,z=M.length;P<z;++P){const K=M[P],R=K.start,D=K.count;for(let B=R,X=R+D;B<X;B+=3)w(n[B+0]),w(n[B+1]),w(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,u=new O;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),f=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,f),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(f,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let f=0,p=c.length;f<p;f++){a.isInterleavedBufferAttribute?m=c[f]*a.data.stride+a.offset:m=c[f]*h;for(let _=0;_<h;_++)d[g++]=l[m++]}return new gn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new On,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new ae,Bi=new Id,Eo=new wa,br=new O,Mr=new O,Sr=new O,Ao=new O,fs=new O,ps=new lt,ms=new lt,gs=new lt,Co=new O,_s=new O;class cn extends Me{constructor(t=new On,e=new Qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){fs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ao.fromBufferAttribute(u,t),o?fs.addScaledVector(Ao,h):fs.addScaledVector(Ao.sub(e),h))}e.add(fs)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),t.ray.intersectsSphere(Eo)===!1)||(Xl.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(Xl),n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=u.length;m<g;m++){const f=u[m],p=i[f.materialIndex],_=Math.max(f.start,d.start),b=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let x=_,M=b;x<M;x+=3){const y=a.getX(x),E=a.getX(x+1),C=a.getX(x+2);o=xs(this,p,t,Bi,l,h,y,E,C),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let f=m,p=g;f<p;f+=3){const _=a.getX(f),b=a.getX(f+1),x=a.getX(f+2);o=xs(this,i,t,Bi,l,h,_,b,x),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=u.length;m<g;m++){const f=u[m],p=i[f.materialIndex],_=Math.max(f.start,d.start),b=Math.min(c.count,Math.min(f.start+f.count,d.start+d.count));for(let x=_,M=b;x<M;x+=3){const y=x,E=x+1,C=x+2;o=xs(this,p,t,Bi,l,h,y,E,C),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let f=m,p=g;f<p;f+=3){const _=f,b=f+1,x=f+2;o=xs(this,i,t,Bi,l,h,_,b,x),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}}}function Gd(s,t,e,n,i,r,o,a){let c;if(t.side===en?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===_i,a),c===null)return null;_s.copy(a),_s.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(_s);return l<e.near||l>e.far?null:{distance:l,point:_s.clone(),object:s}}function xs(s,t,e,n,i,r,o,a,c){s.getVertexPosition(o,br),s.getVertexPosition(a,Mr),s.getVertexPosition(c,Sr);const l=Gd(s,t,e,n,br,Mr,Sr,Co);if(l){i&&(ps.fromBufferAttribute(i,o),ms.fromBufferAttribute(i,a),gs.fromBufferAttribute(i,c),l.uv=Pn.getUV(Co,br,Mr,Sr,ps,ms,gs,new lt)),r&&(ps.fromBufferAttribute(r,o),ms.fromBufferAttribute(r,a),gs.fromBufferAttribute(r,c),l.uv2=Pn.getUV(Co,br,Mr,Sr,ps,ms,gs,new lt));const h={a:o,b:a,c,normal:new O,materialIndex:0};Pn.getNormal(br,Mr,Sr,h.normal),l.face=h}return l}class pr extends On{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new nn(l,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(u,2));function g(f,p,_,b,x,M,y,E,C,v,w){const P=M/C,z=y/v,K=M/2,R=y/2,D=E/2,B=C+1,X=v+1;let j=0,H=0;const nt=new O;for(let Q=0;Q<X;Q++){const k=Q*z-R;for(let G=0;G<B;G++){const tt=G*P-K;nt[f]=tt*b,nt[p]=k*x,nt[_]=D,l.push(nt.x,nt.y,nt.z),nt[f]=0,nt[p]=0,nt[_]=E>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(G/C),u.push(1-Q/v),j+=1}}for(let Q=0;Q<v;Q++)for(let k=0;k<C;k++){const G=d+k+B*Q,tt=d+k+B*(Q+1),et=d+(k+1)+B*(Q+1),ot=d+(k+1)+B*Q;c.push(G,tt,ot),c.push(tt,et,ot),H+=6}a.addGroup(m,H,w),m+=H,d+=j}}static fromJSON(t){return new pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ee(s){const t={};for(let e=0;e<s.length;e++){const n=or(s[e]);for(const i in n)t[i]=n[i]}return t}function Hd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function nh(s){return s.getRenderTarget()===null&&s.outputEncoding===$t?hn:zr}const Wd={clone:or,merge:Ee};var Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ih extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Je extends ih{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ol*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ao*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Gi=1;class $d extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Je(Vi,Gi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Je(Vi,Gi,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Je(Vi,Gi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Je(Vi,Gi,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Je(Vi,Gi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Je(Vi,Gi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=Dn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class rh extends Ce{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yd extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new rh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pr(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Gn});r.uniforms.tEquirect.value=e;const o=new cn(i,r),a=e.minFilter;return e.minFilter===Fr&&(e.minFilter=Ze),new $d(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Lo=new O,jd=new O,Zd=new Ve;class ri{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Lo.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Lo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zd.getNormalMatrix(t),i=this.coplanarPoint(Lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new wa,vs=new O;class Ta{constructor(t=new ri,e=new ri,n=new ri,i=new ri,r=new ri,o=new ri){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],m=n[9],g=n[10],f=n[11],p=n[12],_=n[13],b=n[14],x=n[15];return e[0].setComponents(a-i,u-c,f-d,x-p).normalize(),e[1].setComponents(a+i,u+c,f+d,x+p).normalize(),e[2].setComponents(a+r,u+l,f+m,x+_).normalize(),e[3].setComponents(a-r,u-l,f-m,x-_).normalize(),e[4].setComponents(a-o,u-h,f-g,x-b).normalize(),e[5].setComponents(a+o,u+h,f+g,x+b).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(vs.x=i.normal.x>0?t.max.x:t.min.x,vs.y=i.normal.y>0?t.max.y:t.min.y,vs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Jd(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,m=h.updateRange;s.bindBuffer(u,l),m.count===-1?s.bufferSubData(u,0,d):(e?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class Ea extends On{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],f=[],p=[];for(let _=0;_<h;_++){const b=_*d-o;for(let x=0;x<l;x++){const M=x*u-r;g.push(M,-b,0),f.push(0,0,1),p.push(x/a),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let b=0;b<a;b++){const x=b+l*_,M=b+l*(_+1),y=b+1+l*(_+1),E=b+1+l*_;m.push(x,M,E),m.push(M,y,E)}this.setIndex(m),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(f,3)),this.setAttribute("uv",new nn(p,2))}static fromJSON(t){return new Ea(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf="vec3 transformed = vec3( position );",of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,lf=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,cf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xf=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,yf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Af=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,zf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Gf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Yf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,jf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,fp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_p=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ip=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Hp=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Wp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Xp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,qp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$p=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Yp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,jp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,im=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,om=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,gm=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ym=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,wm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Lm=`uniform float rotation;
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
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dt={alphamap_fragment:Kd,alphamap_pars_fragment:Qd,alphatest_fragment:tf,alphatest_pars_fragment:ef,aomap_fragment:nf,aomap_pars_fragment:rf,begin_vertex:sf,beginnormal_vertex:of,bsdfs:af,iridescence_fragment:lf,bumpmap_pars_fragment:cf,clipping_planes_fragment:hf,clipping_planes_pars_fragment:uf,clipping_planes_pars_vertex:df,clipping_planes_vertex:ff,color_fragment:pf,color_pars_fragment:mf,color_pars_vertex:gf,color_vertex:_f,common:xf,cube_uv_reflection_fragment:vf,defaultnormal_vertex:yf,displacementmap_pars_vertex:bf,displacementmap_vertex:Mf,emissivemap_fragment:Sf,emissivemap_pars_fragment:wf,encodings_fragment:Tf,encodings_pars_fragment:Ef,envmap_fragment:Af,envmap_common_pars_fragment:Cf,envmap_pars_fragment:Lf,envmap_pars_vertex:Pf,envmap_physical_pars_fragment:Gf,envmap_vertex:Df,fog_vertex:Rf,fog_pars_vertex:If,fog_fragment:Of,fog_pars_fragment:Ff,gradientmap_pars_fragment:Nf,lightmap_fragment:zf,lightmap_pars_fragment:Uf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Bf,lights_pars_begin:Vf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:qf,lights_physical_fragment:$f,lights_physical_pars_fragment:Yf,lights_fragment_begin:jf,lights_fragment_maps:Zf,lights_fragment_end:Jf,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:ep,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:rp,map_particle_pars_fragment:sp,metalnessmap_fragment:op,metalnessmap_pars_fragment:ap,morphcolor_vertex:lp,morphnormal_vertex:cp,morphtarget_pars_vertex:hp,morphtarget_vertex:up,normal_fragment_begin:dp,normal_fragment_maps:fp,normal_pars_fragment:pp,normal_pars_vertex:mp,normal_vertex:gp,normalmap_pars_fragment:_p,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:vp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:bp,output_fragment:Mp,packing:Sp,premultiplied_alpha_fragment:wp,project_vertex:Tp,dithering_fragment:Ep,dithering_pars_fragment:Ap,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Pp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Rp,shadowmask_pars_fragment:Ip,skinbase_vertex:Op,skinning_pars_vertex:Fp,skinning_vertex:Np,skinnormal_vertex:zp,specularmap_fragment:Up,specularmap_pars_fragment:kp,tonemapping_fragment:Bp,tonemapping_pars_fragment:Vp,transmission_fragment:Gp,transmission_pars_fragment:Hp,uv_pars_fragment:Wp,uv_pars_vertex:Xp,uv_vertex:qp,uv2_pars_fragment:$p,uv2_pars_vertex:Yp,uv2_vertex:jp,worldpos_vertex:Zp,background_vert:Jp,background_frag:Kp,backgroundCube_vert:Qp,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:rm,distanceRGBA_vert:sm,distanceRGBA_frag:om,equirect_vert:am,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:hm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:fm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:_m,meshnormal_frag:xm,meshphong_vert:vm,meshphong_frag:ym,meshphysical_vert:bm,meshphysical_frag:Mm,meshtoon_vert:Sm,meshtoon_frag:wm,points_vert:Tm,points_frag:Em,shadow_vert:Am,shadow_frag:Cm,sprite_vert:Lm,sprite_frag:Pm},ht={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ve},uv2Transform:{value:new Ve},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}}},dn={basic:{uniforms:Ee([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ee([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ee([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ee([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ee([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ee([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ee([ht.points,ht.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ee([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ee([ht.common,ht.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ee([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ee([ht.sprite,ht.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ee([ht.common,ht.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ee([ht.lights,ht.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};dn.physical={uniforms:Ee([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new lt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const ys={r:0,b:0,g:0};function Dm(s,t,e,n,i,r,o){const a=new Yt(0);let c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(p,_){let b=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x));const M=s.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?f(a,c):x&&x.isColor&&(f(x,1),b=!0),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Vs)?(h===void 0&&(h=new cn(new pr(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:or(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=x.encoding!==$t,(u!==x||d!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new cn(new Ea(2,2),new Si({name:"BackgroundMaterial",uniforms:or(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=x.encoding!==$t,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function f(p,_){p.getRGB(ys,nh(s)),n.buffers.color.setClear(ys.r,ys.g,ys.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),c=_,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,f(a,c)},render:g}}function Rm(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,h=!1;function u(D,B,X,j,H){let nt=!1;if(o){const Q=f(j,X,B);l!==Q&&(l=Q,m(l.object)),nt=_(D,j,X,H),nt&&b(D,j,X,H)}else{const Q=B.wireframe===!0;(l.geometry!==j.id||l.program!==X.id||l.wireframe!==Q)&&(l.geometry=j.id,l.program=X.id,l.wireframe=Q,nt=!0)}H!==null&&e.update(H,34963),(nt||h)&&(h=!1,v(D,B,X,j),H!==null&&s.bindBuffer(34963,e.get(H).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function f(D,B,X){const j=X.wireframe===!0;let H=a[D.id];H===void 0&&(H={},a[D.id]=H);let nt=H[B.id];nt===void 0&&(nt={},H[B.id]=nt);let Q=nt[j];return Q===void 0&&(Q=p(d()),nt[j]=Q),Q}function p(D){const B=[],X=[],j=[];for(let H=0;H<i;H++)B[H]=0,X[H]=0,j[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:j,object:D,attributes:{},index:null}}function _(D,B,X,j){const H=l.attributes,nt=B.attributes;let Q=0;const k=X.getAttributes();for(const G in k)if(k[G].location>=0){const et=H[G];let ot=nt[G];if(ot===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ot=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ot=D.instanceColor)),et===void 0||et.attribute!==ot||ot&&et.data!==ot.data)return!0;Q++}return l.attributesNum!==Q||l.index!==j}function b(D,B,X,j){const H={},nt=B.attributes;let Q=0;const k=X.getAttributes();for(const G in k)if(k[G].location>=0){let et=nt[G];et===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(et=D.instanceColor));const ot={};ot.attribute=et,et&&et.data&&(ot.data=et.data),H[G]=ot,Q++}l.attributes=H,l.attributesNum=Q,l.index=j}function x(){const D=l.newAttributes;for(let B=0,X=D.length;B<X;B++)D[B]=0}function M(D){y(D,0)}function y(D,B){const X=l.newAttributes,j=l.enabledAttributes,H=l.attributeDivisors;X[D]=1,j[D]===0&&(s.enableVertexAttribArray(D),j[D]=1),H[D]!==B&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),H[D]=B)}function E(){const D=l.newAttributes,B=l.enabledAttributes;for(let X=0,j=B.length;X<j;X++)B[X]!==D[X]&&(s.disableVertexAttribArray(X),B[X]=0)}function C(D,B,X,j,H,nt){n.isWebGL2===!0&&(X===5124||X===5125)?s.vertexAttribIPointer(D,B,X,H,nt):s.vertexAttribPointer(D,B,X,j,H,nt)}function v(D,B,X,j){if(n.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const H=j.attributes,nt=X.getAttributes(),Q=B.defaultAttributeValues;for(const k in nt){const G=nt[k];if(G.location>=0){let tt=H[k];if(tt===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),tt!==void 0){const et=tt.normalized,ot=tt.itemSize,$=e.get(tt);if($===void 0)continue;const Ct=$.buffer,_t=$.type,Tt=$.bytesPerElement;if(tt.isInterleavedBufferAttribute){const ut=tt.data,Pt=ut.stride,J=tt.offset;if(ut.isInstancedInterleavedBuffer){for(let Z=0;Z<G.locationSize;Z++)y(G.location+Z,ut.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Z=0;Z<G.locationSize;Z++)M(G.location+Z);s.bindBuffer(34962,Ct);for(let Z=0;Z<G.locationSize;Z++)C(G.location+Z,ot/G.locationSize,_t,et,Pt*Tt,(J+ot/G.locationSize*Z)*Tt)}else{if(tt.isInstancedBufferAttribute){for(let ut=0;ut<G.locationSize;ut++)y(G.location+ut,tt.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ut=0;ut<G.locationSize;ut++)M(G.location+ut);s.bindBuffer(34962,Ct);for(let ut=0;ut<G.locationSize;ut++)C(G.location+ut,ot/G.locationSize,_t,et,ot*Tt,ot/G.locationSize*ut*Tt)}}else if(Q!==void 0){const et=Q[k];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(G.location,et);break;case 3:s.vertexAttrib3fv(G.location,et);break;case 4:s.vertexAttrib4fv(G.location,et);break;default:s.vertexAttrib1fv(G.location,et)}}}}E()}function w(){K();for(const D in a){const B=a[D];for(const X in B){const j=B[X];for(const H in j)g(j[H].object),delete j[H];delete B[X]}delete a[D]}}function P(D){if(a[D.id]===void 0)return;const B=a[D.id];for(const X in B){const j=B[X];for(const H in j)g(j[H].object),delete j[H];delete B[X]}delete a[D.id]}function z(D){for(const B in a){const X=a[B];if(X[D.id]===void 0)continue;const j=X[D.id];for(const H in j)g(j[H].object),delete j[H];delete X[D.id]}}function K(){R(),h=!0,l!==c&&(l=c,m(l.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:K,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:M,disableUnusedAttributes:E}}function Im(s,t,e,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,h){s.drawArrays(r,l,h),e.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,l,h,u),e.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function Om(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),f=s.getParameter(34921),p=s.getParameter(36347),_=s.getParameter(36348),b=s.getParameter(36349),x=d>0,M=o||t.has("OES_texture_float"),y=x&&M,E=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:E}}function Fm(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ri,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,m){const g=u.length!==0||d||n!==0||i;return i=d,e=h(u,m,0),n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,l()},this.setState=function(u,d,m){const g=u.clippingPlanes,f=u.clipIntersection,p=u.clipShadows,_=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const b=r?0:n,x=b*4;let M=_.clippingState||null;c.value=M,M=h(g,d,x,m);for(let y=0;y!==x;++y)M[y]=e[y];_.clippingState=M,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const f=u!==null?u.length:0;let p=null;if(f!==0){if(p=c.value,g!==!0||p===null){const _=m+f*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,M=m;x!==f;++x,M+=4)o.copy(u[x]).applyMatrix4(b,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function Nm(s){let t=new WeakMap;function e(o,a){return a===Zo?o.mapping=ir:a===Jo&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Zo||a===Jo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Yd(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class oh extends ih{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,ql=[.125,.215,.35,.446,.526,.582],ai=20,Po=new oh,$l=new Yt;let Do=null;const si=(1+Math.sqrt(5))/2,Wi=1/si,Yl=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,si,Wi),new O(0,si,-Wi),new O(Wi,0,si),new O(-Wi,0,si),new O(si,Wi,0),new O(-si,Wi,0)];class jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Do=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do),t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Nr,format:ln,encoding:vi,depthBuffer:!1},i=Zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(r)),this._blurMaterial=Um(r,t,e)}return i}_compileMaterial(t){const e=new cn(this._lodPlanes[0],t);this._renderer.compile(e,Po)}_sceneToCubeUV(t,e,n,i){const a=new Je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($l),h.toneMapping=Dn,h.autoClear=!1;const m=new Qr({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new cn(new pr,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy($l),f=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):b===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const x=this._cubeSize;bs(i,b*x,_>2?x:0,x,x),h.setRenderTarget(i),f&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ir||t.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new cn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;bs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Po)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Yl[(i-1)%Yl.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new cn(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ai-1),f=r/g,p=isFinite(r)?1+Math.floor(h*f):ai;p>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const _=[];let b=0;for(let C=0;C<ai;++C){const v=C/f,w=Math.exp(-v*v/2);_.push(w),C===0?b+=w:C<p&&(b+=2*w)}for(let C=0;C<_.length;C++)_[C]=_[C]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const M=this._sizeLods[i],y=3*M*(i>x-$i?i-x+$i:0),E=4*(this._cubeSize-M);bs(e,y,E,3*M,2*M),c.setRenderTarget(e),c.render(u,Po)}}function zm(s){const t=[],e=[],n=[];let i=s;const r=s-$i+1+ql.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-$i?c=ql[o-s+$i-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,f=3,p=2,_=1,b=new Float32Array(f*g*m),x=new Float32Array(p*g*m),M=new Float32Array(_*g*m);for(let E=0;E<m;E++){const C=E%3*2/3-1,v=E>2?0:-1,w=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];b.set(w,f*g*E),x.set(d,p*g*E);const P=[E,E,E,E,E,E];M.set(P,_*g*E)}const y=new On;y.setAttribute("position",new gn(b,f)),y.setAttribute("uv",new gn(x,p)),y.setAttribute("faceIndex",new gn(M,_)),t.push(y),i>$i&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zl(s,t,e){const n=new yi(s,t,e);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Um(s,t,e){const n=new Float32Array(ai),i=new O(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Jl(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Kl(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function km(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zo||c===Jo,h=c===ir||c===rr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new jl(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new jl(s));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Bm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vm(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],34962);const m=u.morphAttributes;for(const g in m){const f=m[g];for(let p=0,_=f.length;p<_;p++)t.update(f[p],34962)}}function l(u){const d=[],m=u.index,g=u.attributes.position;let f=0;if(m!==null){const b=m.array;f=m.version;for(let x=0,M=b.length;x<M;x+=3){const y=b[x+0],E=b[x+1],C=b[x+2];d.push(y,E,E,C,C,y)}}else{const b=g.array;f=g.version;for(let x=0,M=b.length/3-1;x<M;x+=3){const y=x+0,E=x+1,C=x+2;d.push(y,E,E,C,C,y)}}const p=new(Yc(d)?eh:th)(d,1);p.version=f;const _=r.get(u);_&&t.remove(_),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Gm(s,t,e,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,m){s.drawElements(r,m,a,d*c),e.update(m,r,1)}function u(d,m,g){if(g===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,a,d*c,g),e.update(m,r,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Hm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Wm(s,t){return s[0]-t[0]}function Xm(s,t){return Math.abs(t[1])-Math.abs(s[1])}function qm(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new pe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u,d){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0;let _=r.get(h);if(_===void 0||_.count!==p){let X=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",X)};var g=X;_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let P=0;M===!0&&(P=1),y===!0&&(P=2),E===!0&&(P=3);let z=h.attributes.position.count*P,K=1;z>t.maxTextureSize&&(K=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const R=new Float32Array(z*K*4*p),D=new Kc(R,z,K,p);D.type=ci,D.needsUpdate=!0;const B=P*4;for(let j=0;j<p;j++){const H=C[j],nt=v[j],Q=w[j],k=z*K*4*j;for(let G=0;G<H.count;G++){const tt=G*B;M===!0&&(o.fromBufferAttribute(H,G),R[k+tt+0]=o.x,R[k+tt+1]=o.y,R[k+tt+2]=o.z,R[k+tt+3]=0),y===!0&&(o.fromBufferAttribute(nt,G),R[k+tt+4]=o.x,R[k+tt+5]=o.y,R[k+tt+6]=o.z,R[k+tt+7]=0),E===!0&&(o.fromBufferAttribute(Q,G),R[k+tt+8]=o.x,R[k+tt+9]=o.y,R[k+tt+10]=o.z,R[k+tt+11]=Q.itemSize===4?o.w:1)}}_={count:p,texture:D,size:new lt(z,K)},r.set(h,_),h.addEventListener("dispose",X)}let b=0;for(let M=0;M<m.length;M++)b+=m[M];const x=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const f=m===void 0?0:m.length;let p=n[h.id];if(p===void 0||p.length!==f){p=[];for(let y=0;y<f;y++)p[y]=[y,0];n[h.id]=p}for(let y=0;y<f;y++){const E=p[y];E[0]=y,E[1]=m[y]}p.sort(Xm);for(let y=0;y<8;y++)y<f&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Wm);const _=h.morphAttributes.position,b=h.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const E=a[y],C=E[0],v=E[1];C!==Number.MAX_SAFE_INTEGER&&v?(_&&h.getAttribute("morphTarget"+y)!==_[C]&&h.setAttribute("morphTarget"+y,_[C]),b&&h.getAttribute("morphNormal"+y)!==b[C]&&h.setAttribute("morphNormal"+y,b[C]),i[y]=v,x+=v):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),b&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const M=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function $m(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const ah=new Ce,lh=new Kc,ch=new Dd,hh=new rh,Ql=[],tc=[],ec=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function mr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ql[i];if(r===void 0&&(r=new Float32Array(i),Ql[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function he(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Hs(s,t){let e=tc[t];e===void 0&&(e=new Int32Array(t),tc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ym(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function jm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;s.uniform2fv(this.addr,t),he(e,t)}}function Zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;s.uniform3fv(this.addr,t),he(e,t)}}function Jm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;s.uniform4fv(this.addr,t),he(e,t)}}function Km(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;ic.set(n),s.uniformMatrix2fv(this.addr,!1,ic),he(e,n)}}function Qm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;nc.set(n),s.uniformMatrix3fv(this.addr,!1,nc),he(e,n)}}function tg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;ec.set(n),s.uniformMatrix4fv(this.addr,!1,ec),he(e,n)}}function eg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ng(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;s.uniform2iv(this.addr,t),he(e,t)}}function ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;s.uniform3iv(this.addr,t),he(e,t)}}function rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;s.uniform4iv(this.addr,t),he(e,t)}}function sg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;s.uniform2uiv(this.addr,t),he(e,t)}}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;s.uniform3uiv(this.addr,t),he(e,t)}}function lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;s.uniform4uiv(this.addr,t),he(e,t)}}function cg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||ah,i)}function hg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ch,i)}function ug(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hh,i)}function dg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lh,i)}function fg(s){switch(s){case 5126:return Ym;case 35664:return jm;case 35665:return Zm;case 35666:return Jm;case 35674:return Km;case 35675:return Qm;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return sg;case 36294:return og;case 36295:return ag;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}function pg(s,t){s.uniform1fv(this.addr,t)}function mg(s,t){const e=mr(t,this.size,2);s.uniform2fv(this.addr,e)}function gg(s,t){const e=mr(t,this.size,3);s.uniform3fv(this.addr,e)}function _g(s,t){const e=mr(t,this.size,4);s.uniform4fv(this.addr,e)}function xg(s,t){const e=mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function vg(s,t){const e=mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function yg(s,t){const e=mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function bg(s,t){s.uniform1iv(this.addr,t)}function Mg(s,t){s.uniform2iv(this.addr,t)}function Sg(s,t){s.uniform3iv(this.addr,t)}function wg(s,t){s.uniform4iv(this.addr,t)}function Tg(s,t){s.uniform1uiv(this.addr,t)}function Eg(s,t){s.uniform2uiv(this.addr,t)}function Ag(s,t){s.uniform3uiv(this.addr,t)}function Cg(s,t){s.uniform4uiv(this.addr,t)}function Lg(s,t,e){const n=this.cache,i=t.length,r=Hs(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ah,r[o])}function Pg(s,t,e){const n=this.cache,i=t.length,r=Hs(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ch,r[o])}function Dg(s,t,e){const n=this.cache,i=t.length,r=Hs(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||hh,r[o])}function Rg(s,t,e){const n=this.cache,i=t.length,r=Hs(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||lh,r[o])}function Ig(s){switch(s){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return xg;case 35675:return vg;case 35676:return yg;case 5124:case 35670:return bg;case 35667:case 35671:return Mg;case 35668:case 35672:return Sg;case 35669:case 35673:return wg;case 5125:return Tg;case 36294:return Eg;case 36295:return Ag;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Rg}}class Og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=fg(e.type)}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Ig(e.type)}}class Ng{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ro=/(\w+)(\])?(\[|\.)?/g;function rc(s,t){s.seq.push(t),s.map[t.id]=t}function zg(s,t,e){const n=s.name,i=n.length;for(Ro.lastIndex=0;;){const r=Ro.exec(n),o=Ro.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){rc(e,l===void 0?new Og(a,s,t):new Fg(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ng(a),rc(e,u)),e=u}}}class Cs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);zg(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function sc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Ug=0;function kg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Bg(s){switch(s){case vi:return["Linear","( value )"];case $t:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function oc(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+kg(s.getShaderSource(t),o)}else return i}function Vg(s,t){const e=Bg(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Gg(s,t){let e;switch(t){case id:e="Linear";break;case rd:e="Reinhard";break;case sd:e="OptimizedCineon";break;case od:e="ACESFilmic";break;case ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Hg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Er).join(`
`)}function Wg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xg(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Er(s){return s!==""}function ac(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(s){return s.replace(qg,$g)}function $g(s,t){const e=Dt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return na(e)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(s){return s.replace(Yg,jg)}function jg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Tr&&(t="SHADOWMAP_TYPE_VSM"),t}function Jg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ir:case rr:t="ENVMAP_TYPE_CUBE";break;case Vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function Qg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xc:t="ENVMAP_BLENDING_MULTIPLY";break;case ed:t="ENVMAP_BLENDING_MIX";break;case nd:t="ENVMAP_BLENDING_ADD";break}return t}function t_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function e_(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Zg(e),l=Jg(e),h=Kg(e),u=Qg(e),d=t_(e),m=e.isWebGL2?"":Hg(e),g=Wg(r),f=i.createProgram();let p,_,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Er).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Er).join(`
`),_.length>0&&(_+=`
`)):(p=[hc(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),_=[m,hc(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.encodings_pars_fragment,Vg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Er).join(`
`)),o=na(o),o=ac(o,e),o=lc(o,e),a=na(a),a=ac(a,e),a=lc(a,e),o=cc(o),a=cc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=b+p+o,M=b+_+a,y=sc(i,35633,x),E=sc(i,35632,M);if(i.attachShader(f,y),i.attachShader(f,E),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),s.debug.checkShaderErrors){const w=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(y).trim(),z=i.getShaderInfoLog(E).trim();let K=!0,R=!0;if(i.getProgramParameter(f,35714)===!1){K=!1;const D=oc(i,y,"vertex"),B=oc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+w+`
`+D+`
`+B)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(P===""||z==="")&&(R=!1);R&&(this.diagnostics={runnable:K,programLog:w,vertexShader:{log:P,prefix:p},fragmentShader:{log:z,prefix:_}})}i.deleteShader(y),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new Cs(i,f)),C};let v;return this.getAttributes=function(){return v===void 0&&(v=Xg(i,f)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=y,this.fragmentShader=E,this}let n_=0;class i_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new r_(t),e.set(t,n)),n}}class r_{constructor(t){this.id=n_++,this.code=t,this.usedTimes=0}}function s_(s,t,e,n,i,r,o){const a=new Qc,c=new i_,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v,w,P,z,K){const R=z.fog,D=K.geometry,B=v.isMeshStandardMaterial?z.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||B),j=X&&X.mapping===Vs?X.image.height:null,H=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const nt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=nt!==void 0?nt.length:0;let k=0;D.morphAttributes.position!==void 0&&(k=1),D.morphAttributes.normal!==void 0&&(k=2),D.morphAttributes.color!==void 0&&(k=3);let G,tt,et,ot;if(H){const Pt=dn[H];G=Pt.vertexShader,tt=Pt.fragmentShader}else G=v.vertexShader,tt=v.fragmentShader,c.update(v),et=c.getVertexShaderID(v),ot=c.getFragmentShaderID(v);const $=s.getRenderTarget(),Ct=v.alphaTest>0,_t=v.clearcoat>0,Tt=v.iridescence>0;return{isWebGL2:h,shaderID:H,shaderName:v.type,vertexShader:G,fragmentShader:tt,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:d,outputEncoding:$===null?s.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:vi,map:!!v.map,matcap:!!v.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:j,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Ad,tangentSpaceNormalMap:v.normalMapType===Ed,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===$t,clearcoat:_t,clearcoatMap:_t&&!!v.clearcoatMap,clearcoatRoughnessMap:_t&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:_t&&!!v.clearcoatNormalMap,iridescence:Tt,iridescenceMap:Tt&&!!v.iridescenceMap,iridescenceThicknessMap:Tt&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ji,alphaMap:!!v.alphaMap,alphaTest:Ct,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!R,useFog:v.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:Dn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Sa,flipSided:v.side===en,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)w.push(P),w.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(_(w,v),b(w,v),w.push(s.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),v.push(a.mask)}function x(v){const w=g[v.type];let P;if(w){const z=dn[w];P=Wd.clone(z.uniforms)}else P=v.uniforms;return P}function M(v,w){let P;for(let z=0,K=l.length;z<K;z++){const R=l[z];if(R.cacheKey===w){P=R,++P.usedTimes;break}}return P===void 0&&(P=new e_(s,w,v,r),l.push(P)),P}function y(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function E(v){c.remove(v)}function C(){c.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:y,releaseShaderCache:E,programs:l,dispose:C}}function o_(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function a_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function uc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function dc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,m,g,f,p){let _=s[t];return _===void 0?(_={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:f,group:p},s[t]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=f,_.group=p),t++,_}function a(u,d,m,g,f,p){const _=o(u,d,m,g,f,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function c(u,d,m,g,f,p){const _=o(u,d,m,g,f,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(u,d){e.length>1&&e.sort(u||a_),n.length>1&&n.sort(d||uc),i.length>1&&i.sort(d||uc)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function l_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new dc,s.set(n,[o])):i>=r.length?(o=new dc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function c_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Yt};break;case"SpotLight":e={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return s[t.id]=e,e}}}function h_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let u_=0;function d_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function f_(s,t){const e=new c_,n=h_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new O);const r=new O,o=new ae,a=new ae;function c(h,u){let d=0,m=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,_=0,b=0,x=0,M=0,y=0,E=0,C=0,v=0;h.sort(d_);const w=u!==!0?Math.PI:1;for(let z=0,K=h.length;z<K;z++){const R=h[z],D=R.color,B=R.intensity,X=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=D.r*B*w,m+=D.g*B*w,g+=D.b*B*w;else if(R.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],B);else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){const nt=R.shadow,Q=n.get(R);Q.shadowBias=nt.bias,Q.shadowNormalBias=nt.normalBias,Q.shadowRadius=nt.radius,Q.shadowMapSize=nt.mapSize,i.directionalShadow[f]=Q,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=R.shadow.matrix,M++}i.directional[f]=H,f++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(D).multiplyScalar(B*w),H.distance=X,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[_]=H;const nt=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,nt.updateMatrices(R),R.castShadow&&v++),i.spotLightMatrix[_]=nt.matrix,R.castShadow){const Q=n.get(R);Q.shadowBias=nt.bias,Q.shadowNormalBias=nt.normalBias,Q.shadowRadius=nt.radius,Q.shadowMapSize=nt.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=j,E++}_++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(D).multiplyScalar(B),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[b]=H,b++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*w),H.distance=R.distance,H.decay=R.decay,R.castShadow){const nt=R.shadow,Q=n.get(R);Q.shadowBias=nt.bias,Q.shadowNormalBias=nt.normalBias,Q.shadowRadius=nt.radius,Q.shadowMapSize=nt.mapSize,Q.shadowCameraNear=nt.camera.near,Q.shadowCameraFar=nt.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=R.shadow.matrix,y++}i.point[p]=H,p++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(B*w),H.groundColor.copy(R.groundColor).multiplyScalar(B*w),i.hemi[x]=H,x++}}b>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==b||P.hemiLength!==x||P.numDirectionalShadows!==M||P.numPointShadows!==y||P.numSpotShadows!==E||P.numSpotMaps!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=b,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+C-v,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=v,P.directionalLength=f,P.pointLength=p,P.spotLength=_,P.rectAreaLength=b,P.hemiLength=x,P.numDirectionalShadows=M,P.numPointShadows=y,P.numSpotShadows=E,P.numSpotMaps=C,i.version=u_++)}function l(h,u){let d=0,m=0,g=0,f=0,p=0;const _=u.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const M=h[b];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),d++}else if(M.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const y=i.rectArea[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),a.identity(),o.copy(M.matrixWorld),o.premultiply(_),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),f++}else if(M.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:i}}function fc(s,t){const e=new f_(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function p_(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new fc(s,t),e.set(r,[c])):o>=a.length?(c=new fc(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class m_ extends Gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class g_ extends Gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`;function v_(s,t,e){let n=new Ta;const i=new lt,r=new lt,o=new pe,a=new m_({depthPacking:Td}),c=new g_,l={},h=e.maxTextureSize,u={0:en,1:_i,2:Sa},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:__,fragmentShader:x_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new On;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new cn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc,this.render=function(M,y,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const C=s.getRenderTarget(),v=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Gn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let z=0,K=M.length;z<K;z++){const R=M[z],D=R.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const B=D.getFrameExtents();if(i.multiply(B),r.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/B.x),i.x=r.x*B.x,D.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/B.y),i.y=r.y*B.y,D.mapSize.y=r.y)),D.map===null){const j=this.type!==Tr?{minFilter:ve,magFilter:ve}:{};D.map=new yi(i.x,i.y,j),D.map.texture.name=R.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const X=D.getViewportCount();for(let j=0;j<X;j++){const H=D.getViewport(j);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),P.viewport(o),D.updateMatrices(R,j),n=D.getFrustum(),x(y,E,D.camera,R,this.type)}D.isPointLightShadow!==!0&&this.type===Tr&&_(D,E),D.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(C,v,w)};function _(M,y){const E=t.update(f);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new yi(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(y,null,E,d,f,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(y,null,E,m,f,null)}function b(M,y,E,C,v,w){let P=null;const z=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(z!==void 0)P=z;else if(P=E.isPointLight===!0?c:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const K=P.uuid,R=y.uuid;let D=l[K];D===void 0&&(D={},l[K]=D);let B=D[R];B===void 0&&(B=P.clone(),D[R]=B),P=B}return P.visible=y.visible,P.wireframe=y.wireframe,w===Tr?P.side=y.shadowSide!==null?y.shadowSide:y.side:P.side=y.shadowSide!==null?y.shadowSide:u[y.side],P.alphaMap=y.alphaMap,P.alphaTest=y.alphaTest,P.map=y.map,P.clipShadows=y.clipShadows,P.clippingPlanes=y.clippingPlanes,P.clipIntersection=y.clipIntersection,P.displacementMap=y.displacementMap,P.displacementScale=y.displacementScale,P.displacementBias=y.displacementBias,P.wireframeLinewidth=y.wireframeLinewidth,P.linewidth=y.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=C,P.farDistance=v),P}function x(M,y,E,C,v){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===Tr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const z=t.update(M),K=M.material;if(Array.isArray(K)){const R=z.groups;for(let D=0,B=R.length;D<B;D++){const X=R[D],j=K[X.materialIndex];if(j&&j.visible){const H=b(M,j,C,E.near,E.far,v);s.renderBufferDirect(E,null,z,H,M,X)}}}else if(K.visible){const R=b(M,K,C,E.near,E.far,v);s.renderBufferDirect(E,null,z,R,M,null)}}const P=M.children;for(let z=0,K=P.length;z<K;z++)x(P[z],y,E,C,v)}}function y_(s,t,e){const n=e.isWebGL2;function i(){let I=!1;const W=new pe;let rt=null;const mt=new pe(0,0,0,0);return{setMask:function(bt){rt!==bt&&!I&&(s.colorMask(bt,bt,bt,bt),rt=bt)},setLocked:function(bt){I=bt},setClear:function(bt,Gt,ue,_e,jn){jn===!0&&(bt*=_e,Gt*=_e,ue*=_e),W.set(bt,Gt,ue,_e),mt.equals(W)===!1&&(s.clearColor(bt,Gt,ue,_e),mt.copy(W))},reset:function(){I=!1,rt=null,mt.set(-1,0,0,0)}}}function r(){let I=!1,W=null,rt=null,mt=null;return{setTest:function(bt){bt?Ct(2929):_t(2929)},setMask:function(bt){W!==bt&&!I&&(s.depthMask(bt),W=bt)},setFunc:function(bt){if(rt!==bt){switch(bt){case Yu:s.depthFunc(512);break;case ju:s.depthFunc(519);break;case Zu:s.depthFunc(513);break;case jo:s.depthFunc(515);break;case Ju:s.depthFunc(514);break;case Ku:s.depthFunc(518);break;case Qu:s.depthFunc(516);break;case td:s.depthFunc(517);break;default:s.depthFunc(515)}rt=bt}},setLocked:function(bt){I=bt},setClear:function(bt){mt!==bt&&(s.clearDepth(bt),mt=bt)},reset:function(){I=!1,W=null,rt=null,mt=null}}}function o(){let I=!1,W=null,rt=null,mt=null,bt=null,Gt=null,ue=null,_e=null,jn=null;return{setTest:function(jt){I||(jt?Ct(2960):_t(2960))},setMask:function(jt){W!==jt&&!I&&(s.stencilMask(jt),W=jt)},setFunc:function(jt,yn,$e){(rt!==jt||mt!==yn||bt!==$e)&&(s.stencilFunc(jt,yn,$e),rt=jt,mt=yn,bt=$e)},setOp:function(jt,yn,$e){(Gt!==jt||ue!==yn||_e!==$e)&&(s.stencilOp(jt,yn,$e),Gt=jt,ue=yn,_e=$e)},setLocked:function(jt){I=jt},setClear:function(jt){jn!==jt&&(s.clearStencil(jt),jn=jt)},reset:function(){I=!1,W=null,rt=null,mt=null,bt=null,Gt=null,ue=null,_e=null,jn=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,f=[],p=null,_=!1,b=null,x=null,M=null,y=null,E=null,C=null,v=null,w=!1,P=null,z=null,K=null,R=null,D=null;const B=s.getParameter(35661);let X=!1,j=0;const H=s.getParameter(7938);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=j>=2);let nt=null,Q={};const k=s.getParameter(3088),G=s.getParameter(2978),tt=new pe().fromArray(k),et=new pe().fromArray(G);function ot(I,W,rt){const mt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(I,bt),s.texParameteri(I,10241,9728),s.texParameteri(I,10240,9728);for(let Gt=0;Gt<rt;Gt++)s.texImage2D(W+Gt,0,6408,1,1,0,6408,5121,mt);return bt}const $={};$[3553]=ot(3553,3553,1),$[34067]=ot(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ct(2929),c.setFunc(jo),ct(!1),At(rl),Ct(2884),at(Gn);function Ct(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function _t(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Tt(I,W){return m[I]!==W?(s.bindFramebuffer(I,W),m[I]=W,n&&(I===36009&&(m[36160]=W),I===36160&&(m[36009]=W)),!0):!1}function ut(I,W){let rt=f,mt=!1;if(I)if(rt=g.get(W),rt===void 0&&(rt=[],g.set(W,rt)),I.isWebGLMultipleRenderTargets){const bt=I.texture;if(rt.length!==bt.length||rt[0]!==36064){for(let Gt=0,ue=bt.length;Gt<ue;Gt++)rt[Gt]=36064+Gt;rt.length=bt.length,mt=!0}}else rt[0]!==36064&&(rt[0]=36064,mt=!0);else rt[0]!==1029&&(rt[0]=1029,mt=!0);mt&&(e.isWebGL2?s.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Pt(I){return p!==I?(s.useProgram(I),p=I,!0):!1}const J={[qi]:32774,[zu]:32778,[Uu]:32779};if(n)J[ll]=32775,J[cl]=32776;else{const I=t.get("EXT_blend_minmax");I!==null&&(J[ll]=I.MIN_EXT,J[cl]=I.MAX_EXT)}const Z={[ku]:0,[Bu]:1,[Vu]:768,[Hc]:770,[$u]:776,[Xu]:774,[Hu]:772,[Gu]:769,[Wc]:771,[qu]:775,[Wu]:773};function at(I,W,rt,mt,bt,Gt,ue,_e){if(I===Gn){_===!0&&(_t(3042),_=!1);return}if(_===!1&&(Ct(3042),_=!0),I!==Nu){if(I!==b||_e!==w){if((x!==qi||E!==qi)&&(s.blendEquation(32774),x=qi,E=qi),_e)switch(I){case Ji:s.blendFuncSeparate(1,771,1,771);break;case sl:s.blendFunc(1,1);break;case ol:s.blendFuncSeparate(0,769,0,1);break;case al:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ji:s.blendFuncSeparate(770,771,1,771);break;case sl:s.blendFunc(770,1);break;case ol:s.blendFuncSeparate(0,769,0,1);break;case al:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,y=null,C=null,v=null,b=I,w=_e}return}bt=bt||W,Gt=Gt||rt,ue=ue||mt,(W!==x||bt!==E)&&(s.blendEquationSeparate(J[W],J[bt]),x=W,E=bt),(rt!==M||mt!==y||Gt!==C||ue!==v)&&(s.blendFuncSeparate(Z[rt],Z[mt],Z[Gt],Z[ue]),M=rt,y=mt,C=Gt,v=ue),b=I,w=!1}function xt(I,W){I.side===Sa?_t(2884):Ct(2884);let rt=I.side===en;W&&(rt=!rt),ct(rt),I.blending===Ji&&I.transparent===!1?at(Gn):at(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const mt=I.stencilWrite;l.setTest(mt),mt&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Mt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ct(32926):_t(32926)}function ct(I){P!==I&&(I?s.frontFace(2304):s.frontFace(2305),P=I)}function At(I){I!==Iu?(Ct(2884),I!==z&&(I===rl?s.cullFace(1029):I===Ou?s.cullFace(1028):s.cullFace(1032))):_t(2884),z=I}function St(I){I!==K&&(X&&s.lineWidth(I),K=I)}function Mt(I,W,rt){I?(Ct(32823),(R!==W||D!==rt)&&(s.polygonOffset(W,rt),R=W,D=rt)):_t(32823)}function Ht(I){I?Ct(3089):_t(3089)}function Bt(I){I===void 0&&(I=33984+B-1),nt!==I&&(s.activeTexture(I),nt=I)}function A(I,W,rt){rt===void 0&&(nt===null?rt=33984+B-1:rt=nt);let mt=Q[rt];mt===void 0&&(mt={type:void 0,texture:void 0},Q[rt]=mt),(mt.type!==I||mt.texture!==W)&&(nt!==rt&&(s.activeTexture(rt),nt=rt),s.bindTexture(I,W||$[I]),mt.type=I,mt.texture=W)}function S(){const I=Q[nt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(I){tt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),tt.copy(I))}function vt(I){et.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),et.copy(I))}function Ot(I,W){let rt=u.get(W);rt===void 0&&(rt=new WeakMap,u.set(W,rt));let mt=rt.get(I);mt===void 0&&(mt=s.getUniformBlockIndex(W,I.name),rt.set(I,mt))}function Nt(I,W){const mt=u.get(W).get(I);h.get(W)!==mt&&(s.uniformBlockBinding(W,mt,I.__bindingPointIndex),h.set(W,mt))}function Wt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},nt=null,Q={},m={},g=new WeakMap,f=[],p=null,_=!1,b=null,x=null,M=null,y=null,E=null,C=null,v=null,w=!1,P=null,z=null,K=null,R=null,D=null,tt.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ct,disable:_t,bindFramebuffer:Tt,drawBuffers:ut,useProgram:Pt,setBlending:at,setMaterial:xt,setFlipSided:ct,setCullFace:At,setLineWidth:St,setPolygonOffset:Mt,setScissorTest:Ht,activeTexture:Bt,bindTexture:A,unbindTexture:S,compressedTexImage2D:V,compressedTexImage3D:it,texImage2D:gt,texImage3D:pt,updateUBOMapping:Ot,uniformBlockBinding:Nt,texStorage2D:F,texStorage3D:ft,texSubImage2D:st,texSubImage3D:dt,compressedTexSubImage2D:Et,compressedTexSubImage3D:L,scissor:yt,viewport:vt,reset:Wt}}function b_(s,t,e,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,S){return _?new OffscreenCanvas(A,S):Ur("canvas")}function x(A,S,V,it){let st=1;if((A.width>it||A.height>it)&&(st=it/Math.max(A.width,A.height)),st<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const dt=S?ea:Math.floor,Et=dt(st*A.width),L=dt(st*A.height);f===void 0&&(f=b(Et,L));const F=V?b(Et,L):f;return F.width=Et,F.height=L,F.getContext("2d").drawImage(A,0,0,Et,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Et+"x"+L+")."),F}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function M(A){return Fl(A.width)&&Fl(A.height)}function y(A){return a?!1:A.wrapS!==an||A.wrapT!==an||A.minFilter!==ve&&A.minFilter!==Ze}function E(A,S){return A.generateMipmaps&&S&&A.minFilter!==ve&&A.minFilter!==Ze}function C(A){s.generateMipmap(A)}function v(A,S,V,it,st=!1){if(a===!1)return S;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let dt=S;return S===6403&&(V===5126&&(dt=33326),V===5131&&(dt=33325),V===5121&&(dt=33321)),S===33319&&(V===5126&&(dt=33328),V===5131&&(dt=33327),V===5121&&(dt=33323)),S===6408&&(V===5126&&(dt=34836),V===5131&&(dt=34842),V===5121&&(dt=it===$t&&st===!1?35907:32856),V===32819&&(dt=32854),V===32820&&(dt=32855)),(dt===33325||dt===33326||dt===33327||dt===33328||dt===34842||dt===34836)&&t.get("EXT_color_buffer_float"),dt}function w(A,S,V){return E(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==ve&&A.minFilter!==Ze?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){return A===ve||A===hl||A===eo?9728:9729}function z(A){const S=A.target;S.removeEventListener("dispose",z),R(S),S.isVideoTexture&&g.delete(S)}function K(A){const S=A.target;S.removeEventListener("dispose",K),B(S)}function R(A){const S=n.get(A);if(S.__webglInit===void 0)return;const V=A.source,it=p.get(V);if(it){const st=it[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(A),Object.keys(it).length===0&&p.delete(V)}n.remove(A)}function D(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const V=A.source,it=p.get(V);delete it[S.__cacheKey],o.memory.textures--}function B(A){const S=A.texture,V=n.get(A),it=n.get(S);if(it.__webglTexture!==void 0&&(s.deleteTexture(it.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let st=0;st<6;st++)s.deleteFramebuffer(V.__webglFramebuffer[st]),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[st]);else{if(s.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let st=0;st<V.__webglColorRenderbuffer.length;st++)V.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[st]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let st=0,dt=S.length;st<dt;st++){const Et=n.get(S[st]);Et.__webglTexture&&(s.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(S[st])}n.remove(S),n.remove(A)}let X=0;function j(){X=0}function H(){const A=X;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),X+=1,A}function nt(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function Q(A,S){const V=n.get(A);if(A.isVideoTexture&&Ht(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const it=A.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(V,A,S);return}}e.bindTexture(3553,V.__webglTexture,33984+S)}function k(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){_t(V,A,S);return}e.bindTexture(35866,V.__webglTexture,33984+S)}function G(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){_t(V,A,S);return}e.bindTexture(32879,V.__webglTexture,33984+S)}function tt(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){Tt(V,A,S);return}e.bindTexture(34067,V.__webglTexture,33984+S)}const et={[Ko]:10497,[an]:33071,[Qo]:33648},ot={[ve]:9728,[hl]:9984,[eo]:9986,[Ze]:9729,[ld]:9985,[Fr]:9987};function $(A,S,V){if(V?(s.texParameteri(A,10242,et[S.wrapS]),s.texParameteri(A,10243,et[S.wrapT]),(A===32879||A===35866)&&s.texParameteri(A,32882,et[S.wrapR]),s.texParameteri(A,10240,ot[S.magFilter]),s.texParameteri(A,10241,ot[S.minFilter])):(s.texParameteri(A,10242,33071),s.texParameteri(A,10243,33071),(A===32879||A===35866)&&s.texParameteri(A,32882,33071),(S.wrapS!==an||S.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,10240,P(S.magFilter)),s.texParameteri(A,10241,P(S.minFilter)),S.minFilter!==ve&&S.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===ve||S.minFilter!==eo&&S.minFilter!==Fr||S.type===ci&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===Nr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(A,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ct(A,S){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",z));const it=S.source;let st=p.get(it);st===void 0&&(st={},p.set(it,st));const dt=nt(S);if(dt!==A.__cacheKey){st[dt]===void 0&&(st[dt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),st[dt].usedTimes++;const Et=st[A.__cacheKey];Et!==void 0&&(st[A.__cacheKey].usedTimes--,Et.usedTimes===0&&D(S)),A.__cacheKey=dt,A.__webglTexture=st[dt].texture}return V}function _t(A,S,V){let it=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(it=35866),S.isData3DTexture&&(it=32879);const st=Ct(A,S),dt=S.source;e.bindTexture(it,A.__webglTexture,33984+V);const Et=n.get(dt);if(dt.version!==Et.__version||st===!0){e.activeTexture(33984+V),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const L=y(S)&&M(S.image)===!1;let F=x(S.image,L,!1,h);F=Bt(S,F);const ft=M(F)||a,gt=r.convert(S.format,S.encoding);let pt=r.convert(S.type),yt=v(S.internalFormat,gt,pt,S.encoding,S.isVideoTexture);$(it,S,ft);let vt;const Ot=S.mipmaps,Nt=a&&S.isVideoTexture!==!0,Wt=Et.__version===void 0||st===!0,I=w(S,F,ft);if(S.isDepthTexture)yt=6402,a?S.type===ci?yt=36012:S.type===li?yt=33190:S.type===Ki?yt=35056:yt=33189:S.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ui&&yt===6402&&S.type!==$c&&S.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=li,pt=r.convert(S.type)),S.format===sr&&yt===6402&&(yt=34041,S.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ki,pt=r.convert(S.type))),Wt&&(Nt?e.texStorage2D(3553,1,yt,F.width,F.height):e.texImage2D(3553,0,yt,F.width,F.height,0,gt,pt,null));else if(S.isDataTexture)if(Ot.length>0&&ft){Nt&&Wt&&e.texStorage2D(3553,I,yt,Ot[0].width,Ot[0].height);for(let W=0,rt=Ot.length;W<rt;W++)vt=Ot[W],Nt?e.texSubImage2D(3553,W,0,0,vt.width,vt.height,gt,pt,vt.data):e.texImage2D(3553,W,yt,vt.width,vt.height,0,gt,pt,vt.data);S.generateMipmaps=!1}else Nt?(Wt&&e.texStorage2D(3553,I,yt,F.width,F.height),e.texSubImage2D(3553,0,0,0,F.width,F.height,gt,pt,F.data)):e.texImage2D(3553,0,yt,F.width,F.height,0,gt,pt,F.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&Wt&&e.texStorage3D(35866,I,yt,Ot[0].width,Ot[0].height,F.depth);for(let W=0,rt=Ot.length;W<rt;W++)vt=Ot[W],S.format!==ln?gt!==null?Nt?e.compressedTexSubImage3D(35866,W,0,0,0,vt.width,vt.height,F.depth,gt,vt.data,0,0):e.compressedTexImage3D(35866,W,yt,vt.width,vt.height,F.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?e.texSubImage3D(35866,W,0,0,0,vt.width,vt.height,F.depth,gt,pt,vt.data):e.texImage3D(35866,W,yt,vt.width,vt.height,F.depth,0,gt,pt,vt.data)}else{Nt&&Wt&&e.texStorage2D(3553,I,yt,Ot[0].width,Ot[0].height);for(let W=0,rt=Ot.length;W<rt;W++)vt=Ot[W],S.format!==ln?gt!==null?Nt?e.compressedTexSubImage2D(3553,W,0,0,vt.width,vt.height,gt,vt.data):e.compressedTexImage2D(3553,W,yt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?e.texSubImage2D(3553,W,0,0,vt.width,vt.height,gt,pt,vt.data):e.texImage2D(3553,W,yt,vt.width,vt.height,0,gt,pt,vt.data)}else if(S.isDataArrayTexture)Nt?(Wt&&e.texStorage3D(35866,I,yt,F.width,F.height,F.depth),e.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,gt,pt,F.data)):e.texImage3D(35866,0,yt,F.width,F.height,F.depth,0,gt,pt,F.data);else if(S.isData3DTexture)Nt?(Wt&&e.texStorage3D(32879,I,yt,F.width,F.height,F.depth),e.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,gt,pt,F.data)):e.texImage3D(32879,0,yt,F.width,F.height,F.depth,0,gt,pt,F.data);else if(S.isFramebufferTexture){if(Wt)if(Nt)e.texStorage2D(3553,I,yt,F.width,F.height);else{let W=F.width,rt=F.height;for(let mt=0;mt<I;mt++)e.texImage2D(3553,mt,yt,W,rt,0,gt,pt,null),W>>=1,rt>>=1}}else if(Ot.length>0&&ft){Nt&&Wt&&e.texStorage2D(3553,I,yt,Ot[0].width,Ot[0].height);for(let W=0,rt=Ot.length;W<rt;W++)vt=Ot[W],Nt?e.texSubImage2D(3553,W,0,0,gt,pt,vt):e.texImage2D(3553,W,yt,gt,pt,vt);S.generateMipmaps=!1}else Nt?(Wt&&e.texStorage2D(3553,I,yt,F.width,F.height),e.texSubImage2D(3553,0,0,0,gt,pt,F)):e.texImage2D(3553,0,yt,gt,pt,F);E(S,ft)&&C(it),Et.__version=dt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Tt(A,S,V){if(S.image.length!==6)return;const it=Ct(A,S),st=S.source;e.bindTexture(34067,A.__webglTexture,33984+V);const dt=n.get(st);if(st.version!==dt.__version||it===!0){e.activeTexture(33984+V),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const Et=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,F=[];for(let W=0;W<6;W++)!Et&&!L?F[W]=x(S.image[W],!1,!0,l):F[W]=L?S.image[W].image:S.image[W],F[W]=Bt(S,F[W]);const ft=F[0],gt=M(ft)||a,pt=r.convert(S.format,S.encoding),yt=r.convert(S.type),vt=v(S.internalFormat,pt,yt,S.encoding),Ot=a&&S.isVideoTexture!==!0,Nt=dt.__version===void 0||it===!0;let Wt=w(S,ft,gt);$(34067,S,gt);let I;if(Et){Ot&&Nt&&e.texStorage2D(34067,Wt,vt,ft.width,ft.height);for(let W=0;W<6;W++){I=F[W].mipmaps;for(let rt=0;rt<I.length;rt++){const mt=I[rt];S.format!==ln?pt!==null?Ot?e.compressedTexSubImage2D(34069+W,rt,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(34069+W,rt,vt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(34069+W,rt,0,0,mt.width,mt.height,pt,yt,mt.data):e.texImage2D(34069+W,rt,vt,mt.width,mt.height,0,pt,yt,mt.data)}}}else{I=S.mipmaps,Ot&&Nt&&(I.length>0&&Wt++,e.texStorage2D(34067,Wt,vt,F[0].width,F[0].height));for(let W=0;W<6;W++)if(L){Ot?e.texSubImage2D(34069+W,0,0,0,F[W].width,F[W].height,pt,yt,F[W].data):e.texImage2D(34069+W,0,vt,F[W].width,F[W].height,0,pt,yt,F[W].data);for(let rt=0;rt<I.length;rt++){const bt=I[rt].image[W].image;Ot?e.texSubImage2D(34069+W,rt+1,0,0,bt.width,bt.height,pt,yt,bt.data):e.texImage2D(34069+W,rt+1,vt,bt.width,bt.height,0,pt,yt,bt.data)}}else{Ot?e.texSubImage2D(34069+W,0,0,0,pt,yt,F[W]):e.texImage2D(34069+W,0,vt,pt,yt,F[W]);for(let rt=0;rt<I.length;rt++){const mt=I[rt];Ot?e.texSubImage2D(34069+W,rt+1,0,0,pt,yt,mt.image[W]):e.texImage2D(34069+W,rt+1,vt,pt,yt,mt.image[W])}}}E(S,gt)&&C(34067),dt.__version=st.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ut(A,S,V,it,st){const dt=r.convert(V.format,V.encoding),Et=r.convert(V.type),L=v(V.internalFormat,dt,Et,V.encoding);n.get(S).__hasExternalTextures||(st===32879||st===35866?e.texImage3D(st,0,L,S.width,S.height,S.depth,0,dt,Et,null):e.texImage2D(st,0,L,S.width,S.height,0,dt,Et,null)),e.bindFramebuffer(36160,A),Mt(S)?d.framebufferTexture2DMultisampleEXT(36160,it,st,n.get(V).__webglTexture,0,St(S)):(st===3553||st>=34069&&st<=34074)&&s.framebufferTexture2D(36160,it,st,n.get(V).__webglTexture,0),e.bindFramebuffer(36160,null)}function Pt(A,S,V){if(s.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let it=33189;if(V||Mt(S)){const st=S.depthTexture;st&&st.isDepthTexture&&(st.type===ci?it=36012:st.type===li&&(it=33190));const dt=St(S);Mt(S)?d.renderbufferStorageMultisampleEXT(36161,dt,it,S.width,S.height):s.renderbufferStorageMultisample(36161,dt,it,S.width,S.height)}else s.renderbufferStorage(36161,it,S.width,S.height);s.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const it=St(S);V&&Mt(S)===!1?s.renderbufferStorageMultisample(36161,it,35056,S.width,S.height):Mt(S)?d.renderbufferStorageMultisampleEXT(36161,it,35056,S.width,S.height):s.renderbufferStorage(36161,34041,S.width,S.height),s.framebufferRenderbuffer(36160,33306,36161,A)}else{const it=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let st=0;st<it.length;st++){const dt=it[st],Et=r.convert(dt.format,dt.encoding),L=r.convert(dt.type),F=v(dt.internalFormat,Et,L,dt.encoding),ft=St(S);V&&Mt(S)===!1?s.renderbufferStorageMultisample(36161,ft,F,S.width,S.height):Mt(S)?d.renderbufferStorageMultisampleEXT(36161,ft,F,S.width,S.height):s.renderbufferStorage(36161,F,S.width,S.height)}}s.bindRenderbuffer(36161,null)}function J(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const it=n.get(S.depthTexture).__webglTexture,st=St(S);if(S.depthTexture.format===ui)Mt(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,it,0,st):s.framebufferTexture2D(36160,36096,3553,it,0);else if(S.depthTexture.format===sr)Mt(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,it,0,st):s.framebufferTexture2D(36160,33306,3553,it,0);else throw new Error("Unknown depthTexture format")}function Z(A){const S=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");J(S.__webglFramebuffer,A)}else if(V){S.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(36160,S.__webglFramebuffer[it]),S.__webglDepthbuffer[it]=s.createRenderbuffer(),Pt(S.__webglDepthbuffer[it],A,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Pt(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function at(A,S,V){const it=n.get(A);S!==void 0&&ut(it.__webglFramebuffer,A,A.texture,36064,3553),V!==void 0&&Z(A)}function xt(A){const S=A.texture,V=n.get(A),it=n.get(S);A.addEventListener("dispose",K),A.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=S.version,o.memory.textures++);const st=A.isWebGLCubeRenderTarget===!0,dt=A.isWebGLMultipleRenderTargets===!0,Et=M(A)||a;if(st){V.__webglFramebuffer=[];for(let L=0;L<6;L++)V.__webglFramebuffer[L]=s.createFramebuffer()}else{if(V.__webglFramebuffer=s.createFramebuffer(),dt)if(i.drawBuffers){const L=A.texture;for(let F=0,ft=L.length;F<ft;F++){const gt=n.get(L[F]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Mt(A)===!1){const L=dt?S:[S];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let F=0;F<L.length;F++){const ft=L[F];V.__webglColorRenderbuffer[F]=s.createRenderbuffer(),s.bindRenderbuffer(36161,V.__webglColorRenderbuffer[F]);const gt=r.convert(ft.format,ft.encoding),pt=r.convert(ft.type),yt=v(ft.internalFormat,gt,pt,ft.encoding,A.isXRRenderTarget===!0),vt=St(A);s.renderbufferStorageMultisample(36161,vt,yt,A.width,A.height),s.framebufferRenderbuffer(36160,36064+F,36161,V.__webglColorRenderbuffer[F])}s.bindRenderbuffer(36161,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(st){e.bindTexture(34067,it.__webglTexture),$(34067,S,Et);for(let L=0;L<6;L++)ut(V.__webglFramebuffer[L],A,S,36064,34069+L);E(S,Et)&&C(34067),e.unbindTexture()}else if(dt){const L=A.texture;for(let F=0,ft=L.length;F<ft;F++){const gt=L[F],pt=n.get(gt);e.bindTexture(3553,pt.__webglTexture),$(3553,gt,Et),ut(V.__webglFramebuffer,A,gt,36064+F,3553),E(gt,Et)&&C(3553)}e.unbindTexture()}else{let L=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?L=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(L,it.__webglTexture),$(L,S,Et),ut(V.__webglFramebuffer,A,S,36064,L),E(S,Et)&&C(L),e.unbindTexture()}A.depthBuffer&&Z(A)}function ct(A){const S=M(A)||a,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let it=0,st=V.length;it<st;it++){const dt=V[it];if(E(dt,S)){const Et=A.isWebGLCubeRenderTarget?34067:3553,L=n.get(dt).__webglTexture;e.bindTexture(Et,L),C(Et),e.unbindTexture()}}}function At(A){if(a&&A.samples>0&&Mt(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,it=A.height;let st=16384;const dt=[],Et=A.stencilBuffer?33306:36096,L=n.get(A),F=A.isWebGLMultipleRenderTargets===!0;if(F)for(let ft=0;ft<S.length;ft++)e.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ft,36161,null),e.bindFramebuffer(36160,L.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ft,3553,null,0);e.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,L.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){dt.push(36064+ft),A.depthBuffer&&dt.push(Et);const gt=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(gt===!1&&(A.depthBuffer&&(st|=256),A.stencilBuffer&&(st|=1024)),F&&s.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[ft]),gt===!0&&(s.invalidateFramebuffer(36008,[Et]),s.invalidateFramebuffer(36009,[Et])),F){const pt=n.get(S[ft]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,pt,0)}s.blitFramebuffer(0,0,V,it,0,0,V,it,st,9728),m&&s.invalidateFramebuffer(36008,dt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),F)for(let ft=0;ft<S.length;ft++){e.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ft,36161,L.__webglColorRenderbuffer[ft]);const gt=n.get(S[ft]).__webglTexture;e.bindFramebuffer(36160,L.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ft,3553,gt,0)}e.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function St(A){return Math.min(u,A.samples)}function Mt(A){const S=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ht(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function Bt(A,S){const V=A.encoding,it=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ta||V!==vi&&(V===$t?a===!1?t.has("EXT_sRGB")===!0&&it===ln?(A.format=ta,A.minFilter=Ze,A.generateMipmaps=!1):S=Zc.sRGBToLinear(S):(it!==ln||st!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),S}this.allocateTextureUnit=H,this.resetTextureUnits=j,this.setTexture2D=Q,this.setTexture2DArray=k,this.setTexture3D=G,this.setTextureCube=tt,this.rebindTextures=at,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Mt}function M_(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===xi)return 5121;if(r===dd)return 32819;if(r===fd)return 32820;if(r===cd)return 5120;if(r===hd)return 5122;if(r===$c)return 5123;if(r===ud)return 5124;if(r===li)return 5125;if(r===ci)return 5126;if(r===Nr)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===pd)return 6406;if(r===ln)return 6408;if(r===gd)return 6409;if(r===_d)return 6410;if(r===ui)return 6402;if(r===sr)return 34041;if(r===md)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ta)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===xd)return 6403;if(r===vd)return 36244;if(r===yd)return 33319;if(r===bd)return 33320;if(r===Md)return 36249;if(r===no||r===io||r===ro||r===so)if(o===$t)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===no)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===so)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===no)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===io)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ro)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===so)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ul||r===dl||r===fl||r===pl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ul)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ml||r===gl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ml)return o===$t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===gl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_l||r===xl||r===vl||r===yl||r===bl||r===Ml||r===Sl||r===wl||r===Tl||r===El||r===Al||r===Cl||r===Ll||r===Pl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===_l)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ml)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===El)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Al)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ll)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Dl)return o===$t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ki?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class S_ extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ms extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w_={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n),_=this._getHandJoint(l,f);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ms;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class T_ extends Ce{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:ui,h!==ui&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ui&&(n=li),n===void 0&&h===sr&&(n=Ki),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ve,this.minFilter=c!==void 0?c:ve,this.flipY=!1,this.generateMipmaps=!1}}class E_ extends Ai{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=null,l=null,h=null,u=null,d=null,m=null;const g=e.getContextAttributes();let f=null,p=null;const _=[],b=[],x=new Set,M=new Map,y=new Je;y.layers.enable(1),y.viewport=new pe;const E=new Je;E.layers.enable(2),E.viewport=new pe;const C=[y,E],v=new S_;v.layers.enable(1),v.layers.enable(2);let w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let G=_[k];return G===void 0&&(G=new Io,_[k]=G),G.getTargetRaySpace()},this.getControllerGrip=function(k){let G=_[k];return G===void 0&&(G=new Io,_[k]=G),G.getGripSpace()},this.getHand=function(k){let G=_[k];return G===void 0&&(G=new Io,_[k]=G),G.getHandSpace()};function z(k){const G=b.indexOf(k.inputSource);if(G===-1)return;const tt=_[G];tt!==void 0&&tt.dispatchEvent({type:k.type,data:k.inputSource})}function K(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",R);for(let k=0;k<_.length;k++){const G=b[k];G!==null&&(b[k]=null,_[k].disconnect(G))}w=null,P=null,t.setRenderTarget(f),d=null,u=null,h=null,i=null,p=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",K),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,G),i.updateRenderState({baseLayer:d}),p=new yi(d.framebufferWidth,d.framebufferHeight,{format:ln,type:xi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let G=null,tt=null,et=null;g.depth&&(et=g.stencil?35056:33190,G=g.stencil?sr:ui,tt=g.stencil?Ki:li);const ot={colorFormat:32856,depthFormat:et,scaleFactor:r};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(ot),i.updateRenderState({layers:[u]}),p=new yi(u.textureWidth,u.textureHeight,{format:ln,type:xi,depthTexture:new T_(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const $=t.properties.get(p);$.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(k){for(let G=0;G<k.removed.length;G++){const tt=k.removed[G],et=b.indexOf(tt);et>=0&&(b[et]=null,_[et].disconnect(tt))}for(let G=0;G<k.added.length;G++){const tt=k.added[G];let et=b.indexOf(tt);if(et===-1){for(let $=0;$<_.length;$++)if($>=b.length){b.push(tt),et=$;break}else if(b[$]===null){b[$]=tt,et=$;break}if(et===-1)break}const ot=_[et];ot&&ot.connect(tt)}}const D=new O,B=new O;function X(k,G,tt){D.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(tt.matrixWorld);const et=D.distanceTo(B),ot=G.projectionMatrix.elements,$=tt.projectionMatrix.elements,Ct=ot[14]/(ot[10]-1),_t=ot[14]/(ot[10]+1),Tt=(ot[9]+1)/ot[5],ut=(ot[9]-1)/ot[5],Pt=(ot[8]-1)/ot[0],J=($[8]+1)/$[0],Z=Ct*Pt,at=Ct*J,xt=et/(-Pt+J),ct=xt*-Pt;G.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ct),k.translateZ(xt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const At=Ct+xt,St=_t+xt,Mt=Z-ct,Ht=at+(et-ct),Bt=Tt*_t/St*At,A=ut*_t/St*At;k.projectionMatrix.makePerspective(Mt,Ht,Bt,A,At,St)}function j(k,G){G===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(G.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;v.near=E.near=y.near=k.near,v.far=E.far=y.far=k.far,(w!==v.near||P!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,P=v.far);const G=k.parent,tt=v.cameras;j(v,G);for(let ot=0;ot<tt.length;ot++)j(tt[ot],G);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),k.matrix.copy(v.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const et=k.children;for(let ot=0,$=et.length;ot<$;ot++)et[ot].updateMatrixWorld(!0);tt.length===2?X(v,y,E):v.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(k){u!==null&&(u.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.getPlanes=function(){return x};let H=null;function nt(k,G){if(l=G.getViewerPose(c||o),m=G,l!==null){const tt=l.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let et=!1;tt.length!==v.cameras.length&&(v.cameras.length=0,et=!0);for(let ot=0;ot<tt.length;ot++){const $=tt[ot];let Ct=null;if(d!==null)Ct=d.getViewport($);else{const Tt=h.getViewSubImage(u,$);Ct=Tt.viewport,ot===0&&(t.setRenderTargetTextures(p,Tt.colorTexture,u.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(p))}let _t=C[ot];_t===void 0&&(_t=new Je,_t.layers.enable(ot),_t.viewport=new pe,C[ot]=_t),_t.matrix.fromArray($.transform.matrix),_t.projectionMatrix.fromArray($.projectionMatrix),_t.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ot===0&&v.matrix.copy(_t.matrix),et===!0&&v.cameras.push(_t)}}for(let tt=0;tt<_.length;tt++){const et=b[tt],ot=_[tt];et!==null&&ot!==void 0&&ot.update(et,G,c||o)}if(H&&H(k,G),G.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:G.detectedPlanes});let tt=null;for(const et of x)G.detectedPlanes.has(et)||(tt===null&&(tt=[]),tt.push(et));if(tt!==null)for(const et of tt)x.delete(et),M.delete(et),n.dispatchEvent({type:"planeremoved",data:et});for(const et of G.detectedPlanes)if(!x.has(et))x.add(et),M.set(et,G.lastChangedTime),n.dispatchEvent({type:"planeadded",data:et});else{const ot=M.get(et);et.lastChangedTime>ot&&(M.set(et,et.lastChangedTime),n.dispatchEvent({type:"planechanged",data:et}))}}m=null}const Q=new sh;Q.setAnimationLoop(nt),this.setAnimationLoop=function(k){H=k},this.dispose=function(){}}}function A_(s,t){function e(f,p){p.color.getRGB(f.fogColor.value,nh(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,_,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),h(f,p)):p.isMeshPhongMaterial?(i(f,p),l(f,p)):p.isMeshStandardMaterial?(i(f,p),u(f,p),p.isMeshPhysicalMaterial&&d(f,p,x)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?a(f,p,_,b):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===en&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===en&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const M=s.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),f.uvTransform.value.copy(b.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uv2Transform.value.copy(x.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function a(f,p,_,b){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=b*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uvTransform.value.copy(x.matrix))}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function l(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===en&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function C_(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function c(b,x){const M=x.program;n.uniformBlockBinding(b,M)}function l(b,x){let M=i[b.id];M===void 0&&(g(b),M=h(b),i[b.id]=M,b.addEventListener("dispose",p));const y=x.program;n.updateUBOMapping(b,y);const E=t.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function h(b){const x=u();b.__bindingPointIndex=x;const M=s.createBuffer(),y=b.__size,E=b.usage;return s.bindBuffer(35345,M),s.bufferData(35345,y,E),s.bindBuffer(35345,null),s.bindBufferBase(35345,x,M),M}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],M=b.uniforms,y=b.__cache;s.bindBuffer(35345,x);for(let E=0,C=M.length;E<C;E++){const v=M[E];if(m(v,E,y)===!0){const w=v.__offset,P=Array.isArray(v.value)?v.value:[v.value];let z=0;for(let K=0;K<P.length;K++){const R=P[K],D=f(R);typeof R=="number"?(v.__data[0]=R,s.bufferSubData(35345,w+z,v.__data)):R.isMatrix3?(v.__data[0]=R.elements[0],v.__data[1]=R.elements[1],v.__data[2]=R.elements[2],v.__data[3]=R.elements[0],v.__data[4]=R.elements[3],v.__data[5]=R.elements[4],v.__data[6]=R.elements[5],v.__data[7]=R.elements[0],v.__data[8]=R.elements[6],v.__data[9]=R.elements[7],v.__data[10]=R.elements[8],v.__data[11]=R.elements[0]):(R.toArray(v.__data,z),z+=D.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,w,v.__data)}}s.bindBuffer(35345,null)}function m(b,x,M){const y=b.value;if(M[x]===void 0){if(typeof y=="number")M[x]=y;else{const E=Array.isArray(y)?y:[y],C=[];for(let v=0;v<E.length;v++)C.push(E[v].clone());M[x]=C}return!0}else if(typeof y=="number"){if(M[x]!==y)return M[x]=y,!0}else{const E=Array.isArray(M[x])?M[x]:[M[x]],C=Array.isArray(y)?y:[y];for(let v=0;v<E.length;v++){const w=E[v];if(w.equals(C[v])===!1)return w.copy(C[v]),!0}}return!1}function g(b){const x=b.uniforms;let M=0;const y=16;let E=0;for(let C=0,v=x.length;C<v;C++){const w=x[C],P={boundary:0,storage:0},z=Array.isArray(w.value)?w.value:[w.value];for(let K=0,R=z.length;K<R;K++){const D=z[K],B=f(D);P.boundary+=B.boundary,P.storage+=B.storage}if(w.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,C>0){E=M%y;const K=y-E;E!==0&&K-P.boundary<0&&(M+=y-E,w.__offset=M)}M+=P.storage}return E=M%y,E>0&&(M+=y-E),b.__size=M,b.__cache={},this}function f(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function _(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:c,update:l,dispose:_}}function L_(){const s=Ur("canvas");return s.style.display="block",s}function uh(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:L_(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,d=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vi,this.physicallyCorrectLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1;const f=this;let p=!1,_=0,b=0,x=null,M=-1,y=null;const E=new pe,C=new pe;let v=null,w=t.width,P=t.height,z=1,K=null,R=null;const D=new pe(0,0,w,P),B=new pe(0,0,w,P);let X=!1;const j=new Ta;let H=!1,nt=!1,Q=null;const k=new ae,G=new lt,tt=new O,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return x===null?z:1}let $=e;function Ct(T,U){for(let q=0;q<T.length;q++){const N=T[q],Y=t.getContext(N,U);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ma}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Ot,!1),$===null){const U=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&U.shift(),$=Ct(U,T),$===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let _t,Tt,ut,Pt,J,Z,at,xt,ct,At,St,Mt,Ht,Bt,A,S,V,it,st,dt,Et,L,F,ft;function gt(){_t=new Bm($),Tt=new Om($,_t,s),_t.init(Tt),L=new M_($,_t,Tt),ut=new y_($,_t,Tt),Pt=new Hm,J=new o_,Z=new b_($,_t,ut,J,Tt,L,Pt),at=new Nm(f),xt=new km(f),ct=new Jd($,Tt),F=new Rm($,_t,ct,Tt),At=new Vm($,ct,Pt,F),St=new $m($,At,ct,Pt),st=new qm($,Tt,Z),S=new Fm(J),Mt=new s_(f,at,xt,_t,Tt,F,S),Ht=new A_(f,J),Bt=new l_,A=new p_(_t,Tt),it=new Dm(f,at,xt,ut,St,h,o),V=new v_(f,St,Tt),ft=new C_($,Pt,Tt,ut),dt=new Im($,_t,Pt,Tt),Et=new Gm($,_t,Pt,Tt),Pt.programs=Mt.programs,f.capabilities=Tt,f.extensions=_t,f.properties=J,f.renderLists=Bt,f.shadowMap=V,f.state=ut,f.info=Pt}gt();const pt=new E_(f,$);this.xr=pt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const T=_t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=_t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(w,P,!1))},this.getSize=function(T){return T.set(w,P)},this.setSize=function(T,U,q){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,P=U,t.width=Math.floor(T*z),t.height=Math.floor(U*z),q!==!1&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(w*z,P*z).floor()},this.setDrawingBufferSize=function(T,U,q){w=T,P=U,z=q,t.width=Math.floor(T*q),t.height=Math.floor(U*q),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,U,q,N){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,U,q,N),ut.viewport(E.copy(D).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,U,q,N){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,U,q,N),ut.scissor(C.copy(B).multiplyScalar(z).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){ut.setScissorTest(X=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){R=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(T=!0,U=!0,q=!0){let N=0;T&&(N|=16384),U&&(N|=256),q&&(N|=1024),$.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Ot,!1),Bt.dispose(),A.dispose(),J.dispose(),at.dispose(),xt.dispose(),St.dispose(),F.dispose(),ft.dispose(),Mt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",mt),pt.removeEventListener("sessionend",bt),Q&&(Q.dispose(),Q=null),Gt.stop()};function yt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Pt.autoReset,U=V.enabled,q=V.autoUpdate,N=V.needsUpdate,Y=V.type;gt(),Pt.autoReset=T,V.enabled=U,V.autoUpdate=q,V.needsUpdate=N,V.type=Y}function Ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nt(T){const U=T.target;U.removeEventListener("dispose",Nt),Wt(U)}function Wt(T){I(T),J.remove(T)}function I(T){const U=J.get(T).programs;U!==void 0&&(U.forEach(function(q){Mt.releaseProgram(q)}),T.isShaderMaterial&&Mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,q,N,Y,wt){U===null&&(U=et);const Lt=Y.isMesh&&Y.matrixWorld.determinant()<0,Rt=Lu(T,U,q,N,Y);ut.setMaterial(N,Lt);let It=q.index,Vt=1;N.wireframe===!0&&(It=At.getWireframeAttribute(q),Vt=2);const zt=q.drawRange,Ut=q.attributes.position;let ne=zt.start*Vt,Oe=(zt.start+zt.count)*Vt;wt!==null&&(ne=Math.max(ne,wt.start*Vt),Oe=Math.min(Oe,(wt.start+wt.count)*Vt)),It!==null?(ne=Math.max(ne,0),Oe=Math.min(Oe,It.count)):Ut!=null&&(ne=Math.max(ne,0),Oe=Math.min(Oe,Ut.count));const bn=Oe-ne;if(bn<0||bn===1/0)return;F.setup(Y,N,Rt,q,It);let Zn,ie=dt;if(It!==null&&(Zn=ct.get(It),ie=Et,ie.setIndex(Zn)),Y.isMesh)N.wireframe===!0?(ut.setLineWidth(N.wireframeLinewidth*ot()),ie.setMode(1)):ie.setMode(4);else if(Y.isLine){let kt=N.linewidth;kt===void 0&&(kt=1),ut.setLineWidth(kt*ot()),Y.isLineSegments?ie.setMode(1):Y.isLineLoop?ie.setMode(2):ie.setMode(3)}else Y.isPoints?ie.setMode(0):Y.isSprite&&ie.setMode(4);if(Y.isInstancedMesh)ie.renderInstances(ne,bn,Y.count);else if(q.isInstancedBufferGeometry){const kt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Js=Math.min(q.instanceCount,kt);ie.renderInstances(ne,bn,Js)}else ie.render(ne,bn)},this.compile=function(T,U){function q(N,Y,wt){N.transparent===!0&&N.side===ns?(N.side=en,N.needsUpdate=!0,$e(N,Y,wt),N.side=_i,N.needsUpdate=!0,$e(N,Y,wt),N.side=ns):$e(N,Y,wt)}d=A.get(T),d.init(),g.push(d),T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(f.physicallyCorrectLights),T.traverse(function(N){const Y=N.material;if(Y)if(Array.isArray(Y))for(let wt=0;wt<Y.length;wt++){const Lt=Y[wt];q(Lt,T,N)}else q(Y,T,N)}),g.pop(),d=null};let W=null;function rt(T){W&&W(T)}function mt(){Gt.stop()}function bt(){Gt.start()}const Gt=new sh;Gt.setAnimationLoop(rt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(T){W=T,pt.setAnimationLoop(T),T===null?Gt.stop():Gt.start()},pt.addEventListener("sessionstart",mt),pt.addEventListener("sessionend",bt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(U),U=pt.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,U,x),d=A.get(T,g.length),d.init(),g.push(d),k.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(k),nt=this.localClippingEnabled,H=S.init(this.clippingPlanes,nt,U),u=Bt.get(T,m.length),u.init(),m.push(u),ue(T,U,0,f.sortObjects),u.finish(),f.sortObjects===!0&&u.sort(K,R),H===!0&&S.beginShadows();const q=d.state.shadowsArray;if(V.render(q,T,U),H===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(u,T),d.setupLights(f.physicallyCorrectLights),U.isArrayCamera){const N=U.cameras;for(let Y=0,wt=N.length;Y<wt;Y++){const Lt=N[Y];_e(u,T,Lt,Lt.viewport)}}else _e(u,T,U);x!==null&&(Z.updateMultisampleRenderTarget(x),Z.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(f,T,U),F.resetDefaultState(),M=-1,y=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function ue(T,U,q,N){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){N&&tt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(k);const Lt=St.update(T),Rt=T.material;Rt.visible&&u.push(T,Lt,Rt,q,tt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Pt.render.frame&&(T.skeleton.update(),T.skeleton.frame=Pt.render.frame),!T.frustumCulled||j.intersectsObject(T))){N&&tt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(k);const Lt=St.update(T),Rt=T.material;if(Array.isArray(Rt)){const It=Lt.groups;for(let Vt=0,zt=It.length;Vt<zt;Vt++){const Ut=It[Vt],ne=Rt[Ut.materialIndex];ne&&ne.visible&&u.push(T,Lt,ne,q,tt.z,Ut)}}else Rt.visible&&u.push(T,Lt,Rt,q,tt.z,null)}}const wt=T.children;for(let Lt=0,Rt=wt.length;Lt<Rt;Lt++)ue(wt[Lt],U,q,N)}function _e(T,U,q,N){const Y=T.opaque,wt=T.transmissive,Lt=T.transparent;d.setupLightsView(q),wt.length>0&&jn(Y,U,q),N&&ut.viewport(E.copy(N)),Y.length>0&&jt(Y,U,q),wt.length>0&&jt(wt,U,q),Lt.length>0&&jt(Lt,U,q),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function jn(T,U,q){const N=Tt.isWebGL2;Q===null&&(Q=new yi(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?Nr:xi,minFilter:Fr,samples:N&&r===!0?4:0})),f.getDrawingBufferSize(G),N?Q.setSize(G.x,G.y):Q.setSize(ea(G.x),ea(G.y));const Y=f.getRenderTarget();f.setRenderTarget(Q),f.clear();const wt=f.toneMapping;f.toneMapping=Dn,jt(T,U,q),f.toneMapping=wt,Z.updateMultisampleRenderTarget(Q),Z.updateRenderTargetMipmap(Q),f.setRenderTarget(Y)}function jt(T,U,q){const N=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,wt=T.length;Y<wt;Y++){const Lt=T[Y],Rt=Lt.object,It=Lt.geometry,Vt=N===null?Lt.material:N,zt=Lt.group;Rt.layers.test(q.layers)&&yn(Rt,U,q,It,Vt,zt)}}function yn(T,U,q,N,Y,wt){T.onBeforeRender(f,U,q,N,Y,wt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(f,U,q,N,T,wt),Y.transparent===!0&&Y.side===ns?(Y.side=en,Y.needsUpdate=!0,f.renderBufferDirect(q,U,N,Y,T,wt),Y.side=_i,Y.needsUpdate=!0,f.renderBufferDirect(q,U,N,Y,T,wt),Y.side=ns):f.renderBufferDirect(q,U,N,Y,T,wt),T.onAfterRender(f,U,q,N,Y,wt)}function $e(T,U,q){U.isScene!==!0&&(U=et);const N=J.get(T),Y=d.state.lights,wt=d.state.shadowsArray,Lt=Y.state.version,Rt=Mt.getParameters(T,Y.state,wt,U,q),It=Mt.getProgramCacheKey(Rt);let Vt=N.programs;N.environment=T.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(T.isMeshStandardMaterial?xt:at).get(T.envMap||N.environment),Vt===void 0&&(T.addEventListener("dispose",Nt),Vt=new Map,N.programs=Vt);let zt=Vt.get(It);if(zt!==void 0){if(N.currentProgram===zt&&N.lightsStateVersion===Lt)return el(T,Rt),zt}else Rt.uniforms=Mt.getUniforms(T),T.onBuild(q,Rt,f),T.onBeforeCompile(Rt,f),zt=Mt.acquireProgram(Rt,It),Vt.set(It,zt),N.uniforms=Rt.uniforms;const Ut=N.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=S.uniform),el(T,Rt),N.needsLights=Du(T),N.lightsStateVersion=Lt,N.needsLights&&(Ut.ambientLightColor.value=Y.state.ambient,Ut.lightProbe.value=Y.state.probe,Ut.directionalLights.value=Y.state.directional,Ut.directionalLightShadows.value=Y.state.directionalShadow,Ut.spotLights.value=Y.state.spot,Ut.spotLightShadows.value=Y.state.spotShadow,Ut.rectAreaLights.value=Y.state.rectArea,Ut.ltc_1.value=Y.state.rectAreaLTC1,Ut.ltc_2.value=Y.state.rectAreaLTC2,Ut.pointLights.value=Y.state.point,Ut.pointLightShadows.value=Y.state.pointShadow,Ut.hemisphereLights.value=Y.state.hemi,Ut.directionalShadowMap.value=Y.state.directionalShadowMap,Ut.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ut.spotShadowMap.value=Y.state.spotShadowMap,Ut.spotLightMatrix.value=Y.state.spotLightMatrix,Ut.spotLightMap.value=Y.state.spotLightMap,Ut.pointShadowMap.value=Y.state.pointShadowMap,Ut.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ne=zt.getUniforms(),Oe=Cs.seqWithValue(ne.seq,Ut);return N.currentProgram=zt,N.uniformsList=Oe,zt}function el(T,U){const q=J.get(T);q.outputEncoding=U.outputEncoding,q.instancing=U.instancing,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Lu(T,U,q,N,Y){U.isScene!==!0&&(U=et),Z.resetTextureUnits();const wt=U.fog,Lt=N.isMeshStandardMaterial?U.environment:null,Rt=x===null?f.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:vi,It=(N.isMeshStandardMaterial?xt:at).get(N.envMap||Lt),Vt=N.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,zt=!!N.normalMap&&!!q.attributes.tangent,Ut=!!q.morphAttributes.position,ne=!!q.morphAttributes.normal,Oe=!!q.morphAttributes.color,bn=N.toneMapped?f.toneMapping:Dn,Zn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ie=Zn!==void 0?Zn.length:0,kt=J.get(N),Js=d.state.lights;if(H===!0&&(nt===!0||T!==y)){const Fe=T===y&&N.id===M;S.setState(N,T,Fe)}let de=!1;N.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Js.state.version||kt.outputEncoding!==Rt||Y.isInstancedMesh&&kt.instancing===!1||!Y.isInstancedMesh&&kt.instancing===!0||Y.isSkinnedMesh&&kt.skinning===!1||!Y.isSkinnedMesh&&kt.skinning===!0||kt.envMap!==It||N.fog===!0&&kt.fog!==wt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==S.numPlanes||kt.numIntersection!==S.numIntersection)||kt.vertexAlphas!==Vt||kt.vertexTangents!==zt||kt.morphTargets!==Ut||kt.morphNormals!==ne||kt.morphColors!==Oe||kt.toneMapping!==bn||Tt.isWebGL2===!0&&kt.morphTargetsCount!==ie)&&(de=!0):(de=!0,kt.__version=N.version);let Jn=kt.currentProgram;de===!0&&(Jn=$e(N,U,Y));let nl=!1,gr=!1,Ks=!1;const we=Jn.getUniforms(),Kn=kt.uniforms;if(ut.useProgram(Jn.program)&&(nl=!0,gr=!0,Ks=!0),N.id!==M&&(M=N.id,gr=!0),nl||y!==T){if(we.setValue($,"projectionMatrix",T.projectionMatrix),Tt.logarithmicDepthBuffer&&we.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),y!==T&&(y=T,gr=!0,Ks=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Fe=we.map.cameraPosition;Fe!==void 0&&Fe.setValue($,tt.setFromMatrixPosition(T.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&we.setValue($,"isOrthographic",T.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||Y.isSkinnedMesh)&&we.setValue($,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){we.setOptional($,Y,"bindMatrix"),we.setOptional($,Y,"bindMatrixInverse");const Fe=Y.skeleton;Fe&&(Tt.floatVertexTextures?(Fe.boneTexture===null&&Fe.computeBoneTexture(),we.setValue($,"boneTexture",Fe.boneTexture,Z),we.setValue($,"boneTextureSize",Fe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qs=q.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0&&Tt.isWebGL2===!0)&&st.update(Y,q,N,Jn),(gr||kt.receiveShadow!==Y.receiveShadow)&&(kt.receiveShadow=Y.receiveShadow,we.setValue($,"receiveShadow",Y.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Kn.envMap.value=It,Kn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),gr&&(we.setValue($,"toneMappingExposure",f.toneMappingExposure),kt.needsLights&&Pu(Kn,Ks),wt&&N.fog===!0&&Ht.refreshFogUniforms(Kn,wt),Ht.refreshMaterialUniforms(Kn,N,z,P,Q),Cs.upload($,kt.uniformsList,Kn,Z)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Cs.upload($,kt.uniformsList,Kn,Z),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&we.setValue($,"center",Y.center),we.setValue($,"modelViewMatrix",Y.modelViewMatrix),we.setValue($,"normalMatrix",Y.normalMatrix),we.setValue($,"modelMatrix",Y.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Fe=N.uniformsGroups;for(let to=0,Ru=Fe.length;to<Ru;to++)if(Tt.isWebGL2){const il=Fe[to];ft.update(il,Jn),ft.bind(il,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn}function Pu(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Du(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,U,q){J.get(T.texture).__webglTexture=U,J.get(T.depthTexture).__webglTexture=q;const N=J.get(T);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=q===void 0,N.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const q=J.get(T);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,q=0){x=T,_=U,b=q;let N=!0,Y=null,wt=!1,Lt=!1;if(T){const It=J.get(T);It.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(36160,null),N=!1):It.__webglFramebuffer===void 0?Z.setupRenderTarget(T):It.__hasExternalTextures&&Z.rebindTextures(T,J.get(T.texture).__webglTexture,J.get(T.depthTexture).__webglTexture);const Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Lt=!0);const zt=J.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=zt[U],wt=!0):Tt.isWebGL2&&T.samples>0&&Z.useMultisampledRTT(T)===!1?Y=J.get(T).__webglMultisampledFramebuffer:Y=zt,E.copy(T.viewport),C.copy(T.scissor),v=T.scissorTest}else E.copy(D).multiplyScalar(z).floor(),C.copy(B).multiplyScalar(z).floor(),v=X;if(ut.bindFramebuffer(36160,Y)&&Tt.drawBuffers&&N&&ut.drawBuffers(T,Y),ut.viewport(E),ut.scissor(C),ut.setScissorTest(v),wt){const It=J.get(T.texture);$.framebufferTexture2D(36160,36064,34069+U,It.__webglTexture,q)}else if(Lt){const It=J.get(T.texture),Vt=U||0;$.framebufferTextureLayer(36160,36064,It.__webglTexture,q||0,Vt)}M=-1},this.readRenderTargetPixels=function(T,U,q,N,Y,wt,Lt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Rt=Rt[Lt]),Rt){ut.bindFramebuffer(36160,Rt);try{const It=T.texture,Vt=It.format,zt=It.type;if(Vt!==ln&&L.convert(Vt)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=zt===Nr&&(_t.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(zt!==xi&&L.convert(zt)!==$.getParameter(35738)&&!(zt===ci&&(Tt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-N&&q>=0&&q<=T.height-Y&&$.readPixels(U,q,N,Y,L.convert(Vt),L.convert(zt),wt)}finally{const It=x!==null?J.get(x).__webglFramebuffer:null;ut.bindFramebuffer(36160,It)}}},this.copyFramebufferToTexture=function(T,U,q=0){const N=Math.pow(2,-q),Y=Math.floor(U.image.width*N),wt=Math.floor(U.image.height*N);Z.setTexture2D(U,0),$.copyTexSubImage2D(3553,q,0,0,T.x,T.y,Y,wt),ut.unbindTexture()},this.copyTextureToTexture=function(T,U,q,N=0){const Y=U.image.width,wt=U.image.height,Lt=L.convert(q.format),Rt=L.convert(q.type);Z.setTexture2D(q,0),$.pixelStorei(37440,q.flipY),$.pixelStorei(37441,q.premultiplyAlpha),$.pixelStorei(3317,q.unpackAlignment),U.isDataTexture?$.texSubImage2D(3553,N,T.x,T.y,Y,wt,Lt,Rt,U.image.data):U.isCompressedTexture?$.compressedTexSubImage2D(3553,N,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Lt,U.mipmaps[0].data):$.texSubImage2D(3553,N,T.x,T.y,Lt,Rt,U.image),N===0&&q.generateMipmaps&&$.generateMipmap(3553),ut.unbindTexture()},this.copyTextureToTexture3D=function(T,U,q,N,Y=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=T.max.x-T.min.x+1,Lt=T.max.y-T.min.y+1,Rt=T.max.z-T.min.z+1,It=L.convert(N.format),Vt=L.convert(N.type);let zt;if(N.isData3DTexture)Z.setTexture3D(N,0),zt=32879;else if(N.isDataArrayTexture)Z.setTexture2DArray(N,0),zt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,N.flipY),$.pixelStorei(37441,N.premultiplyAlpha),$.pixelStorei(3317,N.unpackAlignment);const Ut=$.getParameter(3314),ne=$.getParameter(32878),Oe=$.getParameter(3316),bn=$.getParameter(3315),Zn=$.getParameter(32877),ie=q.isCompressedTexture?q.mipmaps[0]:q.image;$.pixelStorei(3314,ie.width),$.pixelStorei(32878,ie.height),$.pixelStorei(3316,T.min.x),$.pixelStorei(3315,T.min.y),$.pixelStorei(32877,T.min.z),q.isDataTexture||q.isData3DTexture?$.texSubImage3D(zt,Y,U.x,U.y,U.z,wt,Lt,Rt,It,Vt,ie.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(zt,Y,U.x,U.y,U.z,wt,Lt,Rt,It,ie.data)):$.texSubImage3D(zt,Y,U.x,U.y,U.z,wt,Lt,Rt,It,Vt,ie),$.pixelStorei(3314,Ut),$.pixelStorei(32878,ne),$.pixelStorei(3316,Oe),$.pixelStorei(3315,bn),$.pixelStorei(32877,Zn),Y===0&&N.generateMipmaps&&$.generateMipmap(zt),ut.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),ut.unbindTexture()},this.resetState=function(){_=0,b=0,x=null,ut.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class P_ extends uh{}P_.prototype.isWebGL1Renderer=!0;class D_ extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,m=(o-h)/d;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new lt:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,i=[],r=[],o=[],a=new O,c=new ae;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ye(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(ye(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ca extends vn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new lt,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class R_ extends Ca{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function La(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,i(o,a,d,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Ss=new O,Oo=new La,Fo=new La,No=new La;class I_ extends vn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Ss.subVectors(i[0],i[1]).add(i[0]),l=Ss);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ss.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ss),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);f<1e-4&&(f=1),g<1e-4&&(g=f),p<1e-4&&(p=f),Oo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,f,p),Fo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,f,p),No.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,f,p)}else this.curveType==="catmullrom"&&(Oo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Fo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),No.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Oo.calc(c),Fo.calc(c),No.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pc(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function O_(s,t){const e=1-s;return e*e*t}function F_(s,t){return 2*(1-s)*s*t}function N_(s,t){return s*s*t}function Lr(s,t,e,n){return O_(s,t)+F_(s,e)+N_(s,n)}function z_(s,t){const e=1-s;return e*e*e*t}function U_(s,t){const e=1-s;return 3*e*e*s*t}function k_(s,t){return 3*(1-s)*s*s*t}function B_(s,t){return s*s*s*t}function Pr(s,t,e,n,i){return z_(s,t)+U_(s,e)+k_(s,n)+B_(s,i)}class dh extends vn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Pr(t,i.x,r.x,o.x,a.x),Pr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class V_ extends vn{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Pr(t,i.x,r.x,o.x,a.x),Pr(t,i.y,r.y,o.y,a.y),Pr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pa extends vn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new lt;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class G_ extends vn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fh extends vn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,i.x,r.x,o.x),Lr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class H_ extends vn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,i.x,r.x,o.x),Lr(t,i.y,r.y,o.y),Lr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ph extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(pc(a,c.x,l.x,h.x,u.x),pc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var mh=Object.freeze({__proto__:null,ArcCurve:R_,CatmullRomCurve3:I_,CubicBezierCurve:dh,CubicBezierCurve3:V_,EllipseCurve:Ca,LineCurve:Pa,LineCurve3:G_,QuadraticBezierCurve:fh,QuadraticBezierCurve3:H_,SplineCurve:ph});class W_ extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Pa(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new mh[i.type]().fromJSON(i))}return this}}class ia extends W_{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pa(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new fh(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new dh(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ph(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Ca(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ls extends ia{constructor(t){super(t),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ia().fromJSON(i))}return this}}const X_={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=gh(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,m;if(n&&(r=Z_(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return kr(r,o,e,a,c,m,0),o}};function gh(s,t,e,n,i){let r,o;if(i===a0(s,t,e,n)>0)for(r=t;r<e;r+=n)o=mc(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=mc(r,s[r],s[r+1],o);return o&&Ws(o,o.next)&&(Vr(o),o=o.next),o}function wi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ws(e,e.next)||Kt(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function kr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&e0(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?$_(s,n,i,r):q_(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Vr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Y_(wi(s),t,e),kr(s,t,e,n,i,r,2)):o===2&&j_(s,t,e,n,i,r):kr(wi(s),t,e,n,i,r,1);break}}}function q_(s){const t=s.prev,e=s,n=s.next;if(Kt(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,m=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&Yi(i,a,r,c,o,l,g.x,g.y)&&Kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $_(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Kt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,f=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,_=ra(m,g,t,e,n),b=ra(f,p,t,e,n);let x=s.prevZ,M=s.nextZ;for(;x&&x.z>=_&&M&&M.z<=b;){if(x.x>=m&&x.x<=f&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Yi(a,h,c,u,l,d,x.x,x.y)&&Kt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=m&&M.x<=f&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&Yi(a,h,c,u,l,d,M.x,M.y)&&Kt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=_;){if(x.x>=m&&x.x<=f&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Yi(a,h,c,u,l,d,x.x,x.y)&&Kt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=b;){if(M.x>=m&&M.x<=f&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&Yi(a,h,c,u,l,d,M.x,M.y)&&Kt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Y_(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ws(i,r)&&_h(i,n,n.next,r)&&Br(i,r)&&Br(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Vr(n),Vr(n.next),n=s=r),n=n.next}while(n!==s);return wi(n)}function j_(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&r0(o,a)){let c=xh(o,a);o=wi(o,o.next),c=wi(c,c.next),kr(o,t,e,n,i,r,0),kr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Z_(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=gh(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(i0(l));for(i.sort(J_),r=0;r<i.length;r++)e=K_(i[r],e);return e}function J_(s,t){return s.x-t.x}function K_(s,t){const e=Q_(s,t);if(!e)return t;const n=xh(e,s);return wi(n,n.next),wi(e,e.next)}function Q_(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Yi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Br(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&t0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function t0(s,t){return Kt(s.prev,s,t.prev)<0&&Kt(t.next,s,s.next)<0}function e0(s,t,e,n){let i=s;do i.z===0&&(i.z=ra(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,n0(i)}function n0(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function ra(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function i0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Yi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function r0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!s0(s,t)&&(Br(s,t)&&Br(t,s)&&o0(s,t)&&(Kt(s.prev,s,t.prev)||Kt(s,t.prev,t))||Ws(s,t)&&Kt(s.prev,s,s.next)>0&&Kt(t.prev,t,t.next)>0)}function Kt(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ws(s,t){return s.x===t.x&&s.y===t.y}function _h(s,t,e,n){const i=Ts(Kt(s,t,e)),r=Ts(Kt(s,t,n)),o=Ts(Kt(e,n,s)),a=Ts(Kt(e,n,t));return!!(i!==r&&o!==a||i===0&&ws(s,e,t)||r===0&&ws(s,n,t)||o===0&&ws(e,s,n)||a===0&&ws(e,t,n))}function ws(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ts(s){return s>0?1:s<0?-1:0}function s0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&_h(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Br(s,t){return Kt(s.prev,s,s.next)<0?Kt(s,t,s.next)>=0&&Kt(s,s.prev,t)>=0:Kt(s,t,s.prev)<0||Kt(s,s.next,t)<0}function o0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function xh(s,t){const e=new sa(s.i,s.x,s.y),n=new sa(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function mc(s,t,e,n){const i=new sa(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sa(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function a0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Qi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Qi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];gc(t),_c(n,t);let o=t.length;e.forEach(gc);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,_c(n,e[c]);const a=X_.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function gc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function _c(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Da extends On{constructor(t=new Ls([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new nn(i,3)),this.setAttribute("uv",new nn(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,f=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const _=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:l0;let x,M=!1,y,E,C,v;_&&(x=_.getSpacedPoints(h),M=!0,d=!1,y=_.computeFrenetFrames(h,!1),E=new O,C=new O,v=new O),d||(p=0,m=0,g=0,f=0);const w=a.extractPoints(l);let P=w.shape;const z=w.holes;if(!Qi.isClockWise(P)){P=P.reverse();for(let J=0,Z=z.length;J<Z;J++){const at=z[J];Qi.isClockWise(at)&&(z[J]=at.reverse())}}const R=Qi.triangulateShape(P,z),D=P;for(let J=0,Z=z.length;J<Z;J++){const at=z[J];P=P.concat(at)}function B(J,Z,at){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(at).add(J)}const X=P.length,j=R.length;function H(J,Z,at){let xt,ct,At;const St=J.x-Z.x,Mt=J.y-Z.y,Ht=at.x-J.x,Bt=at.y-J.y,A=St*St+Mt*Mt,S=St*Bt-Mt*Ht;if(Math.abs(S)>Number.EPSILON){const V=Math.sqrt(A),it=Math.sqrt(Ht*Ht+Bt*Bt),st=Z.x-Mt/V,dt=Z.y+St/V,Et=at.x-Bt/it,L=at.y+Ht/it,F=((Et-st)*Bt-(L-dt)*Ht)/(St*Bt-Mt*Ht);xt=st+St*F-J.x,ct=dt+Mt*F-J.y;const ft=xt*xt+ct*ct;if(ft<=2)return new lt(xt,ct);At=Math.sqrt(ft/2)}else{let V=!1;St>Number.EPSILON?Ht>Number.EPSILON&&(V=!0):St<-Number.EPSILON?Ht<-Number.EPSILON&&(V=!0):Math.sign(Mt)===Math.sign(Bt)&&(V=!0),V?(xt=-Mt,ct=St,At=Math.sqrt(A)):(xt=St,ct=Mt,At=Math.sqrt(A/2))}return new lt(xt/At,ct/At)}const nt=[];for(let J=0,Z=D.length,at=Z-1,xt=J+1;J<Z;J++,at++,xt++)at===Z&&(at=0),xt===Z&&(xt=0),nt[J]=H(D[J],D[at],D[xt]);const Q=[];let k,G=nt.concat();for(let J=0,Z=z.length;J<Z;J++){const at=z[J];k=[];for(let xt=0,ct=at.length,At=ct-1,St=xt+1;xt<ct;xt++,At++,St++)At===ct&&(At=0),St===ct&&(St=0),k[xt]=H(at[xt],at[At],at[St]);Q.push(k),G=G.concat(k)}for(let J=0;J<p;J++){const Z=J/p,at=m*Math.cos(Z*Math.PI/2),xt=g*Math.sin(Z*Math.PI/2)+f;for(let ct=0,At=D.length;ct<At;ct++){const St=B(D[ct],nt[ct],xt);Ct(St.x,St.y,-at)}for(let ct=0,At=z.length;ct<At;ct++){const St=z[ct];k=Q[ct];for(let Mt=0,Ht=St.length;Mt<Ht;Mt++){const Bt=B(St[Mt],k[Mt],xt);Ct(Bt.x,Bt.y,-at)}}}const tt=g+f;for(let J=0;J<X;J++){const Z=d?B(P[J],G[J],tt):P[J];M?(C.copy(y.normals[0]).multiplyScalar(Z.x),E.copy(y.binormals[0]).multiplyScalar(Z.y),v.copy(x[0]).add(C).add(E),Ct(v.x,v.y,v.z)):Ct(Z.x,Z.y,0)}for(let J=1;J<=h;J++)for(let Z=0;Z<X;Z++){const at=d?B(P[Z],G[Z],tt):P[Z];M?(C.copy(y.normals[J]).multiplyScalar(at.x),E.copy(y.binormals[J]).multiplyScalar(at.y),v.copy(x[J]).add(C).add(E),Ct(v.x,v.y,v.z)):Ct(at.x,at.y,u/h*J)}for(let J=p-1;J>=0;J--){const Z=J/p,at=m*Math.cos(Z*Math.PI/2),xt=g*Math.sin(Z*Math.PI/2)+f;for(let ct=0,At=D.length;ct<At;ct++){const St=B(D[ct],nt[ct],xt);Ct(St.x,St.y,u+at)}for(let ct=0,At=z.length;ct<At;ct++){const St=z[ct];k=Q[ct];for(let Mt=0,Ht=St.length;Mt<Ht;Mt++){const Bt=B(St[Mt],k[Mt],xt);M?Ct(Bt.x,Bt.y+x[h-1].y,x[h-1].x+at):Ct(Bt.x,Bt.y,u+at)}}}et(),ot();function et(){const J=i.length/3;if(d){let Z=0,at=X*Z;for(let xt=0;xt<j;xt++){const ct=R[xt];_t(ct[2]+at,ct[1]+at,ct[0]+at)}Z=h+p*2,at=X*Z;for(let xt=0;xt<j;xt++){const ct=R[xt];_t(ct[0]+at,ct[1]+at,ct[2]+at)}}else{for(let Z=0;Z<j;Z++){const at=R[Z];_t(at[2],at[1],at[0])}for(let Z=0;Z<j;Z++){const at=R[Z];_t(at[0]+X*h,at[1]+X*h,at[2]+X*h)}}n.addGroup(J,i.length/3-J,0)}function ot(){const J=i.length/3;let Z=0;$(D,Z),Z+=D.length;for(let at=0,xt=z.length;at<xt;at++){const ct=z[at];$(ct,Z),Z+=ct.length}n.addGroup(J,i.length/3-J,1)}function $(J,Z){let at=J.length;for(;--at>=0;){const xt=at;let ct=at-1;ct<0&&(ct=J.length-1);for(let At=0,St=h+p*2;At<St;At++){const Mt=X*At,Ht=X*(At+1),Bt=Z+xt+Mt,A=Z+ct+Mt,S=Z+ct+Ht,V=Z+xt+Ht;Tt(Bt,A,S,V)}}}function Ct(J,Z,at){c.push(J),c.push(Z),c.push(at)}function _t(J,Z,at){ut(J),ut(Z),ut(at);const xt=i.length/3,ct=b.generateTopUV(n,i,xt-3,xt-2,xt-1);Pt(ct[0]),Pt(ct[1]),Pt(ct[2])}function Tt(J,Z,at,xt){ut(J),ut(Z),ut(xt),ut(Z),ut(at),ut(xt);const ct=i.length/3,At=b.generateSideWallUV(n,i,ct-6,ct-3,ct-2,ct-1);Pt(At[0]),Pt(At[1]),Pt(At[3]),Pt(At[1]),Pt(At[2]),Pt(At[3])}function ut(J){i.push(c[J*3+0]),i.push(c[J*3+1]),i.push(c[J*3+2])}function Pt(J){r.push(J.x),r.push(J.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return c0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new mh[i.type]().fromJSON(i)),new Da(n,t.options)}}const l0={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new lt(r,o),new lt(a,c),new lt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],m=t[i*3+1],g=t[i*3+2],f=t[r*3],p=t[r*3+1],_=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new lt(o,1-c),new lt(l,1-u),new lt(d,1-g),new lt(f,1-_)]:[new lt(a,1-c),new lt(h,1-u),new lt(m,1-g),new lt(p,1-_)]}};function c0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ra extends On{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new O,u=new O,d=new O;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const f=g/i*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(f),u.y=(t+e*Math.cos(p))*Math.sin(f),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(f),h.y=t*Math.sin(f),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const f=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,_=(i+1)*(m-1)+g,b=(i+1)*m+g;o.push(f,p,b),o.push(p,_,b)}this.setIndex(o),this.setAttribute("position",new nn(a,3)),this.setAttribute("normal",new nn(c,3)),this.setAttribute("uv",new nn(l,2))}static fromJSON(t){return new Ra(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}const Is={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class vh{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const h0=new vh;class Xs{constructor(t){this.manager=t!==void 0?t:h0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const An={};class u0 extends Error{constructor(t,e){super(t),this.response=e}}class d0 extends Xs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Is.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(An[t]!==void 0){An[t].push({onLoad:e,onProgress:n,onError:i});return}An[t]=[],An[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=An[t],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let f=0;const p=new ReadableStream({start(_){b();function b(){u.read().then(({done:x,value:M})=>{if(x)_.close();else{f+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:f,total:m});for(let E=0,C=h.length;E<C;E++){const v=h[E];v.onProgress&&v.onProgress(y)}_.enqueue(M),b()}})}}});return new Response(p)}else throw new u0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Is.add(t,l);const h=An[t];delete An[t];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=An[t];if(h===void 0)throw this.manager.itemError(t),l;delete An[t];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class f0 extends Xs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Is.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Ur("img");function c(){h(),Is.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class yh extends Xs{constructor(t){super(t)}load(t,e,n,i){const r=new Ce,o=new f0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class bh extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const zo=new ae,xc=new O,vc=new O;class p0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xc.setFromMatrixPosition(t.matrixWorld),e.position.copy(xc),vc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vc),e.updateMatrixWorld(),zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class m0 extends p0{constructor(){super(new oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class g0 extends bh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DefaultUp),this.updateMatrix(),this.target=new Me,this.shadow=new m0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _0 extends bh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class yc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class x0{constructor(){this.type="ShapePath",this.color=new Yt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new ia,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(_){const b=[];for(let x=0,M=_.length;x<M;x++){const y=_[x],E=new Ls;E.curves=y.curves,b.push(E)}return b}function n(_,b){const x=b.length;let M=!1;for(let y=x-1,E=0;E<x;y=E++){let C=b[y],v=b[E],w=v.x-C.x,P=v.y-C.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(C=b[E],w=-w,v=b[y],P=-P),_.y<C.y||_.y>v.y)continue;if(_.y===C.y){if(_.x===C.x)return!0}else{const z=P*(_.x-C.x)-w*(_.y-C.y);if(z===0)return!0;if(z<0)continue;M=!M}}else{if(_.y!==C.y)continue;if(v.x<=_.x&&_.x<=C.x||C.x<=_.x&&_.x<=v.x)return!0}}return M}const i=Qi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Ls,c.curves=a.curves,l.push(c),l;let h=!i(r[0].getPoints());h=t?!h:h;const u=[],d=[];let m=[],g=0,f;d[g]=void 0,m[g]=[];for(let _=0,b=r.length;_<b;_++)a=r[_],f=a.getPoints(),o=i(f),o=t?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new Ls,p:f},d[g].s.curves=a.curves,h&&g++,m[g]=[]):m[g].push({h:a,p:f[0]});if(!d[0])return e(r);if(d.length>1){let _=!1,b=0;for(let x=0,M=d.length;x<M;x++)u[x]=[];for(let x=0,M=d.length;x<M;x++){const y=m[x];for(let E=0;E<y.length;E++){const C=y[E];let v=!0;for(let w=0;w<d.length;w++)n(C.p,d[w].p)&&(x!==w&&b++,v?(v=!1,u[w].push(C)):_=!0);v&&u[x].push(C)}}b>0&&_===!1&&(m=u)}let p;for(let _=0,b=d.length;_<b;_++){c=d[_].s,l.push(c),p=m[_];for(let x=0,M=p.length;x<M;x++)c.holes.push(p[x].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);const bc={type:"change"},Uo={type:"start"},Mc={type:"end"};class v0 extends Ai{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Bt),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(bc),n.update(),r=i.NONE},this.update=(function(){const L=new O,F=new bi().setFromUnitVectors(t.up,new O(0,1,0)),ft=F.clone().invert(),gt=new O,pt=new bi,yt=2*Math.PI;return function(){const Ot=n.object.position;L.copy(Ot).sub(n.target),L.applyQuaternion(F),a.setFromVector3(L),n.autoRotate&&r===i.NONE&&w(C()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Nt=n.minAzimuthAngle,Wt=n.maxAzimuthAngle;return isFinite(Nt)&&isFinite(Wt)&&(Nt<-Math.PI?Nt+=yt:Nt>Math.PI&&(Nt-=yt),Wt<-Math.PI?Wt+=yt:Wt>Math.PI&&(Wt-=yt),Nt<=Wt?a.theta=Math.max(Nt,Math.min(Wt,a.theta)):a.theta=a.theta>(Nt+Wt)/2?Math.max(Nt,a.theta):Math.min(Wt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),L.setFromSpherical(a),L.applyQuaternion(ft),Ot.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||gt.distanceToSquared(n.object.position)>o||8*(1-pt.dot(n.object.quaternion))>o?(n.dispatchEvent(bc),gt.copy(n.object.position),pt.copy(n.object.quaternion),u=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",at),n.domElement.removeEventListener("pointercancel",At),n.domElement.removeEventListener("wheel",Ht),n.domElement.removeEventListener("pointermove",xt),n.domElement.removeEventListener("pointerup",ct),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Bt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new yc,c=new yc;let l=1;const h=new O;let u=!1;const d=new lt,m=new lt,g=new lt,f=new lt,p=new lt,_=new lt,b=new lt,x=new lt,M=new lt,y=[],E={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(L){c.theta-=L}function P(L){c.phi-=L}const z=(function(){const L=new O;return function(ft,gt){L.setFromMatrixColumn(gt,0),L.multiplyScalar(-ft),h.add(L)}})(),K=(function(){const L=new O;return function(ft,gt){n.screenSpacePanning===!0?L.setFromMatrixColumn(gt,1):(L.setFromMatrixColumn(gt,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ft),h.add(L)}})(),R=(function(){const L=new O;return function(ft,gt){const pt=n.domElement;if(n.object.isPerspectiveCamera){const yt=n.object.position;L.copy(yt).sub(n.target);let vt=L.length();vt*=Math.tan(n.object.fov/2*Math.PI/180),z(2*ft*vt/pt.clientHeight,n.object.matrix),K(2*gt*vt/pt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(ft*(n.object.right-n.object.left)/n.object.zoom/pt.clientWidth,n.object.matrix),K(gt*(n.object.top-n.object.bottom)/n.object.zoom/pt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function D(L){n.object.isPerspectiveCamera?l/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(L){n.object.isPerspectiveCamera?l*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(L){d.set(L.clientX,L.clientY)}function j(L){b.set(L.clientX,L.clientY)}function H(L){f.set(L.clientX,L.clientY)}function nt(L){m.set(L.clientX,L.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const F=n.domElement;w(2*Math.PI*g.x/F.clientHeight),P(2*Math.PI*g.y/F.clientHeight),d.copy(m),n.update()}function Q(L){x.set(L.clientX,L.clientY),M.subVectors(x,b),M.y>0?D(v()):M.y<0&&B(v()),b.copy(x),n.update()}function k(L){p.set(L.clientX,L.clientY),_.subVectors(p,f).multiplyScalar(n.panSpeed),R(_.x,_.y),f.copy(p),n.update()}function G(L){L.deltaY<0?B(v()):L.deltaY>0&&D(v()),n.update()}function tt(L){let F=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(-n.keyPanSpeed,0),F=!0;break}F&&(L.preventDefault(),n.update())}function et(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const L=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);d.set(L,F)}}function ot(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const L=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);f.set(L,F)}}function $(){const L=y[0].pageX-y[1].pageX,F=y[0].pageY-y[1].pageY,ft=Math.sqrt(L*L+F*F);b.set(0,ft)}function Ct(){n.enableZoom&&$(),n.enablePan&&ot()}function _t(){n.enableZoom&&$(),n.enableRotate&&et()}function Tt(L){if(y.length==1)m.set(L.pageX,L.pageY);else{const ft=Et(L),gt=.5*(L.pageX+ft.x),pt=.5*(L.pageY+ft.y);m.set(gt,pt)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const F=n.domElement;w(2*Math.PI*g.x/F.clientHeight),P(2*Math.PI*g.y/F.clientHeight),d.copy(m)}function ut(L){if(y.length===1)p.set(L.pageX,L.pageY);else{const F=Et(L),ft=.5*(L.pageX+F.x),gt=.5*(L.pageY+F.y);p.set(ft,gt)}_.subVectors(p,f).multiplyScalar(n.panSpeed),R(_.x,_.y),f.copy(p)}function Pt(L){const F=Et(L),ft=L.pageX-F.x,gt=L.pageY-F.y,pt=Math.sqrt(ft*ft+gt*gt);x.set(0,pt),M.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),D(M.y),b.copy(x)}function J(L){n.enableZoom&&Pt(L),n.enablePan&&ut(L)}function Z(L){n.enableZoom&&Pt(L),n.enableRotate&&Tt(L)}function at(L){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",xt),n.domElement.addEventListener("pointerup",ct)),it(L),L.pointerType==="touch"?A(L):St(L))}function xt(L){n.enabled!==!1&&(L.pointerType==="touch"?S(L):Mt(L))}function ct(L){st(L),y.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",xt),n.domElement.removeEventListener("pointerup",ct)),n.dispatchEvent(Mc),r=i.NONE}function At(L){st(L)}function St(L){let F;switch(L.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Li.DOLLY:if(n.enableZoom===!1)return;j(L),r=i.DOLLY;break;case Li.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;H(L),r=i.PAN}else{if(n.enableRotate===!1)return;X(L),r=i.ROTATE}break;case Li.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;X(L),r=i.ROTATE}else{if(n.enablePan===!1)return;H(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Uo)}function Mt(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;nt(L);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(L);break;case i.PAN:if(n.enablePan===!1)return;k(L);break}}function Ht(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(Uo),G(L),n.dispatchEvent(Mc))}function Bt(L){n.enabled===!1||n.enablePan===!1||tt(L)}function A(L){switch(dt(L),y.length){case 1:switch(n.touches.ONE){case Pi.ROTATE:if(n.enableRotate===!1)return;et(),r=i.TOUCH_ROTATE;break;case Pi.PAN:if(n.enablePan===!1)return;ot(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Pi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ct(),r=i.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_t(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Uo)}function S(L){switch(dt(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Tt(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ut(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;J(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Z(L),n.update();break;default:r=i.NONE}}function V(L){n.enabled!==!1&&L.preventDefault()}function it(L){y.push(L)}function st(L){delete E[L.pointerId];for(let F=0;F<y.length;F++)if(y[F].pointerId==L.pointerId){y.splice(F,1);return}}function dt(L){let F=E[L.pointerId];F===void 0&&(F=new lt,E[L.pointerId]=F),F.set(L.pageX,L.pageY)}function Et(L){const F=L.pointerId===y[0].pointerId?y[1]:y[0];return E[F.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",at),n.domElement.addEventListener("pointercancel",At),n.domElement.addEventListener("wheel",Ht,{passive:!1}),this.update()}}function Cn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Mh(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var He={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ar={duration:.5,overwrite:!1,delay:0},Ia,ge,Zt,Ke=1e8,qt=1/Ke,oa=Math.PI*2,y0=oa/4,b0=0,Sh=Math.sqrt,M0=Math.cos,S0=Math.sin,me=function(t){return typeof t=="string"},te=function(t){return typeof t=="function"},Rn=function(t){return typeof t=="number"},Oa=function(t){return typeof t>"u"},xn=function(t){return typeof t=="object"},Le=function(t){return t!==!1},Fa=function(){return typeof window<"u"},Es=function(t){return te(t)||me(t)},wh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Se=Array.isArray,aa=/(?:-?\.?\d|\.)+/gi,Th=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ji=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ko=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Eh=/[+-]=-?[.\d]+/,Ah=/[^,'"\[\]\s]+/gi,w0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jt,un,la,Na,Xe={},Os={},Ch,Lh=function(t){return(Os=lr(t,Xe))&&Ie},za=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Gr=function(t,e){return!e&&console.warn(t)},Ph=function(t,e){return t&&(Xe[t]=e)&&Os&&(Os[t]=e)||Xe},Hr=function(){return 0},T0={suppressEvents:!0,isStart:!0,kill:!1},Ps={suppressEvents:!0,kill:!1},E0={suppressEvents:!0},Ua={},Hn=[],ca={},Dh,ke={},Bo={},Sc=30,Ds=[],ka="",Ba=function(t){var e=t[0],n,i;if(xn(e)||te(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ds.length;i--&&!Ds[i].targetTest(e););n=Ds[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new eu(t[i],n)))||t.splice(i,1);return t},fi=function(t){return t._gsap||Ba(Qe(t))[0]._gsap},Rh=function(t,e,n){return(n=t[e])&&te(n)?t[e]():Oa(n)&&t.getAttribute&&t.getAttribute(e)||n},Pe=function(t,e){return(t=t.split(",")).forEach(e)||t},ee=function(t){return Math.round(t*1e5)/1e5||0},oe=function(t){return Math.round(t*1e7)/1e7||0},tr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},A0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Fs=function(){var t=Hn.length,e=Hn.slice(0),n,i;for(ca={},Hn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Va=function(t){return!!(t._initted||t._startAt||t.add)},Ih=function(t,e,n,i){Hn.length&&!ge&&Fs(),t.render(e,n,!!(ge&&e<0&&Va(t))),Hn.length&&!ge&&Fs()},Oh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ah).length<2?e:me(t)?t.trim():t},Fh=function(t){return t},qe=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},C0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},lr=function(t,e){for(var n in e)t[n]=e[n];return t},wc=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=xn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Ns=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Dr=function(t){var e=t.parent||Jt,n=t.keyframes?C0(Se(t.keyframes)):qe;if(Le(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},L0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Nh=function(t,e,n,i,r){var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},qs=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Xn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},pi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},P0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ha=function(t,e,n,i){return t._startAt&&(ge?t._startAt.revert(Ps):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},D0=function s(t){return!t||t._ts&&s(t.parent)},Tc=function(t){return t._repeat?cr(t._tTime,t=t.duration()+t._rDelay)*t:0},cr=function(t,e){var n=Math.floor(t=oe(t/e));return t&&n===t?n-1:n},zs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},$s=function(t){return t._end=oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||qt)||0))},Ys=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),$s(t),n._dirty||pi(n,t)),t},zh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=zs(t.rawTime(),e),(!e._dur||ts(0,e.totalDuration(),n)-e._tTime>qt)&&e.render(n,!0)),pi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-qt}},pn=function(t,e,n,i){return e.parent&&Xn(e),e._start=oe((Rn(n)?n:n||t!==Jt?je(t,n,e):t._time)+e._delay),e._end=oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Nh(t,e,"_first","_last",t._sort?"_start":0),ua(e)||(t._recent=e),i||zh(t,e),t._ts<0&&Ys(t,t._tTime),t},Uh=function(t,e){return(Xe.ScrollTrigger||za("scrollTrigger",e))&&Xe.ScrollTrigger.create(e,t)},kh=function(t,e,n,i,r){if(Ha(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!ge&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Dh!==Be.frame)return Hn.push(t),t._lazy=[r,i],1},R0=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},ua=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},I0=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&R0(t)&&!(!t._initted&&ua(t))||(t._ts<0||t._dp._ts<0)&&!ua(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=ts(0,t._tDur,e),h=cr(c,a),t._yoyo&&h&1&&(o=1-o),h!==cr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||ge||i||t._zTime===qt||!e&&t._zTime){if(!t._initted&&kh(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?qt:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&ha(t,e,n,!0),t._onUpdate&&!n&&Ge(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Ge(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Xn(t,1),!n&&!ge&&(Ge(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},O0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},hr=function(t,e,n,i){var r=t._repeat,o=oe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:oe(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Ys(t,t._tTime=t._tDur*a),t.parent&&$s(t),n||pi(t.parent,t),t},Ec=function(t){return t instanceof Ae?pi(t):hr(t,t._dur)},F0={_start:0,endTime:Hr,totalDuration:Hr},je=function s(t,e,n){var i=t.labels,r=t._recent||F0,o=t.duration()>=Ke?r.endTime(!1):t._dur,a,c,l;return me(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(Se(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},Rr=function(t,e,n){var i=Rn(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Le(c.vars.inherit)&&c.parent;o.immediateRender=Le(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new se(e[0],o,e[r+1])},$n=function(t,e){return t||t===0?e(t):e},ts=function(t,e,n){return n<t?t:n>e?e:n},be=function(t,e){return!me(t)||!(e=w0.exec(t))?"":e[1]},N0=function(t,e,n){return $n(n,function(i){return ts(t,e,i)})},da=[].slice,Bh=function(t,e){return t&&xn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&xn(t[0]))&&!t.nodeType&&t!==un},z0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return me(i)&&!e||Bh(i,1)?(r=n).push.apply(r,Qe(i)):n.push(i)})||n},Qe=function(t,e,n){return Zt&&!e&&Zt.selector?Zt.selector(t):me(t)&&!n&&(la||!ur())?da.call((e||Na).querySelectorAll(t),0):Se(t)?z0(t,n):Bh(t)?da.call(t,0):t?[t]:[]},fa=function(t){return t=Qe(t)[0]||Gr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Qe(e,n.querySelectorAll?n:n===t?Gr("Invalid scope")||Na.createElement("div"):t)}},Vh=function(t){return t.sort(function(){return .5-Math.random()})},Gh=function(t){if(te(t))return t;var e=xn(t)?t:{each:t},n=mi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return me(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(d,m,g){var f=(g||e).length,p=o[f],_,b,x,M,y,E,C,v,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,Ke])[1],!w){for(C=-Ke;C<(C=g[w++].getBoundingClientRect().left)&&w<f;);w<f&&w--}for(p=o[f]=[],_=c?Math.min(w,f)*h-.5:i%w,b=w===Ke?0:c?f*u/w-.5:i/w|0,C=0,v=Ke,E=0;E<f;E++)x=E%w-_,M=b-(E/w|0),p[E]=y=l?Math.abs(l==="y"?M:x):Sh(x*x+M*M),y>C&&(C=y),y<v&&(v=y);i==="random"&&Vh(p),p.max=C-v,p.min=v,p.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(w>f?f-1:l?l==="y"?f/w:w:Math.max(w,f/w))||0)*(i==="edges"?-1:1),p.b=f<0?r-f:r,p.u=be(e.amount||e.each)||0,n=n&&f<0?Kh(n):n}return f=(p[d]-p.min)/p.max||0,oe(p.b+(n?n(f):f)*p.v)+p.u}},pa=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Rn(n)?0:be(n))}},Hh=function(t,e){var n=Se(t),i,r;return!n&&xn(t)&&(i=n=t.radius||Ke,t.values?(t=Qe(t.values),(r=!Rn(t[0]))&&(i*=i)):t=pa(t.increment)),$n(e,n?te(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=Ke,h=0,u=t.length,d,m;u--;)r?(d=t[u].x-a,m=t[u].y-c,d=d*d+m*m):d=Math.abs(t[u]-a),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:o,r||h===o||Rn(o)?h:h+be(o)}:pa(t))},Wh=function(t,e,n,i){return $n(Se(t)?!e:n===!0?!!(n=0):!i,function(){return Se(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},U0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},k0=function(t,e){return function(n){return t(parseFloat(n))+(e||be(n))}},B0=function(t,e,n){return qh(t,e,0,1,n)},Xh=function(t,e,n){return $n(n,function(i){return t[~~e(i)]})},V0=function s(t,e,n){var i=e-t;return Se(t)?Xh(t,s(0,t.length),e):$n(n,function(r){return(i+(r-t)%i)%i+t})},G0=function s(t,e,n){var i=e-t,r=i*2;return Se(t)?Xh(t,s(0,t.length-1),e):$n(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Wr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Ah:aa),n+=t.substr(e,i-e)+Wh(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},qh=function(t,e,n,i,r){var o=e-t,a=i-n;return $n(r,function(c){return n+((c-t)/o*a||0)})},H0=function s(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var o=me(t),a={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Se(t)&&!Se(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(s(t[l-1],t[l]));u--,r=function(g){g*=u;var f=Math.min(d,~~g);return h[f](g-f)},n=e}else i||(t=lr(Se(t)?[]:{},t));if(!h){for(c in e)Ga.call(a,t,c,"get",e[c]);r=function(g){return qa(g,a)||(o?t.p:t)}}}return $n(n,r)},Ac=function(t,e,n){var i=t.labels,r=Ke,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},Ge=function(t,e,n){var i=t.vars,r=i[e],o=Zt,a=t._ctx,c,l,h;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&Hn.length&&Fs(),a&&(Zt=a),h=c?r.apply(l,c):r.call(l),Zt=o,h},Ar=function(t){return Xn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ge),t.progress()<1&&Ge(t,"onInterrupt"),t},Zi,$h=[],Yh=function(t){if(t)if(t=!t.name&&t.default||t,Fa()||t.headless){var e=t.name,n=te(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Hr,render:qa,add:Ga,kill:sx,modifier:rx,rawVars:0},o={targetTest:0,get:0,getSetter:Xa,aliases:{},register:0};if(ur(),t!==i){if(ke[e])return;qe(i,qe(Ns(t,r),o)),lr(i.prototype,lr(r,Ns(t,o))),ke[i.prop=e]=i,t.targetTest&&(Ds.push(i),Ua[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ph(e,i),t.register&&t.register(Ie,i,De)}else $h.push(t)},Xt=255,Cr={aqua:[0,Xt,Xt],lime:[0,Xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xt],navy:[0,0,128],white:[Xt,Xt,Xt],olive:[128,128,0],yellow:[Xt,Xt,0],orange:[Xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xt,0,0],pink:[Xt,192,203],cyan:[0,Xt,Xt],transparent:[Xt,Xt,Xt,0]},Vo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Xt+.5|0},jh=function(t,e,n){var i=t?Rn(t)?[t>>16,t>>8&Xt,t&Xt]:0:Cr.black,r,o,a,c,l,h,u,d,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Cr[t])i=Cr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Xt,i&Xt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Xt,t&Xt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(aa),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Vo(c+1/3,r,o),i[1]=Vo(c,r,o),i[2]=Vo(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Th),n&&i.length<4&&(i[3]=1),i}else i=t.match(aa)||Cr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/Xt,o=i[1]/Xt,a=i[2]/Xt,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?c=l=0:(m=u-d,l=h>.5?m/(2-u-d):m/(u+d),c=u===r?(o-a)/m+(o<a?6:0):u===o?(a-r)/m+2:(r-o)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Zh=function(t){var e=[],n=[],i=-1;return t.split(Wn).forEach(function(r){var o=r.match(ji)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Cc=function(t,e,n){var i="",r=(t+i).match(Wn),o=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!r)return t;if(r=r.map(function(d){return(d=jh(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Zh(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(Wn,"1").split(ji),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(Wn),u=l.length-1;a<u;a++)i+=l[a]+r[a];return i+l[u]},Wn=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Cr)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),W0=/hsl[a]?\(/,Jh=function(t){var e=t.join(" "),n;if(Wn.lastIndex=0,Wn.test(e))return n=W0.test(e),t[1]=Cc(t[1],n),t[0]=Cc(t[0],n,Zh(t[1])),!0},Xr,Be=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,h,u,d,m,g=function f(p){var _=s()-i,b=p===!0,x,M,y,E;if((_>t||_<0)&&(n+=_-e),i+=_,y=i-n,x=y-o,(x>0||b)&&(E=++u.frame,d=y-u.time*1e3,u.time=y=y/1e3,o+=x+(x>=r?4:r-x),M=1),b||(c=l(f)),M)for(m=0;m<a.length;m++)a[m](y,d,E,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Ch&&(!la&&Fa()&&(un=la=window,Na=un.document||{},Xe.gsap=Ie,(un.gsapVersions||(un.gsapVersions=[])).push(Ie.version),Lh(Os||un.GreenSockGlobals||!un.gsap&&un||{}),$h.forEach(Yh)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},Xr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Xr=0,l=Hr},lagSmoothing:function(p,_){t=p||1/0,e=Math.min(_||33,t)},fps:function(p){r=1e3/(p||240),o=u.time*1e3+r},add:function(p,_,b){var x=_?function(M,y,E,C){p(M,y,E,C),u.remove(x)}:p;return u.remove(p),a[b?"unshift":"push"](x),ur(),x},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},u})(),ur=function(){return!Xr&&Be.wake()},Ft={},X0=/^[\d.\-M][\d.\-,\s]/,q0=/["']/g,$0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(q0,"").trim():+l,i=c.substr(a+1).trim();return e},Y0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},j0=function(t){var e=(t+"").split("("),n=Ft[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[$0(e[1])]:Y0(t).split(",").map(Oh)):Ft._CE&&X0.test(t)?Ft._CE("",t):n},Kh=function(t){return function(e){return 1-t(1-e)}},Qh=function s(t,e){for(var n=t._first,i;n;)n instanceof Ae?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},mi=function(t,e){return t&&(te(t)?t:Ft[t]||j0(t))||e},Ci=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Pe(t,function(a){Ft[a]=Xe[a]=r,Ft[o=a.toLowerCase()]=n;for(var c in r)Ft[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ft[a+"."+c]=r[c]}),r},tu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Go=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/oa*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*S0((h-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:tu(a);return r=oa/r,c.config=function(l,h){return s(t,l,h)},c},Ho=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:tu(n);return i.config=function(r){return s(t,r)},i};Pe("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Ci(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ft.Linear.easeNone=Ft.none=Ft.Linear.easeIn;Ci("Elastic",Go("in"),Go("out"),Go());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Ci("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ci("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ci("Circ",function(s){return-(Sh(1-s*s)-1)});Ci("Sine",function(s){return s===1?1:-M0(s*y0)+1});Ci("Back",Ho("in"),Ho("out"),Ho());Ft.SteppedEase=Ft.steps=Xe.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-qt;return function(a){return((i*ts(0,o,a)|0)+r)*n}}};ar.ease=Ft["quad.out"];Pe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ka+=s+","+s+"Params,"});var eu=function(t,e){this.id=b0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Rh,this.set=e?e.getSetter:Xa},qr=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,hr(this,+e.duration,1,1),this.data=e.data,Zt&&(this._ctx=Zt,Zt.data.push(this)),Xr||Be.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,hr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ur(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ys(this,n),!r._dp||r.parent||zh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===qt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ih(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Tc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Tc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?cr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-qt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?zs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-qt?0:this._rts,this.totalTime(ts(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),$s(this),P0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ur(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qt&&(this._tTime-=qt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Le(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=E0);var i=ge;return ge=n,Va(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ge=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ec(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ec(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(je(this,n),Le(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Le(i)),this._dur||(this._zTime=-qt),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-qt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-qt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-qt)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=te(n)?n:Fh,a=function(){var l=i.then;i.then=null,te(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Ar(this)},s})();qe(qr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qt,_prom:0,_ps:!1,_rts:1});var Ae=(function(s){Mh(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Le(n.sortChildren),Jt&&pn(n.parent||Jt,Cn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Uh(Cn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Rr(0,arguments,this),this},e.from=function(i,r,o){return Rr(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Rr(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Dr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new se(i,r,je(this,o),1),this},e.call=function(i,r,o){return pn(this,se.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new se(i,o,je(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,h){return o.runBackwards=1,Dr(o).immediateRender=Le(o.immediateRender),this.staggerTo(i,r,o,a,c,l,h)},e.staggerFromTo=function(i,r,o,a,c,l,h,u){return a.startAt=o,Dr(a).immediateRender=Le(a.immediateRender),this.staggerTo(i,r,a,c,l,h,u)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:oe(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,m,g,f,p,_,b,x,M,y,E,C;if(this!==Jt&&h>c&&i>=0&&(h=c),h!==this._tTime||o||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),d=h,M=this._start,x=this._ts,_=!x,u&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(d=oe(h%p),h===c?(f=this._repeat,d=l):(y=oe(h/p),f=~~y,f&&f===y&&(d=l,f--),d>l&&(d=l)),y=cr(this._tTime,p),!a&&this._tTime&&y!==f&&this._tTime-y*p-this._dur<=0&&(y=f),E&&f&1&&(d=l-d,C=1),f!==y&&!this._lock){var v=E&&y&1,w=v===(E&&f&1);if(f<y&&(v=!v),a=v?0:h%l?l:h,this._lock=1,this.render(a||(C?0:oe(f*p)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&Ge(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,a=v?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Qh(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=O0(this,oe(a),oe(d)),b&&(h-=d-(d=b._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!y&&(Ge(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,o),d!==this._time||!this._ts&&!_){b=0,g&&(h+=this._zTime=-qt);break}}m=g}else{m=this._last;for(var P=i<0?i:d;m;){if(g=m._prev,(m._act||P<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,r,o||ge&&Va(m)),d!==this._time||!this._ts&&!_){b=0,g&&(h+=this._zTime=P?-qt:qt);break}}m=g}}if(b&&!r&&(this.pause(),b.render(d>=a?0:-qt)._zTime=d>=a?1:-1,this._ts))return this._start=M,$s(this),this.render(i,r,o);this._onUpdate&&!r&&Ge(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Xn(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(Ge(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Rn(r)||(r=je(this,r,i)),!(i instanceof qr)){if(Se(i))return i.forEach(function(a){return o.add(a,r)}),this;if(me(i))return this.addLabel(i,r);if(te(i))i=se.delayedCall(0,i);else return this}return this!==i?pn(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ke);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof se?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return me(i)?this.removeLabel(i):te(i)?this.killTweensOf(i):(i.parent===this&&qs(this,i),i===this._recent&&(this._recent=this._last),pi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=oe(Be.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=je(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=se.delayedCall(0,r||Hr,o);return a.data="isPause",this._hasPause=1,pn(this,a,je(this,i))},e.removePause=function(i){var r=this._first;for(i=je(this,i);r;)r._start===i&&r.data==="isPause"&&Xn(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)kn!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Qe(i),c=this._first,l=Rn(r),h;c;)c instanceof se?A0(c._targets,a)&&(l?(!kn||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=je(o,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,m,g=se.to(o,qe({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||qt,onStart:function(){if(o.pause(),!m){var p=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==p&&hr(g,p,0,1).render(g._time,!0,!0),m=1}h&&h.apply(g,u||[])}},r));return d?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,qe({startAt:{time:je(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ac(this,je(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ac(this,je(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+qt)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return pi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),pi(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=Ke,l,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,pn(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;hr(o,o===Jt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Jt._ts&&(Ih(Jt,zs(i,Jt)),Dh=Be.frame),Be.frame>=Sc){Sc+=He.autoSleep||120;var r=Jt._first;if((!r||!r._ts)&&He.autoSleep&&Be._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Be.sleep()}}},t})(qr);qe(Ae.prototype,{_lock:0,_hasPause:0,_forcing:0});var Z0=function(t,e,n,i,r,o,a){var c=new De(this._pt,t,e,0,1,au,null,r),l=0,h=0,u,d,m,g,f,p,_,b;for(c.b=n,c.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Wr(i)),o&&(b=[n,i],o(b,t,e),n=b[0],i=b[1]),d=n.match(ko)||[];u=ko.exec(i);)g=u[0],f=i.substring(l,u.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:f||h===1?f:",",s:p,c:g.charAt(1)==="="?tr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},l=ko.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Eh.test(i)||_)&&(c.e=0),this._pt=c,c},Ga=function(t,e,n,i,r,o,a,c,l,h){te(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:te(u)?l?t[e.indexOf("set")||!te(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,m=te(u)?l?ex:su:Wa,g;if(me(i)&&(~i.indexOf("random(")&&(i=Wr(i)),i.charAt(1)==="="&&(g=tr(d,i)+(be(d)||0),(g||g===0)&&(i=g))),!h||d!==i||ma)return!isNaN(d*i)&&i!==""?(g=new De(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?ix:ou,0,m),l&&(g.fp=l),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&za(e,i),Z0.call(this,t,e,d,i,m,c||He.stringFilter,l))},J0=function(t,e,n,i,r){if(te(t)&&(t=Ir(t,r,e,n,i)),!xn(t)||t.style&&t.nodeType||Se(t)||wh(t))return me(t)?Ir(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Ir(t[a],r,e,n,i);return o},nu=function(t,e,n,i,r,o){var a,c,l,h;if(ke[t]&&(a=new ke[t]).init(r,a.rawVars?e[t]:J0(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new De(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Zi))for(l=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=c;return a},kn,ma,Ha=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,m=i.autoRevert,g=t._dur,f=t._startAt,p=t._targets,_=t.parent,b=_&&_.data==="nested"?_.vars.targets:p,x=t._overwrite==="auto"&&!Ia,M=t.timeline,y,E,C,v,w,P,z,K,R,D,B,X,j;if(M&&(!d||!r)&&(r="none"),t._ease=mi(r,ar.ease),t._yEase=u?Kh(mi(u===!0?r:u,ar.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!M&&!!i.runBackwards,!M||d&&!i.stagger){if(K=p[0]?fi(p[0]).harness:0,X=K&&i[K.prop],y=Ns(i,Ua),f&&(f._zTime<0&&f.progress(1),e<0&&h&&a&&!m?f.render(-1,!0):f.revert(h&&g?Ps:T0),f._lazy=0),o){if(Xn(t._startAt=se.set(p,qe({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!f&&Le(c),startAt:null,delay:0,onUpdate:l&&function(){return Ge(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ge||!a&&!m)&&t._startAt.revert(Ps),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!f){if(e&&(a=!1),C=qe({overwrite:!1,data:"isFromStart",lazy:a&&!f&&Le(c),immediateRender:a,stagger:0,parent:_},y),X&&(C[K.prop]=X),Xn(t._startAt=se.set(p,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ge?t._startAt.revert(Ps):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,qt,qt);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&Le(c)||c&&!g,E=0;E<p.length;E++){if(w=p[E],z=w._gsap||Ba(p)[E]._gsap,t._ptLookup[E]=D={},ca[z.id]&&Hn.length&&Fs(),B=b===p?E:b.indexOf(w),K&&(R=new K).init(w,X||y,t,B,b)!==!1&&(t._pt=v=new De(t._pt,w,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(H){D[H]=v}),R.priority&&(P=1)),!K||X)for(C in y)ke[C]&&(R=nu(C,y,t,B,w,b))?R.priority&&(P=1):D[C]=v=Ga.call(t,w,C,"get",y[C],B,b,0,i.stringFilter);t._op&&t._op[E]&&t.kill(w,t._op[E]),x&&t._pt&&(kn=t,Jt.killTweensOf(w,D,t.globalTime(e)),j=!t.parent,kn=0),t._pt&&c&&(ca[z.id]=1)}P&&lu(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!j,d&&e<=0&&M.render(Ke,!0,!0)},K0=function(t,e,n,i,r,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,m;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,m=t._targets.length;m--;){if(h=d[m][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return ma=1,t.vars[e]="+=0",Ha(t,a),ma=0,c?Gr(e+" not eligible for reset"):1;l.push(h)}for(m=l.length;m--;)u=l[m],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=ee(n)+be(u.e)),u.b&&(u.b=h.s+be(u.b))},Q0=function(t,e){var n=t[0]?fi(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=lr({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},tx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Se(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Ir=function(t,e,n,i,r){return te(t)?t.call(e,n,i,r):me(t)&&~t.indexOf("random(")?Wr(t):t},iu=ka+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ru={};Pe(iu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return ru[s]=1});var se=(function(s){Mh(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Dr(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,m=c.overwrite,g=c.keyframes,f=c.defaults,p=c.scrollTrigger,_=c.yoyoEase,b=i.parent||Jt,x=(Se(n)||wh(n)?Rn(n[0]):"length"in i)?[n]:Qe(n),M,y,E,C,v,w,P,z;if(a._targets=x.length?Ba(x):Gr("GSAP target "+n+" not found. https://gsap.com",!He.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||d||Es(l)||Es(h)){if(i=a.vars,M=a.timeline=new Ae({data:"nested",defaults:f||{},targets:b&&b.data==="nested"?b.vars.targets:x}),M.kill(),M.parent=M._dp=Cn(a),M._start=0,d||Es(l)||Es(h)){if(C=x.length,P=d&&Gh(d),xn(d))for(v in d)~iu.indexOf(v)&&(z||(z={}),z[v]=d[v]);for(y=0;y<C;y++)E=Ns(i,ru),E.stagger=0,_&&(E.yoyoEase=_),z&&lr(E,z),w=x[y],E.duration=+Ir(l,Cn(a),y,w,x),E.delay=(+Ir(h,Cn(a),y,w,x)||0)-a._delay,!d&&C===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),M.to(w,E,P?P(y,w,x):0),M._ease=Ft.none;M.duration()?l=h=0:a.timeline=0}else if(g){Dr(qe(M.vars.defaults,{ease:"none"})),M._ease=mi(g.ease||i.ease||"none");var K=0,R,D,B;if(Se(g))g.forEach(function(X){return M.to(x,X,">")}),M.duration();else{E={};for(v in g)v==="ease"||v==="easeEach"||tx(v,g[v],E,g.easeEach);for(v in E)for(R=E[v].sort(function(X,j){return X.t-j.t}),K=0,y=0;y<R.length;y++)D=R[y],B={ease:D.e,duration:(D.t-(y?R[y-1].t:0))/100*l},B[v]=D.v,M.to(x,B,K),K+=B.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||a.duration(l=M.duration())}else a.timeline=0;return m===!0&&!Ia&&(kn=Cn(a),Jt.killTweensOf(x),kn=0),pn(b,Cn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!g&&a._start===oe(b._time)&&Le(u)&&D0(Cn(a))&&b.data!=="nested")&&(a._tTime=-qt,a.render(Math.max(0,-h)||0)),p&&Uh(Cn(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-qt&&!h?c:i<qt?0:i,d,m,g,f,p,_,b,x,M;if(!l)I0(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,x=this.timeline,this._repeat){if(f=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(f*100+i,r,o);if(d=oe(u%f),u===c?(g=this._repeat,d=l):(p=oe(u/f),g=~~p,g&&g===p?(d=l,g--):d>l&&(d=l)),_=this._yoyo&&g&1,_&&(M=this._yEase,d=l-d),p=cr(this._tTime,f),d===a&&!o&&this._initted&&g===p)return this._tTime=u,this;g!==p&&(x&&this._yEase&&Qh(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&d!==f&&this._initted&&(this._lock=o=1,this.render(oe(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(kh(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(M||this._ease)(d/l),this._from&&(this.ratio=b=1-b),!a&&u&&!r&&!p&&(Ge(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ha(this,i,r,o),Ge(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Ge(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ha(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Xn(this,1),!r&&!(h&&!a)&&(u||a||_)&&(Ge(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,c){Xr||Be.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ha(this,l),h=this._ease(l/this._dur),K0(this,i,r,o,a,h,l,c)?this.resetTo(i,r,o,a,1):(Ys(this,0),this.parent||Nh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ar(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ge),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,kn&&kn.vars.overwrite!==!0)._first||Ar(this),this.parent&&o!==this.timeline.totalDuration()&&hr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Qe(i):a,l=this._ptLookup,h=this._pt,u,d,m,g,f,p,_;if((!r||r==="all")&&L0(a,c))return r==="all"&&(this._pt=0),Ar(this);for(u=this._op=this._op||[],r!=="all"&&(me(r)&&(f={},Pe(r,function(b){return f[b]=1}),r=f),r=Q0(a,r)),_=a.length;_--;)if(~c.indexOf(a[_])){d=l[_],r==="all"?(u[_]=r,g=d,m={}):(m=u[_]=u[_]||{},g=r);for(f in g)p=d&&d[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&qs(this,p,"_pt"),delete d[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&h&&Ar(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Rr(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Rr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Jt.killTweensOf(i,r,o)},t})(qr);qe(se.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pe("staggerTo,staggerFrom,staggerFromTo",function(s){se[s]=function(){var t=new Ae,e=da.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Wa=function(t,e,n){return t[e]=n},su=function(t,e,n){return t[e](n)},ex=function(t,e,n,i){return t[e](i.fp,n)},nx=function(t,e,n){return t.setAttribute(e,n)},Xa=function(t,e){return te(t[e])?su:Oa(t[e])&&t.setAttribute?nx:Wa},ou=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ix=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},au=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},qa=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},rx=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},sx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?qs(this,e,"_pt"):e.dep||(n=1),e=i;return!n},ox=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},lu=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},De=(function(){function s(e,n,i,r,o,a,c,l,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||ou,this.d=c||this,this.set=l||Wa,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=ox,this.m=n,this.mt=r,this.tween=i},s})();Pe(ka+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Ua[s]=1});Xe.TweenMax=Xe.TweenLite=se;Xe.TimelineLite=Xe.TimelineMax=Ae;Jt=new Ae({sortChildren:!1,defaults:ar,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});He.stringFilter=Jh;var gi=[],Rs={},ax=[],Lc=0,lx=0,Wo=function(t){return(Rs[t]||ax).map(function(e){return e()})},ga=function(){var t=Date.now(),e=[];t-Lc>2&&(Wo("matchMediaInit"),gi.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=un.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),Wo("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Lc=t,Wo("matchMedia"))},cu=(function(){function s(e,n){this.selector=n&&fa(n),this.data=[],this._r=[],this.isReverted=!1,this.id=lx++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){te(n)&&(r=i,i=n,n=te);var o=this,a=function(){var l=Zt,h=o.selector,u;return l&&l!==o&&l.data.push(o),r&&(o.selector=fa(r)),Zt=o,u=i.apply(o,arguments),te(u)&&o._r.push(u),Zt=l,o.selector=h,o.isReverted=!1,u};return o.last=a,n===te?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=Zt;Zt=null,n(this),Zt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof se&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Ae?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof se)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=gi.length;o--;)gi[o].id===this.id&&gi.splice(o,1)},t.revert=function(n){this.kill(n||{})},s})(),cx=(function(){function s(e){this.contexts=[],this.scope=e,Zt&&Zt.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){xn(n)||(n={matches:n});var o=new cu(0,r||this.scope),a=o.conditions={},c,l,h;Zt&&!o.selector&&(o.selector=Zt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=un.matchMedia(n[l]),c&&(gi.indexOf(o)<0&&gi.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(ga):c.addEventListener("change",ga)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Us={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Yh(i)})},timeline:function(t){return new Ae(t)},getTweensOf:function(t,e){return Jt.getTweensOf(t,e)},getProperty:function(t,e,n,i){me(t)&&(t=Qe(t)[0]);var r=fi(t||{}).get,o=n?Fh:Oh;return n==="native"&&(n=""),t&&(e?o((ke[e]&&ke[e].get||r)(t,e,n,i)):function(a,c,l){return o((ke[a]&&ke[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=Qe(t),t.length>1){var i=t.map(function(h){return Ie.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=ke[e],a=fi(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(h){var u=new o;Zi._pt=0,u.init(t,n?h+n:h,Zi,0,[t]),u.render(1,u),Zi._pt&&qa(1,Zi)}:a.set(t,c);return o?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Ie.to(t,qe((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,h){return r.resetTo(e,c,l,h)};return o.tween=r,o},isTweening:function(t){return Jt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=mi(t.ease,ar.ease)),wc(ar,t||{})},config:function(t){return wc(He,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ke[a]&&!Xe[a]&&Gr(e+" effect requires "+a+" plugin.")}),Bo[e]=function(a,c,l){return n(Qe(a),qe(c||{},r),l)},o&&(Ae.prototype[e]=function(a,c,l){return this.add(Bo[e](a,xn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Ft[t]=mi(e)},parseEase:function(t,e){return arguments.length?mi(t,e):Ft},getById:function(t){return Jt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ae(t),i,r;for(n.smoothChildTiming=Le(t.smoothChildTiming),Jt.remove(n),n._dp=0,n._time=n._tTime=Jt._time,i=Jt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof se&&i.vars.onComplete===i._targets[0]))&&pn(n,i,i._start-i._delay),i=r;return pn(Jt,n,0),n},context:function(t,e){return t?new cu(t,e):Zt},matchMedia:function(t){return new cx(t)},matchMediaRefresh:function(){return gi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ga()},addEventListener:function(t,e){var n=Rs[t]||(Rs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Rs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:V0,wrapYoyo:G0,distribute:Gh,random:Wh,snap:Hh,normalize:B0,getUnit:be,clamp:N0,splitColor:jh,toArray:Qe,selector:fa,mapRange:qh,pipe:U0,unitize:k0,interpolate:H0,shuffle:Vh},install:Lh,effects:Bo,ticker:Be,updateRoot:Ae.updateRoot,plugins:ke,globalTimeline:Jt,core:{PropTween:De,globals:Ph,Tween:se,Timeline:Ae,Animation:qr,getCache:fi,_removeLinkedListItem:qs,reverting:function(){return ge},context:function(t){return t&&Zt&&(Zt.data.push(t),t._ctx=Zt),Zt},suppressOverwrites:function(t){return Ia=t}}};Pe("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Us[s]=se[s]});Be.add(Ae.updateRoot);Zi=Us.to({},{duration:0});var hx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},ux=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=hx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Xo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(me(r)&&(c={},Pe(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}ux(a,r)}}}},Ie=Us.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)ge?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Xo("roundProps",pa),Xo("modifiers"),Xo("snap",Hh))||Us;se.version=Ae.version=Ie.version="3.13.0";Ch=1;Fa()&&ur();Ft.Power0;Ft.Power1;Ft.Power2;Ft.Power3;Ft.Power4;Ft.Linear;Ft.Quad;Ft.Cubic;Ft.Quart;Ft.Quint;Ft.Strong;Ft.Elastic;Ft.Back;Ft.SteppedEase;Ft.Bounce;Ft.Sine;Ft.Expo;Ft.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pc,Bn,er,$a,hi,Dc,Ya,dx=function(){return typeof window<"u"},In={},oi=180/Math.PI,nr=Math.PI/180,Xi=Math.atan2,Rc=1e8,ja=/([A-Z])/g,fx=/(left|right|width|margin|padding|x)/i,px=/[\s,\(]\S/,mn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_a=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},mx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},gx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},_x=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},hu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},uu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},xx=function(t,e,n){return t.style[e]=n},vx=function(t,e,n){return t.style.setProperty(e,n)},yx=function(t,e,n){return t._gsap[e]=n},bx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Mx=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Sx=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Qt="transform",Re=Qt+"Origin",wx=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in In&&r){if(this.tfm=this.tfm||{},t!=="transform")t=mn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ln(i,a)}):this.tfm[t]=o.x?o[t]:Ln(i,t),t===Re&&(this.tfm.zOrigin=o.zOrigin);else return mn.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Qt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Re,e,"")),t=Qt}(r||e)&&this.props.push(t,e,r[t])},du=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Tx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(ja,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Ya(),(!r||!r.isStart)&&!n[Qt]&&(du(n),i.zOrigin&&n[Re]&&(n[Re]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},fu=function(t,e){var n={target:t,props:[],revert:Tx,save:wx};return t._gsap||Ie.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},pu,xa=function(t,e){var n=Bn.createElementNS?Bn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Bn.createElement(t);return n&&n.style?n:Bn.createElement(t)},tn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ja,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,dr(e)||e,1)||""},Ic="O,Moz,ms,Ms,Webkit".split(","),dr=function(t,e,n){var i=e||hi,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ic[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Ic[o]:"")+t},va=function(){dx()&&window.document&&(Pc=window,Bn=Pc.document,er=Bn.documentElement,hi=xa("div")||{style:{}},xa("div"),Qt=dr(Qt),Re=Qt+"Origin",hi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pu=!!dr("perspective"),Ya=Ie.core.reverting,$a=1)},Oc=function(t){var e=t.ownerSVGElement,n=xa("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),er.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),er.removeChild(n),r},Fc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},mu=function(t){var e,n;try{e=t.getBBox()}catch{e=Oc(t),n=1}return e&&(e.width||e.height)||n||(e=Oc(t)),e&&!e.width&&!e.x&&!e.y?{x:+Fc(t,["x","cx","x1"])||0,y:+Fc(t,["y","cy","y1"])||0,width:0,height:0}:e},gu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&mu(t))},Ti=function(t,e){if(e){var n=t.style,i;e in In&&e!==Re&&(e=Qt),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ja,"-$1").toLowerCase())):n.removeAttribute(e)}},Vn=function(t,e,n,i,r,o){var a=new De(t._pt,e,n,0,1,o?uu:hu);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Nc={deg:1,rad:1,turn:1},Ex={grid:1,flex:1},qn=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=hi.style,c=fx.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",m=i==="%",g,f,p,_;if(i===o||!r||Nc[i]||Nc[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),_=t.getCTM&&gu(t),(m||o==="%")&&(In[e]||~e.indexOf("adius")))return g=_?t.getBBox()[c?"width":"height"]:t[h],ee(m?r/g*u:r/100*g);if(a[c?"width":"height"]=u+(d?o:i),f=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,_&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===Bn||!f.appendChild)&&(f=Bn.body),p=f._gsap,p&&m&&p.width&&c&&p.time===Be.time&&!p.uncache)return ee(r/p.width*u);if(m&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=u+i,g=t[h],b?t.style[e]=b:Ti(t,e)}else(m||o==="%")&&!Ex[tn(f,"display")]&&(a.position=tn(t,"position")),f===t&&(a.position="static"),f.appendChild(hi),g=hi[h],f.removeChild(hi),a.position="absolute";return c&&m&&(p=fi(f),p.time=Be.time,p.width=f[h]),ee(d?g*r/u:g&&r?u/g*r:0)},Ln=function(t,e,n,i){var r;return $a||va(),e in mn&&e!=="transform"&&(e=mn[e],~e.indexOf(",")&&(e=e.split(",")[0])),In[e]&&e!=="transform"?(r=Yr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Bs(tn(t,Re))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ks[e]&&ks[e](t,e,n)||tn(t,e)||Rh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?qn(t,e,r,n)+n:r},Ax=function(t,e,n,i){if(!n||n==="none"){var r=dr(e,t,1),o=r&&tn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=tn(t,"borderTopColor"))}var a=new De(this._pt,t.style,e,0,1,au),c=0,l=0,h,u,d,m,g,f,p,_,b,x,M,y;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=tn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(f=t.style[e],t.style[e]=i,i=tn(t,e)||i,f?t.style[e]=f:Ti(t,e)),h=[n,i],Jh(h),n=h[0],i=h[1],d=n.match(ji)||[],y=i.match(ji)||[],y.length){for(;u=ji.exec(i);)p=u[0],b=i.substring(c,u.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(f=d[l++]||"")&&(m=parseFloat(f)||0,M=f.substr((m+"").length),p.charAt(1)==="="&&(p=tr(m,p)+M),_=parseFloat(p),x=p.substr((_+"").length),c=ji.lastIndex-x.length,x||(x=x||He.units[e]||M,c===i.length&&(i+=x,a.e+=x)),M!==x&&(m=qn(t,e,f,x)||0),a._pt={_next:a._pt,p:b||l===1?b:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?uu:hu;return Eh.test(i)&&(a.e=0),this._pt=a,a},zc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Cx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=zc[n]||n,e[1]=zc[i]||i,e.join(" ")},Lx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],In[a]&&(c=1,a=a==="transformOrigin"?Re:Qt),Ti(n,a);c&&(Ti(n,Qt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Yr(n,1),o.uncache=1,du(i)))}},ks={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new De(t._pt,e,n,0,0,Lx);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},$r=[1,0,0,1,0,0],_u={},xu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Uc=function(t){var e=tn(t,Qt);return xu(e)?$r:e.substr(7).match(Th).map(ee)},Za=function(t,e){var n=t._gsap||fi(t),i=t.style,r=Uc(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?$r:r):(r===$r&&!t.offsetParent&&t!==er&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,a=t.nextElementSibling,er.appendChild(t)),r=Uc(t),c?i.display=c:Ti(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):er.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ya=function(t,e,n,i,r,o){var a=t._gsap,c=r||Za(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,m=c[0],g=c[1],f=c[2],p=c[3],_=c[4],b=c[5],x=e.split(" "),M=parseFloat(x[0])||0,y=parseFloat(x[1])||0,E,C,v,w;n?c!==$r&&(C=m*p-g*f)&&(v=M*(p/C)+y*(-f/C)+(f*b-p*_)/C,w=M*(-g/C)+y*(m/C)-(m*b-g*_)/C,M=v,y=w):(E=mu(t),M=E.x+(~x[0].indexOf("%")?M/100*E.width:M),y=E.y+(~(x[1]||x[0]).indexOf("%")?y/100*E.height:y)),i||i!==!1&&a.smooth?(_=M-l,b=y-h,a.xOffset=u+(_*m+b*f)-_,a.yOffset=d+(_*g+b*p)-b):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=y,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Re]="0px 0px",o&&(Vn(o,a,"xOrigin",l,M),Vn(o,a,"yOrigin",h,y),Vn(o,a,"xOffset",u,a.xOffset),Vn(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+y)},Yr=function(t,e){var n=t._gsap||new eu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=tn(t,Re)||"0",h,u,d,m,g,f,p,_,b,x,M,y,E,C,v,w,P,z,K,R,D,B,X,j,H,nt,Q,k,G,tt,et,ot;return h=u=d=f=p=_=b=x=M=0,m=g=1,n.svg=!!(t.getCTM&&gu(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Qt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Qt]!=="none"?c[Qt]:"")),i.scale=i.rotate=i.translate="none"),C=Za(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),l=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),ya(t,j||l,!!j||n.originIsAbsolute,n.smooth!==!1,C)),y=n.xOrigin||0,E=n.yOrigin||0,C!==$r&&(z=C[0],K=C[1],R=C[2],D=C[3],h=B=C[4],u=X=C[5],C.length===6?(m=Math.sqrt(z*z+K*K),g=Math.sqrt(D*D+R*R),f=z||K?Xi(K,z)*oi:0,b=R||D?Xi(R,D)*oi+f:0,b&&(g*=Math.abs(Math.cos(b*nr))),n.svg&&(h-=y-(y*z+E*R),u-=E-(y*K+E*D))):(ot=C[6],tt=C[7],Q=C[8],k=C[9],G=C[10],et=C[11],h=C[12],u=C[13],d=C[14],v=Xi(ot,G),p=v*oi,v&&(w=Math.cos(-v),P=Math.sin(-v),j=B*w+Q*P,H=X*w+k*P,nt=ot*w+G*P,Q=B*-P+Q*w,k=X*-P+k*w,G=ot*-P+G*w,et=tt*-P+et*w,B=j,X=H,ot=nt),v=Xi(-R,G),_=v*oi,v&&(w=Math.cos(-v),P=Math.sin(-v),j=z*w-Q*P,H=K*w-k*P,nt=R*w-G*P,et=D*P+et*w,z=j,K=H,R=nt),v=Xi(K,z),f=v*oi,v&&(w=Math.cos(v),P=Math.sin(v),j=z*w+K*P,H=B*w+X*P,K=K*w-z*P,X=X*w-B*P,z=j,B=H),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,_=180-_),m=ee(Math.sqrt(z*z+K*K+R*R)),g=ee(Math.sqrt(X*X+ot*ot)),v=Xi(B,X),b=Math.abs(v)>2e-4?v*oi:0,M=et?1/(et<0?-et:et):0),n.svg&&(j=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!xu(tn(t,Qt)),j&&t.setAttribute("transform",j))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(m*=-1,b+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=ee(m),n.scaleY=ee(g),n.rotation=ee(f)+a,n.rotationX=ee(p)+a,n.rotationY=ee(_)+a,n.skewX=b+a,n.skewY=x+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Re]=Bs(l)),n.xOffset=n.yOffset=0,n.force3D=He.force3D,n.renderTransform=n.svg?Dx:pu?vu:Px,n.uncache=0,n},Bs=function(t){return(t=t.split(" "))[0]+" "+t[1]},qo=function(t,e,n){var i=be(e);return ee(parseFloat(e)+parseFloat(qn(t,"x",n+"px",i)))+i},Px=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,vu(t,e)},ni="0deg",wr="0px",ii=") ",vu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,f=n.scaleY,p=n.transformPerspective,_=n.force3D,b=n.target,x=n.zOrigin,M="",y=_==="auto"&&t&&t!==1||_===!0;if(x&&(u!==ni||h!==ni)){var E=parseFloat(h)*nr,C=Math.sin(E),v=Math.cos(E),w;E=parseFloat(u)*nr,w=Math.cos(E),o=qo(b,o,C*w*-x),a=qo(b,a,-Math.sin(E)*-x),c=qo(b,c,v*w*-x+x)}p!==wr&&(M+="perspective("+p+ii),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(y||o!==wr||a!==wr||c!==wr)&&(M+=c!==wr||y?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+ii),l!==ni&&(M+="rotate("+l+ii),h!==ni&&(M+="rotateY("+h+ii),u!==ni&&(M+="rotateX("+u+ii),(d!==ni||m!==ni)&&(M+="skew("+d+", "+m+ii),(g!==1||f!==1)&&(M+="scale("+g+", "+f+ii),b.style[Qt]=M||"translate(0, 0)"},Dx=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,f=n.yOrigin,p=n.xOffset,_=n.yOffset,b=n.forceCSS,x=parseFloat(o),M=parseFloat(a),y,E,C,v,w;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=nr,l*=nr,y=Math.cos(c)*u,E=Math.sin(c)*u,C=Math.sin(c-l)*-d,v=Math.cos(c-l)*d,l&&(h*=nr,w=Math.tan(l-h),w=Math.sqrt(1+w*w),C*=w,v*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),y*=w,E*=w)),y=ee(y),E=ee(E),C=ee(C),v=ee(v)):(y=u,v=d,E=C=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=qn(m,"x",o,"px"),M=qn(m,"y",a,"px")),(g||f||p||_)&&(x=ee(x+g-(g*y+f*C)+p),M=ee(M+f-(g*E+f*v)+_)),(i||r)&&(w=m.getBBox(),x=ee(x+i/100*w.width),M=ee(M+r/100*w.height)),w="matrix("+y+","+E+","+C+","+v+","+x+","+M+")",m.setAttribute("transform",w),b&&(m.style[Qt]=w)},Rx=function(t,e,n,i,r){var o=360,a=me(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?oi:1),l=c-i,h=i+l+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),u==="cw"&&l<0?l=(l+o*Rc)%o-~~(l/o)*o:u==="ccw"&&l>0&&(l=(l-o*Rc)%o-~~(l/o)*o)),t._pt=d=new De(t._pt,e,n,i,l,mx),d.e=h,d.u="deg",t._props.push(n),d},kc=function(t,e){for(var n in e)t[n]=e[n];return t},Ix=function(t,e,n){var i=kc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,u,d,m,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Qt]=e,a=Yr(n,1),Ti(n,Qt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Qt],o[Qt]=e,a=Yr(n,1),o[Qt]=l);for(c in In)l=i[c],h=a[c],l!==h&&r.indexOf(c)<0&&(m=be(l),g=be(h),u=m!==g?qn(n,c,l,g):parseFloat(l),d=parseFloat(h),t._pt=new De(t._pt,a,c,u,d-u,_a),t._pt.u=g||0,t._props.push(c));kc(a,i)};Pe("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});ks[t>1?"border"+s:s]=function(a,c,l,h,u){var d,m;if(arguments.length<4)return d=o.map(function(g){return Ln(a,g,l)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(h+"").split(" "),m={},o.forEach(function(g,f){return m[g]=d[f]=d[f]||d[(f-1)/2|0]}),a.init(c,m,u)}});var yu={name:"css",register:va,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,h,u,d,m,g,f,p,_,b,x,M,y,E,C,v;$a||va(),this.styles=this.styles||fu(t),v=this.styles.props,this.tween=n;for(f in e)if(f!=="autoRound"&&(h=e[f],!(ke[f]&&nu(f,e,n,i,t,r)))){if(m=typeof h,g=ks[f],m==="function"&&(h=h.call(n,i,t,r),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=Wr(h)),g)g(this,t,f,h,n)&&(C=1);else if(f.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(f)+"").trim(),h+="",Wn.lastIndex=0,Wn.test(l)||(p=be(l),_=be(h)),_?p!==_&&(l=qn(t,f,l,_)+_):p&&(h+=p),this.add(a,"setProperty",l,h,i,r,0,0,f),o.push(f),v.push(f,0,a[f]);else if(m!=="undefined"){if(c&&f in c?(l=typeof c[f]=="function"?c[f].call(n,i,t,r):c[f],me(l)&&~l.indexOf("random(")&&(l=Wr(l)),be(l+"")||l==="auto"||(l+=He.units[f]||be(Ln(t,f))||""),(l+"").charAt(1)==="="&&(l=Ln(t,f))):l=Ln(t,f),d=parseFloat(l),b=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),u=parseFloat(h),f in mn&&(f==="autoAlpha"&&(d===1&&Ln(t,"visibility")==="hidden"&&u&&(d=0),v.push("visibility",0,a.visibility),Vn(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),f!=="scale"&&f!=="transform"&&(f=mn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),x=f in In,x){if(this.styles.save(f),m==="string"&&h.substring(0,6)==="var(--"&&(h=tn(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),M||(y=t._gsap,y.renderTransform&&!e.parseTransform||Yr(t,e.parseTransform),E=e.smoothOrigin!==!1&&y.smooth,M=this._pt=new De(this._pt,a,Qt,0,1,y.renderTransform,y,0,-1),M.dep=1),f==="scale")this._pt=new De(this._pt,y,"scaleY",y.scaleY,(b?tr(y.scaleY,b+u):u)-y.scaleY||0,_a),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){v.push(Re,0,a[Re]),h=Cx(h),y.svg?ya(t,h,0,E,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==y.zOrigin&&Vn(this,y,"zOrigin",y.zOrigin,_),Vn(this,a,f,Bs(l),Bs(h)));continue}else if(f==="svgOrigin"){ya(t,h,1,E,0,this);continue}else if(f in _u){Rx(this,y,f,d,b?tr(d,b+h):h);continue}else if(f==="smoothOrigin"){Vn(this,y,"smooth",y.smooth,h);continue}else if(f==="force3D"){y[f]=h;continue}else if(f==="transform"){Ix(this,h,t);continue}}else f in a||(f=dr(f)||f);if(x||(u||u===0)&&(d||d===0)&&!px.test(h)&&f in a)p=(l+"").substr((d+"").length),u||(u=0),_=be(h)||(f in He.units?He.units[f]:p),p!==_&&(d=qn(t,f,l,_)),this._pt=new De(this._pt,x?y:a,f,d,(b?tr(d,b+u):u)-d,!x&&(_==="px"||f==="zIndex")&&e.autoRound!==!1?_x:_a),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=gx);else if(f in a)Ax.call(this,t,f,l,b?b+h:h);else if(f in t)this.add(t,f,l||t[f],b?b+h:h,i,r);else if(f!=="parseTransform"){za(f,h);continue}x||(f in a?v.push(f,0,a[f]):typeof t[f]=="function"?v.push(f,2,t[f]()):v.push(f,1,l||t[f])),o.push(f)}}C&&lu(this)},render:function(t,e){if(e.tween._time||!Ya())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ln,aliases:mn,getSetter:function(t,e,n){var i=mn[e];return i&&i.indexOf(",")<0&&(e=i),e in In&&e!==Re&&(t._gsap.x||Ln(t,"x"))?n&&Dc===n?e==="scale"?bx:yx:(Dc=n||{})&&(e==="scale"?Mx:Sx):t.style&&!Oa(t.style[e])?xx:~e.indexOf("-")?vx:Xa(t,e)},core:{_removeProperty:Ti,_getMatrix:Za}};Ie.utils.checkPrefix=dr;Ie.core.getStyleSaver=fu;(function(s,t,e,n){var i=Pe(s+","+t+","+e,function(r){In[r]=1});Pe(t,function(r){He.units[r]="deg",_u[r]=1}),mn[i[13]]=s+","+t,Pe(n,function(r){var o=r.split(":");mn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){He.units[s]="px"});Ie.registerPlugin(yu);var Ja=Ie.registerPlugin(yu)||Ie;Ja.core.Tween;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class _n{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),_n.nextNameID=_n.nextNameID||0,this.$name.id=`lil-gui-name-${++_n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ox extends _n{constructor(t,e,n){super(t,e,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ba(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Fx={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:ba,toHexString:ba},jr={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},Nx={isPrimitive:!1,match:s=>Array.isArray(s)||ArrayBuffer.isView(s),fromHexString(s,t,e=1){const n=jr.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return jr.toHexString(i)}},zx={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const n=jr.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return jr.toHexString(i)}},Ux=[Fx,jr,Nx,zx];function kx(s){return Ux.find(t=>t.match(s))}class Bx extends _n{constructor(t,e,n,i){super(t,e,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=kx(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=ba(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class $o extends _n{constructor(t,e,n){super(t,e,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Vx extends _n{constructor(t,e,n,i,r,o){super(t,e,n,"lil-number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let b=parseFloat(this.$input.value);isNaN(b)||(this._stepExplicit&&(b=this._snap(b)),this.setValue(this._clamp(b)))},n=b=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+b),this.$input.value=this.getValue())},i=b=>{b.key==="Enter"&&this.$input.blur(),b.code==="ArrowUp"&&(b.preventDefault(),n(this._step*this._arrowKeyMultiplier(b))),b.code==="ArrowDown"&&(b.preventDefault(),n(this._step*this._arrowKeyMultiplier(b)*-1))},r=b=>{this._inputFocused&&(b.preventDefault(),n(this._step*this._normalizeMouseWheel(b)))};let o=!1,a,c,l,h,u;const d=5,m=b=>{a=b.clientX,c=l=b.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",f)},g=b=>{if(o){const x=b.clientX-a,M=b.clientY-c;Math.abs(M)>d?(b.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&f()}if(!o){const x=b.clientY-l;u-=x*this._step*this._arrowKeyMultiplier(b),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}l=b.clientY},f=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",f)},p=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(_,b,x,M,y)=>(_-b)/(x-b)*(y-M)+M,e=_=>{const b=this.$slider.getBoundingClientRect();let x=t(_,b.left,b.right,this._min,this._max);this._snapClampSetValue(x)},n=_=>{this._setDraggingStyle(!0),e(_.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=_=>{e(_.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,c;const l=_=>{_.preventDefault(),this._setDraggingStyle(!0),e(_.touches[0].clientX),o=!1},h=_=>{_.touches.length>1||(this._hasScrollBar?(a=_.touches[0].clientX,c=_.touches[0].clientY,o=!0):l(_),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=_=>{if(o){const b=_.touches[0].clientX-a,x=_.touches[0].clientY-c;Math.abs(b)>Math.abs(x)?l(_):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else _.preventDefault(),e(_.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),g=400;let f;const p=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const x=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(m,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Gx extends _n{constructor(t,e,n,i){super(t,e,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Hx extends _n{constructor(t,e,n){super(t,e,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Wx=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
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
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
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
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
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
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
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
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
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
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
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
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
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
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function Xx(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Bc=!1;class Ka{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),c&&this.domElement.classList.add("lil-allow-touch-styles"),!Bc&&a&&(Xx(Wx),Bc=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(t,e,n,i,r){if(Object(n)===n)return new Gx(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new Vx(this,t,e,n,i,r);case"boolean":return new Ox(this,t,e);case"string":return new Hx(this,t,e);case"function":return new $o(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new Bx(this,t,e,n)}addFolder(t){const e=new Ka({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof $o||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof $o)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}class qx extends Xs{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new d0(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const c=r.parse(JSON.parse(a));e&&e(c)},n,i)}parse(t){return new $x(t)}}class $x{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=Yx(t,e,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function Yx(s,t,e){const n=Array.from(s),i=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const h=n[l];if(h===`
`)a=0,c-=r;else{const u=jx(h,i,a,c,e);a+=u.offsetX,o.push(u.path)}}return o}function jx(s,t,e,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new x0;let a,c,l,h,u,d,m,g;if(r.o){const f=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,_=f.length;p<_;)switch(f[p++]){case"m":a=f[p++]*t+e,c=f[p++]*t+n,o.moveTo(a,c);break;case"l":a=f[p++]*t+e,c=f[p++]*t+n,o.lineTo(a,c);break;case"q":l=f[p++]*t+e,h=f[p++]*t+n,u=f[p++]*t+e,d=f[p++]*t+n,o.quadraticCurveTo(u,d,l,h);break;case"b":l=f[p++]*t+e,h=f[p++]*t+n,u=f[p++]*t+e,d=f[p++]*t+n,m=f[p++]*t+e,g=f[p++]*t+n,o.bezierCurveTo(u,d,m,g,l,h);break}}return{offsetX:r.ha*t,path:o}}class Zx extends Da{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}const Qa=document.querySelector("canvas.webgl"),Jx=document.getElementById("startScreen"),bu=document.getElementById("gameUI"),Mu=document.getElementById("gameOver"),Kx=document.getElementById("startBtn"),Qx=document.getElementById("restartBtn"),Su=document.getElementById("score"),tv=document.getElementById("finalScore");let js="start",Zr=0;const Yn=new D_,ev=new yh;ev.load("game background.jpg",s=>{Yn.background=s});const es=new vh;es.onStart=()=>{console.log("loading started")};es.onLoad=()=>{console.log("loading finished")};es.onProgress=()=>{console.log("loading progressing")};es.onError=()=>{console.log("loading error")};const nv=new yh(es),tl=nv.load("textures/minecraft.png"),fn={width:window.innerWidth,height:window.innerHeight},Ei=new Je(75,fn.width/fn.height,.1,100);Ei.position.z=3;Yn.add(Ei);const iv=new qx;iv.load("fonts/helvetiker_regular.typeface.json",s=>{const t=new Zx("Welcome to Three.js Game",{font:s,size:.5,height:.1,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5}),e=new Qr({color:"red"}),n=new cn(t,e);Yn.add(n),n.position.set(-5,.5,1),n.lookAt(Ei.position)});const rv=new _0(16777215,.5);Yn.add(rv);const wu=new g0(16777215,.5);wu.position.set(5,5,5);Yn.add(wu);tl.generateMipmaps=!1;tl.minFilter=ve;const sv=new Qr({map:tl}),Or=[];for(let s=0;s<5;s++){const t=new pr(.4,.4,.4),e=new Qr({color:"red"}),n=new cn(t,e);n.position.x=2+s*5,n.position.y=-.5,Yn.add(n),Or.push(n)}const ov=new Ra(1,.4,16,100),Vc={color:"yellow"},We=new cn(ov,sv);Yn.add(We);We.position.x=-3;We.scale.set(.5,.5,.5);const av={spin:()=>{Ja.to(We.rotation,{duration:1,y:We.rotation.y+Math.PI*2})}};let Yo=!1;function Tu(){Yo||js!=="playing"||(Yo=!0,Ja.to(We.position,{y:1,duration:.7,ease:"power1.out",yoyo:!0,repeat:1,onComplete:()=>{We.position.y=0,Yo=!1}}))}window.addEventListener("keydown",s=>{s.code==="Space"&&(s.preventDefault(),Tu())});function Eu(){js="playing",Zr=0,Su.textContent=Zr,Jx.style.display="none",bu.style.display="block",Mu.style.display="none",We.position.y=0,Or.forEach((s,t)=>{s.position.x=2+t*5})}function lv(){js="gameOver",tv.textContent=Zr,Mu.style.display="flex",bu.style.display="none"}Kx.addEventListener("click",Eu);Qx.addEventListener("click",Eu);const Zs=new Ka;Zs.add(We.material,"wireframe").name("Wireframe");Zs.addColor(Vc,"color").name("Color").onChange(()=>{We.material.color.set(Vc.color)});Zs.add(av,"spin").name("spin donut");Zs.add({jump:Tu},"jump").name("Jump Donut");window.addEventListener("resize",()=>{fn.width=window.innerWidth,fn.height=window.innerHeight,Ei.aspect=fn.width/fn.height,Ei.updateProjectionMatrix(),Jr.setSize(fn.width,fn.height),Jr.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Au=new v0(Ei,Qa);Au.enableDamping=!0;const Jr=new uh({canvas:Qa});Jr.setSize(fn.width,fn.height);Jr.setPixelRatio(Math.min(window.devicePixelRatio,2));window.addEventListener("dblclick",()=>document.fullscreenElement?document.exitFullscreen():Qa.requestFullscreen());const Cu=()=>{if(We.position.y<0&&(We.position.y=0),Au.update(),js==="playing"){Or.forEach(t=>{if(t.position.x-=.03,t.position.x<-5){const e=Or.reduce((n,i)=>n.position.x>i.position.x?n:i);t.position.x=e.position.x+5,Zr++,Su.textContent=Zr}});const s=new Mi().setFromCenterAndSize(We.position,new O(.6,.6,.6));for(const t of Or){const e=new Mi().setFromObject(t);if(s.intersectsBox(e)){lv();break}}}Jr.render(Yn,Ei),window.requestAnimationFrame(Cu)};Cu();
