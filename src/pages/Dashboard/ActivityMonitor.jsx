import React, { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Activity, Users, Wifi, WifiOff, LogIn, UserCheck, Search, RefreshCw, ArrowLeft, ArrowUpDown, ChevronRight,
} from "lucide-react";
import { activityApi } from "../../services/activity";
import { getStoredUser } from "../../services/permissions";
import { Pagination } from "../../components/Pagination";
import {
  activityCss, ActivityTabs, StatCard, StatusPill, DeviceLabel, StateBox, LiveBadge, UserHistoryDrawer,
  useActivityLive, usePagedState, formatDuration, formatDateTime, timeAgo, roleLabel,
} from "./ActivityShared";

/* =========================================================
   Activity Monitoring — user activity of ONE organization (Admin)
   Admin       → always their own organization (the backend ignores nothing from the
                 browser here: it takes the organization from the login token)
   SuperAdmin  → every user of every organization, or one organization via ?org=<id>
                 (opened from the multi-tenant dashboard)
========================================================= */

const initials = (name = "") => name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join("") || "?";

const useDebounced = (value, ms = 350) => {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return v;
};

const ActivityMonitor = () => {
  const me = getStoredUser();
  const isSuper = me?.role === "SuperAdmin";
  const [params] = useSearchParams();
  // only a SuperAdmin may pick an organization; an Admin's own org is applied by the backend
  const orgId = isSuper ? params.get("org") || "" : "";

  const [summary, setSummary] = useState(null);
  const [summaryError, setSummaryError] = useState("");
  const [rows, setRows] = useState([]);
  const [pagination, setPagination] = useState({ total: 0, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [role, setRole] = useState("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setSort] = useState({ field: "lastLogin", order: "desc" });
  const paging = usePagedState(10);
  const q = useDebounced(search);

  // new filters → first page
  const { setPage } = paging;
  useEffect(() => {
    setPage(1);
  }, [q, status, role, from, to, sort, orgId, setPage]);

  const loadSummary = useCallback(async () => {
    try {
      setSummary(await (orgId ? activityApi.organization(orgId) : activityApi.summary()));
      setSummaryError("");
    } catch (err) {
      setSummaryError(err.response?.data?.message || "Could not load the activity summary.");
    }
  }, [orgId]);

  const loadUsers = useCallback(async ({ silent } = {}) => {
    if (!silent) setLoading(true);
    try {
      const res = await activityApi.users({
        orgId, search: q, status, role, from, to,
        sort: sort.field, order: sort.order, page: paging.page, limit: paging.pageSize,
      });
      setRows(res.data || []);
      setPagination(res.pagination || { total: 0, totalPages: 1 });
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Could not load user activity.");
    } finally {
      setLoading(false);
    }
  }, [orgId, q, status, role, from, to, sort, paging.page, paging.pageSize]);

  useEffect(() => {
    loadSummary();
  }, [loadSummary]);
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const reloadAll = useCallback((opts) => {
    loadSummary();
    loadUsers(opts);
  }, [loadSummary, loadUsers]);
  const live = useActivityLive(reloadAll);

  const toggleSort = (field) =>
    setSort((s) => (s.field === field ? { field, order: s.order === "desc" ? "asc" : "desc" } : { field, order: "desc" }));
  const SortHead = ({ field, children }) => (
    <th className={sort.field === field ? "sorted" : ""} aria-sort={sort.field === field ? (sort.order === "asc" ? "ascending" : "descending") : "none"}>
      <button type="button" onClick={() => toggleSort(field)}>
        {children} <ArrowUpDown size={11} />
      </button>
    </th>
  );

  const clearFilters = () => {
    setSearch("");
    setStatus("all");
    setRole("all");
    setFrom("");
    setTo("");
  };
  const filtered = search || status !== "all" || role !== "all" || from || to;

  const org = summary?.organization;
  const title = orgId ? org?.name || "Organization activity" : isSuper ? "All Users — Activity" : "Activity Monitoring";
  const subtitle = orgId
    ? `Users, sessions and online status of ${org?.name || "this organization"}${org?.status === "Inactive" ? " (inactive)" : ""}.`
    : isSuper
      ? "Login and online status of every user across all organizations."
      : `Login and online status of everyone in ${org?.name || "your organization"}.`;

  return (
    <div className="act-page">
      <style>{activityCss}</style>

      <section className="act-hero">
        <div className="act-hero-row">
          <div className="act-hero-left">
            <div className="act-hero-icon"><Activity size={26} /></div>
            <div>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
          </div>
          <div className="act-hero-actions">
            <LiveBadge live={live} />
            {orgId && (
              <Link className="act-hero-btn" to="/superadmin/activity"><ArrowLeft size={15} /> All organizations</Link>
            )}
            <button type="button" className="act-hero-btn" onClick={() => reloadAll()} disabled={loading}>
              <RefreshCw size={15} className={loading ? "act-spin" : ""} /> Refresh
            </button>
          </div>
        </div>
      </section>

      <ActivityTabs role={me?.role} />

      {summaryError && <StateBox error={summaryError} onRetry={loadSummary} />}
      <section className="act-stats" aria-label="Activity summary">
        <StatCard icon={Users} label={isSuper && !orgId ? "Total users" : "Total employees"} value={summary?.totalEmployees} />
        <StatCard icon={Wifi} tone="green" label="Online now" value={summary?.onlineUsers} hint={summary ? `No signal for ${Math.round(summary.presenceTimeoutSec / 60)} min = offline` : ""} />
        <StatCard icon={WifiOff} tone="gray" label="Offline" value={summary?.offlineUsers} />
        <StatCard icon={LogIn} tone="blue" label="Logins today" value={summary?.loginsToday} />
        <StatCard icon={UserCheck} tone="violet" label="Active today" value={summary?.activeUsersToday} hint="people who signed in today" />
      </section>

      <div className="act-grid-2">
        <section className="act-card">
          <div className="act-card-head">
            <h3><Users size={16} /> User activity</h3>
            <span>{pagination.total} {pagination.total === 1 ? "person" : "people"}</span>
          </div>

          <div className="act-filters">
            <label className="act-search">
              <span>Search</span>
              <div>
                <Search size={14} />
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={isSuper && !orgId ? "Name, email or organization…" : "Name or email…"} />
              </div>
            </label>
            <label>
              <span>Status</span>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="all">Everyone</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </label>
            <label>
              <span>Role</span>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="all">All roles</option>
                {isSuper && !orgId && <option value="SuperAdmin">Super Admin</option>}
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="User">Team Member</option>
              </select>
            </label>
            <label>
              <span>Last login from</span>
              <input type="date" value={from} max={to || undefined} onChange={(e) => setFrom(e.target.value)} />
            </label>
            <label>
              <span>Last login to</span>
              <input type="date" value={to} min={from || undefined} onChange={(e) => setTo(e.target.value)} />
            </label>
            <button type="button" className="act-btn" onClick={clearFilters} disabled={!filtered}>Clear</button>
          </div>

          <StateBox
            loading={loading && !rows.length}
            error={error}
            onRetry={() => loadUsers()}
            empty={!loading && !rows.length ? (filtered ? "No users match these filters." : "No users in this organization yet.") : ""}
          />

          {rows.length > 0 && !error && (
            <div className="act-table-wrap">
              <table className="act-table">
                <thead>
                  <tr>
                    <SortHead field="name">User</SortHead>
                    <th>Role</th>
                    {isSuper && !orgId && <th>Organization</th>}
                    <th>Status</th>
                    <SortHead field="lastLogin">Last login</SortHead>
                    <SortHead field="lastActive">Last active</SortHead>
                    <th>Session</th>
                    <th>Device</th>
                    <th aria-label="Open" />
                  </tr>
                </thead>
                <tbody>
                  {rows.map((u) => (
                    <tr
                      key={u._id}
                      className="click"
                      tabIndex={0}
                      onClick={() => setSelected(u._id)}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setSelected(u._id))}
                      aria-label={`Login history of ${u.name}`}
                    >
                      <td>
                        <div className="act-person">
                          <span className={`act-avatar ${u.online ? "on" : ""}`}>{initials(u.name)}<i /></span>
                          <div>
                            <strong>{u.name}</strong>
                            <small>{u.email}</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        {roleLabel(u.role)}
                        {u.accountStatus === "Inactive" && <small>Account inactive</small>}
                      </td>
                      {isSuper && !orgId && <td>{u.organization?.name || <span className="act-muted">—</span>}</td>}
                      <td>
                        <StatusPill online={u.online} />
                        {u.activeSessions > 1 && <small>{u.activeSessions} sessions</small>}
                      </td>
                      <td>
                        {u.lastLoginAt ? timeAgo(u.lastLoginAt) : <span className="act-muted">Never</span>}
                        {u.lastLoginAt && <small>{formatDateTime(u.lastLoginAt)}</small>}
                      </td>
                      <td>{u.lastActiveAt ? timeAgo(u.lastActiveAt) : <span className="act-muted">—</span>}</td>
                      <td>
                        {formatDuration(u.sessionDurationMs)}
                        {u.sessionDurationMs !== null && <small>{u.online ? "current" : "last session"}</small>}
                      </td>
                      <td><DeviceLabel device={u.device} /></td>
                      <td><ChevronRight size={14} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ padding: "0 14px 14px" }}>
                <Pagination {...paging} total={pagination.total} totalPages={pagination.totalPages} label="people" />
              </div>
            </div>
          )}
        </section>

        <section className="act-card">
          <div className="act-card-head">
            <h3><UserCheck size={16} /> Recently active</h3>
          </div>
          {!summary ? (
            <StateBox loading={!summaryError} />
          ) : !summary.recentActiveUsers?.length ? (
            <StateBox empty="Nobody has been active yet." />
          ) : (
            <div className="act-recent">
              {summary.recentActiveUsers.map((u) => (
                <button type="button" key={u._id} className="act-recent-row" onClick={() => setSelected(u._id)}>
                  <span className={`act-avatar ${u.online ? "on" : ""}`}>{initials(u.name)}<i /></span>
                  <div>
                    <b>{u.name}</b>
                    <small>{roleLabel(u.role)} · {timeAgo(u.lastActiveAt)}</small>
                  </div>
                  <StatusPill online={u.online} />
                </button>
              ))}
            </div>
          )}
        </section>
      </div>

      {selected && <UserHistoryDrawer userId={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default ActivityMonitor;
