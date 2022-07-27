/**
 * Visitor allows us to provide new methods or functionality to an object,
 * without changing the object itself. Visitor object is useful
 * for extending a library for example. The actual object should
 * allow Visitor to have access to its properties and add logic
 */

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
  setSalary(sal) {
    this.salary = sal;
  }
  // Accept of Visitor
  accept(visitorFunction) {
    visitorFunction(this);
  }
}

// Initiate instance of Employee
const nick = new Employee('Nick', 15000);

// Check .getSalary method
console.log(nick.getSalary());

// Visitor extends our functionality
const ExtraSalary = (emp) => {
  emp.setSalary(emp.getSalary() * 2);
};

nick.accept(ExtraSalary);

// Check .getSalary method (after Visitor's work)
console.log(nick.getSalary());
