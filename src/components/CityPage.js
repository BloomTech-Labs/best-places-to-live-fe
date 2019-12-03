import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const CityPage = ({ match }) => {
  console.log("match", match.params.id);
  return (
    <main>
      <h1>This is the city page</h1>
      <Link to="/search">Here are your results!</Link>
      <Footer />
    </main>
  );
};

export default CityPage;
