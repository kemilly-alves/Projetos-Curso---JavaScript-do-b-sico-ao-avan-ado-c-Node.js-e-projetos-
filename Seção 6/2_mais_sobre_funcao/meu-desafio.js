function somarTresNumeros(x,y,z) {
    return x + y + z;
}

// Usando o retorno da função em uma expressão de console.log()
console.log(somarTresNumeros(10,20,30));


// Atribuir o valor a uma váriavel e usar ele depois
const somar = somarTresNumeros(5,4,8);

console.log("O valor de somar é " + somar);


function podeDirigirr(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}

console.log(podeDirigirr(18, true));
console.log(podeDirigirr(25, true));
console.log(podeDirigirr(44, 0)); // 0 é considerado false
console.log(podeDirigirr(19, 1)); // 1 é considerado true, mas o ideal é passar um booleano mesmo, ou seja, true ou false.
console.log(podeDirigirr(17, false));