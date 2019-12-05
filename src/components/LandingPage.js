import React from "react";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import {
  Container,
  StyledLink,
  Flex,
  Text,
  Hero,
  Box,
  Button
} from "../styles/index";
import heroImg from "../img/hero.jpg";
import TopCities from "./TopCities";
import { factors, randomFactor } from "../utils/factors";

const LandingPage = props => {
  const chosenFactor = randomFactor(factors);

  return (
    <>
      <Container as="main">
        <Hero
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          background={` 
          linear-gradient(
            rgba(0, 0, 0, 0.30), 
            rgba(0, 0, 0, 0.30)
          ),
          
          url(${heroImg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          padding="130px 100px 100px"
        >
          <Box>
            <Text textAlign="center" as="h2" fontSize={"2.5rem"} color="white">
              Live in the Best Place
            </Text>
          </Box>
          <SearchBar page="landing" {...props} />
        </Hero>
        <Container textAlign="center">
          <Text as="h2">
            <StyledLink color="black" to="/explore">
              <Button> Explore!</Button>
            </StyledLink>
          </Text>
          {/* <Flex>For the category/ factors cards</Flex> */}
        </Container>
        <Container textAlign="center">
          <Text as="h2" textAlign="center">
            Popular Cities
          </Text>
          <TopCities factor="score_total" {...props} />
          <Text as="h2" textAlign="center">
            Best Cities for {chosenFactor.displayName}
          </Text>
          <TopCities factor={chosenFactor.factor} {...props} />
        </Container>
      </Container>
      <Footer />
    </>
  );
};
//
export default LandingPage;
