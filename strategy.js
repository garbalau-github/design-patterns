/**
 * Strategy (creational) - is a pattern in which you
 * encapsulate a family or a group of closely related
 * algorithms, these algorithms are called 'strategies',
 * they are just functions. It allows to swap 'strategies'
 * very easily
 */

function Fedex() {
  this.calculate = (package) => {
    // Fedex calculations
    return 2.45; // Shipping Rate
  };
}

function UPS() {
  this.calculate = (package) => {
    // UPS calculations
    return 1.55; // Shipping Rate
  };
}

function USPS() {
  this.calculate = (package) => {
    // USPS calculations
    return 4.5; // Shipping Rate
  };
}

// Package (demo purposes)
const package = { from: 'Alabama', to: 'Georgia', weight: 2 };

// Instances
const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

// -- Calculations (No pattern)
// fedex.calculate(package);
// ups.calculate(package);
// usps.calculate(package);

// Calculations (Strategy pattern)
// Context
function Shipping() {
  this.company = null; // Storing reference
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    // Call
    return this.company.calculate(package);
  };
}

// Create an instance of Strategy pattern
const shipping = new Shipping();

// Examples
shipping.setStrategy(fedex);
console.log(`Fedex: ${shipping.calculate(package)}`);

shipping.setStrategy(ups);
console.log(`UPS: ${shipping.calculate(package)}`);

shipping.setStrategy(usps);
console.log(`USPS: ${shipping.calculate(package)}`);
