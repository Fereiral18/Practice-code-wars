//Dado un array, devolver que palabras son palindrome.

const palindromeValidator = (arr) => {
  return arr.map((item) => item.split("").reverse().join("") === item);
};
console.log(palindromeValidator(["arepeta", "oso", "maracaibo", "agua"]));

//dado un array, devolver solo palabras que son palindromos en el array

const palindrome = (arr) => {
  return arr.filter((item) => item.split("").reverse().join("") === item);
};
console.log(palindrome(["arepera", "oso", "maracaibo", "agua"]));
