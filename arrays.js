var valores = [8,1,7,2,9];

console.log(valores[0]);
//Fiz um array, e quis saber em que posicao ele estava

for(var pos = 0; pos < valores.length; pos++){
    console.log("Posicao: " + pos + " Valor: " + valores[pos]);
}

//Como saber a média entre os valores

var soma = 0;

for (var pos = 0; pos < valores.length; pos++){
    soma += valores[pos];

}
var media = soma/valores.length;

console.log(media);