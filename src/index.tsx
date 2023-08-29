import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ScoringContextProvider from "./context/PublicContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScoringContextProvider apiKey="40488c11127.05bca825dea9663791cf8f15413f6859">
      <App />
    </ScoringContextProvider>
  </React.StrictMode>
);
