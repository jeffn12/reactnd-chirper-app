import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Components
import App from "./components/App";
// Libraries
import { createStore } from "redux";
import { Provider } from "react-redux";
// State Assets
import reducer from "./reducers";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
