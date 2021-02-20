// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Option 1 - Javascript
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#'
//             } else {
//                 stair += ' '
//             }
//         }
//         console.log(stair);
//     }
// }


// Option 2 - Javascript (Recursive)
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;


// function arrayLista(arr) {
//   const lista = {}
//   if(arr.length <= 0) {
//     return lista;
//   } else if(arr.length === 1) {
//     lista.valor = arr.shift();
//     lista.resto = null;
//     return lista;
//   } else {
//     lista.valor = arr.shift();
//     lista.resto = arrayLista(arr); 
//   }
//   return lista;
// }

// console.log(arrayLista([1, 2, 3]));