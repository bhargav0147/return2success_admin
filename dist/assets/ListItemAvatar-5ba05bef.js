import{aA as x,az as u,s as I,as as o,r as n,au as v,av as g,bq as p,j as L,aw as f,ax as A}from"./index-27ffd735.js";function d(t){return x("MuiListItemAvatar",t)}u("MuiListItemAvatar",["root","alignItemsFlexStart"]);const C=["className"],S=t=>{const{alignItems:s,classes:e}=t;return A({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},d,e)},h=I("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:t})=>o({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),w=n.forwardRef(function(s,e){const a=v({props:s,name:"MuiListItemAvatar"}),{className:i}=a,l=g(a,C),m=n.useContext(p),r=o({},a,{alignItems:m.alignItems}),c=S(r);return L.jsx(h,o({className:f(c.root,i),ownerState:r,ref:e},l))}),j=w;export{j as L};
