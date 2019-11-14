import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/signup.js";
import Error from "./Error";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

function SignUp({ signup, history, error }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    const response = await signup(data);

    console.log(response);
    if (response === "Successful") {
      history.push("/");
    } else {
      console.log(response);
    }
  };
  console.log(errors);

  return (
    <Container maxWidth="sm">
      {error && <Error error={error} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          ref={register({ required: true, minLength: 2 })}
        />
        <Input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <Input
          type="Password"
          placeholder="password"
          name="password"
          ref={register({ required: true, minLength: 6 })}
        />
        <Input
          type="text"
          placeholder="Location"
          name="location"
          ref={register({ required: true, minLength: 2 })}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    error: state.signupError
  };
};

export default withRouter(connect(mapStateToProps, { signup })(SignUp));
