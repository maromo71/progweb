//funcao recursiva para encontrar o fatorial de um numero
function fatorial(num){
    if(num ==0 || num == 1) return 1
    return num * fatorial(num -1)
}

console.log(fatorial(5))