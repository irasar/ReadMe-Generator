// function to generate markdown for README
function generateMarkdown(answers, licenseURL) {
  return `# ${answers.title}

  ${licenseURL}

## Description

${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${answers.installation}

## Usage

${answers.usage}

## License

${answers.license}

## Credits

Contributors : ${answers.credits}

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Tests

${answers.tests}

## Questions

If you have any questions about this application
please contact me through email at : <br>
Github : https://github.com/${answers.github}<br>
Email : ${answers.email}


`;
}

module.exports = generateMarkdown;
