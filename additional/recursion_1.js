/**
 * Recursion - is a programming technique, in which
 * solution to one big problem, depending on a
 * solution of each of sub-problems inside of it.
 * It is usually expressed as a function which
 * calls itself over and over, untill it reaches
 * stoping conditions. It consists of
 * stoping condition and a recursive calls,
 * usually with different arguments which
 * we passed the first time. Good example
 * is a Russian matryoshka.
 */

// Pseudo
function processDollPseudoCode(doll) {
  // 1) Base case (stoping condition)
  if ('we found the piece of chocolate') {
    return 'yum yum';
  } else if ('there are no more dolls') {
    return 'no chocolate here';
  } else {
    // 2) Recursive call to itself
    processDollPseudoCode('the smaller doll');
  }
}

// Actual code
// Factorial
// 4! = 4 * 3 * 2 * 1
function factorial(n) {
  // Base case
  if (n === 1 || n === 0) {
    return 1;
  } else {
    // Recursive call (if base case is skipped)
    return n * factorial(n - 1);
  }
}

/**
 * Path:
 * factorial(4) // 4
 *  4 * factorial(4 - 1) // 3
 *    3 * factorial(3 - 1) // 2
 *      2 * factorial (2 - 1) // 1
 *        return 1
 * 1 * 2 * 3 * 4 = 24
 */

console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
