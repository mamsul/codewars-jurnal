
/**
 * 
 * 8 Kyu
 * Date: 24 Jan 2024
 */

const grow = (arr) => arr.reduce((acc, currentVal) => currentVal * acc, 1);

console.log(grow([1, 2, 3])); //6
