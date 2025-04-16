import{v as I,a as $,c as T,r as c,d3 as G,p as L,j as e,C as U,o as _,k as q,F as J,bj as K,I as Q,d as X,ai as Z,B as ee,cW as P,ch as te,g as se,S as B,e as j,q as S}from"./index-27ffd735.js";import{a as w}from"./format-time-4dc4f2eb.js";import{C as ae}from"./custom-breadcrumbs-891ee9b7.js";import{C as oe}from"./confirm-dialog-31af3c64.js";import{g as le}from"./utils-b5337f6b.js";import{u as ne}from"./use-table-ad19f892.js";import{f as re,a as ie,b as de}from"./table-pagination-custom-61c144d7.js";import{O as ce}from"./order-table-row-e371dba6.js";import{T as ue,a as me}from"./Tabs-a75c564a.js";import{T as pe,a as ge,b as he}from"./TableContainer-f8ac8b22.js";import{b as N}from"./format-number-bf5061ab.js";import{u as fe,C as xe}from"./use-chart-45ae7a6e.js";import{L as be}from"./ListItemText-ff35796a.js";import{F as E}from"./file-manager-new-folder-dialog-10ab5cf7.js";const je=[{value:"all",label:"All"},{value:"pending",label:"Pending"},{value:"approved",label:"Approved"},{value:"rejected",label:"Rejected"},{value:"expired",label:"Expired"}],Ce=[{id:"user",label:"User"},{id:"email",label:"Email"},{id:"CreatedAt",label:"Created Date"},{id:"amount",label:"Amount"},{id:"transactionId",label:"Transaction Id"},{id:"status",label:"Status"},{id:"action",label:"Action"}],ve=[{id:"user",label:"User"},{id:"businessname",label:"business Name"},{id:"amount",label:"Amount"},{id:"CreatedAt",label:"Created Date"},{id:"status",label:"Status"},{id:"action",label:"Action"}],we={name:"",status:"all",startDate:null,endDate:null};function Se({isRegister:n,isPromotion:g}){var O,k;const s=ne({defaultOrderBy:"orderNumber"}),f=I(),u=$(),r=T(),[i,m]=c.useState(G),[l,a]=c.useState(we),h=l.startDate&&l.endDate?l.startDate.getTime()>l.endDate.getTime():!1,p=Te({inputData:i,comparator:le(s.order,s.orderBy),filters:l,dateError:h}),b=p.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage);s.dense;const v=!!l.name||l.status!=="all"||!!l.startDate&&!!l.endDate;!p.length&&v||p.length;const y=c.useCallback((t,o)=>{s.onResetPage(),a(d=>({...d,[t]:o}))},[s]),z=c.useCallback(t=>{const o=i.filter(d=>d.id!==t);m(o),s.onUpdatePageDeleteRow(b.length)},[b.length,s,i]),H=c.useCallback(()=>{const t=i.filter(o=>!s.selected.includes(o.id));m(t),s.onUpdatePageDeleteRows({totalRows:i.length,totalRowsInPage:b.length,totalRowsFiltered:p.length})},[p.length,b.length,s,i]),V=c.useCallback(t=>{u.push(L.dashboard.order.details(t))},[u]),M=c.useCallback((t,o)=>{y("status",o)},[y]),[x,F]=c.useState([]),R=async()=>{var t,o;try{if(g){const{data:d}=await P.get("/api/admin/promotion?sortOrder=desc");console.log(d),F((t=d==null?void 0:d.data)==null?void 0:t.promotionData)}else{const{data:d}=await P.get(te.paymentHistory);console.log(d),F((o=d==null?void 0:d.data)==null?void 0:o.data)}}catch(d){console.log(d)}};c.useEffect(()=>{R()},[]);const[D,Y]=c.useState("all"),A=t=>t==="all"?x:x.filter(o=>o.status===t);return e.jsxs(e.Fragment,{children:[e.jsxs(U,{maxWidth:f.themeStretch?!1:"xl",children:[e.jsx(ae,{heading:g?"Promotion":"Register",links:[{name:"Dashboard",href:L.dashboard.root},{name:g?"Promotion":"Register"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(_,{children:[e.jsx(ue,{value:l.status,onChange:M,sx:{px:2.5,boxShadow:t=>`inset 0 -2px 0 0 ${q(t.palette.grey[500],.08)}`},children:je.map(t=>e.jsx(me,{onClick:()=>Y(t.value),iconPosition:"end",value:t.value,label:t.label,icon:e.jsxs(J,{variant:(t.value==="all"||t.value===l.status)&&"filled"||"soft",color:t.value==="approved"&&"success"||t.value==="pending"&&"warning"||t.value==="rejected"&&"error"||t.value==="expired"&&"default"||"default",children:[t.value==="all"&&x.length,t.value==="approved"&&x.filter(o=>o.status==="approved").length,t.value==="pending"&&x.filter(o=>o.status==="pending").length,t.value==="rejected"&&x.filter(o=>o.status==="rejected").length,t.value==="expired"&&x.filter(o=>o.status==="expired").length]})},t.value))}),e.jsxs(pe,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(re,{dense:s.dense,numSelected:s.selected.length,rowCount:i.length,onSelectAllRows:t=>s.onSelectAllRows(t,i.map(o=>o.id)),action:e.jsx(K,{title:"Delete",children:e.jsx(Q,{color:"primary",onClick:r.onTrue,children:e.jsx(X,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(Z,{children:e.jsxs(ge,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ie,{headLabel:g?ve:Ce}),e.jsxs(he,{children:[(O=A(D))==null?void 0:O.map(t=>e.jsx(ce,{isRegister:n,isPromotion:g,row:t,selected:s.selected.includes(t.id),onSelectRow:()=>s.onSelectRow(t.id),onDeleteRow:()=>z(t.id),onViewRow:()=>V(t.id),reloadFn:R},t.id)),e.jsx(de,{notFound:!((k=A(D))!=null&&k.length)})]})]})})]})]})]}),e.jsx(oe,{open:r.value,onClose:r.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(ee,{variant:"contained",color:"error",onClick:()=>{H(),r.onFalse()},children:"Delete"})})]})}function Te({inputData:n,comparator:g,filters:s,dateError:f}){const{status:u,name:r,startDate:i,endDate:m}=s,l=n.map((a,h)=>[a,h]);return l.sort((a,h)=>{const p=g(a[0],h[0]);return p!==0?p:a[1]-h[1]}),n=l.map(a=>a[0]),r&&(n=n.filter(a=>a.orderNumber.toLowerCase().indexOf(r.toLowerCase())!==-1||a.customer.name.toLowerCase().indexOf(r.toLowerCase())!==-1||a.customer.email.toLowerCase().indexOf(r.toLowerCase())!==-1)),u!=="all"&&(n=n.filter(a=>a.status===u)),f||i&&m&&(n=n.filter(a=>w(a.createdAt)>=w(i)&&w(a.createdAt)<=w(m))),n}function W({data:n,total:g,chart:s,...f}){const u=se(),{colors:r=[u.palette.info.main,u.palette.info.dark],series:i,options:m}=s,l=fe({chart:{offsetY:-16,sparkline:{enabled:!0}},grid:{padding:{top:24,bottom:24}},legend:{show:!1},plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"56%"},dataLabels:{name:{offsetY:8},value:{offsetY:-40},total:{label:`Used of ${N(g)} / 50GB`,color:u.palette.text.disabled,fontSize:u.typography.body2.fontSize,fontWeight:u.typography.body2.fontWeight}}}},fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:r[0],opacity:1},{offset:100,color:r[1],opacity:1}]}},...m});return e.jsxs(_,{...f,children:[e.jsx(xe,{dir:"ltr",type:"radialBar",series:[i],options:l,width:"100%",height:360}),e.jsx(B,{spacing:3,sx:{px:3,pb:5},children:n.map(a=>e.jsxs(B,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(j,{sx:{width:40,height:40},children:a.icon}),e.jsx(be,{primary:a.name,secondary:`${a.filesCount} files`,secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(j,{sx:{typography:"subtitle2"},children:[" ",N(a.usedStorage)," "]})]},a.name))})]})}W.propTypes={chart:S.object,data:S.array,total:S.number};const C=1e9*24;function _e({isPromotion:n,isRegister:g}){const s=I(),[f,u]=c.useState(""),[r,i]=c.useState([]),m=T(),l=T(),a=c.useCallback(p=>{u(p.target.value)},[]),h=c.useCallback(()=>{m.onFalse(),u(""),console.info("CREATE NEW FOLDER")},[m]);return c.useCallback(p=>{const b=p.map(v=>Object.assign(v,{preview:URL.createObjectURL(v)}));i([...r,...b])},[r]),C/2,j,C/5,j,C/5,j,C/10,j,e.jsxs(e.Fragment,{children:[e.jsx(U,{maxWidth:s.themeStretch?!1:"xl",children:e.jsx(Se,{isRegister:g,isPromotion:n})}),e.jsx(E,{open:l.value,onClose:l.onFalse}),e.jsx(E,{open:m.value,onClose:m.onFalse,title:"New Folder",folderName:f,onChangeFolderName:a,onCreate:h})]})}export{_e as O};
