// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
## Description
${answers.description}

## Table of Contents

${answers.tableofcontents}


## Installation
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
${answers.questions}
## Badges

${answers.badges}










`;
}

module.exports = generateMarkdown;
