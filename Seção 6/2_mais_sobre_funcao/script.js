function multiplicarTresNumeros(x,y,z) {
    return x * y * z;
}

// Usando o retorno da função em uma expressão de console.log()
console.log(multiplicarTresNumeros(2,3,4));


// Atribuir o valor a uma váriavel e usar ele depois
const mult = multiplicarTresNumeros(5,4,8);

console.log("O valor de mult é " + mult);


function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}

podeDirigir(18, true);
podeDirigir(25, true);
podeDirigir(44, 0); // 0 é considerado false
podeDirigir(19, 1); // 1 é considerado true, mas o ideal é passar um booleano mesmo, ou seja, true ou false.
podeDirigir(17, false);


console.log(podeDirigir(18, true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(44, 0)); // 0 é considerado false
console.log(podeDirigir(19, 1)); // 1 é considerado true, mas o ideal é passar um booleano mesmo, ou seja, true ou false.
console.log(podeDirigir(17, false));