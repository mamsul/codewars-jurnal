/**
27 Feb 2024
Kata Training
5 kyu: Calculating with Functions

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

    seven(times(five())); // must return 35
    four(plus(nine())); // must return 13
    eight(minus(three())); // must return 5
    six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:

Test Case:
    seven(times    (five ())), 35)
    four (plus     (nine ())), 13)
    eight(minus    (three())),  5)
    six  (dividedBy(two  ())),  3)
 */

// ========================================================|
// ====================== SOLUTION 1 ======================|
// ========================================================|

function zero() {}
function one(prop) {
  if (prop) return calc(1, prop[0], prop[1]);
  return 1;
}
function two(prop) {
  if (prop) return calc(2, prop[0], prop[1]);
  return 2;
}
function three(prop) {
  if (prop) return calc(3, prop[0], prop[1]);
  return 3;
}
function four(prop) {
  if (prop) return calc(4, prop[0], prop[1]);
  return 4;
}
function five(prop) {
  if (prop) return calc(5, prop[0], prop[1]);
  return 5;
}
function six(prop) {
  if (prop) return calc(6, prop[0], prop[1]);
  return 6;
}
function seven(prop) {
  console.log(prop);
  if (prop) return calc(7, prop[0], prop[1]);
  return 7;
}
function eight(prop) {
  if (prop) return calc(8, prop[0], prop[1]);
  return 8;
}
function nine(prop) {
  if (prop) return calc(9, prop[0], prop[1]);
  return 9;
}

function plus(num) {
  return ["+", num];
}
function minus(num) {
  return ["-", num];
}
function times(num) {
  return ["*", num];
}
function dividedBy(num) {
  return ["/", num];
}

function calc(num1, sign, num2) {
  switch (sign) {
    case "+":
      return Math.floor(num1 + num2);
    case "-":
      return Math.floor(num1 - num2);
    case "*":
      return Math.floor(num1 * num2);
    case "/":
      return Math.floor(num1 / num2);
  }
}

// ========================================================|
// ====================== SOLUTION 2 ======================|
// ========================================================|

const zero = (a) => (a ? a(0) : 0);
const one = (a) => (a ? a(1) : 1);
const two = (a) => (a ? a(2) : 2);
const three = (a) => (a ? a(3) : 3);
const four = (a) => (a ? a(4) : 4);
const five = (a) => (a ? a(5) : 5);
const six = (a) => (a ? a(6) : 6);
const seven = (a) => (a ? a(7) : 7);
const eight = (a) => (a ? a(8) : 8);
const nine = (a) => (a ? a(9) : 9);

const plus = (a) => (b) => a + b;
const minus = (a) => (b) => b - a;
const dividedBy = (a) => (b) => Math.floor(b / a);
const times = (a) => (b) => a * b;

// console.log(one(plus(five())));
// console.log(seven(times(five())));
// console.log(seven(minus(five())));
// console.log(eight(dividedBy(two())));
// console.log(six(dividedBy(eight())));
