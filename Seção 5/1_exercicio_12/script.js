let valor = 10;

while(valor > 0) {
    console.log("O valor é " + valor);
    valor = valor - 1; 
} // - 10, 9 8, 7, 6, 5, 4, 3, 2, 1


//Teste 2:
let valor2 = 0;

while(valor2 <= 10) {
    console.log("O valor2 é " + valor2);
    valor2 = valor2 + 1;
} // + 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


// Teste 3:
let valor3 = 10;

while(valor3 > 0) {
    console.log("O valor3 é " + valor3);
    valor3--;
} // - 10, 9 8, 7, 6, 5, 4, 3, 2, 1

/* Esses blocos geram loop infinito, pois o valor de z nunca é alterado, ou seja, ele sempre será maior que 0


let valor4 = 10;

while(valor4 > 0) {
    console.log("O valor3 é " + valor4);
    valor4++;
}


let z = 10;

while(z > 0) { 
    console.log(z);
}

*/

// Resposta do professor ao exercício:
let i = 0;

while(i <= 10) {
    console.log(i);

    i++;
}