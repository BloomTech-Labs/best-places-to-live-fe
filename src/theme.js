const breakpoints = ["40em", "52em", "64em", "80em"];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const colors = {
  primary: "#FF4C4C"
};

const space = [
  "0",
  ".25rem",
  ".5rem",
  "1rem",
  "2rem",
  "3rem",
  "4rem",
  "8rem",
  "16rem"
];

const fontSizes = [".75rem", ".875rem", "1rem", "1.25rem", "1.5rem", "2rem"];

// aliases
fontSizes.body = fontSizes[2];
fontSizes.display = fontSizes[5];

export default {
  breakpoints,
  colors,
  space,
  fontSizes
};
