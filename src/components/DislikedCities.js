import React from "react";
import { deleteDislikedCity } from "../actions/deleteDislikedCity";
import { Container, Flex, Text, Hero, Box } from "../styles/index";
import { connect } from "react-redux";
import CityCard from "./CityCard";

function DislikedCities({ cities, deleteDislikedCity, ...rest }) {
  const deleteDislike = "deleteDislike";

  return (
    <>
      <Container p={`0 15px`}>
        <Text as="h2" textAlign="center">
          {" "}
          Disliked Cities
        </Text>
        <Flex
          as="article"
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
        >
          {cities.map(city => (
            <CityCard
              actionType={deleteDislike}
              page="profile"
              {...rest}
              key={city.id}
              city={city}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
}

const mapStatetoProps = state => {
  const { user } = state;
  return {
    // cities: user.state.dislikes
    cities: state.displayedCities
  };
};

export default connect(mapStatetoProps, {
  deleteDislikedCity
})(DislikedCities);
