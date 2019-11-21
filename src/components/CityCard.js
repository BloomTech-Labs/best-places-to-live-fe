import React from "react";
import { Container, Card, Image, Text, Hero } from "../styles/index";
import useWindowSize from "../hooks/useWindowSize";

function CityCard({ city, page }) {
  const size = useWindowSize();

  if (page && size.width <= 1000) {
    return (
      <Card
        as="article"
        borderRadius={3}
        p={[1, 2]}
        width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
        m={2}
        flex="0 0 50%"
        background={` 
          linear-gradient(
            rgba(0, 0, 0, 0.30), 
            rgba(0, 0, 0, 0.30)
          ),
          url(${city.photoMobile})`}
        backgroundSize="cover"
        backgroundPosition="center"
        padding="130px 100px 100px"
      >
        <Text as="h1" color="white">
          {city.short_name}
        </Text>
        <Text as="h2" color="white">
          {city.state}
        </Text>
        <Text as="h6" color="white">
          {" "}
          Population: {city.population}
        </Text>
      </Card>
    );
  }
  return (
    <Card
      as="article"
      borderRadius={3}
      p={[1, 2]}
      width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
      m={2}
      background={` 
          linear-gradient(
            rgba(0, 0, 0, 0.30), 
            rgba(0, 0, 0, 0.30)
          ),
          
          url(${city.photoWeb})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Container textAlign="center">
        <Text as="h1" color="white">
          {city.short_name}
        </Text>
        <Text as="h2" color="white">
          {city.state}
        </Text>
        <Text as="h6" color="white">
          Population: {city.population}
        </Text>
      </Container>
    </Card>
  );
}

export default CityCard;
