/**
 * Command pattern - is a behavioral design pattern in which an object is used to
 * encapsulate all information needed to perform an action or trigger an event at a later time.
 * This information includes the method name, the object that owns the method and
 * values for the method parameters.
 */

// Calculator
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
    const command = this.history.pop(); // Returns last element
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

// Combination Command
class AddThenMultiplyCommand {
  constructor(valueToAdd, valueToMultiply) {
    this.AddCommand = new AddCommand(valueToAdd);
    this.MultiplyCommand = new MultiplyCommand(valueToMultiply);
  }

  execute(curValue) {
    // Adding
    const newValue = this.AddCommand.execute(curValue);
    // Multiplying
    return this.MultiplyCommand.execute(newValue);
  }

  undo(curValue) {
    // Undoing Multiplying
    const newValue = this.MultiplyCommand.undo(curValue);
    // Undoing Adding
    return this.AddCommand.undo(newValue);
  }
}

const calculator = new Calculator();
calculator.executeCommand(new AddThenMultiplyCommand(10, 2));
console.log(calculator.value);
calculator.undo();
console.log(calculator.value);
