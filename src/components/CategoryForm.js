import React, { useEffect } from "react";
import { fetchLocationsByFactors } from "../actions/locationsByFactors";
import { categoriesWithFactors } from "../utils/factors";
import CheckOval from "./CheckOval";
import { Button, Text, Flex, Input } from "../styles/index";
import theme from "../theme";
import useForm from "react-hook-form";
import { connect } from "react-redux";

const CategoryForm = ({
  selectedFactors,
  handleClose,
  fetchLocationsByFactors,
  isFetching,
  ...rest
}) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const onSubmit = async data => {
    console.log(data);
    const chosenFactors = Object.keys(data).filter(factor => data[factor]);
    const response = await fetchLocationsByFactors(chosenFactors);

    if (response) {
      rest.history.push("/search");
    }

    //Closes modal if already on page
    handleClose();
  };

  useEffect(() => {
    //Change inputs to true if they are in selected factors in state
    selectedFactors.forEach(factor => setValue(factor, true));
  }, []);

  // console.log(
  //   Object.keys(categoriesWithFactors).map(category =>
  //     categoriesWithFactors[category].map((factor, index) => factor.displayName)
  //   )
  // );

  return (
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
            <Flex flexDirection="column" alignItems="center" key={category}>
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
        <Input type="reset" id="reset" display="none" />
        <Button
          type="submit"
          color="white"
          backgroundColor="scienceBlue"
          marginBottom="0rem"
          fontSize="1rem"
          borderRadius=".5rem"
        >
          SUBMIT
        </Button>
      </Flex>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    selectedFactors: state.selectedFactors,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { fetchLocationsByFactors })(
  CategoryForm
);
