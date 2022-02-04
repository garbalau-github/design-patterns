/**
 * Visitor pattern - allows us to provide new methods or functionality to an object,
 * but without changing the object itself. Visitor object is useful
 * for extending a library or something. The actual object should
 * allow Visitor to have access to its properties and add logic on
 * top on that
 */

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  setSalary: function (sal) {
    this.salary = sal;
  },
  accept: function (visitorFunction) {
    visitorFunction(this);
  },
};

// Employee
const nick = new Employee('Nick', 15000);

// Self object call
console.log(nick.getSalary());

// Lets try to extend functionality
function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

nick.accept(ExtraSalary);

// Extended object call (Visitor)
console.log(nick.getSalary());
