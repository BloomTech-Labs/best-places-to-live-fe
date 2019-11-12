import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/LandingPage";

import ExplorePage from "./components/ExplorePage";

function App() {
  return (
    <Router>
      <Route exact to="/" component={ExplorePage} />
    </Router>
  );
}

export default App;
