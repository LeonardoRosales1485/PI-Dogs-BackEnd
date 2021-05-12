const { Router } = require("express");
const router = Router();
//funtions
const LANDING = require("./landing.js")
const DOGS = require("./dogs.js");
const TEMPERS = require("./tempers.js");
const CUSTOM = require("./custom.js");
//server urls
const {
  SERVER_DOG,
  SERVER_DOGS,
  SERVER_TEMPERS,
  SERVER_MYDOGS,
  SERVER_DOG_DETAILS,
} = require("../../consts.js");

router.use("/", LANDING)
router.use(SERVER_DOG, DOGS);
router.use(SERVER_DOGS, DOGS);
router.use(SERVER_TEMPERS, TEMPERS);
router.use(SERVER_MYDOGS, CUSTOM);

module.exports = router;
