/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  if (str.length === 0)
    return 0;

  let count = 0;
  for (let i = 0; i < str.length; i++) {

    let charCount = str[i];

    if (charCount === "a" ||
      charCount === "e" ||
      charCount === "i" ||
      charCount === "o" ||
      charCount === "u" ||
      charCount === "A" ||
      charCount === "E" ||
      charCount === "I" ||
      charCount === "O" ||
      charCount === "U") {

      count++;
    }
  }
  return count;
}

module.exports = countVowels;