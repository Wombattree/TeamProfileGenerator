const index = require("../index.js");
const Employee = require("../library/employee");
const Manager = require("../library/manager");
const Engineer = require("../library/engineer");
const Intern = require("../library/intern");

describe("Employees", () =>
{
    describe("Employee", () => 
    {
        it("Should return the information of the employee", () => 
        {
            const name = "Steve";
            const id = 50;
            const email = "steve@gmail.com";
            const employee = new Employee(name, id, email);

            expect(employee.GetName()).toEqual(name);
            expect(employee.GetID()).toEqual(id);
            expect(employee.GetEmail()).toEqual(email);
        });
    });

    describe("Manager", () => 
    {
        it("Should return the role of the employee", () => 
        {
            const role = "Manager";
            const employee = new Manager("Steve", 50, "steve@gmail.com", 100);

            expect(employee.GetRole()).toEqual(role);
        });

        it("Should return the office number of the employee", () => 
        {
            const officeNumber = 100;
            const employee = new Manager("Steve", 50, "steve@gmail.com", officeNumber);

            expect(employee.GetOfficeNumber()).toEqual(officeNumber);
        });
    });

    describe("Engineer", () => 
    {
        it("Should return the role of the employee", () => 
        {
            const role = "Engineer";
            const employee = new Engineer("Steve", 50, "steve@gmail.com", "steve");

            expect(employee.GetRole()).toEqual(role);
        });

        it("Should return the github username of the employee", () => 
        {
            const githubUsername = "steve";
            const employee = new Engineer("Steve", 50, "steve@gmail.com", githubUsername);

            expect(employee.GetGithubUsername()).toEqual(githubUsername);
        });
    });

    describe("Intern", () => 
    {
        it("Should return the role of the employee", () => 
        {
            const role = "Intern";
            const employee = new Intern("Steve", 50, "steve@gmail.com", "Tech school");

            expect(employee.GetRole()).toEqual(role);
        });

        it("Should return the school of the employee", () => 
        {
            const school = "Tech school";
            const employee = new Intern("Steve", 50, "steve@gmail.com", school);

            expect(employee.GetSchool()).toEqual(school);
        });
    });
});