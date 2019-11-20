import React from "react";
import { connect } from "react-redux";
import { Container, Text, Button } from "../styles/index";
import { logout } from "../actions/logout";

function ProfilePage({ user, history, logout }) {
  const logoutHandler = () => {
    console.log("here");
    logout();
    history.push("/");
  };

  return (
    <Container>
      <Text fontWeight="bold">Name: {user.name} </Text>
      <Text>
        <b>Email: </b>
        {user.email}
      </Text>
      <Text>
        <b>Location: </b>
        {user.location}
      </Text>
      <Button onClick={logoutHandler}>Logout </Button>
    </Container>
  );
}

const mapStatetoProps = state => {
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStatetoProps, { logout })(ProfilePage);
