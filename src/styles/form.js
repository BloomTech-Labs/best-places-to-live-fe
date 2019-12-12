import styled from "styled-components";
import theme from "../theme";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: ${theme.space[6]} auto;
  max-width: 550px;
  margin: 4rem auto 0;
  width: 100%;
  color: ${theme.colors.primary};
`;
