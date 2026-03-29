// Exemplo 1: Função simples
// Function / nome da função / parâmetros/argumento (opcional) / corpo da função
function imprimirNoConsole() {
    console.log("Olá mundo!");
}

imprimirNoConsole();



// Exemplo 2: Função com parâmetro/argumento
function imprimirUmNumero(num) {
    console.log("O número é: " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);



// Exemplo 3: Função em variável (função anônima)
const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();
