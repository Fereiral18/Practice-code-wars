// Ejercicio 4:
// Planteamiento: Escribe una función que reciba una cadena y devuelva la misma 
// cadena pero con el primer y último carácter intercambiados utilizando charAt().

// Entrada:
let str = "programacion";
// Salida Esperada:
// "nrogramaciop"

const algoritms = (str) => {
return `${str.charAt(str.length - 1)}${str.slice(1, - 1)}${str.charAt()}`
}

console.log(algoritms(str));
