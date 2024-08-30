// Solicita ao usuário a entrada de um valor
let x = parseInt(prompt("Digite um valor:"));
let valor = 1;
let divisores = 0;

if (x > 0) {
    // Laço para verificar divisores de 1 até x
    while (valor <= x) {
        if (x % valor === 0) {
            divisores++;
        }
        valor++;
    }
    
    if (divisores === 2) {
        console.log("O número " + x + " é primo.");
        alert("O número " + x + " é primo.");
    } else {
        console.log("O número " + x + " não é primo.");
        alert("O número " + x + " não é primo.");
    }
} else {
    console.log("Valor negativo ou igual a zero!");
    alert("Valor negativo ou igual a zero!");
}

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
