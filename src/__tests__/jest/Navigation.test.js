import React from "react";
import Navigation from "../../Navigation";
import renderer from "react-test-renderer";
import routes from "../../app/routes";
import { Router, withRouter } from "react-router-dom";
const createHistory = require("history").createBrowserHistory;
const history = createHistory();

describe("<Navigation />", () => {
  it("Matches Snapshot", () => {
    const NavWithRouter = withRouter(routes);
    const tree = renderer
      .create(
        <Router history={history}>
          <NavWithRouter />
        </Router>
      )
      .toJSON();
    // @ts-ignore
    expect(tree).toMatchSnapshot();
  });
});
