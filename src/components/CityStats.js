import React from "react";
import { Flex, Text, Container } from "../styles/index";
import { ResponsiveBar } from "@nivo/bar";
import { factors } from "../utils/factors";

// make sure parent container have a defined height when using
const MyResponsiveBar = ({ data, city1, city2 }) => (
  <ResponsiveBar
    data={data}
    keys={[`${city1}`, `${city2}`, "worst", "best", "average"]}
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
          id: `${city1}`
        },
        id: "dots"
      },
      {
        match: {
          id: `${city2}`
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
      legend: "factors",
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
  const responseFromBe = {
    score_commute: {
      bestCityID: "5dc9f97b2a65b6af02024d11",
      bestCityFactorScore: 0.00390625,
      worstCityID: "5dc9f97b2a65b6af02024ced",
      worstCityFactorScore: 1.0,
      averageFactorScore: 22
    },
    score_cost_of_living: {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    },
    score_economy: {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    },
    score_education: {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    },
    score_environmental_quality: {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    },
    score_healthcare: {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    },
    score_housing: {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    },
    score_internet_access: {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    },
    "score_leisure_&_culture": {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    },
    score_outdoors: {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    },
    score_safety: {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    },
    score_startups: {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    },
    score_taxation: {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    },
    population: {
      bestCityID: "awefawef",
      bestCityFactorScore: 100,
      worstCityID: "awefawef",
      worstCityFactorScore: 33,
      averageFactorScore: 22
    }
  };

  const data = factors.map(item => {
    const filteredBE =
      responseFromBe[
        item.factor === "ranked_population" ? "population" : item.factor
      ];

    let obj = {
      factor: item.displayName,
      city1Color: "hsl(314, 70%, 50%)",
      city2Color: "hsl(100, 70%, 50%)",
      average: filteredBE["averageFactorScore"],
      averageColor: "hsl(31, 70%, 50%)",
      best: filteredBE["bestCityFactorScore"],
      bestColor: "hsl(31, 70%, 50%)",
      worst: filteredBE["worstCityFactorScore"],
      worstColor: "hsl(31, 70%, 50%)"
    };

    obj[city1.name] =
      city1[
        item.factor === "ranked_population" ? "score_economy" : item.factor
      ];
    obj[city2.name] =
      city2[
        item.factor === "ranked_population" ? "score_economy" : item.factor
      ];

    return obj;
  });

  console.log(data);

  return (
    <Container width="100%">
      <Flex justifyContent="center" width="100%">
        <Text as="h2">
          {city1.name} vs {city2.name}
        </Text>
      </Flex>
      <Flex justifyContent="center" width="100%">
        <Text as="h3">Factors</Text>
      </Flex>
      <Container height="40vw" width="100%" m={"0 auto"} maxWidth={1200}>
        <MyResponsiveBar data={data} city1={city1.name} city2={city2.name} />
      </Container>
    </Container>
  );
};

export default CityStats;
