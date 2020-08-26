const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Utils/generateMarkdown");
const path = require("path");

const questions = [
  {
    type: "input",
    message: "What is the title of this repository?",
    name: "title"
  },
  {
    type: "input", // let's you type freely
    message: "Please give a brief description of this repo.",
    name: "description"
  },
  {
    type: "confirm", // gives you the y/n
    message: "Would you like this generator to create a Table of Contents for you automatically?",
    name: "toc",
  },
  {
    type: "input",
    message: "Please enter the instructions for the installation of this repo.",
    name: "installation",
    default: "npm i inquirer"
  },
  {
    type: "input",
    message: "What else do we need to know about this repo?",
    name: "usage"
  },
  {
    type: "list", // outputs it as a list for you to choose from
                  // in accordance to the order of the values in the array
    message: "Please select one of the following licenses.",
    name: "license",
    choices: ["APACHE 2.0", "MIT", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    message: "Please give a brief description of what you contributed to the repo.",
    name: "contributing"
  },
  {
    type: "input",
    message: "What needs to be run to do a test?",
    name: "tests",
    default: "npm test"
  },
  {
    type: "input",
    message: "What's your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What's your email address?",
    name: "email"
  }
];

function writeFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

inquirer.prompt(questions).then(answers => {
  console.log(answers);
  
  writeFile("generated.md", generateMarkdown({ ...answers }))
})