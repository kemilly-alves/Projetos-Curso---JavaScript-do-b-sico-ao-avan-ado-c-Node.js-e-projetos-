// Uma forma simplificada de trabalhar com funções que utilizam closure é usando arrow functions, pois elas têm uma sintaxe mais curta.
// O closure acontece quando uma função interna acessa variáveis do escopo onde foi criada, mesmo após a função externa já ter sido executada.
// Esse comportamento não é exclusivo de arrow functions, mas pode ser utilizado com elas para criar funções que retornam outras funções, armazenando valores em variáveis privadas.
function armazenarSom(x) {
	return y => x + y;
}

let somarvalor = armazenarSom(10);
console.log(somarvalor(50)); // 60

let somarvalor2 = armazenarSom(530);
console.log(somarvalor2(300)); // 830


// A função lembrarIdade é uma função que retorna outra função, e a função interna tem acesso à variável x da função externa, mesmo após a função externa ter sido executada, isso é o closure.
function lembrarIdade(x) {
	return function(y) {
		return x + y;
	}
}

let idade = lembrarIdade(15);
console.log(idade(5)); // 20

let idade2 = lembrarIdade(30);
console.log(idade2(7)); // 37

