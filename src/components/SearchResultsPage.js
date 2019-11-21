import React from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import Footer from "./Footer";
import { Container, Flex, Text, Hero, Box } from "../styles/index";
import SearchByFactors from "./SearchByFactors";
import heroImg from "../img/seattle.jpg";
import SearchBar from "./SearchBar";

function SearchResultsPage({ displayedCities, ...rest }) {
  return (
    <>
      <Hero
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        background={` 
      linear-gradient(
        rgba(0, 0, 0, 0.30), 
        rgba(0, 0, 0, 0.30)
      ),

      url(${heroImg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        padding="40px"
      >
        <Box>
          <Text textAlign="center" as="h2" fontSize={"2.5rem"} color="white">
            Search
          </Text>
        </Box>
        <SearchBar {...rest} />
      </Hero>
      <Container p={`0 15px`}>
        <Flex
          flexDirection="column"
          alignItems="center"
          display="flex"
          justifyContent="center"
        >
          <SearchByFactors {...rest} />
        </Flex>
        <Text as="h2" textAlign="center">
          {" "}
          Search Results
        </Text>
        <Flex
          as="article"
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
        >
          {displayedCities.map(city => (
            <CityCard key={city._id} city={city} />
          ))}
        </Flex>
        <Footer />
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
