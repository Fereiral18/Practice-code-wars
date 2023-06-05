//Soy nuevo en la codificación y ahora quiero obtener la suma de dos matrices... En realidad, la suma de todos sus elementos. Agradeceré tu ayuda.
//PS Cada matriz incluye solo números enteros. La salida también es un número.

const arrayPlusArray = (arr1, arr2) => {
  return [...arr1, ...arr2].reduce((prev, current) => prev + current);
};
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
