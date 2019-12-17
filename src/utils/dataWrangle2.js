const axios = require("axios");
import { factors } from "./factors";

let graphDataObj = {};
const cityObjs = axios
  .get("https://bestplacesbe-test.herokuapp.com/city/all")
  .then(res => {
    const ids = res.data.cities.map(city => city._id);

    const response = axios
      .post("https://bestplacesbe-test.herokuapp.com/city", { ids: ids })
      .then(res => {
        const allCities = res.data.data;

        //add min, max, avg, minID, maxID to graphDataObj
        for (let i = 0; i < factors.length; i++) {
          let f = factors[i].factor;
          let factorScores = allCities.map(item => item[f]);
          graphDataObj[f] = Mat;
        }
      });
  })
  .catch(err => console.log(err));
