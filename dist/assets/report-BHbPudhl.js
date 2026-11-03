import{r as s,A as O,j as e,D as re}from"./index-DdKrgUlZ.js";import{u as be,P as je}from"./Pagination-UbNjK2ed.js";import{S as V}from"./search-BYLJVZob.js";import{R as se}from"./refresh-cw-BTp_wSg-.js";import{U as G}from"./users-C5Aqy3aj.js";import{T as M}from"./triangle-alert-470AK52j.js";import{L as X}from"./loader-circle-C6iMG4x7.js";import{a as ve}from"./chevron-right-nPP00h3Y.js";import{X as ye}from"./x-CpRqZeGy.js";import{A as we}from"./award-BSdwi4KU.js";import{C as ae}from"./clock-3-qdGjk7GL.js";import{C as Q}from"./chart-column-CUheTk5P.js";import{F as ke}from"./funnel-BR8BIIkd.js";import{S as Ne}from"./sparkles-DY2Y4YoQ.js";import{C as U}from"./chevron-down-CO4vTuki.js";import{C as ze}from"./clipboard-check-9ka9EUCF.js";import{T as W}from"./trending-up-CfyUXN6q.js";import{C as Z}from"./circle-check-Bb8TVzmm.js";import{A as ie}from"./activity-DSl8M825.js";import{L as Re}from"./layers-Ctd7EbjE.js";import{C as K}from"./circle-dot-hva9TkPp.js";import{F as Te}from"./file-text-DS9sIUc2.js";const ne="http://localhost:5000/api",Ce=()=>localStorage.getItem("token")||localStorage.getItem("authToken")||localStorage.getItem("accessToken")||sessionStorage.getItem("token")||"",oe=()=>{const i=Ce();return i?{Authorization:`Bearer ${i}`}:{}},le=(i={})=>{const d=new URLSearchParams;return Object.entries(i).forEach(([o,u])=>{u&&d.append(o,u)}),d.toString()},Se=async(i={})=>{const d=await fetch(`${ne}/reports/summary?${le(i)}`,{headers:oe()}),o=await d.json().catch(()=>({}));if(!d.ok||o.success===!1)throw d.status===401?new Error("Session expired. Please log in again."):new Error(o.message||"Failed to load report");return o.data},Ee=async(i={})=>{const d=await fetch(`${ne}/reports/export?${le(i)}`,{headers:oe()}),o=await d.text();if(!d.ok){if(d.status===401)throw new Error("Session expired. Please log in again.");let h=`Export failed (${d.status})`;try{const w=JSON.parse(o);w.message&&(h=w.message)}catch{}throw new Error(h)}const u=new Blob([o],{type:"text/csv;charset=utf-8;"}),x=URL.createObjectURL(u),b=document.createElement("a");b.href=x,b.download=`task-report-${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(b),b.click(),b.remove(),setTimeout(()=>URL.revokeObjectURL(x),1e3)},De=["All time","Today","Last 7 days","Last 30 days","This month","Last month","This year"],ee=i=>i==null?"—":`${i}%`,Le=()=>{const[i,d]=s.useState({dateRange:"All time",department:"All Departments",role:"All Roles",userId:""}),[o,u]=s.useState(""),[x,b]=s.useState(null),[h,w]=s.useState(!0),[z,A]=s.useState(""),[S,F]=s.useState([]),[R,B]=s.useState([]),[a,E]=s.useState(null),[D,L]=s.useState(null),k=s.useCallback(async()=>{w(!0),A("");try{const r={...i};r.userId||delete r.userId;const n=await O.get("/api/reports/individual",{params:r});b(n.data.data)}catch(r){A(r.response?.data?.message||"Failed to load individual reports.")}finally{w(!1)}},[i]);s.useEffect(()=>{k()},[k]),s.useEffect(()=>{O.get("/api/departments").then(r=>F((r.data.data||[]).map(n=>n.name))).catch(()=>{}),O.get("/api/custom-roles").then(r=>B(r.data.data||[])).catch(()=>{})},[]);const _=async r=>{E(r),L(null);try{const n={...i,userId:r.userId},j=await O.get("/api/reports/individual",{params:n});L(j.data.data.tasks||[])}catch{L([])}},g=s.useMemo(()=>{const r=o.trim().toLowerCase();return(x?.people||[]).filter(n=>!r||`${n.name} ${n.email} ${n.department} ${n.roleLabel}`.toLowerCase().includes(r))},[x,o]),P=be(g,{id:"individual-reports",resetKey:`${o}|${JSON.stringify(i)}`}),T=()=>{const r=["Name","Email","Department","Role","Assigned","Completed","In progress","Pending","Review","Overdue","Completion %","On-time %","Avg completion (h)","Points"],n=g.map(l=>[l.name,l.email,l.department,l.roleLabel,l.assigned,l.completed,l.inProgress,l.pending,l.review,l.overdue,l.completionRate,l.onTimeRate??"",l.avgCompletionHours??"",l.pointsEarned].map(I=>`"${String(I??"").replace(/"/g,'""')}"`).join(",")),j=URL.createObjectURL(new Blob([[r.join(","),...n].join(`
`)],{type:"text/csv"})),v=document.createElement("a");v.href=j,v.download=`individual-report-${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(v),v.click(),v.remove(),URL.revokeObjectURL(j)},C=r=>n=>d(j=>({...j,[r]:n.target.value})),c=x?.totals;return e.jsxs("div",{className:"individual-reports",children:[e.jsx("section",{className:"configuration-card ir-filters",children:e.jsxs("div",{className:"ir-filter-grid",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Date range"}),e.jsx("select",{value:i.dateRange,onChange:C("dateRange"),children:De.map(r=>e.jsx("option",{children:r},r))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Department"}),e.jsxs("select",{value:i.department,onChange:C("department"),children:[e.jsx("option",{children:"All Departments"}),S.map(r=>e.jsx("option",{children:r},r))]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Role"}),e.jsxs("select",{value:i.role,onChange:C("role"),children:[e.jsx("option",{children:"All Roles"}),e.jsx("option",{value:"Manager",children:"Manager"}),e.jsx("option",{value:"User",children:"Team Member"}),R.map(r=>e.jsx("option",{value:`custom:${r._id}`,children:r.name},r._id))]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Person"}),e.jsxs("select",{value:i.userId,onChange:C("userId"),children:[e.jsx("option",{value:"",children:"Everyone"}),(x?.people||[]).map(r=>e.jsx("option",{value:r.userId,children:r.name},r.userId))]})]}),e.jsxs("label",{className:"ir-search",children:[e.jsx("span",{children:"Search"}),e.jsxs("div",{children:[e.jsx(V,{size:14}),e.jsx("input",{value:o,onChange:r=>u(r.target.value),placeholder:"Name, email, department…"})]})]}),e.jsxs("div",{className:"ir-actions",children:[e.jsx("button",{type:"button",className:"ir-btn",onClick:k,disabled:h,title:"Refresh",children:e.jsx(se,{size:14,className:h?"ir-spin":""})}),e.jsxs("button",{type:"button",className:"ir-btn primary",onClick:T,disabled:!g.length,children:[e.jsx(re,{size:14})," Export CSV"]})]})]})}),c&&e.jsx("section",{className:"ir-kpis",children:[["People",c.people],["Assigned",c.assigned],["Completed",`${c.completed} (${c.completionRate}%)`],["In progress",c.inProgress],["Pending",c.pending],["Overdue",c.overdue]].map(([r,n])=>e.jsxs("div",{className:"ir-kpi",children:[e.jsx("span",{children:r}),e.jsx("strong",{children:n})]},r))}),e.jsxs("section",{className:"table-card ir-table-card",children:[e.jsxs("div",{className:"ir-table-head",children:[e.jsxs("h3",{children:[e.jsx(G,{size:16})," Individual performance"]}),e.jsxs("span",{children:[g.length," ",g.length===1?"person":"people"]})]}),z?e.jsxs("div",{className:"ir-state error",children:[e.jsx(M,{size:16})," ",z]}):h&&!x?e.jsxs("div",{className:"ir-state",children:[e.jsx(X,{size:16,className:"ir-spin"})," Loading…"]}):g.length?e.jsxs("div",{className:"ir-table-wrap",children:[e.jsxs("table",{className:"ir-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Person"}),e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Assigned"}),e.jsx("th",{children:"Completed"}),e.jsx("th",{children:"In progress"}),e.jsx("th",{children:"Pending"}),e.jsx("th",{children:"Overdue"}),e.jsx("th",{children:"Completion"}),e.jsx("th",{children:"On time"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:P.items.map(r=>e.jsxs("tr",{onClick:()=>_(r),children:[e.jsxs("td",{children:[e.jsx("strong",{children:r.name}),e.jsx("small",{children:r.department||"No department"})]}),e.jsx("td",{children:r.roleLabel}),e.jsx("td",{children:r.assigned}),e.jsx("td",{className:"good",children:r.completed}),e.jsx("td",{children:r.inProgress}),e.jsx("td",{children:r.pending}),e.jsx("td",{className:r.overdue?"bad":"",children:r.overdue}),e.jsxs("td",{children:[e.jsx("div",{className:"ir-bar",children:e.jsx("span",{style:{width:`${r.completionRate}%`}})}),e.jsxs("small",{children:[r.completionRate,"%"]})]}),e.jsx("td",{children:ee(r.onTimeRate)}),e.jsx("td",{children:e.jsx(ve,{size:14})})]},r.userId))})]}),e.jsx(je,{...P,label:"people"})]}):e.jsx("div",{className:"ir-state",children:"No people match these filters."})]}),a&&e.jsx("div",{className:"ir-overlay",onMouseDown:r=>r.target===r.currentTarget&&E(null),children:e.jsxs("aside",{className:"ir-drawer",role:"dialog","aria-label":`Report for ${a.name}`,children:[e.jsxs("div",{className:"ir-drawer-head",children:[e.jsxs("div",{children:[e.jsx("h3",{children:a.name}),e.jsx("p",{children:[a.roleLabel,a.department,a.email].filter(Boolean).join(" · ")})]}),e.jsx("button",{type:"button",className:"ir-btn",onClick:()=>E(null),"aria-label":"Close",children:e.jsx(ye,{size:15})})]}),e.jsx("div",{className:"ir-kpis small",children:[["Assigned",a.assigned],["Completed",a.completed],["In progress",a.inProgress],["Pending",a.pending],["Review",a.review],["Overdue",a.overdue]].map(([r,n])=>e.jsxs("div",{className:"ir-kpi",children:[e.jsx("span",{children:r}),e.jsx("strong",{children:n})]},r))}),e.jsxs("div",{className:"ir-facts",children:[e.jsxs("span",{children:[e.jsx(we,{size:14})," ",a.pointsEarned," points earned"]}),e.jsxs("span",{children:[e.jsx(ae,{size:14})," ",a.avgCompletionHours!==null?`${a.avgCompletionHours} h average to complete`:"No completed tasks yet"]}),e.jsxs("span",{children:["On-time completion: ",e.jsx("strong",{children:ee(a.onTimeRate)})]})]}),e.jsx("h4",{children:"Tasks in this period"}),D?D.length?e.jsx("div",{className:"ir-task-list",children:D.map(r=>e.jsxs("div",{className:"ir-task",children:[e.jsx("span",{className:`ir-status s-${String(r.status).replace(/\s/g,"").toLowerCase()}`,children:r.status}),e.jsx("span",{className:"ir-task-name",children:r.name}),e.jsx("small",{children:r.dueDate?`Due ${new Date(r.dueDate).toLocaleDateString()}`:"No due date"})]},r._id))}):e.jsx("div",{className:"ir-state",children:"No tasks in this period."}):e.jsxs("div",{className:"ir-state",children:[e.jsx(X,{size:14,className:"ir-spin"})," Loading tasks…"]})]})}),e.jsx("style",{children:`
        .individual-reports { display: flex; flex-direction: column; gap: 16px; }
        /* .configuration-card (report.jsx) has no padding and clips overflow — give the filters their own */
        .ir-filters { padding: 16px 18px 18px; margin-bottom: 0; }
        .ir-filter-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)) minmax(0, 1.3fr) auto; gap: 12px; align-items: end; }
        .ir-filter-grid > * { min-width: 0; }
        .ir-filter-grid select { width: 100%; min-width: 0; }
        .ir-filter-grid label { display: flex; flex-direction: column; gap: 6px; font-size: 11px; font-weight: 700; color: #4f6f7a; text-transform: uppercase; letter-spacing: .4px; }
        .ir-filter-grid select, .ir-search > div { height: 40px; border: 1px solid #d6e8ec; border-radius: 11px; background: #fff; padding: 0 10px; font-size: 13px; color: #082f3a; font-weight: 500; text-transform: none; letter-spacing: 0; }
        .ir-search > div { display: flex; align-items: center; gap: 6px; color: #7b969e; }
        .ir-search input { border: none; outline: none; flex: 1; min-width: 0; font-size: 13px; background: transparent; color: #082f3a; }
        .ir-actions { display: flex; gap: 8px; justify-content: flex-end; }
        .ir-btn { display: inline-flex; align-items: center; gap: 6px; height: 40px; padding: 0 12px; border-radius: 11px; border: 1px solid #d6e8ec; background: #fff; color: #0e7490; font-weight: 700; font-size: 13px; cursor: pointer; }
        .ir-btn.primary { background: linear-gradient(135deg, #123b5d, #16a6b8); color: #fff; border: none; }
        .ir-btn:disabled { opacity: .55; cursor: not-allowed; }
        .ir-kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
        .ir-kpi { background: rgba(255,255,255,.92); border: 1px solid #d6e8ec; border-radius: 15px; padding: 14px 16px; display: flex; flex-direction: column; gap: 4px; box-shadow: 0 8px 28px rgba(23,50,77,.045); }
        .ir-kpi span { font-size: 11px; font-weight: 700; color: #7b969e; text-transform: uppercase; letter-spacing: .5px; }
        .ir-kpi strong { font-size: 22px; color: #082f3a; }
        .ir-kpis.small .ir-kpi { padding: 10px 12px; }
        .ir-kpis.small .ir-kpi strong { font-size: 18px; }
        .ir-table-head { display: flex; justify-content: space-between; align-items: center; padding: 16px 18px; border-bottom: 1px solid #e6f0f2; }
        .ir-table-head h3 { margin: 0; display: flex; align-items: center; gap: 8px; font-size: 15px; color: #082f3a; }
        .ir-table-head span { font-size: 12px; color: #7b969e; }
        .ir-table-wrap { overflow-x: auto; }
        .ir-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .ir-table th { text-align: left; padding: 11px 14px; font-size: 11px; color: #608894; text-transform: uppercase; letter-spacing: .5px; background: #f6fbfc; }
        .ir-table td { padding: 11px 14px; border-top: 1px solid #eef5f6; color: #123b5d; vertical-align: middle; }
        .ir-table tbody tr { cursor: pointer; transition: .15s; }
        .ir-table tbody tr:hover { background: #f4fbfc; }
        .ir-table td small { display: block; color: #7b969e; font-size: 11px; margin-top: 2px; }
        .ir-table td.good { color: #17724a; font-weight: 700; }
        .ir-table td.bad { color: #a83c55; font-weight: 700; }
        .ir-bar { width: 90px; height: 6px; border-radius: 99px; background: #e6f0f2; overflow: hidden; }
        .ir-bar span { display: block; height: 100%; background: linear-gradient(90deg, #16a6b8, #0ea5a0); }
        .ir-state { display: flex; align-items: center; gap: 8px; padding: 22px 18px; color: #6e8799; font-size: 13px; }
        .ir-state.error { color: #a83c55; }
        .ir-spin { animation: irSpin 1s linear infinite; }
        @keyframes irSpin { to { transform: rotate(360deg); } }
        .ir-overlay { position: fixed; inset: 0; z-index: 1200; background: rgba(6,59,70,.35); display: flex; justify-content: flex-end; }
        .ir-drawer { width: min(460px, 100%); height: 100%; overflow-y: auto; background: #fff; padding: 20px; display: flex; flex-direction: column; gap: 14px; box-shadow: -20px 0 50px rgba(6,59,70,.2); }
        .ir-drawer-head { display: flex; justify-content: space-between; gap: 10px; }
        .ir-drawer-head h3 { margin: 0; color: #082f3a; }
        .ir-drawer-head p { margin: 4px 0 0; font-size: 12px; color: #6e8799; }
        .ir-drawer h4 { margin: 4px 0 0; font-size: 13px; color: #082f3a; }
        .ir-facts { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: #123b5d; background: #f4fbfc; border: 1px solid #e3eef2; border-radius: 12px; padding: 12px; }
        .ir-facts span { display: flex; align-items: center; gap: 7px; }
        .ir-task-list { display: flex; flex-direction: column; gap: 6px; }
        .ir-task { display: grid; grid-template-columns: auto 1fr; gap: 2px 8px; align-items: center; border: 1px solid #e3eef2; border-radius: 11px; padding: 8px 10px; font-size: 13px; }
        .ir-task small { grid-column: 2; color: #7b969e; font-size: 11px; }
        .ir-task-name { color: #123b5d; font-weight: 600; }
        .ir-status { font-size: 10px; font-weight: 800; border-radius: 999px; padding: 3px 8px; background: #eef7fa; color: #2f6f91; }
        .ir-status.s-completed { background: #eaf8f1; color: #17724a; }
        .ir-status.s-inprogress { background: #fff7e6; color: #b7791f; }
        .ir-status.s-review { background: #f1eefc; color: #6b4fc8; }
        .ir-btn.primary { white-space: nowrap; }
        @media (max-width: 1200px) {
          .ir-filter-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .ir-search { grid-column: span 2; }
        }
        @media (max-width: 720px) {
          .ir-filters { padding: 14px; }
          .ir-filter-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .ir-search, .ir-actions { grid-column: 1 / -1; }
          .ir-actions .ir-btn.primary { flex: 1; justify-content: center; }
        }
        @media (max-width: 460px) {
          .ir-filter-grid { grid-template-columns: 1fr; }
        }
      `})]})},te={total:0,completed:0,early:0,onTime:0,late:0,review:0,progress:0,pending:0,overdue:0},Ie={Critical:{icon:M,className:"priority-critical"},High:{icon:ie,className:"priority-high"},Medium:{icon:K,className:"priority-medium"},Low:{icon:K,className:"priority-low"}},Ae={icon:K,className:"priority-low"},Pe={Critical:"#dc5555",High:"#e24b4b",Medium:"#0ea5a0",Low:"#6fd3ca"},$e=[{label:"Early Completion",className:"legend-early"},{label:"On-time Completion",className:"legend-on-time"},{label:"Late Completion",className:"legend-late"},{label:"Review",className:"legend-review"},{label:"In Progress",className:"legend-progress"},{label:"Pending",className:"legend-pending"},{label:"Overdue",className:"legend-overdue"}],Oe=["Department","Total Tasks","Completed","Early Completion","On-time Completion","Late Completion","Review","In Progress","Pending","Overdue"],nt=()=>{const[i,d]=s.useState("Task Summary"),[o,u]=s.useState("overview"),[x,b]=s.useState("All time"),[h,w]=s.useState("All Departments"),[z,A]=s.useState("All Reference IDs"),[S,F]=s.useState(""),[R,B]=s.useState(""),[a,E]=s.useState([]),[D,L]=s.useState([]),[k,_]=s.useState([]),[g,P]=s.useState(te),[T,C]=s.useState({completionRate:0,activeTasks:0,pendingTasks:0,overdueTasks:0}),[c,r]=s.useState(!0),[n,j]=s.useState(null),[v,l]=s.useState(!1),[I,q]=s.useState(!1);s.useEffect(()=>{const t=setTimeout(()=>B(S),400);return()=>clearTimeout(t)},[S]);const H=s.useMemo(()=>({reportType:i,dateRange:x,department:h,referenceId:z,search:R}),[i,x,h,z,R]),Y=s.useCallback(async()=>{r(!0),j(null);try{const t=await Se(H),p=t.departments||[];E(p),_(t.priorities||[]),P({...te,...t.totals||{}}),C({completionRate:t.completionRate??0,activeTasks:t.activeTasks??0,pendingTasks:t.pendingTasks??0,overdueTasks:t.overdueTasks??0}),h==="All Departments"&&!R.trim()&&L(p.map(m=>m.name))}catch(t){j(t.message)}finally{r(!1)}},[H,h,R]);s.useEffect(()=>{Y()},[Y]);const de=T.completionRate,ce=T.activeTasks,pe=T.pendingTasks,xe=T.overdueTasks,y=s.useMemo(()=>{const t=a.reduce((p,m)=>Math.max(p,m.total||0),0);return Math.max(10,Math.ceil(t/10)*10)},[a]),he=[1,.8,.6,.4,.2,0].map(t=>Math.round(y*t)),ge=s.useMemo(()=>{let t=0;const p=(k||[]).map(m=>{const $=Pe[m.name]||"#cbd5d5",N=t;return t+=(m.value||0)/100*360,`${$} ${N}deg ${t}deg`});return t>0?`conic-gradient(${p.join(", ")})`:"conic-gradient(#e5efef 0deg 360deg)"},[k]),J=async()=>{l(!0),await Y(),l(!1)},me=t=>{const p=String(t??"");return/[",\n]/.test(p)?`"${p.replace(/"/g,'""')}"`:p},fe=()=>{const t=a.map(f=>[f.name,f.total,f.completed,f.early,f.onTime,f.late,f.review,f.progress,f.pending,f.overdue].map(me).join(",")),p=[Oe.join(","),...t].join(`
`),m=new Blob(["\uFEFF"+p],{type:"text/csv;charset=utf-8;"}),$=URL.createObjectURL(m),N=document.createElement("a");N.href=$,N.download=`task-report-${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(N),N.click(),N.remove(),setTimeout(()=>URL.revokeObjectURL($),1e3)},ue=async()=>{if(!(I||a.length===0)){q(!0);try{await Ee(H)}catch(t){console.warn("Backend export failed, using local export:",t.message),fe()}finally{q(!1)}}};return e.jsxs("div",{className:"report-page",children:[e.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .report-page {
          min-height: 100vh;
          width: 100%;
          padding: 20px;
          background:
            radial-gradient(circle at 0% 0%, rgba(20, 184, 166, 0.13), transparent 28%),
            radial-gradient(circle at 100% 12%, rgba(14, 165, 233, 0.11), transparent 30%),
            linear-gradient(180deg, #f4fbfc 0%, #eef8f8 48%, #f8fcfc 100%);
          color: #082f3a;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .report-shell {
          width: 100%;
          max-width: 1650px;
          margin: 0 auto;
        }

        /* ================= HEADER ================= */

        .report-view-tabs {
          display: inline-flex;
          gap: 4px;
          padding: 4px;
          margin: 0 0 16px;
          border-radius: 14px;
          background: rgba(255,255,255,.9);
          border: 1px solid #d6e8ec;
        }

        .report-view-tabs button {
          border: none;
          background: transparent;
          border-radius: 10px;
          padding: 9px 16px;
          font-size: 13px;
          font-weight: 700;
          color: #4f6f7a;
          cursor: pointer;
          transition: .2s ease;
        }

        .report-view-tabs button.active {
          background: linear-gradient(135deg, #123b5d, #16a6b8);
          color: #fff;
          box-shadow: 0 8px 18px rgba(18,59,93,.18);
        }

        .report-hero {
          position: relative;
          overflow: hidden;
          min-height: 170px;
          padding: 28px;
          margin-bottom: 18px;
          border-radius: 26px;
          color: white;
          background: linear-gradient(135deg, #04343d 0%, #075c66 38%, #078c84 70%, #10a99a 100%);
          box-shadow: 0 20px 45px rgba(4, 73, 82, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.14);
        }

        .report-hero::before {
          content: "";
          position: absolute;
          width: 330px;
          height: 330px;
          border-radius: 50%;
          right: -120px;
          top: -210px;
          background: rgba(255, 255, 255, 0.075);
        }

        .report-hero::after {
          content: "";
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          left: 43%;
          bottom: -200px;
          background: rgba(255, 255, 255, 0.055);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .hero-left {
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .hero-icon {
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 19px;
          background: rgba(255, 255, 255, 0.13);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
        }

        .hero-title {
          margin: 0;
          font-size: 29px;
          line-height: 1.1;
          font-weight: 850;
          letter-spacing: -0.8px;
        }

        .hero-subtitle {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 13px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .hero-button {
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 15px;
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 12px;
          color: white;
          background: rgba(255,255,255,.1);
          backdrop-filter: blur(10px);
          cursor: pointer;
          font-size: 12px;
          font-weight: 750;
          transition: .2s ease;
        }

        .hero-button:hover {
          background: rgba(255,255,255,.17);
          transform: translateY(-1px);
        }

        .hero-button.primary {
          color: #08487c;
          background: white;
          border-color: white;
        }

        .hero-button:disabled {
          opacity: .6;
          cursor: not-allowed;
          transform: none;
        }

        /* ================= FILTER ================= */

        .configuration-card {
          position: relative;
          overflow: hidden;
          margin-bottom: 18px;
          border: 1px solid #d5e7e9;
          border-radius: 21px;
          background: rgba(255,255,255,.94);
          box-shadow: 0 9px 30px rgba(5, 71, 81, .055);
        }

        .configuration-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 19px 20px 16px;
          border-bottom: 1px solid #e4eef0;
        }

        .configuration-title {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0;
          font-size: 17px;
          font-weight: 800;
          color: #092f3a;
        }

        .configuration-title svg {
          color: #0a2d6f;
        }

        .configuration-subtitle {
          margin: 4px 0 0;
          color: #12266b;
          font-size: 11px;
        }

        .configuration-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 10px;
          border-radius: 999px;
          color: #073b84;
          background: #e9f9f6;
          font-size: 10px;
          font-weight: 800;
        }

        .configuration-badge.loading {
          color: #b45309;
          background: #fef3c7;
        }

        .filter-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1.15fr;
          gap: 12px;
          padding: 17px 20px 20px;
        }

        .filter-field label {
          display: block;
          margin: 0 0 7px 2px;
          color: #54717a;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .7px;
        }

        .select-wrap {
          position: relative;
        }

        .filter-select {
          width: 100%;
          height: 43px;
          padding: 0 37px 0 13px;
          appearance: none;
          outline: none;
          border: 1px solid #d9e7ea;
          border-radius: 11px;
          background: #f8fbfc;
          color: #183d47;
          font-size: 12px;
          font-weight: 650;
          cursor: pointer;
          transition: .2s ease;
        }

        .filter-select:hover {
          border-color: #103879;
          background: #ffffff;
        }

        .filter-select:focus {
          border-color: #0c1ea3;
          box-shadow: 0 0 0 4px rgba(12,163,151,.09);
          background: white;
        }

        .select-chevron {
          position: absolute;
          right: 12px;
          top: 50%;
          pointer-events: none;
          transform: translateY(-50%);
          color: #77929a;
        }

        .search-field {
          position: relative;
        }

        .search-field svg {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #78949c;
        }

        .search-input {
          width: 100%;
          height: 43px;
          padding: 0 13px 0 38px;
          border: 1px solid #d9e7ea;
          outline: none;
          border-radius: 11px;
          background: #f8fbfc;
          color: #173c46;
          font-size: 12px;
        }

        .search-input:focus {
          border-color: #0ca397;
          box-shadow: 0 0 0 4px rgba(12,163,151,.09);
          background: white;
        }

        /* ================= KPI ================= */

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 13px;
          margin-bottom: 18px;
        }

        .kpi-card {
          position: relative;
          overflow: hidden;
          min-height: 116px;
          padding: 17px;
          border: 1px solid #d7e7e9;
          border-radius: 18px;
          background: rgba(255,255,255,.96);
          box-shadow: 0 8px 24px rgba(7, 69, 78, .055);
        }

        .kpi-card::after {
          content: "";
          position: absolute;
          width: 110px;
          height: 110px;
          right: -55px;
          bottom: -60px;
          border-radius: 50%;
          background: rgba(8, 163, 148, .07);
        }

        .kpi-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .kpi-label {
          color: #708c95;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        .kpi-icon {
          width: 37px;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          color: #078e83;
          background: #e8f8f5;
        }

        .kpi-value {
          margin-top: 8px;
          color: #082f3a;
          font-size: 26px;
          line-height: 1;
          font-weight: 850;
        }

        .kpi-foot {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 9px;
          color: #739099;
          font-size: 10px;
        }

        .kpi-foot strong {
          color: #078c81;
        }

        /* ================= REPORT GRID ================= */

        .report-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(320px, .85fr);
          gap: 18px;
          margin-bottom: 18px;
        }

        .chart-card {
          min-width: 0;
          border: 1px solid #d6e6e9;
          border-radius: 21px;
          background: rgba(255,255,255,.96);
          box-shadow: 0 9px 30px rgba(5, 71, 81, .055);
          overflow: hidden;
        }

        .chart-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
          padding: 20px 20px 12px;
        }

        .chart-heading {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .chart-heading-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          color: #078e83;
          background: #e8f8f5;
        }

        .chart-title {
          margin: 0;
          font-size: 16px;
          font-weight: 800;
          color: #0a303a;
        }

        .chart-description {
          margin: 4px 0 0;
          color: #78929b;
          font-size: 11px;
        }

        .chart-total {
          text-align: right;
        }

        .chart-total-number {
          color: #087f76;
          font-size: 22px;
          line-height: 1;
          font-weight: 850;
        }

        .chart-total-label {
          margin-top: 4px;
          color: #839ba2;
          font-size: 9px;
          text-transform: uppercase;
          font-weight: 800;
        }

        /* ================= BAR CHART ================= */

        .bar-chart {
          height: 330px;
          display: flex;
          gap: 15px;
          padding: 15px 20px 8px;
        }

        .y-axis {
          width: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 8px 0 33px;
        }

        .y-axis span {
          color: #91a8ae;
          font-size: 9px;
          text-align: right;
        }

        .bars-area {
          position: relative;
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          gap: 10px;
          padding: 10px 0 32px;
          border-bottom: 1px solid #dce9eb;
          background:
            repeating-linear-gradient(
              to top,
              transparent 0,
              transparent 58px,
              #edf4f5 59px,
              #edf4f5 60px
            );
        }

        .department-column {
          height: 100%;
          min-width: 60px;
          max-width: 130px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
        }

        .bar-stack {
          width: min(66px, 75%);
          height: 245px;
          display: flex;
          flex-direction: column-reverse;
          border-radius: 9px 9px 3px 3px;
          overflow: hidden;
          background: #edf5f6;
          box-shadow: inset 0 0 0 1px rgba(5,91,98,.04);
        }

        .bar {
          width: 100%;
          min-height: 2px;
          transition: .25s ease;
        }

        .bar:hover {
          filter: brightness(.95);
        }

        .bar-early { background: #11b981; }
        .bar-on-time { background: #0ea5c9; }
        .bar-late { background: #e24b4b; }
        .bar-review { background: #f97316; }
        .bar-progress { background: #4f8df7; }
        .bar-pending { background: #f4b51c; }
        .bar-overdue { background: #ef6262; }

        .department-label {
          position: absolute;
          bottom: 7px;
          width: 100px;
          color: #607d87;
          font-size: 9px;
          font-weight: 750;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .legend {
          display: flex;
          flex-wrap: wrap;
          gap: 9px 15px;
          padding: 11px 20px 18px;
          border-top: 1px solid #edf3f4;
        }

        .legend-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #667f88;
          font-size: 9px;
          font-weight: 700;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .legend-early .legend-dot { background: #11b981; }
        .legend-on-time .legend-dot { background: #0ea5c9; }
        .legend-late .legend-dot { background: #e24b4b; }
        .legend-review .legend-dot { background: #f97316; }
        .legend-progress .legend-dot { background: #4f8df7; }
        .legend-pending .legend-dot { background: #f4b51c; }
        .legend-overdue .legend-dot { background: #ef6262; }

        /* ================= PRIORITY ================= */

        .priority-body {
          padding: 13px 20px 20px;
        }

        .donut-area {
          min-height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .donut {
          width: 190px;
          height: 190px;
          position: relative;
          border-radius: 50%;
          box-shadow: 0 12px 35px rgba(7, 128, 119, .13), inset 0 0 0 1px rgba(255,255,255,.35);
        }

        .donut::after {
          content: "";
          position: absolute;
          inset: 34px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 0 0 1px #edf3f4;
        }

        .donut-center {
          position: absolute;
          z-index: 2;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .donut-center strong {
          color: #0a333d;
          font-size: 28px;
          line-height: 1;
          font-weight: 850;
        }

        .donut-center span {
          margin-top: 5px;
          color: #7c969e;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        .priority-list {
          display: grid;
          gap: 9px;
        }

        .priority-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 11px;
          border: 1px solid #e1ecee;
          border-radius: 12px;
          background: #fbfdfd;
        }

        .priority-left {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .priority-icon {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
        }

        .priority-critical .priority-icon { color: #b91c1c; background: #fee2e2; }
        .priority-high .priority-icon { color: #d94b4b; background: #fff0f0; }
        .priority-medium .priority-icon { color: #087f76; background: #e7f8f5; }
        .priority-low .priority-icon { color: #4d9b94; background: #edf8f7; }

        .priority-name {
          color: #294c56;
          font-size: 11px;
          font-weight: 750;
        }

        .priority-value {
          color: #0a3741;
          font-size: 13px;
          font-weight: 850;
        }

        /* ================= TABLE ================= */

        .table-card {
          border: 1px solid #d5e6e9;
          border-radius: 21px;
          overflow: hidden;
          background: rgba(255,255,255,.96);
          box-shadow: 0 9px 30px rgba(5, 71, 81, .055);
        }

        .table-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 19px 20px;
          border-bottom: 1px solid #e4edef;
        }

        .table-title-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .table-title-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          color: #078e83;
          background: #e8f8f5;
        }

        .table-title {
          margin: 0;
          color: #092f3a;
          font-size: 17px;
          font-weight: 800;
        }

        .table-subtitle {
          margin: 4px 0 0;
          color: #78939c;
          font-size: 10px;
        }

        .table-wrap {
          width: 100%;
          overflow-x: auto;
        }

        .summary-table {
          width: 100%;
          min-width: 1050px;
          border-collapse: collapse;
        }

        .summary-table th {
          padding: 13px 14px;
          color: #6e8992;
          background: #f6fafb;
          border-bottom: 1px solid #e1ecee;
          font-size: 9px;
          font-weight: 850;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: .4px;
          white-space: nowrap;
        }

        .summary-table th:first-child {
          text-align: left;
          padding-left: 20px;
        }

        .summary-table td {
          padding: 14px;
          color: #45636d;
          border-bottom: 1px solid #edf3f4;
          font-size: 10px;
          font-weight: 650;
          text-align: center;
          white-space: nowrap;
        }

        .summary-table td:first-child {
          text-align: left;
          padding-left: 20px;
        }

        .summary-table tbody tr:hover {
          background: #f8fcfc;
        }

        .department-cell {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #173e48;
          font-weight: 800;
        }

        .department-avatar {
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          color: #083a7f;
          background: #e7f8f5;
        }

        .number-cell { color: #234853 !important; font-weight: 800 !important; }
        .success-cell { color: #07246c !important; }
        .danger-cell { color: #dc5555 !important; }
        .warning-cell { color: #c89012 !important; }
        .progress-cell { color: #4885e7 !important; }

        .table-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 13px 20px;
          background: #fbfdfd;
          color: #7b969e;
          font-size: 10px;
        }

        .footer-total {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .footer-total strong {
          color: #04266e;
        }

        /* ================= EMPTY ================= */

        .empty-state {
          padding: 65px 20px;
          text-align: center;
          color: #78939b;
        }

        .empty-icon {
          width: 54px;
          height: 54px;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          color: #142c57;
          background: #e9f8f6;
        }

        .empty-state strong {
          display: block;
          color: #244a54;
          font-size: 14px;
        }

        .empty-state span {
          display: block;
          margin-top: 5px;
          font-size: 11px;
        }

        .empty-state button {
          margin-top: 14px;
          padding: 9px 18px;
          border: none;
          border-radius: 10px;
          color: white;
          background: #122e92;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1250px) {
          .filter-grid { grid-template-columns: repeat(3, 1fr); }
          .search-field { grid-column: span 3; }
          .report-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 900px) {
          .kpi-grid { grid-template-columns: repeat(2, 1fr); }
          .filter-grid { grid-template-columns: repeat(2, 1fr); }
          .search-field { grid-column: span 2; }
          .hero-content { align-items: flex-start; flex-direction: column; }
          .hero-actions { width: 100%; }
        }

        @media (max-width: 620px) {
          .report-page { padding: 10px; }
          .report-hero { padding: 21px; border-radius: 20px; }
          .hero-title { font-size: 23px; }
          .hero-actions { flex-direction: column; }
          .hero-button { width: 100%; }
          .filter-grid { grid-template-columns: 1fr; }
          .search-field { grid-column: span 1; }
          .kpi-grid { grid-template-columns: 1fr; }
          .chart-header, .table-header { align-items: flex-start; flex-direction: column; }
          .chart-total { text-align: left; }
          .bar-chart { height: 290px; padding-left: 10px; padding-right: 10px; }
          .bar-stack { width: 42px; }
          .department-label { width: 75px; font-size: 8px; }
          .legend { gap: 8px 12px; }
          .configuration-top { align-items: flex-start; flex-direction: column; }
        }

        /* ===== shared theme (matches Dashboard / Users / Tasks) ===== */
        .report-page .kpi-icon { color: var(--ts-blue); background: #e8f4fa; }
        .report-page .report-hero {
          background: var(--ts-hero);
          border: var(--ts-hero-border);
          box-shadow: var(--ts-hero-shadow);
          color: var(--ts-on-hero);
        }

      `}),e.jsxs("div",{className:"report-shell",children:[e.jsx("section",{className:"report-hero",children:e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"hero-left",children:[e.jsx("div",{className:"hero-icon",children:e.jsx(Q,{size:30})}),e.jsxs("div",{children:[e.jsx("h1",{className:"hero-title",children:"Reports & Analytics"}),e.jsx("p",{className:"hero-subtitle",children:"Analyze task performance, completion trends and department activity from one ocean-inspired workspace."})]})]}),e.jsxs("div",{className:"hero-actions",children:[e.jsxs("button",{type:"button",className:"hero-button",onClick:J,disabled:v||c,children:[e.jsx(se,{size:15,className:v?"spin-icon":""}),v?"Refreshing...":"Refresh"]}),e.jsxs("button",{type:"button",className:"hero-button primary",onClick:ue,disabled:c||I||a.length===0,children:[e.jsx(re,{size:15}),I?"Exporting...":"Export Report"]})]})]})}),e.jsxs("div",{className:"report-view-tabs",role:"tablist",children:[e.jsx("button",{type:"button",role:"tab","aria-selected":o==="overview",className:o==="overview"?"active":"",onClick:()=>u("overview"),children:"Organization report"}),e.jsx("button",{type:"button",role:"tab","aria-selected":o==="individual",className:o==="individual"?"active":"",onClick:()=>u("individual"),children:"Individual reports"})]}),o==="individual"&&e.jsx(Le,{}),o==="overview"&&e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"configuration-card",children:[e.jsxs("div",{className:"configuration-top",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"configuration-title",children:[e.jsx(ke,{size:18}),"Report Configuration"]}),e.jsx("p",{className:"configuration-subtitle",children:"Adjust the filters below to change the report view."})]}),e.jsxs("div",{className:`configuration-badge ${c?"loading":""}`,children:[e.jsx(Ne,{size:13}),c?"Loading...":n?"Error":"Live Report"]})]}),e.jsxs("div",{className:"filter-grid",children:[e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{children:"Report Type"}),e.jsxs("div",{className:"select-wrap",children:[e.jsxs("select",{className:"filter-select",value:i,onChange:t=>d(t.target.value),children:[e.jsx("option",{children:"Task Summary"}),e.jsx("option",{children:"Completion Report"}),e.jsx("option",{children:"Department Report"}),e.jsx("option",{children:"Performance Report"})]}),e.jsx(U,{size:15,className:"select-chevron"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{children:"Date Range"}),e.jsxs("div",{className:"select-wrap",children:[e.jsxs("select",{className:"filter-select",value:x,onChange:t=>b(t.target.value),children:[e.jsx("option",{children:"All time"}),e.jsx("option",{children:"Today"}),e.jsx("option",{children:"This week"}),e.jsx("option",{children:"This month"}),e.jsx("option",{children:"This quarter"}),e.jsx("option",{children:"This year"})]}),e.jsx(U,{size:15,className:"select-chevron"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{children:"Department"}),e.jsxs("div",{className:"select-wrap",children:[e.jsxs("select",{className:"filter-select",value:h,onChange:t=>w(t.target.value),children:[e.jsx("option",{children:"All Departments"}),D.map(t=>e.jsx("option",{children:t},t))]}),e.jsx(U,{size:15,className:"select-chevron"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{children:"Reference ID"}),e.jsxs("div",{className:"select-wrap",children:[e.jsxs("select",{className:"filter-select",value:z,onChange:t=>A(t.target.value),children:[e.jsx("option",{children:"All Reference IDs"}),e.jsx("option",{children:"REF-001"}),e.jsx("option",{children:"REF-002"}),e.jsx("option",{children:"REF-003"}),e.jsx("option",{children:"REF-004"})]}),e.jsx(U,{size:15,className:"select-chevron"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{children:"Search Department"}),e.jsxs("div",{className:"search-field",children:[e.jsx(V,{size:15}),e.jsx("input",{className:"search-input",value:S,onChange:t=>F(t.target.value),placeholder:"Search department..."})]})]})]})]}),e.jsxs("section",{className:"kpi-grid",children:[e.jsxs("div",{className:"kpi-card",children:[e.jsxs("div",{className:"kpi-top",children:[e.jsx("span",{className:"kpi-label",children:"Total Tasks"}),e.jsx("div",{className:"kpi-icon",children:e.jsx(ze,{size:18})})]}),e.jsx("div",{className:"kpi-value",children:g.total}),e.jsxs("div",{className:"kpi-foot",children:[e.jsx(W,{size:12}),"Across selected departments"]})]}),e.jsxs("div",{className:"kpi-card",children:[e.jsxs("div",{className:"kpi-top",children:[e.jsx("span",{className:"kpi-label",children:"Completion Rate"}),e.jsx("div",{className:"kpi-icon",children:e.jsx(Z,{size:18})})]}),e.jsxs("div",{className:"kpi-value",children:[de,"%"]}),e.jsxs("div",{className:"kpi-foot",children:[e.jsx(Z,{size:12}),e.jsx("strong",{children:g.completed}),"tasks completed"]})]}),e.jsxs("div",{className:"kpi-card",children:[e.jsxs("div",{className:"kpi-top",children:[e.jsx("span",{className:"kpi-label",children:"Active Tasks"}),e.jsx("div",{className:"kpi-icon",children:e.jsx(ie,{size:18})})]}),e.jsx("div",{className:"kpi-value",children:ce}),e.jsxs("div",{className:"kpi-foot",children:[e.jsx(ae,{size:12}),"Review + In Progress"]})]}),e.jsxs("div",{className:"kpi-card",children:[e.jsxs("div",{className:"kpi-top",children:[e.jsx("span",{className:"kpi-label",children:"Overdue"}),e.jsx("div",{className:"kpi-icon",children:e.jsx(M,{size:18})})]}),e.jsx("div",{className:"kpi-value",children:xe}),e.jsxs("div",{className:"kpi-foot",children:[e.jsx(M,{size:12}),e.jsx("strong",{children:pe}),"pending tasks"]})]})]}),e.jsxs("section",{className:"report-grid",children:[e.jsxs("div",{className:"chart-card",children:[e.jsxs("div",{className:"chart-header",children:[e.jsxs("div",{className:"chart-heading",children:[e.jsx("div",{className:"chart-heading-icon",children:e.jsx(Q,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"chart-title",children:"Tasks by Department"}),e.jsx("p",{className:"chart-description",children:"Task distribution across departments with status breakdown"})]})]}),e.jsxs("div",{className:"chart-total",children:[e.jsx("div",{className:"chart-total-number",children:g.total}),e.jsx("div",{className:"chart-total-label",children:"Total Tasks"})]})]}),a.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(V,{size:24})}),e.jsx("strong",{children:n?"Could not load report":c?"Loading report...":"No departments found"}),e.jsx("span",{children:n||"Try changing your search or department filter."}),n&&e.jsx("button",{type:"button",onClick:J,children:"Retry"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bar-chart",children:[e.jsx("div",{className:"y-axis",children:he.map(t=>e.jsx("span",{children:t},t))}),e.jsx("div",{className:"bars-area",children:a.map(t=>e.jsxs("div",{className:"department-column",children:[e.jsxs("div",{className:"bar-stack",title:`${t.name}: ${t.total} tasks`,children:[e.jsx("div",{className:"bar bar-early",style:{height:`${t.early/y*100}%`}}),e.jsx("div",{className:"bar bar-on-time",style:{height:`${t.onTime/y*100}%`}}),e.jsx("div",{className:"bar bar-late",style:{height:`${t.late/y*100}%`}}),e.jsx("div",{className:"bar bar-review",style:{height:`${t.review/y*100}%`}}),e.jsx("div",{className:"bar bar-progress",style:{height:`${t.progress/y*100}%`}}),e.jsx("div",{className:"bar bar-pending",style:{height:`${t.pending/y*100}%`}}),e.jsx("div",{className:"bar bar-overdue",style:{height:`${t.overdue/y*100}%`}})]}),e.jsx("div",{className:"department-label",children:t.name})]},t.name))})]}),e.jsx("div",{className:"legend",children:$e.map(t=>e.jsxs("div",{className:`legend-item ${t.className}`,children:[e.jsx("span",{className:"legend-dot"}),t.label]},t.className))})]})]}),e.jsxs("div",{className:"chart-card",children:[e.jsx("div",{className:"chart-header",children:e.jsxs("div",{className:"chart-heading",children:[e.jsx("div",{className:"chart-heading-icon",children:e.jsx(Re,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"chart-title",children:"Priority Distribution"}),e.jsx("p",{className:"chart-description",children:"Task breakdown by priority level"})]})]})}),e.jsxs("div",{className:"priority-body",children:[e.jsx("div",{className:"donut-area",children:e.jsx("div",{className:"donut",style:{background:ge},children:e.jsxs("div",{className:"donut-center",children:[e.jsx("strong",{children:g.total}),e.jsx("span",{children:"Tasks"})]})})}),e.jsx("div",{className:"priority-list",children:k.map(t=>{const{icon:p,className:m}=Ie[t.name]||Ae;return e.jsxs("div",{className:`priority-row ${m}`,children:[e.jsxs("div",{className:"priority-left",children:[e.jsx("div",{className:"priority-icon",children:e.jsx(p,{size:15})}),e.jsxs("span",{className:"priority-name",children:[t.name," Priority"]})]}),e.jsxs("span",{className:"priority-value",children:[t.value,"%"]})]},t.name)})})]})]})]}),e.jsxs("section",{className:"table-card",children:[e.jsxs("div",{className:"table-header",children:[e.jsxs("div",{className:"table-title-wrap",children:[e.jsx("div",{className:"table-title-icon",children:e.jsx(Te,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"table-title",children:"Department Summary"}),e.jsx("p",{className:"table-subtitle",children:"Detailed task performance by department"})]})]}),e.jsxs("div",{className:"configuration-badge",children:[e.jsx(G,{size:13}),a.length," Departments"]})]}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{className:"summary-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Department"}),e.jsx("th",{children:"Total Tasks"}),e.jsx("th",{children:"Completed"}),e.jsx("th",{children:"Early Completion"}),e.jsx("th",{children:"On-time Completion"}),e.jsx("th",{children:"Late Completion"}),e.jsx("th",{children:"Review"}),e.jsx("th",{children:"In Progress"}),e.jsx("th",{children:"Pending"}),e.jsx("th",{children:"Overdue"})]})}),e.jsx("tbody",{children:a.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"department-cell",children:[e.jsx("div",{className:"department-avatar",children:e.jsx(G,{size:14})}),t.name]})}),e.jsx("td",{className:"number-cell",children:t.total}),e.jsx("td",{className:"success-cell",children:t.completed}),e.jsx("td",{className:"success-cell",children:t.early}),e.jsx("td",{className:"progress-cell",children:t.onTime}),e.jsx("td",{className:"danger-cell",children:t.late}),e.jsx("td",{className:"warning-cell",children:t.review}),e.jsx("td",{className:"progress-cell",children:t.progress}),e.jsx("td",{className:"warning-cell",children:t.pending}),e.jsx("td",{className:"danger-cell",children:t.overdue})]},t.name))})]})}),e.jsxs("div",{className:"table-footer",children:[e.jsxs("div",{className:"footer-total",children:[e.jsx(W,{size:12}),"Showing",e.jsx("strong",{children:a.length}),"departments"]}),e.jsxs("div",{children:["Report: ",e.jsx("strong",{children:i})," • ","Period: ",e.jsx("strong",{children:x})]})]})]})]})]}),e.jsx("style",{children:`
        @keyframes reportSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .spin-icon {
          animation: reportSpin .8s linear infinite;
        }
      `})]})};export{nt as default};
