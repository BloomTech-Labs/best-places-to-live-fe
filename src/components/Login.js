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
  Text,
  StyledLink
} from "../styles/index";

function Login({ login, error, ...rest }) {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });
  const onSubmit = async data => {
    const response = await login(data);
    if (response === "Successful") {
      rest.history.push("/profile");
    } else {
    }
  };

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
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
        />
        <Container textAlign="center">
          {/* <SocialButton Google>Continue with Google</SocialButton>
          <SocialButton Facebook>Continue with Facebook</SocialButton> */}
          <Button type="submit" disabled={!formState.isValid}>
            Log In
          </Button>
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
