const { Router } = require("express");
const { printLanding } = require("../Handlers/test.js")
const router = Router();

router.get("/", printLanding);

module.exports = router;
