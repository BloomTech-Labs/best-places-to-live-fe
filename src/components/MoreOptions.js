import React from "react";
import Icon from "./Icon";
import { moreIcon } from "../utils/factors";

const MoreOptions = ({ city }) => {
  return <Icon color="white" size={20} icon={moreIcon.iconPath} rotate={90} />;
};

export default MoreOptions;
