//Una secuencia collatz, que comienza con un número entero positivo n , se encuentra aplicando repetidamente la siguiente función a n hasta que n == 1:

const collatz = (n) => {
  if (n === 1) return "1";
  return n + "->" + collatz(n % 2 === 0 ? n / 2 : 3 * n + 1);
};

console.log(collatz(3));
