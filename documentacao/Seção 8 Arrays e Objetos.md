# Seção 8: Arrays e Objetos

## 🔹 Arrays

Arrays são usados para armazenar **vários valores em uma única variável**.

👉 Eles são escritos com colchetes `[]` e os valores são separados por vírgula.

```javascript
let numeros = [1, 3, 5, 8, 12];

let informacoes = ["Matheus", 12, true, "Teste", 2];
```

**💡 Importante:**

- Um array pode ter vários tipos de dados juntos
- Ordem importa (não é bagunçado)

---

## 🔹 Acessando elementos (índice)

Cada valor dentro do array tem uma posição chamada **índice**.

👉 Sempre começa do **0**

```javascript
let numeros = [1,3,5,8,12];

console.log(numeros[0]); // 1
console.log(numeros[2]); // 5
```

💡

- `numeros[0]` → primeiro elemento
- `numeros[2]` → terceiro elemento

---

## 🔹 Propriedades

Propriedades são características de um valor.

👉 Quase tudo no JavaScript tem propriedades (menos `null` e `undefined`)

```javascript
let numeros = [1, 3, 5, 8, 12];

console.log(numeros.length);
console.log(numeros['length']);
console.log(numeros[3]);

let nome = 'Matheus';

console.log(nome.length); // número de caracteres da string
```

💡

- `.length` → muito importante (tamanho)

---

## 🔹 Métodos

Métodos são **funções que pertencem a um valor**

```javascript
let marca = 'Nike';

console.log(typeof marca.toUpperCase);
console.log(marca.toUpperCase());
console.log(marca.toUpperCase());// NIKE
```

💡

- Sempre tem `()` porque executa algo
- Ex: transformar texto, manipular array, etc

---

## 🔹 Objetos

Objetos armazenam dados em formato de **chave: valor**

```javascript
let pessoa = {
  nome:"Matheus",
  profissao:"Programador",
  idade:28,
};

console.log(pessoa.nome);
console.log(pessoa.idade);
```

💡

- `nome` = chave
- `"Matheus"` = valor

---

## 🔹 Criando e deletando propriedades

```javascript
let carro = {
    marca: "VW",
    portas: 4,
    eletrico: false,
    motor: 1.0
}

console.log(carro.portas);

delete carro.portas;

console.log(carro.portas);

carro.tetoSolar = true;

console.log(carro.tetoSolar);
```

💡

- `delete` remove
- `obj.novaPropriedade = valor` adiciona

---

## 🔹 Copiando objetos

Podemos copiar todas as propriedades de um objeto para outro.

```javascript
let objetoA = {
prop1: 'teste',
prop2: 'testando',
}

let objetoB = {
prop3: 'propriedades'
}

Object.assign(objetoA, objetoB);

console.log(objetoA);
```

💡

- "assign" junta objetos

---

## 🔹 Chaves do objeto

```javascript
let objetoA = {
    prop1: 'teste',
    prop2: 'testando',
}

console.log(Object.keys(objetoA));
```

💡

- Retorna só as **chaves** → `["prop1", "prop2"]`

---

## 🔹 Mutabilidade (referência)

```javascript
let objetoA = {
    pontos: 10
};

objetoB = objetoA;

let objetoC = {
    pontos: 10
};

console.log(objetoA == objetoB); //true
console.log(objetoA == objetoC); // false
```

💡

- `b` aponta pro mesmo objeto
- Alterar um → altera o outro

---

## 🔹 Loop em Arrays

```javascript
let numeros = [1,5,10,15,20,25];

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
```

💡

⚠️ Sempre usar `<` e não `<=` (evita `undefined`)

---

## 📦 Métodos de Array

### ➕ push / pop

```javascript
let pessoas = ["Matheus", "João", "Ricardo"];

let pessoaRemovida = pessoas.pop();

console.log(pessoas);
console.log(pessoaRemovida);
```

💡

- `push` → `push()` → adiciona um elemento no final do array
- `pop` → `pop()` → remove o último elemento do array e retorna ele

### ⬅️ shift / unshift

