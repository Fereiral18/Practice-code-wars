// Concatenación de arrays: Dados dos o más arrays, devuelve un único array que contenga todos los elementos de los arrays originales.
// Entrada:

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = [6, 7, 8, 9];


const oneArrays = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3]

console.time();
console.log('Resultado', oneArrays(arr1, arr2, arr3));

