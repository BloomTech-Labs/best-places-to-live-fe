import React from "react";
import { landingFactors } from "../utils/factors";
import "styled-components/macro";
import css from "@styled-system/css";
import Icon from "./Icon";
import theme from "../theme";
import { Text, Flex, Grid } from "../styles/index";
import { fetchLocationsByFactors } from "../actions/locationsByFactors";
import { connect } from "react-redux";
//More Button

const Categories = ({
  fetchLocationsByFactors,
  showModal,
  isFetching,
  ...rest
}) => {
  const sendToSearchPage = async category => {
    const response = await fetchLocationsByFactors([category.factor]);

    if (response) {
      rest.history.push("/search");
    } else {
    }
  };

  return (
    <Grid fourColumns>
      {landingFactors.map((factor, index) => (
        <Flex
          onClick={
            factor.factor === "More"
              ? showModal
              : () => sendToSearchPage(factor)
          }
          flexWrap="wrap"
          alignItems="center"
          flexDirection="column"
          key={index}
          css={css({
            "&:hover": {
              cursor: "pointer"
            }
          })}
        >
          <Icon icon={factor.iconPath} size={50} color={theme.colors.baliHai} />
          <Text
            textAlign="center"
            as="h4"
            fontWeight="normal"
            m={"0.6rem 0 0.95rem"}
            fontSize={theme.fontSizes[1]}
            color={theme.colors.portGore}
          >
            {factor.displayName}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {
  fetchLocationsByFactors
})(Categories);
