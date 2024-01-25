/**
 * 25 Jan 2024
 * Kata Training
 * 7 kyu: Complementary DNA
 *
 * Example:
 *   "ATTGC" --> "TAACG"
 *   "GTAT" --> "CATA"
 */

/**
 *
 * CODE EXPLANATION:
 *
 */

function dnaStrand(dna) {
  const complement = { A: "T", T: "A", C: "G", G: "C" };
  return dna
    .split("")
    .map((el) => complement[el])
    .join("");
}

console.log(dnaStrand("ATTGC")); // 'TAACG'
