# Seção 17: Eventos com JavaScript

## 🔹 Eventos em JavaScript

### O que são Eventos?

#### Conceito

Eventos são ações realizadas pelo usuário ou pelo navegador que podem disparar a execução de um código JavaScript.

Essas ações podem ser:

- Clique do mouse
- Pressionar teclas
- Movimento do mouse
- Envio de formulários
- Carregamento da página
- Rolagem da tela (scroll)

O JavaScript permite associar funções a esses eventos para executar ações específicas.

### O que são Event Handlers?

#### Conceito

Event Handlers são funções executadas quando um determinado evento ocorre.

Exemplo:

Quando o usuário clicar em um botão, uma função será executada.

```javascript
function mensagem() {
    console.log("Botão clicado!");
}
```

## 🔹 Adicionando Eventos

### `addEventListener()`

#### O que faz?

Associa um evento a um elemento HTML.

#### Sintaxe

```javascript
elemento.addEventListener("evento", funcao);
```

#### Parâmetros

- `evento` → tipo do evento (`click`, `keyup`, `mousemove`, etc.)
- `função` → código executado quando o evento ocorrer

#### Exemplo

```javascript
let btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    console.log("Clicou!");
});
```

#### Resultado

Quando o usuário clicar no botão:

```text
Clicou!
```

será exibido no console.

#### Exemplo usando função separada

```javascript
let btn = document.querySelector("#btn");
function mensagem() {
    console.log("Botão clicado!");
}
btn.addEventListener("click", mensagem);
```

📌 Essa abordagem facilita a reutilização e remoção do evento posteriormente.

## 🔹 Removendo Eventos

### `removeEventListener()`

#### O que faz?

Remove um evento previamente adicionado.

#### Sintaxe

```javascript
elemento.removeEventListener("evento", funcao);
```

⚠️ A função utilizada deve ser a mesma que foi passada para o `addEventListener`.

#### Exemplo

```javascript
let btn = document.querySelector("#btn");
function msg() {
    console.log("Clicou!");
}
btn.addEventListener("click", msg);
setTimeout(function() {
    btn.removeEventListener("click", msg);
}, 3000);
```

#### Resultado

- Durante 3 segundos o botão responde ao clique.
- Após 3 segundos o evento é removido.
- Clicar no botão não executará mais a função.

## 🔹 Eventos Mais Utilizados

| Evento | Descrição |
|---|---|
| click | Clique do mouse |
| dblclick | Duplo clique |
| mousedown | Botão do mouse pressionado |
| mouseup | Botão do mouse liberado |
| mousemove | Movimento do mouse |
| keydown | Tecla pressionada |
| keyup | Tecla liberada |
| submit | Envio de formulário |
| focus | Campo recebe foco |
| blur | Campo perde foco |
| change | Valor alterado |
| scroll | Rolagem da página |
| load | Página carregada |

### Fluxo de Funcionamento

```text
Usuário realiza uma ação
        ↓
Evento é disparado
        ↓
addEventListener detecta o evento
        ↓
Função associada é executada
```

## 🔹 Resumo Rápido

| Método | Função |
|---|---|
| addEventListener() | Adiciona um evento |
| removeEventListener() | Remove um evento |
| click | Detecta clique |
| keydown | Detecta tecla pressionada |
| submit | Detecta envio de formulário |

### Como lembrar?

- addEventListener → adiciona um ouvinte de evento.
- removeEventListener → remove o ouvinte.
- Evento → ação realizada pelo usuário.
- Handler → função executada quando o evento ocorre.

## 🔹 O Objeto do Evento (Event Object)

### O que é?

Quando um evento é disparado, o JavaScript cria automaticamente um objeto contendo informações sobre esse evento.

Esse objeto é normalmente representado pela variável `e` ou `event`.

### Informações disponíveis

O objeto de evento contém diversas propriedades, como:

- Elemento que disparou o evento
- Tipo do evento
- Tecla pressionada
- Posição do mouse
- Entre outras informações

### Exemplo

```javascript
function msg(e) {
    console.log(e);
}
let btn = document.querySelector("#btn");
btn.addEventListener("click", msg);
```

