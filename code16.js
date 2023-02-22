// Agrupación de objetos: Dado un array de objetos con una propiedad común, agrupa los objetos por esa propiedad.
// Entrada:
// yamlCopy code
const arr = [
  { name: "Juan", age: 21 },
  { name: "María", age: 18 },
  { name: "Pedro", age: 21 },
  { name: "Lucía", age: 18 },
  { name: "Jorge", age: 20 },
];
const propiedad = "age";

const agesAndNames = arr.reduce((prev, {age, name})=>{ prev[age] ? prev[age] = [{...arr.find((item)=> item.age == age ) }, {name, age}] : prev[age] =  [{...arr.find((item)=> item.age == age)}]
    return prev
}, {})

console.log(agesAndNames);

// Salida:
// cssCopy code
// {
//   18: [{ name: "María", age: 18 }, { name: "Lucía", age: 18 }],
//   20: [{ name: "Jorge", age: 20 }],
//   21: [{ name: "Juan", age: 21 }, { name: "Pedro", age: 21 }],
// }