import React from "react";
import * as rtl from "@testing-library/react";
import Error from "./Error";

it("renders error name text", () => {
  const { getByText } = rtl.render(
    <Error error={{ message: "This is the test error" }} />
  );

  getByText(/This is the test error/i);
});
