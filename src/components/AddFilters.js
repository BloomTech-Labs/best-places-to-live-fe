import React from "react";
import Footer from "./Footer";
import { fetchLocationsByFactors } from "../actions/locationsByFactors";
import { connect } from "react-redux";
import useForm from "react-hook-form";
import CheckOval from "./CheckOval";
import { Button, Text, Container, Flex } from "../styles/index";
import { factors } from "../utils/factors";
import DislikeIcon from "./DislikeIcon";

const AddFilters = ({
  fetchLocationsByFactors,
  isFetching,
  handleClose,
  ...rest
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async data => {
    // event.preventDefault();
    const selectedFactors = Object.keys(data).filter(factor => data[factor]);
    const response = await fetchLocationsByFactors(selectedFactors);

    if (response === "Successful") {
      rest.history.push("/search");
    } else {
    }
  };

  return (
    <>
      <Container flexWrap="nowrap" display="flex">
        <Button>Clear All</Button>
        <Text>Filters</Text>
        <DislikeIcon
          actionType="closeModal"
          handleClose={handleClose}
          iconColor="black"
        ></DislikeIcon>
      </Container>
      <Text color="black" as="h2" fontSize={5}>
        Refine Your Search
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          marginTop="10px"
          width="15%"
          margin="0 auto"
        >
          {factors.map((factor, index) => {
            return (
              <CheckOval key={index} factor={factor} register={register} />
            );
          })}
        </Container>
        <Flex justifyContent="center">
          <Button type="submit">Submit</Button>
        </Flex>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {
  fetchLocationsByFactors
})(AddFilters);
