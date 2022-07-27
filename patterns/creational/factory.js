/**
 * Factory is a pattern, where we create an object, that creates other objects.
 * This object allows you to control all your object creation in one location.
 */

class Developer {
  constructor(name) {
    this.name = name;
    this.type = 'Developer';
  }
}

class Tester {
  constructor(name) {
    this.name = name;
    this.type = 'Tester';
  }
}

// Factory
class EmployeeFactory {
  constructor() {
    // Factory has create method
    this.create = (name, type) => {
      switch (type) {
        case 'Developer':
          return new Developer(name);
        case 'Tester':
          return new Tester(name);
        default:
          break;
      }
    };
  }
}

function presentEmployee() {
  console.log(`I'm ${this.name} and I'm a ${this.type}!`);
}

// Instance of Factory
const employeeFactory = new EmployeeFactory();

// Prepare empty array for instances
const employees = [];

// Create objects
employees.push(employeeFactory.create('Patrick', 'Developer'));
employees.push(employeeFactory.create('Taylor', 'Developer'));
employees.push(employeeFactory.create('John', 'Tester'));
employees.push(employeeFactory.create('Mark', 'Tester'));

employees.forEach((employee) => {
  presentEmployee.call(employee);
});
