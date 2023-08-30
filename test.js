const replaceNumberRange = (arr) => {
  return arr.map((item) => (item >= 10 && item <= 15 ? "premio" : item));
};
console.log(
  replaceNumberRange([6, 7, 8, 9, 10, 12, 13, 15, 14, 16, 18, 20, 21])
);

const lettersPosition = (arr) => {
  return arr.filter((item, indx) => {
    return item.includes("a");
  });
};
console.log(lettersPosition(["apple", "banana", "avocado", "grape"]));
