function findMaxNumber(arrNum) {
    let maior = arrNum[0]; 

    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > maior) {
            maior = arrNum[i];
        }
    }

    return maior;
}

console.log(findMaxNumber([10, 5, 20, 8])); // 20
