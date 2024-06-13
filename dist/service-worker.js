/* Qwik Service Worker */
const appBundles=[["q-03066e95.js",[3,41],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-05e79668.js",[]],["q-088a9673.js",[41],["8f0cBhNmn64","G0IGsUKcQ38","zW0Us0K8Two"]],["q-102c97df.js",[41]],["q-1df50d78.js",[3,41],["SGytLJ8uq8I"]],["q-26e31889.js",[41]],["q-27392a9b.js",[3,27,41,51],["cP1MN6aKI1E"]],["q-2aea2cc3.js",[41]],["q-31658996.js",[41]],["q-354ae837.js",[41],["CKtniPD6Fkk"]],["q-3630e927.js",[16]],["q-3c8ee1ad.js",[17,41]],["q-3e55ca16.js",[41]],["q-472ae90b.js",[16,41],["0YWghvQEs0E"]],["q-4e54d9ab.js",[41],["uPHV2oGn4wc"]],["q-50de1094.js",[1,3,41,54],["3zPRx0YlIHg","iS7pAtLcfoA"]],["q-54663abb.js",[41]],["q-553bf67e.js",[41]],["q-5af09c16.js",[3,41],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-67a263ed.js",[1,16,17,33,41,48],["18XXIST0zvU","7DMk6qXOmOM","9rMDZs5u8fw","aPpRUnWu7jo","GkU5L4eXZ8U","j0K9HBl2CWE","L8Ex2j9E2oM","NBlm8Tq0Bno","rmNTnOBXVN8","vQgyKkrnQeg","WVQuBa1iaRU","XV9acRMmYZg","y1ClYm77mqM"]],["q-70cace38.js",[3,41],["KK5BfmKH4ZI","Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-775b117e.js",[17,27,40,41],["KhdzVUQw9Fo","YUt8REzkOqc"]],["q-77bc5a51.js",[3,41],["iwoq7lI7a18","TG0a9Yb7gLI"]],["q-7af91306.js",[11,16,17,27,41,54],["A45yoY9KJzs","kFUH7Vc7814","pymeZPUwcBQ","sBVjXl0bKZc"]],["q-7ccf0215.js",[41,54],["Tdvb3YksfCQ"]],["q-7e25b1f9.js",[],["JMj4BOYAozw"]],["q-82817616.js",[16,17,41,48],["5Naa4VoAD0I","cSiWdBS7mt4","TkZ7Ua3eq58"]],["q-84813efe.js",[41]],["q-854c1673.js",[41]],["q-8809f3bd.js",[1,16,41],["3ZZlyOEjbxY","AiYQtfofRnQ","zGA04lmtI8I"]],["q-88565454.js",[],["DyVc0YBIqQU"]],["q-8ea06850.js",[]],["q-938c52b8.js",[33,41],["1SkPzUertu8"]],["q-9bbcdbc0.js",[41]],["q-a5422f93.js",[41],["8YfTVP9Xd6c"]],["q-a7c31a0a.js",[16,41],["1ggDDvM1yvw"]],["q-a81c9d91.js",[3,41],["n6hveoR600k"]],["q-b089a217.js",[41]],["q-b094deba.js",[11,17,41],["7RJv1KE0o7E","iXhD0AqoAtc"]],["q-b2a464ef.js",[41],["jQ2DXBsQgOs"]],["q-b517092d.js",[41]],["q-b628c5ca.js",[]],["q-c4a611d9.js",[41],["A5bZC7WO00A"]],["q-c5ec7b1f.js",[41]],["q-c6c05afd.js",[],["4sI7CObH0Tg"]],["q-c94448bb.js",[16,17,27,41],["1UGno8I5ND8","3ZGPpFBaonc","En6mjNUAa00","itTY0fMJ3Ds","NeDnm2uN1ds","oTJ0sJVVoUE","SShfgu905uI","TdN6n6ifVnk","Tdst0U6RIUg","u50Rpyk6Kg8"]],["q-cb626d0c.js",[41]],["q-cc7fa784.js",[3,41],["8gdLBszqbaM","Osdg8FnYTw4","pIf0khHUxfY"]],["q-d237ffe2.js",[]],["q-dc752b6d.js",[27,40,41],["LqnNyU1Iy8c"]],["q-dde69862.js",[1,3,16,27,41],["iD5VIeMrPQ4"]],["q-e52122b2.js",[3,41]],["q-ebabd747.js",[41],["fImMiDAwYlk","YA1PxnWXCFk"]],["q-f0d8449a.js",[3,41],["e0ssiDXoeAM"]],["q-ffe9481e.js",[]]];
const libraryBundleIds=[0];
const linkBundles=[[/^\/$/,[51,6,28,49]],[/^\/about\/?$/,[51,6,12,29]],[/^\/article\/?$/,[51,6,8,24]],[/^\/checklist\/?$/,[51,6,37,21]],[/^\/article\/([^/]+?)\/?$/,[51,6,7,15]],[/^\/checklist\/([^/]+?)\/?$/,[51,6,43,50]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
