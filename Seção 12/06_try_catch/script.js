// let b = 2;

try {
    let a = 2 + b;
} catch(e) {
    console.log(e);
}

console.log('teste');


try {
    let aa = 2 + bb;
} catch(e) {
    console.log(e);
    throw new Error(e);
}

console.log('teste');
