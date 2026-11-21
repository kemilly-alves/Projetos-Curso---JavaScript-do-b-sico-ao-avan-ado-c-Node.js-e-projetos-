let p = Promise.reject(new Error("Não deu certo"));

console.log("lalala");

p.then(value => console.log(value))
	.catch(reason => console.log("Falhou: " + reason));