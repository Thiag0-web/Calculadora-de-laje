function calcularCirculo() {
    let raio = parseFloat(document.getElementById("raio").value);

    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, insira um valor válido para o raio.");
        return;
    }

    let area = Math.PI * Math.pow(raio, 2);
    let diametro = 2 * raio;

    let trilho = diametro / 0.42;
    let decimalTrilho = trilho - Math.floor(trilho);

    if (decimalTrilho <= 0.71) {
        trilho = Math.floor(trilho);
    } else {
        trilho = Math.ceil(trilho);
    }

    let totalIsopor = area * trilho;

    document.getElementById("resultado").value = 
        `A área do círculo é: ${area.toFixed(2)} m²\n` +
        `A quantidade de trilhos é: ${trilho}\n` +
        `Quantidade total de isopor: ${totalIsopor.toFixed(2)}`;
}