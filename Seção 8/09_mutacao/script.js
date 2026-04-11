let pessoa = {
    nome: "Matheus"
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Kemilly"
}


console.log(pessoa.nome); // Matheus
console.log(pessoa2.nome); // Matheus
console.log(pessoa3.nome); // Kemilly

console.log(pessoa == pessoa2); // true
console.log(pessoa3 == pessoa); // false
console.log(pessoa3 == pessoa2); // false

pessoa2.nome = "Pedro";

console.log(pessoa.nome); // Pedro

pessoa.nome = "Maria";

console.log(pessoa2.nome); // Maria