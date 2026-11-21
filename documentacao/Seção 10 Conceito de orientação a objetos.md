# Seção 10: Conceito de orientação a objetos

## 🧠 O que é Orientação a Objetos?

A **Orientação a Objetos (OO)** é um paradigma de programação que organiza o código em torno de **objetos**, que representam entidades do mundo real.

Esses objetos combinam:

- **dados** (atributos)
- **comportamentos** (métodos)

### 📌 Características

- Utiliza objetos como **principal estrutura do sistema**
- Aplica conceitos importantes como:
  - encapsulamento
  - herança
  - polimorfismo
  - abstração
- Facilita a organização, reutilização e manutenção do código

### 💻 Uso no mercado

A maioria dos sistemas, principalmente no **back-end**, são desenvolvidos utilizando orientação a objetos.

Diversos frameworks utilizam esse paradigma, como:

- Laravel
- Django

---

### 🧠 Resumo simples

Orientação a Objetos é uma forma de programar baseada na criação e interação de objetos que representam coisas do mundo real.

---

## ⚙️ Métodos

Métodos são **funções que pertencem a um objeto**.

Ou seja:

👉 representam as ações que um objeto pode executar

### 📌 Exemplo simples

```javascript
let cachorro = {
  latir: function() {
    console.log("Au au");
  }
}

cachorro.latir();
```

✔ Aqui:

- `latir` é um método
- Ele é chamado como uma função, mas pertence ao objeto `cachorro`

### 🧠 Mais sobre métodos

Normalmente, os métodos:

- interagem com o próprio objeto
- podem alterar valores das propriedades
- ajudam a manter a lógica organizada

**💡 Tradução mental (guarda isso)**

Método = função dentro de um objeto

### 📌 Exemplo com alteração de dados

```javascript
let pessoa = {
  nome: '',
  
  setNome: function(novoNome) {
    this.nome = novoNome;
  }
}
```

### 🔍 Explicando

- `this.nome` → acessa a propriedade do próprio objeto
- `setNome` → método que altera o nome

### ▶️ Usando o método

```javascript
pessoa.setNome("Matheus");
```

### ⚠️ Correção importante no seu código

Você tentou usar:

```javascript
console.log(pessoa.getNome());
```

❌ Mas o método `getNome` não existe ainda

### ✅ Versão corrigida (com getNome)

```javascript
let pessoa = {
  nome: '',
  
  setNome: function(novoNome) {
    this.nome = novoNome;
  },
  getNome: function() {
    return this.nome;
  }
}

pessoa.setNome("Matheus");
console.log(pessoa.getNome());
```

### 🧠 Resumo

- Método = função dentro do objeto
- Serve para representar ações
- Pode acessar/modificar dados com `this`

---

## 🧠 Prototypes (Protótipos)

O **prototype** é um mecanismo do JavaScript que permite que um objeto **herde propriedades e métodos de outro objeto**.

👉 Pense assim:

> É como um "objeto base" que serve de referência quando algo não é encontrado.

### 📌 Como funciona

Quando você tenta acessar uma propriedade:

1. O JavaScript procura no próprio objeto
2. Se não encontrar, ele procura no **prototype**
3. Continua subindo na cadeia até encontrar ou retornar `undefined`

### 📌 Exemplo básico

```javascript
let pessoa = {
  maos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
```

🔍 **Explicação**

Todo objeto criado "do zero" herda de:

👉 `Object.prototype`

Esse prototype contém métodos nativos como:

- `toString()`
- `hasOwnProperty()`

### 🧠 Mais sobre Prototypes

Quando criamos um objeto a partir de outro:

👉 o objeto original vira o prototype do novo objeto

### 📌 Exemplo com herança

```javascript
let pessoa = {
  maos: 2
}

let pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos); // 2
console.log(Object.getPrototypeOf(pessoaNova) === pessoa); // true
```

🔍 **O que aconteceu**

- `pessoaNova` NÃO tem `maos`
- Mas o JavaScript encontra isso no prototype (`pessoa`)

### 🔎 Propriedade própria vs herdada

```javascript
console.log(pessoaNova.hasOwnProperty('maos')); // false
```

👉 Isso significa:

- `maos` não pertence diretamente a `pessoaNova`
- Ela vem do prototype

### 🧩 Métodos importantes

**🔹 `Object.getPrototypeOf(obj)`**

Retorna o prototype do objeto

**🔹 `Object.prototype`**

É o "pai padrão" de todos os objetos

**🔹 `hasOwnProperty()`**

Verifica se a propriedade:

✔ pertence ao objeto
❌ não veio por herança

### 🧠 Resumo simples

- Todo objeto tem um prototype
- Se algo não é encontrado → ele procura no prototype
- Isso forma a chamada:

👉 **cadeia de protótipos (prototype chain)**

**💡 Tradução mental**

Prototype = "de onde o objeto herda comportamento"

### 🔎 `obj.hasOwnProperty('propriedade')`

Esse método verifica se uma propriedade pertence diretamente ao objeto.

