//Recursividad
let cuentaAtras = (numero) => {
  //base case
  if (numero === 0) {
    return;
  }
  console.log(numero);
  return cuentaAtras(numero - 1);
};
console.log(cuentaAtras(4));
