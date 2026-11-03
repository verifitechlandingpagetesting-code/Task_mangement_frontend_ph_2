// Login activity + online presence (backend: /api/activity).
//  • startPresence()  — heartbeat every ~30 s while a user is logged in (any role)
//  • recordLogout()   — tell the backend THIS browser's session ended (call before clearing the token)
//  • activityApi      — monitoring APIs (SuperAdmin + Admin only; the backend decides the organization)
import API from "../api/config";
import { closeSocket } from "./socket";

const HEARTBEAT_MS = Math.max(15, Number(import.meta.env.VITE_ACTIVITY_HEARTBEAT_SEC) || 30) * 1000;
const baseUrl = () => String(API.defaults.baseURL || "").replace(/\/+$/, "");

// Plain fetch on purpose: a failed heartbeat must never trigger the API
// interceptor's 401 → /login redirect (e.g. on the public verify-email page).
const post = (path, body, { keepalive = false } = {}) => {
  const token = localStorage.getItem("token");
  if (!token) return Promise.resolve(null);
  return fetch(`${baseUrl()}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(body || {}),
    keepalive,
  }).catch(() => null);
};

/* ---------------- presence ---------------- */

let timer = null;
let interacted = true; // the first beat after loading the app counts as activity
const INPUT_EVENTS = ["pointerdown", "keydown", "wheel", "touchstart", "mousemove"];
const markInteraction = () => {
  interacted = true;
};

const beat = () => {
  if (!localStorage.getItem("token")) return; // logged out → nothing to report
  const active = interacted;
  interacted = false;
  post("/api/activity/heartbeat", { active, visible: document.visibilityState === "visible" });
};

const onVisible = () => {
  if (document.visibilityState === "visible") {
    interacted = true;
    beat();
  }
};

const onStorage = (e) => {
  if (e.key === "token" && e.newValue) beat(); // logged in from another tab
};

// Idempotent — safe to call from several places
export const startPresence = () => {
  if (timer) return stopPresence;
  INPUT_EVENTS.forEach((ev) => window.addEventListener(ev, markInteraction, { passive: true }));
  document.addEventListener("visibilitychange", onVisible);
  window.addEventListener("storage", onStorage);
  beat();
  timer = window.setInterval(beat, HEARTBEAT_MS);
  return stopPresence;
};

export const stopPresence = () => {
  if (!timer) return;
  window.clearInterval(timer);
  timer = null;
  INPUT_EVENTS.forEach((ev) => window.removeEventListener(ev, markInteraction));
  document.removeEventListener("visibilitychange", onVisible);
  window.removeEventListener("storage", onStorage);
};

// Beat right away (e.g. just after login) without waiting for the next tick
export const sendHeartbeatNow = () => {
  interacted = true;
  beat();
};

/* ---------------- logout ---------------- */

// keepalive → the request still completes while the page navigates to /login
export const recordLogout = () => {
  const done = post("/api/activity/logout", {}, { keepalive: true });
  closeSocket();
  return done;
};

/* ---------------- monitoring APIs ---------------- */

const clean = (params = {}) =>
  Object.fromEntries(Object.entries(params).filter(([, v]) => v !== "" && v !== null && v !== undefined && v !== "all"));

export const activityApi = {
  summary: (params) => API.get("/api/activity/summary", { params: clean(params) }).then((r) => r.data.data),
  users: (params) => API.get("/api/activity/users", { params: clean(params) }).then((r) => r.data),
  userHistory: (userId, params) => API.get(`/api/activity/users/${userId}/history`, { params: clean(params) }).then((r) => r.data),
  history: (params) => API.get("/api/activity/history", { params: clean(params) }).then((r) => r.data),
  recent: (params) => API.get("/api/activity/recent", { params: clean(params) }).then((r) => r.data.data),
  organizations: (params) => API.get("/api/activity/organizations", { params: clean(params) }).then((r) => r.data),
  organization: (orgId) => API.get(`/api/activity/organizations/${orgId}`).then((r) => r.data.data),
};
