// /regex/
// ^ = Começo da string- a validação começa do início do texto


// (?=.{3,16}$) = Essa parte é um LOOKAHEAD - uma verificação sem consumir caracteres. 
// . = qualquer caractere
// {3,16} = entre 3 e 16 caracteres 
// $ = final da string

// .{3,16}$ = “a string inteira deve ter entre 3 e 16 caracteres”
// (?= ) = “verifique se isso é verdade”, mas sem “andar” na string.


// (?=.{3,16}$) = “o texto precisa ter entre 3 e 16 caracteres”

// [a-z] = letras minúsculas
// [0-9] = números
// - = hífen
// [a-z0-9-_] = “aceite letras minúsculas, números, _ e -”
// + = um ou mais caracteres
// $ = garante que a string termina ali


let validarNomeUsuarioo = /^(?=.{3,16}$)[a-z0-9-_]+$/;

console.log(validarNomeUsuarioo.test("matheus_123")); // true
console.log(validarNomeUsuarioo.test("kemilly_alves")); // true
console.log(validarNomeUsuarioo.test("kemilly-alves")); // true

console.log(validarNomeUsuarioo.test("as")); // false
console.log(validarNomeUsuarioo.test("11111111111111111111111111")); // false
