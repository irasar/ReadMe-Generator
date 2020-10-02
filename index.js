const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


inquirer.prompt([
    {
        type:"input",
        message:"Enter Project Title",
        name: "title"

    },
    {
        type: "input",
        message: "Enter Description of the project",
        name: "description"
    },
    {
        type: "input",
        message: "Enter Table of Contents",
        name: "tableofcontents"
    },
    {
        type: "input",
        message: "Describe the steps neccessary for installing this project",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter Usage for this project",
        name: "usage"
    },
    {
        type: "list",
        choices: ["GNU GPLv3", "MIT license" , "Apache License 2.0"],
        name: "license"
    },
    {
        type: "input",
        message: "Who contributed to this application?",
        name: "credits"
    },
    {
        type: "input",
        message: "Enter Tests you would like for this project",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    
])
.then(function(answers){


    let licenseURL;
    
    if (answers.license === "GNU GPLv3") {
        licenseURL = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    if (answers.license === "MIT License") {
        licenseURL = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (answers.license === "Apache License 2.0") {
        licenseURL = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"


    }


 const generatedFile = generateMarkdown(answers, licenseURL);

 fs.writeFile("README.md", generatedFile, function(err) {
    if (err) throw err;
   
  })
})