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
  locationsFetching
}) => {
  const [factors, setFactors] = useState([
    "Job Market",
    "Food",
    "Chicken",
    "Number of Diapers",
    "Proximity to Rack City"
  ]);

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
      //   const fetchResults = await fetchFactors();
      //   console.log(fetchResults);
      if (!fetchingError) {
        setFactors(fetchResults);
      }
    }
    fetchData();
  }, []);
  console.log(factors);
  return (
    <>
      <Error error={fetchingError ? "Failure to reach factors" : ""} />
      <Error error={locationsError ? "Failure to find locations" : ""} />

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
  console.log(state);
  return {
    isFetching,
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
