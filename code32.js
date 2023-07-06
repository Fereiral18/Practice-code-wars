// Dada una cadena de dígitos, debe reemplazar cualquier dígito debajo de 5 con '0' y cualquier dígito 5 y superior con '1'. Devuelve la cadena resultante.

// Nota: la entrada nunca será una cadena vacía

const fakeBin = (x) => {
  let arr = x.split("");
  return arr.map((item) => (item >= 5 ? 1 : 0)).join("");
};
console.log(fakeBin("45385593107843568"));
