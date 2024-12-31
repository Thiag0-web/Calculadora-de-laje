function calcular() {
    let primeiroLado = parseFloat(document.getElementById("primeiroLado").value);
    let segundoLado = parseFloat(document.getElementById("segundoLado").value);

    if (isNaN(primeiroLado) || isNaN(segundoLado) || primeiroLado <= 0 || segundoLado <= 0) {
        alert("Por favor, insira valores válidos para os lados.");
        return;
    }

    let metroQuadrado = primeiroLado * segundoLado;
    let maiorLado = Math.max(primeiroLado, segundoLado);
    let ladoMenor = Math.min(primeiroLado, segundoLado);

    let trilho = maiorLado / 0.42;
    let totalIsopor = ladoMenor * Math.ceil(trilho);

    let trilhoExibicao = trilho.toFixed(2);

    if (trilhoExibicao.endsWith(".71")) {
        trilhoExibicao = Math.ceil(trilho).toFixed(2); // Arredonda para cima
    } else {
        trilhoExibicao = Math.floor(trilho).toFixed(2); // Arredonda para baixo
    }

    document.getElementById("resultado").value = 
        `A área quadrada é: ${metroQuadrado.toFixed(2)} m²\n` +
        `A quantidade de trilhos é: ${trilhoExibicao}\n` +
        `Quantidade total de isopor: ${totalIsopor.toFixed(2)}`;
}
