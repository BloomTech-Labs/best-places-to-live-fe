/* Styled Systems - Similar to mixins and variables for LESS - allows for unversality and dnyamic properties */

const breakpoints = ["40em", "52em", "64em", "80em"];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const colors = {
  primary: "#FF4C4C",
  white: "#fff",
  gray: "#333",
  blue: "#0066ff",
  baliHai: "#808EAC",
  portGore: "#2A2855",
  silver: "#C4C4C4",
  navy: "#045BED",
  cornflowerBlue: "#8BB5FD",
  choronozon: "#232326",
  scienceBlue: "#024BCA",
  athensGray: "#F7F7FA",
  blackPearl: "rgba(4, 3, 22, 0.7)"
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

const fonts = ["Noto Sans"];

const fontSizes = [
  ".75rem",
  ".875rem",
  "1rem",
  "1.25rem",
  "1.5rem",
  "2rem",
  "2.5rem"
];

// aliases
fontSizes.body = fontSizes[2];
fontSizes.display = fontSizes[5];

export default {
  breakpoints,
  colors,
  space,
  fontSizes,
  fonts
};
