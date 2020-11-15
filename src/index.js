import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createState } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
