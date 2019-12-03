import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { baseURL } from "../utils/axiosWithAuth";
import Footer from "./Footer";
import axios from "axios";

const CityPage = ({ match }) => {
  const cityID = match.params.id;
  const response = useFetch(`${baseURL}city`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ids: [cityID] })
  });

  let cityName, stateName;
  if (response.response != null) {
    cityName = response.response.data[0].short_name;
    stateName = response.response.data[0].state;
  }
  const queryString = `${cityName}, ${stateName}`;
  console.log(queryString);

  return (
    <main>
      <h1>
        This is {cityName}. We're in {stateName} now!
      </h1>
      <Link to="/search">Here are your results!</Link>

      <Footer />
    </main>
  );
};

export default CityPage;
