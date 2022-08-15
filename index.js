const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./assets/generateMarkdown");

class UserResponse
{
    constructor(projectTitle, description, usageInformation, liscenseType, installationCommand, testCommand, contributors, email, github)
    {
        this.projectTitle = projectTitle;
        this.description = description;
        this.usageInformation = usageInformation;
        this.installationCommand = installationCommand;
        this.liscenseType = liscenseType;
        this.contributors = contributors;
        this.testCommand = testCommand;
        this.email = email;
        this.github = github;
    }
}

inquirer.prompt([
{
    type: 'input',
    message: 'Please enter a title for your project:',
    name: 'projectTitle',
},
{
    type: 'input',
    message: 'Please describe your project:',
    name: 'description',
},
{
    type: 'list',
    message: 'Please enter the license type:',
    name: 'liscenseType',
    choices: ["mit", "gpl-2.0", "gpl-3.0", "agpl-3.0", "lgpl-3.0", "apache-2.0", "bsl-1.0", "bsd-2-clause", "bsd-3-clause", "cc0-1.0", "epl-2.0", "mpl-2.0", "unlicense"]
},
{
    type: 'input',
    message: 'Please enter the command to install dependencies:',
    name: 'installationCommand',
},
{
    type: 'input',
    message: 'Please enter the command to run tests:',
    name: 'testCommand',
},
{
    type: 'input',
    message: 'Please provide any extra information needed to use this project:',
    name: 'usageInformation',
},
{
    type: 'input',
    message: 'Please enter the names of any contributors:',
    name: 'contributors',
},
{
    type: 'input',
    message: 'Please enter your email address:',
    name: 'email',
},
{
    type: 'input',
    message: 'Please enter your github username:',
    name: 'github',
},
]).then((response) =>
{
    let userResponse = new UserResponse(response.projectTitle, response.description, response.usageInformation, response.liscenseType, response.installationCommand, response.testCommand, response.contributors, response.email, response.github);
    let markdownString = generateMarkdown.GenerateMarkdownString(userResponse);
    CreateMarkdownFromString(markdownString);
});

function CreateMarkdownFromString(markdownString)
{
    fs.writeFile("./assets/readMe.md", markdownString , (error) => error ? console.error(error) : console.log("ReadMe created!"));
}