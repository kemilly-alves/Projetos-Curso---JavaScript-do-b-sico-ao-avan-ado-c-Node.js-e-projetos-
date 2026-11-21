# Seção 12: Debugs e erros no JavaScript

## 🐞 O que é Bug e Debug?

### 🔴 Bug

Um **bug** é um erro ou falha no sistema que faz com que ele não funcione como esperado.

👉 Pode ser causado por:

- erro de lógica
- regra de negócio incorreta
- problema de implementação
- falha de integração

### 🛠️ Debug

**Debug** é o processo de:

- identificar
- analisar
- corrigir bugs no código

👉 Também pode se referir ao uso de ferramentas para:

- acompanhar o fluxo do código
- inspecionar variáveis
- entender o comportamento da aplicação

### 💡 Tradução mental

- **Bug** → problema
- **Debug** → investigar e resolver o problema

### 🧠 Resumo

> Bug é o erro.
>
> Debug é o processo de encontrar e corrigir esse erro.

## ⚠️ Strict Mode

### 🧠 O que é?

O **Strict Mode** (`"use strict"`) é uma forma de deixar o JavaScript **mais rigoroso e seguro**, ajudando a evitar erros comuns.

### 📌 Como usar

Deve ser declarado no topo do arquivo ou da função:

```javascript
"use strict";
```

### 🚨 Exemplo do problema

```javascript
"use strict";

opa = 'teste'; // ❌ erro
```

👉 Aqui vai dar erro porque:

- a variável não foi declarada com `let`, `const` ou `var`

### ⚠️ Correção

```javascript
"use strict";

let opa = 'teste'; // ✔ correto
```

### 📌 O que o Strict Mode faz

- Evita variáveis globais acidentais
- Lança erros em situações silenciosas
- Impede práticas ruins
- Torna o código mais previsível

### ❗ Correção importante da sua anotação

Você disse:

> "não vai impedir/limitar nada"

👉 Isso não está totalmente correto

✔️ Ele **impede sim algumas coisas**, mas são coisas consideradas **ruins ou perigosas**

### 🧠 Exemplos do que ele bloqueia

- Criar variável sem declarar
- Duplicar parâmetros em função
- Usar palavras reservadas indevidamente
- Alterar propriedades não permitidas

### 💡 Tradução mental

> Strict Mode = “modo mais seguro do JavaScript”

### 🧠 Resumo

- Ativado com `"use strict"`
- Deixa o JS mais rigoroso
- Evita erros silenciosos
- Ajuda a escrever código melhor

## 🛠️ Método de Debug: `console.log`

### 🧠 O que é?

O `console.log` é um método muito utilizado para debug, ou seja, para ajudar a entender o que está acontecendo no código.

👉 Ele permite:

- visualizar valores de variáveis
- acompanhar o fluxo da execução
- identificar possíveis erros

### 📌 Exemplo

```javascript
let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2;
}

console.log(a);
```

👉 Aqui você consegue ver o valor de `a` após o `if`

### 🔁 Usando em loops

```javascript
for (let i = 0; i < b; i++) {
  a = a + 2;
  console.log(a);
}
```

👉 Mostra a evolução da variável `a` a cada repetição

### 🔍 Condicional final

```javascript
if (a > 10) {
  a = 25;
}
```

👉 Se `a` for maior que 10, seu valor será alterado para 25

### 💡 Dica prática

Você pode usar o `console.log` em qualquer parte do código para entender:

- se uma condição foi atendida
- qual valor uma variável possui naquele momento
- se um trecho do código está sendo executado

### 🧠 Tradução mental

> `console.log` = “me mostra o que está acontecendo aqui”

### 🧠 Resumo

- Ferramenta essencial de debug
- Exibe dados no console
- Ajuda a encontrar erros e entender o fluxo
- Muito usada no dia a dia

## 🛠️ Método de Debug: `debugger`

### 🧠 O que é?

O `debugger` é uma instrução que interrompe a execução do código no ponto onde ela é encontrada.

👉 Ele é usado para:

- analisar o estado da aplicação
- inspecionar variáveis
- entender o fluxo do código

### 📌 Exemplo

