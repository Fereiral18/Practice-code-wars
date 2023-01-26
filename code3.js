//Complete la solución para que invierta todas las palabras dentro de la cadena pasada.
// Las palabras están separadas por exactamente un espacio y no hay espacios iniciales ni finales.

function reverseWords(str){
    return str.split(' ').reverse().join(' ')
  }

console.log(reverseWords("hello world!"));
