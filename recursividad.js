//Recursividad

function sum(nums) {
  if (nums < 1) {
    return -1;
  } else {
    const [...nums] = nums;
    return nums;
  }
}

console.log(sum(10));
