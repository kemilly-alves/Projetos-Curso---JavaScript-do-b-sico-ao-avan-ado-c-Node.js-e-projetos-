class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        let calculoA = (this.largura * this.altura);
        return calculoA;
    }


    calcularPerimetro(){
        let calculoP = 2 * (this.largura + this.altura);
        return calculoP
    }

}

let retanguloNovo = new Retangulo(100, 50);

console.log(retanguloNovo.calcularArea()); 
console.log(retanguloNovo.calcularPerimetro()); 