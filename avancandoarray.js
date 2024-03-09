//SPLICE
//Array.splice(2); todos os itens a partir do indice 2 são removidos
//exemplos:
let array = [1, 2, 3, "Seila", 4.13, true];
array.splice(2, 1)
//no indice 2 um item é removido
console.log(array)
//Foi removido o 3 como pedido emquestão
var arr1 = [1, 2, 3, 4, 5, 6, 7];
arr1.splice(4, 2)
//começa a retirar os indices seguintes, o numero 2, se eu colocasse o 3 removeria o 7 tambem
console.log(arr1)

//SLICE
//CORTA UMA PARTE DO ARRAY E O RETORNA COMO UM NOVO ARRAY. ISSO NAO MODIFICA O ARRAY ORIGINAL
//DE, ATÉ -- EXEMPLO:
let arr2 = [1, 2, 3, "hello world", 4.12, true];
let newArray = array.slice(0,3);
//CONCAT
//JUNTA DUAS PARTES E APOS ESSA JUNCAO RETORNA UMA NOVA , PODE SER USADO PRA STRINGS OU ARRAYS EX:
let titulo = "Dr. ";
let nome = "Joao da Silva";
let nome_completo = titulo.concat(nome);
console.log(nome_completo);

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log(array3);
