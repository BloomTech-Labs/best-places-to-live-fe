import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Flex, Text, Card, StyledLink } from "../styles/index";
import { fetchTopCities } from "../actions/topCities";
import useWindowSize from "../hooks/useWindowSize";
import theme from "../theme";
import LazyLoad from "react-lazyload";
import LoadingComponent from "./LoadingComponent";

function TopCities({
  topCities,
  isFetching,
  factor,
  fetchTopCities,
  ...props
}) {
  useEffect(() => {
    fetchTopCities(factor);
  }, [fetchTopCities, factor]);

  const size = useWindowSize();
  let flexSizeProperty;
  if (size.width <= 1000) {
    flexSizeProperty = "0 0 37%";
  } else {
    flexSizeProperty = "0 0 20%";
  }

  if (topCities[factor]) {
    return (
      <Flex flexDirection="row" overflowY="hidden" overflowX="scroll">
        {topCities[factor].map((city, index) => (
          <LazyLoad height={100} resize offset={100} scroll>
            <Flex flexDirection="column" height="12rem" key={index}>
              <StyledLink to={`/city/${city._id}`}>
                <Card
                  as="article"
                  borderRadius={15}
                  m={index === 0 ? ".5rem .5rem .5rem 0" : ".5rem"}
                  flex={flexSizeProperty}
                  background={`url(${city.secure_url})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  padding="2.5rem 1.5rem"
                  width="9rem"
                  key={city._id}
                  city={city}
                  page="landing"
                  index={index}
                  {...props}
                />
                {/* </StyledLink>
            <StyledLink display="inline-block" to={`/city/${city._id}`}> */}
                <Text
                  as="h2"
                  fontWeight="normal"
                  color={theme.colors.portGore}
                  textAlign="left"
                  m={index === 0 ? ".5rem .5rem .5rem 0" : ".5rem"}
                >
                  {city.short_name}
                </Text>
              </StyledLink>
            </Flex>
          </LazyLoad>
        ))}
      </Flex>
    );
  } else {
    return <LoadingComponent />;
  }
}

const mapStatetoProps = state => {
  return {
    topCities: state.topCities,
    isFetching: state.isFetching
  };
};

export default connect(mapStatetoProps, { fetchTopCities })(TopCities);
