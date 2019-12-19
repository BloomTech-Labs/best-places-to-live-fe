import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { Nav, StyledNavLink, Flex, SettingsCog } from "../styles/index";

const NavBar = ({ isLoggedIn, ...rest }) => {
  return (
    <Nav
      borderBottom="1px solid gray"
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      {!isLoggedIn && (
        <>
          <Flex flex="1">
            <StyledNavLink to="/">
              <b>Live in the</b> <br /> <b>Best Place</b>
            </StyledNavLink>
          </Flex>
          <SearchBar {...rest} />
          <Flex justifyContent="space-between" minWidth="120px">
            <StyledNavLink to="/login">Log In</StyledNavLink>
            <StyledNavLink to="/sign-up">Sign Up</StyledNavLink>
          </Flex>
        </>
      )}

      {isLoggedIn && (
        <>
          <Flex flex="1">
            <StyledNavLink to="/">
              <b>Live in the</b> <br /> <b>Best Place</b>
            </StyledNavLink>
          </Flex>
          <SearchBar {...rest} />
          <Flex justifyContent="space-between" minWidth="120px">
            <StyledNavLink to="/profile">Profile</StyledNavLink>
            <StyledNavLink to="/settings">
              {" "}
              <SettingsCog />{" "}
            </StyledNavLink>
          </Flex>
        </>
      )}
    </Nav>
  );
};

const mapStatetoProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default withRouter(connect(mapStatetoProps)(NavBar));
