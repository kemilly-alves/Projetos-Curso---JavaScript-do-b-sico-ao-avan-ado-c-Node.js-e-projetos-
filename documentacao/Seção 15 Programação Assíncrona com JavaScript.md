# Seção 15: Programação Assíncrona com JavaScript

## 🔹 O que é programação assíncrona?

Programação assíncrona é uma forma de executar tarefas sem que uma precise esperar a outra terminar para continuar o fluxo da aplicação.

Na programação síncrona, as ações acontecem em sequência, como uma fila: uma tarefa só começa depois que a anterior termina.

Já na programação assíncrona, várias ações podem acontecer “ao mesmo tempo”, sem bloquear a execução principal do sistema. Isso torna a aplicação mais rápida, fluida e responsiva para o usuário.

### Exemplo

Imagine um usuário no checkout de um site:

- Ele salva um novo endereço na conta;
- Enquanto o endereço está sendo salvo no servidor, ele ainda consegue continuar navegando e finalizar a compra;
- A página não precisa recarregar nem ficar “travada”.

Isso acontece porque o salvamento do endereço foi executado de forma assíncrona.

## 🔹 Callbacks

Uma das formas de trabalhar com programação assíncrona é utilizando **callbacks**.

### O que é um callback?

Callback é uma função passada como argumento para outra função e que será executada após determinado evento ou após um tempo específico.

Ou seja, ela “espera” algo acontecer para depois ser chamada.

### Exemplo com `setTimeout`

A função `setTimeout` executa um trecho de código após um determinado tempo (em milissegundos).

```javascript
console.log("Ainda não chamou o callback");

setTimeout(function() {
    console.log("Chamou o callback");
}, 2000);

console.log("Ainda não chamou o callback");
```

### O que acontece?

- O primeiro `console.log` é executado imediatamente;
- O `setTimeout` agenda a execução do callback para daqui a 2 segundos;
- O código continua executando normalmente sem esperar;
- Após 2 segundos, o callback é executado.

### Ordem de execução

```javascript
console.log("1");

setTimeout(function() {
    console.log("5");
}, 2000);

console.log("2");
console.log("3");
console.log("4");
```

### Saída no console

```
1
2
3
4
5
```

### Explicação

Mesmo o `setTimeout` estando no meio do código, o JavaScript não para a execução esperando os 2 segundos passarem.

Ele agenda o callback para depois e continua executando o restante do código normalmente. Isso é um exemplo de comportamento assíncrono.

## 🔹 Promises

Promises são uma forma de trabalhar com operações assíncronas no JavaScript.

Elas representam um valor que pode estar disponível agora, no futuro ou talvez nunca aconteça caso ocorra algum erro.

Ou seja, uma Promise é uma “promessa” de que uma operação assíncrona irá retornar um resultado futuramente.

### Estrutura básica

O objeto utilizado é o `Promise`.

Alguns conceitos importantes:

- `Promise.resolve()` → cria uma Promise já resolvida;
- `then()` → executa uma ação quando a Promise for concluída com sucesso;
- `catch()` → trata possíveis erros da Promise.

### Exemplo simples

```javascript
let promessa = Promise.resolve(4 + 8);

console.log('Algum código');

promessa.then((value) => console.log(`A soma é ${value}`));
```

### O que acontece?

- A Promise resolve o valor `4 + 8`;
- O restante do código continua executando normalmente;
- Quando a Promise é concluída, o `then()` recebe o valor resolvido;
- O resultado exibido será:

```
Algum código
A soma é 12
```

### Encadeamento de `then()`

É possível encadear vários `then()` para continuar manipulando o resultado da Promise.

```javascript
let p = Promise.resolve(5);

console.log("Outros códigos");

console.log(p);

p.then((value) => {
    return value + 5;
})
.then((value) => {
    console.log(value);
});
```

### O que acontece?

1. A Promise começa com o valor `5`;
2. O primeiro `then()` recebe esse valor e retorna `10`;
3. O segundo `then()` recebe o novo valor e exibe no console.

