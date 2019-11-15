import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
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

function App(props) {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={SearchResultsPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
