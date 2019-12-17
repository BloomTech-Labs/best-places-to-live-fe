import React from "react";
import { Flex, Text, Container } from "../styles/index";
import { ResponsiveBar } from "@nivo/bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.05}
    groupMode="grouped"
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

const CityStats = ({ city }) => {
  const data = [
    {
      city: "City1",
      "hot dog": 62,
      "hot dogColor": "hsl(286, 70%, 50%)",
      burger: 85,
      burgerColor: "hsl(62, 70%, 50%)",
      sandwich: 196,
      sandwichColor: "hsl(18, 70%, 50%)",
      kebab: 5,
      kebabColor: "hsl(72, 70%, 50%)",
      fries: 69,
      friesColor: "hsl(14, 70%, 50%)",
      donut: 13,
      donutColor: "hsl(346, 70%, 50%)"
    },
    {
      city: "City2",
      "hot dog": 140,
      "hot dogColor": "hsl(148, 70%, 50%)",
      burger: 136,
      burgerColor: "hsl(314, 70%, 50%)",
      sandwich: 34,
      sandwichColor: "hsl(20, 70%, 50%)",
      kebab: 16,
      kebabColor: "hsl(213, 70%, 50%)",
      fries: 60,
      friesColor: "hsl(142, 70%, 50%)",
      donut: 73,
      donutColor: "hsl(316, 70%, 50%)"
    }
  ];
  return (
    <Flex justifyContent="center">
      <Text as="h2">{city.name}</Text>
      <Container height="30vw" width="50%">
        <MyResponsiveBar data={data} />
      </Container>
    </Flex>
  );
};

export default CityStats;
