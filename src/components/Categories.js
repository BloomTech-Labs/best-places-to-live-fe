import React from "react";
import { factors } from "../utils/factors";
import Icon from "./Icon";
import { Container, Text } from "../styles/index";

//More Button

const Categories = () => {
  return (
    <>
      {factors.map(category => (
        <>
          <Icon icon={category.iconPath} size={100} />
          <Text textAlign="center" as="h2">
            {category.displayName}
          </Text>
        </>
      ))}
    </>
  );
};

export default Categories;
