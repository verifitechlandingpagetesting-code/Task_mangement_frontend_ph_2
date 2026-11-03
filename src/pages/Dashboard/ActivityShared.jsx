import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Monitor, Smartphone, Tablet, X, Loader2, AlertTriangle, LogIn, Clock3, Globe, History } from "lucide-react";
import { getSocket } from "../../services/socket";
import { activityApi } from "../../services/activity";
import { ROLE_LABELS } from "../../services/permissions";
import { Pagination } from "../../components/Pagination";

/* =========================================================
   Shared pieces of the Activity Monitoring pages
   (ActivityMonitor, ActivityOrganizations, LoginHistory)
========================================================= */

/* ---------------- formatting ---------------- */

export const formatDuration = (ms) => {
  if (ms === null || ms === undefined) return "—";
  const total = Math.round(ms / 1000);
  if (total < 60) return `${total}s`;
  const m = Math.floor(total / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ${m % 60}m`;
  return `${Math.floor(h / 24)}d ${h % 24}h`;
};

export const timeAgo = (date) => {
  if (!date) return "Never";
  const diff = Date.now() - new Date(date).getTime();
  if (diff < 45_000) return "Just now";
  const m = Math.round(diff / 60_000);
  if (m < 60) return `${m} min ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h} h ago`;
  const d = Math.round(h / 24);
  return d < 30 ? `${d} d ago` : new Date(date).toLocaleDateString();
};

export const formatDateTime = (date) =>
  date ? new Date(date).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "—";

export const roleLabel = (role) => ROLE_LABELS[role] || role || "—";

export const SESSION_STATUS_LABELS = {
  online: "Online",
  active: "Active",
  logged_out: "Logged out",
  timed_out: "Disconnected",
  expired: "Expired",
};

/* ---------------- small UI ---------------- */

export const StatusPill = ({ online, label }) => (
  <span className={`act-pill ${online ? "on" : "off"}`}>
    <i aria-hidden="true" />
    {label || (online ? "Online" : "Offline")}
  </span>
);

export const SessionStatus = ({ status, online }) => {
  const key = online ? "online" : status;
  return <span className={`act-sess s-${key}`}>{SESSION_STATUS_LABELS[key] || key || "—"}</span>;
};

export const DeviceLabel = ({ device }) => {
  if (!device) return <span className="act-muted">—</span>;
  const Icon = device.type === "Mobile" ? Smartphone : device.type === "Tablet" ? Tablet : Monitor;
  return (
    <span className="act-device" title={`${device.browser} on ${device.os} (${device.type})`}>
      <Icon size={14} /> {device.browser} · {device.os}
    </span>
  );
};

export const StatCard = ({ icon: Icon, label, value, hint, tone = "teal" }) => (
  <div className={`act-stat t-${tone}`}>
    <div className="act-stat-icon">{Icon && <Icon size={18} />}</div>
    <div>
      <span>{label}</span>
      <strong>{value ?? "—"}</strong>
      {hint && <small>{hint}</small>}
    </div>
  </div>
);

export const StateBox = ({ loading, error, empty, onRetry }) => {
  if (error) {
    return (
      <div className="act-state error">
        <AlertTriangle size={16} /> {error}
        {onRetry && <button type="button" className="act-btn" onClick={onRetry}>Retry</button>}
      </div>
    );
  }
  if (loading) return <div className="act-state"><Loader2 size={16} className="act-spin" /> Loading…</div>;
  if (empty) return <div className="act-state">{empty}</div>;
  return null;
};

// Page tabs — SuperAdmin gets the multi-tenant view as well
export const ActivityTabs = ({ role }) => {
  const tabs = role === "SuperAdmin"
    ? [
        { to: "/superadmin/activity", label: "Organizations" },
        { to: "/dashboard/activity", label: "All Users" },
        { to: "/dashboard/activity/history", label: "Login History" },
      ]
    : [
        { to: "/dashboard/activity", label: "User Activity" },
        { to: "/dashboard/activity/history", label: "Login History" },
      ];
  return (
    <nav className="act-tabs" aria-label="Activity monitoring sections">
      {tabs.map((t) => (
        <NavLink key={t.to} to={t.to} end className={({ isActive }) => (isActive ? "on" : "")}>
          {t.label}
        </NavLink>
      ))}
    </nav>
  );
};

/* ---------------- live updates ---------------- */

// Re-runs `reload` when the server reports activity in the viewer's scope
// (Socket.IO "activity:update"), and every `everyMs` as a fallback / to tick durations.
export const useActivityLive = (reload, everyMs = 60_000) => {
  const ref = useRef(reload);
  ref.current = reload;
  const [live, setLive] = useState(false);

  useEffect(() => {
    let debounce = null;
    const trigger = () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => ref.current?.({ silent: true }), 1200);
    };
    const socket = getSocket();
    const onConnect = () => setLive(true);
    const onDisconnect = () => setLive(false);
    if (socket) {
      setLive(socket.connected);
      socket.on("activity:update", trigger);
      socket.on("connect", onConnect);
      socket.on("disconnect", onDisconnect);
    }
    const interval = setInterval(() => ref.current?.({ silent: true }), everyMs);
    return () => {
      clearTimeout(debounce);
      clearInterval(interval);
      if (socket) {
        socket.off("activity:update", trigger);
        socket.off("connect", onConnect);
        socket.off("disconnect", onDisconnect);
      }
    };
  }, [everyMs]);

  return live;
};

export const LiveBadge = ({ live }) => (
  <span className={`act-live ${live ? "on" : ""}`} title={live ? "Updates arrive in real time" : "Refreshing every minute"}>
    <i aria-hidden="true" /> {live ? "Live" : "Auto-refresh"}
  </span>
);

// Server-side pagination state shaped for the shared <Pagination /> component
export const usePagedState = (initialSize = 10) => {
  const [page, setPage] = useState(1);
  const [pageSize, setSize] = useState(initialSize);
  const setPageSize = (n) => {
    setSize(n);
    setPage(1);
  };
  return { page, setPage, pageSize, setPageSize };
};

/* ---------------- one person's login history (drawer) ---------------- */

export const UserHistoryDrawer = ({ userId, onClose }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const paging = usePagedState(10);

  const load = useCallback(async ({ silent } = {}) => {
    if (!silent) setLoading(true);
    setError("");
    try {
      setData(await activityApi.userHistory(userId, { page: paging.page, limit: paging.pageSize }));
    } catch (err) {
      setError(err.response?.data?.message || "Could not load this person's login history.");
    } finally {
      setLoading(false);
    }
  }, [userId, paging.page, paging.pageSize]);

  useEffect(() => {
    load();
  }, [load]);
  useActivityLive(load);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [onClose]);

  const u = data?.user;
  return (
    <div className="act-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <aside className="act-drawer" role="dialog" aria-label="Login history">
        <div className="act-drawer-head">
          <div>
            <h3>{u?.name || "Login history"}</h3>
            {u && <p>{[roleLabel(u.role), u.organization?.name, u.email].filter(Boolean).join(" · ")}</p>}
          </div>
          <button type="button" className="act-btn" onClick={onClose} aria-label="Close"><X size={15} /></button>
        </div>

        {u && (
          <>
            <div className="act-facts">
              <span><StatusPill online={u.online} label={u.online ? `Online · ${u.activeSessions} session${u.activeSessions === 1 ? "" : "s"}` : "Offline"} /></span>
              <span><LogIn size={14} /> Last login: <b>{formatDateTime(u.lastLoginAt)}</b></span>
              <span><Clock3 size={14} /> Last active: <b>{timeAgo(u.lastActiveAt)}</b></span>
            </div>
            <div className="act-mini-stats">
              <div><span>Sessions</span><strong>{data.stats.totalSessions}</strong></div>
              <div><span>Last 30 days</span><strong>{data.stats.sessionsLast30Days}</strong></div>
              <div><span>Avg. session</span><strong>{formatDuration(data.stats.avgDurationMs)}</strong></div>
            </div>
          </>
        )}

        <h4><History size={14} /> Sessions</h4>
        <StateBox loading={loading && !data} error={error} onRetry={load} empty={data && !data.data.length ? "No logins recorded yet." : ""} />
        {data?.data?.length > 0 && (
          <div className="act-session-list">
            {data.data.map((s) => (
              <div key={s._id} className="act-session">
                <div className="act-session-top">
                  <SessionStatus status={s.status} online={s.online} />
                  {s.current && <span className="act-tag">This browser</span>}
                  <span className="act-muted">{formatDuration(s.durationMs)}</span>
                </div>
                <div className="act-session-grid">
                  <span><LogIn size={12} /> {formatDateTime(s.loginAt)}</span>
                  <span>Logout: {s.logoutAt ? formatDateTime(s.logoutAt) : s.endedAt ? `${SESSION_STATUS_LABELS[s.status]} ${formatDateTime(s.endedAt)}` : "—"}</span>
                  <DeviceLabel device={s.device} />
                  <span><Globe size={12} /> {s.ip || "—"}</span>
                </div>
              </div>
            ))}
            <Pagination {...paging} total={data.pagination.total} totalPages={data.pagination.totalPages} label="sessions" />
          </div>
        )}
      </aside>
    </div>
  );
};

/* ---------------- styles (shared by all activity pages) ---------------- */

export const activityCss = `
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
`;
