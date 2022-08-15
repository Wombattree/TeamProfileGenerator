class Employee
{
    constructor(name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    GetName() { return this.name; }
    GetID() { return this.id; }
    GetEmail() { return this.email; }
    GetRole() { return "Employee"; }
}

module.exports = Employee;