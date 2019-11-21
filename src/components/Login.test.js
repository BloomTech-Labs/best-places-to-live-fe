import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as rtl from "@testing-library/react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Login from "./Login";
import initialState from "../reducers/initialState";
import reducer from "../reducers/index";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const store = createStore(reducer, initialState);

// app.test.js
it("Login Page Renders", () => {
  const { getByText } = rtl.render(
    <Provider store={store}>
      <Router history={history}>
        <Login />
      </Router>
    </Provider>
  );

  getByText(/awefaewf/i);
});