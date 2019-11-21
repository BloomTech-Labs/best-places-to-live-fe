import React, { useEffect } from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import { Container, Flex, Text } from "../styles/index";
import Error from "./Error";
import { fetchTopCities } from "../actions/topCities";

function TopCities({ topCities, fetchTopCitiesError, fetchTopCities }) {
  useEffect(() => {
    fetchTopCities({});
  }, [fetchTopCities]);

  return (
    <Container p={`0 15px`}>
      {fetchTopCitiesError && <Error error={fetchTopCitiesError} />}
      <Flex
        flexDirection="column"
        alignItems="center"
        display="flex"
        justifyContent="center"
      ></Flex>
      <Text as="h2" textAlign="center">
        {" "}
        Top Cities
      </Text>
      <Flex
        display="flex"
        justifyContent="center"
        flexDirection="row"
        flexWrap="wrap"
        overflowX="scroll"
      >
        {topCities.map(city => (
          <CityCard key={city._id} city={city} />
        ))}
      </Flex>
    </Container>
  );
}

const mapStatetoProps = state => {
  return {
    topCities: state.topCities,
    fetchTopCitiesError: state.fetchTopCitiesError
  };
};

export default connect(mapStatetoProps, { fetchTopCities })(TopCities);
