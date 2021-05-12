const axios = require("axios");
const { API_BASE_URL, API_DOGS_URL } = require("../../consts.js");
const { Temperaments } = require("../db.js");

function processData(res) {
  let aux = [];
  let info = res["data"];
  info.forEach(element => {
    if (element["temperament"]) aux.push(element["temperament"].split(", "));
  });
  var newArr = [];
  for (var i = 0; i < aux.length; i++) {
    newArr = newArr.concat(aux[i]);
  }
  let unique = [...new Set(newArr)]
  let obj = [];
  for (let i = 0; i < unique.length; i++) {
    let aux = {
      "id": i,
      "name": unique[i],
    }
    obj.push(aux)
  }
  return obj;
}

async function getTemperaments(req, res, next) {
  const flag = await Temperaments.count();
  var moods;
  if (!flag) {
    const dogsApi = await axios.get(`${API_BASE_URL}${API_DOGS_URL}`);
    moods = processData(dogsApi);
    console.log(moods);
    if (moods !== undefined) {
      await Temperaments.bulkCreate(moods);
      return res.json(moods);
    }
  }
  console.log("Desde la DB");
  const temps = await Temperaments.findAll();
  return res.json(temps);
}

module.exports = {
  getTemperaments,
};