### ✅ Retornos

✔️ `true` → quando a propriedade é do próprio objeto
❌ `false` → quando a propriedade vem do prototype

### 📌 Exemplo prático

```javascript
let pessoa = {
  nome: "Kemilly"
}

let pessoaNova = Object.create(pessoa);

console.log(pessoaNova.nome); // "Kemilly"
console.log(pessoaNova.hasOwnProperty('nome')); // false
```

🔍 **Explicação**

- `pessoaNova` NÃO tem `nome`
- Mas herda de `pessoa` (prototype)

👉 Por isso:

- consegue acessar → `"Kemilly"`
- mas `hasOwnProperty` retorna → `false`

### 🧠 Outro exemplo

```javascript
let carro = {
  modelo: "Civic"
}

console.log(carro.hasOwnProperty('modelo')); // true
```

👉 Aqui a propriedade é própria do objeto

**💡 Tradução mental**

hasOwnProperty = "isso é meu ou eu herdei?"

### 🧠 Resumo

Serve para diferenciar:

- propriedade própria
- propriedade herdada

Muito usado em validações e loops

---

## 🧱 Classes em JavaScript

### 🧠 O que são Classes?

Classes são uma forma de criar objetos com o mesmo padrão (estrutura e comportamento).

👉 Por baixo dos panos, o JavaScript usa prototypes, mas a `class` deixa o código mais fácil de entender.

**💡 Tradução simples**

Classe = molde para criar objetos

> 📌 Os exemplos de código desta seção são independentes: a classe `Cachorro` aparece declarada em vários blocos, então rode um bloco de cada vez.

### 📌 Quando usar class

👉 Use quando:

- precisa criar vários objetos parecidos
- quer organizar melhor o código
- tem propriedades + métodos

### 🔄 Relação com Prototype

Antes do ES6, tudo era feito com prototype.

👉 Ou seja:

- `class` é só uma forma mais moderna e organizada
- continua usando prototype por trás

### 🐶 Exemplo com prototype (antigo)

```javascript
let cachorro = {
  raca: 'SRD',
}

let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = 'Pastor Alemão';

console.log(pastorAlemao.raca);
```

### ⚙️ Construtor por função

**🧠 O que é?**

Função que cria objetos

👉 Instanciar = criar um novo objeto

```javascript
function criarCachorro(raca) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  return cachorro;
}

let doberman = criarCachorro('Doberman');
console.log(doberman.raca);
```

### ⚙️ Construtor com new

```javascript
function Cachorro(raca) {
  this.raca = raca;
}

let husky = new Cachorro('Husky');
console.log(husky.raca);
```

👉 `new`:

- cria um objeto
- liga ao prototype
- retorna automaticamente

### ⚙️ Adicionando métodos (prototype)

```javascript
function Cachorro(raca) {
  this.raca = raca;
}

Cachorro.prototype.uivar = function() {
  console.log('Auuuu');
}

let pug = new Cachorro('Pug');
console.log(pug.raca);
pug.uivar();
```

### 🚀 Classes (ES6 - forma moderna)

```javascript
class Cachorro {
  constructor(raca) {
    this.raca = raca;
  }

  latir() {
    console.log("Au au");
  }
}

let labrador = new Cachorro('Labrador');
console.log(labrador.raca);
labrador.latir();
```

### 🧠 Mais sobre classes

**❗ Sobre propriedades e métodos**

- Métodos → ficam no prototype automaticamente
- Propriedades → ficam no objeto (`this`)

👉 Você PODE adicionar coisas no prototype:

```javascript
Cachorro.prototype.patas = 4;

let dog = new Cachorro('Vira-lata');
console.log(dog.patas); // 4
```

**💡 Explicação:**

`Cachorro.prototype.patas = 4` → adiciona a propriedade no prototype, não no objeto `dog`

`dog.patas` funciona porque o JS faz isso:

1. Procura `patas` dentro de `dog`
2. Não acha ❌
3. Vai no `prototype` de `Cachorro` ✅
4. Encontra `patas = 4`

**🧠 Em outras palavras:**

✔️ Você está definindo uma propriedade compartilhada
✔️ Todas as instâncias vão enxergar essa propriedade
❌ Mas ela **não está dentro do objeto em si**

### 🧠 Resumo final

- `class` é um jeito moderno de usar prototype
- Serve pra criar vários objetos com o mesmo padrão
- `constructor` define os dados
- métodos definem comportamentos

**💡 Tradução mental**

Classe = molde
Objeto = instância desse molde

### 🧠 Override nas propriedades do Prototype

👉 **Quando você adiciona uma propriedade ao objeto, o objeto passa a ter sua própria propriedade, e ela sobrescreve (override) a do prototype na leitura.**

**💡 Como funciona de verdade**

1. O JS procura a propriedade no objeto
2. Se não achar → procura no prototype

👉 Mas se existir nos dois:

o objeto tem prioridade

### 📌 Exemplo corrigido

