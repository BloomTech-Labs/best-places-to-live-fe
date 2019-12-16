import React from "react";
import "styled-components/macro";
import css from "@styled-system/css";
import { Form, Button, Box } from "../styles/index";
import { useFetch } from "../hooks/useFetch";
import useForm from "react-hook-form";
import LoadingComponent from "./LoadingComponent";

const CityComparisonForm = () => {
  let cities = useFetch("https://bestplacesbe-test.herokuapp.com/city/all");

  const { register, submit } = useForm();

  if (!cities.isLoading && cities.response) {
    cities = cities.response.cities;
    cities = cities.sort((a, b) => a.name.localeCompare(b.name));
    console.log(cities);
    return (
      <Form>
        <Box
          fontSize="1.1rem"
          fontFamily="Noto Sans"
          mb={20}
          as="select"
          name="Cities"
          ref={register}
          css={css({
            "&:hover": {
              cursor: "pointer"
            }
          })}
        >
          {cities.map(city => (
            <option value={city._id}>{city.name}</option>
          ))}
        </Box>
        <Button>Compare</Button>
      </Form>
    );
  } else {
    return <LoadingComponent />;
  }
};

export default CityComparisonForm;
