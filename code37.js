// Ejercicio 4:
// Planteamiento: Escribe una función que reciba una cadena y dos índices, 
// y devuelva la subcadena entre esos dos índices utilizando el método at.
// Entrada:
let str = "JavaScript";
let start = 2;
let end = 6;
// Salida Esperada:
// vaScr

const subStrings = (str, start, end) =>{

    return str.slice(start, end + 1)
}

console.log(subStrings(str,start,end));
