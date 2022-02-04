/**
 * Factory (creational) - is a pattern, where we create an object
 * that creates and manufactures other objects, and allows you to control all your object
 * creation in one centralized location, which is very clean solution
 * and helps to keep your code quite organized
 */

// Array for employees
const employees = [];

// 2 types of objects
function Developer(name) {
  this.name = name;
  this.type = 'Developer';
}

function Tester(name) {
  this.name = name;
  this.type = 'Tester';
}

// Factory
function EmployeeFactory() {
  // Every factory has a create method
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
      default:
        break;
    }
  };
}

// Logging function
function presentEmployee() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}

// Get factory instance
const employeeFactory = new EmployeeFactory();

// Create objects
employees.push(employeeFactory.create('Patrick', 1));
employees.push(employeeFactory.create('Taylor', 1));
employees.push(employeeFactory.create('John', 2));
employees.push(employeeFactory.create('Mark', 2));

// Logger
employees.forEach((employee) => {
  // Passing the 'this' reference
  presentEmployee.call(employee);
});
