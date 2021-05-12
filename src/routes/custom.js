const { Router } = require("express");
const { getAddedDogs } = require("../Handlers/dogs.js");
const router = Router();

router.get("/", getAddedDogs);

module.exports = router;
