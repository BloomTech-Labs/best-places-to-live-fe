import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Router, withRouter } from "react-router-dom";
import Routes from "./routes";
import { initializeAnalytics } from "../utils/GoogleAnalytics";
import "../index.css";

// import Data from './data'
const createHistory = require("history").createBrowserHistory;
const history = createHistory();
const AppWithRouter = withRouter(Routes);

// Should this be moved to env vars? E.g. ga.initialize(process.env.GA_ID)
/* or, we could just run in production--if there is no benefit to getting analytics on staging
      if (process.env.DB_ENV === 'production') {
        ga.initialize('UA-143824465-1');
      }
    */

const App = () => {
  // Run Google Analytics
  useEffect(() => {
    initializeAnalytics();
    history.listen(location => {
      ReactGA.pageview(location.pathname);
    });
  }, []);
  return (
    <Router history={history}>
      <AppWithRouter />
    </Router>
  );
};

export default App;
