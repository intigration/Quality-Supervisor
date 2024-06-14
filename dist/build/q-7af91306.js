import{u as g,y as m,d as n,f as l,b as e,C as r,w as h,c as w,q as o,F as f,e as a,v as _}from"./q-b628c5ca.js";import{C as v}from"./q-84813efe.js";import{I as s}from"./q-54663abb.js";import{a as y}from"./q-ffe9481e.js";import{u as k}from"./q-3c8ee1ad.js";import"./q-553bf67e.js";const x=i=>{const[u]=g();return u.setTheme(i.target.value)},C=()=>{const[i]=g();i.setTheme(i.theme.theme==="dark"?"light":"dark")},A=()=>{const i=m(v),u=k(),b=["dark","light","night","cupcake","bumblebee","corporate","synthwave","retro","valentine","halloween","aqua","lofi","fantasy","dracula"],p=o(()=>a(()=>Promise.resolve().then(()=>d),void 0),"s_sBVjXl0bKZc");return n(f,{children:[l("input",null,{id:"my-drawer-3",type:"checkbox",class:"drawer-toggle"},null,3,null),l("div",null,{class:"navbar bg-base-100"},[l("div",null,{class:"flex-1"},[l("div",null,{class:"flex-none md:hidden"},l("label",null,{for:"my-drawer-3","aria-label":"open sidebar",class:"btn btn-square btn-ghost"},l("img",null,{src:"imfarhan.svg",width:"204",height:"44"},null,3,null),3,null),3,null),l("a",null,{href:"/",class:"btn btn-ghost text-xl flex capitalize"},[l("label",null,{for:"my-drawer-3","aria-label":"open sidebar",class:"tooltip tooltip-bottom","data-tip":"View all Pages"},[l("img",null,{src:"imfarhan.svg",width:"204",height:"44"},null,3,null),"              "],3,null),l("h1",null,null,"AI Accelerated Quality -PRO",3,null)],3,null)],3,null),l("div",null,{class:"flex-none hidden md:flex"},[l("ul",null,{class:"menu menu-horizontal px-1"},[l("li",null,null,l("details",null,null,[l("summary",null,null,[n(s,{icon:"checklist",width:16,height:16,[e]:{icon:e,width:e,height:e}},3,"e6_0"),"Checklists"],1,null),l("ul",null,{class:"p-2 bg-base-100 rounded-t-none z-10"},i.value.map((t,c)=>l("li",{class:`hover:bg-${t.color}-600 hover:bg-opacity-15`},null,l("a",{href:`/checklist/${t.slug}`},null,[n(s,{get color(){return t.color},class:"mr-2",get icon(){return t.icon},width:16,height:16,[e]:{color:r(t,"color"),class:e,icon:r(t,"icon"),width:e,height:e}},3,"e6_1"),h(t,"title")],1,null),1,`checklist-nav-${c}`)),1,null)],1,null),1,null),l("li",null,null,l("a",null,{href:"/article",class:"tooltip flex tooltip-bottom","data-tip":"View / Edit Source & Data"},[n(s,{icon:"github",width:16,height:16,[e]:{icon:e,width:e,height:e}},3,"e6_2"),"Articles"],1,null),1,null),l("li",null,null,l("a",null,{href:"/about",class:"tooltip flex tooltip-bottom","data-tip":"View / Edit Source & Data"},"ImFarhan",3,null),3,null)],1,null),l("div",null,{class:"tooltip tooltip-bottom","data-tip":"Theme"},l("label",null,{class:"cursor-pointer grid place-items-center"},[l("input",null,{type:"checkbox",checked:w(t=>t.theme.theme==="dark",[u]),class:"toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2",onClick$:o(()=>a(()=>Promise.resolve().then(()=>d),void 0),"s_A45yoY9KJzs",[u])},null,3,null),l("svg",null,{class:"col-start-1 row-start-1 stroke-base-100 fill-base-100",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",null,{cx:"12",cy:"12",r:"5"},null,3,null),l("path",null,{d:"M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"},null,3,null)],3,null),l("svg",null,{class:"col-start-2 row-start-1 stroke-base-100 fill-base-100",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},l("path",null,{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},null,3,null),3,null)],3,null),3,null),l("li",null,{class:"list-none px-2"},l("p",null,{class:"cursor-pointer tooltip flex tooltip-bottom","data-tip":"Settings",onClick$:o(()=>a(()=>import("./q-7e25b1f9.js"),[]),"s_JMj4BOYAozw")},n(s,{icon:"settings",width:20,height:20,[e]:{icon:e,width:e,height:e}},3,"e6_3"),1,null),1,null)],1,null)],1,null),l("div",null,{class:"drawer-side z-10"},[l("label",null,{for:"my-drawer-3","aria-label":"close sidebar",class:"drawer-overlay"},null,3,null),l("ul",null,{class:"rounded-box menu p-4 w-80 min-h-full bg-base-200"},[l("h2",null,{class:"flex text-primary"},"Supervisor          ",3,null),l("li",null,null,l("a",null,{href:"/"},[n(s,{class:"mr-2",icon:"homepage",width:16,height:16,[e]:{class:e,icon:e,width:e,height:e}},3,"e6_4"),"Home"],1,null),1,null),l("li",null,null,l("a",null,{href:"https://github.com/lissy93/personal-security-checklist"},[n(s,{class:"mr-2",icon:"github",width:16,height:16,[e]:{class:e,icon:e,width:e,height:e}},3,"e6_5"),"GitHub"],1,null),1,null),l("li",null,null,[l("a",null,{href:"/checklist"},[n(s,{class:"mr-2",icon:"all",width:16,height:16,[e]:{class:e,icon:e,width:e,height:e}},3,"e6_6"),"Checklists"],1,null),l("ul",null,null,i.value.map((t,c)=>l("li",{class:`hover:bg-${t.color}-600 hover:bg-opacity-15`},null,l("a",{href:`/checklist/${t.slug}`},null,[n(s,{get color(){return t.color},class:"mr-2",get icon(){return t.icon},width:16,height:16,[e]:{color:r(t,"color"),class:e,icon:r(t,"icon"),width:e,height:e}},3,"e6_7"),h(t,"title")],1,null),1,`checklist-side-${c}`)),1,null)],1,null),l("li",null,null,[l("a",null,{href:"/article"},[n(s,{class:"mr-2",icon:"articles",width:16,height:16,[e]:{class:e,icon:e,width:e,height:e}},3,"e6_8"),"Articles"],1,null),l("ul",null,null,y.map(t=>l("li",null,null,l("a",{href:`/article/${t.slug}`},null,h(t,"title"),1,null),1,t.slug)),1,null)],1,null),l("li",null,null,[l("a",null,{href:"/about"},[n(s,{class:"mr-2",icon:"about",width:16,height:16,[e]:{class:e,icon:e,width:e,height:e}},3,"e6_9"),"About"],1,null),l("ul",null,null,[l("li",null,null,l("a",null,{href:"https://github.com/Lissy93/personal-security-checklist/?tab=readme-ov-file#contributing"},"Contributing",3,null),3,null),l("li",null,null,l("a",null,{href:"https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE"},"License",3,null),3,null)],3,null),l("ul",null,null,l("li",null,null,[l("a",null,{href:"/about#author"},"Author",3,null),l("ul",null,null,[l("li",null,null,l("a",null,{href:"https://aliciasykes.com/contact"},"Contact",3,null),3,null),l("li",null,null,l("a",null,{href:"https://apps.aliciasykes.com"},"More Apps",3,null),3,null),l("li",null,{class:"flex flex-row"},[l("a",null,{href:"https://github.com/lissy93"},n(s,{icon:"hub",width:16,height:16,[e]:{icon:e,width:e,height:e}},3,"e6_10"),1,null),l("a",null,{href:"https://x.com/lissy_sykes"},n(s,{icon:"twitter",width:16,height:16,[e]:{icon:e,width:e,height:e}},3,"e6_11"),1,null),l("a",null,{href:"https://mastodon.social/@lissy93"},n(s,{icon:"mastodon",width:16,height:16,[e]:{icon:e,width:e,height:e}},3,"e6_12"),1,null),l("a",null,{href:"https://dev.to/lissy93"},n(s,{icon:"dev",width:16,height:16,[e]:{icon:e,width:e,height:e}},3,"e6_13"),1,null),l("a",null,{href:"https://linkedin.com/in/aliciasykes"},n(s,{icon:"linkedin",width:16,height:16,[e]:{icon:e,width:e,height:e}},3,"e6_14"),1,null)],1,null)],1,null)],1,null),1,null)],1,null)],1,null)],1,null),l("dialog",null,{id:"settings_modal",class:"modal"},l("div",null,{class:"modal-box"},[l("div",null,{class:"tabs tabs-lifted"},[l("p",null,{class:"tab tab-active"},"Settings",3,null),l("a",null,{class:"tab",href:"/about"},"About",3,null)],3,null),l("div",null,{class:"modal-action justify-start w-full flex flex-col gap-4"},[l("div",null,{class:"flex items-between w-full justify-between"},[l("label",null,{for:"theme",class:"label"},"Theme",3,null),l("select",null,{id:"theme",class:"select select-bordered w-full max-w-xs",onChange$:o(()=>a(()=>Promise.resolve().then(()=>d),void 0),"s_pymeZPUwcBQ",[u])},[l("option",null,{disabled:!0,selected:!0},"Theme",3,null),b.map(t=>l("option",{value:t,selected:t===u.theme.theme},null,t.charAt(0).toUpperCase()+t.slice(1),1,t))],1,null)],1,null),l("div",null,{class:"flex items-between w-full justify-between"},[l("label",null,{class:"label"},"Data",3,null),l("button",null,{class:"btn btn-primary",onClick$:p},"Delete All",3,null)],3,null),l("button",null,{class:"btn my-1 mx-auto",onClick$:o(()=>a(()=>import("./q-c6c05afd.js"),[]),"s_4sI7CObH0Tg")},"Close",3,null)],1,null)],1,null),1,null)]},1,"e6_15")},E=()=>{confirm("Are you sure you want to delete all local data? This will erase your progress.")&&(localStorage.clear(),location.reload())},d=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_A45yoY9KJzs:C,s_kFUH7Vc7814:A,s_pymeZPUwcBQ:x,s_sBVjXl0bKZc:E},Symbol.toStringTag,{value:"Module"}));export{_ as _hW,C as s_A45yoY9KJzs,A as s_kFUH7Vc7814,x as s_pymeZPUwcBQ,E as s_sBVjXl0bKZc};