function isPalindrome(palavra) {

    let palavraInvertida = palavra.split('').reverse().join('');

    return palavra === palavraInvertida;

 }

console.log(isPalindrome('radar')); 
console.log(isPalindrome('hello')); 
