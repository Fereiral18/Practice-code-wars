const myFunction = (obj) => {
  if (obj.a) return obj["a"]["b"];
  if (obj.b) return obj.a;
};

console.log(myFunction({ a: 1 })); //undefined
console.log(myFunction({ a: { b: { c: 3 } } })); //{c:3}
console.log(myFunction({ b: { a: 1 } })); //undefined
console.log(myFunction({ a: { b: 2 } })); //2
