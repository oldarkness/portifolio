// FUNCAO REGULAR

function multiplicar(x, y){
    return x * y
}

var a = multiplicar(3, 5);
console.log(a)

var b = multiplicar(4, 9);
console.log(b)

function somar(a, b, c){
    return a + b + c
}
//Caso queira colocar um valor padrao, na frente do abc coloque = e o valor que queira, por exemplo a= 31 , b= 27
var c = somar(2, 3, 7)
console.log(c)

var d = somar(5, 8, 27)
console.log(d)

// FUNCAO ANONIMA

var infoCal = function(a, b, c){
    return a + b + c
}

console.log(infoCal(2, 5 ,7))

//ARROW FUNCTION

const soma = (num1, num2) =>{
    return num1 + num2
}

console.log(soma(5, 7))

const numeros = [1, 2, 3, 4, 5, 6, 7]
const multiplication = numeros.map((num) => num * num)
console.log(multiplication)
//iterar um numero sobre o outro e realizar a multiplicacao usando arrow function

var listaProdutos = ["geladeira", "fogao", "air fryer"]
var listaEmMaiuscula = listaProdutos.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)

}

console.log(listaEmMaiuscula)

