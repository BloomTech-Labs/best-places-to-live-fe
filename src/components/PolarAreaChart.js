import React from "react";
import { Polar } from "react-chartjs-2";
import { factors } from "../utils/factors";

const PolarAreaChart = ({ city }) => {
  //labels are factor display names
  //data is the array of ranked scores
  console.log("city in polar area chart", city);
  return (
    <Polar
      data={{
        datasets: [
          {
            data: factors.map(
              factor => Math.round(city[factor.factor] * 100) / 10
            ),
            backgroundColor: [
              "#eaf6db",
              "#dcecc9",
              "#b3ddcc",
              "#8acdce",
              "#62bed2",
              "#46aace",
              "#3d91be",
              "#3577ae",
              "#2d5e9e",
              "#24448e",
              "#1c2b7f",
              "#162065",
              "#11174b",
              "black"
            ],
            label: "My dataset" // for legend
          }
        ],
        labels: factors.map(factor => factor.displayName)
      }}
      onElementsClick={e => console.log(e)}
      width={600}
      height={600}
      options={{
        legend: {
          labels: {
            fontSize: 20
          }
        }
      }}
    />
  );
};

export default PolarAreaChart;
