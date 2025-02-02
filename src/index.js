import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weatherapp from "./Weather";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <footer>
      <small>
        <a
          href="https://github.com/JDASL/weather-react-app.git"
          target="_blank"
        >
          Open source code{" "}
        </a>
        by{" "}
        <em>
          <a href="https://www.instagram.com/yourgurljd/" target="_blank">
            JD Apirinya ✨
          </a>
        </em>
      </small>
    </footer>
  </StrictMode>
);
