import React from "react";
import { factors } from "../utils/factors";
import Icon from "./Icon";

const Categories = () => {
  return (
    <>
      {factors.map(category => (
        <Icon icon={category.iconPath} size={100} />
      ))}
    </>
  );
};

export default Categories;
