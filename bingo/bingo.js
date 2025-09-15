let btn = document.querySelector("button");
let reset = document.querySelector("#reset");
let listaNumeros = document.querySelector("#listaNumeros");
let quadradoNumero = document.querySelector(".quadradonumero");

let sorteados = [];

function letras(numero) {
    if (numero >= 1 && numero <= 15) return "B";
    if (numero >= 16 && numero <= 30) return "I";
    if (numero >= 31 && numero <= 45) return "N";
    if (numero >= 46 && numero <= 60) return "G";
    if (numero >= 61 && numero <= 75) return "O";
}

let celulas = document.querySelectorAll("td");

celulas.forEach(cel => {
    cel.style.visibility = "hidden";
});

btn.addEventListener("click", function(){
    if (sorteados.length === 75) {
        alert("Todos os números já foram sorteados!");
        return;
    }
    let numero = Math.floor(Math.random() * 75) + 1;

    while (sorteados.includes(numero)) {
        numero = Math.floor(Math.random() * 75) + 1;
    }

    sorteados.push(numero);

    let cel = Array.from(celulas).find(c => Number(c.textContent) === numero);

    if (cel) {
        cel.style.visibility = "visible";
        let cor = "#af77ff";
        cel.style.backgroundColor = cor;
        cel.style.color = "white";

        let item = document.createElement("li");
        item.textContent = letras(numero) + numero;
        listaNumeros.appendChild(item);

        quadradoNumero.innerHTML = `<span>${letras(numero)} ${numero}</span>`;
        let span = quadradoNumero.querySelector("span");
        span.style.transform = "scale(0)";
        span.style.transition = "transform 0.3s ease-out";
        setTimeout(() => {
            span.style.transform = "scale(1)";
        }, 10);
    }
    console.log("Número sorteado:", numero);
});

reset.addEventListener("click", function(){
    console.clear();
    sorteados = [];
    celulas.forEach(cel => {
        cel.style.backgroundColor = "";
        cel.style.color = "";
        cel.style.visibility = "hidden";
    });
    listaNumeros.innerHTML = "";
    quadradoNumero.innerHTML = "";
});
