/**
 * 05 Feb 2024
 * Kata Training
 * 5 kyu: The Hashtag Generator
 *
 * The marketing team is spending way too much time typing in hashtags.
 * Let's help them with our own Hashtag Generator!
 *
 * Here's the deal:
 *   It must start with a hashtag (#).
 *   All words must have their first letter capitalized.
 *   If the final result is longer than 140 chars it must return false.
 *   If the input or the result is an empty string it must return false.
 */

/**
 *
 * CODE EXPLANATION:
 *
 */

function generateHashtag(str) {
  if (str.trim().length < 1) return false;

  const camelcaseStr = str
    .split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join("")
    .trim();

  const hashtagResult = `#${camelcaseStr}`;

  return hashtagResult.length > 139 ? false : hashtagResult;
}
