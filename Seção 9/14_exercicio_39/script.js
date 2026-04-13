function sumUniqueNumbers(arr) {
    let contador = {};
    let soma = 0;

    for (let num of arr) {
        if (contador[num]) {
            contador[num]++;
        } else {
            contador[num] = 1;
        }
    }

    for (let num of arr) {
        if (contador[num] === 1) {
            soma += num;
        }
    }

    return soma;
}

console.log(sumUniqueNumbers([1, 2, 2, 3, 4, 4, 5])); // 1 + 3 + 5 = 9