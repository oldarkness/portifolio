var valores = [8, 2, 1, 7, 9];
console.log("Reverse valores: " + valores.reverse());
//Inverte os valores

var arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.join('|'));
//Faz entrar um caractere em cada letra

var retirado = arr1.shift();
console.log(retirado)
//Retirou o 1 da list
//Caso eu executar apos esse retiro, vai mostrar sem o 1
console.log(arr1)
//Para saber a posição de um numero da lista:
console.log("Posicao do numero 3: " + arr1.indexOf(3))
//Acrescentar um item no fim 
arr1.push(7);
console.log(arr1)
//Retirar o ultimo numero do array
arr1.pop();
console.log(arr1)//Removeu o 7 que eu adicionei.
// EXERCICIO

const numeros = [5, 10, 15, 20, 25];
let algumNaoParOuMenorQueZero = false;

for (let i = 0; i < numeros.length; i++) {

  if (numeros[i] % 2 !== 0 || numeros[i] < 0) {

    algumNaoParOuMenorQueZero = true;

    break;
}

}

let todosDivisiveisPor3E5 = true;

for (let i = 0; i < numeros.length; i++) {

  if (numeros[i] % 3 !== 0 || numeros[i] % 5 !== 0) {

    todosDivisiveisPor3E5 = false;

    break;

  }

}

console.log("Pelo menos um número não é par ou menor que zero?",  algumNaoParOuMenorQueZero);

console.log("Todos os números são divisíveis por 3 e 5?", todosDivisiveisPor3E5);

