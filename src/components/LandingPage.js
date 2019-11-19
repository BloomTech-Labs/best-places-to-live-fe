import React from "react";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import { Container, StyledLink, Flex, Text, Hero, Box } from "../styles/index";

const LandingPage = () => {
  return (
    <>
      <Container as="main">
        <Hero
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box>
            <Text textAlign="center" as="h2">
              X Marks the Spot
            </Text>
          </Box>
          <SearchBar page="landing" />
        </Hero>
        <Container textAlign="center">
          <Text as="h2">
            <StyledLink color="black" to="/explore">
              Explore!
            </StyledLink>
          </Text>
          <Flex>For the category/ factors cards</Flex>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
