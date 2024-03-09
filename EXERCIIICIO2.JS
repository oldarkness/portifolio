class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      return `Olá, meu nome é ${this.nome} e sou um(a) ${this.cargo}.`;
    }
  
    trabalhar() {
      return `${this.nome} está realizando suas tarefas.`;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
      super(nome, idade, 'Gerente');
      this.departamento = departamento;
    }
  
    gerenciar() {
      return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
      super(nome, idade, 'Desenvolvedor');
      this.linguagem = linguagem;
    }
  
    programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
    }
  }
  
  function createEmployee() {
    try {
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const position = document.getElementById('position').value;
      const department = document.getElementById('department').value;
      const language = document.getElementById('language').value;
  
      if (!name || !age || !position) {
        throw new Error("Todos os campos obrigatórios devem ser preenchidos.");
      }
  
      let employee;
  
      if (position.toLowerCase() === 'gerente') {
        employee = new Gerente(name, age, department);
      } else if (position.toLowerCase() === 'desenvolvedor') {
        employee = new Desenvolvedor(name, age, language);
      } else {
        employee = new Funcionario(name, age, position);
      }
  
      displayOutput(employee.seApresentar());
      displayOutput(employee.trabalhar());
  
      if (employee instanceof Gerente) {
        displayOutput(employee.gerenciar());
      } else if (employee instanceof Desenvolvedor) {
        displayOutput(employee.programar());
      }
  
    } catch (error) {
      displayError(error.message);
    }
  }
  
  function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${message}</p>`;
  }
  
  function displayError(errorMessage) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p style="color: red;">Erro: ${errorMessage}</p>`;
  }