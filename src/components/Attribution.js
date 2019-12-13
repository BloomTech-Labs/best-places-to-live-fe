import React from "react";
import "styled-components/macro";

import { Flex, Text } from "../styles";
import { ReactComponent as DuckDuckGo } from "../icons/DuckDuckGo.svg";

//import mySvg from "./logo.svg"
const Attribution = () => {
  return (
    <Flex width="100%" justifyContent="flex-end">
      <Text mr={2}>Results from DuckDuckGo</Text>
      <DuckDuckGo css="max-width: 30px; height: 30px" />
    </Flex>
  );
};

export default Attribution;
