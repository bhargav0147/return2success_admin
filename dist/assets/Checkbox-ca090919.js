import{ao as m,j as a,s as B,aF as P,ap as x,as as s,aS as p,k as S,r as u,au as y,av as R,aw as g,ax as H,aT as M}from"./index-27ffd735.js";import{S as _}from"./SwitchBase-cff1fcb3.js";const E=m(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),O=m(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=m(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],F=o=>{const{classes:e,indeterminate:c,color:n,size:r}=o,t={root:["root",c&&"indeterminate",`color${x(n)}`,`size${x(r)}`]},l=H(t,M,e);return s({},e,l)},L=B(_,{shouldForwardProp:o=>P(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,c.color!=="default"&&e[`color${x(c.color)}`]]}})(({theme:o,ownerState:e})=>s({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:S(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${p.checked}, &.${p.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${p.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),N=a.jsx(O,{}),T=a.jsx(E,{}),U=a.jsx(V,{}),W=u.forwardRef(function(e,c){var n,r;const t=y({props:e,name:"MuiCheckbox"}),{checkedIcon:l=N,color:I="primary",icon:b=T,indeterminate:i=!1,indeterminateIcon:h=U,inputProps:z,size:d="medium",className:$}=t,j=R(t,w),k=i?h:b,v=i?h:l,C=s({},t,{color:I,indeterminate:i,size:d}),f=F(C);return a.jsx(L,s({type:"checkbox",inputProps:s({"data-indeterminate":i},z),icon:u.cloneElement(k,{fontSize:(n=k.props.fontSize)!=null?n:d}),checkedIcon:u.cloneElement(v,{fontSize:(r=v.props.fontSize)!=null?r:d}),ownerState:C,ref:c,className:g(f.root,$)},j,{classes:f}))}),D=W;export{D as C};
