import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = ({ isLoggedIn, history }) => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  console.log(isLoggedIn);

  return (
    <div>
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

          <button onClick={() => logoutHandler}>Logout </button>
        </>
      )}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn
  };
};

export default connect(mapStatetoProps)(NavBar);
