const { Router } = require("express");
const { getDogs, addDog } = require("../Handlers/dogs.js");
const router = Router();

router.get("/", getDogs);

router.post("/", addDog);

module.exports = router;
