/**
 * 25 Jan 2024
 * Kata Training
 * 7 kyu: Disemvowel Trolls
 * Takes a string and return a new string with all vowels removed.
 */

/**
 *
 * CODE EXPLANATION:
 *  1. Make str to lower case => toLowerCase()
 *  2. Make str to be an array => split(')
 *  3. Loop with filtering an array of str => filter()
 *  4. Filter elemen of str array with "aiueo" or vowels => includes()
 *  5. Find elemen from str array that are not includes to a vowels.
 *  6. Then join them into string again.
 *
 */

const disemvowel = (str) =>
  str
    .split("")
    .filter((el) => !"aAiIuUeEoO".includes(el))
    .join("");

console.log(disemvowel("This website is for losers LOL!")); // Ths wbst s fr lsrs LL!
