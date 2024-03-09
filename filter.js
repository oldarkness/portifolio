//FILTER
//recebe cada elemento do array e aplica uma instrução condicional a ele
// se esa condição for verdadeira, é colocado no array de resultado,se for falso nçao
//EXEMPLO:

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 ==0);
//FILTER SERVE PRA FILTRAR ALGO DE ACORDO COM O QUE EU QUERO
//se o item for divisilvel por dois aparece no resultado
console.log(evens)

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscarNumerosPares (value){
    if(value % 2 == 0)
    return value;
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var numerosPares = numeros.filter(buscarNumerosPares);
console.log(numerosPares);

var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5
    }
);

console.log(numerosFiltrados)

//OUTRA FORMA

function buscarValores(valor){
    return valor < 5
}

var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);


var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade:22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade:40}
]
var pessoasListagem = funcionarios.filter(
    function(valor){
        console.log(valor.nome);
        //return.valor.nome.length == 4 (pra retornar apenas o nome com 4 letras)
    }
)

console.log(pessoasListagem)