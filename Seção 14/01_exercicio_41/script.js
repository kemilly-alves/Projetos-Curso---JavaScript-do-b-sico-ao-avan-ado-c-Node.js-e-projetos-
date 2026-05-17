const validarMaiusc = /[A-Z]/;

console.log(validarMaiusc.test("123456789")); // false
console.log(validarMaiusc.test("teste")); // false
console.log(validarMaiusc.test("TESTE")); // true
