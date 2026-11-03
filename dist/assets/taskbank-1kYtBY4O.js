import{c as ge,r as d,j as e,q as bt}from"./index-DdKrgUlZ.js";import{C as yt}from"./CsvImportDialog-CO0BqgiJ.js";import{u as kt,P as jt}from"./Pagination-UbNjK2ed.js";import{u as wt,B as vt,S as Oe}from"./BulkSelectBar-CKQrbcP3.js";import{A as V}from"./archive-C-tpmx3I.js";import{S as Ee}from"./sparkles-DY2Y4YoQ.js";import{U as qe}from"./upload-BppJZ4xG.js";import{P as Fe}from"./plus-8jlsDOtV.js";import{S as Z}from"./send-D2GKwi2o.js";import{R as L}from"./rotate-ccw-DZTGlI6M.js";import{U as K}from"./users-C5Aqy3aj.js";import{C as xe}from"./copy-Cejnsmqu.js";import{Z as me}from"./zap-CvWz7EXD.js";import{F as Nt}from"./funnel-BR8BIIkd.js";import{L as Ct,P as he}from"./pen-line-D8Yigl8m.js";import{S as St}from"./search-BYLJVZob.js";import{X as O}from"./x-CpRqZeGy.js";import{A as zt}from"./arrow-right-DpNwzmBk.js";import{C as Tt}from"./chevron-down-CO4vTuki.js";import{E as Ue}from"./ellipsis-C8L058fD.js";import{T as _e}from"./trash-aqL3TGvH.js";import{C as He}from"./clipboard-list-D7YjNJkj.js";import{F as Ye}from"./file-text-DS9sIUc2.js";import{P as pe}from"./paperclip-BO9SqJ2E.js";import"./loader-circle-C6iMG4x7.js";import"./circle-check-Bb8TVzmm.js";import"./triangle-alert-470AK52j.js";import"./chevron-right-nPP00h3Y.js";const Ge={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};Ge.node;const At=ge(Ge);const Je={name:"grid-2x2",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],aliases:["grid-2-x-2"]};Je.node;const It=ge(Je);const Ve={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};Ve.node;const oe=ge(Ve),B="http://localhost:5000/api",C=B.endsWith("/")?`${B}taskbank`:`${B}/taskbank`,Pe=["jpg","jpeg","png","gif","webp","pdf","doc","docx","xls","xlsx","ppt","pptx","txt","csv","zip"],Dt=10*1024*1024,le=10,Le=t=>t?t<1024*1024?`${Math.max(1,Math.round(t/1024))} KB`:`${(t/1024/1024).toFixed(1)} MB`:"",Rt=async t=>{const s=B.replace(/\/api\/?$/,""),i=await fetch(`${s}${t.url}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")||""}`}});if(!i.ok){alert("This file could not be downloaded.");return}const o=URL.createObjectURL(await i.blob()),l=document.createElement("a");l.href=o,l.download=t.name,document.body.appendChild(l),l.click(),l.remove(),URL.revokeObjectURL(o)},$t=()=>{const t=["token","authToken","accessToken","jwt","userToken"];for(const s of t){const i=localStorage.getItem(s);if(i)return i}return""},I=(t=!1)=>{const s={};t&&(s["Content-Type"]="application/json");const i=$t();return i&&(s.Authorization=`Bearer ${i}`),s},Mt=()=>{["token","authToken","accessToken","jwt","userToken"].forEach(t=>{localStorage.removeItem(t)}),window.dispatchEvent(new Event("auth-expired"))},N=async(t,s={})=>{const i=await fetch(t,{...s,credentials:"include",headers:{...I(!!s.body&&!(s.body instanceof FormData)),...s.headers||{}}});let o=null;if((i.headers.get("content-type")||"").includes("application/json"))o=await i.json();else{const h=await i.text();o=h?{message:h}:{}}if(i.status===401&&Mt(),!i.ok)throw new Error(o?.message||o?.error||`Request failed with status ${i.status}`);return o},Xe=t=>t?.data!==void 0?t.data:t?.taskBank!==void 0?t.taskBank:t?.taskbank!==void 0?t.taskbank:t?.item!==void 0?t.item:t?.result!==void 0?t.result:t,de=t=>{const s=Xe(t);return Array.isArray(s)?s:Array.isArray(t?.items)?t.items:Array.isArray(t?.tasks)?t.tasks:Array.isArray(t?.taskBank)?t.taskBank:[]},Et=()=>{try{return JSON.parse(localStorage.getItem("user")||"null")}catch{return null}},G=(t,s,i)=>t?.role==="SuperAdmin"||!!t?.permissions?.[s]?.includes(i),Be=(t={})=>{const s=t?.item||t?.data||t;return{...s,id:s._id||s.id,title:s.title||s.name||"",description:s.description||"",category:s.category||"General",department:typeof s.department=="object"?s.department?.name||s.department?.departmentName||"":s.department||"",type:s.type||"Template",priority:s.priority||"Medium",status:s.status||(s.type==="Idea"?"Draft":"Ready to Assign"),estimatedTime:s.estimatedTime||"1 hour",usageCount:Number(s.usageCount||0),assignments:Array.isArray(s.assignments)?s.assignments:[],attachments:Array.isArray(s.attachments)?s.attachments:[],assignedCount:Number(s.assignedCount||0),lastAssignedTo:s.lastAssignedTo||"",createdAt:s.createdAt?String(s.createdAt).split("T")[0]:"",tags:Array.isArray(s.tags)?s.tags:typeof s.tags=="string"?s.tags.split(",").map(i=>i.trim()).filter(Boolean):[]}},us=()=>{const[t,s]=d.useState([]),[i,o]=d.useState(!0),[l,h]=d.useState(""),[f,n]=d.useState(!1),[c,g]=d.useState(""),[b,p]=d.useState("All Categories"),[k,m]=d.useState("All Departments"),[S,D]=d.useState("All Types"),[x,T]=d.useState("All Priorities"),[R,ue]=d.useState("grid"),[Ke,fe]=d.useState(!1),[Ze,Qe]=d.useState("new"),[Q,be]=d.useState(null),[ye,$]=d.useState(null),[M]=d.useState(Et),ke=M?.role==="SuperAdmin",q=G(M,"taskbank","create"),je=G(M,"taskbank","edit"),E=G(M,"taskbank","delete"),we=G(M,"taskbank","assign"),ve=G(M,"taskbank","import"),[We,W]=d.useState(!1),[U,ee]=d.useState(null),[Ne,et]=d.useState("assign"),[F,Ce]=d.useState({userId:"",department:"",dueDate:"",priority:"Medium"}),[tt,st]=d.useState([]),[at,rt]=d.useState([]),[Se,it]=d.useState(!1),[te,ze]=d.useState(!1),[Te,_]=d.useState(""),[j,se]=d.useState({title:"",description:"",category:"General",department:"Management",type:"Template",priority:"Medium",estimatedTime:"1 hour",tags:"",keepFiles:[],newFiles:[]}),v=async()=>{try{o(!0),h("");const a=await N(C),r=de(a);s(r.map(Be))}catch(a){console.error("Task Bank load error:",a),h(a.message||"Cannot reach the Task Bank server.")}finally{o(!1)}};d.useEffect(()=>{v()},[]);const nt=d.useMemo(()=>["All Categories",...new Set(t.map(a=>a.category))],[t]),ot=d.useMemo(()=>["All Departments",...new Set(t.map(a=>a.department))],[t]),z=d.useMemo(()=>{const a=c.toLowerCase().trim();return t.filter(r=>{const u=!a||String(r.title||"").toLowerCase().includes(a)||String(r.description||"").toLowerCase().includes(a)||String(r.category||"").toLowerCase().includes(a)||String(r.department||"").toLowerCase().includes(a)||(r.tags||[]).some(ie=>String(ie).toLowerCase().includes(a)),w=b==="All Categories"||r.category===b,y=k==="All Departments"||r.department===k,P=S==="All Types"||r.type===S,re=x==="All Priorities"||r.priority===x;return u&&w&&y&&P&&re})},[t,c,b,k,S,x]),ae=kt(z,{id:"taskbank",resetKey:`${c}|${b}|${k}|${S}|${x}`}),lt=t.length,dt=t.filter(a=>a.status==="Ready to Assign").length,ct=t.filter(a=>a.type==="Idea"||a.status==="Draft").length,pt=t.filter(a=>a.usageCount>0).length,gt=new Set(t.map(a=>a.department)).size,A=(a="new",r=null)=>{Qe(a),be(r),se(r?{title:r.title,description:r.description,category:r.category,department:r.department,type:r.type,priority:r.priority,estimatedTime:r.estimatedTime,tags:Array.isArray(r.tags)?r.tags.join(", "):String(r.tags||""),keepFiles:r.attachments||[],newFiles:[]}:{title:"",description:"",category:"General",department:"Management",type:a==="idea"?"Idea":"Template",priority:"Medium",estimatedTime:"1 hour",tags:"",keepFiles:[],newFiles:[]}),$(null),fe(!0)},Ae=()=>{fe(!1),be(null)},xt=async a=>{if(a.preventDefault(),f)return;const r=j.title.trim(),u=j.description.trim();if(!r){alert("Please enter a task bank title.");return}if(!u){alert("Please enter a description.");return}n(!0);const w={title:r,description:u,category:j.category.trim()||"General",department:j.department.trim()||"Management",type:j.type||"Template",priority:j.priority||"Medium",estimatedTime:j.estimatedTime.trim()||"1 hour",tags:j.tags.split(",").map(y=>y.trim()).filter(Boolean)};try{const y=!!Q?.id,P=new FormData;Object.entries(w).forEach(([Y,ne])=>P.append(Y,Array.isArray(ne)?ne.join(","):String(ne??""))),y&&P.append("keepAttachments",JSON.stringify(j.keepFiles.map(Y=>Y.filename))),j.newFiles.forEach(Y=>P.append("files",Y));const re=await N(y?`${C}/${Q.id}`:C,{method:y?"PUT":"POST",body:P}),ie=Xe(re);if(!Be(ie).id)throw new Error("The server saved the item but did not return its ID.");await v(),Ae()}catch(y){console.error("Task Bank save error:",y),alert(y.message||"Failed to save Task Bank item.")}finally{n(!1)}},Ie=d.useMemo(()=>E?z.map(a=>a.id).filter(Boolean):[],[z,E]),H=wt(Ie),mt=async a=>{const r=await Promise.allSettled(a.map(w=>N(`${C}/${w}`,{method:"DELETE",headers:I()}))),u=a.filter((w,y)=>r[y].status==="fulfilled");if(await v(),!u.length&&r[0]?.status==="rejected")throw r[0].reason;return u},De=async a=>{const r=t.find(w=>w.id===a);if(!(!r||!window.confirm(`Delete "${r.title}" from Task Bank?`)))try{await N(`${C}/${a}`,{method:"DELETE",headers:I()}),await v()}catch(w){console.error("Task Bank delete error:",w),alert(w.message||"Failed to delete item.")}finally{$(null)}},ht=async()=>{if(Se)return;const[a,r]=await Promise.all([N(`${B.replace(/\/$/,"")}/users/assignable`),N(`${B.replace(/\/$/,"")}/departments`)]);st(de(a).map(u=>({id:u._id||u.id,name:u.name||u.email,email:u.email||"",department:u.department||""}))),rt(de(r).map(u=>u.name).filter(Boolean)),it(!0)},Re=async a=>{const r=t.find(u=>u.id===a);if(r){$(null),_(""),et(r.assignedCount>0?"reassign":"assign"),Ce({userId:"",department:r.department||"",dueDate:"",priority:["High","Medium","Low"].includes(r.priority)?r.priority:"Medium"}),ee(r);try{await ht()}catch(u){_(u.message||"Failed to load users.")}}},ut=async a=>{if(a.preventDefault(),!(!U||te)){if(!F.userId){_("Select the user to assign this task to.");return}ze(!0),_("");try{const r=await N(`${C}/${U.id}/${Ne==="reassign"?"reassign":"assign"}`,{method:"POST",headers:I(!0),body:JSON.stringify({assignedUser:F.userId,department:F.department,dueDate:F.dueDate||void 0,priority:F.priority})});await v(),ee(null),alert(r?.message||`"${U.title}" assigned successfully.`)}catch(r){console.error("Task Bank assign error:",r),_(r.message||"Failed to assign item.")}finally{ze(!1)}}},$e=async a=>{try{await N(`${C}/${a.id}/duplicate`,{method:"POST",headers:I(!0),body:JSON.stringify({})}),await v()}catch(r){console.error("Task Bank duplicate error:",r),alert(r.message||"Failed to duplicate item.")}finally{$(null)}},ft=async()=>{try{o(!0),h(""),await N(`${C}/seed`,{method:"POST",headers:I(!0),body:JSON.stringify({})}),await v()}catch(a){try{await N(`${C}/seed`,{method:"GET",headers:I()}),await v()}catch(r){console.error("Task Bank seed error:",r),alert(r.message||a.message||"Failed to load sample data."),o(!1)}}},Me=()=>{g(""),p("All Categories"),m("All Departments"),D("All Types"),T("All Priorities")};return e.jsxs("div",{className:"task-bank-page",children:[e.jsx("div",{className:"task-bank-background-orb orb-one"}),e.jsx("div",{className:"task-bank-background-orb orb-two"}),e.jsxs("div",{className:"task-bank-container",children:[e.jsxs("section",{className:"task-bank-hero",children:[e.jsxs("div",{className:"hero-left",children:[e.jsx("div",{className:"hero-icon",children:e.jsx(V,{size:25})}),e.jsxs("div",{children:[e.jsxs("div",{className:"hero-title-row",children:[e.jsx("h1",{children:"Task Bank"}),e.jsxs("span",{className:"hero-badge",children:[e.jsx(Ee,{size:12}),"Smart Repository"]})]}),e.jsx("p",{children:"Store reusable tasks, ideas and templates — then assign them whenever your team needs them."})]})]}),(q||ve)&&e.jsxs("div",{className:"hero-actions",children:[ve&&e.jsxs("button",{className:"secondary-btn",onClick:()=>W(!0),children:[e.jsx(qe,{size:16}),"Import"]}),q&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"secondary-btn",onClick:()=>A("idea"),children:[e.jsx(oe,{size:16}),"Save Idea"]}),e.jsxs("button",{className:"primary-btn",onClick:()=>A("new"),children:[e.jsx(Fe,{size:17}),"New Repository Item"]})]})]})]}),e.jsxs("section",{className:"stats-grid",children:[e.jsx(J,{label:"TOTAL REPOSITORY",value:lt,description:"Saved reusable items",icon:e.jsx(V,{size:17}),variant:"blue"}),e.jsx(J,{label:"READY TO ASSIGN",value:dt,description:"Prepared task templates",icon:e.jsx(Z,{size:17}),variant:"green"}),e.jsx(J,{label:"IDEAS & DRAFTS",value:ct,description:"Ideas waiting to develop",icon:e.jsx(oe,{size:17}),variant:"yellow"}),e.jsx(J,{label:"RECENTLY USED",value:pt,description:"Previously assigned items",icon:e.jsx(L,{size:17}),variant:"purple"}),e.jsx(J,{label:"DEPARTMENTS",value:gt,description:"Departments represented",icon:e.jsx(K,{size:17}),variant:"pink"})]}),e.jsxs("section",{className:"quick-actions",children:[e.jsx(ce,{icon:e.jsx(xe,{size:18}),title:"Create Task Template",description:"Build a reusable task for future assignments.",onClick:()=>A("new")}),e.jsx(ce,{icon:e.jsx(oe,{size:18}),title:"Store New Idea",description:"Save an idea now and develop it later.",onClick:()=>A("idea"),variant:"yellow"}),e.jsx(ce,{icon:e.jsx(me,{size:18}),title:"Ready to Assign",description:"View tasks that can be assigned immediately.",onClick:()=>{D("Template"),g(""),p("All Categories"),m("All Departments"),T("All Priorities")},variant:"green"})]}),e.jsxs("section",{className:"filter-card",children:[e.jsxs("div",{className:"section-heading",children:[e.jsxs("div",{className:"section-heading-left",children:[e.jsx("div",{className:"section-icon",children:e.jsx(Nt,{size:17})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Search Repository"}),e.jsx("p",{children:"Find saved tasks, templates and ideas."})]})]}),e.jsxs("div",{className:"view-switch",children:[e.jsx("button",{className:R==="grid"?"active":"",onClick:()=>ue("grid"),title:"Grid view",children:e.jsx(It,{size:15})}),e.jsx("button",{className:R==="list"?"active":"",onClick:()=>ue("list"),title:"List view",children:e.jsx(Ct,{size:16})})]})]}),e.jsxs("div",{className:"filters-row",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(St,{size:16}),e.jsx("input",{value:c,onChange:a=>g(a.target.value),placeholder:"Search task ideas, templates..."}),c&&e.jsx("button",{className:"clear-search",onClick:()=>g(""),children:e.jsx(O,{size:14})})]}),e.jsx(X,{value:b,onChange:p,options:nt}),e.jsx(X,{value:k,onChange:m,options:ot}),e.jsx(X,{value:S,onChange:D,options:["All Types","Template","Idea"]}),e.jsx(X,{value:x,onChange:T,options:["All Priorities","High","Medium","Low"]}),e.jsxs("button",{className:"clear-filter-btn",onClick:Me,children:[e.jsx(L,{size:14}),"Clear"]})]})]}),e.jsxs("div",{className:"repository-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Task Repository"}),e.jsxs("span",{children:["Showing"," ",e.jsx("strong",{children:z.length})," ","of ",t.length]})]}),e.jsxs("div",{className:"repository-summary",children:[e.jsx(At,{size:15}),"Reusable workspace library"]})]}),i&&e.jsxs("section",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(V,{size:31})}),e.jsx("h3",{children:"Loading Task Bank..."}),e.jsx("p",{children:"Fetching items from the server."})]}),!i&&l&&e.jsxs("section",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(O,{size:31})}),e.jsx("h3",{children:"Could not load Task Bank"}),e.jsx("p",{children:l}),e.jsxs("button",{className:"primary-btn",onClick:v,children:[e.jsx(L,{size:15}),"Retry"]})]}),!i&&!l&&z.length===0&&e.jsxs("section",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(V,{size:31})}),e.jsx("h3",{children:"No Repository Items Found"}),e.jsx("p",{children:t.length===0?ke?"Your Task Bank is empty. Load the shared sample templates or create your first item.":"Your Task Bank is empty. Create your first item to get started.":"No task bank items match your current filters."}),t.length===0&&!ke?q&&e.jsxs("button",{className:"primary-btn",onClick:()=>A("new"),children:[e.jsx(Fe,{size:15}),"Create Item"]}):t.length===0?e.jsxs("button",{className:"primary-btn",onClick:ft,children:[e.jsx(Ee,{size:15}),"Load Sample Data"]}):e.jsxs("button",{className:"primary-btn",onClick:Me,children:[e.jsx(L,{size:15}),"Reset Filters"]})]}),!i&&!l&&Ie.length>0&&e.jsx(vt,{...H,label:"items",onDelete:mt}),!i&&!l&&R==="grid"&&z.length>0&&e.jsx("div",{className:"repository-grid",children:ae.items.map(a=>e.jsx(Ft,{item:a,menuId:ye,setMenuId:$,onAssign:we?Re:void 0,onEdit:je?A:void 0,onDelete:E?De:void 0,onDuplicate:q?$e:void 0,selected:H.isSelected(a.id),onSelect:E?()=>H.toggle(a.id):void 0},a.id))}),!i&&!l&&R==="list"&&z.length>0&&e.jsx("div",{className:"repository-list",children:ae.items.map(a=>e.jsx(Pt,{item:a,menuId:ye,setMenuId:$,onAssign:we?Re:void 0,onEdit:je?A:void 0,onDelete:E?De:void 0,onDuplicate:q?$e:void 0,selected:H.isSelected(a.id),onSelect:E?()=>H.toggle(a.id):void 0},a.id))}),!i&&!l&&z.length>0&&e.jsx(jt,{...ae,label:"items"})]}),Ke&&e.jsx(Bt,{form:j,setForm:se,onClose:Ae,onSubmit:xt,editing:!!Q,saving:f,mode:Ze}),We&&e.jsx(yt,{endpoint:"/api/taskbank/import",title:"Import Task Bank items from CSV",help:"Columns: Title*, Description*, Category, Department, Type (Template or Idea), Priority (High, Medium, Low), Estimated Time, Tags (separate with ; ). Items whose title already exists are skipped.",columns:[{key:"title",label:"Title"},{key:"category",label:"Category"},{key:"department",label:"Department"},{key:"type",label:"Type"},{key:"priority",label:"Priority"},{key:"tags",label:"Tags"}],template:{filename:"task-bank-import-template.csv",header:"Title,Description,Category,Department,Type,Priority,Estimated Time,Tags",sample:["Monthly security review,Review access rights and logs,Security,IT,Template,High,3 hours,security; monthly"]},onClose:()=>W(!1),onImported:a=>{W(!1),v(),alert(a.message||"Items imported.")}}),U&&e.jsx(Ot,{item:U,form:F,setForm:Ce,users:tt,departments:at,loading:!Se&&!Te,mode:Ne,saving:te,error:Te,onClose:()=>!te&&ee(null),onSubmit:ut}),e.jsx("style",{children:`

        * {
          box-sizing: border-box;
        }

        .task-bank-page {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          padding: 28px 24px 70px;
          background:
            radial-gradient(circle at 8% 5%, rgba(81, 210, 225, 0.18), transparent 27%),
            radial-gradient(circle at 94% 12%, rgba(124, 96, 230, 0.12), transparent 30%),
            linear-gradient(135deg, #edfafd 0%, #f7fbfd 44%, #f4f3fc 100%);
          color: #173653;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .task-bank-container {
          width: 100%;
          max-width: 1480px;
          margin: 0 auto;
          position: relative;
          z-index: 100;
        }

        .task-bank-background-orb {
          position: fixed;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(3px);
          z-index: 0;
        }

        .orb-one {
          width: 360px;
          height: 360px;
          left: -180px;
          top: 300px;
          background: rgba(55, 202, 215, 0.08);
        }

        .orb-two {
          width: 420px;
          height: 420px;
          right: -220px;
          top: 450px;
          background: rgba(102, 83, 220, 0.08);
        }

        /* HERO */

        .task-bank-hero {
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 25px 28px;
          border: 1px solid rgba(125, 178, 202, 0.35);
          border-radius: 21px;
          background: linear-gradient(135deg, rgba(255,255,255,0.96), rgba(238,249,252,0.94));
          box-shadow: 0 15px 35px rgba(23, 72, 100, 0.07), inset 0 1px 0 rgba(255,255,255,0.9);
          position: relative;
          overflow: hidden;
        }

        .task-bank-hero::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          right: -80px;
          top: -130px;
          background: rgba(73, 202, 220, 0.1);
        }

        .hero-left {
          display: flex;
          align-items: center;
          gap: 17px;
          min-width: 0;
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          color: white;
          background: linear-gradient(145deg, #143e69, #0c72a1);
          box-shadow: 0 9px 22px rgba(14, 92, 132, 0.23);
        }

        .hero-title-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .hero-title-row h1 {
          margin: 0;
          color: #123554;
          font-size: 25px;
          font-weight: 800;
          letter-spacing: -0.6px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 9px;
          border-radius: 999px;
          color: #0b6e82;
          background: #e2f7f7;
          border: 1px solid #c8ecef;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        .hero-left p {
          margin: 6px 0 0;
          color: #6b879e;
          font-size: 12px;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          z-index: 3;
        }

        button {
          font-family: inherit;
        }

        .primary-btn,
        .secondary-btn {
          height: 40px;
          border-radius: 10px;
          padding: 0 15px;
          border: 1px solid transparent;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          cursor: pointer;
          font-size: 11px;
          font-weight: 750;
          transition: 0.2s ease;
          white-space: nowrap;
        }

        .primary-btn {
          color: white;
          background: linear-gradient(135deg, #123f69, #177eaa);
          box-shadow: 0 7px 17px rgba(18, 86, 125, 0.2);
        }

        .primary-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 22px rgba(18, 86, 125, 0.27);
        }

        .primary-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .secondary-btn {
          color: #1d5b7b;
          background: rgba(255,255,255,0.85);
          border-color: #cfe1ea;
        }

        .secondary-btn:hover {
          background: #fff;
          border-color: #9dc4d5;
        }

        /* STATS */

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
          margin-top: 13px;
        }

        .stat-card {
          min-height: 110px;
          padding: 17px 18px;
          border-radius: 15px;
          border: 1px solid #d5e3ea;
          background: rgba(255,255,255,0.92);
          box-shadow: 0 7px 20px rgba(30, 76, 101, 0.045);
          position: relative;
          overflow: hidden;
          transition: 0.2s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(30, 76, 101, 0.08);
        }

        .stat-card::before {
          content: "";
          position: absolute;
          height: 2px;
          left: 0;
          right: 0;
          top: 0;
        }

        .stat-card.blue::before { background: #2785b5; }
        .stat-card.green::before { background: #19a78a; }
        .stat-card.yellow::before { background: #e4ae3b; }
        .stat-card.purple::before { background: #7568dc; }
        .stat-card.pink::before { background: #cb6ea9; }

        .stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stat-label {
          color: #7890a3;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.8px;
        }

        .stat-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-card.blue .stat-icon { color: #2a80aa; background: #eaf6fb; }
        .stat-card.green .stat-icon { color: #1b9a81; background: #e9f8f2; }
        .stat-card.yellow .stat-icon { color: #c99625; background: #fff7df; }
        .stat-card.purple .stat-icon { color: #7162ce; background: #f1effd; }
        .stat-card.pink .stat-icon { color: #b75c94; background: #f9edf6; }

        .stat-value {
          margin-top: 6px;
          color: #173b5c;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.7px;
        }

        .stat-description {
          margin-top: 3px;
          color: #89a0b1;
          font-size: 9px;
        }

        /* QUICK ACTIONS */

        .quick-actions {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 13px;
        }

        .quick-action {
          min-height: 59px;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          gap: 11px;
          text-align: left;
          cursor: pointer;
          border-radius: 13px;
          border: 1px solid #d7e5eb;
          background: rgba(255,255,255,0.83);
          transition: 0.2s ease;
          position: relative;
        }

        .quick-action:hover {
          transform: translateY(-1px);
          background: #fff;
          border-color: #b7d3df;
          box-shadow: 0 8px 20px rgba(34, 83, 107, 0.07);
        }

        .quick-icon {
          width: 31px;
          height: 31px;
          border-radius: 9px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #237ba3;
          background: #eaf6fb;
        }

        .quick-action.yellow .quick-icon { color: #c38e24; background: #fff6dc; }
        .quick-action.green .quick-icon { color: #159377; background: #e6f8f1; }

        .quick-content {
          min-width: 0;
          flex: 1;
        }

        .quick-title {
          color: #194264;
          font-size: 10px;
          font-weight: 800;
        }

        .quick-description {
          margin-top: 2px;
          color: #8299aa;
          font-size: 8px;
        }

        .quick-arrow {
          color: #7d9aab;
        }

        /* FILTER */

        .filter-card {
          margin-top: 13px;
          padding: 16px;
          border-radius: 15px;
          border: 1px solid #d5e3ea;
          background: rgba(255,255,255,0.92);
          box-shadow: 0 8px 24px rgba(31, 79, 102, 0.045);
        }

        .section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .section-heading-left {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .section-icon {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #267ba1;
          background: #e9f5fa;
        }

        .section-heading h2 {
          margin: 0;
          color: #193e5c;
          font-size: 13px;
          font-weight: 800;
        }

        .section-heading p {
          margin: 2px 0 0;
          color: #8ba0b0;
          font-size: 8px;
        }

        .view-switch {
          display: flex;
          padding: 3px;
          border: 1px solid #d6e4eb;
          border-radius: 9px;
          background: #f8fbfc;
        }

        .view-switch button {
          width: 29px;
          height: 27px;
          border: 0;
          border-radius: 6px;
          color: #7791a2;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .view-switch button.active {
          color: #216f96;
          background: white;
          box-shadow: 0 2px 7px rgba(36, 81, 102, 0.09);
        }

        .filters-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr auto;
          gap: 8px;
        }

        .search-box,
        .select-box {
          height: 36px;
          border: 1px solid #d6e5ec;
          border-radius: 9px;
          background: #fbfdfe;
          display: flex;
          align-items: center;
        }

        .search-box {
          padding: 0 10px;
          gap: 8px;
          color: #8ca3b1;
        }

        .search-box input {
          width: 100%;
          border: 0;
          outline: none;
          background: transparent;
          color: #31556e;
          font-size: 10px;
        }

        .search-box input::placeholder {
          color: #9bb0bc;
        }

        .clear-search {
          width: 20px;
          height: 20px;
          border: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          color: #7893a4;
          background: #edf3f6;
        }

        .select-box {
          position: relative;
          padding: 0 10px;
        }

        .select-box select {
          appearance: none;
          width: 100%;
          height: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #48677d;
          font-size: 9px;
          cursor: pointer;
          padding-right: 16px;
        }

        .select-arrow {
          position: absolute;
          right: 8px;
          color: #829baa;
          pointer-events: none;
        }

        .clear-filter-btn {
          height: 36px;
          padding: 0 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          border: 1px solid #d6e5ec;
          border-radius: 9px;
          background: #f7fafb;
          color: #648196;
          cursor: pointer;
          font-size: 9px;
          font-weight: 700;
        }

        .clear-filter-btn:hover {
          background: white;
          color: #236f94;
        }

        /* REPOSITORY HEADER */

        .repository-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin: 19px 2px 10px;
        }

        .repository-header h2 {
          margin: 0;
          color: #173c5c;
          font-size: 14px;
          font-weight: 850;
        }

        .repository-header span {
          display: block;
          margin-top: 3px;
          color: #879dac;
          font-size: 8px;
        }

        .repository-header span strong {
          color: #357392;
        }

        .repository-summary {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #7893a3;
          font-size: 8px;
        }

        /* GRID */

        .repository-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
        }

        .repository-card {
          min-height: 250px;
          position: relative;
          padding: 16px;
          border: 1px solid #d4e3ea;
          border-radius: 15px;
          background: rgba(255,255,255,0.94);
          box-shadow: 0 7px 22px rgba(26, 71, 95, 0.045);
          overflow: visible;
          transition: 0.22s ease;
        }

        .repository-card::before {
          content: "";
          position: absolute;
          height: 2px;
          top: 0;
          left: 0;
          right: 0;
          border-radius: 15px 15px 0 0;
          background: linear-gradient(90deg, #2185b3, #6974df, #d85e9d);
        }

        .repository-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(25, 72, 99, 0.09);
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .badge-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 5px;
        }

        .item-badge {
          padding: 4px 7px;
          border-radius: 999px;
          font-size: 7px;
          font-weight: 850;
          letter-spacing: 0.35px;
          text-transform: uppercase;
        }

        .item-badge.template { color: #287399; background: #eaf6fb; }
        .item-badge.idea { color: #ae7b17; background: #fff5d8; }
        .item-badge.ready { color: #16866f; background: #e5f7f0; }
        .item-badge.draft { color: #ad7c1c; background: #fff4dc; }

        .more-button {
          width: 27px;
          height: 27px;
          border: 1px solid #d9e6ec;
          border-radius: 8px;
          background: #fbfdfe;
          color: #6e8a9b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .more-button:hover {
          background: white;
          color: #246d91;
        }

        .card-menu {
          position: absolute;
          top: 49px;
          right: 15px;
          z-index: 10;
          width: 145px;
          padding: 5px;
          border: 1px solid #d6e4eb;
          border-radius: 10px;
          background: white;
          box-shadow: 0 15px 30px rgba(25, 66, 89, 0.14);
        }

        .repository-list-item .card-menu {
          top: 58px;
          right: 12px;
        }

        .card-menu button {
          width: 100%;
          height: 31px;
          padding: 0 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 0;
          border-radius: 6px;
          background: transparent;
          color: #4d6d81;
          cursor: pointer;
          text-align: left;
          font-size: 9px;
          font-weight: 650;
        }

        .card-menu button:hover {
          background: #f2f8fa;
          color: #216e94;
        }

        .card-menu button.danger {
          color: #c05656;
        }

        .card-title {
          margin: 17px 0 6px;
          color: #173b5a;
          font-size: 13px;
          font-weight: 850;
          line-height: 1.35;
        }

        .card-description {
          min-height: 38px;
          color: #7892a3;
          font-size: 9px;
          line-height: 1.55;
        }

        .card-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }

        .meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 7px;
          border-radius: 7px;
          color: #58788c;
          background: #f3f8fa;
          border: 1px solid #e3edf1;
          font-size: 7px;
          font-weight: 700;
        }

        .priority-high { color: #bd5b5b; background: #fff0f0; border-color: #f5dada; }
        .priority-medium { color: #b17d1f; background: #fff7e5; border-color: #f5e5bc; }
        .priority-low { color: #43816f; background: #ebf8f3; border-color: #d8eee7; }

        .bank-files{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}
        .bank-file{display:inline-flex;align-items:center;gap:4px;max-width:100%;border:1px solid #d5e7ee;background:#fff;color:#1677a8;border-radius:999px;padding:3px 9px;font-size:10.5px;font-weight:700;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 11px;
        }

        .tag {
          color: #6d8797;
          font-size: 7px;
          font-weight: 700;
        }

        .tag::before {
          content: "#";
          color: #8da7b5;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 15px;
          padding-top: 11px;
          border-top: 1px solid #edf2f4;
        }

        .usage {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #839aa9;
          font-size: 8px;
        }

        .assign-btn {
          height: 30px;
          padding: 0 10px;
          display: flex;
          align-items: center;
          gap: 5px;
          border: 0;
          border-radius: 8px;
          color: white;
          background: linear-gradient(135deg, #174b76, #2386ad);
          cursor: pointer;
          font-size: 8px;
          font-weight: 800;
        }

        .assign-btn:hover {
          box-shadow: 0 6px 14px rgba(22, 85, 118, 0.2);
        }

        /* LIST */

        .repository-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .repository-list-item {
          min-height: 78px;
          padding: 12px 15px;
          display: grid;
          grid-template-columns: 2fr 1.2fr 1fr auto;
          align-items: center;
          gap: 15px;
          position: relative;
          border: 1px solid #d5e3ea;
          border-radius: 13px;
          background: rgba(255,255,255,0.94);
          box-shadow: 0 5px 15px rgba(26, 71, 95, 0.035);
        }

        .repository-list-item::before {
          content: "";
          position: absolute;
          width: 3px;
          left: 0;
          top: 10px;
          bottom: 10px;
          border-radius: 0 5px 5px 0;
          background: linear-gradient(#2587b2, #6f6ddd);
        }

        .list-main {
          min-width: 0;
        }

        .list-title {
          margin-top: 7px;
          color: #1a405e;
          font-size: 11px;
          font-weight: 800;
        }

        .list-description {
          margin-top: 3px;
          color: #839aa9;
          font-size: 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .list-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }

        .list-department {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #5f7c8d;
          font-size: 8px;
          font-weight: 700;
        }

        .list-action {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        /* EMPTY */

        .empty-state {
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border: 1px dashed #cbdde5;
          border-radius: 16px;
          background: rgba(255,255,255,0.7);
        }

        .empty-icon {
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          color: #7ea2b4;
          background: #edf6f9;
        }

        .empty-state h3 {
          margin: 13px 0 4px;
          color: #41667e;
          font-size: 13px;
        }

        .empty-state p {
          margin: 0 0 15px;
          color: #8ba1af;
          font-size: 9px;
        }

        /* MODAL */

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          padding: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(11, 36, 55, 0.38);
          backdrop-filter: blur(7px);
        }

        .modal {
          width: min(650px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 18px;
          border: 1px solid #d4e3ea;
          background: white;
          box-shadow: 0 30px 80px rgba(13, 52, 75, 0.25);
        }

        .modal-header {
          padding: 19px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e7eef2;
          background: linear-gradient(135deg, #f4fcfd, #f7f6fd);
        }

        .modal-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .modal-header-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: linear-gradient(135deg, #174b75, #2586ad);
        }

        .modal-title {
          margin: 0;
          color: #193d5a;
          font-size: 15px;
          font-weight: 850;
        }

        .modal-subtitle {
          margin: 3px 0 0;
          color: #8ca1af;
          font-size: 8px;
        }

        .modal-close {
          width: 31px;
          height: 31px;
          border: 1px solid #dbe7ec;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7892a2;
          background: white;
          cursor: pointer;
        }

        .modal-close:hover {
          color: #b34e59;
          background: #fff5f5;
        }

        .modal-body {
          padding: 20px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .form-group.full {
          grid-column: 1 / -1;
        }

        .form-group label {
          color: #47677c;
          font-size: 9px;
          font-weight: 800;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          border: 1px solid #d6e4eb;
          outline: none;
          border-radius: 9px;
          background: #fbfdfe;
          color: #365a70;
          font-size: 10px;
          font-family: inherit;
          transition: 0.18s ease;
        }

        .form-group input,
        .form-group select {
          height: 38px;
          padding: 0 10px;
        }

        .form-group textarea {
          min-height: 90px;
          resize: vertical;
          padding: 10px;
          line-height: 1.5;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: #7db5ca;
          background: white;
          box-shadow: 0 0 0 3px rgba(45, 142, 176, 0.08);
        }

        .form-help {
          color: #9aadb9;
          font-size: 7px;
        }

        .modal-footer {
          padding: 14px 20px;
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          border-top: 1px solid #e8eff2;
          background: #fbfdfe;
        }

        .cancel-btn {
          height: 37px;
          padding: 0 14px;
          border: 1px solid #d6e4eb;
          border-radius: 9px;
          color: #627f91;
          background: white;
          cursor: pointer;
          font-size: 10px;
          font-weight: 750;
        }

        /* RESPONSIVE */

        @media (max-width: 1200px) {

          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .filters-row {
            grid-template-columns: 1.6fr 1fr 1fr;
          }

          .clear-filter-btn {
            width: 100%;
          }

          .repository-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 850px) {

          .task-bank-page {
            padding: 18px 13px 50px;
          }

          .task-bank-hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-actions {
            width: 100%;
          }

          .hero-actions button {
            flex: 1;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .quick-actions {
            grid-template-columns: 1fr;
          }

          .filters-row {
            grid-template-columns: 1fr 1fr;
          }

          .search-box {
            grid-column: 1 / -1;
          }

          .repository-grid {
            grid-template-columns: 1fr;
          }

          .repository-list-item {
            grid-template-columns: 1fr;
          }

          .list-action {
            justify-content: flex-start;
          }

        }

        @media (max-width: 560px) {

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .filters-row {
            grid-template-columns: 1fr;
          }

          .hero-actions {
            flex-direction: column;
          }

          .hero-actions button {
            width: 100%;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .repository-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

        }

        /* ===== shared theme (matches Dashboard / Users / Tasks) ===== */
        .task-bank-page { background: var(--ts-page-bg); }
        .task-bank-page .orb-one,
        .task-bank-page .orb-two { background: radial-gradient(circle, rgba(22,166,184,.13), transparent 70%); }
        .task-bank-page .task-bank-hero {
          background: var(--ts-hero);
          border: var(--ts-hero-border);
          box-shadow: var(--ts-hero-shadow);
          color: var(--ts-on-hero);
        }
        .task-bank-page .hero-title-row h1 { color: var(--ts-on-hero); }
        .task-bank-page .hero-left p { color: var(--ts-on-hero-muted); }
        .task-bank-page .hero-badge { background: var(--ts-glass); color: #e6fbfd; border-color: var(--ts-glass-border); }
        .task-bank-page .task-bank-hero .hero-icon { background: var(--ts-glass); color: #fff; border: 1px solid var(--ts-glass-border); box-shadow: none; }
        .task-bank-page .task-bank-hero .secondary-btn { background: var(--ts-glass); color: #fff; border-color: var(--ts-glass-border); }
        .task-bank-page .task-bank-hero .secondary-btn:hover { background: rgba(255,255,255,.22); }
        .task-bank-page .task-bank-hero .primary-btn { background: var(--ts-primary); box-shadow: var(--ts-primary-shadow); }
        .task-bank-page .stat-card.purple::before { background: #1677a8; }
        .task-bank-page .stat-card.pink::before { background: #0f6b8f; }
        .task-bank-page .stat-card.purple .stat-icon { color: #1677a8; background: #e8f4fa; }
        .task-bank-page .stat-card.pink .stat-icon { color: #0f6b8f; background: #e6f3f7; }
        .task-bank-page .repository-card::before { background: linear-gradient(90deg, #123f67, #16a6b8, #5fd3dd); }


      `})]})},J=({label:t,value:s,description:i,icon:o,variant:l="blue"})=>e.jsxs("div",{className:`stat-card ${l}`,children:[e.jsxs("div",{className:"stat-top",children:[e.jsx("span",{className:"stat-label",children:t}),e.jsx("div",{className:"stat-icon",children:o})]}),e.jsx("div",{className:"stat-value",children:s}),e.jsx("div",{className:"stat-description",children:i})]}),ce=({icon:t,title:s,description:i,onClick:o,variant:l=""})=>e.jsxs("button",{className:`quick-action ${l}`,onClick:o,children:[e.jsx("div",{className:"quick-icon",children:t}),e.jsxs("div",{className:"quick-content",children:[e.jsx("div",{className:"quick-title",children:s}),e.jsx("div",{className:"quick-description",children:i})]}),e.jsx(zt,{size:14,className:"quick-arrow"})]}),X=({value:t,onChange:s,options:i})=>e.jsxs("div",{className:"select-box",children:[e.jsx("select",{value:t,onChange:o=>s(o.target.value),children:i.map(o=>e.jsx("option",{value:o,children:o},o))}),e.jsx(Tt,{size:13,className:"select-arrow"})]}),Ft=({item:t,menuId:s,setMenuId:i,onAssign:o,onEdit:l,onDelete:h,onDuplicate:f,selected:n=!1,onSelect:c})=>{const g=s===t.id,b=t.type==="Idea"?"idea":"template",p=t.status==="Ready to Assign"?"ready":"draft",k=t.priority==="High"?"high":t.priority==="Medium"?"medium":"low";return e.jsxs("div",{className:"repository-card",style:n?{outline:"2px solid #0e7490",outlineOffset:2}:void 0,children:[e.jsxs("div",{className:"card-top",children:[e.jsxs("div",{className:"badge-group",children:[c&&e.jsx(Oe,{checked:n,onChange:c,label:`Select ${t.title}`}),e.jsx("span",{className:`item-badge ${b}`,children:t.type}),e.jsx("span",{className:`item-badge ${p}`,children:t.status})]}),e.jsx("button",{className:"more-button",onClick:()=>i(g?null:t.id),children:e.jsx(Ue,{size:15})})]}),g&&(l||f||h)&&e.jsxs("div",{className:"card-menu",children:[l&&e.jsxs("button",{onClick:()=>l("edit",t),children:[e.jsx(he,{size:12}),"Edit Item"]}),f&&e.jsxs("button",{onClick:()=>f(t),children:[e.jsx(xe,{size:12}),"Duplicate"]}),h&&e.jsxs("button",{className:"danger",onClick:()=>h(t.id),children:[e.jsx(_e,{size:12}),"Delete"]})]}),e.jsx("h3",{className:"card-title",children:t.title}),e.jsx("p",{className:"card-description",children:t.description}),e.jsxs("div",{className:"card-meta",children:[e.jsxs("span",{className:"meta-pill",children:[e.jsx(He,{size:10}),t.category]}),e.jsxs("span",{className:"meta-pill",children:[e.jsx(K,{size:10}),t.department]}),e.jsxs("span",{className:`meta-pill priority-${k}`,children:[e.jsx(me,{size:10}),t.priority]}),e.jsxs("span",{className:"meta-pill",children:[e.jsx(Ye,{size:10}),t.estimatedTime]})]}),e.jsx("div",{className:"tags",children:(t.tags||[]).map(m=>e.jsx("span",{className:"tag",children:m},m))}),t.attachments?.length>0&&e.jsx("div",{className:"bank-files",children:t.attachments.map(m=>e.jsxs("button",{type:"button",className:"bank-file",onClick:()=>Rt(m),title:`Download ${m.name}`,children:[e.jsx(pe,{size:10})," ",m.name]},m.filename))}),t.lastAssignedTo&&e.jsxs("div",{className:"usage",style:{marginTop:8},title:t.assignments.map(m=>m.userName).join(", "),children:[e.jsx(K,{size:11}),"Assigned to ",t.lastAssignedTo,t.assignedCount>1?` +${t.assignedCount-1} more`:""]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("span",{className:"usage",children:[e.jsx(L,{size:11}),"Used ",t.usageCount||0,"x"]}),o&&e.jsxs("button",{className:"assign-btn",onClick:()=>o(t.id),children:[e.jsx(Z,{size:11}),t.assignedCount>0?"Reassign":"Assign"]})]})]})},Pt=({item:t,menuId:s,setMenuId:i,onAssign:o,onEdit:l,onDelete:h,onDuplicate:f,selected:n=!1,onSelect:c})=>{const g=s===t.id,b=t.type==="Idea"?"idea":"template",p=t.status==="Ready to Assign"?"ready":"draft";return e.jsxs("div",{className:"repository-list-item",style:n?{outline:"2px solid #0e7490",outlineOffset:2}:void 0,children:[e.jsxs("div",{className:"list-main",children:[e.jsxs("div",{className:"badge-group",children:[c&&e.jsx(Oe,{checked:n,onChange:c,label:`Select ${t.title}`}),e.jsx("span",{className:`item-badge ${b}`,children:t.type}),e.jsx("span",{className:`item-badge ${p}`,children:t.status})]}),e.jsx("div",{className:"list-title",children:t.title}),e.jsx("div",{className:"list-description",children:t.description})]}),e.jsxs("div",{className:"list-meta",children:[e.jsxs("span",{className:"meta-pill",children:[e.jsx(He,{size:10}),t.category]}),e.jsxs("span",{className:"meta-pill",children:[e.jsx(me,{size:10}),t.priority]}),e.jsxs("span",{className:"meta-pill",children:[e.jsx(Ye,{size:10}),t.estimatedTime]})]}),e.jsxs("div",{className:"list-department",children:[e.jsx(K,{size:11}),t.department]}),e.jsxs("div",{className:"list-action",children:[e.jsxs("span",{className:"usage",title:t.lastAssignedTo?`Last assigned to ${t.lastAssignedTo}`:void 0,children:[e.jsx(L,{size:11}),t.usageCount||0,"x",t.lastAssignedTo?` · ${t.lastAssignedTo}`:""]}),o&&e.jsxs("button",{className:"assign-btn",onClick:()=>o(t.id),children:[e.jsx(Z,{size:11}),t.assignedCount>0?"Reassign":"Assign"]}),e.jsx("button",{className:"more-button",onClick:()=>i(g?null:t.id),children:e.jsx(Ue,{size:15})}),g&&(l||f||h)&&e.jsxs("div",{className:"card-menu",children:[l&&e.jsxs("button",{onClick:()=>l("edit",t),children:[e.jsx(he,{size:12}),"Edit Item"]}),f&&e.jsxs("button",{onClick:()=>f(t),children:[e.jsx(xe,{size:12}),"Duplicate"]}),h&&e.jsxs("button",{className:"danger",onClick:()=>h(t.id),children:[e.jsx(_e,{size:12}),"Delete"]})]})]})]})},Lt=({form:t,setForm:s})=>{const i=bt.useRef(null),[o,l]=d.useState(""),h=t.keepFiles.length+t.newFiles.length,f=n=>{const c=[],g=[];for(const p of Array.from(n||[])){const k=p.name.split(".").pop().toLowerCase();Pe.includes(k)?p.size>Dt?c.push(`${p.name} is larger than 10 MB`):p.size?t.newFiles.some(m=>m.name===p.name&&m.size===p.size)||g.push(p):c.push(`${p.name} is empty`):c.push(`${p.name} is not a supported file type`)}const b=le-h;g.length>b&&c.push(`At most ${le} files per item`),s(p=>({...p,newFiles:[...p.newFiles,...g.slice(0,Math.max(b,0))]})),l(c.join(". "))};return e.jsxs("div",{className:"file-picker",children:[e.jsxs("div",{className:"file-drop",role:"button",tabIndex:0,onClick:()=>i.current?.click(),onKeyDown:n=>(n.key==="Enter"||n.key===" ")&&i.current?.click(),onDragOver:n=>n.preventDefault(),onDrop:n=>{n.preventDefault(),f(n.dataTransfer.files)},children:[e.jsx(qe,{size:16}),e.jsx("span",{children:"Click to upload or drag & drop"}),e.jsxs("small",{children:["PDF, Word, Excel, PowerPoint, images, CSV, TXT, ZIP · up to 10 MB each · ",le," files"]})]}),e.jsx("input",{ref:i,type:"file",multiple:!0,hidden:!0,accept:Pe.map(n=>`.${n}`).join(","),onChange:n=>{f(n.target.files),n.target.value=""}}),o&&e.jsx("div",{className:"file-problem",children:o}),h>0&&e.jsxs("div",{className:"file-list",children:[t.keepFiles.map(n=>e.jsxs("span",{className:"file-chip",children:[e.jsx(pe,{size:11})," ",n.name," ",e.jsx("em",{children:Le(n.size)}),e.jsx("button",{type:"button","aria-label":`Remove ${n.name}`,onClick:()=>s(c=>({...c,keepFiles:c.keepFiles.filter(g=>g.filename!==n.filename)})),children:e.jsx(O,{size:11})})]},n.filename)),t.newFiles.map((n,c)=>e.jsxs("span",{className:"file-chip new",children:[e.jsx(pe,{size:11})," ",n.name," ",e.jsxs("em",{children:[Le(n.size)," · new"]}),e.jsx("button",{type:"button","aria-label":`Remove ${n.name}`,onClick:()=>s(g=>({...g,newFiles:g.newFiles.filter((b,p)=>p!==c)})),children:e.jsx(O,{size:11})})]},`${n.name}-${c}`))]}),e.jsx("style",{children:`
        .file-drop{display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px;border:1.5px dashed #9fdde1;border-radius:12px;background:#f5fbfc;color:#0b6f7d;font-size:12.5px;font-weight:700;cursor:pointer;text-align:center}
        .file-drop small{font-weight:500;color:#6e8799;font-size:11px}
        .file-drop:focus-visible{outline:3px solid #16a6b8;outline-offset:2px}
        .file-problem{margin-top:6px;font-size:11.5px;color:#b42318}
        .file-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
        .file-chip{display:inline-flex;align-items:center;gap:5px;padding:4px 6px 4px 9px;border-radius:999px;background:#e6f4fa;color:#1677a8;font-size:11.5px;font-weight:700;max-width:100%}
        .file-chip.new{background:#e8f7f0;color:#0f8a5f}
        .file-chip em{font-style:normal;font-weight:500;opacity:.8}
        .file-chip button{display:flex;border:0;background:transparent;color:inherit;cursor:pointer;padding:2px}
      `})]})},Bt=({form:t,setForm:s,onClose:i,onSubmit:o,editing:l,saving:h,mode:f})=>{const n=c=>g=>s(b=>({...b,[c]:g.target.value}));return e.jsx("div",{className:"modal-overlay",onClick:i,children:e.jsxs("div",{className:"modal",onClick:c=>c.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{className:"modal-header-left",children:[e.jsx("div",{className:"modal-header-icon",children:l?e.jsx(he,{size:17}):e.jsx(V,{size:17})}),e.jsxs("div",{children:[e.jsx("h3",{className:"modal-title",children:l?"Edit Repository Item":f==="idea"?"Save New Idea":"New Repository Item"}),e.jsx("p",{className:"modal-subtitle",children:"Saved items can be assigned to any team member later."})]})]}),e.jsx("button",{className:"modal-close",onClick:i,children:e.jsx(O,{size:15})})]}),e.jsxs("form",{onSubmit:o,children:[e.jsx("div",{className:"modal-body",children:e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group full",children:[e.jsx("label",{children:"Title *"}),e.jsx("input",{value:t.title,onChange:n("title"),placeholder:"e.g. Monthly Performance Report"})]}),e.jsxs("div",{className:"form-group full",children:[e.jsx("label",{children:"Description *"}),e.jsx("textarea",{value:t.description,onChange:n("description"),placeholder:"Describe what this task involves..."})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Category"}),e.jsx("input",{value:t.category,onChange:n("category"),placeholder:"e.g. Reporting"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Department"}),e.jsx("input",{value:t.department,onChange:n("department"),placeholder:"e.g. Management"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Type"}),e.jsxs("select",{value:t.type,onChange:n("type"),children:[e.jsx("option",{children:"Template"}),e.jsx("option",{children:"Idea"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Priority"}),e.jsxs("select",{value:t.priority,onChange:n("priority"),children:[e.jsx("option",{children:"High"}),e.jsx("option",{children:"Medium"}),e.jsx("option",{children:"Low"})]})]}),e.jsxs("div",{className:"form-group full",children:[e.jsx("label",{children:"Estimated Time"}),e.jsx("input",{value:t.estimatedTime,onChange:n("estimatedTime"),placeholder:"e.g. 2-3 hours"})]}),e.jsxs("div",{className:"form-group full",children:[e.jsx("label",{children:"Tags"}),e.jsx("input",{value:t.tags,onChange:n("tags"),placeholder:"report, monthly, management"}),e.jsx("span",{className:"form-help",children:"Separate tags with commas."})]}),e.jsxs("div",{className:"form-group full",children:[e.jsx("label",{children:"Attachments"}),e.jsx(Lt,{form:t,setForm:s})]})]})}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"cancel-btn",onClick:i,children:"Cancel"}),e.jsx("button",{type:"submit",className:"primary-btn",disabled:h,children:h?"Saving...":l?"Save Changes":"Create Item"})]})]})]})})},Ot=({mode:t="assign",item:s,form:i,setForm:o,users:l,departments:h,loading:f,saving:n,error:c,onClose:g,onSubmit:b})=>{const p=x=>T=>o(R=>({...R,[x]:T.target.value})),k=[...new Set([s.department,...h].filter(Boolean))],m=t==="reassign",S=s.lastAssignedTo||"",D=l.filter(x=>(!i.department||!x.department||x.department.toLowerCase()===i.department.toLowerCase())&&!(m&&x.name===S));return e.jsx("div",{className:"modal-overlay",onClick:g,children:e.jsxs("div",{className:"modal",onClick:x=>x.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{className:"modal-header-left",children:[e.jsx("div",{className:"modal-header-icon",children:e.jsx(Z,{size:17})}),e.jsxs("div",{children:[e.jsxs("h3",{className:"modal-title",children:[m?"Reassign":"Assign"," “",s.title,"”"]}),e.jsx("p",{className:"modal-subtitle",children:m?e.jsxs(e.Fragment,{children:["Currently assigned to ",e.jsx("strong",{children:S}),". The task moves to the person you pick — both of you get an email."]}):"Creates a task in the selected user’s task list. The template stays in the bank."})]})]}),e.jsx("button",{className:"modal-close",onClick:g,disabled:n,children:e.jsx(O,{size:15})})]}),e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Department"}),e.jsxs("select",{value:i.department,onChange:x=>o(T=>({...T,department:x.target.value,userId:""})),children:[e.jsx("option",{value:"",children:"Any department"}),k.map(x=>e.jsx("option",{value:x,children:x},x))]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:m?"Reassign to *":"Assign to *"}),e.jsxs("select",{value:i.userId,onChange:p("userId"),disabled:f,children:[e.jsx("option",{value:"",children:f?"Loading users...":D.length?"Select a user":"No users in this department"}),D.map(x=>e.jsxs("option",{value:x.id,children:[x.name,x.department?` — ${x.department}`:""]},x.id))]})]}),!m&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Due date"}),e.jsx("input",{type:"date",value:i.dueDate,onChange:p("dueDate")})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Priority"}),e.jsxs("select",{value:i.priority,onChange:p("priority"),children:[e.jsx("option",{children:"High"}),e.jsx("option",{children:"Medium"}),e.jsx("option",{children:"Low"})]})]})]})]}),c&&e.jsx("p",{className:"form-help",style:{color:"#b34444",marginTop:10},children:c})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"cancel-btn",onClick:g,disabled:n,children:"Cancel"}),e.jsx("button",{type:"submit",className:"primary-btn",disabled:n||f,children:n?m?"Reassigning...":"Assigning...":m?"Reassign Task":"Assign Task"})]})]})]})})};export{us as default};
