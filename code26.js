//Escribe una función que tome una matriz de números (enteros para las pruebas) y un número objetivo. Debería encontrar dos elementos diferentes en la matriz que, cuando se suman, den el valor objetivo. Los índices de estos elementos deben devolverse en una tupla / lista (dependiendo de su idioma) así: (index1, index2).

const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 2, 3], 4));
