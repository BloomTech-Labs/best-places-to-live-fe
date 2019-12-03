import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { baseURL } from "../utils/axiosWithAuth";
import Footer from "./Footer";

const CityPage = ({ match }) => {
  const cityID = match.params.id;
  const response = useFetch(`${baseURL}city`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ids: [cityID] })
  });
  console.log(response.response);

  if (!response.response || response.isLoading) {
    return (
      <main>
        <h2>Loading...</h2>
        <Footer />
      </main>
    );
  } else {
    let cityName, stateName, queryString, photo, cityInfo;

    cityInfo = response.response.data[0];
    cityName = cityInfo.short_name;
    stateName = cityInfo.state;

    queryString = cityInfo.full_name;
    photo = cityInfo.secure_url;

    return (
      <main>
        <h1>
          This is {cityName}. We're in {stateName} now!
        </h1>
        <Link to="/search">Here are your results!</Link>

        <Footer />
      </main>
    );
  }
};

export default CityPage;