#### Resultado

Ao clicar no botão, o navegador exibirá um objeto contendo informações detalhadas sobre o clique.

### Propriedades Comuns

#### Tipo do evento

```javascript
function msg(e) {
    console.log(e.type);
}
```

Resultado:

```text
click
```

#### Elemento que disparou o evento

```javascript
function msg(e) {
    console.log(e.target);
}
```

Resultado:

```text
<button>Enviar</button>
```

## 🔹 Propagação de Eventos (Event Bubbling)

### O que é?

Quando um elemento está dentro de outro elemento e ambos possuem eventos, o evento pode "subir" para os elementos pais.

Esse comportamento é chamado de propagação de eventos (event bubbling).

### Exemplo

HTML:

```html
<p>
    Texto
    <button>Clique</button>
</p>
```

JavaScript:

```javascript
let p = document.querySelector("p");
let btn = document.querySelector("button");
p.addEventListener("click", function() {
    console.log("Clique no parágrafo");
});
btn.addEventListener("click", function() {
    console.log("Clique no botão");
});
```

#### Resultado

Ao clicar no botão:

```text
Clique no botão
Clique no parágrafo
```

📌 O clique ocorre primeiro no botão e depois é propagado para o elemento pai.

### `stopPropagation()`

#### O que faz?

Impede que o evento continue sendo propagado para os elementos pais.

#### Exemplo

```javascript
let p = document.querySelector("p");
let btn = document.querySelector("button");
p.addEventListener("click", function() {
    console.log("Clique no parágrafo");
});
btn.addEventListener("click", function(e) {
    e.stopPropagation();
    console.log("Clique no botão");
});
```

#### Resultado

Ao clicar no botão:

```text
Clique no botão
```

📌 O evento não será propagado para o parágrafo.

## 🔹 Ações Padrão (Default Actions)

### O que são?

Muitos elementos HTML possuem comportamentos padrões definidos pelo navegador.

Exemplos:

| Elemento | Ação Padrão |
|---|---|
| `<a>` | Navegar para outra página |
| `<form>` | Enviar formulário |
| Checkbox | Marcar/Desmarcar |
| Botão Submit | Submeter formulário |

### `preventDefault()`

#### O que faz?

Impede a execução da ação padrão do navegador.

#### Sintaxe

```javascript
e.preventDefault();
```

#### Exemplo

HTML:

```html
<a href="https://google.com">Google</a>
```

JavaScript:

```javascript
let a = document.querySelector("a");
a.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Clicou, mas não mudou de página");
});
```

#### Resultado

Ao clicar no link:

```text
Clicou, mas não mudou de página
```

📌 O usuário continua na mesma página porque a navegação foi cancelada.

### Quando Utilizar preventDefault()

#### Formulários

Evitar que a página recarregue:

```javascript
form.addEventListener("submit", function(e) {
    e.preventDefault();

    console.log("Validando formulário...");
});
```

#### Links

Executar lógica personalizada antes da navegação:

```javascript
e.preventDefault();
```

### Resumo Rápido

| Método/Propriedade | Função |
|---|---|
| `e` | Objeto do evento |
| `e.target` | Elemento que disparou o evento |
| `e.type` | Tipo do evento |
| `stopPropagation()` | Impede a propagação do evento |
| `preventDefault()` | Impede a ação padrão do navegador |

### Como lembrar?

- event (e) → informações sobre o evento.
- target → quem disparou o evento.
- stopPropagation → para a propagação.
- preventDefault → cancela o comportamento padrão.

## 🔹 Eventos de Tecla (Key Events)

Os eventos de teclado permitem executar ações sempre que uma tecla é pressionada ou liberada pelo usuário.

### Principais Eventos

#### keydown

É disparado quando uma tecla é pressionada.

#### keyup

É disparado quando uma tecla é liberada após ser pressionada.

Sempre que uma tecla é utilizada, os eventos `keydown` e `keyup` podem ser acionados em momentos diferentes da interação.

### Objeto do Evento

O objeto de evento (`e`) contém diversas informações sobre a tecla pressionada, como a propriedade `key`, que retorna o valor da tecla utilizada.

### Exemplo

