import React, { useEffect } from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import { Container, Grid, Text } from "../styles/index";
import LazyLoad from "react-lazyload";

function SearchResultsPage({ displayedCities, ...rest }) {
  useEffect(() => {}, [displayedCities]);
  return (
    <>
      <Container as="main" minHeight="100vh" p={`0 15px`}>
        <Text as="h2" fontSize="2rem" m={"1.2rem 0 1.2rem 0.5rem"}>
          {" "}
          Explore:
        </Text>
        <Grid>
          {displayedCities.map(city => (
            <LazyLoad resize>
              <CityCard {...rest} key={city._id} city={city} page="search" />
            </LazyLoad>
          ))}
        </Grid>
      </Container>
    </>
  );
}

const mapStatetoProps = state => {
  return {
    displayedCities: state.displayedCities
  };
};

export default connect(mapStatetoProps)(SearchResultsPage);
