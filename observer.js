/**
 * The observer pattern is a software design pattern in which an object,
 * named the subject, maintains a list of its dependents, called observers,
 * and notifies them automatically of any state changes,
 * usually by calling one of their methods. Observers watch the subject,
 * and wait some signal before they run (event listener)
 */

function Subject() {
  this.observers = []; // Array of observer functions
}

// Methods
Subject.prototype = {
  subscribe: function (fnToAdd) {
    this.observers.push(fnToAdd); // fnToAdd wants to receive news
  },
  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => {
      if (fn !== fnToRemove) {
        // fnToRemove wants to stop receiving news
        return fn;
      }
    });
  },
  fire: function () {
    // Notify all observer which is currently subscribred
    this.observers.forEach((obs) => {
      obs.call();
    });
  },
};

// Subject
const subject = new Subject();

// Observers
function Observer1() {
  console.log('Observer1 firing!');
}

function Observer2() {
  console.log('Observer2 firing!');
}

// Subscribing
subject.subscribe(Observer1);
subject.subscribe(Observer2);

// Unsubscribing
subject.unsubscribe(Observer1);

// Fire
subject.fire();
