import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Footer from "./Footer";
import { fetchLocations } from "../actions/locationsByFactors";
import { fetchFactors } from "../actions/factors";
import Error from "./Error";
import { connect } from "react-redux";
import useForm from "react-hook-form";

const ExplorePage = ({
  fetchLocations,
  fetchFactors,
  history,
  isFetching,
  factors,
  error
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    // event.preventDefault();
    const selectedFactors = Object.keys(data).filter(factor => data[factor]);
    // console.log("checkbox data", selectedFactors);
    const response = await fetchLocations(selectedFactors);

    if (response === "Successful") {
      history.push("/search");
    } else {
      console.log(response);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await fetchFactors();
    }
    fetchData();
  }, [fetchFactors]);

  return (
    <>
      {/* <Error error={locationsError ? "Failure to find locations" : ""} /> */}
      {error && <Error error={error} />}
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
  return {
    isFetching: state.isFetching,
    factors: state.user.factors,
    error: state.error
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchLocations, fetchFactors })(ExplorePage)
);
