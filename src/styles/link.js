import styled from "styled-components";
import { typography, color } from "styled-system";
import { Link, NavLink } from "react-router-dom";
import theme from "../theme";

export const StyledLink = styled(Link)`
  ${typography};
  ${color};
  text-decoration: none;
`;

export const StyledNavLink = styled(NavLink)`
  ${typography};
  ${color};
  font-size: ${theme.fontSizes.body};
  text-decoration: none;
  color: black;
`;
