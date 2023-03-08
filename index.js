// Constructor Arithmetic is imported.
const Triangle = require("./lib/triangle.js");
const Square = require("./lib/square.js");
const Circle = require("./lib/circle.js");
const CLI = require("./lib/CLI.js");
const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "What text would you like to be on the logo? (3 character max)",
    name: "text",
  },
  {
    type: "input",
    message: "What color would you like the logo to be?",
    name: "bgColor",
  },
  {
    type: "input",
    message: "What color would you like the text to be?",
    name: "textColor",
  },
  {
    type: "list",
    message: "What shape would you like the logo to be?",
    choices: ["square", "triangle", "circle"],
    name: "shape",
  },
];

const cli = new CLI(questions);
// // console.log(cli);
cli.run();
