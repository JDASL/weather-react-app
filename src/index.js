import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <i class="wi wi-day-lightning"></i>
    <footer>
      <small>
        <a
          href="https://github.com/JDASL/weather-react-app.git"
          target="_blank"
          rel="noreferrer"
        >
          Open source code{" "}
        </a>
        by{" "}
        <em>
          <a
            href="https://www.instagram.com/yourgurljd/"
            target="_blank"
            rel="noreferrer"
          >
            JD Apirinya ✨
          </a>
        </em>
      </small>
    </footer>
  </StrictMode>
);
