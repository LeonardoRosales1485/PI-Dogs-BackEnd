const { Router } = require("express");
const { getTemperaments } = require("../Handlers/temperaments.js");
const router = Router();

router.get("/", getTemperaments);

module.exports = router;
