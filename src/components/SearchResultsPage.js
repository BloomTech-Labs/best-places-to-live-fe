import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
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
import AddFilters from "./AddFilters";
import Modal from "./Modal";
import LazyLoad from "react-lazyload";

function SearchResultsPage({ displayedCities, ...rest }) {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  useEffect(() => {}, [displayedCities]);
  return (
    <>
      <Container as="main" minHeight="100vh" p={`0 15px`}>
        <Flex
          flexDirection="column"
          alignItems="center"
          display="flex"
          justifyContent="center"
        >
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
            <LazyLoad resize>
              <CityCard {...rest} key={city._id} city={city} page="search" />
            </LazyLoad>
          ))}
        </Grid>
        ""
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
