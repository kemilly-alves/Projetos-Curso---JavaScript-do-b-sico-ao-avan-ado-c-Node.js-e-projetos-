const umNumero= /\d/; // 1 dígito

console.log("d");
console.log(umNumero.test("1518")); // true
console.log(umNumero.test("")); // false
console.log(umNumero.test("asdasdas")); // false
console.log(umNumero.test("1")); // true
console.log(umNumero.test("1511231231233123121323123121238")); // true


const umOuMaisNumeros= /\d+/; // 1 ou mais dígitos

console.log("d+");
console.log(umOuMaisNumeros.test("1518")); // true
console.log(umOuMaisNumeros.test("")); // false
console.log(umOuMaisNumeros.test("asdasdas")); // false
console.log(umOuMaisNumeros.test("1")); // true
console.log(umOuMaisNumeros.test("1511231231233123121323123121238")); // true

const zeroOuMaisNumeros= /\d*/; // 0 ou mais dígitos - sempre true

console.log("d*");
console.log(zeroOuMaisNumeros.test("1518")); // true
console.log(zeroOuMaisNumeros.test("")); // true
console.log(zeroOuMaisNumeros.test("asdasdas")); // true
console.log(zeroOuMaisNumeros.test("1")); // true
console.log(zeroOuMaisNumeros.test("1511231231233123121323123121238")); // true
