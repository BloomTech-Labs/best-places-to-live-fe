import React from "react";
import "styled-components/macro";
import css from "@styled-system/css";
import { Form, Box } from "../styles/index";
import useForm from "react-hook-form";
import LoadingComponent from "./LoadingComponent";

const FactorSelect = ({ handleSelect, factors }) => {
  //factors is array of objects, such as [{factor: "ranked_population", displayName: "Population"}]
  const { register } = useForm();

  const handleChange = event => {
    handleSelect(event.target.value);
  };

  if (factors) {
    return (
      <Form>
        <Box
          fontSize="1.1rem"
          fontFamily="Noto Sans"
          mb={20}
          onChange={handleChange}
          as="select"
          name="city"
          ref={register}
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
      </Form>
    );
  } else {
    return <LoadingComponent />;
  }
};

export default FactorSelect;
