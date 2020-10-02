// function to generate markdown for README
function generateMarkdown(answers, licenseURL) {
  //returning all the users data and adding it to the generated readme file
  return `# ${answers.title}

 

## Description

${licenseURL}

${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

Run this to install <br>
<pre><code>${answers.installation}</pre></code>

## Usage

${answers.usage}

## License

${answers.license}

## Credits

 ${answers.credits}

## Contributing

Contributions to this project are welcomed and encouraged in the form of issues and pull requests.

## Tests

${answers.tests}

## Questions

If you have any questions about this application
please contact me through email at : <br>
Github : https://github.com/${answers.github}<br>
Email : ${answers.email}


`;
}
//exporting data to index.js file
module.exports = generateMarkdown;
