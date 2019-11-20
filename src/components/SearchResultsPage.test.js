import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../reducers/index";
import locationsByNameReducer from "../reducers/locationsByName";
import SearchResultsPage from "./SearchResultsPage";

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState for the entire store that the ui is rendered with
function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(locationsByNameReducer, initialState)
  } = {}
) {
  console.log(locationsByNameReducer);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

test("can render with redux with defaults", () => {
  const { getByTestId, getByText } = renderWithRedux(<SearchResultsPage />);

  expect(getByText("Search Results")).toHaveTextContent("Search Results");
});

test("can render with redux with custom initial state", () => {
  const { getByTestId, getByText } = renderWithRedux(<SearchResultsPage />, {
    initialState: { displayedCities: [{ name: "Denver" }] }
  });

  fireEvent.click(getByText(""));
  expect(getByTestId("count-value")).toHaveTextContent("2");
});

test("can render with redux with custom store", () => {
  // this is a silly store that can never be changed
  const store = createStore(() => ({ count: 1000 }));
  const { getByTestId, getByText } = renderWithRedux(<SearchResultsPage />, {
    store
  });
  fireEvent.click(getByText("+"));
  expect(getByTestId("count-value")).toHaveTextContent("1000");
  fireEvent.click(getByText("-"));
  expect(getByTestId("count-value")).toHaveTextContent("1000");
});
