function potencia(base, exp=2) {
	return Math.pow(base, exp);
}

console.log(potencia(2)); // 4 - Ele esta chamando a função potencia, passando apenas a base, e como o segundo argumento tem um valor default de 2, ele retorna a potência da base elevada ao quadrado, que é 4

console.log(potencia(2,2)); // 4 - Ele esta chamando a função potencia, passando a base e o expoente, e como o segundo argumento tem um valor default de 2, ele retorna a potência da base elevada ao expoente, que é 4	

console.log(potencia(2,3)); // 8 - Ele esta chamando a função potencia, passando a base e o expoente, e como o segundo argumento tem um valor default de 2, ele retorna a potência da base elevada ao expoente, que é 8
