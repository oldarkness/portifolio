class ContaCliente{
    constructor(numeroConta, Saldo, Debito, Credito){
        this.numeroConta = numeroConta;
        this.Saldo = Saldo;
        this.Debito = Debito;
        this.Credito = Credito;
    }


    calcularSaldoAtual(){
        return this.Saldo - this.Debito + this.Credito
    }

    verificarSaldo(){
        const saldoAtual = this.calcularSaldoAtual()
        if(saldoAtual >= 0){
            alert("Saldo positivo R$ " + saldoAtual)
        }else{
            alert("Saldo negativo R$ " + saldoAtual)
        }
    }
}

let numeroConta = prompt("Digite o número da conta do cliente")
let Saldo = parseFloat(prompt("Digite o saldo do cliente"))
let Debito = parseFloat(prompt("Digite o debito do cliente"))
let Credito = parseFloat(prompt("Digite o credito do cliente"))

let conta = new ContaCliente(numeroConta, Saldo, Debito, Credito)
conta.verificarSaldo()