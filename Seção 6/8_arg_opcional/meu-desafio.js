function calcularTotalPedido(valorProduto, valorFrete) {

    if(valorProduto === undefined || valorFrete === undefined) {
         console.log("Erro: valores obrigatórios não informados");
    } else {
         return valorProduto + valorFrete;
    }
}

console.log(calcularTotalPedido(100)); // Erro: valores obrigatórios não informados - Ele esta chamando a função calcularTotalPedido, passando apenas o valor do produto, e como a função espera dois argumentos, ela imprime "Erro: valores obrigatórios não informados"

console.log(calcularTotalPedido(100,200)); // 300 - Ele esta chamando a função calcularTotalPedido, passando o valor do produto e o valor do frete, e como a função espera dois argumentos, ela retorna a soma dos dois argumentos, que é 300



const total = calcularTotalPedido(100, 20); // 120 - Ele esta chamando a função calcularTotalPedido, passando o valor do produto e o valor do frete, e como a função espera dois argumentos, ela retorna a soma dos dois argumentos, que é 120, e esse valor é atribuído a variável total

console.log("Total do pedido: R$" + total); // Total do pedido: R$120 - Ele esta imprimindo a string "Total do pedido: R$" concatenada com o valor da variável total, que é 120, e o resultado é "Total do pedido: R$120"




function bemVindo(usuario, senha) {
	if(senha === undefined) {
		console.log("Olá, seu usuário é " + usuario + ", mas você não informou a senha, informe a senha e tente novamente!");
	} else {
		console.log("Olá, seu usuário é " + usuario + ", e você informou a senha, seja Bem Vindo!");
	} 
}

bemVindo("Matheus"); // Olá, seu usuário é Matheus, mas você não informou a senha, informe a senha e tente novamente! - Ele esta chamando a função bemVindo, passando apenas o nome do usuário, e como o segundo argumento é opcional, ele imprime "Olá, seu usuário é Matheus, mas você não informou a senha, informe a senha e tente novamente!"

bemVindo("Igor", "123456"); // Olá, seu usuário é Igor, e você informou a senha, seja Bem Vindo! - Ele esta chamando a função bemVindo, passando o nome do usuário e a senha, e como o segundo argumento é opcional, ele imprime "Olá, seu usuário é Igor, e você informou a senha, seja Bem Vindo!"