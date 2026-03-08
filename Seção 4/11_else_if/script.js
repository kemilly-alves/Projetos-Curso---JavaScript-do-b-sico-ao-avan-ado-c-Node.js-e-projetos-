let nome = "Kemilly"; //Nome está definido

if(nome != undefined) {
    console.log("Nome está definido");
} else if(nome == "Kemilly" && nome.length > 5) {
    console.log("O nome é Kemilly");
} else {
    console.log("Não é Kemilly!");
}


let nome2 = "Kemilly"; //O nome é Kemilly

if(nome2 != undefined && nome2 == "Joana") {
    console.log("Nome está definido");
} else if(nome2 == "Kemilly" && nome2.length > 5) {
    console.log("O nome é Kemilly");
} else {
    console.log("Não é Kemilly!");
}


let nome3 = "Kemilly"; //Não é Kemilly!
let idade = 28;

if(nome3 != undefined && nome3 == "Joana") {
    console.log("Nome está definido");
} else if(nome3 == "Kemilly" && nome3.length > 5 && idade == 50) {
    console.log("O nome é Kemilly");
} else {
    console.log("Não é Kemilly!");
}


//Outro exemplo:
if(1 > 2) {
    console.log("Teste");
} else if(1 == 1) {
    console.log("Testando");
}