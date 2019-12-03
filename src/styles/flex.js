import styled from "styled-components";
import {
  flexbox,
  layout,
  display,
  typography,
  space,
  background
} from "styled-system";

export const Flex = styled.div`
  display: flex;
  ${layout};
  ${flexbox};
  ${display};
  ${typography};
  ${space};
  ${background};
`;
