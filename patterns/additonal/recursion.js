/**
 * Recursion is a programming technique, in which solution to one big problem,
 * depends on a solution of each of sub-problems inside of it. It is usually expressed
 * as a function which calls itself over and over, untill it reaches stoping conditions.
 * Why use it? Less code, code is elegant, increased readability
 */

// Recursion in Factorial
function factorial(n) {
  // Stoping condition
  if (n <= 1) {
    return 1;
  } else {
    // Recursive call
    return n * factorial(n - 1);
  }
}
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// Recursion in Counter
let number = 1;
const countToTenRecursion = (number) => {
  // Stoping condition
  if (number <= 10) {
    // Recursive call
    countToTenRecursion(number + 1);
  }
};

// Iterative in Counter
const countToTenIterative = (number) => {
  while (number <= 10) {
    console.log(number);
    number++;
  }
};
countToTenIterative(number);

// Recursion in Fibonacci
const fibonacciRecursion = (num, array = [0, 1]) => {
  if (num <= 2) {
    return array;
  } else {
    const [nextToLast, last] = array.slice(-2);
    return fibonacciRecursion(num - 1, [...array, nextToLast + last]);
  }
};

// Iterative in Fibonacci
const fibonacciIterative = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  }
  return array;
};

console.log(fibonacciRecursion(12));
console.log(fibonacciIterative(12));
