import React from "react";
import { Container, Card, Flex, Text, StyledLink } from "../styles/index";
import useWindowSize from "../hooks/useWindowSize";
import LikeIcon from "./LikeIcon";
import DislikeIcon from "./DislikeIcon";
import { connect } from "react-redux";

function CityCard({ city, page, likes, index, ...rest }) {
  const size = useWindowSize();
  let flexSizeProperty;
  if (page && size.width <= 1000) {
    flexSizeProperty = "0 0 37%";
  } else {
    flexSizeProperty = "0 0 20%";
  }

  const isLiked = (currentCity, likedCities) =>
    likedCities.find(({ _id }) => _id === currentCity._id);

  return (
    <Card
      as="article"
      borderRadius={15}
      m={page === "landing" && index === 0 ? ".5rem .5rem .5rem 0" : ".5rem"}
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
      p={[1, 2]}
    >
      <Flex
        justifyContent={page !== "profile" ? "space-between" : "flex-start"}
        display={page === "landing" ? "none" : ""}
        p={[1, 2]}
      >
        {(page === "profile" || page === "search") && (
          <LikeIcon
            city={{
              city_id: city._id,
              city_name: city.name
            }}
            liked={isLiked(city, likes)}
            {...rest}
          />
        )}
        {page === "search" && (
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
        <Container p={[1, 2]} display={page === "landing" ? "none" : ""}>
          <Text as="h1" color="white">
            {city.short_name}
          </Text>
          <Text as="h2" color="white">
            {city.state}
          </Text>
          {/* <Text as="h6" color="white">
            {" "}
            Population: {city.population}
          </Text> */}
        </Container>
      </StyledLink>
    </Card>
  );
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    likes: user.likes
  };
};

export default connect(mapStateToProps, {})(CityCard);
