function sumEvenNumbers(numeros) {

    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            soma += numeros[i];
        }
    }

    return soma;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); 



