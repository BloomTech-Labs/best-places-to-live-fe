import React from "react";
import {
  Container,
  Card,
  Flex,
  Image,
  Text,
  Hero,
  StyledLink
} from "../styles/index";
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
      borderRadius={15}
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
      <Flex
        justifyContent={page !== "profile" ? "space-between" : "flex-end"}
        display={page == "landing" ? "hidden" : ""}
        p={[1, 2]}
      >
        {page == "search" && (
          <LikeIcon
            city={{
              city_id: city._id,
              city_name: city.name
            }}
            {...rest}
          />
        )}
        {(page == "profile" || page == "search") && (
          <DislikeIcon
            city={{
              city_id: city._id,
              city_name: city.name
            }}
            {...rest}
          />
        )}
      </Flex>
      <StyledLink
        display="inline-block"
        height="100%"
        width="100%"
        to={`/city/${city._id}`}
      >
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
      </StyledLink>
    </Card>
  );
}

export default CityCard;
