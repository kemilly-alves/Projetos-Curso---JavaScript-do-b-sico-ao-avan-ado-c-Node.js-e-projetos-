# Seção 6: Funções

## O que são funções?

Funções são **blocos de código reutilizáveis**, criados para executar uma tarefa específica dentro de um programa.

### 🎯 Objetivo

- Evitar repetição de código (reuso)
- Melhorar organização e legibilidade
- Facilitar manutenção

### 💡 Conceito chave

- Podem ser vistas como **"subprogramas"** dentro do código

---

## ⚙️ Estrutura de uma função

Uma função possui alguns elementos básicos:

### 🧱 Definição

- Declarada com a palavra-chave `function`
- Deve possuir um **nome**
- Pode receber **parâmetros (argumentos)**

### 🧾 Sintaxe básica

```javascript
function nomeDaFuncao(parametro1 , parametro2) {
// código a ser executado
return resultado ;
}
```

## 🧩 Componentes

### 🔹 Nome

Identifica a função e permite que ela seja chamada depois

### 🔹 Parâmetros

- São valores recebidos pela função
- Definidos entre `()`

### 🔹 Corpo da função

- Código que será executado
- Definido entre `{ }`

### 🔹 Retorno (`return`)

- Valor que a função devolve após execução
- Nem toda função precisa retornar algo

---

## 🔁 Observações importantes

- Funções ajudam a deixar o código **modular**
- Podem ser armazenadas em variáveis

```javascript
const minhaFuncao = function( ) {
return "Olá";
}
```

Exemplo:

```javascript
function escreverNoConsole() {
    console.log("Escrevendo no console!");
}
escreverNoConsole();

const textoNoConsole = function() {
    console.log("Texto no console!");
}
textoNoConsole();

const textPorParametro = function(texto) {
    console.log(texto);

}

textPorParametro("Testando por parâmetro!");
```

---

## ⚙️ Definindo uma função — prática

### 📌 Exemplo 1: Função simples

```javascript
function imprimirNoConsole() {
    console.log("Olá mundo!");
}

imprimirNoConsole();
```

**💡 Explicação:**

- Função sem parâmetros
- Apenas executa uma ação (print no console)

---

### 📌 Exemplo 2: Função com parâmetro

```javascript
function imprimirUmNumero(num) {
    console.log("O número é: " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);
```

**💡 Explicação:**

- `num` é o parâmetro
- Cada chamada passa um valor diferente

### 📌 Exemplo 3: Função em variável (função anônima)

```javascript
const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();
```

**💡 Correções importantes:**

- `Math.randow` → corrigido para `Math.random()`

**💡 Explicação:**

- Função sem nome atribuída a uma variável
- Gera um número aleatório a cada execução

```javascript
const soma = function(a, b) {
    return a + b;
}

console.log(soma(3,5));

const saudacao = function(nome) {
    if(nome == "Matheus") {
        return "Olá Matheus";
    }
}

console.log(saudacao("Matheus"));
```

---

## 🔹 Escopo de uma função

Tudo que acontece dentro de uma função fica isolado do escopo global.

- **Escopo global**: todo o arquivo JavaScript
- **Escopo local**: dentro da função

```javascript
let n = 10;

const numero = function() {
    let n = 25;
    console.log(n);
}

console.log(n);
```

---

### 🔹 Mais sobre escopo

Com `let` e `const`, qualquer bloco cria um novo escopo (ex: `if`, `for`, etc).
Isso ajuda a evitar conflitos de variáveis.

```javascript
let x = 10;

if(true) {
    let x = 20;
    console.log(x); // escopo if
}

console.log(x) // escopo global
```

> ⚠️ Diferente do `var`, que **não respeita escopo de bloco**

---

### 🔹 Escopo aninhado (Nested Scopes)

Podemos ter vários níveis de escopo dentro do código.

```javascript
let y = 5;

const multiplicar = function(n) {

    let y = n * 2;

    console.log(y) // escopo função

    if(y == 10) {

        let y = 55;

        console.log(y) // escopo if dentro da função

    }

}

multiplicar (y);
```

---

### 🔹 Arrow Functions

Uma forma mais moderna e curta de escrever funções.

```javascript
const parOuImpar = (n) => {
    return n % 2;
};

console.log(parOuImpar(3));
```

---

### 🔹 Simplificando Arrow Functions

Regras:

- 1 parâmetro → pode remover `()`
- 1 linha → pode remover `{}` e `return`

```javascript
const quadrado = n => n * n;

const raizQuadrada = n => Math.sqrt(n);

console.log(quadrado(4));       // 16
console.log(raizQuadrada(16));  // 4
```

---

### 🔹 Argumentos opcionais

Podemos chamar funções sem passar todos os parâmetros.

```javascript
function nomeComIdade(nome, idade) {

    if(idade === undefined) {
        console.log("Seu nome é " + nome);
    } else {
        console.log("Seu nome é " + nome + " e você tem " +
idade + " anos");
    }

}

nomeComIdade("João");
nomeComIdade("João", 42);
```

---

### 🔹 Parâmetros com valor padrão (default)

Podemos definir valores padrão para parâmetros.

```javascript
function repetirFrase(frase, n=2) {
    for(let x = 1; x <= n; x++) {
        console.log(frase + " " + x);
    }
}

repetirFrase("Testando", 5);
repetirFrase("Só duas vezes");
```

---

### 🔹 Closure

Uma função que "lembra" do ambiente onde foi criada.

```javascript
function armazenarSoma(x) {
    return y => x + y;
}

let soma1 = armazenarSoma(3);
console.log(soma1(5)); // 8

let soma2 = armazenarSoma(5);
console.log(soma2(10)); // 15
```

---

### 🔹 Recursão (Recursion)

Quando uma função chama a si mesma.

> ⚠️ Precisa de uma condição de parada para evitar loop infinito.

```javascript
function retornarNumeroPar(n) {
    if(n % 2 == 0) {
        console.log("n agora é par: " + n);
    } else {
        console.log(n);
        retornarNumeroPar(n - 1);
    }
}

retornarNumeroPar(33);
```
