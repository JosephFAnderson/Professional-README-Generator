// TODO: Include packages needed for this application
// import inquirer from 'inquirer'
const inquirer = require('inquirer');
const genMark = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    name: "title",
    type: "input",
    message: "What is the project title?",
}, {
    name: "description",
    type: "input",
    message: "What does it do?",
}, {
    name: "installation",
    type: "input",
    message: "What are the installation instructions?"
}, {
    name: "usage",
    type: "input",
    message: "What is the usage information?"
}, {
    name: "license",
    type: "list",
    choices: ["Apache 2.0", "MIT", "Boost Software License 1.0", "GNU GPL v3", "None"],
    message: "What type of license do you have?"
}, {
    name: "contribute",
    type: "input",
    message: "What are the guidelines for contributing?"
}, {
    name: "test",
    type: "input",
    message: "What are the test instructions?"
}, {
    name: "ghUser",
    type: "input",
    message: "What is your your Github username?"    
}, {
    name: "email",
    type: "input",
    message: "What is your email address?"
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('File written successfully\n'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then( answers => {
        const readMe = genMark(answers);
        writeToFile('./genFile/README.md', readMe);
    });
}

// Function call to initialize app
init();
