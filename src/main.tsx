import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PrivacyProvider } from "./contexts/PrivacyContext";
import { initializeAnalytics } from "./lib/analytics";

// Initialize analytics (will respect GPC/DNT signals)
initializeAnalytics();

createRoot(document.getElementById("root")!).render(
  <PrivacyProvider>
    <App />
  </PrivacyProvider>
);
