import React from "react";
import { connect } from "react-redux";
import { Flex, Text, Button } from "../styles/index";
import { logout } from "../actions/logout";

function ProfilePage({ user, history, logout }) {
  const logoutHandler = () => {
    logout();
    history.push("/");
  };

  return (
    <Flex>
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
    </Flex>
  );
}

const mapStatetoProps = state => {
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStatetoProps, { logout })(ProfilePage);
