import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Globe, Building2, ShieldCheck, Users, Wifi, WifiOff, LogIn, Search, RefreshCw, ArrowUpDown, ChevronRight, BarChart3, History, LayoutDashboard,
} from "lucide-react";
import { activityApi } from "../../services/activity";
import { Pagination } from "../../components/Pagination";
import {
  activityCss, ActivityTabs, StatCard, StateBox, LiveBadge, SessionStatus, DeviceLabel,
  useActivityLive, usePagedState, formatDateTime, timeAgo, roleLabel,
} from "./ActivityShared";

/* =========================================================
   SuperAdmin — Multi-Tenant Activity Dashboard
   Global numbers, one row per organization (Admin account),
   comparison of the busiest organizations and the latest logins everywhere.
   Click an organization → /dashboard/activity?org=<id> (its user activity).
   The backend rejects every API here for anyone but a SuperAdmin.
========================================================= */

const ActivityOrganizations = () => {
  const navigate = useNavigate();
  const [summary, setSummary] = useState(null);
  const [summaryError, setSummaryError] = useState("");
  const [orgs, setOrgs] = useState([]);
  const [pagination, setPagination] = useState({ total: 0, totalPages: 1 });
  const [compare, setCompare] = useState([]);
  const [recent, setRecent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState({ field: "onlineUsers", order: "desc" });
  const paging = usePagedState(10);

  useEffect(() => {
    const t = setTimeout(() => setQ(search), 350);
    return () => clearTimeout(t);
  }, [search]);
  const { setPage } = paging;
  useEffect(() => {
    setPage(1);
  }, [q, status, sort, setPage]);

  const loadSummary = useCallback(async () => {
    try {
      const [s, r, c] = await Promise.all([
        activityApi.summary(),
        activityApi.recent({ limit: 8 }),
        // busiest organizations right now, for the comparison chart
        activityApi.organizations({ sort: "onlineUsers", order: "desc", limit: 8 }),
      ]);
      setSummary(s);
      setRecent(r);
      setCompare(c.data || []);
      setSummaryError("");
    } catch (err) {
      setSummaryError(err.response?.data?.message || "Could not load the global summary.");
    }
  }, []);

  const loadOrgs = useCallback(async ({ silent } = {}) => {
    if (!silent) setLoading(true);
    try {
      const res = await activityApi.organizations({
        search: q, status, sort: sort.field, order: sort.order, page: paging.page, limit: paging.pageSize,
      });
      setOrgs(res.data || []);
      setPagination(res.pagination || { total: 0, totalPages: 1 });
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Could not load organizations.");
    } finally {
      setLoading(false);
    }
  }, [q, status, sort, paging.page, paging.pageSize]);

  useEffect(() => {
    loadSummary();
  }, [loadSummary]);
  useEffect(() => {
    loadOrgs();
  }, [loadOrgs]);

  const reloadAll = useCallback((opts) => {
    loadSummary();
    loadOrgs(opts);
  }, [loadSummary, loadOrgs]);
  const live = useActivityLive(reloadAll);

  const openOrg = (id) => navigate(`/dashboard/activity?org=${id}`);

  const toggleSort = (field) =>
    setSort((s) => (s.field === field ? { field, order: s.order === "desc" ? "asc" : "desc" } : { field, order: field === "name" ? "asc" : "desc" }));
  const SortHead = ({ field, children }) => (
    <th className={sort.field === field ? "sorted" : ""} aria-sort={sort.field === field ? (sort.order === "asc" ? "ascending" : "descending") : "none"}>
      <button type="button" onClick={() => toggleSort(field)}>
        {children} <ArrowUpDown size={11} />
      </button>
    </th>
  );

  const maxUsers = Math.max(1, ...compare.map((o) => o.totalUsers));

  return (
    <div className="act-page">
      <style>{activityCss}</style>

      <section className="act-hero">
        <div className="act-hero-row">
          <div className="act-hero-left">
            <div className="act-hero-icon"><Globe size={26} /></div>
            <div>
              <h1>Multi-Tenant Activity</h1>
              <p>Who is online across every organization, logins today and the latest sign-ins.</p>
            </div>
          </div>
          <div className="act-hero-actions">
            <LiveBadge live={live} />
            <button type="button" className="act-hero-btn" onClick={() => reloadAll()} disabled={loading}>
              <RefreshCw size={15} className={loading ? "act-spin" : ""} /> Refresh
            </button>
          </div>
        </div>
      </section>

      <ActivityTabs role="SuperAdmin" />

      {summaryError && <StateBox error={summaryError} onRetry={loadSummary} />}
      <section className="act-stats" aria-label="Global activity summary">
        <StatCard icon={Building2} label="Organizations" value={summary?.totalOrganizations} hint={summary ? `${summary.activeOrganizations} active` : ""} />
        <StatCard icon={ShieldCheck} tone="violet" label="Admins" value={summary?.totalAdmins} />
        <StatCard icon={Users} tone="blue" label="Users" value={summary?.totalUsers} hint="managers + team members" />
        <StatCard icon={Wifi} tone="green" label="Online now" value={summary?.onlineUsers} />
        <StatCard icon={WifiOff} tone="gray" label="Offline" value={summary?.offlineUsers} />
        <StatCard icon={LogIn} tone="amber" label="Logins today" value={summary?.loginsToday} />
      </section>

      <section className="act-card">
        <div className="act-card-head">
          <h3><Building2 size={16} /> Organizations</h3>
          <span>{pagination.total} organization{pagination.total === 1 ? "" : "s"}</span>
        </div>
        <div className="act-filters" style={{ gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr) auto" }}>
          <label className="act-search" style={{ gridColumn: "auto" }}>
            <span>Search</span>
            <div>
              <Search size={14} />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Organization, admin name or email…" />
            </div>
          </label>
          <label>
            <span>Status</span>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="all">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <button type="button" className="act-btn" onClick={() => navigate("/dashboard/activity")}>
            <Search size={14} /> Search all users
          </button>
        </div>

        <StateBox
          loading={loading && !orgs.length}
          error={error}
          onRetry={() => loadOrgs()}
          empty={!loading && !orgs.length ? (search || status !== "all" ? "No organizations match these filters." : "No organizations yet.") : ""}
        />

        {orgs.length > 0 && !error && (
          <div className="act-table-wrap">
            <table className="act-table">
              <thead>
                <tr>
                  <SortHead field="name">Organization</SortHead>
                  <SortHead field="totalUsers">Total users</SortHead>
                  <SortHead field="onlineUsers">Online</SortHead>
                  <th>Offline</th>
                  <SortHead field="loginsToday">Logins today</SortHead>
                  <SortHead field="lastActivity">Last activity</SortHead>
                  <th>Status</th>
                  <th>Company</th>
                  <th aria-label="Open" />
                </tr>
              </thead>
              <tbody>
                {orgs.map((o) => (
                  <tr
                    key={o._id}
                    className="click"
                    tabIndex={0}
                    onClick={() => openOrg(o._id)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), openOrg(o._id))}
                    aria-label={`Open ${o.name}`}
                  >
                    <td className="wrap">
                      <strong>{o.name}</strong>
                      <small>{o.adminName} · {o.email}</small>
                    </td>
                    <td>{o.totalUsers}</td>
                    <td>
                      <b style={{ color: o.onlineUsers ? "#17724a" : undefined }}>{o.onlineUsers}</b>
                      <div className="act-bar" style={{ marginTop: 4 }}><span style={{ width: `${Math.round((o.onlineUsers / Math.max(1, o.totalUsers)) * 100)}%` }} /></div>
                    </td>
                    <td>{o.offlineUsers}</td>
                    <td>{o.loginsToday}</td>
                    <td>
                      {o.lastActivity ? timeAgo(o.lastActivity) : <span className="act-muted">No activity</span>}
                      {o.lastActivity && <small>{formatDateTime(o.lastActivity)}</small>}
                    </td>
                    <td><span className={`act-org-status ${o.status}`}>{o.status}</span></td>
                    <td>
                      <button
                        type="button"
                        className="act-btn sm"
                        onClick={(e) => { e.stopPropagation(); navigate(`/superadmin/companies/${o._id}`); }}
                        onKeyDown={(e) => e.stopPropagation()}
                        title={`Open ${o.name}'s dashboard`}
                      >
                        <LayoutDashboard size={13} /> Dashboard
                      </button>
                    </td>
                    <td><ChevronRight size={14} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: "0 14px 14px" }}>
              <Pagination {...paging} total={pagination.total} totalPages={pagination.totalPages} label="organizations" />
            </div>
          </div>
        )}
      </section>

      <div className="act-grid-2">
        <section className="act-card">
          <div className="act-card-head">
            <h3><History size={16} /> Recent logins — all organizations</h3>
            <button type="button" className="act-btn sm" onClick={() => navigate("/dashboard/activity/history")}>Full history</button>
          </div>
          {!recent ? (
            <StateBox loading={!summaryError} />
          ) : !recent.length ? (
            <StateBox empty="No logins recorded yet." />
          ) : (
            <div className="act-table-wrap">
              <table className="act-table">
                <thead>
                  <tr><th>User</th><th>Organization</th><th>Login</th><th>Device</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {recent.map((s) => (
                    <tr key={s._id}>
                      <td><strong>{s.user.name}</strong><small>{roleLabel(s.user.role)}</small></td>
                      <td>{s.organization?.name || <span className="act-muted">Platform</span>}</td>
                      <td>{timeAgo(s.loginAt)}<small>{formatDateTime(s.loginAt)}</small></td>
                      <td><DeviceLabel device={s.device} /></td>
                      <td><SessionStatus status={s.status} online={s.online} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="act-card">
          <div className="act-card-head">
            <h3><BarChart3 size={16} /> Compare organizations</h3>
            <span>online vs. offline</span>
          </div>
          {!compare.length ? (
            <StateBox loading={!summary && !summaryError} empty={summary ? "No organizations to compare." : ""} />
          ) : (
            <>
              <div className="act-compare">
                {compare.map((o) => (
                  <div className="act-compare-row" key={o._id} title={`${o.name}: ${o.onlineUsers} online of ${o.totalUsers}, ${o.loginsToday} logins today`}>
                    <b>{o.name}</b>
                    <div className="act-compare-track" style={{ width: `${Math.max(8, (o.totalUsers / maxUsers) * 100)}%` }}>
                      <span className="on" style={{ width: `${(o.onlineUsers / Math.max(1, o.totalUsers)) * 100}%` }} />
                      <span className="off" style={{ flex: 1 }} />
                    </div>
                    <span className="act-muted">{o.onlineUsers}/{o.totalUsers}</span>
                  </div>
                ))}
              </div>
              <div className="act-compare-legend">
                <span><i style={{ background: "#22c55e" }} />Online</span>
                <span><i style={{ background: "#c9d8de" }} />Offline</span>
                <span>Bar length = organization size</span>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default ActivityOrganizations;
