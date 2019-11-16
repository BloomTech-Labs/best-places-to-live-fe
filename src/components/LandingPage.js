import React from "react";
import Footer from "./Footer";
import { Container, StyledLink, Flex, Text } from "../styles/index";

const LandingPage = () => {
  return (
    <>
      <Container as="main">
        <Text textAlign="center" as="h2">
          X Marks the Spot
        </Text>

        <StyledLink to="/explore">Explore!</StyledLink>
        <Container>
          <Text as="h2">Popular Cities: </Text>
          <Flex></Flex>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
