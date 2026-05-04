const pontoRegex = /./; // Qualquer caractere (exceto quebra de linha)

console.log('.');
console.log(pontoRegex.test("asd")); // true
console.log(pontoRegex.test(" ")); // true
console.log(pontoRegex.test("123")); // true
console.log(pontoRegex.test("123sad")); // true

const dRegex = /\d/; // [0-9] - Qualquer dígito (0-9)  

console.log('d');
console.log(dRegex.test("asd")); // false
console.log(dRegex.test(" ")); // false
console.log(dRegex.test("123")); // true
console.log(dRegex.test("123sad")); // true

const dRegex2 = /\D/; // [^0-9] - Não é dígito (^ representsa o não)

console.log('D');
console.log(dRegex2.test("asd")); // true
console.log(dRegex2.test(" ")); // true
console.log(dRegex2.test("123")); // false
console.log(dRegex2.test("123sad")); // true

const sRegex = /\s/; // Espaço em branco 

console.log('s');
console.log(sRegex.test("asd")); // false
console.log(sRegex.test(" ")); // true
console.log(sRegex.test("123")); // false
console.log(sRegex.test("123sad")); // false

const sRegex2 = /\S/; // Não é espaço

console.log('S');
console.log(sRegex2.test("asd")); // true
console.log(sRegex2.test(" ")); // false
console.log(sRegex2.test("123")); // true
console.log(sRegex2.test("123sad")); // true

const wRegex = /\w/; // Caractere alfanumérico (letras + números + _)

console.log('w');
console.log(wRegex.test("asd")); // true
console.log(wRegex.test(" ")); // false
console.log(wRegex.test("123")); // true
console.log(wRegex.test("123sad")); // true

const wRegex2 = /\W/; // Não é alfanumérico

console.log('W');
console.log(wRegex2.test("asd")); // false
console.log(wRegex2.test(" ")); // true
console.log(wRegex2.test("123")); // false
console.log(wRegex2.test("123sad")); // false