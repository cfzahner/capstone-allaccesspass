import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//import { App } from "./App";
import { Routes } from "./routes";
import { Header } from "./components/Header";

import "font-awesome/css/font-awesome.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <Header />
        <Routes />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
