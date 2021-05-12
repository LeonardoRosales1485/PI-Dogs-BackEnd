const { Dogs } = require("../db.js");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { API_BASE_URL, API_DOGS_URL } = require("../../consts.js");

async function addDog(req, res) {
  const id = uuidv4();
  const dog = { ...req.body, id };
  try {
    const [dogs] = await Dogs.findOrCreate({
      where: {
        id: dog.id,
        name: dog.name,
        origin: dog.origin,
        height: dog.height,
        weight: dog.weight,
        life_span: dog.lifeSpan,
        temperament: dog.temperament,
      },
    });
    if (dogs) {
      let aux = [dogs];
      return res.json({
          message: 'New dog created successfully',
          data: aux
      });
    }
  } catch (e) {
    console.log(e);
    res.send({ error: 500, msg: "No se envió nada" });
  }
}

function getDogs(req, res, next) {
  const dogsApi = axios.get(`${API_BASE_URL}${API_DOGS_URL}`);
  dogsApi
    .then((response) => {
      let asd = response["data"]
      res.send(asd)
    })
    .catch((err) => next(err));
}
//colocar ambos en la misma funcion
function getAddedDogs(req, res, next) {
  Dogs.findAll()
    .then((razas) => res.send(razas))
    .catch((err) => next(err));
}

module.exports = {
  getDogs,
  addDog,
  getAddedDogs,
};
