// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
  switch (license) {
    case "MIT":
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';   
    case "Apache 2.0":
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'; 
    case "Boost 1.0":
       return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';  
    case "Perl":
       return '![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)';
    default:
      return '';  
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return '(https://opensource.org/licenses/MIT)';   
    case "Apache 2.0":
      return '(https://opensource.org/licenses/Apache-2.0)'; 
    case "Boost 1.0":
       return '(https://www.boost.org/LICENSE_1_0.txt)';  
    case "Perl":
       return '(https://opensource.org/licenses/Artistic-2.0)';
  };
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None'){
    const licenseSection = `${license}  ${renderLicenseLink(license)}`;
    return licenseSection;
}else{
return('');
};
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
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Tests

${data.test}

## Questions
  
Github Username: [${data.github}](#github.com/${data.github}) \n 
Email ${data.email} for any further questions. 

`;
}

module.exports = {
  generateMarkdown: generateMarkdown
}
