import{c as gt,r as l,j as e}from"./index-DdKrgUlZ.js";import{r as ze}from"./index-DmXlAdrY.js";import{C as $}from"./calendar-days-YATm_8B9.js";import{U as De,F as ut}from"./upload-BppJZ4xG.js";import{R as ft}from"./refresh-cw-BTp_wSg-.js";import{C as $e}from"./calendar-CjDSBC8t.js";import{P as ce}from"./plus-8jlsDOtV.js";import{C as Ae}from"./circle-_dRRLnq8.js";import{C as pe}from"./clock-3-qdGjk7GL.js";import{C as Ie}from"./circle-check-Bb8TVzmm.js";import{S as bt}from"./search-BYLJVZob.js";import{L as yt,P as Me}from"./pen-line-D8Yigl8m.js";import{C as wt,a as jt}from"./chevron-right-nPP00h3Y.js";import{T as Pe}from"./trash-aqL3TGvH.js";import{B as kt}from"./building-complex-Bxqcna1Q.js";import{U as vt}from"./user-round-D24TWiSQ.js";import{A as Nt}from"./arrow-right-DpNwzmBk.js";import{X as Le}from"./x-CpRqZeGy.js";const Fe={name:"layout-grid",size:24,node:[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]};Fe.node;const St=gt(Fe),he="http://localhost:5000/api".replace(/\/$/,""),A=`${he}/tasks`,Ct=[`${he}/users/assignable`],Tt=`${he}/departments`,Ue={Pending:"To Do","In Progress":"In Progress",Completed:"Completed"},zt=()=>{try{return JSON.parse(localStorage.getItem("user")||"null")}catch{return null}},T=(s,r,n)=>s?.role==="SuperAdmin"||!!s?.permissions?.[r]?.includes(n),xe=async(s,r)=>{try{return(await s.json())?.message||r}catch{return r}},Dt=()=>{const s=["token","authToken","accessToken","jwt","auth_token"];for(const n of s){const c=localStorage.getItem(n)||sessionStorage.getItem(n);if(c)return c.replace(/^"|"$/g,"")}const r=["user","auth","currentUser","userData","profile"];for(const n of r)try{const c=localStorage.getItem(n)||sessionStorage.getItem(n),p=JSON.parse(c||"null");if(p?.token)return p.token;if(p?.accessToken)return p.accessToken;if(p?.authToken)return p.authToken}catch{}return console.warn("[TaskCalendar] No auth token found in storage. If requests return 401, check the key Login.jsx uses and add it to getAuthToken()."),""},z=(s={})=>{const r=Dt();return{Accept:"application/json",...r?{Authorization:`Bearer ${r}`}:{},...s}},m=(s,r,n="")=>{if(!s||typeof s!="object")return n;const c=Object.keys(s).map(p=>[p,p.toLowerCase().replace(/[^a-z0-9]/g,"")]);for(const p of r){const I=c.find(([,y])=>y===p);if(I){const y=s[I[0]];if(y!=null&&String(y).trim()!=="")return y}}return n},$t=s=>{if(!s)return"";const r=String(s).trim(),n=r.match(/^(\d{4})-(\d{2})-(\d{2})/);if(n)return`${n[1]}-${n[2]}-${n[3]}`;const c=new Date(r);return Number.isNaN(c.getTime())?"":`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`},At=(s,r)=>{if(s){const c=String(s).match(/(\d{1,2}):(\d{2})/);if(c)return`${c[1].padStart(2,"0")}:${c[2]}`}const n=String(r||"").match(/[T ](\d{1,2}):(\d{2})/);return n?`${n[1].padStart(2,"0")}:${n[2]}`:"09:00"},It=s=>{const r=String(s||"").toLowerCase();return r.includes("progress")||r==="active"||r==="ongoing"?"In Progress":r.includes("complet")||r==="done"||r==="closed"||r==="finished"?"Completed":"Pending"},Mt=s=>{const r=String(s||"").toLowerCase();return r.includes("high")||r==="urgent"||r==="critical"?"High":r.includes("low")||r==="minor"?"Low":"Medium"},Pt=s=>{const r=String(m(s,["id","_id","userid","user_id"],""));let n=String(m(s,["name","fullname","full_name","username","displayname","display_name","employeename"],""));if(!n){const c=String(m(s,["firstname","first_name","fname"],"")),p=String(m(s,["lastname","last_name","lname"],""));n=`${c} ${p}`.trim()}return n||(n=String(m(s,["email"],""))||r),{id:r,name:n,department:String(s?.department||"")}},Lt=s=>{const r=m(s,["assignedto","assignee","assigneduser","user","employee","owner"],"");let n="",c="";return r&&typeof r=="object"?(n=String(m(r,["id","_id","userid","user_id"],"")),c=String(m(r,["name","fullname","full_name","username","displayname"],""))):r&&(n=String(r)),!c&&typeof s?.assignedUser=="string"&&(c=s.assignedUser),{rawPriority:s?.priority||"",rawStatus:s?.status||"",assignedBy:s?.assignedBy?._id||s?.assignedBy||"",id:m(s,["id","taskid","_id","task_id"],`local-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),title:String(m(s,["title","tasktitle","taskname","task","name","subject"],"Untitled Task")),date:$t(m(s,["duedate","date","taskdate","deadline","enddate"])),time:At(m(s,["time","duetime","tasktime"]),m(s,["duedate","date","taskdate"])),department:String(m(s,["department","dept","departmentname"],"")),assigneeId:n,assigneeName:c,assignee:c,status:It(m(s,["status","taskstatus"],"Pending")),priority:Mt(m(s,["priority"],"Medium")),description:String(m(s,["description","details","taskdescription","notes"],""))}},me=s=>Array.isArray(s)?s:Array.isArray(s?.tasks)?s.tasks:Array.isArray(s?.data)?s.data:Array.isArray(s?.results)?s.results:Array.isArray(s?.items)?s.items:Array.isArray(s?.users)?s.users:[],Ee=["January","February","March","April","May","June","July","August","September","October","November","December"],es=()=>{const s=new Date,[r,n]=l.useState(new Date(s.getFullYear(),s.getMonth(),1)),[c,p]=l.useState(new Date(s.getFullYear(),s.getMonth(),s.getDate())),[I,y]=l.useState([]),[S,_e]=l.useState([]),[ge,Re]=l.useState([]),[k]=l.useState(zt),ue=T(k,"tasks","create")&&T(k,"calendar","create"),W=T(k,"tasks","edit")&&T(k,"calendar","edit"),fe=T(k,"tasks","delete")&&T(k,"calendar","delete"),Ye=T(k,"calendar","import"),M=t=>["SuperAdmin","Admin","Manager"].includes(k?.role)||t?.assignedBy&&String(t.assignedBy)===String(k?._id),[P,be]=l.useState(!0),[_,X]=l.useState(""),[ye,we]=l.useState(!1),D=l.useCallback(async()=>{be(!0),X("");try{const t=await fetch(A,{headers:z()});if(t.status===401){X("Session expired or unauthorized (401) — please log in again."),y([]);return}if(!t.ok)throw new Error(`Server error ${t.status} while loading tasks.`);const a=await t.json();y(me(a).map(Lt))}catch(t){X(t.message||"Unable to connect to the task server."),y([])}finally{be(!1)}},[]),G=l.useCallback(async()=>{for(const t of Ct)try{const a=await fetch(t,{headers:z()});if(!a.ok)continue;const i=await a.json(),d=me(i).map(Pt).filter(u=>u.id);if(d.length){_e(d);return}}catch{}console.warn("[TaskCalendar] Could not load the assignable users list.")},[]),Q=l.useCallback(async()=>{try{const t=await fetch(Tt,{headers:z()});if(!t.ok)return;const a=await t.json();Re(me(a).map(i=>i?.name).filter(Boolean))}catch{}},[]);l.useEffect(()=>{D(),G(),Q()},[D,G,Q]);const[R,Z]=l.useState("calendar"),[L,Oe]=l.useState(""),[Y,Be]=l.useState("All Departments"),[O,qe]=l.useState("All Status"),[ee,te]=l.useState(!1),[h,se]=l.useState(null),je=l.useRef(null),[B,w]=l.useState(""),[Ve,j]=l.useState("success"),[o,U]=l.useState({title:"",date:"",time:"",department:"Management",assignee:"",priority:"Medium",status:"Pending",description:""});l.useEffect(()=>(document.body.style.overflow=ee?"hidden":"",()=>{document.body.style.overflow=""}),[ee]);const f=r.getFullYear(),b=r.getMonth(),Je=new Date(f,b,1).getDay(),He=new Date(f,b+1,0).getDate(),Ke=Ee[b],ke=[];for(let t=s.getFullYear()-5;t<=s.getFullYear()+5;t++)ke.push(t);const ae=[];for(let t=0;t<Je;t++)ae.push(null);for(let t=1;t<=He;t++)ae.push(t);const We=t=>{n(new Date(f,parseInt(t.target.value,10),1))},Xe=t=>{n(new Date(parseInt(t.target.value,10),b,1))},Ge=t=>{if(!t)return"";const a=String(b+1).padStart(2,"0"),i=String(t).padStart(2,"0");return`${f}-${a}-${i}`},ve=t=>t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"}),Qe=t=>t==="Completed"?"status-completed":t==="In Progress"?"status-progress":"status-pending",Ne=l.useMemo(()=>{const t={};return S.forEach(a=>{t[a.id]=a.name}),t},[S]),v=l.useMemo(()=>I.map(t=>{let a=t.assignee;return!a&&t.assigneeId&&(a=Ne[t.assigneeId]||t.assigneeId),{...t,assignee:a||"Unassigned"}}),[I,Ne]),re=l.useMemo(()=>{const t=v.map(a=>a.department).filter(a=>a&&a!=="Unassigned");return Array.from(new Set([...ge,...t])).filter(Boolean)},[v,ge]),E=l.useMemo(()=>v.filter(t=>{const a=t.title.toLowerCase().includes(L.toLowerCase())||t.assignee.toLowerCase().includes(L.toLowerCase())||t.department.toLowerCase().includes(L.toLowerCase()),i=Y==="All Departments"||t.department===Y,d=O==="All Status"||t.status===O;return a&&i&&d}),[v,L,Y,O]),Ze=t=>{if(!t)return[];const a=Ge(t);return E.filter(i=>i.date===a)},et=t=>t?s.getFullYear()===f&&s.getMonth()===b&&s.getDate()===t:!1,tt=t=>{t&&p(new Date(f,b,t))},st=()=>{n(new Date(f,b-1,1))},at=()=>{n(new Date(f,b+1,1))},ne=()=>{const t=new Date;n(new Date(t.getFullYear(),t.getMonth(),1)),p(t)},ie=(t=null)=>{if(!ue){w("You do not have permission to create tasks."),j("error");return}const a=t||c||new Date(f,b,s.getDate()),i=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;se(null),U({title:"",date:i,time:"09:00",department:"",assignee:"",priority:"Medium",status:"Pending",description:""}),te(!0)},oe=t=>{V(""),se(t),U({title:t.title,date:t.date,time:t.time,department:t.department,assignee:t.assigneeId||"",priority:t.priority,status:t.status,description:t.description}),te(!0)},q=()=>{V(""),te(!1),se(null)},[Se,V]=l.useState(""),de=t=>!o.department||!t.department||t.department.toLowerCase()===o.department.toLowerCase(),J={inDept:S.filter(de),other:S.filter(t=>!de(t))},rt=t=>{const a=t.target.value,i=S.find(d=>d.id===a);i&&!de(i)?(U(d=>({...d,assignee:a,department:i.department})),V(`Department changed to “${i.department}” to match ${i.name}.`)):(U(d=>({...d,assignee:a})),V(""))},C=t=>{const{name:a,value:i}=t.target;U(d=>({...d,[a]:i}))},[g,F]=l.useState(null),[N,H]=l.useState(!1),nt=()=>{je.current?.click()},Ce=async(t,a)=>{const i=new FormData;i.append("file",t);const d=await fetch(`${A}/import${a?"?preview=true":""}`,{method:"POST",headers:z(),body:i});let u={};try{u=await d.json()}catch{}if(d.status===401)throw new Error("Session expired — please log in again.");return{ok:d.ok,data:u}},it=async t=>{const a=t.target.files?.[0];if(t.target.value="",!a)return;if(!(a.type==="text/csv"||a.name.toLowerCase().endsWith(".csv"))){w("Please select a CSV file."),j("error");return}if(a.size===0){w("The selected CSV file is empty."),j("error");return}H(!0);try{const{ok:d,data:u}=await Ce(a,!0);if(!d)throw new Error(u.message||"The CSV file could not be validated.");F({file:a,summary:u.summary,rows:u.rows||[]})}catch(d){w(d.message||"Unable to import the CSV file."),j("error")}finally{H(!1)}},ot=async()=>{if(!(!g||N)){H(!0);try{const{ok:t,data:a}=await Ce(g.file,!1);if(!t)throw new Error(a.message||"Import failed.");if(F(null),await D(),a.first_date){const i=new Date(`${a.first_date}T00:00:00`);n(new Date(i.getFullYear(),i.getMonth(),1)),p(i)}w(a.message||`${a.imported} task(s) imported.`),j(a.skipped?"warning":"success")}catch(t){w(t.message||"Import failed."),j("error")}finally{H(!1)}}};l.useEffect(()=>{if(!B)return;const t=setTimeout(()=>{w("")},5e3);return()=>clearTimeout(t)},[B]);const dt=async t=>{if(t.preventDefault(),!o.title.trim()||!o.date)return;const a={name:o.title.trim(),dueDate:o.date,dueTime:o.time,department:o.department,assignedUser:o.assignee,description:o.description};(!h||o.priority!==h.priority)&&(a.priority=o.priority);const i=h&&o.status!==h.status;h||(a.status=Ue[o.status]||"To Do"),we(!0);try{const d=await fetch(h?`${A}/${h.id}`:A,{method:h?"PATCH":"POST",headers:z({"Content-Type":"application/json"}),body:JSON.stringify(a)});if(d.status===401)throw new Error("Not authorized — please log in again.");if(!d.ok)throw new Error(await xe(d,`Server error ${d.status} while saving the task.`));if(i){const x=await fetch(`${A}/${h.id}/status`,{method:"PATCH",headers:z({"Content-Type":"application/json"}),body:JSON.stringify({status:Ue[o.status]||"To Do"})});if(!x.ok)throw new Error(await xe(x,"Task saved, but the status could not be updated."))}q(),await D();const u=new Date(`${o.date}T00:00:00`);n(new Date(u.getFullYear(),u.getMonth(),1)),p(u),w(h?"Task updated successfully.":"Task created successfully."),j("success")}catch(d){w(d.message||"Unable to save the task."),j("error")}finally{we(!1)}},Te=async t=>{if(window.confirm(`Delete "${t.title}"? This cannot be undone.`))try{const a=await fetch(`${A}/${t.id}`,{method:"DELETE",headers:z()});if(!a.ok)throw new Error(await xe(a,"Failed to delete the task."));y(i=>i.filter(d=>d.id!==t.id)),w("Task deleted."),j("success")}catch(a){w(a.message||"Failed to delete the task."),j("error")}},le=({value:t})=>t==="Completed"?e.jsx(Ie,{size:13}):t==="In Progress"?e.jsx(pe,{size:13}):e.jsx(Ae,{size:13}),lt=v.length,ct=v.filter(t=>t.status==="Completed").length,pt=v.filter(t=>t.status==="Pending").length,xt=v.filter(t=>t.status==="In Progress").length,mt=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`,K=E.filter(t=>t.date===mt);return e.jsxs(e.Fragment,{children:[B&&e.jsx("div",{className:`import-toast ${Ve}`,role:"status",children:B}),e.jsx("style",{children:`
        * { box-sizing: border-box; }

        html, body {
          max-width: 100%;
          overflow-x: hidden;
        }

        .task-calendar-page {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          min-height: 100vh;
          padding: 24px;
          background:
            radial-gradient(circle at 0% 0%, rgba(62,197,219,.18), transparent 30%),
            radial-gradient(circle at 100% 10%, rgba(91,140,255,.13), transparent 28%),
            linear-gradient(135deg, #edfafd 0%, #f5faff 48%, #f5f7ff 100%);
          color: #17324d;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .calendar-shell {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
        }

        .page-header {
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(129,180,206,.3);
          border-radius: 24px;
          padding: 24px 28px;
          box-shadow: 0 15px 45px rgba(35,92,125,.08);
          backdrop-filter: blur(14px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 18px;
        }

        .title-area {
          display: flex;
          align-items: center;
          gap: 15px;
          min-width: 0;
          flex-wrap: wrap;
        }

        .title-icon {
          flex-shrink: 0;
          width: 54px; height: 54px; border-radius: 17px;
          display: flex; align-items: center; justify-content: center;
          color: white;
          background: linear-gradient(135deg, #0d75b8, #16a8a1);
          box-shadow: 0 10px 25px rgba(13,117,184,.25);
        }

        .title-area h1 {
          margin: 0;
          font-size: 26px;
          color: #17324d;
          letter-spacing: -.5px;
          word-break: break-word;
        }

        .title-area p { margin: 5px 0 0; color: #6c879f; font-size: 13px; }

        .header-actions {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
        }

        button { font-family: inherit; }

        .primary-btn {
          border: none;
          background: linear-gradient(135deg, #155b92, #087f91);
          color: white;
          height: 42px;
          padding: 0 18px;
          border-radius: 12px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(14,91,132,.2);
          white-space: nowrap;
        }

        .primary-btn:disabled { opacity: .7; cursor: not-allowed; }

        .secondary-btn {
          height: 42px;
          padding: 0 16px;
          border-radius: 12px;
          border: 1px solid #cfe0ea;
          background: white;
          color: #315c78;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          white-space: nowrap;
        }

        .secondary-btn:disabled { opacity: .6; cursor: not-allowed; }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 18px;
        }

        .stat-card {
          position: relative;
          overflow: hidden;
          min-height: 115px;
          min-width: 0;
          padding: 19px;
          border-radius: 18px;
          background: rgba(255,255,255,.9);
          border: 1px solid #d4e3ec;
          box-shadow: 0 10px 30px rgba(37,87,115,.06);
        }

        .stat-card::after {
          content: "";
          position: absolute;
          width: 90px; height: 90px;
          right: -28px; bottom: -40px;
          border-radius: 50%;
          border: 1px solid rgba(25,131,170,.1);
        }

        .stat-label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-weight: 800;
          color: #7791a6;
        }

        .stat-value { font-size: 28px; font-weight: 800; margin-top: 8px; color: #183b58; }
        .stat-description { margin-top: 3px; font-size: 11px; color: #8ba0b1; }

        .stat-icon {
          position: absolute;
          top: 17px; right: 17px;
          width: 34px; height: 34px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-blue .stat-icon { background: #e8f5ff; color: #1482bf; }
        .stat-green .stat-icon { background: #e8faf5; color: #0b9c78; }
        .stat-orange .stat-icon { background: #fff5e6; color: #d78a15; }

        .toolbar {
          background: rgba(255,255,255,.92);
          border: 1px solid #d3e2ec;
          border-radius: 18px;
          padding: 15px;
          margin-bottom: 18px;
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          box-shadow: 0 8px 25px rgba(38,90,119,.05);
        }

        .search-box { flex: 1; position: relative; min-width: 220px; }

        .search-box svg {
          position: absolute;
          left: 13px; top: 50%;
          transform: translateY(-50%);
          color: #7f9aae;
          pointer-events: none;
        }

        .search-box input,
        .filter-select {
          width: 100%;
          max-width: 100%;
          height: 42px;
          border: 1px solid #d6e4ec;
          border-radius: 11px;
          background: #f8fbfd;
          color: #294c67;
          outline: none;
          padding: 0 13px;
          font-size: 13px;
        }

        .search-box input { padding-left: 39px; }

        .search-box input:focus,
        .filter-select:focus {
          border-color: #48a9c5;
          box-shadow: 0 0 0 3px rgba(72,169,197,.1);
        }

        .filter-select { width: 180px; }

        .view-toggle {
          display: flex;
          border: 1px solid #d5e3eb;
          background: #f5f9fb;
          padding: 3px;
          border-radius: 11px;
        }

        .view-toggle button {
          border: none;
          background: transparent;
          color: #718da1;
          width: 38px; height: 34px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .view-toggle button.active {
          background: white;
          color: #126b9b;
          box-shadow: 0 2px 8px rgba(27,82,109,.1);
        }

        .calendar-card {
          background: rgba(255,255,255,.94);
          border: 1px solid #d1e1ea;
          border-radius: 22px;
          overflow: hidden;
          max-width: 100%;
          box-shadow: 0 12px 35px rgba(38,86,112,.07);
        }

        .calendar-top {
          padding: 17px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid #d8e5ec;
          background: linear-gradient(90deg, rgba(228,249,250,.9), rgba(239,247,255,.95));
        }

        .month-title {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
        }

        .month-icon {
          flex-shrink: 0;
          width: 40px; height: 40px;
          border-radius: 12px;
          background: #dff7f4;
          color: #079681;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .month-title h2 { margin: 0; font-size: 19px; color: #173b58; word-break: break-word; }
        .month-title span { display: block; font-size: 11px; margin-top: 3px; color: #7b94a6; }

        .calendar-navigation {
          display: flex;
          gap: 7px;
          align-items: center;
          flex-wrap: wrap;
        }

        .calendar-navigation button {
          border: 1px solid #d4e2e9;
          background: white;
          color: #315d77;
          height: 37px;
          min-width: 38px;
          padding: 0 12px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .calendar-navigation button:hover {
          border-color: #70b7c8;
          color: #087d91;
        }

        .month-select {
          height: 37px;
          border: 1px solid #d4e2e9;
          border-radius: 10px;
          background: white;
          color: #173b58;
          font-weight: 700;
          font-size: 13px;
          padding: 0 10px;
          outline: none;
          cursor: pointer;
          font-family: inherit;
          max-width: 100%;
        }

        .month-select:focus {
          border-color: #48a9c5;
          box-shadow: 0 0 0 3px rgba(72,169,197,.12);
        }

        .month-select.year-select { width: 92px; }

        .weekday-row {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          border-bottom: 1px solid #dce7ed;
          background: #f7fbfd;
        }

        .weekday {
          padding: 12px 4px;
          text-align: center;
          color: #668399;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .5px;
          overflow: hidden;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 1px;
          background: #dbe7ed;
        }

        .calendar-cell {
          min-height: 145px;
          min-width: 0;
          background: white;
          padding: 9px;
          position: relative;
          cursor: pointer;
          transition: background .15s ease;
          overflow: hidden;
        }

        .calendar-cell:hover { background: #f5fbfd; }

        .calendar-cell.today {
          background: linear-gradient(145deg, #ecfbfa, #f5fbff);
          box-shadow: inset 0 0 0 2px #18a898;
        }

        .calendar-cell.selected {
          box-shadow: inset 0 0 0 2px #277eaf;
        }

        .day-number-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 7px;
          gap: 4px;
        }

        .day-number { font-size: 13px; font-weight: 800; color: #42637b; }
        .today .day-number { color: #087d79; }

        .add-day {
          flex-shrink: 0;
          width: 24px; height: 24px;
          border: 1px solid #bce7df;
          background: #ecfaf7;
          color: #079b89;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .task-mini {
          padding: 7px 8px;
          border-radius: 8px;
          margin-bottom: 5px;
          background: #f1f8fc;
          border-left: 3px solid #2989b7;
          cursor: pointer;
          overflow: hidden;
          min-width: 0;
        }

        .task-mini:hover { background: #e8f4fa; }

        .task-mini-title {
          font-size: 11px;
          font-weight: 700;
          color: #244b66;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .task-mini-meta {
          display: flex;
          gap: 5px;
          align-items: center;
          color: #7d97a8;
          font-size: 9px;
          margin-top: 4px;
          white-space: nowrap;
          overflow: hidden;
        }

        .priority-high { border-left-color: #ed6b67; }
        .priority-medium { border-left-color: #e7a634; }
        .priority-low { border-left-color: #21a981; }

        .more-tasks {
          font-size: 10px;
          color: #17789b;
          font-weight: 700;
          padding: 3px 5px;
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding: 70px 20px;
          color: #5d7f96;
          font-size: 13px;
          font-weight: 700;
        }

        .spinner {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 3px solid #d7e9f1;
          border-top-color: #0d84a8;
          animation: spin .8s linear infinite;
        }

        .spin-icon { animation: spin 1s linear infinite; }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .error-banner {
          margin: 20px;
          padding: 16px 18px;
          border: 1px solid #efc5c5;
          background: #fdf3f3;
          color: #a94444;
          border-radius: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          font-size: 13px;
          font-weight: 700;
        }

        .error-banner button {
          border: 1px solid #e3b8b8;
          background: white;
          color: #a94444;
          padding: 9px 14px;
          border-radius: 10px;
          font-weight: 800;
          cursor: pointer;
        }

        .below-section {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(0, .65fr);
          gap: 18px;
          margin-top: 18px;
        }

        .panel {
          background: rgba(255,255,255,.94);
          border: 1px solid #d2e2ea;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(39,87,114,.06);
          overflow: hidden;
          min-width: 0;
        }

        .panel-header {
          padding: 17px 20px;
          border-bottom: 1px solid #dbe7ed;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .panel-header h3 { margin: 0; color: #183b58; font-size: 17px; }
        .panel-header span { color: #7891a3; font-size: 11px; }

        .task-list { padding: 8px 14px 14px; }

        .task-row {
          padding: 13px 8px;
          display: flex;
          justify-content: space-between;
          gap: 15px;
          align-items: center;
          flex-wrap: wrap;
          border-bottom: 1px solid #edf2f5;
        }

        .task-row:last-child { border-bottom: none; }

        .task-main { min-width: 0; flex: 1; }
        .task-row-title { font-size: 13px; font-weight: 750; color: #24465e; word-break: break-word; }

        .task-row-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 5px;
          color: #8298a7;
          font-size: 10px;
        }

        .task-row-meta > span {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .task-row-actions { display: flex; gap: 5px; align-items: center; flex-wrap: wrap; }

        .icon-button {
          flex-shrink: 0;
          width: 34px; height: 34px;
          border: 1px solid #d8e5eb;
          background: white;
          color: #648198;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .icon-button:hover { color: #147ba0; border-color: #8bc8d6; }
        .icon-button.danger:hover { color: #c24141; border-color: #e0a2a2; }

        .empty-state {
          min-height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: #8297a8;
          text-align: center;
          padding: 20px;
        }

        .empty-icon {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: #edf7fb;
          color: #4c94b1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .empty-state strong { color: #45657c; font-size: 14px; }
        .empty-state span { margin-top: 4px; font-size: 11px; }

        .selected-date-box { padding: 20px; }

        .selected-date {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 17px;
          flex-wrap: wrap;
        }

        .selected-date-icon {
          flex-shrink: 0;
          width: 40px; height: 40px;
          border-radius: 12px;
          background: #e8f8f7;
          color: #079b89;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .selected-date strong { display: block; color: #234a63; font-size: 14px; word-break: break-word; }
        .selected-date span { display: block; color: #8aa0af; font-size: 10px; margin-top: 3px; }

        .quick-actions { display: grid; gap: 8px; }

        .quick-action {
          border: 1px solid #dce8ee;
          background: #f8fbfd;
          padding: 12px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          cursor: pointer;
          color: #315a72;
          font-size: 12px;
          font-weight: 700;
          min-width: 0;
        }

        .quick-action span { min-width: 0; word-break: break-word; }
        .quick-action:hover { background: #eef9fa; border-color: #9ed5da; }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 7px;
          border-radius: 20px;
          font-size: 9px;
          font-weight: 800;
          white-space: nowrap;
        }

        .status-pending { background: #fff5df; color: #b7770a; }
        .status-progress { background: #e8f4ff; color: #2477aa; }
        .status-completed { background: #e7faf3; color: #0c916e; }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(16,48,68,.38);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 16px;
        }

        .modal {
          width: min(680px, calc(100vw - 32px));
          max-height: 90vh;
          overflow-y: auto;
          background: white;
          border-radius: 22px;
          box-shadow: 0 30px 80px rgba(13,49,71,.25);
        }

        .modal-header {
          padding: 20px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid #e3ebef;
          background: linear-gradient(120deg, #effbfc, #f5f9ff);
        }

        .modal-title { display: flex; align-items: center; gap: 10px; min-width: 0; }
        .modal-title h3 { margin: 0; color: #193c57; font-size: 18px; word-break: break-word; }

        .close-btn {
          flex-shrink: 0;
          border: none;
          background: #edf4f7;
          color: #557387;
          width: 34px; height: 34px;
          border-radius: 9px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-body { padding: 22px; }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .form-group { display: flex; flex-direction: column; gap: 7px; min-width: 0; }
        .form-group.full { grid-column: 1 / -1; }
        .form-group label { font-size: 11px; font-weight: 800; color: #526f82; }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          border: 1px solid #d4e2e9;
          border-radius: 10px;
          background: #f9fbfc;
          color: #284d66;
          padding: 11px 12px;
          outline: none;
          font-family: inherit;
          font-size: 13px;
        }

        .form-group textarea { min-height: 100px; resize: vertical; }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #51aabd;
          box-shadow: 0 0 0 3px rgba(81,170,189,.1);
        }

        .modal-footer {
          padding: 15px 22px;
          border-top: 1px solid #e3ebef;
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 9px;
        }

        .list-view {
          padding: 20px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .list-view-table {
          width: 100%;
          min-width: 640px;
          border-collapse: collapse;
        }

        .list-view-table th {
          background: #f5fafc;
          color: #6c8799;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: .7px;
          text-align: left;
          padding: 13px;
          border-bottom: 1px solid #dce7ed;
          white-space: nowrap;
        }

        .list-view-table td {
          padding: 14px 13px;
          border-bottom: 1px solid #edf2f5;
          color: #36566b;
          font-size: 12px;
          word-break: break-word;
        }

        .list-title { font-weight: 750; color: #204761; }
        .list-desc { font-size: 11px; color: #8ba0b1; margin-top: 3px; }

        .import-toast {
          position: fixed;
          top: 24px;
          right: 24px;
          z-index: 10000;
          min-width: 280px;
          max-width: min(430px, calc(100vw - 32px));
          padding: 13px 16px;
          border-radius: 13px;
          border: 1px solid #cfe3ea;
          background: rgba(255,255,255,.98);
          color: #31576d;
          box-shadow: 0 18px 45px rgba(22,74,99,.18);
          backdrop-filter: blur(12px);
          font-size: 12px;
          font-weight: 700;
          animation: importToastIn .25s ease-out;
        }

        .import-toast.success { border-color: #bde5d6; color: #087d68; }
        .import-toast.warning { border-color: #ead9ae; color: #9a6a0a; }
        .import-toast.error { border-color: #efc5c5; color: #b34444; }

        @keyframes importToastIn {
          from { opacity: 0; transform: translateY(-8px) translateX(8px); }
          to { opacity: 1; transform: translateY(0) translateX(0); }
        }

        @media (max-width: 1100px) {
          .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .below-section { grid-template-columns: 1fr; }
          .search-box { min-width: 100%; }
        }

        @media (max-width: 800px) {
          .task-calendar-page { padding: 12px; }
          .page-header { flex-direction: column; align-items: flex-start; padding: 20px; }
          .header-actions { width: 100%; }
          .header-actions button { flex: 1; justify-content: center; }
          .calendar-cell { min-height: 105px; padding: 7px; }
          .task-mini-meta { display: none; }
          .calendar-navigation button.today-button { display: none; }
          .filter-select { width: 100%; }
          .calendar-navigation { width: 100%; }
          .month-select { flex: 1; min-width: 0; }
          .month-select.year-select { flex: 0 0 92px; }
          .weekday { padding: 10px 2px; font-size: 9px; }
        }

        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
          .form-grid { grid-template-columns: 1fr; }
          .form-group.full { grid-column: auto; }
          .calendar-cell { min-height: 82px; padding: 5px; }
          .weekday { font-size: 8px; padding: 8px 2px; letter-spacing: 0; }
          .day-number { font-size: 11px; }
          .add-day { width: 20px; height: 20px; }
          .task-mini { padding: 4px 5px; }
          .task-mini-title { font-size: 9px; }
          .more-tasks { font-size: 8px; }
          .calendar-top { padding: 13px; }
          .month-title h2 { font-size: 16px; }
          .month-select { max-width: 130px; font-size: 12px; }
          .title-area h1 { font-size: 21px; }
          .title-icon { width: 46px; height: 46px; }
          .selected-date-box { padding: 14px; }
          .stat-value { font-size: 22px; }
          .stat-card { padding: 14px; min-height: 95px; }
          .list-view { padding: 12px; }
          .modal-body { padding: 16px; }
          .modal-header { padding: 16px; }
          .modal-footer { padding: 12px 16px; }
        }

        @media (max-width: 420px) {
          .stats-grid { grid-template-columns: 1fr; }
          .calendar-cell { min-height: 64px; padding: 4px; }
          .day-number-row { margin-bottom: 4px; }
          .header-actions button { padding: 0 10px; font-size: 12px; height: 38px; }
          .secondary-btn, .primary-btn { font-size: 12px; }
          .panel-header { padding: 14px; }
          .quick-action { font-size: 11px; padding: 10px; }
          .month-select { max-width: 110px; }
        }

        /* ===== shared theme (matches Dashboard / Users / Tasks) ===== */
        .task-calendar-page h2 { font-weight: 800; color: var(--ts-text); }
        .task-calendar-page .page-header {
          background: var(--ts-hero);
          border: var(--ts-hero-border);
          box-shadow: var(--ts-hero-shadow);
          color: var(--ts-on-hero);
          backdrop-filter: none;
          padding: 28px 30px;
        }
        .task-calendar-page .page-header .title-area h1 { color: var(--ts-on-hero); font-weight: 800; }
        .task-calendar-page .page-header .title-area p { color: var(--ts-on-hero-muted); }
        .task-calendar-page .page-header .title-icon { background: var(--ts-glass); border: 1px solid var(--ts-glass-border); box-shadow: none; }
        .task-calendar-page .page-header .secondary-btn { background: var(--ts-glass); color: #fff; border-color: var(--ts-glass-border); font-size: 13px; }
        .task-calendar-page .page-header .secondary-btn:hover { background: rgba(255,255,255,.22); }
        .task-calendar-page .page-header .primary-btn { background: var(--ts-primary); box-shadow: var(--ts-primary-shadow); font-size: 13px; }
        .task-calendar-page .panel-header h2,
        .task-calendar-page .panel-header h3 { font-weight: 800; color: var(--ts-text); }

      `}),e.jsx("div",{className:"task-calendar-page",children:e.jsxs("div",{className:"calendar-shell",children:[e.jsxs("section",{className:"page-header",children:[e.jsxs("div",{className:"title-area",children:[e.jsx("div",{className:"title-icon",children:e.jsx($,{size:25})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Task Calendar"}),e.jsx("p",{children:"Plan, schedule and manage your tasks by due date"})]})]}),e.jsxs("div",{className:"header-actions",children:[e.jsx("input",{ref:je,id:"task-calendar-import-input",type:"file",accept:".csv,text/csv",onChange:it,style:{display:"none"}}),Ye&&e.jsxs("button",{className:"secondary-btn",onClick:nt,disabled:N,title:"CSV columns: Title, Date (YYYY-MM-DD), Time, Department, Assignee, Status, Priority, Description",children:[e.jsx(De,{size:16}),N&&!g?"Checking CSV...":"Import Tasks"]}),e.jsxs("button",{className:"secondary-btn",onClick:()=>{D(),G(),Q()},disabled:P,children:[e.jsx(ft,{size:16,className:P?"spin-icon":""}),"Refresh"]}),e.jsxs("button",{className:"secondary-btn",onClick:ne,children:[e.jsx($e,{size:16}),"Today"]}),ue&&e.jsxs("button",{className:"primary-btn",onClick:()=>ie(),children:[e.jsx(ce,{size:17}),"New Task"]})]})]}),e.jsxs("section",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-card stat-blue",children:[e.jsx("div",{className:"stat-label",children:"Total Tasks"}),e.jsx("div",{className:"stat-value",children:lt}),e.jsx("div",{className:"stat-description",children:"Scheduled tasks"}),e.jsx("div",{className:"stat-icon",children:e.jsx($,{size:18})})]}),e.jsxs("div",{className:"stat-card stat-orange",children:[e.jsx("div",{className:"stat-label",children:"Pending"}),e.jsx("div",{className:"stat-value",children:pt}),e.jsx("div",{className:"stat-description",children:"Tasks waiting to start"}),e.jsx("div",{className:"stat-icon",children:e.jsx(Ae,{size:18})})]}),e.jsxs("div",{className:"stat-card stat-blue",children:[e.jsx("div",{className:"stat-label",children:"In Progress"}),e.jsx("div",{className:"stat-value",children:xt}),e.jsx("div",{className:"stat-description",children:"Active work"}),e.jsx("div",{className:"stat-icon",children:e.jsx(pe,{size:18})})]}),e.jsxs("div",{className:"stat-card stat-green",children:[e.jsx("div",{className:"stat-label",children:"Completed"}),e.jsx("div",{className:"stat-value",children:ct}),e.jsx("div",{className:"stat-description",children:"Finished tasks"}),e.jsx("div",{className:"stat-icon",children:e.jsx(Ie,{size:18})})]})]}),e.jsxs("section",{className:"toolbar",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(bt,{size:16}),e.jsx("input",{type:"text",placeholder:"Search tasks, users, departments...",value:L,onChange:t=>Oe(t.target.value)})]}),e.jsxs("select",{className:"filter-select",value:Y,onChange:t=>Be(t.target.value),children:[e.jsx("option",{children:"All Departments"}),re.map(t=>e.jsx("option",{children:t},t))]}),e.jsxs("select",{className:"filter-select",value:O,onChange:t=>qe(t.target.value),children:[e.jsx("option",{children:"All Status"}),e.jsx("option",{children:"Pending"}),e.jsx("option",{children:"In Progress"}),e.jsx("option",{children:"Completed"})]}),e.jsxs("div",{className:"view-toggle",children:[e.jsx("button",{className:R==="calendar"?"active":"",onClick:()=>Z("calendar"),title:"Calendar view",children:e.jsx(St,{size:17})}),e.jsx("button",{className:R==="list"?"active":"",onClick:()=>Z("list"),title:"List view",children:e.jsx(yt,{size:17})})]})]}),R==="calendar"&&e.jsxs("section",{className:"calendar-card",children:[e.jsxs("div",{className:"calendar-top",children:[e.jsxs("div",{className:"month-title",children:[e.jsx("div",{className:"month-icon",children:e.jsx($,{size:20})}),e.jsxs("div",{children:[e.jsxs("h2",{children:[Ke," ",f]}),e.jsx("span",{children:"Schedule and manage your tasks"})]})]}),e.jsxs("div",{className:"calendar-navigation",children:[e.jsx("select",{className:"month-select",value:b,onChange:We,title:"Select month",children:Ee.map((t,a)=>e.jsx("option",{value:a,children:t},t))}),e.jsx("select",{className:"month-select year-select",value:f,onChange:Xe,title:"Select year",children:ke.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx("button",{onClick:st,title:"Previous month",children:e.jsx(wt,{size:17})}),e.jsx("button",{className:"today-button",onClick:ne,children:"Today"}),e.jsx("button",{onClick:at,title:"Next month",children:e.jsx(jt,{size:17})})]})]}),P?e.jsxs("div",{className:"loading-state",children:[e.jsx("span",{className:"spinner"}),"Loading tasks from server..."]}):_?e.jsxs("div",{className:"error-banner",children:[e.jsxs("span",{children:["⚠️ ",_]}),e.jsx("button",{onClick:D,children:"Try Again"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"weekday-row",children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(t=>e.jsx("div",{className:"weekday",children:t},t))}),e.jsx("div",{className:"calendar-grid",children:ae.map((t,a)=>{const i=Ze(t),d=t?new Date(f,b,t):null,u=d&&d.toDateString()===c.toDateString();return e.jsxs("div",{className:`calendar-cell ${et(t)?"today":""} ${u?"selected":""}`,onClick:()=>tt(t),children:[t&&e.jsxs("div",{className:"day-number-row",children:[e.jsx("span",{className:"day-number",children:t}),e.jsx("span",{className:"add-day",title:"Add task on this day",onClick:x=>{x.stopPropagation(),ie(d)},children:e.jsx(ce,{size:13})})]}),i.slice(0,3).map(x=>e.jsxs("div",{className:`task-mini priority-${x.priority.toLowerCase()}`,title:`${x.title} • ${x.department} • ${x.assignee} • ${x.status}`,onClick:ht=>{ht.stopPropagation(),W&&M(x)&&oe(x)},children:[e.jsx("div",{className:"task-mini-title",children:x.title}),e.jsxs("div",{className:"task-mini-meta",children:[e.jsx(le,{value:x.status}),e.jsx("span",{children:x.time}),e.jsx("span",{children:"·"}),e.jsx("span",{children:x.assignee})]})]},x.id)),i.length>3&&e.jsxs("div",{className:"more-tasks",children:["+",i.length-3," more"]})]},a)})})]})]}),R==="list"&&!P&&!_&&e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-header",children:[e.jsx("h3",{children:"All Tasks"}),e.jsxs("span",{children:[E.length," task(s) found"]})]}),E.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(ut,{size:22})}),e.jsx("strong",{children:"No tasks found"}),e.jsx("span",{children:"Try changing the filters, refresh, or create a new task."})]}):e.jsx("div",{className:"list-view",children:e.jsxs("table",{className:"list-view-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Task"}),e.jsx("th",{children:"Due Date"}),e.jsx("th",{children:"Department"}),e.jsx("th",{children:"Assigned To"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Priority"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:E.map(t=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"list-title",children:t.title}),t.description&&e.jsx("div",{className:"list-desc",children:t.description})]}),e.jsxs("td",{children:[t.date,t.time?` · ${t.time}`:""]}),e.jsx("td",{children:t.department}),e.jsx("td",{children:t.assignee}),e.jsx("td",{children:e.jsxs("span",{className:`status-pill ${Qe(t.status)}`,children:[e.jsx(le,{value:t.status}),t.status]})}),e.jsx("td",{children:t.priority}),e.jsx("td",{children:e.jsxs("div",{className:"task-row-actions",children:[W&&M(t)&&e.jsx("button",{className:"icon-button",title:"Edit task",onClick:()=>oe(t),children:e.jsx(Me,{size:14})}),fe&&M(t)&&e.jsx("button",{className:"icon-button danger",title:"Delete task",onClick:()=>Te(t),children:e.jsx(Pe,{size:14})})]})})]},t.id))})]})})]}),!P&&!_&&e.jsxs("div",{className:"below-section",children:[e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("h3",{children:["Tasks on ",ve(c)]}),e.jsxs("span",{children:[K.length," task(s) scheduled"]})]}),e.jsx("div",{className:"task-list",children:K.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx($,{size:22})}),e.jsx("strong",{children:"No tasks on this day"}),e.jsx("span",{children:'Click + on any date or "New Task" to schedule one.'})]}):K.map(t=>e.jsxs("div",{className:"task-row",children:[e.jsxs("div",{className:"task-main",children:[e.jsx("div",{className:"task-row-title",children:t.title}),e.jsxs("div",{className:"task-row-meta",children:[e.jsxs("span",{children:[e.jsx(le,{value:t.status}),t.status]}),e.jsxs("span",{children:[e.jsx(pe,{size:11}),t.time]}),e.jsxs("span",{children:[e.jsx(kt,{size:11}),t.department]}),e.jsxs("span",{children:[e.jsx(vt,{size:11}),t.assignee]})]})]}),e.jsxs("div",{className:"task-row-actions",children:[W&&M(t)&&e.jsx("button",{className:"icon-button",title:"Edit task",onClick:()=>oe(t),children:e.jsx(Me,{size:14})}),fe&&M(t)&&e.jsx("button",{className:"icon-button danger",title:"Delete task",onClick:()=>Te(t),children:e.jsx(Pe,{size:14})})]})]},t.id))})]}),e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-header",children:[e.jsx("h3",{children:"Selected Date"}),e.jsx("span",{children:"Quick actions"})]}),e.jsxs("div",{className:"selected-date-box",children:[e.jsxs("div",{className:"selected-date",children:[e.jsx("div",{className:"selected-date-icon",children:e.jsx($,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:ve(c)}),e.jsxs("span",{children:[K.length," task(s) scheduled"]})]})]}),e.jsxs("div",{className:"quick-actions",children:[e.jsxs("button",{className:"quick-action",onClick:()=>ie(),children:[e.jsx("span",{children:"Add Task on This Date"}),e.jsx(ce,{size:15})]}),e.jsxs("button",{className:"quick-action",onClick:()=>Z("list"),children:[e.jsx("span",{children:"View All Tasks in List"}),e.jsx(Nt,{size:15})]}),e.jsxs("button",{className:"quick-action",onClick:ne,children:[e.jsx("span",{children:"Jump to Today"}),e.jsx($e,{size:15})]})]})]})]})]})]})}),ee&&ze.createPortal(e.jsx("div",{className:"modal-overlay",onClick:q,children:e.jsxs("div",{className:"modal",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{className:"modal-title",children:[e.jsx("div",{className:"title-icon",style:{width:40,height:40,borderRadius:12},children:e.jsx($,{size:18})}),e.jsx("h3",{children:h?"Edit Task":"Create New Task"})]}),e.jsx("button",{className:"close-btn",onClick:q,children:e.jsx(Le,{size:16})})]}),e.jsxs("form",{onSubmit:dt,children:[e.jsx("div",{className:"modal-body",children:e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group full",children:[e.jsx("label",{children:"Task Title *"}),e.jsx("input",{name:"title",value:o.title,onChange:C,placeholder:"Enter task title",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Due Date *"}),e.jsx("input",{type:"date",name:"date",value:o.date,onChange:C,required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Time"}),e.jsx("input",{type:"time",name:"time",value:o.time,onChange:C})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Department"}),e.jsxs("select",{name:"department",value:o.department,onChange:C,children:[e.jsx("option",{value:"",children:"No department"}),re.map(t=>e.jsx("option",{children:t},t)),o.department&&!re.includes(o.department)&&e.jsx("option",{children:o.department},`current-${o.department}`)]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Assigned To"}),e.jsxs("select",{name:"assignee",value:o.assignee,onChange:rt,children:[e.jsx("option",{value:"",children:"Unassigned"}),J.inDept.length>0&&e.jsx("optgroup",{label:o.department?`${o.department}`:"Users",children:J.inDept.map(t=>e.jsxs("option",{value:t.id,children:[t.name,t.department&&!o.department?` — ${t.department}`:""]},t.id))}),J.other.length>0&&e.jsx("optgroup",{label:"Other departments (department will change)",children:J.other.map(t=>e.jsxs("option",{value:t.id,children:[t.name," — ",t.department]},t.id))}),o.assignee&&!S.some(t=>t.id===o.assignee)&&e.jsx("option",{value:o.assignee,children:h?.assignee&&h.assignee!=="Unassigned"?h.assignee:"Current assignee"})]}),S.length===0&&e.jsx("small",{style:{color:"#9a6a0a",fontSize:11},children:'No users to assign. Add users in User Management, or ask an admin for the "assign" permission.'}),Se&&e.jsx("small",{style:{color:"#0b8f87",fontSize:11},children:Se})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Priority"}),e.jsxs("select",{name:"priority",value:o.priority,onChange:C,children:[e.jsx("option",{children:"High"}),e.jsx("option",{children:"Medium"}),e.jsx("option",{children:"Low"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{name:"status",value:o.status,onChange:C,children:[e.jsx("option",{children:"Pending"}),e.jsx("option",{children:"In Progress"}),e.jsx("option",{children:"Completed"})]})]}),e.jsxs("div",{className:"form-group full",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{name:"description",value:o.description,onChange:C,placeholder:"Task details..."})]})]})}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"secondary-btn",onClick:q,children:"Cancel"}),e.jsx("button",{type:"submit",className:"primary-btn",disabled:ye,children:ye?"Saving...":h?"Update Task":"Create Task"})]})]})]})}),document.body),g&&ze.createPortal(e.jsx("div",{className:"modal-overlay",onClick:()=>!N&&F(null),children:e.jsxs("div",{className:"modal",style:{maxWidth:760},onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{className:"modal-title",children:[e.jsx("div",{className:"title-icon",style:{width:40,height:40,borderRadius:12},children:e.jsx(De,{size:18})}),e.jsxs("h3",{children:["Import preview — ",g.file.name]})]}),e.jsx("button",{className:"close-btn",onClick:()=>F(null),disabled:N,children:e.jsx(Le,{size:16})})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("p",{style:{margin:"0 0 12px",fontSize:13,color:"#4f6f7a"},children:[e.jsx("strong",{children:g.summary.valid})," of ",g.summary.total," row(s) will be imported",g.summary.invalid?` · ${g.summary.invalid} invalid`:"",g.summary.duplicates?` · ${g.summary.duplicates} duplicate`:"",". Invalid and duplicate rows are skipped."]}),e.jsx("div",{style:{maxHeight:340,overflow:"auto",border:"1px solid #e1eef0",borderRadius:12},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"#f3fafb",textAlign:"left"},children:["Row","Title","Date","Assignee","Department","Result"].map(t=>e.jsx("th",{style:{padding:"8px 10px",position:"sticky",top:0,background:"#f3fafb"},children:t},t))})}),e.jsx("tbody",{children:g.rows.map(t=>e.jsxs("tr",{style:{borderTop:"1px solid #eef5f6"},children:[e.jsx("td",{style:{padding:"7px 10px",color:"#7b969e"},children:t.line}),e.jsx("td",{style:{padding:"7px 10px"},children:t.title||"—"}),e.jsxs("td",{style:{padding:"7px 10px"},children:[t.date||"—",t.time?` ${t.time}`:""]}),e.jsx("td",{style:{padding:"7px 10px"},children:t.assignee||"Unassigned"}),e.jsx("td",{style:{padding:"7px 10px"},children:t.department||"—"}),e.jsx("td",{style:{padding:"7px 10px",fontWeight:600,color:t.state==="valid"?"#087d68":t.state==="duplicate"?"#9a6a0a":"#b34444"},children:t.state==="valid"?"Ready":t.errors.join("; ")})]},t.line))})]})})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"secondary-btn",onClick:()=>F(null),disabled:N,children:"Cancel"}),e.jsx("button",{type:"button",className:"primary-btn",onClick:ot,disabled:N||g.summary.valid===0,children:N?"Importing...":`Import ${g.summary.valid} task${g.summary.valid===1?"":"s"}`})]})]})}),document.body)]})};export{es as default};
