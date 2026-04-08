function qualoTipoDeDado (dado) {
    if(typeof dado === 'string') {
        console.log('Eu sou do tipo "String"');
    } else if (typeof dado === 'number') {
        console.log('Eu sou do tipo "Number"');
    } else if (typeof dado === 'boolean') {
        console.log('Eu sou do tipo "Boolean"');
    }
}

qualoTipoDeDado('Kemilly');
qualoTipoDeDado(1.2);
qualoTipoDeDado(23);
qualoTipoDeDado(true);
qualoTipoDeDado(0);
qualoTipoDeDado(false);


function qualoTipoDeDado2 (dado) {
    if(typeof dado === 'string') {
        return `Eu sou do tipo "${typeof dado}"`;;
    } else if (typeof dado === 'number') {
        return `Eu sou do tipo "${typeof dado}"`;
    } else if (typeof dado === 'boolean');
        return `Eu sou do tipo "${typeof dado}"`;
}

console.log(qualoTipoDeDado2('Kemilly'));
console.log(qualoTipoDeDado2(1.2));
console.log(qualoTipoDeDado2(23));
console.log(qualoTipoDeDado2(true));
console.log(qualoTipoDeDado2(0));
console.log(qualoTipoDeDado2(false));


// Praticando com um exemplo real pro mercado de trabalho:
function validarTipo(dado, tipoEsperado) {
    if (typeof dado !== tipoEsperado) {
        console.log(`Erro: esperado ${tipoEsperado}, mas veio ${typeof dado}`);
    } else {
        console.log(`O tipo de dado esperado esta correto!`);
    }
}

validarTipo("Kemilly", "string");
validarTipo(25, "number");
validarTipo(true, "boolean");
console.log(`OK`);
validarTipo("Kemilly", "number");
validarTipo(25, "boolean");
validarTipo(true, "string");
