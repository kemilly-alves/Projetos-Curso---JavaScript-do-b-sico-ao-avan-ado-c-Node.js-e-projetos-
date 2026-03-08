// Maior que (>) 
console.log(5 > 3 && 4 > 2);  //true
console.log(5 > 3 || 4 > 2);  //true
console.log(! (5 > 3)); //false
console.log(! (5 > 3 && 4 > 2)); //false
console.log(! (5 > 3 || 4 > 2)); //false

// Menor que (<) 
console.log(5 < 3 && 4 < 2);  //false
console.log(5 < 3 || 4 < 2);  //false
console.log(! (5 < 3)); //true
console.log(! (5 < 3 && 4 < 2)); //true
console.log(! (5 < 3 || 4 < 2)); //true

// Maior ou igual que (>=) 
console.log(5 >= 3 && 4 >= 2);  //true
console.log(5 >= 3 || 4 >= 2);  //true
console.log(! (5 >= 3)); //false
console.log(! (5 >= 3 && 4 >= 2)); //false
console.log(! (5 >= 3 || 4 >= 2)); //false

// Menor ou igual que (<=) 
console.log(5 <= 3 && 4 <= 2);  //false
console.log(5 <= 3 || 4 <= 2);  //false
console.log(! (5 <= 3)); //true
console.log(! (5 <= 3 && 4 <= 2)); //true
console.log(! (5 <= 3 || 4 <= 2)); //true

// Iugal a (==)
console.log(5 == 3 && 4 == 2);  //false
console.log(5 == 3 || 4 == 2);  //false
console.log(! (5 == 3)); //true
console.log(! (5 == 3 && 4 == 2)); //true
console.log(! (5 == 3 || 4 == 2)); //true

// Diferente de (!=)
console.log(5 != 3 && 4 != 2);  //true
console.log(5 != 3 || 4 != 2);  //true
console.log(! (5 != 3)); //false
console.log(! (5 != 3 && 4 != 2)); //false
console.log(! (5 != 3 || 4 != 2)); //false

// Identifico a (===)
console.log(5 === 3 && 4 === 2);  //false
console.log(5 === 3 || 4 === 2);  //false
console.log(! (5 === 3)); //true
console.log(! (5 === 3 && 4 === 2)); //true
console.log(! (5 === 3 || 4 === 2)); //true

// Não identico a (!==)
console.log(5 !== 3 && 4 !== 2);  //true
console.log(5 !== 3 || 4 !== 2);  //true
console.log(! (5 !== 3)); //false
console.log(! (5 !== 3 && 4 !== 2)); //false
console.log(! (5 !== 3 || 4 !== 2)); //false

console.log(!true); //false
console.log(! (5 > 3)); //false

// Resposta do professor ao exercício:
console.log(3 == 3 && 4 > 1);  //true 
console.log(4 <= 2 || "Matheus" == "Pedro");  //false 
console.log(!(2 === 2));  //false 

