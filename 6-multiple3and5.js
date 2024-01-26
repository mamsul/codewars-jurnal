/**
 * 26 Jan 2024
 * Kata Training
 * 6 kyu: Multiples of 3 or 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 */

/**
 *
 * CODE EXPLANATION:
 *
 */

function solution1(number) {
  return Array(number)
    .fill()
    .map((_, idx) => idx)
    .reduce((acc, curr) => {
      const isCriteria = curr % 3 === 0 || curr % 5 == 0;
      return acc + (isCriteria ? curr : 0);
    }, 0);
}
function solution2(number) {
  let result = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
    }
  }
  return result;
}

console.log(solution1(10));
