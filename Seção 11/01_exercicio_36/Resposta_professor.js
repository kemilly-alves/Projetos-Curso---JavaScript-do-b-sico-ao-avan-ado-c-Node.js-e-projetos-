class Conta1 {
    constructor(saldo1) {
        this.saldo1 = saldo1;
    }
    
    deposito(valor1) {
        this.saldo1 += valor1;
    }

    saque(valor1) {
        this.saldo1 -= valor1;
    }
}

let conta1 = new Conta1(1000);

conta1.deposito(1000);

console.log(conta1.saldo1); // 2000


conta1.saque(500);

console.log(conta1.saldo1); // 1500
