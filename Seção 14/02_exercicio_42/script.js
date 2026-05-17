// \d+ = um ou mais número
// ID = referente ao ID
// b = fim da palavra / limite de palavra 

const validID = /\d+ID\b/;

console.log(validID.test("ID")); // false
console.log(validID.test("testeID")); // false
console.log(validID.test("TESTEID")); // false
console.log(validID.test("testeID5")); // false
console.log(validID.test("12345ID")); // true
