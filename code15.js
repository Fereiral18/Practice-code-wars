// Suma de múltiplos: Dado un array de números y un número multiplicador, devuelve la suma de todos los números que sean múltiplos de ese multiplicador.
// Entrada:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplicador = 3;

const multiplos = (arr, multiplicador) => arr.filter((multiplos)=> multiplos % multiplicador == 0).reduce((prev, current)=> prev + current)


console.log(multiplos(arr, multiplicador));

// Salida:
// Copy code
// 18