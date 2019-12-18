import React from "react";
import { connect } from "react-redux";
import { IoIosSearch, IoMdPeople } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { StyledNavLink, Flex, Text } from "../styles/index.js";
const TabNav = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <Flex
        as="nav"
        position="fixed"
        width="100%"
        bottom="0"
        height="75px"
        background="white"
        alignItems="center"
        justifyContent="space-around"
        zIndex="100"
        opacity="1"
        borderTop="1px solid gray"
      >
        <Flex flexDirection="column" alignItems="center">
          <StyledNavLink to="/login">
            {" "}
            <IoMdPeople />
          </StyledNavLink>

          <Text as="h4" m={0}>
            {" "}
            <StyledNavLink to="/login">Login</StyledNavLink>
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <StyledNavLink to="/search">
            {" "}
            <IoIosSearch />
          </StyledNavLink>

          <Text as="h4" m={0}>
            {" "}
            <StyledNavLink to="/search">Search</StyledNavLink>
          </Text>
        </Flex>
      </Flex>
    );
  } else {
    return (
      <Flex
        as="nav"
        position="fixed"
        width="100%"
        bottom="0"
        height="75px"
        background="white"
        alignItems="center"
        justifyContent="space-around"
        zIndex="100"
        opacity="1"
        borderTop="1px solid gray"
      >
        <Flex flexDirection="column" alignItems="center">
          <StyledNavLink to="/search">
            {" "}
            <IoIosSearch />
          </StyledNavLink>

          <Text as="h4" m={0}>
            {" "}
            <StyledNavLink to="/search">Search</StyledNavLink>
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <StyledNavLink to="/profile">
            {" "}
            <FiHeart />
          </StyledNavLink>
          <Text as="h4" m={0}>
            <StyledNavLink to="/profile">Saved</StyledNavLink>
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <StyledNavLink to="/settings">
            {" "}
            <IoMdPeople />{" "}
          </StyledNavLink>
          <Text as="h4" m={0}>
            <StyledNavLink to="/settings">Profile </StyledNavLink>
          </Text>
        </Flex>
      </Flex>
    );
  }
};

const mapStatetoProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(mapStatetoProps, {})(TabNav);
