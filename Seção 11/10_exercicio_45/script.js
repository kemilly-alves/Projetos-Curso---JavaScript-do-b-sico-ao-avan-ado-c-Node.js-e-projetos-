class Livro {
  constructor(titulo, autor, disponivel) {
    // Validações
    if (typeof titulo !== "string" || titulo.trim() === "") {
      throw new Error("Título deve ser uma string válida");
    }

    if (typeof autor !== "string" || autor.trim() === "") {
      throw new Error("Autor deve ser uma string válida");
    }

    if (typeof disponivel !== "boolean") {
      throw new Error("Disponibilidade deve ser true ou false");
    }

    // Atributos
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = disponivel;
  }

  // Método para emprestar
  emprestar() {
    if (this.disponivel) {
      this.disponivel = false;
      return "Livro emprestado com sucesso";
    } else {
      return "Livro já está emprestado";
    }
  }

  // Método para devolver
  devolver() {
    if (!this.disponivel) {
      this.disponivel = true;
      return "Livro devolvido com sucesso";
    } else {
      return "Livro já está disponível";
    }
  }

  // Método para consultar
  consultarDisponibilidade() {
    return this.disponivel;
  }
}

let livro = new Livro("Dom Casmurro", "Machado de Assis", true);

console.log(livro.consultarDisponibilidade()); // true

console.log(livro.emprestar()); // Livro emprestado com sucesso

console.log(livro.consultarDisponibilidade()); // false

console.log(livro.emprestar()); // Livro já está emprestado

console.log(livro.devolver()); // Livro devolvido com sucesso

console.log(livro.consultarDisponibilidade()); // true