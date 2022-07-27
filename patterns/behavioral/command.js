/**
 * Command pattern is a behavioral design pattern in which an object is used to
 * encapsulate all information needed to perform an action or
 * trigger an event at a later time. This information includes the method name,
 * the object that owns the method and values for the parameters.
 */

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }
  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }
  undo() {
    // Returns last element
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}

class AddCommand {
  constructor(value) {
    this.value = value;
  }
  execute(curValue) {
    return curValue + this.value;
  }
  undo(curValue) {
    return curValue - this.value;
  }
}

class SubtractCommand {
  constructor(value) {
    this.value = value;
  }
  execute(curValue) {
    return curValue - this.value;
  }
  undo(curValue) {
    return curValue + this.value;
  }
}

class MultiplyCommand {
  constructor(value) {
    this.value = value;
  }
  execute(curValue) {
    return curValue * this.value;
  }
  undo(curValue) {
    return curValue / this.value;
  }
}

class DivideCommand {
  constructor(value) {
    this.value = value;
  }
  execute(curValue) {
    return curValue / this.value;
  }
  undo(curValue) {
    return curValue * this.value;
  }
}

// Combination (AddCommand + MultiplyCommand)
class AddThenMultiplyCommand {
  constructor(valueToAdd, valueToMultiply) {
    this.AddCommand = new AddCommand(valueToAdd);
    this.MultiplyCommand = new MultiplyCommand(valueToMultiply);
  }
  execute(curValue) {
    // Add
    const newValue = this.AddCommand.execute(curValue);
    // Multiply
    return this.MultiplyCommand.execute(newValue);
  }
  undo(curValue) {
    // Undo Multiply
    const newValue = this.MultiplyCommand.undo(curValue);
    // Undo Add
    return this.AddCommand.undo(newValue);
  }
}

// Instance of Calculator
const calculator = new Calculator();

// Run command
calculator.executeCommand(new AddThenMultiplyCommand(10, 2));

// Log results
console.log(calculator.value); // 20
calculator.undo();
console.log(calculator.value); // 0
