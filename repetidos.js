const withoutDuplicatesAndA = (array) => {
    let indicador = array.filter((valor, indice, arreglo) => arreglo.indexOf(valor) !== indice);

    return array.filter((item, indx)=> item !== indicador[0])
};
console.log(withoutDuplicatesAndA(["m","a","r","i","a"]));