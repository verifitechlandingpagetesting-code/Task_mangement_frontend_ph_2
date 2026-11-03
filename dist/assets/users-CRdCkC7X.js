import{c as _e,r as n,j as e,D as Sa,k as gs}from"./index-DdKrgUlZ.js";import{u as Da,P as Ra}from"./Pagination-UbNjK2ed.js";import{u as bs,B as js,S as ys}from"./BulkSelectBar-CKQrbcP3.js";import{U as oe}from"./users-C5Aqy3aj.js";import{U as ke,F as Ye}from"./upload-BppJZ4xG.js";import{B as S}from"./building-complex-Bxqcna1Q.js";import{U as Aa}from"./user-plus-CkO2fPOE.js";import{A as vs}from"./activity-DSl8M825.js";import{S as Ma}from"./shield-check-CEPKVIb-.js";import{U as B}from"./user-round-cog-DCGl-HMr.js";import{C as ws}from"./calendar-days-YATm_8B9.js";import{T as ks}from"./trending-up-CfyUXN6q.js";import{C as Ns}from"./chart-column-CUheTk5P.js";import{W as zs}from"./waves-horizontal-B6LtjNOg.js";import{S as Cs}from"./search-BYLJVZob.js";import{X as v}from"./x-CpRqZeGy.js";import{U as Ss}from"./user-round-D24TWiSQ.js";import{P as ie}from"./plus-8jlsDOtV.js";import{L as Ia}from"./lock-keyhole-Bx_x1vA_.js";import{U as Ds}from"./user-x-Blk8W2Yr.js";import{P as le}from"./pencil-ELsrY2nb.js";import{T as E}from"./trash-aqL3TGvH.js";import{M as Ua}from"./mail-DrXfpxX_.js";import{P as Rs}from"./phone-VIw9RyrB.js";import{E as As}from"./eye-blwpcqcq.js";import{C as Ms}from"./chevron-down-CO4vTuki.js";import{C as Is}from"./circle-check-Bb8TVzmm.js";import{C as Us}from"./circle-alert-B9X22cQr.js";import"./chevron-right-nPP00h3Y.js";import"./loader-circle-C6iMG4x7.js";const Ea={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};Ea.node;const Es=_e(Ea);const Ta={name:"briefcase-business",size:24,node:[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};Ta.node;const Ts=_e(Ta);const Pa={name:"building",size:24,node:[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]]};Pa.node;const Ps=_e(Pa),Fa=["token","authToken","accessToken","jwt","userToken"],Fs=()=>{for(const c of Fa){const f=localStorage.getItem(c)||sessionStorage.getItem(c);if(f)return f.replace(/^"|"$/g,"")}return null},x=gs.create({baseURL:"http://localhost:5000/api",withCredentials:!0,headers:{"Content-Type":"application/json"}});x.interceptors.request.use(c=>{const f=Fs();return f&&(c.headers.Authorization=`Bearer ${f}`),c});x.interceptors.response.use(c=>c,c=>(c.response?.status===401&&Fa.forEach(f=>{localStorage.removeItem(f),sessionStorage.removeItem(f)}),Promise.reject(c)));const $s={SuperAdmin:"Super Admin",Admin:"Admin",Manager:"Manager",User:"Team Member"},de=c=>$s[c]||c||"Team Member",Ls=c=>{const f=String(c||"").trim().toLowerCase().replace(/[\s_-]/g,"");return f==="admin"?"Admin":f==="manager"?"Manager":f==="superadmin"?"SuperAdmin":"User"},Os=()=>{try{return JSON.parse(localStorage.getItem("user")||"null")}catch{return null}},Ne=(c,f,T)=>c?.role==="SuperAdmin"||!!c?.permissions?.[f]?.includes(T),Ys=["Jan","Feb","Mar","Apr","May","Jun"],bt=()=>{const[c,f]=n.useState("users"),[T,Be]=n.useState(""),[V,ze]=n.useState("All Departments"),[D,Ve]=n.useState("All Roles"),[h,Ce]=n.useState([]),[w,$a]=n.useState([]),[N]=n.useState(Os),j=N?.role==="SuperAdmin",P=Ne(N,"users","create"),z=Ne(N,"users","edit"),W=Ne(N,"users","delete"),Se=Ne(N,"users","assign"),[ce,La]=n.useState([]),[q,Oa]=n.useState([]),[F,Ya]=n.useState([]),[_a,X]=n.useState(!1),[R,Ba]=n.useState(null),[g,G]=n.useState({name:"",description:"",baseRole:"User",adminId:""}),[De,We]=n.useState(!1),Re=async()=>{try{const a=await x.get("/custom-roles");Ya(a.data?.data||[])}catch(a){console.error("Failed to load roles:",a)}},qe=a=>F.filter(s=>!j||!a||String(s.admin_id)===String(a)),Xe=(a=null)=>{Ba(a),G({name:a?.name||"",description:a?.description||"",baseRole:a?.baseRole||"User",adminId:a?.admin_id||q[0]?.id||""}),X(!0)},Va=async a=>{if(a.preventDefault(),!g.name.trim()){i("Role name is required.","error");return}We(!0);try{const s={name:g.name.trim(),description:g.description.trim(),baseRole:g.baseRole,...j&&!R?{adminId:g.adminId}:{}},t=R?await x.put(`/custom-roles/${R._id}`,s):await x.post("/custom-roles",s);i(t.data?.message||"Role saved."),X(!1),await Promise.all([Re(),se()])}catch(s){i(s.response?.data?.message||"Failed to save the role.","error")}finally{We(!1)}},Wa=async a=>{if(window.confirm(`Delete the role "${a.name}"?`))try{const s=await x.delete(`/custom-roles/${a._id}`);i(s.data?.message||"Role deleted."),Re()}catch(s){i(s.response?.data?.message||"Failed to delete the role.","error")}},[pe,Ge]=n.useState([]),[He,Ke]=n.useState(null),Ze=async()=>{if(z)try{const a=await x.get("/password-requests");Ge(a.data?.data||[])}catch(a){console.error("Failed to load password requests:",a)}},qa=async a=>{Ke(a.id);try{const s=await x.post(`/users/${a.id}/resend-verification`);i(s.data?.message||"Verification email sent.")}catch(s){i(s.response?.data?.message||"Failed to resend the verification email.","error")}finally{Ke(null)}},Xa=async a=>{try{await x.patch(`/password-requests/${a._id}/dismiss`),Ge(s=>s.filter(t=>t._id!==a._id)),i("Request dismissed.")}catch(s){i(s.response?.data?.message||"Failed to dismiss the request.","error")}},[Ae,$]=n.useState(!1),[Ga,Me]=n.useState(!1),[Ha,H]=n.useState(!1),[Ka,me]=n.useState(!1),[Za,xe]=n.useState(!1),[m,Ie]=n.useState(null),[C,Je]=n.useState(null),[A,Qe]=n.useState(null),[K,Z]=n.useState(null),Ue={name:"",email:"",password:"",phone:"",department:"",role:"User",adminId:""},[r,y]=n.useState(Ue),[b,fe]=n.useState({name:"",description:"",refPrefix:""}),Ja=a=>{const s=String(a||"").toUpperCase().replace(/[^A-Z ]+/g," ").split(/\s+/).filter(Boolean);return s.length?s.length>1?s.map(t=>t[0]).join("").slice(0,6):s[0].slice(0,3):""},[ea,aa]=n.useState(!1),[Qa,ue]=n.useState(null),[sa,ta]=n.useState(""),ra=async a=>{const s=sa.trim().toUpperCase();if(!/^[A-Z]{1,6}$/.test(s)){i("Reference code must be 1–6 letters (e.g. FF).","error");return}try{await x.patch(`/departments/${a.id}`,{refPrefix:s}),ue(null),await te(),i(`New ${a.name} tasks will be numbered ${s}1, ${s}2…`)}catch(t){i(t.response?.data?.message||"Failed to update the reference code.","error")}},na={name:"",email:"",phone:"",password:"",role:"User"},[L,Ee]=n.useState("existing"),[M,oa]=n.useState([]),[ia,la]=n.useState(""),[da,ca]=n.useState(!1),[he,J]=n.useState([]),[Te,pa]=n.useState(!1),ge=()=>{Me(!1),fe({name:"",description:"",refPrefix:""}),aa(!1),Ee("existing"),oa([]),la(""),ca(!1),J([])},[ma,Q]=n.useState(""),[xa,fa]=n.useState(!1),[ua,O]=n.useState(!1);n.useEffect(()=>{Ae||(O(!1),Q(""))},[Ae]);const ee=n.useRef(null),[ae,Pe]=n.useState(null),[be,ha]=n.useState(null),i=(a,s="success")=>{ha({message:a,type:s}),setTimeout(()=>{ha(null)},2800)},se=async()=>{try{const a=await x.get("/users"),s=Array.isArray(a.data)?a.data:a.data?.data||[];Ce(s.map(t=>({id:t._id||t.id,name:t.name||"",email:t.email||"",phone:t.phone||"",department:t.department||"",role:t.role||"User",status:t.status||"Active",adminId:t.admin_id||"",organization:t.organization?.name||"",emailVerified:t.emailVerified!==!1,customRoleId:t.customRole||"",customRoleName:t.customRoleName||"",avatar:t.avatar||t.name?.charAt(0)?.toUpperCase()||"U"})))}catch(a){console.error("Failed to fetch users:",a),i(a.response?.status===401?"Session expired. Please log in again.":a.response?.data?.message||"Failed to load users from server.","error")}},te=async()=>{try{const a=await x.get("/departments",{params:{_t:Date.now()}});console.log("FULL DEPARTMENT API:",a.config.baseURL+a.config.url),console.log("DEPARTMENT RESPONSE:",a.data);const s=Array.isArray(a.data)?a.data:Array.isArray(a.data?.data)?a.data.data:Array.isArray(a.data?.departments)?a.data.departments:[];$a(s.filter(Boolean).map(t=>({id:t._id||t.id,name:t.name||"",description:t.description||"Organization department",status:t.status||"Active",refPrefix:t.refPrefix||"",nextReferenceId:t.nextReferenceId||""})))}catch(a){console.error("GET /api/departments FAILED:",a),console.error("Backend response:",a.response?.data),i(a.response?.data?.message||"Failed to load departments.","error")}},es=async()=>{try{const a=await x.get("/permissions/catalog");La(a.data?.data?.assignableRoles||[])}catch(a){console.error("Failed to load role options:",a)}if(j)try{const a=await x.get("/admins");Oa((a.data?.data||[]).map(s=>({id:s._id,name:s.name})))}catch(a){console.error("Failed to load organizations:",a)}};n.useEffect(()=>{se(),te(),es(),Ze(),Re()},[]);const re=n.useMemo(()=>h.filter(a=>{const s=T.toLowerCase().trim(),t=!s||a.name?.toLowerCase().includes(s)||a.email?.toLowerCase().includes(s)||a.phone?.includes(s),l=V==="All Departments"||a.department===V,o=D==="All Roles"||(D.startsWith("custom:")?String(a.customRoleId)===D.slice(7):a.role===D&&!a.customRoleId);return t&&l&&o}),[h,T,V,D]),ga=Da(re,{id:"users",resetKey:`${T}|${V}|${D}`}),ba=String(N?._id||N?.id||""),Fe=n.useMemo(()=>W?re.filter(a=>a.id&&String(a.id)!==ba).map(a=>a.id):[],[re,W,ba]),je=bs(Fe),as=async a=>{const s=await Promise.allSettled(a.map(l=>x.delete(`/users/${l}`))),t=a.filter((l,o)=>s[o].status==="fulfilled");if(Ce(l=>l.filter(o=>!t.includes(String(o.id)))),!t.length&&s[0]?.status==="rejected")throw s[0].reason;return t},I=h.length,ye=w.length,ja=h.filter(a=>a.role==="Admin").length,ya=h.filter(a=>a.role==="Manager").length,va=h.filter(a=>a.status==="Active").length,ve=n.useMemo(()=>w.map(a=>({...a,count:h.filter(s=>s.department===a.name).length})),[h,w]),wa=Da(ve,{id:"departments",pageSize:20}),ss=Math.max(...ve.map(a=>a.count),1),ka=A?h.filter(a=>a.department===A.name).length:0,$e=n.useMemo(()=>{const a=Math.max(I,1);return[Math.round(a*.35),Math.round(a*.55),Math.round(a*.48),Math.round(a*.7),Math.round(a*.85),a]},[I]),we=600,U=190,ts=Math.max(...$e,1),Le=$e.map((a,s)=>({x:14+s*(we-28)/($e.length-1),y:16+(1-a/ts)*(U-40)})),Na=Le.map((a,s)=>`${s===0?"M":"L"} ${a.x.toFixed(1)},${a.y.toFixed(1)}`).join(" "),rs=`${Na} L ${we-14},${U-2} L 14,${U-2} Z`,ns=()=>{Be(""),ze("All Departments"),Ve("All Roles")},os=()=>{Ie(null),y({...Ue,role:ce.some(a=>a.value==="User")?"User":ce[0]?.value||"User",adminId:q[0]?.id||"",department:w[0]?.name||""}),$(!0)},za=a=>{Ie(a),y({name:a.name||"",email:a.email||"",password:"",phone:a.phone||"",department:a.department||"",role:a.customRoleId?`custom:${a.customRoleId}`:a.role||"User",adminId:a.adminId||""}),$(!0)},is=a=>{Je(a),me(!0)},ls=a=>{Qe(a),xe(!0)},ds=async a=>{if(a.preventDefault(),!r.name.trim()||!r.email.trim()||!r.phone.trim()||!r.department||!r.role){i("Please complete all required fields.","error");return}if(!m&&!r.password.trim()){i("Password is required for a new user.","error");return}if(j&&!m&&r.role!=="Admin"&&!r.adminId){i("Select the organization (Admin) for this user.","error");return}if(r.password.trim()&&r.password.trim().length<6){i("Password must be at least 6 characters.","error");return}try{if(m)await x.put(`/users/${m.id}`,{name:r.name.trim(),email:r.email.trim(),phone:r.phone.trim(),department:r.department,status:m.status||"Active",...(()=>{const s=m.customRoleId?`custom:${m.customRoleId}`:m.role;return r.role===s?{}:r.role.startsWith("custom:")?{customRoleId:r.role.slice(7)}:{role:r.role,...m.customRoleId?{customRoleId:""}:{}}})(),...r.password.trim()?{password:r.password.trim()}:{}}).then(s=>{i(s.data?.message||"User updated successfully.")}),r.password.trim()&&await Ze();else{const s=await x.post("/users",{name:r.name.trim(),email:r.email.trim(),password:r.password.trim(),phone:r.phone.trim(),department:r.department,status:"Active",...r.role.startsWith("custom:")?{customRoleId:r.role.slice(7)}:{role:r.role},...j&&r.role!=="Admin"?{adminId:r.adminId}:{}}),t=s.data?.data||s.data;if(!t?._id&&!t?.id)throw new Error("Server did not return the created user.");i(s.data?.message||"New user added successfully.",s.data?.emailSent===!1?"error":"success")}$(!1),Ie(null),y(Ue),await se()}catch(s){console.error("User save failed:",s),i(s.response?.data?.message||s.message||"Failed to save user.","error")}},cs=async a=>{a.preventDefault();const s=b.name.trim(),t=b.description.trim()||"Organization department";if(!s){i("Department name is required.","error");return}if(w.some(p=>p.name?.trim().toLowerCase()===s.toLowerCase())){i("Department already exists.","error");return}const o=he.filter(p=>[p.name,p.email,p.phone,p.password].some(Y=>Y.trim()));for(const p of o){if(!p.name.trim()||!p.email.trim()||!p.password.trim()){i("Each new user needs a name, email and password.","error");return}if(!/^\S+@\S+\.\S+$/.test(p.email.trim())){i(`"${p.email}" is not a valid email address.`,"error");return}if(p.password.trim().length<6){i(`Password for ${p.name.trim()} must be at least 6 characters.`,"error");return}}const d=ea?b.refPrefix.trim().toUpperCase():"";if(d&&!/^[A-Z]{1,6}$/.test(d)){i("Reference code must be 1–6 letters (e.g. FF).","error");return}const u={name:s,description:t,status:"Active",...d?{refPrefix:d}:{}};if(!Te){pa(!0);try{console.log("POST /api/departments:",u);const p=await x.post("/departments",u);console.log("POST /api/departments response:",p.data);const Y=p.data?.data||p.data;if(!Y?._id&&!Y?.id)throw new Error("Backend did not return the created department.");const Oe=await Promise.allSettled([...M.map(k=>x.put(`/users/${k}`,{department:Y.name||s})),...o.map(k=>x.post("/users",{name:k.name.trim(),email:k.email.trim(),phone:k.phone.trim(),password:k.password.trim(),department:Y.name||s,status:"Active",role:k.role}))]),ne=Oe.filter(k=>k.status==="rejected"),_=Oe.length-ne.length;ge(),await te(),Oe.length&&await se(),ne.length?i(`Department created${_?`, ${_} user${_===1?"":"s"} added`:""}. ${ne.length} could not be added: ${ne[0].reason?.response?.data?.message||ne[0].reason?.message||"error"}`,"error"):i(_?`Department created with ${_} user${_===1?"":"s"}.`:"Department created successfully.")}catch(p){console.error("Department create failed:",p),console.error("Department backend response:",p.response?.data),i(p.response?.data?.message||p.message||"Failed to create department in backend.","error")}finally{pa(!1)}}},Ca=async()=>{const a=ma.trim();if(!a){i("Enter the new department's name.","error");return}const s=w.find(t=>t.name?.trim().toLowerCase()===a.toLowerCase());if(s){y(t=>({...t,department:s.name})),O(!1),Q("");return}fa(!0);try{const t=await x.post("/departments",{name:a,description:"Organization department",status:"Active",...j&&r.adminId?{adminId:r.adminId}:{}}),l=t.data?.data||t.data;await te(),y(o=>({...o,department:l?.name||a})),O(!1),Q(""),i(`Department "${l?.name||a}" created.`)}catch(t){i(t.response?.data?.message||"Failed to create department.","error")}finally{fa(!1)}},ps=async()=>{if(!A)return;const a=A.id||A._id;if(!a){i("Department ID is missing.","error");return}try{await x.delete(`/departments/${a}`),await te(),xe(!1),Qe(null),i("Department deleted successfully.")}catch(s){console.error("Department delete failed:",s),console.error("Department backend response:",s.response?.data),i(s.response?.data?.message||"Failed to delete department from backend.","error")}},ms=async()=>{if(C)try{await x.delete(`/users/${C.id}`),Ce(a=>a.filter(s=>s.id!==C.id)),me(!1),i("User deleted successfully."),Je(null)}catch(a){console.error("User delete failed:",a),i(a.response?.data?.message||"Failed to delete user.","error")}},xs=()=>{const a=["Full Name,Email,Phone,Department,Role,Password","John Doe,john@example.com,9876543210,Development,Team Member,ChangeMe#1","Jane Smith,jane@example.com,9876543211,Marketing,Manager,ChangeMe#2"].join(`
`),s=new Blob([a],{type:"text/csv;charset=utf-8;"}),t=URL.createObjectURL(s),l=document.createElement("a");l.href=t,l.download="users-import-template.csv",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(t),i("CSV template downloaded.")},fs=a=>{const s=a.target.files?.[0];if(s){if(!s.name.toLowerCase().endsWith(".csv")){i("Please upload a CSV file.","error");return}Pe(s)}},us=a=>{const s=a.trim().split(/\r?\n/),t=s[0].split(",").map(l=>l.trim());return s.slice(1).map(l=>{const o=l.split(",").map(u=>u.trim()),d={};return t.forEach((u,p)=>{d[u]=o[p]||""}),d})},hs=async()=>{if(!ae){i("Please choose a CSV file first.","error");return}try{const a=await ae.text(),s=us(a);if(!s.length){i("The CSV file is empty.","error");return}let t=0,l=0;const o=[];for(const d of s){const u=String(d.Password||d.password||"").trim();if(u.length<6){l+=1,o.push(`${d.Email||d.email||"row"}: Password column missing or shorter than 6 characters`);continue}try{await x.post("/users",{name:d["Full Name"]||d.name||"",email:d.Email||d.email||"",phone:d.Phone||d.phone||"",department:d.Department||d.department||"",password:u,role:Ls(d.Role||d.role),...j?{adminId:d["Admin ID"]||q[0]?.id||""}:{}}),t+=1}catch(p){l+=1,o.push(`${d.Email||d.email||"row"}: ${p.response?.data?.message||"failed"}`)}}await se(),l===0?i(`${t} users imported successfully.`):(console.warn("User import failures:",o),i(`${t} imported, ${l} failed. ${o[0]||""}`,"error")),Pe(null),H(!1),ee.current&&(ee.current.value="")}catch(a){console.error("Import failed:",a),i("Failed to import users.","error")}};return e.jsxs("div",{className:"users-page",children:[e.jsx("style",{children:`

        /* =====================================================
           GLOBAL
        ===================================================== */

        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          margin: 0;
          min-height: 100%;
          background:
            linear-gradient(
              180deg,
              #e9f7fa 0%,
              #f5fbfd 48%,
              #edf8fb 100%
            );
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        button,
        input,
        select,
        textarea {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        /* =====================================================
           PAGE
        ===================================================== */

        .users-page {
          min-height: 100vh;
          padding: 24px 4%;
          color: #153b59;
          position: relative;
          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 8% 10%,
              rgba(56, 189, 248, 0.13),
              transparent 26%
            ),
            radial-gradient(
              circle at 94% 20%,
              rgba(14, 165, 233, 0.09),
              transparent 27%
            ),
            linear-gradient(
              180deg,
              #eaf8fa 0%,
              #f7fcfd 52%,
              #edf8fb 100%
            );
        }

        .users-page::before {
          content: "";
          position: fixed;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          right: -180px;
          top: 230px;
          background:
            radial-gradient(
              circle,
              rgba(14, 165, 233, 0.10),
              transparent 68%
            );
          pointer-events: none;
        }

        .users-page::after {
          content: "";
          position: fixed;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          left: -180px;
          bottom: 80px;
          background:
            radial-gradient(
              circle,
              rgba(2, 132, 199, 0.08),
              transparent 68%
            );
          pointer-events: none;
        }

        .users-shell {
          width: min(1380px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .users-hero {
          position: relative;
          overflow: hidden;

          min-height: 158px;
          padding: 28px 30px;

          border-radius: 24px;

          background:
            linear-gradient(
              135deg,
              #123f67 0%,
              #14577d 48%,
              #0f6b8f 100%
            );

          box-shadow:
            0 22px 48px
              rgba(16, 69, 101, 0.20);

          border: 1px solid
            rgba(255, 255, 255, 0.18);

          animation:
            heroEnter 0.65s ease both;
        }

        .users-hero::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          right: -110px;
          top: -150px;

          background:
            radial-gradient(
              circle,
              rgba(103, 232, 249, 0.28),
              transparent 68%
            );
        }

        .users-hero::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          left: 44%;
          bottom: -170px;

          border: 1px solid
            rgba(125, 211, 252, 0.20);
        }

        .hero-content {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .hero-title-wrap {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .hero-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #075985;

          background:
            linear-gradient(
              145deg,
              #b9f4ff,
              #67e8f9
            );

          box-shadow:
            0 10px 25px
              rgba(34, 211, 238, 0.22);

          animation:
            iconFloat 3.5s ease-in-out infinite;
        }

        .hero-title {
          margin: 0;

          color: #ffffff;

          font-size: 25px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .hero-subtitle {
          margin: 6px 0 0;

          color:
            rgba(231, 248, 255, 0.76);

          font-size: 12px;
        }

        .hero-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .hero-btn {
          height: 38px;
          padding: 0 14px;

          display: inline-flex;
          align-items: center;
          gap: 7px;

          border-radius: 11px;

          border: 1px solid
            rgba(255, 255, 255, 0.22);

          background:
            rgba(255, 255, 255, 0.09);

          color: #ffffff;

          font-size: 11px;
          font-weight: 700;

          transition:
            transform 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .hero-btn:hover {
          transform: translateY(-2px);

          background:
            rgba(255, 255, 255, 0.16);

          box-shadow:
            0 9px 22px
              rgba(0, 0, 0, 0.12);
        }

        .hero-btn.primary {
          background:
            linear-gradient(
              135deg,
              #9eefff,
              #4dd9f2
            );

          color: #0b4666;

          border-color:
            rgba(255, 255, 255, 0.30);
        }

        .hero-btn.primary:hover {
          background:
            linear-gradient(
              135deg,
              #c3f7ff,
              #67e8f9
            );
        }

        .hero-mini-stats {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 25px;

          margin-top: 25px;
        }

        .hero-mini-stat {
          display: flex;
          align-items: center;
          gap: 7px;

          color:
            rgba(233, 249, 255, 0.78);

          font-size: 10px;
        }

        .hero-mini-stat svg {
          color: #8beeff;
        }

        .hero-mini-stat strong {
          color: #ffffff;
          margin-left: 2px;
        }

        /* =====================================================
           STAT CARDS
        ===================================================== */

        .stats-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 14px;

          margin-top: 16px;
        }

        .stat-card {
          position: relative;
          overflow: hidden;

          min-height: 112px;
          padding: 17px;

          border-radius: 17px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.98),
              rgba(246, 252, 254, 0.98)
            );

          border: 1px solid
            rgba(32, 120, 150, 0.11);

          box-shadow:
            0 12px 30px
              rgba(25, 86, 112, 0.09);

          transition:
            transform 0.28s ease,
            box-shadow 0.28s ease,
            border-color 0.28s ease;

          animation:
            cardEnter 0.65s ease both;
        }

        .stat-card:nth-child(1) {
          animation-delay: 0.08s;
        }

        .stat-card:nth-child(2) {
          animation-delay: 0.14s;
        }

        .stat-card:nth-child(3) {
          animation-delay: 0.20s;
        }

        .stat-card:nth-child(4) {
          animation-delay: 0.26s;
        }

        .stat-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 20px 40px
              rgba(19, 91, 123, 0.14);

          border-color:
            rgba(14, 165, 233, 0.27);
        }

        .stat-card::before {
          content: "";
          position: absolute;

          top: 0;
          left: 0;
          right: 0;

          height: 3px;

          background:
            linear-gradient(
              90deg,
              #075985,
              #0ea5e9
            );
        }

        .stat-card:nth-child(2)::before {
          background:
            linear-gradient(
              90deg,
              #0e7490,
              #38bdf8
            );
        }

        .stat-card:nth-child(3)::before {
          background:
            linear-gradient(
              90deg,
              #1d4ed8,
              #60a5fa
            );
        }

        .stat-card:nth-child(4)::before {
          background:
            linear-gradient(
              90deg,
              #0369a1,
              #22d3ee
            );
        }

        .stat-glow {
          position: absolute;
          width: 110px;
          height: 110px;

          border-radius: 50%;

          right: -38px;
          top: -45px;

          background:
            radial-gradient(
              circle,
              rgba(14, 165, 233, 0.14),
              transparent 68%
            );
        }

        .stat-icon {
          width: 31px;
          height: 31px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          color: #0284c7;

          background:
            #effaff;

          border: 1px solid
            #d2f3fb;
        }

        .stat-card:nth-child(2)
          .stat-icon {
          color: #2563eb;
          background: #eff6ff;
          border-color: #dbeafe;
        }

        .stat-card:nth-child(3)
          .stat-icon {
          color: #0369a1;
          background: #eff9ff;
          border-color: #d7effb;
        }

        .stat-card:nth-child(4)
          .stat-icon {
          color: #0e7490;
          background: #ecfeff;
          border-color: #cffafe;
        }

        .stat-label {
          margin-top: 11px;

          color: #64869a;

          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-value {
          margin-top: 4px;

          color: #102f49;

          font-size: 24px;
          line-height: 1;
          font-weight: 800;
        }

        .stat-meta {
          position: absolute;
          right: 15px;
          top: 20px;

          display: flex;
          align-items: center;
          gap: 3px;

          color: #0284c7;

          font-size: 8px;
          font-weight: 800;
        }

        /* =====================================================
           ANALYTICS
        ===================================================== */

        .analytics-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1.65fr)
            minmax(320px, 0.9fr);

          gap: 14px;

          margin-top: 16px;
        }

        .chart-card {
          position: relative;
          overflow: hidden;

          border-radius: 17px;

          background:
            rgba(255, 255, 255, 0.96);

          border: 1px solid
            rgba(32, 120, 150, 0.11);

          box-shadow:
            0 12px 30px
              rgba(25, 86, 112, 0.08);

          animation:
            cardEnter 0.7s ease both;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .chart-card:hover {
          transform: translateY(-3px);

          box-shadow:
            0 18px 38px
              rgba(20, 85, 112, 0.12);
        }

        .chart-card-header {
          padding: 17px 18px 10px;

          display: flex;
          justify-content: space-between;
          align-items: flex-start;

          border-bottom: 1px solid
            rgba(42, 120, 150, 0.07);
        }

        .chart-title-wrap {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .chart-icon {
          width: 30px;
          height: 30px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          color: #0284c7;

          background:
            #effaff;

          border: 1px solid
            #d5f1fa;
        }

        .chart-title {
          margin: 0;

          color: #183d5b;

          font-size: 11px;
          font-weight: 800;
        }

        .chart-subtitle {
          margin-top: 3px;

          color: #86a3b1;

          font-size: 7px;
        }

        .chart-total {
          text-align: right;
        }

        .chart-total strong {
          color: #0e3552;

          font-size: 17px;
        }

        .chart-total span {
          display: block;

          margin-top: 2px;

          color: #0284c7;

          font-size: 7px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .chart-body {
          padding: 7px 13px 14px;
        }

        .activity-chart {
          width: 100%;
          height: 220px;
          display: block;
        }

        .chart-grid-line {
          stroke:
            rgba(32, 105, 140, 0.10);
          stroke-width: 1;
        }

        .chart-area {
          fill:
            url(#usersOceanArea);
        }

        .chart-line {
          fill: none;
          stroke: #0284c7;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;

          filter:
            drop-shadow(
              0 4px 7px
              rgba(2, 132, 199, 0.18)
            );
        }

        .chart-point {
          fill: #ffffff;
          stroke: #08a6d9;
          stroke-width: 3;
        }

        .chart-label {
          fill: #87a4b2;
          font-size: 8px;
        }

        /* =====================================================
           DEPARTMENT DISTRIBUTION
        ===================================================== */

        .distribution-body {
          padding: 17px;
        }

        .distribution-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .distribution-row {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .distribution-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          color: #456b80;

          font-size: 8px;
          font-weight: 700;
        }

        .distribution-top strong {
          color: #143c59;
          font-size: 8px;
        }

        .distribution-track {
          height: 7px;

          overflow: hidden;

          border-radius: 999px;

          background:
            #e8f3f7;
        }

        .distribution-fill {
          height: 100%;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              #075985,
              #0ea5e9,
              #67e8f9
            );

          box-shadow:
            0 2px 7px
              rgba(14, 165, 233, 0.20);

          transition:
            width 0.7s ease;
        }

        .empty-department {
          padding: 25px 12px;

          text-align: center;

          color: #88a4b1;

          font-size: 9px;
        }

        /* =====================================================
           TABS
        ===================================================== */

        .tabs-wrap {
          margin-top: 16px;

          display: inline-flex;

          padding: 3px;

          border-radius: 12px;

          background:
            rgba(255, 255, 255, 0.86);

          border: 1px solid
            rgba(32, 120, 150, 0.10);

          box-shadow:
            0 7px 18px
              rgba(24, 83, 108, 0.06);
        }

        .tab-btn {
          border: none;

          background: transparent;

          color: #7292a1;

          padding: 9px 16px;

          border-radius: 9px;

          display: flex;
          align-items: center;
          gap: 7px;

          font-size: 9px;
          font-weight: 800;

          transition:
            all 0.2s ease;
        }

        .tab-btn:hover {
          color: #155277;
        }

        .tab-btn.active {
          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #075985,
              #0e7490
            );

          box-shadow:
            0 6px 15px
              rgba(7, 89, 133, 0.20);
        }

        .tab-count {
          min-width: 19px;
          height: 18px;

          padding: 0 5px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          border-radius: 999px;

          background:
            rgba(14, 165, 233, 0.10);

          color: #0284c7;

          font-size: 8px;
        }

        .tab-btn.active
          .tab-count {
          color: #075985;

          background:
            #dff8ff;
        }

        /* =====================================================
           FILTER CARD
        ===================================================== */

        .filter-card {
          margin-top: 12px;

          padding: 13px;

          border-radius: 15px;

          display: flex;
          align-items: center;
          gap: 10px;

          background:
            rgba(255, 255, 255, 0.94);

          border: 1px solid
            rgba(32, 120, 150, 0.10);

          box-shadow:
            0 10px 24px
              rgba(25, 86, 112, 0.07);

          animation:
            cardEnter 0.65s ease both;
        }

        .search-box {
          flex: 1;

          height: 37px;

          position: relative;
        }

        .search-box svg {
          position: absolute;
          left: 12px;
          top: 50%;

          transform:
            translateY(-50%);

          color: #6f98aa;
        }

        .search-input {
          width: 100%;
          height: 100%;

          padding: 0 13px 0 35px;

          border-radius: 10px;

          border: 1px solid
            #dbeef4;

          outline: none;

          background:
            #f7fcfd;

          color: #173b59;

          font-size: 10px;

          transition:
            border 0.2s ease,
            box-shadow 0.2s ease;
        }

        .search-input::placeholder {
          color: #91a9b5;
        }

        .search-input:focus {
          border-color:
            #55bce0;

          box-shadow:
            0 0 0 3px
              rgba(14, 165, 233, 0.08);
        }

        .filter-select {
          height: 37px;

          min-width: 145px;

          padding: 0 30px 0 11px;

          border-radius: 10px;

          border: 1px solid
            #dbeef4;

          outline: none;

          background:
            #f7fcfd;

          color: #365b71;

          font-size: 9px;
          font-weight: 600;
        }

        .filter-select:focus {
          border-color: #55bce0;
        }

        .clear-filter-btn {
          height: 37px;

          padding: 0 12px;

          border: 1px solid
            #d9edf4;

          border-radius: 10px;

          color: #36728d;

          background: #f8fcfd;

          display: flex;
          align-items: center;
          gap: 5px;

          font-size: 9px;
          font-weight: 700;

          transition: all 0.2s ease;
        }

        .clear-filter-btn:hover {
          color: #075985;

          border-color:
            #9ddced;

          background: #edfaff;
        }

        /* =====================================================
           SECTION HEADER
        ===================================================== */

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin: 20px 2px 11px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 8px;

          color: #163d5a;

          font-size: 12px;
          font-weight: 800;
        }

        .section-title-icon {
          width: 26px;
          height: 26px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 8px;

          color: #0284c7;

          background: #effaff;
          border: 1px solid #d8f2fa;
        }

        .result-count {
          color: #7595a4;
          font-size: 9px;
        }

        .add-dept-btn {
          height: 32px;
          padding: 0 14px;

          display: inline-flex;
          align-items: center;
          gap: 6px;

          border: none;
          border-radius: 10px;

          background:
            linear-gradient(
              135deg,
              #075985,
              #0ea5e9
            );

          color: #ffffff;

          font-size: 9px;
          font-weight: 800;

          box-shadow:
            0 7px 18px
              rgba(7, 89, 133, 0.22);

          transition: all 0.2s ease;
        }

        .add-dept-btn:hover {
          transform: translateY(-2px);

          box-shadow:
            0 10px 22px
              rgba(7, 89, 133, 0.28);
        }

        /* =====================================================
           USER GRID
        ===================================================== */

        .users-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 13px;
        }

        .user-card {
          position: relative;

          overflow: hidden;

          padding: 17px;

          min-height: 185px;

          border-radius: 16px;

          background:
            linear-gradient(
              145deg,
              #ffffff,
              #f8fcfd
            );

          border: 1px solid
            rgba(32, 120, 150, 0.11);

          box-shadow:
            0 10px 26px
              rgba(25, 86, 112, 0.08);

          animation:
            userCardEnter 0.55s ease both;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .user-card:hover {
          transform:
            translateY(-5px);

          border-color:
            rgba(14, 165, 233, 0.28);

          box-shadow:
            0 18px 35px
              rgba(18, 85, 115, 0.13);
        }

        .user-card::before {
          content: "";

          position: absolute;

          left: 0;
          right: 0;
          top: 0;

          height: 3px;

          background:
            linear-gradient(
              90deg,
              #075985,
              #0ea5e9
            );
        }

        .user-card:nth-child(3n + 2)::before {
          background:
            linear-gradient(
              90deg,
              #1d4ed8,
              #38bdf8
            );
        }

        .user-card:nth-child(3n)::before {
          background:
            linear-gradient(
              90deg,
              #0369a1,
              #22d3ee
            );
        }

        .user-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .user-avatar {
          width: 42px;
          height: 42px;

          border-radius: 13px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #ffffff;

          font-size: 14px;
          font-weight: 800;

          background:
            linear-gradient(
              135deg,
              #075985,
              #0ea5e9
            );

          box-shadow:
            0 8px 18px
              rgba(2, 132, 199, 0.19);
        }

        .user-card:nth-child(3n + 2)
          .user-avatar {
          background:
            linear-gradient(
              135deg,
              #1d4ed8,
              #38bdf8
            );
        }

        .user-card:nth-child(3n)
          .user-avatar {
          background:
            linear-gradient(
              135deg,
              #0369a1,
              #22d3ee
            );
        }

        .user-menu-btn {
          width: 29px;
          height: 29px;

          border-radius: 8px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            #e0eef3;

          color: #7898a7;

          background: #f9fcfd;

          transition:
            all 0.2s ease;
        }

        .user-menu-btn:hover {
          color: #075985;

          border-color:
            #a7dceb;

          background:
            #edfaff;
        }

        /* =====================================================
           USER CARD ACTION BUTTONS  (EDIT + DELETE)
        ===================================================== */

        .user-card-actions {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .user-action-btn {
          width: 29px;
          height: 29px;

          border-radius: 8px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            #e0eef3;

          color: #7898a7;

          background: #f9fcfd;

          transition:
            all 0.2s ease;
        }

        .user-action-btn.edit:hover {
          color: #0284c7;

          border-color:
            #a7dceb;

          background: #edfaff;

          transform: translateY(-1px);
        }

        .user-action-btn.delete {
          color: #b45d5d;
        }

        .user-action-btn.delete:hover {
          color: #dc2626;

          border-color: #fecaca;

          background: #fef2f2;

          transform: translateY(-1px);

          box-shadow:
            0 6px 14px
              rgba(220, 38, 38, 0.16);
        }

        .user-name {
          margin: 12px 0 2px;

          color: #143a57;

          font-size: 12px;
          font-weight: 800;
        }

        .user-role {
          color: #6f91a1;

          font-size: 8px;
          font-weight: 600;
        }

        .user-details {
          display: flex;
          flex-direction: column;
          gap: 7px;

          margin-top: 13px;

          padding-top: 11px;

          border-top: 1px solid
            #edf4f7;
        }

        .user-detail {
          display: flex;
          align-items: center;
          gap: 7px;

          color: #68899a;

          font-size: 8px;
        }

        .user-detail svg {
          color: #1689b7;
          flex-shrink: 0;
        }

        .user-card-footer {
          margin-top: 12px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;

          padding: 5px 8px;

          border-radius: 999px;

          color: #075985;

          background:
            #eaf8fd;

          border: 1px solid
            #ccecf7;

          font-size: 7px;
          font-weight: 800;
        }

        .status-dot {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background:
            #0ea5e9;

          box-shadow:
            0 0 0 3px
              rgba(14, 165, 233, 0.10);
        }

        .role-badge {
          padding: 5px 8px;

          border-radius: 7px;

          color: #365d74;

          background: #f1f7fa;

          font-size: 7px;
          font-weight: 800;
        }

        /* =====================================================
           EMPTY STATE
        ===================================================== */

        .empty-state {
          grid-column: 1 / -1;

          padding: 50px 20px;

          text-align: center;

          border-radius: 17px;

          background:
            rgba(255, 255, 255, 0.92);

          border: 1px dashed
            #b9dce8;
        }

        .empty-icon {
          width: 52px;
          height: 52px;

          margin: 0 auto 12px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 16px;

          color: #0e7490;

          background:
            #edfaff;
        }

        .empty-state h3 {
          margin: 0;

          color: #234a63;

          font-size: 13px;
        }

        .empty-state p {
          margin: 6px 0 0;

          color: #7898a6;

          font-size: 9px;
        }

        /* =====================================================
           DEPARTMENT GRID
        ===================================================== */

        .department-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 13px;
        }

        .department-card {
          position: relative;
          overflow: hidden;

          padding: 18px;

          min-height: 170px;

          border-radius: 17px;

          background:
            linear-gradient(
              145deg,
              #ffffff,
              #f6fbfd
            );

          border: 1px solid
            rgba(32, 120, 150, 0.11);

          box-shadow:
            0 11px 28px
              rgba(25, 86, 112, 0.08);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .department-card:hover {
          transform:
            translateY(-5px);

          box-shadow:
            0 18px 36px
              rgba(20, 85, 112, 0.13);
        }

        .department-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;
          right: 0;

          height: 3px;

          background:
            linear-gradient(
              90deg,
              #075985,
              #38bdf8
            );
        }

        .department-card:nth-child(2)::before {
          background:
            linear-gradient(
              90deg,
              #1d4ed8,
              #60a5fa
            );
        }

        .department-card:nth-child(3)::before {
          background:
            linear-gradient(
              90deg,
              #0369a1,
              #22d3ee
            );
        }

        .department-header {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .dept-icon-wrap {
          width: 40px;
          height: 40px;

          border-radius: 12px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #0284c7;

          background:
            linear-gradient(
              145deg,
              #effaff,
              #dcf3fb
            );

          border: 1px solid
            #d5f1fa;

          flex-shrink: 0;
        }

        .dept-info {
          min-width: 0;
        }

        .dept-name {
          margin: 0;

          color: #143a57;

          font-size: 12px;
          font-weight: 800;
        }

        .dept-desc {
          margin: 3px 0 0;

          color: #7d9dab;

          font-size: 8px;
          line-height: 1.5;
        }

        .dept-members-pill {
          margin-top: 14px;

          display: inline-flex;
          align-items: center;
          gap: 6px;

          padding: 6px 10px;

          border-radius: 999px;

          color: #075985;

          background: #eaf8fd;

          border: 1px solid
            #ccecf7;

          font-size: 8px;
          font-weight: 800;
        }

        .dept-card-footer {
          margin-top: 14px;

          padding-top: 12px;

          border-top: 1px solid
            #edf4f7;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .dept-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;

          padding: 5px 8px;

          border-radius: 999px;

          color: #075985;

          background: #eaf8fd;

          border: 1px solid
            #ccecf7;

          font-size: 7px;
          font-weight: 800;
        }

        .dept-delete-btn {
          height: 28px;

          padding: 0 10px;

          display: inline-flex;
          align-items: center;
          gap: 5px;

          border-radius: 8px;

          border: 1px solid
            #fecaca;

          color: #dc2626;

          background: #fef2f2;

          font-size: 8px;
          font-weight: 800;

          transition: all 0.2s ease;
        }

        .dept-delete-btn:hover {
          background: #fee2e2;

          transform: translateY(-1px);

          box-shadow:
            0 6px 14px
              rgba(220, 38, 38, 0.18);
        }

        /* =====================================================
           MODALS (SHARED)
        ===================================================== */

        .modal-overlay {
          position: fixed;
          inset: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 20px;

          background:
            rgba(9, 42, 61, 0.45);

          backdrop-filter: blur(4px);

          z-index: 100;

          animation:
            overlayIn 0.2s ease both;
        }

        .modal-card {
          width: min(520px, 100%);
          max-height: 90vh;
          overflow-y: auto;

          border-radius: 20px;

          background: #ffffff;

          border: 1px solid
            rgba(32, 120, 150, 0.14);

          box-shadow:
            0 30px 70px
              rgba(9, 42, 61, 0.28);

          animation:
            modalEnter 0.3s ease both;
        }

        .modal-header {
          position: relative;

          padding: 20px 22px 14px;

          display: flex;
          align-items: flex-start;
          gap: 12px;

          border-bottom: 1px solid
            #eef6f9;
        }

        .modal-icon {
          width: 40px;
          height: 40px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 12px;

          color: #0284c7;

          background: #effaff;

          border: 1px solid
            #d5f1fa;
        }

        .modal-header h3 {
          margin: 0;

          color: #143a57;

          font-size: 14px;
          font-weight: 800;
        }

        .modal-header p {
          margin: 4px 0 0;

          color: #7d9dab;

          font-size: 10px;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;

          width: 30px;
          height: 30px;

          border-radius: 9px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            #e0eef3;

          color: #7898a7;

          background: #f9fcfd;

          transition: all 0.2s ease;
        }

        .modal-close:hover {
          color: #b91c1c;

          border-color: #fecaca;

          background: #fef2f2;
        }

        /* =====================================================
           FORMS
        ===================================================== */

        .modal-form {
          padding: 18px 22px 22px;

          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-row-2 {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 12px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .dept-modal { width: min(600px, 100%); }
        .dept-ref { display: flex; align-items: center; gap: 6px; margin-top: 8px; font-size: 11px; color: #4a6f83; }
        .dept-ref b { color: #0b4f6c; letter-spacing: .04em; }
        .dept-ref button { display: inline-flex; align-items: center; border: 1px solid #dbeef4; background: #fff; color: #1677a8; border-radius: 7px; padding: 3px 7px; font-size: 11px; font-weight: 700; cursor: pointer; }
        .dept-ref input { width: 70px; height: 26px; padding: 0 8px; border-radius: 7px; border: 1px solid #9fdde1; outline: none; font-size: 12px; font-weight: 700; letter-spacing: .04em; }
        .inline-dept { display: flex; gap: 6px; margin-top: 6px; }
        .inline-dept input { flex: 1; min-width: 0; height: 34px; padding: 0 10px; border-radius: 9px; border: 1px solid #9fdde1; outline: none; font-size: 12px; }
        .inline-dept .btn-primary, .inline-dept .btn-secondary { height: 34px; padding: 0 12px; }
        .dept-users { display: flex; flex-direction: column; gap: 10px; padding: 12px; border-radius: 14px; border: 1px solid #dbeef4; background: #f7fcfd; }
        .dept-users-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
        .dept-users-head > span { color: #4a6f83; font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: .4px; }
        .dept-users-head em { font-style: normal; text-transform: none; font-weight: 600; color: #7b969e; }
        .dept-mode { display: inline-flex; padding: 3px; border-radius: 10px; background: #e6f4f7; }
        .dept-mode button { border: 0; background: transparent; padding: 6px 12px; border-radius: 8px; font-size: 11.5px; font-weight: 700; color: #4a6f83; cursor: pointer; }
        .dept-mode button.on { background: #fff; color: #0b4f6c; box-shadow: 0 2px 6px rgba(9,42,61,.1); }
        .dept-picker { display: flex; flex-direction: column; gap: 8px; }
        .dept-picker-toggle { display: flex; align-items: center; justify-content: space-between; height: 38px; padding: 0 12px; border-radius: 10px; border: 1px solid #dbeef4; background: #fff; color: #123b5d; font-size: 12.5px; font-weight: 600; cursor: pointer; }
        .dept-picker-panel { border: 1px solid #dbeef4; border-radius: 12px; background: #fff; overflow: hidden; }
        .dept-picker-panel > input { width: 100%; box-sizing: border-box; height: 36px; padding: 0 12px; border: 0; border-bottom: 1px solid #eef5f7; outline: none; font-size: 12px; }
        .dept-picker-list { max-height: 200px; overflow-y: auto; }
        .dept-option { display: flex; align-items: center; gap: 10px; padding: 8px 12px; cursor: pointer; border-bottom: 1px solid #f2f8fa; }
        .dept-option:hover { background: #f2fbfc; }
        .dept-option input { width: 16px; height: 16px; accent-color: #16a6b8; flex-shrink: 0; }
        .dept-option-text { display: flex; flex-direction: column; min-width: 0; }
        .dept-option-text strong { font-size: 12.5px; color: #123b5d; }
        .dept-option-text small { font-size: 11px; color: #7b969e; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .dept-empty { padding: 14px; text-align: center; font-size: 12px; color: #7b969e; }
        .dept-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .dept-chip { display: inline-flex; align-items: center; gap: 5px; padding: 4px 6px 4px 10px; border-radius: 999px; background: #e6f4fa; color: #1677a8; font-size: 11px; font-weight: 700; }
        .dept-chip button { display: flex; border: 0; background: transparent; color: inherit; cursor: pointer; padding: 2px; }
        .dept-hint { font-size: 10.5px; color: #7b969e; }
        .dept-new { display: flex; flex-direction: column; gap: 8px; }
        .dept-new-card { display: flex; flex-direction: column; gap: 8px; padding: 10px; border-radius: 12px; border: 1px solid #dbeef4; background: #fff; }
        .dept-new-card input, .dept-new-card select { height: 36px; min-width: 0; padding: 0 10px; border-radius: 9px; border: 1px solid #dbeef4; outline: none; font-size: 12px; background: #fff; }
        .dept-new-top { display: flex; align-items: center; justify-content: space-between; font-size: 11.5px; color: #123b5d; }
        .dept-new-top button { display: flex; border: 0; background: transparent; color: #7b969e; cursor: pointer; }
        .dept-add-more { align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; }

        .form-field span {
          display: flex;
          align-items: center;
          gap: 5px;

          color: #4a6f83;

          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        .form-field input,
        .form-field select {
          height: 38px;

          padding: 0 12px;

          border-radius: 10px;

          border: 1px solid
            #dbeef4;

          outline: none;

          background: #f7fcfd;

          color: #173b59;

          font-size: 11px;

          transition:
            border 0.2s ease,
            box-shadow 0.2s ease;
        }

        .form-field input::placeholder {
          color: #a5bec9;
        }

        .form-field input:focus,
        .form-field select:focus {
          border-color: #55bce0;

          box-shadow:
            0 0 0 3px
              rgba(14, 165, 233, 0.10);
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;

          margin-top: 6px;
          padding-top: 14px;

          border-top: 1px solid
            #eef6f9;
        }

        .btn-secondary {
          height: 38px;

          padding: 0 16px;

          border-radius: 10px;

          border: 1px solid
            #d9edf4;

          color: #36728d;

          background: #f8fcfd;

          font-size: 11px;
          font-weight: 700;

          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          color: #075985;

          border-color: #9ddced;

          background: #edfaff;
        }

        .btn-primary {
          height: 38px;

          padding: 0 18px;

          display: inline-flex;
          align-items: center;
          gap: 7px;

          border: none;
          border-radius: 10px;

          background:
            linear-gradient(
              135deg,
              #075985,
              #0ea5e9
            );

          color: #ffffff;

          font-size: 11px;
          font-weight: 800;

          box-shadow:
            0 8px 20px
              rgba(7, 89, 133, 0.25);

          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);

          box-shadow:
            0 12px 26px
              rgba(7, 89, 133, 0.32);
        }

        .btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .btn-danger {
          height: 38px;

          padding: 0 18px;

          display: inline-flex;
          align-items: center;
          gap: 7px;

          border: none;
          border-radius: 10px;

          background:
            linear-gradient(
              135deg,
              #dc2626,
              #ef4444
            );

          color: #ffffff;

          font-size: 11px;
          font-weight: 800;

          box-shadow:
            0 8px 20px
              rgba(220, 38, 38, 0.25);

          transition: all 0.2s ease;
        }

        .btn-danger:hover {
          transform: translateY(-2px);

          background:
            linear-gradient(
              135deg,
              #b91c1c,
              #dc2626
            );

          box-shadow:
            0 12px 26px
              rgba(220, 38, 38, 0.32);
        }

        /* =====================================================
           DELETE MODALS (USER + DEPARTMENT)
        ===================================================== */

        .delete-modal {
          width: min(430px, 100%);

          padding: 26px 24px 22px;

          text-align: center;
        }

        .delete-icon-wrap {
          width: 56px;
          height: 56px;

          margin: 0 auto 14px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 18px;

          color: #dc2626;

          background: #fef2f2;

          border: 1px solid
            #fecaca;

          box-shadow:
            0 10px 24px
              rgba(220, 38, 38, 0.16);

          animation:
            pulseDanger 2s ease-in-out infinite;
        }

        .delete-title {
          margin: 0;

          color: #16324a;

          font-size: 15px;
          font-weight: 800;
        }

        .delete-message {
          margin: 8px 0 0;

          color: #6b8b9b;

          font-size: 11px;
          line-height: 1.6;
        }

        .delete-message strong {
          color: #b91c1c;
        }

        .delete-user-preview {
          margin: 16px 0 4px;

          padding: 12px 14px;

          display: flex;
          align-items: center;
          gap: 12px;

          text-align: left;

          border-radius: 12px;

          background: #f7fcfd;

          border: 1px solid
            #e2f1f7;
        }

        .preview-avatar {
          width: 38px;
          height: 38px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 11px;

          color: #ffffff;

          font-size: 13px;
          font-weight: 800;

          background:
            linear-gradient(
              135deg,
              #075985,
              #0ea5e9
            );
        }

        .delete-user-preview strong {
          display: block;

          color: #143a57;

          font-size: 11px;
        }

        .delete-user-preview span {
          display: block;

          margin-top: 2px;

          color: #7d9dab;

          font-size: 9px;
        }

        .delete-modal .modal-actions {
          justify-content: center;

          margin-top: 16px;
        }

        /* =====================================================
           BULK IMPORT MODAL
        ===================================================== */

        .bulk-body {
          padding: 18px 22px 22px;

          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .bulk-steps {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bulk-step {
          display: flex;
          align-items: center;
          gap: 10px;

          padding: 11px 13px;

          border-radius: 12px;

          color: #456b80;

          background: #f7fcfd;

          border: 1px solid
            #e2f1f7;

          font-size: 10px;
        }

        .bulk-step svg {
          color: #0284c7;
          flex-shrink: 0;
        }

        .bulk-template-btn {
          height: 36px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;

          border-radius: 10px;

          border: 1px solid
            #d9edf4;

          color: #36728d;

          background: #f8fcfd;

          font-size: 10px;
          font-weight: 700;

          transition: all 0.2s ease;
        }

        .bulk-template-btn:hover {
          color: #075985;

          border-color: #9ddced;

          background: #edfaff;
        }

        .bulk-upload {
          display: block;

          padding: 22px;

          text-align: center;

          cursor: pointer;

          border: 2px dashed
            #b9dce8;

          border-radius: 14px;

          background: #f7fcfd;

          transition: all 0.2s ease;
        }

        .bulk-upload:hover {
          border-color: #55bce0;

          background: #edfaff;
        }

        .bulk-upload-icon {
          width: 44px;
          height: 44px;

          margin: 0 auto 10px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 13px;

          color: #0284c7;

          background: #effaff;

          border: 1px solid
            #d5f1fa;
        }

        .bulk-upload h4 {
          margin: 0;

          color: #143a57;

          font-size: 11px;
          font-weight: 800;
        }

        .bulk-upload p {
          margin: 4px 0 0;

          color: #7d9dab;

          font-size: 9px;
        }

        .file-chip {
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 10px 12px;

          border-radius: 10px;

          color: #0e7490;

          background: #effaff;

          border: 1px solid
            #d5f1fa;

          font-size: 10px;
          font-weight: 700;
        }

        .file-chip button {
          margin-left: auto;

          display: flex;

          border: none;

          background: transparent;

          color: #7898a7;
        }

        .file-chip button:hover {
          color: #dc2626;
        }

        /* =====================================================
           TOAST
        ===================================================== */

        .toast {
          position: fixed;
          bottom: 26px;
          left: 50%;

          transform: translateX(-50%);

          z-index: 200;

          display: flex;
          align-items: center;
          gap: 9px;

          padding: 12px 18px;

          border-radius: 12px;

          font-size: 11px;
          font-weight: 700;

          box-shadow:
            0 14px 34px
              rgba(9, 42, 61, 0.22);

          animation:
            toastIn 0.3s ease both;
        }

        .toast.success {
          background:
            linear-gradient(
              135deg,
              #075985,
              #0e7490
            );

          color: #ffffff;

          border: 1px solid
            rgba(255, 255, 255, 0.2);
        }

        .toast.error {
          background:
            linear-gradient(
              135deg,
              #b91c1c,
              #ef4444
            );

          color: #ffffff;

          border: 1px solid
            rgba(255, 255, 255, 0.2);
        }

        /* =====================================================
           KEYFRAMES
        ===================================================== */

        @keyframes heroEnter {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes userCardEnter {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes overlayIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes toastIn {
          from {
            opacity: 0;
            transform: translate(-50%, 14px);
          }

          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes pulseDanger {
          0%,
          100% {
            box-shadow:
              0 10px 24px
                rgba(220, 38, 38, 0.16);
          }

          50% {
            box-shadow:
              0 10px 30px
                rgba(220, 38, 38, 0.30);
          }
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .stats-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .analytics-grid {
            grid-template-columns: 1fr;
          }

          .users-grid,
          .department-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .users-grid,
          .department-grid {
            grid-template-columns: 1fr;
          }

          .form-row-2 {
            grid-template-columns: 1fr;
          }

          .hero-content {
            flex-direction: column;
            align-items: flex-start;
          }

          .filter-card {
            flex-wrap: wrap;
          }
        }

      
/* =========================================================
   Blizzboard OCEAN SIGNATURE UI
   Visual layer only — API/business logic remains unchanged
========================================================= */

:root {
  --ts-ocean-950: #031525;
  --ts-ocean-900: #06243a;
  --ts-ocean-800: #073b59;
  --ts-ocean-700: #075985;
  --ts-ocean-600: #087ea4;
  --ts-ocean-500: #0ea5c7;
  --ts-ocean-400: #22d3ee;
  --ts-ocean-300: #67e8f9;
  --ts-ocean-200: #a5f3fc;
  --ts-ocean-100: #cffafe;
  --ts-ink: #082032;
  --ts-muted: #527083;
  --ts-surface: rgba(255,255,255,.78);
  --ts-surface-strong: rgba(255,255,255,.92);
  --ts-border: rgba(8,126,164,.16);
  --ts-shadow: 0 22px 60px rgba(3,37,55,.12);
  --ts-radius: 24px;
}

.users-page {
  position: relative;
  isolation: isolate;
  min-height: 100%;
  overflow: hidden;
  color: var(--ts-ink);
  background:
    radial-gradient(circle at 8% 6%, rgba(34,211,238,.17), transparent 24%),
    radial-gradient(circle at 92% 14%, rgba(14,165,199,.13), transparent 25%),
    radial-gradient(circle at 50% 105%, rgba(103,232,249,.13), transparent 30%),
    linear-gradient(145deg, #effcff 0%, #f5fdff 45%, #e7f9fd 100%);
}

.users-page::before,
.users-page::after {
  content: "";
  position: absolute;
  z-index: -1;
  pointer-events: none;
  border-radius: 999px;
  filter: blur(3px);
  opacity: .72;
}

.users-page::before {
  width: 360px;
  height: 360px;
  right: -120px;
  top: 110px;
  background: radial-gradient(circle, rgba(34,211,238,.19), transparent 68%);
  animation: tsOrbFloat 12s ease-in-out infinite;
}

.users-page::after {
  width: 300px;
  height: 300px;
  left: -130px;
  bottom: 80px;
  background: radial-gradient(circle, rgba(8,126,164,.13), transparent 68%);
  animation: tsOrbFloat 15s ease-in-out infinite reverse;
}

.users-page > div {
  position: relative;
  z-index: 1;
}

/* HERO */
.users-page .users-header,
.users-page .page-header,
.users-page .hero,
.users-page .users-hero {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(103,232,249,.24);
  border-radius: 30px;
  background:
    radial-gradient(circle at 84% 10%, rgba(103,232,249,.20), transparent 26%),
    linear-gradient(135deg, #06263d 0%, #074b6a 54%, #087ea4 100%);
  box-shadow: 0 24px 70px rgba(3,50,72,.22);
}

.users-page .users-header::before,
.users-page .page-header::before,
.users-page .hero::before,
.users-page .users-hero::before {
  content: "";
  position: absolute;
  inset: auto -8% -62%;
  height: 180px;
  border-radius: 50%;
  background: rgba(255,255,255,.08);
  transform: rotate(-3deg);
  animation: tsWaveDrift 8s ease-in-out infinite;
}

.users-page .users-header::after,
.users-page .page-header::after,
.users-page .hero::after,
.users-page .users-hero::after {
  content: "";
  position: absolute;
  width: 170px;
  height: 170px;
  right: 5%;
  top: -65px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 50%;
  box-shadow:
    0 0 0 24px rgba(255,255,255,.035),
    0 0 0 48px rgba(255,255,255,.025);
  animation: tsRingPulse 5s ease-in-out infinite;
}

/* CARDS */
.users-page .stat-card,
.users-page .stats-card,
.users-page .analytics-card,
.users-page .chart-card,
.users-page .department-card,
.users-page .user-card,
.users-page .table-card,
.users-page .content-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--ts-border);
  border-radius: var(--ts-radius);
  background:
    linear-gradient(145deg, rgba(255,255,255,.92), rgba(239,252,255,.72));
  box-shadow: var(--ts-shadow);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  transition:
    transform .35s cubic-bezier(.2,.8,.2,1),
    box-shadow .35s ease,
    border-color .35s ease;
}

.users-page .stat-card::before,
.users-page .stats-card::before,
.users-page .analytics-card::before,
.users-page .chart-card::before,
.users-page .department-card::before,
.users-page .user-card::before,
.users-page .table-card::before,
.users-page .content-card::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--ts-ocean-700), var(--ts-ocean-400), var(--ts-ocean-600));
  background-size: 220% 100%;
  animation: tsGradientFlow 4.5s linear infinite;
}

.users-page .stat-card:hover,
.users-page .stats-card:hover,
.users-page .analytics-card:hover,
.users-page .chart-card:hover,
.users-page .department-card:hover,
.users-page .user-card:hover,
.users-page .table-card:hover,
.users-page .content-card:hover {
  transform: translateY(-6px);
  border-color: rgba(14,165,199,.32);
  box-shadow: 0 28px 72px rgba(3,70,95,.17);
}

/* STAT ICONS */
.users-page .stat-icon,
.users-page .stats-icon,
.users-page .card-icon {
  position: relative;
  display: grid;
  place-items: center;
  border: 1px solid rgba(103,232,249,.35);
  background: linear-gradient(145deg, #063653, #087ea4);
  color: #dffcff;
  box-shadow: 0 12px 28px rgba(8,126,164,.22);
  animation: tsIconFloat 4s ease-in-out infinite;
}

.users-page .stat-icon::after,
.users-page .stats-icon::after,
.users-page .card-icon::after {
  content: "";
  position: absolute;
  inset: -8px;
  border: 1px solid rgba(34,211,238,.20);
  border-radius: inherit;
  animation: tsIconRipple 3s ease-out infinite;
}

/* BUTTONS */
.users-page button,
.users-page .btn-primary,
.users-page .primary-btn {
  transition:
    transform .22s ease,
    box-shadow .22s ease,
    background .22s ease,
    border-color .22s ease;
}

.users-page button:hover,
.users-page .btn-primary:hover,
.users-page .primary-btn:hover {
  transform: translateY(-2px);
}

.users-page .btn-primary,
.users-page .primary-btn {
  border: 1px solid rgba(103,232,249,.28);
  background: linear-gradient(135deg, #063653, #087ea4);
  color: #fff;
  box-shadow: 0 12px 28px rgba(8,126,164,.22);
}

.users-page .btn-primary:hover,
.users-page .primary-btn:hover {
  box-shadow: 0 16px 34px rgba(8,126,164,.30);
}

/* FILTER / TABS */
.users-page .tabs,
.users-page .tab-list,
.users-page .filter-bar,
.users-page .filters,
.users-page .toolbar {
  border-color: rgba(8,126,164,.13);
}

.users-page .tab,
.users-page .tab-button,
.users-page .filter-chip {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  transition: all .25s ease;
}

.users-page .tab::after,
.users-page .tab-button::after,
.users-page .filter-chip::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--ts-ocean-400);
  transform: translateX(-50%);
  transition: width .3s ease;
}

.users-page .tab:hover::after,
.users-page .tab.active::after,
.users-page .tab-button:hover::after,
.users-page .tab-button.active::after {
  width: 70%;
}

/* USER AVATARS */
.users-page .avatar,
.users-page .user-avatar,
.users-page .profile-avatar {
  position: relative;
  overflow: visible;
  background: linear-gradient(145deg, #063653, #0ea5c7);
  color: white;
  border: 2px solid rgba(255,255,255,.72);
  box-shadow: 0 12px 28px rgba(8,126,164,.22);
  animation: tsAvatarFloat 5s ease-in-out infinite;
}

.users-page .avatar::before,
.users-page .user-avatar::before,
.users-page .profile-avatar::before {
  content: "";
  position: absolute;
  inset: -5px;
  border-radius: inherit;
  border: 1px solid rgba(34,211,238,.28);
  animation: tsAvatarRing 3.5s ease-out infinite;
}

/* DEPARTMENT VISUALIZATION */
.users-page .department-progress,
.users-page .progress-bar,
.users-page .distribution-bar {
  overflow: hidden;
  border-radius: 999px;
  background: rgba(8,126,164,.09);
}

.users-page .department-progress > *,
.users-page .progress-bar > *,
.users-page .distribution-bar > * {
  position: relative;
  overflow: hidden;
  border-radius: inherit;
  background: linear-gradient(90deg, #075985, #0ea5c7, #67e8f9);
  background-size: 180% 100%;
  animation: tsProgressFlow 3s linear infinite;
}

.users-page .department-progress > *::after,
.users-page .progress-bar > *::after,
.users-page .distribution-bar > *::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.42), transparent);
  transform: translateX(-100%);
  animation: tsShimmer 2.4s infinite;
}

/* CHART */
.users-page svg {
  overflow: visible;
}

.users-page .chart-line,
.users-page .trend-line,
.users-page .activity-line {
  stroke: #087ea4;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: drop-shadow(0 5px 8px rgba(8,126,164,.18));
  stroke-dasharray: 900;
  stroke-dashoffset: 900;
  animation: tsChartDraw 1.8s cubic-bezier(.4,0,.2,1) forwards;
}

.users-page .chart-area,
.users-page .trend-area {
  fill: url(#oceanAreaGradient);
  opacity: .18;
  animation: tsAreaReveal 1.4s ease forwards;
}

/* MODALS */
.users-page .modal-overlay,
.users-page .overlay {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(2,25,39,.58);
  animation: tsOverlayIn .25s ease both;
}

.users-page .modal,
.users-page .modal-content,
.users-page .dialog {
  border: 1px solid rgba(103,232,249,.22);
  border-radius: 26px;
  background:
    radial-gradient(circle at 100% 0%, rgba(34,211,238,.10), transparent 30%),
    rgba(248,254,255,.97);
  box-shadow: 0 35px 100px rgba(1,25,40,.30);
  animation: tsModalIn .4s cubic-bezier(.16,1,.3,1) both;
}

.users-page input,
.users-page select,
.users-page textarea {
  border-color: rgba(8,126,164,.16);
  background: rgba(255,255,255,.80);
  color: var(--ts-ink);
  transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
}

.users-page input:focus,
.users-page select:focus,
.users-page textarea:focus {
  outline: none;
  border-color: rgba(14,165,199,.55);
  background: white;
  box-shadow: 0 0 0 4px rgba(34,211,238,.10);
}

/* TOAST */
.users-page .toast {
  border: 1px solid rgba(103,232,249,.25);
  background: linear-gradient(135deg, #063653, #087ea4);
  color: white;
  box-shadow: 0 18px 45px rgba(3,55,76,.28);
  animation: tsToastIn .42s cubic-bezier(.16,1,.3,1) both;
}

/* EMPTY STATE */
.users-page .empty-state,
.users-page .empty-users,
.users-page .empty-departments {
  border: 1px dashed rgba(8,126,164,.24);
  border-radius: 24px;
  background:
    radial-gradient(circle at 50% 0%, rgba(34,211,238,.10), transparent 45%),
    rgba(255,255,255,.58);
}

.users-page .empty-state svg,
.users-page .empty-users svg,
.users-page .empty-departments svg {
  color: var(--ts-ocean-600);
  filter: drop-shadow(0 8px 14px rgba(8,126,164,.18));
  animation: tsEmptyFloat 3.5s ease-in-out infinite;
}

/* BUBBLES */
.users-page .ocean-bubble,
.users-page .bubble {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  border: 1px solid rgba(255,255,255,.42);
  background: rgba(103,232,249,.10);
  animation: tsBubbleRise 8s linear infinite;
}

/* KEYFRAMES */
@keyframes tsOrbFloat {
  0%,100% { transform: translate3d(0,0,0) scale(1); }
  50% { transform: translate3d(-24px,18px,0) scale(1.08); }
}

@keyframes tsWaveDrift {
  0%,100% { transform: translateX(-2%) rotate(-3deg); }
  50% { transform: translateX(4%) rotate(1deg); }
}

@keyframes tsRingPulse {
  0%,100% { transform: scale(.92); opacity: .55; }
  50% { transform: scale(1.06); opacity: .9; }
}

@keyframes tsGradientFlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 220% 50%; }
}

@keyframes tsIconFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes tsIconRipple {
  0% { transform: scale(.82); opacity: .65; }
  80%,100% { transform: scale(1.35); opacity: 0; }
}

@keyframes tsAvatarFloat {
  0%,100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-3px) rotate(1deg); }
}

@keyframes tsAvatarRing {
  0% { transform: scale(.92); opacity: .65; }
  100% { transform: scale(1.24); opacity: 0; }
}

@keyframes tsProgressFlow {
  0%,100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes tsShimmer {
  0% { transform: translateX(-100%); }
  55%,100% { transform: translateX(100%); }
}

@keyframes tsChartDraw {
  to { stroke-dashoffset: 0; }
}

@keyframes tsAreaReveal {
  from { opacity: 0; }
  to { opacity: .18; }
}

@keyframes tsOverlayIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes tsModalIn {
  from {
    opacity: 0;
    transform: translateY(24px) scale(.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes tsToastIn {
  from {
    opacity: 0;
    transform: translateY(18px) translateX(10px) scale(.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(0) scale(1);
  }
}

@keyframes tsEmptyFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes tsBubbleRise {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(.7);
  }
  15% { opacity: .55; }
  100% {
    opacity: 0;
    transform: translateY(-150px) scale(1.15);
  }
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .users-page .users-header,
  .users-page .page-header,
  .users-page .hero,
  .users-page .users-hero {
    border-radius: 24px;
  }

  .users-page .stat-card,
  .users-page .stats-card,
  .users-page .analytics-card,
  .users-page .chart-card,
  .users-page .department-card,
  .users-page .user-card,
  .users-page .table-card,
  .users-page .content-card {
    border-radius: 20px;
  }
}

@media (max-width: 760px) {
  .users-page {
    padding: 12px;
  }

  .users-page .users-header,
  .users-page .page-header,
  .users-page .hero,
  .users-page .users-hero {
    border-radius: 20px;
  }

  .users-page .stat-card,
  .users-page .stats-card,
  .users-page .analytics-card,
  .users-page .chart-card,
  .users-page .department-card,
  .users-page .user-card,
  .users-page .table-card,
  .users-page .content-card {
    border-radius: 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .users-page *,
  .users-page *::before,
  .users-page *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}

`}),e.jsxs("div",{className:"users-shell",children:[e.jsxs("section",{className:"users-hero",children:[e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"hero-title-wrap",children:[e.jsx("div",{className:"hero-icon",children:e.jsx(oe,{size:24})}),e.jsxs("div",{children:[e.jsx("h1",{className:"hero-title",children:"Users & Departments"}),e.jsx("p",{className:"hero-subtitle",children:"Manage your team members, roles and organizational departments."})]})]}),P&&e.jsxs("div",{className:"hero-actions",children:[e.jsxs("button",{type:"button",className:"hero-btn",onClick:()=>H(!0),children:[e.jsx(ke,{size:13})," Import CSV"]}),e.jsxs("button",{type:"button",className:"hero-btn",onClick:()=>Me(!0),children:[e.jsx(S,{size:13})," Add Department"]}),e.jsxs("button",{type:"button",className:"hero-btn primary",onClick:os,children:[e.jsx(Aa,{size:13})," Add User"]})]})]}),e.jsxs("div",{className:"hero-mini-stats",children:[e.jsxs("div",{className:"hero-mini-stat",children:[e.jsx(vs,{size:12})," Total Users",e.jsx("strong",{children:I})]}),e.jsxs("div",{className:"hero-mini-stat",children:[e.jsx(Ma,{size:12})," Admins",e.jsx("strong",{children:ja})]}),e.jsxs("div",{className:"hero-mini-stat",children:[e.jsx(B,{size:12})," Managers",e.jsx("strong",{children:ya})]}),e.jsxs("div",{className:"hero-mini-stat",children:[e.jsx(S,{size:12})," Departments",e.jsx("strong",{children:ye})]}),e.jsxs("div",{className:"hero-mini-stat",children:[e.jsx(ws,{size:12})," Active",e.jsx("strong",{children:va})]})]})]}),e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("span",{className:"stat-glow"}),e.jsx("div",{className:"stat-icon",children:e.jsx(oe,{size:15})}),e.jsx("div",{className:"stat-label",children:"Total Users"}),e.jsx("div",{className:"stat-value",children:I}),e.jsxs("div",{className:"stat-meta",children:[e.jsx(ks,{size:9})," ",va," active"]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("span",{className:"stat-glow"}),e.jsx("div",{className:"stat-icon",children:e.jsx(S,{size:15})}),e.jsx("div",{className:"stat-label",children:"Departments"}),e.jsx("div",{className:"stat-value",children:ye}),e.jsxs("div",{className:"stat-meta",children:[e.jsx(Es,{size:9})," View"]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("span",{className:"stat-glow"}),e.jsx("div",{className:"stat-icon",children:e.jsx(Ma,{size:15})}),e.jsx("div",{className:"stat-label",children:"Admins"}),e.jsx("div",{className:"stat-value",children:ja})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("span",{className:"stat-glow"}),e.jsx("div",{className:"stat-icon",children:e.jsx(B,{size:15})}),e.jsx("div",{className:"stat-label",children:"Managers"}),e.jsx("div",{className:"stat-value",children:ya})]})]}),e.jsxs("div",{className:"analytics-grid",children:[e.jsxs("div",{className:"chart-card",children:[e.jsxs("div",{className:"chart-card-header",children:[e.jsxs("div",{className:"chart-title-wrap",children:[e.jsx("div",{className:"chart-icon",children:e.jsx(Ns,{size:15})}),e.jsxs("div",{children:[e.jsx("h3",{className:"chart-title",children:"User Activity Trend"}),e.jsx("p",{className:"chart-subtitle",children:"Last 6 months overview"})]})]}),e.jsxs("div",{className:"chart-total",children:[e.jsx("strong",{children:I}),e.jsx("span",{children:"Total"})]})]}),e.jsx("div",{className:"chart-body",children:e.jsxs("svg",{className:"activity-chart",viewBox:`0 0 ${we} ${U}`,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"usersOceanArea",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"rgba(14, 165, 233, 0.28)"}),e.jsx("stop",{offset:"100%",stopColor:"rgba(14, 165, 233, 0.02)"})]})}),[.25,.5,.75].map(a=>e.jsx("line",{className:"chart-grid-line",x1:14,x2:we-14,y1:16+a*(U-40),y2:16+a*(U-40)},a)),e.jsx("path",{className:"chart-area",d:rs}),e.jsx("path",{className:"chart-line",d:Na}),Le.map((a,s)=>e.jsx("circle",{className:"chart-point",cx:a.x,cy:a.y,r:4.5},s)),Ys.map((a,s)=>e.jsx("text",{className:"chart-label",x:Le[s]?.x,y:U-4,textAnchor:"middle",children:a},a))]})})]}),e.jsxs("div",{className:"chart-card",children:[e.jsx("div",{className:"chart-card-header",children:e.jsxs("div",{className:"chart-title-wrap",children:[e.jsx("div",{className:"chart-icon",children:e.jsx(zs,{size:15})}),e.jsxs("div",{children:[e.jsx("h3",{className:"chart-title",children:"Department Distribution"}),e.jsx("p",{className:"chart-subtitle",children:"Users per department"})]})]})}),e.jsx("div",{className:"distribution-body",children:e.jsx("div",{className:"distribution-list",children:ve.length===0?e.jsx("div",{className:"empty-department",children:"No departments yet."}):ve.map(a=>e.jsxs("div",{className:"distribution-row",children:[e.jsxs("div",{className:"distribution-top",children:[e.jsx("strong",{children:a.name}),e.jsxs("span",{children:[a.count," users"]})]}),e.jsx("div",{className:"distribution-track",children:e.jsx("div",{className:"distribution-fill",style:{width:`${a.count/ss*100}%`}})})]},a.id))})})]})]}),e.jsxs("div",{className:"tabs-wrap",children:[e.jsxs("button",{type:"button",className:c==="users"?"tab-btn active":"tab-btn",onClick:()=>f("users"),children:[e.jsx(oe,{size:13})," Users",e.jsx("span",{className:"tab-count",children:I})]}),e.jsxs("button",{type:"button",className:c==="departments"?"tab-btn active":"tab-btn",onClick:()=>f("departments"),children:[e.jsx(S,{size:13})," Departments",e.jsx("span",{className:"tab-count",children:ye})]}),e.jsxs("button",{type:"button",className:c==="roles"?"tab-btn active":"tab-btn",onClick:()=>f("roles"),children:[e.jsx(B,{size:13})," Roles",e.jsx("span",{className:"tab-count",children:F.length})]})]}),c==="users"&&e.jsxs("div",{className:"filter-card",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(Cs,{size:14}),e.jsx("input",{className:"search-input",placeholder:"Search users by name, email or phone...",value:T,onChange:a=>Be(a.target.value)})]}),e.jsxs("select",{className:"filter-select",value:V,onChange:a=>ze(a.target.value),children:[e.jsx("option",{value:"All Departments",children:"All Departments"}),w.map(a=>e.jsx("option",{value:a.name,children:a.name},a.id))]}),e.jsxs("select",{className:"filter-select",value:D,onChange:a=>Ve(a.target.value),children:[e.jsx("option",{value:"All Roles",children:"All Roles"}),j&&e.jsx("option",{value:"Admin",children:"Admin"}),e.jsx("option",{value:"Manager",children:"Manager"}),e.jsx("option",{value:"User",children:"Team Member"}),F.map(a=>e.jsx("option",{value:`custom:${a._id}`,children:a.name},a._id))]}),e.jsxs("button",{type:"button",className:"clear-filter-btn",onClick:ns,children:[e.jsx(v,{size:12})," Clear"]})]}),e.jsxs("div",{className:"section-header",children:[e.jsxs("div",{className:"section-title",children:[e.jsx("span",{className:"section-title-icon",children:c==="users"?e.jsx(Ss,{size:13}):e.jsx(Ps,{size:13})}),c==="users"?"Team Members":c==="roles"?"Roles":"Departments"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("span",{className:"result-count",children:c==="users"?`${re.length} of ${I} users`:c==="roles"?`${F.length} organization roles`:`${ye} departments`}),c==="roles"&&Se&&e.jsxs("button",{type:"button",className:"add-dept-btn",onClick:()=>Xe(),children:[e.jsx(ie,{size:12})," Add Role"]}),c==="departments"&&P&&e.jsxs("button",{type:"button",className:"add-dept-btn",onClick:()=>Me(!0),children:[e.jsx(ie,{size:12})," Add Department"]})]})]}),c==="users"&&z&&pe.length>0&&e.jsxs("div",{style:{margin:"0 0 16px",padding:14,borderRadius:16,background:"#FFFBF0",border:"1px solid #F3DDA9"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontWeight:800,fontSize:13,color:"#8a5a00",marginBottom:10},children:[e.jsx(Ia,{size:14}),pe.length," password reset request",pe.length===1?"":"s"]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:pe.map(a=>{const s=h.find(t=>String(t.id)===String(a.user._id));return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8,padding:"9px 12px",borderRadius:12,background:"#fff",border:"1px solid #F1E6CC",fontSize:12},children:[e.jsxs("span",{children:[e.jsx("strong",{children:a.user.name})," (",a.user.email,") ·"," ",de(a.user.role)," · requested"," ",new Date(a.requestedAt).toLocaleString()]}),e.jsxs("span",{style:{display:"flex",gap:6},children:[e.jsx("button",{type:"button",className:"btn-primary",disabled:!s,title:s?void 0:"Account not in your list",onClick:()=>s&&za(s),style:{padding:"6px 12px",fontSize:11},children:"Set new password"}),e.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>Xa(a),style:{padding:"6px 12px",fontSize:11},children:"Dismiss"})]})]},a._id)})})]}),c==="users"&&e.jsxs("div",{className:"users-grid",children:[W&&Fe.length>0&&e.jsx("div",{style:{gridColumn:"1 / -1"},children:e.jsx(js,{...je,label:"users",onDelete:as})}),re.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(Ds,{size:22})}),e.jsx("h3",{children:"No users found"}),e.jsx("p",{children:"Try adjusting your search or filters, or add a new team member."})]}):ga.items.map((a,s)=>e.jsxs("div",{className:"user-card",style:{animationDelay:`${Math.min(s*.05,.4)}s`,...je.isSelected(a.id)?{outline:"2px solid #0e7490",outlineOffset:2}:{}},children:[e.jsxs("div",{className:"user-card-top",children:[e.jsx("div",{className:"user-avatar",children:a.avatar}),e.jsxs("div",{className:"user-card-actions",children:[Fe.includes(a.id)&&e.jsx(ys,{checked:je.isSelected(a.id),onChange:()=>je.toggle(a.id),label:`Select ${a.name}`,style:{alignSelf:"center",marginRight:2}}),z&&e.jsx("button",{type:"button",className:"user-action-btn edit",title:"Edit user",onClick:()=>za(a),children:e.jsx(le,{size:13})}),W&&e.jsx("button",{type:"button",className:"user-action-btn delete",title:"Delete user",onClick:()=>is(a),children:e.jsx(E,{size:13})})]})]}),e.jsx("h3",{className:"user-name",children:a.name}),e.jsxs("span",{className:"user-role",children:[a.customRoleName||de(a.role),j&&a.organization?` · ${a.organization}`:""]}),e.jsxs("div",{className:"user-details",children:[e.jsxs("div",{className:"user-detail",children:[e.jsx(Ua,{size:11}),a.email||"No email"]}),e.jsxs("div",{className:"user-detail",children:[e.jsx(Rs,{size:11}),a.phone||"No phone"]}),e.jsxs("div",{className:"user-detail",children:[e.jsx(Ts,{size:11}),a.department||"No department"]})]}),!a.emailVerified&&e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,margin:"8px 0 4px",padding:"6px 9px",borderRadius:9,background:"#FFF7E6",border:"1px solid #F3DDA9",color:"#9a6a0a",fontSize:10,fontWeight:700},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:5},children:[e.jsx(Ua,{size:11})," Email not verified"]}),z&&e.jsx("button",{type:"button",onClick:()=>qa(a),disabled:He===a.id,style:{border:"none",background:"transparent",color:"#0b8f87",fontSize:10,fontWeight:800,cursor:"pointer"},children:He===a.id?"Sending…":"Resend link"})]}),e.jsxs("div",{className:"user-card-footer",children:[e.jsxs("span",{className:"status-badge",children:[e.jsx("span",{className:"status-dot"}),a.status]}),e.jsx("span",{className:"role-badge",children:a.customRoleName||de(a.role)})]})]},a.id||s)),e.jsx("div",{style:{gridColumn:"1 / -1"},children:e.jsx(Ra,{...ga,label:"users"})})]}),c==="roles"&&e.jsx("div",{className:"department-grid",children:F.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(B,{size:22})}),e.jsx("h3",{children:"No custom roles yet"}),e.jsx("p",{children:"Add roles such as “Consultant” or “Team Lead”. Each role uses the Manager or Team Member access level, and its permissions can be fine-tuned on the Roles & Permissions page."})]}):F.map(a=>e.jsxs("div",{className:"department-card",children:[e.jsxs("div",{className:"department-header",children:[e.jsx("div",{className:"dept-icon-wrap",children:e.jsx(B,{size:17})}),e.jsxs("div",{className:"dept-info",children:[e.jsx("h3",{className:"dept-name",children:a.name}),e.jsx("p",{className:"dept-desc",children:a.description||`${a.baseRoleLabel} access level`})]})]}),e.jsxs("div",{className:"dept-members-pill",children:[e.jsx(oe,{size:11}),a.users," ",a.users===1?"Member":"Members"]}),e.jsxs("div",{className:"dept-card-footer",children:[e.jsxs("span",{className:"dept-status-badge",children:[e.jsx("span",{className:"status-dot"}),a.baseRoleLabel," access",a.hasOwnPermissions?" · own permissions":""]}),Se&&e.jsxs("span",{style:{display:"flex",gap:6},children:[e.jsxs("button",{type:"button",className:"dept-delete-btn",style:{color:"#0e7490"},onClick:()=>Xe(a),children:[e.jsx(le,{size:11})," Edit"]}),e.jsxs("button",{type:"button",className:"dept-delete-btn",onClick:()=>Wa(a),children:[e.jsx(E,{size:11})," Delete"]})]})]})]},a._id))}),c==="departments"&&e.jsxs("div",{className:"department-grid",children:[w.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(S,{size:22})}),e.jsx("h3",{children:"No departments yet"}),e.jsx("p",{children:"Create your first department to start organizing users."})]}):wa.items.map((a,s)=>e.jsxs("div",{className:"department-card",children:[e.jsxs("div",{className:"department-header",children:[e.jsx("div",{className:"dept-icon-wrap",children:e.jsx(S,{size:17})}),e.jsxs("div",{className:"dept-info",children:[e.jsx("h3",{className:"dept-name",children:a.name}),e.jsx("p",{className:"dept-desc",children:a.description})]})]}),e.jsxs("div",{className:"dept-members-pill",children:[e.jsx(oe,{size:11}),a.count," ",a.count===1?"Member":"Members"]}),a.refPrefix&&e.jsx("div",{className:"dept-ref",children:Qa===a.id?e.jsxs(e.Fragment,{children:[e.jsx("input",{autoFocus:!0,value:sa,maxLength:6,onChange:t=>ta(t.target.value.toUpperCase().replace(/[^A-Z]/g,"")),onKeyDown:t=>{t.key==="Enter"&&ra(a),t.key==="Escape"&&ue(null)},"aria-label":`Reference code for ${a.name}`}),e.jsx("button",{type:"button",onClick:()=>ra(a),children:"Save"}),e.jsx("button",{type:"button",onClick:()=>ue(null),"aria-label":"Cancel",children:e.jsx(v,{size:11})})]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{title:"Task reference code",children:["Ref code ",e.jsx("b",{children:a.refPrefix})," · next ",a.nextReferenceId]}),z&&e.jsx("button",{type:"button",onClick:()=>{ue(a.id),ta(a.refPrefix)},"aria-label":`Change reference code of ${a.name}`,title:"Change reference code",children:e.jsx(le,{size:11})})]})}),e.jsxs("div",{className:"dept-card-footer",children:[e.jsxs("span",{className:"dept-status-badge",children:[e.jsx("span",{className:"status-dot"}),a.status||"Active"]}),e.jsxs("button",{type:"button",className:"dept-delete-btn",style:{color:"#0e7490",borderColor:"#bfe6ee",background:"#f0fafc",marginLeft:"auto",marginRight:6},onClick:()=>Z(a),title:`View members of ${a.name}`,children:[e.jsx(As,{size:11})," View members"]}),W&&e.jsxs("button",{type:"button",className:"dept-delete-btn",onClick:()=>ls(a),children:[e.jsx(E,{size:11})," Delete"]})]})]},a.id||s)),e.jsx("div",{style:{gridColumn:"1 / -1"},children:e.jsx(Ra,{...wa,label:"departments"})})]}),Ae&&e.jsx("div",{className:"modal-overlay",onClick:()=>$(!1),children:e.jsxs("div",{className:"modal-card",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("div",{className:"modal-icon",children:m?e.jsx(le,{size:18}):e.jsx(Aa,{size:18})}),e.jsxs("div",{children:[e.jsx("h3",{children:m?"Edit User":"Add New User"}),e.jsx("p",{children:m?"Update the user's details below.":"Fill in the details to create a new user."})]}),e.jsx("button",{type:"button",className:"modal-close",onClick:()=>$(!1),children:e.jsx(v,{size:14})})]}),e.jsxs("form",{className:"modal-form",onSubmit:ds,children:[e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Full Name *"}),e.jsx("input",{value:r.name,onChange:a=>y({...r,name:a.target.value}),placeholder:"e.g. John Doe"})]}),e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Email *"}),e.jsx("input",{type:"email",value:r.email,onChange:a=>y({...r,email:a.target.value}),placeholder:"john@company.com"})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Phone *"}),e.jsx("input",{value:r.phone,onChange:a=>y({...r,phone:a.target.value}),placeholder:"9876543210"})]}),e.jsxs("label",{className:"form-field",children:[e.jsxs("span",{children:[e.jsx(Ia,{size:10})," ",m?"Set new password":"Password *"]}),e.jsx("input",{type:"password",autoComplete:"new-password",value:r.password,onChange:a=>y({...r,password:a.target.value}),placeholder:m?"Leave empty to keep the current password":"Min 6 characters"}),e.jsx("small",{style:{fontSize:10,color:"#6b8a94",marginTop:4},children:m?"The user gets an email link to view the new password once (30 seconds).":"The user verifies their email, then sees this password once for 30 seconds."})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Department *"}),e.jsxs("select",{value:ua?"__new__":r.department,onChange:a=>{if(a.target.value==="__new__"){O(!0);return}O(!1),y({...r,department:a.target.value})},children:[e.jsx("option",{value:"",children:"Select department"}),w.map(a=>e.jsx("option",{value:a.name,children:a.name},a.id)),P&&e.jsx("option",{value:"__new__",children:"+ Create new department…"})]}),ua&&e.jsxs("div",{className:"inline-dept",children:[e.jsx("input",{autoFocus:!0,value:ma,onChange:a=>Q(a.target.value),onKeyDown:a=>{a.key==="Enter"&&(a.preventDefault(),Ca())},placeholder:"New department name","aria-label":"New department name"}),e.jsx("button",{type:"button",className:"btn-primary",onClick:Ca,disabled:xa,children:xa?"…":"Create"}),e.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>{O(!1),Q("")},children:e.jsx(v,{size:12})})]})]}),e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Role *"}),e.jsxs("select",{value:r.role,disabled:!!m&&(!Se||m.role==="Admin"),onChange:a=>y({...r,role:a.target.value}),children:[!ce.some(a=>a.value===r.role)&&!r.role.startsWith("custom:")&&e.jsx("option",{value:r.role,children:de(r.role)}),ce.filter(a=>!m||a.value==="Admin"==(m.role==="Admin")).map(a=>e.jsx("option",{value:a.value,children:a.label},a.value)),m?.role!=="Admin"&&qe(m?m.adminId:r.adminId).length>0&&e.jsx("optgroup",{label:"Organization roles",children:qe(m?m.adminId:r.adminId).map(a=>e.jsxs("option",{value:`custom:${a._id}`,children:[a.name," (",a.baseRoleLabel," access)"]},a._id))})]})]}),j&&!m&&r.role!=="Admin"&&e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Organization (Admin) *"}),e.jsxs("select",{value:r.adminId,onChange:a=>y({...r,adminId:a.target.value}),children:[e.jsx("option",{value:"",children:"Select organization"}),q.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>$(!1),children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-primary",children:m?"Save Changes":"Create User"})]})]})]})}),Ka&&C&&e.jsx("div",{className:"modal-overlay",onClick:()=>me(!1),children:e.jsxs("div",{className:"modal-card delete-modal",onClick:a=>a.stopPropagation(),children:[e.jsx("div",{className:"delete-icon-wrap",children:e.jsx(E,{size:24})}),e.jsx("h3",{className:"delete-title",children:"Delete User"}),e.jsxs("p",{className:"delete-message",children:["Are you sure you want to permanently delete"," ",e.jsxs("strong",{children:['"',C.name,'"']}),"? This action cannot be undone."]}),e.jsxs("div",{className:"delete-user-preview",children:[e.jsx("div",{className:"preview-avatar",children:C.avatar}),e.jsxs("div",{children:[e.jsx("strong",{children:C.name}),e.jsx("span",{children:C.email})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>me(!1),children:"Cancel"}),e.jsxs("button",{type:"button",className:"btn-danger",onClick:ms,children:[e.jsx(E,{size:13})," Yes, Delete User"]})]})]})}),K&&(()=>{const a=h.filter(s=>s.department===K.name);return e.jsx("div",{className:"modal-overlay",onClick:()=>Z(null),children:e.jsxs("div",{className:"modal-card",role:"dialog","aria-modal":"true","aria-label":`Members of ${K.name}`,onClick:s=>s.stopPropagation(),style:{maxWidth:520},children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("div",{className:"modal-icon",children:e.jsx(S,{size:18})}),e.jsxs("div",{children:[e.jsx("h3",{children:K.name}),e.jsxs("p",{children:[a.length," ",a.length===1?"member":"members"]})]}),e.jsx("button",{type:"button",className:"modal-close",onClick:()=>Z(null),"aria-label":"Close",children:e.jsx(v,{size:16})})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,maxHeight:"55vh",overflowY:"auto",padding:"4px 2px"},children:a.length===0?e.jsx("p",{style:{margin:0,fontSize:13,color:"#607e93",textAlign:"center",padding:"18px 0"},children:"No users are in this department yet."}):a.map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",borderRadius:11,border:"1px solid #dbeef4",background:"#fff"},children:[e.jsx("div",{className:"preview-avatar",style:{flexShrink:0},children:s.avatar}),e.jsxs("div",{style:{minWidth:0,flex:1},children:[e.jsx("strong",{style:{display:"block",fontSize:13,color:"#10324a"},children:s.name}),e.jsx("span",{style:{display:"block",fontSize:11.5,color:"#607e93",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.email||"No email"})]}),e.jsx("span",{className:"role-badge",children:s.customRoleName||de(s.role)}),e.jsxs("span",{className:"status-badge",children:[e.jsx("span",{className:"status-dot"}),s.status]})]},s.id))}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>{ze(K.name),f("users"),Z(null)},children:"Open in Users list"}),e.jsx("button",{type:"button",className:"btn-primary",onClick:()=>Z(null),children:"Close"})]})]})})})(),Za&&A&&e.jsx("div",{className:"modal-overlay",onClick:()=>xe(!1),children:e.jsxs("div",{className:"modal-card delete-modal",onClick:a=>a.stopPropagation(),children:[e.jsx("div",{className:"delete-icon-wrap",children:e.jsx(E,{size:24})}),e.jsx("h3",{className:"delete-title",children:"Delete Department"}),e.jsxs("p",{className:"delete-message",children:["Are you sure you want to permanently delete"," ",e.jsxs("strong",{children:['"',A.name,'"']}),"?",ka>0&&` ${ka} user(s) currently belong to this department.`," ","This action cannot be undone."]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>xe(!1),children:"Cancel"}),e.jsxs("button",{type:"button",className:"btn-danger",onClick:ps,children:[e.jsx(E,{size:13})," Yes, Delete Department"]})]})]})}),_a&&e.jsx("div",{className:"modal-overlay",onClick:()=>!De&&X(!1),children:e.jsxs("div",{className:"modal-card",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("div",{className:"modal-icon",children:e.jsx(B,{size:18})}),e.jsxs("div",{children:[e.jsx("h3",{children:R?"Edit Role":"Add New Role"}),e.jsx("p",{children:"Roles appear in the role list when you add or edit users."})]}),e.jsx("button",{type:"button",className:"modal-close",onClick:()=>X(!1),children:e.jsx(v,{size:14})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Va,children:[j&&!R&&e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Organization (Admin) *"}),e.jsx("select",{value:g.adminId,onChange:a=>G({...g,adminId:a.target.value}),children:q.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))})]}),e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Role Name *"}),e.jsx("input",{value:g.name,onChange:a=>G({...g,name:a.target.value}),placeholder:"e.g. Consultant",maxLength:60})]}),e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Description"}),e.jsx("input",{value:g.description,onChange:a=>G({...g,description:a.target.value}),placeholder:"Short description (optional)",maxLength:300})]}),e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Access level *"}),e.jsxs("select",{value:g.baseRole,onChange:a=>G({...g,baseRole:a.target.value}),children:[e.jsx("option",{value:"User",children:"Team Member — works on own tasks"}),e.jsx("option",{value:"Manager",children:"Manager — manages the team's tasks"})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>X(!1),children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-primary",disabled:De,children:[R?e.jsx(le,{size:13}):e.jsx(ie,{size:13})," ",De?"Saving…":R?"Save Role":"Create Role"]})]})]})]})}),Ga&&e.jsx("div",{className:"modal-overlay",onClick:ge,children:e.jsxs("div",{className:"modal-card dept-modal",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("div",{className:"modal-icon",children:e.jsx(S,{size:18})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Add New Department"}),e.jsx("p",{children:"Create a department and add its people — choose existing users or create new ones."})]}),e.jsx("button",{type:"button",className:"modal-close",onClick:ge,children:e.jsx(v,{size:14})})]}),e.jsxs("form",{className:"modal-form",onSubmit:cs,children:[e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Department Name *"}),e.jsx("input",{value:b.name,onChange:a=>fe({...b,name:a.target.value,...ea?{}:{refPrefix:Ja(a.target.value)}}),placeholder:"e.g. Finance"})]}),e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Task reference code"}),e.jsx("input",{value:b.refPrefix,maxLength:6,onChange:a=>{aa(!0),fe({...b,refPrefix:a.target.value.toUpperCase().replace(/[^A-Z]/g,"")})},placeholder:"e.g. FF"}),e.jsx("small",{className:"dept-hint",children:b.refPrefix?`Tasks in this department get IDs ${b.refPrefix}1, ${b.refPrefix}2, ${b.refPrefix}3…`:"Letters only. Leave empty to create one from the name."})]}),e.jsxs("label",{className:"form-field",children:[e.jsx("span",{children:"Description"}),e.jsx("input",{value:b.description,onChange:a=>fe({...b,description:a.target.value}),placeholder:"Short description (optional)"})]}),!j&&(z||P)&&e.jsxs("div",{className:"dept-users",children:[e.jsxs("div",{className:"dept-users-head",children:[e.jsxs("span",{children:["Add users ",e.jsx("em",{children:"(optional)"})]}),e.jsxs("div",{className:"dept-mode",role:"tablist","aria-label":"How to add users",children:[z&&e.jsx("button",{type:"button",role:"tab","aria-selected":L==="existing",className:L==="existing"?"on":"",onClick:()=>Ee("existing"),children:"Choose existing"}),P&&e.jsx("button",{type:"button",role:"tab","aria-selected":L==="new",className:L==="new"?"on":"",onClick:()=>{Ee("new"),he.length||J([{...na}])},children:"Create new"})]})]}),L==="existing"&&z&&(()=>{const a=h.filter(o=>!["Admin","SuperAdmin"].includes(o.role)),s=ia.trim().toLowerCase(),t=a.filter(o=>!s||`${o.name} ${o.email} ${o.department}`.toLowerCase().includes(s)),l=o=>oa(d=>d.includes(o)?d.filter(u=>u!==o):[...d,o]);return e.jsxs("div",{className:"dept-picker",children:[e.jsxs("button",{type:"button",className:"dept-picker-toggle",onClick:()=>ca(o=>!o),"aria-expanded":da,children:[M.length?`${M.length} user${M.length===1?"":"s"} selected`:"Select users",e.jsx(Ms,{size:14})]}),da&&e.jsxs("div",{className:"dept-picker-panel",children:[e.jsx("input",{value:ia,onChange:o=>la(o.target.value),placeholder:"Search name, email or department","aria-label":"Search users"}),e.jsxs("div",{className:"dept-picker-list",children:[t.length===0&&e.jsx("div",{className:"dept-empty",children:"No users found."}),t.map(o=>e.jsxs("label",{className:"dept-option",children:[e.jsx("input",{type:"checkbox",checked:M.includes(o.id),onChange:()=>l(o.id)}),e.jsxs("span",{className:"dept-option-text",children:[e.jsx("strong",{children:o.name}),e.jsxs("small",{children:[o.email,o.department?` · now in ${o.department}`:""]})]})]},o.id))]})]}),M.length>0&&e.jsx("div",{className:"dept-chips",children:M.map(o=>{const d=h.find(u=>u.id===o);return e.jsxs("span",{className:"dept-chip",children:[d?.name||"User",e.jsx("button",{type:"button",onClick:()=>l(o),"aria-label":`Remove ${d?.name||"user"}`,children:e.jsx(v,{size:10})})]},o)})}),e.jsx("small",{className:"dept-hint",children:"Selected users move from their current department to this one."})]})})(),L==="new"&&P&&e.jsxs("div",{className:"dept-new",children:[he.map((a,s)=>{const t=l=>J(o=>o.map((d,u)=>u===s?{...d,...l}:d));return e.jsxs("div",{className:"dept-new-card",children:[e.jsxs("div",{className:"dept-new-top",children:[e.jsxs("strong",{children:["New user ",he.length>1?s+1:""]}),e.jsx("button",{type:"button",onClick:()=>J(l=>l.filter((o,d)=>d!==s)),"aria-label":"Remove this new user",children:e.jsx(v,{size:12})})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsx("input",{value:a.name,onChange:l=>t({name:l.target.value}),placeholder:"Full name *","aria-label":"Full name"}),e.jsx("input",{type:"email",value:a.email,onChange:l=>t({email:l.target.value}),placeholder:"Email *","aria-label":"Email"}),e.jsx("input",{value:a.phone,onChange:l=>t({phone:l.target.value}),placeholder:"Phone","aria-label":"Phone"}),e.jsx("input",{type:"password",value:a.password,onChange:l=>t({password:l.target.value}),placeholder:"Password * (min 6)","aria-label":"Password",autoComplete:"new-password"})]}),e.jsxs("select",{value:a.role,onChange:l=>t({role:l.target.value}),"aria-label":"Role",children:[e.jsx("option",{value:"User",children:"Team Member"}),N?.role!=="Manager"&&e.jsx("option",{value:"Manager",children:"Manager"})]})]},s)}),e.jsxs("button",{type:"button",className:"btn-secondary dept-add-more",onClick:()=>J(a=>[...a,{...na}]),children:[e.jsx(ie,{size:12})," Add another user"]}),e.jsx("small",{className:"dept-hint",children:"Each new user gets an email to verify their account, like Add User."})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",className:"btn-secondary",onClick:ge,children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-primary",disabled:Te,children:[e.jsx(ie,{size:13})," ",Te?"Creating…":"Create Department"]})]})]})]})}),Ha&&e.jsx("div",{className:"modal-overlay",onClick:()=>H(!1),children:e.jsxs("div",{className:"modal-card",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("div",{className:"modal-icon",children:e.jsx(Ye,{size:18})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Import Users from CSV"}),e.jsx("p",{children:"Upload a CSV file to add multiple users at once."})]}),e.jsx("button",{type:"button",className:"modal-close",onClick:()=>H(!1),children:e.jsx(v,{size:14})})]}),e.jsxs("div",{className:"bulk-body",children:[e.jsxs("div",{className:"bulk-steps",children:[e.jsxs("div",{className:"bulk-step",children:[e.jsx(Sa,{size:14})," Step 1: Download the CSV template."]}),e.jsxs("div",{className:"bulk-step",children:[e.jsx(Ye,{size:14})," Step 2: Fill in user details in the template."]}),e.jsxs("div",{className:"bulk-step",children:[e.jsx(ke,{size:14})," Step 3: Upload the completed CSV file."]})]}),e.jsxs("button",{type:"button",className:"bulk-template-btn",onClick:xs,children:[e.jsx(Sa,{size:13})," Download CSV Template"]}),e.jsxs("label",{className:"bulk-upload",children:[e.jsx("input",{ref:ee,type:"file",accept:".csv",hidden:!0,onChange:fs}),e.jsx("div",{className:"bulk-upload-icon",children:e.jsx(ke,{size:18})}),e.jsx("h4",{children:"Click to select a CSV file"}),e.jsx("p",{children:"Only .csv files are supported"})]}),ae&&e.jsxs("div",{className:"file-chip",children:[e.jsx(Ye,{size:14}),ae.name,e.jsx("button",{type:"button",onClick:()=>{Pe(null),ee.current&&(ee.current.value="")},children:e.jsx(v,{size:13})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>H(!1),children:"Cancel"}),e.jsxs("button",{type:"button",className:"btn-primary",onClick:hs,disabled:!ae,children:[e.jsx(ke,{size:13})," Import Users"]})]})]})]})}),be&&e.jsxs("div",{className:`toast ${be.type}`,children:[be.type==="success"?e.jsx(Is,{size:15}):e.jsx(Us,{size:15}),be.message]})]})]})};export{bt as default};
