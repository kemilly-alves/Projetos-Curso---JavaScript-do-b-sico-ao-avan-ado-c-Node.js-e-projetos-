let velocidade = 80;

if (velocidade <= 60) {
    console.log(`Você esta dentro da velocidade permitida de ${velocidade}, continue assim!`);
} else {
    console.log(`Você esta acima da velocidade permitida de ${velocidade}, sua multa é de R$ 500,00!`);
}

//Teste 2
let velocidadePermitida = 60;

if (velocidadePermitida == 80) {
    console.log(`Você esta dentro da velocidade permitida de ${velocidadePermitida}, continue assim!`);
} else if (velocidadePermitida > 80) {
    console.log(`Você esta acima da velocidade permitida de ${velocidadePermitida}, sua multa é de R$ 500,00!`);
}
else {
    console.log(`Você esta abaixo da velocidade permitida de ${velocidadePermitida}, pode aumentar a velocidade`);
}

// Resposta do professor ao exercício:
let vel = 55;

if(vel > 80) {
    console.log("Levou multa");
} else {
    console.log("Não levou multa");
}