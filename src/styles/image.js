import styled, { css } from "styled-components";
import { width, space } from "styled-system";

export const Image = styled.img`
  ${width};
  ${space};
  height: auto;
  ${props =>
    props.mw &&
    css`
      max-width: ;
    `}
`;
