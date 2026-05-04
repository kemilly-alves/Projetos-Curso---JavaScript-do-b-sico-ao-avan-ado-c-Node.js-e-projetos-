const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDataNasc.test('05/02/2000')); // true
console.log(validarDataNasc.test('5/2/2000')); // false
console.log(validarDataNasc.test('05-02-2000')); // false 
console.log(validarDataNasc.test('05/02/20')); // false 
console.log(validarDataNasc.test('12/12/1999')); // true 
console.log(validarDataNasc.test('99/99/9999')); // true 


const validarDataNasc2 = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/; // Validando se a data existe

console.log(validarDataNasc2.test('99/99/9999')); // false 
console.log(validarDataNasc2.test('31/02/2010')); // true - Aqui ainda não esta perfeito, porém serve para termos uma noção!
console.log(validarDataNasc2.test('31/00/2010')); // true