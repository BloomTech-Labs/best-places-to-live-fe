import React from "react";
import Icon from "./Icon";
import { moreIcon } from "../utils/factors";

const MoreOptions = ({ city }) => {
  console.log(moreIcon);
  return <Icon color="white" size={20} icon={moreIcon.iconPath} />;
};

export default MoreOptions;
