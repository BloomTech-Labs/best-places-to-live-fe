import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../actions/login.js";
import { Container, Form, Text, Input, ProfileButton } from "../styles/index";

function Login({ login, ...rest }) {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });
  const onSubmit = async data => {
    const response = await login(data);
    if (response) {
      rest.history.push("/profile");
    } else {
    }
  };

  return (
    <Container as="main" p="0 20px" height="100vh">
      <Text as="h2" fontSize={5} textAlign="center">
        Login
      </Text>
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
            <ProfileButton type="submit" disabled={!formState.isValid}>
              Log In
            </ProfileButton>
          </Container>

          {/* <Flex flexDirection="column" alignItems="center">
          <FacebookButton
            Facebook
            href="https://bestplacesbe.herokuapp.com/auth/facebook
    "
          >
            Continue with Facebook
          </FacebookButton>
          <GoogleButton
            Google
            href="https://bestplacesbe-contest.herokuapp.com/auth/google"
          >
            Continue with Google
          </GoogleButton>
        </Flex> */}
        </Form>
      </Container>
    </Container>
  );
}

export default connect(null, { login })(Login);
//something
