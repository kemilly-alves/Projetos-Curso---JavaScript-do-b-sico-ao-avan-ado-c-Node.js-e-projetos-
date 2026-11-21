# Seção 23: JavaScript moderno (ES6)

## JavaScript ES6

### O que é ES6?

- Versão do JavaScript que trouxe diversos recursos modernos.
- Base para frameworks como **React**, **Vue** e **Angular**.
- Deixa o código mais limpo, organizado e produtivo.

### `let` e `const`

- `let`: variável que pode ter seu valor alterado.
- `const`: constante, não pode ser reatribuída.
- Ambas possuem **escopo de bloco**, evitando vazamento de variáveis.

### Arrow Functions (`=>`)

- Forma mais curta de escrever funções.
- Possuem comportamento diferente da `function` tradicional.
- O `this` é herdado do contexto (escopo) onde a função foi criada.

### `filter()`

- Método de array usado para **filtrar elementos**.
- Retorna **um novo array** contendo apenas os itens que atendem à condição.

**Exemplo:**

```javascript
const ativos = users.filter(user => user.active);
```

### `map()`

- Método de array usado para **transformar** os elementos.
- Retorna **um novo array** com os valores modificados.

**Exemplo:**

```javascript
const nomes = users.map(user => user.name);
```

### Template Literals

- Facilitam a criação e concatenação de strings.
- Utilizam crases (`` ` ``).
- Variáveis são inseridas com `${}`.

**Exemplo:**

```javascript
`Olá, ${nome}!`
```

### Destructuring

- Permite extrair valores de **objetos** e **arrays**.
- Deixa o código mais simples e legível.

**Exemplo:**

```javascript
const { nome, idade } = pessoa;
```

### Spread Operator (`...`)

- Copia ou une arrays e objetos.
- Muito usado para criar novos dados sem alterar os originais.

**Exemplo:**

```javascript
const novoArray = [...array];
const novoObjeto = { ...objeto };
```

### Classes

- Recurso para Programação Orientada a Objetos (POO).
- Permitem criar objetos com:
  - `constructor`
  - propriedades
  - métodos
- Antes do ES6 eram simuladas com **constructor functions**.

### Herança

- Permite uma classe herdar características de outra.
- Usa a palavra-chave `extends`.
- O `super()` chama o construtor da classe pai.

**Exemplo:**

```javascript
class Animal {}

class Cachorro extends Animal {
  constructor(nome) {
    super();
    this.nome = nome;
  }
}
```
