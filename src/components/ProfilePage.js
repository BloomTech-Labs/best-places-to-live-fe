import React from "react";
import { connect } from "react-redux";
import { MdPerson, MdLocationOn } from "react-icons/md";
import { Container, Flex, Text, Button, Box, Avatar } from "../styles/index";
import theme from "../theme";
import Footer from "./Footer";
import LikedCities from "./LikedCities";

function ProfilePage({ user, history, ...rest }) {
  const name = user.name.split(" ");
  const firstName = user.name[0];
  const lastName = name[name.length - 1];

  console.log(window.pageYOffset);

  return (
    <Container>
      <Flex
        flexDirection="column"
        alignItems="center"
        display="flex"
        justifyContent="center"
        mb={5}
      >
        <Avatar m={4} p={3} width="5rem" height="5rem">
          <Text as="h2" fontSize="2.5rem" m={0}>
            {firstName[0] + lastName[0]}
          </Text>
        </Avatar>
        <Text m="0.3rem 0" as="h3" fontSize={2}>
          <Box as="span" verticalAlign="middle" mr={1}>
            <MdPerson fill={`${theme.colors.baliHai}`} />
          </Box>
          {user.name}{" "}
        </Text>
        <Text m="0.3rem 0" as="h3" fontSize={2}>
          <Box as="span" verticalAlign="middle" mr={1}>
            <MdLocationOn fill={`${theme.colors.baliHai}`} />
          </Box>
          {user.location}
        </Text>
      </Flex>
      <LikedCities />
      <Footer />
    </Container>
  );
}

const mapStatetoProps = state => {
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStatetoProps, {})(ProfilePage);
