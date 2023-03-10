import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "./app/store/createStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStore()}>
    <App />
  </Provider>
);
