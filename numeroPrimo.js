//2.-Comprobar si un numero es primo:
const arrPrime = (numero) => {
    return numero.filter((numero) => {
        console.log(numero);
        
        for (let i = 2; i < numero; i++) {
           
            if (numero % i === 0) {
            return false;
            }
        }

        return true;
        }
    );
    
}
console.log(7 % 2 == 0);
console.log(arrPrime([2,3,6,8,7,9,10,11,12,15,16,18,23]));

// const primeNumbers = (num) => {
    
//     let elements = Array.from({length: num}, (v,i)=> i + 2)
//     let copy = [...elements]
//     copy.forEach(x=> elements = elements.filter((item)=>item % x !==0 || item == x))
// return elements
// }
// console.log(primeNumbers(15));

//num % 2 !== 0 && num % 3 !== 0 
// const primeNumberss = (number) => {

//     if(number<=1) return false

//     for(let i=2; i <= 3; i++){

//         console.log(Math.sqrt(number)) // raiz de 2 = 1.41
//         console.log(i)

//         if(number % i === 0) return false
//     }

// return true
// }

// console.log(9 % 3 === 0);

 
// console.log(primeNumberss(11))

//funcion declarativa: Por que declaramos su nombre y parametros
// const ejemplo = (a,b,c) => {

// }
// //La funcion por expresion: Es el almacenamiento de una funcion dentro de una variable
// //se utiliza comunmente, debida a que puede ser reutilizable.
// let sum = 
// (a,b) => a + b

// console.log(sum(2,3))

// console.log(sum("hola", " como estas"));

// //Esta función puede ser anónima; no tiene por qué tener un nombre. Por ejemplo, la función square se podría haber definido como:
// function loQueSea (parameter1) {
//  return parameter1
//    }
// console.log(loQueSea('hola'));


// const loQueseaa = () => "hola"
//    console.log(loQueseaa());
    
// //anonima
//  let factorial = 
//   (n) => {
//     return n < 2 ? 1 : n * (n - 1);
//   };


//   console.log(factorial(3))
//   console.log(factorial(50));

//   //funcion por constructor

//   const greetings = new Function("return 'Hola';")
//   console.log(greetings ()); // 'Hola'

// Generar el abecedario utilizando Array.from haciendo uso de que se ordena como secuencia
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

console.log(range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
String.fromCharCode(x)));

// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]