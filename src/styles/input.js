import styled from "styled-components";
import theme from "../theme";
import { layout, typography, space } from "styled-system";

export const Input = styled.input`
  margin-bottom: ${theme.space[4]};
  padding: ${theme.space[2]} ${theme.space[3]};
  border: 1.5px solid #fff;
  box-shadow: 3px 7px 10px rgba(0, 0, 0, 0.45);
  font-size: ${theme.fontSizes.body};
  line-height: 1.4;
  ${typography};
  ${layout};
  ${space};
`;

export const StyledSearchBar = styled.input`
  margin-bottom: ${theme.space[2]};
  padding: ${theme.space[2]} ${theme.space[3]};
  border: 1px solid lightgrey;
  border-radius: 10px;
  font-size: ${theme.fontSizes.body};
  line-height: 1.4;  
  fontSize={2};
  maxWidth=100%;
  width=375px;
  ${typography};
  ${layout};
  ${space};
`;
