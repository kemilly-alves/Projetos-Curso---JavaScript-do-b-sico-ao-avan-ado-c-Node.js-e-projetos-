class ContaBancariaa {
    constructor(numeroConta, saldo) {

        if (typeof numeroConta !== "string" && typeof numeroConta !== "number") {
            throw new Error("Numero da conta precisa ser uma string ou um número");
        }

        if (typeof saldo !== "number" || saldo < 0) {
            throw new Error("O saldo precisa ser um número maior ou igual a zero");
        }

        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (typeof valor !== "number" || valor <= 0) {
            return "Valor inválido para depósito";
        }

        this.saldo += valor;
        return this.saldo;
    }

    sacar(valor) {
        if (typeof valor !== "number" || valor <= 0) {
            return "Valor inválido para saque";
        }

        if (valor > this.saldo) {
            return "Saldo insuficiente";
        }

        this.saldo -= valor;
        return this.saldo;
    }

    consultarSaldo() {
        return `O saldo na sua conta é de R$: ${this.saldo}`;
    }
}

let contaBancariaNovaa = new ContaBancariaa("ABC100", 500);

console.log(contaBancariaNovaa.depositar(100)); // 600
console.log(contaBancariaNovaa.sacar(50)); // 550

console.log(contaBancariaNovaa.sacar(700)); // Saldo insuficiente
console.log(contaBancariaNovaa.consultarSaldo()); // O saldo na sua conta é  de R$: 550