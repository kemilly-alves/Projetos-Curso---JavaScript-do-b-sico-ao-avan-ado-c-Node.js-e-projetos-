// Exemplo 1: Função simples
// Function / nome da função / parâmetros/argumento (opcional) / corpo da função
function sejaBemVindo() {
    console.log("Seja bem-vindo ao curso de JavaScript do básico ao avançado!");
}

sejaBemVindo();



// Exemplo 2: Função com parâmetro/argumento
function sejaBemVindoComNome(nome) {
    console.log("Seja bem-vindo(a), " + nome + ", ao curso de JavaScript do básico ao avançado!");
}

sejaBemVindoComNome("Joana");
sejaBemVindoComNome("Mariana");
sejaBemVindoComNome("Matheus");


// Exemplo 3: Função em variável (função anônima)
const menorNumero = function() {
    console.log(Math.min(1, 3, 5, 7));
}

menorNumero();
menorNumero();

const temPermissao = function (idade) {
    if (idade >= 18 && idade < 70) {
        console.log("Você pode dirigir!");
    } else if (idade < 18) {
        console.log("Você não tem permissão para dirigir.");
    } else {
        console.log("Você é idoso, tem permissão para dirigir, mas não pode dirigir por muito tempo.");
    }
}

temPermissao(16);
temPermissao(25);
temPermissao(75);


