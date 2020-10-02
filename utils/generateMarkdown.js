// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

## Description
${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


${answers.tableofcontents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## credits
Contributors : ${answers.credit}

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Tests
${answers.tests}

## Questions
Github : https://github.com/${answers.github}
Please contact me throught email at : ${answers.email}


`;
}

module.exports = generateMarkdown;
