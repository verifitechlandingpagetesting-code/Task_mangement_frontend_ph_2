import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Building2, Users, Network, ListChecks, CheckCircle2, AlertTriangle, CalendarDays, LifeBuoy, Wifi,
  RefreshCw, ArrowLeft, Activity, LayoutDashboard, Search, ChevronRight,
} from "lucide-react";
import API from "../../api/config";
import { activityApi } from "../../services/activity";
import { Pagination, usePagination } from "../../components/Pagination";
import { activityCss, StatCard, StateBox, roleLabel, timeAgo } from "./ActivityShared";

/* =========================================================
   SuperAdmin — one dashboard per company (organization)
   /superadmin/companies          → every company, each with "Open dashboard"
   /superadmin/companies/:orgId   → that company's own dashboard
   Data: GET /api/admins/:id/overview (SuperAdmin only, never mixes companies)
         GET /api/activity/organizations/:id (online now, logins today)
========================================================= */

// Chart colors — validated pair (dataviz palette slots 1 + 2) for the 2-series trend;
// single-series bars use one hue, named by the chart title.
const SERIES = { created: "#2a78d6", completed: "#eb6834" };
const BAR = "#1677a8";

const monthLabel = (key) => {
  const [y, m] = key.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString(undefined, { month: "short" });
};
const pct = (part, total) => (total ? Math.round((part / total) * 100) : 0);

/* ---------------- charts ---------------- */

// Horizontal bars, one hue; value printed at the end of each bar
const HBarChart = ({ rows, label }) => {
  const max = Math.max(1, ...rows.map((r) => r.value));
  return (
    <div className="cd-hbars" role="list" aria-label={label}>
      {rows.map((r) => (
        <div className="cd-hbar" role="listitem" key={r.label} title={`${r.label}: ${r.value}`}>
          <span className="cd-hbar-label">{r.label}</span>
          <div className="cd-hbar-track">
            <span style={{ width: `${(r.value / max) * 100}%`, background: BAR }} />
          </div>
          <b>{r.value}</b>
        </div>
      ))}
    </div>
  );
};

