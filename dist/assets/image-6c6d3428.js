import{j as r,e as s,C as a,p as d,S as t,o,T as m,z as x,W as c}from"./index-27ffd735.js";import{I as i}from"./image-7d02ef11.js";import{C as j}from"./custom-breadcrumbs-891ee9b7.js";import{C as n}from"./CardHeader-8b482d81.js";import"./index-e5978b8b.js";const h=["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"],p=h.map((e,l)=>({ratio:e,url:x.image.cover(l+1)}));function g(){return r.jsxs(r.Fragment,{children:[r.jsx(s,{sx:{py:5,bgcolor:e=>e.palette.mode==="light"?"grey.200":"grey.800"},children:r.jsx(a,{children:r.jsx(j,{heading:"Image",links:[{name:"Components",href:d.components},{name:"Image"}]})})}),r.jsx(a,{sx:{my:10},children:r.jsxs(t,{spacing:5,children:[r.jsxs(o,{children:[r.jsx(n,{title:"List"}),r.jsx(s,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},sx:{p:3},children:p.map(e=>r.jsx(i,{alt:e.ratio,src:e.url,sx:{borderRadius:2}},e.ratio))})]}),r.jsxs(o,{children:[r.jsx(n,{title:"Aspect Ratio"}),r.jsx(s,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},sx:{p:3},children:p.map(e=>r.jsxs(t,{spacing:1,children:[r.jsx(m,{variant:"overline",sx:{color:"text.secondary"},children:e.ratio}),r.jsx(i,{alt:e.ratio,src:e.url,ratio:e.ratio,sx:{borderRadius:2}})]},e.ratio))})]})]})})]})}function R(){return r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsx("title",{children:" Components: Image"})}),r.jsx(g,{})]})}export{R as default};
