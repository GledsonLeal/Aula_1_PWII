console.log("olá Mundo!")

// trabalhando com modulos
var SomaFunc = require('./funcaoSomar')// ./ está no mesmo diretório
var num = 10
var num2  = 20


console.log(`O valor da soma é: ${SomaFunc(num, num2)}`)

//**************************************************************************************************************** */
// Trabalhando com Strings

var nome = "Gledson"
var sobreNome = "Leal"

console.log('Meu nome completo é: ' + nome+ ' ' + sobreNome)// concatenando strings
        
console.log(`Meu nome completo é: ${nome} ${sobreNome}` )//evolução da linguagem. Tem que usar as aspas viradas ` `




var i = 1
var j = "1"
//var x  = 1
//var y = 1
//if (i == j) console.log(`o valor de j e i é igual`)
//if (i === j) console.log(`o valor e j e i é extritamente igual`)

//if (x == y) console.log(`o valor de x e y é igual`)
//if (x === y) console.log(`o valor e x e y é extritamente igual`)



/*
function abs(x){
    if (x >=0 ){
        return x
    }
    else{
        return -x
    }
    
}
var result = abs(4)
console.log(result)
*/