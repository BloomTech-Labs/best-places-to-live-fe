import React, { useState } from "react";
import Icon from "./Icon";
import { Button, Box } from "../styles/index";
import { moreIcon } from "../utils/factors";
import styled from "styled-components";

const MoreOptions = ({ city }) => {
  const [showMenu, setShowMenu] = useState(false);

  const IconButton = styled(Button)`
    background-color: transparent;
    border: none;
    padding: 0px;
    &:hover {
      cursor: pointer;
    }
  `;

  const OptionMenu = styled.div`
    display: ${({ toggle }) => (toggle ? "block" : "none")};
    position: absolute;
  `;

  const toggleMenu = () => {
    console.log("clicked");
    setShowMenu(!showMenu);
  };
  return (
    <IconButton mb={0} onClick={toggleMenu}>
      <Icon color="white" size={20} icon={moreIcon.iconPath} rotate={90} />
      <OptionMenu toggle={showMenu}>Delete this City</OptionMenu>
    </IconButton>
  );
};

export default MoreOptions;
