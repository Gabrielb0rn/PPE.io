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

    // Verifica se o número é primo
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
