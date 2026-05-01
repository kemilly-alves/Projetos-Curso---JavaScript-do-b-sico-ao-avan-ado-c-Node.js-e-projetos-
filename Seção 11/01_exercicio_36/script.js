class ContaInter {
    constructor(saldo) {
        this.saldo = saldo;
    }
    
    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        this.saldo -= valor;
    }

    consultarSaldo() {
        return this.saldo;
    }
}

let conta = new ContaInter(100);

conta.deposito(10);

console.log(conta.saldo); // 110


conta.saque(30);

console.log(conta.saldo); // 80


console.log(conta.saldo); // 80
