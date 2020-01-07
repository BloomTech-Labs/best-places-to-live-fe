import React from "react";
import { deleteLikedCity } from "../actions/deleteLikedCity";
import { Container, Text, Grid } from "../styles/index";
import { connect } from "react-redux";
import CityCard from "./CityCard";

function LikedCities({ likedCities, deleteLikedCity, ...rest }) {
  const deleteLike = "deleteLike";
  console.log(likedCities);
  if (likedCities.length === 0) {
    return (
      <Container p={`0 15px`} textAlign="center">
        <Text as="h3" fontSize={3}>
          {" "}
          No Saved Cities
        </Text>

        <Text fontSize="1rem">Please add some cities.</Text>
      </Container>
    );
  }
  return (
    <>
      <Container p={`0 15px`}>
        <Text as="h2" fontSize={3} textAlign="center">
          {" "}
          Saved Cities
        </Text>
        <Grid>
          {likedCities.map(city => (
            <CityCard
              actionType={deleteLike}
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
  return {
    likedCities: state.user.likes
  };
};

export default connect(mapStatetoProps, {
  deleteLikedCity
})(LikedCities);
