// Ejercicio 3:
// Planteamiento: Implementa una función que tome un array de objetos y un índice, 
// y devuelva el valor de la propiedad 'name' del objeto en ese índice utilizando el método at.
// Entrada:
let arrayOfObjects = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
];
let index = 1;
// Salida Esperada:
// Bob

const indexObject = (arr) =>arr.at(index).name



console.log("Resultado:", indexObject(arrayOfObjects));
