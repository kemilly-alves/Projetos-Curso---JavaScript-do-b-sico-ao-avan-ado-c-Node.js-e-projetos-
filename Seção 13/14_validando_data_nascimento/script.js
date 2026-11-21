const validarDataNasc = /^\d{2}\/\d{2}\/\d{4}$/;

console.log(validarDataNasc.test('05/02/2000')); // true
console.log(validarDataNasc.test('5/2/2000')); // false
console.log(validarDataNasc.test('05-02-2000')); // false 
console.log(validarDataNasc.test('05/02/20')); // false 
console.log(validarDataNasc.test('12/12/1999')); // true 
console.log(validarDataNasc.test('99/99/9999')); // true 


const validarDataNasc2 = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/; // Valida o formato dd/mm/aaaa (não checa se a data existe)

console.log(validarDataNasc2.test('99/99/9999')); // false 
console.log(validarDataNasc2.test('31/02/2010')); // true - o formato está certo, mas 31/02 não existe: a regex não checa isso
console.log(validarDataNasc2.test('31/00/2010')); // false