/**
 * Singleton is a pattern which comes handy when you want to limit
 * the number of instances of an object
 */

class Process {
  constructor(state) {
    this.state = state;
  }
}

// We want to limit number of instances to one
const Singleton = (() => {
  // Create only one instance
  let processManager;

  function ProcessManager() {}

  return {
    getProcessManager: () => {
      // Create only if it not exists already
      if (!processManager) {
        processManager = new ProcessManager();
      }
      return processManager;
    },
  };
})();

const processManager1 = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

// They are the same instance
console.log(processManager1 === processManager2);
