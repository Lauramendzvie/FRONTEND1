
// EXERCÍCIO 1 - Par/Ímpar e múltiplo de 3 ou 5

let numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {

    alert("O número é par.");

} else {

    alert("O número é ímpar.");

}

if (numero % 3 === 0) {

    alert("É múltiplo de 3.");

} else {

    alert("Não é múltiplo de 3.");

}

if (numero % 5 === 0) {

    alert("É múltiplo de 5.");

} else {

    alert("Não é múltiplo de 5.");

}

// ------------------------------------------------------------

// EXERCÍCIO 2 - Maior entre três números

let a = Number(prompt("Digite o primeiro número:"));

let b = Number(prompt("Digite o segundo número:"));

let c = Number(prompt("Digite o terceiro número:"));

let maior = a;

if (b > maior) maior = b;

if (c > maior) maior = c;

alert("O maior número é: " + maior);

// ------------------------------------------------------------

// EXERCÍCIO 3 - Classificação por idade

let idade = Number(prompt("Digite sua idade:"));

if (idade < 0) {

    alert("Idade inválida");

} else if (idade <= 12) {

    alert("Criança");

} else if (idade <= 17) {

    alert("Adolescente");

} else if (idade <= 64) {

    alert("Adulto");

} else {

    alert("Idoso");

}

// ------------------------------------------------------------

// EXERCÍCIO 4 - Conversor Celsius ↔ Fahrenheit

let opcao = prompt("Digite 1 para Celsius→Fahrenheit ou 2 para Fahrenheit→Celsius:");

let valor = Number(prompt("Digite o valor da temperatura:"));

if (opcao === "1") {

    let fahrenheit = (valor * 9/5) + 32;

    alert(valor + "°C = " + fahrenheit + "°F");

} else if (opcao === "2") {

    let celsius = (valor - 32) * 5/9;

    alert(valor + "°F = " + celsius + "°C");

} else {

    alert("Opção inválida");

}

// ------------------------------------------------------------

// EXERCÍCIO 5 - Multa por velocidade

let velocidade = Number(prompt("Digite a velocidade do carro:"));

if (velocidade <= 80) {

    alert("Velocidade dentro do limite.");

} else {

    let excesso = velocidade - 80;

    let multa = excesso * 5;

    alert("Você foi multado! Valor: R$" + multa);

}

// ------------------------------------------------------------

// EXERCÍCIO 6 - Preço da passagem por km

let distancia = Number(prompt("Digite a distância da viagem em km:"));

if (distancia <= 200) {

    let preco = distancia * 0.50;

    alert("Preço da passagem: R$" + preco);

} else {

    let preco = distancia * 0.45;

    alert("Preço da passagem: R$" + preco);

}

// ------------------------------------------------------------

// EXERCÍCIO 7 - Pode votar?

let anoNascimento = Number(prompt("Digite o ano do seu nascimento:"));

let anoAtual = new Date().getFullYear();

let idade2 = anoAtual - anoNascimento;

if (idade2 < 16) {

    alert("Não pode votar.");

} else if (idade2 < 18) {

    alert("Voto opcional.");

} else {

    alert("Voto obrigatório.");

}

// ------------------------------------------------------------

// EXERCÍCIO 8 - Ano bissexto

let ano = Number(prompt("Digite um ano:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {

    alert(ano + " é bissexto.");

} else {

    alert(ano + " não é bissexto.");

}
 