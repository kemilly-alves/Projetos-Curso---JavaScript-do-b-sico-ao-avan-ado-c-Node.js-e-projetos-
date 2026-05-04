const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com")); // true
console.log(validaDominio.test("www.horadecordar.com.br")); // true
console.log(validaDominio.test("www.horadecordar")); // false 
console.log(validaDominio.test("www.horadecordar")); // false 
