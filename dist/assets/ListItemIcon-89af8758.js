import{s as I,as as a,r,au as x,av as p,bq as u,j as f,aw as L,ax as d,el as g}from"./index-27ffd735.js";const v=["className"],S=s=>{const{alignItems:t,classes:e}=s;return d({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},g,e)},w=I("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:e}=s;return[t.root,e.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:s,ownerState:t})=>a({minWidth:56,color:(s.vars||s).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),C=r.forwardRef(function(t,e){const o=x({props:t,name:"MuiListItemIcon"}),{className:i}=o,c=p(o,v),l=r.useContext(u),n=a({},o,{alignItems:l.alignItems}),m=S(n);return f.jsx(w,a({className:L(m.root,i),ownerState:n,ref:e},c))}),h=C;export{h as L};
