import React from "react";
import styled from "styled-components";
import "styled-components/macro";
import css from "@styled-system/css";
import { Text, Container } from "../styles/index";

const ToolTip = ({ label, cityName, score }) => {
  label =
    label == "best" || label == "worst" || label == "average"
      ? `${label.toUpperCase()[0] + label.substring(1)}`
      : label;
  //Capitalizing if worst best average

  score = Math.round(score * 10) / 10;
  return (
    <Container p={2}>
      <Text as="h3" fontWeight="bold" textAlign="center">
        {label}
      </Text>
      <ul
        css={css({
          paddingLeft: "4px",
          listStyle: "none",
          fontSize: "1rem"
        })}
      >
        <li>City: {cityName ? cityName : "N/A"}</li>
        <li>Score: {score}</li>
      </ul>
    </Container>
  );
};

export default ToolTip;
