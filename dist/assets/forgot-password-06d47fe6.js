import{j as r,S as i,d as e,L as h,R as x,p as g,T as s,W as f}from"./index-27ffd735.js";import{c as j,a as w,u as y,F,R as b}from"./rhf-autocomplete-cc9ff921.js";import{P}from"./plan-premium-icon-a2dcd5f6.js";import{o as v}from"./yup-c975ca61.js";import{L as S}from"./LoadingButton-405ddbf1.js";import"./upload-avatar-5c17c7d6.js";import"./format-number-bf5061ab.js";import"./fade-27de7a97.js";import"./file-thumbnail-bdf7cfb6.js";import"./index-b7215938.js";import"./ListItemText-ff35796a.js";import"./image-7d02ef11.js";import"./TextField-18c86d14.js";import"./FormControl-26894946.js";import"./utils-a73c94d0.js";import"./useFormControl-146f88ba.js";import"./formControlState-a1fb9590.js";import"./FormLabel-fae9cf0f.js";import"./Select-7c65bb90.js";import"./index-e5978b8b.js";import"./Menu-02e5c653.js";import"./List-1e1da31b.js";import"./InputBase-894de89e.js";import"./Checkbox-ca090919.js";import"./SwitchBase-cff1fcb3.js";import"./Chip-a5be7a74.js";import"./FormControlLabel-4c76a5b9.js";import"./FormGroup-6550ea98.js";import"./Switch-356d0d7d.js";import"./editor-7e7ca674.js";import"./highlight-d4e5d3fc.js";import"./Slider-8f570469.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-d8b34bea.js";import"./Radio-a65c6d92.js";import"./Autocomplete-b5c308cf.js";import"./Close-d91a1546.js";import"./CircularProgress-a33cd36e.js";function R(){const a=j().shape({email:w().required("Email is required").email("Email must be a valid email address")}),n={email:""},t=y({resolver:v(a),defaultValues:n}),{handleSubmit:m,formState:{isSubmitting:l}}=t,p=m(async u=>{try{await new Promise(o=>setTimeout(o,500)),console.info("DATA",u)}catch(o){console.error(o)}}),d=r.jsxs(i,{spacing:3,alignItems:"center",children:[r.jsx(b,{name:"email",label:"Email address"}),r.jsx(S,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:l,endIcon:r.jsx(e,{icon:"eva:arrow-ios-forward-fill"}),sx:{justifyContent:"space-between",pl:2,pr:1.5},children:"Send Request"}),r.jsxs(h,{component:x,href:g.authDemo.modern.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[r.jsx(e,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),c=r.jsxs(r.Fragment,{children:[r.jsx(P,{sx:{height:96}}),r.jsxs(i,{spacing:1,sx:{my:5},children:[r.jsx(s,{variant:"h3",children:"Forgot your password?"}),r.jsx(s,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and We will email you a link to reset your password."})]})]});return r.jsxs(F,{methods:t,onSubmit:p,children:[c,d]})}function dr(){return r.jsxs(r.Fragment,{children:[r.jsx(f,{children:r.jsx("title",{children:" Auth Classic: Forgot Password"})}),r.jsx(R,{})]})}export{dr as default};
