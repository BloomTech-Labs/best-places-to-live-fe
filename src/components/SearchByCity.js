import React, { useState } from "react";
import useForm from "react-hook-form";
import { fetchLocationsByName } from "../actions/locationsByName";
import { connect } from "react-redux";
import Error from "./Error";
import { withRouter } from "react-router-dom";
import { Container, Flex, Input, Button, Form } from "../styles/index";

function SearchByCity({ history, fetchLocationsByName, isFetching, error }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    const response = await fetchLocationsByName({
      searchTerm: data.location
    });
    //If no error, push user to new page else

    if (response === "Successful") {
      history.push("/search");
    } else {
      console.log(response);
    }
  };

  console.log("SearchByCity error", error);
  return (
    <Container>
      {error && <Error error={error} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="location"
          name="location"
          ref={register({ required: true, minLength: 1 })}
        />

        <Button type="submit">Search</Button>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  const { isFetching } = state;
  return {
    isFetching,
    error: state.fetchLocationsByNameError
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchLocationsByName })(SearchByCity)
);
