import styled from "styled-components";
import theme from "../theme";
import { layout, typography, space, flexbox } from "styled-system";

export const Input = styled.input`
  margin-bottom: ${theme.space[4]};
  padding: ${theme.space[2]} ${theme.space[3]};
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: ${theme.fontSizes.body};
  line-height: 1.4;
  border-radius: 6px;
  ${typography};
  ${layout};
  ${space};
`;

export const StyledSearchBar = styled.input`
  padding: ${theme.space[2]} ${theme.space[3]};
  border: 1px solid lightgrey;
  border-left: 0;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-size: ${theme.fontSizes.body};
  line-height: 1.4;  
  fontSize: {2};
  width: 100%;
  max-width: 215px;
  flex: 1;
  ${typography};
  ${layout};
  ${space};
  ${flexbox}
  @media (min-width: ${theme.breakpoints.sm}) {
    max-width:375px;
  }
`;
