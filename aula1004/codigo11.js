function calcularIdade(){
    let idade = 25 //variaves de escopo interno
    let novaIdade = 0
    function exibirIdade(){
        novaIdade = idade + 1 //acessa varia esta no escopo acima
        console.log(idade)
    }
     
     exibirIdade()
     console.log(novaIdade)
}

calcularIdade()
