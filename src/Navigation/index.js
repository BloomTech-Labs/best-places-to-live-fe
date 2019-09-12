import React from "react";
import { Link } from "react-router-dom";
import { NavBar, NavBtn, LogoBox, Header } from "./styled";
import moving from "../images/LMHiconcopy.png";

export default function Navigation() {
  return (
    <div>
    <Header>
      <NavBar>
          <Link to="/">
            <LogoBox src={moving}/>
          </Link>

          <Link to="/Userlist">
            <NavBtn>Users</NavBtn>
          </Link>

          <Link to="/Login">
            <NavBtn id="loginButton">Login</NavBtn>
          </Link>

          <Link to="/Register">
            <NavBtn id="registerButton">SignUp</NavBtn>
          </Link>

          <Link to="/Maps">
              <NavBtn id="registerButton">Maps</NavBtn>
          </Link>
      </NavBar>
  </Header>
  </div>
  );
}
