import React from "react";
import * as rtl from "@testing-library/react";
import CheckOval from "./CheckOval";

it('renders "Display Name" text', () => {
  const { getByText } = rtl.render(
    <CheckOval factor={{ factor: "Testing", displayName: "Chicken" }} />
  );

  getByText(/Chicken/i);
});
