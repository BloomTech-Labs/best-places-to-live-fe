import React from "react";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import { Container, StyledLink, Flex, Text, Hero, Box } from "../styles/index";
import heroImg from "../img/hero.jpg";

const LandingPage = props => {
  return (
    <>
      <Container as="main">
        <Hero
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          backgroundImage={`url(${heroImg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          padding="100px"
        >
          <Box>
            <Text textAlign="center" as="h2">
              Live in the Best Place
            </Text>
          </Box>
          <SearchBar page="landing" {...props} />
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
//
export default LandingPage;
