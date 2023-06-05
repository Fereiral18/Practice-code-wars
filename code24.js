//Escriba una función que verifique si CUALQUIER permutación de los caracteres de la cadena de entrada es un palíndromo. Puntos de bonificación por una solución que sea eficiente y/o que use solo funciones de lenguaje integradas. Considérese brillante si puede encontrar una versión que no use ninguna función en absoluto.

const permuteAPalindrome = (input) => {
  let n = input.length;
  let impares = 0;
  let limS = "z".charCodeAt(0);
  let limI = "a".charCodeAt(0);
  let tablaHash = new Array(limS - limI);
  input = input.toLowerCase();
  tablaHash.fill(0);
  input = input.replace(" ", "");

  for (let x = 0; x < input.length; x++) {
    tablaHash[input.charAt(x).charCodeAt(0) - limI]++;
  }

  for (let i = 0; i < tablaHash.length; i++) {
    if (n % 2 == 0) {
      if (tablaHash[i] % 2 != 0) {
        return false;
      }
    } else {
      if (tablaHash[i] % 2 != 0) {
        impares++;
        if (impares > 1) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(permuteAPalindrome("baa"));
