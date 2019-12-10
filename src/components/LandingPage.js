import React, { useState } from "react";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import { Container, StyledLink, Text, Hero, Button } from "../styles/index";
import heroImg from "../img/hero.jpg";
import TopCities from "./TopCities";
import { factors, randomFactor } from "../utils/factors";
import Categories from "./Categories";
import Modal from "./Modal";
import ExplorePage from "./ExplorePage";

const LandingPage = props => {
  const chosenFactor = randomFactor(factors);

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <>
      <Container as="main">
        <SearchBar page="landing" {...props} />
        <Modal show={show} handleClose={hideModal}>
          <ExplorePage />
        </Modal>
        <Button onClick={showModal}>Apply Filters</Button>
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
          <Text
            marginLeft="10%"
            textAlign="left"
            as="h2"
            fontSize={[4, 6]}
            color="white"
          >
            Discover Your Next Hometown
          </Text>
        </Hero>
        <Container textAlign="center">
          <Text as="h2">
            <StyledLink color="black" to="/explore">
              <Button> Explore!</Button>
            </StyledLink>
          </Text>
        </Container>
        <Container
          maxWidth="1200px"
          margin={"0 auto"}
          textAlign="center"
          p={`0 15px`}
        >
          <Text as="h2" textAlign="left">
            Categories:
          </Text>
          <Categories />
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
      <Footer />
    </>
  );
};
//
export default LandingPage;
