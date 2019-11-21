import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { fetchLocationsByFactors } from "../actions/locationsByFactors";
import { fetchFactors } from "../actions/factors";
import Error from "./Error";
import { connect } from "react-redux";
import useForm from "react-hook-form";
import { Box, Button } from "../styles/index";
import CheckOval from "./CheckOval";

const SearchByFactors = ({
  fetchLocationsByFactors,
  fetchFactors,
  history,
  isFetching,
  factors,
  fetchFactorsError,
  fetchLocationsByFactorsError,
  ...rest
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    // event.preventDefault();
    const selectedFactors = Object.keys(data).filter(factor => data[factor]);
    // console.log("checkbox data", selectedFactors);
    const response = await fetchLocationsByFactors(selectedFactors);

    if (response === "Successful") {
      rest.history.push("/search");
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
              <CheckOval factor={factor} register={register} />
            </>
          );
        })}
        <Box textAlign="center" mt={50}>
          <Button type="submit">Explore</Button>
        </Box>
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

export default connect(mapStateToProps, {
  fetchLocationsByFactors,
  fetchFactors
})(SearchByFactors);
