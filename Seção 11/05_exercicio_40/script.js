// class ContaBancaria {
//     constructor(saldoContaCorrente, saldoContaPoupanca, jurosDaPoupanca) {
//         this.saldoContaCorrente = saldoContaCorrente;
//         this.saldoContaPoupanca = saldoContaPoupanca;
//         this.jurosDaPoupanca = jurosDaPoupanca;
//     }
    
//     depositoContaCorrente(valor) {
//         let valorDoDeposito = valor;

//         if (valorDoDeposito >= 1) {
//             this.saldoContaCorrente += valor;
//         } else {
//             this.saldoContaCorrente;
//         }
//     }

//     saqueContaCorrente(valor) {
//         let valorDoSaque =  valor;

//         if (valorDoSaque >= 1) {
//             this.saldoContaCorrente -= valor;
//         } else {
//             this.saldoContaCorrente;
//         }
//     }

//     transferirSaldoEntreContas (valor) {
//         let valorDaTranferencia = valor;

//         if (valorDaTranferencia >= 1) {
//             this.saldoContaPoupanca -= valor;
//             this.saldoContaCorrente += valor;
//         }
//     }
// }

// let contaBancariaNova = new ContaBancaria (20, 100, 2);


// console.log(contaBancariaNova);

// // contaBancariaNova.depositoContaCorrente(30);

// // console.log(contaBancariaNova);

// // contaBancariaNova.saqueContaCorrente(10);

// // console.log(contaBancariaNova);

// // contaBancariaNova.transferirSaldoEntreContas(5);

// // console.log(contaBancariaNova);


// let contaEspecial = contaBancariaNova;

// console.log(contaEspecial);

// function dobrarPorcentagem(valor) {
//     let valorDobrado = valor;
//     console.log(valor * 2);
// }

// dobrarPorcentagem(10);

// // contaEspecial.jurosDaPoupanca.dobrarPorcentagem;

// console.log(contaEspecial.jurosDaPoupanca);