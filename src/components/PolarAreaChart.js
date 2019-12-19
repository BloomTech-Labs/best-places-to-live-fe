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
              "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#E7E9ED",
              "#36A2EB"
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
