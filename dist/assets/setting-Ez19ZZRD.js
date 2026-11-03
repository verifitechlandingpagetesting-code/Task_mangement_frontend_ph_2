import{c as L,r as i,A as v,j as e,D as Ae,f as De,w as Ee,e as Fe}from"./index-DdKrgUlZ.js";import{A as ge}from"./archive-C-tpmx3I.js";import{S as Me}from"./search-BYLJVZob.js";import{R as Ie}from"./refresh-cw-BTp_wSg-.js";import{T as se}from"./triangle-alert-470AK52j.js";import{F as be}from"./file-text-DS9sIUc2.js";import{M as Re}from"./message-circle-DZbdconb.js";import{T as ae}from"./trash-aqL3TGvH.js";import{S as le}from"./send-D2GKwi2o.js";import{C as Le}from"./copy-Cejnsmqu.js";import{W as Ue}from"./waves-horizontal-B6LtjNOg.js";import{U as H}from"./user-round-D24TWiSQ.js";import{S as W}from"./shield-check-CEPKVIb-.js";import{S as ce}from"./sparkles-DY2Y4YoQ.js";import{C as de}from"./circle-check-Bb8TVzmm.js";import{B as pe}from"./building-complex-Bxqcna1Q.js";import{M as q}from"./mail-DrXfpxX_.js";import{P as xe}from"./phone-VIw9RyrB.js";import{C as F}from"./check-WYZBZ-5h.js";import{S as Be}from"./save-CzRYAFCR.js";import{M as me}from"./mic-CcHJBXzY.js";import{M as $e}from"./monitor-up-48IzVBmj.js";import{C as _e}from"./chevron-down-CO4vTuki.js";import{B as Q}from"./bell-DaeaMSkj.js";import{C as Oe}from"./calendar-days-YATm_8B9.js";import{L as ie}from"./lock-keyhole-Bx_x1vA_.js";import{Z as Ye}from"./zap-CvWz7EXD.js";import{E as He}from"./eye-off-HvWWQrwG.js";import{E as We}from"./eye-blwpcqcq.js";const je={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};je.node;const Ve=L(je);const we={name:"credit-card",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}],["path",{d:"M6 14h2",key:"mk7k0u"}]]};we.node;const he=L(we);const ve={name:"earth",size:24,node:[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["globe-2"]};ve.node;const fe=L(ve);const ye={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};ye.node;const Ke=L(ye);const Ne={name:"link-2-off",size:24,node:[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]};Ne.node;const Ge=L(Ne),Je=[{value:"all",label:"All files"},{value:"backup",label:"Message deleted"},{value:"chat",label:"Still in chat"}],ue=(t=0)=>t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:t<1024*1024*1024?`${(t/1024/1024).toFixed(1)} MB`:`${(t/1024/1024/1024).toFixed(2)} GB`,Ze=t=>t?new Date(t).toLocaleString([],{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",Xe=()=>{const[t,o]=i.useState([]),[x,n]=i.useState({files:0,size:0,inChat:0,backedUp:0}),[h,y]=i.useState(!1),[f,u]=i.useState(""),[m,P]=i.useState("all"),[g,b]=i.useState(1),[S,d]=i.useState(0),[j,T]=i.useState(!0),[U,l]=i.useState(""),[A,p]=i.useState(""),C=25,D=i.useCallback(async()=>{T(!0),l("");try{const a=await v.get("/api/chat/backup",{params:{search:f.trim()||void 0,location:m==="all"?void 0:m,page:g,limit:C}});o(a.data.data||[]),n(a.data.summary||{files:0,size:0,inChat:0,backedUp:0}),y(!!a.data.canDelete),d(a.data.total||0)}catch(a){l(a.response?.data?.message||"Unable to load the chat file backup.")}finally{T(!1)}},[f,m,g]);i.useEffect(()=>{const a=setTimeout(D,250);return()=>clearTimeout(a)},[D]),i.useEffect(()=>b(1),[f,m]);const V=async a=>{p(a._id),l("");try{const N=await v.get(`/api/chat/backup/${a._id}/download`,{responseType:"blob"}),w=URL.createObjectURL(N.data),z=document.createElement("a");z.href=w,z.download=a.name,document.body.appendChild(z),z.click(),z.remove(),setTimeout(()=>URL.revokeObjectURL(w),1e3)}catch(N){let w="Unable to download the file.";try{w=JSON.parse(await N.response?.data?.text())?.message||w}catch{}l(w)}finally{p("")}},K=async a=>{if(window.confirm(`Delete "${a.name}" from the backup permanently?`)){p(a._id),l("");try{await v.delete(`/api/chat/backup/${a._id}`),await D()}catch(N){l(N.response?.data?.message||"Unable to delete the file.")}finally{p("")}}},I=Math.max(1,Math.ceil(S/C));return e.jsxs("section",{className:"section-card",children:[e.jsx("style",{children:`
        .cfb-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin:4px 0 16px}
        .cfb-stat{padding:12px 14px;border:1px solid #dcebef;border-radius:12px;background:#f7fcfd}
        .cfb-stat strong{display:block;font-size:18px;color:#123B5D}
        .cfb-stat span{font-size:11px;color:#6E8799}
        .cfb-toolbar{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:12px}
        .cfb-search{flex:1;min-width:200px;display:flex;align-items:center;gap:8px;padding:0 12px;height:40px;border:1px solid #d7e7eb;border-radius:10px;background:#fff}
        .cfb-search input{flex:1;min-width:0;border:0;outline:none;font:inherit;font-size:13px;background:transparent}
        .cfb-filter{height:40px;padding:0 10px;border:1px solid #d7e7eb;border-radius:10px;background:#fff;font:inherit;font-size:13px;color:#123B5D}
        .cfb-icon-btn{height:40px;width:40px;display:grid;place-items:center;border:1px solid #d7e7eb;border-radius:10px;background:#fff;color:#0b8f87;cursor:pointer}
        .cfb-list{display:flex;flex-direction:column;border:1px solid #e3eef1;border-radius:12px;overflow:hidden}
        .cfb-row{display:flex;align-items:center;gap:12px;padding:11px 14px;border-bottom:1px solid #eef5f6;background:#fff}
        .cfb-row:last-child{border-bottom:0}
        .cfb-file-icon{width:36px;height:36px;flex-shrink:0;display:grid;place-items:center;border-radius:10px;background:#E8F7F8;color:#0b8f87}
        .cfb-main{flex:1;min-width:0}
        .cfb-name{font-size:13px;font-weight:700;color:#123B5D;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .cfb-meta{margin-top:3px;font-size:11px;color:#6E8799;display:flex;flex-wrap:wrap;gap:4px 10px}
        .cfb-badge{display:inline-block;padding:1px 8px;border-radius:999px;font-size:10px;font-weight:800}
        .cfb-badge.backup{background:#FFF5E6;color:#a16207}
        .cfb-badge.chat{background:#E8F7F8;color:#0b8f87}
        .cfb-actions{display:flex;gap:6px;flex-shrink:0}
        .cfb-actions button{height:32px;padding:0 10px;display:flex;align-items:center;gap:5px;border:1px solid #d7e7eb;border-radius:8px;background:#fff;color:#0b6f6a;font-size:12px;font-weight:700;cursor:pointer}
        .cfb-actions button.danger{color:#b91c1c;border-color:#fecaca}
        .cfb-actions button:disabled{opacity:.5;cursor:not-allowed}
        .cfb-empty{padding:26px;text-align:center;color:#6E8799;font-size:13px}
        .cfb-error{display:flex;gap:8px;align-items:center;margin-bottom:12px;padding:10px 12px;border-radius:10px;background:#fef2f2;color:#b91c1c;font-size:12px}
        .cfb-pager{display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-size:12px;color:#6E8799}
        .cfb-pager button{height:32px;padding:0 12px;border:1px solid #d7e7eb;border-radius:8px;background:#fff;cursor:pointer}
        .cfb-pager button:disabled{opacity:.5;cursor:not-allowed}
        @media (max-width:640px){.cfb-row{flex-wrap:wrap}.cfb-actions{width:100%;justify-content:flex-end}}
      `}),e.jsx("div",{className:"section-header",children:e.jsxs("div",{className:"section-title-wrap",children:[e.jsx("div",{className:"section-icon",children:e.jsx(ge,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Chat file backup"}),e.jsx("p",{className:"section-description",children:"Every file shared in chat is kept here. When a disappearing message is deleted, its file stays in this backup."})]})]})}),e.jsxs("div",{className:"cfb-stats",children:[e.jsxs("div",{className:"cfb-stat",children:[e.jsx("strong",{children:x.files}),e.jsx("span",{children:"Files in backup"})]}),e.jsxs("div",{className:"cfb-stat",children:[e.jsx("strong",{children:x.backedUp}),e.jsx("span",{children:"From deleted messages"})]}),e.jsxs("div",{className:"cfb-stat",children:[e.jsx("strong",{children:x.inChat}),e.jsx("span",{children:"Still in chats"})]}),e.jsxs("div",{className:"cfb-stat",children:[e.jsx("strong",{children:ue(x.size)}),e.jsx("span",{children:"Total size"})]})]}),e.jsxs("div",{className:"cfb-toolbar",children:[e.jsxs("label",{className:"cfb-search",children:[e.jsx(Me,{size:15,color:"#63929d"}),e.jsx("input",{type:"search",placeholder:"Search by file name, sender or chat",value:f,onChange:a=>u(a.target.value)})]}),e.jsx("select",{className:"cfb-filter",value:m,onChange:a=>P(a.target.value),"aria-label":"Filter files",children:Je.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))}),e.jsx("button",{type:"button",className:"cfb-icon-btn",onClick:D,title:"Refresh","aria-label":"Refresh",children:e.jsx(Ie,{size:16})})]}),U&&e.jsxs("div",{className:"cfb-error",children:[e.jsx(se,{size:15})," ",U]}),e.jsx("div",{className:"cfb-list",children:j&&!t.length?e.jsx("div",{className:"cfb-empty",children:"Loading files..."}):t.length===0?e.jsx("div",{className:"cfb-empty",children:f||m!=="all"?"No files match your search.":"No files have been shared in chat yet."}):t.map(a=>{const N=/^image\//.test(a.mimetype)?Ke:be;return e.jsxs("div",{className:"cfb-row",children:[e.jsx("span",{className:"cfb-file-icon",children:e.jsx(N,{size:17})}),e.jsxs("div",{className:"cfb-main",children:[e.jsx("div",{className:"cfb-name",title:a.name,children:a.name}),e.jsxs("div",{className:"cfb-meta",children:[e.jsx("span",{className:`cfb-badge ${a.location}`,children:a.location==="backup"?"Message deleted":"In chat"}),e.jsx("span",{children:ue(a.size)}),e.jsxs("span",{children:["by ",a.senderName||"Unknown"]}),e.jsxs("span",{children:[e.jsx(Re,{size:10,style:{verticalAlign:"-1px"}})," ",a.conversationName||a.conversationType]}),e.jsx("span",{children:Ze(a.sharedAt)})]})]}),e.jsxs("div",{className:"cfb-actions",children:[e.jsxs("button",{type:"button",onClick:()=>V(a),disabled:A===a._id,children:[e.jsx(Ae,{size:13})," Download"]}),h&&a.location==="backup"&&e.jsxs("button",{type:"button",className:"danger",onClick:()=>K(a),disabled:A===a._id,children:[e.jsx(ae,{size:13})," Delete"]})]})]},a._id)})}),I>1&&e.jsxs("div",{className:"cfb-pager",children:[e.jsx("button",{type:"button",onClick:()=>b(a=>a-1),disabled:g<=1,children:"Previous"}),e.jsxs("span",{children:["Page ",g," of ",I," · ",S," files"]}),e.jsx("button",{type:"button",onClick:()=>b(a=>a+1),disabled:g>=I,children:"Next"})]})]})},qe=({notify:t})=>{const[o,x]=i.useState(null),[n,h]=i.useState(null),[y,f]=i.useState(!1),u=i.useRef(null),m=i.useCallback(async()=>{try{const d=await v.get("/api/telegram/status");return x(d.data?.data||null),d.data?.data}catch{return x(null),null}},[]);i.useEffect(()=>(m(),()=>clearInterval(u.current)),[m]);const P=d=>{clearInterval(u.current),u.current=setInterval(async()=>{(await m())?.linked?(clearInterval(u.current),h(null),t?.("Telegram connected")):Date.now()>new Date(d).getTime()&&(clearInterval(u.current),h(null))},3e3)},g=async()=>{f(!0);try{const j=(await v.post("/api/telegram/link-code")).data?.data;h(j),j?.deepLink&&window.open(j.deepLink,"_blank","noopener"),P(j.expiresAt)}catch(d){t?.(d.response?.data?.message||"Could not create a Telegram code")}finally{f(!1)}},b=async()=>{f(!0);try{await v.delete("/api/telegram/link"),await m(),t?.("Telegram disconnected")}catch(d){t?.(d.response?.data?.message||"Could not disconnect Telegram")}finally{f(!1)}},S=()=>{navigator.clipboard?.writeText(`/link ${n.code}`),t?.("Copied — paste it in the bot chat")};return o?e.jsxs("div",{className:"preference-item",style:{alignItems:"flex-start",flexWrap:"wrap",gap:12},children:[e.jsxs("div",{className:"preference-left",children:[e.jsx("div",{className:"preference-icon",children:e.jsx(le,{size:18})}),e.jsxs("div",{children:[e.jsx("p",{className:"preference-name",children:"Telegram"}),e.jsx("p",{className:"preference-description",children:o.enabled?o.linked?`Connected${o.username?` as @${o.username}`:o.firstName?` as ${o.firstName}`:""}. View, create, assign and update tasks from Telegram; changes show here at once.`:"Connect the bot to view, create, assign and update tasks from Telegram and get your notifications there.":"The Telegram bot is not set up on the server yet. Ask your administrator."}),n&&!o.linked&&e.jsxs("div",{style:{marginTop:10,fontSize:13,lineHeight:1.6},children:[n.deepLink&&e.jsxs("div",{children:["Telegram should open — tap ",e.jsx("b",{children:"Start"}),"."," ",e.jsxs("a",{href:n.deepLink,target:"_blank",rel:"noopener noreferrer",children:["Open @",n.botUsername]})]}),e.jsxs("div",{children:["Or send this to the bot: ",e.jsxs("code",{style:{fontWeight:700},children:["/link ",n.code]})," ",e.jsx("button",{type:"button",className:"secondary-button",style:{padding:"2px 8px"},onClick:S,"aria-label":"Copy code",children:e.jsx(Le,{size:14})})]}),e.jsx("div",{style:{opacity:.7},children:"The code works once and expires in 10 minutes."})]})]})]}),o.enabled&&(o.linked?e.jsxs("button",{type:"button",className:"secondary-button",onClick:b,disabled:y,children:[e.jsx(Ge,{size:16})," Disconnect"]}):e.jsxs("button",{type:"button",className:"primary-button",onClick:g,disabled:y,children:[e.jsx(le,{size:16})," ",n?"New code":"Connect Telegram"]}))]}):null},Ps=()=>{const[t,o]=i.useState("profile"),x=i.useMemo(()=>{try{return De(JSON.parse(localStorage.getItem("user")||"null"),"chat","view")}catch{return!1}},[]),[n,h]=i.useState({fullName:"",email:"",phone:"",department:"",bio:""}),[y,f]=i.useState(""),[u,m]=i.useState(!0),[P,g]=i.useState(""),[b,S]=i.useState(!1),[d,j]=i.useState(!1),[T,U]=i.useState(null),[l,A]=i.useState({microphone:!0,keepAwake:!0,aiSummary:!0,emailNotifications:!0,taskReminders:!0,desktopNotifications:!0,telegramNotifications:!0}),[p,C]=i.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[D,V]=i.useState(!1),[K,I]=i.useState(!1),[a,N]=i.useState(!1),[w,z]=i.useState("Gemini"),[G,te]=i.useState("English"),[J,ne]=i.useState("Asia/Kolkata"),[ke,B]=i.useState(!1),[ze,$]=i.useState(!1),[re,oe]=i.useState(""),Z=["Admin","SuperAdmin"].includes(y),_=i.useCallback(s=>{f(s.role||""),h({fullName:s.name||"",email:s.email||"",phone:s.phone||"",department:s.department||"",bio:s.bio||""});const r=s.preferences||{};A(k=>({...k,...Object.fromEntries(Object.keys(k).filter(Y=>typeof r[Y]=="boolean").map(Y=>[Y,r[Y]]))})),r.aiProvider&&z(r.aiProvider),r.language&&te(r.language),r.timezone&&ne(r.timezone),U(s)},[]),X=i.useCallback(async()=>{m(!0),g("");try{const s=await v.get("/api/auth/me");_(s.data?.data||{})}catch(s){g(s.response?.data?.message||"Failed to load your settings.")}finally{m(!1)}},[_]);i.useEffect(()=>{X()},[X]);const Se=i.useMemo(()=>n.fullName.split(" ").map(s=>s.charAt(0)).join("").slice(0,2).toUpperCase(),[n.fullName]),c=s=>{oe(s),setTimeout(()=>{oe("")},2800)},O=(s,r)=>{h(k=>({...k,[s]:r})),B(!1)},E=s=>{s==="desktopNotifications"&&!l.desktopNotifications&&Fe().then(r=>{r==="denied"?(A(k=>({...k,desktopNotifications:!1})),c("Notifications are blocked in this browser. Allow them from the lock icon in the address bar.")):r==="unsupported"&&c("This browser does not support push notifications.")}),A(r=>({...r,[s]:!r[s]})),B(!1)},Ce=async()=>{if(!b){if(!n.fullName.trim()){c("Full name cannot be empty");return}S(!0);try{const[s]=await Promise.all([v.put("/api/auth/me",{name:n.fullName.trim(),phone:n.phone.trim(),bio:n.bio,...Z?{department:n.department}:{}}),v.put("/api/auth/me/preferences",{...l,aiProvider:w,language:G,timezone:J})]),r=s.data?.data;if(r){_({...r,preferences:{...r.preferences,...l,aiProvider:w,language:G,timezone:J}});try{const k=JSON.parse(localStorage.getItem("user")||"{}");localStorage.setItem("user",JSON.stringify({...k,name:r.name,phone:r.phone,department:r.department,preferences:{...k.preferences||{},...l}})),window.dispatchEvent(new Event("user-updated"))}catch{}}l.desktopNotifications||Ee(),B(!0),c("Profile settings saved successfully"),setTimeout(()=>{B(!1)},2500)}catch(s){c(s.response?.data?.message||"Failed to save your settings")}finally{S(!1)}}},Pe=async()=>{if(!p.currentPassword){c("Enter your current password");return}if(!p.newPassword){c("Enter a new password");return}if(p.newPassword.length<6){c("New password must be at least 6 characters");return}if(p.newPassword!==p.confirmPassword){c("New passwords do not match");return}if(!d){j(!0);try{await v.put("/api/auth/change-password",{currentPassword:p.currentPassword,newPassword:p.newPassword}),c("Password updated successfully"),C({currentPassword:"",newPassword:"",confirmPassword:""})}catch(s){c(s.response?.data?.message||"Failed to update password")}finally{j(!1)}}},Te=()=>{$(!1),c(["Admin","SuperAdmin"].includes(y)?"Ask the Super Admin to remove administrator accounts":"Ask your administrator to delete your account")};return e.jsxs("div",{className:"settings-page",children:[e.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .settings-page {
          min-height: 100vh;
          padding: 26px;
          background:
            radial-gradient(circle at 5% 5%, rgba(56, 189, 248, 0.13), transparent 28%),
            radial-gradient(circle at 95% 10%, rgba(20, 184, 166, 0.10), transparent 28%),
            linear-gradient(135deg, #f4fbfc 0%, #eef8fa 45%, #f8fbfd 100%);
          color: #12334b;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .settings-shell {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
        }

        .settings-hero {
          position: relative;
          overflow: hidden;
          min-height: 190px;
          border-radius: 28px;
          padding: 30px 34px;
          background:
            linear-gradient(
              135deg,
              #073b4c 0%,
              #075985 48%,
              #0f766e 100%
            );
          box-shadow:
            0 22px 55px rgba(7, 59, 76, 0.18),
            inset 0 1px rgba(255,255,255,0.14);
          color: white;
        }

        .settings-hero::before {
          content: "";
          position: absolute;
          width: 330px;
          height: 330px;
          right: -90px;
          top: -150px;
          border-radius: 50%;
          background: rgba(255,255,255,0.09);
        }

        .settings-hero::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          right: 160px;
          bottom: -200px;
          border-radius: 50%;
          border: 45px solid rgba(255,255,255,0.06);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
        }

        .hero-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .hero-icon {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.13);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(12px);
        }

        .hero-icon svg {
          width: 30px;
          height: 30px;
        }

        .hero-title {
          margin: 0;
          font-size: 30px;
          line-height: 1.15;
          letter-spacing: -0.7px;
          font-weight: 800;
        }

        .hero-subtitle {
          margin: 8px 0 0;
          color: rgba(255,255,255,0.72);
          font-size: 14px;
        }

        .hero-status {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.15);
          color: #d8fff7;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #5eead4;
          box-shadow: 0 0 0 5px rgba(94,234,212,0.12);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr);
          gap: 22px;
          margin-top: 22px;
          align-items: start;
        }

        .settings-sidebar {
          position: sticky;
          top: 20px;
          padding: 15px;
          border: 1px solid #d8e9ef;
          border-radius: 24px;
          background: rgba(255,255,255,0.86);
          box-shadow: 0 12px 35px rgba(10, 68, 89, 0.08);
          backdrop-filter: blur(15px);
        }

        .side-label {
          padding: 9px 12px 12px;
          color: #7190a3;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-weight: 800;
        }

        .tab-button {
          width: 100%;
          border: 0;
          background: transparent;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 14px;
          margin-bottom: 6px;
          border-radius: 15px;
          color: #5d788b;
          cursor: pointer;
          text-align: left;
          font-size: 14px;
          font-weight: 700;
          transition: 0.2s ease;
        }

        .tab-button:hover {
          background: #edf8fa;
          color: #087f87;
        }

        .tab-button.active {
          color: white;
          background: linear-gradient(135deg, #087f87, #0874a6);
          box-shadow: 0 9px 22px rgba(8, 127, 135, 0.20);
        }

        .tab-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #edf7f8;
          color: #087f87;
        }

        .tab-button.active .tab-icon {
          background: rgba(255,255,255,0.15);
          color: white;
        }

        .tab-text {
          flex: 1;
        }

        .tab-arrow {
          opacity: 0.45;
        }

        .sidebar-footer {
          margin-top: 18px;
          padding: 15px;
          border-radius: 17px;
          background: linear-gradient(135deg, #ecfbfa, #edf8ff);
          border: 1px solid #d6eeee;
        }

        .sidebar-footer-title {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 800;
          color: #12546a;
        }

        .sidebar-footer-text {
          margin: 7px 0 0;
          font-size: 11px;
          line-height: 1.55;
          color: #7190a3;
        }

        .main-content {
          min-width: 0;
        }

        .section-card {
          background: rgba(255,255,255,0.93);
          border: 1px solid #d8e7ed;
          border-radius: 24px;
          padding: 26px;
          margin-bottom: 20px;
          box-shadow: 0 10px 30px rgba(12, 67, 88, 0.055);
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 24px;
        }

        .section-title-wrap {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .section-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #087f87;
          background: #e9f8f7;
          border: 1px solid #cdecea;
        }

        .section-title {
          margin: 0;
          font-size: 19px;
          color: #12334b;
          font-weight: 800;
        }

        .section-description {
          margin: 4px 0 0;
          font-size: 12px;
          color: #7892a2;
        }

        .profile-banner {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 19px;
          margin-bottom: 25px;
          border-radius: 20px;
          background:
            linear-gradient(
              135deg,
              #edfafa 0%,
              #eff9ff 100%
            );
          border: 1px solid #d4e9ee;
        }

        .avatar {
          width: 78px;
          height: 78px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 23px;
          color: white;
          font-size: 25px;
          font-weight: 800;
          background: linear-gradient(145deg, #0f766e, #087f87, #0874a6);
          box-shadow: 0 12px 25px rgba(8,127,135,0.20);
        }

        .profile-banner-content {
          flex: 1;
        }

        .profile-name {
          margin: 0;
          color: #12334b;
          font-size: 18px;
          font-weight: 800;
        }

        .profile-email {
          margin: 4px 0 0;
          color: #678294;
          font-size: 13px;
        }

        .profile-tags {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 9px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
        }

        .tag-ocean {
          color: #087f87;
          background: #dff7f4;
        }

        .tag-blue {
          color: #17648a;
          background: #e5f3fb;
        }

        .upload-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #cde2e8;
          background: white;
          color: #18556d;
          padding: 10px 13px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .upload-button:hover {
          background: #f1fafb;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .field.full {
          grid-column: 1 / -1;
        }

        .field-label {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
          color: #28475a;
          font-size: 12px;
          font-weight: 800;
        }

        .field-input,
        .field-select,
        .field-textarea {
          width: 100%;
          border: 1px solid #d7e6eb;
          outline: none;
          border-radius: 13px;
          background: #f8fbfc;
          color: #183b50;
          font-family: inherit;
          font-size: 13px;
          transition: 0.2s ease;
        }

        .field-input,
        .field-select {
          height: 45px;
          padding: 0 13px;
        }

        .field-textarea {
          min-height: 105px;
          resize: vertical;
          padding: 13px;
          line-height: 1.55;
        }

        .field-input:focus,
        .field-select:focus,
        .field-textarea:focus {
          border-color: #43a8ad;
          background: white;
          box-shadow: 0 0 0 4px rgba(67,168,173,0.10);
        }

        .input-with-icon {
          position: relative;
        }

        .input-with-icon .field-input {
          padding-left: 41px;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #73a0ae;
          pointer-events: none;
        }

        .save-row {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #e4eef1;
        }

        .primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 43px;
          padding: 0 17px;
          border: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, #078b83, #0874a6);
          color: white;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 9px 22px rgba(8,127,135,0.18);
        }

        .primary-button:hover {
          transform: translateY(-1px);
        }

        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 43px;
          padding: 0 17px;
          border: 1px solid #d5e5ea;
          border-radius: 12px;
          background: white;
          color: #47677a;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .preference-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .preference-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 16px 17px;
          border-radius: 16px;
          border: 1px solid #dce9ed;
          background: #fbfdfe;
          transition: 0.2s ease;
        }

        .preference-item:hover {
          border-color: #b9dfe3;
          background: #f7fcfd;
        }

        .preference-left {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .preference-icon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 12px;
          background: #e9f8f7;
          color: #087f87;
        }

        .preference-name {
          margin: 0;
          color: #24475a;
          font-size: 13px;
          font-weight: 800;
        }

        .preference-description {
          margin: 4px 0 0;
          color: #7b94a3;
          font-size: 11px;
        }

        .toggle {
          width: 46px;
          height: 25px;
          padding: 3px;
          border: 0;
          border-radius: 999px;
          background: #d5e2e6;
          cursor: pointer;
          transition: 0.2s ease;
          flex-shrink: 0;
        }

        .toggle.on {
          background: linear-gradient(135deg, #0f9f93, #0874a6);
        }

        .toggle-thumb {
          width: 19px;
          height: 19px;
          display: block;
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.16);
          transition: transform 0.2s ease;
        }

        .toggle.on .toggle-thumb {
          transform: translateX(21px);
        }

        .select-wrap {
          position: relative;
          width: 180px;
          flex-shrink: 0;
        }

        .select-wrap select {
          appearance: none;
          width: 100%;
          height: 40px;
          padding: 0 35px 0 12px;
          border-radius: 11px;
          border: 1px solid #d6e6eb;
          background: white;
          color: #33576b;
          font-size: 12px;
          outline: none;
        }

        .select-arrow {
          position: absolute;
          right: 11px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #7594a3;
        }

        .security-box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .password-field {
          position: relative;
        }

        .password-field .field-input {
          padding-right: 42px;
        }

        .password-eye {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          border: 0;
          background: transparent;
          color: #7190a0;
          cursor: pointer;
        }

        .security-tip {
          display: flex;
          gap: 11px;
          margin-top: 19px;
          padding: 14px;
          border-radius: 14px;
          background: #effafa;
          border: 1px solid #d3eeee;
          color: #527587;
          font-size: 11px;
          line-height: 1.5;
        }

        .subscription-card {
          position: relative;
          overflow: hidden;
          padding: 24px;
          border-radius: 20px;
          background:
            linear-gradient(135deg, #073b4c, #075985 58%, #0f766e);
          color: white;
        }

        .subscription-card::after {
          content: "";
          position: absolute;
          width: 230px;
          height: 230px;
          right: -110px;
          top: -110px;
          border-radius: 50%;
          border: 40px solid rgba(255,255,255,0.07);
        }

        .subscription-content {
          position: relative;
          z-index: 2;
        }

        .subscription-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 15px;
        }

        .plan-label {
          color: rgba(255,255,255,0.62);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .plan-name {
          margin: 6px 0 0;
          font-size: 24px;
          font-weight: 850;
        }

        .plan-badge {
          padding: 7px 11px;
          border-radius: 999px;
          background: rgba(94,234,212,0.14);
          color: #99f6e4;
          border: 1px solid rgba(153,246,228,0.2);
          font-size: 10px;
          font-weight: 800;
        }

        .plan-details {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 24px;
        }

        .plan-detail {
          padding: 13px;
          border-radius: 14px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.09);
        }

        .plan-detail-label {
          color: rgba(255,255,255,0.55);
          font-size: 10px;
        }

        .plan-detail-value {
          margin-top: 5px;
          font-size: 13px;
          font-weight: 800;
        }

        .danger-card {
          border-color: #ffd6d6;
          background: linear-gradient(135deg, #fff, #fffafa);
        }

        .danger-card .section-icon {
          color: #dc2626;
          background: #fff0f0;
          border-color: #ffdcdc;
        }

        .danger-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .danger-title {
          margin: 0;
          color: #b42323;
          font-size: 17px;
          font-weight: 800;
        }

        .danger-description {
          margin: 6px 0 0;
          color: #8d6b6b;
          font-size: 12px;
        }

        .danger-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 42px;
          padding: 0 15px;
          border: 1px solid #ffcaca;
          border-radius: 11px;
          background: #fff4f4;
          color: #dc2626;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
        }

        .danger-button:hover {
          background: #fee2e2;
        }

        .toast {
          position: fixed;
          right: 25px;
          bottom: 25px;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 17px;
          border-radius: 14px;
          background: #073b4c;
          color: white;
          box-shadow: 0 15px 35px rgba(7,59,76,0.25);
          font-size: 12px;
          font-weight: 700;
          animation: slideIn 0.25s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(4, 25, 35, 0.62);
          backdrop-filter: blur(6px);
        }

        .delete-modal {
          width: 100%;
          max-width: 450px;
          padding: 26px;
          border-radius: 24px;
          background: white;
          box-shadow: 0 30px 80px rgba(0,0,0,0.25);
          animation: modalIn 0.2s ease;
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .modal-icon {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #fff0f0;
          color: #dc2626;
        }

        .modal-title {
          margin: 18px 0 8px;
          color: #17374a;
          font-size: 20px;
          font-weight: 850;
        }

        .modal-text {
          margin: 0;
          color: #718898;
          font-size: 12px;
          line-height: 1.6;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 9px;
          margin-top: 23px;
        }

        .confirm-delete {
          min-height: 41px;
          padding: 0 15px;
          border: 0;
          border-radius: 11px;
          background: #dc2626;
          color: white;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        @media (max-width: 1100px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .settings-sidebar {
            position: static;
          }

          .settings-sidebar nav {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 6px;
          }

          .side-label,
          .sidebar-footer {
            display: none;
          }

          .tab-button {
            margin: 0;
          }

          .security-box {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .settings-page {
            padding: 13px;
          }

          .settings-hero {
            padding: 23px;
            border-radius: 21px;
          }

          .hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .hero-title {
            font-size: 25px;
          }

          .settings-sidebar nav {
            grid-template-columns: 1fr;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .field.full {
            grid-column: auto;
          }

          .profile-banner {
            align-items: flex-start;
            flex-direction: column;
          }

          .upload-button {
            width: 100%;
            justify-content: center;
          }

          .preference-item {
            align-items: flex-start;
          }

          .select-wrap {
            width: 135px;
          }

          .plan-details {
            grid-template-columns: 1fr;
          }

          .danger-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .danger-button {
            width: 100%;
            justify-content: center;
          }

          .section-card {
            padding: 19px;
            border-radius: 19px;
          }
        }

        /* ===== shared theme (matches Dashboard / Users / Tasks) ===== */
        .settings-page .settings-hero {
          background: var(--ts-hero);
          border: var(--ts-hero-border);
          box-shadow: var(--ts-hero-shadow);
          color: var(--ts-on-hero);
        }

      `}),e.jsxs("div",{className:"settings-shell",children:[e.jsx("section",{className:"settings-hero",children:e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"hero-left",children:[e.jsx("div",{className:"hero-icon",children:e.jsx(Ue,{})}),e.jsxs("div",{children:[e.jsx("h1",{className:"hero-title",children:"Workspace Settings"}),e.jsx("p",{className:"hero-subtitle",children:"Manage your profile, preferences, security and workspace experience."})]})]}),e.jsxs("div",{className:"hero-status",children:[e.jsx("span",{className:"status-dot"}),"Workspace synced"]})]})}),e.jsxs("div",{className:"content-grid",children:[e.jsxs("aside",{className:"settings-sidebar",children:[e.jsx("div",{className:"side-label",children:"Settings menu"}),e.jsxs("nav",{children:[e.jsxs("button",{className:`tab-button ${t==="profile"?"active":""}`,onClick:()=>o("profile"),children:[e.jsx("span",{className:"tab-icon",children:e.jsx(H,{size:18})}),e.jsx("span",{className:"tab-text",children:"Profile"}),e.jsx("span",{className:"tab-arrow",children:"›"})]}),e.jsxs("button",{className:`tab-button ${t==="security"?"active":""}`,onClick:()=>o("security"),children:[e.jsx("span",{className:"tab-icon",children:e.jsx(W,{size:18})}),e.jsx("span",{className:"tab-text",children:"Security"}),e.jsx("span",{className:"tab-arrow",children:"›"})]}),x&&e.jsxs("button",{className:`tab-button ${t==="backup"?"active":""}`,onClick:()=>o("backup"),children:[e.jsx("span",{className:"tab-icon",children:e.jsx(ge,{size:18})}),e.jsx("span",{className:"tab-text",children:"Chat file backup"}),e.jsx("span",{className:"tab-arrow",children:"›"})]})]}),e.jsxs("div",{className:"sidebar-footer",children:[e.jsxs("div",{className:"sidebar-footer-title",children:[e.jsx(ce,{size:14}),"Ocean workspace"]}),e.jsx("p",{className:"sidebar-footer-text",children:"Your preferences are stored for this workspace and can be changed anytime."})]})]}),e.jsxs("main",{className:"main-content",children:[P&&e.jsxs("section",{className:"section-card",style:{borderColor:"#fecaca",color:"#b91c1c"},children:[e.jsx(se,{size:16})," ",P," ",e.jsx("button",{className:"secondary-button",onClick:X,children:"Retry"})]}),t==="profile"&&e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"section-card",children:[e.jsx("div",{className:"section-header",children:e.jsxs("div",{className:"section-title-wrap",children:[e.jsx("div",{className:"section-icon",children:e.jsx(H,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Profile Information"}),e.jsx("p",{className:"section-description",children:"Keep your personal and organization details updated."})]})]})}),e.jsxs("div",{className:"profile-banner",children:[e.jsx("div",{className:"avatar",children:Se}),e.jsxs("div",{className:"profile-banner-content",children:[e.jsx("h3",{className:"profile-name",children:n.fullName||"Your Name"}),e.jsx("p",{className:"profile-email",children:n.email||"your@email.com"}),e.jsxs("div",{className:"profile-tags",children:[e.jsxs("span",{className:"tag tag-ocean",children:[e.jsx(de,{size:11}),"Administrator"]}),e.jsxs("span",{className:"tag tag-blue",children:[e.jsx(pe,{size:11}),n.department||"Workspace"]})]})]}),e.jsxs("button",{className:"upload-button",disabled:!0,title:"Profile photos are not supported yet",style:{opacity:.6,cursor:"not-allowed"},children:[e.jsx(Ve,{size:15}),"Change photo"]})]}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{className:"field-label",children:[e.jsx(H,{size:14}),"Full Name"]}),e.jsxs("div",{className:"input-with-icon",children:[e.jsx(H,{className:"input-icon",size:15}),e.jsx("input",{className:"field-input",value:n.fullName,onChange:s=>O("fullName",s.target.value),placeholder:"Enter your full name"})]})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{className:"field-label",children:[e.jsx(q,{size:14}),"Email Address"]}),e.jsxs("div",{className:"input-with-icon",children:[e.jsx(q,{className:"input-icon",size:15}),e.jsx("input",{type:"email",className:"field-input",value:n.email,readOnly:!0,title:"Your login email is managed by your administrator",style:{opacity:.75,cursor:"not-allowed"},placeholder:u?"Loading...":"Email"})]})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{className:"field-label",children:[e.jsx(xe,{size:14}),"Phone"]}),e.jsxs("div",{className:"input-with-icon",children:[e.jsx(xe,{className:"input-icon",size:15}),e.jsx("input",{className:"field-input",value:n.phone,onChange:s=>O("phone",s.target.value),placeholder:"Enter phone number"})]})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{className:"field-label",children:[e.jsx(pe,{size:14}),"Department"]}),e.jsxs("select",{className:"field-select",value:n.department,disabled:!Z,title:Z?void 0:"Your department is assigned by your administrator",onChange:s=>O("department",s.target.value),children:[e.jsx("option",{value:"",children:"No department"}),n.department&&!["Management","Development","Marketing","Human Resources","Finance","Operations"].includes(n.department)&&e.jsx("option",{children:n.department}),e.jsx("option",{children:"Management"}),e.jsx("option",{children:"Development"}),e.jsx("option",{children:"Marketing"}),e.jsx("option",{children:"Human Resources"}),e.jsx("option",{children:"Finance"}),e.jsx("option",{children:"Operations"})]})]}),e.jsxs("div",{className:"field full",children:[e.jsxs("label",{className:"field-label",children:[e.jsx(be,{size:14}),"About You"]}),e.jsx("textarea",{className:"field-textarea",value:n.bio,onChange:s=>O("bio",s.target.value),placeholder:"Tell your team something about yourself..."})]})]}),e.jsxs("div",{className:"save-row",children:[e.jsx("button",{className:"secondary-button",disabled:b||!T,onClick:()=>T&&_(T),children:"Reset"}),e.jsx("button",{className:"primary-button",onClick:Ce,disabled:b||u,children:ke?e.jsxs(e.Fragment,{children:[e.jsx(F,{size:16}),"Saved"]}):e.jsxs(e.Fragment,{children:[e.jsx(Be,{size:16}),b?"Saving...":"Save Profile"]})})]})]}),e.jsxs("section",{className:"section-card",children:[e.jsx("div",{className:"section-header",children:e.jsxs("div",{className:"section-title-wrap",children:[e.jsx("div",{className:"section-icon",children:e.jsx(me,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Recording Preferences"}),e.jsx("p",{className:"section-description",children:"Configure meeting recording and AI preferences."})]})]})}),e.jsxs("div",{className:"preference-list",children:[e.jsx(M,{icon:e.jsx(me,{size:18}),title:"Microphone recording",description:"Allow meeting and agenda recording to use your microphone.",enabled:l.microphone,onToggle:()=>E("microphone")}),e.jsx(M,{icon:e.jsx($e,{size:18}),title:"Keep screen awake",description:"Prevent your device from sleeping during meeting recording.",enabled:l.keepAwake,onToggle:()=>E("keepAwake")}),e.jsxs("div",{className:"preference-item",children:[e.jsxs("div",{className:"preference-left",children:[e.jsx("div",{className:"preference-icon",children:e.jsx(ce,{size:18})}),e.jsxs("div",{children:[e.jsx("p",{className:"preference-name",children:"AI summarization"}),e.jsx("p",{className:"preference-description",children:"Select which AI service creates meeting summaries."})]})]}),e.jsxs("div",{className:"select-wrap",children:[e.jsxs("select",{value:w,onChange:s=>z(s.target.value),children:[e.jsx("option",{children:"Gemini"}),e.jsx("option",{children:"OpenAI"}),e.jsx("option",{children:"Disabled"})]}),e.jsx(_e,{className:"select-arrow",size:14})]})]})]})]}),e.jsxs("section",{className:"section-card",children:[e.jsx("div",{className:"section-header",children:e.jsxs("div",{className:"section-title-wrap",children:[e.jsx("div",{className:"section-icon",children:e.jsx(Q,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Notifications"}),e.jsx("p",{className:"section-description",children:"Decide which workspace updates you want to receive."})]})]})}),e.jsxs("div",{className:"preference-list",children:[e.jsx(M,{icon:e.jsx(q,{size:18}),title:"Email notifications",description:"Receive important workspace updates by email.",enabled:l.emailNotifications,onToggle:()=>E("emailNotifications")}),e.jsx(M,{icon:e.jsx(Oe,{size:18}),title:"Task reminders",description:"Get notified when assigned tasks are approaching.",enabled:l.taskReminders,onToggle:()=>E("taskReminders")}),e.jsx(M,{icon:e.jsx(Q,{size:18}),title:"Desktop notifications",description:"Push notifications for tasks, reviews, support and chat — even when the app is closed.",enabled:l.desktopNotifications,onToggle:()=>E("desktopNotifications")}),e.jsx(qe,{notify:c}),e.jsx(M,{icon:e.jsx(Q,{size:18}),title:"Telegram notifications",description:"Send task updates and reminders to your connected Telegram chat.",enabled:l.telegramNotifications,onToggle:()=>E("telegramNotifications")})]})]}),e.jsxs("section",{className:"section-card",children:[e.jsx("div",{className:"section-header",children:e.jsxs("div",{className:"section-title-wrap",children:[e.jsx("div",{className:"section-icon",children:e.jsx(fe,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Regional Preferences"}),e.jsx("p",{className:"section-description",children:"Customize language and time display."})]})]})}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{className:"field-label",children:"Language"}),e.jsxs("select",{className:"field-select",value:G,onChange:s=>te(s.target.value),children:[e.jsx("option",{children:"English"}),e.jsx("option",{children:"Tamil"}),e.jsx("option",{children:"Hindi"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{className:"field-label",children:"Timezone"}),e.jsxs("select",{className:"field-select",value:J,onChange:s=>ne(s.target.value),children:[e.jsx("option",{children:"Asia/Kolkata"}),e.jsx("option",{children:"Asia/Singapore"}),e.jsx("option",{children:"Europe/London"}),e.jsx("option",{children:"America/New_York"})]})]})]})]})]}),t==="security"&&e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"section-card",children:[e.jsx("div",{className:"section-header",children:e.jsxs("div",{className:"section-title-wrap",children:[e.jsx("div",{className:"section-icon",children:e.jsx(ie,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Password & Security"}),e.jsx("p",{className:"section-description",children:"Keep your workspace account secure."})]})]})}),e.jsxs("div",{className:"security-box",children:[e.jsx(ee,{label:"Current Password",value:p.currentPassword,onChange:s=>C(r=>({...r,currentPassword:s})),visible:D,setVisible:V}),e.jsx(ee,{label:"New Password",value:p.newPassword,onChange:s=>C(r=>({...r,newPassword:s})),visible:K,setVisible:I}),e.jsx(ee,{label:"Confirm Password",value:p.confirmPassword,onChange:s=>C(r=>({...r,confirmPassword:s})),visible:a,setVisible:N})]}),e.jsxs("div",{className:"security-tip",children:[e.jsx(W,{size:18}),e.jsx("div",{children:"Use a strong password containing uppercase letters, lowercase letters, numbers and special characters. Avoid reusing passwords from other services."})]}),e.jsx("div",{className:"save-row",children:e.jsxs("button",{className:"primary-button",onClick:Pe,disabled:d,children:[e.jsx(ie,{size:16}),d?"Updating...":"Update Password"]})})]}),e.jsxs("section",{className:"section-card",children:[e.jsx("div",{className:"section-header",children:e.jsxs("div",{className:"section-title-wrap",children:[e.jsx("div",{className:"section-icon",children:e.jsx(W,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Account Protection"}),e.jsx("p",{className:"section-description",children:"Additional security information for your account."})]})]})}),e.jsxs("div",{className:"preference-list",children:[e.jsxs("div",{className:"preference-item",children:[e.jsxs("div",{className:"preference-left",children:[e.jsx("div",{className:"preference-icon",children:e.jsx(W,{size:18})}),e.jsxs("div",{children:[e.jsx("p",{className:"preference-name",children:"Two-factor authentication"}),e.jsx("p",{className:"preference-description",children:"Add an additional verification step when signing in."})]})]}),e.jsx("button",{className:"secondary-button",onClick:()=>c("Two-factor setup opened"),children:"Configure"})]}),e.jsxs("div",{className:"preference-item",children:[e.jsxs("div",{className:"preference-left",children:[e.jsx("div",{className:"preference-icon",children:e.jsx(fe,{size:18})}),e.jsxs("div",{children:[e.jsx("p",{className:"preference-name",children:"Active sessions"}),e.jsx("p",{className:"preference-description",children:"Review devices currently connected to your account."})]})]}),e.jsx("button",{className:"secondary-button",onClick:()=>c("Session manager opened"),children:"View sessions"})]})]})]})]}),t==="backup"&&x&&e.jsx(Xe,{}),t==="subscription"&&e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"section-card",children:[e.jsx("div",{className:"section-header",children:e.jsxs("div",{className:"section-title-wrap",children:[e.jsx("div",{className:"section-icon",children:e.jsx(he,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Subscription"}),e.jsx("p",{className:"section-description",children:"Review your current workspace plan and usage."})]})]})}),e.jsx("div",{className:"subscription-card",children:e.jsxs("div",{className:"subscription-content",children:[e.jsxs("div",{className:"subscription-top",children:[e.jsxs("div",{children:[e.jsx("div",{className:"plan-label",children:"Current workspace plan"}),e.jsx("div",{className:"plan-name",children:"Professional"})]}),e.jsx("div",{className:"plan-badge",children:"Active"})]}),e.jsxs("div",{className:"plan-details",children:[e.jsxs("div",{className:"plan-detail",children:[e.jsx("div",{className:"plan-detail-label",children:"Users"}),e.jsx("div",{className:"plan-detail-value",children:"25 / 50"})]}),e.jsxs("div",{className:"plan-detail",children:[e.jsx("div",{className:"plan-detail-label",children:"Storage"}),e.jsx("div",{className:"plan-detail-value",children:"12 GB / 50 GB"})]}),e.jsxs("div",{className:"plan-detail",children:[e.jsx("div",{className:"plan-detail-label",children:"Renewal"}),e.jsx("div",{className:"plan-detail-value",children:"Sep 2026"})]})]})]})})]}),e.jsxs("section",{className:"section-card",children:[e.jsx("div",{className:"section-header",children:e.jsxs("div",{className:"section-title-wrap",children:[e.jsx("div",{className:"section-icon",children:e.jsx(Ye,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Workspace Features"}),e.jsx("p",{className:"section-description",children:"Features available with your current plan."})]})]})}),e.jsxs("div",{className:"preference-list",children:[e.jsx(R,{icon:e.jsx(F,{size:18}),title:"Unlimited task management"}),e.jsx(R,{icon:e.jsx(F,{size:18}),title:"Task Bank and reusable templates"}),e.jsx(R,{icon:e.jsx(F,{size:18}),title:"Meeting minutes and action plans"}),e.jsx(R,{icon:e.jsx(F,{size:18}),title:"Calendar and team scheduling"}),e.jsx(R,{icon:e.jsx(F,{size:18}),title:"Advanced workspace reports"})]}),e.jsx("div",{className:"save-row",children:e.jsxs("button",{className:"primary-button",onClick:()=>c("Subscription management opened"),children:[e.jsx(he,{size:16}),"Manage Subscription"]})})]})]}),e.jsxs("section",{className:"section-card danger-card",children:[e.jsx("div",{className:"section-header",children:e.jsxs("div",{className:"section-title-wrap",children:[e.jsx("div",{className:"section-icon",children:e.jsx(ae,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Delete Account"}),e.jsx("p",{className:"section-description",children:"Permanently remove your account and workspace access."})]})]})}),e.jsxs("div",{className:"danger-content",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"danger-title",children:"Permanently delete your account"}),e.jsx("p",{className:"danger-description",children:"This action cannot be undone. All account-related access and data may be permanently removed."})]}),e.jsxs("button",{className:"danger-button",onClick:()=>$(!0),children:[e.jsx(ae,{size:15}),"Delete My Account"]})]})]})]})]})]}),re&&e.jsxs("div",{className:"toast",children:[e.jsx(de,{size:17}),re]}),ze&&e.jsx("div",{className:"modal-overlay",onClick:()=>$(!1),children:e.jsxs("div",{className:"delete-modal",onClick:s=>s.stopPropagation(),children:[e.jsx("div",{className:"modal-icon",children:e.jsx(se,{size:25})}),e.jsx("h2",{className:"modal-title",children:"Delete your account?"}),e.jsx("p",{className:"modal-text",children:"This will permanently remove your account access. This action should only be performed if you are completely sure."}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"secondary-button",onClick:()=>$(!1),children:"Cancel"}),e.jsx("button",{className:"confirm-delete",onClick:Te,children:"Delete Account"})]})]})})]})},M=({icon:t,title:o,description:x,enabled:n,onToggle:h})=>e.jsxs("div",{className:"preference-item",children:[e.jsxs("div",{className:"preference-left",children:[e.jsx("div",{className:"preference-icon",children:t}),e.jsxs("div",{children:[e.jsx("p",{className:"preference-name",children:o}),e.jsx("p",{className:"preference-description",children:x})]})]}),e.jsx("button",{type:"button",className:`toggle ${n?"on":""}`,onClick:h,"aria-label":`Toggle ${o}`,children:e.jsx("span",{className:"toggle-thumb"})})]}),ee=({label:t,value:o,onChange:x,visible:n,setVisible:h})=>e.jsxs("div",{className:"field",children:[e.jsxs("label",{className:"field-label",children:[e.jsx(ie,{size:14}),t]}),e.jsxs("div",{className:"password-field",children:[e.jsx("input",{type:n?"text":"password",className:"field-input",value:o,onChange:y=>x(y.target.value),placeholder:"••••••••"}),e.jsx("button",{type:"button",className:"password-eye",onClick:()=>h(!n),children:n?e.jsx(He,{size:16}):e.jsx(We,{size:16})})]})]}),R=({icon:t,title:o})=>e.jsxs("div",{className:"preference-item",children:[e.jsxs("div",{className:"preference-left",children:[e.jsx("div",{className:"preference-icon",style:{color:"#0f766e",background:"#e4f8f4"},children:t}),e.jsxs("div",{children:[e.jsx("p",{className:"preference-name",children:o}),e.jsx("p",{className:"preference-description",children:"Included with your Professional workspace plan."})]})]}),e.jsx("span",{className:"tag tag-ocean",children:"Included"})]});export{Ps as default};
