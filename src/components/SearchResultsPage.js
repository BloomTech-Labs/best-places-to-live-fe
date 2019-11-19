import React from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import Footer from "./Footer";
import { Container, Flex, Text } from "../styles/index";
import SearchByFactors from "./SearchByFactors";
import SearchBar from "./SearchBar";

function SearchResultsPage({ displayedCities }) {
  return (
    <Container p={`0 15px`}>
      <Flex
        flexDirection="column"
        alignItems="center"
        display="flex"
        justifyContent="center"
      >
        <SearchBar />
        <SearchByFactors />
      </Flex>
      <Text as="h2" textAlign="center">
        {" "}
        Search Results
      </Text>
      <Flex as="article" display="flex" justifyContent="center" flexWrap="wrap">
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
