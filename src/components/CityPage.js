import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { baseURL } from "../utils/axiosWithAuth";
import { Container, Flex, Text, Image } from "../styles/index";
import Footer from "./Footer";
import LikeIcon from "./LikeIcon";
import DislikeIcon from "./DislikeIcon";

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
      <Container as="main">
        <h2>Loading...</h2>
        <Footer />
      </Container>
    );
  } else {
    let cityName, stateName, queryString, photo, cityInfo;

    cityInfo = response.response.data[0];
    cityName = cityInfo.short_name;
    stateName = cityInfo.state;

    queryString = cityInfo.full_name;
    photo = cityInfo.secure_url;
    console.log(photo);
    return (
      <Container as="main">
        <Flex
          justifyContent="space-between"
          p={[1, 2]}
          background={`
          linear-gradient(
            rgba(0, 0, 0, 0.30),
            rgba(0, 0, 0, 0.30)
          ),
          url(${photo})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          height={"10vw"}
        >
          <LikeIcon />
          <DislikeIcon />
        </Flex>

        <Text as="h1">
          This is {cityName}. We're in {stateName} now!
        </Text>
        <Link to="/search">Here are your results!</Link>

        <Footer />
      </Container>
    );
  }
};

export default CityPage;
