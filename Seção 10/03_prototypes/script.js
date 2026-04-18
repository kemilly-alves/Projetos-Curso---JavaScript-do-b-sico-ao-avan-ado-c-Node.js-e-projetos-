const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa)); // Objeto
console.log(Object.getPrototypeOf(pessoa) === Object.prototype); // true

console.log(pessoa.hasOwnProperty('maos')); // true
