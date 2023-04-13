import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./container/App/App";
import "./index.css";
let el = document.getElementById("root");
const root = ReactDOM.createRoot(el)
root.render(<App />);
