class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está realizando suas tarefas.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando na linguagem ${this.linguagem}.`);
    }
}


const gerenteJoao = new Gerente("João", 35, "Gerente de Projetos", "TI");
const desenvolvedorMaria = new Desenvolvedor("Maria", 28, "Desenvolvedora", "JavaScript");

gerenteJoao.seApresentar();
gerenteJoao.trabalhar();
gerenteJoao.gerenciar();

desenvolvedorMaria.seApresentar();
desenvolvedorMaria.trabalhar();
desenvolvedorMaria.programar();