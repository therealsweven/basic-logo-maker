const inquirer = require("inquirer");
const fs = require("fs");
const Triangle = require("../lib/triangle");
const Square = require("../lib/square");
const Circle = require("../lib/circle");

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

// TODO: Create a function to initialize app
// function runCLI(questions) {
//   inquirer
//     //prompt with questions array
//     .prompt(questions)
//     //use response in the writeToFile function to created the README properly formatted in markdown
//     .then((response) => {
//       if (response.shape === "circle") {
//         const logo = new Circle(
//           response.text,
//           response.textColor,
//           response.bgColor
//         );
//         console.log(logo);
//         return logo.render();
//       } else if (response.shape === "square") {
//         const logo = new Square(
//           response.text,
//           response.textColor,
//           response.bgColor
//         );
//         console.log(logo);
//         const logoString = logo.render();
//         console.log(logoString);
//         return logoString;
//       } else {
//         const logo = new Triangle(
//           response.text,
//           response.textColor,
//           response.bgColor
//         );
//         console.log(logo);
//         const logoString = logo.render();
//         console.log(logoString);
//         return logoString;
//       }
//     })
//     .then((logoString) => {
//       fs.writeFile("logo.svg", logoString, (error) => {
//         error ? console.log(error) : console.log("Generated logo.svg");
//       });
//     });
// }

// runCLI(questions);

class CLI {
  constructor(questions) {
    this.questions = questions;
  }
  run() {
    return (
      inquirer
        //prompt with questions array
        .prompt(this.questions)
        .then((response) => {
          if (response.shape === "circle") {
            const logo = new Circle(
              response.text,
              response.textColor,
              response.bgColor
            );
            console.log(logo);
            return logo.render();
          } else if (response.shape === "square") {
            const logo = new Square(
              response.text,
              response.textColor,
              response.bgColor
            );
            console.log(logo);
            const logoString = logo.render();
            console.log(logoString);
            return logoString;
          } else {
            const logo = new Triangle(
              response.text,
              response.textColor,
              response.bgColor
            );
            console.log(logo);
            const logoString = logo.render();
            console.log(logoString);
            return logoString;
          }
        })
    );
  }
}

module.exports = CLI;
