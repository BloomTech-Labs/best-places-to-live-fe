import { factors } from "../utils/factors";

export const responseFromBe = {
  score_commute: {
    worstCityFactorScore: 0.00049208698993497,
    worstCityID: "5dc9f97b2a65b6af02024d11",
    worstName: "East Chattanooga, TN",
    bestCityFactorScore: 9.981284612982805,
    bestCityID: "5dc9f97b2a65b6af02024ced",
    bestName: "Boulder, CO",
    averageFactorScore: 5.387567577106268
  },
  score_cost_of_living: {
    worstCityFactorScore: 0.014019107063852343,
    worstCityID: "5dc9f97b2a65b6af02025039",
    worstName: "Fort Collins, CO",
    bestCityFactorScore: 9.910368355327133,
    bestCityID: "5dc9f97b2a65b6af020259c2",
    bestName: "San Antonio, TX",
    averageFactorScore: 5.600112309700621
  },
  score_economy: {
    worstCityFactorScore: 0.5636930163574083,
    worstCityID: "5dc9f97b2a65b6af02024f55",
    worstName: "Irving, TX",
    bestCityFactorScore: 9.93012060253847,
    bestCityID: "5dc9f97b2a65b6af02024ae7",
    bestName: "Albuquerque, NM",
    averageFactorScore: 6.291405250981759
  },
  score_education: {
    worstCityFactorScore: 0.4880878927503002,
    worstCityID: "5dc9f97b2a65b6af02025122",
    worstName: "East Independence, MO",
    bestCityFactorScore: 9.696249651870435,
    bestCityID: "5dc9f97b2a65b6af02024c2f",
    bestName: "Boston, MA",
    averageFactorScore: 5.3502417599988705
  },
  score_environmental_quality: {
    worstCityFactorScore: 0.23470110330059246,
    worstCityID: "5dc9f97b2a65b6af0202517b",
    worstName: "Thousand Oaks, CA",
    bestCityFactorScore: 10.048029569508936,
    bestCityID: "5dc9f97b2a65b6af02025039",
    bestName: "Fort Collins, CO",
    averageFactorScore: 4.500618799514065
  },
  score_healthcare: {
    worstCityFactorScore: 0.035707231057461875,
    worstCityID: "5dc9f97b2a65b6af02025156",
    worstName: "Paradise, NV",
    bestCityFactorScore: 10.03547044533858,
    bestCityID: "5dc9f97b2a65b6af020252c8",
    bestName: "Madison, WI",
    averageFactorScore: 5.833907698395775
  },
  score_housing: {
    worstCityFactorScore: 0.6967048664981951,
    worstCityID: "5dc9f97b2a65b6af0202548a",
    worstName: "Harlem, NY",
    bestCityFactorScore: 9.729353211193088,
    bestCityID: "5dc9f97b2a65b6af02024ae7",
    bestName: "Albuquerque, NM",
    averageFactorScore: 4.8169339262785185
  },
  score_internet_access: {
    worstCityFactorScore: 0.14547803746797539,
    worstCityID: "5dc9f97b2a65b6af02025d11",
    worstName: "Arlington, VA",
    bestCityFactorScore: 10.012444651269387,
    bestCityID: "5dc9f97b2a65b6af02024ba7",
    bestName: "Austin, TX",
    averageFactorScore: 4.8399924303366335
  },
  "score_leisure_&_culture": {
    worstCityFactorScore: 0.000012661343534725589,
    worstCityID: "5dc9f97b2a65b6af02024bd2",
    worstName: "Columbia, MD",
    bestCityFactorScore: 9.617637087600016,
    bestCityID: "5dc9f97b2a65b6af02025480",
    bestName: "New York City, NY",
    averageFactorScore: 5.4048696738602295
  },
  score_outdoors: {
    worstCityFactorScore: 0.0025824187321765724,
    worstCityID: "5dc9f97b2a65b6af0202546b",
    worstName: "Metairie, LA",
    bestCityFactorScore: 10.011374740215146,
    bestCityID: "5dc9f97b2a65b6af02024ffb",
    bestName: "Denver, CO",
    averageFactorScore: 6.454347929168535
  },
  score_safety: {
    worstCityFactorScore: 0.20588697645449294,
    worstCityID: "5dc9f97b2a65b6af0202546b",
    worstName: "Metairie, LA",
    bestCityFactorScore: 9.96144290008285,
    bestCityID: "5dc9f97b2a65b6af02024c2f",
    bestName: "Boston, MA",
    averageFactorScore: 6.01451497799692
  },
  score_startups: {
    worstCityFactorScore: 0.0009029820603945193,
    worstCityID: "5dc9f97b2a65b6af02024bd2",
    worstName: "Columbia, MD",
    bestCityFactorScore: 9.260384847617841,
    bestCityID: "5dc9f97b2a65b6af0202515f",
    bestName: "Los Angeles, CA",
    averageFactorScore: 5.799968323727989
  },
  score_taxation: {
    worstCityFactorScore: 0.39772293749102017,
    worstCityID: "5dc9f97b2a65b6af02025494",
    worstName: "Sheepshead Bay, NY",
    bestCityFactorScore: 10.000938669729297,
    bestCityID: "5dc9f97b2a65b6af02024aee",
    bestName: "Anchorage, AK",
    averageFactorScore: 6.874825803599047
  },
  population: {
    worstCityFactorScore: 93361,
    worstCityID: "5dc9f97b2a65b6af0202549d",
    worstName: "Flatbush, NY",
    bestCityFactorScore: 8175133,
    bestCityID: "5dc9f97b2a65b6af02025480",
    bestName: "New York City, NY",
    averageFactorScore: 344155.58203125
  }
};

export function getData(city1, city2) {
  return factors.map(item => {
    //Getting factor object
    //Using population instead of ranked_population due to differing BE and DS
    const factorStats =
      responseFromBe[
        item.factor === "ranked_population" ? "score_economy" : item.factor
      ];

    let obj = {
      factor: item.displayName,
      names: {
        [city1.name]: city1.name,
        [city2.name]: city2.name,
        worst: factorStats["worstName"],
        best: factorStats["bestName"]
      },
      ids: {
        best: factorStats["bestCityID"],
        worst: factorStats["worstCityID"],
        [city1.name]: city1._id,
        [city2.name]: city2._id
      },
      scores: {
        average: factorStats["averageFactorScore"],
        best: factorStats["bestCityFactorScore"],
        worst: factorStats["worstCityFactorScore"],
        [city1.name]:
          city1[
            item.factor === "ranked_population" ? "score_economy" : item.factor
          ],
        [city2.name]:
          city2[
            item.factor === "ranked_population" ? "score_economy" : item.factor
          ]
      }
    };

    return obj;
  });
}
