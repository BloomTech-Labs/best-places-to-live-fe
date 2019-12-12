import styled, { css } from "styled-components";
import {
  grid,
  layout,
  display,
  typography,
  space,
  background
} from "styled-system";
import { variant } from "styled-system";

import theme from "../theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${layout};
  ${grid};
  ${display};
  ${typography};
  ${space};
  ${background};
  

  ${props =>
    props.fourColumns &&
    css`
      grid-template-columns: repeat(4, 1fr);
    `}

  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }

  ${props =>
    props.twoColumns &&
    css`
      grid-template-columns: repeat(2, 1fr);

      @media (min-width: ${theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
      }
    `}
`;
