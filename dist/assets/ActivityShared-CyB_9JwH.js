import{c as g,r as d,g as S,j as e,N as L,x as N,z as A}from"./index-DdKrgUlZ.js";import{P as $}from"./Pagination-UbNjK2ed.js";import{T as D}from"./triangle-alert-470AK52j.js";import{L as _}from"./loader-circle-C6iMG4x7.js";import{X as M}from"./x-CpRqZeGy.js";import{L as u}from"./log-in-CsGuhtnf.js";import{C as E}from"./clock-3-qdGjk7GL.js";const y={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};y.node;const T=g(y);const w={name:"monitor",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]};w.node;const P=g(w);const v={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]};v.node;const C=g(v);const k={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};k.node;const O=g(k);const j={name:"tablet",size:24,node:[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]};j.node;const R=g(j),m=t=>{if(t==null)return"—";const i=Math.round(t/1e3);if(i<60)return`${i}s`;const a=Math.floor(i/60);if(a<60)return`${a}m`;const o=Math.floor(a/60);return o<24?`${o}h ${a%60}m`:`${Math.floor(o/24)}d ${o%24}h`},U=t=>{if(!t)return"Never";const i=Date.now()-new Date(t).getTime();if(i<45e3)return"Just now";const a=Math.round(i/6e4);if(a<60)return`${a} min ago`;const o=Math.round(a/60);if(o<24)return`${o} h ago`;const n=Math.round(o/24);return n<30?`${n} d ago`:new Date(t).toLocaleDateString()},b=t=>t?new Date(t).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}):"—",B=t=>N[t]||t||"—",z={online:"Online",active:"Active",logged_out:"Logged out",timed_out:"Disconnected",expired:"Expired"},I=({online:t,label:i})=>e.jsxs("span",{className:`act-pill ${t?"on":"off"}`,children:[e.jsx("i",{"aria-hidden":"true"}),i||(t?"Online":"Offline")]}),H=({status:t,online:i})=>{const a=i?"online":t;return e.jsx("span",{className:`act-sess s-${a}`,children:z[a]||a||"—"})},q=({device:t})=>{if(!t)return e.jsx("span",{className:"act-muted",children:"—"});const i=t.type==="Mobile"?O:t.type==="Tablet"?R:P;return e.jsxs("span",{className:"act-device",title:`${t.browser} on ${t.os} (${t.type})`,children:[e.jsx(i,{size:14})," ",t.browser," · ",t.os]})},ee=({icon:t,label:i,value:a,hint:o,tone:n="teal"})=>e.jsxs("div",{className:`act-stat t-${n}`,children:[e.jsx("div",{className:"act-stat-icon",children:t&&e.jsx(t,{size:18})}),e.jsxs("div",{children:[e.jsx("span",{children:i}),e.jsx("strong",{children:a??"—"}),o&&e.jsx("small",{children:o})]})]}),G=({loading:t,error:i,empty:a,onRetry:o})=>i?e.jsxs("div",{className:"act-state error",children:[e.jsx(D,{size:16})," ",i,o&&e.jsx("button",{type:"button",className:"act-btn",onClick:o,children:"Retry"})]}):t?e.jsxs("div",{className:"act-state",children:[e.jsx(_,{size:16,className:"act-spin"})," Loading…"]}):a?e.jsx("div",{className:"act-state",children:a}):null,te=({role:t})=>{const i=t==="SuperAdmin"?[{to:"/superadmin/activity",label:"Organizations"},{to:"/dashboard/activity",label:"All Users"},{to:"/dashboard/activity/history",label:"Login History"}]:[{to:"/dashboard/activity",label:"User Activity"},{to:"/dashboard/activity/history",label:"Login History"}];return e.jsx("nav",{className:"act-tabs","aria-label":"Activity monitoring sections",children:i.map(a=>e.jsx(L,{to:a.to,end:!0,className:({isActive:o})=>o?"on":"",children:a.label},a.to))})},F=(t,i=6e4)=>{const a=d.useRef(t);a.current=t;const[o,n]=d.useState(!1);return d.useEffect(()=>{let p=null;const f=()=>{clearTimeout(p),p=setTimeout(()=>a.current?.({silent:!0}),1200)},c=S(),l=()=>n(!0),x=()=>n(!1);c&&(n(c.connected),c.on("activity:update",f),c.on("connect",l),c.on("disconnect",x));const s=setInterval(()=>a.current?.({silent:!0}),i);return()=>{clearTimeout(p),clearInterval(s),c&&(c.off("activity:update",f),c.off("connect",l),c.off("disconnect",x))}},[i]),o},ae=({live:t})=>e.jsxs("span",{className:`act-live ${t?"on":""}`,title:t?"Updates arrive in real time":"Refreshing every minute",children:[e.jsx("i",{"aria-hidden":"true"})," ",t?"Live":"Auto-refresh"]}),J=(t=10)=>{const[i,a]=d.useState(1),[o,n]=d.useState(t);return{page:i,setPage:a,pageSize:o,setPageSize:f=>{n(f),a(1)}}},ie=({userId:t,onClose:i})=>{const[a,o]=d.useState(null),[n,p]=d.useState(""),[f,c]=d.useState(!0),l=J(10),x=d.useCallback(async({silent:r}={})=>{r||c(!0),p("");try{o(await A.userHistory(t,{page:l.page,limit:l.pageSize}))}catch(h){p(h.response?.data?.message||"Could not load this person's login history.")}finally{c(!1)}},[t,l.page,l.pageSize]);d.useEffect(()=>{x()},[x]),F(x),d.useEffect(()=>{const r=h=>h.key==="Escape"&&i();return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[i]);const s=a?.user;return e.jsx("div",{className:"act-overlay",onMouseDown:r=>r.target===r.currentTarget&&i(),children:e.jsxs("aside",{className:"act-drawer",role:"dialog","aria-label":"Login history",children:[e.jsxs("div",{className:"act-drawer-head",children:[e.jsxs("div",{children:[e.jsx("h3",{children:s?.name||"Login history"}),s&&e.jsx("p",{children:[B(s.role),s.organization?.name,s.email].filter(Boolean).join(" · ")})]}),e.jsx("button",{type:"button",className:"act-btn",onClick:i,"aria-label":"Close",children:e.jsx(M,{size:15})})]}),s&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"act-facts",children:[e.jsx("span",{children:e.jsx(I,{online:s.online,label:s.online?`Online · ${s.activeSessions} session${s.activeSessions===1?"":"s"}`:"Offline"})}),e.jsxs("span",{children:[e.jsx(u,{size:14})," Last login: ",e.jsx("b",{children:b(s.lastLoginAt)})]}),e.jsxs("span",{children:[e.jsx(E,{size:14})," Last active: ",e.jsx("b",{children:U(s.lastActiveAt)})]})]}),e.jsxs("div",{className:"act-mini-stats",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Sessions"}),e.jsx("strong",{children:a.stats.totalSessions})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Last 30 days"}),e.jsx("strong",{children:a.stats.sessionsLast30Days})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Avg. session"}),e.jsx("strong",{children:m(a.stats.avgDurationMs)})]})]})]}),e.jsxs("h4",{children:[e.jsx(C,{size:14})," Sessions"]}),e.jsx(G,{loading:f&&!a,error:n,onRetry:x,empty:a&&!a.data.length?"No logins recorded yet.":""}),a?.data?.length>0&&e.jsxs("div",{className:"act-session-list",children:[a.data.map(r=>e.jsxs("div",{className:"act-session",children:[e.jsxs("div",{className:"act-session-top",children:[e.jsx(H,{status:r.status,online:r.online}),r.current&&e.jsx("span",{className:"act-tag",children:"This browser"}),e.jsx("span",{className:"act-muted",children:m(r.durationMs)})]}),e.jsxs("div",{className:"act-session-grid",children:[e.jsxs("span",{children:[e.jsx(u,{size:12})," ",b(r.loginAt)]}),e.jsxs("span",{children:["Logout: ",r.logoutAt?b(r.logoutAt):r.endedAt?`${z[r.status]} ${b(r.endedAt)}`:"—"]}),e.jsx(q,{device:r.device}),e.jsxs("span",{children:[e.jsx(T,{size:12})," ",r.ip||"—"]})]})]},r._id)),e.jsx($,{...l,total:a.pagination.total,totalPages:a.pagination.totalPages,label:"sessions"})]})]})})},oe=`
  .act-page { display: flex; flex-direction: column; gap: 16px; max-width: 1400px; margin: 0 auto; width: 100%; }
  .act-hero { position: relative; overflow: hidden; padding: 24px 26px; border-radius: 24px; color: #fff;
    background: var(--ts-hero, linear-gradient(135deg, #123f67 0%, #14577d 48%, #0f6b8f 100%)); box-shadow: var(--ts-hero-shadow, 0 22px 48px rgba(16,69,101,.2)); }
  .act-hero::before { content: ""; position: absolute; width: 300px; height: 300px; border-radius: 50%; right: -110px; top: -190px; background: rgba(255,255,255,.07); }
  .act-hero-row { position: relative; z-index: 1; display: flex; align-items: center; justify-content: space-between; gap: 18px; flex-wrap: wrap; }
  .act-hero-left { display: flex; align-items: center; gap: 15px; min-width: 0; }
  .act-hero-icon { width: 54px; height: 54px; flex: none; display: flex; align-items: center; justify-content: center; border-radius: 17px; background: rgba(255,255,255,.13); border: 1px solid rgba(255,255,255,.22); }
  .act-hero h1 { margin: 0; font-size: 25px; line-height: 1.15; font-weight: 850; letter-spacing: -.5px; }
  .act-hero p { margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,.8); }
  .act-hero-actions { display: flex; align-items: center; gap: 9px; flex-wrap: wrap; }
  .act-hero-btn { height: 40px; display: inline-flex; align-items: center; gap: 7px; padding: 0 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,.24);
    background: rgba(255,255,255,.1); color: #fff; font-weight: 750; font-size: 12.5px; cursor: pointer; text-decoration: none; }
  .act-hero-btn:hover { background: rgba(255,255,255,.18); }
  .act-hero-btn:disabled { opacity: .6; cursor: not-allowed; }
  .act-live { display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 11px; border-radius: 99px; font-size: 11px; font-weight: 800;
    background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.22); color: #fff; }
  .act-live i { width: 7px; height: 7px; border-radius: 50%; background: #c7d6dd; }
  .act-live.on i { background: #4ade80; box-shadow: 0 0 0 0 rgba(74,222,128,.6); animation: actPulse 1.8s infinite; }

  .act-tabs { display: flex; gap: 6px; flex-wrap: wrap; padding: 5px; border-radius: 14px; background: rgba(255,255,255,.9); border: 1px solid #d5e7ee; width: fit-content; max-width: 100%; }
  .act-tabs a { padding: 8px 14px; border-radius: 10px; font-size: 13px; font-weight: 750; color: #4f6f7a; text-decoration: none; white-space: nowrap; }
  .act-tabs a:hover { background: #eef8fa; color: #0e7490; }
  .act-tabs a.on { background: linear-gradient(135deg, #16a6b8, #08798c); color: #fff; }

  .act-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px; }
  .act-stat { display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,.94); border: 1px solid #d5e7ee; border-radius: 16px; padding: 14px 16px; box-shadow: 0 8px 28px rgba(23,50,77,.045); }
  .act-stat-icon { width: 40px; height: 40px; flex: none; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: #e7f8fa; color: #0e7490; }
  .act-stat.t-green .act-stat-icon { background: #e8f8ef; color: #17724a; }
  .act-stat.t-gray .act-stat-icon { background: #eef2f5; color: #5b6f7c; }
  .act-stat.t-blue .act-stat-icon { background: #e8f1fb; color: #1677a8; }
  .act-stat.t-violet .act-stat-icon { background: #f1eefc; color: #6b4fc8; }
  .act-stat.t-amber .act-stat-icon { background: #fff6e5; color: #b7791f; }
  .act-stat span { display: block; font-size: 11px; font-weight: 750; color: #7b969e; text-transform: uppercase; letter-spacing: .5px; }
  .act-stat strong { display: block; font-size: 23px; color: #082f3a; line-height: 1.2; }
  .act-stat small { display: block; font-size: 11px; color: #7b969e; }

  .act-grid-2 { display: grid; grid-template-columns: minmax(0, 2.2fr) minmax(260px, 1fr); gap: 16px; align-items: start; }
  .act-card { background: rgba(255,255,255,.95); border: 1px solid #d5e7ee; border-radius: 18px; box-shadow: 0 8px 28px rgba(23,50,77,.045); overflow: hidden; min-width: 0; }
  .act-card-head { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 14px 18px; border-bottom: 1px solid #e6f0f2; flex-wrap: wrap; }
  .act-card-head h3 { margin: 0; display: flex; align-items: center; gap: 8px; font-size: 15px; color: #082f3a; }
  .act-card-head > span { font-size: 12px; color: #7b969e; }
  .act-card-body { padding: 14px 18px; }

  .act-filters { display: grid; grid-template-columns: minmax(0, 1.6fr) repeat(4, minmax(0, 1fr)) auto; gap: 10px; align-items: end; padding: 14px 18px; border-bottom: 1px solid #e6f0f2; }
  .act-filters > * { min-width: 0; }
  .act-filters label { display: flex; flex-direction: column; gap: 5px; font-size: 10.5px; font-weight: 750; color: #4f6f7a; text-transform: uppercase; letter-spacing: .4px; }
  .act-filters select, .act-filters input[type="date"], .act-search > div { height: 38px; width: 100%; box-sizing: border-box; border: 1px solid #d6e8ec; border-radius: 11px; background: #fff;
    padding: 0 10px; font-size: 13px; color: #082f3a; font-weight: 500; text-transform: none; letter-spacing: 0; font-family: inherit; }
  .act-search > div { display: flex; align-items: center; gap: 6px; color: #7b969e; }
  .act-search input { border: none; outline: none; flex: 1; min-width: 0; font-size: 13px; background: transparent; color: #082f3a; font-family: inherit; }
  .act-btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 38px; padding: 0 12px; border-radius: 11px; border: 1px solid #d6e8ec;
    background: #fff; color: #0e7490; font-weight: 700; font-size: 13px; cursor: pointer; white-space: nowrap; font-family: inherit; }
  .act-btn:hover:not(:disabled) { border-color: #16a6b8; background: #eef8fa; }
  .act-btn:disabled { opacity: .55; cursor: not-allowed; }
  .act-btn.sm { height: 30px; padding: 0 10px; font-size: 12px; border-radius: 9px; }

  .act-table-wrap { overflow-x: auto; }
  .act-table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .act-table th { text-align: left; padding: 10px 14px; font-size: 10.5px; color: #608894; text-transform: uppercase; letter-spacing: .5px; background: #f6fbfc; white-space: nowrap; }
  .act-table th button { all: unset; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; }
  .act-table th button:focus-visible { outline: 2px solid #16a6b8; border-radius: 4px; }
  .act-table th.sorted { color: #0e7490; }
  .act-table td { padding: 10px 14px; border-top: 1px solid #eef5f6; color: #123b5d; vertical-align: middle; white-space: nowrap; }
  .act-table td.wrap { white-space: normal; min-width: 160px; }
  .act-table tbody tr.click { cursor: pointer; transition: background .15s; }
  .act-table tbody tr.click:hover { background: #f4fbfc; }
  .act-table td strong { display: block; color: #082f3a; }
  .act-table td small { display: block; color: #7b969e; font-size: 11px; margin-top: 2px; }
  .act-person { display: flex; align-items: center; gap: 10px; }
  .act-avatar { position: relative; width: 34px; height: 34px; flex: none; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, #123b5d, #16a6b8); color: #fff; font-weight: 800; font-size: 13px; }
  .act-avatar i { position: absolute; right: -1px; bottom: -1px; width: 10px; height: 10px; border-radius: 50%; border: 2px solid #fff; background: #b8c7cf; }
  .act-avatar.on i { background: #22c55e; }

  .act-pill { display: inline-flex; align-items: center; gap: 6px; padding: 3px 10px; border-radius: 99px; font-size: 11.5px; font-weight: 800; }
  .act-pill i { width: 7px; height: 7px; border-radius: 50%; }
  .act-pill.on { background: #e8f8ef; color: #17724a; }
  .act-pill.on i { background: #22c55e; animation: actPulse 2s infinite; }
  .act-pill.off { background: #eef2f5; color: #5b6f7c; }
  .act-pill.off i { background: #9fb0ba; }
  .act-sess { display: inline-block; padding: 3px 9px; border-radius: 99px; font-size: 11px; font-weight: 800; background: #eef2f5; color: #5b6f7c; }
  .act-sess.s-online, .act-sess.s-active { background: #e8f8ef; color: #17724a; }
  .act-sess.s-logged_out { background: #e8f1fb; color: #1677a8; }
  .act-sess.s-timed_out { background: #fff6e5; color: #b7791f; }
  .act-sess.s-expired { background: #fdecef; color: #a83c55; }
  .act-org-status { display: inline-block; padding: 3px 9px; border-radius: 99px; font-size: 11px; font-weight: 800; }
  .act-org-status.Active { background: #e8f8ef; color: #17724a; }
  .act-org-status.Inactive { background: #fdecef; color: #a83c55; }
  .act-tag { display: inline-block; padding: 2px 8px; border-radius: 99px; font-size: 10.5px; font-weight: 800; background: #e7f8fa; color: #0e7490; }
  .act-device { display: inline-flex; align-items: center; gap: 6px; color: #123b5d; }
  .act-muted { color: #7b969e; }
  .act-bar { width: 100%; min-width: 70px; height: 6px; border-radius: 99px; background: #e6f0f2; overflow: hidden; }
  .act-bar span { display: block; height: 100%; background: linear-gradient(90deg, #22c55e, #16a6b8); }

  .act-recent { display: flex; flex-direction: column; }
  .act-recent-row { display: flex; align-items: center; gap: 10px; padding: 10px 18px; border-top: 1px solid #eef5f6; cursor: pointer; background: none; border-left: 0; border-right: 0; border-bottom: 0; text-align: left; font: inherit; width: 100%; }
  .act-recent-row:first-child { border-top: 0; }
  .act-recent-row:hover { background: #f4fbfc; }
  .act-recent-row div { min-width: 0; flex: 1; }
  .act-recent-row b { display: block; color: #082f3a; font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .act-recent-row small { display: block; color: #7b969e; font-size: 11px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  .act-state { display: flex; align-items: center; gap: 8px; padding: 22px 18px; color: #6e8799; font-size: 13px; flex-wrap: wrap; }
  .act-state.error { color: #a83c55; }
  .act-spin { animation: actSpin 1s linear infinite; }

  .act-overlay { position: fixed; inset: 0; z-index: 6000; background: rgba(6,59,70,.35); display: flex; justify-content: flex-end; }
  .act-drawer { width: min(500px, 100%); height: 100%; overflow-y: auto; background: #fff; padding: 20px; display: flex; flex-direction: column; gap: 14px; box-sizing: border-box; box-shadow: -20px 0 50px rgba(6,59,70,.2); }
  .act-drawer-head { display: flex; justify-content: space-between; gap: 10px; }
  .act-drawer-head h3 { margin: 0; color: #082f3a; }
  .act-drawer-head p { margin: 4px 0 0; font-size: 12px; color: #6e8799; }
  .act-drawer h4 { margin: 4px 0 0; font-size: 13px; color: #082f3a; display: flex; align-items: center; gap: 6px; }
  .act-facts { display: flex; flex-direction: column; gap: 8px; font-size: 13px; color: #123b5d; background: #f4fbfc; border: 1px solid #e3eef2; border-radius: 12px; padding: 12px; }
  .act-facts span { display: flex; align-items: center; gap: 7px; }
  .act-mini-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .act-mini-stats div { border: 1px solid #e3eef2; border-radius: 12px; padding: 10px; }
  .act-mini-stats span { display: block; font-size: 10.5px; font-weight: 750; color: #7b969e; text-transform: uppercase; }
  .act-mini-stats strong { font-size: 17px; color: #082f3a; }
  .act-session-list { display: flex; flex-direction: column; gap: 8px; }
  .act-session { border: 1px solid #e3eef2; border-radius: 12px; padding: 10px 12px; font-size: 12.5px; }
  .act-session-top { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
  .act-session-top .act-muted { margin-left: auto; font-weight: 700; }
  .act-session-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 10px; color: #123b5d; }
  .act-session-grid span { display: inline-flex; align-items: center; gap: 5px; min-width: 0; }

  .act-compare { display: flex; flex-direction: column; gap: 10px; padding: 14px 18px; }
  .act-compare-row { display: grid; grid-template-columns: minmax(90px, 160px) 1fr auto; gap: 10px; align-items: center; font-size: 12.5px; }
  .act-compare-row b { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #082f3a; }
  .act-compare-track { height: 10px; border-radius: 99px; background: #eef5f6; overflow: hidden; display: flex; }
  .act-compare-track .on { background: #22c55e; }
  .act-compare-track .off { background: #c9d8de; }
  .act-compare-legend { display: flex; gap: 14px; font-size: 11.5px; color: #6e8799; padding: 0 18px 14px; }
  .act-compare-legend i { display: inline-block; width: 9px; height: 9px; border-radius: 3px; margin-right: 5px; vertical-align: -1px; }

  @keyframes actSpin { to { transform: rotate(360deg); } }
  @keyframes actPulse { 0% { box-shadow: 0 0 0 0 rgba(34,197,94,.55); } 70% { box-shadow: 0 0 0 7px rgba(34,197,94,0); } 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); } }
  @media (prefers-reduced-motion: reduce) { .act-pill.on i, .act-live.on i { animation: none; } }

  @media (max-width: 1180px) {
    .act-grid-2 { grid-template-columns: 1fr; }
    .act-filters { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .act-filters .act-search { grid-column: span 3; }
  }
  @media (max-width: 720px) {
    .act-hero { padding: 18px; border-radius: 20px; }
    .act-hero h1 { font-size: 21px; }
    .act-hero-actions { width: 100%; }
    .act-filters { grid-template-columns: repeat(2, minmax(0, 1fr)); padding: 12px; }
    .act-filters .act-search { grid-column: 1 / -1; }
    .act-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .act-stat { padding: 12px; gap: 10px; }
    .act-stat strong { font-size: 19px; }
    .act-session-grid { grid-template-columns: 1fr; }
    .act-tabs { width: 100%; }
    .act-tabs a { flex: 1; text-align: center; }
  }
  @media (max-width: 420px) {
    .act-stats { grid-template-columns: 1fr; }
    .act-filters { grid-template-columns: 1fr; }
  }
`;export{te as A,q as D,T as G,ae as L,C as R,G as S,ie as U,F as a,oe as b,ee as c,I as d,m as e,b as f,H as g,z as h,B as r,U as t,J as u};
