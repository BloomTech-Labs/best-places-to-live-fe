import axios from "axios";

const cities = "";

let axiosGets = [];
let newDict1 = [];
for (let itemD of citiesArray) {
  for (let itemT of teleportData) {
    if (itemT["name"] === itemD) {
      axiosGets.push(axios.get(itemT["href"] + "images"));
      newDict1.push(citiesArray[citiesArray.indexOf(itemD)]);
    }
  }
}
let finalDict = [];

const response = axios
  .all(axiosGets)
  .then(res => {
    let axiosGetData = res.map(item => item.data);
    for (let i = 0; i < newDict1.length; i++) {
      let obj = {};
      obj.name = newDict1[i];
      obj.photoWeb = axiosGetData[i]["photos"][0]["image"]["web"];
      obj.photoMobile = axiosGetData[i]["photos"][0]["image"]["mobile"];
      finalDict.push(obj);
    }

    fs.writeFile("data.txt", JSON.stringify(finalDict), err => {
      // In case of a error throw err.
      if (err) throw err;
    });
  })
  .catch(err => console.log(err));
