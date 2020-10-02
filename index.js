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
        choices: ["","",""],
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

 const generatedFile = generateMarkdown(answers)

 fs.writeFile("README.md", generatedFile, function(err) {
    if (err) throw err;
   
  })
})