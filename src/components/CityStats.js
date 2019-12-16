import React from "react";
import { Flex, Text } from "../styles/index";

const CityStats = ({ city }) => {
  return (
    <Flex justifyContent="center">
      <Text as="h2">{city.name}</Text>
    </Flex>
  );
};

export default CityStats;
