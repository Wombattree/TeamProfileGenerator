const Employee = require("./employee");

class Engineer extends Employee
{
    constructor(name, id, email, githubUsername)
    {
        super(name, id, email);
        this.githubUsername = githubUsername;
    }

    GetGithubUsername() { return this.githubUsername; }
    GetRole() { return "Engineer"; }
}

module.exports = Engineer;