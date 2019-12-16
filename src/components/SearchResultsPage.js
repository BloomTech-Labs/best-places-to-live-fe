import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import Footer from "./Footer";
import {
  Container,
  Flex,
  Grid,
  Text,
  Hero,
  Box,
  Button
} from "../styles/index";
import heroImg from "../img/seattle.jpg";
import SearchBar from "./SearchBar";
import AddFilters from "./AddFilters";
import Modal from "./Modal";

function SearchResultsPage({ displayedCities, ...rest }) {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  useEffect(() => {
    console.log(displayedCities);
  }, [displayedCities]);
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
          <Button
            display={show ? "none" : ""}
            onClick={showModal}
            borderRadius="1.25rem"
            borderColor="blue"
            padding="0.65rem 2rem"
            margin=".5rem"
            backgroundColor="scienceBlue"
            color="white"
          >
            Edit Filters
          </Button>
          <Modal show={show} handleClose={hideModal}>
            <AddFilters handleClose={hideModal} {...rest} />
          </Modal>
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
