function imprimirPar(num1) {
    for(let i1 = num1; i1 >= 0; i1--) {
        if(i1 % 2 == 0) {
            console.log(i1);
        }
    }
}

imprimirPar(15);
imprimirPar(50);
imprimirPar(20);