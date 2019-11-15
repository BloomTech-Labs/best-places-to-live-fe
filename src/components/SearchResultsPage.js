import React from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import Footer from "./Footer";
import { Container, Flex, Text } from "../styles/index";
import SearchByFactors from "./SearchByFactors";
import SearchByCity from "./SearchByCity";

function SearchResultsPage({ displayedCities }) {
  return (
    <Container p={`0 15px`}>
      <Flex
        flexDirection="column"
        alignItems="center"
        display="flex"
        justifyContent="center"
      >
        <SearchByCity />
        <SearchByFactors />
      </Flex>
      <Text as="h2" textAlign="center">
        {" "}
        Search Results
      </Text>
      <Flex display="flex" justifyContent="center" flexWrap="wrap">
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
