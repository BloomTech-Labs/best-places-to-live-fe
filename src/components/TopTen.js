import React, { useEffect } from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import { Container, Flex, Text } from "../styles/index";
import SearchByFactors from "./SearchByFactors";
import Error from "./Error";
import { fetchTopTen } from "../actions/topTen";

function TopTen({ topTen, fetchTopTenError, fetchTopTen }) {
  useEffect(() => {
    const response = fetchTopTen({});
  }, []);

  return (
    <Container p={`0 15px`}>
      {fetchTopTenError && <Error error={fetchTopTenError} />}
      <Flex
        flexDirection="column"
        alignItems="center"
        display="flex"
        justifyContent="center"
      ></Flex>
      <Text as="h2" textAlign="center">
        {" "}
        Top Ten
      </Text>
      <Flex display="flex" justifyContent="center" flexWrap="wrap">
        {topTen.map(city => (
          <CityCard key={city._id} city={city} />
        ))}
      </Flex>
    </Container>
  );
}

const mapStatetoProps = state => {
  return {
    topTen: state.topTen,
    fetchTopTenError: state.fetchTopTenError
  };
};

export default connect(mapStatetoProps, { fetchTopTen })(TopTen);
