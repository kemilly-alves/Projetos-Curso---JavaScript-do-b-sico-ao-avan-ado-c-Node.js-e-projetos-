function qualSuaIdade (idade) {
    if(idade >= 18) {
        console.log(`Você pode entrar na auto escola, pois tem ${idade} anos de idade!`);
    } else {
        console.log(`Você não pode entrar na auto escola, pois tem ${idade} anos de idade!`);
    }
}

console.log(qualSuaIdade(18)); // Ele esta chamando a função qualSuaIdade, passando o argumento 18, e como a função espera um argumento, ela retorna uma msg falando que a pessoa pode entrar, tbm trás informando undefined, pois a função não tem um return, ela apenas imprime uma mensagem no console

console.log(qualSuaIdade(15)); // Ele esta chamando a função qualSuaIdade, passando o argumento 15, e como a função espera um argumento, ela retorna uma msg falando que a pessoa não pode entrar, tbm trás informando undefined, pois a função não tem um return, ela apenas imprime uma mensagem no console


qualSuaIdade(18) // Aqui não temos o undefined, pois não estamos usando o console.log para chamar a função, então a função apenas imprime a mensagem no console, sem retornar nada

qualSuaIdade(15) // Aqui também não temos o undefined, pois não estamos usando o console.log para chamar a função, então a função apenas imprime a mensagem no console, sem retornar nada



function imprimirNome (nome) {
    console.log(`Meu nome é: ${nome}!`);
}

console.log(imprimirNome("Kemilly"));