class Retanguloo {
    constructor(largura, altura) {
        if (largura <= 0 || altura <= 0) {
            throw new Error("Largura e altura devem ser maiores que zero");
        }

        this.largura = largura;
        this.altura = altura;
    }

    calcularAreaa() {
        return this.largura * this.altura;
    }

    calcularPerimetroo() {
        return 2 * (this.largura + this.altura);
    }
}

let retanguloNovoo = new Retanguloo(100, 50);

console.log(retanguloNovoo.calcularAreaa()); // 5000
console.log(retanguloNovoo.calcularPerimetroo()); // 300
