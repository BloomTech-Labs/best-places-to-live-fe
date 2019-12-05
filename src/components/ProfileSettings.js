import React, { useEffect } from "react";
import { connect } from "react-redux";
import useForm from "react-hook-form";
import {
  Container,
  Form,
  Input,
  Flex,
  Text,
  Button,
  LinkButton
} from "../styles/index";
import { updateProfile } from "../actions/updateProfile";
import { logout } from "../actions/logout";
import Footer from "./Footer";

function ProfileSettings({ user, history, logout, updateProfile, ...rest }) {
  const { register, handleSubmit, errors, formState } = useForm({ mode: 'onChange'});
  const onSubmit = async data => {
    const response = await updateProfile(data);
  };

  const logoutHandler = () => {
    logout();
    history.push("/");
  };

  return (
    <Container>
      <Flex
        flexDirection="column"
        alignItems="center"
        display="flex"
        justifyContent="center"
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          {errors.name && "Your name is required"}
          <Input
            type="text"
            defaultValue={user.name}
            name="name"
            ref={register({ required: true, minLength: 2 })}
        />
          {errors.email && "Your email is required"}
          <Input
            type="text"
            defaultValue={user.email}
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />

          {errors.location && "Your location is required"}
          <Input
            type="text"
            defaultValue={user.location}
            name="location"
            ref={register({ required: true, minLength: 2 })}
          />

          {errors.password && "Enter your password to make changes"}
          <Input
            type="Password"
            placeholder="Password"
            name="password"
            ref={register({ required: true })}
          />

          <Container textAlign="center">
            <Button type="submit" disabled={!formState.isValid}>
              Update
            </Button>
          </Container>
        </Form>

        {/*  Navlink to password change page */}

        <Button onClick={logoutHandler}>Logout </Button>
        {/* waiting on backend */}
        <LinkButton>Delete Account</LinkButton>
      </Flex>
      <Footer />
    </Container>
  );
}

const mapStatetoProps = state => {
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStatetoProps, { logout, updateProfile})(ProfileSettings);