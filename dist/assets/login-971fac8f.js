import{c as w,j as r,S as e,T as s,L as a,R as n,p as m,I as b,d as y,W as v}from"./index-27ffd735.js";import{c as L,a as l,u as S,F,R as p}from"./rhf-autocomplete-cc9ff921.js";import{o as P}from"./yup-c975ca61.js";import{I}from"./InputAdornment-babdc070.js";import{L as T}from"./LoadingButton-405ddbf1.js";import"./plan-premium-icon-a2dcd5f6.js";import"./upload-avatar-5c17c7d6.js";import"./format-number-bf5061ab.js";import"./fade-27de7a97.js";import"./file-thumbnail-bdf7cfb6.js";import"./index-b7215938.js";import"./ListItemText-ff35796a.js";import"./image-7d02ef11.js";import"./TextField-18c86d14.js";import"./FormControl-26894946.js";import"./utils-a73c94d0.js";import"./useFormControl-146f88ba.js";import"./formControlState-a1fb9590.js";import"./FormLabel-fae9cf0f.js";import"./Select-7c65bb90.js";import"./index-e5978b8b.js";import"./Menu-02e5c653.js";import"./List-1e1da31b.js";import"./InputBase-894de89e.js";import"./Checkbox-ca090919.js";import"./SwitchBase-cff1fcb3.js";import"./Chip-a5be7a74.js";import"./FormControlLabel-4c76a5b9.js";import"./FormGroup-6550ea98.js";import"./Switch-356d0d7d.js";import"./editor-7e7ca674.js";import"./highlight-d4e5d3fc.js";import"./Slider-8f570469.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-d8b34bea.js";import"./Radio-a65c6d92.js";import"./Autocomplete-b5c308cf.js";import"./Close-d91a1546.js";import"./CircularProgress-a33cd36e.js";function A(){const o=w(),d=L().shape({email:l().required("Email is required").email("Email must be a valid email address"),password:l().required("Password is required")}),c={email:"",password:""},t=S({resolver:P(d),defaultValues:c}),{handleSubmit:u,formState:{isSubmitting:h}}=t,x=u(async f=>{try{await new Promise(i=>setTimeout(i,500)),console.info("DATA",f)}catch(i){console.error(i)}}),g=r.jsxs(e,{spacing:2,sx:{mb:5},children:[r.jsx(s,{variant:"h4",children:"Sign in to Minimal"}),r.jsxs(e,{direction:"row",spacing:.5,children:[r.jsx(s,{variant:"body2",children:"New user?"}),r.jsx(a,{component:n,href:m.authDemo.classic.register,variant:"subtitle2",children:"Create an account"})]})]}),j=r.jsxs(e,{spacing:2.5,children:[r.jsx(p,{name:"email",label:"Email address"}),r.jsx(p,{name:"password",label:"Password",type:o.value?"text":"password",InputProps:{endAdornment:r.jsx(I,{position:"end",children:r.jsx(b,{onClick:o.onToggle,edge:"end",children:r.jsx(y,{icon:o.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),r.jsx(a,{component:n,href:m.authDemo.classic.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),r.jsx(T,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:h,children:"Login"})]});return r.jsxs(F,{methods:t,onSubmit:x,children:[g,j]})}function xr(){return r.jsxs(r.Fragment,{children:[r.jsx(v,{children:r.jsx("title",{children:" Auth Classic: Login"})}),r.jsx(A,{})]})}export{xr as default};
