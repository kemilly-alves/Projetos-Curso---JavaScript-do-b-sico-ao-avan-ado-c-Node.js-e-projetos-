let b = 10;

function multiplicar(x,y) {
	let b = x * y;

	if(b > 30) {
		let b = 0;

		b++;

		console.log(b); // 1
	}

	console.log(b); // 21
}

console.log(b); // 10 -  Ele esta chamando o primeiro let b = 10, pois ele tem acesso a esse escopo, e o valor de b é 10

multiplicar(3,7); // Ele não entra no if, pois 21 é menor que 30, então ele imprime 21, pois a variável b do escopo da função multiplicar tem o valor de 21

multiplicar(10, 7); // Ele entra no if, pois 70 é maior que 30, então ele imprime 1, depois ele imprime 70, pois a variável b do escopo da função multiplicar tem o valor de 70
