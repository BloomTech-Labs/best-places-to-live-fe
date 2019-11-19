import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { logout } from "../actions/logout";
import { Nav, Button } from "../styles/index";

const NavBar = ({ isLoggedIn, history, logout }) => {
  const logoutHandler = () => {
    console.log("here");
    logout();
    history.push("/");
  };

  return (
    <Nav display="flex" justifyContent="space-around" flexWrap="wrap">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>

      <div>
        <NavLink to="/search">Search</NavLink>
      </div>

      <div>
        <NavLink to="/login">Login</NavLink>
      </div>

      <div>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>

      {isLoggedIn && (
        <>
          <div>
            <NavLink to="/profile">Profile</NavLink>
          </div>

          <Button onClick={logoutHandler}>Logout </Button>
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

export default withRouter(connect(mapStatetoProps, { logout })(NavBar));
