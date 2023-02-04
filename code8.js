// Si enumeramos todos los números naturales debajo de 10 que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.

// Termina la solución para que devuelva la suma de todos los múltiplos de 3 o 5 por debajo del número pasado. Además, si el número es negativo, devuelve 0 (para los idiomas que los tienen).

// Nota: si el número es un múltiplo de 3 y 5, solo cuéntelo una vez.

const multiplos = (number) => number > 0 ? Array.from({length: number}, (v, i) => i).filter((item)=> item % 3 == 0 || item % 5 == 0).reduce((acc,prev)=> acc + prev) : 0


console.log(multiplos(10));
