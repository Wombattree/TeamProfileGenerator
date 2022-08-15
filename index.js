const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./source/generateHTML");

const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");

let employees = [];
let finishedAddingEmployees;

function MainLoop()
{
    AddManager();

    while (finishedAddingEmployees === false) 
    {
        let newEmployeeType = GetNewTeamMemberType();

        if (newEmployeeType === "Engineer") AddNewEngineer();
        else if (newEmployeeType === "Intern") AddNewIntern();
        else finishedAddingEmployees = true;
    }

    CreateFile(generateHTML.GenerateHTML());
}

function AddManager()
{
    inquirer.prompt([
    {
        type: 'input',
        message: `What is your team manager's name?`,
        name: 'managerName',
    },
    {
        type: 'input',
        message: `What is your team manager's id?`,
        name: 'managerId',
    },
    {
        type: 'input',
        message: `What is your team manager's email?`,
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: `What is your team manager's office number?`,
        name: 'managerOfficeNumber',
    },
    ]).then((response) =>
    {
        employees.push(new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber));
    });
}

function GetNewTeamMemberType()
{
    inquirer.prompt([
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'teamMemberType',
        choices: ["Engineer", "Intern", "All team members have been added"]
    },
    ]).then((response) => { return response.teamMemberType; });
}

function AddNewEngineer()
{ 
    inquirer.prompt([
    {
        type: 'input',
        message: `What is the employee's name?`,
        name: 'employeeName',
    },
    {
        type: 'input',
        message: `What is the employee's id?`,
        name: 'employeeId',
    },
    {
        type: 'input',
        message: `What is the employee's email?`,
        name: 'employeeEmail',
    },
    {
        type: 'input',
        message: `What is the employee's github username?`,
        name: 'employeeGithubUsernamer',
    },
    ]).then((response) =>
    {
        employees.push(new Engineer(response.employeeName, response.employeeId, response.employeeEmail, response.employeeGithubUsernamer));
    });
}

function AddNewIntern()
{ 
    inquirer.prompt([
    {
        type: 'input',
        message: `What is the employee's name?`,
        name: 'employeeName',
    },
    {
        type: 'input',
        message: `What is the employee's id?`,
        name: 'employeeId',
    },
    {
        type: 'input',
        message: `What is the employee's email?`,
        name: 'employeeEmail',
    },
    {
        type: 'input',
        message: `What is the employee's school?`,
        name: 'employeeSchool',
    },
    ]).then((response) =>
    {
        employees.push(new Intern(response.employeeName, response.employeeId, response.employeeEmail, response.employeeSchool));
    });
}

function CreateFile(HTMLString)
{
    fs.writeFile("./output/output.html", HTMLString , (error) => error ? console.error(error) : console.log("HTML created!"));
}

MainLoop();