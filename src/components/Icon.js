import React from "react";
// const { PropTypes } = React;

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
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 60 60"
    >
      <path style={styles.path} d={props.icon} />
    </svg>
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
