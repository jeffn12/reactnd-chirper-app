import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Components
import App from "./components/App";
// Libraries
import { createStore } from "redux";
// State Assets
import reducer from "./reducers";

const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById("root"));
