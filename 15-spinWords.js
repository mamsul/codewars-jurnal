/**

22 February 2024
Kata Training
6 kyu: Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns
the same string, but with all words that have five or more letters
reversed (Just like the name of this Kata). Strings passed in
will consist of only letters and spaces. Spaces will be
included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"

 */

function spinWords(string) {
  let newStr = "";

  string.split(" ").map((str) => {
    str.length > 4
      ? (newStr += ` ${str.split("").reverse().join("")}`)
      : (newStr += ` ${str}`);
  });

  return newStr.trim();
}

function spinWordsV2(string) {
  return string
    .split(" ")
    .map((str) => {
      let newStr = "";
      if (str.length > 4) {
        newStr = str.split("").reverse().join("");
      } else {
        newStr = str;
      }
      return newStr;
    })
    .join(" ");
}

console.log(spinWords("Hey fellow warriors"));
