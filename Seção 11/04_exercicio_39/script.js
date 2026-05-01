class CarroUno {
    constructor(marca, cor, gasolinaRestante, consumo, pedagio) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
        this.pedagio = pedagio;
    }
    
    dirigirCarro(km) {
        let litrosConsumidos = km / this.consumo;

        if (litrosConsumidos > this.gasolinaRestante) {
            console.log("Gasolina insuficiente!");
        } else {
            this.gasolinaRestante -= litrosConsumidos;
        }
    }

    abastecerCarro(l) {
        this.gasolinaRestante += l;
    }

    pagouPedagio(valor) {
        if (valor > 0) {
            this.pedagio += valor;
            console.log("Pedágio pago:", valor);
        } else {
            console.log("Nenhum pedágio pago");
        }
    }
}

let carroNovo = new CarroUno('VW', 'Cinza', 100, 14, 0);

carroNovo.dirigirCarro(100);
carroNovo.abastecerCarro(10);
carroNovo.pagouPedagio(5);

console.log(carroNovo);

