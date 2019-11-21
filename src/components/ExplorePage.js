import React, { useEffect } from "react";
import Footer from "./Footer";
import { fetchLocationsByFactors } from "../actions/locationsByFactors";
import { fetchFactors } from "../actions/factors";
import Error from "./Error";
import { connect } from "react-redux";
import useForm from "react-hook-form";
import CheckOval from "./CheckOval";
import { Button, Hero, Text, Container, Flex } from "../styles/index";
import exploreImg from "../img/exploreHero.jpg";

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
      <Hero
        display="flex"
        justifyContent="center"
        backgroundSize="cover"
        backgroundPosition="center center"
        background={` 
        linear-gradient(
          rgba(0, 0, 0, 0.30), 
          rgba(0, 0, 0, 0.30)
        ),

        url(${exploreImg})`}
        p={"100px"}
      >
        <Text color="white" as="h2" fontSize={5}>
          Explore
        </Text>
      </Hero>
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
          marginTop="10px"
        >
          {factors.map(factor => {
            return (
              <>
                <CheckOval factor={factor} register={register} />
              </>
            );
          })}
        </Container>
        <Flex>
          <Button type="submit">Explore</Button>
        </Flex>
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
