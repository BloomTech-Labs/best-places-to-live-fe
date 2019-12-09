import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Flex, Text, Button } from "../styles/index";
import { logout } from "../actions/logout";
import Footer from "./Footer";
import LikedCities from "./LikedCities";

function ProfilePage({ user, history, logout, ...rest }) {
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
      <LikedCities />
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

export default connect(mapStatetoProps, {
  logout
})(ProfilePage);
