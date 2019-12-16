import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Icon from "./Icon";
import theme from "../theme";
import { Button } from "../styles/index";
import { moreIcon } from "../utils/factors";
import { addDislikedCity } from "../actions/addDislikedCity";
const MoreOptions = ({ city, addDislikedCity }) => {
  const [showMenu, setShowMenu] = useState(false);

  const IconButton = styled(Button)`
    background-color: transparent;
    border: none;
    position: relative;
    padding: 0px;
    &:hover {
      cursor: pointer;
    }
  `;

  const OptionMenu = styled.div`
    display: ${({ toggle }) => (toggle ? "block" : "none")};
    position: absolute;
    padding: 1.2rem 2rem;
    top: 20px;
    right: -8px;
    width: 110px;
    background-color: ${theme.colors.athensGray};
  `;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = async () => {
    await addDislikedCity(city);
  };

  return (
    <IconButton mb={0} onClick={toggleMenu}>
      <Icon color="white" size={20} icon={moreIcon.iconPath} rotate={90} />
      <OptionMenu toggle={showMenu} onClick={handleClick}>
        Delete this City
      </OptionMenu>
    </IconButton>
  );
};

export default connect(null, {
  addDislikedCity
})(MoreOptions);
