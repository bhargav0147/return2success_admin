import{az as P,aA as y,s as C,as as c,r as b,au as I,av as j,j as i,aw as L,T as z,ap as m,ax as $}from"./index-27ffd735.js";import{u as R,F as T}from"./useFormControl-146f88ba.js";function F(n){return y("MuiInputAdornment",n)}const w=P("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=w;var f;const M=["children","className","component","disablePointerEvents","disableTypography","position","variant"],N=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${m(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},S=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:o,position:s,size:r,variant:l}=n,d={root:["root",e&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",r&&`size${m(r)}`]};return $(d,F,t)},U=C("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:N})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${x.positionStart}&:not(.${x.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),_=b.forwardRef(function(t,e){const o=I({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:g=!1,position:u,variant:v}=o,A=j(o,M),a=R()||{};let p=v;v&&a.variant,a&&!p&&(p=a.variant);const h=c({},o,{hiddenLabel:a.hiddenLabel,size:a.size,disablePointerEvents:d,position:u,variant:p}),E=S(h);return i.jsx(T.Provider,{value:null,children:i.jsx(U,c({as:l,ownerState:h,className:L(E.root,r),ref:e},A,{children:typeof s=="string"&&!g?i.jsx(z,{color:"text.secondary",children:s}):i.jsxs(b.Fragment,{children:[u==="start"?f||(f=i.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})}),W=_;export{W as I};
