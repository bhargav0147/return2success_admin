import{ci as x,r as i,j as e,e as c,C as u,p as h,o as g,S as p,T as r,bj as j,I as b,d as y,W as f}from"./index-27ffd735.js";import{u as k}from"./use-double-click-1ccea145.js";import{u as T}from"./use-copy-to-clipboard-af9f493c.js";import{C as v}from"./custom-breadcrumbs-891ee9b7.js";import{T as S}from"./TextField-18c86d14.js";import{I as q}from"./InputAdornment-babdc070.js";import"./index-e5978b8b.js";import"./FormControl-26894946.js";import"./utils-a73c94d0.js";import"./useFormControl-146f88ba.js";import"./formControlState-a1fb9590.js";import"./FormLabel-fae9cf0f.js";import"./Select-7c65bb90.js";import"./Menu-02e5c653.js";import"./List-1e1da31b.js";import"./InputBase-894de89e.js";function I(){const{enqueueSnackbar:s}=x(),{copy:t}=T(),[a,d]=i.useState("https://www.npmjs.com/package/"),n=`Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat
  dolor lectus quis orci. Cras non dolor. Praesent egestas neque eu enim. Ut varius
  tincidunt libero. Fusce fermentum odio nec arcu. Etiam rhoncus. Nulla sit amet est.
  Donec posuere vulputate arcu. Vestibulum ullamcorper mauris at ligula. Praesent ut
  ligula non mi varius sagittis. Pellentesque posuere. Praesent adipiscing. Sed
  libero. Duis leo. Nulla porta dolor.`,l=i.useCallback(o=>{o&&(s("Copied!"),t(o))},[t,s]),m=k({doubleClick:()=>l(n)}),C=i.useCallback(o=>{d(o.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(c,{sx:{py:5,bgcolor:o=>o.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(u,{children:e.jsx(v,{heading:"Copy To Clipboard",links:[{name:"Components",href:h.components},{name:"Copy To Clipboard"}]})})}),e.jsx(u,{sx:{my:10},children:e.jsx(g,{sx:{p:5},children:e.jsxs(c,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},gap:5,children:[e.jsxs(p,{spacing:2,children:[e.jsx(r,{variant:"overline",sx:{color:"text.secondary"},children:"on Change"}),e.jsx(S,{fullWidth:!0,value:a,onChange:C,InputProps:{endAdornment:e.jsx(q,{position:"end",children:e.jsx(j,{title:"Copy",children:e.jsx(b,{onClick:()=>l(a),children:e.jsx(y,{icon:"eva:copy-fill",width:24})})})})}})]}),e.jsxs(p,{spacing:2,children:[e.jsx(r,{variant:"overline",sx:{color:"text.secondary"},children:"on Double Click"}),e.jsx(r,{onClick:m,children:n})]})]})})})]})}function J(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx("title",{children:" Components: to Clipboard"})}),e.jsx(I,{})]})}export{J as default};
