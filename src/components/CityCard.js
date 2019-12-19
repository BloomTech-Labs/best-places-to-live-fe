import React from "react";
import { Container, Card, Flex, Text, StyledLink } from "../styles/index";
import useWindowSize from "../hooks/useWindowSize";
import LikeIcon from "./LikeIcon";
import DislikeIcon from "./DislikeIcon";
import { connect } from "react-redux";
import MoreOptions from "./MoreOptions";

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
      m={".5rem"}
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
        justifyContent={
          page !== "profile"
            ? page === "settings"
              ? "flex-end"
              : "space-between"
            : "flex-start"
        }
        p={[1, 2]}
      >
        {(page === "profile" || page === "search" || page === "city") && (
          <LikeIcon
            city={{
              city_id: city._id,
              city_name: city.name
            }}
            liked={isLiked(city, likes)}
            {...rest}
          />
        )}
        {page === "settings" && (
          <DislikeIcon
            city={{
              city_id: city._id,
              city_name: city.name
            }}
            {...rest}
          />
        )}
        {(page === "search" || page === "city") && (
          <MoreOptions
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
        height={page !== "city" ? "100%" : "300px"}
        width="100%"
        to={`/city/${city._id}`}
      >
        <Container p={[1, 2]}>
          <Text as="h1" color="white" textAlign="center" fontSize={4}>
            {city.short_name}
          </Text>
          <Text as="h2" color="white" textAlign="center" fontSize={2}>
            {city.state}
          </Text>
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
