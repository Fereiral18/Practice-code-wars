//Dado un número entero, determine si es un número cuadrado :

const isSquare = (n) =>
{
   let result = Math.sqrt(n) 
   return result % 1 === 0 
}

console.log(isSquare(25))