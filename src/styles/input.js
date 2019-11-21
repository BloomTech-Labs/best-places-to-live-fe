import styled from "styled-components";
import theme from "../theme";
import { layout, typography } from "styled-system";

export const Input = styled.input`
  margin-bottom: ${theme.space[4]};
  padding: ${theme.space[1]} ${theme.space[2]};
  border: 1.5px solid #fff;
  box-shadow: 3px 7px 10px rgba(0, 0, 0, 0.45);
  ${typography};
  ${layout};
`;
