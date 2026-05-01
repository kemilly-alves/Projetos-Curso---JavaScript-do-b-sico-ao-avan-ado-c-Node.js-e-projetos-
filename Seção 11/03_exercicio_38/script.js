class EnderecoClient {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    
    set setRua (rua) {
        this.rua = rua
    }

        set setBairro (bairro) {
        this.bairro = bairro
    }

        set setCidade (cidade) {
        this.cidade = cidade
    }

        set setEstado (estado) {
        this.estado = estado
    }
}

let endClient = new EnderecoClient('Rua BR1', 'Cidade Jardim', 'Goiânia', 'Goias');

endClient.setRua = 'Rua São João';
endClient.setBairro = 'Itaberai';
endClient.setCidade = 'Goiânia';
endClient.setEstado = 'GO';

console.log(endClient);
