import{x as w,i as f,A as h,f as s,d as b,q as v,e as x,w as k,b as u,R as y,u as L}from"./q-b628c5ca.js";import{a as R}from"./q-ffe9481e.js";import{m as p}from"./q-05e79668.js";import{a as $}from"./q-102c97df.js";const A="_psc_article_h9hpt_1",M={psc_article:A},S=()=>{w();const o=$(),t=f({article:null,notFound:!1}),a=o.params.slug,l=R.find(r=>r.slug===a),d=r=>{if(!r)return"";const c=new p.Renderer;c.heading=(e,n)=>{const i=e.toLowerCase().replace(/[^\w]+/g,"-");return`<h${n} id="${i}">${e}</h${n}>`},c.link=(e,n,i)=>(e.startsWith("/")&&(e=`https://github.com/Lissy93/personal-security-checklist/blob/old-version/${e}`),n=n?`title="${n}"`:"",`<a href="${e}" ${n} target="_blank" rel="noopener noreferrer">${i}</a>`);const m=e=>e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");p.use({renderer:c});const g=p.parse(r,{async:!1});return m(g)},_=h(v(()=>x(()=>Promise.resolve().then(()=>z),void 0),"s_iS7pAtLcfoA",[l,t]));return t.notFound?s("div",null,null,"404 Article Not Found",3,"bp_0"):b(y,{value:_,onResolved:r=>s("article",null,{class:["prose bg-back my-4 mx-auto rounded-lg shadow-lg p-8","max-w-max sm:w-11/12 md:w-4/5 xl:w-3/4 2xl:2/4",M.psc_article]},[(l==null?void 0:l.warningMessage)&&s("div",null,{role:"alert",class:"alert alert-warning opacity-75 mb-4"},[s("svg",null,{xmlns:"http://www.w3.org/2000/svg",class:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24"},s("path",null,{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,3,null),3,null),s("span",null,null,[s("b",null,null,"Warning",3,null),": ",k(l,"warningMessage")],1,null)],1,"bp_1"),s("div",{dangerouslySetInnerHTML:d(r)},null,null,3,null)],1,"bp_2"),[u]:{value:u,onResolved:u}},3,"bp_3")},j=async()=>{const[o,t]=L();if(!o)return t.notFound=!0,"";const a=await fetch(o.markdown);return a.ok?a.text():(t.notFound=!0,"")},z=Object.freeze(Object.defineProperty({__proto__:null,s_3zPRx0YlIHg:S,s_iS7pAtLcfoA:j},Symbol.toStringTag,{value:"Module"}));export{S as s_3zPRx0YlIHg,j as s_iS7pAtLcfoA};
