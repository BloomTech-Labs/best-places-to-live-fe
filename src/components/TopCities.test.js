import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../reducers/index";
import reducer from "../reducers";
import TopCities from "./TopCities";

function renderWithRedux({ initialState }) {
  const store = createStore(reducer, initialState);

  return {
    ...rtl.render(<Provider store={store}></Provider>),
    store
  };
}

test("can render with redux with defaults", () => {
  const wrapper = renderWithRedux(<TopCities />);
});
