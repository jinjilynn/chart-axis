!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.chart_axis=n():t.chart_axis=n()}(this,(function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=62)}([function(t,n,r){var e=r(29)("wks"),o=r(18),i=r(6).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e},function(t,n,r){var e=r(6),o=r(17),i=r(10),u=r(7),c=r(13),a=function(t,n,r){var f,s,l,p,v=t&a.F,h=t&a.G,d=t&a.S,y=t&a.P,g=t&a.B,x=h?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,m=h?o:o[n]||(o[n]={}),b=m.prototype||(m.prototype={});for(f in h&&(r=n),r)l=((s=!v&&x&&void 0!==x[f])?x:r)[f],p=g&&s?c(l,e):y&&"function"==typeof l?c(Function.call,l):l,x&&u(x,f,l,t&a.U),m[f]!=l&&i(m,f,p),y&&b[f]!=l&&(b[f]=l)};e.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,r){t.exports=!r(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(6),o=r(10),i=r(9),u=r(18)("src"),c=r(68),a=(""+c).split("toString");r(17).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var f="function"==typeof r;f&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(f&&(i(r,u)||o(r,u,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t,n,r){var e=r(3),o=r(38),i=r(23),u=Object.defineProperty;n.f=r(2)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(8),o=r(19);t.exports=r(2)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(27),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(31);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(26),o=r(11);t.exports=function(t){return e(o(t))}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports={}},function(t,n){var r=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=r)},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(11);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(13),o=r(26),i=r(20),u=r(12),c=r(78);t.exports=function(t,n){var r=1==t,a=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l,v=n||c;return function(n,c,h){for(var d,y,g=i(n),x=o(g),m=e(c,h,3),b=u(x.length),_=0,S=r?v(n,b):a?v(n,0):void 0;b>_;_++)if((p||_ in x)&&(y=m(d=x[_],_,g),t))if(r)S[_]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return _;case 2:S.push(d)}else if(s)return!1;return l?-1:f||s?s:S}}},function(t,n,r){"use strict";var e=r(5);t.exports=function(t,n){return!!t&&e((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(3),o=r(65),i=r(30),u=r(28)("IE_PROTO"),c=function(){},a=function(){var t,n=r(39)("iframe"),e=i.length;for(n.style.display="none",r(67).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;e--;)delete a.prototype[i[e]];return a()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=a(),void 0===n?r:o(r,n)}},function(t,n,r){var e=r(40),o=r(30);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(29)("keys"),o=r(18);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n,r){var e=r(17),o=r(6),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(42)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(15),o=r(0)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,r){"use strict";var e=r(42),o=r(1),i=r(7),u=r(10),c=r(16),a=r(69),f=r(34),s=r(70),l=r(0)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,r,h,d,y,g){a(r,n,h);var x,m,b,_=function(t){if(!p&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},S=n+" Iterator",w="values"==d,E=!1,A=t.prototype,O=A[l]||A["@@iterator"]||d&&A[d],j=O||_(d),I=d?w?_("entries"):j:void 0,M="Array"==n&&A.entries||O;if(M&&(b=s(M.call(new t)))!==Object.prototype&&b.next&&(f(b,S,!0),e||"function"==typeof b[l]||u(b,l,v)),w&&O&&"values"!==O.name&&(E=!0,j=function(){return O.call(this)}),e&&!g||!p&&!E&&A[l]||u(A,l,j),c[n]=j,c[S]=v,d)if(x={values:w?j:_("values"),keys:y?j:_("keys"),entries:I},g)for(m in x)m in A||i(A,m,x[m]);else o(o.P+o.F*(p||E),n,x);return x}},function(t,n,r){var e=r(8).f,o=r(9),i=r(0)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(0)("unscopables"),o=Array.prototype;null==o[e]&&r(10)(o,e,{}),t.exports=function(t){o[e][t]=!0}},function(t,n,r){"use strict";var e=r(3);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e,o,i=r(36),u=RegExp.prototype.exec,c=String.prototype.replace,a=u,f=(e=/a/,o=/b*/g,u.call(e,"a"),u.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(f||s)&&(a=function(t){var n,r,e,o,a=this;return s&&(r=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),f&&(n=a.lastIndex),e=u.call(a,t),f&&e&&(a.lastIndex=a.global?e.index+e[0].length:n),s&&e&&e.length>1&&c.call(e[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)})),e}),t.exports=a},function(t,n,r){t.exports=!r(2)&&!r(5)((function(){return 7!=Object.defineProperty(r(39)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(4),o=r(6).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,r){var e=r(9),o=r(14),i=r(41)(!1),u=r(28)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),a=0,f=[];for(r in c)r!=u&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(14),o=r(12),i=r(66);t.exports=function(t){return function(n,r,u){var c,a=e(n),f=o(a.length),s=i(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}}},function(t,n){t.exports=!1},function(t,n,r){var e=r(7);t.exports=function(t,n,r){for(var o in n)e(t,o,n[o],r);return t}},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var e=r(13),o=r(46),i=r(47),u=r(3),c=r(12),a=r(48),f={},s={};(n=t.exports=function(t,n,r,l,p){var v,h,d,y,g=p?function(){return t}:a(t),x=e(r,l,n?2:1),m=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(v=c(t.length);v>m;m++)if((y=n?x(u(h=t[m])[0],h[1]):x(t[m]))===f||y===s)return y}else for(d=g.call(t);!(h=d.next()).done;)if((y=o(d,x,h.value,n))===f||y===s)return y}).BREAK=f,n.RETURN=s},function(t,n,r){var e=r(3);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(16),o=r(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[o]===t)}},function(t,n,r){var e=r(32),o=r(0)("iterator"),i=r(16);t.exports=r(17).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[e(t)]}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){var e=r(18)("meta"),o=r(4),i=r(9),u=r(8).f,c=0,a=Object.isExtensible||function(){return!0},f=!r(5)((function(){return a(Object.preventExtensions({}))})),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,e)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!i(t,e)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return f&&l.NEED&&a(t)&&!i(t,e)&&s(t),t}}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,r){var e=r(0)("iterator"),o=!1;try{var i=[7][e]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i=[7],u=i[e]();u.next=function(){return{done:r=!0}},i[e]=function(){return u},t(i)}catch(t){}return r}},function(t,n,r){var e=r(4),o=r(73).set;t.exports=function(t,n,r){var i,u=n.constructor;return u!==r&&"function"==typeof u&&(i=u.prototype)!==r.prototype&&e(i)&&o&&o(t,i),t}},function(t,n,r){var e=r(55),o=r(19),i=r(14),u=r(23),c=r(9),a=r(38),f=Object.getOwnPropertyDescriptor;n.f=r(2)?f:function(t,n){if(t=i(t),n=u(n,!0),a)try{return f(t,n)}catch(t){}if(c(t,n))return o(!e.f.call(t,n),t[n])}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(27),o=r(11);t.exports=function(t){return function(n,r){var i,u,c=String(o(n)),a=e(r),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},function(t,n,r){var e=r(15);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(4),o=r(15),i=r(0)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,r){"use strict";var e=r(1),o=r(93);e(e.P+e.F*!r(22)([].reduce,!0),"Array",{reduce:function(t){return o(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){"use strict";var e=r(35),o=r(49),i=r(16),u=r(14);t.exports=r(33)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])}),"values"),i.Arguments=i.Array,e("keys"),e("values"),e("entries")},function(t,n,r){var e=r(96),o=r(97),i=r(98),u=r(100);t.exports=function(t,n){return e(t)||o(t,n)||i(t,n)||u()}},function(t,n,r){t.exports=r(111)},function(t,n,r){"use strict";var e=r(64),o=r(51);t.exports=r(72)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return e.def(o(this,"Set"),t=0===t?0:t,t)}},e)},function(t,n,r){"use strict";var e=r(8).f,o=r(24),i=r(43),u=r(13),c=r(44),a=r(45),f=r(33),s=r(49),l=r(71),p=r(2),v=r(50).fastKey,h=r(51),d=p?"_s":"size",y=function(t,n){var r,e=v(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,n,r,f){var s=t((function(t,e){c(t,s,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,null!=e&&a(e,r,t[f],t)}));return i(s.prototype,{clear:function(){for(var t=h(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var r=h(this,n),e=y(r,t);if(e){var o=e.n,i=e.p;delete r._i[e.i],e.r=!0,i&&(i.n=o),o&&(o.p=i),r._f==e&&(r._f=o),r._l==e&&(r._l=i),r[d]--}return!!e},forEach:function(t){h(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!y(h(this,n),t)}}),p&&e(s.prototype,"size",{get:function(){return h(this,n)[d]}}),s},def:function(t,n,r){var e,o,i=y(t,n);return i?i.v=r:(t._l=i={i:o=v(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=i),e&&(e.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,n,r){f(t,n,(function(t,r){this._t=h(t,n),this._k=r,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?s(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,s(1))}),r?"entries":"values",!r,!0),l(n)}}},function(t,n,r){var e=r(8),o=r(3),i=r(25);t.exports=r(2)?Object.defineProperties:function(t,n){o(t);for(var r,u=i(n),c=u.length,a=0;c>a;)e.f(t,r=u[a++],n[r]);return t}},function(t,n,r){var e=r(27),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):i(t,n)}},function(t,n,r){var e=r(6).document;t.exports=e&&e.documentElement},function(t,n,r){t.exports=r(29)("native-function-to-string",Function.toString)},function(t,n,r){"use strict";var e=r(24),o=r(19),i=r(34),u={};r(10)(u,r(0)("iterator"),(function(){return this})),t.exports=function(t,n,r){t.prototype=e(u,{next:o(1,r)}),i(t,n+" Iterator")}},function(t,n,r){var e=r(9),o=r(20),i=r(28)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){"use strict";var e=r(6),o=r(8),i=r(2),u=r(0)("species");t.exports=function(t){var n=e[t];i&&n&&!n[u]&&o.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,r){"use strict";var e=r(6),o=r(1),i=r(7),u=r(43),c=r(50),a=r(45),f=r(44),s=r(4),l=r(5),p=r(52),v=r(34),h=r(53);t.exports=function(t,n,r,d,y,g){var x=e[t],m=x,b=y?"set":"add",_=m&&m.prototype,S={},w=function(t){var n=_[t];i(_,t,"delete"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof m&&(g||_.forEach&&!l((function(){(new m).entries().next()})))){var E=new m,A=E[b](g?{}:-0,1)!=E,O=l((function(){E.has(1)})),j=p((function(t){new m(t)})),I=!g&&l((function(){for(var t=new m,n=5;n--;)t[b](n,n);return!t.has(-0)}));j||((m=n((function(n,r){f(n,m,t);var e=h(new x,n,m);return null!=r&&a(r,y,e[b],e),e}))).prototype=_,_.constructor=m),(O||I)&&(w("delete"),w("has"),y&&w("get")),(I||A)&&w(b),g&&_.clear&&delete _.clear}else m=d.getConstructor(n,t,y,b),u(m.prototype,r),c.NEED=!0;return v(m,t),S[t]=m,o(o.G+o.W+o.F*(m!=x),S),g||d.setStrong(m,t,y),m}},function(t,n,r){var e=r(4),o=r(3),i=function(t,n){if(o(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{(e=r(13)(Function.call,r(54).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,r){return i(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:i}},function(t,n,r){"use strict";var e=r(56)(!0);r(33)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})}))},function(t,n,r){"use strict";var e=r(13),o=r(1),i=r(20),u=r(46),c=r(47),a=r(12),f=r(76),s=r(48);o(o.S+o.F*!r(52)((function(t){Array.from(t)})),"Array",{from:function(t){var n,r,o,l,p=i(t),v="function"==typeof this?this:Array,h=arguments.length,d=h>1?arguments[1]:void 0,y=void 0!==d,g=0,x=s(p);if(y&&(d=e(d,h>2?arguments[2]:void 0,2)),null==x||v==Array&&c(x))for(r=new v(n=a(p.length));n>g;g++)f(r,g,y?d(p[g],g):p[g]);else for(l=x.call(p),r=new v;!(o=l.next()).done;g++)f(r,g,y?u(l,d,[o.value,g],!0):o.value);return r.length=g,r}})},function(t,n,r){"use strict";var e=r(8),o=r(19);t.exports=function(t,n,r){n in t?e.f(t,n,o(0,r)):t[n]=r}},function(t,n,r){"use strict";var e=r(1),o=r(21)(1);e(e.P+e.F*!r(22)([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},function(t,n,r){var e=r(79);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var e=r(4),o=r(57),i=r(0)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),e(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(t,n,r){"use strict";var e=r(1),o=r(41)(!0);e(e.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(35)("includes")},function(t,n,r){"use strict";var e=r(1),o=r(82);e(e.P+e.F*r(83)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(58),o=r(11);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){var e=r(0)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,r){"use strict";r(85);var e=r(3),o=r(36),i=r(2),u=/./.toString,c=function(t){r(7)(RegExp.prototype,"toString",t,!0)};r(5)((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?c((function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):"toString"!=u.name&&c((function(){return u.call(this)}))},function(t,n,r){r(2)&&"g"!=/./g.flags&&r(8).f(RegExp.prototype,"flags",{configurable:!0,get:r(36)})},function(t,n,r){var e=Date.prototype,o=e.toString,i=e.getTime;new Date(NaN)+""!="Invalid Date"&&r(7)(e,"toString",(function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"}))},function(t,n,r){"use strict";var e=r(58),o=r(3),i=r(88),u=r(89),c=r(12),a=r(90),f=r(37),s=r(5),l=Math.min,p=[].push,v=!s((function(){RegExp(4294967295,"y")}));r(91)("split",2,(function(t,n,r,s){var h;return h="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=String(this);if(void 0===t&&0===n)return[];if(!e(t))return r.call(o,t,n);for(var i,u,c,a=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,v=void 0===n?4294967295:n>>>0,h=new RegExp(t.source,s+"g");(i=f.call(h,o))&&!((u=h.lastIndex)>l&&(a.push(o.slice(l,i.index)),i.length>1&&i.index<o.length&&p.apply(a,i.slice(1)),c=i[0].length,l=u,a.length>=v));)h.lastIndex===i.index&&h.lastIndex++;return l===o.length?!c&&h.test("")||a.push(""):a.push(o.slice(l)),a.length>v?a.slice(0,v):a}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r.call(this,t,n)}:r,[function(r,e){var o=t(this),i=null==r?void 0:r[n];return void 0!==i?i.call(r,o,e):h.call(String(o),r,e)},function(t,n){var e=s(h,t,this,n,h!==r);if(e.done)return e.value;var f=o(t),p=String(this),d=i(f,RegExp),y=f.unicode,g=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),x=new d(v?f:"^(?:"+f.source+")",g),m=void 0===n?4294967295:n>>>0;if(0===m)return[];if(0===p.length)return null===a(x,p)?[p]:[];for(var b=0,_=0,S=[];_<p.length;){x.lastIndex=v?_:0;var w,E=a(x,v?p:p.slice(_));if(null===E||(w=l(c(x.lastIndex+(v?0:_)),p.length))===b)_=u(p,_,y);else{if(S.push(p.slice(b,_)),S.length===m)return S;for(var A=1;A<=E.length-1;A++)if(S.push(E[A]),S.length===m)return S;_=b=w}}return S.push(p.slice(b)),S}]}))},function(t,n,r){var e=r(3),o=r(31),i=r(0)("species");t.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||null==(r=e(u)[i])?n:o(r)}},function(t,n,r){"use strict";var e=r(56)(!0);t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){"use strict";var e=r(32),o=RegExp.prototype.exec;t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var i=r.call(t,n);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==e(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){"use strict";r(92);var e=r(7),o=r(10),i=r(5),u=r(11),c=r(0),a=r(37),f=c("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,n,r){var p=c(t),v=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),h=v?!i((function(){var n=!1,r=/a/;return r.exec=function(){return n=!0,null},"split"===t&&(r.constructor={},r.constructor[f]=function(){return r}),r[p](""),!n})):void 0;if(!v||!h||"replace"===t&&!s||"split"===t&&!l){var d=/./[p],y=r(u,p,""[t],(function(t,n,r,e,o){return n.exec===a?v&&!o?{done:!0,value:d.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}})),g=y[0],x=y[1];e(String.prototype,t,g),o(RegExp.prototype,p,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)})}}},function(t,n,r){"use strict";var e=r(37);r(1)({target:"RegExp",proto:!0,forced:e!==/./.exec},{exec:e})},function(t,n,r){var e=r(31),o=r(20),i=r(26),u=r(12);t.exports=function(t,n,r,c,a){e(n);var f=o(t),s=i(f),l=u(f.length),p=a?l-1:0,v=a?-1:1;if(r<2)for(;;){if(p in s){c=s[p],p+=v;break}if(p+=v,a?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;a?p>=0:l>p;p+=v)p in s&&(c=n(c,s[p],p,f));return c}},function(t,n,r){"use strict";var e=r(1),o=r(21)(6),i="findIndex",u=!0;i in[]&&Array(1)[i]((function(){u=!1})),e(e.P+e.F*u,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(35)(i)},function(t,n,r){"use strict";var e=r(1),o=r(21)(3);e(e.P+e.F*!r(22)([].some,!0),"Array",{some:function(t){return o(this,t,arguments[1])}})},function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},function(t,n){t.exports=function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],e=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(e=(u=c.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return r}}},function(t,n,r){var e=r(99);t.exports=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}},function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,n,r){for(var e=r(60),o=r(25),i=r(7),u=r(6),c=r(10),a=r(16),f=r(0),s=f("iterator"),l=f("toStringTag"),p=a.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(v),d=0;d<h.length;d++){var y,g=h[d],x=v[g],m=u[g],b=m&&m.prototype;if(b&&(b[s]||c(b,s,p),b[l]||c(b,l,g),a[g]=p,x))for(y in e)b[y]||i(b,y,e[y],!0)}},function(t,n,r){"use strict";var e=r(32),o={};o[r(0)("toStringTag")]="z",o+""!="[object z]"&&r(7)(Object.prototype,"toString",(function(){return"[object "+e(this)+"]"}),!0)},function(t,n,r){var e=r(1),o=r(104)(!1);e(e.S,"Object",{values:function(t){return o(t)}})},function(t,n,r){var e=r(2),o=r(25),i=r(14),u=r(55).f;t.exports=function(t){return function(n){for(var r,c=i(n),a=o(c),f=a.length,s=0,l=[];f>s;)r=a[s++],e&&!u.call(c,r)||l.push(t?[r,c[r]]:c[r]);return l}}},function(t,n,r){"use strict";var e=r(1),o=r(21)(0),i=r(22)([].forEach,!0);e(e.P+e.F*!i,"Array",{forEach:function(t){return o(this,t,arguments[1])}})},function(t,n,r){var e=r(1);e(e.S,"Array",{isArray:r(57)})},function(t,n,r){"use strict";var e=r(6),o=r(9),i=r(15),u=r(53),c=r(23),a=r(5),f=r(108).f,s=r(54).f,l=r(8).f,p=r(109).trim,v=e.Number,h=v,d=v.prototype,y="Number"==i(r(24)(d)),g="trim"in String.prototype,x=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){var r,e,o,i=(n=g?n.trim():p(n,3)).charCodeAt(0);if(43===i||45===i){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:e=2,o=49;break;case 79:case 111:e=8,o=55;break;default:return+n}for(var u,a=n.slice(2),f=0,s=a.length;f<s;f++)if((u=a.charCodeAt(f))<48||u>o)return NaN;return parseInt(a,e)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var n=arguments.length<1?0:t,r=this;return r instanceof v&&(y?a((function(){d.valueOf.call(r)})):"Number"!=i(r))?u(new h(x(n)),r,v):x(n)};for(var m,b=r(2)?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;b.length>_;_++)o(h,m=b[_])&&!o(v,m)&&l(v,m,s(h,m));v.prototype=d,d.constructor=v,r(7)(e,"Number",v)}},function(t,n,r){var e=r(40),o=r(30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(1),o=r(11),i=r(5),u=r(110),c="["+u+"]",a=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),s=function(t,n,r){var o={},c=i((function(){return!!u[t]()||"​"!="​"[t]()})),a=o[t]=c?n(l):u[t];r&&(o[r]=a),e(e.P+e.F*c,"String",o)},l=s.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(a,"")),2&n&&(t=t.replace(f,"")),t};t.exports=s},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,r){"use strict";r.r(n);r(63),r(74),r(75),r(77),r(80),r(81),r(84),r(86),r(87),r(59),r(94),r(95);var e=r(61),o=r.n(e);r(101),r(60),r(102),r(103),r(105),r(106),r(107);function i(t){var n=1;if(Math.abs(t)>=1){for(;Math.abs(t/n)>=10;)n*=10;return n}for(;Math.abs(t/n)<=1;)n/=10;return n}function u(t){var n=i(t),r=(Math.floor(t/n)+1)*n;return!window.isFinite(r)&&(r=1),t>r-n/2?r:r-n/2}function c(t){var n=t.data,r=void 0===n?[]:n,e=t.intervals,c=void 0===e?5:e,a=t.steps,f=void 0===a?[3]:a,s=t.max,l=t.forceInt;if(!Array.isArray(r)||Array.isArray(r)&&0===r.length)return[];(!window.isFinite(c)||c<=0)&&(c=5);var p=-1/0,v=1/0;Object.values(r).forEach((function(t){isFinite(t)&&(t<v&&(v=t),t>p&&(p=t))}));for(var h=[],d=1;d<=c+1;d+=1)h.push(d);var y,g,x=(g=i(y=v),y<0?10*-g:1===g?0:g),m=u(p);"number"==typeof s&&window.isFinite(s)&&s>x&&(m=s);var b=[];if(Array.isArray(f))for(var _=0;_<f.length;_+=1)if(window.isFinite(f[_])){var S=Math.floor(f[_]);S>10&&(S=10),b.push({limit:S*c,step:S})}var w=[];b.forEach((function(t){if(m>=u(t.limit)){var n=function(t,n,r){var e=i(n),o=[];return[t.reduce((function(t){return i(t)===e&&e/10*r>1&&(e/=10),o.push(t),t-=e*r}),n),o]}(h,m,t.step),r=o()(n,2),e=r[0],c=r[1];w.push({min:e,results:c})}}));var E,A=[];if(w.length>0){var O=[],j={};w.forEach((function(t,n){t.min<=x&&O.push(t),0===n?j=t:t.min>j.min&&(j=t)})),j.results.pop(),j.results.push(x),O.forEach((function(t,n){0===n&&Math.abs(t.min-x)<Math.abs(j.min-x)?j=t:Math.abs(t.min-x)<Math.abs(j.min-x)&&(j=t)})),E=j}if(E){if(!E.results.some((function(t){return 0===t}))){var I=E.results.findIndex((function(t){return t<0}));-1===I?E.results.push(0):E.results.splice(I,0,0)}A=E.results.reverse()}else{var M=(m-x)/c,T=1;if(Math.abs(m)>=0&&Math.abs(m<1)){var F=r.reduce((function(t,n){if(!window.isFinite(n))return t;var r=i(n);return t+=0===r?0:r.toString().split(".")[1].length}),0);T=Math.ceil(F/r.length)}if((E=h.reduce((function(t,n,r){var e=function(t,n){return Number(t.toFixed(void 0===n?6:n))}(m-M*r,T);return t.push(e),t}),[])).pop(),E.push(x),x<0&&!E.includes(0)){var P=E.findIndex((function(t){return t<0}));E.splice(P<0?0:P,0,0)}x>0&&E.push(0),A=E.reverse()}if(l){var N=A.map((function(t){return Math.ceil(t)}));A=Array.from(new Set(N))}return A}function a(t){var n=t.type,r=void 0===n?"reverse":n,e=t.minCoord,o=t.maxCoord,i=t.range;if(window.isFinite(e)&&window.isFinite(o))if(o<=e)console.error("maxCoord must bigger than min");else if(Array.isArray(i)){if(!(i.length<2)){"reverse"!==r&&"normal"!==r&&(r="reverse");var u=(o-e)/(i.length-1);return function(t){if(window.isFinite(t))if(t>i[i.length-1])console.error("value can not be bigger than the range maxmun");else{if(!(t<i[0])){for(var n,c=0,a=0;a<i.length;a+=1)if(t<=i[a]){c=a;break}if(c<=1){var f=u/(i[1]-i[0]);"reverse"===r&&(n=o-(t-i[0])*f),"normal"===r&&(n=e+(t-i[0])*f)}else{var s=c-1,l=u/(i[c]-i[s]);"reverse"===r&&(n=o-u*s-(t-i[s])*l),"normal"===r&&(n=e+u*s+(t-i[s])*l)}return n}console.error("value can not be smaller than the range minimum")}}}console.error("range at least has two element")}else console.error("range must be an array");else console.error("mminCoordin、maxCoord must be number")}r.d(n,"getIntervalRange",(function(){return c})),r.d(n,"getCoordByValue",(function(){return a}))}])}));