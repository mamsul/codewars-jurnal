/**
 * 07 Feb 2024
 * Kata Training
 * 5 kyu: Sum of Pairs
 *
 Given a list of integers and a single sum value, return the first two values
 (parse from the left please) in order of appearance that add up to form the
 sum.If there are two or more pairs with the required sum, the pair whose
 second element has the smallest index is the solution.

 Example:
  sum_pairs([11, 3, 7, 5],         10)
  #              ^--^      3 + 7 = 10
  == [3, 7]
  */

/**
 *
 * CODE EXPLANATION:
 *
 */

function sumPairs(ints, s) {
  let smallestIdx = ints.length;
  let sumData = [];

  for (let i = 0; i < ints.length - 1; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      const el1 = ints[i];
      const el2 = ints[j];

      console.log(el1, "+", el2);

      if (el1 + el2 === s) {
        sumData.push([el1, el2]);
        if (j < smallestIdx) smallestIdx = j;
        break; // Stop the inner loop since we found a pair
      }
    }
  }

  return sumData.find((el) => el[1] === ints[smallestIdx]);
}

function sumPairsV2(ints, s) {
  let seen = new Set();
  let sumData = [];

  for (let i = 0; i < ints.length; i++) {
    const complement = s - ints[i];
    if (seen.has(complement)) {
      sumData.push([complement, ints[i]]);
      break; // Stop the loop since we found a pair
    }
    seen.add(ints[i]);
  }

  return sumData.length > 0 ? sumData[0] : null;
}

// console.log(sumPairsV2([10, 5, 2, 3, 7, 5], 10));
// console.log(sumPairs2([5, 9, 13, -3], 10));
// console.log(sumPairs2([1, 4, 8, 7, 3, 15], 8));
// console.log(sumPairs2([0, 2, 0], 0));
