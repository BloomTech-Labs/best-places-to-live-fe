import React from "react";
import { connect } from "react-redux";
import { Nav, StyledNavLink, Flex } from "../styles/index";
import styled from "styled-components";

const NavBar = ({ isLoggedIn }) => {
  return (
    <Nav display="flex" justifyContent="space-around" flexWrap="wrap">
      {!isLoggedIn && (
        <>
          <div>
            <StyledNavLink to="/">Home</StyledNavLink>
          </div>

          <Flex justifyContent="space-between" width="20vw" minWidth="1">
            <StyledNavLink to="/login">Log In</StyledNavLink>
            <StyledNavLink to="/signup">Sign Up</StyledNavLink>
          </Flex>
        </>
      )}

      {isLoggedIn && (
        <>
          <div>
            <StyledNavLink to="/">Home</StyledNavLink>
          </div>
          <div>
            <StyledNavLink to="/profile">Profile</StyledNavLink>
            <StyledNavLink to="/settings">
              {" "}
              <FaCogStyle />{" "}
            </StyledNavLink>
          </div>
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

export default connect(mapStatetoProps)(NavBar);
