var nome = "Rodrigo da silva pinto"
var tamanho = nome.length;
console.log(tamanho)
resultado = tamanho > 10 ? "belo nome" : "nome pequeno nengue"; 
console.log(resultado)

//Colocar em caps
var res = nome.toLocaleUpperCase();
console.log(res)

var peni = "um peni"
var procurar = peni.indexOf("peni");
console.log(procurar);

var cortado = peni.slice(0, 7)
console.log(cortado)

//Pra cortar e continuar é igual com o slice so que no lugar do 0 inicia da palavra que voce quer se colcoar slice(2,) deixar in-
//completo, ele pega a frase a partir do indice que voce indicou



//Verificar na frase se tem ola, depoiis de olá troca por pessoal, pega tudo isso e bota em caixa alta

var frase = 'Ola mundo'

if(frase.startsWith('Ola')){
    let sub = frase.substring(4,)
    let novastring = sub.replace('mundo', 'pessoal')
    let novastringmaiuscula = novastring.toLocaleUpperCase();
    console.log(novastringmaiuscula)
}




//MAIS METODOS


