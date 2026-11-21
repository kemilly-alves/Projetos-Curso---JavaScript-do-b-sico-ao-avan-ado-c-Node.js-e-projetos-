# Seção 13: Expressões Regulares

## 📌 O que são Expressões Regulares (Regex)?

- São uma forma de **identificar padrões dentro de uma string (texto)**
- Muito usadas para **validação e busca de dados**

## 🧠 Para que servem?

- Validar informações  
  → Ex: verificar se uma string contém **apenas números**
- Buscar padrões em textos  
  → Ex: encontrar e-mails, CPF, datas, etc
- Substituir partes de uma string

## ⚡ Por que usar Regex?

- Evita criar **funções complexas manualmente**
- Torna o código mais **curto e eficiente**
- Facilita trabalhar com **grandes volumes de texto**

## 🏷️ Outros nomes

- Também são chamadas de:
  - **Regex**
  - **RegExp (em JavaScript)**

## 💡 Resumão

> Expressões regulares são padrões usados para encontrar, validar ou manipular textos de forma eficiente.

## 📌 Criando Expressões Regulares

- No JavaScript, **expressões regulares são objetos**
- Elas são usadas para **definir padrões de busca em textos**

## 🛠️ Formas de criar uma Regex

Existem **duas formas principais**:

### 1️⃣ Usando construtor

```javascript
let reg1 = new RegExp("test");
```

- Forma mais “tradicional”
- Útil quando o padrão vem de **variáveis**

### 2️⃣ Usando literal (mais comum)

```javascript
let reg2 = /test/;
```

- Forma mais usada no dia a dia ✅
- Mais simples e legível

## ⚡ Diferença entre elas

| Forma | Quando usar |
|---|---|
| `new RegExp()` | Quando o padrão é dinâmico (vem de variável) |
| `/.../` | Quando o padrão é fixo |

## 💡 Exemplo prático

```javascript
let texto = "teste";

console.log(/test/.test(texto)); // true
```

👉 Aqui a regex `/test/` verifica se existe “test” dentro da string

## 🧠 Resumão

> Regex no JavaScript são objetos usados para encontrar padrões em textos e podem ser criadas com `new RegExp()` ou `/.../`.

## 📌 Verificando padrões com Regex

- Após definir um padrão com regex, usamos o método `.test()`
- Esse método serve para **verificar se o padrão existe em uma string**

## 🛠️ Método `.test()`

- Retorna:
  - `true` → quando encontra o padrão
  - `false` → quando não encontra

## 💻 Exemplo

```javascript
console.log(/testando/.test("ttttestandooooo")); // true
console.log(/testando/.test("asdtestasd")); // false
```

👉 Explicação:

- No primeiro caso, a palavra "testando" existe dentro da string → `true`
- No segundo, não existe exatamente "testando" → `false`

## 🧠 Resumão

> O método `.test()` verifica se um padrão definido por uma regex existe em uma string, retornando `true` ou `false`.

## 📌 Conjunto de caracteres

- Podemos definir um **conjunto de caracteres** usando `[]`
- A regex vai verificar se **algum dos caracteres dentro do colchete existe na string**

## 🛠️ Exemplos

```javascript
console.log(/[123]/.test("Existe 123 aqui?")); // true
console.log(/[0-9]/.test("O número 8 está presente aqui?")); // true
```

👉 Explicação:

- `[123]` → verifica se tem **1, 2 ou 3**
- `[0-9]` → verifica qualquer número de **0 até 9**

## ⚡ Intervalo com traço (-)

- O traço (`-`) define um intervalo

Ex:

- `[0-9]` → todos os números
- `[a-z]` → letras minúsculas
- `[A-Z]` → letras maiúsculas

## 📌 Caracteres especiais

| Símbolo | Significado |
|---|---|
| `\d` | Qualquer dígito (0-9) |
| `\w` | Caractere alfanumérico (letras + números + _) |
| `\s` | Espaço em branco |
| `\D` | Não é dígito |
| `\W` | Não é alfanumérico |
| `\S` | Não é espaço |
| `.` | Qualquer caractere (exceto quebra de linha) |

## 📌 Regex com caracteres especiais

Podemos usar esses símbolos para criar padrões mais específicos 👇

## 🛠️ Exemplo 1: Ano com 4 dígitos

```javascript
let ano = /\d\d\d\d/;

console.log(ano.test("05"));   // false
console.log(ano.test("2019")); // true
console.log(ano.test("abcd")); // false
```

👉 `\d\d\d\d` → exatamente 4 números

## 🛠️ Exemplo 2: Palavra com 3 caracteres

```javascript
let palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test("dia"));   // true
console.log(palavraTresLetras.test("ano"));   // true
console.log(palavraTresLetras.test("oi"));    // false
console.log(palavraTresLetras.test("teste")); // true
```

👉 Explicação:

- `\w\w\w` → procura **3 caracteres alfanuméricos seguidos**
- Em `"teste"` retorna `true` porque tem `"tes"`, `"est"`, etc.

