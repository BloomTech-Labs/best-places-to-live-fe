import styled from "styled-components";
import { typography, color } from "styled-system";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  ${typography};
  ${color};
  text-decoration: none;
`;
