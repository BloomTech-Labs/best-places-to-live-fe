import React from "react";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import { Container, StyledLink, Flex, Text, Hero } from "../styles/index";

const LandingPage = () => {
  return (
    <>
      <Container as="main">
        <Hero>
          <Text textAlign="center" as="h2">
            X Marks the Spot
          </Text>
          <SearchBar page="landing" />
        </Hero>
        <Container>
          <Text as="h2">
            <StyledLink color="black" to="/explore">
              Explore!
            </StyledLink>
          </Text>
          <Flex>For the category/ factors cards</Flex>
        </Container>
        <Container>
          <Text as="h2">Popular Cities: </Text>
          <Flex>For the City cards</Flex>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
