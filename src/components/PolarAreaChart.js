import React from "react";
import { Polar } from "react-chartjs-2";
import { factors } from "../utils/factors";

const PolarAreaChart = ({ city }) => {
  //labels are factor display names
  //data is the array of ranked scores
  console.log(city);
  console.log();
  return (
    <Polar
      data={{
        datasets: [
          {
            data: factors.map(
              factor =>
                city[
                  factor.factor === "ranked_population"
                    ? "population-size"
                    : factor.factor
                ]
            ),
            backgroundColor: [
              "#1a1aff",
              "#6666ff",
              "#b3b3ff",
              "#ff0000",
              "#800000",
              "#ffcccc",
              "#ffff00",
              "#999900",
              "#654321",
              "#096a82",
              "#25a2c1",
              "#00cc00",
              "#009900",
              "#006600"
            ],
            label: "My dataset" // for legend
          }
        ],
        labels: factors.map(factor => factor.displayName)
      }}
      onElementsClick={e => console.log(e)}
      width="600"
      height="600"
    />
  );
};

export default PolarAreaChart;
