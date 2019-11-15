import styled from "styled-components";
import theme from "../theme";

export const Button = styled.button`
  padding: ${theme.space[2]} ${theme.space[3]};
  border-radius: 3px;
  border: 1px solid #333;
  transition: 0.275s all ease-in;
  background-color: #fff;
  font-size: ${theme.fontSizes[1]};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const SocialButton = styled.button`
  background-color: #b7b7b7;
  border: 0;
  width: 100%;
  color: #fff;
  padding: ${theme.space[2]} ${theme.space[3]};
  margin-bottom: ${theme.space[3]};
`;
