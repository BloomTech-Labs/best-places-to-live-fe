import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import ExplorePage from "./components/ExplorePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SearchResultsPage from "./components/SearchResultsPage";
import ProfilePage from "./components/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={LandingPage} />
      <Route path="/explore" component={ExplorePage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={SearchResultsPage} />
      <PrivateRoute path="/profile" component={ProfilePage} />
    </Router>
  );
}

export default App;
