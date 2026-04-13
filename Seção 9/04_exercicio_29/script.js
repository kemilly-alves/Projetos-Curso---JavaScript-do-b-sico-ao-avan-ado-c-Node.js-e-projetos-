let onibus = {
    "rodas": 8,
    "limiteDePassageiros": 40,
    "portas": 2
};


console.log(onibus); // {rodas: 8, limiteDePassageiros: 40, portas: 2}

onibus.janelas = 20;

console.log(onibus.janelas); // 20

delete onibus.rodas;

console.log(onibus.rodas); // undefined

console.log(onibus); // {limiteDePassageiros: 40, portas: 2, janelas: 20}

