const withoutDuplicatesAndA = (arr) => {
    const unicos = [];
    arr.forEach( (elemento) => {
      if (!unicos.includes(elemento)) {
        unicos.push(elemento);
      }
    });
    
    return unicos;
    };
console.log(withoutDuplicatesAndA(["m","a","r","i","a","a", "m","m"]));