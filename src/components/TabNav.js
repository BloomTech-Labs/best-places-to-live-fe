import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { IoIosSearch, IoMdPeople } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { AiOutlineForm } from "react-icons/ai";
import { StyledNavLink, Flex, Text } from "../styles/index.js";
const TabNav = ({ isLoggedIn, ...rest }) => {
  const currentPath = route => {
    return route.location.pathname;
  };
  if (!isLoggedIn) {
    return (
      <Flex
        as="nav"
        position="sticky"
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
          <StyledNavLink
            to="/login"
            color={currentPath(rest) === "/login" ? "#007AFF" : "#9A99A2"}
          >
            {" "}
            <IoMdPeople size={"2em"} />
          </StyledNavLink>

          <Text as="h4" m={0}>
            {" "}
            <StyledNavLink
              to="/login"
              color={currentPath(rest) === "/login" ? "#007AFF" : "#9A99A2"}
            >
              Login
            </StyledNavLink>
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <StyledNavLink
            to="/search"
            color={currentPath(rest) === "/search" ? "#007AFF" : "#9A99A2"}
          >
            {" "}
            <IoIosSearch
              size={"2em"}
              color={currentPath(rest) === "/search" ? "#007AFF" : "#9A99A2"}
            />
          </StyledNavLink>

          <Text as="h4" m={0}>
            {" "}
            <StyledNavLink
              to="/search"
              color={currentPath(rest) === "/search" ? "#007AFF" : "#9A99A2"}
            >
              Search
            </StyledNavLink>
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <StyledNavLink
            to="/sign-up"
            color={currentPath(rest) === "/sign-up" ? "#007AFF" : "#9A99A2"}
          >
            {" "}
            <AiOutlineForm
              size={"2em"}
              color={currentPath(rest) === "/sign-up" ? "#007AFF" : "#9A99A2"}
            />
          </StyledNavLink>
          <Text as="h4" m={0}>
            {" "}
            <StyledNavLink
              to="/sign-up"
              color={currentPath(rest) === "/sign-up" ? "#007AFF" : "#9A99A2"}
            >
              Sign Up
            </StyledNavLink>
          </Text>
        </Flex>
      </Flex>
    );
  } else {
    return (
      <Flex
        as="nav"
        position="sticky"
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
            <IoIosSearch
              size={"2em"}
              color={currentPath(rest) === "/search" ? "#007AFF" : "#9A99A2"}
            />
          </StyledNavLink>

          <Text as="h4" m={0}>
            {" "}
            <StyledNavLink
              to="/search"
              color={currentPath(rest) === "/search" ? "#007AFF" : "#9A99A2"}
            >
              Search
            </StyledNavLink>
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <StyledNavLink to="/profile">
            {" "}
            <FiHeart
              size={"2em"}
              color={currentPath(rest) === "/profile" ? "#007AFF" : "#9A99A2"}
            />
          </StyledNavLink>
          <Text as="h4" m={0}>
            <StyledNavLink
              to="/profile"
              color={currentPath(rest) === "/profile" ? "#007AFF" : "#9A99A2"}
            >
              Saved
            </StyledNavLink>
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <StyledNavLink to="/settings">
            {" "}
            <IoMdPeople
              size={"2em"}
              color={currentPath(rest) === "/settings" ? "#007AFF" : "#9A99A2"}
            />{" "}
          </StyledNavLink>
          <Text as="h4" m={0}>
            <StyledNavLink
              to="/settings"
              color={currentPath(rest) === "/settings" ? "#007AFF" : "#9A99A2"}
            >
              Profile{" "}
            </StyledNavLink>
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

export default withRouter(connect(mapStatetoProps, {})(TabNav));
