import{j as e,I as j,d as l,S as r,A as S,T as u,e as s,B as g,L as D,o as w,D as b,q as t,ai as O,cb as P,R as L,F as N,cc as B,J as F,y as R,v as E,d3 as G,r as T,C as $,p as H,da as U,G as f}from"./index-27ffd735.js";import{C as y}from"./CardHeader-8b482d81.js";import{a as p}from"./format-number-bf5061ab.js";import{L as W}from"./ListItemText-ff35796a.js";import{b as m}from"./format-time-4dc4f2eb.js";import{T as _,t as q,a as z,b as J,c as M,d as V,e as K}from"./TimelineSeparator-53904898.js";function v({customer:i,delivery:d,payment:n,shippingAddress:o}){const x=e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Customer Info",action:e.jsx(j,{children:e.jsx(l,{icon:"solar:pen-bold"})})}),e.jsxs(r,{direction:"row",sx:{p:3},children:[e.jsx(S,{alt:i.name,src:i.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsxs(r,{spacing:.5,alignItems:"flex-start",sx:{typography:"body2"},children:[e.jsx(u,{variant:"subtitle2",children:i.name}),e.jsx(s,{sx:{color:"text.secondary"},children:i.email}),e.jsxs(s,{children:["IP Address:",e.jsx(s,{component:"span",sx:{color:"text.secondary",ml:.25},children:i.ipAddress})]}),e.jsx(g,{size:"small",color:"error",startIcon:e.jsx(l,{icon:"mingcute:add-line"}),sx:{mt:1},children:"Add to Blacklist"})]})]})]}),h=e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Delivery",action:e.jsx(j,{children:e.jsx(l,{icon:"solar:pen-bold"})})}),e.jsxs(r,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(s,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Ship by"}),d.shipBy]}),e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(s,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Speedy"}),d.speedy]}),e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(s,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Tracking No."}),e.jsx(D,{underline:"always",color:"inherit",children:d.trackingNumber})]})]})]}),a=e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Shipping",action:e.jsx(j,{children:e.jsx(l,{icon:"solar:pen-bold"})})}),e.jsxs(r,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(r,{direction:"row",children:[e.jsx(s,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Address"}),o.fullAddress]}),e.jsxs(r,{direction:"row",children:[e.jsx(s,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Phone number"}),o.phoneNumber]})]})]}),c=e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Payment",action:e.jsx(j,{children:e.jsx(l,{icon:"solar:pen-bold"})})}),e.jsxs(r,{direction:"row",alignItems:"center",sx:{p:3,typography:"body2"},children:[e.jsx(s,{component:"span",sx:{color:"text.secondary",flexGrow:1},children:"Phone number"}),n.cardNumber,e.jsx(l,{icon:"logos:mastercard",width:24,sx:{ml:.5}})]})]});return e.jsxs(w,{children:[x,e.jsx(b,{sx:{borderStyle:"dashed"}}),h,e.jsx(b,{sx:{borderStyle:"dashed"}}),a,e.jsx(b,{sx:{borderStyle:"dashed"}}),c]})}v.propTypes={customer:t.object,delivery:t.object,payment:t.object,shippingAddress:t.object};function I({items:i,taxes:d,shipping:n,discount:o,subTotal:x,totalAmount:h}){const a=e.jsxs(r,{spacing:2,alignItems:"flex-end",sx:{my:3,textAlign:"right",typography:"body2"},children:[e.jsxs(r,{direction:"row",children:[e.jsx(s,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(s,{sx:{width:160,typography:"subtitle2"},children:p(x)||"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(s,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(s,{sx:{width:160,...n&&{color:"error.main"}},children:n?`- ${p(n)}`:"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(s,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(s,{sx:{width:160,...o&&{color:"error.main"}},children:o?`- ${p(o)}`:"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(s,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(s,{sx:{width:160},children:d?p(d):"-"})]}),e.jsxs(r,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(s,{children:"Total"}),e.jsx(s,{sx:{width:160},children:p(h)||"-"})]})]});return e.jsxs(w,{children:[e.jsx(y,{title:"Details",action:e.jsx(j,{children:e.jsx(l,{icon:"solar:pen-bold"})})}),e.jsxs(r,{sx:{px:3},children:[e.jsx(O,{children:i.map(c=>e.jsxs(r,{direction:"row",alignItems:"center",sx:{py:3,minWidth:640,borderBottom:A=>`dashed 2px ${A.palette.background.neutral}`},children:[e.jsx(S,{src:c.coverUrl,variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(W,{primary:c.name,secondary:c.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(s,{sx:{typography:"body2"},children:["x",c.quantity]}),e.jsx(s,{sx:{width:110,textAlign:"right",typography:"subtitle2"},children:p(c.price)})]},c.id))}),a]})]})}I.propTypes={discount:t.number,items:t.array,shipping:t.number,subTotal:t.number,taxes:t.number,totalAmount:t.number};function C({status:i,backLink:d,createdAt:n,orderNumber:o,statusOptions:x,onChangeStatus:h}){const a=P();return e.jsxs(e.Fragment,{children:[e.jsxs(r,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:[e.jsxs(r,{spacing:1,direction:"row",alignItems:"flex-start",children:[e.jsx(j,{component:L,href:d,children:e.jsx(l,{icon:"eva:arrow-ios-back-fill"})}),e.jsxs(r,{spacing:.5,children:[e.jsxs(r,{spacing:1,direction:"row",alignItems:"center",children:[e.jsxs(u,{variant:"h4",children:[" Order ",o," "]}),e.jsx(N,{variant:"soft",color:i==="completed"&&"success"||i==="pending"&&"warning"||i==="cancelled"&&"error"||"default",children:i})]}),e.jsx(u,{variant:"body2",sx:{color:"text.disabled"},children:m(n)})]})]}),e.jsxs(r,{flexGrow:1,spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(g,{color:"inherit",variant:"outlined",endIcon:e.jsx(l,{icon:"eva:arrow-ios-downward-fill"}),onClick:a.onOpen,sx:{textTransform:"capitalize"},children:i}),e.jsx(g,{color:"inherit",variant:"outlined",startIcon:e.jsx(l,{icon:"solar:printer-minimalistic-bold"}),children:"Print"}),e.jsx(g,{color:"inherit",variant:"contained",startIcon:e.jsx(l,{icon:"solar:pen-bold"}),children:"Edit"})]})]}),e.jsx(B,{open:a.open,onClose:a.onClose,arrow:"top-right",sx:{width:140},children:x.map(c=>e.jsx(F,{selected:c.value===i,onClick:()=>{a.onClose(),h(c.value)},children:c.label},c.value))})]})}C.propTypes={backLink:t.string,createdAt:t.instanceOf(Date),onChangeStatus:t.func,orderNumber:t.string,status:t.string,statusOptions:t.array};function k({history:i}){const d=e.jsxs(r,{spacing:2,component:R,variant:"outlined",sx:{p:2.5,minWidth:260,flexShrink:0,borderRadius:2,typography:"body2",borderStyle:"dashed"},children:[e.jsxs(r,{spacing:.5,children:[e.jsx(s,{sx:{color:"text.disabled"},children:"Order time"}),m(i.orderTime)]}),e.jsxs(r,{spacing:.5,children:[e.jsx(s,{sx:{color:"text.disabled"},children:"Payment time"}),m(i.orderTime)]}),e.jsxs(r,{spacing:.5,children:[e.jsx(s,{sx:{color:"text.disabled"},children:"Delivery time for the carrier"}),m(i.orderTime)]}),e.jsxs(r,{spacing:.5,children:[e.jsx(s,{sx:{color:"text.disabled"},children:"Completion time"}),m(i.orderTime)]})]}),n=e.jsx(_,{sx:{p:0,m:0,[`& .${q.root}:before`]:{flex:0,padding:0}},children:i.timeline.map((o,x)=>{const h=x===0,a=x===i.timeline.length-1;return e.jsxs(z,{children:[e.jsxs(J,{children:[e.jsx(M,{color:h&&"primary"||"grey"}),a?null:e.jsx(V,{})]}),e.jsxs(K,{children:[e.jsx(u,{variant:"subtitle2",children:o.title}),e.jsx(s,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:m(o.time)})]})]},o.title)})});return e.jsxs(w,{children:[e.jsx(y,{title:"History"}),e.jsxs(r,{spacing:3,alignItems:{md:"flex-start"},direction:{xs:"column-reverse",md:"row"},sx:{p:3},children:[n,d]})]})}k.propTypes={history:t.object};function Q({id:i}){const d=E(),n=G.filter(a=>a.id===i)[0],[o,x]=T.useState(n.status),h=T.useCallback(a=>{x(a)},[]);return e.jsxs($,{maxWidth:d.themeStretch?!1:"lg",children:[e.jsx(C,{backLink:H.dashboard.order.root,orderNumber:n.orderNumber,createdAt:n.createdAt,status:o,onChangeStatus:h,statusOptions:U}),e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(f,{xs:12,md:8,children:e.jsxs(r,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:[e.jsx(I,{items:n.items,taxes:n.taxes,shipping:n.shipping,discount:n.discount,subTotal:n.subTotal,totalAmount:n.totalAmount}),e.jsx(k,{history:n.history})]})}),e.jsx(f,{xs:12,md:4,children:e.jsx(v,{customer:n.customer,delivery:n.delivery,payment:n.payment,shippingAddress:n.shippingAddress})})]})]})}Q.propTypes={id:t.string};export{Q as O};
