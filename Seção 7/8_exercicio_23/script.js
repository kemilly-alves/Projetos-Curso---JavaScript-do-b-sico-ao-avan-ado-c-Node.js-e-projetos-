function contadorDeCaract(texto) {
    if (texto.length > 10) {
        return ("Texto muito longo");
    } else {
        return ("Texto dentro do limite");
    }
}

console.log(contadorDeCaract("AbobrinhaVerde0101"));
console.log(contadorDeCaract("Kemilly"));


// Exercicios adicionais para praticar:


function validarSenha(senha) {
    if (senha.length < 8) {
        return false;
    }
        return true;
}

console.log(validarSenha("Kemilly123456789"));
console.log(validarSenha("Kemi12"));
