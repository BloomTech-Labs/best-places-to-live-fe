import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../actions/login.js";
import {
  Container,
  Form,
  Button,
  Input,
  Text,
  StyledLink,
  SocialButton
} from "../styles/index";

function Login({ login, ...rest }) {
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
          <SocialButton Google>Continue with Google</SocialButton>

          <Button type="submit" disabled={!formState.isValid}>
            Log In
          </Button>
        </Container>
      </Form>
      <SocialButton
        Facebook
        href="https://bestplacesbe.herokuapp.com/auth/facebook
    "
      >
        Continue with Facebook
      </SocialButton>
    </Container>
  );
}

export default connect(null, { login })(Login);
