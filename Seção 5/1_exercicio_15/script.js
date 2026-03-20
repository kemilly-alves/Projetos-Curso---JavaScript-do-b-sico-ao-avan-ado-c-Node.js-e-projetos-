let valor = 50;
let divisao = 0;    

for(let i = 1 ; i <= valor; i = i + 1) {
    //let(for i = 1 ; i <= numero; i++

    if(valor % i == 0) {
        divisao = divisao + 1;
        //divisao++
    }
}

if(divisao == 2) {
    console.log(`O número ${valor} é primo`);
} else {
    console.log(`O número ${valor} não é primo`);
}



// Resposta do professor ao exercício:
let num = 41;
let divisoes = 0;

for(let i = 1; i <= num; i++) {

    if(num % i == 0) {
        divisoes++;
    }
}

if(divisoes == 2) {
    console.log(`O número ${num} é primo`);
} else {
    console.log(`O número ${num} não é primo`);
}




