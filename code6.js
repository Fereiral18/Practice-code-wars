// Dada una cadena, devuelve el número mínimo de inversiones de paréntesis necesarias para hacer un paréntesis equilibrado.

const solve = (s) =>{
    if (s.length % 2 != 0)
    return -1;
  let res = 0, k = 0;
  for (let c of s) {
    if (c == '(')
      k++;
    else if (k > 0)
      k--;
    else
      k++, res++
  }
  return res + k / 2;
}

console.log(solve("())((("));