import React, { useState } from "react";
import "styled-components/macro";
import css from "@styled-system/css";
import { Flex, Text, Container } from "../styles/index";
import { getData } from "../utils/barData";
import { factors } from "../utils/factors";
import BarGraph from "./BarGraph";
import FactorSelect from "./FactorSelect";
import useWindowSize from "../hooks/useWindowSize";

const CityStats = ({ city1, city2, history }) => {
  //Factors is [{factor: , displayName, etc}]
  const [factorSelected, setFactorSelected] = useState(factors[0].displayName);

  const size = useWindowSize();
  const mobile = size.width < 500;

  const handleSelect = factor => {
    console.log("handled", factor);
    setFactorSelected(factor);
  };

  return (
    <Container width="100%" minHeight="100vh">
      <Flex justifyContent="center" width="100%">
        <Text textAlign="center" as="h1" m={"20px auto"}>
          {city1.name} vs {city2.name}
        </Text>
      </Flex>

      <Container
        height={["460px", "60%"]}
        // width="50%"
        m={"0 auto"}
        maxWidth={1200}
      >
        <BarGraph
          data={getData(city1, city2).filter(
            obj => obj.factor == factorSelected
          )}
          city1={city1}
          city2={city2}
          history={history}
          mobile={mobile}
        />
      </Container>

      <Flex justifyContent="center">
        {/* BE does not have ranked_population in their dataset */}
        <FactorSelect
          factors={factors.filter(
            factor => factor.factor != "ranked_population"
          )}
          handleSelect={handleSelect}
          factorSelected={factorSelected}
        />
      </Flex>
    </Container>
  );
};

export default CityStats;
