const numbersOfPrimorial = (num) =>{
let primesNumbers = num * 4
let resultPrimesNumbers = Array.from({ length: primesNumbers}, (_, i) => i + 2 )
let indices = resultPrimesNumbers.map((item, indice)=> indice + 2)
indices.forEach(x => (resultPrimesNumbers = resultPrimesNumbers.filter(y => y % x !== 0 || y === x)) 

);


let primorialsNumbers = resultPrimesNumbers.slice(0, num)

return primorialsNumbers.reduce((prev, acc)=> prev * acc)
}

console.log(numbersOfPrimorial(3));

//   Test.assertEquals(numPrimorial(3),30);
//   Test.assertEquals(numPrimorial(4),210);
//   Test.assertEquals(numPrimorial(5),2310);
//   Test.assertEquals(numPrimorial(8),9699690);
//   Test.assertEquals(numPrimorial(9),223092870);
