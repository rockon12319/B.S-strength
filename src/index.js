import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Published pages already contain their content; the dev server starts empty.
// Legacy query URLs can receive the homepage before a host redirect is configured.
const legacyQuery = window.location.pathname === "/" && /[?&](article|view)=/.test(window.location.search);
if (rootElement.hasChildNodes() && !legacyQuery) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
