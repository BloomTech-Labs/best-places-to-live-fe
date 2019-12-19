import styled from "styled-components";
import { display, layout, space, typography, position } from "styled-system";

export const Avatar = styled.span`
  border: 2px solid blue;
  box-sizing: border-box;
  border-radius: 50%;
  font-size: 1rem;
  padding: 10px;
  ${layout};
  ${space};
  ${display};
  ${typography};
  ${position};
`;
