import styled from "styled-components";
import theme from "../theme";
import { width, space } from "styled-system";

export const Card = styled.div`
  ${space};
  /* margin-bottom: ${theme.space[4]}; */
  padding: ${theme.space[1]} ${theme.space[2]};
  border: 1.5px solid #333;
  ${width};
`;
