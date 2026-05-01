class Carrinho {
    constructor(itensTotal, qtdTotal, valorTotal) {
        this.itensTotal = itensTotal;
        this.qtdTotal = qtdTotal;
        this.valorTotal = valorTotal;
    }
    
    adicionarItem(itensTotal) {
        this.itensTotal += itensTotal;
    }

    removerItem(itensTotal) {
        this.itensTotal -= itensTotal;
    }

    consultarItens() {
        return this.itensTotal;
    }
}

let item = new Carrinho(5);

item.adicionarItem(10);

console.log(item.itensTotal); // 15


item.removerItem(3);

console.log(item.itensTotal); // 12


console.log(item.itensTotal); // 12
