import styled from "styled-components";
import { display, layout, space, typography, position } from "styled-system";

export const Avatar = styled.span`
  border: 2px solid blue;
  box-sizing: border-box;
  border-radius: 50%;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${layout};
  ${space};
  ${display};
  ${typography};
  ${position};
`;
