import{c as se,r,j as e}from"./index-DdKrgUlZ.js";import{u as I,P as Q}from"./Pagination-UbNjK2ed.js";import{S as re}from"./SupportTicketThread-oLmpYh1Z.js";import{L as w}from"./life-buoy-BOHDUXo6.js";import{S as oe}from"./search-BYLJVZob.js";import{R as O}from"./refresh-cw-BTp_wSg-.js";import{C as ae}from"./chevron-up-DEP8khRV.js";import{C as ie}from"./chevron-down-CO4vTuki.js";import{F as pe}from"./file-text-DS9sIUc2.js";import{S as v}from"./send-D2GKwi2o.js";import{X as ne}from"./x-CpRqZeGy.js";import{C as ce}from"./circle-check-Bb8TVzmm.js";import{C as le}from"./circle-alert-B9X22cQr.js";import"./chevron-right-nPP00h3Y.js";import"./user-round-D24TWiSQ.js";import"./shield-check-CEPKVIb-.js";import"./loader-circle-C6iMG4x7.js";const G={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};G.node;const de=se(G),N="http://localhost:5000/api/support",B=()=>localStorage.getItem("token"),Te=()=>{const[d,H]=r.useState(""),[J,K]=r.useState(null),[m,X]=r.useState([]),[Y,S]=r.useState(!0),[z,C]=r.useState(""),[q,T]=r.useState([]),[F,V]=r.useState(null),[L,A]=r.useState(!0),[R,D]=r.useState(""),[W,g]=r.useState(!1),[n,M]=r.useState(!1),[b,u]=r.useState(!1),[$,p]=r.useState(""),[E,x]=r.useState(""),[i,P]=r.useState({subject:"",category:"General Support",priority:"Medium",message:""}),c=r.useCallback(()=>{const t=B();return t?{Authorization:`Bearer ${t}`}:{}},[]),j=async t=>{const s=await t.json().catch(()=>({}));if(!t.ok||s.success===!1)throw new Error(s.message||`Request failed (${t.status})`);return s},k=r.useCallback(async()=>{S(!0),C("");try{const t=await fetch(`${N}/faqs`,{headers:c()}),s=await j(t);X(Array.isArray(s.data)?s.data:[])}catch(t){C(t.message||"Unable to load FAQs.")}finally{S(!1)}},[c]),l=r.useCallback(async()=>{A(!0),D("");try{const t=await fetch(`${N}/tickets`,{headers:c()}),s=await j(t);T(Array.isArray(s.data)?s.data:[])}catch(t){D(t.message||"Unable to load tickets.")}finally{A(!1)}},[c]);r.useEffect(()=>{k(),l()},[k,l]);const _=r.useMemo(()=>{const t=d.trim().toLowerCase();return t?m.filter(s=>{const a=String(s.question||"").toLowerCase(),o=String(s.answer||"").toLowerCase();return a.includes(t)||o.includes(t)}):m},[m,d]),h=I(_,{id:"faqs",resetKey:d}),U=I(q,{id:"my-tickets"}),f=t=>{const{name:s,value:a}=t.target;P(o=>({...o,[s]:a}))},y=()=>{n||(g(!1),p(""),u(!1),x(""))},Z=async t=>{if(t.preventDefault(),!i.subject.trim()||!i.message.trim()){p("Please enter both a subject and description.");return}if(!B()){p("Please log in again to create a support ticket.");return}M(!0),p("");try{const s=await fetch(`${N}/tickets`,{method:"POST",headers:{...c(),"Content-Type":"application/json"},body:JSON.stringify({...i,subject:i.subject.trim(),message:i.message.trim()})}),a=await j(s);x(a.data?.ticketId||""),u(!0),P({subject:"",category:"General Support",priority:"Medium",message:""}),await l()}catch(s){p(s.message||"Failed to create support ticket.")}finally{M(!1)}},ee=t=>`priority-${String(t||"medium").toLowerCase()}`,te=t=>`status-${String(t||"open").toLowerCase().replace(/\s+/g,"-")}`;return e.jsxs("div",{className:"support-page",children:[e.jsx("style",{children:`
        .support-page {
          min-height: calc(100vh - 100px);
          padding: 28px;
          box-sizing: border-box;
          background: #f5f9fc;
          color: #183449;
        }

        .support-container {
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
        }

        .support-header {
          padding: 30px;
          margin-bottom: 22px;
          border-radius: 20px;
          background: linear-gradient(120deg, #073b4c, #087f8c);
          color: white;
        }

        .support-heading {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .support-heading-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: rgba(255,255,255,.14);
        }

        .support-header h1 {
          margin: 0;
          font-size: 26px;
          font-weight: 800;
        }

        .support-header p {
          margin: 7px 0 0;
          color: #d7eef1;
          font-size: 13px;
          line-height: 1.6;
        }

        .support-search-wrap {
          position: relative;
          margin-top: 24px;
        }

        .support-search-icon {
          position: absolute;
          top: 14px;
          left: 15px;
          color: #71899a;
        }

        .support-search {
          width: 100%;
          height: 46px;
          box-sizing: border-box;
          padding: 0 15px 0 44px;
          border: 1px solid #dce7ed;
          border-radius: 11px;
          outline: none;
          background: white;
          color: #183449;
          font-size: 13px;
        }

        .support-search:focus,
        .support-form input:focus,
        .support-form select:focus,
        .support-form textarea:focus {
          border-color: #078995;
          box-shadow: 0 0 0 3px rgba(7,137,149,.1);
        }

        .support-panel {
          margin-bottom: 22px;
          overflow: hidden;
          border: 1px solid #e0e9ef;
          border-radius: 17px;
          background: white;
          box-shadow: 0 5px 20px rgba(26,65,88,.04);
        }

        .support-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 20px 22px;
          border-bottom: 1px solid #edf1f4;
        }

        .support-panel-title {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .support-title-icon {
          width: 39px;
          height: 39px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          color: #087f8c;
          background: #e6f7f7;
        }

        .support-panel-header h2 {
          margin: 0;
          font-size: 16px;
          color: #183449;
        }

        .support-panel-header p {
          margin: 4px 0 0;
          color: #8194a1;
          font-size: 12px;
        }

        .support-primary-button,
        .support-refresh-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 38px;
          padding: 0 14px;
          border: none;
          border-radius: 9px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
        }

        .support-primary-button {
          background: #087f8c;
          color: white;
        }

        .support-primary-button:hover {
          background: #066975;
        }

        .support-primary-button:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        .support-refresh-button {
          color: #087f8c;
          background: #edf8f9;
          border: 1px solid #d9ebee;
        }

        .support-faq-list {
          padding: 4px 20px;
        }

        .support-faq-item {
          border-bottom: 1px solid #edf1f4;
        }

        .support-faq-item:last-child {
          border-bottom: none;
        }

        .support-faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 17px 2px;
          border: none;
          background: transparent;
          color: #28475b;
          text-align: left;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .support-faq-question:hover {
          color: #087f8c;
        }

        .support-faq-answer {
          padding: 0 30px 17px 2px;
          color: #708695;
          font-size: 13px;
          line-height: 1.8;
          white-space: pre-wrap;
        }

        .support-state {
          padding: 35px 20px;
          text-align: center;
          color: #7b909e;
          font-size: 13px;
        }

        .support-error {
          color: #b83232;
        }

        .support-state button {
          margin-top: 12px;
        }

        .support-tickets {
          display: grid;
          gap: 10px;
          padding: 16px 20px 20px;
        }

        .support-ticket-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 15px;
          border: 1px solid #e3edf1;
          border-radius: 12px;
          background: #fcfeff;
        }

        .support-ticket-main {
          min-width: 0;
        }

        .support-ticket-subject {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          color: #24455a;
          font-size: 13px;
          font-weight: 700;
          overflow-wrap: anywhere;
        }

        .support-ticket-id {
          padding: 4px 7px;
          border-radius: 6px;
          background: #e4f7f7;
          color: #087f8c;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .support-ticket-meta {
          margin-top: 7px;
          color: #8498a5;
          font-size: 11px;
        }

        .support-ticket-badges {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        .support-badge {
          padding: 5px 9px;
          border-radius: 30px;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .priority-low {
          background: #eef3f5;
          color: #587284;
        }

        .priority-medium {
          background: #e7f1ff;
          color: #2368a3;
        }

        .priority-high {
          background: #fff0df;
          color: #a96600;
        }

        .priority-urgent {
          background: #fde9e8;
          color: #bd332c;
        }

        .status-open {
          background: #e7f1ff;
          color: #2368a3;
        }

        .status-in-progress {
          background: #fff4d9;
          color: #956c0a;
        }

        .status-resolved {
          background: #e2f8ef;
          color: #0b8c6c;
        }

        .status-closed {
          background: #eef3f5;
          color: #718695;
        }

        .support-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          box-sizing: border-box;
          background: rgba(8,35,48,.62);
          backdrop-filter: blur(4px);
        }

        .support-modal {
          width: 100%;
          max-width: 580px;
          max-height: calc(100vh - 36px);
          overflow-y: auto;
          border-radius: 18px;
          background: white;
          box-shadow: 0 25px 70px rgba(0,0,0,.22);
        }

        .support-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 20px 23px;
          border-bottom: 1px solid #e8eef1;
        }

        .support-modal-heading {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .support-modal-heading h2 {
          margin: 0;
          color: #183449;
          font-size: 17px;
        }

        .support-close-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: none;
          border-radius: 9px;
          background: #f0f5f7;
          color: #637b89;
          cursor: pointer;
        }

        .support-form {
          padding: 22px;
        }

        .support-form-group {
          margin-bottom: 17px;
        }

        .support-form label {
          display: block;
          margin-bottom: 7px;
          color: #28475b;
          font-size: 12px;
          font-weight: 700;
        }

        .support-form input,
        .support-form select,
        .support-form textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 11px 12px;
          border: 1px solid #d8e5eb;
          border-radius: 9px;
          outline: none;
          color: #24455a;
          background: #fcfeff;
          font: inherit;
          font-size: 13px;
        }

        .support-form input,
        .support-form select {
          height: 43px;
        }

        .support-form textarea {
          min-height: 120px;
          resize: vertical;
        }

        .support-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .support-form-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding-top: 6px;
        }

        .support-cancel-button {
          min-height: 38px;
          padding: 0 15px;
          border: none;
          border-radius: 9px;
          background: #eef3f5;
          color: #587284;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .support-alert {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin: 16px 22px 0;
          padding: 12px;
          border-radius: 10px;
          font-size: 12px;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .support-alert-success {
          background: #e7f8f0;
          border: 1px solid #c7ebdb;
          color: #087b5e;
        }

        .support-alert-error {
          background: #fff0ef;
          border: 1px solid #f3d0cd;
          color: #ad332c;
        }

        @media (max-width: 650px) {
          .support-page {
            padding: 16px 12px;
          }

          .support-header {
            padding: 22px 17px;
          }

          .support-header h1 {
            font-size: 22px;
          }

          .support-panel-header {
            padding: 16px;
          }

          .support-panel-header h2 {
            font-size: 14px;
          }

          .support-panel-header p {
            line-height: 1.5;
          }

          .support-form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .support-ticket-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .support-ticket-badges {
            flex-shrink: 1;
          }

          .support-faq-list {
            padding: 4px 14px;
          }

          .support-modal-header,
          .support-form {
            padding: 17px;
          }

          .support-alert {
            margin-right: 17px;
            margin-left: 17px;
          }
        }

        /* ===== shared theme (matches Dashboard / Users / Tasks) ===== */
        .support-page .support-header {
          background: var(--ts-hero);
          border: var(--ts-hero-border);
          box-shadow: var(--ts-hero-shadow);
          color: var(--ts-on-hero);
        }
        .support-page .support-panel-header h2 { font-weight: 800; color: var(--ts-text); }

      `}),e.jsxs("div",{className:"support-container",children:[e.jsxs("header",{className:"support-header",children:[e.jsxs("div",{className:"support-heading",children:[e.jsx("div",{className:"support-heading-icon",children:e.jsx(w,{size:25})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Support Center"}),e.jsx("p",{children:"Find answers to your questions or create a ticket for assistance."})]})]}),e.jsxs("div",{className:"support-search-wrap",children:[e.jsx(oe,{className:"support-search-icon",size:18}),e.jsx("input",{className:"support-search",type:"search",placeholder:"Search frequently asked questions...",value:d,onChange:t=>H(t.target.value)})]})]}),e.jsxs("section",{className:"support-panel",children:[e.jsx("div",{className:"support-panel-header",children:e.jsxs("div",{className:"support-panel-title",children:[e.jsx("div",{className:"support-title-icon",children:e.jsx(de,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Frequently Asked Questions"}),e.jsx("p",{children:"Quick answers to common questions"})]})]})}),Y?e.jsx("div",{className:"support-state",children:"Loading FAQs..."}):z?e.jsxs("div",{className:"support-state support-error",children:[e.jsx("p",{children:z}),e.jsxs("button",{className:"support-refresh-button",onClick:k,children:[e.jsx(O,{size:14}),"Retry"]})]}):_.length===0?e.jsx("div",{className:"support-state",children:"No FAQs found. Try a different search."}):e.jsxs("div",{className:"support-faq-list",children:[h.items.map((t,s)=>{const a=(h.page-1)*h.pageSize+s,o=J===a;return e.jsxs("div",{className:"support-faq-item",children:[e.jsxs("button",{type:"button",className:"support-faq-question","aria-expanded":o,onClick:()=>K(o?null:a),children:[e.jsx("span",{children:t.question}),o?e.jsx(ae,{size:18}):e.jsx(ie,{size:18})]}),o&&e.jsx("div",{className:"support-faq-answer",children:t.answer})]},t._id||t.question||a)}),e.jsx(Q,{...h,label:"FAQs"})]})]}),e.jsxs("section",{className:"support-panel",children:[e.jsxs("div",{className:"support-panel-header",children:[e.jsxs("div",{className:"support-panel-title",children:[e.jsx("div",{className:"support-title-icon",children:e.jsx(pe,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{children:"My Support Tickets"}),e.jsx("p",{children:"Track your submitted support requests"})]})]}),e.jsxs("button",{type:"button",className:"support-refresh-button",onClick:l,disabled:L,children:[e.jsx(O,{size:14}),"Refresh"]})]}),L?e.jsx("div",{className:"support-state",children:"Loading your tickets..."}):R?e.jsxs("div",{className:"support-state support-error",children:[e.jsx("p",{children:R}),e.jsx("button",{type:"button",className:"support-refresh-button",onClick:l,children:"Retry"})]}):q.length===0?e.jsxs("div",{className:"support-state",children:[e.jsx(w,{size:30}),e.jsx("p",{children:"You haven't raised any tickets yet."})]}):e.jsxs("div",{className:"support-tickets",children:[U.items.map(t=>e.jsxs("article",{className:"support-ticket-row",children:[e.jsxs("div",{className:"support-ticket-main",children:[e.jsxs("div",{className:"support-ticket-subject",children:[e.jsx("span",{className:"support-ticket-id",children:t.ticketId||"Support Ticket"}),e.jsx("span",{children:t.subject||"Untitled ticket"})]}),e.jsxs("div",{className:"support-ticket-meta",children:[t.category||"General Support"," · ","Raised on"," ",t.createdAt&&!Number.isNaN(new Date(t.createdAt).getTime())?new Date(t.createdAt).toLocaleDateString():"Date unavailable"]})]}),e.jsxs("div",{className:"support-ticket-badges",children:[e.jsx("span",{className:`support-badge ${ee(t.priority)}`,children:t.priority||"Medium"}),e.jsx("span",{className:`support-badge ${te(t.status)}`,children:t.status||"Open"}),e.jsx("button",{type:"button",className:"support-badge",style:{cursor:"pointer",border:"1px solid #bdeff5",background:"#ecfeff",color:"#0e7490"},onClick:()=>V(F===t._id?null:t._id),children:(t.responses||[]).length?`${t.responses.length} repl${t.responses.length===1?"y":"ies"}`:"Details"})]}),F===t._id&&e.jsx("div",{style:{flexBasis:"100%",width:"100%"},children:e.jsx(re,{ticket:t,onUpdated:s=>T(a=>a.map(o=>o._id===s._id?{...o,...s}:o))})})]},t._id||t.ticketId)),e.jsx(Q,{...U,label:"tickets"})]})]}),e.jsx("section",{className:"support-panel",children:e.jsxs("div",{className:"support-panel-header",children:[e.jsxs("div",{className:"support-panel-title",children:[e.jsx("div",{className:"support-title-icon",children:e.jsx(v,{size:19})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Need More Help?"}),e.jsx("p",{children:"Tell us about your issue by creating a support ticket."})]})]}),e.jsxs("button",{type:"button",className:"support-primary-button",onClick:()=>{p(""),u(!1),x(""),g(!0)},children:[e.jsx(v,{size:14}),"Create Ticket"]})]})})]}),W&&e.jsx("div",{className:"support-modal-overlay",onMouseDown:t=>{t.target===t.currentTarget&&y()},children:e.jsxs("section",{className:"support-modal",role:"dialog","aria-modal":"true","aria-labelledby":"support-modal-title",children:[e.jsxs("div",{className:"support-modal-header",children:[e.jsxs("div",{className:"support-modal-heading",children:[e.jsx("div",{className:"support-title-icon",children:e.jsx(w,{size:20})}),e.jsx("h2",{id:"support-modal-title",children:"Create Support Ticket"})]}),e.jsx("button",{type:"button",className:"support-close-button",onClick:y,disabled:n,"aria-label":"Close ticket form",children:e.jsx(ne,{size:18})})]}),b&&e.jsxs("div",{className:"support-alert support-alert-success",children:[e.jsx(ce,{size:17}),e.jsxs("div",{children:["Ticket created successfully.",E?` Reference: ${E}`:""]})]}),$&&e.jsxs("div",{className:"support-alert support-alert-error",children:[e.jsx(le,{size:17}),e.jsx("div",{children:$})]}),!b&&e.jsxs("form",{className:"support-form",onSubmit:Z,children:[e.jsxs("div",{className:"support-form-group",children:[e.jsx("label",{htmlFor:"support-subject",children:"Subject *"}),e.jsx("input",{id:"support-subject",name:"subject",value:i.subject,onChange:f,placeholder:"Briefly describe your issue",maxLength:150,required:!0})]}),e.jsxs("div",{className:"support-form-row",children:[e.jsxs("div",{className:"support-form-group",children:[e.jsx("label",{htmlFor:"support-category",children:"Category"}),e.jsxs("select",{id:"support-category",name:"category",value:i.category,onChange:f,children:[e.jsx("option",{children:"General Support"}),e.jsx("option",{children:"Tasks"}),e.jsx("option",{children:"Task Bank"}),e.jsx("option",{children:"Users"}),e.jsx("option",{children:"Calendar"}),e.jsx("option",{children:"Account"}),e.jsx("option",{children:"Technical Issue"})]})]}),e.jsxs("div",{className:"support-form-group",children:[e.jsx("label",{htmlFor:"support-priority",children:"Priority"}),e.jsxs("select",{id:"support-priority",name:"priority",value:i.priority,onChange:f,children:[e.jsx("option",{children:"Low"}),e.jsx("option",{children:"Medium"}),e.jsx("option",{children:"High"}),e.jsx("option",{children:"Urgent"})]})]})]}),e.jsxs("div",{className:"support-form-group",children:[e.jsx("label",{htmlFor:"support-message",children:"Description *"}),e.jsx("textarea",{id:"support-message",name:"message",value:i.message,onChange:f,placeholder:"Explain the problem and what help you need...",maxLength:5e3,required:!0})]}),e.jsxs("div",{className:"support-form-footer",children:[e.jsx("button",{type:"button",className:"support-cancel-button",onClick:y,disabled:n,children:"Cancel"}),e.jsxs("button",{type:"submit",className:"support-primary-button",disabled:n,children:[e.jsx(v,{size:14}),n?"Submitting...":"Submit Ticket"]})]})]}),b&&e.jsx("div",{className:"support-form-footer",style:{padding:20},children:e.jsx("button",{type:"button",className:"support-primary-button",onClick:()=>{g(!1),u(!1),x("")},children:"Done"})})]})})]})};export{Te as default};
