class WordCounter {
    constructor() {
  
    }

    countWords(texto) {
        let textoLimpo = texto.trim();

        let palavras = textoLimpo.split(" ");

        return palavras.length;
    }
}

let contador = new WordCounter();

console.log(contador.countWords("oi tudo bem")); 