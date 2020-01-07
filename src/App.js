import React, { useState, useEffect } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";
import ReactGA from "react-ga";
import LandingPage from "./components/LandingPage";
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
import ComparisonPage from "./components/ComparisonPage";
import useWindowSize from "./hooks/useWindowSize";
import TabNav from "./components/TabNav";
import Modal from "./components/Modal";
import AddFilters from "./components/AddFilters";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
//For google Analytics
const history = createBrowserHistory();

//Connecting Google Analytics
//Specifically to find pages users are visiting
function App(props) {
  useEffect(() => {
    history.listen(location => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });
    initializeAnalytics();
  }, []);

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  //For NavBar responsiveness
  const size = useWindowSize();
  return (
    <Router history={history}>
      {/* Styled Systems - Theme */}
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        {/* Global Style - Global Style Sheet - Adds to head of index.html */}
        <GlobalStyle />
        <Modal show={show} handleClose={hideModal}>
          <AddFilters handleClose={hideModal} {...props} />
        </Modal>
        <NavBar showModal={showModal} show={show} />
        {/* Toast Container - Handling Errors and Successes with alert notifications on screen*/}
        <ToastContainer position="bottom-right" autoClose={2000} />
        <Route
          exact
          path="/"
          render={props => <LandingPage {...props} showModal={showModal} />}
        />
        <Route path="/city/:id" component={CityPage} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={SearchResultsPage} />
        <Route path="/compare" component={ComparisonPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <PrivateRoute path="/settings" component={ProfileSettings} />
        <Footer />
        {size.width < 550 ? <TabNav /> : null}
      </ThemeProvider>
    </Router>
  );
}

export default App;
