const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validarMarca.test("Marca: Nike")); // true
console.log(validarMarca.test("Marca: asd")); // false
console.log(validarMarca.test("Marca: ")); // false
console.log(validarMarca.test("Nike")); // false
console.log(validarMarca.test("123132")); // false