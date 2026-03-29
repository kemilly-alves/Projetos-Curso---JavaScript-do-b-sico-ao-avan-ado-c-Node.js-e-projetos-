function imprimirHelloWord () {
    console.log("Hello Word");
}

imprimirHelloWord(); // Hello Word
console.log(imprimirHelloWord()); // Hello Word + undefined (pq eu não defini o retorno da função, então o retorno é undefined)