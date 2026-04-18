const cachorro = {
    raca: 'SRD',
    uivar: function() {
        console.log("Auuuuuuuuu")
    },
    rosnar: function() {
        console.log("grrrrr");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

console.log(cachorro.raca); // SRD

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca); // Pastor Alemão

console.log(cachorro.getRaca()); // Araça é Pastor Alemão
