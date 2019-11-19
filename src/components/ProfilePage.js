import React from "react";
import { connect } from "react-redux";
import { Container, Text } from "../styles/index";

function ProfilePage({ user }) {
  console.log(user);
  //props = username
  return (
    <Container>
      <Text fontWeight="bold">Name: {user.name} </Text>
      <Text>
        <b>Email: </b>
        {user.email}
      </Text>
    </Container>
  );
}

const mapStatetoProps = state => {
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStatetoProps)(ProfilePage);
