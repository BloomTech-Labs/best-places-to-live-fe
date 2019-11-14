import React, { useState } from "react";
import useForm from "react-hook-form";
import { fetchLocations } from "../actions/locations";
import { connect } from "react-redux";
import Error from "./Error";
import { withRouter } from "react-router-dom"

function SearchByCity({ history, fetchLocations, isFetching, error }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    const fetchResult = await fetchLocations({ searchTerm: data.location });
    //If no error, push user to new page else
 
    if (fetchResult === "Successful") {
      history.push("/search")
    }
    // return !error ?  : null;
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
  const { isFetching, error } = state;
  return {
    isFetching,
    error
  };
};

export default withRouter(connect(
  mapStateToProps,
  { fetchLocations }
)(SearchByCity));