```javascript
let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2;
}

for (let i = 0; i < b; i++) {
  a = a + 2;
}

debugger;

if (a > 10) {
  a = 25;
}
```

### 🔍 O que acontece

Quando o código chega em:

```javascript
debugger;
```

👉 A execução é pausada (se o DevTools estiver aberto)

Nesse momento você pode:

- verificar valores das variáveis (`a`, `b`, `i`)
- executar o código linha por linha
- entender exatamente o que está acontecendo

### ⚠️ Importante

O `debugger` só funciona quando:

- o console do navegador está aberto (F12)
- ou você está usando ferramentas de debug (ex.: VS Code)

### 🔄 Fluxo do seu exemplo

1. `a = 1`, `b = 2`
2. entra no `if` → `a = 4`
3. loop executa 2 vezes → `a = 8`
4. `debugger` pausa aqui 👈
5. depois verifica `if (a > 10)` (não entra)

### 💡 Tradução mental

> `debugger` = “pausa aqui pra eu investigar”

### 🧠 Resumo

- Pausa o código em um ponto específico
- Permite análise detalhada
- Muito usado para debug mais avançado
- Ideal para entender problemas complexos

## 🛠️ Tratamento de input por função

### 🧠 O que é?

Como não temos controle sobre os dados que o usuário envia, é essencial **validar e tratar esses dados** antes de utilizá-los.

👉 Isso garante:

- funcionamento correto do sistema
- prevenção de erros
- maior segurança e confiabilidade

### 📌 Exemplo: tratamento de número

```javascript
function checarNumero(valor) {
  let resultado = Number(valor);

  if (Number.isNaN(resultado)) {
    return null;
  } else {
    return resultado;
  }
}

console.log(checarNumero(5));        // 5
console.log(checarNumero('teste'));  // null
```

### 🔍 Explicação

🔹 `Number(valor)`

Tenta converter o valor recebido para número

🔹 `Number.isNaN(resultado)`

Verifica se o resultado **não é um número válido**

🔹 Retorno da função

- ✔️ Se for número → retorna o valor convertido
- ❌ Se não for → retorna `null`

### 💡 Dica prática

Esse tipo de função pode ser reutilizado sempre que precisar validar entradas do usuário, como:

- formulários
- APIs
- inputs de sistema

### 💡 Tradução mental

> “Valida antes de usar”

### 🧠 Versão simplificada

```javascript
function checarNumero(valor) {
  let resultado = Number(valor);
  return Number.isNaN(resultado) ? null : resultado;
}
```

### 🧠 Resumo

- Sempre tratar dados de entrada
- Converter e validar valores
- Evitar erros no sistema
- Usar funções para reaproveitar lógica

## ⚠️ Exceptions (Exceções)

### 🧠 O que são?

**Exceptions (exceções)** são erros que podem ser **lançados manualmente** no código quando alguma condição não é atendida.

👉 Servem para:

- impedir execução incorreta
- sinalizar problemas
- forçar tratamento de erros

### 📌 Exemplo

```javascript
let a = 1;

if (a != 2) {
  throw new Error("O valor de a não pode ser 1");
}
```

### 🔍 O que acontece

- A condição é verdadeira (`a` é diferente de 2)
- O `throw` é executado
- O programa lança um erro e interrompe a execução

### ⚠️ Correção importante da sua anotação

Você disse:

> "as exceptions abortam o programa, só geram o erro"

👉 Melhor forma de entender:

✔️ Elas **interrompem o fluxo normal do código**

✔️ Mas **podem ser tratadas** (não precisam quebrar o sistema)

### 🧠 Como funciona o `throw`

```javascript
throw new Error("Mensagem de erro");
```

👉 Isso cria um erro personalizado

### 💡 Tradução mental

> throw = “para tudo, algo deu errado aqui”

### 🧠 Exemplo mais real

```javascript
function sacar(valor) {
  if (valor <= 0) {
    throw new Error("Valor inválido para saque");
  }

  return "Saque realizado";
}
```

### 🧠 Resumo

- `throw` lança um erro manualmente
- Interrompe a execução do código
- Usado para validar regras importantes
- Pode ser tratado depois (com try/catch)

