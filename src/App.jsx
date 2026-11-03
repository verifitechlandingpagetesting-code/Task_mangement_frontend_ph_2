import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRoutes";
import { OfflineBanner } from "./components/AppStatus";
import { startPresence } from "./services/activity";

// Online presence heartbeat while someone is logged in (does nothing without a token)
const PresenceTracker = () => {
  useEffect(() => startPresence(), []);
  return null;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        <PresenceTracker />
        <AppRoutes />
        <OfflineBanner />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;