function numeroAleatorio (num) {
    return Math.floor(Math.random() * num ) + 1;
}

console.log(numeroAleatorio(10));
console.log(numeroAleatorio(100));
console.log(numeroAleatorio(50));

//Observações:
// o Math.random() gera numero quebrado em cima do numero passado.
// o Math.floor() arredonda o numero para baixo, ou seja, ele arredonda para o numero inteiro mais próximo.
// o + 1 é pra ajudar o Math.floor() a arredondar para o numero inteiro mais próximo.