//Debe crear una función, helloWorldque devolverá la cadena Hello, World!sin usar cadenas sin formato. Esto incluye comillas, comillas dobles y cadenas de plantilla. Sin embargo, puede usar el Stringconstructor y cualquier función relacionada.

const helloWorld = () => {
  return String.fromCharCode(
    72,
    101,
    108,
    108,
    111,
    44,
    32,
    87,
    111,
    114,
    108,
    100,
    33
  );
};

console.log(helloWorld());
