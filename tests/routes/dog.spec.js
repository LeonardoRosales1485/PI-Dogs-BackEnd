/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Dogs, conn } = require("../../src/db.js");
const {
  SERVER_DOG,
  SERVER_DOGS,
  SERVER_TEMPERS,
  SERVER_MYDOGS,
} = require("../../consts.js");

const agent = session(app);
const dog = {
  id: "a7eb05de-c282-4833-85f3-a1290c16d8f8",
  name: "Test",
  origin: "England",
  height: 20,
  weight: 8,
  life_span: "14",
  temperament: "Loyal, friendly",
};

describe("GET routes test", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Database is offline:", err);
    })
  );

  beforeEach(() => Dogs.sync({ force: true }).then(() => Dogs.create(dog)));


  describe("Dog creation route", () => {
    it("should get 200", () => agent.get(SERVER_DOG).expect(200));
  });
  describe("API dogs route", () => {
    it("should get 200", () => agent.get(SERVER_DOGS).expect(200));
  });
  describe("Custom dogs route", () => {
    it("should get 200", () => agent.get(SERVER_MYDOGS).expect(200));
  });
  describe("Temperaments route", () => {
    it("should get 200", () => {agent.get(SERVER_TEMPERS).expect(200)});
  });

});
