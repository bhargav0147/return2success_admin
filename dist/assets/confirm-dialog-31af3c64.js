import{j as o,B as l,q as i}from"./index-27ffd735.js";import{D as p}from"./Dialog-5a3d7487.js";import{D as m}from"./DialogTitle-eb11eb3a.js";import{D as c}from"./DialogContent-90bef667.js";import{D as x}from"./DialogActions-29076f9a.js";function d({title:n,content:r,action:s,open:e,onClose:t,...a}){return o.jsxs(p,{fullWidth:!0,maxWidth:"xs",open:e,onClose:t,...a,children:[o.jsx(m,{sx:{pb:2},children:n}),r&&o.jsxs(c,{sx:{typography:"body2"},children:[" ",r," "]}),o.jsxs(x,{children:[s,o.jsx(l,{variant:"outlined",color:"inherit",onClick:t,children:"Cancel"})]})]})}d.propTypes={action:i.node,content:i.node,onClose:i.func,open:i.bool,title:i.string};export{d as C};
