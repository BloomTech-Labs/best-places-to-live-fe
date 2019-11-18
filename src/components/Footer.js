import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <p>&copy; {today.getFullYear()} Tomato Pie Coders</p>
    </footer>
  );
};

export default Footer;
