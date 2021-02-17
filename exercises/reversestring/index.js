// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Option 1 - Python equivalent
// def reverse(string):
//     return string[::-1]

// Option 1 - Javascript
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// Option 2 - Python equivalent
// def reverse(string):
//     rev = ''
//     for char in string:
//         rev = char + rev
//     return rev

// Option 2 - Javascript
// function reverse(str) {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed; 
//     }
//     return reversed;
// }

// Option 3 - Javascript
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('hello');

module.exports = reverse;
