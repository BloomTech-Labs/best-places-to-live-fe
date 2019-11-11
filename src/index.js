import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { Provider } from "react-redux";

import { loadState, saveState } from "./localStorage";

import "./index.css";
import App from "./App";

const persistedState = loadState();
const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState({
    user: store.getState().user
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
