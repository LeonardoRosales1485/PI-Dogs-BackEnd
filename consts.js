require('dotenv').config();

//API URLS
const API_BASE_URL = "https://api.TheDogAPI.com/";
const API_DOGS_URL = "v1/breeds"; // + dogId
const API_IMGS_URL = "https://cdn2.thedogapi.com/images/"; // + reference_image_id + .jpg
const API_KEY = process.env.API_KEY;
const config = {
  HOST: process.env.HOST || "localhost",
};

//SERVER URLS

const VERSION = "/v1";
let SERVER_DOG = `${VERSION}/dog`;
let SERVER_DOGS = `${VERSION}/dogs`;
let SERVER_TEMPERS = `${VERSION}/temperaments`;
let SERVER_ADD_DOG = `${VERSION}/dogs/addDog`;
let SERVER_DOG_DETAILS = `${VERSION}/dogs/:id`;
let SERVER_MYDOGS = `${VERSION}/myDogs`;

module.exports = {
  //api exports
  API_BASE_URL,
  API_DOGS_URL,
  API_IMGS_URL,
  API_KEY,
  config,
  //server exports
  VERSION,
  SERVER_DOG,
  SERVER_DOGS,
  SERVER_TEMPERS,
  SERVER_ADD_DOG,
  SERVER_DOG_DETAILS,
  SERVER_MYDOGS
};
