let funcaoAnonima = function() {
    console.log("Esta é uma funcao anonima")
}

funcaoAnonima()

let saudacao = () => {
    console.log("Ola turma")
}
saudacao()

const multiplicar = (a, b) => a * b;

console.log(multiplicar(5, 3))

const numeros = [37, 22, 14, 55, 56]

const elementos = numeros.map(num => num * 2)

const pares = numeros
    .filter(num => num % 2 === 0)
    .sort((a, b)=> a - b)
console.log(elementos)
console.log(pares)
