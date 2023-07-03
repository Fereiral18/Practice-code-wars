const data = [
  {
    id: 1,
    name: "frances",
    ingredients: {
      harina: 1000,
      azucar: 100,
      sal: 20,
      levadura: 20,
      mantequilla: 40,
      aceite: 20,
      agua: 430,
    },

    peso: 50,
    unidades: 32,
  },
  {
    id: 2,
    name: "holandes",
    ingredients: {
      harina: 1000,
      azucar: 100,
      sal: 20,
      levadura: 20,
      mantequilla: 40,
      aceite: 20,
      agua: 430,
    },
    peso: 45,
    unidades: 35,
  },
  {
    id: 3,
    name: "campesino",
    ingredients: {
      harina: 1000,
      azucar: 100,
      sal: 20,
      levadura: 20,
      mantequilla: 40,
      aceite: 20,
      agua: 430,
    },
    peso: 400,
    unidades: 4,
  },
];
const dataObj = ({ ingredients } = data) => {
  let filter = data
    .filter((item) => item.name == "frances")
    .map((item) => item.ingredients);
  let result = filter.reduce((acc, item) => {
    acc = item;
    return acc;
  }, {});

  const object2 = Object.fromEntries(
    Object.entries(result).map(([key, val]) => [key, val * 2])
  );

  return (data[0].ingredients = object2);
};

console.log(dataObj(data));