// Grouped columns: created vs completed per month, legend + hover tooltip + data table
const TrendChart = ({ trend }) => {
  const [hover, setHover] = useState(null);
  const [showTable, setShowTable] = useState(false);
  // even axis maximum → the middle gridline is an exact whole number
  const peak = Math.max(1, ...trend.flatMap((t) => [t.created, t.completed]));
  const max = Math.max(2, Math.ceil(peak / 2) * 2);
  const ticks = [max, max / 2, 0];

  return (
    <div className="cd-trend">
      <div className="cd-legend">
        <span><i style={{ background: SERIES.created }} />Created</span>
        <span><i style={{ background: SERIES.completed }} />Completed</span>
        <button type="button" className="act-btn sm" onClick={() => setShowTable((v) => !v)}>
          {showTable ? "Show chart" : "Show table"}
        </button>
      </div>

      {showTable ? (
        <table className="act-table">
          <thead><tr><th>Month</th><th>Created</th><th>Completed</th></tr></thead>
          <tbody>
            {trend.map((t) => (
              <tr key={t.month}><td>{monthLabel(t.month)} {t.month.slice(0, 4)}</td><td>{t.created}</td><td>{t.completed}</td></tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="cd-plot">
          <div className="cd-yaxis" aria-hidden="true">
            {ticks.map((v, i) => <span key={i}>{v}</span>)}
          </div>
          <div className="cd-cols">
            <div className="cd-grid" aria-hidden="true"><i /><i /><i /></div>
            {trend.map((t, i) => (
              <div
                key={t.month}
                className={`cd-col ${hover === i ? "on" : ""}`}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                tabIndex={0}
                aria-label={`${monthLabel(t.month)}: ${t.created} created, ${t.completed} completed`}
              >
                <div className="cd-pair">
                  <span style={{ height: `${(t.created / max) * 100}%`, background: SERIES.created }} />
                  <span style={{ height: `${(t.completed / max) * 100}%`, background: SERIES.completed }} />
                </div>
                <small>{monthLabel(t.month)}</small>
                {hover === i && (
                  <div className="cd-tip" role="tooltip">
                    <b>{monthLabel(t.month)} {t.month.slice(0, 4)}</b>
                    <span><i style={{ background: SERIES.created }} />Created <strong>{t.created}</strong></span>
                    <span><i style={{ background: SERIES.completed }} />Completed <strong>{t.completed}</strong></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ---------------- company picker (no :orgId) ---------------- */

const CompanyList = ({ companies, loading, error, onRetry }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const list = useMemo(() => {
    const q = search.trim().toLowerCase();
    return companies.filter((c) => !q || `${c.companyName} ${c.name} ${c.email}`.toLowerCase().includes(q));
  }, [companies, search]);
  const page = usePagination(list, { id: "company-dashboards", pageSize: 20, resetKey: search });

  return (
    <section className="act-card">
      <div className="act-card-head">
        <h3><Building2 size={16} /> Companies</h3>
        <span>{companies.length} compan{companies.length === 1 ? "y" : "ies"}</span>
      </div>
      <div className="act-filters" style={{ gridTemplateColumns: "minmax(0, 1fr)" }}>
        <label className="act-search" style={{ gridColumn: "auto" }}>
          <span>Search</span>
          <div>
            <Search size={14} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Company, admin name or email…" />
          </div>
        </label>
      </div>
      <StateBox loading={loading} error={error} onRetry={onRetry} empty={!loading && !list.length ? "No companies found." : ""} />
      {!loading && !error && list.length > 0 && (
        <div className="cd-company-grid">
          {page.items.map((c) => (
            <button type="button" key={c._id} className="cd-company" onClick={() => navigate(`/superadmin/companies/${c._id}`)}>
              <div className="cd-company-icon"><Building2 size={18} /></div>
              <div className="cd-company-body">
                <b>{c.companyName || c.name}</b>
                <small>{c.name} · {c.email}</small>
                <small>{c.members || 0} member{c.members === 1 ? "" : "s"}</small>
              </div>
              <span className={`act-org-status ${c.status}`}>{c.status}</span>
              <span className="cd-open"><LayoutDashboard size={14} /> Open dashboard <ChevronRight size={14} /></span>
            </button>
          ))}
        </div>
      )}
      <div style={{ padding: "0 14px 14px" }}><Pagination {...page} label="companies" /></div>
    </section>
  );
};

/* ---------------- page ---------------- */

const CompanyDashboard = () => {
  const { orgId } = useParams();
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);
  const [companiesLoading, setCompaniesLoading] = useState(true);
  const [companiesError, setCompaniesError] = useState("");
  const [overview, setOverview] = useState(null);
  const [presence, setPresence] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [teamSearch, setTeamSearch] = useState("");

  const loadCompanies = useCallback(async () => {
    setCompaniesLoading(true);
    try {
      const res = await API.get("/api/admins");
      const list = (res.data.data || []).slice().sort((a, b) => (a.companyName || a.name).localeCompare(b.companyName || b.name));
      setCompanies(list);
      setCompaniesError("");
    } catch (err) {
      setCompaniesError(err.response?.data?.message || "Could not load the companies.");
    } finally {
      setCompaniesLoading(false);
    }
  }, []);

  const loadCompany = useCallback(async () => {
    if (!orgId) return;
    setLoading(true);
    setError("");
    try {
      const res = await API.get(`/api/admins/${orgId}/overview`);
      setOverview(res.data.data);
      // presence is a bonus — the dashboard still shows if it fails
      activityApi.organization(orgId).then(setPresence).catch(() => setPresence(null));
    } catch (err) {
      setOverview(null);
      setError(err.response?.status === 404 ? "This company no longer exists." : err.response?.data?.message || "Could not load this company's dashboard.");
    } finally {
      setLoading(false);
    }
  }, [orgId]);

  useEffect(() => {
    loadCompanies();
  }, [loadCompanies]);
  useEffect(() => {
    setOverview(null);
    setPresence(null);
    setTeamSearch("");
    loadCompany();
  }, [loadCompany]);

  const members = useMemo(() => {
    const q = teamSearch.trim().toLowerCase();
    return (overview?.members || []).filter((m) => !q || `${m.name} ${m.email} ${m.department}`.toLowerCase().includes(q));
  }, [overview, teamSearch]);
  const teamPage = usePagination(members, { id: "company-team", resetKey: `${orgId}|${teamSearch}` });

  const admin = overview?.admin;
  const stats = overview?.stats;
  const tasks = stats?.tasks;
  const charts = overview?.charts;
  const companyName = admin ? admin.companyName || admin.name : "";

  return (
    <div className="act-page">
      <style>{activityCss + cdCss}</style>

      <section className="act-hero">
        <div className="act-hero-row">
          <div className="act-hero-left">
            <div className="act-hero-icon">{orgId ? <Building2 size={26} /> : <LayoutDashboard size={26} />}</div>
            <div>
              <h1>{orgId ? companyName || "Company dashboard" : "Company Dashboards"}</h1>
              <p>
                {orgId
                  ? admin
                    ? `Admin: ${admin.name} · ${admin.email} · ${admin.status}`
                    : "Loading company…"
                  : "Open a separate dashboard for each company — tasks, team, meetings and activity."}
              </p>
            </div>
          </div>
          <div className="act-hero-actions">
            {orgId && companies.length > 0 && (
              <select
                className="cd-switch"
                value={orgId}
                onChange={(e) => navigate(`/superadmin/companies/${e.target.value}`)}
                aria-label="Switch company"
              >
                {companies.map((c) => <option key={c._id} value={c._id}>{c.companyName || c.name}</option>)}
              </select>
            )}
            {orgId && (
              <>
                <Link className="act-hero-btn" to={`/dashboard/activity?org=${orgId}`}><Activity size={15} /> Activity</Link>
                <Link className="act-hero-btn" to="/superadmin/companies"><ArrowLeft size={15} /> All companies</Link>
                <button type="button" className="act-hero-btn" onClick={loadCompany} disabled={loading}>
                  <RefreshCw size={15} className={loading ? "act-spin" : ""} /> Refresh
                </button>
              </>
            )}
            {!orgId && <Link className="act-hero-btn" to="/superadmin/dashboard"><ArrowLeft size={15} /> Super Admin</Link>}
          </div>
        </div>
      </section>

      {!orgId ? (
        <CompanyList companies={companies} loading={companiesLoading} error={companiesError} onRetry={loadCompanies} />
      ) : error ? (
        <StateBox error={error} onRetry={loadCompany} />
      ) : !overview ? (
        <StateBox loading />
      ) : (
        <>
          <section className="act-stats cd-stats" aria-label="Company summary">
            <StatCard icon={Users} label="Team members" value={stats.members} hint={`${stats.managers} managers · ${stats.users} team members`} />
            <StatCard icon={Network} tone="violet" label="Departments" value={stats.departments} />
            <StatCard icon={ListChecks} tone="blue" label="Total tasks" value={tasks.total} hint={`${tasks.inProgress} in progress`} />
            <StatCard icon={CheckCircle2} tone="green" label="Completion" value={`${tasks.completionRate}%`} hint={`${tasks.completed} completed`} />
            <StatCard icon={AlertTriangle} tone="amber" label="Overdue" value={tasks.overdue} hint="open past due date" />
            <StatCard icon={CalendarDays} tone="teal" label="Meetings" value={stats.meetings} />
            <StatCard icon={LifeBuoy} tone="gray" label="Open tickets" value={stats.openTickets} />
            <StatCard icon={Wifi} tone="green" label="Online now" value={presence ? presence.onlineUsers : "—"} hint={presence ? `${presence.loginsToday} logins today` : ""} />
          </section>

          <div className="cd-grid-2">
            <section className="act-card">
              <div className="act-card-head"><h3><ListChecks size={16} /> Tasks by status</h3><span>{tasks.total} tasks</span></div>
              <div className="act-card-body">
                {tasks.total ? (
                  <HBarChart
                    label="Tasks by status"
                    rows={[
                      { label: "To Do", value: tasks.todo },
                      { label: "In Progress", value: tasks.inProgress },
                      { label: "Review", value: tasks.review },
                      { label: "Completed", value: tasks.completed },
                    ]}
                  />
                ) : <StateBox empty="No tasks yet." />}
                {charts?.byPriority && tasks.total > 0 && (
                  <div className="cd-chips" aria-label="Tasks by priority">
                    {Object.entries(charts.byPriority).map(([p, n]) => <span key={p}>{p} <b>{n}</b></span>)}
                  </div>
                )}
              </div>
            </section>

            <section className="act-card">
              <div className="act-card-head"><h3><CalendarDays size={16} /> Tasks created vs completed</h3><span>last 6 months</span></div>
              <div className="act-card-body">
                {charts?.trend ? <TrendChart trend={charts.trend} /> : <StateBox empty="No data." />}
              </div>
            </section>
          </div>

          <div className="cd-grid-2">
            <section className="act-card">
              <div className="act-card-head"><h3><Network size={16} /> Departments</h3><span>completion by department</span></div>
              {!charts?.byDepartment?.length ? (
                <StateBox empty="No tasks in any department yet." />
              ) : (
                <div className="act-table-wrap">
                  <table className="act-table">
                    <thead><tr><th>Department</th><th>Tasks</th><th>Completed</th><th style={{ minWidth: 140 }}>Completion</th></tr></thead>
                    <tbody>
                      {charts.byDepartment.map((d) => (
                        <tr key={d.department}>
                          <td><strong>{d.department}</strong></td>
                          <td>{d.total}</td>
                          <td>{d.completed}</td>
                          <td>
                            <div className="act-bar"><span style={{ width: `${pct(d.completed, d.total)}%` }} /></div>
                            <small>{pct(d.completed, d.total)}%</small>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            <section className="act-card">
              <div className="act-card-head"><h3><ListChecks size={16} /> Recent tasks</h3></div>
              {!overview.recentTasks.length ? (
                <StateBox empty="No tasks yet." />
              ) : (
                <div className="act-recent">
                  {overview.recentTasks.map((t) => (
                    <div key={t._id} className="act-recent-row" style={{ cursor: "default" }}>
                      <div>
                        <b>{t.name}</b>
                        <small>{t.assignedUser || "Unassigned"} · {t.priority} · {t.dueDate ? `due ${new Date(t.dueDate).toLocaleDateString()}` : "no due date"}</small>
                      </div>
                      <span className={`cd-status s-${String(t.status).replace(/\s/g, "").toLowerCase()}`}>{t.status}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          <section className="act-card">
            <div className="act-card-head">
              <h3><Users size={16} /> Team</h3>
              <span>{stats.activeMembers} active · {stats.inactiveMembers} inactive</span>
            </div>
            <div className="act-filters" style={{ gridTemplateColumns: "minmax(0, 1fr)" }}>
              <label className="act-search" style={{ gridColumn: "auto" }}>
                <span>Search</span>
                <div>
                  <Search size={14} />
                  <input value={teamSearch} onChange={(e) => setTeamSearch(e.target.value)} placeholder="Name, email or department…" />
                </div>
              </label>
            </div>
            {!members.length ? (
              <StateBox empty={teamSearch ? "Nobody matches this search." : "No team members yet."} />
            ) : (
              <div className="act-table-wrap">
                <table className="act-table">
                  <thead>
                    <tr><th>Member</th><th>Role</th><th>Department</th><th>Status</th><th>Tasks</th><th>Completed</th><th>Overdue</th><th style={{ minWidth: 130 }}>Completion</th><th>Joined</th></tr>
                  </thead>
                  <tbody>
                    {teamPage.items.map((m) => (
                      <tr key={m._id}>
                        <td><strong>{m.name}</strong><small>{m.email}</small></td>
                        <td>{m.customRoleName || roleLabel(m.role)}</td>
                        <td>{m.department || <span className="act-muted">—</span>}</td>
                        <td><span className={`act-org-status ${m.status}`}>{m.status}</span></td>
                        <td>{m.tasks?.total ?? 0}</td>
                        <td>{m.tasks?.completed ?? 0}</td>
                        <td style={m.tasks?.overdue ? { color: "#a83c55", fontWeight: 700 } : undefined}>{m.tasks?.overdue ?? 0}</td>
                        <td>
                          <div className="act-bar"><span style={{ width: `${pct(m.tasks?.completed, m.tasks?.total)}%` }} /></div>
                          <small>{m.tasks?.total ? `${pct(m.tasks.completed, m.tasks.total)}%` : "no tasks"}</small>
                        </td>
                        <td>{timeAgo(m.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ padding: "0 14px 14px" }}><Pagination {...teamPage} label="members" /></div>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
};

const cdCss = `
  .cd-switch { height: 40px; max-width: 220px; border-radius: 12px; border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.95);
    color: #123b5d; font-weight: 750; font-size: 12.5px; padding: 0 10px; cursor: pointer; font-family: inherit; }
  .act-stat.t-teal .act-stat-icon { background: #e7f8fa; color: #0e7490; }
  .cd-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  @media (max-width: 900px) { .cd-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (max-width: 340px) { .cd-stats { grid-template-columns: 1fr; } }
  .cd-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; align-items: start; }

  .cd-hbars { display: flex; flex-direction: column; gap: 12px; }
  .cd-hbar { display: grid; grid-template-columns: 96px 1fr 40px; gap: 10px; align-items: center; font-size: 12.5px; color: #123b5d; }
  .cd-hbar b { text-align: right; color: #082f3a; }
  .cd-hbar-track { height: 14px; border-radius: 4px; background: #eef5f6; overflow: hidden; }
  .cd-hbar-track span { display: block; height: 100%; border-radius: 0 4px 4px 0; min-width: 2px; }
  .cd-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; padding-top: 14px; border-top: 1px solid #eef5f6; }
  .cd-chips span { font-size: 12px; color: #4f6f7a; background: #f4fbfc; border: 1px solid #e3eef2; border-radius: 99px; padding: 4px 10px; }
  .cd-chips b { color: #082f3a; margin-left: 4px; }

  .cd-legend { display: flex; align-items: center; gap: 14px; font-size: 12px; color: #4f6f7a; margin-bottom: 12px; flex-wrap: wrap; }
  .cd-legend i, .cd-tip i { display: inline-block; width: 10px; height: 10px; border-radius: 3px; margin-right: 6px; vertical-align: -1px; }
  .cd-legend .act-btn { margin-left: auto; }
  .cd-plot { display: grid; grid-template-columns: 34px 1fr; gap: 6px; height: 210px; }
  .cd-yaxis { display: flex; flex-direction: column; justify-content: space-between; font-size: 10.5px; color: #7b969e; text-align: right; padding-bottom: 22px; }
  .cd-cols { position: relative; display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
  .cd-grid { position: absolute; inset: 0 0 22px 0; display: flex; flex-direction: column; justify-content: space-between; pointer-events: none; }
  .cd-grid i { border-top: 1px solid #eef3f5; }
  .cd-col { position: relative; display: flex; flex-direction: column; align-items: center; gap: 6px; outline: none; border-radius: 8px; }
  .cd-col.on, .cd-col:focus-visible { background: rgba(22,119,168,.06); }
  .cd-pair { flex: 1; width: 100%; display: flex; justify-content: center; align-items: flex-end; gap: 2px; padding: 0 6%; }
  .cd-pair span { width: min(18px, 40%); border-radius: 4px 4px 0 0; min-height: 2px; }
  .cd-col small { font-size: 11px; color: #6e8799; height: 16px; }
  .cd-tip { position: absolute; bottom: calc(100% - 30px); left: 50%; transform: translateX(-50%); z-index: 5; min-width: 150px; background: #fff;
    border: 1px solid #d5e7ee; border-radius: 10px; padding: 8px 10px; box-shadow: 0 10px 24px rgba(23,50,77,.14); display: flex; flex-direction: column; gap: 4px; font-size: 12px; color: #4f6f7a; pointer-events: none; }
  .cd-tip b { color: #082f3a; }
  .cd-tip strong { color: #082f3a; float: right; margin-left: 10px; }

  .cd-status { font-size: 10.5px; font-weight: 800; border-radius: 999px; padding: 3px 9px; background: #eef7fa; color: #2f6f91; white-space: nowrap; }
  .cd-status.s-completed { background: #eaf8f1; color: #17724a; }
  .cd-status.s-inprogress { background: #fff7e6; color: #b7791f; }
  .cd-status.s-review { background: #f1eefc; color: #6b4fc8; }

  .cd-company-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; padding: 14px 18px; }
  .cd-company { display: grid; grid-template-columns: auto 1fr auto; grid-template-rows: auto auto; gap: 10px 12px; align-items: start; text-align: left;
    padding: 14px; border: 1px solid #d5e7ee; border-radius: 16px; background: #fff; cursor: pointer; font: inherit; transition: border-color .15s, box-shadow .15s, transform .15s; }
  .cd-company:hover, .cd-company:focus-visible { border-color: #16a6b8; box-shadow: 0 10px 24px rgba(22,166,184,.14); transform: translateY(-1px); outline: none; }
  .cd-company-icon { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: #e7f8fa; color: #0e7490; }
  .cd-company-body { min-width: 0; }
  .cd-company-body b { display: block; color: #082f3a; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .cd-company-body small { display: block; color: #7b969e; font-size: 11.5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .cd-open { grid-column: 1 / -1; display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 34px; border-radius: 10px;
    background: linear-gradient(135deg, #16a6b8, #08798c); color: #fff; font-weight: 750; font-size: 12.5px; }

  @media (max-width: 1100px) { .cd-grid-2 { grid-template-columns: 1fr; } }
  @media (max-width: 720px) {
    .cd-switch { max-width: none; flex: 1; }
    .cd-plot { height: 180px; }
    .cd-hbar { grid-template-columns: 80px 1fr 34px; }
  }
`;

export default CompanyDashboard;
