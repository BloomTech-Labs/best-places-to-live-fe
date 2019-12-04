import React from "react";
import { deleteLikedCity } from "../actions/deleteLikedCity";
import { Container, Flex, Text, Hero, Box } from "../styles/index";
import { connect } from "react-redux";
import CityCard from "./CityCard";

function LikedCities({ likedCities, deleteLikedCity, ...rest }) {
  const deleteLike = "deleteLike";

  return (
    <>
      <Container p={`0 15px`}>
        <Text as="h2" textAlign="center">
          {" "}
          Liked Cities
        </Text>
        <Flex
          as="article"
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
        >
          {likedCities.map(city => (
            <CityCard
              actionType={deleteLike}
              page="profile"
              {...rest}
              key={city._id}
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
  console.log(state.user.likes);
  return {
    likedCities: state.user.likes
  };
};

export default connect(mapStatetoProps, {
  deleteLikedCity
})(LikedCities);
