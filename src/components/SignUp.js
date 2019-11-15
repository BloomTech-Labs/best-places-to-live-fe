import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/signup.js";
import Error from "./Error";
import {
  Container,
  Form,
  Button,
  Input,
  SocialButton,
  SignUpP,
  StyledLink
} from "../styles/index";

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
    <Container>
      {error && <Error error={error} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <Container center zeroPadding>
          <SocialButton Google>Continue with Google</SocialButton>
          <SocialButton Facebook>Continue with Facebook</SocialButton>
          <Button type="submit">Join BPTL</Button>
          <SignUpP>Already have an account?</SignUpP>
          <StyledLink to="/login">Log In</StyledLink>
        </Container>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    error: state.signupError
  };
};

export default withRouter(connect(mapStateToProps, { signup })(SignUp));
