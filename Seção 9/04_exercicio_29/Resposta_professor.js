let onibus1 = {
    rodas: 8,
    limitePasageiros: 40,
    portas: 2
};


delete onibus1.rodas;

console.log(onibus1.rodas); // undefined

onibus1.janelas = 20;

console.log(onibus1); // {limitePasageiros: 40, portas: 2, janelas: 20}
console.log(onibus1.janelas); // 20
