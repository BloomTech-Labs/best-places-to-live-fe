import React from "react";
import { deleteDislikedCity } from "../actions/deleteDislikedCity";
import { Container, Flex, Text, Hero, Box, Grid } from "../styles/index";
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
        <Grid>
          {cities.map(city => (
            <CityCard
              actionType={deleteDislike}
              page="profile"
              {...rest}
              key={city._id}
              city={city}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}

const mapStatetoProps = state => {
  const { user } = state;
  return {
    cities: state.user.dislikes
  };
};

export default connect(mapStatetoProps, {
  deleteDislikedCity
})(DislikedCities);
