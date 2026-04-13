let frase = "Estou criando um array a partir de uma frase";

console.log(frase.split(" ")); // ['Estou', 'criando', 'um', 'array', 'a', 'partir', 'de', 'uma', 'frase']

let arr = frase.split(" ");

for(let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
};

