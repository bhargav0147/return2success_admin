import{aA as m,az as y,s as p,as as a,r as n,au as L,av as S,bq as x,j as b,aw as A,ax as I}from"./index-27ffd735.js";function C(t){return m("MuiListItemSecondaryAction",t)}y("MuiListItemSecondaryAction",["root","disableGutters"]);const G=["className"],f=t=>{const{disableGutters:s,classes:e}=t;return I({root:["root",s&&"disableGutters"]},C,e)},g=p("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.disableGutters&&s.disableGutters]}})(({ownerState:t})=>a({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),i=n.forwardRef(function(s,e){const o=L({props:s,name:"MuiListItemSecondaryAction"}),{className:c}=o,l=S(o,G),u=n.useContext(x),r=a({},o,{disableGutters:u.disableGutters}),d=f(r);return b.jsx(g,a({className:A(d.root,c),ownerState:r,ref:e},l))});i.muiName="ListItemSecondaryAction";const w=i;export{w as L};
