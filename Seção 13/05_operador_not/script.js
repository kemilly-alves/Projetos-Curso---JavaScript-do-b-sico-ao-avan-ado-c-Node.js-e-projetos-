const notab = /[^ab]/; 

console.log("^ab");
console.log(notab.test("a")); // false
console.log(notab.test("Aqui tem a")); // true
console.log(notab.test("05")); // true

const nottoaz = /[^a-z]/; 

console.log("^a-z");
console.log(nottoaz.test("asd")); // false
console.log(nottoaz.test("123")); // true
console.log(nottoaz.test("123 as")); // true
console.log(nottoaz.test("asdasfdfsf4eeqweqeqwes")); // true
console.log(nottoaz.test("asdasfdfsfeeqweqeqwes")); // false - Aqui não aceita pq removi o 4