```javascript
let frutas = ["Maçã", "Melão", "Uva"];

let frutaRemovida = frutas.shift();

console.log(frutas);
console.log(frutaRemovida);
```

💡

- `shift` → remove o primeiro elemento de um array;
- `unshift` → adiciona um ou mais elementos no início de um array;

### 🔍 indexOf / lastIndexOf

```javascript
let numeros = [0, 1, 2, 1, 0];

console.log(numeros.indexOf(1));
console.log(numeros.lastIndexOf(1));
```

💡

- `indexOf` → encontra o índice de um determinado elemento;
- `lastIndexOf` → encontrar o último índice de um elemento;

### ✂️ slice

```javascript
let numeros = [0,1,2,3,4,5];

console.log(numeros.slice(2,3));
console.log(numeros.slice(3));
```

💡

- Retorna um array a partir de outro array;
- O array retornado é determinado pelos parâmetros, que são os índices de início e de fim do novo array;

### 🔁 forEach

```javascript
const nums = [1,2,3,4,5,6];

nums.forEach(num => {
    console.log(num);
});
```

💡

- Percorre o array

### ✅ includes

```javascript
let carros = ["BMW", "Fiat", "Audi"];

console.log(carros.includes("Fiat"));
```

💡

- Verifica se o array tem um determinado elemento;

### 🔄 reverse

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.reverse());
```

💡

- Inverte o array

---

## 🔤 Métodos de String

### ✂️ trim

```javascript
let texto = ' \n teste \n ';

console.log(texto.trim()) // teste
```

💡

- Remove espaços do começo e fim
- Não altera a string original: retorna uma nova string

### ⬅️ padStart

```javascript
let milAoContrario = '1';

console.log(milAoContrario.padStart(4, "0"));
```

💡

- Inserir caracteres antes da string;

### 🔀 split

```javascript
let frase = "O rato roeu a roupa do rei de roma";

let palavras = frase.split(" ");

console.log(palavras);
```

💡

- Divide uma string por um separador, e retorna um array.
- Transforma string → array;

### 🔗 join

```javascript
let fraseMontada = palavras.join('<->');

console.log(fraseMontada);
```

💡

- Transforma array → string

### 🔁 repeat

```javascript
console.log('teste'.repeat(5));
```

💡

- Repete uma string de acordo com um parâmetro number

---

## 🔹 Rest Operator

Permite receber vários parâmetros:

```javascript
function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
```

💡

- `...args` vira um array
- Uma forma de uma função receber um número indefinido de parâmetros;
- O operador rest vai virar um array;
- O parâmetro é definido por: `...nome`

---

## 🔹 Destructuring

### Objetos

```javascript
const person = {
    nome: 'John',
    lastname: 'Doe'
}

const {nome: fname, lastname: lname} = person;

console.log(fname);
console.log(lname);
```

💡

- Podemos definir variáveis com propriedades do objeto com uma notação diferente, chamada destructuring;

### Arrays

```javascript
let nomes = ['Matheus', 'João', 'Pedro'];

let [nomeA, nomeB, nomeC] = nomes;


console.log(nomeA);
console.log(nomeB);
console.log(nomeC);
```

💡

- Podemos definir variáveis com os valores de um array utilizando o destructuring;

---

## 🔹 JSON

Formato de dados usado para comunicação:

```json
{
    "nome": "Matheus",
    "age": 29,
    "position": "Developer",
    "languages": ["PHP", "JavaScript", "Python"]
}
```

💡

- JSON = JavaScript Object Notation;
- Utilizado para comunicação entre serviços, ex: back end ↔ front end;
- Basicamente um tipo de dado padronizado, que lembra muito os objetos do JavaScript;
- Usa aspas duplas;
- Não aceita comentários.

---

## 🔹 Converter JSON

```javascript
const car = {
    "brand": "BMW",
    "wheels": 4,
    "doors": 2,
    "type": "Sedan"
}

let jsonToString = JSON.stringify(car);

console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);

console.log(stringToJson);
```

💡

- Podemos converter o JSON para uma string de forma fácil;
- Ou também uma string para JSON.
