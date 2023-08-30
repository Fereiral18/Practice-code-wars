// Dado un array de correos electrónicos

// Retornar un obj por cada usuario con las propiedades nombre ,correo y clave

// Nota el nombre debe ser  extraido de cada correo y la clave  es la longitud de el nombre multiplicada por el numero en el correo

//  si el correo no tiene numro solo coloca la longitud

const user = (arr) => {
  return arr.map(function (item) {
    return {
      nombre:
        item != "Francisco@gmail.com"
          ? item.replace(
              /[0-9]+@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}/g,
              ""
            )
          : item.replace(
              /@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}/g,
              ""
            ),
      correo: item,
      clave:
        item != "Francisco@gmail.com"
          ? parseInt(item.replace(/[^0-9]/g, "")) *
            item.replace(
              /[0-9]+@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}/g,
              ""
            ).length
          : item.replace(
              /@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}/g,
              ""
            ).length,
    };
  });
};

console.log(
  user([
    "Kenier22@gmail.com",
    "Josué32@gmail.com",
    "oliver47@gmail.com",
    "Francisco@gmail.com",
  ])
);
