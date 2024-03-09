/*let rlSync = require('readline-sync');
let nome = rlSync.question("Qual o seu nome? \n")
console.log(`Olá, ${nome}`)*/

let rlSync = require('readline-sync');
let nome = rlSync.question("Qual é o seu nome? \n")
let sobrenome = rlSync.question("Qual é o seu sobrenome")
let nomecompleto = `${nome} ${sobrenome}`
console.log(`Olá. ${nomecompleto}`)


