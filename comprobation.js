// compara dos arrays y que retorne true si son de los mismo valores

const result = (array1, array2) =>{
    let resultado = array1.length==array2.length && array1.every(function(v,i) { return v === array2[i] } )
    return resultado
  }
  console.log(result([1,2], [1,1]));