import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { baseURL } from "../utils/axiosWithAuth";
import { Container, Text, Image } from "../styles/index";
import LoadingComponent from "./LoadingComponent";
import theme from "../theme";
import { factors } from "../utils/factors";
import axios from "axios";
import Attribution from "./Attribution";
import CityComparisonForm from "./CityComparisonForm";
import CityCard from "./CityCard";
import LazyLoad from "react-lazyload";
import PolarAreaChart from "./PolarAreaChart";

const CityPage = ({ match, likes, history }) => {
  const cityID = match.params.id;
  const [imgUrl, setImgUrl] = useState("");
  const [show, setShow] = useState(false);

  //BE request
  const response = useFetch(`${baseURL}city`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ids: [cityID] })
  });

  //DS request for city normalized scores
  const dsResponse = useFetch(
    `https://best-places-api.herokuapp.com/normalized`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: cityID,
        factors: [
          "score_commute",
          "score_cost_of_living",
          "score_economy",
          "score_education",
          "score_environmental_quality",
          "score_healthcare",
          "score_housing",
          "score_internet_access",
          "score_leisure_&_culture",
          "score_outdoors",
          "score_safety",
          "score_startups",
          "score_taxation",
          "ranked_population"
        ]
      })
    }
  );

  if (
    !response.response ||
    response.isLoading ||
    !dsResponse.response ||
    dsResponse.isLoading
  ) {
    return (
      <Container as="main">
        <LoadingComponent />
        ""
      </Container>
    );
  } else {
    console.log(dsResponse.response[0]);
    const dsCity = dsResponse.response[0];
    let city = response.response.data[0];
    city = { ...city, ...dsCity };
    return (
      <Container as="main" p="0 20px" maxWidth="600px" margin="0 auto">
        <Container textAlign="center">
          <Text as="h1">{city.short_name}</Text>
          <Text as="h2">{city.state}</Text>
          <LazyLoad resize>
            <CityCard
              city={{
                _id: city._id,
                name: city.short_name,
                secure_url: city.secure_url
              }}
              page="city"
            />
          </LazyLoad>
          <Container>
            <CityComparisonForm cityID={city._id} history={history} />
          </Container>
          <Container
            backgroundColor={theme.colors.silver}
            padding="1.2rem 1.5rem"
            margin="3rem 0"
          >
            <Text
              as="p"
              lineHeight="1.5"
              fontSize="1rem"
              m={0}
              textAlign="left"
            >
              {city.Summary}
            </Text>
            <Attribution />
          </Container>
          <Container height="100%" width="100%">
            <Text as="h2">City Scores by Factor</Text>

            <PolarAreaChart city={city} />
          </Container>
        </Container>
      </Container>
    );
  }
};

const mapStateToProps = state => {
  const { user } = state;
  return {
    likes: user.likes
  };
};

export default connect(mapStateToProps, {})(CityPage);
