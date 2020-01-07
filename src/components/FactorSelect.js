import React from "react";
import "styled-components/macro";
import css from "@styled-system/css";
import { Form, Box } from "../styles/index";
import LoadingComponent from "./LoadingComponent";

const FactorSelect = ({ handleSelect, factors }) => {
  //factors is array of objects, such as [{factor: "ranked_population", displayName: "Population"}]

  const handleChange = event => {
    handleSelect(event.target.value);
  };

  if (factors) {
    console.log(factors);
    return (
      <>
        <Box
          fontSize="1.1rem"
          fontFamily="Noto Sans"
          mb={20}
          onChange={handleChange}
          onBlur={handleChange}
          as="select"
          name="city"
          css={css({
            "&:hover": {
              cursor: "pointer"
            }
          })}
        >
          {factors.map(factor => (
            <option key={factor.factor} value={factor.displayName}>
              {factor.displayName}
            </option>
          ))}
        </Box>
      </>
    );
  } else {
    return <LoadingComponent />;
  }
};

export default FactorSelect;
