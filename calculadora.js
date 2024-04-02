var Calc = {
    soma: function(a,b) {
        return a + b;
    },
    subtracao: function(a,b){
        return a - b;
    },
    multiplicacao: function(a,b) {
        return a * b;
    },

    divisao: function(a,b){
        if (b != 0){
            return a / b;
            
        } else {
            console.log("Não é permitido dividir por zero")
            return null
        }
    }
}

console.log(Calc.soma(2,2));
console.log(Calc.subtracao(3,2));
console.log(Calc.divisao(10,2));
console.log(Calc.multiplicacao(2,3));