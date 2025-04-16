import{j as e,o as P,B as v,d as x,S as l,A as W,bj as Y,I as E,q as t,g as w,r as j,c as q,e as h,T as b,i as z,k as O,cb as $,cc as L,J as C,aV as he,ai as me,D as N,E as ge,c$ as ue,c5 as G,F as ye,f as je,v as be,C as fe,G as S,d0 as Ce,d1 as ve,d2 as J,W as we}from"./index-27ffd735.js";import{C as I}from"./CardHeader-8b482d81.js";import{L as R}from"./ListItemText-ff35796a.js";import{a as D,f as ke}from"./format-number-bf5061ab.js";import{u as Q,C as Te,a as X,c as Se}from"./carousel-arrow-index-ec1e215d.js";import{S as Be}from"./Slider-8f570469.js";import{I as De,i as Ie}from"./Select-7c65bb90.js";import{D as Ae}from"./Dialog-5a3d7487.js";import{D as Ee}from"./DialogTitle-eb11eb3a.js";import{T as Re}from"./TextField-18c86d14.js";import{D as Pe}from"./DialogActions-29076f9a.js";import{b as We}from"./InputBase-894de89e.js";import{u as F,C as U}from"./use-chart-45ae7a6e.js";import{a as Oe,T as Me}from"./table-pagination-custom-61c144d7.js";import{T as ze,a as $e,b as Le}from"./TableContainer-f8ac8b22.js";import{T as B}from"./TablePagination-488334e4.js";import"./visuallyHidden-14c3de6e.js";import"./index-e5978b8b.js";import"./Menu-02e5c653.js";import"./List-1e1da31b.js";import"./utils-a73c94d0.js";import"./formControlState-a1fb9590.js";import"./useFormControl-146f88ba.js";import"./dialogTitleClasses-80e3b880.js";import"./FormControl-26894946.js";import"./FormLabel-fae9cf0f.js";import"./empty-content-67ee3c7b.js";import"./Checkbox-ca090919.js";import"./SwitchBase-cff1fcb3.js";import"./FormControlLabel-4c76a5b9.js";import"./Switch-356d0d7d.js";import"./KeyboardArrowRight-44da873a.js";import"./FirstPage-6da56183.js";function Z({title:s,subheader:n,list:a,...r}){return e.jsxs(P,{...r,children:[e.jsx(I,{title:s,subheader:n,action:e.jsx(v,{size:"small",color:"inherit",endIcon:e.jsx(x,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})}),e.jsx(l,{spacing:3,sx:{p:3},children:a.map(i=>e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(W,{src:i.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsx(R,{primary:i.name,secondary:i.email}),e.jsx(Y,{title:"Quick Transfer",children:e.jsx(E,{children:e.jsx(x,{icon:"eva:diagonal-arrow-right-up-fill"})})})]},i.id))})]})}Z.propTypes={list:t.array,subheader:t.string,title:t.string};const K=50,ee=0,A=1e3,Ne=40;function se({title:s,subheader:n,list:a,sx:r,...i}){const p=w(),c=Q({centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,centerPadding:"0px",slidesToShow:a.length>7?7:a.length,responsive:[{breakpoint:1600,settings:{slidesToShow:5}},{breakpoint:1400,settings:{slidesToShow:3}},{breakpoint:p.breakpoints.values.md,settings:{slidesToShow:5}},{breakpoint:400,settings:{slidesToShow:3}}]}),[m,o]=j.useState(24),[d,u]=j.useState(0),y=q(),k=a.find((f,T)=>T===c.currentIndex);j.useEffect(()=>{d&&g()},[d]);const g=j.useCallback(()=>{const f=d.toString().length;o(f*24)},[d]),de=j.useCallback((f,T)=>{u(T)},[]),V=j.useCallback(f=>{u(Number(f.target.value))},[]),H=j.useCallback(()=>{d<0?u(0):d>A&&u(A)},[d]),pe=e.jsx(h,{sx:{position:"relative"},children:e.jsx(Te,{filled:!0,onPrev:c.onPrev,onNext:c.onNext,leftButtonProps:{sx:{p:.5,mt:-1.5,left:-8,"& svg":{width:16,height:16}}},rightButtonProps:{sx:{p:.5,mt:-1.5,right:-8,"& svg":{width:16,height:16}}},children:e.jsx(h,{component:X,ref:c.carouselRef,...c.carouselSettings,sx:{width:1,mx:"auto",maxWidth:Ne*7+160},children:a.map((f,T)=>e.jsx(h,{sx:{py:5},children:e.jsx(Y,{title:f.name,arrow:!0,placement:"top",children:e.jsx(W,{src:f.avatarUrl,sx:{mx:"auto",opacity:.48,cursor:"pointer",transition:p.transitions.create("all"),...T===c.currentIndex&&{opacity:1,transform:"scale(1.25)",boxShadow:"-4px 12px 24px 0 rgb(0,0,0,0.24)"}}})},f.id)},f.id))})})}),xe=e.jsxs(l,{spacing:3,children:[e.jsx(b,{variant:"overline",sx:{color:"text.secondary"},children:"insert amount"}),e.jsx(_,{amount:d,onBlur:H,autoWidth:m,onChange:V}),e.jsx(Be,{value:typeof d=="number"?d:0,valueLabelDisplay:"auto",step:K,marks:!0,min:ee,max:A,onChange:de}),e.jsxs(l,{direction:"row",alignItems:"center",sx:{typography:"subtitle1"},children:[e.jsx(h,{component:"span",sx:{flexGrow:1},children:"Your Balance"}),D(34212)]}),e.jsx(v,{size:"large",color:"inherit",variant:"contained",disabled:d===0,onClick:y.onTrue,children:"Transfer Now"})]});return e.jsxs(e.Fragment,{children:[e.jsxs(l,{sx:{borderRadius:2,bgcolor:"background.neutral",...r},...i,children:[e.jsx(I,{title:s,subheader:n}),e.jsxs(l,{sx:{p:3},children:[e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(b,{variant:"overline",sx:{color:"text.secondary"},children:"Recent"}),e.jsx(v,{size:"small",color:"inherit",endIcon:e.jsx(x,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),sx:{mr:-1},children:"View All"})]}),pe,xe]})]}),e.jsx(te,{amount:d,onBlur:H,open:y.value,autoWidth:m,onClose:y.onFalse,contactInfo:k,onChange:V})]})}se.propTypes={list:t.array,subheader:t.string,sx:t.object,title:t.string};function _({autoWidth:s,amount:n,onBlur:a,onChange:r,sx:i,...p}){return e.jsxs(l,{direction:"row",justifyContent:"center",spacing:1,sx:i,children:[e.jsx(b,{variant:"h5",children:"$"}),e.jsx(De,{disableUnderline:!0,size:"small",value:n,onChange:r,onBlur:a,inputProps:{step:K,min:ee,max:A,type:"number"},sx:{[`& .${Ie.input}`]:{p:0,typography:"h3",textAlign:"center",width:s}},...p})]})}_.propTypes={amount:t.number,autoWidth:t.number,onBlur:t.func,onChange:t.func,sx:t.object};function te({open:s,amount:n,autoWidth:a,contactInfo:r,onClose:i,onBlur:p,onChange:c}){return e.jsxs(Ae,{open:s,fullWidth:!0,maxWidth:"xs",onClose:i,children:[e.jsx(Ee,{children:"Transfer to"}),e.jsxs(l,{spacing:3,sx:{px:3},children:[e.jsxs(l,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(W,{src:r==null?void 0:r.avatarUrl,sx:{width:48,height:48}}),e.jsx(R,{primary:r==null?void 0:r.name,secondary:r==null?void 0:r.email,secondaryTypographyProps:{component:"span",mt:.5}})]}),e.jsx(_,{onBlur:p,onChange:c,autoWidth:a,amount:n,disableUnderline:!1,sx:{justifyContent:"flex-end"}}),e.jsx(Re,{fullWidth:!0,multiline:!0,rows:3,placeholder:"Write a message..."})]}),e.jsxs(Pe,{children:[e.jsx(v,{onClick:i,children:"Cancel"}),e.jsx(v,{variant:"contained",disabled:n===0,onClick:i,children:"Confirm & Transfer"})]})]})}te.propTypes={amount:t.number,autoWidth:t.number,contactInfo:t.object,onBlur:t.func,onChange:t.func,onClose:t.func,open:t.bool};function re({img:s,price:n,title:a,description:r,sx:i,...p}){const c=w();return e.jsxs(h,{...p,children:[e.jsx(h,{component:"img",alt:"invite",src:s,sx:{left:40,zIndex:9,width:140,position:"relative",filter:"drop-shadow(0 12px 24px rgba(0,0,0,0.24))",...i}}),e.jsxs(h,{sx:{mt:-15,color:"common.white",borderRadius:2,p:c.spacing(16,5,5,5),...z({direction:"135deg",startColor:c.palette.primary.main,endColor:c.palette.primary.dark})},children:[e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(h,{sx:{whiteSpace:"pre-line",typography:"h4"},children:a}),e.jsx(h,{sx:{typography:"h2"},children:n})]}),e.jsx(h,{sx:{mt:2,mb:3,typography:"body2"},children:r}),e.jsx(We,{fullWidth:!0,placeholder:"Email",endAdornment:e.jsx(v,{color:"warning",variant:"contained",size:"small",sx:{mr:.5},children:"Invite"}),sx:{pl:1.5,height:40,borderRadius:1,bgcolor:"common.white"}})]})]})}re.propTypes={description:t.string,img:t.string,price:t.string,sx:t.object,title:t.string};function M({title:s,total:n,icon:a,percent:r,color:i="primary",chart:p,sx:c,...m}){const o=w(),{series:d,options:u}=p,y=F({colors:[o.palette[i].dark],chart:{sparkline:{enabled:!0}},xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},legend:{show:!1},grid:{show:!1},tooltip:{marker:{show:!1},y:{formatter:k=>D(k),title:{formatter:()=>""}}},...u});return e.jsxs(l,{sx:{...z({direction:"135deg",startColor:O(o.palette[i].light,.2),endColor:O(o.palette[i].main,.2)}),width:1,borderRadius:2,overflow:"hidden",position:"relative",color:`${i}.darker`,backgroundColor:"common.white",...c},...m,children:[e.jsx(x,{icon:a,sx:{p:1.5,top:24,right:24,width:48,height:48,borderRadius:"50%",position:"absolute",color:`${i}.lighter`,bgcolor:`${i}.dark`}}),e.jsxs(l,{spacing:1,sx:{p:3},children:[e.jsx(b,{variant:"subtitle2",children:s}),e.jsx(b,{variant:"h3",children:D(n)}),e.jsxs(l,{spacing:.5,direction:"row",flexWrap:"wrap",alignItems:"center",sx:{typography:"body2"},children:[e.jsx(x,{icon:r<0?"eva:trending-down-fill":"eva:trending-up-fill"}),e.jsxs(h,{sx:{typography:"subtitle2"},children:[r>0&&"+",ke(r)]}),e.jsx(h,{sx:{opacity:.8},children:"than last month"})]})]}),e.jsx(U,{dir:"ltr",type:"area",series:[{data:d}],options:y,width:"100%",height:120})]})}M.propTypes={chart:t.object,color:t.string,icon:t.oneOfType([t.element,t.string]),percent:t.number,sx:t.object,title:t.string,total:t.number};function ie({list:s,sx:n}){const a=w(),r=Q({fade:!0,speed:100,...Se({sx:{right:16,bottom:16,position:"absolute",color:"primary.light"}})});return e.jsx(h,{sx:{...z({color:O(a.palette.grey[900],.8),imgUrl:"/assets/background/overlay_2.jpg"}),height:262,borderRadius:2,position:"relative",color:"common.white",".slick-slider, .slick-list, .slick-track, .slick-slide > div":{height:1},"&:before, &:after":{left:0,mx:2.5,right:0,zIndex:-2,height:200,bottom:-16,content:"''",opacity:.16,borderRadius:2,bgcolor:"grey.500",position:"absolute"},"&:after":{mx:1,bottom:-8,opacity:.24},...n},children:e.jsx(X,{...r.carouselSettings,children:s.map(i=>e.jsx(ne,{card:i},i.id))})})}ie.propTypes={list:t.array,sx:t.object};function ne({card:s}){const{id:n,cardType:a,balance:r,cardHolder:i,cardNumber:p,cardValid:c}=s,m=q(),o=$(),d=j.useCallback(()=>{o.onClose(),console.info("DELETE",n)},[n,o]),u=j.useCallback(()=>{o.onClose(),console.info("EDIT",n)},[n,o]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{justifyContent:"space-between",sx:{height:1,p:3},children:[e.jsx(E,{color:"inherit",onClick:o.onOpen,sx:{top:8,right:8,zIndex:9,opacity:.48,position:"absolute",...o.open&&{opacity:1}},children:e.jsx(x,{icon:"eva:more-vertical-fill"})}),e.jsxs("div",{children:[e.jsx(b,{sx:{mb:2,typography:"subtitle2",opacity:.48},children:"Current Balance"}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(b,{sx:{typography:"h3"},children:m.value?"********":D(r)}),e.jsx(E,{color:"inherit",onClick:m.onToggle,sx:{opacity:.48},children:e.jsx(x,{icon:m.value?"solar:eye-bold":"solar:eye-closed-bold"})})]})]}),e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{typography:"subtitle1"},children:[e.jsxs(h,{sx:{bgcolor:"white",lineHeight:0,px:.75,borderRadius:.5,mr:1},children:[a==="mastercard"&&e.jsx(x,{width:24,icon:"logos:mastercard"}),a==="visa"&&e.jsx(x,{width:24,icon:"logos:visa"})]}),p]}),e.jsxs(l,{direction:"row",spacing:5,children:[e.jsxs(l,{spacing:1,children:[e.jsx(b,{sx:{typography:"caption",opacity:.48},children:"Card Holder"}),e.jsx(b,{sx:{typography:"subtitle1"},children:i})]}),e.jsxs(l,{spacing:1,children:[e.jsx(b,{sx:{typography:"caption",opacity:.48},children:"Valid Dates"}),e.jsx(b,{sx:{typography:"subtitle1"},children:c})]})]})]}),e.jsxs(L,{open:o.open,onClose:o.onClose,sx:{width:140},children:[e.jsxs(C,{onClick:d,sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(C,{onClick:u,children:[e.jsx(x,{icon:"solar:pen-bold"}),"Edit"]})]})]})}ne.propTypes={card:t.object};function ae({title:s,subheader:n,chart:a,...r}){const{categories:i,colors:p,series:c,options:m}=a,o=$(),[d,u]=j.useState("Year"),y=F({colors:p,stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:i},tooltip:{y:{formatter:g=>`$${g}`}},...m}),k=j.useCallback(g=>{o.onClose(),u(g)},[o]);return e.jsxs(e.Fragment,{children:[e.jsxs(P,{...r,children:[e.jsx(I,{title:s,subheader:n,action:e.jsxs(he,{onClick:o.onOpen,sx:{pl:1,py:.5,pr:.5,borderRadius:1,typography:"subtitle2",bgcolor:"background.neutral"},children:[d,e.jsx(x,{width:16,icon:o.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:.5}})]})}),c.map(g=>e.jsx(h,{sx:{mt:3,mx:3},children:g.type===d&&e.jsx(U,{dir:"ltr",type:"bar",series:g.data,options:y,width:"100%",height:364})},g.type))]}),e.jsx(L,{open:o.open,onClose:o.onClose,sx:{width:140},children:c.map(g=>e.jsx(C,{selected:g.type===d,onClick:()=>k(g.type),children:g.type},g.type))})]})}ae.propTypes={chart:t.object,subheader:t.string,title:t.string};function oe({title:s,subheader:n,tableLabels:a,tableData:r,...i}){return e.jsxs(P,{...i,children:[e.jsx(I,{title:s,subheader:n,sx:{mb:3}}),e.jsx(ze,{sx:{overflow:"unset"},children:e.jsx(me,{children:e.jsxs($e,{sx:{minWidth:720},children:[e.jsx(Oe,{headLabel:a}),e.jsx(Le,{children:r.map(p=>e.jsx(le,{row:p},p.id))})]})})}),e.jsx(N,{sx:{borderStyle:"dashed"}}),e.jsx(h,{sx:{p:2,textAlign:"right"},children:e.jsx(v,{size:"small",color:"inherit",endIcon:e.jsx(x,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}oe.propTypes={subheader:t.string,tableData:t.array,tableLabels:t.array,title:t.string};function le({row:s}){const a=w().palette.mode==="light",r=$(),i=()=>{r.onClose(),console.info("DOWNLOAD",s.id)},p=()=>{r.onClose(),console.info("PRINT",s.id)},c=()=>{r.onClose(),console.info("SHARE",s.id)},m=()=>{r.onClose(),console.info("DELETE",s.id)},o=e.jsx(h,{sx:{position:"relative",mr:2},children:e.jsx(ge,{overlap:"circular",color:s.type==="Income"?"success":"error",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:e.jsx(x,{icon:s.type==="Income"?"eva:diagonal-arrow-left-down-fill":"eva:diagonal-arrow-right-up-fill",width:16}),sx:{[`& .${ue.badge}`]:{p:0,width:20}},children:e.jsxs(W,{src:s.avatarUrl||"",sx:{width:48,height:48,color:"text.secondary",bgcolor:"background.neutral"},children:[s.category==="Books"&&e.jsx(x,{icon:"eva:book-fill",width:24}),s.category==="Beauty & Health"&&e.jsx(x,{icon:"solar:heart-bold",width:24})]})})});return e.jsxs(e.Fragment,{children:[e.jsxs(Me,{children:[e.jsxs(B,{sx:{display:"flex",alignItems:"center"},children:[o,e.jsx(R,{primary:s.message,secondary:s.category})]}),e.jsx(B,{children:e.jsx(R,{primary:G(new Date(s.date),"dd MMM yyyy"),secondary:G(new Date(s.date),"p"),primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(B,{children:D(s.amount)}),e.jsx(B,{children:e.jsx(ye,{variant:a?"soft":"filled",color:s.status==="completed"&&"success"||s.status==="progress"&&"warning"||"error",children:s.status})}),e.jsx(B,{align:"right",sx:{pr:1},children:e.jsx(E,{color:r.open?"inherit":"default",onClick:r.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(L,{open:r.open,onClose:r.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(C,{onClick:i,children:[e.jsx(x,{icon:"eva:cloud-download-fill"}),"Download"]}),e.jsxs(C,{onClick:p,children:[e.jsx(x,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(C,{onClick:c,children:[e.jsx(x,{icon:"solar:share-bold"}),"Share"]}),e.jsx(N,{sx:{borderStyle:"dashed"}}),e.jsxs(C,{onClick:m,sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}le.propTypes={row:t.object};function ce({title:s,subheader:n,chart:a,...r}){const i=w(),p=je("up","sm"),{colors:c,series:m,options:o}=a,d=m.map(y=>y.value),u=F({colors:c,labels:m.map(y=>y.label),stroke:{colors:[i.palette.background.paper]},fill:{opacity:.8},legend:{position:"right",itemMargin:{horizontal:10,vertical:7}},tooltip:{fillSeriesColor:!1},responsive:[{breakpoint:i.breakpoints.values.sm,options:{legend:{position:"bottom",horizontalAlign:"left"}}}],...o});return e.jsxs(P,{...r,children:[e.jsx(I,{title:s,subheader:n}),e.jsx(h,{sx:{my:5,"& .apexcharts-legend":{m:"auto",height:{sm:160},flexWrap:{sm:"wrap"},width:{xs:240,sm:"50%"}},"& .apexcharts-datalabels-group":{display:"none"}},children:e.jsx(U,{dir:"ltr",type:"polarArea",series:d,options:u,width:"100%",height:p?240:360})}),e.jsx(N,{sx:{borderStyle:"dashed"}}),e.jsxs(h,{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{textAlign:"center",typography:"h4"},children:[e.jsxs(l,{sx:{py:2,borderRight:`dashed 1px ${i.palette.divider}`},children:[e.jsx(h,{component:"span",sx:{mb:1,typography:"body2",color:"text.secondary"},children:"Categories"}),"9"]}),e.jsxs(l,{sx:{py:2},children:[e.jsx(h,{component:"span",sx:{mb:1,typography:"body2",color:"text.secondary"},children:"Categories"}),"$18,765"]})]})]})}ce.propTypes={chart:t.object,subheader:t.string,title:t.string};function Fe(){const s=w(),n=be();return e.jsx(fe,{maxWidth:n.themeStretch?!1:"xl",children:e.jsxs(S,{container:!0,spacing:3,children:[e.jsx(S,{xs:12,md:7,children:e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:3,children:[e.jsx(M,{title:"Income",icon:"eva:diagonal-arrow-left-down-fill",percent:2.6,total:18765,chart:{series:[{x:2010,y:88},{x:2011,y:120},{x:2012,y:156},{x:2013,y:123},{x:2014,y:88},{x:2015,y:66},{x:2016,y:45},{x:2017,y:29},{x:2018,y:45},{x:2019,y:88},{x:2020,y:132},{x:2021,y:146},{x:2022,y:169},{x:2023,y:184}]}}),e.jsx(M,{title:"Expenses",color:"warning",icon:"eva:diagonal-arrow-right-up-fill",percent:-.5,total:8938,chart:{series:[{x:2010,y:88},{x:2011,y:120},{x:2012,y:156},{x:2013,y:123},{x:2014,y:88},{x:2015,y:166},{x:2016,y:145},{x:2017,y:129},{x:2018,y:145},{x:2019,y:188},{x:2020,y:132},{x:2021,y:146},{x:2022,y:169},{x:2023,y:184}]}})]})}),e.jsx(S,{xs:12,md:5,children:e.jsx(ie,{list:Ce})}),e.jsx(S,{xs:12,md:8,children:e.jsxs(l,{spacing:3,children:[e.jsx(ae,{title:"Balance Statistics",subheader:"(+43% Income | +12% Expense) than last year",chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{type:"Week",data:[{name:"Income",data:[10,41,35,151,49,62,69,91,48]},{name:"Expenses",data:[10,34,13,56,77,88,99,77,45]}]},{type:"Month",data:[{name:"Income",data:[148,91,69,62,49,51,35,41,10]},{name:"Expenses",data:[45,77,99,88,77,56,13,34,10]}]},{type:"Year",data:[{name:"Income",data:[76,42,29,41,27,138,117,86,63]},{name:"Expenses",data:[80,55,34,114,80,130,15,28,55]}]}]}}),e.jsx(ce,{title:"Expenses Categories",chart:{series:[{label:"Category 1",value:14},{label:"Category 2",value:23},{label:"Category 3",value:21},{label:"Category 4",value:17},{label:"Category 5",value:15},{label:"Category 6",value:10},{label:"Category 7",value:12},{label:"Category 8",value:17},{label:"Category 9",value:21}],colors:[s.palette.primary.main,s.palette.warning.dark,s.palette.success.darker,s.palette.error.main,s.palette.info.dark,s.palette.info.darker,s.palette.success.main,s.palette.warning.main,s.palette.info.main]}}),e.jsx(oe,{title:"Recent Transitions",tableData:ve,tableLabels:[{id:"description",label:"Description"},{id:"date",label:"Date"},{id:"amount",label:"Amount"},{id:"status",label:"Status"},{id:""}]})]})}),e.jsx(S,{xs:12,md:4,children:e.jsxs(l,{spacing:3,children:[e.jsx(se,{title:"Quick Transfer",list:J}),e.jsx(Z,{title:"Contacts",subheader:"You have 122 contacts",list:J.slice(-5)}),e.jsx(re,{price:"$50",title:`Invite friends 
 and earn`,description:"Praesent egestas tristique nibh. Duis lobortis massa imperdiet quam.",img:"/assets/illustrations/characters/character_11.png"})]})})]})})}function Cs(){return e.jsxs(e.Fragment,{children:[e.jsx(we,{children:e.jsx("title",{children:" Dashboard: Banking"})}),e.jsx(Fe,{})]})}export{Cs as default};
