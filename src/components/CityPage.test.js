import React from "react";
import * as rtl from "@testing-library/react";
import CityPage from "./CityPage";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

it('renders "This is the city page" text', () => {
  const { getByText } = rtl.render(
    <Router history={history}>
      <CityPage />
    </Router>
  );

  getByText(/This is the city page/i);
});
