import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Weather App</h1>
        <Weather city="Bangkok" />
        <a className="App-link" target="_blank" rel="noopener noreferrer"></a>
      </header>
    </div>
  );
}

export default App;
