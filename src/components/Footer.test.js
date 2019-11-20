import React from "react";
import * as rtl from "@testing-library/react";
import Footer from "./Footer";

it('renders "Tomato Pie Coders" text', () => {
  const { getByText } = rtl.render(<Footer />);

  getByText(/Tomato Pie Coders/i);
});
