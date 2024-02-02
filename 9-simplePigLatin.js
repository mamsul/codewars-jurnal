/**
 * 02 Feb 2024
 * Kata Training
 * 5 kyu: Simple Pig Latin
 *
 * Move the first letter of each word to the end of it, then add "ay" 
 * to the end of the word. Leave punctuation marks untouched.
 * 
 * Example:
 *   pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 *   pigIt('Hello world !');     // elloHay orldway !
 */

/**
 *
 * CODE EXPLANATION:
 *
 */

const pigIt = (str) =>
  str
    .split(" ")
    .map((el) => (el.match(/[a-zA-z0-9]/) ? el.slice(1) + el[0] + "ay" : el))
    .join(" ");

console.log(pigIt("Pig latin is cool !"));
