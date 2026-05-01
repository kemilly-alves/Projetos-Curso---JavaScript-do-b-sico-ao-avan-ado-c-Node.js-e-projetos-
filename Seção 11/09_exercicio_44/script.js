class Voo {
    constructor(codigoVoo, origem, destino, assentosDisponiveis) {

        if (typeof codigoVoo !== "string" && typeof codigoVoo !== "number") {
            throw new Error("Código do voo deve ser string ou número");
        }

        if (typeof origem !== "string" || origem.trim() === "") {
            throw new Error("Origem deve ser uma string válida");
        }

        if (typeof destino !== "string" || destino.trim() === "") {
            throw new Error("Destino deve ser uma string válida");
        }

        if (typeof assentosDisponiveis !== "number" || assentosDisponiveis < 0) {
            throw new Error("Assentos disponíveis deve ser um número válido");
        }

        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    }

    reservarAssento() {
        if (this.assentosDisponiveis > 0) {
            this.assentosDisponiveis--;
            return "Assento reservado com sucesso";
        } else {
            return "Não há assentos disponíveis";
        }
    }

    consultarAssentosDisponiveis() {
        return this.assentosDisponiveis;
    }
}

let voo = new Voo("AZ123", "Goiânia", "São Paulo", 2);

console.log(voo.consultarAssentosDisponiveis()); // 2

console.log(voo.reservarAssento()); // sucesso
console.log(voo.reservarAssento()); // sucesso
console.log(voo.reservarAssento()); // não há assentos

console.log(voo.consultarAssentosDisponiveis()); // 0