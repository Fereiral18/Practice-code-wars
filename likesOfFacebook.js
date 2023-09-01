// Probablemente conozcas el sistema de "me gusta" de Facebook y otras páginas. Las personas pueden dar "me gusta" a publicaciones de blogs, imágenes u otros elementos. Queremos crear el texto que debería mostrarse junto a dicho elemento.

// Implemente la función que toma una matriz que contiene los nombres de las personas a las que les gusta un artículo. Debe devolver el texto mostrado como se muestra en los ejemplos:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this

const calculatorLikes = (arr) => {
  let longitud = arr.length - 2;
  return arr.length === 0
    ? "no one likes this"
    : arr.length === 1
    ? ` ${arr} likes this`
    : arr.length === 2
    ? `${arr[0]} and ${arr[1]} like this`
    : arr.length === 3
    ? `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
    : arr.length >= 4
    ? `${arr[0]}, ${arr[1]} and ${longitud} others like this`
    : null;
};
console.log(calculatorLikes(["Alex", "Jacob", "Mark", "Max"]));
