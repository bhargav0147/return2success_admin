import{r as D,g as pe,j as s,S as Ie,A as Ge,o as he,e as We,T as z,F as Ye,k as ne,q as C,cb as Ze,I as Qe,d as oe,cc as Xe,J as ye,C as xe,p as en,z as j,W as nn}from"./index-27ffd735.js";import{C as rn}from"./custom-breadcrumbs-891ee9b7.js";import{C as se}from"./component-block-053781a7.js";import"./index-e5978b8b.js";import"./CardHeader-8b482d81.js";function V(e,n){return n||(n=e.slice(0)),e.raw=n,e}var tn=function(){function e(r){var a=this;this._insertTag=function(t){a.container.insertBefore(t,a.tags.length===0?a.insertionPoint?a.insertionPoint.nextSibling:a.prepend?a.container.firstChild:a.before:a.tags[a.tags.length-1].nextSibling),a.tags.push(t)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(r){r.forEach(this._insertTag)},n.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(i){var o=document.createElement("style");return o.setAttribute("data-emotion",i.key),i.nonce!==void 0&&o.setAttribute("nonce",i.nonce),o.appendChild(document.createTextNode("")),o.setAttribute("data-s",""),o}(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(i){if(i.sheet)return i.sheet;for(var o=0;o<document.styleSheets.length;o++)if(document.styleSheets[o].ownerNode===i)return document.styleSheets[o]}(a);try{t.insertRule(r,t.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},n.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),E="-ms-",v="-webkit-",an=Math.abs,re=String.fromCharCode,on=Object.assign;function Le(e){return e.trim()}function g(e,n,r){return e.replace(n,r)}function ue(e,n){return e.indexOf(n)}function S(e,n){return 0|e.charCodeAt(n)}function H(e,n,r){return e.slice(n,r)}function P(e){return e.length}function fe(e){return e.length}function Y(e,n){return n.push(e),e}var te=1,M=1,Me=0,T=0,A=0,B="";function ae(e,n,r,a,t,i,o){return{value:e,root:n,parent:r,type:a,props:t,children:i,line:te,column:M,length:o,return:""}}function F(e,n){return on(ae("",null,null,"",null,null,0),e,{length:-e.length},n)}function sn(){return A=T>0?S(B,--T):0,M--,A===10&&(M=1,te--),A}function R(){return A=T<Me?S(B,T++):0,M++,A===10&&(M=1,te++),A}function I(){return S(B,T)}function Z(){return T}function J(e,n){return H(B,e,n)}function U(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Be(e){return te=M=1,Me=P(B=e),T=0,[]}function Fe(e){return B="",e}function Q(e){return Le(J(T-1,de(e===91?e+2:e===40?e+1:e)))}function ln(e){for(;(A=I())&&A<33;)R();return U(e)>2||U(A)>3?"":" "}function cn(e,n){for(;--n&&R()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return J(e,Z()+(n<6&&I()==32&&R()==32))}function de(e){for(;R();)switch(A){case e:return T;case 34:case 39:e!==34&&e!==39&&de(A);break;case 40:e===41&&de(e);break;case 92:R()}return T}function un(e,n){for(;R()&&e+A!==57&&(e+A!==84||I()!==47););return"/*"+J(n,T-1)+"*"+re(e===47?e:R())}function dn(e){for(;!U(I());)R();return J(e,T)}function pn(e){return Fe(X("",null,null,null,[""],e=Be(e),0,[0],e))}function X(e,n,r,a,t,i,o,l,x){for(var m=0,h=0,u=o,c=0,p=0,d=0,w=1,O=1,f=1,k=0,$="",W=t,G=i,N=a,b=$;O;)switch(d=k,k=R()){case 40:if(d!=108&&b.charCodeAt(u-1)==58){ue(b+=g(Q(k),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:b+=Q(k);break;case 9:case 10:case 13:case 32:b+=ln(d);break;case 92:b+=cn(Z()-1,7);continue;case 47:switch(I()){case 42:case 47:Y(hn(un(R(),Z()),n,r),x);break;default:b+="/"}break;case 123*w:l[m++]=P(b)*f;case 125*w:case 59:case 0:switch(k){case 0:case 125:O=0;case 59+h:p>0&&P(b)-u&&Y(p>32?ke(b+";",a,r,u-1):ke(g(b," ","")+";",a,r,u-2),x);break;case 59:b+=";";default:if(Y(N=we(b,n,r,m,h,t,l,$,W=[],G=[],u),i),k===123)if(h===0)X(b,n,N,N,W,i,u,l,G);else switch(c){case 100:case 109:case 115:X(e,N,N,a&&Y(we(e,N,N,0,0,t,l,$,t,W=[],u),G),t,G,u,l,a?W:G);break;default:X(b,N,N,N,[""],G,0,l,G)}}m=h=p=0,w=f=1,$=b="",u=o;break;case 58:u=1+P(b),p=d;default:if(w<1){if(k==123)--w;else if(k==125&&w++==0&&sn()==125)continue}switch(b+=re(k),k*w){case 38:f=h>0?1:(b+="\f",-1);break;case 44:l[m++]=(P(b)-1)*f,f=1;break;case 64:I()===45&&(b+=Q(R())),c=I(),h=u=P($=b+=dn(Z())),k++;break;case 45:d===45&&P(b)==2&&(w=0)}}return i}function we(e,n,r,a,t,i,o,l,x,m,h){for(var u=t-1,c=t===0?i:[""],p=fe(c),d=0,w=0,O=0;d<a;++d)for(var f=0,k=H(e,u+1,u=an(w=o[d])),$=e;f<p;++f)($=Le(w>0?c[f]+" "+k:g(k,/&\f/g,c[f])))&&(x[O++]=$);return ae(e,n,r,t===0?"rule":l,x,m,h)}function hn(e,n,r){return ae(e,n,r,"comm",re(A),H(e,2,-2),0)}function ke(e,n,r,a){return ae(e,n,r,"decl",H(e,0,a),H(e,a+1,-1),a)}function De(e,n){switch(function(r,a){return(((a<<2^S(r,0))<<2^S(r,1))<<2^S(r,2))<<2^S(r,3)}(e,n)){case 5103:return v+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return v+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return v+e+"-moz-"+e+E+e+e;case 6828:case 4268:return v+e+E+e+e;case 6165:return v+e+E+"flex-"+e+e;case 5187:return v+e+g(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return v+e+E+"flex-item-"+g(e,/flex-|-self/,"")+e;case 4675:return v+e+E+"flex-line-pack"+g(e,/align-content|flex-|-self/,"")+e;case 5548:return v+e+E+g(e,"shrink","negative")+e;case 5292:return v+e+E+g(e,"basis","preferred-size")+e;case 6060:return v+"box-"+g(e,"-grow","")+v+e+E+g(e,"grow","positive")+e;case 4554:return v+g(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return g(g(g(e,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),e,"")+e;case 5495:case 3959:return g(e,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return g(g(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+v+e+e;case 4095:case 3583:case 4068:case 2532:return g(e,/(.+)-inline(.+)/,v+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-n>6)switch(S(e,n+1)){case 109:if(S(e,n+4)!==45)break;case 102:return g(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(S(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~ue(e,"stretch")?De(g(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(S(e,n+1)!==115)break;case 6444:switch(S(e,P(e)-3-(~ue(e,"!important")&&10))){case 107:return g(e,":",":"+v)+e;case 101:return g(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+v+(S(e,14)===45?"inline-":"")+"box$3$1"+v+"$2$3$1"+E+"$2box$3")+e}break;case 5936:switch(S(e,n+11)){case 114:return v+e+E+g(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return v+e+E+g(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return v+e+E+g(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return v+e+E+e+e}return e}function L(e,n){for(var r="",a=fe(e),t=0;t<a;t++)r+=n(e[t],t,e,n)||"";return r}function fn(e,n,r,a){switch(e.type){case"@import":case"decl":return e.return=e.return||e.value;case"comm":return"";case"@keyframes":return e.return=e.value+"{"+L(e.children,a)+"}";case"rule":e.value=e.props.join(",")}return P(r=L(e.children,a))?e.return=e.value+"{"+r+"}":""}function mn(e){var n=Object.create(null);return function(r){return n[r]===void 0&&(n[r]=e(r)),n[r]}}var gn=function(e,n,r){for(var a=0,t=0;a=t,t=I(),a===38&&t===12&&(n[r]=1),!U(t);)R();return J(e,T)},je=new WeakMap,vn=function(e){if(e.type==="rule"&&e.parent&&!(e.length<1)){for(var n=e.value,r=e.parent,a=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(!(r=r.parent))return;if((e.props.length!==1||n.charCodeAt(0)===58||je.get(r))&&!a){je.set(e,!0);for(var t=[],i=function(h,u){return Fe(function(c,p){var d=-1,w=44;do switch(U(w)){case 0:w===38&&I()===12&&(p[d]=1),c[d]+=gn(T-1,p,d);break;case 2:c[d]+=Q(w);break;case 4:if(w===44){c[++d]=I()===58?"&\f":"",p[d]=c[d].length;break}default:c[d]+=re(w)}while(w=R());return c}(Be(h),u))}(n,t),o=r.props,l=0,x=0;l<i.length;l++)for(var m=0;m<o.length;m++,x++)e.props[x]=t[l]?i[l].replace(/&\f/g,o[m]):o[m]+" "+i[l]}}},bn=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}},yn=[function(e,n,r,a){if(e.length>-1&&!e.return)switch(e.type){case"decl":e.return=De(e.value,e.length);break;case"@keyframes":return L([F(e,{value:g(e.value,"@","@"+v)})],a);case"rule":if(e.length)return function(t,i){return t.map(i).join("")}(e.props,function(t){switch(function(i,o){return(i=/(::plac\w+|:read-\w+)/.exec(i))?i[0]:i}(t)){case":read-only":case":read-write":return L([F(e,{props:[g(t,/:(read-\w+)/,":-moz-$1")]})],a);case"::placeholder":return L([F(e,{props:[g(t,/:(plac\w+)/,":-webkit-input-$1")]}),F(e,{props:[g(t,/:(plac\w+)/,":-moz-$1")]}),F(e,{props:[g(t,/:(plac\w+)/,E+"input-$1")]})],a)}return""})}}],xn={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wn=/[A-Z]|^ms/g,kn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,qe=function(e){return e.charCodeAt(1)===45},Ce=function(e){return e!=null&&typeof e!="boolean"},le=mn(function(e){return qe(e)?e:e.replace(wn,"-$&").toLowerCase()}),Ae=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(kn,function(r,a,t){return _={name:a,styles:t,next:_},a})}return xn[e]===1||qe(e)||typeof n!="number"||n===0?n:n+"px"};function q(e,n,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":if(r.anim===1)return _={name:r.name,styles:r.styles,next:_},r.name;if(r.styles!==void 0){var a=r.next;if(a!==void 0)for(;a!==void 0;)_={name:a.name,styles:a.styles,next:_},a=a.next;var t=r.styles+";";return t}return function(x,m,h){var u="";if(Array.isArray(h))for(var c=0;c<h.length;c++)u+=q(x,m,h[c])+";";else for(var p in h){var d=h[p];if(typeof d!="object")m!=null&&m[d]!==void 0?u+=p+"{"+m[d]+"}":Ce(d)&&(u+=le(p)+":"+Ae(p,d)+";");else if(!Array.isArray(d)||typeof d[0]!="string"||m!=null&&m[d[0]]!==void 0){var w=q(x,m,d);switch(p){case"animation":case"animationName":u+=le(p)+":"+w+";";break;default:u+=p+"{"+w+"}"}}else for(var O=0;O<d.length;O++)Ce(d[O])&&(u+=le(p)+":"+Ae(p,d[O])+";")}return u}(e,n,r);case"function":if(e!==void 0){var i=_,o=r(e);return _=i,q(e,n,o)}break}if(n==null)return r;var l=n[r];return l!==void 0?l:r}var _,$e=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ce=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,t="";_=void 0;var i=e[0];i==null||i.raw===void 0?(a=!1,t+=q(r,n,i)):t+=i[0];for(var o=1;o<e.length;o++)t+=q(r,n,e[o]),a&&(t+=i[o]);$e.lastIndex=0;for(var l,x="";(l=$e.exec(t))!==null;)x+="-"+l[1];var m=function(h){for(var u,c=0,p=0,d=h.length;d>=4;++p,d-=4)u=1540483477*(65535&(u=255&h.charCodeAt(p)|(255&h.charCodeAt(++p))<<8|(255&h.charCodeAt(++p))<<16|(255&h.charCodeAt(++p))<<24))+(59797*(u>>>16)<<16),c=1540483477*(65535&(u^=u>>>24))+(59797*(u>>>16)<<16)^1540483477*(65535&c)+(59797*(c>>>16)<<16);switch(d){case 3:c^=(255&h.charCodeAt(p+2))<<16;case 2:c^=(255&h.charCodeAt(p+1))<<8;case 1:c=1540483477*(65535&(c^=255&h.charCodeAt(p)))+(59797*(c>>>16)<<16)}return(((c=1540483477*(65535&(c^=c>>>13))+(59797*(c>>>16)<<16))^c>>>15)>>>0).toString(36)}(t)+x;return{name:m,styles:t,next:_}};function ze(e,n,r){var a="";return r.split(" ").forEach(function(t){e[t]!==void 0?n.push(e[t]+";"):a+=t+" "}),a}var jn=function(e,n,r){(function(i,o,l){var x=i.key+"-"+o.name;l===!1&&i.registered[x]===void 0&&(i.registered[x]=o.styles)})(e,n,r);var a=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var t=n;do e.insert(n===t?"."+a:"",t,e.sheet,!0),t=t.next;while(t!==void 0)}};function Ee(e,n){if(e.inserted[n.name]===void 0)return e.insert("",n,e.sheet,!0)}function Se(e,n,r){var a=[],t=ze(e,a,r);return a.length<2?r:t+n(a)}var Te,Oe,Re,Ne,Pe,Cn=function e(n){for(var r="",a=0;a<n.length;a++){var t=n[a];if(t!=null){var i=void 0;switch(typeof t){case"boolean":break;case"object":if(Array.isArray(t))i=e(t);else for(var o in i="",t)t[o]&&o&&(i&&(i+=" "),i+=o);break;default:i=t}i&&(r&&(r+=" "),r+=i)}}return r},He=function(e){var n=function(a){var t=a.key;if(t==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(f){f.getAttribute("data-emotion").indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var o=a.stylisPlugins||yn,l,x,m={},h=[];l=a.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(f){for(var k=f.getAttribute("data-emotion").split(" "),$=1;$<k.length;$++)m[k[$]]=!0;h.push(f)});var u=[vn,bn],c,p,d=[fn,(p=function(f){c.insert(f)},function(f){f.root||(f=f.return)&&p(f)})],w=function(f){var k=fe(f);return function($,W,G,N){for(var b="",ie=0;ie<k;ie++)b+=f[ie]($,W,G,N)||"";return b}}(u.concat(o,d));x=function(f,k,$,W){c=$,L(pn(f?f+"{"+k.styles+"}":k.styles),w),W&&(O.inserted[k.name]=!0)};var O={key:t,sheet:new tn({key:t,container:l,nonce:a.nonce,speedy:a.speedy,prepend:a.prepend,insertionPoint:a.insertionPoint}),nonce:a.nonce,inserted:m,registered:{},insert:x};return O.sheet.hydrate(h),O}({key:"css"});n.sheet.speedy=function(a){this.isSpeedy=a},n.compat=!0;var r=function(){for(var a=arguments.length,t=new Array(a),i=0;i<a;i++)t[i]=arguments[i];var o=ce(t,n.registered,void 0);return jn(n,o,!1),n.key+"-"+o.name};return{css:r,cx:function(){for(var a=arguments.length,t=new Array(a),i=0;i<a;i++)t[i]=arguments[i];return Se(n.registered,r,Cn(t))},injectGlobal:function(){for(var a=arguments.length,t=new Array(a),i=0;i<a;i++)t[i]=arguments[i];var o=ce(t,n.registered);Ee(n,o)},keyframes:function(){for(var a=arguments.length,t=new Array(a),i=0;i<a;i++)t[i]=arguments[i];var o=ce(t,n.registered),l="animation-"+o.name;return Ee(n,{name:o.name,styles:"@keyframes "+l+"{"+o.styles+"}"}),l},hydrate:function(a){a.forEach(function(t){n.inserted[t]=!0})},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:ze.bind(null,n.registered),merge:Se.bind(null,n.registered,r)}}(),An=He.cx,K=He.css,Ue=K(Te||(Te=V([`
  content: '';
  position: absolute;
  top: 0;
  height: var(--tree-line-height);
  box-sizing: border-box;
`]))),$n=K(Oe||(Oe=V([`
  display: flex;
  padding-inline-start: 0;
  margin: 0;
  padding-top: var(--tree-line-height);
  position: relative;

  ::before {
    `,`;
    left: calc(50% - var(--tree-line-width) / 2);
    width: 0;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
`])),Ue),En=K(Re||(Re=V([`
  flex: auto;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: var(--tree-line-height) var(--tree-node-padding) 0
    var(--tree-node-padding);
`]))),Sn=K(Ne||(Ne=V([`
  ::before,
  ::after {
    `,`;
    right: 50%;
    width: 50%;
    border-top: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
  ::after {
    left: 50%;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }

  :only-of-type {
    padding: 0;
    ::after,
    :before {
      display: none;
    }
  }

  :first-of-type {
    ::before {
      border: 0 none;
    }
    ::after {
      border-radius: var(--tree-line-border-radius) 0 0 0;
    }
  }

  :last-of-type {
    ::before {
      border-right: var(--tree-line-width) var(--tree-node-line-style)
        var(--tree-line-color);
      border-radius: 0 var(--tree-line-border-radius) 0 0;
    }
    ::after {
      border: 0 none;
    }
  }
`])),Ue);function Ve(e){var n=e.children,r=e.label;return D.createElement("li",{className:An(En,Sn,e.className)},r,D.Children.count(n)>0&&D.createElement("ul",{className:$n},n))}function Tn(e){var n=e.children,r=e.label,a=e.lineHeight,t=a===void 0?"20px":a,i=e.lineWidth,o=i===void 0?"1px":i,l=e.lineColor,x=l===void 0?"black":l,m=e.nodePadding,h=m===void 0?"5px":m,u=e.lineStyle,c=u===void 0?"solid":u,p=e.lineBorderRadius,d=p===void 0?"5px":p;return D.createElement("ul",{className:K(Pe||(Pe=V([`
        padding-inline-start: 0;
        margin: 0;
        display: flex;

        --line-height: `,`;
        --line-width: `,`;
        --line-color: `,`;
        --line-border-radius: `,`;
        --line-style: `,`;
        --node-padding: `,`;

        --tree-line-height: var(--line-height, 20px);
        --tree-line-width: var(--line-width, 1px);
        --tree-line-color: var(--line-color, black);
        --tree-line-border-radius: var(--line-border-radius, 5px);
        --tree-node-line-style: var(--line-style, solid);
        --tree-node-padding: var(--node-padding, 5px);
      `])),t,o,x,d,c,h)},D.createElement(Ve,{label:r},n))}function Je(e,n="children"){let r=[];const a=e==null?void 0:e.map(t=>(t[n]&&t[n].length&&(r=[...r,...t[n]]),t));return a==null?void 0:a.concat(r.length?Je(r,n):r)}function me({node:e,depth:n,length:r,sx:a}){const t=pe(),i=t.palette.mode==="light",o=c=>({bgcolor:ne(t.palette[c].main,.08),border:`solid 1px ${ne(t.palette[c].main,.24)}`,color:i?t.palette[c].darker:t.palette[c].lighter}),l=n===1,x=e.group==="root",m=e.group==="product design",h=e.group==="development",u=e.group==="marketing";return s.jsxs(Ie,{sx:{position:"relative",display:"inline-flex"},alignItems:"center",children:[!l&&s.jsx(Ge,{alt:e.name,src:e.avatarUrl||"",sx:{mt:-3.5,zIndex:9,width:56,height:56,position:"absolute",border:`solid 4px ${t.palette.background.paper}`}}),s.jsxs(he,{sx:{pt:5,pb:3,minWidth:200,borderRadius:1.5,textTransform:"capitalize",...l&&{py:2},...l&&m&&o("primary"),...l&&h&&o("info"),...l&&u&&o("warning"),...a},children:[n!==1&&!x&&s.jsx(We,{sx:{top:0,left:0,width:1,height:4,position:"absolute",borderRadius:1.5,...m&&{bgcolor:"primary.light"},...h&&{bgcolor:"info.light"},...u&&{bgcolor:"warning.light"}}}),s.jsxs(z,{variant:l?"subtitle1":"subtitle2",noWrap:!0,children:[e.name,l&&s.jsx(Ye,{color:h&&"info"||u&&"warning"||"primary",sx:{ml:1},children:r})]}),!l&&s.jsx(z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:e.role})]})]})}me.propTypes={depth:C.number,length:C.number,node:C.object,sx:C.object};function ge({node:e,sx:n}){return s.jsx(he,{sx:{p:2,boxShadow:"none",borderRadius:1.5,display:"inline-flex",textTransform:"capitalize",color:r=>r.palette.mode==="light"?"primary.darker":"primary.lighter",bgcolor:r=>ne(r.palette.primary.main,.08),border:r=>`1px solid ${ne(r.palette.primary.main,.24)}`,...n},children:s.jsx(z,{variant:"subtitle2",children:e.name})})}ge.propTypes={node:C.object,sx:C.object};function ve({node:e,onEdit:n,onDelete:r,sx:a}){const t=Ze();return s.jsxs(s.Fragment,{children:[s.jsxs(he,{sx:{p:2,minWidth:200,borderRadius:1.5,textAlign:"left",position:"relative",display:"inline-flex",flexDirection:"column",textTransform:"capitalize",...a},children:[s.jsx(Qe,{color:t.open?"inherit":"default",onClick:t.onOpen,sx:{position:"absolute",top:8,right:8},children:s.jsx(oe,{icon:"eva:more-horizontal-fill"})}),s.jsx(Ge,{alt:e.name,src:e.avatarUrl||"",sx:{mr:2,mb:1,width:48,height:48}}),s.jsx(z,{variant:"subtitle2",noWrap:!0,children:e.name}),s.jsx(z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:e.role})]}),s.jsxs(Xe,{open:t.open,onClose:t.onClose,arrow:"left-center",sx:{width:160},children:[r&&s.jsxs(ye,{onClick:()=>{t.onClose(),r()},sx:{color:"error.main"},children:[s.jsx(oe,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),n&&s.jsxs(ye,{onClick:()=>{t.onClose(),n()},children:[s.jsx(oe,{icon:"solar:pen-bold"}),"Edit"]})]})]})}ve.propTypes={node:C.object,onDelete:C.func,onEdit:C.func,sx:C.object};function ee({data:e,variant:n="simple",sx:r,...a}){const t=pe();return s.jsx(Tn,{lineWidth:"1.5px",nodePadding:"4px",lineBorderRadius:"24px",lineColor:t.palette.divider,label:n==="simple"&&s.jsx(ge,{sx:r,node:e})||n==="standard"&&s.jsx(ve,{sx:r,node:e,onEdit:()=>console.info("EDIT",e.name),onDelete:()=>console.info("DELETE",e.name)})||n==="group"&&s.jsx(me,{sx:r,node:e}),...a,children:e.children.map(i=>s.jsx(be,{depth:1,data:i,variant:n,sx:r},i.name))})}ee.propTypes={data:C.object,sx:C.object,variant:C.string};function be({data:e,depth:n,variant:r,sx:a}){var i;const t=e.children&&!!e.children;return s.jsx(Ve,{label:r==="simple"&&s.jsx(ge,{sx:a,node:e})||r==="standard"&&s.jsx(ve,{sx:a,node:e,onEdit:()=>console.info("EDIT",e.name),onDelete:()=>console.info("DELETE",e.name)})||r==="group"&&s.jsx(me,{sx:a,node:e,depth:n,length:(i=Je(e.children))==null?void 0:i.length}),children:t&&s.jsx(Ke,{data:e.children,depth:n,variant:r,sx:a})})}be.propTypes={data:C.object,depth:C.number,sx:C.object,variant:C.string};function Ke({data:e,depth:n,variant:r,sx:a}){return s.jsx(s.Fragment,{children:e.map(t=>s.jsx(be,{data:t,depth:n+1,variant:r,sx:a},t.name))})}Ke.propTypes={data:C.array,depth:C.number,sx:C.object,variant:C.string};function On(){const e=pe();return s.jsxs(s.Fragment,{children:[s.jsx(We,{sx:{py:5,bgcolor:e.palette.mode==="light"?"grey.200":"grey.800"},children:s.jsx(xe,{children:s.jsx(rn,{heading:"Organizational Chart",links:[{name:"Components",href:en.components},{name:"Organizational Chart"}],moreLink:["https://www.npmjs.com/package/react-organizational-chart","https://daniel-hauser.github.io/react-organizational-chart/?path=/story/example-tree--basic"]})})}),s.jsx(xe,{sx:{my:10},children:s.jsxs(Ie,{spacing:5,children:[s.jsx(se,{title:"Simple",children:s.jsx(ee,{data:_e,lineColor:e.palette.primary.light})}),s.jsx(se,{title:"Standard",sx:{overflow:"auto"},children:s.jsx(ee,{data:_e,variant:"standard",lineHeight:"40px"})}),s.jsx(se,{title:"By Group",sx:{overflow:"auto"},children:s.jsx(ee,{data:Rn,variant:"group",lineHeight:"64px"})})]})})]})}const y=(e,n,r,a)=>({name:e,group:n,role:r,avatarUrl:a}),_e={...y("tasha mcneill","root","ceo, co-founder",j.image.avatar(1)),children:[{...y("john stone","product design","lead",j.image.avatar(2)),children:[{...y("rimsha wynn","product design","senior",j.image.avatar(3)),children:null}]},{...y("ponnappa priya","development","lead",j.image.avatar(4)),children:[{...y("tyra elliott","development","senior",j.image.avatar(5)),children:[{...y("sheridan mckee","development","back end developer",j.image.avatar(6)),children:[{...y("ang li","development","back end developer",j.image.avatar(7)),children:null}]},{...y("hope ahmad","development","front end",j.image.avatar(8)),children:null}]}]},{...y("peter stanbridge","marketing","lead",j.image.avatar(9)),children:[{...y("madeline harding","marketing","support",j.image.avatar(10)),children:null},{...y("eoin medrano","marketing","content writer",j.image.avatar(11)),children:null}]}]},Rn={...y("tasha mcneill","root","ceo, co-founder",j.image.avatar(1)),children:[{...y("product design","product design",null,null),children:[{...y("john stone","product design","lead",j.image.avatar(2)),children:[{...y("rimsha wynn","product design","senior",j.image.avatar(3)),children:null}]}]},{...y("development","development",null,null),children:[{...y("ponnappa priya","development","lead",j.image.avatar(4)),children:[{...y("tyra elliott","development","senior",j.image.avatar(5)),children:[{...y("sheridan mckee","development","back end developer",j.image.avatar(6)),children:[{...y("ang li","development","back end developer",j.image.avatar(7)),children:null}]},{...y("hope ahmad","development","front end",j.image.avatar(8)),children:null}]}]}]},{...y("marketing","marketing",null,null),children:[{...y("peter stanbridge","marketing","lead",j.image.avatar(9)),children:[{...y("madeline harding","marketing","support",j.image.avatar(10)),children:null},{...y("eoin medrano","marketing","content writer",j.image.avatar(11)),children:null}]}]}]};function Wn(){return s.jsxs(s.Fragment,{children:[s.jsx(nn,{children:s.jsx("title",{children:" Components: Organizational Chart"})}),s.jsx(On,{})]})}export{Wn as default};
