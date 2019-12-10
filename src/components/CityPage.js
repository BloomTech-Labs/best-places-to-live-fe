import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { baseURL } from "../utils/axiosWithAuth";
import { Container, Flex, Text, Hero } from "../styles/index";
import Footer from "./Footer";
import LikeIcon from "./LikeIcon";
import DislikeIcon from "./DislikeIcon";
import theme from "../theme";

const CityPage = ({ match, likes }) => {
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
    const summary = cityInfo.Summary;

    //For Backend
    const city = {
      city_name: cityInfo.name,
      city_id: cityID
    };

    const isLiked = (currentCityID, likedCities) =>
      likedCities.find(({ _id }) => _id === currentCityID);

    return (
      <Container as="main" maxWidth="600px" margin="0 auto">
        <Container textAlign="center">
          <Text as="h1">{cityName}</Text>
          <LikeIcon iconColor city={city} liked={isLiked(cityID, likes)} />
          <Text as="h2">{stateName}</Text>

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
          <Container
            backgroundColor={theme.colors.silver}
            padding="1rem .75rem"
            margin="3rem 4rem"
          >
            <Text as="p">{summary}</Text>
          </Container>
        </Container>
        <Footer />
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
