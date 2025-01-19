// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   isPalindrome("abba") === true
//   isPalindrome("abcdefg") === false

// Option 1 - Javascript equivalent
// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return reversed === str
// }

// Option 1 - Python equivalent
// def isPalindrome(string):
//     """

//     :type string: str
//     """
//     from re import sub
//     s = sub('[\W_]', '', string.lower())
//     return s == s[::-1]

// function isPalindrome(str) {
//     return str.split('').every((char, index) => {
//         return char === str[str.length - index - 1];
//     });
// }

function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false; // Return false as soon as a mismatch is found
    }
  }
  return true; // If no mismatches, it's a palindrome
}

module.exports = {
  isPalindrome
}
