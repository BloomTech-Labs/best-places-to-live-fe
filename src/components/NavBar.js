import React from "react";
import { connect } from "react-redux";
import { Nav, StyledNavLink, Flex, SettingsCog } from "../styles/index";

const NavBar = ({ isLoggedIn }) => {
  return (
    <Nav display="flex" justifyContent="space-around" flexWrap="wrap">
      {!isLoggedIn && (
        <>
          <div>
            <StyledNavLink to="/">Live In The Best Place</StyledNavLink>
          </div>

          <Flex justifyContent="space-between" width="20vw" minWidth="120px">
            <StyledNavLink to="/login">Log In</StyledNavLink>
            <StyledNavLink to="/signup">Sign Up</StyledNavLink>
          </Flex>
        </>
      )}

      {isLoggedIn && (
        <>
          <div>
            <StyledNavLink to="/">Live In The Best Place</StyledNavLink>
          </div>
          <div>
            <StyledNavLink to="/profile">Profile</StyledNavLink>
            <StyledNavLink to="/settings">
              {" "}
              <SettingsCog />{" "}
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
