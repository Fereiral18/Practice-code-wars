// Nuestro objetivo es determinar si una cadena determinada es un palíndromo válido o no.

const palindrome = (string) =>{
    let specialCharacter = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return [...specialCharacter].reverse().join('') === specialCharacter
}

console.log(palindrome("A man, a plan, a canal - Panama"));
