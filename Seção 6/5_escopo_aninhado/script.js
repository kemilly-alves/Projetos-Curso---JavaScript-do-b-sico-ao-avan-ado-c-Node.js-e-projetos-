let a = 10;

function multiplicar(x,y) {
	let a = x * y;

	if(a > 10) {
		let a = 0;

		a++;

		console.log(a); // 1
	}

	console.log(a); // 21
}

console.log(a); // 10

multiplicar(3,7); // Ele entra no if, pois 21 é maior que 10, então ele imprime 1, depois ele imprime 21, pois a variável a do escopo da função multiplicar tem o valor de 21
