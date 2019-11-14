import styled from "styled-components";
import theme from "../theme";

export const Button = styled.button`
  padding: ${theme.space[2]}px ${theme.space[3]}px;
  border-radius: ${theme.space[1]}px;
  transition: 0.275s all ease-in;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
