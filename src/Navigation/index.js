import React from "react";
import { Link } from "react-router-dom";


export default function Navigation() {

  return (

        <div>
              <Link to="/" >
                <button id="homeButton">Home</button>
              </Link>

              <Link to="/Topten">
                <button id="top10Button">Top10</button>
              </Link>

              <Link to="/Userlist">
                <button>Users</button>
              </Link>

              <Link to="/Login" >
                <button id="loginButton">Login</button>
              </Link>

              <Link to="/Register" >
                <button id="registerButton">Sign Up</button>
              </Link>
        </div>
  );
}
