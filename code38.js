// Ejercicio 2:
// Planteamiento: Implementa una función que reciba dos cadenas y un índice, 
// y devuelva una nueva cadena que contenga los caracteres de ambas cadenas en ese índice utilizando charAt().

// Entrada:
let str1 = "Hola";
let str2 = "Mundo";
let index = 2;
// Salida Esperada:
// "lo"

const algoritmoDeMariangely2 = (str1, str2, index) =>{
return `${str1.charAt(index)}${str2.charAt(index)}` 
}

console.log(algoritmoDeMariangely2(str1, str2, index));
