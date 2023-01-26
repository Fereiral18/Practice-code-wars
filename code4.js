//Su tarea es escribir una función, smartSum, que devuelva la suma de un número arbitrario de argumentos. Pero tenga cuidado, algunos de sus argumentos pueden ser matrices de números o matrices anidadas.

const smartSum = (...arr) =>{

return arr.flat(2).reduce((acc,prev)=>{
    return acc + prev
})
}

console.log(smartSum(1,2,[[3,4],5],6));

