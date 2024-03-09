// REDUCE
//REDUZIR UM UNICO VALOR

var numeros = [1, 2, 3, 4, 5, 6];
var total = numeros.reduce(function(total, numero){
    return total + numero;
},0);
console.log(total);

//FOR EACH

let foods = ['bread', 'rice', 'meat', 'pizza'];
foods.forEach(function(food){
    console.log(food)
})   

var a = [10, 20, 30, 40, 50, 60];
var tot = 0;
a.forEach(valor=> console.log(valor));
a.forEach(valor=>{
    tot += valor;
})
console.log(tot)

//JEITO MAIS FACIL DE FAZER O FOR