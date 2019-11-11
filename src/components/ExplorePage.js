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
  isFetching
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
    console.log(data);

    const fetchResult = await fetchLocations({ factors });
    //If no error, push user to new page else
    if (!error) {
      history.push("/search-results-page");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const fetchResults = await fetchFactors();
      console.log(fetchResults);
      if (!error) {
        setFactors(fetchResults);
      }
    }
    fetchData();
  }, []);

  console.log("Explore Page", error);
  return (
    <>
      <Error error={error} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="location"
          name="location"
          ref={register({ required: true, minLength: 1 })}
        />

        <button type="submit">Search</button>
        <Link to="/search-results-page">
          <button>Explore!</button>
        </Link>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  console.log(" Explore page state", state.factorsReducer);

  return {
    isFetching: state.factorsReducer.isFetching,
    error: state.factorsReducer.error
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
