import React, { useEffect } from "react";
import { fetchLocationsByFactors } from "../actions/locationsByFactors";
import { fetchFactors } from "../actions/factors";
import Error from "./Error";
import { connect } from "react-redux";
import useForm from "react-hook-form";
import { Box, Button, Container, Flex } from "../styles/index";
import CheckOval from "./CheckOval";

const SearchByFactors = ({
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
        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          {factors.map(factor => {
            return (
              <>
                <CheckOval factor={factor} register={register} />
              </>
            );
          })}
        </Container>
        <Box textAlign="center" mt={15}>
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
