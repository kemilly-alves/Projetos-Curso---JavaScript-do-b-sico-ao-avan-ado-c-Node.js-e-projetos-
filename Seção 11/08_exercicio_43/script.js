class ContaBancaria {
    constructor(numeroConta, saldo) {
        if (typeof numeroConta !== "string" && typeof numeroConta !== "number") {
        throw new Error("Numero da conta precisa ser uma string ou um número");
        } if (typeof saldo !== "number") {
        throw new Error("O saldo na conta precisa ser um número");
        }

        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

     depositar(valor) {
        return this.saldo = this.saldo += valor;
     }   

    sacar(valor) {

        if(valor <= this.saldo){
            return this.saldo = this.saldo -= valor;
        } else{
            return 'Saldo insuficiente na conta para realizar o saque';
        }
    }   


    consultarSaldo() {
        return 'O saldo na sua conta é de R$: ' + this.saldo;
    }
}

let contaBancariaNova = new ContaBancaria("ABC100", 500);

console.log(contaBancariaNova);

console.log(contaBancariaNova.depositar(100)); // 600
console.log(contaBancariaNova.sacar(50)); // 550

console.log(contaBancariaNova.sacar(700)); // Saldo insuficiente na conta para realizar o saque
console.log(contaBancariaNova.consultarSaldo()); // O saldo na sua conta é de R$: 550
