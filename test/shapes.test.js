const Triangle = require("../lib/triangle");
const Square = require("../lib/square");
const Circle = require("../lib/circle");

describe("Circle", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("Check svg string colors and text", () => {
    it("should add colors and text defined into svg string output", () => {
      //arrange step - setup variables for your test
      const string = `<svg height="200" width="300"><circle cx="150" cy="100" r="100" stroke="white" fill="blue" /><text x="150" y="130" text-anchor="middle" fill="blue" font-size="80">TEXT</text></svg>`;
      //act step - where you execute code
      const circle = new Circle("TEXT", "blue", "blue");
      //assert step - check tht values meet certain conditions

      expect(circle.render()).toEqual(string);
    });
  });
});
describe("Triangle", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("Check svg string colors and text", () => {
    it("should add colors and text defined into svg string output", () => {
      //arrange step - setup variables for your test
      const string = `<svg height="200" width="300"><polygon points="0 200, 150 0, 300 200" fill="blue" stroke="white"/><text x="150" y="170" text-anchor="middle" fill="blue" font-size="80">TEXT</text></svg>`;
      //act step - where you execute code
      const triangle = new Triangle("TEXT", "blue", "blue");
      //assert step - check tht values meet certain conditions

      expect(triangle.render()).toEqual(string);
    });
  });
});
describe("Square", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("Check svg string colors and text", () => {
    it("should add colors and text defined into svg string output", () => {
      //arrange step - setup variables for your test
      const string = `<svg width="300" height="200"><rect x="10" y="10" fill="blue" width="300" height="200"/><text x="150" y="130" text-anchor="middle" fill="blue" font-size="80">TEXT</text></svg>`;
      //act step - where you execute code
      const square = new Square("TEXT", "blue", "blue");
      //assert step - check tht values meet certain conditions
      expect(square.render()).toEqual(string);
    });
  });
});
