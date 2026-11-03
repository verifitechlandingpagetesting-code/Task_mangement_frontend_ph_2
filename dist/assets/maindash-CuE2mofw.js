import{c as Q,r as i,g as xe,j as e,u as Oe,a as Xe,A as se,s as dt,y as te,p as ct,e as pt,i as ft,f as Ve,I as ut,k as Ee,l as mt,m as ht,n as ce,o as xt,R as gt,O as bt,P as Le}from"./index-DdKrgUlZ.js";import{r as wt}from"./index-DmXlAdrY.js";import{B as ae}from"./bell-DaeaMSkj.js";import{X as me}from"./x-CpRqZeGy.js";import{M as qe}from"./message-circle-DZbdconb.js";import{L as he}from"./life-buoy-BOHDUXo6.js";import{T as Ae}from"./triangle-alert-470AK52j.js";import{M as vt,S as Ge}from"./square-check-big-BMGKNrD_.js";import{L as yt}from"./list-checks-rFVf8MV8.js";import{R as kt}from"./rotate-ccw-DZTGlI6M.js";import{A as jt}from"./award-BSdwi4KU.js";import{C as Nt,V as St,a as zt}from"./volume-x-BVgwz91o.js";import{R as Ct}from"./refresh-cw-BTp_wSg-.js";import{C as Et}from"./clipboard-check-9ka9EUCF.js";import{C as Ke}from"./clipboard-list-D7YjNJkj.js";import{S as Lt}from"./sparkles-DY2Y4YoQ.js";import{S as pe}from"./search-BYLJVZob.js";import{L as At}from"./loader-circle-C6iMG4x7.js";import{C as Mt}from"./chevron-down-CO4vTuki.js";import{U as Dt}from"./user-round-D24TWiSQ.js";import{L as It}from"./log-out-DSuh1kPI.js";import{L as Rt}from"./layout-dashboard-C9orGeKS.js";import{U as _t}from"./users-C5Aqy3aj.js";import{C as $t}from"./calendar-days-YATm_8B9.js";import{S as Pt}from"./shield-check-CEPKVIb-.js";import{C as Ft}from"./chart-column-CUheTk5P.js";import{A as Tt}from"./activity-DSl8M825.js";const He={name:"command",size:24,node:[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]};He.node;const Bt=Q(He);const Je={name:"corner-down-left",size:24,node:[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]]};Je.node;const Ut=Q(Je);const Qe={name:"crown",size:24,node:[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]};Qe.node;const Wt=Q(Qe);const Ze={name:"library-big",size:24,node:[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]};Ze.node;const Yt=Q(Ze);const et={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};et.node;const Ot=Q(et);const tt={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};tt.node;const Me=Q(tt),at="notificationSound";let le=null,De=0;const ge=()=>{if(le)return le;const n=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext);return n?(le=new n,le):null},Xt=()=>{const n=ge();n&&n.state==="suspended"&&n.resume().catch(()=>{})};typeof window<"u"&&["pointerdown","keydown"].forEach(n=>window.addEventListener(n,Xt,{passive:!0}));const be=()=>{try{return localStorage.getItem(at)!=="off"}catch{return!0}},Vt=n=>{try{localStorage.setItem(at,n?"on":"off")}catch{}},U=(n,a,r,f,u)=>{const b=n.createGain();b.gain.setValueAtTime(1e-4,r),b.gain.exponentialRampToValueAtTime(u,r+.008),b.gain.exponentialRampToValueAtTime(1e-4,r+f),b.connect(n.destination),[[1,1],[2,.45],[3,.22],[4.2,.12]].forEach(([w,d],c)=>{const x=n.createOscillator(),m=n.createGain();x.type="sine",x.frequency.setValueAtTime(a*w,r),m.gain.setValueAtTime(d,r),m.gain.exponentialRampToValueAtTime(1e-4,r+f/(1+c*.8)),x.connect(m).connect(b),x.start(r),x.stop(r+f+.05)})},qt="/sounds/notification-cue.mp3";let Ie=!1;const Gt=()=>new Promise((n,a)=>{if(Ie)return a(new Error("no cue file"));const r=new Audio(qt);r.volume=.8,r.addEventListener("error",()=>{Ie=!0,a(new Error("no cue file"))},{once:!0}),r.play().then(n,a)}),Re=n=>{const a=ge();if(!a)return;a.state==="suspended"&&a.resume().catch(()=>{});const r=a.currentTime+.01;n==="chat"?U(a,1318.5,r,.7,.22):n==="urgent"?(U(a,1046.5,r,.5,.28),U(a,1046.5,r+.2,.5,.28),U(a,783.99,r+.42,1.2,.3)):(U(a,1046.5,r,1,.26),U(a,783.99,r+.22,1.3,.26))},Kt=({force:n=!1}={})=>{if(!n&&!be())return;const a=ge();if(!a)return;a.state==="suspended"&&a.resume().catch(()=>{});const r=a.currentTime+.02;[523.25,659.25,783.99,1046.5].forEach((f,u)=>U(a,f,r+u*.11,.5,.2)),[523.25,659.25,783.99,1046.5].forEach(f=>U(a,f,r+.5,1.6,.12))},_e=(n="notification",{force:a=!1}={})=>{if(!a&&!be())return;const r=Date.now();if(!(!a&&r-De<800)){if(De=r,n==="urgent"){Re(n);return}Gt().catch(()=>Re(n))}},$e=["#16a6b8","#f59e0b","#ef4444","#22c55e","#6366f1","#ec4899","#facc15"],Ht=()=>{const n=i.useMemo(()=>Array.from({length:90},(a,r)=>({id:r,left:Math.random()*100,delay:Math.random()*.8,duration:2.4+Math.random()*1.8,size:6+Math.random()*7,color:$e[r%$e.length],rotate:Math.random()*360,round:Math.random()>.6})),[]);return e.jsx("div",{className:"cel-confetti","aria-hidden":"true",children:n.map(a=>e.jsx("span",{style:{left:`${a.left}%`,width:a.size,height:a.round?a.size:a.size*.45,background:a.color,borderRadius:a.round?"50%":2,animationDelay:`${a.delay}s`,animationDuration:`${a.duration}s`,transform:`rotate(${a.rotate}deg)`}},a.id))})},Jt=(n,a,r)=>{const[f,u]=i.useState(a);return i.useEffect(()=>{if(!r)return;let b;const w=performance.now(),d=1200,c=x=>{const m=Math.min(1,(x-w)/d);u(Math.round(a+(n-a)*(1-Math.pow(1-m,3)))),m<1&&(b=requestAnimationFrame(c))};return b=requestAnimationFrame(c),()=>cancelAnimationFrame(b)},[n,a,r]),f},Qt=()=>{const[n,a]=i.useState([]),r=n[0]||null,f=i.useRef(null);i.useEffect(()=>{const d=xe(),c=m=>{m&&a(g=>g.some(L=>L.taskId===m.taskId&&L.score===m.score)?g:[...g,m])},x=m=>c(m.detail);return d?.on("task:celebrate",c),window.addEventListener("task:celebrate",x),()=>{d?.off("task:celebrate",c),window.removeEventListener("task:celebrate",x)}},[]),i.useEffect(()=>{if(!r)return;Kt(),window.dispatchEvent(new CustomEvent("score:updated",{detail:r})),f.current?.focus();const d=c=>c.key==="Escape"&&a(x=>x.slice(1));return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[r]);const u=Jt(r?.score||0,Math.max(0,(r?.score||0)-(r?.earned||0)),!!r);if(!r)return null;const b=()=>a(d=>d.slice(1)),w=r.level||{};return e.jsxs("div",{className:"cel-overlay",role:"dialog","aria-modal":"true","aria-label":"Task completed",onClick:b,children:[e.jsx("style",{children:`
        .cel-overlay{position:fixed;inset:0;z-index:20000;display:flex;align-items:center;justify-content:center;padding:16px;
          background:radial-gradient(circle at 50% 40%,rgba(14,116,144,.55),rgba(6,24,38,.85));animation:celFade .25s ease-out}
        .cel-confetti{position:fixed;inset:0;overflow:hidden;pointer-events:none}
        .cel-confetti span{position:absolute;top:-20px;animation-name:celFall;animation-timing-function:linear;animation-iteration-count:1;animation-fill-mode:forwards}
        .cel-card{position:relative;width:min(420px,100%);padding:30px 24px 22px;border-radius:24px;text-align:center;color:#fff;
          background:linear-gradient(160deg,#0b4f6c,#0f9b91);box-shadow:0 30px 80px rgba(0,0,0,.45),inset 0 0 0 2px rgba(255,255,255,.18);
          animation:celPop .55s cubic-bezier(.2,1.6,.4,1)}
        .cel-trophy{font-size:64px;line-height:1;filter:drop-shadow(0 6px 14px rgba(0,0,0,.35));animation:celBounce 1.2s ease-in-out infinite}
        .cel-win{margin:10px 0 2px;font-size:34px;font-weight:900;letter-spacing:.06em;
          background:linear-gradient(90deg,#fde68a,#fff,#fde68a);-webkit-background-clip:text;background-clip:text;color:transparent;
          background-size:200% 100%;animation:celShine 2s linear infinite}
        .cel-sub{margin:0;font-size:13px;opacity:.9}
        .cel-task{margin:6px auto 0;max-width:90%;font-size:14px;font-weight:700;overflow-wrap:anywhere}
        .cel-points{display:inline-block;margin:16px 0 4px;padding:6px 16px;border-radius:999px;background:#facc15;color:#422006;font-size:20px;font-weight:900;
          box-shadow:0 6px 18px rgba(250,204,21,.45);animation:celPop .6s .25s both cubic-bezier(.2,1.6,.4,1)}
        .cel-score{margin-top:10px;font-size:13px;opacity:.9}
        .cel-score strong{display:block;font-size:40px;font-weight:900;line-height:1.1}
        .cel-level{margin:12px auto 0;max-width:300px}
        .cel-level-row{display:flex;justify-content:space-between;font-size:11px;opacity:.9;margin-bottom:5px}
        .cel-bar{height:9px;border-radius:999px;background:rgba(255,255,255,.2);overflow:hidden}
        .cel-bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#fde68a,#facc15);animation:celGrow 1.2s .3s both ease-out}
        .cel-levelup{display:inline-block;margin-top:14px;padding:6px 14px;border-radius:10px;background:rgba(255,255,255,.16);font-weight:900;font-size:15px;animation:celPulse 1s ease-in-out infinite}
        .cel-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:14px}
        .cel-badge{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:12px;background:rgba(255,255,255,.14);font-size:12px;font-weight:700;animation:celPop .5s both cubic-bezier(.2,1.6,.4,1)}
        .cel-badge b{font-size:18px}
        .cel-btn{margin-top:20px;padding:11px 26px;border:0;border-radius:12px;background:#fff;color:#0b4f6c;font-weight:900;font-size:14px;cursor:pointer;box-shadow:0 8px 20px rgba(0,0,0,.25)}
        .cel-btn:focus-visible{outline:3px solid #facc15;outline-offset:2px}
        @keyframes celFall{to{transform:translateY(110vh) rotate(720deg)}}
        @keyframes celPop{from{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}
        @keyframes celFade{from{opacity:0}to{opacity:1}}
        @keyframes celBounce{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-10px) rotate(4deg)}}
        @keyframes celShine{to{background-position:-200% 0}}
        @keyframes celGrow{from{width:0}}
        @keyframes celPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}
        @media (prefers-reduced-motion: reduce){
          .cel-overlay *,.cel-card{animation:none!important}
          .cel-confetti{display:none}
        }
      `}),e.jsx(Ht,{}),e.jsxs("div",{className:"cel-card",onClick:d=>d.stopPropagation(),children:[e.jsx("div",{className:"cel-trophy",children:"🏆"}),e.jsx("div",{className:"cel-win",children:"YOU WIN!"}),e.jsxs("p",{className:"cel-sub",children:["Task completed",r.approvedBy?` · approved by ${r.approvedBy}`:""]}),e.jsxs("div",{className:"cel-task",children:["“",r.taskName,"”"]}),e.jsxs("div",{className:"cel-points",children:["+",r.earned," XP"]}),e.jsxs("div",{className:"cel-score",children:["Your score",e.jsx("strong",{children:u})]}),e.jsxs("div",{className:"cel-level",children:[e.jsxs("div",{className:"cel-level-row",children:[e.jsxs("span",{children:[w.icon," ",w.name]}),e.jsx("span",{children:w.next?`${w.toNext} to ${w.next}`:"Max level"})]}),e.jsx("div",{className:"cel-bar",children:e.jsx("i",{style:{width:`${w.progress??100}%`}})})]}),r.levelUp&&e.jsxs("div",{className:"cel-levelup",children:["⬆ LEVEL UP — ",w.icon," ",w.name,"!"]}),r.newBadges?.length>0&&e.jsx("div",{className:"cel-badges",children:r.newBadges.map((d,c)=>e.jsxs("span",{className:"cel-badge",style:{animationDelay:`${.4+c*.15}s`},title:d.description,children:[e.jsx("b",{children:d.icon})," New badge: ",d.name]},d.key))}),e.jsx("button",{type:"button",className:"cel-btn",ref:f,onClick:b,children:n.length>1?`Next (${n.length-1} more)`:"Awesome!"})]})]})},Pe="pushPromptDismissed",Fe={task_assigned:Et,task_reassigned:Ct,task_status:Nt,task_completed:jt,task_rework:kt,task_subtask:yt,task_viewed:vt,task_reminder:Ae,task_overdue:Ae,support_ticket:he,support_reply:he,chat:qe},fe={task_assigned:"New task assigned",task_reassigned:"Task reassigned",task_status:"Task status updated",task_completed:"Your task is completed 🎉",task_rework:"Rework requested",task_subtask:"New subtask assigned",task_viewed:"Task opened from email",task_reminder:"Task reminder",task_overdue:"Task deadline reached",support_ticket:"New support ticket",support_reply:"Support ticket update"},Te=(n,a)=>n.type==="support_ticket"?a==="SuperAdmin"?"/superadmin/dashboard":"/dashboard/support":n.type==="support_reply"?"/dashboard/support":"/dashboard/tasks",ue=n=>n.type==="task_status"&&n.actorName?`${n.actorName} changed "${n.taskName}" ${n.fromStatus} → ${n.toStatus}`:n.message,Be=n=>{const a=Math.max(1,Math.round((Date.now()-new Date(n).getTime())/1e3));return a<60?"just now":a<3600?`${Math.floor(a/60)} min ago`:a<86400?`${Math.floor(a/3600)} h ago`:new Date(n).toLocaleDateString()},ne=()=>{try{return JSON.parse(localStorage.getItem("user")||"null")}catch{return null}},Ue=(n,a,r)=>{const f=ne();if(!(!("Notification"in window)||Notification.permission!=="granted")&&f?.preferences?.desktopNotifications!==!1&&document.hidden&&!ft())try{const u=new Notification(n,{body:a,tag:`${n}-${a}`.slice(0,64)});u.onclick=()=>{window.focus(),r?.(),u.close()}}catch{}},Zt=({buttonClassName:n="header-action notification-button"})=>{const a=Oe(),r=Xe(),[f,u]=i.useState(!1),[b,w]=i.useState([]),[d,c]=i.useState(0),[x,m]=i.useState(typeof window<"u"&&"Notification"in window?Notification.permission:"unsupported"),[g,L]=i.useState(be),[R,W]=i.useState(()=>{try{return localStorage.getItem(Pe)==="1"}catch{return!1}}),[A,h]=i.useState(!1),j=i.useRef(null),X=i.useRef(null),V=i.useRef(r.pathname);V.current=r.pathname;const q=i.useCallback(o=>{_e(o),h(!0),clearTimeout(j.current),j.current=setTimeout(()=>h(!1),900)},[]);i.useEffect(()=>()=>clearTimeout(j.current),[]);const G=()=>{const o=!g;L(o),Vt(o),o&&_e("notification",{force:!0})},[N,z]=i.useState(0),K=()=>`unreadPopupShown:${(localStorage.getItem("token")||"").slice(-16)}`,M=i.useCallback(async()=>{try{const o=await se.get("/api/notifications",{params:{limit:20}});w(o.data.data||[]);const p=o.data.unread||0;c(p);try{p>0&&!sessionStorage.getItem(K())&&(sessionStorage.setItem(K(),"1"),z(p))}catch{}}catch{}},[]);i.useEffect(()=>{if(!N)return;const o=p=>p.key==="Escape"&&z(0);return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[N]),i.useEffect(()=>{M();const o=xe();if(!o)return;const p=k=>{window.dispatchEvent(new CustomEvent("realtime:notification",{detail:k})),w(ee=>[k,...ee.filter($=>$._id!==k._id)].slice(0,30)),c(ee=>ee+1);const C=fe[k.type]||"Notification",P=ue(k),F=()=>a(Te(k,ne()?.role)),I=k.type==="task_overdue"||k.type==="task_reminder"||k.type==="task_rework";k.type!=="task_completed"&&q(I?"urgent":"notification"),(I?te.warn:te.info)(e.jsxs("div",{style:{cursor:"pointer"},children:[e.jsx("strong",{style:{display:"block",fontSize:13},children:C}),e.jsx("span",{style:{fontSize:12},children:P})]}),{onClick:F,autoClose:7e3,toastId:k._id}),Ue(C,P,F)},D=k=>{if(V.current.startsWith("/dashboard/chats"))return;const C=k?.message||{},P=C.sender?.name||"Someone",F=String(C.text||(C.attachments?.length?"📎 Attachment":"New message")).slice(0,140),I=()=>a("/dashboard/chats");q("chat"),te(e.jsxs("div",{style:{cursor:"pointer"},children:[e.jsxs("strong",{style:{display:"block",fontSize:13},children:["💬 ",P]}),e.jsx("span",{style:{fontSize:12},children:F})]}),{onClick:I,autoClose:6e3,toastId:`chat-${C._id||Date.now()}`}),Ue(`New message from ${P}`,F,I)};return o.on("notification:new",p),o.on("chat:message:new",D),o.on("connect",M),()=>{o.off("notification:new",p),o.off("chat:message:new",D),o.off("connect",M)}},[M,a,q]),i.useEffect(()=>{if(!f)return;const o=p=>X.current&&!X.current.contains(p.target)&&u(!1);return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[f]);const oe=async()=>{try{await se.patch("/api/notifications/read-all"),w(o=>o.map(p=>({...p,read:!0}))),c(0)}catch{}},ie=async o=>{u(!1),o.read||(w(p=>p.map(D=>D._id===o._id?{...D,read:!0}:D)),c(p=>Math.max(0,p-1)),se.patch(`/api/notifications/${o._id}/read`).catch(()=>{})),a(Te(o,ne()?.role))};i.useEffect(()=>{dt(ne())},[]);const Z=async()=>{if(!("Notification"in window))return;const o=await pt();if(m("Notification"in window?Notification.permission:"unsupported"),o==="granted"){W(!0);try{await se.put("/api/auth/me/preferences",{desktopNotifications:!0});const p=ne();p&&localStorage.setItem("user",JSON.stringify({...p,preferences:{...p.preferences||{},desktopNotifications:!0}}))}catch{}te.success("Push notifications are on for this browser.")}else o==="denied"&&te.info("Notifications are blocked. Allow them from the lock icon in the address bar.")},de=()=>{W(!0);try{localStorage.setItem(Pe,"1")}catch{}},_=x==="default"&&!R&&ct();return e.jsxs("div",{ref:X,style:{position:"relative"},children:[N>0&&wt.createPortal(e.jsxs("div",{className:"unp-overlay",onMouseDown:o=>o.target===o.currentTarget&&z(0),children:[e.jsx("style",{children:`
              .unp-overlay{position:fixed;inset:0;z-index:11500;display:flex;justify-content:center;align-items:flex-start;padding:28px 16px;
                background:rgba(8,42,69,.42);backdrop-filter:blur(3px);animation:unpFade .25s ease-out}
              .unp-card{position:relative;width:min(460px,100%);border-radius:22px;overflow:hidden;background:#fff;
                box-shadow:0 30px 80px rgba(8,42,69,.35),0 0 0 1px rgba(22,166,184,.15);animation:unpIn .55s cubic-bezier(.2,1.4,.4,1)}
              .unp-head{position:relative;display:flex;align-items:center;gap:14px;padding:20px 20px 18px;color:#fff;overflow:hidden;
                background:linear-gradient(135deg,#123f67 0%,#14577d 48%,#0f8a9b 100%)}
              .unp-head::before,.unp-head::after{content:"";position:absolute;border-radius:50%;background:rgba(255,255,255,.08)}
              .unp-head::before{width:160px;height:160px;right:-40px;top:-70px;animation:unpFloat 6s ease-in-out infinite}
              .unp-head::after{width:90px;height:90px;right:70px;bottom:-55px;animation:unpFloat 7s ease-in-out infinite reverse}
              .unp-bell{position:relative;flex-shrink:0;width:48px;height:48px;border-radius:16px;display:flex;align-items:center;justify-content:center;
                background:rgba(255,255,255,.14);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25)}
              .unp-bell svg{animation:unpRing 1.4s ease-in-out .5s 2;transform-origin:50% 3px}
              .unp-count{position:absolute;top:-7px;right:-7px;min-width:22px;height:22px;padding:0 6px;border-radius:999px;display:flex;align-items:center;justify-content:center;
                background:#ff6b6b;color:#fff;font-size:11px;font-weight:900;box-shadow:0 0 0 3px #14577d;animation:unpPulse 1.8s ease-out .8s infinite}
              .unp-title{position:relative;flex:1;min-width:0}
              .unp-title strong{display:block;font-size:17px;letter-spacing:.01em}
              .unp-title span{display:block;margin-top:2px;font-size:12.5px;color:rgba(255,255,255,.82)}
              .unp-close{position:relative;display:flex;border:0;background:rgba(255,255,255,.12);color:#fff;border-radius:10px;padding:6px;cursor:pointer;transition:background .2s}
              .unp-close:hover{background:rgba(255,255,255,.24)}
              .unp-list{display:flex;flex-direction:column;gap:6px;padding:14px 16px 4px;max-height:260px;overflow-y:auto}
              .unp-item{display:flex;align-items:flex-start;gap:10px;width:100%;text-align:left;padding:10px 12px;border:1px solid #e3eff3;border-radius:14px;
                background:#f7fbfc;cursor:pointer;opacity:0;animation:unpItem .4s ease-out forwards;transition:transform .15s,border-color .15s,background .15s}
              .unp-item:hover{transform:translateX(3px);border-color:#9fdde1;background:#eefafb}
              .unp-icon{flex-shrink:0;width:30px;height:30px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#e7f8fa;color:#08798c}
              .unp-item b{display:block;font-size:12.5px;color:#123b5d}
              .unp-item small{display:block;margin-top:1px;font-size:12px;color:#5f7f8f;line-height:1.35;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
              .unp-time{flex-shrink:0;font-size:10.5px;color:#8aa3b0;white-space:nowrap}
              .unp-more{padding:2px 4px 0;font-size:11.5px;color:#6e8799}
              .unp-actions{display:flex;gap:10px;justify-content:flex-end;padding:14px 16px 16px}
              .unp-btn{border:0;border-radius:12px;padding:10px 16px;font-size:13px;font-weight:800;cursor:pointer;transition:transform .15s,box-shadow .15s}
              .unp-btn.ghost{background:#f0f5f7;color:#4a6f83}
              .unp-btn.primary{color:#fff;background:linear-gradient(135deg,#16a6b8,#08798c);box-shadow:0 10px 22px rgba(22,166,184,.32)}
              .unp-btn:hover{transform:translateY(-1px)}
              .unp-btn:focus-visible,.unp-close:focus-visible,.unp-item:focus-visible{outline:3px solid #7fe3ee;outline-offset:2px}
              @keyframes unpFade{from{opacity:0}to{opacity:1}}
              @keyframes unpIn{from{opacity:0;transform:translateY(-24px) scale(.94)}to{opacity:1;transform:none}}
              @keyframes unpItem{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
              @keyframes unpRing{0%,100%{transform:rotate(0)}15%{transform:rotate(18deg)}30%{transform:rotate(-15deg)}45%{transform:rotate(11deg)}60%{transform:rotate(-8deg)}75%{transform:rotate(4deg)}}
              @keyframes unpPulse{0%{box-shadow:0 0 0 3px #14577d,0 0 0 3px rgba(255,107,107,.6)}80%,100%{box-shadow:0 0 0 3px #14577d,0 0 0 12px rgba(255,107,107,0)}}
              @keyframes unpFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}
              @media (prefers-reduced-motion: reduce){
                .unp-overlay,.unp-card,.unp-item,.unp-bell svg,.unp-count,.unp-head::before,.unp-head::after{animation:none!important;opacity:1}
              }
            `}),e.jsxs("div",{className:"unp-card",role:"dialog","aria-modal":"true","aria-labelledby":"unread-popup-title",children:[e.jsxs("div",{className:"unp-head",children:[e.jsxs("span",{className:"unp-bell","aria-hidden":"true",children:[e.jsx(ae,{size:22}),e.jsx("span",{className:"unp-count",children:N>99?"99+":N})]}),e.jsxs("span",{className:"unp-title",children:[e.jsx("strong",{id:"unread-popup-title",children:"Unread Notifications"}),e.jsxs("span",{children:["You have ",N," unread notification",N===1?"":"s"," waiting for you"]})]}),e.jsx("button",{type:"button",className:"unp-close",onClick:()=>z(0),"aria-label":"Close",children:e.jsx(me,{size:16})})]}),e.jsxs("div",{className:"unp-list",children:[b.filter(o=>!o.read).slice(0,3).map((o,p)=>{const D=Fe[o.type]||ae;return e.jsxs("button",{type:"button",className:"unp-item",style:{animationDelay:`${.25+p*.12}s`},onClick:()=>{z(0),ie(o)},children:[e.jsx("span",{className:"unp-icon",children:e.jsx(D,{size:15})}),e.jsxs("span",{style:{flex:1,minWidth:0},children:[e.jsx("b",{children:fe[o.type]||"Notification"}),e.jsx("small",{children:ue(o)})]}),e.jsx("span",{className:"unp-time",children:Be(o.createdAt)})]},o._id)}),N>3&&e.jsxs("div",{className:"unp-more",children:["+ ",N-3," more"]})]}),e.jsxs("div",{className:"unp-actions",children:[e.jsx("button",{type:"button",className:"unp-btn ghost",onClick:()=>z(0),children:"Later"}),e.jsx("button",{type:"button",className:"unp-btn primary",autoFocus:!0,onClick:()=>{z(0),u(!0)},children:"View all"})]})]})]}),document.body),e.jsx(Qt,{}),_&&e.jsxs("div",{style:y.prompt,role:"dialog","aria-label":"Enable push notifications",children:[e.jsx("span",{style:y.promptIcon,children:e.jsx(ae,{size:18})}),e.jsxs("span",{style:{flex:1,minWidth:0},children:[e.jsx("strong",{style:{display:"block",fontSize:13,color:"#123B5D"},children:"Turn on push notifications?"}),e.jsx("span",{style:{fontSize:12,color:"#5f7f8f"},children:"Get tasks, reviews, support replies and chat messages even when the app is closed."}),e.jsxs("span",{style:{display:"flex",gap:8,marginTop:10},children:[e.jsx("button",{type:"button",style:y.promptYes,onClick:Z,children:"Enable"}),e.jsx("button",{type:"button",style:y.promptNo,onClick:de,children:"Not now"})]})]})]}),e.jsx("style",{children:`
        @keyframes bellRing { 0%,100% { transform: rotate(0); } 15% { transform: rotate(16deg); } 30% { transform: rotate(-14deg); } 45% { transform: rotate(10deg); } 60% { transform: rotate(-8deg); } 75% { transform: rotate(4deg); } }
        .bell-ringing { animation: bellRing .9s ease-in-out; transform-origin: 50% 2px; }
        @media (prefers-reduced-motion: reduce) { .bell-ringing { animation: none; } }
      `}),e.jsxs("button",{type:"button",className:n,"aria-label":d?`${d} unread notifications`:"Notifications","aria-expanded":f,onClick:()=>u(o=>!o),children:[e.jsx(ae,{size:17,strokeWidth:2,className:A?"bell-ringing":void 0}),d>0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{style:y.badge,children:d>99?"99+":d}),e.jsx("span",{className:"notification-pulse"})]})]}),f&&e.jsxs("div",{style:y.panel,role:"dialog","aria-label":"Notifications",children:[e.jsxs("div",{style:y.head,children:[e.jsx("strong",{children:"Notifications"}),e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:10},children:[d>0&&e.jsx("button",{type:"button",style:y.link,onClick:oe,children:"Mark all read"}),e.jsx("button",{type:"button",style:y.sound,onClick:G,title:g?"Sound on — click to mute":"Sound off — click to turn on","aria-label":g?"Mute notification sound":"Turn on notification sound","aria-pressed":g,children:g?e.jsx(St,{size:15}):e.jsx(zt,{size:15})})]})]}),x==="default"&&e.jsx("button",{type:"button",style:y.enable,onClick:Z,children:"🔔 Turn on push notifications (even when the app is closed)"}),e.jsxs("div",{style:y.list,children:[b.length===0&&e.jsx("div",{style:y.empty,children:"You're all caught up."}),b.map(o=>{const p=Fe[o.type]||ae;return e.jsxs("button",{type:"button",onClick:()=>ie(o),style:{...y.item,background:o.read?"#fff":"#F2FBFC"},children:[e.jsx("span",{style:y.icon,children:e.jsx(p,{size:14})}),e.jsxs("span",{style:{flex:1,minWidth:0,textAlign:"left"},children:[e.jsx("span",{style:y.title,children:fe[o.type]||"Notification"}),e.jsx("span",{style:y.text,children:ue(o)}),e.jsx("span",{style:y.time,children:Be(o.createdAt)})]}),!o.read&&e.jsx("span",{style:y.dot})]},o._id)})]})]})]})},y={badge:{position:"absolute",top:-4,right:-4,minWidth:17,height:17,padding:"0 4px",borderRadius:999,background:"#e11d48",color:"#fff",fontSize:10,fontWeight:800,lineHeight:"17px",textAlign:"center",boxShadow:"0 0 0 2px #fff"},panel:{position:"absolute",right:0,top:"calc(100% + 10px)",width:360,maxWidth:"calc(100vw - 24px)",zIndex:1200,background:"#fff",borderRadius:16,border:"1px solid #D5E7EE",boxShadow:"0 24px 60px rgba(6,59,70,.18)",overflow:"hidden"},head:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 14px",borderBottom:"1px solid #EEF5F6",fontSize:14,color:"#123B5D"},sound:{border:"none",background:"transparent",color:"#0b8f87",cursor:"pointer",display:"flex",padding:2},link:{border:"none",background:"transparent",color:"#0b8f87",fontSize:12,fontWeight:700,cursor:"pointer"},prompt:{position:"fixed",right:16,bottom:16,zIndex:12e3,display:"flex",gap:12,width:"min(360px, calc(100vw - 32px))",padding:14,borderRadius:16,background:"#fff",border:"1px solid #d5e7ee",boxShadow:"0 18px 44px rgba(18,59,93,.18)",textAlign:"left"},promptIcon:{flexShrink:0,width:36,height:36,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",background:"#E8F7F8",color:"#0b8f87"},promptYes:{border:0,borderRadius:10,padding:"7px 14px",background:"linear-gradient(135deg,#16a6b8,#08798c)",color:"#fff",fontWeight:800,fontSize:12,cursor:"pointer"},promptNo:{border:"1px solid #d5e7ee",borderRadius:10,padding:"7px 14px",background:"#fff",color:"#5f7f8f",fontWeight:700,fontSize:12,cursor:"pointer"},enable:{width:"100%",border:"none",borderBottom:"1px solid #EEF5F6",background:"#FFFBF0",color:"#8a5a00",fontSize:12,padding:"9px 14px",cursor:"pointer",textAlign:"left"},list:{maxHeight:420,overflowY:"auto"},empty:{padding:20,fontSize:13,color:"#6E8799",textAlign:"center"},item:{width:"100%",display:"flex",gap:10,alignItems:"flex-start",padding:"10px 14px",border:"none",borderBottom:"1px solid #F1F6F8",cursor:"pointer"},icon:{width:28,height:28,flexShrink:0,borderRadius:9,background:"#E8F7F8",color:"#0b8f87",display:"flex",alignItems:"center",justifyContent:"center"},title:{display:"block",fontSize:12,fontWeight:800,color:"#123B5D"},text:{display:"block",fontSize:12,color:"#3d5a68",lineHeight:1.4,marginTop:1,wordBreak:"break-word"},time:{display:"block",fontSize:10,color:"#8aa1ad",marginTop:3},dot:{width:8,height:8,borderRadius:"50%",background:"#16A6B8",marginTop:6,flexShrink:0}},We="http://localhost:5000".replace(/\/+$/,""),ea=({navLinks:n=[],activeLink:a,handleNavClick:r,menuOpen:f,setMenuOpen:u,isMobile:b=!1,isTablet:w=!1})=>{const[d,c]=i.useState(!1),[x,m]=i.useState(!1),[g,L]=i.useState({}),[R,W]=i.useState(0),[A,h]=i.useState(""),[j,X]=i.useState({tasks:[],meetings:[],loaded:!1}),[V,q]=i.useState(!1),[G,N]=i.useState(0),z=i.useRef(null),K=i.useRef(null),M=i.useRef(new Map),[oe,ie]=i.useState({mobile:typeof window<"u"&&window.innerWidth<=767,tablet:typeof window<"u"&&window.innerWidth>=768&&window.innerWidth<=1100});i.useEffect(()=>{const t=()=>{ie({mobile:window.innerWidth<=767,tablet:window.innerWidth>=768&&window.innerWidth<=1100})};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const Z=b||oe.mobile,de=w||oe.tablet,_=Z||de;i.useEffect(()=>{const t=()=>{try{L(JSON.parse(localStorage.getItem("user")||"{}"))}catch{L({})}};return t(),window.addEventListener("storage",t),window.addEventListener("user-updated",t),()=>{window.removeEventListener("storage",t),window.removeEventListener("user-updated",t)}},[]);const o=i.useMemo(()=>String(g?.role||"").trim().toLowerCase(),[g]);i.useMemo(()=>["admin","superadmin"].includes(o),[o]);const p=i.useMemo(()=>g?.name||g?.fullName||g?.username||"User",[g]),D=i.useMemo(()=>g?.email||"no-email@Blizzboard.app",[g]),k=i.useMemo(()=>o==="superadmin"?"Super Admin":o==="admin"?"Administrator":o==="manager"?"Manager":"Team Member",[o]),C=i.useMemo(()=>Ve(g,"settings","view"),[g]),P=i.useMemo(()=>{const t=String(p||"").trim();return t?t.charAt(0).toUpperCase():"U"},[p]),F="/dashboard",I="/dashboard/settings",ee=I,$=i.useMemo(()=>{let t=Array.isArray(n)?[...n]:[];return!t.some(v=>String(v?.label||"").trim().toLowerCase()==="settings")&&C&&t.push({label:"Settings",path:I,icon:Me}),t},[n,C,I]),we=t=>$.some(s=>s.path===t),nt=async()=>{if(j.loaded||V)return;const t=localStorage.getItem("token");if(!t)return;q(!0);const s={Authorization:`Bearer ${t}`},v=(H,l)=>l?Ee.get(`${We}${H}`,{headers:s}).then(Y=>Array.isArray(Y.data?.data)?Y.data.data:[]):Promise.resolve([]),[S,B]=await Promise.allSettled([v("/api/tasks",we("/dashboard/tasks")),v("/api/meetings",we("/dashboard/mom"))]);X({tasks:S.status==="fulfilled"?S.value:[],meetings:B.status==="fulfilled"?B.value:[],loaded:!0}),q(!1)},re=i.useMemo(()=>{const t=A.trim().toLowerCase(),s=(...l)=>l.some(Y=>String(Y||"").toLowerCase().includes(t));if(!t)return $.slice(0,6).map(l=>({key:`page-${l.path}`,kind:"page",title:l.label,subtitle:"Page",path:l.path,icon:l.icon}));const v=$.filter(l=>s(l.label)).map(l=>({key:`page-${l.path}`,kind:"page",title:l.label,subtitle:"Page",path:l.path,icon:l.icon})),S=new Set,B=j.tasks.filter(l=>s(l.name,l.referenceId,l.description,l.assignedUser,l.department)).filter(l=>l.taskGroupId?S.has(l.taskGroupId)?!1:(S.add(l.taskGroupId),!0):!0).slice(0,6).map(l=>({key:`task-${l.id}`,kind:"task",title:l.name||"Untitled task",subtitle:[l.status,l.dueDate&&`Due ${l.dueDate}`,l.assignedUser].filter(Boolean).join(" · "),path:"/dashboard/tasks",query:l.name,icon:Ge})),H=j.meetings.filter(l=>s(l.title,l.agenda,l.description,l.location)).slice(0,5).map(l=>({key:`meeting-${l._id}`,kind:"meeting",title:l.title||"Untitled meeting",subtitle:[l.meetingDate&&new Date(l.meetingDate).toLocaleDateString(),l.status].filter(Boolean).join(" · ")||"Meeting",path:"/dashboard/mom",query:l.title,icon:Ke}));return[...v,...B,...H]},[A,j,$]);i.useEffect(()=>N(0),[A]);const ve=()=>{m(!1),c(!0),nt()},ye=()=>{c(!1),h("")},ke=t=>{if(t){if(ye(),!t.query){T(t.path);return}T(`${t.path}?search=${encodeURIComponent(t.query)}`),window.dispatchEvent(new CustomEvent("workspace-search",{detail:{path:t.path,query:t.query}}))}},ot=t=>{t.key==="ArrowDown"?(t.preventDefault(),N(s=>Math.min(s+1,re.length-1))):t.key==="ArrowUp"?(t.preventDefault(),N(s=>Math.max(s-1,0))):t.key==="Enter"&&(t.preventDefault(),ke(re[G]))};i.useEffect(()=>{const t=s=>{(s.ctrlKey||s.metaKey)&&s.key.toLowerCase()==="k"&&(s.preventDefault(),ve())};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)}),i.useEffect(()=>{const t=()=>X(s=>({...s,loaded:!1}));return window.addEventListener("realtime:notification",t),()=>window.removeEventListener("realtime:notification",t)},[]),i.useEffect(()=>{let t=!1,s;const v=localStorage.getItem("token");if(M.current.clear(),W(0),!v)return;const S=()=>{const E=[...M.current.values()].reduce((J,O)=>J+O,0);W(E)},B=async()=>{try{const E=await Ee.get(`${We}/api/chat/conversations`,{headers:{Authorization:`Bearer ${v}`}});if(t)return;const J=Array.isArray(E.data?.conversations)?E.data.conversations:[],O=new Map;J.forEach(Se=>{const ze=String(Se?._id||""),Ce=Math.max(0,Number(Se?.unreadCount)||0);ze&&Ce>0&&O.set(ze,Ce)}),M.current=O,S()}catch(E){t||console.error("Unable to load chat unread count:",E.response?.data?.message||E.message)}};if(s=xe(),!s)return;const H=E=>{if(!E?.conversationId||t)return;const J=String(E.conversationId),O=Math.max(0,Number(E.unreadCount)||0);O>0?M.current.set(J,O):M.current.delete(J),S()},l=()=>{B()},Y=()=>{B()};return s.on("chat:unread:update",H),s.on("chat:message:new",l),s.on("connect",Y),B(),()=>{t=!0,s&&(s.off("chat:unread:update",H),s.off("chat:message:new",l),s.off("connect",Y))}},[]),i.useEffect(()=>{const t=s=>{z.current&&!z.current.contains(s.target)&&m(!1),K.current&&!K.current.contains(s.target)&&(c(!1),h(""))};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]),i.useEffect(()=>{const t=s=>{s.key==="Escape"&&(m(!1),c(!1),h(""))};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[]),i.useEffect(()=>{!_&&f&&typeof u=="function"&&u(!1)},[_,f,u]);const T=t=>{m(!1),c(!1),typeof r=="function"&&r(t)},it=t=>{t.preventDefault(),t.stopPropagation(),c(!1),m(s=>!s)},rt=()=>{m(!1),c(!1),typeof u=="function"&&u(!1),mt(),ht(),localStorage.removeItem("user"),localStorage.removeItem("token"),sessionStorage.clear(),window.location.replace("/login")},st=t=>{t.preventDefault(),t.stopPropagation(),d?ye():ve()},lt=()=>{typeof u=="function"&&(m(!1),c(!1),u(t=>!t))},je=t=>{const s=typeof window<"u"?window.location.pathname:"";return a===t.label||s===t.path},Ne=t=>!(String(t?.label||"").trim().toLowerCase()==="chat")||R<=0?null:e.jsx("span",{className:"chat-unread-badge","aria-label":`${R} unread messages`,title:`${R} unread messages`,children:R>99?"99+":R});return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"dashboard-header",children:[e.jsxs("div",{className:"header-top",children:[e.jsxs("div",{className:"header-left",children:[_&&e.jsx("button",{type:"button",className:"mobile-menu-button",onClick:lt,"aria-label":"Toggle navigation","aria-expanded":f,children:f?e.jsx(me,{size:20,strokeWidth:2.2}):e.jsx(Ot,{size:20,strokeWidth:2.2})}),e.jsxs("div",{className:"brand-wrapper",onClick:()=>T(F),role:"button",tabIndex:0,onKeyDown:t=>{t.key==="Enter"&&T(F)},children:[e.jsxs("div",{className:"brand-logo",children:[e.jsx("div",{className:"brand-logo-shine"}),e.jsx("div",{className:"brand-logo-ring"}),e.jsx(Lt,{size:21,strokeWidth:2.3})]}),e.jsxs("div",{className:"brand-text",children:[e.jsxs("div",{className:"brand-title",children:["Blizz ",e.jsx("span",{children:"Board"})]}),e.jsx("div",{className:"brand-subtitle",children:"TASK MANAGEMENT"})]})]})]}),e.jsxs("div",{className:"header-right",children:[!Z&&e.jsxs("div",{className:`search-wrapper ${d?"search-is-open":""}`,ref:K,children:[d&&e.jsxs("div",{className:"search-panel",children:[e.jsxs("div",{className:"search-input-wrapper",children:[e.jsx(pe,{size:15,strokeWidth:2}),e.jsx("input",{autoFocus:!0,type:"text",placeholder:"Search pages, tasks, meetings...",value:A,onChange:t=>h(t.target.value),onKeyDown:ot,"aria-label":"Search workspace","aria-controls":"workspace-search-results"}),V?e.jsx(At,{size:14,className:"search-spin"}):e.jsx("span",{className:"search-shortcut",children:e.jsx(Bt,{size:10})})]}),e.jsxs("div",{className:"search-results",id:"workspace-search-results",role:"listbox",children:[!A.trim()&&e.jsx("div",{className:"search-group-label",children:"Go to"}),re.length===0?e.jsx("div",{className:"search-empty",children:V?"Searching...":`No results for “${A.trim()}”`}):re.map((t,s)=>{const v=t.icon||pe;return e.jsxs("button",{type:"button",role:"option","aria-selected":s===G,className:`search-result ${s===G?"is-active":""}`,onMouseEnter:()=>N(s),onClick:()=>ke(t),children:[e.jsx("span",{className:`search-result-icon kind-${t.kind}`,children:e.jsx(v,{size:14})}),e.jsxs("span",{className:"search-result-text",children:[e.jsx("span",{className:"search-result-title",children:t.title}),e.jsx("span",{className:"search-result-sub",children:t.subtitle})]}),s===G&&e.jsx(Ut,{size:13,className:"search-enter"})]},t.key)})]})]}),e.jsx("button",{type:"button",className:"header-action search-button","aria-label":"Search","aria-expanded":d,onClick:st,children:d?e.jsx(me,{size:17}):e.jsx(pe,{size:17})})]}),e.jsx(ut,{}),e.jsx(Zt,{}),e.jsxs("div",{className:"profile-wrapper",ref:z,children:[e.jsxs("button",{type:"button",className:`profile-button ${x?"profile-button-active":""}`,onClick:it,"aria-expanded":x,"aria-haspopup":"menu",children:[e.jsxs("div",{className:"profile-avatar",children:[e.jsx("span",{children:P}),e.jsx("i",{})]}),!_&&e.jsxs("div",{className:"profile-info",children:[e.jsx("span",{className:"profile-name",children:p}),e.jsx("span",{className:"profile-role",children:k})]}),!_&&e.jsx(Mt,{size:14,className:x?"profile-chevron profile-chevron-open":"profile-chevron"})]}),x&&e.jsxs("div",{className:"profile-dropdown",role:"menu",children:[e.jsx("div",{className:"dropdown-wave"}),e.jsxs("div",{className:"profile-dropdown-header",children:[e.jsx("div",{className:"profile-avatar large",children:P}),e.jsxs("div",{className:"dropdown-user-info",children:[e.jsx("div",{className:"dropdown-name",children:p}),e.jsx("div",{className:"dropdown-email",children:D})]})]}),e.jsx("div",{className:"profile-role-badge",children:k}),e.jsx("div",{className:"dropdown-divider"}),e.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>T(ee),role:"menuitem",children:[e.jsx("span",{className:"dropdown-item-icon",children:e.jsx(Dt,{size:15})}),e.jsx("span",{children:"Profile"})]}),C&&e.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>T(I),role:"menuitem",children:[e.jsx("span",{className:"dropdown-item-icon",children:e.jsx(Me,{size:15})}),e.jsx("span",{children:"Settings"})]}),e.jsx("div",{className:"dropdown-divider"}),e.jsxs("button",{type:"button",className:"dropdown-item logout-item",onClick:rt,role:"menuitem",children:[e.jsx("span",{className:"dropdown-item-icon",children:e.jsx(It,{size:15})}),e.jsx("span",{children:"Sign out"})]})]})]})]})]}),!_&&e.jsxs("div",{className:"navigation-area",children:[e.jsx("div",{className:"nav-water-glow nav-water-glow-left"}),e.jsx("div",{className:"nav-water-glow nav-water-glow-center"}),e.jsx("div",{className:"nav-water-glow nav-water-glow-right"}),e.jsx("div",{className:"nav-bubbles",children:Array.from({length:6},(t,s)=>e.jsx("span",{},s))}),e.jsxs("nav",{className:`desktop-navigation ${$.length>9?"nav-many":""}`,"aria-label":"Main navigation",children:[e.jsx("div",{className:"nav-shimmer"}),e.jsx("div",{className:"nav-orbit nav-orbit-one"}),e.jsx("div",{className:"nav-orbit nav-orbit-two"}),$.map((t,s)=>{const v=je(t),S=t.icon;return e.jsxs("button",{type:"button",className:`nav-item ${v?"nav-item-active":""}`,style:{"--nav-index":s},title:t.label,"aria-label":t.label,"aria-current":v?"page":void 0,onClick:()=>T(t.path),children:[e.jsx("span",{className:"nav-active-water"}),e.jsx("span",{className:"nav-icon-box",children:S&&e.jsx(S,{size:19,strokeWidth:2})}),e.jsx("span",{className:"nav-label",children:t.label}),Ne(t),v&&e.jsx("span",{className:"nav-live-dot"})]},`${t.path}-${t.label}`)})]}),e.jsx("div",{className:"nav-wave",children:e.jsxs("svg",{viewBox:"0 0 1440 54",preserveAspectRatio:"none","aria-hidden":"true",children:[e.jsx("path",{className:"wave-back",d:"M0,26 C180,2 290,52 460,27 S760,4 930,27 S1210,52 1440,23"}),e.jsx("path",{className:"wave-front",d:"M0,30 C180,8 300,56 470,29 S760,7 930,30 S1220,55 1440,27"})]})})]}),_&&f&&e.jsx("div",{className:"mobile-menu",children:e.jsxs("div",{className:"mobile-menu-inner",children:[e.jsxs("div",{className:"mobile-menu-heading",children:[e.jsx("span",{children:"Workspace"}),e.jsx("small",{children:"Navigation"})]}),e.jsx("nav",{className:"mobile-navigation",children:$.map((t,s)=>{const v=je(t),S=t.icon;return e.jsxs("button",{type:"button",className:`mobile-nav-item ${v?"mobile-nav-active":""}`,style:{"--mobile-index":s},onClick:()=>{T(t.path),typeof u=="function"&&u(!1)},children:[e.jsx("span",{className:"mobile-nav-wave"}),e.jsx("span",{className:"mobile-icon-box",children:S&&e.jsx(S,{size:17,strokeWidth:2})}),e.jsx("span",{className:"mobile-nav-label",children:t.label}),Ne(t),v&&e.jsx("span",{className:"mobile-active-indicator",children:e.jsx("i",{})})]},`${t.path}-${t.label}`)})})]})})]}),e.jsx("style",{children:`
        html, body {
          max-width: 100%;
          overflow-x: hidden;
        }

        * { box-sizing: border-box; }

        .dashboard-header {
          position: sticky;
          top: 0;
          z-index: 5000;
          width: 100%;
          max-width: 100%;
          overflow: visible;
          background: #dff7f8;
          border-bottom: 1px solid rgba(30,109,126,.13);
          box-shadow: 0 7px 28px rgba(24,99,115,.09);
        }

        .header-top {
          position: relative;
          z-index: 5001;
          min-height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          padding: 8px 28px;
          overflow: visible;
          background:
            radial-gradient(circle at 5% 45%, rgba(33,185,215,.24), transparent 24%),
            radial-gradient(circle at 24% 110%, rgba(23,151,194,.12), transparent 30%),
            linear-gradient(100deg,#d9f4f6,#e9f9f8);
          border-bottom: 1px solid rgba(34,124,142,.10);
        }

        .header-left, .brand-wrapper, .header-right {
          display: flex;
          align-items: center;
        }

        .brand-wrapper {
          gap: 11px;
          cursor: pointer;
          user-select: none;
          min-width: 0;
        }

        .brand-logo {
          position: relative;
          flex-shrink: 0;
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 13px;
          color: #fff;
          background: linear-gradient(135deg,#076f8f,#159fc0,#4ccbd5);
          box-shadow: 0 8px 20px rgba(28,139,163,.23);
          animation: logoFloat 4s ease-in-out infinite;
        }

        .brand-logo-shine {
          position: absolute;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background: rgba(125,231,245,.65);
          opacity: .23;
          filter: blur(18px);
        }

        .brand-logo-ring {
          position: absolute;
          inset: 5px;
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 10px;
        }

        .brand-logo svg { position: relative; z-index: 2; }

        .brand-text { display: flex; flex-direction: column; }
        .brand-title {
          color: #15535d;
          font-size: 20px;
          font-weight: 900;
          letter-spacing: -.6px;
          line-height: 1;
          white-space: nowrap;
        }

        .brand-title span { color: #0785a7; }

        .brand-subtitle {
          margin-top: 5px;
          color: #6b9299;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .header-right {
          position: relative;
          z-index: 6000;
          gap: 8px;
          flex-shrink: 0;
        }

        .header-action {
          position: relative;
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(48,131,148,.16);
          border-radius: 11px;
          background: rgba(255,255,255,.72);
          color: #397985;
          cursor: pointer;
          transition: all .25s ease;
        }

        .header-action:hover {
          color: #087b98;
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(35,109,124,.10);
        }

        .notification-button { position: relative; }
        .notification-dot {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 7px;
          height: 7px;
          z-index: 3;
          border-radius: 50%;
          background: #159fc0;
          border: 2px solid #e2f5f6;
        }

        .notification-pulse {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 11px;
          height: 11px;
          border: 1px solid rgba(21,159,192,.45);
          border-radius: 50%;
          animation: notificationPulse 2s ease-out infinite;
        }

        .search-wrapper { position: relative; z-index: 7000; }
        .search-panel {
          position: absolute;
          right: 0;
          top: 48px;
          width: min(380px, calc(100vw - 32px));
          border: 1px solid rgba(44,131,150,.18);
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 18px 40px rgba(33,108,122,.16);
          z-index: 9000;
          overflow: hidden;
          animation: searchDrop .2s ease-out;
        }
        .search-input-wrapper {
          height: 46px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 12px;
          border-bottom: 1px solid #EEF5F6;
        }
        .search-results { max-height: 360px; overflow-y: auto; padding: 6px; }
        .search-group-label { padding: 6px 8px 4px; font-size: 10px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; color: #8aa1ad; }
        .search-empty { padding: 18px 10px; text-align: center; font-size: 12px; color: #6E8799; }
        .search-result {
          width: 100%; display: flex; align-items: center; gap: 10px; padding: 8px; border: 0; border-radius: 9px;
          background: transparent; cursor: pointer; text-align: left;
        }
        .search-result.is-active { background: #EEF8F9; }
        .search-result-icon {
          width: 28px; height: 28px; flex-shrink: 0; border-radius: 8px; display: flex; align-items: center; justify-content: center;
          background: #E8F7F8; color: #0b8f87;
        }
        .search-result-icon.kind-task { background: #EEF2FF; color: #4f46e5; }
        .search-result-icon.kind-meeting { background: #FFF5E6; color: #b45309; }
        .search-result-text { flex: 1; min-width: 0; display: flex; flex-direction: column; }
        .search-result-title { font-size: 12.5px; font-weight: 700; color: #123B5D; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .search-result-sub { font-size: 11px; color: #6E8799; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .search-enter { color: #8aa1ad; flex-shrink: 0; }
        .search-spin { color: #63929d; flex-shrink: 0; animation: searchSpin 1s linear infinite; }
        @keyframes searchSpin { to { transform: rotate(360deg); } }

        .search-input-wrapper svg { color: #63929d; flex-shrink: 0; }
        .search-input-wrapper input {
          width: 100%;
          min-width: 0;
          outline: none;
          border: 0;
          background: transparent;
          color: #225965;
          font-size: 12px;
        }

        .search-shortcut {
          display: flex;
          align-items: center;
          gap: 2px;
          padding: 4px 6px;
          border-radius: 6px;
          background: #eef8f9;
          color: #6b9199;
          font-size: 9px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .profile-wrapper {
          position: relative;
          z-index: 8000;
          isolation: isolate;
        }

        .profile-button {
          min-height: 42px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 3px 9px 3px 4px;
          border: 1px solid rgba(48,131,148,.16);
          border-radius: 12px;
          background: rgba(255,255,255,.72);
          cursor: pointer;
          transition: all .25s ease;
        }

        .profile-button:hover, .profile-button-active {
          background: #fff;
          border-color: rgba(29,145,171,.28);
          box-shadow: 0 7px 18px rgba(35,109,124,.09);
        }

        .profile-avatar {
          position: relative;
          width: 33px;
          height: 33px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 10px;
          color: #fff;
          font-size: 12px;
          font-weight: 900;
          background: linear-gradient(135deg,#087fa0,#269fc0,#55cbd6);
        }

        .profile-avatar.large { width: 43px; height: 43px; border-radius: 12px; }
        .profile-info { display: flex; flex-direction: column; align-items: flex-start; }
        .profile-name { color: #255c66; font-size: 11px; font-weight: 800; white-space: nowrap; }
        .profile-role { margin-top: 2px; color: #789ba2; font-size: 9px; }
        .profile-chevron { color: #71949b; transition: transform .25s ease; }
        .profile-chevron-open { transform: rotate(180deg); }

        .profile-dropdown {
          position: absolute;
          top: calc(100% + 9px);
          right: 0;
          z-index: 99999;
          width: min(245px, calc(100vw - 24px));
          padding: 10px;
          overflow: hidden;
          border: 1px solid rgba(49,130,147,.18);
          border-radius: 15px;
          background: #fff;
          box-shadow: 0 22px 50px rgba(33,108,122,.18);
          animation: profileDropIn .18s ease-out;
        }

        .dropdown-wave {
          position: absolute;
          left: -10%;
          top: -24px;
          width: 120%;
          height: 55px;
          border-radius: 50%;
          background: rgba(35,184,205,.12);
        }

        .profile-dropdown-header {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
        }

        .dropdown-user-info { min-width: 0; }
        .dropdown-name { color: #255b65; font-size: 13px; font-weight: 800; }
        .dropdown-email {
          margin-top: 3px;
          color: #7b9ba2;
          font-size: 9px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 160px;
        }

        .profile-role-badge {
          display: inline-flex;
          margin: 2px 8px 7px;
          padding: 5px 8px;
          border-radius: 999px;
          background: #e8f7f8;
          color: #087c98;
          font-size: 9px;
          font-weight: 800;
        }

        .dropdown-divider { height: 1px; margin: 7px 0; background: rgba(53,129,145,.11); }

        .dropdown-item {
          width: 100%;
          min-height: 39px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 9px;
          border: 0;
          border-radius: 9px;
          background: transparent;
          color: #517981;
          text-align: left;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all .18s ease;
        }

        .dropdown-item:hover { background: #edf8f9; color: #087c98; }
        .dropdown-item-icon {
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #f0f8f9;
          color: #3f8290;
          flex-shrink: 0;
        }

        /* Desktop ocean navigation */
        .navigation-area {
          position: relative;
          z-index: 100;
          width: 100%;
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 20px 17px;
          overflow: hidden;
          background:
            radial-gradient(circle at 8% 50%,rgba(31,178,205,.16),transparent 25%),
            radial-gradient(circle at 93% 50%,rgba(30,169,197,.13),transparent 25%),
            linear-gradient(90deg,#d7f2f4,#e0f6f7,#e7f8f7);
        }

        .nav-water-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(45px);
          pointer-events: none;
        }

        .nav-water-glow-left {
          left: -100px; top: -70px; width: 390px; height: 160px;
          background: rgba(30,174,202,.13);
          animation: glowDriftLeft 8s ease-in-out infinite;
        }

        .nav-water-glow-center {
          left: 40%; top: -100px; width: 440px; height: 150px;
          background: rgba(73,190,205,.09);
          animation: glowDriftCenter 10s ease-in-out infinite;
        }

        .nav-water-glow-right {
          right: -100px; top: -70px; width: 380px; height: 160px;
          background: rgba(42,174,194,.11);
          animation: glowDriftRight 9s ease-in-out infinite;
        }

        .nav-bubbles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .nav-bubbles span {
          position: absolute; bottom: -12px; width: 5px; height: 5px;
          border: 1px solid rgba(29,157,180,.22); border-radius: 50%;
          animation: bubbleRise 7s linear infinite;
        }

        .nav-bubbles span:nth-child(1) { left: 13%; }
        .nav-bubbles span:nth-child(2) { left: 28%; animation-delay: 2s; }
        .nav-bubbles span:nth-child(3) { left: 49%; animation-delay: 4s; }
        .nav-bubbles span:nth-child(4) { left: 65%; animation-delay: 1s; }
        .nav-bubbles span:nth-child(5) { left: 81%; animation-delay: 3s; }
        .nav-bubbles span:nth-child(6) { left: 91%; animation-delay: 5s; }

        .desktop-navigation {
          position: relative;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: min(92vw,1450px);
          max-width: 100%;
          min-width: 0;
          min-height: 64px;
          padding: 6px 8px;
          gap: 3px;
          border-radius: 999px;
          background: linear-gradient(110deg,#102f49,#143653 42%,#102f49);
          border: 1px solid rgba(133,215,230,.13);
          box-shadow: 0 12px 28px rgba(20,54,83,.20);
          overflow: hidden;
        }

        .nav-shimmer {
          position: absolute; top: 0; bottom: 0; left: -25%; width: 22%;
          background: linear-gradient(90deg,transparent,rgba(105,222,232,.12),transparent);
          transform: skewX(-18deg);
          animation: navShimmer 6s ease-in-out infinite;
          pointer-events: none;
        }

        .nav-orbit { position: absolute; border: 1px solid rgba(104,210,224,.07); border-radius: 50%; pointer-events: none; }
        .nav-orbit-one { width: 180px; height: 180px; right: 9%; top: -145px; animation: orbitSpin 13s linear infinite; }
        .nav-orbit-two { width: 120px; height: 120px; left: 15%; bottom: -105px; animation: orbitSpinReverse 10s linear infinite; }

        .nav-item {
          position: relative;
          z-index: 3;
          height: 50px;
          flex: 1 1 auto;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 16px;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: #a9c0d0;
          font-size: 13px;
          font-weight: 750;
          white-space: nowrap;
          cursor: pointer;
          transition: color .25s ease, transform .25s ease, background .25s ease;
          animation: navItemEnter .55s cubic-bezier(.2,.8,.2,1) both;
          animation-delay: calc(var(--nav-index) * 55ms);
        }

        .nav-item:hover { color: #fff; transform: translateY(-2px); }
        .nav-item-active {
          color: #fff !important;
          background: linear-gradient(135deg,rgba(42,111,151,.72),rgba(29,80,117,.88));
          border: 1px solid rgba(126,219,230,.22);
          box-shadow: 0 6px 16px rgba(7,34,55,.28);
        }

        .nav-active-water {
          position: absolute; left: 9%; right: 9%; bottom: 2px; height: 3px;
          overflow: hidden; border-radius: 999px;
          background: linear-gradient(90deg,transparent,#68d8e4,transparent);
          opacity: 0;
        }

        .nav-item-active .nav-active-water { opacity: 1; }

        .nav-icon-box {
          width: 34px; height: 34px; display: flex;
          align-items: center; justify-content: center; flex-shrink: 0;
          border-radius: 10px; background: rgba(255,255,255,.065);
          color: #8faec2; transition: all .25s ease;
        }

        .nav-item:hover .nav-icon-box { color: #e0fbfd; background: rgba(89,204,219,.12); }
        .nav-item-active .nav-icon-box { color: #fff; background: rgba(107,209,223,.15); }
        .nav-label { line-height: 1; font-size: 13px; font-weight: 750; overflow: hidden; text-overflow: ellipsis; }

        /* Many modules (Admin / Super Admin): every item keeps its FULL name.
           Items take their natural width (never shrink → no "Task Cale…"),
           spacing tightens on smaller screens, and below 1520px the icons
           step aside before any text would be cut. */
        /* bar hugs its items (no stretched gaps), centered, same small gap everywhere */
        .desktop-navigation.nav-many { width: fit-content; max-width: min(97vw, 1720px); margin: 0 auto; justify-content: center; gap: 12px; padding: 6px 10px; overflow-x: auto; scrollbar-width: none; }
        .nav-many::-webkit-scrollbar { display: none; }
        .nav-many .nav-item { flex: 0 0 auto; padding: 0 10px; gap: 7px; }
        .nav-many .nav-label { overflow: visible; text-overflow: clip; font-size: 12.5px; }
        .nav-many .nav-icon-box { width: 30px; height: 30px; }
        @media (max-width: 1600px) {
          .desktop-navigation.nav-many { gap: 6px; }
          .nav-many .nav-item { padding: 0 8px; gap: 6px; }
          .nav-many .nav-icon-box { width: 28px; height: 28px; }
          .nav-many .nav-label { font-size: 12px; }
        }
        @media (max-width: 1520px) {
          .nav-many .nav-icon-box { display: none; }
          .nav-many .nav-item { padding: 0 10px; }
        }

        .nav-live-dot {
          width: 5px; height: 5px; flex-shrink: 0;
          border-radius: 50%; background: #73dbe5;
          box-shadow: 0 0 0 3px rgba(115,219,229,.08),0 0 12px rgba(115,219,229,.55);
          animation: liveDot 1.8s ease-in-out infinite;
        }

        /* Unread message badge */
        .chat-unread-badge {
          position: relative;
          z-index: 5;
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          min-width: 20px;
          height: 20px;
          padding: 0 6px;
          border-radius: 999px;
          background: linear-gradient(135deg,#ff6683,#e11d48);
          color: #fff;
          font-size: 10px;
          font-weight: 900;
          line-height: 1;
          box-shadow: 0 0 12px rgba(255,92,122,.35);
          animation: chatBadgePop .28s ease-out;
        }

        .nav-wave { position: absolute; left: 0; right: 0; bottom: -1px; height: 31px; z-index: 4; pointer-events: none; opacity: .72; }
        .nav-wave svg { width: 100%; height: 100%; display: block; }
        .wave-back, .wave-front { fill: none; stroke-linecap: round; vector-effect: non-scaling-stroke; }
        .wave-back { stroke: rgba(71,193,210,.18); stroke-width: 1.5; stroke-dasharray: 10 12; animation: waveMove 5s linear infinite; }
        .wave-front { stroke: rgba(87,207,220,.30); stroke-width: 1; stroke-dasharray: 5 10; animation: waveMoveReverse 4s linear infinite; }

        /* Mobile and tablet */
        .mobile-menu-button {
          flex-shrink: 0; width: 38px; height: 38px; margin-right: 8px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(48,131,148,.18); border-radius: 11px;
          background: rgba(255,255,255,.75); color: #397985; cursor: pointer;
        }

        .mobile-menu { position: fixed; top: 68px; left: 0; right: 0; z-index: 4900; max-height: calc(100vh - 68px); overflow-y: auto; padding: 10px; background: rgba(218,246,247,.96); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(54,128,145,.15); box-shadow: 0 18px 40px rgba(33,108,122,.14); animation: mobileMenuIn .25s ease-out; }
        .mobile-menu-inner { padding: 10px; border: 1px solid rgba(47,130,147,.17); border-radius: 17px; background: rgba(255,255,255,.91); }
        .mobile-menu-heading { display: flex; align-items: baseline; justify-content: space-between; padding: 5px 8px 12px; }
        .mobile-menu-heading span { color: #245e68; font-size: 13px; font-weight: 900; }
        .mobile-menu-heading small { color: #7ca0a7; font-size: 8px; font-weight: 800; letter-spacing: 1.1px; text-transform: uppercase; }

        .mobile-navigation { display: flex; flex-direction: column; gap: 5px; }

        .mobile-nav-item {
          position: relative; width: 100%; min-height: 47px;
          display: flex; align-items: center; gap: 10px;
          padding: 6px 10px; overflow: hidden; border: 0;
          border-radius: 13px; background: transparent; color: #4d7b83;
          font-size: 13px; font-weight: 700; text-align: left; cursor: pointer;
          animation: mobileItemIn .38s cubic-bezier(.2,.8,.2,1) both;
          animation-delay: calc(var(--mobile-index) * 55ms);
        }

        .mobile-nav-item:hover { color: #087c98; background: #edf8f9; }
        .mobile-nav-active { color: #fff !important; background: linear-gradient(100deg,#143653,#1d587d); box-shadow: 0 7px 17px rgba(20,54,83,.14); }
        .mobile-nav-wave { position: absolute; right: -35px; bottom: -17px; width: 120px; height: 45px; border-top: 1px solid rgba(86,210,221,.18); border-radius: 50%; opacity: 0; }
        .mobile-nav-active .mobile-nav-wave { opacity: 1; animation: mobileWave 3s ease-in-out infinite; }
        .mobile-icon-box { flex-shrink: 0; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border-radius: 9px; background: rgba(66,140,157,.11); color: #4f8792; }
        .mobile-nav-active .mobile-icon-box { color: #fff; background: rgba(255,255,255,.11); }
        .mobile-nav-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .mobile-active-indicator { position: relative; flex-shrink: 0; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; }
        .mobile-active-indicator::before { content: ""; position: absolute; inset: 0; border: 1px solid rgba(107,209,223,.32); border-radius: 50%; animation: mobileDotRing 1.7s ease-in-out infinite; }
        .mobile-active-indicator i { width: 5px; height: 5px; border-radius: 50%; background: #6bd1df; box-shadow: 0 0 10px rgba(107,209,223,.75); }

        @keyframes logoFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
        @keyframes notificationPulse { 0% { transform: scale(.6); opacity: .8; } 70%,100% { transform: scale(1.7); opacity: 0; } }
        @keyframes searchDrop { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes profileDropIn { from { opacity: 0; transform: translateY(-6px) scale(.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes glowDriftLeft { 0%,100% { transform: translateX(0); } 50% { transform: translateX(55px); } }
        @keyframes glowDriftCenter { 0%,100% { transform: translateX(-25px); } 50% { transform: translateX(30px); } }
        @keyframes glowDriftRight { 0%,100% { transform: translateX(0); } 50% { transform: translateX(-50px); } }
        @keyframes bubbleRise { 0% { transform: translateY(15px); opacity: 0; } 15% { opacity: .8; } 100% { transform: translateY(-105px) translateX(15px); opacity: 0; } }
        @keyframes navShimmer { 0% { left: -25%; opacity: 0; } 12% { opacity: 1; } 48% { left: 105%; opacity: .7; } 100% { left: 105%; opacity: 0; } }
        @keyframes orbitSpin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
        @keyframes orbitSpinReverse { from { transform: rotate(360deg); } to { transform: rotate(0); } }
        @keyframes navItemEnter { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes activeWater { from { left: -40%; } to { left: 120%; } }
        @keyframes liveDot { 0%,100% { transform: scale(1); } 50% { transform: scale(1.35); } }
        @keyframes waveMove { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -120; } }
        @keyframes waveMoveReverse { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 100; } }
        @keyframes mobileMenuIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes mobileItemIn { from { opacity: 0; transform: translateX(-12px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes mobileWave { 0%,100% { transform: translateX(0); } 50% { transform: translateX(-16px); } }
        @keyframes mobileDotRing { 0%,100% { transform: scale(.75); opacity: .35; } 50% { transform: scale(1.15); opacity: .9; } }
        @keyframes chatBadgePop { 0% { transform: scale(.65); opacity: 0; } 75% { transform: scale(1.12); } 100% { transform: scale(1); opacity: 1; } }

        @media (min-width: 1101px) and (max-width: 1350px) {
          .header-top { padding: 8px 18px; }
          .profile-info, .profile-chevron { display: none; }
          .profile-button { padding: 3px; }
          .brand-title { font-size: 19px; }
          .desktop-navigation { width: calc(100vw - 60px); padding: 6px; }
          .nav-item { padding: 0 11px; gap: 6px; }
          .nav-icon-box { width: 30px; height: 30px; }
          .nav-label { font-size: 11.5px; }
        }

        @media (min-width: 1101px) and (max-width: 1240px) {
          .desktop-navigation:not(.nav-many) .nav-label { display: none; }
          .nav-many .nav-label { display: inline; font-size: 11.5px; }
          .nav-many .nav-item { padding: 0 7px; }
          .nav-item { flex: 0 1 auto; padding: 0 13px; }
          .nav-live-dot { display: none; }
        }

        @media (min-width: 768px) and (max-width: 1100px) {
          .header-top { padding: 8px 18px; }
          .profile-info, .profile-chevron { display: none; }
          .profile-button { padding: 3px; }
          .brand-title { font-size: 19px; }
        }

        @media (max-width: 767px) {
          .header-top { min-height: 64px; padding: 8px 12px; }
          .brand-logo { width: 40px; height: 40px; }
          .brand-title { font-size: 18px; }
          .brand-subtitle { font-size: 7px; }
          .mobile-menu { top: 64px; max-height: calc(100vh - 64px); }
          .profile-info, .profile-chevron { display: none; }
          .profile-button { padding: 3px; }
          .search-panel { position: fixed; top: 62px; left: 12px; right: 12px; width: auto; }
        }

        @media (max-width: 430px) {
          .header-top { padding: 8px 9px; }
          .brand-text, .search-wrapper, .notification-button { display: none; }
          .header-right { gap: 5px; }
          .header-action { width: 36px; height: 36px; }
          .mobile-menu-button { width: 36px; height: 36px; margin-right: 6px; }
          .profile-dropdown { position: fixed; top: 62px; left: 10px; right: 10px; width: auto; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `})]})},Ea=()=>{const[n,a]=i.useState(ce),[r,f]=i.useState(!!ce()?.permissions);i.useEffect(()=>{let h=!1;const j=()=>a(ce());return xt().catch(()=>{}).finally(()=>{h||(j(),f(!0))}),window.addEventListener("user-updated",j),()=>{h=!0,window.removeEventListener("user-updated",j)}},[]);const b=[{label:"Super Admin",icon:Wt,path:"/superadmin/dashboard",activePaths:["/superadmin/companies"],superAdminOnly:!0},{label:"Dashboard",icon:Rt,path:"/dashboard"},{label:"Users",icon:_t,path:"/dashboard/users",module:"users"},{label:"Tasks",icon:Ge,path:"/dashboard/tasks",module:"tasks"},{label:"Task Bank",icon:Yt,path:"/dashboard/task-bank",module:"taskbank"},{label:"Task Calendar",icon:$t,path:"/dashboard/task-calendar",module:"calendar"},{label:"MoM",icon:Ke,path:"/dashboard/mom",module:"communication"},{label:"Chats",icon:qe,path:"/dashboard/chats",module:"chat"},{label:"Support",icon:he,path:"/dashboard/support",module:"support"},{label:"Roles",icon:Pt,path:"/dashboard/roles",module:"users",action:"assign",adminOnly:!0},{label:"Reports",icon:Ft,path:"/dashboard/reports",module:"reports"},{label:"Activity",icon:Tt,path:n?.role==="SuperAdmin"?"/superadmin/activity":"/dashboard/activity",activePaths:["/superadmin/activity","/dashboard/activity"],adminOnly:!0}].filter(h=>h.superAdminOnly?n?.role==="SuperAdmin":h.adminOnly&&!["SuperAdmin","Admin"].includes(n?.role)?!1:!h.module||Ve(n,h.module,h.action||"view")),[w,d]=i.useState(!1),[c,x]=i.useState(window.innerWidth),m=Xe(),g=Oe();i.useEffect(()=>{const h=()=>{x(window.innerWidth)};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}},[]);const L=c<768,R=c>=768&&c<1024,W=b.find(h=>m.pathname===h.path||h.activePaths?.some(j=>m.pathname.startsWith(j)))?.label||"Dashboard",A=h=>{g(h),d(!1)};return e.jsxs("div",{style:Ye.wrapper,children:[e.jsx(gt,{}),e.jsx(ea,{navLinks:b,activeLink:W,handleNavClick:A,menuOpen:w,setMenuOpen:d,isMobile:L,isTablet:R}),e.jsx("div",{style:{...Ye.pageArea,padding:L?"16px":"28px"},children:r?e.jsx(i.Suspense,{fallback:e.jsx(Le,{text:"Loading page…"}),children:e.jsx(bt,{},`${n?.role}-${JSON.stringify(n?.permissions||{})}`)}):e.jsx(Le,{text:"Loading your workspace…"})})]})},Ye={wrapper:{backgroundColor:"#ffffff",minWidth:"320px"},pageArea:{minHeight:"calc(100vh - 132px)",backgroundColor:"#f7fbfb",boxSizing:"border-box"}};export{Ea as default};
