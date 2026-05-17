const nomeDaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(nomeDaMarca.test("Marca: Asics")); // true
console.log(nomeDaMarca.test("Marca: Puma")); // true
console.log(nomeDaMarca.test("Marca: teste")); // false
console.log(nomeDaMarca.test("Marca: ")); // false
console.log(nomeDaMarca.test("Adidas")); // false
console.log(nomeDaMarca.test("12345678")); // false


const nomeDaMarcaNike = /\d+Nike\b/;

console.log(nomeDaMarcaNike.test("123456Nike")); // true
console.log(nomeDaMarcaNike.test("teste")); // false
console.log(nomeDaMarcaNike.test("123")); // false
console.log(nomeDaMarcaNike.test(" ")); // false
console.log(nomeDaMarcaNike.test("12345nike")); // false


const nomeDaMarcaAdidas = /\d+Adidas\b/;

console.log(nomeDaMarcaAdidas.test("123456Nike")); // false
console.log(nomeDaMarcaAdidas.test("teste")); // false
console.log(nomeDaMarcaAdidas.test("123")); // false
console.log(nomeDaMarcaAdidas.test(" ")); // false
console.log(nomeDaMarcaAdidas.test("12345nike")); // false
console.log(nomeDaMarcaAdidas.test("123456Adidas")); // true
console.log(nomeDaMarcaAdidas.test("Adidas")); // false
console.log(nomeDaMarcaAdidas.test("testeAdidas")); // false
console.log(nomeDaMarcaAdidas.test("Adidas12345")); // false