import{j as t,F as z,B as v,cW as I,d7 as G,q as b,v as V,a as H,c as _,r as a,d3 as M,p as L,d4 as Q,C as q,d as Y,o as K,ai as X,g as Z,W as ee}from"./index-27ffd735.js";import{a as C}from"./format-time-4dc4f2eb.js";import{C as te}from"./custom-breadcrumbs-891ee9b7.js";import{g as se,c as ae}from"./utils-b5337f6b.js";import{u as B}from"./use-table-ad19f892.js";import{T as N,c as re,d as oe,b as ne,e as le}from"./table-pagination-custom-61c144d7.js";import"./confirm-dialog-31af3c64.js";import{T as i}from"./TablePagination-488334e4.js";import{B as ie}from"./Box-531386b9.js";import{S as ce}from"./Stack-81f38202.js";import{T as de}from"./TextField-18c86d14.js";import{I as ue}from"./InputAdornment-babdc070.js";import{T as pe,a as me,b as ge}from"./TableContainer-f8ac8b22.js";import"./index-e5978b8b.js";import"./empty-content-67ee3c7b.js";import"./Checkbox-ca090919.js";import"./SwitchBase-cff1fcb3.js";import"./useFormControl-146f88ba.js";import"./FormControlLabel-4c76a5b9.js";import"./formControlState-a1fb9590.js";import"./Switch-356d0d7d.js";import"./Dialog-5a3d7487.js";import"./DialogTitle-eb11eb3a.js";import"./dialogTitleClasses-80e3b880.js";import"./DialogContent-90bef667.js";import"./DialogActions-29076f9a.js";import"./KeyboardArrowRight-44da873a.js";import"./FirstPage-6da56183.js";import"./Select-7c65bb90.js";import"./Menu-02e5c653.js";import"./List-1e1da31b.js";import"./utils-a73c94d0.js";import"./InputBase-894de89e.js";import"./FormControl-26894946.js";import"./FormLabel-fae9cf0f.js";function he(e){const u=new Date(e),g=String(u.getDate()).padStart(2,"0"),c=String(u.getMonth()+1).padStart(2,"0"),p=u.getFullYear();return`${g}/${c}/${p}`}function A({idex:e,row:u,selected:g,reloadFn:c,onViewRow:p,onSelectRow:l,onDeleteRow:x,isRegister:h,isPromotion:w,getAllCategory:r,getAllSupportRequest:o}){const{id:m,description:R,title:D,ticketNumber:j,supportStatus:d,created_at:T}=u,y=he(T);B();const E=async S=>{try{(await I.put("/api/admin/support/updateSupport",{ticketNumber:j,status:S})).status===200&&(o(),G("Support Request Update Successfully",{variant:"success"}))}catch(f){console.error(f)}};return t.jsxs(N,{hover:!0,children:[t.jsx(i,{children:e}),t.jsx(i,{align:"center",children:D}),t.jsx(i,{align:"center",children:j}),t.jsx(i,{align:"start",children:R}),t.jsx(i,{align:"center",children:y}),t.jsx(i,{align:"center",children:t.jsx(z,{variant:"soft",color:d==="PENDING"&&"warning"||d==="SOLVED"&&"success"||d==="REJECTED"&&"error"||"default",children:d})}),t.jsxs(i,{align:"center",children:[t.jsx(v,{disabled:d==="SOLVED"||d==="REJECTED",color:"success",variant:"contained",sx:{mr:2},onClick:()=>{E("SOLVED")},children:"Approve"}),t.jsx(v,{disabled:d==="SOLVED"||d==="REJECTED",color:"error",variant:"contained",onClick:()=>{E("REJECTED")},children:"Reject"})]})]})}A.propTypes={onDeleteRow:b.func,onSelectRow:b.func,onViewRow:b.func,row:b.object,selected:b.bool};const F={name:"",status:"all",startDate:null,endDate:null};function xe(){const e=B({defaultOrderBy:"orderNumber"}),u=V(),g=H();_();const[c,p]=a.useState(M),[l,x]=a.useState(F),[h,w]=a.useState("");a.useState("");const r=l.startDate&&l.endDate?l.startDate.getTime()>l.endDate.getTime():!1,o=fe({inputData:c,comparator:se(e.order,e.orderBy),filters:l,dateError:r}),m=o.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),R=e.dense?52:72,D=!!l.name||l.status!=="all"||!!l.startDate&&!!l.endDate,j=a.useCallback((s,n)=>{e.onResetPage(),x(k=>({...k,[s]:n}))},[e]),d=a.useCallback(s=>{const n=c.filter(k=>k.id!==s);p(n),e.onUpdatePageDeleteRow(m.length)},[m.length,e,c]);a.useCallback(()=>{const s=c.filter(n=>!e.selected.includes(n.id));p(s),e.onUpdatePageDeleteRows({totalRows:c.length,totalRowsInPage:m.length,totalRowsFiltered:o.length})},[o.length,m.length,e,c]),a.useCallback(()=>{x(F)},[]);const T=a.useCallback(s=>{g.push(L.dashboard.order.details(s))},[g]);a.useCallback((s,n)=>{j("status",n)},[j]);const y=Q(),S=new URLSearchParams(y.search).get("page"),[f,O]=a.useState([]),[je,W]=a.useState(Number(S)||1),[$,J]=a.useState(1);a.useEffect(()=>{W(Number(S))},[S]),a.useState(e.rowsPerPage);const P=a.useCallback(async()=>{var s;try{const n=await I.get(`/api/admin/support/getSupport?limit=${e.rowsPerPage}&page=${e.page+1}&search=${h}`);O(n.data.data),J((s=n==null?void 0:n.data)==null?void 0:s.pagination.totalItems)}catch(n){console.error(n)}},[e.rowsPerPage,e.page,h]),U=!o.length&&D||!o.length;return a.useEffect(()=>{P(),console.log("pagelimite===>",e.rowsPerPage)},[P,e.rowsPerPage]),a.useState("all"),a.useState(!1),t.jsxs(q,{maxWidth:u.themeStretch?!1:"lg",children:[t.jsx(ie,{sx:{display:"flex",justifyContent:"space-between"},children:t.jsx(te,{heading:"Support",links:[{name:"Dashboard",href:L.dashboard.root},{name:"Support",href:L.dashboard.support},{name:"Requests"}],sx:{mb:{xs:3,md:5}}})}),t.jsx(ce,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1,mb:5},children:t.jsx(de,{fullWidth:!0,placeholder:"Search...",onChange:s=>{w(s.target.value),console.log(h)},InputProps:{startAdornment:t.jsx(ue,{position:"start",children:t.jsx(Y,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),t.jsxs(K,{children:[t.jsx(pe,{sx:{position:"relative",overflow:"unset"},children:t.jsx(X,{children:t.jsxs(me,{size:e.dense?"small":"medium",sx:{minWidth:"100%"},children:[t.jsx(re,{children:t.jsxs(N,{children:[t.jsx(i,{sx:{width:"10%"},children:"Sr no."}),t.jsx(i,{align:"center",children:"Title"}),t.jsx(i,{align:"center",children:"ticketNumber"}),t.jsx(i,{align:"center",children:"description"}),t.jsx(i,{align:"center",children:"Date"}),t.jsx(i,{align:"center",children:"status"}),t.jsx(i,{align:"center",children:"Action"})]})}),t.jsxs(ge,{children:[f==null?void 0:f.map((s,n)=>t.jsx(A,{idex:n+1,getAllSupportRequest:P,row:s,selected:e.selected.includes(s.id),onSelectRow:()=>e.onSelectRow(s.id),onDeleteRow:()=>d(s.id),onViewRow:()=>T(s.id),reloadFn:P},s.id)),(o==null?void 0:o.length)>0&&t.jsx(oe,{height:R,emptyRows:ae(e.page,e.rowsPerPage,o.length)}),t.jsx(ne,{notFound:U})]})]})})}),t.jsx(le,{count:$,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]})}function fe({inputData:e,comparator:u,filters:g,dateError:c}){const{status:p,name:l,startDate:x,endDate:h}=g,w=e.map((r,o)=>[r,o]);return w.sort((r,o)=>{const m=u(r[0],o[0]);return m!==0?m:r[1]-o[1]}),e=w.map(r=>r[0]),l&&(e=e.filter(r=>r.orderNumber.toLowerCase().indexOf(l.toLowerCase())!==-1||r.customer.name.toLowerCase().indexOf(l.toLowerCase())!==-1||r.customer.email.toLowerCase().indexOf(l.toLowerCase())!==-1)),p!=="all"&&(e=e.filter(r=>r.status===p)),c||x&&h&&(e=e.filter(r=>C(r.createdAt)>=C(x)&&C(r.createdAt)<=C(h))),e}function we(){Z();const e=V();return t.jsx(q,{maxWidth:e.themeStretch?!1:"xl",children:t.jsx(xe,{})})}function tt(){return t.jsxs(t.Fragment,{children:[t.jsx(ee,{children:t.jsx("title",{children:" Dashboard: Category"})}),t.jsx(we,{})]})}export{tt as default};
