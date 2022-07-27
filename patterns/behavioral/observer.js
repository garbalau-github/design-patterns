/**
 * Observer pattern is a software design pattern in which an object,
 * named the subject, maintains a list of its dependents, called observers,
 * and notifies them automatically of any state changes,
 * usually by calling one of their methods. Observers watch the subject,
 * and wait some signal before they run an event
 */

// Create subject
class Subject {
  constructor() {
    // Array of observers
    this.observers = [];
  }
  subscribe(functionToAdd) {
    // Function want to receive updates
    this.observers.push(functionToAdd);
  }
  unsubscribe(functionToRemove) {
    // Function stops getting updates
    this.observers = this.observers.filter((func) => {
      if (func !== functionToRemove) {
        return func;
      }
    });
  }
  fire() {
    // Notify all observers which is currently subscribred
    this.observers.forEach((observer) => {
      observer.call();
    });
  }
}

// Init of Subject
const subject = new Subject();

// Create Observers
const ObserverOne = () => console.log('ObserverOne fires!');
const ObserverTwo = () => console.log('ObserverTwo fires!');

// Subject subscribes to Observers
subject.subscribe(ObserverOne);
subject.subscribe(ObserverTwo);

// Check
subject.fire();

// Unsubscribe Subject from an Observer
console.log('Unsubscribing from ObserverOne');
subject.unsubscribe(ObserverOne);

// Check
subject.fire();