```javascript
window.addEventListener("keydown", function (e) {
  if (e.key === "v") {
    console.log("Apertou a letra V");
  }
});
```

### Explicação do Código

- `window.addEventListener()` adiciona um ouvinte de evento à janela.
- `"keydown"` monitora quando uma tecla é pressionada.
- `e.key` retorna a tecla utilizada pelo usuário.
- O `if` verifica se a tecla pressionada foi a letra `"v"`.

Caso seja, a mensagem será exibida no console.

### Casos de Uso

- Atalhos de teclado.
- Navegação por teclado.
- Jogos.
- Validação de entrada de dados.
- Captura de comandos do usuário.

## 🔹 Outros Eventos de Mouse

Além do evento `click`, o mouse possui outros eventos importantes:

- `mousedown`: disparado quando o botão do mouse é pressionado.
- `mouseup`: disparado quando o botão do mouse é solto.
- `dblclick`: disparado quando ocorre um clique duplo.
- `contextmenu`: disparado ao clicar com o botão direito do mouse.

### Exemplo

```javascript
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
btn1.addEventListener("mousedown", function() {
    console.log("Apertou o botão");
});
btn1.addEventListener("mouseup", function() {
    console.log("Soltou o botão");
});
btn2.addEventListener("dblclick", function() {
    console.log("Clicou duas vezes");
});
btn2.addEventListener("contextmenu", function(e) {
    e.preventDefault(); // Impede a abertura do menu padrão do navegador
    console.log("Botão direito pressionado");
});
```

## 🔹 Movimento do Mouse

Também é possível executar ações conforme o usuário movimenta o mouse pela tela.

O evento utilizado é o `mousemove`.

Com ele, podemos capturar a posição atual do cursor através das propriedades `x` e `y` do objeto de evento.

### Exemplo

```javascript
window.addEventListener("mousemove", function(e) {
    console.log(e.x);
    console.log(e.y);
});
```

## 🔹 Eventos de Scroll

Podemos associar eventos à rolagem da página utilizando o evento `scroll`.

Esse recurso é muito útil para:

- Exibir elementos quando o usuário rolar a página.
- Criar animações.
- Implementar menus fixos.
- Carregar conteúdo dinamicamente.

### Exemplo

```javascript
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
        console.log("Chegou na posição desejada");
    }
});
```

### Observação

`window.pageYOffset` retorna a quantidade de pixels que a página foi rolada verticalmente.

## 🔹 Eventos de Foco

Os eventos de foco permitem detectar quando um elemento recebe ou perde foco.

- `focus`: disparado quando o elemento recebe foco.
- `blur`: disparado quando o elemento perde foco.

Esses eventos são muito utilizados em formulários.

### Exemplo

```javascript
let input = document.querySelector("input");
input.addEventListener("focus", function() {
    console.log("Campo recebeu foco");
});
input.addEventListener("blur", function() {
    console.log("Campo perdeu o foco");
});
```

## 🔹 Evento de Carregamento da Página

Podemos executar ações quando a página termina de carregar utilizando o evento `load`.

Também é possível detectar quando o usuário está prestes a sair da página através do evento `beforeunload`.

### Exemplo

```javascript
window.addEventListener("load", function() {
    console.log("Página carregada");
});
window.addEventListener("beforeunload", function(e) {
    console.log("Usuário está saindo da página");
});
```

## 🔹 Debounce

Alguns eventos podem ser disparados dezenas ou até centenas de vezes por segundo, como:

- `scroll`
- `mousemove`
- `resize`

Executar uma função a cada disparo pode impactar o desempenho da aplicação.

Para evitar isso, utilizamos o Debounce, uma técnica que atrasa a execução da função até que o evento pare de ser disparado por um determinado período.

### Exemplo

```javascript
let timeout;
window.addEventListener("mousemove", function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log("Debounce executado");
    }, 500);
});
```

### Como funciona?

1. O evento é disparado.
2. O timer anterior é cancelado.
3. Um novo timer é iniciado.
4. A função só será executada quando o usuário parar de movimentar o mouse por 500ms.

Isso reduz a quantidade de execuções e melhora a performance da aplicação.
