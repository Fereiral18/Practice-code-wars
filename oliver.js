/* Planteamiento:
Supongamos que tienes dos arreglos de objetos, cada uno representando datos relacionados.
Queremos combinar estos dos arreglos en una sola estructura utilizando reduce, asegurándonos
de eliminar duplicados en función de un campo clave en los objetos.*/
const array1 = [
  { id: 1, nombre: 'Juan', edad: 25 },
  { id: 2, nombre: 'María', edad: 30 },
  { id: 3, nombre: 'Luis', edad: 28 }
];

const array2 = [
  { id: 3, ciudad: 'Nueva York' },
  { id: 4, ciudad: 'Los Ángeles' },
  { id: 1, ciudad: 'San Francisco' }
];

const combArr = (arr1, arr2) =>{
  return [...arr1, ...arr2].reduce((acc, curr)=> {
     const objComb = acc.find((item)=> item.id === curr.id)
     objComb ? Object.assign(objComb, curr) : acc.push(curr) 
    return acc
  },[])
  
}

console.log(combArr(array1, array2));

//   Salida:
// [
//   { id: 1, nombre: 'Juan', edad: 25, ciudad: 'San Francisco' },
//   { id: 2, nombre: 'María', edad: 30 },
//   { id: 3, nombre: 'Luis', edad: 28, ciudad: 'Nueva York' },
//   { id: 4, ciudad: 'Los Ángeles' }
// ]


// Salida:
// [
//   { id: 1, nombre: 'Juan', edad: 25, ciudad: 'San Francisco' },
//   { id: 2, nombre: 'María', edad: 30 },
//   { id: 3, nombre: 'Luis', edad: 28, ciudad: 'Nueva York' },
//   { id: 4, ciudad: 'Los Ángeles' }
// ] 
