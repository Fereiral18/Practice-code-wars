//devolver hello, my love en caso que el nombre sea jhonny de lo contrario devolver hello y el 'name'

const greet = (name) => {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else return "Hello, " + name + "!";
};

console.log(greet("Johnny"));
