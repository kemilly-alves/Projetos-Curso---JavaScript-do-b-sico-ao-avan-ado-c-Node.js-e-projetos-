let cachorro = {
    patas: 4,       // propriedade
    raca: 'SRD',    // propriedade
    latir: function() {     // método é a função inteira dentro do objeto
        console.log("Au Au");   // corpo do método
    }
}

let labrador = Object.create(cachorro); // criar um novo objeto que herda do objeto cachorro

labrador.latir(); // Au Au

labrador.raca = "Labrador"; // atribuir o valor "labrador"

console.log(labrador.raca); // labrador
console.log(cachorro.raca); // SRD

let pastor = Object.create(cachorro);  // criar um novo objeto que herda do objeto cachorro

pastor.raca = "Pastor Alemão"; // atribuir o valor "pator alemão"

console.log(pastor.raca); // Pastor Alemão