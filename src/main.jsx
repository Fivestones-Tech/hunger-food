import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import StoreContextprovider from "./context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <StoreContextprovider>
      <App />
    </StoreContextprovider>
  </Router>
);
