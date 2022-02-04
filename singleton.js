/**
 * Singleton (creational) - is a pattern which comes handy
 * when you want to limit the number of instances of an object,
 * to at most one (or zero)
 */

// Managing processes (more than 1)
// Process manager (only 1)

function Process(state) {
  this.state = state; // process is running, or blocked, or stoped
}

// We want to limit number of instances to one
// IIFE
const Singleton = (function () {
  // Create only one instance
  let pManager;

  function ProcessManager() {}

  return {
    getProcessManager: () => {
      // Create if it not exists already
      if (!pManager) {
        pManager = new ProcessManager();
      }
      return pManager;
    },
  };
})();

const processManager1 = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

// true (They are the same instance)
console.log(processManager1 === processManager2);
