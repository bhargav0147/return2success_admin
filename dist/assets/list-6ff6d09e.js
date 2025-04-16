import{v as y,r as i,j as s,C as F,p as l,B as k,R as T,d as v,S as w,F as B,W as I}from"./index-27ffd735.js";import{o as c}from"./orderBy-631f93a1.js";import{u as O}from"./use-debounce-51e47929.js";import{u as R,a as Q,P as z,b as A,c as E,f as N}from"./post-details-home-view-6c1fe5cc.js";import{C as V}from"./custom-breadcrumbs-891ee9b7.js";import{T as W,a as _}from"./Tabs-a75c564a.js";import"./_baseToString-c85d59f0.js";import"./index-b6b89eba.js";import"./_baseIteratee-9e852688.js";import"./_baseEach-4159b158.js";import"./index-0c5ce7cc.js";import"./search-not-found-e6059c5f.js";import"./Autocomplete-b5c308cf.js";import"./Select-7c65bb90.js";import"./index-e5978b8b.js";import"./Menu-02e5c653.js";import"./List-1e1da31b.js";import"./utils-a73c94d0.js";import"./formControlState-a1fb9590.js";import"./useFormControl-146f88ba.js";import"./InputBase-894de89e.js";import"./Close-d91a1546.js";import"./Chip-a5be7a74.js";import"./TextField-18c86d14.js";import"./FormControl-26894946.js";import"./FormLabel-fae9cf0f.js";import"./InputAdornment-babdc070.js";import"./format-time-4dc4f2eb.js";import"./format-number-bf5061ab.js";import"./image-7d02ef11.js";import"./text-max-line-a5d49445.js";import"./Pagination-5cbd8de4.js";import"./FirstPage-6da56183.js";import"./rhf-autocomplete-cc9ff921.js";import"./upload-avatar-5c17c7d6.js";import"./fade-27de7a97.js";import"./file-thumbnail-bdf7cfb6.js";import"./index-b7215938.js";import"./ListItemText-ff35796a.js";import"./Checkbox-ca090919.js";import"./SwitchBase-cff1fcb3.js";import"./FormControlLabel-4c76a5b9.js";import"./FormGroup-6550ea98.js";import"./Switch-356d0d7d.js";import"./editor-7e7ca674.js";import"./highlight-d4e5d3fc.js";import"./Slider-8f570469.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-d8b34bea.js";import"./Radio-a65c6d92.js";import"./yup-c975ca61.js";import"./markdown-61d29bd3.js";import"./empty-content-67ee3c7b.js";import"./Dialog-5a3d7487.js";import"./DialogActions-29076f9a.js";import"./LoadingButton-405ddbf1.js";import"./CircularProgress-a33cd36e.js";import"./CardHeader-8b482d81.js";import"./AvatarGroup-4ff0f142.js";import"./CardContent-9855c600.js";import"./Skeleton-f774d223.js";import"./ListItem-fe933c2f.js";import"./ListItemSecondaryAction-d2bd79ed.js";import"./Fab-d104f767.js";import"./Zoom-b273b8d9.js";import"./KeyboardArrowRight-44da873a.js";const q={publish:"all"};function G(){const o=y(),[m,a]=i.useState("latest"),[e,n]=i.useState(q),[u,f]=i.useState(""),d=O(u),{posts:p,postsLoading:x}=R(),{searchResults:b,searchLoading:S}=Q(d),g=H({inputData:p,filters:e,sortBy:m}),j=i.useCallback(t=>{a(t)},[]),h=i.useCallback((t,r)=>{n(L=>({...L,[t]:r}))},[]),P=i.useCallback(t=>{f(t)},[]),C=i.useCallback((t,r)=>{h("publish",r)},[h]);return s.jsxs(F,{maxWidth:o.themeStretch?!1:"lg",children:[s.jsx(V,{heading:"List",links:[{name:"Dashboard",href:l.dashboard.root},{name:"Blog",href:l.dashboard.post.root},{name:"List"}],action:s.jsx(k,{component:T,href:l.dashboard.post.new,variant:"contained",startIcon:s.jsx(v,{icon:"mingcute:add-line"}),children:"New Post"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(w,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[s.jsx(z,{query:d,results:b,onSearch:P,loading:S,hrefItem:t=>l.dashboard.post.details(t)}),s.jsx(A,{sort:m,onSort:j,sortOptions:E})]}),s.jsx(W,{value:e.publish,onChange:C,sx:{mb:{xs:3,md:5}},children:["all","published","draft"].map(t=>s.jsx(_,{iconPosition:"end",value:t,label:t,icon:s.jsxs(B,{variant:(t==="all"||t===e.publish)&&"filled"||"soft",color:t==="published"&&"info"||"default",children:[t==="all"&&p.length,t==="published"&&p.filter(r=>r.publish==="published").length,t==="draft"&&p.filter(r=>r.publish==="draft").length]}),sx:{textTransform:"capitalize"}},t))}),s.jsx(N,{posts:g,loading:x})]})}const H=({inputData:o,filters:m,sortBy:a})=>{const{publish:e}=m;return a==="latest"&&(o=c(o,["createdAt"],["desc"])),a==="oldest"&&(o=c(o,["createdAt"],["asc"])),a==="popular"&&(o=c(o,["totalViews"],["desc"])),e!=="all"&&(o=o.filter(n=>n.publish===e)),o};function rs(){return s.jsxs(s.Fragment,{children:[s.jsx(I,{children:s.jsx("title",{children:" Dashboard: Post List"})}),s.jsx(G,{})]})}export{rs as default};
