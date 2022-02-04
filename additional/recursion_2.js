/**
 * Recursion - any situation where you do
 * something, and depending on the results,
 * you might do it again. In programming
 * recursion occurs when a function calls
 * itself. Any iterator function can be
 * recursive instead
 */

// Interator function
let number = 1;
const countToTen = (number) => {
  // Recursion approach
  if (number <= 10) {
    // Uncomment to check
    // console.log(number);
    countToTen(number + 1);
  }
  // Iterative approach
  // while (number <= 10) {
  //   console.log(number);
  //   number++;
  // }
};

countToTen(number);

// Reasons to use
// 1) Less code
// 2) Elegant code
// 3) Increased readability

// Fibonacci (no recursion)
const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  }
  return array;
};

// console.log(fibonacci(12));

// Fibonacci (recursion)
const fib = (num, array = [0, 1]) => {
  if (num <= 2) {
    return array;
  } else {
    const [nextToLast, last] = array.slice(-2);
    return fib(num - 1, [...array, nextToLast + last]);
  }
};
