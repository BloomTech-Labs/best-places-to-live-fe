import React from "react";
import Icon from "./Icon";
import { Button } from "../styles/index";
import { moreIcon } from "../utils/factors";
import styled from "styled-components";

const IconButton = styled(Button)`
  background-color: transparent;
  border: none;
  padding: 0px;
  &:hover {
    cursor: pointer;
  }
`;

const MoreOptions = ({ city }) => {
  return (
    <IconButton mb={0}>
      <Icon color="white" size={20} icon={moreIcon.iconPath} rotate={90} />
    </IconButton>
  );
};

export default MoreOptions;
