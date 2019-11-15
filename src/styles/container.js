import styled, { css } from "styled-components";
import theme from "../theme";

export const Container = styled.div`
  padding: 0 ${theme.space[3]};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
  ${props =>
    props.zeroPadding &&
    css`
      padding: 0;
    `}
`;
