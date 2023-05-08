// La idea principal es contar todos los caracteres que aparecen en una cadena. Si tiene una cadena como aba, entonces el resultado debería ser {'a': 2, 'b': 1}.

// ¿Qué pasa si la cadena está vacía? Entonces el resultado debería ser un objeto literal vacío, {}.

const count = (string) => {
  r = {};
  string.split("").forEach((c) => (r[c] = (r[c] || 0) + 1));
  return r;
};

console.log(count("aba"));
