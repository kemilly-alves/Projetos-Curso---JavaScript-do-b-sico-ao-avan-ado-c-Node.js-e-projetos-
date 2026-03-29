function soma(a,b) {

	if(a === undefined || b === undefined) {
		console.log("Esta função precisa ter dois arguentos");
	} else {
		return a + b;
	}

}

console.log(soma(1)); // Esta função precisa ter dois arguentos - Ele esta chamando a função soma, passando apenas um argumento, e como a função espera dois argumentos, ela imprime "Esta função precisa ter dois arguentos"

console.log(soma(1,2)); // 3 - Ele esta chamando a função soma, passando dois argumentos, e como a função espera dois argumentos, ela retorna a soma dos dois argumentos, que é 3



function saudacao(nome, idade) {
	if(idade === undefined) {
		console.log("Olá, " + nome);
	} else {
		console.log("Olá, " + nome + ", você tem " + idade + " anos");
	} 
}

saudacao("Matheus"); // Olá, Matheus - Ele esta chamando a função saudacao, passando apenas o nome, e como o segundo argumento é opcional, ele imprime "Olá, Matheus"

saudacao("Igor", 29); // Olá, Igor, você tem 29 anos - Ele esta chamando a função saudacao, passando o nome e a idade, e como o segundo argumento é opcional, ele imprime "Olá, Igor, você tem 29 anos"



function nomeComIdade(nome, idade) {

	if(idade === undefined) {
		console.log("Seu nome é " + nome);
	} else {
		console.log("Seu nome é " + nome + " é você tem " + idade + " anos");
	}
	
}

nomeComIdade("João"); // Seu nome é João - Ele esta chamando a função nomeComIdade, passando apenas o nome, e como o segundo argumento é opcional, ele imprime "Seu nome é João"

nomeComIdade("João", 42); // Seu nome é João é você tem 42 anos - Ele esta chamando a função nomeComIdade, passando o nome e a idade, e como o segundo argumento é opcional, ele imprime "Seu nome é João é você tem 42 anos"