const inquirer = require("inquirer");
const Triangle = require("../lib/triangle");
const Square = require("../lib/square");
const Circle = require("../lib/circle");

class CLI {
  constructor() {}
  run() {
    return (
      inquirer
        //prompt with questions array
        .prompt([
          {
            type: "input",
            message:
              "What text would you like to be on the logo? (3 character max)",
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
        ])
        //check text length
        .then((response) => {
          if (response.text.length > 3) {
            throw new Error(
              "Please run program again and enter text 3 characters or less in length."
            );
          }
          return response;
        })
        //create svg string for user input with corresponding class based on user input for shape
        .then((response) => {
          console.log(response);
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
