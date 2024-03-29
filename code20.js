//Contador de numeros romanos

const countNumbersOfRomans = (rom) => {
  const roman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let sum = 0 - 1;
  for (let i = 0; i < rom.length; i++) {
    if (roman[rom[i] + rom[i + 1]]) {
      sum += roman[rom[i] + rom[i + 1]];
      i++;
    } else {
      sum += roman[rom[i]];
    }
  }

  let arr = [];
  for (let i = 0; i <= sum; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(countNumbersOfRomans("IV"));
