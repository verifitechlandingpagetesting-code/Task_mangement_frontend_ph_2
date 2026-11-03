import React, { useCallback, useEffect, useState } from "react";
import { History, Search, RefreshCw } from "lucide-react";
import { activityApi } from "../../services/activity";
import { getStoredUser } from "../../services/permissions";
import { Pagination } from "../../components/Pagination";
import {
  activityCss, ActivityTabs, StateBox, LiveBadge, SessionStatus, DeviceLabel, UserHistoryDrawer,
  useActivityLive, usePagedState, formatDuration, formatDateTime, roleLabel, SESSION_STATUS_LABELS,
} from "./ActivityShared";

/* =========================================================
   Login history — every login session in the viewer's scope.
   Admin      → their organization only (decided by the backend)
   SuperAdmin → all organizations, optionally narrowed to one
========================================================= */

const LoginHistory = () => {
  const me = getStoredUser();
  const isSuper = me?.role === "SuperAdmin";

  const [rows, setRows] = useState([]);
  const [pagination, setPagination] = useState({ total: 0, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);
  const [orgOptions, setOrgOptions] = useState([]);

  const [search, setSearch] = useState("");
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [orgId, setOrgId] = useState("all");
  const paging = usePagedState(20);

  useEffect(() => {
    const t = setTimeout(() => setQ(search), 350);
    return () => clearTimeout(t);
  }, [search]);
  const { setPage } = paging;
  useEffect(() => {
    setPage(1);
  }, [q, status, from, to, orgId, setPage]);

  // organization picker (SuperAdmin only)
  useEffect(() => {
    if (!isSuper) return;
    activityApi
      .organizations({ sort: "name", order: "asc", limit: 100 })
      .then((r) => setOrgOptions(r.data || []))
      .catch(() => setOrgOptions([]));
  }, [isSuper]);

  const load = useCallback(async ({ silent } = {}) => {
    if (!silent) setLoading(true);
    try {
      const res = await activityApi.history({
        search: q, status, from, to, orgId: isSuper ? orgId : "", page: paging.page, limit: paging.pageSize,
      });
      setRows(res.data || []);
      setPagination(res.pagination || { total: 0, totalPages: 1 });
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Could not load the login history.");
    } finally {
      setLoading(false);
    }
  }, [q, status, from, to, orgId, isSuper, paging.page, paging.pageSize]);

  useEffect(() => {
    load();
  }, [load]);
  const live = useActivityLive(load);

  const filtered = search || status !== "all" || from || to || orgId !== "all";
  const clear = () => {
    setSearch("");
    setStatus("all");
    setFrom("");
    setTo("");
    setOrgId("all");
  };

  return (
    <div className="act-page">
      <style>{activityCss}</style>

      <section className="act-hero">
        <div className="act-hero-row">
          <div className="act-hero-left">
            <div className="act-hero-icon"><History size={26} /></div>
            <div>
              <h1>Login History</h1>
              <p>{isSuper ? "Every login session across all organizations." : "Every login session in your organization."}</p>
            </div>
          </div>
          <div className="act-hero-actions">
            <LiveBadge live={live} />
            <button type="button" className="act-hero-btn" onClick={() => load()} disabled={loading}>
              <RefreshCw size={15} className={loading ? "act-spin" : ""} /> Refresh
            </button>
          </div>
        </div>
      </section>

      <ActivityTabs role={me?.role} />

      <section className="act-card">
        <div className="act-card-head">
          <h3><History size={16} /> Sessions</h3>
          <span>{pagination.total} session{pagination.total === 1 ? "" : "s"}</span>
        </div>

        <div className="act-filters">
          <label className="act-search">
            <span>Search</span>
            <div>
              <Search size={14} />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Name or email…" />
            </div>
          </label>
          {isSuper ? (
            <label>
              <span>Organization</span>
              <select value={orgId} onChange={(e) => setOrgId(e.target.value)}>
                <option value="all">All organizations</option>
                {orgOptions.map((o) => <option key={o._id} value={o._id}>{o.name}</option>)}
              </select>
            </label>
          ) : null}
          <label>
            <span>Session status</span>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="all">All</option>
              <option value="online">Online now</option>
              {["logged_out", "timed_out", "expired"].map((s) => <option key={s} value={s}>{SESSION_STATUS_LABELS[s]}</option>)}
            </select>
          </label>
          <label>
            <span>Login from</span>
            <input type="date" value={from} max={to || undefined} onChange={(e) => setFrom(e.target.value)} />
          </label>
          <label>
            <span>Login to</span>
            <input type="date" value={to} min={from || undefined} onChange={(e) => setTo(e.target.value)} />
          </label>
          {!isSuper && <span aria-hidden="true" />}
          <button type="button" className="act-btn" onClick={clear} disabled={!filtered}>Clear</button>
        </div>

        <StateBox
          loading={loading && !rows.length}
          error={error}
          onRetry={() => load()}
          empty={!loading && !rows.length ? (filtered ? "No sessions match these filters." : "No logins recorded yet.") : ""}
        />

        {rows.length > 0 && !error && (
          <div className="act-table-wrap">
            <table className="act-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  {isSuper && <th>Organization</th>}
                  <th>Login</th>
                  <th>Logout / ended</th>
                  <th>Duration</th>
                  <th>IP address</th>
                  <th>Device</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((s) => (
                  <tr
                    key={s._id}
                    className="click"
                    tabIndex={0}
                    onClick={() => setSelected(s.user._id)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setSelected(s.user._id))}
                    aria-label={`Login history of ${s.user.name}`}
                  >
                    <td>
                      <strong>{s.user.name}</strong>
                      <small>{roleLabel(s.user.role)}{s.current ? " · this browser" : ""}</small>
                    </td>
                    <td>{s.user.email}</td>
                    {isSuper && <td>{s.organization?.name || <span className="act-muted">Platform</span>}</td>}
                    <td>{formatDateTime(s.loginAt)}</td>
                    <td>
                      {s.logoutAt ? formatDateTime(s.logoutAt) : s.endedAt && !s.online ? formatDateTime(s.endedAt) : <span className="act-muted">—</span>}
                    </td>
                    <td>{formatDuration(s.durationMs)}</td>
                    <td>{s.ip || <span className="act-muted">—</span>}</td>
                    <td><DeviceLabel device={s.device} /></td>
                    <td><SessionStatus status={s.status} online={s.online} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: "0 14px 14px" }}>
              <Pagination {...paging} total={pagination.total} totalPages={pagination.totalPages} label="sessions" />
            </div>
          </div>
        )}
      </section>

      {selected && <UserHistoryDrawer userId={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default LoginHistory;
