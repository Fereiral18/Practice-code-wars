const arr = (int, limit) => {
  let result = [];

  for (let i = int; i <= limit; i += int) return result.push(i);
};
console.log(arr(5, 25));
//[5,10,15,20,25]
