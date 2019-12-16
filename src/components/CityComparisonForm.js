import React from "react";
import { Form, Button } from "../styles/index";
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
        <select name="Cities" ref={register}>
          {cities.map(city => (
            <option value={city._id}>{city.name}</option>
          ))}
        </select>
        <Button>Compare</Button>
      </Form>
    );
  } else {
    return <LoadingComponent />;
  }
};

export default CityComparisonForm;
