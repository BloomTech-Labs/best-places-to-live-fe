import { factors } from "../utils/factors";

export const responseFromBe = {
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

export function getData(city1, city2) {
  //Removing population from factors
  const population = factors.pop();

  return factors.map(item => {
    //Getting factor object
    //Using population instead of ranked_population due to differing BE and DS
    const factorStats =
      responseFromBe[
        item.factor === "ranked_population" ? "score_economy" : item.factor
      ];

    let obj = {
      factor: item.displayName,
      city1Color: "hsl(314, 70%, 50%)",
      city2Color: "hsl(100, 70%, 50%)",
      average: factorStats["averageFactorScore"],
      averageColor: "hsl(31, 70%, 50%)",
      best: factorStats["bestCityFactorScore"],
      bestCityID: factorStats["bestCityID"],
      bestColor: "hsl(31, 70%, 50%)",
      worst: factorStats["worstCityFactorScore"],
      worstCityID: factorStats["worstCityID"],
      worstColor: "hsl(31, 70%, 50%)"
    };

    //Adding new key to object based on city name
    //Getting the value at the factor name from the city object
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
}
