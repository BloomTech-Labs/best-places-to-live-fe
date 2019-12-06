import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { baseURL } from "../utils/axiosWithAuth";
import { Container, Flex, Text, Image, Hero } from "../styles/index";
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
    console.log(response);
    const cityInfo = response.response.data[0];
    const cityName = cityInfo.short_name;
    const stateName = cityInfo.state;
    const cityID = cityInfo._id;
    const fullName = cityInfo.full_name;
    const photo = cityInfo.secure_url;

    //For Backend
    const city = {
      city_name: cityInfo.name,
      city_id: cityID
    };
    return (
      <Container as="main" maxWidth="1000px" margin="0 auto">
        <Flex justifyContent="space-between" p={[1, 2]}>
          <LikeIcon iconColor city={city} />
          <DislikeIcon iconColor city={city} />
        </Flex>

        <Hero
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          background={` 
          linear-gradient(
            rgba(0, 0, 0, 0.30), 
            rgba(0, 0, 0, 0.30)
          ),
          
          url(${photo})`}
          backgroundSize="cover"
          backgroundPosition="center"
          padding="130px 100px 100px"
        />

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
