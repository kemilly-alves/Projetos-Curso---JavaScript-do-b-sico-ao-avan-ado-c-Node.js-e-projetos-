// let b = 2;

try {
    let a = 2 + b;
} catch(e) {
    console.log(e);
    // throw new Error(e);
} finally {
  console.log("Executou");
} 
// Vai exibir o erro e depois: Executou

console.log('teste'); // Teste


let bb = 2;

try {
    let aa = 2 + bb;
} catch(e) {
    console.log(e);
    // throw new Error(e);
} finally {
  console.log("Executou");
} 
// Não teremos erro então ira exibir somente o: Executou

console.log('teste'); // Teste


