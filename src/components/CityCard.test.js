import React from "react";
import * as rtl from "@testing-library/react";
import CityCard from "./CityCard";

it("renders city name text", () => {
  const { getByText } = rtl.render(
    <CityCard
      city={{ short_name: "Test", state: "California", population: "4" }}
    />
  );

  getByText(/Test/i);
});

it("renders city state text", () => {
  const { getByText } = rtl.render(
    <CityCard
      city={{ short_name: "Test", state: "California", population: "4" }}
    />
  );

  getByText(/California/i);
});

it("renders city population text", () => {
  const { getByText } = rtl.render(
    <CityCard
      city={{ short_name: "Test", state: "California", population: "4" }}
    />
  );

  getByText(/population: 4/i);
});
