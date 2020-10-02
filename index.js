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
        message: "Enter Description",
        name: "description"
    },
    {
        type: "input",
        message: "Enter Table of Contents",
        name: "tableofcontents"
    },
    {
        type: "input",
        message: "Enter Installation",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter Usage",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter License",
        name: "license"
    },
    {
        type: "input",
        message: "Enter Contributing",
        name: "contributing"
    },
    {
        type: "input",
        message: "Enter Tests",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email",
        name: "email"
    },
    
])
.then(function(answers){
 const generatedFile = generateMarkdown(answers)

 fs.writeFile("README.md", generatedFile, function(err) {
    if (err) throw err;
   
  })
})