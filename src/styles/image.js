import styled, { css } from "styled-components";
import { layout, space } from "styled-system";

export const Image = styled.img`
  ${layout};
  ${space};
  height: auto;
  ${props =>
    props.mw &&
    css`
      max-width: ;
    `}
`;