### Resultado

```
Outros códigos
Promise {<fulfilled>: 5}
10
```

### Vantagens das Promises

- Melhor organização de código assíncrono;
- Evita excesso de callbacks (“callback hell”);
- Permite encadear ações assíncronas de forma mais limpa;
- Facilita tratamento de erros com `catch()`.

## 🔹 Falhas nas Promises

Uma Promise pode ser concluída com sucesso ou falhar.

Quando ocorre uma falha, utilizamos o método `catch()` para capturar e tratar o erro.

Isso é importante para:

- evitar que a aplicação quebre;
- exibir mensagens de erro;
- facilitar o debug;
- tratar exceções de operações assíncronas.

### Tratando erros com `catch()`

```javascript
let promiseErrada = Promise.resolve(new Error("Algo deu errado"));

promiseErrada
    .then((value) => console.log(value))
    .catch((reason) => console.log("Erro: " + reason));
```

### O que acontece?

- A Promise recebe um objeto de erro como valor, mas **não é rejeitada**;
- O `then()` executa e recebe esse objeto;
- O `catch()` **não** é executado, porque a Promise não foi rejeitada.

### Resultado

```
Error: Algo deu errado
    at ... (linhas do stack, que mostram onde o erro foi criado)
```

### Outro exemplo

```javascript
let p = Promise.resolve(new Error("Não deu certo"));

console.log("lalala");

p.then(value => console.log(value))
    .catch(reason => console.log("Falhou: " + reason));
```

### Resultado

```
lalala
Error: Não deu certo
    at ... (linhas do stack, que mostram onde o erro foi criado)
```

### Observação importante

O ideal para representar falhas em Promises é utilizar `Promise.reject()` em vez de `Promise.resolve(new Error())`.

Exemplo mais correto:

```javascript
let p = Promise.reject("Não deu certo");

p.catch(reason => console.log(reason));
```

### Resumo

- `then()` → executa quando a Promise é resolvida com sucesso;
- `catch()` → executa quando ocorre algum erro;
- Promises facilitam o tratamento de operações assíncronas e seus possíveis erros.

## 🔹 Rejeitando Promises

Além do método `resolve()`, as Promises também possuem o método `reject()`.

O `reject()` é utilizado quando alguma condição da lógica falha ou quando ocorre um erro durante a execução da Promise.

Enquanto:

- `resolve()` → indica sucesso;
- `reject()` → indica falha.

Ambos finalizam a Promise, ou seja, após chamar `resolve` ou `reject`, a Promise é encerrada.

### Exemplo

```javascript
function verificarNumero(num) {
    return new Promise((resolve, reject) => {

        if(num == 2) {
            resolve(`O número é ${num}`);
        } else {
            reject(new Error("Falhou"));
        }

    });
}

verificarNumero(2)
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log(erro));

verificarNumero(3)
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log(erro));
```

### O que acontece?

#### Quando o número é `2`

- A condição é verdadeira;
- O `resolve()` é executado;
- O `then()` recebe o resultado.

#### Quando o número é diferente de `2`

- A condição falha;
- O `reject()` é executado;
- O `catch()` captura o erro.

### Resultado

```
O número é 2
Error: Falhou
```

### Observação importante

No código original, o `console.log()` estava sendo executado dentro do `resolve()`:

```javascript
resolve(console.log("O número é 2"));
```

O mais recomendado é retornar apenas o valor no `resolve()` e tratar a exibição no `then()`.

Isso deixa o código mais organizado e reutilizável.

### Resumo

- `resolve()` → finaliza a Promise com sucesso;
- `reject()` → finaliza a Promise com erro;
- `then()` → trata sucesso;
- `catch()` → trata falhas;
- Após ser resolvida ou rejeitada, a Promise é encerrada.

## 🔹 Resolvendo várias Promises com `Promise.all()`

O método `Promise.all()` é utilizado quando precisamos executar várias Promises ao mesmo tempo e esperar que todas sejam concluídas.

