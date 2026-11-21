# Seção 20: Aprendendo Node.js

## 🔹 O que é Node.js?

- Não é uma linguagem de programação.
- É um ambiente de execução (runtime) que permite executar JavaScript fora do navegador.
- Foi construído sobre a engine V8 do Google Chrome.
- É utilizado para criar aplicações rápidas e escaláveis.

### Problema dos servidores tradicionais

Em tecnologias como PHP, cada conexão pode consumir mais recursos do servidor.

### Como o Node.js resolve isso?

O Node.js trabalha com uma arquitetura orientada a eventos (Event Loop).

- Cada conexão é tratada como um evento.
- Consome menos memória.
- Consegue lidar com muitas conexões simultâneas.

✅ Muito utilizado para APIs, sistemas em tempo real, chats e aplicações web.

## 🔹 Instalando o Node.js

### Windows

1. Acesse o site oficial.
2. Baixe a versão LTS.
3. Execute o instalador.
4. Clique em Next → Next → Finish.

### Linux (Ubuntu)

```bash
sudo apt install nodejs
sudo apt install npm
```

### Verificando a instalação

```bash
node -v
npm -v
```

## 🔹 Executando JavaScript com Node

Crie um arquivo:

```javascript
let msg = "Hello World!";

console.log(msg);
```

Execute:

```bash
node test.js
```

Resultado:

```text
Hello World!
```

## 🔹 Comando Node (Modo Interativo)

Podemos executar JavaScript diretamente no terminal.

```bash
node
```

Exemplos:

```javascript
1 + 1
```

Resultado:

```text
2
```

```javascript
console.log("Teste");
```

Resultado:

```text
Teste
```

Para sair:

```bash
.exit
```

## 🔹 NPM (Node Package Manager)

Gerenciador de pacotes do Node.js.

Serve para instalar bibliotecas e dependências para o projeto.

### Instalar um pacote

```bash
npm install nome-do-pacote
```

Exemplo:

```bash
npm install express
```

O npm já vem instalado junto com o Node.js.

## 🔹 Iniciando um Projeto Node

Criar um projeto:

```bash
npm init
```

Ou:

```bash
npm init -y
```

Isso gera o arquivo:

```text
package.json
```

### O que é o package.json?

Arquivo responsável por:

- Informações do projeto
- Dependências instaladas
- Scripts
- Versão da aplicação

## 🔹 Módulo File System (fs)

Módulo nativo do Node.js para manipular arquivos e diretórios.

Não precisa instalar.

### Lendo um arquivo

```javascript
const { readFile } = require("fs");

readFile("arquivo.txt", "utf8", (error, texto) => {
    if(error){
        throw error;
    }

    console.log(texto);
});
```

## 🔹 Escrevendo em Arquivos

```javascript
const { writeFile } = require("fs");

writeFile("arquivo.txt", "Inserir este texto", (error) => {
    if(error){
        console.log(error);
    } else {
        console.log("Arquivo atualizado!");
    }
});
```

## 🔹 Módulo HTTP

Módulo nativo para criar servidores web.

Não precisa instalar.

### Criando um servidor

```javascript
const { createServer } = require("http");

const server = createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    response.write(`
        <h1>Hello World!</h1>
        <p>Primeira página com Node.js</p>
    `);

    response.end();
});

server.listen(8000);
console.log("Servidor rodando na porta 8000");
```

Acesse:

```text
http://localhost:8000
```

## 🔹 O que é uma API?

API = Application Programming Interface

Permite que sistemas se comuniquem através de requisições HTTP.

Operações comuns:

- Consultar dados
- Criar dados
- Atualizar dados
- Excluir dados

Exemplos de aplicações que usam APIs:

- Facebook
- Instagram
- WhatsApp
- Spotify

Grande parte das aplicações Node.js trabalha com APIs.

## 🔹 REST e RESTful

### REST

Representational State Transfer

Conjunto de princípios para criação de APIs padronizadas.

### RESTful

Quando uma API segue corretamente os princípios REST.

## 🔹 Verbos HTTP

### GET

Buscar informações.

```text
GET /usuarios
```

### POST

Criar informações.

```text
POST /usuarios
```

### PUT

Atualizar informações.

```text
PUT /usuarios/1
```

### DELETE

Excluir informações.

```text
DELETE /usuarios/1
```

## 🔹 Express

Framework para Node.js.

Facilita a criação de:

- APIs
- Rotas
- Servidores web

Utiliza o módulo HTTP internamente.

É o framework mais popular do ecossistema Node.js.

## 🔹 Instalando o Express

Inicializar projeto:

```bash
npm init -y
```

Instalar:

```bash
npm install express
```

A dependência será adicionada ao package.json.

## 🔹 O que são Rotas?

Rotas representam os caminhos da aplicação.

Exemplos:

- /usuarios
- /produtos
- /pedidos

No Express, cada rota normalmente possui um verbo HTTP associado.

Exemplo:

```javascript
app.get("/usuarios");
app.post("/usuarios");
app.put("/usuarios/:id");
app.delete("/usuarios/:id");
```

## 🔹 Postman

Ferramenta utilizada para testar APIs.

Permite:

- Enviar requisições
- Testar endpoints
- Visualizar respostas
- Simular o comportamento do frontend

Download:

https://www.postman.com/downloads/

## 🔹 Resumo Final

Node.js → Executa JavaScript fora do navegador.

NPM → Gerencia pacotes.

Package.json → Configuração do projeto.

FS → Manipula arquivos.

HTTP → Cria servidores web.

API → Comunicação entre sistemas.

REST → Padrão para criação de APIs.

Express → Framework para construir APIs rapidamente.

Postman → Ferramenta para testar APIs.
