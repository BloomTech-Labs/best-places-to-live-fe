import React from "react";
import { fetchLocationsByFactors } from "../actions/locationsByFactors";
import { connect } from "react-redux";
import useForm from "react-hook-form";
import CheckOval from "./CheckOval";
import { Button, Text, Container, Flex, Grid } from "../styles/index";
import { factors, categoriesWithFactors } from "../utils/factors";
import DislikeIcon from "./DislikeIcon";
import theme from "../theme";

console.log(categoriesWithFactors);

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
      <Container
        flexWrap="nowrap"
        display="flex"
        justifyContent="space-between"
        margin="8px auto 0"
        maxWidth="800px"
        width="100%"
        borderBottom={`.5px solid ${theme.colors.blackPearl}`}
        backgroundColor="athensGray"
      >
        <Button border="none">Clear All</Button>
        <Text>Filters</Text>
        <DislikeIcon
          actionType="closeModal"
          handleClose={handleClose}
          iconColor="black"
        ></DislikeIcon>
      </Container>
      <Text textAlign="center" color="black" as="h2" fontSize={5}>
        Refine Your Search
      </Text>
      <Text textAlign="center" color="black" as="h3" fontSize={2}>
        Select the variables most important to you:
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          flexDirection="column"
          maxWidth="600px"
          flexWrap="wrap"
          width="100%"
          margin="0 auto"
          alignItems="center"
        >
          {Object.keys(categoriesWithFactors).map(category => {
            return (
              <Flex flexDirection="column" alignItems="center">
                <Text
                  as="h3"
                  textAlign="center"
                  fontSize="1.25rem"
                  color="choronozon"
                >
                  {category}
                </Text>
                <Flex flexWrap="wrap" justifyContent="center">
                  {categoriesWithFactors[category].map((factor, index) => {
                    return (
                      <CheckOval
                        key={index}
                        factor={factor}
                        register={register}
                      />
                    );
                  })}
                </Flex>
              </Flex>
            );
          })}
        </Flex>
        <Flex
          marginTop="0.8rem"
          alignItems="center"
          justifyContent="center"
          backgroundColor="athensGray"
          padding="0.5rem 0"
          borderTop={`0.5px solid ${theme.colors.blackPearl}`}
        >
          <Button
            type="submit"
            color="white"
            backgroundColor="scienceBlue"
            marginBottom="0rem"
            fontSize="1rem"
          >
            SUBMIT
          </Button>
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
