/**
 * 26 Jan 2024
 * Kata Training
 * 7 kyu: Square Every Digit
 *
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
 * For example, if we run 9119 through the function, 811181 will come out,
 * because 92 is 81 and 12 is 1. (81-1-1-81)
 */

/**
 *
 * CODE EXPLANATION:
 *
 */

const squareDigits = (num) => +[...num.toString()].map((e) => e * e).join("");

console.log(squareDigits(991));
