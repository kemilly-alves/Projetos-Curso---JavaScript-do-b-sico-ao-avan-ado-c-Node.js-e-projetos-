function minimo(base, min=2) {
	return Math.min(base, min);
}

console.log(minimo(2)); // 2 - Ele esta chamando a função minimo, passando apenas a base, e como o segundo argumento tem um valor default de 2, ele retorna o mínimo entre a base e o valor default, que é 2

console.log(minimo(2,1)); // 1

console.log(minimo(15,3)); // 3