const n = (arr) => {
  let total = arr.map((item) => item.length);
  return { ...total };
};
console.log(n(["miami"]));
