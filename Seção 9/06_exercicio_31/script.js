let nomes = ["Kemilly", "Ian", "Sandy", "Junior", "João", "Maria"];

let names = ["João", "Maria", "José", "Matheus", "Rodrigo", "Kemilly"];

let numeros = [1,2,3,4];


function numeroElementos(elementos) {
    if(elementos.length < 5){
        console.log("Poucos elementos")
    } else {
        console.log("Muitos elementos")
    }
};

numeroElementos(nomes); // Muitos elementos
numeroElementos(names); // Muitos elementos
numeroElementos(numeros); // Poucos elementos