## 🛠️ Try e Catch

### 🧠 O que é?

O `try...catch` é usado para tratar erros (exceptions) no código.

👉 Ele permite:

- tentar executar um código (`try`)
- capturar o erro caso aconteça (`catch`)
- evitar que o programa quebre

Não é só para debug, é para **tratamento de erros em produção também**

### 📌 Estrutura

```javascript
try {
  // código que pode dar erro
} catch (error) {
  // tratamento do erro
}
```

### 📌 Exemplo

```javascript
try {
  let c = a + b;
} catch (error) {
  console.log("Algo deu errado: " + error);
}
```

### 🔍 Resultado

```
Algo deu errado: ReferenceError: a is not defined
```

👉 Isso acontece porque `a` e `b` não foram definidos

### 🧠 Como funciona

1. O código dentro do `try` é executado
2. Se der erro → o fluxo vai para o `catch`
3. O erro é capturado na variável (`error`)

### 💡 Exemplo mais real

```javascript
function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("Não pode dividir por zero");
    }

    return a / b;
  } catch (error) {
    return error.message;
  }
}

console.log(dividir(10, 0));
```

### 🧠 Tradução mental

> try = “tenta executar”
>
> catch = “se der erro, trata aqui”

### 🧠 Resumo

- Evita que o sistema quebre com erros
- Permite tratar exceções
- Muito usado com `throw`
- Importante em sistemas reais

## 🔚 Finally

### 🧠 O que é?

O `finally` é um bloco que **sempre será executado**, independentemente do que acontecer no `try` ou `catch`.

👉 Ele executa:

- ✔️ se der erro
- ✔️ se não der erro

✔️ `finally` pode existir com:

- `try + catch + finally`
- `try + finally` (sem catch)

❌ **Mas nunca pode existir sozinho**

### 📌 Estrutura

```javascript
try {
  // código
} catch (error) {
  // tratamento de erro
} finally {
  // sempre executa
}
```

### 📌 Exemplo

```javascript
try {
  let c = a + b;
} catch (error) {
  console.log("Algo deu errado: " + error);
} finally {
  console.log("Executou");
}
```

### 🔍 O que acontece

- Como `a` e `b` não existem → cai no `catch`
- Mostra o erro no console
- Depois o `finally` é executado

👉 Saída:

```
Algo deu errado: ReferenceError...
Executou
```

### 💡 Quando usar `finally`

👉 Muito usado para:

- fechar conexões
- limpar recursos
- finalizar processos
- garantir execução de algo importante

### 🧠 Exemplo prático

```javascript
function abrirArquivo() {
  try {
    console.log("Abrindo arquivo...");
  } finally {
    console.log("Fechando arquivo...");
  }
}

abrirArquivo();
```

### 💡 Tradução mental

> finally = “independente do que acontecer, executa isso aqui”

### 🧠 Resumo

- Sempre executa
- Funciona com ou sem `catch`
- Usado para finalização/limpeza
- Garante execução de código importante

## ✅ Assertions

### 🧠 O que são?

**Assertions (verificações)** são usadas para garantir que o programa esteja em um estado válido e funcionando conforme o esperado.

👉 Elas validam condições importantes antes de continuar a execução.

### 📌 Para que servem?

- garantir regras do sistema
- evitar erros inesperados
- facilitar a identificação de problemas
- interromper a execução quando algo inválido acontece

### 📌 Exemplo

```javascript
function iterarArray(arr) {
  if (arr.length === 0) {
    throw new Error("O array precisa ter elementos");
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}
```

### 🔍 Explicação

- Verifica se o array está vazio
- Se estiver → lança um erro com `throw`
- Se não → percorre o array e imprime os valores

### 💡 Versão mais limpa

```javascript
function iterarArray(arr) {
  if (arr.length === 0) {
    throw new Error("O array precisa ter elementos");
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

### 💡 Tradução mental

> Assertion = “isso precisa ser verdadeiro para o código continuar”

### 🧠 Resumo

- São validações no código
- Garantem que condições importantes sejam atendidas
- Usam `throw` para interromper se necessário
- Muito utilizadas em regras de negócio
