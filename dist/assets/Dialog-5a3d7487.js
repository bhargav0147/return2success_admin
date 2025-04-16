import{az as K,aA as X,r as c,s as d,cd as Y,ce as _,ap as i,as as r,y as P,au as H,g as V,av as q,aC as G,j as t,aw as f,ax as J,cf as O}from"./index-27ffd735.js";function Q(e){return X("MuiDialog",e)}const Z=K("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),W=Z,aa=c.createContext({}),ea=aa,oa=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ra=d(Y,{name:"MuiDialog",slot:"Backdrop",overrides:(e,a)=>a.backdrop})({zIndex:-1}),ia=e=>{const{classes:a,scroll:o,maxWidth:l,fullWidth:n,fullScreen:u}=e,x={root:["root"],container:["container",`scroll${i(o)}`],paper:["paper",`paperScroll${i(o)}`,`paperWidth${i(String(l))}`,n&&"paperFullWidth",u&&"paperFullScreen"]};return J(x,Q,a)},la=d(_,{name:"MuiDialog",slot:"Root",overridesResolver:(e,a)=>a.root})({"@media print":{position:"absolute !important"}}),sa=d("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.container,a[`scroll${i(o.scroll)}`]]}})(({ownerState:e})=>r({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),ta=d(P,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.paper,a[`scrollPaper${i(o.scroll)}`],a[`paperWidth${i(String(o.maxWidth))}`],o.fullWidth&&a.paperFullWidth,o.fullScreen&&a.paperFullScreen]}})(({theme:e,ownerState:a})=>r({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},a.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},a.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},a.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${W.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.maxWidth&&a.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[a.maxWidth]}${e.breakpoints.unit}`,[`&.${W.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[a.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${W.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),na=c.forwardRef(function(a,o){const l=H({props:a,name:"MuiDialog"}),n=V(),u={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":x,"aria-labelledby":B,BackdropComponent:S,BackdropProps:$,children:M,className:w,disableEscapeKeyDown:k=!1,fullScreen:j=!1,fullWidth:R=!1,maxWidth:T="sm",onBackdropClick:C,onClose:h,open:D,PaperComponent:F=P,PaperProps:y={},scroll:A="paper",TransitionComponent:N=O,transitionDuration:v=u,TransitionProps:E}=l,I=q(l,oa),p=r({},l,{disableEscapeKeyDown:k,fullScreen:j,fullWidth:R,maxWidth:T,scroll:A}),m=ia(p),g=c.useRef(),L=s=>{g.current=s.target===s.currentTarget},U=s=>{g.current&&(g.current=null,C&&C(s),h&&h(s,"backdropClick"))},b=G(B),z=c.useMemo(()=>({titleId:b}),[b]);return t.jsx(la,r({className:f(m.root,w),closeAfterTransition:!0,components:{Backdrop:ra},componentsProps:{backdrop:r({transitionDuration:v,as:S},$)},disableEscapeKeyDown:k,onClose:h,open:D,ref:o,onClick:U,ownerState:p},I,{children:t.jsx(N,r({appear:!0,in:D,timeout:v,role:"presentation"},E,{children:t.jsx(sa,{className:f(m.container),onMouseDown:L,ownerState:p,children:t.jsx(ta,r({as:F,elevation:24,role:"dialog","aria-describedby":x,"aria-labelledby":b},y,{className:f(m.paper,y.className),ownerState:p,children:t.jsx(ea.Provider,{value:z,children:M})}))})}))}))}),ca=na;export{ca as D,ea as a,W as d};
