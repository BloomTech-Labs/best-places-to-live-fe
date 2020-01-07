import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import ToolTip from "./ToolTip";
import { Flex, Text, Container } from "../styles/index";

// make sure parent container have a defined height when using
const BarGraph = ({ data, city1, city2, mobile, history }) => {
  //We want the keys for the bar graph to be worst, best, average, <city1.name>, <city2.name>
  //This changes takes the information from data, city1, and city2 and transforms it into a new object
  /* Data sent to bar graph is different from data that is used to retrieve ids */
  const dataForBarGraph = data.map(item => {
    let testObj = {};
    Object.keys(item.scores).forEach(keyName => {
      testObj[keyName] = item.scores[keyName] + 0.05;
    });
    let obj = {
      [city1.name]: item.scores.city1,
      [city2.name]: item.scores.city2,
      ...testObj
    };
    obj["factor"] = item.factor;
    return obj;
  });

  const handleClick = node => {
    //node.indexValue is the factor
    const dataFiltered = data
      .filter(item => item.factor === node.indexValue)
      .pop();

    //node.id is best, worst, average, <city1Name>, <city2Name>
    const cityID = dataFiltered.ids[node.id];

    //There is not city associated with average
    if (node.id !== "average") {
      history.push(`/city/${cityID}`);
    }
  };

  return (
    <ResponsiveBar
      data={dataForBarGraph}
      keys={["worst", "average", "best", `${city1.name}`, `${city2.name}`]}
      indexBy="factor"
      margin={{ top: 50, right: 200, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      colors={{ scheme: "spectral" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      //Enable label for mobile?
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 30,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 50,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      onClick={node => handleClick(node)}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      tooltip={node => {
        console.log(node);
        //node.indexValue is the factor
        const dataFiltered = data
          .filter(item => item.factor === node.indexValue)
          .pop();

        //node.id is best, worst, average, <city1Name>, <city2Name>
        const cityName = dataFiltered.names[node.id];
        const cityScore = dataFiltered.scores[node.id];

        return (
          <ToolTip label={node.id} cityName={cityName} score={cityScore} />
        );
      }}
      theme={{
        tooltip: {
          container: {
            background: "white"
          }
        },
        legends: {
          text: {
            fontSize: 14
          }
        }
      }}
      onMouseEnter={(_data, event) => {
        event.target.style.transition = "0.2s all ease-in";
        event.target.style.opacity = ".8";
        if (_data.id != "average") {
          event.target.style.cursor = "pointer";
        }
      }}
      onMouseLeave={(_data, event) => {
        event.target.style.transition = "0.2s all ease-out";
        event.target.style.opacity = "1";
        event.target.style.cursor = "default";
      }}
    />
  );
};

export default BarGraph;