Ele recebe um array de Promises e retorna uma nova Promise.

Essa nova Promise:

- será resolvida apenas quando todas as Promises forem concluídas;
- retornará um array com os resultados na mesma ordem das Promises enviadas;
- será rejeitada caso alguma das Promises falhe.

### Exemplo

```javascript
const p1 = new Promise(function(resolve, reject) {

    setTimeout(function() {
        resolve(100);
    }, 2500);

});

const p2 = Promise.resolve(5);

const p3 = new Promise(function(resolve, reject) {
    resolve(10);
});

Promise.all([p1, p2, p3])
    .then((values) => console.log(values));
```

### O que acontece?

- `p1` demora 2,5 segundos para resolver;
- `p2` resolve imediatamente com valor `5`;
- `p3` resolve imediatamente com valor `10`;
- O `Promise.all()` espera todas terminarem;
- Quando a última Promise for resolvida, os resultados serão retornados em um array.

### Resultado

```
[100, 5, 10]
```

### Outro exemplo

```javascript
const p1 = new Promise(function(resolve, reject) {

    setTimeout(function() {
        resolve(15);
    }, 5000);

});

const p2 = Promise.resolve(10);

const p3 = new Promise((resolve, reject) => {
    resolve(12);
});

Promise.all([p1, p2, p3])
    .then((values) => console.log(values));
```

### Resultado após 5 segundos

```
[15, 10, 12]
```

### Observação importante

Mesmo que algumas Promises sejam resolvidas rapidamente, o `Promise.all()` só retorna quando todas terminarem.

Ou seja:

- ele espera a Promise mais lenta finalizar;
- os resultados sempre respeitam a ordem do array original.

### Resumo

- `Promise.all()` executa várias Promises simultaneamente;
- recebe um array de Promises;
- retorna os resultados em um array;
- espera todas finalizarem;
- se uma falhar, toda a operação falha.

## 🔹 Async Functions

Podemos criar funções assíncronas utilizando a palavra reservada `async`.

Uma função `async` sempre retorna uma Promise, mesmo quando retornamos um valor simples.

### Funcionamento

- Se a função retornar um valor → a Promise será resolvida (`resolve`);
- Se ocorrer algum erro/exception → a Promise será rejeitada (`reject`).

### Exemplo básico

```javascript
async function somar(a, b) {
    return a + b;
}

somar(2, 2).then(function(value) {
    console.log(value);
});
```

### O que acontece?

- A função `somar()` retorna o valor `4`;
- Como ela é `async`, esse valor é automaticamente transformado em uma Promise resolvida;
- O `then()` recebe o resultado da Promise.

### Resultado

```
4
```

### Visualizando a Promise

```javascript
async function somar(a, b) {
    return a + b;
}

console.log(somar(2, 4));

somar(2, 4).then(value => console.log(value));
```

### Resultado

```
Promise {<fulfilled>: 6}
6
```

### Explicação

Quando fazemos:

```javascript
console.log(somar(2, 4));
```

o JavaScript mostra a Promise retornada pela função.

Já com o `then()`, conseguimos acessar o valor resolvido da Promise.

### Resumo

- `async` transforma uma função em assíncrona;
- Toda função `async` retorna uma Promise;
- `return` → resolve a Promise;
- `throw` ou erros → rejeitam a Promise;
- Podemos usar `then()` e `catch()` para tratar o resultado.

## 🔹 Await

Dentro de funções `async`, podemos utilizar a palavra reservada `await`.

O `await` faz o JavaScript esperar uma Promise ser resolvida antes de continuar a execução do código.

Isso deixa o código assíncrono mais parecido com código síncrono, facilitando a leitura e organização.

### Exemplo

```javascript
function somaComDelay(a, b) {

    return new Promise(resolve => {

        setTimeout(function() {
            resolve(a + b);
        }, 2000);

    });

}

async function soma(a, b, c, d) {

    let x = somaComDelay(a, b);
    let y = somaComDelay(c, d);

    return await x + await y;

}

soma(2, 4, 6, 8)
    .then(resultado => console.log(resultado));
```

