import React from "react";
import { factors } from "../utils/factors";
import Icon from "./Icon";
import theme from "../theme";
import { Text, Flex, Grid } from "../styles/index";

//More Button

const Categories = () => {
  return (
    <Grid fourColumns>
      {factors.map(category => (
        <Flex flexWrap="wrap" alignItems="center" flexDirection="column">
          <Icon
            icon={category.iconPath}
            size={50}
            color={theme.colors.baliHai}
          />
          <Text
            textAlign="center"
            as="h4"
            fontWeight="normal"
            m={"0.6rem 0 0.95rem"}
            fontSize={theme.fontSizes[1]}
            color={theme.colors.portGore}
          >
            {category.displayName}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
};

export default Categories;
