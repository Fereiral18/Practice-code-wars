// Un Número Narcisista (o Número de Armstrong) es un número positivo que es la suma de sus propios dígitos, cada uno elevado a la potencia del número de dígitos en una base dada. En este Kata, nos limitaremos al decimal (base 10).

const numberNarcicists = (value) => {
  let array = String(value)
    .split("")
    .map((item) => Number(item));
  let elevacion = String(value)
    .split("")
    .map((item) => Number(item)).length;
  let resultElevation = array.map((item) => Math.pow(item, elevacion));

  return resultElevation.reduce((acc, prev) => acc + prev) === value;
};

console.time();
console.log("Resultado:", numberNarcicists(153));
