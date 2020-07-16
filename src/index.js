import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Components
import App from "./components/App";
// Libraries
import { createStore } from "redux";
import { Provider } from "react-redux";
// Redux Resources
import reducer from "./reducers";
import middleware from "./middleware";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
