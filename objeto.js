// PRIMEIRA FORMA DE CRIAR OBJETO

const pessoa = {
    nome: "Lucas",
    sobrenome:"Silva"
}

console.log(pessoa['sobrenome'])


//SEGUNDA FORMA DE CRIAR OBJETO

const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sobrenome = "Maria"

console.log(funcionario.nome)
console.log(funcionario.sobrenome)

//TERCEIRA FORMA 

function criarPessoa(nome,sobrenome){
    return{nome,
        sobrenome,
        get nomeCompleto(){
            return`${this.nome} ${this.sobrenome}`
        }
    
    
    
    }
}

const p1= criarPessoa("Arthur", "Silva ")
const p2= criarPessoa("Joao", "Fernanda")

console.log(p1.nomeCompleto)
console.log(p2)
