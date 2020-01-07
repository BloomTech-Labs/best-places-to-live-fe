import React, { useState } from "react";
import {
  Container,
  Text,
  Hero,
  Button,
  Flex,
  StyledLink
} from "../styles/index";
import heroImg from "../img/hero.jpg";
import TopCities from "./TopCities";
import { factors, randomFactor } from "../utils/factors";
import Categories from "./Categories";
import Modal from "./Modal";
import AddFilters from "./AddFilters";

const LandingPage = props => {
  const chosenFactor = randomFactor(factors);

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  return (
    <>
      <Container as="main">
        <Container
          m={"0 auto"}
          display="flex"
          flexDirection="column"
          maxWidth="290px"
        ></Container>

        <Hero
          display="flex"
          background={` 
          linear-gradient(
            rgba(0, 0, 0, 0.30), 
            rgba(0, 0, 0, 0.30)
          ),
          url(${heroImg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          height="25vw"
          minHeight="220px"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin="0 auto"
          >
            <Text textAlign="center" as="h2" fontSize={[4, 6]} color="white">
              Discover Your Next Hometown
            </Text>
            <StyledLink
              display="inline-block"
              padding="0.6rem 1.2rem"
              border-radius="4px"
              fontSize="0.8rem"
              color="white"
              fontWeight="bold"
              bg="rgba(0,0,0,0.3)"
              to="/sign-up"
            >
              Get Started
            </StyledLink>
          </Flex>
        </Hero>

        <Container
          maxWidth="1200px"
          margin={"0 auto"}
          textAlign="center"
          p={`0 15px`}
        >
          <Text as="h2" textAlign="left">
            Categories:
          </Text>
          <Categories showModal={showModal} {...props} />
        </Container>
        <Container textAlign="center" p={`0 15px`} height="auto">
          <Text as="h2" textAlign="left">
            Popular Cities:
          </Text>
          <TopCities factor="score_total" {...props} />
        </Container>
        <Container textAlign="center" p={`0 15px`}>
          <Text as="h2" textAlign="left">
            Best Cities for {chosenFactor.displayName}:
          </Text>
          <TopCities factor={chosenFactor.factor} {...props} />
        </Container>
      </Container>
    </>
  );
};
//
export default LandingPage;
