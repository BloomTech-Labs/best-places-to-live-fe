import React, { useEffect } from "react";
import Footer from "./Footer";
import { fetchLocationsByFactors } from "../actions/locationsByFactors";
import { fetchFactors } from "../actions/factors";
import Error from "./Error";
import { connect } from "react-redux";
import useForm from "react-hook-form";
import CheckOval from "./CheckOval";
import { Button } from "../styles/index";

const ExplorePage = ({
  fetchLocationsByFactors,
  fetchFactors,
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
    const response = await fetchLocationsByFactors(selectedFactors);

    if (response === "Successful") {
      rest.history.push("/search");
    } else {
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

        <Button type="submit">Explore</Button>
      </form>
      <Footer />
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
})(ExplorePage);
