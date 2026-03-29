// Função recursiva que recebe um número n e imprime se ele é par ou ímpar.
// A cada chamada, o valor de n é reduzido até atingir a condição de parada.

function recursao(n) {

  // Condição de parada: quando n for menor que 3 (ou seja, 2 ou 1)
  if (n - 1 < 2) {
    console.log("Recursão parou");
  }

  // Se for ímpar, diminui 1
  else if (n % 2 != 0) {
    console.log("Número ímpar: " + n);
    recursao(n - 1);
  }

  // Se for par, diminui 2
  else {
    console.log("Número par: " + n);
    recursao(n - 2);
  }
}

recursao(39);
recursao(10);
recursao(55);