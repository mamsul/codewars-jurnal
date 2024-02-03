/**
 * 03 Feb 2024
 * Kata Training
 * 5 kyu: Moving Zeros To The End
 *
 * Write an algorithm that takes an array and moves all of 
 * the zeros to the end, preserving the order of the 
 * other elements.
 * 
 * Example:
 *   moveZeros([false,1,0,1,2,0,1,3,"a"])
 *   returns[false,1,1,2,1,3,"a",0,0]
 */

/**
 *
 * CODE EXPLANATION:
 *
 */

function moveZeros(arr) {
  const zero = arr.filter((el) => el === 0);
  const notZero = arr.filter((el) => el !== 0);

  return [...notZero, ...zero];
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
