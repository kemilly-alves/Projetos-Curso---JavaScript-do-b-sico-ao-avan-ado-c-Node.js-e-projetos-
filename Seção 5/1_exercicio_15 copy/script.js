// Exercício - Remova os números pares
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []

for(let i = 0; i < arr.length; i++) {

    if(arr[i] % 2 != 0) {
        semPares.push(arr[i])
    }

}

console.log(semPares)


// Usando o método filter para remover os números pares

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares1 = arr1.filter(num => num % 2 !== 0)

console.log(semPares1)


// Usando while para remover os números pares

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares2 = []

let i = 0

while (i < arr2.length) {

    if (arr2[i] % 2 != 0) {
        semPares2.push(arr2[i])
    }

    i++
}

console.log(semPares2)


