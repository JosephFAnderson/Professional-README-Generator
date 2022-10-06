// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  switch(license){
    case 'Apache 2.0':
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    case 'Boost Software License 1.0':
      return '![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
    case 'GNU GPL v3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    case 'None':
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'Apache 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)'
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)'
    case 'Boost Software License 1.0':
      return '(https://www.boost.org/LICENSE_1_0.txt)'
    case 'GNU GPL v3':
      return '(https://www.gnu.org/licenses/gpl-3.0)'
    case 'None':
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return "";
  }

  return `The license for this project is: ${license}\n
  Click [here]${renderLicenseLink(license)} to read about it.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Test Instructions](#test-instructions)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## How to Contribute
${data.contribute}

## Test Instructions
${data.test}

## Questions
[My github](https://github.com/${data.ghUser})\n
If you have any additional questions email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
