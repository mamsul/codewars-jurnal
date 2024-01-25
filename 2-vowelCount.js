/**
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case letters and/or spaces.
 */

/**
 * 
 * 7 Kyu
 * Date: 24 Jan 2024
 */

const getCount = (str) =>
  str
    .toLowerCase()
    .split("")
    .filter((el) => ["a", "i", "u", "e", "o"].includes(el)).length;

console.log(getCount("hello")); //2
