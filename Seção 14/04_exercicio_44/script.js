const enderecoDeIP = /\d{3}\.\d{1}\.\d{1}\.\d{1}/; 

console.log(enderecoDeIP.test("127.0.0.1")); // true
console.log(enderecoDeIP.test("asd")); // false
console.log(enderecoDeIP.test(" ")); // false
console.log(enderecoDeIP.test("123")); // false
console.log(enderecoDeIP.test("123.1.1")); // false
console.log(enderecoDeIP.test("abc.a.a.a")); // false
console.log(enderecoDeIP.test("1217.0.0.1")); // true 
console.log(enderecoDeIP.test("127.01.01.11")); // false

