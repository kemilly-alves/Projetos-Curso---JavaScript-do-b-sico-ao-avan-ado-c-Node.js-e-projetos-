function somenteNumeroPar(num) {

    for(let i = num; i <= 10; i++) {

        if(i % 2 == 0) {
            console.log("O número é par " + i)
        } else if (i % 2 == 1){
            console.log("O número é ímpar " + i)
        } 

    }

}

somenteNumeroPar(1);