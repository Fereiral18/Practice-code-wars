// Un cuadrado latino es una matriz n × n rellena con los números enteros del 1 al n, cada uno de los cuales aparece una vez en cada fila y columna.

const makeLatinSquare = (n) => {
  let arrayTotal = [];

  for (let i = 0; i <= n; i++) {
    let array = [];
    for (let j = 0; j <= n; j++) {}
    array.push(arrayTotal);
    i++;
  }
  return arrayTotal;
};

console.log(makeLatinSquare(7));
