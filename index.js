// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function createFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app

function init() {inquirer
    .prompt([
      {
        type: 'input',
        message: `What is the project title?`,
        name: 'title',
      },
      {
        type: 'input',
        message: 'Description of application:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Installation Instructions:',
        name: 'installation',
      },
      {
          type: 'input',
          message: 'Usage Information:',
          name: 'usage',
        },
        {
          type: 'input',
          message: 'Contribution guidelines:',
          name: 'contribution',
        },
        {
          type: 'input',
          message: 'Test Instructions:',
          name: 'test',
        },
        {
          type: 'list',
          message: 'License Type:',
          name: 'license',
          choices: ['MIT', 'Apache 2.0', 'Boost 1.0', 'Perl', 'None']
        },
        {
          type: 'input',
          message: 'GitHub Username:',
          name: 'github',
        },
        {
          type: 'input',
          message: 'Email address:',
          name: 'email',
        },
  
    ])
    .then((response) => {
        fileName = "README.md";
     const data = markdown.generateMarkdown(response);
     createFile(fileName, data);
    }
     
    ); }

// Function call to initialize app
init();
