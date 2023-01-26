//Cuantos dias tarda en caracol en alcanzar el numero de columna, si este por cada day sube x posiciones y por nigth desciendo y posiciones


const snail=(colum, day, nigth)=>{  
  let days = 1  
  for (let i = day; i < colum; i = i + day){
    i = i - nigth
    days++
  }
  return days;
  }
console.log(snail(3, 2, 1))
//5
  




 

