import React from "react";
import { Container, Card, Flex, Image, Text, Hero } from "../styles/index";
import useWindowSize from "../hooks/useWindowSize";
import LikeIcon from "./LikeIcon";
import DislikeIcon from "./DislikeIcon";

function CityCard({ city, page, ...rest }) {
  const size = useWindowSize();
  let flexSizeProperty;
  if (page && size.width <= 1000) {
    flexSizeProperty = "0 0 50%";
  } else {
    flexSizeProperty = "";
  }

  return (
    <Card
      as="article"
      borderRadius={3}
      width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
      m={2}
      flex={flexSizeProperty}
      background={` 
          linear-gradient(
            rgba(0, 0, 0, 0.30), 
            rgba(0, 0, 0, 0.30)
          ),
          url(${city.secure_url})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex justifyContent="space-between" p={[1, 2]}>
        <LikeIcon {...rest} />
        <DislikeIcon {...rest} />
      </Flex>
      <Container p={[1, 2]}>
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
      </Container>
    </Card>
  );
}

export default CityCard;
