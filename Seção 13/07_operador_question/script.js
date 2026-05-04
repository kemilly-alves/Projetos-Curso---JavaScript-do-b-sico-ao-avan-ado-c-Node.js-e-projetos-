const umNumero= /Abacax?i/; // Faz com que o dígito anterior seja opcional

console.log("?");
console.log(umNumero.test("Abacaxi")); // true
console.log(umNumero.test("Abacai")); // true
console.log(umNumero.test("Abobora")); // false

const padrao2= /\d+\w?/; // 1 ou mais dígitos / Faz com que o Caractere alfanumérico anterior seja opcional

console.log("d+\w?");
console.log(padrao2.test("123")); // true
console.log(padrao2.test("123a")); // true
console.log(padrao2.test("123 ")); // true
console.log(padrao2.test(" ")); // false
