import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import { BrowserRouter as Router } from "react-router-dom";
require("dotenv").config();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
