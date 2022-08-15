const Employee = require("./employee");

class Intern extends Employee
{
    constructor(name, id, email, school)
    {
        super(name, id, email);
        this.school = school;
    }

    GetSchool() { return this.school; }
    GetRole() { return "Intern"; }
}

module.exports = Intern;