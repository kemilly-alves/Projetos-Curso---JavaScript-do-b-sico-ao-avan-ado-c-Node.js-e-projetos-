const dia = /\d\d/; 

console.log(dia.test("2019")); // true
console.log(dia.test("asd")); // false
console.log(dia.test("05")); // true
console.log(dia.test("asd1")); // false

const dia2 = /\d\d/; 

console.log(dia2.test("2019") && "2019".length == 2); // false
console.log(dia2.test("asd")); // false
console.log(dia2.test("05") && "05".length == 2); // true
console.log(dia2.test("asd1")); // false


const palavraPeloMenosTresLetras = /\w\w\w/;

console.log(palavraPeloMenosTresLetras.test("asd")); // true
console.log(palavraPeloMenosTresLetras.test("asdd")); // true
console.log(palavraPeloMenosTresLetras.test("as")); // false
