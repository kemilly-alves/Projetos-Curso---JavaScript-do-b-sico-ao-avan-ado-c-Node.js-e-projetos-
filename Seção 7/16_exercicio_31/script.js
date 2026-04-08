function countVowels(texto) {

    let contador = 0;
    let vogais = "aeiouAEIOU";

    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }

    return contador;
}

console.log(countVowels('World')); 
console.log(countVowels('Hello')); 



function countVowels1(texto) {

    let vogais1 = "aeiou";
    let contador1 = 0;

    for (let letra of texto.toLowerCase()) {
        if (vogais1.includes(letra)) {
            contador1++;
        }
    }

    return contador1;
}


console.log(countVowels1('World')); 
console.log(countVowels1('Hello')); 