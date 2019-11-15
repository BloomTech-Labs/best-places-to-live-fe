import React from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import Footer from "./Footer";
import { Container, Flex } from "../styles/index";

function SearchResultsPage({ displayedCities }) {
  //props = from state => displayedCities

  return (
    <Container>
      <h2 className="search title"> Search Results</h2>
      <Flex>
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
