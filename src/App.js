import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Svetlana Galiuk and is{" "}
          <a
            href="https://github.com/SvetlanaGaliuk/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-soursed on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
