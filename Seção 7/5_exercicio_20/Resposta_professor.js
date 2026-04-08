function podeEntrarNaAuto (idade) {
    if(idade >= 18) {
        console.log("Pode se matricular na auto escola");
    } else {
        console.log("Não pode se matricular na auto escola");
    }
}

podeEntrarNaAuto(16); // Não pode se matricular na auto escola
podeEntrarNaAuto(25); // Pode se matricular na auto escola
podeEntrarNaAuto(17); // Não pode se matricular na auto escola
podeEntrarNaAuto(18); // Pode se matricular na auto escola