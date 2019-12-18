import React from "react";
import { Flex, Text, Container } from "../styles/index";
import { getData } from "../utils/barData";
import BarGraph from "./BarGraph";

const CityStats = ({ city1, city2, history }) => {
  return (
    <Container width="100%">
      <Flex justifyContent="center" width="100%">
        <Text as="h2">
          {city1.name} vs {city2.name}
        </Text>
      </Flex>
      <Flex justifyContent="center" width="100%">
        <Text as="h3">Factors</Text>
      </Flex>
      <Container height="40vw" width="100%" m={"0 auto"} maxWidth={1200}>
        <BarGraph
          data={getData(city1, city2)}
          city1={city1}
          city2={city2}
          history={history}
        />
      </Container>
    </Container>
  );
};

export default CityStats;
