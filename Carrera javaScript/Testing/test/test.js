// Ejemlos con mocha

const assert = require("assert");
const assertChai = require("chai").assert;
const should = require("chai").should();
const expect = require("chai").expect;

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("Mis ejemplos con mocha", () => {
  it("Validando que el numero 5 este en mi array", () => {
    assert.equal([1, 2, 3, 4, 5].indexOf(5), 4);
  });
});

describe("Mis ejemplos con mocha y chai", () => {
  it("Validando que el numero 5 este en mi array", () => {
    assertChai.equal([1, 2, 3, 4, 5].indexOf(5), 4);
  });

  it("Quiero validar que 2 + 2 = 4", () => {
    const suma = 2 + 2;
    assertChai.equal(suma, 4);
  });

  it("Validando la cantidad de elementos pero con should", () => {
    const array = [10, 20, 30, 40];
    array.should.have.lengthOf(4);
  });

  it("Validar la existencia de una propiedad de un objeto", () => {
    const jwt = {
      expireIn: new Date(),
      user: "Juan",
      server: "localhost:5000",
    };
    expect(jwt).to.have.property("user");
  });
});