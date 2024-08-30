

=// Função do site abaixo

function verificarPrimo() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoDiv = document.getElementById("resultado");

    if (numero <= 1) {
        resultadoDiv.innerText = "Por favor, insira um número maior que 1.";
        return;
    }

    let ehPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        resultadoDiv.innerText = `O número ${numero} é primo.`;
    } else {
        resultadoDiv.innerText = `O número ${numero} não é primo.`;
    }
}
