import React, { useEffect } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";
import ReactGA from "react-ga";
import LandingPage from "./components/LandingPage";
import ExplorePage from "./components/ExplorePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SearchResultsPage from "./components/SearchResultsPage";
import ProfilePage from "./components/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/global";
import theme from "./theme";
import { initializeAnalytics } from "./googleAnalytics/googleAnalytics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CityPage from "./components/CityPage";
import ProfileSettings from "./components/ProfileSettings";

const history = createBrowserHistory();

function App(props) {
  useEffect(() => {
    history.listen(location => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });
    initializeAnalytics();
  }, []);

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar />
        <ToastContainer autoClose={2000} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/city/:id" component={CityPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={SearchResultsPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <PrivateRoute path="/settings" component={ProfileSettings} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
