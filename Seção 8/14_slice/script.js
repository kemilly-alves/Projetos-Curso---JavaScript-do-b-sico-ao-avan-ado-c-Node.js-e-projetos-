let nums = [0,1,2,3,4,5,6,7,8,9];

console.log(nums.slice(4,5)); // 4 (Ele para um [índice índice antes por isso não pegou o 5)
console.log(nums.slice(4,6)); // 4, 5 

console.log(nums.slice(2)); // 2,3,4,5,6,7,8,9 (Como eu não determinei um final ele pega ate o final do array)

console.log(nums.slice(-2)); // 8,9 (Podemos colocar numeros negativos, dessa forma ele pega de trás para frente)

console.log(nums.slice(3,-2)); // 3,4,5,6,7 (Dessa forma ele vai iniciar pelo 3 e pegar menos os dois últimos números)
