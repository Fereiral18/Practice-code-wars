// Dada una cadena en minúscula que solo tiene caracteres alfabéticos y sin espacios, devuelve el valor más alto de subcadenas consonantes. Las consonantes son cualquier letra del alfabeto excepto "aeiou".

const letterValuesMax = (str) => {
  let deleteVowels = str.split(/[aeiou]/g).filter((item) => item !== "");
  let numbers = deleteVowels.map((item) =>
    [...item]
      .map((letter) => letter.charCodeAt() - 96)
      .reduce((prev, currentValue) => prev + currentValue)
  );
  return Math.max(...numbers);
};

console.log(letterValuesMax("catchphrase"));
