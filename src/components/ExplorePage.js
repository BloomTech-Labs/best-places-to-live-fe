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
    // event.preventDefault();
    const selectedFactors = Object.keys(data).filter(factor => data[factor]);
    // console.log("checkbox data", selectedFactors);
    const d = await fetchLocations(selectedFactors);
    console.log(d);

    if (d) {
      history.push("/search");
    } else {
      console.log(locationsError);
    }

    // try {
    //   history.push("/search");
    // } catch (e) {
    //   alert(e.message);
    // }
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
