import React, { useEffect } from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import { Container, Flex, Text } from "../styles/index";
import { fetchTopCities } from "../actions/topCities";

function TopCities({ topCities, fetchTopCities, ...props }) {
  useEffect(() => {
    fetchTopCities({});
  }, [fetchTopCities]);

  return (
    <Container p={`0 15px`}>
      <Flex
        flexDirection="column"
        alignItems="center"
        display="flex"
        justifyContent="center"
      ></Flex>
      <Flex
        justifyContent="center"
        flexDirection="row"
        // flexWrap="wrap"
        overflowY="hidden"
        overflowX="scroll"
      >
        {topCities.map(city => (
          <CityCard key={city.id} city={city} page="topCities" {...props} />
        ))}
      </Flex>
    </Container>
  );
}

const mapStatetoProps = state => {
  return {
    topCities: state.topCities
  };
};

export default connect(mapStatetoProps, { fetchTopCities })(TopCities);
