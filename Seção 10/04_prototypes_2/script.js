const pessoa = {
    maos: 2,
}

// console.log(Object.getPrototypeOf(pessoa)); // Objeto
// console.log(Object.getPrototypeOf(pessoa) === Object.prototype); // true

// console.log(pessoa.hasOwnProperty('maos')); // true

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos); // 2

console.log(pessoaNova.hasOwnProperty('maos')); // false

console.log(Object.getPrototypeOf(pessoaNova) === pessoa); // true
