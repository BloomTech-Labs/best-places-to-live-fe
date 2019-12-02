import React from "react";
import { deleteLikedCity } from "../actions/deleteLikedCity";
import { Container, Flex, Text, Hero, Box } from "../styles/index";
import { connect } from "react-redux";
import CityCard from "./CityCard";

function LikedCities({ cities, deleteLikedCity, ...rest }) {
  return (
    <>
      <Container p={`0 15px`}>
        <Text as="h2" textAlign="center">
          {" "}
          Like Cities
        </Text>
        <Flex
          as="article"
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
        >
          {cities.map(city => (
            <CityCard {...rest} key={city.id} city={city} />
          ))}
        </Flex>
      </Container>
    </>
  );
}

const mapStatetoProps = state => {
  const { user } = state;
  return {
    // cities: user.state.likes
    cities: state.displayedCities
  };
};

export default connect(mapStatetoProps, {
  deleteLikedCity
})(LikedCities);
