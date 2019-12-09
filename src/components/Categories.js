import React from "react";
import { factors } from "../utils/factors";
import Icon from "./Icon";
import { Container, Text, Flex, Grid } from "../styles/index";

//More Button

const Categories = () => {
  return (
    <Grid fourColumns>
      {factors.map(category => (
        <Flex flexWrap="wrap" alignItems="center" flexDirection="column">
          <Icon icon={category.iconPath} size={50} />
          <Text textAlign="center" as="h2">
            {category.displayName}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
};

export default Categories;
