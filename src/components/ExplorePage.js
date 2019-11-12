import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Footer from "./Footer";
import { fetchLocations } from "../actions/locations";
import { fetchFactors } from "../actions/factors";
import Error from "./Error";
import { connect } from "react-redux";
import useForm from "react-hook-form";

const ExplorePage = ({
  fetchLocations,
  fetchFactors,
  fetchingError,
  history,
  isFetching,
  locationsError,
  locationsIsFetching,
  factors
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    const selectedFactors = Object.keys(data).filter(factor => data[factor]);
    console.log("checkbox data", selectedFactors);
    const fetchResult = await fetchLocations(selectedFactors);
    //If no error, push user to new page else
    if (!locationsError) {
      history.push("/search-results-page");
    }
  };

  useEffect(() => {
    async function fetchData() {
      await fetchFactors();
    }
    fetchData();
  }, []);

  return (
    <>
      {/* <Error error={locationsError ? "Failure to find locations" : ""} /> */}
      {fetchingError && <Error error={fetchingError} />}
      {locationsError && <Error error={locationsError} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        {factors.map(factor => {
          return (
            <>
              <label htmlFor={factor}>{factor}</label>
              <input
                type="checkbox"
                placeholder={factor}
                name={factor}
                ref={register}
              />
            </>
          );
        })}

        <button type="submit">Explore</button>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  const { isFetching, error } = state.factorsReducer;
  return {
    isFetching,
    factors: state.factorsReducer.user.factors,
    fetchingError: error,
    locationsError: state.locationsReducer.error,
    locationsIsFetching: state.locationsReducer.isFetching
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchLocations, fetchFactors }
  )(ExplorePage)
);
