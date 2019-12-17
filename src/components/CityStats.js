import React from "react";
import { Flex, Text, Container } from "../styles/index";
import { ResponsiveBar } from "@nivo/bar";

// make sure parent container have a defined height when using
const MyResponsiveBar = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    keys={["city1", "city2", "worst", "best", "average"]}
    indexBy="factor"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.05}
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
          id: "fries"
        },
        id: "dots"
      },
      {
        match: {
          id: "sandwich"
        },
        id: "lines"
      }
    ]}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40
    }}
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
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

const CityStats = ({ city1, city2 }) => {
  const data = [
    {
      factor: "population",
      city1: 200,
      city1Color: "hsl(314, 70%, 50%)",
      city2: 250,
      city2Color: "hsl(100, 70%, 50%)",
      average: 150,
      averageColor: "hsl(31, 70%, 50%)",
      best: 300,
      bestColor: "hsl(10, 30%, 50%)",
      worst: 10,
      worstColor: "hsl(0, 70%, 50%)"
    },
    {
      factor: "commuteTime",
      city1: 10,
      city1Color: "hsl(314, 70%, 50%)",
      city2: 250,
      city2Color: "hsl(100, 70%, 50%)",
      average: 150,
      averageColor: "hsl(31, 70%, 50%)",
      best: 300,
      bestColor: "hsl(10, 30%, 50%)",
      worst: 10,
      worstColor: "hsl(0, 70%, 50%)"
    }
  ];
  return (
    <Container width="100%">
      <Flex justifyContent="center" width="100%">
        <Text as="h2">{city1.name}</Text>
        <Text as="h2">{city2.name}</Text>
      </Flex>
      <Container height="40vw" width="100%">
        <MyResponsiveBar data={data} />
      </Container>
    </Container>
  );
};

export default CityStats;
