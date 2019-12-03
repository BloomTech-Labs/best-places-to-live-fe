import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { baseURL } from "../utils/axiosWithAuth";
import Footer from "./Footer";
import axios from "axios";

const CityPage = ({ match }) => {
  const cityID = match.params.id;
  console.log(cityID);
  const data = useFetch(`${baseURL}city`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ids: [cityID] })
  });
  console.log(data);
  return (
    <main>
      <h1>This is the city page</h1>
      <Link to="/search">Here are your results!</Link>
      <Footer />
    </main>
  );
};

export default CityPage;
