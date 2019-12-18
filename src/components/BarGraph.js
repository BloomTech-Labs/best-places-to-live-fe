import React from "react";
import { ResponsiveBar } from "@nivo/bar";

// make sure parent container have a defined height when using
const BarGraph = ({ data, city1, city2, history }) => {
  console.log(data);
  const handleClick = (node, e) => {
    console.log(node);
    //average bar could push user to a city with a score closest to the average
    console.log(node.id, city1);
    console.log(node.id === city1.name);
    let cityID;
    if (node.id === "best") {
      cityID = node.data.bestCityID;
    } else if (node.id === "worst") {
      cityID = node.data.worstCityID;
    } else if (node.id === "average") {
      cityID = "";
    } else if (node.id === city1.name) {
      //we have city1 !
      cityID = city1._id;
    } else {
      cityID = city2._id;
    }

    history.push(`/city/${cityID}`);
  };

  return (
    <ResponsiveBar
      data={data}
      keys={[`${city1.name}`, `${city2.name}`, "worst", "best", "average"]}
      indexBy="factor"
      margin={{ top: 50, right: 100, bottom: 50, left: 100 }}
      padding={0.5}
      layout="horizontal"
      colors={{ scheme: "nivo" }}
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
      fill={[
        {
          match: {
            id: `${city1.name}`
          },
          id: "dots"
        },
        {
          match: {
            id: `${city2.name}`
          },
          id: "lines"
        }
      ]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: -40
      }}
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
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 0.5
              }
            }
          ]
        }
      ]}
      onClick={(node, e) => handleClick(node, e)}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default BarGraph;
