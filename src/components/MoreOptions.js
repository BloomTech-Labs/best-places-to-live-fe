import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Icon from "./Icon";
import theme from "../theme";
import { Button } from "../styles/index";
import { moreIcon } from "../utils/factors";
import { addDislikedCity } from "../actions/addDislikedCity";
import DropDown from "./Dropdown";

const MoreOptions = ({ city, addDislikedCity }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickOutside = () => {
    console.log("out");
    setShowMenu(false);
  };
  document.addEventListener("mousedown", handleClickOutside);

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
    background-color: ${theme.colors.athensGray};
    font-size: 1rem;
    &:hover {
      cursor: pointer;
    }
  `;

  const handleClick = async () => {
    await addDislikedCity(city);
  };

  return (
    <DropDown
      value={
        <IconButton mb={0}>
          <Icon color="white" size={20} icon={moreIcon.iconPath} rotate={90} />
        </IconButton>
      }
      options={[<OptionMenu>Delete this city</OptionMenu>]}
      onChange={handleClick}
      dropDownStyles={{
        left: "-100%",
        top: "0%",
        transform: "translateX(-50%)"
      }}
    />
  );
};

export default connect(null, {
  addDislikedCity
})(MoreOptions);
