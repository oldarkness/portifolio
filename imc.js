function criarPessoa(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        altura: a,
        peso: p,
        calculoIMC(){
            const indice = this.peso/(this.altura **2).toFixed(1)// para se ter uma casa decimal apenas
            if(indice < 18.5){
                console.log("Abaixo do peso")
            }else if(indice>= 18.5 && indice <24.9){
                console.log("Peso normal")
            }else if(indice >= 25 && indice <29.9){
                console.log("Acima do peso")
            }else if (indice >= 30 && indice <34.9){
                console.log("Obesidade grau 1")
            }else if(indice >35 && indice < 39.9){
                console.log("Obesidade grau 2")
            }else if(indice >40){
                console.log("Obesidade grau 3 ou mórbida")
            }

        }
    }
}

const p1 = criarPessoa("Rodrigo","Oliveira",1.83, 62);
p1.calculoIMC();