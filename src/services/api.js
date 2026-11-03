import axios from "axios";

/* =========================================================
   ONE place for the backend URL — every page imports from here.
   Vercel:  set VITE_API_URL = https://task-management-backend-ph-2.onrender.com/api
   Local:   .env  →  VITE_API_URL=http://localhost:5000/api
========================================================= */

export const API_URL = (
  import.meta.env.VITE_API_URL ||
  "https://task-management-backend-ph-2.onrender.com/api"
).replace(/\/+$/, ""); // no trailing slash

// Socket.IO connects to the server root, not /api
export const SOCKET_URL = API_URL.replace(/\/api$/, "");

export const getAuthToken = () =>
  localStorage.getItem("token") ||
  localStorage.getItem("authToken") ||
  localStorage.getItem("accessToken") ||
  localStorage.getItem("jwt") ||
  localStorage.getItem("userToken") ||
  "";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
