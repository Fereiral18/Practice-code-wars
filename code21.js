//Dado un array, devolver que palabras son palindrome.

const palindromeValidator = (arr) => {
  return arr.map(
    (palabras) => palabras.split("").reverse().join("") === palabras
  );
};
console.log("Resultado 1:");
console.log(palindromeValidator(["arepeta", "oso", "maracaibo", "agua"]));

//dado un array, devolver solo palabras que son palindromos en el array

const palindrome = (arr) => {
  return arr.filter((item) => item.split("").reverse().join("") === item);
};

console.log("Resultado 2:");
console.log(palindrome(["arepera", "oso", "maracaibo", "agua"]));

const palindromo = (str) => {
  return [...str].reverse().join("") === str;
};
console.log("Resultado 3:");
console.log(palindromo("arepera"));
