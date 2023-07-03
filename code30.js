const arr = (int, limit) => {
  let result = [];

  for (let i = int; i <= limit; i += int) result.push(i);

  return result;
};
console.log(arr(5, 25));
//[5,10,15,20,25]
