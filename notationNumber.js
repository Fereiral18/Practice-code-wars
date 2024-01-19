const notationNumbers = (num) =>{
let stringsOfNumbers = num.toString()
let indices = [...stringsOfNumbers].findIndex((item)=> item > 0)
let conditionals = num < 0 ? stringsOfNumbers.split('').slice(0,-2).join('') : indices < 3 ? stringsOfNumbers : indices < 6 ? stringsOfNumbers.slice(0,1) : "hola"

return conditionals
}
console.log(notationNumbers(-4000));
