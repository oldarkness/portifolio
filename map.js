//PRA CADA ELEMENTO DO MEU ARRAY MULTIPLIQUE POR 3: USANDO MAP
let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});
console.log(modifiedArr);


var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var nums = numeros.map(function(valor){
    return valor *2
});
console.log(nums);


var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade:22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade:40}
]

nomes = funcionarios.map(pessoa=> pessoa.nome);
console.log(nomes);