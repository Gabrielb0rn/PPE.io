// Atividade para testar no navegador

let x = parseInt(prompt("Digite um valor:"));
let valor = 1;
let divisores = 0;

if (x > 0) {
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