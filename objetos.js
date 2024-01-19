// Ejercicio 1: Sumar todos los valores en un array de objetos

// Entrada: [{ valor: 1 }, { valor: 2 }, { valor: 3 }]
// Salida: 6
// let items = [{ valor: 1 }, { valor: 2 }, { valor: 3 }].reduce((acc, curr)=>{
//     return acc + curr.valor
// },0)
// console.log(items);

// Ejercicio 2: Calcular el promedio de edades

// let age = [{ edad: 25 }, { edad: 30 }, { edad: 35 }]

// let average = age.reduce((acc, curr)=>{
    
// return acc + curr.edad / age.length
// },0)
// console.log(average);

// Salida: 30

// Ejercicio 3: Encontrar el objeto con el valor máximo

// let max = [{ valor: 10 }, { valor: 5 }, { valor: 15 }].reduce((acc, curr)=>{
//     return acc.valor > curr.valor ? acc : curr
// })
// console.log(max);

// Salida: { valor: 15 }

// Ejercicio 4: Concatenar propiedades de cadena
// const string = [{ texto: "Hola" }, { texto: "Mundo" }, { texto: "!" }].reduce((acc, curr)=>{
//     return `${acc}${curr.texto}`
// },"")
// console.log(string);

// Salida: "HolaMundo!"


// Ejercicio 5: Contar la frecuencia de palabras

// let indx = [{ texto: "Hola mundo Hola" }, { texto: "Mundo mundo mundo" }]
// const repeat = (obj) => {
// return obj.reduce((acc, curr)=>{
//     curr.texto.split(' ').forEach((element)=> {
//         acc[element] = (acc[element] || 0) + 1
//     })
//     return acc
// },{})
// }
// console.log(repeat(indx));

// Salida: { Hola: 2, mundo: 3, Mundo: 1 }


// Ejercicio 6: Agrupar objetos por una propiedad

// let datos = [
// { categoria: 'A', nombre: 'Objeto 1' }, 
// { categoria: 'B', nombre: 'Objeto 2' },
// { categoria: 'A', nombre: 'Objeto 3' }
// ]

// const process = (obj) =>{
// return obj.reduce((acc, {categoria, ...datos})=>{
//    acc[categoria] ? acc[categoria] = [...acc[categoria],{categoria, ...datos}] :  acc[categoria] = [{categoria,...datos}] 
// return acc  

// },{})
// }
// console.log(process(datos));

// Salida: 
// { 
    // A: [{ categoria: 'A', nombre: 'Objeto 1' }, { categoria: 'A', nombre: 'Objeto 3' }],
//     B: [{ categoria: 'B', nombre: 'Objeto 2' }] 
// }


// Ejercicio 7: Calcular la suma de valores de propiedades anidadas

// let sumPropertys = [{ datos: { valor: 10 } }, { datos: { valor: 5 } }, { datos: { valor: 15 } }]

// const result = (obj) =>{
    
//  return obj.map((item)=> item.datos).reduce((acc, curr)=>{
//     return acc + curr.valor
//  },0)

// }
// console.log(result(sumPropertys));

// Salida: 30


// Ejercicio 8: Encontrar el objeto con propiedades mínimas

// Entrada: [{ x: 10, y: 20 }, { x: 5, y: 15 }, { x: 8, y: 25 }]
// Salida: { x: 5, y: 15 }

// const minPropertys = (obj) =>{
// let min = Math.min(...obj.map((item)=> item.x + item.y))
// let index = obj.map((item)=> (item.x + item.y)).indexOf(min)
// return obj[index] //Otra solucion sin reduce***

// let min = Math.min(...obj.map((item)=> item.x + item.y))
// console.log(min);
// let index = obj.reduce((acc, {x, y})=>{
//     return [acc, x + y].flat(1) 
// },0).indexOf(min)
// return obj[index - 1]
// }

// console.log(minPropertys([{ x: 100, y: 20 }, { x: 55, y: 85 }, { x: 25, y: 20 },{ x: 2, y: 25 },{ x: 0, y: 2 }]));


// Ejercicio 9: Calcular el producto de propiedades numéricas
const miNombre =  { nombreCompleto: { primerNombre: "Tobi", apellido: "Sofela" } }
const bio = {...miNombre}
miNombre.nombreCompleto.primerNombre = "carlos"
console.log(miNombre);
console.log(bio);



// let productos = [{ numero: 2 }, { numero: 3 }, { numero: 4 }]
// const calculatorOfProductsNumbers = (obj) => {
//     return obj.map((item)=> item.numero).reduce((acc, curr)=> acc * curr)

// }
// console.log(calculatorOfProductsNumbers(productos));

// Salida: 24


// Ejercicio 10: Filtrar objetos por una propiedad específica

// Entrada: [{ tipo: 'fruta', nombre: 'manzana' }, { tipo: 'vegetal', nombre: 'zanahoria' }, { tipo: 'fruta', nombre: 'plátano' }]
// Salida: [{ tipo: 'fruta', nombre: 'manzana' }, { tipo: 'fruta', nombre: 'plátano' }]