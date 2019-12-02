import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Flex, Text, Button } from "../styles/index";
import { logout } from "../actions/logout";
import Footer from "./Footer";
import CheckOval from "./CheckOval";

function ProfilePage({ user, history, logout, ...rest }) {
  const logoutHandler = () => {
    logout();
    history.push("/");
  };

  const onSubmit = async data => {
    // event.preventDefault();
    const selectedFactors = Object.keys(data).filter(factor => data[factor]);
    const response = await fetchLocationsByFactors(selectedFactors);

    if (response === "Successful") {
      rest.history.push("/search");
    } else {
    }
  };

  useEffect(() => {
    async function fetchData() {
      await fetchFactors();
    }
    fetchData();
  }, [fetchFactors]);

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            marginTop="10px"
          >
            {user.factors.map(factor => {
              return (
                <>
                  <CheckOval factor={factor} register={register} />
                </>
              );
            })}
          </Container>
        </form>
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

export default connect(mapStatetoProps, { logout })(ProfilePage);