```javascript
class Cachorro {
  constructor(raca) {
    this.raca = raca;
  }
}

Cachorro.prototype.raca = 'SRD';

let poodle = new Cachorro('Poodle');
console.log(poodle.raca); // "Poodle"
```

🔍 **O que aconteceu**

- `Cachorro.prototype.raca = 'SRD'` → valor padrão
- `this.raca = 'Poodle'` → cria no objeto

👉 Resultado:

o objeto sobrescreve o prototype

### 🧪 Testando o comportamento

```javascript
console.log(poodle.hasOwnProperty('raca')); // true
```

👉 Isso mostra que:

`raca` pertence ao objeto, não ao prototype

### 🧠 Exemplo sem override

```javascript
class Cachorro {}

Cachorro.prototype.raca = 'SRD';

let dog = new Cachorro();
console.log(dog.raca); // "SRD"
```

👉 Aqui:

- como não existe no objeto
- ele usa o prototype

### 🧠 Resumo simples

- Prototype = valor padrão
- Objeto pode sobrescrever esse valor
- JS sempre prioriza o objeto

**💡 Tradução mental**

"Se o objeto tem, usa dele.
Se não tem, pega do prototype."

---

## 🔑 Symbols

### 🧠 O que são Symbols?

Symbol é um **tipo primitivo** do JavaScript usado para criar **identificadores únicos**.

👉 Ou seja:

Cada Symbol é sempre único, mesmo que tenha o mesmo nome

### 📌 Características

- São únicos (não existem dois iguais)
- São muito usados como chaves de propriedades
- Evitam conflitos e sobrescritas acidentais
- Não aparecem em loops comuns (`for...in`, `Object.keys`)
- O Symbol é único, mas o valor associado a ele pode ser alterado

### 📌 Exemplo básico

```javascript
let s1 = Symbol();
let s2 = Symbol();

console.log(s1 === s2); // false
```

👉 Mesmo sem nome, são diferentes

### 🐶 Exemplo com objeto (corrigido)

```javascript
class Cachorro {
  constructor(raca) {
    this.raca = raca;
  }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let golden = new Cachorro('Golden Retriever');

console.log(golden[patas]); // 4
```

🔍 **O que está acontecendo**

- `patas` é um Symbol → chave única
- Adicionamos no prototype
- O objeto herda essa propriedade

👉 Mas ela não entra em conflitos com outras propriedades

### 🧪 Testando comportamento

```javascript
console.log(Object.keys(golden)); // não mostra Symbol
```

👉 Symbols ficam "escondidos" de listagens comuns

### 🧠 Quando usar Symbol

👉 Use quando:

- quer evitar sobrescrita de propriedades
- precisa de uma chave única
- está criando bibliotecas ou estruturas internas

**💡 Tradução mental**

Symbol = chave secreta e única dentro do objeto

### 🧠 Resumo

- Symbol cria identificadores únicos
- Muito usado como chave de objeto
- Evita conflitos
- Não aparece facilmente em loops

---

## 🔄 Getters e Setters

### 🧠 O que são?

- `get` → serve para **obter (ler)** o valor de uma propriedade
- `set` → serve para **alterar (definir)** o valor de uma propriedade

👉 Funcionam como propriedades, mas executam lógica por trás

### 📌 Exemplo

```javascript
class Cachorro {
  constructor(raca) {
    this.raca = raca;
  }

  get verRaca() {
    return 'A raça é ' + this.raca;
  }

  set novaRaca(value) {
    this.raca = value;
  }
}

let golden = new Cachorro('Pastor Alemão');

console.log(golden.verRaca); // A raça é Pastor Alemão

golden.novaRaca = 'Golden Retriever';

console.log(golden.verRaca); // A raça é Golden Retriever
```

**💡 Tradução mental**

- `get` = ler como se fosse variável
- `set` = alterar como se fosse variável

---

## 🧬 Herança (Inheritance)

### 🧠 O que é?

Permite que uma classe herde propriedades e métodos de outra.

### 📌 Conceitos

- `extends` → cria herança
- `super` → chama o construtor da classe pai

### 📌 Exemplo

```javascript
class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas); // chama o construtor da classe pai
    this.raca = raca;
  }
}

let pug = new Cachorro(4, 'Pug');
console.log(pug);
```

### 🧠 Resumo

- Filho herda do pai
- `extends` cria essa relação
- `super()` inicializa o pai

---

## 🔎 instanceof

### 🧠 O que faz?

Verifica se um objeto:

- pertence a uma classe
- ou herda dela

### 📌 Exemplo corrigido

```javascript
console.log(new Cachorro(4, 'Pug') instanceof Mamifero); // true
```

**💡 Quando usar**

- `typeof` → tipos primitivos (string, number, etc.)
- `instanceof` → objetos e classes

**🧠 Tradução mental**

instanceof = "isso veio dessa classe?"

### 🧠 Resumo geral

- `get`/`set` → controlar leitura e escrita
- `extends`/`super` → herança entre classes
- `instanceof` → verificar tipo de objeto
