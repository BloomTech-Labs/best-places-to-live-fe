import React from "react";
import { Flex, Text, Container } from "../styles/index";
import { ResponsiveBar } from "@nivo/bar";
import { factors } from "../utils/factors";

// make sure parent container have a defined height when using
const MyResponsiveBar = ({ data, city1, city2 }) => {
  console.log(data);
  return (
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
};

const CityStats = ({ city1, city2 }) => {
  const responseFromBe = {
    score_commute: {
      worstCityFactorScore: 0.00049208698993497,
      worstCityID: "5dc9f97b2a65b6af02024d11",
      bestCityFactorScore: 9.981284612982805,
      bestCityID: "5dc9f97b2a65b6af02024ced",
      averageFactorScore: 5.387567577106268
    },
    score_cost_of_living: {
      worstCityFactorScore: 0.014019107063852343,
      worstCityID: "5dc9f97b2a65b6af02025039",
      bestCityFactorScore: 9.910368355327133,
      bestCityID: "5dc9f97b2a65b6af020259c2",
      averageFactorScore: 5.600112309700621
    },
    score_economy: {
      worstCityFactorScore: 0.5636930163574083,
      worstCityID: "5dc9f97b2a65b6af02024f55",
      bestCityFactorScore: 9.93012060253847,
      bestCityID: "5dc9f97b2a65b6af02024ae7",
      averageFactorScore: 6.291405250981759
    },
    score_education: {
      worstCityFactorScore: 0.4880878927503002,
      worstCityID: "5dc9f97b2a65b6af02025122",
      bestCityFactorScore: 9.696249651870435,
      bestCityID: "5dc9f97b2a65b6af02024c2f",
      averageFactorScore: 5.3502417599988705
    },
    score_environmental_quality: {
      worstCityFactorScore: 0.23470110330059246,
      worstCityID: "5dc9f97b2a65b6af0202517b",
      bestCityFactorScore: 10.048029569508936,
      bestCityID: "5dc9f97b2a65b6af02025039",
      averageFactorScore: 4.500618799514065
    },
    score_healthcare: {
      worstCityFactorScore: 0.035707231057461875,
      worstCityID: "5dc9f97b2a65b6af02025156",
      bestCityFactorScore: 10.03547044533858,
      bestCityID: "5dc9f97b2a65b6af020252c8",
      averageFactorScore: 5.833907698395775
    },
    score_housing: {
      worstCityFactorScore: 0.6967048664981951,
      worstCityID: "5dc9f97b2a65b6af0202548a",
      bestCityFactorScore: 9.729353211193088,
      bestCityID: "5dc9f97b2a65b6af02024ae7",
      averageFactorScore: 4.8169339262785185
    },
    score_internet_access: {
      worstCityFactorScore: 0.14547803746797539,
      worstCityID: "5dc9f97b2a65b6af02025d11",
      bestCityFactorScore: 10.012444651269387,
      bestCityID: "5dc9f97b2a65b6af02024ba7",
      averageFactorScore: 4.8399924303366335
    },
    "score_leisure_&_culture": {
      worstCityFactorScore: 0.000012661343534725589,
      worstCityID: "5dc9f97b2a65b6af02024bd2",
      bestCityFactorScore: 9.617637087600016,
      bestCityID: "5dc9f97b2a65b6af02025480",
      averageFactorScore: 5.4048696738602295
    },
    score_outdoors: {
      worstCityFactorScore: 0.0025824187321765724,
      worstCityID: "5dc9f97b2a65b6af0202546b",
      bestCityFactorScore: 10.011374740215146,
      bestCityID: "5dc9f97b2a65b6af02024ffb",
      averageFactorScore: 6.454347929168535
    },
    score_safety: {
      worstCityFactorScore: 0.20588697645449294,
      worstCityID: "5dc9f97b2a65b6af0202546b",
      bestCityFactorScore: 9.96144290008285,
      bestCityID: "5dc9f97b2a65b6af02024c2f",
      averageFactorScore: 6.01451497799692
    },
    score_startups: {
      worstCityFactorScore: 0.0009029820603945193,
      worstCityID: "5dc9f97b2a65b6af02024bd2",
      bestCityFactorScore: 9.260384847617841,
      bestCityID: "5dc9f97b2a65b6af0202515f",
      averageFactorScore: 5.799968323727989
    },
    score_taxation: {
      worstCityFactorScore: 0.39772293749102017,
      worstCityID: "5dc9f97b2a65b6af02025494",
      bestCityFactorScore: 10.000938669729297,
      bestCityID: "5dc9f97b2a65b6af02024aee",
      averageFactorScore: 6.874825803599047
    },
    population: {
      worstCityFactorScore: 93361,
      worstCityID: "5dc9f97b2a65b6af0202549d",
      bestCityFactorScore: 8175133,
      bestCityID: "5dc9f97b2a65b6af02025480",
      averageFactorScore: 344155.58203125
    }
  };

  const data = factors.map(item => {
    const filteredBE =
      responseFromBe[
        item.factor === "ranked_population" ? "score_economy" : item.factor
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
