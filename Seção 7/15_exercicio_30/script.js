function reverseString (texto) {

    let palavraInvertida = texto.split('').reverse().join('');

    return palavraInvertida;

}

console.log(reverseString('World')); 
console.log(reverseString('Hello')); 