### O que acontece?

#### `somaComDelay()`

- retorna uma Promise;
- espera 2 segundos;
- depois resolve a soma dos valores.

#### Dentro da função `async`

- `x` recebe uma Promise;
- `y` recebe outra Promise;
- o `await` espera cada Promise terminar;
- após ambas resolverem, os resultados são somados.

### Resultado

```
20
```

Porque:

- `2 + 4 = 6`
- `6 + 8 = 14`
- `6 + 14 = 20`

### Outro exemplo

```javascript
function somaComDelay(a, b) {

    return new Promise(resolve => {

        setTimeout(function() {
            resolve(a + b);
        }, 4000);

    });

}

async function resSoma(a, b, c) {

    let x = somaComDelay(a, b);
    let y = c;

    return await x + y;

}

resSoma(1, 2, 3)
    .then(value => console.log(value));
```

### Resultado após 4 segundos

```
6
```

Porque:

- `1 + 2 = 3`
- `3 + 3 = 6`

### Observação importante

O `await`:

- só pode ser usado dentro de funções `async`;
- pausa apenas aquela função assíncrona;
- não trava toda a aplicação.

Enquanto o `await` espera a Promise resolver, o restante do JavaScript continua funcionando normalmente.

### Resumo

- `await` espera uma Promise ser resolvida;
- só funciona dentro de funções `async`;
- deixa o código assíncrono mais legível;
- facilita trabalhar com operações demoradas, como APIs e banco de dados.

## 🔹 Generators

Generators são funções especiais do JavaScript que podem pausar e continuar sua execução posteriormente.

Diferente de funções comuns, que executam tudo de uma vez, uma generator consegue “lembrar” do ponto onde parou.

Elas são definidas utilizando:

- `function*` → para criar a generator;
- `yield` → para pausar a execução e retornar um valor.

### Como funciona o `yield`

O `yield`:

- retorna um valor;
- pausa a execução da função;
- mantém o estado das variáveis salvo;
- permite continuar do mesmo ponto depois.

Cada vez que chamamos `.next()`, a execução continua até o próximo `yield`.

### Exemplo

```javascript
function* gerarId() {

    let id = 0;

    while(true) {
        yield id++;
    }

}

let criarId = gerarId();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
```

### Resultado

```
0
1
2
```

### O que acontece?

1. A generator começa com `id = 0`;
2. O primeiro `yield` retorna `0`;
3. A execução pausa;
4. Quando `.next()` é chamado novamente, ela continua de onde parou;
5. O valor de `id` permanece salvo.

### Exemplo completo

```javascript
function* gerarId() {

    let id = 0;

    while(true) {
        yield id++;
    }

}

let criarId = gerarId();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);

console.log(criarId.next());
```

### Resultado

```
0
1
2
3
4
{ value: 5, done: false }
```

### Entendendo o `.next()`

O método `.next()` retorna um objeto com:

```javascript
{
    value: valorRetornado,
    done: false
}
```

### Propriedades

- `value` → valor retornado pelo `yield`;
- `done` → informa se a generator terminou.

Como usamos `while(true)`, ela nunca termina, então `done` sempre será `false`.

### Generators x Promises

Generators e Promises têm algumas semelhanças:

- ambos permitem controlar execução;
- ambos trabalham com pausas e continuidade.

Mas eles têm objetivos diferentes:

| Generator | Promise |
|---|---|
| Controla execução da função | Trabalha com operações assíncronas |
| Usa `yield` | Usa `then`, `catch`, `async/await` |
| Pausa manualmente | Espera operações futuras |

### Resumo

- `function*` cria uma generator;
- `yield` pausa a execução;
- `.next()` continua a execução;
- generators mantêm o estado das variáveis;
- úteis para sequências, controle de fluxo e iterações personalizadas.
