// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if (vowels.indexOf(char) != -1) {
//       count += 1;
//     }
//   }
//   return count;
// }

// Option 1 - Javascript
// function vowels(str) {
//   let count = 0;
//   // const checker = 'aeiou';
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//   for (let char of str.toLowerCase()) {
//     if(checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// Option 2 - Javascript
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return (matches) ? matches.length : 0;
}

module.exports = vowels;
