import React, { useState } from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import Footer from "./Footer";
import { Container, Flex, Grid, Text, Hero, Box } from "../styles/index";
import heroImg from "../img/seattle.jpg";
import SearchBar from "./SearchBar";
import AddFilters from "./AddFilters";
import Modal from "./Modal";
import { factors, randomFactor } from "../utils/factors";

function SearchResultsPage({ displayedCities, ...rest }) {
  const chosenFactor = randomFactor(factors);

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

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
          <Modal show={show} handleClose={hideModal}>
            <AddFilters />
          </Modal>
          <AddFilters />
        </Flex>
        <Text as="h2" textAlign="center">
          {" "}
          Search Results
        </Text>
        <Grid>
          {displayedCities.map(city => (
            <CityCard {...rest} key={city._id} city={city} page="search" />
          ))}
        </Grid>
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
