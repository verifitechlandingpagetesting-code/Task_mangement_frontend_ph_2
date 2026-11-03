import{c as Y,r as o,A as Ne,j as e,k as ze}from"./index-DdKrgUlZ.js";import{R as Se}from"./refresh-cw-BTp_wSg-.js";import{L as ae}from"./list-todo-5n7Hw_tv.js";import{T as B}from"./trending-up-CfyUXN6q.js";import{C as L}from"./circle-check-Bb8TVzmm.js";import{C as te}from"./clock-3-qdGjk7GL.js";import{T as P}from"./triangle-alert-470AK52j.js";import{C as De}from"./calendar-clock-NdGUN6Fq.js";import{U as Te}from"./user-x-Blk8W2Yr.js";import{W as re}from"./waves-horizontal-B6LtjNOg.js";import{R as Ae}from"./rotate-ccw-DZTGlI6M.js";import{L as Ce}from"./log-in-CsGuhtnf.js";import{L as Ie}from"./loader-circle-C6iMG4x7.js";import{S as Re}from"./search-BYLJVZob.js";import{F as Me}from"./funnel-BR8BIIkd.js";import{C as Le}from"./chevron-down-CO4vTuki.js";import{A as W}from"./activity-DSl8M825.js";import{E as Pe}from"./ellipsis-C8L058fD.js";import{T as Ee}from"./target-jFYGqZq2.js";import{S as Ye}from"./sparkles-DY2Y4YoQ.js";import{C as Ue}from"./circle-dot-hva9TkPp.js";import{G as $e}from"./gauge-B-eyXVgT.js";const ie={name:"medal",size:24,node:[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]};ie.node;const _e=Y(ie);const ce={name:"repeat",size:24,node:[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]};ce.node;const Oe=Y(ce);const le={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};le.node;const Fe=Y(le);const de={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};de.node;const Ge=Y(de),Be=()=>{const[t,c]=o.useState(null),[b,C]=o.useState(""),[y,U]=o.useState(!0),[p,S]=o.useState(!1),d=o.useCallback(async()=>{try{const n=await Ne.get("/api/tasks/scoreboard");c(n.data.data),C("")}catch(n){C(n.response?.data?.message||"Unable to load your score.")}finally{U(!1)}},[]);o.useEffect(()=>{d();const n=()=>{S(!0),setTimeout(()=>S(!1),1200),d()};return window.addEventListener("score:updated",n),window.addEventListener("realtime:notification",d),()=>{window.removeEventListener("score:updated",n),window.removeEventListener("realtime:notification",d)}},[d]);const x=t?.me,g=x?.level,$=x?.badges?.filter(n=>n.earned).length||0;return e.jsxs("section",{className:"ocean-card ach-card",children:[e.jsx("style",{children:`
        .ach-card{margin-top:18px}
        .ach-grid{display:grid;grid-template-columns:1.1fr 1.4fr 1fr;gap:18px;padding-top:6px}
        .ach-level{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:18px;border-radius:18px;
          color:#fff;background:linear-gradient(150deg,#0b4f6c,#0f9b91);text-align:center}
        .ach-level-icon{font-size:46px;line-height:1;filter:drop-shadow(0 4px 10px rgba(0,0,0,.3))}
        .ach-level-name{font-size:18px;font-weight:900;letter-spacing:.04em}
        .ach-points{font-size:34px;font-weight:900;line-height:1;transition:transform .3s}
        .ach-points.bump{animation:achBump 1.1s ease}
        .ach-points small{display:block;margin-top:4px;font-size:10px;font-weight:700;letter-spacing:.12em;opacity:.8}
        .ach-bar{width:100%;height:8px;border-radius:999px;background:rgba(255,255,255,.2);overflow:hidden}
        .ach-bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#fde68a,#facc15);transition:width .8s ease}
        .ach-next{font-size:11px;opacity:.9}
        .ach-section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;color:#5f7f8f;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
        .ach-badges{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
        .ach-badge{display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;border-radius:14px;border:1px solid #dcebef;background:#fff;text-align:center}
        .ach-badge b{font-size:24px;line-height:1}
        .ach-badge span{font-size:10.5px;font-weight:700;color:#123B5D;line-height:1.25}
        .ach-badge.locked{background:#f6f9fa}
        .ach-badge.locked b{filter:grayscale(1);opacity:.35}
        .ach-badge.locked span{color:#9aaeb8}
        .ach-board{display:flex;flex-direction:column;gap:6px}
        .ach-row{display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:11px;background:#f7fbfc;font-size:12px}
        .ach-row.me{background:#E8F7F8;outline:1px solid #9fdde1}
        .ach-rank{width:22px;text-align:center;font-weight:900;color:#6E8799}
        .ach-row-name{flex:1;min-width:0;font-weight:700;color:#123B5D;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .ach-row-pts{font-weight:900;color:#0b8f87}
        .ach-empty{padding:14px;text-align:center;color:#6E8799;font-size:12px}
        .ach-error{color:#b91c1c;font-size:12px}
        .ach-refresh{border:0;background:transparent;color:#0b8f87;cursor:pointer;display:flex}
        @keyframes achBump{0%{transform:scale(1)}30%{transform:scale(1.25)}100%{transform:scale(1)}}
        @media (max-width:1100px){.ach-grid{grid-template-columns:1fr 1fr}.ach-board-col{grid-column:1 / -1}}
        @media (max-width:640px){.ach-grid{grid-template-columns:1fr}.ach-badges{grid-template-columns:repeat(2,1fr)}}
        @media (prefers-reduced-motion: reduce){.ach-points.bump{animation:none}}
      `}),e.jsxs("div",{className:"ocean-card-header",children:[e.jsxs("div",{className:"ocean-card-title",children:[e.jsx("div",{className:"ocean-card-title-icon",children:e.jsx(Fe,{size:15})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Score & Badges"}),e.jsx("p",{children:"Each approved task earns the score (1–10) its assigner gives — level up and unlock badges"})]})]}),e.jsx("button",{type:"button",className:"ach-refresh",onClick:d,title:"Refresh","aria-label":"Refresh score",children:e.jsx(Se,{size:14})})]}),b&&e.jsx("div",{className:"ach-error",children:b}),y&&!t?e.jsx("div",{className:"ach-empty",children:"Loading your score..."}):x?e.jsxs("div",{className:"ach-grid",children:[e.jsxs("div",{className:"ach-level",children:[e.jsx("div",{className:"ach-level-icon",children:g.icon}),e.jsx("div",{className:"ach-level-name",children:g.name}),e.jsxs("div",{className:`ach-points ${p?"bump":""}`,children:[x.points,e.jsx("small",{children:"TOTAL POINTS"})]}),e.jsx("div",{className:"ach-bar","aria-label":`${g.progress}% to the next level`,children:e.jsx("i",{style:{width:`${g.progress}%`}})}),e.jsx("div",{className:"ach-next",children:g.next?`${g.toNext} points to ${g.next.icon} ${g.next.name}`:"Highest level reached 👑"}),e.jsxs("div",{className:"ach-next",children:[x.completed," tasks completed"]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"ach-section-title",children:[e.jsx("span",{children:"Badges"}),e.jsxs("span",{children:[$," / ",x.badges.length]})]}),e.jsx("div",{className:"ach-badges",children:x.badges.map(n=>e.jsxs("div",{className:`ach-badge ${n.earned?"":"locked"}`,title:`${n.name} — ${n.description}${n.earned?" (earned)":" (locked)"}`,children:[e.jsx("b",{children:n.icon}),e.jsx("span",{children:n.name})]},n.key))})]}),e.jsxs("div",{className:"ach-board-col",children:[e.jsx("div",{className:"ach-section-title",children:e.jsxs("span",{children:[e.jsx(_e,{size:11,style:{verticalAlign:"-1px"}})," Leaderboard"]})}),e.jsx("div",{className:"ach-board",children:(t.leaderboard||[]).length===0?e.jsx("div",{className:"ach-empty",children:"No scores yet."}):t.leaderboard.map(n=>e.jsxs("div",{className:`ach-row ${n.userId===x.userId?"me":""}`,children:[e.jsx("span",{className:"ach-rank",children:n.rank<=3?["🥇","🥈","🥉"][n.rank-1]:n.rank}),e.jsxs("span",{className:"ach-row-name",title:n.name,children:[n.level.icon," ",n.name,n.userId===x.userId?" (you)":""]}),e.jsx("span",{className:"ach-row-pts",children:n.points})]},n.userId))})]})]}):null]})},We="http://localhost:5000/api",q=()=>localStorage.getItem("token")||localStorage.getItem("authToken")||localStorage.getItem("accessToken")||localStorage.getItem("jwt")||localStorage.getItem("userToken")||"",He=()=>{try{return JSON.parse(localStorage.getItem("user")||"null")}catch{return null}},z=ze.create({baseURL:We,withCredentials:!0});z.interceptors.request.use(t=>{const c=q();return c&&(t.headers=t.headers||{},t.headers.Authorization=`Bearer ${c}`),t});const H=t=>{const c=t?.data;return Array.isArray(c)?c:Array.isArray(c?.data)?c.data:Array.isArray(c?.users)?c.users:Array.isArray(c?.departments)?c.departments:Array.isArray(c?.tasks)?c.tasks:[]},qe=t=>({id:t?._id||t?.id,name:t?.name||t?.title||"Untitled Task",department:typeof t?.department=="object"?t?.department?.name||t?.department?.departmentName||"":t?.department||"",assignedUser:typeof t?.assignedUser=="object"?t?.assignedUser?.name||t?.assignedUser?.fullName||"":t?.assignedUser||"",assignedUserId:typeof t?.assignedUser=="object"&&(t?.assignedUser?._id||t?.assignedUser?.id)||"",status:t?.status||"To Do",priority:t?.priority||"Medium",recurring:!!t?.recurring,dueDate:t?.dueDate?String(t.dueDate).slice(0,10):"",createdAt:t?.createdAt||"",updatedAt:t?.updatedAt||t?.createdAt||""}),Ve=t=>typeof t=="string"?{id:t,name:t}:{id:t?._id||t?.id||t?.name,name:t?.name||t?.departmentName||t?.title||t?.department||""},Xe=t=>({id:t?._id||t?.id,name:t?.name||t?.fullName||t?.email||"User",email:t?.email||"",department:typeof t?.department=="object"?t.department?.name||"":t?.department||""}),E=t=>new Date(t).toISOString().slice(0,10),pe=()=>{const t=new Date;return t.setHours(0,0,0,0),t},se=t=>{const c=pe();return c.setDate(c.getDate()-t),c},oe=t=>!t.dueDate||t.status==="Completed"?!1:new Date(`${t.dueDate}T23:59:59`)<new Date,Ke=t=>{if(!t.dueDate||t.status==="Completed")return!1;const b=new Date(`${t.dueDate}T23:59:59`)-new Date;return b>=0&&b<=4320*60*1e3},ne={task_assigned:{label:"Assigned",tone:"assigned"},task_reassigned:{label:"Reassigned",tone:"reassigned"},task_status:{label:"Status",tone:"status"},task_viewed:{label:"Viewed",tone:"status"},task_reminder:{label:"Reminder",tone:"reminder"},task_overdue:{label:"Deadline",tone:"deadline"},support_ticket:{label:"Ticket",tone:"ticket"},support_reply:{label:"Ticket",tone:"ticket"}},Je=()=>{const t=new Date().getHours();return t<12?"Good morning":t<17?"Good afternoon":"Good evening"},va=()=>{const[t,c]=o.useState(""),[b,C]=o.useState("This Month"),[y,U]=o.useState("All Departments"),[p,S]=o.useState("mine"),[d,x]=o.useState([]),[g,$]=o.useState([]),[n,he]=o.useState([]),[me,_]=o.useState(!0),[O,D]=o.useState(""),[xe,V]=o.useState(null),h=He(),v=h?.name||h?.fullName||h?.username||h?.email?.split("@")[0]||"Guest",I=h?._id||h?.id||h?.userId||"",T=o.useCallback(async()=>{if(_(!0),D(""),!q()){D("You are not logged in. Please sign in again."),_(!1),setTimeout(()=>{window.location.href="/login"},1500);return}try{const[a,r,i]=await Promise.all([z.get("/tasks"),z.get("/users/assignable"),z.get("/departments")]);x(H(a).map(qe)),$(H(r).map(Xe)),he(H(i).map(Ve).filter(l=>l.name))}catch(a){console.error("Dashboard load failed:",a),a?.response?.status===401?(D("Session expired. Redirecting to login..."),localStorage.removeItem("token"),localStorage.removeItem("user"),setTimeout(()=>{window.location.href="/login"},1500)):a?.code==="ERR_NETWORK"?D("Cannot reach the server. Is the backend running on port 5000?"):D(a?.response?.data?.message||"Unable to load dashboard data.")}finally{_(!1)}},[]);o.useEffect(()=>{T()},[T]);const[X,K]=o.useState([]),[F,J]=o.useState(0),R=o.useCallback(async()=>{try{const a=await z.get("/notifications",{params:{limit:15}});K(a.data?.data||[]),J(a.data?.unread||0)}catch{}},[]);o.useEffect(()=>{R();const a=setInterval(R,60*1e3),r=()=>{R(),T()};return window.addEventListener("realtime:notification",r),()=>{clearInterval(a),window.removeEventListener("realtime:notification",r)}},[R,T]);const ge=async()=>{try{await z.patch("/notifications/read-all"),K(a=>a.map(r=>({...r,read:!0}))),J(0)}catch{}},Q=o.useCallback(a=>{if(I&&(a.assignedUserId&&String(a.assignedUserId)===String(I)||a.assignedUser&&String(a.assignedUser)===String(I)))return!0;const r=String(a.assignedUser||"").trim().toLowerCase();return r?[h?.name,h?.fullName,h?.username,v,h?.email].filter(Boolean).map(l=>String(l).trim().toLowerCase()).includes(r):!1},[I,h,v]),m=o.useMemo(()=>d.filter(Q),[d,Q]),fe={Today:0,"This Week":7,"This Month":30,"Last 30 Days":30},f=o.useMemo(()=>{let a=d;y!=="All Departments"&&(a=a.filter(i=>String(i.department).trim().toLowerCase()===String(y).trim().toLowerCase()));const r=fe[b];if(r!==void 0){const i=se(r);a=a.filter(l=>l.createdAt?new Date(l.createdAt)>=i:r===30)}if(t.trim()){const i=t.toLowerCase();a=a.filter(l=>l.name.toLowerCase().includes(i)||l.assignedUser?.toLowerCase().includes(i)||l.department?.toLowerCase().includes(i))}return a},[d,y,b,t]),s=o.useMemo(()=>{const a=pe();return{total:f.length,pending:f.filter(r=>r.status==="To Do").length,inProgress:f.filter(r=>r.status==="In Progress").length,review:f.filter(r=>r.status==="Review").length,completed:f.filter(r=>r.status==="Completed").length,overdue:f.filter(oe).length,dueSoon:f.filter(Ke).length,unassigned:f.filter(r=>!r.assignedUser).length,recurring:f.filter(r=>r.recurring).length,dueToday:f.filter(r=>r.dueDate&&E(r.dueDate)===E(a)).length}},[f]),w=o.useMemo(()=>({total:m.length,completed:m.filter(a=>a.status==="Completed").length,inProgress:m.filter(a=>a.status==="In Progress").length,overdue:m.filter(oe).length}),[m]),u=o.useCallback((a,r)=>{const i=se(r),l=a.filter(N=>N.updatedAt&&new Date(N.updatedAt)>=i);if(!l.length)return 0;const M=l.filter(N=>N.status==="Completed").length;return Math.round(M/l.length*100)},[]),be=o.useMemo(()=>({daily:u(m,1),weekly:u(m,7),monthly:u(m,30),quarterly:u(m,90)}),[m,u]),ue=o.useMemo(()=>({daily:u(d,1),weekly:u(d,7),monthly:u(d,30),quarterly:u(d,90)}),[d,u]),k=p==="mine"?be:ue,Z=o.useMemo(()=>{const a=p==="mine"?m:d,r=[];for(let i=6;i>=0;i--){const l=new Date;l.setDate(l.getDate()-i);const M=E(l),N=l.toLocaleDateString("en-US",{weekday:"short"}),je=a.filter(G=>{if(G.status!=="Completed")return!1;const ee=G.updatedAt||G.createdAt;return ee&&E(ee)===M}).length;r.push({day:N,value:je,key:M})}return r},[d,m,p]),A=s.pending+s.inProgress+s.review+s.completed,j=o.useMemo(()=>{if(!A)return{pending:25,progress:50,review:75,completed:100};const a=s.pending/A*100,r=a+s.inProgress/A*100,i=r+s.review/A*100;return{pending:a,progress:r,review:i,completed:100}},[A,s.pending,s.inProgress,s.review]),ye=Math.max(...Z.map(a=>a.value),1),ve=s.total?Math.round(s.completed/s.total*100):0,we=[{label:"TOTAL TASKS",value:s.total,footer:`${ve}% completion · ${w.total} assigned to you`,icon:ae,className:"kpi-total"},{label:"IN PROGRESS",value:s.inProgress,footer:"Active work",icon:B,className:"kpi-progress"},{label:"COMPLETED",value:s.completed,footer:"Finished tasks",icon:L,className:"kpi-completed"},{label:"REVIEW",value:s.review,footer:"Awaiting review",icon:te,className:"kpi-review"},{label:"OVERDUE",value:s.overdue,footer:`${s.dueToday} due today`,icon:P,className:"kpi-overdue"}],ke=[{value:s.overdue,label:"Overdue tasks",icon:P,alert:!0},{value:s.dueSoon,label:"Due in 3 days",icon:De},{value:s.unassigned,label:"Unassigned tasks",icon:Te},{value:s.recurring,label:"Recurring tasks",icon:Oe}];return e.jsxs("div",{className:"ocean-dashboard",children:[e.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .ocean-dashboard {
          --ocean-950: #06253d;
          --ocean-900: #0b3454;
          --ocean-800: #124c70;
          --ocean-700: #176b8c;
          --ocean-600: #168fa8;
          --ocean-500: #25afbf;
          --ocean-400: #62c8d3;
          --ocean-300: #9bdee4;
          --ocean-200: #cfecef;
          --ocean-100: #e8f7f8;
          --ink: #17364f;
          --muted: #7891a2;

          min-height: calc(100vh - 145px);
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 24px 20px 70px;
          color: var(--ink);
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;

          background:
            radial-gradient(circle at 8% 5%, rgba(51,177,193,.18), transparent 25%),
            radial-gradient(circle at 92% 10%, rgba(30,123,157,.13), transparent 27%),
            radial-gradient(circle at 52% 92%, rgba(74,188,201,.12), transparent 30%),
            linear-gradient(135deg, #eaf8fa 0%, #f6fcfd 45%, #e9f7f9 100%);

          animation: dashboardEntrance .75s ease both;
        }

        .ocean-dashboard::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          right: -160px;
          top: 100px;
          z-index: -1;
          border-radius: 50%;
          background:
            radial-gradient(circle,
              rgba(28,151,174,.16) 0%,
              rgba(28,151,174,.07) 38%,
              transparent 70%);
          filter: blur(10px);
          animation: oceanOrb 12s ease-in-out infinite;
        }

        .ocean-dashboard::after {
          content: "";
          position: absolute;
          width: 330px;
          height: 330px;
          left: -160px;
          bottom: 50px;
          z-index: -1;
          border-radius: 50%;
          background:
            radial-gradient(circle,
              rgba(82,193,202,.15),
              transparent 70%);
          filter: blur(12px);
          animation: oceanOrb 15s ease-in-out infinite reverse;
        }

        .ocean-container {
          width: 100%;
          max-width: 1760px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ===== floating particles ===== */

        .ocean-container::before,
        .ocean-container::after {
          content: "";
          position: fixed;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(33,154,177,.28);
          box-shadow:
            0 0 0 5px rgba(33,154,177,.035),
            0 0 25px rgba(33,154,177,.18);
          pointer-events: none;
          z-index: -1;
        }

        .ocean-container::before {
          left: 14%;
          bottom: 12%;
          animation: bubbleRise 11s linear infinite;
        }

        .ocean-container::after {
          right: 17%;
          bottom: 8%;
          width: 12px;
          height: 12px;
          animation: bubbleRise 14s linear infinite -5s;
        }

        /* ===== header ===== */

        .ocean-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
          animation: slideDown .7s cubic-bezier(.2,.8,.2,1) both;
        }

        .ocean-heading {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .ocean-logo {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          color: #fff;
          background:
            linear-gradient(145deg, #0b3150, #176b8c 75%);
          box-shadow:
            0 13px 30px rgba(10,67,95,.20),
            inset 0 1px rgba(255,255,255,.18);
          animation: logoFloat 4s ease-in-out infinite;
        }

        .ocean-logo::before {
          content: "";
          position: absolute;
          width: 70px;
          height: 18px;
          left: -55px;
          top: 7px;
          background: rgba(255,255,255,.22);
          transform: rotate(-28deg);
          animation: logoSweep 4.5s ease-in-out infinite;
        }

        .ocean-logo svg {
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 0 7px rgba(255,255,255,.22));
        }

        .ocean-heading h1 {
          margin: 0;
          color: #17364f;
          font-size: 28px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -.9px;
        }

        .ocean-heading p {
          margin: 6px 0 0;
          color: #7891a2;
          font-size: 11px;
        }

        /* ===== toolbar ===== */

        .ocean-toolbar {
          display: flex;
          align-items: center;
          gap: 9px;
          flex-wrap: wrap;
          margin-bottom: 17px;
          animation: slideUp .7s .06s ease both;
        }

        .ocean-search {
          flex: 1;
          min-width: 230px;
          height: 44px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 13px;
          border: 1px solid #d1e6eb;
          border-radius: 12px;
          background: rgba(255,255,255,.9);
          box-shadow: 0 7px 22px rgba(18,75,99,.045);
          transition: .25s ease;
        }

        .ocean-search:focus-within {
          transform: translateY(-2px);
          border-color: #6cb6c5;
          box-shadow:
            0 10px 25px rgba(23,105,132,.08),
            0 0 0 4px rgba(38,163,183,.08);
        }

        .ocean-search svg {
          color: #7d9aaa;
          flex-shrink: 0;
        }

        .ocean-search input {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #294963;
          font-size: 11px;
        }

        .ocean-search input::placeholder {
          color: #9aadb8;
        }

        .ocean-select,
        .ocean-filter-btn {
          height: 44px;
          border: 1px solid #d1e6eb;
          border-radius: 11px;
          background: rgba(255,255,255,.92);
          color: #36566f;
          font-size: 10px;
          font-weight: 750;
          outline: none;
          cursor: pointer;
          transition: .25s ease;
        }

        .ocean-select {
          min-width: 155px;
          padding: 0 11px;
        }

        .ocean-select:hover,
        .ocean-select:focus,
        .ocean-filter-btn:hover {
          transform: translateY(-2px);
          border-color: #7dbaca;
          box-shadow: 0 9px 20px rgba(23,91,116,.08);
        }

        .ocean-filter-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 14px;
        }

        /* ===== banners ===== */

        .ocean-banner {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 15px;
          margin-bottom: 16px;
          border-radius: 13px;
          font-size: 12px;
          font-weight: 650;
          animation: bannerIn .55s ease both;
        }

        .ocean-banner-error {
          border: 1px solid #e9c9c9;
          background: #fff7f7;
          color: #8d4a4a;
        }

        .ocean-banner-info {
          border: 1px solid #cfe3e8;
          background: rgba(255,255,255,.88);
          color: #36566f;
        }

        .ocean-retry {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 5px;
          border: 1px solid #cfe1e6;
          background: #fff;
          color: #30546d;
          border-radius: 8px;
          padding: 7px 11px;
          font-weight: 750;
          cursor: pointer;
          transition: .2s ease;
        }

        .ocean-retry:hover {
          transform: translateY(-2px);
        }

        .ocean-spinner {
          animation: spin 1s linear infinite;
        }

        /* ===== KPI ===== */

        .ocean-kpis {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1fr 1fr;
          gap: 12px;
          margin-bottom: 17px;
        }

        .ocean-kpi {
          min-height: 125px;
          position: relative;
          overflow: hidden;
          padding: 17px;
          border: 1px solid #d2e6eb;
          border-radius: 17px;
          background:
            linear-gradient(145deg, rgba(255,255,255,.98), rgba(239,249,251,.95));
          box-shadow: 0 9px 27px rgba(23,66,89,.055);
          animation:
            kpiIn .72s cubic-bezier(.2,.8,.2,1) both,
            cardBreath 6s ease-in-out infinite;
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }

        .ocean-kpi:nth-child(1) { animation-delay: .10s, 0s; }
        .ocean-kpi:nth-child(2) { animation-delay: .17s, -.7s; }
        .ocean-kpi:nth-child(3) { animation-delay: .24s, -1.4s; }
        .ocean-kpi:nth-child(4) { animation-delay: .31s, -2.1s; }
        .ocean-kpi:nth-child(5) { animation-delay: .38s, -2.8s; }

        .ocean-kpi:hover {
          transform: translateY(-6px) scale(1.012);
          border-color: #a9d0da;
          box-shadow: 0 18px 38px rgba(20,83,107,.11);
        }

        .ocean-kpi::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -88px;
          top: -105px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(47,174,190,.17), transparent 68%);
          animation: kpiOrb 7s ease-in-out infinite;
        }

        .ocean-kpi::after {
          content: "";
          position: absolute;
          width: 92px;
          height: 92px;
          right: 22px;
          bottom: -68px;
          border: 1px solid rgba(33,110,137,.09);
          border-radius: 50%;
          box-shadow:
            0 0 0 12px rgba(33,110,137,.025),
            0 0 0 24px rgba(33,110,137,.018);
          animation: ringFloat 6s ease-in-out infinite;
        }

        .kpi-total { border-top: 3px solid #124c70; }
        .kpi-progress { border-top: 3px solid #176b8c; }
        .kpi-completed { border-top: 3px solid #168fa8; }
        .kpi-review { border-top: 3px solid #2b9ab0; }
        .kpi-overdue { border-top: 3px solid #27617d; }

        .kpi-content {
          position: relative;
          z-index: 3;
        }

        .kpi-label {
          color: #7892a2;
          font-size: 9px;
          letter-spacing: .85px;
          font-weight: 850;
        }

        .kpi-value {
          margin-top: 7px;
          color: #17364f;
          font-size: 30px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -1px;
          animation: numberPop .8s .4s both;
        }

        .kpi-footer {
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 5px;
          color: #7892a2;
          font-size: 9px;
        }

        .kpi-footer svg {
          color: #168fa8;
        }

        .kpi-icon {
          position: absolute;
          right: 15px;
          bottom: 14px;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #176b8c;
          background: linear-gradient(145deg, #e4f5f7, #d6edf1);
          z-index: 4;
          animation: iconFloat 4s ease-in-out infinite;
          box-shadow: inset 0 1px rgba(255,255,255,.9);
        }

        .ocean-kpi:hover .kpi-icon {
          animation: iconPulse .9s ease-in-out infinite;
        }

        /* ===== generic card ===== */

        .ocean-card {
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,.92);
          border: 1px solid #d6e8ec;
          border-radius: 17px;
          box-shadow: 0 8px 28px rgba(23,50,77,.045);
          transition: .3s ease;
          animation: sectionIn .75s .18s both;
        }

        .ocean-card::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -120px;
          top: -120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(49,175,191,.08), transparent 70%);
          pointer-events: none;
          transition: .4s ease;
        }

        .ocean-card:hover {
          border-color: #bcd9e0;
          box-shadow: 0 16px 38px rgba(20,77,101,.075);
        }

        .ocean-card:hover::before {
          transform: scale(1.35);
        }

        .ocean-card-header {
          position: relative;
          z-index: 2;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e6f0f2;
        }

        .ocean-card-title {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .ocean-card-title-icon {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #176b8c;
          background: #e4f5f7;
          transition: .3s ease;
        }

        .ocean-card:hover .ocean-card-title-icon {
          transform: rotate(-5deg) scale(1.08);
          box-shadow: 0 0 0 7px rgba(30,145,165,.05);
        }

        .ocean-card-title h2 {
          margin: 0;
          color: #17364f;
          font-size: 13px;
          font-weight: 850;
        }

        .ocean-card-title p {
          margin: 3px 0 0;
          color: #8a9daa;
          font-size: 9px;
        }

        /* ===== main grid ===== */

        .ocean-main-grid {
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        /* ===== donut ===== */

        .distribution-body {
          padding: 22px;
          display: flex;
          align-items: center;
          gap: 38px;
        }

        .ocean-donut {
          width: 190px;
          height: 190px;
          flex-shrink: 0;
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: conic-gradient(
            #0e466a 0 ${j.pending}%,
            #176b8c ${j.pending}% ${j.progress}%,
            #2490a8 ${j.progress}% ${j.review}%,
            #63aabc ${j.review}% 100%
          );
          box-shadow:
            0 13px 34px rgba(24,91,115,.13),
            0 0 0 8px rgba(38,158,179,.035);
          animation: donutReveal 1.15s cubic-bezier(.2,.8,.2,1) both;
        }

        .ocean-donut::before {
          content: "";
          position: absolute;
          inset: -7px;
          border-radius: 50%;
          border: 1px dashed rgba(22,143,168,.28);
          animation: orbit 14s linear infinite;
        }

        .ocean-donut::after {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          top: 5px;
          left: 50%;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 0 5px rgba(255,255,255,.4);
          animation: orbitDot 5s linear infinite;
        }

        .donut-inner {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow:
            inset 0 0 0 1px #e1edef,
            0 0 0 8px rgba(255,255,255,.45);
        }

        .donut-total {
          color: #17364f;
          font-size: 30px;
          line-height: 1;
          font-weight: 900;
        }

        .donut-label {
          margin-top: 5px;
          color: #91a2ad;
          font-size: 8px;
          letter-spacing: .6px;
        }

        .donut-legend {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .legend-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px;
          border-radius: 9px;
          transition: .25s ease;
        }

        .legend-row:hover {
          transform: translateX(5px);
          background: #f1f8fa;
        }

        .legend-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(33,141,161,.055);
          animation: dotPulse 2s ease-in-out infinite;
        }

        .legend-name {
          color: #647b8c;
          font-size: 10px;
        }

        .legend-number {
          color: #17364f;
          font-size: 11px;
          font-weight: 850;
        }

        /* ===== score ===== */

        .score-panel {
          color: #fff;
          border: 0;
          background:
            radial-gradient(circle at 90% 0%, rgba(65,181,199,.22), transparent 34%),
            linear-gradient(145deg, #082d4b, #0d4569 58%, #126b83);
          box-shadow: 0 17px 40px rgba(8,52,78,.18);
        }

        .score-panel::before {
          width: 260px;
          height: 260px;
          right: -110px;
          top: -140px;
          background: radial-gradient(circle, rgba(93,208,218,.13), transparent 70%);
        }

        .score-panel .ocean-card-header {
          border-bottom-color: rgba(255,255,255,.10);
        }

        .score-panel .ocean-card-title-icon {
          color: #d3f1f5;
          background: rgba(255,255,255,.09);
        }

        .score-panel .ocean-card-title h2 {
          color: #fff;
        }

        .score-panel .ocean-card-title p {
          color: #aac6d4;
        }

        .score-body {
          position: relative;
          z-index: 2;
          padding: 22px;
        }

        .score-toggle {
          display: flex;
          gap: 6px;
        }

        .score-toggle button {
          padding: 6px 11px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,.18);
          background: transparent;
          color: #a9c5d3;
          font-size: 9px;
          font-weight: 850;
          cursor: pointer;
          transition: .25s ease;
        }

        .score-toggle button:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,.09);
          color: #fff;
        }

        .score-toggle button.active {
          background: rgba(255,255,255,.17);
          color: #fff;
          border-color: rgba(255,255,255,.35);
          box-shadow: 0 0 18px rgba(105,210,220,.09);
        }

        .score-main {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-bottom: 18px;
        }

        .score-ring {
          width: 145px;
          height: 145px;
          flex-shrink: 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow:
            0 0 0 8px rgba(255,255,255,.035),
            0 0 35px rgba(143,198,218,.13);
          animation:
            scoreReveal 1.1s cubic-bezier(.2,.8,.2,1) both,
            scorePulse 3.5s ease-in-out 1.1s infinite;
        }

        .score-ring::after {
          content: "";
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px dashed rgba(180,232,239,.28);
          animation: orbit 11s linear infinite reverse;
        }

        .score-ring-inner {
          width: 105px;
          height: 105px;
          border-radius: 50%;
          background: #103a58;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 20px rgba(0,0,0,.13);
        }

        .score-number {
          color: #fff;
          font-size: 30px;
          line-height: 1;
          font-weight: 900;
        }

        .score-outof {
          margin-top: 5px;
          color: #abc4d2;
          font-size: 8px;
          letter-spacing: .5px;
        }

        .score-text h3 {
          margin: 0;
          color: #fff;
          font-size: 15px;
        }

        .score-text p {
          margin: 7px 0 0;
          color: #b2c8d4;
          font-size: 10px;
          line-height: 1.6;
        }

        .score-chips {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .score-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 9px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          color: #cfe4ef;
          font-size: 9px;
          font-weight: 700;
          transition: .25s ease;
        }

        .score-chip:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,.14);
        }

        .score-chip-alert {
          background: rgba(232,110,110,.14);
          border-color: rgba(232,110,110,.3);
          color: #f3c2c2;
        }

        .score-empty {
          padding: 13px;
          border-radius: 10px;
          margin-bottom: 14px;
          background: rgba(255,255,255,.055);
          border: 1px dashed rgba(255,255,255,.22);
          color: #bcd3e0;
          font-size: 10px;
          line-height: 1.6;
          text-align: center;
          animation: emptyPulse 3s ease-in-out infinite;
        }

        .score-metrics {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 7px;
        }

        .score-metric {
          padding: 10px 6px;
          text-align: center;
          border-radius: 9px;
          background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.07);
          transition: .25s ease;
        }

        .score-metric:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,.11);
        }

        .score-metric span {
          display: block;
          color: #a9c3d1;
          font-size: 8px;
        }

        .score-metric strong {
          display: block;
          margin-top: 4px;
          color: #fff;
          font-size: 12px;
        }

        /* ===== performance graph ===== */

        .performance {
          margin-bottom: 16px;
        }

        .performance-body {
          padding: 20px;
        }

        .graph {
          height: 270px;
          display: flex;
          align-items: flex-end;
          gap: 14px;
          position: relative;
          padding: 15px 15px 32px;
        }

        .graph-lines {
          position: absolute;
          inset: 15px 15px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .graph-line {
          width: 100%;
          border-top: 1px dashed #dce9ed;
        }

        .graph-column {
          flex: 1;
          height: 100%;
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 2;
        }

        .graph-bar {
          width: 31px;
          min-height: 4px;
          border-radius: 9px 9px 3px 3px;
          background:
            linear-gradient(180deg, #35b2c0 0%, #177b99 48%, #0d4569 100%);
          box-shadow:
            0 8px 18px rgba(23,97,123,.16),
            inset 0 1px rgba(255,255,255,.35);
          transform-origin: bottom;
          animation:
            barGrow 1s cubic-bezier(.2,.8,.2,1) both,
            barShimmer 3s ease-in-out 1s infinite;
          transition: .25s ease;
          position: relative;
        }

        .graph-bar::before {
          content: "";
          position: absolute;
          top: 7px;
          left: 5px;
          right: 5px;
          height: 2px;
          border-radius: 99px;
          background: rgba(255,255,255,.35);
          animation: barHighlight 2.5s ease-in-out infinite;
        }

        .graph-column:hover .graph-bar {
          transform: translateY(-6px) scaleX(1.13);
          filter: brightness(1.08);
        }

        .graph-day {
          position: absolute;
          bottom: -24px;
          color: #8296a5;
          font-size: 9px;
          white-space: nowrap;
        }

        .graph-count {
          position: absolute;
          bottom: calc(100% + 6px);
          color: #176b8c;
          font-size: 9px;
          font-weight: 900;
          opacity: 0;
          transform: translateY(5px);
          transition: .2s ease;
        }

        .graph-column:hover .graph-count {
          opacity: 1;
          transform: translateY(0);
        }

        /* ===== bottom grid ===== */

        .ocean-bottom-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 16px;
        }

        /* ===== animated workflow ===== */

        .workflow {
          position: relative;
          padding: 22px 20px 27px;
        }

        .workflow-track {
          position: absolute;
          left: 58px;
          right: 58px;
          top: 57px;
          height: 48px;
          pointer-events: none;
          overflow: visible;
          z-index: 0;
        }

        .workflow-track svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .workflow-wave-base {
          fill: none;
          stroke: #cfe7eb;
          stroke-width: 2;
        }

        .workflow-wave-flow {
          fill: none;
          stroke: #25afbf;
          stroke-width: 2.4;
          stroke-linecap: round;
          stroke-dasharray: 10 9;
          animation: waveFlow 4s linear infinite;
          filter: drop-shadow(0 0 4px rgba(37,175,191,.22));
        }

        .workflow-wave-glow {
          fill: none;
          stroke: rgba(37,175,191,.22);
          stroke-width: 8;
          stroke-linecap: round;
          stroke-dasharray: 8 11;
          animation: waveFlow 4s linear infinite reverse;
        }

        .workflow-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .workflow-step {
          min-height: 105px;
          padding: 14px 8px;
          text-align: center;
          border-radius: 13px;
          background: rgba(247,252,253,.94);
          border: 1px solid #d7e8ec;
          transition: .3s ease;
          position: relative;
          overflow: hidden;
          animation: workflowNodeIn .7s ease both;
        }

        .workflow-step:nth-child(1) { animation-delay: .05s; }
        .workflow-step:nth-child(2) { animation-delay: .14s; }
        .workflow-step:nth-child(3) { animation-delay: .23s; }
        .workflow-step:nth-child(4) { animation-delay: .32s; }

        .workflow-step::before {
          content: "";
          position: absolute;
          width: 70px;
          height: 70px;
          left: 50%;
          top: -48px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(35,173,191,.16), transparent 70%);
          animation: nodeGlow 3s ease-in-out infinite;
        }

        .workflow-step:hover {
          transform: translateY(-7px);
          border-color: #a9d3dc;
          box-shadow: 0 13px 28px rgba(23,89,111,.10);
        }

        .workflow-node {
          width: 30px;
          height: 30px;
          margin: 0 auto 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #176b8c;
          background: #e6f6f8;
          border: 1px solid #c7e5ea;
          position: relative;
          box-shadow: 0 0 0 6px rgba(35,166,183,.035);
          animation: nodePulse 2.4s ease-in-out infinite;
        }

        .workflow-node::after {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid rgba(35,166,183,.13);
          animation: nodeRing 2.4s ease-out infinite;
        }

        .workflow-step strong {
          display: block;
          color: #17364f;
          font-size: 19px;
          font-weight: 900;
        }

        .workflow-step span {
          display: block;
          margin-top: 4px;
          color: #8296a5;
          font-size: 8px;
          letter-spacing: .45px;
          font-weight: 800;
        }

        .workflow-step-complete {
          background: linear-gradient(145deg, #edf9fa, #e2f5f6);
          border-color: #c1e0e5;
        }

        .workflow-step-complete .workflow-node {
          color: #fff;
          background: linear-gradient(145deg, #1a9cad, #116d89);
          border-color: transparent;
        }

        /* ===== health ===== */

        .health-grid {
          padding: 20px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 9px;
        }

        .health-item {
          position: relative;
          overflow: hidden;
          padding: 14px;
          border-radius: 12px;
          background: #f6fafb;
          border: 1px solid #dfecef;
          transition: .3s ease;
          animation: healthIn .7s ease both;
        }

        .health-item:nth-child(1) { animation-delay: .10s; }
        .health-item:nth-child(2) { animation-delay: .18s; }
        .health-item:nth-child(3) { animation-delay: .26s; }
        .health-item:nth-child(4) { animation-delay: .34s; }

        .health-item::after {
          content: "";
          position: absolute;
          width: 80px;
          height: 80px;
          right: -45px;
          bottom: -48px;
          border-radius: 50%;
          border: 1px solid rgba(31,143,164,.10);
          transition: .35s ease;
        }

        .health-item:hover {
          transform: translateY(-5px);
          border-color: #b9d6de;
          box-shadow: 0 12px 24px rgba(23,83,105,.07);
        }

        .health-item:hover::after {
          transform: scale(1.5);
        }

        .health-item-icon {
          width: 32px;
          height: 32px;
          margin-bottom: 11px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e4f1f5;
          color: #176b8c;
          animation: iconFloat 4s ease-in-out infinite;
        }

        .health-item-alert .health-item-icon {
          background: #e9f5f7;
          color: #a24f5f;
        }

        .health-number {
          color: #17364f;
          font-size: 21px;
          font-weight: 900;
        }

        .health-label {
          margin-top: 3px;
          color: #8a9daa;
          font-size: 9px;
        }

        /* ===== team summary ===== */

        .team-summary {
          margin-top: 16px;
          animation-delay: .4s;
        }

        /* ===== task activity (end of dashboard) ===== */

        .task-activity {
          margin-top: 16px;
          animation-delay: .45s;
        }

        .activity-new-count {
          margin-left: 8px;
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 10px;
          vertical-align: middle;
          background: #16a6b8;
          color: #fff;
        }

        .activity-mark-read {
          border: 1px solid #d5e7ee;
          background: #fff;
          color: #0b8f87;
          border-radius: 9px;
          padding: 6px 10px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: .2s ease;
        }

        .activity-mark-read:hover {
          border-color: #9fd8de;
          background: #f2fbfc;
        }

        .activity-empty {
          margin: 0;
          padding: 14px 18px 18px;
          font-size: 12px;
          color: #8296a5;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-height: 320px;
          overflow-y: auto;
          padding: 14px 18px 18px;
        }

        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 9px 11px;
          border-radius: 12px;
          border: 1px solid #e3eef2;
          background: #fff;
          transition: .2s ease;
        }

        .activity-item.unread {
          background: #f4fbfc;
        }

        .activity-item:hover {
          border-color: #c5e3e9;
        }

        .activity-badge {
          flex-shrink: 0;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 999px;
        }

        .activity-badge.assigned { background: #eef7fa; color: #2f6f91; }
        .activity-badge.reassigned { background: #f1eefc; color: #6b4fc8; }
        .activity-badge.status { background: #eaf8f1; color: #17724a; }
        .activity-badge.reminder { background: #fff7e6; color: #b7791f; }
        .activity-badge.deadline { background: #fdecee; color: #a83c55; }
        .activity-badge.ticket { background: #ecfeff; color: #0e7490; }

        .activity-body {
          flex: 1;
          min-width: 0;
          font-size: 12px;
          color: #123b5d;
          line-height: 1.45;
          word-break: break-word;
        }

        .activity-from { color: #8296a5; }
        .activity-to { color: #0b8f87; }

        .activity-time {
          margin-top: 2px;
          font-size: 10px;
          color: #8296a5;
        }

        .activity-dot {
          width: 7px;
          height: 7px;
          margin-top: 5px;
          border-radius: 50%;
          flex-shrink: 0;
          background: #16a6b8;
        }

        /* ===== animations ===== */

        @keyframes dashboardEntrance {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bannerIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes kpiIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(.94);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes sectionIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes numberPop {
          0% { opacity: 0; transform: scale(.55); }
          65% { opacity: 1; transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        @keyframes logoFloat {
          0%,100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-4px) rotate(-1deg); }
        }

        @keyframes logoSweep {
          0%, 65%, 100% { left: -70px; }
          35% { left: 65px; }
        }

        @keyframes oceanOrb {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-25px,-22px,0) scale(1.08); }
        }

        @keyframes bubbleRise {
          0% {
            opacity: 0;
            transform: translate3d(0,70px,0) scale(.7);
          }
          12% { opacity: 1; }
          100% {
            opacity: 0;
            transform: translate3d(35px,-80vh,0) scale(1.3);
          }
        }

        @keyframes kpiOrb {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-14px,12px); }
        }

        @keyframes ringFloat {
          0%,100% { transform: scale(1) rotate(0); }
          50% { transform: scale(1.08) rotate(12deg); }
        }

        @keyframes iconFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes iconPulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.13) rotate(-3deg); }
        }

        @keyframes cardBreath {
          0%,100% { box-shadow: 0 9px 27px rgba(23,66,89,.055); }
          50% { box-shadow: 0 12px 30px rgba(23,106,127,.075); }
        }

        @keyframes donutReveal {
          from {
            opacity: 0;
            transform: rotate(-90deg) scale(.72);
          }
          to {
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }

        @keyframes orbit {
          to { transform: rotate(360deg); }
        }

        @keyframes orbitDot {
          to { transform: rotate(360deg) translateX(95px) rotate(-360deg); }
        }

        @keyframes dotPulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.35); }
        }

        @keyframes scoreReveal {
          from {
            opacity: 0;
            transform: rotate(-90deg) scale(.7);
          }
          to {
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }

        @keyframes scorePulse {
          0%,100% {
            box-shadow:
              0 0 0 8px rgba(255,255,255,.035),
              0 0 35px rgba(143,198,218,.13);
          }
          50% {
            box-shadow:
              0 0 0 13px rgba(255,255,255,.025),
              0 0 55px rgba(143,198,218,.23);
          }
        }

        @keyframes emptyPulse {
          0%,100% { border-color: rgba(255,255,255,.22); }
          50% { border-color: rgba(143,224,233,.46); }
        }

        @keyframes barGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }

        @keyframes barShimmer {
          0%,100% { filter: brightness(1); }
          50% { filter: brightness(1.08); }
        }

        @keyframes barHighlight {
          0%,100% { opacity: .2; transform: translateY(0); }
          50% { opacity: .65; transform: translateY(8px); }
        }

        @keyframes waveFlow {
          to { stroke-dashoffset: -76; }
        }

        @keyframes workflowNodeIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(.92);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes nodeGlow {
          0%,100% { opacity: .35; transform: translateX(-50%) scale(.8); }
          50% { opacity: .8; transform: translateX(-50%) scale(1.2); }
        }

        @keyframes nodePulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.07); }
        }

        @keyframes nodeRing {
          0% {
            opacity: .55;
            transform: scale(.75);
          }
          100% {
            opacity: 0;
            transform: scale(1.35);
          }
        }

        @keyframes healthIn {
          from {
            opacity: 0;
            transform: translateY(14px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ===== responsive ===== */

        @media (max-width: 1200px) {
          .ocean-kpis {
            grid-template-columns: repeat(3, 1fr);
          }

          .ocean-main-grid,
          .ocean-bottom-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 800px) {
          .ocean-dashboard {
            padding: 18px 13px 45px;
          }

          .ocean-kpis {
            grid-template-columns: 1fr 1fr;
          }

          .distribution-body {
            flex-direction: column;
          }

          .score-main {
            flex-direction: column;
            text-align: center;
          }

          .score-chips {
            justify-content: center;
          }

          .health-grid {
            grid-template-columns: 1fr 1fr;
          }

          .workflow-track {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .ocean-header {
            align-items: flex-start;
          }

          .ocean-heading h1 {
            font-size: 24px;
          }

          .ocean-toolbar {
            flex-direction: column;
          }

          .ocean-search,
          .ocean-select,
          .ocean-filter-btn {
            width: 100%;
          }

          .ocean-kpis {
            grid-template-columns: 1fr;
          }

          .score-metrics {
            grid-template-columns: 1fr 1fr;
          }

          .health-grid {
            grid-template-columns: 1fr 1fr;
          }

          .workflow-row {
            grid-template-columns: 1fr 1fr;
          }

          .graph {
            gap: 7px;
          }

          .graph-bar {
            width: 22px;
          }

          .graph-day {
            font-size: 8px;
          }
        }

        @media (max-width: 420px) {
          .ocean-dashboard {
            padding: 13px 9px 30px;
          }

          .ocean-heading {
            align-items: flex-start;
          }

          .ocean-logo {
            width: 45px;
            height: 45px;
          }

          .ocean-heading h1 {
            font-size: 22px;
          }

          .distribution-body {
            padding: 17px;
          }

          .ocean-donut {
            width: 165px;
            height: 165px;
          }

          .donut-inner {
            width: 105px;
            height: 105px;
          }

          .workflow-row {
            grid-template-columns: 1fr;
          }

          .health-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ocean-dashboard *,
          .ocean-dashboard::before,
          .ocean-dashboard::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}),e.jsxs("div",{className:"ocean-container",children:[e.jsx("header",{className:"ocean-header",children:e.jsxs("div",{className:"ocean-heading",children:[e.jsx("div",{className:"ocean-logo",children:e.jsx(re,{size:23})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Dashboard"}),e.jsxs("p",{children:[Je(),", ",v," — here's your workspace overview"]})]})]})}),O&&e.jsxs("div",{className:"ocean-banner ocean-banner-error",children:[e.jsx(P,{size:15}),e.jsx("span",{children:O}),q()?e.jsxs("button",{className:"ocean-retry",onClick:T,children:[e.jsx(Ae,{size:12}),"Retry"]}):e.jsxs("button",{className:"ocean-retry",onClick:()=>window.location.href="/login",children:[e.jsx(Ce,{size:12}),"Login"]})]}),me&&!O&&e.jsxs("div",{className:"ocean-banner ocean-banner-info",children:[e.jsx(Ie,{size:15,className:"ocean-spinner"}),e.jsx("span",{children:"Loading dashboard data..."})]}),e.jsxs("section",{className:"ocean-toolbar",children:[e.jsxs("div",{className:"ocean-search",children:[e.jsx(Re,{size:14}),e.jsx("input",{value:t,onChange:a=>c(a.target.value),placeholder:"Search tasks, users, departments..."})]}),e.jsxs("select",{className:"ocean-select",value:b,onChange:a=>C(a.target.value),children:[e.jsx("option",{children:"This Month"}),e.jsx("option",{children:"This Week"}),e.jsx("option",{children:"Today"}),e.jsx("option",{children:"Last 30 Days"})]}),e.jsxs("select",{className:"ocean-select",value:y,onChange:a=>U(a.target.value),children:[e.jsx("option",{children:"All Departments"}),n.map(a=>e.jsx("option",{children:a.name},a.id||a.name))]}),e.jsxs("button",{className:"ocean-filter-btn",children:[e.jsx(Me,{size:13}),"Filters",e.jsx(Le,{size:12})]})]}),e.jsx("section",{className:"ocean-kpis",children:we.map((a,r)=>{const i=a.icon;return e.jsxs("div",{className:`ocean-kpi ${a.className}`,onMouseEnter:()=>V(r),onMouseLeave:()=>V(null),style:{boxShadow:xe===r?"0 20px 42px rgba(20,104,128,.15)":void 0},children:[e.jsxs("div",{className:"kpi-content",children:[e.jsx("div",{className:"kpi-label",children:a.label}),e.jsx("div",{className:"kpi-value",children:a.value}),e.jsxs("div",{className:"kpi-footer",children:[e.jsx(i,{size:10}),a.footer]})]}),e.jsx("div",{className:"kpi-icon",children:e.jsx(i,{size:15})})]},a.label)})}),e.jsxs("section",{className:"ocean-main-grid",children:[e.jsxs("div",{className:"ocean-card",children:[e.jsxs("div",{className:"ocean-card-header",children:[e.jsxs("div",{className:"ocean-card-title",children:[e.jsx("div",{className:"ocean-card-title-icon",children:e.jsx(W,{size:15})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Task Distribution"}),e.jsx("p",{children:"Current workload across workflow stages"})]})]}),e.jsx(Pe,{size:17,color:"#8296A5"})]}),e.jsxs("div",{className:"distribution-body",children:[e.jsx("div",{className:"ocean-donut",children:e.jsxs("div",{className:"donut-inner",children:[e.jsx("div",{className:"donut-total",children:s.total}),e.jsx("div",{className:"donut-label",children:"TOTAL TASKS"})]})}),e.jsx("div",{className:"donut-legend",children:[["To Do",s.pending,"#0e466a"],["In Progress",s.inProgress,"#176b8c"],["Review",s.review,"#2490a8"],["Completed",s.completed,"#63aabc"]].map(([a,r,i])=>e.jsxs("div",{className:"legend-row",children:[e.jsxs("div",{className:"legend-left",children:[e.jsx("div",{className:"legend-dot",style:{background:i}}),e.jsx("span",{className:"legend-name",children:a})]}),e.jsx("span",{className:"legend-number",children:r})]},a))})]})]}),e.jsxs("div",{className:"ocean-card score-panel",children:[e.jsxs("div",{className:"ocean-card-header",children:[e.jsxs("div",{className:"ocean-card-title",children:[e.jsx("div",{className:"ocean-card-title-icon",children:e.jsx(Ee,{size:15})}),e.jsxs("div",{children:[e.jsx("h2",{children:p==="mine"?"My Score":"Team Score"}),e.jsx("p",{children:p==="mine"?`${v}'s productivity performance`:"Whole team productivity performance"})]})]}),e.jsxs("div",{className:"score-toggle",children:[e.jsxs("button",{className:p==="mine"?"active":"",onClick:()=>S("mine"),children:[e.jsx(Ge,{size:9,style:{marginRight:4}}),"MINE"]}),e.jsx("button",{className:p==="team"?"active":"",onClick:()=>S("team"),children:"TEAM"})]})]}),e.jsxs("div",{className:"score-body",children:[e.jsxs("div",{className:"score-main",children:[e.jsx("div",{className:"score-ring",style:{background:`conic-gradient(
                      #9fe2ea ${k.monthly}%,
                      rgba(255,255,255,.10) ${k.monthly}% 100%
                    )`},children:e.jsxs("div",{className:"score-ring-inner",children:[e.jsx("div",{className:"score-number",children:k.monthly}),e.jsx("div",{className:"score-outof",children:"SCORE / 100"})]})}),e.jsxs("div",{className:"score-text",children:[e.jsx("h3",{children:p==="mine"?"My Performance":"Team Performance"}),p==="mine"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"score-chips",children:[e.jsxs("span",{className:"score-chip",children:[e.jsx(ae,{size:9}),w.total," assigned"]}),e.jsxs("span",{className:"score-chip",children:[e.jsx(L,{size:9}),w.completed," completed"]}),e.jsxs("span",{className:"score-chip",children:[e.jsx(B,{size:9}),w.inProgress," active"]}),e.jsxs("span",{className:"score-chip score-chip-alert",children:[e.jsx(P,{size:9}),w.overdue," overdue"]})]}),e.jsxs("p",{children:["Calculated only from tasks assigned to"," ",e.jsx("strong",{children:v})," — completed ÷ tasks touched × 100 for each time window."]})]}):e.jsx("p",{children:"Calculated across all team tasks — completed ÷ tasks touched × 100 for each time window."})]})]}),p==="mine"&&w.total===0&&e.jsxs("div",{className:"score-empty",children:["No tasks assigned to you yet. Your score will appear automatically once tasks are assigned to ",v,"."]}),e.jsxs("div",{className:"score-metrics",children:[e.jsxs("div",{className:"score-metric",children:[e.jsx("span",{children:"Daily"}),e.jsxs("strong",{children:[k.daily,"%"]})]}),e.jsxs("div",{className:"score-metric",children:[e.jsx("span",{children:"Weekly"}),e.jsxs("strong",{children:[k.weekly,"%"]})]}),e.jsxs("div",{className:"score-metric",children:[e.jsx("span",{children:"Monthly"}),e.jsxs("strong",{children:[k.monthly,"%"]})]}),e.jsxs("div",{className:"score-metric",children:[e.jsx("span",{children:"Quarterly"}),e.jsxs("strong",{children:[k.quarterly,"%"]})]})]})]})]})]}),e.jsx(Be,{}),e.jsxs("section",{className:"ocean-card performance",children:[e.jsxs("div",{className:"ocean-card-header",children:[e.jsxs("div",{className:"ocean-card-title",children:[e.jsx("div",{className:"ocean-card-title-icon",children:e.jsx(B,{size:15})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Task Performance"}),e.jsxs("p",{children:["Tasks completed each day · last 7 days ·"," ",p==="mine"?v:"whole team"]})]})]}),e.jsx("select",{className:"ocean-select",children:e.jsx("option",{children:"Last 7 Days"})})]}),e.jsx("div",{className:"performance-body",children:e.jsxs("div",{className:"graph",children:[e.jsxs("div",{className:"graph-lines",children:[e.jsx("div",{className:"graph-line"}),e.jsx("div",{className:"graph-line"}),e.jsx("div",{className:"graph-line"}),e.jsx("div",{className:"graph-line"}),e.jsx("div",{className:"graph-line"})]}),Z.map((a,r)=>{const i=a.value===0?"4px":`${a.value/ye*82}%`;return e.jsxs("div",{className:"graph-column",children:[a.value>0&&e.jsx("span",{className:"graph-count",children:a.value}),e.jsx("div",{className:"graph-bar",style:{height:i,animationDelay:`${r*90}ms`}}),e.jsxs("span",{className:"graph-day",children:[a.day,a.value>0?` · ${a.value}`:""]})]},a.key)})]})})]}),e.jsxs("section",{className:"ocean-bottom-grid",children:[e.jsxs("div",{className:"ocean-card workflow-card",children:[e.jsxs("div",{className:"ocean-card-header",children:[e.jsxs("div",{className:"ocean-card-title",children:[e.jsx("div",{className:"ocean-card-title-icon",children:e.jsx(re,{size:15})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Task Workflow"}),e.jsx("p",{children:"Live movement through each stage"})]})]}),e.jsx(Ye,{size:15,color:"#25afbf"})]}),e.jsxs("div",{className:"workflow",children:[e.jsx("div",{className:"workflow-track",children:e.jsxs("svg",{viewBox:"0 0 1000 80",preserveAspectRatio:"none",children:[e.jsx("path",{className:"workflow-wave-glow",d:"M0,38 C90,4 160,72 250,38 S410,4 500,38 S660,72 750,38 S910,4 1000,38"}),e.jsx("path",{className:"workflow-wave-base",d:"M0,38 C90,4 160,72 250,38 S410,4 500,38 S660,72 750,38 S910,4 1000,38"}),e.jsx("path",{className:"workflow-wave-flow",d:"M0,38 C90,4 160,72 250,38 S410,4 500,38 S660,72 750,38 S910,4 1000,38"})]})}),e.jsxs("div",{className:"workflow-row",children:[e.jsxs("div",{className:"workflow-step",children:[e.jsx("div",{className:"workflow-node",children:e.jsx(Ue,{size:13})}),e.jsx("strong",{children:s.pending}),e.jsx("span",{children:"TO DO"})]}),e.jsxs("div",{className:"workflow-step",children:[e.jsx("div",{className:"workflow-node",children:e.jsx(W,{size:13})}),e.jsx("strong",{children:s.inProgress}),e.jsx("span",{children:"IN PROGRESS"})]}),e.jsxs("div",{className:"workflow-step",children:[e.jsx("div",{className:"workflow-node",children:e.jsx(te,{size:13})}),e.jsx("strong",{children:s.review}),e.jsx("span",{children:"REVIEW"})]}),e.jsxs("div",{className:"workflow-step workflow-step-complete",children:[e.jsx("div",{className:"workflow-node",children:e.jsx(L,{size:13})}),e.jsx("strong",{children:s.completed}),e.jsx("span",{children:"COMPLETED"})]})]})]})]}),e.jsxs("div",{className:"ocean-card",children:[e.jsx("div",{className:"ocean-card-header",children:e.jsxs("div",{className:"ocean-card-title",children:[e.jsx("div",{className:"ocean-card-title-icon",children:e.jsx($e,{size:15})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Task Health"}),e.jsx("p",{children:"Signals that need your attention"})]})]})}),e.jsx("div",{className:"health-grid",children:ke.map(a=>{const r=a.icon;return e.jsxs("div",{className:`health-item ${a.alert?"health-item-alert":""}`,children:[e.jsx("div",{className:"health-item-icon",children:e.jsx(r,{size:14})}),e.jsx("div",{className:"health-number",children:a.value}),e.jsx("div",{className:"health-label",children:a.label})]},a.label)})})]})]}),e.jsxs("section",{className:"ocean-banner ocean-banner-info team-summary",children:[e.jsx(L,{size:15}),e.jsxs("span",{children:[g.length," team member",g.length!==1?"s":""," across"," ",n.length," department",n.length!==1?"s":"",y!=="All Departments"?` · filtered by ${y}`:""," ","· ",w.total," assigned to you"," ","· period: ",b]})]}),e.jsxs("section",{className:"ocean-card task-activity",children:[e.jsxs("div",{className:"ocean-card-header",children:[e.jsxs("div",{className:"ocean-card-title",children:[e.jsx("div",{className:"ocean-card-title-icon",children:e.jsx(W,{size:15})}),e.jsxs("div",{children:[e.jsxs("h2",{children:["Task Activity",F>0&&e.jsxs("span",{className:"activity-new-count",children:[F," new"]})]}),e.jsx("p",{children:"Who changed task status, new assignments, reminders and deadline alerts"})]})]}),F>0&&e.jsx("button",{type:"button",className:"activity-mark-read",onClick:ge,children:"Mark all read"})]}),X.length===0?e.jsx("p",{className:"activity-empty",children:"No task activity yet. When someone changes the status of a task you assigned, it appears here."}):e.jsx("div",{className:"activity-list",children:X.map(a=>{const r=ne[a.type]||ne.task_status;return e.jsxs("div",{className:`activity-item${a.read?"":" unread"}`,children:[e.jsx("span",{className:`activity-badge ${r.tone}`,children:r.label}),e.jsxs("div",{className:"activity-body",children:[a.type==="task_status"?e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:a.actorName})," changed ",e.jsx("strong",{children:a.taskName})," ",e.jsx("span",{className:"activity-from",children:a.fromStatus})," →"," ",e.jsx("strong",{className:"activity-to",children:a.toStatus})]}):a.message,e.jsx("div",{className:"activity-time",children:new Date(a.createdAt).toLocaleString()})]}),!a.read&&e.jsx("span",{className:"activity-dot"})]},a._id)})})]})]})]})};export{va as default};
