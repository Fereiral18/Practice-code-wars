// Ejercicio 3:
// Planteamiento: Crea una función que tome una cadena y devuelva una nueva cadena 
// con los caracteres en posiciones impares utilizando el método charAt().

// Entrada:
let str = "abcdefgh";
// Salida Esperada:
// "bdfh"

const imparesStrings = (str) => {
let acc = []
for(let i = 0; i < str.length; i++){
    if(i % 2 == 1){
        let result = str.charAt(i) 
        acc.push(result)
    }
  
}
return acc.join("")
}
console.log(imparesStrings(str));
