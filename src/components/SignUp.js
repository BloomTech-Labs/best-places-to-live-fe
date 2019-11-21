import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { signup } from "../actions/signup.js";
import Error from "./Error";
import {
  Container,
  Form,
  Button,
  Input,
  Text,
  StyledLink
} from "../styles/index";

function SignUp({ signup, error, ...rest }) {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });
  const onSubmit = async data => {
    const response = await signup(data);

    if (response === "Successful") {
      rest.history.push("/");
    } else {
    }
  };

  return (
    <Container>
      {error && <Error error={error} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {errors.name &&
          "Your name is required and must be at least 2 characters."}
        <Input
          type="text"
          placeholder="Name"
          name="name"
          ref={register({ required: true, minLength: 2 })}
        />
        {errors.email && "Your email is required"}
        <Input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.password && "Your password is required"}
        <Input
          type="Password"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.location && "Your location is required"}
        <Input
          type="text"
          placeholder="Location"
          name="location"
          ref={register({ required: true, minLength: 2 })}
        />
        <Container textAlign="center">
          {/* <SocialButton Google>Continue with Google</SocialButton>
          <SocialButton Facebook>Continue with Facebook</SocialButton> */}
          <Button type="submit" disabled={!formState.isValid}>
            Sign Up
          </Button>
          <Text as="h1" color="black">
            Already have an account?
          </Text>
          <StyledLink to="/login">
            <Text as="h1" color="blue">
              Log In
            </Text>
          </StyledLink>
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

export default connect(mapStateToProps, { signup })(SignUp);
