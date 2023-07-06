const digitize = (n) => {
  let inverted = n.toString().split("").reverse();
  return inverted.map((item) => Number(item));
};

console.log(digitize(35231));
