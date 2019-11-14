import React, { useState } from "react";
import useForm from "react-hook-form";
import { fetchLocationsByName } from "../actions/locationsByName";
import { connect } from "react-redux";
import Error from "./Error";
import { withRouter } from "react-router-dom";

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
    <>
      {error && <Error error={error} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="location"
          name="location"
          ref={register({ required: true, minLength: 1 })}
        />

        <button type="submit">Search</button>
      </form>
    </>
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
