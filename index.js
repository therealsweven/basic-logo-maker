const CLI = require("./lib/CLI.js");
const fs = require("fs");

const cli = new CLI();
// // console.log(cli);
cli.run().then((logoString) => {
  fs.writeFile("./dist/logo.svg", logoString, (error) => {
    error ? console.log(error) : console.log("Generated logo.svg");
  });
});
