import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
        </header>
      </div>
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
    </div>
  );
}
export default App;