## 🧠 Resumão

> Podemos usar `[]` para definir conjuntos de caracteres e símbolos especiais como `\d` e `\w` para criar padrões mais poderosos em regex.

## 📌 Operador NOT `^`

- Usado dentro de `[]` para **negar um conjunto de caracteres**
- Ou seja: ele aceita **tudo, exceto o que está dentro dos colchetes**

## 🛠️ Exemplo

```javascript
let semNumeros123 = /[^123]/;

console.log(semNumeros123.test("1112")); // false
console.log(semNumeros123.test("12"));   // false
console.log(semNumeros123.test("1"));    // false
console.log(semNumeros123.test("4"));    // true
```

👉 Explicação:

- `[^123]` → aceita qualquer coisa que **NÃO seja 1, 2 ou 3**
- Retorna `true` se encontrar pelo menos **um caractere fora desse conjunto**

## ⚠️ Atenção importante

- O `^` só funciona como negação dentro de `[]`
- Fora disso, ele tem outro significado (início da string — você vai ver depois)

## 📌 Operador PLUS `+`

- O `+` indica que o elemento pode aparecer:
  - **1 ou mais vezes**

## 🛠️ Exemplo

```javascript
let muitosDigitos = /\d+/;

console.log(muitosDigitos.test("123"));        // true
console.log(muitosDigitos.test("123456789"));  // true
console.log(muitosDigitos.test(""));           // false
```

👉 Explicação:

- `\d+` → um ou mais números
- String vazia não funciona porque precisa ter **pelo menos 1**

## 💡 Comparação rápida

| Regex | Significado |
|---|---|
| `\d` | 1 dígito |
| `\d+` | 1 ou mais dígitos |
| `\d*` | 0 ou mais dígitos |

## 🧠 Resumão

> `[^...]` nega um conjunto de caracteres, enquanto `+` indica repetição de 1 ou mais ocorrências.

## 📌 Operador `?` (opcional)

- O `?` torna o elemento anterior **opcional**
- Ou seja: ele pode aparecer **0 ou 1 vez**

## 🛠️ Exemplo

```javascript
let opcional = /Prova\s?\d?/;

console.log(opcional.test("Prova"));    // true
console.log(opcional.test("Prova 1"));  // true
console.log(opcional.test("Prova 2"));  // true
```

👉 Explicação:

- `\s?` → espaço opcional
- `\d?` → número opcional

✔️ Aceita:

- "Prova"
- "Prova 1"
- "Prova 2"

## 📌 Ocorrência precisa `{}`

- Usamos `{}` para definir **quantidade exata ou intervalo de repetições**

## 🛠️ Exemplo (telefone)

```javascript
let telefone = /\d{4,5}-\d{4}/;

console.log(telefone.test("4004-5050"));  // true
console.log(telefone.test("99999-8080")); // true
console.log(telefone.test("999-999"));    // false
console.log(telefone.test("9999-9"));     // false
```

## 💡 Explicação

- `\d{4,5}` → de **4 a 5 dígitos**
- `-` → hífen obrigatório
- `\d{4}` → exatamente **4 dígitos**

👉 Então o padrão é:

> 4 ou 5 números + "-" + 4 números

## 🧠 Resumão

> `?` torna um elemento opcional, enquanto `{}` define quantas vezes um padrão deve aparecer.

## 📌 Método `exec()`

- O método `.exec()` executa uma regex em uma string
- Ele retorna:
  - Um **objeto com informações da busca**
  - Ou `null` se não encontrar nada

## 🛠️ Exemplo

```javascript
let regex = /\d+/;

let teste = regex.exec("O número 100");

console.log(teste);
console.log(teste.index);
```

## 💡 O que ele retorna?

Se encontrar algo, retorna um array com infos:

- `teste[0]` → valor encontrado (ex: "100")
- `teste.index` → posição onde encontrou
- `teste.input` → string original

## 📌 Método `match()`

- O método `.match()` pertence à **string**
- Ele também executa uma regex

## 🛠️ Exemplo

```javascript
let teste = "O número 100".match(/\d+/);

console.log(teste);
console.log(teste.index);
```

## ⚡ Diferença entre `exec()` e `match()`

| Método | Onde é usado |
|---|---|
| `exec()` | no objeto Regex |
| `match()` | na String |

## 💡 Na prática

- Ambos fazem praticamente a mesma coisa nesse caso
- A diferença aparece mais quando usamos **flag `g` (global)** — você vai ver depois

## 🧠 Resumão

> `exec()` e `match()` servem para executar regex em uma string e retornar informações sobre o que foi encontrado.

## 📌 Choice Pattern (Operador OR `|`)

- O `|` na regex funciona como um **OU (OR)**
- Permite definir **múltiplas opções dentro de um mesmo padrão**

## 🛠️ Exemplo

```javascript
let frutas = /\d+ (bananas|maçã|laranjas)/;

console.log(frutas.test("10 bananas"));  // true
console.log(frutas.test("25 batatas"));  // false
console.log(frutas.test("8 laranjas"));  // true
```

