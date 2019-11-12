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
  error,
  history,
  isFetching,
  locationError,
  locationIsFetching
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
    if (!locationError) {
      history.push("/search-results-page");
    }
  };

  //   useEffect(() => {
  //     async function fetchData() {
  //       const fetchResults = await fetchFactors();
  //       console.log(fetchResults);
  //       if (!error) {
  //         setFactors(fetchResults);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  console.log("Explore Page", error);
  return (
    <>
      <Error error={error} />
      <Error error={locationError} />

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
    error,
    locationError: state.locationReducer.error,
    locationIsFetching: state.locationReducer.isFetching
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchLocations, fetchFactors }
  )(ExplorePage)
);

// Link connected to redux
//  - fetchLocations
//  - pass in array of factors selected
// import top 10 factors from another file (which maybe would be an endpoint in the future)
