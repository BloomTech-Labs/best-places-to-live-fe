import React from "react";
import { Polar } from "react-chartjs-2";
import { factors } from "../utils/factors";

const PolarAreaChart = ({ city }) => {
  //labels are factor display names
  //data is the array of ranked scores
  return (
    <Polar
      data={{
        datasets: [
          {
            data: factors.map(factor => Math.round(city[factor.factor] * 100)),
            backgroundColor: [
              "#66CD00",
              "#458B00",
              "#78AB46",
              "#C0D9AF",
              "#7BBF6A",
              "#20BF9F",
              "#48D1CC",
              "#5F9F9F",
              "#8FD8D8",
              "#0EBFE9",
              "#50A6C2",
              "#42C0FB",
              "#3664AB",
              "#1874CD"
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
