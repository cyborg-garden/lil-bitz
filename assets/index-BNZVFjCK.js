(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const bl="185",Th=0,hc=1,Ah=2,Qs=1,Rh=2,Kr=3,Li=0,rn=1,Tt=2,li=0,Di=1,Ii=2,fc=3,pc=4,Ch=5,Gi=100,Ph=101,Dh=102,Ih=103,Lh=104,Nh=200,Uh=201,Fh=202,Oh=203,So=204,yo=205,zh=206,kh=207,Bh=208,Gh=209,Hh=210,Vh=211,Wh=212,Xh=213,qh=214,bo=0,Eo=1,wo=2,Ar=3,To=4,Ao=5,Ro=6,Co=7,El=0,Yh=1,$h=2,kn=0,Yu=1,$u=2,Ku=3,Zu=4,Ju=5,Qu=6,ju=7,ed=300,qi=301,Rr=302,Ia=303,La=304,Ma=306,Po=1e3,ri=1001,Do=1002,zt=1003,Kh=1004,Ss=1005,Ft=1006,Na=1007,si=1008,dn=1009,td=1010,nd=1011,ns=1012,wl=1013,Xn=1014,Tn=1015,di=1016,Tl=1017,Al=1018,is=1020,id=35902,rd=35899,sd=1021,ad=1022,An=1023,hi=1026,Vi=1027,Rl=1028,Cl=1029,Yi=1030,Pl=1031,Dl=1033,js=33776,ea=33777,ta=33778,na=33779,Io=35840,Lo=35841,No=35842,Uo=35843,Fo=36196,Oo=37492,zo=37496,ko=37488,Bo=37489,la=37490,Go=37491,Ho=37808,Vo=37809,Wo=37810,Xo=37811,qo=37812,Yo=37813,$o=37814,Ko=37815,Zo=37816,Jo=37817,Qo=37818,jo=37819,el=37820,tl=37821,nl=36492,il=36494,rl=36495,sl=36283,al=36284,ca=36285,ol=36286,Zh=3200,ll=0,Jh=1,Ai="",dt="srgb",ua="srgb-linear",da="linear",rt="srgb",nr=7680,mc=519,Qh=512,jh=513,ef=514,Il=515,tf=516,nf=517,Ll=518,rf=519,gc=35044,ha=35048,_c="300 es",zn=2e3,rs=2001;function sf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ss(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function af(){const n=ss("canvas");return n.style.display="block",n}const xc={};function vc(...n){const e="THREE."+n.shift();console.log(e,...n)}function od(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=od(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Qe(...n){n=od(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function br(...n){const e=n.join(" ");e in xc||(xc[e]=!0,Ne(...n))}function of(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const lf={[bo]:Eo,[wo]:Ro,[To]:Co,[Ar]:Ao,[Eo]:bo,[Ro]:wo,[Co]:To,[Ao]:Ar};class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ua=Math.PI/180,cl=180/Math.PI;function cs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function cf(n,e){return(n%e+e)%e}function Fa(n,e,t){return(1-t)*n+t*e}function zr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ql=class Ql{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ql.prototype.isVector2=!0;let Ge=Ql;class qn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(h!==x||c!==d||l!==f||u!==g){let p=c*d+l*f+u*g+h*x;p<0&&(d=-d,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){const T=Math.acos(p),w=Math.sin(T);m=Math.sin(m*T)/w,o=Math.sin(o*T)/w,c=c*m+d*o,l=l*m+f*o,u=u*m+g*o,h=h*m+x*o}else{c=c*m+d*o,l=l*m+f*o,u=u*m+g*o,h=h*m+x*o;const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const jl=class jl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oa.copy(this).projectOnVector(e),this.sub(Oa)}reflect(e){return this.sub(Oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jl.prototype.isVector3=!0;let k=jl;const Oa=new k,Mc=new qn,ec=class ec{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],x=r[0],p=r[3],m=r[6],T=r[1],w=r[4],S=r[7],E=r[2],b=r[5],A=r[8];return s[0]=a*x+o*T+c*E,s[3]=a*p+o*w+c*b,s[6]=a*m+o*S+c*A,s[1]=l*x+u*T+h*E,s[4]=l*p+u*w+h*b,s[7]=l*m+u*S+h*A,s[2]=d*x+f*T+g*E,s[5]=d*p+f*w+g*b,s[8]=d*m+f*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(za.makeScale(e,t)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(za.makeRotation(-e)),this}translate(e,t){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ec.prototype.isMatrix3=!0;let Ue=ec;const za=new Ue,Sc=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uf(){const n={enabled:!0,workingColorSpace:ua,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ai?da:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ua]:{primaries:e,whitePoint:i,transfer:da,toXYZ:Sc,fromXYZ:yc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Sc,fromXYZ:yc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),n}const Xe=uf();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ir;class df{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ir===void 0&&(ir=ss("canvas")),ir.width=e.width,ir.height=e.height;const r=ir.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ir}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hf=0;class Nl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ka(r[a].image)):s.push(ka(r[a]))}else s=ka(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ka(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?df.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let ff=0;const Ba=new k;class Bt extends Qi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=ri,r=ri,s=Ft,a=si,o=An,c=dn,l=Bt.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=cs(),this.name="",this.source=new Nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ba).x}get height(){return this.source.getSize(Ba).y}get depth(){return this.source.getSize(Ba).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Po:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Po:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=ed;Bt.DEFAULT_ANISOTROPY=1;const tc=class tc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,S=(f+1)/2,E=(m+1)/2,b=(u+d)/4,A=(h+x)/4,_=(g+p)/4;return w>S&&w>E?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=b/i,s=A/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=_/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=_/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(h-x)/T,this.z=(d-u)/T,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tc.prototype.isVector4=!0;let gt=tc;class pf extends Qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Bt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Nl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends pf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ld extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mf extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const va=class va{constructor(e,t,i,r,s,a,o,c,l,u,h,d,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,x,p)}set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new va().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gf,e,_f)}lookAt(e,t,i){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Mi.crossVectors(i,on),Mi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Mi.crossVectors(i,on)),Mi.normalize(),ys.crossVectors(on,Mi),r[0]=Mi.x,r[4]=ys.x,r[8]=on.x,r[1]=Mi.y,r[5]=ys.y,r[9]=on.y,r[2]=Mi.z,r[6]=ys.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],T=i[3],w=i[7],S=i[11],E=i[15],b=r[0],A=r[4],_=r[8],y=r[12],C=r[1],D=r[5],I=r[9],O=r[13],U=r[2],L=r[6],H=r[10],X=r[14],Z=r[3],G=r[7],ie=r[11],te=r[15];return s[0]=a*b+o*C+c*U+l*Z,s[4]=a*A+o*D+c*L+l*G,s[8]=a*_+o*I+c*H+l*ie,s[12]=a*y+o*O+c*X+l*te,s[1]=u*b+h*C+d*U+f*Z,s[5]=u*A+h*D+d*L+f*G,s[9]=u*_+h*I+d*H+f*ie,s[13]=u*y+h*O+d*X+f*te,s[2]=g*b+x*C+p*U+m*Z,s[6]=g*A+x*D+p*L+m*G,s[10]=g*_+x*I+p*H+m*ie,s[14]=g*y+x*O+p*X+m*te,s[3]=T*b+w*C+S*U+E*Z,s[7]=T*A+w*D+S*L+E*G,s[11]=T*_+w*I+S*H+E*ie,s[15]=T*y+w*O+S*X+E*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],T=c*f-l*d,w=o*f-l*h,S=o*d-c*h,E=a*f-l*u,b=a*d-c*u,A=a*h-o*u;return t*(x*T-p*w+m*S)-i*(g*T-p*E+m*b)+r*(g*w-x*E+m*A)-s*(g*S-x*b+p*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],T=t*o-i*a,w=t*c-r*a,S=t*l-s*a,E=i*c-r*o,b=i*l-s*o,A=r*l-s*c,_=u*x-h*g,y=u*p-d*g,C=u*m-f*g,D=h*p-d*x,I=h*m-f*x,O=d*m-f*p,U=T*O-w*I+S*D+E*C-b*y+A*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/U;return e[0]=(o*O-c*I+l*D)*L,e[1]=(r*I-i*O-s*D)*L,e[2]=(x*A-p*b+m*E)*L,e[3]=(d*b-h*A-f*E)*L,e[4]=(c*C-a*O-l*y)*L,e[5]=(t*O-r*C+s*y)*L,e[6]=(p*S-g*A-m*w)*L,e[7]=(u*A-d*S+f*w)*L,e[8]=(a*I-o*C+l*_)*L,e[9]=(i*C-t*I-s*_)*L,e[10]=(g*b-x*S+m*T)*L,e[11]=(h*S-u*b-f*T)*L,e[12]=(o*y-a*D-c*_)*L,e[13]=(t*D-i*y+r*_)*L,e[14]=(x*w-g*E-p*T)*L,e[15]=(u*E-h*w+d*T)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,g=s*h,x=a*u,p=a*h,m=o*h,T=c*l,w=c*u,S=c*h,E=i.x,b=i.y,A=i.z;return r[0]=(1-(x+m))*E,r[1]=(f+S)*E,r[2]=(g-w)*E,r[3]=0,r[4]=(f-S)*b,r[5]=(1-(d+m))*b,r[6]=(p+T)*b,r[7]=0,r[8]=(g+w)*A,r[9]=(p-T)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=rr.set(r[0],r[1],r[2]).length();const o=rr.set(r[4],r[5],r[6]).length(),c=rr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),yn.copy(this);const l=1/a,u=1/o,h=1/c;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=zn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===zn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===rs)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=zn,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===zn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===rs)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};va.prototype.isMatrix4=!0;let ot=va;const rr=new k,yn=new ot,gf=new k(0,0,0),_f=new k(1,1,1),Mi=new k,ys=new k,on=new k,bc=new ot,Ec=new qn;class Yn{constructor(e=0,t=0,i=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class cd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xf=0;const wc=new k,sr=new qn,Kn=new ot,bs=new k,kr=new k,vf=new k,Mf=new qn,Tc=new k(1,0,0),Ac=new k(0,1,0),Rc=new k(0,0,1),Cc={type:"added"},Sf={type:"removed"},ar={type:"childadded",child:null},Ga={type:"childremoved",child:null};class Gt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new k,t=new Yn,i=new qn,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ue}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Tc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(Rc,e)}translateOnAxis(e,t){return wc.copy(e).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(Rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bs.copy(e):bs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(kr,bs,this.up):Kn.lookAt(bs,kr,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(Kn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cc),ar.child=e,this.dispatchEvent(ar),ar.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sf),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cc),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new k(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Es extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yf={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=cf(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Va(a,s,e+1/3),this.g=Va(a,s,e),this.b=Va(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,t=dt){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const i=ud[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Xe.workingToColorSpace(Wt.copy(this),e),Math.round(qe(Wt.r*255,0,255))*65536+Math.round(qe(Wt.g*255,0,255))*256+Math.round(qe(Wt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Wt.copy(this),t);const i=Wt.r,r=Wt.g,s=Wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=dt){Xe.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,r=Wt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(ws);const i=Fa(Si.h,ws.h,t),r=Fa(Si.s,ws.s,t),s=Fa(Si.l,ws.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ie;Ie.NAMES=ud;class Ul{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=i}clone(){return new Ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bf extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bn=new k,Zn=new k,Wa=new k,Jn=new k,or=new k,lr=new k,Pc=new k,Xa=new k,qa=new k,Ya=new k,$a=new gt,Ka=new gt,Za=new gt;class wn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){bn.subVectors(r,t),Zn.subVectors(i,t),Wa.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(Zn),c=bn.dot(Wa),l=Zn.dot(Zn),u=Zn.dot(Wa),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return $a.setScalar(0),Ka.setScalar(0),Za.setScalar(0),$a.fromBufferAttribute(e,t),Ka.fromBufferAttribute(e,i),Za.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($a,s.x),a.addScaledVector(Ka,s.y),a.addScaledVector(Za,s.z),a}static isFrontFacing(e,t,i,r){return bn.subVectors(i,t),Zn.subVectors(e,t),bn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;or.subVectors(r,i),lr.subVectors(s,i),Xa.subVectors(e,i);const c=or.dot(Xa),l=lr.dot(Xa);if(c<=0&&l<=0)return t.copy(i);qa.subVectors(e,r);const u=or.dot(qa),h=lr.dot(qa);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(or,a);Ya.subVectors(e,s);const f=or.dot(Ya),g=lr.dot(Ya);if(g>=0&&f<=g)return t.copy(s);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(lr,o);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Pc.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Pc,o);const m=1/(p+x+d);return a=x*m,o=d*m,t.copy(i).addScaledVector(or,a).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ji{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(s,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ts.copy(i.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),As.subVectors(this.max,Br),cr.subVectors(e.a,Br),ur.subVectors(e.b,Br),dr.subVectors(e.c,Br),yi.subVectors(ur,cr),bi.subVectors(dr,ur),Fi.subVectors(cr,dr);let t=[0,-yi.z,yi.y,0,-bi.z,bi.y,0,-Fi.z,Fi.y,yi.z,0,-yi.x,bi.z,0,-bi.x,Fi.z,0,-Fi.x,-yi.y,yi.x,0,-bi.y,bi.x,0,-Fi.y,Fi.x,0];return!Ja(t,cr,ur,dr,As)||(t=[1,0,0,0,1,0,0,0,1],!Ja(t,cr,ur,dr,As))?!1:(Rs.crossVectors(yi,bi),t=[Rs.x,Rs.y,Rs.z],Ja(t,cr,ur,dr,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new k,new k,new k,new k,new k,new k,new k,new k],En=new k,Ts=new ji,cr=new k,ur=new k,dr=new k,yi=new k,bi=new k,Fi=new k,Br=new k,As=new k,Rs=new k,Oi=new k;function Ja(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Oi.fromArray(n,s);const o=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),c=e.dot(Oi),l=t.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Et=new k,Cs=new Ge;let Ef=0;class qt extends Qi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ef++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class dd extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hd extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const wf=new ji,Gr=new k,Qa=new k;class us{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Gr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Qa)),this.expandByPoint(Gr.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Tf=0;const pn=new ot,ja=new Gt,hr=new k,ln=new ji,Hr=new ji,Lt=new k;class sn extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sf(e)?hd:dd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(ln.min,Hr.min),ln.expandByPoint(Lt),Lt.addVectors(ln.max,Hr.max),ln.expandByPoint(Lt)):(ln.expandByPoint(Hr.min),ln.expandByPoint(Hr.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Lt.fromBufferAttribute(o,l),c&&(hr.fromBufferAttribute(e,l),Lt.add(hr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new k,c[_]=new k;const l=new k,u=new k,h=new k,d=new Ge,f=new Ge,g=new Ge,x=new k,p=new k;function m(_,y,C){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,C),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,C),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[_].add(x),o[y].add(x),o[C].add(x),c[_].add(p),c[y].add(p),c[C].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let _=0,y=T.length;_<y;++_){const C=T[_],D=C.start,I=C.count;for(let O=D,U=D+I;O<U;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new k,S=new k,E=new k,b=new k;function A(_){E.fromBufferAttribute(r,_),b.copy(E);const y=o[_];w.copy(y),w.sub(E.multiplyScalar(E.dot(y))).normalize(),S.crossVectors(b,y);const D=S.dot(c[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,D)}for(let _=0,y=T.length;_<y;++_){const C=T[_],D=C.start,I=C.count;for(let O=D,U=D+I;O<U;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,c=new k,l=new k,u=new k,h=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new qt(d,u,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Af=0;class ds extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Di,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=yo,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==So&&(i.blendSrc=this.blendSrc),this.blendDst!==yo&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jn=new k,eo=new k,Ps=new k,Ei=new k,to=new k,Ds=new k,no=new k;class Rf{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){eo.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(eo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ps),o=Ei.dot(this.direction),c=-Ei.dot(Ps),l=Ei.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(eo).addScaledVector(Ps,d),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,r,s){to.subVectors(t,e),Ds.subVectors(i,e),no.crossVectors(to,Ds);let a=this.direction.dot(no),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const c=o*this.direction.dot(Ds.crossVectors(Ei,Ds));if(c<0)return null;const l=o*this.direction.dot(to.cross(Ei));if(l<0||c+l>a)return null;const u=-o*Ei.dot(no);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dc=new ot,zi=new Rf,Is=new us,Ic=new k,Ls=new k,Ns=new k,Us=new k,io=new k,Fs=new k,Lc=new k,Os=new k;class at extends Gt{constructor(e=new sn,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(io.fromBufferAttribute(h,e),a?Fs.addScaledVector(io,u):Fs.addScaledVector(io.sub(t),u))}t.add(Fs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(s),zi.copy(e.ray).recast(e.near),!(Is.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Is,Ic)===null||zi.origin.distanceToSquared(Ic)>(e.far-e.near)**2))&&(Dc.copy(s).invert(),zi.copy(e.ray).applyMatrix4(Dc),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=a[p.materialIndex],T=Math.max(p.start,f.start),w=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=T,E=w;S<E;S+=3){const b=o.getX(S),A=o.getX(S+1),_=o.getX(S+2);r=zs(this,m,e,i,l,u,h,b,A,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const T=o.getX(p),w=o.getX(p+1),S=o.getX(p+2);r=zs(this,a,e,i,l,u,h,T,w,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=a[p.materialIndex],T=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=T,E=w;S<E;S+=3){const b=S,A=S+1,_=S+2;r=zs(this,m,e,i,l,u,h,b,A,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const T=p,w=p+1,S=p+2;r=zs(this,a,e,i,l,u,h,T,w,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Cf(n,e,t,i,r,s,a,o){let c;if(e.side===rn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Li,o),c===null)return null;Os.copy(o),Os.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Os);return l<t.near||l>t.far?null:{distance:l,point:Os.clone(),object:n}}function zs(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ls),n.getVertexPosition(c,Ns),n.getVertexPosition(l,Us);const u=Cf(n,e,t,i,Ls,Ns,Us,Lc);if(u){const h=new k;wn.getBarycoord(Lc,Ls,Ns,Us,h),r&&(u.uv=wn.getInterpolatedAttribute(r,o,c,l,h,new Ge)),s&&(u.uv1=wn.getInterpolatedAttribute(s,o,c,l,h,new Ge)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,c,l,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new k,materialIndex:0};wn.getNormal(Ls,Ns,Us,d.normal),u.face=d,u.barycoord=h}return u}class fd extends Bt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=zt,u=zt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nc extends qt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fr=new ot,Uc=new ot,ks=[],Fc=new ji,Pf=new ot,Vr=new at,Wr=new us;class fa extends at{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Pf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),Fc.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(Fc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),Wr.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(i),e.ray.intersectsSphere(Wr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,fr),Uc.multiplyMatrices(i,fr),Vr.matrixWorld=Uc,Vr.raycast(e,ks);for(let a=0,o=ks.length;a<o;a++){const c=ks[a];c.instanceId=s,c.object=this,t.push(c)}ks.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new fd(new Float32Array(r*this.count),r,this.count,Rl,Tn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ro=new k,Df=new k,If=new Ue;class Bi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ro.subVectors(i,t).cross(Df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(ro),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||If.getNormalMatrix(e),r=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new us,Lf=new Ge(.5,.5),Bs=new k;class Fl{constructor(e=new Bi,t=new Bi,i=new Bi,r=new Bi,s=new Bi,a=new Bi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],x=s[9],p=s[10],m=s[11],T=s[12],w=s[13],S=s[14],E=s[15];if(r[0].setComponents(l-a,f-u,m-g,E-T).normalize(),r[1].setComponents(l+a,f+u,m+g,E+T).normalize(),r[2].setComponents(l+o,f+h,m+x,E+w).normalize(),r[3].setComponents(l-o,f-h,m-x,E-w).normalize(),i)r[4].setComponents(c,d,p,S).normalize(),r[5].setComponents(l-c,f-d,m-p,E-S).normalize();else if(r[4].setComponents(l-c,f-d,m-p,E-S).normalize(),t===zn)r[5].setComponents(l+c,f+d,m+p,E+S).normalize();else if(t===rs)r[5].setComponents(c,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);const t=Lf.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Bs.x=r.normal.x>0?e.max.x:e.min.x,Bs.y=r.normal.y>0?e.max.y:e.min.y,Bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pd extends Bt{constructor(e=[],t=qi,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sn extends Bt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cr extends Bt{constructor(e,t,i=Xn,r,s,a,o=zt,c=zt,l,u=hi,h=1){if(u!==hi&&u!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nf extends Cr{constructor(e,t=Xn,i=qi,r,s,a=zt,o=zt,c,l=hi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class md extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hs extends sn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(h,2));function g(x,p,m,T,w,S,E,b,A,_,y){const C=S/A,D=E/_,I=S/2,O=E/2,U=b/2,L=A+1,H=_+1;let X=0,Z=0;const G=new k;for(let ie=0;ie<H;ie++){const te=ie*D-O;for(let ae=0;ae<L;ae++){const we=ae*C-I;G[x]=we*T,G[p]=te*w,G[m]=U,l.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[m]=b>0?1:-1,u.push(G.x,G.y,G.z),h.push(ae/A),h.push(1-ie/_),X+=1}}for(let ie=0;ie<_;ie++)for(let te=0;te<A;te++){const ae=d+te+L*ie,we=d+te+L*(ie+1),$e=d+(te+1)+L*(ie+1),We=d+(te+1)+L*ie;c.push(ae,we,We),c.push(we,$e,We),Z+=6}o.addGroup(f,Z,y),f+=Z,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mn extends sn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const x=[],p=i/2;let m=0;T(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(f,2));function T(){const S=new k,E=new k;let b=0;const A=(t-e)/i;for(let _=0;_<=s;_++){const y=[],C=_/s,D=C*(t-e)+e;for(let I=0;I<=r;I++){const O=I/r,U=O*c+o,L=Math.sin(U),H=Math.cos(U);E.x=D*L,E.y=-C*i+p,E.z=D*H,h.push(E.x,E.y,E.z),S.set(L,A,H).normalize(),d.push(S.x,S.y,S.z),f.push(O,1-C),y.push(g++)}x.push(y)}for(let _=0;_<r;_++)for(let y=0;y<s;y++){const C=x[y][_],D=x[y+1][_],I=x[y+1][_+1],O=x[y][_+1];(e>0||y!==0)&&(u.push(C,D,O),b+=3),(t>0||y!==s-1)&&(u.push(D,I,O),b+=3)}l.addGroup(m,b,0),m+=b}function w(S){const E=g,b=new Ge,A=new k;let _=0;const y=S===!0?e:t,C=S===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,p*C,0),d.push(0,C,0),f.push(.5,.5),g++;const D=g;for(let I=0;I<=r;I++){const U=I/r*c+o,L=Math.cos(U),H=Math.sin(U);A.x=y*H,A.y=p*C,A.z=y*L,h.push(A.x,A.y,A.z),d.push(0,C,0),b.x=L*.5+.5,b.y=H*.5*C+.5,f.push(b.x,b.y),g++}for(let I=0;I<r;I++){const O=E+I,U=D+I;S===!0?u.push(U,U+1,O):u.push(U+1,U,O),_+=3}l.addGroup(m,_,S===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ol extends Mn{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ol(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ur extends sn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),l(i),u(),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(s.slice(),3)),this.setAttribute("uv",new Ct(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const w=new k,S=new k,E=new k;for(let b=0;b<t.length;b+=3)f(t[b+0],w),f(t[b+1],S),f(t[b+2],E),c(w,S,E,T)}function c(T,w,S,E){const b=E+1,A=[];for(let _=0;_<=b;_++){A[_]=[];const y=T.clone().lerp(S,_/b),C=w.clone().lerp(S,_/b),D=b-_;for(let I=0;I<=D;I++)I===0&&_===b?A[_][I]=y:A[_][I]=y.clone().lerp(C,I/D)}for(let _=0;_<b;_++)for(let y=0;y<2*(b-_)-1;y++){const C=Math.floor(y/2);y%2===0?(d(A[_][C+1]),d(A[_+1][C]),d(A[_][C])):(d(A[_][C+1]),d(A[_+1][C+1]),d(A[_+1][C]))}}function l(T){const w=new k;for(let S=0;S<s.length;S+=3)w.x=s[S+0],w.y=s[S+1],w.z=s[S+2],w.normalize().multiplyScalar(T),s[S+0]=w.x,s[S+1]=w.y,s[S+2]=w.z}function u(){const T=new k;for(let w=0;w<s.length;w+=3){T.x=s[w+0],T.y=s[w+1],T.z=s[w+2];const S=p(T)/2/Math.PI+.5,E=m(T)/Math.PI+.5;a.push(S,1-E)}g(),h()}function h(){for(let T=0;T<a.length;T+=6){const w=a[T+0],S=a[T+2],E=a[T+4],b=Math.max(w,S,E),A=Math.min(w,S,E);b>.9&&A<.1&&(w<.2&&(a[T+0]+=1),S<.2&&(a[T+2]+=1),E<.2&&(a[T+4]+=1))}}function d(T){s.push(T.x,T.y,T.z)}function f(T,w){const S=T*3;w.x=e[S+0],w.y=e[S+1],w.z=e[S+2]}function g(){const T=new k,w=new k,S=new k,E=new k,b=new Ge,A=new Ge,_=new Ge;for(let y=0,C=0;y<s.length;y+=9,C+=6){T.set(s[y+0],s[y+1],s[y+2]),w.set(s[y+3],s[y+4],s[y+5]),S.set(s[y+6],s[y+7],s[y+8]),b.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),E.copy(T).add(w).add(S).divideScalar(3);const D=p(E);x(b,C+0,T,D),x(A,C+2,w,D),x(_,C+4,S,D)}}function x(T,w,S,E){E<0&&T.x===1&&(a[w]=T.x-1),S.x===0&&S.z===0&&(a[w]=E/2/Math.PI+.5)}function p(T){return Math.atan2(T.z,-T.x)}function m(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.vertices,e.indices,e.radius,e.detail)}}class zl extends Ur{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zl(e.radius,e.detail)}}class fi extends Ur{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fi(e.radius,e.detail)}}class kl extends Ur{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kl(e.radius,e.detail)}}class $t extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){const T=m*d-a;for(let w=0;w<l;w++){const S=w*h-s;g.push(S,-T,0),x.push(0,0,1),p.push(w/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<o;T++){const w=T+l*m,S=T+l*(m+1),E=T+1+l*(m+1),b=T+1+l*m;f.push(w,S,b),f.push(S,E,b)}this.setIndex(f),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.widthSegments,e.heightSegments)}}class fs extends sn{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/r,f=new k,g=new Ge;for(let x=0;x<=r;x++){for(let p=0;p<=i;p++){const m=s+p/i*a;f.x=h*Math.cos(m),f.y=h*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<r;x++){const p=x*(i+1);for(let m=0;m<i;m++){const T=m+p,w=T,S=T+i+1,E=T+i+2,b=T+1;o.push(w,S,b),o.push(S,E,b)}}this.setIndex(o),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Sa extends Ur{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sa(e.radius,e.detail)}}function Pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Oc(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Oc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=Pr(n[t]);for(const r in i)e[r]=i[r]}return e}function Oc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Uf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Ff={clone:Pr,merge:Zt};var Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ie().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"v3":this.uniforms[i].value=new k().fromArray(r.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ot().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class kf extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $i extends ds{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=El,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bf extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gf extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const so={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(zc(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!zc(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function zc(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Hf{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Vf=new Hf;class Bl{constructor(e){this.manager=e!==void 0?e:Vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Bl.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr=new WeakMap;class Wf extends Bl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=so.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=pr.get(a);h===void 0&&(h=[],pr.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=ss("img");function c(){u(),t&&t(this);const h=pr.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}pr.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),so.remove(`image:${e}`);const d=pr.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}pr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),so.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class _d extends Bl{constructor(e){super(e)}load(e,t,i,r){const s=new Bt,a=new Wf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class xd extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Xf extends xd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ao=new ot,kc=new k,Bc=new k;class qf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===rs||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gs=new k,Hs=new qn,Dn=new k;class vd extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gs,Hs,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,Hs,Dn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Gs,Hs,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,Hs,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wi=new k,Gc=new Ge,Hc=new Ge;class un extends vd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Gc,Hc),t.subVectors(Hc,Gc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Gl extends vd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yf extends qf{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $f extends xd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Yf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const mr=-90,gr=1;class Kf extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(mr,gr,e,t);r.layers=this.layers,this.add(r);const s=new un(mr,gr,e,t);s.layers=this.layers,this.add(s);const a=new un(mr,gr,e,t);a.layers=this.layers,this.add(a);const o=new un(mr,gr,e,t);o.layers=this.layers,this.add(o);const c=new un(mr,gr,e,t);c.layers=this.layers,this.add(c);const l=new un(mr,gr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Zf extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nc=class nc{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};nc.prototype.isMatrix2=!0;let Vc=nc;function Wc(n,e,t,i){const r=Jf(i);switch(t){case sd:return n*e;case Rl:return n*e/r.components*r.byteLength;case Cl:return n*e/r.components*r.byteLength;case Yi:return n*e*2/r.components*r.byteLength;case Pl:return n*e*2/r.components*r.byteLength;case ad:return n*e*3/r.components*r.byteLength;case An:return n*e*4/r.components*r.byteLength;case Dl:return n*e*4/r.components*r.byteLength;case js:case ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lo:case Uo:return Math.max(n,16)*Math.max(e,8)/4;case Io:case No:return Math.max(n,8)*Math.max(e,8)/2;case Fo:case Oo:case ko:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zo:case la:case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $o:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nl:case il:case rl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sl:case al:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ca:case ol:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jf(n){switch(n){case dn:case td:return{byteLength:1,components:1};case ns:case nd:case di:return{byteLength:2,components:1};case Tl:case Al:return{byteLength:2,components:4};case Xn:case wl:case Tn:return{byteLength:4,components:1};case id:case rd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);function Md(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Qf(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yp=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ep=`vec3 transformedNormal = objectNormal;
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
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,Xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Jp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qp=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cm=`#if defined( USE_POINTS_UV )
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
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,zm=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`#include <common>
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
}`,a0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o0=`#define DISTANCE
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
}`,l0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`uniform float scale;
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
}`,h0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_0=`#define MATCAP
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
}`,x0=`#define MATCAP
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
}`,v0=`#define NORMAL
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
}`,M0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S0=`#define PHONG
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
}`,y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,b0=`#define STANDARD
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
}`,E0=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,w0=`#define TOON
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
}`,T0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,A0=`uniform float size;
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,P0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,D0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,I0=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:jf,alphahash_pars_fragment:ep,alphamap_fragment:tp,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:rp,aomap_fragment:sp,aomap_pars_fragment:ap,batching_pars_vertex:op,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:up,bsdfs:dp,iridescence_fragment:hp,bumpmap_pars_fragment:fp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:_p,color_fragment:xp,color_pars_fragment:vp,color_pars_vertex:Mp,color_vertex:Sp,common:yp,cube_uv_reflection_fragment:bp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:wp,displacementmap_vertex:Tp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Rp,colorspace_fragment:Cp,colorspace_pars_fragment:Pp,envmap_fragment:Dp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Lp,envmap_pars_vertex:Np,envmap_physical_pars_fragment:Xp,envmap_vertex:Up,fog_vertex:Fp,fog_pars_vertex:Op,fog_fragment:zp,fog_pars_fragment:kp,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:$p,lights_phong_pars_fragment:Kp,lights_physical_fragment:Zp,lights_physical_pars_fragment:Jp,lights_fragment_begin:Qp,lights_fragment_maps:jp,lights_fragment_end:em,lightprobes_pars_fragment:tm,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:sm,map_fragment:am,map_pars_fragment:om,map_particle_fragment:lm,map_particle_pars_fragment:cm,metalnessmap_fragment:um,metalnessmap_pars_fragment:dm,morphinstance_vertex:hm,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:_m,normal_fragment_maps:xm,normal_pars_fragment:vm,normal_pars_vertex:Mm,normal_vertex:Sm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Tm,opaque_fragment:Am,packing:Rm,premultiplied_alpha_fragment:Cm,project_vertex:Pm,dithering_fragment:Dm,dithering_pars_fragment:Im,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Fm,shadowmap_vertex:Om,shadowmask_pars_fragment:zm,skinbase_vertex:km,skinning_pars_vertex:Bm,skinning_vertex:Gm,skinnormal_vertex:Hm,specularmap_fragment:Vm,specularmap_pars_fragment:Wm,tonemapping_fragment:Xm,tonemapping_pars_fragment:qm,transmission_fragment:Ym,transmission_pars_fragment:$m,uv_pars_fragment:Km,uv_pars_vertex:Zm,uv_vertex:Jm,worldpos_vertex:Qm,background_vert:jm,background_frag:e0,backgroundCube_vert:t0,backgroundCube_frag:n0,cube_vert:i0,cube_frag:r0,depth_vert:s0,depth_frag:a0,distance_vert:o0,distance_frag:l0,equirect_vert:c0,equirect_frag:u0,linedashed_vert:d0,linedashed_frag:h0,meshbasic_vert:f0,meshbasic_frag:p0,meshlambert_vert:m0,meshlambert_frag:g0,meshmatcap_vert:_0,meshmatcap_frag:x0,meshnormal_vert:v0,meshnormal_frag:M0,meshphong_vert:S0,meshphong_frag:y0,meshphysical_vert:b0,meshphysical_frag:E0,meshtoon_vert:w0,meshtoon_frag:T0,points_vert:A0,points_frag:R0,shadow_vert:C0,shadow_frag:P0,sprite_vert:D0,sprite_frag:I0},fe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},On={basic:{uniforms:Zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Zt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Zt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Zt([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Zt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Zt([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Zt([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Zt([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Zt([fe.lights,fe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};On.physical={uniforms:Zt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Vs={r:0,b:0,g:0},L0=new ot,Sd=new Ue;Sd.set(-1,0,0,0,1,0,0,0,1);function N0(n,e,t,i,r,s){const a=new Ie(0);let o=r===!0?0:1,c,l,u=null,h=0,d=null;function f(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){const S=T.backgroundBlurriness>0;w=e.get(w,S)}return w}function g(T){let w=!1;const S=f(T);S===null?p(a,o):S&&S.isColor&&(p(S,1),w=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(T,w){const S=f(w);S&&(S.isCubeTexture||S.mapping===Ma)?(l===void 0&&(l=new at(new hs(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Pr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(L0.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Sd),l.material.toneMapped=Xe.getTransfer(S.colorSpace)!==rt,(u!==S||h!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new at(new $t(2,2),new $n({name:"BackgroundMaterial",uniforms:Pr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,w){T.getRGB(Vs,gd(n)),t.buffers.color.setClear(Vs.r,Vs.g,Vs.b,w,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:g,addToRenderList:x,dispose:m}}function U0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(D,I,O,U,L){let H=!1;const X=h(D,U,O,I);s!==X&&(s=X,l(s.object)),H=f(D,U,O,L),H&&g(D,U,O,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(D,I,O,U),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function h(D,I,O,U){const L=U.wireframe===!0;let H=i[I.id];H===void 0&&(H={},i[I.id]=H);const X=D.isInstancedMesh===!0?D.id:0;let Z=H[X];Z===void 0&&(Z={},H[X]=Z);let G=Z[O.id];G===void 0&&(G={},Z[O.id]=G);let ie=G[L];return ie===void 0&&(ie=d(c()),G[L]=ie),ie}function d(D){const I=[],O=[],U=[];for(let L=0;L<t;L++)I[L]=0,O[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:U,object:D,attributes:{},index:null}}function f(D,I,O,U){const L=s.attributes,H=I.attributes;let X=0;const Z=O.getAttributes();for(const G in Z)if(Z[G].location>=0){const te=L[G];let ae=H[G];if(ae===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),te===void 0||te.attribute!==ae||ae&&te.data!==ae.data)return!0;X++}return s.attributesNum!==X||s.index!==U}function g(D,I,O,U){const L={},H=I.attributes;let X=0;const Z=O.getAttributes();for(const G in Z)if(Z[G].location>=0){let te=H[G];te===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const ae={};ae.attribute=te,te&&te.data&&(ae.data=te.data),L[G]=ae,X++}s.attributes=L,s.attributesNum=X,s.index=U}function x(){const D=s.newAttributes;for(let I=0,O=D.length;I<O;I++)D[I]=0}function p(D){m(D,0)}function m(D,I){const O=s.newAttributes,U=s.enabledAttributes,L=s.attributeDivisors;O[D]=1,U[D]===0&&(n.enableVertexAttribArray(D),U[D]=1),L[D]!==I&&(n.vertexAttribDivisor(D,I),L[D]=I)}function T(){const D=s.newAttributes,I=s.enabledAttributes;for(let O=0,U=I.length;O<U;O++)I[O]!==D[O]&&(n.disableVertexAttribArray(O),I[O]=0)}function w(D,I,O,U,L,H,X){X===!0?n.vertexAttribIPointer(D,I,O,L,H):n.vertexAttribPointer(D,I,O,U,L,H)}function S(D,I,O,U){x();const L=U.attributes,H=O.getAttributes(),X=I.defaultAttributeValues;for(const Z in H){const G=H[Z];if(G.location>=0){let ie=L[Z];if(ie===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ie!==void 0){const te=ie.normalized,ae=ie.itemSize,we=e.get(ie);if(we===void 0)continue;const $e=we.buffer,We=we.type,J=we.bytesPerElement,re=We===n.INT||We===n.UNSIGNED_INT||ie.gpuType===wl;if(ie.isInterleavedBufferAttribute){const ne=ie.data,ge=ne.stride,xe=ie.offset;if(ne.isInstancedInterleavedBuffer){for(let Se=0;Se<G.locationSize;Se++)m(G.location+Se,ne.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Se=0;Se<G.locationSize;Se++)p(G.location+Se);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Se=0;Se<G.locationSize;Se++)w(G.location+Se,ae/G.locationSize,We,te,ge*J,(xe+ae/G.locationSize*Se)*J,re)}else{if(ie.isInstancedBufferAttribute){for(let ne=0;ne<G.locationSize;ne++)m(G.location+ne,ie.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ne=0;ne<G.locationSize;ne++)p(G.location+ne);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let ne=0;ne<G.locationSize;ne++)w(G.location+ne,ae/G.locationSize,We,te,ae*J,ae/G.locationSize*ne*J,re)}}else if(X!==void 0){const te=X[Z];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(G.location,te);break;case 3:n.vertexAttrib3fv(G.location,te);break;case 4:n.vertexAttrib4fv(G.location,te);break;default:n.vertexAttrib1fv(G.location,te)}}}}T()}function E(){y();for(const D in i){const I=i[D];for(const O in I){const U=I[O];for(const L in U){const H=U[L];for(const X in H)u(H[X].object),delete H[X];delete U[L]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const I=i[D.id];for(const O in I){const U=I[O];for(const L in U){const H=U[L];for(const X in H)u(H[X].object),delete H[X];delete U[L]}}delete i[D.id]}function A(D){for(const I in i){const O=i[I];for(const U in O){const L=O[U];if(L[D.id]===void 0)continue;const H=L[D.id];for(const X in H)u(H[X].object),delete H[X];delete L[D.id]}}}function _(D){for(const I in i){const O=i[I],U=D.isInstancedMesh===!0?D.id:0,L=O[U];if(L!==void 0){for(const H in L){const X=L[H];for(const Z in X)u(X[Z].object),delete X[Z];delete L[H]}delete O[U],Object.keys(O).length===0&&delete i[I]}}}function y(){C(),a=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:y,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:T}}function F0(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function O0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==An&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const _=A===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==dn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!_)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ne("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:S,maxSamples:E,samples:b}}function z0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Bi,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const T=s?0:i,w=T*4;let S=m.clippingState||null;c.value=S,S=u(g,d,w,f);for(let E=0;E!==w;++E)S[E]=t[E];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const m=f+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,S=f;w!==x;++w,S+=4)a.copy(h[w]).applyMatrix4(T,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}const Ci=4,Xc=[.125,.215,.35,.446,.526,.582],Hi=20,k0=256,Xr=new Gl,qc=new Ie;let oo=null,lo=0,co=0,uo=!1;const B0=new k;class Yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=B0}=s;oo=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oo,lo,co),this._renderer.xr.enabled=uo,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oo=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:di,format:An,colorSpace:ua,depthBuffer:!1},r=$c(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=G0(s)),this._blurMaterial=V0(s,e,t),this._ggxMaterial=H0(s,e,t)}return r}_compileMaterial(e){const t=new at(new sn,e);this._renderer.compile(t,Xr)}_sceneToCubeUV(e,t,i,r,s){const c=new un(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(qc),h.toneMapping=kn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new hs,new Yt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let m=!1;const T=e.background;T?T.isColor&&(p.color.copy(T),e.background=null,m=!0):(p.color.copy(qc),m=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):S===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));const E=this._cubeSize;_r(r,S*E,w>2?E:0,E,E),h.setRenderTarget(r),m&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qi||e.mapping===Rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;_r(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Xr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:g}=this,x=this._sizeLods[i],p=3*x*(i>g-Ci?i-g+Ci:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,_r(s,p,m,3*x,2*x),r.setRenderTarget(s),r.render(o,Xr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,_r(e,p,m,3*x,2*x),r.setRenderTarget(e),r.render(o,Xr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):Hi;p>Hi&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);const m=[];let T=0;for(let A=0;A<Hi;++A){const _=A/x,y=Math.exp(-_*_/2);m.push(y),A===0?T+=y:A<p&&(T+=2*y)}for(let A=0;A<m.length;A++)m[A]=m[A]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;const S=this._sizeLods[r],E=3*S*(r>w-Ci?r-w+Ci:0),b=4*(this._cubeSize-S);_r(t,E,b,3*S,2*S),c.setRenderTarget(t),c.render(h,Xr)}}function G0(n){const e=[],t=[],i=[];let r=n;const s=n-Ci+1+Xc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Ci?c=Xc[a-n+Ci-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,p=2,m=1,T=new Float32Array(x*g*f),w=new Float32Array(p*g*f),S=new Float32Array(m*g*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,_=b>2?0:-1,y=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];T.set(y,x*g*b),w.set(d,p*g*b);const C=[b,b,b,b,b,b];S.set(C,m*g*b)}const E=new sn;E.setAttribute("position",new qt(T,x)),E.setAttribute("uv",new qt(w,p)),E.setAttribute("faceIndex",new qt(S,m)),i.push(new at(E,null)),r>Ci&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function $c(n,e,t){const i=new Bn(n,e,t);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function H0(n,e,t){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function V0(n,e,t){const i=new Float32Array(Hi),r=new k(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ya(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Kc(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Zc(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function ya(){return`

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
	`}class yd extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hs(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:li});s.uniforms.tEquirect.value=t;const a=new at(r,s),o=t.minFilter;return t.minFilter===si&&(t.minFilter=Ft),new Kf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function W0(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ia||f===La)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new yd(g.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,g=f===Ia||f===La,x=f===qi||f===Rr;if(g||x){let p=t.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Yc(n)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const T=d.image;return g&&T&&T.height>0||x&&T&&c(T)?(i===null&&(i=new Yc(n)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,f){return f===Ia?d.mapping=qi:f===La&&(d.mapping=Rr),d}function c(d){let f=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){const f=d.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function X0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&br("WebGLRenderer: "+i+" extension not supported."),r}}}function q0(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const T=f.array;x=f.version;for(let w=0,S=T.length;w<S;w+=3){const E=T[w+0],b=T[w+1],A=T[w+2];d.push(E,b,b,A,A,E)}}else{const T=g.array;x=g.version;for(let w=0,S=T.length/3-1;w<S;w+=3){const E=w+0,b=w+1,A=w+2;d.push(E,b,b,A,A,E)}}const p=new(g.count>=65535?hd:dd)(d,1);p.version=x;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Y0(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function l(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,s,h*a,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];t.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function $0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function K0(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let y=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let S=o.attributes.position.count*w,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*E*4*h),A=new ld(b,S,E,h);A.type=Tn,A.needsUpdate=!0;const _=w*4;for(let C=0;C<h;C++){const D=p[C],I=m[C],O=T[C],U=S*E*4*C;for(let L=0;L<D.count;L++){const H=L*_;f===!0&&(r.fromBufferAttribute(D,L),b[U+H+0]=r.x,b[U+H+1]=r.y,b[U+H+2]=r.z,b[U+H+3]=0),g===!0&&(r.fromBufferAttribute(I,L),b[U+H+4]=r.x,b[U+H+5]=r.y,b[U+H+6]=r.z,b[U+H+7]=0),x===!0&&(r.fromBufferAttribute(O,L),b[U+H+8]=r.x,b[U+H+9]=r.y,b[U+H+10]=r.z,b[U+H+11]=O.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new Ge(S,E)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Z0(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const J0={[Yu]:"LINEAR_TONE_MAPPING",[$u]:"REINHARD_TONE_MAPPING",[Ku]:"CINEON_TONE_MAPPING",[Zu]:"ACES_FILMIC_TONE_MAPPING",[Qu]:"AGX_TONE_MAPPING",[ju]:"NEUTRAL_TONE_MAPPING",[Ju]:"CUSTOM_TONE_MAPPING"};function Q0(n,e,t,i,r,s){const a=new Bn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Cr(e,t):void 0}),o=new Bn(e,t,{type:di,depthBuffer:!1,stencilBuffer:!1}),c=new sn;c.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ct([0,2,0,0,2,0],2));const l=new kf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new at(c,l),h=new Gl(-1,1,1,-1,0,1);let d=null,f=null,g=!1,x,p=null,m=[],T=!1;this.setSize=function(w,S){a.setSize(w,S),o.setSize(w,S);for(let E=0;E<m.length;E++){const b=m[E];b.setSize&&b.setSize(w,S)}},this.setEffects=function(w){m=w,T=m.length>0&&m[0].isRenderPass===!0;const S=a.width,E=a.height;for(let b=0;b<m.length;b++){const A=m[b];A.setSize&&A.setSize(S,E)}},this.begin=function(w,S){if(g||w.toneMapping===kn&&m.length===0)return!1;if(p=S,S!==null){const E=S.width,b=S.height;(a.width!==E||a.height!==b)&&this.setSize(E,b)}return T===!1&&w.setRenderTarget(a),x=w.toneMapping,w.toneMapping=kn,!0},this.hasRenderPass=function(){return T},this.end=function(w,S){w.toneMapping=x,g=!0;let E=a,b=o;for(let A=0;A<m.length;A++){const _=m[A];if(_.enabled!==!1&&(_.render(w,b,E,S),_.needsSwap!==!1)){const y=E;E=b,b=y}}if(d!==w.outputColorSpace||f!==w.toneMapping){d=w.outputColorSpace,f=w.toneMapping,l.defines={},Xe.getTransfer(d)===rt&&(l.defines.SRGB_TRANSFER="");const A=J0[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,w.setRenderTarget(p),w.render(u,h),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const bd=new Bt,ul=new Cr(1,1),Ed=new ld,wd=new mf,Td=new pd,Jc=[],Qc=[],jc=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function Fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jc[r];if(s===void 0&&(s=new Float32Array(r),Jc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ba(n,e){let t=Qc[e];t===void 0&&(t=new Int32Array(e),Qc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function j0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function ig(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;tu.set(i),n.uniformMatrix2fv(this.addr,!1,tu),Dt(t,i)}}function rg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;eu.set(i),n.uniformMatrix3fv(this.addr,!1,eu),Dt(t,i)}}function sg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;jc.set(i),n.uniformMatrix4fv(this.addr,!1,jc),Dt(t,i)}}function ag(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function ug(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function pg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ul.compareFunction=t.isReversedDepthBuffer()?Ll:Il,s=ul):s=bd,t.setTexture2D(e||s,r)}function mg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wd,r)}function gg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Td,r)}function _g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ed,r)}function xg(n){switch(n){case 5126:return j0;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return rg;case 35676:return sg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return ug;case 36294:return dg;case 36295:return hg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}function vg(n,e){n.uniform1fv(this.addr,e)}function Mg(n,e){const t=Fr(e,this.size,2);n.uniform2fv(this.addr,t)}function Sg(n,e){const t=Fr(e,this.size,3);n.uniform3fv(this.addr,t)}function yg(n,e){const t=Fr(e,this.size,4);n.uniform4fv(this.addr,t)}function bg(n,e){const t=Fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Eg(n,e){const t=Fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wg(n,e){const t=Fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Tg(n,e){n.uniform1iv(this.addr,e)}function Ag(n,e){n.uniform2iv(this.addr,e)}function Rg(n,e){n.uniform3iv(this.addr,e)}function Cg(n,e){n.uniform4iv(this.addr,e)}function Pg(n,e){n.uniform1uiv(this.addr,e)}function Dg(n,e){n.uniform2uiv(this.addr,e)}function Ig(n,e){n.uniform3uiv(this.addr,e)}function Lg(n,e){n.uniform4uiv(this.addr,e)}function Ng(n,e,t){const i=this.cache,r=e.length,s=ba(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=ul:a=bd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Ug(n,e,t){const i=this.cache,r=e.length,s=ba(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wd,s[a])}function Fg(n,e,t){const i=this.cache,r=e.length,s=ba(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Td,s[a])}function Og(n,e,t){const i=this.cache,r=e.length,s=ba(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ed,s[a])}function zg(n){switch(n){case 5126:return vg;case 35664:return Mg;case 35665:return Sg;case 35666:return yg;case 35674:return bg;case 35675:return Eg;case 35676:return wg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Dg;case 36295:return Ig;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}class kg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xg(t.type)}}class Bg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zg(t.type)}}class Gg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function nu(n,e){n.seq.push(e),n.map[e.id]=e}function Hg(n,e,t){const i=n.name,r=i.length;for(ho.lastIndex=0;;){const s=ho.exec(i),a=ho.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){nu(t,l===void 0?new kg(o,n,e):new Bg(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Gg(o),nu(t,h)),t=h}}}class ia{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Hg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function iu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Vg=37297;let Wg=0;function Xg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ru=new Ue;function qg(n){Xe._getMatrix(ru,Xe.workingColorSpace,n);const e=`mat3( ${ru.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(n)){case da:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function su(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Xg(n.getShaderSource(e),o)}else return s}function Yg(n,e){const t=qg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const $g={[Yu]:"Linear",[$u]:"Reinhard",[Ku]:"Cineon",[Zu]:"ACESFilmic",[Qu]:"AgX",[ju]:"Neutral",[Ju]:"Custom"};function Kg(n,e){const t=$g[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ws=new k;function Zg(){Xe.getLuminanceCoefficients(Ws);const n=Ws.x.toFixed(4),e=Ws.y.toFixed(4),t=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function Qg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Zr(n){return n!==""}function au(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ou(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(n){return n.replace(e_,n_)}const t_=new Map;function n_(n,e){let t=ke[e];if(t===void 0){const i=t_.get(e);if(i!==void 0)t=ke[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dl(t)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(n){return n.replace(i_,r_)}function r_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const s_={[Qs]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function a_(n){return s_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const o_={[qi]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function l_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":o_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const c_={[Rr]:"ENVMAP_MODE_REFRACTION"};function u_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":c_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const d_={[El]:"ENVMAP_BLENDING_MULTIPLY",[Yh]:"ENVMAP_BLENDING_MIX",[$h]:"ENVMAP_BLENDING_ADD"};function h_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":d_[n.combine]||"ENVMAP_BLENDING_NONE"}function f_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function p_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=a_(t),l=l_(t),u=u_(t),h=h_(t),d=f_(t),f=Jg(t),g=Qg(s),x=r.createProgram();let p,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zr).join(`
`),m.length>0&&(m+=`
`)):(p=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),m=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?ke.tonemapping_pars_fragment:"",t.toneMapping!==kn?Kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Yg("linearToOutputTexel",t.outputColorSpace),Zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),a=dl(a),a=au(a,t),a=ou(a,t),o=dl(o),o=au(o,t),o=ou(o,t),a=lu(a),o=lu(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=T+p+a,S=T+m+o,E=iu(r,r.VERTEX_SHADER,w),b=iu(r,r.FRAGMENT_SHADER,S);r.attachShader(x,E),r.attachShader(x,b),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(D){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(x)||"",O=r.getShaderInfoLog(E)||"",U=r.getShaderInfoLog(b)||"",L=I.trim(),H=O.trim(),X=U.trim();let Z=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,E,b);else{const ie=su(r,E,"vertex"),te=su(r,b,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+ie+`
`+te)}else L!==""?Ne("WebGLProgram: Program Info Log:",L):(H===""||X==="")&&(G=!1);G&&(D.diagnostics={runnable:Z,programLog:L,vertexShader:{log:H,prefix:p},fragmentShader:{log:X,prefix:m}})}r.deleteShader(E),r.deleteShader(b),_=new ia(r,x),y=jg(r,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(x,Vg)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}let m_=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new __(e),t.set(e,i)),i}}class __{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}}function x_(n){return n===Yi||n===la||n===ca}function v_(n,e,t,i,r,s){const a=new cd,o=new g_,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,y,C,D,I,O){const U=D.fog,L=I.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Z=e.get(_.envMap||H,X),G=Z&&Z.mapping===Ma?Z.image.height:null,ie=f[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const te=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ae=te!==void 0?te.length:0;let we=0;L.morphAttributes.position!==void 0&&(we=1),L.morphAttributes.normal!==void 0&&(we=2),L.morphAttributes.color!==void 0&&(we=3);let $e,We,J,re;if(ie){const ye=On[ie];$e=ye.vertexShader,We=ye.fragmentShader}else{$e=_.vertexShader,We=_.fragmentShader;const ye=o.getVertexShaderStage(_),xt=o.getFragmentShaderStage(_);o.update(_,ye,xt),J=ye.id,re=xt.id}const ne=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),xe=I.isInstancedMesh===!0,Se=I.isBatchedMesh===!0,Ke=!!_.map,ze=!!_.matcap,nt=!!Z,et=!!_.aoMap,Ze=!!_.lightMap,yt=!!_.bumpMap&&_.wireframe===!1,At=!!_.normalMap,It=!!_.displacementMap,Ot=!!_.emissiveMap,_t=!!_.metalnessMap,bt=!!_.roughnessMap,F=_.anisotropy>0,Qt=_.clearcoat>0,it=_.dispersion>0,P=_.iridescence>0,v=_.sheen>0,B=_.transmission>0,q=F&&!!_.anisotropyMap,$=Qt&&!!_.clearcoatMap,se=Qt&&!!_.clearcoatNormalMap,le=Qt&&!!_.clearcoatRoughnessMap,K=P&&!!_.iridescenceMap,j=P&&!!_.iridescenceThicknessMap,ce=v&&!!_.sheenColorMap,Te=v&&!!_.sheenRoughnessMap,he=!!_.specularMap,ue=!!_.specularColorMap,Pe=!!_.specularIntensityMap,De=B&&!!_.transmissionMap,Fe=B&&!!_.thicknessMap,N=!!_.gradientMap,oe=!!_.alphaMap,Q=_.alphaTest>0,de=!!_.alphaHash,_e=!!_.extensions;let ee=kn;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ee=n.toneMapping);const Ee={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:$e,fragmentShader:We,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Se,batchingColor:Se&&I._colorsTexture!==null,instancing:xe,instancingColor:xe&&I.instanceColor!==null,instancingMorph:xe&&I.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ke,matcap:ze,envMap:nt,envMapMode:nt&&Z.mapping,envMapCubeUVHeight:G,aoMap:et,lightMap:Ze,bumpMap:yt,normalMap:At,displacementMap:It,emissiveMap:Ot,normalMapObjectSpace:At&&_.normalMapType===Jh,normalMapTangentSpace:At&&_.normalMapType===ll,packedNormalMap:At&&_.normalMapType===ll&&x_(_.normalMap.format),metalnessMap:_t,roughnessMap:bt,anisotropy:F,anisotropyMap:q,clearcoat:Qt,clearcoatMap:$,clearcoatNormalMap:se,clearcoatRoughnessMap:le,dispersion:it,iridescence:P,iridescenceMap:K,iridescenceThicknessMap:j,sheen:v,sheenColorMap:ce,sheenRoughnessMap:Te,specularMap:he,specularColorMap:ue,specularIntensityMap:Pe,transmission:B,transmissionMap:De,thicknessMap:Fe,gradientMap:N,opaque:_.transparent===!1&&_.blending===Di&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:Q,alphaHash:de,combine:_.combine,mapUv:Ke&&g(_.map.channel),aoMapUv:et&&g(_.aoMap.channel),lightMapUv:Ze&&g(_.lightMap.channel),bumpMapUv:yt&&g(_.bumpMap.channel),normalMapUv:At&&g(_.normalMap.channel),displacementMapUv:It&&g(_.displacementMap.channel),emissiveMapUv:Ot&&g(_.emissiveMap.channel),metalnessMapUv:_t&&g(_.metalnessMap.channel),roughnessMapUv:bt&&g(_.roughnessMap.channel),anisotropyMapUv:q&&g(_.anisotropyMap.channel),clearcoatMapUv:$&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(_.sheenRoughnessMap.channel),specularMapUv:he&&g(_.specularMap.channel),specularColorMapUv:ue&&g(_.specularColorMap.channel),specularIntensityMapUv:Pe&&g(_.specularIntensityMap.channel),transmissionMapUv:De&&g(_.transmissionMap.channel),thicknessMapUv:Fe&&g(_.thicknessMap.channel),alphaMapUv:oe&&g(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(At||F),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Ke||oe),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&At===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:we,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:Ke&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:Ot&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Tt,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)y.push(C),y.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(y,_),T(y,_),y.push(n.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function m(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function T(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const y=f[_.type];let C;if(y){const D=On[y];C=Ff.clone(D.uniforms)}else C=_.uniforms;return C}function S(_,y){let C=u.get(y);return C!==void 0?++C.usedTimes:(C=new p_(n,y,_,r),l.push(C),u.set(y,C)),C}function E(_){if(--_.usedTimes===0){const y=l.indexOf(_);l[y]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:w,acquireProgram:S,releaseProgram:E,releaseShaderCache:b,programs:l,dispose:A}}function M_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function S_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function uu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function du(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,p,m){let T=n[e];return T===void 0?(T={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},n[e]=T):(T.id=d.id,T.object=d,T.geometry=f,T.material=g,T.materialVariant=a(d),T.groupOrder=x,T.renderOrder=d.renderOrder,T.z=p,T.group=m),e++,T}function c(d,f,g,x,p,m){const T=o(d,f,g,x,p,m);g.transmission>0?i.push(T):g.transparent===!0?r.push(T):t.push(T)}function l(d,f,g,x,p,m){const T=o(d,f,g,x,p,m);g.transmission>0?i.unshift(T):g.transparent===!0?r.unshift(T):t.unshift(T)}function u(d,f,g){t.length>1&&t.sort(d||S_),i.length>1&&i.sort(f||uu),r.length>1&&r.sort(f||uu),g&&(t.reverse(),i.reverse(),r.reverse())}function h(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function y_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new du,n.set(i,[a])):r>=s.length?(a=new du,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function b_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ie};break;case"SpotLight":t={position:new k,direction:new k,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function E_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let w_=0;function T_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function A_(n){const e=new b_,t=E_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const r=new k,s=new ot,a=new ot;function o(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,T=0,w=0,S=0,E=0,b=0,A=0;l.sort(T_);for(let y=0,C=l.length;y<C;y++){const D=l[y],I=D.color,O=D.intensity,U=D.distance;let L=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Yi?L=D.shadow.map.texture:L=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=I.r*O,h+=I.g*O,d+=I.b*O;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],O);A++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,Z=t.get(D);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=D.shadow.matrix,T++}i.directional[f]=H,f++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(I).multiplyScalar(O),H.distance=U,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[x]=H;const X=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,X.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[x]=X.matrix,D.castShadow){const Z=t.get(D);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=L,S++}x++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(I).multiplyScalar(O),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=H,p++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const X=D.shadow,Z=t.get(D);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=D.shadow.matrix,w++}i.point[g]=H,g++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(O),H.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[m]=H,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==x||_.rectAreaLength!==p||_.hemiLength!==m||_.numDirectionalShadows!==T||_.numPointShadows!==w||_.numSpotShadows!==S||_.numSpotMaps!==E||_.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,_.directionalLength=f,_.pointLength=g,_.spotLength=x,_.rectAreaLength=p,_.hemiLength=m,_.numDirectionalShadows=T,_.numPointShadows=w,_.numSpotShadows=S,_.numSpotMaps=E,_.numLightProbes=A,i.version=w_++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0;const p=u.matrixWorldInverse;for(let m=0,T=l.length;m<T;m++){const w=l[m];if(w.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(w.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(w.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(w.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:i}}function hu(n){const e=new A_(n),t=[],i=[],r=[];function s(d){h.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function R_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new hu(n),e.set(r,[o])):s>=a.length?(o=new hu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,D_=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],I_=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],fu=new ot,qr=new k,fo=new k;function L_(n,e,t){let i=new Fl;const r=new Ge,s=new Ge,a=new gt,o=new Bf,c=new Gf,l={},u=t.maxTextureSize,h={[Li]:rn,[rn]:Li,[Tt]:Tt},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:C_,fragmentShader:P_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new at(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let m=this.type;this.render=function(b,A,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Rh&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qs);const y=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),I=n.state;I.setBlending(li),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=m!==this.type;O&&A.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(L=>L.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,L=b.length;U<L;U++){const H=b[U],X=H.shadow;if(X===void 0){Ne("WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Z=X.getFrameExtents();r.multiply(Z),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,X.mapSize.y=s.y));const G=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=G,X.map===null||O===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Kr){if(H.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Bn(r.x,r.y,{format:Yi,type:di,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),X.map.texture.name=H.name+".shadowMap",X.map.depthTexture=new Cr(r.x,r.y,Tn),X.map.depthTexture.name=H.name+".shadowMapDepth",X.map.depthTexture.format=hi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=zt,X.map.depthTexture.magFilter=zt}else H.isPointLight?(X.map=new yd(r.x),X.map.depthTexture=new Nf(r.x,Xn)):(X.map=new Bn(r.x,r.y),X.map.depthTexture=new Cr(r.x,r.y,Xn)),X.map.depthTexture.name=H.name+".shadowMap",X.map.depthTexture.format=hi,this.type===Qs?(X.map.depthTexture.compareFunction=G?Ll:Il,X.map.depthTexture.minFilter=Ft,X.map.depthTexture.magFilter=Ft):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=zt,X.map.depthTexture.magFilter=zt);X.camera.updateProjectionMatrix()}const ie=X.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<ie;te++){if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,te),n.clear();else{te===0&&(n.setRenderTarget(X.map),n.clear());const ae=X.getViewport(te);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),I.viewport(a)}if(H.isPointLight){const ae=X.camera,we=X.matrix,$e=H.distance||ae.far;$e!==ae.far&&(ae.far=$e,ae.updateProjectionMatrix()),qr.setFromMatrixPosition(H.matrixWorld),ae.position.copy(qr),fo.copy(ae.position),fo.add(D_[te]),ae.up.copy(I_[te]),ae.lookAt(fo),ae.updateMatrixWorld(),we.makeTranslation(-qr.x,-qr.y,-qr.z),fu.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),X._frustum.setFromProjectionMatrix(fu,ae.coordinateSystem,ae.reversedDepth)}else X.updateMatrices(H);i=X.getFrustum(),S(A,_,X.camera,H,this.type)}X.isPointLightShadow!==!0&&this.type===Kr&&T(X,_),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(y,C,D)};function T(b,A){const _=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Bn(r.x,r.y,{format:Yi,type:di})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,_,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,_,f,x,null)}function w(b,A,_,y){let C=null;const D=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=_.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=C.uuid,O=A.uuid;let U=l[I];U===void 0&&(U={},l[I]=U);let L=U[O];L===void 0&&(L=C.clone(),U[O]=L,A.addEventListener("dispose",E)),C=L}if(C.visible=A.visible,C.wireframe=A.wireframe,y===Kr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:h[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const I=n.properties.get(C);I.light=_}return C}function S(b,A,_,y,C){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Kr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const O=e.update(b),U=b.material;if(Array.isArray(U)){const L=O.groups;for(let H=0,X=L.length;H<X;H++){const Z=L[H],G=U[Z.materialIndex];if(G&&G.visible){const ie=w(b,G,y,C);b.onBeforeShadow(n,b,A,_,O,ie,Z),n.renderBufferDirect(_,null,O,ie,b,Z),b.onAfterShadow(n,b,A,_,O,ie,Z)}}}else if(U.visible){const L=w(b,U,y,C);b.onBeforeShadow(n,b,A,_,O,L,null),n.renderBufferDirect(_,null,O,L,b,null),b.onAfterShadow(n,b,A,_,O,L,null)}}const I=b.children;for(let O=0,U=I.length;O<U;O++)S(I[O],A,_,y,C)}function E(b){b.target.removeEventListener("dispose",E);for(const _ in l){const y=l[_],C=b.target.uuid;C in y&&(y[C].dispose(),delete y[C])}}}function N_(n,e){function t(){let N=!1;const oe=new gt;let Q=null;const de=new gt(0,0,0,0);return{setMask:function(_e){Q!==_e&&!N&&(n.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){N=_e},setClear:function(_e,ee,Ee,ye,xt){xt===!0&&(_e*=ye,ee*=ye,Ee*=ye),oe.set(_e,ee,Ee,ye),de.equals(oe)===!1&&(n.clearColor(_e,ee,Ee,ye),de.copy(oe))},reset:function(){N=!1,Q=null,de.set(-1,0,0,0)}}}function i(){let N=!1,oe=!1,Q=null,de=null,_e=null;return{setReversed:function(ee){if(oe!==ee){const Ee=e.get("EXT_clip_control");ee?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),oe=ee;const ye=_e;_e=null,this.setClear(ye)}},getReversed:function(){return oe},setTest:function(ee){ee?ne(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(ee){Q!==ee&&!N&&(n.depthMask(ee),Q=ee)},setFunc:function(ee){if(oe&&(ee=lf[ee]),de!==ee){switch(ee){case bo:n.depthFunc(n.NEVER);break;case Eo:n.depthFunc(n.ALWAYS);break;case wo:n.depthFunc(n.LESS);break;case Ar:n.depthFunc(n.LEQUAL);break;case To:n.depthFunc(n.EQUAL);break;case Ao:n.depthFunc(n.GEQUAL);break;case Ro:n.depthFunc(n.GREATER);break;case Co:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=ee}},setLocked:function(ee){N=ee},setClear:function(ee){_e!==ee&&(_e=ee,oe&&(ee=1-ee),n.clearDepth(ee))},reset:function(){N=!1,Q=null,de=null,_e=null,oe=!1}}}function r(){let N=!1,oe=null,Q=null,de=null,_e=null,ee=null,Ee=null,ye=null,xt=null;return{setTest:function(ht){N||(ht?ne(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ht){oe!==ht&&!N&&(n.stencilMask(ht),oe=ht)},setFunc:function(ht,Rn,Cn){(Q!==ht||de!==Rn||_e!==Cn)&&(n.stencilFunc(ht,Rn,Cn),Q=ht,de=Rn,_e=Cn)},setOp:function(ht,Rn,Cn){(ee!==ht||Ee!==Rn||ye!==Cn)&&(n.stencilOp(ht,Rn,Cn),ee=ht,Ee=Rn,ye=Cn)},setLocked:function(ht){N=ht},setClear:function(ht){xt!==ht&&(n.clearStencil(ht),xt=ht)},reset:function(){N=!1,oe=null,Q=null,de=null,_e=null,ee=null,Ee=null,ye=null,xt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,T=null,w=null,S=null,E=null,b=null,A=null,_=new Ie(0,0,0),y=0,C=!1,D=null,I=null,O=null,U=null,L=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Z>=2);let ie=null,te={};const ae=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),$e=new gt().fromArray(ae),We=new gt().fromArray(we);function J(N,oe,Q,de){const _e=new Uint8Array(4),ee=n.createTexture();n.bindTexture(N,ee),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<Q;Ee++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(oe+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ee}const re={};re[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Ar),yt(!1),At(hc),ne(n.CULL_FACE),et(li);function ne(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ge(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function xe(N,oe){return d[N]!==oe?(n.bindFramebuffer(N,oe),d[N]=oe,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=oe),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Se(N,oe){let Q=g,de=!1;if(N){Q=f.get(oe),Q===void 0&&(Q=[],f.set(oe,Q));const _e=N.textures;if(Q.length!==_e.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ee=_e.length;ee<Ee;ee++)Q[ee]=n.COLOR_ATTACHMENT0+ee;Q.length=_e.length,de=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,de=!0);de&&n.drawBuffers(Q)}function Ke(N){return x!==N?(n.useProgram(N),x=N,!0):!1}const ze={[Gi]:n.FUNC_ADD,[Ph]:n.FUNC_SUBTRACT,[Dh]:n.FUNC_REVERSE_SUBTRACT};ze[Ih]=n.MIN,ze[Lh]=n.MAX;const nt={[Nh]:n.ZERO,[Uh]:n.ONE,[Fh]:n.SRC_COLOR,[So]:n.SRC_ALPHA,[Hh]:n.SRC_ALPHA_SATURATE,[Bh]:n.DST_COLOR,[zh]:n.DST_ALPHA,[Oh]:n.ONE_MINUS_SRC_COLOR,[yo]:n.ONE_MINUS_SRC_ALPHA,[Gh]:n.ONE_MINUS_DST_COLOR,[kh]:n.ONE_MINUS_DST_ALPHA,[Vh]:n.CONSTANT_COLOR,[Wh]:n.ONE_MINUS_CONSTANT_COLOR,[Xh]:n.CONSTANT_ALPHA,[qh]:n.ONE_MINUS_CONSTANT_ALPHA};function et(N,oe,Q,de,_e,ee,Ee,ye,xt,ht){if(N===li){p===!0&&(ge(n.BLEND),p=!1);return}if(p===!1&&(ne(n.BLEND),p=!0),N!==Ch){if(N!==m||ht!==C){if((T!==Gi||E!==Gi)&&(n.blendEquation(n.FUNC_ADD),T=Gi,E=Gi),ht)switch(N){case Di:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ii:n.blendFunc(n.ONE,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",N);break}else switch(N){case Di:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fc:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pc:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",N);break}w=null,S=null,b=null,A=null,_.set(0,0,0),y=0,m=N,C=ht}return}_e=_e||oe,ee=ee||Q,Ee=Ee||de,(oe!==T||_e!==E)&&(n.blendEquationSeparate(ze[oe],ze[_e]),T=oe,E=_e),(Q!==w||de!==S||ee!==b||Ee!==A)&&(n.blendFuncSeparate(nt[Q],nt[de],nt[ee],nt[Ee]),w=Q,S=de,b=ee,A=Ee),(ye.equals(_)===!1||xt!==y)&&(n.blendColor(ye.r,ye.g,ye.b,xt),_.copy(ye),y=xt),m=N,C=!1}function Ze(N,oe){N.side===Tt?ge(n.CULL_FACE):ne(n.CULL_FACE);let Q=N.side===rn;oe&&(Q=!Q),yt(Q),N.blending===Di&&N.transparent===!1?et(li):et(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const de=N.stencilWrite;o.setTest(de),de&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function yt(N){D!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),D=N)}function At(N){N!==Th?(ne(n.CULL_FACE),N!==I&&(N===hc?n.cullFace(n.BACK):N===Ah?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),I=N}function It(N){N!==O&&(X&&n.lineWidth(N),O=N)}function Ot(N,oe,Q){N?(ne(n.POLYGON_OFFSET_FILL),(U!==oe||L!==Q)&&(U=oe,L=Q,a.getReversed()&&(oe=-oe),n.polygonOffset(oe,Q))):ge(n.POLYGON_OFFSET_FILL)}function _t(N){N?ne(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function bt(N){N===void 0&&(N=n.TEXTURE0+H-1),ie!==N&&(n.activeTexture(N),ie=N)}function F(N,oe,Q){Q===void 0&&(ie===null?Q=n.TEXTURE0+H-1:Q=ie);let de=te[Q];de===void 0&&(de={type:void 0,texture:void 0},te[Q]=de),(de.type!==N||de.texture!==oe)&&(ie!==Q&&(n.activeTexture(Q),ie=Q),n.bindTexture(N,oe||re[N]),de.type=N,de.texture=oe)}function Qt(){const N=te[ie];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function it(){try{n.compressedTexImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function v(){try{n.texSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function B(){try{n.texSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function se(){try{n.texStorage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function le(){try{n.texStorage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function K(){try{n.texImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function j(){try{n.texImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function ce(N){return h[N]!==void 0?h[N]:n.getParameter(N)}function Te(N,oe){h[N]!==oe&&(n.pixelStorei(N,oe),h[N]=oe)}function he(N){$e.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),$e.copy(N))}function ue(N){We.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),We.copy(N))}function Pe(N,oe){let Q=l.get(oe);Q===void 0&&(Q=new WeakMap,l.set(oe,Q));let de=Q.get(N);de===void 0&&(de=n.getUniformBlockIndex(oe,N.name),Q.set(N,de))}function De(N,oe){const de=l.get(oe).get(N);c.get(oe)!==de&&(n.uniformBlockBinding(oe,de,N.__bindingPointIndex),c.set(oe,de))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ie=null,te={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,T=null,w=null,S=null,E=null,b=null,A=null,_=new Ie(0,0,0),y=0,C=!1,D=null,I=null,O=null,U=null,L=null,$e.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:ge,bindFramebuffer:xe,drawBuffers:Se,useProgram:Ke,setBlending:et,setMaterial:Ze,setFlipSided:yt,setCullFace:At,setLineWidth:It,setPolygonOffset:Ot,setScissorTest:_t,activeTexture:bt,bindTexture:F,unbindTexture:Qt,compressedTexImage2D:it,compressedTexImage3D:P,texImage2D:K,texImage3D:j,pixelStorei:Te,getParameter:ce,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:se,texStorage3D:le,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:$,scissor:he,viewport:ue,reset:Fe}}function U_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,v){return g?new OffscreenCanvas(P,v):ss("canvas")}function p(P,v,B){let q=1;const $=it(P);if(($.width>B||$.height>B)&&(q=B/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const se=Math.floor(q*$.width),le=Math.floor(q*$.height);d===void 0&&(d=x(se,le));const K=v?x(se,le):d;return K.width=se,K.height=le,K.getContext("2d").drawImage(P,0,0,se,le),Ne("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+le+")."),K}else return"data"in P&&Ne("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function m(P){return P.generateMipmaps}function T(P){n.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(P,v,B,q,$,se=!1){if(P!==null){if(n[P]!==void 0)return n[P];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let le;q&&(le=e.get("EXT_texture_norm16"),le||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8),B===n.UNSIGNED_SHORT&&le&&(K=le.R16_EXT),B===n.SHORT&&le&&(K=le.R16_SNORM_EXT)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),v===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8),B===n.UNSIGNED_SHORT&&le&&(K=le.RG16_EXT),B===n.SHORT&&le&&(K=le.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_SHORT&&le&&(K=le.RGB16_EXT),B===n.SHORT&&le&&(K=le.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),v===n.RGBA){const j=se?da:Xe.getTransfer($);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=j===rt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&le&&(K=le.RGBA16_EXT),B===n.SHORT&&le&&(K=le.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(P,v){let B;return P?v===null||v===Xn||v===is?B=n.DEPTH24_STENCIL8:v===Tn?B=n.DEPTH32F_STENCIL8:v===ns&&(B=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xn||v===is?B=n.DEPTH_COMPONENT24:v===Tn?B=n.DEPTH_COMPONENT32F:v===ns&&(B=n.DEPTH_COMPONENT16),B}function b(P,v){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==zt&&P.minFilter!==Ft?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function A(P){const v=P.target;v.removeEventListener("dispose",A),y(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&h.delete(v)}function _(P){const v=P.target;v.removeEventListener("dispose",_),D(v)}function y(P){const v=i.get(P);if(v.__webglInit===void 0)return;const B=P.source,q=f.get(B);if(q){const $=q[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(P),Object.keys(q).length===0&&f.delete(B)}i.remove(P)}function C(P){const v=i.get(P);n.deleteTexture(v.__webglTexture);const B=P.source,q=f.get(B);delete q[v.__cacheKey],a.memory.textures--}function D(P){const v=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let $=0;$<v.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(v.__webglFramebuffer[q][$]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=P.textures;for(let q=0,$=B.length;q<$;q++){const se=i.get(B[q]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(B[q])}i.remove(P)}let I=0;function O(){I=0}function U(){return I}function L(P){I=P}function H(){const P=I;return P>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),I+=1,P}function X(P){const v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function Z(P,v){const B=i.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){const q=P.image;if(q===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(B,P,v);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function G(P,v){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){ge(B,P,v);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function ie(P,v){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){ge(B,P,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function te(P,v){const B=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&B.__version!==P.version){xe(B,P,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const ae={[Po]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[Do]:n.MIRRORED_REPEAT},we={[zt]:n.NEAREST,[Kh]:n.NEAREST_MIPMAP_NEAREST,[Ss]:n.NEAREST_MIPMAP_LINEAR,[Ft]:n.LINEAR,[Na]:n.LINEAR_MIPMAP_NEAREST,[si]:n.LINEAR_MIPMAP_LINEAR},$e={[Qh]:n.NEVER,[rf]:n.ALWAYS,[jh]:n.LESS,[Il]:n.LEQUAL,[ef]:n.EQUAL,[Ll]:n.GEQUAL,[tf]:n.GREATER,[nf]:n.NOTEQUAL};function We(P,v){if(v.type===Tn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ft||v.magFilter===Na||v.magFilter===Ss||v.magFilter===si||v.minFilter===Ft||v.minFilter===Na||v.minFilter===Ss||v.minFilter===si)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ae[v.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ae[v.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ae[v.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,we[v.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,we[v.minFilter]),v.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,$e[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zt||v.minFilter!==Ss&&v.minFilter!==si||v.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function J(P,v){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",A));const q=v.source;let $=f.get(q);$===void 0&&($={},f.set(q,$));const se=X(v);if(se!==P.__cacheKey){$[se]===void 0&&($[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[se].usedTimes++;const le=$[P.__cacheKey];le!==void 0&&($[P.__cacheKey].usedTimes--,le.usedTimes===0&&C(v)),P.__cacheKey=se,P.__webglTexture=$[se].texture}return B}function re(P,v,B){return Math.floor(Math.floor(P/B)/v)}function ne(P,v,B,q){const se=P.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,q,v.data);else{se.sort((Te,he)=>Te.start-he.start);let le=0;for(let Te=1;Te<se.length;Te++){const he=se[le],ue=se[Te],Pe=he.start+he.count,De=re(ue.start,v.width,4),Fe=re(he.start,v.width,4);ue.start<=Pe+1&&De===Fe&&re(ue.start+ue.count-1,v.width,4)===De?he.count=Math.max(he.count,ue.start+ue.count-he.start):(++le,se[le]=ue)}se.length=le+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Te=0,he=se.length;Te<he;Te++){const ue=se[Te],Pe=Math.floor(ue.start/4),De=Math.ceil(ue.count/4),Fe=Pe%v.width,N=Math.floor(Pe/v.width),oe=De,Q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Fe,N,oe,Q,B,q,v.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function ge(P,v,B){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);const $=J(P,v),se=v.source;t.bindTexture(q,P.__webglTexture,n.TEXTURE0+B);const le=i.get(se);if(se.version!==le.__version||$===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const Q=Xe.getPrimaries(Xe.workingColorSpace),de=v.colorSpace===Ai?null:Xe.getPrimaries(v.colorSpace),_e=v.colorSpace===Ai||Q===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let j=p(v.image,!1,r.maxTextureSize);j=Qt(v,j);const ce=s.convert(v.format,v.colorSpace),Te=s.convert(v.type);let he=S(v.internalFormat,ce,Te,v.normalized,v.colorSpace,v.isVideoTexture);We(q,v);let ue;const Pe=v.mipmaps,De=v.isVideoTexture!==!0,Fe=le.__version===void 0||$===!0,N=se.dataReady,oe=b(v,j);if(v.isDepthTexture)he=E(v.format===Vi,v.type),Fe&&(De?t.texStorage2D(n.TEXTURE_2D,1,he,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,he,j.width,j.height,0,ce,Te,null));else if(v.isDataTexture)if(Pe.length>0){De&&Fe&&t.texStorage2D(n.TEXTURE_2D,oe,he,Pe[0].width,Pe[0].height);for(let Q=0,de=Pe.length;Q<de;Q++)ue=Pe[Q],De?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,ce,Te,ue.data):t.texImage2D(n.TEXTURE_2D,Q,he,ue.width,ue.height,0,ce,Te,ue.data);v.generateMipmaps=!1}else De?(Fe&&t.texStorage2D(n.TEXTURE_2D,oe,he,j.width,j.height),N&&ne(v,j,ce,Te)):t.texImage2D(n.TEXTURE_2D,0,he,j.width,j.height,0,ce,Te,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){De&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,he,Pe[0].width,Pe[0].height,j.depth);for(let Q=0,de=Pe.length;Q<de;Q++)if(ue=Pe[Q],v.format!==An)if(ce!==null)if(De){if(N)if(v.layerUpdates.size>0){const _e=Wc(ue.width,ue.height,v.format,v.type);for(const ee of v.layerUpdates){const Ee=ue.data.subarray(ee*_e/ue.data.BYTES_PER_ELEMENT,(ee+1)*_e/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,ee,ue.width,ue.height,1,ce,Ee)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,j.depth,ce,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,he,ue.width,ue.height,j.depth,0,ue.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,j.depth,ce,Te,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,he,ue.width,ue.height,j.depth,0,ce,Te,ue.data)}else{De&&Fe&&t.texStorage2D(n.TEXTURE_2D,oe,he,Pe[0].width,Pe[0].height);for(let Q=0,de=Pe.length;Q<de;Q++)ue=Pe[Q],v.format!==An?ce!==null?De?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,ce,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,he,ue.width,ue.height,0,ue.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,ce,Te,ue.data):t.texImage2D(n.TEXTURE_2D,Q,he,ue.width,ue.height,0,ce,Te,ue.data)}else if(v.isDataArrayTexture)if(De){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,he,j.width,j.height,j.depth),N)if(v.layerUpdates.size>0){const Q=Wc(j.width,j.height,v.format,v.type);for(const de of v.layerUpdates){const _e=j.data.subarray(de*Q/j.data.BYTES_PER_ELEMENT,(de+1)*Q/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,j.width,j.height,1,ce,Te,_e)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,Te,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,j.width,j.height,j.depth,0,ce,Te,j.data);else if(v.isData3DTexture)De?(Fe&&t.texStorage3D(n.TEXTURE_3D,oe,he,j.width,j.height,j.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,Te,j.data)):t.texImage3D(n.TEXTURE_3D,0,he,j.width,j.height,j.depth,0,ce,Te,j.data);else if(v.isFramebufferTexture){if(Fe)if(De)t.texStorage2D(n.TEXTURE_2D,oe,he,j.width,j.height);else{let Q=j.width,de=j.height;for(let _e=0;_e<oe;_e++)t.texImage2D(n.TEXTURE_2D,_e,he,Q,de,0,ce,Te,null),Q>>=1,de>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),h.add(v),Q.onpaint=de=>{const _e=de.changedElements;for(const ee of h)_e.includes(ee.image)&&(ee.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{const _e=n.RGBA,ee=n.RGBA,Ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,_e,ee,Ee,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(De&&Fe){const Q=it(Pe[0]);t.texStorage2D(n.TEXTURE_2D,oe,he,Q.width,Q.height)}for(let Q=0,de=Pe.length;Q<de;Q++)ue=Pe[Q],De?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ce,Te,ue):t.texImage2D(n.TEXTURE_2D,Q,he,ce,Te,ue);v.generateMipmaps=!1}else if(De){if(Fe){const Q=it(j);t.texStorage2D(n.TEXTURE_2D,oe,he,Q.width,Q.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Te,j)}else t.texImage2D(n.TEXTURE_2D,0,he,ce,Te,j);m(v)&&T(q),le.__version=se.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function xe(P,v,B){if(v.image.length!==6)return;const q=J(P,v),$=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+B);const se=i.get($);if($.version!==se.__version||q===!0){t.activeTexture(n.TEXTURE0+B);const le=Xe.getPrimaries(Xe.workingColorSpace),K=v.colorSpace===Ai?null:Xe.getPrimaries(v.colorSpace),j=v.colorSpace===Ai||le===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ce=v.isCompressedTexture||v.image[0].isCompressedTexture,Te=v.image[0]&&v.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!ce&&!Te?he[ee]=p(v.image[ee],!0,r.maxCubemapSize):he[ee]=Te?v.image[ee].image:v.image[ee],he[ee]=Qt(v,he[ee]);const ue=he[0],Pe=s.convert(v.format,v.colorSpace),De=s.convert(v.type),Fe=S(v.internalFormat,Pe,De,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,oe=se.__version===void 0||q===!0,Q=$.dataReady;let de=b(v,ue);We(n.TEXTURE_CUBE_MAP,v);let _e;if(ce){N&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Fe,ue.width,ue.height);for(let ee=0;ee<6;ee++){_e=he[ee].mipmaps;for(let Ee=0;Ee<_e.length;Ee++){const ye=_e[Ee];v.format!==An?Pe!==null?N?Q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,ye.width,ye.height,Pe,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,Fe,ye.width,ye.height,0,ye.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,ye.width,ye.height,Pe,De,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,Fe,ye.width,ye.height,0,Pe,De,ye.data)}}}else{if(_e=v.mipmaps,N&&oe){_e.length>0&&de++;const ee=it(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Fe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Te){N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Pe,De,he[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Fe,he[ee].width,he[ee].height,0,Pe,De,he[ee].data);for(let Ee=0;Ee<_e.length;Ee++){const xt=_e[Ee].image[ee].image;N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,xt.width,xt.height,Pe,De,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,Fe,xt.width,xt.height,0,Pe,De,xt.data)}}else{N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,De,he[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Fe,Pe,De,he[ee]);for(let Ee=0;Ee<_e.length;Ee++){const ye=_e[Ee];N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,Pe,De,ye.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,Fe,Pe,De,ye.image[ee])}}}m(v)&&T(n.TEXTURE_CUBE_MAP),se.__version=$.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Se(P,v,B,q,$,se){const le=s.convert(B.format,B.colorSpace),K=s.convert(B.type),j=S(B.internalFormat,le,K,B.normalized,B.colorSpace),ce=i.get(v),Te=i.get(B);if(Te.__renderTarget=v,!ce.__hasExternalTextures){const he=Math.max(1,v.width>>se),ue=Math.max(1,v.height>>se);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,se,j,he,ue,v.depth,0,le,K,null):t.texImage2D($,se,j,he,ue,0,le,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),bt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,Te.__webglTexture,0,_t(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,Te.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(P,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,P),v.depthBuffer){const q=v.depthTexture,$=q&&q.isDepthTexture?q.type:null,se=E(v.stencilBuffer,$),le=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;bt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(v),se,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(v),se,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,se,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,P)}else{const q=v.textures;for(let $=0;$<q.length;$++){const se=q[$],le=s.convert(se.format,se.colorSpace),K=s.convert(se.type),j=S(se.internalFormat,le,K,se.normalized,se.colorSpace);bt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(v),j,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(v),j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(P,v,B){const q=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),We(n.TEXTURE_CUBE_MAP,v.depthTexture);const ce=s.convert(v.depthTexture.format),Te=s.convert(v.depthTexture.type);let he;v.depthTexture.format===hi?he=n.DEPTH_COMPONENT24:v.depthTexture.format===Vi&&(he=n.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,v.width,v.height,0,ce,Te,null)}}else Z(v.depthTexture,0);const se=$.__webglTexture,le=_t(v),K=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,j=v.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===hi)bt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,se,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,j,K,se,0);else if(v.depthTexture.format===Vi)bt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,se,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,j,K,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(P){const v=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=q}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)ze(v.__webglFramebuffer[q],P,q);else{const q=P.texture.mipmaps;q&&q.length>0?ze(v.__webglFramebuffer[0],P,0):ze(v.__webglFramebuffer,P,0)}else if(B){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),Ke(v.__webglDepthbuffer[q],P,!1);else{const $=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,se)}}else{const q=P.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ke(v.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(P,v,B){const q=i.get(P);v!==void 0&&Se(q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&nt(P)}function Ze(P){const v=P.texture,B=i.get(P),q=i.get(v);P.addEventListener("dispose",_);const $=P.textures,se=P.isWebGLCubeRenderTarget===!0,le=$.length>1;if(le||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,a.memory.textures++),se){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let j=0;j<v.mipmaps.length;j++)B.__webglFramebuffer[K][j]=n.createFramebuffer()}else B.__webglFramebuffer[K]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)B.__webglFramebuffer[K]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(le)for(let K=0,j=$.length;K<j;K++){const ce=i.get($[K]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&bt(P)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){const j=$[K];B.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[K]);const ce=s.convert(j.format,j.colorSpace),Te=s.convert(j.type),he=S(j.internalFormat,ce,Te,j.normalized,j.colorSpace,P.isXRRenderTarget===!0),ue=_t(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,he,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,B.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ke(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),We(n.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Se(B.__webglFramebuffer[K][j],P,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else Se(B.__webglFramebuffer[K],P,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(v)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let K=0,j=$.length;K<j;K++){const ce=$[K],Te=i.get(ce);let he=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Te.__webglTexture),We(he,ce),Se(B.__webglFramebuffer,P,ce,n.COLOR_ATTACHMENT0+K,he,0),m(ce)&&T(he)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,q.__webglTexture),We(K,v),v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Se(B.__webglFramebuffer[j],P,v,n.COLOR_ATTACHMENT0,K,j);else Se(B.__webglFramebuffer,P,v,n.COLOR_ATTACHMENT0,K,0);m(v)&&T(K),t.unbindTexture()}P.depthBuffer&&nt(P)}function yt(P){const v=P.textures;for(let B=0,q=v.length;B<q;B++){const $=v[B];if(m($)){const se=w(P),le=i.get($).__webglTexture;t.bindTexture(se,le),T(se),t.unbindTexture()}}}const At=[],It=[];function Ot(P){if(P.samples>0){if(bt(P)===!1){const v=P.textures,B=P.width,q=P.height;let $=n.COLOR_BUFFER_BIT;const se=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(P),K=v.length>1;if(K)for(let ce=0;ce<v.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const j=P.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<v.length;ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Te=i.get(v[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,B,q,0,0,B,q,$,n.NEAREST),c===!0&&(At.length=0,It.length=0,At.push(n.COLOR_ATTACHMENT0+ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(At.push(se),It.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,It)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ce=0;ce<v.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Te=i.get(v[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const v=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function _t(P){return Math.min(r.maxSamples,P.samples)}function bt(P){const v=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(P){const v=a.render.frame;u.get(P)!==v&&(u.set(P,v),P.update())}function Qt(P,v){const B=P.colorSpace,q=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==ua&&B!==Ai&&(Xe.getTransfer(B)===rt?(q!==An||$!==dn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",B)),v}function it(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.getTextureUnits=U,this.setTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=ie,this.setTextureCube=te,this.rebindTextures=et,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function F_(n,e){function t(i,r=Ai){let s;const a=Xe.getTransfer(r);if(i===dn)return n.UNSIGNED_BYTE;if(i===Tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Al)return n.UNSIGNED_SHORT_5_5_5_1;if(i===id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===td)return n.BYTE;if(i===nd)return n.SHORT;if(i===ns)return n.UNSIGNED_SHORT;if(i===wl)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===sd)return n.ALPHA;if(i===ad)return n.RGB;if(i===An)return n.RGBA;if(i===hi)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===Rl)return n.RED;if(i===Cl)return n.RED_INTEGER;if(i===Yi)return n.RG;if(i===Pl)return n.RG_INTEGER;if(i===Dl)return n.RGBA_INTEGER;if(i===js||i===ea||i===ta||i===na)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Io||i===Lo||i===No||i===Uo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===No)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fo||i===Oo||i===zo||i===ko||i===Bo||i===la||i===Go)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fo||i===Oo)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ko)return s.COMPRESSED_R11_EAC;if(i===Bo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===la)return s.COMPRESSED_RG11_EAC;if(i===Go)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ho||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Ko||i===Zo||i===Jo||i===Qo||i===jo||i===el||i===tl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ho)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$o)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ko)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===el)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nl||i===il||i===rl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===nl)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sl||i===al||i===ca||i===ol)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
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

}`;class k_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new md(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $n({vertexShader:O_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new $t(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B_ extends Qi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",p=new k_,m={},T=t.getContextAttributes();let w=null,S=null;const E=[],b=[],A=new Ge;let _=null;const y=new un;y.viewport=new gt;const C=new un;C.viewport=new gt;const D=[y,C],I=new Zf;let O=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=E[J];return re===void 0&&(re=new Ha,E[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=E[J];return re===void 0&&(re=new Ha,E[J]=re),re.getGripSpace()},this.getHand=function(J){let re=E[J];return re===void 0&&(re=new Ha,E[J]=re),re.getHandSpace()};function L(J){const re=b.indexOf(J.inputSource);if(re===-1)return;const ne=E[re];ne!==void 0&&(ne.update(J.inputSource,J.frame,l||a),ne.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",X);for(let J=0;J<E.length;J++){const re=b[J];re!==null&&(b[J]=null,E[J].disconnect(re))}O=null,U=null,p.reset();for(const J in m)delete m[J];e.setRenderTarget(w),f=null,d=null,h=null,r=null,S=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",H),r.addEventListener("inputsourceschange",X),T.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ge=null,xe=null;T.depth&&(xe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=T.stencil?Vi:hi,ge=T.stencil?is:Xn);const Se={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Bn(d.textureWidth,d.textureHeight,{format:An,type:dn,depthTexture:new Cr(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ne={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Bn(f.framebufferWidth,f.framebufferHeight,{format:An,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(J){for(let re=0;re<J.removed.length;re++){const ne=J.removed[re],ge=b.indexOf(ne);ge>=0&&(b[ge]=null,E[ge].disconnect(ne))}for(let re=0;re<J.added.length;re++){const ne=J.added[re];let ge=b.indexOf(ne);if(ge===-1){for(let Se=0;Se<E.length;Se++)if(Se>=b.length){b.push(ne),ge=Se;break}else if(b[Se]===null){b[Se]=ne,ge=Se;break}if(ge===-1)break}const xe=E[ge];xe&&xe.connect(ne)}}const Z=new k,G=new k;function ie(J,re,ne){Z.setFromMatrixPosition(re.matrixWorld),G.setFromMatrixPosition(ne.matrixWorld);const ge=Z.distanceTo(G),xe=re.projectionMatrix.elements,Se=ne.projectionMatrix.elements,Ke=xe[14]/(xe[10]-1),ze=xe[14]/(xe[10]+1),nt=(xe[9]+1)/xe[5],et=(xe[9]-1)/xe[5],Ze=(xe[8]-1)/xe[0],yt=(Se[8]+1)/Se[0],At=Ke*Ze,It=Ke*yt,Ot=ge/(-Ze+yt),_t=Ot*-Ze;if(re.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(_t),J.translateZ(Ot),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),xe[10]===-1)J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const bt=Ke+Ot,F=ze+Ot,Qt=At-_t,it=It+(ge-_t),P=nt*ze/F*bt,v=et*ze/F*bt;J.projectionMatrix.makePerspective(Qt,it,P,v,bt,F),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function te(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let re=J.near,ne=J.far;p.texture!==null&&(p.depthNear>0&&(re=p.depthNear),p.depthFar>0&&(ne=p.depthFar)),I.near=C.near=y.near=re,I.far=C.far=y.far=ne,(O!==I.near||U!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,U=I.far),I.layers.mask=J.layers.mask|6,y.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;const ge=J.parent,xe=I.cameras;te(I,ge);for(let Se=0;Se<xe.length;Se++)te(xe[Se],ge);xe.length===2?ie(I,y,C):I.projectionMatrix.copy(y.projectionMatrix),ae(J,I,ge)};function ae(J,re,ne){ne===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(ne.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=cl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(J){return m[J]};let we=null;function $e(J,re){if(u=re.getViewerPose(l||a),g=re,u!==null){const ne=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ge=!1;ne.length!==I.cameras.length&&(I.cameras.length=0,ge=!0);for(let ze=0;ze<ne.length;ze++){const nt=ne[ze];let et=null;if(f!==null)et=f.getViewport(nt);else{const yt=h.getViewSubImage(d,nt);et=yt.viewport,ze===0&&(e.setRenderTargetTextures(S,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(S))}let Ze=D[ze];Ze===void 0&&(Ze=new un,Ze.layers.enable(ze),Ze.viewport=new gt,D[ze]=Ze),Ze.matrix.fromArray(nt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(nt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(et.x,et.y,et.width,et.height),ze===0&&(I.matrix.copy(Ze.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ge===!0&&I.cameras.push(Ze)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const ze=h.getDepthInformation(ne[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,r.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let ze=0;ze<ne.length;ze++){const nt=ne[ze].camera;if(nt){let et=m[nt];et||(et=new md,m[nt]=et);const Ze=h.getCameraImage(nt);et.sourceTexture=Ze}}}}for(let ne=0;ne<E.length;ne++){const ge=b[ne],xe=E[ne];ge!==null&&xe!==void 0&&xe.update(ge,re,l||a)}we&&we(J,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const We=new Md;We.setAnimationLoop($e),this.setAnimationLoop=function(J){we=J},this.dispose=function(){}}}const G_=new ot,Ad=new Ue;Ad.set(-1,0,0,0,1,0,0,0,1);function H_(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,gd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,T,w,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,T,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=e.get(m),w=T.envMap,S=T.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ad),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,T,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function V_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){const b=E.program;i.uniformBlockBinding(S,b)}function l(S,E){let b=r[S.id];b===void 0&&(p(S),b=u(S),r[S.id]=b,S.addEventListener("dispose",T));const A=E.program;i.updateUBOMapping(S,A);const _=e.render.frame;s[S.id]!==_&&(d(S),s[S.id]=_)}function u(S){const E=h();S.__bindingPointIndex=E;const b=n.createBuffer(),A=S.__size,_=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=r[S.id],b=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let _=0,y=b.length;_<y;_++){const C=b[_];if(Array.isArray(C))for(let D=0,I=C.length;D<I;D++)f(C[D],_,D,A);else f(C,_,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,E,b,A){if(x(S,E,b,A)===!0){const _=S.__offset,y=S.value;if(Array.isArray(y)){let C=0;for(let D=0;D<y.length;D++){const I=y[D],O=m(I);g(I,S.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(y,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,S.__data)}}function g(S,E,b){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,b)}function x(S,E,b,A){const _=S.value,y=E+"_"+b;if(A[y]===void 0)return typeof _=="number"||typeof _=="boolean"?A[y]=_:ArrayBuffer.isView(_)?A[y]=_.slice():A[y]=_.clone(),!0;{const C=A[y];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function p(S){const E=S.uniforms;let b=0;const A=16;for(let y=0,C=E.length;y<C;y++){const D=Array.isArray(E[y])?E[y]:[E[y]];for(let I=0,O=D.length;I<O;I++){const U=D[I],L=Array.isArray(U.value)?U.value:[U.value];for(let H=0,X=L.length;H<X;H++){const Z=L[H],G=m(Z),ie=b%A,te=ie%G.boundary,ae=ie+te;b+=te,ae!==0&&A-ae<G.storage&&(b+=A-ae),U.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=G.storage}}}const _=b%A;return _>0&&(b+=A-_),S.__size=b,S.__cache={},this}function m(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",S),E}function T(S){const E=S.target;E.removeEventListener("dispose",T);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function w(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:w}}const W_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function X_(){return In===null&&(In=new fd(W_,16,16,Yi,di),In.name="DFG_LUT",In.minFilter=Ft,In.magFilter=Ft,In.wrapS=ri,In.wrapT=ri,In.generateMipmaps=!1,In.needsUpdate=!0),In}class q_{constructor(e={}){const{canvas:t=af(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=dn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=f,p=new Set([Dl,Pl,Cl]),m=new Set([dn,Xn,ns,is,Tl,Al]),T=new Uint32Array(4),w=new Int32Array(4),S=new k;let E=null,b=null;const A=[],_=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,I=null,O=null,U=null,L=null;this._outputColorSpace=dt;let H=0,X=0,Z=null,G=-1,ie=null;const te=new gt,ae=new gt;let we=null;const $e=new Ie(0);let We=0,J=t.width,re=t.height,ne=1,ge=null,xe=null;const Se=new gt(0,0,J,re),Ke=new gt(0,0,J,re);let ze=!1;const nt=new Fl;let et=!1,Ze=!1;const yt=new ot,At=new k,It=new gt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function bt(){return Z===null?ne:1}let F=i;function Qt(R,z){return t.getContext(R,z)}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Rn,!1),F===null){const z="webgl2";if(F=Qt(z,R),F===null)throw Qt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Qe("WebGLRenderer: "+R.message),R}let it,P,v,B,q,$,se,le,K,j,ce,Te,he,ue,Pe,De,Fe,N,oe,Q,de,_e,ee;function Ee(){it=new X0(F),it.init(),de=new F_(F,it),P=new O0(F,it,e,de),v=new N_(F,it),P.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),O=F.createFramebuffer(),U=F.createFramebuffer(),L=F.createFramebuffer(),B=new $0(F),q=new M_,$=new U_(F,it,v,q,P,de,B),se=new W0(C),le=new Qf(F),_e=new U0(F,le),K=new q0(F,le,B,_e),j=new Z0(F,K,le,_e,B),N=new K0(F,P,$),Pe=new z0(q),ce=new v_(C,se,it,P,_e,Pe),Te=new H_(C,q),he=new y_,ue=new R_(it),Fe=new N0(C,se,v,j,g,c),De=new L_(C,j,P),ee=new V_(F,B,P,v),oe=new F0(F,it,B),Q=new Y0(F,it,B),B.programs=ce.programs,C.capabilities=P,C.extensions=it,C.properties=q,C.renderLists=he,C.shadowMap=De,C.state=v,C.info=B}Ee(),x!==dn&&(y=new Q0(x,t.width,t.height,o,r,s));const ye=new B_(C,F);this.xr=ye,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=it.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=it.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(J,re,!1))},this.getSize=function(R){return R.set(J,re)},this.setSize=function(R,z,Y=!0){if(ye.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}J=R,re=z,t.width=Math.floor(R*ne),t.height=Math.floor(z*ne),Y===!0&&(t.style.width=R+"px",t.style.height=z+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(J*ne,re*ne).floor()},this.setDrawingBufferSize=function(R,z,Y){J=R,re=z,ne=Y,t.width=Math.floor(R*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,R,z)},this.setEffects=function(R){if(x===dn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let z=0;z<R.length;z++)if(R[z].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(te)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,z,Y,V){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,z,Y,V),v.viewport(te.copy(Se).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(Ke)},this.setScissor=function(R,z,Y,V){R.isVector4?Ke.set(R.x,R.y,R.z,R.w):Ke.set(R,z,Y,V),v.scissor(ae.copy(Ke).multiplyScalar(ne).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(R){v.setScissorTest(ze=R)},this.setOpaqueSort=function(R){ge=R},this.setTransparentSort=function(R){xe=R},this.getClearColor=function(R){return R.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(R=!0,z=!0,Y=!0){let V=0;if(R){let W=!1;if(Z!==null){const me=Z.texture.format;W=p.has(me)}if(W){const me=Z.texture.type,Me=m.has(me),pe=Fe.getClearColor(),be=Fe.getClearAlpha(),Ae=pe.r,Oe=pe.g,Be=pe.b;Me?(T[0]=Ae,T[1]=Oe,T[2]=Be,T[3]=be,F.clearBufferuiv(F.COLOR,0,T)):(w[0]=Ae,w[1]=Oe,w[2]=Be,w[3]=be,F.clearBufferiv(F.COLOR,0,w))}else V|=F.COLOR_BUFFER_BIT}z&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Rn,!1),Fe.dispose(),he.dispose(),ue.dispose(),q.dispose(),se.dispose(),j.dispose(),_e.dispose(),ee.dispose(),ce.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",rc),ye.removeEventListener("sessionend",sc),Ui.stop()};function xt(R){R.preventDefault(),vc("WebGLRenderer: Context Lost."),D=!0}function ht(){vc("WebGLRenderer: Context Restored."),D=!1;const R=B.autoReset,z=De.enabled,Y=De.autoUpdate,V=De.needsUpdate,W=De.type;Ee(),B.autoReset=R,De.enabled=z,De.autoUpdate=Y,De.needsUpdate=V,De.type=W}function Rn(R){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Cn(R){const z=R.target;z.removeEventListener("dispose",Cn),vh(z)}function vh(R){Mh(R),q.remove(R)}function Mh(R){const z=q.get(R).programs;z!==void 0&&(z.forEach(function(Y){ce.releaseProgram(Y)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,Y,V,W,me){z===null&&(z=Ot);const Me=W.isMesh&&W.matrixWorld.determinantAffine()<0,pe=bh(R,z,Y,V,W);v.setMaterial(V,Me);let be=Y.index,Ae=1;if(V.wireframe===!0){if(be=K.getWireframeAttribute(Y),be===void 0)return;Ae=2}const Oe=Y.drawRange,Be=Y.attributes.position;let Re=Oe.start*Ae,st=(Oe.start+Oe.count)*Ae;me!==null&&(Re=Math.max(Re,me.start*Ae),st=Math.min(st,(me.start+me.count)*Ae)),be!==null?(Re=Math.max(Re,0),st=Math.min(st,be.count)):Be!=null&&(Re=Math.max(Re,0),st=Math.min(st,Be.count));const Mt=st-Re;if(Mt<0||Mt===1/0)return;_e.setup(W,V,pe,Y,be);let vt,lt=oe;if(be!==null&&(vt=le.get(be),lt=Q,lt.setIndex(vt)),W.isMesh)V.wireframe===!0?(v.setLineWidth(V.wireframeLinewidth*bt()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(W.isLine){let Ht=V.linewidth;Ht===void 0&&(Ht=1),v.setLineWidth(Ht*bt()),W.isLineSegments?lt.setMode(F.LINES):W.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else W.isPoints?lt.setMode(F.POINTS):W.isSprite&&lt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(it.get("WEBGL_multi_draw"))lt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ht=W._multiDrawStarts,ve=W._multiDrawCounts,an=W._multiDrawCount,Je=be?le.get(be).bytesPerElement:1,fn=q.get(V).currentProgram.getUniforms();for(let Pn=0;Pn<an;Pn++)fn.setValue(F,"_gl_DrawID",Pn),lt.render(Ht[Pn]/Je,ve[Pn])}else if(W.isInstancedMesh)lt.renderInstances(Re,Mt,W.count);else if(Y.isInstancedBufferGeometry){const Ht=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ve=Math.min(Y.instanceCount,Ht);lt.renderInstances(Re,Mt,ve)}else lt.render(Re,Mt)};function ic(R,z,Y){R.transparent===!0&&R.side===Tt&&R.forceSinglePass===!1?(R.side=rn,R.needsUpdate=!0,Ms(R,z,Y),R.side=Li,R.needsUpdate=!0,Ms(R,z,Y),R.side=Tt):Ms(R,z,Y)}this.compile=function(R,z,Y=null){Y===null&&(Y=R),b=ue.get(Y),b.init(z),_.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),R!==Y&&R.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights();const V=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const me=W.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){const pe=me[Me];ic(pe,Y,W),V.add(pe)}else ic(me,Y,W),V.add(me)}),b=_.pop(),V},this.compileAsync=function(R,z,Y=null){const V=this.compile(R,z,Y);return new Promise(W=>{function me(){if(V.forEach(function(Me){q.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){W(R);return}setTimeout(me,10)}it.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Pa=null;function Sh(R){Pa&&Pa(R)}function rc(){Ui.stop()}function sc(){Ui.start()}const Ui=new Md;Ui.setAnimationLoop(Sh),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(R){Pa=R,ye.setAnimationLoop(R),R===null?Ui.stop():Ui.start()},ye.addEventListener("sessionstart",rc),ye.addEventListener("sessionend",sc),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(R,z);const Y=ye.enabled===!0&&ye.isPresenting===!0,V=y!==null&&(Z===null||Y)&&y.begin(C,Z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,z,Z),b=ue.get(R,_.length),b.init(z),b.state.textureUnits=$.getTextureUnits(),_.push(b),yt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),nt.setFromProjectionMatrix(yt,zn,z.reversedDepth),Ze=this.localClippingEnabled,et=Pe.init(this.clippingPlanes,Ze),E=he.get(R,A.length),E.init(),A.push(E),ye.enabled===!0&&ye.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&Da(Me,z,-1/0,C.sortObjects)}Da(R,z,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(ge,xe,z.reversedDepth),_t=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,_t&&Fe.addToRenderList(E,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Pe.beginShadows();const W=b.state.shadowsArray;if(De.render(W,R,z),et===!0&&Pe.endShadows(),(V&&y.hasRenderPass())===!1){const Me=E.opaque,pe=E.transmissive;if(b.setupLights(),z.isArrayCamera){const be=z.cameras;if(pe.length>0)for(let Ae=0,Oe=be.length;Ae<Oe;Ae++){const Be=be[Ae];oc(Me,pe,R,Be)}_t&&Fe.render(R);for(let Ae=0,Oe=be.length;Ae<Oe;Ae++){const Be=be[Ae];ac(E,R,Be,Be.viewport)}}else pe.length>0&&oc(Me,pe,R,z),_t&&Fe.render(R),ac(E,R,z)}Z!==null&&X===0&&($.updateMultisampleRenderTarget(Z),$.updateRenderTargetMipmap(Z)),V&&y.end(C),R.isScene===!0&&R.onAfterRender(C,R,z),_e.resetDefaultState(),G=-1,ie=null,_.pop(),_.length>0?(b=_[_.length-1],$.setTextureUnits(b.state.textureUnits),et===!0&&Pe.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,I!==null&&I.renderEnd()};function Da(R,z,Y,V){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLightProbeGrid)b.pushLightProbeGrid(R);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||nt.intersectsSprite(R)){V&&It.setFromMatrixPosition(R.matrixWorld).applyMatrix4(yt);const Me=j.update(R),pe=R.material;pe.visible&&E.push(R,Me,pe,Y,It.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||nt.intersectsObject(R))){const Me=j.update(R),pe=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),It.copy(R.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),It.copy(Me.boundingSphere.center)),It.applyMatrix4(R.matrixWorld).applyMatrix4(yt)),Array.isArray(pe)){const be=Me.groups;for(let Ae=0,Oe=be.length;Ae<Oe;Ae++){const Be=be[Ae],Re=pe[Be.materialIndex];Re&&Re.visible&&E.push(R,Me,Re,Y,It.z,Be)}}else pe.visible&&E.push(R,Me,pe,Y,It.z,null)}}const me=R.children;for(let Me=0,pe=me.length;Me<pe;Me++)Da(me[Me],z,Y,V)}function ac(R,z,Y,V){const{opaque:W,transmissive:me,transparent:Me}=R;b.setupLightsView(Y),et===!0&&Pe.setGlobalState(C.clippingPlanes,Y),V&&v.viewport(te.copy(V)),W.length>0&&vs(W,z,Y),me.length>0&&vs(me,z,Y),Me.length>0&&vs(Me,z,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function oc(R,z,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){const Re=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Bn(1,1,{generateMipmaps:!0,type:Re?di:dn,minFilter:si,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const me=b.state.transmissionRenderTarget[V.id],Me=V.viewport||te;me.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);const pe=C.getRenderTarget(),be=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor($e),We=C.getClearAlpha(),We<1&&C.setClearColor(16777215,.5),C.clear(),_t&&Fe.render(Y);const Oe=C.toneMapping;C.toneMapping=kn;const Be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),et===!0&&Pe.setGlobalState(C.clippingPlanes,V),vs(R,Y,V),$.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me),it.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let st=0,Mt=z.length;st<Mt;st++){const vt=z[st],{object:lt,geometry:Ht,material:ve,group:an}=vt;if(ve.side===Tt&&lt.layers.test(V.layers)){const Je=ve.side;ve.side=rn,ve.needsUpdate=!0,lc(lt,Y,V,Ht,ve,an),ve.side=Je,ve.needsUpdate=!0,Re=!0}}Re===!0&&($.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me))}C.setRenderTarget(pe,be,Ae),C.setClearColor($e,We),Be!==void 0&&(V.viewport=Be),C.toneMapping=Oe}function vs(R,z,Y){const V=z.isScene===!0?z.overrideMaterial:null;for(let W=0,me=R.length;W<me;W++){const Me=R[W],{object:pe,geometry:be,group:Ae}=Me;let Oe=Me.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),pe.layers.test(Y.layers)&&lc(pe,z,Y,be,Oe,Ae)}}function lc(R,z,Y,V,W,me){R.onBeforeRender(C,z,Y,V,W,me),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(C,z,Y,V,R,me),W.transparent===!0&&W.side===Tt&&W.forceSinglePass===!1?(W.side=rn,W.needsUpdate=!0,C.renderBufferDirect(Y,z,V,W,R,me),W.side=Li,W.needsUpdate=!0,C.renderBufferDirect(Y,z,V,W,R,me),W.side=Tt):C.renderBufferDirect(Y,z,V,W,R,me),R.onAfterRender(C,z,Y,V,W,me)}function Ms(R,z,Y){z.isScene!==!0&&(z=Ot);const V=q.get(R),W=b.state.lights,me=b.state.shadowsArray,Me=W.state.version,pe=ce.getParameters(R,W.state,me,z,Y,b.state.lightProbeGridArray),be=ce.getProgramCacheKey(pe);let Ae=V.programs;V.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?z.environment:null,V.fog=z.fog;const Oe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;V.envMap=se.get(R.envMap||V.environment,Oe),V.envMapRotation=V.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Ae===void 0&&(R.addEventListener("dispose",Cn),Ae=new Map,V.programs=Ae);let Be=Ae.get(be);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===Me)return uc(R,pe),Be}else pe.uniforms=ce.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,Y,pe),R.onBeforeCompile(pe,C),Be=ce.acquireProgram(pe,be),Ae.set(be,Be),V.uniforms=pe.uniforms;const Re=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Re.clippingPlanes=Pe.uniform),uc(R,pe),V.needsLights=wh(R),V.lightsStateVersion=Me,V.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Be,V.uniformsList=null,Be}function cc(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=ia.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function uc(R,z){const Y=q.get(R);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function yh(R,z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;S.setFromMatrixPosition(z.matrixWorld);for(let Y=0,V=R.length;Y<V;Y++){const W=R[Y];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function bh(R,z,Y,V,W){z.isScene!==!0&&(z=Ot),$.resetTextureUnits();const me=z.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?z.environment:null,pe=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Xe.workingColorSpace,be=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ae=se.get(V.envMap||Me,be),Oe=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,Mt=!!Y.morphAttributes.color;let vt=kn;V.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(vt=C.toneMapping);const lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ht=lt!==void 0?lt.length:0,ve=q.get(V),an=b.state.lights;if(et===!0&&(Ze===!0||R!==ie)){const ft=R===ie&&V.id===G;Pe.setState(V,R,ft)}let Je=!1;V.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==an.state.version||ve.outputColorSpace!==pe||W.isBatchedMesh&&ve.batching===!1||!W.isBatchedMesh&&ve.batching===!0||W.isBatchedMesh&&ve.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ve.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ve.instancing===!1||!W.isInstancedMesh&&ve.instancing===!0||W.isSkinnedMesh&&ve.skinning===!1||!W.isSkinnedMesh&&ve.skinning===!0||W.isInstancedMesh&&ve.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ve.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ve.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ve.instancingMorph===!1&&W.morphTexture!==null||ve.envMap!==Ae||V.fog===!0&&ve.fog!==me||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Pe.numPlanes||ve.numIntersection!==Pe.numIntersection)||ve.vertexAlphas!==Oe||ve.vertexTangents!==Be||ve.morphTargets!==Re||ve.morphNormals!==st||ve.morphColors!==Mt||ve.toneMapping!==vt||ve.morphTargetsCount!==Ht||!!ve.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,ve.__version=V.version);let fn=ve.currentProgram;Je===!0&&(fn=Ms(V,z,W),I&&V.isNodeMaterial&&I.onUpdateProgram(V,fn,ve));let Pn=!1,_i=!1,er=!1;const ct=fn.getUniforms(),St=ve.uniforms;if(v.useProgram(fn.program)&&(Pn=!0,_i=!0,er=!0),V.id!==G&&(G=V.id,_i=!0),ve.needsLights){const ft=yh(b.state.lightProbeGridArray,W);ve.lightProbeGrid!==ft&&(ve.lightProbeGrid=ft,_i=!0)}if(Pn||ie!==R){v.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ct.setValue(F,"projectionMatrix",R.projectionMatrix),ct.setValue(F,"viewMatrix",R.matrixWorldInverse);const vi=ct.map.cameraPosition;vi!==void 0&&vi.setValue(F,At.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&ct.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),ie!==R&&(ie=R,_i=!0,er=!0)}if(ve.needsLights&&(an.state.directionalShadowMap.length>0&&ct.setValue(F,"directionalShadowMap",an.state.directionalShadowMap,$),an.state.spotShadowMap.length>0&&ct.setValue(F,"spotShadowMap",an.state.spotShadowMap,$),an.state.pointShadowMap.length>0&&ct.setValue(F,"pointShadowMap",an.state.pointShadowMap,$)),W.isSkinnedMesh){ct.setOptional(F,W,"bindMatrix"),ct.setOptional(F,W,"bindMatrixInverse");const ft=W.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ct.setValue(F,"boneTexture",ft.boneTexture,$))}W.isBatchedMesh&&(ct.setOptional(F,W,"batchingTexture"),ct.setValue(F,"batchingTexture",W._matricesTexture,$),ct.setOptional(F,W,"batchingIdTexture"),ct.setValue(F,"batchingIdTexture",W._indirectTexture,$),ct.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&ct.setValue(F,"batchingColorTexture",W._colorsTexture,$));const xi=Y.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&N.update(W,Y,fn),(_i||ve.receiveShadow!==W.receiveShadow)&&(ve.receiveShadow=W.receiveShadow,ct.setValue(F,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&z.environment!==null&&(St.envMapIntensity.value=z.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=X_()),_i){if(ct.setValue(F,"toneMappingExposure",C.toneMappingExposure),ve.needsLights&&Eh(St,er),me&&V.fog===!0&&Te.refreshFogUniforms(St,me),Te.refreshMaterialUniforms(St,V,ne,re,b.state.transmissionRenderTarget[R.id]),ve.needsLights&&ve.lightProbeGrid){const ft=ve.lightProbeGrid;St.probesSH.value=ft.texture,St.probesMin.value.copy(ft.boundingBox.min),St.probesMax.value.copy(ft.boundingBox.max),St.probesResolution.value.copy(ft.resolution)}ia.upload(F,cc(ve),St,$)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ia.upload(F,cc(ve),St,$),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(F,"center",W.center),ct.setValue(F,"modelViewMatrix",W.modelViewMatrix),ct.setValue(F,"normalMatrix",W.normalMatrix),ct.setValue(F,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const ft=V.uniformsGroups;for(let vi=0,tr=ft.length;vi<tr;vi++){const dc=ft[vi];ee.update(dc,fn),ee.bind(dc,fn)}}return fn}function Eh(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function wh(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,z,Y){const V=q.get(R);V.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(R.texture).__webglTexture=z,q.get(R.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,z){const Y=q.get(R);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,Y=0){Z=R,H=z,X=Y;let V=null,W=!1,me=!1;if(R){const pe=q.get(R);if(pe.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(F.FRAMEBUFFER,pe.__webglFramebuffer),te.copy(R.viewport),ae.copy(R.scissor),we=R.scissorTest,v.viewport(te),v.scissor(ae),v.setScissorTest(we),G=-1;return}else if(pe.__webglFramebuffer===void 0)$.setupRenderTarget(R);else if(pe.__hasExternalTextures)$.rebindTextures(R,q.get(R.texture).__webglTexture,q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Oe=R.depthTexture;if(pe.__boundDepthTexture!==Oe){if(Oe!==null&&q.has(Oe)&&(R.width!==Oe.image.width||R.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(R)}}const be=R.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(me=!0);const Ae=q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ae[z])?V=Ae[z][Y]:V=Ae[z],W=!0):R.samples>0&&$.useMultisampledRTT(R)===!1?V=q.get(R).__webglMultisampledFramebuffer:Array.isArray(Ae)?V=Ae[Y]:V=Ae,te.copy(R.viewport),ae.copy(R.scissor),we=R.scissorTest}else te.copy(Se).multiplyScalar(ne).floor(),ae.copy(Ke).multiplyScalar(ne).floor(),we=ze;if(Y!==0&&(V=O),v.bindFramebuffer(F.FRAMEBUFFER,V)&&v.drawBuffers(R,V),v.viewport(te),v.scissor(ae),v.setScissorTest(we),W){const pe=q.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe.__webglTexture,Y)}else if(me){const pe=z;for(let be=0;be<R.textures.length;be++){const Ae=q.get(R.textures[be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+be,Ae.__webglTexture,Y,pe)}}else if(R!==null&&Y!==0){const pe=q.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pe.__webglTexture,Y)}G=-1},this.readRenderTargetPixels=function(R,z,Y,V,W,me,Me,pe=0){if(!(R&&R.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){v.bindFramebuffer(F.FRAMEBUFFER,be);try{const Ae=R.textures[pe],Oe=Ae.format,Be=Ae.type;if(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe),!P.textureFormatReadable(Oe)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Be)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-V&&Y>=0&&Y<=R.height-W&&F.readPixels(z,Y,V,W,de.convert(Oe),de.convert(Be),me)}finally{const Ae=Z!==null?q.get(Z).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(R,z,Y,V,W,me,Me,pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be)if(z>=0&&z<=R.width-V&&Y>=0&&Y<=R.height-W){v.bindFramebuffer(F.FRAMEBUFFER,be);const Ae=R.textures[pe],Oe=Ae.format,Be=Ae.type;if(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe),!P.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.bufferData(F.PIXEL_PACK_BUFFER,me.byteLength,F.STREAM_READ),F.readPixels(z,Y,V,W,de.convert(Oe),de.convert(Be),0);const st=Z!==null?q.get(Z).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,st);const Mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await of(F,Mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,me),F.deleteBuffer(Re),F.deleteSync(Mt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,z=null,Y=0){const V=Math.pow(2,-Y),W=Math.floor(R.image.width*V),me=Math.floor(R.image.height*V),Me=z!==null?z.x:0,pe=z!==null?z.y:0;$.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Me,pe,W,me),v.unbindTexture()},this.copyTextureToTexture=function(R,z,Y=null,V=null,W=0,me=0){let Me,pe,be,Ae,Oe,Be,Re,st,Mt;const vt=R.isCompressedTexture?R.mipmaps[me]:R.image;if(Y!==null)Me=Y.max.x-Y.min.x,pe=Y.max.y-Y.min.y,be=Y.isBox3?Y.max.z-Y.min.z:1,Ae=Y.min.x,Oe=Y.min.y,Be=Y.isBox3?Y.min.z:0;else{const St=Math.pow(2,-W);Me=Math.floor(vt.width*St),pe=Math.floor(vt.height*St),R.isDataArrayTexture?be=vt.depth:R.isData3DTexture?be=Math.floor(vt.depth*St):be=1,Ae=0,Oe=0,Be=0}V!==null?(Re=V.x,st=V.y,Mt=V.z):(Re=0,st=0,Mt=0);const lt=de.convert(z.format),Ht=de.convert(z.type);let ve;z.isData3DTexture?($.setTexture3D(z,0),ve=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?($.setTexture2DArray(z,0),ve=F.TEXTURE_2D_ARRAY):($.setTexture2D(z,0),ve=F.TEXTURE_2D),v.activeTexture(F.TEXTURE0),v.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const an=v.getParameter(F.UNPACK_ROW_LENGTH),Je=v.getParameter(F.UNPACK_IMAGE_HEIGHT),fn=v.getParameter(F.UNPACK_SKIP_PIXELS),Pn=v.getParameter(F.UNPACK_SKIP_ROWS),_i=v.getParameter(F.UNPACK_SKIP_IMAGES);v.pixelStorei(F.UNPACK_ROW_LENGTH,vt.width),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vt.height),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Ae),v.pixelStorei(F.UNPACK_SKIP_ROWS,Oe),v.pixelStorei(F.UNPACK_SKIP_IMAGES,Be);const er=R.isDataArrayTexture||R.isData3DTexture,ct=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){const St=q.get(R),xi=q.get(z),ft=q.get(St.__renderTarget),vi=q.get(xi.__renderTarget);v.bindFramebuffer(F.READ_FRAMEBUFFER,ft.__webglFramebuffer),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let tr=0;tr<be;tr++)er&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(R).__webglTexture,W,Be+tr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(z).__webglTexture,me,Mt+tr)),F.blitFramebuffer(Ae,Oe,Me,pe,Re,st,Me,pe,F.DEPTH_BUFFER_BIT,F.NEAREST);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||q.has(R)){const St=q.get(R),xi=q.get(z);v.bindFramebuffer(F.READ_FRAMEBUFFER,U),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let ft=0;ft<be;ft++)er?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.__webglTexture,W,Be+ft):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St.__webglTexture,W),ct?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xi.__webglTexture,me,Mt+ft):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xi.__webglTexture,me),W!==0?F.blitFramebuffer(Ae,Oe,Me,pe,Re,st,Me,pe,F.COLOR_BUFFER_BIT,F.NEAREST):ct?F.copyTexSubImage3D(ve,me,Re,st,Mt+ft,Ae,Oe,Me,pe):F.copyTexSubImage2D(ve,me,Re,st,Ae,Oe,Me,pe);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ct?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(ve,me,Re,st,Mt,Me,pe,be,lt,Ht,vt.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(ve,me,Re,st,Mt,Me,pe,be,lt,vt.data):F.texSubImage3D(ve,me,Re,st,Mt,Me,pe,be,lt,Ht,vt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,me,Re,st,Me,pe,lt,Ht,vt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,me,Re,st,vt.width,vt.height,lt,vt.data):F.texSubImage2D(F.TEXTURE_2D,me,Re,st,Me,pe,lt,Ht,vt);v.pixelStorei(F.UNPACK_ROW_LENGTH,an),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je),v.pixelStorei(F.UNPACK_SKIP_PIXELS,fn),v.pixelStorei(F.UNPACK_SKIP_ROWS,Pn),v.pixelStorei(F.UNPACK_SKIP_IMAGES,_i),me===0&&z.generateMipmaps&&F.generateMipmap(ve),v.unbindTexture()},this.initRenderTarget=function(R){q.get(R).__webglFramebuffer===void 0&&$.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?$.setTextureCube(R,0):R.isData3DTexture?$.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?$.setTexture2DArray(R,0):$.setTexture2D(R,0),v.unbindTexture()},this.resetState=function(){H=0,X=0,Z=null,v.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}function Y_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ra={exports:{}},$_=ra.exports,pu;function K_(){return pu||(pu=1,(function(n,e){(function(t,i){n.exports=i()})($_,function(){return t.importState=function(r){var s=new t;return s.importState(r),s},t;function t(){return(function(r){var s=0,a=0,o=0,c=1;r.length==0&&(r=[+new Date]);var l=i();s=l(" "),a=l(" "),o=l(" ");for(var u=0;u<r.length;u++)s-=l(r[u]),s<0&&(s+=1),a-=l(r[u]),a<0&&(a+=1),o-=l(r[u]),o<0&&(o+=1);l=null;var h=function(){var d=2091639*s+c*23283064365386963e-26;return s=a,a=o,o=d-(c=d|0)};return h.next=h,h.uint32=function(){return h()*4294967296},h.fract53=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.version="Alea 0.9",h.args=r,h.exportState=function(){return[s,a,o,c]},h.importState=function(d){s=+d[0]||0,a=+d[1]||0,o=+d[2]||0,c=+d[3]||0},h})(Array.prototype.slice.call(arguments))}function i(){var r=4022871197,s=function(a){a=a.toString();for(var o=0;o<a.length;o++){r+=a.charCodeAt(o);var c=.02519603282416938*r;r=c>>>0,c-=r,c*=r,r=c>>>0,c-=r,r+=c*4294967296}return(r>>>0)*23283064365386963e-26};return s.version="Mash 0.9",s}})})(ra)),ra.exports}var Z_=K_();const ei=Y_(Z_);function pi(...n){return ei(n.join(":"))}const Wi=32;function J_(n,e,t,i){return e!==i?e<i:n<t}const Xs=new Map;function mu(n,e,t,i,r=120){const s=`${n}|${e}|${t}|${i}|${r}`,a=Xs.get(s);if(a)return a;const o=pi(n,"scatter",e,t),c=e*Wi,l=t*Wi,u=[],h=i*i;for(let d=0;d<r;d++){const f=c+o()*Wi,g=l+o()*Wi,x=o();let p=!0;for(const m of u){const T=m.x-f,w=m.z-g;if(T*T+w*w<h){p=!1;break}}p&&u.push({x:f,z:g,k:x})}return Xs.size>4096&&Xs.clear(),Xs.set(s,u),u}function Rd(n,e,t,i,r=120){const s=mu(n,e,t,i,r),a=i*i,o=[];for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){if(c===0&&l===0)continue;const u=e+c,h=t+l;if(J_(u,h,e,t))for(const d of mu(n,u,h,i,r))o.push(d)}return o.length===0?s:s.filter(c=>{for(const l of o){const u=l.x-c.x,h=l.z-c.z;if(u*u+h*h<a)return!1}return!0})}const Cd=Math.sqrt(3),Q_=.5*(Cd-1),Yr=(3-Cd)/6,gu=n=>Math.floor(n)|0,_u=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function ti(n=Math.random){const e=j_(n),t=new Float64Array(e).map(r=>_u[r%12*2]),i=new Float64Array(e).map(r=>_u[r%12*2+1]);return function(s,a){let o=0,c=0,l=0;const u=(s+a)*Q_,h=gu(s+u),d=gu(a+u),f=(h+d)*Yr,g=h-f,x=d-f,p=s-g,m=a-x;let T,w;p>m?(T=1,w=0):(T=0,w=1);const S=p-T+Yr,E=m-w+Yr,b=p-1+2*Yr,A=m-1+2*Yr,_=h&255,y=d&255;let C=.5-p*p-m*m;if(C>=0){const O=_+e[y],U=t[O],L=i[O];C*=C,o=C*C*(U*p+L*m)}let D=.5-S*S-E*E;if(D>=0){const O=_+T+e[y+w],U=t[O],L=i[O];D*=D,c=D*D*(U*S+L*E)}let I=.5-b*b-A*A;if(I>=0){const O=_+1+e[y+1],U=t[O],L=i[O];I*=I,l=I*I*(U*b+L*A)}return 70*(o+c+l)}}function j_(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),s=t[i];t[i]=t[r],t[r]=s}for(let i=256;i<512;i++)t[i]=t[i-256];return t}const Qr=0,ex=6,tx=38;function Ln(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const mn={inlandStart:30,inlandFull:60,carve:.95,pondCarve:2.3,hide:.3,depth:.34,band:.055,pondBand:.3};function nx(n,e={}){const t=e.inlandOffset??0,i=ti(ei(`${n}:shore`)),r=ti(ei(`${n}:dune`)),s=ti(ei(`${n}:detail`)),a=ti(ei(`${n}:rock`)),o=ti(ei(`${n}:stream`)),c=ti(ei(`${n}:streamwarp`)),l=ti(ei(`${n}:pond`));function u(A,_){const y=i(A*.004,0)*26+i(A*.013,11.5)*7;return _-y+t}function h(A,_,y){const C=Ln(mn.inlandStart,mn.inlandFull,y);if(C<=.001)return{mask:0,pond:0};const D=A+c(A*.01,_*.01)*22,I=_+c(A*.01+5.3,_*.01+5.3)*22,O=1-Math.abs(o(D*.0042,I*.0042)),U=Ln(1-mn.band,1,O),L=l(A*.0075+11.1,_*.0075+11.1),H=Ln(.58,.82,L)*Ln(1-mn.pondBand,1,O);return{mask:Math.min(1,Math.max(U,H))*C,pond:H*C}}function d(A,_){return m(A,_,u(A,_))}function f(A,_){const y=u(A,_),{mask:C}=h(A,_,y);return m(A,_,y)-mn.hide-(mn.carve-mn.hide-mn.depth)*C}function g(A,_){const y=u(A,_);if(y<12)return Qr;const{mask:C}=h(A,_,y);return C<.02?-1/0:f(A,_)}function x(A,_,y=4){const C=[[0,0],[y,0],[-y,0],[0,y],[0,-y],[y*.7,y*.7],[-y*.7,-y*.7]];for(const[D,I]of C){const O=A+D,U=_+I,L=u(O,U);if(L<12||h(O,U,L).mask>.15)return!0}return!1}function p(A,_){const y=g(A,_);return y===-1/0?0:Math.max(0,y-T(A,_))}function m(A,_,y){let C=0;C+=Ln(-14,46,y)*5.2,C+=Math.exp(-Math.pow((y-21)/13,2))*2.1;const D=Ln(0,40,y);C+=r(A*.017,_*.017)*2.3*D,C+=s(A*.061,_*.061)*.55*D,C+=s(A*.09,_*.09)*.13;const I=Ln(0,-22,y);C-=I*5,C-=Math.abs(s(A*.09,_*.09))*.13*I;const O=a(A*.021,_*.021);O>.62&&(C+=(O-.62)*9*Ln(10,34,y));const U=Ln(1.5,9,y);if(U>0){const L=.22*U;C<L&&(C=L+(C-L)*(1-U))}return C}function T(A,_){const y=u(A,_),C=m(A,_,y),{mask:D,pond:I}=h(A,_,y);if(D<=0)return C;const O=mn.carve+(mn.pondCarve-mn.carve)*I;return C-O*D}function w(A,_){const y=r(A*.011,_*.011)*7;return Ln(ex,tx,u(A,_)+y)}function S(A,_){const C=(T(A+.9,_)-T(A-.9,_))/1.8,D=(T(A,_+.9)-T(A,_-.9))/(2*.9);return Math.min(1,Math.hypot(C,D))}function E(A,_){return u(A,_)<12?T(A,_)<Qr-.05:p(A,_)>.05}function b(A,_){return a(A*.021,_*.021)}return{hasSea:t<=0,heightAt:T,baseHeightAt:d,rockAt:b,forestnessAt:w,slopeAt:S,isSubmerged:E,inlandAt:u,channelAt:h,freshSurfaceAt:f,waterSurfaceAt:g,waterDepthAt:p,nearWaterAt:x,SEA_LEVEL:Qr,CHANNEL:mn}}const ix=[{tier:1,name:"Bitz",colour:"#b9a888",scale:.3},{tier:2,name:"Keepers",colour:"#cfd8c0",scale:.36},{tier:3,name:"Glimmers",colour:"#7fb6c4",scale:.42},{tier:4,name:"Wonders",colour:"#c9a3e0",scale:.52},{tier:5,name:"Epic Find",colour:"#ffd36b",scale:.7},{tier:6,name:"Epic epic Find",colour:"#ff8fd0",scale:.86}],rx={beach:{1:45,2:33,3:17,4:5},forest:{1:42,2:34,3:18,4:6},elsewhere:{1:20,2:30,3:28,4:22}},sx=[{id:"shell_chip",tier:1,biome:"beach",name:"shell chip",flavour:"a broken bit of something that used to be whole."},{id:"worn_pebble",tier:1,biome:"beach",name:"worn pebble",flavour:"the sea has been working on this one for a while."},{id:"dry_kelp",tier:1,biome:"beach",name:"dry kelp",flavour:"crunchy. smells like low tide."},{id:"twig",tier:1,biome:"forest",name:"twig",flavour:"a twig. genuinely just a twig."},{id:"leaf_litter",tier:1,biome:"forest",name:"leaf litter",flavour:"damp, and slightly warm underneath."},{id:"can_tab",tier:1,biome:"forest",name:"can tab",flavour:"shiny bit of metal. someone would want this."},{id:"scallop",tier:2,biome:"beach",name:"whole scallop",flavour:"unbroken. that almost never happens."},{id:"sea_glass",tier:2,biome:"beach",name:"sea glass",flavour:"a bottle, once. the sea sanded the anger out of it."},{id:"cats_eye",tier:2,biome:"beach",name:"cat's eye",flavour:"the little door a sea snail closed behind itself."},{id:"pinecone",tier:2,biome:"forest",name:"pinecone",flavour:"closed tight. it will open when it is ready."},{id:"quartz_chip",tier:2,biome:"forest",name:"quartz chip",flavour:"white and sharp. catches the light wrong."},{id:"banded_agate",tier:3,biome:"beach",name:"banded agate",flavour:"rings all the way through, like it kept a record."},{id:"paua_piece",tier:3,biome:"beach",name:"pāua piece",flavour:"every colour at once, depending how you hold it."},{id:"mermaids_purse",tier:3,biome:"beach",name:"mermaid's purse",flavour:"empty. whatever was in here left some time ago."},{id:"elytron",tier:3,biome:"forest",name:"beetle elytron",flavour:"one wing case, green-black, impossibly light."},{id:"resin_bead",tier:3,biome:"forest",name:"resin bead",flavour:"still tacky. it will be a stone in a million years."},{id:"humming_geode",tier:4,biome:"forest",name:"humming geode",flavour:"hold it near your ear. no, closer."},{id:"one_note_shell",tier:4,biome:"beach",name:"one-note shell",flavour:"it plays exactly one note, and only outdoors."},{id:"heavy_feather",tier:4,biome:"forest",name:"heavy feather",flavour:"weighs more than a feather has any business weighing."},{id:"pounamu",tier:4,biome:"beach",near:"water",name:"pounamu",flavour:"warm before you pick it up, not after."},{id:"violet_grit",tier:1,biome:"elsewhere",name:"violet grit",flavour:"sand, but the wrong colour. it stays the wrong colour in your hand."},{id:"dry_ember",tier:1,biome:"elsewhere",name:"dry ember",flavour:"not warm. it looks like it should be."},{id:"lit_seed",tier:2,biome:"elsewhere",name:"lit seed",flavour:"there is a little light in it that does not go out when you close your hand."},{id:"star_chip",tier:3,biome:"elsewhere",name:"star chip",flavour:"four points. it is not glass and it is not stone."},{id:"sunset_pebble",tier:4,biome:"elsewhere",name:"sunset pebble",flavour:"the colour of the sky here, all the way through. it will be that colour at home too."},{id:"portal_shard",tier:5,biome:"any",name:"shard of elsewhere",flavour:"the light in it is coming from a sky you have not seen."},{id:"wrong_compass",tier:5,biome:"any",name:"wrong compass",flavour:"it points confidently. not at north."},{id:"sealed_tin",tier:5,biome:"any",name:"sealed tin",flavour:"something inside shifts when you turn it. it is not liquid."},{id:"scifi_heru",tier:5,biome:"any",name:"a heru, but not",flavour:"the comb is right. the material is from no tree and no bone."},{id:"chainmail_maro",tier:5,biome:"any",name:"a chainmail maro",flavour:"every ring closed by hand. not by any hand you know."},{id:"scale_that_isnt",tier:5,biome:"authored",name:"a scale that isn't",flavour:"it is not a scale. it is very nearly a scale."},{id:"warm_stone",tier:5,biome:"authored",name:"a stone warm on one side",flavour:"the same side, however you put it down."},{id:"knotted_kelp",tier:5,biome:"authored",name:"kelp in a knot",flavour:"a length of kelp tied in a knot no tide ties."},{id:"seeing_stone",tier:6,biome:"granted",name:"the sure stone",flavour:"heavier than it looks. it does not roll when you put it down."},{id:"carry_knot",tier:6,biome:"granted",name:"the carrying knot",flavour:"a knot with no ends. you cannot find where it starts."}],mi={tiers:ix,weights:rx,items:sx},ax=5.4,ox=.62;function lx(n){return n.biome==="any"?["beach","forest","elsewhere"]:n.biome==="forest"?["forest","elsewhere"]:n.biome==="granted"||n.biome==="authored"?[]:[n.biome]}const jr=new Map;for(const n of mi.items)for(const e of lx(n)){const t=`${n.tier}:${e}`;jr.has(t)||jr.set(t,[]),jr.get(t).push(n)}const sa=new Map;for(const n of mi.items)n.near==="water"&&(sa.has(n.tier)||sa.set(n.tier,[]),sa.get(n.tier).push(n));const cx=new Map(mi.tiers.map(n=>[n.tier,n]));function Pd(n,e){const t=Object.keys(e);let i=0;for(const s of t)i+=e[s];let r=n*i;for(const s of t)if(r-=e[s],r<=0)return Number(s);return Number(t[t.length-1])}function hl(n,e,t,i=!1){let r=jr.get(`${e}:${t}`)??[];if(i){const s=sa.get(e)??[];s.length&&(r=r.concat(s.filter(a=>!r.includes(a))))}return r.length===0?null:r[Math.min(r.length-1,Math.floor(n*r.length))]}function Dd(n,e={}){const t=nx(n,e),i=e.biomeKey??"home",r=i==="elsewhere"?"elsewhere:":"";function s(a,o){const c=Rd(n,a,o,ax),l=[];for(let u=0;u<c.length;u++){const h=c[u];if(t.isSubmerged(h.x,h.z)||t.slopeAt(h.x,h.z)>ox)continue;const d=t.forestnessAt(h.x,h.z),f=pi(n,"obj",a,o,u),g=f()<d?"forest":"beach",x=i==="elsewhere"?"elsewhere":g,p=f(),m=f(),T=Pd(p,mi.weights[x]),w=jr.get(`${T}:${x}`)??[];if(w.length===0)continue;const S=t.nearWaterAt(h.x,h.z);l.push({id:`${r}${a}:${o}:${u}`,nearWater:S,itemId:w[Math.floor(m*w.length)].id,tier:T,tierRoll:p,itemRoll:m,x:h.x,y:t.heightAt(h.x,h.z),z:h.z,rot:f()*Math.PI*2,biome:x})}return l}return{seed:n,biomeKey:i,genChunk:s,...t,CHUNK_SIZE:Wi}}function Dr(n){return Math.floor(n/Wi)}function Ni(n){return cx.get(n)}function fl(n){return mi.items.find(e=>e.id===n)}const aa=mi;function ux({advance:n,draw:e,maxStep:t=.05}){let i=!1,r=performance.now(),s=0;function a(o){s=requestAnimationFrame(a);const c=Math.min((o-r)/1e3,t);r=o,!i&&(n(c),e())}return s=requestAnimationFrame(a),{pause(){i=!0},resume(){i=!1,r=performance.now()},get paused(){return i},step(o){n(o),e()},stepLogic(o){n(o)},stop(){cancelAnimationFrame(s)}}}function dx(n=window){const e=new Set,t={x:0,z:0,held:!1};let i=!1,r=!1,s=!1,a=0;const o=new Set(["KeyE","Space","Enter"]);n.addEventListener("keydown",x=>{x.repeat||(e.add(x.code),o.has(x.code)&&(i=!0,x.preventDefault()),x.code==="KeyG"&&(r=!0,x.preventDefault()),x.code==="Escape"&&(s=!0),(x.code==="ArrowUp"||x.code==="KeyW")&&(a-=1),(x.code==="ArrowDown"||x.code==="KeyS")&&(a+=1))}),n.addEventListener("keyup",x=>e.delete(x.code)),n.addEventListener("blur",()=>e.clear());let c=0,l=!1,u=0;const h=x=>{l=!0,u=x.clientX},d=x=>{l&&(c+=(x.clientX-u)*.005,u=x.clientX)},f=()=>{l=!1};n.addEventListener("pointerdown",h),n.addEventListener("pointermove",d),n.addEventListener("pointerup",f),n.addEventListener("pointercancel",f);const g=x=>Math.max(-1,Math.min(1,x));return{touch:t,isDown:x=>e.has(x)||t.held&&o.has(x),get axes(){let x=t.x,p=t.z;return(e.has("KeyW")||e.has("ArrowUp"))&&(p-=1),(e.has("KeyS")||e.has("ArrowDown"))&&(p+=1),(e.has("KeyA")||e.has("ArrowLeft"))&&(x-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(x+=1),{x:g(x),z:g(p)}},get turn(){let x=0;return e.has("KeyQ")&&(x-=1),e.has("KeyE")&&e.has("ShiftLeft")&&(x+=1),x},takeCollect(){return i?(i=!1,!0):!1},takeYaw(){const x=c;return c=0,x},takeGive(){return r?(r=!1,!0):!1},takeCancel(){return s?(s=!1,!0):!1},takeNav(){const x=a;return a=0,x},queueCollect(){i=!0},queueCancel(){s=!0},queueGive(){r=!0},queueNav(x){a+=x},get held(){return Array.from(e)}}}const xu=450,qs=56,vu=.22,hx=.65,fx=.3;function px(n,e=document.body){const t=document.createElement("div");t.id="touch-ui",t.hidden=!0,t.innerHTML=`
    <div id="touch-stick-zone">
      <div id="touch-stick" class="resting"><div id="touch-nub"></div></div>
    </div>
    <button id="touch-act" type="button" aria-label="take (hold to give)">
      <span class="act-tap">◉<em>take</em></span><span class="act-hold">give</span>
    </button>
  `,e.appendChild(t);const i=t.querySelector("#touch-stick-zone"),r=t.querySelector("#touch-stick"),s=t.querySelector("#touch-nub"),a=t.querySelector("#touch-act");let o=!1;function c(){o||(o=!0,t.hidden=!1,document.body.classList.add("touch-ui-on"),window.dispatchEvent(new Event("lb-touch-on")))}window.matchMedia?.("(pointer: coarse)").matches?c():window.addEventListener("touchstart",c,{once:!0,passive:!0});let l=null,u=0,h=0,d=!0;function f(w){let S=(w.clientX-u)/qs,E=(w.clientY-h)/qs;const b=Math.hypot(S,E);b>1&&(S/=b,E/=b),n.touch.x=Math.abs(S)<vu?0:S,n.touch.z=Math.abs(E)<vu?0:E,s.style.transform=`translate(${S*qs*.6}px, ${E*qs*.6}px)`,d&&Math.abs(E)>hx?(d=!1,n.queueNav(E>0?1:-1)):!d&&Math.abs(E)<fx&&(d=!0)}function g(){l=null,n.touch.x=0,n.touch.z=0,d=!0,r.classList.add("resting"),r.style.left="",r.style.top="",s.style.transform=""}i.addEventListener("pointerdown",w=>{if(w.stopPropagation(),l===null){l=w.pointerId,u=w.clientX,h=w.clientY;try{i.setPointerCapture(w.pointerId)}catch{}r.classList.remove("resting"),r.style.left=`${u}px`,r.style.top=`${h}px`,f(w)}}),i.addEventListener("pointermove",w=>{w.pointerId===l&&(w.stopPropagation(),f(w))});for(const w of["pointerup","pointercancel"])i.addEventListener(w,S=>{S.pointerId===l&&(S.stopPropagation(),g())});let x=null,p=0,m=0;function T(w,S){w.pointerId===x&&(w.stopPropagation(),x=null,clearTimeout(m),a.classList.remove("holding","give-armed"),n.touch.held=!1,S&&(performance.now()-p>=xu?n.queueGive():n.queueCollect()))}a.addEventListener("pointerdown",w=>{if(w.stopPropagation(),x===null){x=w.pointerId,p=performance.now(),n.touch.held=!0,a.classList.add("holding");try{a.setPointerCapture(w.pointerId)}catch{}m=setTimeout(()=>a.classList.add("give-armed"),xu)}}),a.addEventListener("pointerup",w=>T(w,!0)),a.addEventListener("pointercancel",w=>T(w,!1));for(const w of[i,a])w.addEventListener("touchstart",S=>S.preventDefault(),{passive:!1});return{get active(){return o}}}function mx(){const n=new Set,e=new Map,t={1:0,2:0,3:0,4:0,5:0,6:0},i={1:0,2:0,3:0,4:0,5:0,6:0},r=[],s=[],a=[],o=c=>{for(const l of a)l(c)};return{has:c=>n.has(c),get total(){return e.size},get collectedTotal(){return n.size},get byTier(){return{...t}},get lifetimeByTier(){return{...i}},get log(){return r.slice()},get ledger(){return s.slice()},get items(){return Array.from(e.values()).sort((c,l)=>l.tier-c.tier||l.at-c.at)},collect(c,l){return n.has(c.id)?!1:(n.add(c.id),e.set(c.id,{id:c.id,itemId:c.itemId,tier:c.tier,at:l}),t[c.tier]=(t[c.tier]??0)+1,i[c.tier]=(i[c.tier]??0)+1,r.push({itemId:c.itemId,tier:c.tier,at:l}),o({type:"collect",obj:c,nowMs:l}),!0)},give(c,l,u,h=!0){const d=e.get(c);return d?(h&&(e.delete(c),t[d.tier]=Math.max(0,(t[d.tier]??0)-1)),s.push({itemId:d.itemId,tier:d.tier,to:l,at:u}),o({type:"give",obj:d,to:l,nowMs:u}),{itemId:d.itemId,tier:d.tier}):null},on(c){a.push(c)},serialize(){return{v:2,taken:Array.from(n),held:Array.from(e.values()),ledger:s.slice(),lifetimeByTier:{...i}}},restore(c){if(!c||c.v!==2)return!1;n.clear(),e.clear(),r.length=0,s.length=0;for(const l of Object.keys(t))t[l]=0,i[l]=0;for(const l of c.taken)n.add(l);for(const l of c.held)e.set(l.id,{...l}),t[l.tier]=(t[l.tier]??0)+1;for(const l of c.ledger)s.push({...l});for(const[l,u]of Object.entries(c.lifetimeByTier??{}))i[l]=u;return!0}}}function Id({heightAt:n,forestnessAt:e,freshSurfaceAt:t=null,size:i=190,segments:r=150}){const s=new $t(i,i,r,r);s.rotateX(-Math.PI/2);const a=s.attributes.position,o=new Float32Array(a.count*3);s.setAttribute("color",new qt(o,3));const c=new $i({vertexColors:!0}),l=new at(s,c);l.frustumCulled=!1;const u=i/r,h=new Ie("#e0cda4"),d=new Ie("#c2ad86"),f=new Ie("#a8ad7e"),g=new Ie("#5f7148"),x=new Ie("#9a927c"),p=new Ie;let m=NaN,T=NaN;function w(S,E,b=!1){const A=Math.round(S/u)*u,_=Math.round(E/u)*u;if(!b&&A===m&&_===T)return!1;m=A,T=_,l.position.set(A,0,_);for(let y=0;y<a.count;y++){const C=a.getX(y)+A,D=a.getZ(y)+_,I=n(C,D);a.setY(y,I);const O=e(C,D);if(O<.5?p.copy(h).lerp(f,O*2):p.copy(f).lerp(g,(O-.5)*2),I<.35&&p.lerp(d,Math.min(1,(.35-I)/.5)),t){const U=t(C,D)-I;U>-.55&&p.lerp(x,Math.min(1,(U+.55)/1.1))}o[y*3]=p.r,o[y*3+1]=p.g,o[y*3+2]=p.b}return a.needsUpdate=!0,s.attributes.color.needsUpdate=!0,s.computeVertexNormals(),!0}return{mesh:l,update:w,step:u}}function Ld({freshSurfaceAt:n,size:e=190,segments:t=118}){const i=new $t(e,e,t,t);i.rotateX(-Math.PI/2);const r=i.attributes.position,s=new $i({color:"#6f9a91",transparent:!0,opacity:.8,depthWrite:!1}),a=new at(i,s);a.frustumCulled=!1,a.renderOrder=1;const o=e/t;let c=NaN,l=NaN;function u(h,d,f=!1){const g=Math.round(h/o)*o,x=Math.round(d/o)*o;if(!f&&g===c&&x===l)return!1;c=g,l=x,a.position.set(g,0,x);for(let p=0;p<r.count;p++)r.setY(p,n(r.getX(p)+g,r.getZ(p)+x));return r.needsUpdate=!0,i.computeVertexNormals(),!0}return{mesh:a,update:u,step:o}}function gx(n=0){const e=new $t(1200,1200);e.rotateX(-Math.PI/2);const t=new $i({color:"#5e8ea0",transparent:!0,opacity:.82}),i=new at(e,t);return i.position.y=n-.06,i.frustumCulled=!1,i}const Mu=900;function _x(n){const e=[1,2,3,4,5,6],t=new Map;for(const l of e){const u=Ni(l),h=l>=4?new fi(1,1):l===3?new kl(1,0):new Sa(1,0),d=new $i({color:new Ie(u.colour),emissive:new Ie(u.colour),emissiveIntensity:l>=4?.34:l===3?.16:.04,flatShading:!0}),f=new fa(h,d,Mu);f.count=0,f.frustumCulled=!1,f.instanceMatrix.setUsage(ha),n.add(f),t.set(l,f)}const i=new ot,r=new qn,s=new Yn,a=new k,o=new k;function c(l,u,h){const d=new Map(e.map(f=>[f,0]));for(const f of l){if(u(f.id))continue;const g=t.get(f.tier),x=d.get(f.tier);if(x>=Mu)continue;const p=Ni(f.tier),m=(f.x*.7+f.z*1.3)%(Math.PI*2),T=Math.sin(h*.0015+m)*.05;s.set(0,f.rot,0),r.setFromEuler(s),a.set(f.x,f.y+p.scale+T,f.z),o.setScalar(p.scale),i.compose(a,r,o),g.setMatrixAt(x,i),d.set(f.tier,x+1)}for(const f of e){const g=t.get(f);g.count=d.get(f),g.instanceMatrix.needsUpdate=!0}}return{rebuild:c,meshes:t}}function xx(){const n=new fs(.55,.75,28);n.rotateX(-Math.PI/2);const e=new Yt({color:"#fff4d0",transparent:!0,opacity:.9,depthWrite:!1}),t=new at(n,e);return t.visible=!1,t.frustumCulled=!1,t}const vx=new _d;function Hl(n,e){const t=vx.load(n);return t.magFilter=Ft,t.minFilter=si,t.generateMipmaps=!0,t.anisotropy=e.capabilities.getMaxAnisotropy(),t.colorSpace=dt,t}function Nd({texture:n,worldHeight:e,aspect:t}){const i=e*t,r=new $t(i,e);r.translate(0,e/2,0);const s=new Yt({map:n,transparent:!1,alphaTest:.5,side:Tt,toneMapped:!1}),a=new at(r,s);return a.frustumCulled=!1,a}function pa(n=.5){const t=document.createElement("canvas");t.width=64,t.height=64;const i=t.getContext("2d"),r=i.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);r.addColorStop(0,"rgba(40,32,22,0.42)"),r.addColorStop(.6,"rgba(40,32,22,0.18)"),r.addColorStop(1,"rgba(40,32,22,0)"),i.fillStyle=r,i.fillRect(0,0,64,64);const s=new Sn(t);s.colorSpace=dt;const a=new $t(n*2,n*2);a.rotateX(-Math.PI/2);const o=new Yt({map:s,transparent:!0,depthWrite:!1,toneMapped:!1}),c=new at(a,o);return c.frustumCulled=!1,c.renderOrder=-1,c}function nn(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}const Mx={png:"art/chars/trinket_maker.png",w:185,h:460,worldHeight:1.95,role:"npc",pivot:"bottom",billboard:"y-axis",source:"p4-trinket-maker_1.png",note:"the trinket maker. Lyss's own NPC, holding a puoro."},Sx={png:"art/chars/player.png",w:213,h:460,worldHeight:1.8,role:"player",pivot:"bottom",billboard:"y-axis",source:"p3-masc-maoriz_1-1.png",note:"the original player figure. Kept as the default so the world looks the same as it did."},yx={png:"art/chars/player_b.png",w:178,h:460,worldHeight:1.78,role:"player",pivot:"bottom",billboard:"y-axis",source:"p1-femme-maori_3-1.png",note:"red top, green cargos. The widest silhouette of the four."},bx={png:"art/chars/player_c.png",w:157,h:460,worldHeight:1.84,role:"player",pivot:"bottom",billboard:"y-axis",source:"p2-vision-board_1.png",note:"hat and long coat. Reads instantly at distance, which none of the others do."},Ex={png:"art/chars/player_d.png",w:176,h:460,worldHeight:1.79,role:"player",pivot:"bottom",billboard:"y-axis",source:"p5-maori-punks_1-1.png",note:"dark jacket and boots. The compact, low-contrast one."},wx={png:"art/chars/wanderer_a.png",w:265,h:460,worldHeight:1.85,role:"npc",pivot:"bottom",billboard:"y-axis",source:"p3-masc-maoriz_3-2.png",note:"walking, holding a cup. Mid-stride, so he reads as passing through."},Tx={png:"art/chars/wanderer_b.png",w:181,h:460,worldHeight:1.82,role:"npc",pivot:"bottom",billboard:"y-axis",source:"p5-maori-punks_2-2.png",note:"orange, one hand up. From the Maori punks sheet."},Ax={png:"art/chars/karu.png",w:184,h:460,worldHeight:2.35,role:"guide",pivot:"bottom",billboard:"y-axis",source:"karu.png",unwired:!0,note:"A cutout that arrived in the working tree labelled Karu, from a paper drawing photographed under reference/art-source/. Not confirmed hers, not approved, and NOT rendered: it has a face, and Karu has no body or face until she says. Kept registered so the asset test keeps its PNG honest; nothing reads this entry at runtime."},ai={trinket_maker:Mx,player:Sx,player_b:yx,player_c:bx,player_d:Ex,wanderer_a:wx,wanderer_b:Tx,karu:Ax},Rx=n=>new Ie(n);function Or(n){let e=0,t=0;for(const u of n)u.geo=(u.geo.toNonIndexed,u.geo),u.geo.index||(u.geo=u.geo),e+=u.geo.attributes.position.count,t+=u.geo.index?u.geo.index.count:u.geo.attributes.position.count;const i=new Float32Array(e*3),r=new Float32Array(e*3),s=new Float32Array(e*3),a=new Uint32Array(t);let o=0,c=0;for(const u of n){const h=u.geo.attributes.position,d=u.geo.attributes.normal,f=Rx(u.colour);for(let g=0;g<h.count;g++)i[(o+g)*3]=h.getX(g),i[(o+g)*3+1]=h.getY(g),i[(o+g)*3+2]=h.getZ(g),r[(o+g)*3]=d.getX(g),r[(o+g)*3+1]=d.getY(g),r[(o+g)*3+2]=d.getZ(g),s[(o+g)*3]=f.r,s[(o+g)*3+1]=f.g,s[(o+g)*3+2]=f.b;if(u.geo.index){const g=u.geo.index;for(let x=0;x<g.count;x++)a[c+x]=g.getX(x)+o;c+=g.count}else{for(let g=0;g<h.count;g++)a[c+g]=o+g;c+=h.count}o+=h.count,u.geo.dispose()}const l=new sn;return l.setAttribute("position",new qt(i,3)),l.setAttribute("normal",new qt(r,3)),l.setAttribute("color",new qt(s,3)),l.setIndex(new qt(a,1)),l}function Cx({length:n,width:e,droop:t,segments:i=4}){const r=new sn,s=[],a=[];for(let o=0;o<=i;o++){const c=o/i,l=e*(1-c)*(1-c*.35),u=-t*c*c,h=n*c;s.push(h,u,-l,h,u,l)}for(let o=0;o<i;o++){const c=o*2;a.push(c,c+1,c+2,c+1,c+3,c+2)}return r.setAttribute("position",new Ct(s,3)),r.setIndex(a),r.computeVertexNormals(),r}function Ir({n,at:e,length:t,width:i,droop:r,tilt:s,colour:a,phase:o=0}){const c=[];for(let l=0;l<n;l++){const u=o+l/n*Math.PI*2,h=Cx({length:t,width:i,droop:r});h.rotateZ(-s),h.rotateY(u),h.translate(0,e,0),c.push({geo:h,colour:a})}return c}const Su="#6b5540",Px="#8d7a5e";function Dx(){const n=new Mn(.03,.045,.7,7);n.translate(0,.35,0);const e=new Mn(.055,.075,.13,7);return e.translate(0,.755,0),Or([{geo:n,colour:Px},{geo:e,colour:"#7f8b52"},...Ir({n:9,at:.82,length:.46,width:.075,droop:.3,tilt:-.3,colour:"#3f6b3a"}),...Ir({n:5,at:.86,length:.34,width:.055,droop:.1,tilt:-.85,colour:"#4d7a41",phase:.35})])}function Ix(){const n=[],e=new Mn(.035,.055,.62,6);e.translate(0,.31,0),n.push({geo:e,colour:Su});const t=[{x:0,z:0,y:.62,s:1},{x:.12,z:.05,y:.72,s:.78},{x:-.1,z:.09,y:.68,s:.72}];for(const i of t){const r=new Mn(.022,.03,.16*i.s,5);r.rotateZ(-i.x*1.6),r.translate(i.x*.6,i.y-.02,i.z*.6),n.push({geo:r,colour:Su});for(const s of Ir({n:11,at:i.y+.06*i.s,length:.26*i.s,width:.022,droop:.16*i.s,tilt:-.55,colour:"#5f7d40"}))s.geo.translate(i.x,0,i.z),n.push(s)}return Or(n)}function Lx(){const n=new Mn(.05,.07,.55,7);return n.translate(0,.275,0),Or([{geo:n,colour:"#5c4a38"},...Ir({n:10,at:.57,length:.52,width:.11,droop:.36,tilt:-.3,colour:"#4a7a44"}),...Ir({n:6,at:.6,length:.22,width:.06,droop:.05,tilt:-.95,colour:"#6d9450",phase:.5})])}function Nx(){const n=[],e=new Mn(.055,.1,.34,6);e.rotateZ(.12),e.translate(.02,.17,0),n.push({geo:e,colour:"#5a4635"});const t=[{x:0,y:.46,z:0,rx:.52,ry:.26},{x:.3,y:.4,z:.1,rx:.34,ry:.19},{x:-.26,y:.42,z:-.12,rx:.31,ry:.18}];for(const i of t){const r=new fi(1,1);r.scale(i.rx,i.ry,i.rx),r.translate(i.x,i.y,i.z),n.push({geo:r,colour:"#3d5b3c"})}for(let i=0;i<26;i++){const r=i*2.39996,s=.5*Math.sqrt((i+.5)/26),a=Math.cos(r)*s,o=Math.sin(r)*s*.85,c=.46+.24*Math.sqrt(Math.max(0,1-(s/.52)**2)),l=new fi(.045+i%3*.008,0);l.scale(1.3,.55,1.3),l.translate(a,c+.01,o),n.push({geo:l,colour:"#a83a34"})}return Or(n)}function Ux(){const n=[],e=new Mn(.03,.065,.78,6);e.translate(0,.39,0),n.push({geo:e,colour:"#4f4030"});const t=[{y:.42,r:.3,n:7},{y:.58,r:.26,n:7},{y:.72,r:.19,n:6},{y:.86,r:.12,n:5}];for(const r of t)for(const s of Ir({n:r.n,at:r.y,length:r.r,width:.085,droop:.22,tilt:.28,colour:"#2f4a30",phase:r.y*9}))n.push(s);const i=new Ol(.09,.2,6);return i.translate(0,.92,0),n.push({geo:i,colour:"#2f4a30"}),Or(n)}function Fx(){const n=[];for(let t=0;t<5;t++){const i=t/5*Math.PI*2,r=.3,s=new Mn(.02,.035,.68,5);s.rotateZ(r*Math.cos(i)),s.rotateX(r*Math.sin(i)),s.translate(Math.cos(i)*.1,.33,Math.sin(i)*.1),n.push({geo:s,colour:"#6a5744"});const a=new fi(1,0);a.scale(.24,.19,.24),a.translate(Math.cos(i)*.2,.66,Math.sin(i)*.2),n.push({geo:a,colour:"#68804a"})}const e=new fi(1,0);return e.scale(.26,.2,.26),e.translate(0,.78,0),n.push({geo:e,colour:"#778c52"}),Or(n)}const Vl={nikau:{build:Dx,min:3.2,max:6.4,zone:"bush"},ti_kouka:{build:Ix,min:2.8,max:5.6,zone:"open"},ponga:{build:Lx,min:2.2,max:4.4,zone:"bush"},pohutukawa:{build:Nx,min:3.4,max:7,zone:"coastal"},rimu:{build:Ux,min:6,max:11.5,zone:"canopy"},manuka:{build:Fx,min:1.3,max:2.6,zone:"open"}},pl=Object.keys(Vl);function Ox(){const n={};for(const e of pl){const t=Vl[e].build();t.computeBoundingBox();const i=t.boundingBox,r=i.max.y-Math.min(0,i.min.y);r>.001&&t.scale(1/r,1/r,1/r),t.computeBoundingBox(),t.translate(0,-t.boundingBox.min.y,0),t.computeBoundingBox(),n[e]=t}return n}const zx=3.6,Ud={pohutukawa:[1.1,.62,.08],manuka:[1,.66,.2],ti_kouka:[.86,.82,.3],ponga:[.05,.6,1],nikau:[.02,.45,1.05],rimu:[0,.18,.8]},po=Object.keys(Ud);function yu(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function ml(n,e,{clearings:t=[]}={}){const i=(o,c)=>{for(const l of t)if((o-l.x)**2+(c-l.z)**2<l.r*l.r)return!0;return!1},r=po.map((o,c)=>ti(ei(`${e}:grove:${c}`)));function s(o,c,l,u){const h=yu(8,90,l)*2,d=Math.min(1,Math.floor(h)),f=h-d;let g=null,x=-1/0;for(let p=0;p<po.length;p++){const m=po[p],T=Ud[m],w=T[d]+(T[Math.min(2,d+1)]-T[d])*f;if(w<=.001)continue;const S=(r[p](o*.0085,c*.0085)+1)*.5,E=w*(.35+S)+u()*.22;E>x&&(x=E,g=m)}return g??"manuka"}function a(o,c){const l=Rd(`${e}:scenery`,o,c,zx,200),u=[];for(let h=0;h<l.length;h++){const d=l[h];if(n.isSubmerged(d.x,d.z)||n.slopeAt(d.x,d.z)>.75)continue;const f=n.forestnessAt(d.x,d.z),g=pi(e,"scen",o,c,h),x=g();let p;if(x<f*.72)p="tree";else if(x<f*.72+.18)p=f>.35?"scrub":"rock";else if(f<.25&&x>.93)p="driftwood";else continue;if((p==="tree"||p==="scrub")&&i(d.x,d.z))continue;if(p==="tree"){const T=s(d.x,d.z,n.inlandAt(d.x,d.z),g),w=Vl[T],S=yu(.15,.9,f),E=w.min+g()*(w.max-w.min)*(.45+.55*S);u.push({kind:p,species:T,x:d.x,y:n.heightAt(d.x,d.z),z:d.z,rot:g()*Math.PI*2,scale:E});continue}const m=p==="scrub"?.7+g()*.7:p==="driftwood"?.8+g()*.9:.45+g()*.75;u.push({kind:p,x:d.x,y:n.heightAt(d.x,d.z),z:d.z,rot:g()*Math.PI*2,scale:m})}return u}return{genScenery:a,pickSpecies:s}}const bu=900,Ys={scrub:900,rock:700,driftwood:300};function kx(n){const e=new $i({vertexColors:!0,flatShading:!0,side:Tt}),t=Ox(),i=new Map;for(const w of pl){const S=new fa(t[w],e,bu);S.count=0,S.frustumCulled=!1,S.instanceMatrix.setUsage(ha),n.add(S),i.set(w,S)}const r=new Map,s=new fi(1,0);s.scale(1,.72,1),s.translate(0,.6,0);const a=new zl(1,0);a.scale(1,.62,1),a.translate(0,.3,0);const o=new Mn(.16,.22,2.4,5);o.rotateZ(Math.PI/2),o.translate(0,.2,0);const c=(w,S,E)=>{const b=new fa(w,new $i({color:new Ie(S),flatShading:!0}),E);return b.count=0,b.frustumCulled=!1,b.instanceMatrix.setUsage(ha),n.add(b),b};r.set("scrub",c(s,"#6f8451",Ys.scrub)),r.set("rock",c(a,"#9a9184",Ys.rock)),r.set("driftwood",c(o,"#b0a189",Ys.driftwood));const l=new ot,u=new qn,h=new Yn,d=new k,f=new k,g=new qn,x=new k,p=4.2,m=1.1;function T(w,S,E,b=null){const A=new Map([...r.keys()].map(y=>[y,0])),_=new Map(pl.map(y=>[y,0]));for(const y of w){const C=y.kind==="tree",D=C?i.get(y.species)??i.get("manuka"):r.get(y.kind);if(!D)continue;if(C||y.kind==="scrub"){const L=p+(C?y.scale*.42:0);if(Math.hypot(y.x-S.x,y.z-S.z)<L||Math.hypot(y.x-E.x,y.z-E.z)<m)continue}const I=C?i.has(y.species)?y.species:"manuka":y.kind,O=C?_:A,U=O.get(I);if(!(U>=(C?bu:Ys[y.kind]))){if(h.set(0,y.rot,0),u.setFromEuler(h),b&&(C||y.kind==="scrub")){const L=b.x-y.x,H=b.z-y.z,X=Math.hypot(L,H);if(X>.001&&X<b.radius){const Z=b.radians*(1-X/b.radius);x.set(H/X,0,-L/X),g.setFromAxisAngle(x,Z),u.premultiply(g)}}d.set(y.x,y.y,y.z),f.setScalar(y.scale),l.compose(d,u,f),D.setMatrixAt(U,l),O.set(I,U+1)}}for(const[y,C]of r)C.count=A.get(y),C.instanceMatrix.needsUpdate=!0;for(const[y,C]of i)C.count=_.get(y),C.instanceMatrix.needsUpdate=!0}return{rebuild:T,trees:i,groups:r}}function Bx(n){n.insertAdjacentHTML("beforeend",`
    <div id="hud">
      <div id="vignette"></div>
      <div id="kete" data-testid="kete">
        <div id="kete-bag">◗</div>
        <div id="kete-count"><span id="kete-n">0</span> <small>in your kete</small></div>
      </div>
      <div id="world-tag" hidden></div>
      <div id="prompt" hidden></div>
      <div id="give-prompt" hidden></div>
      <div id="say" hidden></div>
      <div id="toasts"></div>
      <div id="epic" hidden>
        <span id="epic-text">Epiiiiic FIND!</span>
        <span id="epic-sub"></span>
      </div>
    </div>
  `);const e=n.querySelector("#kete-n"),t=n.querySelector("#kete-bag"),i=n.querySelector("#prompt"),r=n.querySelector("#give-prompt"),s=n.querySelector("#say"),a=n.querySelector("#toasts"),o=n.querySelector("#epic"),c=n.querySelector("#epic-text"),l=n.querySelector("#epic-sub"),u=n.querySelector("#vignette"),h=n.querySelector("#world-tag");let d=0;return{setCount(f){e.textContent!==String(f)&&(e.textContent=String(f),t.classList.remove("pop"),t.offsetWidth,t.classList.add("pop"))},setPrompt(f){if(!f){i.hidden=!0;return}const g=fl(f.itemId),x=Ni(f.tier);i.hidden=!1,i.innerHTML=`<b style="color:${x.colour}">${g?.name??f.itemId}</b><span class="key">E</span>`},setAction(f,g="E"){if(!f){i.hidden=!0;return}i.hidden=!1,i.innerHTML=`<b>${f}</b>${g?`<span class="key">${g}</span>`:""}`},setGivePrompt(f){if(!f){r.hidden=!0;return}r.hidden=!1,r.innerHTML=`<b>${f}</b><span class="key">G</span>`},setWorldTag(f){if(!f){h.hidden||(h.hidden=!0);return}h.textContent!==f&&(h.textContent=f),h.hidden&&(h.hidden=!1)},say(f,g=2600){f&&(s.hidden=!1,s.textContent=f,s.classList.remove("play"),s.offsetWidth,s.classList.add("play"),clearTimeout(d),d=setTimeout(()=>{s.hidden=!0},g))},sighting(f,g){const x=document.createElement("div");for(x.className="toast sighting",x.innerHTML=`<b>${f}</b><i>${g}</i>`,a.appendChild(x),setTimeout(()=>x.remove(),8e3);a.children.length>4;)a.firstChild.remove()},epicShow(f,g,x){o.hidden=!1,o.dataset.mode=x,c.textContent=f,l.textContent=""},epicFrame(f,g){if(!f.shown){o.hidden=!0;return}o.hidden=!1;const x=f.in,p=x<.6?.4+x/.6*.78:1.18-(x-.6)/.4*.18,m=-11+x*7,T=f.out,w=T===0?1:T<.3?1+T*.2:1.06*(1-(T-.3)/.7),S=-8*Math.min(1,x);c.style.transform=`translateY(${S}px) rotate(${m.toFixed(2)}deg) scale(${(p*w).toFixed(3)})`,c.style.opacity=String(T>.7?Math.max(0,1-(T-.7)/.3):1),l.textContent=g.slice(0,f.chars),l.style.opacity=String(T>.5?0:1)},epicHide(){o.hidden=!0},vignette(f){u.style.opacity=String(Math.min(1,Math.max(0,f)))},toast(f){const g=fl(f.itemId),x=Ni(f.tier),p=document.createElement("div");for(p.className="toast",p.innerHTML=`<b><span class="tier-dot" style="background:${x.colour}"></span>${g?.name??f.itemId}</b><i>${g?.flavour??""}</i>`,a.appendChild(p),setTimeout(()=>p.remove(),3200);a.children.length>4;)a.firstChild.remove()}}}const Gx={pickupRadius:1.8},Hx={tiers:[1,1,2,1,2,3,0,0,0,0,0,0],epicAtIndex:12,epicMinSeconds:150},Vx={windowStart:[22,18],ramp:[.08,.105],hardPity:[34,28],tickGrab:1,tickRefusal:.35,wonderSoftDry:22,wonderSoftMult:2},Wx={tasteMax:12,refusalGain:{1:.7,2:1.2},grabLoss:{1:-1.6,2:-.9,3:-.15,4:0,5:0},givingGain:{1:0,2:1,3:3.5,4:10,5:12,6:12},exponent:1.7,activityWindowSec:60,activityTarget:3,halfLifeSec:120,feralGrabs:3,feralMult:.25,epicSpendMult:.5,payoff:{1:-.85,2:-.45,3:1.3,4:3.4}},Xx={seenSeconds:.75,seenRadius:4.5,seenConeDegrees:120,abandonDistance:6,afkMinTravel:2,afkWindowSec:5,maxTier:2},qx={minSecondsBetween:150},Yx={reachMetres:3.2,sacrificeIsReal:!0,reactionMs:2600,prompt:"give something to {name}",head:"give to {name}",headEmpty:"{name} — your kete is empty"},$x={ladder:[{upTo:1,mode:"full"},{upTo:3,mode:"shorter"},{upTo:6,mode:"brief"},{upTo:9999,mode:"quick"}],modes:{full:{tell:.6,pinhole:.1,iris:.45,burp:.2,fall:.62,letter:1.2,exit:.22,settle:2.83,dilation:.35,portals:1},shorter:{tell:.35,pinhole:.08,iris:.32,burp:.16,fall:.62,letter:.85,exit:.2,settle:1.92,dilation:.6,portals:1},brief:{tell:.18,pinhole:.06,iris:.22,burp:.12,fall:.62,letter:.5,exit:.16,settle:.98,dilation:1,portals:1},quick:{tell:0,pinhole:.04,iris:.14,burp:.1,fall:.42,letter:.36,exit:.12,settle:.5,dilation:1,portals:1},_escalatedNote:"The reserve. BUILD-PLAN holds one tier above the ladder: two portals at once, a unique line, and it IGNORES the shortening. DECISIONS 2026-08-28 assigns that reserve to tier 6, the Epic epic find, so the ceiling stays big and the shortened common version never reads as a downgrade.",escalated:{tell:.9,pinhole:.12,iris:.55,burp:.24,fall:.7,letter:1.5,exit:.26,settle:3.4,dilation:.28,portals:2}},gravity:14,mouthMetres:3.2,driftSpeed:1.5,tumbleTurns:2.5,stepHz:12,fallScale:1.6,shakeMs:220,shakeDegrees:.35,shakeMetres:.06,dustRadius:3.2,dustMs:400,fleckCount:21,smearSegments:6,voLines:["Epiiiiic FIND!","Ohhh that's EPIC.","Sweeeeet az.","Oh mean!","Look at THAT!","Chur!","Oooof, choice.","Far OUT."],voRareLine:"Nah bro. Nah. That's, that's a good one.",voRareOneIn:25,voEscalatedLine:"Nah that's not even from HERE.",voExcludeLast:3},Kx={samples:40,minDistance:12,maxDistance:22,bearingDegrees:50,relaxedBearingDegrees:110,maxSlope:.36,clearance:4,seaMargin:.6,retrySeconds:3,abandonDistance:60,maxRelocations:3,fallbackDistance:8,canopyRadius:2.6,canopyRadiusOfHeight:.8,canopyBandFrom:.2,visibleMargin:.85,bendRadius:26,bendDegrees:18},Zx={doorwayAt:2,karuAt:1,recipient:"trinket_maker",afterDoorwayPityMult:.7,delayMs:2600},Jx={worldLabel:{home:"",elsewhere:"elsewhere",elsewhereListen:"elsewhere · listen"},doorway:{offsetMetres:7,triggerRadius:1.2,prompt:"go through",holdMs:500,holdWithKaruMs:0,fadeOutMs:600,fadeInMs:600,archMetres:2.4,arriveOffsetMetres:1.6,refusedLine:"something here is still owed. it is not done with you yet."},returnDoor:{min:45,max:85,samples:48,clearance:2.5,maxWaterDepth:.5,lostFloorSec:300,maxRelocations:1,relocateMin:25,relocateMax:35,relocateSpreadDeg:35,hearRadius:22,humGain:.35,seenMetres:40,bendRadius:26,bendDegrees:10,reachRadius:.9},elsewhere:{inlandOffset:400,pityMult:.6,firstOfferTier:4,hintAfterSec:180,findsMin:3,findsMax:5,findsRadiusMin:18,findsRadiusMax:60,findsMaxWaterDepth:.5,findsAttempts:24,entrySearchMetres:14,entrySearchStep:1}},Ye={offer:Gx,scriptedOpening:Hx,pity:Vx,discernment:Wx,refusal:Xx,epicGates:qx,giving:Yx,epicSequence:$x,epicSiting:Kx,progression:Zx,worlds:Jx};function Qx(n,e,t=null){return t?t.replace("{name}",n):(e?Ye.giving.head:Ye.giving.headEmpty).replace("{name}",n)}function jx(n){n.insertAdjacentHTML("beforeend",`
    <div id="give-panel" hidden>
      <div id="give-head"></div>
      <ul id="give-list"></ul>
      <div id="give-foot"><span class="keys-hint"><span class="key">↑↓</span> choose <span class="key">E</span> give <span class="key">Esc</span> keep them</span><span class="touch-hint">tap an item to give it · ✕ keeps them</span></div>
      <button id="give-close" type="button" aria-label="keep them">✕</button>
    </div>
  `);const e=n.querySelector("#give-panel"),t=n.querySelector("#give-head"),i=n.querySelector("#give-list");let r=!1,s=!1,a=[],o=0,c="",l=null;function u(){t.textContent=Qx(c,a.length,l),i.innerHTML=a.map((d,f)=>{const g=fl(d.itemId),x=Ni(d.tier);return`<li data-i="${f}" class="${f===o?"sel":""}"><span class="tier-dot" style="background:${x.colour}"></span><span class="give-name">${g?.name??d.itemId}</span><span class="give-tier">${x.name}</span></li>`}).join("");const h=i.querySelector(".sel");h&&h.scrollIntoView({block:"nearest"})}return i.addEventListener("click",h=>{const d=h.target.closest("li[data-i]");!d||!r||(o=Number(d.dataset.i),u(),s=!0)}),n.querySelector("#give-close").addEventListener("click",()=>{r=!1,e.hidden=!0}),{get open(){return r},get selected(){return a[o]??null},takePick(){return s?(s=!1,!0):!1},show(h,d,{head:f=null}={}){c=h,l=f,a=d,o=0,r=!0,e.hidden=!1,u()},hide(){r=!1,e.hidden=!0},move(h){!r||a.length===0||(o=(o+h+a.length)%a.length,u())},remove(h){const d=a.findIndex(f=>f.id===h);d<0||(a.splice(d,1),o>=a.length&&(o=Math.max(0,a.length-1)),u())}}}const ev=[{id:"player",name:"the one in the hoodie",blurb:"walks like nothing is urgent."},{id:"player_b",name:"the one in the red top",blurb:"every pocket already full."},{id:"player_c",name:"the one with the hat",blurb:"visible from a long way off."},{id:"player_d",name:"the one in the brown jacket",blurb:"boots done up properly."}],tv={roster:ev};function nv(n,{onStart:e,onLoad:t=null,canLoad:i=!1,onFirstGesture:r=()=>{}}){const s=tv.roster.filter(E=>ai[E.id]);n.insertAdjacentHTML("beforeend",`
    <div id="title" data-panel="title">
      <div id="title-wash"></div>

      <section id="title-main">
        <h1 id="title-name">lil bitz</h1>
        <p id="title-sub">a beachcombing game in Project R&#363;MOKO</p>
        <div id="title-actions">
          ${i?'<button id="title-load" type="button">carry on</button>':""}
          <button id="title-start" type="button" class="${i?"secondary":""}">${i?"start again":"start game"}</button>
        </div>
        <p id="title-credit">art by Lyss &middot; <span>@gods_eyeball</span></p>
      </section>

      <section id="title-pick" hidden>
        <h2 id="pick-head">Ko wai koe?</h2>
        <ul id="pick-list">
          ${s.map((E,b)=>`
            <li class="pick${b===0?" sel":""}" data-id="${E.id}" data-i="${b}">
              <div class="pick-art">
                <img src="${ai[E.id].png}" alt="${E.name}" draggable="false">
              </div>
              <b>${E.name}</b>
              <i>${E.blurb}</i>
            </li>`).join("")}
        </ul>
        <div id="pick-actions">
          <button id="pick-back" type="button">back</button>
          <button id="pick-go" type="button">this one</button>
        </div>
        <p id="pick-note">names are placeholders. they&rsquo;re Lyss&rsquo;s people to name.</p>
      </section>
    </div>
  `);const a=n.querySelector("#title"),o=n.querySelector("#title-main"),c=n.querySelector("#title-pick"),l=n.querySelector("#pick-list"),u=Array.from(l.querySelectorAll(".pick"));let h="title",d=0,f=!1;function g(E){d=(E+u.length)%u.length;for(const[b,A]of u.entries())A.classList.toggle("sel",b===d);u[d].scrollIntoView({block:"nearest",inline:"nearest"})}let x=!1;function p(){x||(x=!0,r()),h="pick",a.dataset.panel="pick",o.hidden=!0,c.hidden=!1,g(d)}function m(){h="title",a.dataset.panel="title",c.hidden=!0,o.hidden=!1}function T(){f||(f=!0,a.classList.add("gone"),setTimeout(()=>a.remove(),520),e(s[d].id))}function w(){f||!t||(x||(x=!0,r()),f=!0,a.classList.add("gone"),setTimeout(()=>a.remove(),520),t())}n.querySelector("#title-start").addEventListener("click",p),n.querySelector("#title-load")?.addEventListener("click",w),n.querySelector("#pick-back").addEventListener("click",m),n.querySelector("#pick-go").addEventListener("click",T);for(const E of u)E.addEventListener("click",()=>{g(Number(E.dataset.i)),T()}),E.addEventListener("mouseenter",()=>g(Number(E.dataset.i)));const S=E=>{if(!f){if(h==="title"){(E.code==="Enter"||E.code==="Space"||E.code==="KeyE")&&(E.preventDefault(),E.stopPropagation(),i&&t?w():p());return}E.code==="ArrowLeft"||E.code==="KeyA"?(E.preventDefault(),g(d-1)):E.code==="ArrowRight"||E.code==="KeyD"?(E.preventDefault(),g(d+1)):E.code==="Enter"||E.code==="Space"||E.code==="KeyE"?(E.preventDefault(),E.stopPropagation(),T()):E.code==="Escape"&&(E.preventDefault(),m())}};return window.addEventListener("keydown",S,!0),{get open(){return!f},get panel(){return h},get selectedId(){return s[d].id},get roster(){return s.map(E=>E.id)},get canLoad(){return!!(i&&t)},_toPick:p,_select:g,_start:T,_load:w}}const ma="lil-bitz:save",mo=2;function iv(n=rv()){return{exists(){const e=Eu(n);return!!(e&&e.v===mo)},load(){const e=Eu(n);return!e||e.v!==mo?null:e},save(e){if(!n)return!1;try{return n.setItem(ma,JSON.stringify({...e,v:mo})),!0}catch{return!1}},clear(){try{n?.removeItem(ma)}catch{}}}}function Eu(n){if(!n)return null;try{const e=n.getItem(ma);return e?JSON.parse(e):null}catch{return null}}function rv(){try{const n=globalThis.localStorage;return n.getItem(ma),n}catch{return null}}const wu=520,$s=60,sv=12,av=30;function ov(n){const e=document.createElement("div");e.id="arc-layer",n.appendChild(e);const t=[];function i(s,a,o,c){if(t.length>=5)return!1;const u=document.querySelector("#kete-bag")?.getBoundingClientRect(),h=u?u.left+u.width/2:40,d=u?u.top+u.height/2:window.innerHeight-40,f=document.createElement("div");return f.className="arc-bit",f.style.background=o,e.appendChild(f),t.push({el:f,x0:s,y0:a,x1:h,y1:d,cx:(s+h)/2,cy:Math.min(a,d)-window.innerHeight*.28,t0:c,colour:o}),!0}function r(s){for(let a=t.length-1;a>=0;a--){const o=t[a],c=s-o.t0;if(c>=wu){o.el.remove(),t.splice(a,1);continue}if(c<$s){const p=c/$s;o.el.style.transform=`translate(${o.x0}px, ${o.y0}px) translate(-50%, -50%) scale(${1+p*.14}, ${1-p*.18})`;continue}const l=(c-$s)/(wu-$s),u=1-l,h=u*u*o.x0+2*u*l*o.cx+l*l*o.x1,d=u*u*o.y0+2*u*l*o.cy+l*l*o.y1,f=l<.25?1+l*1:1.25-(l-.25)*1.2,x=Math.floor(c/(1e3/sv))*av%360;o.el.style.transform=`translate(${h}px, ${d}px) translate(-50%, -50%) rotate(${x}deg) scale(${Math.max(.1,f)})`,o.el.style.opacity=String(l>.86?(1-l)/.14:1)}}return{launch:i,update:r,get count(){return t.length}}}const Tu=[0,2,4,7,9,12],lv=4e3,Ks=392,cv={shell_chip:"ceramic",scallop:"ceramic",cats_eye:"ceramic",paua_piece:"ceramic",mermaids_purse:"cloth",dry_kelp:"cloth",leaf_litter:"cloth",heavy_feather:"cloth",sea_glass:"glass",quartz_chip:"glass",banded_agate:"glass",humming_geode:"glass",one_note_shell:"glass",portal_shard:"glass",worn_pebble:"stone",pounamu:"stone",resin_bead:"stone",seeing_stone:"stone",twig:"wood",pinecone:"wood",can_tab:"metal",wrong_compass:"metal",sealed_tin:"metal",scifi_heru:"metal",chainmail_maro:"metal",elytron:"cloth",carry_knot:"cloth"},uv={ceramic:{hz:2100,decay:.055,type:"triangle",gain:.16},glass:{hz:3300,decay:.09,type:"sine",gain:.14},stone:{hz:620,decay:.045,type:"square",gain:.1},wood:{hz:900,decay:.05,type:"square",gain:.11},metal:{hz:2700,decay:.16,type:"sine",gain:.12},cloth:{hz:400,decay:.04,type:"sine",gain:.09}},dv=new URL("../../public/audio/lyss-background.mp3",import.meta.url).href,Nn={near:6,far:34,gain:.5,titleGain:.62,restMinMs:24e3,restMaxMs:48e3};function hv(){let n=null,e=null,t=!1,i=0,r=-1e9,s=null,a=!1,o=null,c=null,l=-1e9,u=0,h=!1,d=!1,f=null,g=null,x=null,p=null;function m(){if(n)return n;const b=window.AudioContext||window.webkitAudioContext;return b?(n=new b,e=n.createGain(),e.gain.value=.5,e.connect(n.destination),n):null}function T(){const b=m();b&&b.state==="suspended"&&b.resume().catch(()=>{})}function w({hz:b,decay:A,type:_,gain:y,when:C=0,detune:D=0}){const I=m();if(!I||t)return;const O=I.currentTime+C,U=I.createOscillator(),L=I.createGain();U.type=_,U.frequency.value=b,U.detune.value=D,L.gain.setValueAtTime(0,O),L.gain.linearRampToValueAtTime(y,O+.004),L.gain.exponentialRampToValueAtTime(1e-4,O+A),U.connect(L),L.connect(e),U.start(O),U.stop(O+A+.02)}function S(b=0){const A=m();if(!A||t)return;const _=A.currentTime+b,y=Math.floor(A.sampleRate*.14),C=A.createBuffer(1,y,A.sampleRate),D=C.getChannelData(0);for(let L=0;L<y;L++)D[L]=(Math.random()*2-1)*Math.pow(1-L/y,2.4);const I=A.createBufferSource();I.buffer=C,I.playbackRate.value=.92+Math.random()*.16;const O=A.createBiquadFilter();O.type="bandpass",O.frequency.value=1500,O.Q.value=.8;const U=A.createGain();U.gain.value=.32,I.connect(O),O.connect(U),U.connect(e),I.start(_)}function E(){if(a)return;const b=m();b&&(a=!0,o=b.createGain(),o.gain.value=0,o.connect(e),fetch(dv).then(A=>A.arrayBuffer()).then(A=>b.decodeAudioData(A)).then(A=>{s=A}).catch(()=>{}))}return{unlock:T,get muted(){return t},setMuted(b){t=b},ambientVoice(b,A){if(t||b>Nn.far){o&&(o.gain.value=0);return}if(E(),!s||!o)return;const _=1-Math.min(1,Math.max(0,(b-Nn.near)/(Nn.far-Nn.near)));o.gain.value=Nn.gain*_*_;const y=m();if(!y||y.state!=="running"||A<l||A<u)return;c=y.createBufferSource(),c.buffer=s,c.connect(o),c.start();const C=s.duration*1e3;l=A+C,u=l+Nn.restMinMs+Math.random()*(Nn.restMaxMs-Nn.restMinMs)},titleSong(b){T(),E();const A=m();if(!A||t)return;const _=()=>{if(!s){setTimeout(_,120);return}if(d)return;const y=typeof b=="function"?b():b,C=A.createBufferSource();C.buffer=s,C.loop=!0;const D=A.createGain();D.gain.value=Nn.titleGain,C.connect(D),D.connect(e),C.start(),f=C,g=D,l=Math.max(l,y+s.duration*1e3),u=Math.max(u,l+Nn.restMinMs),h=!0};_()},titleSongStop(){d=!0;const b=n;if(!b||!f||!g)return;const A=b.currentTime;g.gain.cancelScheduledValues(A),g.gain.setValueAtTime(g.gain.value,A),g.gain.linearRampToValueAtTime(0,A+.5);try{f.stop(A+.55)}catch{}f=null,g=null},get voiceReady(){return!!s},get titleSongPlayed(){return h},pickup(b,A,_){if(!m()||t)return;const C=cv[b]??"stone";w({...uv[C],detune:(Math.random()-.5)*40}),S(.012),_-r>lv?i=0:i=Math.min(i+1,Tu.length-1),r=_;const D=Tu[i]+(A>=4?7:0);w({hz:Ks*Math.pow(2,D/12),decay:.5,type:"sine",gain:.1,when:.06})},give(b){if(!m()||t)return;const _=Ks*Math.pow(2,(b>=4?5:0)/12);w({hz:_,decay:.32,type:"sine",gain:.1}),w({hz:_*.75,decay:.55,type:"sine",gain:.09,when:.11}),S(.02)},epicTell(b){const A=m();if(!A||t||b<=0)return;const _=A.currentTime;e.gain.cancelScheduledValues(_),e.gain.setValueAtTime(e.gain.value,_),e.gain.linearRampToValueAtTime(.25,_+.4);const y=A.createOscillator(),C=A.createGain();y.type="sine",y.frequency.value=110,C.gain.setValueAtTime(1e-4,_),C.gain.exponentialRampToValueAtTime(.16,_+b),C.gain.exponentialRampToValueAtTime(1e-4,_+b+.35),y.connect(C),C.connect(e),y.start(_),y.stop(_+b+.4)},doorHum(b){if(b<=1e-4&&!p)return;const A=m();if(!A)return;p||(x=A.createOscillator(),p=A.createGain(),x.type="sine",x.frequency.value=110,p.gain.value=0,x.connect(p),p.connect(e),x.start());const _=t?0:Math.min(1,Math.max(0,b))*.16;p.gain.setTargetAtTime(_,A.currentTime,.12)},epicImpact(){const b=m();if(!b||t)return;const A=b.currentTime;e.gain.cancelScheduledValues(A),e.gain.setValueAtTime(e.gain.value,A),e.gain.linearRampToValueAtTime(.5,A+.9),w({hz:74,decay:.42,type:"sine",gain:.28}),S(0),w({hz:Ks*2,decay:.7,type:"triangle",gain:.12,when:.02}),w({hz:Ks*3,decay:.9,type:"sine",gain:.08,when:.06})},get chainStep(){return i}}}const Kt=Ye.discernment;function fv(){const n={taste:0,pickups:[],t1Streak:0};return{get taste(){return n.taste},get raw(){return{...n,pickups:n.pickups.slice()}},tick(e){e<=0||(n.taste*=Math.pow(.5,e/Kt.halfLifeSec))},onGrab(e,t){n.pickups.push(t);const i=Kt.grabLoss[String(e)]??0;n.taste=xr(n.taste+i,0,Kt.tasteMax),e===1?(n.t1Streak++,n.t1Streak>=Kt.feralGrabs&&(n.taste*=Kt.feralMult,n.t1Streak=0)):n.t1Streak=0},onRefusal(e){const t=Kt.refusalGain[String(e)]??0;n.taste=xr(n.taste+t,0,Kt.tasteMax)},onGive(e){const t=Kt.givingGain[String(e)]??0;n.taste=xr(n.taste+t,0,Kt.tasteMax)},onEpicDelivered(){n.taste*=Kt.epicSpendMult},k(e){const t=Kt.activityWindowSec*1e3;for(;n.pickups.length&&e-n.pickups[0]>t;)n.pickups.shift();const i=xr(n.pickups.length/Kt.activityTarget,0,1),r=xr(n.taste/Kt.tasteMax,0,1);return Math.pow(r*i,Kt.exponent)},serialize(){return{v:1,taste:n.taste,t1Streak:n.t1Streak}},restore(e){return!e||e.v!==1?!1:(n.taste=xr(Number(e.taste)||0,0,Kt.tasteMax),n.t1Streak=Number(e.t1Streak)||0,n.pickups.length=0,!0)}}}function xr(n,e,t){return n<e?e:n>t?t:n}function pv(n){const e=Ye.refusal;return!(n.tier>e.maxTier||n.seenSeconds<e.seenSeconds||n.distance<e.abandonDistance||n.travelledLast5s<e.afkMinTravel||n.uiBlocked)}function mv(n){let e=0;for(const i of Object.keys(n))e+=n[i];if(e<=0)return{...n};const t={};for(const i of Object.keys(n))t[i]=n[i]/e;return t}function gv(n){return{...mi.weights[n]}}function _v(n,e){const t=Ye.discernment.payoff,i={};for(const r of Object.keys(n)){const s=t[r]??0;i[r]=Math.max(0,n[r]*(1+s*e))}return mv(i)}const Ki=Ye.pity,Wl=(n,e)=>n[0]+(n[1]-n[0])*e,xv=n=>Math.round(Wl(Ki.windowStart,n)),vv=n=>Wl(Ki.ramp,n),Mv=n=>Math.round(Wl(Ki.hardPity,n));function Sv(n,e,t=1){const i=Math.round(xv(e)*t),r=Math.round(Mv(e)*t);return n<i?0:n>=r?1:Math.min(1,vv(e)*(n-i+1))}function Au(n){return n==="grab"?Ki.tickGrab:Ki.tickRefusal}function yv(n,e,t,i,r=1){return n.epicActive||t-n.lastEpicAtMs<Ye.epicGates.minSecondsBetween*1e3?!1:i()<Sv(n.epicTicks,e,r)}function bv(n,e){if(e<Ki.wonderSoftDry)return n;const t={...n};return t[4]=(t[4]??0)*Ki.wonderSoftMult,t}function Ev(n,e){return e?{natural:n.natural,granted:n.granted+1}:{natural:n.natural+1,granted:n.granted}}function wv(n){return n.natural===0}function Tv(n,e){return e?`epic:g${n.granted}`:`epic:${n.natural}`}const gl=Ye.refusal,Av=Math.cos(gl.seenConeDegrees*Math.PI/180/2);function Rv(){const n=new Map,e=new Map,t=new Set;let i=0;function r(l,u,h){const d=n.get(l.id);if(d)return d;const f=Ye.scriptedOpening.tiers;let g;if(i<f.length&&f[i]>0)g=f[i];else{let m=_v(gv(l.biome),u);m=bv(m,h),g=Pd(l.tierRoll,m)}i<f.length&&i++;const x=hl(l.itemRoll,g,l.biome,l.nearWater)??hl(l.itemRoll,l.tier,l.biome,l.nearWater),p={tier:x?g:l.tier,itemId:x?.id??l.itemId};return n.set(l.id,p),p}function s(){}function a(l,u){n.set(l,{tier:u.tier,itemId:u.itemId})}function o(){return i>=Ye.scriptedOpening.epicAtIndex}function c({nearby:l,px:u,pz:h,fx:d,fz:f,dt:g,travelledLast5s:x,uiBlocked:p,isTaken:m}){const T=[],w=new Set;for(const S of l){if(m(S.id)||t.has(S.id))continue;const E=S.x-u,b=S.z-h,A=Math.hypot(E,b);let _=e.get(S.id);if(_||(_={seenSeconds:0,wasClose:!1},e.set(S.id,_)),w.add(S.id),A<=gl.abandonDistance)(A<.001||E/A*d+b/A*f>=Av)&&A<=gl.seenRadius&&(_.seenSeconds+=g),A<=Ye.offer.pickupRadius&&(_.wasClose=!0);else if(_.wasClose||_.seenSeconds>0){const C=n.get(S.id)?.tier??S.tier;pv({tier:C,seenSeconds:_.seenSeconds,distance:A,travelledLast5s:x,uiBlocked:p})&&(t.add(S.id),T.push({id:S.id,tier:C})),e.delete(S.id)}}if(e.size>400)for(const S of e.keys())w.has(S)||e.delete(S);return T}return{reveal:r,update:c,force:a,noteResolvedPickup:s,openingComplete:o,isRefused:l=>t.has(l),get scriptIndex(){return i},get resolvedCount(){return n.size},get refusedCount(){return t.size},serialize(){return{v:1,scriptIndex:i,resolved:Array.from(n.entries()),refused:Array.from(t)}},restore(l){if(!l||l.v!==1)return!1;n.clear(),t.clear(),e.clear();for(const[u,h]of l.resolved)n.set(u,{tier:h.tier,itemId:h.itemId});for(const u of l.refused)t.add(u);return i=Number(l.scriptIndex)||0,!0},_tracked:e}}const ut=Ye.epicSequence,cn=n=>n<0?0:n>1?1:n;function Cv(n,e=1.7){const t=n-1;return 1+(e+1)*t*t*t+e*t*t}const vr=n=>1-(1-n)*(1-n),Pv=n=>1-Math.pow(1-n,5);function Dv(n){return n<=0?0:n>=1?1:Math.pow(2,-10*n)*Math.sin((n*10-.75)*(2*Math.PI/3))+1}function Iv(n,e=5){if(e>=6)return"escalated";for(const t of ut.ladder)if(n<=t.upTo)return t.mode;return ut.ladder[ut.ladder.length-1].mode}function Lv(n,e,t=!1){if(t)return ut.voEscalatedLine;if(e()<1/ut.voRareOneIn)return ut.voRareLine;const i=new Set(n.slice(0,ut.voExcludeLast)),r=ut.voLines.filter(a=>!i.has(a)),s=r.length?r:ut.voLines;return s[Math.min(s.length-1,Math.floor(e()*s.length))]}function Nv(n){const e=ut.modes[n]??ut.modes.full,t=e.tell,i=t+e.pinhole,r=i+e.iris,s=r+e.burp,a=s+e.fall,o=a+e.letter,c=o+e.exit,l=Math.max(c,a+e.settle);return{mode:n,m:e,tellEnd:t,pinholeEnd:i,irisEnd:r,burpEnd:s,fallStart:s,impact:a,letterEnd:o,exitEnd:c,end:l,dilateDownFrom:i+.05,dilateDownTo:i+.05+e.iris*.67,dilateUpFrom:a-e.fall*.25,dilateUpTo:a}}function Uv(){const n=ti(),e={active:!1,t:0,tl:null,tier:5,site:{x:0,y:0,z:0},portal:{x:0,y:0,z:0},portal2:null,drift:{x:0,z:0},spinAxis:0,line:"",subLine:"",events:[],fired:{tell:!1,open:!1,impact:!1,end:!1}};function t({site:u,count:h,tier:d=5,line:f,subLine:g,rng:x}){const p=Iv(h,d),m=Nv(p),T=ut.gravity,w=m.m.fall,S=.5*T*w*w,E=x()*Math.PI*2,b={x:Math.sin(E)*ut.driftSpeed,z:Math.cos(E)*ut.driftSpeed};e.active=!0,e.t=0,e.tl=m,e.tier=d,e.site={...u},e.portal={x:u.x-b.x*w,y:u.y+S,z:u.z-b.z*w};const A=3.6/ut.driftSpeed;e.portal2=m.m.portals>1?{x:e.portal.x+b.z*A,y:e.portal.y+.9,z:e.portal.z-b.x*A}:null,e.drift=b,e.spinAxis=x()*Math.PI*2,e.line=f,e.subLine=g,e.events=[],e.fired={tell:!1,open:!1,impact:!1,end:!1}}function i(){return e.portal2?(e.portal2={x:2*e.portal.x-e.portal2.x,y:e.portal2.y,z:2*e.portal.z-e.portal2.z},!0):!1}function r(u){if(!e.active||!e.tl)return;e.t+=u;const h=e.tl;!e.fired.tell&&e.t>=0&&(e.fired.tell=!0,e.events.push("tell")),!e.fired.open&&e.t>=h.tellEnd&&(e.fired.open=!0,e.events.push("open")),!e.fired.impact&&e.t>=h.impact&&(e.fired.impact=!0,e.events.push("impact"),e.events.push("deliver")),!e.fired.end&&e.t>=h.end&&(e.fired.end=!0,e.active=!1,e.events.push("end"))}function s(){const u=e.tl;if(!u)return{scale:0,sx:1,sy:1};const h=e.t;if(h<u.tellEnd)return{scale:0,sx:1,sy:1};if(h<u.pinholeEnd)return{scale:cn((h-u.tellEnd)/Math.max(1e-6,u.m.pinhole))*.06,sx:1,sy:1};if(h<u.irisEnd){const g=cn((h-u.pinholeEnd)/Math.max(1e-6,u.m.iris));return{scale:.05+Cv(g)*.95,sx:1,sy:1}}if(h<u.burpEnd){const g=cn((h-u.irisEnd)/Math.max(1e-6,u.m.burp)),x=Math.sin(g*Math.PI);return{scale:1,sx:1+.12*x,sy:1-.14*x}}if(h<u.impact)return{scale:1,sx:1,sy:1};const d=cn((h-u.impact)/.5);if(d>=1)return{scale:0,sx:1,sy:1};const f=d>.86?(d-.86)/.14:0;return{scale:1-vr(d),sx:1-f*.9,sy:1+f*.5}}function a(){const u=e.tl;if(!u||!e.active)return 1;const h=u.m.dilation;if(h>=1)return 1;const d=e.t;if(d<u.dilateDownFrom)return 1;if(d<u.dilateDownTo){const f=cn((d-u.dilateDownFrom)/(u.dilateDownTo-u.dilateDownFrom));return 1+(h-1)*vr(f)}if(d<u.dilateUpFrom)return h;if(d<u.dilateUpTo){const f=cn((d-u.dilateUpFrom)/(u.dilateUpTo-u.dilateUpFrom));return h+(1-h)*vr(f)}return 1}function o(){const u=e.tl;if(!u||e.t<u.fallStart)return null;const h=ut.gravity,d=Math.min(e.t-u.fallStart,u.m.fall),f=e.t>=u.impact,g=e.portal.x+e.drift.x*d,x=e.portal.z+e.drift.z*d,p=f?e.site.y:e.portal.y-.5*h*d*d,m=Math.floor(e.t*ut.stepHz),T=f?e.spinAxis+ut.tumbleTurns*Math.PI*2:e.spinAxis+m/(ut.stepHz*u.m.fall)*ut.tumbleTurns*Math.PI*2;let w;if(!f)w=ut.fallScale+(1-ut.fallScale)*(d/u.m.fall);else{const S=cn((e.t-u.impact)/.35);w=.7+Dv(S)*.3}return{x:g,y:p,z:x,spin:T,scale:w,landed:f,fallU:d/u.m.fall}}function c(){const u=e.tl;return!u||e.t<u.impact?-1:e.t-u.impact}function l(){const u=c();if(u<0)return{rot:0,x:0,y:0};const h=cn(u/(ut.shakeMs/1e3));if(h>=1)return{rot:0,x:0,y:0};const d=1-Pv(h),f=u*42;return{rot:n(f,.5)*ut.shakeDegrees*(Math.PI/180)*d,x:n(f,11.5)*ut.shakeMetres*d,y:n(f,23.5)*ut.shakeMetres*d}}return{start:t,flipAcross:i,update:r,aperture:s,dilation:a,object:o,shake:l,sinceImpact:c,get active(){return e.active},get t(){return e.t},get tier(){return e.tier},get mode(){return e.tl?.mode??null},get portal(){return e.tl&&e.t>=e.tl.tellEnd?e.portal:null},get portal2(){return e.tl&&e.t>=e.tl.tellEnd?e.portal2:null},get portal2Planned(){return e.portal2},get portalPlanned(){return e.tl?e.portal:null},get site(){return{...e.site}},get line(){return e.line},get subLine(){return e.subLine},get tellStrength(){const u=e.tl;return!u||!e.active||u.m.tell<=0||e.t>=u.tellEnd?0:vr(cn(e.t/u.m.tell))},get framing(){const u=e.tl;if(!u||!e.active)return 0;const h=vr(cn(e.t/Math.max(.3,u.irisEnd))),d=.6,f=u.end-d;return e.t>f?h*vr(cn((u.end-e.t)/d)):h},get lettering(){const u=e.tl;if(!u||e.t<u.impact)return{shown:!1,in:0,out:0,chars:0};if(e.t>=u.exitEnd)return{shown:!1,in:1,out:1,chars:e.subLine.length};const h=cn((e.t-u.impact)/.26),d=e.t>u.letterEnd?cn((e.t-u.letterEnd)/Math.max(1e-6,u.m.exit)):0,f=Math.max(0,Math.floor((e.t-u.impact-.25)*22));return{shown:!0,in:h,out:d,chars:Math.min(f,e.subLine.length)}},takeEvents(){const u=e.events;return e.events=[],u},get _timeline(){return e.tl}}}const Un=ut,go=4,Fv=12;function Ov(n){const t=document.createElement("canvas");t.width=256,t.height=256;const i=t.getContext("2d"),r=256/2,s=256/2,a=new Path2D;for(let l=0;l<=96;l++){const u=l/96*Math.PI*2,h=104+Math.sin(u*5+n*1.3)*4+Math.sin(u*11+n*2.1)*2.4+Math.sin(u*3-n*.7)*2,d=r+Math.cos(u)*h,f=s+Math.sin(u)*h;l===0?a.moveTo(d,f):a.lineTo(d,f)}a.closePath(),i.save(),i.clip(a);const o=i.createLinearGradient(0,s-110,0,s+110);o.addColorStop(0,"#241443"),o.addColorStop(.42,"#7b3b6a"),o.addColorStop(.72,"#e8763a"),o.addColorStop(1,"#ffd08a"),i.fillStyle=o,i.fillRect(0,0,256,256),i.fillStyle="rgba(255, 246, 220, 0.95)";for(let l=0;l<34;l++){const u=l*2.39996,h=96*Math.sqrt((l+.5)/34),d=r+Math.cos(u)*h,f=s+Math.sin(u)*h*.62-30,g=1.1+l*13%5*.4;i.beginPath(),i.moveTo(d,f-g*2.2),i.lineTo(d+g*.6,f-g*.6),i.lineTo(d+g*2.2,f),i.lineTo(d+g*.6,f+g*.6),i.lineTo(d,f+g*2.2),i.lineTo(d-g*.6,f+g*.6),i.lineTo(d-g*2.2,f),i.lineTo(d-g*.6,f-g*.6),i.closePath(),i.fill()}i.restore(),i.save(),i.clip(a),i.strokeStyle="rgba(255, 196, 120, 0.55)",i.lineWidth=16,i.stroke(a),i.restore(),i.strokeStyle="#2b2118",i.lineWidth=7,i.lineJoin="round",i.stroke(a);const c=new Sn(t);return c.colorSpace=dt,c}function Ru(n,e){const i=document.createElement("canvas");i.width=64,i.height=64;const r=i.getContext("2d"),s=r.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);s.addColorStop(0,n),s.addColorStop(.55,e),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,64,64);const a=new Sn(i);return a.colorSpace=dt,a}function zv(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),i=64/2;t.fillStyle="#fff6dc",t.beginPath(),t.moveTo(i,2),t.quadraticCurveTo(i+4,i-4,62,i),t.quadraticCurveTo(i+4,i+4,i,62),t.quadraticCurveTo(i-4,i+4,2,i),t.quadraticCurveTo(i-4,i-4,i,2),t.fill();const r=new Sn(e);return r.colorSpace=dt,r}function kv(n){const e=Array.from({length:go},(y,C)=>Ov(C)),t=Ru("rgba(255,220,150,0.9)","rgba(210,140,70,0.35)"),i=Ru("rgba(255,255,255,1)","rgba(255,240,210,0.5)"),r=zv(),s=new $t(1,1),a=()=>{const y=new at(s,new Yt({map:e[0],transparent:!1,alphaTest:.5,side:Tt,toneMapped:!1}));return y.frustumCulled=!1,y.visible=!1,n.add(y),y},o=a(),c=a(),l=new at(new fi(1,1),new $i({flatShading:!0}));l.frustumCulled=!1,l.visible=!1,n.add(l);const u=(y,C=Di)=>{const D=new at(s,new Yt({map:y,transparent:!0,depthWrite:!1,blending:C,toneMapped:!1}));return D.frustumCulled=!1,D.visible=!1,n.add(D),D},h=Array.from({length:Un.smearSegments},()=>u(t,Ii)),d=Array.from({length:14},()=>u(r,Ii)),f=u(i,Ii),g=new at((()=>{const y=new fs(.74,1,40);return y.rotateX(-Math.PI/2),y})(),new Yt({color:"#e8dcc0",transparent:!0,depthWrite:!1,side:Tt,toneMapped:!1}));g.frustumCulled=!1,g.visible=!1,n.add(g);const x=new fa(new Sa(.13,0),new Yt({color:"#cbbb96",toneMapped:!1}),Un.fleckCount);x.count=0,x.frustumCulled=!1,x.instanceMatrix.setUsage(ha),n.add(x);let p=[],m=null,T=null;const w=new ot,S=new k,E=new qn,b=new k;function A(){o.visible=!1,c.visible=!1,l.visible=!1,f.visible=!1,g.visible=!1,x.count=0;for(const y of h)y.visible=!1;for(const y of d)y.visible=!1;p=[],m=null,T=null}function _(y,C,D){if(!y.active){A();return}const I=Ni(y.tier)??Ni(5),O=y.aperture(),U=y.portal,L=Math.floor(D/1e3*Fv)%go,H=Un.mouthMetres*O.scale,X=U&&O.scale>.001;o.visible=X,X&&(o.material.map=e[L],o.position.set(U.x,U.y,U.z),o.scale.set(H*O.sx,H*O.sy,1),nn(o,C));const Z=y.portal2;c.visible=!!Z&&X,Z&&X&&(c.material.map=e[(L+2)%go],c.position.set(Z.x,Z.y,Z.z),c.scale.set(H*.72*O.sx,H*.72*O.sy,1),nn(c,C));const G=y.object();l.visible=!!G,G&&(l.material.color.set(I.colour),l.material.emissive.set(I.colour),l.material.emissiveIntensity=.42,l.position.set(G.x,G.y+I.scale,G.z),l.rotation.set(G.spin*.6,G.spin,G.spin*.3),l.scale.setScalar(I.scale*G.scale),G.landed||(p.unshift({x:G.x,y:G.y+I.scale,z:G.z}),p.length=Math.min(p.length,Un.smearSegments+1)));for(let ge=0;ge<h.length;ge++){const xe=p[ge+1],Se=!!xe&&!!G&&!G.landed;if(h[ge].visible=Se,!Se)continue;const Ke=1-ge/h.length;h[ge].position.set(xe.x,xe.y,xe.z),h[ge].scale.setScalar(I.scale*1.5*Ke),h[ge].material.opacity=.42*Ke*Ke,nn(h[ge],C)}const ie=y._timeline,te=ie?y.t-ie.irisEnd:-1,ae=.55;if(ie&&te>=0&&te<ae){m||(m=d.map((xe,Se)=>({a:Se/d.length*Math.PI*2+Se%3*.21,e:-.3+Se%5*.16,sp:2.4+Se%4*.7})));const ge=10+(d.length-10);for(let xe=0;xe<d.length;xe++){const Se=xe<ge;if(d[xe].visible=Se,!Se)continue;const Ke=m[xe],ze=Ke.sp*te;d[xe].position.set(U.x+Math.cos(Ke.a)*ze,U.y+Ke.e*ze,U.z+Math.sin(Ke.a)*ze);const nt=1-te/ae;d[xe].scale.setScalar(.45*nt+.12),d[xe].material.opacity=nt,nn(d[xe],C)}}else{for(const ge of d)ge.visible=!1;te>=ae&&(m=null)}const we=y.sinceImpact(),$e=y.site,We=we>=0&&we<3/24;f.visible=We,We&&(f.position.set($e.x,$e.y+.5,$e.z),f.scale.setScalar(3),f.material.opacity=1-we/(3/24),nn(f,C));const J=Un.dustMs/1e3,re=we>=0&&we<J;if(g.visible=re,re){const ge=we/J;g.position.set($e.x,$e.y+.04,$e.z),g.scale.setScalar(.05+ge*Un.dustRadius),g.material.opacity=.8*(1-ge)}const ne=.75;if(we>=0&&we<ne){T||(T=Array.from({length:Un.fleckCount},(ge,xe)=>{const Se=xe/Un.fleckCount*Math.PI*2+xe%7*.11,Ke=1.4+xe%5*.42;return{vx:Math.cos(Se)*Ke,vy:3+xe%4*.65,vz:Math.sin(Se)*Ke}})),x.count=Un.fleckCount;for(let ge=0;ge<Un.fleckCount;ge++){const xe=T[ge];S.set($e.x+xe.vx*we,$e.y+xe.vy*we-.5*9.8*we*we,$e.z+xe.vz*we),E.setFromAxisAngle(new k(0,1,0),we*9+ge),b.setScalar(1-we/ne),w.compose(S,E,b),x.setMatrixAt(ge,w)}x.instanceMatrix.needsUpdate=!0}else x.count=0,we>=ne&&(T=null)}return{update:_,hide:A}}const Xt=Ye.epicSiting,Bv=Math.PI/180;function Gv(n,e){let t=(n-e)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Cu(n,e=Xt.bearingDegrees){const t=e*Bv,i=Math.atan2(n.fx,n.fz);let r=null;for(let s=0;s<Xt.samples;s++){const a=i+(n.rng()*2-1)*t,o=Xt.minDistance+n.rng()*(Xt.maxDistance-Xt.minDistance),c=n.px+Math.sin(a)*o,l=n.pz+Math.cos(a)*o;if(n.isSubmerged(c,l))continue;const u=n.heightAt(c,l);if(u<n.seaLevel+Xt.seaMargin||n.slopeAt(c,l)>Xt.maxSlope||n.isClear&&!n.isClear(c,l,Xt.clearance)||!Hv(n,c,l,u)||n.isInFrame&&!n.isInFrame(c,u,l))continue;const h=(Xt.minDistance+Xt.maxDistance)/2,f=-Math.abs(Gv(a,i))*14-Math.abs(o-h)*.5;(!r||f>r.score)&&(r={x:c,y:u,z:l,score:f})}return r}function Fd(n){return Cu(n,Xt.bearingDegrees)??Cu(n,Xt.relaxedBearingDegrees)}function Hv(n,e,t,i){const r=n.heightAt(n.px,n.pz)+1.6,s=i+1.5,a=12;for(let o=1;o<a;o++){const c=o/a,l=n.px+(e-n.px)*c,u=n.pz+(t-n.pz)*c,h=r+(s-r)*c;if(n.heightAt(l,u)>h)return!1}return!0}function Vv(n,e,t){return Math.hypot(n.x-e,n.z-t)>Xt.abandonDistance}function _l(n){const e=n.px+n.fx*Xt.fallbackDistance,t=n.pz+n.fz*Xt.fallbackDistance;return{x:e,y:n.heightAt(e,t),z:t,score:-1/0}}const as=Xt,Wv={trinket_maker:{name:"the trinket maker",kind:"maker",greeting:"kia ora. what have you got there?",_reactionNote:"Keyed by tier. Junk is accepted warmly and moves nothing: generosity has to cost something or it is not generosity. Tier 4 and up also buy a sighting.",reactions:{1:['she turns it over once and tucks it away. "chur."','"oh, a good little one." it goes in the tin with the others.',"she nods. the puoro does not stop."],2:[`"now that's a keeper." she holds it up to the light.`,'she thumbs the edge of it, pleased. "someone would want this."','"ka pai." it goes somewhere better than the tin.'],3:[`she stops playing. "where'd you get this?"`,`"oh. oh, that's a nice one, e hoa." she does not put it down.`,"she turns it slowly, the whole way round, and says nothing for a bit."],4:['"aue." she goes quiet. "you found this? out there?"',"she laughs, once, delighted, and puts down the puoro to hold it properly.",'"kei te pai rawa atu." she looks at you differently after that.'],5:[`she does not take it straight away. she looks at it, then at you, then at the ngāhere. "that's not from here," she says. "you know that, eh."`,'"where were you standing when you picked this up." it is not a question. she wraps it in cloth before she takes it.'],6:["she takes it in both hands and does not look at it. she looks past you, at the ridge."]},_tier6Note:"She ACCEPTS a tier 6. The earlier line had her refuse it ('that one's for Karu'), which contradicted the milestone that fires on the same gift while the kete removed the item. The Karu reveal is a milestone line, queued after this one.",_sightingNote:"Tier 4 and up buy a sighting: she tells you where she has seen one. TELLING ONLY. The cryptids are not built, so nothing is placed in the world and the sighting promises no destination.",revealsAtTier:4,sightings:[{creature:"grotto mermaids",site:"grotto_mermaids",lines:[`"the grotto mermaids — south end, where the rocks go under. only at low tide, and only if you're already quiet."`,`"there's a cave down that way the sea only lets you into twice a month. that's where the grotto mermaids are."`]},{creature:"moana kelpī",site:"moana_kelpii",lines:[`"moana kelpī come up the estuary when it rains hard. they look like driftwood until they don't."`,`"saw a moana kelpī standing in the shallows off the point once. stood there an hour. then it wasn't there."`]},{creature:"patupaiarehe",site:"patupaiarehe",lines:[`"patupaiarehe are up in the mist on the ridge. don't go looking. they'll find you if they want to."`,`"the bush past the treeline goes cold in patches. that's patupaiarehe. keep walking."`]}],_milestonesNote:"Fired ONCE each, on the transition, queued behind the reaction line (tuning.progression.delayMs), and remembered in the save so a restored game never replays them. Action and warning only: she never says what Karu is, what the door is, or who made either. That is hers to write.",milestones:{doorway:`she puts the puoro down. behind her, where there was bush, there is a way through. "i wouldn't," she says. "but you will. there's a way back. i've never found it."`,karu:"she stands, which she has not done before, and walks past you into the trees. something is waiting there that looks at you."}},wanderer_a:{name:"a wanderer",kind:"wanderer",greeting:"she looks up.",reactions:{1:['"cheers." she pockets it.'],2:['"oh, tidy." she turns it over.'],3:[`"you sure? that's a nice one." she takes it anyway.`],4:['she stares at it. "you should show that to the one with the puoro."'],5:[`"nah. nah, take that to her. that's not for me."`],6:['"take that to her. right now."']},revealsAtTier:99,sightings:[]},wanderer_b:{name:"a wanderer",kind:"wanderer",greeting:"he tips his chin at you.",reactions:{1:['"choice."'],2:['"oh mean." he holds it up.'],3:['"far out. where."'],4:['"bro." a long pause. "bro."'],5:["he does not take it. he takes a step back from it."],6:["he does not take it. he takes a step back from you."]},revealsAtTier:99,sightings:[]},grotto_mermaids:{name:"grotto mermaids",kind:"cryptid",speaks:!1,greeting:"there is a pale shape under the water. it was not there a moment ago.",_verbNote:"Quieter than the maker's 'give something to'. You do not give to a shape in the water; you hold a thing out and see.",givePrompt:"hold something out",giveHead:"hold it out",_reactionNote:"No arm, no limb, no hair. A shape under the surface and a rock whose shadow is wrong. That is all anyone has seen.",reactions:{1:["the shape does not move. the water moves."],2:["the shape does not move. the water moves."],3:["the water is very still for a moment."],4:["the pale shape turns, maybe. the water is empty."],5:["the pale shape is closer than it was. then the water is empty."],6:["the water is empty before you have finished holding it out."]},grantsAtTier:5,grantsTier:6,revealsAtTier:99,sightings:[]},moana_kelpii:{name:"moana kelpī",_idNote:"id is ASCII only; the name field is the spelling, as she wrote it.",kind:"cryptid",speaks:!1,greeting:"driftwood, at the mouth of the creek. it is standing.",_greetingDownNote:"Said instead of greeting while the driftwood is lying down: after it has taken a gift and until its grant is collected (render/cryptids.js kelpiiDown), and from beyond standRadius. The greeting used to assert it was standing over a frame of it lying.",greetingDown:"driftwood, at the mouth of the creek. it is lying down.",givePrompt:"hold something out",giveHead:"hold it out",reactions:{1:["the driftwood is driftwood."],2:["the driftwood is driftwood."],3:["the driftwood is not quite where it was."],4:["the driftwood turns, slowly, the way driftwood does not."],5:["the driftwood is standing. it was not standing. it takes the thing and is driftwood again."],6:["the driftwood is lying down. it was lying down the whole time."]},grantsAtTier:5,grantsTier:6,revealsAtTier:99,sightings:[]},patupaiarehe:{name:"patupaiarehe",kind:"place",speaks:!1,_note:"A place, not a character. Her line is 'don't go looking. they'll find you if they want to.' So there is nobody here to hand a thing to and nothing that answers: recipientInReach never returns this id, the reactions object is empty on purpose, and the only feedback anywhere is the fog and the cold. The player may LEAVE a gift on the ground inside the area; the tier 6 comes only after they have walked out of the fog and turned back, with no line at all. Patupaiarehe are treated with real caution in Māori tradition, and a vending-machine framing would be wrong twice over.",greeting:"",reactions:{},_leaveNote:"The verb here is never 'give'. leavePrompt is the HUD line inside the fog with something in the kete; leaveHead is the card's whole heading, verbatim, with no name and no 'give to' in front of it. Both placeholders, both hers to rewrite.",leavePrompt:"leave something here",leaveHead:"leave it here",grantsAtTier:5,grantsTier:6,revealsAtTier:99,sightings:[]}},ps={recipients:Wv},Od=Ye.giving;function Ea(n){return ps.recipients[n]??null}function Xv(n){return!!ps.recipients[n]}function _o(n,e){return!n||n.length===0?null:n[Math.min(n.length-1,Math.floor(e()*n.length))]}function qv({recipientId:n,tier:e,knownCreatures:t=[],rng:i}){const r=Ea(n);if(!r)return{accepted:!1,kGain:0,line:"",sighting:null};const s=String(e),a=_o(r.reactions?.[s],i)??"",o=Ye.discernment.givingGain[s]??0;let c=null;if(e>=(r.revealsAtTier??99)&&r.sightings?.length){const l=r.sightings.filter(d=>!t.includes(d.creature)),u=l.length?l:r.sightings,h=_o(u,i);h&&(c={creature:h.creature,line:_o(h.lines,i)??""})}return{accepted:!0,kGain:o,line:a,sighting:c}}function Yv(n,e,t){let i=null,r=Od.reachMetres;for(const s of n){if(!Xv(s.id))continue;const a=Math.hypot(s.x-e,s.z-t);a<r&&(r=a,i=s)}return i}const Gn=Od,$v={radius:22,senseRadius:45,findsPerSite:2,findMinFromSite:4,findMaxSlope:.5},Kv={minFromSite:11,maxFromSite:40,clearingMetres:18,maxSlope:.36,maxWaterDepth:.4,searchStep:2,shoreBandMetres:12,dryMarginMetres:.12,sightClearMetres:1.2,findClearMetres:3,score:{inFrame:3,visible:2,offsetPenalty:.6,distanceTie:.01,sightLine:10},directions:16},Zv={cameraDistance:9,cameraPitchDeg:25,cameraEyeMetres:1.7,giveStandMetres:2.4,kelpiiCentreMetres:2.2,playerHeadMetres:1.6},Jv={reachFraction:.75,placeReachMetres:6},Qv={lineHoldMs:2200},jv={grotto_mermaids:{name:"grotto mermaids",_note:"'south end, where the rocks go under'. The shoreline (inland 1-6) at negative x, wherever the outcrop field is highest. The rock field is gated to zero at the shore in the height profile, so the grotto is where the rock WOULD be; the visible rocks there are dressing.",search:{xMin:-150,xMax:-50,inlandMin:1,inlandMax:6},scanStep:2,fallback:{x:-100,inland:3},_stillNote:"'only if you're already quiet'. No tide system: the pale shape is only ABOVE the water while the player has been still for stillSeconds within stillRadius, and slips under when they move. Giving works regardless; the stillness is for looking.",stillSeconds:1.5,stillRadius:12,_shapeNote:"Where the pale shape lies: sideMetres across from the site, then seaward from the site until the ground is depthMetres under the sea, then pastMetres further out. Found per site, not a fixed offset: at a fixed inland+4 the shape on the default seed was 9cm under the sand and the line 'the pale shape is closer than it was' played over a frame with nothing in the water.",shape:{sideMetres:-3,depthMetres:.25,pastMetres:1.5,maxScanMetres:40,scanStep:.5}},moana_kelpii:{name:"moana kelpī",_note:"'come up the estuary'. The estuary mouth: the lowest-inland point at positive x where the stream mask first reaches maskMin. The channel reach only opens past inland 30, so a mask above 0.3 first exists in the forties; searching 30-40 for 0.5 is unsatisfiable and would fall back on every seed.",search:{xMin:40,xMax:150,inlandMin:42,inlandMax:70},scanStep:2,maskMin:.3,_relaxNote:"Streams are sparse: on two seeds in five the tight window has no estuary mouth at all. Relaxed, never cancelled — the second pass widens the window and lowers the mask floor before the fixed fallback, which is a dry spot with no creek and the worst outcome for a thing that is meant to be driftwood at a river mouth.",relax:{xMax:220,inlandMax:100,maskMin:.2},fallback:{x:90,inland:50},_standNote:"'they look like driftwood until they don't'. The billboard lies down from senseRadius in and only stands inside standRadius.",standRadius:8},patupaiarehe:{name:"patupaiarehe",_note:"'up in the mist on the ridge. don't go looking.' Deep bush, on a local high point. This is a PLACE, not a character: nothing here is drawn as a figure, nothing reacts, and the recipient entry has no reactions. The fog ramps from senseRadius in — that IS her 'cold in patches' line.",search:{xMin:-90,xMax:90,inlandMin:95,inlandMax:140},scanStep:3,localMaxRadius:6,fallback:{x:0,inland:110},fog:{_note:"Fog colour and near-distance at full warmth. Integration lerps the scene fog toward these by warmth; the render module also drops local fog sprites so the patch reads even before the scene fog moves.",colour:"#b9c4cc",near:8,far:34}}},eM={turnBackDot:.2},gi={cryptidArea:$v,landing:Kv,sight:Zv,debug:Jv,grant:Qv,sites:jv,leftGift:eM},ni=gi.cryptidArea,wt=gi.landing;function tM(n){return Math.min(1,Math.max(0,n))}function zd(n,e,t){return t-n.inlandAt(e,0)}function wa(n,e,t){return n.isSubmerged(e,t)?!1:n.inlandAt(e,t)<wt.shoreBandMetres?kd(n,e,t):n.waterDepthAt(e,t)<wt.maxWaterDepth}function kd(n,e,t){return n.heightAt(e,t)>Qr+wt.dryMarginMetres}function Pu(n,e,{px:t,pz:i,fx:r,fz:s,isInFrame:a,isVisible:o,frameOffset:c,avoid:l=[],reject:u=[]}){const h=wt.score,d=wt.directions,f=wt.findClearMetres*wt.findClearMetres,g=[];for(let p=wt.minFromSite;p<=wt.maxFromSite;p+=wt.searchStep)for(let m=0;m<d;m++){const T=m/d*Math.PI*2,w=e.x+Math.sin(T)*p,S=e.z+Math.cos(T)*p;if(!wa(n,w,S)||n.slopeAt(w,S)>wt.maxSlope||l.some(L=>(L.x-w)**2+(L.z-S)**2<f)||u.some(L=>Math.abs(L.x-w)<.5&&Math.abs(L.z-S)<.5))continue;const E=n.heightAt(w,S),b=w-t,A=S-i,_=Math.hypot(b,A)||1,y=(b*r+A*s)/_,C=o?!!o(w,E,S):!0,D=C&&!!(a&&a(w,E,S)),I=!!o&&C,O=nM(t,i,w,S,e);let U=y;D?U+=h.inFrame:I&&(U+=h.visible-(c?h.offsetPenalty*c(w,E,S):0)),U-=Math.abs(p-wt.minFromSite)*h.distanceTie,O&&(U-=h.sightLine),g.push({x:w,y:E,z:S,ahead:y,inFrame:D,visible:I,behindSite:O,score:U})}if(g.length===0)return e.landing;const x=[p=>p.inFrame&&p.ahead>.15&&!p.behindSite,p=>p.visible&&p.ahead>.15&&!p.behindSite,p=>p.ahead>.15&&!p.behindSite,p=>p.ahead>.15,()=>!0];for(const p of x){let m=null;for(const T of g)p(T)&&(!m||T.score>m.score)&&(m=T);if(m)return{x:m.x,y:m.y,z:m.z}}return e.landing}function Bd(n,e,t){const i=[],r=wt.directions;for(let o=0;o<r;o++){const c=o/r*Math.PI*2;i.push({a:c,off:Math.abs(Math.atan2(Math.sin(c),Math.cos(c)))})}i.sort((o,c)=>o.off-c.off);for(let o=wt.minFromSite;o<=wt.maxFromSite;o+=wt.searchStep)for(const{a:c}of i){const l=e+Math.sin(c)*o,u=t+Math.cos(c)*o;if(wa(n,l,u)&&!(n.slopeAt(l,u)>wt.maxSlope))return{x:l,y:n.heightAt(l,u),z:u}}const s=e,a=t+wt.minFromSite;return{x:s,y:n.heightAt(s,a),z:a}}function nM(n,e,t,i,r){const s=t-n,a=i-e,o=s*s+a*a;if(o<1e-6)return!1;const c=((r.x-n)*s+(r.z-e)*a)/o;if(c<=0||c>=1)return!1;const l=n+s*c,u=e+a*c;return Math.hypot(r.x-l,r.z-u)<wt.sightClearMetres}function Xl(n,e,t,i){let r=null;for(let s=e.inlandMin;s<=e.inlandMax+1e-9;s+=t)for(let a=e.xMin;a<=e.xMax+1e-9;a+=t){const o=zd(n,a,s),c=i(a,o,s);c!==-1/0&&(!r||c>r.s)&&(r={x:a,z:o,inland:s,s:c})}return r}function Du(n,e,t){const i=Ye.epicSiting,r=t.x-e.x,s=t.z-e.z,a=r*r+s*s;if(a<1e-6)return!1;const o=Dr((e.x+t.x)/2),c=Dr((e.z+t.z)/2);for(let l=-1;l<=1;l++)for(let u=-1;u<=1;u++)for(const h of n(o+l,c+u)){if(h.kind!=="tree")continue;const d=((h.x-e.x)*r+(h.z-e.z)*s)/a;if(d<=.08||d>=1)continue;const f=e.x+r*d,g=e.z+s*d,x=h.scale??6,p=Math.max(i.canopyRadius,x*i.canopyRadiusOfHeight);if((h.x-f)**2+(h.z-g)**2>p*p)continue;const m=e.y+(t.y-e.y)*d,T=h.y??0;if(m>T+x*i.canopyBandFrom&&m<T+x)return!0}return!1}function iM(n,e,t,i){const r=gi.sight,s=Bd(n,t,i),a=s.x-t,o=s.z-i,c=Math.hypot(a,o)||1,l=a/c,u=o/c,h=t+l*r.giveStandMetres,d=i+u*r.giveStandMetres,f=r.cameraPitchDeg*(Math.PI/180),g=r.cameraDistance*Math.cos(f),x=r.cameraDistance*Math.sin(f),p=h+l*g,m=d+u*g,T={x:p,y:n.heightAt(h,d)+x+r.cameraEyeMetres,z:m};return!(Du(e,T,{x:t,y:n.heightAt(t,i)+r.kelpiiCentreMetres,z:i})||Du(e,T,{x:h,y:n.heightAt(h,d)+r.playerHeadMetres,z:d}))}function rM(n,e){const t=gi.sites.grotto_mermaids.shape,i=e.x+t.sideMetres;for(let r=0;r<=t.maxScanMetres;r+=t.scanStep){const s=e.z-r;if(n.heightAt(i,s)<Qr-t.depthMetres)return{x:i,z:s-t.pastMetres}}return null}function sM(n,e){return Xl(n,e.search,e.scanStep,(t,i)=>kd(n,t,i)?n.rockAt(t,i):-1/0)}function aM(n,e,t){const i=(r,s)=>Xl(n,r,e.scanStep,(a,o,c)=>{const{mask:l}=n.channelAt(a,o,n.inlandAt(a,o));return l<s||n.isSubmerged(a,o)||!n.nearWaterAt(a,o)||t&&!iM(n,t,a,o)?-1/0:-c-Math.abs(a-r.xMin)*1e-4});return i(e.search,e.maskMin)??i({...e.search,...e.relax},e.relax.maskMin)}function oM(n,e){const t=e.localMaxRadius;return Xl(n,e.search,e.scanStep,(i,r)=>{if(!wa(n,i,r)||n.slopeAt(i,r)>wt.maxSlope)return-1/0;const s=n.heightAt(i,r);return s<=n.heightAt(i+t,r)||s<=n.heightAt(i-t,r)||s<=n.heightAt(i,r+t)||s<=n.heightAt(i,r-t)?-1/0:s})}const lM={grotto_mermaids:sM,moana_kelpii:aM,patupaiarehe:oM};function cM(n,e,t=null){const i=[];for(const[r,s]of Object.entries(gi.sites)){const a=lM[r]?.(n,s,t)??null;let o,c,l=!1;a?(o=a.x,c=a.z):(o=s.fallback.x,c=zd(n,o,s.fallback.inland),l=!0);const u=ps.recipients[r]?.kind==="place"?"place":"cryptid";i.push({id:r,name:s.name,kind:u,x:o,y:n.heightAt(o,c),z:c,inland:n.inlandAt(o,c),landing:Bd(n,o,c),water:r==="grotto_mermaids"?rM(n,{x:o,z:c}):null,fellBack:l})}return i}const xo=mi.items.filter(n=>n.biome==="authored"&&n.tier===5);function uM(n,e,t){const i=[];for(const r of n)for(let s=0;s<ni.findsPerSite;s++){const a=pi(e,"cryptid",r.id,s);let o=r.landing.x,c=r.landing.z;for(let u=0;u<40;u++){const h=a()*Math.PI*2,d=ni.findMinFromSite+a()*(ni.radius-ni.findMinFromSite),f=r.x+Math.sin(h)*d,g=r.z+Math.cos(h)*d;if(wa(t,f,g)&&!(t.slopeAt(f,g)>ni.findMaxSlope)){o=f,c=g;break}}const l=xo[Math.min(xo.length-1,Math.floor(a()*xo.length))];i.push({id:`cryptid:${r.id}:${s}`,itemId:l.id,tier:5,x:o,y:t.heightAt(o,c),z:c,rot:a()*Math.PI*2,biome:"beach",nearWater:!1,tierRoll:0,itemRoll:0,isCryptidFind:!0,siteId:r.id})}return i}function dM(n){return n.filter(e=>e.kind!=="place").map(e=>({id:e.id,x:e.x,z:e.z}))}function Gd(n,e){const t=ps.recipients[n];return!t||t.grantsAtTier==null||t.grantsTier==null?null:e===t.grantsAtTier?{tier:t.grantsTier}:null}function hM(n,e,t){const i={};for(const r of n){const s=Math.hypot(r.x-e,r.z-t);i[r.id]=tM(1-(s-ni.radius)/(ni.senseRadius-ni.radius))}return i}function fM(n,e,t){return n.map(i=>({s:i,d:Math.hypot(i.x-e,i.z-t)})).sort((i,r)=>i.d-r.d).map(i=>i.s)}function pM({site:n,px:e,pz:t,stillSeconds:i}){const r=gi.sites.grotto_mermaids;return Math.hypot(n.x-e,n.z-t)>r.stillRadius?!1:i>=r.stillSeconds}function Hd(n,e,t){return Math.hypot(n.x-e,n.z-t)<=gi.sites.moana_kelpii.standRadius}function mM(){let n=null;return{get pending(){return n?{...n}:null},leave(e,t,i){n={siteId:e,at:t,away:!1,tier:i}},update(e,t,i,r,s){if(!n)return null;const a=e.find(f=>f.id===n.siteId);if(!a)return null;const o=a.x-t,c=a.z-i,l=Math.hypot(o,c);if(!n.away)return l>=ni.radius&&(n.away=!0),null;if((o*r+c*s)/(l||1)<gi.leftGift.turnBackDot)return null;const h=Gd(n.siteId,n.tier),d=n.siteId;return n=null,h?{siteId:d,grant:h}:null},serialize(){return n?{...n}:null},restore(e){n=e?{...e}:null}}}const ui=gi;function Iu(n,e){const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d"),s=r.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);s.addColorStop(0,n),s.addColorStop(.5,e),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,128,128);const a=new Sn(i);return a.colorSpace=dt,a}function gM(){const t=document.createElement("canvas");t.width=256,t.height=128;const i=t.getContext("2d");i.translate(256/2,128/2),i.scale(1,.42);const r=i.createRadialGradient(0,0,0,0,0,256/2);r.addColorStop(0,"rgba(226, 232, 226, 0.78)"),r.addColorStop(.55,"rgba(206, 218, 214, 0.42)"),r.addColorStop(1,"rgba(190, 206, 204, 0)"),i.fillStyle=r,i.beginPath(),i.arc(0,0,256/2,0,Math.PI*2),i.fill();const s=new Sn(t);return s.colorSpace=dt,s}function _M(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),i=new Path2D;for(let s=0;s<=40;s++){const a=s/40*Math.PI*2,o=46+Math.sin(a*3+.4)*7+Math.sin(a*7)*3,c=128/2+Math.cos(a)*o,l=128/2+12+Math.sin(a)*o*.72;s===0?i.moveTo(c,l):i.lineTo(c,l)}i.closePath(),t.fillStyle="#5a5650",t.fill(i),t.strokeStyle="#2b2118",t.lineWidth=5,t.lineJoin="round",t.stroke(i),t.fillStyle="rgba(200, 214, 214, 0.35)",t.beginPath(),t.ellipse(128/2-8,128/2+30,22,6,0,0,Math.PI*2),t.fill();const r=new Sn(e);return r.colorSpace=dt,r}function Lu(n){const t=document.createElement("canvas");t.width=192,t.height=192;const i=t.getContext("2d");i.translate(192/2,192/2),n&&i.rotate(-Math.PI/2+.12);const r=new Path2D;r.moveTo(-84,-6),r.bezierCurveTo(-60,-22,-20,-10,8,-16),r.bezierCurveTo(40,-24,70,-12,86,-4),r.bezierCurveTo(78,10,44,14,12,12),r.bezierCurveTo(-24,10,-56,20,-84,8),r.closePath(),i.fillStyle="#c9bda4",i.fill(r),i.strokeStyle="#2b2118",i.lineWidth=5,i.lineJoin="round",i.stroke(r),i.strokeStyle="rgba(90, 74, 52, 0.55)",i.lineWidth=2;for(let a=0;a<4;a++)i.beginPath(),i.moveTo(-70,-4+a*5),i.bezierCurveTo(-30,-12+a*5,20,2+a*4,72,-2+a*3),i.stroke();const s=new Sn(t);return s.colorSpace=dt,s}function xM(n){const e=new $t(1,1),t=(E,{blending:b=Di,depthWrite:A=!1}={})=>{const _=new at(e,new Yt({map:E,transparent:!0,depthWrite:A,blending:b,toneMapped:!1,side:Tt}));return _.frustumCulled=!1,_.visible=!1,n.add(_),_},i=E=>{const b=new at(e,new Yt({map:E,transparent:!1,alphaTest:.5,side:Tt,toneMapped:!1}));return b.frustumCulled=!1,b.visible=!1,n.add(b),b},r=t(gM());r.rotation.x=-Math.PI/2,r.renderOrder=2;const s=i(_M()),a=pa(1.1);a.visible=!1,n.add(a);const o=i(Lu(!1)),c=i(Lu(!0)),l=pa(1.3);l.visible=!1,n.add(l);const u=new Ie(ui.sites.patupaiarehe.fog.colour),h=Iu(`rgba(${Math.round(u.r*255)}, ${Math.round(u.g*255)}, ${Math.round(u.b*255)}, 0.55)`,`rgba(${Math.round(u.r*255)}, ${Math.round(u.g*255)}, ${Math.round(u.b*255)}, 0.22)`),d=14,f=Array.from({length:d},()=>t(h)),g=Array.from({length:d},(E,b)=>{const A=b*2.39996,_=ui.cryptidArea.radius*.85*Math.sqrt((b+.5)/d);return{dx:Math.cos(A)*_,dz:Math.sin(A)*_,s:7+b%3*2.5,ph:b*.7}}),x=Iu("rgba(214, 236, 255, 0.9)","rgba(170, 206, 240, 0.35)"),p=t(x,{blending:Ii});let m={},T=!1;function w(){r.visible=!1,s.visible=!1,a.visible=!1,o.visible=!1,c.visible=!1,l.visible=!1;for(const E of f)E.visible=!1;p.visible=!1}function S(E,b,A,{nowMs:_=0,stillSeconds:y=0,kelpiiDown:C=!1}={}){if(!E||E.length===0)return w(),m={},m;m=hM(E,b.x,b.z);const D=_/1e3;for(const I of E){const O=m[I.id]??0;if(I.id==="grotto_mermaids"){s.visible=!0,s.position.set(I.x,I.y,I.z),s.scale.set(2.2,2.2,1),s.position.y+=1.1-.2,nn(s,A),a.visible=!0,a.position.set(I.x-.9,I.y+.03,I.z-1.6),a.scale.setScalar(1.35);const U=!T&&pM({site:I,px:b.x,pz:b.z,stillSeconds:y});if(r.visible=U,U){const L=Math.min(1,(y-ui.sites.grotto_mermaids.stillSeconds)/1.2+.15);r.material.opacity=.55*L;const H=Math.sin(D*.35)*.4;if(!I.water){r.visible=!1;continue}r.position.set(I.water.x+H,-.02,I.water.z),r.scale.set(6,3,1),r.rotation.z=.5+Math.sin(D*.2)*.08}}else if(I.id==="moana_kelpii"){const U=O>0,L=U&&!C&&Hd(I,b.x,b.z);o.visible=U&&!L,c.visible=L,l.visible=U;const H=L?c:o;U&&(H.position.set(I.x,I.y+(L?2.2:.55),I.z),H.scale.set(L?3.6:3.2,L?4.4:1.4,1),nn(H,A),l.position.set(I.x,I.y+.03,I.z),l.scale.setScalar(L?.7:1.4))}else if(I.id==="patupaiarehe"){const U=O>.02;for(let L=0;L<f.length;L++){const H=f[L];if(H.visible=U,!U)continue;const X=g[L],Z=Math.sin(D*.18+X.ph)*.5;H.position.set(I.x+X.dx+Z,I.y+1.2+Math.sin(D*.11+X.ph)*.3,I.z+X.dz),H.scale.set(X.s,X.s*.62,1),H.material.opacity=.28+.42*O,nn(H,A)}if(p.visible=U,U){const L=.55+Math.sin(D*.9)*.25;p.position.set(I.x+3.5,I.y+1.9+Math.sin(D*.5)*.15,I.z-2.5),p.scale.setScalar(1.4+.5*O),p.material.opacity=(.35+.65*O)*L,nn(p,A)}}}return m}return{update:S,hide:w,get warmth(){return{...m}},get positions(){const E=b=>b.visible?{x:b.position.x,y:b.position.y,z:b.position.z}:null;return{shape:E(r),driftwood:E(c)??E(o),rock:E(s)}},set holdShape(E){T=!!E},get shown(){return{shape:r.visible,rock:s.visible,lying:o.visible,standing:c.visible,fog:f.filter(E=>E.visible).length,cold:p.visible}}}}const wr=Ye.progression,vM=["doorway","karu"];function ql(n,e=wr.recipient){let t=0,i=0;for(const r of n??[])r.to===e&&(r.tier===5?t++:r.tier>=6&&i++);return{epicsGiven:t,epicEpicsGiven:i,doorway:t>=wr.doorwayAt,karu:i>=wr.karuAt}}function MM(n,e){const t=new Set(e??[]);return vM.filter(i=>n[i]&&!t.has(i))}function SM(n){return ps.recipients[wr.recipient]?.milestones?.[n]??""}function yM(n){return n?.doorway?wr.afterDoorwayPityMult:1}const ms=wr,bM={greet:"the eye turns to you. it does not blink.",enterWorld:"it goes through first.",elsewhere:"it looks at the place for a long time, then at you.",thisWay:"it drifts on. it waits when you stop.",home:"it is still with you."},EM=400,wM={sizeMetres:1,ink:"#2b2118",ringWidth:.11,haloAlpha:.22},TM={hoverMetres:2,aheadMin:3,aheadMax:4,driftSpeed:3.2,catchUpDistance:9,catchUpSpeed:6,stillSpeed:.3,bobMetres:.12,bobHz:.45,groundClearance:1.2,steerStepDeg:15,steerMaxDeg:150,steerLineStepMetres:.5,preferDryWithinDeg:60,stuckSec:6,stuckProgressMetres:.75,stuckSteerMaxDeg:180,spawnAtHer:{x:2.5,z:5},spawnAfterCrossing:{x:1,z:-2}},AM={fps:8,frames:3,minSec:6,maxSec:11,firstBlinkDelaySec:4},RM={heightMetres:40,widthMetres:2.4,colour:"#ffd08a",alpha:.8,flickerHz:.8},Ta={lines:bM,lineDelayMs:EM,glyph:wM,motion:TM,blink:AM,light:RM},Ut=Ta.motion,Xi=Ta.blink;function CM({px:n,pz:e,fx:t,fz:i,target:r=null,walkable:s=null,dryAt:a=null,wide:o=!1,prevOff:c=0}){const l=(Ut.aheadMin+Ut.aheadMax)/2;let u=t,h=i;if(r){const w=r.x-n,S=r.z-e,E=Math.hypot(w,S);if(E<l)return{x:r.x,z:r.z,off:0,dry:!0};u=w/E,h=S/E}const d={x:n+u*l,z:e+h*l,off:0,dry:!0};if(!s)return d;const f=Math.atan2(u,h),g=Ut.steerStepDeg*(Math.PI/180),x=(o?Ut.stuckSteerMaxDeg:Ut.steerMaxDeg)*(Math.PI/180),p=(o?Ut.stuckSteerMaxDeg:Ut.preferDryWithinDeg)*(Math.PI/180),m=w=>{const S=f+w,E=n+Math.sin(S)*l,b=e+Math.cos(S)*l;return PM(s,n,e,E,b)?{x:E,z:b,off:w,dry:a?a(E,b):!0}:null};let T=null;e:for(let w=0;w<=x+1e-9&&!(T&&w>p+1e-9);w+=g)for(const S of w===0?[1]:[1,-1]){const E=m(S*w);if(E){if(E.dry&&w<=p+1e-9){T=E;break e}if(T||(T=E),!a)break e}}if(!T)return d;if(T.off===0)return T;if(c!==0&&Math.abs(c)<=x+1e-9){const w=m(c);if(w&&(w.dry||!T.dry))return w}return T}function PM(n,e,t,i,r){const s=Math.hypot(i-e,r-t),a=Math.max(1,Math.ceil(s/Ut.steerLineStepMetres));for(let o=1;o<=a;o++){const c=o/a;if(!n(e+(i-e)*c,t+(r-t)*c))return!1}return!0}function DM(n,e){if(e<0||n<e)return 0;const t=Math.floor((n-e)/1e3*Xi.fps);return t<xl.length?xl[t]:0}const xl=(()=>{const n=Math.max(2,Xi.frames),e=Array.from({length:n},(i,r)=>r),t=e.slice(1,-1).reverse();return e.concat(t)})();function IM(){return xl.length/Xi.fps*1e3}function LM(n=Math.random){const e={present:!1,x:0,y:0,z:0,goal:{x:0,z:0},goalOff:0,last:null,blinkStartMs:-1,nextBlinkMs:-1,bobT:0,targetKey:"",bestTargetD:1/0,noProgressSec:0,escaping:!1},t=s=>s+(Xi.minSec+n()*(Xi.maxSec-Xi.minSec))*1e3;function i(s,a){e.present=s,s&&a&&(e.x=a.x,e.z=a.z,e.goal={x:a.x,z:a.z},e.goalOff=0,e.last=null,e.targetKey="",e.bestTargetD=1/0,e.noProgressSec=0,e.escaping=!1,e.blinkStartMs=-1,e.nextBlinkMs=-1)}function r({dt:s,nowMs:a,player:o,target:c=null,heightAt:l,walkable:u=null,dryAt:h=null}){if(!e.present)return;const d=e.last?Math.hypot(o.x-e.last.x,o.z-e.last.z):0,f=s>0?d/s:0;if(c){const E=`${c.x}:${c.z}`;E!==e.targetKey&&(e.targetKey=E,e.bestTargetD=1/0,e.noProgressSec=0);const b=Math.hypot(c.x-o.x,c.z-o.z);b<e.bestTargetD-Ut.stuckProgressMetres||e.bestTargetD===1/0?(e.bestTargetD=b,e.noProgressSec=0):e.noProgressSec+=s,e.noProgressSec>=Ut.stuckSec&&(e.escaping=!0)}if((!c||h&&h(o.x,o.z))&&(e.escaping=!1,e.noProgressSec=0),!e.last||f>=Ut.stillSpeed||c){const E=CM({px:o.x,pz:o.z,fx:Math.sin(o.yaw),fz:Math.cos(o.yaw),target:c,walkable:u,dryAt:h,wide:e.escaping,prevOff:e.goalOff});e.goal={x:E.x,z:E.z},e.goalOff=E.off}e.last={x:o.x,z:o.z};const g=e.goal.x-e.x,x=e.goal.z-e.z,p=Math.hypot(g,x),T=(Math.hypot(o.x-e.x,o.z-e.z)>Ut.catchUpDistance?Ut.catchUpSpeed:Ut.driftSpeed)*s;if(p>1e-4){const E=Math.min(p,T);e.x+=g/p*E,e.z+=x/p*E}e.bobT+=s;const w=Math.sin(e.bobT*Math.PI*2*Ut.bobHz)*Ut.bobMetres,S=l(e.x,e.z);e.y=Math.max(S+Ut.groundClearance,S+Ut.hoverMetres+w),e.nextBlinkMs<0&&(e.nextBlinkMs=a+Xi.firstBlinkDelaySec*1e3),e.blinkStartMs>=0&&a-e.blinkStartMs>=IM()&&(e.blinkStartMs=-1,e.nextBlinkMs=t(a)),e.blinkStartMs<0&&a>=e.nextBlinkMs&&(e.blinkStartMs=a),e.lastNowMs=a}return{setPresent:i,update:r,get present(){return e.present},get pos(){return{x:e.x,y:e.y,z:e.z}},get goal(){return{...e.goal}},get escaping(){return e.escaping},get blinkFrame(){return DM(e.lastNowMs??0,e.blinkStartMs)},line(s){return Ta.lines[s]??""},serialize(){return{present:e.present,x:e.x,z:e.z}},restore(s){if(!s){i(!1);return}i(!!s.present,{x:s.x??0,z:s.z??0})}}}const Lr=Ta,Mr=Lr.glyph,Ti=Lr.light;function NM(n){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d"),r=128/2,s=128/2,a=44,o=Math.max(3,a*(1-n)),c=i.createRadialGradient(r,s,a*.6,r,s,a*1.4);c.addColorStop(0,`rgba(255, 246, 220, ${Mr.haloAlpha})`),c.addColorStop(1,"rgba(255, 246, 220, 0)"),i.fillStyle=c,i.fillRect(0,0,128,128);const l=new Path2D;for(let h=0;h<=72;h++){const d=h/72*Math.PI*2,f=1+Math.sin(d*5+.4)*.035+Math.sin(d*3-1.1)*.025,g=r+Math.cos(d)*a*f,x=s+Math.sin(d)*o*f;h===0?l.moveTo(g,x):l.lineTo(g,x)}l.closePath(),i.strokeStyle=Mr.ink,i.lineWidth=a*Mr.ringWidth*2,i.lineJoin="round",i.stroke(l),i.fillStyle=Mr.ink,i.beginPath(),i.ellipse(r,s,a*.34,o*.34,0,0,Math.PI*2),i.fill(),i.strokeStyle=Mr.ink,i.lineCap="round",i.lineWidth=5,i.beginPath(),i.moveTo(r+a*.95,s-o*.55),i.quadraticCurveTo(r+a*1.25,s-o*.95-6,r+a*1.4,s-o*1.15-12),i.stroke();const u=new Sn(t);return u.colorSpace=dt,u}function UM(){const t=document.createElement("canvas");t.width=16,t.height=256;const i=t.getContext("2d"),r=i.createLinearGradient(0,256,0,0);r.addColorStop(0,Ti.colour),r.addColorStop(.55,Ti.colour),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,16,256);const s=i.createLinearGradient(0,0,16,0);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(.5,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,1)"),i.globalCompositeOperation="destination-out",i.fillStyle=s,i.fillRect(0,0,16,256);const a=new Sn(t);return a.colorSpace=dt,a}function FM(n){const e=ai.karu;let i=NM(0),r=1;e&&(i=new _d().load(e.png),i.magFilter=Ft,i.minFilter=si,i.generateMipmaps=!0,i.anisotropy=4,i.colorSpace=dt,r=e.w/e.h);const s=e?e.worldHeight:Mr.sizeMetres,a=new $t(s*r,s);a.translate(0,s/2,0);const o=new at(a,new Yt({map:i,transparent:!e,alphaTest:e?.5:0,depthWrite:!!e,side:Tt,toneMapped:!1}));o.frustumCulled=!1,o.visible=!1,n.add(o);const c=s*.55,l=UM(),u=()=>{const g=new $t(Ti.widthMetres,Ti.heightMetres);g.translate(0,Ti.heightMetres/2,0);const x=new at(g,new Yt({map:l,transparent:!0,depthWrite:!1,blending:Ii,side:Tt,opacity:Ti.alpha,toneMapped:!1}));return x.frustumCulled=!1,x.visible=!1,n.add(x),x},h=[u(),u()];h[1].rotation.y=Math.PI/2;function d(){o.visible=!1;for(const g of h)g.visible=!1}function f(g,x,p,{door:m=null}={}){if(!g.present){d();return}const T=g.pos;o.visible=!0,o.position.set(T.x,T.y-c,T.z),nn(o,x);const w=!!m,S=.85+.15*Math.sin(p/1e3*Math.PI*2*Ti.flickerHz);for(const E of h)E.visible=w,w&&(E.position.set(m.x,m.y,m.z),E.material.opacity=Ti.alpha*S)}return{update:f,hide:d}}const kt=Ye.worlds,Vd=Math.PI/180;function Wd(n,e){const t=n.x,i=n.z+kt.doorway.offsetMetres;return{x:t,y:e.heightAt(t,i),z:i}}function OM(n,e,t,i){const r=Dr(e),s=Dr(t),a=i*i;for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++)for(const l of n(r+o,s+c)){if(l.kind!=="tree"&&l.kind!=="scrub")continue;const u=l.x-e,h=l.z-t;if(u*u+h*h<a)return!0}return!1}function Xd({rng:n,ox:e,oz:t,baseAngle:i,spread:r,min:s,max:a,terrain:o,genScenery:c,relocations:l}){const u=kt.returnDoor;let h=null,d=-1/0;for(let f=0;f<u.samples;f++){const g=i+(n()*2-1)*r,x=s+n()*(a-s),p=e+Math.sin(g)*x,m=t+Math.cos(g)*x;let T=0;const w=o.isSubmerged(p,m)||o.waterDepthAt(p,m)>=u.maxWaterDepth,S=o.slopeAt(p,m)>Ye.epicSiting.maxSlope,E=OM(c,p,m,u.clearance);if(w&&(T-=100),S&&(T-=10),E&&(T-=1),T>d&&(d=T,h={x:p,y:o.heightAt(p,m),z:m,relaxed:!0,relocations:l}),!w&&!S&&!E)return{x:p,y:o.heightAt(p,m),z:m,relaxed:!1,relocations:l}}return h}function zM({seed:n,entry:e,terrain:t,genScenery:i}){const r=pi(n,"return-door");return Xd({rng:r,ox:e.x,oz:e.z,baseAngle:r()*Math.PI*2,spread:Math.PI,min:kt.returnDoor.min,max:kt.returnDoor.max,terrain:t,genScenery:i,relocations:0})}function kM({entry:n,walkable:e}){if(e(n.x,n.z))return{x:n.x,z:n.z};const t=kt.elsewhere,i=Math.ceil(t.entrySearchMetres/t.entrySearchStep);let r=null,s=1/0;for(let a=-i;a<=i;a++)for(let o=-i;o<=i;o++){const c=n.x+a*t.entrySearchStep,l=n.z+o*t.entrySearchStep,u=Math.hypot(a,o)*t.entrySearchStep;u>t.entrySearchMetres||u>=s||e(c,l)&&(r={x:c,z:l},s=u)}return r??{x:n.x,z:n.z}}function BM({seed:n,terrain:e,genScenery:t,player:i,door:r}){const s=r.relocations+1,a=pi(n,"return-door","relocate",s);return Xd({rng:a,ox:i.x,oz:i.z,baseAngle:Math.atan2(i.fx,i.fz),spread:kt.returnDoor.relocateSpreadDeg*Vd,min:kt.returnDoor.relocateMin,max:kt.returnDoor.relocateMax,terrain:e,genScenery:t,relocations:s})}function GM(n,e,t=kt.returnDoor.reachRadius){return e?Math.hypot(e.x-n.x,e.z-n.z)<=t:!1}function HM(n,e){if(!e)return{hear:0,bend:null};const t=kt.returnDoor,i=Math.hypot(e.x-n.x,e.z-n.z);return i>t.hearRadius?{hear:0,bend:null}:{hear:Math.min(1,Math.max(0,1-i/t.hearRadius)),bend:{x:e.x,z:e.z,radius:t.bendRadius,radians:t.bendDegrees*Vd}}}function qd(n,e){if(n.which!=="elsewhere")return kt.worldLabel.home;const t=(e-n.enteredAtMs)/1e3;return!n.karu&&t>=kt.elsewhere.hintAfterSec?kt.worldLabel.elsewhereListen:kt.worldLabel.elsewhere}function Yd({seed:n}){const e=kt.doorway,t=kt.returnDoor,i={seed:n,which:"home",entry:null,returnDoor:null,karu:!1,crossing:!1,fade:0,fadeColour:"#e8763a",_cross:null,holdProgress:0,_holdSince:null,enteredAtMs:0,doorSeen:!1,_floorSpent:0};function r(){return i.karu?e.holdWithKaruMs:e.holdMs}function s(g,x,p){if(i.crossing||i.which!=="home"||!g||i.doorway&&!i.doorway.promptReady)return i._holdSince=null,i.holdProgress=0,!1;const m=r();return m<=0?(i.holdProgress=1,!0):(i._holdSince===null&&(i._holdSince=p),i.holdProgress=Math.min(1,(p-i._holdSince)/m),i.holdProgress>=1?(i._holdSince=null,!0):!1)}function a(g,x,p={}){return i.crossing||g===i.which?!1:(i.crossing=!0,i.fade=0,i.holdProgress=0,i._holdSince=null,i.fadeColour=VM,i._cross={to:g,t0:x,switched:!1,entry:p.entry,returnDoor:p.returnDoor},!0)}function o(){i.which="home",i.entry=null,i.returnDoor=null,i.doorSeen=!1,i._floorSpent=0}function c(g){const x=[],p=i._cross;if(!p)return i.fade=0,x;const m=g-p.t0;if(!p.switched)return i.fade=Math.min(1,m/e.fadeOutMs),m>=e.fadeOutMs&&(p.switched=!0,p.to==="elsewhere"?(i.which="elsewhere",i.entry=p.entry??i.entry,i.returnDoor=p.returnDoor??i.returnDoor,i.enteredAtMs=g,i.doorSeen=!1):o(),x.push("switch")),x;const T=m-e.fadeOutMs;return i.fade=Math.max(0,1-T/e.fadeInMs),T>=e.fadeInMs&&(i.fade=0,i.crossing=!1,i._cross=null,x.push("arrived")),x}function l(g){i.doorSeen=!0}function u(g){return i.which!=="elsewhere"||i.crossing||!i.returnDoor||i.doorSeen||i._floorSpent>=t.maxRelocations||(g-i.enteredAtMs)/1e3<t.lostFloorSec?!1:(i._floorSpent++,!0)}function h(g){i.returnDoor=g}function d(){return{which:i.which,entry:i.entry?{x:i.entry.x,z:i.entry.z}:null,returnDoor:i.returnDoor?{...i.returnDoor}:null,karu:i.karu}}function f(g,x){i.crossing=!1,i._cross=null,i.fade=0,i.holdProgress=0,i._holdSince=null,i.which=g?.which==="elsewhere"?"elsewhere":"home",i.entry=g?.entry?{x:g.entry.x,z:g.entry.z}:null,i.returnDoor=g?.returnDoor?{relaxed:!1,relocations:0,...g.returnDoor}:null,i.karu=!!g?.karu,i.enteredAtMs=x,i.doorSeen=!1,i._floorSpent=i.returnDoor?i.returnDoor.relocations:0}return Object.assign(i,{hold:s,cross:a,update:c,noteDoorOnScreen:l,lostFloorDue:u,setReturnDoor:h,arriveHome:o,snapshot:d,restore:f,holdNeededMs:r})}const VM="#e8763a";function WM(n,e){if(n.scene&&(n.scene.background?.set&&n.scene.background.set(e.sky),n.scene.fog&&(n.scene.fog.color.set(e.fog),n.scene.fog.near=e.fogNear,n.scene.fog.far=e.fogFar)),n.terrainMesh&&(n.terrainMesh.material.color.set(e.terrainTint),n.terrainMesh.material.emissive?.set&&n.terrainMesh.material.emissive.set(e.terrainGlow??"#000000")),n.treeMeshes)for(const t of n.treeMeshes)t.material.color.set(e.foliageTint),t.material.emissive?.set&&t.material.emissive.set(e.foliageGlow??"#000000");n.scrubMesh&&n.scrubMesh.material.color.set(e.scrubTint),n.rockMesh&&n.rockMesh.material.color.set(e.rockTint),n.freshMesh&&(n.freshMesh.material.color.set(e.freshTint),n.freshMesh.material.emissive?.set&&n.freshMesh.material.emissive.set(e.freshGlow)),n.water&&(n.water.visible=!e.hideSea)}const Hn=kt,XM={sky:"#d8cdb4",fog:"#d8cdb4",fogNear:45,fogFar:130,terrainTint:"#ffffff",foliageTint:"#ffffff",scrubTint:"#ffffff",rockTint:"#ffffff",freshTint:"#ffffff",freshGlow:"#000000",hideSea:!1,terrainGlow:"#000000",foliageGlow:"#000000"},qM={sky:"#e8763a",fog:"#c9633c",fogNear:30,fogFar:130,terrainTint:"#b894cc",foliageTint:"#b98ac4",scrubTint:"#c39bcc",rockTint:"#b9a0c8",freshTint:"#ffc088",freshGlow:"#7a3a1a",hideSea:!0,terrainGlow:"#2a1238",foliageGlow:"#2c0f2a"},$d={home:XM,elsewhere:qM},gn=Ye.worlds.elsewhere;function YM(n){return`${n}:elsewhere`}function $M(n){const e=YM(n),t=Dd(e,{inlandOffset:gn.inlandOffset,biomeKey:"elsewhere"}),i=ml(t,e);return{seed:e,world:t,scenery:i,dressing:$d.elsewhere}}const Nu=mi.items.filter(n=>n.tier===5&&n.biome==="any");function KM(n,e,t){const i=pi(n,"elsewhere","finds"),r=gn.findsMin+Math.floor(i()*(gn.findsMax-gn.findsMin+1)),s=[],a=Math.PI*2/r;for(let o=0;o<r;o++){let c=null;for(let u=0;u<gn.findsAttempts&&!c;u++){const h=a*o+i()*a,d=gn.findsRadiusMin+i()*(gn.findsRadiusMax-gn.findsRadiusMin),f=e.x+Math.sin(h)*d,g=e.z+Math.cos(h)*d;t.isSubmerged(f,g)||t.waterDepthAt(f,g)>=gn.findsMaxWaterDepth||t.slopeAt(f,g)>Ye.epicSiting.maxSlope||(c={x:f,z:g})}c||(c={x:e.x+Math.sin(a*o)*gn.findsRadiusMin,z:e.z+Math.cos(a*o)*gn.findsRadiusMin});const l=Nu[Math.floor(i()*Nu.length)];s.push({id:`elsewhere:${o}`,itemId:l.id,tier:5,x:c.x,y:t.heightAt(c.x,c.z),z:c.z,rot:i()*Math.PI*2,biome:"elsewhere",nearWater:!1,tierRoll:0,itemRoll:0,isAuthored:!0})}return s}const Uu=$d,Fu=gn,Ou=4,zu=12,ZM=Ye.worlds.doorway;function JM(n){const t=document.createElement("canvas");t.width=256,t.height=256;const i=t.getContext("2d"),r=256/2,s=256/2,a=new Path2D;for(let l=0;l<=96;l++){const u=l/96*Math.PI*2,h=1+Math.sin(u*5+n*1.3)*.035+Math.sin(u*11+n*2.1)*.02+Math.sin(u*3-n*.7)*.018,d=r+Math.cos(u)*88*h;let f=s+Math.sin(u)*112*h;f>s+100&&(f=s+100+(f-s-100)*.35),l===0?a.moveTo(d,f):a.lineTo(d,f)}a.closePath(),i.save(),i.clip(a);const o=i.createLinearGradient(0,s-116,0,s+116);o.addColorStop(0,"#241443"),o.addColorStop(.42,"#7b3b6a"),o.addColorStop(.72,"#e8763a"),o.addColorStop(1,"#ffd08a"),i.fillStyle=o,i.fillRect(0,0,256,256),i.restore(),i.save(),i.clip(a),i.strokeStyle="rgba(255, 196, 120, 0.55)",i.lineWidth=14,i.stroke(a),i.restore(),i.strokeStyle="#2b2118",i.lineWidth=7,i.lineJoin="round",i.stroke(a);const c=new Sn(t);return c.colorSpace=dt,c}function QM(){const n=document.createElement("canvas");n.width=32,n.height=256;const e=n.getContext("2d"),t=e.createLinearGradient(0,256,0,0);t.addColorStop(0,"rgba(255, 236, 190, 0.85)"),t.addColorStop(.35,"rgba(255, 214, 140, 0.40)"),t.addColorStop(1,"rgba(255, 200, 120, 0)"),e.fillStyle=t,e.fillRect(0,0,32,256);const i=e.createLinearGradient(0,0,32,0);i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(.3,"rgba(0,0,0,0)"),i.addColorStop(.7,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=i,e.fillRect(0,0,32,256);const r=new Sn(n);return r.colorSpace=dt,r}function jM(n){const e=Array.from({length:Ou},(l,u)=>JM(u)),t=new $t(1,1);t.translate(0,.5,0);const i=new at(t,new Yt({map:e[0],transparent:!1,alphaTest:.5,side:Tt,toneMapped:!1}));i.frustumCulled=!1,i.visible=!1,n.add(i);const r=new at((()=>{const l=new fs(.72,1,40);return l.rotateX(-Math.PI/2),l})(),new Yt({color:"#ffd08a",transparent:!0,depthWrite:!1,side:Tt,toneMapped:!1}));r.frustumCulled=!1,r.visible=!1,n.add(r);const s=new $t(1,1);s.translate(0,.5,0);const a=new at(s,new Yt({map:QM(),transparent:!0,depthWrite:!1,blending:Ii,side:Tt,toneMapped:!1}));a.frustumCulled=!1,a.visible=!1,n.add(a);function o(){i.visible=!1,r.visible=!1,a.visible=!1}function c(l,u,h){if(!l){o();return}const d=Math.floor(h/1e3*zu)%Ou,f=Math.min(1,Math.max(0,l.hold??0));i.visible=!0,i.material.map=e[d],i.position.set(l.x,l.y,l.z);const g=ZM.archMetres*(1+f*.08);if(i.scale.set(g*.8,g,1),nn(i,u),r.visible=f>.001,r.visible&&(r.position.set(l.x,l.y+.04,l.z),r.scale.setScalar(1.6-f*.5),r.material.opacity=.25+f*.6),a.visible=!!l.karu,a.visible){const x=Math.floor(h/1e3*zu),p=1+.06*Math.sin(x*.35);a.position.set(l.x,l.y,l.z),a.scale.set(2.2*p,42,1),nn(a,u)}}return{update:c,hide:o,mesh:i,column:a}}function eS(n){const e=document.createElement("div");e.id="world-fade",e.hidden=!0,n.appendChild(e);let t=0;function i(r,s){if(t=Math.min(1,Math.max(0,r)),t<=.001){e.hidden||(e.hidden=!0);return}e.hidden&&(e.hidden=!1),e.style.background=s,e.style.opacity=String(t)}return{set:i,el:e,get opacity(){return t}}}const ku=2.2,Bu=1.8,Gu=25*(Math.PI/180),vl=6*(Math.PI/180),ga=9,Zs=3,tS=.5;function Tr(n,e,t){return n.hasSea&&n.inlandAt(e,t)<12?n.heightAt(e,t)>n.SEA_LEVEL+.12:n.waterDepthAt(e,t)<tS}const nS=(n,e)=>Tr(Ve,n,e),iS=(n,e)=>Ve.waterDepthAt(n,e)<=0,$r={x:0,y:0,z:0,hold:0},rS=new URLSearchParams(location.search);let hn=rS.get("seed")??"lil-bitz";const tt=new bf,Kd=new Ie("#d8cdb4");tt.background=Kd;tt.fog=new Ul(Kd,45,130);const He=new un(58,window.innerWidth/window.innerHeight,.1,400),vn=new q_({antialias:!0,preserveDrawingBuffer:!0});vn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));vn.setSize(window.innerWidth,window.innerHeight);vn.outputColorSpace=dt;document.body.appendChild(vn.domElement);tt.add(new Xf("#fff4dd","#7d7355",2.1));const Zd=new $f("#fff0cc",1.35);Zd.position.set(30,60,18);tt.add(Zd);function Jd(n){const e=Dd(n),t=ml(e,n),i=cM(e,n,t.genScenery),r=ml(e,n,{clearings:i.map(o=>({x:o.x,z:o.z,r:ui.landing.clearingMetres}))}),s=uM(i,n,e);for(const o of s)_n.force(o.id,{tier:o.tier,itemId:o.itemId});const a=$M(n);return{home:{world:e,scenery:r,sites:i,finds:s,palette:Uu.home},elsewhere:{world:a.world,scenery:a.scenery,sites:[],finds:[],palette:Uu.elsewhere}}}const _n=Rv();let pt=Jd(hn),Ve=pt.home.world,ii=Id({heightAt:Ve.heightAt,forestnessAt:Ve.forestnessAt,freshSurfaceAt:Ve.freshSurfaceAt});tt.add(ii.mesh);const _a=gx(Ve.SEA_LEVEL);tt.add(_a);let Ri=Ld({freshSurfaceAt:Ve.freshSurfaceAt});tt.add(Ri.mesh);let Qd=pt.home.scenery;const es=kx(tt),jd=jM(tt),Sr=xM(tt),sS=FM(tt),Hu=_x(tt),oa=xx();tt.add(oa);const aS=kv(tt);let Yl="player";const Pi=Nd({texture:Hl(ai.player.png,vn),worldHeight:ai.player.worldHeight,aspect:ai.player.w/ai.player.h});tt.add(Pi);function oS(n){const e=ai[n];if(!e)return!1;Yl=n,Pi.geometry.dispose();const t=e.worldHeight*(e.w/e.h),i=new $t(t,e.worldHeight);return i.translate(0,e.worldHeight/2,0),Pi.geometry=i,Pi.material.map=Hl(e.png,vn),Pi.material.needsUpdate=!0,!0}const eh=pa(.55);tt.add(eh);const Aa=[{id:"trinket_maker",x:5,z:27},{id:"wanderer_a",x:-26,z:62},{id:"wanderer_b",x:30,z:96}],os=Aa.map(n=>{const e=ai[n.id],t=Nd({texture:Hl(e.png,vn),worldHeight:e.worldHeight,aspect:e.w/e.h}),i=pa(.5);return tt.add(t),tt.add(i),{...n,mesh:t,shadow:i,def:e}}),je=mx(),Nt=dx(window),en=Bx(document.body),Rt=jx(document.body),lS=px(Nt,document.body),Vu=ov(document.body),Jt=hv(),oi=fv(),Le=Uv(),cS=eS(document.body);let Ce=Yd({seed:hn});const mt=LM(),gs=mM(),M={x:0,z:8,yaw:Math.PI,tMs:0,envMs:0,nearest:null,collected:0,epicTicks:0,lastEpicAtMs:-1e9,epicActive:!1,epicCounts:{natural:0,granted:0},wonderDry:0,k:0,trail:[],epicPending:!1,epicTier:5,epicPendingItem:null,epicRetryAtMs:0,epicSiteAttempts:0,epicRelocations:0,epicFellBack:!1,epicObjects:[],recentVo:[],knownCreatures:[],giveLockUntilMs:-1,lastReaction:"",milestonesSeen:[],sayQueue:[],owedGrants:[],epicGrantSite:null,epicGranted:!1,epicGrantedBy:null,progression:ql([]),doorRefusedShown:!1,kelpiiDown:!1,doorwayPromptAfterMs:0,elsewhereFirstOfferDone:!1,lastMovedMs:0,pityMult:1,lastSay:null,started:!1};let Vn=Wd(Aa[0],pt.home.world),Zi=[],Wn=[],xa="";function Ra(n=!1){const e=Dr(M.x),t=Dr(M.z),i=`${e}:${t}`;if(!(!n&&i===xa)){xa=i,Zi=[],Wn=[];for(let r=-Zs;r<=Zs;r++)for(let s=-Zs;s<=Zs;s++)Zi.push(...Ve.genChunk(e+r,t+s)),Wn.push(...Qd.genScenery(e+r,t+s));ls=!0}}let ls=!0,vo=[];function th(){if(!ls)return vo;ls=!1;const n=pt[Ce.which].finds;return vo=!M.epicObjects.length&&!n.length?Zi:Zi.concat(M.epicObjects,n),vo}function uS(n){let e=null,t=Bu,i=null,r=Bu;for(const s of n){if(je.has(s.id))continue;const a=Math.hypot(s.x-M.x,s.z-M.z);a<t&&(t=a,e=s),s.isEpic&&a<r&&(r=a,i=s)}return i??e}function dS(n,e,t){const i=t*t;for(const r of Wn){if(r.kind!=="tree"&&r.kind!=="scrub")continue;const s=r.x-n,a=r.z-e;if(s*s+a*a<i)return!1}return!0}const tn=new un(58,16/9,.1,400),xn=new k,hS=new Ie;function fS(){const n=Ve.heightAt(M.x,M.z),e=ga*Math.cos(vl),t=ga*Math.sin(vl);tn.fov=58*.92,tn.aspect=He.aspect,tn.position.set(M.x+Math.sin(M.yaw)*e,n+t+1.7,M.z+Math.cos(M.yaw)*e),tn.lookAt(M.x,n+1.35,M.z),tn.updateMatrixWorld(!0),tn.updateProjectionMatrix()}function Ca(){const n=Ye.epicSequence.modes[(M.epicTier??5)>=6?"escalated":pS(M.epicCounts.natural)]??Ye.epicSequence.modes.full;return .5*Ye.epicSequence.gravity*n.fall*n.fall}function pS(n){for(const e of Ye.epicSequence.ladder)if(n<=e.upTo)return e.mode;return"quick"}function Ml(n,e,t){const i=e+Ca(),r=l=>(xn.set(n,l,t).project(tn),xn),s=Ye.epicSequence.mouthMetres/2*1.12,a=r(i+s).y,o=r(i-s).y,c=r(i).x;return a<.82&&o>-.85&&Math.abs(c)<.5?!$l(tn.position,n,i,t):!1}function Wu(n,e,t){const i=e+Ca(),r=Ye.epicSiting.visibleMargin;return xn.set(n,i,t).project(tn),Math.abs(xn.x)<r&&Math.abs(xn.y)<r&&xn.z<1?!$l(tn.position,n,i,t):!1}function Mo(n){const e=Ye.epicSiting.visibleMargin;return xn.set(n.x,n.y,n.z).project(tn),Math.abs(xn.x)<e&&Math.abs(xn.y)<e&&xn.z<1?!$l(tn.position,n.x,n.y,n.z):!1}function Xu(n,e,t){return xn.set(n,e+Ca(),t).project(tn),Math.abs(xn.x)}function $l(n,e,t,i){const r=Ye.epicSiting,s=e-n.x,a=i-n.z,o=s*s+a*a;if(o<1e-6)return!1;for(const c of Wn){if(c.kind!=="tree")continue;const l=((c.x-n.x)*s+(c.z-n.z)*a)/o;if(l<=.08||l>=1)continue;const u=n.x+s*l,h=n.z+a*l,d=c.scale??6,f=Math.max(r.canopyRadius,d*r.canopyRadiusOfHeight);if((c.x-u)**2+(c.z-h)**2>f*f)continue;const g=n.y+(t-n.y)*l,x=c.y??Ve.heightAt(c.x,c.z);if(g>x+d*r.canopyBandFrom&&g<x+d)return!0}return!1}function nh(){return fS(),{px:M.x,pz:M.z,fx:-Math.sin(M.yaw),fz:-Math.cos(M.yaw),heightAt:Ve.heightAt,slopeAt:Ve.slopeAt,isSubmerged:Ve.isSubmerged,seaLevel:Ve.SEA_LEVEL,isClear:dS,isInFrame:Ml,rng:pi(hn,"epic-site",M.epicCounts.natural+M.epicCounts.granted,M.epicSiteAttempts)}}function ih(n){const e=aa.items.filter(t=>t.tier===n);return e.length===0?aa.items.find(t=>t.id==="portal_shard")??aa.items[0]:e[Math.floor(Math.random()*e.length)]}function Kl(n=5,{granted:e=!1,site:t=null,by:i=null}={}){e||(M.epicTicks=0,M.lastEpicAtMs=M.tMs),M.epicCounts=Ev(M.epicCounts,e),M.epicGranted=e,M.epicGrantedBy=e?i:null,M.epicActive=!0,M.epicPending=!0,M.epicTier=n,M.epicRetryAtMs=M.tMs,M.epicSiteAttempts=0,M.epicRelocations=0,M.epicGrantSite=t,e||oi.onEpicDelivered()}function rh(){if(!M.epicPending||M.tMs<M.epicRetryAtMs)return;const n=nh();let e=Fd(n);if(M.epicSiteAttempts++,M.epicSiteAttempts===1&&(M.epicFellBack=!1),!e){if(M.epicSiteAttempts<as.maxRelocations){M.epicRetryAtMs=M.tMs+as.retrySeconds*1e3;return}e=M.epicGrantSite?Pu(Ve,M.epicGrantSite,{px:n.px,pz:n.pz,fx:n.fx,fz:n.fz,isInFrame:Ml,isVisible:Wu,frameOffset:Xu,avoid:pt.home.finds.filter(o=>!je.has(o.id))}):_l(n),M.epicFellBack=!0}const t=M.epicTier??5,i=ih(t),r=t>=6,s=Lv(M.recentVo,Math.random,r);M.recentVo.unshift(s),M.recentVo.length=Math.min(M.recentVo.length,8);const a=[];for(let o=0;o<12;o++){const c=M.epicCounts.natural+M.epicCounts.granted;Le.start({site:e,count:M.epicCounts.natural,tier:t,line:s,subLine:i.name,rng:pi(hn,"epic-drift",c,o)});const l=Le.portal2Planned;l&&!Mo(l)&&Le.flipAcross();const u=Mo(Le.portalPlanned??Le.portal2Planned??{x:e.x,y:e.y+Ca(),z:e.z}),h=!Le.portal2Planned||Mo(Le.portal2Planned);if(u&&h||!M.epicGranted||!M.epicGrantSite)break;a.push({x:e.x,z:e.z});const d=Pu(Ve,M.epicGrantSite,{px:n.px,pz:n.pz,fx:n.fx,fz:n.fz,isInFrame:Ml,isVisible:Wu,frameOffset:Xu,avoid:pt.home.finds.filter(f=>!je.has(f.id)),reject:a});if(!d||Math.abs(d.x-e.x)<.5&&Math.abs(d.z-e.z)<.5)break;e=d,M.epicFellBack=!0}M.epicPendingItem=i,M.epicPending=!1}function mS(){const n=Le.site,e=Le.tier,t=M.epicPendingItem??ih(e),i={id:Tv(M.epicCounts,M.epicGranted),itemId:t.id,tier:e,x:n.x,y:Ve.heightAt(n.x,n.z),z:n.z,rot:Math.random()*Math.PI*2,biome:"beach",tierRoll:0,itemRoll:0,isEpic:!0,granted:M.epicGranted,grantedBy:M.epicGrantedBy};_n.force(i.id,{tier:e,itemId:t.id}),M.epicObjects.push(i),ls=!0}function gS(){for(const n of M.epicObjects){if(!Vv(n,M.x,M.z))continue;const e=nh(),t=M.epicRelocations<as.maxRelocations?Fd(e)??_l(e):_l(e);M.epicRelocations++,n.x=t.x,n.z=t.z,n.y=Ve.heightAt(t.x,t.z)}}function _S(){return sh}let sh=[];function ah(){sh=Ce.which==="home"?os.concat(dM(pt.home.sites)):[]}ah();function xS(){if(Ce.which!=="home")return null;const n=pt.home.sites.find(t=>t.kind==="place");return!n||Math.hypot(n.x-M.x,n.z-M.z)>ui.cryptidArea.radius?null:{id:n.id,x:n.x,z:n.z,place:!0,site:n}}function Jr(){return Yv(_S(),M.x,M.z)??xS()}function _s(n,e){n&&(en.say(n,e),M.lastSay={text:n,atMs:M.tMs,ms:e})}function oh(n){const e=Ea(n.id);if(!e)return;Rt.show(e.name,je.items,n.place?{head:e.leaveHead}:{head:e.giveHead??null});const t=n.id==="moana_kelpii"&&(M.kelpiiDown||!Hd(pt.home.sites.find(i=>i.id===n.id),M.x,M.z));_s(t&&e.greetingDown||e.greeting,Gn.reactionMs),Jt.unlock()}function ts(n,e,{milestone:t,then:i}={}){const r=M.sayQueue[M.sayQueue.length-1],s=Math.max(M.tMs+e,r?r.at+ms.delayMs:0);M.sayQueue.push({text:n,at:s,ms:Gn.reactionMs,milestone:t,then:i})}function vS(){const n=M.sayQueue[0];!n||M.tMs<n.at||(M.sayQueue.shift(),_s(n.text,n.ms),M.giveLockUntilMs=Math.max(M.giveLockUntilMs,M.tMs+n.ms),n.then?.())}function lh(n){const e=M.progression,t=new Set(M.sayQueue.map(i=>i.milestone).filter(Boolean));for(const i of MM(e,M.milestonesSeen))t.has(i)||ts(SM(i),n,{milestone:i,then:()=>ch(i)})}function ch(n){M.milestonesSeen.includes(n)||M.milestonesSeen.push(n),n==="doorway"&&(M.doorwayPromptAfterMs=M.tMs+Gn.reactionMs),n==="karu"&&uh()}function uh(){const n=Aa[0],e=Lr.motion.spawnAtHer;Ce.karu=!0,mt.setPresent(!0,{x:n.x+e.x,z:n.z+e.z}),ts(mt.line("greet"),ms.delayMs)}function yr(){return M.milestonesSeen.includes("doorway")}function dh(n){if(!n||M.tMs<M.giveLockUntilMs)return;const e=Rt.selected;if(!e)return;const t=qv({recipientId:n.id,tier:e.tier,knownCreatures:M.knownCreatures,rng:Math.random});if(!t.accepted)return;const i=Gn.sacrificeIsReal;if(!je.give(e.id,n.id,M.tMs,i))return;oi.onGive(e.tier),Jt.give(e.tier),_s(t.line,Gn.reactionMs),M.lastReaction=t.line,M.giveLockUntilMs=M.tMs+Gn.reactionMs;let s=t.sighting;if(s&&M.knownCreatures.length===0){const o=Ea(n.id),c=fM(pt.home.sites,n.x,n.z)[0],l=o?.sightings?.find(u=>u.site===c?.id);l&&(s={creature:l.creature,line:l.lines[Math.floor(Math.random()*l.lines.length)]})}s&&(M.knownCreatures.includes(s.creature)||M.knownCreatures.push(s.creature),en.sighting(s.creature,s.line));const a=Gd(n.id,e.tier);a&&!n.place&&(Rt.hide(),M.owedGrants.push({tier:a.tier,at:M.tMs+ui.grant.lineHoldMs,siteId:n.id}),n.id==="moana_kelpii"&&(M.kelpiiDown=!0)),n.place&&(a&&gs.leave(n.id,M.tMs,e.tier),Rt.hide()),M.progression=ql(je.ledger),lh(ms.delayMs),Rt.remove(e.id),M.collected=je.total,je.items.length===0&&Rt.hide(),xs(!0)}function MS(){const n=M.owedGrants[0];if(!n||M.tMs<n.at||M.epicActive||M.epicPending)return;M.owedGrants.shift();const e=Ce.which==="home"?pt.home.sites.find(t=>t.id===n.siteId)??null:null;Kl(n.tier,{granted:!0,site:e,by:n.siteId??null})}function Zl(n){const e=pt[n];Ve=e.world,Qd=e.scenery,tt.remove(ii.mesh),ii=Id({heightAt:Ve.heightAt,forestnessAt:Ve.forestnessAt,freshSurfaceAt:Ve.freshSurfaceAt}),tt.add(ii.mesh),tt.remove(Ri.mesh),Ri=Ld({freshSurfaceAt:Ve.freshSurfaceAt}),tt.add(Ri.mesh),WM({scene:tt,terrainMesh:ii.mesh,treeMeshes:es.trees.values(),scrubMesh:es.groups.get("scrub"),rockMesh:es.groups.get("rock"),freshMesh:Ri.mesh,water:_a},e.palette);const t=n==="home";for(const i of os)i.mesh.visible=t,i.shadow.visible=t;if(t)jd.hide();else{Sr.hide(),Jt.ambientVoice(1/0,M.tMs);const i=Ce.entry??{x:M.x,z:M.z};e.finds=KM(hn,i,Ve);for(const r of e.finds)_n.force(r.id,{tier:r.tier,itemId:r.itemId})}Jt.doorHum(0),M.epicObjects=[],M.nearest=null,M.epicPending&&(M.epicRetryAtMs=M.tMs,M.epicSiteAttempts=0,M.epicGrantSite=null),ah(),Zi=[],Wn=[],xa="",Ra(!0),ii.update(M.x,M.z,!0),Ri.update(M.x,M.z,!0)}function hh(){return Le.active||M.epicObjects.length>0}function Sl(n){if(hh())return!1;if(n==="elsewhere"){const e=pt.elsewhere,t=kM({entry:{x:Vn.x,z:Vn.z},walkable:(r,s)=>Tr(e.world,r,s)}),i=zM({seed:hn,entry:t,terrain:e.world,genScenery:e.scenery.genScenery});return Ce.cross("elsewhere",M.tMs,{entry:t,returnDoor:i})?(mt.present&&_s(mt.line("enterWorld"),Gn.reactionMs),!0):!1}return Ce.cross("home",M.tMs)}function SS(){if(Ce.which==="elsewhere"){const e=Ce.entry??{x:0,z:8};M.x=e.x,M.z=e.z,M.elsewhereFirstOfferDone=!1}else M.x=Vn.x,M.z=Vn.z+Hn.doorway.arriveOffsetMetres,M.yaw=0;M.trail=[],Zl(Ce.which);const n=Lr.motion.spawnAfterCrossing;mt.present&&mt.setPresent(!0,{x:M.x+n.x,z:M.z+n.z})}function yS(){mt.present&&(Ce.which==="elsewhere"?(ts(mt.line("elsewhere"),Lr.lineDelayMs),ts(mt.line("thisWay"),ms.delayMs)):ts(mt.line("home"),Lr.lineDelayMs))}function qu(){M.doorRefusedShown||(M.doorRefusedShown=!0,_s(Hn.doorway.refusedLine,Gn.reactionMs))}const bS=new k;function ES(){const n=Ce.returnDoor;if(!n||Math.hypot(n.x-M.x,n.z-M.z)>Hn.returnDoor.seenMetres)return!1;He.updateMatrixWorld(!0);const e=bS.set(n.x,n.y+Hn.doorway.archMetres*.5,n.z).project(He);return Math.abs(e.x)<1&&Math.abs(e.y)<1&&e.z<1}function fh(){if(Ce.which==="home")return!0;const n=Ce.returnDoor;return n?Math.hypot(n.x-M.x,n.z-M.z)>Hn.returnDoor.hearRadius:!0}function ph(n){M.tMs+=n*1e3,Le.update(n);const e=Le.dilation();M.envMs+=n*1e3*e;for(const G of Le.takeEvents())G==="tell"&&Jt.epicTell(Ye.epicSequence.modes[Le.mode]?.tell??0),G==="open"&&en.epicShow(Le.line,Le.subLine,Le.mode),G==="impact"&&Jt.epicImpact(),G==="deliver"&&mS();for(const G of Ce.update(M.tMs))G==="switch"&&SS(),G==="arrived"&&yS();cS.set(Ce.fade,Ce.fadeColour);const t=M.started,i=Nt.takeCollect()&&t,r=Nt.takeGive()&&t,s=Nt.takeCancel()&&t,a=t?Nt.takeNav():(Nt.takeNav(),0),o=Rt.takePick()&&t,c=Jr(),l=Rt.open,u=Ce.which==="home",h=os.find(G=>G.id==="trinket_maker");h&&M.started&&u&&Jt.ambientVoice(Math.hypot(h.x-M.x,h.z-M.z),M.tMs),t&&vS(),l?(a&&Rt.move(a),s||r?Rt.hide():(i||o)&&dh(c),c||Rt.hide()):r&&c&&oh(c);const d=Rt.open||!t||Ce.crossing;if(d)Nt.takeYaw();else{M.yaw-=Nt.takeYaw(),M.yaw+=Nt.turn*1.8*n;const{x:G,z:ie}=Nt.axes,te=Math.hypot(G,ie);if(te>0){const ae=Math.sin(M.yaw),we=Math.cos(M.yaw),$e=(G*we+ie*ae)/te,We=(ie*we-G*ae)/te,J=M.x+$e*ku*n,re=M.z+We*ku*n,ne=M.x,ge=M.z;Tr(Ve,J,re)?(M.x=J,M.z=re):Tr(Ve,J,M.z)?M.x=J:Tr(Ve,M.x,re)&&(M.z=re),(M.x!==ne||M.z!==ge)&&(M.lastMovedMs=M.tMs)}}Ra();const f=Nt.isDown("KeyE")||Nt.isDown("Space")||Nt.isDown("Enter");let g=!1,x=!1;if(t&&u&&yr()&&!l?(x=Math.hypot(Vn.x-M.x,Vn.z-M.z)<=Hn.doorway.triggerRadius,g=x&&M.tMs>=M.doorwayPromptAfterMs,Ce.hold(g,f,M.tMs)&&!Sl("elsewhere")&&qu()):Ce.hold(!1,!1,M.tMs),t&&!u&&!Ce.crossing&&(x=GM({x:M.x,z:M.z},Ce.returnDoor),x&&!Sl("home")&&qu(),ES()&&Ce.noteDoorOnScreen(M.tMs),Ce.lostFloorDue(M.tMs))){const G=pt.elsewhere;Ce.setReturnDoor(BM({seed:hn,terrain:G.world,genScenery:G.scenery.genScenery,player:{x:M.x,z:M.z,fx:-Math.sin(M.yaw),fz:-Math.cos(M.yaw)},door:Ce.returnDoor}))}x||(M.doorRefusedShown=!1);const p=!u&&!Ce.crossing?HM({x:M.x,z:M.z},Ce.returnDoor):{hear:0,bend:null};t&&Jt.doorHum(p.hear*Hn.returnDoor.humGain);const m=Ve.heightAt(M.x,M.z);Pi.position.set(M.x,m,M.z),eh.position.set(M.x,m+.02,M.z);const T=Le.framing,w=Gu+(vl-Gu)*T,S=ga*Math.cos(w),E=ga*Math.sin(w);He.position.set(M.x+Math.sin(M.yaw)*S,m+E+1.7,M.z+Math.cos(M.yaw)*S),He.lookAt(M.x,m+1+T*.35,M.z);const b=58*(1-.08*T);He.fov!==b&&(He.fov=b,He.updateProjectionMatrix());const A=Le.shake();(A.rot!==0||A.x!==0)&&(He.position.x+=A.x,He.position.y+=A.y,He.rotateZ(A.rot)),nn(Pi,He);for(const G of os){const ie=Ve.heightAt(G.x,G.z);G.mesh.position.set(G.x,ie,G.z),G.shadow.position.set(G.x,ie+.02,G.z),nn(G.mesh,He)}if(_a.position.x=M.x,_a.position.z=M.z,ii.update(M.x,M.z),Ri.update(M.x,M.z),!t){Hu.rebuild(Zi,G=>je.has(G),M.envMs),es.rebuild(Wn,{x:He.position.x,z:He.position.z},{x:M.x,z:M.z},null);return}for(oi.tick(n),M.k=oi.k(M.tMs),M.trail.push({t:M.tMs,x:M.x,z:M.z});M.trail.length&&M.tMs-M.trail[0].t>Ye.refusal.afkWindowSec*1e3;)M.trail.shift();const _=M.trail[0],y=_?Math.hypot(M.x-_.x,M.z-_.z):0,C=th(),D={x:-Math.sin(M.yaw),z:-Math.cos(M.yaw)},I=_n.update({nearby:C,px:M.x,pz:M.z,fx:D.x,fz:D.z,dt:n,travelledLast5s:y,uiBlocked:d,isTaken:G=>je.has(G)});for(const G of I)oi.onRefusal(Math.min(2,G.tier)),M.epicTicks+=Au("refusal"),M.wonderDry+=1;if(M.nearest=uS(C),!u&&!M.elsewhereFirstOfferDone&&M.nearest&&!M.nearest.isAuthored){const G=Fu.firstOfferTier,ie=hl(M.nearest.itemRoll,G,"elsewhere",M.nearest.nearWater);ie&&_n.force(M.nearest.id,{tier:G,itemId:ie.id}),M.elsewhereFirstOfferDone=!0}if(i&&!l&&M.nearest&&!g){Jt.unlock();const G=M.nearest,ie=_n.reveal(G,M.k,M.wonderDry),te={...G,tier:ie.tier,itemId:ie.itemId};if(je.collect(te,M.tMs)){oi.onGrab(Math.min(5,te.tier),M.tMs),M.epicTicks+=Au("grab"),M.wonderDry=te.tier>=4?0:M.wonderDry+1,G.isEpic&&(M.epicObjects=M.epicObjects.filter(we=>we.id!==G.id),M.epicActive=!1,G.granted&&(G.grantedBy==="moana_kelpii"||G.grantedBy==null)&&(M.kelpiiDown=!1),ls=!0),en.toast(te),Jt.pickup(te.itemId,te.tier,M.tMs);const ae=new k(te.x,te.y+.4,te.z).project(He);Vu.launch((ae.x*.5+.5)*window.innerWidth,(-ae.y*.5+.5)*window.innerHeight,Ni(te.tier).colour,M.tMs),M.collected=je.total,M.nearest=null}}const O=wv(M.epicCounts)&&_n.openingComplete()&&M.tMs>=Ye.scriptedOpening.epicMinSeconds*1e3;if(M.pityMult=yM(M.progression)*(u?1:Fu.pityMult),(O||yv(M,M.k,M.tMs,Math.random,M.pityMult))&&fh()&&Kl(5),u){const G=gs.update(pt.home.sites,M.x,M.z,D.x,D.z);G&&M.owedGrants.push({tier:G.grant.tier,at:M.tMs,siteId:G.siteId})}MS(),rh(),gS(),xs(),Vu.update(M.tMs),Hu.rebuild(C,G=>je.has(G),M.envMs);const U=Le.tellStrength,L=U>0?{x:Le.site.x,z:Le.site.z,radius:as.bendRadius,radians:as.bendDegrees*(Math.PI/180)*U}:p.bend?{...p.bend,radians:p.bend.radians*p.hear}:null;if(es.rebuild(Wn,{x:He.position.x,z:He.position.z},{x:M.x,z:M.z},L),aS.update(Le,He,M.tMs),u){const G=(M.tMs-M.lastMovedMs)/1e3;M.lastStillSeconds=G;const te=Sr.update(pt.home.sites,{x:M.x,y:m,z:M.z},He,{nowMs:M.envMs,stillSeconds:G,kelpiiDown:M.kelpiiDown}).patupaiarehe??0,ae=pt.home.palette,we=ui.sites.patupaiarehe.fog;tt.fog.color.set(ae.fog).lerp(hS.set(we.colour),te),tt.fog.near=ae.fogNear+(we.near-ae.fogNear)*te,tt.fog.far=ae.fogFar+(we.far-ae.fogFar)*te}const H=u?yr()?Vn:null:Ce.returnDoor;if(H&&($r.x=H.x,$r.y=H.y,$r.z=H.z,$r.hold=u?Ce.holdProgress:0),jd.update(H?$r:null,He,M.tMs),mt.update({dt:n,nowMs:M.tMs,player:{x:M.x,z:M.z,yaw:M.yaw+Math.PI},target:!u&&mt.present?Ce.returnDoor:null,heightAt:Ve.heightAt,walkable:nS,dryAt:iS}),sS.update(mt,He,M.tMs,{door:!u&&mt.present?Ce.returnDoor:null}),M.nearest?(oa.visible=!0,oa.position.set(M.nearest.x,Ve.heightAt(M.nearest.x,M.nearest.z)+.03,M.nearest.z)):oa.visible=!1,en.setCount(je.total),en.setWorldTag(qd(Ce,M.tMs)),g&&!d)en.setAction(mt.present?null:Hn.doorway.prompt,null);else if(M.nearest&&!d){const G=_n.reveal(M.nearest,M.k,M.wonderDry);en.setPrompt({...M.nearest,tier:G.tier,itemId:G.itemId})}else en.setPrompt(null);const X=M.tMs<M.giveLockUntilMs||M.lastSay!==null&&M.tMs-M.lastSay.atMs<M.lastSay.ms,Z=c&&!Rt.open&&!X&&je.items.length>0?Ea(c.id):null;if(en.setGivePrompt(Z?(c.place?Z.leavePrompt:(Z.givePrompt??Gn.prompt).replace("{name}",Z.name))??null:null),Le.active){en.epicFrame(Le.lettering,Le.subLine);const G=Le.aperture();en.vignette(Math.min(1,.5*U+G.scale))}else en.epicHide(),en.vignette(0)}function Jl(){vn.render(tt,He)}Ra(!0);ii.update(M.x,M.z,!0);const Js=ux({advance:ph,draw:Jl});addEventListener("resize",()=>{vn.setSize(window.innerWidth,window.innerHeight),He.aspect=window.innerWidth/window.innerHeight,He.updateProjectionMatrix()});window.__lb={ready:!1,get seed(){return hn},get player(){return{x:M.x,y:Pi.position.y,z:M.z,yaw:M.yaw}},get kete(){return{total:je.total,collectedTotal:je.collectedTotal,byTier:je.byTier,ledger:je.ledger}},get epic(){return{ticks:Number(M.epicTicks.toFixed(2)),taste:Number(oi.taste.toFixed(2)),k:Number(M.k.toFixed(3)),count:M.epicCounts.natural,granted:M.epicCounts.granted,wonderDry:M.wonderDry,refused:_n.refusedCount,pending:M.epicPending,active:M.epicActive,objects:M.epicObjects.length,fellBack:!!M.epicFellBack}},get epicSeq(){if(!Le.active&&!Le.mode)return{active:!1};const n=Le.aperture(),e=Le.object();return{active:Le.active,mode:Le.mode,t:Number(Le.t.toFixed(3)),tier:Le.tier,aperture:Number(n.scale.toFixed(3)),dilation:Number(Le.dilation().toFixed(3)),tell:Number(Le.tellStrength.toFixed(3)),sinceImpact:Number(Le.sinceImpact().toFixed(3)),object:e?{y:Number(e.y.toFixed(2)),landed:e.landed}:null,line:Le.line,subLine:Le.subLine,site:Le.site}},get epicFraming(){return this.mouthFraming(Le.portal)},get epicFraming2(){return this.mouthFraming(Le.portal2)},mouthFraming(n){if(!n)return null;const e=Le.aperture(),t=Ye.epicSequence.mouthMetres/2*Math.max(.05,e.scale),i=(o,c,l)=>{const u=new k(o,c,l).project(He);return{x:Number(u.x.toFixed(3)),y:Number(u.y.toFixed(3))}},r=i(n.x,n.y,n.z),s=i(n.x,n.y+t,n.z),a=i(n.x,n.y-t,n.z);return{centre:r,top:s.y,bottom:a.y,inFrame:Math.abs(r.x)<.9&&s.y<.94&&a.y>-.94}},get giving(){return{panelOpen:Rt.open,selected:Rt.selected,near:Jr()?.id??null,known:M.knownCreatures.slice(),lastReaction:M.lastReaction,ledger:je.ledger}},forceEpic(n=5){Kl(n),rh()},grant(n=4){const t=aa.items.filter(r=>r.tier===n)[0];if(!t)return null;const i=`granted:${n}:${je.collectedTotal}`;return je.collect({id:i,itemId:t.id,tier:n},M.tMs),M.collected=je.total,{id:i,itemId:t.id,tier:n}},openGive(){const n=Jr();return n&&oh(n),Rt.open},giveSelected(){const n=Jr();M.giveLockUntilMs=-1,dh(n)},get cryptids(){return pt.home.sites.map(n=>({...n,dist:Number(Math.hypot(n.x-M.x,n.z-M.z).toFixed(1))}))},get cryptidFinds(){return pt.home.finds.map(n=>({id:n.id,siteId:n.siteId,itemId:n.itemId,tier:n.tier,x:n.x,z:n.z,taken:je.has(n.id)}))},get progression(){return{...M.progression,seen:M.milestonesSeen.slice(),queued:M.sayQueue.map(n=>n.milestone??n.text)}},get world(){const n=Ce.returnDoor;return{which:Ce.which,entry:Ce.entry,returnDoor:n?{x:n.x,y:n.y,z:n.z,relaxed:n.relaxed,relocations:n.relocations}:null,returnDoorDist:n?Number(Math.hypot(n.x-M.x,n.z-M.z).toFixed(1)):null,karu:Ce.karu,crossing:Ce.crossing,fade:Number(Ce.fade.toFixed(3)),fadeColour:Ce.fadeColour,holdProgress:Number(Ce.holdProgress.toFixed(3)),doorway:{...Vn,open:yr(),promptReady:M.tMs>=M.doorwayPromptAfterMs},label:qd(Ce,M.tMs),doorSeen:Ce.doorSeen,lostSec:Ce.which==="elsewhere"?Number(((M.tMs-Ce.enteredAtMs)/1e3).toFixed(1)):0,owedGrants:M.owedGrants.length,leftGift:gs.pending,firstOfferDone:M.elsewhereFirstOfferDone,finds:pt[Ce.which].finds.map(e=>({id:e.id,tier:e.tier,x:e.x,z:e.z,taken:je.has(e.id)})),pityMult:M.pityMult,epicOutHere:hh(),refusedLine:Hn.doorway.refusedLine,epicMayArm:fh()}},get doorFraming(){const n=Ce.which==="home"?yr()?Vn:null:Ce.returnDoor;if(!n)return null;He.updateMatrixWorld(!0);const e=(r,s,a)=>{const o=new k(r,s,a).project(He);return{x:Number(o.x.toFixed(3)),y:Number(o.y.toFixed(3)),z:Number(o.z.toFixed(3))}},t=e(n.x,n.y,n.z),i=e(n.x,n.y+Hn.doorway.archMetres,n.z);return{foot:t,top:i,inFrame:Math.abs(t.x)<1&&t.y>-1&&i.y<1&&t.z<1,dist:Number(Math.hypot(n.x-M.x,n.z-M.z).toFixed(1))}},get karu(){const n=mt.pos;He.updateMatrixWorld(!0);const e=new k(n.x,n.y,n.z).project(He);return{present:mt.present,pos:{x:Number(n.x.toFixed(2)),y:Number(n.y.toFixed(2)),z:Number(n.z.toFixed(2))},goal:mt.goal,escaping:mt.escaping,blinkFrame:mt.blinkFrame,ndc:{x:Number(e.x.toFixed(3)),y:Number(e.y.toFixed(3))},inFrame:Math.abs(e.x)<1&&Math.abs(e.y)<1&&e.z<1,dist:Number(Math.hypot(n.x-M.x,n.z-M.z).toFixed(1))}},forceDoorway(){return yr()?!0:(M.milestonesSeen.includes("doorway")||ch("doorway"),M.doorwayPromptAfterMs=M.tMs,yr())},forceKaru(){return M.milestonesSeen.includes("karu")||M.milestonesSeen.push("karu"),mt.present||uh(),mt.present},enterDoorway(){return Sl(Ce.which==="home"?"elsewhere":"home")},giveTo(n,e=5){const t=pt.home.sites.find(c=>c.id===n);if(!t)return null;const i=this.grant(e),r=t.landing.x-t.x,s=t.landing.z-t.z,a=Math.hypot(r,s)||1,o=t.kind==="place"?ui.debug.placeReachMetres:Gn.reachMetres*ui.debug.reachFraction;if(this.teleport(t.x+r/a*o,t.z+s/a*o),M.yaw=Math.atan2(-(t.x-M.x),-(t.z-M.z)),this.stepLogic(1/60),!this.openGive())return null;for(let c=0;c<40&&Rt.selected?.id!==i.id;c++)Rt.move(1);return this.giveSelected(),{gave:i,near:Jr()?.id??null,lastReaction:M.lastReaction}},get cryptidShown(){return Sr.shown},cryptidFraming(n){const e=Sr.positions[n];if(!e)return null;He.updateMatrixWorld(!0);const t=new k(e.x,e.y,e.z).project(He);return{x:Number(t.x.toFixed(3)),y:Number(t.y.toFixed(3)),inFrame:Math.abs(t.x)<1&&Math.abs(t.y)<1&&t.z<1,ground:Number(Ve.heightAt(e.x,e.z).toFixed(3)),pos:{x:Number(e.x.toFixed(2)),y:Number(e.y.toFixed(2)),z:Number(e.z.toFixed(2))}}},holdShape(n){Sr.holdShape=n},get mouths(){return{first:Le.portal,second:Le.portal2}},occlusionReport(n,e="real"){const i=(e==="probe"?tn:He).position,r=Ye.epicSiting,s=n.x-i.x,a=n.z-i.z,o=s*s+a*a,c=[];for(const l of Wn){if(l.kind!=="tree")continue;const u=((l.x-i.x)*s+(l.z-i.z)*a)/o;if(u<=0||u>=1)continue;const h=i.x+s*u,d=i.z+a*u,f=Math.hypot(l.x-h,l.z-d),g=l.scale??6,x=Math.max(r.canopyRadius,g*r.canopyRadiusOfHeight);if(f>x+3)continue;const p=i.y+(n.y-i.y)*u,m=l.y??Ve.heightAt(l.x,l.z);c.push({species:l.species,t:+u.toFixed(2),perp:+f.toFixed(2),radius:+x.toFixed(2),h:+g.toFixed(1),base:+m.toFixed(2),lineY:+p.toFixed(2),bandFrom:+(m+g*r.canopyBandFrom).toFixed(2),top:+(m+g).toFixed(2),blocks:f<=x&&u>.08&&p>m+g*r.canopyBandFrom&&p<m+g})}return{from:{x:+i.x.toFixed(1),y:+i.y.toFixed(2),z:+i.z.toFixed(1)},p:n,trees:c}},redraw(){pt?.home?.sites&&Sr.update(pt.home.sites,{x:M.x,y:Ve.heightAt(M.x,M.z),z:M.z},He,{nowMs:M.envMs,stillSeconds:M.lastStillSeconds??0,kelpiiDown:M.kelpiiDown}),Jl()},siteFraming(n){const e=pt.home.sites.find(i=>i.id===n);if(!e)return null;He.updateMatrixWorld(!0);const t=new k(e.x,e.y+.8,e.z).project(He);return{x:Number(t.x.toFixed(3)),y:Number(t.y.toFixed(3)),inFrame:Math.abs(t.x)<1&&Math.abs(t.y)<1&&t.z<1}},get fog(){return{colour:`#${tt.fog.color.getHexString()}`,near:Number(tt.fog.near.toFixed(1)),far:Number(tt.fog.far.toFixed(1)),sky:`#${tt.background.getHexString()}`}},pixelAt(n,e){const t=vn.getContext(),i=t.drawingBufferWidth,r=t.drawingBufferHeight,s=new Uint8Array(4);return t.readPixels(Math.floor(n*(i-1)),Math.floor((1-e)*(r-1)),1,1,t.RGBA,t.UNSIGNED_BYTE,s),[s[0],s[1],s[2]]},objectsNear(n=12){return th().filter(e=>!je.has(e.id)).map(e=>({id:e.id,tier:e.tier,itemId:e.itemId,x:e.x,z:e.z,authored:!!(e.isAuthored||e.isCryptidFind||e.isEpic),dist:Math.hypot(e.x-M.x,e.z-M.z)})).filter(e=>e.dist<=n).sort((e,t)=>e.dist-t.dist)},get camera(){const n=He.position;return{x:+n.x.toFixed(2),y:+n.y.toFixed(2),z:+n.z.toFixed(2),fov:He.fov,framing:Le.framing}},get holdKeyDown(){return Nt.isDown("KeyE")||Nt.isDown("Space")||Nt.isDown("Enter")},get say(){const n=M.lastSay;return!n||M.tMs-n.atMs>=n.ms?null:n.text},navGive(n){Rt.move(n)},get nearest(){if(!M.nearest)return null;const n=_n.reveal(M.nearest,M.k,M.wonderDry);return{id:M.nearest.id,itemId:n.itemId,tier:n.tier}},get visibleCount(){return Zi.length},get sceneryCount(){return Wn.length},flora(n=45){const e={};let t=0;for(const i of Wn)i.kind==="tree"&&(Math.hypot(i.x-M.x,i.z-M.z)>n||(t++,e[i.species]=(e[i.species]??0)+1));return{trees:t,species:e}},groundAt(n,e){return Ve.heightAt(n,e)},waterAt(n,e){const t=Ve.waterSurfaceAt(n,e);return{surface:t===-1/0?null:Number(t.toFixed(2)),depth:Number(Ve.waterDepthAt(n,e).toFixed(3)),walkable:Tr(Ve,n,e)}},get npcs(){return os.map(n=>({id:n.id,x:n.x,z:n.z,dist:Number(Math.hypot(n.x-M.x,n.z-M.z).toFixed(1)),textureLoaded:!!n.mesh.material.map?.image}))},get render(){return{calls:vn.info.render.calls,triangles:vn.info.render.triangles}},get held(){return Nt.held},setSeed(n){hn=n,pt=Jd(hn),Vn=Wd(Aa[0],pt.home.world),Ce=Yd({seed:hn}),Zl("home")},setYaw(n){M.yaw=n},teleport(n,e){M.x=n,M.z=e,xa="",Ra(!0),ii.update(n,e,!0),Ri.update(n,e,!0)},collect(){Nt.queueCollect()},pause(){Js.pause()},resume(){Js.resume()},step(n){Js.step(n)},stepLogic(n){Js.stepLogic(n)},CHUNK_SIZE:Wi};ph(0);Jl();window.__lb.ready=!0;const Ji=document.createElement("div");Ji.id="help";Ji.textContent=location.pathname.startsWith("/cart/")?"stick to walk · click to pick up · hold click to give":lS.active?"left thumb to walk · drag to look · tap ◉ to pick up · hold ◉ to give":"WASD to walk · drag to look · E to pick up · G to give";Ji.style.opacity="0";document.body.appendChild(Ji);window.addEventListener("lb-touch-on",()=>{location.pathname.startsWith("/cart/")||(Ji.textContent="left thumb to walk · drag to look · tap ◉ to pick up · hold ◉ to give")});function mh(n){oS(n),M.started=!0,Jt.unlock(),Jt.titleSongStop(),Ji.style.opacity="";const e=()=>{Ji.style.opacity="0"};je.on(e),setTimeout(e,12e3)}const Nr=iv();let yl=0;function gh(){return{seed:hn,character:Yl,player:{x:M.x,z:M.z,yaw:M.yaw},tMs:M.tMs,kete:je.serialize(),discernment:oi.serialize(),offers:_n.serialize(),knownCreatures:M.knownCreatures.slice(),epic:{count:M.epicCounts.natural,granted:M.epicCounts.granted,ticks:M.epicTicks,lastEpicAtMs:M.lastEpicAtMs,wonderDry:M.wonderDry,recentVo:M.recentVo.slice()},world:Ce.snapshot(),karu:mt.serialize(),milestonesSeen:M.milestonesSeen.slice(),leftGift:gs.serialize(),owedGrants:M.owedGrants.map(n=>({tier:n.tier,siteId:n.siteId})),elsewhereFirstOfferDone:M.elsewhereFirstOfferDone,kelpiiDown:M.kelpiiDown}}function xs(n=!1){return!M.started||M.epicActive||M.epicPending||Ce.crossing||!n&&M.tMs-yl<3e4?!1:(yl=M.tMs,Nr.save(gh()))}function _h(n){n.seed!==hn&&window.__lb.setSeed(n.seed),je.restore(n.kete),oi.restore(n.discernment),_n.restore(n.offers),M.knownCreatures=(n.knownCreatures??[]).slice(),M.epicCounts={natural:n.epic?.count??0,granted:n.epic?.granted??0},M.epicTicks=n.epic?.ticks??0,M.wonderDry=n.epic?.wonderDry??0,M.recentVo=(n.epic?.recentVo??[]).slice(),M.tMs=n.tMs??0,M.envMs=M.tMs,M.lastEpicAtMs=n.epic?.lastEpicAtMs??-1e9,M.milestonesSeen=(n.milestonesSeen??[]).slice(),M.sayQueue=[],M.owedGrants=(n.owedGrants??[]).map(e=>({tier:e.tier,at:M.tMs,siteId:e.siteId??null})),M.progression=ql(je.ledger),M.elsewhereFirstOfferDone=!!n.elsewhereFirstOfferDone,M.kelpiiDown=!!n.kelpiiDown,M.doorRefusedShown=!1,M.epicGrantSite=null,M.epicGranted=!1,M.epicGrantedBy=null,gs.restore(n.leftGift),Ce.restore(n.world,M.tMs),mt.restore(n.karu),M.yaw=n.player.yaw,M.x=n.player.x,M.z=n.player.z,Zl(Ce.which),lh(ms.delayMs),M.collected=je.total,yl=M.tMs,mh(n.character)}function xh(){const n=Nr.load();if(!n){Fn._toPick();return}_h(n)}const Fn=nv(document.body,{onStart:n=>{Nr.clear(),mh(n)},onLoad:xh,canLoad:Nr.exists(),onFirstGesture:()=>Jt.titleSong(()=>M.tMs)});je.on(n=>{n.type==="collect"&&xs(!0)});addEventListener("pagehide",()=>xs(!0));window.__lb.save={get exists(){return Nr.exists()},snapshot:gh,restore:_h,write:()=>xs(!0),clear:()=>Nr.clear(),load:xh};window.__lb.audio={get voiceReady(){return Jt.voiceReady},get titleSongPlayed(){return Jt.titleSongPlayed}};window.__lb.title={get open(){return Fn.open},get panel(){return Fn.panel},get roster(){return Fn.roster},get selected(){return Fn.selectedId},get canLoad(){return Fn.canLoad},toPick(){Fn._toPick()},select(n){Fn._select(n)},start(){Fn._start()},load(){Fn._load()}};window.__lb.started=()=>M.started;window.__lb.character=()=>Yl;
