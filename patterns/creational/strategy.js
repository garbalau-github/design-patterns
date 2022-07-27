/**
 * Strategy is a pattern in which you encapsulate a family of closely related
 * algorithms. These algorithms are called 'strategies', and they are just functions.
 * This option allows to swap 'strategies' very easily
 */

// Create example object
const pckg = { from: 'Alabama', to: 'Georgia', weight: 3 };

class Fedex {
  constructor() {
    this.calculate = () => {
      // Shipping rate
      return 2.45;
    };
  }
}

class UPS {
  constructor() {
    this.calculate = () => {
      // Shipping rate
      return 1.55;
    };
  }
}

class USPS {
  constructor() {
    this.calculate = () => {
      // Shipping rate
      return 4.5;
    };
  }
}

// Instances
const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

// Strategy
class Shipping {
  constructor() {
    this.company = null; // Store reference
    this.setStrategy = (company) => {
      this.company = company;
    };
    this.calculate = (pckg) => {
      return this.company.calculate(pckg);
    };
  }
}

// Instance of Strategy
const shipping = new Shipping();

// Examples
shipping.setStrategy(fedex);
console.log(`Fedex: ${shipping.calculate(pckg)}`);

shipping.setStrategy(ups);
console.log(`UPS: ${shipping.calculate(pckg)}`);

shipping.setStrategy(usps);
console.log(`USPS: ${shipping.calculate(pckg)}`);
