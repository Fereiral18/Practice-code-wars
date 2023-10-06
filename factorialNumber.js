const factorialNumber = (num) =>{
    let generatorOfNumbers = Array.from({length: num}, (v,i)=> i + 1)
return generatorOfNumbers.reduce((acc, prev)=> acc * prev)
}
console.log(factorialNumber(4));
