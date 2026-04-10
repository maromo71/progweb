let nome = "Maria"
function saudar(){
    if(true){
        let mensagem = "Ola " + nome
        console.log(mensagem)
    }
    console.log(mensagem) //nao definida
}
saudar()
console.log(mensagem)//nao definida
//deixado com erro de proposito