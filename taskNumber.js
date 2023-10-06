const multiplicationTable = (size) =>{
    let generador = Array.from({length: size}, (v,i) => i + 1)
return generador.map((item, indx)=> {
    let indices =  indx + 1
    return Array.from({length: size}, (v,i)=> i + 1).map((elements)=> elements * indices) 
})
}
console.log(multiplicationTable(3));
