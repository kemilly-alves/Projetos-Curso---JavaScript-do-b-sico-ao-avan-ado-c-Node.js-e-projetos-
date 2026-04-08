function calculateAverage(num) {

    if (num.length === 0) {
        return 0;
    }

    let soma = 0;

    for (let i = 0; i < num.length; i++) {
        soma += num[i];
    }

    return soma / num.length;
}

console.log(calculateAverage([10, 20, 30]));
console.log(calculateAverage([5, 5, 5, 5]));