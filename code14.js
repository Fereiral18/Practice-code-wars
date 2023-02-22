const fruits = ['apple', 'banana', 'apple', 'cherry', 'cherry', 'cherry'];

const frutas = (arr) => arr.reduce((prev, current)=> (prev[current] ? prev[current] += 1 : prev[current] = 1, prev
),{})

console.log(frutas(fruits)); 
// Output: { apple: 2, banana: 1, cherry: 3 }

