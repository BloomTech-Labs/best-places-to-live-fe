import styled from "styled-components";
import { FaCog } from "react-icons/fa";

export const SettingsCog = styled(FaCog)`
  position: relative;
  transition-property: transform;
  transition-duration: 1s;

  &:hover {
    animation-name: rotate;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
