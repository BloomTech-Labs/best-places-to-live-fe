import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Footer from "./Footer";
import { fetchLocationsByFactors } from "../actions/locationsByFactors";
import { fetchFactors } from "../actions/factors";
import Error from "./Error";
import { connect } from "react-redux";
import useForm from "react-hook-form";

const ExplorePage = ({
  fetchLocationsByFactors,
  fetchFactors,
  history,
  isFetching,
  factors,
  fetchFactorsError,
  fetchLocationsByFactorsError
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    // event.preventDefault();
    const selectedFactors = Object.keys(data).filter(factor => data[factor]);
    // console.log("checkbox data", selectedFactors);
    const response = await fetchLocationsByFactors(selectedFactors);

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
      {fetchFactorsError && <Error error={fetchFactorsError} />}
      {fetchLocationsByFactorsError && (
        <Error error={fetchLocationsByFactorsError} />
      )}
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
    fetchFactorsError: state.fetchFactorsError,
    fetchLocationsByFactorsError: state.fetchLocationsByFactorsError
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchLocationsByFactors, fetchFactors })(
    ExplorePage
  )
);
