//Crear una funcion de flecha que reciba un array de numeros, convertir a array de strings y otro a numeros.

const invertedNumbers = (arr) =>
  [...arr].map((item) => item.toString()).sort((a, b) => a - b);

console.time();
console.log(
  "Resultado:",
  invertedNumbers([5, 58, 42, 37, 1, 5, 6, 10, 1, 8, 11, 22, 10, 5, 2])
);
