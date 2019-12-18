import styled from "styled-components";
import {
  color,
  flexbox,
  layout,
  display,
  typography,
  space,
  background,
  border,
  position
} from "styled-system";

export const Flex = styled.div`
  display: flex;
  ${layout};
  ${flexbox};
  ${display};
  ${typography};
  ${space};
  ${background};
  ${color};
  ${border};
  ${position};
`;
