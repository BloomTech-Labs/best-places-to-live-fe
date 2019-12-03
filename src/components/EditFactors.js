import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { Button, Container, Flex } from "../styles/index";
import CheckOval from "./CheckOval";
import { editFactors } from "../actions/editFactors";

function EditFactors({ factors, editFactors }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    // event.preventDefault();
    const selectedFactors = Object.keys(data).filter(factor => data[factor]);
    const response = await editFactors(selectedFactors);
  };

  return (
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
      <Flex justifyContent="center">
        <Button type="submit">Save</Button>
      </Flex>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    factors: state.user.factors
  };
};

export default connect(mapStateToProps, {
  editFactors
})(EditFactors);
