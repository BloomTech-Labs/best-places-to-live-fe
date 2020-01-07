import React from "react";
import { connect } from "react-redux";
import { MdPerson, MdLocationOn } from "react-icons/md";
import { Container, Flex, Text, Button, Box, Avatar } from "../styles/index";
import theme from "../theme";
import LikedCities from "./LikedCities";

function ProfilePage({ user, history, ...rest }) {
  const name = user.name.split(" ");
  const firstName = user.name[0];
  const lastName = name[name.length - 1];

  return (
    <Container minHeight="100vh">
      <Flex
        flexDirection="column"
        alignItems="center"
        display="flex"
        justifyContent="center"
        mb={5}
      >
        <Avatar m={4} p={3} width="6rem" height="6rem">
          <Text as="h2" fontSize="2.5rem" m={0} width="fit-content">
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
