import styled from "styled-components";
import theme from "../theme";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: ${theme.space[6]} auto;
  width: 550px;
  max-width: 75%;
  color: ${theme.colors.primary};
`;
