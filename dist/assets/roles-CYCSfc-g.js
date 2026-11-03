import{c as _,n as Pe,r,A as f,j as e}from"./index-DdKrgUlZ.js";import{u as De,P as Oe}from"./Pagination-UbNjK2ed.js";import{L as _e}from"./life-buoy-BOHDUXo6.js";import{M as Ue}from"./message-circle-DZbdconb.js";import{C as le}from"./clipboard-check-9ka9EUCF.js";import{C as Te}from"./chart-column-CUheTk5P.js";import{C as Ge}from"./calendar-days-YATm_8B9.js";import{U as O}from"./users-C5Aqy3aj.js";import{S as D}from"./shield-check-CEPKVIb-.js";import{R as de}from"./refresh-cw-BTp_wSg-.js";import{T as ce}from"./triangle-alert-470AK52j.js";import{L as G}from"./layers-Ctd7EbjE.js";import{C as pe}from"./circle-check-Bb8TVzmm.js";import{S as Be}from"./search-BYLJVZob.js";import{L as me}from"./loader-circle-C6iMG4x7.js";import{E as Ye}from"./eye-off-HvWWQrwG.js";import{L as qe}from"./lock-keyhole-Bx_x1vA_.js";import{P as Fe}from"./pencil-ELsrY2nb.js";import{C as He}from"./chevron-up-DEP8khRV.js";import{C as Ve}from"./chevron-down-CO4vTuki.js";import{S as Ke}from"./save-CzRYAFCR.js";import"./chevron-right-nPP00h3Y.js";const fe={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};fe.node;const We=_(fe);const be={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]};be.node;const Xe=_(be);const ve={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]};ve.node;const Qe=_(ve);const je={name:"user-cog",size:24,node:[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m14.305 16.53.923-.382",key:"1itpsq"}],["path",{d:"m15.228 13.852-.923-.383",key:"eplpkm"}],["path",{d:"m16.852 12.228-.383-.923",key:"13v3q0"}],["path",{d:"m16.852 17.772-.383.924",key:"1i8mnm"}],["path",{d:"m19.148 12.228.383-.923",key:"1q8j1v"}],["path",{d:"m19.53 18.696-.382-.924",key:"vk1qj3"}],["path",{d:"m20.772 13.852.924-.383",key:"n880s0"}],["path",{d:"m20.772 16.148.924.383",key:"1g6xey"}],["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};je.node;const xe=_(je),ge={tasks:{icon:le,description:"Manage tasks and assignments"},taskbank:{icon:We,description:"Manage reusable task templates"},users:{icon:O,description:"Manage organization users and roles"},calendar:{icon:Ge,description:"Calendar, schedules and CSV import"},reports:{icon:Te,description:"View and export organization reports"},communication:{icon:le,description:"Minutes of meeting, recordings, chat and shared files"},chat:{icon:Ue,description:"Messages, groups and attachments"},support:{icon:_e,description:"FAQs and support tickets"},settings:{icon:Xe,description:"Personal profile and preferences"}},he={view:"View",create:"Create",edit:"Edit",delete:"Delete",assign:"Assign",import:"Import",export:"Export"},Je={Manager:"Team management within the organization",User:"Basic task access for team members"},R=(y,o={})=>Object.fromEntries(y.flatMap(l=>l.permissions.map(g=>[`${l.id}.${g}`,!!o?.[l.id]?.includes(g)]))),Ze=(y,o)=>Object.fromEntries(y.map(l=>[l.id,l.permissions.filter(g=>o[`${l.id}.${g}`])])),ue=({enabled:y,onChange:o,small:l=!1,disabled:g=!1})=>e.jsx("button",{type:"button",onClick:g?void 0:o,disabled:g,className:`ocean-toggle ${y?"active":""} ${l?"small":""}`,style:g?{opacity:.4,cursor:"not-allowed"}:void 0,"aria-label":y?"Disable permission":"Enable permission",children:e.jsx("span",{})}),ws=()=>{const o=Pe()?.role==="SuperAdmin",[l,g]=r.useState([]),[ye,we]=r.useState({}),[ke,Ne]=r.useState(he),[B,Y]=r.useState({}),[w,ze]=r.useState([]),[A,Ce]=r.useState([]),[q,Se]=r.useState("roles"),[k,U]=r.useState(null),[F,H]=r.useState(!0),[V,K]=r.useState(""),[b,E]=r.useState(!1),[W,h]=r.useState(""),[I,X]=r.useState(""),[C,Q]=r.useState("All roles"),[M,v]=r.useState({}),[S,N]=r.useState(!1),[J,Z]=r.useState({}),[ee,T]=r.useState(""),t=w.find(s=>s.id===k)||A.find(s=>s.id===k),u=!!t?.userId,m=!o&&q==="people",se=m?A:w,$=r.useCallback(async s=>{H(!0),K("");try{const c=(await f.get("/api/permissions/catalog")).data?.data||{},n=(c.modules||[]).map(d=>({id:d.id,title:d.label,icon:ge[d.id]?.icon||D,description:ge[d.id]?.description||"",permissions:d.actions}));g(n),we(c.defaults||{}),c.actionLabels&&Ne({...he,...c.actionLabels}),Z(d=>Object.keys(d).length?d:Object.fromEntries(n.map(z=>[z.id,!0])));let x=[],j=[];if(o){const d=await f.get("/api/permissions/admins"),z=Object.fromEntries(n.map(a=>[a.id,a.permissions]));Y(z),x=(d.data?.data||[]).map(a=>({id:a._id,key:a._id,name:a.name,description:a.companyName?`${a.companyName} · ${a.email}`:a.email,type:a.isRestricted?"Restricted":"Full access",customized:a.isRestricted,status:a.status,permissions:a.permissions,permissionCount:a.permissionCount,users:a.members}))}else{const d=await f.get("/api/permissions/roles");Y(d.data?.data?.grantable||{}),x=(d.data?.data?.roles||[]).map(a=>({id:a.role,key:a.role,customRoleId:a.customRoleId||null,baseRole:a.baseRole||a.role,name:a.label,description:a.customRoleId?a.description||`Organization role · ${a.baseRole==="Manager"?"Manager":"Team Member"} access level`:Je[a.role]||"",type:a.customRoleId?a.isCustomized?"Own permissions":"Organization role":a.isCustomized?"Customized":"Default",customized:a.isCustomized,status:`${a.activeUsers} active`,permissions:a.permissions,permissionCount:a.permissionCount,users:a.users})),j=((await f.get("/api/permissions/users")).data?.data?.users||[]).map(a=>({id:`user:${a._id}`,key:`user:${a._id}`,userId:a._id,name:a.name,email:a.email,roleLabel:a.roleLabel,description:[a.roleLabel,a.department,a.email].filter(Boolean).join(" · "),type:a.hasOverride?"Individual access":"Role access",customized:a.hasOverride,status:a.status,permissions:a.permissions,rolePermissions:a.rolePermissions,permissionCount:a.permissionCount,users:1}))}ze(x),Ce(j);const p=s&&[...x,...j].find(d=>d.id===s)||(s?.startsWith?.("user:")?j[0]:null)||x[0]||null;U(p?.id||null),v(R(n,p?.permissions)),N(!1)}catch(i){console.error("Role permissions load error:",i),K(i.response?.data?.message||"Failed to load roles and permissions.")}finally{H(!1)}},[o]);r.useEffect(()=>{$()},[$]);const ae=r.useMemo(()=>{const s=I.toLowerCase();return se.filter(i=>{const c=i.name.toLowerCase().includes(s)||i.description.toLowerCase().includes(s),n=C==="All roles"||C==="Customized"&&i.customized||C==="Default"&&!i.customized;return c&&n})},[se,I,C]),ie=De(ae,{id:"roles",resetKey:`${I}|${C}`}),L=(s,i)=>!!B?.[s]?.includes(i),te=Object.values(M).filter(Boolean).length,oe=l.reduce((s,i)=>s+i.permissions.length,0),P=s=>{T(s),setTimeout(()=>T(""),2500)},Re=(s,i)=>{if(!L(s,i))return;const c=`${s}.${i}`;v(n=>({...n,[c]:!n[c]})),N(!0)},Me=s=>{const i=s.permissions.filter(n=>L(s.id,n)).map(n=>`${s.id}.${n}`),c=i.some(n=>!M[n]);v(n=>{const x={...n};return i.forEach(j=>{x[j]=c}),x}),N(!0)},$e=()=>{if(!t)return;if(u){v(R(l,t.rolePermissions)),N(!0),P(`${t.roleLabel} permissions loaded — save to apply`);return}const s=o?B:ye[t.baseRole||t.id]||{},i=R(l,s);Object.keys(i).forEach(c=>{const[n,x]=c.split(".");L(n,x)||(i[c]=!1)}),v(i),N(!0),P("Default permissions loaded — save to apply")},Le=async()=>{if(!(!t||b)){E(!0),h("");try{const s=Ze(l,M);o?await f.put(`/api/permissions/admins/${t.id}`,{permissions:s}):u?await f.put(`/api/permissions/users/${t.userId}`,{permissions:s}):t.customRoleId?await f.put(`/api/permissions/custom-roles/${t.customRoleId}`,{permissions:s}):await f.put(`/api/permissions/roles/${t.id}`,{permissions:s}),await $(t.id),P("Permissions saved successfully")}catch(s){h(s.response?.data?.message||"Failed to save permissions.")}finally{E(!1)}}},Ae=async()=>{if(!(!u||b)){E(!0),h("");try{await f.put(`/api/permissions/users/${t.userId}`,{reset:!0}),await $(t.id),P(`${t.name} now follows the ${t.roleLabel} role`)}catch(s){h(s.response?.data?.message||"Failed to reset individual access.")}finally{E(!1)}}},re=s=>{if(s===q)return;if(S){h("You have unsaved changes — save or discard them first.");return}const i=(s==="people"?A:w)[0]||null;Se(s),X(""),Q("All roles"),U(i?.id||null),v(R(l,i?.permissions)),h("")},ne=s=>{if(S&&s.id!==k){h("You have unsaved changes — save them or reload before switching roles.");return}U(s.id),v(R(l,s.permissions)),N(!1),h(""),T("")},Ee=()=>{v(R(l,t?.permissions)),N(!1),h("")},Ie=s=>{Z(i=>({...i,[s]:!i[s]}))};return e.jsxs("div",{className:"roles-page",children:[e.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .roles-page {
          min-height: 100%;
          width: 100%;
          padding: 18px;
          background:
            radial-gradient(
              circle at 5% 0%,
              rgba(20, 184, 166, 0.09),
              transparent 28%
            ),
            radial-gradient(
              circle at 100% 15%,
              rgba(14, 165, 233, 0.08),
              transparent 30%
            ),
            #f5fafb;
          color: #0b2430;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .roles-shell {
          max-width: 1600px;
          margin: 0 auto;
        }

        .ocean-hero {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          padding: 26px;
          margin-bottom: 18px;
          color: white;
          background:
            linear-gradient(
              135deg,
              #063b46 0%,
              #075e67 42%,
              #0b8f87 75%,
              #10a79a 100%
            );
          box-shadow:
            0 18px 45px rgba(5, 77, 87, 0.18),
            inset 0 1px 0 rgba(255,255,255,.14);
        }

        .ocean-hero::before {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          right: -90px;
          top: -120px;
          background: rgba(255,255,255,.08);
        }

        .ocean-hero::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          left: 42%;
          bottom: -135px;
          background: rgba(255,255,255,.055);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .hero-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .hero-icon {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,.13);
          border: 1px solid rgba(255,255,255,.2);
          backdrop-filter: blur(10px);
        }

        .hero-title {
          margin: 0;
          font-size: 28px;
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -.7px;
        }

        .hero-subtitle {
          margin: 7px 0 0;
          color: rgba(255,255,255,.76);
          font-size: 14px;
        }

        .add-role-button {
          border: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 13px;
          background: white;
          color: #087a73;
          font-weight: 750;
          cursor: pointer;
          box-shadow: 0 8px 22px rgba(0,0,0,.13);
          transition: .2s ease;
        }

        .add-role-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(0,0,0,.18);
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 18px;
        }

        .stat-card {
          position: relative;
          overflow: hidden;
          padding: 18px;
          border: 1px solid #d9e8eb;
          border-radius: 18px;
          background: rgba(255,255,255,.92);
          box-shadow: 0 8px 24px rgba(11, 64, 74, .055);
        }

        .stat-card::after {
          content: "";
          position: absolute;
          right: -28px;
          bottom: -40px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(13,148,136,.06);
        }

        .stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #e7f8f5;
          color: #079687;
        }

        .stat-label {
          color: #65808a;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        .stat-value {
          margin-top: 8px;
          font-size: 25px;
          font-weight: 800;
          color: #092f39;
        }

        .main-grid {
          display: grid;
          grid-template-columns: minmax(320px, 390px) minmax(0, 1fr);
          gap: 18px;
          align-items: start;
        }

        .panel {
          border: 1px solid #d8e7eb;
          border-radius: 20px;
          background: rgba(255,255,255,.95);
          box-shadow: 0 10px 32px rgba(7, 66, 78, .055);
          overflow: hidden;
        }

        .panel-header {
          padding: 20px;
          border-bottom: 1px solid #e5eef0;
        }

        .panel-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .panel-title {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0;
          font-size: 18px;
          font-weight: 800;
          color: #092d37;
        }

        .panel-title svg {
          color: #079c91;
        }

        .panel-caption {
          margin: 5px 0 0;
          font-size: 12px;
          color: #73909a;
        }

        .filter-area {
          margin-top: 16px;
          display: grid;
          gap: 10px;
        }

        .search-box {
          position: relative;
        }

        .search-box svg {
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: #7c98a1;
        }

        .search-input,
        .select-input {
          width: 100%;
          height: 44px;
          border: 1px solid #d9e7eb;
          outline: none;
          border-radius: 12px;
          background: #f8fbfc;
          color: #153844;
          padding: 0 13px;
          font-size: 13px;
          transition: .2s ease;
        }

        .search-input {
          padding-left: 40px;
        }

        .search-input:focus,
        .select-input:focus {
          border-color: #0ba99a;
          box-shadow: 0 0 0 4px rgba(11,169,154,.09);
          background: white;
        }

        .role-list {
          padding: 14px;
          max-height: 690px;
          overflow-y: auto;
        }

        .role-card {
          position: relative;
          margin-bottom: 10px;
          padding: 16px;
          border: 1px solid #deeaed;
          border-radius: 16px;
          background: #fff;
          cursor: pointer;
          transition: .2s ease;
        }

        .role-card:last-child {
          margin-bottom: 0;
        }

        .role-card:hover {
          border-color: #9bded7;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(5, 103, 109, .07);
        }

        .role-card.selected {
          border-color: #13ad9e;
          background:
            linear-gradient(
              135deg,
              #effcf9,
              #f7ffff
            );
          box-shadow:
            0 10px 25px rgba(9, 151, 138, .1),
            inset 4px 0 0 #0aa895;
        }

        .role-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .role-name-wrap {
          min-width: 0;
        }

        .role-name {
          margin: 0;
          font-size: 15px;
          font-weight: 800;
          color: #092e39;
        }

        .role-badge {
          display: inline-flex;
          margin-left: 7px;
          padding: 3px 7px;
          border-radius: 999px;
          background: #e5f7f4;
          color: #087d74;
          font-size: 10px;
          font-weight: 800;
        }

        .role-description {
          margin: 5px 0 0;
          color: #66828c;
          font-size: 12px;
        }

        .role-status {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-shrink: 0;
          font-size: 11px;
          color: #47646e;
        }

        .role-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 16px;
          color: #63808b;
          font-size: 11px;
        }

        .role-meta span {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .role-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 15px;
        }

        .edit-button,
        .delete-button {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: 1px solid #dce9ec;
          background: #f8fbfc;
          color: #53727c;
          cursor: pointer;
          transition: .2s ease;
        }

        .edit-button:hover {
          background: #e8faf7;
          color: #078e83;
          border-color: #9dded7;
        }

        .delete-button:hover {
          background: #fff1f1;
          color: #ef4444;
          border-color: #fecaca;
        }

        .permissions-panel {
          min-height: 720px;
        }

        .permissions-header {
          padding: 20px;
          border-bottom: 1px solid #e4edef;
          background:
            linear-gradient(
              180deg,
              #fbffff,
              #f7fbfc
            );
        }

        .selected-user-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
          margin-top: 17px;
        }

        .info-box {
          min-height: 70px;
          padding: 13px;
          border: 1px solid #dce9ec;
          border-radius: 14px;
          background: white;
        }

        .info-label {
          display: block;
          margin-bottom: 6px;
          color: #7b969e;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        .info-value {
          color: #123640;
          font-size: 13px;
          font-weight: 750;
        }

        .permission-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 18px 20px 12px;
        }

        .access-heading h3 {
          margin: 0;
          font-size: 15px;
          color: #10343f;
        }

        .access-heading p {
          margin: 4px 0 0;
          color: #78929a;
          font-size: 12px;
        }

        .toolbar-actions {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .defaults-button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 0;
          background: transparent;
          color: #078c83;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .permission-count {
          padding: 5px 9px;
          border-radius: 999px;
          background: #e8f8f5;
          color: #087c74;
          font-size: 11px;
          font-weight: 800;
        }

        .permission-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          padding: 8px 20px 20px;
        }

        .permission-group {
          border: 1px solid #dce9ec;
          border-radius: 15px;
          overflow: hidden;
          background: #fff;
        }

        .permission-group-head {
          padding: 13px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          background:
            linear-gradient(
              90deg,
              #f1fbfa,
              #f8fcfd
            );
          border-bottom: 1px solid #e4edef;
        }

        .group-title-wrap {
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 0;
        }

        .group-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #dff7f3;
          color: #078f84;
          flex-shrink: 0;
        }

        .group-title {
          margin: 0;
          font-size: 12px;
          font-weight: 800;
          color: #173c46;
        }

        .group-description {
          margin: 2px 0 0;
          color: #78929a;
          font-size: 10px;
        }

        .group-expand {
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 8px;
          background: transparent;
          color: #62808a;
          cursor: pointer;
        }

        .group-expand:hover {
          background: #e9f8f6;
          color: #078d83;
        }

        .permission-list {
          padding: 9px;
        }

        .permission-row {
          min-height: 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 9px;
        }

        .permission-row + .permission-row {
          margin-top: 4px;
        }

        .permission-row:hover {
          background: #f5fbfb;
        }

        .permission-name {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #254853;
          font-size: 11px;
          font-weight: 650;
        }

        .permission-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #72bdb6;
        }

        .ocean-toggle {
          position: relative;
          width: 42px;
          height: 23px;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: #d6e3e6;
          cursor: pointer;
          transition: .2s ease;
          flex-shrink: 0;
        }

        .ocean-toggle span {
          position: absolute;
          width: 17px;
          height: 17px;
          left: 3px;
          top: 3px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 5px rgba(0,0,0,.15);
          transition: .2s ease;
        }

        .ocean-toggle.active {
          background: linear-gradient(135deg, #0a9f91, #12b6a5);
          box-shadow: 0 4px 12px rgba(9, 164, 148, .22);
        }

        .ocean-toggle.active span {
          transform: translateX(19px);
        }

        .ocean-toggle.small {
          width: 38px;
          height: 21px;
        }

        .ocean-toggle.small span {
          width: 15px;
          height: 15px;
          top: 3px;
          left: 3px;
        }

        .ocean-toggle.small.active span {
          transform: translateX(17px);
        }

        .permissions-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 15px 20px 20px;
          border-top: 1px solid #e3edef;
        }

        .save-status {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #078c83;
          font-size: 12px;
          font-weight: 700;
        }

        .save-button {
          border: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 18px;
          border-radius: 11px;
          color: white;
          background: linear-gradient(135deg, #078d82, #10a995);
          font-weight: 750;
          cursor: pointer;
          box-shadow: 0 7px 18px rgba(7, 141, 130, .2);
          transition: .2s ease;
        }

        .save-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 22px rgba(7, 141, 130, .28);
        }

        .empty-roles {
          padding: 45px 20px;
          text-align: center;
          color: #7b969e;
        }

        .empty-roles svg {
          margin-bottom: 10px;
          color: #94b8bd;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(4, 30, 36, .58);
          backdrop-filter: blur(7px);
        }

        .modal {
          width: min(460px, 100%);
          border-radius: 20px;
          overflow: hidden;
          background: white;
          box-shadow: 0 30px 80px rgba(0,0,0,.24);
          animation: modalIn .2s ease;
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 19px 20px;
          border-bottom: 1px solid #e6eef0;
          background: linear-gradient(135deg, #effbf9, #ffffff);
        }

        .modal-header h3 {
          margin: 0;
          color: #0a303a;
          font-size: 17px;
        }

        .close-button {
          width: 32px;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 9px;
          background: #f0f6f7;
          color: #54727b;
          cursor: pointer;
        }

        .close-button:hover {
          background: #e6f7f4;
          color: #078c83;
        }

        .modal-body {
          padding: 20px;
        }

        .modal-label {
          display: block;
          margin-bottom: 8px;
          color: #274751;
          font-size: 12px;
          font-weight: 750;
        }

        .modal-input {
          width: 100%;
          height: 46px;
          padding: 0 13px;
          border: 1px solid #cfe0e4;
          border-radius: 11px;
          outline: none;
          color: #153943;
          background: #fbfdfd;
        }

        .modal-input:focus {
          border-color: #0aa394;
          box-shadow: 0 0 0 4px rgba(10,163,148,.1);
        }

        .modal-hint {
          margin: 8px 0 0;
          color: #79939b;
          font-size: 11px;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 9px;
          padding: 14px 20px 20px;
        }

        .cancel-button,
        .modal-add-button {
          height: 40px;
          padding: 0 16px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .cancel-button {
          border: 1px solid #dbe7ea;
          background: #f7fafb;
          color: #526f79;
        }

        .modal-add-button {
          border: 0;
          background: linear-gradient(135deg, #078e82, #12aa99);
          color: white;
        }

        @media (max-width: 1100px) {
          .main-grid {
            grid-template-columns: 1fr;
          }

          .role-list {
            max-height: none;
          }

          .permission-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .roles-page {
            padding: 10px;
          }

          .hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .stats-row {
            grid-template-columns: repeat(2, 1fr);
          }

          .selected-user-row {
            grid-template-columns: 1fr;
          }

          .permission-toolbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .toolbar-actions {
            width: 100%;
            justify-content: space-between;
          }
        }

        @media (max-width: 480px) {
          .stats-row {
            grid-template-columns: 1fr;
          }

          .ocean-hero {
            padding: 20px;
          }

          .hero-title {
            font-size: 23px;
          }

          .role-card-top {
            flex-direction: column;
          }

          .role-status {
            align-self: flex-start;
          }

          .permissions-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .save-button {
            width: 100%;
            justify-content: center;
          }
        }

        /* ===== shared theme (matches Dashboard / Users / Tasks) ===== */
        .roles-page .access-heading h3 { font-weight: 800; color: var(--ts-text); }
        .roles-page .stat-icon { color: var(--ts-blue); background: #e8f4fa; }
        .roles-page .ocean-toggle.active { background: var(--ts-primary); }
        .roles-page .access-mode-switch {
          display: flex; gap: 6px; padding: 4px; margin: 12px 0 2px;
          background: #eef6f9; border: 1px solid #d5e7ee; border-radius: 12px;
        }
        .roles-page .access-mode-switch button {
          flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          padding: 8px 10px; border: none; border-radius: 9px; background: transparent;
          color: #4f6f7a; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit;
        }
        .roles-page .access-mode-switch button.active {
          background: #fff; color: var(--ts-text); box-shadow: 0 2px 8px rgba(18, 59, 93, .12);
        }
        .roles-page .access-mode-switch .mode-count {
          min-width: 20px; padding: 1px 6px; border-radius: 999px;
          background: #e8f4fa; color: var(--ts-blue); font-size: 10px;
        }
        .roles-page .ocean-hero {
          background: var(--ts-hero);
          border: var(--ts-hero-border);
          box-shadow: var(--ts-hero-shadow);
          color: var(--ts-on-hero);
        }

      `}),e.jsxs("div",{className:"roles-shell",children:[e.jsx("section",{className:"ocean-hero",children:e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"hero-left",children:[e.jsx("div",{className:"hero-icon",children:e.jsx(D,{size:29})}),e.jsxs("div",{children:[e.jsx("h1",{className:"hero-title",children:o?"Admin Access Management":"Role Management"}),e.jsx("p",{className:"hero-subtitle",children:o?"Control which modules and actions each Admin can use and grant to their users":"Configure access levels and permissions for the roles in your organization"})]})]}),e.jsxs("button",{className:"add-role-button",onClick:()=>$(k),disabled:F,children:[e.jsx(de,{size:17}),"Reload"]})]})}),V&&e.jsxs("div",{className:"save-status",style:{color:"#b34444",marginBottom:14},children:[e.jsx(ce,{size:15}),V]}),e.jsxs("section",{className:"stats-row",children:[e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-top",children:[e.jsx("span",{className:"stat-label",children:o?"Admins":"Total Roles"}),e.jsx("div",{className:"stat-icon",children:e.jsx(D,{size:19})})]}),e.jsx("div",{className:"stat-value",children:w.length})]}),e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-top",children:[e.jsx("span",{className:"stat-label",children:o?"Restricted":"Customized"}),e.jsx("div",{className:"stat-icon",children:e.jsx(G,{size:19})})]}),e.jsx("div",{className:"stat-value",children:w.filter(s=>s.customized).length})]}),e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-top",children:[e.jsx("span",{className:"stat-label",children:"Permissions Available"}),e.jsx("div",{className:"stat-icon",children:e.jsx(pe,{size:19})})]}),e.jsx("div",{className:"stat-value",children:oe})]}),e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-top",children:[e.jsx("span",{className:"stat-label",children:"Assigned Users"}),e.jsx("div",{className:"stat-icon",children:e.jsx(O,{size:19})})]}),e.jsx("div",{className:"stat-value",children:w.reduce((s,i)=>s+(i.users||0),0)})]})]}),e.jsxs("div",{className:"main-grid",children:[e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("div",{className:"panel-title-row",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"panel-title",children:[e.jsx(G,{size:19}),o?"Admins":m?"Individuals":"Roles"]}),e.jsx("p",{className:"panel-caption",children:o?"Select an Admin to manage the access they can use and grant":m?"Give one person their own access, separate from their role":"Select a role to manage its access"})]}),e.jsx(Qe,{size:18,color:"#7b969e"})]}),!o&&e.jsxs("div",{className:"access-mode-switch",role:"tablist",children:[e.jsxs("button",{type:"button",role:"tab","aria-selected":!m,className:m?"":"active",onClick:()=>re("roles"),children:[e.jsx(G,{size:14})," Roles"]}),e.jsxs("button",{type:"button",role:"tab","aria-selected":m,className:m?"active":"",onClick:()=>re("people"),children:[e.jsx(xe,{size:14})," Individuals",e.jsx("span",{className:"mode-count",children:A.length})]})]}),e.jsxs("div",{className:"filter-area",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(Be,{size:17}),e.jsx("input",{className:"search-input",placeholder:o?"Search admins...":m?"Search people...":"Search roles...",value:I,onChange:s=>X(s.target.value)})]}),e.jsxs("select",{className:"select-input",value:C,onChange:s=>Q(s.target.value),children:[e.jsx("option",{value:"All roles",children:m?"Everyone":"All roles"}),e.jsx("option",{value:"Default",children:o?"Full access":m?"Role access":"Default"}),e.jsx("option",{value:"Customized",children:o?"Restricted":m?"Individual access":"Customized"})]})]})]}),e.jsxs("div",{className:"role-list",children:[F&&w.length===0?e.jsxs("div",{className:"empty-roles",children:[e.jsx(me,{size:30}),e.jsx("div",{children:"Loading…"})]}):ae.length===0?e.jsxs("div",{className:"empty-roles",children:[e.jsx(Ye,{size:35}),e.jsx("div",{children:o?"No admins found":m?"No people found":"No roles found"})]}):ie.items.map(s=>e.jsxs("div",{className:`role-card ${k===s.id?"selected":""}`,onClick:()=>ne(s),children:[e.jsxs("div",{className:"role-card-top",children:[e.jsxs("div",{className:"role-name-wrap",children:[e.jsxs("h3",{className:"role-name",children:[s.name,e.jsx("span",{className:"role-badge",children:s.type})]}),e.jsx("p",{className:"role-description",children:s.description})]}),e.jsx("div",{className:"role-status",children:s.status})]}),e.jsxs("div",{className:"role-meta",children:[e.jsxs("span",{children:[e.jsx(qe,{size:13}),s.permissionCount," permissions"]}),s.userId?e.jsxs("span",{children:[e.jsx(O,{size:13}),s.roleLabel]}):e.jsxs("span",{children:[e.jsx(O,{size:13}),s.users," users"]})]}),e.jsxs("div",{className:"role-actions",children:[e.jsx("span",{style:{fontSize:"10px",color:k===s.id?"#078c83":"#91a6ac",fontWeight:700},children:k===s.id?"Currently selected":"Manage permissions"}),e.jsx("div",{style:{display:"flex",gap:7},children:e.jsx("button",{className:"edit-button",title:"Edit permissions",onClick:i=>{i.stopPropagation(),ne(s)},children:e.jsx(Fe,{size:15})})})]})]},s.key)),e.jsx("div",{style:{gridColumn:"1 / -1"},children:e.jsx(Oe,{...ie,label:o?"admins":m?"people":"roles"})})]})]}),e.jsxs("section",{className:"panel permissions-panel",children:[e.jsxs("div",{className:"permissions-header",children:[e.jsxs("div",{className:"panel-title-row",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"panel-title",children:[e.jsx(D,{size:20}),"Permissions"]}),e.jsx("p",{className:"panel-caption",children:o?"Their Managers and Team Members can never exceed this":u?"Applies to this person only and replaces their role's access":"Options you do not have yourself are disabled"})]}),e.jsxs("div",{className:"permission-count",children:[te,"/",oe," enabled"]})]}),e.jsxs("div",{className:"selected-user-row",children:[e.jsxs("div",{className:"info-box",children:[e.jsx("span",{className:"info-label",children:o?"Selected Admin":u?"Selected Person":"Selected Role"}),e.jsx("span",{className:"info-value",children:t?.name||"None"})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("span",{className:"info-label",children:"Configuration"}),e.jsx("span",{className:"info-value",children:t?.type||"—"})]}),u?e.jsxs("div",{className:"info-box",children:[e.jsx("span",{className:"info-label",children:"Role"}),e.jsx("span",{className:"info-value",children:t.roleLabel})]}):e.jsxs("div",{className:"info-box",children:[e.jsx("span",{className:"info-label",children:"Assigned Users"}),e.jsxs("span",{className:"info-value",children:[t?.users||0," users"]})]})]})]}),e.jsxs("div",{className:"permission-toolbar",children:[e.jsxs("div",{className:"access-heading",children:[e.jsx("h3",{children:"Access Permissions"}),e.jsx("p",{children:"Enable or disable individual capabilities. Saved changes apply immediately."})]}),e.jsxs("div",{className:"toolbar-actions",children:[e.jsxs("button",{className:"defaults-button",onClick:$e,disabled:!t,children:[e.jsx(de,{size:13}),u?"Load role access":"Load defaults"]}),u&&t.customized&&e.jsxs("button",{className:"defaults-button",onClick:Ae,disabled:b,title:"Remove this person's individual access so they follow their role again",children:[e.jsx(xe,{size:13}),"Reset to role"]}),e.jsxs("span",{className:"permission-count",children:[te," enabled"]})]})]}),e.jsx("div",{className:"permission-grid",children:l.map(s=>{const i=s.icon,x=s.permissions.map(p=>`${s.id}.${p}`).filter(p=>M[p]).length===s.permissions.length,j=s.permissions.some(p=>L(s.id,p));return e.jsxs("div",{className:"permission-group",children:[e.jsxs("div",{className:"permission-group-head",children:[e.jsxs("div",{className:"group-title-wrap",children:[e.jsx("div",{className:"group-icon",children:e.jsx(i,{size:16})}),e.jsxs("div",{children:[e.jsx("h3",{className:"group-title",children:s.title}),e.jsx("p",{className:"group-description",children:s.description})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx(ue,{small:!0,enabled:x,disabled:!t||!j,onChange:()=>Me(s)}),e.jsx("button",{className:"group-expand",onClick:()=>Ie(s.id),children:J[s.id]?e.jsx(He,{size:15}):e.jsx(Ve,{size:15})})]})]}),J[s.id]&&e.jsx("div",{className:"permission-list",children:s.permissions.map(p=>{const d=`${s.id}.${p}`,z=L(s.id,p);return e.jsxs("div",{className:"permission-row",title:z?void 0:"Your account does not have this permission, so you cannot grant it",children:[e.jsxs("div",{className:"permission-name",children:[e.jsx("span",{className:"permission-dot"}),ke[p]||p]}),e.jsx(ue,{enabled:!!M[d],disabled:!t||!z,onChange:()=>Re(s.id,p)})]},p)})})]},s.id)})}),e.jsxs("div",{className:"permissions-footer",children:[e.jsx("div",{children:W?e.jsxs("div",{className:"save-status",style:{color:"#b34444"},children:[e.jsx(ce,{size:15}),W]}):ee?e.jsxs("div",{className:"save-status",children:[e.jsx(pe,{size:15}),ee]}):e.jsx("span",{style:{color:"#78939b",fontSize:11},children:S?"You have unsaved changes.":"All changes saved."})}),e.jsxs("div",{style:{display:"flex",gap:8},children:[S&&e.jsx("button",{className:"defaults-button",onClick:Ee,disabled:b,children:"Discard"}),e.jsxs("button",{className:"save-button",onClick:Le,disabled:!t||b||!S,style:!t||b||!S?{opacity:.6}:void 0,children:[b?e.jsx(me,{size:16}):e.jsx(Ke,{size:16}),b?"Saving…":u?"Save Individual Access":"Save Permissions"]})]})]})]})]})]})]})};export{ws as default};
