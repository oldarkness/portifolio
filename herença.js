class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log("o aparelho está ligado")
            return;
        }
        this.ligado = true;
    }
}

//Extend reaproveita o codigo
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

}

var s1 = new Smartphone("Samsung ", "Preto", "S20FE")
console.log(s1)
s1.ligar();
s1.ligar();
s1.ligar();
