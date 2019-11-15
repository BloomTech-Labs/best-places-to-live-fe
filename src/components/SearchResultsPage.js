import React from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import Footer from "./Footer";
import { Container, Flex, Text } from "../styles/index";

function SearchResultsPage({ displayedCities }) {
  //props = from state => displayedCities

  return (
    <Container>
      <Text as="h2" textAlign="center">
        {" "}
        Search Results
      </Text>
      <Flex justifyContent="center" flexWrap="wrap">
        {displayedCities.map(city => (
          <CityCard key={city._id} city={city} />
        ))}
      </Flex>
      <Footer />
    </Container>
  );
}

const mapStatetoProps = state => {
  return {
    displayedCities: state.displayedCities
  };
};

export default connect(mapStatetoProps)(SearchResultsPage);
