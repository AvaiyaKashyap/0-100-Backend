/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  // if (str.length === 0)
  //     return false;
 

  str = str.toLowerCase();
  let start = 0;
  let end = str.length - 1;
  let symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";
  while (start <= end) {


      if (symbols.includes(str[start]) || str[start] === " " || str[end] === ' ') {
          start++;
          continue;
      }
      if (symbols.includes(str[end]) || str[end] === " " || str[end] === ' ') {
          end--;
          continue;
      }


      if (str[start] !== str[end]) {
          return false;
      }

      start++;
      end--;

  }


  return true;
}

module.exports = isPalindrome;
