import React from "react";
import "styled-components/macro";
import css from "@styled-system/css";
import { connect } from "react-redux";
import { Form, Button, Box } from "../styles/index";
import { useFetch } from "../hooks/useFetch";
import useForm from "react-hook-form";
import LoadingComponent from "./LoadingComponent";
import { addComparedCities } from "../actions/addComparedCities";

const CityComparisonForm = ({ addComparedCities, cityID, history }) => {
  let cities = useFetch("https://bestplacesbe-test.herokuapp.com/city/all");

  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    console.log(data);
    //pass in an array of ids
    const response = await addComparedCities([cityID, data.city]);
    console.log(response);
    //push
    if (response) {
      history.push("/compare");
    }
  };

  if (!cities.isLoading && cities.response) {
    cities = cities.response.cities;
    cities = cities.sort((a, b) => a.name.localeCompare(b.name));

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box
          fontSize="1.1rem"
          fontFamily="Noto Sans"
          mb={20}
          as="select"
          name="city"
          ref={register}
          css={css({
            "&:hover": {
              cursor: "pointer"
            }
          })}
        >
          {cities.map(
            city =>
              cityID !== city._id && (
                <option key={city._id} value={city._id}>
                  {city.name}
                </option>
              )
          )}
        </Box>
        <Button type="submit">Compare</Button>
      </Form>
    );
  } else {
    return <LoadingComponent />;
  }
};

export default connect(null, { addComparedCities })(CityComparisonForm);
