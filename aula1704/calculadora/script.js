// Captura o elemento do visor pelo seu ID
const visor = document.getElementById('visor');

// Função para adicionar números e operadores ao visor
function adicionar(valor) {
    // O operador += concatena a string, adicionando o novo número ao lado do que já estava lá
    visor.value += valor;
}

// Função para limpar o visor
function limpar() {
    // Substitui o conteúdo atual por um texto vazio
    visor.value = '';
}

// Função para processar a conta e exibir o resultado
function calcular() {
    // Verifica se o visor está vazio para não processar nada
    if (visor.value === '') {
        return;
    }

    try {
        // A função eval processa a expressão matemática digitada no visor
        let resultado = eval(visor.value);
        
        // Verifica se o resultado é uma divisão por zero (Infinity) ou algo não definido
        if (resultado === undefined || !isFinite(resultado)) {
            visor.value = "Erro";
        } else {
            visor.value = resultado;
        }
    } catch (erro) {
        // O bloco catch captura expressões que dariam erro fatal no script (ex: 5++5)
        visor.value = "Erro";
    }
}