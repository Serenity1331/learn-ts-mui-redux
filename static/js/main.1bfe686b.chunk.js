(this["webpackJsonplearn-ts-mui-redux"]=this["webpackJsonplearn-ts-mui-redux"]||[]).push([[0],{109:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32),i=t.n(r),o=(t(92),t(93),t(77)),s=t(147),l=t(151),u=t(45),d=t(15),j=t(12),b=t(148),m=t(149),g=t(2);function p(e){return e.indexOf(" ")>=0}function f(e){return/\d/.test(e)}var O=function(){var e=Object(d.e)(),n=Object(a.useState)(""),t=Object(j.a)(n,2),c=t[0],r=t[1],i=Object(a.useState)(""),o=Object(j.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(!1),O=Object(j.a)(u,2),h=O[0],x=O[1],v=Object(a.useState)(!1),_=Object(j.a)(v,2),y=_[0],N=_[1];return Object(g.jsx)("div",{className:"login-page__main",children:Object(g.jsx)("div",{className:"login-page__container-main",children:Object(g.jsxs)("form",{noValidate:!0,autoComplete:"off",className:"login-page__form",onSubmit:function(n){return function(n){n.preventDefault(),x(!1),N(!1),""===c?x(!0):""===s?N(!0):p(c)?x(!0):p(s)?N(!0):s.length<8||!f(s)?(console.log(s.length<8,"Less than 8 characters"),console.log(!f(s),"Does not contain digits"),N(!0)):e.push("/learn-ts-mui-redux/profile")}(n)},children:[Object(g.jsx)(b.a,{error:h,value:c,onChange:function(e){return r(e.target.value)},id:"outlined-basic",label:"Login",variant:"outlined",color:"secondary",size:"small",margin:"dense",required:!0}),Object(g.jsx)(b.a,{error:y,value:s,onChange:function(e){return l(e.target.value)},id:"outlined-basic",label:"Password",variant:"outlined",color:"secondary",size:"small",margin:"dense",required:!0}),Object(g.jsx)(m.a,{className:"login-page__btn",sx:{mt:2},type:"submit",variant:"contained",color:"secondary",children:"Login"})]})})})},h=t(3),x=t(68),v=t(152),_=function(e){var n=e.value,t=e.disabled,a=e.name,c=e.type,r=e.changeHandler;return Object(g.jsx)(b.a,{defaultValue:n,type:c,className:"profile-page__field",id:"outlined-basic",label:a,variant:"outlined",color:"primary",size:"small",margin:"normal",disabled:t,name:a,onChange:r})},y=t(76),N=t.n(y),S=function(){var e,n=Object(d.e)(),t=Object(a.useState)(!0),c=Object(j.a)(t,2),r=c[0],i=c[1];e=r?"Edit":"Finish Editing";var o=Object(a.useState)({name:"James",surname:"Bond",age:42,occupation:"Agent",phone:"007"}),s=Object(j.a)(o,2),l=s[0],u=s[1],b=function(e){u(Object(x.a)(Object(x.a)({},l),{},Object(h.a)({},e.target.name,e.target.value)))};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("header",{className:"profile-page__header",children:[Object(g.jsx)(N.a,{fontSize:"large",sx:{color:"#fff"}}),Object(g.jsx)(m.a,{sx:{height:"max-content"},type:"submit",variant:"contained",onClick:function(){return n.push("/learn-ts-mui-redux/")},children:"Logout"})]}),Object(g.jsx)("main",{className:"profile-page__main",children:Object(g.jsx)(v.a,{className:"profile-page__customer-info",children:Object(g.jsxs)("form",{noValidate:!0,autoComplete:"off",className:"profile-page__form",children:[Object(g.jsx)(m.a,{sx:{mb:2},variant:"contained",onClick:function(){return i(!r)},children:e}),Object(g.jsx)(_,{value:l.name,type:"text",disabled:r,name:"Name",changeHandler:function(e){return b(e)}}),Object(g.jsx)(_,{value:l.surname,type:"text",disabled:r,name:"Surname",changeHandler:function(e){return b(e)}}),Object(g.jsx)(_,{value:l.age,type:"number",disabled:r,name:"Age",changeHandler:function(e){return b(e)}}),Object(g.jsx)(_,{value:l.occupation,type:"text",disabled:r,name:"Occupation",changeHandler:function(e){return b(e)}}),Object(g.jsx)(_,{value:l.phone,type:"number",disabled:r,name:"Phone",changeHandler:function(e){return b(e)}})]})})})]})},C=Object(o.a)({palette:{secondary:{main:s.a[500]},text:{primary:s.a[500]}}}),F=function(){return Object(g.jsx)(u.a,{children:Object(g.jsx)(l.a,{theme:C,children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(d.a,{component:O,path:"/learn-ts-mui-redux/",exact:!0}),Object(g.jsx)(d.a,{component:S,path:"/learn-ts-mui-redux/profile",exact:!0})]})})})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,153)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),H()},92:function(e,n,t){},93:function(e,n,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.1bfe686b.chunk.js.map