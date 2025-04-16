import{bZ as x,b_ as k,b$ as U,bY as Y,c0 as m,c2 as I,c4 as p,cu as z,am as L,e1 as j}from"./index-27ffd735.js";import{d as B}from"./format-time-4dc4f2eb.js";import{_ as C}from"./_baseEach-4159b158.js";import{a as F}from"./_baseIteratee-9e852688.js";var N=1e3*60,h=60*24,y=h*30,E=h*365;function H(r,a,e){var n,o,s;x(2,arguments);var f=p(),l=(n=(o=e==null?void 0:e.locale)!==null&&o!==void 0?o:f.locale)!==null&&n!==void 0?n:k;if(!l.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var _=U(r,a);if(isNaN(_))throw new RangeError("Invalid time value");var u=Y(B(e),{addSuffix:!!(e!=null&&e.addSuffix),comparison:_}),v,d;_>0?(v=m(a),d=m(r)):(v=m(r),d=m(a));var M=String((s=e==null?void 0:e.roundingMethod)!==null&&s!==void 0?s:"round"),i;if(M==="floor")i=Math.floor;else if(M==="ceil")i=Math.ceil;else if(M==="round")i=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var A=d.getTime()-v.getTime(),c=A/N,S=I(d)-I(v),g=(A-S)/N,b=e==null?void 0:e.unit,t;if(b?t=String(b):c<1?t="second":c<60?t="minute":c<h?t="hour":g<y?t="day":g<E?t="month":t="year",t==="second"){var w=i(A/1e3);return l.formatDistance("xSeconds",w,u)}else if(t==="minute"){var T=i(c);return l.formatDistance("xMinutes",T,u)}else if(t==="hour"){var O=i(c/60);return l.formatDistance("xHours",O,u)}else if(t==="day"){var $=i(g/h);return l.formatDistance("xDays",$,u)}else if(t==="month"){var D=i(g/y);return D===12&&b!=="month"?l.formatDistance("xYears",1,u):l.formatDistance("xMonths",D,u)}else if(t==="year"){var R=i(g/E);return l.formatDistance("xYears",R,u)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function ue(r,a){return x(1,arguments),H(r,Date.now(),a)}function V(r,a,e,n){for(var o=-1,s=r==null?0:r.length;++o<s;){var f=r[o];a(n,f,e(f),r)}return n}var q=V,Z=C;function G(r,a,e,n){return Z(r,function(o,s,f){a(n,o,e(o),f)}),n}var J=G,K=q,P=J,Q=F,W=z;function X(r,a){return function(e,n){var o=W(e)?K:P,s=a?a():{};return o(e,r,Q(n),s)}}var ee=X,re=j,ae=ee,te=ae(function(r,a,e){re(r,e,a)}),ne=te;const fe=L(ne);export{ue as f,fe as k};
