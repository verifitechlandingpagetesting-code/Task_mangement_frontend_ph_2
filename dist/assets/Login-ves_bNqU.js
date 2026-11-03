import{r as o,u as B,a as G,j as e,A as S,y as b,h as W}from"./index-DdKrgUlZ.js";import{L as Y}from"./list-todo-5n7Hw_tv.js";import{C as h}from"./circle-check-Bb8TVzmm.js";import{S as x}from"./shield-check-CEPKVIb-.js";import{S as D}from"./sparkles-DY2Y4YoQ.js";import{W as H}from"./waves-horizontal-B6LtjNOg.js";import{M as z}from"./mail-DrXfpxX_.js";import{L as U}from"./lock-CE4-BXLd.js";import{E as q}from"./eye-off-HvWWQrwG.js";import{E as X}from"./eye-blwpcqcq.js";import{A as K}from"./arrow-right-DpNwzmBk.js";const ne=()=>{const[l,E]=o.useState(!1),[O,F]=o.useState(!1),[f,s]=o.useState(""),[i,A]=o.useState({email:"",password:""}),[g,u]=o.useState(!1),[T,d]=o.useState(!1),[m,w]=o.useState(""),[n,y]=o.useState(!1),[j,v]=o.useState(""),[k,p]=o.useState(""),L=()=>{w(i.email||""),v(""),p(""),d(!0)},C=async a=>{if(a.preventDefault(),!n){if(!/^\S+@\S+\.\S+$/.test(m.trim())){p("Enter the email address you use to sign in.");return}y(!0),p("");try{const t=await S.post("/api/auth/forgot-password",{email:m.trim()});v(t.data?.message||"Your administrator has been notified.")}catch(t){p(t.response?.data?.message||"Could not send the request. Please try again.")}finally{y(!1)}}},I=B(),c=G(),R=typeof c.state?.from=="string"&&c.state.from.startsWith("/")&&!c.state.from.startsWith("//")?c.state.from:null,N=a=>{A({...i,[a.target.name]:a.target.value}),s("")},M=async a=>{if(a.preventDefault(),s(""),!i.email||!i.password){s("Please enter email and password");return}u(!0);try{const t=await S.post("/api/auth/login",{email:i.email,password:i.password});if(t.data.success){const r=t.data.data;if(!r.token)throw new Error("The server did not return a session token.");localStorage.setItem("token",r.token);const{token:$,...P}=r;localStorage.setItem("user",JSON.stringify(P)),window.dispatchEvent(new Event("user-updated")),b.success(`Welcome, ${r.name}!`,{position:"top-right",autoClose:2e3}),I(R||W(r),{replace:!0})}else s(t.data.message||"Login failed"),b.error(t.data.message||"Login failed",{position:"top-right",autoClose:3e3})}catch(t){console.error("Login error:",t);const r=t.response?.data?.message||t.message||"Login failed. Please try again.";s(r),b.error(r,{position:"top-right",autoClose:3e3})}finally{u(!1)}};return e.jsxs("div",{className:"login-page",children:[e.jsxs("div",{className:"ocean-background",children:[e.jsx("div",{className:"ocean-glow ocean-glow-one"}),e.jsx("div",{className:"ocean-glow ocean-glow-two"}),e.jsx("div",{className:"ocean-glow ocean-glow-three"}),e.jsx("div",{className:"light-ray ray-one"}),e.jsx("div",{className:"light-ray ray-two"}),e.jsx("div",{className:"light-ray ray-three"}),e.jsx("div",{className:"bubble bubble-one"}),e.jsx("div",{className:"bubble bubble-two"}),e.jsx("div",{className:"bubble bubble-three"}),e.jsx("div",{className:"bubble bubble-four"}),e.jsx("div",{className:"bubble bubble-five"}),e.jsx("div",{className:"bubble bubble-six"}),e.jsx("div",{className:"bubble bubble-seven"}),e.jsx("div",{className:"bubble bubble-eight"}),e.jsx("div",{className:"ocean-line line-one"}),e.jsx("div",{className:"ocean-line line-two"}),e.jsx("div",{className:"ocean-line line-three"}),e.jsx("div",{className:"ocean-line line-four"}),e.jsx("div",{className:"ocean-particle particle-one"}),e.jsx("div",{className:"ocean-particle particle-two"}),e.jsx("div",{className:"ocean-particle particle-three"}),e.jsx("div",{className:"ocean-particle particle-four"}),e.jsx("div",{className:"ocean-particle particle-five"}),e.jsx("div",{className:"ocean-particle particle-six"})]}),e.jsxs("div",{className:"login-container",children:[e.jsxs("section",{className:"login-showcase",children:[e.jsxs("div",{className:"brand",children:[e.jsx("div",{className:"brand-icon",children:e.jsx(Y,{size:25,strokeWidth:2.5})}),e.jsxs("div",{children:[e.jsx("div",{className:"brand-name",children:"TaskFlow"}),e.jsx("div",{className:"brand-subtitle",children:"Task Management"})]})]}),e.jsxs("div",{className:"showcase-content",children:[e.jsxs("div",{className:"eyebrow",children:[e.jsx("span",{className:"eyebrow-dot"}),"SMART WORKSPACE"]}),e.jsxs("h1",{children:["Manage your work.",e.jsx("span",{children:"Move forward."})]}),e.jsx("p",{children:"Organize tasks, collaborate with your team, track progress, and keep everything moving from one intelligent workspace."}),e.jsxs("div",{className:"feature-list",children:[e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx(h,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Organize everything"}),e.jsx("span",{children:"Keep tasks, projects and priorities together."})]})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx(x,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Secure workspace"}),e.jsx("span",{children:"Designed for teams with controlled access."})]})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx(D,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Simple collaboration"}),e.jsx("span",{children:"Make team progress visible and actionable."})]})]})]})]}),e.jsxs("div",{className:"showcase-footer",children:[e.jsxs("div",{className:"mini-stat",children:[e.jsx("strong",{children:"01"}),e.jsx("span",{children:"Workspace"})]}),e.jsx("div",{className:"mini-divider"}),e.jsxs("div",{className:"mini-stat",children:[e.jsx("strong",{children:"24/7"}),e.jsx("span",{children:"Productivity"})]}),e.jsx("div",{className:"mini-divider"}),e.jsxs("div",{className:"mini-stat",children:[e.jsx("strong",{children:"∞"}),e.jsx("span",{children:"Possibilities"})]})]})]}),e.jsx("section",{className:"login-panel",children:e.jsxs("div",{className:"login-card",children:[e.jsx("div",{className:"card-top-decoration"}),e.jsx("div",{className:"card-orb card-orb-one"}),e.jsx("div",{className:"card-orb card-orb-two"}),e.jsxs("div",{className:"login-header",children:[e.jsx("div",{className:"login-icon",children:e.jsx(H,{size:25})}),e.jsx("div",{className:"welcome-badge",children:"Welcome back"}),e.jsx("h2",{children:"Sign in to TaskFlow"}),e.jsx("p",{children:"Enter your details to access your workspace."})]}),f&&e.jsxs("div",{className:"login-error",children:[e.jsx(x,{size:14}),e.jsx("span",{children:f})]}),e.jsxs("form",{onSubmit:M,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Email address"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(z,{className:"input-icon",size:19}),e.jsx("input",{id:"email",name:"email",type:"email",placeholder:"you@company.com",value:i.email,onChange:N,required:!0})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("div",{className:"password-label-row",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("button",{type:"button",className:"forgot-password",onClick:L,children:"Forgot password?"})]}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(U,{className:"input-icon",size:19}),e.jsx("input",{id:"password",name:"password",type:l?"text":"password",placeholder:"Enter your password",value:i.password,onChange:N,required:!0}),e.jsx("button",{type:"button",className:"password-toggle",onClick:()=>E(!l),"aria-label":l?"Hide password":"Show password",children:l?e.jsx(q,{size:19}):e.jsx(X,{size:19})})]})]}),e.jsx("div",{className:"login-options",children:e.jsxs("label",{className:"remember-option",children:[e.jsx("input",{type:"checkbox",checked:O,onChange:a=>F(a.target.checked)}),e.jsx("span",{className:"custom-checkbox",children:e.jsx(h,{size:13})}),e.jsx("span",{children:"Remember me"})]})}),e.jsx("button",{type:"submit",className:`login-button ${g?"loading":""}`,disabled:g,children:g?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"}),"Signing in..."]}):e.jsxs(e.Fragment,{children:["Sign in",e.jsx(K,{size:19})]})})]}),e.jsxs("div",{className:"security-note",children:[e.jsx(x,{size:16}),e.jsx("span",{children:"Your workspace connection is protected."})]}),e.jsxs("div",{className:"login-bottom",children:[e.jsx("span",{children:"TaskFlow"}),e.jsx("span",{className:"bottom-dot",children:"•"}),e.jsx("span",{children:"Task Management Platform"})]})]})})]}),e.jsx("style",{children:`

        /* =====================================================
           GLOBAL
        ====================================================== */

        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          margin: 0;
          min-height: 100%;
        }

        body {
          overflow-x: hidden;
        }


        /* =====================================================
           MAIN PAGE
        ====================================================== */

        .login-page {
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;

          color: #073b4c;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          background:
            radial-gradient(
              circle at 8% 10%,
              rgba(103, 232, 249, 0.55),
              transparent 25%
            ),
            radial-gradient(
              circle at 92% 15%,
              rgba(45, 212, 191, 0.35),
              transparent 28%
            ),
            radial-gradient(
              circle at 70% 85%,
              rgba(56, 189, 248, 0.30),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #ecfeff 0%,
              #dffaff 28%,
              #d5f7f7 55%,
              #e8fbff 78%,
              #f4feff 100%
            );
        }

        .login-error {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          margin-bottom: 20px;
          border-radius: 12px;
          border: 1px solid rgba(239, 68, 68, 0.2);
          background: rgba(254, 226, 226, 0.7);
          color: #dc2626;
          font-size: 12px;
          font-weight: 600;
        }

        .login-error svg {
          flex-shrink: 0;
        }


        /* =====================================================
           OCEAN BACKGROUND
        ====================================================== */

        .ocean-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }


        /* =====================================================
           OCEAN GLOWS
        ====================================================== */

        .ocean-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .ocean-glow-one {
          width: 520px;
          height: 520px;

          left: -180px;
          top: -180px;

          background:
            radial-gradient(
              circle,
              rgba(34, 211, 238, 0.35),
              rgba(34, 211, 238, 0.08) 45%,
              transparent 72%
            );

          filter: blur(2px);

          animation:
            oceanGlowOne 13s ease-in-out infinite;
        }

        .ocean-glow-two {
          width: 600px;
          height: 600px;

          right: -250px;
          bottom: -260px;

          background:
            radial-gradient(
              circle,
              rgba(20, 184, 166, 0.25),
              rgba(45, 212, 191, 0.08) 45%,
              transparent 72%
            );

          filter: blur(2px);

          animation:
            oceanGlowTwo 16s ease-in-out infinite;
        }

        .ocean-glow-three {
          width: 380px;
          height: 380px;

          left: 43%;
          top: 5%;

          background:
            radial-gradient(
              circle,
              rgba(56, 189, 248, 0.16),
              transparent 70%
            );

          animation:
            oceanGlowThree 9s ease-in-out infinite;
        }


        /* =====================================================
           LIGHT RAYS
        ====================================================== */

        .light-ray {
          position: absolute;

          width: 180px;
          height: 850px;

          top: -250px;

          opacity: 0.15;

          filter: blur(4px);

          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.95),
              rgba(255, 255, 255, 0)
            );

          transform: rotate(24deg);

          animation:
            rayMove 12s ease-in-out infinite;
        }

        .ray-one {
          left: 15%;
          animation-delay: 0s;
        }

        .ray-two {
          left: 47%;
          opacity: 0.1;
          animation-delay: 4s;
        }

        .ray-three {
          right: 10%;
          opacity: 0.12;
          animation-delay: 7s;
        }


        /* =====================================================
           FLOATING BUBBLES
        ====================================================== */

        .bubble {
          position: absolute;

          border-radius: 50%;

          border:
            1px solid rgba(255, 255, 255, 0.8);

          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(255, 255, 255, 0.95),
              rgba(103, 232, 249, 0.18) 45%,
              rgba(34, 211, 238, 0.04) 70%,
              transparent 75%
            );

          box-shadow:
            inset 2px 2px 5px rgba(255, 255, 255, 0.8),
            0 8px 25px rgba(34, 211, 238, 0.08);

          animation:
            bubbleFloat 10s ease-in-out infinite;
        }

        .bubble-one {
          width: 22px;
          height: 22px;
          left: 7%;
          top: 72%;
        }

        .bubble-two {
          width: 10px;
          height: 10px;
          left: 18%;
          top: 30%;
          animation-duration: 7s;
          animation-delay: 1s;
        }

        .bubble-three {
          width: 16px;
          height: 16px;
          left: 35%;
          top: 82%;
          animation-duration: 11s;
          animation-delay: 2s;
        }

        .bubble-four {
          width: 30px;
          height: 30px;
          left: 58%;
          top: 18%;
          animation-duration: 13s;
          animation-delay: 3s;
        }

        .bubble-five {
          width: 12px;
          height: 12px;
          right: 12%;
          top: 34%;
          animation-duration: 8s;
          animation-delay: 1.5s;
        }

        .bubble-six {
          width: 20px;
          height: 20px;
          right: 25%;
          bottom: 14%;
          animation-duration: 12s;
          animation-delay: 4s;
        }

        .bubble-seven {
          width: 8px;
          height: 8px;
          right: 8%;
          bottom: 35%;
          animation-duration: 9s;
        }

        .bubble-eight {
          width: 14px;
          height: 14px;
          left: 46%;
          bottom: 10%;
          animation-duration: 14s;
        }


        /* =====================================================
           FLOWING OCEAN LINES
        ====================================================== */

        .ocean-line {
          position: absolute;

          width: 130%;
          height: 150px;

          left: -15%;

          border-top:
            1px solid rgba(34, 211, 238, 0.18);

          border-radius: 50%;

          opacity: 0.7;

          animation:
            oceanFlow 13s ease-in-out infinite;
        }

        .line-one {
          top: 17%;
          transform: rotate(-4deg);
        }

        .line-two {
          top: 39%;
          transform: rotate(3deg);
          animation-delay: 2s;
        }

        .line-three {
          top: 64%;
          transform: rotate(-2deg);
          animation-delay: 4s;
        }

        .line-four {
          top: 84%;
          transform: rotate(4deg);
          animation-delay: 6s;
        }


        /* =====================================================
           PARTICLES
        ====================================================== */

        .ocean-particle {
          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #22d3ee;

          box-shadow:
            0 0 12px rgba(34, 211, 238, 0.7);

          opacity: 0.45;

          animation:
            particleFloat 7s ease-in-out infinite;
        }

        .particle-one {
          left: 11%;
          top: 20%;
        }

        .particle-two {
          left: 29%;
          top: 62%;
          animation-delay: 2s;
        }

        .particle-three {
          left: 52%;
          top: 12%;
          animation-delay: 4s;
        }

        .particle-four {
          left: 74%;
          top: 27%;
          animation-delay: 1s;
        }

        .particle-five {
          right: 14%;
          top: 70%;
          animation-delay: 3s;
        }

        .particle-six {
          left: 42%;
          bottom: 8%;
          animation-delay: 5s;
        }


        /* =====================================================
           MAIN LAYOUT
        ====================================================== */

        .login-container {
          position: relative;
          z-index: 5;

          min-height: 100vh;
          width: 100%;

          max-width: 1420px;

          margin: 0 auto;

          padding: 34px;

          display: grid;

          grid-template-columns:
            1fr
            510px;

          gap: 70px;

          align-items: center;
        }


        /* =====================================================
           LEFT SHOWCASE
        ====================================================== */

        .login-showcase {
          min-height: 690px;

          display: flex;
          flex-direction: column;

          justify-content: space-between;

          padding:
            35px
            15px
            35px
            35px;

          position: relative;
        }


        /* =====================================================
           BRAND
        ====================================================== */

        .brand {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .brand-icon {
          width: 48px;
          height: 48px;

          border-radius: 15px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #06b6d4,
              #22d3ee,
              #14b8a6
            );

          box-shadow:
            0 12px 30px
              rgba(8, 145, 178, 0.20),

            inset 0 1px 0
              rgba(255, 255, 255, 0.7);

          animation:
            iconFloat 4s ease-in-out infinite;
        }

        .brand-name {
          font-size: 22px;
          font-weight: 850;

          letter-spacing: -0.7px;

          color: #064b5a;
        }

        .brand-subtitle {
          margin-top: 2px;

          color: #60909b;

          font-size: 11px;

          font-weight: 700;

          text-transform: uppercase;

          letter-spacing: 1.8px;
        }


        /* =====================================================
           SHOWCASE
        ====================================================== */

        .showcase-content {
          max-width: 650px;
          margin-top: 25px;
        }

        .eyebrow {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          padding:
            8px
            13px;

          border:
            1px solid
            rgba(8, 145, 178, 0.14);

          background:
            rgba(255, 255, 255, 0.52);

          border-radius: 999px;

          color: #087c91;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1.8px;

          backdrop-filter: blur(12px);

          box-shadow:
            0 8px 25px
              rgba(8, 145, 178, 0.05);
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #14b8a6;

          box-shadow:
            0 0 0 4px
              rgba(20, 184, 166, 0.10),

            0 0 14px
              rgba(20, 184, 166, 0.6);

          animation:
            dotPulse 2s infinite;
        }

        .showcase-content h1 {
          margin:
            25px
            0
            20px;

          max-width: 680px;

          font-size:
            clamp(
              45px,
              5vw,
              76px
            );

          line-height: 0.98;

          letter-spacing: -4px;

          font-weight: 850;

          color: #064b5a;
        }

        .showcase-content h1 span {
          display: block;

          color: transparent;

          background:
            linear-gradient(
              90deg,
              #0891b2,
              #06b6d4,
              #14b8a6,
              #0284c7
            );

          background-size: 250% auto;

          -webkit-background-clip: text;
          background-clip: text;

          animation:
            gradientText 6s linear infinite;
        }

        .showcase-content > p {
          max-width: 580px;

          color: #608894;

          font-size: 16px;

          line-height: 1.8;

          margin: 0;
        }


        /* =====================================================
           FEATURES
        ====================================================== */

        .feature-list {
          display: flex;
          flex-direction: column;

          gap: 14px;

          margin-top: 35px;
        }

        .feature-item {
          display: flex;

          align-items: center;

          gap: 14px;

          width: fit-content;

          padding:
            10px
            14px;

          border-radius: 15px;

          border:
            1px solid
            rgba(8, 145, 178, 0.08);

          background:
            rgba(255, 255, 255, 0.42);

          backdrop-filter: blur(12px);

          transition:
            0.3s ease;

          box-shadow:
            0 8px 30px
              rgba(8, 145, 178, 0.035);
        }

        .feature-item:hover {
          transform:
            translateX(7px)
            translateY(-2px);

          border-color:
            rgba(8, 145, 178, 0.18);

          background:
            rgba(255, 255, 255, 0.65);

          box-shadow:
            0 12px 35px
              rgba(8, 145, 178, 0.08);
        }

        .feature-icon {
          width: 36px;
          height: 36px;

          flex-shrink: 0;

          border-radius: 11px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #0891b2;

          background:
            rgba(34, 211, 238, 0.10);

          border:
            1px solid
            rgba(34, 211, 238, 0.16);
        }

        .feature-item strong {
          display: block;

          font-size: 13px;

          color: #155563;

          margin-bottom: 3px;
        }

        .feature-item span {
          display: block;

          color: #71949d;

          font-size: 11px;
        }


        /* =====================================================
           SHOWCASE FOOTER
        ====================================================== */

        .showcase-footer {
          display: flex;

          align-items: center;

          gap: 20px;

          color: #6e949d;
        }

        .mini-stat {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }

        .mini-stat strong {
          color: #19758a;

          font-size: 17px;

          font-weight: 800;
        }

        .mini-stat span {
          font-size: 9px;

          text-transform: uppercase;

          letter-spacing: 1.2px;
        }

        .mini-divider {
          width: 1px;
          height: 30px;

          background:
            rgba(8, 145, 178, 0.15);
        }


        /* =====================================================
           LOGIN PANEL
        ====================================================== */

        .login-panel {
          display: flex;

          justify-content: center;
        }


        /* =====================================================
           LOGIN CARD
        ====================================================== */

        .login-card {
          position: relative;

          width: 100%;

          padding: 42px;

          overflow: hidden;

          border-radius: 30px;

          border:
            1px solid
            rgba(8, 145, 178, 0.16);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.96),
              rgba(240, 253, 255, 0.91)
            );

          box-shadow:
            0 30px 80px
              rgba(8, 100, 120, 0.14),

            0 0 0 1px
              rgba(255, 255, 255, 0.8)
              inset,

            0 0 70px
              rgba(34, 211, 238, 0.08);

          backdrop-filter:
            blur(25px);

          animation:
            cardAppear 0.8s ease-out;
        }

        .login-card::before {
          content: "";

          position: absolute;

          width: 250px;
          height: 250px;

          right: -140px;
          top: -130px;

          border-radius: 50%;

          background:
            rgba(34, 211, 238, 0.10);

          filter: blur(5px);
        }

        .login-card::after {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          left: -120px;
          bottom: -100px;

          border-radius: 50%;

          background:
            rgba(20, 184, 166, 0.08);

          filter: blur(8px);
        }


        /* =====================================================
           CARD ORBS
        ====================================================== */

        .card-orb {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;
        }

        .card-orb-one {
          width: 100px;
          height: 100px;

          right: 25px;
          top: 90px;

          background:
            radial-gradient(
              circle,
              rgba(34, 211, 238, 0.10),
              transparent 70%
            );

          animation:
            cardOrbOne 8s ease-in-out infinite;
        }

        .card-orb-two {
          width: 140px;
          height: 140px;

          left: -70px;
          bottom: 100px;

          background:
            radial-gradient(
              circle,
              rgba(20, 184, 166, 0.08),
              transparent 70%
            );

          animation:
            cardOrbTwo 10s ease-in-out infinite;
        }


        /* =====================================================
           CARD TOP LINE
        ====================================================== */

        .card-top-decoration {
          position: absolute;

          top: 0;

          left: 40px;
          right: 40px;

          height: 3px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #06b6d4,
              #14b8a6,
              #38bdf8,
              transparent
            );

          box-shadow:
            0 0 20px
              rgba(34, 211, 238, 0.4);
        }


        /* =====================================================
           LOGIN HEADER
        ====================================================== */

        .login-header {
          position: relative;

          z-index: 2;

          margin-bottom: 31px;
        }

        .login-icon {
          width: 52px;
          height: 52px;

          border-radius: 16px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 18px;

          color: #0891b2;

          border:
            1px solid
            rgba(8, 145, 178, 0.14);

          background:
            linear-gradient(
              135deg,
              rgba(34, 211, 238, 0.13),
              rgba(20, 184, 166, 0.07)
            );

          box-shadow:
            0 12px 30px
              rgba(8, 100, 120, 0.08),

            inset 0 1px
              rgba(255, 255, 255, 0.8);

          animation:
            loginIconFloat 4s ease-in-out infinite;
        }

        .welcome-badge {
          color: #0f9f91;

          font-size: 10px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 1.8px;

          margin-bottom: 9px;
        }

        .login-header h2 {
          margin: 0;

          color: #073b4c;

          font-size: 27px;

          line-height: 1.2;

          letter-spacing: -1px;

          font-weight: 800;
        }

        .login-header p {
          margin:
            9px
            0
            0;

          color: #71919a;

          font-size: 13px;

          line-height: 1.6;
        }


        /* =====================================================
           FORM
        ====================================================== */

        .form-group {
          position: relative;

          z-index: 2;

          margin-bottom: 22px;
        }

        .form-group label {
          display: block;

          margin-bottom: 9px;

          color: #245766;

          font-size: 12px;

          font-weight: 700;
        }

        .password-label-row {
          display: flex;

          justify-content: space-between;

          align-items: center;
        }

        .forgot-password {
          border: 0;

          background: transparent;

          padding: 0;

          color: #0786a0;

          cursor: pointer;

          font-size: 11px;

          font-weight: 700;

          transition:
            0.2s ease;
        }

        .forgot-password:hover {
          color: #06a6c4;
        }


        /* =====================================================
           INPUT
        ====================================================== */

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;

          left: 15px;

          top: 50%;

          transform:
            translateY(-50%);

          color: #77a0aa;

          pointer-events: none;

          transition:
            0.25s ease;
        }

        .input-wrapper input {
          width: 100%;

          height: 52px;

          border:
            1px solid
            rgba(8, 145, 178, 0.14);

          border-radius: 15px;

          outline: none;

          padding:
            0
            46px;

          color: #073b4c;

          background:
            rgba(255, 255, 255, 0.70);

          font-size: 13px;

          transition:
            0.25s ease;

          box-shadow:
            inset 0 1px 0
              rgba(255, 255, 255, 0.9);
        }

        .input-wrapper input::placeholder {
          color: #94afb6;
        }

        .input-wrapper input:hover {
          border-color:
            rgba(8, 145, 178, 0.25);
        }

        .input-wrapper input:focus {
          border-color:
            rgba(8, 145, 178, 0.48);

          background:
            #ffffff;

          box-shadow:
            0 0 0 4px
              rgba(34, 211, 238, 0.07),

            0 8px 25px
              rgba(8, 100, 120, 0.08);
        }

        .input-wrapper:focus-within
        .input-icon {
          color: #06a6c4;
        }


        /* =====================================================
           PASSWORD TOGGLE
        ====================================================== */

        .password-toggle {
          position: absolute;

          right: 14px;

          top: 50%;

          transform:
            translateY(-50%);

          display: flex;

          align-items: center;
          justify-content: center;

          border: 0;

          background: transparent;

          color: #70949d;

          cursor: pointer;

          padding: 4px;

          transition:
            0.2s ease;
        }

        .password-toggle:hover {
          color: #06a6c4;
        }


        /* =====================================================
           REMEMBER
        ====================================================== */

        .login-options {
          position: relative;

          z-index: 2;

          display: flex;

          justify-content: space-between;

          align-items: center;

          margin-top: -2px;

          margin-bottom: 23px;
        }

        .remember-option {
          display: flex !important;

          align-items: center;

          gap: 9px;

          cursor: pointer;

          margin: 0 !important;

          color: #72929b !important;

          font-size: 11px !important;

          font-weight: 600 !important;
        }

        .remember-option input {
          display: none;
        }

        .custom-checkbox {
          width: 17px;
          height: 17px;

          border-radius: 5px;

          display: flex;

          align-items: center;
          justify-content: center;

          color: transparent;

          border:
            1px solid
            rgba(8, 145, 178, 0.18);

          background:
            rgba(255, 255, 255, 0.8);

          transition:
            0.2s ease;
        }

        .remember-option
        input:checked
        + .custom-checkbox {
          color: #ffffff;

          border-color: #06b6d4;

          background:
            linear-gradient(
              135deg,
              #06b6d4,
              #14b8a6
            );

          box-shadow:
            0 0 15px
              rgba(34, 211, 238, 0.20);
        }


        /* =====================================================
           LOGIN BUTTON
        ====================================================== */

        .login-button {
          position: relative;

          z-index: 2;

          width: 100%;

          height: 54px;

          border: 0;

          border-radius: 15px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          cursor: pointer;

          color: #ffffff;

          font-size: 13px;

          font-weight: 850;

          background:
            linear-gradient(
              110deg,
              #0891b2,
              #06b6d4,
              #14b8a6
            );

          background-size: 200% 100%;

          box-shadow:
            0 14px 35px
              rgba(8, 145, 178, 0.18),

            inset 0 1px 0
              rgba(255, 255, 255, 0.35);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background-position 0.4s ease;
        }

        .login-button:hover {
          transform:
            translateY(-2px);

          background-position:
            100% 0;

          box-shadow:
            0 18px 45px
              rgba(8, 145, 178, 0.25),

            inset 0 1px 0
              rgba(255, 255, 255, 0.45);
        }

        .login-button:active {
          transform:
            translateY(0);
        }

        .login-button:disabled {
          cursor:
            not-allowed;

          opacity:
            0.8;
        }

        .login-button.loading {
          pointer-events:
            none;
        }


        /* =====================================================
           SPINNER
        ====================================================== */

        .spinner {
          width: 17px;
          height: 17px;

          border-radius: 50%;

          border:
            2px solid
            rgba(255, 255, 255, 0.35);

          border-top-color:
            #ffffff;

          animation:
           @keyframes spin 0.7s linear infinite;
        }


        /* =====================================================
           SECURITY
        ====================================================== */

        .security-note {
          position: relative;

          z-index: 2;

          display: flex;

          justify-content: center;

          align-items: center;

          gap: 7px;

          margin-top: 21px;

          color: #72949d;

          font-size: 10px;
        }

        .security-note svg {
          color: #14b8a6;
        }


        /* =====================================================
           LOGIN BOTTOM
        ====================================================== */

        .login-bottom {
          position: relative;

          z-index: 2;

          display: flex;

          justify-content: center;

          align-items: center;

          gap: 8px;

          margin-top: 31px;

          padding-top: 19px;

          border-top:
            1px solid
            rgba(8, 145, 178, 0.08);

          color: #78969e;

          font-size: 9px;

          font-weight: 600;
        }

        .login-bottom span:first-child {
          color: #19758a;
        }

        .bottom-dot {
          color: #8bb6bf;
        }


        /* =====================================================
           ANIMATIONS
        ====================================================== */

        @keyframes cardAppear {
          from {
            opacity: 0;

            transform:
              translateY(25px)
              scale(0.97);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }

        @keyframes iconFloat {
          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-5px);
          }
        }

        @keyframes loginIconFloat {
          0%,
          100% {
            transform:
              translateY(0)
              rotate(0deg);
          }

          50% {
            transform:
              translateY(-4px)
              rotate(2deg);
          }
        }

        @keyframes dotPulse {
          0%,
          100% {
            transform:
              scale(1);

            opacity: 1;
          }

          50% {
            transform:
              scale(1.35);

            opacity: 0.65;
          }
        }

        @keyframes gradientText {
          0% {
            background-position:
              0% center;
          }

          100% {
            background-position:
              250% center;
          }
        }

        @keyframes oceanGlowOne {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          50% {
            transform:
              translate3d(90px, 55px, 0)
              scale(1.12);
          }
        }

        @keyframes oceanGlowTwo {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          50% {
            transform:
              translate3d(-90px, -60px, 0)
              scale(1.15);
          }
        }

        @keyframes oceanGlowThree {
          0%,
          100% {
            transform:
              scale(1);

            opacity:
              0.4;
          }

          50% {
            transform:
              scale(1.3);

            opacity:
              0.8;
          }
        }

        @keyframes rayMove {
          0% {
            transform:
              translateX(-120px)
              rotate(24deg);

            opacity:
              0;
          }

          30% {
            opacity:
              0.16;
          }

          70% {
            opacity:
              0.1;
          }

          100% {
            transform:
              translateX(220px)
              rotate(24deg);

            opacity:
              0;
          }
        }

        @keyframes bubbleFloat {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          25% {
            transform:
              translate3d(12px, -35px, 0)
              scale(1.05);
          }

          50% {
            transform:
              translate3d(-8px, -70px, 0)
              scale(0.95);
          }

          75% {
            transform:
              translate3d(18px, -105px, 0)
              scale(1.08);
          }
        }

        @keyframes oceanFlow {
          0%,
          100% {
            transform:
              translateX(-2%)
              rotate(0deg)
              scaleY(1);
          }

          50% {
            transform:
              translateX(4%)
              rotate(2deg)
              scaleY(1.12);
          }
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0);

            opacity:
              0.2;
          }

          50% {
            transform:
              translate3d(25px, -40px, 0);

            opacity:
              0.8;
          }
        }

        @keyframes cardOrbOne {
          0%,
          100% {
            transform:
              translate(0, 0)
              scale(1);
          }

          50% {
            transform:
              translate(-20px, 15px)
              scale(1.15);
          }
        }

        @keyframes cardOrbTwo {
          0%,
          100% {
            transform:
              translate(0, 0)
              scale(1);
          }

          50% {
            transform:
              translate(25px, -20px)
              scale(1.1);
          }
        }

        @keyframes spin {
          to {
            transform:
              rotate(360deg);
          }
        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1100px) {

          .login-container {
            grid-template-columns:
              1fr
              450px;

            gap: 35px;

            padding: 25px;
          }

          .showcase-content h1 {
            font-size: 58px;
          }

          .login-showcase {
            padding-left: 10px;
          }
        }


        /* =====================================================
           MOBILE / SMALL LAPTOP
        ====================================================== */

        @media (max-width: 900px) {

          .login-container {
            grid-template-columns: 1fr;

            max-width: 650px;

            gap: 20px;
          }

          .login-showcase {
            min-height: auto;

            padding:
              20px
              0;
          }

          .showcase-content {
            margin-top: 70px;
          }

          .showcase-content h1 {
            font-size: 58px;
          }

          .showcase-footer {
            margin-top: 50px;
          }

          .login-panel {
            width: 100%;
          }
        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 600px) {

          .login-container {
            padding: 18px;
          }

          .login-showcase {
            padding:
              10px
              0;
          }

          .brand-icon {
            width: 42px;
            height: 42px;
          }

          .brand-name {
            font-size: 19px;
          }

          .showcase-content {
            margin-top: 50px;
          }

          .showcase-content h1 {
            font-size: 45px;

            letter-spacing:
              -2.5px;
          }

          .showcase-content > p {
            font-size: 14px;
          }

          .feature-list {
            margin-top: 25px;
          }

          .feature-item {
            width: 100%;
          }

          .showcase-footer {
            display: none;
          }

          .login-card {
            padding:
              29px
              22px;

            border-radius:
              24px;
          }

          .login-header h2 {
            font-size: 24px;
          }

          .card-top-decoration {
            left: 25px;
            right: 25px;
          }
        }


        /* =====================================================
           VERY SMALL MOBILE
        ====================================================== */

        @media (max-width: 400px) {

          .showcase-content h1 {
            font-size: 39px;
          }

          .login-card {
            padding:
              25px
              18px;
          }

          .login-header h2 {
            font-size: 22px;
          }
        }


        /* =====================================================
           REDUCE MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration:
              0.01ms !important;

            animation-iteration-count:
              1 !important;

            scroll-behavior:
              auto !important;
          }
        }

      `}),T&&e.jsx("div",{onMouseDown:a=>a.target===a.currentTarget&&!n&&d(!1),style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:16,background:"rgba(6,59,70,.45)"},children:e.jsxs("form",{onSubmit:C,role:"dialog","aria-modal":"true","aria-labelledby":"forgot-title",style:{width:"100%",maxWidth:420,background:"#fff",borderRadius:18,padding:24,boxShadow:"0 24px 60px rgba(6,59,70,.25)",display:"flex",flexDirection:"column",gap:12,color:"#123B5D",fontFamily:"inherit"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{style:{width:40,height:40,borderRadius:12,background:"#E8F7F8",color:"#16A6B8",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(x,{size:19})}),e.jsx("h3",{id:"forgot-title",style:{margin:0,fontSize:18},children:"Forgot your password?"})]}),j?e.jsxs(e.Fragment,{children:[e.jsxs("p",{style:{margin:0,fontSize:14,color:"#17724A",background:"#EAF8F1",border:"1px solid #BDE5D0",borderRadius:12,padding:"10px 12px",lineHeight:1.5},children:[e.jsx(h,{size:15,style:{verticalAlign:"-3px",marginRight:6}}),j]}),e.jsx("p",{style:{margin:0,fontSize:12,color:"#6E8799"},children:"When your administrator sets a new password you will receive an email with a one-time link to view it."}),e.jsx("button",{type:"button",onClick:()=>d(!1),className:"login-button",style:{marginTop:4},children:"Back to login"})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{margin:0,fontSize:13,color:"#4f6f7a",lineHeight:1.5},children:"Passwords are managed by your administrator. Enter your email and we'll send them a reset request."}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(z,{className:"input-icon",size:18}),e.jsx("input",{type:"email",autoFocus:!0,value:m,onChange:a=>w(a.target.value),placeholder:"you@company.com","aria-label":"Email address"})]}),k&&e.jsx("p",{style:{margin:0,fontSize:13,color:"#b34444"},children:k}),e.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",marginTop:4},children:[e.jsx("button",{type:"button",onClick:()=>d(!1),disabled:n,style:{padding:"10px 16px",borderRadius:10,border:"1px solid #D5E7EE",background:"#fff",color:"#4f6f7a",fontWeight:600,cursor:"pointer"},children:"Cancel"}),e.jsx("button",{type:"submit",disabled:n,style:{padding:"10px 16px",borderRadius:10,border:"none",background:"linear-gradient(135deg,#16A6B8,#0b8f87)",color:"#fff",fontWeight:700,cursor:"pointer",opacity:n?.7:1},children:n?"Sending...":"Send request to admin"})]})]})]})})]})};export{ne as default};
