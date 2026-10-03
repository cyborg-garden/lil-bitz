(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const El="185",Rh=0,fc=1,Ch=2,js=1,Ph=2,Zr=3,Li=0,rn=1,At=2,li=0,Di=1,Ii=2,pc=3,mc=4,Dh=5,Hi=100,Ih=101,Lh=102,Nh=103,Uh=104,Fh=200,Oh=201,kh=202,zh=203,yo=204,bo=205,Bh=206,Gh=207,Hh=208,Vh=209,Wh=210,Xh=211,qh=212,Yh=213,$h=214,Eo=0,wo=1,To=2,Ar=3,Ao=4,Ro=5,Co=6,Po=7,wl=0,Kh=1,Zh=2,zn=0,Ku=1,Zu=2,Ju=3,Qu=4,ju=5,ed=6,td=7,nd=300,Yi=301,Rr=302,La=303,Na=304,Sa=306,Do=1e3,ri=1001,Io=1002,kt=1003,Jh=1004,ys=1005,Ft=1006,Ua=1007,si=1008,dn=1009,id=1010,rd=1011,is=1012,Tl=1013,Xn=1014,Tn=1015,di=1016,Al=1017,Rl=1018,rs=1020,sd=35902,ad=35899,od=1021,ld=1022,An=1023,hi=1026,Wi=1027,Cl=1028,Pl=1029,$i=1030,Dl=1031,Il=1033,ea=33776,ta=33777,na=33778,ia=33779,Lo=35840,No=35841,Uo=35842,Fo=35843,Oo=36196,ko=37492,zo=37496,Bo=37488,Go=37489,ca=37490,Ho=37491,Vo=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,$o=37813,Ko=37814,Zo=37815,Jo=37816,Qo=37817,jo=37818,el=37819,tl=37820,nl=37821,il=36492,rl=36494,sl=36495,al=36283,ol=36284,ua=36285,ll=36286,Qh=3200,cl=0,jh=1,Ai="",dt="srgb",da="srgb-linear",ha="linear",rt="srgb",nr=7680,gc=519,ef=512,tf=513,nf=514,Ll=515,rf=516,sf=517,Nl=518,af=519,_c=35044,fa=35048,xc="300 es",kn=2e3,ss=2001;function of(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function as(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lf(){const n=as("canvas");return n.style.display="block",n}const vc={};function Mc(...n){const e="THREE."+n.shift();console.log(e,...n)}function cd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=cd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Qe(...n){n=cd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function br(...n){const e=n.join(" ");e in vc||(vc[e]=!0,Ne(...n))}function cf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const uf={[Eo]:wo,[To]:Co,[Ao]:Po,[Ar]:Ro,[wo]:Eo,[Co]:To,[Po]:Ao,[Ro]:Ar};class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fa=Math.PI/180,ul=180/Math.PI;function us(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function df(n,e){return(n%e+e)%e}function Oa(n,e,t){return(1-t)*n+t*e}function zr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const jl=class jl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jl.prototype.isVector2=!0;let Ge=jl;class qn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],p=s[a+1],m=s[a+2],S=s[a+3];if(h!==S||c!==d||l!==p||u!==m){let f=c*d+l*p+u*m+h*S;f<0&&(d=-d,p=-p,m=-m,S=-S,f=-f);let g=1-o;if(f<.9995){const E=Math.acos(f),w=Math.sin(E);g=Math.sin(g*E)/w,o=Math.sin(o*E)/w,c=c*g+d*o,l=l*g+p*o,u=u*g+m*o,h=h*g+S*o}else{c=c*g+d*o,l=l*g+p*o,u=u*g+m*o,h=h*g+S*o;const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+u*h+c*p-l*d,e[t+1]=c*m+u*d+l*h-o*p,e[t+2]=l*m+u*p+o*d-c*h,e[t+3]=u*m-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),p=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h+d*p*m;break;case"YZX":this._x=d*u*h+l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h-d*p*m;break;case"XZY":this._x=d*u*h-l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h+d*p*m;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ec=class ec{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ec.prototype.isVector3=!0;let z=ec;const ka=new z,Sc=new qn,tc=class tc{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],S=r[0],f=r[3],g=r[6],E=r[1],w=r[4],v=r[7],b=r[2],R=r[5],T=r[8];return s[0]=a*S+o*E+c*b,s[3]=a*f+o*w+c*R,s[6]=a*g+o*v+c*T,s[1]=l*S+u*E+h*b,s[4]=l*f+u*w+h*R,s[7]=l*g+u*v+h*T,s[2]=d*S+p*E+m*b,s[5]=d*f+p*w+m*R,s[8]=d*g+p*v+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,p=l*s-a*c,m=t*h+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/m;return e[0]=h*S,e[1]=(r*l-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(u*t-r*c)*S,e[5]=(r*s-o*t)*S,e[6]=p*S,e[7]=(i*c-l*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(za.makeScale(e,t)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(za.makeRotation(-e)),this}translate(e,t){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tc.prototype.isMatrix3=!0;let Ue=tc;const za=new Ue,yc=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hf(){const n={enabled:!0,workingColorSpace:da,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ai?ha:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[da]:{primaries:e,whitePoint:i,transfer:ha,toXYZ:yc,fromXYZ:bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:yc,fromXYZ:bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),n}const Xe=hf();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ir;class ff{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ir===void 0&&(ir=as("canvas")),ir.width=e.width,ir.height=e.height;const r=ir.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ir}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pf=0;class Ul{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ba(r[a].image)):s.push(Ba(r[a]))}else s=Ba(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ff.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let mf=0;const Ga=new z;class Bt extends Qi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=ri,r=ri,s=Ft,a=si,o=An,c=dn,l=Bt.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=us(),this.name="",this.source=new Ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ga).x}get height(){return this.source.getSize(Ga).y}get depth(){return this.source.getSize(Ga).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=nd;Bt.DEFAULT_ANISOTROPY=1;const nc=class nc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],m=c[9],S=c[2],f=c[6],g=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(m-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(m+f)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,v=(p+1)/2,b=(g+1)/2,R=(u+d)/4,T=(h+S)/4,_=(m+f)/4;return w>v&&w>b?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=R/i,s=T/i):v>b?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=R/r,s=_/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=_/s),this.set(i,r,s,t),this}let E=Math.sqrt((f-m)*(f-m)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(f-m)/E,this.y=(h-S)/E,this.z=(d-u)/E,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nc.prototype.isVector4=!0;let gt=nc;class gf extends Qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Bt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ul(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends gf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ud extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _f extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ma=class Ma{constructor(e,t,i,r,s,a,o,c,l,u,h,d,p,m,S,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,d,p,m,S,f)}set(e,t,i,r,s,a,o,c,l,u,h,d,p,m,S,f){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=d,g[3]=p,g[7]=m,g[11]=S,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ma().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,m=o*u,S=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+m*l,t[5]=d-S*l,t[9]=-o*c,t[2]=S-d*l,t[6]=m+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,m=l*u,S=l*h;t[0]=d+S*o,t[4]=m*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-m,t[6]=S+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,m=l*u,S=l*h;t[0]=d-S*o,t[4]=-a*h,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*u,t[9]=S-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*h,m=o*u,S=o*h;t[0]=c*u,t[4]=m*l-p,t[8]=d*l+S,t[1]=c*h,t[5]=S*l+d,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,m=o*c,S=o*l;t[0]=c*u,t[4]=S-d*h,t[8]=m*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+m,t[10]=d-S*h}else if(e.order==="XZY"){const d=a*c,p=a*l,m=o*c,S=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+S,t[5]=a*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=o*u,t[10]=S*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xf,e,vf)}lookAt(e,t,i){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Mi.crossVectors(i,on),Mi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Mi.crossVectors(i,on)),Mi.normalize(),bs.crossVectors(on,Mi),r[0]=Mi.x,r[4]=bs.x,r[8]=on.x,r[1]=Mi.y,r[5]=bs.y,r[9]=on.y,r[2]=Mi.z,r[6]=bs.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],S=i[6],f=i[10],g=i[14],E=i[3],w=i[7],v=i[11],b=i[15],R=r[0],T=r[4],_=r[8],y=r[12],C=r[1],D=r[5],I=r[9],U=r[13],O=r[2],L=r[6],V=r[10],G=r[14],Z=r[3],H=r[7],ie=r[11],te=r[15];return s[0]=a*R+o*C+c*O+l*Z,s[4]=a*T+o*D+c*L+l*H,s[8]=a*_+o*I+c*V+l*ie,s[12]=a*y+o*U+c*G+l*te,s[1]=u*R+h*C+d*O+p*Z,s[5]=u*T+h*D+d*L+p*H,s[9]=u*_+h*I+d*V+p*ie,s[13]=u*y+h*U+d*G+p*te,s[2]=m*R+S*C+f*O+g*Z,s[6]=m*T+S*D+f*L+g*H,s[10]=m*_+S*I+f*V+g*ie,s[14]=m*y+S*U+f*G+g*te,s[3]=E*R+w*C+v*O+b*Z,s[7]=E*T+w*D+v*L+b*H,s[11]=E*_+w*I+v*V+b*ie,s[15]=E*y+w*U+v*G+b*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],S=e[7],f=e[11],g=e[15],E=c*p-l*d,w=o*p-l*h,v=o*d-c*h,b=a*p-l*u,R=a*d-c*u,T=a*h-o*u;return t*(S*E-f*w+g*v)-i*(m*E-f*b+g*R)+r*(m*w-S*b+g*T)-s*(m*v-S*R+f*T)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],S=e[13],f=e[14],g=e[15],E=t*o-i*a,w=t*c-r*a,v=t*l-s*a,b=i*c-r*o,R=i*l-s*o,T=r*l-s*c,_=u*S-h*m,y=u*f-d*m,C=u*g-p*m,D=h*f-d*S,I=h*g-p*S,U=d*g-p*f,O=E*U-w*I+v*D+b*C-R*y+T*_;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return e[0]=(o*U-c*I+l*D)*L,e[1]=(r*I-i*U-s*D)*L,e[2]=(S*T-f*R+g*b)*L,e[3]=(d*R-h*T-p*b)*L,e[4]=(c*C-a*U-l*y)*L,e[5]=(t*U-r*C+s*y)*L,e[6]=(f*v-m*T-g*w)*L,e[7]=(u*T-d*v+p*w)*L,e[8]=(a*I-o*C+l*_)*L,e[9]=(i*C-t*I-s*_)*L,e[10]=(m*R-S*v+g*E)*L,e[11]=(h*v-u*R-p*E)*L,e[12]=(o*y-a*D-c*_)*L,e[13]=(t*D-i*y+r*_)*L,e[14]=(S*w-m*b-f*E)*L,e[15]=(u*b-h*w+d*E)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,p=s*u,m=s*h,S=a*u,f=a*h,g=o*h,E=c*l,w=c*u,v=c*h,b=i.x,R=i.y,T=i.z;return r[0]=(1-(S+g))*b,r[1]=(p+v)*b,r[2]=(m-w)*b,r[3]=0,r[4]=(p-v)*R,r[5]=(1-(d+g))*R,r[6]=(f+E)*R,r[7]=0,r[8]=(m+w)*T,r[9]=(f-E)*T,r[10]=(1-(d+S))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=rr.set(r[0],r[1],r[2]).length();const o=rr.set(r[4],r[5],r[6]).length(),c=rr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),yn.copy(this);const l=1/a,u=1/o,h=1/c;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=kn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let m,S;if(c)m=s/(a-s),S=a*s/(a-s);else if(o===kn)m=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===ss)m=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=kn,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let m,S;if(c)m=1/(a-s),S=a/(a-s);else if(o===kn)m=-2/(a-s),S=-(a+s)/(a-s);else if(o===ss)m=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ma.prototype.isMatrix4=!0;let ot=Ma;const rr=new z,yn=new ot,xf=new z(0,0,0),vf=new z(1,1,1),Mi=new z,bs=new z,on=new z,Ec=new ot,wc=new qn;class Yn{constructor(e=0,t=0,i=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mf=0;const Tc=new z,sr=new qn,Kn=new ot,Es=new z,Br=new z,Sf=new z,yf=new qn,Ac=new z(1,0,0),Rc=new z(0,1,0),Cc=new z(0,0,1),Pc={type:"added"},bf={type:"removed"},ar={type:"childadded",child:null},Ha={type:"childremoved",child:null};class Gt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new z,t=new Yn,i=new qn,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ue}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Ac,e)}rotateY(e){return this.rotateOnAxis(Rc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ac,e)}translateY(e){return this.translateOnAxis(Rc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Es.copy(e):Es.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Br,Es,this.up):Kn.lookAt(Es,Br,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(Kn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pc),ar.child=e,this.dispatchEvent(ar),ar.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bf),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pc),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,Sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new z(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ws extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ef={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const f=t.getJointPose(S,i),g=this._getHandJoint(l,S);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ef)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Wa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=df(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Wa(a,s,e+1/3),this.g=Wa(a,s,e),this.b=Wa(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,t=dt){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const i=hd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Xe.workingToColorSpace(Wt.copy(this),e),Math.round(qe(Wt.r*255,0,255))*65536+Math.round(qe(Wt.g*255,0,255))*256+Math.round(qe(Wt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Wt.copy(this),t);const i=Wt.r,r=Wt.g,s=Wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=dt){Xe.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,r=Wt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Ts);const i=Oa(Si.h,Ts.h,t),r=Oa(Si.s,Ts.s,t),s=Oa(Si.l,Ts.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ie;Ie.NAMES=hd;class Fl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=i}clone(){return new Fl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wf extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bn=new z,Zn=new z,Xa=new z,Jn=new z,or=new z,lr=new z,Dc=new z,qa=new z,Ya=new z,$a=new z,Ka=new gt,Za=new gt,Ja=new gt;class wn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){bn.subVectors(r,t),Zn.subVectors(i,t),Xa.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(Zn),c=bn.dot(Xa),l=Zn.dot(Zn),u=Zn.dot(Xa),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,m=(a*u-o*c)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(e,t),Za.fromBufferAttribute(e,i),Ja.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ka,s.x),a.addScaledVector(Za,s.y),a.addScaledVector(Ja,s.z),a}static isFrontFacing(e,t,i,r){return bn.subVectors(i,t),Zn.subVectors(e,t),bn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;or.subVectors(r,i),lr.subVectors(s,i),qa.subVectors(e,i);const c=or.dot(qa),l=lr.dot(qa);if(c<=0&&l<=0)return t.copy(i);Ya.subVectors(e,r);const u=or.dot(Ya),h=lr.dot(Ya);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(or,a);$a.subVectors(e,s);const p=or.dot($a),m=lr.dot($a);if(m>=0&&p<=m)return t.copy(s);const S=p*l-c*m;if(S<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(lr,o);const f=u*m-p*h;if(f<=0&&h-u>=0&&p-m>=0)return Dc.subVectors(s,r),o=(h-u)/(h-u+(p-m)),t.copy(r).addScaledVector(Dc,o);const g=1/(f+S+d);return a=S*g,o=d*g,t.copy(i).addScaledVector(or,a).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ji{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(s,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),As.copy(i.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),Rs.subVectors(this.max,Gr),cr.subVectors(e.a,Gr),ur.subVectors(e.b,Gr),dr.subVectors(e.c,Gr),yi.subVectors(ur,cr),bi.subVectors(dr,ur),Fi.subVectors(cr,dr);let t=[0,-yi.z,yi.y,0,-bi.z,bi.y,0,-Fi.z,Fi.y,yi.z,0,-yi.x,bi.z,0,-bi.x,Fi.z,0,-Fi.x,-yi.y,yi.x,0,-bi.y,bi.x,0,-Fi.y,Fi.x,0];return!Qa(t,cr,ur,dr,Rs)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,cr,ur,dr,Rs))?!1:(Cs.crossVectors(yi,bi),t=[Cs.x,Cs.y,Cs.z],Qa(t,cr,ur,dr,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new z,new z,new z,new z,new z,new z,new z,new z],En=new z,As=new ji,cr=new z,ur=new z,dr=new z,yi=new z,bi=new z,Fi=new z,Gr=new z,Rs=new z,Cs=new z,Oi=new z;function Qa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Oi.fromArray(n,s);const o=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),c=e.dot(Oi),l=t.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const wt=new z,Ps=new Ge;let Tf=0;class qt extends Qi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_c,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_c&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fd extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pd extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Af=new ji,Hr=new z,ja=new z;class ds{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Af.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(ja)),this.expandByPoint(Hr.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Rf=0;const pn=new ot,eo=new Gt,hr=new z,ln=new ji,Vr=new ji,Nt=new z;class sn extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?pd:fd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(ln.min,Vr.min),ln.expandByPoint(Nt),Nt.addVectors(ln.max,Vr.max),ln.expandByPoint(Nt)):(ln.expandByPoint(Vr.min),ln.expandByPoint(Vr.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Nt.fromBufferAttribute(o,l),c&&(hr.fromBufferAttribute(e,l),Nt.add(hr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new z,c[_]=new z;const l=new z,u=new z,h=new z,d=new Ge,p=new Ge,m=new Ge,S=new z,f=new z;function g(_,y,C){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,C),d.fromBufferAttribute(s,_),p.fromBufferAttribute(s,y),m.fromBufferAttribute(s,C),u.sub(l),h.sub(l),p.sub(d),m.sub(d);const D=1/(p.x*m.y-m.x*p.y);isFinite(D)&&(S.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(D),f.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(D),o[_].add(S),o[y].add(S),o[C].add(S),c[_].add(f),c[y].add(f),c[C].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let _=0,y=E.length;_<y;++_){const C=E[_],D=C.start,I=C.count;for(let U=D,O=D+I;U<O;U+=3)g(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const w=new z,v=new z,b=new z,R=new z;function T(_){b.fromBufferAttribute(r,_),R.copy(b);const y=o[_];w.copy(y),w.sub(b.multiplyScalar(b.dot(y))).normalize(),v.crossVectors(R,y);const D=v.dot(c[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,D)}for(let _=0,y=E.length;_<y;++_){const C=E[_],D=C.start,I=C.count;for(let U=D,O=D+I;U<O;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),S=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,f),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,f),o.add(u),c.add(u),l.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,m=0;for(let S=0,f=c.length;S<f;S++){o.isInterleavedBufferAttribute?p=c[S]*o.data.stride+o.offset:p=c[S]*u;for(let g=0;g<u;g++)d[m++]=l[p++]}return new qt(d,u,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Cf=0;class hs extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Di,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=bo,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yo&&(i.blendSrc=this.blendSrc),this.blendDst!==bo&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jn=new z,to=new z,Ds=new z,Ei=new z,no=new z,Is=new z,io=new z;class Pf{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){to.copy(e).add(t).multiplyScalar(.5),Ds.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(to);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ds),o=Ei.dot(this.direction),c=-Ei.dot(Ds),l=Ei.lengthSq(),u=Math.abs(1-a*a);let h,d,p,m;if(u>0)if(h=a*c-o,d=a*o-c,m=s*u,h>=0)if(d>=-m)if(d<=m){const S=1/u;h*=S,d*=S,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(to).addScaledVector(Ds,d),p}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,r,s){no.subVectors(t,e),Is.subVectors(i,e),io.crossVectors(no,Is);let a=this.direction.dot(io),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const c=o*this.direction.dot(Is.crossVectors(Ei,Is));if(c<0)return null;const l=o*this.direction.dot(no.cross(Ei));if(l<0||c+l>a)return null;const u=-o*Ei.dot(io);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ic=new ot,ki=new Pf,Ls=new ds,Lc=new z,Ns=new z,Us=new z,Fs=new z,ro=new z,Os=new z,Nc=new z,ks=new z;class at extends Gt{constructor(e=new sn,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Os.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(ro.fromBufferAttribute(h,e),a?Os.addScaledVector(ro,u):Os.addScaledVector(ro.sub(t),u))}t.add(Os)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(Ls.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Ls,Lc)===null||ki.origin.distanceToSquared(Lc)>(e.far-e.near)**2))&&(Ic.copy(s).invert(),ki.copy(e.ray).applyMatrix4(Ic),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,S=d.length;m<S;m++){const f=d[m],g=a[f.materialIndex],E=Math.max(f.start,p.start),w=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let v=E,b=w;v<b;v+=3){const R=o.getX(v),T=o.getX(v+1),_=o.getX(v+2);r=zs(this,g,e,i,l,u,h,R,T,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let f=m,g=S;f<g;f+=3){const E=o.getX(f),w=o.getX(f+1),v=o.getX(f+2);r=zs(this,a,e,i,l,u,h,E,w,v),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,S=d.length;m<S;m++){const f=d[m],g=a[f.materialIndex],E=Math.max(f.start,p.start),w=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let v=E,b=w;v<b;v+=3){const R=v,T=v+1,_=v+2;r=zs(this,g,e,i,l,u,h,R,T,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let f=m,g=S;f<g;f+=3){const E=f,w=f+1,v=f+2;r=zs(this,a,e,i,l,u,h,E,w,v),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Df(n,e,t,i,r,s,a,o){let c;if(e.side===rn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Li,o),c===null)return null;ks.copy(o),ks.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ks);return l<t.near||l>t.far?null:{distance:l,point:ks.clone(),object:n}}function zs(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ns),n.getVertexPosition(c,Us),n.getVertexPosition(l,Fs);const u=Df(n,e,t,i,Ns,Us,Fs,Nc);if(u){const h=new z;wn.getBarycoord(Nc,Ns,Us,Fs,h),r&&(u.uv=wn.getInterpolatedAttribute(r,o,c,l,h,new Ge)),s&&(u.uv1=wn.getInterpolatedAttribute(s,o,c,l,h,new Ge)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,c,l,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new z,materialIndex:0};wn.getNormal(Ns,Us,Fs,d.normal),u.face=d,u.barycoord=h}return u}class md extends Bt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=kt,u=kt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends qt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fr=new ot,Fc=new ot,Bs=[],Oc=new ji,If=new ot,Wr=new at,Xr=new ds;class pa extends at{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Uc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,If)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),Oc.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(Oc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ds),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),Xr.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(Xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(i),e.ray.intersectsSphere(Xr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,fr),Fc.multiplyMatrices(i,fr),Wr.matrixWorld=Fc,Wr.raycast(e,Bs);for(let a=0,o=Bs.length;a<o;a++){const c=Bs[a];c.instanceId=s,c.object=this,t.push(c)}Bs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new md(new Float32Array(r*this.count),r,this.count,Cl,Tn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const so=new z,Lf=new z,Nf=new Ue;class Gi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=so.subVectors(i,t).cross(Lf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(so),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nf.getNormalMatrix(e),r=this.coplanarPoint(so).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new ds,Uf=new Ge(.5,.5),Gs=new z;class Ol{constructor(e=new Gi,t=new Gi,i=new Gi,r=new Gi,s=new Gi,a=new Gi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],p=s[7],m=s[8],S=s[9],f=s[10],g=s[11],E=s[12],w=s[13],v=s[14],b=s[15];if(r[0].setComponents(l-a,p-u,g-m,b-E).normalize(),r[1].setComponents(l+a,p+u,g+m,b+E).normalize(),r[2].setComponents(l+o,p+h,g+S,b+w).normalize(),r[3].setComponents(l-o,p-h,g-S,b-w).normalize(),i)r[4].setComponents(c,d,f,v).normalize(),r[5].setComponents(l-c,p-d,g-f,b-v).normalize();else if(r[4].setComponents(l-c,p-d,g-f,b-v).normalize(),t===kn)r[5].setComponents(l+c,p+d,g+f,b+v).normalize();else if(t===ss)r[5].setComponents(c,d,f,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);const t=Uf.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Gs.x=r.normal.x>0?e.max.x:e.min.x,Gs.y=r.normal.y>0?e.max.y:e.min.y,Gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gd extends Bt{constructor(e=[],t=Yi,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sn extends Bt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cr extends Bt{constructor(e,t,i=Xn,r,s,a,o=kt,c=kt,l,u=hi,h=1){if(u!==hi&&u!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ul(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ff extends Cr{constructor(e,t=Xn,i=Yi,r,s,a=kt,o=kt,c,l=hi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _d extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fs extends sn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(h,2));function m(S,f,g,E,w,v,b,R,T,_,y){const C=v/T,D=b/_,I=v/2,U=b/2,O=R/2,L=T+1,V=_+1;let G=0,Z=0;const H=new z;for(let ie=0;ie<V;ie++){const te=ie*D-U;for(let ae=0;ae<L;ae++){const we=ae*C-I;H[S]=we*E,H[f]=te*w,H[g]=O,l.push(H.x,H.y,H.z),H[S]=0,H[f]=0,H[g]=R>0?1:-1,u.push(H.x,H.y,H.z),h.push(ae/T),h.push(1-ie/_),G+=1}}for(let ie=0;ie<_;ie++)for(let te=0;te<T;te++){const ae=d+te+L*ie,we=d+te+L*(ie+1),$e=d+(te+1)+L*(ie+1),We=d+(te+1)+L*ie;c.push(ae,we,We),c.push(we,$e,We),Z+=6}o.addGroup(p,Z,y),p+=Z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mn extends sn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let m=0;const S=[],f=i/2;let g=0;E(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(p,2));function E(){const v=new z,b=new z;let R=0;const T=(t-e)/i;for(let _=0;_<=s;_++){const y=[],C=_/s,D=C*(t-e)+e;for(let I=0;I<=r;I++){const U=I/r,O=U*c+o,L=Math.sin(O),V=Math.cos(O);b.x=D*L,b.y=-C*i+f,b.z=D*V,h.push(b.x,b.y,b.z),v.set(L,T,V).normalize(),d.push(v.x,v.y,v.z),p.push(U,1-C),y.push(m++)}S.push(y)}for(let _=0;_<r;_++)for(let y=0;y<s;y++){const C=S[y][_],D=S[y+1][_],I=S[y+1][_+1],U=S[y][_+1];(e>0||y!==0)&&(u.push(C,D,U),R+=3),(t>0||y!==s-1)&&(u.push(D,I,U),R+=3)}l.addGroup(g,R,0),g+=R}function w(v){const b=m,R=new Ge,T=new z;let _=0;const y=v===!0?e:t,C=v===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,f*C,0),d.push(0,C,0),p.push(.5,.5),m++;const D=m;for(let I=0;I<=r;I++){const O=I/r*c+o,L=Math.cos(O),V=Math.sin(O);T.x=y*V,T.y=f*C,T.z=y*L,h.push(T.x,T.y,T.z),d.push(0,C,0),R.x=L*.5+.5,R.y=V*.5*C+.5,p.push(R.x,R.y),m++}for(let I=0;I<r;I++){const U=b+I,O=D+I;v===!0?u.push(O,O+1,U):u.push(O+1,O,U),_+=3}l.addGroup(g,_,v===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kl extends Mn{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new kl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fr extends sn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),l(i),u(),this.setAttribute("position",new Pt(s,3)),this.setAttribute("normal",new Pt(s.slice(),3)),this.setAttribute("uv",new Pt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const w=new z,v=new z,b=new z;for(let R=0;R<t.length;R+=3)p(t[R+0],w),p(t[R+1],v),p(t[R+2],b),c(w,v,b,E)}function c(E,w,v,b){const R=b+1,T=[];for(let _=0;_<=R;_++){T[_]=[];const y=E.clone().lerp(v,_/R),C=w.clone().lerp(v,_/R),D=R-_;for(let I=0;I<=D;I++)I===0&&_===R?T[_][I]=y:T[_][I]=y.clone().lerp(C,I/D)}for(let _=0;_<R;_++)for(let y=0;y<2*(R-_)-1;y++){const C=Math.floor(y/2);y%2===0?(d(T[_][C+1]),d(T[_+1][C]),d(T[_][C])):(d(T[_][C+1]),d(T[_+1][C+1]),d(T[_+1][C]))}}function l(E){const w=new z;for(let v=0;v<s.length;v+=3)w.x=s[v+0],w.y=s[v+1],w.z=s[v+2],w.normalize().multiplyScalar(E),s[v+0]=w.x,s[v+1]=w.y,s[v+2]=w.z}function u(){const E=new z;for(let w=0;w<s.length;w+=3){E.x=s[w+0],E.y=s[w+1],E.z=s[w+2];const v=f(E)/2/Math.PI+.5,b=g(E)/Math.PI+.5;a.push(v,1-b)}m(),h()}function h(){for(let E=0;E<a.length;E+=6){const w=a[E+0],v=a[E+2],b=a[E+4],R=Math.max(w,v,b),T=Math.min(w,v,b);R>.9&&T<.1&&(w<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),b<.2&&(a[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function p(E,w){const v=E*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function m(){const E=new z,w=new z,v=new z,b=new z,R=new Ge,T=new Ge,_=new Ge;for(let y=0,C=0;y<s.length;y+=9,C+=6){E.set(s[y+0],s[y+1],s[y+2]),w.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),R.set(a[C+0],a[C+1]),T.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),b.copy(E).add(w).add(v).divideScalar(3);const D=f(b);S(R,C+0,E,D),S(T,C+2,w,D),S(_,C+4,v,D)}}function S(E,w,v,b){b<0&&E.x===1&&(a[w]=E.x-1),v.x===0&&v.z===0&&(a[w]=b/2/Math.PI+.5)}function f(E){return Math.atan2(E.z,-E.x)}function g(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.vertices,e.indices,e.radius,e.detail)}}class zl extends Fr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zl(e.radius,e.detail)}}class fi extends Fr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fi(e.radius,e.detail)}}class Bl extends Fr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bl(e.radius,e.detail)}}class $t extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,p=[],m=[],S=[],f=[];for(let g=0;g<u;g++){const E=g*d-a;for(let w=0;w<l;w++){const v=w*h-s;m.push(v,-E,0),S.push(0,0,1),f.push(w/o),f.push(1-g/c)}}for(let g=0;g<c;g++)for(let E=0;E<o;E++){const w=E+l*g,v=E+l*(g+1),b=E+1+l*(g+1),R=E+1+l*g;p.push(w,v,R),p.push(v,b,R)}this.setIndex(p),this.setAttribute("position",new Pt(m,3)),this.setAttribute("normal",new Pt(S,3)),this.setAttribute("uv",new Pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.widthSegments,e.heightSegments)}}class ps extends sn{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/r,p=new z,m=new Ge;for(let S=0;S<=r;S++){for(let f=0;f<=i;f++){const g=s+f/i*a;p.x=h*Math.cos(g),p.y=h*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let S=0;S<r;S++){const f=S*(i+1);for(let g=0;g<i;g++){const E=g+f,w=E,v=E+i+1,b=E+i+2,R=E+1;o.push(w,v,R),o.push(v,b,R)}}this.setIndex(o),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ya extends Fr{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ya(e.radius,e.detail)}}function Pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(kc(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(kc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=Pr(n[t]);for(const r in i)e[r]=i[r]}return e}function kc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Of(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const kf={clone:Pr,merge:Zt};var zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Of(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ie().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"v3":this.uniforms[i].value=new z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ot().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Gf extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ki extends hs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hf extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vf extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ao={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(zc(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!zc(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function zc(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Wf{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],m=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Xf=new Wf;class Gl{constructor(e){this.manager=e!==void 0?e:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Gl.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr=new WeakMap;class qf extends Gl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ao.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=pr.get(a);h===void 0&&(h=[],pr.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=as("img");function c(){u(),t&&t(this);const h=pr.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}pr.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),ao.remove(`image:${e}`);const d=pr.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onError&&m.onError(h)}pr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ao.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class vd extends Gl{constructor(e){super(e)}load(e,t,i,r){const s=new Bt,a=new qf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Md extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Yf extends Md{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const oo=new ot,Bc=new z,Gc=new z;class $f{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bc),Gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gc),t.updateMatrixWorld(),oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ss||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hs=new z,Vs=new qn,Dn=new z;class Sd extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hs,Vs,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Vs,Dn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Hs,Vs,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Vs,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wi=new z,Hc=new Ge,Vc=new Ge;class un extends Sd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Hc,Vc),t.subVectors(Vc,Hc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hl extends Sd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kf extends $f{constructor(){super(new Hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zf extends Md{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Kf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const mr=-90,gr=1;class Jf extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(mr,gr,e,t);r.layers=this.layers,this.add(r);const s=new un(mr,gr,e,t);s.layers=this.layers,this.add(s);const a=new un(mr,gr,e,t);a.layers=this.layers,this.add(a);const o=new un(mr,gr,e,t);o.layers=this.layers,this.add(o);const c=new un(mr,gr,e,t);c.layers=this.layers,this.add(c);const l=new un(mr,gr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Qf extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ic=class ic{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};ic.prototype.isMatrix2=!0;let Wc=ic;function Xc(n,e,t,i){const r=jf(i);switch(t){case od:return n*e;case Cl:return n*e/r.components*r.byteLength;case Pl:return n*e/r.components*r.byteLength;case $i:return n*e*2/r.components*r.byteLength;case Dl:return n*e*2/r.components*r.byteLength;case ld:return n*e*3/r.components*r.byteLength;case An:return n*e*4/r.components*r.byteLength;case Il:return n*e*4/r.components*r.byteLength;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case No:case Fo:return Math.max(n,16)*Math.max(e,8)/4;case Lo:case Uo:return Math.max(n,8)*Math.max(e,8)/2;case Oo:case ko:case Bo:case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zo:case ca:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case il:case rl:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case al:case ol:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ua:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jf(n){switch(n){case dn:case id:return{byteLength:1,components:1};case is:case rd:case di:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case Xn:case Tl:case Tn:return{byteLength:4,components:1};case sd:case ad:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);function yd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ep(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],S=h[p];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++d,h[d]=S)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const S=h[p];n.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
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
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pp=`#ifdef USE_IRIDESCENCE
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
#endif`,mp=`#ifdef USE_BUMPMAP
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ep=`#define PI 3.141592653589793
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
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yp=`#ifdef USE_ENVMAP
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
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
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
#endif`,jp=`uniform sampler2D dfgLUT;
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
}`,em=`
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dm=`#if defined( USE_POINTS_UV )
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
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
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
}`,l0=`#if DEPTH_PACKING == 3200
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
}`,c0=`#define DISTANCE
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
}`,u0=`#define DISTANCE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,x0=`#define LAMBERT
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
}`,v0=`#define MATCAP
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
}`,M0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,y0=`#define NORMAL
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
}`,b0=`#define PHONG
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
}`,E0=`#define PHONG
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
}`,w0=`#define STANDARD
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
}`,T0=`#define STANDARD
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
}`,A0=`#define TOON
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
}`,R0=`#define TOON
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
}`,C0=`uniform float size;
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
}`,P0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,I0=`uniform vec3 color;
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
}`,L0=`uniform float rotation;
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
}`,N0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:tp,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:rp,alphatest_fragment:sp,alphatest_pars_fragment:ap,aomap_fragment:op,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:hp,bsdfs:fp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:xp,clipping_planes_vertex:vp,color_fragment:Mp,color_pars_fragment:Sp,color_pars_vertex:yp,color_vertex:bp,common:Ep,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Dp,colorspace_pars_fragment:Ip,envmap_fragment:Lp,envmap_common_pars_fragment:Np,envmap_pars_fragment:Up,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:Yp,envmap_vertex:Op,fog_vertex:kp,fog_pars_vertex:zp,fog_fragment:Bp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:qp,lights_toon_fragment:$p,lights_toon_pars_fragment:Kp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Jp,lights_physical_fragment:Qp,lights_physical_pars_fragment:jp,lights_fragment_begin:em,lights_fragment_maps:tm,lights_fragment_end:nm,lightprobes_pars_fragment:im,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:om,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:um,map_particle_pars_fragment:dm,metalnessmap_fragment:hm,metalnessmap_pars_fragment:fm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:xm,normal_fragment_begin:vm,normal_fragment_maps:Mm,normal_pars_fragment:Sm,normal_pars_vertex:ym,normal_vertex:bm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Dm,project_vertex:Im,dithering_fragment:Lm,dithering_pars_fragment:Nm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:km,shadowmap_vertex:zm,shadowmask_pars_fragment:Bm,skinbase_vertex:Gm,skinning_pars_vertex:Hm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:$m,transmission_fragment:Km,transmission_pars_fragment:Zm,uv_pars_fragment:Jm,uv_pars_vertex:Qm,uv_vertex:jm,worldpos_vertex:e0,background_vert:t0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:r0,cube_vert:s0,cube_frag:a0,depth_vert:o0,depth_frag:l0,distance_vert:c0,distance_frag:u0,equirect_vert:d0,equirect_frag:h0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:x0,meshmatcap_vert:v0,meshmatcap_frag:M0,meshnormal_vert:S0,meshnormal_frag:y0,meshphong_vert:b0,meshphong_frag:E0,meshphysical_vert:w0,meshphysical_frag:T0,meshtoon_vert:A0,meshtoon_frag:R0,points_vert:C0,points_frag:P0,shadow_vert:D0,shadow_frag:I0,sprite_vert:L0,sprite_frag:N0},fe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},On={basic:{uniforms:Zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Zt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Zt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Zt([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Zt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Zt([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Zt([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Zt([fe.common,fe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Zt([fe.lights,fe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};On.physical={uniforms:Zt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ws={r:0,b:0,g:0},U0=new ot,bd=new Ue;bd.set(-1,0,0,0,1,0,0,0,1);function F0(n,e,t,i,r,s){const a=new Ie(0);let o=r===!0?0:1,c,l,u=null,h=0,d=null;function p(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){const v=E.backgroundBlurriness>0;w=e.get(w,v)}return w}function m(E){let w=!1;const v=p(E);v===null?f(a,o):v&&v.isColor&&(f(v,1),w=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(E,w){const v=p(w);v&&(v.isCubeTexture||v.mapping===Sa)?(l===void 0&&(l=new at(new fs(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Pr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bd),l.material.toneMapped=Xe.getTransfer(v.colorSpace)!==rt,(u!==v||h!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new at(new $t(2,2),new $n({name:"BackgroundMaterial",uniforms:Pr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,w){E.getRGB(Ws,xd(n)),t.buffers.color.setClear(Ws.r,Ws.g,Ws.b,w,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),o=w,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,f(a,o)},render:m,addToRenderList:S,dispose:g}}function O0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(D,I,U,O,L){let V=!1;const G=h(D,O,U,I);s!==G&&(s=G,l(s.object)),V=p(D,O,U,L),V&&m(D,O,U,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(D,I,U,O),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function h(D,I,U,O){const L=O.wireframe===!0;let V=i[I.id];V===void 0&&(V={},i[I.id]=V);const G=D.isInstancedMesh===!0?D.id:0;let Z=V[G];Z===void 0&&(Z={},V[G]=Z);let H=Z[U.id];H===void 0&&(H={},Z[U.id]=H);let ie=H[L];return ie===void 0&&(ie=d(c()),H[L]=ie),ie}function d(D){const I=[],U=[],O=[];for(let L=0;L<t;L++)I[L]=0,U[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:O,object:D,attributes:{},index:null}}function p(D,I,U,O){const L=s.attributes,V=I.attributes;let G=0;const Z=U.getAttributes();for(const H in Z)if(Z[H].location>=0){const te=L[H];let ae=V[H];if(ae===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),te===void 0||te.attribute!==ae||ae&&te.data!==ae.data)return!0;G++}return s.attributesNum!==G||s.index!==O}function m(D,I,U,O){const L={},V=I.attributes;let G=0;const Z=U.getAttributes();for(const H in Z)if(Z[H].location>=0){let te=V[H];te===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const ae={};ae.attribute=te,te&&te.data&&(ae.data=te.data),L[H]=ae,G++}s.attributes=L,s.attributesNum=G,s.index=O}function S(){const D=s.newAttributes;for(let I=0,U=D.length;I<U;I++)D[I]=0}function f(D){g(D,0)}function g(D,I){const U=s.newAttributes,O=s.enabledAttributes,L=s.attributeDivisors;U[D]=1,O[D]===0&&(n.enableVertexAttribArray(D),O[D]=1),L[D]!==I&&(n.vertexAttribDivisor(D,I),L[D]=I)}function E(){const D=s.newAttributes,I=s.enabledAttributes;for(let U=0,O=I.length;U<O;U++)I[U]!==D[U]&&(n.disableVertexAttribArray(U),I[U]=0)}function w(D,I,U,O,L,V,G){G===!0?n.vertexAttribIPointer(D,I,U,L,V):n.vertexAttribPointer(D,I,U,O,L,V)}function v(D,I,U,O){S();const L=O.attributes,V=U.getAttributes(),G=I.defaultAttributeValues;for(const Z in V){const H=V[Z];if(H.location>=0){let ie=L[Z];if(ie===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ie!==void 0){const te=ie.normalized,ae=ie.itemSize,we=e.get(ie);if(we===void 0)continue;const $e=we.buffer,We=we.type,J=we.bytesPerElement,re=We===n.INT||We===n.UNSIGNED_INT||ie.gpuType===Tl;if(ie.isInterleavedBufferAttribute){const ne=ie.data,ge=ne.stride,xe=ie.offset;if(ne.isInstancedInterleavedBuffer){for(let Se=0;Se<H.locationSize;Se++)g(H.location+Se,ne.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Se=0;Se<H.locationSize;Se++)f(H.location+Se);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Se=0;Se<H.locationSize;Se++)w(H.location+Se,ae/H.locationSize,We,te,ge*J,(xe+ae/H.locationSize*Se)*J,re)}else{if(ie.isInstancedBufferAttribute){for(let ne=0;ne<H.locationSize;ne++)g(H.location+ne,ie.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ne=0;ne<H.locationSize;ne++)f(H.location+ne);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let ne=0;ne<H.locationSize;ne++)w(H.location+ne,ae/H.locationSize,We,te,ae*J,ae/H.locationSize*ne*J,re)}}else if(G!==void 0){const te=G[Z];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(H.location,te);break;case 3:n.vertexAttrib3fv(H.location,te);break;case 4:n.vertexAttrib4fv(H.location,te);break;default:n.vertexAttrib1fv(H.location,te)}}}}E()}function b(){y();for(const D in i){const I=i[D];for(const U in I){const O=I[U];for(const L in O){const V=O[L];for(const G in V)u(V[G].object),delete V[G];delete O[L]}}delete i[D]}}function R(D){if(i[D.id]===void 0)return;const I=i[D.id];for(const U in I){const O=I[U];for(const L in O){const V=O[L];for(const G in V)u(V[G].object),delete V[G];delete O[L]}}delete i[D.id]}function T(D){for(const I in i){const U=i[I];for(const O in U){const L=U[O];if(L[D.id]===void 0)continue;const V=L[D.id];for(const G in V)u(V[G].object),delete V[G];delete L[D.id]}}}function _(D){for(const I in i){const U=i[I],O=D.isInstancedMesh===!0?D.id:0,L=U[O];if(L!==void 0){for(const V in L){const G=L[V];for(const Z in G)u(G[Z].object),delete G[Z];delete L[V]}delete U[O],Object.keys(U).length===0&&delete i[I]}}}function y(){C(),a=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:y,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:f,disableUnusedAttributes:E}}function k0(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let p=0;p<u;p++)d+=l[p];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function z0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==An&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const _=T===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==dn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Tn&&!_)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ne("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:v,maxSamples:b,samples:R}}function B0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Gi,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,S=h.clipIntersection,f=h.clipShadows,g=n.get(h);if(!r||m===null||m.length===0||s&&!f)s?u(null):l();else{const E=s?0:i,w=E*4;let v=g.clippingState||null;c.value=v,v=u(m,d,w,p);for(let b=0;b!==w;++b)v[b]=t[b];g.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){const S=h!==null?h.length:0;let f=null;if(S!==0){if(f=c.value,m!==!0||f===null){const g=p+S*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(f===null||f.length<g)&&(f=new Float32Array(g));for(let w=0,v=p;w!==S;++w,v+=4)a.copy(h[w]).applyMatrix4(E,o),a.normal.toArray(f,v),f[v+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,f}}const Ci=4,qc=[.125,.215,.35,.446,.526,.582],Vi=20,G0=256,qr=new Hl,Yc=new Ie;let lo=null,co=0,uo=0,ho=!1;const H0=new z;class $c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=H0}=s;lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lo,co,uo),this._renderer.xr.enabled=ho,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:di,format:An,colorSpace:da,depthBuffer:!1},r=Kc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=V0(s)),this._blurMaterial=X0(s,e,t),this._ggxMaterial=W0(s,e,t)}return r}_compileMaterial(e){const t=new at(new sn,e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,i,r,s){const c=new un(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Yc),h.toneMapping=zn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new fs,new Yt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,f=S.material;let g=!1;const E=e.background;E?E.isColor&&(f.color.copy(E),e.background=null,g=!0):(f.color.copy(Yc),g=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));const b=this._cubeSize;_r(r,v*b,w>2?b:0,b,b),h.setRenderTarget(r),g&&h.render(S,c),h.render(e,c)}h.toneMapping=p,h.autoClear=d,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Yi||e.mapping===Rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;_r(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,qr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,p=h*d,{_lodMax:m}=this,S=this._sizeLods[i],f=3*S*(i>m-Ci?i-m+Ci:0),g=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=m-t,_r(s,f,g,3*S,2*S),r.setRenderTarget(s),r.render(o,qr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-i,_r(e,f,g,3*S,2*S),r.setRenderTarget(e),r.render(o,qr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const d=l.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),S=s/m,f=isFinite(s)?1+Math.floor(u*S):Vi;f>Vi&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Vi}`);const g=[];let E=0;for(let T=0;T<Vi;++T){const _=T/S,y=Math.exp(-_*_/2);g.push(y),T===0?E+=y:T<f&&(E+=2*y)}for(let T=0;T<g.length;T++)g[T]=g[T]/E;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=m,d.mipInt.value=w-i;const v=this._sizeLods[r],b=3*v*(r>w-Ci?r-w+Ci:0),R=4*(this._cubeSize-v);_r(t,b,R,3*v,2*v),c.setRenderTarget(t),c.render(h,qr)}}function V0(n){const e=[],t=[],i=[];let r=n;const s=n-Ci+1+qc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Ci?c=qc[a-n+Ci-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,S=3,f=2,g=1,E=new Float32Array(S*m*p),w=new Float32Array(f*m*p),v=new Float32Array(g*m*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,_=R>2?0:-1,y=[T,_,0,T+2/3,_,0,T+2/3,_+1,0,T,_,0,T+2/3,_+1,0,T,_+1,0];E.set(y,S*m*R),w.set(d,f*m*R);const C=[R,R,R,R,R,R];v.set(C,g*m*R)}const b=new sn;b.setAttribute("position",new qt(E,S)),b.setAttribute("uv",new qt(w,f)),b.setAttribute("faceIndex",new qt(v,g)),i.push(new at(b,null)),r>Ci&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Kc(n,e,t){const i=new Bn(n,e,t);return i.texture.mapping=Sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function W0(n,e,t){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ba(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function X0(n,e,t){const i=new Float32Array(Vi),r=new z(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ba(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Zc(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Jc(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function ba(){return`

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
	`}class Ed extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fs(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:li});s.uniforms.tEquirect.value=t;const a=new at(r,s),o=t.minFilter;return t.minFilter===si&&(t.minFilter=Ft),new Jf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function q0(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===La||p===Na)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const S=new Ed(m.height);return S.fromEquirectangularTexture(n,d),e.set(d,S),d.addEventListener("dispose",l),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,m=p===La||p===Na,S=p===Yi||p===Rr;if(m||S){let f=t.get(d);const g=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new $c(n)),f=m?i.fromEquirectangular(d,f):i.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),f.texture;if(f!==void 0)return f.texture;{const E=d.image;return m&&E&&E.height>0||S&&E&&c(E)?(i===null&&(i=new $c(n)),f=m?i.fromEquirectangular(d):i.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),d.addEventListener("dispose",u),f.texture):null}}}return d}function o(d,p){return p===La?d.mapping=Yi:p===Na&&(d.mapping=Rr),d}function c(d){let p=0;const m=6;for(let S=0;S<m;S++)d[S]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Y0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&br("WebGLRenderer: "+i+" extension not supported."),r}}}function $0(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,m=h.attributes.position;let S=0;if(m===void 0)return;if(p!==null){const E=p.array;S=p.version;for(let w=0,v=E.length;w<v;w+=3){const b=E[w+0],R=E[w+1],T=E[w+2];d.push(b,R,R,T,T,b)}}else{const E=m.array;S=m.version;for(let w=0,v=E.length/3-1;w<v;w+=3){const b=w+0,R=w+1,T=w+2;d.push(b,R,R,T,T,b)}}const f=new(m.count>=65535?pd:fd)(d,1);f.version=S;const g=s.get(h);g&&e.remove(g),s.set(h,f)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function K0(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function l(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,s,h*a,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let S=0;for(let f=0;f<p;f++)S+=d[f];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Z0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function J0(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let C=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var p=C;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),S===!0&&(v=2),f===!0&&(v=3);let b=o.attributes.position.count*v,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*R*4*h),_=new ud(T,b,R,h);_.type=Tn,_.needsUpdate=!0;const y=v*4;for(let D=0;D<h;D++){const I=g[D],U=E[D],O=w[D],L=b*R*4*D;for(let V=0;V<I.count;V++){const G=V*y;m===!0&&(r.fromBufferAttribute(I,V),T[L+G+0]=r.x,T[L+G+1]=r.y,T[L+G+2]=r.z,T[L+G+3]=0),S===!0&&(r.fromBufferAttribute(U,V),T[L+G+4]=r.x,T[L+G+5]=r.y,T[L+G+6]=r.z,T[L+G+7]=0),f===!0&&(r.fromBufferAttribute(O,V),T[L+G+8]=r.x,T[L+G+9]=r.y,T[L+G+10]=r.z,T[L+G+11]=O.itemSize===4?r.w:1)}}d={count:h,texture:_,size:new Ge(b,R)},i.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let f=0;f<l.length;f++)m+=l[f];const S=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Q0(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const j0={[Ku]:"LINEAR_TONE_MAPPING",[Zu]:"REINHARD_TONE_MAPPING",[Ju]:"CINEON_TONE_MAPPING",[Qu]:"ACES_FILMIC_TONE_MAPPING",[ed]:"AGX_TONE_MAPPING",[td]:"NEUTRAL_TONE_MAPPING",[ju]:"CUSTOM_TONE_MAPPING"};function eg(n,e,t,i,r,s){const a=new Bn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Cr(e,t):void 0}),o=new Bn(e,t,{type:di,depthBuffer:!1,stencilBuffer:!1}),c=new sn;c.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const l=new Gf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new at(c,l),h=new Hl(-1,1,1,-1,0,1);let d=null,p=null,m=!1,S,f=null,g=[],E=!1;this.setSize=function(w,v){a.setSize(w,v),o.setSize(w,v);for(let b=0;b<g.length;b++){const R=g[b];R.setSize&&R.setSize(w,v)}},this.setEffects=function(w){g=w,E=g.length>0&&g[0].isRenderPass===!0;const v=a.width,b=a.height;for(let R=0;R<g.length;R++){const T=g[R];T.setSize&&T.setSize(v,b)}},this.begin=function(w,v){if(m||w.toneMapping===zn&&g.length===0)return!1;if(f=v,v!==null){const b=v.width,R=v.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return E===!1&&w.setRenderTarget(a),S=w.toneMapping,w.toneMapping=zn,!0},this.hasRenderPass=function(){return E},this.end=function(w,v){w.toneMapping=S,m=!0;let b=a,R=o;for(let T=0;T<g.length;T++){const _=g[T];if(_.enabled!==!1&&(_.render(w,R,b,v),_.needsSwap!==!1)){const y=b;b=R,R=y}}if(d!==w.outputColorSpace||p!==w.toneMapping){d=w.outputColorSpace,p=w.toneMapping,l.defines={},Xe.getTransfer(d)===rt&&(l.defines.SRGB_TRANSFER="");const T=j0[p];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,w.setRenderTarget(f),w.render(u,h),f=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const wd=new Bt,dl=new Cr(1,1),Td=new ud,Ad=new _f,Rd=new gd,Qc=[],jc=[],eu=new Float32Array(16),tu=new Float32Array(9),nu=new Float32Array(4);function Or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Qc[r];if(s===void 0&&(s=new Float32Array(r),Qc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ea(n,e){let t=jc[e];t===void 0&&(t=new Int32Array(e),jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function sg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;nu.set(i),n.uniformMatrix2fv(this.addr,!1,nu),It(t,i)}}function ag(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;tu.set(i),n.uniformMatrix3fv(this.addr,!1,tu),It(t,i)}}function og(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;eu.set(i),n.uniformMatrix4fv(this.addr,!1,eu),It(t,i)}}function lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function hg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function gg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(dl.compareFunction=t.isReversedDepthBuffer()?Nl:Ll,s=dl):s=wd,t.setTexture2D(e||s,r)}function _g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ad,r)}function xg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rd,r)}function vg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Td,r)}function Mg(n){switch(n){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return rg;case 35674:return sg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return hg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return vg}}function Sg(n,e){n.uniform1fv(this.addr,e)}function yg(n,e){const t=Or(e,this.size,2);n.uniform2fv(this.addr,t)}function bg(n,e){const t=Or(e,this.size,3);n.uniform3fv(this.addr,t)}function Eg(n,e){const t=Or(e,this.size,4);n.uniform4fv(this.addr,t)}function wg(n,e){const t=Or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Tg(n,e){const t=Or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ag(n,e){const t=Or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Rg(n,e){n.uniform1iv(this.addr,e)}function Cg(n,e){n.uniform2iv(this.addr,e)}function Pg(n,e){n.uniform3iv(this.addr,e)}function Dg(n,e){n.uniform4iv(this.addr,e)}function Ig(n,e){n.uniform1uiv(this.addr,e)}function Lg(n,e){n.uniform2uiv(this.addr,e)}function Ng(n,e){n.uniform3uiv(this.addr,e)}function Ug(n,e){n.uniform4uiv(this.addr,e)}function Fg(n,e,t){const i=this.cache,r=e.length,s=Ea(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=dl:a=wd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Og(n,e,t){const i=this.cache,r=e.length,s=Ea(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ad,s[a])}function kg(n,e,t){const i=this.cache,r=e.length,s=Ea(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Rd,s[a])}function zg(n,e,t){const i=this.cache,r=e.length,s=Ea(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Td,s[a])}function Bg(n){switch(n){case 5126:return Sg;case 35664:return yg;case 35665:return bg;case 35666:return Eg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Dg;case 5125:return Ig;case 36294:return Lg;case 36295:return Ng;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return zg}}class Gg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Mg(t.type)}}class Hg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bg(t.type)}}class Vg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function iu(n,e){n.seq.push(e),n.map[e.id]=e}function Wg(n,e,t){const i=n.name,r=i.length;for(fo.lastIndex=0;;){const s=fo.exec(i),a=fo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){iu(t,l===void 0?new Gg(o,n,e):new Hg(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Vg(o),iu(t,h)),t=h}}}class ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Wg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ru(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Xg=37297;let qg=0;function Yg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const su=new Ue;function $g(n){Xe._getMatrix(su,Xe.workingColorSpace,n);const e=`mat3( ${su.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(n)){case ha:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function au(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Yg(n.getShaderSource(e),o)}else return s}function Kg(n,e){const t=$g(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Zg={[Ku]:"Linear",[Zu]:"Reinhard",[Ju]:"Cineon",[Qu]:"ACESFilmic",[ed]:"AgX",[td]:"Neutral",[ju]:"Custom"};function Jg(n,e){const t=Zg[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xs=new z;function Qg(){Xe.getLuminanceCoefficients(Xs);const n=Xs.x.toFixed(4),e=Xs.y.toFixed(4),t=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function e_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function t_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Jr(n){return n!==""}function ou(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(n){return n.replace(n_,r_)}const i_=new Map;function r_(n,e){let t=ze[e];if(t===void 0){const i=i_.get(e);if(i!==void 0)t=ze[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return hl(t)}const s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(n){return n.replace(s_,a_)}function a_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const o_={[js]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function l_(n){return o_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const c_={[Yi]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE_UV"};function u_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":c_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const d_={[Rr]:"ENVMAP_MODE_REFRACTION"};function h_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":d_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const f_={[wl]:"ENVMAP_BLENDING_MULTIPLY",[Kh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function p_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":f_[n.combine]||"ENVMAP_BLENDING_NONE"}function m_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function g_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=l_(t),l=u_(t),u=h_(t),h=p_(t),d=m_(t),p=jg(t),m=e_(s),S=r.createProgram();let f,g,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Jr).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Jr).join(`
`),g.length>0&&(g+=`
`)):(f=[uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),g=[uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?ze.tonemapping_pars_fragment:"",t.toneMapping!==zn?Jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Kg("linearToOutputTexel",t.outputColorSpace),Qg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),a=hl(a),a=ou(a,t),a=lu(a,t),o=hl(o),o=ou(o,t),o=lu(o,t),a=cu(a),o=cu(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=E+f+a,v=E+g+o,b=ru(r,r.VERTEX_SHADER,w),R=ru(r,r.FRAGMENT_SHADER,v);r.attachShader(S,b),r.attachShader(S,R),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function T(D){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(S)||"",U=r.getShaderInfoLog(b)||"",O=r.getShaderInfoLog(R)||"",L=I.trim(),V=U.trim(),G=O.trim();let Z=!0,H=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,b,R);else{const ie=au(r,b,"vertex"),te=au(r,R,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+ie+`
`+te)}else L!==""?Ne("WebGLProgram: Program Info Log:",L):(V===""||G==="")&&(H=!1);H&&(D.diagnostics={runnable:Z,programLog:L,vertexShader:{log:V,prefix:f},fragmentShader:{log:G,prefix:g}})}r.deleteShader(b),r.deleteShader(R),_=new ra(r,S),y=t_(r,S)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(S,Xg)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qg++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=R,this}let __=0;class x_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new v_(e),t.set(e,i)),i}}class v_{constructor(e){this.id=__++,this.code=e,this.usedTimes=0}}function M_(n){return n===$i||n===ca||n===ua}function S_(n,e,t,i,r,s){const a=new dd,o=new x_,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function S(_,y,C,D,I,U){const O=D.fog,L=I.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Z=e.get(_.envMap||V,G),H=Z&&Z.mapping===Sa?Z.image.height:null,ie=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const te=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ae=te!==void 0?te.length:0;let we=0;L.morphAttributes.position!==void 0&&(we=1),L.morphAttributes.normal!==void 0&&(we=2),L.morphAttributes.color!==void 0&&(we=3);let $e,We,J,re;if(ie){const ye=On[ie];$e=ye.vertexShader,We=ye.fragmentShader}else{$e=_.vertexShader,We=_.fragmentShader;const ye=o.getVertexShaderStage(_),xt=o.getFragmentShaderStage(_);o.update(_,ye,xt),J=ye.id,re=xt.id}const ne=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),xe=I.isInstancedMesh===!0,Se=I.isBatchedMesh===!0,Ke=!!_.map,ke=!!_.matcap,nt=!!Z,et=!!_.aoMap,Ze=!!_.lightMap,bt=!!_.bumpMap&&_.wireframe===!1,Rt=!!_.normalMap,Lt=!!_.displacementMap,Ot=!!_.emissiveMap,_t=!!_.metalnessMap,Et=!!_.roughnessMap,F=_.anisotropy>0,jt=_.clearcoat>0,it=_.dispersion>0,P=_.iridescence>0,x=_.sheen>0,B=_.transmission>0,q=F&&!!_.anisotropyMap,$=jt&&!!_.clearcoatMap,se=jt&&!!_.clearcoatNormalMap,le=jt&&!!_.clearcoatRoughnessMap,K=P&&!!_.iridescenceMap,j=P&&!!_.iridescenceThicknessMap,ce=x&&!!_.sheenColorMap,Te=x&&!!_.sheenRoughnessMap,he=!!_.specularMap,ue=!!_.specularColorMap,Pe=!!_.specularIntensityMap,De=B&&!!_.transmissionMap,Fe=B&&!!_.thicknessMap,N=!!_.gradientMap,oe=!!_.alphaMap,Q=_.alphaTest>0,de=!!_.alphaHash,_e=!!_.extensions;let ee=zn;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ee=n.toneMapping);const Ee={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:$e,fragmentShader:We,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Se,batchingColor:Se&&I._colorsTexture!==null,instancing:xe,instancingColor:xe&&I.instanceColor!==null,instancingMorph:xe&&I.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ke,matcap:ke,envMap:nt,envMapMode:nt&&Z.mapping,envMapCubeUVHeight:H,aoMap:et,lightMap:Ze,bumpMap:bt,normalMap:Rt,displacementMap:Lt,emissiveMap:Ot,normalMapObjectSpace:Rt&&_.normalMapType===jh,normalMapTangentSpace:Rt&&_.normalMapType===cl,packedNormalMap:Rt&&_.normalMapType===cl&&M_(_.normalMap.format),metalnessMap:_t,roughnessMap:Et,anisotropy:F,anisotropyMap:q,clearcoat:jt,clearcoatMap:$,clearcoatNormalMap:se,clearcoatRoughnessMap:le,dispersion:it,iridescence:P,iridescenceMap:K,iridescenceThicknessMap:j,sheen:x,sheenColorMap:ce,sheenRoughnessMap:Te,specularMap:he,specularColorMap:ue,specularIntensityMap:Pe,transmission:B,transmissionMap:De,thicknessMap:Fe,gradientMap:N,opaque:_.transparent===!1&&_.blending===Di&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:Q,alphaHash:de,combine:_.combine,mapUv:Ke&&m(_.map.channel),aoMapUv:et&&m(_.aoMap.channel),lightMapUv:Ze&&m(_.lightMap.channel),bumpMapUv:bt&&m(_.bumpMap.channel),normalMapUv:Rt&&m(_.normalMap.channel),displacementMapUv:Lt&&m(_.displacementMap.channel),emissiveMapUv:Ot&&m(_.emissiveMap.channel),metalnessMapUv:_t&&m(_.metalnessMap.channel),roughnessMapUv:Et&&m(_.roughnessMap.channel),anisotropyMapUv:q&&m(_.anisotropyMap.channel),clearcoatMapUv:$&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(_.sheenRoughnessMap.channel),specularMapUv:he&&m(_.specularMap.channel),specularColorMapUv:ue&&m(_.specularColorMap.channel),specularIntensityMapUv:Pe&&m(_.specularIntensityMap.channel),transmissionMapUv:De&&m(_.transmissionMap.channel),thicknessMapUv:Fe&&m(_.thicknessMap.channel),alphaMapUv:oe&&m(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Rt||F),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Ke||oe),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Rt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:we,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:Ke&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:Ot&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===At,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function f(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)y.push(C),y.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(g(y,_),E(y,_),y.push(n.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function g(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function E(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const y=p[_.type];let C;if(y){const D=On[y];C=kf.clone(D.uniforms)}else C=_.uniforms;return C}function v(_,y){let C=u.get(y);return C!==void 0?++C.usedTimes:(C=new g_(n,y,_,r),l.push(C),u.set(y,C)),C}function b(_){if(--_.usedTimes===0){const y=l.indexOf(_);l[y]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function T(){o.dispose()}return{getParameters:S,getProgramCacheKey:f,getUniforms:w,acquireProgram:v,releaseProgram:b,releaseShaderCache:R,programs:l,dispose:T}}function y_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function b_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function du(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,m,S,f,g){let E=n[e];return E===void 0?(E={id:d.id,object:d,geometry:p,material:m,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:f,group:g},n[e]=E):(E.id=d.id,E.object=d,E.geometry=p,E.material=m,E.materialVariant=a(d),E.groupOrder=S,E.renderOrder=d.renderOrder,E.z=f,E.group=g),e++,E}function c(d,p,m,S,f,g){const E=o(d,p,m,S,f,g);m.transmission>0?i.push(E):m.transparent===!0?r.push(E):t.push(E)}function l(d,p,m,S,f,g){const E=o(d,p,m,S,f,g);m.transmission>0?i.unshift(E):m.transparent===!0?r.unshift(E):t.unshift(E)}function u(d,p,m){t.length>1&&t.sort(d||b_),i.length>1&&i.sort(p||du),r.length>1&&r.sort(p||du),m&&(t.reverse(),i.reverse(),r.reverse())}function h(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function E_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new hu,n.set(i,[a])):r>=s.length?(a=new hu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function w_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ie};break;case"SpotLight":t={position:new z,direction:new z,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function T_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let A_=0;function R_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function C_(n){const e=new w_,t=T_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const r=new z,s=new ot,a=new ot;function o(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,m=0,S=0,f=0,g=0,E=0,w=0,v=0,b=0,R=0,T=0;l.sort(R_);for(let y=0,C=l.length;y<C;y++){const D=l[y],I=D.color,U=D.intensity,O=D.distance;let L=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===$i?L=D.shadow.map.texture:L=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=I.r*U,h+=I.g*U,d+=I.b*U;else if(D.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(D.sh.coefficients[V],U);T++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,Z=t.get(D);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=L,i.directionalShadowMatrix[p]=D.shadow.matrix,E++}i.directional[p]=V,p++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(I).multiplyScalar(U),V.distance=O,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,i.spot[S]=V;const G=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,G.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[S]=G.matrix,D.castShadow){const Z=t.get(D);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.spotShadow[S]=Z,i.spotShadowMap[S]=L,v++}S++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(I).multiplyScalar(U),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),i.rectArea[f]=V,f++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const G=D.shadow,Z=t.get(D);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=L,i.pointShadowMatrix[m]=D.shadow.matrix,w++}i.point[m]=V,m++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(U),V.groundColor.copy(D.groundColor).multiplyScalar(U),i.hemi[g]=V,g++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==p||_.pointLength!==m||_.spotLength!==S||_.rectAreaLength!==f||_.hemiLength!==g||_.numDirectionalShadows!==E||_.numPointShadows!==w||_.numSpotShadows!==v||_.numSpotMaps!==b||_.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=f,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,_.directionalLength=p,_.pointLength=m,_.spotLength=S,_.rectAreaLength=f,_.hemiLength=g,_.numDirectionalShadows=E,_.numPointShadows=w,_.numSpotShadows=v,_.numSpotMaps=b,_.numLightProbes=T,i.version=A_++)}function c(l,u){let h=0,d=0,p=0,m=0,S=0;const f=u.matrixWorldInverse;for(let g=0,E=l.length;g<E;g++){const w=l[g];if(w.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),h++}else if(w.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),p++}else if(w.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(w.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(f),d++}else if(w.isHemisphereLight){const v=i.hemi[S];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(f),S++}}}return{setup:o,setupView:c,state:i}}function fu(n){const e=new C_(n),t=[],i=[],r=[];function s(d){h.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function P_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new fu(n),e.set(r,[o])):s>=a.length?(o=new fu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
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
}`,L_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],N_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],pu=new ot,Yr=new z,po=new z;function U_(n,e,t){let i=new Ol;const r=new Ge,s=new Ge,a=new gt,o=new Hf,c=new Vf,l={},u=t.maxTextureSize,h={[Li]:rn,[rn]:Li,[At]:At},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:D_,fragmentShader:I_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new sn;m.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new at(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let g=this.type;this.render=function(R,T,_){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;this.type===Ph&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=js);const y=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),I=n.state;I.setBlending(li),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=g!==this.type;U&&T.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(L=>L.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,L=R.length;O<L;O++){const V=R[O],G=V.shadow;if(G===void 0){Ne("WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Z=G.getFrameExtents();r.multiply(Z),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,G.mapSize.y=s.y));const H=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=H,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Zr){if(V.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Bn(r.x,r.y,{format:$i,type:di,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),G.map.texture.name=V.name+".shadowMap",G.map.depthTexture=new Cr(r.x,r.y,Tn),G.map.depthTexture.name=V.name+".shadowMapDepth",G.map.depthTexture.format=hi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kt,G.map.depthTexture.magFilter=kt}else V.isPointLight?(G.map=new Ed(r.x),G.map.depthTexture=new Ff(r.x,Xn)):(G.map=new Bn(r.x,r.y),G.map.depthTexture=new Cr(r.x,r.y,Xn)),G.map.depthTexture.name=V.name+".shadowMap",G.map.depthTexture.format=hi,this.type===js?(G.map.depthTexture.compareFunction=H?Nl:Ll,G.map.depthTexture.minFilter=Ft,G.map.depthTexture.magFilter=Ft):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kt,G.map.depthTexture.magFilter=kt);G.camera.updateProjectionMatrix()}const ie=G.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<ie;te++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,te),n.clear();else{te===0&&(n.setRenderTarget(G.map),n.clear());const ae=G.getViewport(te);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),I.viewport(a)}if(V.isPointLight){const ae=G.camera,we=G.matrix,$e=V.distance||ae.far;$e!==ae.far&&(ae.far=$e,ae.updateProjectionMatrix()),Yr.setFromMatrixPosition(V.matrixWorld),ae.position.copy(Yr),po.copy(ae.position),po.add(L_[te]),ae.up.copy(N_[te]),ae.lookAt(po),ae.updateMatrixWorld(),we.makeTranslation(-Yr.x,-Yr.y,-Yr.z),pu.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),G._frustum.setFromProjectionMatrix(pu,ae.coordinateSystem,ae.reversedDepth)}else G.updateMatrices(V);i=G.getFrustum(),v(T,_,G.camera,V,this.type)}G.isPointLightShadow!==!0&&this.type===Zr&&E(G,_),G.needsUpdate=!1}g=this.type,f.needsUpdate=!1,n.setRenderTarget(y,C,D)};function E(R,T){const _=e.update(S);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Bn(r.x,r.y,{format:$i,type:di})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,_,d,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,_,p,S,null)}function w(R,T,_,y){let C=null;const D=_.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)C=D;else if(C=_.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const I=C.uuid,U=T.uuid;let O=l[I];O===void 0&&(O={},l[I]=O);let L=O[U];L===void 0&&(L=C.clone(),O[U]=L,T.addEventListener("dispose",b)),C=L}if(C.visible=T.visible,C.wireframe=T.wireframe,y===Zr?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:h[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const I=n.properties.get(C);I.light=_}return C}function v(R,T,_,y,C){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&C===Zr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,R.matrixWorld);const U=e.update(R),O=R.material;if(Array.isArray(O)){const L=U.groups;for(let V=0,G=L.length;V<G;V++){const Z=L[V],H=O[Z.materialIndex];if(H&&H.visible){const ie=w(R,H,y,C);R.onBeforeShadow(n,R,T,_,U,ie,Z),n.renderBufferDirect(_,null,U,ie,R,Z),R.onAfterShadow(n,R,T,_,U,ie,Z)}}}else if(O.visible){const L=w(R,O,y,C);R.onBeforeShadow(n,R,T,_,U,L,null),n.renderBufferDirect(_,null,U,L,R,null),R.onAfterShadow(n,R,T,_,U,L,null)}}const I=R.children;for(let U=0,O=I.length;U<O;U++)v(I[U],T,_,y,C)}function b(R){R.target.removeEventListener("dispose",b);for(const _ in l){const y=l[_],C=R.target.uuid;C in y&&(y[C].dispose(),delete y[C])}}}function F_(n,e){function t(){let N=!1;const oe=new gt;let Q=null;const de=new gt(0,0,0,0);return{setMask:function(_e){Q!==_e&&!N&&(n.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){N=_e},setClear:function(_e,ee,Ee,ye,xt){xt===!0&&(_e*=ye,ee*=ye,Ee*=ye),oe.set(_e,ee,Ee,ye),de.equals(oe)===!1&&(n.clearColor(_e,ee,Ee,ye),de.copy(oe))},reset:function(){N=!1,Q=null,de.set(-1,0,0,0)}}}function i(){let N=!1,oe=!1,Q=null,de=null,_e=null;return{setReversed:function(ee){if(oe!==ee){const Ee=e.get("EXT_clip_control");ee?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),oe=ee;const ye=_e;_e=null,this.setClear(ye)}},getReversed:function(){return oe},setTest:function(ee){ee?ne(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(ee){Q!==ee&&!N&&(n.depthMask(ee),Q=ee)},setFunc:function(ee){if(oe&&(ee=uf[ee]),de!==ee){switch(ee){case Eo:n.depthFunc(n.NEVER);break;case wo:n.depthFunc(n.ALWAYS);break;case To:n.depthFunc(n.LESS);break;case Ar:n.depthFunc(n.LEQUAL);break;case Ao:n.depthFunc(n.EQUAL);break;case Ro:n.depthFunc(n.GEQUAL);break;case Co:n.depthFunc(n.GREATER);break;case Po:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=ee}},setLocked:function(ee){N=ee},setClear:function(ee){_e!==ee&&(_e=ee,oe&&(ee=1-ee),n.clearDepth(ee))},reset:function(){N=!1,Q=null,de=null,_e=null,oe=!1}}}function r(){let N=!1,oe=null,Q=null,de=null,_e=null,ee=null,Ee=null,ye=null,xt=null;return{setTest:function(ht){N||(ht?ne(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ht){oe!==ht&&!N&&(n.stencilMask(ht),oe=ht)},setFunc:function(ht,Rn,Cn){(Q!==ht||de!==Rn||_e!==Cn)&&(n.stencilFunc(ht,Rn,Cn),Q=ht,de=Rn,_e=Cn)},setOp:function(ht,Rn,Cn){(ee!==ht||Ee!==Rn||ye!==Cn)&&(n.stencilOp(ht,Rn,Cn),ee=ht,Ee=Rn,ye=Cn)},setLocked:function(ht){N=ht},setClear:function(ht){xt!==ht&&(n.clearStencil(ht),xt=ht)},reset:function(){N=!1,oe=null,Q=null,de=null,_e=null,ee=null,Ee=null,ye=null,xt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d={},p=new WeakMap,m=[],S=null,f=!1,g=null,E=null,w=null,v=null,b=null,R=null,T=null,_=new Ie(0,0,0),y=0,C=!1,D=null,I=null,U=null,O=null,L=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=Z>=2);let ie=null,te={};const ae=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),$e=new gt().fromArray(ae),We=new gt().fromArray(we);function J(N,oe,Q,de){const _e=new Uint8Array(4),ee=n.createTexture();n.bindTexture(N,ee),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<Q;Ee++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(oe+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ee}const re={};re[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Ar),bt(!1),Rt(fc),ne(n.CULL_FACE),et(li);function ne(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ge(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function xe(N,oe){return d[N]!==oe?(n.bindFramebuffer(N,oe),d[N]=oe,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=oe),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Se(N,oe){let Q=m,de=!1;if(N){Q=p.get(oe),Q===void 0&&(Q=[],p.set(oe,Q));const _e=N.textures;if(Q.length!==_e.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ee=_e.length;ee<Ee;ee++)Q[ee]=n.COLOR_ATTACHMENT0+ee;Q.length=_e.length,de=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,de=!0);de&&n.drawBuffers(Q)}function Ke(N){return S!==N?(n.useProgram(N),S=N,!0):!1}const ke={[Hi]:n.FUNC_ADD,[Ih]:n.FUNC_SUBTRACT,[Lh]:n.FUNC_REVERSE_SUBTRACT};ke[Nh]=n.MIN,ke[Uh]=n.MAX;const nt={[Fh]:n.ZERO,[Oh]:n.ONE,[kh]:n.SRC_COLOR,[yo]:n.SRC_ALPHA,[Wh]:n.SRC_ALPHA_SATURATE,[Hh]:n.DST_COLOR,[Bh]:n.DST_ALPHA,[zh]:n.ONE_MINUS_SRC_COLOR,[bo]:n.ONE_MINUS_SRC_ALPHA,[Vh]:n.ONE_MINUS_DST_COLOR,[Gh]:n.ONE_MINUS_DST_ALPHA,[Xh]:n.CONSTANT_COLOR,[qh]:n.ONE_MINUS_CONSTANT_COLOR,[Yh]:n.CONSTANT_ALPHA,[$h]:n.ONE_MINUS_CONSTANT_ALPHA};function et(N,oe,Q,de,_e,ee,Ee,ye,xt,ht){if(N===li){f===!0&&(ge(n.BLEND),f=!1);return}if(f===!1&&(ne(n.BLEND),f=!0),N!==Dh){if(N!==g||ht!==C){if((E!==Hi||b!==Hi)&&(n.blendEquation(n.FUNC_ADD),E=Hi,b=Hi),ht)switch(N){case Di:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ii:n.blendFunc(n.ONE,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",N);break}else switch(N){case Di:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pc:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",N);break}w=null,v=null,R=null,T=null,_.set(0,0,0),y=0,g=N,C=ht}return}_e=_e||oe,ee=ee||Q,Ee=Ee||de,(oe!==E||_e!==b)&&(n.blendEquationSeparate(ke[oe],ke[_e]),E=oe,b=_e),(Q!==w||de!==v||ee!==R||Ee!==T)&&(n.blendFuncSeparate(nt[Q],nt[de],nt[ee],nt[Ee]),w=Q,v=de,R=ee,T=Ee),(ye.equals(_)===!1||xt!==y)&&(n.blendColor(ye.r,ye.g,ye.b,xt),_.copy(ye),y=xt),g=N,C=!1}function Ze(N,oe){N.side===At?ge(n.CULL_FACE):ne(n.CULL_FACE);let Q=N.side===rn;oe&&(Q=!Q),bt(Q),N.blending===Di&&N.transparent===!1?et(li):et(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const de=N.stencilWrite;o.setTest(de),de&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function bt(N){D!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),D=N)}function Rt(N){N!==Rh?(ne(n.CULL_FACE),N!==I&&(N===fc?n.cullFace(n.BACK):N===Ch?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),I=N}function Lt(N){N!==U&&(G&&n.lineWidth(N),U=N)}function Ot(N,oe,Q){N?(ne(n.POLYGON_OFFSET_FILL),(O!==oe||L!==Q)&&(O=oe,L=Q,a.getReversed()&&(oe=-oe),n.polygonOffset(oe,Q))):ge(n.POLYGON_OFFSET_FILL)}function _t(N){N?ne(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function Et(N){N===void 0&&(N=n.TEXTURE0+V-1),ie!==N&&(n.activeTexture(N),ie=N)}function F(N,oe,Q){Q===void 0&&(ie===null?Q=n.TEXTURE0+V-1:Q=ie);let de=te[Q];de===void 0&&(de={type:void 0,texture:void 0},te[Q]=de),(de.type!==N||de.texture!==oe)&&(ie!==Q&&(n.activeTexture(Q),ie=Q),n.bindTexture(N,oe||re[N]),de.type=N,de.texture=oe)}function jt(){const N=te[ie];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function it(){try{n.compressedTexImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function x(){try{n.texSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function B(){try{n.texSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function se(){try{n.texStorage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function le(){try{n.texStorage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function K(){try{n.texImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function j(){try{n.texImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function ce(N){return h[N]!==void 0?h[N]:n.getParameter(N)}function Te(N,oe){h[N]!==oe&&(n.pixelStorei(N,oe),h[N]=oe)}function he(N){$e.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),$e.copy(N))}function ue(N){We.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),We.copy(N))}function Pe(N,oe){let Q=l.get(oe);Q===void 0&&(Q=new WeakMap,l.set(oe,Q));let de=Q.get(N);de===void 0&&(de=n.getUniformBlockIndex(oe,N.name),Q.set(N,de))}function De(N,oe){const de=l.get(oe).get(N);c.get(oe)!==de&&(n.uniformBlockBinding(oe,de,N.__bindingPointIndex),c.set(oe,de))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ie=null,te={},d={},p=new WeakMap,m=[],S=null,f=!1,g=null,E=null,w=null,v=null,b=null,R=null,T=null,_=new Ie(0,0,0),y=0,C=!1,D=null,I=null,U=null,O=null,L=null,$e.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:ge,bindFramebuffer:xe,drawBuffers:Se,useProgram:Ke,setBlending:et,setMaterial:Ze,setFlipSided:bt,setCullFace:Rt,setLineWidth:Lt,setPolygonOffset:Ot,setScissorTest:_t,activeTexture:Et,bindTexture:F,unbindTexture:jt,compressedTexImage2D:it,compressedTexImage3D:P,texImage2D:K,texImage3D:j,pixelStorei:Te,getParameter:ce,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:se,texStorage3D:le,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:$,scissor:he,viewport:ue,reset:Fe}}function O_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,x){return m?new OffscreenCanvas(P,x):as("canvas")}function f(P,x,B){let q=1;const $=it(P);if(($.width>B||$.height>B)&&(q=B/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const se=Math.floor(q*$.width),le=Math.floor(q*$.height);d===void 0&&(d=S(se,le));const K=x?S(se,le):d;return K.width=se,K.height=le,K.getContext("2d").drawImage(P,0,0,se,le),Ne("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+le+")."),K}else return"data"in P&&Ne("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function g(P){return P.generateMipmaps}function E(P){n.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,x,B,q,$,se=!1){if(P!==null){if(n[P]!==void 0)return n[P];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let le;q&&(le=e.get("EXT_texture_norm16"),le||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8),B===n.UNSIGNED_SHORT&&le&&(K=le.R16_EXT),B===n.SHORT&&le&&(K=le.R16_SNORM_EXT)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),x===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8),B===n.UNSIGNED_SHORT&&le&&(K=le.RG16_EXT),B===n.SHORT&&le&&(K=le.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),x===n.RGB&&(B===n.UNSIGNED_SHORT&&le&&(K=le.RGB16_EXT),B===n.SHORT&&le&&(K=le.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),x===n.RGBA){const j=se?ha:Xe.getTransfer($);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=j===rt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&le&&(K=le.RGBA16_EXT),B===n.SHORT&&le&&(K=le.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(P,x){let B;return P?x===null||x===Xn||x===rs?B=n.DEPTH24_STENCIL8:x===Tn?B=n.DEPTH32F_STENCIL8:x===is&&(B=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xn||x===rs?B=n.DEPTH_COMPONENT24:x===Tn?B=n.DEPTH_COMPONENT32F:x===is&&(B=n.DEPTH_COMPONENT16),B}function R(P,x){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==kt&&P.minFilter!==Ft?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function T(P){const x=P.target;x.removeEventListener("dispose",T),y(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&h.delete(x)}function _(P){const x=P.target;x.removeEventListener("dispose",_),D(x)}function y(P){const x=i.get(P);if(x.__webglInit===void 0)return;const B=P.source,q=p.get(B);if(q){const $=q[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(P),Object.keys(q).length===0&&p.delete(B)}i.remove(P)}function C(P){const x=i.get(P);n.deleteTexture(x.__webglTexture);const B=P.source,q=p.get(B);delete q[x.__cacheKey],a.memory.textures--}function D(P){const x=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let $=0;$<x.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[q][$]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=P.textures;for(let q=0,$=B.length;q<$;q++){const se=i.get(B[q]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(B[q])}i.remove(P)}let I=0;function U(){I=0}function O(){return I}function L(P){I=P}function V(){const P=I;return P>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),I+=1,P}function G(P){const x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function Z(P,x){const B=i.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){const q=P.image;if(q===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(B,P,x);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function H(P,x){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){ge(B,P,x);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function ie(P,x){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){ge(B,P,x);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function te(P,x){const B=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&B.__version!==P.version){xe(B,P,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const ae={[Do]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[Io]:n.MIRRORED_REPEAT},we={[kt]:n.NEAREST,[Jh]:n.NEAREST_MIPMAP_NEAREST,[ys]:n.NEAREST_MIPMAP_LINEAR,[Ft]:n.LINEAR,[Ua]:n.LINEAR_MIPMAP_NEAREST,[si]:n.LINEAR_MIPMAP_LINEAR},$e={[ef]:n.NEVER,[af]:n.ALWAYS,[tf]:n.LESS,[Ll]:n.LEQUAL,[nf]:n.EQUAL,[Nl]:n.GEQUAL,[rf]:n.GREATER,[sf]:n.NOTEQUAL};function We(P,x){if(x.type===Tn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ft||x.magFilter===Ua||x.magFilter===ys||x.magFilter===si||x.minFilter===Ft||x.minFilter===Ua||x.minFilter===ys||x.minFilter===si)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ae[x.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ae[x.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ae[x.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,we[x.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,we[x.minFilter]),x.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,$e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==ys&&x.minFilter!==si||x.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function J(P,x){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",T));const q=x.source;let $=p.get(q);$===void 0&&($={},p.set(q,$));const se=G(x);if(se!==P.__cacheKey){$[se]===void 0&&($[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[se].usedTimes++;const le=$[P.__cacheKey];le!==void 0&&($[P.__cacheKey].usedTimes--,le.usedTimes===0&&C(x)),P.__cacheKey=se,P.__webglTexture=$[se].texture}return B}function re(P,x,B){return Math.floor(Math.floor(P/B)/x)}function ne(P,x,B,q){const se=P.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,B,q,x.data);else{se.sort((Te,he)=>Te.start-he.start);let le=0;for(let Te=1;Te<se.length;Te++){const he=se[le],ue=se[Te],Pe=he.start+he.count,De=re(ue.start,x.width,4),Fe=re(he.start,x.width,4);ue.start<=Pe+1&&De===Fe&&re(ue.start+ue.count-1,x.width,4)===De?he.count=Math.max(he.count,ue.start+ue.count-he.start):(++le,se[le]=ue)}se.length=le+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Te=0,he=se.length;Te<he;Te++){const ue=se[Te],Pe=Math.floor(ue.start/4),De=Math.ceil(ue.count/4),Fe=Pe%x.width,N=Math.floor(Pe/x.width),oe=De,Q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Fe,N,oe,Q,B,q,x.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function ge(P,x,B){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const $=J(P,x),se=x.source;t.bindTexture(q,P.__webglTexture,n.TEXTURE0+B);const le=i.get(se);if(se.version!==le.__version||$===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Q=Xe.getPrimaries(Xe.workingColorSpace),de=x.colorSpace===Ai?null:Xe.getPrimaries(x.colorSpace),_e=x.colorSpace===Ai||Q===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let j=f(x.image,!1,r.maxTextureSize);j=jt(x,j);const ce=s.convert(x.format,x.colorSpace),Te=s.convert(x.type);let he=v(x.internalFormat,ce,Te,x.normalized,x.colorSpace,x.isVideoTexture);We(q,x);let ue;const Pe=x.mipmaps,De=x.isVideoTexture!==!0,Fe=le.__version===void 0||$===!0,N=se.dataReady,oe=R(x,j);if(x.isDepthTexture)he=b(x.format===Wi,x.type),Fe&&(De?t.texStorage2D(n.TEXTURE_2D,1,he,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,he,j.width,j.height,0,ce,Te,null));else if(x.isDataTexture)if(Pe.length>0){De&&Fe&&t.texStorage2D(n.TEXTURE_2D,oe,he,Pe[0].width,Pe[0].height);for(let Q=0,de=Pe.length;Q<de;Q++)ue=Pe[Q],De?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,ce,Te,ue.data):t.texImage2D(n.TEXTURE_2D,Q,he,ue.width,ue.height,0,ce,Te,ue.data);x.generateMipmaps=!1}else De?(Fe&&t.texStorage2D(n.TEXTURE_2D,oe,he,j.width,j.height),N&&ne(x,j,ce,Te)):t.texImage2D(n.TEXTURE_2D,0,he,j.width,j.height,0,ce,Te,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,he,Pe[0].width,Pe[0].height,j.depth);for(let Q=0,de=Pe.length;Q<de;Q++)if(ue=Pe[Q],x.format!==An)if(ce!==null)if(De){if(N)if(x.layerUpdates.size>0){const _e=Xc(ue.width,ue.height,x.format,x.type);for(const ee of x.layerUpdates){const Ee=ue.data.subarray(ee*_e/ue.data.BYTES_PER_ELEMENT,(ee+1)*_e/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,ee,ue.width,ue.height,1,ce,Ee)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,j.depth,ce,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,he,ue.width,ue.height,j.depth,0,ue.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,j.depth,ce,Te,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,he,ue.width,ue.height,j.depth,0,ce,Te,ue.data)}else{De&&Fe&&t.texStorage2D(n.TEXTURE_2D,oe,he,Pe[0].width,Pe[0].height);for(let Q=0,de=Pe.length;Q<de;Q++)ue=Pe[Q],x.format!==An?ce!==null?De?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,ce,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,he,ue.width,ue.height,0,ue.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,ce,Te,ue.data):t.texImage2D(n.TEXTURE_2D,Q,he,ue.width,ue.height,0,ce,Te,ue.data)}else if(x.isDataArrayTexture)if(De){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,he,j.width,j.height,j.depth),N)if(x.layerUpdates.size>0){const Q=Xc(j.width,j.height,x.format,x.type);for(const de of x.layerUpdates){const _e=j.data.subarray(de*Q/j.data.BYTES_PER_ELEMENT,(de+1)*Q/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,j.width,j.height,1,ce,Te,_e)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,Te,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,j.width,j.height,j.depth,0,ce,Te,j.data);else if(x.isData3DTexture)De?(Fe&&t.texStorage3D(n.TEXTURE_3D,oe,he,j.width,j.height,j.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,Te,j.data)):t.texImage3D(n.TEXTURE_3D,0,he,j.width,j.height,j.depth,0,ce,Te,j.data);else if(x.isFramebufferTexture){if(Fe)if(De)t.texStorage2D(n.TEXTURE_2D,oe,he,j.width,j.height);else{let Q=j.width,de=j.height;for(let _e=0;_e<oe;_e++)t.texImage2D(n.TEXTURE_2D,_e,he,Q,de,0,ce,Te,null),Q>>=1,de>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),h.add(x),Q.onpaint=de=>{const _e=de.changedElements;for(const ee of h)_e.includes(ee.image)&&(ee.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{const _e=n.RGBA,ee=n.RGBA,Ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,_e,ee,Ee,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(De&&Fe){const Q=it(Pe[0]);t.texStorage2D(n.TEXTURE_2D,oe,he,Q.width,Q.height)}for(let Q=0,de=Pe.length;Q<de;Q++)ue=Pe[Q],De?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ce,Te,ue):t.texImage2D(n.TEXTURE_2D,Q,he,ce,Te,ue);x.generateMipmaps=!1}else if(De){if(Fe){const Q=it(j);t.texStorage2D(n.TEXTURE_2D,oe,he,Q.width,Q.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Te,j)}else t.texImage2D(n.TEXTURE_2D,0,he,ce,Te,j);g(x)&&E(q),le.__version=se.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function xe(P,x,B){if(x.image.length!==6)return;const q=J(P,x),$=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+B);const se=i.get($);if($.version!==se.__version||q===!0){t.activeTexture(n.TEXTURE0+B);const le=Xe.getPrimaries(Xe.workingColorSpace),K=x.colorSpace===Ai?null:Xe.getPrimaries(x.colorSpace),j=x.colorSpace===Ai||le===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Te=x.image[0]&&x.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!ce&&!Te?he[ee]=f(x.image[ee],!0,r.maxCubemapSize):he[ee]=Te?x.image[ee].image:x.image[ee],he[ee]=jt(x,he[ee]);const ue=he[0],Pe=s.convert(x.format,x.colorSpace),De=s.convert(x.type),Fe=v(x.internalFormat,Pe,De,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,oe=se.__version===void 0||q===!0,Q=$.dataReady;let de=R(x,ue);We(n.TEXTURE_CUBE_MAP,x);let _e;if(ce){N&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Fe,ue.width,ue.height);for(let ee=0;ee<6;ee++){_e=he[ee].mipmaps;for(let Ee=0;Ee<_e.length;Ee++){const ye=_e[Ee];x.format!==An?Pe!==null?N?Q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,ye.width,ye.height,Pe,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,Fe,ye.width,ye.height,0,ye.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,ye.width,ye.height,Pe,De,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,Fe,ye.width,ye.height,0,Pe,De,ye.data)}}}else{if(_e=x.mipmaps,N&&oe){_e.length>0&&de++;const ee=it(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Fe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Te){N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Pe,De,he[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Fe,he[ee].width,he[ee].height,0,Pe,De,he[ee].data);for(let Ee=0;Ee<_e.length;Ee++){const xt=_e[Ee].image[ee].image;N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,xt.width,xt.height,Pe,De,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,Fe,xt.width,xt.height,0,Pe,De,xt.data)}}else{N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,De,he[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Fe,Pe,De,he[ee]);for(let Ee=0;Ee<_e.length;Ee++){const ye=_e[Ee];N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,Pe,De,ye.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,Fe,Pe,De,ye.image[ee])}}}g(x)&&E(n.TEXTURE_CUBE_MAP),se.__version=$.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Se(P,x,B,q,$,se){const le=s.convert(B.format,B.colorSpace),K=s.convert(B.type),j=v(B.internalFormat,le,K,B.normalized,B.colorSpace),ce=i.get(x),Te=i.get(B);if(Te.__renderTarget=x,!ce.__hasExternalTextures){const he=Math.max(1,x.width>>se),ue=Math.max(1,x.height>>se);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,se,j,he,ue,x.depth,0,le,K,null):t.texImage2D($,se,j,he,ue,0,le,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Et(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,Te.__webglTexture,0,_t(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,Te.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(P,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,P),x.depthBuffer){const q=x.depthTexture,$=q&&q.isDepthTexture?q.type:null,se=b(x.stencilBuffer,$),le=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Et(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(x),se,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(x),se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,se,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,P)}else{const q=x.textures;for(let $=0;$<q.length;$++){const se=q[$],le=s.convert(se.format,se.colorSpace),K=s.convert(se.type),j=v(se.internalFormat,le,K,se.normalized,se.colorSpace);Et(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(x),j,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(x),j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(P,x,B){const q=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),We(n.TEXTURE_CUBE_MAP,x.depthTexture);const ce=s.convert(x.depthTexture.format),Te=s.convert(x.depthTexture.type);let he;x.depthTexture.format===hi?he=n.DEPTH_COMPONENT24:x.depthTexture.format===Wi&&(he=n.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,x.width,x.height,0,ce,Te,null)}}else Z(x.depthTexture,0);const se=$.__webglTexture,le=_t(x),K=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,j=x.depthTexture.format===Wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===hi)Et(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,se,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,j,K,se,0);else if(x.depthTexture.format===Wi)Et(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,se,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,j,K,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(P){const x=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=q}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)ke(x.__webglFramebuffer[q],P,q);else{const q=P.texture.mipmaps;q&&q.length>0?ke(x.__webglFramebuffer[0],P,0):ke(x.__webglFramebuffer,P,0)}else if(B){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),Ke(x.__webglDepthbuffer[q],P,!1);else{const $=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,se)}}else{const q=P.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ke(x.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(P,x,B){const q=i.get(P);x!==void 0&&Se(q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&nt(P)}function Ze(P){const x=P.texture,B=i.get(P),q=i.get(x);P.addEventListener("dispose",_);const $=P.textures,se=P.isWebGLCubeRenderTarget===!0,le=$.length>1;if(le||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,a.memory.textures++),se){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let j=0;j<x.mipmaps.length;j++)B.__webglFramebuffer[K][j]=n.createFramebuffer()}else B.__webglFramebuffer[K]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)B.__webglFramebuffer[K]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(le)for(let K=0,j=$.length;K<j;K++){const ce=i.get($[K]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&Et(P)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){const j=$[K];B.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[K]);const ce=s.convert(j.format,j.colorSpace),Te=s.convert(j.type),he=v(j.internalFormat,ce,Te,j.normalized,j.colorSpace,P.isXRRenderTarget===!0),ue=_t(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,he,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,B.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ke(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),We(n.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Se(B.__webglFramebuffer[K][j],P,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else Se(B.__webglFramebuffer[K],P,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(x)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let K=0,j=$.length;K<j;K++){const ce=$[K],Te=i.get(ce);let he=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Te.__webglTexture),We(he,ce),Se(B.__webglFramebuffer,P,ce,n.COLOR_ATTACHMENT0+K,he,0),g(ce)&&E(he)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,q.__webglTexture),We(K,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Se(B.__webglFramebuffer[j],P,x,n.COLOR_ATTACHMENT0,K,j);else Se(B.__webglFramebuffer,P,x,n.COLOR_ATTACHMENT0,K,0);g(x)&&E(K),t.unbindTexture()}P.depthBuffer&&nt(P)}function bt(P){const x=P.textures;for(let B=0,q=x.length;B<q;B++){const $=x[B];if(g($)){const se=w(P),le=i.get($).__webglTexture;t.bindTexture(se,le),E(se),t.unbindTexture()}}}const Rt=[],Lt=[];function Ot(P){if(P.samples>0){if(Et(P)===!1){const x=P.textures,B=P.width,q=P.height;let $=n.COLOR_BUFFER_BIT;const se=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(P),K=x.length>1;if(K)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const j=P.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Te=i.get(x[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,B,q,0,0,B,q,$,n.NEAREST),c===!0&&(Rt.length=0,Lt.length=0,Rt.push(n.COLOR_ATTACHMENT0+ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Rt.push(se),Lt.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Te=i.get(x[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const x=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function _t(P){return Math.min(r.maxSamples,P.samples)}function Et(P){const x=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(P){const x=a.render.frame;u.get(P)!==x&&(u.set(P,x),P.update())}function jt(P,x){const B=P.colorSpace,q=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==da&&B!==Ai&&(Xe.getTransfer(B)===rt?(q!==An||$!==dn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",B)),x}function it(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.getTextureUnits=O,this.setTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=ie,this.setTextureCube=te,this.rebindTextures=et,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function k_(n,e){function t(i,r=Ai){let s;const a=Xe.getTransfer(r);if(i===dn)return n.UNSIGNED_BYTE;if(i===Al)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ad)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===id)return n.BYTE;if(i===rd)return n.SHORT;if(i===is)return n.UNSIGNED_SHORT;if(i===Tl)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===od)return n.ALPHA;if(i===ld)return n.RGB;if(i===An)return n.RGBA;if(i===hi)return n.DEPTH_COMPONENT;if(i===Wi)return n.DEPTH_STENCIL;if(i===Cl)return n.RED;if(i===Pl)return n.RED_INTEGER;if(i===$i)return n.RG;if(i===Dl)return n.RG_INTEGER;if(i===Il)return n.RGBA_INTEGER;if(i===ea||i===ta||i===na||i===ia)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ea)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ea)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lo||i===No||i===Uo||i===Fo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===No)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oo||i===ko||i===zo||i===Bo||i===Go||i===ca||i===Ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Oo||i===ko)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bo)return s.COMPRESSED_R11_EAC;if(i===Go)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ca)return s.COMPRESSED_RG11_EAC;if(i===Ho)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Ko||i===Zo||i===Jo||i===Qo||i===jo||i===el||i===tl||i===nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$o)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ko)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===el)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===il||i===rl||i===sl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===il)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===al||i===ol||i===ua||i===ll)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ol)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ua)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ll)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
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

}`;class G_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new _d(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $n({vertexShader:z_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new $t(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H_ extends Qi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,m=null;const S=typeof XRWebGLBinding<"u",f=new G_,g={},E=t.getContextAttributes();let w=null,v=null;const b=[],R=[],T=new Ge;let _=null;const y=new un;y.viewport=new gt;const C=new un;C.viewport=new gt;const D=[y,C],I=new Qf;let U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=b[J];return re===void 0&&(re=new Va,b[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=b[J];return re===void 0&&(re=new Va,b[J]=re),re.getGripSpace()},this.getHand=function(J){let re=b[J];return re===void 0&&(re=new Va,b[J]=re),re.getHandSpace()};function L(J){const re=R.indexOf(J.inputSource);if(re===-1)return;const ne=b[re];ne!==void 0&&(ne.update(J.inputSource,J.frame,l||a),ne.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",G);for(let J=0;J<b.length;J++){const re=R[J];re!==null&&(R[J]=null,b[J].disconnect(re))}U=null,O=null,f.reset();for(const J in g)delete g[J];e.setRenderTarget(w),p=null,d=null,h=null,r=null,v=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",V),r.addEventListener("inputsourceschange",G),E.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ge=null,xe=null;E.depth&&(xe=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=E.stencil?Wi:hi,ge=E.stencil?rs:Xn);const Se={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Bn(d.textureWidth,d.textureHeight,{format:An,type:dn,depthTexture:new Cr(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ne={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Bn(p.framebufferWidth,p.framebufferHeight,{format:An,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function G(J){for(let re=0;re<J.removed.length;re++){const ne=J.removed[re],ge=R.indexOf(ne);ge>=0&&(R[ge]=null,b[ge].disconnect(ne))}for(let re=0;re<J.added.length;re++){const ne=J.added[re];let ge=R.indexOf(ne);if(ge===-1){for(let Se=0;Se<b.length;Se++)if(Se>=R.length){R.push(ne),ge=Se;break}else if(R[Se]===null){R[Se]=ne,ge=Se;break}if(ge===-1)break}const xe=b[ge];xe&&xe.connect(ne)}}const Z=new z,H=new z;function ie(J,re,ne){Z.setFromMatrixPosition(re.matrixWorld),H.setFromMatrixPosition(ne.matrixWorld);const ge=Z.distanceTo(H),xe=re.projectionMatrix.elements,Se=ne.projectionMatrix.elements,Ke=xe[14]/(xe[10]-1),ke=xe[14]/(xe[10]+1),nt=(xe[9]+1)/xe[5],et=(xe[9]-1)/xe[5],Ze=(xe[8]-1)/xe[0],bt=(Se[8]+1)/Se[0],Rt=Ke*Ze,Lt=Ke*bt,Ot=ge/(-Ze+bt),_t=Ot*-Ze;if(re.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(_t),J.translateZ(Ot),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),xe[10]===-1)J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Et=Ke+Ot,F=ke+Ot,jt=Rt-_t,it=Lt+(ge-_t),P=nt*ke/F*Et,x=et*ke/F*Et;J.projectionMatrix.makePerspective(jt,it,P,x,Et,F),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function te(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let re=J.near,ne=J.far;f.texture!==null&&(f.depthNear>0&&(re=f.depthNear),f.depthFar>0&&(ne=f.depthFar)),I.near=C.near=y.near=re,I.far=C.far=y.far=ne,(U!==I.near||O!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,O=I.far),I.layers.mask=J.layers.mask|6,y.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;const ge=J.parent,xe=I.cameras;te(I,ge);for(let Se=0;Se<xe.length;Se++)te(xe[Se],ge);xe.length===2?ie(I,y,C):I.projectionMatrix.copy(y.projectionMatrix),ae(J,I,ge)};function ae(J,re,ne){ne===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(ne.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ul*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(I)},this.getCameraTexture=function(J){return g[J]};let we=null;function $e(J,re){if(u=re.getViewerPose(l||a),m=re,u!==null){const ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ge=!1;ne.length!==I.cameras.length&&(I.cameras.length=0,ge=!0);for(let ke=0;ke<ne.length;ke++){const nt=ne[ke];let et=null;if(p!==null)et=p.getViewport(nt);else{const bt=h.getViewSubImage(d,nt);et=bt.viewport,ke===0&&(e.setRenderTargetTextures(v,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(v))}let Ze=D[ke];Ze===void 0&&(Ze=new un,Ze.layers.enable(ke),Ze.viewport=new gt,D[ke]=Ze),Ze.matrix.fromArray(nt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(nt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(et.x,et.y,et.width,et.height),ke===0&&(I.matrix.copy(Ze.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ge===!0&&I.cameras.push(Ze)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const ke=h.getDepthInformation(ne[0]);ke&&ke.isValid&&ke.texture&&f.init(ke,r.renderState)}if(xe&&xe.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let ke=0;ke<ne.length;ke++){const nt=ne[ke].camera;if(nt){let et=g[nt];et||(et=new _d,g[nt]=et);const Ze=h.getCameraImage(nt);et.sourceTexture=Ze}}}}for(let ne=0;ne<b.length;ne++){const ge=R[ne],xe=b[ne];ge!==null&&xe!==void 0&&xe.update(ge,re,l||a)}we&&we(J,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),m=null}const We=new yd;We.setAnimationLoop($e),this.setAnimationLoop=function(J){we=J},this.dispose=function(){}}}const V_=new ot,Cd=new Ue;Cd.set(-1,0,0,0,1,0,0,0,1);function W_(n,e){function t(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function i(f,g){g.color.getRGB(f.fogColor.value,xd(n)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function r(f,g,E,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(f,g):g.isMeshLambertMaterial?(s(f,g),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(f,g),h(f,g)):g.isMeshPhongMaterial?(s(f,g),u(f,g),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(f,g),d(f,g),g.isMeshPhysicalMaterial&&p(f,g,v)):g.isMeshMatcapMaterial?(s(f,g),m(f,g)):g.isMeshDepthMaterial?s(f,g):g.isMeshDistanceMaterial?(s(f,g),S(f,g)):g.isMeshNormalMaterial?s(f,g):g.isLineBasicMaterial?(a(f,g),g.isLineDashedMaterial&&o(f,g)):g.isPointsMaterial?c(f,g,E,w):g.isSpriteMaterial?l(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,t(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,t(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===rn&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,t(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===rn&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,t(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,t(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);const E=e.get(g),w=E.envMap,v=E.envMapRotation;w&&(f.envMap.value=w,f.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Cd),f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,f.aoMapTransform))}function a(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,t(g.map,f.mapTransform))}function o(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function c(f,g,E,w){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*E,f.scale.value=w*.5,g.map&&(f.map.value=g.map,t(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function l(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,t(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function u(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function h(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function d(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function p(f,g,E){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===rn&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,g){g.matcap&&(f.matcap.value=g.matcap)}function S(f,g){const E=e.get(g).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function X_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){const R=b.program;i.uniformBlockBinding(v,R)}function l(v,b){let R=r[v.id];R===void 0&&(f(v),R=u(v),r[v.id]=R,v.addEventListener("dispose",E));const T=b.program;i.updateUBOMapping(v,T);const _=e.render.frame;s[v.id]!==_&&(d(v),s[v.id]=_)}function u(v){const b=h();v.__bindingPointIndex=b;const R=n.createBuffer(),T=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,T,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,R),R}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const b=r[v.id],R=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let _=0,y=R.length;_<y;_++){const C=R[_];if(Array.isArray(C))for(let D=0,I=C.length;D<I;D++)p(C[D],_,D,T);else p(C,_,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,b,R,T){if(S(v,b,R,T)===!0){const _=v.__offset,y=v.value;if(Array.isArray(y)){let C=0;for(let D=0;D<y.length;D++){const I=y[D],U=g(I);m(I,v.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(y,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function m(v,b,R){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,R)}function S(v,b,R,T){const _=v.value,y=b+"_"+R;if(T[y]===void 0)return typeof _=="number"||typeof _=="boolean"?T[y]=_:ArrayBuffer.isView(_)?T[y]=_.slice():T[y]=_.clone(),!0;{const C=T[y];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return T[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function f(v){const b=v.uniforms;let R=0;const T=16;for(let y=0,C=b.length;y<C;y++){const D=Array.isArray(b[y])?b[y]:[b[y]];for(let I=0,U=D.length;I<U;I++){const O=D[I],L=Array.isArray(O.value)?O.value:[O.value];for(let V=0,G=L.length;V<G;V++){const Z=L[V],H=g(Z),ie=R%T,te=ie%H.boundary,ae=ie+te;R+=te,ae!==0&&T-ae<H.storage&&(R+=T-ae),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=R,R+=H.storage}}}const _=R%T;return _>0&&(R+=T-_),v.__size=R,v.__cache={},this}function g(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",v),b}function E(v){const b=v.target;b.removeEventListener("dispose",E);const R=a.indexOf(b.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function w(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:w}}const q_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function Y_(){return In===null&&(In=new md(q_,16,16,$i,di),In.name="DFG_LUT",In.minFilter=Ft,In.magFilter=Ft,In.wrapS=ri,In.wrapT=ri,In.generateMipmaps=!1,In.needsUpdate=!0),In}class $_{constructor(e={}){const{canvas:t=lf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=dn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const S=p,f=new Set([Il,Dl,Pl]),g=new Set([dn,Xn,is,rs,Al,Rl]),E=new Uint32Array(4),w=new Int32Array(4),v=new z;let b=null,R=null;const T=[],_=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,I=null,U=null,O=null,L=null;this._outputColorSpace=dt;let V=0,G=0,Z=null,H=-1,ie=null;const te=new gt,ae=new gt;let we=null;const $e=new Ie(0);let We=0,J=t.width,re=t.height,ne=1,ge=null,xe=null;const Se=new gt(0,0,J,re),Ke=new gt(0,0,J,re);let ke=!1;const nt=new Ol;let et=!1,Ze=!1;const bt=new ot,Rt=new z,Lt=new gt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Et(){return Z===null?ne:1}let F=i;function jt(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${El}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Rn,!1),F===null){const k="webgl2";if(F=jt(k,A),F===null)throw jt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Qe("WebGLRenderer: "+A.message),A}let it,P,x,B,q,$,se,le,K,j,ce,Te,he,ue,Pe,De,Fe,N,oe,Q,de,_e,ee;function Ee(){it=new Y0(F),it.init(),de=new k_(F,it),P=new z0(F,it,e,de),x=new F_(F,it),P.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),U=F.createFramebuffer(),O=F.createFramebuffer(),L=F.createFramebuffer(),B=new Z0(F),q=new y_,$=new O_(F,it,x,q,P,de,B),se=new q0(C),le=new ep(F),_e=new O0(F,le),K=new $0(F,le,B,_e),j=new Q0(F,K,le,_e,B),N=new J0(F,P,$),Pe=new B0(q),ce=new S_(C,se,it,P,_e,Pe),Te=new W_(C,q),he=new E_,ue=new P_(it),Fe=new F0(C,se,x,j,m,c),De=new U_(C,j,P),ee=new X_(F,B,P,x),oe=new k0(F,it,B),Q=new K0(F,it,B),B.programs=ce.programs,C.capabilities=P,C.extensions=it,C.properties=q,C.renderLists=he,C.shadowMap=De,C.state=x,C.info=B}Ee(),S!==dn&&(y=new eg(S,t.width,t.height,o,r,s));const ye=new H_(C,F);this.xr=ye,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=it.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=it.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(J,re,!1))},this.getSize=function(A){return A.set(J,re)},this.setSize=function(A,k,Y=!0){if(ye.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,re=k,t.width=Math.floor(A*ne),t.height=Math.floor(k*ne),Y===!0&&(t.style.width=A+"px",t.style.height=k+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(J*ne,re*ne).floor()},this.setDrawingBufferSize=function(A,k,Y){J=A,re=k,ne=Y,t.width=Math.floor(A*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(S===dn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(te)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,k,Y,W){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,k,Y,W),x.viewport(te.copy(Se).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(Ke)},this.setScissor=function(A,k,Y,W){A.isVector4?Ke.set(A.x,A.y,A.z,A.w):Ke.set(A,k,Y,W),x.scissor(ae.copy(Ke).multiplyScalar(ne).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(A){x.setScissorTest(ke=A)},this.setOpaqueSort=function(A){ge=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,Y=!0){let W=0;if(A){let X=!1;if(Z!==null){const me=Z.texture.format;X=f.has(me)}if(X){const me=Z.texture.type,Me=g.has(me),pe=Fe.getClearColor(),be=Fe.getClearAlpha(),Ae=pe.r,Oe=pe.g,Be=pe.b;Me?(E[0]=Ae,E[1]=Oe,E[2]=Be,E[3]=be,F.clearBufferuiv(F.COLOR,0,E)):(w[0]=Ae,w[1]=Oe,w[2]=Be,w[3]=be,F.clearBufferiv(F.COLOR,0,w))}else W|=F.COLOR_BUFFER_BIT}k&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),I=A},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Rn,!1),Fe.dispose(),he.dispose(),ue.dispose(),q.dispose(),se.dispose(),j.dispose(),_e.dispose(),ee.dispose(),ce.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",sc),ye.removeEventListener("sessionend",ac),Ui.stop()};function xt(A){A.preventDefault(),Mc("WebGLRenderer: Context Lost."),D=!0}function ht(){Mc("WebGLRenderer: Context Restored."),D=!1;const A=B.autoReset,k=De.enabled,Y=De.autoUpdate,W=De.needsUpdate,X=De.type;Ee(),B.autoReset=A,De.enabled=k,De.autoUpdate=Y,De.needsUpdate=W,De.type=X}function Rn(A){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Cn(A){const k=A.target;k.removeEventListener("dispose",Cn),Sh(k)}function Sh(A){yh(A),q.remove(A)}function yh(A){const k=q.get(A).programs;k!==void 0&&(k.forEach(function(Y){ce.releaseProgram(Y)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Y,W,X,me){k===null&&(k=Ot);const Me=X.isMesh&&X.matrixWorld.determinantAffine()<0,pe=wh(A,k,Y,W,X);x.setMaterial(W,Me);let be=Y.index,Ae=1;if(W.wireframe===!0){if(be=K.getWireframeAttribute(Y),be===void 0)return;Ae=2}const Oe=Y.drawRange,Be=Y.attributes.position;let Re=Oe.start*Ae,st=(Oe.start+Oe.count)*Ae;me!==null&&(Re=Math.max(Re,me.start*Ae),st=Math.min(st,(me.start+me.count)*Ae)),be!==null?(Re=Math.max(Re,0),st=Math.min(st,be.count)):Be!=null&&(Re=Math.max(Re,0),st=Math.min(st,Be.count));const Mt=st-Re;if(Mt<0||Mt===1/0)return;_e.setup(X,W,pe,Y,be);let vt,lt=oe;if(be!==null&&(vt=le.get(be),lt=Q,lt.setIndex(vt)),X.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*Et()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(X.isLine){let Ht=W.linewidth;Ht===void 0&&(Ht=1),x.setLineWidth(Ht*Et()),X.isLineSegments?lt.setMode(F.LINES):X.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else X.isPoints?lt.setMode(F.POINTS):X.isSprite&&lt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(it.get("WEBGL_multi_draw"))lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ht=X._multiDrawStarts,ve=X._multiDrawCounts,an=X._multiDrawCount,Je=be?le.get(be).bytesPerElement:1,fn=q.get(W).currentProgram.getUniforms();for(let Pn=0;Pn<an;Pn++)fn.setValue(F,"_gl_DrawID",Pn),lt.render(Ht[Pn]/Je,ve[Pn])}else if(X.isInstancedMesh)lt.renderInstances(Re,Mt,X.count);else if(Y.isInstancedBufferGeometry){const Ht=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ve=Math.min(Y.instanceCount,Ht);lt.renderInstances(Re,Mt,ve)}else lt.render(Re,Mt)};function rc(A,k,Y){A.transparent===!0&&A.side===At&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,Ss(A,k,Y),A.side=Li,A.needsUpdate=!0,Ss(A,k,Y),A.side=At):Ss(A,k,Y)}this.compile=function(A,k,Y=null){Y===null&&(Y=A),R=ue.get(Y),R.init(k),_.push(R),Y.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(R.pushLight(X),X.castShadow&&R.pushShadow(X))}),A!==Y&&A.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(R.pushLight(X),X.castShadow&&R.pushShadow(X))}),R.setupLights();const W=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const me=X.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){const pe=me[Me];rc(pe,Y,X),W.add(pe)}else rc(me,Y,X),W.add(me)}),R=_.pop(),W},this.compileAsync=function(A,k,Y=null){const W=this.compile(A,k,Y);return new Promise(X=>{function me(){if(W.forEach(function(Me){q.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){X(A);return}setTimeout(me,10)}it.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Da=null;function bh(A){Da&&Da(A)}function sc(){Ui.stop()}function ac(){Ui.start()}const Ui=new yd;Ui.setAnimationLoop(bh),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(A){Da=A,ye.setAnimationLoop(A),A===null?Ui.stop():Ui.start()},ye.addEventListener("sessionstart",sc),ye.addEventListener("sessionend",ac),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(A,k);const Y=ye.enabled===!0&&ye.isPresenting===!0,W=y!==null&&(Z===null||Y)&&y.begin(C,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(k),k=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,k,Z),R=ue.get(A,_.length),R.init(k),R.state.textureUnits=$.getTextureUnits(),_.push(R),bt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),nt.setFromProjectionMatrix(bt,kn,k.reversedDepth),Ze=this.localClippingEnabled,et=Pe.init(this.clippingPlanes,Ze),b=he.get(A,T.length),b.init(),T.push(b),ye.enabled===!0&&ye.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&Ia(Me,k,-1/0,C.sortObjects)}Ia(A,k,0,C.sortObjects),b.finish(),C.sortObjects===!0&&b.sort(ge,xe,k.reversedDepth),_t=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,_t&&Fe.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Pe.beginShadows();const X=R.state.shadowsArray;if(De.render(X,A,k),et===!0&&Pe.endShadows(),(W&&y.hasRenderPass())===!1){const Me=b.opaque,pe=b.transmissive;if(R.setupLights(),k.isArrayCamera){const be=k.cameras;if(pe.length>0)for(let Ae=0,Oe=be.length;Ae<Oe;Ae++){const Be=be[Ae];lc(Me,pe,A,Be)}_t&&Fe.render(A);for(let Ae=0,Oe=be.length;Ae<Oe;Ae++){const Be=be[Ae];oc(b,A,Be,Be.viewport)}}else pe.length>0&&lc(Me,pe,A,k),_t&&Fe.render(A),oc(b,A,k)}Z!==null&&G===0&&($.updateMultisampleRenderTarget(Z),$.updateRenderTargetMipmap(Z)),W&&y.end(C),A.isScene===!0&&A.onAfterRender(C,A,k),_e.resetDefaultState(),H=-1,ie=null,_.pop(),_.length>0?(R=_[_.length-1],$.setTextureUnits(R.state.textureUnits),et===!0&&Pe.setGlobalState(C.clippingPlanes,R.state.camera)):R=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,I!==null&&I.renderEnd()};function Ia(A,k,Y,W){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)R.pushLightProbeGrid(A);else if(A.isLight)R.pushLight(A),A.castShadow&&R.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||nt.intersectsSprite(A)){W&&Lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(bt);const Me=j.update(A),pe=A.material;pe.visible&&b.push(A,Me,pe,Y,Lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||nt.intersectsObject(A))){const Me=j.update(A),pe=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Lt.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Lt.copy(Me.boundingSphere.center)),Lt.applyMatrix4(A.matrixWorld).applyMatrix4(bt)),Array.isArray(pe)){const be=Me.groups;for(let Ae=0,Oe=be.length;Ae<Oe;Ae++){const Be=be[Ae],Re=pe[Be.materialIndex];Re&&Re.visible&&b.push(A,Me,Re,Y,Lt.z,Be)}}else pe.visible&&b.push(A,Me,pe,Y,Lt.z,null)}}const me=A.children;for(let Me=0,pe=me.length;Me<pe;Me++)Ia(me[Me],k,Y,W)}function oc(A,k,Y,W){const{opaque:X,transmissive:me,transparent:Me}=A;R.setupLightsView(Y),et===!0&&Pe.setGlobalState(C.clippingPlanes,Y),W&&x.viewport(te.copy(W)),X.length>0&&Ms(X,k,Y),me.length>0&&Ms(me,k,Y),Me.length>0&&Ms(Me,k,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function lc(A,k,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[W.id]===void 0){const Re=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[W.id]=new Bn(1,1,{generateMipmaps:!0,type:Re?di:dn,minFilter:si,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const me=R.state.transmissionRenderTarget[W.id],Me=W.viewport||te;me.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);const pe=C.getRenderTarget(),be=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor($e),We=C.getClearAlpha(),We<1&&C.setClearColor(16777215,.5),C.clear(),_t&&Fe.render(Y);const Oe=C.toneMapping;C.toneMapping=zn;const Be=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),R.setupLightsView(W),et===!0&&Pe.setGlobalState(C.clippingPlanes,W),Ms(A,Y,W),$.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me),it.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let st=0,Mt=k.length;st<Mt;st++){const vt=k[st],{object:lt,geometry:Ht,material:ve,group:an}=vt;if(ve.side===At&&lt.layers.test(W.layers)){const Je=ve.side;ve.side=rn,ve.needsUpdate=!0,cc(lt,Y,W,Ht,ve,an),ve.side=Je,ve.needsUpdate=!0,Re=!0}}Re===!0&&($.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me))}C.setRenderTarget(pe,be,Ae),C.setClearColor($e,We),Be!==void 0&&(W.viewport=Be),C.toneMapping=Oe}function Ms(A,k,Y){const W=k.isScene===!0?k.overrideMaterial:null;for(let X=0,me=A.length;X<me;X++){const Me=A[X],{object:pe,geometry:be,group:Ae}=Me;let Oe=Me.material;Oe.allowOverride===!0&&W!==null&&(Oe=W),pe.layers.test(Y.layers)&&cc(pe,k,Y,be,Oe,Ae)}}function cc(A,k,Y,W,X,me){A.onBeforeRender(C,k,Y,W,X,me),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(C,k,Y,W,A,me),X.transparent===!0&&X.side===At&&X.forceSinglePass===!1?(X.side=rn,X.needsUpdate=!0,C.renderBufferDirect(Y,k,W,X,A,me),X.side=Li,X.needsUpdate=!0,C.renderBufferDirect(Y,k,W,X,A,me),X.side=At):C.renderBufferDirect(Y,k,W,X,A,me),A.onAfterRender(C,k,Y,W,X,me)}function Ss(A,k,Y){k.isScene!==!0&&(k=Ot);const W=q.get(A),X=R.state.lights,me=R.state.shadowsArray,Me=X.state.version,pe=ce.getParameters(A,X.state,me,k,Y,R.state.lightProbeGridArray),be=ce.getProgramCacheKey(pe);let Ae=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;const Oe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=se.get(A.envMap||W.environment,Oe),W.envMapRotation=W.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ae===void 0&&(A.addEventListener("dispose",Cn),Ae=new Map,W.programs=Ae);let Be=Ae.get(be);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===Me)return dc(A,pe),Be}else pe.uniforms=ce.getUniforms(A),I!==null&&A.isNodeMaterial&&I.build(A,Y,pe),A.onBeforeCompile(pe,C),Be=ce.acquireProgram(pe,be),Ae.set(be,Be),W.uniforms=pe.uniforms;const Re=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=Pe.uniform),dc(A,pe),W.needsLights=Ah(A),W.lightsStateVersion=Me,W.needsLights&&(Re.ambientLightColor.value=X.state.ambient,Re.lightProbe.value=X.state.probe,Re.directionalLights.value=X.state.directional,Re.directionalLightShadows.value=X.state.directionalShadow,Re.spotLights.value=X.state.spot,Re.spotLightShadows.value=X.state.spotShadow,Re.rectAreaLights.value=X.state.rectArea,Re.ltc_1.value=X.state.rectAreaLTC1,Re.ltc_2.value=X.state.rectAreaLTC2,Re.pointLights.value=X.state.point,Re.pointLightShadows.value=X.state.pointShadow,Re.hemisphereLights.value=X.state.hemi,Re.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Re.spotLightMatrix.value=X.state.spotLightMatrix,Re.spotLightMap.value=X.state.spotLightMap,Re.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=R.state.lightProbeGridArray.length>0,W.currentProgram=Be,W.uniformsList=null,Be}function uc(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=ra.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function dc(A,k){const Y=q.get(A);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Eh(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let Y=0,W=A.length;Y<W;Y++){const X=A[Y];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function wh(A,k,Y,W,X){k.isScene!==!0&&(k=Ot),$.resetTextureUnits();const me=k.fog,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,pe=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Xe.workingColorSpace,be=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ae=se.get(W.envMap||Me,be),Oe=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,Mt=!!Y.morphAttributes.color;let vt=zn;W.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(vt=C.toneMapping);const lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ht=lt!==void 0?lt.length:0,ve=q.get(W),an=R.state.lights;if(et===!0&&(Ze===!0||A!==ie)){const ft=A===ie&&W.id===H;Pe.setState(W,A,ft)}let Je=!1;W.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==an.state.version||ve.outputColorSpace!==pe||X.isBatchedMesh&&ve.batching===!1||!X.isBatchedMesh&&ve.batching===!0||X.isBatchedMesh&&ve.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&ve.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&ve.instancing===!1||!X.isInstancedMesh&&ve.instancing===!0||X.isSkinnedMesh&&ve.skinning===!1||!X.isSkinnedMesh&&ve.skinning===!0||X.isInstancedMesh&&ve.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ve.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ve.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ve.instancingMorph===!1&&X.morphTexture!==null||ve.envMap!==Ae||W.fog===!0&&ve.fog!==me||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Pe.numPlanes||ve.numIntersection!==Pe.numIntersection)||ve.vertexAlphas!==Oe||ve.vertexTangents!==Be||ve.morphTargets!==Re||ve.morphNormals!==st||ve.morphColors!==Mt||ve.toneMapping!==vt||ve.morphTargetsCount!==Ht||!!ve.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,ve.__version=W.version);let fn=ve.currentProgram;Je===!0&&(fn=Ss(W,k,X),I&&W.isNodeMaterial&&I.onUpdateProgram(W,fn,ve));let Pn=!1,_i=!1,er=!1;const ct=fn.getUniforms(),St=ve.uniforms;if(x.useProgram(fn.program)&&(Pn=!0,_i=!0,er=!0),W.id!==H&&(H=W.id,_i=!0),ve.needsLights){const ft=Eh(R.state.lightProbeGridArray,X);ve.lightProbeGrid!==ft&&(ve.lightProbeGrid=ft,_i=!0)}if(Pn||ie!==A){x.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ct.setValue(F,"projectionMatrix",A.projectionMatrix),ct.setValue(F,"viewMatrix",A.matrixWorldInverse);const vi=ct.map.cameraPosition;vi!==void 0&&vi.setValue(F,Rt.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&ct.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ct.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),ie!==A&&(ie=A,_i=!0,er=!0)}if(ve.needsLights&&(an.state.directionalShadowMap.length>0&&ct.setValue(F,"directionalShadowMap",an.state.directionalShadowMap,$),an.state.spotShadowMap.length>0&&ct.setValue(F,"spotShadowMap",an.state.spotShadowMap,$),an.state.pointShadowMap.length>0&&ct.setValue(F,"pointShadowMap",an.state.pointShadowMap,$)),X.isSkinnedMesh){ct.setOptional(F,X,"bindMatrix"),ct.setOptional(F,X,"bindMatrixInverse");const ft=X.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ct.setValue(F,"boneTexture",ft.boneTexture,$))}X.isBatchedMesh&&(ct.setOptional(F,X,"batchingTexture"),ct.setValue(F,"batchingTexture",X._matricesTexture,$),ct.setOptional(F,X,"batchingIdTexture"),ct.setValue(F,"batchingIdTexture",X._indirectTexture,$),ct.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&ct.setValue(F,"batchingColorTexture",X._colorsTexture,$));const xi=Y.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&N.update(X,Y,fn),(_i||ve.receiveShadow!==X.receiveShadow)&&(ve.receiveShadow=X.receiveShadow,ct.setValue(F,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(St.envMapIntensity.value=k.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=Y_()),_i){if(ct.setValue(F,"toneMappingExposure",C.toneMappingExposure),ve.needsLights&&Th(St,er),me&&W.fog===!0&&Te.refreshFogUniforms(St,me),Te.refreshMaterialUniforms(St,W,ne,re,R.state.transmissionRenderTarget[A.id]),ve.needsLights&&ve.lightProbeGrid){const ft=ve.lightProbeGrid;St.probesSH.value=ft.texture,St.probesMin.value.copy(ft.boundingBox.min),St.probesMax.value.copy(ft.boundingBox.max),St.probesResolution.value.copy(ft.resolution)}ra.upload(F,uc(ve),St,$)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ra.upload(F,uc(ve),St,$),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ct.setValue(F,"center",X.center),ct.setValue(F,"modelViewMatrix",X.modelViewMatrix),ct.setValue(F,"normalMatrix",X.normalMatrix),ct.setValue(F,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const ft=W.uniformsGroups;for(let vi=0,tr=ft.length;vi<tr;vi++){const hc=ft[vi];ee.update(hc,fn),ee.bind(hc,fn)}}return fn}function Th(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Ah(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,k,Y){const W=q.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(A.texture).__webglTexture=k,q.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const Y=q.get(A);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,Y=0){Z=A,V=k,G=Y;let W=null,X=!1,me=!1;if(A){const pe=q.get(A);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,pe.__webglFramebuffer),te.copy(A.viewport),ae.copy(A.scissor),we=A.scissorTest,x.viewport(te),x.scissor(ae),x.setScissorTest(we),H=-1;return}else if(pe.__webglFramebuffer===void 0)$.setupRenderTarget(A);else if(pe.__hasExternalTextures)$.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Oe=A.depthTexture;if(pe.__boundDepthTexture!==Oe){if(Oe!==null&&q.has(Oe)&&(A.width!==Oe.image.width||A.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(A)}}const be=A.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(me=!0);const Ae=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ae[k])?W=Ae[k][Y]:W=Ae[k],X=!0):A.samples>0&&$.useMultisampledRTT(A)===!1?W=q.get(A).__webglMultisampledFramebuffer:Array.isArray(Ae)?W=Ae[Y]:W=Ae,te.copy(A.viewport),ae.copy(A.scissor),we=A.scissorTest}else te.copy(Se).multiplyScalar(ne).floor(),ae.copy(Ke).multiplyScalar(ne).floor(),we=ke;if(Y!==0&&(W=U),x.bindFramebuffer(F.FRAMEBUFFER,W)&&x.drawBuffers(A,W),x.viewport(te),x.scissor(ae),x.setScissorTest(we),X){const pe=q.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,pe.__webglTexture,Y)}else if(me){const pe=k;for(let be=0;be<A.textures.length;be++){const Ae=q.get(A.textures[be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+be,Ae.__webglTexture,Y,pe)}}else if(A!==null&&Y!==0){const pe=q.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pe.__webglTexture,Y)}H=-1},this.readRenderTargetPixels=function(A,k,Y,W,X,me,Me,pe=0){if(!(A&&A.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){x.bindFramebuffer(F.FRAMEBUFFER,be);try{const Ae=A.textures[pe],Oe=Ae.format,Be=Ae.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe),!P.textureFormatReadable(Oe)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Be)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-W&&Y>=0&&Y<=A.height-X&&F.readPixels(k,Y,W,X,de.convert(Oe),de.convert(Be),me)}finally{const Ae=Z!==null?q.get(Z).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(A,k,Y,W,X,me,Me,pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be)if(k>=0&&k<=A.width-W&&Y>=0&&Y<=A.height-X){x.bindFramebuffer(F.FRAMEBUFFER,be);const Ae=A.textures[pe],Oe=Ae.format,Be=Ae.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe),!P.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.bufferData(F.PIXEL_PACK_BUFFER,me.byteLength,F.STREAM_READ),F.readPixels(k,Y,W,X,de.convert(Oe),de.convert(Be),0);const st=Z!==null?q.get(Z).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,st);const Mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await cf(F,Mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,me),F.deleteBuffer(Re),F.deleteSync(Mt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,Y=0){const W=Math.pow(2,-Y),X=Math.floor(A.image.width*W),me=Math.floor(A.image.height*W),Me=k!==null?k.x:0,pe=k!==null?k.y:0;$.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Me,pe,X,me),x.unbindTexture()},this.copyTextureToTexture=function(A,k,Y=null,W=null,X=0,me=0){let Me,pe,be,Ae,Oe,Be,Re,st,Mt;const vt=A.isCompressedTexture?A.mipmaps[me]:A.image;if(Y!==null)Me=Y.max.x-Y.min.x,pe=Y.max.y-Y.min.y,be=Y.isBox3?Y.max.z-Y.min.z:1,Ae=Y.min.x,Oe=Y.min.y,Be=Y.isBox3?Y.min.z:0;else{const St=Math.pow(2,-X);Me=Math.floor(vt.width*St),pe=Math.floor(vt.height*St),A.isDataArrayTexture?be=vt.depth:A.isData3DTexture?be=Math.floor(vt.depth*St):be=1,Ae=0,Oe=0,Be=0}W!==null?(Re=W.x,st=W.y,Mt=W.z):(Re=0,st=0,Mt=0);const lt=de.convert(k.format),Ht=de.convert(k.type);let ve;k.isData3DTexture?($.setTexture3D(k,0),ve=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?($.setTexture2DArray(k,0),ve=F.TEXTURE_2D_ARRAY):($.setTexture2D(k,0),ve=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const an=x.getParameter(F.UNPACK_ROW_LENGTH),Je=x.getParameter(F.UNPACK_IMAGE_HEIGHT),fn=x.getParameter(F.UNPACK_SKIP_PIXELS),Pn=x.getParameter(F.UNPACK_SKIP_ROWS),_i=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,vt.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vt.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Ae),x.pixelStorei(F.UNPACK_SKIP_ROWS,Oe),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Be);const er=A.isDataArrayTexture||A.isData3DTexture,ct=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const St=q.get(A),xi=q.get(k),ft=q.get(St.__renderTarget),vi=q.get(xi.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,ft.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let tr=0;tr<be;tr++)er&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(A).__webglTexture,X,Be+tr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(k).__webglTexture,me,Mt+tr)),F.blitFramebuffer(Ae,Oe,Me,pe,Re,st,Me,pe,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||q.has(A)){const St=q.get(A),xi=q.get(k);x.bindFramebuffer(F.READ_FRAMEBUFFER,O),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let ft=0;ft<be;ft++)er?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.__webglTexture,X,Be+ft):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St.__webglTexture,X),ct?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xi.__webglTexture,me,Mt+ft):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xi.__webglTexture,me),X!==0?F.blitFramebuffer(Ae,Oe,Me,pe,Re,st,Me,pe,F.COLOR_BUFFER_BIT,F.NEAREST):ct?F.copyTexSubImage3D(ve,me,Re,st,Mt+ft,Ae,Oe,Me,pe):F.copyTexSubImage2D(ve,me,Re,st,Ae,Oe,Me,pe);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ct?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(ve,me,Re,st,Mt,Me,pe,be,lt,Ht,vt.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(ve,me,Re,st,Mt,Me,pe,be,lt,vt.data):F.texSubImage3D(ve,me,Re,st,Mt,Me,pe,be,lt,Ht,vt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,me,Re,st,Me,pe,lt,Ht,vt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,me,Re,st,vt.width,vt.height,lt,vt.data):F.texSubImage2D(F.TEXTURE_2D,me,Re,st,Me,pe,lt,Ht,vt);x.pixelStorei(F.UNPACK_ROW_LENGTH,an),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je),x.pixelStorei(F.UNPACK_SKIP_PIXELS,fn),x.pixelStorei(F.UNPACK_SKIP_ROWS,Pn),x.pixelStorei(F.UNPACK_SKIP_IMAGES,_i),me===0&&k.generateMipmaps&&F.generateMipmap(ve),x.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&$.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?$.setTextureCube(A,0):A.isData3DTexture?$.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$.setTexture2DArray(A,0):$.setTexture2D(A,0),x.unbindTexture()},this.resetState=function(){V=0,G=0,Z=null,x.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}function K_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var sa={exports:{}},Z_=sa.exports,mu;function J_(){return mu||(mu=1,(function(n,e){(function(t,i){n.exports=i()})(Z_,function(){return t.importState=function(r){var s=new t;return s.importState(r),s},t;function t(){return(function(r){var s=0,a=0,o=0,c=1;r.length==0&&(r=[+new Date]);var l=i();s=l(" "),a=l(" "),o=l(" ");for(var u=0;u<r.length;u++)s-=l(r[u]),s<0&&(s+=1),a-=l(r[u]),a<0&&(a+=1),o-=l(r[u]),o<0&&(o+=1);l=null;var h=function(){var d=2091639*s+c*23283064365386963e-26;return s=a,a=o,o=d-(c=d|0)};return h.next=h,h.uint32=function(){return h()*4294967296},h.fract53=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.version="Alea 0.9",h.args=r,h.exportState=function(){return[s,a,o,c]},h.importState=function(d){s=+d[0]||0,a=+d[1]||0,o=+d[2]||0,c=+d[3]||0},h})(Array.prototype.slice.call(arguments))}function i(){var r=4022871197,s=function(a){a=a.toString();for(var o=0;o<a.length;o++){r+=a.charCodeAt(o);var c=.02519603282416938*r;r=c>>>0,c-=r,c*=r,r=c>>>0,c-=r,r+=c*4294967296}return(r>>>0)*23283064365386963e-26};return s.version="Mash 0.9",s}})})(sa)),sa.exports}var Q_=J_();const ei=K_(Q_);function pi(...n){return ei(n.join(":"))}const Xi=32;function j_(n,e,t,i){return e!==i?e<i:n<t}const qs=new Map;function gu(n,e,t,i,r=120){const s=`${n}|${e}|${t}|${i}|${r}`,a=qs.get(s);if(a)return a;const o=pi(n,"scatter",e,t),c=e*Xi,l=t*Xi,u=[],h=i*i;for(let d=0;d<r;d++){const p=c+o()*Xi,m=l+o()*Xi,S=o();let f=!0;for(const g of u){const E=g.x-p,w=g.z-m;if(E*E+w*w<h){f=!1;break}}f&&u.push({x:p,z:m,k:S})}return qs.size>4096&&qs.clear(),qs.set(s,u),u}function Pd(n,e,t,i,r=120){const s=gu(n,e,t,i,r),a=i*i,o=[];for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){if(c===0&&l===0)continue;const u=e+c,h=t+l;if(j_(u,h,e,t))for(const d of gu(n,u,h,i,r))o.push(d)}return o.length===0?s:s.filter(c=>{for(const l of o){const u=l.x-c.x,h=l.z-c.z;if(u*u+h*h<a)return!1}return!0})}const Dd=Math.sqrt(3),ex=.5*(Dd-1),$r=(3-Dd)/6,_u=n=>Math.floor(n)|0,xu=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function ti(n=Math.random){const e=tx(n),t=new Float64Array(e).map(r=>xu[r%12*2]),i=new Float64Array(e).map(r=>xu[r%12*2+1]);return function(s,a){let o=0,c=0,l=0;const u=(s+a)*ex,h=_u(s+u),d=_u(a+u),p=(h+d)*$r,m=h-p,S=d-p,f=s-m,g=a-S;let E,w;f>g?(E=1,w=0):(E=0,w=1);const v=f-E+$r,b=g-w+$r,R=f-1+2*$r,T=g-1+2*$r,_=h&255,y=d&255;let C=.5-f*f-g*g;if(C>=0){const U=_+e[y],O=t[U],L=i[U];C*=C,o=C*C*(O*f+L*g)}let D=.5-v*v-b*b;if(D>=0){const U=_+E+e[y+w],O=t[U],L=i[U];D*=D,c=D*D*(O*v+L*b)}let I=.5-R*R-T*T;if(I>=0){const U=_+1+e[y+1],O=t[U],L=i[U];I*=I,l=I*I*(O*R+L*T)}return 70*(o+c+l)}}function tx(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),s=t[i];t[i]=t[r],t[r]=s}for(let i=256;i<512;i++)t[i]=t[i-256];return t}const jr=0,nx=6,ix=38;function Ln(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const mn={inlandStart:30,inlandFull:60,carve:.95,pondCarve:2.3,hide:.3,depth:.34,band:.055,pondBand:.3};function rx(n,e={}){const t=e.inlandOffset??0,i=ti(ei(`${n}:shore`)),r=ti(ei(`${n}:dune`)),s=ti(ei(`${n}:detail`)),a=ti(ei(`${n}:rock`)),o=ti(ei(`${n}:stream`)),c=ti(ei(`${n}:streamwarp`)),l=ti(ei(`${n}:pond`));function u(T,_){const y=i(T*.004,0)*26+i(T*.013,11.5)*7;return _-y+t}function h(T,_,y){const C=Ln(mn.inlandStart,mn.inlandFull,y);if(C<=.001)return{mask:0,pond:0};const D=T+c(T*.01,_*.01)*22,I=_+c(T*.01+5.3,_*.01+5.3)*22,U=1-Math.abs(o(D*.0042,I*.0042)),O=Ln(1-mn.band,1,U),L=l(T*.0075+11.1,_*.0075+11.1),V=Ln(.58,.82,L)*Ln(1-mn.pondBand,1,U);return{mask:Math.min(1,Math.max(O,V))*C,pond:V*C}}function d(T,_){return g(T,_,u(T,_))}function p(T,_){const y=u(T,_),{mask:C}=h(T,_,y);return g(T,_,y)-mn.hide-(mn.carve-mn.hide-mn.depth)*C}function m(T,_){const y=u(T,_);if(y<12)return jr;const{mask:C}=h(T,_,y);return C<.02?-1/0:p(T,_)}function S(T,_,y=4){const C=[[0,0],[y,0],[-y,0],[0,y],[0,-y],[y*.7,y*.7],[-y*.7,-y*.7]];for(const[D,I]of C){const U=T+D,O=_+I,L=u(U,O);if(L<12||h(U,O,L).mask>.15)return!0}return!1}function f(T,_){const y=m(T,_);return y===-1/0?0:Math.max(0,y-E(T,_))}function g(T,_,y){let C=0;C+=Ln(-14,46,y)*5.2,C+=Math.exp(-Math.pow((y-21)/13,2))*2.1;const D=Ln(0,40,y);C+=r(T*.017,_*.017)*2.3*D,C+=s(T*.061,_*.061)*.55*D,C+=s(T*.09,_*.09)*.13;const I=Ln(0,-22,y);C-=I*5,C-=Math.abs(s(T*.09,_*.09))*.13*I;const U=a(T*.021,_*.021);U>.62&&(C+=(U-.62)*9*Ln(10,34,y));const O=Ln(1.5,9,y);if(O>0){const L=.22*O;C<L&&(C=L+(C-L)*(1-O))}return C}function E(T,_){const y=u(T,_),C=g(T,_,y),{mask:D,pond:I}=h(T,_,y);if(D<=0)return C;const U=mn.carve+(mn.pondCarve-mn.carve)*I;return C-U*D}function w(T,_){const y=r(T*.011,_*.011)*7;return Ln(nx,ix,u(T,_)+y)}function v(T,_){const C=(E(T+.9,_)-E(T-.9,_))/1.8,D=(E(T,_+.9)-E(T,_-.9))/(2*.9);return Math.min(1,Math.hypot(C,D))}function b(T,_){return u(T,_)<12?E(T,_)<jr-.05:f(T,_)>.05}function R(T,_){return a(T*.021,_*.021)}return{hasSea:t<=0,heightAt:E,baseHeightAt:d,rockAt:R,forestnessAt:w,slopeAt:v,isSubmerged:b,inlandAt:u,channelAt:h,freshSurfaceAt:p,waterSurfaceAt:m,waterDepthAt:f,nearWaterAt:S,SEA_LEVEL:jr,CHANNEL:mn}}const sx=[{tier:1,name:"Bitz",colour:"#b9a888",scale:.3},{tier:2,name:"Keepers",colour:"#cfd8c0",scale:.36},{tier:3,name:"Glimmers",colour:"#7fb6c4",scale:.42},{tier:4,name:"Wonders",colour:"#c9a3e0",scale:.52},{tier:5,name:"Epic Find",colour:"#ffd36b",scale:.7},{tier:6,name:"Epic epic Find",colour:"#ff8fd0",scale:.86}],ax={beach:{1:45,2:33,3:17,4:5},forest:{1:42,2:34,3:18,4:6},elsewhere:{1:20,2:30,3:28,4:22}},ox=[{id:"shell_chip",tier:1,biome:"beach",name:"shell chip",flavour:"a broken bit of something that used to be whole."},{id:"worn_pebble",tier:1,biome:"beach",name:"worn pebble",flavour:"the sea has been working on this one for a while."},{id:"dry_kelp",tier:1,biome:"beach",name:"dry kelp",flavour:"crunchy. smells like low tide."},{id:"twig",tier:1,biome:"forest",name:"twig",flavour:"a twig. genuinely just a twig."},{id:"leaf_litter",tier:1,biome:"forest",name:"leaf litter",flavour:"damp, and slightly warm underneath."},{id:"can_tab",tier:1,biome:"forest",name:"can tab",flavour:"shiny bit of metal. someone would want this."},{id:"scallop",tier:2,biome:"beach",name:"whole scallop",flavour:"unbroken. that almost never happens."},{id:"sea_glass",tier:2,biome:"beach",name:"sea glass",flavour:"a bottle, once. the sea sanded the anger out of it."},{id:"cats_eye",tier:2,biome:"beach",name:"cat's eye",flavour:"the little door a sea snail closed behind itself."},{id:"pinecone",tier:2,biome:"forest",name:"pinecone",flavour:"closed tight. it will open when it is ready."},{id:"quartz_chip",tier:2,biome:"forest",name:"quartz chip",flavour:"white and sharp. catches the light wrong."},{id:"banded_agate",tier:3,biome:"beach",name:"banded agate",flavour:"rings all the way through, like it kept a record."},{id:"paua_piece",tier:3,biome:"beach",name:"pāua piece",flavour:"every colour at once, depending how you hold it."},{id:"mermaids_purse",tier:3,biome:"beach",name:"mermaid's purse",flavour:"empty. whatever was in here left some time ago."},{id:"elytron",tier:3,biome:"forest",name:"beetle elytron",flavour:"one wing case, green-black, impossibly light."},{id:"resin_bead",tier:3,biome:"forest",name:"resin bead",flavour:"still tacky. it will be a stone in a million years."},{id:"humming_geode",tier:4,biome:"forest",name:"humming geode",flavour:"hold it near your ear. no, closer."},{id:"one_note_shell",tier:4,biome:"beach",name:"one-note shell",flavour:"it plays exactly one note, and only outdoors."},{id:"heavy_feather",tier:4,biome:"forest",name:"heavy feather",flavour:"weighs more than a feather has any business weighing."},{id:"pounamu",tier:4,biome:"beach",near:"water",name:"pounamu",flavour:"warm before you pick it up, not after."},{id:"violet_grit",tier:1,biome:"elsewhere",name:"violet grit",flavour:"sand, but the wrong colour. it stays the wrong colour in your hand."},{id:"dry_ember",tier:1,biome:"elsewhere",name:"dry ember",flavour:"not warm. it looks like it should be."},{id:"lit_seed",tier:2,biome:"elsewhere",name:"lit seed",flavour:"there is a little light in it that does not go out when you close your hand."},{id:"star_chip",tier:3,biome:"elsewhere",name:"star chip",flavour:"four points. it is not glass and it is not stone."},{id:"sunset_pebble",tier:4,biome:"elsewhere",name:"sunset pebble",flavour:"the colour of the sky here, all the way through. it will be that colour at home too."},{id:"portal_shard",tier:5,biome:"any",name:"shard of elsewhere",flavour:"the light in it is coming from a sky you have not seen."},{id:"wrong_compass",tier:5,biome:"any",name:"wrong compass",flavour:"it points confidently. not at north."},{id:"sealed_tin",tier:5,biome:"any",name:"sealed tin",flavour:"something inside shifts when you turn it. it is not liquid."},{id:"scifi_heru",tier:5,biome:"any",name:"a heru, but not",flavour:"the comb is right. the material is from no tree and no bone."},{id:"chainmail_maro",tier:5,biome:"any",name:"a chainmail maro",flavour:"every ring closed by hand. not by any hand you know."},{id:"scale_that_isnt",tier:5,biome:"authored",name:"a scale that isn't",flavour:"it is not a scale. it is very nearly a scale."},{id:"warm_stone",tier:5,biome:"authored",name:"a stone warm on one side",flavour:"the same side, however you put it down."},{id:"knotted_kelp",tier:5,biome:"authored",name:"kelp in a knot",flavour:"a length of kelp tied in a knot no tide ties."},{id:"seeing_stone",tier:6,biome:"granted",name:"the sure stone",flavour:"heavier than it looks. it does not roll when you put it down."},{id:"carry_knot",tier:6,biome:"granted",name:"the carrying knot",flavour:"a knot with no ends. you cannot find where it starts."}],mi={tiers:sx,weights:ax,items:ox},lx=5.4,cx=.62;function ux(n){return n.biome==="any"?["beach","forest","elsewhere"]:n.biome==="forest"?["forest","elsewhere"]:n.biome==="granted"||n.biome==="authored"?[]:[n.biome]}const es=new Map;for(const n of mi.items)for(const e of ux(n)){const t=`${n.tier}:${e}`;es.has(t)||es.set(t,[]),es.get(t).push(n)}const aa=new Map;for(const n of mi.items)n.near==="water"&&(aa.has(n.tier)||aa.set(n.tier,[]),aa.get(n.tier).push(n));const dx=new Map(mi.tiers.map(n=>[n.tier,n]));function Id(n,e){const t=Object.keys(e);let i=0;for(const s of t)i+=e[s];let r=n*i;for(const s of t)if(r-=e[s],r<=0)return Number(s);return Number(t[t.length-1])}function fl(n,e,t,i=!1){let r=es.get(`${e}:${t}`)??[];if(i){const s=aa.get(e)??[];s.length&&(r=r.concat(s.filter(a=>!r.includes(a))))}return r.length===0?null:r[Math.min(r.length-1,Math.floor(n*r.length))]}function Ld(n,e={}){const t=rx(n,e),i=e.biomeKey??"home",r=i==="elsewhere"?"elsewhere:":"";function s(a,o){const c=Pd(n,a,o,lx),l=[];for(let u=0;u<c.length;u++){const h=c[u];if(t.isSubmerged(h.x,h.z)||t.slopeAt(h.x,h.z)>cx)continue;const d=t.forestnessAt(h.x,h.z),p=pi(n,"obj",a,o,u),m=p()<d?"forest":"beach",S=i==="elsewhere"?"elsewhere":m,f=p(),g=p(),E=Id(f,mi.weights[S]),w=es.get(`${E}:${S}`)??[];if(w.length===0)continue;const v=t.nearWaterAt(h.x,h.z);l.push({id:`${r}${a}:${o}:${u}`,nearWater:v,itemId:w[Math.floor(g*w.length)].id,tier:E,tierRoll:f,itemRoll:g,x:h.x,y:t.heightAt(h.x,h.z),z:h.z,rot:p()*Math.PI*2,biome:S})}return l}return{seed:n,biomeKey:i,genChunk:s,...t,CHUNK_SIZE:Xi}}function Dr(n){return Math.floor(n/Xi)}function Ni(n){return dx.get(n)}function pl(n){return mi.items.find(e=>e.id===n)}const oa=mi;function hx({advance:n,draw:e,maxStep:t=.05}){let i=!1,r=performance.now(),s=0;function a(o){s=requestAnimationFrame(a);const c=Math.min((o-r)/1e3,t);r=o,!i&&(n(c),e())}return s=requestAnimationFrame(a),{pause(){i=!0},resume(){i=!1,r=performance.now()},get paused(){return i},step(o){n(o),e()},stepLogic(o){n(o)},stop(){cancelAnimationFrame(s)}}}function fx(n=window){const e=new Set,t={x:0,z:0,held:!1};let i=!1,r=!1,s=!1,a=0;const o=new Set(["KeyE","Space","Enter"]),c=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyS"]);n.addEventListener("keydown",f=>{f.repeat||(e.add(f.code),o.has(f.code)&&(i=!0,f.preventDefault()),f.code==="KeyG"&&(r=!0,f.preventDefault()),f.code==="Escape"&&(s=!0),(f.code==="ArrowUp"||f.code==="KeyW")&&(a-=1),(f.code==="ArrowDown"||f.code==="KeyS")&&(a+=1),c.has(f.code)&&f.preventDefault())}),n.addEventListener("keyup",f=>e.delete(f.code)),n.addEventListener("blur",()=>e.clear());let l=0,u=!1,h=0;const d=f=>{u=!0,h=f.clientX},p=f=>{u&&(l+=(f.clientX-h)*.005,h=f.clientX)},m=()=>{u=!1};n.addEventListener("pointerdown",d),n.addEventListener("pointermove",p),n.addEventListener("pointerup",m),n.addEventListener("pointercancel",m);const S=f=>Math.max(-1,Math.min(1,f));return{touch:t,isDown:f=>e.has(f)||t.held&&o.has(f),get axes(){let f=t.x,g=t.z;return(e.has("KeyW")||e.has("ArrowUp"))&&(g-=1),(e.has("KeyS")||e.has("ArrowDown"))&&(g+=1),(e.has("KeyA")||e.has("ArrowLeft"))&&(f-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(f+=1),{x:S(f),z:S(g)}},get turn(){let f=0;return e.has("KeyQ")&&(f-=1),e.has("KeyE")&&e.has("ShiftLeft")&&(f+=1),f},takeCollect(){return i?(i=!1,!0):!1},takeYaw(){const f=l;return l=0,f},takeGive(){return r?(r=!1,!0):!1},takeCancel(){return s?(s=!1,!0):!1},takeNav(){const f=a;return a=0,f},queueCollect(){i=!0},queueCancel(){s=!0},queueGive(){r=!0},queueNav(f){a+=f},get held(){return Array.from(e)}}}const vu=450,Ys=56,Mu=.22,px=.65,mx=.3;function gx(n,e=document.body){const t=document.createElement("div");t.id="touch-ui",t.hidden=!0,t.innerHTML=`
    <div id="touch-stick-zone">
      <div id="touch-stick" class="resting"><div id="touch-nub"></div></div>
    </div>
    <button id="touch-act" type="button" aria-label="take (hold to give)">
      <span class="act-tap">◉<em>take</em></span><span class="act-hold">give</span>
    </button>
  `,e.appendChild(t);const i=t.querySelector("#touch-stick-zone"),r=t.querySelector("#touch-stick"),s=t.querySelector("#touch-nub"),a=t.querySelector("#touch-act");let o=!1;function c(){o||(o=!0,t.hidden=!1,document.body.classList.add("touch-ui-on"),window.dispatchEvent(new Event("lb-touch-on")))}window.matchMedia?.("(pointer: coarse)").matches?c():window.addEventListener("touchstart",c,{once:!0,passive:!0});let l=null,u=0,h=0,d=!0;function p(w){let v=(w.clientX-u)/Ys,b=(w.clientY-h)/Ys;const R=Math.hypot(v,b);R>1&&(v/=R,b/=R),n.touch.x=Math.abs(v)<Mu?0:v,n.touch.z=Math.abs(b)<Mu?0:b,s.style.transform=`translate(${v*Ys*.6}px, ${b*Ys*.6}px)`,d&&Math.abs(b)>px?(d=!1,n.queueNav(b>0?1:-1)):!d&&Math.abs(b)<mx&&(d=!0)}function m(){l=null,n.touch.x=0,n.touch.z=0,d=!0,r.classList.add("resting"),r.style.left="",r.style.top="",s.style.transform=""}i.addEventListener("pointerdown",w=>{if(w.stopPropagation(),l===null){l=w.pointerId,u=w.clientX,h=w.clientY;try{i.setPointerCapture(w.pointerId)}catch{}r.classList.remove("resting"),r.style.left=`${u}px`,r.style.top=`${h}px`,p(w)}}),i.addEventListener("pointermove",w=>{w.pointerId===l&&(w.stopPropagation(),p(w))});for(const w of["pointerup","pointercancel"])i.addEventListener(w,v=>{v.pointerId===l&&(v.stopPropagation(),m())});let S=null,f=0,g=0;function E(w,v){w.pointerId===S&&(w.stopPropagation(),S=null,clearTimeout(g),a.classList.remove("holding","give-armed"),n.touch.held=!1,v&&(performance.now()-f>=vu?n.queueGive():n.queueCollect()))}a.addEventListener("pointerdown",w=>{if(w.stopPropagation(),S===null){S=w.pointerId,f=performance.now(),n.touch.held=!0,a.classList.add("holding");try{a.setPointerCapture(w.pointerId)}catch{}g=setTimeout(()=>a.classList.add("give-armed"),vu)}}),a.addEventListener("pointerup",w=>E(w,!0)),a.addEventListener("pointercancel",w=>E(w,!1));for(const w of[i,a])w.addEventListener("touchstart",v=>v.preventDefault(),{passive:!1});return{get active(){return o}}}function _x(){const n=new Set,e=new Map,t={1:0,2:0,3:0,4:0,5:0,6:0},i={1:0,2:0,3:0,4:0,5:0,6:0},r=[],s=[],a=[],o=c=>{for(const l of a)l(c)};return{has:c=>n.has(c),get total(){return e.size},get collectedTotal(){return n.size},get byTier(){return{...t}},get lifetimeByTier(){return{...i}},get log(){return r.slice()},get ledger(){return s.slice()},get items(){return Array.from(e.values()).sort((c,l)=>l.tier-c.tier||l.at-c.at)},collect(c,l){return n.has(c.id)?!1:(n.add(c.id),e.set(c.id,{id:c.id,itemId:c.itemId,tier:c.tier,at:l}),t[c.tier]=(t[c.tier]??0)+1,i[c.tier]=(i[c.tier]??0)+1,r.push({itemId:c.itemId,tier:c.tier,at:l}),o({type:"collect",obj:c,nowMs:l}),!0)},give(c,l,u,h=!0){const d=e.get(c);return d?(h&&(e.delete(c),t[d.tier]=Math.max(0,(t[d.tier]??0)-1)),s.push({itemId:d.itemId,tier:d.tier,to:l,at:u}),o({type:"give",obj:d,to:l,nowMs:u}),{itemId:d.itemId,tier:d.tier}):null},on(c){a.push(c)},serialize(){return{v:2,taken:Array.from(n),held:Array.from(e.values()),ledger:s.slice(),lifetimeByTier:{...i}}},restore(c){if(!c||c.v!==2)return!1;n.clear(),e.clear(),r.length=0,s.length=0;for(const l of Object.keys(t))t[l]=0,i[l]=0;for(const l of c.taken)n.add(l);for(const l of c.held)e.set(l.id,{...l}),t[l.tier]=(t[l.tier]??0)+1;for(const l of c.ledger)s.push({...l});for(const[l,u]of Object.entries(c.lifetimeByTier??{}))i[l]=u;return!0}}}function Nd({heightAt:n,forestnessAt:e,freshSurfaceAt:t=null,size:i=190,segments:r=150}){const s=new $t(i,i,r,r);s.rotateX(-Math.PI/2);const a=s.attributes.position,o=new Float32Array(a.count*3);s.setAttribute("color",new qt(o,3));const c=new Ki({vertexColors:!0}),l=new at(s,c);l.frustumCulled=!1;const u=i/r,h=new Ie("#e0cda4"),d=new Ie("#c2ad86"),p=new Ie("#a8ad7e"),m=new Ie("#5f7148"),S=new Ie("#9a927c"),f=new Ie;let g=NaN,E=NaN;function w(v,b,R=!1){const T=Math.round(v/u)*u,_=Math.round(b/u)*u;if(!R&&T===g&&_===E)return!1;g=T,E=_,l.position.set(T,0,_);for(let y=0;y<a.count;y++){const C=a.getX(y)+T,D=a.getZ(y)+_,I=n(C,D);a.setY(y,I);const U=e(C,D);if(U<.5?f.copy(h).lerp(p,U*2):f.copy(p).lerp(m,(U-.5)*2),I<.35&&f.lerp(d,Math.min(1,(.35-I)/.5)),t){const O=t(C,D)-I;O>-.55&&f.lerp(S,Math.min(1,(O+.55)/1.1))}o[y*3]=f.r,o[y*3+1]=f.g,o[y*3+2]=f.b}return a.needsUpdate=!0,s.attributes.color.needsUpdate=!0,s.computeVertexNormals(),!0}return{mesh:l,update:w,step:u}}function Ud({freshSurfaceAt:n,size:e=190,segments:t=118}){const i=new $t(e,e,t,t);i.rotateX(-Math.PI/2);const r=i.attributes.position,s=new Ki({color:"#6f9a91",transparent:!0,opacity:.8,depthWrite:!1}),a=new at(i,s);a.frustumCulled=!1,a.renderOrder=1;const o=e/t;let c=NaN,l=NaN;function u(h,d,p=!1){const m=Math.round(h/o)*o,S=Math.round(d/o)*o;if(!p&&m===c&&S===l)return!1;c=m,l=S,a.position.set(m,0,S);for(let f=0;f<r.count;f++)r.setY(f,n(r.getX(f)+m,r.getZ(f)+S));return r.needsUpdate=!0,i.computeVertexNormals(),!0}return{mesh:a,update:u,step:o}}function xx(n=0){const e=new $t(1200,1200);e.rotateX(-Math.PI/2);const t=new Ki({color:"#5e8ea0",transparent:!0,opacity:.82}),i=new at(e,t);return i.position.y=n-.06,i.frustumCulled=!1,i}const Su=900;function vx(n){const e=[1,2,3,4,5,6],t=new Map;for(const l of e){const u=Ni(l),h=l>=4?new fi(1,1):l===3?new Bl(1,0):new ya(1,0),d=new Ki({color:new Ie(u.colour),emissive:new Ie(u.colour),emissiveIntensity:l>=4?.34:l===3?.16:.04,flatShading:!0}),p=new pa(h,d,Su);p.count=0,p.frustumCulled=!1,p.instanceMatrix.setUsage(fa),n.add(p),t.set(l,p)}const i=new ot,r=new qn,s=new Yn,a=new z,o=new z;function c(l,u,h){const d=new Map(e.map(p=>[p,0]));for(const p of l){if(u(p.id))continue;const m=t.get(p.tier),S=d.get(p.tier);if(S>=Su)continue;const f=Ni(p.tier),g=(p.x*.7+p.z*1.3)%(Math.PI*2),E=Math.sin(h*.0015+g)*.05;s.set(0,p.rot,0),r.setFromEuler(s),a.set(p.x,p.y+f.scale+E,p.z),o.setScalar(f.scale),i.compose(a,r,o),m.setMatrixAt(S,i),d.set(p.tier,S+1)}for(const p of e){const m=t.get(p);m.count=d.get(p),m.instanceMatrix.needsUpdate=!0}}return{rebuild:c,meshes:t}}function Mx(){const n=new ps(.55,.75,28);n.rotateX(-Math.PI/2);const e=new Yt({color:"#fff4d0",transparent:!0,opacity:.9,depthWrite:!1}),t=new at(n,e);return t.visible=!1,t.frustumCulled=!1,t}const Sx=new vd;function Vl(n,e){const t=Sx.load(n);return t.magFilter=Ft,t.minFilter=si,t.generateMipmaps=!0,t.anisotropy=e.capabilities.getMaxAnisotropy(),t.colorSpace=dt,t}function Fd({texture:n,worldHeight:e,aspect:t}){const i=e*t,r=new $t(i,e);r.translate(0,e/2,0);const s=new Yt({map:n,transparent:!1,alphaTest:.5,side:At,toneMapped:!1}),a=new at(r,s);return a.frustumCulled=!1,a}function ma(n=.5){const t=document.createElement("canvas");t.width=64,t.height=64;const i=t.getContext("2d"),r=i.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);r.addColorStop(0,"rgba(40,32,22,0.42)"),r.addColorStop(.6,"rgba(40,32,22,0.18)"),r.addColorStop(1,"rgba(40,32,22,0)"),i.fillStyle=r,i.fillRect(0,0,64,64);const s=new Sn(t);s.colorSpace=dt;const a=new $t(n*2,n*2);a.rotateX(-Math.PI/2);const o=new Yt({map:s,transparent:!0,depthWrite:!1,toneMapped:!1}),c=new at(a,o);return c.frustumCulled=!1,c.renderOrder=-1,c}function nn(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}const yx={png:"art/chars/trinket_maker.png",w:185,h:460,worldHeight:1.95,role:"npc",pivot:"bottom",billboard:"y-axis",source:"p4-trinket-maker_1.png",note:"the trinket maker. Lyss's own NPC, holding a puoro."},bx={png:"art/chars/player.png",w:213,h:460,worldHeight:1.8,role:"player",pivot:"bottom",billboard:"y-axis",source:"p3-masc-maoriz_1-1.png",note:"the original player figure. Kept as the default so the world looks the same as it did."},Ex={png:"art/chars/player_b.png",w:178,h:460,worldHeight:1.78,role:"player",pivot:"bottom",billboard:"y-axis",source:"p1-femme-maori_3-1.png",note:"red top, green cargos. The widest silhouette of the four."},wx={png:"art/chars/player_c.png",w:157,h:460,worldHeight:1.84,role:"player",pivot:"bottom",billboard:"y-axis",source:"p2-vision-board_1.png",note:"hat and long coat. Reads instantly at distance, which none of the others do."},Tx={png:"art/chars/player_d.png",w:176,h:460,worldHeight:1.79,role:"player",pivot:"bottom",billboard:"y-axis",source:"p5-maori-punks_1-1.png",note:"dark jacket and boots. The compact, low-contrast one."},Ax={png:"art/chars/wanderer_a.png",w:265,h:460,worldHeight:1.85,role:"npc",pivot:"bottom",billboard:"y-axis",source:"p3-masc-maoriz_3-2.png",note:"walking, holding a cup. Mid-stride, so he reads as passing through."},Rx={png:"art/chars/wanderer_b.png",w:181,h:460,worldHeight:1.82,role:"npc",pivot:"bottom",billboard:"y-axis",source:"p5-maori-punks_2-2.png",note:"orange, one hand up. From the Maori punks sheet."},Cx={png:"art/chars/karu.png",w:184,h:460,worldHeight:2.35,role:"guide",pivot:"bottom",billboard:"y-axis",source:"karu.png",unwired:!0,note:"A cutout that arrived in the working tree labelled Karu, from a paper drawing photographed under reference/art-source/. Not confirmed hers, not approved, and NOT rendered: it has a face, and Karu has no body or face until she says. Kept registered so the asset test keeps its PNG honest; nothing reads this entry at runtime."},ai={trinket_maker:yx,player:bx,player_b:Ex,player_c:wx,player_d:Tx,wanderer_a:Ax,wanderer_b:Rx,karu:Cx},Px=n=>new Ie(n);function kr(n){let e=0,t=0;for(const u of n)u.geo=(u.geo.toNonIndexed,u.geo),u.geo.index||(u.geo=u.geo),e+=u.geo.attributes.position.count,t+=u.geo.index?u.geo.index.count:u.geo.attributes.position.count;const i=new Float32Array(e*3),r=new Float32Array(e*3),s=new Float32Array(e*3),a=new Uint32Array(t);let o=0,c=0;for(const u of n){const h=u.geo.attributes.position,d=u.geo.attributes.normal,p=Px(u.colour);for(let m=0;m<h.count;m++)i[(o+m)*3]=h.getX(m),i[(o+m)*3+1]=h.getY(m),i[(o+m)*3+2]=h.getZ(m),r[(o+m)*3]=d.getX(m),r[(o+m)*3+1]=d.getY(m),r[(o+m)*3+2]=d.getZ(m),s[(o+m)*3]=p.r,s[(o+m)*3+1]=p.g,s[(o+m)*3+2]=p.b;if(u.geo.index){const m=u.geo.index;for(let S=0;S<m.count;S++)a[c+S]=m.getX(S)+o;c+=m.count}else{for(let m=0;m<h.count;m++)a[c+m]=o+m;c+=h.count}o+=h.count,u.geo.dispose()}const l=new sn;return l.setAttribute("position",new qt(i,3)),l.setAttribute("normal",new qt(r,3)),l.setAttribute("color",new qt(s,3)),l.setIndex(new qt(a,1)),l}function Dx({length:n,width:e,droop:t,segments:i=4}){const r=new sn,s=[],a=[];for(let o=0;o<=i;o++){const c=o/i,l=e*(1-c)*(1-c*.35),u=-t*c*c,h=n*c;s.push(h,u,-l,h,u,l)}for(let o=0;o<i;o++){const c=o*2;a.push(c,c+1,c+2,c+1,c+3,c+2)}return r.setAttribute("position",new Pt(s,3)),r.setIndex(a),r.computeVertexNormals(),r}function Ir({n,at:e,length:t,width:i,droop:r,tilt:s,colour:a,phase:o=0}){const c=[];for(let l=0;l<n;l++){const u=o+l/n*Math.PI*2,h=Dx({length:t,width:i,droop:r});h.rotateZ(-s),h.rotateY(u),h.translate(0,e,0),c.push({geo:h,colour:a})}return c}const yu="#6b5540",Ix="#8d7a5e";function Lx(){const n=new Mn(.03,.045,.7,7);n.translate(0,.35,0);const e=new Mn(.055,.075,.13,7);return e.translate(0,.755,0),kr([{geo:n,colour:Ix},{geo:e,colour:"#7f8b52"},...Ir({n:9,at:.82,length:.46,width:.075,droop:.3,tilt:-.3,colour:"#3f6b3a"}),...Ir({n:5,at:.86,length:.34,width:.055,droop:.1,tilt:-.85,colour:"#4d7a41",phase:.35})])}function Nx(){const n=[],e=new Mn(.035,.055,.62,6);e.translate(0,.31,0),n.push({geo:e,colour:yu});const t=[{x:0,z:0,y:.62,s:1},{x:.12,z:.05,y:.72,s:.78},{x:-.1,z:.09,y:.68,s:.72}];for(const i of t){const r=new Mn(.022,.03,.16*i.s,5);r.rotateZ(-i.x*1.6),r.translate(i.x*.6,i.y-.02,i.z*.6),n.push({geo:r,colour:yu});for(const s of Ir({n:11,at:i.y+.06*i.s,length:.26*i.s,width:.022,droop:.16*i.s,tilt:-.55,colour:"#5f7d40"}))s.geo.translate(i.x,0,i.z),n.push(s)}return kr(n)}function Ux(){const n=new Mn(.05,.07,.55,7);return n.translate(0,.275,0),kr([{geo:n,colour:"#5c4a38"},...Ir({n:10,at:.57,length:.52,width:.11,droop:.36,tilt:-.3,colour:"#4a7a44"}),...Ir({n:6,at:.6,length:.22,width:.06,droop:.05,tilt:-.95,colour:"#6d9450",phase:.5})])}function Fx(){const n=[],e=new Mn(.055,.1,.34,6);e.rotateZ(.12),e.translate(.02,.17,0),n.push({geo:e,colour:"#5a4635"});const t=[{x:0,y:.46,z:0,rx:.52,ry:.26},{x:.3,y:.4,z:.1,rx:.34,ry:.19},{x:-.26,y:.42,z:-.12,rx:.31,ry:.18}];for(const i of t){const r=new fi(1,1);r.scale(i.rx,i.ry,i.rx),r.translate(i.x,i.y,i.z),n.push({geo:r,colour:"#3d5b3c"})}for(let i=0;i<26;i++){const r=i*2.39996,s=.5*Math.sqrt((i+.5)/26),a=Math.cos(r)*s,o=Math.sin(r)*s*.85,c=.46+.24*Math.sqrt(Math.max(0,1-(s/.52)**2)),l=new fi(.045+i%3*.008,0);l.scale(1.3,.55,1.3),l.translate(a,c+.01,o),n.push({geo:l,colour:"#a83a34"})}return kr(n)}function Ox(){const n=[],e=new Mn(.03,.065,.78,6);e.translate(0,.39,0),n.push({geo:e,colour:"#4f4030"});const t=[{y:.42,r:.3,n:7},{y:.58,r:.26,n:7},{y:.72,r:.19,n:6},{y:.86,r:.12,n:5}];for(const r of t)for(const s of Ir({n:r.n,at:r.y,length:r.r,width:.085,droop:.22,tilt:.28,colour:"#2f4a30",phase:r.y*9}))n.push(s);const i=new kl(.09,.2,6);return i.translate(0,.92,0),n.push({geo:i,colour:"#2f4a30"}),kr(n)}function kx(){const n=[];for(let t=0;t<5;t++){const i=t/5*Math.PI*2,r=.3,s=new Mn(.02,.035,.68,5);s.rotateZ(r*Math.cos(i)),s.rotateX(r*Math.sin(i)),s.translate(Math.cos(i)*.1,.33,Math.sin(i)*.1),n.push({geo:s,colour:"#6a5744"});const a=new fi(1,0);a.scale(.24,.19,.24),a.translate(Math.cos(i)*.2,.66,Math.sin(i)*.2),n.push({geo:a,colour:"#68804a"})}const e=new fi(1,0);return e.scale(.26,.2,.26),e.translate(0,.78,0),n.push({geo:e,colour:"#778c52"}),kr(n)}const Wl={nikau:{build:Lx,min:3.2,max:6.4,zone:"bush"},ti_kouka:{build:Nx,min:2.8,max:5.6,zone:"open"},ponga:{build:Ux,min:2.2,max:4.4,zone:"bush"},pohutukawa:{build:Fx,min:3.4,max:7,zone:"coastal"},rimu:{build:Ox,min:6,max:11.5,zone:"canopy"},manuka:{build:kx,min:1.3,max:2.6,zone:"open"}},ml=Object.keys(Wl);function zx(){const n={};for(const e of ml){const t=Wl[e].build();t.computeBoundingBox();const i=t.boundingBox,r=i.max.y-Math.min(0,i.min.y);r>.001&&t.scale(1/r,1/r,1/r),t.computeBoundingBox(),t.translate(0,-t.boundingBox.min.y,0),t.computeBoundingBox(),n[e]=t}return n}const Bx=3.6,Od={pohutukawa:[1.1,.62,.08],manuka:[1,.66,.2],ti_kouka:[.86,.82,.3],ponga:[.05,.6,1],nikau:[.02,.45,1.05],rimu:[0,.18,.8]},mo=Object.keys(Od);function bu(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function gl(n,e,{clearings:t=[]}={}){const i=(o,c)=>{for(const l of t)if((o-l.x)**2+(c-l.z)**2<l.r*l.r)return!0;return!1},r=mo.map((o,c)=>ti(ei(`${e}:grove:${c}`)));function s(o,c,l,u){const h=bu(8,90,l)*2,d=Math.min(1,Math.floor(h)),p=h-d;let m=null,S=-1/0;for(let f=0;f<mo.length;f++){const g=mo[f],E=Od[g],w=E[d]+(E[Math.min(2,d+1)]-E[d])*p;if(w<=.001)continue;const v=(r[f](o*.0085,c*.0085)+1)*.5,b=w*(.35+v)+u()*.22;b>S&&(S=b,m=g)}return m??"manuka"}function a(o,c){const l=Pd(`${e}:scenery`,o,c,Bx,200),u=[];for(let h=0;h<l.length;h++){const d=l[h];if(n.isSubmerged(d.x,d.z)||n.slopeAt(d.x,d.z)>.75)continue;const p=n.forestnessAt(d.x,d.z),m=pi(e,"scen",o,c,h),S=m();let f;if(S<p*.72)f="tree";else if(S<p*.72+.18)f=p>.35?"scrub":"rock";else if(p<.25&&S>.93)f="driftwood";else continue;if((f==="tree"||f==="scrub")&&i(d.x,d.z))continue;if(f==="tree"){const E=s(d.x,d.z,n.inlandAt(d.x,d.z),m),w=Wl[E],v=bu(.15,.9,p),b=w.min+m()*(w.max-w.min)*(.45+.55*v);u.push({kind:f,species:E,x:d.x,y:n.heightAt(d.x,d.z),z:d.z,rot:m()*Math.PI*2,scale:b});continue}const g=f==="scrub"?.7+m()*.7:f==="driftwood"?.8+m()*.9:.45+m()*.75;u.push({kind:f,x:d.x,y:n.heightAt(d.x,d.z),z:d.z,rot:m()*Math.PI*2,scale:g})}return u}return{genScenery:a,pickSpecies:s}}const Eu=900,$s={scrub:900,rock:700,driftwood:300};function Gx(n){const e=new Ki({vertexColors:!0,flatShading:!0,side:At}),t=zx(),i=new Map;for(const w of ml){const v=new pa(t[w],e,Eu);v.count=0,v.frustumCulled=!1,v.instanceMatrix.setUsage(fa),n.add(v),i.set(w,v)}const r=new Map,s=new fi(1,0);s.scale(1,.72,1),s.translate(0,.6,0);const a=new zl(1,0);a.scale(1,.62,1),a.translate(0,.3,0);const o=new Mn(.16,.22,2.4,5);o.rotateZ(Math.PI/2),o.translate(0,.2,0);const c=(w,v,b)=>{const R=new pa(w,new Ki({color:new Ie(v),flatShading:!0}),b);return R.count=0,R.frustumCulled=!1,R.instanceMatrix.setUsage(fa),n.add(R),R};r.set("scrub",c(s,"#6f8451",$s.scrub)),r.set("rock",c(a,"#9a9184",$s.rock)),r.set("driftwood",c(o,"#b0a189",$s.driftwood));const l=new ot,u=new qn,h=new Yn,d=new z,p=new z,m=new qn,S=new z,f=4.2,g=1.1;function E(w,v,b,R=null){const T=new Map([...r.keys()].map(y=>[y,0])),_=new Map(ml.map(y=>[y,0]));for(const y of w){const C=y.kind==="tree",D=C?i.get(y.species)??i.get("manuka"):r.get(y.kind);if(!D)continue;if(C||y.kind==="scrub"){const L=f+(C?y.scale*.42:0);if(Math.hypot(y.x-v.x,y.z-v.z)<L||Math.hypot(y.x-b.x,y.z-b.z)<g)continue}const I=C?i.has(y.species)?y.species:"manuka":y.kind,U=C?_:T,O=U.get(I);if(!(O>=(C?Eu:$s[y.kind]))){if(h.set(0,y.rot,0),u.setFromEuler(h),R&&(C||y.kind==="scrub")){const L=R.x-y.x,V=R.z-y.z,G=Math.hypot(L,V);if(G>.001&&G<R.radius){const Z=R.radians*(1-G/R.radius);S.set(V/G,0,-L/G),m.setFromAxisAngle(S,Z),u.premultiply(m)}}d.set(y.x,y.y,y.z),p.setScalar(y.scale),l.compose(d,u,p),D.setMatrixAt(O,l),U.set(I,O+1)}}for(const[y,C]of r)C.count=T.get(y),C.instanceMatrix.needsUpdate=!0;for(const[y,C]of i)C.count=_.get(y),C.instanceMatrix.needsUpdate=!0}return{rebuild:E,trees:i,groups:r}}function Hx(n){n.insertAdjacentHTML("beforeend",`
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
  `);const e=n.querySelector("#kete-n"),t=n.querySelector("#kete-bag"),i=n.querySelector("#prompt"),r=n.querySelector("#give-prompt"),s=n.querySelector("#say"),a=n.querySelector("#toasts"),o=n.querySelector("#epic"),c=n.querySelector("#epic-text"),l=n.querySelector("#epic-sub"),u=n.querySelector("#vignette"),h=n.querySelector("#world-tag");let d=0,p={pick:"E",give:"G"};return{setKeys(m){p=m},setCount(m){e.textContent!==String(m)&&(e.textContent=String(m),t.classList.remove("pop"),t.offsetWidth,t.classList.add("pop"))},setPrompt(m){if(!m){i.hidden=!0;return}const S=pl(m.itemId),f=Ni(m.tier);i.hidden=!1,i.innerHTML=`<b style="color:${f.colour}">${S?.name??m.itemId}</b><span class="key">${p.pick}</span>`},setAction(m,S=p.pick){if(!m){i.hidden=!0;return}i.hidden=!1,i.innerHTML=`<b>${m}</b>${S?`<span class="key">${S}</span>`:""}`},setGivePrompt(m){if(!m){r.hidden=!0;return}r.hidden=!1,r.innerHTML=`<b>${m}</b><span class="key">${p.give}</span>`},setWorldTag(m){if(!m){h.hidden||(h.hidden=!0);return}h.textContent!==m&&(h.textContent=m),h.hidden&&(h.hidden=!1)},say(m,S=2600){m&&(s.hidden=!1,s.textContent=m,s.classList.remove("play"),s.offsetWidth,s.classList.add("play"),clearTimeout(d),d=setTimeout(()=>{s.hidden=!0},S))},sighting(m,S){const f=document.createElement("div");for(f.className="toast sighting",f.innerHTML=`<b>${m}</b><i>${S}</i>`,a.appendChild(f),setTimeout(()=>f.remove(),8e3);a.children.length>4;)a.firstChild.remove()},epicShow(m,S,f){o.hidden=!1,o.dataset.mode=f,c.textContent=m,l.textContent=""},epicFrame(m,S){if(!m.shown){o.hidden=!0;return}o.hidden=!1;const f=m.in,g=f<.6?.4+f/.6*.78:1.18-(f-.6)/.4*.18,E=-11+f*7,w=m.out,v=w===0?1:w<.3?1+w*.2:1.06*(1-(w-.3)/.7),b=-8*Math.min(1,f);c.style.transform=`translateY(${b}px) rotate(${E.toFixed(2)}deg) scale(${(g*v).toFixed(3)})`,c.style.opacity=String(w>.7?Math.max(0,1-(w-.7)/.3):1),l.textContent=S.slice(0,m.chars),l.style.opacity=String(w>.5?0:1)},epicHide(){o.hidden=!0},vignette(m){u.style.opacity=String(Math.min(1,Math.max(0,m)))},toast(m){const S=pl(m.itemId),f=Ni(m.tier),g=document.createElement("div");for(g.className="toast",g.innerHTML=`<b><span class="tier-dot" style="background:${f.colour}"></span>${S?.name??m.itemId}</b><i>${S?.flavour??""}</i>`,a.appendChild(g),setTimeout(()=>g.remove(),3200);a.children.length>4;)a.firstChild.remove()}}}const Vx={pickupRadius:1.8},Wx={tiers:[1,1,2,1,2,3,0,0,0,0,0,0],epicAtIndex:12,epicMinSeconds:150},Xx={windowStart:[22,18],ramp:[.08,.105],hardPity:[34,28],tickGrab:1,tickRefusal:.35,wonderSoftDry:22,wonderSoftMult:2},qx={tasteMax:12,refusalGain:{1:.7,2:1.2},grabLoss:{1:-1.6,2:-.9,3:-.15,4:0,5:0},givingGain:{1:0,2:1,3:3.5,4:10,5:12,6:12},exponent:1.7,activityWindowSec:60,activityTarget:3,halfLifeSec:120,feralGrabs:3,feralMult:.25,epicSpendMult:.5,payoff:{1:-.85,2:-.45,3:1.3,4:3.4}},Yx={seenSeconds:.75,seenRadius:4.5,seenConeDegrees:120,abandonDistance:6,afkMinTravel:2,afkWindowSec:5,maxTier:2},$x={minSecondsBetween:150},Kx={reachMetres:3.2,sacrificeIsReal:!0,reactionMs:2600,prompt:"give something to {name}",head:"give to {name}",headEmpty:"{name} — your kete is empty"},Zx={ladder:[{upTo:1,mode:"full"},{upTo:3,mode:"shorter"},{upTo:6,mode:"brief"},{upTo:9999,mode:"quick"}],modes:{full:{tell:.6,pinhole:.1,iris:.45,burp:.2,fall:.62,letter:1.2,exit:.22,settle:2.83,dilation:.35,portals:1},shorter:{tell:.35,pinhole:.08,iris:.32,burp:.16,fall:.62,letter:.85,exit:.2,settle:1.92,dilation:.6,portals:1},brief:{tell:.18,pinhole:.06,iris:.22,burp:.12,fall:.62,letter:.5,exit:.16,settle:.98,dilation:1,portals:1},quick:{tell:0,pinhole:.04,iris:.14,burp:.1,fall:.42,letter:.36,exit:.12,settle:.5,dilation:1,portals:1},_escalatedNote:"The reserve. BUILD-PLAN holds one tier above the ladder: two portals at once, a unique line, and it IGNORES the shortening. DECISIONS 2026-08-28 assigns that reserve to tier 6, the Epic epic find, so the ceiling stays big and the shortened common version never reads as a downgrade.",escalated:{tell:.9,pinhole:.12,iris:.55,burp:.24,fall:.7,letter:1.5,exit:.26,settle:3.4,dilation:.28,portals:2}},gravity:14,mouthMetres:3.2,driftSpeed:1.5,tumbleTurns:2.5,stepHz:12,fallScale:1.6,shakeMs:220,shakeDegrees:.35,shakeMetres:.06,dustRadius:3.2,dustMs:400,fleckCount:21,smearSegments:6,voLines:["Epiiiiic FIND!","Ohhh that's EPIC.","Sweeeeet az.","Oh mean!","Look at THAT!","Chur!","Oooof, choice.","Far OUT."],voRareLine:"Nah bro. Nah. That's, that's a good one.",voRareOneIn:25,voEscalatedLine:"Nah that's not even from HERE.",voExcludeLast:3},Jx={samples:40,minDistance:12,maxDistance:22,bearingDegrees:50,relaxedBearingDegrees:110,maxSlope:.36,clearance:4,seaMargin:.6,retrySeconds:3,abandonDistance:60,maxRelocations:3,fallbackDistance:8,canopyRadius:2.6,canopyRadiusOfHeight:.8,canopyBandFrom:.2,visibleMargin:.85,bendRadius:26,bendDegrees:18},Qx={doorwayAt:2,karuAt:1,recipient:"trinket_maker",afterDoorwayPityMult:.7,delayMs:2600},jx={worldLabel:{home:"",elsewhere:"elsewhere",elsewhereListen:"elsewhere · listen"},doorway:{offsetMetres:7,triggerRadius:1.2,prompt:"go through",holdMs:500,holdWithKaruMs:0,fadeOutMs:600,fadeInMs:600,archMetres:2.4,arriveOffsetMetres:1.6,refusedLine:"something here is still owed. it is not done with you yet."},returnDoor:{min:45,max:85,samples:48,clearance:2.5,maxWaterDepth:.5,lostFloorSec:300,maxRelocations:1,relocateMin:25,relocateMax:35,relocateSpreadDeg:35,hearRadius:22,humGain:.35,seenMetres:40,bendRadius:26,bendDegrees:10,reachRadius:.9},elsewhere:{inlandOffset:400,pityMult:.6,firstOfferTier:4,hintAfterSec:180,findsMin:3,findsMax:5,findsRadiusMin:18,findsRadiusMax:60,findsMaxWaterDepth:.5,findsAttempts:24,entrySearchMetres:14,entrySearchStep:1}},Ye={offer:Vx,scriptedOpening:Wx,pity:Xx,discernment:qx,refusal:Yx,epicGates:$x,giving:Kx,epicSequence:Zx,epicSiting:Jx,progression:Qx,worlds:jx};function ev(n,e,t=null){return t?t.replace("{name}",n):(e?Ye.giving.head:Ye.giving.headEmpty).replace("{name}",n)}function tv(n){n.insertAdjacentHTML("beforeend",`
    <div id="give-panel" hidden>
      <div id="give-head"></div>
      <ul id="give-list"></ul>
      <div id="give-foot"></div>
      <button id="give-close" type="button" aria-label="done, keep the rest">✕</button>
    </div>
  `);const e=n.querySelector("#give-panel"),t=n.querySelector("#give-head"),i=n.querySelector("#give-list"),r=n.querySelector("#give-foot");let s=!1,a=!1,o=[],c=0,l="",u=null;function h(){t.textContent=ev(l,o.length,u),i.innerHTML=o.map((p,m)=>{const S=pl(p.itemId),f=Ni(p.tier);return`<li data-i="${m}" class="${m===c?"sel":""}"><span class="tier-dot" style="background:${f.colour}"></span><span class="give-name">${S?.name??p.itemId}</span><span class="give-tier">${f.name}</span></li>`}).join("");const d=i.querySelector(".sel");d&&d.scrollIntoView({block:"nearest"})}return i.addEventListener("click",d=>{const p=d.target.closest("li[data-i]");!p||!s||(c=Number(p.dataset.i),h(),a=!0)}),n.querySelector("#give-close").addEventListener("click",()=>{s=!1,e.hidden=!0}),{get open(){return s},get selected(){return o[c]??null},setFoot(d){r.innerHTML=d},takePick(){return a?(a=!1,!0):!1},show(d,p,{head:m=null}={}){l=d,u=m,o=p,c=0,s=!0,e.hidden=!1,h()},hide(){s=!1,e.hidden=!0},move(d){!s||o.length===0||(c=(c+d+o.length)%o.length,h())},remove(d){const p=o.findIndex(m=>m.id===d);p<0||(o.splice(p,1),c>=o.length&&(c=Math.max(0,o.length-1)),h())}}}const nv=[{id:"player",name:"the one in the hoodie",blurb:"walks like nothing is urgent."},{id:"player_b",name:"the one in the red top",blurb:"every pocket already full."},{id:"player_c",name:"the one with the hat",blurb:"visible from a long way off."},{id:"player_d",name:"the one in the brown jacket",blurb:"boots done up properly."}],iv={roster:nv};function rv(n,{onStart:e,onLoad:t=null,canLoad:i=!1,onFirstGesture:r=()=>{}}){const s=iv.roster.filter(b=>ai[b.id]);n.insertAdjacentHTML("beforeend",`
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
          ${s.map((b,R)=>`
            <li class="pick${R===0?" sel":""}" data-id="${b.id}" data-i="${R}">
              <div class="pick-art">
                <img src="${ai[b.id].png}" alt="${b.name}" draggable="false">
              </div>
              <b>${b.name}</b>
              <i>${b.blurb}</i>
            </li>`).join("")}
        </ul>
        <div id="pick-actions">
          <button id="pick-back" type="button">back</button>
          <button id="pick-go" type="button">this one</button>
        </div>
        <p id="pick-note">names are placeholders. they&rsquo;re Lyss&rsquo;s people to name.</p>
      </section>
    </div>
  `);const a=n.querySelector("#title"),o=n.querySelector("#title-main"),c=n.querySelector("#title-pick"),l=n.querySelector("#pick-list"),u=Array.from(l.querySelectorAll(".pick"));let h="title",d=0,p=!1;function m(b){d=(b+u.length)%u.length;for(const[R,T]of u.entries())T.classList.toggle("sel",R===d);u[d].scrollIntoView({block:"nearest",inline:"nearest"})}let S=!1;function f(){S||(S=!0,r()),h="pick",a.dataset.panel="pick",o.hidden=!0,c.hidden=!1,m(d)}function g(){h="title",a.dataset.panel="title",c.hidden=!0,o.hidden=!1}function E(){p||(p=!0,a.classList.add("gone"),setTimeout(()=>a.remove(),520),e(s[d].id))}function w(){p||!t||(S||(S=!0,r()),p=!0,a.classList.add("gone"),setTimeout(()=>a.remove(),520),t())}n.querySelector("#title-start").addEventListener("click",f),n.querySelector("#title-load")?.addEventListener("click",w),n.querySelector("#pick-back").addEventListener("click",g),n.querySelector("#pick-go").addEventListener("click",E);for(const b of u)b.addEventListener("click",()=>{m(Number(b.dataset.i)),E()}),b.addEventListener("mouseenter",()=>m(Number(b.dataset.i)));const v=b=>{if(!p){if(h==="title"){(b.code==="Enter"||b.code==="Space"||b.code==="KeyE")&&(b.preventDefault(),b.stopPropagation(),i&&t?w():f());return}b.code==="ArrowLeft"||b.code==="KeyA"?(b.preventDefault(),m(d-1)):b.code==="ArrowRight"||b.code==="KeyD"?(b.preventDefault(),m(d+1)):b.code==="Enter"||b.code==="Space"||b.code==="KeyE"?(b.preventDefault(),b.stopPropagation(),E()):b.code==="Escape"&&(b.preventDefault(),b.stopPropagation(),g())}};return window.addEventListener("keydown",v,!0),{get open(){return!p},get panel(){return h},get selectedId(){return s[d].id},get roster(){return s.map(b=>b.id)},get canLoad(){return!!(i&&t)},_toPick:f,_select:m,_start:E,_load:w}}const Bi=n=>`<span class="key">${n}</span>`,wu={desktop:{help:"WASD to walk · drag to look · E to pick up · G to give",pickKey:"E",giveKey:"G",panelFoot:`${Bi("↑↓")} choose ${Bi("E")} give ${Bi("Esc")} done`},mobile:{help:"left thumb to walk · drag to look · tap ◉ to pick up · hold ◉ to give",pickKey:"◉",giveKey:"hold ◉",panelFoot:`tap an item to give it · ${Bi("✕")} done`},console:{help:"stick to walk · click to pick up · hold click to give",pickKey:"click",giveKey:"hold",panelFoot:`${Bi("stick")} choose ${Bi("click")} give ${Bi("hold")} done`}};function sv({pathname:n="",coarse:e=!1}={}){return n.startsWith("/cart/")?"console":e?"mobile":"desktop"}function av({coarse:n,onChange:e}){const t=location.pathname.startsWith("/cart/");let i=sv({pathname:location.pathname,coarse:n});function r(s){s===i&&document.body.classList.contains(`surface-${s}`)||(document.body.classList.remove(`surface-${i}`),i=s,document.body.classList.add(`surface-${s}`),e(s,wu[s]))}return window.addEventListener("lb-touch-on",()=>{t||r("mobile")}),t&&window.addEventListener("keydown",s=>r(s.isTrusted?"desktop":"console"),!0),r(i),{get current(){return i},get hints(){return wu[i]}}}const ga="lil-bitz:save",go=2;function ov(n=lv()){return{exists(){const e=Tu(n);return!!(e&&e.v===go)},load(){const e=Tu(n);return!e||e.v!==go?null:e},save(e){if(!n)return!1;try{return n.setItem(ga,JSON.stringify({...e,v:go})),!0}catch{return!1}},clear(){try{n?.removeItem(ga)}catch{}}}}function Tu(n){if(!n)return null;try{const e=n.getItem(ga);return e?JSON.parse(e):null}catch{return null}}function lv(){try{const n=globalThis.localStorage;return n.getItem(ga),n}catch{return null}}const Au=520,Ks=60,cv=12,uv=30;function dv(n){const e=document.createElement("div");e.id="arc-layer",n.appendChild(e);const t=[];function i(s,a,o,c){if(t.length>=5)return!1;const u=document.querySelector("#kete-bag")?.getBoundingClientRect(),h=u?u.left+u.width/2:40,d=u?u.top+u.height/2:window.innerHeight-40,p=document.createElement("div");return p.className="arc-bit",p.style.background=o,e.appendChild(p),t.push({el:p,x0:s,y0:a,x1:h,y1:d,cx:(s+h)/2,cy:Math.min(a,d)-window.innerHeight*.28,t0:c,colour:o}),!0}function r(s){for(let a=t.length-1;a>=0;a--){const o=t[a],c=s-o.t0;if(c>=Au){o.el.remove(),t.splice(a,1);continue}if(c<Ks){const f=c/Ks;o.el.style.transform=`translate(${o.x0}px, ${o.y0}px) translate(-50%, -50%) scale(${1+f*.14}, ${1-f*.18})`;continue}const l=(c-Ks)/(Au-Ks),u=1-l,h=u*u*o.x0+2*u*l*o.cx+l*l*o.x1,d=u*u*o.y0+2*u*l*o.cy+l*l*o.y1,p=l<.25?1+l*1:1.25-(l-.25)*1.2,S=Math.floor(c/(1e3/cv))*uv%360;o.el.style.transform=`translate(${h}px, ${d}px) translate(-50%, -50%) rotate(${S}deg) scale(${Math.max(.1,p)})`,o.el.style.opacity=String(l>.86?(1-l)/.14:1)}}return{launch:i,update:r,get count(){return t.length}}}const Ru=[0,2,4,7,9,12],hv=4e3,Zs=392,fv={shell_chip:"ceramic",scallop:"ceramic",cats_eye:"ceramic",paua_piece:"ceramic",mermaids_purse:"cloth",dry_kelp:"cloth",leaf_litter:"cloth",heavy_feather:"cloth",sea_glass:"glass",quartz_chip:"glass",banded_agate:"glass",humming_geode:"glass",one_note_shell:"glass",portal_shard:"glass",worn_pebble:"stone",pounamu:"stone",resin_bead:"stone",seeing_stone:"stone",twig:"wood",pinecone:"wood",can_tab:"metal",wrong_compass:"metal",sealed_tin:"metal",scifi_heru:"metal",chainmail_maro:"metal",elytron:"cloth",carry_knot:"cloth"},pv={ceramic:{hz:2100,decay:.055,type:"triangle",gain:.16},glass:{hz:3300,decay:.09,type:"sine",gain:.14},stone:{hz:620,decay:.045,type:"square",gain:.1},wood:{hz:900,decay:.05,type:"square",gain:.11},metal:{hz:2700,decay:.16,type:"sine",gain:.12},cloth:{hz:400,decay:.04,type:"sine",gain:.09}},mv="audio/lyss-background.mp3";function gv(){return new URL(mv,document.baseURI).href}const Nn={near:6,far:34,gain:.5,titleGain:.62,restMinMs:24e3,restMaxMs:48e3};function _v(){let n=null,e=null,t=!1,i=0,r=-1e9,s=null,a=!1,o=!1,c=null,l=null,u=-1e9,h=0,d=!1,p=!1,m=null,S=null,f=null,g=null;function E(){if(n)return n;const T=window.AudioContext||window.webkitAudioContext;if(!T)return null;try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}n=new T,e=n.createGain(),e.gain.value=.5,e.connect(n.destination);const _=()=>{n.state!=="running"&&w()};for(const y of["pointerup","touchend","click","keydown"])window.addEventListener(y,_,{capture:!0,passive:!0});return document.addEventListener("visibilitychange",()=>{document.hidden||_()}),n}function w(){const T=E();T&&T.state!=="running"&&T.state!=="closed"&&T.resume().catch(()=>{})}function v({hz:T,decay:_,type:y,gain:C,when:D=0,detune:I=0}){const U=E();if(!U||t)return;const O=U.currentTime+D,L=U.createOscillator(),V=U.createGain();L.type=y,L.frequency.value=T,L.detune.value=I,V.gain.setValueAtTime(0,O),V.gain.linearRampToValueAtTime(C,O+.004),V.gain.exponentialRampToValueAtTime(1e-4,O+_),L.connect(V),V.connect(e),L.start(O),L.stop(O+_+.02)}function b(T=0){const _=E();if(!_||t)return;const y=_.currentTime+T,C=Math.floor(_.sampleRate*.14),D=_.createBuffer(1,C,_.sampleRate),I=D.getChannelData(0);for(let V=0;V<C;V++)I[V]=(Math.random()*2-1)*Math.pow(1-V/C,2.4);const U=_.createBufferSource();U.buffer=D,U.playbackRate.value=.92+Math.random()*.16;const O=_.createBiquadFilter();O.type="bandpass",O.frequency.value=1500,O.Q.value=.8;const L=_.createGain();L.gain.value=.32,U.connect(O),O.connect(L),L.connect(e),U.start(y)}function R(){if(a)return;const T=E();T&&(a=!0,c=T.createGain(),c.gain.value=0,c.connect(e),Promise.resolve().then(()=>fetch(gv())).then(_=>_.ok===!1?Promise.reject(new Error(`voice ${_.status}`)):_.arrayBuffer()).then(_=>T.decodeAudioData(_)).then(_=>{s=_}).catch(()=>{o=!0}))}return{unlock:w,get muted(){return t},setMuted(T){t=T},ambientVoice(T,_){if(t||T>Nn.far){c&&(c.gain.value=0);return}if(R(),!s||!c)return;const y=1-Math.min(1,Math.max(0,(T-Nn.near)/(Nn.far-Nn.near)));c.gain.value=Nn.gain*y*y;const C=E();if(!C||C.state!=="running"||_<u||_<h)return;l=C.createBufferSource(),l.buffer=s,l.connect(c),l.start();const D=s.duration*1e3;u=_+D,h=u+Nn.restMinMs+Math.random()*(Nn.restMaxMs-Nn.restMinMs)},titleSong(T){w(),R();const _=E();if(!_||t)return;let y=0;const C=()=>{if(!s){if(o||p||++y>125)return;setTimeout(C,120);return}if(p)return;const D=typeof T=="function"?T():T,I=_.createBufferSource();I.buffer=s,I.loop=!0;const U=_.createGain();U.gain.value=Nn.titleGain,I.connect(U),U.connect(e),I.start(),m=I,S=U,u=Math.max(u,D+s.duration*1e3),h=Math.max(h,u+Nn.restMinMs),d=!0};C()},titleSongStop(){p=!0;const T=n;if(!T||!m||!S)return;const _=T.currentTime;S.gain.cancelScheduledValues(_),S.gain.setValueAtTime(S.gain.value,_),S.gain.linearRampToValueAtTime(0,_+.5);try{m.stop(_+.55)}catch{}m=null,S=null},get voiceReady(){return!!s},get titleSongPlayed(){return d},pickup(T,_,y){if(!E()||t)return;const D=fv[T]??"stone";v({...pv[D],detune:(Math.random()-.5)*40}),b(.012),y-r>hv?i=0:i=Math.min(i+1,Ru.length-1),r=y;const I=Ru[i]+(_>=4?7:0);v({hz:Zs*Math.pow(2,I/12),decay:.5,type:"sine",gain:.1,when:.06})},give(T){if(!E()||t)return;const y=Zs*Math.pow(2,(T>=4?5:0)/12);v({hz:y,decay:.32,type:"sine",gain:.1}),v({hz:y*.75,decay:.55,type:"sine",gain:.09,when:.11}),b(.02)},epicTell(T){const _=E();if(!_||t||T<=0)return;const y=_.currentTime;e.gain.cancelScheduledValues(y),e.gain.setValueAtTime(e.gain.value,y),e.gain.linearRampToValueAtTime(.25,y+.4);const C=_.createOscillator(),D=_.createGain();C.type="sine",C.frequency.value=110,D.gain.setValueAtTime(1e-4,y),D.gain.exponentialRampToValueAtTime(.16,y+T),D.gain.exponentialRampToValueAtTime(1e-4,y+T+.35),C.connect(D),D.connect(e),C.start(y),C.stop(y+T+.4)},doorHum(T){if(T<=1e-4&&!g)return;const _=E();if(!_)return;g||(f=_.createOscillator(),g=_.createGain(),f.type="sine",f.frequency.value=110,g.gain.value=0,f.connect(g),g.connect(e),f.start());const y=t?0:Math.min(1,Math.max(0,T))*.16;g.gain.setTargetAtTime(y,_.currentTime,.12)},epicImpact(){const T=E();if(!T||t)return;const _=T.currentTime;e.gain.cancelScheduledValues(_),e.gain.setValueAtTime(e.gain.value,_),e.gain.linearRampToValueAtTime(.5,_+.9),v({hz:74,decay:.42,type:"sine",gain:.28}),b(0),v({hz:Zs*2,decay:.7,type:"triangle",gain:.12,when:.02}),v({hz:Zs*3,decay:.9,type:"sine",gain:.08,when:.06})},get chainStep(){return i}}}const Kt=Ye.discernment;function xv(){const n={taste:0,pickups:[],t1Streak:0};return{get taste(){return n.taste},get raw(){return{...n,pickups:n.pickups.slice()}},tick(e){e<=0||(n.taste*=Math.pow(.5,e/Kt.halfLifeSec))},onGrab(e,t){n.pickups.push(t);const i=Kt.grabLoss[String(e)]??0;n.taste=xr(n.taste+i,0,Kt.tasteMax),e===1?(n.t1Streak++,n.t1Streak>=Kt.feralGrabs&&(n.taste*=Kt.feralMult,n.t1Streak=0)):n.t1Streak=0},onRefusal(e){const t=Kt.refusalGain[String(e)]??0;n.taste=xr(n.taste+t,0,Kt.tasteMax)},onGive(e){const t=Kt.givingGain[String(e)]??0;n.taste=xr(n.taste+t,0,Kt.tasteMax)},onEpicDelivered(){n.taste*=Kt.epicSpendMult},k(e){const t=Kt.activityWindowSec*1e3;for(;n.pickups.length&&e-n.pickups[0]>t;)n.pickups.shift();const i=xr(n.pickups.length/Kt.activityTarget,0,1),r=xr(n.taste/Kt.tasteMax,0,1);return Math.pow(r*i,Kt.exponent)},serialize(){return{v:1,taste:n.taste,t1Streak:n.t1Streak}},restore(e){return!e||e.v!==1?!1:(n.taste=xr(Number(e.taste)||0,0,Kt.tasteMax),n.t1Streak=Number(e.t1Streak)||0,n.pickups.length=0,!0)}}}function xr(n,e,t){return n<e?e:n>t?t:n}function vv(n){const e=Ye.refusal;return!(n.tier>e.maxTier||n.seenSeconds<e.seenSeconds||n.distance<e.abandonDistance||n.travelledLast5s<e.afkMinTravel||n.uiBlocked)}function Mv(n){let e=0;for(const i of Object.keys(n))e+=n[i];if(e<=0)return{...n};const t={};for(const i of Object.keys(n))t[i]=n[i]/e;return t}function Sv(n){return{...mi.weights[n]}}function yv(n,e){const t=Ye.discernment.payoff,i={};for(const r of Object.keys(n)){const s=t[r]??0;i[r]=Math.max(0,n[r]*(1+s*e))}return Mv(i)}const Zi=Ye.pity,Xl=(n,e)=>n[0]+(n[1]-n[0])*e,bv=n=>Math.round(Xl(Zi.windowStart,n)),Ev=n=>Xl(Zi.ramp,n),wv=n=>Math.round(Xl(Zi.hardPity,n));function Tv(n,e,t=1){const i=Math.round(bv(e)*t),r=Math.round(wv(e)*t);return n<i?0:n>=r?1:Math.min(1,Ev(e)*(n-i+1))}function Cu(n){return n==="grab"?Zi.tickGrab:Zi.tickRefusal}function Av(n,e,t,i,r=1){return n.epicActive||t-n.lastEpicAtMs<Ye.epicGates.minSecondsBetween*1e3?!1:i()<Tv(n.epicTicks,e,r)}function Rv(n,e){if(e<Zi.wonderSoftDry)return n;const t={...n};return t[4]=(t[4]??0)*Zi.wonderSoftMult,t}function Cv(n,e){return e?{natural:n.natural,granted:n.granted+1}:{natural:n.natural+1,granted:n.granted}}function Pv(n){return n.natural===0}function Dv(n,e){return e?`epic:g${n.granted}`:`epic:${n.natural}`}const _l=Ye.refusal,Iv=Math.cos(_l.seenConeDegrees*Math.PI/180/2);function Lv(){const n=new Map,e=new Map,t=new Set;let i=0;function r(l,u,h){const d=n.get(l.id);if(d)return d;const p=Ye.scriptedOpening.tiers;let m;if(i<p.length&&p[i]>0)m=p[i];else{let g=yv(Sv(l.biome),u);g=Rv(g,h),m=Id(l.tierRoll,g)}i<p.length&&i++;const S=fl(l.itemRoll,m,l.biome,l.nearWater)??fl(l.itemRoll,l.tier,l.biome,l.nearWater),f={tier:S?m:l.tier,itemId:S?.id??l.itemId};return n.set(l.id,f),f}function s(){}function a(l,u){n.set(l,{tier:u.tier,itemId:u.itemId})}function o(){return i>=Ye.scriptedOpening.epicAtIndex}function c({nearby:l,px:u,pz:h,fx:d,fz:p,dt:m,travelledLast5s:S,uiBlocked:f,isTaken:g}){const E=[],w=new Set;for(const v of l){if(g(v.id)||t.has(v.id))continue;const b=v.x-u,R=v.z-h,T=Math.hypot(b,R);let _=e.get(v.id);if(_||(_={seenSeconds:0,wasClose:!1},e.set(v.id,_)),w.add(v.id),T<=_l.abandonDistance)(T<.001||b/T*d+R/T*p>=Iv)&&T<=_l.seenRadius&&(_.seenSeconds+=m),T<=Ye.offer.pickupRadius&&(_.wasClose=!0);else if(_.wasClose||_.seenSeconds>0){const C=n.get(v.id)?.tier??v.tier;vv({tier:C,seenSeconds:_.seenSeconds,distance:T,travelledLast5s:S,uiBlocked:f})&&(t.add(v.id),E.push({id:v.id,tier:C})),e.delete(v.id)}}if(e.size>400)for(const v of e.keys())w.has(v)||e.delete(v);return E}return{reveal:r,update:c,force:a,noteResolvedPickup:s,openingComplete:o,isRefused:l=>t.has(l),get scriptIndex(){return i},get resolvedCount(){return n.size},get refusedCount(){return t.size},serialize(){return{v:1,scriptIndex:i,resolved:Array.from(n.entries()),refused:Array.from(t)}},restore(l){if(!l||l.v!==1)return!1;n.clear(),t.clear(),e.clear();for(const[u,h]of l.resolved)n.set(u,{tier:h.tier,itemId:h.itemId});for(const u of l.refused)t.add(u);return i=Number(l.scriptIndex)||0,!0},_tracked:e}}const ut=Ye.epicSequence,cn=n=>n<0?0:n>1?1:n;function Nv(n,e=1.7){const t=n-1;return 1+(e+1)*t*t*t+e*t*t}const vr=n=>1-(1-n)*(1-n),Uv=n=>1-Math.pow(1-n,5);function Fv(n){return n<=0?0:n>=1?1:Math.pow(2,-10*n)*Math.sin((n*10-.75)*(2*Math.PI/3))+1}function Ov(n,e=5){if(e>=6)return"escalated";for(const t of ut.ladder)if(n<=t.upTo)return t.mode;return ut.ladder[ut.ladder.length-1].mode}function kv(n,e,t=!1){if(t)return ut.voEscalatedLine;if(e()<1/ut.voRareOneIn)return ut.voRareLine;const i=new Set(n.slice(0,ut.voExcludeLast)),r=ut.voLines.filter(a=>!i.has(a)),s=r.length?r:ut.voLines;return s[Math.min(s.length-1,Math.floor(e()*s.length))]}function zv(n){const e=ut.modes[n]??ut.modes.full,t=e.tell,i=t+e.pinhole,r=i+e.iris,s=r+e.burp,a=s+e.fall,o=a+e.letter,c=o+e.exit,l=Math.max(c,a+e.settle);return{mode:n,m:e,tellEnd:t,pinholeEnd:i,irisEnd:r,burpEnd:s,fallStart:s,impact:a,letterEnd:o,exitEnd:c,end:l,dilateDownFrom:i+.05,dilateDownTo:i+.05+e.iris*.67,dilateUpFrom:a-e.fall*.25,dilateUpTo:a}}function Bv(){const n=ti(),e={active:!1,t:0,tl:null,tier:5,site:{x:0,y:0,z:0},portal:{x:0,y:0,z:0},portal2:null,drift:{x:0,z:0},spinAxis:0,line:"",subLine:"",events:[],fired:{tell:!1,open:!1,impact:!1,end:!1}};function t({site:u,count:h,tier:d=5,line:p,subLine:m,rng:S}){const f=Ov(h,d),g=zv(f),E=ut.gravity,w=g.m.fall,v=.5*E*w*w,b=S()*Math.PI*2,R={x:Math.sin(b)*ut.driftSpeed,z:Math.cos(b)*ut.driftSpeed};e.active=!0,e.t=0,e.tl=g,e.tier=d,e.site={...u},e.portal={x:u.x-R.x*w,y:u.y+v,z:u.z-R.z*w};const T=3.6/ut.driftSpeed;e.portal2=g.m.portals>1?{x:e.portal.x+R.z*T,y:e.portal.y+.9,z:e.portal.z-R.x*T}:null,e.drift=R,e.spinAxis=S()*Math.PI*2,e.line=p,e.subLine=m,e.events=[],e.fired={tell:!1,open:!1,impact:!1,end:!1}}function i(){return e.portal2?(e.portal2={x:2*e.portal.x-e.portal2.x,y:e.portal2.y,z:2*e.portal.z-e.portal2.z},!0):!1}function r(u){if(!e.active||!e.tl)return;e.t+=u;const h=e.tl;!e.fired.tell&&e.t>=0&&(e.fired.tell=!0,e.events.push("tell")),!e.fired.open&&e.t>=h.tellEnd&&(e.fired.open=!0,e.events.push("open")),!e.fired.impact&&e.t>=h.impact&&(e.fired.impact=!0,e.events.push("impact"),e.events.push("deliver")),!e.fired.end&&e.t>=h.end&&(e.fired.end=!0,e.active=!1,e.events.push("end"))}function s(){const u=e.tl;if(!u)return{scale:0,sx:1,sy:1};const h=e.t;if(h<u.tellEnd)return{scale:0,sx:1,sy:1};if(h<u.pinholeEnd)return{scale:cn((h-u.tellEnd)/Math.max(1e-6,u.m.pinhole))*.06,sx:1,sy:1};if(h<u.irisEnd){const m=cn((h-u.pinholeEnd)/Math.max(1e-6,u.m.iris));return{scale:.05+Nv(m)*.95,sx:1,sy:1}}if(h<u.burpEnd){const m=cn((h-u.irisEnd)/Math.max(1e-6,u.m.burp)),S=Math.sin(m*Math.PI);return{scale:1,sx:1+.12*S,sy:1-.14*S}}if(h<u.impact)return{scale:1,sx:1,sy:1};const d=cn((h-u.impact)/.5);if(d>=1)return{scale:0,sx:1,sy:1};const p=d>.86?(d-.86)/.14:0;return{scale:1-vr(d),sx:1-p*.9,sy:1+p*.5}}function a(){const u=e.tl;if(!u||!e.active)return 1;const h=u.m.dilation;if(h>=1)return 1;const d=e.t;if(d<u.dilateDownFrom)return 1;if(d<u.dilateDownTo){const p=cn((d-u.dilateDownFrom)/(u.dilateDownTo-u.dilateDownFrom));return 1+(h-1)*vr(p)}if(d<u.dilateUpFrom)return h;if(d<u.dilateUpTo){const p=cn((d-u.dilateUpFrom)/(u.dilateUpTo-u.dilateUpFrom));return h+(1-h)*vr(p)}return 1}function o(){const u=e.tl;if(!u||e.t<u.fallStart)return null;const h=ut.gravity,d=Math.min(e.t-u.fallStart,u.m.fall),p=e.t>=u.impact,m=e.portal.x+e.drift.x*d,S=e.portal.z+e.drift.z*d,f=p?e.site.y:e.portal.y-.5*h*d*d,g=Math.floor(e.t*ut.stepHz),E=p?e.spinAxis+ut.tumbleTurns*Math.PI*2:e.spinAxis+g/(ut.stepHz*u.m.fall)*ut.tumbleTurns*Math.PI*2;let w;if(!p)w=ut.fallScale+(1-ut.fallScale)*(d/u.m.fall);else{const v=cn((e.t-u.impact)/.35);w=.7+Fv(v)*.3}return{x:m,y:f,z:S,spin:E,scale:w,landed:p,fallU:d/u.m.fall}}function c(){const u=e.tl;return!u||e.t<u.impact?-1:e.t-u.impact}function l(){const u=c();if(u<0)return{rot:0,x:0,y:0};const h=cn(u/(ut.shakeMs/1e3));if(h>=1)return{rot:0,x:0,y:0};const d=1-Uv(h),p=u*42;return{rot:n(p,.5)*ut.shakeDegrees*(Math.PI/180)*d,x:n(p,11.5)*ut.shakeMetres*d,y:n(p,23.5)*ut.shakeMetres*d}}return{start:t,flipAcross:i,update:r,aperture:s,dilation:a,object:o,shake:l,sinceImpact:c,get active(){return e.active},get t(){return e.t},get tier(){return e.tier},get mode(){return e.tl?.mode??null},get portal(){return e.tl&&e.t>=e.tl.tellEnd?e.portal:null},get portal2(){return e.tl&&e.t>=e.tl.tellEnd?e.portal2:null},get portal2Planned(){return e.portal2},get portalPlanned(){return e.tl?e.portal:null},get site(){return{...e.site}},get line(){return e.line},get subLine(){return e.subLine},get tellStrength(){const u=e.tl;return!u||!e.active||u.m.tell<=0||e.t>=u.tellEnd?0:vr(cn(e.t/u.m.tell))},get framing(){const u=e.tl;if(!u||!e.active)return 0;const h=vr(cn(e.t/Math.max(.3,u.irisEnd))),d=.6,p=u.end-d;return e.t>p?h*vr(cn((u.end-e.t)/d)):h},get lettering(){const u=e.tl;if(!u||e.t<u.impact)return{shown:!1,in:0,out:0,chars:0};if(e.t>=u.exitEnd)return{shown:!1,in:1,out:1,chars:e.subLine.length};const h=cn((e.t-u.impact)/.26),d=e.t>u.letterEnd?cn((e.t-u.letterEnd)/Math.max(1e-6,u.m.exit)):0,p=Math.max(0,Math.floor((e.t-u.impact-.25)*22));return{shown:!0,in:h,out:d,chars:Math.min(p,e.subLine.length)}},takeEvents(){const u=e.events;return e.events=[],u},get _timeline(){return e.tl}}}const Un=ut,_o=4,Gv=12;function Hv(n){const t=document.createElement("canvas");t.width=256,t.height=256;const i=t.getContext("2d"),r=256/2,s=256/2,a=new Path2D;for(let l=0;l<=96;l++){const u=l/96*Math.PI*2,h=104+Math.sin(u*5+n*1.3)*4+Math.sin(u*11+n*2.1)*2.4+Math.sin(u*3-n*.7)*2,d=r+Math.cos(u)*h,p=s+Math.sin(u)*h;l===0?a.moveTo(d,p):a.lineTo(d,p)}a.closePath(),i.save(),i.clip(a);const o=i.createLinearGradient(0,s-110,0,s+110);o.addColorStop(0,"#241443"),o.addColorStop(.42,"#7b3b6a"),o.addColorStop(.72,"#e8763a"),o.addColorStop(1,"#ffd08a"),i.fillStyle=o,i.fillRect(0,0,256,256),i.fillStyle="rgba(255, 246, 220, 0.95)";for(let l=0;l<34;l++){const u=l*2.39996,h=96*Math.sqrt((l+.5)/34),d=r+Math.cos(u)*h,p=s+Math.sin(u)*h*.62-30,m=1.1+l*13%5*.4;i.beginPath(),i.moveTo(d,p-m*2.2),i.lineTo(d+m*.6,p-m*.6),i.lineTo(d+m*2.2,p),i.lineTo(d+m*.6,p+m*.6),i.lineTo(d,p+m*2.2),i.lineTo(d-m*.6,p+m*.6),i.lineTo(d-m*2.2,p),i.lineTo(d-m*.6,p-m*.6),i.closePath(),i.fill()}i.restore(),i.save(),i.clip(a),i.strokeStyle="rgba(255, 196, 120, 0.55)",i.lineWidth=16,i.stroke(a),i.restore(),i.strokeStyle="#2b2118",i.lineWidth=7,i.lineJoin="round",i.stroke(a);const c=new Sn(t);return c.colorSpace=dt,c}function Pu(n,e){const i=document.createElement("canvas");i.width=64,i.height=64;const r=i.getContext("2d"),s=r.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);s.addColorStop(0,n),s.addColorStop(.55,e),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,64,64);const a=new Sn(i);return a.colorSpace=dt,a}function Vv(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),i=64/2;t.fillStyle="#fff6dc",t.beginPath(),t.moveTo(i,2),t.quadraticCurveTo(i+4,i-4,62,i),t.quadraticCurveTo(i+4,i+4,i,62),t.quadraticCurveTo(i-4,i+4,2,i),t.quadraticCurveTo(i-4,i-4,i,2),t.fill();const r=new Sn(e);return r.colorSpace=dt,r}function Wv(n){const e=Array.from({length:_o},(y,C)=>Hv(C)),t=Pu("rgba(255,220,150,0.9)","rgba(210,140,70,0.35)"),i=Pu("rgba(255,255,255,1)","rgba(255,240,210,0.5)"),r=Vv(),s=new $t(1,1),a=()=>{const y=new at(s,new Yt({map:e[0],transparent:!1,alphaTest:.5,side:At,toneMapped:!1}));return y.frustumCulled=!1,y.visible=!1,n.add(y),y},o=a(),c=a(),l=new at(new fi(1,1),new Ki({flatShading:!0}));l.frustumCulled=!1,l.visible=!1,n.add(l);const u=(y,C=Di)=>{const D=new at(s,new Yt({map:y,transparent:!0,depthWrite:!1,blending:C,toneMapped:!1}));return D.frustumCulled=!1,D.visible=!1,n.add(D),D},h=Array.from({length:Un.smearSegments},()=>u(t,Ii)),d=Array.from({length:14},()=>u(r,Ii)),p=u(i,Ii),m=new at((()=>{const y=new ps(.74,1,40);return y.rotateX(-Math.PI/2),y})(),new Yt({color:"#e8dcc0",transparent:!0,depthWrite:!1,side:At,toneMapped:!1}));m.frustumCulled=!1,m.visible=!1,n.add(m);const S=new pa(new ya(.13,0),new Yt({color:"#cbbb96",toneMapped:!1}),Un.fleckCount);S.count=0,S.frustumCulled=!1,S.instanceMatrix.setUsage(fa),n.add(S);let f=[],g=null,E=null;const w=new ot,v=new z,b=new qn,R=new z;function T(){o.visible=!1,c.visible=!1,l.visible=!1,p.visible=!1,m.visible=!1,S.count=0;for(const y of h)y.visible=!1;for(const y of d)y.visible=!1;f=[],g=null,E=null}function _(y,C,D){if(!y.active){T();return}const I=Ni(y.tier)??Ni(5),U=y.aperture(),O=y.portal,L=Math.floor(D/1e3*Gv)%_o,V=Un.mouthMetres*U.scale,G=O&&U.scale>.001;o.visible=G,G&&(o.material.map=e[L],o.position.set(O.x,O.y,O.z),o.scale.set(V*U.sx,V*U.sy,1),nn(o,C));const Z=y.portal2;c.visible=!!Z&&G,Z&&G&&(c.material.map=e[(L+2)%_o],c.position.set(Z.x,Z.y,Z.z),c.scale.set(V*.72*U.sx,V*.72*U.sy,1),nn(c,C));const H=y.object();l.visible=!!H,H&&(l.material.color.set(I.colour),l.material.emissive.set(I.colour),l.material.emissiveIntensity=.42,l.position.set(H.x,H.y+I.scale,H.z),l.rotation.set(H.spin*.6,H.spin,H.spin*.3),l.scale.setScalar(I.scale*H.scale),H.landed||(f.unshift({x:H.x,y:H.y+I.scale,z:H.z}),f.length=Math.min(f.length,Un.smearSegments+1)));for(let ge=0;ge<h.length;ge++){const xe=f[ge+1],Se=!!xe&&!!H&&!H.landed;if(h[ge].visible=Se,!Se)continue;const Ke=1-ge/h.length;h[ge].position.set(xe.x,xe.y,xe.z),h[ge].scale.setScalar(I.scale*1.5*Ke),h[ge].material.opacity=.42*Ke*Ke,nn(h[ge],C)}const ie=y._timeline,te=ie?y.t-ie.irisEnd:-1,ae=.55;if(ie&&te>=0&&te<ae){g||(g=d.map((xe,Se)=>({a:Se/d.length*Math.PI*2+Se%3*.21,e:-.3+Se%5*.16,sp:2.4+Se%4*.7})));const ge=10+(d.length-10);for(let xe=0;xe<d.length;xe++){const Se=xe<ge;if(d[xe].visible=Se,!Se)continue;const Ke=g[xe],ke=Ke.sp*te;d[xe].position.set(O.x+Math.cos(Ke.a)*ke,O.y+Ke.e*ke,O.z+Math.sin(Ke.a)*ke);const nt=1-te/ae;d[xe].scale.setScalar(.45*nt+.12),d[xe].material.opacity=nt,nn(d[xe],C)}}else{for(const ge of d)ge.visible=!1;te>=ae&&(g=null)}const we=y.sinceImpact(),$e=y.site,We=we>=0&&we<3/24;p.visible=We,We&&(p.position.set($e.x,$e.y+.5,$e.z),p.scale.setScalar(3),p.material.opacity=1-we/(3/24),nn(p,C));const J=Un.dustMs/1e3,re=we>=0&&we<J;if(m.visible=re,re){const ge=we/J;m.position.set($e.x,$e.y+.04,$e.z),m.scale.setScalar(.05+ge*Un.dustRadius),m.material.opacity=.8*(1-ge)}const ne=.75;if(we>=0&&we<ne){E||(E=Array.from({length:Un.fleckCount},(ge,xe)=>{const Se=xe/Un.fleckCount*Math.PI*2+xe%7*.11,Ke=1.4+xe%5*.42;return{vx:Math.cos(Se)*Ke,vy:3+xe%4*.65,vz:Math.sin(Se)*Ke}})),S.count=Un.fleckCount;for(let ge=0;ge<Un.fleckCount;ge++){const xe=E[ge];v.set($e.x+xe.vx*we,$e.y+xe.vy*we-.5*9.8*we*we,$e.z+xe.vz*we),b.setFromAxisAngle(new z(0,1,0),we*9+ge),R.setScalar(1-we/ne),w.compose(v,b,R),S.setMatrixAt(ge,w)}S.instanceMatrix.needsUpdate=!0}else S.count=0,we>=ne&&(E=null)}return{update:_,hide:T}}const Xt=Ye.epicSiting,Xv=Math.PI/180;function qv(n,e){let t=(n-e)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Du(n,e=Xt.bearingDegrees){const t=e*Xv,i=Math.atan2(n.fx,n.fz);let r=null;for(let s=0;s<Xt.samples;s++){const a=i+(n.rng()*2-1)*t,o=Xt.minDistance+n.rng()*(Xt.maxDistance-Xt.minDistance),c=n.px+Math.sin(a)*o,l=n.pz+Math.cos(a)*o;if(n.isSubmerged(c,l))continue;const u=n.heightAt(c,l);if(u<n.seaLevel+Xt.seaMargin||n.slopeAt(c,l)>Xt.maxSlope||n.isClear&&!n.isClear(c,l,Xt.clearance)||!Yv(n,c,l,u)||n.isInFrame&&!n.isInFrame(c,u,l))continue;const h=(Xt.minDistance+Xt.maxDistance)/2,p=-Math.abs(qv(a,i))*14-Math.abs(o-h)*.5;(!r||p>r.score)&&(r={x:c,y:u,z:l,score:p})}return r}function kd(n){return Du(n,Xt.bearingDegrees)??Du(n,Xt.relaxedBearingDegrees)}function Yv(n,e,t,i){const r=n.heightAt(n.px,n.pz)+1.6,s=i+1.5,a=12;for(let o=1;o<a;o++){const c=o/a,l=n.px+(e-n.px)*c,u=n.pz+(t-n.pz)*c,h=r+(s-r)*c;if(n.heightAt(l,u)>h)return!1}return!0}function $v(n,e,t){return Math.hypot(n.x-e,n.z-t)>Xt.abandonDistance}function xl(n){const e=n.px+n.fx*Xt.fallbackDistance,t=n.pz+n.fz*Xt.fallbackDistance;return{x:e,y:n.heightAt(e,t),z:t,score:-1/0}}const os=Xt,Kv={trinket_maker:{name:"the trinket maker",kind:"maker",greeting:"kia ora. what have you got there?",_reactionNote:"Keyed by tier. Junk is accepted warmly and moves nothing: generosity has to cost something or it is not generosity. Tier 4 and up also buy a sighting.",reactions:{1:['she turns it over once and tucks it away. "chur."','"oh, a good little one." it goes in the tin with the others.',"she nods. the puoro does not stop."],2:[`"now that's a keeper." she holds it up to the light.`,'she thumbs the edge of it, pleased. "someone would want this."','"ka pai." it goes somewhere better than the tin.'],3:[`she stops playing. "where'd you get this?"`,`"oh. oh, that's a nice one, e hoa." she does not put it down.`,"she turns it slowly, the whole way round, and says nothing for a bit."],4:['"aue." she goes quiet. "you found this? out there?"',"she laughs, once, delighted, and puts down the puoro to hold it properly.",'"kei te pai rawa atu." she looks at you differently after that.'],5:[`she does not take it straight away. she looks at it, then at you, then at the ngāhere. "that's not from here," she says. "you know that, eh."`,'"where were you standing when you picked this up." it is not a question. she wraps it in cloth before she takes it.'],6:["she takes it in both hands and does not look at it. she looks past you, at the ridge."]},_tier6Note:"She ACCEPTS a tier 6. The earlier line had her refuse it ('that one's for Karu'), which contradicted the milestone that fires on the same gift while the kete removed the item. The Karu reveal is a milestone line, queued after this one.",_sightingNote:"Tier 4 and up buy a sighting: she tells you where she has seen one. TELLING ONLY. The cryptids are not built, so nothing is placed in the world and the sighting promises no destination.",revealsAtTier:4,sightings:[{creature:"grotto mermaids",site:"grotto_mermaids",lines:[`"the grotto mermaids — south end, where the rocks go under. only at low tide, and only if you're already quiet."`,`"there's a cave down that way the sea only lets you into twice a month. that's where the grotto mermaids are."`]},{creature:"moana kelpī",site:"moana_kelpii",lines:[`"moana kelpī come up the estuary when it rains hard. they look like driftwood until they don't."`,`"saw a moana kelpī standing in the shallows off the point once. stood there an hour. then it wasn't there."`]},{creature:"patupaiarehe",site:"patupaiarehe",lines:[`"patupaiarehe are up in the mist on the ridge. don't go looking. they'll find you if they want to."`,`"the bush past the treeline goes cold in patches. that's patupaiarehe. keep walking."`]}],_milestonesNote:"Fired ONCE each, on the transition, queued behind the reaction line (tuning.progression.delayMs), and remembered in the save so a restored game never replays them. Action and warning only: she never says what Karu is, what the door is, or who made either. That is hers to write.",milestones:{doorway:`she puts the puoro down. behind her, where there was bush, there is a way through. "i wouldn't," she says. "but you will. there's a way back. i've never found it."`,karu:"she stands, which she has not done before, and walks past you into the trees. something is waiting there that looks at you."}},wanderer_a:{name:"a wanderer",kind:"wanderer",greeting:"she looks up.",reactions:{1:['"cheers." she pockets it.'],2:['"oh, tidy." she turns it over.'],3:[`"you sure? that's a nice one." she takes it anyway.`],4:['she stares at it. "you should show that to the one with the puoro."'],5:[`"nah. nah, take that to her. that's not for me."`],6:['"take that to her. right now."']},revealsAtTier:99,sightings:[]},wanderer_b:{name:"a wanderer",kind:"wanderer",greeting:"he tips his chin at you.",reactions:{1:['"choice."'],2:['"oh mean." he holds it up.'],3:['"far out. where."'],4:['"bro." a long pause. "bro."'],5:["he does not take it. he takes a step back from it."],6:["he does not take it. he takes a step back from you."]},revealsAtTier:99,sightings:[]},grotto_mermaids:{name:"grotto mermaids",kind:"cryptid",speaks:!1,greeting:"there is a pale shape under the water. it was not there a moment ago.",_verbNote:"Quieter than the maker's 'give something to'. You do not give to a shape in the water; you hold a thing out and see.",givePrompt:"hold something out",giveHead:"hold it out",_reactionNote:"No arm, no limb, no hair. A shape under the surface and a rock whose shadow is wrong. That is all anyone has seen.",reactions:{1:["the shape does not move. the water moves."],2:["the shape does not move. the water moves."],3:["the water is very still for a moment."],4:["the pale shape turns, maybe. the water is empty."],5:["the pale shape is closer than it was. then the water is empty."],6:["the water is empty before you have finished holding it out."]},grantsAtTier:5,grantsTier:6,revealsAtTier:99,sightings:[]},moana_kelpii:{name:"moana kelpī",_idNote:"id is ASCII only; the name field is the spelling, as she wrote it.",kind:"cryptid",speaks:!1,greeting:"driftwood, at the mouth of the creek. it is standing.",_greetingDownNote:"Said instead of greeting while the driftwood is lying down: after it has taken a gift and until its grant is collected (render/cryptids.js kelpiiDown), and from beyond standRadius. The greeting used to assert it was standing over a frame of it lying.",greetingDown:"driftwood, at the mouth of the creek. it is lying down.",givePrompt:"hold something out",giveHead:"hold it out",reactions:{1:["the driftwood is driftwood."],2:["the driftwood is driftwood."],3:["the driftwood is not quite where it was."],4:["the driftwood turns, slowly, the way driftwood does not."],5:["the driftwood is standing. it was not standing. it takes the thing and is driftwood again."],6:["the driftwood is lying down. it was lying down the whole time."]},grantsAtTier:5,grantsTier:6,revealsAtTier:99,sightings:[]},patupaiarehe:{name:"patupaiarehe",kind:"place",speaks:!1,_note:"A place, not a character. Her line is 'don't go looking. they'll find you if they want to.' So there is nobody here to hand a thing to and nothing that answers: recipientInReach never returns this id, the reactions object is empty on purpose, and the only feedback anywhere is the fog and the cold. The player may LEAVE a gift on the ground inside the area; the tier 6 comes only after they have walked out of the fog and turned back, with no line at all. Patupaiarehe are treated with real caution in Māori tradition, and a vending-machine framing would be wrong twice over.",greeting:"",reactions:{},_leaveNote:"The verb here is never 'give'. leavePrompt is the HUD line inside the fog with something in the kete; leaveHead is the card's whole heading, verbatim, with no name and no 'give to' in front of it. Both placeholders, both hers to rewrite.",leavePrompt:"leave something here",leaveHead:"leave it here",grantsAtTier:5,grantsTier:6,revealsAtTier:99,sightings:[]}},ms={recipients:Kv},zd=Ye.giving;function wa(n){return ms.recipients[n]??null}function Zv(n){return!!ms.recipients[n]}function xo(n,e){return!n||n.length===0?null:n[Math.min(n.length-1,Math.floor(e()*n.length))]}function Jv({recipientId:n,tier:e,knownCreatures:t=[],rng:i}){const r=wa(n);if(!r)return{accepted:!1,kGain:0,line:"",sighting:null};const s=String(e),a=xo(r.reactions?.[s],i)??"",o=Ye.discernment.givingGain[s]??0;let c=null;if(e>=(r.revealsAtTier??99)&&r.sightings?.length){const l=r.sightings.filter(d=>!t.includes(d.creature)),u=l.length?l:r.sightings,h=xo(u,i);h&&(c={creature:h.creature,line:xo(h.lines,i)??""})}return{accepted:!0,kGain:o,line:a,sighting:c}}function Qv(n,e,t){let i=null,r=zd.reachMetres;for(const s of n){if(!Zv(s.id))continue;const a=Math.hypot(s.x-e,s.z-t);a<r&&(r=a,i=s)}return i}const Gn=zd,jv={radius:22,senseRadius:45,findsPerSite:2,findMinFromSite:4,findMaxSlope:.5},eM={minFromSite:11,maxFromSite:40,clearingMetres:18,maxSlope:.36,maxWaterDepth:.4,searchStep:2,shoreBandMetres:12,dryMarginMetres:.12,sightClearMetres:1.2,findClearMetres:3,score:{inFrame:3,visible:2,offsetPenalty:.6,distanceTie:.01,sightLine:10},directions:16},tM={cameraDistance:9,cameraPitchDeg:25,cameraEyeMetres:1.7,giveStandMetres:2.4,kelpiiCentreMetres:2.2,playerHeadMetres:1.6},nM={reachFraction:.75,placeReachMetres:6},iM={lineHoldMs:2200},rM={grotto_mermaids:{name:"grotto mermaids",_note:"'south end, where the rocks go under'. The shoreline (inland 1-6) at negative x, wherever the outcrop field is highest. The rock field is gated to zero at the shore in the height profile, so the grotto is where the rock WOULD be; the visible rocks there are dressing.",search:{xMin:-150,xMax:-50,inlandMin:1,inlandMax:6},scanStep:2,fallback:{x:-100,inland:3},_stillNote:"'only if you're already quiet'. No tide system: the pale shape is only ABOVE the water while the player has been still for stillSeconds within stillRadius, and slips under when they move. Giving works regardless; the stillness is for looking.",stillSeconds:1.5,stillRadius:12,_shapeNote:"Where the pale shape lies: sideMetres across from the site, then seaward from the site until the ground is depthMetres under the sea, then pastMetres further out. Found per site, not a fixed offset: at a fixed inland+4 the shape on the default seed was 9cm under the sand and the line 'the pale shape is closer than it was' played over a frame with nothing in the water.",shape:{sideMetres:-3,depthMetres:.25,pastMetres:1.5,maxScanMetres:40,scanStep:.5}},moana_kelpii:{name:"moana kelpī",_note:"'come up the estuary'. The estuary mouth: the lowest-inland point at positive x where the stream mask first reaches maskMin. The channel reach only opens past inland 30, so a mask above 0.3 first exists in the forties; searching 30-40 for 0.5 is unsatisfiable and would fall back on every seed.",search:{xMin:40,xMax:150,inlandMin:42,inlandMax:70},scanStep:2,maskMin:.3,_relaxNote:"Streams are sparse: on two seeds in five the tight window has no estuary mouth at all. Relaxed, never cancelled — the second pass widens the window and lowers the mask floor before the fixed fallback, which is a dry spot with no creek and the worst outcome for a thing that is meant to be driftwood at a river mouth.",relax:{xMax:220,inlandMax:100,maskMin:.2},fallback:{x:90,inland:50},_standNote:"'they look like driftwood until they don't'. The billboard lies down from senseRadius in and only stands inside standRadius.",standRadius:8},patupaiarehe:{name:"patupaiarehe",_note:"'up in the mist on the ridge. don't go looking.' Deep bush, on a local high point. This is a PLACE, not a character: nothing here is drawn as a figure, nothing reacts, and the recipient entry has no reactions. The fog ramps from senseRadius in — that IS her 'cold in patches' line.",search:{xMin:-90,xMax:90,inlandMin:95,inlandMax:140},scanStep:3,localMaxRadius:6,fallback:{x:0,inland:110},fog:{_note:"Fog colour and near-distance at full warmth. Integration lerps the scene fog toward these by warmth; the render module also drops local fog sprites so the patch reads even before the scene fog moves.",colour:"#b9c4cc",near:8,far:34}}},sM={turnBackDot:.2},gi={cryptidArea:jv,landing:eM,sight:tM,debug:nM,grant:iM,sites:rM,leftGift:sM},ni=gi.cryptidArea,Tt=gi.landing;function aM(n){return Math.min(1,Math.max(0,n))}function Bd(n,e,t){return t-n.inlandAt(e,0)}function Ta(n,e,t){return n.isSubmerged(e,t)?!1:n.inlandAt(e,t)<Tt.shoreBandMetres?Gd(n,e,t):n.waterDepthAt(e,t)<Tt.maxWaterDepth}function Gd(n,e,t){return n.heightAt(e,t)>jr+Tt.dryMarginMetres}function Iu(n,e,{px:t,pz:i,fx:r,fz:s,isInFrame:a,isVisible:o,frameOffset:c,avoid:l=[],reject:u=[]}){const h=Tt.score,d=Tt.directions,p=Tt.findClearMetres*Tt.findClearMetres,m=[];for(let f=Tt.minFromSite;f<=Tt.maxFromSite;f+=Tt.searchStep)for(let g=0;g<d;g++){const E=g/d*Math.PI*2,w=e.x+Math.sin(E)*f,v=e.z+Math.cos(E)*f;if(!Ta(n,w,v)||n.slopeAt(w,v)>Tt.maxSlope||l.some(L=>(L.x-w)**2+(L.z-v)**2<p)||u.some(L=>Math.abs(L.x-w)<.5&&Math.abs(L.z-v)<.5))continue;const b=n.heightAt(w,v),R=w-t,T=v-i,_=Math.hypot(R,T)||1,y=(R*r+T*s)/_,C=o?!!o(w,b,v):!0,D=C&&!!(a&&a(w,b,v)),I=!!o&&C,U=oM(t,i,w,v,e);let O=y;D?O+=h.inFrame:I&&(O+=h.visible-(c?h.offsetPenalty*c(w,b,v):0)),O-=Math.abs(f-Tt.minFromSite)*h.distanceTie,U&&(O-=h.sightLine),m.push({x:w,y:b,z:v,ahead:y,inFrame:D,visible:I,behindSite:U,score:O})}if(m.length===0)return e.landing;const S=[f=>f.inFrame&&f.ahead>.15&&!f.behindSite,f=>f.visible&&f.ahead>.15&&!f.behindSite,f=>f.ahead>.15&&!f.behindSite,f=>f.ahead>.15,()=>!0];for(const f of S){let g=null;for(const E of m)f(E)&&(!g||E.score>g.score)&&(g=E);if(g)return{x:g.x,y:g.y,z:g.z}}return e.landing}function Hd(n,e,t){const i=[],r=Tt.directions;for(let o=0;o<r;o++){const c=o/r*Math.PI*2;i.push({a:c,off:Math.abs(Math.atan2(Math.sin(c),Math.cos(c)))})}i.sort((o,c)=>o.off-c.off);for(let o=Tt.minFromSite;o<=Tt.maxFromSite;o+=Tt.searchStep)for(const{a:c}of i){const l=e+Math.sin(c)*o,u=t+Math.cos(c)*o;if(Ta(n,l,u)&&!(n.slopeAt(l,u)>Tt.maxSlope))return{x:l,y:n.heightAt(l,u),z:u}}const s=e,a=t+Tt.minFromSite;return{x:s,y:n.heightAt(s,a),z:a}}function oM(n,e,t,i,r){const s=t-n,a=i-e,o=s*s+a*a;if(o<1e-6)return!1;const c=((r.x-n)*s+(r.z-e)*a)/o;if(c<=0||c>=1)return!1;const l=n+s*c,u=e+a*c;return Math.hypot(r.x-l,r.z-u)<Tt.sightClearMetres}function ql(n,e,t,i){let r=null;for(let s=e.inlandMin;s<=e.inlandMax+1e-9;s+=t)for(let a=e.xMin;a<=e.xMax+1e-9;a+=t){const o=Bd(n,a,s),c=i(a,o,s);c!==-1/0&&(!r||c>r.s)&&(r={x:a,z:o,inland:s,s:c})}return r}function Lu(n,e,t){const i=Ye.epicSiting,r=t.x-e.x,s=t.z-e.z,a=r*r+s*s;if(a<1e-6)return!1;const o=Dr((e.x+t.x)/2),c=Dr((e.z+t.z)/2);for(let l=-1;l<=1;l++)for(let u=-1;u<=1;u++)for(const h of n(o+l,c+u)){if(h.kind!=="tree")continue;const d=((h.x-e.x)*r+(h.z-e.z)*s)/a;if(d<=.08||d>=1)continue;const p=e.x+r*d,m=e.z+s*d,S=h.scale??6,f=Math.max(i.canopyRadius,S*i.canopyRadiusOfHeight);if((h.x-p)**2+(h.z-m)**2>f*f)continue;const g=e.y+(t.y-e.y)*d,E=h.y??0;if(g>E+S*i.canopyBandFrom&&g<E+S)return!0}return!1}function lM(n,e,t,i){const r=gi.sight,s=Hd(n,t,i),a=s.x-t,o=s.z-i,c=Math.hypot(a,o)||1,l=a/c,u=o/c,h=t+l*r.giveStandMetres,d=i+u*r.giveStandMetres,p=r.cameraPitchDeg*(Math.PI/180),m=r.cameraDistance*Math.cos(p),S=r.cameraDistance*Math.sin(p),f=h+l*m,g=d+u*m,E={x:f,y:n.heightAt(h,d)+S+r.cameraEyeMetres,z:g};return!(Lu(e,E,{x:t,y:n.heightAt(t,i)+r.kelpiiCentreMetres,z:i})||Lu(e,E,{x:h,y:n.heightAt(h,d)+r.playerHeadMetres,z:d}))}function cM(n,e){const t=gi.sites.grotto_mermaids.shape,i=e.x+t.sideMetres;for(let r=0;r<=t.maxScanMetres;r+=t.scanStep){const s=e.z-r;if(n.heightAt(i,s)<jr-t.depthMetres)return{x:i,z:s-t.pastMetres}}return null}function uM(n,e){return ql(n,e.search,e.scanStep,(t,i)=>Gd(n,t,i)?n.rockAt(t,i):-1/0)}function dM(n,e,t){const i=(r,s)=>ql(n,r,e.scanStep,(a,o,c)=>{const{mask:l}=n.channelAt(a,o,n.inlandAt(a,o));return l<s||n.isSubmerged(a,o)||!n.nearWaterAt(a,o)||t&&!lM(n,t,a,o)?-1/0:-c-Math.abs(a-r.xMin)*1e-4});return i(e.search,e.maskMin)??i({...e.search,...e.relax},e.relax.maskMin)}function hM(n,e){const t=e.localMaxRadius;return ql(n,e.search,e.scanStep,(i,r)=>{if(!Ta(n,i,r)||n.slopeAt(i,r)>Tt.maxSlope)return-1/0;const s=n.heightAt(i,r);return s<=n.heightAt(i+t,r)||s<=n.heightAt(i-t,r)||s<=n.heightAt(i,r+t)||s<=n.heightAt(i,r-t)?-1/0:s})}const fM={grotto_mermaids:uM,moana_kelpii:dM,patupaiarehe:hM};function pM(n,e,t=null){const i=[];for(const[r,s]of Object.entries(gi.sites)){const a=fM[r]?.(n,s,t)??null;let o,c,l=!1;a?(o=a.x,c=a.z):(o=s.fallback.x,c=Bd(n,o,s.fallback.inland),l=!0);const u=ms.recipients[r]?.kind==="place"?"place":"cryptid";i.push({id:r,name:s.name,kind:u,x:o,y:n.heightAt(o,c),z:c,inland:n.inlandAt(o,c),landing:Hd(n,o,c),water:r==="grotto_mermaids"?cM(n,{x:o,z:c}):null,fellBack:l})}return i}const vo=mi.items.filter(n=>n.biome==="authored"&&n.tier===5);function mM(n,e,t){const i=[];for(const r of n)for(let s=0;s<ni.findsPerSite;s++){const a=pi(e,"cryptid",r.id,s);let o=r.landing.x,c=r.landing.z;for(let u=0;u<40;u++){const h=a()*Math.PI*2,d=ni.findMinFromSite+a()*(ni.radius-ni.findMinFromSite),p=r.x+Math.sin(h)*d,m=r.z+Math.cos(h)*d;if(Ta(t,p,m)&&!(t.slopeAt(p,m)>ni.findMaxSlope)){o=p,c=m;break}}const l=vo[Math.min(vo.length-1,Math.floor(a()*vo.length))];i.push({id:`cryptid:${r.id}:${s}`,itemId:l.id,tier:5,x:o,y:t.heightAt(o,c),z:c,rot:a()*Math.PI*2,biome:"beach",nearWater:!1,tierRoll:0,itemRoll:0,isCryptidFind:!0,siteId:r.id})}return i}function gM(n){return n.filter(e=>e.kind!=="place").map(e=>({id:e.id,x:e.x,z:e.z}))}function Vd(n,e){const t=ms.recipients[n];return!t||t.grantsAtTier==null||t.grantsTier==null?null:e===t.grantsAtTier?{tier:t.grantsTier}:null}function _M(n,e,t){const i={};for(const r of n){const s=Math.hypot(r.x-e,r.z-t);i[r.id]=aM(1-(s-ni.radius)/(ni.senseRadius-ni.radius))}return i}function xM(n,e,t){return n.map(i=>({s:i,d:Math.hypot(i.x-e,i.z-t)})).sort((i,r)=>i.d-r.d).map(i=>i.s)}function vM({site:n,px:e,pz:t,stillSeconds:i}){const r=gi.sites.grotto_mermaids;return Math.hypot(n.x-e,n.z-t)>r.stillRadius?!1:i>=r.stillSeconds}function Wd(n,e,t){return Math.hypot(n.x-e,n.z-t)<=gi.sites.moana_kelpii.standRadius}function MM(){let n=null;return{get pending(){return n?{...n}:null},leave(e,t,i){n={siteId:e,at:t,away:!1,tier:i}},update(e,t,i,r,s){if(!n)return null;const a=e.find(p=>p.id===n.siteId);if(!a)return null;const o=a.x-t,c=a.z-i,l=Math.hypot(o,c);if(!n.away)return l>=ni.radius&&(n.away=!0),null;if((o*r+c*s)/(l||1)<gi.leftGift.turnBackDot)return null;const h=Vd(n.siteId,n.tier),d=n.siteId;return n=null,h?{siteId:d,grant:h}:null},serialize(){return n?{...n}:null},restore(e){n=e?{...e}:null}}}const ui=gi;function Nu(n,e){const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d"),s=r.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);s.addColorStop(0,n),s.addColorStop(.5,e),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,128,128);const a=new Sn(i);return a.colorSpace=dt,a}function SM(){const t=document.createElement("canvas");t.width=256,t.height=128;const i=t.getContext("2d");i.translate(256/2,128/2),i.scale(1,.42);const r=i.createRadialGradient(0,0,0,0,0,256/2);r.addColorStop(0,"rgba(226, 232, 226, 0.78)"),r.addColorStop(.55,"rgba(206, 218, 214, 0.42)"),r.addColorStop(1,"rgba(190, 206, 204, 0)"),i.fillStyle=r,i.beginPath(),i.arc(0,0,256/2,0,Math.PI*2),i.fill();const s=new Sn(t);return s.colorSpace=dt,s}function yM(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),i=new Path2D;for(let s=0;s<=40;s++){const a=s/40*Math.PI*2,o=46+Math.sin(a*3+.4)*7+Math.sin(a*7)*3,c=128/2+Math.cos(a)*o,l=128/2+12+Math.sin(a)*o*.72;s===0?i.moveTo(c,l):i.lineTo(c,l)}i.closePath(),t.fillStyle="#5a5650",t.fill(i),t.strokeStyle="#2b2118",t.lineWidth=5,t.lineJoin="round",t.stroke(i),t.fillStyle="rgba(200, 214, 214, 0.35)",t.beginPath(),t.ellipse(128/2-8,128/2+30,22,6,0,0,Math.PI*2),t.fill();const r=new Sn(e);return r.colorSpace=dt,r}function Uu(n){const t=document.createElement("canvas");t.width=192,t.height=192;const i=t.getContext("2d");i.translate(192/2,192/2),n&&i.rotate(-Math.PI/2+.12);const r=new Path2D;r.moveTo(-84,-6),r.bezierCurveTo(-60,-22,-20,-10,8,-16),r.bezierCurveTo(40,-24,70,-12,86,-4),r.bezierCurveTo(78,10,44,14,12,12),r.bezierCurveTo(-24,10,-56,20,-84,8),r.closePath(),i.fillStyle="#c9bda4",i.fill(r),i.strokeStyle="#2b2118",i.lineWidth=5,i.lineJoin="round",i.stroke(r),i.strokeStyle="rgba(90, 74, 52, 0.55)",i.lineWidth=2;for(let a=0;a<4;a++)i.beginPath(),i.moveTo(-70,-4+a*5),i.bezierCurveTo(-30,-12+a*5,20,2+a*4,72,-2+a*3),i.stroke();const s=new Sn(t);return s.colorSpace=dt,s}function bM(n){const e=new $t(1,1),t=(b,{blending:R=Di,depthWrite:T=!1}={})=>{const _=new at(e,new Yt({map:b,transparent:!0,depthWrite:T,blending:R,toneMapped:!1,side:At}));return _.frustumCulled=!1,_.visible=!1,n.add(_),_},i=b=>{const R=new at(e,new Yt({map:b,transparent:!1,alphaTest:.5,side:At,toneMapped:!1}));return R.frustumCulled=!1,R.visible=!1,n.add(R),R},r=t(SM());r.rotation.x=-Math.PI/2,r.renderOrder=2;const s=i(yM()),a=ma(1.1);a.visible=!1,n.add(a);const o=i(Uu(!1)),c=i(Uu(!0)),l=ma(1.3);l.visible=!1,n.add(l);const u=new Ie(ui.sites.patupaiarehe.fog.colour),h=Nu(`rgba(${Math.round(u.r*255)}, ${Math.round(u.g*255)}, ${Math.round(u.b*255)}, 0.55)`,`rgba(${Math.round(u.r*255)}, ${Math.round(u.g*255)}, ${Math.round(u.b*255)}, 0.22)`),d=14,p=Array.from({length:d},()=>t(h)),m=Array.from({length:d},(b,R)=>{const T=R*2.39996,_=ui.cryptidArea.radius*.85*Math.sqrt((R+.5)/d);return{dx:Math.cos(T)*_,dz:Math.sin(T)*_,s:7+R%3*2.5,ph:R*.7}}),S=Nu("rgba(214, 236, 255, 0.9)","rgba(170, 206, 240, 0.35)"),f=t(S,{blending:Ii});let g={},E=!1;function w(){r.visible=!1,s.visible=!1,a.visible=!1,o.visible=!1,c.visible=!1,l.visible=!1;for(const b of p)b.visible=!1;f.visible=!1}function v(b,R,T,{nowMs:_=0,stillSeconds:y=0,kelpiiDown:C=!1}={}){if(!b||b.length===0)return w(),g={},g;g=_M(b,R.x,R.z);const D=_/1e3;for(const I of b){const U=g[I.id]??0;if(I.id==="grotto_mermaids"){s.visible=!0,s.position.set(I.x,I.y,I.z),s.scale.set(2.2,2.2,1),s.position.y+=1.1-.2,nn(s,T),a.visible=!0,a.position.set(I.x-.9,I.y+.03,I.z-1.6),a.scale.setScalar(1.35);const O=!E&&vM({site:I,px:R.x,pz:R.z,stillSeconds:y});if(r.visible=O,O){const L=Math.min(1,(y-ui.sites.grotto_mermaids.stillSeconds)/1.2+.15);r.material.opacity=.55*L;const V=Math.sin(D*.35)*.4;if(!I.water){r.visible=!1;continue}r.position.set(I.water.x+V,-.02,I.water.z),r.scale.set(6,3,1),r.rotation.z=.5+Math.sin(D*.2)*.08}}else if(I.id==="moana_kelpii"){const O=U>0,L=O&&!C&&Wd(I,R.x,R.z);o.visible=O&&!L,c.visible=L,l.visible=O;const V=L?c:o;O&&(V.position.set(I.x,I.y+(L?2.2:.55),I.z),V.scale.set(L?3.6:3.2,L?4.4:1.4,1),nn(V,T),l.position.set(I.x,I.y+.03,I.z),l.scale.setScalar(L?.7:1.4))}else if(I.id==="patupaiarehe"){const O=U>.02;for(let L=0;L<p.length;L++){const V=p[L];if(V.visible=O,!O)continue;const G=m[L],Z=Math.sin(D*.18+G.ph)*.5;V.position.set(I.x+G.dx+Z,I.y+1.2+Math.sin(D*.11+G.ph)*.3,I.z+G.dz),V.scale.set(G.s,G.s*.62,1),V.material.opacity=.28+.42*U,nn(V,T)}if(f.visible=O,O){const L=.55+Math.sin(D*.9)*.25;f.position.set(I.x+3.5,I.y+1.9+Math.sin(D*.5)*.15,I.z-2.5),f.scale.setScalar(1.4+.5*U),f.material.opacity=(.35+.65*U)*L,nn(f,T)}}}return g}return{update:v,hide:w,get warmth(){return{...g}},get positions(){const b=R=>R.visible?{x:R.position.x,y:R.position.y,z:R.position.z}:null;return{shape:b(r),driftwood:b(c)??b(o),rock:b(s)}},set holdShape(b){E=!!b},get shown(){return{shape:r.visible,rock:s.visible,lying:o.visible,standing:c.visible,fog:p.filter(b=>b.visible).length,cold:f.visible}}}}const wr=Ye.progression,EM=["doorway","karu"];function Yl(n,e=wr.recipient){let t=0,i=0;for(const r of n??[])r.to===e&&(r.tier===5?t++:r.tier>=6&&i++);return{epicsGiven:t,epicEpicsGiven:i,doorway:t>=wr.doorwayAt,karu:i>=wr.karuAt}}function wM(n,e){const t=new Set(e??[]);return EM.filter(i=>n[i]&&!t.has(i))}function TM(n){return ms.recipients[wr.recipient]?.milestones?.[n]??""}function AM(n){return n?.doorway?wr.afterDoorwayPityMult:1}const gs=wr,RM={greet:"the eye turns to you. it does not blink.",enterWorld:"it goes through first.",elsewhere:"it looks at the place for a long time, then at you.",thisWay:"it drifts on. it waits when you stop.",home:"it is still with you."},CM=400,PM={sizeMetres:1,ink:"#2b2118",ringWidth:.11,haloAlpha:.22},DM={hoverMetres:2,aheadMin:3,aheadMax:4,driftSpeed:3.2,catchUpDistance:9,catchUpSpeed:6,stillSpeed:.3,bobMetres:.12,bobHz:.45,groundClearance:1.2,steerStepDeg:15,steerMaxDeg:150,steerLineStepMetres:.5,preferDryWithinDeg:60,stuckSec:6,stuckProgressMetres:.75,stuckSteerMaxDeg:180,spawnAtHer:{x:2.5,z:5},spawnAfterCrossing:{x:1,z:-2}},IM={fps:8,frames:3,minSec:6,maxSec:11,firstBlinkDelaySec:4},LM={heightMetres:40,widthMetres:2.4,colour:"#ffd08a",alpha:.8,flickerHz:.8},Aa={lines:RM,lineDelayMs:CM,glyph:PM,motion:DM,blink:IM,light:LM},Ut=Aa.motion,qi=Aa.blink;function NM({px:n,pz:e,fx:t,fz:i,target:r=null,walkable:s=null,dryAt:a=null,wide:o=!1,prevOff:c=0}){const l=(Ut.aheadMin+Ut.aheadMax)/2;let u=t,h=i;if(r){const w=r.x-n,v=r.z-e,b=Math.hypot(w,v);if(b<l)return{x:r.x,z:r.z,off:0,dry:!0};u=w/b,h=v/b}const d={x:n+u*l,z:e+h*l,off:0,dry:!0};if(!s)return d;const p=Math.atan2(u,h),m=Ut.steerStepDeg*(Math.PI/180),S=(o?Ut.stuckSteerMaxDeg:Ut.steerMaxDeg)*(Math.PI/180),f=(o?Ut.stuckSteerMaxDeg:Ut.preferDryWithinDeg)*(Math.PI/180),g=w=>{const v=p+w,b=n+Math.sin(v)*l,R=e+Math.cos(v)*l;return UM(s,n,e,b,R)?{x:b,z:R,off:w,dry:a?a(b,R):!0}:null};let E=null;e:for(let w=0;w<=S+1e-9&&!(E&&w>f+1e-9);w+=m)for(const v of w===0?[1]:[1,-1]){const b=g(v*w);if(b){if(b.dry&&w<=f+1e-9){E=b;break e}if(E||(E=b),!a)break e}}if(!E)return d;if(E.off===0)return E;if(c!==0&&Math.abs(c)<=S+1e-9){const w=g(c);if(w&&(w.dry||!E.dry))return w}return E}function UM(n,e,t,i,r){const s=Math.hypot(i-e,r-t),a=Math.max(1,Math.ceil(s/Ut.steerLineStepMetres));for(let o=1;o<=a;o++){const c=o/a;if(!n(e+(i-e)*c,t+(r-t)*c))return!1}return!0}function FM(n,e){if(e<0||n<e)return 0;const t=Math.floor((n-e)/1e3*qi.fps);return t<vl.length?vl[t]:0}const vl=(()=>{const n=Math.max(2,qi.frames),e=Array.from({length:n},(i,r)=>r),t=e.slice(1,-1).reverse();return e.concat(t)})();function OM(){return vl.length/qi.fps*1e3}function kM(n=Math.random){const e={present:!1,x:0,y:0,z:0,goal:{x:0,z:0},goalOff:0,last:null,blinkStartMs:-1,nextBlinkMs:-1,bobT:0,targetKey:"",bestTargetD:1/0,noProgressSec:0,escaping:!1},t=s=>s+(qi.minSec+n()*(qi.maxSec-qi.minSec))*1e3;function i(s,a){e.present=s,s&&a&&(e.x=a.x,e.z=a.z,e.goal={x:a.x,z:a.z},e.goalOff=0,e.last=null,e.targetKey="",e.bestTargetD=1/0,e.noProgressSec=0,e.escaping=!1,e.blinkStartMs=-1,e.nextBlinkMs=-1)}function r({dt:s,nowMs:a,player:o,target:c=null,heightAt:l,walkable:u=null,dryAt:h=null}){if(!e.present)return;const d=e.last?Math.hypot(o.x-e.last.x,o.z-e.last.z):0,p=s>0?d/s:0;if(c){const b=`${c.x}:${c.z}`;b!==e.targetKey&&(e.targetKey=b,e.bestTargetD=1/0,e.noProgressSec=0);const R=Math.hypot(c.x-o.x,c.z-o.z);R<e.bestTargetD-Ut.stuckProgressMetres||e.bestTargetD===1/0?(e.bestTargetD=R,e.noProgressSec=0):e.noProgressSec+=s,e.noProgressSec>=Ut.stuckSec&&(e.escaping=!0)}if((!c||h&&h(o.x,o.z))&&(e.escaping=!1,e.noProgressSec=0),!e.last||p>=Ut.stillSpeed||c){const b=NM({px:o.x,pz:o.z,fx:Math.sin(o.yaw),fz:Math.cos(o.yaw),target:c,walkable:u,dryAt:h,wide:e.escaping,prevOff:e.goalOff});e.goal={x:b.x,z:b.z},e.goalOff=b.off}e.last={x:o.x,z:o.z};const m=e.goal.x-e.x,S=e.goal.z-e.z,f=Math.hypot(m,S),E=(Math.hypot(o.x-e.x,o.z-e.z)>Ut.catchUpDistance?Ut.catchUpSpeed:Ut.driftSpeed)*s;if(f>1e-4){const b=Math.min(f,E);e.x+=m/f*b,e.z+=S/f*b}e.bobT+=s;const w=Math.sin(e.bobT*Math.PI*2*Ut.bobHz)*Ut.bobMetres,v=l(e.x,e.z);e.y=Math.max(v+Ut.groundClearance,v+Ut.hoverMetres+w),e.nextBlinkMs<0&&(e.nextBlinkMs=a+qi.firstBlinkDelaySec*1e3),e.blinkStartMs>=0&&a-e.blinkStartMs>=OM()&&(e.blinkStartMs=-1,e.nextBlinkMs=t(a)),e.blinkStartMs<0&&a>=e.nextBlinkMs&&(e.blinkStartMs=a),e.lastNowMs=a}return{setPresent:i,update:r,get present(){return e.present},get pos(){return{x:e.x,y:e.y,z:e.z}},get goal(){return{...e.goal}},get escaping(){return e.escaping},get blinkFrame(){return FM(e.lastNowMs??0,e.blinkStartMs)},line(s){return Aa.lines[s]??""},serialize(){return{present:e.present,x:e.x,z:e.z}},restore(s){if(!s){i(!1);return}i(!!s.present,{x:s.x??0,z:s.z??0})}}}const Lr=Aa,Mr=Lr.glyph,Ti=Lr.light;function zM(n){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d"),r=128/2,s=128/2,a=44,o=Math.max(3,a*(1-n)),c=i.createRadialGradient(r,s,a*.6,r,s,a*1.4);c.addColorStop(0,`rgba(255, 246, 220, ${Mr.haloAlpha})`),c.addColorStop(1,"rgba(255, 246, 220, 0)"),i.fillStyle=c,i.fillRect(0,0,128,128);const l=new Path2D;for(let h=0;h<=72;h++){const d=h/72*Math.PI*2,p=1+Math.sin(d*5+.4)*.035+Math.sin(d*3-1.1)*.025,m=r+Math.cos(d)*a*p,S=s+Math.sin(d)*o*p;h===0?l.moveTo(m,S):l.lineTo(m,S)}l.closePath(),i.strokeStyle=Mr.ink,i.lineWidth=a*Mr.ringWidth*2,i.lineJoin="round",i.stroke(l),i.fillStyle=Mr.ink,i.beginPath(),i.ellipse(r,s,a*.34,o*.34,0,0,Math.PI*2),i.fill(),i.strokeStyle=Mr.ink,i.lineCap="round",i.lineWidth=5,i.beginPath(),i.moveTo(r+a*.95,s-o*.55),i.quadraticCurveTo(r+a*1.25,s-o*.95-6,r+a*1.4,s-o*1.15-12),i.stroke();const u=new Sn(t);return u.colorSpace=dt,u}function BM(){const t=document.createElement("canvas");t.width=16,t.height=256;const i=t.getContext("2d"),r=i.createLinearGradient(0,256,0,0);r.addColorStop(0,Ti.colour),r.addColorStop(.55,Ti.colour),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,16,256);const s=i.createLinearGradient(0,0,16,0);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(.5,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,1)"),i.globalCompositeOperation="destination-out",i.fillStyle=s,i.fillRect(0,0,16,256);const a=new Sn(t);return a.colorSpace=dt,a}function GM(n){const e=ai.karu;let i=zM(0),r=1;e&&(i=new vd().load(e.png),i.magFilter=Ft,i.minFilter=si,i.generateMipmaps=!0,i.anisotropy=4,i.colorSpace=dt,r=e.w/e.h);const s=e?e.worldHeight:Mr.sizeMetres,a=new $t(s*r,s);a.translate(0,s/2,0);const o=new at(a,new Yt({map:i,transparent:!e,alphaTest:e?.5:0,depthWrite:!!e,side:At,toneMapped:!1}));o.frustumCulled=!1,o.visible=!1,n.add(o);const c=s*.55,l=BM(),u=()=>{const m=new $t(Ti.widthMetres,Ti.heightMetres);m.translate(0,Ti.heightMetres/2,0);const S=new at(m,new Yt({map:l,transparent:!0,depthWrite:!1,blending:Ii,side:At,opacity:Ti.alpha,toneMapped:!1}));return S.frustumCulled=!1,S.visible=!1,n.add(S),S},h=[u(),u()];h[1].rotation.y=Math.PI/2;function d(){o.visible=!1;for(const m of h)m.visible=!1}function p(m,S,f,{door:g=null}={}){if(!m.present){d();return}const E=m.pos;o.visible=!0,o.position.set(E.x,E.y-c,E.z),nn(o,S);const w=!!g,v=.85+.15*Math.sin(f/1e3*Math.PI*2*Ti.flickerHz);for(const b of h)b.visible=w,w&&(b.position.set(g.x,g.y,g.z),b.material.opacity=Ti.alpha*v)}return{update:p,hide:d}}const zt=Ye.worlds,Xd=Math.PI/180;function qd(n,e){const t=n.x,i=n.z+zt.doorway.offsetMetres;return{x:t,y:e.heightAt(t,i),z:i}}function HM(n,e,t,i){const r=Dr(e),s=Dr(t),a=i*i;for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++)for(const l of n(r+o,s+c)){if(l.kind!=="tree"&&l.kind!=="scrub")continue;const u=l.x-e,h=l.z-t;if(u*u+h*h<a)return!0}return!1}function Yd({rng:n,ox:e,oz:t,baseAngle:i,spread:r,min:s,max:a,terrain:o,genScenery:c,relocations:l}){const u=zt.returnDoor;let h=null,d=-1/0;for(let p=0;p<u.samples;p++){const m=i+(n()*2-1)*r,S=s+n()*(a-s),f=e+Math.sin(m)*S,g=t+Math.cos(m)*S;let E=0;const w=o.isSubmerged(f,g)||o.waterDepthAt(f,g)>=u.maxWaterDepth,v=o.slopeAt(f,g)>Ye.epicSiting.maxSlope,b=HM(c,f,g,u.clearance);if(w&&(E-=100),v&&(E-=10),b&&(E-=1),E>d&&(d=E,h={x:f,y:o.heightAt(f,g),z:g,relaxed:!0,relocations:l}),!w&&!v&&!b)return{x:f,y:o.heightAt(f,g),z:g,relaxed:!1,relocations:l}}return h}function VM({seed:n,entry:e,terrain:t,genScenery:i}){const r=pi(n,"return-door");return Yd({rng:r,ox:e.x,oz:e.z,baseAngle:r()*Math.PI*2,spread:Math.PI,min:zt.returnDoor.min,max:zt.returnDoor.max,terrain:t,genScenery:i,relocations:0})}function WM({entry:n,walkable:e}){if(e(n.x,n.z))return{x:n.x,z:n.z};const t=zt.elsewhere,i=Math.ceil(t.entrySearchMetres/t.entrySearchStep);let r=null,s=1/0;for(let a=-i;a<=i;a++)for(let o=-i;o<=i;o++){const c=n.x+a*t.entrySearchStep,l=n.z+o*t.entrySearchStep,u=Math.hypot(a,o)*t.entrySearchStep;u>t.entrySearchMetres||u>=s||e(c,l)&&(r={x:c,z:l},s=u)}return r??{x:n.x,z:n.z}}function XM({seed:n,terrain:e,genScenery:t,player:i,door:r}){const s=r.relocations+1,a=pi(n,"return-door","relocate",s);return Yd({rng:a,ox:i.x,oz:i.z,baseAngle:Math.atan2(i.fx,i.fz),spread:zt.returnDoor.relocateSpreadDeg*Xd,min:zt.returnDoor.relocateMin,max:zt.returnDoor.relocateMax,terrain:e,genScenery:t,relocations:s})}function qM(n,e,t=zt.returnDoor.reachRadius){return e?Math.hypot(e.x-n.x,e.z-n.z)<=t:!1}function YM(n,e){if(!e)return{hear:0,bend:null};const t=zt.returnDoor,i=Math.hypot(e.x-n.x,e.z-n.z);return i>t.hearRadius?{hear:0,bend:null}:{hear:Math.min(1,Math.max(0,1-i/t.hearRadius)),bend:{x:e.x,z:e.z,radius:t.bendRadius,radians:t.bendDegrees*Xd}}}function $d(n,e){if(n.which!=="elsewhere")return zt.worldLabel.home;const t=(e-n.enteredAtMs)/1e3;return!n.karu&&t>=zt.elsewhere.hintAfterSec?zt.worldLabel.elsewhereListen:zt.worldLabel.elsewhere}function Kd({seed:n}){const e=zt.doorway,t=zt.returnDoor,i={seed:n,which:"home",entry:null,returnDoor:null,karu:!1,crossing:!1,fade:0,fadeColour:"#e8763a",_cross:null,holdProgress:0,_holdSince:null,enteredAtMs:0,doorSeen:!1,_floorSpent:0};function r(){return i.karu?e.holdWithKaruMs:e.holdMs}function s(m,S,f){if(i.crossing||i.which!=="home"||!m||i.doorway&&!i.doorway.promptReady)return i._holdSince=null,i.holdProgress=0,!1;const g=r();return g<=0?(i.holdProgress=1,!0):(i._holdSince===null&&(i._holdSince=f),i.holdProgress=Math.min(1,(f-i._holdSince)/g),i.holdProgress>=1?(i._holdSince=null,!0):!1)}function a(m,S,f={}){return i.crossing||m===i.which?!1:(i.crossing=!0,i.fade=0,i.holdProgress=0,i._holdSince=null,i.fadeColour=$M,i._cross={to:m,t0:S,switched:!1,entry:f.entry,returnDoor:f.returnDoor},!0)}function o(){i.which="home",i.entry=null,i.returnDoor=null,i.doorSeen=!1,i._floorSpent=0}function c(m){const S=[],f=i._cross;if(!f)return i.fade=0,S;const g=m-f.t0;if(!f.switched)return i.fade=Math.min(1,g/e.fadeOutMs),g>=e.fadeOutMs&&(f.switched=!0,f.to==="elsewhere"?(i.which="elsewhere",i.entry=f.entry??i.entry,i.returnDoor=f.returnDoor??i.returnDoor,i.enteredAtMs=m,i.doorSeen=!1):o(),S.push("switch")),S;const E=g-e.fadeOutMs;return i.fade=Math.max(0,1-E/e.fadeInMs),E>=e.fadeInMs&&(i.fade=0,i.crossing=!1,i._cross=null,S.push("arrived")),S}function l(m){i.doorSeen=!0}function u(m){return i.which!=="elsewhere"||i.crossing||!i.returnDoor||i.doorSeen||i._floorSpent>=t.maxRelocations||(m-i.enteredAtMs)/1e3<t.lostFloorSec?!1:(i._floorSpent++,!0)}function h(m){i.returnDoor=m}function d(){return{which:i.which,entry:i.entry?{x:i.entry.x,z:i.entry.z}:null,returnDoor:i.returnDoor?{...i.returnDoor}:null,karu:i.karu}}function p(m,S){i.crossing=!1,i._cross=null,i.fade=0,i.holdProgress=0,i._holdSince=null,i.which=m?.which==="elsewhere"?"elsewhere":"home",i.entry=m?.entry?{x:m.entry.x,z:m.entry.z}:null,i.returnDoor=m?.returnDoor?{relaxed:!1,relocations:0,...m.returnDoor}:null,i.karu=!!m?.karu,i.enteredAtMs=S,i.doorSeen=!1,i._floorSpent=i.returnDoor?i.returnDoor.relocations:0}return Object.assign(i,{hold:s,cross:a,update:c,noteDoorOnScreen:l,lostFloorDue:u,setReturnDoor:h,arriveHome:o,snapshot:d,restore:p,holdNeededMs:r})}const $M="#e8763a";function KM(n,e){if(n.scene&&(n.scene.background?.set&&n.scene.background.set(e.sky),n.scene.fog&&(n.scene.fog.color.set(e.fog),n.scene.fog.near=e.fogNear,n.scene.fog.far=e.fogFar)),n.terrainMesh&&(n.terrainMesh.material.color.set(e.terrainTint),n.terrainMesh.material.emissive?.set&&n.terrainMesh.material.emissive.set(e.terrainGlow??"#000000")),n.treeMeshes)for(const t of n.treeMeshes)t.material.color.set(e.foliageTint),t.material.emissive?.set&&t.material.emissive.set(e.foliageGlow??"#000000");n.scrubMesh&&n.scrubMesh.material.color.set(e.scrubTint),n.rockMesh&&n.rockMesh.material.color.set(e.rockTint),n.freshMesh&&(n.freshMesh.material.color.set(e.freshTint),n.freshMesh.material.emissive?.set&&n.freshMesh.material.emissive.set(e.freshGlow)),n.water&&(n.water.visible=!e.hideSea)}const Hn=zt,ZM={sky:"#d8cdb4",fog:"#d8cdb4",fogNear:45,fogFar:130,terrainTint:"#ffffff",foliageTint:"#ffffff",scrubTint:"#ffffff",rockTint:"#ffffff",freshTint:"#ffffff",freshGlow:"#000000",hideSea:!1,terrainGlow:"#000000",foliageGlow:"#000000"},JM={sky:"#e8763a",fog:"#c9633c",fogNear:30,fogFar:130,terrainTint:"#b894cc",foliageTint:"#b98ac4",scrubTint:"#c39bcc",rockTint:"#b9a0c8",freshTint:"#ffc088",freshGlow:"#7a3a1a",hideSea:!0,terrainGlow:"#2a1238",foliageGlow:"#2c0f2a"},Zd={home:ZM,elsewhere:JM},gn=Ye.worlds.elsewhere;function QM(n){return`${n}:elsewhere`}function jM(n){const e=QM(n),t=Ld(e,{inlandOffset:gn.inlandOffset,biomeKey:"elsewhere"}),i=gl(t,e);return{seed:e,world:t,scenery:i,dressing:Zd.elsewhere}}const Fu=mi.items.filter(n=>n.tier===5&&n.biome==="any");function eS(n,e,t){const i=pi(n,"elsewhere","finds"),r=gn.findsMin+Math.floor(i()*(gn.findsMax-gn.findsMin+1)),s=[],a=Math.PI*2/r;for(let o=0;o<r;o++){let c=null;for(let u=0;u<gn.findsAttempts&&!c;u++){const h=a*o+i()*a,d=gn.findsRadiusMin+i()*(gn.findsRadiusMax-gn.findsRadiusMin),p=e.x+Math.sin(h)*d,m=e.z+Math.cos(h)*d;t.isSubmerged(p,m)||t.waterDepthAt(p,m)>=gn.findsMaxWaterDepth||t.slopeAt(p,m)>Ye.epicSiting.maxSlope||(c={x:p,z:m})}c||(c={x:e.x+Math.sin(a*o)*gn.findsRadiusMin,z:e.z+Math.cos(a*o)*gn.findsRadiusMin});const l=Fu[Math.floor(i()*Fu.length)];s.push({id:`elsewhere:${o}`,itemId:l.id,tier:5,x:c.x,y:t.heightAt(c.x,c.z),z:c.z,rot:i()*Math.PI*2,biome:"elsewhere",nearWater:!1,tierRoll:0,itemRoll:0,isAuthored:!0})}return s}const Ou=Zd,ku=gn,zu=4,Bu=12,tS=Ye.worlds.doorway;function nS(n){const t=document.createElement("canvas");t.width=256,t.height=256;const i=t.getContext("2d"),r=256/2,s=256/2,a=new Path2D;for(let l=0;l<=96;l++){const u=l/96*Math.PI*2,h=1+Math.sin(u*5+n*1.3)*.035+Math.sin(u*11+n*2.1)*.02+Math.sin(u*3-n*.7)*.018,d=r+Math.cos(u)*88*h;let p=s+Math.sin(u)*112*h;p>s+100&&(p=s+100+(p-s-100)*.35),l===0?a.moveTo(d,p):a.lineTo(d,p)}a.closePath(),i.save(),i.clip(a);const o=i.createLinearGradient(0,s-116,0,s+116);o.addColorStop(0,"#241443"),o.addColorStop(.42,"#7b3b6a"),o.addColorStop(.72,"#e8763a"),o.addColorStop(1,"#ffd08a"),i.fillStyle=o,i.fillRect(0,0,256,256),i.restore(),i.save(),i.clip(a),i.strokeStyle="rgba(255, 196, 120, 0.55)",i.lineWidth=14,i.stroke(a),i.restore(),i.strokeStyle="#2b2118",i.lineWidth=7,i.lineJoin="round",i.stroke(a);const c=new Sn(t);return c.colorSpace=dt,c}function iS(){const n=document.createElement("canvas");n.width=32,n.height=256;const e=n.getContext("2d"),t=e.createLinearGradient(0,256,0,0);t.addColorStop(0,"rgba(255, 236, 190, 0.85)"),t.addColorStop(.35,"rgba(255, 214, 140, 0.40)"),t.addColorStop(1,"rgba(255, 200, 120, 0)"),e.fillStyle=t,e.fillRect(0,0,32,256);const i=e.createLinearGradient(0,0,32,0);i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(.3,"rgba(0,0,0,0)"),i.addColorStop(.7,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=i,e.fillRect(0,0,32,256);const r=new Sn(n);return r.colorSpace=dt,r}function rS(n){const e=Array.from({length:zu},(l,u)=>nS(u)),t=new $t(1,1);t.translate(0,.5,0);const i=new at(t,new Yt({map:e[0],transparent:!1,alphaTest:.5,side:At,toneMapped:!1}));i.frustumCulled=!1,i.visible=!1,n.add(i);const r=new at((()=>{const l=new ps(.72,1,40);return l.rotateX(-Math.PI/2),l})(),new Yt({color:"#ffd08a",transparent:!0,depthWrite:!1,side:At,toneMapped:!1}));r.frustumCulled=!1,r.visible=!1,n.add(r);const s=new $t(1,1);s.translate(0,.5,0);const a=new at(s,new Yt({map:iS(),transparent:!0,depthWrite:!1,blending:Ii,side:At,toneMapped:!1}));a.frustumCulled=!1,a.visible=!1,n.add(a);function o(){i.visible=!1,r.visible=!1,a.visible=!1}function c(l,u,h){if(!l){o();return}const d=Math.floor(h/1e3*Bu)%zu,p=Math.min(1,Math.max(0,l.hold??0));i.visible=!0,i.material.map=e[d],i.position.set(l.x,l.y,l.z);const m=tS.archMetres*(1+p*.08);if(i.scale.set(m*.8,m,1),nn(i,u),r.visible=p>.001,r.visible&&(r.position.set(l.x,l.y+.04,l.z),r.scale.setScalar(1.6-p*.5),r.material.opacity=.25+p*.6),a.visible=!!l.karu,a.visible){const S=Math.floor(h/1e3*Bu),f=1+.06*Math.sin(S*.35);a.position.set(l.x,l.y,l.z),a.scale.set(2.2*f,42,1),nn(a,u)}}return{update:c,hide:o,mesh:i,column:a}}function sS(n){const e=document.createElement("div");e.id="world-fade",e.hidden=!0,n.appendChild(e);let t=0;function i(r,s){if(t=Math.min(1,Math.max(0,r)),t<=.001){e.hidden||(e.hidden=!0);return}e.hidden&&(e.hidden=!1),e.style.background=s,e.style.opacity=String(t)}return{set:i,el:e,get opacity(){return t}}}const Gu=2.2,Hu=1.8,Vu=25*(Math.PI/180),Ml=6*(Math.PI/180),_a=9,Js=3,aS=.5;function Tr(n,e,t){return n.hasSea&&n.inlandAt(e,t)<12?n.heightAt(e,t)>n.SEA_LEVEL+.12:n.waterDepthAt(e,t)<aS}const oS=(n,e)=>Tr(Ve,n,e),lS=(n,e)=>Ve.waterDepthAt(n,e)<=0,Kr={x:0,y:0,z:0,hold:0},cS=new URLSearchParams(location.search);let hn=cS.get("seed")??"lil-bitz";const tt=new wf,Jd=new Ie("#d8cdb4");tt.background=Jd;tt.fog=new Fl(Jd,45,130);const He=new un(58,window.innerWidth/window.innerHeight,.1,400),vn=new $_({antialias:!0,preserveDrawingBuffer:!0});vn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));vn.setSize(window.innerWidth,window.innerHeight);vn.outputColorSpace=dt;document.body.appendChild(vn.domElement);tt.add(new Yf("#fff4dd","#7d7355",2.1));const Qd=new Zf("#fff0cc",1.35);Qd.position.set(30,60,18);tt.add(Qd);function jd(n){const e=Ld(n),t=gl(e,n),i=pM(e,n,t.genScenery),r=gl(e,n,{clearings:i.map(o=>({x:o.x,z:o.z,r:ui.landing.clearingMetres}))}),s=mM(i,n,e);for(const o of s)_n.force(o.id,{tier:o.tier,itemId:o.itemId});const a=jM(n);return{home:{world:e,scenery:r,sites:i,finds:s,palette:Ou.home},elsewhere:{world:a.world,scenery:a.scenery,sites:[],finds:[],palette:Ou.elsewhere}}}const _n=Lv();let pt=jd(hn),Ve=pt.home.world,ii=Nd({heightAt:Ve.heightAt,forestnessAt:Ve.forestnessAt,freshSurfaceAt:Ve.freshSurfaceAt});tt.add(ii.mesh);const xa=xx(Ve.SEA_LEVEL);tt.add(xa);let Ri=Ud({freshSurfaceAt:Ve.freshSurfaceAt});tt.add(Ri.mesh);let eh=pt.home.scenery;const ts=Gx(tt),th=rS(tt),Sr=bM(tt),uS=GM(tt),Wu=vx(tt),la=Mx();tt.add(la);const dS=Wv(tt);let $l="player";const Pi=Fd({texture:Vl(ai.player.png,vn),worldHeight:ai.player.worldHeight,aspect:ai.player.w/ai.player.h});tt.add(Pi);function hS(n){const e=ai[n];if(!e)return!1;$l=n,Pi.geometry.dispose();const t=e.worldHeight*(e.w/e.h),i=new $t(t,e.worldHeight);return i.translate(0,e.worldHeight/2,0),Pi.geometry=i,Pi.material.map=Vl(e.png,vn),Pi.material.needsUpdate=!0,!0}const nh=ma(.55);tt.add(nh);const Ra=[{id:"trinket_maker",x:5,z:27},{id:"wanderer_a",x:-26,z:62},{id:"wanderer_b",x:30,z:96}],ls=Ra.map(n=>{const e=ai[n.id],t=Fd({texture:Vl(e.png,vn),worldHeight:e.worldHeight,aspect:e.w/e.h}),i=ma(.5);return tt.add(t),tt.add(i),{...n,mesh:t,shadow:i,def:e}}),je=_x(),Ct=fx(window),Jt=Hx(document.body),yt=tv(document.body),fS=gx(Ct,document.body),Xu=dv(document.body),Qt=_v(),oi=xv(),Le=Bv(),pS=sS(document.body);let Ce=Kd({seed:hn});const mt=kM(),_s=MM(),M={x:0,z:8,yaw:Math.PI,tMs:0,envMs:0,nearest:null,collected:0,epicTicks:0,lastEpicAtMs:-1e9,epicActive:!1,epicCounts:{natural:0,granted:0},wonderDry:0,k:0,trail:[],epicPending:!1,epicTier:5,epicPendingItem:null,epicRetryAtMs:0,epicSiteAttempts:0,epicRelocations:0,epicFellBack:!1,epicObjects:[],recentVo:[],knownCreatures:[],giveLockUntilMs:-1,lastReaction:"",milestonesSeen:[],sayQueue:[],owedGrants:[],epicGrantSite:null,epicGranted:!1,epicGrantedBy:null,progression:Yl([]),doorRefusedShown:!1,kelpiiDown:!1,doorwayPromptAfterMs:0,elsewhereFirstOfferDone:!1,lastMovedMs:0,pityMult:1,lastSay:null,started:!1};let Vn=qd(Ra[0],pt.home.world),Ji=[],Wn=[],va="";function Ca(n=!1){const e=Dr(M.x),t=Dr(M.z),i=`${e}:${t}`;if(!(!n&&i===va)){va=i,Ji=[],Wn=[];for(let r=-Js;r<=Js;r++)for(let s=-Js;s<=Js;s++)Ji.push(...Ve.genChunk(e+r,t+s)),Wn.push(...eh.genScenery(e+r,t+s));cs=!0}}let cs=!0,Mo=[];function ih(){if(!cs)return Mo;cs=!1;const n=pt[Ce.which].finds;return Mo=!M.epicObjects.length&&!n.length?Ji:Ji.concat(M.epicObjects,n),Mo}function mS(n){let e=null,t=Hu,i=null,r=Hu;for(const s of n){if(je.has(s.id))continue;const a=Math.hypot(s.x-M.x,s.z-M.z);a<t&&(t=a,e=s),s.isEpic&&a<r&&(r=a,i=s)}return i??e}function gS(n,e,t){const i=t*t;for(const r of Wn){if(r.kind!=="tree"&&r.kind!=="scrub")continue;const s=r.x-n,a=r.z-e;if(s*s+a*a<i)return!1}return!0}const tn=new un(58,16/9,.1,400),xn=new z,_S=new Ie;function xS(){const n=Ve.heightAt(M.x,M.z),e=_a*Math.cos(Ml),t=_a*Math.sin(Ml);tn.fov=58*.92,tn.aspect=He.aspect,tn.position.set(M.x+Math.sin(M.yaw)*e,n+t+1.7,M.z+Math.cos(M.yaw)*e),tn.lookAt(M.x,n+1.35,M.z),tn.updateMatrixWorld(!0),tn.updateProjectionMatrix()}function Pa(){const n=Ye.epicSequence.modes[(M.epicTier??5)>=6?"escalated":vS(M.epicCounts.natural)]??Ye.epicSequence.modes.full;return .5*Ye.epicSequence.gravity*n.fall*n.fall}function vS(n){for(const e of Ye.epicSequence.ladder)if(n<=e.upTo)return e.mode;return"quick"}function Sl(n,e,t){const i=e+Pa(),r=l=>(xn.set(n,l,t).project(tn),xn),s=Ye.epicSequence.mouthMetres/2*1.12,a=r(i+s).y,o=r(i-s).y,c=r(i).x;return a<.82&&o>-.85&&Math.abs(c)<.5?!Kl(tn.position,n,i,t):!1}function qu(n,e,t){const i=e+Pa(),r=Ye.epicSiting.visibleMargin;return xn.set(n,i,t).project(tn),Math.abs(xn.x)<r&&Math.abs(xn.y)<r&&xn.z<1?!Kl(tn.position,n,i,t):!1}function So(n){const e=Ye.epicSiting.visibleMargin;return xn.set(n.x,n.y,n.z).project(tn),Math.abs(xn.x)<e&&Math.abs(xn.y)<e&&xn.z<1?!Kl(tn.position,n.x,n.y,n.z):!1}function Yu(n,e,t){return xn.set(n,e+Pa(),t).project(tn),Math.abs(xn.x)}function Kl(n,e,t,i){const r=Ye.epicSiting,s=e-n.x,a=i-n.z,o=s*s+a*a;if(o<1e-6)return!1;for(const c of Wn){if(c.kind!=="tree")continue;const l=((c.x-n.x)*s+(c.z-n.z)*a)/o;if(l<=.08||l>=1)continue;const u=n.x+s*l,h=n.z+a*l,d=c.scale??6,p=Math.max(r.canopyRadius,d*r.canopyRadiusOfHeight);if((c.x-u)**2+(c.z-h)**2>p*p)continue;const m=n.y+(t-n.y)*l,S=c.y??Ve.heightAt(c.x,c.z);if(m>S+d*r.canopyBandFrom&&m<S+d)return!0}return!1}function rh(){return xS(),{px:M.x,pz:M.z,fx:-Math.sin(M.yaw),fz:-Math.cos(M.yaw),heightAt:Ve.heightAt,slopeAt:Ve.slopeAt,isSubmerged:Ve.isSubmerged,seaLevel:Ve.SEA_LEVEL,isClear:gS,isInFrame:Sl,rng:pi(hn,"epic-site",M.epicCounts.natural+M.epicCounts.granted,M.epicSiteAttempts)}}function sh(n){const e=oa.items.filter(t=>t.tier===n);return e.length===0?oa.items.find(t=>t.id==="portal_shard")??oa.items[0]:e[Math.floor(Math.random()*e.length)]}function Zl(n=5,{granted:e=!1,site:t=null,by:i=null}={}){e||(M.epicTicks=0,M.lastEpicAtMs=M.tMs),M.epicCounts=Cv(M.epicCounts,e),M.epicGranted=e,M.epicGrantedBy=e?i:null,M.epicActive=!0,M.epicPending=!0,M.epicTier=n,M.epicRetryAtMs=M.tMs,M.epicSiteAttempts=0,M.epicRelocations=0,M.epicGrantSite=t,e||oi.onEpicDelivered()}function ah(){if(!M.epicPending||M.tMs<M.epicRetryAtMs)return;const n=rh();let e=kd(n);if(M.epicSiteAttempts++,M.epicSiteAttempts===1&&(M.epicFellBack=!1),!e){if(M.epicSiteAttempts<os.maxRelocations){M.epicRetryAtMs=M.tMs+os.retrySeconds*1e3;return}e=M.epicGrantSite?Iu(Ve,M.epicGrantSite,{px:n.px,pz:n.pz,fx:n.fx,fz:n.fz,isInFrame:Sl,isVisible:qu,frameOffset:Yu,avoid:pt.home.finds.filter(o=>!je.has(o.id))}):xl(n),M.epicFellBack=!0}const t=M.epicTier??5,i=sh(t),r=t>=6,s=kv(M.recentVo,Math.random,r);M.recentVo.unshift(s),M.recentVo.length=Math.min(M.recentVo.length,8);const a=[];for(let o=0;o<12;o++){const c=M.epicCounts.natural+M.epicCounts.granted;Le.start({site:e,count:M.epicCounts.natural,tier:t,line:s,subLine:i.name,rng:pi(hn,"epic-drift",c,o)});const l=Le.portal2Planned;l&&!So(l)&&Le.flipAcross();const u=So(Le.portalPlanned??Le.portal2Planned??{x:e.x,y:e.y+Pa(),z:e.z}),h=!Le.portal2Planned||So(Le.portal2Planned);if(u&&h||!M.epicGranted||!M.epicGrantSite)break;a.push({x:e.x,z:e.z});const d=Iu(Ve,M.epicGrantSite,{px:n.px,pz:n.pz,fx:n.fx,fz:n.fz,isInFrame:Sl,isVisible:qu,frameOffset:Yu,avoid:pt.home.finds.filter(p=>!je.has(p.id)),reject:a});if(!d||Math.abs(d.x-e.x)<.5&&Math.abs(d.z-e.z)<.5)break;e=d,M.epicFellBack=!0}M.epicPendingItem=i,M.epicPending=!1}function MS(){const n=Le.site,e=Le.tier,t=M.epicPendingItem??sh(e),i={id:Dv(M.epicCounts,M.epicGranted),itemId:t.id,tier:e,x:n.x,y:Ve.heightAt(n.x,n.z),z:n.z,rot:Math.random()*Math.PI*2,biome:"beach",tierRoll:0,itemRoll:0,isEpic:!0,granted:M.epicGranted,grantedBy:M.epicGrantedBy};_n.force(i.id,{tier:e,itemId:t.id}),M.epicObjects.push(i),cs=!0}function SS(){for(const n of M.epicObjects){if(!$v(n,M.x,M.z))continue;const e=rh(),t=M.epicRelocations<os.maxRelocations?kd(e)??xl(e):xl(e);M.epicRelocations++,n.x=t.x,n.z=t.z,n.y=Ve.heightAt(t.x,t.z)}}function yS(){return oh}let oh=[];function lh(){oh=Ce.which==="home"?ls.concat(gM(pt.home.sites)):[]}lh();function bS(){if(Ce.which!=="home")return null;const n=pt.home.sites.find(t=>t.kind==="place");return!n||Math.hypot(n.x-M.x,n.z-M.z)>ui.cryptidArea.radius?null:{id:n.id,x:n.x,z:n.z,place:!0,site:n}}function Qr(){return Qv(yS(),M.x,M.z)??bS()}function xs(n,e){n&&(Jt.say(n,e),M.lastSay={text:n,atMs:M.tMs,ms:e})}function ch(n){const e=wa(n.id);if(!e)return;yt.show(e.name,je.items,n.place?{head:e.leaveHead}:{head:e.giveHead??null});const t=n.id==="moana_kelpii"&&(M.kelpiiDown||!Wd(pt.home.sites.find(i=>i.id===n.id),M.x,M.z));xs(t&&e.greetingDown||e.greeting,Gn.reactionMs),Qt.unlock()}function ns(n,e,{milestone:t,then:i}={}){const r=M.sayQueue[M.sayQueue.length-1],s=Math.max(M.tMs+e,r?r.at+gs.delayMs:0);M.sayQueue.push({text:n,at:s,ms:Gn.reactionMs,milestone:t,then:i})}function ES(){const n=M.sayQueue[0];!n||M.tMs<n.at||(M.sayQueue.shift(),xs(n.text,n.ms),M.giveLockUntilMs=Math.max(M.giveLockUntilMs,M.tMs+n.ms),n.then?.())}function uh(n){const e=M.progression,t=new Set(M.sayQueue.map(i=>i.milestone).filter(Boolean));for(const i of wM(e,M.milestonesSeen))t.has(i)||ns(TM(i),n,{milestone:i,then:()=>dh(i)})}function dh(n){M.milestonesSeen.includes(n)||M.milestonesSeen.push(n),n==="doorway"&&(M.doorwayPromptAfterMs=M.tMs+Gn.reactionMs),n==="karu"&&hh()}function hh(){const n=Ra[0],e=Lr.motion.spawnAtHer;Ce.karu=!0,mt.setPresent(!0,{x:n.x+e.x,z:n.z+e.z}),ns(mt.line("greet"),gs.delayMs)}function yr(){return M.milestonesSeen.includes("doorway")}function fh(n){if(!n||M.tMs<M.giveLockUntilMs)return;const e=yt.selected;if(!e)return;const t=Jv({recipientId:n.id,tier:e.tier,knownCreatures:M.knownCreatures,rng:Math.random});if(!t.accepted)return;const i=Gn.sacrificeIsReal;if(!je.give(e.id,n.id,M.tMs,i))return;oi.onGive(e.tier),Qt.give(e.tier),xs(t.line,Gn.reactionMs),M.lastReaction=t.line,M.giveLockUntilMs=M.tMs+Gn.reactionMs;let s=t.sighting;if(s&&M.knownCreatures.length===0){const o=wa(n.id),c=xM(pt.home.sites,n.x,n.z)[0],l=o?.sightings?.find(u=>u.site===c?.id);l&&(s={creature:l.creature,line:l.lines[Math.floor(Math.random()*l.lines.length)]})}s&&(M.knownCreatures.includes(s.creature)||M.knownCreatures.push(s.creature),Jt.sighting(s.creature,s.line));const a=Vd(n.id,e.tier);a&&!n.place&&(yt.hide(),M.owedGrants.push({tier:a.tier,at:M.tMs+ui.grant.lineHoldMs,siteId:n.id}),n.id==="moana_kelpii"&&(M.kelpiiDown=!0)),n.place&&(a&&_s.leave(n.id,M.tMs,e.tier),yt.hide()),M.progression=Yl(je.ledger),uh(gs.delayMs),yt.remove(e.id),M.collected=je.total,je.items.length===0&&yt.hide(),vs(!0)}function wS(){const n=M.owedGrants[0];if(!n||M.tMs<n.at||M.epicActive||M.epicPending)return;M.owedGrants.shift();const e=Ce.which==="home"?pt.home.sites.find(t=>t.id===n.siteId)??null:null;Zl(n.tier,{granted:!0,site:e,by:n.siteId??null})}function Jl(n){const e=pt[n];Ve=e.world,eh=e.scenery,tt.remove(ii.mesh),ii=Nd({heightAt:Ve.heightAt,forestnessAt:Ve.forestnessAt,freshSurfaceAt:Ve.freshSurfaceAt}),tt.add(ii.mesh),tt.remove(Ri.mesh),Ri=Ud({freshSurfaceAt:Ve.freshSurfaceAt}),tt.add(Ri.mesh),KM({scene:tt,terrainMesh:ii.mesh,treeMeshes:ts.trees.values(),scrubMesh:ts.groups.get("scrub"),rockMesh:ts.groups.get("rock"),freshMesh:Ri.mesh,water:xa},e.palette);const t=n==="home";for(const i of ls)i.mesh.visible=t,i.shadow.visible=t;if(t)th.hide();else{Sr.hide(),Qt.ambientVoice(1/0,M.tMs);const i=Ce.entry??{x:M.x,z:M.z};e.finds=eS(hn,i,Ve);for(const r of e.finds)_n.force(r.id,{tier:r.tier,itemId:r.itemId})}Qt.doorHum(0),M.epicObjects=[],M.nearest=null,M.epicPending&&(M.epicRetryAtMs=M.tMs,M.epicSiteAttempts=0,M.epicGrantSite=null),lh(),Ji=[],Wn=[],va="",Ca(!0),ii.update(M.x,M.z,!0),Ri.update(M.x,M.z,!0)}function ph(){return Le.active||M.epicObjects.length>0}function yl(n){if(ph())return!1;if(n==="elsewhere"){const e=pt.elsewhere,t=WM({entry:{x:Vn.x,z:Vn.z},walkable:(r,s)=>Tr(e.world,r,s)}),i=VM({seed:hn,entry:t,terrain:e.world,genScenery:e.scenery.genScenery});return Ce.cross("elsewhere",M.tMs,{entry:t,returnDoor:i})?(mt.present&&xs(mt.line("enterWorld"),Gn.reactionMs),!0):!1}return Ce.cross("home",M.tMs)}function TS(){if(Ce.which==="elsewhere"){const e=Ce.entry??{x:0,z:8};M.x=e.x,M.z=e.z,M.elsewhereFirstOfferDone=!1}else M.x=Vn.x,M.z=Vn.z+Hn.doorway.arriveOffsetMetres,M.yaw=0;M.trail=[],Jl(Ce.which);const n=Lr.motion.spawnAfterCrossing;mt.present&&mt.setPresent(!0,{x:M.x+n.x,z:M.z+n.z})}function AS(){mt.present&&(Ce.which==="elsewhere"?(ns(mt.line("elsewhere"),Lr.lineDelayMs),ns(mt.line("thisWay"),gs.delayMs)):ns(mt.line("home"),Lr.lineDelayMs))}function $u(){M.doorRefusedShown||(M.doorRefusedShown=!0,xs(Hn.doorway.refusedLine,Gn.reactionMs))}const RS=new z;function CS(){const n=Ce.returnDoor;if(!n||Math.hypot(n.x-M.x,n.z-M.z)>Hn.returnDoor.seenMetres)return!1;He.updateMatrixWorld(!0);const e=RS.set(n.x,n.y+Hn.doorway.archMetres*.5,n.z).project(He);return Math.abs(e.x)<1&&Math.abs(e.y)<1&&e.z<1}function mh(){if(Ce.which==="home")return!0;const n=Ce.returnDoor;return n?Math.hypot(n.x-M.x,n.z-M.z)>Hn.returnDoor.hearRadius:!0}function gh(n){M.tMs+=n*1e3,Le.update(n);const e=Le.dilation();M.envMs+=n*1e3*e;for(const H of Le.takeEvents())H==="tell"&&Qt.epicTell(Ye.epicSequence.modes[Le.mode]?.tell??0),H==="open"&&Jt.epicShow(Le.line,Le.subLine,Le.mode),H==="impact"&&Qt.epicImpact(),H==="deliver"&&MS();for(const H of Ce.update(M.tMs))H==="switch"&&TS(),H==="arrived"&&AS();pS.set(Ce.fade,Ce.fadeColour);const t=M.started,i=Ct.takeCollect()&&t,r=Ct.takeGive()&&t,s=Ct.takeCancel()&&t,a=t?Ct.takeNav():(Ct.takeNav(),0),o=yt.takePick()&&t,c=Qr(),l=yt.open,u=Ce.which==="home",h=ls.find(H=>H.id==="trinket_maker");h&&M.started&&u&&Qt.ambientVoice(Math.hypot(h.x-M.x,h.z-M.z),M.tMs),t&&ES(),l?(a&&yt.move(a),s||r?yt.hide():(i||o)&&fh(c),c||yt.hide()):r&&c&&ch(c);const d=yt.open||!t||Ce.crossing;if(d)Ct.takeYaw();else{M.yaw-=Ct.takeYaw(),M.yaw+=Ct.turn*1.8*n;const{x:H,z:ie}=Ct.axes,te=Math.hypot(H,ie);if(te>0){const ae=Math.sin(M.yaw),we=Math.cos(M.yaw),$e=(H*we+ie*ae)/te,We=(ie*we-H*ae)/te,J=M.x+$e*Gu*n,re=M.z+We*Gu*n,ne=M.x,ge=M.z;Tr(Ve,J,re)?(M.x=J,M.z=re):Tr(Ve,J,M.z)?M.x=J:Tr(Ve,M.x,re)&&(M.z=re),(M.x!==ne||M.z!==ge)&&(M.lastMovedMs=M.tMs)}}Ca();const p=Ct.isDown("KeyE")||Ct.isDown("Space")||Ct.isDown("Enter");let m=!1,S=!1;if(t&&u&&yr()&&!l?(S=Math.hypot(Vn.x-M.x,Vn.z-M.z)<=Hn.doorway.triggerRadius,m=S&&M.tMs>=M.doorwayPromptAfterMs,Ce.hold(m,p,M.tMs)&&!yl("elsewhere")&&$u()):Ce.hold(!1,!1,M.tMs),t&&!u&&!Ce.crossing&&(S=qM({x:M.x,z:M.z},Ce.returnDoor),S&&!yl("home")&&$u(),CS()&&Ce.noteDoorOnScreen(M.tMs),Ce.lostFloorDue(M.tMs))){const H=pt.elsewhere;Ce.setReturnDoor(XM({seed:hn,terrain:H.world,genScenery:H.scenery.genScenery,player:{x:M.x,z:M.z,fx:-Math.sin(M.yaw),fz:-Math.cos(M.yaw)},door:Ce.returnDoor}))}S||(M.doorRefusedShown=!1);const f=!u&&!Ce.crossing?YM({x:M.x,z:M.z},Ce.returnDoor):{hear:0,bend:null};t&&Qt.doorHum(f.hear*Hn.returnDoor.humGain);const g=Ve.heightAt(M.x,M.z);Pi.position.set(M.x,g,M.z),nh.position.set(M.x,g+.02,M.z);const E=Le.framing,w=Vu+(Ml-Vu)*E,v=_a*Math.cos(w),b=_a*Math.sin(w);He.position.set(M.x+Math.sin(M.yaw)*v,g+b+1.7,M.z+Math.cos(M.yaw)*v),He.lookAt(M.x,g+1+E*.35,M.z);const R=58*(1-.08*E);He.fov!==R&&(He.fov=R,He.updateProjectionMatrix());const T=Le.shake();(T.rot!==0||T.x!==0)&&(He.position.x+=T.x,He.position.y+=T.y,He.rotateZ(T.rot)),nn(Pi,He);for(const H of ls){const ie=Ve.heightAt(H.x,H.z);H.mesh.position.set(H.x,ie,H.z),H.shadow.position.set(H.x,ie+.02,H.z),nn(H.mesh,He)}if(xa.position.x=M.x,xa.position.z=M.z,ii.update(M.x,M.z),Ri.update(M.x,M.z),!t){Wu.rebuild(Ji,H=>je.has(H),M.envMs),ts.rebuild(Wn,{x:He.position.x,z:He.position.z},{x:M.x,z:M.z},null);return}for(oi.tick(n),M.k=oi.k(M.tMs),M.trail.push({t:M.tMs,x:M.x,z:M.z});M.trail.length&&M.tMs-M.trail[0].t>Ye.refusal.afkWindowSec*1e3;)M.trail.shift();const _=M.trail[0],y=_?Math.hypot(M.x-_.x,M.z-_.z):0,C=ih(),D={x:-Math.sin(M.yaw),z:-Math.cos(M.yaw)},I=_n.update({nearby:C,px:M.x,pz:M.z,fx:D.x,fz:D.z,dt:n,travelledLast5s:y,uiBlocked:d,isTaken:H=>je.has(H)});for(const H of I)oi.onRefusal(Math.min(2,H.tier)),M.epicTicks+=Cu("refusal"),M.wonderDry+=1;if(M.nearest=mS(C),!u&&!M.elsewhereFirstOfferDone&&M.nearest&&!M.nearest.isAuthored){const H=ku.firstOfferTier,ie=fl(M.nearest.itemRoll,H,"elsewhere",M.nearest.nearWater);ie&&_n.force(M.nearest.id,{tier:H,itemId:ie.id}),M.elsewhereFirstOfferDone=!0}if(i&&!l&&M.nearest&&!m){Qt.unlock();const H=M.nearest,ie=_n.reveal(H,M.k,M.wonderDry),te={...H,tier:ie.tier,itemId:ie.itemId};if(je.collect(te,M.tMs)){oi.onGrab(Math.min(5,te.tier),M.tMs),M.epicTicks+=Cu("grab"),M.wonderDry=te.tier>=4?0:M.wonderDry+1,H.isEpic&&(M.epicObjects=M.epicObjects.filter(we=>we.id!==H.id),M.epicActive=!1,H.granted&&(H.grantedBy==="moana_kelpii"||H.grantedBy==null)&&(M.kelpiiDown=!1),cs=!0),Jt.toast(te),Qt.pickup(te.itemId,te.tier,M.tMs);const ae=new z(te.x,te.y+.4,te.z).project(He);Xu.launch((ae.x*.5+.5)*window.innerWidth,(-ae.y*.5+.5)*window.innerHeight,Ni(te.tier).colour,M.tMs),M.collected=je.total,M.nearest=null}}const U=Pv(M.epicCounts)&&_n.openingComplete()&&M.tMs>=Ye.scriptedOpening.epicMinSeconds*1e3;if(M.pityMult=AM(M.progression)*(u?1:ku.pityMult),(U||Av(M,M.k,M.tMs,Math.random,M.pityMult))&&mh()&&Zl(5),u){const H=_s.update(pt.home.sites,M.x,M.z,D.x,D.z);H&&M.owedGrants.push({tier:H.grant.tier,at:M.tMs,siteId:H.siteId})}wS(),ah(),SS(),vs(),Xu.update(M.tMs),Wu.rebuild(C,H=>je.has(H),M.envMs);const O=Le.tellStrength,L=O>0?{x:Le.site.x,z:Le.site.z,radius:os.bendRadius,radians:os.bendDegrees*(Math.PI/180)*O}:f.bend?{...f.bend,radians:f.bend.radians*f.hear}:null;if(ts.rebuild(Wn,{x:He.position.x,z:He.position.z},{x:M.x,z:M.z},L),dS.update(Le,He,M.tMs),u){const H=(M.tMs-M.lastMovedMs)/1e3;M.lastStillSeconds=H;const te=Sr.update(pt.home.sites,{x:M.x,y:g,z:M.z},He,{nowMs:M.envMs,stillSeconds:H,kelpiiDown:M.kelpiiDown}).patupaiarehe??0,ae=pt.home.palette,we=ui.sites.patupaiarehe.fog;tt.fog.color.set(ae.fog).lerp(_S.set(we.colour),te),tt.fog.near=ae.fogNear+(we.near-ae.fogNear)*te,tt.fog.far=ae.fogFar+(we.far-ae.fogFar)*te}const V=u?yr()?Vn:null:Ce.returnDoor;if(V&&(Kr.x=V.x,Kr.y=V.y,Kr.z=V.z,Kr.hold=u?Ce.holdProgress:0),th.update(V?Kr:null,He,M.tMs),mt.update({dt:n,nowMs:M.tMs,player:{x:M.x,z:M.z,yaw:M.yaw+Math.PI},target:!u&&mt.present?Ce.returnDoor:null,heightAt:Ve.heightAt,walkable:oS,dryAt:lS}),uS.update(mt,He,M.tMs,{door:!u&&mt.present?Ce.returnDoor:null}),M.nearest?(la.visible=!0,la.position.set(M.nearest.x,Ve.heightAt(M.nearest.x,M.nearest.z)+.03,M.nearest.z)):la.visible=!1,Jt.setCount(je.total),Jt.setWorldTag($d(Ce,M.tMs)),m&&!d)Jt.setAction(mt.present?null:Hn.doorway.prompt,null);else if(M.nearest&&!d){const H=_n.reveal(M.nearest,M.k,M.wonderDry);Jt.setPrompt({...M.nearest,tier:H.tier,itemId:H.itemId})}else Jt.setPrompt(null);const G=M.tMs<M.giveLockUntilMs||M.lastSay!==null&&M.tMs-M.lastSay.atMs<M.lastSay.ms,Z=c&&!yt.open&&!G&&je.items.length>0?wa(c.id):null;if(Jt.setGivePrompt(Z?(c.place?Z.leavePrompt:(Z.givePrompt??Gn.prompt).replace("{name}",Z.name))??null:null),Le.active){Jt.epicFrame(Le.lettering,Le.subLine);const H=Le.aperture();Jt.vignette(Math.min(1,.5*O+H.scale))}else Jt.epicHide(),Jt.vignette(0)}function Ql(){vn.render(tt,He)}Ca(!0);ii.update(M.x,M.z,!0);const Qs=hx({advance:gh,draw:Ql});addEventListener("resize",()=>{vn.setSize(window.innerWidth,window.innerHeight),He.aspect=window.innerWidth/window.innerHeight,He.updateProjectionMatrix()});window.__lb={ready:!1,get seed(){return hn},get player(){return{x:M.x,y:Pi.position.y,z:M.z,yaw:M.yaw}},get kete(){return{total:je.total,collectedTotal:je.collectedTotal,byTier:je.byTier,ledger:je.ledger}},get epic(){return{ticks:Number(M.epicTicks.toFixed(2)),taste:Number(oi.taste.toFixed(2)),k:Number(M.k.toFixed(3)),count:M.epicCounts.natural,granted:M.epicCounts.granted,wonderDry:M.wonderDry,refused:_n.refusedCount,pending:M.epicPending,active:M.epicActive,objects:M.epicObjects.length,fellBack:!!M.epicFellBack}},get epicSeq(){if(!Le.active&&!Le.mode)return{active:!1};const n=Le.aperture(),e=Le.object();return{active:Le.active,mode:Le.mode,t:Number(Le.t.toFixed(3)),tier:Le.tier,aperture:Number(n.scale.toFixed(3)),dilation:Number(Le.dilation().toFixed(3)),tell:Number(Le.tellStrength.toFixed(3)),sinceImpact:Number(Le.sinceImpact().toFixed(3)),object:e?{y:Number(e.y.toFixed(2)),landed:e.landed}:null,line:Le.line,subLine:Le.subLine,site:Le.site}},get epicFraming(){return this.mouthFraming(Le.portal)},get epicFraming2(){return this.mouthFraming(Le.portal2)},mouthFraming(n){if(!n)return null;const e=Le.aperture(),t=Ye.epicSequence.mouthMetres/2*Math.max(.05,e.scale),i=(o,c,l)=>{const u=new z(o,c,l).project(He);return{x:Number(u.x.toFixed(3)),y:Number(u.y.toFixed(3))}},r=i(n.x,n.y,n.z),s=i(n.x,n.y+t,n.z),a=i(n.x,n.y-t,n.z);return{centre:r,top:s.y,bottom:a.y,inFrame:Math.abs(r.x)<.9&&s.y<.94&&a.y>-.94}},get giving(){return{panelOpen:yt.open,selected:yt.selected,near:Qr()?.id??null,known:M.knownCreatures.slice(),lastReaction:M.lastReaction,ledger:je.ledger}},forceEpic(n=5){Zl(n),ah()},grant(n=4){const t=oa.items.filter(r=>r.tier===n)[0];if(!t)return null;const i=`granted:${n}:${je.collectedTotal}`;return je.collect({id:i,itemId:t.id,tier:n},M.tMs),M.collected=je.total,{id:i,itemId:t.id,tier:n}},openGive(){const n=Qr();return n&&ch(n),yt.open},giveSelected(){const n=Qr();M.giveLockUntilMs=-1,fh(n)},get cryptids(){return pt.home.sites.map(n=>({...n,dist:Number(Math.hypot(n.x-M.x,n.z-M.z).toFixed(1))}))},get cryptidFinds(){return pt.home.finds.map(n=>({id:n.id,siteId:n.siteId,itemId:n.itemId,tier:n.tier,x:n.x,z:n.z,taken:je.has(n.id)}))},get progression(){return{...M.progression,seen:M.milestonesSeen.slice(),queued:M.sayQueue.map(n=>n.milestone??n.text)}},get world(){const n=Ce.returnDoor;return{which:Ce.which,entry:Ce.entry,returnDoor:n?{x:n.x,y:n.y,z:n.z,relaxed:n.relaxed,relocations:n.relocations}:null,returnDoorDist:n?Number(Math.hypot(n.x-M.x,n.z-M.z).toFixed(1)):null,karu:Ce.karu,crossing:Ce.crossing,fade:Number(Ce.fade.toFixed(3)),fadeColour:Ce.fadeColour,holdProgress:Number(Ce.holdProgress.toFixed(3)),doorway:{...Vn,open:yr(),promptReady:M.tMs>=M.doorwayPromptAfterMs},label:$d(Ce,M.tMs),doorSeen:Ce.doorSeen,lostSec:Ce.which==="elsewhere"?Number(((M.tMs-Ce.enteredAtMs)/1e3).toFixed(1)):0,owedGrants:M.owedGrants.length,leftGift:_s.pending,firstOfferDone:M.elsewhereFirstOfferDone,finds:pt[Ce.which].finds.map(e=>({id:e.id,tier:e.tier,x:e.x,z:e.z,taken:je.has(e.id)})),pityMult:M.pityMult,epicOutHere:ph(),refusedLine:Hn.doorway.refusedLine,epicMayArm:mh()}},get doorFraming(){const n=Ce.which==="home"?yr()?Vn:null:Ce.returnDoor;if(!n)return null;He.updateMatrixWorld(!0);const e=(r,s,a)=>{const o=new z(r,s,a).project(He);return{x:Number(o.x.toFixed(3)),y:Number(o.y.toFixed(3)),z:Number(o.z.toFixed(3))}},t=e(n.x,n.y,n.z),i=e(n.x,n.y+Hn.doorway.archMetres,n.z);return{foot:t,top:i,inFrame:Math.abs(t.x)<1&&t.y>-1&&i.y<1&&t.z<1,dist:Number(Math.hypot(n.x-M.x,n.z-M.z).toFixed(1))}},get karu(){const n=mt.pos;He.updateMatrixWorld(!0);const e=new z(n.x,n.y,n.z).project(He);return{present:mt.present,pos:{x:Number(n.x.toFixed(2)),y:Number(n.y.toFixed(2)),z:Number(n.z.toFixed(2))},goal:mt.goal,escaping:mt.escaping,blinkFrame:mt.blinkFrame,ndc:{x:Number(e.x.toFixed(3)),y:Number(e.y.toFixed(3))},inFrame:Math.abs(e.x)<1&&Math.abs(e.y)<1&&e.z<1,dist:Number(Math.hypot(n.x-M.x,n.z-M.z).toFixed(1))}},forceDoorway(){return yr()?!0:(M.milestonesSeen.includes("doorway")||dh("doorway"),M.doorwayPromptAfterMs=M.tMs,yr())},forceKaru(){return M.milestonesSeen.includes("karu")||M.milestonesSeen.push("karu"),mt.present||hh(),mt.present},enterDoorway(){return yl(Ce.which==="home"?"elsewhere":"home")},giveTo(n,e=5){const t=pt.home.sites.find(c=>c.id===n);if(!t)return null;const i=this.grant(e),r=t.landing.x-t.x,s=t.landing.z-t.z,a=Math.hypot(r,s)||1,o=t.kind==="place"?ui.debug.placeReachMetres:Gn.reachMetres*ui.debug.reachFraction;if(this.teleport(t.x+r/a*o,t.z+s/a*o),M.yaw=Math.atan2(-(t.x-M.x),-(t.z-M.z)),this.stepLogic(1/60),!this.openGive())return null;for(let c=0;c<40&&yt.selected?.id!==i.id;c++)yt.move(1);return this.giveSelected(),{gave:i,near:Qr()?.id??null,lastReaction:M.lastReaction}},get cryptidShown(){return Sr.shown},cryptidFraming(n){const e=Sr.positions[n];if(!e)return null;He.updateMatrixWorld(!0);const t=new z(e.x,e.y,e.z).project(He);return{x:Number(t.x.toFixed(3)),y:Number(t.y.toFixed(3)),inFrame:Math.abs(t.x)<1&&Math.abs(t.y)<1&&t.z<1,ground:Number(Ve.heightAt(e.x,e.z).toFixed(3)),pos:{x:Number(e.x.toFixed(2)),y:Number(e.y.toFixed(2)),z:Number(e.z.toFixed(2))}}},holdShape(n){Sr.holdShape=n},get mouths(){return{first:Le.portal,second:Le.portal2}},occlusionReport(n,e="real"){const i=(e==="probe"?tn:He).position,r=Ye.epicSiting,s=n.x-i.x,a=n.z-i.z,o=s*s+a*a,c=[];for(const l of Wn){if(l.kind!=="tree")continue;const u=((l.x-i.x)*s+(l.z-i.z)*a)/o;if(u<=0||u>=1)continue;const h=i.x+s*u,d=i.z+a*u,p=Math.hypot(l.x-h,l.z-d),m=l.scale??6,S=Math.max(r.canopyRadius,m*r.canopyRadiusOfHeight);if(p>S+3)continue;const f=i.y+(n.y-i.y)*u,g=l.y??Ve.heightAt(l.x,l.z);c.push({species:l.species,t:+u.toFixed(2),perp:+p.toFixed(2),radius:+S.toFixed(2),h:+m.toFixed(1),base:+g.toFixed(2),lineY:+f.toFixed(2),bandFrom:+(g+m*r.canopyBandFrom).toFixed(2),top:+(g+m).toFixed(2),blocks:p<=S&&u>.08&&f>g+m*r.canopyBandFrom&&f<g+m})}return{from:{x:+i.x.toFixed(1),y:+i.y.toFixed(2),z:+i.z.toFixed(1)},p:n,trees:c}},redraw(){pt?.home?.sites&&Sr.update(pt.home.sites,{x:M.x,y:Ve.heightAt(M.x,M.z),z:M.z},He,{nowMs:M.envMs,stillSeconds:M.lastStillSeconds??0,kelpiiDown:M.kelpiiDown}),Ql()},siteFraming(n){const e=pt.home.sites.find(i=>i.id===n);if(!e)return null;He.updateMatrixWorld(!0);const t=new z(e.x,e.y+.8,e.z).project(He);return{x:Number(t.x.toFixed(3)),y:Number(t.y.toFixed(3)),inFrame:Math.abs(t.x)<1&&Math.abs(t.y)<1&&t.z<1}},get fog(){return{colour:`#${tt.fog.color.getHexString()}`,near:Number(tt.fog.near.toFixed(1)),far:Number(tt.fog.far.toFixed(1)),sky:`#${tt.background.getHexString()}`}},pixelAt(n,e){const t=vn.getContext(),i=t.drawingBufferWidth,r=t.drawingBufferHeight,s=new Uint8Array(4);return t.readPixels(Math.floor(n*(i-1)),Math.floor((1-e)*(r-1)),1,1,t.RGBA,t.UNSIGNED_BYTE,s),[s[0],s[1],s[2]]},objectsNear(n=12){return ih().filter(e=>!je.has(e.id)).map(e=>({id:e.id,tier:e.tier,itemId:e.itemId,x:e.x,z:e.z,authored:!!(e.isAuthored||e.isCryptidFind||e.isEpic),dist:Math.hypot(e.x-M.x,e.z-M.z)})).filter(e=>e.dist<=n).sort((e,t)=>e.dist-t.dist)},get camera(){const n=He.position;return{x:+n.x.toFixed(2),y:+n.y.toFixed(2),z:+n.z.toFixed(2),fov:He.fov,framing:Le.framing}},get holdKeyDown(){return Ct.isDown("KeyE")||Ct.isDown("Space")||Ct.isDown("Enter")},get say(){const n=M.lastSay;return!n||M.tMs-n.atMs>=n.ms?null:n.text},navGive(n){yt.move(n)},get nearest(){if(!M.nearest)return null;const n=_n.reveal(M.nearest,M.k,M.wonderDry);return{id:M.nearest.id,itemId:n.itemId,tier:n.tier}},get visibleCount(){return Ji.length},get sceneryCount(){return Wn.length},flora(n=45){const e={};let t=0;for(const i of Wn)i.kind==="tree"&&(Math.hypot(i.x-M.x,i.z-M.z)>n||(t++,e[i.species]=(e[i.species]??0)+1));return{trees:t,species:e}},groundAt(n,e){return Ve.heightAt(n,e)},waterAt(n,e){const t=Ve.waterSurfaceAt(n,e);return{surface:t===-1/0?null:Number(t.toFixed(2)),depth:Number(Ve.waterDepthAt(n,e).toFixed(3)),walkable:Tr(Ve,n,e)}},get npcs(){return ls.map(n=>({id:n.id,x:n.x,z:n.z,dist:Number(Math.hypot(n.x-M.x,n.z-M.z).toFixed(1)),textureLoaded:!!n.mesh.material.map?.image}))},get render(){return{calls:vn.info.render.calls,triangles:vn.info.render.triangles}},get held(){return Ct.held},setSeed(n){hn=n,pt=jd(hn),Vn=qd(Ra[0],pt.home.world),Ce=Kd({seed:hn}),Jl("home")},setYaw(n){M.yaw=n},teleport(n,e){M.x=n,M.z=e,va="",Ca(!0),ii.update(n,e,!0),Ri.update(n,e,!0)},collect(){Ct.queueCollect()},pause(){Qs.pause()},resume(){Qs.resume()},step(n){Qs.step(n)},stepLogic(n){Qs.stepLogic(n)},CHUNK_SIZE:Xi};gh(0);Ql();window.__lb.ready=!0;const Nr=document.createElement("div");Nr.id="help";Nr.style.opacity="0";document.body.appendChild(Nr);av({coarse:fS.active,onChange(n,e){Nr.textContent=e.help,Jt.setKeys({pick:e.pickKey,give:e.giveKey}),yt.setFoot(e.panelFoot)}});window.addEventListener("keydown",n=>{!yt.open||n.code!=="Escape"&&n.code!=="Backspace"||(n.preventDefault(),n.stopPropagation(),n.repeat||Ct.queueCancel())},!0);function _h(n){hS(n),M.started=!0,Qt.unlock(),Qt.titleSongStop(),Nr.style.opacity="";const e=()=>{Nr.style.opacity="0"};je.on(e),setTimeout(e,12e3)}const Ur=ov();let bl=0;function xh(){return{seed:hn,character:$l,player:{x:M.x,z:M.z,yaw:M.yaw},tMs:M.tMs,kete:je.serialize(),discernment:oi.serialize(),offers:_n.serialize(),knownCreatures:M.knownCreatures.slice(),epic:{count:M.epicCounts.natural,granted:M.epicCounts.granted,ticks:M.epicTicks,lastEpicAtMs:M.lastEpicAtMs,wonderDry:M.wonderDry,recentVo:M.recentVo.slice()},world:Ce.snapshot(),karu:mt.serialize(),milestonesSeen:M.milestonesSeen.slice(),leftGift:_s.serialize(),owedGrants:M.owedGrants.map(n=>({tier:n.tier,siteId:n.siteId})),elsewhereFirstOfferDone:M.elsewhereFirstOfferDone,kelpiiDown:M.kelpiiDown}}function vs(n=!1){return!M.started||M.epicActive||M.epicPending||Ce.crossing||!n&&M.tMs-bl<3e4?!1:(bl=M.tMs,Ur.save(xh()))}function vh(n){n.seed!==hn&&window.__lb.setSeed(n.seed),je.restore(n.kete),oi.restore(n.discernment),_n.restore(n.offers),M.knownCreatures=(n.knownCreatures??[]).slice(),M.epicCounts={natural:n.epic?.count??0,granted:n.epic?.granted??0},M.epicTicks=n.epic?.ticks??0,M.wonderDry=n.epic?.wonderDry??0,M.recentVo=(n.epic?.recentVo??[]).slice(),M.tMs=n.tMs??0,M.envMs=M.tMs,M.lastEpicAtMs=n.epic?.lastEpicAtMs??-1e9,M.milestonesSeen=(n.milestonesSeen??[]).slice(),M.sayQueue=[],M.owedGrants=(n.owedGrants??[]).map(e=>({tier:e.tier,at:M.tMs,siteId:e.siteId??null})),M.progression=Yl(je.ledger),M.elsewhereFirstOfferDone=!!n.elsewhereFirstOfferDone,M.kelpiiDown=!!n.kelpiiDown,M.doorRefusedShown=!1,M.epicGrantSite=null,M.epicGranted=!1,M.epicGrantedBy=null,_s.restore(n.leftGift),Ce.restore(n.world,M.tMs),mt.restore(n.karu),M.yaw=n.player.yaw,M.x=n.player.x,M.z=n.player.z,Jl(Ce.which),uh(gs.delayMs),M.collected=je.total,bl=M.tMs,_h(n.character)}function Mh(){const n=Ur.load();if(!n){Fn._toPick();return}vh(n)}const Fn=rv(document.body,{onStart:n=>{Ur.clear(),_h(n)},onLoad:Mh,canLoad:Ur.exists(),onFirstGesture:()=>Qt.titleSong(()=>M.tMs)});je.on(n=>{n.type==="collect"&&vs(!0)});addEventListener("pagehide",()=>vs(!0));window.__lb.save={get exists(){return Ur.exists()},snapshot:xh,restore:vh,write:()=>vs(!0),clear:()=>Ur.clear(),load:Mh};window.__lb.audio={get voiceReady(){return Qt.voiceReady},get titleSongPlayed(){return Qt.titleSongPlayed}};window.__lb.title={get open(){return Fn.open},get panel(){return Fn.panel},get roster(){return Fn.roster},get selected(){return Fn.selectedId},get canLoad(){return Fn.canLoad},toPick(){Fn._toPick()},select(n){Fn._select(n)},start(){Fn._start()},load(){Fn._load()}};window.__lb.started=()=>M.started;window.__lb.character=()=>$l;
