import React, { useEffect } from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import { Container, Flex, Text } from "../styles/index";
import { fetchTopCities } from "../actions/topCities";

function TopCities({
  topCities,
  isFetching,
  factor,
  fetchTopCities,
  ...props
}) {
  useEffect(() => {
    fetchTopCities(factor);
  }, [fetchTopCities]);

  if (topCities[factor]) {
    return (
      <Container>
        <Flex
          flexDirection="row"
          // flexWrap="wrap"
          overflowY="hidden"
          overflowX="scroll"
        >
          {topCities[factor].map((city, index) => (
            <CityCard
              key={city._id}
              city={city}
              page="landing"
              index={index}
              {...props}
            />
          ))}
        </Flex>
      </Container>
    );
  } else {
    return <p>Is Loading</p>;
  }
}

const mapStatetoProps = state => {
  return {
    topCities: state.topCities,
    isFetching: state.isFetching
  };
};

export default connect(mapStatetoProps, { fetchTopCities })(TopCities);
