import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import "styled-components/macro";
import css from "@styled-system/css";
import { connect } from "react-redux";
import theme from "../theme";
import SearchBar from "./SearchBar";
import DropDown from "./Dropdown";
import {
  Nav,
  StyledNavLink,
  Flex,
  SettingsCog,
  Avatar,
  Box,
  Button
} from "../styles/index";

const NavBar = ({ isLoggedIn, user, ...rest }) => {
  const [showMenu, setShowMenu] = useState(false);

  const IconButton = styled(Button)`
    background-color: transparent;
    border: none;
    position: relative;
    padding: 0px;
    margin-bottom: 0;
    &:hover {
      cursor: pointer;
    }
  `;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const name = user.name.split(" ");
  const firstName = user.name[0];
  const lastName = name[name.length - 1];

  return (
    <Nav
      borderBottom="1px solid rgba(4, 3, 22, 0.15)"
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      alignItems="center"
      padding={"10px 20px"}
    >
      {!isLoggedIn && (
        <>
          <Flex display={["none", "flex"]}>
            <StyledNavLink to="/">
              <b>Live in the</b> <br /> <b>Best Place</b>
            </StyledNavLink>
          </Flex>
          <SearchBar {...rest} />
          <Flex
            justifyContent="space-between"
            minWidth="120px"
            alignItems="center"
            display={["none", "flex"]}
          >
            <StyledNavLink to="/login">Log In</StyledNavLink>
            <StyledNavLink to="/sign-up">Sign Up</StyledNavLink>
          </Flex>
        </>
      )}

      {isLoggedIn && (
        <>
          <Flex display={["none", "flex"]}>
            <StyledNavLink to="/">
              <b>Live in the</b> <br /> <b>Best Place</b>
            </StyledNavLink>
          </Flex>
          <SearchBar {...rest} />
          <Flex
            justifyContent="center"
            width="120px"
            maxWidth="100%"
            position="relative"
            display={["none", "flex"]}
          >
            <DropDown
              value={
                <Avatar width="2.5rem" height="2.5rem">
                  {firstName[0] + lastName[0]}
                </Avatar>
              }
              onChange={s => setShowMenu(s)}
              options={[
                <StyledNavLink to="/profile">Profile</StyledNavLink>,
                <StyledNavLink to="/settings">
                  <SettingsCog /> Settings
                </StyledNavLink>
              ]}
            />
          </Flex>
        </>
      )}
    </Nav>
  );
};

const mapStatetoProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user
  };
};

export default withRouter(connect(mapStatetoProps)(NavBar));
