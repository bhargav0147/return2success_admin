import{g as d,s as l,f as m}from"./rhf-autocomplete-cc9ff921.js";var h=function(e,r,t){if(e&&"reportValidity"in e){var o=d(t,r);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},y=function(e,r){var t=function(u){var n=r.fields[u];n&&n.ref&&"reportValidity"in n.ref?h(n.ref,u,e):n.refs&&n.refs.forEach(function(i){return h(i,u,e)})};for(var o in r.fields)t(o)},g=function(e,r){r.shouldUseNativeValidation&&y(e,r);var t={};for(var o in e){var u=d(r.fields,o),n=Object.assign(e[o]||{},{ref:u&&u.ref});if(b(r.names||Object.keys(e),o)){var i=Object.assign({},V(d(t,o)));l(i,"root",n),l(t,o,i)}else l(t,o,n)}return t},V=function(e){return Array.isArray(e)?e.filter(Boolean):[]},b=function(e,r){return e.some(function(t){return t.startsWith(r+".")})};function x(e,r,t){return r===void 0&&(r={}),t===void 0&&(t={}),function(o,u,n){try{return Promise.resolve(function(i,c){try{var f=(r.context,Promise.resolve(e[t.mode==="sync"?"validateSync":"validate"](o,Object.assign({abortEarly:!1},r,{context:u}))).then(function(s){return n.shouldUseNativeValidation&&y({},n),{values:t.raw?o:s,errors:{}}}))}catch(s){return c(s)}return f&&f.then?f.then(void 0,c):f}(0,function(i){if(!i.inner)throw i;return{values:{},errors:g((c=i,f=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(c.inner||[]).reduce(function(s,a){if(s[a.path]||(s[a.path]={message:a.message,type:a.type}),f){var v=s[a.path].types,p=v&&v[a.type];s[a.path]=m(a.path,f,s,a.type,p?[].concat(p,a.message):a.message)}return s},{})),n)};var c,f}))}catch(i){return Promise.reject(i)}}}export{x as o};
