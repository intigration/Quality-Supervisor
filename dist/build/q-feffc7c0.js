import{u as g,i as u,D as h,e,c as v,A as x,C as f,v as i,q as p,d as m,t as y}from"./q-142ebcff.js";import{I as P}from"./q-c1be9360.js";import{s as S}from"./q-d237ffe2.js";import{u as _}from"./q-b75d2f84.js";const b=s=>{const[t,o]=g(),a=l=>l.point.toLowerCase().replace(/ /g,"-"),r=s.checklist.filter(l=>!o.value[a(l)]).length,n=s.checklist.filter(l=>t.value[a(l)]).length;return Math.round(n/r*100)},k=async()=>{const[s,t,o,a,r]=g();t.value=await Promise.all(r.sections.map(n=>a(n))),o.value=await Promise.all(r.sections.map(n=>n.checklist.filter(l=>s.value[l.point.toLowerCase().replace(/ /g,"-")]).length))},w=s=>{const t=u(),o=u(),[a]=_("PSC_PROGRESS",{}),[r]=_("PSC_IGNORED",{});return h("load",p(()=>m(()=>Promise.resolve().then(()=>d),void 0),"s_cSiWdBS7mt4",[a,t,o,p(()=>m(()=>Promise.resolve().then(()=>d),void 0),"s_TkZ7Ua3eq58",[a,r]),s])),e("div",null,{class:[S.container,"grid","mx-auto mt-8 px-4 gap-7","xl:px-10 xl:max-w-7xl","transition-all","max-w-6xl w-full"]},s.sections.map((l,c)=>e("a",{href:`/checklist/${l.slug}`,class:["card card-side bg-front bg-opacity-25 shadow-md transition-all px-2",`outline-offset-2 outline-${l.color}-400`,"hover:outline hover:outline-10 hover:outline-offset-4 hover:bg-opacity-15",`hover:bg-${l.color}-600`]},null,[e("div",null,{class:"flex-shrink-0 flex flex-col py-4 h-auto items-stretch justify-evenly"},[v(P,{icon:l.icon||"star",get color(){return l.color},[x]:{color:f(l,"color")}},3,"0A_0"),o.value&&o.value[c]?e("p",{class:`text-${l.color}-400 pt-2 pb-0 px-0 mx-0 my-0`},null,[o.value[c],"/",i(l.checklist,"length")," Done"],1,"0A_1"):e("p",{class:`text-${l.color}-400 pt-2 pb-0 px-0 mx-0 my-0`},null,[i(l.checklist,"length")," Items"],1,null)],1,null),e("div",null,{class:"card-body flex-grow py-2 pl-4 pr-0"},[e("h2",{class:`card-title text-${l.color}-400 hover:text-${l.color}-500`},null,i(l,"title"),1,null),e("p",null,{class:"p-0"},i(l,"description"),1,null),t.value&&t.value[c]?e("div",{class:["radial-progress absolute right-2 top-2 scale-75",`text-${l.color}-400`],style:`--value:${t.value[c]}; --size: 2.5rem;`},{role:"progressbar"},e("span",null,{class:"text-xs"},[t.value[c],"%"],1,null),1,"0A_2"):e("span",null,{class:"absolute right-2 top-2 opacity-30 text-xs"},"Not yet started",3,null)],1,null)],1,l.slug)),1,"0A_3")},d=Object.freeze(Object.defineProperty({__proto__:null,_hW:y,s_5Naa4VoAD0I:w,s_TkZ7Ua3eq58:b,s_cSiWdBS7mt4:k},Symbol.toStringTag,{value:"Module"}));export{y as _hW,w as s_5Naa4VoAD0I,b as s_TkZ7Ua3eq58,k as s_cSiWdBS7mt4};