## 💡 Explicação

- `\d+` → um ou mais números
- espaço → obrigatório
- `(bananas|maçã|laranjas)` → aceita qualquer uma dessas palavras

👉 Ou seja, o padrão é:

> número + espaço + uma das frutas definidas

## ⚠️ Atenção (importante)

- O `|` precisa estar dentro de `()` para agrupar corretamente

Exemplo:

```javascript
/teste|abc/
```

👉 Pode gerar resultados inesperados

✔️ Melhor forma:

```javascript
/(teste|abc)/
```

## 🧠 Resumão

> O `|` permite criar alternativas dentro da regex, funcionando como um “OU” entre padrões possíveis.

## 📌 Validação de domínio com Regex

- Podemos usar regex para validar se um domínio segue um padrão esperado

## 🛠️ Exemplo

```javascript
let validarDominio = /^(www\.)?\w+\.(com|com\.br)$/;

console.log(validarDominio.test("www.google.com"));
// true
console.log(validarDominio.test("www.teste"));
// false
console.log(validarDominio.test("teste.com"));
// true
console.log(validarDominio.test("www.horadecodar.com.br"));// true
```

## 💡 Explicação da Regex

- `^` → início da string
- `(www\.)?` → "www." opcional
- `\w+` → nome do domínio (letras, números ou _)
- `\.` → ponto literal
- `(com|com\.br)` → aceita `.com` ou `.com.br`
- `$` → fim da string

## ⚠️ Limitação importante

👉 Essa regex é **simplificada** e não cobre todos os casos reais

Exemplos que ela não aceita, mas são válidos:

- `meu-site.com` (tem hífen)
- `google.org` (outro domínio)
- `sub.site.com` (subdomínio)

## 🚀 Versão mais completa (nível mais real)

```javascript
let validarDominio = /^(www\.)?[a-zA-Z0-9-]+\.(com|com\.br|org|net)$/;
```

👉 Agora aceita:

- hífen
- mais tipos de domínio

## 🧠 Resumão

> Para validar domínios com regex, usamos `^` e `$`, escapamos o ponto (`\.`) e usamos agrupamento com `|` para permitir múltiplas opções.

## 📌 Validação de e-mail com Regex

- Podemos usar regex para verificar se um e-mail segue um padrão básico

## 🛠️ Versão melhorada

```javascript
let validarEmail = /^\w+@\w+\.\w+(\.\w+)?$/;

console.log(validarEmail.test("teste@email.com"));       // true
console.log(validarEmail.test("email@email"));           // false
console.log(validarEmail.test("ronaldo@yahoo.com.br"));  // true
console.log(validarEmail.test("email.com"));             // false
```

## 💡 Explicação

- `^` → início da string
- `\w+` → nome do usuário
- `@` → obrigatório
- `\w+` → nome do domínio
- `\.\w+` → extensão (.com)
- `(\.\w+)?` → permite uma extensão extra (.br)
- `$` → fim da string

## ⚠️ Limitações (muito importante)

👉 Essa regex ainda é **simplificada**, não cobre todos os casos reais

Exemplos válidos que podem falhar:

- `nome.sobrenome@email.com` (tem ponto no nome)
- `email+teste@gmail.com` (tem `+`)
- domínios mais complexos

## 🚀 Versão um pouco mais completa

```javascript
let validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
```

👉 Essa já é mais próxima do que se usa na prática

## 🧠 Resumão

> Regex pode validar e-mails, mas normalmente usamos versões simplificadas — validações 100% corretas são bem mais complexas.

## 📌 Validação de data de nascimento (dd/mm/aaaa)

- Podemos usar regex para validar o **formato de uma data**

## 🛠️ Exemplo

```javascript
let validarDataDeNasc = /^\d{2}\/\d{2}\/\d{4}$/;

console.log(validarDataDeNasc.test('25/12/2015')); // true
console.log(validarDataDeNasc.test('25/12/15'));   // false
console.log(validarDataDeNasc.test('2/2/2015'));   // false
console.log(validarDataDeNasc.test('30/02/1999')); // true
```

## 💡 Explicação da regex

- `^` → início da string
- `\d{2}` → dois dígitos (dia)
- `\/` → barra `/`
- `\d{2}` → dois dígitos (mês)
- `\/` → barra `/`
- `\d{4}` → quatro dígitos (ano)
- `$` → fim da string

## ⚠️ Limitação importante

👉 Essa regex valida apenas o **formato**, não a data real

Exemplo:

- `30/02/1999` → não existe ❌
- Mas a regex aceita → ✔️

## 🚀 Versão mais completa (melhor validação)

```javascript
let validarData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
```

👉 Agora:

- Dia: 01 a 31
- Mês: 01 a 12

## 🧠 Resumão

> Regex é ótima para validar o formato de datas, mas para validar datas reais (como fevereiro, anos bissextos, etc.), é necessário usar lógica com JavaScript.
