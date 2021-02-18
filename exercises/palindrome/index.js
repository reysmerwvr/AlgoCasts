// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Option 1 - Javascript equivalent
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return reversed === str
// }

// Option 1 - Python equivalent
// def palindrome(string):
//     """

//     :type string: str
//     """
//     from re import sub
//     s = sub('[\W_]', '', string.lower())
//     return s == s[::-1]

function palindrome(str) {
    return str.split('').every((char, index) => {
        return char === str[str.length - index - 1];
    });
}

module.exports = palindrome;
