import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "./reducers/index";
import reducer from "./reducers";
import App from "./App";

function renderWithRedux({ initialState }) {
  const store = createStore(reducer, initialState);

  return {
    ...rtl.render(<Provider store={store}></Provider>),
    store
  };
}

test("Login render with redux with defaults", () => {
  const wrapper = renderWithRedux(<App />);
});
