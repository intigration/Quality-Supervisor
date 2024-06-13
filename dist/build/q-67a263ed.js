import{u as h,x as N,j as $,i as T,d as S,f as e,b as c,q as i,c as w,w as C,F as q,e as u,v as J}from"./q-b628c5ca.js";import{I as P}from"./q-54663abb.js";import{m as Q}from"./q-05e79668.js";import{s as W}from"./q-d237ffe2.js";import{u as Z}from"./q-9bbcdbc0.js";import{u as R}from"./q-553bf67e.js";const G=()=>{const[t]=h();return t.levels.essential=!t.levels.essential},H=()=>{const[t]=h();return t.levels.advanced=!t.levels.advanced},K=t=>{const[s]=h();s.column===t?s.ascending=!s.ascending:(s.column=t,s.ascending=!0)},z=()=>{const[t]=h();return t.show="all"},ee=()=>{const[t]=h();return t.levels.optional=!t.levels.optional},le=()=>{const[t]=h();return t.show="remaining"},te=()=>{const[t,s,p]=h(),_=t.value;_[s]=!_[s],p(_)},ne=()=>{const[t,s]=h();return t(s.id)},se=()=>{const[t]=h();t.value=!t.value},oe=()=>{const[t]=h();return t.show="completed"},re=()=>{const[t,s,p,_,b]=h(),v=s.value;v[p]=!v[p],b(v);const E=t.value;E[p]=!1,_(E)},ae=()=>{const[t,s,p,_,b]=h();t.value=_.section.checklist,b.column="",b.ascending=!0,s.levels=p.levels,s.show=p.show},ce=t=>{N();const[s,p]=R("PSC_PROGRESS",{}),[_,b]=R("PSC_IGNORED",{}),v=$(!1),E=Z(v,{timeout:300}),x=T({column:"",ascending:!0}),L=$(t.section.checklist),I={show:"all",levels:{essential:!0,optional:!0,advanced:!0}},r=T(I),D=(l,a="")=>{switch(l.toLocaleLowerCase()){case"essential":return`${a}success`;case"optional":return`${a}warning`;case"advanced":return`${a}error`;default:return`${a}neutral`}},k=l=>l.toLowerCase().replace(/ /g,"-"),V=l=>Q.parse(l||"",{async:!1})||"",f=l=>_.value[l]||!1,y=l=>f(l)?!1:s.value[l]||!1,j=L.value.filter(l=>{const a=k(l.point),o=y(a),n=f(a),m=l.priority;return r.show==="remaining"&&(o||n)||r.show==="completed"&&!o?!1:r.levels[m.toLocaleLowerCase()]}),A=(l,a)=>{const o=g=>{switch(x.column){case"done":return f(k(g.point))?2:y(k(g.point))?0:1;case"advice":return g.point;case"level":return["essential","optional","advanced"].indexOf(g.priority.toLowerCase());default:return 0}},n=o(l),m=o(a);return n===m?0:x.ascending?n<m?-1:1:n>m?-1:1},M=i(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_j0K9HBl2CWE",[x]),B=i(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_18XXIST0zvU",[L,r,I,t,x]),X=()=>{let l=0,a=0,o=0;t.section.checklist.forEach(m=>{const g=k(m.point);f(g)?a+=1:(y(g)&&(l+=1),o+=1)});const n=Math.round(l/o*100);return{done:l,total:t.section.checklist.length,percent:n,disabled:a}},{done:U,total:F,percent:O,disabled:Y}=X();return S(q,{children:[e("div",null,{class:"flex flex-wrap justify-between items-center"},[e("div",null,null,[e("progress",{value:O},{class:"progress w-64",max:"100"},null,3,null),e("p",null,{class:"text-xs text-center"},[U," out of ",F," (",O,"%) complete, ",Y," ignored"],1,null)],1,null),e("div",null,{class:"flex flex-wrap gap-2 justify-end my-4"},[(x.column||JSON.stringify(r)!==JSON.stringify(I))&&e("button",null,{class:"btn btn-sm hover:btn-primary",onClick$:B},[S(P,{width:18,height:16,icon:"clear",[c]:{width:c,height:c,icon:c}},3,"YJ_0"),"Reset Filters"],1,"YJ_1"),e("button",null,{class:"btn btn-sm hover:btn-primary",onClick$:i(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_rmNTnOBXVN8",[v])},[S(P,{width:18,height:16,icon:"filters",[c]:{width:c,height:c,icon:c}},3,"YJ_2"),w(l=>l.value?"Hide":"Show",[v])," Filters"],1,null)],1,null)],1,null),v.value&&e("div",null,{class:"flex flex-wrap justify-between bg-base-100 rounded px-4 py-1 transition-all",style:w(l=>({opacity:l.stage.value==="enterTo"?1:0,height:l.stage.value==="enterTo"?"auto":0}),[E])},[e("div",null,{class:"flex justify-end items-center gap-1"},[e("p",null,{class:"font-bold text-sm"},"Show",3,null),e("label",null,{class:"p-2 rounded hover:bg-front transition-all cursor-pointer flex gap-2",onClick$:i(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_NBlm8Tq0Bno",[r])},[e("span",null,{class:"text-sm"},"All",3,null),e("input",null,{type:"radio",name:"show",class:"radio radio-sm checked:radio-info",checked:!0},null,3,null)],3,null),e("label",null,{class:"p-2 rounded hover:bg-front transition-all cursor-pointer flex gap-2",onClick$:i(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_XV9acRMmYZg",[r])},[e("span",null,{class:"text-sm"},"Remaining",3,null),e("input",null,{type:"radio",name:"show",class:"radio radio-sm checked:radio-error"},null,3,null)],3,null),e("label",null,{class:"p-2 rounded hover:bg-front transition-all cursor-pointer flex gap-2",onClick$:i(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_7DMk6qXOmOM",[r])},[e("span",null,{class:"text-sm"},"Completed",3,null),e("input",null,{type:"radio",name:"show",class:"radio radio-sm checked:radio-success"},null,3,null)],3,null)],3,null),e("div",null,{class:"flex justify-end items-center gap-1"},[e("p",null,{class:"font-bold text-sm"},"Filter",3,null),e("label",null,{class:"p-2 rounded hover:bg-front transition-all cursor-pointer flex gap-2"},[e("span",null,{class:"text-sm"},"Basic",3,null),e("input",null,{type:"checkbox",checked:w(l=>l.levels.essential,[r]),class:"checkbox checkbox-sm checked:checkbox-success",onChange$:i(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_WVQuBa1iaRU",[r])},null,3,null)],3,null),e("label",null,{class:"p-2 rounded hover:bg-front transition-all cursor-pointer flex gap-2"},[e("span",null,{class:"text-sm"},"Optional",3,null),e("input",null,{type:"checkbox",checked:w(l=>l.levels.optional,[r]),class:"checkbox checkbox-sm checked:checkbox-warning",onChange$:i(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_L8Ex2j9E2oM",[r])},null,3,null)],3,null),e("label",null,{class:"p-2 rounded hover:bg-front transition-all cursor-pointer flex gap-2"},[e("span",null,{class:"text-sm"},"Advanced",3,null),e("input",null,{type:"checkbox",checked:w(l=>l.levels.advanced,[r]),class:"checkbox checkbox-sm checked:checkbox-error",onChange$:i(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_aPpRUnWu7jo",[r])},null,3,null)],3,null)],3,null)],3,"YJ_3"),e("table",null,{class:"table"},[e("thead",null,null,e("tr",null,null,[[{id:"done",text:"Done?"},{id:"advice",text:"Advice"},{id:"level",text:"Level"}].map(l=>e("th",{onClick$:i(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_GkU5L4eXZ8U",[M,l])},{class:"cursor-pointer"},e("span",null,{class:"flex items-center gap-0.5 hover:text-primary transition"},[S(P,{width:12,height:14,icon:"sort",[c]:{width:c,height:c,icon:c}},3,"YJ_4"),C(l,"text")],1,null),0,l.id)),e("th",null,null,"Details",3,null)],1,null),1,null),e("tbody",null,null,j.sort(A).map((l,a)=>{const o=D(l.priority),n=k(l.point),m=y(n),g=f(n);return e("tr",{class:["rounded-sm transition-all",m?`bg-${o} bg-opacity-10`:"",g?"bg-neutral bg-opacity-15":"",!g&&!m?`hover:bg-opacity-5 hover:bg-${o}`:""]},null,[e("td",null,{class:"text-center"},[e("input",{class:`checkbox checked:checkbox-${o} hover:checkbox-${o}`,id:`done-${n}`,checked:y(n),disabled:f(n),onClick$:i(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_y1ClYm77mqM",[s,n,p])},{type:"checkbox"},null,2,null),e("label",{for:`ignore-${n}`},{class:"text-small block opacity-50 mt-2"},"Ignore",3,null),e("input",{id:`ignore-${n}`,class:`toggle toggle-xs toggle-${o}`,checked:f(n),onClick$:i(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_vQgyKkrnQeg",[s,_,n,p,b])},{type:"checkbox"},null,2,null)],1,null),e("td",null,null,e("label",{for:`done-${n}`,class:`text-base font-bold ${f(n)?"line-through":"cursor-pointer"}`},null,C(l,"point"),1,null),1,null),e("td",null,null,e("div",{class:`badge gap-2 badge-${o}`},null,C(l,"priority"),1,null),1,null),e("td",{dangerouslySetInnerHTML:V(l.details)},{class:W.checklistItemDescription},null,3,null)],1,a)}),1,null)],1,null)]},1,"YJ_5")},d=Object.freeze(Object.defineProperty({__proto__:null,_hW:J,s_18XXIST0zvU:ae,s_7DMk6qXOmOM:oe,s_9rMDZs5u8fw:ce,s_GkU5L4eXZ8U:ne,s_L8Ex2j9E2oM:ee,s_NBlm8Tq0Bno:z,s_WVQuBa1iaRU:G,s_XV9acRMmYZg:le,s_aPpRUnWu7jo:H,s_j0K9HBl2CWE:K,s_rmNTnOBXVN8:se,s_vQgyKkrnQeg:re,s_y1ClYm77mqM:te},Symbol.toStringTag,{value:"Module"}));export{J as _hW,ae as s_18XXIST0zvU,oe as s_7DMk6qXOmOM,ce as s_9rMDZs5u8fw,ne as s_GkU5L4eXZ8U,ee as s_L8Ex2j9E2oM,z as s_NBlm8Tq0Bno,G as s_WVQuBa1iaRU,le as s_XV9acRMmYZg,H as s_aPpRUnWu7jo,K as s_j0K9HBl2CWE,se as s_rmNTnOBXVN8,re as s_vQgyKkrnQeg,te as s_y1ClYm77mqM};
