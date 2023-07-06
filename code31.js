const positiveSum = (arr) => {
  let result = arr.filter((item) => item > 0);
  if (result.length > 0) {
    return result.reduce((acc, prev) => acc + prev);
  } else return 0;
};

console.log(positiveSum([-1, -2, -3, -4, -5]));
