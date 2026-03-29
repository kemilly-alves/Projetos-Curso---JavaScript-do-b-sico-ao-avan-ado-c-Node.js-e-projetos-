// estou usando uma variavel com o nome consoleTeste2, e atribuindo a ela uma arrow function, que é uma função anônima, ou seja, sem nome, e ela tem a sintaxe mais curta do que a função tradicional, e ela é muito útil para funções de callback, ou seja, funções que são passadas como argumento para outras funções, e ela tem um comportamento diferente em relação ao this, que é o objeto global, e ela não tem o seu próprio this, mas sim herda o this do contexto onde ela foi definida.
let consoleTeste2 = () => {
	console.log("Olá mundo!");
}

consoleTeste2(); // Olá mundo! - Ele esta chamando a função consoleTeste2, que é uma arrow function, e ela imprime "Olá mundo!" no console


// estou usando uma variavel com o nome soma2, e atribuindo a ela uma arrow function, que é uma função anônima, ou seja, sem nome, e ela tem a sintaxe mais curta do que a função tradicional, e ela é muito útil para funções de callback, ou seja, funções que são passadas como argumento para outras funções, e ela tem um comportamento diferente em relação ao this, que é o objeto global, e ela não tem o seu próprio this, mas sim herda o this do contexto onde ela foi definida.
let soma2 = (a,b) => {
	return a + b;
};


console.log(soma2(10,20)); // 30 - Ele esta chamando a função soma2, que é uma arrow function, e ela retorna a soma dos dois parâmetros passados


let multi = (a,b) => (a * b);

console.log(multi(10,20)); // 200 - Ele esta chamando a função multi, que é uma arrow function, e ela retorna a multiplicação dos dois parâmetros passados, e como ela tem apenas uma expressão, ela retorna o resultado dessa expressão, sem precisar usar a palavra return, e sem precisar usar as chaves {} para delimitar o corpo da função, pois ela tem apenas uma expressão, e o resultado dessa expressão é retornado automaticamente.

let multi2 = (a,b) => a * b;

console.log(multi2(10,20)); // 200 