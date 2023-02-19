// Supongamos que tenemos un array de objetos que representan productos en un sitio web de compras. Cada objeto tiene las siguientes propiedades: name (nombre del producto), price (precio del producto), category (categoría del producto) y stock (cantidad de unidades en stock). Queremos implementar una función que filtre los productos por categoría y precio, y que devuelva un nuevo array con los productos que cumplen con los criterios.

const products = [
  { name: "Camiseta", price: 20, category: "ropa", stock: 10 },
  { name: "Zapatillas", price: 50, category: "calzado", stock: 5 },
  { name: "Pantalón", price: 30, category: "ropa", stock: 7 },
  { name: "Reloj", price: 100, category: "accesorios", stock: 3 },
  { name: "Gorra", price: 15, category: "accesorios", stock: 12 },
];

const categoryAndPrices = (arr, category, minPrice, maxPrice) => {
  return arr.filter(
    ({ category, price }) =>
      category === category && price <= maxPrice && price >= minPrice
  );
};
console.log(categoryAndPrices(products, "ropa", 25, 35));

//Ejemplo de Entrada: filterProducts(products, 'ropa', 25, 35)
//Ejempĺo de salida : [{ name: 'Pantalón', price: 30, category: 'ropa', stock: 7 }]
