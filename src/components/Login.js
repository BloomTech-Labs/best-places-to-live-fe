import React from "react";
import useForm from "react-hook-form";
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

function Login({ login, error, ...rest }) {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });
  console.log(formState.isValid);
  const onSubmit = async data => {
    console.log(login(data));
    const response = await login(data);
    console.log(response);
    if (response === "Successful") {
      rest.history.push("/profile");
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
        {errors.email && "Your email is required"}
        <Input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.password && "Your password is required"}
        <Input
          type="password"
          placeholder="password"
          name="password"
          ref={register({ required: true })}
        />
        <Container textAlign="center">
          {/* <SocialButton Google>Continue with Google</SocialButton>
          <SocialButton Facebook>Continue with Facebook</SocialButton> */}
          <Button type="submit" disabled={!formState.isValid}>
            Login
          </Button>
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

export default connect(mapStateToProps, { login })(Login);
