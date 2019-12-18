import React from "react";
import styled from "styled-components";
// const { PropTypes } = React;
import { Button } from "../styles";

const IconButton = styled(Button)`
  background-color: transparent;
  border: none;
  position: relative;
  padding: 0px;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = props => {
  const styles = {
    svg: {
      display: "inline-block",
      verticalAlign: "middle",
      transform: `rotate(${props.rotate ? props.rotate : 0}deg)`
    },
    path: {
      fill: props.color
    }
  };

  return (
    <IconButton>
      <svg
        style={styles.svg}
        width={`${props.size}px`}
        height={`${props.size}px`}
        viewBox="0 0 60 60"
      >
        <path style={styles.path} d={props.icon} />
      </svg>
    </IconButton>
  );
};

// Icon.propTypes = {
//   icon: PropTypes.string.isRequired,
//   size: PropTypes.number,
//   color: PropTypes.string
// };

// Icon.defaultProps = {
//   size: 16
// };

export default Icon;
