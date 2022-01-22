import React from "react";

import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App </h1>
        <Search />
      </header>
    </div>
  );
}
