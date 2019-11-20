import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Nav, StyledNavLink } from "../styles/index";

const NavBar = ({ isLoggedIn }) => {
  return (
    <Nav display="flex" justifyContent="space-around" flexWrap="wrap">
      {!isLoggedIn && (
        <>
          <div>
            <StyledNavLink to="/">Home</StyledNavLink>
          </div>

          <div>
            <StyledNavLink to="/signup">Sign Up</StyledNavLink>
          </div>
        </>
      )}

      {isLoggedIn && (
        <>
          <div>
            <StyledNavLink to="/">Home</StyledNavLink>
          </div>
          <div>
            <StyledNavLink to="/profile">Profile</StyledNavLink>
          </div>
        </>
      )}
    </Nav>
  );
};

const mapStatetoProps = state => {
  console.log(state);
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default withRouter(connect(mapStatetoProps)(NavBar));
