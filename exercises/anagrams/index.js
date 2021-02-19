// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution
// function anagrams(stringA, stringB) {
//     const cleanStrA = stringA.replace(/[^\w]/g, "").toLowerCase();
//     const cleanStrB = stringB.replace(/[^\w]/g, "").toLowerCase();
//     const strAMap = {};
//     const strBMap = {};
//     for (let char of cleanStrA) {
//       strAMap[char] = strAMap[char] + 1 || 1;
//     }
//     for (let char of cleanStrB) {
//       strBMap[char] = strBMap[char] + 1 || 1;
//     }
//     const strAMapKeys = Object.keys(strAMap);
//     const strBMapKeys = Object.keys(strBMap);
//     if (strAMapKeys.length !== strBMapKeys.length) {
//       return false;
//     }
//     return strAMapKeys.reduce((acc, key) => {
//       if (acc) {
//         acc.push(strAMap[key] === strBMap[key]);
//       }
//       return acc;
//     }, []).every((element) => element);
// }

// Option 1 - Javascript
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//       return false;
//     }
//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

// Option 2 - Javascript
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '')
        .toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
