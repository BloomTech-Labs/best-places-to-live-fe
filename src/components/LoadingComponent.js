import React from "react";
import Spinner from "react-svg-spinner";
import { Container, Text } from "../styles/index";

const LoadingComponent = () => {
  return (
    <Container display="flex" justifyContent="center" alignItems="center">
      <Spinner color="#3171E4" height="80px" width="80px" />
    </Container>
  );
};

export default LoadingComponent;
