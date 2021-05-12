const { Dogs, conn } = require('../../src/db.js');
const { expect } = require('chai');

const dog = {where: {
  id: "a7eb05de-c282-4833-85f3-a1290c16d8f8",
  name: "Test",
  origin: "England",
  height: 20,
  weight: 8,
  life_span: "14",
  temperament: "Loyal, friendly",
}};
const dog2 = {where: {
  id: "a7eb05de-c282-4833-85f3-a1290c16d8f7",
  name: null,
  origin: "England",
  height: 20,
  weight: 8,
  life_span: "14",
  temperament: "Loyal, friendly",
}};

describe('POST routes & Database validation', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Dog creation', () => {
    beforeEach(() => Dogs.sync({ force: true }));
    describe('New dog', () => {
      it('should throw an error if name is null', (done) => {
        Dogs.create(dog2)
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dogs.create(dog2);
      });
    });
  });
});
