import{r as c,s as g,y as U,bR as R,as as n,au as N,av as w,aO as B,j as l,aw as v,ax as j,bS as I,bT as P,aV as E,bU as x,bV as W,aA as q,az as _}from"./index-27ffd735.js";import"./index-e5978b8b.js";const L=c.createContext({}),k=L,H=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],O=o=>{const{classes:s,square:e,expanded:a,disabled:r,disableGutters:i}=o;return j({root:["root",!e&&"rounded",a&&"expanded",r&&"disabled",!i&&"gutters"],region:["region"]},I,s)},z=g(U,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:e}=o;return[{[`& .${R.region}`]:s.region},s.root,!e.square&&s.rounded,!e.disableGutters&&s.gutters]}})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${R.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o,ownerState:s})=>n({},!s.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!s.disableGutters&&{[`&.${R.expanded}`]:{margin:"16px 0"}})),F=c.forwardRef(function(s,e){const a=N({props:s,name:"MuiAccordion"}),{children:r,className:i,defaultExpanded:d=!1,disabled:p=!1,disableGutters:b=!1,expanded:h,onChange:f,square:y=!1,TransitionComponent:C=P,TransitionProps:A}=a,S=w(a,H),[t,u]=B({controlled:h,default:d,name:"Accordion",state:"expanded"}),m=c.useCallback(T=>{u(!t),f&&f(T,!t)},[t,f,u]),[$,...V]=c.Children.toArray(r),D=c.useMemo(()=>({expanded:t,disabled:p,disableGutters:b,toggle:m}),[t,p,b,m]),G=n({},a,{square:y,disabled:p,disableGutters:b,expanded:t}),M=O(G);return l.jsxs(z,n({className:v(M.root,i),ref:e,ownerState:G,square:y},S,{children:[l.jsx(k.Provider,{value:D,children:$}),l.jsx(C,n({in:t,timeout:"auto"},A,{children:l.jsx("div",{"aria-labelledby":$.props.id,id:$.props["aria-controls"],role:"region",className:M.region,children:V})}))]}))}),io=F,J=["children","className","expandIcon","focusVisibleClassName","onClick"],K=o=>{const{classes:s,expanded:e,disabled:a,disableGutters:r}=o;return j({root:["root",e&&"expanded",a&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",e&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",e&&"expanded"]},W,s)},Q=g(E,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o,ownerState:s})=>{const e={duration:o.transitions.duration.shortest};return n({display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],e),[`&.${x.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${x.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${x.disabled})`]:{cursor:"pointer"}},!s.disableGutters&&{[`&.${x.expanded}`]:{minHeight:64}})}),X=g("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(({theme:o,ownerState:s})=>n({display:"flex",flexGrow:1,margin:"12px 0"},!s.disableGutters&&{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${x.expanded}`]:{margin:"20px 0"}})),Y=g("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${x.expanded}`]:{transform:"rotate(180deg)"}})),Z=c.forwardRef(function(s,e){const a=N({props:s,name:"MuiAccordionSummary"}),{children:r,className:i,expandIcon:d,focusVisibleClassName:p,onClick:b}=a,h=w(a,J),{disabled:f=!1,disableGutters:y,expanded:C,toggle:A}=c.useContext(k),S=m=>{A&&A(m),b&&b(m)},t=n({},a,{expanded:C,disabled:f,disableGutters:y}),u=K(t);return l.jsxs(Q,n({focusRipple:!1,disableRipple:!0,disabled:f,component:"div","aria-expanded":C,className:v(u.root,i),focusVisibleClassName:v(u.focusVisible,p),onClick:S,ref:e,ownerState:t},h,{children:[l.jsx(X,{className:u.content,ownerState:t,children:r}),d&&l.jsx(Y,{className:u.expandIconWrapper,ownerState:t,children:d})]}))}),co=Z;function oo(o){return q("MuiAccordionDetails",o)}_("MuiAccordionDetails",["root"]);const so=["className"],eo=o=>{const{classes:s}=o;return j({root:["root"]},oo,s)},ao=g("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),to=c.forwardRef(function(s,e){const a=N({props:s,name:"MuiAccordionDetails"}),{className:r}=a,i=w(a,so),d=a,p=eo(d);return l.jsx(ao,n({className:v(p.root,r),ref:e,ownerState:d},i))}),lo=to;export{io as A,co as a,lo as b};
