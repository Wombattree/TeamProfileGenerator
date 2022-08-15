const Employee = require("./employee");

class Manager extends Employee
{
    constructor(name, id, email, officeNumber)
    {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    GetOfficeNumber() { return this.officeNumber; }
    GetRole() { return "Manager"; }
}

module.exports = Manager;