import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/Styles/PriceList.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./components/Styles/Navbar.css";
import "./components/Styles/SpecCard.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
