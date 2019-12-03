import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

const CityPage = ({ match }) => {
  const cityID = match.params.id;

  useEffect(async () => {
    const response = await axios.post("");
  }, []);

  return (
    <main>
      <h1>This is the city page</h1>
      <Link to="/search">Here are your results!</Link>
      <Footer />
    </main>
  );
};

export default CityPage;
