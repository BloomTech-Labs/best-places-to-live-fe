import React from "react";
import { Link } from "react-router-dom";
import SearchByCity from "./SearchByCity";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <main>
      <h1>X Marks the Spot</h1>
      <SearchByCity />
      <Link to="/explore-page">Explore!</Link>
      <Footer />
    </main>
  );
};

export default LandingPage;
