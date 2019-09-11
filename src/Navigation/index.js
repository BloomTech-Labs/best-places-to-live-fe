import React from "react";
import { Link } from "react-router-dom";
import {NavBar, NavLinks, NavBtn} from './styled'


export default function Navigation() {

  return (
        <div className='Container'>
            <NavBar primary>
              <NavLinks>
              <Link to="/">
                <NavBtn  styleid="homeButton">Home</NavBtn>
              </Link>


              <Link to="/Userlist">
                <NavBtn>Users</NavBtn>
              </Link>

              <Link to="/Login" >
                <NavBtn id="loginButton">Login</NavBtn>
              </Link>

              <Link to="/Register" >
                <NavBtn id="registerButton">Sign Up</NavBtn>
              </Link>
            </NavLinks>
            </NavBar>
        </div>
  );
}
