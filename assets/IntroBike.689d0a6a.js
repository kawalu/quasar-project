import{Q as g,a as p}from"./QBreadcrumbs.427e4be9.js";import{Q as n}from"./QImg.3d275ccb.js";import{ac as d,r as y,as as B,m as o,A as e,z as s,d as a,p as q,F as c,B as i,au as u,y as m}from"./index.b933ab16.js";import{u as w}from"./use-quasar.f32ceaea.js";import{B as _}from"./BikeCard.f800c43c.js";import"./use-form.fa2d2526.js";import"./format.a33550d6.js";import"./QCardSection.acc37fd4.js";import"./QCard.c954c369.js";import"./use-dark.43defbc1.js";const k={class:"q-pa-xl row items-start q-gutter-md",style:{padding:"0% 15% 0% 15%"}},H={class:"row"},N={class:"col-12"},j=s("h2",null,"\u8ECA\u6B3E\u4ECB\u7D39",-1),x=s("div",{class:"col-12"},[s("h2",null,"HONDA")],-1),K={class:"col-12"},Q={key:0,class:"col-12 col-md-6 col-lg-3"},I=s("div",{class:"col-12"},[s("h2",null,"YAMAHA")],-1),C={class:"col-12"},D={key:0,class:"col-12 col-md-6 col-lg-3"},L=s("div",{class:"col-12"},[s("h2",null,"KAWASAKI")],-1),M={class:"col-12"},O={key:0,class:"col-12 col-md-6 col-lg-3"},G={__name:"IntroBike",setup(Y){const h=w(),A=d(new URL("/quasar-project/assets/HONDA\u5C01\u9762.e89124ee.jpg",self.location).href),f=d(new URL("/quasar-project/assets/YAMAHA\u5C01\u9762.ea38bc4f.jpg",self.location).href),v=d(new URL("/quasar-project/assets/kawasaki\u5C01\u9762.adb8d01a.jpg",self.location).href),l=y([]);return(async()=>{try{const{data:r}=await B.get("/products");l.value.push(...r.result)}catch(r){h.notify({text:r.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(r,b)=>(o(),e("div",k,[s("div",H,[s("div",N,[j,a(g,{class:"text-h6"},{default:q(()=>[a(p,{label:"\u56DE\u9996\u9801",icon:"home",to:"/"}),a(p,{label:"\u8ECA\u6B3E\u4ECB\u7D39",icon:"electric_moped"})]),_:1})]),x,s("div",K,[a(n,{src:A},null,8,["src"])]),(o(!0),e(c,null,i(l.value,t=>(o(),e(c,{key:t._id},[t.category==="HONDA"?(o(),e("div",Q,[a(_,u(t,{class:"q-ma-md"}),null,16)])):m("",!0)],64))),128)),I,s("div",C,[a(n,{src:f},null,8,["src"])]),(o(!0),e(c,null,i(l.value,t=>(o(),e(c,{key:t._id},[t.category==="YAMAHA"?(o(),e("div",D,[a(_,u(t,{class:"q-ma-md"}),null,16)])):m("",!0)],64))),128)),L,s("div",M,[a(n,{src:v},null,8,["src"])]),(o(!0),e(c,null,i(l.value,t=>(o(),e(c,{key:t._id},[t.category==="KAWASAKI"?(o(),e("div",O,[a(_,u(t,{class:"q-ma-md"}),null,16)])):m("",!0)],64))),128))])]))}};export{G as default};