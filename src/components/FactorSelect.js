import React from "react";
import "styled-components/macro";
import css from "@styled-system/css";
import { Form, Flex, FactorButton } from "../styles/index";
import LoadingComponent from "./LoadingComponent";

const FactorSelect = ({ handleSelect, factors, factorSelected }) => {
  //factors is array of objects, such as [{factor: "ranked_population", displayName: "Population"}]

  const handleClick = event => {
    handleSelect(event.target.value);
  };

  if (factors) {
    return (
      <>
        <Flex
          maxWidth="790px"
          margin="0 auto"
          flexWrap="wrap"
          justifyContent="center"
          mb={20}
          name="city"
          css={css({
            "&:hover": {
              cursor: "pointer"
            }
          })}
        >
          {factors.map(factor => (
            <FactorButton
              onClick={handleClick}
              value={factor.displayName}
              key={factor.factor}
              active={factor.displayName === factorSelected ? true : null}
            >
              {factor.displayName}
            </FactorButton>
          ))}
        </Flex>
      </>
    );
  } else {
    return <LoadingComponent />;
  }
};

export default FactorSelect;
