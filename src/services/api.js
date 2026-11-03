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

export const TOKEN_KEYS = ["token", "authToken", "accessToken", "jwt", "userToken"];

export const getAuthToken = () => {
  for (const key of TOKEN_KEYS) {
    const token = localStorage.getItem(key) || sessionStorage.getItem(key);
    if (token) return token.replace(/^"|"$/g, "");
  }
  return "";
};

export const clearAuthTokens = () => {
  TOKEN_KEYS.forEach((key) => {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  });
};

// No default Content-Type: axios picks JSON or multipart (file uploads) by itself
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

// Session expired → drop the stored token (a wrong password at login is not a session)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const url = error.config?.url || "";
    if (error.response?.status === 401 && !url.includes("/auth/login")) {
      clearAuthTokens();
    }
    return Promise.reject(error);
  }
);

export default api;
