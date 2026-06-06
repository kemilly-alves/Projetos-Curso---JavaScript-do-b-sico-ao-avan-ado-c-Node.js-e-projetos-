let elemento = document.querySelector('#titulo-principal');

console.log('lrgura: ' + elemento.offsetWidth); // considera as bordas
console.log('lrgura: ' + elemento.offsetHeight); 

console.log('largura: ' + elemento.clientWidth); // não considera as bordas
console.log('largura: ' + elemento.clientHeight);