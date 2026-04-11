let pessoa = {
    "nome": "Matheus",
    "idade": 28,
    "profissao": "programador",
    "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto); // {"nome":"Matheus","idade":28,"profissao":"programador","hobbies":["Video game","Leitura","Correr"]}
// console.log(pessoaTexto.nome); // undefined


let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON); // Retorna o objeto completo

console.log(pessoaJSON.hobbies[0]); // Video game

console.log(pessoaJSON.nome); // Matheus


let arr = [2,4,6,8];

console.log(arr[3]);