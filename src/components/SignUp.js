import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { signup } from "../actions/signup.js";
import {
  Container,
  Form,
  ProfileButton,
  Input,
  Text,
  Flex
} from "../styles/index";

function SignUp({ signup, ...rest }) {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });
  const onSubmit = async data => {
    const nameConcat = data.fname.concat(" ", data.lname);
    data = {
      name: nameConcat,
      email: data.email,
      password: data.password,
      location: data.location
    };

    const response = await signup(data);

    if (response) {
      rest.history.push("/");
    } else {
    }
  };

  return (
    <Container as="main" padding="0 2rem" height="100vh">
      <Text as="h2" fontSize={5} textAlign="center">
        Sign Up
      </Text>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Flex justifyContent="space-between">
            {errors.name &&
              "Your first name is required and must be at least 2 characters."}
            <Input
              type="text"
              placeholder="First Name"
              name="fname"
              width="calc(42% - 20px)"
              maxWidth="50%"
              ref={register({ required: true, minLength: 2 })}
            />
            {errors.name &&
              "Your last name is required and must be at least 2 characters."}
            <Input
              type="text"
              placeholder="Last Name"
              name="lname"
              width="calc(42% - 20px)"
              maxWidth="50%"
              ref={register({ required: true, minLength: 2 })}
            />
          </Flex>
          {errors.email && "Your email is required"}
          <Input
            type="text"
            placeholder="Email"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.password && (
            <ul>
              <li>Your password is required</li>
              <li>at least 8 characters</li>
              <li>1 uppercase letter</li>
              <li>1 numeral</li>
              <li>1 special character</li>
            </ul>
          )}
          <Input
            type="Password"
            placeholder="Password"
            name="password"
            ref={register({
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
            })}
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
            <ProfileButton type="submit" disabled={!formState.isValid}>
              Create Account
            </ProfileButton>
          </Container>
        </Form>
      </Container>
    </Container>
  );
}

export default connect(null, { signup })(SignUp);
