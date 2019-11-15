import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/login.js";
import Error from "./Error";
import {
  Container,
  Form,
  Button,
  Input,
  SocialButton,
  Text,
  StyledLink
} from "../styles/index";

function Login({ login, history, error }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    console.log(login(data));
    const response = await login(data);
    console.log(response);
    if (response === "Successful") {
      history.push("/profile");
    } else {
      console.log(response);
    }
  };
  console.log("Login Errors", errors);
  console.log(error);
  return (
    <Container>
      {error && <Error error={error} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          ref={register({ required: true })}
        />
        <Container textAlign="center">
          <SocialButton Google>Continue with Google</SocialButton>
          <SocialButton Facebook>Continue with Facebook</SocialButton>
          <Button type="submit">Login</Button>
          <Text>Already have an account?</Text>
          <StyledLink to="/login">Log In</StyledLink>
        </Container>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    error: state.loginError
  };
};

export default withRouter(connect(mapStateToProps, { login })(Login));
