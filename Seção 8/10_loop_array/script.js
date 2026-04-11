let nomes = ["Matheus", "Maria", "José"];

for(let i = 0; i <= nomes.length; i++) {
    console.log(nomes[i]);
}


// Exercício: 

let animais = ["Cat", "Cachorro", "Cavalo", "Zebra", "Foca", "Camelo", "Urso"];

//Exemplo 1: For

for(let i = 0; i < animais.length; i++) {
    console.log(animais[i]);
}

//Exemplo 2: While

let i1 = 0;

while (i1 < animais.length) {
    console.log(animais[i1]);
    i1++;
}

//Exemplo 3: Do while

let i2 = 0;

do {
    console.log(animais[i2]);
    i2++;
} while (i2 < animais.length);


/*
Diferença importante
while → verifica a condição antes
do...while → executa pelo menos 1 vez, mesmo se a condição for falsa
----------------------------------------

let i = 10;

while (i < 5) {
    console.log("while rodou");
}
// NÃO roda

----------------

do {
    console.log("do while rodou");
} while (i < 5);
// RODA 1 vez

*/ 