let idade = 15;
let cnh = false;

if(idade >= 18 && cnh == false) {
    console.log("Você não pode dirigir, pois não tem CNH!");
} else if (idade >= 18 && cnh == true) {
    console.log("Você pode dirigir!");
} else {
    console.log("Você não pode dirigir!");
}


// Teste 2, mudando a ordem:
let idade2 = 19;
let cnh2 = true;

if(idade2 >= 18 && cnh2 == true) { 
    console.log("Você pode dirigir!");
} else if (idade2 >= 18 && cnh2 == false) {
    console.log("Você não pode dirigir, pois não tem CNH!");
} else {
    console.log("Você não pode dirigir!");
}




// Resposta do professor ao exercício:
let idade1 = 23;
let cnh1 = false;

if (idade1 >= 18 && cnh1 == true) {
    console.log("Sim, pode dirigir");
} else if(idade1 >= 18 && cnh1 == false) {
    console.log("Não pode dirigir, mas pode fazer a CNH");
} else {
    console.log("Não pode dirigir");
}

