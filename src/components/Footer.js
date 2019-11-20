import React from "react";
import { Container } from "../styles/index";

const Footer = () => {
  const today = new Date();
  return (
    <Container
      as="footer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <p>&copy; {today.getFullYear()} Tomato Pie Coders</p>
    </Container>
  );
};

export default Footer;
