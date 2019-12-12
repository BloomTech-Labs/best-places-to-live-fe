import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { signup } from "../actions/signup.js";
import { Container, Form, Button, Input, Grid } from "../styles/index";
import { toast } from "react-toastify";

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
    console.log(data);

    const response = await signup(data);

    if (response === "Successful") {
      rest.history.push("/");
    } else {
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid gridTemplateColumns="repeat(2, 1fr)" gridGap="0 10px">
          {errors.name &&
            "Your first name is required and must be at least 2 characters."}
          <Input
            type="text"
            placeholder="First Name"
            name="fname"
            ref={register({ required: true, minLength: 2 })}
            width="75%"
          />
          {errors.name &&
            "Your last name is required and must be at least 2 characters."}
          <Input
            type="text"
            placeholder="Last Name"
            name="lname"
            ref={register({ required: true, minLength: 2 })}
            width="75%"
          />
        </Grid>
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
          ) &&
          toast.error("chicken")}
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
          <Button type="submit" disabled={!formState.isValid}>
            Sign Up
          </Button>
        </Container>
      </Form>
    </Container>
  );
}

export default connect(null, { signup })(SignUp);
